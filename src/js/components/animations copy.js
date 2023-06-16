import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

document.body.addEventListener('mousemove', e => {
  document.querySelector(':root').style.setProperty('--clientX', `${e.clientX}px`);
  document.querySelector(':root').style.setProperty('--clientY', `${e.clientY}px`);
})

function initAnimations() {
  if (ScrollTrigger.isTouch === 1) return;


}

initManagementAnimations();

function initManagementAnimations() {

gsap.set(".management__img-caption", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.management__img-caption');
var texts = gsap.utils.toArray('.management__item');
images.forEach((image, i) => {

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".management",
      start: () => "top -" + (window.innerHeight*(i+0.5)),
      end: () => "+=" + window.innerHeight,
      // scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,    
    }
  })
  
  tl
  .to(image, { opacity: 0 })
  ;
  

});

gsap.set(".management__item", { zIndex: (i, target, targets) => targets.length - i });


texts.forEach((text, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".management",
      start: () => "top -" + (window.innerHeight*(i)),
      end: () => "+=" + window.innerHeight * 1.2,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
      onEnter:  () => {
        console.log('enter')
        onChangeItem(text);
      },
      onLeave:  () => {
        console.log('leave')
        removeActive();
      },
      onLeaveBack:  () => {
        console.log('leave back')
        removeActive();
      },
      onEnterBack:  () => {
        console.log('enter back')
        onChangeItem(text);
      }
    
    }
    
  })

  gsap.to(images[i], { opacity: 1 })
  
  tl
  .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
  .to(text, { duration: 0.33, opacity: 0.5, y:"-50%"}, 0.66);

  function removeActive() {
    const activeItem = document.querySelector('.management__item.is-active'); 
    const activeText = activeItem.querySelector('.management__text'); 
    if (activeItem) {
      activeItem.classList.remove('is-active');
      gsap.to(activeText, {height: 0, opacity: 0})
    }

  }

  function onChangeItem(newActive) {
    const innerText = newActive.querySelector('.management__text');
    
    newActive.classList.add('is-active');
    gsap.to(innerText, {height: innerText.scrollHeight, opacity: 1})
  }
});


ScrollTrigger.create({
  trigger: ".management",
    scrub: true,
    // markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,

});
}

initAnimations();