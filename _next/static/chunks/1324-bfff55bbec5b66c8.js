(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1324], {
    44781: function(e, t, r) {
        "use strict";
        r.d(t, {
            RC: function() {
                return a
            },
            kA: function() {
                return M
            },
            L0: function() {
                return F.L
            }
        });
        var o = r(52322);
        let a = e=>{
            let {style: t, className: r, scrollId: a} = e;
            return (0,
            o.jsx)("div", {
                style: t,
                className: "".concat(r, " w-1 h-1  opacity-0 -z-10 absolute top-[-55px] max-md:top-[-20px]"),
                id: "#".concat(a)
            })
        }
        ;
        var l = r(2784)
          , n = r(13152)
          , i = r(53079)
          , s = r(49967)
          , c = r.n(s)
          , d = r(96577)
          , u = r.n(d)
          , p = r(60727);
        let x = e=>{
            let {theme: t="black"} = e
              , r = "black" === t
              , {t: a} = (0,
            p.$G)()
              , l = [{
                label: a("footer.privacy"),
                url: "privacy-policy"
            }, {
                label: a("footer.terms"),
                url: "terms-conditions"
            }, {
                label: a("footer.cookie"),
                url: "cookie-policy"
            }];
            return (0,
            o.jsxs)("div", {
                className: c().footerBox,
                id: "#subscribe",
                children: [(0,
                o.jsx)("div", {
                    className: "".concat(c().footerShareBox, " "),
                    children: (0,
                    o.jsx)(i.wp, {})
                }), (0,
                o.jsxs)("div", {
                    className: "flex self-center  items-center mb-[55px] max-md:hidden",
                    children: [(0,
                    o.jsx)(u(), {
                        src: r ? "/imgs/email.png" : "/imgs/blackEmail.png",
                        alt: "email",
                        width: 16,
                        height: 12,
                        className: "mr-[15px] w-[16px] h-[12px]"
                    }), (0,
                    o.jsx)("a", {
                        className: "".concat(c().email, " "),
                        style: {
                            color: r ? "#fff" : "#000"
                        },
                        href: "mailto:contact@memeinator.com",
                        children: "contact@memeinator.com"
                    })]
                }), (0,
                o.jsx)("div", {
                    className: c().footerMenuBox,
                    children: l.map(e=>(0,
                    o.jsx)("a", {
                        className: c().footerMenuItem,
                        href: e.url,
                        target: "_blank",
                        children: e.label
                    }, e.label))
                }), (0,
                o.jsxs)("div", {
                    className: "flex  md:flex-col flex-col-reverse",
                    children: [(0,
                    o.jsx)("div", {
                        className: "".concat(c().footerDesc),
                        id: "footerdesc",
                        children: a("footer.desc")
                    }), (0,
                    o.jsxs)("div", {
                        className: c().footerTitle,
                        style: {
                            color: r ? "#fff" : "#000"
                        },
                        children: [a("footer.copyright"), (0,
                        o.jsx)("br", {
                            className: "md:hidden block"
                        }), " ", a("footer.rightReserve")]
                    })]
                })]
            })
        }
        ;
        var m = r(90407)
          , f = r(49442)
          , h = r(15198);
        function v(e) {
            let {isOpen: t, setIsOpen: r} = e;
            return (0,
            o.jsx)(f.u, {
                appear: !0,
                show: t,
                as: l.Fragment,
                children: (0,
                o.jsx)(h.V, {
                    as: "div",
                    className: "relative z-10",
                    onClose: ()=>{
                        r(!1)
                    }
                    ,
                    children: (0,
                    o.jsx)("div", {
                        className: "fixed inset-0 overflow-y-auto",
                        children: (0,
                        o.jsx)("div", {
                            className: "flex min-h-full items-center justify-center p-4 text-center bg-red",
                            onClick: ()=>{
                                r(!1)
                            }
                            ,
                            children: (0,
                            o.jsx)(f.u.Child, {
                                as: l.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: (0,
                                o.jsxs)("div", {
                                    children: [(0,
                                    o.jsx)("div", {
                                        className: " rounded bg-[#00000020] h-[20px] w-[20px] absolute top-[-25px] right-0 p-[5px]",
                                        onClick: ()=>{
                                            r(!1)
                                        }
                                        ,
                                        children: (0,
                                        o.jsx)(u(), {
                                            src: "/imgs/writeClose.png",
                                            alt: "writeClose",
                                            width: 20,
                                            height: 20,
                                            className: " cursor-pointer"
                                        })
                                    }), (0,
                                    o.jsx)("iframe", {
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
        var w = r(18788)
          , g = r(48791)
          , b = r.n(g)
          , y = r(22382)
          , j = r(88932);
        let _ = {};
        function N(e) {
            let {value: t, onChange: r, error: a, style: l, inputType: n, placeholder: i} = e;
            return (0,
            o.jsx)("div", {
                className: " relative flex flex-col mb-[42px] ",
                style: l,
                children: (0,
                o.jsxs)("div", {
                    className: "flex relative rounded-[20px] h-[76px] box-border bg-PureWhite p-28px  pt-26px pb-26px flex-col",
                    children: [(0,
                    o.jsx)("input", {
                        type: null != n ? n : "text",
                        id: "inputField1",
                        placeholder: i,
                        className: "border-none h-30px  box-border w-full  bg-PureWhite text-Coal font-CygnitoMonoPro text-16 md:text-18",
                        value: t,
                        onChange: e=>{
                            r(e.target.value)
                        }
                    }), a ? (0,
                    o.jsx)("div", {
                        className: "text-RetroRed text-12 mt-2px font-CygnitoMonoPro",
                        children: a
                    }) : null]
                })
            })
        }
        var k = r(71100);
        let S = "exitTips"
          , C = (e,t)=>{
            console.log("[\uD83D\uDE80 report]", t, e);
            let r = window.dataLayer;
            r && r.push({
                event: null != t ? t : "workflowStep",
                ...e
            })
        }
          , B = e=>{
            let {openModalRef: t} = e;
            return "1" === _[S] ? null : (0,
            o.jsx)(T, {
                openModalRef: t
            })
        }
          , T = e=>{
            let {openModalRef: t} = e
              , {t: r} = (0,
            p.$G)()
              , [a,n] = (0,
            l.useState)(!1)
              , i = (0,
            l.useRef)(!0)
              , s = ()=>{
                n(!1)
            }
            ;
            t.current = ()=>{
                i.current || "1" === _[S] || (_[S] = "1",
                n(!0))
            }
            ;
            let[c,d] = (0,
            l.useState)("")
              , [x,m] = (0,
            l.useState)(!1)
              , v = "" !== c && !c.match(/\S+@\S+\.\S+/)
              , w = async()=>{
                if (!c) {
                    j.Am.error(r("subscribe.emailEmpty"));
                    return
                }
                if (v) {
                    j.Am.error(r("subscribe.emailError"));
                    return
                }
                if (!x) {
                    m(!0);
                    try {
                        var e, t, o, a;
                        let r = j.Am.loading("Submitting")
                          , {ip: l} = (0,
                        k.w)()
                          , n = await y.Z.get("/api/save-info", {
                            params: {
                                email: c,
                                phone: "",
                                city: null !== (e = null == l ? void 0 : l.city) && void 0 !== e ? e : "-",
                                country: null !== (t = null == l ? void 0 : l.country) && void 0 !== t ? t : "-",
                                country_calling_code: null !== (o = null == l ? void 0 : l.country_calling_code) && void 0 !== o ? o : "-",
                                timezone: null !== (a = null == l ? void 0 : l.timezone) && void 0 !== a ? a : "-"
                            },
                            validateStatus: ()=>!0
                        });
                        if (j.Am.dismiss(r),
                        0 === n.data.err_no) {
                            C({}, "subscribeEmail");
                            try {
                                window && window.localStorage && window.localStorage.setItem("DisableEmailModalMark", "1")
                            } catch (e) {}
                            j.Am.success(n.data.msg),
                            s()
                        } else
                            j.Am.error(n.data.err_msg)
                    } catch (e) {}
                    m(!1)
                }
            }
              , g = {
                title: "Gotta go ask Momma before you enlist?",
                desc: "Sign up for exclusive updates whilst you wait, recruit!",
                button: {
                    label: "Sign Up",
                    onClick: w
                },
                email: {
                    tips: "Enter your email",
                    error: r("subscribe.emailError")
                }
            };
            return (0,
            l.useEffect)(()=>{
                setTimeout(()=>{
                    i.current = !1
                }
                , 2e3)
            }
            , []),
            (0,
            o.jsx)(f.u, {
                as: l.Fragment,
                show: a,
                appear: !0,
                enter: "transition duration-500 transform",
                enterFrom: "opacity-0 scale-0",
                enterTo: "opacity-100 scale-100",
                leave: "transition duration-300  transform",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-50",
                children: (0,
                o.jsx)(h.V, {
                    as: "div",
                    onClose: s,
                    className: "!z-[100] fixed bg-Black/50 w-screen h-screen flex flex-col top-0 left-0 justify-center items-center  ",
                    children: (0,
                    o.jsx)(f.u.Child, {
                        as: l.Fragment,
                        enter: "ease-out duration-500",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-500",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: (0,
                        o.jsxs)(h.V.Panel, {
                            className: "flex relative w-[750px] max-md:w-[90vw] overflow-hidden p-[20px] md:p-[56px] ",
                            children: [(0,
                            o.jsx)(u(), {
                                src: "/imgs/exitTips/bck.jpg",
                                alt: "bck",
                                width: 800,
                                height: 600,
                                className: "-z-10 absolute object-cover top-0 left-0  h-full"
                            }), (0,
                            o.jsx)(u(), {
                                src: "/imgs/writeClose.png",
                                alt: "writeClose",
                                width: 35,
                                height: 35,
                                onClick: s,
                                className: "z-10 w-[25px] h-[25px] md:w-35px md:h-35px absolute top-[40px] right-[40px] cursor-pointer"
                            }), (0,
                            o.jsxs)("div", {
                                className: " flex flex-1 flex-col",
                                children: [(0,
                                o.jsx)("div", {
                                    className: "mb-18px mt-[20px] font-RapidST text-PureWhite text-[26px] md:text-[45px] font-700 leading-[1.1] uppercase",
                                    style: {
                                        textShadow: "0px 0px 20px rgba(0, 0, 0, 0.50)"
                                    },
                                    children: g.title
                                }), (0,
                                o.jsx)("div", {
                                    className: " mb-30px font-RapidST text-Green max-md:text-[18px] md:text-25 font-700 leading-[1.4] w-[80%]",
                                    children: g.desc
                                }), (0,
                                o.jsx)(N, {
                                    onChange: d,
                                    value: c,
                                    placeholder: g.email.tips,
                                    error: v ? g.email.error : ""
                                }), (0,
                                o.jsx)("div", {
                                    className: "bg-[#CD1B27] ".concat(x ? "bg-[#A5161F]" : "", " rounded-[20px] max-md:self-center w-[190px] h-[76px] flex justify-center items-center  cursor-pointer ").concat(x ? "cursor-progress" : "", " hover:opacity-95 "),
                                    onClick: ()=>{
                                        x || w()
                                    }
                                    ,
                                    children: (0,
                                    o.jsx)("span", {
                                        className: "font-DotNator text-[12px]",
                                        children: "SIGN UP"
                                    })
                                })]
                            })]
                        })
                    })
                })
            })
        }
        ;
        var D = r(34291)
          , E = r.n(D);
        let M = e=>{
            let {pageType: t="buy", tips: r, hideButton: a, renderRightButton: i, children: s, className: c="", theme: d="black", scrollId: u, hasFooter: p=!0} = e
              , {isInCardPurchase: f} = (0,
            n.O)()
              , {isOpen: h, setIsOpen: g, routes: y} = (0,
            w.H)({
                pageTheme: d,
                scrollId: u,
                pageType: t
            })
              , j = (0,
            l.useRef)(0)
              , N = (0,
            l.useRef)(E())
              , k = (0,
            l.useCallback)(e=>{
                if ("1" === _[S])
                    return null;
                if (window.innerHeight) {
                    if (e >= j.current) {
                        j.current = e;
                        return
                    }
                    2 > e && N.current(),
                    j.current = e
                }
            }
            , []);
            return (0,
            l.useEffect)(()=>{
                if (window && window.localStorage && window.localStorage.getItem("DisableEmailModalMark"))
                    return;
                let e = e=>{
                    let t = e.clientY;
                    k(t)
                }
                ;
                return window.addEventListener("mousemove", e),
                ()=>window.removeEventListener("mousemove", e)
            }
            , []),
            (0,
            o.jsxs)("div", {
                style: {
                    scrollBehavior: "smooth"
                },
                className: "".concat(c, " w-screen h-screen overflow-x-hidden overflow-y-scroll"),
                id: "headerWrapper",
                children: [(0,
                o.jsxs)("div", {
                    className: "".concat(b().container, " ").concat(f ? "" : "fixed", "  top-0 left-0"),
                    children: [(0,
                    o.jsx)("div", {
                        className: "w-full animate__animated animate__fadeIn",
                        children: (0,
                        o.jsx)(m.h, {
                            data: y,
                            hideButton: a,
                            pageType: t,
                            theme: d,
                            renderRightButton: i
                        })
                    }), null, r]
                }), (0,
                o.jsx)(B, {
                    openModalRef: N
                }), s, p ? (0,
                o.jsx)("div", {
                    className: "flex flex-col items-center w-full",
                    children: (0,
                    o.jsx)(x, {
                        theme: d
                    })
                }) : null, (0,
                o.jsx)(v, {
                    isOpen: h,
                    setIsOpen: g
                })]
            })
        }
        ;
        var F = r(90609)
    },
    65032: function(e, t, r) {
        "use strict";
        r.d(t, {
            D: function() {
                return a
            }
        });
        var o = r(52322);
        let a = e=>{
            let {label: t, style: r, className: a} = e;
            return (0,
            o.jsx)("div", {
                className: "".concat(a, " text-White font-RapidST text-[42px] md:text-[48px] font-700 tracking-0.5 md:tracking-1  uppercase leading-none"),
                style: r,
                children: t
            })
        }
    },
    17765: function(e, t, r) {
        "use strict";
        r.d(t, {
            Y: function() {
                return n
            },
            n: function() {
                return l
            }
        });
        var o = r(52322)
          , a = r(48273);
        let l = e=>{
            let {poster: t, url: r, className: a="", controls: l=!0, autoplay: n=!1, loop: i=!1, muted: s=!1, playsinline: c} = e;
            return (0,
            o.jsxs)("video", {
                controls: l,
                autoPlay: n,
                loop: i,
                poster: t,
                muted: s,
                playsInline: c,
                "webkit-playsinline": c,
                className: "".concat(a, " object-cover  rounded-[30px] overflow-hidden"),
                children: [(0,
                o.jsx)("track", {
                    default: !0,
                    kind: "captions",
                    src: ""
                }), (0,
                o.jsx)("source", {
                    src: r
                })]
            })
        }
          , n = e=>{
            let {url: t, className: r, height: l, width: n} = e;
            return (0,
            o.jsx)(a.iO, {
                style: {
                    height: l,
                    width: n
                },
                children: (0,
                o.jsx)("iframe", {
                    width: null != n ? n : "100%",
                    height: null != l ? l : "100%",
                    src: t,
                    frameBorder: "0",
                    allowFullScreen: !0,
                    title: "youtube",
                    allow: "accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    className: "".concat(r, " rounded-[30px]"),
                    loading: "eager"
                })
            })
        }
    },
    71324: function(e, t, r) {
        "use strict";
        r.d(t, {
            RC: function() {
                return o.RC
            },
            kA: function() {
                return o.kA
            },
            Dx: function() {
                return d.D
            },
            JA: function() {
                return s
            },
            nk: function() {
                return c.n
            },
            Y7: function() {
                return c.Y
            },
            L0: function() {
                return o.L0
            }
        });
        var o = r(44781)
          , a = r(52322);
        r(96577);
        var l = r(29642)
          , n = r(85505)
          , i = r.n(n);
        let s = e=>{
            let {href: t, target: r="_blank", label: o, className: n="", labelClassName: s="", style: c, onClick: d} = e
              , u = !(0,
            l.cW)();
            return (0,
            a.jsx)("a", {
                className: "".concat(u ? "text-15 leading-[20px]" : "", " h-40px w-fit font-DotNator  text-Black  text-12 rounded-full flex cursor-pointer pr-[40px] pl-[40px]  md:pr-[87px] md:pl-[87px] no-underline bg-Green  hover:opacity-70 transition-all ").concat(n),
                href: t,
                target: r,
                onClick: d,
                style: c,
                children: i()(o) ? (0,
                a.jsx)("span", {
                    className: "".concat(s, " ").concat(u ? "" : " scale-9/12", " whitespace-nowrap  origin-bottom leading-[25px] md:leading-[26px]"),
                    children: o
                }) : o
            })
        }
        ;
        var c = r(17765)
          , d = r(65032)
    },
    71100: function(e, t, r) {
        "use strict";
        r.d(t, {
            O: function() {
                return l
            },
            w: function() {
                return n
            }
        });
        var o = r(95913)
          , a = r(2784);
        let[l,n] = (0,
        o.jk)(()=>{
            let[e,t] = (0,
            a.useState)();
            return (0,
            a.useEffect)(()=>{
                fetch("/api/ip-info").then(async e=>{
                    let r = await e.json()
                      , o = "GB" === r.country_code;
                    t({
                        city: r.city,
                        country: r.country,
                        timezone: r.timezone,
                        country_calling_code: r.country_calling_code,
                        isUK: o
                    })
                }
                )
            }
            , []),
            {
                ip: e
            }
        }
        )
    },
    49967: function(e) {
        e.exports = {
            email: "footer_email__Z_HiC",
            footerMenuItem: "footer_footerMenuItem__YI8t3",
            footerMenuBox: "footer_footerMenuBox__7lZZ0",
            footerBox: "footer_footerBox__k6KNV",
            footerShareBox: "footer_footerShareBox__KUq9J",
            footerTitle: "footer_footerTitle__p8e0C",
            footerDesc: "footer_footerDesc___OWsp"
        }
    },
    48791: function(e) {
        e.exports = {
            container: "headerWrapper_container__NIsoJ",
            fadeInSection: "headerWrapper_fadeInSection__OuvSv",
            isVisible: "headerWrapper_isVisible__FIoay"
        }
    }
}]);
