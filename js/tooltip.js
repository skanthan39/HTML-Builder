/*! grapesjs-tooltip - 0.1.7 */
!(function(t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports["grapesjs-tooltip"] = e())
    : (t["grapesjs-tooltip"] = e());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var t = {
          d: (e, n) => {
            for (var o in n)
              t.o(n, o) &&
                !t.o(e, o) &&
                Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
          },
          o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
          r: t => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(t, "__esModule", { value: !0 });
          }
        },
        e = {};
      t.r(e), t.d(e, { default: () => o });
      var n =
        (void 0 && (void 0).__assign) ||
        function() {
          return (
            (n =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var a in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
      const o = function(t, e) {
        var o;
        void 0 === e && (e = {});
        var a = n(
            {
              id: "tooltip",
              labelTooltip: "Tooltip",
              blockTooltip: {},
              propsTooltip: {},
              extendTraits: function(t) {
                return t;
              },
              attrTooltip: "data-tooltip",
              classTooltip: "tooltip-component",
              style: "",
              styleAdditional: "",
              privateClasses: !0,
              stylableTooltip: [
                "background-color",
                "padding",
                "padding-top",
                "padding-right",
                "padding-bottom",
                "padding-left",
                "font-family",
                "font-size",
                "font-weight",
                "letter-spacing",
                "color",
                "line-height",
                "text-align",
                "border-radius",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-bottom-left-radius",
                "border-bottom-right-radius",
                "border",
                "border-width",
                "border-style",
                "border-color"
              ],
              showTooltipOnStyle: !0
            },
            e
          ),
          r = a.propsTooltip,
          l = a.classTooltip,
          i = a.style,
          c = a.styleAdditional,
          s = a.privateClasses,
          p = a.stylableTooltip,
          d = a.showTooltipOnStyle,
          f = a.blockTooltip,
          m = a.extendTraits,
          u = a.id,
          b = a.labelTooltip,
          h = a.attrTooltip;
        f &&
          t.BlockManager.add(
            u,
            n(
              {
                media:
                  '<svg  class="basicList"  viewBox="0 0 24 24">\n    <path fill-rule="white" d="M8,18 C9.1045695,18 10,18.8954305 10,20 C10,21.1045695 9.1045695,22 8,22 C6.8954305,22 6,21.1045695 6,20 C6,18.8954305 6.8954305,18 8,18 Z M16,18 C17.1045695,18 18,18.8954305 18,20 C18,21.1045695 17.1045695,22 16,22 C14.8954305,22 14,21.1045695 14,20 C14,18.8954305 14.8954305,18 16,18 Z M8,10 C9.1045695,10 10,10.8954305 10,12 C10,13.1045695 9.1045695,14 8,14 C6.8954305,14 6,13.1045695 6,12 C6,10.8954305 6.8954305,10 8,10 Z M16,10 C17.1045695,10 18,10.8954305 18,12 C18,13.1045695 17.1045695,14 16,14 C14.8954305,14 14,13.1045695 14,12 C14,10.8954305 14.8954305,10 16,10 Z M8,2 C9.1045695,2 10,2.8954305 10,4 C10,5.1045695 9.1045695,6 8,6 C6.8954305,6 6,5.1045695 6,4 C6,2.8954305 6.8954305,2 8,2 Z M16,2 C17.1045695,2 18,2.8954305 18,4 C18,5.1045695 17.1045695,6 16,6 C14.8954305,6 14,5.1045695 14,4 C14,2.8954305 14.8954305,2 16,2 Z">\n  </svg> <svg style="background-color:#f1f5f9" viewBox="0 0 24 24">\n          <path d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4l-4 4-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m0 2v12h4.83L12 19.17 15.17 16H20V4H4z"></path>\n        </svg>',
                label: b,
                category: "Extra",
                select: !0,
                content: { type: u }
              },
              f
            )
          );
        var v = "".concat(l, "__body"),
          g = "".concat(l, "--empty"),
          y = "".concat(h, "-visible"),
          w = "".concat(h, "-pos"),
          x = "".concat(h, "-length");
        s &&
          t.SelectorManager.getAll().add([
            { private: 1, name: l },
            { private: 1, name: v },
            { private: 1, name: g }
          ]),
          t.Components.addType(u, {
            isComponent: function(t) {
              var e;
              return null === (e = t.hasAttribute) || void 0 === e
                ? void 0
                : e.call(t, h);
            },
            model: {
              defaults: n(
                {
                  name: b,
                  classes: [l],
                  attributes: ((o = {}), (o[h] = b), o),
                  styles:
                    (i ||
                      "\n          ."
                        .concat(
                          l,
                          " {\n            position: relative;\n            display: inline-block;\n            vertical-align: top;\n          }\n\n          ."
                        )
                        .concat(
                          g,
                          " {\n            width: 50px;\n            height: 50px;\n          }\n\n          ."
                        )
                        .concat(v, ",\n          [")
                        .concat(
                          h,
                          "]::after {\n            font-family: Helvetica, sans-serif;\n            background: rgba(55, 61, 73, 0.95);\n            border-radius: 3px;\n            bottom: 100%;\n            color: #fff;\n            content: attr("
                        )
                        .concat(
                          h,
                          ");\n            display: block;\n            font-size: 12px;\n            left: 50%;\n            line-height: normal;\n            max-width: 32rem;\n            opacity: 0;\n            overflow: hidden;\n            padding: 8px 16px;\n            pointer-events: none;\n            position: absolute;\n            text-overflow: ellipsis;\n            transform: translate(-50%, 0);\n            transition: opacity 0.25s, transform 0.25s;\n            white-space: nowrap;\n            box-sizing: border-box;\n            z-index: 10;\n          }\n\n          ["
                        )
                        .concat(y, "=true]::after,\n          [")
                        .concat(h, "]:focus::after,\n          [")
                        .concat(
                          h,
                          "]:hover::after {\n            opacity: 1;\n            transform: translate(-50%, -0.5rem);\n          }\n\n          ["
                        )
                        .concat(
                          w,
                          "=right]::after {\n            bottom: 50%;\n            left: 100%;\n            transform: translate(0, 50%);\n          }\n\n          ["
                        )
                        .concat(w, "=right]:focus::after,\n          [")
                        .concat(w, "=right]:hover::after,\n          [")
                        .concat(y, "=true][")
                        .concat(
                          w,
                          "=right]::after {\n            transform: translate(0.5rem, 50%);\n          }\n\n          ["
                        )
                        .concat(
                          w,
                          "=bottom]::after {\n            bottom: auto;\n            top: 100%;\n            transform: translate(-50%, 0);\n          }\n\n          ["
                        )
                        .concat(w, "=bottom]:focus::after,\n          [")
                        .concat(w, "=bottom]:hover::after,\n          [")
                        .concat(y, "=true][")
                        .concat(
                          w,
                          "=bottom]::after {\n            transform: translate(-50%, 0.5rem);\n          }\n\n          ["
                        )
                        .concat(
                          w,
                          "=left]::after {\n            bottom: 50%;\n            left: auto;\n            right: 100%;\n            transform: translate(0, 50%);\n          }\n\n          ["
                        )
                        .concat(w, "=left]:focus::after,\n          [")
                        .concat(w, "=left]:hover::after,\n          [")
                        .concat(y, "=true][")
                        .concat(
                          w,
                          "=left]::after {\n            transform: translate(-0.5rem, 50%);\n          }\n\n          ["
                        )
                        .concat(
                          x,
                          "=small]::after {\n            white-space: normal;\n            width: 80px;\n          }\n\n          ["
                        )
                        .concat(
                          x,
                          "=medium]::after {\n            white-space: normal;\n            width: 150px;\n          }\n\n          ["
                        )
                        .concat(
                          x,
                          "=large]::after {\n            white-space: normal;\n            width: 300px;\n          }\n\n          ["
                        )
                        .concat(
                          x,
                          "=fit]::after {\n            white-space: normal;\n            width: 100%;\n          }\n\n          // IE 11 bugfix\n          button["
                        )
                        .concat(
                          h,
                          "] {\n            overflow: visible;\n          }\n        "
                        )) + c,
                  traits: m([
                    { name: h, label: "Text" },
                    {
                      name: w,
                      label: "Position",
                      type: "select",
                      options: [
                        { value: "top", name: "Top" },
                        { value: "right", name: "Right" },
                        { value: "bottom", name: "Bottom" },
                        { value: "left", name: "Left" }
                      ]
                    },
                    {
                      name: x,
                      label: "Length",
                      type: "select",
                      options: [
                        { value: "", name: "One line" },
                        { value: "small", name: "Small" },
                        { value: "medium", name: "Medium" },
                        { value: "large", name: "Large" },
                        { value: "fit", name: "Fit" }
                      ]
                    },
                    {
                      name: y,
                      label: "Visible",
                      type: "checkbox",
                      valueTrue: "true"
                    },
                    {
                      name: "style-tooltip",
                      labelButton: "Style tooltip",
                      type: "button",
                      full: !0,
                      command: function(t) {
                        var e,
                          n = t.Panels.getButton("views", "open-sm");
                        null == n || n.set("active", !0);
                        var o = t.Css.getRules(".".concat(v))[0];
                        if (
                          (o.set("stylable", p), t.StyleManager.select(o), d)
                        ) {
                          var a = t.getSelected();
                          (null == a ? void 0 : a.is(u)) &&
                            (a.addAttributes((((e = {})[y] = "true"), e)),
                            t.once("style:target", function() {
                              var t;
                              a.addAttributes((((t = {})[y] = "false"), t));
                            }));
                        }
                      }
                    }
                  ])
                },
                r
              ),
              init: function() {
                this.listenTo(this.components(), "add remove", this.checkEmpty),
                  this.checkEmpty();
              },
              checkEmpty: function() {
                this[!this.components().length ? "addClass" : "removeClass"](
                  "".concat(g)
                );
              }
            }
          });
      };
      return e;
    })()
);
//# sourceMappingURL=index.js.map
