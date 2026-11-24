/* Theme toggle + section index highlight. No dependencies. */
(function () {
  'use strict';
  var root = document.documentElement;

  /* Theme toggle */
  var toggle = document.querySelector('.theme-toggle');
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* Highlight the section currently in view in the side index */
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);
  if (!sections.length) return;

  var ticking = false;
  function update() {
    ticking = false;
    var y = window.pageYOffset + window.innerHeight * 0.3;
    var current = sections[0].id;
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top + window.pageYOffset <= y) current = s.id;
    });
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1].id;
    }
    links.forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
