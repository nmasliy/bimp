import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

document.body.addEventListener('mousemove', e => {
  document.querySelector(':root').style.setProperty('--clientX', `${e.clientX}px`);
  document.querySelector(':root').style.setProperty('--clientY', `${e.clientY}px`);
})


initBaseAnimations(); 

function initBaseAnimations() {

  // animateItems('.problems__right', '.problems__list li');
  // animateItems('.support__info', '.support__list li');

  animatePulse('.problems', '.problems__items > div');

  animateIcons('.directions__list', '.directions__icon img');

	animateCounters('.team', '.team__num');

  if (ScrollTrigger.isTouch !== 1) {
    animateBlocks('section:not(:first-child)');
  }

	function animateCounters(trigger, selector) {
		const nums = document.querySelectorAll(selector);

      nums.forEach(num => {
        const endValue = +num.dataset.value;
        let counter = {
          value: 0
        }

        gsap.to(counter,
          {
            value: endValue,
            duration: 2,
            onUpdate: () => {
              num.textContent = Math.round(counter.value);
            },
						scrollTrigger: {
							trigger: trigger,
							start: '150px bottom',
						},
      }); })
	}
	

	function animateIcons(trigger, selector) {
    const itemNodes = document.querySelectorAll(selector);
    let delay = 0.2;
    
    for(let i = 0; i < itemNodes.length; i++) {
      gsap.from(
        itemNodes[i],
        {
          scale: 0,
					opacity: 0,
          delay: delay,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: trigger,
            start: '150px bottom',
          },
        }
      );
      delay += 0.3;
    }
  }
  
  function animatePulse(trigger, selector) {
    const itemNodes = document.querySelectorAll(selector);
    let delay = 0;
    
    for(let i = 0; i < itemNodes.length; i++) {
      gsap.from(
        itemNodes[i],
        {
          delay: delay,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: trigger,
            start: '150px bottom',
          },
					onEnter: () => {
						itemNodes[i].classList.add('is-pulsing');
					}
        }
      );
      delay += 0.8;
    }
  }

  function animateBlocks(selector) {
    const itemNodes = document.querySelectorAll(selector);
    
    for(let i = 0; i < itemNodes.length; i++) {
      gsap.from(
        itemNodes[i],
        {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: itemNodes[i],
            start: '200px bottom',
          },
        }
      );
    }
  }

  function animateItems(trigger, selector) {
    const itemNodes = document.querySelectorAll(selector);
    let delay = 0;
    
    for(let i = 0; i < itemNodes.length; i++) {
      gsap.from(
        itemNodes[i],
        {
          opacity: 0,
          y: 50,
          delay: delay,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: trigger,
            start: '150px bottom',
          },
        }
      );
      delay += 0.3;
    }
  }
}
