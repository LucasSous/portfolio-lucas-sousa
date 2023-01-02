let current = 0;
let target = 0;
let ease = 0.1;

let container = document.querySelector('.smooth-scroll-wrapper');

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTrasform(el, transform) {
  el.style.transform = transform;
}

function smoothScroll() {
  current = lerp(current, target, ease);
  current = parseFloat(current.toFixed(2));
  target = window.scrollY;

  setTrasform(container, `translateY(${-current}px)`);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();
