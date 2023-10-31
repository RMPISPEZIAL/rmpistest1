// JavaScript Document
var marquee = document.querySelector('.marquee');

marquee.addEventListener('animationiteration', function() {
  marquee.style.animation = 'none';
  setTimeout(function() {
    marquee.style.animation = 'scroll 10s linear infinite';
  }, 0);
});
