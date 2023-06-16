import { gsap } from 'gsap';
import Stickyfill from 'stickyfilljs';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


initManagementAnimations();
// initStickyCards();

function initStickyCards() {
  if (window.innerWidth <= 1024) {
    var elements = document.querySelectorAll('.management__item');
    Stickyfill.add(elements);
    Stickyfill.forceSticky()
  }
}

function initManagementAnimations() {
  const managementHeight = document.querySelector('.management').offsetHeight;
  const itemsWrapper = document.querySelector('.management__items')

  const images = gsap.utils.toArray('.management__img-item:not(:last-child)');
  const texts = gsap.utils.toArray('.management__item');

  const initialItemText = texts[0].querySelector('.management__text');

  // if (ScrollTrigger.isTouch === 1) {
  if (window.innerWidth <= 1024) {
    const items = gsap.utils.toArray('.management__item');
    
    // gsap.set(".management__item", { zIndex: (i, target, targets) => targets.length - i });
    
    items.forEach((item, i) => {
      item.classList.add('is-active');

      // var tl = gsap.timeline({
        
      //   scrollTrigger: {
      //     trigger: item,
      //     start: () => "top -" + (managementHeight*(i+0.8)),
      //     end: () => "+=" + item.offsetHeight,
      //     toggleActions: "play none reverse none",
      //     invalidateOnRefresh: true,     
      //   }
      // })

      // tl
      // .to(item, { duration: 0.33, opacity: 1, y:"-100%" })  
    });
    
    

    // const itemsHeight = calculateSectionHeight();
    // const imgWrapper = document.querySelector('.management__img');

    // gsap.to('.management__inner', {
    //   scrollTrigger: {
    //     trigger: ".management",
    //     start: () => "top top",
    //     end: () => "+=" + document.querySelector('.management').offsetHeight,
    //     pin: true,
    //     markers: true
    //   }
    // })

    
    return;
  }
  
  function initDesktop() {

    gsap.set(".management__img-item", { zIndex: (i, target, targets) => targets.length - i });

    images.forEach((image, i) => {
      var tl = gsap.timeline({
        
        scrollTrigger: {
          trigger: ".management",
          start: () => "top -" + (managementHeight*(i+0.8)),
          end: () => "+=" + managementHeight,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,     
        }
      })
      
    });
    
    
    gsap.set(".management__item", { zIndex: (i, target, targets) => targets.length - i });
    
    
    gsap.to(initialItemText, {height: initialItemText.scrollHeight, opacity: 1})
  
    let itemsOffset = window.innerWidth <= 1024 ? 18 : 30;
    
    gsap.to(itemsWrapper, {
      y: `-${texts.length * itemsOffset}`,
      scrollTrigger: {
        trigger: '.management',
        start: () => "top top",
        end: () => "+=" + ((images.length) * managementHeight),
        scrub: true,
        // markers: true
      }
    })
    
    texts.forEach((text, i) => {
      
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".management",
          start: () => "top -" + (managementHeight*i),
          end: () => "+=" + managementHeight,
          // scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
          onEnter: () => {
            changeImages(); 
            updateOffset();
          },
          onEnterBack: () => {
            changeImages(); 
            updateOffset();
          },
        }
        
      })
      
      tl
      .to(text, { duration: 0.33, opacity: 1, y:"0%" })  
      .to(text, { duration: 0.33, opacity: 1, y:"0" }, 0.66)
      ;
  
      function updateOffset() {
        const active = document.querySelector('.management__item.is-active'); 
        const id = active.dataset.tabs; 
  
        if (+id > 1) {
          itemsWrapper.classList.add('is-started');
        } else {
          itemsWrapper.classList.remove('is-started');
        }
        if (+id >= texts.length) {
          itemsWrapper.classList.add('is-ended');
        } else {
          itemsWrapper.classList.remove('is-ended');
        }
  
      }
      
      function changeImages() {
        const activeImg = document.querySelector('.management__img-item.is-active'); 
        const activeItem = document.querySelector('.management__item.is-active'); 
        const currentId = text.dataset.tabs;
        const currentImg = document.querySelector('.management__img-item[data-tabs="' + currentId + '"]'); 
  
        const activeInnerText = activeItem.querySelector('.management__text');
        const innerText = text.querySelector('.management__text');
  
        
        if (activeItem && activeItem.dataset.tabs != currentId) {
          activeItem.classList.remove('is-active');
          
          text.classList.add('is-active');
          gsap.to(activeInnerText, {height: 0, opacity: 0})
          gsap.to(innerText, {height: innerText.scrollHeight, opacity: 1})
        }
  
        if (activeImg && activeImg.dataset.tabs != currentImg.dataset.tabs) {
          activeImg.classList.remove('is-active');
          gsap.to(activeImg, { opacity: 0 })
          
          currentImg.classList.add('is-active');
          gsap.to(currentImg, { opacity: 1 })
        }
  
      }
    });
  
  }

  initDesktop();
  
  ScrollTrigger.create({
    trigger: ".management",
    // scrub: true,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length - 0.5) * managementHeight),
    // end: () => "+=" + itemsHeight,
    invalidateOnRefresh: true,
  });

  function calculateSectionHeight() {
    const elements = document.querySelectorAll('.management__item');
    let height = 0;

    elements.forEach(item => {
      height += item.offsetHeight;
    })
    return height;
  }
}

