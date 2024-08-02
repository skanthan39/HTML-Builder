/*! grapesjs-typed - 1.0.5 */
!function(e, t) {
  'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports["grapesjs-typed"] = t() : e["grapesjs-typed"] = t()
}(window, (function() {
  return function(e) {
      var t = {};
      function r(n) {
          if (t[n])
              return t[n].exports;
          var o = t[n] = {
              i: n,
              l: !1,
              exports: {}
          };
          return e[n].call(o.exports, o, o.exports, r),
          o.l = !0,
          o.exports
      }
      return r.m = e,
      r.c = t,
      r.d = function(e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: n
          })
      }
      ,
      r.r = function(e) {
          'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: 'Module'
          }),
          Object.defineProperty(e, '__esModule', {
              value: !0
          })
      }
      ,
      r.t = function(e, t) {
          if (1 & t && (e = r(e)),
          8 & t)
              return e;
          if (4 & t && 'object' == typeof e && e && e.__esModule)
              return e;
          var n = Object.create(null);
          if (r.r(n),
          Object.defineProperty(n, 'default', {
              enumerable: !0,
              value: e
          }),
          2 & t && 'string' != typeof e)
              for (var o in e)
                  r.d(n, o, function(t) {
                      return e[t]
                  }
                  .bind(null, o));
          return n
      }
      ,
      r.n = function(e) {
          var t = e && e.__esModule ? function() {
              return e.default
          }
          : function() {
              return e
          }
          ;
          return r.d(t, 'a', t),
          t
      }
      ,
      r.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }
      ,
      r.p = "",
      r(r.s = 1)
  }([function(e, t) {
      e.exports = function(e, t, r) {
          return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = r,
          e
      }
  }
  , function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0)
        , o = r.n(n);
      function c(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function s(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? c(r, !0).forEach((function(t) {
                  o()(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(r).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      var a = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , r = e.DomComponents
            , n = Object.keys
            , o = {
              strings: [],
              'type-speed': 0,
              'start-delay': 0,
              'back-speed': 0,
              'smart-backspace': !0,
              'back-delay': 700,
              'fade-out': !1,
              'fade-out-class': 'typed-fade-out',
              'fade-out-delay': 500,
              'show-cursor': !0,
              'cursor-char': '|',
              'auto-insert-css': !0,
              'bind-input-focus-events': !1,
              'content-type': 'html',
              loop: !1,
              'loop-count': 1 / 0,
              shuffle: !1,
              attr: ''
          }
            , c = function(e) {
              return 'number' == typeof e ? 'number' : 'boolean' == typeof e ? 'checkbox' : 'text'
          }
            , a = n(o).filter((function(e) {
              return ['strings'].indexOf(e) < 0
          }
          )).map((function(e) {
              return {
                  changeProp: 1,
                  type: c(o[e]),
                  min: 0,
                  name: e
              }
          }
          ));
          a.unshift({
              changeProp: 1,
              name: 'strings',
              type: "typed-strings"
          }),
          r.addType("typed", {
              model: {
                  defaults: t.props(s({}, o, {
                      typedsrc: t.script,
                      droppable: 0,
                      traits: a,
                      script: function() {
                          var e = this
                            , t = JSON.parse('{[ strings ]}')
                            , r = function(e) {
                              return parseInt(e, 10) || 0
                          }
                            , n = function(e) {
                              return !!e
                          }
                            , o = function() {
                              var o = e;
                              o.innerHTML = '<span></span>';
                              var c = parseInt('{[ loop-count ]}', 10)
                                , s = {
                                  typeSpeed: r('{[ type-speed ]}'),
                                  startDelay: r('{[ start-delay ]}'),
                                  backDelay: r('{[ back-delay ]}'),
                                  backSpeed: r('{[ back-speed ]}'),
                                  smartBackspace: n('{[ smart-backspace ]}'),
                                  fadeOut: n('{[ fade-out ]}'),
                                  fadeOutClass: '{[ fade-out-class ]}',
                                  fadeOutDelay: r('{[ fade-out-delay ]}'),
                                  shuffle: n('{[ shuffle ]}'),
                                  loop: n('{[ loop ]}'),
                                  loopCount: isNaN(c) ? 1 / 0 : c,
                                  showCursor: n('{[ show-cursor ]}'),
                                  cursorChar: '{[ cursor-char ]}',
                                  autoInsertCss: n('{[ auto-insert-css ]}'),
                                  bindInputFocusEvents: n('{[ bind-input-focus-events ]}'),
                                  attr: '{[ attr ]}',
                                  contentType: '{[ content-type ]}'
                              };
                              t && t.length && (s.strings = t),
                              new Typed(o.children[0],s)
                          };
                          if (window.Typed)
                              o();
                          else {
                              var c = document.createElement('script');
                              c.src = '{[ typedsrc ]}',
                              c.onload = o,
                              document.head.appendChild(c)
                          }
                      }
                  })),
                  init: function() {
                      var e = this
                        , t = a.filter((function(e) {
                          return ['strings'].indexOf(e.name) < 0
                      }
                      )).map((function(e) {
                          return "change:".concat(e.name)
                      }
                      )).join(' ');
                      this.on(t, (function() {
                          return e.trigger('change:script')
                      }
                      )),
                      this.on('change:strings', this.onStringsChange)
                  },
                  onStringsChange: function(e, t) {
                      Array.isArray(t) || (this.set({
                          strings: t.split('\n')
                      }),
                      this.trigger('change:script'))
                  }
              }
          })
      };
      function i(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function p(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? i(r, !0).forEach((function(t) {
                  o()(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(r).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      var u = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , r = e.BlockManager
            , n = t.block;
          n && r.add("typed", p({
              label: 'Typed',
              media:
              '<svg  class="basicList"  viewBox="0 0 24 24">\n    <path fill-rule="white" d="M8,18 C9.1045695,18 10,18.8954305 10,20 C10,21.1045695 9.1045695,22 8,22 C6.8954305,22 6,21.1045695 6,20 C6,18.8954305 6.8954305,18 8,18 Z M16,18 C17.1045695,18 18,18.8954305 18,20 C18,21.1045695 17.1045695,22 16,22 C14.8954305,22 14,21.1045695 14,20 C14,18.8954305 14.8954305,18 16,18 Z M8,10 C9.1045695,10 10,10.8954305 10,12 C10,13.1045695 9.1045695,14 8,14 C6.8954305,14 6,13.1045695 6,12 C6,10.8954305 6.8954305,10 8,10 Z M16,10 C17.1045695,10 18,10.8954305 18,12 C18,13.1045695 17.1045695,14 16,14 C14.8954305,14 14,13.1045695 14,12 C14,10.8954305 14.8954305,10 16,10 Z M8,2 C9.1045695,2 10,2.8954305 10,4 C10,5.1045695 9.1045695,6 8,6 C6.8954305,6 6,5.1045695 6,4 C6,2.8954305 6.8954305,2 8,2 Z M16,2 C17.1045695,2 18,2.8954305 18,4 C18,5.1045695 17.1045695,6 16,6 C14.8954305,6 14,5.1045695 14,4 C14,2.8954305 14.8954305,2 16,2 Z">\n  </svg> <svg style="background-color:#f1f5f9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M212.3 44l2.3 49.6h-6A60 60 0 00204 75c-3.2-6-7.5-10.5-12.9-13.3a44.9 44.9 0 00-21.1-4.3h-29.8V219c0 13 1.4 21 4.2 24.3 4 4.4 10 6.6 18.2 6.6h7.4v5.7H80.2V250h7.5c9 0 15.3-2.7 19-8.2 2.4-3.3 3.5-10.9 3.5-22.7V57.3H84.8a71 71 0 00-21.1 2.2 29 29 0 00-13.9 11.3 46.1 46.1 0 00-6.9 22.8H37L39.5 44h172.8zM245 22h18v256h-18z"/></svg>',
              content: { type: "typed" }
              
          }, n))
      }
        , f = function(e) {
          e.TraitManager.addType("typed-strings", {
              createInput: function(e) {
                  var t = e.component;
                  return "<textarea placeholder='Type here your text'>".concat(t.get('strings').join('\n'), "</textarea>")
              },
              onUpdate: function(e) {
                  var t = e.component;
                  e.elInput.value = t.get('strings').join('\n')
              }
          })
      };
      function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
              }
              ))),
              r.push.apply(r, n)
          }
          return r
      }
      function d(e) {
          for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? l(r, !0).forEach((function(t) {
                  o()(e, t, r[t])
              }
              )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(r).forEach((function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }
              ))
          }
          return e
      }
      t.default = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , r = d({}, {
              script: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11',
              block: {},
              props: function(e) {
                  return e
              }
          }, {}, t);
          a(e, r),
          u(e, r),
          f(e)
      }
  }
  ])
}
));
//# sourceMappingURL=grapesjs-typed.min.js.map

















