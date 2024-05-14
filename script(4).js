(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2888], {
    12483: function(t, e, n) {
        "use strict";
        n.d(e, {
            $e: function() {
                return o
            },
            Tb: function() {
                return i
            },
            av: function() {
                return s
            },
            e: function() {
                return a
            }
        });
        var r = n(8585);
        function i(t, e) {
            return (0,
            r.Gd)().captureException(t, {
                captureContext: e
            })
        }
        function a(t) {
            (0,
            r.Gd)().configureScope(t)
        }
        function s(t) {
            (0,
            r.Gd)().setUser(t)
        }
        function o(t) {
            (0,
            r.Gd)().withScope(t)
        }
    },
    8585: function(t, e, n) {
        "use strict";
        n.d(e, {
            Gd: function() {
                return l
            },
            cu: function() {
                return d
            }
        });
        var r = n(63699)
          , i = n(7790)
          , a = n(58536)
          , s = n(65907)
          , o = n(4266)
          , c = n(51684)
          , u = n(92430);
        class _ {
            __init() {
                this._stack = [{}]
            }
            constructor(t, e=new c.s, n=4) {
                this._version = n,
                _.prototype.__init.call(this),
                this.getStackTop().scope = e,
                t && this.bindClient(t)
            }
            isOlderThan(t) {
                return this._version < t
            }
            bindClient(t) {
                this.getStackTop().client = t,
                t && t.setupIntegrations && t.setupIntegrations()
            }
            pushScope() {
                var t = c.s.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: t
                }),
                t
            }
            popScope() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }
            withScope(t) {
                var e = this.pushScope();
                try {
                    t(e)
                } finally {
                    this.popScope()
                }
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getStack() {
                return this._stack
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            captureException(t, e) {
                var n = this._lastEventId = e && e.event_id ? e.event_id : (0,
                r.DM)()
                  , i = Error("Sentry syntheticException");
                return this._withClient((r,a)=>{
                    r.captureException(t, {
                        originalException: t,
                        syntheticException: i,
                        ...e,
                        event_id: n
                    }, a)
                }
                ),
                n
            }
            captureMessage(t, e, n) {
                var i = this._lastEventId = n && n.event_id ? n.event_id : (0,
                r.DM)()
                  , a = Error(t);
                return this._withClient((r,s)=>{
                    r.captureMessage(t, e, {
                        originalException: t,
                        syntheticException: a,
                        ...n,
                        event_id: i
                    }, s)
                }
                ),
                i
            }
            captureEvent(t, e) {
                var n = e && e.event_id ? e.event_id : (0,
                r.DM)();
                return "transaction" !== t.type && (this._lastEventId = n),
                this._withClient((r,i)=>{
                    r.captureEvent(t, {
                        ...e,
                        event_id: n
                    }, i)
                }
                ),
                n
            }
            lastEventId() {
                return this._lastEventId
            }
            addBreadcrumb(t, e) {
                let {scope: n, client: r} = this.getStackTop();
                if (!n || !r)
                    return;
                let {beforeBreadcrumb: s=null, maxBreadcrumbs: o=100} = r.getOptions && r.getOptions() || {};
                if (!(o <= 0)) {
                    var c = {
                        timestamp: (0,
                        i.yW)(),
                        ...t
                    }
                      , u = s ? (0,
                    a.Cf)(()=>s(c, e)) : c;
                    null !== u && n.addBreadcrumb(u, o)
                }
            }
            setUser(t) {
                var e = this.getScope();
                e && e.setUser(t)
            }
            setTags(t) {
                var e = this.getScope();
                e && e.setTags(t)
            }
            setExtras(t) {
                var e = this.getScope();
                e && e.setExtras(t)
            }
            setTag(t, e) {
                var n = this.getScope();
                n && n.setTag(t, e)
            }
            setExtra(t, e) {
                var n = this.getScope();
                n && n.setExtra(t, e)
            }
            setContext(t, e) {
                var n = this.getScope();
                n && n.setContext(t, e)
            }
            configureScope(t) {
                let {scope: e, client: n} = this.getStackTop();
                e && n && t(e)
            }
            run(t) {
                var e = p(this);
                try {
                    t(this)
                } finally {
                    p(e)
                }
            }
            getIntegration(t) {
                var e = this.getClient();
                if (!e)
                    return null;
                try {
                    return e.getIntegration(t)
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
                    null
                }
            }
            startTransaction(t, e) {
                return this._callExtensionMethod("startTransaction", t, e)
            }
            traceHeaders() {
                return this._callExtensionMethod("traceHeaders")
            }
            captureSession(t=!1) {
                if (t)
                    return this.endSession();
                this._sendSessionUpdate()
            }
            endSession() {
                var t = this.getStackTop()
                  , e = t && t.scope
                  , n = e && e.getSession();
                n && (0,
                u.RJ)(n),
                this._sendSessionUpdate(),
                e && e.setSession()
            }
            startSession(t) {
                let {scope: e, client: n} = this.getStackTop()
                  , {release: r, environment: i} = n && n.getOptions() || {};
                var a = (0,
                s.R)();
                let {userAgent: o} = a.navigator || {};
                var c = (0,
                u.Hv)({
                    release: r,
                    environment: i,
                    ...e && {
                        user: e.getUser()
                    },
                    ...o && {
                        userAgent: o
                    },
                    ...t
                });
                if (e) {
                    var _ = e.getSession && e.getSession();
                    _ && "ok" === _.status && (0,
                    u.CT)(_, {
                        status: "exited"
                    }),
                    this.endSession(),
                    e.setSession(c)
                }
                return c
            }
            shouldSendDefaultPii() {
                var t = this.getClient()
                  , e = t && t.getOptions();
                return !!(e && e.sendDefaultPii)
            }
            _sendSessionUpdate() {
                let {scope: t, client: e} = this.getStackTop();
                if (t) {
                    var n = t.getSession();
                    n && e && e.captureSession && e.captureSession(n)
                }
            }
            _withClient(t) {
                let {scope: e, client: n} = this.getStackTop();
                n && t(n, e)
            }
            _callExtensionMethod(t, ...e) {
                var n = d().__SENTRY__;
                if (n && n.extensions && "function" == typeof n.extensions[t])
                    return n.extensions[t].apply(this, e);
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`Extension method ${t} couldn't be found, doing nothing.`)
            }
        }
        function d() {
            var t = (0,
            s.R)();
            return t.__SENTRY__ = t.__SENTRY__ || {
                extensions: {},
                hub: void 0
            },
            t
        }
        function p(t) {
            var e = d()
              , n = f(e);
            return g(e, t),
            n
        }
        function l() {
            var t = d();
            return ((!h(t) || f(t).isOlderThan(4)) && g(t, new _),
            (0,
            o.KV)()) ? function(t) {
                try {
                    var e = d().__SENTRY__
                      , n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
                    if (!n)
                        return f(t);
                    if (!h(n) || f(n).isOlderThan(4)) {
                        var r = f(t).getStackTop();
                        g(n, new _(r.client,c.s.clone(r.scope)))
                    }
                    return f(n)
                } catch (e) {
                    return f(t)
                }
            }(t) : f(t)
        }
        function h(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
        }
        function f(t) {
            return (0,
            s.Y)("hub", ()=>new _, t)
        }
        function g(t, e) {
            return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e,
            !0)
        }
    },
    51684: function(t, e, n) {
        "use strict";
        n.d(e, {
            c: function() {
                return d
            },
            s: function() {
                return u
            }
        });
        var r = n(81757)
          , i = n(7790)
          , a = n(97946)
          , s = n(58536)
          , o = n(65907)
          , c = n(92430);
        class u {
            constructor() {
                this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._attachments = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {}
            }
            static clone(t) {
                var e = new u;
                return t && (e._breadcrumbs = [...t._breadcrumbs],
                e._tags = {
                    ...t._tags
                },
                e._extra = {
                    ...t._extra
                },
                e._contexts = {
                    ...t._contexts
                },
                e._user = t._user,
                e._level = t._level,
                e._span = t._span,
                e._session = t._session,
                e._transactionName = t._transactionName,
                e._fingerprint = t._fingerprint,
                e._eventProcessors = [...t._eventProcessors],
                e._requestSession = t._requestSession,
                e._attachments = [...t._attachments]),
                e
            }
            addScopeListener(t) {
                this._scopeListeners.push(t)
            }
            addEventProcessor(t) {
                return this._eventProcessors.push(t),
                this
            }
            setUser(t) {
                return this._user = t || {},
                this._session && (0,
                c.CT)(this._session, {
                    user: t
                }),
                this._notifyScopeListeners(),
                this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(t) {
                return this._requestSession = t,
                this
            }
            setTags(t) {
                return this._tags = {
                    ...this._tags,
                    ...t
                },
                this._notifyScopeListeners(),
                this
            }
            setTag(t, e) {
                return this._tags = {
                    ...this._tags,
                    [t]: e
                },
                this._notifyScopeListeners(),
                this
            }
            setExtras(t) {
                return this._extra = {
                    ...this._extra,
                    ...t
                },
                this._notifyScopeListeners(),
                this
            }
            setExtra(t, e) {
                return this._extra = {
                    ...this._extra,
                    [t]: e
                },
                this._notifyScopeListeners(),
                this
            }
            setFingerprint(t) {
                return this._fingerprint = t,
                this._notifyScopeListeners(),
                this
            }
            setLevel(t) {
                return this._level = t,
                this._notifyScopeListeners(),
                this
            }
            setTransactionName(t) {
                return this._transactionName = t,
                this._notifyScopeListeners(),
                this
            }
            setContext(t, e) {
                return null === e ? delete this._contexts[t] : this._contexts = {
                    ...this._contexts,
                    [t]: e
                },
                this._notifyScopeListeners(),
                this
            }
            setSpan(t) {
                return this._span = t,
                this._notifyScopeListeners(),
                this
            }
            getSpan() {
                return this._span
            }
            getTransaction() {
                var t = this.getSpan();
                return t && t.transaction
            }
            setSession(t) {
                return t ? this._session = t : delete this._session,
                this._notifyScopeListeners(),
                this
            }
            getSession() {
                return this._session
            }
            update(t) {
                if (!t)
                    return this;
                if ("function" == typeof t) {
                    var e = t(this);
                    return e instanceof u ? e : this
                }
                return t instanceof u ? (this._tags = {
                    ...this._tags,
                    ...t._tags
                },
                this._extra = {
                    ...this._extra,
                    ...t._extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...t._contexts
                },
                t._user && Object.keys(t._user).length && (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession)) : (0,
                r.PO)(t) && (this._tags = {
                    ...this._tags,
                    ...t.tags
                },
                this._extra = {
                    ...this._extra,
                    ...t.extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...t.contexts
                },
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession)),
                this
            }
            clear() {
                return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._span = void 0,
                this._session = void 0,
                this._notifyScopeListeners(),
                this._attachments = [],
                this
            }
            addBreadcrumb(t, e) {
                var n = "number" == typeof e ? Math.min(e, 100) : 100;
                if (n <= 0)
                    return this;
                var r = {
                    timestamp: (0,
                    i.yW)(),
                    ...t
                };
                return this._breadcrumbs = [...this._breadcrumbs, r].slice(-n),
                this._notifyScopeListeners(),
                this
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
            }
            addAttachment(t) {
                return this._attachments.push(t),
                this
            }
            getAttachments() {
                return this._attachments
            }
            clearAttachments() {
                return this._attachments = [],
                this
            }
            applyToEvent(t, e={}) {
                if (this._extra && Object.keys(this._extra).length && (t.extra = {
                    ...this._extra,
                    ...t.extra
                }),
                this._tags && Object.keys(this._tags).length && (t.tags = {
                    ...this._tags,
                    ...t.tags
                }),
                this._user && Object.keys(this._user).length && (t.user = {
                    ...this._user,
                    ...t.user
                }),
                this._contexts && Object.keys(this._contexts).length && (t.contexts = {
                    ...this._contexts,
                    ...t.contexts
                }),
                this._level && (t.level = this._level),
                this._transactionName && (t.transaction = this._transactionName),
                this._span) {
                    t.contexts = {
                        trace: this._span.getTraceContext(),
                        ...t.contexts
                    };
                    var n = this._span.transaction && this._span.transaction.name;
                    n && (t.tags = {
                        transaction: n,
                        ...t.tags
                    })
                }
                return this._applyFingerprint(t),
                t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs],
                t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0,
                t.sdkProcessingMetadata = {
                    ...t.sdkProcessingMetadata,
                    ...this._sdkProcessingMetadata
                },
                this._notifyEventProcessors([..._(), ...this._eventProcessors], t, e)
            }
            setSDKProcessingMetadata(t) {
                return this._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata,
                    ...t
                },
                this
            }
            _notifyEventProcessors(t, e, n, i=0) {
                return new a.cW((a,o)=>{
                    var c = t[i];
                    if (null === e || "function" != typeof c)
                        a(e);
                    else {
                        var u = c({
                            ...e
                        }, n);
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.id && null === u && s.kg.log(`Event processor "${c.id}" dropped event`),
                        (0,
                        r.J8)(u) ? u.then(e=>this._notifyEventProcessors(t, e, n, i + 1).then(a)).then(null, o) : this._notifyEventProcessors(t, u, n, i + 1).then(a).then(null, o)
                    }
                }
                )
            }
            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0,
                this._scopeListeners.forEach(t=>{
                    t(this)
                }
                ),
                this._notifyingListeners = !1)
            }
            _applyFingerprint(t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
                this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }
        }
        function _() {
            return (0,
            o.Y)("globalEventProcessors", ()=>[])
        }
        function d(t) {
            _().push(t)
        }
    },
    92430: function(t, e, n) {
        "use strict";
        n.d(e, {
            CT: function() {
                return o
            },
            Hv: function() {
                return s
            },
            RJ: function() {
                return c
            }
        });
        var r = n(7790)
          , i = n(63699)
          , a = n(21995);
        function s(t) {
            var e = (0,
            r.ph)()
              , n = {
                sid: (0,
                i.DM)(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: ()=>(0,
                a.Jr)({
                    sid: `${n.sid}`,
                    init: n.init,
                    started: new Date(1e3 * n.started).toISOString(),
                    timestamp: new Date(1e3 * n.timestamp).toISOString(),
                    status: n.status,
                    errors: n.errors,
                    did: "number" == typeof n.did || "string" == typeof n.did ? `${n.did}` : void 0,
                    duration: n.duration,
                    attrs: {
                        release: n.release,
                        environment: n.environment,
                        ip_address: n.ipAddress,
                        user_agent: n.userAgent
                    }
                })
            };
            return t && o(n, t),
            n
        }
        function o(t, e={}) {
            if (!e.user || (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
            t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)),
            t.timestamp = e.timestamp || (0,
            r.ph)(),
            e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
            e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0,
            i.DM)()),
            void 0 !== e.init && (t.init = e.init),
            !t.did && e.did && (t.did = `${e.did}`),
            "number" == typeof e.started && (t.started = e.started),
            t.ignoreDuration)
                t.duration = void 0;
            else if ("number" == typeof e.duration)
                t.duration = e.duration;
            else {
                var n = t.timestamp - t.started;
                t.duration = n >= 0 ? n : 0
            }
            e.release && (t.release = e.release),
            e.environment && (t.environment = e.environment),
            !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
            !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
            "number" == typeof e.errors && (t.errors = e.errors),
            e.status && (t.status = e.status)
        }
        function c(t, e) {
            let n = {};
            e ? n = {
                status: e
            } : "ok" === t.status && (n = {
                status: "exited"
            }),
            o(t, n)
        }
    },
    78900: function(t, e, n) {
        "use strict";
        n.d(e, {
            ro: function() {
                return g
            },
            lb: function() {
                return f
            }
        });
        var r = n(8585)
          , i = n(58536)
          , a = n(81757)
          , s = n(4266)
          , o = n(90714)
          , c = n(92517);
        function u() {
            var t = (0,
            c.x1)();
            if (t) {
                var e = "internal_error";
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),
                t.setStatus(e)
            }
        }
        var _ = n(40564)
          , d = n(18235);
        function p() {
            var t = this.getScope();
            if (t) {
                var e = t.getSpan();
                if (e)
                    return {
                        "sentry-trace": e.toTraceparent()
                    }
            }
            return {}
        }
        function l(t, e, n) {
            var r;
            let s;
            return (0,
            c.zu)(e) ? void 0 !== t.sampled ? t.setMetadata({
                transactionSampling: {
                    method: "explicitly_set"
                }
            }) : ("function" == typeof e.tracesSampler ? (s = e.tracesSampler(n),
            t.setMetadata({
                transactionSampling: {
                    method: "client_sampler",
                    rate: Number(s)
                }
            })) : void 0 !== n.parentSampled ? (s = n.parentSampled,
            t.setMetadata({
                transactionSampling: {
                    method: "inheritance"
                }
            })) : (s = e.tracesSampleRate,
            t.setMetadata({
                transactionSampling: {
                    method: "client_rate",
                    rate: Number(s)
                }
            })),
            r = s,
            (0,
            a.i2)(r) || !("number" == typeof r || "boolean" == typeof r) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`),
            1) : (r < 0 || r > 1) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${r}.`),
            1)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),
            t.sampled = !1) : s ? (t.sampled = Math.random() < s,
            t.sampled) ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
            t.sampled = !1) : t.sampled = !1,
            t
        }
        function h(t, e) {
            var n = this.getClient()
              , r = n && n.getOptions() || {};
            let i = new d.Y(t,this);
            return (i = l(i, r, {
                parentSampled: t.parentSampled,
                transactionContext: t,
                ...e
            })).sampled && i.initSpanRecorder(r._experiments && r._experiments.maxSpans),
            i
        }
        function f(t, e, n, r, i, a) {
            var s = t.getClient()
              , o = s && s.getOptions() || {};
            let c = new _.io(e,t,n,r,i);
            return (c = l(c, o, {
                parentSampled: e.parentSampled,
                transactionContext: e,
                ...a
            })).sampled && c.initSpanRecorder(o._experiments && o._experiments.maxSpans),
            c
        }
        function g() {
            var e;
            (e = (0,
            r.cu)()).__SENTRY__ && (e.__SENTRY__.extensions = e.__SENTRY__.extensions || {},
            e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = h),
            e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = p)),
            (0,
            s.KV)() && function() {
                var e = (0,
                r.cu)();
                if (e.__SENTRY__) {
                    var n = {
                        mongodb: ()=>new ((0,
                        s.l$)(t, "./integrations/node/mongo")).Mongo,
                        mongoose: ()=>new ((0,
                        s.l$)(t, "./integrations/node/mongo")).Mongo({
                            mongoose: !0
                        }),
                        mysql: ()=>new ((0,
                        s.l$)(t, "./integrations/node/mysql")).Mysql,
                        pg: ()=>new ((0,
                        s.l$)(t, "./integrations/node/postgres")).Postgres
                    }
                      , i = Object.keys(n).filter(t=>!!(0,
                    s.$y)(t)).map(t=>{
                        try {
                            return n[t]()
                        } catch (t) {
                            return
                        }
                    }
                    ).filter(t=>t);
                    i.length > 0 && (e.__SENTRY__.integrations = [...e.__SENTRY__.integrations || [], ...i])
                }
            }(),
            (0,
            o.o)("error", u),
            (0,
            o.o)("unhandledrejection", u)
        }
        t = n.hmd(t)
    },
    40564: function(t, e, n) {
        "use strict";
        n.d(e, {
            io: function() {
                return _
            },
            mg: function() {
                return c
            },
            nT: function() {
                return o
            }
        });
        var r = n(7790)
          , i = n(58536)
          , a = n(28207)
          , s = n(18235)
          , o = 1e3
          , c = 3e4;
        class u extends a.gB {
            constructor(t, e, n, r) {
                super(r),
                this._pushActivity = t,
                this._popActivity = e,
                this.transactionSpanId = n
            }
            add(t) {
                t.spanId !== this.transactionSpanId && (t.finish = e=>{
                    t.endTimestamp = "number" == typeof e ? e : (0,
                    r._I)(),
                    this._popActivity(t.spanId)
                }
                ,
                void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
                super.add(t)
            }
        }
        class _ extends s.Y {
            __init() {
                this.activities = {}
            }
            __init2() {
                this._heartbeatCounter = 0
            }
            __init3() {
                this._finished = !1
            }
            __init4() {
                this._beforeFinishCallbacks = []
            }
            constructor(t, e, n=o, r=c, a=!1) {
                super(t, e),
                this._idleHub = e,
                this._idleTimeout = n,
                this._finalTimeout = r,
                this._onScope = a,
                _.prototype.__init.call(this),
                _.prototype.__init2.call(this),
                _.prototype.__init3.call(this),
                _.prototype.__init4.call(this),
                a && (d(e),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),
                e.configureScope(t=>t.setSpan(this))),
                this._startIdleTimeout(),
                setTimeout(()=>{
                    this._finished || (this.setStatus("deadline_exceeded"),
                    this.finish())
                }
                , this._finalTimeout)
            }
            finish(t=(0,
            r._I)()) {
                if (this._finished = !0,
                this.activities = {},
                this.spanRecorder) {
                    for (var e of (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op),
                    this._beforeFinishCallbacks))
                        e(this, t);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter(e=>{
                        if (e.spanId === this.spanId)
                            return !0;
                        !e.endTimestamp && (e.endTimestamp = t,
                        e.setStatus("cancelled"),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                        var n = e.startTimestamp < t;
                        return !n && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2)),
                        n
                    }
                    ),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] flushing IdleTransaction")
                } else
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] No active IdleTransaction");
                return this._onScope && d(this._idleHub),
                super.finish(t)
            }
            registerBeforeFinishCallback(t) {
                this._beforeFinishCallbacks.push(t)
            }
            initSpanRecorder(t) {
                this.spanRecorder || (this.spanRecorder = new u(t=>{
                    this._finished || this._pushActivity(t)
                }
                ,t=>{
                    this._finished || this._popActivity(t)
                }
                ,this.spanId,t),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("Starting heartbeat"),
                this._pingHeartbeat()),
                this.spanRecorder.add(this)
            }
            _cancelIdleTimeout() {
                this._idleTimeoutID && (clearTimeout(this._idleTimeoutID),
                this._idleTimeoutID = void 0)
            }
            _startIdleTimeout(t) {
                this._cancelIdleTimeout(),
                this._idleTimeoutID = setTimeout(()=>{
                    this._finished || 0 !== Object.keys(this.activities).length || this.finish(t)
                }
                , this._idleTimeout)
            }
            _pushActivity(t) {
                this._cancelIdleTimeout(),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] pushActivity: ${t}`),
                this.activities[t] = !0,
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
            }
            _popActivity(t) {
                if (this.activities[t] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] popActivity ${t}`),
                delete this.activities[t],
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)),
                0 === Object.keys(this.activities).length) {
                    var e = (0,
                    r._I)() + this._idleTimeout / 1e3;
                    this._startIdleTimeout(e)
                }
            }
            _beat() {
                if (!this._finished) {
                    var t = Object.keys(this.activities).join("");
                    t === this._prevHeartbeatString ? this._heartbeatCounter += 1 : this._heartbeatCounter = 1,
                    this._prevHeartbeatString = t,
                    this._heartbeatCounter >= 3 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                    this.setStatus("deadline_exceeded"),
                    this.finish()) : this._pingHeartbeat()
                }
            }
            _pingHeartbeat() {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
                setTimeout(()=>{
                    this._beat()
                }
                , 5e3)
            }
        }
        function d(t) {
            var e = t.getScope();
            e && e.getTransaction() && e.setSpan(void 0)
        }
    },
    28207: function(t, e, n) {
        "use strict";
        n.d(e, {
            Dr: function() {
                return u
            },
            gB: function() {
                return c
            }
        });
        var r = n(12885)
          , i = n(63699)
          , a = n(7790)
          , s = n(58536)
          , o = n(21995);
        class c {
            __init() {
                this.spans = []
            }
            constructor(t=1e3) {
                c.prototype.__init.call(this),
                this._maxlen = t
            }
            add(t) {
                this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
            }
        }
        class u {
            __init2() {
                this.traceId = (0,
                i.DM)()
            }
            __init3() {
                this.spanId = (0,
                i.DM)().substring(16)
            }
            __init4() {
                this.startTimestamp = (0,
                a._I)()
            }
            __init5() {
                this.tags = {}
            }
            __init6() {
                this.data = {}
            }
            constructor(t) {
                if (u.prototype.__init2.call(this),
                u.prototype.__init3.call(this),
                u.prototype.__init4.call(this),
                u.prototype.__init5.call(this),
                u.prototype.__init6.call(this),
                !t)
                    return this;
                t.traceId && (this.traceId = t.traceId),
                t.spanId && (this.spanId = t.spanId),
                t.parentSpanId && (this.parentSpanId = t.parentSpanId),
                "sampled"in t && (this.sampled = t.sampled),
                t.op && (this.op = t.op),
                t.description && (this.description = t.description),
                t.data && (this.data = t.data),
                t.tags && (this.tags = t.tags),
                t.status && (this.status = t.status),
                t.startTimestamp && (this.startTimestamp = t.startTimestamp),
                t.endTimestamp && (this.endTimestamp = t.endTimestamp)
            }
            startChild(t) {
                var e = new u({
                    ...t,
                    parentSpanId: this.spanId,
                    sampled: this.sampled,
                    traceId: this.traceId
                });
                if (e.spanRecorder = this.spanRecorder,
                e.spanRecorder && e.spanRecorder.add(e),
                e.transaction = this.transaction,
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && e.transaction) {
                    var n = `[Tracing] Starting '${t && t.op || "< unknown op >"}' span on transaction '${e.transaction.name || "< unknown name >"}' (${e.transaction.spanId}).`;
                    e.transaction.metadata.spanMetadata[e.spanId] = {
                        logMessage: n
                    },
                    s.kg.log(n)
                }
                return e
            }
            setTag(t, e) {
                return this.tags = {
                    ...this.tags,
                    [t]: e
                },
                this
            }
            setData(t, e) {
                return this.data = {
                    ...this.data,
                    [t]: e
                },
                this
            }
            setStatus(t) {
                return this.status = t,
                this
            }
            setHttpStatus(t) {
                this.setTag("http.status_code", String(t));
                var e = function(t) {
                    if (t < 400 && t >= 100)
                        return "ok";
                    if (t >= 400 && t < 500)
                        switch (t) {
                        case 401:
                            return "unauthenticated";
                        case 403:
                            return "permission_denied";
                        case 404:
                            return "not_found";
                        case 409:
                            return "already_exists";
                        case 413:
                            return "failed_precondition";
                        case 429:
                            return "resource_exhausted";
                        default:
                            return "invalid_argument"
                        }
                    if (t >= 500 && t < 600)
                        switch (t) {
                        case 501:
                            return "unimplemented";
                        case 503:
                            return "unavailable";
                        case 504:
                            return "deadline_exceeded";
                        default:
                            return "internal_error"
                        }
                    return "unknown_error"
                }(t);
                return "unknown_error" !== e && this.setStatus(e),
                this
            }
            isSuccess() {
                return "ok" === this.status
            }
            finish(t) {
                if (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
                    let {logMessage: t} = this.transaction.metadata.spanMetadata[this.spanId];
                    t && s.kg.log(t.replace("Starting", "Finishing"))
                }
                this.endTimestamp = "number" == typeof t ? t : (0,
                a._I)()
            }
            toTraceparent() {
                let t = "";
                return void 0 !== this.sampled && (t = this.sampled ? "-1" : "-0"),
                `${this.traceId}-${this.spanId}${t}`
            }
            toContext() {
                return (0,
                o.Jr)({
                    data: this.data,
                    description: this.description,
                    endTimestamp: this.endTimestamp,
                    op: this.op,
                    parentSpanId: this.parentSpanId,
                    sampled: this.sampled,
                    spanId: this.spanId,
                    startTimestamp: this.startTimestamp,
                    status: this.status,
                    tags: this.tags,
                    traceId: this.traceId
                })
            }
            updateWithContext(t) {
                return this.data = (0,
                r.h)(t.data, ()=>({})),
                this.description = t.description,
                this.endTimestamp = t.endTimestamp,
                this.op = t.op,
                this.parentSpanId = t.parentSpanId,
                this.sampled = t.sampled,
                this.spanId = (0,
                r.h)(t.spanId, ()=>this.spanId),
                this.startTimestamp = (0,
                r.h)(t.startTimestamp, ()=>this.startTimestamp),
                this.status = t.status,
                this.tags = (0,
                r.h)(t.tags, ()=>({})),
                this.traceId = (0,
                r.h)(t.traceId, ()=>this.traceId),
                this
            }
            getTraceContext() {
                return (0,
                o.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    trace_id: this.traceId
                })
            }
            toJSON() {
                return (0,
                o.Jr)({
                    data: Object.keys(this.data).length > 0 ? this.data : void 0,
                    description: this.description,
                    op: this.op,
                    parent_span_id: this.parentSpanId,
                    span_id: this.spanId,
                    start_timestamp: this.startTimestamp,
                    status: this.status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this.endTimestamp,
                    trace_id: this.traceId
                })
            }
        }
    },
    18235: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return u
            }
        });
        var r = n(12885)
          , i = n(8585)
          , a = n(58536)
          , s = n(21995)
          , o = n(46990)
          , c = n(28207);
        class u extends c.Dr {
            __init() {
                this._measurements = {}
            }
            constructor(t, e) {
                super(t),
                u.prototype.__init.call(this),
                this._hub = e || (0,
                i.Gd)(),
                this._name = t.name || "",
                this.metadata = {
                    ...t.metadata,
                    spanMetadata: {}
                },
                this._trimEnd = t.trimEnd,
                this.transaction = this
            }
            get name() {
                return this._name
            }
            set name(t) {
                this._name = t,
                this.metadata.source = "custom"
            }
            setName(t, e="custom") {
                this.name = t,
                this.metadata.source = e
            }
            initSpanRecorder(t=1e3) {
                this.spanRecorder || (this.spanRecorder = new c.gB(t)),
                this.spanRecorder.add(this)
            }
            setMeasurement(t, e, n="") {
                this._measurements[t] = {
                    value: e,
                    unit: n
                }
            }
            setMetadata(t) {
                this.metadata = {
                    ...this.metadata,
                    ...t
                }
            }
            finish(t) {
                if (void 0 === this.endTimestamp) {
                    if (this.name || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                    this.name = "<unlabeled transaction>"),
                    super.finish(t),
                    !0 !== this.sampled) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
                        var e = this._hub.getClient();
                        e && e.recordDroppedEvent("sample_rate", "transaction");
                        return
                    }
                    var n = this.spanRecorder ? this.spanRecorder.spans.filter(t=>t !== this && t.endTimestamp) : [];
                    this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce((t,e)=>t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
                    var r = this.metadata
                      , i = {
                        contexts: {
                            trace: this.getTraceContext()
                        },
                        spans: n,
                        start_timestamp: this.startTimestamp,
                        tags: this.tags,
                        timestamp: this.endTimestamp,
                        transaction: this.name,
                        type: "transaction",
                        sdkProcessingMetadata: {
                            ...r,
                            baggage: this.getBaggage()
                        },
                        ...r.source && {
                            transaction_info: {
                                source: r.source
                            }
                        }
                    };
                    return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                    i.measurements = this._measurements),
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),
                    this._hub.captureEvent(i)
                }
            }
            toContext() {
                var t = super.toContext();
                return (0,
                s.Jr)({
                    ...t,
                    name: this.name,
                    trimEnd: this._trimEnd
                })
            }
            updateWithContext(t) {
                return super.updateWithContext(t),
                this.name = (0,
                r.h)(t.name, ()=>""),
                this._trimEnd = t.trimEnd,
                this
            }
            getBaggage() {
                var t = this.metadata.baggage
                  , e = !t || (0,
                o.Gp)(t) ? this._populateBaggageWithSentryValues(t) : t;
                return this.metadata.baggage = e,
                e
            }
            _populateBaggageWithSentryValues(t=(0,
            o.Hn)({})) {
                var e = this._hub || (0,
                i.Gd)()
                  , n = e && e.getClient();
                if (!n)
                    return t;
                let {environment: r, release: a} = n.getOptions() || {}
                  , {publicKey: c} = n.getDsn() || {};
                var u = this.metadata && this.metadata.transactionSampling && this.metadata.transactionSampling.rate
                  , _ = void 0 !== u ? u.toLocaleString("fullwide", {
                    useGrouping: !1,
                    maximumFractionDigits: 16
                }) : void 0
                  , d = e.getScope();
                let {segment: p} = d && d.getUser() || {};
                var l = this.metadata.source
                  , h = l && "url" !== l ? this.name : void 0;
                return (0,
                o.Hn)((0,
                s.Jr)({
                    environment: r,
                    release: a,
                    transaction: h,
                    user_segment: p,
                    public_key: c,
                    trace_id: this.traceId,
                    sample_rate: _,
                    ...(0,
                    o.Hk)(t)
                }), "", !1)
            }
        }
    },
    92517: function(t, e, n) {
        "use strict";
        n.d(e, {
            XL: function() {
                return s
            },
            x1: function() {
                return a
            },
            zu: function() {
                return i
            }
        });
        var r = n(8585);
        function i(t) {
            var e = (0,
            r.Gd)().getClient()
              , n = t || e && e.getOptions();
            return !!n && ("tracesSampleRate"in n || "tracesSampler"in n)
        }
        function a(t) {
            var e = (t || (0,
            r.Gd)()).getScope();
            return e && e.getTransaction()
        }
        function s(t) {
            return t / 1e3
        }
    },
    46990: function(t, e, n) {
        "use strict";
        n.d(e, {
            Gp: function() {
                return u
            },
            Hk: function() {
                return c
            },
            Hn: function() {
                return o
            },
            J8: function() {
                return d
            },
            bU: function() {
                return a
            },
            rg: function() {
                return p
            }
        });
        var r = n(81757)
          , i = n(58536)
          , a = "baggage"
          , s = /^sentry-/;
        function o(t, e="", n=!0) {
            return [{
                ...t
            }, e, n]
        }
        function c(t) {
            return t[0]
        }
        function u(t) {
            return t[2]
        }
        function _(t, e=!1) {
            return (Array.isArray(t) || (0,
            r.HD)(t)) && "number" != typeof t ? ((0,
            r.HD)(t) ? t : t.join(",")).split(",").map(t=>t.trim()).filter(t=>"" !== t && (e || s.test(t))).reduce(([t,e],n)=>{
                let[r,i] = n.split("=");
                if (!s.test(r))
                    return [t, "" === e ? n : `${e},${n}`, !0];
                var a = decodeURIComponent(r.split("-")[1]);
                return [{
                    ...t,
                    [a]: decodeURIComponent(i)
                }, e, !0]
            }
            , [{}, "", !0]) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("[parseBaggageHeader] Received input value of incompatible type: ", typeof t, t),
            o({}, ""))
        }
        function d(t, e) {
            if (!t && !e)
                return "";
            var n, r = e && _(e, !0) || void 0, a = r && r[1];
            return Object.keys((n = o(t && t[0] || {}, a || ""))[0]).reduce((t,e)=>{
                var r = n[0][e]
                  , a = `sentry-${encodeURIComponent(e)}=${encodeURIComponent(r)}`
                  , s = "" === t ? a : `${t},${a}`;
                return s.length > 8192 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`Not adding key: ${e} with val: ${r} to baggage due to exceeding baggage size limits.`),
                t) : s
            }
            , n[1])
        }
        function p(t, e) {
            var n = _(t || "");
            return (e || 0 !== Object.keys(n[0]).length) && (n[2] = !1),
            n
        }
    },
    54194: function(t, e, n) {
        "use strict";
        n.d(e, {
            R: function() {
                return a
            },
            l: function() {
                return s
            }
        });
        var r = n(65907)
          , i = n(81757);
        function a(t, e) {
            try {
                let r, a = t;
                var n = [];
                let s = 0
                  , o = 0;
                for (; a && s++ < 5 && (r = function(t, e) {
                    let n, r, a, s, o;
                    var c = [];
                    if (!t || !t.tagName)
                        return "";
                    c.push(t.tagName.toLowerCase());
                    var u = e && e.length ? e.filter(e=>t.getAttribute(e)).map(e=>[e, t.getAttribute(e)]) : null;
                    if (u && u.length)
                        u.forEach(t=>{
                            c.push(`[${t[0]}="${t[1]}"]`)
                        }
                        );
                    else if (t.id && c.push(`#${t.id}`),
                    (n = t.className) && (0,
                    i.HD)(n))
                        for (o = 0,
                        r = n.split(/\s+/); o < r.length; o++)
                            c.push(`.${r[o]}`);
                    var _ = ["type", "name", "title", "alt"];
                    for (o = 0; o < _.length; o++)
                        a = _[o],
                        (s = t.getAttribute(a)) && c.push(`[${a}="${s}"]`);
                    return c.join("")
                }(a, e),
                "html" !== r && (!(s > 1) || !(o + 3 * n.length + r.length >= 80))); )
                    n.push(r),
                    o += r.length,
                    a = a.parentNode;
                return n.reverse().join(" > ")
            } catch (t) {
                return "<unknown>"
            }
        }
        function s() {
            var t = (0,
            r.R)();
            try {
                return t.document.location.href
            } catch (t) {
                return ""
            }
        }
    },
    12885: function(t, e, n) {
        "use strict";
        function r(t, e) {
            return null != t ? t : e()
        }
        n.d(e, {
            h: function() {
                return r
            }
        })
    },
    65907: function(t, e, n) {
        "use strict";
        n.d(e, {
            R: function() {
                return a
            },
            Y: function() {
                return s
            }
        });
        var r = n(4266)
          , i = {};
        function a() {
            return (0,
            r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
        }
        function s(t, e, n) {
            var r = n || a()
              , i = r.__SENTRY__ = r.__SENTRY__ || {};
            return i[t] || (i[t] = e())
        }
    },
    90714: function(t, e, n) {
        "use strict";
        let r, i, a;
        n.d(e, {
            o: function() {
                return f
            }
        });
        var s = n(65907)
          , o = n(81757)
          , c = n(58536)
          , u = n(21995)
          , _ = n(69038)
          , d = n(49798)
          , p = (0,
        s.R)()
          , l = {}
          , h = {};
        function f(t, e) {
            l[t] = l[t] || [],
            l[t].push(e),
            function(t) {
                if (!h[t])
                    switch (h[t] = !0,
                    t) {
                    case "console":
                        "console"in p && c.RU.forEach(function(t) {
                            t in p.console && (0,
                            u.hl)(p.console, t, function(e) {
                                return function(...n) {
                                    g("console", {
                                        args: n,
                                        level: t
                                    }),
                                    e && e.apply(p.console, n)
                                }
                            })
                        });
                        break;
                    case "dom":
                        (function() {
                            if ("document"in p) {
                                var t = g.bind(null, "dom")
                                  , e = m(t, !0);
                                p.document.addEventListener("click", e, !1),
                                p.document.addEventListener("keypress", e, !1),
                                ["EventTarget", "Node"].forEach(e=>{
                                    var n = p[e] && p[e].prototype;
                                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
                                    u.hl)(n, "addEventListener", function(e) {
                                        return function(n, r, i) {
                                            if ("click" === n || "keypress" == n)
                                                try {
                                                    var a = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                                                      , s = a[n] = a[n] || {
                                                        refCount: 0
                                                    };
                                                    if (!s.handler) {
                                                        var o = m(t);
                                                        s.handler = o,
                                                        e.call(this, n, o, i)
                                                    }
                                                    s.refCount += 1
                                                } catch (t) {}
                                            return e.call(this, n, r, i)
                                        }
                                    }),
                                    (0,
                                    u.hl)(n, "removeEventListener", function(t) {
                                        return function(e, n, r) {
                                            if ("click" === e || "keypress" == e)
                                                try {
                                                    var i = this.__sentry_instrumentation_handlers__ || {}
                                                      , a = i[e];
                                                    a && (a.refCount -= 1,
                                                    a.refCount <= 0 && (t.call(this, e, a.handler, r),
                                                    a.handler = void 0,
                                                    delete i[e]),
                                                    0 === Object.keys(i).length && delete this.__sentry_instrumentation_handlers__)
                                                } catch (t) {}
                                            return t.call(this, e, n, r)
                                        }
                                    }))
                                }
                                )
                            }
                        }
                        )();
                        break;
                    case "xhr":
                        (function() {
                            if ("XMLHttpRequest"in p) {
                                var t = XMLHttpRequest.prototype;
                                (0,
                                u.hl)(t, "open", function(t) {
                                    return function(...e) {
                                        var n = this
                                          , r = e[1]
                                          , i = n.__sentry_xhr__ = {
                                            method: (0,
                                            o.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                                            url: e[1]
                                        };
                                        (0,
                                        o.HD)(r) && "POST" === i.method && r.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
                                        var a = function() {
                                            if (4 === n.readyState) {
                                                try {
                                                    i.status_code = n.status
                                                } catch (t) {}
                                                g("xhr", {
                                                    args: e,
                                                    endTimestamp: Date.now(),
                                                    startTimestamp: Date.now(),
                                                    xhr: n
                                                })
                                            }
                                        };
                                        return "onreadystatechange"in n && "function" == typeof n.onreadystatechange ? (0,
                                        u.hl)(n, "onreadystatechange", function(t) {
                                            return function(...e) {
                                                return a(),
                                                t.apply(n, e)
                                            }
                                        }) : n.addEventListener("readystatechange", a),
                                        t.apply(n, e)
                                    }
                                }),
                                (0,
                                u.hl)(t, "send", function(t) {
                                    return function(...e) {
                                        return this.__sentry_xhr__ && void 0 !== e[0] && (this.__sentry_xhr__.body = e[0]),
                                        g("xhr", {
                                            args: e,
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        }),
                                        t.apply(this, e)
                                    }
                                })
                            }
                        }
                        )();
                        break;
                    case "fetch":
                        (0,
                        d.t$)() && (0,
                        u.hl)(p, "fetch", function(t) {
                            return function(...e) {
                                var n = {
                                    args: e,
                                    fetchData: {
                                        method: function(t=[]) {
                                            return "Request"in p && (0,
                                            o.V9)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
                                        }(e),
                                        url: function(t=[]) {
                                            return "string" == typeof t[0] ? t[0] : "Request"in p && (0,
                                            o.V9)(t[0], Request) ? t[0].url : String(t[0])
                                        }(e)
                                    },
                                    startTimestamp: Date.now()
                                };
                                return g("fetch", {
                                    ...n
                                }),
                                t.apply(p, e).then(t=>(g("fetch", {
                                    ...n,
                                    endTimestamp: Date.now(),
                                    response: t
                                }),
                                t), t=>{
                                    throw g("fetch", {
                                        ...n,
                                        endTimestamp: Date.now(),
                                        error: t
                                    }),
                                    t
                                }
                                )
                            }
                        });
                        break;
                    case "history":
                        (function() {
                            if ((0,
                            d.Bf)()) {
                                var t = p.onpopstate;
                                p.onpopstate = function(...e) {
                                    var n = p.location.href
                                      , i = r;
                                    if (r = n,
                                    g("history", {
                                        from: i,
                                        to: n
                                    }),
                                    t)
                                        try {
                                            return t.apply(this, e)
                                        } catch (t) {}
                                }
                                ,
                                (0,
                                u.hl)(p.history, "pushState", e),
                                (0,
                                u.hl)(p.history, "replaceState", e)
                            }
                            function e(t) {
                                return function(...e) {
                                    var n = e.length > 2 ? e[2] : void 0;
                                    if (n) {
                                        var i = r
                                          , a = String(n);
                                        r = a,
                                        g("history", {
                                            from: i,
                                            to: a
                                        })
                                    }
                                    return t.apply(this, e)
                                }
                            }
                        }
                        )();
                        break;
                    case "error":
                        v = p.onerror,
                        p.onerror = function(t, e, n, r, i) {
                            return g("error", {
                                column: r,
                                error: i,
                                line: n,
                                msg: t,
                                url: e
                            }),
                            !!v && v.apply(this, arguments)
                        }
                        ;
                        break;
                    case "unhandledrejection":
                        y = p.onunhandledrejection,
                        p.onunhandledrejection = function(t) {
                            return g("unhandledrejection", t),
                            !y || y.apply(this, arguments)
                        }
                        ;
                        break;
                    default:
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.kg.warn("unknown instrumentation type:", t);
                        return
                    }
            }(t)
        }
        function g(t, e) {
            if (t && l[t])
                for (var n of l[t] || [])
                    try {
                        n(e)
                    } catch (e) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && c.kg.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0,
                        _.$P)(n)}
