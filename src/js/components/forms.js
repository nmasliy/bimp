import { validateForms } from '../functions/validate-forms';
const buttons = document.querySelectorAll('[data-modal-open]');
const requestInput = document.querySelector('.input-request');
const planBtn = document.querySelector('.plans__btn[data-modal-open]');
const inputPrice = document.querySelector('.input-price');

planBtn?.addEventListener('click', () => {
  inputPrice.value = document.querySelector('input[name="plan"]:checked').value;
})

buttons.forEach(button => {
  button.addEventListener('click', () => {
    requestInput.value = button.dataset.title.trim();
  })
})


const isPageEn = document.body.classList.contains('page-en');

const rules = [
  {
    ruleSelector: '.form__input--name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: isPageEn ? "Please fill in your name!" : "Заповніть ім'я!"
      },
      {
        rule: 'customRegexp',
        value: /^([^0-9\\.!"'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]*)$/,
        errorMessage: isPageEn ? "Please enter a valid name!" : "Заповніть коректно ім'я!"
      },
    ]
  },
  {
    ruleSelector: '.form__input--tel',
    tel: true,
    telError: isPageEn ? "Please enter a valid phone number!" : "Заповніть коректно телефон!",
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: isPageEn ? "Please fill in your phone number!" : "Заповніть телефон!"
      }
    ]
  },
  {
    ruleSelector: '.form__input--email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: isPageEn ? "Please fill in your email!" : 'Заповніть Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage:  isPageEn ? "Please enter a valid email address!" : 'Заповніть коректно Email!'
      },
      {
        rule: 'customRegexp',
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        errorMessage:  isPageEn ? "Please enter a valid email address!" : 'Заповніть коректно Email!'
      }
    ]
  },
];

const rulesNew = [
  {
    ruleSelector: '.form__input--email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: isPageEn ? "Please fill in your email!" : 'Заповніть Email!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage:  isPageEn ? "Please enter a valid email address!" : 'Заповніть коректно Email!'
      },
      {
        rule: 'customRegexp',
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        errorMessage:  isPageEn ? "Please enter a valid email address!" : 'Заповніть коректно Email!'
      }
    ]
  },
];


const afterSend = () => {

}

validateForms('#modal-form .form', rules, afterSend);
validateForms('.new__form', rulesNew, afterSend);

