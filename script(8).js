"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2812], {
    52780: function(e, t, n) {
        n.d(t, {
            EH: function() {
                return tu
            },
            p: function() {
                return ta
            },
            tk: function() {
                return tA
            }
        });
        var o = n(27191)
          , i = n(30764)
          , s = n(26151);
        let r = function(e) {
            for (var t = 0; ; t++)
                if (!(e = e.previousSibling))
                    return t
        }
          , l = function(e) {
            let t = e.assignedSlot || e.parentNode;
            return t && 11 == t.nodeType ? t.host : t
        }
          , d = null
          , a = function(e, t, n) {
            let o = d || (d = document.createRange());
            return o.setEnd(e, null == n ? e.nodeValue.length : n),
            o.setStart(e, t || 0),
            o
        }
          , c = function(e, t, n, o) {
            return n && (u(e, t, n, o, -1) || u(e, t, n, o, 1))
        }
          , h = /^(img|br|input|textarea|hr)$/i;
        function u(e, t, n, o, i) {
            for (; ; ) {
                if (e == n && t == o)
                    return !0;
                if (t == (i < 0 ? 0 : p(e))) {
                    let n = e.parentNode;
                    if (!n || 1 != n.nodeType || function(e) {
                        let t;
                        for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode)
                            ;
                        return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e)
                    }(e) || h.test(e.nodeName) || "false" == e.contentEditable)
                        return !1;
                    t = r(e) + (i < 0 ? 0 : 1),
                    e = n
                } else {
                    if (1 != e.nodeType || "false" == (e = e.childNodes[t + (i < 0 ? -1 : 0)]).contentEditable)
                        return !1;
                    t = i < 0 ? p(e) : 0
                }
            }
        }
        function p(e) {
            return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
        }
        let f = function(e) {
            return e.focusNode && c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        };
        function m(e, t) {
            let n = document.createEvent("Event");
            return n.initEvent("keydown", !0, !0),
            n.keyCode = e,
            n.key = n.code = t,
            n
        }
        let g = "undefined" != typeof navigator ? navigator : null
          , y = "undefined" != typeof document ? document : null
          , b = g && g.userAgent || ""
          , v = /Edge\/(\d+)/.exec(b)
          , w = /MSIE \d/.exec(b)
          , D = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(b)
          , N = !!(w || D || v)
          , S = w ? document.documentMode : D ? +D[1] : v ? +v[1] : 0
          , O = !N && /gecko\/(\d+)/i.test(b);
        O && (/Firefox\/(\d+)/.exec(b) || [0, 0])[1];
        let C = !N && /Chrome\/(\d+)/.exec(b)
          , M = !!C
          , x = C ? +C[1] : 0
          , k = !N && !!g && /Apple Computer/.test(g.vendor)
          , T = k && (/Mobile\/\w+/.test(b) || !!g && g.maxTouchPoints > 2)
          , E = T || !!g && /Mac/.test(g.platform)
          , P = /Android \d/.test(b)
          , A = !!y && "webkitFontSmoothing"in y.documentElement.style
          , V = A ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
        function R(e, t) {
            return "number" == typeof e ? e : e[t]
        }
        function B(e, t, n) {
            let o = e.someProp("scrollThreshold") || 0
              , i = e.someProp("scrollMargin") || 5
              , s = e.dom.ownerDocument;
            for (let r = n || e.dom; r; r = l(r)) {
                if (1 != r.nodeType)
                    continue;
                let e = r
                  , n = e == s.body
                  , l = n ? {
                    left: 0,
                    right: s.documentElement.clientWidth,
                    top: 0,
                    bottom: s.documentElement.clientHeight
                } : function(e) {
                    let t = e.getBoundingClientRect()
                      , n = t.width / e.offsetWidth || 1
                      , o = t.height / e.offsetHeight || 1;
                    return {
                        left: t.left,
                        right: t.left + e.clientWidth * n,
                        top: t.top,
                        bottom: t.top + e.clientHeight * o
                    }
                }(e)
                  , d = 0
                  , a = 0;
                if (t.top < l.top + R(o, "top") ? a = -(l.top - t.top + R(i, "top")) : t.bottom > l.bottom - R(o, "bottom") && (a = t.bottom - l.bottom + R(i, "bottom")),
                t.left < l.left + R(o, "left") ? d = -(l.left - t.left + R(i, "left")) : t.right > l.right - R(o, "right") && (d = t.right - l.right + R(i, "right")),
                d || a) {
                    if (n)
                        s.defaultView.scrollBy(d, a);
                    else {
                        let n = e.scrollLeft
                          , o = e.scrollTop;
                        a && (e.scrollTop += a),
                        d && (e.scrollLeft += d);
                        let i = e.scrollLeft - n
                          , s = e.scrollTop - o;
                        t = {
                            left: t.left - i,
                            top: t.top - s,
                            right: t.right - i,
                            bottom: t.bottom - s
                        }
                    }
                }
                if (n)
                    break
            }
        }
        function q(e) {
            let t = []
              , n = e.ownerDocument;
            for (let o = e; o && (t.push({
                dom: o,
                top: o.scrollTop,
                left: o.scrollLeft
            }),
            e != n); o = l(o))
                ;
            return t
        }
        function I(e, t) {
            for (let n = 0; n < e.length; n++) {
                let {dom: o, top: i, left: s} = e[n];
                o.scrollTop != i + t && (o.scrollTop = i + t),
                o.scrollLeft != s && (o.scrollLeft = s)
            }
        }
        let L = null;
        function z(e, t) {
            return e.left >= t.left - 1 && e.left <= t.right + 1 && e.top >= t.top - 1 && e.top <= t.bottom + 1
        }
        function F(e, t) {
            let n = e.getClientRects();
            return n.length ? n[t < 0 ? 0 : n.length - 1] : e.getBoundingClientRect()
        }
        let K = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
        function H(e, t, n) {
            let {node: o, offset: i, atom: s} = e.docView.domFromPos(t, n < 0 ? -1 : 1)
              , r = A || O;
            if (3 == o.nodeType) {
                if (r && (K.test(o.nodeValue) || (n < 0 ? !i : i == o.nodeValue.length))) {
                    let e = F(a(o, i, i), n);
                    if (O && i && /\s/.test(o.nodeValue[i - 1]) && i < o.nodeValue.length) {
                        let t = F(a(o, i - 1, i - 1), -1);
                        if (t.top == e.top) {
                            let n = F(a(o, i, i + 1), -1);
                            if (n.top != e.top)
                                return W(n, n.left < t.left)
                        }
                    }
                    return e
                }
                {
                    let e = i
                      , t = i
                      , s = n < 0 ? 1 : -1;
                    return n < 0 && !i ? (t++,
                    s = -1) : n >= 0 && i == o.nodeValue.length ? (e--,
                    s = 1) : n < 0 ? e-- : t++,
                    W(F(a(o, e, t), 1), s < 0)
                }
            }
            if (!e.state.doc.resolve(t - (s || 0)).parent.inlineContent) {
                if (null == s && i && (n < 0 || i == p(o))) {
                    let e = o.childNodes[i - 1];
                    if (1 == e.nodeType)
                        return $(e.getBoundingClientRect(), !1)
                }
                if (null == s && i < p(o)) {
                    let e = o.childNodes[i];
                    if (1 == e.nodeType)
                        return $(e.getBoundingClientRect(), !0)
                }
                return $(o.getBoundingClientRect(), n >= 0)
            }
            if (null == s && i && (n < 0 || i == p(o))) {
                let e = o.childNodes[i - 1]
                  , t = 3 == e.nodeType ? a(e, p(e) - (r ? 0 : 1)) : 1 != e.nodeType || "BR" == e.nodeName && e.nextSibling ? null : e;
                if (t)
                    return W(F(t, 1), !1)
            }
            if (null == s && i < p(o)) {
                let e = o.childNodes[i];
                for (; e.pmViewDesc && e.pmViewDesc.ignoreForCoords; )
                    e = e.nextSibling;
                let t = e ? 3 == e.nodeType ? a(e, 0, r ? 0 : 1) : 1 == e.nodeType ? e : null : null;
                if (t)
                    return W(F(t, -1), !0)
            }
            return W(F(3 == o.nodeType ? a(o) : o, -n), n >= 0)
        }
        function W(e, t) {
            if (0 == e.width)
                return e;
            let n = t ? e.left : e.right;
            return {
                top: e.top,
                bottom: e.bottom,
                left: n,
                right: n
            }
        }
        function $(e, t) {
            if (0 == e.height)
                return e;
            let n = t ? e.top : e.bottom;
            return {
                top: n,
                bottom: n,
                left: e.left,
                right: e.right
            }
        }
        function _(e, t, n) {
            let o = e.state
              , i = e.root.activeElement;
            o != t && e.updateState(t),
            i != e.dom && e.focus();
            try {
                return n()
            } finally {
                o != t && e.updateState(o),
                i != e.dom && i && i.focus()
            }
        }
        let Y = /[\u0590-\u08ac]/
          , G = null
          , U = null
          , j = !1;
        class X {
            constructor(e, t, n, o) {
                this.parent = e,
                this.children = t,
                this.dom = n,
                this.contentDOM = o,
                this.dirty = 0,
                n.pmViewDesc = this
            }
            matchesWidget(e) {
                return !1
            }
            matchesMark(e) {
                return !1
            }
            matchesNode(e, t, n) {
                return !1
            }
            matchesHack(e) {
                return !1
            }
            parseRule() {
                return null
            }
            stopEvent(e) {
                return !1
            }
            get size() {
                let e = 0;
                for (let t = 0; t < this.children.length; t++)
                    e += this.children[t].size;
                return e
            }
            get border() {
                return 0
            }
            destroy() {
                this.parent = void 0,
                this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
                for (let e = 0; e < this.children.length; e++)
                    this.children[e].destroy()
            }
            posBeforeChild(e) {
                for (let t = 0, n = this.posAtStart; ; t++) {
                    let o = this.children[t];
                    if (o == e)
                        return n;
                    n += o.size
                }
            }
            get posBefore() {
                return this.parent.posBeforeChild(this)
            }
            get posAtStart() {
                return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
            }
            get posAfter() {
                return this.posBefore + this.size
            }
            get posAtEnd() {
                return this.posAtStart + this.size - 2 * this.border
            }
            localPosFromDOM(e, t, n) {
                let o;
                if (this.contentDOM && this.contentDOM.contains(1 == e.nodeType ? e : e.parentNode)) {
                    if (n < 0) {
                        let n, o;
                        if (e == this.contentDOM)
                            n = e.childNodes[t - 1];
                        else {
                            for (; e.parentNode != this.contentDOM; )
                                e = e.parentNode;
                            n = e.previousSibling
                        }
                        for (; n && !((o = n.pmViewDesc) && o.parent == this); )
                            n = n.previousSibling;
                        return n ? this.posBeforeChild(o) + o.size : this.posAtStart
                    }
                    {
                        let n, o;
                        if (e == this.contentDOM)
                            n = e.childNodes[t];
                        else {
                            for (; e.parentNode != this.contentDOM; )
                                e = e.parentNode;
                            n = e.nextSibling
                        }
                        for (; n && !((o = n.pmViewDesc) && o.parent == this); )
                            n = n.nextSibling;
                        return n ? this.posBeforeChild(o) : this.posAtEnd
                    }
                }
                if (e == this.dom && this.contentDOM)
                    o = t > r(this.contentDOM);
                else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
                    o = 2 & e.compareDocumentPosition(this.contentDOM);
                else if (this.dom.firstChild) {
                    if (0 == t)
                        for (let t = e; ; t = t.parentNode) {
                            if (t == this.dom) {
                                o = !1;
                                break
                            }
                            if (t.previousSibling)
                                break
                        }
                    if (null == o && t == e.childNodes.length)
                        for (let t = e; ; t = t.parentNode) {
                            if (t == this.dom) {
                                o = !0;
                                break
                            }
                            if (t.nextSibling)
                                break
                        }
                }
                return (null == o ? n > 0 : o) ? this.posAtEnd : this.posAtStart
            }
            nearestDesc(e, t=!1) {
                for (let n = !0, o = e; o; o = o.parentNode) {
                    let i = this.getDesc(o), s;
                    if (i && (!t || i.node)) {
                        if (!n || !(s = i.nodeDOM) || (1 == s.nodeType ? s.contains(1 == e.nodeType ? e : e.parentNode) : s == e))
                            return i;
                        n = !1
                    }
                }
            }
            getDesc(e) {
                let t = e.pmViewDesc;
                for (let e = t; e; e = e.parent)
                    if (e == this)
                        return t
            }
            posFromDOM(e, t, n) {
                for (let o = e; o; o = o.parentNode) {
                    let i = this.getDesc(o);
                    if (i)
                        return i.localPosFromDOM(e, t, n)
                }
                return -1
            }
            descAt(e) {
                for (let t = 0, n = 0; t < this.children.length; t++) {
                    let o = this.children[t]
                      , i = n + o.size;
                    if (n == e && i != n) {
                        for (; !o.border && o.children.length; )
                            o = o.children[0];
                        return o
                    }
                    if (e < i)
                        return o.descAt(e - n - o.border);
                    n = i
                }
            }
            domFromPos(e, t) {
                if (!this.contentDOM)
                    return {
                        node: this.dom,
                        offset: 0,
                        atom: e + 1
                    };
                let n = 0
                  , o = 0;
                for (let t = 0; n < this.children.length; n++) {
                    let i = this.children[n]
                      , s = t + i.size;
                    if (s > e || i instanceof eo) {
                        o = e - t;
                        break
                    }
                    t = s
                }
                if (o)
                    return this.children[n].domFromPos(o - this.children[n].border, t);
                for (let e; n && !(e = this.children[n - 1]).size && e instanceof J && e.side >= 0; n--)
                    ;
                if (t <= 0) {
                    let e, o = !0;
                    for (; (e = n ? this.children[n - 1] : null) && e.dom.parentNode != this.contentDOM; n--,
                    o = !1)
                        ;
                    return e && t && o && !e.border && !e.domAtom ? e.domFromPos(e.size, t) : {
                        node: this.contentDOM,
                        offset: e ? r(e.dom) + 1 : 0
                    }
                }
                {
                    let e, o = !0;
                    for (; (e = n < this.children.length ? this.children[n] : null) && e.dom.parentNode != this.contentDOM; n++,
                    o = !1)
                        ;
                    return e && o && !e.border && !e.domAtom ? e.domFromPos(0, t) : {
                        node: this.contentDOM,
                        offset: e ? r(e.dom) : this.contentDOM.childNodes.length
                    }
                }
            }
            parseRange(e, t, n=0) {
                if (0 == this.children.length)
                    return {
                        node: this.contentDOM,
                        from: e,
                        to: t,
                        fromOffset: 0,
                        toOffset: this.contentDOM.childNodes.length
                    };
                let o = -1
                  , i = -1;
                for (let s = n, l = 0; ; l++) {
                    let n = this.children[l]
                      , d = s + n.size;
                    if (-1 == o && e <= d) {
                        let i = s + n.border;
                        if (e >= i && t <= d - n.border && n.node && n.contentDOM && this.contentDOM.contains(n.contentDOM))
                            return n.parseRange(e, t, i);
                        e = s;
                        for (let t = l; t > 0; t--) {
                            let n = this.children[t - 1];
                            if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(1)) {
                                o = r(n.dom) + 1;
                                break
                            }
                            e -= n.size
                        }
                        -1 == o && (o = 0)
                    }
                    if (o > -1 && (d > t || l == this.children.length - 1)) {
                        t = d;
                        for (let e = l + 1; e < this.children.length; e++) {
                            let n = this.children[e];
                            if (n.size && n.dom.parentNode == this.contentDOM && !n.emptyChildAt(-1)) {
                                i = r(n.dom);
                                break
                            }
                            t += n.size
                        }
                        -1 == i && (i = this.contentDOM.childNodes.length);
                        break
                    }
                    s = d
                }
                return {
                    node: this.contentDOM,
                    from: e,
                    to: t,
                    fromOffset: o,
                    toOffset: i
                }
            }
            emptyChildAt(e) {
                if (this.border || !this.contentDOM || !this.children.length)
                    return !1;
                let t = this.children[e < 0 ? 0 : this.children.length - 1];
                return 0 == t.size || t.emptyChildAt(e)
            }
            domAfterPos(e) {
                let {node: t, offset: n} = this.domFromPos(e, 0);
                if (1 != t.nodeType || n == t.childNodes.length)
                    throw RangeError("No node after pos " + e);
                return t.childNodes[n]
            }
            setSelection(e, t, n, o=!1) {
                let i = Math.min(e, t)
                  , s = Math.max(e, t);
                for (let r = 0, l = 0; r < this.children.length; r++) {
                    let d = this.children[r]
                      , a = l + d.size;
                    if (i > l && s < a)
                        return d.setSelection(e - l - d.border, t - l - d.border, n, o);
                    l = a
                }
                let l = this.domFromPos(e, e ? -1 : 1)
                  , d = t == e ? l : this.domFromPos(t, t ? -1 : 1)
                  , a = n.getSelection()
                  , h = !1;
                if ((O || k) && e == t) {
                    let {node: e, offset: t} = l;
                    if (3 == e.nodeType) {
                        if ((h = !!(t && "\n" == e.nodeValue[t - 1])) && t == e.nodeValue.length)
                            for (let t = e, n; t; t = t.parentNode) {
                                if (n = t.nextSibling) {
                                    "BR" == n.nodeName && (l = d = {
                                        node: n.parentNode,
                                        offset: r(n) + 1
                                    });
                                    break
                                }
                                let e = t.pmViewDesc;
                                if (e && e.node && e.node.isBlock)
                                    break
                            }
                    } else {
                        let n = e.childNodes[t - 1];
                        h = n && ("BR" == n.nodeName || "false" == n.contentEditable)
                    }
                }
                if (O && a.focusNode && a.focusNode != d.node && 1 == a.focusNode.nodeType) {
                    let e = a.focusNode.childNodes[a.focusOffset];
                    e && "false" == e.contentEditable && (o = !0)
                }
                if (!(o || h && k) && c(l.node, l.offset, a.anchorNode, a.anchorOffset) && c(d.node, d.offset, a.focusNode, a.focusOffset))
                    return;
                let u = !1;
                if ((a.extend || e == t) && !h) {
                    a.collapse(l.node, l.offset);
                    try {
                        e != t && a.extend(d.node, d.offset),
                        u = !0
                    } catch (e) {}
                }
                if (!u) {
                    if (e > t) {
                        let e = l;
                        l = d,
                        d = e
                    }
                    let n = document.createRange();
                    n.setEnd(d.node, d.offset),
                    n.setStart(l.node, l.offset),
                    a.removeAllRanges(),
                    a.addRange(n)
                }
            }
            ignoreMutation(e) {
                return !this.contentDOM && "selection" != e.type
            }
            get contentLost() {
                return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
            }
            markDirty(e, t) {
                for (let n = 0, o = 0; o < this.children.length; o++) {
                    let i = this.children[o]
                      , s = n + i.size;
                    if (n == s ? e <= s && t >= n : e < s && t > n) {
                        let o = n + i.border
                          , r = s - i.border;
                        if (e >= o && t <= r) {
                            this.dirty = e == n || t == s ? 2 : 1,
                            e == o && t == r && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = 3 : i.markDirty(e - o, t - o);
                            return
                        }
                        i.dirty = i.dom != i.contentDOM || i.dom.parentNode != this.contentDOM || i.children.length ? 3 : 2
                    }
                    n = s
                }
                this.dirty = 2
            }
            markParentsDirty() {
                let e = 1;
                for (let t = this.parent; t; t = t.parent,
                e++) {
                    let n = 1 == e ? 2 : 1;
                    t.dirty < n && (t.dirty = n)
                }
            }
            get domAtom() {
                return !1
            }
            get ignoreForCoords() {
                return !1
            }
        }
        class J extends X {
            constructor(e, t, n, o) {
                let i, s = t.type.toDOM;
                if ("function" == typeof s && (s = s(n, ()=>i ? i.parent ? i.parent.posBeforeChild(i) : void 0 : o)),
                !t.type.spec.raw) {
                    if (1 != s.nodeType) {
                        let e = document.createElement("span");
                        e.appendChild(s),
                        s = e
                    }
                    s.contentEditable = "false",
                    s.classList.add("ProseMirror-widget")
                }
                super(e, [], s, null),
                this.widget = t,
                this.widget = t,
                i = this
            }
            matchesWidget(e) {
                return 0 == this.dirty && e.type.eq(this.widget.type)
            }
            parseRule() {
                return {
                    ignore: !0
                }
            }
            stopEvent(e) {
                let t = this.widget.spec.stopEvent;
                return !!t && t(e)
            }
            ignoreMutation(e) {
                return "selection" != e.type || this.widget.spec.ignoreSelection
            }
            destroy() {
                this.widget.type.destroy(this.dom),
                super.destroy()
            }
            get domAtom() {
                return !0
            }
            get side() {
                return this.widget.type.side
            }
        }
        class Q extends X {
            constructor(e, t, n, o) {
                super(e, [], t, null),
                this.textDOM = n,
                this.text = o
            }
            get size() {
                return this.text.length
            }
            localPosFromDOM(e, t) {
                return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
            }
            domFromPos(e) {
                return {
                    node: this.textDOM,
                    offset: e
                }
            }
            ignoreMutation(e) {
                return "characterData" === e.type && e.target.nodeValue == e.oldValue
            }
        }
        class Z extends X {
            constructor(e, t, n, o) {
                super(e, [], n, o),
                this.mark = t
            }
            static create(e, t, n, o) {
                let s = o.nodeViews[t.type.name]
                  , r = s && s(t, o, n);
                return r && r.dom || (r = i.PW.renderSpec(document, t.type.spec.toDOM(t, n))),
                new Z(e,t,r.dom,r.contentDOM || r.dom)
            }
            parseRule() {
                return 3 & this.dirty || this.mark.type.spec.reparseInView ? null : {
                    mark: this.mark.type.name,
                    attrs: this.mark.attrs,
                    contentElement: this.contentDOM || void 0
                }
            }
            matchesMark(e) {
                return 3 != this.dirty && this.mark.eq(e)
            }
            markDirty(e, t) {
                if (super.markDirty(e, t),
                0 != this.dirty) {
                    let e = this.parent;
                    for (; !e.node; )
                        e = e.parent;
                    e.dirty < this.dirty && (e.dirty = this.dirty),
                    this.dirty = 0
                }
            }
            slice(e, t, n) {
                let o = Z.create(this.parent, this.mark, !0, n)
                  , i = this.children
                  , s = this.size;
                t < s && (i = ef(i, t, s, n)),
                e > 0 && (i = ef(i, 0, e, n));
                for (let e = 0; e < i.length; e++)
                    i[e].parent = o;
                return o.children = i,
                o
            }
        }
        class ee extends X {
            constructor(e, t, n, o, i, s, r, l, d) {
                super(e, [], i, s),
                this.node = t,
                this.outerDeco = n,
                this.innerDeco = o,
                this.nodeDOM = r,
                s && this.updateChildren(l, d)
            }
            static create(e, t, n, o, s, r) {
                let l = s.nodeViews[t.type.name], d, a = l && l(t, s, ()=>d ? d.parent ? d.parent.posBeforeChild(d) : void 0 : r, n, o), c = a && a.dom, h = a && a.contentDOM;
                if (t.isText) {
                    if (c) {
                        if (3 != c.nodeType)
                            throw RangeError("Text must be rendered as a DOM text node")
                    } else
                        c = document.createTextNode(t.text)
                } else
                    c || ({dom: c, contentDOM: h} = i.PW.renderSpec(document, t.type.spec.toDOM(t)));
                h || t.isText || "BR" == c.nodeName || (c.hasAttribute("contenteditable") || (c.contentEditable = "false"),
                t.type.spec.draggable && (c.draggable = !0));
                let u = c;
                return (c = ea(c, n, t),
                a) ? d = new ei(e,t,n,o,c,h || null,u,a,s,r + 1) : t.isText ? new en(e,t,n,o,c,u,s) : new ee(e,t,n,o,c,h || null,u,s,r + 1)
            }
            parseRule() {
                if (this.node.type.spec.reparseInView)
                    return null;
                let e = {
                    node: this.node.type.name,
                    attrs: this.node.attrs
                };
                if ("pre" == this.node.type.whitespace && (e.preserveWhitespace = "full"),
                this.contentDOM) {
                    if (this.contentLost) {
                        for (let t = this.children.length - 1; t >= 0; t--) {
                            let n = this.children[t];
                            if (this.dom.contains(n.dom.parentNode)) {
                                e.contentElement = n.dom.parentNode;
                                break
                            }
                        }
                        e.contentElement || (e.getContent = ()=>i.HY.empty)
                    } else
                        e.contentElement = this.contentDOM
                } else
                    e.getContent = ()=>this.node.content;
                return e
            }
            matchesNode(e, t, n) {
                return 0 == this.dirty && e.eq(this.node) && ec(t, this.outerDeco) && n.eq(this.innerDeco)
            }
            get size() {
                return this.node.nodeSize
            }
            get border() {
                return this.node.isLeaf ? 0 : 1
            }
            updateChildren(e, t) {
                let n = this.node.inlineContent
                  , o = t
                  , s = e.composing ? this.localCompositionInfo(e, t) : null
                  , r = s && s.pos > -1 ? s : null
                  , l = s && s.pos < 0
                  , d = new eu(this,r && r.node,e);
                (function(e, t, n, o) {
                    let i = t.locals(e)
                      , s = 0;
                    if (0 == i.length) {
                        for (let n = 0; n < e.childCount; n++) {
                            let r = e.child(n);
                            o(r, i, t.forChild(s, r), n),
                            s += r.nodeSize
                        }
                        return
                    }
                    let r = 0
                      , l = []
                      , d = null;
                    for (let a = 0; ; ) {
                        let c, h;
                        if (r < i.length && i[r].to == s) {
                            let e = i[r++], t;
                            for (; r < i.length && i[r].to == s; )
                                (t || (t = [e])).push(i[r++]);
                            if (t) {
                                t.sort(ep);
                                for (let e = 0; e < t.length; e++)
                                    n(t[e], a, !!d)
                            } else
                                n(e, a, !!d)
                        }
                        if (d)
                            h = -1,
                            c = d,
                            d = null;
                        else if (a < e.childCount)
                            h = a,
                            c = e.child(a++);
                        else
                            break;
                        for (let e = 0; e < l.length; e++)
                            l[e].to <= s && l.splice(e--, 1);
                        for (; r < i.length && i[r].from <= s && i[r].to > s; )
                            l.push(i[r++]);
                        let u = s + c.nodeSize;
                        if (c.isText) {
                            let e = u;
                            r < i.length && i[r].from < e && (e = i[r].from);
                            for (let t = 0; t < l.length; t++)
                                l[t].to < e && (e = l[t].to);
                            e < u && (d = c.cut(e - s),
                            c = c.cut(0, e - s),
                            u = e,
                            h = -1)
                        }
                        let p = c.isInline && !c.isLeaf ? l.filter(e=>!e.inline) : l.slice();
                        o(c, p, t.forChild(s, c), h),
                        s = u
                    }
                }
                )(this.node, this.innerDeco, (t,s,r)=>{
                    t.spec.marks ? d.syncToMarks(t.spec.marks, n, e) : t.type.side >= 0 && !r && d.syncToMarks(s == this.node.childCount ? i.vc.none : this.node.child(s).marks, n, e),
                    d.placeWidget(t, e, o)
                }
                , (t,i,r,a)=>{
                    let c;
                    d.syncToMarks(t.marks, n, e),
                    d.findNodeMatch(t, i, r, a) || l && e.state.selection.from > o && e.state.selection.to < o + t.nodeSize && (c = d.findIndexWithChild(s.node)) > -1 && d.updateNodeAt(t, i, r, c, e) || d.updateNextNode(t, i, r, e, a) || d.addNode(t, i, r, e, o),
                    o += t.nodeSize
                }
                ),
                d.syncToMarks([], n, e),
                this.node.isTextblock && d.addTextblockHacks(),
                d.destroyRest(),
                (d.changed || 2 == this.dirty) && (r && this.protectLocalComposition(e, r),
                function e(t, n, o) {
                    let i = t.firstChild
                      , s = !1;
                    for (let r = 0; r < n.length; r++) {
                        let l = n[r]
                          , d = l.dom;
                        if (d.parentNode == t) {
                            for (; d != i; )
                                i = eh(i),
                                s = !0;
                            i = i.nextSibling
                        } else
                            s = !0,
                            t.insertBefore(d, i);
                        if (l instanceof Z) {
                            let n = i ? i.previousSibling : t.lastChild;
                            e(l.contentDOM, l.children, o),
                            i = n ? n.nextSibling : t.firstChild
                        }
                    }
                    for (; i; )
                        i = eh(i),
                        s = !0;
                    s && o.trackWrites == t && (o.trackWrites = null)
                }(this.contentDOM, this.children, e),
                T && function(e) {
                    if ("UL" == e.nodeName || "OL" == e.nodeName) {
                        let t = e.style.cssText;
                        e.style.cssText = t + "; list-style: square !important",
                        window.getComputedStyle(e).listStyle,
                        e.style.cssText = t
                    }
                }(this.dom))
            }
            localCompositionInfo(e, t) {
                let {from: n, to: i} = e.state.selection;
                if (!(e.state.selection instanceof o.Bs) || n < t || i > t + this.node.content.size)
                    return null;
                let s = e.domSelectionRange()
                  , r = function(e, t) {
                    for (; ; ) {
                        if (3 == e.nodeType)
                            return e;
                        if (1 == e.nodeType && t > 0) {
                            if (e.childNodes.length > t && 3 == e.childNodes[t].nodeType)
                                return e.childNodes[t];
                            t = p(e = e.childNodes[t - 1])
                        } else {
                            if (1 != e.nodeType || !(t < e.childNodes.length))
                                return null;
                            e = e.childNodes[t],
                            t = 0
                        }
                    }
                }(s.focusNode, s.focusOffset);
                if (!r || !this.dom.contains(r.parentNode))
                    return null;
                if (!this.node.inlineContent)
                    return {
                        node: r,
                        pos: -1,
                        text: ""
                    };
                {
                    let e = r.nodeValue
                      , o = function(e, t, n, o) {
                        for (let i = 0, s = 0; i < e.childCount && s <= o; ) {
                            let r = e.child(i++)
                              , l = s;
                            if (s += r.nodeSize,
                            !r.isText)
                                continue;
                            let d = r.text;
                            for (; i < e.childCount; ) {
                                let t = e.child(i++);
                                if (s += t.nodeSize,
                                !t.isText)
                                    break;
                                d += t.text
                            }
                            if (s >= n) {
                                let e = l < o ? d.lastIndexOf(t, o - l - 1) : -1;
                                if (e >= 0 && e + t.length + l >= n)
                                    return l + e;
                                if (n == o && d.length >= o + t.length - l && d.slice(o - l, o - l + t.length) == t)
                                    return o
                            }
                        }
                        return -1
                    }(this.node.content, e, n - t, i - t);
                    return o < 0 ? null : {
                        node: r,
                        pos: o,
                        text: e
                    }
                }
            }
            protectLocalComposition(e, {node: t, pos: n, text: o}) {
                if (this.getDesc(t))
                    return;
                let i = t;
                for (; i.parentNode != this.contentDOM; i = i.parentNode) {
                    for (; i.previousSibling; )
                        i.parentNode.removeChild(i.previousSibling);
                    for (; i.nextSibling; )
                        i.parentNode.removeChild(i.nextSibling);
                    i.pmViewDesc && (i.pmViewDesc = void 0)
                }
                let s = new Q(this,i,t,o);
                e.input.compositionNodes.push(s),
                this.children = ef(this.children, n, n + o.length, e, s)
            }
            update(e, t, n, o) {
                return !!(3 != this.dirty && e.sameMarkup(this.node)) && (this.updateInner(e, t, n, o),
                !0)
            }
            updateInner(e, t, n, o) {
                this.updateOuterDeco(t),
                this.node = e,
                this.innerDeco = n,
                this.contentDOM && this.updateChildren(o, this.posAtStart),
                this.dirty = 0
            }
            updateOuterDeco(e) {
                if (ec(e, this.outerDeco))
                    return;
                let t = 1 != this.nodeDOM.nodeType
                  , n = this.dom;
                this.dom = ed(this.dom, this.nodeDOM, el(this.outerDeco, this.node, t), el(e, this.node, t)),
                this.dom != n && (n.pmViewDesc = void 0,
                this.dom.pmViewDesc = this),
                this.outerDeco = e
            }
            selectNode() {
                1 == this.nodeDOM.nodeType && this.nodeDOM.classList.add("ProseMirror-selectednode"),
                (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0)
            }
            deselectNode() {
                1 == this.nodeDOM.nodeType && this.nodeDOM.classList.remove("ProseMirror-selectednode"),
                (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable")
            }
            get domAtom() {
                return this.node.isAtom
            }
        }
        function et(e, t, n, o, i) {
            return ea(o, t, e),
            new ee(void 0,e,t,n,o,o,o,i,0)
        }
        class en extends ee {
            constructor(e, t, n, o, i, s, r) {
                super(e, t, n, o, i, null, s, r, 0)
            }
            parseRule() {
                let e = this.nodeDOM.parentNode;
                for (; e && e != this.dom && !e.pmIsDeco; )
                    e = e.parentNode;
                return {
                    skip: e || !0
                }
            }
            update(e, t, n, o) {
                return !!(3 != this.dirty && (0 == this.dirty || this.inParent()) && e.sameMarkup(this.node)) && (this.updateOuterDeco(t),
                (0 != this.dirty || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text,
                o.trackWrites == this.nodeDOM && (o.trackWrites = null)),
                this.node = e,
                this.dirty = 0,
                !0)
            }
            inParent() {
                let e = this.parent.contentDOM;
                for (let t = this.nodeDOM; t; t = t.parentNode)
                    if (t == e)
                        return !0;
                return !1
            }
            domFromPos(e) {
                return {
                    node: this.nodeDOM,
                    offset: e
                }
            }
            localPosFromDOM(e, t, n) {
                return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n)
            }
            ignoreMutation(e) {
                return "characterData" != e.type && "selection" != e.type
            }
            slice(e, t, n) {
                let o = this.node.cut(e, t)
                  , i = document.createTextNode(o.text);
                return new en(this.parent,o,this.outerDeco,this.innerDeco,i,i,n)
            }
            markDirty(e, t) {
                super.markDirty(e, t),
                this.dom != this.nodeDOM && (0 == e || t == this.nodeDOM.nodeValue.length) && (this.dirty = 3)
            }
            get domAtom() {
                return !1
            }
        }
        class eo extends X {
            parseRule() {
                return {
                    ignore: !0
                }
            }
            matchesHack(e) {
                return 0 == this.dirty && this.dom.nodeName == e
            }
            get domAtom() {
                return !0
            }
            get ignoreForCoords() {
                return "IMG" == this.dom.nodeName
            }
        }
        class ei extends ee {
            constructor(e, t, n, o, i, s, r, l, d, a) {
                super(e, t, n, o, i, s, r, d, a),
                this.spec = l
            }
            update(e, t, n, o) {
                if (3 == this.dirty)
                    return !1;
                if (this.spec.update) {
                    let i = this.spec.update(e, t, n);
                    return i && this.updateInner(e, t, n, o),
                    i
                }
                return (!!this.contentDOM || !!e.isLeaf) && super.update(e, t, n, o)
            }
            selectNode() {
                this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
            }
            deselectNode() {
                this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
            }
            setSelection(e, t, n, o) {
                this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, o)
            }
            destroy() {
                this.spec.destroy && this.spec.destroy(),
                super.destroy()
            }
            stopEvent(e) {
                return !!this.spec.stopEvent && this.spec.stopEvent(e)
            }
            ignoreMutation(e) {
                return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
            }
        }
        let es = function(e) {
            e && (this.nodeName = e)
        };
        es.prototype = Object.create(null);
        let er = [new es];
        function el(e, t, n) {
            if (0 == e.length)
                return er;
            let o = n ? er[0] : new es
              , i = [o];
            for (let s = 0; s < e.length; s++) {
                let r = e[s].type.attrs;
                if (r)
                    for (let e in r.nodeName && i.push(o = new es(r.nodeName)),
                    r) {
                        let s = r[e];
                        null != s && (n && 1 == i.length && i.push(o = new es(t.isInline ? "span" : "div")),
                        "class" == e ? o.class = (o.class ? o.class + " " : "") + s : "style" == e ? o.style = (o.style ? o.style + ";" : "") + s : "nodeName" != e && (o[e] = s))
                    }
            }
            return i
        }
        function ed(e, t, n, o) {
            if (n == er && o == er)
                return t;
            let i = t;
            for (let t = 0; t < o.length; t++) {
                let s = o[t]
                  , r = n[t];
                if (t) {
                    let t;
                    r && r.nodeName == s.nodeName && i != e && (t = i.parentNode) && t.nodeName.toLowerCase() == s.nodeName || ((t = document.createElement(s.nodeName)).pmIsDeco = !0,
                    t.appendChild(i),
                    r = er[0]),
                    i = t
                }
                !function(e, t, n) {
                    for (let o in t)
                        "class" == o || "style" == o || "nodeName" == o || o in n || e.removeAttribute(o);
                    for (let o in n)
                        "class" != o && "style" != o && "nodeName" != o && n[o] != t[o] && e.setAttribute(o, n[o]);
                    if (t.class != n.class) {
                        let o = t.class ? t.class.split(" ").filter(Boolean) : []
                          , i = n.class ? n.class.split(" ").filter(Boolean) : [];
                        for (let t = 0; t < o.length; t++)
                            -1 == i.indexOf(o[t]) && e.classList.remove(o[t]);
                        for (let t = 0; t < i.length; t++)
                            -1 == o.indexOf(i[t]) && e.classList.add(i[t]);
                        0 == e.classList.length && e.removeAttribute("class")
                    }
                    if (t.style != n.style) {
                        if (t.style) {
                            let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, o;
                            for (; o = n.exec(t.style); )
                                e.style.removeProperty(o[1])
                        }
                        n.style && (e.style.cssText += n.style)
                    }
                }(i, r || er[0], s)
            }
            return i
        }
        function ea(e, t, n) {
            return ed(e, e, er, el(t, n, 1 != e.nodeType))
        }
        function ec(e, t) {
            if (e.length != t.length)
                return !1;
            for (let n = 0; n < e.length; n++)
                if (!e[n].type.eq(t[n].type))
                    return !1;
            return !0
        }
        function eh(e) {
            let t = e.nextSibling;
            return e.parentNode.removeChild(e),
            t
        }
        class eu {
            constructor(e, t, n) {
                this.lock = t,
                this.view = n,
                this.index = 0,
                this.stack = [],
                this.changed = !1,
                this.top = e,
                this.preMatch = function(e, t) {
                    let n = t
                      , o = n.children.length
                      , i = e.childCount
                      , s = new Map
                      , r = [];
                    e: for (; i > 0; ) {
                        let l;
                        for (; ; )
                            if (o) {
                                let e = n.children[o - 1];
                                if (e instanceof Z)
                                    n = e,
                                    o = e.children.length;
                                else {
                                    l = e,
                                    o--;
                                    break
                                }
                            } else if (n == t)
                                break e;
                            else
                                o = n.parent.children.indexOf(n),
                                n = n.parent;
                        let d = l.node;
                        if (d) {
                            if (d != e.child(i - 1))
                                break;
                            --i,
                            s.set(l, i),
                            r.push(l)
                        }
                    }
                    return {
                        index: i,
                        matched: s,
                        matches: r.reverse()
                    }
                }(e.node.content, e)
            }
            destroyBetween(e, t) {
                if (e != t) {
                    for (let n = e; n < t; n++)
                        this.top.children[n].destroy();
                    this.top.children.splice(e, t - e),
                    this.changed = !0
                }
            }
            destroyRest() {
                this.destroyBetween(this.index, this.top.children.length)
            }
            syncToMarks(e, t, n) {
                let o = 0
                  , i = this.stack.length >> 1
                  , s = Math.min(i, e.length);
                for (; o < s && (o == i - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && !1 !== e[o].type.spec.spanning; )
                    o++;
                for (; o < i; )
                    this.destroyRest(),
                    this.top.dirty = 0,
                    this.index = this.stack.pop(),
                    this.top = this.stack.pop(),
                    i--;
                for (; i < e.length; ) {
                    this.stack.push(this.top, this.index + 1);
                    let o = -1;
                    for (let t = this.index; t < Math.min(this.index + 3, this.top.children.length); t++) {
                        let n = this.top.children[t];
                        if (n.matchesMark(e[i]) && !this.isLocked(n.dom)) {
                            o = t;
                            break
                        }
                    }
                    if (o > -1)
                        o > this.index && (this.changed = !0,
                        this.destroyBetween(this.index, o)),
                        this.top = this.top.children[this.index];
                    else {
                        let o = Z.create(this.top, e[i], t, n);
                        this.top.children.splice(this.index, 0, o),
                        this.top = o,
                        this.changed = !0
                    }
                    this.index = 0,
                    i++
                }
            }
            findNodeMatch(e, t, n, o) {
                let i = -1, s;
                if (o >= this.preMatch.index && (s = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, n))
                    i = this.top.children.indexOf(s, this.index);
                else
                    for (let o = this.index, s = Math.min(this.top.children.length, o + 5); o < s; o++) {
                        let s = this.top.children[o];
                        if (s.matchesNode(e, t, n) && !this.preMatch.matched.has(s)) {
                            i = o;
                            break
                        }
                    }
                return !(i < 0) && (this.destroyBetween(this.index, i),
                this.index++,
                !0)
            }
            updateNodeAt(e, t, n, o, i) {
                let s = this.top.children[o];
                return 3 == s.dirty && s.dom == s.contentDOM && (s.dirty = 2),
                !!s.update(e, t, n, i) && (this.destroyBetween(this.index, o),
                this.index++,
                !0)
            }
            findIndexWithChild(e) {
                for (; ; ) {
                    let t = e.parentNode;
                    if (!t)
                        return -1;
                    if (t == this.top.contentDOM) {
                        let t = e.pmViewDesc;
                        if (t) {
                            for (let e = this.index; e < this.top.children.length; e++)
                                if (this.top.children[e] == t)
                                    return e
                        }
                        return -1
                    }
                    e = t
                }
            }
            updateNextNode(e, t, n, o, i) {
                for (let s = this.index; s < this.top.children.length; s++) {
                    let r = this.top.children[s];
                    if (r instanceof ee) {
                        let l = this.preMatch.matched.get(r);
                        if (null != l && l != i)
                            return !1;
                        let d = r.dom;
                        if (!(this.isLocked(d) && !(e.isText && r.node && r.node.isText && r.nodeDOM.nodeValue == e.text && 3 != r.dirty && ec(t, r.outerDeco))) && r.update(e, t, n, o))
                            return this.destroyBetween(this.index, s),
                            r.dom != d && (this.changed = !0),
                            this.index++,
                            !0;
                        break
                    }
                }
                return !1
            }
            addNode(e, t, n, o, i) {
                this.top.children.splice(this.index++, 0, ee.create(this.top, e, t, n, o, i)),
                this.changed = !0
            }
            placeWidget(e, t, n) {
                let o = this.index < this.top.children.length ? this.top.children[this.index] : null;
                if (o && o.matchesWidget(e) && (e == o.widget || !o.widget.type.toDOM.parentNode))
                    this.index++;
                else {
                    let o = new J(this.top,e,t,n);
                    this.top.children.splice(this.index++, 0, o),
                    this.changed = !0
                }
            }
            addTextblockHacks() {
                let e = this.top.children[this.index - 1]
                  , t = this.top;
                for (; e instanceof Z; )
                    e = (t = e).children[t.children.length - 1];
                (!e || !(e instanceof en) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((k || M) && e && "false" == e.dom.contentEditable && this.addHackNode("IMG", t),
                this.addHackNode("BR", this.top))
            }
            addHackNode(e, t) {
                if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
                    this.index++;
                else {
                    let n = document.createElement(e);
                    "IMG" == e && (n.className = "ProseMirror-separator",
                    n.alt = ""),
                    "BR" == e && (n.className = "ProseMirror-trailingBreak");
                    let o = new eo(this.top,[],n,null);
                    t != this.top ? t.children.push(o) : t.children.splice(this.index++, 0, o),
                    this.changed = !0
                }
            }
            isLocked(e) {
                return this.lock && (e == this.lock || 1 == e.nodeType && e.contains(this.lock.parentNode))
            }
        }
        function ep(e, t) {
            return e.type.side - t.type.side
        }
        function ef(e, t, n, o, i) {
            let s = [];
            for (let r = 0, l = 0; r < e.length; r++) {
                let d = e[r]
                  , a = l
                  , c = l += d.size;
                a >= n || c <= t ? s.push(d) : (a < t && s.push(d.slice(0, t - a, o)),
                i && (s.push(i),
                i = void 0),
                c > n && s.push(d.slice(n - a, d.size, o)))
            }
            return s
        }
        function em(e, t=null) {
            let n = e.domSelectionRange()
              , i = e.state.doc;
            if (!n.focusNode)
                return null;
            let s = e.docView.nearestDesc(n.focusNode)
              , l = s && 0 == s.size
              , d = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
            if (d < 0)
                return null;
            let a = i.resolve(d), c, h;
            if (f(n)) {
                for (c = a; s && !s.node; )
                    s = s.parent;
                let e = s.node;
                if (s && e.isAtom && o.qv.isSelectable(e) && s.parent && !(e.isInline && function(e, t, n) {
                    for (let o = 0 == t, i = t == p(e); o || i; ) {
                        if (e == n)
                            return !0;
                        let t = r(e);
                        if (!(e = e.parentNode))
                            return !1;
                        o = o && 0 == t,
                        i = i && t == p(e)
                    }
                }(n.focusNode, n.focusOffset, s.dom))) {
                    let e = s.posBefore;
                    h = new o.qv(d == e ? a : i.resolve(e))
                }
            } else {
                let t = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
                if (t < 0)
                    return null;
                c = i.resolve(t)
            }
            if (!h) {
                let n = "pointer" == t || e.state.selection.head < a.pos && !l ? 1 : -1;
                h = eO(e, c, a, n)
            }
            return h
        }
        function eg(e) {
            return e.editable ? e.hasFocus() : eM(e) && document.activeElement && document.activeElement.contains(e.dom)
        }
        function ey(e, t=!1) {
            let n = e.state.selection;
            if (eN(e, n),
            eg(e)) {
                if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && M) {
                    let t = e.domSelectionRange()
                      , n = e.domObserver.currentSelection;
                    if (t.anchorNode && n.anchorNode && c(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)) {
                        e.input.mouseDown.delayedSelectionSync = !0,
                        e.domObserver.setCurSelection();
                        return
                    }
                }
                if (e.domObserver.disconnectSelection(),
                e.cursorWrapper) {
                    let t, n, o, i;
                    t = e.domSelection(),
                    n = document.createRange(),
                    (i = "IMG" == (o = e.cursorWrapper.dom).nodeName) ? n.setEnd(o.parentNode, r(o) + 1) : n.setEnd(o, 0),
                    n.collapse(!1),
                    t.removeAllRanges(),
                    t.addRange(n),
                    !i && !e.state.selection.visible && N && S <= 11 && (o.disabled = !0,
                    o.disabled = !1)
                } else {
                    let i, s, r, l, {anchor: d, head: a} = n, c, h;
                    !eb || n instanceof o.Bs || (n.$from.parent.inlineContent || (c = ev(e, n.from)),
                    n.empty || n.$from.parent.inlineContent || (h = ev(e, n.to))),
                    e.docView.setSelection(d, a, e.root, t),
                    eb && (c && eD(c),
                    h && eD(h)),
                    n.visible ? e.dom.classList.remove("ProseMirror-hideselection") : (e.dom.classList.add("ProseMirror-hideselection"),
                    "onselectionchange"in document && ((i = e.dom.ownerDocument).removeEventListener("selectionchange", e.input.hideSelectionGuard),
                    r = (s = e.domSelectionRange()).anchorNode,
                    l = s.anchorOffset,
                    i.addEventListener("selectionchange", e.input.hideSelectionGuard = ()=>{
                        (s.anchorNode != r || s.anchorOffset != l) && (i.removeEventListener("selectionchange", e.input.hideSelectionGuard),
                        setTimeout(()=>{
                            (!eg(e) || e.state.selection.visible) && e.dom.classList.remove("ProseMirror-hideselection")
                        }
                        , 20))
                    }
                    )))
                }
                e.domObserver.setCurSelection(),
                e.domObserver.connectSelection()
            }
        }
        let eb = k || M && x < 63;
        function ev(e, t) {
            let {node: n, offset: o} = e.docView.domFromPos(t, 0)
              , i = o < n.childNodes.length ? n.childNodes[o] : null
              , s = o ? n.childNodes[o - 1] : null;
            if (k && i && "false" == i.contentEditable)
                return ew(i);
            if ((!i || "false" == i.contentEditable) && (!s || "false" == s.contentEditable)) {
                if (i)
                    return ew(i);
                if (s)
                    return ew(s)
            }
        }
        function ew(e) {
            return e.contentEditable = "true",
            k && e.draggable && (e.draggable = !1,
            e.wasDraggable = !0),
            e
        }
        function eD(e) {
            e.contentEditable = "false",
            e.wasDraggable && (e.draggable = !0,
            e.wasDraggable = null)
        }
        function eN(e, t) {
            if (t instanceof o.qv) {
                let n = e.docView.descAt(t.from);
                n != e.lastSelectedViewDesc && (eS(e),
                n && n.selectNode(),
                e.lastSelectedViewDesc = n)
            } else
                eS(e)
        }
        function eS(e) {
            e.lastSelectedViewDesc && (e.lastSelectedViewDesc.parent && e.lastSelectedViewDesc.deselectNode(),
            e.lastSelectedViewDesc = void 0)
        }
        function eO(e, t, n, i) {
            return e.someProp("createSelectionBetween", o=>o(e, t, n)) || o.Bs.between(t, n, i)
        }
        function eC(e) {
            return (!e.editable || !!e.hasFocus()) && eM(e)
        }
        function eM(e) {
            let t = e.domSelectionRange();
            if (!t.anchorNode)
                return !1;
            try {
                return e.dom.contains(3 == t.anchorNode.nodeType ? t.anchorNode.parentNode : t.anchorNode) && (e.editable || e.dom.contains(3 == t.focusNode.nodeType ? t.focusNode.parentNode : t.focusNode))
            } catch (e) {
                return !1
            }
        }
        function ex(e, t) {
            let {$anchor: n, $head: i} = e.selection
              , s = t > 0 ? n.max(i) : n.min(i)
              , r = s.parent.inlineContent ? s.depth ? e.doc.resolve(t > 0 ? s.after() : s.before()) : null : s;
            return r && o.Y1.findFrom(r, t)
        }
        function ek(e, t) {
            return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()),
            !0
        }
        function eT(e, t, n) {
            let i = e.state.selection;
            if (i instanceof o.Bs) {
                if (!i.empty || n.indexOf("s") > -1)
                    return !1;
                if (e.endOfTextblock(t > 0 ? "right" : "left")) {
                    let n = ex(e.state, t);
                    return !!n && n instanceof o.qv && ek(e, n)
                }
                if (!(E && n.indexOf("m") > -1)) {
                    let n = i.$head, s = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter, r;
                    if (!s || s.isText)
                        return !1;
                    let l = t < 0 ? n.pos - s.nodeSize : n.pos;
                    return !!(s.isAtom || (r = e.docView.descAt(l)) && !r.contentDOM) && (o.qv.isSelectable(s) ? ek(e, new o.qv(t < 0 ? e.state.doc.resolve(n.pos - s.nodeSize) : n)) : !!A && ek(e, new o.Bs(e.state.doc.resolve(t < 0 ? l : l + s.nodeSize))))
                }
            } else {
                if (i instanceof o.qv && i.node.isInline)
                    return ek(e, new o.Bs(t > 0 ? i.$to : i.$from));
                let n = ex(e.state, t);
                return !!n && ek(e, n)
            }
        }
        function eE(e) {
            return 3 == e.nodeType ? e.nodeValue.length : e.childNodes.length
        }
        function eP(e) {
            let t = e.pmViewDesc;
            return t && 0 == t.size && (e.nextSibling || "BR" != e.nodeName)
        }
        function eA(e) {
            let t = e.domSelectionRange()
              , n = t.focusNode
              , o = t.focusOffset;
            if (!n)
                return;
            let i, s, l = !1;
            for (O && 1 == n.nodeType && o < eE(n) && eP(n.childNodes[o]) && (l = !0); ; )
                if (o > 0) {
                    if (1 != n.nodeType)
                        break;
                    {
                        let e = n.childNodes[o - 1];
                        if (eP(e))
                            i = n,
                            s = --o;
                        else if (3 == e.nodeType)
                            o = (n = e).nodeValue.length;
                        else
                            break
                    }
                } else if (eR(n))
                    break;
                else {
                    let t = n.previousSibling;
                    for (; t && eP(t); )
                        i = n.parentNode,
                        s = r(t),
                        t = t.previousSibling;
                    if (t)
                        o = eE(n = t);
                    else {
                        if ((n = n.parentNode) == e.dom)
                            break;
                        o = 0
                    }
                }
            l ? eB(e, n, o) : i && eB(e, i, s)
        }
        function eV(e) {
            let t, n, o = e.domSelectionRange(), i = o.focusNode, s = o.focusOffset;
            if (!i)
                return;
            let l = eE(i);
            for (; ; )
                if (s < l) {
                    if (1 != i.nodeType)
                        break;
                    if (eP(i.childNodes[s]))
                        t = i,
                        n = ++s;
                    else
                        break
                } else if (eR(i))
                    break;
                else {
                    let o = i.nextSibling;
                    for (; o && eP(o); )
                        t = o.parentNode,
                        n = r(o) + 1,
                        o = o.nextSibling;
                    if (o)
                        s = 0,
                        l = eE(i = o);
                    else {
                        if ((i = i.parentNode) == e.dom)
                            break;
                        s = l = 0
                    }
                }
            t && eB(e, t, n)
        }
        function eR(e) {
            let t = e.pmViewDesc;
            return t && t.node && t.node.isBlock
        }
        function eB(e, t, n) {
            let o = e.domSelection();
            if (f(o)) {
                let e = document.createRange();
                e.setEnd(t, n),
                e.setStart(t, n),
                o.removeAllRanges(),
                o.addRange(e)
            } else
                o.extend && o.extend(t, n);
            e.domObserver.setCurSelection();
            let {state: i} = e;
            setTimeout(()=>{
                e.state == i && ey(e)
            }
            , 50)
        }
        function eq(e, t, n) {
            let i = e.state.selection;
            if (i instanceof o.Bs && !i.empty || n.indexOf("s") > -1 || E && n.indexOf("m") > -1)
                return !1;
            let {$from: s, $to: r} = i;
            if (!s.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
                let n = ex(e.state, t);
                if (n && n instanceof o.qv)
                    return ek(e, n)
            }
            if (!s.parent.inlineContent) {
                let n = t < 0 ? s : r
                  , l = i instanceof o.C1 ? o.Y1.near(n, t) : o.Y1.findFrom(n, t);
                return !!l && ek(e, l)
            }
            return !1
        }
        function eI(e, t) {
            if (!(e.state.selection instanceof o.Bs))
                return !0;
            let {$head: n, $anchor: i, empty: s} = e.state.selection;
            if (!n.sameParent(i))
                return !0;
            if (!s)
                return !1;
            if (e.endOfTextblock(t > 0 ? "forward" : "backward"))
                return !0;
            let r = !n.textOffset && (t < 0 ? n.nodeBefore : n.nodeAfter);
            if (r && !r.isText) {
                let o = e.state.tr;
                return t < 0 ? o.delete(n.pos - r.nodeSize, n.pos) : o.delete(n.pos, n.pos + r.nodeSize),
                e.dispatch(o),
                !0
            }
            return !1
        }
        function eL(e, t, n) {
            e.domObserver.stop(),
            t.contentEditable = n,
            e.domObserver.start()
        }
        function ez(e, t) {
            e.someProp("transformCopied", n=>{
                t = n(t, e)
            }
            );
            let n = []
              , {content: o, openStart: s, openEnd: r} = t;
            for (; s > 1 && r > 1 && 1 == o.childCount && 1 == o.firstChild.childCount; ) {
                s--,
                r--;
                let e = o.firstChild;
                n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null),
                o = e.content
            }
            let l = e.someProp("clipboardSerializer") || i.PW.fromSchema(e.state.schema)
              , d = eG()
              , a = d.createElement("div");
            a.appendChild(l.serializeFragment(o, {
                document: d
            }));
            let c = a.firstChild, h, u = 0;
            for (; c && 1 == c.nodeType && (h = e_[c.nodeName.toLowerCase()]); ) {
                for (let e = h.length - 1; e >= 0; e--) {
                    let t = d.createElement(h[e]);
                    for (; a.firstChild; )
                        t.appendChild(a.firstChild);
                    a.appendChild(t),
                    u++
                }
                c = a.firstChild
            }
            return c && 1 == c.nodeType && c.setAttribute("data-pm-slice", `${s} ${r}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`),
            {
                dom: a,
                text: e.someProp("clipboardTextSerializer", n=>n(t, e)) || t.content.textBetween(0, t.content.size, "\n\n")
            }
        }
        function eF(e, t, n, o, s) {
            let r, l, d = s.parent.type.spec.code;
            if (!n && !t)
                return null;
            let a = t && (o || d || !n);
            if (a) {
                if (e.someProp("transformPastedText", n=>{
                    t = n(t, d || o, e)
                }
                ),
                d)
                    return t ? new i.p2(i.HY.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))),0,0) : i.p2.empty;
                let n = e.someProp("clipboardTextParser", n=>n(t, s, o, e));
                if (n)
                    l = n;
                else {
                    let n = s.marks()
                      , {schema: o} = e.state
                      , l = i.PW.fromSchema(o);
                    r = document.createElement("div"),
                    t.split(/(?:\r\n?|\n)+/).forEach(e=>{
                        let t = r.appendChild(document.createElement("p"));
                        e && t.appendChild(l.serializeNode(o.text(e, n)))
                    }
                    )
                }
            } else
                e.someProp("transformPastedHTML", t=>{
                    n = t(n, e)
                }
                ),
                r = function(e) {
                    let t = /^(\s*<meta [^>]*>)*/.exec(e);
                    t && (e = e.slice(t[0].length));
                    let n = eG().createElement("div"), o = /<([a-z][^>\s]+)/i.exec(e), i;
                    if ((i = o && e_[o[1].toLowerCase()]) && (e = i.map(e=>"<" + e + ">").join("") + e + i.map(e=>"</" + e + ">").reverse().join("")),
                    n.innerHTML = e,
                    i)
                        for (let e = 0; e < i.length; e++)
                            n = n.querySelector(i[e]) || n;
                    return n
                }(n),
                A && function(e) {
                    let t = e.querySelectorAll(M ? "span:not([class]):not([style])" : "span.Apple-converted-space");
                    for (let n = 0; n < t.length; n++) {
                        let o = t[n];
                        1 == o.childNodes.length && "\xa0" == o.textContent && o.parentNode && o.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), o)
                    }
                }(r);
            let c = r && r.querySelector("[data-pm-slice]")
              , h = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
            if (h && h[3])
                for (let e = +h[3]; e > 0; e--) {
                    let e = r.firstChild;
                    for (; e && 1 != e.nodeType; )
                        e = e.nextSibling;
                    if (!e)
                        break;
                    r = e
                }
            if (l || (l = (e.someProp("clipboardParser") || e.someProp("domParser") || i.aw.fromSchema(e.state.schema)).parseSlice(r, {
                preserveWhitespace: !!(a || h),
                context: s,
                ruleFromNode: e=>"BR" != e.nodeName || e.nextSibling || !e.parentNode || eK.test(e.parentNode.nodeName) ? null : {
                    ignore: !0
                }
            })),
            h)
                l = function(e, t) {
                    if (!e.size)
                        return e;
                    let n = e.content.firstChild.type.schema, o;
                    try {
                        o = JSON.parse(t)
                    } catch (t) {
                        return e
                    }
                    let {content: s, openStart: r, openEnd: l} = e;
                    for (let e = o.length - 2; e >= 0; e -= 2) {
                        let t = n.nodes[o[e]];
                        if (!t || t.hasRequiredAttrs())
                            break;
                        s = i.HY.from(t.create(o[e + 1], s)),
                        r++,
                        l++
                    }
                    return new i.p2(s,r,l)
                }(e$(l, +h[1], +h[2]), h[4]);
            else if ((l = i.p2.maxOpen(function(e, t) {
                if (e.childCount < 2)
                    return e;
                for (let n = t.depth; n >= 0; n--) {
                    let o = t.node(n).contentMatchAt(t.index(n)), s, r = [];
                    if (e.forEach(e=>{
                        if (!r)
                            return;
                        let t = o.findWrapping(e.type), n;
                        if (!t)
                            return r = null;
                        if (n = r.length && s.length && function e(t, n, o, s, r) {
                            if (r < t.length && r < n.length && t[r] == n[r]) {
                                let l = e(t, n, o, s.lastChild, r + 1);
                                if (l)
                                    return s.copy(s.content.replaceChild(s.childCount - 1, l));
                                if (s.contentMatchAt(s.childCount).matchType(r == t.length - 1 ? o.type : t[r + 1]))
                                    return s.copy(s.content.append(i.HY.from(eH(o, t, r + 1))))
                            }
                        }(t, s, e, r[r.length - 1], 0))
                            r[r.length - 1] = n;
                        else {
                            r.length && (r[r.length - 1] = function e(t, n) {
                                if (0 == n)
                                    return t;
                                let o = t.content.replaceChild(t.childCount - 1, e(t.lastChild, n - 1))
                                  , s = t.contentMatchAt(t.childCount).fillBefore(i.HY.empty, !0);
                                return t.copy(o.append(s))
                            }(r[r.length - 1], s.length));
                            let n = eH(e, t);
                            r.push(n),
                            o = o.matchType(n.type),
                            s = t
                        }
                    }
                    ),
                    r)
                        return i.HY.from(r)
                }
                return e
            }(l.content, s), !0)).openStart || l.openEnd) {
                let e = 0
                  , t = 0;
                for (let t = l.content.firstChild; e < l.openStart && !t.type.spec.isolating; e++,
                t = t.firstChild)
                    ;
                for (let e = l.content.lastChild; t < l.openEnd && !e.type.spec.isolating; t++,
                e = e.lastChild)
                    ;
                l = e$(l, e, t)
            }
            return e.someProp("transformPasted", t=>{
                l = t(l, e)
            }
            ),
            l
        }
        let eK = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
        function eH(e, t, n=0) {
            for (let o = t.length - 1; o >= n; o--)
                e = t[o].create(null, i.HY.from(e));
            return e
        }
        function eW(e, t, n, o, s, r) {
            let l = t < 0 ? e.firstChild : e.lastChild
              , d = l.content;
            return s < o - 1 && (d = eW(d, t, n, o, s + 1, r)),
            s >= n && (d = t < 0 ? l.contentMatchAt(0).fillBefore(d, e.childCount > 1 || r <= s).append(d) : d.append(l.contentMatchAt(l.childCount).fillBefore(i.HY.empty, !0))),
            e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(d))
        }
        function e$(e, t, n) {
            return t < e.openStart && (e = new i.p2(eW(e.content, -1, t, e.openStart, 0, e.openEnd),t,e.openEnd)),
            n < e.openEnd && (e = new i.p2(eW(e.content, 1, n, e.openEnd, 0, 0),e.openStart,n)),
            e
        }
        let e_ = {
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
          , eY = null;
        function eG() {
            return eY || (eY = document.implementation.createHTMLDocument("title"))
        }
        let eU = {}
          , ej = {}
          , eX = {
            touchstart: !0,
            touchmove: !0
        };
        class eJ {
            constructor() {
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
            }
        }
        function eQ(e, t) {
            e.input.lastSelectionOrigin = t,
            e.input.lastSelectionTime = Date.now()
        }
        function eZ(e) {
            e.someProp("handleDOMEvents", t=>{
                for (let n in t)
                    e.input.eventHandlers[n] || e.dom.addEventListener(n, e.input.eventHandlers[n] = t=>e0(e, t))
            }
            )
        }
        function e0(e, t) {
            return e.someProp("handleDOMEvents", n=>{
                let o = n[t.type];
                return !!o && (o(e, t) || t.defaultPrevented)
            }
            )
        }
        function e1(e) {
            return {
                left: e.clientX,
                top: e.clientY
            }
        }
        function e2(e, t, n, o, i) {
            if (-1 == o)
                return !1;
            let s = e.state.doc.resolve(o);
            for (let o = s.depth + 1; o > 0; o--)
                if (e.someProp(t, t=>o > s.depth ? t(e, n, s.nodeAfter, s.before(o), i, !0) : t(e, n, s.node(o), s.before(o), i, !1)))
                    return !0;
            return !1
        }
        function e3(e, t, n) {
            e.focused || e.focus();
            let o = e.state.tr.setSelection(t);
            "pointer" == n && o.setMeta("pointer", !0),
            e.dispatch(o)
        }
        ej.keydown = (e,t)=>{
            if (e.input.shiftKey = 16 == t.keyCode || t.shiftKey,
            !e6(e, t) && (e.input.lastKeyCode = t.keyCode,
            e.input.lastKeyCodeTime = Date.now(),
            !P || !M || 13 != t.keyCode)) {
                if (229 != t.keyCode && e.domObserver.forceFlush(),
                !T || 13 != t.keyCode || t.ctrlKey || t.altKey || t.metaKey)
                    e.someProp("handleKeyDown", n=>n(e, t)) || function(e, t) {
                        let n;
                        let o = t.keyCode
                          , i = (n = "",
                        t.ctrlKey && (n += "c"),
                        t.metaKey && (n += "m"),
                        t.altKey && (n += "a"),
                        t.shiftKey && (n += "s"),
                        n);
                        if (8 == o || E && 72 == o && "c" == i)
                            return eI(e, -1) || eA(e);
                        if (46 == o || E && 68 == o && "c" == i)
                            return eI(e, 1) || eV(e);
                        if (13 == o || 27 == o)
                            return !0;
                        if (37 == o || E && 66 == o && "c" == i)
                            return eT(e, -1, i) || eA(e);
                        if (39 == o || E && 70 == o && "c" == i)
                            return eT(e, 1, i) || eV(e);
                        if (38 == o || E && 80 == o && "c" == i)
                            return eq(e, -1, i) || eA(e);
                        if (40 == o || E && 78 == o && "c" == i)
                            return function(e) {
                                if (!k || e.state.selection.$head.parentOffset > 0)
                                    return !1;
                                let {focusNode: t, focusOffset: n} = e.domSelectionRange();
                                if (t && 1 == t.nodeType && 0 == n && t.firstChild && "false" == t.firstChild.contentEditable) {
                                    let n = t.firstChild;
                                    eL(e, n, "true"),
                                    setTimeout(()=>eL(e, n, "false"), 20)
                                }
                                return !1
                            }(e) || eq(e, 1, i) || eV(e);
                        else if (i == (E ? "m" : "c") && (66 == o || 73 == o || 89 == o || 90 == o))
                            return !0;
                        return !1
                    }(e, t) ? t.preventDefault() : eQ(e, "key");
                else {
                    let t = Date.now();
                    e.input.lastIOSEnter = t,
                    e.input.lastIOSEnterFallbackTimeout = setTimeout(()=>{
                        e.input.lastIOSEnter == t && (e.someProp("handleKeyDown", t=>t(e, m(13, "Enter"))),
                        e.input.lastIOSEnter = 0)
                    }
                    , 200)
                }
            }
        }
        ,
        ej.keyup = (e,t)=>{
            16 == t.keyCode && (e.input.shiftKey = !1)
        }
        ,
        ej.keypress = (e,t)=>{
            if (e6(e, t) || !t.charCode || t.ctrlKey && !t.altKey || E && t.metaKey)
                return;
            if (e.someProp("handleKeyPress", n=>n(e, t))) {
                t.preventDefault();
                return
            }
            let n = e.state.selection;
            if (!(n instanceof o.Bs) || !n.$from.sameParent(n.$to)) {
                let o = String.fromCharCode(t.charCode);
                /[\r\n]/.test(o) || e.someProp("handleTextInput", t=>t(e, n.$from.pos, n.$to.pos, o)) || e.dispatch(e.state.tr.insertText(o).scrollIntoView()),
                t.preventDefault()
            }
        }
        ;
        let e5 = E ? "metaKey" : "ctrlKey";
        eU.mousedown = (e,t)=>{
            var n;
            let i, s;
            e.input.shiftKey = t.shiftKey;
            let r = te(e)
              , l = Date.now()
              , d = "singleClick";
            l - e.input.lastClick.time < 500 && (i = (n = e.input.lastClick).x - t.clientX) * i + (s = n.y - t.clientY) * s < 100 && !t[e5] && ("singleClick" == e.input.lastClick.type ? d = "doubleClick" : "doubleClick" == e.input.lastClick.type && (d = "tripleClick")),
            e.input.lastClick = {
                time: l,
                x: t.clientX,
                y: t.clientY,
                type: d
            };
            let a = e.posAtCoords(e1(t));
            a && ("singleClick" == d ? (e.input.mouseDown && e.input.mouseDown.done(),
            e.input.mouseDown = new e8(e,a,t,!!r)) : ("doubleClick" == d ? function(e, t, n, o) {
                return e2(e, "handleDoubleClickOn", t, n, o) || e.someProp("handleDoubleClick", n=>n(e, t, o))
            }
            : function(e, t, n, i) {
                return e2(e, "handleTripleClickOn", t, n, i) || e.someProp("handleTripleClick", n=>n(e, t, i)) || function(e, t, n) {
                    if (0 != n.button)
                        return !1;
                    let i = e.state.doc;
                    if (-1 == t)
                        return !!i.inlineContent && (e3(e, o.Bs.create(i, 0, i.content.size), "pointer"),
                        !0);
                    let s = i.resolve(t);
                    for (let t = s.depth + 1; t > 0; t--) {
                        let n = t > s.depth ? s.nodeAfter : s.node(t)
                          , r = s.before(t);
                        if (n.inlineContent)
                            e3(e, o.Bs.create(i, r + 1, r + 1 + n.content.size), "pointer");
                        else {
                            if (!o.qv.isSelectable(n))
                                continue;
                            e3(e, o.qv.create(i, r), "pointer")
                        }
                        return !0
                    }
                }(e, n, i)
            }
            )(e, a.pos, a.inside, t) ? t.preventDefault() : eQ(e, "pointer"))
        }
        ;
        class e8 {
            constructor(e, t, n, i) {
                let s, r;
                if (this.view = e,
                this.pos = t,
                this.event = n,
                this.flushed = i,
                this.delayedSelectionSync = !1,
                this.mightDrag = null,
                this.startDoc = e.state.doc,
                this.selectNode = !!n[e5],
                this.allowDefault = n.shiftKey,
                t.inside > -1)
                    s = e.state.doc.nodeAt(t.inside),
                    r = t.inside;
                else {
                    let n = e.state.doc.resolve(t.pos);
                    s = n.parent,
                    r = n.depth ? n.before() : 0
                }
                let l = i ? null : n.target
                  , d = l ? e.docView.nearestDesc(l, !0) : null;
                this.target = d ? d.dom : null;
                let {selection: a} = e.state;
                (0 == n.button && s.type.spec.draggable && !1 !== s.type.spec.selectable || a instanceof o.qv && a.from <= r && a.to > r) && (this.mightDrag = {
                    node: s,
                    pos: r,
                    addAttr: !!(this.target && !this.target.draggable),
                    setUneditable: !!(this.target && O && !this.target.hasAttribute("contentEditable"))
                }),
                this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(),
                this.mightDrag.addAttr && (this.target.draggable = !0),
                this.mightDrag.setUneditable && setTimeout(()=>{
                    this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
                }
                , 20),
                this.view.domObserver.start()),
                e.root.addEventListener("mouseup", this.up = this.up.bind(this)),
                e.root.addEventListener("mousemove", this.move = this.move.bind(this)),
                eQ(e, "pointer")
            }
            done() {
                this.view.root.removeEventListener("mouseup", this.up),
                this.view.root.removeEventListener("mousemove", this.move),
                this.mightDrag && this.target && (this.view.domObserver.stop(),
                this.mightDrag.addAttr && this.target.removeAttribute("draggable"),
                this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"),
                this.view.domObserver.start()),
                this.delayedSelectionSync && setTimeout(()=>ey(this.view)),
                this.view.input.mouseDown = null
            }
            up(e) {
                if (this.done(),
                !this.view.dom.contains(e.target))
                    return;
                let t = this.pos;
                if (this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(e1(e))),
                this.updateAllowDefault(e),
                this.allowDefault || !t)
                    eQ(this.view, "pointer");
                else {
                    var n, i, s, r;
                    (n = this.view,
                    i = t.pos,
                    s = t.inside,
                    r = this.selectNode,
                    e2(n, "handleClickOn", i, s, e) || n.someProp("handleClick", t=>t(n, i, e)) || (r ? function(e, t) {
                        if (-1 == t)
                            return !1;
                        let n = e.state.selection, i, s;
                        n instanceof o.qv && (i = n.node);
                        let r = e.state.doc.resolve(t);
                        for (let e = r.depth + 1; e > 0; e--) {
                            let t = e > r.depth ? r.nodeAfter : r.node(e);
                            if (o.qv.isSelectable(t)) {
                                s = i && n.$from.depth > 0 && e >= n.$from.depth && r.before(n.$from.depth + 1) == n.$from.pos ? r.before(n.$from.depth) : r.before(e);
                                break
                            }
                        }
                        return null != s && (e3(e, o.qv.create(e.state.doc, s), "pointer"),
                        !0)
                    }(n, s) : function(e, t) {
                        if (-1 == t)
                            return !1;
                        let n = e.state.doc.resolve(t)
                          , i = n.nodeAfter;
                        return !!(i && i.isAtom && o.qv.isSelectable(i)) && (e3(e, new o.qv(n), "pointer"),
                        !0)
                    }(n, s))) ? e.preventDefault() : 0 == e.button && (this.flushed || k && this.mightDrag && !this.mightDrag.node.isAtom || M && !this.view.state.selection.visible && 2 >= Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to))) ? (e3(this.view, o.Y1.near(this.view.state.doc.resolve(t.pos)), "pointer"),
                    e.preventDefault()) : eQ(this.view, "pointer")
                }
            }
            move(e) {
                this.updateAllowDefault(e),
                eQ(this.view, "pointer"),
                0 == e.buttons && this.done()
            }
            updateAllowDefault(e) {
                !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
            }
        }
        function e6(e, t) {
            return !!e.composing || !!(k && 500 > Math.abs(t.timeStamp - e.input.compositionEndedAt)) && (e.input.compositionEndedAt = -2e8,
            !0)
        }
        eU.touchstart = e=>{
            e.input.lastTouch = Date.now(),
            te(e),
            eQ(e, "pointer")
        }
        ,
        eU.touchmove = e=>{
            e.input.lastTouch = Date.now(),
            eQ(e, "pointer")
        }
        ,
        eU.contextmenu = e=>te(e);
        let e7 = P ? 5e3 : -1;
        function e9(e, t) {
            clearTimeout(e.input.composingTimeout),
            t > -1 && (e.input.composingTimeout = setTimeout(()=>te(e), t))
        }
        function e4(e) {
            let t;
            for (e.composing && (e.input.composing = !1,
            e.input.compositionEndedAt = ((t = document.createEvent("Event")).initEvent("event", !0, !0),
            t.timeStamp)); e.input.compositionNodes.length > 0; )
                e.input.compositionNodes.pop().markParentsDirty()
        }
        function te(e, t=!1) {
            if (!P || !(e.domObserver.flushingSoon >= 0)) {
                if (e.domObserver.forceFlush(),
                e4(e),
                t || e.docView && e.docView.dirty) {
                    let t = em(e);
                    return t && !t.eq(e.state.selection) ? e.dispatch(e.state.tr.setSelection(t)) : e.updateState(e.state),
                    !0
                }
                return !1
            }
        }
        ej.compositionstart = ej.compositionupdate = e=>{
            if (!e.composing) {
                e.domObserver.flush();
                let {state: t} = e
                  , n = t.selection.$from;
                if (t.selection.empty && (t.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some(e=>!1 === e.type.spec.inclusive)))
                    e.markCursor = e.state.storedMarks || n.marks(),
                    te(e, !0),
                    e.markCursor = null;
                else if (te(e),
                O && t.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
                    let t = e.domSelectionRange();
                    for (let n = t.focusNode, o = t.focusOffset; n && 1 == n.nodeType && 0 != o; ) {
                        let t = o < 0 ? n.lastChild : n.childNodes[o - 1];
                        if (!t)
                            break;
                        if (3 == t.nodeType) {
                            e.domSelection().collapse(t, t.nodeValue.length);
                            break
                        }
                        n = t,
                        o = -1
                    }
                }
                e.input.composing = !0
            }
            e9(e, e7)
        }
        ,
        ej.compositionend = (e,t)=>{
            e.composing && (e.input.composing = !1,
            e.input.compositionEndedAt = t.timeStamp,
            e9(e, 20))
        }
        ;
        let tt = N && S < 15 || T && V < 604;
        function tn(e, t, n, o, s) {
            let r = eF(e, t, n, o, e.state.selection.$from);
            if (e.someProp("handlePaste", t=>t(e, s, r || i.p2.empty)))
                return !0;
            if (!r)
                return !1;
            let l = 0 == r.openStart && 0 == r.openEnd && 1 == r.content.childCount ? r.content.firstChild : null
              , d = l ? e.state.tr.replaceSelectionWith(l, e.input.shiftKey) : e.state.tr.replaceSelection(r);
            return e.dispatch(d.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")),
            !0
        }
        eU.copy = ej.cut = (e,t)=>{
            let n = e.state.selection
              , o = "cut" == t.type;
            if (n.empty)
                return;
            let i = tt ? null : t.clipboardData
              , {dom: s, text: r} = ez(e, n.content());
            i ? (t.preventDefault(),
            i.clearData(),
            i.setData("text/html", s.innerHTML),
            i.setData("text/plain", r)) : function(e, t) {
                if (!e.dom.parentNode)
                    return;
                let n = e.dom.parentNode.appendChild(document.createElement("div"));
                n.appendChild(t),
                n.style.cssText = "position: fixed; left: -10000px; top: 10px";
                let o = getSelection()
                  , i = document.createRange();
                i.selectNodeContents(t),
                e.dom.blur(),
                o.removeAllRanges(),
                o.addRange(i),
                setTimeout(()=>{
                    n.parentNode && n.parentNode.removeChild(n),
                    e.focus()
                }
                , 50)
            }(e, s),
            o && e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
        }
        ,
        ej.paste = (e,t)=>{
            if (e.composing && !P)
                return;
            let n = tt ? null : t.clipboardData;
            n && tn(e, n.getData("text/plain"), n.getData("text/html"), e.input.shiftKey, t) ? t.preventDefault() : function(e, t) {
                if (!e.dom.parentNode)
                    return;
                let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code
                  , o = e.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
                n || (o.contentEditable = "true"),
                o.style.cssText = "position: fixed; left: -10000px; top: 10px",
                o.focus(),
                setTimeout(()=>{
                    e.focus(),
                    o.parentNode && o.parentNode.removeChild(o),
                    n ? tn(e, o.value, null, e.input.shiftKey, t) : tn(e, o.textContent, o.innerHTML, e.input.shiftKey, t)
                }
                , 50)
            }(e, t)
        }
        ;
        class to {
            constructor(e, t) {
                this.slice = e,
                this.move = t
            }
        }
        let ti = E ? "altKey" : "ctrlKey";
        for (let e in eU.dragstart = (e,t)=>{
            let n = e.input.mouseDown;
            if (n && n.done(),
            !t.dataTransfer)
                return;
            let i = e.state.selection
              , s = i.empty ? null : e.posAtCoords(e1(t));
            if (s && s.pos >= i.from && s.pos <= (i instanceof o.qv ? i.to - 1 : i.to))
                ;
            else if (n && n.mightDrag)
                e.dispatch(e.state.tr.setSelection(o.qv.create(e.state.doc, n.mightDrag.pos)));
            else if (t.target && 1 == t.target.nodeType) {
                let n = e.docView.nearestDesc(t.target, !0);
                n && n.node.type.spec.draggable && n != e.docView && e.dispatch(e.state.tr.setSelection(o.qv.create(e.state.doc, n.posBefore)))
            }
            let r = e.state.selection.content()
              , {dom: l, text: d} = ez(e, r);
            t.dataTransfer.clearData(),
            t.dataTransfer.setData(tt ? "Text" : "text/html", l.innerHTML),
            t.dataTransfer.effectAllowed = "copyMove",
            tt || t.dataTransfer.setData("text/plain", d),
            e.dragging = new to(r,!t[ti])
        }
        ,
        eU.dragend = e=>{
            let t = e.dragging;
            window.setTimeout(()=>{
                e.dragging == t && (e.dragging = null)
            }
            , 50)
        }
        ,
        ej.dragover = ej.dragenter = (e,t)=>t.preventDefault(),
        ej.drop = (e,t)=>{
            let n = e.dragging;
            if (e.dragging = null,
            !t.dataTransfer)
                return;
            let r = e.posAtCoords(e1(t));
            if (!r)
                return;
            let l = e.state.doc.resolve(r.pos)
              , d = n && n.slice;
            d ? e.someProp("transformPasted", t=>{
                d = t(d, e)
            }
            ) : d = eF(e, t.dataTransfer.getData(tt ? "Text" : "text/plain"), tt ? null : t.dataTransfer.getData("text/html"), !1, l);
            let a = !!(n && !t[ti]);
            if (e.someProp("handleDrop", n=>n(e, t, d || i.p2.empty, a))) {
                t.preventDefault();
                return
            }
            if (!d)
                return;
            t.preventDefault();
            let c = d ? (0,
            s.nj)(e.state.doc, l.pos, d) : l.pos;
            null == c && (c = l.pos);
            let h = e.state.tr;
            a && h.deleteSelection();
            let u = h.mapping.map(c)
              , p = 0 == d.openStart && 0 == d.openEnd && 1 == d.content.childCount
              , f = h.doc;
            if (p ? h.replaceRangeWith(u, u, d.content.firstChild) : h.replaceRange(u, u, d),
            h.doc.eq(f))
                return;
            let m = h.doc.resolve(u);
            if (p && o.qv.isSelectable(d.content.firstChild) && m.nodeAfter && m.nodeAfter.sameMarkup(d.content.firstChild))
                h.setSelection(new o.qv(m));
            else {
                let t = h.mapping.map(c);
                h.mapping.maps[h.mapping.maps.length - 1].forEach((e,n,o,i)=>t = i),
                h.setSelection(eO(e, m, h.doc.resolve(t)))
            }
            e.focus(),
            e.dispatch(h.setMeta("uiEvent", "drop"))
        }
        ,
        eU.focus = e=>{
            e.input.lastFocus = Date.now(),
            e.focused || (e.domObserver.stop(),
            e.dom.classList.add("ProseMirror-focused"),
            e.domObserver.start(),
            e.focused = !0,
            setTimeout(()=>{
                e.docView && e.hasFocus() && !e.domObserver.currentSelection.eq(e.domSelectionRange()) && ey(e)
            }
            , 20))
        }
        ,
        eU.blur = (e,t)=>{
            e.focused && (e.domObserver.stop(),
            e.dom.classList.remove("ProseMirror-focused"),
            e.domObserver.start(),
            t.relatedTarget && e.dom.contains(t.relatedTarget) && e.domObserver.currentSelection.clear(),
            e.focused = !1)
        }
        ,
        eU.beforeinput = (e,t)=>{
            if (M && P && "deleteContentBackward" == t.inputType) {
                e.domObserver.flushSoon();
                let {domChangeCount: t} = e.input;
                setTimeout(()=>{
                    if (e.input.domChangeCount != t || (e.dom.blur(),
                    e.focus(),
                    e.someProp("handleKeyDown", t=>t(e, m(8, "Backspace")))))
                        return;
                    let {$cursor: n} = e.state.selection;
                    n && n.pos > 0 && e.dispatch(e.state.tr.delete(n.pos - 1, n.pos).scrollIntoView())
                }
                , 50)
            }
        }
        ,
        ej)
            eU[e] = ej[e];
        function ts(e, t) {
            if (e == t)
                return !0;
            for (let n in e)
                if (e[n] !== t[n])
                    return !1;
            for (let n in t)
                if (!(n in e))
                    return !1;
            return !0
        }
        class tr {
            constructor(e, t) {
                this.toDOM = e,
                this.spec = t || th,
                this.side = this.spec.side || 0
            }
            map(e, t, n, o) {
                let {pos: i, deleted: s} = e.mapResult(t.from + o, this.side < 0 ? -1 : 1);
                return s ? null : new ta(i - n,i - n,this)
            }
            valid() {
                return !0
            }
            eq(e) {
                return this == e || e instanceof tr && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && ts(this.spec, e.spec))
            }
            destroy(e) {
                this.spec.destroy && this.spec.destroy(e)
            }
        }
        class tl {
            constructor(e, t) {
                this.attrs = e,
                this.spec = t || th
            }
            map(e, t, n, o) {
                let i = e.map(t.from + o, this.spec.inclusiveStart ? -1 : 1) - n
                  , s = e.map(t.to + o, this.spec.inclusiveEnd ? 1 : -1) - n;
                return i >= s ? null : new ta(i,s,this)
            }
            valid(e, t) {
                return t.from < t.to
            }
            eq(e) {
                return this == e || e instanceof tl && ts(this.attrs, e.attrs) && ts(this.spec, e.spec)
            }
            static is(e) {
                return e.type instanceof tl
            }
            destroy() {}
        }
        class td {
            constructor(e, t) {
                this.attrs = e,
                this.spec = t || th
            }
            map(e, t, n, o) {
                let i = e.mapResult(t.from + o, 1);
                if (i.deleted)
                    return null;
                let s = e.mapResult(t.to + o, -1);
                return s.deleted || s.pos <= i.pos ? null : new ta(i.pos - n,s.pos - n,this)
            }
            valid(e, t) {
                let {index: n, offset: o} = e.content.findIndex(t.from), i;
                return o == t.from && !(i = e.child(n)).isText && o + i.nodeSize == t.to
            }
            eq(e) {
                return this == e || e instanceof td && ts(this.attrs, e.attrs) && ts(this.spec, e.spec)
            }
            destroy() {}
        }
        class ta {
            constructor(e, t, n) {
                this.from = e,
                this.to = t,
                this.type = n
            }
            copy(e, t) {
                return new ta(e,t,this.type)
            }
            eq(e, t=0) {
                return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
            }
            map(e, t, n) {
                return this.type.map(e, this, t, n)
            }
            static widget(e, t, n) {
                return new ta(e,e,new tr(t,n))
            }
            static inline(e, t, n, o) {
                return new ta(e,t,new tl(n,o))
            }
            static node(e, t, n, o) {
                return new ta(e,t,new td(n,o))
            }
            get spec() {
                return this.type.spec
            }
            get inline() {
                return this.type instanceof tl
            }
        }
        let tc = []
          , th = {};
        class tu {
            constructor(e, t) {
                this.local = e.length ? e : tc,
                this.children = t.length ? t : tc
            }
            static create(e, t) {
                return t.length ? tb(t, e, 0, th) : tp
            }
            find(e, t, n) {
                let o = [];
                return this.findInner(null == e ? 0 : e, null == t ? 1e9 : t, o, 0, n),
                o
            }
            findInner(e, t, n, o, i) {
                for (let s = 0; s < this.local.length; s++) {
                    let r = this.local[s];
                    r.from <= t && r.to >= e && (!i || i(r.spec)) && n.push(r.copy(r.from + o, r.to + o))
                }
                for (let s = 0; s < this.children.length; s += 3)
                    if (this.children[s] < t && this.children[s + 1] > e) {
                        let r = this.children[s] + 1;
                        this.children[s + 2].findInner(e - r, t - r, n, o + r, i)
                    }
            }
            map(e, t, n) {
                return this == tp || 0 == e.maps.length ? this : this.mapInner(e, t, 0, 0, n || th)
            }
            mapInner(e, t, n, o, i) {
                let s;
                for (let r = 0; r < this.local.length; r++) {
                    let l = this.local[r].map(e, n, o);
                    l && l.type.valid(t, l) ? (s || (s = [])).push(l) : i.onRemove && i.onRemove(this.local[r].spec)
                }
                return this.children.length ? function(e, t, n, o, i, s, r) {
                    let l = e.slice();
                    for (let e = 0, t = s; e < n.maps.length; e++) {
                        let o = 0;
                        n.maps[e].forEach((e,n,s,r)=>{
                            let d = r - s - (n - e);
                            for (let r = 0; r < l.length; r += 3) {
                                let a = l[r + 1];
                                if (a < 0 || e > a + t - o)
                                    continue;
                                let c = l[r] + t - o;
                                n >= c ? l[r + 1] = e <= c ? -2 : -1 : s >= i && d && (l[r] += d,
                                l[r + 1] += d)
                            }
                            o += d
                        }
                        ),
                        t = n.maps[e].map(t, -1)
                    }
                    let d = !1;
                    for (let t = 0; t < l.length; t += 3)
                        if (l[t + 1] < 0) {
                            if (-2 == l[t + 1]) {
                                d = !0,
                                l[t + 1] = -1;
                                continue
                            }
                            let a = n.map(e[t] + s)
                              , c = a - i;
                            if (c < 0 || c >= o.content.size) {
                                d = !0;
                                continue
                            }
                            let h = n.map(e[t + 1] + s, -1) - i
                              , {index: u, offset: p} = o.content.findIndex(c)
                              , f = o.maybeChild(u);
                            if (f && p == c && p + f.nodeSize == h) {
                                let o = l[t + 2].mapInner(n, f, a + 1, e[t] + s + 1, r);
                                o != tp ? (l[t] = c,
                                l[t + 1] = h,
                                l[t + 2] = o) : (l[t + 1] = -2,
                                d = !0)
                            } else
                                d = !0
                        }
                    if (d) {
                        let d = tb(function(e, t, n, o, i, s, r) {
                            for (let l = 0; l < e.length; l += 3)
                                -1 == e[l + 1] && function e(t, s) {
                                    for (let e = 0; e < t.local.length; e++) {
                                        let l = t.local[e].map(o, i, s);
                                        l ? n.push(l) : r.onRemove && r.onRemove(t.local[e].spec)
                                    }
                                    for (let n = 0; n < t.children.length; n += 3)
                                        e(t.children[n + 2], t.children[n] + s + 1)
                                }(e[l + 2], t[l] + s + 1);
                            return n
                        }(l, e, t, n, i, s, r), o, 0, r);
                        t = d.local;
                        for (let e = 0; e < l.length; e += 3)
                            l[e + 1] < 0 && (l.splice(e, 3),
                            e -= 3);
                        for (let e = 0, t = 0; e < d.children.length; e += 3) {
                            let n = d.children[e];
                            for (; t < l.length && l[t] < n; )
                                t += 3;
                            l.splice(t, 0, d.children[e], d.children[e + 1], d.children[e + 2])
                        }
                    }
                    return new tu(t.sort(tv),l)
                }(this.children, s || [], e, t, n, o, i) : s ? new tu(s.sort(tv),tc) : tp
            }
            add(e, t) {
                return t.length ? this == tp ? tu.create(e, t) : this.addInner(e, t, 0) : this
            }
            addInner(e, t, n) {
                let o, i = 0;
                e.forEach((e,s)=>{
                    let r = s + n, l;
                    if (l = tg(t, e, r)) {
                        for (o || (o = this.children.slice()); i < o.length && o[i] < s; )
                            i += 3;
                        o[i] == s ? o[i + 2] = o[i + 2].addInner(e, l, r + 1) : o.splice(i, 0, s, s + e.nodeSize, tb(l, e, r + 1, th)),
                        i += 3
                    }
                }
                );
                let s = tm(i ? ty(t) : t, -n);
                for (let t = 0; t < s.length; t++)
                    s[t].type.valid(e, s[t]) || s.splice(t--, 1);
                return new tu(s.length ? this.local.concat(s).sort(tv) : this.local,o || this.children)
            }
            remove(e) {
                return 0 == e.length || this == tp ? this : this.removeInner(e, 0)
            }
            removeInner(e, t) {
                let n = this.children
                  , o = this.local;
                for (let o = 0; o < n.length; o += 3) {
                    let i;
                    let s = n[o] + t
                      , r = n[o + 1] + t;
                    for (let t = 0, n; t < e.length; t++)
                        (n = e[t]) && n.from > s && n.to < r && (e[t] = null,
                        (i || (i = [])).push(n));
                    if (!i)
                        continue;
                    n == this.children && (n = this.children.slice());
                    let l = n[o + 2].removeInner(i, s + 1);
                    l != tp ? n[o + 2] = l : (n.splice(o, 3),
                    o -= 3)
                }
                if (o.length) {
                    for (let n = 0, i; n < e.length; n++)
                        if (i = e[n])
                            for (let e = 0; e < o.length; e++)
                                o[e].eq(i, t) && (o == this.local && (o = this.local.slice()),
                                o.splice(e--, 1))
                }
                return n == this.children && o == this.local ? this : o.length || n.length ? new tu(o,n) : tp
            }
            forChild(e, t) {
                let n, o;
                if (this == tp)
                    return this;
                if (t.isLeaf)
                    return tu.empty;
                for (let t = 0; t < this.children.length; t += 3)
                    if (this.children[t] >= e) {
                        this.children[t] == e && (n = this.children[t + 2]);
                        break
                    }
                let i = e + 1
                  , s = i + t.content.size;
                for (let e = 0; e < this.local.length; e++) {
                    let t = this.local[e];
                    if (t.from < s && t.to > i && t.type instanceof tl) {
                        let e = Math.max(i, t.from) - i
                          , n = Math.min(s, t.to) - i;
                        e < n && (o || (o = [])).push(t.copy(e, n))
                    }
                }
                if (o) {
                    let e = new tu(o.sort(tv),tc);
                    return n ? new tf([e, n]) : e
                }
                return n || tp
            }
            eq(e) {
                if (this == e)
                    return !0;
                if (!(e instanceof tu) || this.local.length != e.local.length || this.children.length != e.children.length)
                    return !1;
                for (let t = 0; t < this.local.length; t++)
                    if (!this.local[t].eq(e.local[t]))
                        return !1;
                for (let t = 0; t < this.children.length; t += 3)
                    if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
                        return !1;
                return !0
            }
            locals(e) {
                return tw(this.localsInner(e))
            }
            localsInner(e) {
                if (this == tp)
                    return tc;
                if (e.inlineContent || !this.local.some(tl.is))
                    return this.local;
                let t = [];
                for (let e = 0; e < this.local.length; e++)
                    this.local[e].type instanceof tl || t.push(this.local[e]);
                return t
            }
        }
        tu.empty = new tu([],[]),
        tu.removeOverlap = tw;
        let tp = tu.empty;
        class tf {
            constructor(e) {
                this.members = e
            }
            map(e, t) {
                let n = this.members.map(n=>n.map(e, t, th));
                return tf.from(n)
            }
            forChild(e, t) {
                if (t.isLeaf)
                    return tu.empty;
                let n = [];
                for (let o = 0; o < this.members.length; o++) {
                    let i = this.members[o].forChild(e, t);
                    i != tp && (i instanceof tf ? n = n.concat(i.members) : n.push(i))
                }
                return tf.from(n)
            }
            eq(e) {
                if (!(e instanceof tf) || e.members.length != this.members.length)
                    return !1;
                for (let t = 0; t < this.members.length; t++)
                    if (!this.members[t].eq(e.members[t]))
                        return !1;
                return !0
            }
            locals(e) {
                let t, n = !0;
                for (let o = 0; o < this.members.length; o++) {
                    let i = this.members[o].localsInner(e);
                    if (i.length) {
                        if (t) {
                            n && (t = t.slice(),
                            n = !1);
                            for (let e = 0; e < i.length; e++)
                                t.push(i[e])
                        } else
                            t = i
                    }
                }
                return t ? tw(n ? t : t.sort(tv)) : tc
            }
            static from(e) {
                switch (e.length) {
                case 0:
                    return tp;
                case 1:
                    return e[0];
                default:
                    return new tf(e.every(e=>e instanceof tu) ? e : e.reduce((e,t)=>e.concat(t instanceof tu ? t : t.members), []))
                }
            }
        }
        function tm(e, t) {
            if (!t || !e.length)
                return e;
            let n = [];
            for (let o = 0; o < e.length; o++) {
                let i = e[o];
                n.push(new ta(i.from + t,i.to + t,i.type))
            }
            return n
        }
        function tg(e, t, n) {
            if (t.isLeaf)
                return null;
            let o = n + t.nodeSize
              , i = null;
            for (let t = 0, s; t < e.length; t++)
                (s = e[t]) && s.from > n && s.to < o && ((i || (i = [])).push(s),
                e[t] = null);
            return i
        }
        function ty(e) {
            let t = [];
            for (let n = 0; n < e.length; n++)
                null != e[n] && t.push(e[n]);
            return t
        }
        function tb(e, t, n, o) {
            let i = []
              , s = !1;
            t.forEach((t,r)=>{
                let l = tg(e, t, r + n);
                if (l) {
                    s = !0;
                    let e = tb(l, t, n + r + 1, o);
                    e != tp && i.push(r, r + t.nodeSize, e)
                }
            }
            );
            let r = tm(s ? ty(e) : e, -n).sort(tv);
            for (let e = 0; e < r.length; e++)
                r[e].type.valid(t, r[e]) || (o.onRemove && o.onRemove(r[e].spec),
                r.splice(e--, 1));
            return r.length || i.length ? new tu(r,i) : tp
        }
        function tv(e, t) {
            return e.from - t.from || e.to - t.to
        }
        function tw(e) {
            let t = e;
            for (let n = 0; n < t.length - 1; n++) {
                let o = t[n];
                if (o.from != o.to)
                    for (let i = n + 1; i < t.length; i++) {
                        let s = t[i];
                        if (s.from == o.from) {
                            s.to != o.to && (t == e && (t = e.slice()),
                            t[i] = s.copy(s.from, o.to),
                            tD(t, i + 1, s.copy(o.to, s.to)));
                            continue
                        }
                        s.from < o.to && (t == e && (t = e.slice()),
                        t[n] = o.copy(o.from, s.from),
                        tD(t, i, o.copy(s.from, o.to)));
                        break
                    }
            }
            return t
        }
        function tD(e, t, n) {
            for (; t < e.length && tv(n, e[t]) > 0; )
                t++;
            e.splice(t, 0, n)
        }
        function tN(e) {
            let t = [];
            return e.someProp("decorations", n=>{
                let o = n(e.state);
                o && o != tp && t.push(o)
            }
            ),
            e.cursorWrapper && t.push(tu.create(e.state.doc, [e.cursorWrapper.deco])),
            tf.from(t)
        }
        let tS = {
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributes: !0,
            attributeOldValue: !0,
            subtree: !0
        }
          , tO = N && S <= 11;
        class tC {
            constructor() {
                this.anchorNode = null,
                this.anchorOffset = 0,
                this.focusNode = null,
                this.focusOffset = 0
            }
            set(e) {
                this.anchorNode = e.anchorNode,
                this.anchorOffset = e.anchorOffset,
                this.focusNode = e.focusNode,
                this.focusOffset = e.focusOffset
            }
            clear() {
                this.anchorNode = this.focusNode = null
            }
            eq(e) {
                return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
            }
        }
        class tM {
            constructor(e, t) {
                this.view = e,
                this.handleDOMChange = t,
                this.queue = [],
                this.flushingSoon = -1,
                this.observer = null,
                this.currentSelection = new tC,
                this.onCharData = null,
                this.suppressingSelectionUpdates = !1,
                this.observer = window.MutationObserver && new window.MutationObserver(e=>{
                    for (let t = 0; t < e.length; t++)
                        this.queue.push(e[t]);
                    N && S <= 11 && e.some(e=>"childList" == e.type && e.removedNodes.length || "characterData" == e.type && e.oldValue.length > e.target.nodeValue.length) ? this.flushSoon() : this.flush()
                }
                ),
                tO && (this.onCharData = e=>{
                    this.queue.push({
                        target: e.target,
                        type: "characterData",
                        oldValue: e.prevValue
                    }),
                    this.flushSoon()
                }
                ),
                this.onSelectionChange = this.onSelectionChange.bind(this)
            }
            flushSoon() {
                this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(()=>{
                    this.flushingSoon = -1,
                    this.flush()
                }
                , 20))
            }
            forceFlush() {
                this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon),
                this.flushingSoon = -1,
                this.flush())
            }
            start() {
                this.observer && (this.observer.takeRecords(),
                this.observer.observe(this.view.dom, tS)),
                this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
                this.connectSelection()
            }
            stop() {
                if (this.observer) {
                    let e = this.observer.takeRecords();
                    if (e.length) {
                        for (let t = 0; t < e.length; t++)
                            this.queue.push(e[t]);
                        window.setTimeout(()=>this.flush(), 20)
                    }
                    this.observer.disconnect()
                }
                this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData),
                this.disconnectSelection()
            }
            connectSelection() {
                this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
            }
            disconnectSelection() {
                this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
            }
            suppressSelectionUpdates() {
                this.suppressingSelectionUpdates = !0,
                setTimeout(()=>this.suppressingSelectionUpdates = !1, 50)
            }
            onSelectionChange() {
                if (eC(this.view)) {
                    if (this.suppressingSelectionUpdates)
                        return ey(this.view);
                    if (N && S <= 11 && !this.view.state.selection.empty) {
                        let e = this.view.domSelectionRange();
                        if (e.focusNode && c(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
                            return this.flushSoon()
                    }
                    this.flush()
                }
            }
            setCurSelection() {
                this.currentSelection.set(this.view.domSelectionRange())
            }
            ignoreSelectionChange(e) {
                if (!e.focusNode)
                    return !0;
                let t = new Set, n;
                for (let n = e.focusNode; n; n = l(n))
                    t.add(n);
                for (let o = e.anchorNode; o; o = l(o))
                    if (t.has(o)) {
                        n = o;
                        break
                    }
                let o = n && this.view.docView.nearestDesc(n);
                if (o && o.ignoreMutation({
                    type: "selection",
                    target: 3 == n.nodeType ? n.parentNode : n
                }))
                    return this.setCurSelection(),
                    !0
            }
            flush() {
                let {view: e} = this;
                if (!e.docView || this.flushingSoon > -1)
                    return;
                let t = this.observer ? this.observer.takeRecords() : [];
                this.queue.length && (t = this.queue.concat(t),
                this.queue.length = 0);
                let n = e.domSelectionRange()
                  , i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && eC(e) && !this.ignoreSelectionChange(n)
                  , s = -1
                  , r = -1
                  , l = !1
                  , d = [];
                if (e.editable)
                    for (let e = 0; e < t.length; e++) {
                        let n = this.registerMutation(t[e], d);
                        n && (s = s < 0 ? n.from : Math.min(n.from, s),
                        r = r < 0 ? n.to : Math.max(n.to, r),
                        n.typeOver && (l = !0))
                    }
                if (O && d.length > 1) {
                    let e = d.filter(e=>"BR" == e.nodeName);
                    if (2 == e.length) {
                        let t = e[0]
                          , n = e[1];
                        t.parentNode && t.parentNode.parentNode == n.parentNode ? n.remove() : t.remove()
                    }
                }
                let a = null;
                s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && f(n) && (a = em(e)) && a.eq(o.Y1.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0,
                ey(e),
                this.currentSelection.set(n),
                e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, r),
                tx.has(e) || (tx.set(e, null),
                -1 === ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(e.dom).whiteSpace)) || (e.requiresGeckoHackNode = O,
                tk || (console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."),
                tk = !0))),
                this.handleDOMChange(s, r, l, d),
                e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || ey(e),
                this.currentSelection.set(n))
            }
            registerMutation(e, t) {
                if (t.indexOf(e.target) > -1)
                    return null;
                let n = this.view.docView.nearestDesc(e.target);
                if ("attributes" == e.type && (n == this.view.docView || "contenteditable" == e.attributeName || "style" == e.attributeName && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e))
                    return null;
                if ("childList" == e.type) {
                    for (let n = 0; n < e.addedNodes.length; n++)
                        t.push(e.addedNodes[n]);
                    if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target))
                        return {
                            from: n.posBefore,
                            to: n.posAfter
                        };
                    let o = e.previousSibling
                      , i = e.nextSibling;
                    if (N && S <= 11 && e.addedNodes.length)
                        for (let t = 0; t < e.addedNodes.length; t++) {
                            let {previousSibling: n, nextSibling: s} = e.addedNodes[t];
                            (!n || 0 > Array.prototype.indexOf.call(e.addedNodes, n)) && (o = n),
                            (!s || 0 > Array.prototype.indexOf.call(e.addedNodes, s)) && (i = s)
                        }
                    let s = o && o.parentNode == e.target ? r(o) + 1 : 0
                      , l = n.localPosFromDOM(e.target, s, -1)
                      , d = i && i.parentNode == e.target ? r(i) : e.target.childNodes.length;
                    return {
                        from: l,
                        to: n.localPosFromDOM(e.target, d, 1)
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
        }
        let tx = new WeakMap
          , tk = !1;
        function tT(e) {
            let t = e.pmViewDesc;
            if (t)
                return t.parseRule();
            if ("BR" == e.nodeName && e.parentNode) {
                if (k && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
                    let e = document.createElement("div");
                    return e.appendChild(document.createElement("li")),
                    {
                        skip: e
                    }
                }
                if (e.parentNode.lastChild == e || k && /^(tr|table)$/i.test(e.parentNode.nodeName))
                    return {
                        ignore: !0
                    }
            } else if ("IMG" == e.nodeName && e.getAttribute("mark-placeholder"))
                return {
                    ignore: !0
                };
            return null
        }
        function tE(e, t, n) {
            return Math.max(n.anchor, n.head) > t.content.size ? null : eO(e, t.resolve(n.anchor), t.resolve(n.head))
        }
        function tP(e, t, n) {
            let o = e.depth
              , i = t ? e.end() : e.pos;
            for (; o > 0 && (t || e.indexAfter(o) == e.node(o).childCount); )
                o--,
                i++,
                t = !1;
            if (n) {
                let t = e.node(o).maybeChild(e.indexAfter(o));
                for (; t && !t.isLeaf; )
                    t = t.firstChild,
                    i++
            }
            return i
        }
        class tA {
            constructor(e, t) {
                this._root = null,
                this.focused = !1,
                this.trackWrites = null,
                this.mounted = !1,
                this.markCursor = null,
                this.cursorWrapper = null,
                this.lastSelectedViewDesc = void 0,
                this.input = new eJ,
                this.prevDirectPlugins = [],
                this.pluginViews = [],
                this.requiresGeckoHackNode = !1,
                this.dragging = null,
                this._props = t,
                this.state = t.state,
                this.directPlugins = t.plugins || [],
                this.directPlugins.forEach(tI),
                this.dispatch = this.dispatch.bind(this),
                this.dom = e && e.mount || document.createElement("div"),
                e && (e.appendChild ? e.appendChild(this.dom) : "function" == typeof e ? e(this.dom) : e.mount && (this.mounted = !0)),
                this.editable = tB(this),
                tR(this),
                this.nodeViews = tq(this),
                this.docView = et(this.state.doc, tV(this), tN(this), this.dom, this),
                this.domObserver = new tM(this,(e,t,n,s)=>(function(e, t, n, s, r) {
                    let l, d, a, c, h, u;
                    if (t < 0) {
                        let t = e.input.lastSelectionTime > Date.now() - 50 ? e.input.lastSelectionOrigin : null
                          , n = em(e, t);
                        if (n && !e.state.selection.eq(n)) {
                            if (M && P && 13 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime && e.someProp("handleKeyDown", t=>t(e, m(13, "Enter"))))
                                return;
                            let o = e.state.tr.setSelection(n);
                            "pointer" == t ? o.setMeta("pointer", !0) : "key" == t && o.scrollIntoView(),
                            e.dispatch(o)
                        }
                        return
                    }
                    let p = e.state.doc.resolve(t)
                      , g = p.sharedDepth(n);
                    t = p.before(g + 1),
                    n = e.state.doc.resolve(n).after(g + 1);
                    let y = e.state.selection
                      , b = function(e, t, n) {
                        let o, {node: s, fromOffset: r, toOffset: l, from: d, to: a} = e.docView.parseRange(t, n), c = e.domSelectionRange(), h = c.anchorNode;
                        if (h && e.dom.contains(1 == h.nodeType ? h : h.parentNode) && (o = [{
                            node: h,
                            offset: c.anchorOffset
                        }],
                        f(c) || o.push({
                            node: c.focusNode,
                            offset: c.focusOffset
                        })),
                        M && 8 === e.input.lastKeyCode)
                            for (let e = l; e > r; e--) {
                                let t = s.childNodes[e - 1]
                                  , n = t.pmViewDesc;
                                if ("BR" == t.nodeName && !n) {
                                    l = e;
                                    break
                                }
                                if (!n || n.size)
                                    break
                            }
                        let u = e.state.doc
                          , p = e.someProp("domParser") || i.aw.fromSchema(e.state.schema)
                          , m = u.resolve(d)
                          , g = null
                          , y = p.parse(s, {
                            topNode: m.parent,
                            topMatch: m.parent.contentMatchAt(m.index()),
                            topOpen: !0,
                            from: r,
                            to: l,
                            preserveWhitespace: "pre" != m.parent.type.whitespace || "full",
                            findPositions: o,
                            ruleFromNode: tT,
                            context: m
                        });
                        if (o && null != o[0].pos) {
                            let e = o[0].pos
                              , t = o[1] && o[1].pos;
                            null == t && (t = e),
                            g = {
                                anchor: e + d,
                                head: t + d
                            }
                        }
                        return {
                            doc: y,
                            sel: g,
                            from: d,
                            to: a
                        }
                    }(e, t, n)
                      , v = e.state.doc
                      , w = v.slice(b.from, b.to);
                    8 === e.input.lastKeyCode && Date.now() - 100 < e.input.lastKeyCodeTime ? (l = e.state.selection.to,
                    d = "end") : (l = e.state.selection.from,
                    d = "start"),
                    e.input.lastKeyCode = null;
                    let D = function(e, t, n, o, i) {
                        let s = e.findDiffStart(t, n);
                        if (null == s)
                            return null;
                        let {a: r, b: l} = e.findDiffEnd(t, n + e.size, n + t.size);
                        if ("end" == i) {
                            let e = Math.max(0, s - Math.min(r, l));
                            o -= r + e - s
                        }
                        if (r < s && e.size < t.size) {
                            let e = o <= s && o >= r ? s - o : 0;
                            s -= e,
                            l = s + (l - r),
                            r = s
                        } else if (l < s) {
                            let e = o <= s && o >= l ? s - o : 0;
                            s -= e,
                            r = s + (r - l),
                            l = s
                        }
                        return {
                            start: s,
                            endA: r,
                            endB: l
                        }
                    }(w.content, b.doc.content, b.from, l, d);
                    if ((T && e.input.lastIOSEnter > Date.now() - 225 || P) && r.some(e=>"DIV" == e.nodeName || "P" == e.nodeName || "LI" == e.nodeName) && (!D || D.endA >= D.endB) && e.someProp("handleKeyDown", t=>t(e, m(13, "Enter")))) {
                        e.input.lastIOSEnter = 0;
                        return
                    }
                    if (!D) {
                        if (s && y instanceof o.Bs && !y.empty && y.$head.sameParent(y.$anchor) && !e.composing && !(b.sel && b.sel.anchor != b.sel.head))
                            D = {
                                start: y.from,
                                endA: y.to,
                                endB: y.to
                            };
                        else {
                            if (b.sel) {
                                let t = tE(e, e.state.doc, b.sel);
                                t && !t.eq(e.state.selection) && e.dispatch(e.state.tr.setSelection(t))
                            }
                            return
                        }
                    }
                    if (M && e.cursorWrapper && b.sel && b.sel.anchor == e.cursorWrapper.deco.from && b.sel.head == b.sel.anchor) {
                        let e = D.endB - D.start;
                        b.sel = {
                            anchor: b.sel.anchor + e,
                            head: b.sel.anchor + e
                        }
                    }
                    e.input.domChangeCount++,
                    e.state.selection.from < e.state.selection.to && D.start == D.endB && e.state.selection instanceof o.Bs && (D.start > e.state.selection.from && D.start <= e.state.selection.from + 2 && e.state.selection.from >= b.from ? D.start = e.state.selection.from : D.endA < e.state.selection.to && D.endA >= e.state.selection.to - 2 && e.state.selection.to <= b.to && (D.endB += e.state.selection.to - D.endA,
                    D.endA = e.state.selection.to)),
                    N && S <= 11 && D.endB == D.start + 1 && D.endA == D.start && D.start > b.from && " \xa0" == b.doc.textBetween(D.start - b.from - 1, D.start - b.from + 1) && (D.start--,
                    D.endA--,
                    D.endB--);
                    let O = b.doc.resolveNoCache(D.start - b.from)
                      , C = b.doc.resolveNoCache(D.endB - b.from)
                      , x = v.resolve(D.start)
                      , k = O.sameParent(C) && O.parent.inlineContent && x.end() >= D.endA;
                    if ((T && e.input.lastIOSEnter > Date.now() - 225 && (!k || r.some(e=>"DIV" == e.nodeName || "P" == e.nodeName)) || !k && O.pos < b.doc.content.size && (a = o.Y1.findFrom(b.doc.resolve(O.pos + 1), 1, !0)) && a.head == C.pos) && e.someProp("handleKeyDown", t=>t(e, m(13, "Enter")))) {
                        e.input.lastIOSEnter = 0;
                        return
                    }
                    if (e.state.selection.anchor > D.start && function(e, t, n, o, i) {
                        if (!o.parent.isTextblock || n - t <= i.pos - o.pos || tP(o, !0, !1) < i.pos)
                            return !1;
                        let s = e.resolve(t);
                        if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
                            return !1;
                        let r = e.resolve(tP(s, !0, !0));
                        return !(!r.parent.isTextblock || r.pos > n || tP(r, !0, !1) < n) && o.parent.content.cut(o.parentOffset).eq(r.parent.content)
                    }(v, D.start, D.endA, O, C) && e.someProp("handleKeyDown", t=>t(e, m(8, "Backspace")))) {
                        P && M && e.domObserver.suppressSelectionUpdates();
                        return
                    }
                    M && P && D.endB == D.start && (e.input.lastAndroidDelete = Date.now()),
                    P && !k && O.start() != C.start() && 0 == C.parentOffset && O.depth == C.depth && b.sel && b.sel.anchor == b.sel.head && b.sel.head == D.endA && (D.endB -= 2,
                    C = b.doc.resolveNoCache(D.endB - b.from),
                    setTimeout(()=>{
                        e.someProp("handleKeyDown", function(t) {
                            return t(e, m(13, "Enter"))
                        })
                    }
                    , 20));
                    let E = D.start
                      , A = D.endA;
                    if (k) {
                        if (O.pos == C.pos)
                            N && S <= 11 && 0 == O.parentOffset && (e.domObserver.suppressSelectionUpdates(),
                            setTimeout(()=>ey(e), 20)),
                            c = e.state.tr.delete(E, A),
                            h = v.resolve(D.start).marksAcross(v.resolve(D.endA));
                        else if (D.endA == D.endB && (u = function(e, t) {
                            let n = e.firstChild.marks, o = t.firstChild.marks, s = n, r = o, l, d, a;
                            for (let e = 0; e < o.length; e++)
                                s = o[e].removeFromSet(s);
                            for (let e = 0; e < n.length; e++)
                                r = n[e].removeFromSet(r);
                            if (1 == s.length && 0 == r.length)
                                d = s[0],
                                l = "add",
                                a = e=>e.mark(d.addToSet(e.marks));
                            else {
                                if (0 != s.length || 1 != r.length)
                                    return null;
                                d = r[0],
                                l = "remove",
                                a = e=>e.mark(d.removeFromSet(e.marks))
                            }
                            let c = [];
                            for (let e = 0; e < t.childCount; e++)
                                c.push(a(t.child(e)));
                            if (i.HY.from(c).eq(e))
                                return {
                                    mark: d,
                                    type: l
                                }
                        }(O.parent.content.cut(O.parentOffset, C.parentOffset), x.parent.content.cut(x.parentOffset, D.endA - x.start()))))
                            c = e.state.tr,
                            "add" == u.type ? c.addMark(E, A, u.mark) : c.removeMark(E, A, u.mark);
                        else if (O.parent.child(O.index()).isText && O.index() == C.index() - (C.textOffset ? 0 : 1)) {
                            let t = O.parent.textBetween(O.parentOffset, C.parentOffset);
                            if (e.someProp("handleTextInput", n=>n(e, E, A, t)))
                                return;
                            c = e.state.tr.insertText(t, E, A)
                        }
                    }
                    if (c || (c = e.state.tr.replace(E, A, b.doc.slice(D.start - b.from, D.endB - b.from))),
                    b.sel) {
                        let t = tE(e, c.doc, b.sel);
                        t && !(M && P && e.composing && t.empty && (D.start != D.endB || e.input.lastAndroidDelete < Date.now() - 100) && (t.head == E || t.head == c.mapping.map(A) - 1) || N && t.empty && t.head == E) && c.setSelection(t)
                    }
                    h && c.ensureMarks(h),
                    e.dispatch(c.scrollIntoView())
                }
                )(this, e, t, n, s)),
                this.domObserver.start(),
                function(e) {
                    for (let t in eU) {
                        let n = eU[t];
                        e.dom.addEventListener(t, e.input.eventHandlers[t] = t=>{
                            !function(e, t) {
                                if (!t.bubbles)
                                    return !0;
                                if (t.defaultPrevented)
                                    return !1;
                                for (let n = t.target; n != e.dom; n = n.parentNode)
                                    if (!n || 11 == n.nodeType || n.pmViewDesc && n.pmViewDesc.stopEvent(t))
                                        return !1;
                                return !0
                            }(e, t) || e0(e, t) || !e.editable && t.type in ej || n(e, t)
                        }
                        , eX[t] ? {
                            passive: !0
                        } : void 0)
                    }
                    k && e.dom.addEventListener("input", ()=>null),
                    eZ(e)
                }(this),
                this.updatePluginViews()
            }
            get composing() {
                return this.input.composing
            }
            get props() {
                if (this._props.state != this.state) {
                    let e = this._props;
                    for (let t in this._props = {},
                    e)
                        this._props[t] = e[t];
                    this._props.state = this.state
                }
                return this._props
            }
            update(e) {
                e.handleDOMEvents != this._props.handleDOMEvents && eZ(this);
                let t = this._props;
                this._props = e,
                e.plugins && (e.plugins.forEach(tI),
                this.directPlugins = e.plugins),
                this.updateStateInner(e.state, t)
            }
            setProps(e) {
                let t = {};
                for (let e in this._props)
                    t[e] = this._props[e];
                for (let n in t.state = this.state,
                e)
                    t[n] = e[n];
                this.update(t)
            }
            updateState(e) {
                this.updateStateInner(e, this._props)
            }
            updateStateInner(e, t) {
                let n = this.state
                  , o = !1
                  , i = !1;
                e.storedMarks && this.composing && (e4(this),
                i = !0),
                this.state = e;
                let s = n.plugins != e.plugins || this._props.plugins != t.plugins;
                if (s || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
                    let e = tq(this);
                    (function(e, t) {
                        let n = 0
                          , o = 0;
                        for (let o in e) {
                            if (e[o] != t[o])
                                return !0;
                            n++
                        }
                        for (let e in t)
                            o++;
                        return n != o
                    }
                    )(e, this.nodeViews) && (this.nodeViews = e,
                    o = !0)
                }
                (s || t.handleDOMEvents != this._props.handleDOMEvents) && eZ(this),
                this.editable = tB(this),
                tR(this);
                let r = tN(this)
                  , l = tV(this)
                  , d = n.plugins == e.plugins || n.doc.eq(e.doc) ? e.scrollToSelection > n.scrollToSelection ? "to selection" : "preserve" : "reset"
                  , a = o || !this.docView.matchesNode(e.doc, l, r);
                (a || !e.selection.eq(n.selection)) && (i = !0);
                let h = "preserve" == d && i && null == this.dom.style.overflowAnchor && function(e) {
                    let t, n, o = e.dom.getBoundingClientRect(), i = Math.max(0, o.top);
                    for (let s = (o.left + o.right) / 2, r = i + 1; r < Math.min(innerHeight, o.bottom); r += 5) {
                        let o = e.root.elementFromPoint(s, r);
                        if (!o || o == e.dom || !e.dom.contains(o))
                            continue;
                        let l = o.getBoundingClientRect();
                        if (l.top >= i - 20) {
                            t = o,
                            n = l.top;
                            break
                        }
                    }
                    return {
                        refDOM: t,
                        refTop: n,
                        stack: q(e.dom)
                    }
                }(this);
                if (i) {
                    var u, p;
                    let t, i, s;
                    this.domObserver.stop();
                    let d = a && (N || M) && !this.composing && !n.selection.empty && !e.selection.empty && (u = n.selection,
                    p = e.selection,
                    s = Math.min(u.$anchor.sharedDepth(u.head), p.$anchor.sharedDepth(p.head)),
                    u.$anchor.start(s) != p.$anchor.start(s));
                    if (a) {
                        let t = M ? this.trackWrites = this.domSelectionRange().focusNode : null;
                        (o || !this.docView.update(e.doc, l, r, this)) && (this.docView.updateOuterDeco([]),
                        this.docView.destroy(),
                        this.docView = et(e.doc, l, r, this.dom, this)),
                        t && !this.trackWrites && (d = !0)
                    }
                    d || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && (t = this.docView.domFromPos(this.state.selection.anchor, 0),
                    i = this.domSelectionRange(),
                    c(t.node, t.offset, i.anchorNode, i.anchorOffset))) ? ey(this, d) : (eN(this, e.selection),
                    this.domObserver.setCurSelection()),
                    this.domObserver.start()
                }
                this.updatePluginViews(n),
                "reset" == d ? this.dom.scrollTop = 0 : "to selection" == d ? this.scrollToSelection() : h && function({refDOM: e, refTop: t, stack: n}) {
                    let o = e ? e.getBoundingClientRect().top : 0;
                    I(n, 0 == o ? 0 : o - t)
                }(h)
            }
            scrollToSelection() {
                let e = this.domSelectionRange().focusNode;
                if (this.someProp("handleScrollToSelection", e=>e(this)))
                    ;
                else if (this.state.selection instanceof o.qv) {
                    let t = this.docView.domAfterPos(this.state.selection.from);
                    1 == t.nodeType && B(this, t.getBoundingClientRect(), e)
                } else
                    B(this, this.coordsAtPos(this.state.selection.head, 1), e)
            }
            destroyPluginViews() {
                let e;
                for (; e = this.pluginViews.pop(); )
                    e.destroy && e.destroy()
            }
            updatePluginViews(e) {
                if (e && e.plugins == this.state.plugins && this.directPlugins == this.prevDirectPlugins)
                    for (let t = 0; t < this.pluginViews.length; t++) {
                        let n = this.pluginViews[t];
                        n.update && n.update(this, e)
                    }
                else {
                    this.prevDirectPlugins = this.directPlugins,
                    this.destroyPluginViews();
                    for (let e = 0; e < this.directPlugins.length; e++) {
                        let t = this.directPlugins[e];
                        t.spec.view && this.pluginViews.push(t.spec.view(this))
                    }
                    for (let e = 0; e < this.state.plugins.length; e++) {
                        let t = this.state.plugins[e];
                        t.spec.view && this.pluginViews.push(t.spec.view(this))
                    }
                }
            }
            someProp(e, t) {
                let n = this._props && this._props[e], o;
                if (null != n && (o = t ? t(n) : n))
                    return o;
                for (let n = 0; n < this.directPlugins.length; n++) {
                    let i = this.directPlugins[n].props[e];
                    if (null != i && (o = t ? t(i) : i))
                        return o
                }
                let i = this.state.plugins;
                if (i)
                    for (let n = 0; n < i.length; n++) {
                        let s = i[n].props[e];
                        if (null != s && (o = t ? t(s) : s))
                            return o
                    }
            }
            hasFocus() {
                if (N) {
                    let e = this.root.activeElement;
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
            focus() {
                this.domObserver.stop(),
                this.editable && function(e) {
                    if (e.setActive)
                        return e.setActive();
                    if (L)
                        return e.focus(L);
                    let t = q(e);
                    e.focus(null == L ? {
                        get preventScroll() {
                            return L = {
                                preventScroll: !0
                            },
                            !0
                        }
                    } : void 0),
                    L || (L = !1,
                    I(t, 0))
                }(this.dom),
                ey(this),
                this.domObserver.start()
            }
            get root() {
                let e = this._root;
                if (null == e) {
                    for (let e = this.dom.parentNode; e; e = e.parentNode)
                        if (9 == e.nodeType || 11 == e.nodeType && e.host)
                            return e.getSelection || (Object.getPrototypeOf(e).getSelection = ()=>e.ownerDocument.getSelection()),
                            this._root = e
                }
                return e || document
            }
            posAtCoords(e) {
                return function(e, t) {
                    var n;
                    let o, i, s = e.dom.ownerDocument, r, d = 0;
                    if (s.caretPositionFromPoint)
                        try {
                            let e = s.caretPositionFromPoint(t.left, t.top);
                            e && ({offsetNode: r, offset: d} = e)
                        } catch (e) {}
                    if (!r && s.caretRangeFromPoint) {
                        let e = s.caretRangeFromPoint(t.left, t.top);
                        e && ({startContainer: r, startOffset: d} = e)
                    }
                    let c = (e.root.elementFromPoint ? e.root : s).elementFromPoint(t.left, t.top);
                    if (!c || !e.dom.contains(1 != c.nodeType ? c.parentNode : c)) {
                        let n = e.dom.getBoundingClientRect();
                        if (!z(t, n) || !(c = function e(t, n, o) {
                            let i = t.childNodes.length;
                            if (i && o.top < o.bottom)
                                for (let s = Math.max(0, Math.min(i - 1, Math.floor(i * (n.top - o.top) / (o.bottom - o.top)) - 2)), r = s; ; ) {
                                    let o = t.childNodes[r];
                                    if (1 == o.nodeType) {
                                        let t = o.getClientRects();
                                        for (let i = 0; i < t.length; i++) {
                                            let s = t[i];
                                            if (z(n, s))
                                                return e(o, n, s)
                                        }
                                    }
                                    if ((r = (r + 1) % i) == s)
                                        break
                                }
                            return t
                        }(e.dom, t, n)))
                            return null
                    }
                    if (k)
                        for (let e = c; r && e; e = l(e))
                            e.draggable && (r = void 0);
                    if (c = (o = (n = c).parentNode) && /^li$/i.test(o.nodeName) && t.left < n.getBoundingClientRect().left ? o : n,
                    r) {
                        if (O && 1 == r.nodeType && (d = Math.min(d, r.childNodes.length)) < r.childNodes.length) {
                            let e = r.childNodes[d], n;
                            "IMG" == e.nodeName && (n = e.getBoundingClientRect()).right <= t.left && n.bottom > t.top && d++
                        }
                        r == e.dom && d == r.childNodes.length - 1 && 1 == r.lastChild.nodeType && t.top > r.lastChild.getBoundingClientRect().bottom ? i = e.state.doc.content.size : (0 == d || 1 != r.nodeType || "BR" != r.childNodes[d - 1].nodeName) && (i = function(e, t, n, o) {
                            let i = -1;
                            for (let n = t; n != e.dom; ) {
                                let t = e.docView.nearestDesc(n, !0);
                                if (!t)
                                    return null;
                                if (1 == t.dom.nodeType && (t.node.isBlock && t.parent || !t.contentDOM)) {
                                    let e = t.dom.getBoundingClientRect();
                                    if (t.node.isBlock && t.parent && (e.left > o.left || e.top > o.top ? i = t.posBefore : (e.right < o.left || e.bottom < o.top) && (i = t.posAfter)),
                                    !t.contentDOM && i < 0)
                                        return (t.node.isBlock ? o.top < (e.top + e.bottom) / 2 : o.left < (e.left + e.right) / 2) ? t.posBefore : t.posAfter
                                }
                                n = t.dom.parentNode
                            }
                            return i > -1 ? i : e.docView.posFromDOM(t, n, -1)
                        }(e, r, d, t))
                    }
                    null == i && (i = function(e, t, n) {
                        let {node: o, offset: i} = function e(t, n) {
                            let o, i = 2e8, s, r = 0, l = n.top, d = n.top;
                            for (let e = t.firstChild, c = 0; e; e = e.nextSibling,
                            c++) {
                                let t;
                                if (1 == e.nodeType)
                                    t = e.getClientRects();
                                else {
                                    if (3 != e.nodeType)
                                        continue;
                                    t = a(e).getClientRects()
                                }
                                for (let a = 0; a < t.length; a++) {
                                    let h = t[a];
                                    if (h.top <= l && h.bottom >= d) {
                                        l = Math.max(h.bottom, l),
                                        d = Math.min(h.top, d);
                                        let t = h.left > n.left ? h.left - n.left : h.right < n.left ? n.left - h.right : 0;
                                        if (t < i) {
                                            o = e,
                                            i = t,
                                            s = t && 3 == o.nodeType ? {
                                                left: h.right < n.left ? h.right : h.left,
                                                top: n.top
                                            } : n,
                                            1 == e.nodeType && t && (r = c + (n.left >= (h.left + h.right) / 2 ? 1 : 0));
                                            continue
                                        }
                                    }
                                    !o && (n.left >= h.right && n.top >= h.top || n.left >= h.left && n.top >= h.bottom) && (r = c + 1)
                                }
                            }
                            return o && 3 == o.nodeType ? function(e, t) {
                                let n = e.nodeValue.length
                                  , o = document.createRange();
                                for (let i = 0; i < n; i++) {
                                    o.setEnd(e, i + 1),
                                    o.setStart(e, i);
                                    let n = F(o, 1);
                                    if (n.top != n.bottom && z(t, n))
                                        return {
                                            node: e,
                                            offset: i + (t.left >= (n.left + n.right) / 2 ? 1 : 0)
                                        }
                                }
                                return {
                                    node: e,
                                    offset: 0
                                }
                            }(o, s) : !o || i && 1 == o.nodeType ? {
                                node: t,
                                offset: r
                            } : e(o, s)
                        }(t, n)
                          , s = -1;
                        if (1 == o.nodeType && !o.firstChild) {
                            let e = o.getBoundingClientRect();
                            s = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1
                        }
                        return e.docView.posFromDOM(o, i, s)
                    }(e, c, t));
                    let h = e.docView.nearestDesc(c, !0);
                    return {
                        pos: i,
                        inside: h ? h.posAtStart - h.border : -1
                    }
                }(this, e)
            }
            coordsAtPos(e, t=1) {
                return H(this, e, t)
            }
            domAtPos(e, t=0) {
                return this.docView.domFromPos(e, t)
            }
            nodeDOM(e) {
                let t = this.docView.descAt(e);
                return t ? t.nodeDOM : null
            }
            posAtDOM(e, t, n=-1) {
                let o = this.docView.posFromDOM(e, t, n);
                if (null == o)
                    throw RangeError("DOM position not inside the editor");
                return o
            }
            endOfTextblock(e, t) {
                var n, o, i;
                let s, r;
                return n = this,
                o = t || this.state,
                i = e,
                G == o && U == i ? j : (G = o,
                U = i,
                j = "up" == i || "down" == i ? (s = o.selection,
                r = "up" == i ? s.$from : s.$to,
                _(n, o, ()=>{
                    let {node: e} = n.docView.domFromPos(r.pos, "up" == i ? -1 : 1);
                    for (; ; ) {
                        let t = n.docView.nearestDesc(e, !0);
                        if (!t)
                            break;
                        if (t.node.isBlock) {
                            e = t.contentDOM || t.dom;
                            break
                        }
                        e = t.dom.parentNode
                    }
                    let t = H(n, r.pos, 1);
                    for (let n = e.firstChild; n; n = n.nextSibling) {
                        let e;
                        if (1 == n.nodeType)
                            e = n.getClientRects();
                        else {
                            if (3 != n.nodeType)
                                continue;
                            e = a(n, 0, n.nodeValue.length).getClientRects()
                        }
                        for (let n = 0; n < e.length; n++) {
                            let o = e[n];
                            if (o.bottom > o.top + 1 && ("up" == i ? t.top - o.top > (o.bottom - t.top) * 2 : o.bottom - t.bottom > (t.bottom - o.top) * 2))
                                return !1
                        }
                    }
                    return !0
                }
                )) : function(e, t, n) {
                    let {$head: o} = t.selection;
                    if (!o.parent.isTextblock)
                        return !1;
                    let i = o.parentOffset
                      , s = i == o.parent.content.size
                      , r = e.domSelection();
                    return Y.test(o.parent.textContent) && r.modify ? _(e, t, ()=>{
                        let {focusNode: t, focusOffset: i, anchorNode: s, anchorOffset: l} = e.domSelectionRange()
                          , d = r.caretBidiLevel;
                        r.modify("move", n, "character");
                        let a = o.depth ? e.docView.domAfterPos(o.before()) : e.dom
                          , {focusNode: c, focusOffset: h} = e.domSelectionRange()
                          , u = c && !a.contains(1 == c.nodeType ? c : c.parentNode) || t == c && i == h;
                        try {
                            r.collapse(s, l),
                            t && (t != s || i != l) && r.extend && r.extend(t, i)
                        } catch (e) {}
                        return null != d && (r.caretBidiLevel = d),
                        u
                    }
                    ) : "left" == n || "backward" == n ? !i : s
                }(n, o, i))
            }
            pasteHTML(e, t) {
                return tn(this, "", e, !1, t || new ClipboardEvent("paste"))
            }
            pasteText(e, t) {
                return tn(this, e, null, !0, t || new ClipboardEvent("paste"))
            }
            destroy() {
                this.docView && (!function(e) {
                    for (let t in e.domObserver.stop(),
                    e.input.eventHandlers)
                        e.dom.removeEventListener(t, e.input.eventHandlers[t]);
                    clearTimeout(e.input.composingTimeout),
                    clearTimeout(e.input.lastIOSEnterFallbackTimeout)
                }(this),
                this.destroyPluginViews(),
                this.mounted ? (this.docView.update(this.state.doc, [], tN(this), this),
                this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom),
                this.docView.destroy(),
                this.docView = null)
            }
            get isDestroyed() {
                return null == this.docView
            }
            dispatchEvent(e) {
                e0(this, e) || !eU[e.type] || !this.editable && e.type in ej || eU[e.type](this, e)
            }
            dispatch(e) {
                let t = this._props.dispatchTransaction;
                t ? t.call(this, e) : this.updateState(this.state.apply(e))
            }
            domSelectionRange() {
                return k && 11 === this.root.nodeType && function(e) {
                    let t = e.activeElement;
                    for (; t && t.shadowRoot; )
                        t = t.shadowRoot.activeElement;
                    return t
                }(this.dom.ownerDocument) == this.dom ? function(e) {
                    let t;
                    function n(e) {
                        e.preventDefault(),
                        e.stopImmediatePropagation(),
                        t = e.getTargetRanges()[0]
                    }
                    e.dom.addEventListener("beforeinput", n, !0),
                    document.execCommand("indent"),
                    e.dom.removeEventListener("beforeinput", n, !0);
                    let o = t.startContainer
                      , i = t.startOffset
                      , s = t.endContainer
                      , r = t.endOffset
                      , l = e.domAtPos(e.state.selection.anchor);
                    return c(l.node, l.offset, s, r) && ([o,i,s,r] = [s, r, o, i]),
                    {
                        anchorNode: o,
                        anchorOffset: i,
                        focusNode: s,
                        focusOffset: r
                    }
                }(this) : this.domSelection()
            }
            domSelection() {
                return this.root.getSelection()
            }
        }
        function tV(e) {
            let t = Object.create(null);
            return t.class = "ProseMirror",
            t.contenteditable = String(e.editable),
            t.translate = "no",
            e.someProp("attributes", n=>{
                if ("function" == typeof n && (n = n(e.state)),
                n)
                    for (let e in n)
                        "class" == e && (t.class += " " + n[e]),
                        "style" == e ? t.style = (t.style ? t.style + ";" : "") + n[e] : t[e] || "contenteditable" == e || "nodeName" == e || (t[e] = String(n[e]))
            }
            ),
            [ta.node(0, e.state.doc.content.size, t)]
        }
        function tR(e) {
            if (e.markCursor) {
                let t = document.createElement("img");
                t.className = "ProseMirror-separator",
                t.setAttribute("mark-placeholder", "true"),
                t.setAttribute("alt", ""),
                e.cursorWrapper = {
                    dom: t,
                    deco: ta.widget(e.state.selection.head, t, {
                        raw: !0,
                        marks: e.markCursor
                    })
                }
            } else
                e.cursorWrapper = null
        }
        function tB(e) {
            return !e.someProp("editable", t=>!1 === t(e.state))
        }
        function tq(e) {
            let t = Object.create(null);
            function n(e) {
                for (let n in e)
                    Object.prototype.hasOwnProperty.call(t, n) || (t[n] = e[n])
            }
            return e.someProp("nodeViews", n),
            e.someProp("markViews", n),
            t
        }
        function tI(e) {
            if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction)
                throw RangeError("Plugins passed directly to the view must not have a state component")
        }
    }
}]);
//# sourceMappingURL=b155a556-e6afb0a740071fe5.js.map
