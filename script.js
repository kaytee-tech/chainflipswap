(function () {
  var burger = document.getElementById('burger'),
      close = document.getElementById('close'),
      mnav = document.getElementById('mnav');

  function setMenu(open) {
    mnav.classList.toggle('open', open);
    burger.hidden = open;
    close.hidden = !open;
    document.body.classList.toggle('lock', open);
  }
  burger.addEventListener('click', function () { setMenu(true); });
  close.addEventListener('click', function () { setMenu(false); });
  window.matchMedia('(min-width:1025px)').addEventListener('change', function (e) { if (e.matches) setMenu(false); });

  document.querySelectorAll('.acc > button').forEach(function (b) {
    b.addEventListener('click', function () { b.parentElement.classList.toggle('open'); });
  });

  var flip = document.getElementById('flip'),
      a = document.getElementById('tokA'),
      b2 = document.getElementById('tokB'), deg = 0;
  flip.addEventListener('click', function () {
    var t = a.innerHTML; a.innerHTML = b2.innerHTML; b2.innerHTML = t;
    deg += 180; flip.style.transform = 'rotate(' + deg + 'deg)';
  });
})();
