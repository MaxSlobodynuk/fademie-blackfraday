"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [833],
  {
    76227: (e, t, n) => {
      n(52675),
        n(89463),
        n(2259),
        n(51629),
        n(23418),
        n(64346),
        n(23792),
        n(34782),
        n(23288),
        n(62010),
        n(26099),
        n(27495),
        n(38781),
        n(47764),
        n(23500),
        n(62953),
        n(28706),
        n(48598),
        n(62062),
        n(5506),
        n(76031);
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                l = [],
                c = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  c = !1;
                } else
                  for (
                    ;
                    !(c = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    c = !0
                  );
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (
                    !c &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          o(e)
        );
      }
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return l(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(e, t) {
        if (e) {
          if ("string" == typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var c = function (e) {
          var t = {
            days: Math.floor(e / 864e5),
            hours: Math.floor((e / 36e5) % 24),
            minutes: Math.floor((e / 1e3 / 60) % 60),
            seconds: Math.floor((e / 1e3) % 60),
          };
          return Object.entries(COUNTDOWN_LABELS).map(function (n) {
            var o = r(n, 2),
              i = o[0],
              a = o[1],
              l = e >= 0 ? t[i] : 0;
            return [("0" + l).slice(-2).toString(), u(l, a)];
          });
        },
        u = function (e, t) {
          return t[
            e % 100 > 4 && e % 100 < 20
              ? 2
              : [2, 0, 1, 1, 1, 2][e % 10 < 5 ? e % 10 : 5]
          ];
        },
        s = n(46719);
      const d = function (e) {
        var t = e.wrap,
          n = e.itemSelector,
          r = e.triggerSelector,
          o = e.bodySelector,
          i = e.isShownClass,
          a = e.heightProp;
        null == t ||
          t.addEventListener("click", function (e) {
            var l = e.target;
            if (l.matches(r) || l.closest(r)) {
              var c = l.closest(n),
                u = c.querySelector(o);
              c.style.setProperty(a, "".concat(u.scrollHeight, "px")),
                c.matches(".".concat(i))
                  ? c.classList.remove(i)
                  : (t.querySelectorAll(".".concat(i)).forEach(function (e) {
                      e.classList.remove(i);
                    }),
                    c.classList.add(i)),
                (0, s.wk)("minPc") ||
                  t.addEventListener(
                    "transitionend",
                    function () {
                      var e =
                        c.getBoundingClientRect().top -
                        0.1 * window.innerHeight;
                      window.scrollBy(0, e);
                    },
                    { once: !0 }
                  );
            }
          });
      };
      const f = function () {
        var e,
          t = document.querySelector(".skill-box");
        if (t) {
          var n = document.getElementById("packages-select"),
            r = null == t ? void 0 : t.querySelector(".skill-box-button"),
            o = document.querySelector(".form__select-text"),
            i =
              null == t ||
              null === (e = t.querySelector(".card")) ||
              void 0 === e
                ? void 0
                : e.getAttribute("data-package-title");
          null == r ||
            r.addEventListener("click", function () {
              var e = null == n ? void 0 : n.querySelectorAll("option");
              null == e ||
                e.forEach(function (e) {
                  (null == e ? void 0 : e.textContent) === i
                    ? null == e || e.setAttribute("selected", "")
                    : null == e || e.removeAttribute("selected");
                }),
                (o.textContent = i);
            });
        }
      };
      var m = n(53356);
      function p(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return y(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return y(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var v = n(80531),
        b = n(13463),
        h = n(16955);
      function g(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return w(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return w(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return w(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n(2892);
      var S = n(12705),
        A = n(87082),
        E = n(63036);
      function x(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return L(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return L(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return L(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const I = function () {
        var e = x(document.querySelectorAll("[data-packages-slider]"));
        v.A.use([b.A, h.A]);
        null == e ||
          e.forEach(function (e) {
            new v.A(e.querySelector(".swiper"), {
              spaceBetween: 20,
              slidesPerView: 1,
              grabCursor: !0,
              navigation: {
                nextEl: e.querySelector("[data-next]"),
                prevEl: e.querySelector("[data-prev]"),
              },
              pagination: {
                el: e.querySelector("[data-pagination]"),
                type: "bullets",
                clickable: !0,
              },
              breakpoints: {
                768: { spaceBetween: 20, slidesPerView: 1.1 },
                1280: { spaceBetween: 28, slidesPerView: 2 },
              },
            });
          });
      };
      n(2008), n(15086), n(36033), n(42762);
      var _ = document.body,
        q = "fixed-btn-shown";
      function O(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return T(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return T(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return T(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      document.addEventListener("DOMContentLoaded", function () {
        var e;
        !(function (e) {
          var t = i(document.querySelectorAll(e));
          if (0 != t.length)
            if (
              "string" == typeof COUNTDOWN_FINAL_DATE ||
              "object" ===
                ("undefined" == typeof COUNTDOWN_LABELS
                  ? "undefined"
                  : o(COUNTDOWN_LABELS))
            ) {
              var n = function () {
                var n =
                    Date.parse(COUNTDOWN_FINAL_DATE) - Date.parse(new Date()),
                  o = c(n)
                    .map(function (e) {
                      var t = r(e, 2),
                        n = t[0],
                        o = t[1];
                      return '\n                <div class="indicator">\n                    <span class="indicator__value">'
                        .concat(
                          n,
                          '</span>\n                    <span class="indicator__label">'
                        )
                        .concat(
                          o,
                          "</span>\n                </div>\n            "
                        );
                    })
                    .join("");
                t.forEach(function (e) {
                  return (e.innerHTML = o);
                }),
                  n <= 0 &&
                    (clearInterval(a),
                    t.forEach(function (e) {
                      return (e.innerHTML = "");
                    }),
                    (document.querySelector(e).parentElement.innerHTML = ""),
                    (document.querySelector(".counter-section").style.display =
                      "none"));
              };
              n();
              var a = setInterval(n, 1e3);
            } else
              console.error(
                '\n            Please, setup countdown at "SETTINGS" block.\n            COUNTDOWN_FINAL_DATE and COUNTDOWN_LABELS are required.\n        '
              );
        })(".js-countdown"),
          f(),
          (function () {
            var e = document.getElementById("packages-select");
            if (null !== e) {
              var t = document.querySelector(".form__dropdown ul"),
                n = document.querySelector(".select__wrap"),
                r = document.querySelector(".form__select-text"),
                o = Array.from(
                  document.querySelectorAll(".packages__action a")
                );
              null == n ||
                n.addEventListener("click", function () {
                  null == n || n.classList.toggle("opened");
                });
              var i = p(document.querySelectorAll("[data-package-title]"));
              null == i ||
                i.forEach(function (n) {
                  var r = n.getAttribute("data-package-title"),
                    o = document.createElement("option");
                  (o.text = r), (o.value = r), null == e || e.appendChild(o);
                  var i = document.createElement("li");
                  (i.textContent = r), null == t || t.appendChild(i);
                });
              var a = null == e ? void 0 : e.querySelectorAll("option");
              null == t ||
                t.addEventListener("click", function (e) {
                  if ("LI" === e.target.tagName) {
                    var t = e.target.textContent;
                    (r.textContent = t),
                      null == a ||
                        a.forEach(function (e) {
                          (null == e ? void 0 : e.textContent) === t
                            ? null == e || e.setAttribute("selected", "")
                            : null == e || e.removeAttribute("selected");
                        });
                  }
                }),
                document.addEventListener("click", function (e) {
                  (null != n && n.contains(e.target)) ||
                    null == n ||
                    n.classList.remove("opened");
                }),
                o.forEach(function (e) {
                  e.addEventListener("click", function () {
                    var t = e
                      .closest(".packages__item-btn-container")
                      .querySelector("[data-package-title]")
                      .dataset.packageTitle;
                    r.textContent = t;
                    var n = document.querySelector("select"),
                      o = Array.from(n.options);
                    null == o ||
                      o.forEach(function (e) {
                        e.selected = e.value === t;
                      });
                  });
                });
            }
          })(),
          null == (e = g(document.querySelectorAll("[data-reviews-slider]"))) ||
            e.forEach(function (e) {
              v.A.use([b.A, h.A]);
              var t = new v.A(
                  e.querySelector("[data-reviews-slider-container]"),
                  {
                    slidesPerView: 1.12,
                    autoHeight: !0,
                    spaceBetween: 20,
                    navigation: {
                      nextEl: e.querySelector("[data-reviews-next]"),
                      prevEl: e.querySelector("[data-reviews-prev]"),
                    },
                    pagination: {
                      el: e.querySelector("[data-review-pagination]"),
                      clickable: !0,
                    },
                    breakpoints: {
                      768: { slidesPerView: 1.91, spaceBetween: 40 },
                      1280: { slidesPerView: 1, spaceBetween: 40 },
                    },
                  }
                ),
                n = e.querySelectorAll("[data-reviews-btn]");
              null == n ||
                n.forEach(function (e) {
                  e.addEventListener("click", function () {
                    e
                      .closest("[data-reviews-slide]")
                      .classList.toggle("opened"),
                      null == t || t.updateAutoHeight();
                  });
                });
            }),
          (function () {
            var e = document.querySelector(".header"),
              t = null == e ? void 0 : e.nextElementSibling,
              n = 0;
            if ("undefined" != typeof HEADER_SHOW_THRESHOLD_MILTIPLIER) {
              var r = Number(HEADER_SHOW_THRESHOLD_MILTIPLIER) || 0;
              (n = window.innerHeight * r),
                window.addEventListener("resize", function () {
                  n = window.innerHeight * r;
                });
            }
            var o =
              void 0 === window.isFixedHeaderOnMobile ||
              window.isFixedHeaderOnMobile;
            window.addEventListener(
              "scroll",
              (0, S.A)(function () {
                var r =
                  (null == t ? void 0 : t.getBoundingClientRect().bottom) <= n;
                (0, A.wk)("minSmTab") || o
                  ? null == e || e.classList.toggle("scrolled", r)
                  : null == e || e.classList.remove("scrolled");
              }, 100)
            );
          })(),
          I(),
          (function () {
            var e = document.getElementById("fixed-enroll"),
              t = null == e ? void 0 : e.dataset.toggleSection;
            if (e && t) {
              var n = t
                .split(",")
                .map(function (e) {
                  return e.trim();
                })
                .map(function (e) {
                  return document.querySelector(e);
                })
                .filter(Boolean);
              if (n.length > 0) {
                _.classList.add("has-fixed-btn"), _.classList.remove(q);
                var r = new Map(
                    n.map(function (e) {
                      return [e, !1];
                    })
                  ),
                  o = new IntersectionObserver(
                    function (e) {
                      e.forEach(function (e) {
                        r.set(e.target, e.isIntersecting);
                      }),
                        Array.from(r.values()).some(function (e) {
                          return e;
                        })
                          ? _.classList.remove(q)
                          : _.classList.add(q);
                    },
                    { threshold: 0 }
                  );
                n.forEach(function (e) {
                  return o.observe(e);
                });
              }
            }
          })();
        var t = document.getElementById("order");
        if (t) {
          var n = (0, m.A)(t, { itemSelector: ".form__item" }).submitBtn,
            a = document.createRange().createContextualFragment(E.C);
          null == n || n.appendChild(a);
        }
        var l = O(document.getElementsByClassName("packages__box"));
        null == l ||
          l.forEach(function (e) {
            d({
              wrap: e,
              itemSelector: ".packages__item-box",
              triggerSelector: ".js-program-trigger",
              bodySelector: ".packages__hidden-mob",
              isShownClass: "opened",
              heightProp: "--package-height",
            });
          });
        var u = O(document.getElementsByClassName("faq"));
        null == u ||
          u.forEach(function (e) {
            d({
              wrap: e,
              itemSelector: ".js-faq-item",
              triggerSelector: ".js-faq-trigger",
              bodySelector: ".js-faq-body",
              isShownClass: "faq-shown",
              heightProp: "--faq-height",
            });
          });
      });
    },
    87082: (e, t, n) => {
      n.d(t, { HP: () => r, wk: () => o });
      var r = {
        minXl: "(min-width: 1900px)",
        minLgXl: "(min-width: 1600px)",
        minLg: "(min-width: 1440px)",
        minPc: "(min-width: 1280px)",
        minSmPc: "(min-width: 1140px)",
        minLgTab: "(min-width: 1024px)",
        minTab: "(min-width: 968px)",
        minSmTab: "(min-width: 768px)",
        minLgMob: "(min-width: 568px)",
        minMob: "(min-width: 414px)",
        minSmMob: "(min-width: 375px)",
        minXsMob: "(min-width: 321px)",
      };
      function o(e) {
        return window.matchMedia(r[e]).matches;
      }
    },
    12705: (e, t, n) => {
      n.d(t, { A: () => r });
      n(76031);
      const r = function (e, t) {
        var n = !1;
        return function () {
          n ||
            (e.call(),
            (n = !0),
            setTimeout(function () {
              n = !1;
            }, t));
        };
      };
    },
    63036: (e, t, n) => {
      n.d(t, { C: () => r });
      var r =
        '<span class="btn-loader"> <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span> <span>&nbsp;</span> </span>';
    },
    46719: (e, t, n) => {
      n.d(t, { HP: () => o, wk: () => i });
      n(52675),
        n(89463),
        n(2259),
        n(28706),
        n(23792),
        n(48598),
        n(79432),
        n(26099),
        n(47764),
        n(62953);
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      var o = {
          minXl: "(min-width: 1900px)",
          minLg: "(min-width: 1440px)",
          minPc: "(min-width: 1280px)",
          minSmPc: "(min-width: 1140px)",
          minLgTab: "(min-width: 1024px)",
          minTab: "(min-width: 968px)",
          minMdTab: "(min-width: 820px)",
          minSmTab: "(min-width: 768px)",
          minLgMob: "(min-width: 568px)",
          minMob: "(min-width: 414px)",
          minSmMob: "(min-width: 375px)",
          minXsMob: "(min-width: 321px)",
        },
        i = function (e) {
          switch (r(e)) {
            case "string":
              return window.matchMedia(o[e]).matches;
            case "number":
              return window.matchMedia("(min-width: ".concat(e, "px)")).matches;
            default:
              return (
                console.warn(
                  '\n                Invalid media query "'
                    .concat(
                      e,
                      '". \n                Expected type "string | number". \n                Available string values: '
                    )
                    .concat(Object.keys(o).join(", "), ".\n            ")
                ),
                !1
              );
          }
        };
    },
    6763: (e) => {
      e.exports =
        "function" == typeof Bun && Bun && "string" == typeof Bun.version;
    },
    79472: (e, t, n) => {
      var r,
        o = n(24475),
        i = n(18745),
        a = n(94901),
        l = n(6763),
        c = n(79392),
        u = n(67680),
        s = n(22812),
        d = o.Function,
        f =
          /MSIE .\./.test(c) ||
          (l &&
            ((r = o.Bun.version.split(".")).length < 3 ||
              ("0" === r[0] && (r[1] < 3 || ("3" === r[1] && "0" === r[2])))));
      e.exports = function (e, t) {
        var n = t ? 2 : 1;
        return f
          ? function (r, o) {
              var l = s(arguments.length, 1) > n,
                c = a(r) ? r : d(r),
                f = l ? u(arguments, n) : [],
                m = l
                  ? function () {
                      i(c, this, f);
                    }
                  : c;
              return t ? e(m, o) : e(m);
            }
          : e;
      };
    },
    60706: (e, t, n) => {
      var r = n(10350).PROPER,
        o = n(79039),
        i = n(47452);
      e.exports = function (e) {
        return o(function () {
          return !!i[e]() || "​᠎" !== "​᠎"[e]() || (r && i[e].name !== e);
        });
      };
    },
    15086: (e, t, n) => {
      var r = n(46518),
        o = n(59213).some;
      r(
        { target: "Array", proto: !0, forced: !n(34598)("some") },
        {
          some: function (e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    48523: (e, t, n) => {
      n(16468)(
        "Map",
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        n(86938)
      );
    },
    36033: (e, t, n) => {
      n(48523);
    },
    42762: (e, t, n) => {
      var r = n(46518),
        o = n(43802).trim;
      r(
        { target: "String", proto: !0, forced: n(60706)("trim") },
        {
          trim: function () {
            return o(this);
          },
        }
      );
    },
    15575: (e, t, n) => {
      var r = n(46518),
        o = n(24475),
        i = n(79472)(o.setInterval, !0);
      r(
        { global: !0, bind: !0, forced: o.setInterval !== i },
        { setInterval: i }
      );
    },
    24599: (e, t, n) => {
      var r = n(46518),
        o = n(24475),
        i = n(79472)(o.setTimeout, !0);
      r(
        { global: !0, bind: !0, forced: o.setTimeout !== i },
        { setTimeout: i }
      );
    },
    76031: (e, t, n) => {
      n(15575), n(24599);
    },
  },
  (e) => {
    e.O(
      0,
      [4141, 447, 6118, 3362, 6475, 6577, 8115, 6447, 8576, 2183, 7539, 3356],
      () => {
        return (t = 76227), e((e.s = t));
        var t;
      }
    );
    e.O();
  },
]);
