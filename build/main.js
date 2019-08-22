require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_consola__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_consola___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_consola__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_json__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_generic_session__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_generic_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_generic_session__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var nuxt, _nuxt$options$server, _nuxt$options$server$, host, _nuxt$options$server$2, port, builder;

    return __WEBPACK_IMPORTED_MODULE_0_F_nuxt_pro_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);
            _nuxt$options$server = nuxt.options.server, _nuxt$options$server$ = _nuxt$options$server.host, host = _nuxt$options$server$ === undefined ? process.env.HOST || '127.0.0.1' : _nuxt$options$server$, _nuxt$options$server$2 = _nuxt$options$server.port, port = _nuxt$options$server$2 === undefined ? process.env.PORT || 3000 : _nuxt$options$server$2;

            if (!config.dev) {
              _context.next = 8;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
            _context.next = 6;
            return builder.build();

          case 6:
            _context.next = 10;
            break;

          case 8:
            _context.next = 10;
            return nuxt.ready();

          case 10:
            app.keys = ['key', 'keykey'];
            app.proxy = true;
            app.use(__WEBPACK_IMPORTED_MODULE_6_koa_generic_session___default()({
              key: 'mt',
              prefix: 'mt:uid'
            }));
            app.use(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default()({
              enableTypes: ['json', 'form', 'text']
            }));
            app.use(__WEBPACK_IMPORTED_MODULE_5_koa_json___default()());
            app.use(function (ctx) {
              ctx.status = 200;
              ctx.respond = false;
              ctx.req.ctx = ctx;
              nuxt.render(ctx.req, ctx.res);
            });
            app.listen(port, host);
            __WEBPACK_IMPORTED_MODULE_2_consola___default.a.ready({
              message: 'Server listening on http://' + host + ':' + port,
              badge: true
            });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








var app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
var config = __webpack_require__(9);
config.dev = !(app.env === 'production');

start();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("consola");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-json");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("koa-generic-session");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/reset.scss', '@/assets/css/public.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui', "@/plugins/lazyload", "@/plugins/api", "@/plugins/utils"],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  env: {
    NODE_ENV: "development"
  },
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend: function extend(config, _ref) {
      var isDev = _ref.isDev,
          isClient = _ref.isClient;

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map