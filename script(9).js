"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8774], {
    27743: function(e, t, n) {
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function r() {
            return (r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                var o = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                        ;
                    return e
                }(e, t);
                if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value
                }
            }
            ).apply(this, arguments)
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && s(e, t)
        }
        function s(e, t) {
            return (s = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function a(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = c(e);
                if (t) {
                    var i = c(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else
                    n = r.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === o(t) || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw TypeError("Derived constructors may only return object or undefined");
                    return l(e)
                }(this, n)
            }
        }
        function l(e) {
            if (void 0 === e)
                throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function c(e) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function d(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
        }
        function f(e, t, n) {
            return t && u(e.prototype, t),
            n && u(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = n(22765)
          , p = n(1109)
          , v = n(61563)
          , m = function(e) {
            for (var t = 0; ; t++)
                if (!(e = e.previousSibling))
                    return t
        }
          , g = function(e) {
            var t = e.assignedSlot || e.parentNode;
            return t && 11 == t.nodeType ? t.host : t
        }
          , y = null
          , b = function(e, t, n) {
            var o = y || (y = document.createRange());
            return o.setEnd(e, null == n ? e.nodeValue.length : n),
            o.setStart(e, t || 0),
            o
        }
          , k = function(e, t, n, o) {
            return n && (S(e, t, n, o, -1) || S(e, t, n, o, 1))
        }
          , w = /^(img|br|input|textarea|hr)$/i;
        function S(e, t, n, o, r) {
            for (; ; ) {
                if (e == n && t == o)
                    return !0;
                if (t == (r < 0 ? 0 : D(e))) {
                    var i = e.parentNode;
                    if (!i || 1 != i.nodeType || function(e) {
                        for (var t, n = e; n && !(t = n.pmViewDesc); n = n.parentNode)
                            ;
                        return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
                    }(e) || w.test(e.nodeName) || "false" == e.contentEditable)
                        return !1;
                    t = m(e) + (r < 0 ? 0 : 1),
                    e = i
                } else {
                    if (1 != e.nodeType || "false" == (e = e.childNodes[t + (r < 0 ? -1 : 0)]).contentEditable)
                        return !1;
                    t = r < 0 ? D(e) : 0
                }
            }
        }
        function D(e) {
            return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
        }
        var N = function(e) {
            return e.focusNode && k(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        };
        function O(e, t) {
            var n = document.createEvent("Event");
            return n.initEvent("keydown", !0, !0),
            n.keyCode = e,
            n.key = n.code = t,
            n
        }
        var C = "undefined" != typeof navigator ? navigator : null
          , M = "undefined" != typeof document ? document : null
          , x = C && C.userAgent || ""
          , T = /Edge\/(\d+)/.exec(x)
          , E = /MSIE \d/.exec(x)
          , P = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(x)
          , A = !!(E || P || T)
          , V = E ? document.documentMode : P ? +P[1] : T ? +T[1] : 0
          , R = !A && /gecko\/(\d+)/i.test(x);
        R && (/Firefox\/(\d+)/.exec(x) || [0, 0])[1];
        var B = !A && /Chrome\/(\d+)/.exec(x)
          , F = !!B
          , z = B ? +B[1] : 0
          , I = !A && !!C && /Apple Computer/.test(C.vendor)
          , L = I && (/Mobile\/\w+/.test(x) || !!C && C.maxTouchPoints > 2)
          , q = L || !!C && /Mac/.test(C.platform)
          , K = /Android \d/.test(x)
          , _ = !!M && "webkitFontSmoothing"in M.documentElement.style
          , $ = _ ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
        function W(e, t) {
            return "number" == typeof e ? e : e[t]
        }
        function H(e, t, n) {
            for (var o = e.someProp("scrollThreshold") || 0, r = e.someProp("scrollMargin") || 5, i = e.dom.ownerDocument, s = n || e.dom; s; s = g(s))
                if (1 == s.nodeType) {
                    var a = s
                      , l = a == i.body
                      , c = l ? {
                        left: 0,
                        right: i.documentElement.clientWidth,
                        top: 0,
                        bottom: i.documentElement.clientHeight
                    } : function(e) {
                        var t = e.getBoundingClientRect()
                          , n = t.width / e.offsetWidth || 1
                          , o = t.height / e.offsetHeight || 1;
                        return {
                            left: t.left,
                            right: t.left + e.clientWidth * n,
                            top: t.top,
                            bottom: t.top + e.clientHeight * o
                        }
                    }(a)
                      , d = 0
                      , u = 0;
                    if (t.top < c.top + W(o, "top") ? u = -(c.top - t.top + W(r, "top")) : t.bottom > c.bottom - W(o, "bottom") && (u = t.bottom - c.bottom + W(r, "bottom")),
                    t.left < c.left + W(o, "left") ? d = -(c.left - t.left + W(r, "left")) : t.right > c.right - W(o, "right") && (d = t.right - c.right + W(r, "right")),
                    d || u) {
                        if (l)
                            i.defaultView.scrollBy(d, u);
                        else {
                            var f = a.scrollLeft
                              , h = a.scrollTop;
                            u && (a.scrollTop += u),
                            d && (a.scrollLeft += d);
                            var p = a.scrollLeft - f
                              , v = a.scrollTop - h;
                            t = {
                                left: t.left - p,
                                top: t.top - v,
                                right: t.right - p,
                                bottom: t.bottom - v
                            }
                        }
                    }
                    if (l)
                        break
                }
        }
        function j(e) {
            for (var t = [], n = e.ownerDocument, o = e; o && (t.push({
                dom: o,
                top: o.scrollTop,
                left: o.scrollLeft
            }),
            e != n); o = g(o))
                ;
            return t
        }
        function G(e, t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n]
                  , r = o.dom
                  , i = o.top
                  , s = o.left;
                r.scrollTop != i + t && (r.scrollTop = i + t),
                r.scrollLeft != s && (r.scrollLeft = s)
            }
        }
        var U = null;
        function X(e, t) {
            return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1
        }
        function Y(e, t) {
            var n = e.getClientRects();
            return n.length ? n[t < 0 ? 0 : n.length - 1] : e.getBoundingClientRect()
        }
        var J = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
        function Q(e, t, n) {
            var o = e.docView.domFromPos(t, n < 0 ? -1 : 1)
              , r = o.node
              , i = o.offset
              , s = o.atom
              , a = _ || R;
            if (3 == r.nodeType) {
                if (a && (J.test(r.nodeValue) || (n < 0 ? !i : i == r.nodeValue.length))) {
                    var l = Y(b(r, i, i), n);
                    if (R && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
                        var c = Y(b(r, i - 1, i - 1), -1);
                        if (c.top == l.top) {
                            var d = Y(b(r, i, i + 1), -1);
                            if (d.top != l.top)
                                return Z(d, d.left < c.left)
                        }
                    }
                    return l
                }
                var u = i
                  , f = i
                  , h = n < 0 ? 1 : -1;
                return n < 0 && !i ? (f++,
                h = -1) : n >= 0 && i == r.nodeValue.length ? (u--,
                h = 1) : n < 0 ? u-- : f++,
                Z(Y(b(r, u, f), 1), h < 0)
            }
            if (!e.state.doc.resolve(t - (s || 0)).parent.inlineContent) {
                if (null == s && i && (n < 0 || i == D(r))) {
                    var p = r.childNodes[i - 1];
                    if (1 == p.nodeType)
                        return ee(p.getBoundingClientRect(), !1)
                }
                if (null == s && i < D(r)) {
                    var v = r.childNodes[i];
                    if (1 == v.nodeType)
                        return ee(v.getBoundingClientRect(), !0)
                }
                return ee(r.getBoundingClientRect(), n >= 0)
            }
            if (null == s && i && (n < 0 || i == D(r))) {
                var m = r.childNodes[i - 1]
                  , g = 3 == m.nodeType ? b(m, D(m) - (a ? 0 : 1)) : 1 != m.nodeType || "BR" == m.nodeName && m.nextSibling ? null : m;
                if (g)
                    return Z(Y(g, 1), !1)
            }
            if (null == s && i < D(r)) {
                for (var y = r.childNodes[i]; y.pmViewDesc && y.pmViewDesc.ignoreForCoords; )
                    y = y.nextSibling;
                var k = y ? 3 == y.nodeType ? b(y, 0, a ? 0 : 1) : 1 == y.nodeType ? y : null : null;
                if (k)
                    return Z(Y(k, -1), !0)
            }
            return Z(Y(3 == r.nodeType ? b(r) : r, -n), n >= 0)
        }
        function Z(e, t) {
            if (0 == e.width)
                return e;
            var n = t ? e.left : e.right;
            return {
                top: e.top,
                bottom: e.bottom,
                left: n,
                right: n
            }
        }
        function ee(e, t) {
            if (0 == e.height)
                return e;
            var n = t ? e.top : e.bottom;
            return {
                top: n,
                bottom: n,
                left: e.left,
                right: e.right
            }
        }
        function et(e, t, n) {
            var o = e.state
              , r = e.root.activeElement;
            o != t && e.updateState(t),
            r != e.dom && e.focus();
            try {
                return n()
            } finally {
                o != t && e.updateState(o),
                r != e.dom && r && r.focus()
            }
        }
        var en = /[\u0590-\u08ac]/
          , eo = null
          , er = null
          , ei = !1
          , es = function() {
            function e(t, n, o, r) {
                d(this, e),
                this.parent = t,
                this.children = n,
                this.dom = o,
                this.contentDOM = r,
                this.dirty = 0,
                o.pmViewDesc = this
            }
            return f(e, [{
                key: "matchesWidget",
                value: function(e) {
                    return !1
                }
            }, {
                key: "matchesMark",
                value: function(e) {
                    return !1
                }
            }, {
                key: "matchesNode",
                value: function(e, t, n) {
                    return !1
                }
            }, {
                key: "matchesHack",
                value: function(e) {
                    return !1
                }
            }, {
                key: "parseRule",
                value: function() {
                    return null
                }
            }, {
                key: "stopEvent",
                value: function(e) {
                    return !1
                }
            }, {
                key: "size",
                get: function() {
                    for (var e = 0, t = 0; t < this.children.length; t++)
                        e += this.children[t].size;
                    return e
                }
            }, {
                key: "border",
                get: function() {
                    return 0
                }
            }, {
                key: "destroy",
                value: function() {
                    this.parent = void 0,
                    this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
                    for (var e = 0; e < this.children.length; e++)
                        this.children[e].destroy()
                }
            }, {
                key: "posBeforeChild",
                value: function(e) {
                    for (var t = 0, n = this.posAtStart; ; t++) {
                        var o = this.children[t];
                        if (o == e)
                            return n;
                        n += o.size
                    }
                }
            }, {
                key: "posBefore",
                get: function() {
                    return this.parent.posBeforeChild(this)
                }
            }, {
                key: "posAtStart",
                get: function() {
                    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
                }
            }, {
                key: "posAfter",
                get: function() {
                    return this.posBefore + this.size
                }
            }, {
                key: "posAtEnd",
                get: function() {
                    return this.posAtStart + this.size - 2 * this.border
                }
            }, {
                key: "localPosFromDOM",
                value: function(e, t, n) {
                    if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
                        if (n < 0) {
                            if (e == this.contentDOM)
                                o = e.childNodes[t - 1];
                            else {
                                for (; e.parentNode != this.contentDOM; )
                                    e = e.parentNode;
                                o = e.previousSibling
                            }
                            for (; o && !((r = o.pmViewDesc) && r.parent == this); )
                                o = o.previousSibling;
                            return o ? this.posBeforeChild(r) + r.size : this.posAtStart
                        }
                        if (e == this.contentDOM)
                            i = e.childNodes[t];
                        else {
                            for (; e.parentNode != this.contentDOM; )
                                e = e.parentNode;
                            i = e.nextSibling
                        }
                        for (; i && !((s = i.pmViewDesc) && s.parent == this); )
                            i = i.nextSibling;
                        return i ? this.posBeforeChild(s) : this.posAtEnd
                    }
                    if (e == this.dom && this.contentDOM)
                        a = t > m(this.contentDOM);
                    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
                        a = 2 & e.compareDocumentPosition(this.contentDOM);
                    else if (this.dom.firstChild) {
                        if (0 == t)
                            for (var o, r, i, s, a, l = e; ; l = l.parentNode) {
                                if (l == this.dom) {
                                    a = !1;
                                    break
                                }
                                if (l.previousSibling)
                                    break
                            }
                        if (null == a && t == e.childNodes.length)
                            for (var c = e; ; c = c.parentNode) {
                                if (c == this.dom) {
                                    a = !0;
                                    break
                                }
                                if (c.nextSibling)
                                    break
                            }
                    }
                    return (null == a ? n > 0 : a) ? this.posAtEnd : this.posAtStart
                }
            }, {
                key: "nearestDesc",
                value: function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = !0, o = e; o; o = o.parentNode) {
                        var r = this.getDesc(o)
                          , i = void 0;
                        if (r && (!t || r.node)) {
                            if (!n || !(i = r.nodeDOM) || (1 == i.nodeType ? i.contains(1 == e.nodeType ? e : e.parentNode) : i == e))
                                return r;
                            n = !1
                        }
                    }
                }
            }, {
                key: "getDesc",
                value: function(e) {
                    for (var t = e.pmViewDesc, n = t; n; n = n.parent)
                        if (n == this)
                            return t
                }
            }, {
                key: "posFromDOM",
                value: function(e, t, n) {
                    for (var o = e; o; o = o.parentNode) {
                        var r = this.getDesc(o);
                        if (r)
                            return r.localPosFromDOM(e, t, n)
                    }
                    return -1
                }
            }, {
                key: "descAt",
                value: function(e) {
                    for (var t = 0, n = 0; t < this.children.length; t++) {
                        var o = this.children[t]
                          , r = n + o.size;
                        if (n == e && r != n) {
                            for (; !o.border && o.children.length; )
                                o = o.children[0];
                            return o
                        }
                        if (e < r)
                            return o.descAt(e - n - o.border);
                        n = r
                    }
                }
            }, {
                key: "domFromPos",
                value: function(e, t) {
                    if (!this.contentDOM)
                        return {
                            node: this.dom,
                            offset: 0,
                            atom: e + 1
                        };
                    for (var n = 0, o = 0, r = 0; n < this.children.length; n++) {
                        var i = this.children[n]
                          , s = r + i.size;
                        if (s > e || i instanceof eh) {
                            o = e - r;
                            break
                        }
                        r = s
                    }
                    if (o)
                        return this.children[n].domFromPos(o - this.children[n].border, t);
                    for (; n && !(a = this.children[n - 1]).size && a instanceof ea && a.side >= 0; n--)
                        ;
                    if (t <= 0) {
                        for (var a, l, c = !0; (l = n ? this.children[n - 1] : null) && l.dom.parentNode != this.contentDOM; n--,
                        c = !1)
                            ;
                        return l && t && c && !l.border && !l.domAtom ? l.domFromPos(l.size, t) : {
                            node: this.contentDOM,
                            offset: l ? m(l.dom) + 1 : 0
                        }
                    }
                    for (var d, u = !0; (d = n < this.children.length ? this.children[n] : null) && d.dom.parentNode != this.contentDOM; n++,
                    u = !1)
                        ;
                    return d && u && !d.border && !d.domAtom ? d.domFromPos(0, t) : {
                        node: this.contentDOM,
                        offset: d ? m(d.dom) : this.contentDOM.childNodes.length
                    }
                }
            }, {
                key: "parseRange",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (0 == this.children.length)
                        return {
                            node: this.contentDOM,
                            from: e,
                            to: t,
                            fromOffset: 0,
                            toOffset: this.contentDOM.childNodes.length
                        };
                    for (var o = -1, r = -1, i = n, s = 0; ; s++) {
                        var a = this.children[s]
                          , l = i + a.size;
                        if (-1 == o && e <= l) {
                            var c = i + a.border;
                            if (e >= c && t <= l - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
                                return a.parseRange(e, t, c);
                            e = i;
                            for (var d = s; d > 0; d--) {
                                var u = this.children[d - 1];
                                if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(1)) {
                                    o = m(u.dom) + 1;
                                    break
                                }
                                e -= u.size
                            }
                            -1 == o && (o = 0)
                        }
                        if (o > -1 && (l > t || s == this.children.length - 1)) {
                            t = l;
                            for (var f = s + 1; f < this.children.length; f++) {
                                var h = this.children[f];
                                if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
                                    r = m(h.dom);
                                    break
                                }
                                t += h.size
                            }
                            -1 == r && (r = this.contentDOM.childNodes.length);
                            break
                        }
                        i = l
                    }
                    return {
                        node: this.contentDOM,
                        from: e,
                        to: t,
                        fromOffset: o,
                        toOffset: r
                    }
                }
            }, {
                key: "emptyChildAt",
                value: function(e) {
                    if (this.border || !this.contentDOM || !this.children.length)
                        return !1;
                    var t = this.children[e < 0 ? 0 : this.children.length - 1];
                    return 0 == t.size || t.emptyChildAt(e)
                }
            }, {
                key: "domAfterPos",
                value: function(e) {
                    var t = this.domFromPos(e, 0)
                      , n = t.node
                      , o = t.offset;
                    if (1 != n.nodeType || o == n.childNodes.length)
                        throw RangeError("No node after pos " + e);
                    return n.childNodes[o]
                }
            }, {
                key: "setSelection",
                value: function(e, t, n) {
                    for (var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = Math.min(e, t), i = Math.max(e, t), s = 0, a = 0; s < this.children.length; s++) {
                        var l = this.children[s]
                          , c = a + l.size;
                        if (r > a && i < c)
                            return l.setSelection(e - a - l.border, t - a - l.border, n, o);
                        a = c
                    }
                    var d = this.domFromPos(e, e ? -1 : 1)
                      , u = t == e ? d : this.domFromPos(t, t ? -1 : 1)
                      , f = n.getSelection()
                      , h = !1;
                    if ((R || I) && e == t) {
                        var p = d
                          , v = p.node
                          , g = p.offset;
                        if (3 == v.nodeType) {
                            if ((h = !!(g && "\n" == v.nodeValue[g - 1])) && g == v.nodeValue.length)
                                for (var y, b = v; b; b = b.parentNode) {
                                    if (y = b.nextSibling) {
                                        "BR" == y.nodeName && (d = u = {
                                            node: y.parentNode,
                                            offset: m(y) + 1
                                        });
                                        break
                                    }
                                    var w = b.pmViewDesc;
                                    if (w && w.node && w.node.isBlock)
                                        break
                                }
                        } else {
                            var S = v.childNodes[g - 1];
                            h = S && ("BR" == S.nodeName || "false" == S.contentEditable)
                        }
                    }
                    if (R && f.focusNode && f.focusNode != u.node && 1 == f.focusNode.nodeType) {
                        var D = f.focusNode.childNodes[f.focusOffset];
                        D && "false" == D.contentEditable && (o = !0)
                    }
                    if (!(!(o || h && I) && k(d.node, d.offset, f.anchorNode, f.anchorOffset) && k(u.node, u.offset, f.focusNode, f.focusOffset))) {
                        var N = !1;
                        if ((f.extend || e == t) && !h) {
                            f.collapse(d.node, d.offset);
                            try {
                                e != t && f.extend(u.node, u.offset),
                                N = !0
                            } catch (e) {}
                        }
                        if (!N) {
                            if (e > t) {
                                var O = d;
                                d = u,
                                u = O
                            }
                            var C = document.createRange();
                            C.setEnd(u.node, u.offset),
                            C.setStart(d.node, d.offset),
                            f.removeAllRanges(),
                            f.addRange(C)
                        }
                    }
                }
            }, {
                key: "ignoreMutation",
                value: function(e) {
                    return !this.contentDOM && "selection" != e.type
                }
            }, {
                key: "contentLost",
                get: function() {
                    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
                }
            }, {
                key: "markDirty",
                value: function(e, t) {
                    for (var n = 0, o = 0; o < this.children.length; o++) {
                        var r = this.children[o]
                          , i = n + r.size;
                        if (n == i ? e <= i && t >= n : e < i && t > n) {
                            var s = n + r.border
                              , a = i - r.border;
                            if (e >= s && t <= a) {
                                this.dirty = e == n || t == i ? 2 : 1,
                                e == s && t == a && (r.contentLost || r.dom.parentNode != this.contentDOM) ? r.dirty = 3 : r.markDirty(e - s, t - s);
                                return
                            }
                            r.dirty = r.dom != r.contentDOM || r.dom.parentNode != this.contentDOM || r.children.length ? 3 : 2
                        }
                        n = i
                    }
                    this.dirty = 2
                }
            }, {
                key: "markParentsDirty",
                value: function() {
                    for (var e = 1, t = this.parent; t; t = t.parent,
                    e++) {
                        var n = 1 == e ? 2 : 1;
                        t.dirty < n && (t.dirty = n)
                    }
                }
            }, {
                key: "domAtom",
                get: function() {
                    return !1
                }
            }, {
                key: "ignoreForCoords",
                get: function() {
                    return !1
                }
            }]),
            e
        }()
          , ea = function(e) {
            i(n, e);
            var t = a(n);
            function n(e, o, r, i) {
                d(this, n);
                var s, a, c = o.type.toDOM;
                if ("function" == typeof c && (c = c(r, function() {
                    return a ? a.parent ? a.parent.posBeforeChild(a) : void 0 : i
                })),
                !o.type.spec.raw) {
                    if (1 != c.nodeType) {
                        var u = document.createElement("span");
                        u.appendChild(c),
                        c = u
                    }
                    c.contentEditable = "false",
                    c.classList.add("ProseMirror-widget")
                }
                return (s = t.call(this, e, [], c, null)).widget = o,
                s.widget = o,
                a = l(s),
                s
            }
            return f(n, [{
                key: "matchesWidget",
                value: function(e) {
                    return 0 == this.dirty && e.type.eq(this.widget.type)
                }
            }, {
                key: "parseRule",
                value: function() {
                    return {
                        ignore: !0
                    }
                }
            }, {
                key: "stopEvent",
                value: function(e) {
                    var t = this.widget.spec.stopEvent;
                    return !!t && t(e)
                }
            }, {
                key: "ignoreMutation",
                value: function(e) {
                    return "selection" != e.type || this.widget.spec.ignoreSelection
                }
            }, {
                key: "destroy",
                value: function() {
                    this.widget.type.destroy(this.dom),
                    r(c(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "domAtom",
                get: function() {
                    return !0
                }
            }, {
                key: "side",
                get: function() {
                    return this.widget.type.side
                }
            }]),
            n
        }(es)
          , el = function(e) {
            i(n, e);
            var t = a(n);
            function n(e, o, r, i) {
                var s;
                return d(this, n),
                (s = t.call(this, e, [], o, null)).textDOM = r,
                s.text = i,
                s
            }
            return f(n, [{
                key: "size",
                get: function() {
                    return this.text.length
                }
            }, {
                key: "localPosFromDOM",
                value: function(e, t) {
                    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
                }
            }, {
                key: "domFromPos",
                value: function(e) {
                    return {
                        node: this.textDOM,
                        offset: e
                    }
                }
            }, {
                key: "ignoreMutation",
                value: function(e) {
                    return "characterData" === e.type && e.target.nodeValue == e.oldValue
                }
            }]),
            n
        }(es)
          , ec = function(e) {
            i(n, e);
            var t = a(n);
            function n(e, o, r, i) {
                var s;
                return d(this, n),
                (s = t.call(this, e, [], r, i)).mark = o,
                s
            }
            return f(n, [{
                key: "parseRule",
                value: function() {
                    return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
                        mark: this.mark.type.name,
                        attrs: this.mark.attrs,
                        contentElement: this.contentDOM || void 0
                    }
                }
            }, {
                key: "matchesMark",
                value: function(e) {
                    return 3 != this.dirty && this.mark.eq(e)
                }
            }, {
                key: "markDirty",
                value: function(e, t) {
                    if (r(c(n.prototype), "markDirty", this).call(this, e, t),
                    0 != this.dirty) {
                        for (var o = this.parent; !o.node; )
                            o = o.parent;
                        o.dirty < this.dirty && (o.dirty = this.dirty),
                        this.dirty = 0
                    }
                }
            }, {
                key: "slice",
                value: function(e, t, o) {
                    var r = n.create(this.parent, this.mark, !0, o)
                      , i = this.children
                      , s = this.size;
                    t < s && (i = eN(i, t, s, o)),
                    e > 0 && (i = eN(i, 0, e, o));
                    for (var a = 0; a < i.length; a++)
                        i[a].parent = r;
                    return r.children = i,
                    r
                }
            }], [{
                key: "create",
                value: function(e, t, o, r) {
                    var i = r.nodeViews[t.type.name]
                      , s = i && i(t, r, o);
                    return s && s.dom || (s = p.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t, o))),
                    new n(e,t,s.dom,s.contentDOM || s.dom)
                }
            }]),
            n
        }(es)
          , ed = function(e) {
            i(n, e);
            var t = a(n);
            function n(e, o, r, i, s, a, l, c, u) {
                var f;
                return d(this, n),
                (f = t.call(this, e, [], s, a)).node = o,
                f.outerDeco = r,
                f.innerDeco = i,
                f.nodeDOM = l,
                a && f.updateChildren(c, u),
                f
            }
            return f(n, [{
                key: "parseRule",
                value: function() {
                    var e = this;
                    if (this.node.type.spec.reparseInView)
                        return null;
                    var t = {
                        node: this.node.type.name,
                        attrs: this.node.attrs
                    };
                    if ("pre" == this.node.type.whitespace && (t.preserveWhitespace = "full"),
                    this.contentDOM) {
                        if (this.contentLost) {
                            for (var n = this.children.length - 1; n >= 0; n--) {
                                var o = this.children[n];
                                if (this.dom.contains(o.dom.parentNode)) {
                                    t.contentElement = o.dom.parentNode;
                                    break
                                }
                            }
                            t.contentElement || (t.getContent = function() {
                                return p.Fragment.empty
                            }
                            )
                        } else
                            t.contentElement = this.contentDOM
                    } else
                        t.getContent = function() {
                            return e.node.content
                        }
                        ;
                    return t
                }
            }, {
                key: "matchesNode",
                value: function(e, t, n) {
                    return 0 == this.dirty && e.eq(this.node) && ek(t, this.outerDeco) && n.eq(this.innerDeco)
                }
            }, {
                key: "size",
                get: function() {
                    return this.node.nodeSize
                }
            }, {
                key: "border",
                get: function() {
                    return this.node.isLeaf ? 0 : 1
                }
            }, {
                key: "updateChildren",
                value: function(e, t) {
                    var n = this
                      , o = this.node.inlineContent
                      , r = t
                      , i = e.composing ? this.localCompositionInfo(e, t) : null
                      , s = i && i.pos > -1 ? i : null
                      , a = i && i.pos < 0
                      , l = new eS(this,s && s.node,e);
                    (function(e, t, n, o) {
                        var r = t.locals(e)
                          , i = 0;
                        if (0 == r.length) {
                            for (var s = 0; s < e.childCount; s++) {
                                var a = e.child(s);
                                o(a, r, t.forChild(i, a), s),
                                i += a.nodeSize
                            }
                            return
                        }
                        for (var l = 0, c = [], d = null, u = 0; ; ) {
                            if (l < r.length && r[l].to == i) {
                                for (var f = r[l++], h = void 0; l < r.length && r[l].to == i; )
                                    (h || (h = [f])).push(r[l++]);
                                if (h) {
                                    h.sort(eD);
                                    for (var p = 0; p < h.length; p++)
                                        n(h[p], u, !!d)
                                } else
                                    n(f, u, !!d)
                            }
                            var v = void 0
                              , m = void 0;
                            if (d)
                                m = -1,
                                v = d,
                                d = null;
                            else if (u < e.childCount)
                                m = u,
                                v = e.child(u++);
                            else
                                break;
                            for (var g = 0; g < c.length; g++)
                                c[g].to <= i && c.splice(g--, 1);
                            for (; l < r.length && r[l].from <= i && r[l].to > i; )
                                c.push(r[l++]);
                            var y = i + v.nodeSize;
                            if (v.isText) {
                                var b = y;
                                l < r.length && r[l].from < b && (b = r[l].from);
                                for (var k = 0; k < c.length; k++)
                                    c[k].to < b && (b = c[k].to);
                                b < y && (d = v.cut(b - i),
                                v = v.cut(0, b - i),
                                y = b,
                                m = -1)
                            }
                            var w = v.isInline && !v.isLeaf ? c.filter(function(e) {
                                return !e.inline
                            }) : c.slice();
                            o(v, w, t.forChild(i, v), m),
                            i = y
                        }
                    }
                    )(this.node, this.innerDeco, function(t, i, s) {
                        t.spec.marks ? l.syncToMarks(t.spec.marks, o, e) : t.type.side >= 0 && !s && l.syncToMarks(i == n.node.childCount ? p.Mark.none : n.node.child(i).marks, o, e),
                        l.placeWidget(t, e, r)
                    }, function(t, n, s, c) {
                        var d;
                        l.syncToMarks(t.marks, o, e),
                        l.findNodeMatch(t, n, s, c) || a && e.state.selection.from > r && e.state.selection.to < r + t.nodeSize && (d = l.findIndexWithChild(i.node)) > -1 && l.updateNodeAt(t, n, s, d, e) || l.updateNextNode(t, n, s, e, c) || l.addNode(t, n, s, e, r),
                        r += t.nodeSize
                    }),
                    l.syncToMarks([], o, e),
                    this.node.isTextblock && l.addTextblockHacks(),
                    l.destroyRest(),
                    (l.changed || 2 == this.dirty) && (s && this.protectLocalComposition(e, s),
                    function e(t, n, o) {
                        for (var r = t.firstChild, i = !1, s = 0; s < n.length; s++) {
                            var a = n[s]
                              , l = a.dom;
                            if (l.parentNode == t) {
                                for (; l != r; )
                                    r = ew(r),
                                    i = !0;
                                r = r.nextSibling
                            } else
                                i = !0,
                                t.insertBefore(l, r);
                            if (a instanceof ec) {
                                var c = r ? r.previousSibling : t.lastChild;
                                e(a.contentDOM, a.children, o),
                                r = c ? c.nextSibling : t.firstChild
                            }
                        }
                        for (; r; )
                            r = ew(r),
                            i = !0;
                        i && o.trackWrites == t && (o.trackWrites = null)
                    }(this.contentDOM, this.children, e),
                    L && function(e) {
                        if ("UL" == e.nodeName || "OL" == e.nodeName) {
                            var t = e.style.cssText;
                            e.style.cssText = t + "; list-style: square !important",
                            window.getComputedStyle(e).listStyle,
                            e.style.cssText = t
                        }
                    }(this.dom))
                }
            }, {
                key: "localCompositionInfo",
                value: function(e, t) {
                    var n = e.state.selection
                      , o = n.from
                      , r = n.to;
                    if (!(e.state.selection instanceof h.TextSelection) || o < t || r > t + this.node.content.size)
                        return null;
                    var i = e.domSelectionRange()
                      , s = function(e, t) {
                        for (; ; ) {
                            if (3 == e.nodeType)
                                return e;
                            if (1 == e.nodeType && t > 0) {
                                if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType)
                                    return e.childNodes[t];
                                t = D(e = e.childNodes[t - 1])
                            } else {
                                if (1 != e.nodeType || !(t < e.childNodes.length))
                                    return null;
                                e = e.childNodes[t],
                                t = 0
                            }
                        }
                    }(i.focusNode, i.focusOffset);
                    if (!s || !this.dom.contains(s.parentNode))
                        return null;
                    if (!this.node.inlineContent)
                        return {
                            node: s,
                            pos: -1,
                            text: ""
                        };
                    var a = s.nodeValue
                      , l = function(e, t, n, o) {
                        for (var r = 0, i = 0; r < e.childCount && i <= o; ) {
                            var s = e.child(r++)
                              , a = i;
                            if (i += s.nodeSize,
                            s.isText) {
                                for (var l = s.text; r < e.childCount; ) {
                                    var c = e.child(r++);
                                    if (i += c.nodeSize,
                                    !c.isText)
                                        break;
                                    l += c.text
                                }
                                if (i >= n) {
                                    var d = a < o ? l.lastIndexOf(t, o - a - 1) : -1;
                                    if (d >= 0 && d + t.length + a >= n)
                                        return a + d;
                                    if (n == o && l.length >= o + t.length - a && l.slice(o - a, o - a + t.length) == t)
                                        return o
                                }
                            }
                        }
                        return -1
                    }(this.node.content, a, o - t, r - t);
                    return l < 0 ? null : {
                        node: s,
                        pos: l,
                        text: a
                    }
                }
            }, {
                key: "protectLocalComposition",
                value: function(e, t) {
                    var n = t.node
                      , o = t.pos
                      , r = t.text;
                    if (!this.getDesc(n)) {
                        for (var i = n; i.parentNode != this.contentDOM; i = i.parentNode) {
                            for (; i.previousSibling; )
                                i.parentNode.removeChild(i.previousSibling);
                            for (; i.nextSibling; )
                                i.parentNode.removeChild(i.nextSibling);
                            i.pmViewDesc && (i.pmViewDesc = void 0)
                        }
                        var s = new el(this,i,n,r);
                        e.input.compositionNodes.push(s),
                        this.children = eN(this.children, o, o + r.length, e, s)
                    }
                }
            }, {
                key: "update",
                value: function(e, t, n, o) {
                    return !!(3 != this.dirty && e.sameMarkup(this.node)) && (this.updateInner(e, t, n, o),
                    !0)
                }
            }, {
                key: "updateInner",
                value: function(e, t, n, o) {
                    this.updateOuterDeco(t),
                    this.node = e,
                    this.innerDeco = n,
                    this.contentDOM && this.updateChildren(o, this.posAtStart),
                    this.dirty = 0
                }
            }, {
                key: "updateOuterDeco",
                value: function(e) {
                    if (!ek(e, this.outerDeco)) {
                        var t = 1 != this.nodeDOM.nodeType
                          , n = this.dom;
                        this.dom = ey(this.dom, this.nodeDOM, eg(this.outerDeco, this.node, t), eg(e, this.node, t)),
                        this.dom != n && (n.pmViewDesc = void 0,
                        this.dom.pmViewDesc = this),
                        this.outerDeco = e
                    }
                }
            }, {
                key: "selectNode",
                value: function() {
                    1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"),
                    (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0)
                }
            }, {
                key: "deselectNode",
                value: function() {
                    1 == this.nodeDOM.nodeType && this.nodeDOM.classList.remove("ProseMirror-selectednode"),
                    (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable")
                }
            }, {
                key: "domAtom",
                get: function() {
                    return this.node.isAtom
                }
            }], [{
                key: "create",
                value: function(e, t, o, r, i, s) {
                    var a, l = i.nodeViews[t.type.name], c = l && l(t, i, function() {
                        return a ? a.parent ? a.parent.posBeforeChild(a) : void 0 : s
                    }, o, r), d = c && c.dom, u = c && c.contentDOM;
                    if (t.isText) {
                        if (d) {
                            if (3 != d.nodeType)
                                throw RangeError("Text must be rendered as a DOM text node")
                        } else
                            d = document.createTextNode(t.text)
                    } else if (!d) {
                        var f = p.DOMSerializer.renderSpec(document, t.type.spec.toDOM(t));
                        d = f.dom,
                        u = f.contentDOM
                    }
                    u || t.isText || "BR" == d.nodeName || (d.hasAttribute("contenteditable") || (d.contentEditable = "false"),
                    t.type.spec.draggable && (d.draggable = !0));
                    var h = d;
                    return (d = eb(d, o, t),
                    c) ? a = new ep(e,t,o,r,d,u || null,h,c,i,s + 1) : t.isText ? new ef(e,t,o,r,d,h,i) : new n(e,t,o,r,d,u || null,h,i,s + 1)
                }
            }]),
            n
        }(es);
        function eu(e, t, n, o, r) {
            return eb(o, t, e),
            new ed(void 0,e,t,n,o,o,o,r,0)
        }
        var ef = function(e) {
            i(n, e);
            var t = a(n);
            function n(e, o, r, i, s, a, l) {
                return d(this, n),
                t.call(this, e, o, r, i, s, null, a, l, 0)
            }
            return f(n, [{
                key: "parseRule",
                value: function() {
                    for (var e = this.nodeDOM.parentNode; e && e != this.dom && !e.pmIsDeco; )
                        e = e.parentNode;
                    return {
                        skip: e || !0
                    }
                }
            }, {
                key: "update",
                value: function(e, t, n, o) {
                    return !!(3 != this.dirty && (0 == this.dirty || this.inParent()) && e.sameMarkup(this.node)) && (this.updateOuterDeco(t),
                    (0 != this.dirty || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text,
                    o.trackWrites == this.nodeDOM && (o.trackWrites = null)),
                    this.node = e,
                    this.dirty = 0,
                    !0)
                }
            }, {
                key: "inParent",
                value: function() {
                    for (var e = this.parent.contentDOM, t = this.nodeDOM; t; t = t.parentNode)
                        if (t == e)
                            return !0;
                    return !1
                }
            }, {
                key: "domFromPos",
                value: function(e) {
                    return {
                        node: this.nodeDOM,
                        offset: e
                    }
                }
            }, {
                key: "localPosFromDOM",
                value: function(e, t, o) {
                    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : r(c(n.prototype), "localPosFromDOM", this).call(this, e, t, o)
                }
            }, {
                key: "ignoreMutation",
                value: function(e) {
                    return "characterData" != e.type && "selection" != e.type
                }
            }, {
                key: "slice",
                value: function(e, t, o) {
                    var r = this.node.cut(e, t)
                      , i = document.createTextNode(r.text);
                    return new n(this.parent,r,this.outerDeco,this.innerDeco,i,i,o)
                }
            }, {
                key: "markDirty",
                value: function(e, t) {
                    r(c(n.prototype), "markDirty", this).call(this, e, t),
                    this.dom != this.nodeDOM && (0 == e || t == this.nodeDOM.nodeValue.length) && (this.dirty = 3)
                }
            }, {
                key: "domAtom",
                get: function() {
                    return !1
                }
            }]),
            n
        }(ed)
          , eh = function(e) {
            i(n, e);
            var t = a(n);
            function n() {
                return d(this, n),
                t.apply(this, arguments)
            }
            return f(n, [{
                key: "parseRule",
                value: function() {
                    return {
                        ignore: !0
                    }
                }
            }, {
                key: "matchesHack",
                value: function(e) {
                    return 0 == this.dirty && this.dom.nodeName == e
                }
            }, {
                key: "domAtom",
                get: function() {
                    return !0
                }
            }, {
                key: "ignoreForCoords",
                get: function() {
                    return "IMG" == this.dom.nodeName
                }
            }]),
            n
        }(es)
          , ep = function(e) {
            i(n, e);
            var t = a(n);
            function n(e, o, r, i, s, a, l, c, u, f) {
                var h;
                return d(this, n),
                (h = t.call(this, e, o, r, i, s, a, l, u, f)).spec = c,
                h
            }
            return f(n, [{
                key: "update",
                value: function(e, t, o, i) {
                    if (3 == this.dirty)
                        return !1;
                    if (this.spec.update) {
                        var s = this.spec.update(e, t, o);
                        return s && this.updateInner(e, t, o, i),
                        s
                    }
                    return (!!this.contentDOM || !!e.isLeaf) && r(c(n.prototype), "update", this).call(this, e, t, o, i)
                }
            }, {
                key: "selectNode",
                value: function() {
                    this.spec.selectNode ? this.spec.selectNode() : r(c(n.prototype), "selectNode", this).call(this)
                }
            }, {
                key: "deselectNode",
                value: function() {
                    this.spec.deselectNode ? this.spec.deselectNode() : r(c(n.prototype), "deselectNode", this).call(this)
                }
            }, {
                key: "setSelection",
                value: function(e, t, o, i) {
                    this.spec.setSelection ? this.spec.setSelection(e, t, o) : r(c(n.prototype), "setSelection", this).call(this, e, t, o, i)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.spec.destroy && this.spec.destroy(),
                    r(c(n.prototype), "destroy", this).call(this)
                }
            }, {
                key: "stopEvent",
                value: function(e) {
                    return !!this.spec.stopEvent && this.spec.stopEvent(e)
                }
            }, {
                key: "ignoreMutation",
                value: function(e) {
                    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : r(c(n.prototype), "ignoreMutation", this).call(this, e)
                }
            }]),
            n
        }(ed)
          , ev = function(e) {
            e && (this.nodeName = e)
        };
        ev.prototype = Object.create(null);
        var em = [new ev];
        function eg(e, t, n) {
            if (0 == e.length)
                return em;
            for (var o = n ? em[0] : new ev, r = [o], i = 0; i < e.length; i++) {
                var s = e[i].type.attrs;
                if (s)
                    for (var a in s.nodeName && r.push(o = new ev(s.nodeName)),
                    s) {
                        var l = s[a];
                        null != l && (n && 1 == r.length && r.push(o = new ev(t.isInline ? "span" : "div")),
                        "class" == a ? o.class = (o.class ? o.class + " " : "") + l : "style" == a ? o.style = (o.style ? o.style + ";" : "") + l : "nodeName" != a && (o[a] = l))
                    }
            }
            return r
        }
        function ey(e, t, n, o) {
            if (n == em && o == em)
                return t;
            for (var r = t, i = 0; i < o.length; i++) {
                var s = o[i]
                  , a = n[i];
                if (i) {
                    var l = void 0;
                    a && a.nodeName == s.nodeName && r != e && (l = r.parentNode) && l.nodeName.toLowerCase() == s.nodeName || ((l = document.createElement(s.nodeName)).pmIsDeco = !0,
                    l.appendChild(r),
                    a = em[0]),
                    r = l
                }
                !function(e, t, n) {
                    for (var o in t)
                        "class" == o || "style" == o || "nodeName" == o || o in n || e.removeAttribute(o);
                    for (var r in n)
                        "class" != r && "style" != r && "nodeName" != r && n[r] != t[r] && e.setAttribute(r, n[r]);
                    if (t.class != n.class) {
                        for (var i = t.class ? t.class.split(" ").filter(Boolean) : [], s = n.class ? n.class.split(" ").filter(Boolean) : [], a = 0; a < i.length; a++)
                            -1 == s.indexOf(i[a]) && e.classList.remove(i[a]);
                        for (var l = 0; l < s.length; l++)
                            -1 == i.indexOf(s[l]) && e.classList.add(s[l]);
                        0 == e.classList.length && e.removeAttribute("class")
                    }
                    if (t.style != n.style) {
                        if (t.style)
                            for (var c, d = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g; c = d.exec(t.style); )
                                e.style.removeProperty(c[1]);
                        n.style && (e.style.cssText += n.style)
                    }
                }(r, a || em[0], s)
            }
            return r
        }
        function eb(e, t, n) {
            return ey(e, e, em, eg(t, n, 1 != e.nodeType))
        }
        function ek(e, t) {
            if (e.length != t.length)
                return !1;
            for (var n = 0; n < e.length; n++)
                if (!e[n].type.eq(t[n].type))
                    return !1;
            return !0
        }
        function ew(e) {
            var t = e.nextSibling;
            return e.parentNode.removeChild(e),
            t
        }
        var eS = function() {
            function e(t, n, o) {
                d(this, e),
                this.lock = n,
                this.view = o,
                this.index = 0,
                this.stack = [],
                this.changed = !1,
                this.top = t,
                this.preMatch = function(e, t) {
                    var n = t
                      , o = n.children.length
                      , r = e.childCount
                      , i = new Map
                      , s = [];
                    e: for (; r > 0; ) {
                        for (var a = void 0; ; )
                            if (o) {
                                var l = n.children[o - 1];
                                if (l instanceof ec)
                                    n = l,
                                    o = l.children.length;
                                else {
                                    a = l,
                                    o--;
                                    break
                                }
                            } else if (n == t)
                                break e;
                            else
                                o = n.parent.children.indexOf(n),
                                n = n.parent;
                        var c = a.node;
                        if (c) {
                            if (c != e.child(r - 1))
                                break;
                            --r,
                            i.set(a, r),
                            s.push(a)
                        }
                    }
                    return {
                        index: r,
                        matched: i,
                        matches: s.reverse()
                    }
                }(t.node.content, t)
            }
            return f(e, [{
                key: "destroyBetween",
                value: function(e, t) {
                    if (e != t) {
                        for (var n = e; n < t; n++)
                            this.top.children[n].destroy();
                        this.top.children.splice(e, t - e),
                        this.changed = !0
                    }
                }
            }, {
                key: "destroyRest",
                value: function() {
                    this.destroyBetween(this.index, this.top.children.length)
                }
            }, {
                key: "syncToMarks",
                value: function(e, t, n) {
                    for (var o = 0, r = this.stack.length >> 1, i = Math.min(r, e.length); o < i && (o == r - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && !1 !== e[o].type.spec.spanning; )
                        o++;
                    for (; o < r; )
                        this.destroyRest(),
                        this.top.dirty = 0,
                        this.index = this.stack.pop(),
                        this.top = this.stack.pop(),
                        r--;
                    for (; r < e.length; ) {
                        this.stack.push(this.top, this.index + 1);
                        for (var s = -1, a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
                            var l = this.top.children[a];
                            if (l.matchesMark(e[r]) && !this.isLocked(l.dom)) {
                                s = a;
                                break
                            }
                        }
                        if (s > -1)
                            s > this.index && (this.changed = !0,
                            this.destroyBetween(this.index, s)),
                            this.top = this.top.children[this.index];
                        else {
                            var c = ec.create(this.top, e[r], t, n);
                            this.top.children.splice(this.index, 0, c),
                            this.top = c,
                            this.changed = !0
                        }
                        this.index = 0,
                        r++
                    }
                }
            }, {
                key: "findNodeMatch",
                value: function(e, t, n, o) {
                    var r, i = -1;
                    if (o >= this.preMatch.index && (r = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && r.matchesNode(e, t, n))
                        i = this.top.children.indexOf(r, this.index);
                    else
                        for (var s = this.index, a = Math.min(this.top.children.length, s + 5); s < a; s++) {
                            var l = this.top.children[s];
                            if (l.matchesNode(e, t, n) && !this.preMatch.matched.has(l)) {
                                i = s;
                                break
                            }
                        }
                    return !(i < 0) && (this.destroyBetween(this.index, i),
                    this.index++,
                    !0)
                }
            }, {
                key: "updateNodeAt",
                value: function(e, t, n, o, r) {
                    var i = this.top.children[o];
                    return 3 == i.dirty && i.dom == i.contentDOM && (i.dirty = 2),
                    !!i.update(e, t, n, r) && (this.destroyBetween(this.index, o),
                    this.index++,
                    !0)
                }
            }, {
                key: "findIndexWithChild",
                value: function(e) {
                    for (; ; ) {
                        var t = e.parentNode;
                        if (!t)
                            return -1;
                        if (t == this.top.contentDOM) {
                            var n = e.pmViewDesc;
                            if (n) {
                                for (var o = this.index; o < this.top.children.length; o++)
                                    if (this.top.children[o] == n)
                                        return o
                            }
                            return -1
                        }
                        e = t
                    }
                }
            }, {
                key: "updateNextNode",
                value: function(e, t, n, o, r) {
                    for (var i = this.index; i < this.top.children.length; i++) {
                        var s = this.top.children[i];
                        if (s instanceof ed) {
                            var a = this.preMatch.matched.get(s);
                            if (null != a && a != r)
                                return !1;
                            var l = s.dom;
                            if (!(this.isLocked(l) && !(e.isText && s.node && s.node.isText && s.nodeDOM.nodeValue == e.text && 3 != s.dirty && ek(t, s.outerDeco))) && s.update(e, t, n, o))
                                return this.destroyBetween(this.index, i),
                                s.dom != l && (this.changed = !0),
                                this.index++,
                                !0;
                            break
                        }
                    }
                    return !1
                }
            }, {
                key: "addNode",
                value: function(e, t, n, o, r) {
                    this.top.children.splice(this.index++, 0, ed.create(this.top, e, t, n, o, r)),
                    this.changed = !0
                }
            }, {
                key: "placeWidget",
                value: function(e, t, n) {
                    var o = this.index < this.top.children.length ? this.top.children[this.index] : null;
                    if (o && o.matchesWidget(e) && (e == o.widget || !o.widget.type.toDOM.parentNode))
                        this.index++;
                    else {
                        var r = new ea(this.top,e,t,n);
                        this.top.children.splice(this.index++, 0, r),
                        this.changed = !0
                    }
                }
            }, {
                key: "addTextblockHacks",
                value: function() {
                    for (var e = this.top.children[this.index - 1], t = this.top; e instanceof ec; )
                        e = (t = e).children[t.children.length - 1];
                    (!e || !(e instanceof ef) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((I || F) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t),
                    this.addHackNode("BR", this.top))
                }
            }, {
                key: "addHackNode",
                value: function(e, t) {
                    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
                        this.index++;
                    else {
                        var n = document.createElement(e);
                        "IMG" == e && (n.className = "ProseMirror-separator",
                        n.alt = ""),
                        "BR" == e && (n.className = "ProseMirror-trailingBreak");
                        var o = new eh(this.top,[],n,null);
                        t != this.top ? t.children.push(o) : t.children.splice(this.index++, 0, o),
                        this.changed = !0
                    }
                }
            }, {
                key: "isLocked",
                value: function(e) {
                    return this.lock && (e == this.lock || 1 == e.nodeType && e.contains(this.lock.parentNode))
                }
            }]),
            e
        }();
        function eD(e, t) {
            return e.type.side - t.type.side
        }
        function eN(e, t, n, o, r) {
            for (var i = [], s = 0, a = 0; s < e.length; s++) {
                var l = e[s]
                  , c = a
                  , d = a += l.size;
                c >= n || d <= t ? i.push(l) : (c < t && i.push(l.slice(0, t - c, o)),
                r && (i.push(r),
                r = void 0),
                d > n && i.push(l.slice(n - c, l.size, o)))
            }
            return i
        }
        function eO(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = e.domSelectionRange()
              , o = e.state.doc;
            if (!n.focusNode)
                return null;
            var r = e.docView.nearestDesc(n.focusNode)
              , i = r && 0 == r.size
              , s = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
            if (s < 0)
                return null;
            var a, l, c = o.resolve(s);
            if (N(n)) {
                for (a = c; r && !r.node; )
                    r = r.parent;
                var d = r.node;
                if (r && d.isAtom && h.NodeSelection.isSelectable(d) && r.parent && !(d.isInline && function(e, t, n) {
                    for (var o = 0 == t, r = t == D(e); o || r; ) {
                        if (e == n)
                            return !0;
                        var i = m(e);
                        if (!(e = e.parentNode))
                            return !1;
                        o = o && 0 == i,
                        r = r && i == D(e)
                    }
                }(n.focusNode, n.focusOffset, r.dom))) {
                    var u = r.posBefore;
                    l = new h.NodeSelection(s == u ? c : o.resolve(u))
                }
            } else {
                var f = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
                if (f < 0)
                    return null;
                a = o.resolve(f)
            }
            if (!l) {
                var p = "pointer" == t || e.state.selection.head < c.pos && !i ? 1 : -1;
                l = eR(e, a, c, p)
            }
            return l
        }
        function eC(e) {
            return e.editable ? e.hasFocus() : eF(e) && document.activeElement && document.activeElement.contains(e.dom)
        }
        function eM(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = e.state.selection;
            if (eA(e, n),
            eC(e)) {
                if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && F) {
                    var o = e.domSelectionRange()
                      , r = e.domObserver.currentSelection;
                    if (o.anchorNode && r.anchorNode && k(o.anchorNode, o.anchorOffset, r.anchorNode, r.anchorOffset)) {
                        e.input.mouseDown.delayedSelectionSync = !0,
                        e.domObserver.setCurSelection();
                        return
                    }
                }
                if (e.domObserver.disconnectSelection(),
                e.cursorWrapper)
                    i = e.domSelection(),
                    s = document.createRange(),
                    (l = "IMG" == (a = e.cursorWrapper.dom).nodeName) ? s.setEnd(a.parentNode, m(a) + 1) : s.setEnd(a, 0),
                    s.collapse(!1),
                    i.removeAllRanges(),
                    i.addRange(s),
                    !l && !e.state.selection.visible && A && V <= 11 && (a.disabled = !0,
                    a.disabled = !1);
                else {
                    var i, s, a, l, c, d, u, f, p, v, g = n.anchor, y = n.head;
                    !ex || n instanceof h.TextSelection || (n.$from.parent.inlineContent || (p = eT(e, n.from)),
                    n.empty || n.$from.parent.inlineContent || (v = eT(e, n.to))),
                    e.docView.setSelection(g, y, e.root, t),
                    ex && (p && eP(p),
                    v && eP(v)),
                    n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"),
                    "onselectionchange"in document && ((c = e.dom.ownerDocument).removeEventListener("selectionchange", e.input.hideSelectionGuard),
                    u = (d = e.domSelectionRange()).anchorNode,
                    f = d.anchorOffset,
                    c.addEventListener("selectionchange", e.input.hideSelectionGuard = function() {
                        (d.anchorNode != u || d.anchorOffset != f) && (c.removeEventListener("selectionchange", e.input.hideSelectionGuard),
                        setTimeout(function() {
                            (!eC(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection")
                        }, 20))
                    }
                    )))
                }
                e.domObserver.setCurSelection(),
                e.domObserver.connectSelection()
            }
        }
        var ex = I || F && z < 63;
        function eT(e, t) {
            var n = e.docView.domFromPos(t, 0)
              , o = n.node
              , r = n.offset
              , i = r < o.childNodes.length ? o.childNodes[r] : null
              , s = r ? o.childNodes[r - 1] : null;
            if (I && i && "false" == i.contentEditable)
                return eE(i);
            if ((!i || "false" == i.contentEditable) && (!s || "false" == s.contentEditable)) {
                if (i)
                    return eE(i);
                if (s)
                    return eE(s)
            }
        }
        function eE(e) {
            return e.contentEditable = "true",
            I && e.draggable && (e.draggable = !1,
            e.wasDraggable = !0),
            e
        }
        function eP(e) {
            e.contentEditable = "false",
            e.wasDraggable && (e.draggable = !0,
            e.wasDraggable = null)
        }
        function eA(e, t) {
            if (t instanceof h.NodeSelection) {
                var n = e.docView.descAt(t.from);
                n != e.lastSelectedViewDesc && (eV(e),
                n && n.selectNode(),
                e.lastSelectedViewDesc = n)
            } else
                eV(e)
        }
        function eV(e) {
            e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(),
            e.lastSelectedViewDesc = void 0)
        }
        function eR(e, t, n, o) {
            return e.someProp("createSelectionBetween", function(o) {
                return o(e, t, n)
            }) || h.TextSelection.between(t, n, o)
        }
        function eB(e) {
            return (!e.editable || !!e.hasFocus()) && eF(e)
        }
        function eF(e) {
            var t = e.domSelectionRange();
            if (!t.anchorNode)
                return !1;
            try {
                return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode))
            } catch (e) {
                return !1
            }
        }
        function ez(e, t) {
            var n = e.selection
              , o = n.$anchor
              , r = n.$head
              , i = t > 0 ? o.max(r) : o.min(r)
              , s = i.parent.inlineContent ? i.depth ? e.doc.resolve(t > 0 ? i.after() : i.before()) : null : i;
            return s && h.Selection.findFrom(s, t)
        }
        function eI(e, t) {
            return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()),
            !0
        }
        function eL(e, t, n) {
            var o = e.state.selection;
            if (o instanceof h.TextSelection) {
                if (!o.empty || n.indexOf("s") > -1)
                    return !1;
                if (e.endOfTextblock(t > 0 ? "right" : "left")) {
                    var r = ez(e.state, t);
                    return !!r && r instanceof h.NodeSelection && eI(e, r)
                }
                if (!(q && n.indexOf("m") > -1)) {
                    var i, s = o.$head, a = s.textOffset ? null : t < 0 ? s.nodeBefore : s.nodeAfter;
                    if (!a || a.isText)
                        return !1;
                    var l = t < 0 ? s.pos - a.nodeSize : s.pos;
                    return !!(a.isAtom || (i = e.docView.descAt(l)) && !i.contentDOM) && (h.NodeSelection.isSelectable(a) ? eI(e, new h.NodeSelection(t < 0 ? e.state.doc.resolve(s.pos - a.nodeSize) : s)) : !!_ && eI(e, new h.TextSelection(e.state.doc.resolve(t < 0 ? l : l + a.nodeSize))))
                }
            } else {
                if (o instanceof h.NodeSelection && o.node.isInline)
                    return eI(e, new h.TextSelection(t > 0 ? o.$to : o.$from));
                var c = ez(e.state, t);
                return !!c && eI(e, c)
            }
        }
        function eq(e) {
            return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
        }
        function eK(e) {
            var t = e.pmViewDesc;
            return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName)
        }
        function e_(e) {
            var t = e.domSelectionRange()
              , n = t.focusNode
              , o = t.focusOffset;
            if (n) {
                var r, i, s = !1;
                for (R && 1 == n.nodeType && o < eq(n) && eK(n.childNodes[o]) && (s = !0); ; )
                    if (o > 0) {
                        if (1 != n.nodeType)
                            break;
                        var a = n.childNodes[o - 1];
                        if (eK(a))
                            r = n,
                            i = --o;
                        else if (3 == a.nodeType)
                            o = (n = a).nodeValue.length;
                        else
                            break
                    } else if (eW(n))
                        break;
                    else {
                        for (var l = n.previousSibling; l && eK(l); )
                            r = n.parentNode,
                            i = m(l),
                            l = l.previousSibling;
                        if (l)
                            o = eq(n = l);
                        else {
                            if ((n = n.parentNode) == e.dom)
                                break;
                            o = 0
                        }
                    }
                s ? eH(e, n, o) : r && eH(e, r, i)
            }
        }
        function e$(e) {
            var t, n, o = e.domSelectionRange(), r = o.focusNode, i = o.focusOffset;
            if (r) {
                for (var s = eq(r); ; )
                    if (i < s) {
                        if (1 != r.nodeType)
                            break;
                        if (eK(r.childNodes[i]))
                            t = r,
                            n = ++i;
                        else
                            break
                    } else if (eW(r))
                        break;
                    else {
                        for (var a = r.nextSibling; a && eK(a); )
                            t = a.parentNode,
                            n = m(a) + 1,
                            a = a.nextSibling;
                        if (a)
                            i = 0,
                            s = eq(r = a);
                        else {
                            if ((r = r.parentNode) == e.dom)
                                break;
                            i = s = 0
                        }
                    }
                t && eH(e, t, n)
            }
        }
        function eW(e) {
            var t = e.pmViewDesc;
            return t && t.node && t.node.isBlock
        }
        function eH(e, t, n) {
            var o = e.domSelection();
            if (N(o)) {
                var r = document.createRange();
                r.setEnd(t, n),
                r.setStart(t, n),
                o.removeAllRanges(),
                o.addRange(r)
            } else
                o.extend && o.extend(t, n);
            e.domObserver.setCurSelection();
            var i = e.state;
            setTimeout(function() {
                e.state == i && eM(e)
            }, 50)
        }
        function ej(e, t, n) {
            var o = e.state.selection;
            if (o instanceof h.TextSelection && !o.empty || n.indexOf("s") > -1 || q && n.indexOf("m") > -1)
                return !1;
            var r = o.$from
              , i = o.$to;
            if (!r.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
                var s = ez(e.state, t);
                if (s && s instanceof h.NodeSelection)
                    return eI(e, s)
            }
            if (!r.parent.inlineContent) {
                var a = t < 0 ? r : i
                  , l = o instanceof h.AllSelection ? h.Selection.near(a, t) : h.Selection.findFrom(a, t);
                return !!l && eI(e, l)
            }
            return !1
        }
        function eG(e, t) {
            if (!(e.state.selection instanceof h.TextSelection))
                return !0;
            var n = e.state.selection
              , o = n.$head
              , r = n.$anchor
              , i = n.empty;
            if (!o.sameParent(r))
                return !0;
            if (!i)
                return !1;
            if (e.endOfTextblock(t > 0 ? "forward" : "backward"))
                return !0;
            var s = !o.textOffset && (t < 0 ? o.nodeBefore : o.nodeAfter);
            if (s && !s.isText) {
                var a = e.state.tr;
                return t < 0 ? a.delete(o.pos - s.nodeSize, o.pos) : a.delete(o.pos, o.pos + s.nodeSize),
                e.dispatch(a),
                !0
            }
            return !1
        }
        function eU(e, t, n) {
            e.domObserver.stop(),
            t.contentEditable = n,
            e.domObserver.start()
        }
        function eX(e, t) {
            e.someProp("transformCopied", function(n) {
                t = n(t, e)
            });
            for (var n = [], o = t.content, r = t.openStart, i = t.openEnd; r > 1 && i > 1 && 1 == o.childCount && 1 == o.firstChild.childCount; ) {
                r--,
                i--;
                var s = o.firstChild;
                n.push(s.type.name, s.attrs != s.type.defaultAttrs ? s.attrs : null),
                o = s.content
            }
            var a = e.someProp("clipboardSerializer") || p.DOMSerializer.fromSchema(e.state.schema)
              , l = e3()
              , c = l.createElement("div");
            c.appendChild(a.serializeFragment(o, {
                document: l
            }));
            for (var d, u = c.firstChild, f = 0; u && 1 == u.nodeType && (d = e1[u.nodeName.toLowerCase()]); ) {
                for (var h = d.length - 1; h >= 0; h--) {
                    for (var v = l.createElement(d[h]); c.firstChild; )
                        v.appendChild(c.firstChild);
                    c.appendChild(v),
                    f++
                }
                u = c.firstChild
            }
            return u && 1 == u.nodeType && u.setAttribute("data-pm-slice", "".concat(r, " ").concat(i).concat(f ? " -".concat(f) : "", " ").concat(JSON.stringify(n))),
            {
                dom: c,
                text: e.someProp("clipboardTextSerializer", function(n) {
                    return n(t, e)
                }) || t.content.textBetween(0, t.content.size, "\n\n")
            }
        }
        function eY(e, t, n, r, i) {
            var s, a, l = i.parent.type.spec.code;
            if (!n && !t)
                return null;
            var c = t && (r || l || !n);
            if (c) {
                if (e.someProp("transformPastedText", function(n) {
                    t = n(t, l || r, e)
                }),
                l)
                    return t ? new p.Slice(p.Fragment.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),0,0) : p.Slice.empty;
                var d = e.someProp("clipboardTextParser", function(n) {
                    return n(t, i, r, e)
                });
                if (d)
                    a = d;
                else {
                    var u = i.marks()
                      , f = e.state.schema
                      , h = p.DOMSerializer.fromSchema(f);
                    s = document.createElement("div"),
                    t.split(/(?:\r\n?|\n)+/).forEach(function(e) {
                        var t = s.appendChild(document.createElement("p"));
                        e && t.appendChild(h.serializeNode(f.text(e, u)))
                    })
                }
            } else
                e.someProp("transformPastedHTML", function(t) {
                    n = t(n, e)
                }),
                s = function(e) {
                    var t = /^(\s*<meta [^>]*>)*/.exec(e);
                    t && (e = e.slice(t[0].length));
                    var n, o = e3().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(e);
                    if ((n = r && e1[r[1].toLowerCase()]) && (e = n.map(function(e) {
                        return "<" + e + ">"
                    }).join("") + e + n.map(function(e) {
                        return "</" + e + ">"
                    }).reverse().join("")),
                    o.innerHTML = e,
                    n)
                        for (var i = 0; i < n.length; i++)
                            o = o.querySelector(n[i]) || o;
                    return o
                }(n),
                _ && function(e) {
                    for (var t = e.querySelectorAll(F ? "span:not([class]):not([style])" : "span.Apple-converted-space"), n = 0; n < t.length; n++) {
                        var o = t[n];
                        1 == o.childNodes.length && "\xa0" == o.textContent && o.parentNode && o.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), o)
                    }
                }(s);
            var v = s && s.querySelector("[data-pm-slice]")
              , m = v && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(v.getAttribute("data-pm-slice") || "");
            if (m && m[3])
                for (var g = +m[3]; g > 0; g--) {
                    for (var y = s.firstChild; y && 1 != y.nodeType; )
                        y = y.nextSibling;
                    if (!y)
                        break;
                    s = y
                }
            if (a || (a = (e.someProp("clipboardParser") || e.someProp("domParser") || p.DOMParser.fromSchema(e.state.schema)).parseSlice(s, {
                preserveWhitespace: !!(c || m),
                context: i,
                ruleFromNode: function(e) {
                    return "BR" != e.nodeName || e.nextSibling || !e.parentNode || eJ.test(e.parentNode.nodeName) ? null : {
                        ignore: !0
                    }
                }
            })),
            m)
                a = function(e, t) {
                    if (!e.size)
                        return e;
                    var n, o = e.content.firstChild.type.schema;
                    try {
                        n = JSON.parse(t)
                    } catch (t) {
                        return e
                    }
                    for (var r = e.content, i = e.openStart, s = e.openEnd, a = n.length - 2; a >= 0; a -= 2) {
                        var l = o.nodes[n[a]];
                        if (!l || l.hasRequiredAttrs())
                            break;
                        r = p.Fragment.from(l.create(n[a + 1], r)),
                        i++,
                        s++
                    }
                    return new p.Slice(r,i,s)
                }(e0(a, +m[1], +m[2]), m[4]);
            else if ((a = p.Slice.maxOpen(function(e, t) {
                if (e.childCount < 2)
                    return e;
                for (var n = t.depth; n >= 0; n--) {
                    var r = function(n) {
                        var o = t.node(n).contentMatchAt(t.index(n))
                          , r = void 0
                          , i = [];
                        if (e.forEach(function(e) {
                            if (i) {
                                var t, n = o.findWrapping(e.type);
                                if (!n)
                                    return i = null;
                                if (t = i.length && r.length && function e(t, n, o, r, i) {
                                    if (i < t.length && i < n.length && t[i] == n[i]) {
                                        var s = e(t, n, o, r.lastChild, i + 1);
                                        if (s)
                                            return r.copy(r.content.replaceChild(r.childCount - 1, s));
                                        if (r.contentMatchAt(r.childCount).matchType(i == t.length - 1 ? o.type : t[i + 1]))
                                            return r.copy(r.content.append(p.Fragment.from(eQ(o, t, i + 1))))
                                    }
                                }(n, r, e, i[i.length - 1], 0))
                                    i[i.length - 1] = t;
                                else {
                                    i.length && (i[i.length - 1] = function e(t, n) {
                                        if (0 == n)
                                            return t;
                                        var o = t.content.replaceChild(t.childCount - 1, e(t.lastChild, n - 1))
                                          , r = t.contentMatchAt(t.childCount).fillBefore(p.Fragment.empty, !0);
                                        return t.copy(o.append(r))
                                    }(i[i.length - 1], r.length));
                                    var s = eQ(e, n);
                                    i.push(s),
                                    o = o.matchType(s.type),
                                    r = n
                                }
                            }
                        }),
                        i)
                            return {
                                v: p.Fragment.from(i)
                            }
                    }(n);
                    if ("object" === o(r))
                        return r.v
                }
                return e
            }(a.content, i), !0)).openStart || a.openEnd) {
                for (var b = 0, k = 0, w = a.content.firstChild; b < a.openStart && !w.type.spec.isolating; b++,
                w = w.firstChild)
                    ;
                for (var S = a.content.lastChild; k < a.openEnd && !S.type.spec.isolating; k++,
                S = S.lastChild)
                    ;
                a = e0(a, b, k)
            }
            return e.someProp("transformPasted", function(t) {
                a = t(a, e)
            }),
            a
        }
        var eJ = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
        function eQ(e, t) {
            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o = t.length - 1; o >= n; o--)
                e = t[o].create(null, p.Fragment.from(e));
            return e
        }
        function eZ(e, t, n, o, r, i) {
            var s = t < 0 ? e.firstChild : e.lastChild
              , a = s.content;
            return r < o - 1 && (a = eZ(a, t, n, o, r + 1, i)),
            r >= n && (a = t < 0 ? s.contentMatchAt(0).fillBefore(a, e.childCount > 1 || i <= r).append(a) : a.append(s.contentMatchAt(s.childCount).fillBefore(p.Fragment.empty, !0))),
            e.replaceChild(t < 0 ? 0 : e.childCount - 1, s.copy(a))
        }
        function e0(e, t, n) {
            return t < e.openStart && (e = new p.Slice(eZ(e.content, -1, t, e.openStart, 0, e.openEnd),t,e.openEnd)),
            n < e.openEnd && (e = new p.Slice(eZ(e.content, 1, n, e.openEnd, 0, 0),e.openStart,n)),
            e
        }
        var e1 = {
            thead: ["table"],
            tbody: ["table"],
            tfoot: ["table"],
            caption: ["table"],
            colgroup: ["table"],
            col: ["table", "colgroup"],
            tr: ["table", "tbody"],
            td: ["table", "tbody", "tr"],
            th: ["table", "tbody", "tr"]
        }
          , e2 = null;
        function e3() {
            return e2 || (e2 = document.implementation.createHTMLDocument("title"))
        }
        var e5 = {}
          , e8 = {}
          , e6 = {
            touchstart: !0,
            touchmove: !0
        }
          , e7 = f(function e() {
            d(this, e),
            this.shiftKey = !1,
            this.mouseDown = null,
            this.lastKeyCode = null,
            this.lastKeyCodeTime = 0,
            this.lastClick = {
                time: 0,
                x: 0,
                y: 0,
                type: ""
            },
            this.lastSelectionOrigin = null,
            this.lastSelectionTime = 0,
            this.lastIOSEnter = 0,
            this.lastIOSEnterFallbackTimeout = -1,
            this.lastFocus = 0,
            this.lastTouch = 0,
            this.lastAndroidDelete = 0,
            this.composing = !1,
            this.composingTimeout = -1,
            this.compositionNodes = [],
            this.compositionEndedAt = -2e8,
            this.domChangeCount = 0,
            this.eventHandlers = Object.create(null),
            this.hideSelectionGuard = null
        });
        function e9(e, t) {
            e.input.lastSelectionOrigin = t,
            e.input.lastSelectionTime = Date.now()
        }
        function e4(e) {
            e.someProp("handleDOMEvents", function(t) {
                for (var n in t)
                    e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = function(t) {
                        return te(e, t)
                    }
                    )
            })
        }
        function te(e, t) {
            return e.someProp("handleDOMEvents", function(n) {
                var o = n[t.type];
                return !!o && (o(e, t) || t.defaultPrevented)
            })
        }
        function tt(e) {
            return {
                left: e.clientX,
                top: e.clientY
            }
        }
        function tn(e, t, n, r, i) {
            if (-1 == r)
                return !1;
            for (var s = e.state.doc.resolve(r), a = function(o) {
                if (e.someProp(t, function(t) {
                    return o > s.depth ? t(e, n, s.nodeAfter, s.before(o), i, !0) : t(e, n, s.node(o), s.before(o), i, !1)
                }))
                    return {
                        v: !0
                    }
            }, l = s.depth + 1; l > 0; l--) {
                var c = a(l);
                if ("object" === o(c))
                    return c.v
            }
            return !1
        }
        function to(e, t, n) {
            e.focused || e.focus();
            var o = e.state.tr.setSelection(t);
            "pointer" == n && o.setMeta("pointer", !0),
            e.dispatch(o)
        }
        e8.keydown = function(e, t) {
            if (e.input.shiftKey = 16 == t.keyCode || t.shiftKey,
            !ts(e, t) && (e.input.lastKeyCode = t.keyCode,
            e.input.lastKeyCodeTime = Date.now(),
            !K || !F || 13 != t.keyCode)) {
                if (229 != t.keyCode && e.domObserver.forceFlush(),
                !L || 13 != t.keyCode || t.ctrlKey || t.altKey || t.metaKey)
                    e.someProp("handleKeyDown", function(n) {
                        return n(e, t)
                    }) || function(e, t) {
                        var n, o = t.keyCode, r = (n = "",
                        t.ctrlKey && (n += "c"),
                        t.metaKey && (n += "m"),
                        t.altKey && (n += "a"),
                        t.shiftKey && (n += "s"),
                        n);
                        if (8 == o || q && 72 == o && "c" == r)
                            return eG(e, -1) || e_(e);
                        if (46 == o || q && 68 == o && "c" == r)
                            return eG(e, 1) || e$(e);
                        if (13 == o || 27 == o)
                            return !0;
                        if (37 == o || q && 66 == o && "c" == r)
                            return eL(e, -1, r) || e_(e);
                        if (39 == o || q && 70 == o && "c" == r)
                            return eL(e, 1, r) || e$(e);
                        if (38 == o || q && 80 == o && "c" == r)
                            return ej(e, -1, r) || e_(e);
                        if (40 == o || q && 78 == o && "c" == r)
                            return function(e) {
                                if (!I || e.state.selection.$head.parentOffset > 0)
                                    return !1;
                                var t = e.domSelectionRange()
                                  , n = t.focusNode
                                  , o = t.focusOffset;
                                if (n && 1 == n.nodeType && 0 == o && n.firstChild && "false" == n.firstChild.contentEditable) {
                                    var r = n.firstChild;
                                    eU(e, r, "true"),
                                    setTimeout(function() {
                                        return eU(e, r, "false")
                                    }, 20)
                                }
                                return !1
                            }(e) || ej(e, 1, r) || e$(e);
                        else if (r == (q ? "m" : "c") && (66 == o || 73 == o || 89 == o || 90 == o))
                            return !0;
                        return !1
                    }(e, t) ? t.preventDefault() : e9(e, "key");
                else {
                    var n = Date.now();
                    e.input.lastIOSEnter = n,
                    e.input.lastIOSEnterFallbackTimeout = setTimeout(function() {
                        e.input.lastIOSEnter == n && (e.someProp("handleKeyDown", function(t) {
                            return t(e, O(13, "Enter"))
                        }),
                        e.input.lastIOSEnter = 0)
                    }, 200)
                }
            }
        }
        ,
        e8.keyup = function(e, t) {
            16 == t.keyCode && (e.input.shiftKey = !1)
        }
        ,
        e8.keypress = function(e, t) {
            if (!ts(e, t) && t.charCode && (!t.ctrlKey || t.altKey) && (!q || !t.metaKey)) {
                if (e.someProp("handleKeyPress", function(n) {
                    return n(e, t)
                })) {
                    t.preventDefault();
                    return
                }
                var n = e.state.selection;
                if (!(n instanceof h.TextSelection) || !n.$from.sameParent(n.$to)) {
                    var o = String.fromCharCode(t.charCode);
                    /[\r\n]/.test(o) || e.someProp("handleTextInput", function(t) {
                        return t(e, n.$from.pos, n.$to.pos, o)
                    }) || e.dispatch(e.state.tr.insertText(o).scrollIntoView()),
                    t.preventDefault()
                }
            }
        }
        ;
        var tr = q ? "metaKey" : "ctrlKey";
        e5.mousedown = function(e, t) {
            e.input.shiftKey = t.shiftKey;
            var n, o, r, i = td(e), s = Date.now(), a = "singleClick";
            s - e.input.lastClick.time < 500 && (o = (n = e.input.lastClick).x - t.clientX) * o + (r = n.y - t.clientY) * r < 100 && !t[tr] && ("singleClick" == e.input.lastClick.type ? a = "doubleClick" : "doubleClick" == e.input.lastClick.type && (a = "tripleClick")),
            e.input.lastClick = {
                time: s,
                x: t.clientX,
                y: t.clientY,
                type: a
            };
            var l = e.posAtCoords(tt(t));
            l && ("singleClick" == a ? (e.input.mouseDown && e.input.mouseDown.done(),
            e.input.mouseDown = new ti(e,l,t,!!i)) : ("doubleClick" == a ? function(e, t, n, o) {
                return tn(e, "handleDoubleClickOn", t, n, o) || e.someProp("handleDoubleClick", function(n) {
                    return n(e, t, o)
                })
            }
            : function(e, t, n, o) {
                return tn(e, "handleTripleClickOn", t, n, o) || e.someProp("handleTripleClick", function(n) {
                    return n(e, t, o)
                }) || function(e, t, n) {
                    if (0 != n.button)
                        return !1;
                    var o = e.state.doc;
                    if (-1 == t)
                        return !!o.inlineContent && (to(e, h.TextSelection.create(o, 0, o.content.size), "pointer"),
                        !0);
                    for (var r = o.resolve(t), i = r.depth + 1; i > 0; i--) {
                        var s = i > r.depth ? r.nodeAfter : r.node(i)
                          , a = r.before(i);
                        if (s.inlineContent)
                            to(e, h.TextSelection.create(o, a + 1, a + 1 + s.content.size), "pointer");
                        else {
                            if (!h.NodeSelection.isSelectable(s))
                                continue;
                            to(e, h.NodeSelection.create(o, a), "pointer")
                        }
                        return !0
                    }
                }(e, n, o)
            }
            )(e, l.pos, l.inside, t) ? t.preventDefault() : e9(e, "pointer"))
        }
        ;
        var ti = function() {
            function e(t, n, o, r) {
                var i, s, a = this;
                if (d(this, e),
                this.view = t,
                this.pos = n,
                this.event = o,
                this.flushed = r,
                this.delayedSelectionSync = !1,
                this.mightDrag = null,
                this.startDoc = t.state.doc,
                this.selectNode = !!o[tr],
                this.allowDefault = o.shiftKey,
                n.inside > -1)
                    i = t.state.doc.nodeAt(n.inside),
                    s = n.inside;
                else {
                    var l = t.state.doc.resolve(n.pos);
                    i = l.parent,
                    s = l.depth ? l.before() : 0
                }
                var c = r ? null : o.target
                  , u = c ? t.docView.nearestDesc(c, !0) : null;
                this.target = u ? u.dom : null;
                var f = t.state.selection;
                (0 == o.button && i.type.spec.draggable && !1 !== i.type.spec.selectable || f instanceof h.NodeSelection && f.from <= s && f.to > s) && (this.mightDrag = {
                    node: i,
                    pos: s,
                    addAttr: !!(this.target && !this.target.draggable),
                    setUneditable: !!(this.target && R && !this.target.hasAttribute("contentEditable"))
                }),
                this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(),
                this.mightDrag.addAttr && (this.target.draggable = !0),
                this.mightDrag.setUneditable && setTimeout(function() {
                    a.view.input.mouseDown == a && a.target.setAttribute("contentEditable", "false")
                }, 20),
                this.view.domObserver.start()),
                t.root.addEventListener("mouseup", this.up = this.up.bind(this)),
                t.root.addEventListener("mousemove", this.move = this.move.bind(this)),
                e9(t, "pointer")
            }
            return f(e, [{
                key: "done",
                value: function() {
                    var e = this;
                    this.view.root.removeEventListener("mouseup", this.up),
                    this.view.root.removeEventListener("mousemove", this.move),
                    this.mightDrag && this.target && (this.view.domObserver.stop(),
                    this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
                    this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"),
                    this.view.domObserver.start()),
                    this.delayedSelectionSync && setTimeout(function() {
                        return eM(e.view)
                    }),
                    this.view.input.mouseDown = null
                }
            }, {
                key: "up",
                value: function(e) {
                    if (this.done(),
                    this.view.dom.contains(e.target)) {
                        var t, n, o, r, i = this.pos;
                        (this.view.state.doc != this.startDoc && (i = this.view.posAtCoords(tt(e))),
                        this.updateAllowDefault(e),
                        this.allowDefault || !i) ? e9(this.view, "pointer") : (t = this.view,
                        n = i.pos,
                        o = i.inside,
                        r = this.selectNode,
                        tn(t, "handleClickOn", n, o, e) || t.someProp("handleClick", function(o) {
                            return o(t, n, e)
                        }) || (r ? function(e, t) {
                            if (-1 == t)
                                return !1;
                            var n, o, r = e.state.selection;
                            r instanceof h.NodeSelection && (n = r.node);
                            for (var i = e.state.doc.resolve(t), s = i.depth + 1; s > 0; s--) {
                                var a = s > i.depth ? i.nodeAfter : i.node(s);
                                if (h.NodeSelection.isSelectable(a)) {
                                    o = n && r.$from.depth > 0 && s >= r.$from.depth && i.before(r.$from.depth + 1) == r.$from.pos ? i.before(r.$from.depth) : i.before(s);
                                    break
                                }
                            }
                            return null != o && (to(e, h.NodeSelection.create(e.state.doc, o), "pointer"),
                            !0)
                        }(t, o) : function(e, t) {
                            if (-1 == t)
                                return !1;
                            var n = e.state.doc.resolve(t)
                              , o = n.nodeAfter;
                            return !!(o && o.isAtom && h.NodeSelection.isSelectable(o)) && (to(e, new h.NodeSelection(n), "pointer"),
                            !0)
                        }(t, o))) ? e.preventDefault() : 0 == e.button && (this.flushed || I && this.mightDrag && !this.mightDrag.node.isAtom || F && !this.view.state.selection.visible && 2 >= Math.min(Math.abs(i.pos - this.view.state.selection.from), Math.abs(i.pos - this.view.state.selection.to))) ? (to(this.view, h.Selection.near(this.view.state.doc.resolve(i.pos)), "pointer"),
                        e.preventDefault()) : e9(this.view, "pointer")
                    }
                }
            }, {
                key: "move",
                value: function(e) {
                    this.updateAllowDefault(e),
                    e9(this.view, "pointer"),
                    0 == e.buttons && this.done()
                }
            }, {
                key: "updateAllowDefault",
                value: function(e) {
                    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
                }
            }]),
            e
        }();
        function ts(e, t) {
            return !!e.composing || !!(I && 500 > Math.abs(t.timeStamp - e.input.compositionEndedAt)) && (e.input.compositionEndedAt = -2e8,
            !0)
        }
        e5.touchstart = function(e) {
            e.input.lastTouch = Date.now(),
            td(e),
            e9(e, "pointer")
        }
        ,
        e5.touchmove = function(e) {
            e.input.lastTouch = Date.now(),
            e9(e, "pointer")
        }
        ,
        e5.contextmenu = function(e) {
            return td(e)
        }
        ;
        var ta = K ? 5e3 : -1;
        function tl(e, t) {
            clearTimeout(e.input.composingTimeout),
            t > -1 && (e.input.composingTimeout = setTimeout(function() {
                return td(e)
            }, t))
        }
        function tc(e) {
            var t;
            for (e.composing && (e.input.composing = !1,
            e.input.compositionEndedAt = ((t = document.createEvent("Event")).initEvent("event", !0, !0),
            t.timeStamp)); e.input.compositionNodes.length > 0; )
                e.input.compositionNodes.pop().markParentsDirty()
        }
        function td(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!K || !(e.domObserver.flushingSoon >= 0)) {
                if (e.domObserver.forceFlush(),
                tc(e),
                t || e.docView && e.docView.dirty) {
                    var n = eO(e);
                    return n && !n.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(n)) : e.updateState(e.state),
                    !0
                }
                return !1
            }
        }
        e8.compositionstart = e8.compositionupdate = function(e) {
            if (!e.composing) {
                e.domObserver.flush();
                var t = e.state
                  , n = t.selection.$from;
                if (t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(function(e) {
                    return !1 === e.type.spec.inclusive
                })))
                    e.markCursor = e.state.storedMarks || n.marks(),
                    td(e, !0),
                    e.markCursor = null;
                else if (td(e),
                R && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length)
                    for (var o = e.domSelectionRange(), r = o.focusNode, i = o.focusOffset; r && 1 == r.nodeType && 0 != i; ) {
                        var s = i < 0 ? r.lastChild : r.childNodes[i - 1];
                        if (!s)
                            break;
                        if (3 == s.nodeType) {
                            e.domSelection().collapse(s, s.nodeValue.length);
                            break
                        }
                        r = s,
                        i = -1
                    }
                e.input.composing = !0
            }
            tl(e, ta)
        }
        ,
        e8.compositionend = function(e, t) {
            e.composing && (e.input.composing = !1,
            e.input.compositionEndedAt = t.timeStamp,
            tl(e, 20))
        }
        ;
        var tu = A && V < 15 || L && $ < 604;
        function tf(e, t, n, o, r) {
            var i = eY(e, t, n, o, e.state.selection.$from);
            if (e.someProp("handlePaste", function(t) {
                return t(e, r, i || p.Slice.empty)
            }))
                return !0;
            if (!i)
                return !1;
            var s = 0 == i.openStart && 0 == i.openEnd && 1 == i.content.childCount ? i.content.firstChild : null
              , a = s ? e.state.tr.replaceSelectionWith(s, e.input.shiftKey) : e.state.tr.replaceSelection(i);
            return e.dispatch(a.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")),
            !0
        }
        e5.copy = e8.cut = function(e, t) {
            var n = e.state.selection
              , o = "cut" == t.type;
            if (!n.empty) {
                var r = tu ? null : t.clipboardData
                  , i = eX(e, n.content())
                  , s = i.dom
                  , a = i.text;
                r ? (t.preventDefault(),
                r.clearData(),
                r.setData("text/html", s.innerHTML),
                r.setData("text/plain", a)) : function(e, t) {
                    if (e.dom.parentNode) {
                        var n = e.dom.parentNode.appendChild(document.createElement("div"));
                        n.appendChild(t),
                        n.style.cssText = "position: fixed; left: -10000px; top: 10px";
                        var o = getSelection()
                          , r = document.createRange();
                        r.selectNodeContents(t),
                        e.dom.blur(),
                        o.removeAllRanges(),
                        o.addRange(r),
                        setTimeout(function() {
                            n.parentNode && n.parentNode.removeChild(n),
                            e.focus()
                        }, 50)
                    }
                }(e, s),
                o && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
            }
        }
        ,
        e8.paste = function(e, t) {
            if (!e.composing || K) {
                var n = tu ? null : t.clipboardData;
                n && tf(e, n.getData("text/plain"), n.getData("text/html"), e.input.shiftKey, t) ? t.preventDefault() : function(e, t) {
                    if (e.dom.parentNode) {
                        var n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code
                          , o = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                        n || (o.contentEditable = "true"),
                        o.style.cssText = "position: fixed; left: -10000px; top: 10px",
                        o.focus(),
                        setTimeout(function() {
                            e.focus(),
                            o.parentNode && o.parentNode.removeChild(o),
                            n ? tf(e, o.value, null, e.input.shiftKey, t) : tf(e, o.textContent, o.innerHTML, e.input.shiftKey, t)
                        }, 50)
                    }
                }(e, t)
            }
        }
        ;
        var th = f(function e(t, n) {
            d(this, e),
            this.slice = t,
            this.move = n
        })
          , tp = q ? "altKey" : "ctrlKey";
        for (var tv in e5.dragstart = function(e, t) {
            var n = e.input.mouseDown;
            if (n && n.done(),
            t.dataTransfer) {
                var o = e.state.selection
                  , r = o.empty ? null : e.posAtCoords(tt(t));
                if (r && r.pos >= o.from && r.pos <= (o instanceof h.NodeSelection ? o.to - 1 : o.to))
                    ;
                else if (n && n.mightDrag)
                    e.dispatch(e.state.tr.setSelection(h.NodeSelection.create(e.state.doc, n.mightDrag.pos)));
                else if (t.target && 1 == t.target.nodeType) {
                    var i = e.docView.nearestDesc(t.target, !0);
                    i && i.node.type.spec.draggable && i != e.docView && e.dispatch(e.state.tr.setSelection(h.NodeSelection.create(e.state.doc, i.posBefore)))
                }
                var s = e.state.selection.content()
                  , a = eX(e, s)
                  , l = a.dom
                  , c = a.text;
                t.dataTransfer.clearData(),
                t.dataTransfer.setData(tu ? "Text" : "text/html", l.innerHTML),
                t.dataTransfer.effectAllowed = "copyMove",
                tu || t.dataTransfer.setData("text/plain", c),
                e.dragging = new th(s,!t[tp])
            }
        }
        ,
        e5.dragend = function(e) {
            var t = e.dragging;
            window.setTimeout(function() {
                e.dragging == t && (e.dragging = null)
            }, 50)
        }
        ,
        e8.dragover = e8.dragenter = function(e, t) {
            return t.preventDefault()
        }
        ,
        e8.drop = function(e, t) {
            var n = e.dragging;
            if (e.dragging = null,
            t.dataTransfer) {
                var o = e.posAtCoords(tt(t));
                if (o) {
                    var r = e.state.doc.resolve(o.pos)
                      , i = n && n.slice;
                    i ? e.someProp("transformPasted", function(t) {
                        i = t(i, e)
                    }) : i = eY(e, t.dataTransfer.getData(tu ? "Text" : "text/plain"), tu ? null : t.dataTransfer.getData("text/html"), !1, r);
                    var s = !!(n && !t[tp]);
                    if (e.someProp("handleDrop", function(n) {
                        return n(e, t, i || p.Slice.empty, s)
                    })) {
                        t.preventDefault();
                        return
                    }
                    if (i) {
                        t.preventDefault();
                        var a = i ? v.dropPoint(e.state.doc, r.pos, i) : r.pos;
                        null == a && (a = r.pos);
                        var l = e.state.tr;
                        s && l.deleteSelection();
                        var c = l.mapping.map(a)
                          , d = 0 == i.openStart && 0 == i.openEnd && 1 == i.content.childCount
                          , u = l.doc;
                        if (d ? l.replaceRangeWith(c, c, i.content.firstChild) : l.replaceRange(c, c, i),
                        !l.doc.eq(u)) {
                            var f = l.doc.resolve(c);
                            if (d && h.NodeSelection.isSelectable(i.content.firstChild) && f.nodeAfter && f.nodeAfter.sameMarkup(i.content.firstChild))
                                l.setSelection(new h.NodeSelection(f));
                            else {
                                var m = l.mapping.map(a);
                                l.mapping.maps[l.mapping.maps.length - 1].forEach(function(e, t, n, o) {
                                    return m = o
                                }),
                                l.setSelection(eR(e, f, l.doc.resolve(m)))
                            }
                            e.focus(),
                            e.dispatch(l.setMeta("uiEvent", "drop"))
                        }
                    }
                }
            }
        }
        ,
        e5.focus = function(e) {
            e.input.lastFocus = Date.now(),
            e.focused || (e.domObserver.stop(),
            e.dom.classList.add("ProseMirror-focused"),
            e.domObserver.start(),
            e.focused = !0,
            setTimeout(function() {
                e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && eM(e)
            }, 20))
        }
        ,
        e5.blur = function(e, t) {
            e.focused && (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            t.relatedTarget && e.dom.contains(t.relatedTarget) && e.domObserver.currentSelection.clear(),
            e.focused = !1)
        }
        ,
        e5.beforeinput = function(e, t) {
            if (F && K && "deleteContentBackward" == t.inputType) {
                e.domObserver.flushSoon();
                var n = e.input.domChangeCount;
                setTimeout(function() {
                    if (e.input.domChangeCount == n && (e.dom.blur(),
                    e.focus(),
                    !e.someProp("handleKeyDown", function(t) {
                        return t(e, O(8, "Backspace"))
                    }))) {
                        var t = e.state.selection.$cursor;
                        t && t.pos > 0 && e.dispatch(e.state.tr.delete(t.pos - 1, t.pos).scrollIntoView())
                    }
                }, 50)
            }
        }
        ,
        e8)
            e5[tv] = e8[tv];
        function tm(e, t) {
            if (e == t)
                return !0;
            for (var n in e)
                if (e[n] !== t[n])
                    return !1;
            for (var o in t)
                if (!(o in e))
                    return !1;
            return !0
        }
        var tg = function() {
            function e(t, n) {
                d(this, e),
                this.toDOM = t,
                this.spec = n || tS,
                this.side = this.spec.side || 0
            }
            return f(e, [{
                key: "map",
                value: function(e, t, n, o) {
                    var r = e.mapResult(t.from + o, this.side < 0 ? -1 : 1)
                      , i = r.pos;
                    return r.deleted ? null : new tk(i - n,i - n,this)
                }
            }, {
                key: "valid",
                value: function() {
                    return !0
                }
            }, {
                key: "eq",
                value: function(t) {
                    return this == t || t instanceof e && (this.spec.key && this.spec.key == t.spec.key || this.toDOM == t.toDOM && tm(this.spec, t.spec))
                }
            }, {
                key: "destroy",
                value: function(e) {
                    this.spec.destroy && this.spec.destroy(e)
                }
            }]),
            e
        }()
          , ty = function() {
            function e(t, n) {
                d(this, e),
                this.attrs = t,
                this.spec = n || tS
            }
            return f(e, [{
                key: "map",
                value: function(e, t, n, o) {
                    var r = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n
                      , i = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
                    return r >= i ? null : new tk(r,i,this)
                }
            }, {
                key: "valid",
                value: function(e, t) {
                    return t.from < t.to
                }
            }, {
                key: "eq",
                value: function(t) {
                    return this == t || t instanceof e && tm(this.attrs, t.attrs) && tm(this.spec, t.spec)
                }
            }, {
                key: "destroy",
                value: function() {}
            }], [{
                key: "is",
                value: function(t) {
                    return t.type instanceof e
                }
            }]),
            e
        }()
          , tb = function() {
            function e(t, n) {
                d(this, e),
                this.attrs = t,
                this.spec = n || tS
            }
            return f(e, [{
                key: "map",
                value: function(e, t, n, o) {
                    var r = e.mapResult(t.from + o, 1);
                    if (r.deleted)
                        return null;
                    var i = e.mapResult(t.to + o, -1);
                    return i.deleted || i.pos <= r.pos ? null : new tk(r.pos - n,i.pos - n,this)
                }
            }, {
                key: "valid",
                value: function(e, t) {
                    var n, o = e.content.findIndex(t.from), r = o.index, i = o.offset;
                    return i == t.from && !(n = e.child(r)).isText && i + n.nodeSize == t.to
                }
            }, {
                key: "eq",
                value: function(t) {
                    return this == t || t instanceof e && tm(this.attrs, t.attrs) && tm(this.spec, t.spec)
                }
            }, {
                key: "destroy",
                value: function() {}
            }]),
            e
        }()
          , tk = function() {
            function e(t, n, o) {
                d(this, e),
                this.from = t,
                this.to = n,
                this.type = o
            }
            return f(e, [{
                key: "copy",
                value: function(t, n) {
                    return new e(t,n,this.type)
                }
            }, {
                key: "eq",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
                }
            }, {
                key: "map",
                value: function(e, t, n) {
                    return this.type.map(e, this, t, n)
                }
            }, {
                key: "spec",
                get: function() {
                    return this.type.spec
                }
            }, {
                key: "inline",
                get: function() {
                    return this.type instanceof ty
                }
            }], [{
                key: "widget",
                value: function(t, n, o) {
                    return new e(t,t,new tg(n,o))
                }
            }, {
                key: "inline",
                value: function(t, n, o, r) {
                    return new e(t,n,new ty(o,r))
                }
            }, {
                key: "node",
                value: function(t, n, o, r) {
                    return new e(t,n,new tb(o,r))
                }
            }]),
            e
        }()
          , tw = []
          , tS = {}
          , tD = function() {
            function e(t, n) {
                d(this, e),
                this.local = t.length ? t : tw,
                this.children = n.length ? n : tw
            }
            return f(e, [{
                key: "find",
                value: function(e, t, n) {
                    var o = [];
                    return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n),
                    o
                }
            }, {
                key: "findInner",
                value: function(e, t, n, o, r) {
                    for (var i = 0; i < this.local.length; i++) {
                        var s = this.local[i];
                        s.from <= t && s.to >= e && (!r || r(s.spec)) && n.push(s.copy(s.from + o, s.to + o))
                    }
                    for (var a = 0; a < this.children.length; a += 3)
                        if (this.children[a] < t && this.children[a + 1] > e) {
                            var l = this.children[a] + 1;
                            this.children[a + 2].findInner(e - l, t - l, n, o + l, r)
                        }
                }
            }, {
                key: "map",
                value: function(e, t, n) {
                    return this == tN || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || tS)
                }
            }, {
                key: "mapInner",
                value: function(t, n, o, r, i) {
                    for (var s, a = 0; a < this.local.length; a++) {
                        var l = this.local[a].map(t, o, r);
                        l && l.type.valid(n, l) ? (s || (s = [])).push(l) : i.onRemove && i.onRemove(this.local[a].spec)
                    }
                    return this.children.length ? function(e, t, n, o, r, i, s) {
                        for (var a = e.slice(), l = function(e, t) {
                            var o = 0;
                            n.maps[e].forEach(function(e, n, i, s) {
                                for (var l = s - i - (n - e), c = 0; c < a.length; c += 3) {
                                    var d = a[c + 1];
                                    if (!(d < 0) && !(e > d + t - o)) {
                                        var u = a[c] + t - o;
                                        n >= u ? a[c + 1] = e <= u ? -2 : -1 : i >= r && l && (a[c] += l,
                                        a[c + 1] += l)
                                    }
                                }
                                o += l
                            }),
                            d = t = n.maps[e].map(t, -1)
                        }, c = 0, d = i; c < n.maps.length; c++)
                            l(c, d);
                        for (var u = !1, f = 0; f < a.length; f += 3)
                            if (a[f + 1] < 0) {
                                if (-2 == a[f + 1]) {
                                    u = !0,
                                    a[f + 1] = -1;
                                    continue
                                }
                                var h = n.map(e[f] + i)
                                  , p = h - r;
                                if (p < 0 || p >= o.content.size) {
                                    u = !0;
                                    continue
                                }
                                var v = n.map(e[f + 1] + i, -1) - r
                                  , m = o.content.findIndex(p)
                                  , g = m.index
                                  , y = m.offset
                                  , b = o.maybeChild(g);
                                if (b && y == p && y + b.nodeSize == v) {
                                    var k = a[f + 2].mapInner(n, b, h + 1, e[f] + i + 1, s);
                                    k != tN ? (a[f] = p,
                                    a[f + 1] = v,
                                    a[f + 2] = k) : (a[f + 1] = -2,
                                    u = !0)
                                } else
                                    u = !0
                            }
                        if (u) {
                            var w = tT(function(e, t, n, o, r, i, s) {
                                for (var a = 0; a < e.length; a += 3)
                                    -1 == e[a + 1] && function e(t, i) {
                                        for (var a = 0; a < t.local.length; a++) {
                                            var l = t.local[a].map(o, r, i);
                                            l ? n.push(l) : s.onRemove && s.onRemove(t.local[a].spec)
                                        }
                                        for (var c = 0; c < t.children.length; c += 3)
                                            e(t.children[c + 2], t.children[c] + i + 1)
                                    }(e[a + 2], t[a] + i + 1);
                                return n
                            }(a, e, t, n, r, i, s), o, 0, s);
                            t = w.local;
                            for (var S = 0; S < a.length; S += 3)
                                a[S + 1] < 0 && (a.splice(S, 3),
                                S -= 3);
                            for (var D = 0, N = 0; D < w.children.length; D += 3) {
                                for (var O = w.children[D]; N < a.length && a[N] < O; )
                                    N += 3;
                                a.splice(N, 0, w.children[D], w.children[D + 1], w.children[D + 2])
                            }
                        }
                        return new tD(t.sort(tE),a)
                    }(this.children, s || [], t, n, o, r, i) : s ? new e(s.sort(tE),tw) : tN
                }
            }, {
                key: "add",
                value: function(t, n) {
                    return n.length ? this == tN ? e.create(t, n) : this.addInner(t, n, 0) : this
                }
            }, {
                key: "addInner",
                value: function(t, n, o) {
                    var r, i = this, s = 0;
                    t.forEach(function(e, t) {
                        var a, l = t + o;
                        if (a = tM(n, e, l)) {
                            for (r || (r = i.children.slice()); s < r.length && r[s] < t; )
                                s += 3;
                            r[s] == t ? r[s + 2] = r[s + 2].addInner(e, a, l + 1) : r.splice(s, 0, t, t + e.nodeSize, tT(a, e, l + 1, tS)),
                            s += 3
                        }
                    });
                    for (var a = tC(s ? tx(n) : n, -o), l = 0; l < a.length; l++)
                        a[l].type.valid(t, a[l]) || a.splice(l--, 1);
                    return new e(a.length ? this.local.concat(a).sort(tE) : this.local,r || this.children)
                }
            }, {
                key: "remove",
                value: function(e) {
                    return 0 == e.length || this == tN ? this : this.removeInner(e, 0)
                }
            }, {
                key: "removeInner",
                value: function(t, n) {
                    for (var o = this.children, r = this.local, i = 0; i < o.length; i += 3) {
                        for (var s, a = void 0, l = o[i] + n, c = o[i + 1] + n, d = 0; d < t.length; d++)
                            (s = t[d]) && s.from > l && s.to < c && (t[d] = null,
                            (a || (a = [])).push(s));
                        if (a) {
                            o == this.children && (o = this.children.slice());
                            var u = o[i + 2].removeInner(a, l + 1);
                            u != tN ? o[i + 2] = u : (o.splice(i, 3),
                            i -= 3)
                        }
                    }
                    if (r.length) {
                        for (var f, h = 0; h < t.length; h++)
                            if (f = t[h])
                                for (var p = 0; p < r.length; p++)
                                    r[p].eq(f, n) && (r == this.local && (r = this.local.slice()),
                                    r.splice(p--, 1))
                    }
                    return o == this.children && r == this.local ? this : r.length || o.length ? new e(r,o) : tN
                }
            }, {
                key: "forChild",
                value: function(t, n) {
                    if (this == tN)
                        return this;
                    if (n.isLeaf)
                        return e.empty;
                    for (var o, r, i = 0; i < this.children.length; i += 3)
                        if (this.children[i] >= t) {
                            this.children[i] == t && (o = this.children[i + 2]);
                            break
                        }
                    for (var s = t + 1, a = s + n.content.size, l = 0; l < this.local.length; l++) {
                        var c = this.local[l];
                        if (c.from < a && c.to > s && c.type instanceof ty) {
                            var d = Math.max(s, c.from) - s
                              , u = Math.min(a, c.to) - s;
                            d < u && (r || (r = [])).push(c.copy(d, u))
                        }
                    }
                    if (r) {
                        var f = new e(r.sort(tE),tw);
                        return o ? new tO([f, o]) : f
                    }
                    return o || tN
                }
            }, {
                key: "eq",
                value: function(t) {
                    if (this == t)
                        return !0;
                    if (!(t instanceof e) || this.local.length != t.local.length || this.children.length != t.children.length)
                        return !1;
                    for (var n = 0; n < this.local.length; n++)
                        if (!this.local[n].eq(t.local[n]))
                            return !1;
                    for (var o = 0; o < this.children.length; o += 3)
                        if (this.children[o] != t.children[o] || this.children[o + 1] != t.children[o + 1] || !this.children[o + 2].eq(t.children[o + 2]))
                            return !1;
                    return !0
                }
            }, {
                key: "locals",
                value: function(e) {
                    return tP(this.localsInner(e))
                }
            }, {
                key: "localsInner",
                value: function(e) {
                    if (this == tN)
                        return tw;
                    if (e.inlineContent || !this.local.some(ty.is))
                        return this.local;
                    for (var t = [], n = 0; n < this.local.length; n++)
                        this.local[n].type instanceof ty || t.push(this.local[n]);
                    return t
                }
            }], [{
                key: "create",
                value: function(e, t) {
                    return t.length ? tT(t, e, 0, tS) : tN
                }
            }]),
            e
        }();
        tD.empty = new tD([],[]),
        tD.removeOverlap = tP;
        var tN = tD.empty
          , tO = function() {
            function e(t) {
                d(this, e),
                this.members = t
            }
            return f(e, [{
                key: "map",
                value: function(t, n) {
                    var o = this.members.map(function(e) {
                        return e.map(t, n, tS)
                    });
                    return e.from(o)
                }
            }, {
                key: "forChild",
                value: function(t, n) {
                    if (n.isLeaf)
                        return tD.empty;
                    for (var o = [], r = 0; r < this.members.length; r++) {
                        var i = this.members[r].forChild(t, n);
                        i != tN && (i instanceof e ? o = o.concat(i.members) : o.push(i))
                    }
                    return e.from(o)
                }
            }, {
                key: "eq",
                value: function(t) {
                    if (!(t instanceof e) || t.members.length != this.members.length)
                        return !1;
                    for (var n = 0; n < this.members.length; n++)
                        if (!this.members[n].eq(t.members[n]))
                            return !1;
                    return !0
                }
            }, {
                key: "locals",
                value: function(e) {
                    for (var t, n = !0, o = 0; o < this.members.length; o++) {
                        var r = this.members[o].localsInner(e);
                        if (r.length) {
                            if (t) {
                                n && (t = t.slice(),
                                n = !1);
                                for (var i = 0; i < r.length; i++)
                                    t.push(r[i])
                            } else
                                t = r
                        }
                    }
                    return t ? tP(n ? t : t.sort(tE)) : tw
                }
            }], [{
                key: "from",
                value: function(t) {
                    switch (t.length) {
                    case 0:
                        return tN;
                    case 1:
                        return t[0];
                    default:
                        return new e(t.every(function(e) {
                            return e instanceof tD
                        }) ? t : t.reduce(function(e, t) {
                            return e.concat(t instanceof tD ? t : t.members)
                        }, []))
                    }
                }
            }]),
            e
        }();
        function tC(e, t) {
            if (!t || !e.length)
                return e;
            for (var n = [], o = 0; o < e.length; o++) {
                var r = e[o];
                n.push(new tk(r.from + t,r.to + t,r.type))
            }
            return n
        }
        function tM(e, t, n) {
            if (t.isLeaf)
                return null;
            for (var o, r = n + t.nodeSize, i = null, s = 0; s < e.length; s++)
                (o = e[s]) && o.from > n && o.to < r && ((i || (i = [])).push(o),
                e[s] = null);
            return i
        }
        function tx(e) {
            for (var t = [], n = 0; n < e.length; n++)
                null != e[n] && t.push(e[n]);
            return t
        }
        function tT(e, t, n, o) {
            var r = []
              , i = !1;
            t.forEach(function(t, s) {
                var a = tM(e, t, s + n);
                if (a) {
                    i = !0;
                    var l = tT(a, t, n + s + 1, o);
                    l != tN && r.push(s, s + t.nodeSize, l)
                }
            });
            for (var s = tC(i ? tx(e) : e, -n).sort(tE), a = 0; a < s.length; a++)
                s[a].type.valid(t, s[a]) || (o.onRemove && o.onRemove(s[a].spec),
                s.splice(a--, 1));
            return s.length || r.length ? new tD(s,r) : tN
        }
        function tE(e, t) {
            return e.from - t.from || e.to - t.to
        }
        function tP(e) {
            for (var t = e, n = 0; n < t.length - 1; n++) {
                var o = t[n];
                if (o.from != o.to)
                    for (var r = n + 1; r < t.length; r++) {
                        var i = t[r];
                        if (i.from == o.from) {
                            i.to != o.to && (t == e && (t = e.slice()),
                            t[r] = i.copy(i.from, o.to),
                            tA(t, r + 1, i.copy(o.to, i.to)));
                            continue
                        }
                        i.from < o.to && (t == e && (t = e.slice()),
                        t[n] = o.copy(o.from, i.from),
                        tA(t, r, o.copy(i.from, o.to)));
                        break
                    }
            }
            return t
        }
        function tA(e, t, n) {
            for (; t < e.length && tE(n, e[t]) > 0; )
                t++;
            e.splice(t, 0, n)
        }
        function tV(e) {
            var t = [];
            return e.someProp("decorations", function(n) {
                var o = n(e.state);
                o && o != tN && t.push(o)
            }),
            e.cursorWrapper && t.push(tD.create(e.state.doc, [e.cursorWrapper.deco])),
            tO.from(t)
        }
        var tR = {
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributes: !0,
            attributeOldValue: !0,
            subtree: !0
        }
          , tB = A && V <= 11
          , tF = function() {
            function e() {
                d(this, e),
                this.anchorNode = null,
                this.anchorOffset = 0,
                this.focusNode = null,
                this.focusOffset = 0
            }
            return f(e, [{
                key: "set",
                value: function(e) {
                    this.anchorNode = e.anchorNode,
                    this.anchorOffset = e.anchorOffset,
                    this.focusNode = e.focusNode,
                    this.focusOffset = e.focusOffset
                }
            }, {
                key: "clear",
                value: function() {
                    this.anchorNode = this.focusNode = null
                }
            }, {
                key: "eq",
                value: function(e) {
                    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
                }
            }]),
            e
        }()
          , tz = function() {
            function e(t, n) {
                var o = this;
                d(this, e),
                this.view = t,
                this.handleDOMChange = n,
                this.queue = [],
                this.flushingSoon = -1,
                this.observer = null,
                this.currentSelection = new tF,
                this.onCharData = null,
                this.suppressingSelectionUpdates = !1,
                this.observer = window.MutationObserver && new window.MutationObserver(function(e) {
                    for (var t = 0; t < e.length; t++)
                        o.queue.push(e[t]);
                    A && V <= 11 && e.some(function(e) {
                        return "childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length
                    }) ? o.flushSoon() : o.flush()
                }
                ),
                tB && (this.onCharData = function(e) {
                    o.queue.push({
                        target: e.target,
                        type: "characterData",
                        oldValue: e.prevValue
                    }),
                    o.flushSoon()
                }
                ),
                this.onSelectionChange = this.onSelectionChange.bind(this)
            }
            return f(e, [{
                key: "flushSoon",
                value: function() {
                    var e = this;
                    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(function() {
                        e.flushingSoon = -1,
                        e.flush()
                    }, 20))
                }
            }, {
                key: "forceFlush",
                value: function() {
                    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon),
                    this.flushingSoon = -1,
                    this.flush())
                }
            }, {
                key: "start",
                value: function() {
                    this.observer && (this.observer.takeRecords(),
                    this.observer.observe(this.view.dom, tR)),
                    this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
                    this.connectSelection()
                }
            }, {
                key: "stop",
                value: function() {
                    var e = this;
                    if (this.observer) {
                        var t = this.observer.takeRecords();
                        if (t.length) {
                            for (var n = 0; n < t.length; n++)
                                this.queue.push(t[n]);
                            window.setTimeout(function() {
                                return e.flush()
                            }, 20)
                        }
                        this.observer.disconnect()
                    }
                    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData),
                    this.disconnectSelection()
                }
            }, {
                key: "connectSelection",
                value: function() {
                    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
                }
            }, {
                key: "disconnectSelection",
                value: function() {
                    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
                }
            }, {
                key: "suppressSelectionUpdates",
                value: function() {
                    var e = this;
                    this.suppressingSelectionUpdates = !0,
                    setTimeout(function() {
                        return e.suppressingSelectionUpdates = !1
                    }, 50)
                }
            }, {
                key: "onSelectionChange",
                value: function() {
                    if (eB(this.view)) {
                        if (this.suppressingSelectionUpdates)
                            return eM(this.view);
                        if (A && V <= 11 && !this.view.state.selection.empty) {
                            var e = this.view.domSelectionRange();
                            if (e.focusNode && k(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
                                return this.flushSoon()
                        }
                        this.flush()
                    }
                }
            }, {
                key: "setCurSelection",
                value: function() {
                    this.currentSelection.set(this.view.domSelectionRange())
                }
            }, {
                key: "ignoreSelectionChange",
                value: function(e) {
                    if (!e.focusNode)
                        return !0;
                    for (var t, n = new Set, o = e.focusNode; o; o = g(o))
                        n.add(o);
                    for (var r = e.anchorNode; r; r = g(r))
                        if (n.has(r)) {
                            t = r;
                            break
                        }
                    var i = t && this.view.docView.nearestDesc(t);
                    if (i && i.ignoreMutation({
                        type: "selection",
                        target: 3 == t.nodeType ? t.parentNode : t
                    }))
                        return this.setCurSelection(),
                        !0
                }
            }, {
                key: "flush",
                value: function() {
                    var e = this.view;
                    if (e.docView && !(this.flushingSoon > -1)) {
                        var t = this.observer ? this.observer.takeRecords() : [];
                        this.queue.length && (t = this.queue.concat(t),
                        this.queue.length = 0);
                        var n = e.domSelectionRange()
                          , o = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && eB(e) && !this.ignoreSelectionChange(n)
                          , r = -1
                          , i = -1
                          , s = !1
                          , a = [];
                        if (e.editable)
                            for (var l = 0; l < t.length; l++) {
                                var c = this.registerMutation(t[l], a);
                                c && (r = r < 0 ? c.from : Math.min(c.from, r),
                                i = i < 0 ? c.to : Math.max(c.to, i),
                                c.typeOver && (s = !0))
                            }
                        if (R && a.length > 1) {
                            var d = a.filter(function(e) {
                                return "BR" == e.nodeName
                            });
                            if (2 == d.length) {
                                var u = d[0]
                                  , f = d[1];
                                u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove()
                            }
                        }
                        var p = null;
                        r < 0 && o && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && N(n) && (p = eO(e)) && p.eq(h.Selection.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0,
                        eM(e),
                        this.currentSelection.set(n),
                        e.scrollToSelection()) : (r > -1 || o) && (r > -1 && (e.docView.markDirty(r, i),
                        tI.has(e) || (tI.set(e, null),
                        -1 === ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace)) || (e.requiresGeckoHackNode = R,
                        tL || (console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."),
                        tL = !0))),
                        this.handleDOMChange(r, i, s, a),
                        e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || eM(e),
                        this.currentSelection.set(n))
                    }
                }
            }, {
                key: "registerMutation",
                value: function(e, t) {
                    if (t.indexOf(e.target) > -1)
                        return null;
                    var n = this.view.docView.nearestDesc(e.target);
                    if ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e))
                        return null;
                    if ("childList" == e.type) {
                        for (var o = 0; o < e.addedNodes.length; o++)
                            t.push(e.addedNodes[o]);
                        if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target))
                            return {
                                from: n.posBefore,
                                to: n.posAfter
                            };
                        var r = e.previousSibling
                          , i = e.nextSibling;
                        if (A && V <= 11 && e.addedNodes.length)
                            for (var s = 0; s < e.addedNodes.length; s++) {
                                var a = e.addedNodes[s]
                                  , l = a.previousSibling
                                  , c = a.nextSibling;
                                (!l || 0 > Array.prototype.indexOf.call(e.addedNodes, l)) && (r = l),
                                (!c || 0 > Array.prototype.indexOf.call(e.addedNodes, c)) && (i = c)
                            }
                        var d = r && r.parentNode == e.target ? m(r) + 1 : 0
                          , u = n.localPosFromDOM(e.target, d, -1)
                          , f = i && i.parentNode == e.target ? m(i) : e.target.childNodes.length;
                        return {
                            from: u,
                            to: n.localPosFromDOM(e.target, f, 1)
                        }
                    }
                    return "attributes" == e.type ? {
                        from: n.posAtStart - n.border,
                        to: n.posAtEnd + n.border
                    } : {
                        from: n.posAtStart,
                        to: n.posAtEnd,
                        typeOver: e.target.nodeValue == e.oldValue
                    }
                }
            }]),
            e
        }()
          , tI = new WeakMap
          , tL = !1;
        function tq(e) {
            var t = e.pmViewDesc;
            if (t)
                return t.parseRule();
            if ("BR" == e.nodeName && e.parentNode) {
                if (I && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
                    var n = document.createElement("div");
                    return n.appendChild(document.createElement("li")),
                    {
                        skip: n
                    }
                }
                if (e.parentNode.lastChild == e || I && /^(tr|table)$/i.test(e.parentNode.nodeName))
                    return {
                        ignore: !0
                    }
            } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
                return {
                    ignore: !0
                };
            return null
        }
        function tK(e, t, n) {
            return Math.max(n.anchor, n.head) > t.content.size ? null : eR(e, t.resolve(n.anchor), t.resolve(n.head))
        }
        function t_(e, t, n) {
            for (var o = e.depth, r = t ? e.end() : e.pos; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount); )
                o--,
                r++,
                t = !1;
            if (n)
                for (var i = e.node(o).maybeChild(e.indexAfter(o)); i && !i.isLeaf; )
                    i = i.firstChild,
                    r++;
            return r
        }
        var t$ = function() {
            function e(t, n) {
                var o = this;
                d(this, e),
                this._root = null,
                this.focused = !1,
                this.trackWrites = null,
                this.mounted = !1,
                this.markCursor = null,
                this.cursorWrapper = null,
                this.lastSelectedViewDesc = void 0,
                this.input = new e7,
                this.prevDirectPlugins = [],
                this.pluginViews = [],
                this.requiresGeckoHackNode = !1,
                this.dragging = null,
                this._props = n,
                this.state = n.state,
                this.directPlugins = n.plugins || [],
                this.directPlugins.forEach(tU),
                this.dispatch = this.dispatch.bind(this),
                this.dom = t && t.mount || document.createElement("div"),
                t && (t.appendChild ? t.appendChild(this.dom) : "function" == typeof t ? t(this.dom) : t.mount && (this.mounted = !0)),
                this.editable = tj(this),
                tH(this),
                this.nodeViews = tG(this),
                this.docView = eu(this.state.doc, tW(this), tV(this), this.dom, this),
                this.domObserver = new tz(this,function(e, t, n, r) {
                    return function(e, t, n, o, r) {
                        if (t < 0) {
                            var i, s, a, l, c, d, u = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null, f = eO(e, u);
                            if (f && !e.state.selection.eq(f)) {
                                if (F && K && 13 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", function(t) {
                                    return t(e, O(13, "Enter"))
                                }))
                                    return;
                                var v = e.state.tr.setSelection(f);
                                "pointer" == u ? v.setMeta("pointer", !0) : "key" == u && v.scrollIntoView(),
                                e.dispatch(v)
                            }
                            return
                        }
                        var m = e.state.doc.resolve(t)
                          , g = m.sharedDepth(n);
                        t = m.before(g + 1),
                        n = e.state.doc.resolve(n).after(g + 1);
                        var y = e.state.selection
                          , b = function(e, t, n) {
                            var o, r = e.docView.parseRange(t, n), i = r.node, s = r.fromOffset, a = r.toOffset, l = r.from, c = r.to, d = e.domSelectionRange(), u = d.anchorNode;
                            if (u && e.dom.contains(1 == u.nodeType ? u : u.parentNode) && (o = [{
                                node: u,
                                offset: d.anchorOffset
                            }],
                            N(d) || o.push({
                                node: d.focusNode,
                                offset: d.focusOffset
                            })),
                            F && 8 === e.input.lastKeyCode)
                                for (var f = a; f > s; f--) {
                                    var h = i.childNodes[f - 1]
                                      , v = h.pmViewDesc;
                                    if ("BR" == h.nodeName && !v) {
                                        a = f;
                                        break
                                    }
                                    if (!v || v.size)
                                        break
                                }
                            var m = e.state.doc
                              , g = e.someProp("domParser") || p.DOMParser.fromSchema(e.state.schema)
                              , y = m.resolve(l)
                              , b = null
                              , k = g.parse(i, {
                                topNode: y.parent,
                                topMatch: y.parent.contentMatchAt(y.index()),
                                topOpen: !0,
                                from: s,
                                to: a,
                                preserveWhitespace: "pre" != y.parent.type.whitespace || "full",
                                findPositions: o,
                                ruleFromNode: tq,
                                context: y
                            });
                            if (o && null != o[0].pos) {
                                var w = o[0].pos
                                  , S = o[1] && o[1].pos;
                                null == S && (S = w),
                                b = {
                                    anchor: w + l,
                                    head: S + l
                                }
                            }
                            return {
                                doc: k,
                                sel: b,
                                from: l,
                                to: c
                            }
                        }(e, t, n)
                          , k = e.state.doc
                          , w = k.slice(b.from, b.to);
                        8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? (i = e.state.selection.to,
                        s = "end") : (i = e.state.selection.from,
                        s = "start"),
                        e.input.lastKeyCode = null;
                        var S = function(e, t, n, o, r) {
                            var i = e.findDiffStart(t, n);
                            if (null == i)
                                return null;
                            var s = e.findDiffEnd(t, n + e.size, n + t.size)
                              , a = s.a
                              , l = s.b;
                            if ("end" == r) {
                                var c = Math.max(0, i - Math.min(a, l));
                                o -= a + c - i
                            }
                            if (a < i && e.size < t.size) {
                                var d = o <= i && o >= a ? i - o : 0;
                                i -= d,
                                l = i + (l - a),
                                a = i
                            } else if (l < i) {
                                var u = o <= i && o >= l ? i - o : 0;
                                i -= u,
                                a = i + (a - l),
                                l = i
                            }
                            return {
                                start: i,
                                endA: a,
                                endB: l
                            }
                        }(w.content, b.doc.content, b.from, i, s);
                        if ((L && e.input.lastIOSEnter > Date.now() - 225 || K) && r.some(function(e) {
                            return "DIV" == e.nodeName || "P" == e.nodeName || "LI" == e.nodeName
                        }) && (!S || S.endA >= S.endB) && e.someProp("handleKeyDown", function(t) {
                            return t(e, O(13, "Enter"))
                        })) {
                            e.input.lastIOSEnter = 0;
                            return
                        }
                        if (!S) {
                            if (o && y instanceof h.TextSelection && !y.empty && y.$head.sameParent(y.$anchor) && !e.composing && !(b.sel && b.sel.anchor != b.sel.head))
                                S = {
                                    start: y.from,
                                    endA: y.to,
                                    endB: y.to
                                };
                            else {
                                if (b.sel) {
                                    var D = tK(e, e.state.doc, b.sel);
                                    D && !D.eq(e.state.selection) && e.dispatch(e.state.tr.setSelection(D))
                                }
                                return
                            }
                        }
                        if (F && e.cursorWrapper && b.sel && b.sel.anchor == e.cursorWrapper.deco.from && b.sel.head == b.sel.anchor) {
                            var C = S.endB - S.start;
                            b.sel = {
                                anchor: b.sel.anchor + C,
                                head: b.sel.anchor + C
                            }
                        }
                        e.input.domChangeCount++,
                        e.state.selection.from < e.state.selection.to && S.start == S.endB && e.state.selection instanceof h.TextSelection && (S.start > e.state.selection.from && S.start <= e.state.selection.from + 2 && e.state.selection.from >= b.from ? S.start = e.state.selection.from : S.endA < e.state.selection.to && S.endA >= e.state.selection.to - 2 && e.state.selection.to <= b.to && (S.endB += e.state.selection.to - S.endA,
                        S.endA = e.state.selection.to)),
                        A && V <= 11 && S.endB == S.start + 1 && S.endA == S.start && S.start > b.from && " \xa0" == b.doc.textBetween(S.start - b.from - 1, S.start - b.from + 1) && (S.start--,
                        S.endA--,
                        S.endB--);
                        var M = b.doc.resolveNoCache(S.start - b.from)
                          , x = b.doc.resolveNoCache(S.endB - b.from)
                          , T = k.resolve(S.start)
                          , E = M.sameParent(x) && M.parent.inlineContent && T.end() >= S.endA;
                        if ((L && e.input.lastIOSEnter > Date.now() - 225 && (!E || r.some(function(e) {
                            return "DIV" == e.nodeName || "P" == e.nodeName
                        })) || !E && M.pos < b.doc.content.size && (a = h.Selection.findFrom(b.doc.resolve(M.pos + 1), 1, !0)) && a.head == x.pos) && e.someProp("handleKeyDown", function(t) {
                            return t(e, O(13, "Enter"))
                        })) {
                            e.input.lastIOSEnter = 0;
                            return
                        }
                        if (e.state.selection.anchor > S.start && function(e, t, n, o, r) {
                            if (!o.parent.isTextblock || n - t <= r.pos - o.pos || t_(o, !0, !1) < r.pos)
                                return !1;
                            var i = e.resolve(t);
                            if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
                                return !1;
                            var s = e.resolve(t_(i, !0, !0));
                            return !(!s.parent.isTextblock || s.pos > n || t_(s, !0, !1) < n) && o.parent.content.cut(o.parentOffset).eq(s.parent.content)
                        }(k, S.start, S.endA, M, x) && e.someProp("handleKeyDown", function(t) {
                            return t(e, O(8, "Backspace"))
                        })) {
                            K && F && e.domObserver.suppressSelectionUpdates();
                            return
                        }
                        F && K && S.endB == S.start && (e.input.lastAndroidDelete = Date.now()),
                        K && !E && M.start() != x.start() && 0 == x.parentOffset && M.depth == x.depth && b.sel && b.sel.anchor == b.sel.head && b.sel.head == S.endA && (S.endB -= 2,
                        x = b.doc.resolveNoCache(S.endB - b.from),
                        setTimeout(function() {
                            e.someProp("handleKeyDown", function(t) {
                                return t(e, O(13, "Enter"))
                            })
                        }, 20));
                        var P = S.start
                          , R = S.endA;
                        if (E) {
                            if (M.pos == x.pos)
                                A && V <= 11 && 0 == M.parentOffset && (e.domObserver.suppressSelectionUpdates(),
                                setTimeout(function() {
                                    return eM(e)
                                }, 20)),
                                l = e.state.tr.delete(P, R),
                                c = k.resolve(S.start).marksAcross(k.resolve(S.endA));
                            else if (S.endA == S.endB && (d = function(e, t) {
                                for (var n, o, r, i = e.firstChild.marks, s = t.firstChild.marks, a = i, l = s, c = 0; c < s.length; c++)
                                    a = s[c].removeFromSet(a);
                                for (var d = 0; d < i.length; d++)
                                    l = i[d].removeFromSet(l);
                                if (1 == a.length && 0 == l.length)
                                    o = a[0],
                                    n = "add",
                                    r = function(e) {
                                        return e.mark(o.addToSet(e.marks))
                                    }
                                    ;
                                else {
                                    if (0 != a.length || 1 != l.length)
                                        return null;
                                    o = l[0],
                                    n = "remove",
                                    r = function(e) {
                                        return e.mark(o.removeFromSet(e.marks))
                                    }
                                }
                                for (var u = [], f = 0; f < t.childCount; f++)
                                    u.push(r(t.child(f)));
                                if (p.Fragment.from(u).eq(e))
                                    return {
                                        mark: o,
                                        type: n
                                    }
                            }(M.parent.content.cut(M.parentOffset, x.parentOffset), T.parent.content.cut(T.parentOffset, S.endA - T.start()))))
                                l = e.state.tr,
                                "add" == d.type ? l.addMark(P, R, d.mark) : l.removeMark(P, R, d.mark);
                            else if (M.parent.child(M.index()).isText && M.index() == x.index() - (x.textOffset ? 0 : 1)) {
                                var B = M.parent.textBetween(M.parentOffset, x.parentOffset);
                                if (e.someProp("handleTextInput", function(t) {
                                    return t(e, P, R, B)
                                }))
                                    return;
                                l = e.state.tr.insertText(B, P, R)
                            }
                        }
                        if (l || (l = e.state.tr.replace(P, R, b.doc.slice(S.start - b.from, S.endB - b.from))),
                        b.sel) {
                            var z = tK(e, l.doc, b.sel);
                            z && !(F && K && e.composing && z.empty && (S.start != S.endB || e.input.lastAndroidDelete < Date.now() - 100) && (z.head == P || z.head == l.mapping.map(R) - 1) || A && z.empty && z.head == P) && l.setSelection(z)
                        }
                        c && l.ensureMarks(c),
                        e.dispatch(l.scrollIntoView())
                    }(o, e, t, n, r)
                }
                ),
                this.domObserver.start(),
                function(e) {
                    for (var t in e5)
                        !function(t) {
                            var n = e5[t];
                            e.dom.addEventListener(t, e.input.eventHandlers[t] = function(t) {
                                !function(e, t) {
                                    if (!t.bubbles)
                                        return !0;
                                    if (t.defaultPrevented)
                                        return !1;
                                    for (var n = t.target; n != e.dom; n = n.parentNode)
                                        if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(t))
                                            return !1;
                                    return !0
                                }(e, t) || te(e, t) || !e.editable && t.type in e8 || n(e, t)
                            }
                            , e6[t] ? {
                                passive: !0
                            } : void 0)
                        }(t);
                    I && e.dom.addEventListener("input", function() {
                        return null
                    }),
                    e4(e)
                }(this),
                this.updatePluginViews()
            }
            return f(e, [{
                key: "composing",
                get: function() {
                    return this.input.composing
                }
            }, {
                key: "props",
                get: function() {
                    if (this._props.state != this.state) {
                        var e = this._props;
                        for (var t in this._props = {},
                        e)
                            this._props[t] = e[t];
                        this._props.state = this.state
                    }
                    return this._props
                }
            }, {
                key: "update",
                value: function(e) {
                    e.handleDOMEvents != this._props.handleDOMEvents && e4(this);
                    var t = this._props;
                    this._props = e,
                    e.plugins && (e.plugins.forEach(tU),
                    this.directPlugins = e.plugins),
                    this.updateStateInner(e.state, t)
                }
            }, {
                key: "setProps",
                value: function(e) {
                    var t = {};
                    for (var n in this._props)
                        t[n] = this._props[n];
                    for (var o in t.state = this.state,
                    e)
                        t[o] = e[o];
                    this.update(t)
                }
            }, {
                key: "updateState",
                value: function(e) {
                    this.updateStateInner(e, this._props)
                }
            }, {
                key: "updateStateInner",
                value: function(e, t) {
                    var n, o, r, i = this.state, s = !1, a = !1;
                    e.storedMarks && this.composing && (tc(this),
                    a = !0),
                    this.state = e;
                    var l = i.plugins != e.plugins || this._props.plugins != t.plugins;
                    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
                        var c = tG(this);
                        (function(e, t) {
                            var n = 0
                              , o = 0;
                            for (var r in e) {
                                if (e[r] != t[r])
                                    return !0;
                                n++
                            }
                            for (var i in t)
                                o++;
                            return n != o
                        }
                        )(c, this.nodeViews) && (this.nodeViews = c,
                        s = !0)
                    }
                    (l || t.handleDOMEvents != this._props.handleDOMEvents) && e4(this),
                    this.editable = tj(this),
                    tH(this);
                    var d = tV(this)
                      , u = tW(this)
                      , f = i.plugins == e.plugins || i.doc.eq(e.doc) ? e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve" : "reset"
                      , h = s || !this.docView.matchesNode(e.doc, u, d);
                    (h || !e.selection.eq(i.selection)) && (a = !0);
                    var p = "preserve" == f && a && null == this.dom.style.overflowAnchor && function(e) {
                        for (var t, n, o = e.dom.getBoundingClientRect(), r = Math.max(0, o.top), i = (o.left + o.right) / 2, s = r + 1; s < Math.min(innerHeight, o.bottom); s += 5) {
                            var a = e.root.elementFromPoint(i, s);
                            if (a && a != e.dom && e.dom.contains(a)) {
                                var l = a.getBoundingClientRect();
                                if (l.top >= r - 20) {
                                    t = a,
                                    n = l.top;
                                    break
                                }
                            }
                        }
                        return {
                            refDOM: t,
                            refTop: n,
                            stack: j(e.dom)
                        }
                    }(this);
                    if (a) {
                        this.domObserver.stop();
                        var v, m, g, y, b, w = h && (A || F) && !this.composing && !i.selection.empty && !e.selection.empty && (v = i.selection,
                        m = e.selection,
                        g = Math.min(v.$anchor.sharedDepth(v.head), m.$anchor.sharedDepth(m.head)),
                        v.$anchor.start(g) != m.$anchor.start(g));
                        if (h) {
                            var S = F ? this.trackWrites = this.domSelectionRange().focusNode : null;
                            (s || !this.docView.update(e.doc, u, d, this)) && (this.docView.updateOuterDeco([]),
                            this.docView.destroy(),
                            this.docView = eu(e.doc, u, d, this.dom, this)),
                            S && !this.trackWrites && (w = !0)
                        }
                        w || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && (y = this.docView.domFromPos(this.state.selection.anchor, 0),
                        b = this.domSelectionRange(),
                        k(y.node, y.offset, b.anchorNode, b.anchorOffset))) ? eM(this, w) : (eA(this, e.selection),
                        this.domObserver.setCurSelection()),
                        this.domObserver.start()
                    }
                    (this.updatePluginViews(i),
                    "reset" == f) ? this.dom.scrollTop = 0 : "to selection" == f ? this.scrollToSelection() : p && (n = p.refDOM,
                    o = p.refTop,
                    G(p.stack, 0 == (r = n ? n.getBoundingClientRect().top : 0) ? 0 : r - o))
                }
            }, {
                key: "scrollToSelection",
                value: function() {
                    var e = this
                      , t = this.domSelectionRange().focusNode;
                    if (this.someProp("handleScrollToSelection", function(t) {
                        return t(e)
                    }))
                        ;
                    else if (this.state.selection instanceof h.NodeSelection) {
                        var n = this.docView.domAfterPos(this.state.selection.from);
                        1 == n.nodeType && H(this, n.getBoundingClientRect(), t)
                    } else
                        H(this, this.coordsAtPos(this.state.selection.head, 1), t)
                }
            }, {
                key: "destroyPluginViews",
                value: function() {
                    for (var e; e = this.pluginViews.pop(); )
                        e.destroy && e.destroy()
                }
            }, {
                key: "updatePluginViews",
                value: function(e) {
                    if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
                        for (var t = 0; t < this.pluginViews.length; t++) {
                            var n = this.pluginViews[t];
                            n.update && n.update(this, e)
                        }
                    else {
                        this.prevDirectPlugins = this.directPlugins,
                        this.destroyPluginViews();
                        for (var o = 0; o < this.directPlugins.length; o++) {
                            var r = this.directPlugins[o];
                            r.spec.view && this.pluginViews.push(r.spec.view(this))
                        }
                        for (var i = 0; i < this.state.plugins.length; i++) {
                            var s = this.state.plugins[i];
                            s.spec.view && this.pluginViews.push(s.spec.view(this))
                        }
                    }
                }
            }, {
                key: "someProp",
                value: function(e, t) {
                    var n, o = this._props && this._props[e];
                    if (null != o && (n = t ? t(o) : o))
                        return n;
                    for (var r = 0; r < this.directPlugins.length; r++) {
                        var i = this.directPlugins[r].props[e];
                        if (null != i && (n = t ? t(i) : i))
                            return n
                    }
                    var s = this.state.plugins;
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var l = s[a].props[e];
                            if (null != l && (n = t ? t(l) : l))
                                return n
                        }
                }
            }, {
                key: "hasFocus",
                value: function() {
                    if (A) {
                        var e = this.root.activeElement;
                        if (e == this.dom)
                            return !0;
                        if (!e || !this.dom.contains(e))
                            return !1;
                        for (; e && this.dom != e && this.dom.contains(e); ) {
                            if ("false" == e.contentEditable)
                                return !1;
                            e = e.parentElement
                        }
                        return !0
                    }
                    return this.root.activeElement == this.dom
                }
            }, {
                key: "focus",
                value: function() {
                    this.domObserver.stop(),
                    this.editable && function(e) {
                        if (e.setActive)
                            return e.setActive();
                        if (U)
                            return e.focus(U);
                        var t = j(e);
                        e.focus(null == U ? {
                            get preventScroll() {
                                return U = {
                                    preventScroll: !0
                                },
                                !0
                            }
                        } : void 0),
                        U || (U = !1,
                        G(t, 0))
                    }(this.dom),
                    eM(this),
                    this.domObserver.start()
                }
            }, {
                key: "root",
                get: function() {
                    var e = this
                      , t = this._root;
                    if (null == t)
                        for (var n = function(t) {
                            if (9 == t.nodeType || 11 == t.nodeType && t.host)
                                return t.getSelection || (Object.getPrototypeOf(t).getSelection = function() {
                                    return t.ownerDocument.getSelection()
                                }
                                ),
                                {
                                    v: e._root = t
                                }
                        }, r = this.dom.parentNode; r; r = r.parentNode) {
                            var i = n(r);
                            if ("object" === o(i))
                                return i.v
                        }
                    return t || document
                }
            }, {
                key: "posAtCoords",
                value: function(e) {
                    return function(e, t) {
                        var n, o = e.dom.ownerDocument, r = 0;
                        if (o.caretPositionFromPoint)
                            try {
                                var i = o.caretPositionFromPoint(t.left, t.top);
                                i && (n = i.offsetNode,
                                r = i.offset)
                            } catch (e) {}
                        if (!n && o.caretRangeFromPoint) {
                            var s = o.caretRangeFromPoint(t.left, t.top);
                            s && (n = s.startContainer,
                            r = s.startOffset)
                        }
                        var a = (e.root.elementFromPoint ? e.root : o).elementFromPoint(t.left, t.top);
                        if (!a || !e.dom.contains(1 != a.nodeType ? a.parentNode : a)) {
                            var l = e.dom.getBoundingClientRect();
                            if (!X(t, l) || !(a = function e(t, n, o) {
                                var r = t.childNodes.length;
                                if (r && o.top < o.bottom)
                                    for (var i = Math.max(0, Math.min(r - 1, Math.floor(r * (n.top - o.top) / (o.bottom - o.top)) - 2)), s = i; ; ) {
                                        var a = t.childNodes[s];
                                        if (1 == a.nodeType)
                                            for (var l = a.getClientRects(), c = 0; c < l.length; c++) {
                                                var d = l[c];
                                                if (X(n, d))
                                                    return e(a, n, d)
                                            }
                                        if ((s = (s + 1) % r) == i)
                                            break
                                    }
                                return t
                            }(e.dom, t, l)))
                                return null
                        }
                        if (I)
                            for (var c = a; n && c; c = g(c))
                                c.draggable && (n = void 0);
                        if (a = (u = (d = a).parentNode) && /^li$/i.test(u.nodeName) && t.left < d.getBoundingClientRect().left ? u : d,
                        n) {
                            if (R && 1 == n.nodeType && (r = Math.min(r, n.childNodes.length)) < n.childNodes.length) {
                                var d, u, f, h, p = n.childNodes[r];
                                "IMG" == p.nodeName && (h = p.getBoundingClientRect()).right <= t.left && h.bottom > t.top && r++
                            }
                            n == e.dom && r == n.childNodes.length - 1 && 1 == n.lastChild.nodeType && t.top > n.lastChild.getBoundingClientRect().bottom ? f = e.state.doc.content.size : (0 == r || 1 != n.nodeType || "BR" != n.childNodes[r - 1].nodeName) && (f = function(e, t, n, o) {
                                for (var r = -1, i = t; i != e.dom; ) {
                                    var s = e.docView.nearestDesc(i, !0);
                                    if (!s)
                                        return null;
                                    if (1 == s.dom.nodeType && (s.node.isBlock && s.parent || !s.contentDOM)) {
                                        var a = s.dom.getBoundingClientRect();
                                        if (s.node.isBlock && s.parent && (a.left > o.left || a.top > o.top ? r = s.posBefore : (a.right < o.left || a.bottom < o.top) && (r = s.posAfter)),
                                        !s.contentDOM && r < 0)
                                            return (s.node.isBlock ? o.top < (a.top + a.bottom) / 2 : o.left < (a.left + a.right) / 2) ? s.posBefore : s.posAfter
                                    }
                                    i = s.dom.parentNode
                                }
                                return r > -1 ? r : e.docView.posFromDOM(t, n, -1)
                            }(e, n, r, t))
                        }
                        null == f && (f = function(e, t, n) {
                            var o = function e(t, n) {
                                for (var o, r, i = 2e8, s = 0, a = n.top, l = n.top, c = t.firstChild, d = 0; c; c = c.nextSibling,
                                d++) {
                                    var u = void 0;
                                    if (1 == c.nodeType)
                                        u = c.getClientRects();
                                    else {
                                        if (3 != c.nodeType)
                                            continue;
                                        u = b(c).getClientRects()
                                    }
                                    for (var f = 0; f < u.length; f++) {
                                        var h = u[f];
                                        if (h.top <= a && h.bottom >= l) {
                                            a = Math.max(h.bottom, a),
                                            l = Math.min(h.top, l);
                                            var p = h.left > n.left ? h.left - n.left : h.right < n.left ? n.left - h.right : 0;
                                            if (p < i) {
                                                o = c,
                                                i = p,
                                                r = p && 3 == o.nodeType ? {
                                                    left: h.right < n.left ? h.right : h.left,
                                                    top: n.top
                                                } : n,
                                                1 == c.nodeType && p && (s = d + (n.left >= (h.left + h.right) / 2 ? 1 : 0));
                                                continue
                                            }
                                        }
                                        !o && (n.left >= h.right && n.top >= h.top || n.left >= h.left && n.top >= h.bottom) && (s = d + 1)
                                    }
                                }
                                return o && 3 == o.nodeType ? function(e, t) {
                                    for (var n = e.nodeValue.length, o = document.createRange(), r = 0; r < n; r++) {
                                        o.setEnd(e, r + 1),
                                        o.setStart(e, r);
                                        var i = Y(o, 1);
                                        if (i.top != i.bottom && X(t, i))
                                            return {
                                                node: e,
                                                offset: r + (t.left >= (i.left + i.right) / 2 ? 1 : 0)
                                            }
                                    }
                                    return {
                                        node: e,
                                        offset: 0
                                    }
                                }(o, r) : !o || i && 1 == o.nodeType ? {
                                    node: t,
                                    offset: s
                                } : e(o, r)
                            }(t, n)
                              , r = o.node
                              , i = o.offset
                              , s = -1;
                            if (1 == r.nodeType && !r.firstChild) {
                                var a = r.getBoundingClientRect();
                                s = a.left != a.right && n.left > (a.left + a.right) / 2 ? 1 : -1
                            }
                            return e.docView.posFromDOM(r, i, s)
                        }(e, a, t));
                        var v = e.docView.nearestDesc(a, !0);
                        return {
                            pos: f,
                            inside: v ? v.posAtStart - v.border : -1
                        }
                    }(this, e)
                }
            }, {
                key: "coordsAtPos",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return Q(this, e, t)
                }
            }, {
                key: "domAtPos",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return this.docView.domFromPos(e, t)
                }
            }, {
                key: "nodeDOM",
                value: function(e) {
                    var t = this.docView.descAt(e);
                    return t ? t.nodeDOM : null
                }
            }, {
                key: "posAtDOM",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1
                      , o = this.docView.posFromDOM(e, t, n);
                    if (null == o)
                        throw RangeError("DOM position not inside the editor");
                    return o
                }
            }, {
                key: "endOfTextblock",
                value: function(e, t) {
                    var n, o, r, i, s;
                    return n = this,
                    o = t || this.state,
                    r = e,
                    eo == o && er == r ? ei : (eo = o,
                    er = r,
                    ei = "up" == r || "down" == r ? (i = o.selection,
                    s = "up" == r ? i.$from : i.$to,
                    et(n, o, function() {
                        for (var e = n.docView.domFromPos(s.pos, "up" == r ? -1 : 1).node; ; ) {
                            var t = n.docView.nearestDesc(e, !0);
                            if (!t)
                                break;
                            if (t.node.isBlock) {
                                e = t.contentDOM || t.dom;
                                break
                            }
                            e = t.dom.parentNode
                        }
                        for (var o = Q(n, s.pos, 1), i = e.firstChild; i; i = i.nextSibling) {
                            var a = void 0;
                            if (1 == i.nodeType)
                                a = i.getClientRects();
                            else {
                                if (3 != i.nodeType)
                                    continue;
                                a = b(i, 0, i.nodeValue.length).getClientRects()
                            }
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                if (c.bottom > c.top + 1 && ("up" == r ? o.top - c.top > (c.bottom - o.top) * 2 : c.bottom - o.bottom > (o.bottom - c.top) * 2))
                                    return !1
                            }
                        }
                        return !0
                    })) : function(e, t, n) {
                        var o = t.selection.$head;
                        if (!o.parent.isTextblock)
                            return !1;
                        var r = o.parentOffset
                          , i = r == o.parent.content.size
                          , s = e.domSelection();
                        return en.test(o.parent.textContent) && s.modify ? et(e, t, function() {
                            var t = e.domSelectionRange()
                              , r = t.focusNode
                              , i = t.focusOffset
                              , a = t.anchorNode
                              , l = t.anchorOffset
                              , c = s.caretBidiLevel;
                            s.modify("move", n, "character");
                            var d = o.depth ? e.docView.domAfterPos(o.before()) : e.dom
                              , u = e.domSelectionRange()
                              , f = u.focusNode
                              , h = u.focusOffset
                              , p = f && !d.contains(1 == f.nodeType ? f : f.parentNode) || r == f && i == h;
                            try {
                                s.collapse(a, l),
                                r && (r != a || i != l) && s.extend && s.extend(r, i)
                            } catch (e) {}
                            return null != c && (s.caretBidiLevel = c),
                            p
                        }) : "left" == n || "backward" == n ? !r : i
                    }(n, o, r))
                }
            }, {
                key: "pasteHTML",
                value: function(e, t) {
                    return tf(this, "", e, !1, t || new ClipboardEvent("paste"))
                }
            }, {
                key: "pasteText",
                value: function(e, t) {
                    return tf(this, e, null, !0, t || new ClipboardEvent("paste"))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.docView && (function(e) {
                        for (var t in e.domObserver.stop(),
                        e.input.eventHandlers)
                            e.dom.removeEventListener(t, e.input.eventHandlers[t]);
                        clearTimeout(e.input.composingTimeout),
                        clearTimeout(e.input.lastIOSEnterFallbackTimeout)
                    }(this),
                    this.destroyPluginViews(),
                    this.mounted ? (this.docView.update(this.state.doc, [], tV(this), this),
                    this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
                    this.docView.destroy(),
                    this.docView = null)
                }
            }, {
                key: "isDestroyed",
                get: function() {
                    return null == this.docView
                }
            }, {
                key: "dispatchEvent",
                value: function(e) {
                    te(this, e) || !e5[e.type] || !this.editable && e.type in e8 || e5[e.type](this, e)
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    var t = this._props.dispatchTransaction;
                    t ? t.call(this, e) : this.updateState(this.state.apply(e))
                }
            }, {
                key: "domSelectionRange",
                value: function() {
                    return I && 11 === this.root.nodeType && function(e) {
                        for (var t = e.activeElement; t && t.shadowRoot; )
                            t = t.shadowRoot.activeElement;
                        return t
                    }(this.dom.ownerDocument) == this.dom ? function(e) {
                        function t(e) {
                            e.preventDefault(),
                            e.stopImmediatePropagation(),
                            n = e.getTargetRanges()[0]
                        }
                        e.dom.addEventListener("beforeinput", t, !0),
                        document.execCommand("indent"),
                        e.dom.removeEventListener("beforeinput", t, !0);
                        var n, o = n.startContainer, r = n.startOffset, i = n.endContainer, s = n.endOffset, a = e.domAtPos(e.state.selection.anchor);
                        if (k(a.node, a.offset, i, s)) {
                            var l = [i, s, o, r];
                            o = l[0],
                            r = l[1],
                            i = l[2],
                            s = l[3]
                        }
                        return {
                            anchorNode: o,
                            anchorOffset: r,
                            focusNode: i,
                            focusOffset: s
                        }
                    }(this) : this.domSelection()
                }
            }, {
                key: "domSelection",
                value: function() {
                    return this.root.getSelection()
                }
            }]),
            e
        }();
        function tW(e) {
            var t = Object.create(null);
            return t.class = "ProseMirror",
            t.contenteditable = String(e.editable),
            t.translate = "no",
            e.someProp("attributes", function(n) {
                if ("function" == typeof n && (n = n(e.state)),
                n)
                    for (var o in n)
                        "class" == o && (t.class += " " + n[o]),
                        "style" == o ? t.style = (t.style ? t.style + ";" : "") + n[o] : t[o] || "contenteditable" == o || "nodeName" == o || (t[o] = String(n[o]))
            }),
            [tk.node(0, e.state.doc.content.size, t)]
        }
        function tH(e) {
            if (e.markCursor) {
                var t = document.createElement("img");
                t.className = "ProseMirror-separator",
                t.setAttribute("mark-placeholder", "true"),
                t.setAttribute("alt", ""),
                e.cursorWrapper = {
                    dom: t,
                    deco: tk.widget(e.state.selection.head, t, {
                        raw: !0,
                        marks: e.markCursor
                    })
                }
            } else
                e.cursorWrapper = null
        }
        function tj(e) {
            return !e.someProp("editable", function(t) {
                return !1 === t(e.state)
            })
        }
        function tG(e) {
            var t = Object.create(null);
            function n(e) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n])
            }
            return e.someProp("nodeViews", n),
            e.someProp("markViews", n),
            t
        }
        function tU(e) {
            if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction)
                throw RangeError("Plugins passed directly to the view must not have a state component")
        }
        t.Decoration = tk,
        t.DecorationSet = tD,
        t.EditorView = t$,
        t.__endComposition = td,
        t.__parseFromClipboard = eY,
        t.__serializeForClipboard = eX
    }
}]);
//# sourceMappingURL=d08a6a05-914359ca5fbbe6e8.js.map
