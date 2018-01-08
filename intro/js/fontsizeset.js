if (isPC()) {
  document.documentElement.style.fontSize = '100px';
} else {
  (function(doc, win) {
    var docEl = doc.documentElement,
      resizeEvt =
        'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        var clientHeight = docEl.clientHeight;
        if (!clientWidth) return;
        if (clientWidth > clientHeight) {
          docEl.style.fontSize = 100 * (clientHeight / 750) + 'px';
        } else {
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
}

function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPad',
    'iPod'
  ];

  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}



