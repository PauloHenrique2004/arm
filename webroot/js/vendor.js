/*------------------------------
       JS Vendor Index
----------------------------
 01. jQuery v3.3.1
 02. jQuery Migrate v1.4.1
 03. Popper 1.12.9
 04. Bootstrap v4.1.3

JS Plugins Index
----------------------
01. Mean menu
02. Slick Slider
03. Ajax chimp
04. Magnific Popup
05. jQuery Nice Select
06. Countdown
07. jQuery UI
08. Zooming effect
09. Instagram Feed
10. Google Map
--------------------------------*/


/*! 01. jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function(e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            ie = me(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                    return e === t
                }, s, !0), f = me(function(e) {
                    return O(t, e) > -1
                }, s, !0), p = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                }
                            c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function(n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function() {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function() {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
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
        "char": !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                    return et(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function(e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function() {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            w.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function() {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
            rt || (rt = !0, at())
        }, w.fx.stop = function() {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function(t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});


/*! 02. jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);

/*
 * 03. Popper 1.12.9
 *Copyright (C) Federico Zivolo 2018
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
})(this, function() {
    'use strict';

    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case 'HTML':
            case 'BODY':
                return e.ownerDocument.body;
            case '#document':
                return e.body;
        }
        var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }

    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }

    function p(e) {
        if (!e) return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }

    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }

    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            n = o ? e : t,
            i = o ? t : e,
            r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }

    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }

    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            n = l(t, 'top'),
            i = l(t, 'left'),
            r = o ? -1 : 1;
        return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }

    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }

    function h(e, t, o, n) {
        return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }

    function c() {
        var e = document.body,
            t = document.documentElement,
            o = r(10) && getComputedStyle(t);
        return {
            height: h('Height', e, t, o),
            width: h('Width', e, t, o)
        }
    }

    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'),
                    i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            s = 'HTML' === e.nodeName ? c() : {},
            d = s.width || e.clientWidth || p.right - p.left,
            a = s.height || e.clientHeight || p.bottom - p.top,
            f = e.offsetWidth - d,
            h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }

    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            p = r(10),
            s = 'HTML' === o.nodeName,
            d = u(e),
            a = u(o),
            l = n(e),
            m = t(o),
            h = parseFloat(m.borderTopWidth, 10),
            c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
            var y = parseFloat(m.marginTop, 10),
                w = parseFloat(m.marginLeft, 10);
            b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b
    }

    function y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = e.ownerDocument.documentElement,
            n = b(e, o),
            i = $(o.clientWidth, window.innerWidth || 0),
            r = $(o.clientHeight, window.innerHeight || 0),
            p = t ? 0 : l(o),
            s = t ? 0 : l(o, 'left'),
            d = {
                top: p - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: i,
                height: r
            };
        return g(d)
    }

    function w(e) {
        var n = e.nodeName;
        return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
    }

    function E(e) {
        if (!e || !e.parentElement || r()) return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement;
        return o || document.documentElement
    }

    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = {
                top: 0,
                left: 0
            },
            d = p ? E(e) : a(e, t);
        if ('viewport' === r) s = y(d, p);
        else {
            var l;
            'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !w(d)) {
                var m = c(),
                    h = m.height,
                    g = m.width;
                s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
    }

    function x(e) {
        var t = e.width,
            o = e.height;
        return t * o
    }

    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto')) return e;
        var p = v(o, n, r, i),
            s = {
                top: {
                    width: p.width,
                    height: t.top - p.top
                },
                right: {
                    width: p.right - t.right,
                    height: p.height
                },
                bottom: {
                    width: p.width,
                    height: p.bottom - t.bottom
                },
                left: {
                    width: t.left - p.left,
                    height: p.height
                }
            },
            d = Object.keys(s).map(function(e) {
                return le({
                    key: e
                }, s[e], {
                    area: x(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            a = d.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight
            }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }

    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }

    function S(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            i = {
                width: e.offsetWidth + n,
                height: e.offsetHeight + o
            };
        return i
    }

    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e),
            i = {
                width: n.width,
                height: n.height
            },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i
    }

    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === o
        });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }

    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }

    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function W(e, t) {
        return e.some(function(e) {
            var o = e.name,
                n = e.enabled;
            return n && o === t
        })
    }

    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }

    function H() {
        return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }), r || M(n(p.parentNode), t, o, i), i.push(p)
    }

    function I(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o
    }

    function F() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
    }

    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = ''; - 1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n
        })
    }

    function K(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }

    function q(e, t, o) {
        var n = D(e, function(e) {
                var o = e.name;
                return o === t
            }),
            i = !!n && e.some(function(e) {
                return e.name === o && e.enabled && e.order < n.order
            });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }

    function G(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }

    function z(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = me.indexOf(e),
            n = me.slice(o + 1).concat(me.slice(0, o));
        return t ? n.reverse() : n
    }

    function V(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            p = i[2];
        if (!r) return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
                case '%p':
                    s = o;
                    break;
                case '%':
                case '%r':
                default:
                    s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r
        }
        return r
    }

    function _(e, t, o, n) {
        var i = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(n),
            p = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = p.indexOf(D(p, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width',
                p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return V(e, i, t, o)
            })
        }), a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }), i
    }

    function X(e, t) {
        var o, n = t.offset,
            i = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
        if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
            oe = 1;
            break
        }
    var i = ee && window.Promise,
        ie = i ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, oe))
            }
        },
        re = ee && !!(window.MSInputMethodContext && document.documentMode),
        pe = ee && /MSIE 10/.test(navigator.userAgent),
        se = function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        },
        de = function() {
            function e(e, t) {
                for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
            return function(t, o, n) {
                return o && e(t.prototype, o), n && e(t, n), t
            }
        }(),
        ae = function(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e
        },
        le = Object.assign || function(e) {
            for (var t, o = 1; o < arguments.length; o++)
                for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        me = fe.slice(3),
        he = {
            FLIP: 'flip',
            CLOCKWISE: 'clockwise',
            COUNTERCLOCKWISE: 'counterclockwise'
        },
        ce = function() {
            function t(o, n) {
                var i = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                se(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return le({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var p = this.options.eventsEnabled;
                p && this.enableEventListeners(), this.state.eventsEnabled = p
            }
            return de(t, [{
                key: 'update',
                value: function() {
                    return k.call(this)
                }
            }, {
                key: 'destroy',
                value: function() {
                    return H.call(this)
                }
            }, {
                key: 'enableEventListeners',
                value: function() {
                    return F.call(this)
                }
            }, {
                key: 'disableEventListeners',
                value: function() {
                    return U.call(this)
                }
            }]), t
        }();
    return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets,
                            r = i.reference,
                            p = i.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = {
                                start: ae({}, d, r[d]),
                                end: ae({}, d, r[d] + r[a] - p[a])
                            };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: X,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform'),
                        i = e.instance.popper.style,
                        r = i.top,
                        s = i.left,
                        d = i[n];
                    i.top = '', i.left = '', i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a;
                    var l = t.priority,
                        f = e.offsets.popper,
                        m = {
                            primary: function(e) {
                                var o = f[e];
                                return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o)
                            },
                            secondary: function(e) {
                                var o = 'right' === e ? 'left' : 'top',
                                    n = f[o];
                                return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n)
                            }
                        };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }), e.offsets.popper = f, e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        o = t.popper,
                        n = t.reference,
                        i = e.placement.split('-')[0],
                        r = Z,
                        p = -1 !== ['top', 'bottom'].indexOf(i),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), !i) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;
                    var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        c = a ? 'bottom' : 'right',
                        u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2,
                        y = t(e.instance.popper),
                        w = parseFloat(y['margin' + f], 10),
                        E = parseFloat(y['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - w - E;
                    return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        n = e.placement.split('-')[0],
                        i = T(n),
                        r = e.placement.split('-')[1] || '',
                        p = [];
                    switch (t.behavior) {
                        case he.FLIP:
                            p = [n, i];
                            break;
                        case he.CLOCKWISE:
                            p = z(n);
                            break;
                        case he.COUNTERCLOCKWISE:
                            p = z(n, !0);
                            break;
                        default:
                            p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1) return e;
                        n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = Z,
                            m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                            y = -1 !== ['top', 'bottom'].indexOf(n),
                            w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
                    var t = e.offsets.reference,
                        o = D(e.instance.modifiers, function(e) {
                            return 'preventOverflow' === e.name
                        }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x,
                        n = t.y,
                        i = e.offsets.popper,
                        r = D(e.instance.modifiers, function(e) {
                            return 'applyStyle' === e.name
                        }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r,
                        l = p(e.instance.popper),
                        f = u(l),
                        m = {
                            position: i.position
                        },
                        h = {
                            left: Z(i.left),
                            top: Q(i.top),
                            bottom: Q(i.bottom),
                            right: Z(i.right)
                        },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        g = 'right' === n ? 'left' : 'right',
                        b = B('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1,
                            w = 'right' == g ? -1 : 1;
                        m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed),
                        p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), j(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    }, ce
});
//# sourceMappingURL=popper.min.js.map


/*!
 * 04. Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, h) {
    "use strict";

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function l(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function(t) {
                return Object.getOwnPropertyDescriptor(o, t).enumerable
            }))), e.forEach(function(t) {
                var e, n, i;
                e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, h = h && h.hasOwnProperty("default") ? h.default : h;
    var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function(i) {
            var e = "transitionend";

            function t(t) {
                var e = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function() {
                    n = !0
                }), setTimeout(function() {
                    n || l.triggerTransitionEnd(e)
                }, t), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(t) {
                    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
                    return t
                },
                getSelectorFromElement: function(t) {
                    var e = t.getAttribute("data-target");
                    e && "#" !== e || (e = t.getAttribute("href") || "");
                    try {
                        return document.querySelector(e) ? e : null
                    } catch (t) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function(t) {
                    if (!t) return 0;
                    var e = i(t).css("transition-duration");
                    return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0
                },
                reflow: function(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    i(t).trigger(e)
                },
                supportsTransitionEnd: function() {
                    return Boolean(e)
                },
                isElement: function(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function(t, e, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = e[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                        }
                    var a
                }
            };
            return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
                bindType: e,
                delegateType: e,
                handle: function(t) {
                    if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(e),
        Kn = (n = "alert", a = "." + (o = "bs.alert"), c = (r = e).fn[n], u = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, f = "alert", d = "fade", g = "show", _ = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, t.dispose = function() {
                r.removeData(this._element, o), this._element = null
            }, t._getRootElement = function(t) {
                var e = Fn.getSelectorFromElement(t),
                    n = !1;
                return e && (n = document.querySelector(e)), n || (n = r(t).closest("." + f)[0]), n
            }, t._triggerCloseEvent = function(t) {
                var e = r.Event(u.CLOSE);
                return r(t).trigger(e), e
            }, t._removeElement = function(e) {
                var n = this;
                if (r(e).removeClass(g), r(e).hasClass(d)) {
                    var t = Fn.getTransitionDurationFromElement(e);
                    r(e).one(Fn.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(t)
                } else this._destroyElement(e)
            }, t._destroyElement = function(t) {
                r(t).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = r(this),
                        e = t.data(o);
                    e || (e = new i(this), t.data(o, e)), "close" === n && e[n](this)
                })
            }, i._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), r.fn[n] = _._jQueryInterface, r.fn[n].Constructor = _, r.fn[n].noConflict = function() {
            return r.fn[n] = c, _._jQueryInterface
        }, _),
        Mn = (p = "button", y = "." + (v = "bs.button"), E = ".data-api", C = (m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = {
            CLICK_DATA_API: "click" + y + E,
            FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E
        }, k = function() {
            function n(t) {
                this._element = t
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t = !0,
                    e = !0,
                    n = m(this._element).closest(A)[0];
                if (n) {
                    var i = this._element.querySelector(D);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(T)) t = !1;
                            else {
                                var r = n.querySelector(w);
                                r && m(r).removeClass(T)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(T), m(i).trigger("change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)), t && m(this._element).toggleClass(T)
            }, t.dispose = function() {
                m.removeData(this._element, v), this._element = null
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = m(this).data(v);
                    t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), n
        }(), m(document).on(O.CLICK_DATA_API, I, function(t) {
            t.preventDefault();
            var e = t.target;
            m(e).hasClass(b) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, I, function(t) {
            var e = m(t.target).closest(N)[0];
            m(e).toggleClass(S, /^focus(in)?$/.test(t.type))
        }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function() {
            return m.fn[p] = C, k._jQueryInterface
        }, k),
        Qn = (j = "carousel", L = "." + (H = "bs.carousel"), R = ".data-api", x = (P = e).fn[j], W = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, q = "next", F = "prev", K = "left", M = "right", Q = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + R,
            CLICK_DATA_API: "click" + L + R
        }, B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function() {
            function o(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners()
            }
            var t = o.prototype;
            return t.next = function() {
                this._isSliding || this._slide(q)
            }, t.nextWhenVisible = function() {
                !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
            }, t.prev = function() {
                this._isSliding || this._slide(F)
            }, t.pause = function(t) {
                t || (this._isPaused = !0), this._element.querySelector(et) && (Fn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, t.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, t.to = function(t) {
                var e = this;
                this._activeElement = this._element.querySelector(X);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) P(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = n < t ? q : F;
                        this._slide(i, this._items[t])
                    }
            }, t.dispose = function() {
                P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, t._getConfig = function(t) {
                return t = l({}, W, t), Fn.typeCheckConfig(j, t, U), t
            }, t._addEventListeners = function() {
                var e = this;
                this._config.keyboard && P(this._element).on(Q.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(Q.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function() {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, t._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, t._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t)
            }, t._getItemByDirection = function(t, e) {
                var n = t === q,
                    i = t === F,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                var s = (r + (t === F ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, t._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(this._element.querySelector(X)),
                    r = P.Event(Q.SLIDE, {
                        relatedTarget: t,
                        direction: e,
                        from: i,
                        to: n
                    });
                return P(this._element).trigger(r), r
            }, t._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    var e = [].slice.call(this._indicatorsElement.querySelectorAll($));
                    P(e).removeClass(V);
                    var n = this._indicatorsElement.children[this._getItemIndex(t)];
                    n && P(n).addClass(V)
                }
            }, t._slide = function(t, e) {
                var n, i, r, o = this,
                    s = this._element.querySelector(X),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    h = Boolean(this._interval);
                if (t === q ? (n = J, i = Z, r = K) : (n = z, i = G, r = M), l && P(l).hasClass(V)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(l);
                    var u = P.Event(Q.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: c
                    });
                    if (P(this._element).hasClass(Y)) {
                        P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n);
                        var f = Fn.getTransitionDurationFromElement(s);
                        P(s).one(Fn.TRANSITION_END, function() {
                            P(l).removeClass(n + " " + i).addClass(V), P(s).removeClass(V + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
                                return P(o._element).trigger(u)
                            }, 0)
                        }).emulateTransitionEnd(f)
                    } else P(s).removeClass(V), P(l).addClass(V), this._isSliding = !1, P(this._element).trigger(u);
                    h && this.cycle()
                }
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = P(this).data(H),
                        e = l({}, W, P(this).data());
                    "object" == typeof i && (e = l({}, e, i));
                    var n = "string" == typeof i ? i : e.slide;
                    if (t || (t = new o(this, e), P(this).data(H, t)), "number" == typeof i) t.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    } else e.interval && (t.pause(), t.cycle())
                })
            }, o._dataApiClickHandler = function(t) {
                var e = Fn.getSelectorFromElement(this);
                if (e) {
                    var n = P(e)[0];
                    if (n && P(n).hasClass(B)) {
                        var i = l({}, P(n).data(), P(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return W
                }
            }]), o
        }(), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
                var i = P(t[e]);
                ot._jQueryInterface.call(i, i.data())
            }
        }), P.fn[j] = ot._jQueryInterface, P.fn[j].Constructor = ot, P.fn[j].noConflict = function() {
            return P.fn[j] = x, ot._jQueryInterface
        }, ot),
        Bn = (at = "collapse", ct = "." + (lt = "bs.collapse"), ht = (st = e).fn[at], ut = {
            toggle: !0,
            parent: ""
        }, ft = {
            toggle: "boolean",
            parent: "(string|element)"
        }, dt = {
            SHOW: "show" + ct,
            SHOWN: "shown" + ct,
            HIDE: "hide" + ct,
            HIDDEN: "hidden" + ct,
            CLICK_DATA_API: "click" + ct + ".data-api"
        }, gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function() {
            function a(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = Fn.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var t = a.prototype;
            return t.toggle = function() {
                st(this._element).hasClass(gt) ? this.hide() : this.show()
            }, t.show = function() {
                var t, e, n = this;
                if (!this._isTransitioning && !st(this._element).hasClass(gt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Et)).filter(function(t) {
                        return t.getAttribute("data-parent") === n._config.parent
                    })).length && (t = null), !(t && (e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
                    var i = st.Event(dt.SHOW);
                    if (st(this._element).trigger(i), !i.isDefaultPrevented()) {
                        t && (a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null));
                        var r = this._getDimension();
                        st(this._element).removeClass(_t).addClass(mt), this._element.style[r] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = Fn.getTransitionDurationFromElement(this._element);
                        st(this._element).one(Fn.TRANSITION_END, function() {
                            st(n._element).removeClass(mt).addClass(_t).addClass(gt), n._element.style[r] = "", n.setTransitioning(!1), st(n._element).trigger(dt.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, t.hide = function() {
                var t = this;
                if (!this._isTransitioning && st(this._element).hasClass(gt)) {
                    var e = st.Event(dt.HIDE);
                    if (st(this._element).trigger(e), !e.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var o = this._triggerArray[r],
                                    s = Fn.getSelectorFromElement(o);
                                if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = Fn.getTransitionDurationFromElement(this._element);
                        st(this._element).one(Fn.TRANSITION_END, function() {
                            t.setTransitioning(!1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, t.setTransitioning = function(t) {
                this._isTransitioning = t
            }, t.dispose = function() {
                st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, t._getConfig = function(t) {
                return (t = l({}, ut, t)).toggle = Boolean(t.toggle), Fn.typeCheckConfig(at, t, ft), t
            }, t._getDimension = function() {
                return st(this._element).hasClass(vt) ? vt : yt
            }, t._getParent = function() {
                var n = this,
                    t = null;
                Fn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(t.querySelectorAll(e));
                return st(i).each(function(t, e) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }), t
            }, t._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = st(t).hasClass(gt);
                    e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function(t) {
                var e = Fn.getSelectorFromElement(t);
                return e ? document.querySelector(e) : null
            }, a._jQueryInterface = function(i) {
                return this.each(function() {
                    var t = st(this),
                        e = t.data(lt),
                        n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
                    if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(lt, e)), "string" == typeof i) {
                        if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                        e[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return ut
                }
            }]), a
        }(), st(document).on(dt.CLICK_DATA_API, Ct, function(t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = st(this),
                e = Fn.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(e));
            st(i).each(function() {
                var t = st(this),
                    e = t.data(lt) ? "toggle" : n.data();
                Tt._jQueryInterface.call(t, e)
            })
        }), st.fn[at] = Tt._jQueryInterface, st.fn[at].Constructor = Tt, st.fn[at].noConflict = function() {
            return st.fn[at] = ht, Tt._jQueryInterface
        }, Tt),
        Vn = (St = "dropdown", At = "." + (It = "bs.dropdown"), Dt = ".data-api", wt = (bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = {
            HIDE: "hide" + At,
            HIDDEN: "hidden" + At,
            SHOW: "show" + At,
            SHOWN: "shown" + At,
            CLICK: "click" + At,
            CLICK_DATA_API: "click" + At + Dt,
            KEYDOWN_DATA_API: "keydown" + At + Dt,
            KEYUP_DATA_API: "keyup" + At + Dt
        }, kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Zt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Gt = function() {
            function c(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var t = c.prototype;
            return t.toggle = function() {
                if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
                    var t = c._getParentFromElement(this._element),
                        e = bt(this._menu).hasClass(Pt);
                    if (c._clearMenus(), !e) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = bt.Event(Ot.SHOW, n);
                        if (bt(t).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = t : Fn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t).addClass(xt), this._popper = new h(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), bt(this._menu).toggleClass(Pt), bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n))
                        }
                    }
                }
            }, t.dispose = function() {
                bt.removeData(this._element, It), bt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var e = this;
                bt(this._element).on(Ot.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, t._getConfig = function(t) {
                return t = l({}, this.constructor.Default, bt(this._element).data(), t), Fn.typeCheckConfig(St, t, this.constructor.DefaultType), t
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = c._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(qt))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = bt(this._element.parentNode),
                    e = Bt;
                return t.hasClass(jt) ? (e = Mt, bt(this._menu).hasClass(Rt) && (e = Qt)) : t.hasClass(Ht) ? e = Yt : t.hasClass(Lt) ? e = zt : bt(this._menu).hasClass(Rt) && (e = Vt), e
            }, t._detectNavbar = function() {
                return 0 < bt(this._element).closest(".navbar").length
            }, t._getPopperConfig = function() {
                var e = this,
                    t = {};
                "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets) || {}), t
                } : t.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: t,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, c._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = bt(this).data(It);
                    if (t || (t = new c(this, "object" == typeof e ? e : null), bt(this).data(It, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, c._clearMenus = function(t) {
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var e = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
                        var r = c._getParentFromElement(e[n]),
                            o = bt(e[n]).data(It),
                            s = {
                                relatedTarget: e[n]
                            };
                        if (t && "click" === t.type && (s.clickEvent = t), o) {
                            var a = o._menu;
                            if (bt(r).hasClass(Pt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
                                var l = bt.Event(Ot.HIDE, s);
                                bt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e[n].setAttribute("aria-expanded", "false"), bt(a).removeClass(Pt), bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function(t) {
                var e, n = Fn.getSelectorFromElement(t);
                return n && (e = document.querySelector(n)), e || t.parentNode
            }, c._dataApiKeydownHandler = function(t) {
                if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)) : Nt.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !bt(this).hasClass(kt))) {
                    var e = c._getParentFromElement(this),
                        n = bt(e).hasClass(Pt);
                    if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                        var i = [].slice.call(e.querySelectorAll(Kt));
                        if (0 !== i.length) {
                            var r = i.indexOf(t.target);
                            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === t.which) {
                            var o = e.querySelector(Wt);
                            bt(o).trigger("focus")
                        }
                        bt(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Jt
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zt
                }
            }]), c
        }(), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function(t) {
            t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle")
        }).on(Ot.CLICK_DATA_API, Ut, function(t) {
            t.stopPropagation()
        }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St].Constructor = Gt, bt.fn[St].noConflict = function() {
            return bt.fn[St] = wt, Gt._jQueryInterface
        }, Gt),
        Yn = (Xt = "modal", ee = "." + (te = "bs.modal"), ne = ($t = e).fn[Xt], ie = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, re = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, oe = {
            HIDE: "hide" + ee,
            HIDDEN: "hidden" + ee,
            SHOW: "show" + ee,
            SHOWN: "shown" + ee,
            FOCUSIN: "focusin" + ee,
            RESIZE: "resize" + ee,
            CLICK_DISMISS: "click.dismiss" + ee,
            KEYDOWN_DISMISS: "keydown.dismiss" + ee,
            MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
            CLICK_DATA_API: "click" + ee + ".data-api"
        }, se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function() {
            function r(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var t = r.prototype;
            return t.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, t.show = function(t) {
                var e = this;
                if (!this._isTransitioning && !this._isShown) {
                    $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
                    var n = $t.Event(oe.SHOW, {
                        relatedTarget: t
                    });
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function(t) {
                        return e.hide(t)
                    }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
                        $t(e._element).one(oe.MOUSEUP_DISMISS, function(t) {
                            $t(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, t.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $t.Event(oe.HIDE);
                    if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $t(this._element).hasClass(ce);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i) {
                            var r = Fn.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(Fn.TRANSITION_END, function(t) {
                                return e._hideModal(t)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, t.dispose = function() {
                $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, t.handleUpdate = function() {
                this._adjustDialog()
            }, t._getConfig = function(t) {
                return t = l({}, ie, t), Fn.typeCheckConfig(Xt, t, re), t
            }, t._showElement = function(t) {
                var e = this,
                    n = $t(this._element).hasClass(ce);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();
                var i = $t.Event(oe.SHOWN, {
                        relatedTarget: t
                    }),
                    r = function() {
                        e._config.focus && e._element.focus(), e._isTransitioning = !1, $t(e._element).trigger(i)
                    };
                if (n) {
                    var o = Fn.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, t._enforceFocus = function() {
                var e = this;
                $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function(t) {
                    document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus()
                })
            }, t._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS)
            }, t._setResizeEvent = function() {
                var e = this;
                this._isShown ? $t(window).on(oe.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : $t(window).off(oe.RESIZE)
            }, t._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN)
                })
            }, t._removeBackdrop = function() {
                this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null)
            }, t._showBackdrop = function(t) {
                var e = this,
                    n = $t(this._element).hasClass(ce) ? ce : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), !t) return;
                    if (!n) return void t();
                    var i = Fn.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    $t(this._backdrop).removeClass(he);
                    var r = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if ($t(this._element).hasClass(ce)) {
                        var o = Fn.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else t && t()
            }, t._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, t._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, t._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, t._setScrollbar = function() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(ge)),
                        e = [].slice.call(document.querySelectorAll(_e));
                    $t(t).each(function(t, e) {
                        var n = e.style.paddingRight,
                            i = $t(e).css("padding-right");
                        $t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), $t(e).each(function(t, e) {
                        var n = e.style.marginRight,
                            i = $t(e).css("margin-right");
                        $t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = $t(document.body).css("padding-right");
                    $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, t._resetScrollbar = function() {
                var t = [].slice.call(document.querySelectorAll(ge));
                $t(t).each(function(t, e) {
                    var n = $t(e).data("padding-right");
                    $t(e).removeData("padding-right"), e.style.paddingRight = n || ""
                });
                var e = [].slice.call(document.querySelectorAll("" + _e));
                $t(e).each(function(t, e) {
                    var n = $t(e).data("margin-right");
                    "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right")
                });
                var n = $t(document.body).data("padding-right");
                $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, t._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = se, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, r._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var t = $t(this).data(te),
                        e = l({}, ie, $t(this).data(), "object" == typeof n && n ? n : {});
                    if (t || (t = new r(this, e), $t(this).data(te, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](i)
                    } else e.show && t.show(i)
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return ie
                }
            }]), r
        }(), $t(document).on(oe.CLICK_DATA_API, fe, function(t) {
            var e, n = this,
                i = Fn.getSelectorFromElement(this);
            i && (e = document.querySelector(i));
            var r = $t(e).data(te) ? "toggle" : l({}, $t(e).data(), $t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = $t(e).one(oe.SHOW, function(t) {
                t.isDefaultPrevented() || o.one(oe.HIDDEN, function() {
                    $t(n).is(":visible") && n.focus()
                })
            });
            me._jQueryInterface.call($t(e), r, this)
        }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt].Constructor = me, $t.fn[Xt].noConflict = function() {
            return $t.fn[Xt] = ne, me._jQueryInterface
        }, me),
        zn = (ve = "tooltip", Ee = "." + (ye = "bs.tooltip"), Ce = (pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(Ie = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(Se = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, we = "out", Ne = {
            HIDE: "hide" + Ee,
            HIDDEN: "hidden" + Ee,
            SHOW: (De = "show") + Ee,
            SHOWN: "shown" + Ee,
            INSERTED: "inserted" + Ee,
            CLICK: "click" + Ee,
            FOCUSIN: "focusin" + Ee,
            FOCUSOUT: "focusout" + Ee,
            MOUSEENTER: "mouseenter" + Ee,
            MOUSELEAVE: "mouseleave" + Ee
        }, Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function() {
            function i(t, e) {
                if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var t = i.prototype;
            return t.enable = function() {
                this._isEnabled = !0
            }, t.disable = function() {
                this._isEnabled = !1
            }, t.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, t.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = pe(t.currentTarget).data(e);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, t.dispose = function() {
                clearTimeout(this._timeout), pe.removeData(this.element, this.constructor.DATA_KEY), pe(this.element).off(this.constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, t.show = function() {
                var e = this;
                if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible section-parts");
                var t = pe.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    pe(this.element).trigger(t);
                    var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = Fn.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : pe(document).find(this.config.container);
                    pe(i).data(this.constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a), pe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new h(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: je
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }), pe(i).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
                    var l = function() {
                        e.config.animation && e._fixTransition();
                        var t = e._hoverState;
                        e._hoverState = null, pe(e.element).trigger(e.constructor.Event.SHOWN), t === we && e._leave(null, e)
                    };
                    if (pe(this.tip).hasClass(Oe)) {
                        var c = Fn.getTransitionDurationFromElement(this.tip);
                        pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, t.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = pe.Event(this.constructor.Event.HIDE),
                    r = function() {
                        e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), pe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (pe(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (pe(n).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = !1, this._activeTrigger[Le] = !1, this._activeTrigger[He] = !1, pe(this.tip).hasClass(Oe)) {
                        var o = Fn.getTransitionDurationFromElement(n);
                        pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, t.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, t.isWithContent = function() {
                return Boolean(this.getTitle())
            }, t.addAttachmentClass = function(t) {
                pe(this.getTipElement()).addClass(Te + "-" + t)
            }, t.getTipElement = function() {
                return this.tip = this.tip || pe(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke)
            }, t.setElementContent = function(t, e) {
                var n = this.config.html;
                "object" == typeof e && (e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e) : t.text(pe(e).text()) : t[n ? "html" : "text"](e)
            }, t.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, t._getAttachment = function(t) {
                return Ie[t.toUpperCase()]
            }, t._setListeners = function() {
                var i = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) pe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                    else if (t !== xe) {
                        var e = t === He ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = t === He ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        pe(i.element).on(e, i.config.selector, function(t) {
                            return i._enter(t)
                        }).on(n, i.config.selector, function(t) {
                            return i._leave(t)
                        })
                    }
                    pe(i.element).closest(".modal").on("hide.bs.modal", function() {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, t._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, t._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0), pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === De && e.show()
                }, e.config.delay.show) : e.show())
            }, t._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || pe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === we && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, t._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, t._getConfig = function(t) {
                return "number" == typeof(t = l({}, this.constructor.Default, pe(this.element).data(), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Fn.typeCheckConfig(ve, t, this.constructor.DefaultType), t
            }, t._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, t._cleanTipClass = function() {
                var t = pe(this.getTipElement()),
                    e = t.attr("class").match(be);
                null !== e && e.length && t.removeClass(e.join(""))
            }, t._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, t._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (pe(t).removeClass(Oe), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = pe(this).data(ye),
                        e = "object" == typeof n && n;
                    if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), pe(this).data(ye, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ae
                }
            }, {
                key: "NAME",
                get: function() {
                    return ve
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return ye
                }
            }, {
                key: "Event",
                get: function() {
                    return Ne
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Ee
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Se
                }
            }]), i
        }(), pe.fn[ve] = We._jQueryInterface, pe.fn[ve].Constructor = We, pe.fn[ve].noConflict = function() {
            return pe.fn[ve] = Ce, We._jQueryInterface
        }, We),
        Jn = (qe = "popover", Ke = "." + (Fe = "bs.popover"), Me = (Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({}, zn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Ye = l({}, zn.DefaultType, {
            content: "(string|element|function)"
        }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = {
            HIDE: "hide" + Ke,
            HIDDEN: "hidden" + Ke,
            SHOW: (Je = "show") + Ke,
            SHOWN: "shown" + Ke,
            INSERTED: "inserted" + Ke,
            CLICK: "click" + Ke,
            FOCUSIN: "focusin" + Ke,
            FOCUSOUT: "focusout" + Ke,
            MOUSEENTER: "mouseenter" + Ke,
            MOUSELEAVE: "mouseleave" + Ke
        }, Xe = function(t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(t) {
                Ue(this.getTipElement()).addClass(Qe + "-" + t)
            }, r.getTipElement = function() {
                return this.tip = this.tip || Ue(this.config.template)[0], this.tip
            }, r.setContent = function() {
                var t = Ue(this.getTipElement());
                this.setElementContent(t.find(Ze), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var t = Ue(this.getTipElement()),
                    e = t.attr("class").match(Be);
                null !== e && 0 < e.length && t.removeClass(e.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = Ue(this).data(Fe),
                        e = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Ue(this).data(Fe, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ve
                }
            }, {
                key: "NAME",
                get: function() {
                    return qe
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Fe
                }
            }, {
                key: "Event",
                get: function() {
                    return $e
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Ke
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ye
                }
            }]), i
        }(zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe].Constructor = Xe, Ue.fn[qe].noConflict = function() {
            return Ue.fn[qe] = Me, Xe._jQueryInterface
        }, Xe),
        Zn = (en = "scrollspy", rn = "." + (nn = "bs.scrollspy"), on = (tn = e).fn[en], sn = {
            offset: 10,
            method: "auto",
            target: ""
        }, an = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, ln = {
            ACTIVATE: "activate" + rn,
            SCROLL: "scroll" + rn,
            LOAD_DATA_API: "load" + rn + ".data-api"
        }, cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function() {
            function n(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process()
            }
            var t = n.prototype;
            return t.refresh = function() {
                var e = this,
                    t = this._scrollElement === this._scrollElement.window ? En : Cn,
                    r = "auto" === this._config.method ? t : this._config.method,
                    o = r === Cn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                    var e, n = Fn.getSelectorFromElement(t);
                    if (n && (e = document.querySelector(n)), e) {
                        var i = e.getBoundingClientRect();
                        if (i.width || i.height) return [tn(e)[r]().top + o, n]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, t.dispose = function() {
                tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, t._getConfig = function(t) {
                if ("string" != typeof(t = l({}, sn, "object" == typeof t && t ? t : {})).target) {
                    var e = tn(t.target).attr("id");
                    e || (e = Fn.getUID(en), tn(t.target).attr("id", e)), t.target = "#" + e
                }
                return Fn.typeCheckConfig(en, t, an), t
            }, t._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, t._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, t._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, t._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), n <= t) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, t._activate = function(e) {
                this._activeTarget = e, this._clear();
                var t = this._selector.split(",");
                t = t.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
                n.hasClass(cn) ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn)) : (n.addClass(hn), n.parents(dn).prev(gn + ", " + mn).addClass(hn), n.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, {
                    relatedTarget: e
                })
            }, t._clear = function() {
                var t = [].slice.call(document.querySelectorAll(this._selector));
                tn(t).filter(fn).removeClass(hn)
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var t = tn(this).data(nn);
                    if (t || (t = new n(this, "object" == typeof e && e), tn(this).data(nn, t)), "string" == typeof e) {
                        if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                        t[e]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return sn
                }
            }]), n
        }(), tn(window).on(ln.LOAD_DATA_API, function() {
            for (var t = [].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
                var n = tn(t[e]);
                Tn._jQueryInterface.call(n, n.data())
            }
        }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en].Constructor = Tn, tn.fn[en].noConflict = function() {
            return tn.fn[en] = on, Tn._jQueryInterface
        }, Tn),
        Gn = (In = "." + (Sn = "bs.tab"), An = (bn = e).fn.tab, Dn = {
            HIDE: "hide" + In,
            HIDDEN: "hidden" + In,
            SHOW: "show" + In,
            SHOWN: "shown" + In,
            CLICK_DATA_API: "click" + In + ".data-api"
        }, wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function() {
            function i(t) {
                this._element = t
            }
            var t = i.prototype;
            return t.show = function() {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
                    var t, i, e = bn(this._element).closest(Hn)[0],
                        r = Fn.getSelectorFromElement(this._element);
                    if (e) {
                        var o = "UL" === e.nodeName ? Rn : Ln;
                        i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1]
                    }
                    var s = bn.Event(Dn.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = bn.Event(Dn.SHOW, {
                            relatedTarget: i
                        });
                    if (i && bn(i).trigger(s), bn(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (t = document.querySelector(r)), this._activate(this._element, e);
                        var l = function() {
                            var t = bn.Event(Dn.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                e = bn.Event(Dn.SHOWN, {
                                    relatedTarget: i
                                });
                            bn(i).trigger(t), bn(n._element).trigger(e)
                        };
                        t ? this._activate(t, t.parentNode, l) : l()
                    }
                }
            }, t.dispose = function() {
                bn.removeData(this._element, Sn), this._element = null
            }, t._activate = function(t, e, n) {
                var i = this,
                    r = ("UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln))[0],
                    o = n && r && bn(r).hasClass(kn),
                    s = function() {
                        return i._transitionComplete(t, r, n)
                    };
                if (r && o) {
                    var a = Fn.getTransitionDurationFromElement(r);
                    bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, t._transitionComplete = function(t, e, n) {
                if (e) {
                    bn(e).removeClass(Pn + " " + Nn);
                    var i = bn(e.parentNode).find(Un)[0];
                    i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }
                if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) {
                    var r = bn(t).closest(jn)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(Wn));
                        bn(o).addClass(Nn)
                    }
                    t.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = bn(this),
                        e = t.data(Sn);
                    if (e || (e = new i(this), t.data(Sn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), i
        }(), bn(document).on(Dn.CLICK_DATA_API, xn, function(t) {
            t.preventDefault(), qn._jQueryInterface.call(bn(this), "show")
        }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab.Constructor = qn, bn.fn.tab.noConflict = function() {
            return bn.fn.tab = An, qn._jQueryInterface
        }, qn);
    ! function(t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.min.js.map


/*
 * Slick Slider
 * Copyright (c) 2017 Ken Wheeler
 * Licensed under the MIT license.
 */
! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o)
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function() {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});


/*
 * ajaxchimp
 * https://github.com/scdoshi/jquery-ajaxchimp
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find("input[type=email]");
            var label = form.find("label[for=" + email.attr("id") + "]");
            var settings = $.extend({
                url: form.attr("action"),
                language: "en"
            }, options);
            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
            form.attr("novalidate", "true");
            email.attr("name", "EMAIL");
            form.submit(function() {
                var msg;

                function successCallback(resp) {
                    if (resp.result === "success") {
                        msg = "We have sent you a confirmation email";
                        label.removeClass("error").addClass("valid");
                        email.removeClass("error").addClass("valid")
                    } else {
                        email.removeClass("valid").addClass("error");
                        label.removeClass("valid").addClass("error");
                        var index = -1;
                        try {
                            var parts = resp.msg.split(" - ", 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2e3);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: "jsonp",
                    error: function(resp, text) {
                        console.log("mailchimp ajax submit error: " + text)
                    }
                });
                var submitMsg = "Submitting...";
                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
                }
                label.html(submitMsg).show(2e3);
                return false
            })
        });
        return this
    }
})(jQuery);


/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function(t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function() {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function() {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);


/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";

    function i(i, r, a) {
        function h(t, e, n) {
            var o, r = "$()." + i + '("' + e + '")';
            return t.each(function(t, h) {
                var u = a.data(h, i);
                if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);
                var d = u[e];
                if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");
                var l = d.apply(u, n);
                o = void 0 === o ? l : o
            }), void 0 !== o ? o : t
        }

        function u(t, e) {
            t.each(function(t, n) {
                var o = a.data(n, i);
                o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o))
            })
        }
        a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h(this, t, e)
            }
            return u(this, t), this
        }, n(a))
    }

    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function() {} : function(t) {
            r.error(t)
        };
    return n(e || t.jQuery), i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(t, r), delete n[r]), r.apply(this, e)
            }
            return this
        }
    }, e.allOff = function() {
        delete this._events, delete this._onceEvents
    }, t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";

    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function e() {}

    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0; u > e; e++) {
            var i = h[e];
            t[i] = 0
        }
        return t
    }

    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function o() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e)
        }
    }

    function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var r = n(e);
            if ("none" == r.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l],
                    f = r[c],
                    m = parseFloat(f);
                a[c] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                E = d && s,
                b = t(r.width);
            b !== !1 && (a.width = b + (E ? 0 : p + _));
            var x = t(r.height);
            return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
            console.error(t)
        },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = h.length,
        d = !1;
    return r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";
            if (t[o]) return o
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function(t, e) {
        return (t % e + e) % e
    };
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }, i.removeFrom = function(t, e) {
        var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
    }, i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body;)
            if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var o = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);
                e(t, n) && o.push(t);
                for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) o.push(i[r])
            }
        }), o
    }, i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e],
            o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            clearTimeout(t);
            var e = arguments,
                r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e), delete r[o]
            }, i)
        }
    }, i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                l = t.jQuery;
            u.forEach(function(t) {
                var i, r = t.getAttribute(s) || t.getAttribute(d);
                try {
                    i = r && JSON.parse(r)
                } catch (a) {
                    return void(o && o.error("Error parsing " + s + " on " + t.className + ": " + a))
                }
                var h = new e(t, i);
                l && l.data(t, n, h)
            })
        })
    }, i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }

    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        h = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        d = n.prototype = Object.create(t.prototype);
    d.constructor = n, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function() {
        this.size = e(this.element)
    }, d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = u[i] || i;
            e[n] = t[i]
        }
    }, d.getPosition = function() {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            s = parseFloat(o),
            a = this.layout.size; - 1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
    }, d.layoutPosition = function() {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];
        e[r] = this.getXValue(a), e[s] = "";
        var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[h];
        e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
        var r = t - i,
            s = e - n,
            a = {};
        a.transform = this.getTranslate(r, s), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function(t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function(t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + o(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(h, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function(t) {
        this.ontransitionend(t)
    };
    var c = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];
                o.call(this), delete e.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var f = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(f)
    }, d.stagger = function(t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, n
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o) {
    "use strict";

    function r(t, e) {
        var i = n.getQueryElement(t);
        if (!i) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
        var o = ++l;
        this.element.outlayerGUID = o, c[o] = this, this._create();
        var r = this._getOption("initLayout");
        r && this.layout()
    }

    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var o = m[n] || 1;
        return i * o
    }
    var h = t.console,
        u = t.jQuery,
        d = function() {},
        l = 0,
        c = {};
    r.namespace = "outlayer", r.Item = o, r.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var f = r.prototype;
    n.extend(f, e.prototype), f.option = function(t) {
        n.extend(this.options, t)
    }, f._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, f._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, f.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, f._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);
            n.push(s)
        }
        return n
    }, f._filterFindItemElements = function(t) {
        return n.filterFindElements(t, this.options.itemSelector)
    }, f.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }, f.layout = function() {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, f._init = f.layout, f._resetLayout = function() {
        this.getSize()
    }, f.getSize = function() {
        this.size = i(this.element)
    }, f._getMeasurement = function(t, e) {
        var n, o = this.options[t];
        o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
    }, f.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, f._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }, f._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var n = this._getItemLayoutPosition(t);
                n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, f._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, f._processLayoutQueue = function(t) {
        this.updateStagger(), t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, f.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, f._positionItem = function(t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, f._postLayout = function() {
        this.resizeContainer()
    }, f.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, f._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function n() {
            s++, s == r && i()
        }
        var o = this,
            r = e.length;
        if (!e || !r) return void i();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, n)
        })
    }, f.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n), u)
            if (this.$element = this.$element || u(this.element), e) {
                var o = u.Event(e);
                o.type = t, this.$element.trigger(o, i)
            } else this.$element.trigger(t, i)
    }, f.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, f.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, f.stamp = function(t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, f.unstamp = function(t) {
        t = this._find(t), t && t.forEach(function(t) {
            n.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, f._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
    }, f._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, f._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect(),
            e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, f._manageStamp = d, f._getElementOffset = function(t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = {
                left: e.left - n.left - o.marginLeft,
                top: e.top - n.top - o.marginTop,
                right: n.right - e.right - o.marginRight,
                bottom: n.bottom - e.bottom - o.marginBottom
            };
        return r
    }, f.handleEvent = n.handleEvent, f.bindResize = function() {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, f.unbindResize = function() {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, f.onresize = function() {
        this.resize()
    }, n.debounceMethod(r, "onresize", 100), f.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, f.needsResizeLayout = function() {
        var t = i(this.element),
            e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, f.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, f.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, f.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, f.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, f.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, f.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, f.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }, f.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, f.getItems = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, f.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
            t.remove(), n.removeFrom(this.items, t)
        }, this)
    }, f.destroy = function() {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && c[e]
    }, r.create = function(t, e) {
        var i = s(r);
        return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i
    };
    var m = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o, r
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";
        r = Math[a](r), this.cols = Math.max(r, 1)
    }, n.getContainerWidth = function() {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);
        this.containerWidth = n && n.innerWidth
    }, n._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = {
                x: this.columnWidth * r.col,
                y: r.y
            }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) this.colYs[u] = a;
        return s
    }, n._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function(t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) e[n] = this._getColGroupY(n, t);
        return e
    }, n._getColGroupY = function(t, e) {
        if (2 > e) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols,
            n = t > 1 && i + t > this.cols;
        i = n ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }, n._manageStamp = function(t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var h = Math.floor(s / this.columnWidth);
        h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, n._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];
                s && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }

    function o(e, t, r) {
        if (!(this instanceof o)) return new o(e, t, r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)), s ? (this.elements = n(s), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }

    function r(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console,
        d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, r.prototype = Object.create(t.prototype), r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function(e, t) {
            var i = new o(this, e, t);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";

    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
    }
    var f = [],
        g = [],
        h = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        },
        j = function(b, c, d) {
            this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
        };
    a.extend(j.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function() {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"),
                d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && b < 0 ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
});
// End Coundown JS


/*! jQuery UI - v1.12.1 - 2018-11-27
 * http://jqueryui.com
 * Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var e = 0,
        i = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++) try {
                s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
            } catch (a) {}
            e(i)
        }
    }(t.cleanData), t.widget = function(e, i, s) {
        var n, o, a, r = {},
            l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) {
            return !!t.data(e, h)
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
        }, t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
            return t.isFunction(s) ? (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }(), void 0) : (r[e] = s, void 0)
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
        for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
            for (s in o[a]) n = o[a][s], o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
        return e
    }, t.widget.bridge = function(e, s) {
        var n = s.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var a = "string" == typeof o,
                r = i.call(arguments, 1),
                l = this;
            return a ? this.length || "instance" !== o ? this.each(function() {
                var i, s = t.data(this, n);
                return "instance" === o ? (l = s, !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r), i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function() {
                var e = t.data(this, n);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new s(o, this))
            })), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(i, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = [],
                n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t,
                o = {
                    extra: n ? e : i,
                    keys: n ? t : e,
                    element: n ? this.element : t,
                    add: s
                };
            return o.element.toggleClass(this._classes(o), s), this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];
                c ? n.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    }), t.widget, t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var s = !1;
    t(document).on("mouseup", function() {
        s = !1
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!s) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), s = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, s = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = "<span tabindex='0'></span>",
                a = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
            this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, l, h, c = this,
                u = this.options;
            return u.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - c.values(e));
                (n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
            }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - o.width() / 2,
                top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var s, n, o = this.value(),
                a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step,
                s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range,
                r = this.options,
                l = this,
                h = this._animateOff ? !1 : r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
                }
                switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - o)
                }
                this._slide(e, a, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    })
});


/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function(o) {
    var t = {
        url: !1,
        callback: !1,
        target: !1,
        duration: 120,
        on: "mouseover",
        touch: !0,
        onZoomIn: !1,
        onZoomOut: !1,
        magnify: 1
    };
    o.zoom = function(t, n, e, i) {
        var u, c, a, r, m, l, s, f = o(t),
            h = f.css("position"),
            d = o(n);
        return t.style.position = /(absolute|fixed)/.test(h) ? h : "relative", t.style.overflow = "hidden", e.style.width = e.style.height = "", o(e).addClass("zoomImg").css({
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0,
            width: e.width * i,
            height: e.height * i,
            border: "none",
            maxWidth: "none",
            maxHeight: "none"
        }).appendTo(t), {
            init: function() {
                c = f.outerWidth(), u = f.outerHeight(), n === t ? (r = c, a = u) : (r = d.outerWidth(), a = d.outerHeight()), m = (e.width - c) / r, l = (e.height - u) / a, s = d.offset()
            },
            move: function(o) {
                var t = o.pageX - s.left,
                    n = o.pageY - s.top;
                n = Math.max(Math.min(n, a), 0), t = Math.max(Math.min(t, r), 0), e.style.left = t * -m + "px", e.style.top = n * -l + "px"
            }
        }
    }, o.fn.zoom = function(n) {
        return this.each(function() {
            var e = o.extend({}, t, n || {}),
                i = e.target && o(e.target)[0] || this,
                u = this,
                c = o(u),
                a = document.createElement("img"),
                r = o(a),
                m = "mousemove.zoom",
                l = !1,
                s = !1;
            if (!e.url) {
                var f = u.querySelector("img");
                if (f && (e.url = f.getAttribute("data-src") || f.currentSrc || f.src), !e.url) return
            }
            c.one("zoom.destroy", function(o, t) {
                c.off(".zoom"), i.style.position = o, i.style.overflow = t, a.onload = null, r.remove()
            }.bind(this, i.style.position, i.style.overflow)), a.onload = function() {
                function t(t) {
                    f.init(), f.move(t), r.stop().fadeTo(o.support.opacity ? e.duration : 0, 1, o.isFunction(e.onZoomIn) ? e.onZoomIn.call(a) : !1)
                }

                function n() {
                    r.stop().fadeTo(e.duration, 0, o.isFunction(e.onZoomOut) ? e.onZoomOut.call(a) : !1)
                }
                var f = o.zoom(i, u, a, e.magnify);
                "grab" === e.on ? c.on("mousedown.zoom", function(e) {
                    1 === e.which && (o(document).one("mouseup.zoom", function() {
                        n(), o(document).off(m, f.move)
                    }), t(e), o(document).on(m, f.move), e.preventDefault())
                }) : "click" === e.on ? c.on("click.zoom", function(e) {
                    return l ? void 0 : (l = !0, t(e), o(document).on(m, f.move), o(document).one("click.zoom", function() {
                        n(), l = !1, o(document).off(m, f.move)
                    }), !1)
                }) : "toggle" === e.on ? c.on("click.zoom", function(o) {
                    l ? n() : t(o), l = !l
                }) : "mouseover" === e.on && (f.init(), c.on("mouseenter.zoom", t).on("mouseleave.zoom", n).on(m, f.move)), e.touch && c.on("touchstart.zoom", function(o) {
                    o.preventDefault(), s ? (s = !1, n()) : (s = !0, t(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]))
                }).on("touchmove.zoom", function(o) {
                    o.preventDefault(), f.move(o.originalEvent.touches[0] || o.originalEvent.changedTouches[0])
                }).on("touchend.zoom", function(o) {
                    o.preventDefault(), s && (s = !1, n())
                }), o.isFunction(e.callback) && e.callback.call(a)
            }, a.setAttribute("role", "presentation"), a.alt = "", a.src = e.url
        })
    }, o.fn.zoom.defaults = t
})(window.jQuery);



/* sticky-sidebar - A JavaScript plugin for making smart and high performance. */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e()
}(this, function() {
    "use strict";
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

    function t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var i = e(function(t, e) {
        (function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l, n, e = function() {
                    function n(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(t, e, i) {
                        return e && n(t.prototype, e), i && n(t, i), t
                    }
                }(),
                i = (l = ".stickySidebar", n = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    containerSelector: !1,
                    innerWrapperSelector: ".inner-wrapper-sticky",
                    stickyClass: "is-affixed",
                    resizeSensor: !0,
                    minWidth: !1
                }, function() {
                    function c(t) {
                        var e = this,
                            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                        if (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), this.options = c.extend(n, i), this.sidebar = "string" == typeof t ? document.querySelector(t) : t, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
                        this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
                            transform: !1,
                            transform3d: !1
                        }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
                            translateY: 0,
                            maxTranslateY: 0,
                            topSpacing: 0,
                            lastTopSpacing: 0,
                            bottomSpacing: 0,
                            lastBottomSpacing: 0,
                            sidebarHeight: 0,
                            sidebarWidth: 0,
                            containerTop: 0,
                            containerHeight: 0,
                            viewportHeight: 0,
                            viewportTop: 0,
                            lastViewportTop: 0
                        }, ["handleEvent"].forEach(function(t) {
                            e[t] = e[t].bind(e)
                        }), this.initialize()
                    }
                    return e(c, [{
                        key: "initialize",
                        value: function() {
                            var i = this;
                            if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                                var t = document.createElement("div");
                                for (t.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(t); this.sidebar.firstChild != t;) t.appendChild(this.sidebar.firstChild);
                                this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                            }
                            if (this.options.containerSelector) {
                                var e = document.querySelectorAll(this.options.containerSelector);
                                if ((e = Array.prototype.slice.call(e)).forEach(function(t, e) {
                                        t.contains(i.sidebar) && (i.container = t)
                                    }), !e.length) throw new Error("The container does not contains on the sidebar.")
                            }
                            "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
                        }
                    }, {
                        key: "bindEvents",
                        value: function() {
                            window.addEventListener("resize", this, {
                                passive: !0,
                                capture: !1
                            }), window.addEventListener("scroll", this, {
                                passive: !0,
                                capture: !1
                            }), this.sidebar.addEventListener("update" + l, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
                        }
                    }, {
                        key: "handleEvent",
                        value: function(t) {
                            this.updateSticky(t)
                        }
                    }, {
                        key: "calcDimensions",
                        value: function() {
                            if (!this._breakpoint) {
                                var t = this.dimensions;
                                t.containerTop = c.offsetRelative(this.container).top, t.containerHeight = this.container.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.sidebarInner.offsetHeight, t.sidebarWidth = this.sidebarInner.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this._calcDimensionsWithScroll()
                            }
                        }
                    }, {
                        key: "_calcDimensionsWithScroll",
                        value: function() {
                            var t = this.dimensions;
                            t.sidebarLeft = c.offsetRelative(this.sidebar).left, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.topSpacing = this.options.topSpacing, t.bottomSpacing = this.options.bottomSpacing, "function" == typeof t.topSpacing && (t.topSpacing = parseInt(t.topSpacing(this.sidebar)) || 0), "function" == typeof t.bottomSpacing && (t.bottomSpacing = parseInt(t.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? t.topSpacing < t.lastTopSpacing && (t.translateY += t.lastTopSpacing - t.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && t.bottomSpacing < t.lastBottomSpacing && (t.translateY += t.lastBottomSpacing - t.bottomSpacing, this._reStyle = !0), t.lastTopSpacing = t.topSpacing, t.lastBottomSpacing = t.bottomSpacing
                        }
                    }, {
                        key: "isSidebarFitsViewport",
                        value: function() {
                            var t = this.dimensions,
                                e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
                            return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
                        }
                    }, {
                        key: "observeScrollDir",
                        value: function() {
                            var t = this.dimensions;
                            if (t.lastViewportTop !== t.viewportTop) {
                                var e = "down" === this.direction ? Math.min : Math.max;
                                t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                            }
                        }
                    }, {
                        key: "getAffixType",
                        value: function() {
                            this._calcDimensionsWithScroll();
                            var t = this.dimensions,
                                e = t.viewportTop + t.topSpacing,
                                i = this.affixedType;
                            return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
                        }
                    }, {
                        key: "_getAffixTypeScrollingDown",
                        value: function() {
                            var t = this.dimensions,
                                e = t.sidebarHeight + t.containerTop,
                                i = t.viewportTop + t.topSpacing,
                                n = t.viewportBottom - t.bottomSpacing,
                                o = this.affixedType;
                            return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= n ? (t.translateY = n - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                        }
                    }, {
                        key: "_getAffixTypeScrollingUp",
                        value: function() {
                            var t = this.dimensions,
                                e = t.sidebarHeight + t.containerTop,
                                i = t.viewportTop + t.topSpacing,
                                n = t.viewportBottom - t.bottomSpacing,
                                o = this.affixedType;
                            return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= n ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                        }
                    }, {
                        key: "_getStyle",
                        value: function(t) {
                            if (void 0 !== t) {
                                var e = {
                                        inner: {},
                                        outer: {}
                                    },
                                    i = this.dimensions;
                                switch (t) {
                                    case "VIEWPORT-TOP":
                                        e.inner = {
                                            position: "fixed",
                                            top: i.topSpacing,
                                            left: i.sidebarLeft - i.viewportLeft,
                                            width: i.sidebarWidth
                                        };
                                        break;
                                    case "VIEWPORT-BOTTOM":
                                        e.inner = {
                                            position: "fixed",
                                            top: "auto",
                                            left: i.sidebarLeft,
                                            bottom: i.bottomSpacing,
                                            width: i.sidebarWidth
                                        };
                                        break;
                                    case "CONTAINER-BOTTOM":
                                    case "VIEWPORT-UNBOTTOM":
                                        var n = this._getTranslate(0, i.translateY + "px");
                                        e.inner = n ? {
                                            transform: n
                                        } : {
                                            position: "absolute",
                                            top: i.translateY,
                                            width: i.sidebarWidth
                                        }
                                }
                                switch (t) {
                                    case "VIEWPORT-TOP":
                                    case "VIEWPORT-BOTTOM":
                                    case "VIEWPORT-UNBOTTOM":
                                    case "CONTAINER-BOTTOM":
                                        e.outer = {
                                            height: i.sidebarHeight,
                                            position: "relative"
                                        }
                                }
                                return e.outer = c.extend({
                                    height: "",
                                    position: ""
                                }, e.outer), e.inner = c.extend({
                                    position: "relative",
                                    top: "",
                                    left: "",
                                    bottom: "",
                                    width: "",
                                    transform: ""
                                }, e.inner), e
                            }
                        }
                    }, {
                        key: "stickyPosition",
                        value: function(t) {
                            if (!this._breakpoint) {
                                t = this._reStyle || t || !1, this.options.topSpacing, this.options.bottomSpacing;
                                var e = this.getAffixType(),
                                    i = this._getStyle(e);
                                if ((this.affixedType != e || t) && e) {
                                    var n = "affix." + e.toLowerCase().replace("viewport-", "") + l;
                                    for (var o in c.eventTrigger(this.sidebar, n), "STATIC" === e ? c.removeClass(this.sidebar, this.options.stickyClass) : c.addClass(this.sidebar, this.options.stickyClass), i.outer) {
                                        var s = "number" == typeof i.outer[o] ? "px" : "";
                                        this.sidebar.style[o] = i.outer[o] + s
                                    }
                                    for (var r in i.inner) {
                                        var a = "number" == typeof i.inner[r] ? "px" : "";
                                        this.sidebarInner.style[r] = i.inner[r] + a
                                    }
                                    var p = "affixed." + e.toLowerCase().replace("viewport-", "") + l;
                                    c.eventTrigger(this.sidebar, p)
                                } else this._initialized && (this.sidebarInner.style.left = i.inner.left);
                                this.affixedType = e
                            }
                        }
                    }, {
                        key: "_widthBreakpoint",
                        value: function() {
                            window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), c.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                        }
                    }, {
                        key: "updateSticky",
                        value: function() {
                            var t, e = this,
                                i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            this._running || (this._running = !0, t = i.type, requestAnimationFrame(function() {
                                switch (t) {
                                    case "scroll":
                                        e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                                        break;
                                    case "resize":
                                    default:
                                        e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0)
                                }
                                e._running = !1
                            }))
                        }
                    }, {
                        key: "_setSupportFeatures",
                        value: function() {
                            var t = this.support;
                            t.transform = c.supportTransform(), t.transform3d = c.supportTransform(!0)
                        }
                    }, {
                        key: "_getTranslate",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                                i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                            return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            window.removeEventListener("resize", this, {
                                capture: !1
                            }), window.removeEventListener("scroll", this, {
                                capture: !1
                            }), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + l, this);
                            var t = {
                                inner: {},
                                outer: {}
                            };
                            for (var e in t.inner = {
                                    position: "",
                                    top: "",
                                    left: "",
                                    bottom: "",
                                    width: "",
                                    transform: ""
                                }, t.outer = {
                                    height: "",
                                    position: ""
                                }, t.outer) this.sidebar.style[e] = t.outer[e];
                            for (var i in t.inner) this.sidebarInner.style[i] = t.inner[i];
                            this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
                        }
                    }], [{
                        key: "supportTransform",
                        value: function(t) {
                            var i = !1,
                                e = t ? "perspective" : "transform",
                                n = e.charAt(0).toUpperCase() + e.slice(1),
                                o = document.createElement("support").style;
                            return (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ").forEach(function(t, e) {
                                if (void 0 !== o[t]) return i = t, !1
                            }), i
                        }
                    }, {
                        key: "eventTrigger",
                        value: function(t, e, i) {
                            try {
                                var n = new CustomEvent(e, {
                                    detail: i
                                })
                            } catch (t) {
                                (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                            }
                            t.dispatchEvent(n)
                        }
                    }, {
                        key: "extend",
                        value: function(t, e) {
                            var i = {};
                            for (var n in t) void 0 !== e[n] ? i[n] = e[n] : i[n] = t[n];
                            return i
                        }
                    }, {
                        key: "offsetRelative",
                        value: function(t) {
                            var e = {
                                left: 0,
                                top: 0
                            };
                            do {
                                var i = t.offsetTop,
                                    n = t.offsetLeft;
                                isNaN(i) || (e.top += i), isNaN(n) || (e.left += n), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                            } while (t);
                            return e
                        }
                    }, {
                        key: "addClass",
                        value: function(t, e) {
                            c.hasClass(t, e) || (t.classList ? t.classList.add(e) : t.className += " " + e)
                        }
                    }, {
                        key: "removeClass",
                        value: function(t, e) {
                            c.hasClass(t, e) && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                        }
                    }, {
                        key: "hasClass",
                        value: function(t, e) {
                            return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                        }
                    }, {
                        key: "defaults",
                        get: function() {
                            return n
                        }
                    }]), c
                }());
            t.default = i, window.StickySidebar = i
        })(e)
    });
    return t(i), t(e(function(t, e) {
        (function(t) {
            var e, s = (e = t) && e.__esModule ? e : {
                default: e
            };
            ! function() {
                if ("undefined" != typeof window) {
                    var n = window.$ || window.jQuery || window.Zepto,
                        o = "stickySidebar";
                    if (n) {
                        n.fn.stickySidebar = function(i) {
                            return this.each(function() {
                                var t = n(this),
                                    e = n(this).data(o);
                                if (e || (e = new s.default(this, "object" == typeof i && i), t.data(o, e)), "string" == typeof i) {
                                    if (void 0 === e[i] && -1 === ["destroy", "updateSticky"].indexOf(i)) throw new Error('No method named "' + i + '"');
                                    e[i]()
                                }
                            })
                        }, n.fn.stickySidebar.Constructor = s.default;
                        var t = n.fn.stickySidebar;
                        n.fn.stickySidebar.noConflict = function() {
                            return n.fn.stickySidebar = t, this
                        }
                    }
                }
            }()
        })(i)
    }))
});



