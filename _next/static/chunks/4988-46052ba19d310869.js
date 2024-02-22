(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4988], {
    62307: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let r = n(43219)
          , o = n(16794)
          , u = o._(n(2784))
          , l = n(28316)
          , i = r._(n(36587))
          , a = n(27129)
          , s = n(51875)
          , c = n(61546);
        n(93311);
        let d = n(56051)
          , f = r._(n(56569))
          , p = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function m(e, t, n, r, o, u) {
            let l = null == e ? void 0 : e.src;
            if (!e || e["data-loaded-src"] === l)
                return;
            e["data-loaded-src"] = l;
            let i = "decode"in e ? e.decode() : Promise.resolve();
            i.catch(()=>{}
            ).then(()=>{
                if (e.parentElement && e.isConnected) {
                    if ("blur" === t && o(!0),
                    null == n ? void 0 : n.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let r = !1
                          , o = !1;
                        n.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: ()=>r,
                            isPropagationStopped: ()=>o,
                            persist: ()=>{}
                            ,
                            preventDefault: ()=>{
                                r = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: ()=>{
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == r ? void 0 : r.current) && r.current(e)
                }
            }
            )
        }
        function v(e) {
            let[t,n] = u.version.split(".")
              , r = parseInt(t, 10)
              , o = parseInt(n, 10);
            return r > 18 || 18 === r && o >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let h = (0,
        u.forwardRef)((e,t)=>{
            let {src: n, srcSet: r, sizes: o, height: l, width: i, decoding: a, className: s, style: c, fetchPriority: d, placeholder: f, loading: p, unoptimized: h, fill: g, onLoadRef: b, onLoadingCompleteRef: E, setBlurComplete: y, setShowAltText: w, onLoad: P, onError: T, ...S} = e;
            return u.default.createElement("img", {
                ...S,
                ...v(d),
                loading: p,
                width: i,
                height: l,
                decoding: a,
                "data-nimg": g ? "fill" : "1",
                className: s,
                style: c,
                sizes: o,
                srcSet: r,
                src: n,
                ref: (0,
                u.useCallback)(e=>{
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (T && (e.src = e.src),
                    e.complete && m(e, f, b, E, y, h))
                }
                , [n, f, b, E, y, T, h, t]),
                onLoad: e=>{
                    let t = e.currentTarget;
                    m(t, f, b, E, y, h)
                }
                ,
                onError: e=>{
                    w(!0),
                    "blur" === f && y(!0),
                    T && T(e)
                }
            })
        }
        );
        function g(e) {
            let {isAppRouter: t, imgAttributes: n} = e
              , r = {
                as: "image",
                imageSrcSet: n.srcSet,
                imageSizes: n.sizes,
                crossOrigin: n.crossOrigin,
                referrerPolicy: n.referrerPolicy,
                ...v(n.fetchPriority)
            };
            return t ? ((0,
            l.preload)(n.src, r),
            null) : u.default.createElement(i.default, null, u.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...r
            }))
        }
        let b = (0,
        u.forwardRef)((e,t)=>{
            let n = (0,
            u.useContext)(d.RouterContext)
              , r = (0,
            u.useContext)(c.ImageConfigContext)
              , o = (0,
            u.useMemo)(()=>{
                let e = p || r || s.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , n = e.deviceSizes.sort((e,t)=>e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: n
                }
            }
            , [r])
              , {onLoad: l, onLoadingComplete: i} = e
              , m = (0,
            u.useRef)(l);
            (0,
            u.useEffect)(()=>{
                m.current = l
            }
            , [l]);
            let v = (0,
            u.useRef)(i);
            (0,
            u.useEffect)(()=>{
                v.current = i
            }
            , [i]);
            let[b,E] = (0,
            u.useState)(!1)
              , [y,w] = (0,
            u.useState)(!1)
              , {props: P, meta: T} = (0,
            a.getImgProps)(e, {
                defaultLoader: f.default,
                imgConf: o,
                blurComplete: b,
                showAltText: y
            });
            return u.default.createElement(u.default.Fragment, null, u.default.createElement(h, {
                ...P,
                unoptimized: T.unoptimized,
                placeholder: T.placeholder,
                fill: T.fill,
                onLoadRef: m,
                onLoadingCompleteRef: v,
                setBlurComplete: E,
                setShowAltText: w,
                ref: t
            }), T.priority ? u.default.createElement(g, {
                isAppRouter: !n,
                imgAttributes: P
            }) : null)
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    27129: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return i
            }
        }),
        n(93311);
        let r = n(33066)
          , o = n(51875);
        function u(e) {
            return void 0 !== e.default
        }
        function l(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function i(e, t) {
            var n;
            let i, a, s, {src: c, sizes: d, unoptimized: f=!1, priority: p=!1, loading: m, className: v, quality: h, width: g, height: b, fill: E=!1, style: y, onLoad: w, onLoadingComplete: P, placeholder: T="empty", blurDataURL: S, fetchPriority: O, layout: C, objectFit: M, objectPosition: x, lazyBoundary: N, lazyRoot: R, ...F} = e, {imgConf: k, showAltText: A, blurComplete: L, defaultLoader: _} = t, D = k || o.imageConfigDefault;
            if ("allSizes"in D)
                i = D;
            else {
                let e = [...D.deviceSizes, ...D.imageSizes].sort((e,t)=>e - t)
                  , t = D.deviceSizes.sort((e,t)=>e - t);
                i = {
                    ...D,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            let I = F.loader || _;
            delete F.loader,
            delete F.srcSet;
            let j = "__next_img_default"in I;
            if (j) {
                if ("custom" === i.loader)
                    throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = I;
                I = t=>{
                    let {config: n, ...r} = t;
                    return e(r)
                }
            }
            if (C) {
                "fill" === C && (E = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                e && (y = {
                    ...y,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                t && !d && (d = t)
            }
            let z = ""
              , H = l(g)
              , V = l(b);
            if ("object" == typeof (n = c) && (u(n) || void 0 !== n.src)) {
                let e = u(c) ? c.default : c;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (a = e.blurWidth,
                s = e.blurHeight,
                S = S || e.blurDataURL,
                z = e.src,
                !E) {
                    if (H || V) {
                        if (H && !V) {
                            let t = H / e.width;
                            V = Math.round(e.height * t)
                        } else if (!H && V) {
                            let t = V / e.height;
                            H = Math.round(e.width * t)
                        }
                    } else
                        H = e.width,
                        V = e.height
                }
            }
            let B = !p && ("lazy" === m || void 0 === m);
            (!(c = "string" == typeof c ? c : z) || c.startsWith("data:") || c.startsWith("blob:")) && (f = !0,
            B = !1),
            i.unoptimized && (f = !0),
            j && c.endsWith(".svg") && !i.dangerouslyAllowSVG && (f = !0),
            p && (O = "high");
            let Y = l(h)
              , G = Object.assign(E ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: M,
                objectPosition: x
            } : {}, A ? {} : {
                color: "transparent"
            }, y)
              , W = "blur" === T && S && !L ? {
                backgroundSize: G.objectFit || "cover",
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0,
                r.getImageBlurSvg)({
                    widthInt: H,
                    heightInt: V,
                    blurWidth: a,
                    blurHeight: s,
                    blurDataURL: S,
                    objectFit: G.objectFit
                }) + '")'
            } : {}
              , $ = function(e) {
                let {config: t, src: n, unoptimized: r, width: o, quality: u, sizes: l, loader: i} = e;
                if (r)
                    return {
                        src: n,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: a, kind: s} = function(e, t, n) {
                    let {deviceSizes: r, allSizes: o} = e;
                    if (n) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let r; r = e.exec(n); r)
                            t.push(parseInt(r[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t=>t >= r[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    if ("number" != typeof t)
                        return {
                            widths: r,
                            kind: "w"
                        };
                    let u = [...new Set([t, 2 * t].map(e=>o.find(t=>t >= e) || o[o.length - 1]))];
                    return {
                        widths: u,
                        kind: "x"
                    }
                }(t, o, l)
                  , c = a.length - 1;
                return {
                    sizes: l || "w" !== s ? l : "100vw",
                    srcSet: a.map((e,r)=>i({
                        config: t,
                        src: n,
                        quality: u,
                        width: e
                    }) + " " + ("w" === s ? e : r + 1) + s).join(", "),
                    src: i({
                        config: t,
                        src: n,
                        quality: u,
                        width: a[c]
                    })
                }
            }({
                config: i,
                src: c,
                unoptimized: f,
                width: H,
                quality: Y,
                sizes: d,
                loader: I
            })
              , U = {
                ...F,
                loading: B ? "lazy" : m,
                fetchPriority: O,
                width: H,
                height: V,
                decoding: "async",
                className: v,
                style: {
                    ...G,
                    ...W
                },
                sizes: $.sizes,
                srcSet: $.srcSet,
                src: $.src
            }
              , q = {
                unoptimized: f,
                priority: p,
                placeholder: T,
                fill: E
            };
            return {
                props: U,
                meta: q
            }
        }
    },
    33066: function(e, t) {
        "use strict";
        function n(e) {
            let {widthInt: t, heightInt: n, blurWidth: r, blurHeight: o, blurDataURL: u, objectFit: l} = e
              , i = r ? 40 * r : t
              , a = o ? 40 * o : n
              , s = i && a ? "viewBox='0 0 " + i + " " + a + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + s + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (s ? "none" : "contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + u + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    77515: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            default: function() {
                return s
            },
            unstable_getImgProps: function() {
                return a
            }
        });
        let r = n(43219)
          , o = n(27129)
          , u = n(93311)
          , l = n(62307)
          , i = r._(n(56569))
          , a = e=>{
            (0,
            u.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: i.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,n] of Object.entries(t))
                void 0 === n && delete t[e];
            return {
                props: t
            }
        }
          , s = l.Image
    },
    56569: function(e, t) {
        "use strict";
        function n(e) {
            let {config: t, src: n, width: r, quality: o} = e;
            return t.path + "?url=" + encodeURIComponent(n) + "&w=" + r + "&q=" + (o || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n.__next_img_default = !0;
        let r = n
    },
    97729: function(e, t, n) {
        e.exports = n(36587)
    },
    96577: function(e, t, n) {
        e.exports = n(77515)
    },
    5632: function(e, t, n) {
        e.exports = n(25909)
    },
    9057: function(e, t, n) {
        var r = n(34406);
        (function() {
            var t, n, o, u;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                return performance.now()
            }
            : null != r && r.hrtime ? (e.exports = function() {
                return (t() - u) / 1e6
            }
            ,
            n = r.hrtime,
            u = (t = function() {
                var e;
                return 1e9 * (e = n())[0] + e[1]
            }
            )() - 1e9 * r.uptime()) : Date.now ? (e.exports = function() {
                return Date.now() - o
            }
            ,
            o = Date.now()) : (e.exports = function() {
                return new Date().getTime() - o
            }
            ,
            o = new Date().getTime())
        }
        ).call(this)
    },
    68262: function(e, t, n) {
        "use strict";
        var r = n(23586);
        function o() {}
        function u() {}
        u.resetWarningCache = o,
        e.exports = function() {
            function e(e, t, n, o, u, l) {
                if (l !== r) {
                    var i = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw i.name = "Invariant Violation",
                    i
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: u,
                resetWarningCache: o
            };
            return n.PropTypes = n,
            n
        }
    },
    13980: function(e, t, n) {
        e.exports = n(68262)()
    },
    23586: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    23493: function(e, t, n) {
        for (var r = n(9057), o = "undefined" == typeof window ? n.g : window, u = ["moz", "webkit"], l = "AnimationFrame", i = o["request" + l], a = o["cancel" + l] || o["cancelRequest" + l], s = 0; !i && s < u.length; s++)
            i = o[u[s] + "Request" + l],
            a = o[u[s] + "Cancel" + l] || o[u[s] + "CancelRequest" + l];
        if (!i || !a) {
            var c = 0
              , d = 0
              , f = []
              , p = 1e3 / 60;
            i = function(e) {
                if (0 === f.length) {
                    var t = r()
                      , n = Math.max(0, p - (t - c));
                    c = n + t,
                    setTimeout(function() {
                        var e = f.slice(0);
                        f.length = 0;
                        for (var t = 0; t < e.length; t++)
                            if (!e[t].cancelled)
                                try {
                                    e[t].callback(c)
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e
                                    }, 0)
                                }
                    }, Math.round(n))
                }
                return f.push({
                    handle: ++d,
                    callback: e,
                    cancelled: !1
                }),
                d
            }
            ,
            a = function(e) {
                for (var t = 0; t < f.length; t++)
                    f[t].handle === e && (f[t].cancelled = !0)
            }
        }
        e.exports = function(e) {
            return i.call(o, e)
        }
        ,
        e.exports.cancel = function() {
            a.apply(o, arguments)
        }
        ,
        e.exports.polyfill = function(e) {
            e || (e = o),
            e.requestAnimationFrame = i,
            e.cancelAnimationFrame = a
        }
    },
    31651: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
          , o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , u = n(2784)
          , l = s(u)
          , i = s(n(13980))
          , a = s(n(23493));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t && ("object" == typeof t || "function" == typeof t) ? t : e
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    currentValue: e.initialValue
                },
                n
            }
            return !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
            o(t, [{
                key: "componentDidMount",
                value: function() {
                    this.prepareTween(this.props)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.currentValue !== e.value && (this.tweenHandle && this.endTween(),
                    this.prepareTween(e))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.endTween()
                }
            }, {
                key: "prepareTween",
                value: function() {
                    var e = this;
                    this.tweenHandle = (0,
                    a.default)(function(t) {
                        e.tweenValue(t, !0)
                    })
                }
            }, {
                key: "endTween",
                value: function() {
                    a.default.cancel(this.tweenHandle),
                    this.setState(r({}, this.state, {
                        currentValue: this.props.value
                    }))
                }
            }, {
                key: "ensureSixtyFps",
                value: function(e) {
                    var t = this.state.currentTime;
                    return !t || e - t > 16
                }
            }, {
                key: "tweenValue",
                value: function(e, t) {
                    if (!this.ensureSixtyFps(e)) {
                        this.tweenHandle = (0,
                        a.default)(this.tweenValue.bind(this));
                        return
                    }
                    var n = this.props
                      , r = n.value
                      , o = n.duration
                      , u = this.state.currentValue
                      , l = t ? e : this.state.startTime
                      , i = t ? u : this.state.fromValue
                      , s = void 0;
                    if ((s = e - l >= o ? r : i + (r - i) * ((e - l) / o)) === r) {
                        this.endTween();
                        return
                    }
                    this.setState({
                        currentValue: s,
                        startTime: l || e,
                        fromValue: i,
                        currentTime: e
                    }),
                    this.tweenHandle = (0,
                    a.default)(this.tweenValue.bind(this))
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, o, u = this.props, i = u.formatValue, a = u.value, s = u.className, d = u.frameStyle, f = u.stepPrecision, p = this.state, m = p.currentValue, v = p.fromValue, h = this.props.style, g = m, b = a - v;
                    m !== a && (f > 0 ? g = Number(m.toFixed(f)) : b < 0 && 0 === f ? g = Math.floor(m) : b > 0 && 0 === f && (g = Math.ceil(m)));
                    var E = d(Math.abs((g - v) / (a - v) * 100));
                    return h && E ? h = r({}, h, E) : E && (h = E),
                    l.default.createElement(this.props.component, r({}, (e = this.props,
                    t = {},
                    n = Object.keys(e),
                    o = Object.keys(c.propTypes),
                    n.filter(function(e) {
                        return 0 > o.indexOf(e)
                    }).forEach(function(n) {
                        t[n] = e[n]
                    }),
                    t), {
                        className: s,
                        style: h
                    }), i(g))
                }
            }]),
            t
        }(u.Component);
        c.propTypes = {
            component: i.default.any,
            formatValue: i.default.func,
            value: i.default.number,
            initialValue: i.default.number,
            duration: i.default.number,
            frameStyle: i.default.func,
            stepPrecision: i.default.number,
            style: i.default.object,
            className: i.default.string
        },
        c.defaultProps = {
            component: "span",
            formatValue: function(e) {
                return e
            },
            initialValue: 0,
            duration: 300,
            frameStyle: function() {
                return {}
            },
            value: 0
        },
        t.default = c
    },
    40334: function(e, t, n) {
        "use strict";
        var r, o = (r = n(31651)) && r.__esModule ? r : {
            default: r
        };
        e.exports = o.default
    },
    46465: function(e, t, n) {
        "use strict";
        n.d(t, {
            d: function() {
                return d
            },
            f: function() {
                return c
            }
        });
        var r = n(2784)
          , o = n(80586)
          , u = n(90544)
          , l = n(88064)
          , i = n(33401)
          , a = n(55559);
        let s = (0,
        r.createContext)(null);
        function c() {
            let[e,t] = (0,
            r.useState)([]);
            return [e.length > 0 ? e.join(" ") : void 0, (0,
            r.useMemo)(()=>function(e) {
                let n = (0,
                a.z)(e=>(t(t=>[...t, e]),
                ()=>t(t=>{
                    let n = t.slice()
                      , r = n.indexOf(e);
                    return -1 !== r && n.splice(r, 1),
                    n
                }
                )))
                  , o = (0,
                r.useMemo)(()=>({
                    register: n,
                    slot: e.slot,
                    name: e.name,
                    props: e.props
                }), [n, e.slot, e.name, e.props]);
                return r.createElement(s.Provider, {
                    value: o
                }, e.children)
            }
            , [t])]
        }
        let d = Object.assign((0,
        u.yV)(function(e, t) {
            let n = (0,
            o.M)()
              , {id: a=`headlessui-description-${n}`, ...c} = e
              , d = function e() {
                let t = (0,
                r.useContext)(s);
                if (null === t) {
                    let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                    throw Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t
                }
                return t
            }()
              , f = (0,
            i.T)(t);
            (0,
            l.e)(()=>d.register(a), [a, d.register]);
            let p = {
                ref: f,
                ...d.props,
                id: a
            };
            return (0,
            u.sY)({
                ourProps: p,
                theirProps: c,
                slot: d.slot || {},
                defaultTag: "p",
                name: d.name || "Description"
            })
        }), {})
    },
    15198: function(e, t, n) {
        "use strict";
        let r, o;
        n.d(t, {
            V: function() {
                return ea
            }
        });
        var u, l, i, a, s, c = n(2784), d = n.t(c, 2), f = n(3703), p = n(90544), m = n(33401), v = n(99108), h = n(15426), g = n(80586), b = n(76460), E = n(36799), y = n(52929), w = n(55559), P = n(10859), T = n(81061), S = n(70592), O = n(79410), C = n(91554);
        function M(e, t) {
            let n = (0,
            c.useRef)([])
              , r = (0,
            w.z)(e);
            (0,
            c.useEffect)(()=>{
                let e = [...n.current];
                for (let[o,u] of t.entries())
                    if (n.current[o] !== u) {
                        let o = r(t, e);
                        return n.current = t,
                        o
                    }
            }
            , [r, ...t])
        }
        var x = n(58314)
          , N = n(31385);
        function R(e) {
            if (!e)
                return new Set;
            if ("function" == typeof e)
                return new Set(e());
            let t = new Set;
            for (let n of e.current)
                n.current instanceof HTMLElement && t.add(n.current);
            return t
        }
        var F = ((u = F || {})[u.None = 1] = "None",
        u[u.InitialFocus = 2] = "InitialFocus",
        u[u.TabLock = 4] = "TabLock",
        u[u.FocusLock = 8] = "FocusLock",
        u[u.RestoreFocus = 16] = "RestoreFocus",
        u[u.All = 30] = "All",
        u);
        let k = Object.assign((0,
        p.yV)(function(e, t) {
            let n = (0,
            c.useRef)(null)
              , r = (0,
            m.T)(n, t)
              , {initialFocus: o, containers: u, features: l=30, ...i} = e;
            (0,
            b.H)() || (l = 1);
            let a = (0,
            S.i)(n);
            !function({ownerDocument: e}, t) {
                let n = function(e=!0) {
                    let t = (0,
                    c.useRef)(A.slice());
                    return M(([e],[n])=>{
                        !0 === n && !1 === e && (0,
                        C.Y)(()=>{
                            t.current.splice(0)
                        }
                        ),
                        !1 === n && !0 === e && (t.current = A.slice())
                    }
                    , [e, A, t]),
                    (0,
                    w.z)(()=>{
                        var e;
                        return null != (e = t.current.find(e=>null != e && e.isConnected)) ? e : null
                    }
                    )
                }(t);
                M(()=>{
                    t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0,
                    y.C5)(n())
                }
                , [t]),
                (0,
                N.L)(()=>{
                    t && (0,
                    y.C5)(n())
                }
                )
            }({
                ownerDocument: a
            }, !!(16 & l));
            let s = function({ownerDocument: e, container: t, initialFocus: n}, r) {
                let o = (0,
                c.useRef)(null)
                  , u = (0,
                T.t)();
                return M(()=>{
                    if (!r)
                        return;
                    let l = t.current;
                    l && (0,
                    C.Y)(()=>{
                        if (!u.current)
                            return;
                        let t = null == e ? void 0 : e.activeElement;
                        if (null != n && n.current) {
                            if ((null == n ? void 0 : n.current) === t) {
                                o.current = t;
                                return
                            }
                        } else if (l.contains(t)) {
                            o.current = t;
                            return
                        }
                        null != n && n.current ? (0,
                        y.C5)(n.current) : (0,
                        y.jA)(l, y.TO.First) === y.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                        o.current = null == e ? void 0 : e.activeElement
                    }
                    )
                }
                , [r]),
                o
            }({
                ownerDocument: a,
                container: n,
                initialFocus: o
            }, !!(2 & l));
            !function({ownerDocument: e, container: t, containers: n, previousActiveElement: r}, o) {
                let u = (0,
                T.t)();
                (0,
                O.O)(null == e ? void 0 : e.defaultView, "focus", e=>{
                    if (!o || !u.current)
                        return;
                    let l = R(n);
                    t.current instanceof HTMLElement && l.add(t.current);
                    let i = r.current;
                    if (!i)
                        return;
                    let a = e.target;
                    a && a instanceof HTMLElement ? L(l, a) ? (r.current = a,
                    (0,
                    y.C5)(a)) : (e.preventDefault(),
                    e.stopPropagation(),
                    (0,
                    y.C5)(i)) : (0,
                    y.C5)(r.current)
                }
                , !0)
            }({
                ownerDocument: a,
                container: n,
                containers: u,
                previousActiveElement: s
            }, !!(8 & l));
            let d = (0,
            P.l)()
              , v = (0,
            w.z)(e=>{
                let t = n.current;
                t && (0,
                f.E)(d.current, {
                    [P.N.Forwards]: ()=>{
                        (0,
                        y.jA)(t, y.TO.First, {
                            skipElements: [e.relatedTarget]
                        })
                    }
                    ,
                    [P.N.Backwards]: ()=>{
                        (0,
                        y.jA)(t, y.TO.Last, {
                            skipElements: [e.relatedTarget]
                        })
                    }
                })
            }
            )
              , h = (0,
            x.G)()
              , g = (0,
            c.useRef)(!1);
            return c.createElement(c.Fragment, null, !!(4 & l) && c.createElement(E._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: v,
                features: E.A.Focusable
            }), (0,
            p.sY)({
                ourProps: {
                    ref: r,
                    onKeyDown(e) {
                        "Tab" == e.key && (g.current = !0,
                        h.requestAnimationFrame(()=>{
                            g.current = !1
                        }
                        ))
                    },
                    onBlur(e) {
                        let t = R(u);
                        n.current instanceof HTMLElement && t.add(n.current);
                        let r = e.relatedTarget;
                        r instanceof HTMLElement && "true" !== r.dataset.headlessuiFocusGuard && (L(t, r) || (g.current ? (0,
                        y.jA)(n.current, (0,
                        f.E)(d.current, {
                            [P.N.Forwards]: ()=>y.TO.Next,
                            [P.N.Backwards]: ()=>y.TO.Previous
                        }) | y.TO.WrapAround, {
                            relativeTo: e.target
                        }) : e.target instanceof HTMLElement && (0,
                        y.C5)(e.target)))
                    }
                },
                theirProps: i,
                defaultTag: "div",
                name: "FocusTrap"
            }), !!(4 & l) && c.createElement(E._, {
                as: "button",
                type: "button",
                "data-headlessui-focus-guard": !0,
                onFocus: v,
                features: E.A.Focusable
            }))
        }), {
            features: F
        })
          , A = [];
        function L(e, t) {
            for (let n of e)
                if (n.contains(t))
                    return !0;
            return !1
        }
        !function(e) {
            function t() {
                "loading" !== document.readyState && (e(),
                document.removeEventListener("DOMContentLoaded", t))
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t),
            t())
        }(()=>{
            function e(e) {
                e.target instanceof HTMLElement && e.target !== document.body && A[0] !== e.target && (A.unshift(e.target),
                (A = A.filter(e=>null != e && e.isConnected)).splice(10))
            }
            window.addEventListener("click", e, {
                capture: !0
            }),
            window.addEventListener("mousedown", e, {
                capture: !0
            }),
            window.addEventListener("focus", e, {
                capture: !0
            }),
            document.body.addEventListener("click", e, {
                capture: !0
            }),
            document.body.addEventListener("mousedown", e, {
                capture: !0
            }),
            document.body.addEventListener("focus", e, {
                capture: !0
            })
        }
        );
        var _ = n(55577)
          , D = n(16137)
          , I = n(46465)
          , j = n(47215)
          , z = n(88064);
        let H = (0,
        c.createContext)(()=>{}
        );
        H.displayName = "StackContext";
        var V = ((l = V || {})[l.Add = 0] = "Add",
        l[l.Remove = 1] = "Remove",
        l);
        function B({children: e, onUpdate: t, type: n, element: r, enabled: o}) {
            let u = (0,
            c.useContext)(H)
              , l = (0,
            w.z)((...e)=>{
                null == t || t(...e),
                u(...e)
            }
            );
            return (0,
            z.e)(()=>{
                let e = void 0 === o || !0 === o;
                return e && l(0, n, r),
                ()=>{
                    e && l(1, n, r)
                }
            }
            , [l, n, r, o]),
            c.createElement(H.Provider, {
                value: l
            }, e)
        }
        var Y = n(32994);
        let {useState: G, useEffect: W, useLayoutEffect: $, useDebugValue: U} = d;
        "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
        let q = d.useSyncExternalStore;
        var Z = n(6173);
        let J = (i = {
            PUSH(e, t) {
                var n;
                let r = null != (n = this.get(e)) ? n : {
                    doc: e,
                    count: 0,
                    d: (0,
                    Z.k)(),
                    meta: new Set
                };
                return r.count++,
                r.meta.add(t),
                this.set(e, r),
                this
            },
            POP(e, t) {
                let n = this.get(e);
                return n && (n.count--,
                n.meta.delete(t)),
                this
            },
            SCROLL_PREVENT({doc: e, d: t, meta: n}) {
                let r, o;
                let u = {
                    doc: e,
                    d: t,
                    meta: function(e) {
                        let t = {};
                        for (let n of e)
                            Object.assign(t, n(t));
                        return t
                    }(n)
                }
                  , l = [/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0 ? {
                    before() {
                        r = window.pageYOffset
                    },
                    after({doc: e, d: t, meta: n}) {
                        function o(e) {
                            return n.containers.flatMap(e=>e()).some(t=>t.contains(e))
                        }
                        t.microTask(()=>{
                            if ("auto" !== window.getComputedStyle(e.documentElement).scrollBehavior) {
                                let n = (0,
                                Z.k)();
                                n.style(e.documentElement, "scroll-behavior", "auto"),
                                t.add(()=>t.microTask(()=>n.dispose()))
                            }
                            t.style(e.body, "marginTop", `-${r}px`),
                            window.scrollTo(0, 0);
                            let n = null;
                            t.addEventListener(e, "click", t=>{
                                if (t.target instanceof HTMLElement)
                                    try {
                                        let r = t.target.closest("a");
                                        if (!r)
                                            return;
                                        let {hash: u} = new URL(r.href)
                                          , l = e.querySelector(u);
                                        l && !o(l) && (n = l)
                                    } catch {}
                            }
                            , !0),
                            t.addEventListener(e, "touchmove", e=>{
                                e.target instanceof HTMLElement && !o(e.target) && e.preventDefault()
                            }
                            , {
                                passive: !1
                            }),
                            t.add(()=>{
                                window.scrollTo(0, window.pageYOffset + r),
                                n && n.isConnected && (n.scrollIntoView({
                                    block: "nearest"
                                }),
                                n = null)
                            }
                            )
                        }
                        )
                    }
                } : {}, {
                    before({doc: e}) {
                        var t;
                        let n = e.documentElement;
                        o = (null != (t = e.defaultView) ? t : window).innerWidth - n.clientWidth
                    },
                    after({doc: e, d: t}) {
                        let n = e.documentElement
                          , r = o - (n.clientWidth - n.offsetWidth);
                        t.style(n, "paddingRight", `${r}px`)
                    }
                }, {
                    before({doc: e, d: t}) {
                        t.style(e.documentElement, "overflow", "hidden")
                    }
                }];
                l.forEach(({before: e})=>null == e ? void 0 : e(u)),
                l.forEach(({after: e})=>null == e ? void 0 : e(u))
            },
            SCROLL_ALLOW({d: e}) {
                e.dispose()
            },
            TEARDOWN({doc: e}) {
                this.delete(e)
            }
        },
        r = new Map,
        o = new Set,
        {
            getSnapshot: ()=>r,
            subscribe: e=>(o.add(e),
            ()=>o.delete(e)),
            dispatch(e, ...t) {
                let n = i[e].call(r, ...t);
                n && (r = n,
                o.forEach(e=>e()))
            }
        });
        J.subscribe(()=>{
            let e = J.getSnapshot()
              , t = new Map;
            for (let[n] of e)
                t.set(n, n.documentElement.style.overflow);
            for (let n of e.values()) {
                let e = "hidden" === t.get(n.doc)
                  , r = 0 !== n.count;
                (r && !e || !r && e) && J.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
                0 === n.count && J.dispatch("TEARDOWN", n)
            }
        }
        );
        let K = new Map
          , X = new Map;
        function Q(e, t=!0) {
            (0,
            z.e)(()=>{
                var n;
                if (!t)
                    return;
                let r = "function" == typeof e ? e() : e.current;
                if (!r)
                    return;
                let o = null != (n = X.get(r)) ? n : 0;
                return X.set(r, o + 1),
                0 !== o || (K.set(r, {
                    "aria-hidden": r.getAttribute("aria-hidden"),
                    inert: r.inert
                }),
                r.setAttribute("aria-hidden", "true"),
                r.inert = !0),
                function() {
                    var e;
                    if (!r)
                        return;
                    let t = null != (e = X.get(r)) ? e : 1;
                    if (1 === t ? X.delete(r) : X.set(r, t - 1),
                    1 !== t)
                        return;
                    let n = K.get(r);
                    n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]),
                    r.inert = n.inert,
                    K.delete(r))
                }
            }
            , [e, t])
        }
        var ee = n(21638)
          , et = ((a = et || {})[a.Open = 0] = "Open",
        a[a.Closed = 1] = "Closed",
        a)
          , en = ((s = en || {})[s.SetTitleId = 0] = "SetTitleId",
        s);
        let er = {
            0: (e,t)=>e.titleId === t.id ? e : {
                ...e,
                titleId: t.id
            }
        }
          , eo = (0,
        c.createContext)(null);
        function eu(e) {
            let t = (0,
            c.useContext)(eo);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, eu),
                t
            }
            return t
        }
        function el(e, t) {
            return (0,
            f.E)(t.type, er, e, t)
        }
        eo.displayName = "DialogContext";
        let ei = p.AN.RenderStrategy | p.AN.Static
          , ea = Object.assign((0,
        p.yV)(function(e, t) {
            var n;
            let r = (0,
            g.M)()
              , {id: o=`headlessui-dialog-${r}`, open: u, onClose: l, initialFocus: i, __demoMode: a=!1, ...s} = e
              , [d,h] = (0,
            c.useState)(0)
              , E = (0,
            j.oJ)();
            void 0 === u && null !== E && (u = (E & j.ZM.Open) === j.ZM.Open);
            let y = (0,
            c.useRef)(null)
              , P = (0,
            m.T)(y, t)
              , T = (0,
            S.i)(y)
              , C = e.hasOwnProperty("open") || null !== E
              , M = e.hasOwnProperty("onClose");
            if (!C && !M)
                throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
            if (!C)
                throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
            if (!M)
                throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
            if ("boolean" != typeof u)
                throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u}`);
            if ("function" != typeof l)
                throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);
            let x = u ? 0 : 1
              , [N,R] = (0,
            c.useReducer)(el, {
                titleId: null,
                descriptionId: null,
                panelRef: (0,
                c.createRef)()
            })
              , F = (0,
            w.z)(()=>l(!1))
              , A = (0,
            w.z)(e=>R({
                type: 0,
                id: e
            }))
              , L = !!(0,
            b.H)() && !a && 0 === x
              , H = d > 1
              , G = null !== (0,
            c.useContext)(eo)
              , [W,$] = (0,
            _.k)()
              , {resolveContainers: U, mainTreeNodeRef: Z, MainTreeNode: K} = (0,
            ee.v)({
                portals: W,
                defaultContainers: [null != (n = N.panelRef.current) ? n : y.current]
            })
              , X = H ? "parent" : "leaf"
              , et = null !== E && (E & j.ZM.Closing) === j.ZM.Closing
              , en = !G && !et && L;
            Q((0,
            c.useCallback)(()=>{
                var e, t;
                return null != (t = Array.from(null != (e = null == T ? void 0 : T.querySelectorAll("body > *")) ? e : []).find(e=>"headlessui-portal-root" !== e.id && e.contains(Z.current) && e instanceof HTMLElement)) ? t : null
            }
            , [Z]), en);
            let er = !!H || L;
            Q((0,
            c.useCallback)(()=>{
                var e, t;
                return null != (t = Array.from(null != (e = null == T ? void 0 : T.querySelectorAll("[data-headlessui-portal]")) ? e : []).find(e=>e.contains(Z.current) && e instanceof HTMLElement)) ? t : null
            }
            , [Z]), er);
            let eu = !(!L || H);
            (0,
            Y.O)(U, F, eu);
            let ea = !(H || 0 !== x);
            (0,
            O.O)(null == T ? void 0 : T.defaultView, "keydown", e=>{
                ea && (e.defaultPrevented || e.key === v.R.Escape && (e.preventDefault(),
                e.stopPropagation(),
                F()))
            }
            ),
            function(e, t, n=()=>[document.body]) {
                var r;
                let o, u;
                r = e=>{
                    var t;
                    return {
                        containers: [...null != (t = e.containers) ? t : [], n]
                    }
                }
                ,
                o = q(J.subscribe, J.getSnapshot, J.getSnapshot),
                (u = e ? o.get(e) : void 0) && u.count,
                (0,
                z.e)(()=>{
                    if (!(!e || !t))
                        return J.dispatch("PUSH", e, r),
                        ()=>J.dispatch("POP", e, r)
                }
                , [t, e])
            }(T, !(et || 0 !== x || G), U),
            (0,
            c.useEffect)(()=>{
                if (0 !== x || !y.current)
                    return;
                let e = new ResizeObserver(e=>{
                    for (let t of e) {
                        let e = t.target.getBoundingClientRect();
                        0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && F()
                    }
                }
                );
                return e.observe(y.current),
                ()=>e.disconnect()
            }
            , [x, y, F]);
            let[es,ec] = (0,
            I.f)()
              , ed = (0,
            c.useMemo)(()=>[{
                dialogState: x,
                close: F,
                setTitleId: A
            }, N], [x, N, F, A])
              , ef = (0,
            c.useMemo)(()=>({
                open: 0 === x
            }), [x])
              , ep = {
                ref: P,
                id: o,
                role: "dialog",
                "aria-modal": 0 === x || void 0,
                "aria-labelledby": N.titleId,
                "aria-describedby": es
            };
            return c.createElement(B, {
                type: "Dialog",
                enabled: 0 === x,
                element: y,
                onUpdate: (0,
                w.z)((e,t)=>{
                    "Dialog" === t && (0,
                    f.E)(e, {
                        [V.Add]: ()=>h(e=>e + 1),
                        [V.Remove]: ()=>h(e=>e - 1)
                    })
                }
                )
            }, c.createElement(D.O, {
                force: !0
            }, c.createElement(_.h, null, c.createElement(eo.Provider, {
                value: ed
            }, c.createElement(_.h.Group, {
                target: y
            }, c.createElement(D.O, {
                force: !1
            }, c.createElement(ec, {
                slot: ef,
                name: "Dialog.Description"
            }, c.createElement(k, {
                initialFocus: i,
                containers: U,
                features: L ? (0,
                f.E)(X, {
                    parent: k.features.RestoreFocus,
                    leaf: k.features.All & ~k.features.FocusLock
                }) : k.features.None
            }, c.createElement($, null, (0,
            p.sY)({
                ourProps: ep,
                theirProps: s,
                slot: ef,
                defaultTag: "div",
                features: ei,
                visible: 0 === x,
                name: "Dialog"
            }))))))))), c.createElement(K, null))
        }), {
            Backdrop: (0,
            p.yV)(function(e, t) {
                let n = (0,
                g.M)()
                  , {id: r=`headlessui-dialog-backdrop-${n}`, ...o} = e
                  , [{dialogState: u},l] = eu("Dialog.Backdrop")
                  , i = (0,
                m.T)(t);
                (0,
                c.useEffect)(()=>{
                    if (null === l.panelRef.current)
                        throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                }
                , [l.panelRef]);
                let a = (0,
                c.useMemo)(()=>({
                    open: 0 === u
                }), [u]);
                return c.createElement(D.O, {
                    force: !0
                }, c.createElement(_.h, null, (0,
                p.sY)({
                    ourProps: {
                        ref: i,
                        id: r,
                        "aria-hidden": !0
                    },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Backdrop"
                })))
            }),
            Panel: (0,
            p.yV)(function(e, t) {
                let n = (0,
                g.M)()
                  , {id: r=`headlessui-dialog-panel-${n}`, ...o} = e
                  , [{dialogState: u},l] = eu("Dialog.Panel")
                  , i = (0,
                m.T)(t, l.panelRef)
                  , a = (0,
                c.useMemo)(()=>({
                    open: 0 === u
                }), [u])
                  , s = (0,
                w.z)(e=>{
                    e.stopPropagation()
                }
                );
                return (0,
                p.sY)({
                    ourProps: {
                        ref: i,
                        id: r,
                        onClick: s
                    },
                    theirProps: o,
                    slot: a,
                    defaultTag: "div",
                    name: "Dialog.Panel"
                })
            }),
            Overlay: (0,
            p.yV)(function(e, t) {
                let n = (0,
                g.M)()
                  , {id: r=`headlessui-dialog-overlay-${n}`, ...o} = e
                  , [{dialogState: u, close: l}] = eu("Dialog.Overlay")
                  , i = (0,
                m.T)(t)
                  , a = (0,
                w.z)(e=>{
                    if (e.target === e.currentTarget) {
                        if ((0,
                        h.P)(e.currentTarget))
                            return e.preventDefault();
                        e.preventDefault(),
                        e.stopPropagation(),
                        l()
                    }
                }
                )
                  , s = (0,
                c.useMemo)(()=>({
                    open: 0 === u
                }), [u]);
                return (0,
                p.sY)({
                    ourProps: {
                        ref: i,
                        id: r,
                        "aria-hidden": !0,
                        onClick: a
                    },
                    theirProps: o,
                    slot: s,
                    defaultTag: "div",
                    name: "Dialog.Overlay"
                })
            }),
            Title: (0,
            p.yV)(function(e, t) {
                let n = (0,
                g.M)()
                  , {id: r=`headlessui-dialog-title-${n}`, ...o} = e
                  , [{dialogState: u, setTitleId: l}] = eu("Dialog.Title")
                  , i = (0,
                m.T)(t);
                (0,
                c.useEffect)(()=>(l(r),
                ()=>l(null)), [r, l]);
                let a = (0,
                c.useMemo)(()=>({
                    open: 0 === u
                }), [u]);
                return (0,
                p.sY)({
                    ourProps: {
                        ref: i,
                        id: r
                    },
                    theirProps: o,
                    slot: a,
                    defaultTag: "h2",
                    name: "Dialog.Title"
                })
            }),
            Description: I.d
        })
    },
    99108: function(e, t, n) {
        "use strict";
        n.d(t, {
            R: function() {
                return o
            }
        });
        var r, o = ((r = o || {}).Space = " ",
        r.Enter = "Enter",
        r.Escape = "Escape",
        r.Backspace = "Backspace",
        r.Delete = "Delete",
        r.ArrowLeft = "ArrowLeft",
        r.ArrowUp = "ArrowUp",
        r.ArrowRight = "ArrowRight",
        r.ArrowDown = "ArrowDown",
        r.Home = "Home",
        r.End = "End",
        r.PageUp = "PageUp",
        r.PageDown = "PageDown",
        r.Tab = "Tab",
        r)
    },
    43913: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return z
            }
        });
        var r, o, u = n(2784), l = n(3703), i = n(90544), a = n(33401), s = n(80586), c = n(99108), d = n(15426), f = n(52929), p = n(47215), m = n(37352), v = n(32994), h = n(29833), g = n(70592), b = n(79410), E = n(36799), y = n(55559), w = n(10859), P = n(61742), T = n(88064), S = n(21638), O = n(55577), C = ((r = C || {})[r.Open = 0] = "Open",
        r[r.Closed = 1] = "Closed",
        r), M = ((o = M || {})[o.TogglePopover = 0] = "TogglePopover",
        o[o.ClosePopover = 1] = "ClosePopover",
        o[o.SetButton = 2] = "SetButton",
        o[o.SetButtonId = 3] = "SetButtonId",
        o[o.SetPanel = 4] = "SetPanel",
        o[o.SetPanelId = 5] = "SetPanelId",
        o);
        let x = {
            0: e=>{
                let t = {
                    ...e,
                    popoverState: (0,
                    l.E)(e.popoverState, {
                        0: 1,
                        1: 0
                    })
                };
                return 0 === t.popoverState && (t.__demoMode = !1),
                t
            }
            ,
            1: e=>1 === e.popoverState ? e : {
                ...e,
                popoverState: 1
            },
            2: (e,t)=>e.button === t.button ? e : {
                ...e,
                button: t.button
            },
            3: (e,t)=>e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            },
            4: (e,t)=>e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            },
            5: (e,t)=>e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
          , N = (0,
        u.createContext)(null);
        function R(e) {
            let t = (0,
            u.useContext)(N);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, R),
                t
            }
            return t
        }
        N.displayName = "PopoverContext";
        let F = (0,
        u.createContext)(null);
        function k(e) {
            let t = (0,
            u.useContext)(F);
            if (null === t) {
                let t = Error(`<${e} /> is missing a parent <Popover /> component.`);
                throw Error.captureStackTrace && Error.captureStackTrace(t, k),
                t
            }
            return t
        }
        F.displayName = "PopoverAPIContext";
        let A = (0,
        u.createContext)(null);
        function L() {
            return (0,
            u.useContext)(A)
        }
        A.displayName = "PopoverGroupContext";
        let _ = (0,
        u.createContext)(null);
        function D(e, t) {
            return (0,
            l.E)(t.type, x, e, t)
        }
        _.displayName = "PopoverPanelContext";
        let I = i.AN.RenderStrategy | i.AN.Static
          , j = i.AN.RenderStrategy | i.AN.Static
          , z = Object.assign((0,
        i.yV)(function(e, t) {
            var n;
            let {__demoMode: r=!1, ...o} = e
              , s = (0,
            u.useRef)(null)
              , c = (0,
            a.T)(t, (0,
            a.h)(e=>{
                s.current = e
            }
            ))
              , d = (0,
            u.useRef)([])
              , m = (0,
            u.useReducer)(D, {
                __demoMode: r,
                popoverState: r ? 0 : 1,
                buttons: d,
                button: null,
                buttonId: null,
                panel: null,
                panelId: null,
                beforePanelSentinel: (0,
                u.createRef)(),
                afterPanelSentinel: (0,
                u.createRef)()
            })
              , [{popoverState: h, button: E, buttonId: w, panel: T, panelId: C, beforePanelSentinel: M, afterPanelSentinel: x},R] = m
              , k = (0,
            g.i)(null != (n = s.current) ? n : E)
              , A = (0,
            u.useMemo)(()=>{
                if (!E || !T)
                    return !1;
                for (let e of document.querySelectorAll("body > *"))
                    if (Number(null == e ? void 0 : e.contains(E)) ^ Number(null == e ? void 0 : e.contains(T)))
                        return !0;
                let e = (0,
                f.GO)()
                  , t = e.indexOf(E)
                  , n = (t + e.length - 1) % e.length
                  , r = (t + 1) % e.length
                  , o = e[n]
                  , u = e[r];
                return !T.contains(o) && !T.contains(u)
            }
            , [E, T])
              , I = (0,
            P.E)(w)
              , j = (0,
            P.E)(C)
              , z = (0,
            u.useMemo)(()=>({
                buttonId: I,
                panelId: j,
                close: ()=>R({
                    type: 1
                })
            }), [I, j, R])
              , H = L()
              , V = null == H ? void 0 : H.registerPopover
              , B = (0,
            y.z)(()=>{
                var e;
                return null != (e = null == H ? void 0 : H.isFocusWithinPopoverGroup()) ? e : (null == k ? void 0 : k.activeElement) && ((null == E ? void 0 : E.contains(k.activeElement)) || (null == T ? void 0 : T.contains(k.activeElement)))
            }
            );
            (0,
            u.useEffect)(()=>null == V ? void 0 : V(z), [V, z]);
            let[Y,G] = (0,
            O.k)()
              , W = (0,
            S.v)({
                mainTreeNodeRef: null == H ? void 0 : H.mainTreeNodeRef,
                portals: Y,
                defaultContainers: [E, T]
            });
            (0,
            b.O)(null == k ? void 0 : k.defaultView, "focus", e=>{
                var t, n, r, o;
                e.target !== window && e.target instanceof HTMLElement && 0 === h && (B() || E && T && (W.contains(e.target) || null != (n = null == (t = M.current) ? void 0 : t.contains) && n.call(t, e.target) || null != (o = null == (r = x.current) ? void 0 : r.contains) && o.call(r, e.target) || R({
                    type: 1
                })))
            }
            , !0),
            (0,
            v.O)(W.resolveContainers, (e,t)=>{
                R({
                    type: 1
                }),
                (0,
                f.sP)(t, f.tJ.Loose) || (e.preventDefault(),
                null == E || E.focus())
            }
            , 0 === h);
            let $ = (0,
            y.z)(e=>{
                R({
                    type: 1
                });
                let t = e ? e instanceof HTMLElement ? e : "current"in e && e.current instanceof HTMLElement ? e.current : E : E;
                null == t || t.focus()
            }
            )
              , U = (0,
            u.useMemo)(()=>({
                close: $,
                isPortalled: A
            }), [$, A])
              , q = (0,
            u.useMemo)(()=>({
                open: 0 === h,
                close: $
            }), [h, $]);
            return u.createElement(_.Provider, {
                value: null
            }, u.createElement(N.Provider, {
                value: m
            }, u.createElement(F.Provider, {
                value: U
            }, u.createElement(p.up, {
                value: (0,
                l.E)(h, {
                    0: p.ZM.Open,
                    1: p.ZM.Closed
                })
            }, u.createElement(G, null, (0,
            i.sY)({
                ourProps: {
                    ref: c
                },
                theirProps: o,
                slot: q,
                defaultTag: "div",
                name: "Popover"
            }), u.createElement(W.MainTreeNode, null))))))
        }), {
            Button: (0,
            i.yV)(function(e, t) {
                let n = (0,
                s.M)()
                  , {id: r=`headlessui-popover-button-${n}`, ...o} = e
                  , [p,v] = R("Popover.Button")
                  , {isPortalled: h} = k("Popover.Button")
                  , b = (0,
                u.useRef)(null)
                  , P = `headlessui-focus-sentinel-${(0,
                s.M)()}`
                  , T = L()
                  , S = null == T ? void 0 : T.closeOthers
                  , O = null !== (0,
                u.useContext)(_);
                (0,
                u.useEffect)(()=>{
                    if (!O)
                        return v({
                            type: 3,
                            buttonId: r
                        }),
                        ()=>{
                            v({
                                type: 3,
                                buttonId: null
                            })
                        }
                }
                , [O, r, v]);
                let[C] = (0,
                u.useState)(()=>Symbol())
                  , M = (0,
                a.T)(b, t, O ? null : e=>{
                    if (e)
                        p.buttons.current.push(C);
                    else {
                        let e = p.buttons.current.indexOf(C);
                        -1 !== e && p.buttons.current.splice(e, 1)
                    }
                    p.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),
                    e && v({
                        type: 2,
                        button: e
                    })
                }
                )
                  , x = (0,
                a.T)(b, t)
                  , N = (0,
                g.i)(b)
                  , F = (0,
                y.z)(e=>{
                    var t, n, r;
                    if (O) {
                        if (1 === p.popoverState)
                            return;
                        switch (e.key) {
                        case c.R.Space:
                        case c.R.Enter:
                            e.preventDefault(),
                            null == (n = (t = e.target).click) || n.call(t),
                            v({
                                type: 1
                            }),
                            null == (r = p.button) || r.focus()
                        }
                    } else
                        switch (e.key) {
                        case c.R.Space:
                        case c.R.Enter:
                            e.preventDefault(),
                            e.stopPropagation(),
                            1 === p.popoverState && (null == S || S(p.buttonId)),
                            v({
                                type: 0
                            });
                            break;
                        case c.R.Escape:
                            if (0 !== p.popoverState)
                                return null == S ? void 0 : S(p.buttonId);
                            if (!b.current || null != N && N.activeElement && !b.current.contains(N.activeElement))
                                return;
                            e.preventDefault(),
                            e.stopPropagation(),
                            v({
                                type: 1
                            })
                        }
                }
                )
                  , A = (0,
                y.z)(e=>{
                    O || e.key === c.R.Space && e.preventDefault()
                }
                )
                  , D = (0,
                y.z)(t=>{
                    var n, r;
                    (0,
                    d.P)(t.currentTarget) || e.disabled || (O ? (v({
                        type: 1
                    }),
                    null == (n = p.button) || n.focus()) : (t.preventDefault(),
                    t.stopPropagation(),
                    1 === p.popoverState && (null == S || S(p.buttonId)),
                    v({
                        type: 0
                    }),
                    null == (r = p.button) || r.focus()))
                }
                )
                  , I = (0,
                y.z)(e=>{
                    e.preventDefault(),
                    e.stopPropagation()
                }
                )
                  , j = 0 === p.popoverState
                  , z = (0,
                u.useMemo)(()=>({
                    open: j
                }), [j])
                  , H = (0,
                m.f)(e, b)
                  , V = O ? {
                    ref: x,
                    type: H,
                    onKeyDown: F,
                    onClick: D
                } : {
                    ref: M,
                    id: p.buttonId,
                    type: H,
                    "aria-expanded": 0 === p.popoverState,
                    "aria-controls": p.panel ? p.panelId : void 0,
                    onKeyDown: F,
                    onKeyUp: A,
                    onClick: D,
                    onMouseDown: I
                }
                  , B = (0,
                w.l)()
                  , Y = (0,
                y.z)(()=>{
                    let e = p.panel;
                    e && (0,
                    l.E)(B.current, {
                        [w.N.Forwards]: ()=>(0,
                        f.jA)(e, f.TO.First),
                        [w.N.Backwards]: ()=>(0,
                        f.jA)(e, f.TO.Last)
                    }) === f.fE.Error && (0,
                    f.jA)((0,
                    f.GO)().filter(e=>"true" !== e.dataset.headlessuiFocusGuard), (0,
                    l.E)(B.current, {
                        [w.N.Forwards]: f.TO.Next,
                        [w.N.Backwards]: f.TO.Previous
                    }), {
                        relativeTo: p.button
                    })
                }
                );
                return u.createElement(u.Fragment, null, (0,
                i.sY)({
                    ourProps: V,
                    theirProps: o,
                    slot: z,
                    defaultTag: "button",
                    name: "Popover.Button"
                }), j && !O && h && u.createElement(E._, {
                    id: P,
                    features: E.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: Y
                }))
            }),
            Overlay: (0,
            i.yV)(function(e, t) {
                let n = (0,
                s.M)()
                  , {id: r=`headlessui-popover-overlay-${n}`, ...o} = e
                  , [{popoverState: l},c] = R("Popover.Overlay")
                  , f = (0,
                a.T)(t)
                  , m = (0,
                p.oJ)()
                  , v = null !== m ? (m & p.ZM.Open) === p.ZM.Open : 0 === l
                  , h = (0,
                y.z)(e=>{
                    if ((0,
                    d.P)(e.currentTarget))
                        return e.preventDefault();
                    c({
                        type: 1
                    })
                }
                )
                  , g = (0,
                u.useMemo)(()=>({
                    open: 0 === l
                }), [l]);
                return (0,
                i.sY)({
                    ourProps: {
                        ref: f,
                        id: r,
                        "aria-hidden": !0,
                        onClick: h
                    },
                    theirProps: o,
                    slot: g,
                    defaultTag: "div",
                    features: I,
                    visible: v,
                    name: "Popover.Overlay"
                })
            }),
            Panel: (0,
            i.yV)(function(e, t) {
                let n = (0,
                s.M)()
                  , {id: r=`headlessui-popover-panel-${n}`, focus: o=!1, ...d} = e
                  , [m,v] = R("Popover.Panel")
                  , {close: h, isPortalled: b} = k("Popover.Panel")
                  , P = `headlessui-focus-sentinel-before-${(0,
                s.M)()}`
                  , S = `headlessui-focus-sentinel-after-${(0,
                s.M)()}`
                  , O = (0,
                u.useRef)(null)
                  , C = (0,
                a.T)(O, t, e=>{
                    v({
                        type: 4,
                        panel: e
                    })
                }
                )
                  , M = (0,
                g.i)(O);
                (0,
                T.e)(()=>(v({
                    type: 5,
                    panelId: r
                }),
                ()=>{
                    v({
                        type: 5,
                        panelId: null
                    })
                }
                ), [r, v]);
                let x = (0,
                p.oJ)()
                  , N = null !== x ? (x & p.ZM.Open) === p.ZM.Open : 0 === m.popoverState
                  , F = (0,
                y.z)(e=>{
                    var t;
                    if (e.key === c.R.Escape) {
                        if (0 !== m.popoverState || !O.current || null != M && M.activeElement && !O.current.contains(M.activeElement))
                            return;
                        e.preventDefault(),
                        e.stopPropagation(),
                        v({
                            type: 1
                        }),
                        null == (t = m.button) || t.focus()
                    }
                }
                );
                (0,
                u.useEffect)(()=>{
                    var t;
                    e.static || 1 === m.popoverState && (null == (t = e.unmount) || t) && v({
                        type: 4,
                        panel: null
                    })
                }
                , [m.popoverState, e.unmount, e.static, v]),
                (0,
                u.useEffect)(()=>{
                    if (m.__demoMode || !o || 0 !== m.popoverState || !O.current)
                        return;
                    let e = null == M ? void 0 : M.activeElement;
                    O.current.contains(e) || (0,
                    f.jA)(O.current, f.TO.First)
                }
                , [m.__demoMode, o, O, m.popoverState]);
                let A = (0,
                u.useMemo)(()=>({
                    open: 0 === m.popoverState,
                    close: h
                }), [m, h])
                  , L = {
                    ref: C,
                    id: r,
                    onKeyDown: F,
                    onBlur: o && 0 === m.popoverState ? e=>{
                        var t, n, r, o, u;
                        let l = e.relatedTarget;
                        l && O.current && (null != (t = O.current) && t.contains(l) || (v({
                            type: 1
                        }),
                        (null != (r = null == (n = m.beforePanelSentinel.current) ? void 0 : n.contains) && r.call(n, l) || null != (u = null == (o = m.afterPanelSentinel.current) ? void 0 : o.contains) && u.call(o, l)) && l.focus({
                            preventScroll: !0
                        })))
                    }
                    : void 0,
                    tabIndex: -1
                }
                  , D = (0,
                w.l)()
                  , I = (0,
                y.z)(()=>{
                    let e = O.current;
                    e && (0,
                    l.E)(D.current, {
                        [w.N.Forwards]: ()=>{
                            var t;
                            (0,
                            f.jA)(e, f.TO.First) === f.fE.Error && (null == (t = m.afterPanelSentinel.current) || t.focus())
                        }
                        ,
                        [w.N.Backwards]: ()=>{
                            var e;
                            null == (e = m.button) || e.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                )
                  , z = (0,
                y.z)(()=>{
                    let e = O.current;
                    e && (0,
                    l.E)(D.current, {
                        [w.N.Forwards]: ()=>{
                            var e;
                            if (!m.button)
                                return;
                            let t = (0,
                            f.GO)()
                              , n = t.indexOf(m.button)
                              , r = t.slice(0, n + 1)
                              , o = [...t.slice(n + 1), ...r];
                            for (let t of o.slice())
                                if ("true" === t.dataset.headlessuiFocusGuard || null != (e = m.panel) && e.contains(t)) {
                                    let e = o.indexOf(t);
                                    -1 !== e && o.splice(e, 1)
                                }
                            (0,
                            f.jA)(o, f.TO.First, {
                                sorted: !1
                            })
                        }
                        ,
                        [w.N.Backwards]: ()=>{
                            var t;
                            (0,
                            f.jA)(e, f.TO.Previous) === f.fE.Error && (null == (t = m.button) || t.focus())
                        }
                    })
                }
                );
                return u.createElement(_.Provider, {
                    value: r
                }, N && b && u.createElement(E._, {
                    id: P,
                    ref: m.beforePanelSentinel,
                    features: E.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: I
                }), (0,
                i.sY)({
                    ourProps: L,
                    theirProps: d,
                    slot: A,
                    defaultTag: "div",
                    features: j,
                    visible: N,
                    name: "Popover.Panel"
                }), N && b && u.createElement(E._, {
                    id: S,
                    ref: m.afterPanelSentinel,
                    features: E.A.Focusable,
                    "data-headlessui-focus-guard": !0,
                    as: "button",
                    type: "button",
                    onFocus: z
                }))
            }),
            Group: (0,
            i.yV)(function(e, t) {
                let n = (0,
                u.useRef)(null)
                  , r = (0,
                a.T)(n, t)
                  , [o,l] = (0,
                u.useState)([])
                  , s = (0,
                S.H)()
                  , c = (0,
                y.z)(e=>{
                    l(t=>{
                        let n = t.indexOf(e);
                        if (-1 !== n) {
                            let e = t.slice();
                            return e.splice(n, 1),
                            e
                        }
                        return t
                    }
                    )
                }
                )
                  , d = (0,
                y.z)(e=>(l(t=>[...t, e]),
                ()=>c(e)))
                  , f = (0,
                y.z)(()=>{
                    var e;
                    let t = (0,
                    h.r)(n);
                    if (!t)
                        return !1;
                    let r = t.activeElement;
                    return !!(null != (e = n.current) && e.contains(r)) || o.some(e=>{
                        var n, o;
                        return (null == (n = t.getElementById(e.buttonId.current)) ? void 0 : n.contains(r)) || (null == (o = t.getElementById(e.panelId.current)) ? void 0 : o.contains(r))
                    }
                    )
                }
                )
                  , p = (0,
                y.z)(e=>{
                    for (let t of o)
                        t.buttonId.current !== e && t.close()
                }
                )
                  , m = (0,
                u.useMemo)(()=>({
                    registerPopover: d,
                    unregisterPopover: c,
                    isFocusWithinPopoverGroup: f,
                    closeOthers: p,
                    mainTreeNodeRef: s.mainTreeNodeRef
                }), [d, c, f, p, s.mainTreeNodeRef])
                  , v = (0,
                u.useMemo)(()=>({}), []);
                return u.createElement(A.Provider, {
                    value: m
                }, (0,
                i.sY)({
                    ourProps: {
                        ref: r
                    },
                    theirProps: e,
                    slot: v,
                    defaultTag: "div",
                    name: "Popover.Group"
                }), u.createElement(s.MainTreeNode, null))
            })
        })
    },
    55577: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return E
            },
            k: function() {
                return b
            }
        });
        var r = n(2784)
          , o = n(28316)
          , u = n(90544)
          , l = n(88064)
          , i = n(16137)
          , a = n(76460)
          , s = n(33401)
          , c = n(31385)
          , d = n(70592)
          , f = n(64727)
          , p = n(55559);
        let m = r.Fragment
          , v = r.Fragment
          , h = (0,
        r.createContext)(null)
          , g = (0,
        r.createContext)(null);
        function b() {
            let e = (0,
            r.useContext)(g)
              , t = (0,
            r.useRef)([])
              , n = (0,
            p.z)(n=>(t.current.push(n),
            e && e.register(n),
            ()=>o(n)))
              , o = (0,
            p.z)(n=>{
                let r = t.current.indexOf(n);
                -1 !== r && t.current.splice(r, 1),
                e && e.unregister(n)
            }
            )
              , u = (0,
            r.useMemo)(()=>({
                register: n,
                unregister: o,
                portals: t
            }), [n, o, t]);
            return [t, (0,
            r.useMemo)(()=>function({children: e}) {
                return r.createElement(g.Provider, {
                    value: u
                }, e)
            }
            , [u])]
        }
        let E = Object.assign((0,
        u.yV)(function(e, t) {
            let n = (0,
            r.useRef)(null)
              , p = (0,
            s.T)((0,
            s.h)(e=>{
                n.current = e
            }
            ), t)
              , v = (0,
            d.i)(n)
              , b = function(e) {
                let t = (0,
                i.n)()
                  , n = (0,
                r.useContext)(h)
                  , o = (0,
                d.i)(e)
                  , [u,l] = (0,
                r.useState)(()=>{
                    if (!t && null !== n || f.O.isServer)
                        return null;
                    let e = null == o ? void 0 : o.getElementById("headlessui-portal-root");
                    if (e)
                        return e;
                    if (null === o)
                        return null;
                    let r = o.createElement("div");
                    return r.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(r)
                }
                );
                return (0,
                r.useEffect)(()=>{
                    null !== u && (null != o && o.body.contains(u) || null == o || o.body.appendChild(u))
                }
                , [u, o]),
                (0,
                r.useEffect)(()=>{
                    t || null !== n && l(n.current)
                }
                , [n, l, t]),
                u
            }(n)
              , [E] = (0,
            r.useState)(()=>{
                var e;
                return f.O.isServer ? null : null != (e = null == v ? void 0 : v.createElement("div")) ? e : null
            }
            )
              , y = (0,
            r.useContext)(g)
              , w = (0,
            a.H)();
            return (0,
            l.e)(()=>{
                !b || !E || b.contains(E) || (E.setAttribute("data-headlessui-portal", ""),
                b.appendChild(E))
            }
            , [b, E]),
            (0,
            l.e)(()=>{
                if (E && y)
                    return y.register(E)
            }
            , [y, E]),
            (0,
            c.L)(()=>{
                var e;
                b && E && (E instanceof Node && b.contains(E) && b.removeChild(E),
                b.childNodes.length <= 0 && (null == (e = b.parentElement) || e.removeChild(b)))
            }
            ),
            w && b && E ? (0,
            o.createPortal)((0,
            u.sY)({
                ourProps: {
                    ref: p
                },
                theirProps: e,
                defaultTag: m,
                name: "Portal"
            }), E) : null
        }), {
            Group: (0,
            u.yV)(function(e, t) {
                let {target: n, ...o} = e
                  , l = {
                    ref: (0,
                    s.T)(t)
                };
                return r.createElement(h.Provider, {
                    value: n
                }, (0,
                u.sY)({
                    ourProps: l,
                    theirProps: o,
                    defaultTag: v,
                    name: "Popover.Group"
                }))
            })
        })
    },
    49442: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return k
            }
        });
        var r, o = n(2784), u = n(90544), l = n(47215), i = n(3703), a = n(81061), s = n(88064), c = n(61742), d = n(76460), f = n(33401), p = n(6173);
        function m(e, ...t) {
            e && t.length > 0 && e.classList.add(...t)
        }
        function v(e, ...t) {
            e && t.length > 0 && e.classList.remove(...t)
        }
        var h = n(58314)
          , g = n(55559)
          , b = n(94020);
        function E(e="") {
            return e.split(" ").filter(e=>e.trim().length > 1)
        }
        let y = (0,
        o.createContext)(null);
        y.displayName = "TransitionContext";
        var w = ((r = w || {}).Visible = "visible",
        r.Hidden = "hidden",
        r);
        let P = (0,
        o.createContext)(null);
        function T(e) {
            return "children"in e ? T(e.children) : e.current.filter(({el: e})=>null !== e.current).filter(({state: e})=>"visible" === e).length > 0
        }
        function S(e, t) {
            let n = (0,
            c.E)(e)
              , r = (0,
            o.useRef)([])
              , l = (0,
            a.t)()
              , s = (0,
            h.G)()
              , d = (0,
            g.z)((e,t=u.l4.Hidden)=>{
                let o = r.current.findIndex(({el: t})=>t === e);
                -1 !== o && ((0,
                i.E)(t, {
                    [u.l4.Unmount]() {
                        r.current.splice(o, 1)
                    },
                    [u.l4.Hidden]() {
                        r.current[o].state = "hidden"
                    }
                }),
                s.microTask(()=>{
                    var e;
                    !T(r) && l.current && (null == (e = n.current) || e.call(n))
                }
                ))
            }
            )
              , f = (0,
            g.z)(e=>{
                let t = r.current.find(({el: t})=>t === e);
                return t ? "visible" !== t.state && (t.state = "visible") : r.current.push({
                    el: e,
                    state: "visible"
                }),
                ()=>d(e, u.l4.Unmount)
            }
            )
              , p = (0,
            o.useRef)([])
              , m = (0,
            o.useRef)(Promise.resolve())
              , v = (0,
            o.useRef)({
                enter: [],
                leave: [],
                idle: []
            })
              , b = (0,
            g.z)((e,n,r)=>{
                p.current.splice(0),
                t && (t.chains.current[n] = t.chains.current[n].filter(([t])=>t !== e)),
                null == t || t.chains.current[n].push([e, new Promise(e=>{
                    p.current.push(e)
                }
                )]),
                null == t || t.chains.current[n].push([e, new Promise(e=>{
                    Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())
                }
                )]),
                "enter" === n ? m.current = m.current.then(()=>null == t ? void 0 : t.wait.current).then(()=>r(n)) : r(n)
            }
            )
              , E = (0,
            g.z)((e,t,n)=>{
                Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{
                    var e;
                    null == (e = p.current.shift()) || e()
                }
                ).then(()=>n(t))
            }
            );
            return (0,
            o.useMemo)(()=>({
                children: r,
                register: f,
                unregister: d,
                onStart: b,
                onStop: E,
                wait: m,
                chains: v
            }), [f, d, r, b, E, v, m])
        }
        function O() {}
        P.displayName = "NestingContext";
        let C = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function M(e) {
            var t;
            let n = {};
            for (let r of C)
                n[r] = null != (t = e[r]) ? t : O;
            return n
        }
        let x = u.AN.RenderStrategy
          , N = (0,
        u.yV)(function(e, t) {
            let {show: n, appear: r=!1, unmount: i=!0, ...a} = e
              , c = (0,
            o.useRef)(null)
              , p = (0,
            f.T)(c, t);
            (0,
            d.H)();
            let m = (0,
            l.oJ)();
            if (void 0 === n && null !== m && (n = (m & l.ZM.Open) === l.ZM.Open),
            ![!0, !1].includes(n))
                throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            let[v,h] = (0,
            o.useState)(n ? "visible" : "hidden")
              , b = S(()=>{
                h("hidden")
            }
            )
              , [E,w] = (0,
            o.useState)(!0)
              , O = (0,
            o.useRef)([n]);
            (0,
            s.e)(()=>{
                !1 !== E && O.current[O.current.length - 1] !== n && (O.current.push(n),
                w(!1))
            }
            , [O, n]);
            let C = (0,
            o.useMemo)(()=>({
                show: n,
                appear: r,
                initial: E
            }), [n, r, E]);
            (0,
            o.useEffect)(()=>{
                if (n)
                    h("visible");
                else if (T(b)) {
                    let e = c.current;
                    if (!e)
                        return;
                    let t = e.getBoundingClientRect();
                    0 === t.x && 0 === t.y && 0 === t.width && 0 === t.height && h("hidden")
                } else
                    h("hidden")
            }
            , [n, b]);
            let M = {
                unmount: i
            }
              , N = (0,
            g.z)(()=>{
                var t;
                E && w(!1),
                null == (t = e.beforeEnter) || t.call(e)
            }
            )
              , F = (0,
            g.z)(()=>{
                var t;
                E && w(!1),
                null == (t = e.beforeLeave) || t.call(e)
            }
            );
            return o.createElement(P.Provider, {
                value: b
            }, o.createElement(y.Provider, {
                value: C
            }, (0,
            u.sY)({
                ourProps: {
                    ...M,
                    as: o.Fragment,
                    children: o.createElement(R, {
                        ref: p,
                        ...M,
                        ...a,
                        beforeEnter: N,
                        beforeLeave: F
                    })
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: x,
                visible: "visible" === v,
                name: "Transition"
            })))
        })
          , R = (0,
        u.yV)(function(e, t) {
            var n, r, w;
            let O;
            let {beforeEnter: C, afterEnter: N, beforeLeave: R, afterLeave: F, enter: k, enterFrom: A, enterTo: L, entered: _, leave: D, leaveFrom: I, leaveTo: j, ...z} = e
              , H = (0,
            o.useRef)(null)
              , V = (0,
            f.T)(H, t)
              , B = null == (n = z.unmount) || n ? u.l4.Unmount : u.l4.Hidden
              , {show: Y, appear: G, initial: W} = function() {
                let e = (0,
                o.useContext)(y);
                if (null === e)
                    throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }()
              , [$,U] = (0,
            o.useState)(Y ? "visible" : "hidden")
              , q = function() {
                let e = (0,
                o.useContext)(P);
                if (null === e)
                    throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return e
            }()
              , {register: Z, unregister: J} = q;
            (0,
            o.useEffect)(()=>Z(H), [Z, H]),
            (0,
            o.useEffect)(()=>{
                if (B === u.l4.Hidden && H.current) {
                    if (Y && "visible" !== $) {
                        U("visible");
                        return
                    }
                    return (0,
                    i.E)($, {
                        hidden: ()=>J(H),
                        visible: ()=>Z(H)
                    })
                }
            }
            , [$, H, Z, J, Y, B]);
            let K = (0,
            c.E)({
                base: E(z.className),
                enter: E(k),
                enterFrom: E(A),
                enterTo: E(L),
                entered: E(_),
                leave: E(D),
                leaveFrom: E(I),
                leaveTo: E(j)
            })
              , X = (w = {
                beforeEnter: C,
                afterEnter: N,
                beforeLeave: R,
                afterLeave: F
            },
            O = (0,
            o.useRef)(M(w)),
            (0,
            o.useEffect)(()=>{
                O.current = M(w)
            }
            , [w]),
            O)
              , Q = (0,
            d.H)();
            (0,
            o.useEffect)(()=>{
                if (Q && "visible" === $ && null === H.current)
                    throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }
            , [H, $, Q]);
            let ee = G && Y && W
              , et = Q && (!W || G) ? Y ? "enter" : "leave" : "idle"
              , en = function(e=0) {
                let[t,n] = (0,
                o.useState)(e)
                  , r = (0,
                a.t)()
                  , u = (0,
                o.useCallback)(e=>{
                    r.current && n(t=>t | e)
                }
                , [t, r])
                  , l = (0,
                o.useCallback)(e=>!!(t & e), [t]);
                return {
                    flags: t,
                    addFlag: u,
                    hasFlag: l,
                    removeFlag: (0,
                    o.useCallback)(e=>{
                        r.current && n(t=>t & ~e)
                    }
                    , [n, r]),
                    toggleFlag: (0,
                    o.useCallback)(e=>{
                        r.current && n(t=>t ^ e)
                    }
                    , [n])
                }
            }(0)
              , er = (0,
            g.z)(e=>(0,
            i.E)(e, {
                enter: ()=>{
                    en.addFlag(l.ZM.Opening),
                    X.current.beforeEnter()
                }
                ,
                leave: ()=>{
                    en.addFlag(l.ZM.Closing),
                    X.current.beforeLeave()
                }
                ,
                idle: ()=>{}
            }))
              , eo = (0,
            g.z)(e=>(0,
            i.E)(e, {
                enter: ()=>{
                    en.removeFlag(l.ZM.Opening),
                    X.current.afterEnter()
                }
                ,
                leave: ()=>{
                    en.removeFlag(l.ZM.Closing),
                    X.current.afterLeave()
                }
                ,
                idle: ()=>{}
            }))
              , eu = S(()=>{
                U("hidden"),
                J(H)
            }
            , q);
            !function({immediate: e, container: t, direction: n, classes: r, onStart: o, onStop: u}) {
                let l = (0,
                a.t)()
                  , d = (0,
                h.G)()
                  , f = (0,
                c.E)(n);
                (0,
                s.e)(()=>{
                    e && (f.current = "enter")
                }
                , [e]),
                (0,
                s.e)(()=>{
                    let e = (0,
                    p.k)();
                    d.add(e.dispose);
                    let n = t.current;
                    if (n && "idle" !== f.current && l.current) {
                        var a, s, c;
                        let t, l, d, h, g, b, E;
                        return e.dispose(),
                        o.current(f.current),
                        e.add((a = r.current,
                        s = "enter" === f.current,
                        c = ()=>{
                            e.dispose(),
                            u.current(f.current)
                        }
                        ,
                        l = s ? "enter" : "leave",
                        d = (0,
                        p.k)(),
                        h = void 0 !== c ? (t = {
                            called: !1
                        },
                        (...e)=>{
                            if (!t.called)
                                return t.called = !0,
                                c(...e)
                        }
                        ) : ()=>{}
                        ,
                        "enter" === l && (n.removeAttribute("hidden"),
                        n.style.display = ""),
                        g = (0,
                        i.E)(l, {
                            enter: ()=>a.enter,
                            leave: ()=>a.leave
                        }),
                        b = (0,
                        i.E)(l, {
                            enter: ()=>a.enterTo,
                            leave: ()=>a.leaveTo
                        }),
                        E = (0,
                        i.E)(l, {
                            enter: ()=>a.enterFrom,
                            leave: ()=>a.leaveFrom
                        }),
                        v(n, ...a.base, ...a.enter, ...a.enterTo, ...a.enterFrom, ...a.leave, ...a.leaveFrom, ...a.leaveTo, ...a.entered),
                        m(n, ...a.base, ...g, ...E),
                        d.nextFrame(()=>{
                            v(n, ...a.base, ...g, ...E),
                            m(n, ...a.base, ...g, ...b),
                            function(e, t) {
                                let n = (0,
                                p.k)();
                                if (!e)
                                    return n.dispose;
                                let {transitionDuration: r, transitionDelay: o} = getComputedStyle(e)
                                  , [u,l] = [r, o].map(e=>{
                                    let[t=0] = e.split(",").filter(Boolean).map(e=>e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)).sort((e,t)=>t - e);
                                    return t
                                }
                                )
                                  , i = u + l;
                                if (0 !== i) {
                                    n.group(n=>{
                                        n.setTimeout(()=>{
                                            t(),
                                            n.dispose()
                                        }
                                        , i),
                                        n.addEventListener(e, "transitionrun", e=>{
                                            e.target === e.currentTarget && n.dispose()
                                        }
                                        )
                                    }
                                    );
                                    let r = n.addEventListener(e, "transitionend", e=>{
                                        e.target === e.currentTarget && (t(),
                                        r())
                                    }
                                    )
                                } else
                                    t();
                                n.add(()=>t()),
                                n.dispose
                            }(n, ()=>(v(n, ...a.base, ...g),
                            m(n, ...a.base, ...a.entered),
                            h()))
                        }
                        ),
                        d.dispose)),
                        e.dispose
                    }
                }
                , [n])
            }({
                immediate: ee,
                container: H,
                classes: K,
                direction: et,
                onStart: (0,
                c.E)(e=>{
                    eu.onStart(H, e, er)
                }
                ),
                onStop: (0,
                c.E)(e=>{
                    eu.onStop(H, e, eo),
                    "leave" !== e || T(eu) || (U("hidden"),
                    J(H))
                }
                )
            });
            let el = z;
            return ee ? el = {
                ...el,
                className: (0,
                b.A)(z.className, ...K.current.enter, ...K.current.enterFrom)
            } : (el.className = (0,
            b.A)(z.className, null == (r = H.current) ? void 0 : r.className),
            "" === el.className && delete el.className),
            o.createElement(P.Provider, {
                value: eu
            }, o.createElement(l.up, {
                value: (0,
                i.E)($, {
                    visible: l.ZM.Open,
                    hidden: l.ZM.Closed
                }) | en.flags
            }, (0,
            u.sY)({
                ourProps: {
                    ref: V
                },
                theirProps: el,
                defaultTag: "div",
                features: x,
                visible: "visible" === $,
                name: "Transition.Child"
            })))
        })
          , F = (0,
        u.yV)(function(e, t) {
            let n = null !== (0,
            o.useContext)(y)
              , r = null !== (0,
            l.oJ)();
            return o.createElement(o.Fragment, null, !n && r ? o.createElement(N, {
                ref: t,
                ...e
            }) : o.createElement(R, {
                ref: t,
                ...e
            }))
        })
          , k = Object.assign(N, {
            Child: F,
            Root: N
        })
    },
    58314: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(6173);
        function u() {
            let[e] = (0,
            r.useState)(o.k);
            return (0,
            r.useEffect)(()=>()=>e.dispose(), [e]),
            e
        }
    },
    79410: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(61742);
        function u(e, t, n, u) {
            let l = (0,
            o.E)(n);
            (0,
            r.useEffect)(()=>{
                function n(e) {
                    l.current(e)
                }
                return (e = null != e ? e : window).addEventListener(t, n, u),
                ()=>e.removeEventListener(t, n, u)
            }
            , [e, t, u])
        }
    },
    55559: function(e, t, n) {
        "use strict";
        n.d(t, {
            z: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(61742);
        let u = function(e) {
            let t = (0,
            o.E)(e);
            return r.useCallback((...e)=>t.current(...e), [t])
        }
    },
    80586: function(e, t, n) {
        "use strict";
        n.d(t, {
            M: function() {
                return a
            }
        });
        var r, o = n(2784), u = n(88064), l = n(76460), i = n(64727);
        let a = null != (r = o.useId) ? r : function() {
            let e = (0,
            l.H)()
              , [t,n] = o.useState(e ? ()=>i.O.nextId() : null);
            return (0,
            u.e)(()=>{
                null === t && n(i.O.nextId())
            }
            , [t]),
            null != t ? "" + t : void 0
        }
    },
    81061: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(88064);
        function u() {
            let e = (0,
            r.useRef)(!1);
            return (0,
            o.e)(()=>(e.current = !0,
            ()=>{
                e.current = !1
            }
            ), []),
            e
        }
    },
    88064: function(e, t, n) {
        "use strict";
        n.d(t, {
            e: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(64727);
        let u = (e,t)=>{
            o.O.isServer ? (0,
            r.useEffect)(e, t) : (0,
            r.useLayoutEffect)(e, t)
        }
    },
    61742: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(88064);
        function u(e) {
            let t = (0,
            r.useRef)(e);
            return (0,
            o.e)(()=>{
                t.current = e
            }
            , [e]),
            t
        }
    },
    31385: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return l
            }
        });
        var r = n(2784)
          , o = n(91554)
          , u = n(55559);
        function l(e) {
            let t = (0,
            u.z)(e)
              , n = (0,
            r.useRef)(!1);
            (0,
            r.useEffect)(()=>(n.current = !1,
            ()=>{
                n.current = !0,
                (0,
                o.Y)(()=>{
                    n.current && t()
                }
                )
            }
            ), [t])
        }
    },
    32994: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return a
            }
        });
        var r = n(2784)
          , o = n(52929)
          , u = n(61742);
        function l(e, t, n) {
            let o = (0,
            u.E)(t);
            (0,
            r.useEffect)(()=>{
                function t(e) {
                    o.current(e)
                }
                return document.addEventListener(e, t, n),
                ()=>document.removeEventListener(e, t, n)
            }
            , [e, n])
        }
        var i = n(56902);
        function a(e, t, n=!0) {
            let u = (0,
            r.useRef)(!1);
            function a(n, r) {
                if (!u.current || n.defaultPrevented)
                    return;
                let l = r(n);
                if (null !== l && l.getRootNode().contains(l) && l.isConnected) {
                    for (let t of function e(t) {
                        return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                    }(e)) {
                        if (null === t)
                            continue;
                        let e = t instanceof HTMLElement ? t : t.current;
                        if (null != e && e.contains(l) || n.composed && n.composedPath().includes(e))
                            return
                    }
                    return (0,
                    o.sP)(l, o.tJ.Loose) || -1 === l.tabIndex || n.preventDefault(),
                    t(n, l)
                }
            }
            (0,
            r.useEffect)(()=>{
                requestAnimationFrame(()=>{
                    u.current = n
                }
                )
            }
            , [n]);
            let s = (0,
            r.useRef)(null);
            l("pointerdown", e=>{
                var t, n;
                u.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
            }
            , !0),
            l("mousedown", e=>{
                var t, n;
                u.current && (s.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
            }
            , !0),
            l("click", e=>{
                s.current && (a(e, ()=>s.current),
                s.current = null)
            }
            , !0),
            l("touchend", e=>a(e, ()=>e.target instanceof HTMLElement ? e.target : null), !0),
            (0,
            i.s)("blur", e=>a(e, ()=>window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
        }
    },
    70592: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(29833);
        function u(...e) {
            return (0,
            r.useMemo)(()=>(0,
            o.r)(...e), [...e])
        }
    },
    37352: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return l
            }
        });
        var r = n(2784)
          , o = n(88064);
        function u(e) {
            var t;
            if (e.type)
                return e.type;
            let n = null != (t = e.as) ? t : "button";
            if ("string" == typeof n && "button" === n.toLowerCase())
                return "button"
        }
        function l(e, t) {
            let[n,l] = (0,
            r.useState)(()=>u(e));
            return (0,
            o.e)(()=>{
                l(u(e))
            }
            , [e.type, e.as]),
            (0,
            o.e)(()=>{
                n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && l("button")
            }
            , [n, t]),
            n
        }
    },
    21638: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return a
            },
            v: function() {
                return i
            }
        });
        var r = n(2784)
          , o = n(36799)
          , u = n(55559)
          , l = n(70592);
        function i({defaultContainers: e=[], portals: t, mainTreeNodeRef: n}={}) {
            var i;
            let a = (0,
            r.useRef)(null != (i = null == n ? void 0 : n.current) ? i : null)
              , s = (0,
            l.i)(a)
              , c = (0,
            u.z)(()=>{
                var n;
                let r = [];
                for (let t of e)
                    null !== t && (t instanceof HTMLElement ? r.push(t) : "current"in t && t.current instanceof HTMLElement && r.push(t.current));
                if (null != t && t.current)
                    for (let e of t.current)
                        r.push(e);
                for (let e of null != (n = null == s ? void 0 : s.querySelectorAll("html > *, body > *")) ? n : [])
                    e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (e.contains(a.current) || r.some(t=>e.contains(t)) || r.push(e));
                return r
            }
            );
            return {
                resolveContainers: c,
                contains: (0,
                u.z)(e=>c().some(t=>t.contains(e))),
                mainTreeNodeRef: a,
                MainTreeNode: (0,
                r.useMemo)(()=>function() {
                    return null != n ? null : r.createElement(o._, {
                        features: o.A.Hidden,
                        ref: a
                    })
                }
                , [a, n])
            }
        }
        function a() {
            let e = (0,
            r.useRef)(null);
            return {
                mainTreeNodeRef: e,
                MainTreeNode: (0,
                r.useMemo)(()=>function() {
                    return r.createElement(o._, {
                        features: o.A.Hidden,
                        ref: e
                    })
                }
                , [e])
            }
        }
    },
    76460: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return l
            }
        });
        var r, o = n(2784), u = n(64727);
        function l() {
            let e;
            let t = (e = "undefined" == typeof document,
            (0,
            (r || (r = n.t(o, 2))).useSyncExternalStore)(()=>()=>{}
            , ()=>!1, ()=>!e))
              , [l,i] = o.useState(u.O.isHandoffComplete);
            return l && !1 === u.O.isHandoffComplete && i(!1),
            o.useEffect(()=>{
                !0 !== l && i(!0)
            }
            , [l]),
            o.useEffect(()=>u.O.handoff(), []),
            !t && l
        }
    },
    33401: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return i
            },
            h: function() {
                return l
            }
        });
        var r = n(2784)
          , o = n(55559);
        let u = Symbol();
        function l(e, t=!0) {
            return Object.assign(e, {
                [u]: t
            })
        }
        function i(...e) {
            let t = (0,
            r.useRef)(e);
            (0,
            r.useEffect)(()=>{
                t.current = e
            }
            , [e]);
            let n = (0,
            o.z)(e=>{
                for (let n of t.current)
                    null != n && ("function" == typeof n ? n(e) : n.current = e)
            }
            );
            return e.every(e=>null == e || (null == e ? void 0 : e[u])) ? void 0 : n
        }
    },
    10859: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return l
            },
            l: function() {
                return i
            }
        });
        var r, o = n(2784), u = n(56902), l = ((r = l || {})[r.Forwards = 0] = "Forwards",
        r[r.Backwards = 1] = "Backwards",
        r);
        function i() {
            let e = (0,
            o.useRef)(0);
            return (0,
            u.s)("keydown", t=>{
                "Tab" === t.key && (e.current = t.shiftKey ? 1 : 0)
            }
            , !0),
            e
        }
    },
    56902: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return u
            }
        });
        var r = n(2784)
          , o = n(61742);
        function u(e, t, n) {
            let u = (0,
            o.E)(t);
            (0,
            r.useEffect)(()=>{
                function t(e) {
                    u.current(e)
                }
                return window.addEventListener(e, t, n),
                ()=>window.removeEventListener(e, t, n)
            }
            , [e, n])
        }
    },
    36799: function(e, t, n) {
        "use strict";
        n.d(t, {
            A: function() {
                return u
            },
            _: function() {
                return l
            }
        });
        var r, o = n(90544), u = ((r = u || {})[r.None = 1] = "None",
        r[r.Focusable = 2] = "Focusable",
        r[r.Hidden = 4] = "Hidden",
        r);
        let l = (0,
        o.yV)(function(e, t) {
            let {features: n=1, ...r} = e
              , u = {
                ref: t,
                "aria-hidden": (2 & n) == 2 || void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(4 & n) == 4 && (2 & n) != 2 && {
                        display: "none"
                    }
                }
            };
            return (0,
            o.sY)({
                ourProps: u,
                theirProps: r,
                slot: {},
                defaultTag: "div",
                name: "Hidden"
            })
        })
    },
    47215: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZM: function() {
                return l
            },
            oJ: function() {
                return i
            },
            up: function() {
                return a
            }
        });
        var r, o = n(2784);
        let u = (0,
        o.createContext)(null);
        u.displayName = "OpenClosedContext";
        var l = ((r = l || {})[r.Open = 1] = "Open",
        r[r.Closed = 2] = "Closed",
        r[r.Closing = 4] = "Closing",
        r[r.Opening = 8] = "Opening",
        r);
        function i() {
            return (0,
            o.useContext)(u)
        }
        function a({value: e, children: t}) {
            return o.createElement(u.Provider, {
                value: e
            }, t)
        }
    },
    16137: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return l
            },
            n: function() {
                return u
            }
        });
        var r = n(2784);
        let o = (0,
        r.createContext)(!1);
        function u() {
            return (0,
            r.useContext)(o)
        }
        function l(e) {
            return r.createElement(o.Provider, {
                value: e.force
            }, e.children)
        }
    },
    15426: function(e, t, n) {
        "use strict";
        function r(e) {
            let t = e.parentElement
              , n = null;
            for (; t && !(t instanceof HTMLFieldSetElement); )
                t instanceof HTMLLegendElement && (n = t),
                t = t.parentElement;
            let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
            return !(r && function(e) {
                if (!e)
                    return !1;
                let t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(n)) && r
        }
        n.d(t, {
            P: function() {
                return r
            }
        })
    },
    94020: function(e, t, n) {
        "use strict";
        function r(...e) {
            return Array.from(new Set(e.flatMap(e=>"string" == typeof e ? e.split(" ") : []))).filter(Boolean).join(" ")
        }
        n.d(t, {
            A: function() {
                return r
            }
        })
    },
    6173: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return function e() {
                    let t = []
                      , n = {
                        addEventListener: (e,t,r,o)=>(e.addEventListener(t, r, o),
                        n.add(()=>e.removeEventListener(t, r, o))),
                        requestAnimationFrame(...e) {
                            let t = requestAnimationFrame(...e);
                            return n.add(()=>cancelAnimationFrame(t))
                        },
                        nextFrame: (...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),
                        setTimeout(...e) {
                            let t = setTimeout(...e);
                            return n.add(()=>clearTimeout(t))
                        },
                        microTask(...e) {
                            let t = {
                                current: !0
                            };
                            return (0,
                            r.Y)(()=>{
                                t.current && e[0]()
                            }
                            ),
                            n.add(()=>{
                                t.current = !1
                            }
                            )
                        },
                        style(e, t, n) {
                            let r = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: n
                            }),
                            this.add(()=>{
                                Object.assign(e.style, {
                                    [t]: r
                                })
                            }
                            )
                        },
                        group(t) {
                            let n = e();
                            return t(n),
                            this.add(()=>n.dispose())
                        },
                        add: e=>(t.push(e),
                        ()=>{
                            let n = t.indexOf(e);
                            if (n >= 0)
                                for (let e of t.splice(n, 1))
                                    e()
                        }
                        ),
                        dispose() {
                            for (let e of t.splice(0))
                                e()
                        }
                    };
                    return n
                }
            }
        });
        var r = n(91554)
    },
    64727: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return l
            }
        });
        var r = Object.defineProperty
          , o = (e,t,n)=>t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , u = (e,t,n)=>(o(e, "symbol" != typeof t ? t + "" : t, n),
        n);
        let l = new class {
            constructor() {
                u(this, "current", this.detect()),
                u(this, "handoffState", "pending"),
                u(this, "currentId", 0)
            }
            set(e) {
                this.current !== e && (this.handoffState = "pending",
                this.currentId = 0,
                this.current = e)
            }
            reset() {
                this.set(this.detect())
            }
            nextId() {
                return ++this.currentId
            }
            get isServer() {
                return "server" === this.current
            }
            get isClient() {
                return "client" === this.current
            }
            detect() {
                return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
            }
            handoff() {
                "pending" === this.handoffState && (this.handoffState = "complete")
            }
            get isHandoffComplete() {
                return "complete" === this.handoffState
            }
        }
    },
    52929: function(e, t, n) {
        "use strict";
        n.d(t, {
            C5: function() {
                return b
            },
            GO: function() {
                return m
            },
            TO: function() {
                return d
            },
            fE: function() {
                return f
            },
            jA: function() {
                return E
            },
            sP: function() {
                return h
            },
            tJ: function() {
                return v
            }
        });
        var r, o, u, l, i, a = n(3703), s = n(29833);
        let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");
        var d = ((r = d || {})[r.First = 1] = "First",
        r[r.Previous = 2] = "Previous",
        r[r.Next = 4] = "Next",
        r[r.Last = 8] = "Last",
        r[r.WrapAround = 16] = "WrapAround",
        r[r.NoScroll = 32] = "NoScroll",
        r)
          , f = ((o = f || {})[o.Error = 0] = "Error",
        o[o.Overflow = 1] = "Overflow",
        o[o.Success = 2] = "Success",
        o[o.Underflow = 3] = "Underflow",
        o)
          , p = ((u = p || {})[u.Previous = -1] = "Previous",
        u[u.Next = 1] = "Next",
        u);
        function m(e=document.body) {
            return null == e ? [] : Array.from(e.querySelectorAll(c)).sort((e,t)=>Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
        }
        var v = ((l = v || {})[l.Strict = 0] = "Strict",
        l[l.Loose = 1] = "Loose",
        l);
        function h(e, t=0) {
            var n;
            return e !== (null == (n = (0,
            s.r)(e)) ? void 0 : n.body) && (0,
            a.E)(t, {
                0: ()=>e.matches(c),
                1() {
                    let t = e;
                    for (; null !== t; ) {
                        if (t.matches(c))
                            return !0;
                        t = t.parentElement
                    }
                    return !1
                }
            })
        }
        var g = ((i = g || {})[i.Keyboard = 0] = "Keyboard",
        i[i.Mouse = 1] = "Mouse",
        i);
        function b(e) {
            null == e || e.focus({
                preventScroll: !0
            })
        }
        function E(e, t, {sorted: n=!0, relativeTo: r=null, skipElements: o=[]}={}) {
            var u, l, i;
            let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
              , s = Array.isArray(e) ? n ? function(e, t=e=>e) {
                return e.slice().sort((e,n)=>{
                    let r = t(e)
                      , o = t(n);
                    if (null === r || null === o)
                        return 0;
                    let u = r.compareDocumentPosition(o);
                    return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                }
                )
            }(e) : e : m(e);
            o.length > 0 && s.length > 1 && (s = s.filter(e=>!o.includes(e))),
            r = null != r ? r : a.activeElement;
            let c = (()=>{
                if (5 & t)
                    return 1;
                if (10 & t)
                    return -1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), d = (()=>{
                if (1 & t)
                    return 0;
                if (2 & t)
                    return Math.max(0, s.indexOf(r)) - 1;
                if (4 & t)
                    return Math.max(0, s.indexOf(r)) + 1;
                if (8 & t)
                    return s.length - 1;
                throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }
            )(), f = 32 & t ? {
                preventScroll: !0
            } : {}, p = 0, v = s.length, h;
            do {
                if (p >= v || p + v <= 0)
                    return 0;
                let e = d + p;
                if (16 & t)
                    e = (e + v) % v;
                else {
                    if (e < 0)
                        return 3;
                    if (e >= v)
                        return 1
                }
                null == (h = s[e]) || h.focus(f),
                p += c
            } while (h !== a.activeElement);
            return 6 & t && null != (i = null == (l = null == (u = h) ? void 0 : u.matches) ? void 0 : l.call(u, "textarea,input")) && i && h.select(),
            2
        }
        "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e=>{
            e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0),
        document.addEventListener("click", e=>{
            1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
        }
        , !0))
    },
    3703: function(e, t, n) {
        "use strict";
        function r(e, t, ...n) {
            if (e in t) {
                let r = t[e];
                return "function" == typeof r ? r(...n) : r
            }
            let o = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
            throw Error.captureStackTrace && Error.captureStackTrace(o, r),
            o
        }
        n.d(t, {
            E: function() {
                return r
            }
        })
    },
    91554: function(e, t, n) {
        "use strict";
        function r(e) {
            "function" == typeof queueMicrotask ? queueMicrotask(e) : Promise.resolve().then(e).catch(e=>setTimeout(()=>{
                throw e
            }
            ))
        }
        n.d(t, {
            Y: function() {
                return r
            }
        })
    },
    29833: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return o
            }
        });
        var r = n(64727);
        function o(e) {
            return r.O.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
        }
    },
    90544: function(e, t, n) {
        "use strict";
        n.d(t, {
            AN: function() {
                return a
            },
            l4: function() {
                return s
            },
            oA: function() {
                return m
            },
            sY: function() {
                return c
            },
            yV: function() {
                return p
            }
        });
        var r, o, u = n(2784), l = n(94020), i = n(3703), a = ((r = a || {})[r.None = 0] = "None",
        r[r.RenderStrategy = 1] = "RenderStrategy",
        r[r.Static = 2] = "Static",
        r), s = ((o = s || {})[o.Unmount = 0] = "Unmount",
        o[o.Hidden = 1] = "Hidden",
        o);
        function c({ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: u=!0, name: l}) {
            let a = f(t, e);
            if (u)
                return d(a, n, r, l);
            let s = null != o ? o : 0;
            if (2 & s) {
                let {static: e=!1, ...t} = a;
                if (e)
                    return d(t, n, r, l)
            }
            if (1 & s) {
                let {unmount: e=!0, ...t} = a;
                return (0,
                i.E)(e ? 0 : 1, {
                    0: ()=>null,
                    1: ()=>d({
                        ...t,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, n, r, l)
                })
            }
            return d(a, n, r, l)
        }
        function d(e, t={}, n, r) {
            let {as: o=n, children: i, refName: a="ref", ...s} = v(e, ["unmount", "static"])
              , c = void 0 !== e.ref ? {
                [a]: e.ref
            } : {}
              , d = "function" == typeof i ? i(t) : i;
            "className"in s && s.className && "function" == typeof s.className && (s.className = s.className(t));
            let p = {};
            if (t) {
                let e = !1
                  , n = [];
                for (let[r,o] of Object.entries(t))
                    "boolean" == typeof o && (e = !0),
                    !0 === o && n.push(r);
                e && (p["data-headlessui-state"] = n.join(" "))
            }
            if (o === u.Fragment && Object.keys(m(s)).length > 0) {
                if (!(0,
                u.isValidElement)(d) || Array.isArray(d) && d.length > 1)
                    throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(e=>`  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));
                let e = d.props
                  , t = "function" == typeof (null == e ? void 0 : e.className) ? (...t)=>(0,
                l.A)(null == e ? void 0 : e.className(...t), s.className) : (0,
                l.A)(null == e ? void 0 : e.className, s.className)
                  , n = t ? {
                    className: t
                } : {};
                return (0,
                u.cloneElement)(d, Object.assign({}, f(d.props, m(v(s, ["ref"]))), p, c, function(...e) {
                    return {
                        ref: e.every(e=>null == e) ? void 0 : t=>{
                            for (let n of e)
                                null != n && ("function" == typeof n ? n(t) : n.current = t)
                        }
                    }
                }(d.ref, c.ref), n))
            }
            return (0,
            u.createElement)(o, Object.assign({}, v(s, ["ref"]), o !== u.Fragment && c, o !== u.Fragment && p), d)
        }
        function f(...e) {
            if (0 === e.length)
                return {};
            if (1 === e.length)
                return e[0];
            let t = {}
              , n = {};
            for (let r of e)
                for (let e in r)
                    e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []),
                    n[e].push(r[e])) : t[e] = r[e];
            if (t.disabled || t["aria-disabled"])
                return Object.assign(t, Object.fromEntries(Object.keys(n).map(e=>[e, void 0])));
            for (let e in n)
                Object.assign(t, {
                    [e](t, ...r) {
                        for (let o of n[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent)instanceof Event) && t.defaultPrevented)
                                return;
                            o(t, ...r)
                        }
                    }
                });
            return t
        }
        function p(e) {
            var t;
            return Object.assign((0,
            u.forwardRef)(e), {
                displayName: null != (t = e.displayName) ? t : e.name
            })
        }
        function m(e) {
            let t = Object.assign({}, e);
            for (let e in t)
                void 0 === t[e] && delete t[e];
            return t
        }
        function v(e, t=[]) {
            let n = Object.assign({}, e);
            for (let e of t)
                e in n && delete n[e];
            return n
        }
    }
}]);
