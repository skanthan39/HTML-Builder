/*! grapesjs-custom-code - 1.0.1 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["grapesjs-custom-code"] = t())
    : (e["grapesjs-custom-code"] = t());
})(
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : this,
  () =>
    (() => {
      "use strict";
      var e = {
          d: (t, o) => {
            for (var n in o)
              e.o(o, n) &&
                !e.o(t, n) &&
                Object.defineProperty(t, n, { enumerable: !0, get: o[n] });
          },
          o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
          r: (e) => {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          },
        },
        t = {};
      e.r(t), e.d(t, { default: () => d });
      var o = "custom-code-plugin__code",
        n = "custom-code",
        i = "custom-code:open-modal",
        r =
          (void 0 && (void 0).__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (e) {
                  for (var t, o = 1, n = arguments.length; o < n; o++)
                    for (var i in (t = arguments[o]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              r.apply(this, arguments)
            );
          };
      var s =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (s =
              Object.assign ||
              function (e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var i in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            s.apply(this, arguments)
          );
        };
      var a =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var i in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            a.apply(this, arguments)
          );
        };
      var c =
        (void 0 && (void 0).__assign) ||
        function () {
          return (
            (c =
              Object.assign ||
              function (e) {
                for (var t, o = 1, n = arguments.length; o < n; o++)
                  for (var i in (t = arguments[o]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            c.apply(this, arguments)
          );
        };
      const d = function (e, t) {
        void 0 === t && (t = {});
        var d = c(
          {
            blockCustomCode: {},
            propsCustomCode: {},
            toolbarBtnCustomCode: {},
            placeholderScript:
              '<div style="pointer-events: none; padding: 10px;">\n      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">\n        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>\n        </svg>\n      Custom code with <i>&lt;script&gt;</i> can\'t be rendered on the canvas\n    </div>',
            modalTitle: "Insert your code",
            codeViewOptions: {},
            buttonLabel: "Save",
            commandCustomCode: {},
          },
          t
        );
        !(function (e, t) {
          void 0 === t && (t = {});
          var s,
            a = e.Components,
            c = t.toolbarBtnCustomCode;
          a.addType("script", {
            view: {
              onRender: function () {
                var e = this.model,
                  t = this.el;
                e.closestType(n) && (t.innerHTML = "");
              },
            },
          }),
            a.addType(n, {
              model: {
                defaults: r(
                  {
                    name: "Custom Code",
                    editable: !0,
                    components: {
                      tagName: "span",
                      components: {
                        type: "textnode",
                        content: "Insert here your custom code",
                      },
                    },
                  },
                  t.propsCustomCode
                ),
                init: function () {
                  this.on("change:".concat(o), this.onCustomCodeChange);
                  var e = this.get(o);
                  !this.components().length && this.components(e);
                  var t = this.get("toolbar"),
                    n = "custom-code";
                  c &&
                    !t.filter(function (e) {
                      return e.id === n;
                    }).length &&
                    t.unshift(
                      r(
                        {
                          id: n,
                          command: i,
                          label:
                            '<svg viewBox="0 0 24 24">\n              <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>\n            </svg>',
                        },
                        c
                      )
                    );
                },
                onCustomCodeChange: function () {
                  this.components(this.get(o));
                },
              },
              view: {
                events: { dblclick: "onActive" },
                init: function () {
                  this.listenTo(
                    this.model.components(),
                    "add remove reset",
                    this.onComponentsChange
                  ),
                    this.onComponentsChange();
                },
                onComponentsChange: function () {
                  var e = this;
                  s && clearInterval(s),
                    (s = setTimeout(function () {
                      var n = e,
                        i = n.model,
                        r = n.el,
                        s = !0;
                      (i.get(o) || "").indexOf("<script") >= 0 &&
                        t.placeholderScript &&
                        ((r.innerHTML = t.placeholderScript), (s = !1)),
                        i.set({ droppable: s });
                    }, 0));
                },
                onActive: function () {
                  var e = this.model;
                  this.em.get("Commands").run(i, { target: e });
                },
              },
            });
        })(e, d),
          (function (e, t) {
            var o = (void 0 === t ? {} : t).blockCustomCode,
              i = e.Blocks;
            o &&
              i.add(
                n,
                s(
                  {
                    label: "Custom Code",
                    media:
                      '\n     <svg  class="basicList" id="CustomCode" viewBox="0 0 24 24">\n    <path fill-rule="white" d="M8,18 C9.1045695,18 10,18.8954305 10,20 C10,21.1045695 9.1045695,22 8,22 C6.8954305,22 6,21.1045695 6,20 C6,18.8954305 6.8954305,18 8,18 Z M16,18 C17.1045695,18 18,18.8954305 18,20 C18,21.1045695 17.1045695,22 16,22 C14.8954305,22 14,21.1045695 14,20 C14,18.8954305 14.8954305,18 16,18 Z M8,10 C9.1045695,10 10,10.8954305 10,12 C10,13.1045695 9.1045695,14 8,14 C6.8954305,14 6,13.1045695 6,12 C6,10.8954305 6.8954305,10 8,10 Z M16,10 C17.1045695,10 18,10.8954305 18,12 C18,13.1045695 17.1045695,14 16,14 C14.8954305,14 14,13.1045695 14,12 C14,10.8954305 14.8954305,10 16,10 Z M8,2 C9.1045695,2 10,2.8954305 10,4 C10,5.1045695 9.1045695,6 8,6 C6.8954305,6 6,5.1045695 6,4 C6,2.8954305 6.8954305,2 8,2 Z M16,2 C17.1045695,2 18,2.8954305 18,4 C18,5.1045695 17.1045695,6 16,6 C14.8954305,6 14,5.1045695 14,4 C14,2.8954305 14.8954305,2 16,2 Z">\n  </svg>   <svg style="background-color:#f1f5f9" viewBox="0 0 24 24">\n        <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>\n      </svg>\n    ',
                    category: "Extra",
                    activate: !0,
                    select: !0,
                    content: { type: n },
                  },
                  o
                )
              );
          })(e, d),
          (function (e, t) {
            void 0 === t && (t = {});
            var n = t.modalTitle,
              r = t.codeViewOptions,
              s = t.commandCustomCode,
              c = function (e, t) {
                t instanceof HTMLElement
                  ? e.appendChild(t)
                  : t && e.insertAdjacentHTML("beforeend", t);
              };
            e.Commands.add(
              i,
              a(
                {
                  keyCustomCode: o,
                  run: function (e, t, o) {
                    void 0 === o && (o = {});
                    var n = o.target || e.getSelected();
                    (this.target = n),
                      (null == n ? void 0 : n.get("editable")) &&
                        this.showCustomCode(n, o);
                  },
                  stop: function (e) {
                    e.Modal.close();
                  },
                  showCustomCode: function (t, r) {
                    var s = r.title || n,
                      a = t.get(o) || "",
                      c = this.getContent();
                    e.Modal.open({ title: s, content: c }).onceClose(
                      function () {
                        return e.stopCommand(i);
                      }
                    ),
                      this.getCodeViewer().setContent(a);
                  },
                  getPreContent: function () {},
                  getPostContent: function () {},
                  getContent: function () {
                    var t = this.getCodeViewer(),
                      o = document.createElement("div"),
                      n = e.getConfig("stylePrefix");
                    return (
                      (o.className = "".concat(n, "custom-code")),
                      c(o, this.getPreContent()),
                      o.appendChild(t.getElement()),
                      c(o, this.getPostContent()),
                      c(o, this.getContentActions()),
                      t.refresh(),
                      setTimeout(function () {
                        return t.focus();
                      }, 0),
                      o
                    );
                  },
                  getContentActions: function () {
                    var o = this,
                      n = document.createElement("button");
                    n.setAttribute("type", "button");
                    var i = e.getConfig("stylePrefix");
                    return (
                      (n.innerHTML = t.buttonLabel),
                      (n.className = ""
                        .concat(i, "btn-prim ")
                        .concat(i, "btn-import__custom-code")),
                      (n.onclick = function () {
                        return o.handleSave();
                      }),
                      n
                    );
                  },
                  handleSave: function () {
                    var t = this.target,
                      n = this.getCodeViewer().getContent();
                    t.set(o, n), e.Modal.close();
                  },
                  getCodeViewer: function () {
                    return (
                      this.codeViewer ||
                        (this.codeViewer = e.CodeManager.createViewer(
                          a(
                            {
                              codeName: "htmlmixed",
                              theme: "hopscotch",
                              readOnly: 0,
                            },
                            r
                          )
                        )),
                      this.codeViewer
                    );
                  },
                },
                s
              )
            );
          })(e, d);
      };
      return t;
    })()
);
//# sourceMappingURL=index.js.map