// Instagram feed js
// Generated by CoffeeScript 1.9.3
(function() {
    var e;
    e = function() {
            function e(e, t) {
                var n, r;
                this.options = {
                    target: "instafeed",
                    get: "popular",
                    resolution: "thumbnail",
                    sortBy: "none",
                    links: !0,
                    mock: !1,
                    useHttp: !1
                };
                if (typeof e == "object")
                    for (n in e) r = e[n], this.options[n] = r;
                this.context = t != null ? t : this, this.unique = this._genKey()
            }
            return e.prototype.hasNext = function() {
                return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
            }, e.prototype.next = function() {
                return this.hasNext() ? this.run(this.context.nextUrl) : !1
            }, e.prototype.run = function(t) {
                var n, r, i;
                if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
                if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
                return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
            }, e.prototype.parse = function(e) {
                var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
                if (typeof e != "object") {
                    if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
                    throw new Error("Invalid JSON response")
                }
                if (e.meta.code !== 200) {
                    if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
                    throw new Error("Error from Instagram: " + e.meta.error_message)
                }
                if (e.data.length === 0) {
                    if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
                    throw new Error("No images were returned from Instagram")
                }
                this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
                if (this.options.sortBy !== "none") {
                    this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
                    switch (M[1]) {
                        case "random":
                            e.data.sort(function() {
                                return .5 - Math.random()
                            });
                            break;
                        case "recent":
                            e.data = this._sortBy(e.data, "created_time", O);
                            break;
                        case "liked":
                            e.data = this._sortBy(e.data, "likes.count", O);
                            break;
                        case "commented":
                            e.data = this._sortBy(e.data, "comments.count", O);
                            break;
                        default:
                            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                    }
                }
                if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
                    m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
                    if (this.options.template != null && typeof this.options.template == "string") {
                        f = "", d = "", w = "", D = document.createElement("div");
                        for (c = 0, N = m.length; c < N; c++) {
                            h = m[c], p = h.images[this.options.resolution];
                            if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                            E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
                                model: h,
                                id: h.id,
                                link: h.link,
                                type: h.type,
                                image: v,
                                width: E,
                                height: y,
                                orientation: b,
                                caption: this._getObjectProperty(h, "caption.text"),
                                likes: h.likes.count,
                                comments: h.comments.count,
                                location: this._getObjectProperty(h, "location.name")
                            }), f += d
                        }
                        D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
                        while (r < n) i.push(D.childNodes[r]), r += 1;
                        for (x = 0, C = i.length; x < C; x++) L = i[x], u.appendChild(L)
                    } else
                        for (T = 0, k = m.length; T < k; T++) {
                            h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
                            if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
                            v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
                        }
                    _ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
                    if (_ == null) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
                    _.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
                    try {
                        delete window[S]
                    } catch (P) {
                        s = P
                    }
                }
                return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
            }, e.prototype._buildUrl = function() {
                var e, t, n;
                e = "https://api.instagram.com/v1";
                switch (this.options.get) {
                    case "popular":
                        t = "media/popular";
                        break;
                    case "tagged":
                        if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                        t = "tags/" + this.options.tagName + "/media/recent";
                        break;
                    case "location":
                        if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                        t = "locations/" + this.options.locationId + "/media/recent";
                        break;
                    case "user":
                        if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                        t = "users/" + this.options.userId + "/media/recent";
                        break;
                    default:
                        throw new Error("Invalid option for get: '" + this.options.get + "'.")
                }
                return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
            }, e.prototype._genKey = function() {
                var e;
                return e = function() {
                    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
                }, "" + e() + e() + e() + e()
            }, e.prototype._makeTemplate = function(e, t) {
                var n, r, i, s, o;
                r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
                while (r.test(n)) s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function() {
                    return "" + o
                });
                return n
            }, e.prototype._getObjectProperty = function(e, t) {
                var n, r;
                t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
                while (r.length) {
                    n = r.shift();
                    if (!(e != null && n in e)) return null;
                    e = e[n]
                }
                return e
            }, e.prototype._sortBy = function(e, t, n) {
                var r;
                return r = function(e, r) {
                    var i, s;
                    return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
                }, e.sort(r.bind(this)), e
            }, e.prototype._filter = function(e, t) {
                var n, r, i, s, o;
                n = [], r = function(e) {
                    if (t(e)) return n.push(e)
                };
                for (i = 0, o = e.length; i < o; i++) s = e[i], r(s);
                return n
            }, e
        }(),
        function(e, t) {
            return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
        }(this, function() {
            return e
        })
}).call(this);



