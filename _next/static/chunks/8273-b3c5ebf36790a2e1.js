(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8273], {
    82958: function(e, l, t) {
        "use strict";
        t.d(l, {
            z: function() {
                return s
            }
        });
        var a = t(52322)
          , n = t(2784)
          , r = t(40334)
          , o = t.n(r);
        let s = e=>{
            var l;
            let {initialValue: t=0, fontStyle: r, duration: s=400, stepPrecision: i=2, value: c, formatValue: d, className: u} = e
              , [x,p] = (0,
            n.useState)(t);
            return (0,
            n.useEffect)(()=>{
                requestAnimationFrame(()=>{
                    p(c)
                }
                )
            }
            , [c]),
            (0,
            a.jsx)(o(), {
                component: "span",
                value: x,
                className: u,
                style: {
                    ...r
                },
                duration: null != s ? s : 500,
                stepPrecision: i,
                formatValue: e=>null !== (l = null == d ? void 0 : d(e)) && void 0 !== l ? l : e
            })
        }
    },
    53079: function(e, l, t) {
        "use strict";
        t.d(l, {
            wp: function() {
                return g
            },
            SR: function() {
                return f
            }
        });
        var a = t(52322)
          , n = t(96577)
          , r = t.n(n)
          , o = t(97755)
          , s = t.n(o);
        let i = "https://twitter.com/TheMemeinator__"
          , c = "https://www.reddit.com/r/TheMemeinator/"
          , d = "https://www.instagram.com/thememeinatorofficial/"
          , u = "https://www.tiktok.com/@thememeinator_"
          , x = "https://www.youtube.com/channel/UCIGhf_GMR202QRC06zRvrtA"
          , p = "https://medium.com/@TheMemeinator"
          , h = "https://discord.gg/Memeinator"
          , m = "https://t.me/MemeinatorOfficial"
          , f = ()=>(0,
        a.jsx)("div", {
            className: s().shareIconsBox,
            children: [{
                icon: "twitter",
                url: i
            }, {
                icon: "reddit",
                url: c
            }, {
                icon: "ins",
                url: d
            }, {
                icon: "tiktok",
                url: u
            }, {
                icon: "youtube",
                url: x
            }, {
                icon: "medium",
                url: p
            }, {
                icon: "discord",
                url: h
            }, {
                icon: "telegram",
                url: m
            }].map((e,l)=>(0,
            a.jsx)("a", {
                href: e.url,
                target: "_blank",
                className: s().simpleShareIcon,
                children: (0,
                a.jsx)(r(), {
                    width: 18,
                    height: 18,
                    src: "/imgs/social-white/".concat(e.icon, ".png"),
                    alt: "share3"
                })
            }, l))
        })
          , g = ()=>(0,
        a.jsx)("div", {
            className: "w-full flex items-center justify-between",
            children: [{
                icon: "twitter",
                url: i
            }, {
                icon: "reddit",
                url: c
            }, {
                icon: "ins",
                url: d
            }, {
                icon: "tiktok",
                url: u
            }, {
                icon: "youtube",
                url: x
            }, {
                icon: "medium",
                url: p
            }, {
                icon: "discord",
                url: h
            }, {
                icon: "telegram",
                url: m
            }].map((e,l)=>(0,
            a.jsx)("a", {
                href: e.url,
                target: "_blank",
                children: (0,
                a.jsx)("div", {
                    className: s().circleItemBox,
                    children: (0,
                    a.jsx)(r(), {
                        width: 30,
                        height: 30,
                        src: "/imgs/social-links/".concat(e.icon, ".png"),
                        alt: "share3"
                    })
                })
            }, l))
        });
        t(82958)
    },
    25076: function(e, l, t) {
        "use strict";
        t.d(l, {
            N: function() {
                return y
            }
        });
        var a = t(52322)
          , n = t(9058)
          , r = t(39126)
          , o = t(29081)
          , s = t(60727)
          , i = t(36894)
          , c = t(96454)
          , d = t.n(c)
          , u = t(43913)
          , x = t(49442)
          , p = t(96577)
          , h = t.n(p)
          , m = t(2784);
        let f = e=>{
            let {renderNode: l, theme: t, className: n} = e;
            return (0,
            a.jsx)(g, {
                theme: t,
                renderButton: ()=>(0,
                a.jsx)(u.J.Button, {
                    style: {
                        all: "unset"
                    },
                    className: n,
                    children: l()
                })
            })
        }
          , g = e=>{
            let {renderButton: l, theme: t="black"} = e
              , n = "black" === t
              , {t: o} = (0,
            s.$G)()
              , {disconnect: i} = (0,
            r.k)()
              , c = [{
                label: o("head.Staking"),
                icon: n ? "/imgs/connectButton/staking.svg" : "/imgs/connectButton/black/staking.svg",
                onClick: ()=>{
                    window.location.href = "/staking"
                }
            }, {
                label: o("head.Referral"),
                icon: n ? "/imgs/connectButton/referral.svg" : "/imgs/connectButton/black/referral.svg",
                onClick: ()=>{
                    window.location.href = "/referral"
                }
            }]
              , d = {
                label: o("disconnect"),
                icon: n ? "/imgs/connectButton/logOut.svg" : "/imgs/connectButton/black/logOut.svg",
                onClick: i
            }
              , p = (0,
            a.jsxs)("div", {
                style: {
                    borderColor: n ? "#ffffff33" : "#00000033"
                },
                className: "".concat(n ? " bg-Background text-White" : "bg-White text-Black", " w-fit p-14px pl-24px pr-24px rounded-[20px] flex flex-col  border-1px border-solid border-White/20"),
                children: [(0,
                a.jsx)("div", {
                    className: "flex flex-col w-full",
                    children: c.map(e=>(0,
                    a.jsx)(b, {
                        data: e
                    }, e.label))
                }), (0,
                a.jsx)("div", {
                    className: "w-full h-1px border-1px border-solid mb-12px border-White/20",
                    style: {
                        borderColor: n ? "#ffffff33" : "#00000033"
                    }
                }), (0,
                a.jsx)(b, {
                    data: d,
                    className: " !mb-0"
                })]
            });
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)(u.J, {
                    className: "h-full flex relative items-center ",
                    children: e=>{
                        let {open: t, close: n} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [l({
                                open: t,
                                close: n
                            }), (0,
                            a.jsx)(x.u, {
                                as: m.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsx)(u.J.Panel, {
                                    className: "absolute top-[45px] -left-1/2 max-md:-left-[19%]",
                                    children: p
                                })
                            })]
                        })
                    }
                })
            })
        }
          , b = e=>{
            let {data: l, className: t=""} = e
              , n = !(0,
            i.cW)();
            return (0,
            a.jsxs)("div", {
                onClick: l.onClick,
                className: "".concat(t, " flex items-center mb-12px cursor-pointer hover:opacity-75"),
                children: [(0,
                a.jsx)("div", {
                    className: "w-[30px] h-[20px] flex items-center shrink-0",
                    children: (0,
                    a.jsx)(h(), {
                        src: l.icon,
                        alt: "language",
                        width: 18,
                        height: 18,
                        className: "cursor-pointer  flex"
                    })
                }), (0,
                a.jsx)("div", {
                    className: "".concat(n ? "-mt-8px" : " scale-8/12 ", " flex flex-1 whitespace-nowrap leading-none  font-DotNator text-12  origin-left"),
                    children: l.label
                })]
            })
        }
          , y = e=>{
            let {showBuy: l, onScrollTop: t, theme: c="black"} = e
              , {walletAddress: u, connect: x} = (0,
            r.k)()
              , p = "black" === c
              , {t: h, i18n: m} = (0,
            s.$G)()
              , g = (0,
            i.cW)();
            return u && l ? (0,
            a.jsx)(f, {
                theme: c,
                className: "",
                renderNode: ()=>(0,
                a.jsx)("div", {
                    className: "flex w-full text-center p-2px overflow-hidden rounded-full  transition-all hover:opacity-70  origin-center items-center whitespace-nowrap ".concat(d().connectButton),
                    style: g ? {
                        fontFamily: "DotNator"
                    } : {
                        fontFamily: "unset"
                    },
                    children: (0,
                    a.jsx)("div", {
                        className: "".concat(p ? " bg-Black text-White" : " text-Black bg-Cream", " flex items-center  justify-center h-full pl-[12px] pr-[12px] rounded-full"),
                        children: (0,
                        a.jsx)("div", {
                            className: "text-12 ".concat(g ? "md:scale-8/12" : "", " "),
                            style: {
                                ...g ? {} : {
                                    fontSize: 15
                                }
                            },
                            children: l || !p ? h("buyNowBtn") : u ? (0,
                            o.Xn)(u) : "fr" === m.language ? "Connecter" : "it" === m.language ? "Connettere" : h("connectWallet")
                        })
                    })
                })
            }) : (0,
            a.jsx)("button", {
                className: "flex text-center p-2px overflow-hidden rounded-full text-[8px] md:text-[12px] transition-all hover:opacity-70 origin-center items-center whitespace-nowrap ".concat(d().connectButton),
                onClick: ()=>{
                    if (!l) {
                        t();
                        return
                    }
                    (0,
                    n.mZ)(),
                    x()
                }
                ,
                style: g ? {
                    fontFamily: "DotNator"
                } : {
                    fontFamily: "unset"
                },
                children: (0,
                a.jsx)("div", {
                    className: "".concat(p ? "bg-Black text-White" : " text-Black bg-Cream", " flex items-center max-md:p-10px justify-center h-full rounded-full"),
                    children: (0,
                    a.jsx)("div", {
                        className: "text-[8px] max-md:p-5 md:text-[12px] md:scale-8/12",
                        style: {
                            ...g ? {} : {
                                fontSize: 19,
                                fontFamily: "inherit"
                            }
                        },
                        children: l || !p ? h("buyNowBtn") : u ? (0,
                        o.Xn)(u) : "fr" === m.language ? "Connecter" : "it" === m.language ? "Connettere" : h("connectWallet")
                    })
                })
            })
        }
    },
    25445: function(e, l, t) {
        "use strict";
        t.d(l, {
            l: function() {
                return p
            }
        });
        var a = t(52322)
          , n = t(43913)
          , r = t(49442)
          , o = t(60727)
          , s = t(96577)
          , i = t.n(s)
          , c = t(2784)
          , d = t(96454)
          , u = t.n(d);
        let x = [{
            label: "English",
            iconUrl: "/icons/flag/us.png",
            key: "en"
        }, {
            label: "Deutsch",
            iconUrl: "/icons/flag/deutsch.svg",
            key: "de"
        }, {
            label: "Italiano",
            iconUrl: "/icons/flag/italiano.svg",
            key: "it"
        }, {
            label: "Fran\xe7ais",
            iconUrl: "/icons/flag/fran\xe7ais.svg",
            key: "fr"
        }, {
            label: "Espa\xf1ol",
            iconUrl: "/icons/flag/espa\xf1ol.svg",
            key: "es"
        }, {
            label: "日本語",
            iconUrl: "/icons/flag/japanese.svg",
            key: "ja"
        }, {
            label: "แบบไทย",
            iconUrl: "/icons/flag/thai.svg",
            key: "th"
        }, {
            label: "한국어",
            iconUrl: "/icons/flag/korean.svg",
            key: "ko"
        }, {
            label: "Nederlands",
            iconUrl: "/icons/flag/nederlands.svg",
            key: "nl"
        }, {
            label: "中文(简体)",
            iconUrl: "/icons/flag/chinese.svg",
            key: "zh-CN"
        }, {
            label: "العربية",
            key: "ar",
            iconUrl: "/icons/flag/arabic.svg"
        }, {
            key: "no",
            iconUrl: "/icons/flag/norwe.png",
            label: "Norsk"
        }, {
            key: "pl",
            iconUrl: "/icons/flag/polish.svg",
            label: "Polski"
        }, {
            key: "tk",
            iconUrl: "/icons/flag/turkish.svg",
            label: "T\xfcrk\xe7e"
        }, {
            key: "sv",
            iconUrl: "/icons/flag/sweden.png",
            label: "Svenska"
        }, {
            key: "ro",
            iconUrl: "/icons/flag/romanian.png",
            label: "Rom\xe2nă"
        }, {
            key: "pt",
            iconUrl: "/icons/flag/portugal.svg",
            label: "Portugu\xeas"
        }, {
            key: "ru",
            iconUrl: "/icons/flag/russia.png",
            label: "Русский"
        }]
          , p = e=>{
            var l;
            let {renderButton: t} = e
              , {i18n: s} = (0,
            o.$G)()
              , d = null !== (l = x.find(e=>e.key === s.language)) && void 0 !== l ? l : x[0];
            return (0,
            a.jsxs)("div", {
                className: "flex ",
                children: [(0,
                a.jsx)(n.J, {
                    className: " relative  flex md:hidden",
                    children: e=>{
                        let {open: l, close: o} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [t ? t({
                                open: l,
                                close: o,
                                data: d
                            }) : (0,
                            a.jsx)(n.J.Button, {
                                className: "flex items-center",
                                style: {
                                    all: "unset"
                                },
                                children: (0,
                                a.jsx)(i(), {
                                    src: d.iconUrl,
                                    alt: "language",
                                    width: 21,
                                    height: 21,
                                    className: "cursor-pointer ml-[30px] flex md:hidden"
                                })
                            }), (0,
                            a.jsx)(r.u, {
                                as: c.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsxs)(n.J.Panel, {
                                    className: "flex flex-col fixed bottom-0 left-0 h-full z-[9999] w-[100vw] bg-[#141414]",
                                    children: [(0,
                                    a.jsx)(h, {}), (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-1 overflow-auto p-[16px]",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex flex-1 flex-col",
                                            children: x.slice(0, Math.ceil(x.length / 2)).map((e,l)=>(0,
                                            a.jsx)(m, {
                                                active: d.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "flex flex-1 flex-col  ",
                                            children: x.slice(Math.ceil(x.length / 2)).map((e,l)=>(0,
                                            a.jsx)(m, {
                                                active: d.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        })]
                                    })]
                                })
                            })]
                        })
                    }
                }), (0,
                a.jsx)(n.J, {
                    className: "h-full flex items-center max-md:hidden",
                    children: e=>{
                        let {open: l, close: o} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [t ? t({
                                open: l,
                                close: o,
                                data: d
                            }) : (0,
                            a.jsx)(n.J.Button, {
                                className: "",
                                style: {
                                    all: "unset"
                                },
                                children: (0,
                                a.jsx)(i(), {
                                    src: d.iconUrl,
                                    alt: "language",
                                    width: 28,
                                    height: 28,
                                    className: "cursor-pointer ml-[30px] flex max-md:hidden"
                                })
                            }), (0,
                            a.jsx)(r.u, {
                                as: c.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsx)(n.J.Panel, {
                                    className: "absolute top-[55px] right-0",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "".concat(u().languagesPop, " flex pt-[28px] pb-[28px]  pl-[27px] pr-[27px] "),
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex flex-col  w-[165px]",
                                            children: x.slice(0, Math.ceil(x.length / 2)).map((e,l)=>(0,
                                            a.jsx)(m, {
                                                active: d.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "flex flex-col ml-[5px] w-[165px]",
                                            children: x.slice(Math.ceil(x.length / 2)).map((e,l)=>(0,
                                            a.jsx)(m, {
                                                active: d.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        })]
                                    })
                                })
                            })]
                        })
                    }
                })]
            })
        }
          , h = ()=>(0,
        a.jsxs)("div", {
            className: "md:hidden flex justify-between items-center border-White border-b-[1px] pb-[7px] pt-[7px]  pr-[24px] pl-[24px]",
            children: [(0,
            a.jsx)("div", {
                className: "".concat(u().languagesTitle),
                children: "Languages"
            }), (0,
            a.jsx)(n.J.Button, {
                className: "",
                style: {
                    all: "unset"
                },
                children: (0,
                a.jsx)(i(), {
                    src: "/imgs/writeClose.png",
                    alt: "writeClose",
                    width: 12,
                    height: 12,
                    className: " cursor-pointer"
                })
            })]
        })
          , m = e=>{
            let {active: l, label: t, iconUrl: n, lang: r} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex cursor-pointer pl-[16px] ",
                onClick: ()=>{
                    window.location.href = "".concat(window.location.origin, "/").concat(r)
                }
                ,
                children: [(0,
                a.jsx)("div", {
                    className: "w-[30px] flex items-center",
                    children: (0,
                    a.jsx)(i(), {
                        src: n,
                        alt: "languageIcon",
                        width: 18,
                        height: 18,
                        objectFit: "contain"
                    })
                }), (0,
                a.jsx)("div", {
                    className: "".concat(u().languagesLabel, " "),
                    children: t
                }), (0,
                a.jsx)(i(), {
                    src: "/imgs/header/whiteCheck.png",
                    alt: "language",
                    width: 14,
                    height: 9,
                    style: {
                        objectFit: "contain"
                    },
                    className: "ml-[14px] ".concat(l ? " opacity-100" : "opacity-0")
                })]
            })
        }
    },
    72733: function(e, l, t) {
        "use strict";
        t.d(l, {
            G: function() {
                return f
            },
            W: function() {
                return g
            }
        });
        var a = t(52322)
          , n = t(53079)
          , r = t(39126)
          , o = t(43913)
          , s = t(49442)
          , i = t(60727)
          , c = t(96577)
          , d = t.n(c)
          , u = t(2784)
          , x = t(90609)
          , p = t(25445)
          , h = t(96454)
          , m = t.n(h);
        let f = e=>{
            let {data: l, renderButton: t, isLanguages: c, className: h, isFilterShowHeader: f, onClose: y} = e
              , {walletAddress: w, disconnect: v} = (0,
            r.k)()
              , {t: j} = (0,
            i.$G)();
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)(o.J, {
                    className: "flex  md:hidden",
                    children: e=>{
                        let {close: r} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [t ? t() : (0,
                            a.jsx)(o.J.Button, {
                                style: {
                                    all: "unset"
                                },
                                children: (0,
                                a.jsx)(d(), {
                                    src: "/imgs/header/list.png",
                                    alt: "list",
                                    width: 16,
                                    height: 14,
                                    onClick: ()=>{}
                                    ,
                                    className: "ml-[24px] cursor-pointer"
                                })
                            }), (0,
                            a.jsx)(s.u, {
                                as: u.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsxs)(o.J.Panel, {
                                    className: "flex flex-col  fixed  top-0 left-0 h-screen w-screen bg-Background ".concat(h),
                                    children: [(0,
                                    a.jsx)(b, {}), (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-col  pr-[24px]   pl-[24px]  overflow-y-scroll overflow-x-hidden  flex-1 w-[100vw]  box-border",
                                        children: [l.map((e,t)=>{
                                            let {scrollId: n, label: o, onClick: s, renderMobileMenu: i, isShowHeaderMobile: c=!0} = e;
                                            if ("" === n || "" === o || !c && f)
                                                return null;
                                            let d = (0,
                                            a.jsx)("div", {
                                                className: "".concat(m().mobileMenusTxt, " w-full cursor-pointer border-[#4F4F4F] border-b-[1px]"),
                                                children: o
                                            });
                                            return i ? i({
                                                currentNode: d,
                                                scrollId: n,
                                                data: l,
                                                close: r
                                            }) : (0,
                                            a.jsx)("a", {
                                                className: "flex flex-col w-full decoration-transparent ",
                                                onClick: ()=>{
                                                    if (s) {
                                                        s(),
                                                        r(),
                                                        null == y || y();
                                                        return
                                                    }
                                                    (0,
                                                    x.k)(n),
                                                    r(),
                                                    null == y || y()
                                                }
                                                ,
                                                children: d
                                            }, t.toString())
                                        }
                                        ), c ? (0,
                                        a.jsx)(p.l, {
                                            renderButton: ()=>(0,
                                            a.jsx)(o.J.Button, {
                                                className: "",
                                                style: {
                                                    all: "unset"
                                                },
                                                children: (0,
                                                a.jsx)(g, {
                                                    label: j("language")
                                                })
                                            })
                                        }) : null]
                                    }), w && (0,
                                    a.jsx)("div", {
                                        onClick: ()=>{
                                            v()
                                        }
                                        ,
                                        className: "cursor-pointer text-center text-[#FF0000] text-[11px] pt-[20px] pr-[50px] pl-[50px] pb-[20px]",
                                        style: {
                                            fontFamily: "DotNator"
                                        },
                                        children: j("disconnectWallet")
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-col pt-[20px] pr-[50px] pl-[50px] justify-end",
                                        children: [(0,
                                        a.jsx)(n.SR, {}), (0,
                                        a.jsx)("a", {
                                            href: "mailto:contact@memeinator.com",
                                            className: "".concat(m().emailTxt, " no-underline"),
                                            children: "contact@memeinator.com"
                                        })]
                                    })]
                                })
                            })]
                        })
                    }
                })
            })
        }
          , g = e=>{
            let {label: l} = e;
            return (0,
            a.jsx)(o.J.Button, {
                className: "",
                style: {
                    all: "unset"
                },
                children: (0,
                a.jsx)("div", {
                    style: {
                        width: "calc(100vw - 48px)",
                        height: 60
                    },
                    className: "relative flex items-center  cursor-pointer border-[#4F4F4F] border-b-1px",
                    children: (0,
                    a.jsxs)("div", {
                        className: "w-full h-[60px] relative flex items-center",
                        children: [(0,
                        a.jsx)("div", {
                            className: " text-White font-DotNator  max-md:text-[12px] justify-center w-full flex ",
                            children: l
                        }), (0,
                        a.jsx)(d(), {
                            src: "/imgs/writeDown.png",
                            alt: "writeDown",
                            width: 14,
                            height: 7,
                            className: " absolute right-0"
                        })]
                    })
                })
            })
        }
          , b = ()=>(0,
        a.jsxs)("div", {
            className: " flex justify-between items-center h-[60px] pr-[24px] pl-[24px] pt-0 pb-0",
            children: [(0,
            a.jsx)(d(), {
                src: "/imgs/logoHeader.png",
                alt: "logoHeader",
                width: 36,
                height: 40,
                style: {
                    objectFit: "contain",
                    marginLeft: -4
                }
            }), (0,
            a.jsx)(o.J.Button, {
                className: "",
                style: {
                    all: "unset"
                },
                children: (0,
                a.jsx)(d(), {
                    src: "/imgs/writeClose.png",
                    alt: "writeClose",
                    width: 12,
                    height: 12,
                    className: " cursor-pointer"
                })
            })]
        })
    },
    70229: function(e, l, t) {
        "use strict";
        t.d(l, {
            o: function() {
                return c
            }
        });
        var a = t(52322)
          , n = t(43913)
          , r = t(49442)
          , o = t(2784)
          , s = t(36894)
          , i = t(90609);
        let c = e=>{
            let {data: l, renderButton: t, theme: r, style: o} = e;
            return (0,
            a.jsx)(d, {
                theme: r,
                data: l,
                renderButton: e=>(0,
                a.jsx)(n.J.Button, {
                    style: {
                        all: "unset",
                        ...o
                    },
                    children: t(e)
                })
            })
        }
          , d = e=>{
            let {renderButton: l, data: t, theme: c="black"} = e
              , d = (0,
            s.cW)()
              , u = "black" === c;
            return (0,
            a.jsx)(n.J, {
                className: "h-full flex relative items-center max-md:hidden",
                children: e=>{
                    let {open: s, close: c} = e;
                    return (0,
                    a.jsxs)(a.Fragment, {
                        children: [l({
                            open: s,
                            close: c
                        }), (0,
                        a.jsx)(r.u, {
                            as: o.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: (0,
                            a.jsx)(n.J.Panel, {
                                className: "".concat(d ? " w-auto  top-[25px] -left-[20%]" : " w-auto top-[55px] -left-[20%]", "  absolute  flex flex-col pt-10px pb-10px"),
                                children: (0,
                                a.jsx)("div", {
                                    className: "".concat(u ? "bg-Black border-White/20" : "bg-White border-Black/20", " w-full border-1px border-solid flex rounded-[20px] p-20px pt-20px pb-20px"),
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "flex flex-col flex-1 ",
                                        children: t.map(e=>{
                                            let {scrollId: l, label: t, isShowHeader: n=!0, onClick: r} = e;
                                            return "" !== l && "" !== t && n ? (0,
                                            a.jsx)("a", {
                                                onClick: ()=>{
                                                    if (r) {
                                                        r();
                                                        return
                                                    }
                                                    (0,
                                                    i.k)(l),
                                                    c()
                                                }
                                                ,
                                                className: "flex flex-row mb-6px cursor-pointer hover:opacity-50 min-h-[24px]",
                                                style: {
                                                    textDecorationLine: "none",
                                                    textAlign: "left",
                                                    scale: d ? "75%" : "none"
                                                },
                                                children: (0,
                                                a.jsx)("span", {
                                                    className: " font-DotNator text-12 shrink-0",
                                                    style: {
                                                        color: u ? "#fff" : "#000",
                                                        ...d ? {} : {
                                                            fontFamily: "inherit",
                                                            fontSize: 15
                                                        }
                                                    },
                                                    children: t
                                                })
                                            }, t) : null
                                        }
                                        )
                                    })
                                })
                            })
                        })]
                    })
                }
            })
        }
    },
    90407: function(e, l, t) {
        "use strict";
        t.d(l, {
            F: function() {
                return b
            },
            h: function() {
                return y
            }
        });
        var a = t(52322)
          , n = t(96577)
          , r = t.n(n)
          , o = t(5632)
          , s = t(2784)
          , i = t(36894)
          , c = t(90609)
          , d = t(25076)
          , u = t(25445)
          , x = t(72733)
          , p = t(60727)
          , h = t(96454)
          , m = t.n(h)
          , f = t(70229)
          , g = t(41237);
        let b = 1300
          , y = e=>{
            let {data: l, pageType: t, hideButton: n, renderRightButton: h, theme: y="black"} = e
              , [w,v] = (0,
            s.useState)(!1)
              , [j,k] = (0,
            s.useState)(!1)
              , _ = (0,
            s.useRef)(j);
            _.current = j;
            let N = "black" === y
              , T = !(0,
            i.cW)()
              , B = (0,
            g.dD)()
              , {replace: I} = (0,
            o.useRouter)()
              , S = (0,
            s.useRef)(null)
              , {t: C} = (0,
            p.$G)();
            (0,
            s.useEffect)(()=>{
                setTimeout(()=>{
                    var e, l;
                    (null === (e = S.current) || void 0 === e ? void 0 : e.offsetWidth) && (null === (l = S.current) || void 0 === l ? void 0 : l.offsetWidth) <= b && k(!0)
                }
                , 10),
                window.addEventListener("resize", ()=>{
                    window.innerWidth < 768 || (window.innerWidth > b && _.current && k(!1),
                    window.innerWidth <= b && !_.current && k(!0))
                }
                );
                let e = document.getElementById("headerWrapper");
                S.current = e;
                let l = e=>{
                    if (e.target && e.target.scrollTop > 0) {
                        v(!0);
                        return
                    }
                    e.target && 0 === e.target.scrollTop && v(!1)
                }
                ;
                return null == e || e.addEventListener("scroll", l),
                ()=>{
                    null == e || e.removeEventListener("scroll", l)
                }
            }
            , []);
            let F = l.findIndex(e=>"howtobuyPage" === e.scrollId)
              , M = (0,
            a.jsx)(r(), {
                src: N ? "/imgs/writeDown.png" : "/imgs/blackDown.png",
                alt: "writeDown",
                width: 14,
                height: 7,
                className: "".concat(T ? "ml-[3px] mt-[20px] mr-[20px]" : "mt-[3px] ml-[3px] mr-[10px]", " "),
                style: {
                    height: 7,
                    width: 14
                }
            });
            return (0,
            a.jsxs)("div", {
                className: " w-screen flex flex-col items-center ".concat(w ? N ? "bg-Background" : "bg-Cream" : "bg-transparent"),
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-row w-full items-center max-w-[1900px]  ".concat(w ? "md:h-[60px]" : "md:h-[75px]", "  max-md:hidden relative transition-all duration-200"),
                    children: [(0,
                    a.jsx)(r(), {
                        src: "/imgs/logoHeader.png",
                        alt: "logoHeader",
                        width: 55,
                        height: 65,
                        priority: !0,
                        className: "".concat(m().logo, " ").concat(w ? "scale-[85%]" : "", " transition-all duration-200 max-md:h-[40px] max-md:w-[36px] max-md:left-[20px]"),
                        onClick: ()=>{
                            if ("buy" === t) {
                                var e;
                                null === (e = S.current) || void 0 === e || e.scrollTo({
                                    top: 0
                                })
                            } else
                                I("/")
                        }
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-row items-center justify-center flex-1",
                        children: [l.map((e,t)=>{
                            let {scrollId: n, label: r, renderHeader: o, isShowHeader: s=!0, onClick: i, style: d, isPop: u} = e;
                            if ("" === n || "" === r || !s || j && t > F)
                                return null;
                            let x = (0,
                            a.jsxs)("div", {
                                className: "headerMenuTxt  ".concat(T ? "" : "scaleDot", " cursor-pointer"),
                                style: {
                                    color: N ? "#fff" : "#000",
                                    ...T ? {
                                        fontSize: "19px",
                                        height: "75px"
                                    } : {}
                                },
                                children: [r, u ? M : null]
                            });
                            return o ? (0,
                            a.jsx)("div", {
                                style: d,
                                className: "".concat(T ? "" : " -mr-10px"),
                                children: o({
                                    currentNode: x,
                                    data: l,
                                    scrollId: n
                                })
                            }, n) : (0,
                            a.jsx)("a", {
                                className: "flex flex-col",
                                onClick: ()=>{
                                    if (i) {
                                        i();
                                        return
                                    }
                                    (0,
                                    c.k)(n)
                                }
                                ,
                                style: t === l.length - 1 ? {
                                    textDecoration: "none",
                                    ...d
                                } : {
                                    textDecoration: "none",
                                    ...d,
                                    marginRight: T ? 22 : 5
                                },
                                children: x
                            }, n)
                        }
                        ), j ? (0,
                        a.jsx)(f.o, {
                            data: l.slice(F + 1),
                            renderButton: ()=>(0,
                            a.jsxs)("div", {
                                className: "headerMenuTxt  ".concat(T ? "" : "scaleDot", " cursor-pointer"),
                                style: {
                                    color: N ? "#fff" : "#000",
                                    ...T ? {
                                        fontSize: "19px",
                                        height: "75px"
                                    } : {}
                                },
                                children: [C("head.More"), M]
                            }),
                            theme: y
                        }) : null]
                    }), (0,
                    a.jsxs)("div", {
                        className: "".concat(m().connectButtonBox),
                        children: [!n && (0,
                        a.jsx)(d.N, {
                            showBuy: !w,
                            theme: y,
                            onScrollTop: ()=>{
                                var e;
                                return null === (e = S.current) || void 0 === e ? void 0 : e.scrollTo({
                                    top: 0
                                })
                            }
                        }), (0,
                        a.jsx)(u.l, {}), null == h ? void 0 : h()]
                    })]
                }), B && (0,
                a.jsxs)("div", {
                    className: "w-[100vw] flex flex-row items-center ".concat(w ? "h-[55px]" : " h-[65px]", " md:hidden transition-all duration-200"),
                    style: {
                        backgroundColor: w ? N ? "#141414" : "#F4F0E5" : "transparent"
                    },
                    children: [(0,
                    a.jsx)(r(), {
                        src: "/imgs/logoHeader.png",
                        alt: "logoHeader",
                        width: 61,
                        height: 67,
                        priority: !0,
                        className: "".concat(m().logo, " ").concat(w ? "scale-[85%]" : "", " transition-all duration-200"),
                        onClick: ()=>{
                            var e;
                            null === (e = S.current) || void 0 === e || e.scrollTo({
                                top: 0
                            })
                        }
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-col flex-1  justify-center items-center rounded-full",
                        children: !n && (0,
                        a.jsx)(d.N, {
                            showBuy: !w,
                            theme: y,
                            onScrollTop: ()=>{
                                var e;
                                return null === (e = S.current) || void 0 === e ? void 0 : e.scrollTo({
                                    top: 0
                                })
                            }
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-row justify-end items-center absolute right-[20px]",
                        children: [(0,
                        a.jsx)(u.l, {}), (0,
                        a.jsx)(x.G, {
                            data: l,
                            isLanguages: !0,
                            isFilterShowHeader: !0
                        })]
                    })]
                })]
            })
        }
    },
    64599: function(e, l, t) {
        "use strict";
        t.d(l, {
            r: function() {
                return u
            }
        });
        var a = t(52322)
          , n = t(43913)
          , r = t(49442)
          , o = t(2784)
          , s = t(36894)
          , i = t(90609)
          , c = t(11237)
          , d = t.n(c);
        let u = e=>{
            let {data: l, currentNode: t, theme: r, style: o, panelClass: s} = e;
            return (0,
            a.jsx)(x, {
                theme: r,
                data: l,
                panelClass: s,
                renderButton: ()=>(0,
                a.jsx)(n.J.Button, {
                    style: {
                        all: "unset",
                        ...o
                    },
                    children: t
                })
            })
        }
          , x = e=>{
            let {renderButton: l, data: t, theme: c="black", panelClass: u} = e
              , x = (0,
            s.cW)()
              , p = "black" === c;
            return (0,
            a.jsx)(n.J, {
                className: "h-full flex relative items-center max-md:hidden",
                children: e=>{
                    let {open: s, close: c} = e;
                    return (0,
                    a.jsxs)(a.Fragment, {
                        children: [l({
                            open: s,
                            close: c
                        }), (0,
                        a.jsx)(r.u, {
                            as: o.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: (0,
                            a.jsx)(n.J.Panel, {
                                className: "".concat(x ? "w-[320px]  top-[35px] -left-full" : "w-[150px]  top-[65px] -left-2/3", " absolute   flex flex-col items-center right-0 ").concat(u),
                                children: (0,
                                a.jsx)("div", {
                                    className: "".concat(d().popBox, " ").concat(p ? d().popBlack : d().popWrite, " flex pt-[38px] pb-[38px]  pl-[10px] pr-[10px] w-full "),
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "flex flex-col ",
                                        children: t.map(e=>(0,
                                        a.jsx)("a", {
                                            onClick: ()=>{
                                                if (e.onClick) {
                                                    e.onClick();
                                                    return
                                                }
                                                (0,
                                                i.k)(e.scrollId),
                                                c()
                                            }
                                            ,
                                            className: "flex flex-row mb-[6px] cursor-pointer",
                                            style: {
                                                textDecorationLine: "none",
                                                textAlign: "left",
                                                scale: x ? "75%" : "none"
                                            },
                                            children: (0,
                                            a.jsx)("span", {
                                                className: "".concat(d().popItemTxt),
                                                style: {
                                                    color: p ? "#fff" : "#000",
                                                    ...x ? {} : {
                                                        fontFamily: "inherit",
                                                        fontSize: 15
                                                    }
                                                },
                                                children: e.label
                                            })
                                        }, e.label))
                                    })
                                })
                            })
                        })]
                    })
                }
            })
        }
    },
    48738: function(e, l, t) {
        "use strict";
        t.d(l, {
            q: function() {
                return p
            }
        });
        var a = t(52322)
          , n = t(43913)
          , r = t(49442)
          , o = t(60727)
          , s = t(96577)
          , i = t.n(s)
          , c = t(36894)
          , d = t(2784)
          , u = t(42564)
          , x = t.n(u);
        let p = e=>{
            let {currentNode: l, theme: t, pageType: r} = e;
            return (0,
            a.jsx)(h, {
                theme: t,
                pageType: r,
                renderButton: ()=>(0,
                a.jsx)(n.J.Button, {
                    style: {
                        all: "unset"
                    },
                    children: l
                })
            })
        }
          , h = e=>{
            let {renderButton: l, theme: t="black", pageType: s="buy"} = e
              , u = "black" === t
              , p = [{
                label: "Twitter",
                icon: "twitter",
                url: "https://twitter.com/TheMemeinator__",
                offset: -2
            }, {
                label: "Reddit",
                icon: "reddit",
                url: "https://www.reddit.com/r/TheMemeinator/"
            }, {
                label: "Instagram",
                icon: "ins",
                url: "https://www.instagram.com/thememeinatorofficial/",
                offset: -6
            }, {
                label: "Tiktok",
                icon: "tiktok",
                url: "https://www.tiktok.com/@thememeinator_"
            }, {
                label: "Youtube",
                icon: "youtube",
                url: "https://www.youtube.com/channel/UCIGhf_GMR202QRC06zRvrtA",
                offset: -2
            }, {
                label: "Linktree",
                icon: "linktree",
                url: "https://linktr.ee/thememeinatorofficial"
            }, {
                label: "Discord",
                icon: "discord",
                url: "https://discord.gg/Memeinator"
            }, {
                label: "Telegram",
                icon: "telegram",
                url: "https://t.me/MemeinatorOfficial",
                offset: -3
            }, {
                label: "Mailing List",
                icon: "mail",
                url: "#subscribe",
                onClick: ()=>{
                    "buy" !== s && (0,
                    c.F_)("subscribe", "buy")
                }
                ,
                offset: -8
            }]
              , {t: h} = (0,
            o.$G)()
              , f = (0,
            c.cW)();
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(n.J, {
                    className: " relative  h-full flex flex-1 items-center md:hidden",
                    children: e=>{
                        let {open: t, close: o} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [l({
                                open: t,
                                close: o
                            }), (0,
                            a.jsx)(r.u, {
                                as: d.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsxs)(n.J.Panel, {
                                    className: " flex flex-col fixed bottom-0 left-0 h-full z-[9999] w-[100vw] bg-[#141414]",
                                    children: [(0,
                                    a.jsx)(m, {}), p.map(e=>(0,
                                    a.jsxs)("a", {
                                        href: e.url,
                                        target: "_blank",
                                        className: "flex mb-[0px] p-[16px] mr-[16px] ml-[16px] pt-[16px] pb-[16px] justify-between flex-row border-[#4F4F4F] border-b",
                                        style: {
                                            textDecorationLine: "none"
                                        },
                                        onClick: ()=>{
                                            o()
                                        }
                                        ,
                                        children: [(0,
                                        a.jsx)(i(), {
                                            width: 26,
                                            height: 26,
                                            src: "/imgs/social-white/".concat(e.icon, ".png"),
                                            alt: "share3",
                                            style: {
                                                objectFit: "contain"
                                            }
                                        }), (0,
                                        a.jsx)("span", {
                                            className: "".concat(x().popItemTxt, " text-left"),
                                            children: e.label
                                        })]
                                    }, e.url))]
                                })
                            })]
                        })
                    }
                }), (0,
                a.jsx)(n.J, {
                    className: "h-full flex relative items-center max-md:hidden",
                    children: e=>{
                        let {open: t, close: o} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [l ? l({
                                open: t,
                                close: o
                            }) : (0,
                            a.jsx)(n.J.Button, {
                                className: "",
                                style: {
                                    all: "unset"
                                },
                                children: h("head.Socials")
                            }), (0,
                            a.jsx)(r.u, {
                                as: d.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsx)(n.J.Panel, {
                                    className: " ".concat(f ? "  top-[35px] -left-1/3" : "  top-[65px] -left-3/4", " z-[999] absolute top-[35px] "),
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "".concat(x().popBox, " ").concat(u ? x().popBlack : x().popWrite, " flex pt-[38px] pb-[38px]  pl-[57px] pr-[57px] "),
                                        children: (0,
                                        a.jsx)("div", {
                                            className: "flex flex-col",
                                            children: p.map(e=>(0,
                                            a.jsxs)("a", {
                                                href: e.url,
                                                target: e.url.startsWith("#") ? void 0 : "_blank",
                                                className: "flex mb-[10px] flex-row hover:opacity-50 cursor-pointer",
                                                style: {
                                                    textDecorationLine: "none"
                                                },
                                                onClick: ()=>{
                                                    var l;
                                                    null === (l = e.onClick) || void 0 === l || l.call(e),
                                                    o()
                                                }
                                                ,
                                                children: [(0,
                                                a.jsx)(i(), {
                                                    width: 22,
                                                    height: 22,
                                                    src: "/imgs/".concat(u ? "social-white" : "social-black", "/").concat(e.icon, ".png"),
                                                    alt: "share3",
                                                    style: {
                                                        objectFit: "contain"
                                                    }
                                                }), (0,
                                                a.jsx)("span", {
                                                    className: "".concat(x().popItemTxt, "  scale-[70%] text-left"),
                                                    style: {
                                                        marginLeft: "".concat(e.offset, "px"),
                                                        color: u ? "#fff" : "#000"
                                                    },
                                                    children: e.label
                                                })]
                                            }, e.url))
                                        })
                                    })
                                })
                            })]
                        })
                    }
                })]
            })
        }
          , m = ()=>(0,
        a.jsxs)("div", {
            className: "md:hidden flex justify-between items-center border-[#fff] border-b-[1px] pb-[7px] pt-[7px]  pr-[24px] pl-[24px]",
            children: [(0,
            a.jsx)("div", {
                className: "".concat(x().languagesTitle),
                children: "Socials"
            }), (0,
            a.jsx)(n.J.Button, {
                className: "",
                style: {
                    all: "unset"
                },
                children: (0,
                a.jsx)(i(), {
                    src: "/imgs/writeClose.png",
                    alt: "writeClose",
                    width: 12,
                    height: 12,
                    className: " cursor-pointer"
                })
            })]
        })
    },
    18788: function(e, l, t) {
        "use strict";
        t.d(l, {
            H: function() {
                return u
            }
        });
        var a = t(52322)
          , n = t(60727)
          , r = t(2784)
          , o = t(64599)
          , s = t(48738)
          , i = t(90609)
          , c = t(36894)
          , d = t(72733);
        let u = e=>{
            let {scrollId: l, pageTheme: t="black", pageType: u="buy"} = null != e ? e : {}
              , {t: x} = (0,
            n.$G)()
              , [p,h] = (0,
            r.useState)(!1)
              , m = [{
                scrollId: "purchase",
                label: "",
                isShowHeader: !1,
                pageType: "buy"
            }, {
                scrollId: "about",
                label: x("head.About"),
                isPop: !0,
                renderHeader: e=>{
                    let {currentNode: l, data: n} = e;
                    return (0,
                    a.jsx)(o.r, {
                        theme: "black" === t ? "black" : "yellow",
                        currentNode: l,
                        data: n.filter(e=>["about", "meetTeam", "socialmedia", "token", "tokeno", "roadmap", "howtobuy", "faq", "merch"].includes(e.scrollId))
                    })
                }
                ,
                renderMobileMenu(e) {
                    let {data: l, close: t} = e;
                    return (0,
                    a.jsx)(d.G, {
                        className: " bg-Black z-[99999]",
                        isLanguages: !1,
                        isFilterShowHeader: !1,
                        onClose: t,
                        renderButton: ()=>(0,
                        a.jsx)(d.W, {
                            label: x("head.About")
                        }),
                        data: l.filter(e=>["meetTeam", "socialmedia", "token", "tokeno", "roadmap", "giveaways", "howtobuy", "faq", "merch"].includes(e.scrollId))
                    })
                },
                pageType: "buy"
            }, {
                scrollId: "meetTeam",
                label: x("meetTeam.title"),
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "socialmedia",
                label: x("head.SocialMedia"),
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "token",
                label: x("head.MMTR"),
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "tokeno",
                label: x("head.Tokeno"),
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "roadmap",
                label: x("head.Roadmap"),
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "howtobuy",
                label: x("head.HowToBuy"),
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "faq",
                label: x("head.FAQ"),
                pageType: "buy",
                isShowHeader: !1,
                isShowHeaderMobile: !1
            }, {
                scrollId: "buyFooter",
                label: "",
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "buy"
            }, {
                scrollId: "Socials",
                label: x("head.Socials"),
                isPop: !0,
                renderHeader: e=>{
                    let {currentNode: l} = e;
                    return (0,
                    a.jsx)(s.q, {
                        currentNode: l,
                        theme: "black" === t ? "black" : "yellow"
                    })
                }
                ,
                isShowHeaderMobile: !1,
                onClick: ()=>{}
                ,
                pageType: "share"
            }, {
                scrollId: "howtobuyPage",
                label: x("head.HowToBuy"),
                pageType: "howtobuy"
            }, {
                scrollId: "referral",
                label: x("head.Referral"),
                pageType: "referral"
            }, {
                scrollId: "fame",
                label: "Fame",
                isShowHeaderMobile: !1,
                isShowHeader: !1,
                pageType: "referral"
            }, {
                scrollId: "ranks",
                label: "Ranks",
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "referral"
            }, {
                scrollId: "queries",
                label: "Queries",
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "referral"
            }, {
                scrollId: "subscribe",
                label: "Subscribe",
                isShowHeaderMobile: !1,
                isShowHeader: !1,
                pageType: "referral"
            }, {
                scrollId: "staking",
                label: x("head.Staking"),
                pageType: "referral",
                onClick: ()=>{
                    window.open("https://memeinator.com/staking", "_blank")
                }
            }, {
                scrollId: "merch",
                label: x("head.Merch"),
                pageType: "referral",
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                onClick: ()=>{
                    window.open("https://merch.memeinator.com/", "_blank")
                }
            }, {
                scrollId: "giveaway",
                label: x("head.Giveaways"),
                pageType: "buy",
                isPop: !0,
                renderHeader: e=>{
                    let {currentNode: l, data: n} = e;
                    return (0,
                    a.jsx)(o.r, {
                        theme: "black" === t ? "black" : "yellow",
                        currentNode: l,
                        data: n.filter(e=>["giveaway", "airdrop"].includes(e.scrollId)),
                        panelClass: "w-[200px] left-[0px]"
                    })
                }
            }, {
                scrollId: "airdrop",
                label: "Airdrop",
                pageType: "referral",
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                onClick: ()=>{
                    window.open("https://www.tropee.com/t/ZRBj7uc5", "_blank")
                }
            }, {
                scrollId: "media",
                label: x("head.Media"),
                pageType: "media"
            }];
            return (0,
            r.useEffect)(()=>{
                l && (0,
                i.k)(l)
            }
            , [l]),
            {
                routes: m.map(e=>e.onClick ? e : {
                    ...e,
                    onClick: ()=>e.pageType === u ? (0,
                    i.k)(e.scrollId) : (0,
                    c.F_)(e.scrollId, e.pageType)
                }),
                isOpen: p,
                setIsOpen: h
            }
        }
    },
    90609: function(e, l, t) {
        "use strict";
        t.d(l, {
            L: function() {
                return n
            },
            k: function() {
                return a
            }
        });
        let a = e=>{
            setTimeout(()=>{
                var l;
                null === (l = document.getElementById("#".concat(e))) || void 0 === l || l.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "end"
                })
            }
            , 10)
        }
          , n = ()=>{
            setTimeout(()=>{
                var e;
                null === (e = document.getElementById("headerWrapper")) || void 0 === e || e.scrollTo({
                    behavior: "smooth",
                    top: 0
                })
            }
            , 10)
        }
    },
    36894: function(e, l, t) {
        "use strict";
        t.d(l, {
            F_: function() {
                return o
            },
            cW: function() {
                return r
            }
        });
        var a = t(60727);
        let n = ["en", "de", "it", "fr", "es", "nl", "tr", "cs", "pl", "no", "pt", "ro", "sv", "tk"]
          , r = ()=>{
            let {i18n: e} = (0,
            a.$G)();
            return n.includes(e.language)
        }
          , o = (e,l)=>{
            window.location.href = "/".concat("buy" === l ? "" : "".concat(l, "/"), "?id=").concat(e)
        }
    },
    94628: function(e, l, t) {
        "use strict";
        t.d(l, {
            $: function() {
                return d
            }
        });
        var a = t(52322)
          , n = t(53079)
          , r = t(4444)
          , o = t.n(r)
          , s = t(96577)
          , i = t.n(s)
          , c = t(60727);
        let d = e=>{
            let {pageType: l="buy"} = e
              , t = "buy" === l
              , {t: r} = (0,
            c.$G)()
              , s = [{
                label: r("footer.privacy"),
                url: "privacy-policy"
            }, {
                label: r("footer.terms"),
                url: "terms-conditions"
            }, {
                label: r("footer.cookie"),
                url: "cookie-policy"
            }];
            return (0,
            a.jsxs)("div", {
                className: o().footerBox,
                id: "#subscribe",
                children: [(0,
                a.jsx)("div", {
                    className: "".concat(o().footerShareBox, " "),
                    children: (0,
                    a.jsx)(n.wp, {})
                }), (0,
                a.jsxs)("div", {
                    className: "flex self-center items-center mb-[55px] max-md:hidden",
                    children: [(0,
                    a.jsx)(i(), {
                        src: t ? "/imgs/email.png" : "/imgs/blackEmail.png",
                        alt: "email",
                        width: 16,
                        height: 12,
                        className: "mr-[15px] w-[16px] h-[12px]"
                    }), (0,
                    a.jsx)("a", {
                        className: "".concat(o().email, " "),
                        style: {
                            color: t ? "#fff" : "#000"
                        },
                        href: "mailto:contact@memeinator.com",
                        children: "contact@memeinator.com"
                    })]
                }), (0,
                a.jsx)("div", {
                    className: o().footerMenuBox,
                    children: s.map(e=>(0,
                    a.jsx)("a", {
                        className: o().footerMenuItem,
                        href: e.url,
                        target: "_blank",
                        children: e.label
                    }, e.label))
                }), (0,
                a.jsxs)("div", {
                    className: "flex  md:flex-col flex-col-reverse",
                    children: [(0,
                    a.jsx)("div", {
                        className: "".concat(o().footerDesc),
                        id: "footerdesc",
                        children: r("footer.desc")
                    }), (0,
                    a.jsxs)("div", {
                        className: o().footerTitle,
                        style: {
                            color: t ? "#fff" : "#000"
                        },
                        children: [r("footer.copyright"), (0,
                        a.jsx)("br", {
                            className: "md:hidden block"
                        }), " ", r("footer.rightReserve")]
                    })]
                })]
            })
        }
    },
    67989: function(e, l, t) {
        "use strict";
        t.d(l, {
            fM: function() {
                return I
            },
            Pz: function() {
                return C
            },
            iO: function() {
                return S
            },
            k3: function() {
                return d
            }
        });
        var a = t(52322)
          , n = t(2784)
          , r = t(13152)
          , o = t(96577)
          , s = t.n(o)
          , i = t(5632)
          , c = t(29642);
        let d = e=>{
            setTimeout(()=>{
                var l;
                null === (l = document.getElementById("#".concat(e))) || void 0 === l || l.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "end"
                })
            }
            , 10)
        }
        ;
        var u = t(43913)
          , x = t(49442)
          , p = t(60727)
          , h = t(26928)
          , m = t.n(h);
        let f = [{
            label: "English",
            iconUrl: "/icons/flag/us.png",
            key: "en"
        }, {
            label: "Deutsch",
            iconUrl: "/icons/flag/deutsch.svg",
            key: "de"
        }, {
            label: "Italiano",
            iconUrl: "/icons/flag/italiano.svg",
            key: "it"
        }, {
            label: "Fran\xe7ais",
            iconUrl: "/icons/flag/fran\xe7ais.svg",
            key: "fr"
        }, {
            label: "Espa\xf1ol",
            iconUrl: "/icons/flag/espa\xf1ol.svg",
            key: "es"
        }, {
            label: "日本語",
            iconUrl: "/icons/flag/japanese.svg",
            key: "ja"
        }, {
            label: "แบบไทย",
            iconUrl: "/icons/flag/thai.svg",
            key: "th"
        }, {
            label: "한국어",
            iconUrl: "/icons/flag/korean.svg",
            key: "ko"
        }, {
            label: "Nederlands",
            iconUrl: "/icons/flag/nederlands.svg",
            key: "nl"
        }, {
            label: "中文(简体)",
            iconUrl: "/icons/flag/chinese.svg",
            key: "zh-CN"
        }, {
            label: "العربية",
            key: "ar",
            iconUrl: "/icons/flag/arabic.svg"
        }, {
            key: "no",
            iconUrl: "/icons/flag/norwe.png",
            label: "Norsk"
        }, {
            key: "pl",
            iconUrl: "/icons/flag/polish.svg",
            label: "Polski"
        }, {
            key: "tk",
            iconUrl: "/icons/flag/turkish.svg",
            label: "T\xfcrk\xe7e"
        }, {
            key: "dk",
            iconUrl: "/icons/flag/danish.png",
            label: "Dansk"
        }, {
            key: "sv",
            iconUrl: "/icons/flag/sweden.png",
            label: "Svenska"
        }, {
            key: "ro",
            iconUrl: "/icons/flag/romanian.png",
            label: "Rom\xe2nă"
        }, {
            key: "pt",
            iconUrl: "/icons/flag/portugal.svg",
            label: "Portugu\xeas"
        }, {
            key: "ru",
            iconUrl: "/icons/flag/russia.png",
            label: "Русский"
        }]
          , g = e=>{
            var l;
            let {renderButton: t} = e
              , {i18n: r} = (0,
            p.$G)()
              , o = null !== (l = f.find(e=>e.key === r.language)) && void 0 !== l ? l : f[0];
            return (0,
            a.jsxs)("div", {
                className: "h-full flex flex-1 ",
                children: [(0,
                a.jsx)(u.J, {
                    className: " relative  h-full flex flex-1 items-center md:hidden",
                    children: e=>{
                        let {open: l, close: r} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [t ? t({
                                open: l,
                                close: r,
                                data: o
                            }) : (0,
                            a.jsx)(u.J.Button, {
                                className: "flex items-center",
                                style: {
                                    all: "unset"
                                },
                                children: (0,
                                a.jsx)(s(), {
                                    src: o.iconUrl,
                                    alt: "language",
                                    width: 21,
                                    height: 21,
                                    className: "cursor-pointer ml-[30px] flex md:hidden"
                                })
                            }), (0,
                            a.jsx)(x.u, {
                                as: n.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsxs)(u.J.Panel, {
                                    className: "flex flex-col fixed bottom-0 left-0 h-full z-[9999] w-[100vw] bg-[#141414]",
                                    children: [(0,
                                    a.jsx)(b, {}), (0,
                                    a.jsxs)("div", {
                                        className: "flex flex-1 overflow-auto p-[16px]",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex flex-1 flex-col",
                                            children: f.slice(0, Math.ceil(f.length / 2)).map((e,l)=>(0,
                                            a.jsx)(y, {
                                                active: o.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "flex flex-1 flex-col  ",
                                            children: f.slice(Math.ceil(f.length / 2)).map((e,l)=>(0,
                                            a.jsx)(y, {
                                                active: o.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        })]
                                    })]
                                })
                            })]
                        })
                    }
                }), (0,
                a.jsx)(u.J, {
                    className: "h-full flex items-center max-md:hidden",
                    children: e=>{
                        let {open: l, close: r} = e;
                        return (0,
                        a.jsxs)(a.Fragment, {
                            children: [t ? t({
                                open: l,
                                close: r,
                                data: o
                            }) : (0,
                            a.jsx)(u.J.Button, {
                                className: "",
                                style: {
                                    all: "unset"
                                },
                                children: (0,
                                a.jsx)(s(), {
                                    src: o.iconUrl,
                                    alt: "language",
                                    width: 28,
                                    height: 28,
                                    className: "cursor-pointer ml-[30px] flex max-md:hidden"
                                })
                            }), (0,
                            a.jsx)(x.u, {
                                as: n.Fragment,
                                enter: "transition ease-out duration-200",
                                enterFrom: "opacity-0 translate-y-1",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "transition ease-in duration-150",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-1",
                                children: (0,
                                a.jsx)(u.J.Panel, {
                                    className: "absolute top-[55px] right-0",
                                    children: (0,
                                    a.jsxs)("div", {
                                        className: "".concat(m().languagesPop, " flex pt-[28px] pb-[28px]  pl-[27px] pr-[27px] "),
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "flex flex-col  w-[165px]",
                                            children: f.slice(0, Math.ceil(f.length / 2)).map((e,l)=>(0,
                                            a.jsx)(y, {
                                                active: o.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        }), (0,
                                        a.jsx)("div", {
                                            className: "flex flex-col ml-[5px] w-[165px]",
                                            children: f.slice(Math.ceil(f.length / 2)).map((e,l)=>(0,
                                            a.jsx)(y, {
                                                active: o.label === e.label,
                                                label: e.label,
                                                iconUrl: e.iconUrl,
                                                lang: e.key
                                            }, l.toString()))
                                        })]
                                    })
                                })
                            })]
                        })
                    }
                })]
            })
        }
          , b = ()=>(0,
        a.jsxs)("div", {
            className: "md:hidden flex justify-between items-center border-[#fff] border-b-[1px] pb-[7px] pt-[7px]  pr-[24px] pl-[24px]",
            children: [(0,
            a.jsx)("div", {
                className: "".concat(m().languagesTitle),
                children: "Languages"
            }), (0,
            a.jsx)(u.J.Button, {
                className: "",
                style: {
                    all: "unset"
                },
                children: (0,
                a.jsx)(s(), {
                    src: "/imgs/writeClose.png",
                    alt: "writeClose",
                    width: 12,
                    height: 12,
                    className: " cursor-pointer"
                })
            })]
        })
          , y = e=>{
            let {active: l, label: t, iconUrl: n, lang: r} = e;
            return (0,
            a.jsxs)("div", {
                className: "flex cursor-pointer pl-[16px] ",
                onClick: ()=>{
                    window.location.href = "".concat(window.location.origin, "/").concat(r)
                }
                ,
                children: [(0,
                a.jsx)("div", {
                    className: "w-[30px] flex items-center",
                    children: (0,
                    a.jsx)(s(), {
                        src: n,
                        alt: "languageIcon",
                        width: 18,
                        height: 18,
                        objectFit: "contain"
                    })
                }), (0,
                a.jsx)("div", {
                    className: "".concat(m().languagesLabel, " "),
                    children: t
                }), (0,
                a.jsx)(s(), {
                    src: "/imgs/header/whiteCheck.png",
                    alt: "language",
                    width: 14,
                    height: 9,
                    style: {
                        objectFit: "contain"
                    },
                    className: "ml-[14px] ".concat(l ? " opacity-100" : "opacity-0")
                })]
            })
        }
        ;
        var w = t(18788)
          , v = t(72733)
          , j = t(25076)
          , k = t(70229)
          , _ = t(90407);
        let N = e=>{
            let {data: l, pageType: t, hideButton: r, renderRightButton: o} = e
              , [u,x] = (0,
            n.useState)(!1)
              , h = "buy" === t || "giveaway" === t || "referral" === t
              , f = !(0,
            c.cW)()
              , {t: b} = (0,
            p.$G)()
              , {replace: y} = (0,
            i.useRouter)()
              , N = (0,
            n.useRef)(null)
              , {routes: T} = (0,
            w.H)({
                pageType: "media"
            })
              , [B,I] = (0,
            n.useState)(!1)
              , S = (0,
            n.useRef)(B);
            S.current = B,
            (0,
            n.useEffect)(()=>{
                setTimeout(()=>{
                    var e, l;
                    (null === (e = N.current) || void 0 === e ? void 0 : e.offsetWidth) && (null === (l = N.current) || void 0 === l ? void 0 : l.offsetWidth) <= _.F && I(!0)
                }
                , 10),
                window.addEventListener("resize", ()=>{
                    window.innerWidth < 768 || (window.innerWidth > _.F && S.current && I(!1),
                    window.innerWidth <= _.F && !S.current && I(!0))
                }
                );
                let e = document.getElementById("headerWrapper");
                N.current = e;
                let l = e=>{
                    if (e.target && e.target.scrollTop > 0) {
                        x(!0);
                        return
                    }
                    e.target && 0 === e.target.scrollTop && x(!1)
                }
                ;
                return null == e || e.addEventListener("scroll", l),
                ()=>{
                    null == e || e.removeEventListener("scroll", l)
                }
            }
            , []);
            let C = l.findIndex(e=>"howtobuyPage" === e.scrollId)
              , F = (0,
            a.jsx)(s(), {
                src: h ? "/imgs/writeDown.png" : "/imgs/blackDown.png",
                alt: "writeDown",
                width: 14,
                height: 7,
                className: "".concat(f ? "ml-[3px] mt-[20px] mr-[20px]" : "mt-[3px] ml-[3px] mr-[10px]", " "),
                style: {
                    height: 7,
                    width: 14
                }
            });
            return (0,
            a.jsxs)("div", {
                style: {
                    backgroundColor: u ? h ? "#141414" : "#F4F0E5" : "transparent"
                },
                className: "w-[100vw] flex flex-col items-center",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-row w-full items-center max-w-[1900px]  ".concat(u ? "md:h-[60px]" : "md:h-[75px]", "  max-md:hidden relative transition-all duration-200"),
                    children: [(0,
                    a.jsx)(s(), {
                        src: "/imgs/logoHeader.png",
                        alt: "logoHeader",
                        width: 55,
                        height: 65,
                        className: "".concat(m().logo, " ").concat(u ? "scale-[85%]" : "", " transition-all duration-200 max-md:h-[40px] max-md:w-[36px] max-md:left-[20px]"),
                        onClick: ()=>{
                            if ("buy" === t) {
                                var e;
                                null === (e = N.current) || void 0 === e || e.scrollTo({
                                    top: 0
                                })
                            } else
                                y("/")
                        }
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-row items-center justify-center flex-1 ".concat(m().menuBox),
                        children: [l.map((e,t)=>{
                            let {scrollId: n, label: r, renderHeader: o, isShowHeader: s=!0, onClick: i, style: c, isPop: u} = e;
                            if ("" === n || "" === r || !s || B && t > C)
                                return null;
                            let x = (0,
                            a.jsxs)("div", {
                                className: "headerMenuTxt  ".concat(f ? "" : "scaleDot", " cursor-pointer"),
                                style: {
                                    color: h ? "#fff" : "#000",
                                    ...f ? {
                                        fontSize: "19px",
                                        height: "75px"
                                    } : {}
                                },
                                children: [r, u ? F : null]
                            });
                            return o ? (0,
                            a.jsx)("div", {
                                style: c,
                                className: "".concat(f ? "" : " -mr-15px"),
                                children: o({
                                    currentNode: x,
                                    data: l,
                                    scrollId: n
                                })
                            }, n) : (0,
                            a.jsx)("a", {
                                className: "flex flex-col ",
                                onClick: ()=>{
                                    if (i) {
                                        i();
                                        return
                                    }
                                    d(n)
                                }
                                ,
                                style: t === l.length - 1 ? {
                                    textDecoration: "none",
                                    ...c
                                } : {
                                    textDecoration: "none",
                                    ...c,
                                    marginRight: f ? 22 : -10
                                },
                                children: x
                            }, n)
                        }
                        ), B ? (0,
                        a.jsx)(k.o, {
                            data: T.slice(C + 1),
                            renderButton: ()=>(0,
                            a.jsxs)("div", {
                                className: "headerMenuTxt  ".concat(f ? "" : "scaleDot", " cursor-pointer"),
                                style: {
                                    color: h ? "#fff" : "#000",
                                    ...f ? {
                                        fontSize: "19px",
                                        height: "75px"
                                    } : {}
                                },
                                children: [b("head.More"), F]
                            }),
                            theme: h ? "black" : "yellow"
                        }) : null]
                    }), (0,
                    a.jsxs)("div", {
                        className: "".concat(m().connectButtonBox),
                        children: [!r && (0,
                        a.jsx)(j.N, {
                            showBuy: !u,
                            theme: "media" === t ? "yellow" : "black",
                            onScrollTop: ()=>{
                                var e;
                                return null === (e = N.current) || void 0 === e ? void 0 : e.scrollTo({
                                    top: 0
                                })
                            }
                        }), (0,
                        a.jsx)(g, {}), null == o ? void 0 : o()]
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: "w-[100vw] flex flex-row items-center ".concat(u ? "h-[55px]" : " h-[65px]", " md:hidden transition-all duration-200"),
                    style: {
                        backgroundColor: u ? h ? "#141414" : "#F4F0E5" : "transparent"
                    },
                    children: [(0,
                    a.jsx)(s(), {
                        src: "/imgs/logoHeader.png",
                        alt: "logoHeader",
                        width: 61,
                        height: 67,
                        className: "".concat(m().logo, " ").concat(u ? "scale-[85%]" : "", " transition-all duration-200"),
                        onClick: ()=>{
                            var e;
                            null === (e = N.current) || void 0 === e || e.scrollTo({
                                top: 0
                            })
                        }
                    }), (0,
                    a.jsx)("div", {
                        className: "flex flex-col flex-1  justify-center items-center rounded-full",
                        children: !r && (0,
                        a.jsx)(j.N, {
                            showBuy: !u,
                            theme: "media" === t ? "yellow" : "black",
                            onScrollTop: ()=>{
                                var e;
                                return null === (e = N.current) || void 0 === e ? void 0 : e.scrollTo({
                                    top: 0
                                })
                            }
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex flex-row justify-end items-center absolute right-[20px]",
                        children: [(0,
                        a.jsx)(g, {}), (0,
                        a.jsx)(v.G, {
                            data: T,
                            isLanguages: !0,
                            isFilterShowHeader: !0
                        })]
                    })]
                })]
            })
        }
        ;
        var T = t(5001)
          , B = t.n(T);
        function I(e) {
            let {children: l, lazy: t} = e
              , r = (0,
            n.useRef)(null)
              , o = (0,
            n.useRef)(!1)
              , [s,i] = (0,
            n.useState)(!1);
            return (0,
            n.useEffect)(()=>{
                let e = r.current
                  , l = new IntersectionObserver(a=>{
                    o.current || a.forEach(a=>{
                        r.current && a.isIntersecting && (o.current = !0,
                        t && i(!0),
                        r.current.className = "".concat(B().fadeInSection, " ").concat(B().isVisible),
                        e && l.unobserve(e))
                    }
                    )
                }
                );
                return l.observe(e),
                ()=>{
                    l.unobserve(e)
                }
            }
            , []),
            (0,
            a.jsx)("div", {
                className: "".concat(B().fadeInSection),
                ref: r,
                children: (0,
                n.useMemo)(()=>t && !s ? null : l, [t, s])
            })
        }
        function S(e) {
            let {children: l, className: t, style: r} = e
              , [o,s] = (0,
            n.useState)(!1)
              , i = (0,
            n.useRef)(null)
              , c = (0,
            n.useRef)(!1);
            return (c.current = o,
            (0,
            n.useEffect)(()=>{
                let e = new IntersectionObserver(e=>{
                    e.forEach(e=>{
                        c.current || s(e.isIntersecting)
                    }
                    )
                }
                )
                  , l = i.current;
                return e.observe(l),
                ()=>{
                    e.unobserve(l)
                }
            }
            , []),
            o) ? (0,
            a.jsx)("div", {
                className: t,
                style: r,
                ref: i,
                children: l
            }) : (0,
            a.jsx)("div", {
                className: t,
                style: r,
                ref: i
            })
        }
        let C = e=>{
            let {data: l, pageType: t="buy", tips: o, hideButton: s, renderRightButton: i} = e
              , c = (0,
            n.useRef)([])
              , {isInCardPurchase: d} = (0,
            r.O)()
              , [u,x] = (0,
            n.useState)(l)
              , p = (0,
            n.useRef)(null)
              , [h] = (0,
            n.useState)(!1)
              , m = (0,
            n.useRef)(h);
            return m.current = h,
            (0,
            n.useEffect)(()=>{
                x(l.map((e,l)=>({
                    ...e,
                    ...c.current[l]
                })))
            }
            , []),
            (0,
            a.jsxs)("div", {
                style: {
                    width: "100vw",
                    height: "100vh",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    scrollBehavior: "smooth"
                },
                id: "headerWrapper",
                ref: p,
                onScroll: ()=>{}
                ,
                children: [(0,
                a.jsxs)("div", {
                    className: "".concat(B().container, " ").concat(d ? "" : "fixed", "  top-0 left-0"),
                    children: [(0,
                    a.jsx)("div", {
                        className: "w-full animate__animated animate__fadeIn",
                        children: (0,
                        a.jsx)(N, {
                            data: u,
                            hideButton: s,
                            pageType: t,
                            renderRightButton: i
                        })
                    }), null, o]
                }), u.map((e,l)=>(0,
                a.jsx)("div", {
                    className: "".concat(B().sectionItem, "  flex flex-col relative justify-center"),
                    style: {
                        width: "100%"
                    },
                    ref: e=>{
                        var t, a, n;
                        c.current.find(e=>e.index === l) ? c.current[l].top = null !== (t = null == e ? void 0 : e.offsetTop) && void 0 !== t ? t : 0 : c.current.push({
                            top: null !== (a = null == e ? void 0 : e.offsetTop) && void 0 !== a ? a : 0,
                            height: null !== (n = null == e ? void 0 : e.offsetHeight) && void 0 !== n ? n : 0,
                            index: l
                        })
                    }
                    ,
                    children: e.renderContent({
                        scrollId: e.scrollId,
                        label: e.label,
                        renderAnchorPoint: l=>(0,
                        a.jsx)("div", {
                            style: null == l ? void 0 : l.style,
                            className: " w-1 h-1  opacity-0 -z-10 absolute top-[-55px] max-md:top-[-20px] ".concat(null == l ? void 0 : l.className),
                            id: "#".concat(e.scrollId)
                        })
                    })
                }, l.toString()))]
            })
        }
    },
    48273: function(e, l, t) {
        "use strict";
        t.d(l, {
            fM: function() {
                return a.fM
            },
            iO: function() {
                return a.iO
            },
            JA: function() {
                return w
            },
            nk: function() {
                return u
            },
            F_: function() {
                return n.F_
            },
            i_: function() {
                return n.i_
            },
            k3: function() {
                return a.k3
            },
            HD: function() {
                return g
            },
            cW: function() {
                return n.cW
            }
        }),
        t(94628);
        var a = t(67989)
          , n = t(29642)
          , r = t(52322)
          , o = t(96577)
          , s = t.n(o)
          , i = t(49442)
          , c = t(15198)
          , d = t(2784);
        function u(e) {
            let {isOpen: l, setIsOpen: t} = e;
            return (0,
            r.jsx)(i.u, {
                appear: !0,
                show: l,
                as: d.Fragment,
                children: (0,
                r.jsx)(c.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: ()=>{
                        t(!1)
                    }
                    ,
                    children: (0,
                    r.jsx)("div", {
                        className: "fixed inset-0 overflow-y-auto",
                        children: (0,
                        r.jsx)("div", {
                            className: "flex min-h-full items-center justify-center p-4 text-center bg-red",
                            onClick: ()=>{
                                t(!1)
                            }
                            ,
                            children: (0,
                            r.jsx)(i.u.Child, {
                                as: d.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: (0,
                                r.jsxs)("div", {
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: " rounded bg-[#00000020] h-[20px] w-[20px] absolute top-[-25px] right-0 p-[5px]",
                                        onClick: ()=>{
                                            t(!1)
                                        }
                                        ,
                                        children: (0,
                                        r.jsx)(s(), {
                                            src: "/imgs/writeClose.png",
                                            alt: "writeClose",
                                            width: 20,
                                            height: 20,
                                            className: " cursor-pointer"
                                        })
                                    }), (0,
                                    r.jsx)("iframe", {
                                        width: "80%",
                                        height: "600px",
                                        src: "https://www.youtube.com/embed/LD7DsBVbXw4?autoplay=1&ab_channel=TheMemeinator",
                                        frameBorder: "0",
                                        allowFullScreen: !0,
                                        title: "youtube",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        className: "h-[250px] w-[95vw] md:h-[580px] md:w-[1000px]"
                                    })]
                                })
                            })
                        })
                    })
                })
            })
        }
        var x = t(60727)
          , p = t(18788)
          , h = t(72733)
          , m = t(48738)
          , f = t(64599);
        let g = e=>{
            let {scrollId: l, pageTheme: t="black"} = null != e ? e : {}
              , {t: n} = (0,
            x.$G)()
              , [o,s] = (0,
            d.useState)(!1)
              , {routes: i} = (0,
            p.H)({
                pageType: "media"
            })
              , c = [{
                scrollId: "purchase",
                label: "",
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "about",
                label: n("head.About"),
                isPop: !0,
                renderContent: ()=>null,
                renderHeader: e=>{
                    let {currentNode: l} = e;
                    return (0,
                    r.jsx)(f.r, {
                        theme: t,
                        currentNode: l,
                        data: i.filter(e=>["about", "meetTeam", "socialmedia", "giveaways", "token", "tokeno", "roadmap", "howtobuy", "faq"].includes(e.scrollId))
                    })
                }
                ,
                renderMobileMenu: ()=>(0,
                r.jsx)(h.G, {
                    isLanguages: !1,
                    isFilterShowHeader: !1,
                    renderButton: ()=>(0,
                    r.jsx)(h.W, {
                        label: "About"
                    }),
                    data: c.filter(e=>["meetTeam", "socialmedia", "token", "tokeno", "roadmap", "howtobuy", "faq"].includes(e.scrollId))
                }),
                pageType: "buy"
            }, {
                scrollId: "token",
                label: n("head.MMTR"),
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "tokeno",
                label: n("head.Tokeno"),
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "roadmap",
                label: n("head.Roadmap"),
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "howtobuy",
                label: n("head.HowToBuy"),
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "Socials",
                label: n("head.Socials"),
                isPop: !0,
                renderHeader: e=>{
                    let {currentNode: l} = e;
                    return (0,
                    r.jsx)(m.q, {
                        currentNode: l,
                        theme: t,
                        pageType: "howtobuy"
                    })
                }
                ,
                renderContent: ()=>null,
                onClick: ()=>{}
                ,
                pageType: "other"
            }, {
                scrollId: "howtobuyPage",
                label: n("head.HowToBuy"),
                renderContent: ()=>null,
                pageType: "howtobuy"
            }, {
                scrollId: "meetTeam",
                label: n("meetTeam.title"),
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "video",
                label: n("head.Video"),
                renderContent: ()=>null,
                onClick: ()=>{
                    s(!0)
                }
                ,
                pageType: "other",
                isShowHeader: !1
            }, {
                scrollId: "faq",
                label: n("head.FAQ"),
                renderContent: ()=>null,
                pageType: "buy",
                isShowHeader: !1
            }, {
                scrollId: "buyFooter",
                label: "",
                isShowHeader: !1,
                renderContent: ()=>null,
                pageType: "buy"
            }, {
                scrollId: "referral",
                label: n("head.Referral"),
                renderContent: ()=>null,
                pageType: "referral"
            }, {
                scrollId: "fame",
                label: "Fame",
                renderContent: ()=>null,
                isShowHeaderMobile: !1,
                isShowHeader: !1,
                pageType: "referral"
            }, {
                scrollId: "ranks",
                label: "Ranks",
                renderContent: ()=>null,
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "referral"
            }, {
                scrollId: "queries",
                label: "Queries",
                renderContent: ()=>null,
                isShowHeader: !1,
                isShowHeaderMobile: !1,
                pageType: "referral"
            }, {
                scrollId: "subscribe",
                label: "Subscribe",
                isShowHeaderMobile: !1,
                renderContent: ()=>null,
                isShowHeader: !1,
                pageType: "referral"
            }, {
                scrollId: "merch",
                label: n("head.Merch"),
                renderContent: ()=>null,
                pageType: "referral",
                onClick: ()=>{
                    window.open("https://merch.memeinator.com/", "_blank")
                }
            }, {
                scrollId: "giveaways",
                label: n("head.Giveaways"),
                renderContent: ()=>null,
                pageType: "giveaways",
                isShowHeader: !1,
                onClick: ()=>{
                    window.location.href = "./?id=giveaways"
                }
            }, {
                scrollId: "media",
                label: n("head.Media"),
                renderContent: ()=>null,
                pageType: "media"
            }];
            return (0,
            d.useEffect)(()=>{
                l && (0,
                a.k3)(l)
            }
            , [l]),
            {
                routes: c,
                isOpen: o,
                setIsOpen: s
            }
        }
        ;
        var b = t(65720)
          , y = t.n(b);
        let w = e=>{
            let {onConfirm: l, className: t, loading: a, label: o, style: s} = e
              , i = (0,
            n.cW)();
            return (0,
            r.jsx)("button", {
                className: "".concat(t, " ").concat(y().notifyButton, " cursor-pointer hover:opacity-[80%]"),
                onClick: l,
                style: {
                    opacity: a ? .5 : 1,
                    cursor: a ? "wait" : "pointer",
                    ...i ? {} : {
                        fontFamily: "inherit",
                        fontSize: 14
                    },
                    ...s
                },
                disabled: a,
                children: (0,
                r.jsx)("div", {
                    className: y().notifyButtonTxt,
                    children: o
                })
            })
        }
    },
    29642: function(e, l, t) {
        "use strict";
        t.d(l, {
            F_: function() {
                return s
            },
            i_: function() {
                return o
            },
            cW: function() {
                return r
            }
        });
        var a = t(60727);
        let n = ["en", "de", "it", "fr", "es", "nl", "tr", "cs", "pl", "no", "pt", "ro", "sv", "tk"]
          , r = ()=>{
            let {i18n: e} = (0,
            a.$G)();
            return n.includes(e.language)
        }
          , o = e=>["referral", "fame", "ranks", "queries", "subscribe"].includes(e)
          , s = (e,l)=>{
            window.location.href = "/".concat("buy" === l ? "" : "".concat(l, "/"), "?id=").concat(e)
        }
    },
    97755: function(e) {
        e.exports = {
            circleItemBox: "shareIcons_circleItemBox__Eydd_",
            shareIconsBox: "shareIcons_shareIconsBox__2kMED",
            shareCircleIconsBox: "shareIcons_shareCircleIconsBox__iBjUJ",
            simpleShareIcon: "shareIcons_simpleShareIcon__c4wRl",
            popBox: "shareIcons_popBox__R_IUE",
            popItemTxt: "shareIcons_popItemTxt__1wYch"
        }
    },
    96454: function(e) {
        e.exports = {
            container: "header_container__4LH1a",
            connectButton: "header_connectButton__Qgpql",
            connectButtonBox: "header_connectButtonBox__0thUx",
            menuButton: "header_menuButton__1p7y_",
            logo: "header_logo__TCQOL",
            languagesPop: "header_languagesPop__YIa5k",
            languagesTitle: "header_languagesTitle__DvWJE",
            languagesLabel: "header_languagesLabel__Opmz6",
            headerMenuTxt: "header_headerMenuTxt__LkT_i",
            mobileMenusTxt: "header_mobileMenusTxt__yINX_",
            emailTxt: "header_emailTxt__j98bA"
        }
    },
    11237: function(e) {
        e.exports = {
            popBox: "styles_popBox__qeeKs",
            popBlack: "styles_popBlack__Vpt7o",
            popWrite: "styles_popWrite__83fbO",
            popItemTxt: "styles_popItemTxt__duOEC"
        }
    },
    42564: function(e) {
        e.exports = {
            circleItemBox: "style_circleItemBox__jokCj",
            shareIconsBox: "style_shareIconsBox__oQdvW",
            shareCircleIconsBox: "style_shareCircleIconsBox__Xrn4P",
            simpleShareIcon: "style_simpleShareIcon__84XR5",
            popBox: "style_popBox__OQyBR",
            popBlack: "style_popBlack__aYDnb",
            popWrite: "style_popWrite__4nhw7",
            popItemTxt: "style_popItemTxt__5g4W6",
            languagesTitle: "style_languagesTitle__5nMae"
        }
    },
    4444: function(e) {
        e.exports = {
            email: "footer_email__Tx_Kc",
            footerMenuItem: "footer_footerMenuItem__U9WaH",
            footerMenuBox: "footer_footerMenuBox__iTYMR",
            footerBox: "footer_footerBox__YAN8x",
            footerShareBox: "footer_footerShareBox__WSUP1",
            footerTitle: "footer_footerTitle__PQJQ1",
            footerDesc: "footer_footerDesc__RTjwc"
        }
    },
    26928: function(e) {
        e.exports = {
            container: "header_container__5OR6W",
            connectButton: "header_connectButton__YTy5u",
            connectButtonBox: "header_connectButtonBox__bgTlu",
            menuButton: "header_menuButton__glflc",
            logo: "header_logo__NQC1E",
            languagesPop: "header_languagesPop__4ltAR",
            languagesTitle: "header_languagesTitle__DTd0y",
            languagesLabel: "header_languagesLabel__gNn_C",
            headerMenuTxt: "header_headerMenuTxt__yFGub",
            mobileMenusTxt: "header_mobileMenusTxt__5xJzO",
            emailTxt: "header_emailTxt__20B6s"
        }
    },
    5001: function(e) {
        e.exports = {
            tips: "headerWrapper_tips__C1tHn",
            container: "headerWrapper_container__kWbDx",
            fadeInSection: "headerWrapper_fadeInSection__sVX2E",
            isVisible: "headerWrapper_isVisible__D9K_F",
            popInSection: "headerWrapper_popInSection__Ul_Vv",
            sectionItem: "headerWrapper_sectionItem__DFz1_"
        }
    },
    65720: function(e) {
        e.exports = {
            notifyButton: "styles_notifyButton__CewSf",
            notifyButtonTxt: "styles_notifyButtonTxt__6TgfK"
        }
    }
}]);
