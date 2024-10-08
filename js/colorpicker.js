/*!
 * TOAST UI Color Picker
 * @version 2.2.7
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.colorPicker = e())
    : ((t.tui = t.tui || {}), (t.tui.colorPicker = e()));
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "dist"),
      n((n.s = 33))
    );
  })([
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        var n,
          r,
          o,
          i,
          s = Object.prototype.hasOwnProperty;
        for (o = 1, i = arguments.length; o < i; o += 1)
          for (r in (n = arguments[o])) s.call(n, r) && (t[r] = n[r]);
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return t instanceof Array;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        o = n(6),
        i = n(7);
      t.exports = function (t, e, n) {
        r(t) ? o(t, e, n) : i(t, e, n);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return void 0 === t;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(22),
        o = n(2),
        i = n(6),
        s = n(7),
        c = n(37),
        a = 0,
        l = {
          getLength: function (t) {
            var e = 0;
            return (
              s(t, function () {
                e += 1;
              }),
              e
            );
          },
          map: function (t, e, n) {
            var r = [];
            return (
              o(t, function () {
                r.push(e.apply(n || null, arguments));
              }),
              r
            );
          },
          filter: function (t, e, n) {
            var r = [];
            return (
              i(t, function (t) {
                e.apply(n || null, arguments) && r.push(t);
              }),
              r
            );
          },
          generateId: function () {
            return (a += 1);
          },
          isOldBrowser: r.msie && r.version < 9,
          sendHostName: function () {
            c("color-picker", "UA-129987462-1");
          },
        };
      t.exports = l;
    },
    function (t, e, n) {
      "use strict";
      var r = n(1);
      t.exports = function (t, e, n) {
        var o, i;
        if (((n = n || 0), !r(e))) return -1;
        if (Array.prototype.indexOf)
          return Array.prototype.indexOf.call(e, t, n);
        for (i = e.length, o = n; n >= 0 && o < i; o += 1)
          if (e[o] === t) return o;
        return -1;
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n) {
        var r = 0,
          o = t.length;
        for (n = n || null; r < o && !1 !== e.call(n, t[r], r, t); r += 1);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e, n) {
        var r;
        for (r in ((n = n || null), t))
          if (t.hasOwnProperty(r) && !1 === e.call(n, t[r], r, t)) break;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(39),
        o = n(13),
        i = n(41),
        s = n(3),
        c = n(9),
        a = n(19),
        l = n(4);
      function u(t, e) {
        var n = l.generateId();
        (t = t || {}),
          s(e) && (e = c.appendHTMLElement("div")),
          r(e, "tui-view-" + n),
          (this.id = n),
          (this.container = e),
          (this.childs = new a(function (t) {
            return t.id;
          })),
          (this.parent = null);
      }
      (u.prototype.addChild = function (t, e) {
        e && e.call(t, this), (t.parent = this), this.childs.add(t);
      }),
        (u.prototype.removeChild = function (t, e) {
          var n = i(t) ? this.childs.items[t] : t;
          e && e.call(n, this), this.childs.remove(n.id);
        }),
        (u.prototype.render = function () {
          this.childs.each(function (t) {
            t.render();
          });
        }),
        (u.prototype.recursive = function (t, e) {
          o(t) &&
            (e || t(this),
            this.childs.each(function (e) {
              e.recursive(t);
            }));
        }),
        (u.prototype.resize = function () {
          for (
            var t = Array.prototype.slice.call(arguments), e = this.parent;
            e;

          )
            o(e._onResize) && e._onResize.apply(e, t), (e = e.parent);
        }),
        (u.prototype._beforeDestroy = function () {}),
        (u.prototype._destroy = function () {
          this._beforeDestroy(),
            (this.container.innerHTML = ""),
            (this.id = this.parent = this.childs = this.container = null);
        }),
        (u.prototype.destroy = function (t) {
          this.childs &&
            (this.childs.each(function (t) {
              t.destroy(!0), t._destroy();
            }),
            this.childs.clear()),
            t || this._destroy();
        }),
        (u.prototype.getViewBound = function () {
          var t = this.container.getBoundingClientRect();
          return {
            x: t.left,
            y: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top,
          };
        }),
        (t.exports = u);
    },
    function (t, e, n) {
      "use strict";
      var r = {
        appendHTMLElement: function (t, e, n) {
          var r = document.createElement(t);
          return (
            (r.className = n || ""),
            e ? e.appendChild(r) : document.body.appendChild(r),
            r
          );
        },
      };
      t.exports = r;
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        o = n(20),
        i = n(11),
        s = n(21),
        c = n(1),
        a = n(13),
        l = n(2),
        u = /\s+/g;
      function f() {
        (this.events = null), (this.contexts = null);
      }
      (f.mixin = function (t) {
        r(t.prototype, f.prototype);
      }),
        (f.prototype._getHandlerItem = function (t, e) {
          var n = { handler: t };
          return e && (n.context = e), n;
        }),
        (f.prototype._safeEvent = function (t) {
          var e,
            n = this.events;
          return (
            n || (n = this.events = {}),
            t && ((e = n[t]) || ((e = []), (n[t] = e)), (n = e)),
            n
          );
        }),
        (f.prototype._safeContext = function () {
          var t = this.contexts;
          return t || (t = this.contexts = []), t;
        }),
        (f.prototype._indexOfContext = function (t) {
          for (var e = this._safeContext(), n = 0; e[n]; ) {
            if (t === e[n][0]) return n;
            n += 1;
          }
          return -1;
        }),
        (f.prototype._memorizeContext = function (t) {
          var e, n;
          o(t) &&
            ((e = this._safeContext()),
            (n = this._indexOfContext(t)) > -1
              ? (e[n][1] += 1)
              : e.push([t, 1]));
        }),
        (f.prototype._forgetContext = function (t) {
          var e, n;
          o(t) &&
            ((e = this._safeContext()),
            (n = this._indexOfContext(t)) > -1 &&
              ((e[n][1] -= 1), e[n][1] <= 0 && e.splice(n, 1)));
        }),
        (f.prototype._bindEvent = function (t, e, n) {
          var r = this._safeEvent(t);
          this._memorizeContext(n), r.push(this._getHandlerItem(e, n));
        }),
        (f.prototype.on = function (t, e, n) {
          var r = this;
          i(t)
            ? ((t = t.split(u)),
              l(t, function (t) {
                r._bindEvent(t, e, n);
              }))
            : s(t) &&
              ((n = e),
              l(t, function (t, e) {
                r.on(e, t, n);
              }));
        }),
        (f.prototype.once = function (t, e, n) {
          var r = this;
          if (s(t))
            return (
              (n = e),
              void l(t, function (t, e) {
                r.once(e, t, n);
              })
            );
          this.on(
            t,
            function o() {
              e.apply(n, arguments), r.off(t, o, n);
            },
            n
          );
        }),
        (f.prototype._spliceMatches = function (t, e) {
          var n,
            r = 0;
          if (c(t))
            for (n = t.length; r < n; r += 1)
              !0 === e(t[r]) && (t.splice(r, 1), (n -= 1), (r -= 1));
        }),
        (f.prototype._matchHandler = function (t) {
          var e = this;
          return function (n) {
            var r = t === n.handler;
            return r && e._forgetContext(n.context), r;
          };
        }),
        (f.prototype._matchContext = function (t) {
          var e = this;
          return function (n) {
            var r = t === n.context;
            return r && e._forgetContext(n.context), r;
          };
        }),
        (f.prototype._matchHandlerAndContext = function (t, e) {
          var n = this;
          return function (r) {
            var o = t === r.handler,
              i = e === r.context,
              s = o && i;
            return s && n._forgetContext(r.context), s;
          };
        }),
        (f.prototype._offByEventName = function (t, e) {
          var n = this,
            r = a(e),
            o = n._matchHandler(e);
          (t = t.split(u)),
            l(t, function (t) {
              var e = n._safeEvent(t);
              r
                ? n._spliceMatches(e, o)
                : (l(e, function (t) {
                    n._forgetContext(t.context);
                  }),
                  (n.events[t] = []));
            });
        }),
        (f.prototype._offByHandler = function (t) {
          var e = this,
            n = this._matchHandler(t);
          l(this._safeEvent(), function (t) {
            e._spliceMatches(t, n);
          });
        }),
        (f.prototype._offByObject = function (t, e) {
          var n,
            r = this;
          this._indexOfContext(t) < 0
            ? l(t, function (t, e) {
                r.off(e, t);
              })
            : i(e)
            ? ((n = this._matchContext(t)),
              r._spliceMatches(this._safeEvent(e), n))
            : a(e)
            ? ((n = this._matchHandlerAndContext(e, t)),
              l(this._safeEvent(), function (t) {
                r._spliceMatches(t, n);
              }))
            : ((n = this._matchContext(t)),
              l(this._safeEvent(), function (t) {
                r._spliceMatches(t, n);
              }));
        }),
        (f.prototype.off = function (t, e) {
          i(t)
            ? this._offByEventName(t, e)
            : arguments.length
            ? a(t)
              ? this._offByHandler(t)
              : s(t) && this._offByObject(t, e)
            : ((this.events = {}), (this.contexts = []));
        }),
        (f.prototype.fire = function (t) {
          this.invoke.apply(this, arguments);
        }),
        (f.prototype.invoke = function (t) {
          var e, n, r, o;
          if (!this.hasListener(t)) return !0;
          for (
            e = this._safeEvent(t),
              n = Array.prototype.slice.call(arguments, 1),
              r = 0;
            e[r];

          ) {
            if (!1 === (o = e[r]).handler.apply(o.context, n)) return !1;
            r += 1;
          }
          return !0;
        }),
        (f.prototype.hasListener = function (t) {
          return this.getListenerLength(t) > 0;
        }),
        (f.prototype.getListenerLength = function (t) {
          return this._safeEvent(t).length;
        }),
        (t.exports = f);
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return "string" == typeof t || t instanceof String;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i,
        o = {
          leadingZero: function (t, e) {
            var n = "",
              r = 0;
            if ((t + "").length > e) return t + "";
            for (; r < e - 1; r += 1) n += "0";
            return (n + t).slice(-1 * e);
          },
          isValidRGB: function (t) {
            return r.test(t);
          },
          // @license RGB <-> HSV conversion utilities based off of http://www.cs.rit.edu/~ncs/color/t_convert.html
          hexToRGB: function (t) {
            return (
              !!o.isValidRGB(t) &&
              ((t = t.substring(1)),
              [
                parseInt(t.substr(0, 2), 16),
                parseInt(t.substr(2, 2), 16),
                parseInt(t.substr(4, 2), 16),
              ])
            );
          },
          rgbToHEX: function (t, e, n) {
            var r =
              "#" +
              o.leadingZero(t.toString(16), 2) +
              o.leadingZero(e.toString(16), 2) +
              o.leadingZero(n.toString(16), 2);
            return !!o.isValidRGB(r) && r;
          },
          rgbToHSV: function (t, e, n) {
            var r, o, i, s, c, a;
            if (
              ((t /= 255),
              (e /= 255),
              (n /= 255),
              (c = r = Math.max(t, e, n)),
              (a = r - (o = Math.min(t, e, n))),
              (s = 0 === r ? 0 : a / r),
              r === o)
            )
              i = 0;
            else {
              switch (r) {
                case t:
                  i = (e - n) / a + (e < n ? 6 : 0);
                  break;
                case e:
                  i = (n - t) / a + 2;
                  break;
                case n:
                  i = (t - e) / a + 4;
              }
              i /= 6;
            }
            return [
              Math.round(360 * i),
              Math.round(100 * s),
              Math.round(100 * c),
            ];
          },
          hsvToRGB: function (t, e, n) {
            var r, o, i, s, c, a, l, u;
            if (
              ((t = Math.max(0, Math.min(360, t))),
              (e = Math.max(0, Math.min(100, e))),
              (n = Math.max(0, Math.min(100, n))),
              (n /= 100),
              0 === (e /= 100))
            )
              return (
                (r = o = i = n),
                [Math.round(255 * r), Math.round(255 * o), Math.round(255 * i)]
              );
            switch (
              ((a = n * (1 - e)),
              (l = n * (1 - e * (c = (t /= 60) - (s = Math.floor(t))))),
              (u = n * (1 - e * (1 - c))),
              s)
            ) {
              case 0:
                (r = n), (o = u), (i = a);
                break;
              case 1:
                (r = l), (o = n), (i = a);
                break;
              case 2:
                (r = a), (o = n), (i = u);
                break;
              case 3:
                (r = a), (o = l), (i = n);
                break;
              case 4:
                (r = u), (o = a), (i = n);
                break;
              default:
                (r = n), (o = a), (i = l);
            }
            return [
              Math.round(255 * r),
              Math.round(255 * o),
              Math.round(255 * i),
            ];
          },
        };
      t.exports = o;
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return t instanceof Function;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        o = n(2),
        i = n(26);
      function s(t, e, n, r) {
        function s(e) {
          n.call(r || t, e || window.event);
        }
        "addEventListener" in t
          ? t.addEventListener(e, s)
          : "attachEvent" in t && t.attachEvent("on" + e, s),
          (function (t, e, n, r) {
            var s = i(t, e),
              c = !1;
            o(s, function (t) {
              return t.handler !== n || ((c = !0), !1);
            }),
              c || s.push({ handler: n, wrappedHandler: r });
          })(t, e, n, s);
      }
      t.exports = function (t, e, n, i) {
        r(e)
          ? o(e.split(/\s+/g), function (e) {
              s(t, e, n, i);
            })
          : o(e, function (e, r) {
              s(t, r, e, n);
            });
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return t.replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        });
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        o = n(2),
        i = n(26);
      function s(t, e, n) {
        var r,
          s = i(t, e);
        n
          ? (o(s, function (o, i) {
              return (
                n !== o.handler || (c(t, e, o.wrappedHandler), (r = i), !1)
              );
            }),
            s.splice(r, 1))
          : (o(s, function (n) {
              c(t, e, n.wrappedHandler);
            }),
            s.splice(0, s.length));
      }
      function c(t, e, n) {
        "removeEventListener" in t
          ? t.removeEventListener(e, n)
          : "detachEvent" in t && t.detachEvent("on" + e, n);
      }
      t.exports = function (t, e, n) {
        r(e)
          ? o(e.split(/\s+/g), function (e) {
              s(t, e, n);
            })
          : o(e, function (e, n) {
              s(t, n, e);
            });
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(50);
      t.exports = function (t, e) {
        var n = r(e.prototype);
        (n.constructor = t), (t.prototype = n);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(6),
        o = n(7),
        i = n(0),
        s = n(1),
        c = n(20),
        a = n(13),
        l = n(21),
        u = n(4),
        f = Array.prototype.slice;
      function p(t) {
        (this.items = {}), (this.length = 0), a(t) && (this.getItemID = t);
      }
      (p.and = function (t) {
        var e;
        return (
          (t = f.call(arguments)),
          (e = t.length),
          function (n) {
            for (var r = 0; r < e; r += 1) if (!t[r].call(null, n)) return !1;
            return !0;
          }
        );
      }),
        (p.or = function (t) {
          var e;
          return (
            (t = f.call(arguments)),
            (e = t.length),
            function (n) {
              for (var r = 1, o = t[0].call(null, n); r < e; r += 1)
                o = o || t[r].call(null, n);
              return o;
            }
          );
        }),
        (p.merge = function (t) {
          var e = {},
            n = new p(t.getItemID);
          return (
            r(arguments, function (t) {
              i(e, t.items);
            }),
            (n.items = e),
            (n.length = u.getLength(n.items)),
            n
          );
        }),
        (p.prototype.getItemID = function (t) {
          return t._id + "";
        }),
        (p.prototype.add = function (t) {
          var e, n;
          arguments.length > 1
            ? r(
                f.call(arguments),
                function (t) {
                  this.add(t);
                },
                this
              )
            : ((e = this.getItemID(t)),
              (n = this.items)[e] || (this.length += 1),
              (n[e] = t));
        }),
        (p.prototype.remove = function (t) {
          var e,
            n,
            r = [];
          return this.length
            ? arguments.length > 1
              ? (r = u.map(
                  f.call(arguments),
                  function (t) {
                    return this.remove(t);
                  },
                  this
                ))
              : ((e = this.items),
                l(t) && (t = this.getItemID(t)),
                e[t] ? ((this.length -= 1), (n = e[t]), delete e[t], n) : r)
            : r;
        }),
        (p.prototype.clear = function () {
          (this.items = {}), (this.length = 0);
        }),
        (p.prototype.has = function (t) {
          var e, n;
          return (
            !!this.length &&
            ((e = a(t)),
            (n = !1),
            e
              ? this.each(function (e) {
                  return !0 !== t(e) || ((n = !0), !1);
                })
              : ((t = l(t) ? this.getItemID(t) : t), (n = c(this.items[t]))),
            n)
          );
        }),
        (p.prototype.doWhenHas = function (t, e, n) {
          var r = this.items[t];
          c(r) && e.call(n || this, r);
        }),
        (p.prototype.find = function (t) {
          var e = new p();
          return (
            this.hasOwnProperty("getItemID") && (e.getItemID = this.getItemID),
            this.each(function (n) {
              !0 === t(n) && e.add(n);
            }),
            e
          );
        }),
        (p.prototype.groupBy = function (t, e) {
          var n,
            o,
            i = {},
            c = a(t),
            l = this.getItemID;
          if (s(t)) {
            if (
              (r(t, function (t) {
                i[t + ""] = new p(l);
              }),
              !e)
            )
              return i;
            (t = e), (c = !0);
          }
          return (
            this.each(function (e) {
              c ? (o = t(e)) : ((o = e[t]), a(o) && (o = o.apply(e))),
                (n = i[o]) || (n = i[o] = new p(l)),
                n.add(e);
            }),
            i
          );
        }),
        (p.prototype.single = function () {
          var t;
          return (
            this.each(function (e) {
              return (t = e), !1;
            }, this),
            t
          );
        }),
        (p.prototype.sort = function (t) {
          var e = [];
          return (
            this.each(function (t) {
              e.push(t);
            }),
            a(t) && (e = e.sort(t)),
            e
          );
        }),
        (p.prototype.each = function (t, e) {
          o(this.items, t, e || this);
        }),
        (p.prototype.toArray = function () {
          return this.length
            ? u.map(this.items, function (t) {
                return t;
              })
            : [];
        }),
        (t.exports = p);
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        o = n(36);
      t.exports = function (t) {
        return !r(t) && !o(t);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return t === Object(t);
      };
    },
    function (t, e, n) {
      "use strict";
      var r,
        o,
        i,
        s,
        c,
        a,
        l,
        u,
        f,
        p,
        h = {
          chrome: !1,
          firefox: !1,
          safari: !1,
          msie: !1,
          edge: !1,
          others: !1,
          version: 0,
        };
      "undefined" != typeof window &&
        window.navigator &&
        ((i = window.navigator),
        (s = i.appName.replace(/\s/g, "_")),
        (c = i.userAgent),
        (a = /MSIE\s([0-9]+[.0-9]*)/),
        (l = /Trident.*rv:11\./),
        (u = /Edge\/(\d+)\./),
        (f = {
          firefox: /Firefox\/(\d+)\./,
          chrome: /Chrome\/(\d+)\./,
          safari: /Version\/([\d.]+).*Safari\/(\d+)/,
        }),
        (p = {
          Microsoft_Internet_Explorer: function () {
            var t = c.match(a);
            t
              ? ((h.msie = !0), (h.version = parseFloat(t[1])))
              : (h.others = !0);
          },
          Netscape: function () {
            var t = !1;
            if (l.exec(c)) (h.msie = !0), (h.version = 11), (t = !0);
            else if (u.exec(c))
              (h.edge = !0), (h.version = c.match(u)[1]), (t = !0);
            else
              for (r in f)
                if (
                  f.hasOwnProperty(r) &&
                  (o = c.match(f[r])) &&
                  o.length > 1
                ) {
                  (h[r] = t = !0), (h.version = parseFloat(o[1] || 0));
                  break;
                }
            t || (h.others = !0);
          },
        })[s] && p[s]()),
        (t.exports = h);
    },
    function (t, e, n) {
      "use strict";
      var r = n(3);
      t.exports = function (t) {
        return t && t.className
          ? r(t.className.baseVal)
            ? t.className
            : t.className.baseVal
          : "";
      };
    },
    function (t, e, n) {
      "use strict";
      (function (e) {
        var r = n(10),
          o = n(42),
          i = n(44),
          s = n(47),
          c = n(28),
          a = n(17),
          l = n(14),
          u = n(15),
          f = n(0);
        function p(t, e) {
          l(e, "mousedown", this._onMouseDown, this),
            (this.options = f({ distance: 10 }, t)),
            (this.container = e),
            (this._isMoved = !1),
            (this._distance = 0),
            (this._dragStartFired = !1),
            (this._dragStartEventData = null);
        }
        (p.prototype.destroy = function () {
          a(this.container, "mousedown", this._onMouseDown),
            (this.options =
              this.container =
              this._isMoved =
              this._distance =
              this._dragStartFired =
              this._dragStartEventData =
                null);
        }),
          (p.prototype._toggleDragEvent = function (t) {
            var n = this.container;
            t
              ? (o(n),
                l(window, "dragstart", u),
                l(
                  e.document,
                  { mousemove: this._onMouseMove, mouseup: this._onMouseUp },
                  this
                ))
              : (i(n),
                a(window, "dragstart", u),
                a(e.document, {
                  mousemove: this._onMouseMove,
                  mouseup: this._onMouseUp,
                }));
          }),
          (p.prototype._getEventData = function (t) {
            return { target: c(t), originEvent: t };
          }),
          (p.prototype._onMouseDown = function (t) {
            0 === s(t) &&
              ((this._distance = 0),
              (this._dragStartFired = !1),
              (this._dragStartEventData = this._getEventData(t)),
              this._toggleDragEvent(!0));
          }),
          (p.prototype._onMouseMove = function (t) {
            var e = this.options.distance;
            u(t),
              (this._isMoved = !0),
              this._distance < e
                ? (this._distance += 1)
                : this._dragStartFired ||
                  ((this._dragStartFired = !0),
                  this.invoke("dragStart", this._dragStartEventData))
                ? this.fire("drag", this._getEventData(t))
                : this._toggleDragEvent(!1);
          }),
          (p.prototype._onMouseUp = function (t) {
            if ((this._toggleDragEvent(!1), this._isMoved))
              return (
                (this._isMoved = !1),
                void this.fire("dragEnd", this._getEventData(t))
              );
            this.fire("click", this._getEventData(t));
          }),
          r.mixin(p),
          (t.exports = p);
      }).call(this, n(25));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t, e) {
        var n,
          r = t._feEventKey;
        return r || (r = t._feEventKey = {}), (n = r[e]) || (n = r[e] = []), n;
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        var e,
          n,
          r = document.documentElement.style;
        for (e = 0, n = t.length; e < n; e += 1) if (t[e] in r) return t[e];
        return !1;
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return t.target || t.srcElement;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(10),
        o = n(28),
        i = n(17),
        s = n(14),
        c = n(30),
        a = n(0),
        l = n(18),
        u = n(9),
        f = n(12),
        p = n(8),
        h = n(51);
      function d(t, e) {
        (this.options = a(
          {
            cssPrefix: "tui-colorpicker-",
            preset: [
              "#181818",
              "#282828",
              "#383838",
              "#585858",
              "#B8B8B8",
              "#D8D8D8",
              "#E8E8E8",
              "#F8F8F8",
              "#AB4642",
              "#DC9656",
              "#F7CA88",
              "#A1B56C",
              "#86C1B9",
              "#7CAFC2",
              "#BA8BAF",
              "#A16946",
            ],
            detailTxt: "Detail",
          },
          t
        )),
          (e = u.appendHTMLElement(
            "div",
            e,
            this.options.cssPrefix + "palette-container"
          )),
          p.call(this, t, e);
      }
      l(d, p),
        (d.prototype._onClick = function (t) {
          var e = this.options,
            n = o(t),
            r = {};
          if (c(n, e.cssPrefix + "palette-button"))
            return (r.color = n.value), void this.fire("_selectColor", r);
          c(n, e.cssPrefix + "palette-toggle-slider") &&
            this.fire("_toggleSlider");
        }),
        (d.prototype._onChange = function (t) {
          var e = this.options,
            n = o(t),
            r = {};
          c(n, e.cssPrefix + "palette-hex") &&
            ((r.color = n.value), this.fire("_selectColor", r));
        }),
        (d.prototype._beforeDestroy = function () {
          this._toggleEvent(!1);
        }),
        (d.prototype._toggleEvent = function (t) {
          var e,
            n = this.options,
            r = this.container,
            o = t ? s : i;
          o(r, "click", this._onClick, this),
            (e = r.querySelector("." + n.cssPrefix + "palette-hex", r)) &&
              o(e, "change", this._onChange, this);
        }),
        (d.prototype.render = function (t) {
          var e,
            n = this.options;
          this._toggleEvent(!1),
            (e = h({
              cssPrefix: n.cssPrefix,
              preset: n.preset,
              detailTxt: n.detailTxt,
              color: t,
              isValidRGB: f.isValidRGB,
              getItemClass: function (t) {
                return t ? "" : " " + n.cssPrefix + "color-transparent";
              },
              isSelected: function (e) {
                return e === t ? " " + n.cssPrefix + "selected" : "";
              },
            })),
            (this.container.innerHTML = e),
            this._toggleEvent(!0);
        }),
        r.mixin(d),
        (t.exports = d);
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(23);
      t.exports = function (t, e) {
        var n;
        return t.classList
          ? t.classList.contains(e)
          : ((n = o(t).split(/\s+/)), r(e, n) > -1);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(10),
        o = n(53),
        i = n(54),
        s = n(30),
        c = n(0),
        a = n(18),
        l = n(9),
        u = n(32),
        f = n(12),
        p = n(8),
        h = n(24),
        d = n(57),
        v = [-7, 112],
        g = [-3, 115];
      function y(t, e) {
        ((e = l.appendHTMLElement(
          "div",
          e,
          t.cssPrefix + "slider-container"
        )).style.display = "none"),
          p.call(this, t, e),
          (this.options = c(
            { color: "#f8f8f8", cssPrefix: "tui-colorpicker-" },
            t
          )),
          (this._dragDataCache = {}),
          (this.sliderHandleElement = null),
          (this.huebarHandleElement = null),
          (this.baseColorElement = null),
          (this.drag = new h({ distance: 0 }, e)),
          this.drag.on(
            {
              dragStart: this._onDragStart,
              drag: this._onDrag,
              dragEnd: this._onDragEnd,
              click: this._onClick,
            },
            this
          );
      }
      a(y, p),
        (y.prototype._beforeDestroy = function () {
          this.drag.off(),
            (this.drag =
              this.options =
              this._dragDataCache =
              this.sliderHandleElement =
              this.huebarHandleElement =
              this.baseColorElement =
                null);
        }),
        (y.prototype.toggle = function (t) {
          this.container.style.display = t ? "block" : "none";
        }),
        (y.prototype.isVisible = function () {
          return "block" === this.container.style.display;
        }),
        (y.prototype.render = function (t) {
          var e,
            n,
            r = this.container,
            o = this.options,
            i = d.layout;
          f.isValidRGB(t) &&
            ((i = (i = (i = (i = i.replace(/{{slider}}/, d.slider)).replace(
              /{{huebar}}/,
              d.huebar
            )).replace(/{{cssPrefix}}/g, o.cssPrefix)).replace(
              /{{id}}/g,
              o.id
            )),
            (this.container.innerHTML = i),
            (this.sliderHandleElement = r.querySelector(
              "." + o.cssPrefix + "slider-handle"
            )),
            (this.huebarHandleElement = r.querySelector(
              "." + o.cssPrefix + "huebar-handle"
            )),
            (this.baseColorElement = r.querySelector(
              "." + o.cssPrefix + "slider-basecolor"
            )),
            (e = f.hexToRGB(t)),
            (n = f.rgbToHSV.apply(null, e)),
            this.moveHue(n[0], !0),
            this.moveSaturationAndValue(n[1], n[2], !0));
        }),
        (y.prototype._moveColorSliderHandle = function (t, e, n) {
          var r,
            o = this.sliderHandleElement;
          (e = Math.max(v[0], e)),
            (e = Math.min(v[1], e)),
            (t = Math.max(v[0], t)),
            (t = Math.min(v[1], t)),
            u.setTranslateXY(o, t, e),
            (r = e > 50 ? "white" : "#rrggbb"),
            u.setStrokeColor(o, r),
            n ||
              this.fire("_selectColor", {
                color: f.rgbToHEX.apply(null, this.getRGB()),
              });
        }),
        (y.prototype.moveSaturationAndValue = function (t, e, n) {
          var r, o, i, s;
          (t = t || 0),
            (e = e || 0),
            (r = Math.abs(v[0])),
            (i = (t * (o = v[1])) / 100 - r),
            (s = o - (e * o) / 100 - r),
            this._moveColorSliderHandle(i, s, n);
        }),
        (y.prototype._moveColorSliderByPosition = function (t, e) {
          var n = v[0];
          this._moveColorSliderHandle(t + n, e + n);
        }),
        (y.prototype.getSaturationAndValue = function () {
          var t = Math.abs(v[0]),
            e = t + v[1],
            n = u.getTranslateXY(this.sliderHandleElement);
          return [((n[1] + t) / e) * 100, 100 - ((n[0] + t) / e) * 100];
        }),
        (y.prototype._moveHueHandle = function (t, e) {
          var n,
            r,
            o = this.huebarHandleElement,
            i = this.baseColorElement;
          (t = Math.max(g[0], t)),
            (t = Math.min(g[1], t)),
            u.setTranslateY(o, t),
            (n = f.hsvToRGB(this.getHue(), 100, 100)),
            (r = f.rgbToHEX.apply(null, n)),
            u.setGradientColorStop(i, r),
            e ||
              this.fire("_selectColor", {
                color: f.rgbToHEX.apply(null, this.getRGB()),
              });
        }),
        (y.prototype.moveHue = function (t, e) {
          var n, r;
          (n = (((r = Math.abs(g[0])) + g[1]) * (t = t || 0)) / 359.99 - r),
            this._moveHueHandle(n, e);
        }),
        (y.prototype._moveHueByPosition = function (t) {
          var e = g[0];
          this._moveHueHandle(t + e);
        }),
        (y.prototype.getHue = function () {
          var t,
            e,
            n = this.huebarHandleElement,
            r = u.getTranslateXY(n);
          return (e = (t = Math.abs(g[0])) + g[1]), (359.99 * (r[0] + t)) / e;
        }),
        (y.prototype.getHSV = function () {
          var t = this.getSaturationAndValue();
          return [this.getHue()].concat(t);
        }),
        (y.prototype.getRGB = function () {
          return f.hsvToRGB.apply(null, this.getHSV());
        }),
        (y.prototype._prepareColorSliderForMouseEvent = function (t) {
          var e = this.options,
            n = i(t.target, "." + e.cssPrefix + "slider-part");
          return (this._dragDataCache = {
            isColorSlider: s(n, e.cssPrefix + "slider-left"),
            parentElement: n,
          });
        }),
        (y.prototype._onClick = function (t) {
          var e = this._prepareColorSliderForMouseEvent(t),
            n = o(t.originEvent, e.parentElement);
          e.isColorSlider
            ? this._moveColorSliderByPosition(n[0], n[1])
            : this._moveHueByPosition(n[1]),
            (this._dragDataCache = null);
        }),
        (y.prototype._onDragStart = function (t) {
          this._prepareColorSliderForMouseEvent(t);
        }),
        (y.prototype._onDrag = function (t) {
          var e = this._dragDataCache,
            n = o(t.originEvent, e.parentElement);
          e.isColorSlider
            ? this._moveColorSliderByPosition(n[0], n[1])
            : this._moveHueByPosition(n[1]);
        }),
        (y.prototype._onDragEnd = function () {
          this._dragDataCache = null;
        }),
        r.mixin(y),
        (t.exports = y);
    },
    function (t, e, n) {
      "use strict";
      var r = n(4).isOldBrowser,
        o = /[\.\-0-9]+/g,
        i = {
          getTranslateXY: function (t) {
            var e;
            return r
              ? ((e = t.style), [parseFloat(e.top), parseFloat(e.left)])
              : (e = t.getAttribute("transform"))
              ? ((e = e.match(o)), [parseFloat(e[1]), parseFloat(e[0])])
              : [0, 0];
          },
          setTranslateXY: function (t, e, n) {
            r
              ? ((t.style.left = e + "px"), (t.style.top = n + "px"))
              : t.setAttribute("transform", "translate(" + e + "," + n + ")");
          },
          setTranslateY: function (t, e) {
            r
              ? (t.style.top = e + "px")
              : t.setAttribute("transform", "translate(-6," + e + ")");
          },
          setStrokeColor: function (t, e) {
            r ? (t.strokecolor = e) : t.setAttribute("stroke", e);
          },
          setGradientColorStop: function (t, e) {
            r ? (t.color = e) : t.setAttribute("stop-color", e);
          },
        };
      t.exports = i;
    },
    function (t, e, n) {
      n(34), (t.exports = n(35));
    },
    function (t, e, n) {},
    function (t, e, n) {
      "use strict";
      var r = {
        Collection: n(19),
        View: n(8),
        Drag: n(24),
        create: n(48),
        Palette: n(29),
        Slider: n(31),
        colorutil: n(12),
        svgvml: n(32),
      };
      t.exports = r;
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return null === t;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(3),
        o = n(38);
      t.exports = function (t, e) {
        var n = location.hostname,
          i = "TOAST UI " + t + " for " + n + ": Statistics",
          s = window.localStorage.getItem(i);
        (r(window.tui) || !1 !== window.tui.usageStatistics) &&
          ((s &&
            !(function (t) {
              return new Date().getTime() - t > 6048e5;
            })(s)) ||
            (window.localStorage.setItem(i, new Date().getTime()),
            setTimeout(function () {
              ("interactive" !== document.readyState &&
                "complete" !== document.readyState) ||
                o("https://www.google-analytics.com/collect", {
                  v: 1,
                  t: "event",
                  tid: e,
                  cid: n,
                  dp: n,
                  dh: t,
                  el: t,
                  ec: "use",
                });
            }, 1e3)));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(7);
      t.exports = function (t, e) {
        var n = document.createElement("img"),
          o = "";
        return (
          r(e, function (t, e) {
            o += "&" + e + "=" + t;
          }),
          (o = o.substring(1)),
          (n.src = t + "?" + o),
          (n.style.display = "none"),
          document.body.appendChild(n),
          document.body.removeChild(n),
          n
        );
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(2),
        o = n(5),
        i = n(23),
        s = n(40);
      t.exports = function (t) {
        var e,
          n = Array.prototype.slice.call(arguments, 1),
          c = t.classList,
          a = [];
        c
          ? r(n, function (e) {
              t.classList.add(e);
            })
          : ((e = i(t)) && (n = [].concat(e.split(/\s+/), n)),
            r(n, function (t) {
              o(t, a) < 0 && a.push(t);
            }),
            s(t, a));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        o = n(3);
      t.exports = function (t, e) {
        (e = (e = r(e) ? e.join(" ") : e).replace(
          /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          ""
        )),
          o(t.className.baseVal)
            ? (t.className = e)
            : (t.className.baseVal = e);
      };
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        return "number" == typeof t || t instanceof Number;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(14),
        o = n(15),
        i = n(43),
        s = n(27),
        c = "onselectstart" in document,
        a = s([
          "userSelect",
          "WebkitUserSelect",
          "OUserSelect",
          "MozUserSelect",
          "msUserSelect",
        ]);
      t.exports = function (t) {
        t || (t = document),
          c
            ? r(t, "selectstart", o)
            : ((t = t === document ? document.documentElement : t),
              i(t, "prevUserSelect", t.style[a]),
              (t.style[a] = "none"));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(16);
      t.exports = function (t, e, n) {
        t.dataset ? (t.dataset[e] = n) : t.setAttribute("data-" + r(e), n);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(17),
        o = n(15),
        i = n(45),
        s = n(46),
        c = n(27),
        a = "onselectstart" in document,
        l = c([
          "userSelect",
          "WebkitUserSelect",
          "OUserSelect",
          "MozUserSelect",
          "msUserSelect",
        ]);
      t.exports = function (t) {
        t || (t = document),
          a
            ? r(t, "selectstart", o)
            : (((t = t === document ? document.documentElement : t).style[l] =
                i(t, "prevUserSelect") || "auto"),
              s(t, "prevUserSelect"));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(16);
      t.exports = function (t, e) {
        return t.dataset ? t.dataset[e] : t.getAttribute("data-" + r(e));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(16);
      t.exports = function (t, e) {
        t.dataset ? delete t.dataset[e] : t.removeAttribute("data-" + r(e));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(22),
        o = n(5),
        i = ["0", "1", "3", "5", "7"],
        s = ["2", "6"],
        c = ["4"];
      t.exports = function (t) {
        return r.msie && r.version <= 8
          ? (function (t) {
              var e = String(t.button);
              if (o(e, i) > -1) return 0;
              if (o(e, s) > -1) return 2;
              if (o(e, c) > -1) return 1;
              return null;
            })(t)
          : t.button;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(10),
        o = n(0),
        i = n(4),
        s = n(12),
        c = n(49),
        a = n(29),
        l = n(31),
        u = 0;
      function f(t) {
        var e;
        if (!(this instanceof f)) return new f(t);
        if (
          !(t = this.options =
            o(
              {
                container: null,
                color: "#f8f8f8",
                preset: [
                  "#181818",
                  "#282828",
                  "#383838",
                  "#585858",
                  "#b8b8b8",
                  "#d8d8d8",
                  "#e8e8e8",
                  "#f8f8f8",
                  "#ab4642",
                  "#dc9656",
                  "#f7ca88",
                  "#a1b56c",
                  "#86c1b9",
                  "#7cafc2",
                  "#ba8baf",
                  "#a16946",
                ],
                cssPrefix: "tui-colorpicker-",
                detailTxt: "Detail",
                id: (u += 1),
                usageStatistics: !0,
              },
              t
            )).container
        )
          throw new Error("ColorPicker(): need container option.");
        (e = this.layout = new c(t, t.container)),
          (this.palette = new a(t, e.container)),
          this.palette.on(
            {
              _selectColor: this._onSelectColorInPalette,
              _toggleSlider: this._onToggleSlider,
            },
            this
          ),
          (this.slider = new l(t, e.container)),
          this.slider.on("_selectColor", this._onSelectColorInSlider, this),
          e.addChild(this.palette),
          e.addChild(this.slider),
          this.render(t.color),
          t.usageStatistics && i.sendHostName();
      }
      (f.prototype._onSelectColorInPalette = function (t) {
        var e = t.color,
          n = this.options;
        s.isValidRGB(e) || "" === e
          ? (this.fire("selectColor", { color: e, origin: "palette" }),
            n.color !== e && ((n.color = e), this.render(e)))
          : this.render();
      }),
        (f.prototype._onToggleSlider = function () {
          this.slider.toggle(!this.slider.isVisible());
        }),
        (f.prototype._onSelectColorInSlider = function (t) {
          var e = t.color,
            n = this.options;
          this.fire("selectColor", { color: e, origin: "slider" }),
            n.color !== e && ((n.color = e), this.palette.render(e));
        }),
        (f.prototype.setColor = function (t) {
          if (!s.isValidRGB(t))
            throw new Error(
              "ColorPicker#setColor(): need valid hex string color value"
            );
          (this.options.color = t), this.render(t);
        }),
        (f.prototype.getColor = function () {
          return this.options.color;
        }),
        (f.prototype.toggle = function (t) {
          this.layout.container.style.display = t ? "block" : "none";
        }),
        (f.prototype.render = function (t) {
          this.layout.render(t || this.options.color);
        }),
        (f.prototype.destroy = function () {
          this.layout.destroy(),
            (this.options.container.innerHTML = ""),
            (this.layout = this.slider = this.palette = this.options = null);
        }),
        r.mixin(f),
        (t.exports = f);
    },
    function (t, e, n) {
      "use strict";
      var r = n(0),
        o = n(18),
        i = n(9),
        s = n(8);
      function c(t, e) {
        (this.options = r({ cssPrefix: "tui-colorpicker-" }, t)),
          (e = i.appendHTMLElement(
            "div",
            e,
            this.options.cssPrefix + "container"
          )),
          s.call(this, t, e),
          this.render();
      }
      o(c, s),
        (c.prototype.render = function (t) {
          this.recursive(function (e) {
            e.render(t);
          }, !0);
        }),
        (t.exports = c);
    },
    function (t, e, n) {
      "use strict";
      t.exports = function (t) {
        function e() {}
        return (e.prototype = t), new e();
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(52);
      t.exports = function (t) {
        var e = [
          '<ul class="{{cssPrefix}}clearfix">',
          "{{each preset}}",
          [
            '<li><input class="{{cssPrefix}}palette-button{{isSelected @this}}{{getItemClass @this}}" type="button"',
            "{{if isValidRGB @this}}",
            ' style="background-color:{{@this}};color:{{@this}}"',
            "{{/if}}",
            ' title="{{@this}}" value="{{@this}}" /></li>',
          ].join(""),
          "{{/each}}",
          "</ul>",
          '<div class="{{cssPrefix}}clearfix" style="overflow:hidden">',
          '<input type="button" class="{{cssPrefix}}palette-toggle-slider" value="{{detailTxt}}" />',
          '<input type="text" class="{{cssPrefix}}palette-hex" value="{{color}}" maxlength="7" />',
          '<span class="{{cssPrefix}}palette-preview" style="background-color:{{color}};color:{{color}}">{{color}}</span>',
          "</div>",
        ].join("\n");
        return r(e, t);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(2),
        i = n(1),
        s = n(11),
        c = n(0),
        a = /{{\s?|\s?}}/g,
        l = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,
        u = /\[\s?|\s?\]/,
        f = /^[a-zA-Z_]+\.[a-zA-Z_]+$/,
        p = /\./,
        h = /^["']\w+["']$/,
        d = /"|'/g,
        v = /^-?\d+\.?\d*$/,
        g = {
          if: function (t, e, n) {
            var r = (function (t, e) {
                var n = [t],
                  r = [],
                  i = 0,
                  s = 0;
                return (
                  o(e, function (t, o) {
                    0 === t.indexOf("if")
                      ? (i += 1)
                      : "/if" === t
                      ? (i -= 1)
                      : i ||
                        (0 !== t.indexOf("elseif") && "else" !== t) ||
                        (n.push(
                          "else" === t ? ["true"] : t.split(" ").slice(1)
                        ),
                        r.push(e.slice(s, o)),
                        (s = o + 1));
                  }),
                  r.push(e.slice(s)),
                  { exps: n, sourcesInsideIf: r }
                );
              })(t, e),
              i = !1,
              s = "";
            return (
              o(r.exps, function (t, e) {
                return (i = _(t, n)) && (s = b(r.sourcesInsideIf[e], n)), !i;
              }),
              s
            );
          },
          each: function (t, e, n) {
            var r = _(t, n),
              s = i(r) ? "@index" : "@key",
              a = {},
              l = "";
            return (
              o(r, function (t, r) {
                (a[s] = r), (a["@this"] = t), c(n, a), (l += b(e.slice(), n));
              }),
              l
            );
          },
          with: function (t, e, n) {
            var o = r("as", t),
              i = t[o + 1],
              s = _(t.slice(0, o), n),
              a = {};
            return (a[i] = s), b(e, c(n, a)) || "";
          },
        },
        y =
          3 === "a".split(/a/).length
            ? function (t, e) {
                return t.split(e);
              }
            : function (t, e) {
                var n,
                  r,
                  o = [],
                  i = 0;
                for (
                  e.global || (e = new RegExp(e, "g")), n = e.exec(t);
                  null !== n;

                )
                  (r = n.index),
                    o.push(t.slice(i, r)),
                    (i = r + n[0].length),
                    (n = e.exec(t));
                return o.push(t.slice(i)), o;
              };
      function m(t, e) {
        var n,
          r = e[t];
        return (
          "true" === t
            ? (r = !0)
            : "false" === t
            ? (r = !1)
            : h.test(t)
            ? (r = t.replace(d, ""))
            : l.test(t)
            ? (r = m((n = t.split(u))[0], e)[m(n[1], e)])
            : f.test(t)
            ? (r = m((n = t.split(p))[0], e)[n[1]])
            : v.test(t) && (r = parseFloat(t)),
          r
        );
      }
      function x(t, e, n) {
        for (var r, o, i, c, a = g[t], l = 1, u = 2, f = e[u]; l && s(f); )
          0 === f.indexOf(t)
            ? (l += 1)
            : 0 === f.indexOf("/" + t) && ((l -= 1), (r = u)),
            (f = e[(u += 2)]);
        if (l) throw Error(t + " needs {{/" + t + "}} expression.");
        return (
          (e[0] = a(
            e[0].split(" ").slice(1),
            ((o = 0), (i = r), (c = e.splice(o + 1, i - o)).pop(), c),
            n
          )),
          e
        );
      }
      function _(t, e) {
        var n = m(t[0], e);
        return n instanceof Function
          ? (function (t, e, n) {
              var r = [];
              return (
                o(e, function (t) {
                  r.push(m(t, n));
                }),
                t.apply(null, r)
              );
            })(n, t.slice(1), e)
          : n;
      }
      function b(t, e) {
        for (var n, r, o, i = 1, c = t[i]; s(c); )
          (r = (n = c.split(" "))[0]),
            g[r]
              ? ((o = x(r, t.splice(i, t.length - i), e)), (t = t.concat(o)))
              : (t[i] = _(n, e)),
            (c = t[(i += 2)]);
        return t.join("");
      }
      t.exports = function (t, e) {
        return b(y(t, a), e);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(1);
      t.exports = function (t, e) {
        var n,
          o = r(t),
          i = o ? t[0] : t.clientX,
          s = o ? t[1] : t.clientY;
        return e
          ? [
              i - (n = e.getBoundingClientRect()).left - e.clientLeft,
              s - n.top - e.clientTop,
            ]
          : [i, s];
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(55);
      t.exports = function (t, e) {
        var n = t.parentNode;
        if (r(t, e)) return t;
        for (; n && n !== document; ) {
          if (r(n, e)) return n;
          n = n.parentNode;
        }
        return null;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(5),
        o = n(56),
        i = Element.prototype,
        s =
          i.matches ||
          i.webkitMatchesSelector ||
          i.mozMatchesSelector ||
          i.msMatchesSelector ||
          function (t) {
            var e = this.document || this.ownerDocument;
            return r(this, o(e.querySelectorAll(t))) > -1;
          };
      t.exports = function (t, e) {
        return s.call(t, e);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(6);
      t.exports = function (t) {
        var e;
        try {
          e = Array.prototype.slice.call(t);
        } catch (n) {
          (e = []),
            r(t, function (t) {
              e.push(t);
            });
        }
        return e;
      };
    },
    function (t, e, n) {
      "use strict";
      (function (e) {
        var r = n(4).isOldBrowser,
          o = [
            '<div class="{{cssPrefix}}slider-left {{cssPrefix}}slider-part">{{slider}}</div>',
            '<div class="{{cssPrefix}}slider-right {{cssPrefix}}slider-part">{{huebar}}</div>',
          ].join("\n"),
          i = [
            '<svg class="{{cssPrefix}}svg {{cssPrefix}}svg-slider">',
            "<defs>",
            '<linearGradient id="{{cssPrefix}}svg-fill-color-{{id}}" x1="0%" y1="0%" x2="100%" y2="0%">',
            '<stop offset="0%" stop-color="rgb(255,255,255)" />',
            '<stop class="{{cssPrefix}}slider-basecolor" offset="100%" stop-color="rgb(255,0,0)" />',
            "</linearGradient>",
            '<linearGradient id="{{cssPrefix}}svn-fill-black-{{id}}" x1="0%" y1="0%" x2="0%" y2="100%">',
            '<stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:0" />',
            '<stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />',
            "</linearGradient>",
            "</defs>",
            '<rect width="100%" height="100%" fill="url(#{{cssPrefix}}svg-fill-color-{{id}})"></rect>',
            '<rect width="100%" height="100%" fill="url(#{{cssPrefix}}svn-fill-black-{{id}})"></rect>',
            '<path transform="translate(0,0)" class="{{cssPrefix}}slider-handle" d="M0 7.5 L15 7.5 M7.5 15 L7.5 0 M2 7 a5.5 5.5 0 1 1 0 1 Z" stroke="#rrggbb" stroke-width="0.75" fill="none" />',
            "</svg>",
          ].join("\n"),
          s = [
            '<div class="{{cssPrefix}}vml-slider">',
            '<v:rect strokecolor="none" class="{{cssPrefix}}vml {{cssPrefix}}vml-slider-bg">',
            '<v:fill class="{{cssPrefix}}vml {{cssPrefix}}slider-basecolor" type="gradient" method="none" color="#ff0000" color2="#fff" angle="90" />',
            "</v:rect>",
            '<v:rect strokecolor="#ccc" class="{{cssPrefix}}vml {{cssPrefix}}vml-slider-bg">',
            '<v:fill type="gradient" method="none" color="#rrggbb" color2="white" o:opacity2="0%" class="{{cssPrefix}}vml" />',
            "</v:rect>",
            '<v:shape class="{{cssPrefix}}vml {{cssPrefix}}slider-handle" coordsize="1 1" style="width:1px;height:1px;"path="m 0,7 l 14,7 m 7,14 l 7,0 ar 12,12 2,2 z" filled="false" stroked="true" />',
            "</div>",
          ].join("\n"),
          c = [
            '<svg class="{{cssPrefix}}svg {{cssPrefix}}svg-huebar">',
            "<defs>",
            '<linearGradient id="g-{{id}}" x1="0%" y1="0%" x2="0%" y2="100%">',
            '<stop offset="0%" stop-color="rgb(255,0,0)" />',
            '<stop offset="16.666%" stop-color="rgb(255,255,0)" />',
            '<stop offset="33.333%" stop-color="rgb(0,255,0)" />',
            '<stop offset="50%" stop-color="rgb(0,255,255)" />',
            '<stop offset="66.666%" stop-color="rgb(0,0,255)" />',
            '<stop offset="83.333%" stop-color="rgb(255,0,255)" />',
            '<stop offset="100%" stop-color="rgb(255,0,0)" />',
            "</linearGradient>",
            "</defs>",
            '<rect width="18px" height="100%" fill="url(#g-{{id}})"></rect>',
            '<path transform="translate(-6,-3)" class="{{cssPrefix}}huebar-handle" d="M0 0 L4 4 L0 8 L0 0 Z" fill="#rrggbb" stroke="none" />',
            "</svg>",
          ].join("\n"),
          a = [
            '<div class="{{cssPrefix}}vml-huebar">',
            '<v:rect strokecolor="#ccc" class="{{cssPrefix}}vml {{cssPrefix}}vml-huebar-bg">',
            '<v:fill type="gradient" method="none" colors="0% rgb(255,0,0), 16.666% rgb(255,255,0), 33.333% rgb(0,255,0), 50% rgb(0,255,255), 66.666% rgb(0,0,255), 83.333% rgb(255,0,255), 100% rgb(255,0,0)" angle="180" class="{{cssPrefix}}vml" />',
            "</v:rect>",
            '<v:shape class="{{cssPrefix}}vml {{cssPrefix}}huebar-handle" coordsize="1 1" style="width:1px;height:1px;position:absolute;z-index:1;right:22px;top:-3px;"path="m 0,0 l 4,4 l 0,8 l 0,0 z" filled="true" fillcolor="#rrggbb" stroked="false" />',
            "</div>",
          ].join("\n");
        r && e.document.namespaces.add("v", "urn:schemas-microsoft-com:vml"),
          (t.exports = { layout: o, slider: r ? s : i, huebar: r ? a : c });
      }).call(this, n(25));
    },
  ]);
});