Error:`, e)
                    }
        }
        function m(t, e=!1) {
            return n=>{
                if (!(!n || a === n || function(t) {
                    if ("keypress" !== t.type)
                        return !1;
                    try {
                        var e = t.target;
                        if (!e || !e.tagName)
                            return !0;
                        if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable)
                            return !1
                    } catch (t) {}
                    return !0
                }(n))) {
                    var r = "keypress" === n.type ? "input" : n.type;
                    void 0 === i ? (t({
                        event: n,
                        name: r,
                        global: e
                    }),
                    a = n) : function(t, e) {
                        if (!t || t.type !== e.type)
                            return !0;
                        try {
                            if (t.target !== e.target)
                                return !0
                        } catch (t) {}
                        return !1
                    }(a, n) && (t({
                        event: n,
                        name: r,
                        global: e
                    }),
                    a = n),
                    clearTimeout(i),
                    i = p.setTimeout(()=>{
                        i = void 0
                    }
                    , 1e3)
                }
            }
        }
        let v = null
          , y = null
    },
    81757: function(t, e, n) {
        "use strict";
        n.d(e, {
            Cy: function() {
                return g
            },
            HD: function() {
                return u
            },
            J8: function() {
                return f
            },
            Kj: function() {
                return h
            },
            PO: function() {
                return d
            },
            TX: function() {
                return o
            },
            V9: function() {
                return v
            },
            VW: function() {
                return s
            },
            VZ: function() {
                return i
            },
            cO: function() {
                return p
            },
            fm: function() {
                return c
            },
            i2: function() {
                return m
            },
            kK: function() {
                return l
            },
            pt: function() {
                return _
            }
        });
        var r = Object.prototype.toString;
        function i(t) {
            switch (r.call(t)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return v(t, Error)
            }
        }
        function a(t, e) {
            return r.call(t) === `[object ${e}]`
        }
        function s(t) {
            return a(t, "ErrorEvent")
        }
        function o(t) {
            return a(t, "DOMError")
        }
        function c(t) {
            return a(t, "DOMException")
        }
        function u(t) {
            return a(t, "String")
        }
        function _(t) {
            return null === t || "object" != typeof t && "function" != typeof t
        }
        function d(t) {
            return a(t, "Object")
        }
        function p(t) {
            return "undefined" != typeof Event && v(t, Event)
        }
        function l(t) {
            return "undefined" != typeof Element && v(t, Element)
        }
        function h(t) {
            return a(t, "RegExp")
        }
        function f(t) {
            return !!(t && t.then && "function" == typeof t.then)
        }
        function g(t) {
            return d(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
        }
        function m(t) {
            return "number" == typeof t && t != t
        }
        function v(t, e) {
            try {
                return t instanceof e
            } catch (t) {
                return !1
            }
        }
    },
    58536: function(t, e, n) {
        "use strict";
        let r;
        n.d(e, {
            Cf: function() {
                return o
            },
            RU: function() {
                return s
            },
            kg: function() {
                return r
            }
        });
        var i = n(65907)
          , a = (0,
        i.R)()
          , s = ["debug", "info", "warn", "error", "log", "assert", "trace"];
        function o(t) {
            var e = (0,
            i.R)();
            if (!("console"in e))
                return t();
            var n = e.console
              , r = {};
            s.forEach(t=>{
                var i = n[t] && n[t].__sentry_original__;
                t in e.console && i && (r[t] = n[t],
                n[t] = i)
            }
            );
            try {
                return t()
            } finally {
                Object.keys(r).forEach(t=>{
                    n[t] = r[t]
                }
                )
            }
        }
        function c() {
            let t = !1;
            var e = {
                enable: ()=>{
                    t = !0
                }
                ,
                disable: ()=>{
                    t = !1
                }
            };
            return "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? s.forEach(n=>{
                e[n] = (...e)=>{
                    t && o(()=>{
                        a.console[n](`Sentry Logger [${n}]:`, ...e)
                    }
                    )
                }
            }
            ) : s.forEach(t=>{
                e[t] = ()=>void 0
            }
            ),
            e
        }
        r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? (0,
        i.Y)("logger", c) : c()
    },
    63699: function(t, e, n) {
        "use strict";
        n.d(e, {
            DM: function() {
                return a
            },
            Db: function() {
                return u
            },
            EG: function() {
                return _
            },
            YO: function() {
                return p
            },
            en: function() {
                return s
            },
            jH: function() {
                return c
            },
            rt: function() {
                return d
            }
        });
        var r = n(65907)
          , i = n(21995);
        function a() {
            var t = (0,
            r.R)()
              , e = t.crypto || t.msCrypto;
            if (e && e.randomUUID)
                return e.randomUUID().replace(/-/g, "");
            var n = e && e.getRandomValues ? ()=>e.getRandomValues(new Uint8Array(1))[0] : ()=>16 * Math.random();
            return "10000000100040008000100000000000".replace(/[018]/g, t=>(t ^ (15 & n()) >> t / 4).toString(16))
        }
        function s(t) {
            if (!t)
                return {};
            var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e)
                return {};
            var n = e[6] || ""
              , r = e[8] || "";
            return {
                host: e[4],
                path: e[5],
                protocol: e[2],
                relative: e[5] + n + r
            }
        }
        function o(t) {
            return t.exception && t.exception.values ? t.exception.values[0] : void 0
        }
        function c(t) {
            let {message: e, event_id: n} = t;
            if (e)
                return e;
            var r = o(t);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }
        function u(t, e, n) {
            var r = t.exception = t.exception || {}
              , i = r.values = r.values || []
              , a = i[0] = i[0] || {};
            a.value || (a.value = e || ""),
            a.type || (a.type = n || "Error")
        }
        function _(t, e) {
            var n = o(t);
            if (n) {
                var r = n.mechanism;
                if (n.mechanism = {
                    type: "generic",
                    handled: !0,
                    ...r,
                    ...e
                },
                e && "data"in e) {
                    var i = {
                        ...r && r.data,
                        ...e.data
                    };
                    n.mechanism.data = i
                }
            }
        }
        function d(t) {
            return t.split(/[\?#]/, 1)[0]
        }
        function p(t) {
            if (t && t.__sentry_captured__)
                return !0;
            try {
                (0,
                i.xp)(t, "__sentry_captured__", !0)
            } catch (t) {}
            return !1
        }
    },
    4266: function(t, e, n) {
        "use strict";
        n.d(e, {
            l$: function() {
                return a
            },
            KV: function() {
                return i
            },
            $y: function() {
                return s
            }
        }),
        t = n.hmd(t);
        var r = n(34406);
        function i() {
            return !("undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && __SENTRY_BROWSER_BUNDLE__) && "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
        }
        function a(t, e) {
            return t.require(e)
        }
        function s(e) {
            let n;
            try {
                n = a(t, e)
            } catch (t) {}
            try {
                let {cwd: r} = a(t, "process");
                n = a(t, `${r()}/node_modules/${e}`)
            } catch (t) {}
            return n
        }
    },
    21995: function(t, e, n) {
        "use strict";
        n.d(e, {
            $Q: function() {
                return c
            },
            HK: function() {
                return u
            },
            Jr: function() {
                return f
            },
            Sh: function() {
                return d
            },
            _j: function() {
                return _
            },
            hl: function() {
                return s
            },
            xp: function() {
                return o
            },
            zf: function() {
                return h
            }
        });
        var r = n(54194)
          , i = n(81757)
          , a = n(39660);
        function s(t, e, n) {
            if (e in t) {
                var r = t[e]
                  , i = n(r);
                if ("function" == typeof i)
                    try {
                        c(i, r)
                    } catch (t) {}
                t[e] = i
            }
        }
        function o(t, e, n) {
            Object.defineProperty(t, e, {
                value: n,
                writable: !0,
                configurable: !0
            })
        }
        function c(t, e) {
            var n = e.prototype || {};
            t.prototype = e.prototype = n,
            o(t, "__sentry_original__", e)
        }
        function u(t) {
            return t.__sentry_original__
        }
        function _(t) {
            return Object.keys(t).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
        }
        function d(t) {
            if ((0,
            i.VZ)(t))
                return {
                    message: t.message,
                    name: t.name,
                    stack: t.stack,
                    ...l(t)
                };
            if (!(0,
            i.cO)(t))
                return t;
            var e = {
                type: t.type,
                target: p(t.target),
                currentTarget: p(t.currentTarget),
                ...l(t)
            };
            return "undefined" != typeof CustomEvent && (0,
            i.V9)(t, CustomEvent) && (e.detail = t.detail),
            e
        }
        function p(t) {
            try {
                return (0,
                i.kK)(t) ? (0,
                r.R)(t) : Object.prototype.toString.call(t)
            } catch (t) {
                return "<unknown>"
            }
        }
        function l(t) {
            if ("object" != typeof t || null === t)
                return {};
            var e = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }
        function h(t, e=40) {
            var n = Object.keys(d(t));
            if (n.sort(),
            !n.length)
                return "[object has no keys]";
            if (n[0].length >= e)
                return (0,
                a.$G)(n[0], e);
            for (let t = n.length; t > 0; t--) {
                var r = n.slice(0, t).join(", ");
                if (!(r.length > e)) {
                    if (t === n.length)
                        return r;
                    return (0,
                    a.$G)(r, e)
                }
            }
            return ""
        }
        function f(t) {
            return function t(e, n) {
                if ((0,
                i.PO)(e)) {
                    var r = n.get(e);
                    if (void 0 !== r)
                        return r;
                    var a = {};
                    for (var s of (n.set(e, a),
                    Object.keys(e)))
                        void 0 !== e[s] && (a[s] = t(e[s], n));
                    return a
                }
                if (Array.isArray(e)) {
                    var r = n.get(e);
                    if (void 0 !== r)
                        return r;
                    var a = [];
                    return n.set(e, a),
                    e.forEach(e=>{
                        a.push(t(e, n))
                    }
                    ),
                    a
                }
                return e
            }(t, new Map)
        }
    },
    69038: function(t, e, n) {
        "use strict";
        function r(...t) {
            var e = t.sort((t,e)=>t[0] - e[0]).map(t=>t[1]);
            return (t,n=0)=>{
                var r = [];
                for (var i of t.split("\n").slice(n))
                    for (var a of e) {
                        var s = a(i);
                        if (s) {
                            r.push(s);
                            break
                        }
                    }
                return function(t) {
                    if (!t.length)
                        return [];
                    let e = t;
                    var n = e[0].function || ""
                      , r = e[e.length - 1].function || "";
                    return (-1 !== n.indexOf("captureMessage") || -1 !== n.indexOf("captureException")) && (e = e.slice(1)),
                    -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)),
                    e.slice(0, 50).map(t=>({
                        ...t,
                        filename: t.filename || e[0].filename,
                        function: t.function || "?"
                    })).reverse()
                }(r)
            }
        }
        function i(t) {
            return Array.isArray(t) ? r(...t) : t
        }
        n.d(e, {
            $P: function() {
                return s
            },
            Sq: function() {
                return i
            },
            pE: function() {
                return r
            }
        });
        var a = "<anonymous>";
        function s(t) {
            try {
                if (!t || "function" != typeof t)
                    return a;
                return t.name || a
            } catch (t) {
                return a
            }
        }
    },
    39660: function(t, e, n) {
        "use strict";
        n.d(e, {
            $G: function() {
                return i
            },
            nK: function() {
                return a
            },
            zC: function() {
                return s
            }
        });
        var r = n(81757);
        function i(t, e=0) {
            return "string" != typeof t || 0 === e ? t : t.length <= e ? t : `${t.substr(0, e)}...`
        }
        function a(t, e) {
            if (!Array.isArray(t))
                return "";
            var n = [];
            for (let e = 0; e < t.length; e++) {
                var r = t[e];
                try {
                    n.push(String(r))
                } catch (t) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(e)
        }
        function s(t, e) {
            return !!(0,
            r.HD)(t) && ((0,
            r.Kj)(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
        }
    },
    49798: function(t, e, n) {
        "use strict";
        n.d(e, {
            Ak: function() {
                return a
            },
            Bf: function() {
                return c
            },
            Du: function() {
                return s
            },
            t$: function() {
                return o
            }
        });
        var r = n(65907)
          , i = n(58536);
        function a() {
            if (!("fetch"in (0,
            r.R)()))
                return !1;
            try {
                return new Headers,
                new Request(""),
                new Response,
                !0
            } catch (t) {
                return !1
            }
        }
        function s(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }
        function o() {
            if (!a())
                return !1;
            var t = (0,
            r.R)();
            if (s(t.fetch))
                return !0;
            let e = !1;
            var n = t.document;
            if (n && "function" == typeof n.createElement)
                try {
                    var o = n.createElement("iframe");
                    o.hidden = !0,
                    n.head.appendChild(o),
                    o.contentWindow && o.contentWindow.fetch && (e = s(o.contentWindow.fetch)),
                    n.head.removeChild(o)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
            return e
        }
        function c() {
            var t = (0,
            r.R)()
              , e = t.chrome
              , n = e && e.app && e.app.runtime
              , i = "history"in t && !!t.history.pushState && !!t.history.replaceState;
            return !n && i
        }
    },
    97946: function(t, e, n) {
        "use strict";
        n.d(e, {
            $2: function() {
                return o
            },
            WD: function() {
                return s
            },
            cW: function() {
                return c
            }
        });
        var r, i, a = n(81757);
        function s(t) {
            return new c(e=>{
                e(t)
            }
            )
        }
        function o(t) {
            return new c((e,n)=>{
                n(t)
            }
            )
        }
        (r = i || (i = {}))[r.PENDING = 0] = "PENDING",
        r[r.RESOLVED = 1] = "RESOLVED",
        r[r.REJECTED = 2] = "REJECTED";
        class c {
            __init() {
                this._state = i.PENDING
            }
            __init2() {
                this._handlers = []
            }
            constructor(t) {
                c.prototype.__init.call(this),
                c.prototype.__init2.call(this),
                c.prototype.__init3.call(this),
                c.prototype.__init4.call(this),
                c.prototype.__init5.call(this),
                c.prototype.__init6.call(this);
                try {
                    t(this._resolve, this._reject)
                } catch (t) {
                    this._reject(t)
                }
            }
            then(t, e) {
                return new c((n,r)=>{
                    this._handlers.push([!1, e=>{
                        if (t)
                            try {
                                n(t(e))
                            } catch (t) {
                                r(t)
                            }
                        else
                            n(e)
                    }
                    , t=>{
                        if (e)
                            try {
                                n(e(t))
                            } catch (t) {
                                r(t)
                            }
                        else
                            r(t)
                    }
                    ]),
                    this._executeHandlers()
                }
                )
            }
            catch(t) {
                return this.then(t=>t, t)
            }
            finally(t) {
                return new c((e,n)=>{
                    let r, i;
                    return this.then(e=>{
                        i = !1,
                        r = e,
                        t && t()
                    }
                    , e=>{
                        i = !0,
                        r = e,
                        t && t()
                    }
                    ).then(()=>{
                        if (i) {
                            n(r);
                            return
                        }
                        e(r)
                    }
                    )
                }
                )
            }
            __init3() {
                this._resolve = t=>{
                    this._setResult(i.RESOLVED, t)
                }
            }
            __init4() {
                this._reject = t=>{
                    this._setResult(i.REJECTED, t)
                }
            }
            __init5() {
                this._setResult = (t,e)=>{
                    if (this._state === i.PENDING) {
                        if ((0,
                        a.J8)(e)) {
                            e.then(this._resolve, this._reject);
                            return
                        }
                        this._state = t,
                        this._value = e,
                        this._executeHandlers()
                    }
                }
            }
            __init6() {
                this._executeHandlers = ()=>{
                    if (this._state !== i.PENDING) {
                        var t = this._handlers.slice();
                        this._handlers = [],
                        t.forEach(t=>{
                            t[0] || (this._state === i.RESOLVED && t[1](this._value),
                            this._state === i.REJECTED && t[2](this._value),
                            t[0] = !0)
                        }
                        )
                    }
                }
            }
        }
    },
    7790: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z1: function() {
                return d
            },
            _I: function() {
                return _
            },
            ph: function() {
                return u
            },
            yW: function() {
                return c
            }
        });
        var r = n(65907)
          , i = n(4266);
        t = n.hmd(t);
        var a = {
            nowSeconds: ()=>Date.now() / 1e3
        }
          , s = (0,
        i.KV)() ? function() {
            try {
                return (0,
                i.l$)(t, "perf_hooks").performance
            } catch (t) {
                return
            }
        }() : function() {
            let {performance: t} = (0,
            r.R)();
            if (t && t.now)
                return {
                    now: ()=>t.now(),
                    timeOrigin: Date.now() - t.now()
                }
        }()
          , o = void 0 === s ? a : {
            nowSeconds: ()=>(s.timeOrigin + s.now()) / 1e3
        }
          , c = a.nowSeconds.bind(a)
          , u = o.nowSeconds.bind(o)
          , _ = u
          , d = (()=>{
            let {performance: t} = (0,
            r.R)();
            if (t && t.now) {
                var e = t.now()
                  , n = Date.now()
                  , i = t.timeOrigin ? Math.abs(t.timeOrigin + e - n) : 36e5
                  , a = t.timing && t.timing.navigationStart
                  , s = "number" == typeof a ? Math.abs(a + e - n) : 36e5;
                return i < 36e5 || s < 36e5 ? i <= s ? t.timeOrigin : a : n
            }
        }
        )()
    },
    78255: function(t, e, n) {
        ("undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
            id: "1463ad6be093d80d4f97c94499173018395ad175"
        }
    },
    70314: function(t, e, n) {
        t.exports = n(3473)
    },
    71588: function(t, e, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(81149)
        }
        ])
    },
    74155: function(t, e, n) {
        "use strict";
        let r, i, a, s, o, c, u, _;
        var d, p, l, h, f, g, m = n(65907), v = n(58536), y = n(21995), E = ["fatal", "error", "warning", "log", "info", "debug"];
        function S(t) {
            return "warn" === t ? "warning" : E.includes(t) ? t : "log"
        }
        var T = n(39660)
          , b = (0,
        m.R)();
        class R {
            static __initStatic() {
                this.id = "CaptureConsole"
            }
            __init() {
                this.name = R.id
            }
            __init2() {
                this._levels = v.RU
            }
            constructor(t={}) {
                R.prototype.__init.call(this),
                R.prototype.__init2.call(this),
                t.levels && (this._levels = t.levels)
            }
            setupOnce(t, e) {
                "console"in b && this._levels.forEach(t=>{
                    t in b.console && (0,
                    y.hl)(b.console, t, n=>(...r)=>{
                        var i = e();
                        i.getIntegration(R) && i.withScope(e=>{
                            e.setLevel(S(t)),
                            e.setExtra("arguments", r),
                            e.addEventProcessor(t=>(t.logger = "console",
                            t));
                            let n = (0,
                            T.nK)(r, " ");
                            "assert" === t ? !1 === r[0] && (n = `Assertion failed: ${(0,
                            T.nK)(r.slice(1), " ") || "console.assert"}`,
                            e.setExtra("arguments", r.slice(1)),
                            i.captureMessage(n)) : "error" === t && r[0]instanceof Error ? i.captureException(r[0]) : i.captureMessage(n)
                        }
                        ),
                        n && n.apply(b.console, r)
                    }
                    )
                }
                )
            }
        }
        R.__initStatic();
        var D = "7.8.0"
          , k = n(63699)
          , N = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
        class x {
            static __initStatic() {
                this.id = "InboundFilters"
            }
            __init() {
                this.name = x.id
            }
            constructor(t={}) {
                this._options = t,
                x.prototype.__init.call(this)
            }
            setupOnce(t, e) {
                var n = t=>{
                    var n = e();
                    if (n) {
                        var r = n.getIntegration(x);
                        if (r) {
                            var i, a, s = n.getClient(), o = s ? s.getOptions() : {};
                            return ((i = function(t={}, e={}) {
                                return {
                                    allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                    denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                    ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...N],
                                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                }
                            }(r._options, o)).ignoreInternal && function(t) {
                                try {
                                    return "SentryError" === t.exception.values[0].type
                                } catch (t) {}
                                return !1
                            }(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,
                            k.jH)(t)}`),
                            0) : (a = i.ignoreErrors) && a.length && (function(t) {
                                if (t.message)
                                    return [t.message];
                                if (t.exception)
                                    try {
                                        let {type: e="", value: n=""} = t.exception.values && t.exception.values[0] || {};
                                        return [`${n}`, `${e}: ${n}`]
                                    } catch (e) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error(`Cannot extract message for event ${(0,
                                        k.jH)(t)}`)
                                    }
                                return []
                            }
                            )(t).some(t=>a.some(e=>(0,
                            T.zC)(t, e))) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,
                            k.jH)(t)}`),
                            0) : !function(t, e) {
                                if (!e || !e.length)
                                    return !1;
                                var n = w(t);
                                return !!n && e.some(t=>(0,
                                T.zC)(n, t))
                            }(t, i.denyUrls) ? function(t, e) {
                                if (!e || !e.length)
                                    return !0;
                                var n = w(t);
                                return !n || e.some(t=>(0,
                                T.zC)(n, t))
                            }(t, i.allowUrls) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,
                            k.jH)(t)}.
Url: ${w(t)}`),
                            0) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,
                            k.jH)(t)}.
