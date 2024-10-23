!(function (t, e) {
  'use strict';
  function n() {
    this.dispatchEvent(
      new CustomEvent('long-press', { bubbles: !0, cancelable: !0 })
    ),
      clearTimeout(o),
      console &&
        console.log &&
        console.log('long-press fired on ' + this.outerHTML);
  }
  var o = null,
    u =
      'ontouchstart' in t ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0,
    s = u ? 'touchstart' : 'mousedown',
    i = u ? 'touchcancel' : 'mouseout',
    a = u ? 'touchend' : 'mouseup',
    c = u ? 'touchmove' : 'mousemove';

  e.addEventListener(s, function (t) {
    var e = t.target,
      u = parseInt('400', 10); // Timeout in ms
    o = setTimeout(n.bind(e), u);
  });
  e.addEventListener(a, function (t) {
    clearTimeout(o);
  });
  e.addEventListener(i, function (t) {
    clearTimeout(o);
  });
  e.addEventListener(c, function (t) {
    clearTimeout(o);
  });
})(this, document);
