import intlTelInput from 'intl-tel-input';
import JustValidate from 'just-validate';
import modals from '../components/modals';

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const iti = intlTelInput(telSelector, {
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      preferredCountries: ['ua', 'ru', 'kz', 'uz'],
      initialCountry: "ua",
      autoHideDialCode: false,
      formatOnDisplay: true,
      separateDialCode: true,
      nationalMode: false
    });

    telSelector.addEventListener('input', (e) => {
      telSelector.dataset.value = iti.getNumber();
    })

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            return (telSelector.value.trim() && iti.isValidNumber()) === true;
          },
          errorMessage: item.telError,
        });
      }
    }
  }

  const validation = new JustValidate(selector, {
    errorLabelCssClass: 'form__error',
    errorFieldCssClass: 'form__input--invalid'
  });


  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    if (telSelector) {
      telSelector.value = telSelector.dataset.value;
    }

    let formData = new FormData(ev.target);

    const body = {
      name: formData.get('Имя'),
      phone: formData.get('Телефон'),
      email: formData.get('Почта'),
      plan: formData.get('Тариф'),
      request: formData.get('Заявка'),
    };


    fetch('https://app.bimpsoft.com/org2/landing/requestDemo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Data received:', data);
        console.log(body);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    ev.target.reset();
    modals.open('modal-thanks');
  })

};
