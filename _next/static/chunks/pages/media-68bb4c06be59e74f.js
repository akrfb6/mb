(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8361], {
    85505: function(e, t, i) {
        var a = i(53366)
          , s = i(86152)
          , r = i(15125);
        e.exports = function(e) {
            return "string" == typeof e || !s(e) && r(e) && "[object String]" == a(e)
        }
    },
    54014: function(e) {
        var t = Array.prototype.reverse;
        e.exports = function(e) {
            return null == e ? e : t.call(e)
        }
    },
    91019: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/media", function() {
            return i(10779)
        }
        ])
    },
    10779: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSG: function() {
                return $
            },
            default: function() {
                return R
            }
        });
        var a = i(52322)
          , s = i(60727)
          , r = i(97729)
          , n = i.n(r)
          , l = i(48273)
          , c = i(67989)
          , m = i(96577)
          , o = i.n(m)
          , d = i(94628)
          , p = i(2784)
          , h = i(15861)
          , u = i.n(h);
        let g = [0, 0, .5, .75, 1, 1, 1, .75, .5, 0]
          , x = [0, .5, .75, 1, 1, 1, .75, .5, 0, 0]
          , w = [.5, .75, 1, 1, 1, .75, .5, 0, 0, 0]
          , j = Array(10).fill(0)
          , y = e=>{
            let {index: t} = e
              , i = (0,
            p.useRef)(t)
              , [s,r] = (0,
            p.useState)(!1)
              , n = (0,
            p.useRef)(!1)
              , [l,c] = (0,
            p.useState)(3)
              , m = (0,
            p.useRef)(l);
            m.current = l;
            let o = (0,
            p.useRef)("right");
            return (0,
            p.useEffect)(()=>{
                n.current = !1,
                i.current !== t && (i.current > t && (o.current = "left",
                3 === l ? (r(!0),
                c(2)) : c(e=>e - 1)),
                i.current < t && (o.current = "right",
                5 === l ? (r(!0),
                c(6)) : c(e=>e + 1)),
                i.current = t,
                setTimeout(()=>{
                    n.current = !0,
                    m.current > 2 && m.current < 6 || (m.current <= 2 && (r(!1),
                    c(3)),
                    m.current >= 6 && (r(!1),
                    c(5)))
                }
                , 300))
            }
            , [t]),
            (0,
            a.jsx)("div", {
                className: "flex self-center",
                children: (0,
                a.jsx)("div", {
                    className: u().clCarouselDots,
                    children: (0,
                    a.jsx)("div", {
                        className: "w-auto ",
                        children: (0,
                        a.jsx)("ul", {
                            className: "".concat(u().dotUl, " w-[168px]"),
                            style: {
                                transform: "translateX(".concat(s ? "right" === o.current ? -48 : 0 : -24, "px)"),
                                transition: "all 0ms ease 0s",
                                transitionDuration: "".concat(n.current ? 0 : 300, "ms")
                            },
                            children: j.map((e,t)=>{
                                let i = t === l
                                  , r = s && "right" === o.current ? g : s && "left" === o.current ? w : x;
                                return (0,
                                a.jsx)("li", {
                                    style: {
                                        transform: "scale(".concat(r[t], ")"),
                                        transition: "all 0ms ease 0s",
                                        transitionDuration: "".concat(n.current ? 0 : 300, "ms"),
                                        background: i ? "#CD1A27" : "#CD1A2766"
                                    }
                                }, t.toString())
                            }
                            )
                        })
                    })
                })
            })
        }
        ;
        function v(e) {
            let {title: t, data: i, renderItem: s, keyEntity: r} = e
              , [n,l] = (0,
            p.useState)(0)
              , c = (0,
            p.useRef)(null)
              , m = (0,
            p.useRef)(null)
              , d = (0,
            p.useRef)(0);
            return (0,
            a.jsxs)("div", {
                className: "w-full flex flex-col",
                children: [(0,
                a.jsx)("div", {
                    className: u().title,
                    children: t
                }), (0,
                a.jsxs)("div", {
                    className: "w-full flex flex-row items-center",
                    children: [(0,
                    a.jsx)(o(), {
                        src: "/imgs/howToBuy/redLeft.png",
                        alt: "redLeft",
                        width: 48,
                        className: "cursor-pointer w-[24px] md:w-[48px]",
                        height: 48,
                        priority: !0,
                        onClick: ()=>{
                            var e, t, i;
                            if (0 === d.current)
                                return;
                            let a = null !== (i = null === (e = m.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== i ? i : 0;
                            null === (t = c.current) || void 0 === t || t.scrollTo({
                                left: a * (d.current - 1)
                            })
                        }
                    }), (0,
                    a.jsx)("div", {
                        className: "".concat(u().scrollBox, " "),
                        ref: c,
                        onScroll: e=>{
                            var t;
                            e.currentTarget.scrollLeft > 0 && (null === (t = m.current) || void 0 === t ? void 0 : t.offsetWidth) && m.current.offsetWidth > 0 && (d.current = Math.round(e.currentTarget.scrollLeft / m.current.offsetWidth),
                            l(d.current))
                        }
                        ,
                        children: i.map((e,t)=>(0,
                        a.jsx)("div", {
                            className: "".concat(u().scrollBoxItem),
                            ref: m,
                            children: s(e, t)
                        }, r(e)))
                    }), (0,
                    a.jsx)(o(), {
                        src: "/imgs/howToBuy/redRight.png",
                        alt: "redRight",
                        width: 48,
                        height: 48,
                        onClick: ()=>{
                            var e, t, a;
                            if (d.current === i.length - 1)
                                return;
                            let s = null !== (a = null === (e = m.current) || void 0 === e ? void 0 : e.offsetWidth) && void 0 !== a ? a : 0;
                            null === (t = c.current) || void 0 === t || t.scrollTo({
                                left: s * (d.current + 1)
                            })
                        }
                        ,
                        className: "cursor-pointer  w-[24px] md:w-[48px]",
                        priority: !0
                    })]
                }), (0,
                a.jsx)(y, {
                    index: n
                })]
            })
        }
        var b = i(33896)
          , f = i.n(b)
          , k = i(85505)
          , _ = i.n(k);
        let N = e=>{
            let {data: t, title: i} = e;
            return (0,
            a.jsx)(v, {
                data: t,
                title: i,
                renderItem: e=>{
                    let {desc: t, link: i, titleImg: s, style: r, nonLatin: n} = e;
                    return (0,
                    a.jsxs)("div", {
                        className: "".concat(f().card),
                        children: [(0,
                        a.jsxs)("div", {
                            className: f().mediaBox,
                            children: [(0,
                            a.jsx)("div", {
                                className: "flex shrink-0 h-[40px] w-[236px] mb-[13px]",
                                children: _()(s) ? (0,
                                a.jsx)(o(), {
                                    src: s,
                                    alt: "mediaTitleIcon",
                                    width: 236,
                                    height: 40,
                                    className: "".concat(f().mediaTitleIcon),
                                    priority: !0,
                                    style: r
                                }) : s
                            }), (0,
                            a.jsx)("div", {
                                className: "".concat(f().mediaDesc),
                                style: {
                                    fontFamily: n ? "inherit" : "DotNator",
                                    fontSize: n ? 20 : 12
                                },
                                children: t
                            })]
                        }), (0,
                        a.jsx)("a", {
                            className: "".concat(f().mediaFooter),
                            href: i,
                            target: "_blank",
                            children: "Read More"
                        })]
                    })
                }
                ,
                keyEntity: e=>e.link
            })
        }
          , T = e=>{
            let {data: t, title: i} = e;
            return (0,
            a.jsx)(v, {
                title: i,
                data: t,
                renderItem: e=>{
                    let {avatar: t, desc: i, title: s, subTitle: r, mainImg: n, link: l} = e;
                    return (0,
                    a.jsxs)("div", {
                        className: "".concat(f().card, " cursor-pointer"),
                        onClick: ()=>{
                            window.open(l, "_blank")
                        }
                        ,
                        children: [(0,
                        a.jsxs)("div", {
                            className: "mb-[13px] flex",
                            children: [(0,
                            a.jsx)("div", {
                                className: "w-[44px] h-[44px] rounded-full overflow-hidden shrink-0",
                                children: (0,
                                a.jsx)(o(), {
                                    src: t,
                                    alt: "mediaTitleIcon",
                                    width: 44,
                                    height: 44,
                                    priority: !0,
                                    objectFit: "contain"
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "ml-[10px]  flex flex-col justify-around",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: f().twitterTitle,
                                        children: s
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "w-[22px] h-[22px] shrink-0",
                                        children: (0,
                                        a.jsx)(o(), {
                                            src: "/imgs/media/attestation.png",
                                            alt: "redLeft",
                                            width: 22,
                                            className: "mb-[-1px] shrink-0",
                                            height: 22,
                                            priority: !0
                                        })
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: f().twitterSubTitle,
                                    children: r
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: f().twitterDesc,
                            children: i
                        }), (0,
                        a.jsx)("div", {
                            className: " w-full",
                            children: (0,
                            a.jsx)(o(), {
                                src: n,
                                alt: "twitterMain",
                                width: 316,
                                height: 184,
                                priority: !0,
                                style: {
                                    objectFit: "contain"
                                },
                                className: f().twitterMainImg
                            })
                        })]
                    })
                }
                ,
                keyEntity: e=>e.subTitle
            })
        }
          , I = e=>{
            let {data: t, title: i} = e;
            return (0,
            a.jsx)(v, {
                title: i,
                data: t,
                renderItem: e=>{
                    let {avatar: t, desc: i, title: s, mainImg: r, link: n} = e;
                    return (0,
                    a.jsxs)("div", {
                        className: "".concat(f().card, " cursor-pointer"),
                        onClick: ()=>{
                            window.open(n, "_blank")
                        }
                        ,
                        children: [(0,
                        a.jsx)(o(), {
                            src: r,
                            alt: "YouToMain",
                            width: 316,
                            height: 184,
                            priority: !0,
                            objectFit: "contain",
                            className: f().twitterMainImg
                        }), (0,
                        a.jsxs)("div", {
                            className: "mt-[13px] flex flex-1",
                            children: [(0,
                            a.jsx)("div", {
                                className: "w-[36px] h-[36px] rounded-full overflow-hidden shrink-0",
                                children: (0,
                                a.jsx)(o(), {
                                    src: t,
                                    alt: "mediaTitleIcon",
                                    width: 36,
                                    height: 36,
                                    priority: !0,
                                    objectFit: "contain"
                                })
                            }), (0,
                            a.jsxs)("div", {
                                className: "ml-[10px]  flex flex-col justify-between",
                                children: [(0,
                                a.jsx)("div", {
                                    className: f().youtobeDesc,
                                    children: i
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: f().youtobeTitle,
                                        children: s
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "w-[22px] h-[22px] shrink-0 ml-[3px]",
                                        children: (0,
                                        a.jsx)(o(), {
                                            src: "/imgs/media/attestation.png",
                                            alt: "redLeft",
                                            width: 22,
                                            className: "mb-[-3px] shrink-0",
                                            height: 22,
                                            priority: !0
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }
                ,
                keyEntity: e=>e.title
            })
        }
        ;
        var M = i(99023)
          , S = i.n(M)
          , D = i(54014)
          , C = i.n(D);
        let E = ()=>{
            let {t: e} = (0,
            s.$G)()
              , t = [{
                type: "media",
                title: e("head.Media"),
                cardList: [{
                    link: "https://de.beincrypto.com/die-neue-kryptowaehrung-meminator/",
                    desc: "Die neue Kryptow\xe4hrung Meminator k\xf6nnte die konkurrierenden Meme-Coins vernichten",
                    titleImg: "/imgs/media/mediaSwiper/beincrypto.png"
                }, {
                    link: "https://coingape.com/sponsored/memeinators-hodl-chronicles-investing-in-a-post-apocalyptic-world-without-useless-memes/",
                    desc: "Memeinator’s HODL Chronicles: Investing In A Post-Apocalyptic World Without Useless Memes",
                    titleImg: "/imgs/media/mediaSwiper/coingape.png"
                }, {
                    link: "https://ambcrypto.com/memeinator-enters-the-meme-coin-scene-with-guns-blazing/",
                    desc: "Memeinator enters the Meme coin scene with guns blazing!",
                    titleImg: "/imgs/media/mediaSwiper/ambcrypto.png"
                }, {
                    link: "https://www.cryptopolitan.com/terminator-inspired-memeinator-has-one-goal-dominate-the-meme-coin-market/",
                    desc: "Terminator-Inspired Meminator Has One Goal: Dominate The Meme Coin Market",
                    titleImg: "/imgs/media/mediaSwiper/cryptopolitan.svg"
                }, {
                    link: "https://www.cointribune.com/la-nouvelle-crypto-memeinator-est-prete-a-en-decoudre/",
                    desc: "La nouvelle cryptomonnaie Memeinator est pr\xeate \xe0 en d\xe9coudre",
                    titleImg: "/imgs/media/mediaSwiper/cointribune.svg"
                }, {
                    link: "https://de.cointelegraph.com/press-releases/memeinator-enters-the-meme-coin-scene",
                    desc: "Memeinator betritt die Meme-Coin-Szene mit Feuerwaffen",
                    titleImg: "/imgs/media/mediaSwiper/cointelegraph.png"
                }, {
                    link: "https://newsbit.nl/op-terminator-geinspireerde-coin-memeinator-heeft-een-doel-de-markt-voor-meme-coins-domineren/",
                    desc: "Op Terminator ge\xefnspireerde coin Memeinator heeft \xe9\xe9n doel: de markt voor meme coins domineren",
                    titleImg: "/imgs/media/mediaSwiper/newsbit.svg"
                }, {
                    link: "https://www.blockmedia.co.kr/archives/378519",
                    desc: "밈네이터, 오늘 27일 21시 사전 판매 시작 … 새로운 컨셉으로 시장 관심 이끌까?",
                    titleImg: "/imgs/media/mediaSwiper/blockMedia.png",
                    style: {
                        marginLeft: -11
                    },
                    nonLatin: !0
                }, {
                    link: "https://cryptopotato.com/the-future-of-cryptocurrency-faces-meme-domination-can-memeinator-change-the-timeline/",
                    desc: "The Future of Cryptocurrency Faces Meme Domination: Can Memeinator Change the Timeline?",
                    titleImg: "/imgs/media/mediaSwiper/cryptopotato.png",
                    style: {
                        marginLeft: -3
                    }
                }, {
                    link: "https://www.ariva.de/news/schockierende-ankunft-memeinator-betritt-als-neue-10950438",
                    desc: "Schockierende Ankunft! Memeinator betritt als neue Top-Kryptow\xe4hrung die B\xfchne",
                    titleImg: "/imgs/media/mediaSwiper/ariva.svg"
                }, {
                    link: "https://news.bitcoin.com/memeinator-announced-taking-on-the-meme-coin-market-with-a-1-billion-vision/",
                    desc: "Memeinator Announced: Taking on the Meme Coin Market With a $1 Billion Vision",
                    titleImg: "/imgs/media/mediaSwiper/bitc.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://finance.yahoo.com/news/memeinator-announced-taking-meme-coin-111617660.html",
                    desc: "Memeinator Announced: Taking on the Meme Coin Market With a $1 Billion Vision",
                    titleImg: "/imgs/media/mediaSwiper/yahoo.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://bitcoinist.com/ai-meme-warfare-is-memeinator-a-good-investment-option-in-2023/",
                    desc: "AI Meme Warfare — Is Memeinator a Good Investment Option in 2023?",
                    titleImg: "/imgs/media/mediaSwiper/bitcoinist.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://coingape.com/sponsored/memeinator-tops-new-meme-coins-with-695k-raised-in-17-days/",
                    desc: "Memeinator Tops New Meme Coins With $695k Raised In 17 Days",
                    titleImg: "/imgs/media/mediaSwiper/coingape.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://www.blockmedia.co.kr/archives/391765",
                    desc: "밈네이터, 우주여행 이벤트 등록에 24만 건 몰려…새로운 밈코인 등장에 시장 주목",
                    titleImg: "/imgs/media/mediaSwiper/blockMedia.png",
                    style: {
                        objectFit: "contain"
                    },
                    nonLatin: !0
                }, {
                    link: "https://cryptopotato.com/memeinators-2024-ambition-to-dominate-what-can-be-learned-from-xrp-price-trends/",
                    desc: "Memeinator’s 2024 Ambition to Dominate – What Can Be Learned From XRP Price Trends",
                    titleImg: "/imgs/media/mediaSwiper/cryptopotato.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://cointelegraph.com/press-releases/memeinator-announced-taking-on-the-meme-coin-market-with-a-1b-vision",
                    desc: "Memeinator announced: Taking on the meme coin market with a $1B vision Content",
                    titleImg: "/imgs/media/mediaSwiper/cointelegraph.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://finance.yahoo.com/news/memes-contender-memeinator-soars-past-101558483.html",
                    desc: "$MEME's New Contender: Memeinator Soars Past $1M Raise in Under 4 Weeks",
                    titleImg: "/imgs/media/mediaSwiper/yahoo.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://zycrypto.com/3-unmissable-2024-crypto-trends-memeinator-tops-cryptos-for-big-yields/",
                    desc: "3 Unmissable 2024 Crypto Trends: Memeinator Tops Cryptos for Big Yields",
                    titleImg: "/imgs/media/mediaSwiper/zyCrypto.png",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://finbold.com/why-united-states-best-crypto-traders-are-obsessed-with-memeinator/",
                    desc: "Memeinator, a trailblazer in the cryptocurrency world, is swiftly capturing the interest of American traders...",
                    titleImg: "/imgs/media/mediaSwiper/finbold.svg",
                    style: {
                        objectFit: "contain"
                    }
                }, {
                    link: "https://www.banklesstimes.com/news/2024/01/05/memeinator-surpasses-dollar29-million-amid-unstoppable-meme-coin-traction/",
                    desc: "Memeinator Surpasses $2.9 Million amid Unstoppable Meme Coin Traction",
                    titleImg: "/imgs/media/mediaSwiper/banklesstimes.svg",
                    style: {
                        objectFit: "contain"
                    }
                }]
            }, {
                type: "twitter",
                title: "TWITTER",
                cardList: [{
                    avatar: "/imgs/media/twitterSwiper/avatar1.jpeg",
                    title: "Marco",
                    subTitle: "@MrMarcoThunder",
                    desc: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: " mb-1",
                            children: "TheMemeinator is set to DOMINATE all memes!"
                        }), (0,
                        a.jsx)("div", {
                            className: " mb-1",
                            children: "Powered by AI technology... this will be the project of the year!"
                        }), (0,
                        a.jsx)("div", {
                            className: " mb-1",
                            children: "Tokenomics look INSANE, get in early to make MASSIVE"
                        }), (0,
                        a.jsx)("div", {
                            children: "GAINS.Presale is live! Grab your $MMTR NOW"
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg1.jpeg",
                    link: "https://twitter.com/MrMarcoThunder/status/1707087444749771124"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar2.jpeg",
                    title: "Mr \uD835\uDD4F",
                    subTitle: "@MrX_Crypto",
                    desc: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: " mb-1",
                            children: "TheMemeinator presale launches soon! This is going to be HUGE!"
                        }), (0,
                        a.jsxs)("ul", {
                            itemType: "square",
                            children: [(0,
                            a.jsxs)("li", {
                                className: " mb-[2px] flex items-center",
                                children: [(0,
                                a.jsx)("div", {
                                    className: " w-[14px] h-[14px] mr-1",
                                    children: (0,
                                    a.jsx)(o(), {
                                        width: 10,
                                        height: 10,
                                        src: "/imgs/media/twitterSwiper/check.svg",
                                        alt: "check"
                                    })
                                }), "Tokenomics look INSANE"]
                            }), (0,
                            a.jsxs)("li", {
                                className: " mb-[2px] flex items-center",
                                children: [(0,
                                a.jsx)("div", {
                                    className: " w-[14px] h-[14px] mr-1",
                                    children: (0,
                                    a.jsx)(o(), {
                                        width: 10,
                                        height: 10,
                                        src: "/imgs/media/twitterSwiper/check.svg",
                                        alt: "check"
                                    })
                                }), "Targeting a $1 billion market cap"]
                            }), (0,
                            a.jsxs)("li", {
                                className: " mb-[2px] flex items-center",
                                children: [(0,
                                a.jsx)("div", {
                                    className: " w-[14px] h-[14px] mr-1",
                                    children: (0,
                                    a.jsx)(o(), {
                                        width: 10,
                                        height: 10,
                                        src: "/imgs/media/twitterSwiper/check.svg",
                                        alt: "check"
                                    })
                                }), "AI powered"]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            children: "Check out the whitepaper and join the all chats NOW"
                        })]
                    }),
                    link: "https://twitter.com/MrX_Crypto/status/1705541804840321494",
                    mainImg: "/imgs/media/twitterSwiper/bg2.jpeg"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar4.jpeg",
                    title: "Crypto ₿east",
                    subTitle: "@CryptoTheBeast_",
                    desc: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsxs)("div", {
                            className: " mb-1",
                            children: ["TheMemeinator_ PRESALE IS LIVE AND IT", "'", "S FLYING!"]
                        }), (0,
                        a.jsxs)("ul", {
                            itemType: "square",
                            children: [(0,
                            a.jsxs)("li", {
                                className: " mb-[2px] flex items-center",
                                children: [(0,
                                a.jsx)("div", {
                                    className: " w-[14px] h-[14px] mr-1",
                                    children: (0,
                                    a.jsx)(o(), {
                                        width: 10,
                                        height: 10,
                                        src: "/imgs/media/twitterSwiper/check.svg",
                                        alt: "check"
                                    })
                                }), "Tokenomics look INSANE"]
                            }), (0,
                            a.jsxs)("li", {
                                className: " mb-[2px] flex items-center",
                                children: [(0,
                                a.jsx)("div", {
                                    className: " w-[14px] h-[14px] mr-1",
                                    children: (0,
                                    a.jsx)(o(), {
                                        width: 10,
                                        height: 10,
                                        src: "/imgs/media/twitterSwiper/check.svg",
                                        alt: "check"
                                    })
                                }), "Targeting a $1 billion market cap"]
                            }), (0,
                            a.jsxs)("li", {
                                className: " mb-[2px] flex items-center",
                                children: [(0,
                                a.jsx)("div", {
                                    className: " w-[14px] h-[14px] mr-1",
                                    children: (0,
                                    a.jsx)(o(), {
                                        width: 10,
                                        height: 10,
                                        src: "/imgs/media/twitterSwiper/check.svg",
                                        alt: "check"
                                    })
                                }), "AI powered"]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            children: "Grab your $MMTR tokens NOW"
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg4.jpeg",
                    link: "https://twitter.com/CryptoTheBeast_/status/1708920405145399332?t=UNP7bhERm2p2cSsa3RjV2A&s=35"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar5.jpeg",
                    title: " ChinaWhalesHub",
                    subTitle: "@ChinaWhalesHub",
                    desc: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: " mb-1",
                            children: "Fancy going to space?!"
                        }), (0,
                        a.jsxs)("ul", {
                            itemType: "square",
                            children: [(0,
                            a.jsx)("li", {
                                className: " mb-[2px] flex items-center",
                                children: "Time to join the @TheMemeinator_ $250k Virgin Galactic GIVEAWAY!"
                            }), (0,
                            a.jsx)("li", {
                                className: " mb-[2px] flex items-center",
                                children: "Secure your place in the Resistance & YOU could be off to the stars!"
                            }), (0,
                            a.jsx)("li", {
                                className: " mb-[2px] flex items-center",
                                children: "Grab $MMTR tokens to enter"
                            })]
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg5.jpeg",
                    link: "https://twitter.com/chinawhaleshub/status/1717952032315707573?s=46"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar6.jpeg",
                    title: "Altcoins Gems Calls",
                    subTitle: "@AltcoinsCalls",
                    desc: (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: " mb-1",
                            children: "TheMemeinator_ presale is FLYING! \uD83D\uDD25 Time to make those GAINS!"
                        }), (0,
                        a.jsxs)("ul", {
                            itemType: "square",
                            children: [(0,
                            a.jsx)("li", {
                                className: " mb-[2px] flex items-center",
                                children: "Over $855K has been raised!"
                            }), (0,
                            a.jsx)("li", {
                                className: " mb-[2px] flex items-center",
                                children: "Don't miss out this GEM which has 100x potential"
                            }), (0,
                            a.jsx)("li", {
                                className: " mb-[2px] flex items-center",
                                children: "This is the project of the year! Grab your $MMTR NOW"
                            })]
                        }), (0,
                        a.jsx)("div", {
                            children: "Grab your $MMTR tokens NOW"
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg6.jpeg",
                    link: "https://twitter.com/altcoinscalls/status/1717577889724686547?s=46"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar7.jpeg",
                    title: "Alan Rogers",
                    subTitle: "@alanrog3",
                    desc: (0,
                    a.jsxs)("div", {
                        className: "space-y-[2px]",
                        children: [(0,
                        a.jsx)("div", {
                            children: "TheMemeinator_ presale is FLYING! \uD83D\uDD25 Time to make those GAINS!"
                        }), (0,
                        a.jsx)("div", {
                            children: "@TheMemeinator__ PRESALE \uD83D\uDCA5"
                        }), (0,
                        a.jsx)("div", {
                            children: "Only $150K left in Stage 11 \uD83E\uDD2F"
                        }), (0,
                        a.jsx)("div", {
                            children: "Tokenomics look INSANE ✅"
                        }), (0,
                        a.jsx)("div", {
                            children: "Targeting a $1B market cap ✅"
                        }), (0,
                        a.jsx)("div", {
                            children: "Don't miss out, grab $MMTR now"
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg1.jpeg",
                    link: "https://twitter.com/alanrog3/status/1744332257878315450"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar8.jpeg",
                    title: "Your Crypto DJ",
                    subTitle: "@yourcryptodj",
                    desc: (0,
                    a.jsxs)("div", {
                        className: "space-y-[2px]",
                        children: [(0,
                        a.jsx)("div", {
                            children: "It's all fun and memes at @TheMemeinator__"
                        }), (0,
                        a.jsx)("div", {
                            children: "100000$ #Airdrop up for grabs \uD83D\uDCB0"
                        }), (0,
                        a.jsx)("div", {
                            children: "STAGE 11 is nearly finished⌛"
                        }), (0,
                        a.jsx)("div", {
                            children: "OVER $3M RAISED AND CLOSING IN ON $4M FAST!"
                        }), (0,
                        a.jsx)("div", {
                            children: "Targeting a $1B market cap ✅"
                        }), (0,
                        a.jsx)("div", {
                            children: "Grab yourself a bag before price rises \uD83D\uDCB0\uD83D\uDCB9"
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg8.jpeg",
                    link: "https://twitter.com/yourcryptodj/status/1744488889941626914"
                }, {
                    avatar: "/imgs/media/twitterSwiper/avatar9.jpeg",
                    title: "Your Crypto DJ",
                    subTitle: "@yourcryptodj",
                    desc: (0,
                    a.jsxs)("div", {
                        className: "space-y-[2px]",
                        children: [(0,
                        a.jsx)("div", {
                            children: "OVER $3 MILLION RASIED IN THE @TheMemeinator__ PRESALE so far"
                        }), (0,
                        a.jsx)("div", {
                            children: "Only $150K left in Stage 11 \uD83E\uDD2F This project is going to be HUGE!"
                        }), (0,
                        a.jsx)("div", {
                            children: "Don't miss out, grab $MMTR now"
                        })]
                    }),
                    mainImg: "/imgs/media/twitterSwiper/bg9.jpeg",
                    link: "https://twitter.com/OpCryptoUK/status/1743595678234792124"
                }]
            }, {
                type: "youtube",
                title: "YOUTUBE",
                cardList: [{
                    avatar: "/imgs/media/youtube/avatar1.jpeg",
                    title: "Crypto Invest",
                    desc: "Memeinator La survie de votre m\xe8me ne d\xe9pend pas de vous. \xc7a d\xe9pend de moi",
                    mainImg: "/imgs/media/youtube/bg1.png",
                    link: "https://www.youtube.com/watch?v=DpTvkVQLklI&t=11s"
                }, {
                    avatar: "/imgs/media/youtube/avatar2.jpeg",
                    title: "FinTech Channel",
                    desc: "MEMEINATOR - New MEME Killer! Join Whitelist - Huge Presale! - Don't miss out!",
                    mainImg: "/imgs/media/youtube/bg2.png",
                    link: "https://www.youtube.com/watch?v=I4Qc19EuM9w"
                }, {
                    avatar: "/imgs/media/youtube/avatar3.jpeg",
                    title: "John Patrick Acquaviva",
                    desc: "Memeinator, el proximo proyecto viral?",
                    mainImg: "/imgs/media/youtube/bg3.png",
                    link: "https://www.youtube.com/watch?v=pHMNu8hk89k"
                }, {
                    avatar: "/imgs/media/youtube/avatar4.jpeg",
                    title: "NFTsGUIDE",
                    desc: "Memeinator Review - The Ultimate Memeified Decentralized Ecosystem!",
                    mainImg: "/imgs/media/youtube/bg4.png",
                    link: "https://youtube.com/watch?v=4NnwZCYVsn4&feature=youtu.be"
                }, {
                    avatar: "/imgs/media/youtube/avatar5.jpeg",
                    title: "FinTech Channel",
                    desc: "The Memeinator is on a mission to a $1B market cap. Don’t miss out on the presale - 100x potential!",
                    mainImg: "/imgs/media/youtube/bg5.png",
                    link: "https://www.youtube.com/watch?v=9-jpsXzaYFU"
                }, {
                    avatar: "/imgs/media/youtube/avatar6.jpeg",
                    title: "Altcoin Buzz",
                    desc: "SHUTDOWN! ALTCOINS DROP 82% | Another FAKE Crypto News",
                    mainImg: "/imgs/media/youtube/bg6.png",
                    link: "https://www.youtube.com/watch?v=undsucwUT9I&t=255s"
                }]
            }]
              , i = t.map(e=>({
                ...e,
                cardList: C()(e.cardList)
            }));
            return (0,
            a.jsxs)("div", {
                className: "w-full flex flex-col bg-[#F4F0E5]",
                children: [(0,
                a.jsx)(A, {
                    data: i
                }), (0,
                a.jsx)(F, {
                    data: i
                })]
            })
        }
          , A = e=>{
            let {data: t} = e
              , {t: i} = (0,
            s.$G)();
            return (0,
            a.jsxs)("div", {
                className: "max-md:hidden mt-[70px] w-full flex flex-col items-center",
                children: [(0,
                a.jsx)(o(), {
                    src: "/imgs/main.png",
                    alt: "main",
                    className: "w-[25%] mb-[27px] mt-[40px] animate__animated animate__fadeIn animate__delay-1s",
                    width: 650,
                    height: 650 * (1464 / 1744),
                    priority: !0,
                    style: {
                        objectFit: "contain"
                    }
                }), (0,
                a.jsx)(o(), {
                    src: "/imgs/title.png",
                    alt: "titleHeader",
                    className: "".concat(S().titleHeader, " mb-[24px] cursor-pointer animate__animated animate__fadeIn animate__delay-1s"),
                    width: 623,
                    height: 623 * (156 / 2492),
                    priority: !0
                }), (0,
                a.jsx)("div", {
                    className: "".concat(S().titleDesc, " animate__animated animate__fadeIn animate__delay-1s"),
                    children: i("media.desc")
                }), (0,
                a.jsx)("div", {
                    className: "w-[100vw] flex-col pr-[100px] pl-[100px] flex mb-[132px] space-y-[132px] animate__animated animate__fadeIn animate__delay-1s",
                    children: t.map((e,t)=>"media" === e.type ? (0,
                    a.jsx)(N, {
                        title: e.title,
                        data: e.cardList
                    }, t) : "twitter" === e.type ? (0,
                    a.jsx)(T, {
                        title: e.title,
                        data: e.cardList
                    }, t) : "youtube" === e.type ? (0,
                    a.jsx)(I, {
                        title: e.title,
                        data: e.cardList
                    }, t) : null)
                }), (0,
                a.jsx)("div", {
                    className: "self-center",
                    children: (0,
                    a.jsx)(d.$, {
                        pageType: "media"
                    })
                })]
            })
        }
          , F = e=>{
            let {data: t} = e
              , {t: i} = (0,
            s.$G)();
            return (0,
            a.jsxs)("div", {
                className: "md:hidden mt-[70px] w-full flex flex-col items-center",
                children: [(0,
                a.jsx)(o(), {
                    src: "/imgs/main.png",
                    alt: "main",
                    className: "w-[35%] mb-[27px] ".concat(S().mianImg),
                    width: 650,
                    height: 650 * (1464 / 1744),
                    priority: !0,
                    style: {
                        objectFit: "contain"
                    }
                }), (0,
                a.jsx)(o(), {
                    src: "/imgs/title.png",
                    alt: "titleHeader",
                    className: "max-md:w-[90vw] mb-[24px] cursor-pointer animate__animated animate__fadeIn animate__delay-1s",
                    width: 623,
                    height: 623 * (156 / 2492),
                    priority: !0
                }), (0,
                a.jsx)("div", {
                    className: S().titleDesc,
                    children: i("media.desc")
                }), (0,
                a.jsx)("div", {
                    className: "w-[100vw] pr-[9px] pl-[9px] flex-col  flex mb-[132px] space-y-[132px]",
                    children: t.map((e,t)=>"media" === e.type ? (0,
                    a.jsx)(N, {
                        title: e.title,
                        data: e.cardList
                    }, t) : "twitter" === e.type ? (0,
                    a.jsx)(T, {
                        title: e.title,
                        data: e.cardList
                    }, t) : "youtube" === e.type ? (0,
                    a.jsx)(I, {
                        title: e.title,
                        data: e.cardList
                    }, t) : null)
                }), (0,
                a.jsx)("div", {
                    className: "self-center",
                    children: (0,
                    a.jsx)(d.$, {
                        pageType: "media"
                    })
                })]
            })
        }
          , L = ()=>{
            let {routes: e, isOpen: t, setIsOpen: i} = (0,
            l.HD)({
                pageTheme: "yellow"
            })
              , s = [{
                scrollId: "media",
                renderContent: ()=>(0,
                a.jsx)("div", {
                    className: "flex flex-col  w-full",
                    id: "#media",
                    children: (0,
                    a.jsx)(E, {})
                })
            }]
              , r = e.map(e=>{
                let t = s.find(t=>t.scrollId === e.scrollId);
                return t && "media" === e.pageType ? {
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
                        l.F_)(e.scrollId, e.pageType)
                    }
                }
            }
            );
            return {
                routes: r,
                isOpen: t,
                setIsOpen: i
            }
        }
        ;
        function R() {
            let {t: e} = (0,
            s.$G)()
              , {routes: t, isOpen: i, setIsOpen: r} = L();
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(n(), {
                    children: [(0,
                    a.jsx)("title", {
                        children: e("mediaTitle")
                    }), (0,
                    a.jsx)("meta", {
                        name: "description",
                        content: e("mediaDescription")
                    })]
                }), (0,
                a.jsx)(c.Pz, {
                    pageType: "media",
                    data: t
                }), (0,
                a.jsx)(l.nk, {
                    isOpen: i,
                    setIsOpen: r
                })]
            })
        }
        var $ = !0
    },
    15861: function(e) {
        e.exports = {
            title: "style_title__ZaZ_T",
            scrollBox: "style_scrollBox__wTvCe",
            scrollBoxItem: "style_scrollBoxItem__KCHR2",
            clCarouselDots: "style_clCarouselDots__lPjKD",
            dotUl: "style_dotUl__K8hLz"
        }
    },
    33896: function(e) {
        e.exports = {
            card: "swiper_card__7tM2_",
            mediaBox: "swiper_mediaBox__WH8kW",
            mediaTitleIcon: "swiper_mediaTitleIcon___rHrJ",
            mediaDesc: "swiper_mediaDesc__yvUOq",
            mediaDate: "swiper_mediaDate__eUyaY",
            mediaFooter: "swiper_mediaFooter__plIDu",
            twitterTitle: "swiper_twitterTitle__OYMoH",
            twitterSubTitle: "swiper_twitterSubTitle__isoEt",
            twitterDesc: "swiper_twitterDesc__2Z6E_",
            twitterMainImg: "swiper_twitterMainImg__s8UpC",
            youtobeDesc: "swiper_youtobeDesc__hogEf",
            youtobeTitle: "swiper_youtobeTitle__0K_7a"
        }
    },
    99023: function(e) {
        e.exports = {
            titleDesc: "media_titleDesc__teeBR",
            manImg: "media_manImg__4WHE_",
            menuTxt: "media_menuTxt__WCfGS"
        }
    }
}, function(e) {
    e.O(0, [1213, 4988, 3152, 8273, 9774, 2888, 179], function() {
        return e(e.s = 91019)
    }),
    _N_E = e.O()
}
]);
