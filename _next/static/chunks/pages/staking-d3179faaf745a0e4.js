(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8879], {
    57522: function(e, t, l) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/staking", function() {
            return l(46042)
        }
        ])
    },
    46042: function(e, t, l) {
        "use strict";
        l.r(t),
        l.d(t, {
            __N_SSG: function() {
                return W
            },
            default: function() {
                return D
            }
        });
        var s = l(52322)
          , a = l(60727)
          , r = l(97729)
          , n = l.n(r)
          , i = l(2784)
          , x = l(71324)
          , d = l(53079)
          , o = l(41237)
          , c = l(39126)
          , p = l(28091)
          , m = l(43913)
          , u = l(49442)
          , h = l(15198)
          , f = l(28879)
          , b = l.n(f)
          , j = l(34291)
          , v = l.n(j)
          , N = l(96577)
          , w = l.n(N)
          , g = l(88932);
        let k = e=>{
            let {value: t, onChange: l, onMax: a} = e;
            return (0,
            s.jsxs)("div", {
                className: " p-18px pl-12px pr-12px flex font-Cabin font-700 flex-col justify-between flex-1 bg-Background border-1px border-solid border-White overflow-hidden rounded-[24px] ",
                children: [(0,
                s.jsxs)("div", {
                    className: "flex justify-between mb-14px",
                    children: [(0,
                    s.jsx)("div", {
                        className: "text-[#a5aaae] flex flex-1",
                        children: "Amount to stake"
                    }), (0,
                    s.jsx)("div", {
                        className: "text-White tracking-0.3 flex cursor-pointer",
                        onClick: a,
                        children: "MAX"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-row justify-start items-center text-14",
                    children: [(0,
                    s.jsx)("input", {
                        value: t,
                        onChange: e=>{
                            l(Math.floor(Number(e.target.valueAsNumber)))
                        }
                        ,
                        className: " bg-Background text-18 font-700 flex flex-1",
                        type: "number",
                        style: {
                            width: 100
                        },
                        inputMode: "numeric"
                    }), (0,
                    s.jsx)("span", {
                        className: "text-[#a5aaae] text-16 mr-7px ml-7px ",
                        children: "MMTR"
                    }), (0,
                    s.jsx)(w(), {
                        height: 22,
                        width: 22,
                        src: "/imgs/logoHeader.png",
                        alt: "input"
                    })]
                })]
            })
        }
          , y = e=>{
            let {renderButton: t, style: l, className: a="", title: r} = e;
            return (0,
            s.jsx)(M, {
                title: r,
                renderButton: e=>(0,
                s.jsx)(m.J.Button, {
                    style: l,
                    className: a,
                    children: t(e)
                })
            })
        }
          , M = e=>{
            var t, l;
            let {renderButton: r, title: n} = e
              , {t: d} = (0,
            a.$G)()
              , {walletAddress: f} = (0,
            c.k)()
              , [j,N] = (0,
            i.useState)(0)
              , [y,M] = (0,
            i.useState)(!1)
              , [R,S] = (0,
            i.useState)(!1)
              , {data: T, refetch: C} = o.SX.getStakingStatus.useQuery({
                wallet: f
            }, {
                enabled: !!f
            })
              , {refetch: D, data: W} = o.SX.getTotalStakingStatus.useQuery()
              , J = o.SX.stakeToken.useMutation({
                onSuccess: ()=>{
                    C(),
                    D()
                }
            })
              , A = async()=>{
                M(!0),
                await g.Am.promise(J.mutateAsync({
                    wallet: f,
                    amount: j
                }, {}), {
                    success: "".concat(j, " MMTR Staked"),
                    error: {
                        render: e=>{
                            let {data: t} = e;
                            return t.message
                        }
                    },
                    pending: "Loading"
                }).catch(()=>{}
                ),
                M(!1),
                N(0)
            }
              , F = {
                title: n,
                list: [{
                    title: "Staked",
                    value: "".concat((0,
                    p.IJ)(null !== (t = null == T ? void 0 : T.staked) && void 0 !== t ? t : 0), " MMTR")
                }, {
                    title: "Available",
                    value: "".concat((0,
                    p.IJ)(null !== (l = null == T ? void 0 : T.stakable) && void 0 !== l ? l : 0), " MMTR")
                }],
                button: {
                    label: "stake",
                    onClick: async()=>{
                        if (j < 1e3) {
                            g.Am.error("You should stake 1000 MMTR at least.");
                            return
                        }
                        S(!0)
                    }
                },
                input: {
                    value: 0,
                    onChange: ()=>{}
                }
            };
            return (0,
            s.jsx)(m.J, {
                className: " flex relative w-full",
                children: e=>{
                    let {open: t, close: l} = e;
                    return (0,
                    s.jsxs)(s.Fragment, {
                        children: [r ? r({
                            open: t,
                            close: l
                        }) : (0,
                        s.jsx)(m.J.Button, {
                            className: "",
                            style: {
                                all: "unset"
                            },
                            children: d("head.About")
                        }), (0,
                        s.jsx)(u.u, {
                            as: i.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: (0,
                            s.jsxs)(m.J.Panel, {
                                className: "fixed bg-[#232323ce] max-md:pr-18px max-md:pl-18px w-screen h-screen flex flex-col items-center justify-center top-0 left-0 z-[100]",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: " relative w-min max-md:hidden p-[60px] pr-[80px] pl-[80px] overflow-hidden bg-Black  flex  flex-col   rounded-[40px] border-1px border-solid border-White/20",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: " absolute opacity-40 right-[22px] top-[22px] z-20 cursor-pointer",
                                        children: (0,
                                        s.jsx)(w(), {
                                            src: "/imgs/writeClose.png",
                                            width: 15,
                                            height: 15,
                                            alt: "",
                                            onClick: l
                                        })
                                    }), (0,
                                    s.jsx)(x.Dx, {
                                        label: F.title,
                                        className: " !text-RetroRed whitespace-nowrap text-[36px] font-RapidST font-700 mb-36px text-center"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "mb-36px h-[1px] w-full bg-White/20"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "mb-36px flex flex-col space-y-[13px] w-full",
                                        children: F.list.map(e=>(0,
                                        s.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0,
                                            s.jsx)("div", {
                                                className: "flex flex-1 font-CygnitoMonoPro text-13 text-Green ",
                                                children: e.title
                                            }), (0,
                                            s.jsx)("div", {
                                                className: " shrink-0 text-12 scale-8/12 font-DotNator origin-right",
                                                children: e.value
                                            })]
                                        }, e.title))
                                    }), (0,
                                    s.jsx)(k, {
                                        value: j,
                                        onChange: N,
                                        onMax: ()=>{
                                            var e;
                                            N(null !== (e = null == T ? void 0 : T.stakable) && void 0 !== e ? e : 0)
                                        }
                                    }), (0,
                                    s.jsx)(x.JA, {
                                        label: F.button.label,
                                        onClick: y ? v() : F.button.onClick,
                                        className: "mt-36px bg-RetroRed text-White w-full flex justify-center uppercase"
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "md:hidden  relative w-[90vw] p-[15px] pr-[25px] pl-[25px] overflow-hidden bg-Black  flex  flex-col   rounded-[40px] border-1px border-solid border-White/20",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: " absolute opacity-40 right-[22px] top-[22px] z-20",
                                        children: (0,
                                        s.jsx)(w(), {
                                            src: "/imgs/writeClose.png",
                                            width: 15,
                                            height: 15,
                                            alt: "",
                                            onClick: l
                                        })
                                    }), (0,
                                    s.jsx)(x.Dx, {
                                        label: F.title,
                                        className: " text-RetroRed text-[26px] text-center font-RapidST font-700 mb-16px"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "mb-20px h-[1px] w-full bg-White/20"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "mb-20px flex flex-col space-y-[13px] w-full",
                                        children: F.list.map(e=>(0,
                                        s.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0,
                                            s.jsx)("div", {
                                                className: "flex flex-1 font-CygnitoMonoPro text-16 text-Green ",
                                                children: e.title
                                            }), (0,
                                            s.jsx)("div", {
                                                className: " shrink-0 text-12 scale-8/12 font-DotNator origin-right",
                                                children: e.value
                                            })]
                                        }, e.title))
                                    }), (0,
                                    s.jsx)(k, {
                                        value: j,
                                        onChange: N,
                                        onMax: ()=>{
                                            var e;
                                            N(null !== (e = null == T ? void 0 : T.stakable) && void 0 !== e ? e : 0)
                                        }
                                    }), (0,
                                    s.jsx)(x.JA, {
                                        label: F.button.label,
                                        onClick: y ? v() : F.button.onClick,
                                        className: "mb-10px bg-RetroRed text-White mt-5 w-full flex justify-center uppercase"
                                    })]
                                })]
                            })
                        }), (0,
                        s.jsxs)(h.V, {
                            open: R,
                            onClose: ()=>S(!1),
                            className: "relative z-10000",
                            children: [(0,
                            s.jsx)("div", {
                                className: "fixed inset-0 bg-black/30",
                                "aria-hidden": "true"
                            }), (0,
                            s.jsx)("div", {
                                className: "fixed inset-0 flex w-screen items-center justify-center z-[1000]",
                                children: (0,
                                s.jsxs)(h.V.Panel, {
                                    className: "bg-[#000] border-[#ccc] border-1px rounded-[40px] p-5 w-[90vw] md:w-[400px] z-[1000]",
                                    children: [(0,
                                    s.jsx)(h.V.Title, {
                                        className: "font-DotNator text-[12px] text-center mt-2",
                                        children: "Confirm"
                                    }), (0,
                                    s.jsxs)(h.V.Description, {
                                        children: ["Your MMTR tokens will be staked until the end of the first staking pool. ", (0,
                                        s.jsx)("div", {
                                            className: "mt-2"
                                        }), "You will be able to withdraw your MMTR tokens and the rewarded tokens on", " ", b()(null == W ? void 0 : W.endDate).format("DD-MM-YYYY"), ".", " "]
                                    }), (0,
                                    s.jsx)(x.JA, {
                                        label: "Cancel",
                                        onClick: ()=>{
                                            S(!1)
                                        }
                                        ,
                                        className: "mb-10px bg-[#000] border-[White] border-1px mt-3 text-White w-full flex justify-center uppercase"
                                    }), (0,
                                    s.jsx)(x.JA, {
                                        label: "Confirm",
                                        onClick: ()=>{
                                            S(!1),
                                            A()
                                        }
                                        ,
                                        className: "mb-10px bg-Green text-White w-full flex justify-center uppercase"
                                    })]
                                })
                            })]
                        })]
                    })
                }
            })
        }
          , R = e=>{
            let {data: t} = e
              , {walletAddress: l, connect: a} = (0,
            c.k)();
            return (0,
            s.jsxs)("div", {
                className: "flex flex-col items-center mb-23px rounded-[40px] bg-Black border-1px border-solid border-White/20 p-[50px] pt-20px pb-30px max-md:w-[90vw]",
                children: [(0,
                s.jsx)("div", {
                    className: "mb-20px text-center text-White text-12 scale-8/12 font-DotNator",
                    children: t.title
                }), (0,
                s.jsx)("div", {
                    className: "mb-20px h-[1px] w-full bg-White/20"
                }), (0,
                s.jsx)("div", {
                    className: "mb-20px flex flex-col space-y-[13px] w-full md:min-w-[370px]",
                    children: t.list.map(e=>(0,
                    s.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0,
                        s.jsx)("div", {
                            className: "flex flex-1 font-CygnitoMonoPro text-16 text-Green ",
                            children: e.title
                        }), (0,
                        s.jsx)("div", {
                            className: "justify-end shrink-0 text-12 scale-8/12 font-DotNator origin-right",
                            children: e.value
                        })]
                    }, e.title))
                }), l ? (0,
                s.jsx)(y, {
                    className: "w-full",
                    title: "Stake MMTR",
                    renderButton: ()=>(0,
                    s.jsx)(x.JA, {
                        label: "Stake",
                        onClick: ()=>{}
                        ,
                        className: "mb-10px bg-RetroRed text-White w-full flex justify-center uppercase"
                    })
                }) : (0,
                s.jsx)(x.JA, {
                    label: "Connect Wallet",
                    onClick: ()=>a(),
                    className: "mb-10px bg-RetroRed text-White w-full flex justify-center uppercase"
                })]
            })
        }
        ;
        var S = l(29081);
        let T = ()=>{
            var e, t, l, a, r, n, i, m;
            let {walletAddress: u} = (0,
            c.k)()
              , {data: h} = o.SX.getStakingStatus.useQuery({
                wallet: u
            }, {
                enabled: !!u
            })
              , {data: f} = o.SX.getTotalStakingStatus.useQuery()
              , b = {
                title: "21.5M $MMTR rewards in staking pool",
                subTitle: "Ends in ".concat(null !== (e = null == f ? void 0 : f.dayLeft) && void 0 !== e ? e : 180, " days"),
                cardList: [{
                    title: "".concat((0,
                    p.IJ)(null !== (t = null == f ? void 0 : f.totalReward) && void 0 !== t ? t : 0)),
                    labeTitle: "MMTR reward paid"
                }, {
                    title: "".concat((0,
                    p.IJ)(null !== (l = null == f ? void 0 : f.totalStaked) && void 0 !== l ? l : 0)),
                    labeTitle: "Total MMTR staked"
                }, {
                    title: "".concat(null !== (a = null == f ? void 0 : f.apyPct) && void 0 !== a ? a : 0, "%"),
                    labeTitle: "24 hr APY"
                }]
            }
              , j = {
                title: u ? (0,
                S.Xn)(u) : "Connect wallet",
                list: [{
                    title: "Available",
                    value: "".concat((0,
                    p.IJ)(null !== (r = null == h ? void 0 : h.stakable) && void 0 !== r ? r : 0), "  MMTR")
                }, {
                    title: "Staked",
                    value: "".concat((0,
                    p.IJ)(null !== (n = null == h ? void 0 : h.staked) && void 0 !== n ? n : 0), " MMTR")
                }, {
                    title: "24 hr APY",
                    value: "".concat(null !== (i = null == f ? void 0 : f.apyPct) && void 0 !== i ? i : 0, "%")
                }, {
                    title: "MMTR earned",
                    value: (0,
                    p.IJ)(null !== (m = null == h ? void 0 : h.earned) && void 0 !== m ? m : 0)
                }]
            };
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)("div", {
                    className: "max-md:hidden flex flex-col item-center ",
                    children: [(0,
                    s.jsx)(x.Dx, {
                        label: b.title,
                        className: " text-center mb-7px !text-RetroRed text-[52px] font-700"
                    }), (0,
                    s.jsx)("div", {
                        className: "mb-40px text-12 font-DotNator text-center text-White",
                        children: b.subTitle
                    }), (0,
                    s.jsxs)("div", {
                        className: "mb-[70px] flex flex-col  w-min self-center",
                        children: [(0,
                        s.jsx)(R, {
                            data: j
                        }), (0,
                        s.jsx)(d.SR, {})]
                    }), (0,
                    s.jsx)("div", {
                        className: "flex space-x-[20px] items-center",
                        children: b.cardList.map((e,t)=>(0,
                        s.jsxs)("div", {
                            className: "p-32px rounded-[10px] bg-[#F4F0E5] flex flex-1  flex-col shrink-0 items-center",
                            children: [(0,
                            s.jsx)("div", {
                                className: "mb-4px text-center text-[36px] font-RapidST font-700 text-[#F6232C]",
                                children: e.title
                            }), (0,
                            s.jsx)("div", {
                                className: "text-center text-12 text-Coal scale-8/12 origin-center font-DotNator",
                                children: e.labeTitle
                            })]
                        }, t))
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "flex flex-col  pr-12px pl-12px md:hidden  w-screen",
                    children: [(0,
                    s.jsx)(x.Dx, {
                        label: b.title,
                        className: " text-center mb-7px !text-RetroRed !text-[42px] font-700"
                    }), (0,
                    s.jsx)("div", {
                        className: "mb-40px text-12 font-DotNator text-center text-White",
                        children: b.subTitle
                    }), (0,
                    s.jsxs)("div", {
                        className: "mb-[70px] flex flex-col  w-min self-center",
                        children: [(0,
                        s.jsx)(R, {
                            data: j
                        }), (0,
                        s.jsx)(d.SR, {})]
                    }), (0,
                    s.jsx)("div", {
                        className: "flex space-y-[20px] flex-col items-center",
                        children: b.cardList.map((e,t)=>(0,
                        s.jsxs)("div", {
                            className: "p-32px rounded-[10px] bg-[#F4F0E5] w-full flex flex-1  flex-col shrink-0 items-center",
                            children: [(0,
                            s.jsx)("div", {
                                className: "mb-4px text-center text-[36px] font-RapidST font-700 text-[#F6232C]",
                                children: e.title
                            }), (0,
                            s.jsx)("div", {
                                className: "text-center text-12 text-Coal scale-8/12 origin-center font-DotNator",
                                children: e.labeTitle
                            })]
                        }, t))
                    })]
                })]
            })
        }
          , C = ()=>{
            let {data: e} = o.SX.getTopStaker.useQuery()
              , t = {
                th: ["User", "MMTR Staked", "MMTR Earned", "Staked on"]
            }
              , l = (null != e ? e : []).map(e=>{
                let {wallet: t, stakedToken: l, earnedToken: s, stakedTime: a} = e;
                return {
                    user: t,
                    mmtrStaked: (0,
                    p.IJ)(l),
                    mmtrEarned: (0,
                    p.IJ)(s),
                    stakedOn: b()(a).format("YYYY-MM-DD")
                }
            }
            );
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)("div", {
                    className: " max-md:hidden flex flex-col w-full items-center",
                    children: [(0,
                    s.jsx)(x.Dx, {
                        label: "Top stakers",
                        className: "mb-23px text-center !text-RetroRed text-[52px] font-700 "
                    }), (0,
                    s.jsxs)("table", {
                        className: "border-[0px] border-solid border-collapse border-[#666] text-16 text-White text-center font-500",
                        children: [(0,
                        s.jsx)("thead", {
                            children: (0,
                            s.jsx)("tr", {
                                children: t.th.map(e=>(0,
                                s.jsx)("th", {
                                    className: "!border-[0px]  p-10px text-12 scale-8/12 origin-center font-DotNator whitespace-nowrap",
                                    children: e
                                }, e))
                            })
                        }), (0,
                        s.jsx)("tbody", {
                            children: l.map((e,t)=>(0,
                            s.jsxs)("tr", {
                                children: [(0,
                                s.jsx)("td", {
                                    className: "border-1px border-solid border-[#666] p-10px min-w-[185px] max-md:w-[20%]",
                                    children: e.user
                                }), (0,
                                s.jsx)("td", {
                                    className: "border-1px border-solid border-[#666]  p-10px min-w-[185px] max-md:w-[60%]",
                                    children: e.mmtrStaked
                                }), (0,
                                s.jsx)("td", {
                                    className: "border-1px border-solid border-[#666] p-10px min-w-[185px] max-md:w-[20%]",
                                    children: e.mmtrEarned
                                }), (0,
                                s.jsx)("td", {
                                    className: "border-1px border-solid border-[#666] p-10px min-w-[185px] max-md:w-[20%]",
                                    children: e.stakedOn
                                })]
                            }, t.toString()))
                        })]
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "md:hidden",
                    children: [(0,
                    s.jsx)(x.Dx, {
                        label: "Top stakers",
                        className: "mb-23px text-center !text-RetroRed text-[42px] font-700 "
                    }), (0,
                    s.jsx)("div", {
                        className: "unScrollBar pr-12px pl-12px w-full overflow-x-scroll overflow-y-hidden",
                        children: (0,
                        s.jsxs)("table", {
                            className: " border-[0px] border-solid border-collapse border-[#666] text-12 text-White  text-center font-500",
                            children: [(0,
                            s.jsx)("thead", {
                                children: (0,
                                s.jsx)("tr", {
                                    children: t.th.map(e=>(0,
                                    s.jsx)("th", {
                                        className: "!border-[0px]  p-10px text-12 scale-8/12 origin-center font-DotNator whitespace-nowrap",
                                        children: e
                                    }, e))
                                })
                            }), (0,
                            s.jsx)("tbody", {
                                children: l.map((e,t)=>(0,
                                s.jsxs)("tr", {
                                    children: [(0,
                                    s.jsx)("td", {
                                        className: "border-1px border-solid border-[#666] p-10px ",
                                        children: e.user
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "border-1px border-solid border-[#666]  p-10px ",
                                        children: e.mmtrStaked
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "border-1px border-solid border-[#666] p-10px ",
                                        children: e.mmtrEarned
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "border-1px border-solid border-[#666] p-10px  ",
                                        children: e.stakedOn
                                    })]
                                }, t.toString()))
                            })]
                        })
                    })]
                })]
            })
        }
        ;
        function D() {
            let {t: e} = (0,
            a.$G)()
              , t = [{
                scrollId: "rewards",
                renderContent: ()=>(0,
                s.jsxs)("div", {
                    className: "flex flex-col mt-[148px]",
                    children: [(0,
                    s.jsx)(x.RC, {
                        scrollId: "rewards"
                    }), (0,
                    s.jsx)(T, {})]
                })
            }, {
                scrollId: "topStakers",
                renderContent: ()=>(0,
                s.jsxs)("div", {
                    className: "flex flex-col mt-[99px] mb-[178px] items-center",
                    children: [(0,
                    s.jsx)(x.RC, {
                        scrollId: "topStakers"
                    }), (0,
                    s.jsx)(C, {})]
                })
            }];
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)(n(), {
                    children: [(0,
                    s.jsx)("title", {
                        children: e("homeTitle")
                    }), (0,
                    s.jsx)("meta", {
                        name: "description",
                        content: e("homeDescription")
                    })]
                }), (0,
                s.jsx)(x.kA, {
                    pageType: "referral",
                    hasFooter: !0,
                    className: "flex flex-col items-center",
                    children: (0,
                    s.jsx)("div", {
                        className: "max-w-[1000px] max-md:max-w-[100vw] flex flex-col  ",
                        children: t.map(e=>(0,
                        s.jsx)(i.Fragment, {
                            children: e.renderContent()
                        }, e.scrollId))
                    })
                })]
            })
        }
        var W = !0
    }
}, function(e) {
    e.O(0, [1213, 4988, 8834, 6328, 3152, 8273, 1324, 9774, 2888, 179], function() {
        return e(e.s = 57522)
    }),
    _N_E = e.O()
}
]);