// google map

/* @preserve
 * Leaflet 1.3.4+Detached: 0e566b2ad5e696ba9f79a9d48a7e51c8f4892441.0e566b2, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function(t) {
    "use strict";

    function i(t) {
        var i, e, n, o;
        for (e = 1, n = arguments.length; e < n; e++) {
            o = arguments[e];
            for (i in o) t[i] = o[i]
        }
        return t
    }

    function e(t, i) {
        var e = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
        var n = e.call(arguments, 2);
        return function() {
            return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
        }
    }

    function n(t) {
        return t._leaflet_id = t._leaflet_id || ++ei, t._leaflet_id
    }

    function o(t, i, e) {
        var n, o, s, r;
        return r = function() {
            n = !1, o && (s.apply(e, o), o = !1)
        }, s = function() {
            n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
        }
    }

    function s(t, i, e) {
        var n = i[1],
            o = i[0],
            s = n - o;
        return t === n && e ? t : ((t - o) % s + s) % s + o
    }

    function r() {
        return !1
    }

    function a(t, i) {
        var e = Math.pow(10, void 0 === i ? 6 : i);
        return Math.round(t * e) / e
    }

    function h(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function u(t) {
        return h(t).split(/\s+/)
    }

    function l(t, i) {
        t.hasOwnProperty("options") || (t.options = t.options ? ii(t.options) : {});
        for (var e in i) t.options[e] = i[e];
        return t.options
    }

    function c(t, i, e) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
    }

    function _(t, i) {
        return t.replace(ni, function(t, e) {
            var n = i[e];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(i)), n
        })
    }

    function d(t, i) {
        for (var e = 0; e < t.length; e++)
            if (t[e] === i) return e;
        return -1
    }

    function p(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function m(t) {
        var i = +new Date,
            e = Math.max(0, 16 - (i - ri));
        return ri = i + e, window.setTimeout(t, e)
    }

    function f(t, i, n) {
        if (!n || ai !== m) return ai.call(window, e(t, i));
        t.call(i)
    }

    function g(t) {
        t && hi.call(window, t)
    }

    function v() {}

    function y(t) {
        if ("undefined" != typeof L && L && L.Mixin) {
            t = oi(t) ? t : [t];
            for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
        }
    }

    function x(t, i, e) {
        this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
    }

    function w(t, i, e) {
        return t instanceof x ? t : oi(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e)
    }

    function P(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function b(t, i) {
        return !t || t instanceof P ? t : new P(t, i)
    }

    function T(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function z(t, i) {
        return t instanceof T ? t : new T(t, i)
    }

    function M(t, i, e) {
        if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
        this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
    }

    function C(t, i, e) {
        return t instanceof M ? t : oi(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e)
    }

    function S(t, i, e, n) {
        if (oi(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
        this._a = t, this._b = i, this._c = e, this._d = n
    }

    function Z(t, i, e, n) {
        return new S(t, i, e, n)
    }

    function E(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function k(t, i) {
        var e, n, o, s, r, a, h = "";
        for (e = 0, o = t.length; e < o; e++) {
            for (n = 0, s = (r = t[e]).length; n < s; n++) a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
            h += i ? Ji ? "z" : "x" : ""
        }
        return h || "M0 0"
    }

    function A(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0
    }

    function B(t, i, e, n) {
        return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this
    }

    function I(t, i, e) {
        var n = t["_leaflet_" + i + e];
        return "touchstart" === i ? t.removeEventListener(te, n, !1) : "touchmove" === i ? t.removeEventListener(ie, n, !1) : "touchend" === i && (t.removeEventListener(ee, n, !1), t.removeEventListener(ne, n, !1)), this
    }

    function O(t, i, n) {
        var o = e(function(t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(oe.indexOf(t.target.tagName) < 0)) return;
                Pt(t)
            }
            j(t, i)
        });
        t["_leaflet_touchstart" + n] = o, t.addEventListener(te, o, !1), re || (document.documentElement.addEventListener(te, R, !0), document.documentElement.addEventListener(ie, N, !0), document.documentElement.addEventListener(ee, D, !0), document.documentElement.addEventListener(ne, D, !0), re = !0)
    }

    function R(t) {
        se[t.pointerId] = t, ae++
    }

    function N(t) {
        se[t.pointerId] && (se[t.pointerId] = t)
    }

    function D(t) {
        delete se[t.pointerId], ae--
    }

    function j(t, i) {
        t.touches = [];
        for (var e in se) t.touches.push(se[e]);
        t.changedTouches = [t], i(t)
    }

    function W(t, i, e) {
        var n = function(t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i)
        };
        t["_leaflet_touchmove" + e] = n, t.addEventListener(ie, n, !1)
    }

    function H(t, i, e) {
        var n = function(t) {
            j(t, i)
        };
        t["_leaflet_touchend" + e] = n, t.addEventListener(ee, n, !1), t.addEventListener(ne, n, !1)
    }

    function F(t, i, e) {
        function n(t) {
            var i;
            if (Vi) {
                if (!bi || "mouse" === t.pointerType) return;
                i = ae
            } else i = t.touches.length;
            if (!(i > 1)) {
                var e = Date.now(),
                    n = e - (s || e);
                r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e
            }
        }

        function o(t) {
            if (a && !r.cancelBubble) {
                if (Vi) {
                    if (!bi || "mouse" === t.pointerType) return;
                    var e, n, o = {};
                    for (n in r) e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
                    r = o
                }
                r.type = "dblclick", i(r), s = null
            }
        }
        var s, r, a = !1,
            h = 250;
        return t[le + he + e] = n, t[le + ue + e] = o, t[le + "dblclick" + e] = i, t.addEventListener(he, n, !1), t.addEventListener(ue, o, !1), t.addEventListener("dblclick", i, !1), this
    }

    function U(t, i) {
        var e = t[le + he + i],
            n = t[le + ue + i],
            o = t[le + "dblclick" + i];
        return t.removeEventListener(he, e, !1), t.removeEventListener(ue, n, !1), bi || t.removeEventListener("dblclick", o, !1), this
    }

    function V(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function q(t, i) {
        var e = t.style[i] || t.currentStyle && t.currentStyle[i];
        if ((!e || "auto" === e) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            e = n ? n[i] : null
        }
        return "auto" === e ? null : e
    }

    function G(t, i, e) {
        var n = document.createElement(t);
        return n.className = i || "", e && e.appendChild(n), n
    }

    function K(t) {
        var i = t.parentNode;
        i && i.removeChild(t)
    }

    function Y(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function X(t) {
        var i = t.parentNode;
        i.lastChild !== t && i.appendChild(t)
    }

    function J(t) {
        var i = t.parentNode;
        i.firstChild !== t && i.insertBefore(t, i.firstChild)
    }

    function $(t, i) {
        if (void 0 !== t.classList) return t.classList.contains(i);
        var e = et(t);
        return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
    }

    function Q(t, i) {
        if (void 0 !== t.classList)
            for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
        else if (!$(t, i)) {
            var s = et(t);
            it(t, (s ? s + " " : "") + i)
        }
    }

    function tt(t, i) {
        void 0 !== t.classList ? t.classList.remove(i) : it(t, h((" " + et(t) + " ").replace(" " + i + " ", " ")))
    }

    function it(t, i) {
        void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
    }

    function et(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function nt(t, i) {
        "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && ot(t, i)
    }

    function ot(t, i) {
        var e = !1,
            n = "DXImageTransform.Microsoft.Alpha";
        try {
            e = t.filters.item(n)
        } catch (t) {
            if (1 === i) return
        }
        i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
    }

    function st(t) {
        for (var i = document.documentElement.style, e = 0; e < t.length; e++)
            if (t[e] in i) return t[e];
        return !1
    }

    function rt(t, i, e) {
        var n = i || new x(0, 0);
        t.style[ce] = (Ri ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
    }

    function at(t, i) {
        t._leaflet_pos = i, ji ? rt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
    }

    function ht(t) {
        return t._leaflet_pos || new x(0, 0)
    }

    function ut() {
        mt(window, "dragstart", Pt)
    }

    function lt() {
        ft(window, "dragstart", Pt)
    }

    function ct(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (_t(), me = t, fe = t.style.outline, t.style.outline = "none", mt(window, "keydown", _t))
    }

    function _t() {
        me && (me.style.outline = fe, me = void 0, fe = void 0, ft(window, "keydown", _t))
    }

    function dt(t) {
        do {
            t = t.parentNode
        } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
        return t
    }

    function pt(t) {
        var i = t.getBoundingClientRect();
        return {
            x: i.width / t.offsetWidth || 1,
            y: i.height / t.offsetHeight || 1,
            boundingClientRect: i
        }
    }

    function mt(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) gt(t, o, i[o], e);
        else
            for (var s = 0, r = (i = u(i)).length; s < r; s++) gt(t, i[s], e, n);
        return this
    }

    function ft(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) vt(t, o, i[o], e);
        else if (i)
            for (var s = 0, r = (i = u(i)).length; s < r; s++) vt(t, i[s], e, n);
        else {
            for (var a in t[ye]) vt(t, a, t[ye][a]);
            delete t[ye]
        }
        return this
    }

    function gt(t, i, e, o) {
        var s = i + n(e) + (o ? "_" + n(o) : "");
        if (t[ye] && t[ye][s]) return this;
        var r = function(i) {
                return e.call(o || t, i || window.event)
            },
            a = r;
        Vi && 0 === i.indexOf("touch") ? B(t, i, r, s) : !qi || "dblclick" !== i || !F || Vi && Ei ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function(i) {
            i = i || window.event, Ct(t, i) && a(i)
        }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && zi && (r = function(t) {
            St(t, a)
        }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[ye] = t[ye] || {}, t[ye][s] = r
    }

    function vt(t, i, e, o) {
        var s = i + n(e) + (o ? "_" + n(o) : ""),
            r = t[ye] && t[ye][s];
        if (!r) return this;
        Vi && 0 === i.indexOf("touch") ? I(t, i, s) : !qi || "dblclick" !== i || !U || Vi && Ei ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : U(t, s), t[ye][s] = null
    }

    function yt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Mt(t), this
    }

    function xt(t) {
        return gt(t, "mousewheel", yt), this
    }

    function wt(t) {
        return mt(t, "mousedown touchstart dblclick", yt), gt(t, "click", zt), this
    }

    function Pt(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function Lt(t) {
        return Pt(t), yt(t), this
    }

    function bt(t, i) {
        if (!i) return new x(t.clientX, t.clientY);
        var e = pt(i),
            n = e.boundingClientRect;
        return new x((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
    }

    function Tt(t) {
        return bi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / xe : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function zt(t) {
        we[t.type] = !0
    }

    function Mt(t) {
        var i = we[t.type];
        return we[t.type] = !1, i
    }

    function Ct(t, i) {
        var e = i.relatedTarget;
        if (!e) return !0;
        try {
            for (; e && e !== t;) e = e.parentNode
        } catch (t) {
            return !1
        }
        return e !== t
    }

    function St(t, i) {
        var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
            n = ge && e - ge;
        n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Lt(t) : (ge = e, i(t))
    }

    function Zt(t, i) {
        if (!i || !t.length) return t.slice();
        var e = i * i;
        return t = Bt(t, e), t = kt(t, e)
    }

    function Et(t, i, e) {
        return Math.sqrt(Dt(t, i, e, !0))
    }

    function kt(t, i) {
        var e = t.length,
            n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
        n[0] = n[e - 1] = 1, At(t, n, i, 0, e - 1);
        var o, s = [];
        for (o = 0; o < e; o++) n[o] && s.push(t[o]);
        return s
    }

    function At(t, i, e, n, o) {
        var s, r, a, h = 0;
        for (r = n + 1; r <= o - 1; r++)(a = Dt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
        h > e && (i[s] = 1, At(t, i, e, n, s), At(t, i, e, s, o))
    }

    function Bt(t, i) {
        for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Nt(t[n], t[o]) > i && (e.push(t[n]), o = n);
        return o < s - 1 && e.push(t[s - 1]), e
    }

    function It(t, i, e, n, o) {
        var s, r, a, h = n ? ke : Rt(t, e),
            u = Rt(i, e);
        for (ke = u;;) {
            if (!(h | u)) return [t, i];
            if (h & u) return !1;
            a = Rt(r = Ot(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
        }
    }

    function Ot(t, i, e, n, o) {
        var s, r, a = i.x - t.x,
            h = i.y - t.y,
            u = n.min,
            l = n.max;
        return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o)
    }

    function Rt(t, i) {
        var e = 0;
        return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
    }

    function Nt(t, i) {
        var e = i.x - t.x,
            n = i.y - t.y;
        return e * e + n * n
    }

    function Dt(t, i, e, n) {
        var o, s = i.x,
            r = i.y,
            a = e.x - s,
            h = e.y - r,
            u = a * a + h * h;
        return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r)
    }

    function jt(t) {
        return !oi(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function Wt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), jt(t)
    }

    function Ht(t, i, e) {
        var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
        for (o = 0, u = t.length; o < u; o++) t[o]._code = Rt(t[o], i);
        for (r = 0; r < 4; r++) {
            for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = Ot(h, a, l, i, e))._code = Rt(c, i), n.push(c)) : (h._code & l && ((c = Ot(h, a, l, i, e))._code = Rt(c, i), n.push(c)), n.push(a));
            t = n
        }
        return t
    }

    function Ft(t, i) {
        var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            u = i && i.pointToLayer,
            l = i && i.coordsToLatLng || Ut;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return e = l(a), u ? u(t, e) : new $e(e);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new $e(e));
                return new Ke(h);
            case "LineString":
            case "MultiLineString":
                return n = Vt(a, "LineString" === r.type ? 0 : 1, l), new nn(n, i);
            case "Polygon":
            case "MultiPolygon":
                return n = Vt(a, "Polygon" === r.type ? 1 : 2, l), new on(n, i);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = Ft({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, i);
                    c && h.push(c)
                }
                return new Ke(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Ut(t) {
        return new M(t[1], t[0], t[2])
    }

    function Vt(t, i, e) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Vt(t[s], i - 1, e) : (e || Ut)(t[s]), o.push(n);
        return o
    }

    function qt(t, i) {
        return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)]
    }

    function Gt(t, i, e, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? Gt(t[s], i - 1, e, n) : qt(t[s], n));
        return !i && e && o.push(o[0]), o
    }

    function Kt(t, e) {
        return t.feature ? i({}, t.feature, {
            geometry: e
        }) : Yt(e)
    }

    function Yt(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function Xt(t, i) {
        return new sn(t, i)
    }

    function Jt(t, i) {
        return new mn(t, i)
    }

    function $t(t) {
        return Xi ? new vn(t) : null
    }

    function Qt(t) {
        return Ji || $i ? new Pn(t) : null
    }
    var ti = Object.freeze;
    Object.freeze = function(t) {
        return t
    };
    var ii = Object.create || function() {
            function t() {}
            return function(i) {
                return t.prototype = i, new t
            }
        }(),
        ei = 0,
        ni = /\{ *([\w_-]+) *\}/g,
        oi = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        si = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        ri = 0,
        ai = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
        hi = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function(t) {
            window.clearTimeout(t)
        },
        ui = (Object.freeze || Object)({
            freeze: ti,
            extend: i,
            create: ii,
            bind: e,
            lastId: ei,
            stamp: n,
            throttle: o,
            wrapNum: s,
            falseFn: r,
            formatNum: a,
            trim: h,
            splitWords: u,
            setOptions: l,
            getParamString: c,
            template: _,
            isArray: oi,
            indexOf: d,
            emptyImageUrl: si,
            requestFn: ai,
            cancelFn: hi,
            requestAnimFrame: f,
            cancelAnimFrame: g
        });
    v.extend = function(t) {
        var e = function() {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
            },
            n = e.__super__ = this.prototype,
            o = ii(n);
        o.constructor = e, e.prototype = o;
        for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
        return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(ii(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function() {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, i = o._initHooks.length; t < i; t++) o._initHooks[t].call(this)
            }
        }, e
    }, v.include = function(t) {
        return i(this.prototype, t), this
    }, v.mergeOptions = function(t) {
        return i(this.prototype.options, t), this
    }, v.addInitHook = function(t) {
        var i = Array.prototype.slice.call(arguments, 1),
            e = "function" == typeof t ? t : function() {
                this[t].apply(this, i)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
    };
    var li = {
        on: function(t, i, e) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], i);
            else
                for (var o = 0, s = (t = u(t)).length; o < s; o++) this._on(t[o], i, e);
            return this
        },
        off: function(t, i, e) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], i);
                else
                    for (var o = 0, s = (t = u(t)).length; o < s; o++) this._off(t[o], i, e);
            else delete this._events;
            return this
        },
        _on: function(t, i, e) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), e === this && (e = void 0);
            for (var o = {
                    fn: i,
                    ctx: e
                }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === i && s[r].ctx === e) return;
            s.push(o)
        },
        _off: function(t, i, e) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (i) {
                    if (e === this && (e = void 0), n)
                        for (o = 0, s = n.length; o < s; o++) {
                            var a = n[o];
                            if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                        }
                } else {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
                    delete this._events[t]
                }
        },
        fire: function(t, e, n) {
            if (!this.listens(t, n)) return this;
            var o = i({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var r = 0, a = s.length; r < a; r++) {
                        var h = s[r];
                        h.fn.call(h.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(o), this
        },
        listens: function(t, i) {
            var e = this._events && this._events[t];
            if (e && e.length) return !0;
            if (i)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, i)) return !0;
            return !1
        },
        once: function(t, i, n) {
            if ("object" == typeof t) {
                for (var o in t) this.once(o, t[o], i);
                return this
            }
            var s = e(function() {
                this.off(t, i, n).off(t, s, n)
            }, this);
            return this.on(t, i, n).on(t, s, n)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[n(t)], this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    li.addEventListener = li.on, li.removeEventListener = li.clearAllEventListeners = li.off, li.addOneTimeEventListener = li.once, li.fireEvent = li.fire, li.hasEventListeners = li.listens;
    var ci = v.extend(li),
        _i = Math.trunc || function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        };
    x.prototype = {
        clone: function() {
            return new x(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(w(t))
        },
        _add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.clone()._subtract(w(t))
        },
        _subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function(t) {
            return new x(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function(t) {
            return new x(this.x / t.x, this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = _i(this.x), this.y = _i(this.y), this
        },
        distanceTo: function(t) {
            var i = (t = w(t)).x - this.x,
                e = t.y - this.y;
            return Math.sqrt(i * i + e * e)
        },
        equals: function(t) {
            return (t = w(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + a(this.x) + ", " + a(this.y) + ")"
        }
    }, P.prototype = {
        extend: function(t) {
            return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function(t) {
            return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new x(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new x(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var i, e;
            return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
        },
        intersects: function(t) {
            t = b(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= i.x && n.x <= e.x,
                r = o.y >= i.y && n.y <= e.y;
            return s && r
        },
        overlaps: function(t) {
            t = b(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x > i.x && n.x < e.x,
                r = o.y > i.y && n.y < e.y;
            return s && r
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    }, T.prototype = {
        extend: function(t) {
            var i, e, n = this._southWest,
                o = this._northEast;
            if (t instanceof M) i = t, e = t;
            else {
                if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
                if (i = t._southWest, e = t._northEast, !i || !e) return this
            }
            return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this
        },
        pad: function(t) {
            var i = this._southWest,
                e = this._northEast,
                n = Math.abs(i.lat - e.lat) * t,
                o = Math.abs(i.lng - e.lng) * t;
            return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o))
        },
        getCenter: function() {
            return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new M(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new M(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
            var i, e, n = this._southWest,
                o = this._northEast;
            return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        },
        intersects: function(t) {
            t = z(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= i.lat && n.lat <= e.lat,
                r = o.lng >= i.lng && n.lng <= e.lng;
            return s && r
        },
        overlaps: function(t) {
            t = z(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > i.lat && n.lat < e.lat,
                r = o.lng > i.lng && n.lng < e.lng;
            return s && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, i) {
            return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    }, M.prototype = {
        equals: function(t, i) {
            return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
        },
        toString: function(t) {
            return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")"
        },
        distanceTo: function(t) {
            return pi.distance(this, C(t))
        },
        wrap: function() {
            return pi.wrapLatLng(this)
        },
        toBounds: function(t) {
            var i = 180 * t / 40075017,
                e = i / Math.cos(Math.PI / 180 * this.lat);
            return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
        },
        clone: function() {
            return new M(this.lat, this.lng, this.alt)
        }
    };
    var di = {
            latLngToPoint: function(t, i) {
                var e = this.projection.project(t),
                    n = this.scale(i);
                return this.transformation._transform(e, n)
            },
            pointToLatLng: function(t, i) {
                var e = this.scale(i),
                    n = this.transformation.untransform(t, e);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            unproject: function(t) {
                return this.projection.unproject(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
                if (this.infinite) return null;
                var i = this.projection.bounds,
                    e = this.scale(t);
                return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
            },
            infinite: !1,
            wrapLatLng: function(t) {
                var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
                return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
            },
            wrapLatLngBounds: function(t) {
                var i = t.getCenter(),
                    e = this.wrapLatLng(i),
                    n = i.lat - e.lat,
                    o = i.lng - e.lng;
                if (0 === n && 0 === o) return t;
                var s = t.getSouthWest(),
                    r = t.getNorthEast();
                return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o))
            }
        },
        pi = i({}, di, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, i) {
                var e = Math.PI / 180,
                    n = t.lat * e,
                    o = i.lat * e,
                    s = Math.sin((i.lat - t.lat) * e / 2),
                    r = Math.sin((i.lng - t.lng) * e / 2),
                    a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                    h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h
            }
        }),
        mi = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var i = Math.PI / 180,
                    e = this.MAX_LATITUDE,
                    n = Math.max(Math.min(e, t.lat), -e),
                    o = Math.sin(n * i);
                return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function(t) {
                var i = 180 / Math.PI;
                return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
            },
            bounds: function() {
                var t = 6378137 * Math.PI;
                return new P([-t, -t], [t, t])
            }()
        };
    S.prototype = {
        transform: function(t, i) {
            return this._transform(t.clone(), i)
        },
        _transform: function(t, i) {
            return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
        },
        untransform: function(t, i) {
            return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
        }
    };
    var fi, gi, vi, yi = i({}, pi, {
            code: "EPSG:3857",
            projection: mi,
            transformation: function() {
                var t = .5 / (Math.PI * mi.R);
                return Z(t, .5, -t, .5)
            }()
        }),
        xi = i({}, yi, {
            code: "EPSG:900913"
        }),
        wi = document.documentElement.style,
        Pi = "ActiveXObject" in window,
        Li = Pi && !document.addEventListener,
        bi = "msLaunchUri" in navigator && !("documentMode" in document),
        Ti = A("webkit"),
        zi = A("android"),
        Mi = A("android 2") || A("android 3"),
        Ci = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        Si = zi && A("Google") && Ci < 537 && !("AudioNode" in window),
        Zi = !!window.opera,
        Ei = A("chrome"),
        ki = A("gecko") && !Ti && !Zi && !Pi,
        Ai = !Ei && A("safari"),
        Bi = A("phantom"),
        Ii = "OTransition" in wi,
        Oi = 0 === navigator.platform.indexOf("Win"),
        Ri = Pi && "transition" in wi,
        Ni = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !Mi,
        Di = "MozPerspective" in wi,
        ji = !window.L_DISABLE_3D && (Ri || Ni || Di) && !Ii && !Bi,
        Wi = "undefined" != typeof orientation || A("mobile"),
        Hi = Wi && Ti,
        Fi = Wi && Ni,
        Ui = !window.PointerEvent && window.MSPointerEvent,
        Vi = !(!window.PointerEvent && !Ui),
        qi = !window.L_NO_TOUCH && (Vi || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        Gi = Wi && Zi,
        Ki = Wi && ki,
        Yi = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        Xi = !!document.createElement("canvas").getContext,
        Ji = !(!document.createElementNS || !E("svg").createSVGRect),
        $i = !Ji && function() {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (t) {
                return !1
            }
        }(),
        Qi = (Object.freeze || Object)({
            ie: Pi,
            ielt9: Li,
            edge: bi,
            webkit: Ti,
            android: zi,
            android23: Mi,
            androidStock: Si,
            opera: Zi,
            chrome: Ei,
            gecko: ki,
            safari: Ai,
            phantom: Bi,
            opera12: Ii,
            win: Oi,
            ie3d: Ri,
            webkit3d: Ni,
            gecko3d: Di,
            any3d: ji,
            mobile: Wi,
            mobileWebkit: Hi,
            mobileWebkit3d: Fi,
            msPointer: Ui,
            pointer: Vi,
            touch: qi,
            mobileOpera: Gi,
            mobileGecko: Ki,
            retina: Yi,
            canvas: Xi,
            svg: Ji,
            vml: $i
        }),
        te = Ui ? "MSPointerDown" : "pointerdown",
        ie = Ui ? "MSPointerMove" : "pointermove",
        ee = Ui ? "MSPointerUp" : "pointerup",
        ne = Ui ? "MSPointerCancel" : "pointercancel",
        oe = ["INPUT", "SELECT", "OPTION"],
        se = {},
        re = !1,
        ae = 0,
        he = Ui ? "MSPointerDown" : Vi ? "pointerdown" : "touchstart",
        ue = Ui ? "MSPointerUp" : Vi ? "pointerup" : "touchend",
        le = "_leaflet_",
        ce = st(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        _e = st(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        de = "webkitTransition" === _e || "OTransition" === _e ? _e + "End" : "transitionend";
    if ("onselectstart" in document) fi = function() {
        mt(window, "selectstart", Pt)
    }, gi = function() {
        ft(window, "selectstart", Pt)
    };
    else {
        var pe = st(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        fi = function() {
            if (pe) {
                var t = document.documentElement.style;
                vi = t[pe], t[pe] = "none"
            }
        }, gi = function() {
            pe && (document.documentElement.style[pe] = vi, vi = void 0)
        }
    }
    var me, fe, ge, ve = (Object.freeze || Object)({
            TRANSFORM: ce,
            TRANSITION: _e,
            TRANSITION_END: de,
            get: V,
            getStyle: q,
            create: G,
            remove: K,
            empty: Y,
            toFront: X,
            toBack: J,
            hasClass: $,
            addClass: Q,
            removeClass: tt,
            setClass: it,
            getClass: et,
            setOpacity: nt,
            testProp: st,
            setTransform: rt,
            setPosition: at,
            getPosition: ht,
            disableTextSelection: fi,
            enableTextSelection: gi,
            disableImageDrag: ut,
            enableImageDrag: lt,
            preventOutline: ct,
            restoreOutline: _t,
            getSizedParentNode: dt,
            getScale: pt
        }),
        ye = "_leaflet_events",
        xe = Oi && Ei ? 2 * window.devicePixelRatio : ki ? window.devicePixelRatio : 1,
        we = {},
        Pe = (Object.freeze || Object)({
            on: mt,
            off: ft,
            stopPropagation: yt,
            disableScrollPropagation: xt,
            disableClickPropagation: wt,
            preventDefault: Pt,
            stop: Lt,
            getMousePosition: bt,
            getWheelDelta: Tt,
            fakeStop: zt,
            skipped: Mt,
            isExternalTarget: Ct,
            addListener: mt,
            removeListener: ft
        }),
        Le = ci.extend({
            run: function(t, i, e, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = ht(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function() {
                this._animId = f(this._animate, this), this._step()
            },
            _step: function(t) {
                var i = +new Date - this._startTime,
                    e = 1e3 * this._duration;
                i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t, i) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                i && e._round(), at(this._el, e), this.fire("step")
            },
            _complete: function() {
                g(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        be = ci.extend({
            options: {
                crs: yi,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function(t, i) {
                i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = _e && ji && !Gi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), mt(this._proxy, de, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function(t, e, n) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({
                    animate: n.animate
                }, n.zoom), n.pan = i({
                    animate: n.animate,
                    duration: n.duration
                }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
            },
            setZoom: function(t, i) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: i
                }) : (this._zoom = t, this)
            },
            zoomIn: function(t, i) {
                return t = t || (ji ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
            },
            zoomOut: function(t, i) {
                return t = t || (ji ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
            },
            setZoomAround: function(t, i, e) {
                var n = this.getZoomScale(i),
                    o = this.getSize().divideBy(2),
                    s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                    r = this.containerPointToLatLng(o.add(s));
                return this.setView(r, i, {
                    zoom: e
                })
            },
            _getBoundsCenterZoom: function(t, i) {
                i = i || {}, t = t.getBounds ? t.getBounds() : z(t);
                var e = w(i.paddingTopLeft || i.padding || [0, 0]),
                    n = w(i.paddingBottomRight || i.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, e.add(n));
                if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(e).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(r.add(a).divideBy(2).add(s), o),
                    zoom: o
                }
            },
            fitBounds: function(t, i) {
                if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
                var e = this._getBoundsCenterZoom(t, i);
                return this.setView(e.center, e.zoom, i)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, i) {
                return this.setView(t, this._zoom, {
                    pan: i
                })
            },
            panBy: function(t, i) {
                if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
                if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new Le, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                    Q(this._mapPane, "leaflet-pan-anim");
                    var e = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function(t, i, e) {
                function n(t) {
                    var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
                        e = Math.sqrt(i * i + 1) - i;
                    return e < 1e-9 ? -18 : Math.log(e)
                }

                function o(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function s(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }

                function r(t) {
                    return o(t) / s(t)
                }

                function a(t) {
                    return m * (s(w) / s(w + y * t))
                }

                function h(t) {
                    return m * (s(w) * r(w + y * t) - o(w)) / x
                }

                function u(t) {
                    return 1 - Math.pow(1 - t, 1.5)
                }

                function l() {
                    var e = (Date.now() - P) / b,
                        n = u(e) * L;
                    e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), {
                        flyTo: !0
                    })) : this._move(t, i)._moveEnd(!0)
                }
                if (!1 === (e = e || {}).animate || !ji) return this.setView(t, i, e);
                this._stop();
                var c = this.project(this.getCenter()),
                    _ = this.project(t),
                    d = this.getSize(),
                    p = this._zoom;
                t = C(t), i = void 0 === i ? p : i;
                var m = Math.max(d.x, d.y),
                    g = m * this.getZoomScale(p, i),
                    v = _.distanceTo(c) || 1,
                    y = 1.42,
                    x = y * y,
                    w = n(0),
                    P = Date.now(),
                    L = (n(1) - w) / y,
                    b = e.duration ? 1e3 * e.duration : 1e3 * L * .8;
                return this._moveStart(!0, e.noMoveStart), l.call(this), this
            },
            flyToBounds: function(t, i) {
                var e = this._getBoundsCenterZoom(t, i);
                return this.flyTo(e.center, e.zoom, i)
            },
            setMaxBounds: function(t) {
                return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
                var i = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
                var i = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, i) {
                this._enforcingBounds = !0;
                var e = this.getCenter(),
                    n = this._limitCenter(e, this._zoom, z(t));
                return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = i({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var n = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var o = this.getSize(),
                    s = n.divideBy(2).round(),
                    r = o.divideBy(2).round(),
                    a = s.subtract(r);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: n,
                    newSize: o
                })) : this
            },
            stop: function() {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function(t) {
                if (t = this._locateOptions = i({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var n = e(this._handleGeolocationResponse, this),
                    o = e(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var i = t.code,
                    e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: i,
                    message: "Geolocation error: " + e + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var i = new M(t.coords.latitude, t.coords.longitude),
                    e = i.toBounds(2 * t.coords.accuracy),
                    n = this._locateOptions;
                if (n.setView) {
                    var o = this.getBoundsZoom(e);
                    this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                }
                var s = {
                    latlng: i,
                    bounds: e,
                    timestamp: t.timestamp
                };
                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                this.fire("locationfound", s)
            },
            addHandler: function(t, i) {
                if (!i) return this;
                var e = this[t] = new i(this);
                return this._handlers.push(e), this.options[t] && e.enable(), this
            },
            remove: function() {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), K(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (g(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
                var t;
                for (t in this._layers) this._layers[t].remove();
                for (t in this._panes) K(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function(t, i) {
                var e = G("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
                return t && (this._panes[t] = e), e
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds();
                return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function() {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, i, e) {
                t = z(t), e = w(e || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(e),
                    u = b(this.project(a, n), this.project(r, n)).getSize(),
                    l = ji ? this.options.zoomSnap : 1,
                    c = h.x / u.x,
                    _ = h.y / u.y,
                    d = i ? Math.max(c, _) : Math.min(c, _);
                return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
            },
            getSize: function() {
                return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function(t, i) {
                var e = this._getTopLeftPoint(t, i);
                return new P(e, e.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t, i) {
                var e = this.options.crs;
                return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
            },
            getScaleZoom: function(t, i) {
                var e = this.options.crs;
                i = void 0 === i ? this._zoom : i;
                var n = e.zoom(t * e.scale(i));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function(t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i)
            },
            unproject: function(t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i)
            },
            layerPointToLatLng: function(t) {
                var i = w(t).add(this.getPixelOrigin());
                return this.unproject(i)
            },
            latLngToLayerPoint: function(t) {
                return this.project(C(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
                return this.options.crs.wrapLatLng(C(t))
            },
            wrapLatLngBounds: function(t) {
                return this.options.crs.wrapLatLngBounds(z(t))
            },
            distance: function(t, i) {
                return this.options.crs.distance(C(t), C(i))
            },
            containerPointToLayerPoint: function(t) {
                return w(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return w(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var i = this.containerPointToLayerPoint(w(t));
                return this.layerPointToLatLng(i)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return bt(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var i = this._container = V(t);
                if (!i) throw new Error("Map container not found.");
                if (i._leaflet_id) throw new Error("Map container is already initialized.");
                mt(i, "scroll", this._onScroll, this), this._containerId = n(i)
            },
            _initLayout: function() {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && ji, Q(t, "leaflet-container" + (qi ? " leaflet-touch" : "") + (Yi ? " leaflet-retina" : "") + (Li ? " leaflet-oldie" : "") + (Ai ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var i = q(t, "position");
                "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), at(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Q(t.markerPane, "leaflet-zoom-hide"), Q(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, i) {
                at(this._mapPane, new x(0, 0));
                var e = !this._loaded;
                this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                var n = this._zoom !== i;
                this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
            },
            _moveStart: function(t, i) {
                return t && this.fire("zoomstart"), i || this.fire("movestart"), this
            },
            _move: function(t, i, e) {
                void 0 === i && (i = this._zoom);
                var n = this._zoom !== i;
                return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
            },
            _moveEnd: function(t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function() {
                return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function(t) {
                at(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
                this._targets = {}, this._targets[n(this._container)] = this;
                var i = t ? ft : mt;
                i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), ji && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function() {
                g(this._resizeRequest), this._resizeRequest = f(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function() {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, i) {
                for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
                    if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
                        a = !0;
                        break
                    }
                    if (e && e.listens(i, !0)) {
                        if (s && !Ct(r, t)) break;
                        if (o.push(e), s) break
                    }
                    if (r === this._container) break;
                    r = r.parentNode
                }
                return o.length || a || s || !Ct(r, t) || (o = [this]), o
            },
            _handleDOMEvent: function(t) {
                if (this._loaded && !Mt(t)) {
                    var i = t.type;
                    "mousedown" !== i && "keypress" !== i || ct(t.target || t.srcElement), this._fireDOMEvent(t, i)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function(t, e, n) {
                if ("click" === t.type) {
                    var o = i({}, t);
                    o.type = "preclick", this._fireDOMEvent(o, o.type, n)
                }
                if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                    var s = n[0];
                    "contextmenu" === e && s.listens(e, !0) && Pt(t);
                    var r = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var a = s.getLatLng && (!s._radius || s._radius <= 10);
                        r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                    }
                    for (var h = 0; h < n.length; h++)
                        if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return
                }
            },
            _draggableMoved: function(t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
                for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
            },
            whenReady: function(t, i) {
                return this._loaded ? t.call(i || this, {
                    target: this
                }) : this.on("load", t, i), this
            },
            _getMapPanePos: function() {
                return ht(this._mapPane) || new x(0, 0)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, i) {
                return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, i) {
                var e = this.getSize()._divideBy(2);
                return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return this.project(t, i)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function(t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, i, e) {
                if (!e) return t;
                var n = this.project(t, i),
                    o = this.getSize().divideBy(2),
                    s = new P(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, e, i);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
            },
            _limitOffset: function(t, i) {
                if (!i) return t;
                var e = this.getPixelBounds(),
                    n = new P(e.min.add(t), e.max.add(t));
                return t.add(this._getBoundsOffset(n, i))
            },
            _getBoundsOffset: function(t, i, e) {
                var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max);
                return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
            },
            _rebound: function(t, i) {
                return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
            },
            _limitZoom: function(t) {
                var i = this.getMinZoom(),
                    e = this.getMaxZoom(),
                    n = ji ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                tt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, i) {
                var e = this._getCenterOffset(t)._trunc();
                return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
            },
            _createAnimProxy: function() {
                var t = this._proxy = G("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                    var i = ce,
                        e = this._proxy.style[i];
                    rt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function() {
                    var t = this.getCenter(),
                        i = this.getZoom();
                    rt(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function() {
                K(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function(t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, i, e) {
                if (this._animatingZoom) return !0;
                if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(i),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function() {
                    this._moveStart(!0, !1)._animateZoom(t, i, !0)
                }, this), !0)
            },
            _animateZoom: function(t, i, n, o) {
                this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, Q(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: i,
                    noUpdate: o
                }), setTimeout(e(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom && (this._mapPane && tt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function() {
                    this._moveEnd(!0)
                }, this))
            }
        }),
        Te = v.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                l(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var i = this._map;
                return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this.remove(), this._map = t;
                var i = this._container = this.onAdd(t),
                    e = this.getPosition(),
                    n = t._controlCorners[e];
                return Q(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this
            },
            remove: function() {
                return this._map ? (K(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
            },
            _refocusOnMap: function(t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
            }
        }),
        ze = function(t) {
            return new Te(t)
        };
    be.include({
        addControl: function(t) {
            return t.addTo(this), this
        },
        removeControl: function(t) {
            return t.remove(), this
        },
        _initControlPos: function() {
            function t(t, o) {
                var s = e + t + " " + e + o;
                i[t + o] = G("div", s, n)
            }
            var i = this._controlCorners = {},
                e = "leaflet-",
                n = this._controlContainer = G("div", e + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners) K(this._controlCorners[t]);
            K(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var Me = Te.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function(t, i, e, n) {
                    return e < n ? -1 : n < e ? 1 : 0
                }
            },
            initialize: function(t, i, e) {
                l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;
                for (var n in t) this._addLayer(t[n], n);
                for (n in i) this._addLayer(i[n], n, !0)
            },
            onAdd: function(t) {
                this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function(t) {
                return Te.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
            },
            onRemove: function() {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, i) {
                return this._addLayer(t, i), this._map ? this._update() : this
            },
            addOverlay: function(t, i) {
                return this._addLayer(t, i, !0), this._map ? this._update() : this
            },
            removeLayer: function(t) {
                t.off("add remove", this._onLayerChange, this);
                var i = this._getLayer(n(t));
                return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
            },
            expand: function() {
                Q(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._form.clientHeight ? (Q(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : tt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
            },
            collapse: function() {
                return tt(this._container, "leaflet-control-layers-expanded"), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    i = this._container = G("div", t),
                    e = this.options.collapsed;
                i.setAttribute("aria-haspopup", !0), wt(i), xt(i);
                var n = this._form = G("form", t + "-list");
                e && (this._map.on("click", this.collapse, this), zi || mt(i, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = G("a", t + "-toggle", i);
                o.href = "#", o.title = "Layers", qi ? (mt(o, "click", Lt), mt(o, "click", this.expand, this)) : mt(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = G("div", t + "-base", n), this._separator = G("div", t + "-separator", n), this._overlaysList = G("div", t + "-overlays", n), i.appendChild(n)
            },
            _getLayer: function(t) {
                for (var i = 0; i < this._layers.length; i++)
                    if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i]
            },
            _addLayer: function(t, i, n) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                    layer: t,
                    name: i,
                    overlay: n
                }), this.options.sortLayers && this._layers.sort(e(function(t, i) {
                    return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
                }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
            },
            _update: function() {
                if (!this._container) return this;
                Y(this._baseLayersList), Y(this._overlaysList), this._layerControlInputs = [];
                var t, i, e, n, o = 0;
                for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
            },
            _onLayerChange: function(t) {
                this._handlingClick || this._update();
                var i = this._getLayer(n(t.target)),
                    e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                e && this._map.fire(e, i)
            },
            _createRadioElement: function(t, i) {
                var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div");
                return n.innerHTML = e, n.firstChild
            },
            _addItem: function(t) {
                var i, e = document.createElement("label"),
                    o = this._map.hasLayer(t.layer);
                t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), mt(i, "click", this._onInputClick, this);
                var s = document.createElement("span");
                s.innerHTML = " " + t.name;
                var r = document.createElement("div");
                return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
            },
            _onInputClick: function() {
                var t, i, e = this._layerControlInputs,
                    n = [],
                    o = [];
                this._handlingClick = !0;
                for (var s = e.length - 1; s >= 0; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _checkDisabledLayers: function() {
                for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
            },
            _expandIfNotCollapsed: function() {
                return this._map && !this.options.collapsed && this.expand(), this
            },
            _expand: function() {
                return this.expand()
            },
            _collapse: function() {
                return this.collapse()
            }
        }),
        Ce = Te.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var i = "leaflet-control-zoom",
                    e = G("div", i + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function() {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function() {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function(t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function(t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function(t, i, e, n, o) {
                var s = G("a", e, n);
                return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), wt(s), mt(s, "click", Lt), mt(s, "click", o, this), mt(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function() {
                var t = this._map,
                    i = "leaflet-disabled";
                tt(this._zoomInButton, i), tt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && Q(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && Q(this._zoomInButton, i)
            }
        });
    be.mergeOptions({
        zoomControl: !0
    }), be.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Ce, this.addControl(this.zoomControl))
    });
    var Se = Te.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function(t) {
                var i = G("div", "leaflet-control-scale"),
                    e = this.options;
                return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, i, e) {
                t.metric && (this._mScale = G("div", i, e)), t.imperial && (this._iScale = G("div", i, e))
            },
            _update: function() {
                var t = this._map,
                    i = t.getSize().y / 2,
                    e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
                this._updateScales(e)
            },
            _updateScales: function(t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function(t) {
                var i = this._getRoundNum(t),
                    e = i < 1e3 ? i + " m" : i / 1e3 + " km";
                this._updateScale(this._mScale, e, i / t)
            },
            _updateImperial: function(t) {
                var i, e, n, o = 3.2808399 * t;
                o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
            },
            _updateScale: function(t, i, e) {
                t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
            },
            _getRoundNum: function(t) {
                var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                    e = t / i;
                return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
            }
        }),
        Ze = Te.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                l(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                t.attributionControl = this, this._container = G("div", "leaflet-control-attribution"), wt(this._container);
                for (var i in t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
            },
            removeAttribution: function(t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var i in this._attributions) this._attributions[i] && t.push(i);
                    var e = [];
                    this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
                }
            }
        });
    be.mergeOptions({
        attributionControl: !0
    }), be.addInitHook(function() {
        this.options.attributionControl && (new Ze).addTo(this)
    });
    Te.Layers = Me, Te.Zoom = Ce, Te.Scale = Se, Te.Attribution = Ze, ze.layers = function(t, i, e) {
        return new Me(t, i, e)
    }, ze.zoom = function(t) {
        return new Ce(t)
    }, ze.scale = function(t) {
        return new Se(t)
    }, ze.attribution = function(t) {
        return new Ze(t)
    };
    var Ee = v.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
        },
        disable: function() {
            return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
        },
        enabled: function() {
            return !!this._enabled
        }
    });
    Ee.addTo = function(t, i) {
        return t.addHandler(i, this), this
    };
    var ke, Ae = {
            Events: li
        },
        Be = qi ? "touchstart mousedown" : "mousedown",
        Ie = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        Oe = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        Re = ci.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function(t, i, e, n) {
                l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
            },
            enable: function() {
                this._enabled || (mt(this._dragStartTarget, Be, this._onDown, this), this._enabled = !0)
            },
            disable: function() {
                this._enabled && (Re._dragging === this && this.finishDrag(), ft(this._dragStartTarget, Be, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function(t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !$(this._element, "leaflet-zoom-anim") && !(Re._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Re._dragging = this, this._preventOutline && ct(this._element), ut(), fi(), this._moving)))) {
                    this.fire("down");
                    var i = t.touches ? t.touches[0] : t,
                        e = dt(this._element);
                    this._startPoint = new x(i.clientX, i.clientY), this._parentScale = pt(e), mt(document, Oe[t.type], this._onMove, this), mt(document, Ie[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && t.touches.length > 1) this._moved = !0;
                    else {
                        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                            e = new x(i.clientX, i.clientY)._subtract(this._startPoint);
                        (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Pt(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ht(this._element).subtract(e), Q(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Q(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function() {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), at(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function(t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function() {
                tt(document.body, "leaflet-dragging"), this._lastTarget && (tt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                for (var t in Oe) ft(document, Oe[t], this._onMove, this), ft(document, Ie[t], this._onUp, this);
                lt(), gi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, Re._dragging = !1
            }
        }),
        Ne = (Object.freeze || Object)({
            simplify: Zt,
            pointToSegmentDistance: Et,
            closestPointOnSegment: function(t, i, e) {
                return Dt(t, i, e)
            },
            clipSegment: It,
            _getEdgeIntersection: Ot,
            _getBitCode: Rt,
            _sqClosestPointOnSegment: Dt,
            isFlat: jt,
            _flat: Wt
        }),
        De = (Object.freeze || Object)({
            clipPolygon: Ht
        }),
        je = {
            project: function(t) {
                return new x(t.lng, t.lat)
            },
            unproject: function(t) {
                return new M(t.y, t.x)
            },
            bounds: new P([-180, -90], [180, 90])
        },
        We = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
                var i = Math.PI / 180,
                    e = this.R,
                    n = t.lat * i,
                    o = this.R_MINOR / e,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n)
            },
            unproject: function(t) {
                for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
                return new M(a * e, t.x * e / n)
            }
        },
        He = (Object.freeze || Object)({
            LonLat: je,
            Mercator: We,
            SphericalMercator: mi
        }),
        Fe = i({}, pi, {
            code: "EPSG:3395",
            projection: We,
            transformation: function() {
                var t = .5 / (Math.PI * We.R);
                return Z(t, .5, -t, .5)
            }()
        }),
        Ue = i({}, pi, {
            code: "EPSG:4326",
            projection: je,
            transformation: Z(1 / 180, 1, -1 / 180, .5)
        }),
        Ve = i({}, di, {
            projection: je,
            transformation: Z(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t) / Math.LN2
            },
            distance: function(t, i) {
                var e = i.lng - t.lng,
                    n = i.lat - t.lat;
                return Math.sqrt(e * e + n * n)
            },
            infinite: !0
        });
    di.Earth = pi, di.EPSG3395 = Fe, di.EPSG3857 = yi, di.EPSG900913 = xi, di.EPSG4326 = Ue, di.Simple = Ve;
    var qe = ci.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this), this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[n(t)] = this, this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[n(t)], this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var i = t.target;
            if (i.hasLayer(this)) {
                if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                    var e = this.getEvents();
                    i.on(e, this), this.once("remove", function() {
                        i.off(e, this)
                    }, this)
                }
                this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    be.include({
        addLayer: function(t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var i = n(t);
            return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
        },
        removeLayer: function(t) {
            var i = n(t);
            return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        },
        hasLayer: function(t) {
            return !!t && n(t) in this._layers
        },
        eachLayer: function(t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        },
        _addLayers: function(t) {
            for (var i = 0, e = (t = t ? oi(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            var i = n(t);
            this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t = 1 / 0,
                i = -1 / 0,
                e = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
            }
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Ge = qe.extend({
            initialize: function(t, i) {
                l(this, i), this._layers = {};
                var e, n;
                if (t)
                    for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
            },
            addLayer: function(t) {
                var i = this.getLayerId(t);
                return this._layers[i] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var i = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
            },
            hasLayer: function(t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this)
            },
            invoke: function(t) {
                var i, e, n = Array.prototype.slice.call(arguments, 1);
                for (i in this._layers)(e = this._layers[i])[t] && e[t].apply(e, n);
                return this
            },
            onAdd: function(t) {
                this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t)
            },
            eachLayer: function(t, i) {
                for (var e in this._layers) t.call(i, this._layers[e]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                return this.eachLayer(t.push, t), t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return n(t)
            }
        }),
        Ke = Ge.extend({
            addLayer: function(t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Ge.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ge.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new T;
                for (var i in this._layers) {
                    var e = this._layers[i];
                    t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
                }
                return t
            }
        }),
        Ye = v.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function(t) {
                l(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, i) {
                var e = this._getIconUrl(t);
                if (!e) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, i) {
                var e = this.options,
                    n = e[i + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = w(n),
                    s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function(t, i) {
                return i = i || document.createElement("img"), i.src = t, i
            },
            _getIconUrl: function(t) {
                return Yi && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        Xe = Ye.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                return Xe.imagePath || (Xe.imagePath = this._detectIconPath()), (this.options.imagePath || Xe.imagePath) + Ye.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
                var t = G("div", "leaflet-default-icon-path", document.body),
                    i = q(t, "background-image") || q(t, "backgroundImage");
                return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        }),
        Je = Ee.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new Re(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), Q(t, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && tt(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function(t) {
                var i = this._marker,
                    e = i._map,
                    n = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    s = ht(i._icon),
                    r = e.getPixelBounds(),
                    a = e.getPixelOrigin(),
                    h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                if (!h.contains(s)) {
                    var u = w((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                    e.panBy(u, {
                        animate: !1
                    }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), at(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function() {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function(t) {
                this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)))
            },
            _onDrag: function(t) {
                var i = this._marker,
                    e = i._shadow,
                    n = ht(i._icon),
                    o = i._map.layerPointToLatLng(n);
                e && at(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function(t) {
                g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        $e = qe.extend({
            options: {
                icon: new Xe,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function(t, i) {
                l(this, i), this._latlng = C(t)
            },
            onAdd: function(t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function(t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function() {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                var i = this._latlng;
                return this._latlng = C(t), this.update(), this.fire("move", {
                    oldLatLng: i,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update()
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function() {
                return this._icon
            },
            update: function() {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options,
                    i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    e = t.icon.createIcon(this._icon),
                    n = !1;
                e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), Q(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (Q(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), K(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && K(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                at(this._icon, t), this._shadow && at(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(i)
            },
            _initInteraction: function() {
                if (this.options.interactive && (Q(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Je)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Je(this), t && this.dragging.enable()
                }
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                var t = this.options.opacity;
                nt(this._icon, t), this._shadow && nt(this._shadow, t)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function() {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function() {
                return this.options.icon.options.tooltipAnchor
            }
        }),
        Qe = qe.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function() {
                this._renderer._removePath(this)
            },
            redraw: function() {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function(t) {
                return l(this, t), this._renderer && this._renderer._updateStyle(this), this
            },
            bringToFront: function() {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function() {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function() {
                return this._path
            },
            _reset: function() {
                this._project(), this._update()
            },
            _clickTolerance: function() {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        }),
        tn = Qe.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function(t, i) {
                l(this, i), this._latlng = C(t), this._radius = this.options.radius
            },
            setLatLng: function(t) {
                return this._latlng = C(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            },
            setStyle: function(t) {
                var i = t && t.radius || this._radius;
                return Qe.prototype.setStyle.call(this, t), this.setRadius(i), this
            },
            _project: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function() {
                var t = this._radius,
                    i = this._radiusY || t,
                    e = this._clickTolerance(),
                    n = [t + e, i + e];
                this._pxBounds = new P(this._point.subtract(n), this._point.add(n))
            },
            _update: function() {
                this._map && this._updatePath()
            },
            _updatePath: function() {
                this._renderer._updateCircle(this)
            },
            _empty: function() {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function(t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        en = tn.extend({
            initialize: function(t, e, n) {
                if ("number" == typeof e && (e = i({}, n, {
                        radius: e
                    })), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: Qe.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng,
                    i = this._latlng.lat,
                    e = this._map,
                    n = e.options.crs;
                if (n.distance === pi.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / pi.R / o,
                        r = e.project([i + s, t]),
                        a = e.project([i - s, t]),
                        h = r.add(a).divideBy(2),
                        u = e.unproject(h).lat,
                        l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
                    (isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
                } else {
                    var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        }),
        nn = Qe.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, i) {
                l(this, i), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var i, e, n = 1 / 0, o = null, s = Dt, r = 0, a = this._parts.length; r < a; r++)
                    for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                        var c = s(t, i = h[u - 1], e = h[u], !0);
                        c < n && (n = c, o = s(t, i, e))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, i, e, n, o, s, r, a = this._rings[0],
                    h = a.length;
                if (!h) return null;
                for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === i) return this._map.layerPointToLatLng(a[0]);
                for (t = 0, n = 0; t < h - 1; t++)
                    if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, i) {
                return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new T, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return jt(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var i = [], e = jt(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
                return i
            },
            _project: function() {
                var t = new P;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                var i = this._clickTolerance(),
                    e = new x(i, i);
                this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t)
            },
            _projectLatlngs: function(t, i, e) {
                var n, o, s = t[0] instanceof M,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                    i.push(o)
                } else
                    for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else {
                        var i, e, n, o, s, r, a, h = this._parts;
                        for (i = 0, n = 0, o = this._rings.length; i < o; i++)
                            for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = It(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
                    }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = Zt(t[e], i)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, i) {
                var e, n, o, s, r, a, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (e = 0, s = this._parts.length; e < s; e++)
                    for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
                        if ((i || 0 !== n) && Et(t, a[o], a[n]) <= h) return !0;
                return !1
            }
        });
    nn._flat = Wt;
    var on = nn.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, i, e, n, o, s, r, a, h, u = this._rings[0],
                    l = u.length;
                if (!l) return null;
                for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
                return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
            },
            _convertLatLngs: function(t) {
                var i = nn.prototype._convertLatLngs.call(this, t),
                    e = i.length;
                return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
            },
            _setLatLngs: function(t) {
                nn.prototype._setLatLngs.call(this, t), jt(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    i = this.options.weight,
                    e = new x(i, i);
                if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, o = 0, s = this._rings.length; o < s; o++)(n = Ht(this._rings[o], t, !0)).length && this._parts.push(n)
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var i, e, n, o, s, r, a, h, u = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
                return u || nn.prototype._containsPoint.call(this, t, !0)
            }
        }),
        sn = Ke.extend({
            initialize: function(t, i) {
                l(this, i), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var i, e, n, o = oi(t) ? t : t.features;
                if (o) {
                    for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = Ft(t, s);
                return r ? (r.feature = Yt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
            },
            resetStyle: function(t) {
                return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
            },
            setStyle: function(t) {
                return this.eachLayer(function(i) {
                    this._setLayerStyle(i, t)
                }, this)
            },
            _setLayerStyle: function(t, i) {
                "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
            }
        }),
        rn = {
            toGeoJSON: function(t) {
                return Kt(this, {
                    type: "Point",
                    coordinates: qt(this.getLatLng(), t)
                })
            }
        };
    $e.include(rn), en.include(rn), tn.include(rn), nn.include({
        toGeoJSON: function(t) {
            var i = !jt(this._latlngs),
                e = Gt(this._latlngs, i ? 1 : 0, !1, t);
            return Kt(this, {
                type: (i ? "Multi" : "") + "LineString",
                coordinates: e
            })
        }
    }), on.include({
        toGeoJSON: function(t) {
            var i = !jt(this._latlngs),
                e = i && !jt(this._latlngs[0]),
                n = Gt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
            return i || (n = [n]), Kt(this, {
                type: (e ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), Ge.include({
        toMultiPoint: function(t) {
            var i = [];
            return this.eachLayer(function(e) {
                i.push(e.toGeoJSON(t).geometry.coordinates)
            }), Kt(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(t) {
            var i = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === i) return this.toMultiPoint(t);
            var e = "GeometryCollection" === i,
                n = [];
            return this.eachLayer(function(i) {
                if (i.toGeoJSON) {
                    var o = i.toGeoJSON(t);
                    if (e) n.push(o.geometry);
                    else {
                        var s = Yt(o);
                        "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                    }
                }
            }), e ? Kt(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    });
    var an = Xt,
        hn = qe.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function(t, i, e) {
                this._url = t, this._bounds = z(i), l(this, e)
            },
            onAdd: function() {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Q(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function() {
                K(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function(t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function() {
                return this._map && X(this._image), this
            },
            bringToBack: function() {
                return this._map && J(this._image), this
            },
            setUrl: function(t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function(t) {
                return this._bounds = z(t), this._map && this._reset(), this
            },
            getEvents: function() {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function() {
                return this._bounds
            },
            getElement: function() {
                return this._image
            },
            _initImage: function() {
                var t = "IMG" === this._url.tagName,
                    i = this._image = t ? this._url : G("img");
                Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), this.options.className && Q(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
            },
            _animateZoom: function(t) {
                var i = this._map.getZoomScale(t.zoom),
                    e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                rt(this._image, e, i)
            },
            _reset: function() {
                var t = this._image,
                    i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    e = i.getSize();
                at(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
            },
            _updateOpacity: function() {
                nt(this._image, this.options.opacity)
            },
            _updateZIndex: function() {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function() {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        un = hn.extend({
            options: {
                autoplay: !0,
                loop: !0
            },
            _initImage: function() {
                var t = "VIDEO" === this._url.tagName,
                    i = this._image = t ? this._url : G("video");
                if (Q(i, "leaflet-image-layer"), this._zoomAnimated && Q(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
                    for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) o.push(n[s].src);
                    this._url = n.length > 0 ? o : [i.src]
                } else {
                    oi(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
                    for (var a = 0; a < this._url.length; a++) {
                        var h = G("source");
                        h.src = this._url[a], i.appendChild(h)
                    }
                }
            }
        }),
        ln = qe.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function(t, i) {
                l(this, t), this._source = i
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && nt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && nt(this._container, 1), this.bringToFront()
            },
            onRemove: function(t) {
                t._fadeAnimated ? (nt(this._container, 0), this._removeTimeout = setTimeout(e(K, void 0, this._container), 200)) : K(this._container)
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && X(this._container), this
            },
            bringToBack: function() {
                return this._map && J(this._container), this
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof i) t.innerHTML = i;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(i)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        i = w(this.options.offset),
                        e = this._getAnchor();
                    this._zoomAnimated ? at(this._container, t.add(e)) : i = i.add(t).add(e);
                    var n = this._containerBottom = -i.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                    this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        }),
        cn = ln.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onAdd: function(t) {
                ln.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof Qe || this._source.on("preclick", yt))
            },
            onRemove: function(t) {
                ln.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof Qe || this._source.off("preclick", yt))
            },
            getEvents: function() {
                var t = ln.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t = "leaflet-popup",
                    i = this._container = G("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    e = this._wrapper = G("div", t + "-content-wrapper", i);
                if (this._contentNode = G("div", t + "-content", e), wt(e), xt(this._contentNode), mt(e, "contextmenu", yt), this._tipContainer = G("div", t + "-tip-container", i), this._tip = G("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var n = this._closeButton = G("a", t + "-close-button", i);
                    n.href = "#close", n.innerHTML = "&#215;", mt(n, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    i = t.style;
                i.width = "", i.whiteSpace = "nowrap";
                var e = t.offsetWidth;
                e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight;
                o && n > o ? (i.height = o + "px", Q(t, "leaflet-popup-scrolled")) : tt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    e = this._getAnchor();
                at(this._container, i.add(e))
            },
            _adjustPan: function() {
                if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                    var t = this._map,
                        i = parseInt(q(this._container, "marginBottom"), 10) || 0,
                        e = this._container.offsetHeight + i,
                        n = this._containerWidth,
                        o = new x(this._containerLeft, -e - this._containerBottom);
                    o._add(ht(this._container));
                    var s = t.layerPointToContainerPoint(o),
                        r = w(this.options.autoPanPadding),
                        a = w(this.options.autoPanPaddingTopLeft || r),
                        h = w(this.options.autoPanPaddingBottomRight || r),
                        u = t.getSize(),
                        l = 0,
                        c = 0;
                    s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(), Lt(t)
            },
            _getAnchor: function() {
                return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    be.mergeOptions({
        closePopupOnClick: !0
    }), be.include({
        openPopup: function(t, i, e) {
            return t instanceof cn || (t = new cn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), qe.include({
        bindPopup: function(t, i) {
            return t instanceof cn ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new cn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function(t, i) {
            if (t instanceof qe || (i = t, t = this), t instanceof Ke)
                for (var e in this._layers) {
                    t = this._layers[e];
                    break
                }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var i = t.layer || t.target;
            this._popup && this._map && (Lt(t), i instanceof Qe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var _n = ln.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            ln.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function(t) {
            ln.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function() {
            var t = ln.prototype.getEvents.call(this);
            return qi && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = G("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var i = this._map,
                e = this._container,
                n = i.latLngToContainerPoint(i.getCenter()),
                o = i.layerPointToContainerPoint(t),
                s = this.options.direction,
                r = e.offsetWidth,
                a = e.offsetHeight,
                h = w(this.options.offset),
                u = this._getAnchor();
            "top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), tt(e, "leaflet-tooltip-right"), tt(e, "leaflet-tooltip-left"), tt(e, "leaflet-tooltip-top"), tt(e, "leaflet-tooltip-bottom"), Q(e, "leaflet-tooltip-" + s), at(e, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t, this._container && nt(this._container, t)
        },
        _animateZoom: function(t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(i)
        },
        _getAnchor: function() {
            return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    be.include({
        openTooltip: function(t, i, e) {
            return t instanceof _n || (t = new _n(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t), this
        }
    }), qe.include({
        bindTooltip: function(t, i) {
            return t instanceof _n ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new _n(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function(t) {
            if (t || !this._tooltipHandlersAdded) {
                var i = t ? "off" : "on",
                    e = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), qi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function(t, i) {
            if (t instanceof qe || (i = t, t = this), t instanceof Ke)
                for (var e in this._layers) {
                    t = this._layers[e];
                    break
                }
            return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (Q(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (tt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var i = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var i, e, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
        }
    });
    var dn = Ye.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                e = this.options;
            if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                var n = w(e.bgPos);
                i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(i, "icon"), i
        },
        createShadow: function() {
            return null
        }
    });
    Ye.Default = Xe;
    var pn = qe.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: Wi,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                l(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), K(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (X(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (J(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof x ? t : new x(t, t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !Li) {
                    nt(this._container, this.options.opacity);
                    var t = +new Date,
                        i = !1,
                        e = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (o.current && o.loaded) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            nt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
                        }
                    }
                    e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: r,
            _initContainer: function() {
                this._container || (this._container = G("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    i = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (K(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || ((n = this._levels[t] = {}).el = G("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
                }
            },
            _onUpdateLevel: r,
            _onRemoveLevel: r,
            _onCreateLevel: r,
            _pruneTiles: function() {
                if (this._map) {
                    var t, i, e = this._map.getZoom();
                    if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
                    else {
                        for (t in this._tiles)(i = this._tiles[t]).retain = i.current;
                        for (t in this._tiles)
                            if ((i = this._tiles[t]).current && !i.active) {
                                var n = i.coords;
                                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                            }
                        for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) K(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function(t, i, e, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(i / 2),
                    r = e - 1,
                    a = new x(+o, +s);
                a.z = +r;
                var h = this._tileCoordsToKey(a),
                    u = this._tiles[h];
                return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n))
            },
            _retainChildren: function(t, i, e, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * i; s < 2 * i + 2; s++) {
                        var r = new x(o, s);
                        r.z = e + 1;
                        var a = this._tileCoordsToKey(r),
                            h = this._tiles[a];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
                    }
            },
            _resetView: function(t) {
                var i = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var i = this.options;
                return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
            },
            _setView: function(t, i, e, n) {
                var o = this._clampZoom(Math.round(i));
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
            },
            _setZoomTransforms: function(t, i) {
                for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
            },
            _setZoomTransform: function(t, i, e) {
                var n = this._map.getZoomScale(e, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
                ji ? rt(t.el, o, n) : at(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map,
                    i = t.options.crs,
                    e = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var i = this._map,
                    e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                    n = i.getZoomScale(e, this._tileZoom),
                    o = i.project(t, this._tileZoom).floor(),
                    s = i.getSize().divideBy(2 * n);
                return new P(o.subtract(s), o.add(s))
            },
            _update: function(t) {
                var i = this._map;
                if (i) {
                    var e = this._clampZoom(i.getZoom());
                    if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a = this.options.keepBuffer,
                            h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var u in this._tiles) {
                            var l = this._tiles[u].coords;
                            l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1)
                        }
                        if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);
                        else {
                            for (var c = o.min.y; c <= o.max.y; c++)
                                for (var _ = o.min.x; _ <= o.max.x; _++) {
                                    var d = new x(_, c);
                                    if (d.z = this._tileZoom, this._isValidTile(d)) {
                                        var p = this._tiles[this._tileCoordsToKey(d)];
                                        p ? p.current = !0 : r.push(d)
                                    }
                                }
                            if (r.sort(function(t, i) {
                                    return t.distanceTo(s) - i.distanceTo(s)
                                }), 0 !== r.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var i = this._map.options.crs;
                if (!i.infinite) {
                    var e = this._globalTileRange;
                    if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return z(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var i = this._map,
                    e = this.getTileSize(),
                    n = t.scaleBy(e),
                    o = n.add(e);
                return [i.unproject(n, t.z), i.unproject(o, t.z)]
            },
            _tileCoordsToBounds: function(t) {
                var i = this._tileCoordsToNwSe(t),
                    e = new T(i[0], i[1]);
                return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var i = t.split(":"),
                    e = new x(+i[0], +i[1]);
                return e.z = +i[2], e
            },
            _removeTile: function(t) {
                var i = this._tiles[t];
                i && (K(i.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: i.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                Q(t, "leaflet-tile");
                var i = this.getTileSize();
                t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, Li && this.options.opacity < 1 && nt(t, this.options.opacity), zi && !Mi && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, i) {
                var n = this._getTilePos(t),
                    o = this._tileCoordsToKey(t),
                    s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), at(s, n), this._tiles[o] = {
                    el: s,
                    coords: t,
                    current: !0
                }, i.appendChild(s), this.fire("tileloadstart", {
                    tile: s,
                    coords: t
                })
            },
            _tileReady: function(t, i, n) {
                i && this.fire("tileerror", {
                    error: i,
                    tile: n,
                    coords: t
                });
                var o = this._tileCoordsToKey(t);
                (n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (nt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (Q(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: n.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Li || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)))
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
                return i.z = t.z, i
            },
            _pxBoundsToTileRange: function(t) {
                var i = this.getTileSize();
                return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        }),
        mn = pn.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function(t, i) {
                this._url = t, (i = l(this, i)).detectRetina && Yi && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), zi || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, i) {
                return this._url = t, i || this.redraw(), this
            },
            createTile: function(t, i) {
                var n = document.createElement("img");
                return mt(n, "load", e(this._tileOnLoad, this, i, n)), mt(n, "error", e(this._tileOnError, this, i, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
            },
            getTileUrl: function(t) {
                var e = {
                    r: Yi ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var n = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = n), e["-y"] = n
                }
                return _(this._url, i(e, this.options))
            },
            _tileOnLoad: function(t, i) {
                Li ? setTimeout(e(t, this, null, i), 0) : t(null, i)
            },
            _tileOnError: function(t, i, e) {
                var n = this.options.errorTileUrl;
                n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    i = this.options.maxZoom,
                    e = this.options.zoomReverse,
                    n = this.options.zoomOffset;
                return e && (t = i - t), t + n
            },
            _getSubdomain: function(t) {
                var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[i]
            },
            _abortLoading: function() {
                var t, i;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = si, K(i), delete this._tiles[t]))
            },
            _removeTile: function(t) {
                var i = this._tiles[t];
                if (i) return Si || i.el.setAttribute("src", si), pn.prototype._removeTile.call(this, t)
            },
            _tileReady: function(t, i, e) {
                if (this._map && (!e || e.getAttribute("src") !== si)) return pn.prototype._tileReady.call(this, t, i, e)
            }
        }),
        fn = mn.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var n = i({}, this.defaultWmsParams);
                for (var o in e) o in this.options || (n[o] = e[o]);
                var s = (e = l(this, e)).detectRetina && Yi ? 2 : 1,
                    r = this.getTileSize();
                n.width = r.x * s, n.height = r.y * s, this.wmsParams = n
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[i] = this._crs.code, mn.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var i = this._tileCoordsToNwSe(t),
                    e = this._crs,
                    n = b(e.project(i[0]), e.project(i[1])),
                    o = n.min,
                    s = n.max,
                    r = (this._wmsVersion >= 1.3 && this._crs === Ue ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                    a = mn.prototype.getTileUrl.call(this, t);
                return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
            },
            setParams: function(t, e) {
                return i(this.wmsParams, t), e || this.redraw(), this
            }
        });
    mn.WMS = fn, Jt.wms = function(t, i) {
        return new fn(t, i)
    };
    var gn = qe.extend({
            options: {
                padding: .1,
                tolerance: 0
            },
            initialize: function(t) {
                l(this, t), n(this), this._layers = this._layers || {}
            },
            onAdd: function() {
                this._container || (this._initContainer(), this._zoomAnimated && Q(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
            },
            onRemove: function() {
                this.off("update", this._updatePaths, this), this._destroyContainer()
            },
            getEvents: function() {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, i) {
                var e = this._map.getZoomScale(i, this._zoom),
                    n = ht(this._container),
                    o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, i),
                    r = this._map.project(t, i).subtract(s),
                    a = o.multiplyBy(-e).add(n).add(o).subtract(r);
                ji ? rt(this._container, a, e) : at(this._container, a)
            },
            _reset: function() {
                this._update(), this._updateTransform(this._center, this._zoom);
                for (var t in this._layers) this._layers[t]._reset()
            },
            _onZoomEnd: function() {
                for (var t in this._layers) this._layers[t]._project()
            },
            _updatePaths: function() {
                for (var t in this._layers) this._layers[t]._update()
            },
            _update: function() {
                var t = this.options.padding,
                    i = this._map.getSize(),
                    e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
                this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
        }),
        vn = gn.extend({
            getEvents: function() {
                var t = gn.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function() {
                this._postponeUpdatePaths = !0
            },
            onAdd: function() {
                gn.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function() {
                var t = this._container = document.createElement("canvas");
                mt(t, "mousemove", o(this._onMouseMove, 32, this), this), mt(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), mt(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function() {
                g(this._redrawRequest), delete this._ctx, K(this._container), ft(this._container), delete this._container
            },
            _updatePaths: function() {
                if (!this._postponeUpdatePaths) {
                    this._redrawBounds = null;
                    for (var t in this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    this._drawnLayers = {}, gn.prototype._update.call(this);
                    var t = this._bounds,
                        i = this._container,
                        e = t.getSize(),
                        n = Yi ? 2 : 1;
                    at(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Yi && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function() {
                gn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function(t) {
                this._updateDashArray(t), this._layers[n(t)] = t;
                var i = t._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function(t) {
                this._requestRedraw(t)
            },
            _removePath: function(t) {
                var i = t._order,
                    e = i.next,
                    o = i.prev;
                e ? e.prev = o : this._drawLast = o, o ? o.next = e : this._drawFirst = e, delete this._drawnLayers[t._leaflet_id], delete t._order, delete this._layers[n(t)], this._requestRedraw(t)
            },
            _updatePath: function(t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function(t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
                if ("string" == typeof t.options.dashArray) {
                    var i, e = t.options.dashArray.split(/[, ]+/),
                        n = [];
                    for (i = 0; i < e.length; i++) n.push(Number(e[i]));
                    t.options._dashArray = n
                } else t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function(t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this))
            },
            _extendRedrawBounds: function(t) {
                if (t._pxBounds) {
                    var i = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new P, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
                }
            },
            _redraw: function() {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function() {
                var t = this._redrawBounds;
                if (t) {
                    var i = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function() {
                var t, i = this._redrawBounds;
                if (this._ctx.save(), i) {
                    var e = i.getSize();
                    this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function(t, i) {
                if (this._drawing) {
                    var e, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
                            for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            i && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function(t) {
                if (this._drawing && !t._empty()) {
                    var i = t._point,
                        e = this._ctx,
                        n = Math.max(Math.round(t._radius), 1),
                        o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                    this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t)
                }
            },
            _fillStroke: function(t, i) {
                var e = i.options;
                e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
            },
            _onClick: function(t) {
                for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
                e && (zt(t), this._fireEvent([e], t))
            },
            _onMouseMove: function(t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var i = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, i)
                }
            },
            _handleMouseOut: function(t) {
                var i = this._hoveredLayer;
                i && (tt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function(t, i) {
                for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (Q(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function(t, i, e) {
                this._map._fireDOMEvent(i, e || i.type, t)
            },
            _bringToFront: function(t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t))
            },
            _bringToBack: function(t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
            }
        }),
        yn = function() {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
            } catch (t) {
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        xn = {
            _initContainer: function() {
                this._container = G("div", "leaflet-vml-container")
            },
            _update: function() {
                this._map._animatingZoom || (gn.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function(t) {
                var i = t._container = yn("shape");
                Q(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = yn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function(t) {
                var i = t._container;
                this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
            },
            _removePath: function(t) {
                var i = t._container;
                K(i), t.removeInteractiveTarget(i), delete this._layers[n(t)]
            },
            _updateStyle: function(t) {
                var i = t._stroke,
                    e = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = yn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = oi(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = yn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
            },
            _updateCircle: function(t) {
                var i = t._point.round(),
                    e = Math.round(t._radius),
                    n = Math.round(t._radiusY || e);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
            },
            _setPath: function(t, i) {
                t._path.v = i
            },
            _bringToFront: function(t) {
                X(t._container)
            },
            _bringToBack: function(t) {
                J(t._container)
            }
        },
        wn = $i ? yn : E,
        Pn = gn.extend({
            getEvents: function() {
                var t = gn.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function() {
                this._container = wn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = wn("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function() {
                K(this._container), ft(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function() {
                this._update()
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    gn.prototype._update.call(this);
                    var t = this._bounds,
                        i = t.getSize(),
                        e = this._container;
                    this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), at(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function(t) {
                var i = t._path = wn("path");
                t.options.className && Q(i, t.options.className), t.options.interactive && Q(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
            },
            _addPath: function(t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
                K(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
            },
            _updatePath: function(t) {
                t._project(), t._update()
            },
            _updateStyle: function(t) {
                var i = t._path,
                    e = t.options;
                i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, i) {
                this._setPath(t, k(t._parts, i))
            },
            _updateCircle: function(t) {
                var i = t._point,
                    e = Math.max(Math.round(t._radius), 1),
                    n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function(t, i) {
                t._path.setAttribute("d", i)
            },
            _bringToFront: function(t) {
                X(t._path)
            },
            _bringToBack: function(t) {
                J(t._path)
            }
        });
    $i && Pn.include(xn), be.include({
        getRenderer: function(t) {
            var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var i = this._paneRenderers[t];
            return void 0 === i && (i = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = i), i
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && $t(t) || Qt(t)
        }
    });
    var Ln = on.extend({
        initialize: function(t, i) {
            on.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    Pn.create = wn, Pn.pointsToPath = k, sn.geometryToLayer = Ft, sn.coordsToLatLng = Ut, sn.coordsToLatLngs = Vt, sn.latLngToCoords = qt, sn.latLngsToCoords = Gt, sn.getFeature = Kt, sn.asFeature = Yt, be.mergeOptions({
        boxZoom: !0
    });
    var bn = Ee.extend({
        initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            mt(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            ft(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            K(this._pane), delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), fi(), ut(), this._startPoint = this._map.mouseEventToContainerPoint(t), mt(document, {
                contextmenu: Lt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = G("div", "leaflet-zoom-box", this._container), Q(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var i = new P(this._point, this._startPoint),
                e = i.getSize();
            at(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
        },
        _finish: function() {
            this._moved && (K(this._box), tt(this._container, "leaflet-crosshair")), gi(), lt(), ft(document, {
                contextmenu: Lt,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);
                var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(i).fire("boxzoomend", {
                    boxZoomBounds: i
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    be.addInitHook("addHandler", "boxZoom", bn), be.mergeOptions({
        doubleClickZoom: !0
    });
    var Tn = Ee.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var i = this._map,
                e = i.getZoom(),
                n = i.options.zoomDelta,
                o = t.originalEvent.shiftKey ? e - n : e + n;
            "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
        }
    });
    be.addInitHook("addHandler", "doubleClickZoom", Tn), be.mergeOptions({
        dragging: !0,
        inertia: !Mi,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var zn = Ee.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new Re(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            Q(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function() {
            tt(this._map._container, "leaflet-grab"), tt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var i = z(this._map.options.maxBounds);
                this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function(t) {
            if (this._map.options.inertia) {
                var i = this._lastTime = +new Date,
                    e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(e), this._times.push(i), this._prunePositions(i)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
                i = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, i) {
            return t - (t - i) * this._viscosity
        },
        _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    i = this._offsetLimit;
                t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth,
                i = Math.round(t / 2),
                e = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - i + e) % t + i - e,
                s = (n + i + e) % t - i - e,
                r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function(t) {
            var i = this._map,
                e = i.options,
                n = !e.inertia || this._times.length < 2;
            if (i.fire("dragend", t), n) i.fire("moveend");
            else {
                this._prunePositions(+new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                    s = (this._lastTime - this._times[0]) / 1e3,
                    r = e.easeLinearity,
                    a = o.multiplyBy(r / s),
                    h = a.distanceTo([0, 0]),
                    u = Math.min(e.inertiaMaxSpeed, h),
                    l = a.multiplyBy(u / h),
                    c = u / (e.inertiaDeceleration * r),
                    _ = l.multiplyBy(-c / 2).round();
                _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function() {
                    i.panBy(_, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : i.fire("moveend")
            }
        }
    });
    be.addInitHook("addHandler", "dragging", zn), be.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var Mn = Ee.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), mt(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(), ft(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var t = document.body,
                    i = document.documentElement,
                    e = t.scrollTop || i.scrollTop,
                    n = t.scrollLeft || i.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, e)
            }
        },
        _onFocus: function() {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            var i, e, n = this._panKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
            for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
            for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
            for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            var i, e, n = this._zoomKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
            for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
        },
        _addHooks: function() {
            mt(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            ft(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var i, e = t.keyCode,
                    n = this._map;
                if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                else {
                    if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                Lt(t)
            }
        }
    });
    be.addInitHook("addHandler", "keyboard", Mn), be.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var Cn = Ee.extend({
        addHooks: function() {
            mt(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function() {
            ft(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var i = Tt(t),
                n = this._map.options.wheelDebounceTime;
            this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var o = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Lt(t)
        },
        _performZoom: function() {
            var t = this._map,
                i = t.getZoom(),
                e = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = e ? Math.ceil(o / e) * e : o,
                r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
        }
    });
    be.addInitHook("addHandler", "scrollWheelZoom", Cn), be.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var Sn = Ee.extend({
        addHooks: function() {
            mt(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            ft(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (Pt(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0],
                    n = i.target;
                this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && Q(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function() {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), this._simulateEvent("mousedown", i), mt(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function(t) {
            if (clearTimeout(this._holdTimeout), ft(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0],
                    e = i.target;
                e && e.tagName && "a" === e.tagName.toLowerCase() && tt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
            }
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var i = t.touches[0];
            this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
        },
        _simulateEvent: function(t, i) {
            var e = document.createEvent("MouseEvents");
            e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
        }
    });
    qi && !Vi && be.addInitHook("addHandler", "tap", Sn), be.mergeOptions({
        touchZoom: qi && !Mi,
        bounceAtZoomLimits: !0
    });
    var Zn = Ee.extend({
        addHooks: function() {
            Q(this._map._container, "leaflet-touch-zoom"), mt(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            tt(this._map._container, "leaflet-touch-zoom"), ft(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var e = i.mouseEventToContainerPoint(t.touches[0]),
                    n = i.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), mt(document, "touchmove", this._onTouchMove, this), mt(document, "touchend", this._onTouchEnd, this), Pt(t)
            }
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = this._map,
                    n = i.mouseEventToContainerPoint(t.touches[0]),
                    o = i.mouseEventToContainerPoint(t.touches[1]),
                    s = n.distanceTo(o) / this._startDist;
                if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === s) return
                } else {
                    var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === s && 0 === r.x && 0 === r.y) return;
                    this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                }
                this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);
                var a = e(i._move, i, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = f(a, this, !0), Pt(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), ft(document, "touchmove", this._onTouchMove), ft(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    be.addInitHook("addHandler", "touchZoom", Zn), be.BoxZoom = bn, be.DoubleClickZoom = Tn, be.Drag = zn, be.Keyboard = Mn, be.ScrollWheelZoom = Cn, be.Tap = Sn, be.TouchZoom = Zn, Object.freeze = ti, t.version = "1.3.4+HEAD.0e566b2", t.Control = Te, t.control = ze, t.Browser = Qi, t.Evented = ci, t.Mixin = Ae, t.Util = ui, t.Class = v, t.Handler = Ee, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = Pe, t.DomUtil = ve, t.PosAnimation = Le, t.Draggable = Re, t.LineUtil = Ne, t.PolyUtil = De, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = S, t.transformation = Z, t.Projection = He, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = di, t.GeoJSON = sn, t.geoJSON = Xt, t.geoJson = an, t.Layer = qe, t.LayerGroup = Ge, t.layerGroup = function(t, i) {
        return new Ge(t, i)
    }, t.FeatureGroup = Ke, t.featureGroup = function(t) {
        return new Ke(t)
    }, t.ImageOverlay = hn, t.imageOverlay = function(t, i, e) {
        return new hn(t, i, e)
    }, t.VideoOverlay = un, t.videoOverlay = function(t, i, e) {
        return new un(t, i, e)
    }, t.DivOverlay = ln, t.Popup = cn, t.popup = function(t, i) {
        return new cn(t, i)
    }, t.Tooltip = _n, t.tooltip = function(t, i) {
        return new _n(t, i)
    }, t.Icon = Ye, t.icon = function(t) {
        return new Ye(t)
    }, t.DivIcon = dn, t.divIcon = function(t) {
        return new dn(t)
    }, t.Marker = $e, t.marker = function(t, i) {
        return new $e(t, i)
    }, t.TileLayer = mn, t.tileLayer = Jt, t.GridLayer = pn, t.gridLayer = function(t) {
        return new pn(t)
    }, t.SVG = Pn, t.svg = Qt, t.Renderer = gn, t.Canvas = vn, t.canvas = $t, t.Path = Qe, t.CircleMarker = tn, t.circleMarker = function(t, i) {
        return new tn(t, i)
    }, t.Circle = en, t.circle = function(t, i, e) {
        return new en(t, i, e)
    }, t.Polyline = nn, t.polyline = function(t, i) {
        return new nn(t, i)
    }, t.Polygon = on, t.polygon = function(t, i) {
        return new on(t, i)
    }, t.Rectangle = Ln, t.rectangle = function(t, i) {
        return new Ln(t, i)
    }, t.Map = be, t.map = function(t, i) {
        return new be(t, i)
    };
    var En = window.L;
    t.noConflict = function() {
        return window.L = En, this
    }, window.L = t
});
// End leaflet map