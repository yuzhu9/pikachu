// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n/*\u63A5\u4E0B\u6765\uFF0C\u6211\u8981\u753B\u4E00\u53EA\u53EF\u7231\u7684\u5C0F\u52A8\u7269\uFF0C\u731C\u731C\u662F\u4EC0\u4E48*/\n.wrapper {\n    position: relative;\n    height: 100%;    \n}\n.nose {    \n    position: absolute;\n    left: 50%;\n    border-radius: 50%;\n    border: 15px solid;\n    border-color: #000 transparent transparent transparent;\n    top: 200px;\n    margin-left: -15px;\n}\n.eyes {\n    width: 63px;\n    height: 63px;\n    border-radius: 50%;\n    border: 1px solid #000;\n    background: #2e2e2e;\n    position: absolute;\n    top: 170px;\n}\n.eyes::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    left: 10px;\n    top: 4px;\n    background: #fff;\n}\n.eyes.left {\n    left: 50%;\n    margin-left: -149px;    \n}\n.eyes.right {\n    right: 50%;\n    margin-right: -149px;    \n}\n@keyframes turneyes {\n    0% {\n        transform: translateX(0) translateY(0)\n    }\n    50% {\n        transform: translateX(10px) translateY(0)\n    }\n    100% {\n        transform: translateX(10px) translateY(10px)\n    }\n}\n.upperLip {\n    position: absolute;\n    width: 84px;\n    height: 28px;\n    border: 3px solid;\n    background: #ffe600;\n    top: 230px;    \n    z-index: 2;\n}\n.upperLip.left {\n    left: 50%;\n    margin-left: -82px;\n    border-bottom-left-radius: 50px 25px;\n    border-color: transparent transparent #000 #000;\n    transform: rotate(-20deg)\n}\n.upperLip.right {\n    right: 50%;\n    margin-right: -82px;\n    border-bottom-right-radius: 50px 25px;\n    border-color: transparent black black transparent;\n    transform: rotate(20deg);\n}\n.lowerLipWrapper {\n    overflow: hidden;\n    position: absolute;\n    left: 50%;\n    top: 240px;\n    width: 160px;\n    height: 170px;    \n    margin-left: -80px;\n    z-index: 1;\n          \n}\n.lowerLip {\n    overflow: hidden;\n    position: absolute;\n    bottom: 0;    \n    border-radius: 50%;    \n    width: 160px;\n    height: 650px; \n    border: 3px solid #000;   \n    background: #9b000a;\n    \n}\n.lowerLip::after {\n    content: '';\n    display: block;\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    top: 504px;\n    left: 4px;\n    border-radius: 50%;\n    background: #ff485f;\n    z-index: 0;    \n}\n.cheek {\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    border: 3px solid #000;\n    background: #f00;    \n    position: absolute;\n    top: 280px;   \n}\n.cheek.left {\n    left: 50%;\n    margin-left: -210px;    \n}\n.cheek.right {\n    right: 50%;\n    margin-right: -210px;\n}\n.eyes::after {\n    animation: turneyes 1s infinite linear alternate;\n}\n/*  \u641E\u5B9A\u5566\uFF01\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60 =\uFFE3\u03C9\uFFE3=  */\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var time = 30;
var id;
var demo = document.querySelector('#demo');
var cssText = document.querySelector('#cssText');
var btnPlay = document.querySelector('#btnPlay');
var btnPause = document.querySelector('#btnPause');
var btnFast = document.querySelector('#btnFast');
var btnNormal = document.querySelector('#btnNormal');
var btnSlow = document.querySelector('#btnSlow');

var paint = function paint() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerHTML = _css.default.substr(0, n);
  cssText.innerText = _css.default.substr(0, n);
  cssText.scrollTop = cssText.scrollHeight;
};

var play = function play() {
  return id = setInterval(paint, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

btnPlay.onclick = function () {
  pause();
  play();
};

btnPause.onclick = function () {
  pause();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  play();
};

btnNormal.onclick = function () {
  pause();
  time = 30;
  play();
};

btnSlow.onclick = function () {
  pause();
  time = 200;
  play();
};

play();
},{"./css.js":"css.js"}],"../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63268" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map