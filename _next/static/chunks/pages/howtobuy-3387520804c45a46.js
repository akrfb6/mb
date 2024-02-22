(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4285], {
    85505: function(e, t, o) {
        var l = o(53366)
          , s = o(86152)
          , i = o(15125);
        e.exports = function(e) {
            return "string" == typeof e || !s(e) && i(e) && "[object String]" == l(e)
        }
    },
    37868: function(e, t, o) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/howtobuy", function() {
            return o(42426)
        }
        ])
    },
    42426: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, {
            __N_SSG: function() {
                return ee
            },
            default: function() {
                return Z
            }
        });
        var l = o(52322)
          , s = o(60727)
          , i = o(97729)
          , a = o.n(i)
          , n = o(48273)
          , c = o(67989)
          , r = o(94628);
        let u = e=>{
            let {title: t, style: o, className: s, size: i, color: a, active: n=!0} = e
              , c = "#CD1A27";
            return c = n ? "#CD1A27" : "#A5AAAE",
            a && (c = a),
            (0,
            l.jsx)("div", {
                className: "whiteTitle ".concat(s),
                style: {
                    fontSize: null != i ? i : 40,
                    color: c,
                    ...o
                },
                children: t
            })
        }
        ;
        var d = o(96577)
          , p = o.n(d)
          , h = o(2784);
        let w = "calc(100vw - 66px - 33px)"
          , m = e=>{
            let {className: t="", data: o} = e
              , s = (0,
            l.jsx)(n.JA, {
                label: null == o ? void 0 : o.label,
                onConfirm: null == o ? void 0 : o.onClick,
                className: "w-[50%]"
            });
            return (0,
            l.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [(0,
                l.jsxs)("div", {
                    className: "max-md:hidden  flex w-full mt-[16px] ",
                    children: [(0,
                    l.jsx)("div", {
                        className: "  h-auto  flex flex-col items-center",
                        style: {
                            width: "18%"
                        },
                        children: (0,
                        l.jsx)(p(), {
                            src: "/imgs/howToBuy/check.svg",
                            alt: "check",
                            className: "w-[72px] h-[72px] object-contain",
                            width: 72,
                            height: 72,
                            priority: !0
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "".concat(t, " flex hover:opacity-75 items-center justify-center h-auto"),
                        style: {
                            width: "64%"
                        },
                        children: s
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "md:hidden  flex w-full mt-[12px] ",
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex flex-col items-center",
                        style: {
                            width: 66
                        },
                        children: (0,
                        l.jsx)(p(), {
                            src: "/imgs/howToBuy/check.svg",
                            alt: "check",
                            className: "w-[40px] h-[40px] object-contain",
                            width: 40,
                            height: 40,
                            priority: !0
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "".concat(t, " flex  items-center justify-center h-auto"),
                        style: {
                            width: w
                        },
                        children: s
                    })]
                })]
            })
        }
        ;
        var y = o(85505)
          , x = o.n(y)
          , g = o(72096)
          , b = o.n(g);
        let v = e=>{
            let {data: t, type: o} = e;
            return (0,
            l.jsx)("div", {
                className: " flex flex-col",
                children: t.map((e,t)=>(0,
                l.jsx)(f, {
                    type: o,
                    data: e,
                    step: t + 1
                }, t.toString()))
            })
        }
          , f = e=>{
            let {data: t, step: o, type: s="desktop"} = e
              , i = ()=>{
                if (x()(t.desc)) {
                    let e = t.desc.split("\n");
                    return (0,
                    l.jsx)("div", {
                        className: "w-full flex flex-col",
                        children: e.map((t,o)=>(0,
                        l.jsx)("div", {
                            className: "".concat(b().detail, " ").concat(o === e.length - 1 ? "mb-2" : "mb-[6px]", " "),
                            children: t
                        }, o.toString()))
                    })
                }
                return (0,
                l.jsx)("div", {
                    className: "".concat(b().detail, "  w-full flex flex-col"),
                    children: t.desc
                })
            }
              , a = ()=>{
                var e, o;
                return "desktop" === s ? null === (o = t.imgs) || void 0 === o ? void 0 : o.map((e,t)=>{
                    let {uri: o} = e;
                    return (0,
                    l.jsx)(p(), {
                        src: o,
                        alt: "main",
                        className: "w-full object-contain mb-[10px]",
                        width: 650,
                        height: 650 * (1464 / 1744),
                        priority: !0
                    }, t.toString())
                }
                ) : (0,
                l.jsx)("div", {
                    className: " items-start  justify-center flex-wrap flex",
                    style: {
                        width: "clac(100% + 20px )"
                    },
                    children: null === (e = t.imgs) || void 0 === e ? void 0 : e.map((e,t)=>{
                        let {uri: o} = e;
                        return (0,
                        l.jsx)(p(), {
                            src: o,
                            alt: "main",
                            className: "w-[24%] mr-[20px] object-contain mb-[20px] min-w-[180px]",
                            width: 650,
                            height: 650 * (1464 / 1744),
                            priority: !0
                        }, t.toString())
                    }
                    )
                })
            }
            ;
            return (0,
            l.jsxs)("div", {
                className: " flex w-full flex-col",
                children: [(0,
                l.jsxs)("div", {
                    className: " max-md:hidden flex w-full",
                    children: [(0,
                    l.jsxs)("div", {
                        className: " h-auto flex flex-col items-center",
                        style: {
                            width: "18%"
                        },
                        children: [(0,
                        l.jsx)("div", {
                            className: b().smallStep,
                            children: o
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-1 flex-col w-[4px] bg-white"
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "mb-[43px]",
                        style: {
                            width: "64%"
                        },
                        children: [i(), a()]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: " md:hidden flex w-full",
                    children: [(0,
                    l.jsxs)("div", {
                        className: " h-auto flex flex-col items-center",
                        style: {
                            width: 66
                        },
                        children: [(0,
                        l.jsx)("div", {
                            className: b().smallStep,
                            children: (0,
                            l.jsx)("div", {
                                className: " scale-[0.67]",
                                children: o
                            })
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-1 flex-col w-[2px] bg-white"
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "mb-[37px]",
                        style: {
                            width: w
                        },
                        children: [i(), a()]
                    })]
                })]
            })
        }
          , j = e=>{
            let {data: {title: t, desc: o}, step: s, className: i} = e
              , a = ()=>{
                if (!o)
                    return null;
                if (x()(o)) {
                    let e = null == o ? void 0 : o.split("\n");
                    return (0,
                    l.jsx)("div", {
                        className: " w-full flex flex-col",
                        children: null == e ? void 0 : e.map((e,t)=>(0,
                        l.jsx)("div", {
                            className: "".concat(b().detail, "  ").concat(0 === t ? "" : "mt-2"),
                            children: e
                        }, t.toString()))
                    })
                }
                return (0,
                l.jsx)("div", {
                    className: "".concat(b().detail, " w-full flex flex-col"),
                    children: o
                })
            }
            ;
            return (0,
            l.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [(0,
                l.jsxs)("div", {
                    className: "max-md:hidden  flex w-full mt-[16px]",
                    children: [(0,
                    l.jsxs)("div", {
                        className: " h-auto flex flex-col items-center",
                        style: {
                            width: "18%"
                        },
                        children: [(0,
                        l.jsx)("div", {
                            className: "".concat(b().mainStep, " mb-[16px]"),
                            children: s
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-1 flex-col w-[4px] bg-white"
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "".concat(i, " mb-[42px]"),
                        style: {
                            width: "64%"
                        },
                        children: [(0,
                        l.jsx)(u, {
                            title: t,
                            active: !0,
                            className: "mb-[18px]",
                            style: {
                                textAlign: "left"
                            }
                        }), a()]
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "md:hidden  flex w-full mt-[14px] ",
                    children: [(0,
                    l.jsxs)("div", {
                        className: " h-auto flex flex-col items-center",
                        style: {
                            width: 66
                        },
                        children: [(0,
                        l.jsx)("div", {
                            className: "".concat(b().mainStep, " mb-[9px]"),
                            children: s
                        }), (0,
                        l.jsx)("div", {
                            className: "flex flex-1 flex-col w-[2px] bg-white"
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "".concat(i, " mb-[27px] "),
                        style: {
                            width: w
                        },
                        children: [(0,
                        l.jsx)(u, {
                            title: t,
                            active: !0,
                            size: 19,
                            className: "mb-[9px]",
                            style: {
                                textAlign: "left"
                            }
                        }), a()]
                    })]
                })]
            })
        }
        ;
        var k = o(82553)
          , T = o.n(k);
        let N = e=>{
            let {onClick: t, active: o, title: s, className: i, size: a} = e;
            return (0,
            l.jsx)("div", {
                onClick: t,
                className: " cursor-pointer ".concat(o ? T().activeTag : T().grayTag, " ").concat(i),
                children: (0,
                l.jsx)(u, {
                    size: a,
                    active: o,
                    title: s,
                    style: {
                        whiteSpace: "nowrap"
                    },
                    className: " uppercase"
                })
            })
        }
          , S = e=>{
            var t, o;
            let {onChange: s, data: i, renderIcon: a, size: n, isLine: c=!0, className: r="", style: u} = e
              , [d,p] = (0,
            h.useState)(null !== (o = null === (t = i.tags[0]) || void 0 === t ? void 0 : t.value) && void 0 !== o ? o : "")
              , m = a(d)
              , y = (0,
            l.jsx)("div", {
                className: "".concat(T().title),
                children: i.title
            });
            return (0,
            l.jsxs)("div", {
                className: " flex w-full flex-col ",
                children: [(0,
                l.jsxs)("div", {
                    style: u,
                    className: "max-md:hidden flex w-full flex-col h-[110px]  ".concat(r),
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        l.jsx)("div", {
                            className: "flex flex-col items-center",
                            style: {
                                width: "18%"
                            },
                            children: m
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center relative ",
                            style: {
                                width: "64%"
                            },
                            children: [(0,
                            l.jsx)("div", {
                                className: " absolute top-[-38px]",
                                children: y
                            }), i.tags.map(e=>{
                                let {label: t, value: o} = e;
                                return (0,
                                l.jsx)(N, {
                                    onClick: ()=>{
                                        p(o),
                                        s(o)
                                    }
                                    ,
                                    size: n,
                                    active: d === o,
                                    title: t,
                                    className: "mr-[65px] max-md:mr-[28px]"
                                }, o)
                            }
                            )]
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-col items-center flex-1",
                        style: {
                            width: "18%"
                        },
                        children: (0,
                        l.jsx)("div", {
                            className: "flex w-[4px]  bg-white  h-[40px] ".concat(c ? " bg-white" : "bg-transparent")
                        })
                    })]
                }), (0,
                l.jsxs)("div", {
                    style: u,
                    className: "md:hidden flex w-full flex-col  ".concat(r),
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        l.jsx)("div", {
                            className: "flex flex-col items-center",
                            style: {
                                width: 66
                            },
                            children: m
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex items-center flex-wrap relative ",
                            style: {
                                width: w
                            },
                            children: [(0,
                            l.jsx)("div", {
                                className: " absolute top-[-28px]",
                                children: y
                            }), i.tags.map(e=>{
                                let {label: t, value: o} = e;
                                return (0,
                                l.jsx)(N, {
                                    onClick: ()=>{
                                        p(o),
                                        s(o)
                                    }
                                    ,
                                    size: n,
                                    active: d === o,
                                    title: t,
                                    className: "mr-[65px] max-md:mr-[18px] mb-[10px]"
                                }, o)
                            }
                            )]
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "flex flex-col items-center flex-1",
                        style: {
                            width: 66
                        },
                        children: (0,
                        l.jsx)("div", {
                            className: "flex w-[2px]  bg-white  h-[40px] ".concat(c ? " bg-white" : "bg-transparent")
                        })
                    })]
                })]
            })
        }
          , B = e=>{
            let {data: t, button: o} = e;
            return (0,
            l.jsx)("div", {
                className: "mt-[146px]  w-full self-center flex flex-col items-center",
                children: t.map((e,t)=>{
                    var s;
                    return (0,
                    l.jsx)(M, {
                        props: e,
                        step: t + 1,
                        button: o
                    }, null === (s = e.main) || void 0 === s ? void 0 : s.title)
                }
                )
            })
        }
          , M = e=>{
            var t, o, s;
            let {props: {data: i, main: a}, button: n, step: c} = e
              , [r,u] = (0,
            h.useState)(null !== (s = null === (o = i.tags) || void 0 === o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : "");
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col",
                children: [(0,
                l.jsx)(S, {
                    onChange: e=>{
                        u(e)
                    }
                    ,
                    data: i,
                    isLine: i.isLine,
                    renderIcon: ()=>(0,
                    l.jsx)(p(), {
                        src: i.icon,
                        alt: "device",
                        className: "w-[38px] h-[38px] object-contain",
                        width: 38,
                        height: 38,
                        priority: !0
                    })
                }), a && (0,
                l.jsx)(j, {
                    data: a,
                    step: c
                }), (0,
                l.jsx)(_, {
                    data: i,
                    step: c,
                    activeKey: r
                }), (0,
                l.jsx)(m, {
                    data: n
                })]
            })
        }
          , C = e=>{
            var t, o, s;
            let {props: {data: i, main: a}, step: n} = e
              , [c,r] = (0,
            h.useState)(null !== (s = null === (o = i.tags) || void 0 === o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : "");
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col",
                children: [a && (0,
                l.jsx)(j, {
                    data: a,
                    step: n
                }), (0,
                l.jsx)(S, {
                    onChange: e=>{
                        r(e)
                    }
                    ,
                    data: i,
                    size: 20,
                    isLine: i.isLine,
                    renderIcon: ()=>(0,
                    l.jsx)(p(), {
                        src: i.icon,
                        alt: "device",
                        className: "w-[38px] h-[38px] object-contain mt-2 mb-2",
                        width: 38,
                        height: 38,
                        priority: !0
                    })
                }), (0,
                l.jsx)(_, {
                    data: i,
                    step: n,
                    activeKey: c
                })]
            })
        }
          , _ = e=>{
            let {data: t, activeKey: o, step: s} = e;
            return (0,
            l.jsx)("div", {
                className: "flex flex-col",
                children: t.tags.map(e=>o !== e.value ? null : e.steps ? (0,
                l.jsxs)(h.Fragment, {
                    children: [(0,
                    l.jsx)(v, {
                        data: e.steps,
                        type: e.type
                    }), e.select ? (0,
                    l.jsx)(C, {
                        step: s + 1,
                        props: e.select
                    }, e.value) : null]
                }, e.value) : null)
            })
        }
          , O = e=>{
            let {data: t, button: o} = e;
            return (0,
            l.jsx)("div", {
                className: "mt-[56px] w-full self-center flex flex-col items-center",
                children: t.map((e,t)=>{
                    var s;
                    return (0,
                    l.jsx)(I, {
                        props: e,
                        step: t + 1,
                        button: o
                    }, null === (s = e.main) || void 0 === s ? void 0 : s.title)
                }
                )
            })
        }
          , I = e=>{
            var t, o, s;
            let {props: {data: i, main: a}, step: n, button: c} = e
              , [r,u] = (0,
            h.useState)(null !== (s = null === (o = i.tags) || void 0 === o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : "");
            return (0,
            l.jsxs)("div", {
                className: "flex w-full flex-col",
                children: [(0,
                l.jsx)(S, {
                    onChange: e=>{
                        u(e)
                    }
                    ,
                    data: i,
                    isLine: i.isLine,
                    size: 20,
                    renderIcon: ()=>(0,
                    l.jsx)(p(), {
                        src: i.icon,
                        alt: "device",
                        className: "w-[19px] h-[19px] object-contain",
                        width: 19,
                        height: 19,
                        priority: !0
                    })
                }), a && (0,
                l.jsx)(j, {
                    data: a,
                    step: n
                }), (0,
                l.jsx)(H, {
                    data: i,
                    step: n,
                    activeKey: r
                }), (0,
                l.jsx)(m, {
                    data: c
                })]
            })
        }
          , D = e=>{
            var t, o, s;
            let {props: {data: i, main: a}, step: n} = e
              , [c,r] = (0,
            h.useState)(null !== (s = null === (o = i.tags) || void 0 === o ? void 0 : null === (t = o[0]) || void 0 === t ? void 0 : t.value) && void 0 !== s ? s : "");
            return (0,
            l.jsxs)("div", {
                className: "flex flex-col",
                children: [a && (0,
                l.jsx)(j, {
                    data: a,
                    step: n,
                    className: " mb-[80px]"
                }), (0,
                l.jsx)(S, {
                    onChange: e=>{
                        r(e)
                    }
                    ,
                    data: i,
                    isLine: i.isLine,
                    size: 14,
                    renderIcon: ()=>(0,
                    l.jsx)(p(), {
                        src: i.icon,
                        alt: "device",
                        className: "w-[19px] h-[19px] object-contain",
                        width: 19,
                        height: 19,
                        priority: !0
                    })
                }), (0,
                l.jsx)(H, {
                    data: i,
                    step: n,
                    activeKey: c
                })]
            })
        }
          , H = e=>{
            let {data: t, activeKey: o, step: s} = e;
            return (0,
            l.jsx)("div", {
                className: "flex flex-col",
                children: t.tags.map(e=>o !== e.value ? null : e.steps ? (0,
                l.jsxs)(h.Fragment, {
                    children: [(0,
                    l.jsx)(v, {
                        data: e.steps,
                        type: e.type
                    }), e.select ? (0,
                    l.jsx)(D, {
                        step: s + 1,
                        props: e.select
                    }, e.value) : null]
                }, e.value) : null)
            })
        }
          , W = {
            title: "Connect wallet & select Network",
            desc: "To purchase MMTR, you need to successfully connect your wallet to the Memeinator website first before you get started. \n Here are step-by-step instructions, using Metamask as an example:"
        }
          , R = {
            title: "Buy your MMTR",
            desc: (0,
            l.jsxs)("span", {
                children: ["Choose whatever token you want to use to purchase from", (0,
                l.jsx)("u", {
                    children: "“ETH”"
                }), ",", (0,
                l.jsx)("u", {
                    children: "”USDT”"
                }), ",", (0,
                l.jsx)("u", {
                    children: "”USDC”"
                }), ", then type in the number of tokens you want to purchase in the “You pay” box. \\nIt will automatically show the equivalent MMTR. Then click “Buy” to proceed. You can also purchase with your card by selecting ", (0,
                l.jsx)("u", {
                    children: "“CARD”"
                }), "."]
            })
        }
          , E = [{
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/11.png"
            }],
            desc: "Click the “extensions” on top right of the webpage in your browser."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/21.png"
            }],
            desc: "Choose the wallet that you want to use from the drop-down list."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/31.png"
            }, {
                uri: "/imgs/howToBuy/oneStep/desktop/32.png"
            }],
            desc: "Once you select the wallet, there will be a dropdown where you select the network where your tokens are stored. We support “Ethereum Mainnet” and “BNB chain”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/41.png"
            }],
            desc: "If you have multiple wallets, also select the wallet you want to use to purchase on top of the same dropdown page."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/51.png"
            }],
            desc: "After selecting the network, click the “Connect Wallet” button on top right of the webpage (or any other ‘Connect Wallet’ button."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/61.png"
            }],
            desc: "Select the wallet you use from the pop-up window."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/desktop/71.png"
            }, {
                uri: "/imgs/howToBuy/oneStep/desktop/72.png"
            }],
            desc: "There will be another pop-up window to ask you to connect your wallet, click “next” and “connect” to get connected."
        }, {
            desc: "Your wallet is now connected to our website, you are all set to buy your MMTR.  You will know your wallet is connected when your wallet address replaces the button on the top right of the site."
        }]
          , Y = []
          , A = [{
            desc: "Make sure you’ve selected the right Ethereum network and your wallet is connected to our website."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/eth/one/21.png"
            }],
            desc: "Select “ETH”, input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/eth/one/31.png"
            }],
            desc: "Once you click “buy”, your wallet will pop up and ask you to confirm your transaction, click “confirm” to finish the transaction."
        }, {
            desc: "You have now completed your purchase. Please allow a few moments for the transaction to complete."
        }, {
            desc: "On successful completion of your purchase, you will be able to navigate to view your transaction on the blockchain. \n"
        }]
          , F = [{
            desc: "Make sure you’ve selected the right Ethereum network and your wallet is connected to our website."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/eth/two/21.png"
            }],
            desc: "Select “usdt” or “usdc”, input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/eth/two/31.png"
            }, {
                uri: "/imgs/howToBuy/twoStep/desktop/eth/two/32.png"
            }],
            desc: "Once you click “buy”, your wallet will pop up and ask you to fill out the spending cap,just click “next”, then click “approve” to continue. There will be a second pop up window to confirm your transaction, please allow a few moments between the two pop up windows."
        }, {
            desc: "You have now completed your purchase. Please allow a few moments for the transaction to complete."
        }, {
            desc: "On successful completion of your purchase, you will be able to navigate to view your transaction on the blockchain. \n Your MMTR tokens will be available to claim on Feb 24."
        }]
          , q = [{
            desc: "Make sure you’ve selected the right BSC network and your wallet is connected to our website."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/bsc/one/21.png"
            }],
            desc: "Select BNB, input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/bsc/one/31.png"
            }],
            desc: "Once you click “buy”, your wallet will pop up and ask you to confirm your transaction, click “confirm” to finish the transaction."
        }, {
            desc: "You have now completed your purchase. Please allow a few moments for the transaction to complete."
        }, {
            desc: "On successful completion of your purchase, you will be able to navigate to view your transaction on the blockchain. \n Your MMTR tokens will be available to claim on Feb 24."
        }]
          , P = [{
            desc: "Make sure you’ve selected the right BSC network and your wallet is connected to our website."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/bsc/two/21.png"
            }],
            desc: "Select “usdt” or “usdc”, input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/bsc/two/31.png"
            }, {
                uri: "/imgs/howToBuy/twoStep/desktop/bsc/two/32.png"
            }],
            desc: "Once you click “buy”, your wallet will pop up and ask you to fill out the spending cap,just click “next”, then click “approve” to continue. There will be a second pop up window to confirm your transaction, please allow a few moments between the two pop up windows."
        }, {
            desc: "You have now completed your purchase. Please allow a few moments for the transaction to complete."
        }, {
            desc: "On successful completion of your purchase, you will be able to navigate to view your transaction on the blockchain. \nYour MMTR tokens will be available to claim on Feb 24."
        }]
          , U = [{
            desc: "Make sure your wallet is connected to our website."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/desktop/card/one/21.png"
            }],
            desc: "Select “CARD”, input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”."
        }, {
            desc: "Once you click “buy”, You’ll be redirected to the Contact Info page. Fill out your phone number with the correct area code, click on “send code”, then you’ll be taken to the next page where you can type in the code."
        }, {
            desc: "Type in the code that you received on your phone. It’ll automatically redirect to the card details page. Fill out your card number and all the required info. Click “continue”, you will be redirected to the personal details page."
        }, {
            desc: "Fill out all the required info on the personal details page, then click “confirm”. It will again redirect you to the confirmation page."
        }, {
            desc: "As with any online purchase, you will need to type in the amount you wish to spend and the cvv number. Then click on “Confirm and Pay”, you will be redirected to the completion page."
        }, {
            desc: "On the completion page, you will see your order number and details, you can also click “buy more crypto” to go back for another purchase."
        }, {
            desc: "Your MMTR tokens will be available to claim on Feb 24."
        }]
          , $ = [{
            desc: "Make sure you have Metamask or another supported wallet app on your phone."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/mobile/21.jpg"
            }],
            desc: "Select the network on top of the page in the wallet app, we support “Ethereum Main Network” and “BNB Smart Chain”. If you have multiple wallets, also select the wallet you want to use to purchase right under the network selection bar."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/oneStep/mobile/31.jpg"
            }, {
                uri: "/imgs/howToBuy/oneStep/mobile/32.jpg"
            }, {
                uri: "/imgs/howToBuy/oneStep/mobile/33.jpg"
            }, {
                uri: "/imgs/howToBuy/oneStep/mobile/34.jpg"
            }, {
                uri: "/imgs/howToBuy/oneStep/mobile/35.jpg"
            }, {
                uri: "/imgs/howToBuy/oneStep/mobile/36.jpg"
            }],
            desc: "Once you’ve successfully selected your network and wallet, go to the browser and open the Memeinator website, click “connect wallet” on top of the website, there will be a pop-up window for you to “connect a wallet” and select the wallet you want to use, click it, there will be another pop-up window ask you to open your wallet in the browser, click “open”, it will open the wallet application and ask you to connect, click “connect”, you will be redirected back to the browser."
        }, {
            desc: "Your wallet is now connected to our website, you are all set to buy your MMTR. You will know your wallet is connected when your wallet address replaces the button on top of the site.\nPlease note: You can either use the browser on your mobile phone or the in-app browser inside of the wallet app, Our recommendation is to use the in-app browser for your purchase. While the steps for both methods are the same, opting for the in-app browser allows for the entire process to be seamlessly conducted within the wallet app, making it easier to use."
        }]
          , z = [{
            desc: "Make sure you’ve selected the equivalent network and wallet in the wallet application."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/one/21.jpg"
            }],
            desc: "Select “ETH” or “BNB”,input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/one/31.jpg"
            }, {
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/one/32.jpg"
            }],
            desc: "Once you click “buy”, there will be a pop-up window requesting to open your wallet, click “Open”, you will be redirected to your wallet app and a pop-up window asking you to confirm your transaction, click “confirm” to finish the transaction. You will be redirected to the browser and wait for the transaction to complete."
        }, {
            desc: "You have now completed your purchase. Please allow a few moments for the transaction to complete."
        }, {
            desc: "On successful completion of your purchase, you will be able to navigate to view your transaction on the blockchain. \n Your MMTR tokens will be available to claim on Feb 24."
        }]
          , L = [{
            desc: "Make sure you’ve selected the equivalent network and wallet in the wallet application."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/two/21.jpg"
            }, {
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/two/22.jpg"
            }],
            desc: "Select “USDT” or “USDC”,input how much you would like to spend in the “you pay” box, it will show the equivalent MMTR in the “you receive” box, once you decide to proceed, click “buy”. There will be a pop-up window requesting to open your wallet application, click “Open”."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/two/31.jpg"
            }, {
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/two/32.jpg"
            }],
            desc: "Once you click “Open”, you will be redirected to your wallet application to approve on spending cap, click “next” and “approve”, you will be redirected back to the browser."
        }, {
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/two/41.jpg"
            }, {
                uri: "/imgs/howToBuy/twoStep/mobile/ethOrBsc/two/42.jpg"
            }],
            desc: "After jumping back to the browser, there will be a pop-up window requesting to open your wallet again, click “Open”, you will be redirected to your wallet to confirm your transaction, click “confirm”, you will be redirected back to the browser."
        }, {
            desc: "You have now completed your purchase. Please allow a few moments for the transaction to complete."
        }, {
            desc: "On successful completion of your purchase, you will be able to navigate to view your transaction on the blockchain. \nYour MMTR tokens will be available to claim on Feb 24."
        }]
          , G = U.map((e,t)=>1 === t ? {
            ...e,
            imgs: [{
                uri: "/imgs/howToBuy/twoStep/mobile/card/one/21.png"
            }]
        } : e)
          , X = ()=>({
            title: "How to buy MMTR",
            mainImg: "/imgs/howToBuy/video.png",
            button: {
                label: "Buy Now",
                onClick: ()=>{
                    window.location.href = "/"
                }
            },
            stepData: [{
                main: W,
                data: {
                    title: "Which device are you using?",
                    icon: "/imgs/howToBuy/device.svg",
                    tags: [{
                        value: "desktop",
                        label: "Desktop",
                        steps: E,
                        select: {
                            main: R,
                            data: {
                                title: "Which network are you using?",
                                icon: "/imgs/howToBuy/networkIcon.svg",
                                tags: [{
                                    value: "onETH",
                                    label: "on ETH",
                                    steps: Y,
                                    select: {
                                        data: {
                                            title: "Which currency are you using?",
                                            icon: "/imgs/howToBuy/currency.svg",
                                            isLine: !1,
                                            tags: [{
                                                value: "WITHETH",
                                                label: "WITH$ETH",
                                                steps: A
                                            }, {
                                                value: "WITHUSDTUSDC",
                                                label: "WITH $USDT / $USDC",
                                                steps: F
                                            }]
                                        }
                                    }
                                }, {
                                    value: "onBSC",
                                    label: "on BSC",
                                    steps: Y,
                                    select: {
                                        data: {
                                            title: "Which currency are you using?",
                                            icon: "/imgs/howToBuy/currency.svg",
                                            isLine: !1,
                                            tags: [{
                                                value: "WITHETH",
                                                label: "WITH$ETH",
                                                steps: q
                                            }, {
                                                value: "WITHUSDTUSDC",
                                                label: "WITH $USDT / $USDC",
                                                steps: P
                                            }]
                                        }
                                    }
                                }, {
                                    value: "WithCARD",
                                    label: "With CARD",
                                    steps: U
                                }]
                            }
                        }
                    }, {
                        type: "mobile",
                        value: "mobile",
                        label: "Mobile",
                        steps: $,
                        select: {
                            main: R,
                            data: {
                                title: "Which network are you using?",
                                icon: "/imgs/howToBuy/networkIcon.svg",
                                tags: [{
                                    value: "ETH/BSC",
                                    label: "ETH / BSC",
                                    steps: [],
                                    select: {
                                        data: {
                                            title: "Which currency are you using?",
                                            icon: "/imgs/howToBuy/currency.svg",
                                            tags: [{
                                                type: "mobile",
                                                value: "WITH$ETH/$BNB",
                                                label: "WITH $ETH / $BNB ",
                                                steps: z
                                            }, {
                                                type: "mobile",
                                                value: "WITH$USDT/$USDC",
                                                label: "WITH $USDT / $USDC",
                                                steps: L
                                            }]
                                        }
                                    }
                                }, {
                                    value: "WithCARD",
                                    label: "With CARD",
                                    type: "mobile",
                                    steps: G
                                }]
                            }
                        }
                    }]
                }
            }]
        })
          , K = ()=>{
            let e = X();
            return (0,
            l.jsxs)("div", {
                className: "w-full flex flex-col bg-[#F4F0E5]",
                children: [(0,
                l.jsx)(J, {
                    data: e
                }), (0,
                l.jsx)(Q, {
                    data: e
                })]
            })
        }
          , J = e=>{
            let {data: t} = e;
            return (0,
            l.jsxs)("div", {
                className: " max-md:hidden mt-[146px]  w-[70%] self-center flex flex-col items-center",
                children: [(0,
                l.jsx)(u, {
                    title: t.title,
                    className: "mb-[56px]"
                }), (0,
                l.jsx)("iframe", {
                    width: "80%",
                    height: "500px",
                    src: "https://www.youtube.com/embed/erzXnqGIXPk",
                    frameBorder: "0",
                    allowFullScreen: !0,
                    title: "youtube",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    className: "h-[250px] w-[95vw] md:h-[480px] md:w-[1000px] rounded-[30px]"
                }), (0,
                l.jsx)(B, {
                    data: t.stepData,
                    button: t.button
                }), (0,
                l.jsx)("div", {
                    className: "self-center mt-[239px]",
                    children: (0,
                    l.jsx)(r.$, {
                        pageType: "media"
                    })
                })]
            })
        }
          , Q = e=>{
            let {data: t} = e;
            return (0,
            l.jsxs)("div", {
                className: "md:hidden mt-[70px] w-full flex flex-col items-center",
                children: [(0,
                l.jsx)(u, {
                    title: t.title,
                    className: "mb-[17px] mr-[35px] ml-[35px]"
                }), (0,
                l.jsx)("iframe", {
                    width: "80%",
                    height: "400px",
                    src: "https://www.youtube.com/embed/erzXnqGIXPk",
                    frameBorder: "0",
                    allowFullScreen: !0,
                    title: "youtube",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    className: "h-[250px] w-[95vw] md:h-[580px] rounded-[30px]"
                }), (0,
                l.jsx)(O, {
                    data: t.stepData,
                    button: t.button
                }), (0,
                l.jsx)("div", {
                    className: "self-center mt-[139px]",
                    children: (0,
                    l.jsx)(r.$, {
                        pageType: "media"
                    })
                })]
            })
        }
          , V = ()=>{
            let {routes: e, isOpen: t, setIsOpen: o} = (0,
            n.HD)({
                pageTheme: "yellow"
            })
              , s = [{
                scrollId: "howtobuyPage",
                renderContent: ()=>(0,
                l.jsx)("div", {
                    className: "flex flex-col  w-full",
                    id: "#media",
                    children: (0,
                    l.jsx)(K, {})
                })
            }]
              , i = e.map(e=>{
                let t = s.find(t=>t.scrollId === e.scrollId);
                return t && "howtobuy" === e.pageType ? {
                    ...e,
                    renderContent: t.renderContent,
                    onClick: ()=>{
                        (0,
                        c.k3)(e.scrollId)
                    }
                } : {
                    ...e,
                    onClick: e.onClick ? e.onClick : ()=>{
                        (0,
                        n.F_)(e.scrollId, e.pageType)
                    }
                }
            }
            );
            return {
                routes: i,
                isOpen: t,
                setIsOpen: o
            }
        }
        ;
        function Z() {
            let {t: e} = (0,
            s.$G)()
              , {routes: t, isOpen: o, setIsOpen: i} = V();
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)(a(), {
                    children: [(0,
                    l.jsx)("title", {
                        children: e("head.HowToBuy")
                    }), (0,
                    l.jsx)("meta", {
                        name: "description",
                        content: e("mediaDescription")
                    })]
                }), (0,
                l.jsx)(c.Pz, {
                    pageType: "media",
                    data: t
                }), (0,
                l.jsx)(n.nk, {
                    isOpen: o,
                    setIsOpen: i
                })]
            })
        }
        var ee = !0
    },
    82553: function(e) {
        e.exports = {
            title: "styles_title__F_nI2",
            activeTag: "styles_activeTag__BUPOk",
            grayTag: "styles_grayTag__1GBN6"
        }
    },
    72096: function(e) {
        e.exports = {
            mainStep: "styles_mainStep__p0APH",
            smallStep: "styles_smallStep__2G__P",
            detail: "styles_detail__cyTcN"
        }
    }
}, function(e) {
    e.O(0, [1213, 4988, 3152, 8273, 9774, 2888, 179], function() {
        return e(e.s = 37868)
    }),
    _N_E = e.O()
}
]);
