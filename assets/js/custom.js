/* Theme toggle + tabs. No dependencies. */
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

  /* Tabs: each panel is a "page"; the URL hash keeps it linkable */
  var wrap = document.querySelector('.panels');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs__tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.panel'));
  if (!wrap || !panels.length) return;

  function panelFor(hash) {
    var id = (hash || '').replace(/^#/, '');
    if (!id) return panels[0];
    var el = document.getElementById(decodeURIComponent(id));
    if (!el) return panels[0];
    return el.classList.contains('panel') ? el : (el.closest('.panel') || panels[0]);
  }

  function show(panel, opts) {
    opts = opts || {};
    panels.forEach(function (p) {
      var on = p === panel;
      p.classList.toggle('is-active', on);
      p.hidden = !on;
    });
    tabs.forEach(function (t) {
      var on = t.getAttribute('aria-controls') === panel.id;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      if (on && t.scrollIntoView && opts.reveal) t.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
    document.title = (panel.id === panels[0].id ? '' : tabLabel(panel.id) + ' | ') + baseTitle;
  }

  var baseTitle = document.title.replace(/^.*\| /, '');
  function tabLabel(id) {
    var t = tabs.filter(function (x) { return x.getAttribute('aria-controls') === id; })[0];
    return t ? t.textContent.trim() : id;
  }

  function go(hash) {
    var panel = panelFor(hash);
    show(panel, { reveal: true });
    var target = document.getElementById((hash || '').replace(/^#/, ''));
    if (target && target !== panel) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var hash = a.getAttribute('href');
    if (hash.length < 2 || !document.getElementById(hash.slice(1))) return;
    e.preventDefault();
    if (location.hash !== hash && history.pushState) history.pushState(null, '', hash);
    go(hash);
  });

  window.addEventListener('popstate', function () { go(location.hash); });
  window.addEventListener('hashchange', function () { go(location.hash); });

  /* Arrow keys move between tabs (WAI-ARIA tabs pattern) */
  tabs.forEach(function (t, i) {
    t.addEventListener('keydown', function (e) {
      var next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); next.focus(); next.click(); }
    });
  });

  show(panelFor(location.hash));
  wrap.classList.add('is-ready');
  var deep = location.hash && document.getElementById(location.hash.slice(1));
  if (deep && !deep.classList.contains('panel')) deep.scrollIntoView();
})();