Url: ${w(t)}`),
                            0)) ? t : null
                        }
                    }
                    return t
                }
                ;
                n.id = this.name,
                t(n)
            }
        }
        function w(t) {
            try {
                let e;
                try {
                    e = t.exception.values[0].stacktrace.frames
                } catch (t) {}
                return e ? function(t=[]) {
                    for (let n = t.length - 1; n >= 0; n--) {
                        var e = t[n];
                        if (e && "<anonymous>" !== e.filename && "[native code]" !== e.filename)
                            return e.filename || null
                    }
                    return null
                }(e) : null
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error(`Cannot extract url for event ${(0,
                k.jH)(t)}`),
                null
            }
        }
        x.__initStatic();
        class U {
            constructor() {
                U.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "FunctionToString"
            }
            __init() {
                this.name = U.id
            }
            setupOnce() {
                r = Function.prototype.toString,
                Function.prototype.toString = function(...t) {
                    var e = (0,
                    y.HK)(this) || this;
                    return r.apply(e, t)
                }
            }
        }
        U.__initStatic();
        var G = n(51684)
          , B = n(8585)
          , Y = [];
        function $(t) {
            return t.reduce((t,e)=>(t.every(t=>e.name !== t.name) && t.push(e),
            t), [])
        }
        var O = n(69038)
          , I = n(49798)
          , C = n(90714)
          , j = n(92430);
        class L extends Error {
            constructor(t) {
                super(t),
                this.message = t,
                this.name = new.target.prototype.constructor.name,
                Object.setPrototypeOf(this, new.target.prototype)
            }
        }
        var P = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function A(t, e=!1) {
            let {host: n, path: r, pass: i, port: a, projectId: s, protocol: o, publicKey: c} = t;
            return `${o}://${c}${e && i ? `:${i}` : ""}@${n}${a ? `:${a}` : ""}/${r ? `${r}/` : r}${s}`
        }
        function M(t) {
            return {
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            }
        }
        var H = n(81757)
          , q = n(97946);
        function W(t, e=[]) {
            return [t, e]
        }
        function z(t, e) {
            t[1].forEach(t=>{
                var n = t[0].type;
                e(t, n)
            }
            )
        }
        function F(t, e) {
            return (e || new TextEncoder).encode(t)
        }
        function J(t, e) {
            let[n,r] = t
              , i = JSON.stringify(n);
            function a(t) {
                "string" == typeof i ? i = "string" == typeof t ? i + t : [F(i, e), t] : i.push("string" == typeof t ? F(t, e) : t)
            }
            for (var s of r) {
                let[t,e] = s;
                a(`
${JSON.stringify(t)}
`),
                a("string" == typeof e || e instanceof Uint8Array ? e : JSON.stringify(e))
            }
            return "string" == typeof i ? i : function(t) {
                var e = t.reduce((t,e)=>t + e.length, 0)
                  , n = new Uint8Array(e);
                let r = 0;
                for (var i of t)
                    n.set(i, r),
                    r += i.length;
                return n
            }(i)
        }
        var X = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default"
        }
          , K = n(7790);
        function V(t, e=Infinity, r=Infinity) {
            try {
                return function t(e, r, i=Infinity, a=Infinity, s=(h = (l = "function" == typeof WeakSet) ? new WeakSet : [],
                [function(t) {
                    if (l)
                        return !!h.has(t) || (h.add(t),
                        !1);
                    for (let e = 0; e < h.length; e++)
                        if (h[e] === t)
                            return !0;
                    return h.push(t),
                    !1
                }
                , function(t) {
                    if (l)
                        h.delete(t);
                    else
                        for (let e = 0; e < h.length; e++)
                            if (h[e] === t) {
                                h.splice(e, 1);
                                break
                            }
                }
                ])) {
                    let[o,c] = s;
                    if (null === r || ["number", "boolean", "string"].includes(typeof r) && !(0,
                    H.i2)(r))
                        return r;
                    var u = function(t, e) {
                        try {
                            if ("domain" === t && e && "object" == typeof e && e._events)
                                return "[Domain]";
                            if ("domainEmitter" === t)
                                return "[DomainEmitter]";
                            if (void 0 !== n.g && e === n.g)
                                return "[Global]";
                            if ("undefined" != typeof window && e === window)
                                return "[Window]";
                            if ("undefined" != typeof document && e === document)
                                return "[Document]";
                            if ((0,
                            H.Cy)(e))
                                return "[SyntheticEvent]";
                            if ("number" == typeof e && e != e)
                                return "[NaN]";
                            if (void 0 === e)
                                return "[undefined]";
                            if ("function" == typeof e)
                                return `[Function: ${(0,
                                O.$P)(e)}]`;
                            if ("symbol" == typeof e)
                                return `[${String(e)}]`;
                            if ("bigint" == typeof e)
                                return `[BigInt: ${String(e)}]`;
                            return `[object ${Object.getPrototypeOf(e).constructor.name}]`
                        } catch (t) {
                            return `**non-serializable** (${t})`
                        }
                    }(e, r);
                    if (!u.startsWith("[object "))
                        return u;
                    if (r.__sentry_skip_normalization__)
                        return r;
                    if (0 === i)
                        return u.replace("object ", "");
                    if (o(r))
                        return "[Circular ~]";
                    if (r && "function" == typeof r.toJSON)
                        try {
                            var _ = r.toJSON();
                            return t("", _, i - 1, a, s)
                        } catch (t) {}
                    var d = Array.isArray(r) ? [] : {};
                    let p = 0;
                    var f = (0,
                    y.Sh)(r);
                    for (var g in f)
                        if (Object.prototype.hasOwnProperty.call(f, g)) {
                            if (p >= a) {
                                d[g] = "[MaxProperties ~]";
                                break
                            }
                            var m = f[g];
                            d[g] = t(g, m, i - 1, a, s),
                            p += 1
                        }
                    return c(r),
                    d
                }("", t, e, r)
            } catch (t) {
                return {
                    ERROR: `**non-serializable** (${t})`
                }
            }
        }
        function Z(t, e={}) {
            var n = "string" == typeof e ? e : e.tunnel
              , r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
            return n || `${t.protocol ? `${t.protocol}:` : ""}//${t.host}${t.port ? `:${t.port}` : ""}${t.path ? `/${t.path}` : ""}/api/${t.projectId}/envelope/?${(0,
            y._j)({
                sentry_key: t.publicKey,
                sentry_version: "7",
                ...r && {
                    sentry_client: `${r.name}/${r.version}`
                }
            })}`
        }
        var Q = n(46990);
        function tt(t) {
            if (!t || !t.sdk)
                return;
            let {name: e, version: n} = t.sdk;
            return {
                name: e,
                version: n
            }
        }
        var te = "Not capturing exception because it's already been captured.";
        class tn {
            __init() {
                this._integrations = {}
            }
            __init2() {
                this._integrationsInitialized = !1
            }
            __init3() {
                this._numProcessing = 0
            }
            __init4() {
                this._outcomes = {}
            }
            constructor(t) {
                if (tn.prototype.__init.call(this),
                tn.prototype.__init2.call(this),
                tn.prototype.__init3.call(this),
                tn.prototype.__init4.call(this),
                this._options = t,
                t.dsn) {
                    this._dsn = (!function(t) {
                        if (!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__))
                            return;
                        let {port: e, projectId: n, protocol: r} = t;
                        if (["protocol", "publicKey", "host", "projectId"].forEach(e=>{
                            if (!t[e])
                                throw new L(`Invalid Sentry Dsn: ${e} missing`)
                        }
                        ),
                        !n.match(/^\d+$/))
                            throw new L(`Invalid Sentry Dsn: Invalid projectId ${n}`);
                        if (!("http" === r || "https" === r))
                            throw new L(`Invalid Sentry Dsn: Invalid protocol ${r}`);
                        if (e && isNaN(parseInt(e, 10)))
                            throw new L(`Invalid Sentry Dsn: Invalid port ${e}`)
                    }(n = "string" == typeof (e = t.dsn) ? function(t) {
                        var e = P.exec(t);
                        if (!e)
                            throw new L(`Invalid Sentry Dsn: ${t}`);
                        let[n,r,i="",a,s="",o] = e.slice(1)
                          , c = ""
                          , u = o;
                        var _ = u.split("/");
                        if (_.length > 1 && (c = _.slice(0, -1).join("/"),
                        u = _.pop()),
                        u) {
                            var d = u.match(/^\d+/);
                            d && (u = d[0])
                        }
                        return M({
                            host: a,
                            pass: i,
                            path: c,
                            projectId: u,
                            port: s,
                            protocol: n,
                            publicKey: r
                        })
                    }(e) : M(e)),
                    n);
                    var e, n, r = Z(this._dsn, t);
                    this._transport = t.transport({
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...t.transportOptions,
                        url: r
                    })
                } else
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("No DSN provided, client will not do anything.")
            }
            captureException(t, e, n) {
                if ((0,
                k.YO)(t)) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(te);
                    return
                }
                let r = e && e.event_id;
                return this._process(this.eventFromException(t, e).then(t=>this._captureEvent(t, e, n)).then(t=>{
                    r = t
                }
                )),
                r
            }
            captureMessage(t, e, n, r) {
                let i = n && n.event_id;
                var a = (0,
                H.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
                return this._process(a.then(t=>this._captureEvent(t, n, r)).then(t=>{
                    i = t
                }
                )),
                i
            }
            captureEvent(t, e, n) {
                if (e && e.originalException && (0,
                k.YO)(e.originalException)) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(te);
                    return
                }
                let r = e && e.event_id;
                return this._process(this._captureEvent(t, e, n).then(t=>{
                    r = t
                }
                )),
                r
            }
            captureSession(t) {
                if (!this._isEnabled()) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("SDK not enabled, will not capture session.");
                    return
                }
                "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t),
                (0,
                j.CT)(t, {
                    init: !1
                }))
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getTransport() {
                return this._transport
            }
            flush(t) {
                var e = this._transport;
                return e ? this._isClientDoneProcessing(t).then(n=>e.flush(t).then(t=>n && t)) : (0,
                q.WD)(!0)
            }
            close(t) {
                return this.flush(t).then(t=>(this.getOptions().enabled = !1,
                t))
            }
            setupIntegrations() {
                if (this._isEnabled() && !this._integrationsInitialized) {
                    var t, e;
                    this._integrations = (t = this._options.integrations,
                    e = {},
                    t.forEach(t=>{
                        e[t.name] = t,
                        -1 === Y.indexOf(t.name) && (t.setupOnce(G.c, B.Gd),
                        Y.push(t.name),
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`Integration installed: ${t.name}`))
                    }
                    ),
                    e),
                    this._integrationsInitialized = !0
                }
            }
            getIntegrationById(t) {
                return this._integrations[t]
            }
            getIntegration(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`),
                    null
                }
            }
            sendEvent(t, e={}) {
                if (this._dsn) {
                    let r = function(t, e, n, r) {
                        var i, a, s, o = tt(n), c = t.type || "event";
                        let {transactionSampling: u} = t.sdkProcessingMetadata || {}
                          , {method: _, rate: d} = u || {};
                        (s = n && n.sdk) && (t.sdk = t.sdk || {},
                        t.sdk.name = t.sdk.name || s.name,
                        t.sdk.version = t.sdk.version || s.version,
                        t.sdk.integrations = [...t.sdk.integrations || [], ...s.integrations || []],
                        t.sdk.packages = [...t.sdk.packages || [], ...s.packages || []]);
                        var p = (a = (i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.baggage) && (0,
                        Q.Hk)(i),
                        {
                            event_id: t.event_id,
                            sent_at: new Date().toISOString(),
                            ...o && {
                                sdk: o
                            },
                            ...!!r && {
                                dsn: A(e)
                            },
                            ..."transaction" === t.type && a && {
                                trace: (0,
                                y.Jr)({
                                    ...a
                                })
                            }
                        });
                        return delete t.sdkProcessingMetadata,
                        W(p, [[{
                            type: c,
                            sample_rates: [{
                                id: _,
                                rate: d
                            }]
                        }, t]])
                    }(t, this._dsn, this._options._metadata, this._options.tunnel);
                    for (var n of e.attachments || [])
                        r = function(t, e) {
                            let[n,r] = t;
                            return [n, [...r, e]]
                        }(r, function(t, e) {
                            var n = "string" == typeof t.data ? F(t.data, e) : t.data;
                            return [(0,
                            y.Jr)({
                                type: "attachment",
                                length: n.length,
                                filename: t.filename,
                                content_type: t.contentType,
                                attachment_type: t.attachmentType
                            }), n]
                        }(n, this._options.transportOptions && this._options.transportOptions.textEncoder));
                    this._sendEnvelope(r)
                }
            }
            sendSession(t) {
                if (this._dsn) {
                    var e, n, r, i, a = (e = this._dsn,
                    n = this._options._metadata,
                    r = this._options.tunnel,
                    i = tt(n),
                    W({
                        sent_at: new Date().toISOString(),
                        ...i && {
                            sdk: i
                        },
                        ...!!r && {
                            dsn: A(e)
                        }
                    }, ["aggregates"in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t]]));
                    this._sendEnvelope(a)
                }
            }
            recordDroppedEvent(t, e) {
                if (this._options.sendClientReports) {
                    var n = `${t}:${e}`;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`Adding outcome: "${n}"`),
                    this._outcomes[n] = this._outcomes[n] + 1 || 1
                }
            }
            _updateSessionFromEvent(t, e) {
                let n = !1
                  , r = !1;
                var i = e.exception && e.exception.values;
                if (i)
                    for (var a of (r = !0,
                    i)) {
                        var s = a.mechanism;
                        if (s && !1 === s.handled) {
                            n = !0;
                            break
                        }
                    }
                var o = "ok" === t.status;
                (o && 0 === t.errors || o && n) && ((0,
                j.CT)(t, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: t.errors || Number(r || n)
                }),
                this.captureSession(t))
            }
            _isClientDoneProcessing(t) {
                return new q.cW(e=>{
                    let n = 0;
                    var r = setInterval(()=>{
                        0 == this._numProcessing ? (clearInterval(r),
                        e(!0)) : (n += 1,
                        t && n >= t && (clearInterval(r),
                        e(!1)))
                    }
                    , 1)
                }
                )
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }
            _prepareEvent(t, e, n) {
                let {normalizeDepth: r=3, normalizeMaxBreadth: i=1e3} = this.getOptions();
                var a = {
                    ...t,
                    event_id: t.event_id || e.event_id || (0,
                    k.DM)(),
                    timestamp: t.timestamp || (0,
                    K.yW)()
                };
                this._applyClientOptions(a),
                this._applyIntegrationsMetadata(a);
                let s = n;
                e.captureContext && (s = G.s.clone(s).update(e.captureContext));
                let o = (0,
                q.WD)(a);
                if (s) {
                    var c = [...e.attachments || [], ...s.getAttachments()];
                    c.length && (e.attachments = c),
                    o = s.applyToEvent(a, e)
                }
                return o.then(t=>"number" == typeof r && r > 0 ? this._normalizeEvent(t, r, i) : t)
            }
            _normalizeEvent(t, e, n) {
                if (!t)
                    return null;
                var r = {
                    ...t,
                    ...t.breadcrumbs && {
                        breadcrumbs: t.breadcrumbs.map(t=>({
                            ...t,
                            ...t.data && {
                                data: V(t.data, e, n)
                            }
                        }))
                    },
                    ...t.user && {
                        user: V(t.user, e, n)
                    },
                    ...t.contexts && {
                        contexts: V(t.contexts, e, n)
                    },
                    ...t.extra && {
                        extra: V(t.extra, e, n)
                    }
                };
                return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace,
                t.contexts.trace.data && (r.contexts.trace.data = V(t.contexts.trace.data, e, n))),
                t.spans && (r.spans = t.spans.map(t=>(t.data && (t.data = V(t.data, e, n)),
                t))),
                r
            }
            _applyClientOptions(t) {
                var e = this.getOptions();
                let {environment: n, release: r, dist: i, maxValueLength: a=250} = e;
                "environment"in t || (t.environment = "environment"in e ? n : "production"),
                void 0 === t.release && void 0 !== r && (t.release = r),
                void 0 === t.dist && void 0 !== i && (t.dist = i),
                t.message && (t.message = (0,
                T.$G)(t.message, a));
                var s = t.exception && t.exception.values && t.exception.values[0];
                s && s.value && (s.value = (0,
                T.$G)(s.value, a));
                var o = t.request;
                o && o.url && (o.url = (0,
                T.$G)(o.url, a))
            }
            _applyIntegrationsMetadata(t) {
                var e = Object.keys(this._integrations);
                e.length > 0 && (t.sdk = t.sdk || {},
                t.sdk.integrations = [...t.sdk.integrations || [], ...e])
            }
            _captureEvent(t, e={}, n) {
                return this._processEvent(t, e, n).then(t=>t.event_id, t=>{
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(t)
                }
                )
            }
            _processEvent(t, e, n) {
                let {beforeSend: r, sampleRate: i} = this.getOptions();
                if (!this._isEnabled())
                    return (0,
                    q.$2)(new L("SDK not enabled, will not capture event."));
                var a = "transaction" === t.type;
                return !a && "number" == typeof i && Math.random() > i ? (this.recordDroppedEvent("sample_rate", "error"),
                (0,
                q.$2)(new L(`Discarding event because it's not included in the random sample (sampling rate = ${i})`))) : this._prepareEvent(t, e, n).then(n=>{
                    if (null === n)
                        throw this.recordDroppedEvent("event_processor", t.type || "error"),
                        new L("An event processor returned null, will not send event.");
                    return e.data && !0 === e.data.__sentry__ || a || !r ? n : function(t) {
                        var e = "`beforeSend` method has to return `null` or a valid event.";
                        if ((0,
                        H.J8)(t))
                            return t.then(t=>{
                                if (!((0,
                                H.PO)(t) || null === t))
                                    throw new L(e);
                                return t
                            }
                            , t=>{
                                throw new L(`beforeSend rejected with ${t}`)
                            }
                            );
                        if (!((0,
                        H.PO)(t) || null === t))
                            throw new L(e);
                        return t
                    }(r(n, e))
                }
                ).then(r=>{
                    if (null === r)
                        throw this.recordDroppedEvent("before_send", t.type || "error"),
                        new L("`beforeSend` returned `null`, will not send event.");
                    var i = n && n.getSession();
                    return !a && i && this._updateSessionFromEvent(i, r),
                    this.sendEvent(r, e),
                    r
                }
                ).then(null, t=>{
                    if (t instanceof L)
                        throw t;
                    throw this.captureException(t, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: t
                    }),
                    new L(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`)
                }
                )
            }
            _process(t) {
                this._numProcessing += 1,
                t.then(t=>(this._numProcessing -= 1,
                t), t=>(this._numProcessing -= 1,
                t))
            }
            _sendEnvelope(t) {
                this._transport && this._dsn ? this._transport.send(t).then(null, t=>{
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error("Error while sending event:", t)
                }
                ) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error("Transport disabled")
            }
            _clearOutcomes() {
                var t = this._outcomes;
                return this._outcomes = {},
                Object.keys(t).map(e=>{
                    let[n,r] = e.split(":");
                    return {
                        reason: n,
                        category: r,
                        quantity: t[e]
                    }
                }
                )
            }
        }
        function tr(t, e) {
            var n, r = ta(t, e), i = {
                type: e && e.name,
                value: (n = e && e.message) ? n.error && "string" == typeof n.error.message ? n.error.message : n : "No error message"
            };
            return r.length && (i.stacktrace = {
                frames: r
            }),
            void 0 === i.type && "" === i.value && (i.value = "Unrecoverable error caught"),
            i
        }
        function ti(t, e) {
            return {
                exception: {
                    values: [tr(t, e)]
                }
            }
        }
        function ta(t, e) {
            var n = e.stacktrace || e.stack || ""
              , r = function(t) {
                if (t) {
                    if ("number" == typeof t.framesToPop)
                        return t.framesToPop;
                    if (ts.test(t.message))
                        return 1
                }
                return 0
            }(e);
            try {
                return t(n, r)
            } catch (t) {}
            return []
        }
        var ts = /Minified React error #\d+;/i;
        function to(t, e, n, r, i) {
            let a;
            if ((0,
            H.VW)(e) && e.error)
                return ti(t, e.error);
            if ((0,
            H.TX)(e) || (0,
            H.fm)(e)) {
                if ("stack"in e)
                    a = ti(t, e);
                else {
                    var s = e.name || ((0,
                    H.TX)(e) ? "DOMError" : "DOMException")
                      , o = e.message ? `${s}: ${e.message}` : s;
                    a = tc(t, o, n, r),
                    (0,
                    k.Db)(a, o)
                }
                return "code"in e && (a.tags = {
                    ...a.tags,
                    "DOMException.code": `${e.code}`
                }),
                a
            }
            return (0,
            H.VZ)(e) ? ti(t, e) : ((0,
            H.PO)(e) || (0,
            H.cO)(e) ? a = function(t, e, n, r) {
                var i = {
                    exception: {
                        values: [{
                            type: (0,
                            H.cO)(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                            value: `Non-Error ${r ? "promise rejection" : "exception"} captured with keys: ${(0,
                            y.zf)(e)}`
                        }]
                    },
                    extra: {
                        __serialized__: function t(e, n=3, r=102400) {
                            var i = V(e, n);
                            return ~-encodeURI(JSON.stringify(i)).split(/%..|./).length > r ? t(e, n - 1, r) : i
                        }(e)
                    }
                };
                if (n) {
                    var a = ta(t, n);
                    a.length && (i.exception.values[0].stacktrace = {
                        frames: a
                    })
                }
                return i
            }(t, e, n, i) : (a = tc(t, e, n, r),
            (0,
            k.Db)(a, `${e}`, void 0)),
            (0,
            k.EG)(a, {
                synthetic: !0
            }),
            a)
        }
        function tc(t, e, n, r) {
            var i = {
                message: e
            };
            if (r && n) {
                var a = ta(t, n);
                a.length && (i.exception = {
                    values: [{
                        value: e,
                        stacktrace: {
                            frames: a
                        }
                    }]
                })
            }
            return i
        }
        var tu = n(54194)
          , t_ = "Breadcrumbs";
        class td {
            static __initStatic() {
                this.id = t_
            }
            __init() {
                this.name = td.id
            }
            constructor(t) {
                td.prototype.__init.call(this),
                this.options = {
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0,
                    ...t
                }
            }
            setupOnce() {
                var t;
                this.options.console && (0,
                C.o)("console", tp),
                this.options.dom && (0,
                C.o)("dom", (t = this.options.dom,
                function(e) {
                    let n;
                    let r = "object" == typeof t ? t.serializeAttribute : void 0;
                    "string" == typeof r && (r = [r]);
                    try {
                        n = e.event.target ? (0,
                        tu.R)(e.event.target, r) : (0,
                        tu.R)(e.event, r)
                    } catch (t) {
                        n = "<unknown>"
                    }
                    0 !== n.length && (0,
                    B.Gd)().addBreadcrumb({
                        category: `ui.${e.name}`,
                        message: n
                    }, {
                        event: e.event,
                        name: e.name,
                        global: e.global
                    })
                }
                )),
                this.options.xhr && (0,
                C.o)("xhr", tl),
                this.options.fetch && (0,
                C.o)("fetch", th),
                this.options.history && (0,
                C.o)("history", tf)
            }
        }
        function tp(t) {
            var e = {
                category: "console",
                data: {
                    arguments: t.args,
                    logger: "console"
                },
                level: S(t.level),
                message: (0,
                T.nK)(t.args, " ")
            };
            if ("assert" === t.level) {
                if (!1 !== t.args[0])
                    return;
                e.message = `Assertion failed: ${(0,
                T.nK)(t.args.slice(1), " ") || "console.assert"}`,
                e.data.arguments = t.args.slice(1)
            }
            (0,
            B.Gd)().addBreadcrumb(e, {
                input: t.args,
                level: t.level
            })
        }
        function tl(t) {
            if (t.endTimestamp) {
                if (t.xhr.__sentry_own_request__)
                    return;
                let {method: e, url: n, status_code: r, body: i} = t.xhr.__sentry_xhr__ || {};
                (0,
                B.Gd)().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: e,
                        url: n,
                        status_code: r
                    },
                    type: "http"
                }, {
                    xhr: t.xhr,
                    input: i
                });
                return
            }
        }
        function th(t) {
            !t.endTimestamp || t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? (0,
            B.Gd)().addBreadcrumb({
                category: "fetch",
                data: t.fetchData,
                level: "error",
                type: "http"
            }, {
                data: t.error,
                input: t.args
            }) : (0,
            B.Gd)().addBreadcrumb({
                category: "fetch",
                data: {
                    ...t.fetchData,
                    status_code: t.response.status
                },
                type: "http"
            }, {
                input: t.args,
                response: t.response
            }))
        }
        function tf(t) {
            var e = (0,
            m.R)();
            let n = t.from
              , r = t.to;
            var i = (0,
            k.en)(e.location.href);
            let a = (0,
            k.en)(n);
            var s = (0,
            k.en)(r);
            a.path || (a = i),
            i.protocol === s.protocol && i.host === s.host && (r = s.relative),
            i.protocol === a.protocol && i.host === a.host && (n = a.relative),
            (0,
            B.Gd)().addBreadcrumb({
                category: "navigation",
                data: {
                    from: n,
                    to: r
                }
            })
        }
        td.__initStatic();
        var tg = (0,
        m.R)();
        function tm() {
            if (i)
                return i;
            if ((0,
            I.Du)(tg.fetch))
                return i = tg.fetch.bind(tg);
            var t = tg.document;
            let e = tg.fetch;
            if (t && "function" == typeof t.createElement)
                try {
                    var n = t.createElement("iframe");
                    n.hidden = !0,
                    t.head.appendChild(n);
                    var r = n.contentWindow;
                    r && r.fetch && (e = r.fetch),
                    t.head.removeChild(n)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
            return i = e.bind(tg)
        }
        var tv = (0,
        m.R)();
        class ty extends tn {
            constructor(t) {
                t._metadata = t._metadata || {},
                t._metadata.sdk = t._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: "npm:@sentry/browser",
                        version: D
                    }],
                    version: D
                },
                super(t),
                t.sendClientReports && tv.document && tv.document.addEventListener("visibilitychange", ()=>{
                    "hidden" === tv.document.visibilityState && this._flushOutcomes()
                }
                )
            }
            eventFromException(t, e) {
                var n, r, i;
                return n = this._options.stackParser,
                r = this._options.attachStacktrace,
                i = to(n, t, e && e.syntheticException || void 0, r),
                (0,
                k.EG)(i),
                i.level = "error",
                e && e.event_id && (i.event_id = e.event_id),
                (0,
                q.WD)(i)
            }
            eventFromMessage(t, e="info", n) {
                return function(t, e, n="info", r, i) {
                    var a = tc(t, e, r && r.syntheticException || void 0, i);
                    return a.level = n,
                    r && r.event_id && (a.event_id = r.event_id),
                    (0,
                    q.WD)(a)
                }(this._options.stackParser, t, e, n, this._options.attachStacktrace)
            }
            sendEvent(t, e) {
                var n = this.getIntegrationById(t_);
                n && n.options && n.options.sentry && (0,
                B.Gd)().addBreadcrumb({
                    category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                    event_id: t.event_id,
                    level: t.level,
                    message: (0,
                    k.jH)(t)
                }, {
                    event: t
                }),
                super.sendEvent(t, e)
            }
            _prepareEvent(t, e, n) {
                return t.platform = t.platform || "javascript",
                super._prepareEvent(t, e, n)
            }
            _flushOutcomes() {
                var t, e, n = this._clearOutcomes();
                if (0 === n.length) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("No outcomes to send");
                    return
                }
                if (!this._dsn) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("No dsn provided, will not send outcomes");
                    return
                }
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("Sending outcomes:", n);
                var r = Z(this._dsn, this._options)
                  , i = W((t = this._options.tunnel && A(this._dsn)) ? {
                    dsn: t
                } : {}, [[{
                    type: "client_report"
                }, {
                    timestamp: (0,
                    K.yW)(),
                    discarded_events: n
                }]]);
                try {
                    e = J(i),
                    "[object Navigator]" === Object.prototype.toString.call(tg && tg.navigator) && "function" == typeof tg.navigator.sendBeacon ? tg.navigator.sendBeacon.bind(tg.navigator)(r, e) : (0,
                    I.Ak)() && tm()(r, {
                        body: e,
                        method: "POST",
                        credentials: "omit",
                        keepalive: !0
                    }).then(null, t=>{
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error(t)
                    }
                    )
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error(t)
                }
            }
        }
        function tE(t, e, n, r) {
            var i = {
                filename: t,
                function: e,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n),
            void 0 !== r && (i.colno = r),
            i
        }
        var tS = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , tT = /\((\S*)(?::(\d+))(?::(\d+))\)/
          , tb = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
          , tR = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , tD = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
          , tk = [[30, t=>{
            var e = tS.exec(t);
            if (e) {
                if (e[2] && 0 === e[2].indexOf("eval")) {
                    var n = tT.exec(e[2]);
                    n && (e[2] = n[1],
                    e[3] = n[2],
                    e[4] = n[3])
                }
                let[t,r] = tx(e[1] || "?", e[2]);
                return tE(r, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
            }
        }
        ], [50, t=>{
            var e = tb.exec(t);
            if (e) {
                if (e[3] && e[3].indexOf(" > eval") > -1) {
                    var n = tR.exec(e[3]);
                    n && (e[1] = e[1] || "eval",
                    e[3] = n[1],
                    e[4] = n[2],
                    e[5] = "")
                }
                let t = e[3]
                  , r = e[1] || "?";
                return [r,t] = tx(r, t),
                tE(t, r, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
            }
        }
        ], [40, t=>{
            var e = tD.exec(t);
            return e ? tE(e[2], e[1] || "?", +e[3], e[4] ? +e[4] : void 0) : void 0
        }
        ]]
          , tN = (0,
        O.pE)(...tk)
          , tx = (t,e)=>{
            var n = -1 !== t.indexOf("safari-extension")
              , r = -1 !== t.indexOf("safari-web-extension");
            return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : "?", n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
        }
          , tw = n(12483);
        let tU = 0;
        function tG(t, e={}, n) {
            if ("function" != typeof t)
                return t;
            try {
                var r = t.__sentry_wrapped__;
                if (r)
                    return r;
                if ((0,
                y.HK)(t))
                    return t
            } catch (e) {
                return t
            }
            var i = function() {
                var r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    var i = r.map(t=>tG(t, e));
                    return t.apply(this, i)
                } catch (t) {
                    throw tU += 1,
                    setTimeout(()=>{
                        tU -= 1
                    }
                    ),
                    (0,
                    tw.$e)(n=>{
                        n.addEventProcessor(t=>(e.mechanism && ((0,
                        k.Db)(t, void 0, void 0),
                        (0,
                        k.EG)(t, e.mechanism)),
                        t.extra = {
                            ...t.extra,
                            arguments: r
                        },
                        t)),
                        (0,
                        tw.Tb)(t)
                    }
                    ),
                    t
                }
            };
            try {
                for (var a in t)
                    Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a])
            } catch (t) {}
            (0,
            y.$Q)(i, t),
            (0,
            y.xp)(t, "__sentry_wrapped__", i);
            try {
                Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
                    get: ()=>t.name
                })
            } catch (t) {}
            return i
        }
        var tB = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
        class tY {
            static __initStatic() {
                this.id = "TryCatch"
            }
            __init() {
                this.name = tY.id
            }
            constructor(t) {
                tY.prototype.__init.call(this),
                this._options = {
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0,
                    ...t
                }
            }
            setupOnce() {
                var t = (0,
                m.R)();
                this._options.setTimeout && (0,
                y.hl)(t, "setTimeout", t$),
                this._options.setInterval && (0,
                y.hl)(t, "setInterval", t$),
                this._options.requestAnimationFrame && (0,
                y.hl)(t, "requestAnimationFrame", tO),
                this._options.XMLHttpRequest && "XMLHttpRequest"in t && (0,
                y.hl)(XMLHttpRequest.prototype, "send", tI);
                var e = this._options.eventTarget;
                e && (Array.isArray(e) ? e : tB).forEach(tC)
            }
        }
        function t$(t) {
            return function(...e) {
                var n = e[0];
                return e[0] = tG(n, {
                    mechanism: {
                        data: {
                            function: (0,
                            O.$P)(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                t.apply(this, e)
            }
        }
        function tO(t) {
            return function(e) {
                return t.apply(this, [tG(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0,
                            O.$P)(t)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                })])
            }
        }
        function tI(t) {
            return function(...e) {
                var n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(t=>{
                    t in n && "function" == typeof n[t] && (0,
                    y.hl)(n, t, function(e) {
                        var n = {
                            mechanism: {
                                data: {
                                    function: t,
                                    handler: (0,
                                    O.$P)(e)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }
                          , r = (0,
                        y.HK)(e);
                        return r && (n.mechanism.data.handler = (0,
                        O.$P)(r)),
                        tG(e, n)
                    })
                }
                ),
                t.apply(this, e)
            }
        }
        function tC(t) {
            var e = (0,
            m.R)()
              , n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
            y.hl)(n, "addEventListener", function(e) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = tG(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0,
                                    O.$P)(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (t) {}
                    return e.apply(this, [n, tG(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0,
                                O.$P)(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), i])
                }
            }),
            (0,
            y.hl)(n, "removeEventListener", function(t) {
                return function(e, n, r) {
                    try {
                        var i = n && n.__sentry_wrapped__;
                        i && t.call(this, e, i, r)
                    } catch (t) {}
                    return t.call(this, e, n, r)
                }
            }))
        }
        tY.__initStatic();
        class tj {
            static __initStatic() {
                this.id = "GlobalHandlers"
            }
            __init() {
                this.name = tj.id
            }
            __init2() {
                this._installFunc = {
                    onerror: tL,
                    onunhandledrejection: tP
                }
            }
            constructor(t) {
                tj.prototype.__init.call(this),
                tj.prototype.__init2.call(this),
                this._options = {
                    onerror: !0,
                    onunhandledrejection: !0,
                    ...t
                }
            }
            setupOnce() {
                Error.stackTraceLimit = 50;
                var t = this._options;
                for (var e in t) {
                    var n = this._installFunc[e];
                    n && t[e] && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`Global Handler attached: ${e}`),
                    n(),
                    this._installFunc[e] = void 0)
                }
            }
        }
        function tL() {
            (0,
            C.o)("error", t=>{
                let[e,n,r] = tH();
                if (!e.getIntegration(tj))
                    return;
                let {msg: i, url: a, line: s, column: o, error: c} = t;
                if (!(tU > 0) && (!c || !c.__sentry_own_request__)) {
                    let t, d;
                    var u, _ = void 0 === c && (0,
                    H.HD)(i) ? (t = (0,
                    H.VW)(i) ? i.message : i,
                    d = "Error",
                    (u = t.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)) && (d = u[1],
                    t = u[2]),
                    tA({
                        exception: {
                            values: [{
                                type: d,
                                value: t
                            }]
                        }
                    }, a, s, o)) : tA(to(n, c || i, void 0, r, !1), a, s, o);
                    _.level = "error",
                    tM(e, c, _, "onerror")
                }
            }
            )
        }
        function tP() {
            (0,
            C.o)("unhandledrejection", t=>{
                let[e,n,r] = tH();
                if (!e.getIntegration(tj))
                    return;
                let i = t;
                try {
                    "reason"in t ? i = t.reason : "detail"in t && "reason"in t.detail && (i = t.detail.reason)
                } catch (t) {}
                if (tU > 0 || i && i.__sentry_own_request__)
                    return !0;
                var a = (0,
                H.pt)(i) ? {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: `Non-Error promise rejection captured with value: ${String(i)}`
                        }]
                    }
                } : to(n, i, void 0, r, !0);
                a.level = "error",
                tM(e, i, a, "onunhandledrejection")
            }
            )
        }
        function tA(t, e, n, r) {
            var i = t.exception = t.exception || {}
              , a = i.values = i.values || []
              , s = a[0] = a[0] || {}
              , o = s.stacktrace = s.stacktrace || {}
              , c = o.frames = o.frames || []
              , u = isNaN(parseInt(r, 10)) ? void 0 : r
              , _ = isNaN(parseInt(n, 10)) ? void 0 : n
              , d = (0,
            H.HD)(e) && e.length > 0 ? e : (0,
            tu.l)();
            return 0 === c.length && c.push({
                colno: u,
                filename: d,
                function: "?",
                in_app: !0,
                lineno: _
            }),
            t
        }
        function tM(t, e, n, r) {
            (0,
            k.EG)(n, {
                handled: !1,
                type: r
            }),
            t.captureEvent(n, {
                originalException: e
            })
        }
        function tH() {
            var t = (0,
            B.Gd)()
              , e = t.getClient()
              , n = e && e.getOptions() || {
                stackParser: ()=>[],
                attachStacktrace: !1
            };
            return [t, n.stackParser, n.attachStacktrace]
        }
        tj.__initStatic();
        class tq {
            static __initStatic() {
                this.id = "LinkedErrors"
            }
            __init() {
                this.name = tq.id
            }
            constructor(t={}) {
                tq.prototype.__init.call(this),
                this._key = t.key || "cause",
                this._limit = t.limit || 5
            }
            setupOnce() {
                var t = (0,
                B.Gd)().getClient();
                t && (0,
                G.c)((e,n)=>{
                    var r = (0,
                    B.Gd)().getIntegration(tq);
                    return r ? function(t, e, n, r, i) {
                        if (!r.exception || !r.exception.values || !i || !(0,
                        H.V9)(i.originalException, Error))
                            return r;
                        var a = function t(e, n, r, i, a=[]) {
                            if (!(0,
                            H.V9)(r[i], Error) || a.length + 1 >= n)
                                return a;
                            var s = tr(e, r[i]);
                            return t(e, n, r[i], i, [s, ...a])
                        }(t, n, i.originalException, e);
                        return r.exception.values = [...a, ...r.exception.values],
                        r
                    }(t.getOptions().stackParser, r._key, r._limit, e, n) : e
                }
                )
            }
        }
        tq.__initStatic();
        class tW {
            constructor() {
                tW.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "Dedupe"
            }
            __init() {
                this.name = tW.id
            }
            setupOnce(t, e) {
                var n = t=>{
                    var n, r, i, a, s, o = e().getIntegration(tW);
                    if (o) {
                        try {
                            if ((n = o._previousEvent) && (r = t.message,
                            i = n.message,
                            (r || i) && (!r || i) && (r || !i) && r === i && tF(t, n) && tz(t, n) || (a = tJ(n),
                            s = tJ(t),
                            a && s && a.type === s.type && a.value === s.value && tF(t, n) && tz(t, n))))
                                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("Event dropped due to being a duplicate of previously captured event."),
                                null
                        } catch (t) {}
                        return o._previousEvent = t
                    }
                    return t
                }
                ;
                n.id = this.name,
                t(n)
            }
        }
        function tz(t, e) {
            let n = tX(t)
              , r = tX(e);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r || r.length !== n.length)
                return !1;
            for (let t = 0; t < r.length; t++) {
                var i = r[t]
                  , a = n[t];
                if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function)
                    return !1
            }
            return !0
        }
        function tF(t, e) {
            let n = t.fingerprint
              , r = e.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (t) {
                return !1
            }
        }
        function tJ(t) {
            return t.exception && t.exception.values && t.exception.values[0]
        }
        function tX(t) {
            var e = t.exception;
            if (e)
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {}
        }
        tW.__initStatic();
        var tK = (0,
        m.R)();
        class tV {
            constructor() {
                tV.prototype.__init.call(this)
            }
            static __initStatic() {
                this.id = "HttpContext"
            }
            __init() {
                this.name = tV.id
            }
            setupOnce() {
                (0,
                G.c)(t=>{
                    if ((0,
                    B.Gd)().getIntegration(tV)) {
                        if (!tK.navigator && !tK.location && !tK.document)
                            return t;
                        var e = t.request && t.request.url || tK.location && tK.location.href;
                        let {referrer: i} = tK.document || {}
                          , {userAgent: a} = tK.navigator || {};
                        var n = {
                            ...t.request && t.request.headers,
                            ...i && {
                                Referer: i
                            },
                            ...a && {
                                "User-Agent": a
                            }
                        }
                          , r = {
                            ...e && {
                                url: e
                            },
                            headers: n
                        };
                        return {
                            ...t,
                            request: r
                        }
                    }
                    return t
                }
                )
            }
        }
        function tZ(t, e, n=function(t) {
            var e = [];
            function n(t) {
                return e.splice(e.indexOf(t), 1)[0]
            }
            return {
                $: e,
                add: function(r) {
                    if (!(void 0 === t || e.length < t))
                        return (0,
                        q.$2)(new L("Not adding Promise due to buffer limit reached."));
                    var i = r();
                    return -1 === e.indexOf(i) && e.push(i),
                    i.then(()=>n(i)).then(null, ()=>n(i).then(null, ()=>{}
                    )),
                    i
                },
                drain: function(t) {
                    return new q.cW((n,r)=>{
                        let i = e.length;
                        if (!i)
                            return n(!0);
                        var a = setTimeout(()=>{
                            t && t > 0 && n(!1)
                        }
                        , t);
                        e.forEach(t=>{
                            (0,
                            q.WD)(t).then(()=>{
                                --i || (clearTimeout(a),
                                n(!0))
                            }
                            , r)
                        }
                        )
                    }
                    )
                }
            }
        }(t.bufferSize || 30)) {
            let r = {};
            return {
                send: function(i) {
                    var a = [];
                    if (z(i, (e,n)=>{
                        var i = X[n];
                        (function(t, e, n=Date.now()) {
                            return (t[e] || t.all || 0) > n
                        }
                        )(r, i) ? t.recordDroppedEvent("ratelimit_backoff", i) : a.push(e)
                    }
                    ),
                    0 === a.length)
                        return (0,
                        q.WD)();
                    var s = W(i[0], a)
                      , o = e=>{
                        z(s, (n,r)=>{
                            t.recordDroppedEvent(e, X[r])
                        }
                        )
                    }
                    ;
                    return n.add(()=>e({
                        body: J(s, t.textEncoder)
                    }).then(t=>{
                        void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),
                        r = function(t, {statusCode: e, headers: n}, r=Date.now()) {
                            var i = {
                                ...t
                            }
                              , a = n && n["x-sentry-rate-limits"]
                              , s = n && n["retry-after"];
                            if (a)
                                for (var o of a.trim().split(",")) {
                                    let[t,e] = o.split(":", 2);
                                    var c = parseInt(t, 10)
                                      , u = (isNaN(c) ? 60 : c) * 1e3;
                                    if (e)
                                        for (var _ of e.split(";"))
                                            i[_] = r + u;
                                    else
                                        i.all = r + u
                                }
                            else
                                s ? i.all = r + function(t, e=Date.now()) {
                                    var n = parseInt(`${t}`, 10);
                                    if (!isNaN(n))
                                        return 1e3 * n;
                                    var r = Date.parse(`${t}`);
                                    return isNaN(r) ? 6e4 : r - e
                                }(s, r) : 429 === e && (i.all = r + 6e4);
                            return i
                        }(r, t)
                    }
                    , t=>{
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error("Failed while sending event:", t),
                        o("network_error")
                    }
                    )).then(t=>t, t=>{
                        if (t instanceof L)
                            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.error("Skipped sending event due to full buffer"),
                            o("queue_overflow"),
                            (0,
                            q.WD)();
                        throw t
                    }
                    )
                },
                flush: t=>n.drain(t)
            }
        }
        function tQ(t, e=tm()) {
            return tZ(t, function(n) {
                var r = {
                    body: n.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: t.headers,
                    ...t.fetchOptions
                };
                return e(t.url, r).then(t=>({
                    statusCode: t.status,
                    headers: {
                        "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": t.headers.get("Retry-After")
                    }
                }))
            })
        }
        function t0(t) {
            return tZ(t, function(e) {
                return new q.cW((n,r)=>{
                    var i = new XMLHttpRequest;
                    for (var a in i.onerror = r,
                    i.onreadystatechange = ()=>{
                        4 === i.readyState && n({
                            statusCode: i.status,
                            headers: {
                                "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": i.getResponseHeader("Retry-After")
                            }
                        })
                    }
                    ,
                    i.open("POST", t.url),
                    t.headers)
                        Object.prototype.hasOwnProperty.call(t.headers, a) && i.setRequestHeader(a, t.headers[a]);
                    i.send(e.body)
                }
                )
            })
        }
        tV.__initStatic();
        var t1 = [new x, new U, new tY, new td, new tj, new tq, new tW, new tV];
        function t5(t) {
            t.startSession({
                ignoreDuration: !0
            }),
            t.captureSession()
        }
        var t9 = n(78900)
          , t3 = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
          , t4 = n(40564)
          , t2 = n(92517)
          , t8 = (0,
        m.R)()
          , t6 = n(12885)
          , t7 = (t,e,n)=>{
            let r;
            return i=>{
                e.value >= 0 && (i || n) && (e.delta = e.value - (r || 0),
                (e.delta || void 0 === r) && (r = e.value,
                t(e)))
            }
        }
          , et = ()=>`v2-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
          , ee = (t,e)=>({
            name: t,
            value: (0,
            t6.h)(e, ()=>-1),
            delta: 0,
            entries: [],
            id: et()
        })
          , en = (t,e)=>{
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                    if ("first-input" === t && !("PerformanceEventTiming"in self))
                        return;
                    var n = new PerformanceObserver(t=>t.getEntries().map(e));
                    return n.observe({
                        type: t,
                        buffered: !0
                    }),
                    n
                }
            } catch (t) {}
        }
          , er = (t,e)=>{
            var n = r=>{
                ("pagehide" === r.type || "hidden" === (0,
                m.R)().document.visibilityState) && (t(r),
                e && (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)))
            }
            ;
            addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0)
        }
          , ei = (t,e)=>{
            let n;
            var r = ee("CLS", 0);
            let i = 0
              , a = [];
            var s = t=>{
                if (t && !t.hadRecentInput) {
                    var e = a[0]
                      , s = a[a.length - 1];
                    i && 0 !== a.length && t.startTime - s.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (i += t.value,
                    a.push(t)) : (i = t.value,
                    a = [t]),
                    i > r.value && (r.value = i,
                    r.entries = a,
                    n && n())
                }
            }
              , o = en("layout-shift", s);
            o && (n = t7(t, r, e),
            er(()=>{
                o.takeRecords().map(s),
                n(!0)
            }
            ))
        }
        ;
        let ea = -1;
        var es = ()=>"hidden" === (0,
        m.R)().document.visibilityState ? 0 : 1 / 0
          , eo = ()=>{
            er(({timeStamp: t})=>{
                ea = t
            }
            , !0)
        }
          , ec = ()=>(ea < 0 && (ea = es(),
        eo()),
        {
            get firstHiddenTime() {
                return ea
            }
        })
          , eu = (t,e)=>{
            let n;
            var r = ec()
              , i = ee("FID")
              , a = t=>{
                n && t.startTime < r.firstHiddenTime && (i.value = t.processingStart - t.startTime,
                i.entries.push(t),
                n(!0))
            }
              , s = en("first-input", a);
            s && (n = t7(t, i, e),
            er(()=>{
                s.takeRecords().map(a),
                s.disconnect()
            }
            , !0))
        }
          , e_ = {}
          , ed = (t,e)=>{
            let n;
            var r = ec()
              , i = ee("LCP")
              , a = t=>{
                var e = t.startTime;
                e < r.firstHiddenTime && (i.value = e,
                i.entries.push(t)),
                n && n()
            }
              , s = en("largest-contentful-paint", a);
            if (s) {
                n = t7(t, i, e);
                var o = ()=>{
                    e_[i.id] || (s.takeRecords().map(a),
                    s.disconnect(),
                    e_[i.id] = !0,
                    n(!0))
                }
                ;
                ["keydown", "click"].forEach(t=>{
                    addEventListener(t, o, {
                        once: !0,
                        capture: !0
                    })
                }
                ),
                er(o, !0)
            }
        }
        ;
        function ep(t) {
            return "number" == typeof t && isFinite(t)
        }
        function el(t, {startTimestamp: e, ...n}) {
            return e && t.startTimestamp > e && (t.startTimestamp = e),
            t.startChild({
                startTimestamp: e,
                ...n
            })
        }
        var eh = (0,
        m.R)();
        function ef() {
            return eh && eh.addEventListener && eh.performance
        }
        let eg = 0
          , em = {};
        function ev(t, e, n, r, i, a) {
            var s = a ? e[a] : e[`${n}End`]
              , o = e[`${n}Start`];
            o && s && el(t, {
                op: "browser",
                description: (0,
                t6.h)(i, ()=>n),
                startTimestamp: r + (0,
                t2.XL)(o),
                endTimestamp: r + (0,
                t2.XL)(s)
            })
        }
        var ey = {
            traceFetch: !0,
            traceXHR: !0,
            tracingOrigins: ["localhost", /^\//]
        }
          , eE = (0,
        m.R)()
          , eS = {
            idleTimeout: t4.nT,
            finalTimeout: t4.mg,
            markBackgroundTransactions: !0,
            routingInstrumentation: function(t, e=!0, n=!0) {
                let r;
                if (!eE || !eE.location) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("Could not initialize routing instrumentation due to invalid location");
                    return
                }
                let i = eE.location.href;
                e && (r = t({
                    name: eE.location.pathname,
                    op: "pageload",
                    metadata: {
                        source: "url"
                    }
                })),
                n && (0,
                C.o)("history", ({to: e, from: n})=>{
                    if (void 0 === n && i && -1 !== i.indexOf(e)) {
                        i = void 0;
                        return
                    }
                    n !== e && (i = void 0,
                    r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`),
                    r.finish()),
                    r = t({
                        name: eE.location.pathname,
                        op: "navigation",
                        metadata: {
                            source: "url"
                        }
                    }))
                }
                )
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            ...ey
        };
        class eT {
            __init() {
                this.name = "BrowserTracing"
            }
            constructor(t) {
                eT.prototype.__init.call(this);
                let e = ey.tracingOrigins;
                t && (t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length ? e = t.tracingOrigins : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._emitOptionsWarning = !0)),
                this.options = {
                    ...eS,
                    ...t,
                    tracingOrigins: e
                };
                let {_metricOptions: n} = this.options;
                !function(t=!1) {
                    var e = ef();
                    e && K.Z1 && (e.mark && eh.performance.mark("sentry-tracing-init"),
                    ei(t=>{
                        var e = t.entries.pop();
                        e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding CLS"),
                        em.cls = {
                            value: t.value,
                            unit: ""
                        },
                        s = e)
                    }
                    ),
                    ed(t=>{
                        var e = t.entries.pop();
                        if (e) {
                            var n = (0,
                            t2.XL)(K.Z1)
                              , r = (0,
                            t2.XL)(e.startTime);
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding LCP"),
                            em.lcp = {
                                value: t.value,
                                unit: "millisecond"
                            },
                            em["mark.lcp"] = {
                                value: n + r,
                                unit: "second"
                            },
                            a = e
                        }
                    }
                    , t),
                    eu(t=>{
                        var e = t.entries.pop();
                        if (e) {
                            var n = (0,
                            t2.XL)(K.Z1)
                              , r = (0,
                            t2.XL)(e.startTime);
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding FID"),
                            em.fid = {
                                value: t.value,
                                unit: "millisecond"
                            },
                            em["mark.fid"] = {
                                value: n + r,
                                unit: "second"
                            }
                        }
                    }
                    ))
                }(n && n._reportAllChanges)
            }
            setupOnce(t, e) {
                this._getCurrentHub = e,
                this._emitOptionsWarning && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`[Tracing] We added a reasonable default for you: ${ey.tracingOrigins}`));
                let {routingInstrumentation: n, startTransactionOnLocationChange: r, startTransactionOnPageLoad: i, markBackgroundTransactions: a, traceFetch: s, traceXHR: o, tracingOrigins: c, shouldCreateSpanForRequest: u} = this.options;
                n(t=>this._createRouteTransaction(t), i, r),
                a && (t8 && t8.document ? t8.document.addEventListener("visibilitychange", ()=>{
                    var t = (0,
                    t2.x1)();
                    if (t8.document.hidden && t) {
                        var e = "cancelled";
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),
                        t.status || t.setStatus(e),
                        t.setTag("visibilitychange", "document.hidden"),
                        t.finish()
                    }
                }
                ) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
                function(t) {
                    let {traceFetch: e, traceXHR: n, tracingOrigins: r, shouldCreateSpanForRequest: i} = {
                        ...ey,
                        ...t
                    };
                    var a = {}
                      , s = t=>(a[t] || (a[t] = r.some(e=>(0,
                    T.zC)(t, e)) && !(0,
                    T.zC)(t, "sentry_key")),
                    a[t]);
                    let o = s;
                    "function" == typeof i && (o = t=>s(t) && i(t));
                    var c = {};
                    e && (0,
                    C.o)("fetch", t=>{
                        (function(t, e, n) {
                            if ((0,
                            t2.zu)() && t.fetchData && e(t.fetchData.url)) {
                                if (t.endTimestamp) {
                                    var r = t.fetchData.__span;
                                    if (!r)
                                        return;
                                    var i = n[r];
                                    i && (t.response ? i.setHttpStatus(t.response.status) : t.error && i.setStatus("internal_error"),
                                    i.finish(),
                                    delete n[r]);
                                    return
                                }
                                var a = (0,
                                t2.x1)();
                                if (a) {
                                    var i = a.startChild({
                                        data: {
                                            ...t.fetchData,
                                            type: "fetch"
                                        },
                                        description: `${t.fetchData.method} ${t.fetchData.url}`,
                                        op: "http.client"
                                    });
                                    t.fetchData.__span = i.spanId,
                                    n[i.spanId] = i;
                                    var s = t.args[0] = t.args[0]
                                      , o = t.args[1] = t.args[1] || {};
                                    o.headers = function(t, e, n, r) {
                                        let i = r.headers;
                                        if ((0,
                                        H.V9)(t, Request) && (i = t.headers),
                                        i) {
                                            if ("function" == typeof i.append)
                                                i.append("sentry-trace", n.toTraceparent()),
                                                i.append(Q.bU, (0,
                                                Q.J8)(e, i.get(Q.bU)));
                                            else if (Array.isArray(i)) {
                                                let[,t] = i.find(([t,e])=>t === Q.bU);
                                                i = [...i, ["sentry-trace", n.toTraceparent()], [Q.bU, (0,
                                                Q.J8)(e, t)]]
                                            } else
                                                i = {
                                                    ...i,
                                                    "sentry-trace": n.toTraceparent(),
                                                    baggage: (0,
                                                    Q.J8)(e, i.baggage)
                                                }
                                        } else
                                            i = {
                                                "sentry-trace": n.toTraceparent(),
                                                baggage: (0,
                                                Q.J8)(e)
                                            };
                                        return i
                                    }(s, a.getBaggage(), i, o)
                                }
                            }
                        }
                        )(t, o, c)
                    }
                    ),
                    n && (0,
                    C.o)("xhr", t=>{
                        (function(t, e, n) {
                            if ((0,
                            t2.zu)() && (!t.xhr || !t.xhr.__sentry_own_request__) && t.xhr && t.xhr.__sentry_xhr__ && e(t.xhr.__sentry_xhr__.url)) {
                                var r = t.xhr.__sentry_xhr__;
                                if (t.endTimestamp) {
                                    var i = t.xhr.__sentry_xhr_span_id__;
                                    if (!i)
                                        return;
                                    var a = n[i];
                                    a && (a.setHttpStatus(r.status_code),
                                    a.finish(),
                                    delete n[i]);
                                    return
                                }
                                var s = (0,
                                t2.x1)();
                                if (s) {
                                    var a = s.startChild({
                                        data: {
                                            ...r.data,
                                            type: "xhr",
                                            method: r.method,
                                            url: r.url
                                        },
                                        description: `${r.method} ${r.url}`,
                                        op: "http.client"
                                    });
                                    if (t.xhr.__sentry_xhr_span_id__ = a.spanId,
                                    n[t.xhr.__sentry_xhr_span_id__] = a,
                                    t.xhr.setRequestHeader)
                                        try {
                                            t.xhr.setRequestHeader("sentry-trace", a.toTraceparent());
                                            var o = t.xhr.getRequestHeader && t.xhr.getRequestHeader(Q.bU);
                                            t.xhr.setRequestHeader(Q.bU, (0,
                                            Q.J8)(s.getBaggage(), o))
                                        } catch (t) {}
                                }
                            }
                        }
                        )(t, o, c)
                    }
                    )
                }({
                    traceFetch: s,
                    traceXHR: o,
                    tracingOrigins: c,
                    shouldCreateSpanForRequest: u
                })
            }
            _createRouteTransaction(t) {
                if (!this._getCurrentHub) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
                    return
                }
                let {beforeNavigate: e, idleTimeout: n, finalTimeout: r} = this.options;
                var i = "pageload" === t.op ? function() {
                    var t = eb("sentry-trace")
                      , e = eb("baggage")
                      , n = t ? function(t) {
                        var e = t.match(t3);
                        if (e) {
                            let t;
                            return "1" === e[3] ? t = !0 : "0" === e[3] && (t = !1),
                            {
                                traceId: e[1],
                                parentSampled: t,
                                parentSpanId: e[2]
                            }
                        }
                    }(t) : void 0
                      , r = (0,
                    Q.rg)(e, t);
                    if (n || r)
                        return {
                            ...n && n,
                            ...r && {
                                metadata: {
                                    baggage: r
                                }
                            }
                        }
                }() : void 0
                  , o = {
                    ...t,
                    ...i,
                    ...i && {
                        metadata: {
                            ...t.metadata,
                            ...i.metadata
                        }
                    },
                    trimEnd: !0
                }
                  , c = "function" == typeof e ? e(o) : o
                  , u = void 0 === c ? {
                    ...o,
                    sampled: !1
                } : c;
                u.metadata = u.name !== o.name ? {
                    ...u.metadata,
                    source: "custom"
                } : u.metadata,
                !1 === u.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`[Tracing] Will not send ${u.op} transaction because of beforeNavigate.`),
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`[Tracing] Starting ${u.op} transaction on scope`);
                var _ = this._getCurrentHub();
                let {location: d} = (0,
                m.R)();
                var p = (0,
                t9.lb)(_, u, n, r, !0, {
                    location: d
                });
                return p.registerBeforeFinishCallback(t=>{
                    (function(t) {
                        let e, n;
                        var r = ef();
                        if (r && eh.performance.getEntries && K.Z1) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Tracing] Adding & adjusting spans using Performance API");
                            var i = (0,
                            t2.XL)(K.Z1)
                              , o = r.getEntries();
                            o.slice(eg).forEach(r=>{
                                var a = (0,
                                t2.XL)(r.startTime)
                                  , s = (0,
                                t2.XL)(r.duration);
                                if ("navigation" !== t.op || !(i + a < t.startTimestamp))
                                    switch (r.entryType) {
                                    case "navigation":
                                        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(e=>{
                                            ev(t, r, e, i)
                                        }
                                        ),
                                        ev(t, r, "secureConnection", i, "TLS/SSL", "connectEnd"),
                                        ev(t, r, "fetch", i, "cache", "domainLookupStart"),
                                        ev(t, r, "domainLookup", i, "DNS"),
                                        el(t, {
                                            op: "browser",
                                            description: "request",
                                            startTimestamp: i + (0,
                                            t2.XL)(r.requestStart),
                                            endTimestamp: i + (0,
                                            t2.XL)(r.responseEnd)
                                        }),
                                        el(t, {
                                            op: "browser",
                                            description: "response",
                                            startTimestamp: i + (0,
                                            t2.XL)(r.responseStart),
                                            endTimestamp: i + (0,
                                            t2.XL)(r.responseEnd)
                                        }),
                                        e = i + (0,
                                        t2.XL)(r.responseStart),
                                        n = i + (0,
                                        t2.XL)(r.requestStart);
                                        break;
                                    case "mark":
                                    case "paint":
                                    case "measure":
                                        var o, c = (o = i + a,
                                        el(t, {
                                            description: r.name,
                                            endTimestamp: o + s,
                                            op: r.entryType,
                                            startTimestamp: o
                                        }),
                                        o), u = ec(), _ = r.startTime < u.firstHiddenTime;
                                        "first-paint" === r.name && _ && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding FP"),
                                        em.fp = {
                                            value: r.startTime,
                                            unit: "millisecond"
                                        },
                                        em["mark.fp"] = {
                                            value: c,
                                            unit: "second"
                                        }),
                                        "first-contentful-paint" === r.name && _ && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding FCP"),
                                        em.fcp = {
                                            value: r.startTime,
                                            unit: "millisecond"
                                        },
                                        em["mark.fcp"] = {
                                            value: c,
                                            unit: "second"
                                        });
                                        break;
                                    case "resource":
                                        var d = r.name.replace(eh.location.origin, "");
                                        (function(t, e, n, r, i, a) {
                                            if ("xmlhttprequest" !== e.initiatorType && "fetch" !== e.initiatorType) {
                                                var s = {};
                                                "transferSize"in e && (s["Transfer Size"] = e.transferSize),
                                                "encodedBodySize"in e && (s["Encoded Body Size"] = e.encodedBodySize),
                                                "decodedBodySize"in e && (s["Decoded Body Size"] = e.decodedBodySize);
                                                var o = a + r;
                                                el(t, {
                                                    description: n,
                                                    endTimestamp: o + i,
                                                    op: e.initiatorType ? `resource.${e.initiatorType}` : "resource",
                                                    startTimestamp: o,
                                                    data: s
                                                })
                                            }
                                        }
                                        )(t, r, d, a, s, i)
                                    }
                            }
                            ),
                            eg = Math.max(o.length - 1, 0),
                            function(t) {
                                var e = eh.navigator;
                                if (e) {
                                    var n = e.connection;
                                    n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType),
                                    n.type && t.setTag("connectionType", n.type),
                                    ep(n.rtt) && (em["connection.rtt"] = {
                                        value: n.rtt,
                                        unit: "millisecond"
                                    }),
                                    ep(n.downlink) && (em["connection.downlink"] = {
                                        value: n.downlink,
                                        unit: ""
                                    })),
                                    ep(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`),
                                    ep(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                                }
                            }(t),
                            "pageload" === t.op && ("number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding TTFB"),
                            em.ttfb = {
                                value: (e - t.startTimestamp) * 1e3,
                                unit: "millisecond"
                            },
                            "number" == typeof n && n <= e && (em["ttfb.requestTime"] = {
                                value: (e - n) * 1e3,
                                unit: "millisecond"
                            })),
                            ["fcp", "fp", "lcp"].forEach(e=>{
                                if (em[e] && !(i >= t.startTimestamp)) {
                                    var n = em[e].value
                                      , r = Math.abs((i + (0,
                                    t2.XL)(n) - t.startTimestamp) * 1e3)
                                      , a = r - n;
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log(`[Measurements] Normalized ${e} from ${n} to ${r} (${a})`),
                                    em[e].value = r
                                }
                            }
                            ),
                            em["mark.fid"] && em.fid && el(t, {
                                description: "first input delay",
                                endTimestamp: em["mark.fid"].value + (0,
                                t2.XL)(em.fid.value),
                                op: "web.vitals",
                                startTimestamp: em["mark.fid"].value
                            }),
                            "fcp"in em || delete em.cls,
                            Object.keys(em).forEach(e=>{
                                t.setMeasurement(e, em[e].value, em[e].unit)
                            }
                            ),
                            a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding LCP Data"),
                            a.element && t.setTag("lcp.element", (0,
                            tu.R)(a.element)),
                            a.id && t.setTag("lcp.id", a.id),
                            a.url && t.setTag("lcp.url", a.url.trim().slice(0, 200)),
                            t.setTag("lcp.size", a.size)),
                            s && s.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.log("[Measurements] Adding CLS Data"),
                            s.sources.forEach((e,n)=>t.setTag(`cls.source.${n + 1}`, (0,
                            tu.R)(e.node))))),
                            a = void 0,
                            s = void 0,
                            em = {}
                        }
                    }
                    )(t),
                    t.setTag("sentry_reportAllChanges", !!(this.options._metricOptions && this.options._metricOptions._reportAllChanges))
                }
                ),
                p
            }
        }
        function eb(t) {
            var e = (0,
            m.R)();
            if (!e.document || !e.document.querySelector)
                return null;
            var n = e.document.querySelector(`meta[name=${t}]`);
            return n ? n.getAttribute("content") : null
        }
        ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (0,
        t9.ro)();
        var eR = n(5632)
          , eD = n.n(eR)
          , ek = (0,
        m.R)()
          , eN = {
            "routing.instrumentation": "next-router"
        };
        function ex(t, e=!0, n=!0) {
            u = t,
            eD().ready(()=>{
                if (e) {
                    var r = null !== eD().route;
                    o = t({
                        name: c = r ? (0,
                        k.rt)(eD().route) : ek.location.pathname,
                        op: "pageload",
                        tags: eN,
                        metadata: {
                            source: r ? "route" : "url"
                        }
                    })
                }
                if (n) {
                    var i = Object.getPrototypeOf(eD().router);
                    (0,
                    y.hl)(i, "changeState", ew)
                }
            }
            )
        }
        function ew(t) {
            return function(e, n, r, i, ...a) {
                var s = (0,
                k.rt)(n);
                if (void 0 !== u && c !== s) {
                    o && o.finish();
                    var _ = {
                        ...eN,
                        method: e,
                        ...i
                    };
                    c && (_.from = c),
                    o = u({
                        name: c = s,
                        op: "navigation",
                        tags: _,
                        metadata: {
                            source: "route"
                        }
                    })
                }
                return t.call(this, e, n, r, i, ...a)
            }
        }
        function eU(t, e, n) {
            let r = !1;
            for (let a = 0; a < e.length; a++) {
                e[a].name === t.name && (r = !0);
                var i = n[e[a].name];
                i && function t(e, n, r) {
                    var i = n.match(/([a-z]+)\.(.*)/i);
                    null === i ? e[n] = r : t(e[i[1]], i[2], r)
                }(e[a], i.keyPath, i.value)
            }
            return r ? e : [...e, t]
        }
        var eG = n(70314)
          , eB = n.n(eG);
        let eY = eB()().publicRuntimeConfig
          , e$ = eY.SENTRY_DSN || eY.NEXT_PUBLIC_SENTRY_DSN
          , eO = eY.SENTRY_ENVIRONMENT
          , eI = !!eO && "development" !== eO;
        (f = {
            dsn: e$ || "https://824b9acd00f449f283554475ff8303bb@o698378.ingest.sentry.io/5776661",
            enabled: eI,
            attachStacktrace: !0,
            environment: eO || "development",
            ignoreErrors: [/SKIP_SENTRY/, /Non-Error promise rejection captured with keys: currentTarget, isTrusted, target, type/],
            integrations: [eI && new R({
                levels: ["error"]
            })],
            beforeSend(t, e) {
                if ("console" === t.logger) {
                    var n;
                    if (!(null === (n = t.message) || void 0 === n ? void 0 : n.match(/@gamma-app\/y-prosemirror/)))
                        return null
                }
                return t
            }
        })._metadata = f._metadata || {},
        f._metadata.sdk = f._metadata.sdk || {
            name: "sentry.javascript.nextjs",
            packages: ["nextjs", "react"].map(t=>({
                name: `npm:@sentry/${t}`,
                version: D
            })),
            version: D
        },
        f.environment = f.environment || "production",
        _ = f.integrations,
        ("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (void 0 !== f.tracesSampleRate || void 0 !== f.tracesSampler) && (d = f.integrations,
        p = new eT({
            tracingOrigins: [...ey.tracingOrigins, /^(api\/)/],
            routingInstrumentation: ex
        }),
        _ = d ? function(t, e, n={}) {
            return Array.isArray(e) ? eU(t, e, n) : r=>eU(t, e(r), n)
        }(p, d, {
            BrowserTracing: {
                keyPath: "options.routingInstrumentation",
                value: ex
            }
        }) : [p]),
        (g = {
            ...f,
            integrations: _
        })._metadata = g._metadata || {},
        g._metadata.sdk = g._metadata.sdk || {
            name: "sentry.javascript.react",
            packages: [{
                name: "npm:@sentry/react",
                version: D
            }],
            version: D
        },
        function(t={}) {
            let e;
            if (void 0 === t.defaultIntegrations && (t.defaultIntegrations = t1),
            void 0 === t.release) {
                var n, r, i, a, s, o, c, u = (0,
                m.R)();
                u.SENTRY_RELEASE && u.SENTRY_RELEASE.id && (t.release = u.SENTRY_RELEASE.id)
            }
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
            void 0 === t.sendClientReports && (t.sendClientReports = !0);
            var _ = {
                ...t,
                stackParser: (0,
                O.Sq)(t.stackParser || tN),
                integrations: (n = t.defaultIntegrations && [...t.defaultIntegrations] || [],
                r = t.integrations,
                e = [...$(n)],
                Array.isArray(r) ? e = [...e.filter(t=>r.every(e=>e.name !== t.name)), ...$(r)] : "function" == typeof r && (e = Array.isArray(e = r(e)) ? e : [e]),
                i = e.map(t=>t.name),
                a = "Debug",
                -1 !== i.indexOf(a) && e.push(...e.splice(i.indexOf(a), 1)),
                e),
                transport: t.transport || ((0,
                I.Ak)() ? tQ : t0)
            };
            !0 === _.debug && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__ ? v.kg.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")),
            (o = (s = (0,
            B.Gd)()).getScope()) && o.update(_.initialScope),
            c = new ty(_),
            s.bindClient(c),
            t.autoSessionTracking && function() {
                if (void 0 === (0,
                m.R)().document) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && v.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    return
                }
                var t = (0,
                B.Gd)();
                t.captureSession && (t5(t),
                (0,
                C.o)("history", ({from: t, to: e})=>{
                    void 0 === t || t === e || t5((0,
                    B.Gd)())
                }
                ))
            }()
        }(g),
        (0,
        tw.e)(t=>{
            t.setTag("runtime", "browser");
            var e = t=>"transaction" === t.type && "/404" === t.transaction ? null : t;
            e.id = "NextClient404Filter",
            t.addEventProcessor(e)
        }
        ),
        tw.av({
            isGammaE2E: eY.GAMMA_E2E_USER
        })
    },
    5632: function(t, e, n) {
        t.exports = n(89220)
    },
    34406: function(t) {
        var e, n, r, i = t.exports = {};
        function a() {
            throw Error("setTimeout has not been defined")
        }
        function s() {
            throw Error("clearTimeout has not been defined")
        }
        function o(t) {
            if (e === setTimeout)
                return setTimeout(t, 0);
            if ((e === a || !e) && setTimeout)
                return e = setTimeout,
                setTimeout(t, 0);
            try {
                return e(t, 0)
            } catch (n) {
                try {
                    return e.call(null, t, 0)
                } catch (n) {
                    return e.call(this, t, 0)
                }
            }
        }
        !function() {
            try {
                e = "function" == typeof setTimeout ? setTimeout : a
            } catch (t) {
                e = a
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (t) {
                n = s
            }
        }();
        var c = []
          , u = !1
          , _ = -1;
        function d() {
            u && r && (u = !1,
            r.length ? c = r.concat(c) : _ = -1,
            c.length && p())
        }
        function p() {
            if (!u) {
                var t = o(d);
                u = !0;
                for (var e = c.length; e; ) {
                    for (r = c,
                    c = []; ++_ < e; )
                        r && r[_].run();
                    _ = -1,
                    e = c.length
                }
                r = null,
                u = !1,
                function(t) {
                    if (n === clearTimeout)
                        return clearTimeout(t);
                    if ((n === s || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function l(t, e) {
            this.fun = t,
            this.array = e
        }
        function h() {}
        i.nextTick = function(t) {
            var e = Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            c.push(new l(t,e)),
            1 !== c.length || u || o(p)
        }
        ,
        l.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        i.title = "browser",
        i.browser = !0,
        i.env = {},
        i.argv = [],
        i.version = "",
        i.versions = {},
        i.on = h,
        i.addListener = h,
        i.once = h,
        i.off = h,
        i.removeListener = h,
        i.removeAllListeners = h,
        i.emit = h,
        i.prependListener = h,
        i.prependOnceListener = h,
        i.listeners = function(t) {
            return []
        }
        ,
        i.binding = function(t) {
            throw Error("process.binding is not supported")
        }
        ,
        i.cwd = function() {
            return "/"
        }
        ,
        i.chdir = function(t) {
            throw Error("process.chdir is not supported")
        }
        ,
        i.umask = function() {
            return 0
        }
    }
}, function(t) {
    var e = function(e) {
        return t(t.s = e)
    };
    t.O(0, [9774, 179], function() {
        return e(78255),
        e(74155),
        e(71588),
        e(89220)
    }),
    _N_E = t.O()
}
]);
//# sourceMappingURL=_app-ea9bcf7fbea5f55f.js.map