/* Research map: draws an ENA-style network from _data/research_map.yml */
(function () {
  'use strict';
  var fig = document.getElementById('research-map');
  var dataEl = document.getElementById('research-map-data');
  if (!fig || !dataEl) return;

  var data;
  try { data = JSON.parse(dataEl.textContent); } catch (e) { return; }
  var NS = 'http://www.w3.org/2000/svg';
  var edgesG = fig.querySelector('.map__edges');
  var nodesG = fig.querySelector('.map__nodes');
  var defaultCap = fig.querySelector('.map__default');
  var detailCap = fig.querySelector('.map__detail');
  var total = data.projects.length;

  var nodes = {};
  data.nodes.forEach(function (n) { nodes[n.id] = { n: n, count: 0, projects: [] }; });

  var pairs = {};
  data.projects.forEach(function (p) {
    var t = p.themes.filter(function (id) { return nodes[id]; });
    t.forEach(function (id) { nodes[id].count++; nodes[id].projects.push(p.title); });
    for (var i = 0; i < t.length; i++) {
      for (var j = i + 1; j < t.length; j++) {
        var key = [t[i], t[j]].sort().join('|');
        pairs[key] = (pairs[key] || 0) + 1;
      }
    }
  });

  function el(name, attrs) {
    var e = document.createElementNS(NS, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  var edgeEls = [];
  Object.keys(pairs).sort(function (a, b) { return pairs[a] - pairs[b]; }).forEach(function (key, i) {
    var ids = key.split('|'), a = nodes[ids[0]].n, b = nodes[ids[1]].n, w = pairs[key];
    var line = el('line', {
      x1: a.x, y1: a.y, x2: b.x, y2: b.y,
      'stroke-width': (0.6 + (w - 1) * 1.6).toFixed(2),
      'class': 'map__edge map__edge--w' + Math.min(w, 3)
    });
    var len = Math.hypot(b.x - a.x, b.y - a.y);
    line.style.setProperty('--len', len.toFixed(1));
    line.style.setProperty('--i', i);
    line.dataset.a = ids[0];
    line.dataset.b = ids[1];
    edgesG.appendChild(line);
    edgeEls.push(line);
  });

  var nodeEls = [];
  data.nodes.forEach(function (n, i) {
    var info = nodes[n.id];
    var g = el('g', { 'class': 'map__node', transform: 'translate(' + n.x + ' ' + n.y + ')', tabindex: '0', role: 'button',
      'aria-label': n.label + ', appears in ' + info.count + ' of ' + total + ' projects' });
    g.style.setProperty('--i', i);
    g.dataset.id = n.id;
    g.appendChild(el('circle', { r: (2.5 + info.count * 1.4).toFixed(1), 'class': 'map__dot' }));
    var r = 2.5 + info.count * 1.4;
    var pos = {
      right: { x: r + 6, y: 4, anchor: 'start' },
      left: { x: -(r + 6), y: 4, anchor: 'end' },
      below: { x: 0, y: r + 15, anchor: 'middle' },
      above: { x: 0, y: -(r + 8), anchor: 'middle' }
    }[n.side] || { x: r + 6, y: 4, anchor: 'start' };
    var text = el('text', { x: pos.x, y: pos.y, 'text-anchor': pos.anchor, 'class': 'map__label' });
    text.textContent = n.label;
    g.appendChild(text);
    nodesG.appendChild(g);
    nodeEls.push(g);
  });

  var pinned = null;
  function focusNode(id) {
    fig.classList.toggle('is-tracing', !!id);
    edgeEls.forEach(function (e) {
      e.classList.toggle('is-on', !!id && (e.dataset.a === id || e.dataset.b === id));
    });
    var linked = {};
    edgeEls.forEach(function (e) {
      if (e.dataset.a === id) linked[e.dataset.b] = 1;
      if (e.dataset.b === id) linked[e.dataset.a] = 1;
    });
    nodeEls.forEach(function (g) {
      g.classList.toggle('is-on', g.dataset.id === id);
      g.classList.toggle('is-linked', !!linked[g.dataset.id]);
    });
    if (id) {
      var info = nodes[id];
      detailCap.textContent = info.n.label + ' appears in ' + info.count + ' of ' + total + ' projects: ' + info.projects.join('; ') + '.';
      detailCap.hidden = false;
      defaultCap.hidden = true;
    } else {
      detailCap.hidden = true;
      defaultCap.hidden = false;
    }
  }

  nodeEls.forEach(function (g) {
    var id = g.dataset.id;
    g.addEventListener('mouseenter', function () { if (!pinned) focusNode(id); });
    g.addEventListener('mouseleave', function () { if (!pinned) focusNode(null); });
    g.addEventListener('focus', function () { focusNode(id); });
    g.addEventListener('blur', function () { if (!pinned) focusNode(null); });
    g.addEventListener('click', function (e) {
      e.stopPropagation();
      pinned = pinned === id ? null : id;
      focusNode(pinned);
    });
    g.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); g.dispatchEvent(new MouseEvent('click')); }
      if (e.key === 'Escape') { pinned = null; focusNode(null); g.blur(); }
    });
  });
  document.addEventListener('click', function () { if (pinned) { pinned = null; focusNode(null); } });

  /* One orchestrated moment: the network draws itself once on load */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fig.classList.add('is-drawing');
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { fig.classList.add('is-drawn'); });
    });
  }
})();
