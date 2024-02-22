(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9897], {
    27728: function(e, t, i) {
        "use strict";
        t.Xx = t._w = t.aP = t.KS = t.jQ = void 0,
        i(81293);
        let r = i(46756);
        function n(e) {
            let t = new Float64Array(16);
            if (e)
                for (let i = 0; i < e.length; i++)
                    t[i] = e[i];
            return t
        }
        i(52887),
        t.jQ = 64,
        t.KS = 64,
        t.aP = 32;
        let s = new Uint8Array(32);
        s[0] = 9;
        let o = n()
          , a = n([1])
          , c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]))
          , h = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
          , l = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
        function u(e, t) {
            for (let i = 0; i < 16; i++)
                e[i] = 0 | t[i]
        }
        function p(e) {
            let t = 1;
            for (let i = 0; i < 16; i++) {
                let r = e[i] + t + 65535;
                t = Math.floor(r / 65536),
                e[i] = r - 65536 * t
            }
            e[0] += t - 1 + 37 * (t - 1)
        }
        function f(e, t, i) {
            let r = ~(i - 1);
            for (let i = 0; i < 16; i++) {
                let n = r & (e[i] ^ t[i]);
                e[i] ^= n,
                t[i] ^= n
            }
        }
        function d(e, t) {
            let i = n()
              , r = n();
            for (let e = 0; e < 16; e++)
                r[e] = t[e];
            p(r),
            p(r),
            p(r);
            for (let e = 0; e < 2; e++) {
                i[0] = r[0] - 65517;
                for (let e = 1; e < 15; e++)
                    i[e] = r[e] - 65535 - (i[e - 1] >> 16 & 1),
                    i[e - 1] &= 65535;
                i[15] = r[15] - 32767 - (i[14] >> 16 & 1);
                let e = i[15] >> 16 & 1;
                i[14] &= 65535,
                f(r, i, 1 - e)
            }
            for (let t = 0; t < 16; t++)
                e[2 * t] = 255 & r[t],
                e[2 * t + 1] = r[t] >> 8
        }
        n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function g(e, t, i) {
            for (let r = 0; r < 16; r++)
                e[r] = t[r] + i[r]
        }
        function v(e, t, i) {
            for (let r = 0; r < 16; r++)
                e[r] = t[r] - i[r]
        }
        function y(e, t, i) {
            let r, n, s = 0, o = 0, a = 0, c = 0, h = 0, l = 0, u = 0, p = 0, f = 0, d = 0, g = 0, v = 0, y = 0, m = 0, _ = 0, w = 0, b = 0, E = 0, I = 0, P = 0, S = 0, O = 0, R = 0, x = 0, C = 0, A = 0, N = 0, T = 0, q = 0, j = 0, D = 0, L = i[0], z = i[1], M = i[2], k = i[3], $ = i[4], U = i[5], H = i[6], V = i[7], K = i[8], B = i[9], F = i[10], Z = i[11], J = i[12], W = i[13], G = i[14], Q = i[15];
            s += (r = t[0]) * L,
            o += r * z,
            a += r * M,
            c += r * k,
            h += r * $,
            l += r * U,
            u += r * H,
            p += r * V,
            f += r * K,
            d += r * B,
            g += r * F,
            v += r * Z,
            y += r * J,
            m += r * W,
            _ += r * G,
            w += r * Q,
            o += (r = t[1]) * L,
            a += r * z,
            c += r * M,
            h += r * k,
            l += r * $,
            u += r * U,
            p += r * H,
            f += r * V,
            d += r * K,
            g += r * B,
            v += r * F,
            y += r * Z,
            m += r * J,
            _ += r * W,
            w += r * G,
            b += r * Q,
            a += (r = t[2]) * L,
            c += r * z,
            h += r * M,
            l += r * k,
            u += r * $,
            p += r * U,
            f += r * H,
            d += r * V,
            g += r * K,
            v += r * B,
            y += r * F,
            m += r * Z,
            _ += r * J,
            w += r * W,
            b += r * G,
            E += r * Q,
            c += (r = t[3]) * L,
            h += r * z,
            l += r * M,
            u += r * k,
            p += r * $,
            f += r * U,
            d += r * H,
            g += r * V,
            v += r * K,
            y += r * B,
            m += r * F,
            _ += r * Z,
            w += r * J,
            b += r * W,
            E += r * G,
            I += r * Q,
            h += (r = t[4]) * L,
            l += r * z,
            u += r * M,
            p += r * k,
            f += r * $,
            d += r * U,
            g += r * H,
            v += r * V,
            y += r * K,
            m += r * B,
            _ += r * F,
            w += r * Z,
            b += r * J,
            E += r * W,
            I += r * G,
            P += r * Q,
            l += (r = t[5]) * L,
            u += r * z,
            p += r * M,
            f += r * k,
            d += r * $,
            g += r * U,
            v += r * H,
            y += r * V,
            m += r * K,
            _ += r * B,
            w += r * F,
            b += r * Z,
            E += r * J,
            I += r * W,
            P += r * G,
            S += r * Q,
            u += (r = t[6]) * L,
            p += r * z,
            f += r * M,
            d += r * k,
            g += r * $,
            v += r * U,
            y += r * H,
            m += r * V,
            _ += r * K,
            w += r * B,
            b += r * F,
            E += r * Z,
            I += r * J,
            P += r * W,
            S += r * G,
            O += r * Q,
            p += (r = t[7]) * L,
            f += r * z,
            d += r * M,
            g += r * k,
            v += r * $,
            y += r * U,
            m += r * H,
            _ += r * V,
            w += r * K,
            b += r * B,
            E += r * F,
            I += r * Z,
            P += r * J,
            S += r * W,
            O += r * G,
            R += r * Q,
            f += (r = t[8]) * L,
            d += r * z,
            g += r * M,
            v += r * k,
            y += r * $,
            m += r * U,
            _ += r * H,
            w += r * V,
            b += r * K,
            E += r * B,
            I += r * F,
            P += r * Z,
            S += r * J,
            O += r * W,
            R += r * G,
            x += r * Q,
            d += (r = t[9]) * L,
            g += r * z,
            v += r * M,
            y += r * k,
            m += r * $,
            _ += r * U,
            w += r * H,
            b += r * V,
            E += r * K,
            I += r * B,
            P += r * F,
            S += r * Z,
            O += r * J,
            R += r * W,
            x += r * G,
            C += r * Q,
            g += (r = t[10]) * L,
            v += r * z,
            y += r * M,
            m += r * k,
            _ += r * $,
            w += r * U,
            b += r * H,
            E += r * V,
            I += r * K,
            P += r * B,
            S += r * F,
            O += r * Z,
            R += r * J,
            x += r * W,
            C += r * G,
            A += r * Q,
            v += (r = t[11]) * L,
            y += r * z,
            m += r * M,
            _ += r * k,
            w += r * $,
            b += r * U,
            E += r * H,
            I += r * V,
            P += r * K,
            S += r * B,
            O += r * F,
            R += r * Z,
            x += r * J,
            C += r * W,
            A += r * G,
            N += r * Q,
            y += (r = t[12]) * L,
            m += r * z,
            _ += r * M,
            w += r * k,
            b += r * $,
            E += r * U,
            I += r * H,
            P += r * V,
            S += r * K,
            O += r * B,
            R += r * F,
            x += r * Z,
            C += r * J,
            A += r * W,
            N += r * G,
            T += r * Q,
            m += (r = t[13]) * L,
            _ += r * z,
            w += r * M,
            b += r * k,
            E += r * $,
            I += r * U,
            P += r * H,
            S += r * V,
            O += r * K,
            R += r * B,
            x += r * F,
            C += r * Z,
            A += r * J,
            N += r * W,
            T += r * G,
            q += r * Q,
            _ += (r = t[14]) * L,
            w += r * z,
            b += r * M,
            E += r * k,
            I += r * $,
            P += r * U,
            S += r * H,
            O += r * V,
            R += r * K,
            x += r * B,
            C += r * F,
            A += r * Z,
            N += r * J,
            T += r * W,
            q += r * G,
            j += r * Q,
            w += (r = t[15]) * L,
            b += r * z,
            E += r * M,
            I += r * k,
            P += r * $,
            S += r * U,
            O += r * H,
            R += r * V,
            x += r * K,
            C += r * B,
            A += r * F,
            N += r * Z,
            T += r * J,
            q += r * W,
            j += r * G,
            D += r * Q,
            s += 38 * b,
            o += 38 * E,
            a += 38 * I,
            c += 38 * P,
            h += 38 * S,
            l += 38 * O,
            u += 38 * R,
            p += 38 * x,
            f += 38 * C,
            d += 38 * A,
            g += 38 * N,
            v += 38 * T,
            y += 38 * q,
            m += 38 * j,
            _ += 38 * D,
            n = Math.floor((r = s + (n = 1) + 65535) / 65536),
            s = r - 65536 * n,
            n = Math.floor((r = o + n + 65535) / 65536),
            o = r - 65536 * n,
            n = Math.floor((r = a + n + 65535) / 65536),
            a = r - 65536 * n,
            n = Math.floor((r = c + n + 65535) / 65536),
            c = r - 65536 * n,
            n = Math.floor((r = h + n + 65535) / 65536),
            h = r - 65536 * n,
            n = Math.floor((r = l + n + 65535) / 65536),
            l = r - 65536 * n,
            n = Math.floor((r = u + n + 65535) / 65536),
            u = r - 65536 * n,
            n = Math.floor((r = p + n + 65535) / 65536),
            p = r - 65536 * n,
            n = Math.floor((r = f + n + 65535) / 65536),
            f = r - 65536 * n,
            n = Math.floor((r = d + n + 65535) / 65536),
            d = r - 65536 * n,
            n = Math.floor((r = g + n + 65535) / 65536),
            g = r - 65536 * n,
            n = Math.floor((r = v + n + 65535) / 65536),
            v = r - 65536 * n,
            n = Math.floor((r = y + n + 65535) / 65536),
            y = r - 65536 * n,
            n = Math.floor((r = m + n + 65535) / 65536),
            m = r - 65536 * n,
            n = Math.floor((r = _ + n + 65535) / 65536),
            _ = r - 65536 * n,
            n = Math.floor((r = w + n + 65535) / 65536),
            w = r - 65536 * n,
            s += n - 1 + 37 * (n - 1),
            n = Math.floor((r = s + (n = 1) + 65535) / 65536),
            s = r - 65536 * n,
            n = Math.floor((r = o + n + 65535) / 65536),
            o = r - 65536 * n,
            n = Math.floor((r = a + n + 65535) / 65536),
            a = r - 65536 * n,
            n = Math.floor((r = c + n + 65535) / 65536),
            c = r - 65536 * n,
            n = Math.floor((r = h + n + 65535) / 65536),
            h = r - 65536 * n,
            n = Math.floor((r = l + n + 65535) / 65536),
            l = r - 65536 * n,
            n = Math.floor((r = u + n + 65535) / 65536),
            u = r - 65536 * n,
            n = Math.floor((r = p + n + 65535) / 65536),
            p = r - 65536 * n,
            n = Math.floor((r = f + n + 65535) / 65536),
            f = r - 65536 * n,
            n = Math.floor((r = d + n + 65535) / 65536),
            d = r - 65536 * n,
            n = Math.floor((r = g + n + 65535) / 65536),
            g = r - 65536 * n,
            n = Math.floor((r = v + n + 65535) / 65536),
            v = r - 65536 * n,
            n = Math.floor((r = y + n + 65535) / 65536),
            y = r - 65536 * n,
            n = Math.floor((r = m + n + 65535) / 65536),
            m = r - 65536 * n,
            n = Math.floor((r = _ + n + 65535) / 65536),
            _ = r - 65536 * n,
            n = Math.floor((r = w + n + 65535) / 65536),
            w = r - 65536 * n,
            s += n - 1 + 37 * (n - 1),
            e[0] = s,
            e[1] = o,
            e[2] = a,
            e[3] = c,
            e[4] = h,
            e[5] = l,
            e[6] = u,
            e[7] = p,
            e[8] = f,
            e[9] = d,
            e[10] = g,
            e[11] = v,
            e[12] = y,
            e[13] = m,
            e[14] = _,
            e[15] = w
        }
        function m(e, t) {
            let i = n()
              , r = n()
              , s = n()
              , o = n()
              , a = n()
              , h = n()
              , l = n()
              , u = n()
              , p = n();
            v(i, e[1], e[0]),
            v(p, t[1], t[0]),
            y(i, i, p),
            g(r, e[0], e[1]),
            g(p, t[0], t[1]),
            y(r, r, p),
            y(s, e[3], t[3]),
            y(s, s, c),
            y(o, e[2], t[2]),
            g(o, o, o),
            v(a, r, i),
            v(h, o, s),
            g(l, o, s),
            g(u, r, i),
            y(e[0], a, h),
            y(e[1], u, l),
            y(e[2], l, h),
            y(e[3], a, u)
        }
        function _(e, t, i) {
            for (let r = 0; r < 4; r++)
                f(e[r], t[r], i)
        }
        function w(e, t) {
            let i = n()
              , r = n()
              , s = n();
            (function(e, t) {
                let i;
                let r = n();
                for (i = 0; i < 16; i++)
                    r[i] = t[i];
                for (i = 253; i >= 0; i--)
                    y(r, r, r),
                    2 !== i && 4 !== i && y(r, r, t);
                for (i = 0; i < 16; i++)
                    e[i] = r[i]
            }
            )(s, t[2]),
            y(i, t[0], s),
            y(r, t[1], s),
            d(e, r),
            e[31] ^= function(e) {
                let t = new Uint8Array(32);
                return d(t, e),
                1 & t[0]
            }(i) << 7
        }
        function b(e, t) {
            let i = [n(), n(), n(), n()];
            u(i[0], h),
            u(i[1], l),
            u(i[2], a),
            y(i[3], h, l),
            function(e, t, i) {
                u(e[0], o),
                u(e[1], a),
                u(e[2], a),
                u(e[3], o);
                for (let r = 255; r >= 0; --r) {
                    let n = i[r / 8 | 0] >> (7 & r) & 1;
                    _(e, t, n),
                    m(t, e),
                    m(e, e),
                    _(e, t, n)
                }
            }(e, i, t)
        }
        t._w = function(e) {
            if (e.length !== t.aP)
                throw Error(`ed25519: seed must be ${t.aP} bytes`);
            let i = (0,
            r.hash)(e);
            i[0] &= 248,
            i[31] &= 127,
            i[31] |= 64;
            let s = new Uint8Array(32)
              , o = [n(), n(), n(), n()];
            b(o, i),
            w(s, o);
            let a = new Uint8Array(64);
            return a.set(e),
            a.set(s, 32),
            {
                publicKey: s,
                secretKey: a
            }
        }
        ;
        let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function I(e, t) {
            let i, r, n, s;
            for (r = 63; r >= 32; --r) {
                for (i = 0,
                n = r - 32,
                s = r - 12; n < s; ++n)
                    t[n] += i - 16 * t[r] * E[n - (r - 32)],
                    i = Math.floor((t[n] + 128) / 256),
                    t[n] -= 256 * i;
                t[n] += i,
                t[r] = 0
            }
            for (n = 0,
            i = 0; n < 32; n++)
                t[n] += i - (t[31] >> 4) * E[n],
                i = t[n] >> 8,
                t[n] &= 255;
            for (n = 0; n < 32; n++)
                t[n] -= i * E[n];
            for (r = 0; r < 32; r++)
                t[r + 1] += t[r] >> 8,
                e[r] = 255 & t[r]
        }
        function P(e) {
            let t = new Float64Array(64);
            for (let i = 0; i < 64; i++)
                t[i] = e[i];
            for (let t = 0; t < 64; t++)
                e[t] = 0;
            I(e, t)
        }
        t.Xx = function(e, t) {
            let i = new Float64Array(64)
              , s = [n(), n(), n(), n()]
              , o = (0,
            r.hash)(e.subarray(0, 32));
            o[0] &= 248,
            o[31] &= 127,
            o[31] |= 64;
            let a = new Uint8Array(64);
            a.set(o.subarray(32), 32);
            let c = new r.SHA512;
            c.update(a.subarray(32)),
            c.update(t);
            let h = c.digest();
            c.clean(),
            P(h),
            b(s, h),
            w(a, s),
            c.reset(),
            c.update(a.subarray(0, 32)),
            c.update(e.subarray(32)),
            c.update(t);
            let l = c.digest();
            P(l);
            for (let e = 0; e < 32; e++)
                i[e] = h[e];
            for (let e = 0; e < 32; e++)
                for (let t = 0; t < 32; t++)
                    i[e + t] += l[e] * o[t];
            return I(a.subarray(32), i),
            a
        }
    },
    46756: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(9437)
          , n = i(52887);
        t.DIGEST_LENGTH = 64,
        t.BLOCK_SIZE = 128;
        var s = function() {
            function e() {
                this.digestLength = t.DIGEST_LENGTH,
                this.blockSize = t.BLOCK_SIZE,
                this._stateHi = new Int32Array(8),
                this._stateLo = new Int32Array(8),
                this._tempHi = new Int32Array(16),
                this._tempLo = new Int32Array(16),
                this._buffer = new Uint8Array(256),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this.reset()
            }
            return e.prototype._initState = function() {
                this._stateHi[0] = 1779033703,
                this._stateHi[1] = 3144134277,
                this._stateHi[2] = 1013904242,
                this._stateHi[3] = 2773480762,
                this._stateHi[4] = 1359893119,
                this._stateHi[5] = 2600822924,
                this._stateHi[6] = 528734635,
                this._stateHi[7] = 1541459225,
                this._stateLo[0] = 4089235720,
                this._stateLo[1] = 2227873595,
                this._stateLo[2] = 4271175723,
                this._stateLo[3] = 1595750129,
                this._stateLo[4] = 2917565137,
                this._stateLo[5] = 725511199,
                this._stateLo[6] = 4215389547,
                this._stateLo[7] = 327033209
            }
            ,
            e.prototype.reset = function() {
                return this._initState(),
                this._bufferLength = 0,
                this._bytesHashed = 0,
                this._finished = !1,
                this
            }
            ,
            e.prototype.clean = function() {
                n.wipe(this._buffer),
                n.wipe(this._tempHi),
                n.wipe(this._tempLo),
                this.reset()
            }
            ,
            e.prototype.update = function(e, i) {
                if (void 0 === i && (i = e.length),
                this._finished)
                    throw Error("SHA512: can't update because hash was finished.");
                var r = 0;
                if (this._bytesHashed += i,
                this._bufferLength > 0) {
                    for (; this._bufferLength < t.BLOCK_SIZE && i > 0; )
                        this._buffer[this._bufferLength++] = e[r++],
                        i--;
                    this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                    this._bufferLength = 0)
                }
                for (i >= this.blockSize && (r = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, r, i),
                i %= this.blockSize); i > 0; )
                    this._buffer[this._bufferLength++] = e[r++],
                    i--;
                return this
            }
            ,
            e.prototype.finish = function(e) {
                if (!this._finished) {
                    var t = this._bytesHashed
                      , i = this._bufferLength
                      , n = t % 128 < 112 ? 128 : 256;
                    this._buffer[i] = 128;
                    for (var s = i + 1; s < n - 8; s++)
                        this._buffer[s] = 0;
                    r.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8),
                    r.writeUint32BE(t << 3, this._buffer, n - 4),
                    a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n),
                    this._finished = !0
                }
                for (var s = 0; s < this.digestLength / 8; s++)
                    r.writeUint32BE(this._stateHi[s], e, 8 * s),
                    r.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                return this
            }
            ,
            e.prototype.digest = function() {
                var e = new Uint8Array(this.digestLength);
                return this.finish(e),
                e
            }
            ,
            e.prototype.saveState = function() {
                if (this._finished)
                    throw Error("SHA256: cannot save finished state");
                return {
                    stateHi: new Int32Array(this._stateHi),
                    stateLo: new Int32Array(this._stateLo),
                    buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                    bufferLength: this._bufferLength,
                    bytesHashed: this._bytesHashed
                }
            }
            ,
            e.prototype.restoreState = function(e) {
                return this._stateHi.set(e.stateHi),
                this._stateLo.set(e.stateLo),
                this._bufferLength = e.bufferLength,
                e.buffer && this._buffer.set(e.buffer),
                this._bytesHashed = e.bytesHashed,
                this._finished = !1,
                this
            }
            ,
            e.prototype.cleanSavedState = function(e) {
                n.wipe(e.stateHi),
                n.wipe(e.stateLo),
                e.buffer && n.wipe(e.buffer),
                e.bufferLength = 0,
                e.bytesHashed = 0
            }
            ,
            e
        }();
        t.SHA512 = s;
        var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
        function a(e, t, i, n, s, a, c) {
            for (var h, l, u, p, f, d, g, v, y = i[0], m = i[1], _ = i[2], w = i[3], b = i[4], E = i[5], I = i[6], P = i[7], S = n[0], O = n[1], R = n[2], x = n[3], C = n[4], A = n[5], N = n[6], T = n[7]; c >= 128; ) {
                for (var q = 0; q < 16; q++) {
                    var j = 8 * q + a;
                    e[q] = r.readUint32BE(s, j),
                    t[q] = r.readUint32BE(s, j + 4)
                }
                for (var q = 0; q < 80; q++) {
                    var D = y
                      , L = m
                      , z = _
                      , M = w
                      , k = b
                      , $ = E
                      , U = I
                      , H = P
                      , V = S
                      , K = O
                      , B = R
                      , F = x
                      , Z = C
                      , J = A
                      , W = N
                      , G = T;
                    if (h = P,
                    f = 65535 & (l = T),
                    d = l >>> 16,
                    g = 65535 & h,
                    v = h >>> 16,
                    h = (b >>> 14 | C << 18) ^ (b >>> 18 | C << 14) ^ (C >>> 9 | b << 23),
                    f += 65535 & (l = (C >>> 14 | b << 18) ^ (C >>> 18 | b << 14) ^ (b >>> 9 | C << 23)),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    h = b & E ^ ~b & I,
                    f += 65535 & (l = C & A ^ ~C & N),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    h = o[2 * q],
                    f += 65535 & (l = o[2 * q + 1]),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    h = e[q % 16],
                    f += 65535 & (l = t[q % 16]),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    d += f >>> 16,
                    g += d >>> 16,
                    v += g >>> 16,
                    u = 65535 & g | v << 16,
                    p = 65535 & f | d << 16,
                    h = u,
                    f = 65535 & (l = p),
                    d = l >>> 16,
                    g = 65535 & h,
                    v = h >>> 16,
                    h = (y >>> 28 | S << 4) ^ (S >>> 2 | y << 30) ^ (S >>> 7 | y << 25),
                    f += 65535 & (l = (S >>> 28 | y << 4) ^ (y >>> 2 | S << 30) ^ (y >>> 7 | S << 25)),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    h = y & m ^ y & _ ^ m & _,
                    f += 65535 & (l = S & O ^ S & R ^ O & R),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    d += f >>> 16,
                    g += d >>> 16,
                    v += g >>> 16,
                    H = 65535 & g | v << 16,
                    G = 65535 & f | d << 16,
                    h = M,
                    f = 65535 & (l = F),
                    d = l >>> 16,
                    g = 65535 & h,
                    v = h >>> 16,
                    h = u,
                    f += 65535 & (l = p),
                    d += l >>> 16,
                    g += 65535 & h,
                    v += h >>> 16,
                    d += f >>> 16,
                    g += d >>> 16,
                    v += g >>> 16,
                    M = 65535 & g | v << 16,
                    F = 65535 & f | d << 16,
                    m = D,
                    _ = L,
                    w = z,
                    b = M,
                    E = k,
                    I = $,
                    P = U,
                    y = H,
                    O = V,
                    R = K,
                    x = B,
                    C = F,
                    A = Z,
                    N = J,
                    T = W,
                    S = G,
                    q % 16 == 15)
                        for (var j = 0; j < 16; j++)
                            h = e[j],
                            f = 65535 & (l = t[j]),
                            d = l >>> 16,
                            g = 65535 & h,
                            v = h >>> 16,
                            h = e[(j + 9) % 16],
                            f += 65535 & (l = t[(j + 9) % 16]),
                            d += l >>> 16,
                            g += 65535 & h,
                            v += h >>> 16,
                            h = ((u = e[(j + 1) % 16]) >>> 1 | (p = t[(j + 1) % 16]) << 31) ^ (u >>> 8 | p << 24) ^ u >>> 7,
                            f += 65535 & (l = (p >>> 1 | u << 31) ^ (p >>> 8 | u << 24) ^ (p >>> 7 | u << 25)),
                            d += l >>> 16,
                            g += 65535 & h,
                            v += h >>> 16,
                            h = ((u = e[(j + 14) % 16]) >>> 19 | (p = t[(j + 14) % 16]) << 13) ^ (p >>> 29 | u << 3) ^ u >>> 6,
                            f += 65535 & (l = (p >>> 19 | u << 13) ^ (u >>> 29 | p << 3) ^ (p >>> 6 | u << 26)),
                            d += l >>> 16,
                            g += 65535 & h,
                            v += h >>> 16,
                            d += f >>> 16,
                            g += d >>> 16,
                            v += g >>> 16,
                            e[j] = 65535 & g | v << 16,
                            t[j] = 65535 & f | d << 16
                }
                h = y,
                f = 65535 & (l = S),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[0],
                f += 65535 & (l = n[0]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[0] = y = 65535 & g | v << 16,
                n[0] = S = 65535 & f | d << 16,
                h = m,
                f = 65535 & (l = O),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[1],
                f += 65535 & (l = n[1]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[1] = m = 65535 & g | v << 16,
                n[1] = O = 65535 & f | d << 16,
                h = _,
                f = 65535 & (l = R),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[2],
                f += 65535 & (l = n[2]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[2] = _ = 65535 & g | v << 16,
                n[2] = R = 65535 & f | d << 16,
                h = w,
                f = 65535 & (l = x),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[3],
                f += 65535 & (l = n[3]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[3] = w = 65535 & g | v << 16,
                n[3] = x = 65535 & f | d << 16,
                h = b,
                f = 65535 & (l = C),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[4],
                f += 65535 & (l = n[4]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[4] = b = 65535 & g | v << 16,
                n[4] = C = 65535 & f | d << 16,
                h = E,
                f = 65535 & (l = A),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[5],
                f += 65535 & (l = n[5]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[5] = E = 65535 & g | v << 16,
                n[5] = A = 65535 & f | d << 16,
                h = I,
                f = 65535 & (l = N),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[6],
                f += 65535 & (l = n[6]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[6] = I = 65535 & g | v << 16,
                n[6] = N = 65535 & f | d << 16,
                h = P,
                f = 65535 & (l = T),
                d = l >>> 16,
                g = 65535 & h,
                v = h >>> 16,
                h = i[7],
                f += 65535 & (l = n[7]),
                d += l >>> 16,
                g += 65535 & h,
                v += h >>> 16,
                d += f >>> 16,
                g += d >>> 16,
                v += g >>> 16,
                i[7] = P = 65535 & g | v << 16,
                n[7] = T = 65535 & f | d << 16,
                a += 128,
                c -= 128
            }
            return a
        }
        t.hash = function(e) {
            var t = new s;
            t.update(e);
            var i = t.digest();
            return t.clean(),
            i
        }
    },
    19897: function(e, t, i) {
        "use strict";
        i.d(t, {
            EthereumProvider: function() {
                return rf
            },
            OPTIONAL_EVENTS: function() {
                return re
            },
            OPTIONAL_METHODS: function() {
                return i7
            }
        });
        var r = i(22699)
          , n = i.n(r)
          , s = i(48623)
          , o = i(68385)
          , a = i(67660)
          , c = i(52500)
          , h = i(5774);
        class l extends h.q {
            constructor(e) {
                super(),
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class u extends h.q {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t,
                this.records = new Map
            }
        }
        class p {
            constructor(e, t) {
                this.logger = e,
                this.core = t
            }
        }
        class f extends h.q {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class d extends h.q {
            constructor(e) {
                super()
            }
        }
        class g {
            constructor(e, t, i, r) {
                this.core = e,
                this.logger = t,
                this.name = i
            }
        }
        class v extends h.q {
            constructor(e, t) {
                super(),
                this.relayer = e,
                this.logger = t
            }
        }
        class y extends h.q {
            constructor(e, t) {
                super(),
                this.core = e,
                this.logger = t
            }
        }
        class m {
            constructor(e, t) {
                this.projectId = e,
                this.logger = t
            }
        }
        class _ {
            constructor(e) {
                this.opts = e,
                this.protocol = "wc",
                this.version = 2
            }
        }
        class w {
            constructor(e) {
                this.client = e
            }
        }
        var b = i(42325)
          , E = i(27728)
          , I = i(81293)
          , P = i(10666);
        let S = "base64url"
          , O = "base58btc";
        var R = i(31080)
          , x = i(53832)
          , C = i(28807);
        function A(e) {
            return (0,
            x.B)((0,
            C.m)((0,
            b.u)(e), "utf8"), S)
        }
        function N(e) {
            let t = (0,
            C.m)("K36", O)
              , i = "z" + (0,
            x.B)((0,
            R.z)([t, e]), O);
            return ["did", "key", i].join(":")
        }
        function T(e=(0,
        I.randomBytes)(32)) {
            return E._w(e)
        }
        async function q(e, t, i, r, n=(0,
        P.fromMiliseconds)(Date.now())) {
            var s, o, a;
            let c = {
                alg: "EdDSA",
                typ: "JWT"
            }
              , h = N(r.publicKey)
              , l = {
                iss: h,
                sub: e,
                aud: t,
                iat: n,
                exp: n + i
            }
              , u = (s = {
                header: c,
                payload: l
            },
            (0,
            C.m)([A(s.header), A(s.payload)].join("."), "utf8"))
              , p = E.Xx(r.secretKey, u);
            return [A((o = {
                header: c,
                payload: l,
                signature: p
            }).header), A(o.payload), (a = o.signature,
            (0,
            x.B)(a, S))].join(".")
        }
        i(3947);
        var j = i(74013)
          , D = i(23427)
          , L = i(55494);
        let z = ()=>"undefined" != typeof WebSocket || void 0 !== i.g && void 0 !== i.g.WebSocket || "undefined" != typeof window && void 0 !== window.WebSocket || "undefined" != typeof self && void 0 !== self.WebSocket
          , M = e=>e.split("?")[0]
          , k = "undefined" != typeof WebSocket ? WebSocket : void 0 !== i.g && void 0 !== i.g.WebSocket ? i.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : "undefined" != typeof self && void 0 !== self.WebSocket ? self.WebSocket : i(37031);
        var $ = class {
            constructor(e) {
                if (this.url = e,
                this.events = new r.EventEmitter,
                this.registering = !1,
                !(0,
                L.isWsUrl)(e))
                    throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                this.url = e
            }
            get connected() {
                return void 0 !== this.socket
            }
            get connecting() {
                return this.registering
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async open(e=this.url) {
                await this.register(e)
            }
            async close() {
                return new Promise((e,t)=>{
                    if (void 0 === this.socket) {
                        t(Error("Connection already closed"));
                        return
                    }
                    this.socket.onclose = t=>{
                        this.onClose(t),
                        e()
                    }
                    ,
                    this.socket.close()
                }
                )
            }
            async send(e, t) {
                void 0 === this.socket && (this.socket = await this.register());
                try {
                    this.socket.send((0,
                    b.u)(e))
                } catch (t) {
                    this.onError(e.id, t)
                }
            }
            register(e=this.url) {
                if (!(0,
                L.isWsUrl)(e))
                    throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                if (this.registering) {
                    let e = this.events.getMaxListeners();
                    return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1),
                    new Promise((e,t)=>{
                        this.events.once("register_error", e=>{
                            this.resetMaxListeners(),
                            t(e)
                        }
                        ),
                        this.events.once("open", ()=>{
                            if (this.resetMaxListeners(),
                            void 0 === this.socket)
                                return t(Error("WebSocket connection is missing or invalid"));
                            e(this.socket)
                        }
                        )
                    }
                    )
                }
                return this.url = e,
                this.registering = !0,
                new Promise((t,i)=>{
                    let r = (0,
                    L.isReactNative)() ? void 0 : {
                        rejectUnauthorized: !(0,
                        L.isLocalhostUrl)(e)
                    }
                      , n = new k(e,[],r);
                    z() ? n.onerror = e=>{
                        i(this.emitError(e.error))
                    }
                    : n.on("error", e=>{
                        i(this.emitError(e))
                    }
                    ),
                    n.onopen = ()=>{
                        this.onOpen(n),
                        t(n)
                    }
                }
                )
            }
            onOpen(e) {
                e.onmessage = e=>this.onPayload(e),
                e.onclose = e=>this.onClose(e),
                this.socket = e,
                this.registering = !1,
                this.events.emit("open")
            }
            onClose(e) {
                this.socket = void 0,
                this.registering = !1,
                this.events.emit("close", e)
            }
            onPayload(e) {
                if (void 0 === e.data)
                    return;
                let t = "string" == typeof e.data ? (0,
                b.D)(e.data) : e.data;
                this.events.emit("payload", t)
            }
            onError(e, t) {
                let i = this.parseError(t)
                  , r = i.message || i.toString()
                  , n = (0,
                L.formatJsonRpcError)(e, r);
                this.events.emit("payload", n)
            }
            parseError(e, t=this.url) {
                return (0,
                L.parseConnectionError)(e, M(t), "WS")
            }
            resetMaxListeners() {
                this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
            }
            emitError(e) {
                let t = this.parseError(Error((null == e ? void 0 : e.message) || `WebSocket connection failed for host: ${M(this.url)}`));
                return this.events.emit("register_error", t),
                t
            }
        }
          , U = i(33958)
          , H = i.n(U)
          , V = i(34406)
          , K = function(e, t) {
            if (e.length >= 255)
                throw TypeError("Alphabet too long");
            for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
                i[r] = 255;
            for (var n = 0; n < e.length; n++) {
                var s = e.charAt(n)
                  , o = s.charCodeAt(0);
                if (255 !== i[o])
                    throw TypeError(s + " is ambiguous");
                i[o] = n
            }
            var a = e.length
              , c = e.charAt(0)
              , h = Math.log(a) / Math.log(256)
              , l = Math.log(256) / Math.log(a);
            function u(e) {
                if ("string" != typeof e)
                    throw TypeError("Expected String");
                if (0 === e.length)
                    return new Uint8Array;
                var t = 0;
                if (" " !== e[0]) {
                    for (var r = 0, n = 0; e[t] === c; )
                        r++,
                        t++;
                    for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t]; ) {
                        var l = i[e.charCodeAt(t)];
                        if (255 === l)
                            return;
                        for (var u = 0, p = s - 1; (0 !== l || u < n) && -1 !== p; p--,
                        u++)
                            l += a * o[p] >>> 0,
                            o[p] = l % 256 >>> 0,
                            l = l / 256 >>> 0;
                        if (0 !== l)
                            throw Error("Non-zero carry");
                        n = u,
                        t++
                    }
                    if (" " !== e[t]) {
                        for (var f = s - n; f !== s && 0 === o[f]; )
                            f++;
                        for (var d = new Uint8Array(r + (s - f)), g = r; f !== s; )
                            d[g++] = o[f++];
                        return d
                    }
                }
            }
            return {
                encode: function(t) {
                    if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))),
                    !(t instanceof Uint8Array))
                        throw TypeError("Expected Uint8Array");
                    if (0 === t.length)
                        return "";
                    for (var i = 0, r = 0, n = 0, s = t.length; n !== s && 0 === t[n]; )
                        n++,
                        i++;
                    for (var o = (s - n) * l + 1 >>> 0, h = new Uint8Array(o); n !== s; ) {
                        for (var u = t[n], p = 0, f = o - 1; (0 !== u || p < r) && -1 !== f; f--,
                        p++)
                            u += 256 * h[f] >>> 0,
                            h[f] = u % a >>> 0,
                            u = u / a >>> 0;
                        if (0 !== u)
                            throw Error("Non-zero carry");
                        r = p,
                        n++
                    }
                    for (var d = o - r; d !== o && 0 === h[d]; )
                        d++;
                    for (var g = c.repeat(i); d < o; ++d)
                        g += e.charAt(h[d]);
                    return g
                },
                decodeUnsafe: u,
                decode: function(e) {
                    var i = u(e);
                    if (i)
                        return i;
                    throw Error(`Non-${t} character`)
                }
            }
        };
        let B = e=>{
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
                return e;
            if (e instanceof ArrayBuffer)
                return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
                return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
            throw Error("Unknown type, must be binary type")
        }
          , F = e=>new TextEncoder().encode(e)
          , Z = e=>new TextDecoder().decode(e);
        class J {
            constructor(e, t, i) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = i
            }
            encode(e) {
                if (e instanceof Uint8Array)
                    return `${this.prefix}${this.baseEncode(e)}`;
                throw Error("Unknown type, must be binary type")
            }
        }
        class W {
            constructor(e, t, i) {
                if (this.name = e,
                this.prefix = t,
                void 0 === t.codePointAt(0))
                    throw Error("Invalid prefix character");
                this.prefixCodePoint = t.codePointAt(0),
                this.baseDecode = i
            }
            decode(e) {
                if ("string" == typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                    return this.baseDecode(e.slice(this.prefix.length))
                }
                throw Error("Can only multibase decode strings")
            }
            or(e) {
                return Q(this, e)
            }
        }
        class G {
            constructor(e) {
                this.decoders = e
            }
            or(e) {
                return Q(this, e)
            }
            decode(e) {
                let t = e[0]
                  , i = this.decoders[t];
                if (i)
                    return i.decode(e);
                throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
            }
        }
        let Q = (e,t)=>new G({
            ...e.decoders || {
                [e.prefix]: e
            },
            ...t.decoders || {
                [t.prefix]: t
            }
        });
        class Y {
            constructor(e, t, i, r) {
                this.name = e,
                this.prefix = t,
                this.baseEncode = i,
                this.baseDecode = r,
                this.encoder = new J(e,t,i),
                this.decoder = new W(e,t,r)
            }
            encode(e) {
                return this.encoder.encode(e)
            }
            decode(e) {
                return this.decoder.decode(e)
            }
        }
        let X = ({name: e, prefix: t, encode: i, decode: r})=>new Y(e,t,i,r)
          , ee = ({prefix: e, name: t, alphabet: i})=>{
            let {encode: r, decode: n} = K(i, t);
            return X({
                prefix: e,
                name: t,
                encode: r,
                decode: e=>B(n(e))
            })
        }
          , et = (e,t,i,r)=>{
            let n = {};
            for (let e = 0; e < t.length; ++e)
                n[t[e]] = e;
            let s = e.length;
            for (; "=" === e[s - 1]; )
                --s;
            let o = new Uint8Array(s * i / 8 | 0)
              , a = 0
              , c = 0
              , h = 0;
            for (let t = 0; t < s; ++t) {
                let s = n[e[t]];
                if (void 0 === s)
                    throw SyntaxError(`Non-${r} character`);
                c = c << i | s,
                (a += i) >= 8 && (a -= 8,
                o[h++] = 255 & c >> a)
            }
            if (a >= i || 255 & c << 8 - a)
                throw SyntaxError("Unexpected end of data");
            return o
        }
          , ei = (e,t,i)=>{
            let r = "=" === t[t.length - 1]
              , n = (1 << i) - 1
              , s = ""
              , o = 0
              , a = 0;
            for (let r = 0; r < e.length; ++r)
                for (a = a << 8 | e[r],
                o += 8; o > i; )
                    o -= i,
                    s += t[n & a >> o];
            if (o && (s += t[n & a << i - o]),
            r)
                for (; s.length * i & 7; )
                    s += "=";
            return s
        }
          , er = ({name: e, prefix: t, bitsPerChar: i, alphabet: r})=>X({
            prefix: t,
            name: e,
            encode: e=>ei(e, r, i),
            decode: t=>et(t, r, i, e)
        })
          , en = X({
            prefix: "\x00",
            name: "identity",
            encode: e=>Z(e),
            decode: e=>F(e)
        });
        var es = Object.freeze({
            __proto__: null,
            identity: en
        });
        let eo = er({
            prefix: "0",
            name: "base2",
            alphabet: "01",
            bitsPerChar: 1
        });
        var ea = Object.freeze({
            __proto__: null,
            base2: eo
        });
        let ec = er({
            prefix: "7",
            name: "base8",
            alphabet: "01234567",
            bitsPerChar: 3
        });
        var eh = Object.freeze({
            __proto__: null,
            base8: ec
        });
        let el = ee({
            prefix: "9",
            name: "base10",
            alphabet: "0123456789"
        });
        var eu = Object.freeze({
            __proto__: null,
            base10: el
        });
        let ep = er({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4
        })
          , ef = er({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4
        });
        var ed = Object.freeze({
            __proto__: null,
            base16: ep,
            base16upper: ef
        });
        let eg = er({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5
        })
          , ev = er({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5
        })
          , ey = er({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5
        })
          , em = er({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5
        })
          , e_ = er({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5
        })
          , ew = er({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5
        })
          , eb = er({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5
        })
          , eE = er({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5
        })
          , eI = er({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5
        });
        var eP = Object.freeze({
            __proto__: null,
            base32: eg,
            base32upper: ev,
            base32pad: ey,
            base32padupper: em,
            base32hex: e_,
            base32hexupper: ew,
            base32hexpad: eb,
            base32hexpadupper: eE,
            base32z: eI
        });
        let eS = ee({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
        })
          , eO = ee({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        });
        var eR = Object.freeze({
            __proto__: null,
            base36: eS,
            base36upper: eO
        });
        let ex = ee({
            name: "base58btc",
            prefix: "z",
            alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
        })
          , eC = ee({
            name: "base58flickr",
            prefix: "Z",
            alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
        });
        var eA = Object.freeze({
            __proto__: null,
            base58btc: ex,
            base58flickr: eC
        });
        let eN = er({
            prefix: "m",
            name: "base64",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6
        })
          , eT = er({
            prefix: "M",
            name: "base64pad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6
        })
          , eq = er({
            prefix: "u",
            name: "base64url",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6
        })
          , ej = er({
            prefix: "U",
            name: "base64urlpad",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6
        });
        var eD = Object.freeze({
            __proto__: null,
            base64: eN,
            base64pad: eT,
            base64url: eq,
            base64urlpad: ej
        });
        let eL = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42")
          , ez = eL.reduce((e,t,i)=>(e[i] = t,
        e), [])
          , eM = eL.reduce((e,t,i)=>(e[t.codePointAt(0)] = i,
        e), [])
          , ek = X({
            prefix: "\uD83D\uDE80",
            name: "base256emoji",
            encode: function(e) {
                return e.reduce((e,t)=>e += ez[t], "")
            },
            decode: function(e) {
                let t = [];
                for (let i of e) {
                    let e = eM[i.codePointAt(0)];
                    if (void 0 === e)
                        throw Error(`Non-base256emoji character: ${i}`);
                    t.push(e)
                }
                return new Uint8Array(t)
            }
        });
        var e$ = Object.freeze({
            __proto__: null,
            base256emoji: ek
        });
        function eU(e, t, i) {
            t = t || [],
            i = i || 0;
            for (var r = i; e >= 2147483648; )
                t[i++] = 255 & e | 128,
                e /= 128;
            for (; -128 & e; )
                t[i++] = 255 & e | 128,
                e >>>= 7;
            return t[i] = 0 | e,
            eU.bytes = i - r + 1,
            t
        }
        function eH(e, t) {
            var i, r = 0, t = t || 0, n = 0, s = t, o = e.length;
            do {
                if (s >= o)
                    throw eH.bytes = 0,
                    RangeError("Could not decode varint");
                i = e[s++],
                r += n < 28 ? (127 & i) << n : (127 & i) * Math.pow(2, n),
                n += 7
            } while (i >= 128);
            return eH.bytes = s - t,
            r
        }
        var eV = {
            encode: eU,
            decode: eH,
            encodingLength: function(e) {
                return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
            }
        };
        let eK = (e,t,i=0)=>(eV.encode(e, t, i),
        t)
          , eB = e=>eV.encodingLength(e)
          , eF = (e,t)=>{
            let i = t.byteLength
              , r = eB(e)
              , n = r + eB(i)
              , s = new Uint8Array(n + i);
            return eK(e, s, 0),
            eK(i, s, r),
            s.set(t, n),
            new eZ(e,i,t,s)
        }
        ;
        class eZ {
            constructor(e, t, i, r) {
                this.code = e,
                this.size = t,
                this.digest = i,
                this.bytes = r
            }
        }
        let eJ = ({name: e, code: t, encode: i})=>new eW(e,t,i);
        class eW {
            constructor(e, t, i) {
                this.name = e,
                this.code = t,
                this.encode = i
            }
            digest(e) {
                if (e instanceof Uint8Array) {
                    let t = this.encode(e);
                    return t instanceof Uint8Array ? eF(this.code, t) : t.then(e=>eF(this.code, e))
                }
                throw Error("Unknown type, must be binary type")
            }
        }
        let eG = e=>async t=>new Uint8Array(await crypto.subtle.digest(e, t))
          , eQ = eJ({
            name: "sha2-256",
            code: 18,
            encode: eG("SHA-256")
        })
          , eY = eJ({
            name: "sha2-512",
            code: 19,
            encode: eG("SHA-512")
        });
        var eX = Object.freeze({
            __proto__: null,
            sha256: eQ,
            sha512: eY
        })
          , e0 = Object.freeze({
            __proto__: null,
            identity: {
                code: 0,
                name: "identity",
                encode: B,
                digest: e=>eF(0, B(e))
            }
        });
        new TextEncoder,
        new TextDecoder;
        let e1 = {
            ...es,
            ...ea,
            ...eh,
            ...eu,
            ...ed,
            ...eP,
            ...eR,
            ...eA,
            ...eD,
            ...e$
        };
        function e5(e) {
            return null != globalThis.Buffer ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e
        }
        function e6(e, t, i, r) {
            return {
                name: e,
                prefix: t,
                encoder: {
                    name: e,
                    prefix: t,
                    encode: i
                },
                decoder: {
                    decode: r
                }
            }
        }
        ({
            ...eX,
            ...e0
        });
        let e3 = e6("utf8", "u", e=>"u" + new TextDecoder("utf8").decode(e), e=>new TextEncoder().encode(e.substring(1)))
          , e2 = e6("ascii", "a", e=>{
            let t = "a";
            for (let i = 0; i < e.length; i++)
                t += String.fromCharCode(e[i]);
            return t
        }
        , e=>{
            e = e.substring(1);
            let t = function(e=0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? e5(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }(e.length);
            for (let i = 0; i < e.length; i++)
                t[i] = e.charCodeAt(i);
            return t
        }
        )
          , e4 = {
            utf8: e3,
            "utf-8": e3,
            hex: e1.base16,
            latin1: e2,
            ascii: e2,
            binary: e2,
            ...e1
        }
          , e8 = "core"
          , e7 = `wc@2:${e8}:`
          , e9 = {
            logger: "error"
        }
          , te = {
            database: ":memory:"
        }
          , tt = "client_ed25519_seed"
          , ti = P.ONE_DAY
          , tr = P.SIX_HOURS
          , tn = "wss://relay.walletconnect.com"
          , ts = "wss://relay.walletconnect.org"
          , to = {
            message: "relayer_message",
            message_ack: "relayer_message_ack",
            connect: "relayer_connect",
            disconnect: "relayer_disconnect",
            error: "relayer_error",
            connection_stalled: "relayer_connection_stalled",
            publish: "relayer_publish"
        }
          , ta = {
            payload: "payload",
            connect: "connect",
            disconnect: "disconnect",
            error: "error"
        }
          , tc = P.ONE_SECOND
          , th = {
            created: "subscription_created",
            deleted: "subscription_deleted",
            sync: "subscription_sync",
            resubscribed: "subscription_resubscribed"
        }
          , tl = 1e3 * P.FIVE_SECONDS
          , tu = {
            wc_pairingDelete: {
                req: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1e3
                },
                res: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1001
                }
            },
            wc_pairingPing: {
                req: {
                    ttl: P.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1002
                },
                res: {
                    ttl: P.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1003
                }
            },
            unregistered_method: {
                req: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 0
                },
                res: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 0
                }
            }
        }
          , tp = {
            create: "pairing_create",
            expire: "pairing_expire",
            delete: "pairing_delete",
            ping: "pairing_ping"
        }
          , tf = {
            created: "history_created",
            updated: "history_updated",
            deleted: "history_deleted",
            sync: "history_sync"
        }
          , td = {
            created: "expirer_created",
            deleted: "expirer_deleted",
            expired: "expirer_expired",
            sync: "expirer_sync"
        }
          , tg = "verify-api"
          , tv = "https://verify.walletconnect.com"
          , ty = "https://verify.walletconnect.org";
        class tm {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.keychain = new Map,
                this.name = "keychain",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = e7,
                this.init = async()=>{
                    if (!this.initialized) {
                        let e = await this.getKeyChain();
                        "u" > typeof e && (this.keychain = e),
                        this.initialized = !0
                    }
                }
                ,
                this.has = e=>(this.isInitialized(),
                this.keychain.has(e)),
                this.set = async(e,t)=>{
                    this.isInitialized(),
                    this.keychain.set(e, t),
                    await this.persist()
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    let t = this.keychain.get(e);
                    if (typeof t > "u") {
                        let {message: t} = (0,
                        s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.keychain.delete(e),
                    await this.persist()
                }
                ,
                this.core = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + "//" + this.name
            }
            async setKeyChain(e) {
                await this.core.storage.setItem(this.storageKey, (0,
                s.KC)(e))
            }
            async getKeyChain() {
                let e = await this.core.storage.getItem(this.storageKey);
                return "u" > typeof e ? (0,
                s.IP)(e) : void 0
            }
            async persist() {
                await this.setKeyChain(this.keychain)
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
        }
        class t_ {
            constructor(e, t, i) {
                this.core = e,
                this.logger = t,
                this.name = "crypto",
                this.initialized = !1,
                this.init = async()=>{
                    this.initialized || (await this.keychain.init(),
                    this.initialized = !0)
                }
                ,
                this.hasKeys = e=>(this.isInitialized(),
                this.keychain.has(e)),
                this.getClientId = async()=>{
                    this.isInitialized();
                    let e = await this.getClientSeed()
                      , t = T(e);
                    return N(t.publicKey)
                }
                ,
                this.generateKeyPair = ()=>{
                    this.isInitialized();
                    let e = (0,
                    s.Au)();
                    return this.setPrivateKey(e.publicKey, e.privateKey)
                }
                ,
                this.signJWT = async e=>{
                    this.isInitialized();
                    let t = await this.getClientSeed()
                      , i = T(t)
                      , r = (0,
                    s.jd)();
                    return await q(r, e, ti, i)
                }
                ,
                this.generateSharedKey = (e,t,i)=>{
                    this.isInitialized();
                    let r = this.getPrivateKey(e)
                      , n = (0,
                    s.m$)(r, t);
                    return this.setSymKey(n, i)
                }
                ,
                this.setSymKey = async(e,t)=>{
                    this.isInitialized();
                    let i = t || (0,
                    s.Ym)(e);
                    return await this.keychain.set(i, e),
                    i
                }
                ,
                this.deleteKeyPair = async e=>{
                    this.isInitialized(),
                    await this.keychain.del(e)
                }
                ,
                this.deleteSymKey = async e=>{
                    this.isInitialized(),
                    await this.keychain.del(e)
                }
                ,
                this.encode = async(e,t,i)=>{
                    this.isInitialized();
                    let r = (0,
                    s.EN)(i)
                      , n = (0,
                    b.u)(t);
                    if ((0,
                    s.Q8)(r)) {
                        let t = r.senderPublicKey
                          , i = r.receiverPublicKey;
                        e = await this.generateSharedKey(t, i)
                    }
                    let o = this.getSymKey(e)
                      , {type: a, senderPublicKey: c} = r;
                    return (0,
                    s.HI)({
                        type: a,
                        symKey: o,
                        message: n,
                        senderPublicKey: c
                    })
                }
                ,
                this.decode = async(e,t,i)=>{
                    this.isInitialized();
                    let r = (0,
                    s.Ll)(t, i);
                    if ((0,
                    s.Q8)(r)) {
                        let t = r.receiverPublicKey
                          , i = r.senderPublicKey;
                        e = await this.generateSharedKey(t, i)
                    }
                    try {
                        let i = this.getSymKey(e)
                          , r = (0,
                        s.pe)({
                            symKey: i,
                            encoded: t
                        });
                        return (0,
                        b.D)(r)
                    } catch (t) {
                        this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`),
                        this.logger.error(t)
                    }
                }
                ,
                this.getPayloadType = e=>{
                    let t = (0,
                    s.vB)(e);
                    return (0,
                    s.WG)(t.type)
                }
                ,
                this.getPayloadSenderPublicKey = e=>{
                    let t = (0,
                    s.vB)(e);
                    return t.senderPublicKey ? (0,
                    j.BB)(t.senderPublicKey, s.AW) : void 0
                }
                ,
                this.core = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.keychain = i || new tm(this.core,this.logger)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            async setPrivateKey(e, t) {
                return await this.keychain.set(e, t),
                e
            }
            getPrivateKey(e) {
                return this.keychain.get(e)
            }
            async getClientSeed() {
                let e = "";
                try {
                    e = this.keychain.get(tt)
                } catch {
                    e = (0,
                    s.jd)(),
                    await this.keychain.set(tt, e)
                }
                return function(e, t="utf8") {
                    let i = e4[t];
                    if (!i)
                        throw Error(`Unsupported encoding "${t}"`);
                    return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? e5(globalThis.Buffer.from(e, "utf-8")) : i.decoder.decode(`${i.prefix}${e}`)
                }(e, "base16")
            }
            getSymKey(e) {
                return this.keychain.get(e)
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
        }
        class tw extends p {
            constructor(e, t) {
                super(e, t),
                this.logger = e,
                this.core = t,
                this.messages = new Map,
                this.name = "messages",
                this.version = "0.3",
                this.initialized = !1,
                this.storagePrefix = e7,
                this.init = async()=>{
                    if (!this.initialized) {
                        this.logger.trace("Initialized");
                        try {
                            let e = await this.getRelayerMessages();
                            "u" > typeof e && (this.messages = e),
                            this.logger.debug(`Successfully Restored records for ${this.name}`),
                            this.logger.trace({
                                type: "method",
                                method: "restore",
                                size: this.messages.size
                            })
                        } catch (e) {
                            this.logger.debug(`Failed to Restore records for ${this.name}`),
                            this.logger.error(e)
                        } finally {
                            this.initialized = !0
                        }
                    }
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized();
                    let i = (0,
                    s.rj)(t)
                      , r = this.messages.get(e);
                    return typeof r > "u" && (r = {}),
                    "u" > typeof r[i] || (r[i] = t,
                    this.messages.set(e, r),
                    await this.persist()),
                    i
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    let t = this.messages.get(e);
                    return typeof t > "u" && (t = {}),
                    t
                }
                ,
                this.has = (e,t)=>{
                    this.isInitialized();
                    let i = this.get(e)
                      , r = (0,
                    s.rj)(t);
                    return "u" > typeof i[r]
                }
                ,
                this.del = async e=>{
                    this.isInitialized(),
                    this.messages.delete(e),
                    await this.persist()
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(e, this.name),
                this.core = t
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + "//" + this.name
            }
            async setRelayerMessages(e) {
                await this.core.storage.setItem(this.storageKey, (0,
                s.KC)(e))
            }
            async getRelayerMessages() {
                let e = await this.core.storage.getItem(this.storageKey);
                return "u" > typeof e ? (0,
                s.IP)(e) : void 0
            }
            async persist() {
                await this.setRelayerMessages(this.messages)
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
        }
        class tb extends f {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.events = new r.EventEmitter,
                this.name = "publisher",
                this.queue = new Map,
                this.publishTimeout = (0,
                P.toMiliseconds)(P.TEN_SECONDS),
                this.needsTransportRestart = !1,
                this.publish = async(e,t,i)=>{
                    var r;
                    this.logger.debug("Publishing Payload"),
                    this.logger.trace({
                        type: "method",
                        method: "publish",
                        params: {
                            topic: e,
                            message: t,
                            opts: i
                        }
                    });
                    try {
                        let n = i?.ttl || tr
                          , o = (0,
                        s._H)(i)
                          , a = i?.prompt || !1
                          , c = i?.tag || 0
                          , h = i?.id || (0,
                        L.getBigIntRpcId)().toString()
                          , l = {
                            topic: e,
                            message: t,
                            opts: {
                                ttl: n,
                                relay: o,
                                prompt: a,
                                tag: c,
                                id: h
                            }
                        }
                          , u = setTimeout(()=>this.queue.set(h, l), this.publishTimeout);
                        try {
                            await await (0,
                            s.hF)(this.rpcPublish(e, t, n, o, a, c, h), this.publishTimeout, "Failed to publish payload, please try again."),
                            this.removeRequestFromQueue(h),
                            this.relayer.events.emit(to.publish, l)
                        } catch (e) {
                            if (this.logger.debug("Publishing Payload stalled"),
                            this.needsTransportRestart = !0,
                            null != (r = i?.internal) && r.throwOnFailedPublish)
                                throw this.removeRequestFromQueue(h),
                                e;
                            return
                        } finally {
                            clearTimeout(u)
                        }
                        this.logger.debug("Successfully Published Payload"),
                        this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: i
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Publish Payload"),
                        this.logger.error(e),
                        e
                    }
                }
                ,
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.relayer = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.registerEventListeners()
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            rpcPublish(e, t, i, r, n, o, a) {
                var c, h, l, u;
                let p = {
                    method: (0,
                    s.cO)(r.protocol).publish,
                    params: {
                        topic: e,
                        message: t,
                        ttl: i,
                        prompt: n,
                        tag: o
                    },
                    id: a
                };
                return (0,
                s.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (h = p.params) || delete h.prompt),
                (0,
                s.o8)(null == (l = p.params) ? void 0 : l.tag) && (null == (u = p.params) || delete u.tag),
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "message",
                    direction: "outgoing",
                    request: p
                }),
                this.relayer.request(p)
            }
            removeRequestFromQueue(e) {
                this.queue.delete(e)
            }
            checkQueue() {
                this.queue.forEach(async e=>{
                    let {topic: t, message: i, opts: r} = e;
                    await this.publish(t, i, r)
                }
                )
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, ()=>{
                    if (this.needsTransportRestart) {
                        this.needsTransportRestart = !1,
                        this.relayer.events.emit(to.connection_stalled);
                        return
                    }
                    this.checkQueue()
                }
                ),
                this.relayer.on(to.message_ack, e=>{
                    this.removeRequestFromQueue(e.id.toString())
                }
                )
            }
        }
        class tE {
            constructor() {
                this.map = new Map,
                this.set = (e,t)=>{
                    let i = this.get(e);
                    this.exists(e, t) || this.map.set(e, [...i, t])
                }
                ,
                this.get = e=>this.map.get(e) || [],
                this.exists = (e,t)=>this.get(e).includes(t),
                this.delete = (e,t)=>{
                    if (typeof t > "u") {
                        this.map.delete(e);
                        return
                    }
                    if (!this.map.has(e))
                        return;
                    let i = this.get(e);
                    if (!this.exists(e, t))
                        return;
                    let r = i.filter(e=>e !== t);
                    if (!r.length) {
                        this.map.delete(e);
                        return
                    }
                    this.map.set(e, r)
                }
                ,
                this.clear = ()=>{
                    this.map.clear()
                }
            }
            get topics() {
                return Array.from(this.map.keys())
            }
        }
        var tI = Object.defineProperty
          , tP = Object.defineProperties
          , tS = Object.getOwnPropertyDescriptors
          , tO = Object.getOwnPropertySymbols
          , tR = Object.prototype.hasOwnProperty
          , tx = Object.prototype.propertyIsEnumerable
          , tC = (e,t,i)=>t in e ? tI(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , tA = (e,t)=>{
            for (var i in t || (t = {}))
                tR.call(t, i) && tC(e, i, t[i]);
            if (tO)
                for (var i of tO(t))
                    tx.call(t, i) && tC(e, i, t[i]);
            return e
        }
          , tN = (e,t)=>tP(e, tS(t));
        class tT extends v {
            constructor(e, t) {
                super(e, t),
                this.relayer = e,
                this.logger = t,
                this.subscriptions = new Map,
                this.topicMap = new tE,
                this.events = new r.EventEmitter,
                this.name = "subscription",
                this.version = "0.3",
                this.pending = new Map,
                this.cached = [],
                this.initialized = !1,
                this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
                this.pollingInterval = 20,
                this.storagePrefix = e7,
                this.subscribeTimeout = 1e4,
                this.restartInProgress = !1,
                this.batchSubscribeTopicsLimit = 500,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    this.registerEventListeners(),
                    this.clientId = await this.relayer.core.crypto.getClientId())
                }
                ,
                this.subscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    this.logger.debug("Subscribing Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: {
                            topic: e,
                            opts: t
                        }
                    });
                    try {
                        let i = (0,
                        s._H)(t)
                          , r = {
                            topic: e,
                            relay: i
                        };
                        this.pending.set(e, r);
                        let n = await this.rpcSubscribe(e, i);
                        return this.onSubscribe(n, r),
                        this.logger.debug("Successfully Subscribed Topic"),
                        this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        }),
                        n
                    } catch (e) {
                        throw this.logger.debug("Failed to Subscribe Topic"),
                        this.logger.error(e),
                        e
                    }
                }
                ,
                this.unsubscribe = async(e,t)=>{
                    await this.restartToComplete(),
                    this.isInitialized(),
                    "u" > typeof t?.id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                }
                ,
                this.isSubscribed = async e=>!!this.topics.includes(e) || await new Promise((t,i)=>{
                    let r = new P.Watch;
                    r.start(this.pendingSubscriptionWatchLabel);
                    let n = setInterval(()=>{
                        !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n),
                        r.stop(this.pendingSubscriptionWatchLabel),
                        t(!0)),
                        r.elapsed(this.pendingSubscriptionWatchLabel) >= tl && (clearInterval(n),
                        r.stop(this.pendingSubscriptionWatchLabel),
                        i(Error("Subscription resolution timeout")))
                    }
                    , this.pollingInterval)
                }
                ).catch(()=>!1),
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.restart = async()=>{
                    this.restartInProgress = !0,
                    await this.restore(),
                    await this.reset(),
                    this.restartInProgress = !1
                }
                ,
                this.relayer = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.clientId = ""
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + "//" + this.name
            }
            get length() {
                return this.subscriptions.size
            }
            get ids() {
                return Array.from(this.subscriptions.keys())
            }
            get values() {
                return Array.from(this.subscriptions.values())
            }
            get topics() {
                return this.topicMap.topics
            }
            hasSubscription(e, t) {
                let i = !1;
                try {
                    i = this.getSubscription(e).topic === t
                } catch {}
                return i
            }
            onEnable() {
                this.cached = [],
                this.initialized = !0
            }
            onDisable() {
                this.cached = this.values,
                this.subscriptions.clear(),
                this.topicMap.clear()
            }
            async unsubscribeByTopic(e, t) {
                let i = this.topicMap.get(e);
                await Promise.all(i.map(async i=>await this.unsubscribeById(e, i, t)))
            }
            async unsubscribeById(e, t, i) {
                this.logger.debug("Unsubscribing Topic"),
                this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: e,
                        id: t,
                        opts: i
                    }
                });
                try {
                    let r = (0,
                    s._H)(i);
                    await this.rpcUnsubscribe(e, t, r);
                    let n = (0,
                    s.D6)("USER_DISCONNECTED", `${this.name}, ${e}`);
                    await this.onUnsubscribe(e, t, n),
                    this.logger.debug("Successfully Unsubscribed Topic"),
                    this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: i
                        }
                    })
                } catch (e) {
                    throw this.logger.debug("Failed to Unsubscribe Topic"),
                    this.logger.error(e),
                    e
                }
            }
            async rpcSubscribe(e, t) {
                let i = {
                    method: (0,
                    s.cO)(t.protocol).subscribe,
                    params: {
                        topic: e
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: i
                });
                try {
                    await await (0,
                    s.hF)(this.relayer.request(i), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                    this.relayer.events.emit(to.connection_stalled)
                }
                return (0,
                s.rj)(e + this.clientId)
            }
            async rpcBatchSubscribe(e) {
                if (!e.length)
                    return;
                let t = e[0].relay
                  , i = {
                    method: (0,
                    s.cO)(t.protocol).batchSubscribe,
                    params: {
                        topics: e.map(e=>e.topic)
                    }
                };
                this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: i
                });
                try {
                    return await await (0,
                    s.hF)(this.relayer.request(i), this.subscribeTimeout)
                } catch {
                    this.logger.debug("Outgoing Relay Payload stalled"),
                    this.relayer.events.emit(to.connection_stalled)
                }
            }
            rpcUnsubscribe(e, t, i) {
                let r = {
                    method: (0,
                    s.cO)(i.protocol).unsubscribe,
                    params: {
                        topic: e,
                        id: t
                    }
                };
                return this.logger.debug("Outgoing Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "outgoing",
                    request: r
                }),
                this.relayer.request(r)
            }
            onSubscribe(e, t) {
                this.setSubscription(e, tN(tA({}, t), {
                    id: e
                })),
                this.pending.delete(t.topic)
            }
            onBatchSubscribe(e) {
                e.length && e.forEach(e=>{
                    this.setSubscription(e.id, tA({}, e)),
                    this.pending.delete(e.topic)
                }
                )
            }
            async onUnsubscribe(e, t, i) {
                this.events.removeAllListeners(t),
                this.hasSubscription(t, e) && this.deleteSubscription(t, i),
                await this.relayer.messages.del(e)
            }
            async setRelayerSubscriptions(e) {
                await this.relayer.core.storage.setItem(this.storageKey, e)
            }
            async getRelayerSubscriptions() {
                return await this.relayer.core.storage.getItem(this.storageKey)
            }
            setSubscription(e, t) {
                this.subscriptions.has(e) || (this.logger.debug("Setting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "setSubscription",
                    id: e,
                    subscription: t
                }),
                this.addSubscription(e, t))
            }
            addSubscription(e, t) {
                this.subscriptions.set(e, tA({}, t)),
                this.topicMap.set(t.topic, e),
                this.events.emit(th.created, t)
            }
            getSubscription(e) {
                this.logger.debug("Getting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "getSubscription",
                    id: e
                });
                let t = this.subscriptions.get(e);
                if (!t) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw Error(t)
                }
                return t
            }
            deleteSubscription(e, t) {
                this.logger.debug("Deleting subscription"),
                this.logger.trace({
                    type: "method",
                    method: "deleteSubscription",
                    id: e,
                    reason: t
                });
                let i = this.getSubscription(e);
                this.subscriptions.delete(e),
                this.topicMap.delete(i.topic, e),
                this.events.emit(th.deleted, tN(tA({}, i), {
                    reason: t
                }))
            }
            async persist() {
                await this.setRelayerSubscriptions(this.values),
                this.events.emit(th.sync)
            }
            async reset() {
                if (this.cached.length) {
                    let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                    for (let t = 0; t < e; t++) {
                        let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                        await this.batchSubscribe(e)
                    }
                }
                this.events.emit(th.resubscribed)
            }
            async restore() {
                try {
                    let e = await this.getRelayerSubscriptions();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.subscriptions.size) {
                        let {message: e} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                        Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        subscriptions: this.values
                    })
                } catch (e) {
                    this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
                    this.logger.error(e)
                }
            }
            async batchSubscribe(e) {
                if (!e.length)
                    return;
                let t = await this.rpcBatchSubscribe(e);
                (0,
                s.qt)(t) && this.onBatchSubscribe(t.map((t,i)=>tN(tA({}, e[i]), {
                    id: t
                })))
            }
            async onConnect() {
                this.restartInProgress || (await this.restart(),
                this.onEnable())
            }
            onDisconnect() {
                this.onDisable()
            }
            async checkPending() {
                if (!this.initialized || this.relayer.transportExplicitlyClosed)
                    return;
                let e = [];
                this.pending.forEach(t=>{
                    e.push(t)
                }
                ),
                await this.batchSubscribe(e)
            }
            registerEventListeners() {
                this.relayer.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, async()=>{
                    await this.checkPending()
                }
                ),
                this.relayer.on(to.connect, async()=>{
                    await this.onConnect()
                }
                ),
                this.relayer.on(to.disconnect, ()=>{
                    this.onDisconnect()
                }
                ),
                this.events.on(th.created, async e=>{
                    let t = th.created;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                ),
                this.events.on(th.deleted, async e=>{
                    let t = th.deleted;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    await this.persist()
                }
                )
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
            async restartToComplete() {
                this.restartInProgress && await new Promise(e=>{
                    let t = setInterval(()=>{
                        this.restartInProgress || (clearInterval(t),
                        e())
                    }
                    , this.pollingInterval)
                }
                )
            }
        }
        var tq = Object.defineProperty
          , tj = Object.getOwnPropertySymbols
          , tD = Object.prototype.hasOwnProperty
          , tL = Object.prototype.propertyIsEnumerable
          , tz = (e,t,i)=>t in e ? tq(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , tM = (e,t)=>{
            for (var i in t || (t = {}))
                tD.call(t, i) && tz(e, i, t[i]);
            if (tj)
                for (var i of tj(t))
                    tL.call(t, i) && tz(e, i, t[i]);
            return e
        }
        ;
        class tk extends d {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.events = new r.EventEmitter,
                this.name = "relayer",
                this.transportExplicitlyClosed = !1,
                this.initialized = !1,
                this.connectionAttemptInProgress = !1,
                this.connectionStatusPollingInterval = 20,
                this.staleConnectionErrors = ["socket hang up", "socket stalled"],
                this.hasExperiencedNetworkDisruption = !1,
                this.request = async e=>{
                    this.logger.debug("Publishing Request Payload");
                    try {
                        return await this.toEstablishConnection(),
                        await this.provider.request(e)
                    } catch (e) {
                        throw this.logger.debug("Failed to Publish Request"),
                        this.logger.error(e),
                        e
                    }
                }
                ,
                this.onPayloadHandler = e=>{
                    this.onProviderPayload(e)
                }
                ,
                this.onConnectHandler = ()=>{
                    this.events.emit(to.connect)
                }
                ,
                this.onDisconnectHandler = ()=>{
                    this.onProviderDisconnect()
                }
                ,
                this.onProviderErrorHandler = e=>{
                    this.logger.error(e),
                    this.events.emit(to.error, e),
                    this.logger.info("Fatal socket error received, closing transport"),
                    this.transportClose()
                }
                ,
                this.registerProviderListeners = ()=>{
                    this.provider.on(ta.payload, this.onPayloadHandler),
                    this.provider.on(ta.connect, this.onConnectHandler),
                    this.provider.on(ta.disconnect, this.onDisconnectHandler),
                    this.provider.on(ta.error, this.onProviderErrorHandler)
                }
                ,
                this.core = e.core,
                this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0,
                c.generateChildLogger)(e.logger, this.name) : (0,
                c.pino)((0,
                c.getDefaultLoggerOptions)({
                    level: e.logger || "error"
                })),
                this.messages = new tw(this.logger,e.core),
                this.subscriber = new tT(this,this.logger),
                this.publisher = new tb(this,this.logger),
                this.relayUrl = e?.relayUrl || tn,
                this.projectId = e.projectId,
                this.provider = {}
            }
            async init() {
                this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.createProvider(),
                await Promise.all([this.messages.init(), this.subscriber.init()]);
                try {
                    await this.transportOpen()
                } catch {
                    this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ts}...`),
                    await this.restartTransport(ts)
                }
                this.initialized = !0,
                setTimeout(async()=>{
                    0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"),
                    await this.transportClose(),
                    this.transportExplicitlyClosed = !1)
                }
                , 1e4)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get connected() {
                return this.provider.connection.connected
            }
            get connecting() {
                return this.provider.connection.connecting
            }
            async publish(e, t, i) {
                this.isInitialized(),
                await this.publisher.publish(e, t, i),
                await this.recordMessageEvent({
                    topic: e,
                    message: t,
                    publishedAt: Date.now()
                })
            }
            async subscribe(e, t) {
                var i;
                this.isInitialized();
                let r = (null == (i = this.subscriber.topicMap.get(e)) ? void 0 : i[0]) || "";
                return r || (await Promise.all([new Promise(t=>{
                    this.subscriber.once(th.created, i=>{
                        i.topic === e && t()
                    }
                    )
                }
                ), new Promise(async i=>{
                    r = await this.subscriber.subscribe(e, t),
                    i()
                }
                )]),
                r)
            }
            async unsubscribe(e, t) {
                this.isInitialized(),
                await this.subscriber.unsubscribe(e, t)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            async transportClose() {
                this.transportExplicitlyClosed = !0,
                this.hasExperiencedNetworkDisruption && this.connected ? await (0,
                s.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(()=>this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
            }
            async transportOpen(e) {
                if (this.transportExplicitlyClosed = !1,
                await this.confirmOnlineStateOrThrow(),
                !this.connectionAttemptInProgress) {
                    e && e !== this.relayUrl && (this.relayUrl = e,
                    await this.transportClose(),
                    await this.createProvider()),
                    this.connectionAttemptInProgress = !0;
                    try {
                        await Promise.all([new Promise(e=>{
                            if (!this.initialized)
                                return e();
                            this.subscriber.once(th.resubscribed, ()=>{
                                e()
                            }
                            )
                        }
                        ), new Promise(async(e,t)=>{
                            try {
                                await (0,
                                s.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                            } catch (e) {
                                t(e);
                                return
                            }
                            e()
                        }
                        )])
                    } catch (e) {
                        if (this.logger.error(e),
                        !this.isConnectionStalled(e.message))
                            throw e;
                        this.provider.events.emit(ta.disconnect)
                    } finally {
                        this.connectionAttemptInProgress = !1,
                        this.hasExperiencedNetworkDisruption = !1
                    }
                }
            }
            async restartTransport(e) {
                await this.confirmOnlineStateOrThrow(),
                this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl,
                await this.transportClose(),
                await this.createProvider(),
                await this.transportOpen())
            }
            async confirmOnlineStateOrThrow() {
                if (!await (0,
                s.Gg)())
                    throw Error("No internet connection detected. Please restart your network and try again.")
            }
            isConnectionStalled(e) {
                return this.staleConnectionErrors.some(t=>e.includes(t))
            }
            async createProvider() {
                this.provider.connection && this.unregisterProviderListeners();
                let e = await this.core.crypto.signJWT(this.relayUrl);
                this.provider = new D.r(new $((0,
                s.$0)({
                    sdkVersion: "2.10.1",
                    protocol: this.protocol,
                    version: this.version,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId,
                    auth: e,
                    useOnCloseEvent: !0
                }))),
                this.registerProviderListeners()
            }
            async recordMessageEvent(e) {
                let {topic: t, message: i} = e;
                await this.messages.set(t, i)
            }
            async shouldIgnoreMessageEvent(e) {
                let {topic: t, message: i} = e;
                if (!i || 0 === i.length)
                    return this.logger.debug(`Ignoring invalid/empty message: ${i}`),
                    !0;
                if (!await this.subscriber.isSubscribed(t))
                    return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
                    !0;
                let r = this.messages.has(t, i);
                return r && this.logger.debug(`Ignoring duplicate message: ${i}`),
                r
            }
            async onProviderPayload(e) {
                if (this.logger.debug("Incoming Relay Payload"),
                this.logger.trace({
                    type: "payload",
                    direction: "incoming",
                    payload: e
                }),
                (0,
                L.isJsonRpcRequest)(e)) {
                    if (!e.method.endsWith("_subscription"))
                        return;
                    let t = e.params
                      , {topic: i, message: r, publishedAt: n} = t.data
                      , s = {
                        topic: i,
                        message: r,
                        publishedAt: n
                    };
                    this.logger.debug("Emitting Relayer Payload"),
                    this.logger.trace(tM({
                        type: "event",
                        event: t.id
                    }, s)),
                    this.events.emit(t.id, s),
                    await this.acknowledgePayload(e),
                    await this.onMessageEvent(s)
                } else
                    (0,
                    L.isJsonRpcResponse)(e) && this.events.emit(to.message_ack, e)
            }
            async onMessageEvent(e) {
                await this.shouldIgnoreMessageEvent(e) || (this.events.emit(to.message, e),
                await this.recordMessageEvent(e))
            }
            async acknowledgePayload(e) {
                let t = (0,
                L.formatJsonRpcResult)(e.id, !0);
                await this.provider.connection.send(t)
            }
            unregisterProviderListeners() {
                this.provider.off(ta.payload, this.onPayloadHandler),
                this.provider.off(ta.connect, this.onConnectHandler),
                this.provider.off(ta.disconnect, this.onDisconnectHandler),
                this.provider.off(ta.error, this.onProviderErrorHandler)
            }
            async registerEventListeners() {
                this.events.on(to.connection_stalled, ()=>{
                    this.restartTransport().catch(e=>this.logger.error(e))
                }
                );
                let e = await (0,
                s.Gg)();
                (0,
                s.uw)(async t=>{
                    this.initialized && e !== t && (e = t,
                    t ? await this.restartTransport().catch(e=>this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0,
                    await this.transportClose().catch(e=>this.logger.error(e))))
                }
                )
            }
            onProviderDisconnect() {
                this.events.emit(to.disconnect),
                this.attemptToReconnect()
            }
            attemptToReconnect() {
                this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."),
                setTimeout(async()=>{
                    await this.restartTransport().catch(e=>this.logger.error(e))
                }
                , (0,
                P.toMiliseconds)(tc)))
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
            async toEstablishConnection() {
                if (await this.confirmOnlineStateOrThrow(),
                !this.connected) {
                    if (this.connectionAttemptInProgress)
                        return await new Promise(e=>{
                            let t = setInterval(()=>{
                                this.connected && (clearInterval(t),
                                e())
                            }
                            , this.connectionStatusPollingInterval)
                        }
                        );
                    await this.restartTransport()
                }
            }
        }
        var t$ = Object.defineProperty
          , tU = Object.getOwnPropertySymbols
          , tH = Object.prototype.hasOwnProperty
          , tV = Object.prototype.propertyIsEnumerable
          , tK = (e,t,i)=>t in e ? t$(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , tB = (e,t)=>{
            for (var i in t || (t = {}))
                tH.call(t, i) && tK(e, i, t[i]);
            if (tU)
                for (var i of tU(t))
                    tV.call(t, i) && tK(e, i, t[i]);
            return e
        }
        ;
        class tF extends g {
            constructor(e, t, i, r=e7, n) {
                super(e, t, i, r),
                this.core = e,
                this.logger = t,
                this.name = i,
                this.map = new Map,
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = e7,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach(e=>{
                        this.getKey && null !== e && !(0,
                        s.o8)(e) ? this.map.set(this.getKey(e), e) : (0,
                        s.xW)(e) ? this.map.set(e.id, e) : (0,
                        s.h1)(e) && this.map.set(e.topic, e)
                    }
                    ),
                    this.cached = [],
                    this.initialized = !0)
                }
                ,
                this.set = async(e,t)=>{
                    this.isInitialized(),
                    this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        key: e,
                        value: t
                    }),
                    this.map.set(e, t),
                    await this.persist())
                }
                ,
                this.get = e=>(this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    key: e
                }),
                this.getData(e)),
                this.getAll = e=>(this.isInitialized(),
                e ? this.values.filter(t=>Object.keys(e).every(i=>H()(t[i], e[i]))) : this.values),
                this.update = async(e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Updating value"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        key: e,
                        update: t
                    });
                    let i = tB(tB({}, this.getData(e)), t);
                    this.map.set(e, i),
                    await this.persist()
                }
                ,
                this.delete = async(e,t)=>{
                    this.isInitialized(),
                    this.map.has(e) && (this.logger.debug("Deleting value"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        key: e,
                        reason: t
                    }),
                    this.map.delete(e),
                    await this.persist())
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.storagePrefix = r,
                this.getKey = n
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + "//" + this.name
            }
            get length() {
                return this.map.size
            }
            get keys() {
                return Array.from(this.map.keys())
            }
            get values() {
                return Array.from(this.map.values())
            }
            async setDataStore(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getDataStore() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getData(e) {
                let t = this.map.get(e);
                if (!t) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw this.logger.error(t),
                    Error(t)
                }
                return t
            }
            async persist() {
                await this.setDataStore(this.values)
            }
            async restore() {
                try {
                    let e = await this.getDataStore();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.map.size) {
                        let {message: e} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored value for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        value: this.values
                    })
                } catch (e) {
                    this.logger.debug(`Failed to Restore value for ${this.name}`),
                    this.logger.error(e)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
        }
        class tZ {
            constructor(e, t) {
                this.core = e,
                this.logger = t,
                this.name = "pairing",
                this.version = "0.3",
                this.events = new (n()),
                this.initialized = !1,
                this.storagePrefix = e7,
                this.ignoredPayloadTypes = [s.rV],
                this.registeredMethods = [],
                this.init = async()=>{
                    this.initialized || (await this.pairings.init(),
                    await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.initialized = !0,
                    this.logger.trace("Initialized"))
                }
                ,
                this.register = ({methods: e})=>{
                    this.isInitialized(),
                    this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                }
                ,
                this.create = async()=>{
                    this.isInitialized();
                    let e = (0,
                    s.jd)()
                      , t = await this.core.crypto.setSymKey(e)
                      , i = (0,
                    s.gn)(P.FIVE_MINUTES)
                      , r = {
                        protocol: "irn"
                    }
                      , n = (0,
                    s.Bv)({
                        protocol: this.core.protocol,
                        version: this.core.version,
                        topic: t,
                        symKey: e,
                        relay: r
                    });
                    return await this.pairings.set(t, {
                        topic: t,
                        expiry: i,
                        relay: r,
                        active: !1
                    }),
                    await this.core.relayer.subscribe(t),
                    this.core.expirer.set(t, i),
                    {
                        topic: t,
                        uri: n
                    }
                }
                ,
                this.pair = async e=>{
                    this.isInitialized(),
                    this.isValidPair(e);
                    let {topic: t, symKey: i, relay: r} = (0,
                    s.he)(e.uri);
                    if (this.pairings.keys.includes(t) && this.pairings.get(t).active)
                        throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                    this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(i, t),
                    await this.core.relayer.subscribe(t, {
                        relay: r
                    }));
                    let n = (0,
                    s.gn)(P.FIVE_MINUTES)
                      , o = {
                        topic: t,
                        relay: r,
                        expiry: n,
                        active: !1
                    };
                    return await this.pairings.set(t, o),
                    this.core.expirer.set(t, n),
                    e.activatePairing && await this.activate({
                        topic: t
                    }),
                    this.events.emit(tp.create, o),
                    o
                }
                ,
                this.activate = async({topic: e})=>{
                    this.isInitialized();
                    let t = (0,
                    s.gn)(P.THIRTY_DAYS);
                    await this.pairings.update(e, {
                        active: !0,
                        expiry: t
                    }),
                    this.core.expirer.set(e, t)
                }
                ,
                this.ping = async e=>{
                    this.isInitialized(),
                    await this.isValidPing(e);
                    let {topic: t} = e;
                    if (this.pairings.keys.includes(t)) {
                        let e = await this.sendRequest(t, "wc_pairingPing", {})
                          , {done: i, resolve: r, reject: n} = (0,
                        s.H1)();
                        this.events.once((0,
                        s.E0)("pairing_ping", e), ({error: e})=>{
                            e ? n(e) : r()
                        }
                        ),
                        await i()
                    }
                }
                ,
                this.updateExpiry = async({topic: e, expiry: t})=>{
                    this.isInitialized(),
                    await this.pairings.update(e, {
                        expiry: t
                    })
                }
                ,
                this.updateMetadata = async({topic: e, metadata: t})=>{
                    this.isInitialized(),
                    await this.pairings.update(e, {
                        peerMetadata: t
                    })
                }
                ,
                this.getPairings = ()=>(this.isInitialized(),
                this.pairings.values),
                this.disconnect = async e=>{
                    this.isInitialized(),
                    await this.isValidDisconnect(e);
                    let {topic: t} = e;
                    this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0,
                    s.D6)("USER_DISCONNECTED")),
                    await this.deletePairing(t))
                }
                ,
                this.sendRequest = async(e,t,i)=>{
                    let r = (0,
                    L.formatJsonRpcRequest)(t, i)
                      , n = await this.core.crypto.encode(e, r)
                      , s = tu[t].req;
                    return this.core.history.set(e, r),
                    this.core.relayer.publish(e, n, s),
                    r.id
                }
                ,
                this.sendResult = async(e,t,i)=>{
                    let r = (0,
                    L.formatJsonRpcResult)(e, i)
                      , n = await this.core.crypto.encode(t, r)
                      , s = await this.core.history.get(t, e)
                      , o = tu[s.request.method].res;
                    await this.core.relayer.publish(t, n, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.sendError = async(e,t,i)=>{
                    let r = (0,
                    L.formatJsonRpcError)(e, i)
                      , n = await this.core.crypto.encode(t, r)
                      , s = await this.core.history.get(t, e)
                      , o = tu[s.request.method] ? tu[s.request.method].res : tu.unregistered_method.res;
                    await this.core.relayer.publish(t, n, o),
                    await this.core.history.resolve(r)
                }
                ,
                this.deletePairing = async(e,t)=>{
                    await this.core.relayer.unsubscribe(e),
                    await Promise.all([this.pairings.delete(e, (0,
                    s.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                }
                ,
                this.cleanup = async()=>{
                    let e = this.pairings.getAll().filter(e=>(0,
                    s.Bw)(e.expiry));
                    await Promise.all(e.map(e=>this.deletePairing(e.topic)))
                }
                ,
                this.onRelayEventRequest = e=>{
                    let {topic: t, payload: i} = e;
                    switch (i.method) {
                    case "wc_pairingPing":
                        return this.onPairingPingRequest(t, i);
                    case "wc_pairingDelete":
                        return this.onPairingDeleteRequest(t, i);
                    default:
                        return this.onUnknownRpcMethodRequest(t, i)
                    }
                }
                ,
                this.onRelayEventResponse = async e=>{
                    let {topic: t, payload: i} = e
                      , r = (await this.core.history.get(t, i.id)).request.method;
                    return "wc_pairingPing" === r ? this.onPairingPingResponse(t, i) : this.onUnknownRpcMethodResponse(r)
                }
                ,
                this.onPairingPingRequest = async(e,t)=>{
                    let {id: i} = t;
                    try {
                        this.isValidPing({
                            topic: e
                        }),
                        await this.sendResult(i, e, !0),
                        this.events.emit(tp.ping, {
                            id: i,
                            topic: e
                        })
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.logger.error(t)
                    }
                }
                ,
                this.onPairingPingResponse = (e,t)=>{
                    let {id: i} = t;
                    setTimeout(()=>{
                        (0,
                        L.isJsonRpcResult)(t) ? this.events.emit((0,
                        s.E0)("pairing_ping", i), {}) : (0,
                        L.isJsonRpcError)(t) && this.events.emit((0,
                        s.E0)("pairing_ping", i), {
                            error: t.error
                        })
                    }
                    , 500)
                }
                ,
                this.onPairingDeleteRequest = async(e,t)=>{
                    let {id: i} = t;
                    try {
                        this.isValidDisconnect({
                            topic: e
                        }),
                        await this.deletePairing(e),
                        this.events.emit(tp.delete, {
                            id: i,
                            topic: e
                        })
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.logger.error(t)
                    }
                }
                ,
                this.onUnknownRpcMethodRequest = async(e,t)=>{
                    let {id: i, method: r} = t;
                    try {
                        if (this.registeredMethods.includes(r))
                            return;
                        let t = (0,
                        s.D6)("WC_METHOD_UNSUPPORTED", r);
                        await this.sendError(i, e, t),
                        this.logger.error(t)
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.logger.error(t)
                    }
                }
                ,
                this.onUnknownRpcMethodResponse = e=>{
                    this.registeredMethods.includes(e) || this.logger.error((0,
                    s.D6)("WC_METHOD_UNSUPPORTED", e))
                }
                ,
                this.isValidPair = e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `pair() params: ${e}`);
                        throw Error(t)
                    }
                    if (!(0,
                    s.jv)(e.uri)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                        throw Error(t)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t} = e;
                    await this.isValidPairingTopic(t)
                }
                ,
                this.isValidPairingTopic = async e=>{
                    if (!(0,
                    s.M_)(e, !1)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.pairings.keys.includes(e)) {
                        let {message: t} = (0,
                        s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0,
                    s.Bw)(this.pairings.get(e).expiry)) {
                        await this.deletePairing(e);
                        let {message: t} = (0,
                        s.Z7)("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                ,
                this.core = e,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.pairings = new tF(this.core,this.logger,this.name,this.storagePrefix)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
            registerRelayerEvents() {
                this.core.relayer.on(to.message, async e=>{
                    let {topic: t, message: i} = e;
                    if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
                        return;
                    let r = await this.core.crypto.decode(t, i);
                    try {
                        (0,
                        L.isJsonRpcRequest)(r) ? (this.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : (0,
                        L.isJsonRpcResponse)(r) && (await this.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.core.history.delete(t, r.id))
                    } catch (e) {
                        this.logger.error(e)
                    }
                }
                )
            }
            registerExpirerEvents() {
                this.core.expirer.on(td.expired, async e=>{
                    let {topic: t} = (0,
                    s.iP)(e.target);
                    t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
                    this.events.emit(tp.expire, {
                        topic: t
                    }))
                }
                )
            }
        }
        class tJ extends u {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.records = new Map,
                this.events = new r.EventEmitter,
                this.name = "history",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = e7,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach(e=>this.records.set(e.id, e)),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.set = (e,t,i)=>{
                    if (this.isInitialized(),
                    this.logger.debug("Setting JSON-RPC request history record"),
                    this.logger.trace({
                        type: "method",
                        method: "set",
                        topic: e,
                        request: t,
                        chainId: i
                    }),
                    this.records.has(t.id))
                        return;
                    let r = {
                        id: t.id,
                        topic: e,
                        request: {
                            method: t.method,
                            params: t.params || null
                        },
                        chainId: i,
                        expiry: (0,
                        s.gn)(P.THIRTY_DAYS)
                    };
                    this.records.set(r.id, r),
                    this.events.emit(tf.created, r)
                }
                ,
                this.resolve = async e=>{
                    if (this.isInitialized(),
                    this.logger.debug("Updating JSON-RPC response history record"),
                    this.logger.trace({
                        type: "method",
                        method: "update",
                        response: e
                    }),
                    !this.records.has(e.id))
                        return;
                    let t = await this.getRecord(e.id);
                    typeof t.response > "u" && (t.response = (0,
                    L.isJsonRpcError)(e) ? {
                        error: e.error
                    } : {
                        result: e.result
                    },
                    this.records.set(t.id, t),
                    this.events.emit(tf.updated, t))
                }
                ,
                this.get = async(e,t)=>(this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                    type: "method",
                    method: "get",
                    topic: e,
                    id: t
                }),
                await this.getRecord(t)),
                this.delete = (e,t)=>{
                    this.isInitialized(),
                    this.logger.debug("Deleting record"),
                    this.logger.trace({
                        type: "method",
                        method: "delete",
                        id: t
                    }),
                    this.values.forEach(i=>{
                        i.topic !== e || "u" > typeof t && i.id !== t || (this.records.delete(i.id),
                        this.events.emit(tf.deleted, i))
                    }
                    )
                }
                ,
                this.exists = async(e,t)=>(this.isInitialized(),
                !!this.records.has(t) && (await this.getRecord(t)).topic === e),
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + "//" + this.name
            }
            get size() {
                return this.records.size
            }
            get keys() {
                return Array.from(this.records.keys())
            }
            get values() {
                return Array.from(this.records.values())
            }
            get pending() {
                let e = [];
                return this.values.forEach(t=>{
                    if ("u" > typeof t.response)
                        return;
                    let i = {
                        topic: t.topic,
                        request: (0,
                        L.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                        chainId: t.chainId
                    };
                    return e.push(i)
                }
                ),
                e
            }
            async setJsonRpcRecords(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getJsonRpcRecords() {
                return await this.core.storage.getItem(this.storageKey)
            }
            getRecord(e) {
                this.isInitialized();
                let t = this.records.get(e);
                if (!t) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw Error(t)
                }
                return t
            }
            async persist() {
                await this.setJsonRpcRecords(this.values),
                this.events.emit(tf.sync)
            }
            async restore() {
                try {
                    let e = await this.getJsonRpcRecords();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.records.size) {
                        let {message: e} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        records: this.values
                    })
                } catch (e) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(e)
                }
            }
            registerEventListeners() {
                this.events.on(tf.created, e=>{
                    let t = tf.created;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                ),
                this.events.on(tf.updated, e=>{
                    let t = tf.updated;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                ),
                this.events.on(tf.deleted, e=>{
                    let t = tf.deleted;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        record: e
                    }),
                    this.persist()
                }
                ),
                this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, ()=>{
                    this.cleanup()
                }
                )
            }
            cleanup() {
                try {
                    this.records.forEach(e=>{
                        (0,
                        P.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`),
                        this.delete(e.topic, e.id))
                    }
                    )
                } catch (e) {
                    this.logger.warn(e)
                }
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
        }
        class tW extends y {
            constructor(e, t) {
                super(e, t),
                this.core = e,
                this.logger = t,
                this.expirations = new Map,
                this.events = new r.EventEmitter,
                this.name = "expirer",
                this.version = "0.3",
                this.cached = [],
                this.initialized = !1,
                this.storagePrefix = e7,
                this.init = async()=>{
                    this.initialized || (this.logger.trace("Initialized"),
                    await this.restore(),
                    this.cached.forEach(e=>this.expirations.set(e.target, e)),
                    this.cached = [],
                    this.registerEventListeners(),
                    this.initialized = !0)
                }
                ,
                this.has = e=>{
                    try {
                        let t = this.formatTarget(e);
                        return "u" > typeof this.getExpiration(t)
                    } catch {
                        return !1
                    }
                }
                ,
                this.set = (e,t)=>{
                    this.isInitialized();
                    let i = this.formatTarget(e)
                      , r = {
                        target: i,
                        expiry: t
                    };
                    this.expirations.set(i, r),
                    this.checkExpiry(i, r),
                    this.events.emit(td.created, {
                        target: i,
                        expiration: r
                    })
                }
                ,
                this.get = e=>{
                    this.isInitialized();
                    let t = this.formatTarget(e);
                    return this.getExpiration(t)
                }
                ,
                this.del = e=>{
                    if (this.isInitialized(),
                    this.has(e)) {
                        let t = this.formatTarget(e)
                          , i = this.getExpiration(t);
                        this.expirations.delete(t),
                        this.events.emit(td.deleted, {
                            target: t,
                            expiration: i
                        })
                    }
                }
                ,
                this.on = (e,t)=>{
                    this.events.on(e, t)
                }
                ,
                this.once = (e,t)=>{
                    this.events.once(e, t)
                }
                ,
                this.off = (e,t)=>{
                    this.events.off(e, t)
                }
                ,
                this.removeListener = (e,t)=>{
                    this.events.removeListener(e, t)
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name)
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get storageKey() {
                return this.storagePrefix + this.version + "//" + this.name
            }
            get length() {
                return this.expirations.size
            }
            get keys() {
                return Array.from(this.expirations.keys())
            }
            get values() {
                return Array.from(this.expirations.values())
            }
            formatTarget(e) {
                if ("string" == typeof e)
                    return (0,
                    s.Z4)(e);
                if ("number" == typeof e)
                    return (0,
                    s.Gq)(e);
                let {message: t} = (0,
                s.Z7)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                throw Error(t)
            }
            async setExpirations(e) {
                await this.core.storage.setItem(this.storageKey, e)
            }
            async getExpirations() {
                return await this.core.storage.getItem(this.storageKey)
            }
            async persist() {
                await this.setExpirations(this.values),
                this.events.emit(td.sync)
            }
            async restore() {
                try {
                    let e = await this.getExpirations();
                    if (typeof e > "u" || !e.length)
                        return;
                    if (this.expirations.size) {
                        let {message: e} = (0,
                        s.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                        throw this.logger.error(e),
                        Error(e)
                    }
                    this.cached = e,
                    this.logger.debug(`Successfully Restored expirations for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        expirations: this.values
                    })
                } catch (e) {
                    this.logger.debug(`Failed to Restore expirations for ${this.name}`),
                    this.logger.error(e)
                }
            }
            getExpiration(e) {
                let t = this.expirations.get(e);
                if (!t) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                    throw this.logger.error(t),
                    Error(t)
                }
                return t
            }
            checkExpiry(e, t) {
                let {expiry: i} = t;
                (0,
                P.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t)
            }
            expire(e, t) {
                this.expirations.delete(e),
                this.events.emit(td.expired, {
                    target: e,
                    expiration: t
                })
            }
            checkExpirations() {
                this.core.relayer.connected && this.expirations.forEach((e,t)=>this.checkExpiry(t, e))
            }
            registerEventListeners() {
                this.core.heartbeat.on(a.HEARTBEAT_EVENTS.pulse, ()=>this.checkExpirations()),
                this.events.on(td.created, e=>{
                    let t = td.created;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                ),
                this.events.on(td.expired, e=>{
                    let t = td.expired;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                ),
                this.events.on(td.deleted, e=>{
                    let t = td.deleted;
                    this.logger.info(`Emitting ${t}`),
                    this.logger.debug({
                        type: "event",
                        event: t,
                        data: e
                    }),
                    this.persist()
                }
                )
            }
            isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
            }
        }
        class tG extends m {
            constructor(e, t) {
                super(e, t),
                this.projectId = e,
                this.logger = t,
                this.name = tg,
                this.initialized = !1,
                this.queue = [],
                this.verifyDisabled = !1,
                this.init = async e=>{
                    if (this.verifyDisabled || (0,
                    s.b$)() || !(0,
                    s.jU)())
                        return;
                    let t = e?.verifyUrl || tv;
                    this.verifyUrl !== t && this.removeIframe(),
                    this.verifyUrl = t;
                    try {
                        await this.createIframe()
                    } catch (e) {
                        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                        this.logger.info(e)
                    }
                    if (!this.initialized) {
                        this.removeIframe(),
                        this.verifyUrl = ty;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
                            this.logger.info(e),
                            this.verifyDisabled = !0
                        }
                    }
                }
                ,
                this.register = async e=>{
                    this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId),
                    await this.init())
                }
                ,
                this.resolve = async e=>{
                    let t;
                    if (this.isDevEnv)
                        return "";
                    let i = e?.verifyUrl || tv;
                    try {
                        t = await this.fetchAttestation(e.attestationId, i)
                    } catch (r) {
                        this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${i}`),
                        this.logger.info(r),
                        t = await this.fetchAttestation(e.attestationId, ty)
                    }
                    return t
                }
                ,
                this.fetchAttestation = async(e,t)=>{
                    this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                    let i = this.startAbortTimer(2 * P.ONE_SECOND)
                      , r = await fetch(`${t}/attestation/${e}`, {
                        signal: this.abortController.signal
                    });
                    return clearTimeout(i),
                    200 === r.status ? await r.json() : void 0
                }
                ,
                this.addToQueue = e=>{
                    this.queue.push(e)
                }
                ,
                this.processQueue = ()=>{
                    0 !== this.queue.length && (this.queue.forEach(e=>this.sendPost(e)),
                    this.queue = [])
                }
                ,
                this.sendPost = e=>{
                    var t;
                    try {
                        if (!this.iframe)
                            return;
                        null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"),
                        this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                    } catch {}
                }
                ,
                this.createIframe = async()=>{
                    let e;
                    let t = i=>{
                        "verify_ready" === i.data && (this.initialized = !0,
                        this.processQueue(),
                        window.removeEventListener("message", t),
                        e())
                    }
                    ;
                    await Promise.race([new Promise(i=>{
                        if (document.getElementById(tg))
                            return i();
                        window.addEventListener("message", t);
                        let r = document.createElement("iframe");
                        r.id = tg,
                        r.src = `${this.verifyUrl}/${this.projectId}`,
                        r.style.display = "none",
                        document.body.append(r),
                        this.iframe = r,
                        e = i
                    }
                    ), new Promise((e,i)=>setTimeout(()=>{
                        window.removeEventListener("message", t),
                        i("verify iframe load timeout")
                    }
                    , (0,
                    P.toMiliseconds)(P.FIVE_SECONDS)))])
                }
                ,
                this.removeIframe = ()=>{
                    this.iframe && (this.iframe.remove(),
                    this.iframe = void 0,
                    this.initialized = !1)
                }
                ,
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.verifyUrl = tv,
                this.abortController = new AbortController,
                this.isDevEnv = (0,
                s.UG)() && V.env.IS_VITEST
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            startAbortTimer(e) {
                return this.abortController = new AbortController,
                setTimeout(()=>this.abortController.abort(), (0,
                P.toMiliseconds)(e))
            }
        }
        var tQ = Object.defineProperty
          , tY = Object.getOwnPropertySymbols
          , tX = Object.prototype.hasOwnProperty
          , t0 = Object.prototype.propertyIsEnumerable
          , t1 = (e,t,i)=>t in e ? tQ(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , t5 = (e,t)=>{
            for (var i in t || (t = {}))
                tX.call(t, i) && t1(e, i, t[i]);
            if (tY)
                for (var i of tY(t))
                    t0.call(t, i) && t1(e, i, t[i]);
            return e
        }
        ;
        class t6 extends l {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = e8,
                this.events = new r.EventEmitter,
                this.initialized = !1,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.projectId = e?.projectId,
                this.relayUrl = e?.relayUrl || tn;
                let t = "u" > typeof e?.logger && "string" != typeof e?.logger ? e.logger : (0,
                c.pino)((0,
                c.getDefaultLoggerOptions)({
                    level: e?.logger || e9.logger
                }));
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.heartbeat = new a.HeartBeat,
                this.crypto = new t_(this,this.logger,e?.keychain),
                this.history = new tJ(this,this.logger),
                this.expirer = new tW(this,this.logger),
                this.storage = null != e && e.storage ? e.storage : new o.ZP(t5(t5({}, te), e?.storageOptions)),
                this.relayer = new tk({
                    core: this,
                    logger: this.logger,
                    relayUrl: this.relayUrl,
                    projectId: this.projectId
                }),
                this.pairing = new tZ(this,this.logger),
                this.verify = new tG(this.projectId || "",this.logger)
            }
            static async init(e) {
                let t = new t6(e);
                await t.initialize();
                let i = await t.crypto.getClientId();
                return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i),
                t
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            async start() {
                this.initialized || await this.initialize()
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.crypto.init(),
                    await this.history.init(),
                    await this.expirer.init(),
                    await this.relayer.init(),
                    await this.heartbeat.init(),
                    await this.pairing.init(),
                    this.initialized = !0,
                    this.logger.info("Core Initialization Success")
                } catch (e) {
                    throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
                    this.logger.error(e.message),
                    e
                }
            }
        }
        let t3 = "client"
          , t2 = `wc@2:${t3}:`
          , t4 = {
            name: t3,
            logger: "error"
        }
          , t8 = "WALLETCONNECT_DEEPLINK_CHOICE"
          , t7 = "Proposal expired"
          , t9 = P.SEVEN_DAYS
          , ie = {
            wc_sessionPropose: {
                req: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1100
                },
                res: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1101
                }
            },
            wc_sessionSettle: {
                req: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1102
                },
                res: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1103
                }
            },
            wc_sessionUpdate: {
                req: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1104
                },
                res: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1105
                }
            },
            wc_sessionExtend: {
                req: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1106
                },
                res: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1107
                }
            },
            wc_sessionRequest: {
                req: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1108
                },
                res: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1109
                }
            },
            wc_sessionEvent: {
                req: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !0,
                    tag: 1110
                },
                res: {
                    ttl: P.FIVE_MINUTES,
                    prompt: !1,
                    tag: 1111
                }
            },
            wc_sessionDelete: {
                req: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1112
                },
                res: {
                    ttl: P.ONE_DAY,
                    prompt: !1,
                    tag: 1113
                }
            },
            wc_sessionPing: {
                req: {
                    ttl: P.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1114
                },
                res: {
                    ttl: P.THIRTY_SECONDS,
                    prompt: !1,
                    tag: 1115
                }
            }
        }
          , it = {
            min: P.FIVE_MINUTES,
            max: P.SEVEN_DAYS
        }
          , ii = {
            idle: "IDLE",
            active: "ACTIVE"
        }
          , ir = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
        var is = Object.defineProperty
          , io = Object.defineProperties
          , ia = Object.getOwnPropertyDescriptors
          , ic = Object.getOwnPropertySymbols
          , ih = Object.prototype.hasOwnProperty
          , il = Object.prototype.propertyIsEnumerable
          , iu = (e,t,i)=>t in e ? is(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , ip = (e,t)=>{
            for (var i in t || (t = {}))
                ih.call(t, i) && iu(e, i, t[i]);
            if (ic)
                for (var i of ic(t))
                    il.call(t, i) && iu(e, i, t[i]);
            return e
        }
          , id = (e,t)=>io(e, ia(t));
        class ig extends w {
            constructor(e) {
                super(e),
                this.name = "engine",
                this.events = new (n()),
                this.initialized = !1,
                this.ignoredPayloadTypes = [s.rV],
                this.requestQueue = {
                    state: ii.idle,
                    queue: []
                },
                this.sessionRequestQueue = {
                    state: ii.idle,
                    queue: []
                },
                this.requestQueueDelay = P.ONE_SECOND,
                this.init = async()=>{
                    this.initialized || (await this.cleanup(),
                    this.registerRelayerEvents(),
                    this.registerExpirerEvents(),
                    this.registerPairingEvents(),
                    this.client.core.pairing.register({
                        methods: Object.keys(ie)
                    }),
                    this.initialized = !0,
                    setTimeout(()=>{
                        this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                        this.processSessionRequestQueue()
                    }
                    , (0,
                    P.toMiliseconds)(this.requestQueueDelay)))
                }
                ,
                this.connect = async e=>{
                    await this.isInitialized();
                    let t = id(ip({}, e), {
                        requiredNamespaces: e.requiredNamespaces || {},
                        optionalNamespaces: e.optionalNamespaces || {}
                    });
                    await this.isValidConnect(t);
                    let {pairingTopic: i, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, relays: a} = t, c = i, h, l = !1;
                    if (c && (l = this.client.core.pairing.pairings.get(c).active),
                    !c || !l) {
                        let {topic: e, uri: t} = await this.client.core.pairing.create();
                        c = e,
                        h = t
                    }
                    let u = await this.client.core.crypto.generateKeyPair()
                      , p = ip({
                        requiredNamespaces: r,
                        optionalNamespaces: n,
                        relays: a ?? [{
                            protocol: "irn"
                        }],
                        proposer: {
                            publicKey: u,
                            metadata: this.client.metadata
                        }
                    }, o && {
                        sessionProperties: o
                    })
                      , {reject: f, resolve: d, done: g} = (0,
                    s.H1)(P.FIVE_MINUTES, t7);
                    if (this.events.once((0,
                    s.E0)("session_connect"), async({error: e, session: t})=>{
                        if (e)
                            f(e);
                        else if (t) {
                            t.self.publicKey = u;
                            let e = id(ip({}, t), {
                                requiredNamespaces: t.requiredNamespaces,
                                optionalNamespaces: t.optionalNamespaces
                            });
                            await this.client.session.set(t.topic, e),
                            await this.setExpiry(t.topic, t.expiry),
                            c && await this.client.core.pairing.updateMetadata({
                                topic: c,
                                metadata: t.peer.metadata
                            }),
                            d(e)
                        }
                    }
                    ),
                    !c) {
                        let {message: e} = (0,
                        s.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                        throw Error(e)
                    }
                    let v = await this.sendRequest({
                        topic: c,
                        method: "wc_sessionPropose",
                        params: p
                    })
                      , y = (0,
                    s.gn)(P.FIVE_MINUTES);
                    return await this.setProposal(v, ip({
                        id: v,
                        expiry: y
                    }, p)),
                    {
                        uri: h,
                        approval: g
                    }
                }
                ,
                this.pair = async e=>(await this.isInitialized(),
                await this.client.core.pairing.pair(e)),
                this.approve = async e=>{
                    await this.isInitialized(),
                    await this.isValidApprove(e);
                    let {id: t, relayProtocol: i, namespaces: r, sessionProperties: n} = e
                      , o = this.client.proposal.get(t)
                      , {pairingTopic: a, proposer: c, requiredNamespaces: h, optionalNamespaces: l} = o;
                    a = a || "",
                    (0,
                    s.L5)(h) || (h = (0,
                    s.fc)(r, "approve()"));
                    let u = await this.client.core.crypto.generateKeyPair()
                      , p = c.publicKey
                      , f = await this.client.core.crypto.generateSharedKey(u, p);
                    a && t && (await this.client.core.pairing.updateMetadata({
                        topic: a,
                        metadata: c.metadata
                    }),
                    await this.sendResult({
                        id: t,
                        topic: a,
                        result: {
                            relay: {
                                protocol: i ?? "irn"
                            },
                            responderPublicKey: u
                        }
                    }),
                    await this.client.proposal.delete(t, (0,
                    s.D6)("USER_DISCONNECTED")),
                    await this.client.core.pairing.activate({
                        topic: a
                    }));
                    let d = ip({
                        relay: {
                            protocol: i ?? "irn"
                        },
                        namespaces: r,
                        requiredNamespaces: h,
                        optionalNamespaces: l,
                        pairingTopic: a,
                        controller: {
                            publicKey: u,
                            metadata: this.client.metadata
                        },
                        expiry: (0,
                        s.gn)(t9)
                    }, n && {
                        sessionProperties: n
                    });
                    await this.client.core.relayer.subscribe(f),
                    await this.sendRequest({
                        topic: f,
                        method: "wc_sessionSettle",
                        params: d,
                        throwOnFailedPublish: !0
                    });
                    let g = id(ip({}, d), {
                        topic: f,
                        pairingTopic: a,
                        acknowledged: !1,
                        self: d.controller,
                        peer: {
                            publicKey: c.publicKey,
                            metadata: c.metadata
                        },
                        controller: u
                    });
                    return await this.client.session.set(f, g),
                    await this.setExpiry(f, (0,
                    s.gn)(t9)),
                    {
                        topic: f,
                        acknowledged: ()=>new Promise(e=>setTimeout(()=>e(this.client.session.get(f)), 500))
                    }
                }
                ,
                this.reject = async e=>{
                    await this.isInitialized(),
                    await this.isValidReject(e);
                    let {id: t, reason: i} = e
                      , {pairingTopic: r} = this.client.proposal.get(t);
                    r && (await this.sendError(t, r, i),
                    await this.client.proposal.delete(t, (0,
                    s.D6)("USER_DISCONNECTED")))
                }
                ,
                this.update = async e=>{
                    await this.isInitialized(),
                    await this.isValidUpdate(e);
                    let {topic: t, namespaces: i} = e
                      , r = await this.sendRequest({
                        topic: t,
                        method: "wc_sessionUpdate",
                        params: {
                            namespaces: i
                        }
                    })
                      , {done: n, resolve: o, reject: a} = (0,
                    s.H1)();
                    return this.events.once((0,
                    s.E0)("session_update", r), ({error: e})=>{
                        e ? a(e) : o()
                    }
                    ),
                    await this.client.session.update(t, {
                        namespaces: i
                    }),
                    {
                        acknowledged: n
                    }
                }
                ,
                this.extend = async e=>{
                    await this.isInitialized(),
                    await this.isValidExtend(e);
                    let {topic: t} = e
                      , i = await this.sendRequest({
                        topic: t,
                        method: "wc_sessionExtend",
                        params: {}
                    })
                      , {done: r, resolve: n, reject: o} = (0,
                    s.H1)();
                    return this.events.once((0,
                    s.E0)("session_extend", i), ({error: e})=>{
                        e ? o(e) : n()
                    }
                    ),
                    await this.setExpiry(t, (0,
                    s.gn)(t9)),
                    {
                        acknowledged: r
                    }
                }
                ,
                this.request = async e=>{
                    await this.isInitialized(),
                    await this.isValidRequest(e);
                    let {chainId: t, request: i, topic: r, expiry: n} = e
                      , o = (0,
                    L.payloadId)()
                      , {done: a, resolve: c, reject: h} = (0,
                    s.H1)(n);
                    return this.events.once((0,
                    s.E0)("session_request", o), ({error: e, result: t})=>{
                        e ? h(e) : c(t)
                    }
                    ),
                    await Promise.all([new Promise(async e=>{
                        await this.sendRequest({
                            clientRpcId: o,
                            topic: r,
                            method: "wc_sessionRequest",
                            params: {
                                request: i,
                                chainId: t
                            },
                            expiry: n,
                            throwOnFailedPublish: !0
                        }).catch(e=>h(e)),
                        this.client.events.emit("session_request_sent", {
                            topic: r,
                            request: i,
                            chainId: t,
                            id: o
                        }),
                        e()
                    }
                    ), new Promise(async e=>{
                        let t = await this.client.core.storage.getItem(t8);
                        (0,
                        s.Hh)({
                            id: o,
                            topic: r,
                            wcDeepLink: t
                        }),
                        e()
                    }
                    ), a()]).then(e=>e[2])
                }
                ,
                this.respond = async e=>{
                    await this.isInitialized(),
                    await this.isValidRespond(e);
                    let {topic: t, response: i} = e
                      , {id: r} = i;
                    (0,
                    L.isJsonRpcResult)(i) ? await this.sendResult({
                        id: r,
                        topic: t,
                        result: i.result,
                        throwOnFailedPublish: !0
                    }) : (0,
                    L.isJsonRpcError)(i) && await this.sendError(r, t, i.error),
                    this.cleanupAfterResponse(e)
                }
                ,
                this.ping = async e=>{
                    await this.isInitialized(),
                    await this.isValidPing(e);
                    let {topic: t} = e;
                    if (this.client.session.keys.includes(t)) {
                        let e = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionPing",
                            params: {}
                        })
                          , {done: i, resolve: r, reject: n} = (0,
                        s.H1)();
                        this.events.once((0,
                        s.E0)("session_ping", e), ({error: e})=>{
                            e ? n(e) : r()
                        }
                        ),
                        await i()
                    } else
                        this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                }
                ,
                this.emit = async e=>{
                    await this.isInitialized(),
                    await this.isValidEmit(e);
                    let {topic: t, event: i, chainId: r} = e;
                    await this.sendRequest({
                        topic: t,
                        method: "wc_sessionEvent",
                        params: {
                            event: i,
                            chainId: r
                        }
                    })
                }
                ,
                this.disconnect = async e=>{
                    await this.isInitialized(),
                    await this.isValidDisconnect(e);
                    let {topic: t} = e;
                    this.client.session.keys.includes(t) ? (await this.sendRequest({
                        topic: t,
                        method: "wc_sessionDelete",
                        params: (0,
                        s.D6)("USER_DISCONNECTED"),
                        throwOnFailedPublish: !0
                    }),
                    await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                        topic: t
                    })
                }
                ,
                this.find = e=>(this.isInitialized(),
                this.client.session.getAll().filter(t=>(0,
                s.Ih)(t, e))),
                this.getPendingSessionRequests = ()=>(this.isInitialized(),
                this.client.pendingRequest.getAll()),
                this.cleanupDuplicatePairings = async e=>{
                    if (e.pairingTopic)
                        try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic)
                              , i = this.client.core.pairing.pairings.getAll().filter(i=>{
                                var r, n;
                                return (null == (r = i.peerMetadata) ? void 0 : r.url) && (null == (n = i.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && i.topic && i.topic !== t.topic
                            }
                            );
                            if (0 === i.length)
                                return;
                            this.client.logger.info(`Cleaning up ${i.length} duplicate pairing(s)`),
                            await Promise.all(i.map(e=>this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))),
                            this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                }
                ,
                this.deleteSession = async(e,t)=>{
                    let {self: i} = this.client.session.get(e);
                    await this.client.core.relayer.unsubscribe(e),
                    this.client.session.delete(e, (0,
                    s.D6)("USER_DISCONNECTED")),
                    this.client.core.crypto.keychain.has(i.publicKey) && await this.client.core.crypto.deleteKeyPair(i.publicKey),
                    this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e),
                    t || this.client.core.expirer.del(e),
                    this.client.core.storage.removeItem(t8).catch(e=>this.client.logger.warn(e))
                }
                ,
                this.deleteProposal = async(e,t)=>{
                    await Promise.all([this.client.proposal.delete(e, (0,
                    s.D6)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                }
                ,
                this.deletePendingSessionRequest = async(e,t,i=!1)=>{
                    await Promise.all([this.client.pendingRequest.delete(e, t), i ? Promise.resolve() : this.client.core.expirer.del(e)]),
                    this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t=>t.id !== e),
                    i && (this.sessionRequestQueue.state = ii.idle)
                }
                ,
                this.setExpiry = async(e,t)=>{
                    this.client.session.keys.includes(e) && await this.client.session.update(e, {
                        expiry: t
                    }),
                    this.client.core.expirer.set(e, t)
                }
                ,
                this.setProposal = async(e,t)=>{
                    await this.client.proposal.set(e, t),
                    this.client.core.expirer.set(e, t.expiry)
                }
                ,
                this.setPendingSessionRequest = async e=>{
                    let t = ie.wc_sessionRequest.req.ttl
                      , {id: i, topic: r, params: n, verifyContext: o} = e;
                    await this.client.pendingRequest.set(i, {
                        id: i,
                        topic: r,
                        params: n,
                        verifyContext: o
                    }),
                    t && this.client.core.expirer.set(i, (0,
                    s.gn)(t))
                }
                ,
                this.sendRequest = async e=>{
                    let {topic: t, method: i, params: r, expiry: n, relayRpcId: o, clientRpcId: a, throwOnFailedPublish: c} = e
                      , h = (0,
                    L.formatJsonRpcRequest)(i, r, a);
                    if ((0,
                    s.jU)() && ir.includes(i)) {
                        let e = (0,
                        s.rj)(JSON.stringify(h));
                        this.client.core.verify.register({
                            attestationId: e
                        })
                    }
                    let l = await this.client.core.crypto.encode(t, h)
                      , u = ie[i].req;
                    return n && (u.ttl = n),
                    o && (u.id = o),
                    this.client.core.history.set(t, h),
                    c ? (u.internal = id(ip({}, u.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(t, l, u)) : this.client.core.relayer.publish(t, l, u).catch(e=>this.client.logger.error(e)),
                    h.id
                }
                ,
                this.sendResult = async e=>{
                    let {id: t, topic: i, result: r, throwOnFailedPublish: n} = e
                      , s = (0,
                    L.formatJsonRpcResult)(t, r)
                      , o = await this.client.core.crypto.encode(i, s)
                      , a = await this.client.core.history.get(i, t)
                      , c = ie[a.request.method].res;
                    n ? (c.internal = id(ip({}, c.internal), {
                        throwOnFailedPublish: !0
                    }),
                    await this.client.core.relayer.publish(i, o, c)) : this.client.core.relayer.publish(i, o, c).catch(e=>this.client.logger.error(e)),
                    await this.client.core.history.resolve(s)
                }
                ,
                this.sendError = async(e,t,i)=>{
                    let r = (0,
                    L.formatJsonRpcError)(e, i)
                      , n = await this.client.core.crypto.encode(t, r)
                      , s = await this.client.core.history.get(t, e)
                      , o = ie[s.request.method].res;
                    this.client.core.relayer.publish(t, n, o),
                    await this.client.core.history.resolve(r)
                }
                ,
                this.cleanup = async()=>{
                    let e = []
                      , t = [];
                    this.client.session.getAll().forEach(t=>{
                        (0,
                        s.Bw)(t.expiry) && e.push(t.topic)
                    }
                    ),
                    this.client.proposal.getAll().forEach(e=>{
                        (0,
                        s.Bw)(e.expiry) && t.push(e.id)
                    }
                    ),
                    await Promise.all([...e.map(e=>this.deleteSession(e)), ...t.map(e=>this.deleteProposal(e))])
                }
                ,
                this.onRelayEventRequest = async e=>{
                    this.requestQueue.queue.push(e),
                    await this.processRequestsQueue()
                }
                ,
                this.processRequestsQueue = async()=>{
                    if (this.requestQueue.state === ii.active) {
                        this.client.logger.info("Request queue already active, skipping...");
                        return
                    }
                    for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                        this.requestQueue.state = ii.active;
                        let e = this.requestQueue.queue.shift();
                        if (e)
                            try {
                                this.processRequest(e),
                                await new Promise(e=>setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                    }
                    this.requestQueue.state = ii.idle
                }
                ,
                this.processRequest = e=>{
                    let {topic: t, payload: i} = e
                      , r = i.method;
                    switch (r) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeRequest(t, i);
                    case "wc_sessionSettle":
                        return this.onSessionSettleRequest(t, i);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateRequest(t, i);
                    case "wc_sessionExtend":
                        return this.onSessionExtendRequest(t, i);
                    case "wc_sessionPing":
                        return this.onSessionPingRequest(t, i);
                    case "wc_sessionDelete":
                        return this.onSessionDeleteRequest(t, i);
                    case "wc_sessionRequest":
                        return this.onSessionRequest(t, i);
                    case "wc_sessionEvent":
                        return this.onSessionEventRequest(t, i);
                    default:
                        return this.client.logger.info(`Unsupported request method ${r}`)
                    }
                }
                ,
                this.onRelayEventResponse = async e=>{
                    let {topic: t, payload: i} = e
                      , r = (await this.client.core.history.get(t, i.id)).request.method;
                    switch (r) {
                    case "wc_sessionPropose":
                        return this.onSessionProposeResponse(t, i);
                    case "wc_sessionSettle":
                        return this.onSessionSettleResponse(t, i);
                    case "wc_sessionUpdate":
                        return this.onSessionUpdateResponse(t, i);
                    case "wc_sessionExtend":
                        return this.onSessionExtendResponse(t, i);
                    case "wc_sessionPing":
                        return this.onSessionPingResponse(t, i);
                    case "wc_sessionRequest":
                        return this.onSessionRequestResponse(t, i);
                    default:
                        return this.client.logger.info(`Unsupported response method ${r}`)
                    }
                }
                ,
                this.onRelayEventUnknownPayload = e=>{
                    let {topic: t} = e
                      , {message: i} = (0,
                    s.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                    throw Error(i)
                }
                ,
                this.onSessionProposeRequest = async(e,t)=>{
                    let {params: i, id: r} = t;
                    try {
                        this.isValidConnect(ip({}, t.params));
                        let n = (0,
                        s.gn)(P.FIVE_MINUTES)
                          , o = ip({
                            id: r,
                            pairingTopic: e,
                            expiry: n
                        }, i);
                        await this.setProposal(r, o);
                        let a = (0,
                        s.rj)(JSON.stringify(t))
                          , c = await this.getVerifyContext(a, o.proposer.metadata);
                        this.client.events.emit("session_proposal", {
                            id: r,
                            params: o,
                            verifyContext: c
                        })
                    } catch (t) {
                        await this.sendError(r, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.onSessionProposeResponse = async(e,t)=>{
                    let {id: i} = t;
                    if ((0,
                    L.isJsonRpcResult)(t)) {
                        let {result: r} = t;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            result: r
                        });
                        let n = this.client.proposal.get(i);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            proposal: n
                        });
                        let s = n.proposer.publicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            selfPublicKey: s
                        });
                        let o = r.responderPublicKey;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            peerPublicKey: o
                        });
                        let a = await this.client.core.crypto.generateSharedKey(s, o);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            sessionTopic: a
                        });
                        let c = await this.client.core.relayer.subscribe(a);
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionProposeResponse",
                            subscriptionId: c
                        }),
                        await this.client.core.pairing.activate({
                            topic: e
                        })
                    } else
                        (0,
                        L.isJsonRpcError)(t) && (await this.client.proposal.delete(i, (0,
                        s.D6)("USER_DISCONNECTED")),
                        this.events.emit((0,
                        s.E0)("session_connect"), {
                            error: t.error
                        }))
                }
                ,
                this.onSessionSettleRequest = async(e,t)=>{
                    let {id: i, params: r} = t;
                    try {
                        this.isValidSessionSettleRequest(r);
                        let {relay: i, controller: n, expiry: o, namespaces: a, requiredNamespaces: c, optionalNamespaces: h, sessionProperties: l, pairingTopic: u} = t.params
                          , p = ip({
                            topic: e,
                            relay: i,
                            expiry: o,
                            namespaces: a,
                            acknowledged: !0,
                            pairingTopic: u,
                            requiredNamespaces: c,
                            optionalNamespaces: h,
                            controller: n.publicKey,
                            self: {
                                publicKey: "",
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: n.publicKey,
                                metadata: n.metadata
                            }
                        }, l && {
                            sessionProperties: l
                        });
                        await this.sendResult({
                            id: t.id,
                            topic: e,
                            result: !0
                        }),
                        this.events.emit((0,
                        s.E0)("session_connect"), {
                            session: p
                        }),
                        this.cleanupDuplicatePairings(p)
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.onSessionSettleResponse = async(e,t)=>{
                    let {id: i} = t;
                    (0,
                    L.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                        acknowledged: !0
                    }),
                    this.events.emit((0,
                    s.E0)("session_approve", i), {})) : (0,
                    L.isJsonRpcError)(t) && (await this.client.session.delete(e, (0,
                    s.D6)("USER_DISCONNECTED")),
                    this.events.emit((0,
                    s.E0)("session_approve", i), {
                        error: t.error
                    }))
                }
                ,
                this.onSessionUpdateRequest = async(e,t)=>{
                    let {params: i, id: r} = t;
                    try {
                        let t = `${e}_session_update`
                          , n = s.O6.get(t);
                        if (n && this.isRequestOutOfSync(n, r)) {
                            this.client.logger.info(`Discarding out of sync request - ${r}`);
                            return
                        }
                        this.isValidUpdate(ip({
                            topic: e
                        }, i)),
                        await this.client.session.update(e, {
                            namespaces: i.namespaces
                        }),
                        await this.sendResult({
                            id: r,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_update", {
                            id: r,
                            topic: e,
                            params: i
                        }),
                        s.O6.set(t, r)
                    } catch (t) {
                        await this.sendError(r, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.isRequestOutOfSync = (e,t)=>parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)),
                this.onSessionUpdateResponse = (e,t)=>{
                    let {id: i} = t;
                    (0,
                    L.isJsonRpcResult)(t) ? this.events.emit((0,
                    s.E0)("session_update", i), {}) : (0,
                    L.isJsonRpcError)(t) && this.events.emit((0,
                    s.E0)("session_update", i), {
                        error: t.error
                    })
                }
                ,
                this.onSessionExtendRequest = async(e,t)=>{
                    let {id: i} = t;
                    try {
                        this.isValidExtend({
                            topic: e
                        }),
                        await this.setExpiry(e, (0,
                        s.gn)(t9)),
                        await this.sendResult({
                            id: i,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_extend", {
                            id: i,
                            topic: e
                        })
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.onSessionExtendResponse = (e,t)=>{
                    let {id: i} = t;
                    (0,
                    L.isJsonRpcResult)(t) ? this.events.emit((0,
                    s.E0)("session_extend", i), {}) : (0,
                    L.isJsonRpcError)(t) && this.events.emit((0,
                    s.E0)("session_extend", i), {
                        error: t.error
                    })
                }
                ,
                this.onSessionPingRequest = async(e,t)=>{
                    let {id: i} = t;
                    try {
                        this.isValidPing({
                            topic: e
                        }),
                        await this.sendResult({
                            id: i,
                            topic: e,
                            result: !0
                        }),
                        this.client.events.emit("session_ping", {
                            id: i,
                            topic: e
                        })
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.onSessionPingResponse = (e,t)=>{
                    let {id: i} = t;
                    setTimeout(()=>{
                        (0,
                        L.isJsonRpcResult)(t) ? this.events.emit((0,
                        s.E0)("session_ping", i), {}) : (0,
                        L.isJsonRpcError)(t) && this.events.emit((0,
                        s.E0)("session_ping", i), {
                            error: t.error
                        })
                    }
                    , 500)
                }
                ,
                this.onSessionDeleteRequest = async(e,t)=>{
                    let {id: i} = t;
                    try {
                        this.isValidDisconnect({
                            topic: e,
                            reason: t.params
                        }),
                        await Promise.all([new Promise(t=>{
                            this.client.core.relayer.once(to.publish, async()=>{
                                t(await this.deleteSession(e))
                            }
                            )
                        }
                        ), this.sendResult({
                            id: i,
                            topic: e,
                            result: !0
                        })]),
                        this.client.events.emit("session_delete", {
                            id: i,
                            topic: e
                        })
                    } catch (e) {
                        this.client.logger.error(e)
                    }
                }
                ,
                this.onSessionRequest = async(e,t)=>{
                    let {id: i, params: r} = t;
                    try {
                        this.isValidRequest(ip({
                            topic: e
                        }, r));
                        let t = (0,
                        s.rj)(JSON.stringify((0,
                        L.formatJsonRpcRequest)("wc_sessionRequest", r, i)))
                          , n = this.client.session.get(e)
                          , o = await this.getVerifyContext(t, n.peer.metadata)
                          , a = {
                            id: i,
                            topic: e,
                            params: r,
                            verifyContext: o
                        };
                        await this.setPendingSessionRequest(a),
                        this.addSessionRequestToSessionRequestQueue(a),
                        this.processSessionRequestQueue()
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.onSessionRequestResponse = (e,t)=>{
                    let {id: i} = t;
                    (0,
                    L.isJsonRpcResult)(t) ? this.events.emit((0,
                    s.E0)("session_request", i), {
                        result: t.result
                    }) : (0,
                    L.isJsonRpcError)(t) && this.events.emit((0,
                    s.E0)("session_request", i), {
                        error: t.error
                    })
                }
                ,
                this.onSessionEventRequest = async(e,t)=>{
                    let {id: i, params: r} = t;
                    try {
                        let t = `${e}_session_event_${r.event.name}`
                          , n = s.O6.get(t);
                        if (n && this.isRequestOutOfSync(n, i)) {
                            this.client.logger.info(`Discarding out of sync request - ${i}`);
                            return
                        }
                        this.isValidEmit(ip({
                            topic: e
                        }, r)),
                        this.client.events.emit("session_event", {
                            id: i,
                            topic: e,
                            params: r
                        }),
                        s.O6.set(t, i)
                    } catch (t) {
                        await this.sendError(i, e, t),
                        this.client.logger.error(t)
                    }
                }
                ,
                this.addSessionRequestToSessionRequestQueue = e=>{
                    this.sessionRequestQueue.queue.push(e)
                }
                ,
                this.cleanupAfterResponse = e=>{
                    this.deletePendingSessionRequest(e.response.id, {
                        message: "fulfilled",
                        code: 0
                    }),
                    setTimeout(()=>{
                        this.sessionRequestQueue.state = ii.idle,
                        this.processSessionRequestQueue()
                    }
                    , (0,
                    P.toMiliseconds)(this.requestQueueDelay))
                }
                ,
                this.processSessionRequestQueue = ()=>{
                    if (this.sessionRequestQueue.state === ii.active) {
                        this.client.logger.info("session request queue is already active.");
                        return
                    }
                    let e = this.sessionRequestQueue.queue[0];
                    if (!e) {
                        this.client.logger.info("session request queue is empty.");
                        return
                    }
                    try {
                        this.sessionRequestQueue.state = ii.active,
                        this.client.events.emit("session_request", e)
                    } catch (e) {
                        this.client.logger.error(e)
                    }
                }
                ,
                this.onPairingCreated = e=>{
                    if (e.active)
                        return;
                    let t = this.client.proposal.getAll().find(t=>t.pairingTopic === e.topic);
                    t && this.onSessionProposeRequest(e.topic, (0,
                    L.formatJsonRpcRequest)("wc_sessionPropose", {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                        relays: t.relays,
                        proposer: t.proposer
                    }, t.id))
                }
                ,
                this.isValidConnect = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                        throw Error(t)
                    }
                    let {pairingTopic: t, requiredNamespaces: i, optionalNamespaces: r, sessionProperties: n, relays: o} = e;
                    if ((0,
                    s.o8)(t) || await this.isValidPairingTopic(t),
                    !(0,
                    s.PM)(o, !0)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `connect() relays: ${o}`);
                        throw Error(e)
                    }
                    (0,
                    s.o8)(i) || 0 === (0,
                    s.L5)(i) || this.validateNamespaces(i, "requiredNamespaces"),
                    (0,
                    s.o8)(r) || 0 === (0,
                    s.L5)(r) || this.validateNamespaces(r, "optionalNamespaces"),
                    (0,
                    s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                }
                ,
                this.validateNamespaces = (e,t)=>{
                    let i = (0,
                    s.n)(e, "connect()", t);
                    if (i)
                        throw Error(i.message)
                }
                ,
                this.isValidApprove = async e=>{
                    if (!(0,
                    s.EJ)(e))
                        throw Error((0,
                        s.Z7)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                    let {id: t, namespaces: i, relayProtocol: r, sessionProperties: n} = e;
                    await this.isValidProposalId(t);
                    let o = this.client.proposal.get(t)
                      , a = (0,
                    s.in)(i, "approve()");
                    if (a)
                        throw Error(a.message);
                    let c = (0,
                    s.rF)(o.requiredNamespaces, i, "approve()");
                    if (c)
                        throw Error(c.message);
                    if (!(0,
                    s.M_)(r, !0)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${r}`);
                        throw Error(e)
                    }
                    (0,
                    s.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                }
                ,
                this.isValidReject = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `reject() params: ${e}`);
                        throw Error(t)
                    }
                    let {id: t, reason: i} = e;
                    if (await this.isValidProposalId(t),
                    !(0,
                    s.$t)(i)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(i)}`);
                        throw Error(e)
                    }
                }
                ,
                this.isValidSessionSettleRequest = e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                        throw Error(t)
                    }
                    let {relay: t, controller: i, namespaces: r, expiry: n} = e;
                    if (!(0,
                    s.Z2)(t)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                        throw Error(e)
                    }
                    let o = (0,
                    s.Dd)(i, "onSessionSettleRequest()");
                    if (o)
                        throw Error(o.message);
                    let a = (0,
                    s.in)(r, "onSessionSettleRequest()");
                    if (a)
                        throw Error(a.message);
                    if ((0,
                    s.Bw)(n)) {
                        let {message: e} = (0,
                        s.Z7)("EXPIRED", "onSessionSettleRequest()");
                        throw Error(e)
                    }
                }
                ,
                this.isValidUpdate = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `update() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t, namespaces: i} = e;
                    await this.isValidSessionTopic(t);
                    let r = this.client.session.get(t)
                      , n = (0,
                    s.in)(i, "update()");
                    if (n)
                        throw Error(n.message);
                    let o = (0,
                    s.rF)(r.requiredNamespaces, i, "update()");
                    if (o)
                        throw Error(o.message)
                }
                ,
                this.isValidExtend = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `extend() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t} = e;
                    await this.isValidSessionTopic(t)
                }
                ,
                this.isValidRequest = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `request() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t, request: i, chainId: r, expiry: n} = e;
                    await this.isValidSessionTopic(t);
                    let {namespaces: o} = this.client.session.get(t);
                    if (!(0,
                    s.p8)(o, r)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `request() chainId: ${r}`);
                        throw Error(e)
                    }
                    if (!(0,
                    s.hH)(i)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                        throw Error(e)
                    }
                    if (!(0,
                    s.al)(o, r, i.method)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `request() method: ${i.method}`);
                        throw Error(e)
                    }
                    if (n && !(0,
                    s.ON)(n, it)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${it.min} and ${it.max}`);
                        throw Error(e)
                    }
                }
                ,
                this.isValidRespond = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `respond() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t, response: i} = e;
                    if (await this.isValidSessionTopic(t),
                    !(0,
                    s.JT)(i)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                        throw Error(e)
                    }
                }
                ,
                this.isValidPing = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t} = e;
                    await this.isValidSessionOrPairingTopic(t)
                }
                ,
                this.isValidEmit = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `emit() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t, event: i, chainId: r} = e;
                    await this.isValidSessionTopic(t);
                    let {namespaces: n} = this.client.session.get(t);
                    if (!(0,
                    s.p8)(n, r)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `emit() chainId: ${r}`);
                        throw Error(e)
                    }
                    if (!(0,
                    s.nf)(i)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                        throw Error(e)
                    }
                    if (!(0,
                    s.sI)(n, r, i.name)) {
                        let {message: e} = (0,
                        s.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                        throw Error(e)
                    }
                }
                ,
                this.isValidDisconnect = async e=>{
                    if (!(0,
                    s.EJ)(e)) {
                        let {message: t} = (0,
                        s.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                        throw Error(t)
                    }
                    let {topic: t} = e;
                    await this.isValidSessionOrPairingTopic(t)
                }
                ,
                this.getVerifyContext = async(e,t)=>{
                    let i = {
                        verified: {
                            verifyUrl: t.verifyUrl || tv,
                            validation: "UNKNOWN",
                            origin: t.url || ""
                        }
                    };
                    try {
                        let r = await this.client.core.verify.resolve({
                            attestationId: e,
                            verifyUrl: t.verifyUrl
                        });
                        r && (i.verified.origin = r.origin,
                        i.verified.isScam = r.isScam,
                        i.verified.validation = r.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                    } catch (e) {
                        this.client.logger.info(e)
                    }
                    return this.client.logger.info(`Verify context: ${JSON.stringify(i)}`),
                    i
                }
                ,
                this.validateSessionProps = (e,t)=>{
                    Object.values(e).forEach(e=>{
                        if (!(0,
                        s.M_)(e, !1)) {
                            let {message: i} = (0,
                            s.Z7)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                            throw Error(i)
                        }
                    }
                    )
                }
            }
            async isInitialized() {
                if (!this.initialized) {
                    let {message: e} = (0,
                    s.Z7)("NOT_INITIALIZED", this.name);
                    throw Error(e)
                }
                await this.client.core.relayer.confirmOnlineStateOrThrow()
            }
            registerRelayerEvents() {
                this.client.core.relayer.on(to.message, async e=>{
                    let {topic: t, message: i} = e;
                    if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(i)))
                        return;
                    let r = await this.client.core.crypto.decode(t, i);
                    try {
                        (0,
                        L.isJsonRpcRequest)(r) ? (this.client.core.history.set(t, r),
                        this.onRelayEventRequest({
                            topic: t,
                            payload: r
                        })) : (0,
                        L.isJsonRpcResponse)(r) ? (await this.client.core.history.resolve(r),
                        await this.onRelayEventResponse({
                            topic: t,
                            payload: r
                        }),
                        this.client.core.history.delete(t, r.id)) : this.onRelayEventUnknownPayload({
                            topic: t,
                            payload: r
                        })
                    } catch (e) {
                        this.client.logger.error(e)
                    }
                }
                )
            }
            registerExpirerEvents() {
                this.client.core.expirer.on(td.expired, async e=>{
                    let {topic: t, id: i} = (0,
                    s.iP)(e.target);
                    if (i && this.client.pendingRequest.keys.includes(i))
                        return await this.deletePendingSessionRequest(i, (0,
                        s.Z7)("EXPIRED"), !0);
                    t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0),
                    this.client.events.emit("session_expire", {
                        topic: t
                    })) : i && (await this.deleteProposal(i, !0),
                    this.client.events.emit("proposal_expire", {
                        id: i
                    }))
                }
                )
            }
            registerPairingEvents() {
                this.client.core.pairing.events.on(tp.create, e=>this.onPairingCreated(e))
            }
            isValidPairingTopic(e) {
                if (!(0,
                s.M_)(e, !1)) {
                    let {message: t} = (0,
                    s.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                    throw Error(t)
                }
                if (!this.client.core.pairing.pairings.keys.includes(e)) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                    throw Error(t)
                }
                if ((0,
                s.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                    let {message: t} = (0,
                    s.Z7)("EXPIRED", `pairing topic: ${e}`);
                    throw Error(t)
                }
            }
            async isValidSessionTopic(e) {
                if (!(0,
                s.M_)(e, !1)) {
                    let {message: t} = (0,
                    s.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                    throw Error(t)
                }
                if (!this.client.session.keys.includes(e)) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                    throw Error(t)
                }
                if ((0,
                s.Bw)(this.client.session.get(e).expiry)) {
                    await this.deleteSession(e);
                    let {message: t} = (0,
                    s.Z7)("EXPIRED", `session topic: ${e}`);
                    throw Error(t)
                }
            }
            async isValidSessionOrPairingTopic(e) {
                if (this.client.session.keys.includes(e))
                    await this.isValidSessionTopic(e);
                else if (this.client.core.pairing.pairings.keys.includes(e))
                    this.isValidPairingTopic(e);
                else if ((0,
                s.M_)(e, !1)) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                    throw Error(t)
                } else {
                    let {message: t} = (0,
                    s.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                    throw Error(t)
                }
            }
            async isValidProposalId(e) {
                if (!(0,
                s.Q0)(e)) {
                    let {message: t} = (0,
                    s.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                    throw Error(t)
                }
                if (!this.client.proposal.keys.includes(e)) {
                    let {message: t} = (0,
                    s.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                    throw Error(t)
                }
                if ((0,
                s.Bw)(this.client.proposal.get(e).expiry)) {
                    await this.deleteProposal(e);
                    let {message: t} = (0,
                    s.Z7)("EXPIRED", `proposal id: ${e}`);
                    throw Error(t)
                }
            }
        }
        class iv extends tF {
            constructor(e, t) {
                super(e, t, "proposal", t2),
                this.core = e,
                this.logger = t
            }
        }
        class iy extends tF {
            constructor(e, t) {
                super(e, t, "session", t2),
                this.core = e,
                this.logger = t
            }
        }
        class im extends tF {
            constructor(e, t) {
                super(e, t, "request", t2, e=>e.id),
                this.core = e,
                this.logger = t
            }
        }
        class i_ extends _ {
            constructor(e) {
                super(e),
                this.protocol = "wc",
                this.version = 2,
                this.name = t4.name,
                this.events = new r.EventEmitter,
                this.on = (e,t)=>this.events.on(e, t),
                this.once = (e,t)=>this.events.once(e, t),
                this.off = (e,t)=>this.events.off(e, t),
                this.removeListener = (e,t)=>this.events.removeListener(e, t),
                this.removeAllListeners = e=>this.events.removeAllListeners(e),
                this.connect = async e=>{
                    try {
                        return await this.engine.connect(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.pair = async e=>{
                    try {
                        return await this.engine.pair(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.approve = async e=>{
                    try {
                        return await this.engine.approve(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.reject = async e=>{
                    try {
                        return await this.engine.reject(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.update = async e=>{
                    try {
                        return await this.engine.update(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.extend = async e=>{
                    try {
                        return await this.engine.extend(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.request = async e=>{
                    try {
                        return await this.engine.request(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.respond = async e=>{
                    try {
                        return await this.engine.respond(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.ping = async e=>{
                    try {
                        return await this.engine.ping(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.emit = async e=>{
                    try {
                        return await this.engine.emit(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.disconnect = async e=>{
                    try {
                        return await this.engine.disconnect(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.find = e=>{
                    try {
                        return this.engine.find(e)
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.getPendingSessionRequests = ()=>{
                    try {
                        return this.engine.getPendingSessionRequests()
                    } catch (e) {
                        throw this.logger.error(e.message),
                        e
                    }
                }
                ,
                this.name = e?.name || t4.name,
                this.metadata = e?.metadata || (0,
                s.D)();
                let t = "u" > typeof e?.logger && "string" != typeof e?.logger ? e.logger : (0,
                c.pino)((0,
                c.getDefaultLoggerOptions)({
                    level: e?.logger || t4.logger
                }));
                this.core = e?.core || new t6(e),
                this.logger = (0,
                c.generateChildLogger)(t, this.name),
                this.session = new iy(this.core,this.logger),
                this.proposal = new iv(this.core,this.logger),
                this.pendingRequest = new im(this.core,this.logger),
                this.engine = new ig(this)
            }
            static async init(e) {
                let t = new i_(e);
                return await t.initialize(),
                t
            }
            get context() {
                return (0,
                c.getLoggerContext)(this.logger)
            }
            get pairing() {
                return this.core.pairing.pairings
            }
            async initialize() {
                this.logger.trace("Initialized");
                try {
                    await this.core.start(),
                    await this.session.init(),
                    await this.proposal.init(),
                    await this.pendingRequest.init(),
                    await this.engine.init(),
                    this.core.verify.init({
                        verifyUrl: this.metadata.verifyUrl
                    }),
                    this.logger.info("SignClient Initialization Success")
                } catch (e) {
                    throw this.logger.info("SignClient Initialization Failure"),
                    this.logger.error(e.message),
                    e
                }
            }
        }
        var iw = i(58481);
        let ib = "error"
          , iE = "wc@2:universal_provider:"
          , iI = {
            DEFAULT_CHAIN_CHANGED: "default_chain_changed"
        };
        var iP = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof i.g ? i.g : "u" > typeof self ? self : {}
          , iS = {
            exports: {}
        };
        /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
        !function(e, t) {
            (function() {
                var i, r = "Expected a function", n = "__lodash_hash_undefined__", s = "__lodash_placeholder__", o = 1 / 0, a = 0 / 0, c = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], h = "[object Arguments]", l = "[object Array]", u = "[object Boolean]", p = "[object Date]", f = "[object Error]", d = "[object Function]", g = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", m = "[object Object]", _ = "[object Promise]", w = "[object RegExp]", b = "[object Set]", E = "[object String]", I = "[object Symbol]", P = "[object WeakMap]", S = "[object ArrayBuffer]", O = "[object DataView]", R = "[object Float32Array]", x = "[object Float64Array]", C = "[object Int8Array]", A = "[object Int16Array]", N = "[object Int32Array]", T = "[object Uint8Array]", q = "[object Uint8ClampedArray]", j = "[object Uint16Array]", D = "[object Uint32Array]", L = /\b__p \+= '';/g, z = /\b(__p \+=) '' \+/g, M = /(__e\(.*?\)|\b__t\)) \+\n'';/g, k = /&(?:amp|lt|gt|quot|#39);/g, $ = /[&<>"']/g, U = RegExp(k.source), H = RegExp($.source), V = /<%-([\s\S]+?)%>/g, K = /<%([\s\S]+?)%>/g, B = /<%=([\s\S]+?)%>/g, F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Z = /^\w*$/, J = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, W = /[\\^$.*+?()[\]{}|]/g, G = RegExp(W.source), Q = /^\s+/, Y = /\s/, X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ee = /\{\n\/\* \[wrapped with (.+)\] \*/, et = /,? & /, ei = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, er = /[()=,{}\[\]\/\s]/, en = /\\(\\)?/g, es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, eo = /\w*$/, ea = /^[-+]0x[0-9a-f]+$/i, ec = /^0b[01]+$/i, eh = /^\[object .+?Constructor\]$/, el = /^0o[0-7]+$/i, eu = /^(?:0|[1-9]\d*)$/, ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ef = /($^)/, ed = /['\n\r\u2028\u2029\\]/g, eg = "\ud800-\udfff", ev = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", ey = "\\u2700-\\u27bf", em = "a-z\\xdf-\\xf6\\xf8-\\xff", e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde", ew = "\\ufe0e\\ufe0f", eb = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", eE = "['’]", eI = "[" + eb + "]", eP = "[" + ev + "]", eS = "[" + em + "]", eO = "[^" + eg + eb + "\\d+" + ey + em + e_ + "]", eR = "\ud83c[\udffb-\udfff]", ex = "[^" + eg + "]", eC = "(?:\ud83c[\udde6-\uddff]){2}", eA = "[\ud800-\udbff][\udc00-\udfff]", eN = "[" + e_ + "]", eT = "\\u200d", eq = "(?:" + eS + "|" + eO + ")", ej = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?", eD = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?", eL = "(?:" + eP + "|" + eR + ")?", ez = "[" + ew + "]?", eM = "(?:" + eT + "(?:" + [ex, eC, eA].join("|") + ")" + ez + eL + ")*", ek = ez + eL + eM, e$ = "(?:" + ["[" + ey + "]", eC, eA].join("|") + ")" + ek, eU = "(?:" + [ex + eP + "?", eP, eC, eA, "[" + eg + "]"].join("|") + ")", eH = RegExp(eE, "g"), eV = RegExp(eP, "g"), eK = RegExp(eR + "(?=" + eR + ")|" + eU + ek, "g"), eB = RegExp([eN + "?" + eS + "+" + ej + "(?=" + [eI, eN, "$"].join("|") + ")", "(?:" + eN + "|" + eO + ")+" + eD + "(?=" + [eI, eN + eq, "$"].join("|") + ")", eN + "?" + eq + "+" + ej, eN + "+" + eD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", e$].join("|"), "g"), eF = RegExp("[" + eT + eg + ev + ew + "]"), eZ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, eJ = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], eW = -1, eG = {};
                eG[R] = eG[x] = eG[C] = eG[A] = eG[N] = eG[T] = eG[q] = eG[j] = eG[D] = !0,
                eG[h] = eG[l] = eG[S] = eG[u] = eG[O] = eG[p] = eG[f] = eG[d] = eG[v] = eG[y] = eG[m] = eG[w] = eG[b] = eG[E] = eG[P] = !1;
                var eQ = {};
                eQ[h] = eQ[l] = eQ[S] = eQ[O] = eQ[u] = eQ[p] = eQ[R] = eQ[x] = eQ[C] = eQ[A] = eQ[N] = eQ[v] = eQ[y] = eQ[m] = eQ[w] = eQ[b] = eQ[E] = eQ[I] = eQ[T] = eQ[q] = eQ[j] = eQ[D] = !0,
                eQ[f] = eQ[d] = eQ[P] = !1;
                var eY = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , eX = parseFloat
                  , e0 = parseInt
                  , e1 = "object" == typeof iP && iP && iP.Object === Object && iP
                  , e5 = "object" == typeof self && self && self.Object === Object && self
                  , e6 = e1 || e5 || Function("return this")()
                  , e3 = t && !t.nodeType && t
                  , e2 = e3 && e && !e.nodeType && e
                  , e4 = e2 && e2.exports === e3
                  , e8 = e4 && e1.process
                  , e7 = function() {
                    try {
                        return e2 && e2.require && e2.require("util").types || e8 && e8.binding && e8.binding("util")
                    } catch {}
                }()
                  , e9 = e7 && e7.isArrayBuffer
                  , te = e7 && e7.isDate
                  , tt = e7 && e7.isMap
                  , ti = e7 && e7.isRegExp
                  , tr = e7 && e7.isSet
                  , tn = e7 && e7.isTypedArray;
                function ts(e, t, i) {
                    switch (i.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, i[0]);
                    case 2:
                        return e.call(t, i[0], i[1]);
                    case 3:
                        return e.call(t, i[0], i[1], i[2])
                    }
                    return e.apply(t, i)
                }
                function to(e, t, i, r) {
                    for (var n = -1, s = null == e ? 0 : e.length; ++n < s; ) {
                        var o = e[n];
                        t(r, o, i(o), e)
                    }
                    return r
                }
                function ta(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r && !1 !== t(e[i], i, e); )
                        ;
                    return e
                }
                function tc(e, t) {
                    for (var i = null == e ? 0 : e.length; i-- && !1 !== t(e[i], i, e); )
                        ;
                    return e
                }
                function th(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
                        if (!t(e[i], i, e))
                            return !1;
                    return !0
                }
                function tl(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++i < r; ) {
                        var o = e[i];
                        t(o, i, e) && (s[n++] = o)
                    }
                    return s
                }
                function tu(e, t) {
                    return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1
                }
                function tp(e, t, i) {
                    for (var r = -1, n = null == e ? 0 : e.length; ++r < n; )
                        if (i(t, e[r]))
                            return !0;
                    return !1
                }
                function tf(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length, n = Array(r); ++i < r; )
                        n[i] = t(e[i], i, e);
                    return n
                }
                function td(e, t) {
                    for (var i = -1, r = t.length, n = e.length; ++i < r; )
                        e[n + i] = t[i];
                    return e
                }
                function tg(e, t, i, r) {
                    var n = -1
                      , s = null == e ? 0 : e.length;
                    for (r && s && (i = e[++n]); ++n < s; )
                        i = t(i, e[n], n, e);
                    return i
                }
                function tv(e, t, i, r) {
                    var n = null == e ? 0 : e.length;
                    for (r && n && (i = e[--n]); n--; )
                        i = t(i, e[n], n, e);
                    return i
                }
                function ty(e, t) {
                    for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
                        if (t(e[i], i, e))
                            return !0;
                    return !1
                }
                var tm = tS("length");
                function t_(e, t, i) {
                    var r;
                    return i(e, function(e, i, n) {
                        if (t(e, i, n))
                            return r = i,
                            !1
                    }),
                    r
                }
                function tw(e, t, i, r) {
                    for (var n = e.length, s = i + (r ? 1 : -1); r ? s-- : ++s < n; )
                        if (t(e[s], s, e))
                            return s;
                    return -1
                }
                function tb(e, t, i) {
                    return t == t ? function(e, t, i) {
                        for (var r = i - 1, n = e.length; ++r < n; )
                            if (e[r] === t)
                                return r;
                        return -1
                    }(e, t, i) : tw(e, tI, i)
                }
                function tE(e, t, i, r) {
                    for (var n = i - 1, s = e.length; ++n < s; )
                        if (r(e[n], t))
                            return n;
                    return -1
                }
                function tI(e) {
                    return e != e
                }
                function tP(e, t) {
                    var i = null == e ? 0 : e.length;
                    return i ? tx(e, t) / i : a
                }
                function tS(e) {
                    return function(t) {
                        return null == t ? i : t[e]
                    }
                }
                function tO(e) {
                    return function(t) {
                        return null == e ? i : e[t]
                    }
                }
                function tR(e, t, i, r, n) {
                    return n(e, function(e, n, s) {
                        i = r ? (r = !1,
                        e) : t(i, e, n, s)
                    }),
                    i
                }
                function tx(e, t) {
                    for (var r, n = -1, s = e.length; ++n < s; ) {
                        var o = t(e[n]);
                        o !== i && (r = r === i ? o : r + o)
                    }
                    return r
                }
                function tC(e, t) {
                    for (var i = -1, r = Array(e); ++i < e; )
                        r[i] = t(i);
                    return r
                }
                function tA(e) {
                    return e && e.slice(0, tF(e) + 1).replace(Q, "")
                }
                function tN(e) {
                    return function(t) {
                        return e(t)
                    }
                }
                function tT(e, t) {
                    return tf(t, function(t) {
                        return e[t]
                    })
                }
                function tq(e, t) {
                    return e.has(t)
                }
                function tj(e, t) {
                    for (var i = -1, r = e.length; ++i < r && tb(t, e[i], 0) > -1; )
                        ;
                    return i
                }
                function tD(e, t) {
                    for (var i = e.length; i-- && tb(t, e[i], 0) > -1; )
                        ;
                    return i
                }
                var tL = tO({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                })
                  , tz = tO({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });
                function tM(e) {
                    return "\\" + eY[e]
                }
                function tk(e) {
                    return eF.test(e)
                }
                function t$(e) {
                    var t = -1
                      , i = Array(e.size);
                    return e.forEach(function(e, r) {
                        i[++t] = [r, e]
                    }),
                    i
                }
                function tU(e, t) {
                    return function(i) {
                        return e(t(i))
                    }
                }
                function tH(e, t) {
                    for (var i = -1, r = e.length, n = 0, o = []; ++i < r; ) {
                        var a = e[i];
                        (a === t || a === s) && (e[i] = s,
                        o[n++] = i)
                    }
                    return o
                }
                function tV(e) {
                    var t = -1
                      , i = Array(e.size);
                    return e.forEach(function(e) {
                        i[++t] = e
                    }),
                    i
                }
                function tK(e) {
                    return tk(e) ? function(e) {
                        for (var t = eK.lastIndex = 0; eK.test(e); )
                            ++t;
                        return t
                    }(e) : tm(e)
                }
                function tB(e) {
                    return tk(e) ? e.match(eK) || [] : e.split("")
                }
                function tF(e) {
                    for (var t = e.length; t-- && Y.test(e.charAt(t)); )
                        ;
                    return t
                }
                var tZ = tO({
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"',
                    "&#39;": "'"
                })
                  , tJ = function e(t) {
                    var Y, eg, ev, ey, em = (t = null == t ? e6 : tJ.defaults(e6.Object(), t, tJ.pick(e6, eJ))).Array, e_ = t.Date, ew = t.Error, eb = t.Function, eE = t.Math, eI = t.Object, eP = t.RegExp, eS = t.String, eO = t.TypeError, eR = em.prototype, ex = eb.prototype, eC = eI.prototype, eA = t["__core-js_shared__"], eN = ex.toString, eT = eC.hasOwnProperty, eq = 0, ej = (Y = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Y : "", eD = eC.toString, eL = eN.call(eI), ez = e6._, eM = eP("^" + eN.call(eT).replace(W, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ek = e4 ? t.Buffer : i, e$ = t.Symbol, eU = t.Uint8Array, eK = ek ? ek.allocUnsafe : i, eF = tU(eI.getPrototypeOf, eI), eY = eI.create, e1 = eC.propertyIsEnumerable, e5 = eR.splice, e3 = e$ ? e$.isConcatSpreadable : i, e2 = e$ ? e$.iterator : i, e8 = e$ ? e$.toStringTag : i, e7 = function() {
                        try {
                            var e = nw(eI, "defineProperty");
                            return e({}, "", {}),
                            e
                        } catch {}
                    }(), tm = t.clearTimeout !== e6.clearTimeout && t.clearTimeout, tO = e_ && e_.now !== e6.Date.now && e_.now, tW = t.setTimeout !== e6.setTimeout && t.setTimeout, tG = eE.ceil, tQ = eE.floor, tY = eI.getOwnPropertySymbols, tX = ek ? ek.isBuffer : i, t0 = t.isFinite, t1 = eR.join, t5 = tU(eI.keys, eI), t6 = eE.max, t3 = eE.min, t2 = e_.now, t4 = t.parseInt, t8 = eE.random, t7 = eR.reverse, t9 = nw(t, "DataView"), ie = nw(t, "Map"), it = nw(t, "Promise"), ii = nw(t, "Set"), ir = nw(t, "WeakMap"), is = nw(eI, "create"), io = ir && new ir, ia = {}, ic = nB(t9), ih = nB(ie), il = nB(it), iu = nB(ii), ip = nB(ir), id = e$ ? e$.prototype : i, ig = id ? id.valueOf : i, iv = id ? id.toString : i;
                    function iy(e) {
                        if (sY(e) && !sU(e) && !(e instanceof ib)) {
                            if (e instanceof iw)
                                return e;
                            if (eT.call(e, "__wrapped__"))
                                return nF(e)
                        }
                        return new iw(e)
                    }
                    var im = function() {
                        function e() {}
                        return function(t) {
                            if (!sQ(t))
                                return {};
                            if (eY)
                                return eY(t);
                            e.prototype = t;
                            var r = new e;
                            return e.prototype = i,
                            r
                        }
                    }();
                    function i_() {}
                    function iw(e, t) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__chain__ = !!t,
                        this.__index__ = 0,
                        this.__values__ = i
                    }
                    function ib(e) {
                        this.__wrapped__ = e,
                        this.__actions__ = [],
                        this.__dir__ = 1,
                        this.__filtered__ = !1,
                        this.__iteratees__ = [],
                        this.__takeCount__ = 4294967295,
                        this.__views__ = []
                    }
                    function iE(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.clear(); ++t < i; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function iI(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.clear(); ++t < i; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function iP(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.clear(); ++t < i; ) {
                            var r = e[t];
                            this.set(r[0], r[1])
                        }
                    }
                    function iS(e) {
                        var t = -1
                          , i = null == e ? 0 : e.length;
                        for (this.__data__ = new iP; ++t < i; )
                            this.add(e[t])
                    }
                    function iO(e) {
                        var t = this.__data__ = new iI(e);
                        this.size = t.size
                    }
                    function iR(e, t) {
                        var i = sU(e)
                          , r = !i && s$(e)
                          , n = !i && !r && sB(e)
                          , s = !i && !r && !n && s4(e)
                          , o = i || r || n || s
                          , a = o ? tC(e.length, eS) : []
                          , c = a.length;
                        for (var h in e)
                            (t || eT.call(e, h)) && !(o && ("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || nR(h, c))) && a.push(h);
                        return a
                    }
                    function ix(e) {
                        var t = e.length;
                        return t ? e[rd(0, t - 1)] : i
                    }
                    function iC(e, t) {
                        return nH(rJ(e), iM(t, 0, e.length))
                    }
                    function iA(e) {
                        return nH(rJ(e))
                    }
                    function iN(e, t, r) {
                        (r === i || sz(e[t], r)) && (r !== i || t in e) || iL(e, t, r)
                    }
                    function iT(e, t, r) {
                        var n = e[t];
                        eT.call(e, t) && sz(n, r) && (r !== i || t in e) || iL(e, t, r)
                    }
                    function iq(e, t) {
                        for (var i = e.length; i--; )
                            if (sz(e[i][0], t))
                                return i;
                        return -1
                    }
                    function ij(e, t, i, r) {
                        return iV(e, function(e, n, s) {
                            t(r, e, i(e), s)
                        }),
                        r
                    }
                    function iD(e, t) {
                        return e && rW(t, om(t), e)
                    }
                    function iL(e, t, i) {
                        "__proto__" == t && e7 ? e7(e, t, {
                            configurable: !0,
                            enumerable: !0,
                            value: i,
                            writable: !0
                        }) : e[t] = i
                    }
                    function iz(e, t) {
                        for (var r = -1, n = t.length, s = em(n), o = null == e; ++r < n; )
                            s[r] = o ? i : of(e, t[r]);
                        return s
                    }
                    function iM(e, t, r) {
                        return e == e && (r !== i && (e = e <= r ? e : r),
                        t !== i && (e = e >= t ? e : t)),
                        e
                    }
                    function ik(e, t, r, n, s, o) {
                        var a, c = 1 & t, l = 2 & t, f = 4 & t;
                        if (r && (a = s ? r(e, n, s, o) : r(e)),
                        a !== i)
                            return a;
                        if (!sQ(e))
                            return e;
                        var _ = sU(e);
                        if (_) {
                            if (P = e.length,
                            L = new e.constructor(P),
                            P && "string" == typeof e[0] && eT.call(e, "index") && (L.index = e.index,
                            L.input = e.input),
                            a = L,
                            !c)
                                return rJ(e, a)
                        } else {
                            var P, L, z, M, k, $ = nI(e), U = $ == d || $ == g;
                            if (sB(e))
                                return rH(e, c);
                            if ($ == m || $ == h || U && !s) {
                                if (a = l || U ? {} : nS(e),
                                !c)
                                    return l ? (z = (k = a) && rW(e, o_(e), k),
                                    rW(e, nE(e), z)) : (M = iD(a, e),
                                    rW(e, nb(e), M))
                            } else {
                                if (!eQ[$])
                                    return s ? e : {};
                                a = function(e, t, i) {
                                    var r, n, s = e.constructor;
                                    switch (t) {
                                    case S:
                                        return rV(e);
                                    case u:
                                    case p:
                                        return new s(+e);
                                    case O:
                                        return r = i ? rV(e.buffer) : e.buffer,
                                        new e.constructor(r,e.byteOffset,e.byteLength);
                                    case R:
                                    case x:
                                    case C:
                                    case A:
                                    case N:
                                    case T:
                                    case q:
                                    case j:
                                    case D:
                                        return rK(e, i);
                                    case v:
                                        return new s;
                                    case y:
                                    case E:
                                        return new s(e);
                                    case w:
                                        return (n = new e.constructor(e.source,eo.exec(e))).lastIndex = e.lastIndex,
                                        n;
                                    case b:
                                        return new s;
                                    case I:
                                        return ig ? eI(ig.call(e)) : {}
                                    }
                                }(e, $, c)
                            }
                        }
                        o || (o = new iO);
                        var H = o.get(e);
                        if (H)
                            return H;
                        o.set(e, a),
                        s6(e) ? e.forEach(function(i) {
                            a.add(ik(i, t, r, i, e, o))
                        }) : sX(e) && e.forEach(function(i, n) {
                            a.set(n, ik(i, t, r, n, e, o))
                        });
                        var V = f ? l ? nf : np : l ? o_ : om
                          , K = _ ? i : V(e);
                        return ta(K || e, function(i, n) {
                            K && (i = e[n = i]),
                            iT(a, n, ik(i, t, r, n, e, o))
                        }),
                        a
                    }
                    function i$(e, t, r) {
                        var n = r.length;
                        if (null == e)
                            return !n;
                        for (e = eI(e); n--; ) {
                            var s = r[n]
                              , o = t[s]
                              , a = e[s];
                            if (a === i && !(s in e) || !o(a))
                                return !1
                        }
                        return !0
                    }
                    function iU(e, t, n) {
                        if ("function" != typeof e)
                            throw new eO(r);
                        return nM(function() {
                            e.apply(i, n)
                        }, t)
                    }
                    function iH(e, t, i, r) {
                        var n = -1
                          , s = tu
                          , o = !0
                          , a = e.length
                          , c = []
                          , h = t.length;
                        if (!a)
                            return c;
                        i && (t = tf(t, tN(i))),
                        r ? (s = tp,
                        o = !1) : t.length >= 200 && (s = tq,
                        o = !1,
                        t = new iS(t));
                        e: for (; ++n < a; ) {
                            var l = e[n]
                              , u = null == i ? l : i(l);
                            if (l = r || 0 !== l ? l : 0,
                            o && u == u) {
                                for (var p = h; p--; )
                                    if (t[p] === u)
                                        continue e;
                                c.push(l)
                            } else
                                s(t, u, r) || c.push(l)
                        }
                        return c
                    }
                    iy.templateSettings = {
                        escape: V,
                        evaluate: K,
                        interpolate: B,
                        variable: "",
                        imports: {
                            _: iy
                        }
                    },
                    iy.prototype = i_.prototype,
                    iy.prototype.constructor = iy,
                    iw.prototype = im(i_.prototype),
                    iw.prototype.constructor = iw,
                    ib.prototype = im(i_.prototype),
                    ib.prototype.constructor = ib,
                    iE.prototype.clear = function() {
                        this.__data__ = is ? is(null) : {},
                        this.size = 0
                    }
                    ,
                    iE.prototype.delete = function(e) {
                        var t = this.has(e) && delete this.__data__[e];
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    iE.prototype.get = function(e) {
                        var t = this.__data__;
                        if (is) {
                            var r = t[e];
                            return r === n ? i : r
                        }
                        return eT.call(t, e) ? t[e] : i
                    }
                    ,
                    iE.prototype.has = function(e) {
                        var t = this.__data__;
                        return is ? t[e] !== i : eT.call(t, e)
                    }
                    ,
                    iE.prototype.set = function(e, t) {
                        var r = this.__data__;
                        return this.size += this.has(e) ? 0 : 1,
                        r[e] = is && t === i ? n : t,
                        this
                    }
                    ,
                    iI.prototype.clear = function() {
                        this.__data__ = [],
                        this.size = 0
                    }
                    ,
                    iI.prototype.delete = function(e) {
                        var t = this.__data__
                          , i = iq(t, e);
                        return !(i < 0) && (i == t.length - 1 ? t.pop() : e5.call(t, i, 1),
                        --this.size,
                        !0)
                    }
                    ,
                    iI.prototype.get = function(e) {
                        var t = this.__data__
                          , r = iq(t, e);
                        return r < 0 ? i : t[r][1]
                    }
                    ,
                    iI.prototype.has = function(e) {
                        return iq(this.__data__, e) > -1
                    }
                    ,
                    iI.prototype.set = function(e, t) {
                        var i = this.__data__
                          , r = iq(i, e);
                        return r < 0 ? (++this.size,
                        i.push([e, t])) : i[r][1] = t,
                        this
                    }
                    ,
                    iP.prototype.clear = function() {
                        this.size = 0,
                        this.__data__ = {
                            hash: new iE,
                            map: new (ie || iI),
                            string: new iE
                        }
                    }
                    ,
                    iP.prototype.delete = function(e) {
                        var t = nm(this, e).delete(e);
                        return this.size -= t ? 1 : 0,
                        t
                    }
                    ,
                    iP.prototype.get = function(e) {
                        return nm(this, e).get(e)
                    }
                    ,
                    iP.prototype.has = function(e) {
                        return nm(this, e).has(e)
                    }
                    ,
                    iP.prototype.set = function(e, t) {
                        var i = nm(this, e)
                          , r = i.size;
                        return i.set(e, t),
                        this.size += i.size == r ? 0 : 1,
                        this
                    }
                    ,
                    iS.prototype.add = iS.prototype.push = function(e) {
                        return this.__data__.set(e, n),
                        this
                    }
                    ,
                    iS.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    iO.prototype.clear = function() {
                        this.__data__ = new iI,
                        this.size = 0
                    }
                    ,
                    iO.prototype.delete = function(e) {
                        var t = this.__data__
                          , i = t.delete(e);
                        return this.size = t.size,
                        i
                    }
                    ,
                    iO.prototype.get = function(e) {
                        return this.__data__.get(e)
                    }
                    ,
                    iO.prototype.has = function(e) {
                        return this.__data__.has(e)
                    }
                    ,
                    iO.prototype.set = function(e, t) {
                        var i = this.__data__;
                        if (i instanceof iI) {
                            var r = i.__data__;
                            if (!ie || r.length < 199)
                                return r.push([e, t]),
                                this.size = ++i.size,
                                this;
                            i = this.__data__ = new iP(r)
                        }
                        return i.set(e, t),
                        this.size = i.size,
                        this
                    }
                    ;
                    var iV = rY(iQ)
                      , iK = rY(iY, !0);
                    function iB(e, t) {
                        var i = !0;
                        return iV(e, function(e, r, n) {
                            return i = !!t(e, r, n)
                        }),
                        i
                    }
                    function iF(e, t, r) {
                        for (var n = -1, s = e.length; ++n < s; ) {
                            var o = e[n]
                              , a = t(o);
                            if (null != a && (c === i ? a == a && !s2(a) : r(a, c)))
                                var c = a
                                  , h = o
                        }
                        return h
                    }
                    function iZ(e, t) {
                        var i = [];
                        return iV(e, function(e, r, n) {
                            t(e, r, n) && i.push(e)
                        }),
                        i
                    }
                    function iJ(e, t, i, r, n) {
                        var s = -1
                          , o = e.length;
                        for (i || (i = nO),
                        n || (n = []); ++s < o; ) {
                            var a = e[s];
                            t > 0 && i(a) ? t > 1 ? iJ(a, t - 1, i, r, n) : td(n, a) : r || (n[n.length] = a)
                        }
                        return n
                    }
                    var iW = rX()
                      , iG = rX(!0);
                    function iQ(e, t) {
                        return e && iW(e, t, om)
                    }
                    function iY(e, t) {
                        return e && iG(e, t, om)
                    }
                    function iX(e, t) {
                        return tl(t, function(t) {
                            return sJ(e[t])
                        })
                    }
                    function i0(e, t) {
                        t = rk(t, e);
                        for (var r = 0, n = t.length; null != e && r < n; )
                            e = e[nK(t[r++])];
                        return r && r == n ? e : i
                    }
                    function i1(e, t, i) {
                        var r = t(e);
                        return sU(e) ? r : td(r, i(e))
                    }
                    function i5(e) {
                        return null == e ? e === i ? "[object Undefined]" : "[object Null]" : e8 && e8 in eI(e) ? function(e) {
                            var t = eT.call(e, e8)
                              , r = e[e8];
                            try {
                                e[e8] = i;
                                var n = !0
                            } catch {}
                            var s = eD.call(e);
                            return n && (t ? e[e8] = r : delete e[e8]),
                            s
                        }(e) : eD.call(e)
                    }
                    function i6(e, t) {
                        return e > t
                    }
                    function i3(e, t) {
                        return null != e && eT.call(e, t)
                    }
                    function i2(e, t) {
                        return null != e && t in eI(e)
                    }
                    function i4(e, t, r) {
                        for (var n = r ? tp : tu, s = e[0].length, o = e.length, a = o, c = em(o), h = 1 / 0, l = []; a--; ) {
                            var u = e[a];
                            a && t && (u = tf(u, tN(t))),
                            h = t3(u.length, h),
                            c[a] = !r && (t || s >= 120 && u.length >= 120) ? new iS(a && u) : i
                        }
                        u = e[0];
                        var p = -1
                          , f = c[0];
                        e: for (; ++p < s && l.length < h; ) {
                            var d = u[p]
                              , g = t ? t(d) : d;
                            if (d = r || 0 !== d ? d : 0,
                            !(f ? tq(f, g) : n(l, g, r))) {
                                for (a = o; --a; ) {
                                    var v = c[a];
                                    if (!(v ? tq(v, g) : n(e[a], g, r)))
                                        continue e
                                }
                                f && f.push(g),
                                l.push(d)
                            }
                        }
                        return l
                    }
                    function i8(e, t, r) {
                        t = rk(t, e);
                        var n = null == (e = nD(e, t)) ? e : e[nK(n6(t))];
                        return null == n ? i : ts(n, e, r)
                    }
                    function i7(e) {
                        return sY(e) && i5(e) == h
                    }
                    function i9(e, t, r, n, s) {
                        return e === t || (null != e && null != t && (sY(e) || sY(t)) ? function(e, t, r, n, s, o) {
                            var a = sU(e)
                              , c = sU(t)
                              , d = a ? l : nI(e)
                              , g = c ? l : nI(t);
                            d = d == h ? m : d,
                            g = g == h ? m : g;
                            var _ = d == m
                              , P = g == m
                              , R = d == g;
                            if (R && sB(e)) {
                                if (!sB(t))
                                    return !1;
                                a = !0,
                                _ = !1
                            }
                            if (R && !_)
                                return o || (o = new iO),
                                a || s4(e) ? nl(e, t, r, n, s, o) : function(e, t, i, r, n, s, o) {
                                    switch (i) {
                                    case O:
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                            break;
                                        e = e.buffer,
                                        t = t.buffer;
                                    case S:
                                        return !(e.byteLength != t.byteLength || !s(new eU(e), new eU(t)));
                                    case u:
                                    case p:
                                    case y:
                                        return sz(+e, +t);
                                    case f:
                                        return e.name == t.name && e.message == t.message;
                                    case w:
                                    case E:
                                        return e == t + "";
                                    case v:
                                        var a = t$;
                                    case b:
                                        var c = 1 & r;
                                        if (a || (a = tV),
                                        e.size != t.size && !c)
                                            break;
                                        var h = o.get(e);
                                        if (h)
                                            return h == t;
                                        r |= 2,
                                        o.set(e, t);
                                        var l = nl(a(e), a(t), r, n, s, o);
                                        return o.delete(e),
                                        l;
                                    case I:
                                        if (ig)
                                            return ig.call(e) == ig.call(t)
                                    }
                                    return !1
                                }(e, t, d, r, n, s, o);
                            if (!(1 & r)) {
                                var x = _ && eT.call(e, "__wrapped__")
                                  , C = P && eT.call(t, "__wrapped__");
                                if (x || C) {
                                    var A = x ? e.value() : e
                                      , N = C ? t.value() : t;
                                    return o || (o = new iO),
                                    s(A, N, r, n, o)
                                }
                            }
                            return !!R && (o || (o = new iO),
                            function(e, t, r, n, s, o) {
                                var a = 1 & r
                                  , c = np(e)
                                  , h = c.length;
                                if (h != np(t).length && !a)
                                    return !1;
                                for (var l = h; l--; ) {
                                    var u = c[l];
                                    if (!(a ? u in t : eT.call(t, u)))
                                        return !1
                                }
                                var p = o.get(e)
                                  , f = o.get(t);
                                if (p && f)
                                    return p == t && f == e;
                                var d = !0;
                                o.set(e, t),
                                o.set(t, e);
                                for (var g = a; ++l < h; ) {
                                    var v = e[u = c[l]]
                                      , y = t[u];
                                    if (n)
                                        var m = a ? n(y, v, u, t, e, o) : n(v, y, u, e, t, o);
                                    if (!(m === i ? v === y || s(v, y, r, n, o) : m)) {
                                        d = !1;
                                        break
                                    }
                                    g || (g = "constructor" == u)
                                }
                                if (d && !g) {
                                    var _ = e.constructor
                                      , w = t.constructor;
                                    _ != w && "constructor"in e && "constructor"in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof w && w instanceof w) && (d = !1)
                                }
                                return o.delete(e),
                                o.delete(t),
                                d
                            }(e, t, r, n, s, o))
                        }(e, t, r, n, i9, s) : e != e && t != t)
                    }
                    function re(e, t, r, n) {
                        var s = r.length
                          , o = s
                          , a = !n;
                        if (null == e)
                            return !o;
                        for (e = eI(e); s--; ) {
                            var c = r[s];
                            if (a && c[2] ? c[1] !== e[c[0]] : !(c[0]in e))
                                return !1
                        }
                        for (; ++s < o; ) {
                            var h = (c = r[s])[0]
                              , l = e[h]
                              , u = c[1];
                            if (a && c[2]) {
                                if (l === i && !(h in e))
                                    return !1
                            } else {
                                var p = new iO;
                                if (n)
                                    var f = n(l, u, h, e, t, p);
                                if (!(f === i ? i9(u, l, 3, n, p) : f))
                                    return !1
                            }
                        }
                        return !0
                    }
                    function rt(e) {
                        return !(!sQ(e) || ej && ej in e) && (sJ(e) ? eM : eh).test(nB(e))
                    }
                    function ri(e) {
                        return "function" == typeof e ? e : null == e ? oK : "object" == typeof e ? sU(e) ? ra(e[0], e[1]) : ro(e) : oX(e)
                    }
                    function rr(e) {
                        if (!nT(e))
                            return t5(e);
                        var t = [];
                        for (var i in eI(e))
                            eT.call(e, i) && "constructor" != i && t.push(i);
                        return t
                    }
                    function rn(e, t) {
                        return e < t
                    }
                    function rs(e, t) {
                        var i = -1
                          , r = sV(e) ? em(e.length) : [];
                        return iV(e, function(e, n, s) {
                            r[++i] = t(e, n, s)
                        }),
                        r
                    }
                    function ro(e) {
                        var t = n_(e);
                        return 1 == t.length && t[0][2] ? nq(t[0][0], t[0][1]) : function(i) {
                            return i === e || re(i, e, t)
                        }
                    }
                    function ra(e, t) {
                        var r;
                        return nC(e) && (r = t) == r && !sQ(r) ? nq(nK(e), t) : function(r) {
                            var n = of(r, e);
                            return n === i && n === t ? od(r, e) : i9(t, n, 3)
                        }
                    }
                    function rc(e, t, r, n, s) {
                        e !== t && iW(t, function(o, a) {
                            if (s || (s = new iO),
                            sQ(o))
                                !function(e, t, r, n, s, o, a) {
                                    var c = nL(e, r)
                                      , h = nL(t, r)
                                      , l = a.get(h);
                                    if (l) {
                                        iN(e, r, l);
                                        return
                                    }
                                    var u = o ? o(c, h, r + "", e, t, a) : i
                                      , p = u === i;
                                    if (p) {
                                        var f = sU(h)
                                          , d = !f && sB(h)
                                          , g = !f && !d && s4(h);
                                        u = h,
                                        f || d || g ? sU(c) ? u = c : sK(c) ? u = rJ(c) : d ? (p = !1,
                                        u = rH(h, !0)) : g ? (p = !1,
                                        u = rK(h, !0)) : u = [] : s1(h) || s$(h) ? (u = c,
                                        s$(c) ? u = on(c) : (!sQ(c) || sJ(c)) && (u = nS(h))) : p = !1
                                    }
                                    p && (a.set(h, u),
                                    s(u, h, n, o, a),
                                    a.delete(h)),
                                    iN(e, r, u)
                                }(e, t, a, r, rc, n, s);
                            else {
                                var c = n ? n(nL(e, a), o, a + "", e, t, s) : i;
                                c === i && (c = o),
                                iN(e, a, c)
                            }
                        }, o_)
                    }
                    function rh(e, t) {
                        var r = e.length;
                        if (r)
                            return nR(t += t < 0 ? r : 0, r) ? e[t] : i
                    }
                    function rl(e, t, i) {
                        t = t.length ? tf(t, function(e) {
                            return sU(e) ? function(t) {
                                return i0(t, 1 === e.length ? e[0] : e)
                            }
                            : e
                        }) : [oK];
                        var r = -1;
                        return t = tf(t, tN(ny())),
                        function(e, t) {
                            var i = e.length;
                            for (e.sort(t); i--; )
                                e[i] = e[i].value;
                            return e
                        }(rs(e, function(e, i, n) {
                            return {
                                criteria: tf(t, function(t) {
                                    return t(e)
                                }),
                                index: ++r,
                                value: e
                            }
                        }), function(e, t) {
                            return function(e, t, i) {
                                for (var r = -1, n = e.criteria, s = t.criteria, o = n.length, a = i.length; ++r < o; ) {
                                    var c = rB(n[r], s[r]);
                                    if (c) {
                                        if (r >= a)
                                            return c;
                                        return c * ("desc" == i[r] ? -1 : 1)
                                    }
                                }
                                return e.index - t.index
                            }(e, t, i)
                        })
                    }
                    function ru(e, t, i) {
                        for (var r = -1, n = t.length, s = {}; ++r < n; ) {
                            var o = t[r]
                              , a = i0(e, o);
                            i(a, o) && r_(s, rk(o, e), a)
                        }
                        return s
                    }
                    function rp(e, t, i, r) {
                        var n = r ? tE : tb
                          , s = -1
                          , o = t.length
                          , a = e;
                        for (e === t && (t = rJ(t)),
                        i && (a = tf(e, tN(i))); ++s < o; )
                            for (var c = 0, h = t[s], l = i ? i(h) : h; (c = n(a, l, c, r)) > -1; )
                                a !== e && e5.call(a, c, 1),
                                e5.call(e, c, 1);
                        return e
                    }
                    function rf(e, t) {
                        for (var i = e ? t.length : 0, r = i - 1; i--; ) {
                            var n = t[i];
                            if (i == r || n !== s) {
                                var s = n;
                                nR(n) ? e5.call(e, n, 1) : rN(e, n)
                            }
                        }
                        return e
                    }
                    function rd(e, t) {
                        return e + tQ(t8() * (t - e + 1))
                    }
                    function rg(e, t) {
                        var i = "";
                        if (!e || t < 1 || t > 9007199254740991)
                            return i;
                        do
                            t % 2 && (i += e),
                            (t = tQ(t / 2)) && (e += e);
                        while (t);
                        return i
                    }
                    function rv(e, t) {
                        return nk(nj(e, t, oK), e + "")
                    }
                    function ry(e) {
                        return ix(oR(e))
                    }
                    function rm(e, t) {
                        var i = oR(e);
                        return nH(i, iM(t, 0, i.length))
                    }
                    function r_(e, t, r, n) {
                        if (!sQ(e))
                            return e;
                        t = rk(t, e);
                        for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o; ) {
                            var h = nK(t[s])
                              , l = r;
                            if ("__proto__" === h || "constructor" === h || "prototype" === h)
                                break;
                            if (s != a) {
                                var u = c[h];
                                (l = n ? n(u, h, c) : i) === i && (l = sQ(u) ? u : nR(t[s + 1]) ? [] : {})
                            }
                            iT(c, h, l),
                            c = c[h]
                        }
                        return e
                    }
                    var rw = io ? function(e, t) {
                        return io.set(e, t),
                        e
                    }
                    : oK
                      , rb = e7 ? function(e, t) {
                        return e7(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: oU(t),
                            writable: !0
                        })
                    }
                    : oK;
                    function rE(e) {
                        return nH(oR(e))
                    }
                    function rI(e, t, i) {
                        var r = -1
                          , n = e.length;
                        t < 0 && (t = -t > n ? 0 : n + t),
                        (i = i > n ? n : i) < 0 && (i += n),
                        n = t > i ? 0 : i - t >>> 0,
                        t >>>= 0;
                        for (var s = em(n); ++r < n; )
                            s[r] = e[r + t];
                        return s
                    }
                    function rP(e, t) {
                        var i;
                        return iV(e, function(e, r, n) {
                            return !(i = t(e, r, n))
                        }),
                        !!i
                    }
                    function rS(e, t, i) {
                        var r = 0
                          , n = null == e ? r : e.length;
                        if ("number" == typeof t && t == t && n <= 2147483647) {
                            for (; r < n; ) {
                                var s = r + n >>> 1
                                  , o = e[s];
                                null !== o && !s2(o) && (i ? o <= t : o < t) ? r = s + 1 : n = s
                            }
                            return n
                        }
                        return rO(e, t, oK, i)
                    }
                    function rO(e, t, r, n) {
                        var s = 0
                          , o = null == e ? 0 : e.length;
                        if (0 === o)
                            return 0;
                        t = r(t);
                        for (var a = t != t, c = null === t, h = s2(t), l = t === i; s < o; ) {
                            var u = tQ((s + o) / 2)
                              , p = r(e[u])
                              , f = p !== i
                              , d = null === p
                              , g = p == p
                              , v = s2(p);
                            if (a)
                                var y = n || g;
                            else
                                y = l ? g && (n || f) : c ? g && f && (n || !d) : h ? g && f && !d && (n || !v) : !d && !v && (n ? p <= t : p < t);
                            y ? s = u + 1 : o = u
                        }
                        return t3(o, 4294967294)
                    }
                    function rR(e, t) {
                        for (var i = -1, r = e.length, n = 0, s = []; ++i < r; ) {
                            var o = e[i]
                              , a = t ? t(o) : o;
                            if (!i || !sz(a, c)) {
                                var c = a;
                                s[n++] = 0 === o ? 0 : o
                            }
                        }
                        return s
                    }
                    function rx(e) {
                        return "number" == typeof e ? e : s2(e) ? a : +e
                    }
                    function rC(e) {
                        if ("string" == typeof e)
                            return e;
                        if (sU(e))
                            return tf(e, rC) + "";
                        if (s2(e))
                            return iv ? iv.call(e) : "";
                        var t = e + "";
                        return "0" == t && 1 / e == -o ? "-0" : t
                    }
                    function rA(e, t, i) {
                        var r = -1
                          , n = tu
                          , s = e.length
                          , o = !0
                          , a = []
                          , c = a;
                        if (i)
                            o = !1,
                            n = tp;
                        else if (s >= 200) {
                            var h = t ? null : nn(e);
                            if (h)
                                return tV(h);
                            o = !1,
                            n = tq,
                            c = new iS
                        } else
                            c = t ? [] : a;
                        e: for (; ++r < s; ) {
                            var l = e[r]
                              , u = t ? t(l) : l;
                            if (l = i || 0 !== l ? l : 0,
                            o && u == u) {
                                for (var p = c.length; p--; )
                                    if (c[p] === u)
                                        continue e;
                                t && c.push(u),
                                a.push(l)
                            } else
                                n(c, u, i) || (c !== a && c.push(u),
                                a.push(l))
                        }
                        return a
                    }
                    function rN(e, t) {
                        return t = rk(t, e),
                        null == (e = nD(e, t)) || delete e[nK(n6(t))]
                    }
                    function rT(e, t, i, r) {
                        return r_(e, t, i(i0(e, t)), r)
                    }
                    function rq(e, t, i, r) {
                        for (var n = e.length, s = r ? n : -1; (r ? s-- : ++s < n) && t(e[s], s, e); )
                            ;
                        return i ? rI(e, r ? 0 : s, r ? s + 1 : n) : rI(e, r ? s + 1 : 0, r ? n : s)
                    }
                    function rj(e, t) {
                        var i = e;
                        return i instanceof ib && (i = i.value()),
                        tg(t, function(e, t) {
                            return t.func.apply(t.thisArg, td([e], t.args))
                        }, i)
                    }
                    function rD(e, t, i) {
                        var r = e.length;
                        if (r < 2)
                            return r ? rA(e[0]) : [];
                        for (var n = -1, s = em(r); ++n < r; )
                            for (var o = e[n], a = -1; ++a < r; )
                                a != n && (s[n] = iH(s[n] || o, e[a], t, i));
                        return rA(iJ(s, 1), t, i)
                    }
                    function rL(e, t, r) {
                        for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s; ) {
                            var c = n < o ? t[n] : i;
                            r(a, e[n], c)
                        }
                        return a
                    }
                    function rz(e) {
                        return sK(e) ? e : []
                    }
                    function rM(e) {
                        return "function" == typeof e ? e : oK
                    }
                    function rk(e, t) {
                        return sU(e) ? e : nC(e, t) ? [e] : nV(os(e))
                    }
                    function r$(e, t, r) {
                        var n = e.length;
                        return r = r === i ? n : r,
                        !t && r >= n ? e : rI(e, t, r)
                    }
                    var rU = tm || function(e) {
                        return e6.clearTimeout(e)
                    }
                    ;
                    function rH(e, t) {
                        if (t)
                            return e.slice();
                        var i = e.length
                          , r = eK ? eK(i) : new e.constructor(i);
                        return e.copy(r),
                        r
                    }
                    function rV(e) {
                        var t = new e.constructor(e.byteLength);
                        return new eU(t).set(new eU(e)),
                        t
                    }
                    function rK(e, t) {
                        var i = t ? rV(e.buffer) : e.buffer;
                        return new e.constructor(i,e.byteOffset,e.length)
                    }
                    function rB(e, t) {
                        if (e !== t) {
                            var r = e !== i
                              , n = null === e
                              , s = e == e
                              , o = s2(e)
                              , a = t !== i
                              , c = null === t
                              , h = t == t
                              , l = s2(t);
                            if (!c && !l && !o && e > t || o && a && h && !c && !l || n && a && h || !r && h || !s)
                                return 1;
                            if (!n && !o && !l && e < t || l && r && s && !n && !o || c && r && s || !a && s || !h)
                                return -1
                        }
                        return 0
                    }
                    function rF(e, t, i, r) {
                        for (var n = -1, s = e.length, o = i.length, a = -1, c = t.length, h = t6(s - o, 0), l = em(c + h), u = !r; ++a < c; )
                            l[a] = t[a];
                        for (; ++n < o; )
                            (u || n < s) && (l[i[n]] = e[n]);
                        for (; h--; )
                            l[a++] = e[n++];
                        return l
                    }
                    function rZ(e, t, i, r) {
                        for (var n = -1, s = e.length, o = -1, a = i.length, c = -1, h = t.length, l = t6(s - a, 0), u = em(l + h), p = !r; ++n < l; )
                            u[n] = e[n];
                        for (var f = n; ++c < h; )
                            u[f + c] = t[c];
                        for (; ++o < a; )
                            (p || n < s) && (u[f + i[o]] = e[n++]);
                        return u
                    }
                    function rJ(e, t) {
                        var i = -1
                          , r = e.length;
                        for (t || (t = em(r)); ++i < r; )
                            t[i] = e[i];
                        return t
                    }
                    function rW(e, t, r, n) {
                        var s = !r;
                        r || (r = {});
                        for (var o = -1, a = t.length; ++o < a; ) {
                            var c = t[o]
                              , h = n ? n(r[c], e[c], c, r, e) : i;
                            h === i && (h = e[c]),
                            s ? iL(r, c, h) : iT(r, c, h)
                        }
                        return r
                    }
                    function rG(e, t) {
                        return function(i, r) {
                            var n = sU(i) ? to : ij
                              , s = t ? t() : {};
                            return n(i, e, ny(r, 2), s)
                        }
                    }
                    function rQ(e) {
                        return rv(function(t, r) {
                            var n = -1
                              , s = r.length
                              , o = s > 1 ? r[s - 1] : i
                              , a = s > 2 ? r[2] : i;
                            for (o = e.length > 3 && "function" == typeof o ? (s--,
                            o) : i,
                            a && nx(r[0], r[1], a) && (o = s < 3 ? i : o,
                            s = 1),
                            t = eI(t); ++n < s; ) {
                                var c = r[n];
                                c && e(t, c, n, o)
                            }
                            return t
                        })
                    }
                    function rY(e, t) {
                        return function(i, r) {
                            if (null == i)
                                return i;
                            if (!sV(i))
                                return e(i, r);
                            for (var n = i.length, s = t ? n : -1, o = eI(i); (t ? s-- : ++s < n) && !1 !== r(o[s], s, o); )
                                ;
                            return i
                        }
                    }
                    function rX(e) {
                        return function(t, i, r) {
                            for (var n = -1, s = eI(t), o = r(t), a = o.length; a--; ) {
                                var c = o[e ? a : ++n];
                                if (!1 === i(s[c], c, s))
                                    break
                            }
                            return t
                        }
                    }
                    function r0(e) {
                        return function(t) {
                            var r = tk(t = os(t)) ? tB(t) : i
                              , n = r ? r$(r, 1).join("") : t.slice(1);
                            return (r ? r[0] : t.charAt(0))[e]() + n
                        }
                    }
                    function r1(e) {
                        return function(t) {
                            return tg(oM(oA(t).replace(eH, "")), e, "")
                        }
                    }
                    function r5(e) {
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0],t[1]);
                            case 3:
                                return new e(t[0],t[1],t[2]);
                            case 4:
                                return new e(t[0],t[1],t[2],t[3]);
                            case 5:
                                return new e(t[0],t[1],t[2],t[3],t[4]);
                            case 6:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                            case 7:
                                return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                            }
                            var i = im(e.prototype)
                              , r = e.apply(i, t);
                            return sQ(r) ? r : i
                        }
                    }
                    function r6(e) {
                        return function(t, r, n) {
                            var s = eI(t);
                            if (!sV(t)) {
                                var o = ny(r, 3);
                                t = om(t),
                                r = function(e) {
                                    return o(s[e], e, s)
                                }
                            }
                            var a = e(t, r, n);
                            return a > -1 ? s[o ? t[a] : a] : i
                        }
                    }
                    function r3(e) {
                        return nu(function(t) {
                            var n = t.length
                              , s = n
                              , o = iw.prototype.thru;
                            for (e && t.reverse(); s--; ) {
                                var a = t[s];
                                if ("function" != typeof a)
                                    throw new eO(r);
                                if (o && !c && "wrapper" == ng(a))
                                    var c = new iw([],!0)
                            }
                            for (s = c ? s : n; ++s < n; ) {
                                var h = ng(a = t[s])
                                  , l = "wrapper" == h ? nd(a) : i;
                                c = l && nA(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[ng(l[0])].apply(c, l[3]) : 1 == a.length && nA(a) ? c[h]() : c.thru(a)
                            }
                            return function() {
                                var e = arguments
                                  , i = e[0];
                                if (c && 1 == e.length && sU(i))
                                    return c.plant(i).value();
                                for (var r = 0, s = n ? t[r].apply(this, e) : i; ++r < n; )
                                    s = t[r].call(this, s);
                                return s
                            }
                        })
                    }
                    function r2(e, t, r, n, s, o, a, c, h, l) {
                        var u = 128 & t
                          , p = 1 & t
                          , f = 2 & t
                          , d = 24 & t
                          , g = 512 & t
                          , v = f ? i : r5(e);
                        return function y() {
                            for (var m = arguments.length, _ = em(m), w = m; w--; )
                                _[w] = arguments[w];
                            if (d)
                                var b = nv(y)
                                  , E = function(e, t) {
                                    for (var i = e.length, r = 0; i--; )
                                        e[i] === t && ++r;
                                    return r
                                }(_, b);
                            if (n && (_ = rF(_, n, s, d)),
                            o && (_ = rZ(_, o, a, d)),
                            m -= E,
                            d && m < l) {
                                var I = tH(_, b);
                                return ni(e, t, r2, y.placeholder, r, _, I, c, h, l - m)
                            }
                            var P = p ? r : this
                              , S = f ? P[e] : e;
                            return m = _.length,
                            c ? _ = function(e, t) {
                                for (var r = e.length, n = t3(t.length, r), s = rJ(e); n--; ) {
                                    var o = t[n];
                                    e[n] = nR(o, r) ? s[o] : i
                                }
                                return e
                            }(_, c) : g && m > 1 && _.reverse(),
                            u && h < m && (_.length = h),
                            this && this !== e6 && this instanceof y && (S = v || r5(S)),
                            S.apply(P, _)
                        }
                    }
                    function r4(e, t) {
                        return function(i, r) {
                            var n, s;
                            return n = t(r),
                            s = {},
                            iQ(i, function(t, i, r) {
                                e(s, n(t), i, r)
                            }),
                            s
                        }
                    }
                    function r8(e, t) {
                        return function(r, n) {
                            var s;
                            if (r === i && n === i)
                                return t;
                            if (r !== i && (s = r),
                            n !== i) {
                                if (s === i)
                                    return n;
                                "string" == typeof r || "string" == typeof n ? (r = rC(r),
                                n = rC(n)) : (r = rx(r),
                                n = rx(n)),
                                s = e(r, n)
                            }
                            return s
                        }
                    }
                    function r7(e) {
                        return nu(function(t) {
                            return t = tf(t, tN(ny())),
                            rv(function(i) {
                                var r = this;
                                return e(t, function(e) {
                                    return ts(e, r, i)
                                })
                            })
                        })
                    }
                    function r9(e, t) {
                        var r = (t = t === i ? " " : rC(t)).length;
                        if (r < 2)
                            return r ? rg(t, e) : t;
                        var n = rg(t, tG(e / tK(t)));
                        return tk(t) ? r$(tB(n), 0, e).join("") : n.slice(0, e)
                    }
                    function ne(e) {
                        return function(t, r, n) {
                            return n && "number" != typeof n && nx(t, r, n) && (r = n = i),
                            t = oe(t),
                            r === i ? (r = t,
                            t = 0) : r = oe(r),
                            n = n === i ? t < r ? 1 : -1 : oe(n),
                            function(e, t, i, r) {
                                for (var n = -1, s = t6(tG((t - e) / (i || 1)), 0), o = em(s); s--; )
                                    o[r ? s : ++n] = e,
                                    e += i;
                                return o
                            }(t, r, n, e)
                        }
                    }
                    function nt(e) {
                        return function(t, i) {
                            return "string" == typeof t && "string" == typeof i || (t = or(t),
                            i = or(i)),
                            e(t, i)
                        }
                    }
                    function ni(e, t, r, n, s, o, a, c, h, l) {
                        var u = 8 & t
                          , p = u ? a : i
                          , f = u ? i : a
                          , d = u ? o : i
                          , g = u ? i : o;
                        t |= u ? 32 : 64,
                        4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                        var v = [e, t, s, d, p, g, f, c, h, l]
                          , y = r.apply(i, v);
                        return nA(e) && nz(y, v),
                        y.placeholder = n,
                        n$(y, e, t)
                    }
                    function nr(e) {
                        var t = eE[e];
                        return function(e, i) {
                            if (e = or(e),
                            (i = null == i ? 0 : t3(ot(i), 292)) && t0(e)) {
                                var r = (os(e) + "e").split("e");
                                return +((r = (os(t(r[0] + "e" + (+r[1] + i))) + "e").split("e"))[0] + "e" + (+r[1] - i))
                            }
                            return t(e)
                        }
                    }
                    var nn = ii && 1 / tV(new ii([, -0]))[1] == o ? function(e) {
                        return new ii(e)
                    }
                    : oW;
                    function ns(e) {
                        return function(t) {
                            var i, r, n = nI(t);
                            return n == v ? t$(t) : n == b ? (i = -1,
                            r = Array(t.size),
                            t.forEach(function(e) {
                                r[++i] = [e, e]
                            }),
                            r) : tf(e(t), function(e) {
                                return [e, t[e]]
                            })
                        }
                    }
                    function no(e, t, n, o, a, c, h, l) {
                        var u = 2 & t;
                        if (!u && "function" != typeof e)
                            throw new eO(r);
                        var p = o ? o.length : 0;
                        if (p || (t &= -97,
                        o = a = i),
                        h = h === i ? h : t6(ot(h), 0),
                        l = l === i ? l : ot(l),
                        p -= a ? a.length : 0,
                        64 & t) {
                            var f = o
                              , d = a;
                            o = a = i
                        }
                        var g = u ? i : nd(e)
                          , v = [e, t, n, o, a, f, d, c, h, l];
                        if (g && function(e, t) {
                            var i = e[1]
                              , r = t[1]
                              , n = i | r
                              , o = n < 131
                              , a = 128 == r && 8 == i || 128 == r && 256 == i && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == i;
                            if (o || a) {
                                1 & r && (e[2] = t[2],
                                n |= 1 & i ? 0 : 4);
                                var c = t[3];
                                if (c) {
                                    var h = e[3];
                                    e[3] = h ? rF(h, c, t[4]) : c,
                                    e[4] = h ? tH(e[3], s) : t[4]
                                }
                                (c = t[5]) && (h = e[5],
                                e[5] = h ? rZ(h, c, t[6]) : c,
                                e[6] = h ? tH(e[5], s) : t[6]),
                                (c = t[7]) && (e[7] = c),
                                128 & r && (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])),
                                null == e[9] && (e[9] = t[9]),
                                e[0] = t[0],
                                e[1] = n
                            }
                        }(v, g),
                        e = v[0],
                        t = v[1],
                        n = v[2],
                        o = v[3],
                        a = v[4],
                        (l = v[9] = v[9] === i ? u ? 0 : e.length : t6(v[9] - p, 0)) || !(24 & t) || (t &= -25),
                        t && 1 != t)
                            8 == t || 16 == t ? (y = e,
                            m = t,
                            _ = l,
                            w = r5(y),
                            T = function e() {
                                for (var t = arguments.length, r = em(t), n = t, s = nv(e); n--; )
                                    r[n] = arguments[n];
                                var o = t < 3 && r[0] !== s && r[t - 1] !== s ? [] : tH(r, s);
                                return (t -= o.length) < _ ? ni(y, m, r2, e.placeholder, i, r, o, i, i, _ - t) : ts(this && this !== e6 && this instanceof e ? w : y, this, r)
                            }
                            ) : 32 != t && 33 != t || a.length ? T = r2.apply(i, v) : (b = e,
                            E = t,
                            I = n,
                            P = o,
                            S = 1 & E,
                            O = r5(b),
                            T = function e() {
                                for (var t = -1, i = arguments.length, r = -1, n = P.length, s = em(n + i), o = this && this !== e6 && this instanceof e ? O : b; ++r < n; )
                                    s[r] = P[r];
                                for (; i--; )
                                    s[r++] = arguments[++t];
                                return ts(o, S ? I : this, s)
                            }
                            );
                        else
                            var y, m, _, w, b, E, I, P, S, O, R, x, C, A, N, T = (R = e,
                            x = t,
                            C = n,
                            A = 1 & x,
                            N = r5(R),
                            function e() {
                                return (this && this !== e6 && this instanceof e ? N : R).apply(A ? C : this, arguments)
                            }
                            );
                        return n$((g ? rw : nz)(T, v), e, t)
                    }
                    function na(e, t, r, n) {
                        return e === i || sz(e, eC[r]) && !eT.call(n, r) ? t : e
                    }
                    function nc(e, t, r, n, s, o) {
                        return sQ(e) && sQ(t) && (o.set(t, e),
                        rc(e, t, i, nc, o),
                        o.delete(t)),
                        e
                    }
                    function nh(e) {
                        return s1(e) ? i : e
                    }
                    function nl(e, t, r, n, s, o) {
                        var a = 1 & r
                          , c = e.length
                          , h = t.length;
                        if (c != h && !(a && h > c))
                            return !1;
                        var l = o.get(e)
                          , u = o.get(t);
                        if (l && u)
                            return l == t && u == e;
                        var p = -1
                          , f = !0
                          , d = 2 & r ? new iS : i;
                        for (o.set(e, t),
                        o.set(t, e); ++p < c; ) {
                            var g = e[p]
                              , v = t[p];
                            if (n)
                                var y = a ? n(v, g, p, t, e, o) : n(g, v, p, e, t, o);
                            if (y !== i) {
                                if (y)
                                    continue;
                                f = !1;
                                break
                            }
                            if (d) {
                                if (!ty(t, function(e, t) {
                                    if (!tq(d, t) && (g === e || s(g, e, r, n, o)))
                                        return d.push(t)
                                })) {
                                    f = !1;
                                    break
                                }
                            } else if (!(g === v || s(g, v, r, n, o))) {
                                f = !1;
                                break
                            }
                        }
                        return o.delete(e),
                        o.delete(t),
                        f
                    }
                    function nu(e) {
                        return nk(nj(e, i, nY), e + "")
                    }
                    function np(e) {
                        return i1(e, om, nb)
                    }
                    function nf(e) {
                        return i1(e, o_, nE)
                    }
                    var nd = io ? function(e) {
                        return io.get(e)
                    }
                    : oW;
                    function ng(e) {
                        for (var t = e.name + "", i = ia[t], r = eT.call(ia, t) ? i.length : 0; r--; ) {
                            var n = i[r]
                              , s = n.func;
                            if (null == s || s == e)
                                return n.name
                        }
                        return t
                    }
                    function nv(e) {
                        return (eT.call(iy, "placeholder") ? iy : e).placeholder
                    }
                    function ny() {
                        var e = iy.iteratee || oB;
                        return e = e === oB ? ri : e,
                        arguments.length ? e(arguments[0], arguments[1]) : e
                    }
                    function nm(e, t) {
                        var i, r = e.__data__;
                        return ("string" == (i = typeof t) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== t : null === t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                    }
                    function n_(e) {
                        for (var t = om(e), i = t.length; i--; ) {
                            var r = t[i]
                              , n = e[r];
                            t[i] = [r, n, n == n && !sQ(n)]
                        }
                        return t
                    }
                    function nw(e, t) {
                        var r = null == e ? i : e[t];
                        return rt(r) ? r : i
                    }
                    var nb = tY ? function(e) {
                        return null == e ? [] : tl(tY(e = eI(e)), function(t) {
                            return e1.call(e, t)
                        })
                    }
                    : o5
                      , nE = tY ? function(e) {
                        for (var t = []; e; )
                            td(t, nb(e)),
                            e = eF(e);
                        return t
                    }
                    : o5
                      , nI = i5;
                    function nP(e, t, i) {
                        t = rk(t, e);
                        for (var r = -1, n = t.length, s = !1; ++r < n; ) {
                            var o = nK(t[r]);
                            if (!(s = null != e && i(e, o)))
                                break;
                            e = e[o]
                        }
                        return s || ++r != n ? s : !!(n = null == e ? 0 : e.length) && sG(n) && nR(o, n) && (sU(e) || s$(e))
                    }
                    function nS(e) {
                        return "function" != typeof e.constructor || nT(e) ? {} : im(eF(e))
                    }
                    function nO(e) {
                        return sU(e) || s$(e) || !!(e3 && e && e[e3])
                    }
                    function nR(e, t) {
                        var i = typeof e;
                        return !!(t = t ?? 9007199254740991) && ("number" == i || "symbol" != i && eu.test(e)) && e > -1 && e % 1 == 0 && e < t
                    }
                    function nx(e, t, i) {
                        if (!sQ(i))
                            return !1;
                        var r = typeof t;
                        return ("number" == r ? !!(sV(i) && nR(t, i.length)) : "string" == r && t in i) && sz(i[t], e)
                    }
                    function nC(e, t) {
                        if (sU(e))
                            return !1;
                        var i = typeof e;
                        return !!("number" == i || "symbol" == i || "boolean" == i || null == e || s2(e)) || Z.test(e) || !F.test(e) || null != t && e in eI(t)
                    }
                    function nA(e) {
                        var t = ng(e)
                          , i = iy[t];
                        if ("function" != typeof i || !(t in ib.prototype))
                            return !1;
                        if (e === i)
                            return !0;
                        var r = nd(i);
                        return !!r && e === r[0]
                    }
                    (t9 && nI(new t9(new ArrayBuffer(1))) != O || ie && nI(new ie) != v || it && nI(it.resolve()) != _ || ii && nI(new ii) != b || ir && nI(new ir) != P) && (nI = function(e) {
                        var t = i5(e)
                          , r = t == m ? e.constructor : i
                          , n = r ? nB(r) : "";
                        if (n)
                            switch (n) {
                            case ic:
                                return O;
                            case ih:
                                return v;
                            case il:
                                return _;
                            case iu:
                                return b;
                            case ip:
                                return P
                            }
                        return t
                    }
                    );
                    var nN = eA ? sJ : o6;
                    function nT(e) {
                        var t = e && e.constructor
                          , i = "function" == typeof t && t.prototype || eC;
                        return e === i
                    }
                    function nq(e, t) {
                        return function(r) {
                            return null != r && r[e] === t && (t !== i || e in eI(r))
                        }
                    }
                    function nj(e, t, r) {
                        return t = t6(t === i ? e.length - 1 : t, 0),
                        function() {
                            for (var i = arguments, n = -1, s = t6(i.length - t, 0), o = em(s); ++n < s; )
                                o[n] = i[t + n];
                            n = -1;
                            for (var a = em(t + 1); ++n < t; )
                                a[n] = i[n];
                            return a[t] = r(o),
                            ts(e, this, a)
                        }
                    }
                    function nD(e, t) {
                        return t.length < 2 ? e : i0(e, rI(t, 0, -1))
                    }
                    function nL(e, t) {
                        if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t)
                            return e[t]
                    }
                    var nz = nU(rw)
                      , nM = tW || function(e, t) {
                        return e6.setTimeout(e, t)
                    }
                      , nk = nU(rb);
                    function n$(e, t, i) {
                        var r, n, s = t + "";
                        return nk(e, function(e, t) {
                            var i = t.length;
                            if (!i)
                                return e;
                            var r = i - 1;
                            return t[r] = (i > 1 ? "& " : "") + t[r],
                            t = t.join(i > 2 ? ", " : " "),
                            e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
                        }(s, (r = (n = s.match(ee)) ? n[1].split(et) : [],
                        ta(c, function(e) {
                            var t = "_." + e[0];
                            i & e[1] && !tu(r, t) && r.push(t)
                        }),
                        r.sort())))
                    }
                    function nU(e) {
                        var t = 0
                          , r = 0;
                        return function() {
                            var n = t2()
                              , s = 16 - (n - r);
                            if (r = n,
                            s > 0) {
                                if (++t >= 800)
                                    return arguments[0]
                            } else
                                t = 0;
                            return e.apply(i, arguments)
                        }
                    }
                    function nH(e, t) {
                        var r = -1
                          , n = e.length
                          , s = n - 1;
                        for (t = t === i ? n : t; ++r < t; ) {
                            var o = rd(r, s)
                              , a = e[o];
                            e[o] = e[r],
                            e[r] = a
                        }
                        return e.length = t,
                        e
                    }
                    var nV = (ev = (eg = sN(function(e) {
                        var t = [];
                        return 46 === e.charCodeAt(0) && t.push(""),
                        e.replace(J, function(e, i, r, n) {
                            t.push(r ? n.replace(en, "$1") : i || e)
                        }),
                        t
                    }, function(e) {
                        return 500 === ev.size && ev.clear(),
                        e
                    })).cache,
                    eg);
                    function nK(e) {
                        if ("string" == typeof e || s2(e))
                            return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -o ? "-0" : t
                    }
                    function nB(e) {
                        if (null != e) {
                            try {
                                return eN.call(e)
                            } catch {}
                            try {
                                return e + ""
                            } catch {}
                        }
                        return ""
                    }
                    function nF(e) {
                        if (e instanceof ib)
                            return e.clone();
                        var t = new iw(e.__wrapped__,e.__chain__);
                        return t.__actions__ = rJ(e.__actions__),
                        t.__index__ = e.__index__,
                        t.__values__ = e.__values__,
                        t
                    }
                    var nZ = rv(function(e, t) {
                        return sK(e) ? iH(e, iJ(t, 1, sK, !0)) : []
                    })
                      , nJ = rv(function(e, t) {
                        var r = n6(t);
                        return sK(r) && (r = i),
                        sK(e) ? iH(e, iJ(t, 1, sK, !0), ny(r, 2)) : []
                    })
                      , nW = rv(function(e, t) {
                        var r = n6(t);
                        return sK(r) && (r = i),
                        sK(e) ? iH(e, iJ(t, 1, sK, !0), i, r) : []
                    });
                    function nG(e, t, i) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var n = null == i ? 0 : ot(i);
                        return n < 0 && (n = t6(r + n, 0)),
                        tw(e, ny(t, 3), n)
                    }
                    function nQ(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        if (!n)
                            return -1;
                        var s = n - 1;
                        return r !== i && (s = ot(r),
                        s = r < 0 ? t6(n + s, 0) : t3(s, n - 1)),
                        tw(e, ny(t, 3), s, !0)
                    }
                    function nY(e) {
                        return (null == e ? 0 : e.length) ? iJ(e, 1) : []
                    }
                    function nX(e) {
                        return e && e.length ? e[0] : i
                    }
                    var n0 = rv(function(e) {
                        var t = tf(e, rz);
                        return t.length && t[0] === e[0] ? i4(t) : []
                    })
                      , n1 = rv(function(e) {
                        var t = n6(e)
                          , r = tf(e, rz);
                        return t === n6(r) ? t = i : r.pop(),
                        r.length && r[0] === e[0] ? i4(r, ny(t, 2)) : []
                    })
                      , n5 = rv(function(e) {
                        var t = n6(e)
                          , r = tf(e, rz);
                        return (t = "function" == typeof t ? t : i) && r.pop(),
                        r.length && r[0] === e[0] ? i4(r, i, t) : []
                    });
                    function n6(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? e[t - 1] : i
                    }
                    var n3 = rv(n2);
                    function n2(e, t) {
                        return e && e.length && t && t.length ? rp(e, t) : e
                    }
                    var n4 = nu(function(e, t) {
                        var i = null == e ? 0 : e.length
                          , r = iz(e, t);
                        return rf(e, tf(t, function(e) {
                            return nR(e, i) ? +e : e
                        }).sort(rB)),
                        r
                    });
                    function n8(e) {
                        return null == e ? e : t7.call(e)
                    }
                    var n7 = rv(function(e) {
                        return rA(iJ(e, 1, sK, !0))
                    })
                      , n9 = rv(function(e) {
                        var t = n6(e);
                        return sK(t) && (t = i),
                        rA(iJ(e, 1, sK, !0), ny(t, 2))
                    })
                      , se = rv(function(e) {
                        var t = n6(e);
                        return t = "function" == typeof t ? t : i,
                        rA(iJ(e, 1, sK, !0), i, t)
                    });
                    function st(e) {
                        if (!(e && e.length))
                            return [];
                        var t = 0;
                        return e = tl(e, function(e) {
                            if (sK(e))
                                return t = t6(e.length, t),
                                !0
                        }),
                        tC(t, function(t) {
                            return tf(e, tS(t))
                        })
                    }
                    function si(e, t) {
                        if (!(e && e.length))
                            return [];
                        var r = st(e);
                        return null == t ? r : tf(r, function(e) {
                            return ts(t, i, e)
                        })
                    }
                    var sr = rv(function(e, t) {
                        return sK(e) ? iH(e, t) : []
                    })
                      , sn = rv(function(e) {
                        return rD(tl(e, sK))
                    })
                      , ss = rv(function(e) {
                        var t = n6(e);
                        return sK(t) && (t = i),
                        rD(tl(e, sK), ny(t, 2))
                    })
                      , so = rv(function(e) {
                        var t = n6(e);
                        return t = "function" == typeof t ? t : i,
                        rD(tl(e, sK), i, t)
                    })
                      , sa = rv(st)
                      , sc = rv(function(e) {
                        var t = e.length
                          , r = t > 1 ? e[t - 1] : i;
                        return r = "function" == typeof r ? (e.pop(),
                        r) : i,
                        si(e, r)
                    });
                    function sh(e) {
                        var t = iy(e);
                        return t.__chain__ = !0,
                        t
                    }
                    function sl(e, t) {
                        return t(e)
                    }
                    var su = nu(function(e) {
                        var t = e.length
                          , r = t ? e[0] : 0
                          , n = this.__wrapped__
                          , s = function(t) {
                            return iz(t, e)
                        };
                        return !(t > 1) && !this.__actions__.length && n instanceof ib && nR(r) ? ((n = n.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                            func: sl,
                            args: [s],
                            thisArg: i
                        }),
                        new iw(n,this.__chain__).thru(function(e) {
                            return t && !e.length && e.push(i),
                            e
                        })) : this.thru(s)
                    })
                      , sp = rG(function(e, t, i) {
                        eT.call(e, i) ? ++e[i] : iL(e, i, 1)
                    })
                      , sf = r6(nG)
                      , sd = r6(nQ);
                    function sg(e, t) {
                        return (sU(e) ? ta : iV)(e, ny(t, 3))
                    }
                    function sv(e, t) {
                        return (sU(e) ? tc : iK)(e, ny(t, 3))
                    }
                    var sy = rG(function(e, t, i) {
                        eT.call(e, i) ? e[i].push(t) : iL(e, i, [t])
                    })
                      , sm = rv(function(e, t, i) {
                        var r = -1
                          , n = "function" == typeof t
                          , s = sV(e) ? em(e.length) : [];
                        return iV(e, function(e) {
                            s[++r] = n ? ts(t, e, i) : i8(e, t, i)
                        }),
                        s
                    })
                      , s_ = rG(function(e, t, i) {
                        iL(e, i, t)
                    });
                    function sw(e, t) {
                        return (sU(e) ? tf : rs)(e, ny(t, 3))
                    }
                    var sb = rG(function(e, t, i) {
                        e[i ? 0 : 1].push(t)
                    }, function() {
                        return [[], []]
                    })
                      , sE = rv(function(e, t) {
                        if (null == e)
                            return [];
                        var i = t.length;
                        return i > 1 && nx(e, t[0], t[1]) ? t = [] : i > 2 && nx(t[0], t[1], t[2]) && (t = [t[0]]),
                        rl(e, iJ(t, 1), [])
                    })
                      , sI = tO || function() {
                        return e6.Date.now()
                    }
                    ;
                    function sP(e, t, r) {
                        return t = r ? i : t,
                        t = e && null == t ? e.length : t,
                        no(e, 128, i, i, i, i, t)
                    }
                    function sS(e, t) {
                        var n;
                        if ("function" != typeof t)
                            throw new eO(r);
                        return e = ot(e),
                        function() {
                            return --e > 0 && (n = t.apply(this, arguments)),
                            e <= 1 && (t = i),
                            n
                        }
                    }
                    var sO = rv(function(e, t, i) {
                        var r = 1;
                        if (i.length) {
                            var n = tH(i, nv(sO));
                            r |= 32
                        }
                        return no(e, r, t, i, n)
                    })
                      , sR = rv(function(e, t, i) {
                        var r = 3;
                        if (i.length) {
                            var n = tH(i, nv(sR));
                            r |= 32
                        }
                        return no(t, r, e, i, n)
                    });
                    function sx(e, t, n) {
                        var s, o, a, c, h, l, u = 0, p = !1, f = !1, d = !0;
                        if ("function" != typeof e)
                            throw new eO(r);
                        function g(t) {
                            var r = s
                              , n = o;
                            return s = o = i,
                            u = t,
                            c = e.apply(n, r)
                        }
                        function v(e) {
                            var r = e - l
                              , n = e - u;
                            return l === i || r >= t || r < 0 || f && n >= a
                        }
                        function y() {
                            var e, i, r, n = sI();
                            if (v(n))
                                return m(n);
                            h = nM(y, (e = n - l,
                            i = n - u,
                            r = t - e,
                            f ? t3(r, a - i) : r))
                        }
                        function m(e) {
                            return h = i,
                            d && s ? g(e) : (s = o = i,
                            c)
                        }
                        function _() {
                            var e, r = sI(), n = v(r);
                            if (s = arguments,
                            o = this,
                            l = r,
                            n) {
                                if (h === i)
                                    return u = e = l,
                                    h = nM(y, t),
                                    p ? g(e) : c;
                                if (f)
                                    return rU(h),
                                    h = nM(y, t),
                                    g(l)
                            }
                            return h === i && (h = nM(y, t)),
                            c
                        }
                        return t = or(t) || 0,
                        sQ(n) && (p = !!n.leading,
                        a = (f = "maxWait"in n) ? t6(or(n.maxWait) || 0, t) : a,
                        d = "trailing"in n ? !!n.trailing : d),
                        _.cancel = function() {
                            h !== i && rU(h),
                            u = 0,
                            s = l = o = h = i
                        }
                        ,
                        _.flush = function() {
                            return h === i ? c : m(sI())
                        }
                        ,
                        _
                    }
                    var sC = rv(function(e, t) {
                        return iU(e, 1, t)
                    })
                      , sA = rv(function(e, t, i) {
                        return iU(e, or(t) || 0, i)
                    });
                    function sN(e, t) {
                        if ("function" != typeof e || null != t && "function" != typeof t)
                            throw new eO(r);
                        var i = function() {
                            var r = arguments
                              , n = t ? t.apply(this, r) : r[0]
                              , s = i.cache;
                            if (s.has(n))
                                return s.get(n);
                            var o = e.apply(this, r);
                            return i.cache = s.set(n, o) || s,
                            o
                        };
                        return i.cache = new (sN.Cache || iP),
                        i
                    }
                    function sT(e) {
                        if ("function" != typeof e)
                            throw new eO(r);
                        return function() {
                            var t = arguments;
                            switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                            }
                            return !e.apply(this, t)
                        }
                    }
                    sN.Cache = iP;
                    var sq = rv(function(e, t) {
                        var i = (t = 1 == t.length && sU(t[0]) ? tf(t[0], tN(ny())) : tf(iJ(t, 1), tN(ny()))).length;
                        return rv(function(r) {
                            for (var n = -1, s = t3(r.length, i); ++n < s; )
                                r[n] = t[n].call(this, r[n]);
                            return ts(e, this, r)
                        })
                    })
                      , sj = rv(function(e, t) {
                        var r = tH(t, nv(sj));
                        return no(e, 32, i, t, r)
                    })
                      , sD = rv(function(e, t) {
                        var r = tH(t, nv(sD));
                        return no(e, 64, i, t, r)
                    })
                      , sL = nu(function(e, t) {
                        return no(e, 256, i, i, i, t)
                    });
                    function sz(e, t) {
                        return e === t || e != e && t != t
                    }
                    var sM = nt(i6)
                      , sk = nt(function(e, t) {
                        return e >= t
                    })
                      , s$ = i7(function() {
                        return arguments
                    }()) ? i7 : function(e) {
                        return sY(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                    }
                      , sU = em.isArray
                      , sH = e9 ? tN(e9) : function(e) {
                        return sY(e) && i5(e) == S
                    }
                    ;
                    function sV(e) {
                        return null != e && sG(e.length) && !sJ(e)
                    }
                    function sK(e) {
                        return sY(e) && sV(e)
                    }
                    var sB = tX || o6
                      , sF = te ? tN(te) : function(e) {
                        return sY(e) && i5(e) == p
                    }
                    ;
                    function sZ(e) {
                        if (!sY(e))
                            return !1;
                        var t = i5(e);
                        return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !s1(e)
                    }
                    function sJ(e) {
                        if (!sQ(e))
                            return !1;
                        var t = i5(e);
                        return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                    }
                    function sW(e) {
                        return "number" == typeof e && e == ot(e)
                    }
                    function sG(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                    }
                    function sQ(e) {
                        var t = typeof e;
                        return null != e && ("object" == t || "function" == t)
                    }
                    function sY(e) {
                        return null != e && "object" == typeof e
                    }
                    var sX = tt ? tN(tt) : function(e) {
                        return sY(e) && nI(e) == v
                    }
                    ;
                    function s0(e) {
                        return "number" == typeof e || sY(e) && i5(e) == y
                    }
                    function s1(e) {
                        if (!sY(e) || i5(e) != m)
                            return !1;
                        var t = eF(e);
                        if (null === t)
                            return !0;
                        var i = eT.call(t, "constructor") && t.constructor;
                        return "function" == typeof i && i instanceof i && eN.call(i) == eL
                    }
                    var s5 = ti ? tN(ti) : function(e) {
                        return sY(e) && i5(e) == w
                    }
                      , s6 = tr ? tN(tr) : function(e) {
                        return sY(e) && nI(e) == b
                    }
                    ;
                    function s3(e) {
                        return "string" == typeof e || !sU(e) && sY(e) && i5(e) == E
                    }
                    function s2(e) {
                        return "symbol" == typeof e || sY(e) && i5(e) == I
                    }
                    var s4 = tn ? tN(tn) : function(e) {
                        return sY(e) && sG(e.length) && !!eG[i5(e)]
                    }
                      , s8 = nt(rn)
                      , s7 = nt(function(e, t) {
                        return e <= t
                    });
                    function s9(e) {
                        if (!e)
                            return [];
                        if (sV(e))
                            return s3(e) ? tB(e) : rJ(e);
                        if (e2 && e[e2])
                            return function(e) {
                                for (var t, i = []; !(t = e.next()).done; )
                                    i.push(t.value);
                                return i
                            }(e[e2]());
                        var t = nI(e);
                        return (t == v ? t$ : t == b ? tV : oR)(e)
                    }
                    function oe(e) {
                        return e ? (e = or(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                    }
                    function ot(e) {
                        var t = oe(e)
                          , i = t % 1;
                        return t == t ? i ? t - i : t : 0
                    }
                    function oi(e) {
                        return e ? iM(ot(e), 0, 4294967295) : 0
                    }
                    function or(e) {
                        if ("number" == typeof e)
                            return e;
                        if (s2(e))
                            return a;
                        if (sQ(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = sQ(t) ? t + "" : t
                        }
                        if ("string" != typeof e)
                            return 0 === e ? e : +e;
                        e = tA(e);
                        var i = ec.test(e);
                        return i || el.test(e) ? e0(e.slice(2), i ? 2 : 8) : ea.test(e) ? a : +e
                    }
                    function on(e) {
                        return rW(e, o_(e))
                    }
                    function os(e) {
                        return null == e ? "" : rC(e)
                    }
                    var oo = rQ(function(e, t) {
                        if (nT(t) || sV(t)) {
                            rW(t, om(t), e);
                            return
                        }
                        for (var i in t)
                            eT.call(t, i) && iT(e, i, t[i])
                    })
                      , oa = rQ(function(e, t) {
                        rW(t, o_(t), e)
                    })
                      , oc = rQ(function(e, t, i, r) {
                        rW(t, o_(t), e, r)
                    })
                      , oh = rQ(function(e, t, i, r) {
                        rW(t, om(t), e, r)
                    })
                      , ol = nu(iz)
                      , ou = rv(function(e, t) {
                        e = eI(e);
                        var r = -1
                          , n = t.length
                          , s = n > 2 ? t[2] : i;
                        for (s && nx(t[0], t[1], s) && (n = 1); ++r < n; )
                            for (var o = t[r], a = o_(o), c = -1, h = a.length; ++c < h; ) {
                                var l = a[c]
                                  , u = e[l];
                                (u === i || sz(u, eC[l]) && !eT.call(e, l)) && (e[l] = o[l])
                            }
                        return e
                    })
                      , op = rv(function(e) {
                        return e.push(i, nc),
                        ts(ob, i, e)
                    });
                    function of(e, t, r) {
                        var n = null == e ? i : i0(e, t);
                        return n === i ? r : n
                    }
                    function od(e, t) {
                        return null != e && nP(e, t, i2)
                    }
                    var og = r4(function(e, t, i) {
                        null != t && "function" != typeof t.toString && (t = eD.call(t)),
                        e[t] = i
                    }, oU(oK))
                      , ov = r4(function(e, t, i) {
                        null != t && "function" != typeof t.toString && (t = eD.call(t)),
                        eT.call(e, t) ? e[t].push(i) : e[t] = [i]
                    }, ny)
                      , oy = rv(i8);
                    function om(e) {
                        return sV(e) ? iR(e) : rr(e)
                    }
                    function o_(e) {
                        return sV(e) ? iR(e, !0) : function(e) {
                            if (!sQ(e))
                                return function(e) {
                                    var t = [];
                                    if (null != e)
                                        for (var i in eI(e))
                                            t.push(i);
                                    return t
                                }(e);
                            var t = nT(e)
                              , i = [];
                            for (var r in e)
                                "constructor" == r && (t || !eT.call(e, r)) || i.push(r);
                            return i
                        }(e)
                    }
                    var ow = rQ(function(e, t, i) {
                        rc(e, t, i)
                    })
                      , ob = rQ(function(e, t, i, r) {
                        rc(e, t, i, r)
                    })
                      , oE = nu(function(e, t) {
                        var i = {};
                        if (null == e)
                            return i;
                        var r = !1;
                        t = tf(t, function(t) {
                            return t = rk(t, e),
                            r || (r = t.length > 1),
                            t
                        }),
                        rW(e, nf(e), i),
                        r && (i = ik(i, 7, nh));
                        for (var n = t.length; n--; )
                            rN(i, t[n]);
                        return i
                    })
                      , oI = nu(function(e, t) {
                        return null == e ? {} : ru(e, t, function(t, i) {
                            return od(e, i)
                        })
                    });
                    function oP(e, t) {
                        if (null == e)
                            return {};
                        var i = tf(nf(e), function(e) {
                            return [e]
                        });
                        return t = ny(t),
                        ru(e, i, function(e, i) {
                            return t(e, i[0])
                        })
                    }
                    var oS = ns(om)
                      , oO = ns(o_);
                    function oR(e) {
                        return null == e ? [] : tT(e, om(e))
                    }
                    var ox = r1(function(e, t, i) {
                        return t = t.toLowerCase(),
                        e + (i ? oC(t) : t)
                    });
                    function oC(e) {
                        return oz(os(e).toLowerCase())
                    }
                    function oA(e) {
                        return (e = os(e)) && e.replace(ep, tL).replace(eV, "")
                    }
                    var oN = r1(function(e, t, i) {
                        return e + (i ? "-" : "") + t.toLowerCase()
                    })
                      , oT = r1(function(e, t, i) {
                        return e + (i ? " " : "") + t.toLowerCase()
                    })
                      , oq = r0("toLowerCase")
                      , oj = r1(function(e, t, i) {
                        return e + (i ? "_" : "") + t.toLowerCase()
                    })
                      , oD = r1(function(e, t, i) {
                        return e + (i ? " " : "") + oz(t)
                    })
                      , oL = r1(function(e, t, i) {
                        return e + (i ? " " : "") + t.toUpperCase()
                    })
                      , oz = r0("toUpperCase");
                    function oM(e, t, r) {
                        var n;
                        return e = os(e),
                        (t = r ? i : t) === i ? (n = e,
                        eZ.test(n)) ? e.match(eB) || [] : e.match(ei) || [] : e.match(t) || []
                    }
                    var ok = rv(function(e, t) {
                        try {
                            return ts(e, i, t)
                        } catch (e) {
                            return sZ(e) ? e : new ew(e)
                        }
                    })
                      , o$ = nu(function(e, t) {
                        return ta(t, function(t) {
                            iL(e, t = nK(t), sO(e[t], e))
                        }),
                        e
                    });
                    function oU(e) {
                        return function() {
                            return e
                        }
                    }
                    var oH = r3()
                      , oV = r3(!0);
                    function oK(e) {
                        return e
                    }
                    function oB(e) {
                        return ri("function" == typeof e ? e : ik(e, 1))
                    }
                    var oF = rv(function(e, t) {
                        return function(i) {
                            return i8(i, e, t)
                        }
                    })
                      , oZ = rv(function(e, t) {
                        return function(i) {
                            return i8(e, i, t)
                        }
                    });
                    function oJ(e, t, i) {
                        var r = om(t)
                          , n = iX(t, r);
                        null != i || sQ(t) && (n.length || !r.length) || (i = t,
                        t = e,
                        e = this,
                        n = iX(t, om(t)));
                        var s = !(sQ(i) && "chain"in i) || !!i.chain
                          , o = sJ(e);
                        return ta(n, function(i) {
                            var r = t[i];
                            e[i] = r,
                            o && (e.prototype[i] = function() {
                                var t = this.__chain__;
                                if (s || t) {
                                    var i = e(this.__wrapped__);
                                    return (i.__actions__ = rJ(this.__actions__)).push({
                                        func: r,
                                        args: arguments,
                                        thisArg: e
                                    }),
                                    i.__chain__ = t,
                                    i
                                }
                                return r.apply(e, td([this.value()], arguments))
                            }
                            )
                        }),
                        e
                    }
                    function oW() {}
                    var oG = r7(tf)
                      , oQ = r7(th)
                      , oY = r7(ty);
                    function oX(e) {
                        return nC(e) ? tS(nK(e)) : function(t) {
                            return i0(t, e)
                        }
                    }
                    var o0 = ne()
                      , o1 = ne(!0);
                    function o5() {
                        return []
                    }
                    function o6() {
                        return !1
                    }
                    var o3 = r8(function(e, t) {
                        return e + t
                    }, 0)
                      , o2 = nr("ceil")
                      , o4 = r8(function(e, t) {
                        return e / t
                    }, 1)
                      , o8 = nr("floor")
                      , o7 = r8(function(e, t) {
                        return e * t
                    }, 1)
                      , o9 = nr("round")
                      , ae = r8(function(e, t) {
                        return e - t
                    }, 0);
                    return iy.after = function(e, t) {
                        if ("function" != typeof t)
                            throw new eO(r);
                        return e = ot(e),
                        function() {
                            if (--e < 1)
                                return t.apply(this, arguments)
                        }
                    }
                    ,
                    iy.ary = sP,
                    iy.assign = oo,
                    iy.assignIn = oa,
                    iy.assignInWith = oc,
                    iy.assignWith = oh,
                    iy.at = ol,
                    iy.before = sS,
                    iy.bind = sO,
                    iy.bindAll = o$,
                    iy.bindKey = sR,
                    iy.castArray = function() {
                        if (!arguments.length)
                            return [];
                        var e = arguments[0];
                        return sU(e) ? e : [e]
                    }
                    ,
                    iy.chain = sh,
                    iy.chunk = function(e, t, r) {
                        t = (r ? nx(e, t, r) : t === i) ? 1 : t6(ot(t), 0);
                        var n = null == e ? 0 : e.length;
                        if (!n || t < 1)
                            return [];
                        for (var s = 0, o = 0, a = em(tG(n / t)); s < n; )
                            a[o++] = rI(e, s, s += t);
                        return a
                    }
                    ,
                    iy.compact = function(e) {
                        for (var t = -1, i = null == e ? 0 : e.length, r = 0, n = []; ++t < i; ) {
                            var s = e[t];
                            s && (n[r++] = s)
                        }
                        return n
                    }
                    ,
                    iy.concat = function() {
                        var e = arguments.length;
                        if (!e)
                            return [];
                        for (var t = em(e - 1), i = arguments[0], r = e; r--; )
                            t[r - 1] = arguments[r];
                        return td(sU(i) ? rJ(i) : [i], iJ(t, 1))
                    }
                    ,
                    iy.cond = function(e) {
                        var t = null == e ? 0 : e.length
                          , i = ny();
                        return e = t ? tf(e, function(e) {
                            if ("function" != typeof e[1])
                                throw new eO(r);
                            return [i(e[0]), e[1]]
                        }) : [],
                        rv(function(i) {
                            for (var r = -1; ++r < t; ) {
                                var n = e[r];
                                if (ts(n[0], this, i))
                                    return ts(n[1], this, i)
                            }
                        })
                    }
                    ,
                    iy.conforms = function(e) {
                        var t, i;
                        return t = ik(e, 1),
                        i = om(t),
                        function(e) {
                            return i$(e, t, i)
                        }
                    }
                    ,
                    iy.constant = oU,
                    iy.countBy = sp,
                    iy.create = function(e, t) {
                        var i = im(e);
                        return null == t ? i : iD(i, t)
                    }
                    ,
                    iy.curry = function e(t, r, n) {
                        r = n ? i : r;
                        var s = no(t, 8, i, i, i, i, i, r);
                        return s.placeholder = e.placeholder,
                        s
                    }
                    ,
                    iy.curryRight = function e(t, r, n) {
                        r = n ? i : r;
                        var s = no(t, 16, i, i, i, i, i, r);
                        return s.placeholder = e.placeholder,
                        s
                    }
                    ,
                    iy.debounce = sx,
                    iy.defaults = ou,
                    iy.defaultsDeep = op,
                    iy.defer = sC,
                    iy.delay = sA,
                    iy.difference = nZ,
                    iy.differenceBy = nJ,
                    iy.differenceWith = nW,
                    iy.drop = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? rI(e, (t = r || t === i ? 1 : ot(t)) < 0 ? 0 : t, n) : []
                    }
                    ,
                    iy.dropRight = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? rI(e, 0, (t = n - (t = r || t === i ? 1 : ot(t))) < 0 ? 0 : t) : []
                    }
                    ,
                    iy.dropRightWhile = function(e, t) {
                        return e && e.length ? rq(e, ny(t, 3), !0, !0) : []
                    }
                    ,
                    iy.dropWhile = function(e, t) {
                        return e && e.length ? rq(e, ny(t, 3), !0) : []
                    }
                    ,
                    iy.fill = function(e, t, r, n) {
                        var s = null == e ? 0 : e.length;
                        return s ? (r && "number" != typeof r && nx(e, t, r) && (r = 0,
                        n = s),
                        function(e, t, r, n) {
                            var s = e.length;
                            for ((r = ot(r)) < 0 && (r = -r > s ? 0 : s + r),
                            (n = n === i || n > s ? s : ot(n)) < 0 && (n += s),
                            n = r > n ? 0 : oi(n); r < n; )
                                e[r++] = t;
                            return e
                        }(e, t, r, n)) : []
                    }
                    ,
                    iy.filter = function(e, t) {
                        return (sU(e) ? tl : iZ)(e, ny(t, 3))
                    }
                    ,
                    iy.flatMap = function(e, t) {
                        return iJ(sw(e, t), 1)
                    }
                    ,
                    iy.flatMapDeep = function(e, t) {
                        return iJ(sw(e, t), o)
                    }
                    ,
                    iy.flatMapDepth = function(e, t, r) {
                        return r = r === i ? 1 : ot(r),
                        iJ(sw(e, t), r)
                    }
                    ,
                    iy.flatten = nY,
                    iy.flattenDeep = function(e) {
                        return (null == e ? 0 : e.length) ? iJ(e, o) : []
                    }
                    ,
                    iy.flattenDepth = function(e, t) {
                        return (null == e ? 0 : e.length) ? iJ(e, t = t === i ? 1 : ot(t)) : []
                    }
                    ,
                    iy.flip = function(e) {
                        return no(e, 512)
                    }
                    ,
                    iy.flow = oH,
                    iy.flowRight = oV,
                    iy.fromPairs = function(e) {
                        for (var t = -1, i = null == e ? 0 : e.length, r = {}; ++t < i; ) {
                            var n = e[t];
                            r[n[0]] = n[1]
                        }
                        return r
                    }
                    ,
                    iy.functions = function(e) {
                        return null == e ? [] : iX(e, om(e))
                    }
                    ,
                    iy.functionsIn = function(e) {
                        return null == e ? [] : iX(e, o_(e))
                    }
                    ,
                    iy.groupBy = sy,
                    iy.initial = function(e) {
                        return (null == e ? 0 : e.length) ? rI(e, 0, -1) : []
                    }
                    ,
                    iy.intersection = n0,
                    iy.intersectionBy = n1,
                    iy.intersectionWith = n5,
                    iy.invert = og,
                    iy.invertBy = ov,
                    iy.invokeMap = sm,
                    iy.iteratee = oB,
                    iy.keyBy = s_,
                    iy.keys = om,
                    iy.keysIn = o_,
                    iy.map = sw,
                    iy.mapKeys = function(e, t) {
                        var i = {};
                        return t = ny(t, 3),
                        iQ(e, function(e, r, n) {
                            iL(i, t(e, r, n), e)
                        }),
                        i
                    }
                    ,
                    iy.mapValues = function(e, t) {
                        var i = {};
                        return t = ny(t, 3),
                        iQ(e, function(e, r, n) {
                            iL(i, r, t(e, r, n))
                        }),
                        i
                    }
                    ,
                    iy.matches = function(e) {
                        return ro(ik(e, 1))
                    }
                    ,
                    iy.matchesProperty = function(e, t) {
                        return ra(e, ik(t, 1))
                    }
                    ,
                    iy.memoize = sN,
                    iy.merge = ow,
                    iy.mergeWith = ob,
                    iy.method = oF,
                    iy.methodOf = oZ,
                    iy.mixin = oJ,
                    iy.negate = sT,
                    iy.nthArg = function(e) {
                        return e = ot(e),
                        rv(function(t) {
                            return rh(t, e)
                        })
                    }
                    ,
                    iy.omit = oE,
                    iy.omitBy = function(e, t) {
                        return oP(e, sT(ny(t)))
                    }
                    ,
                    iy.once = function(e) {
                        return sS(2, e)
                    }
                    ,
                    iy.orderBy = function(e, t, r, n) {
                        return null == e ? [] : (sU(t) || (t = null == t ? [] : [t]),
                        sU(r = n ? i : r) || (r = null == r ? [] : [r]),
                        rl(e, t, r))
                    }
                    ,
                    iy.over = oG,
                    iy.overArgs = sq,
                    iy.overEvery = oQ,
                    iy.overSome = oY,
                    iy.partial = sj,
                    iy.partialRight = sD,
                    iy.partition = sb,
                    iy.pick = oI,
                    iy.pickBy = oP,
                    iy.property = oX,
                    iy.propertyOf = function(e) {
                        return function(t) {
                            return null == e ? i : i0(e, t)
                        }
                    }
                    ,
                    iy.pull = n3,
                    iy.pullAll = n2,
                    iy.pullAllBy = function(e, t, i) {
                        return e && e.length && t && t.length ? rp(e, t, ny(i, 2)) : e
                    }
                    ,
                    iy.pullAllWith = function(e, t, r) {
                        return e && e.length && t && t.length ? rp(e, t, i, r) : e
                    }
                    ,
                    iy.pullAt = n4,
                    iy.range = o0,
                    iy.rangeRight = o1,
                    iy.rearg = sL,
                    iy.reject = function(e, t) {
                        return (sU(e) ? tl : iZ)(e, sT(ny(t, 3)))
                    }
                    ,
                    iy.remove = function(e, t) {
                        var i = [];
                        if (!(e && e.length))
                            return i;
                        var r = -1
                          , n = []
                          , s = e.length;
                        for (t = ny(t, 3); ++r < s; ) {
                            var o = e[r];
                            t(o, r, e) && (i.push(o),
                            n.push(r))
                        }
                        return rf(e, n),
                        i
                    }
                    ,
                    iy.rest = function(e, t) {
                        if ("function" != typeof e)
                            throw new eO(r);
                        return rv(e, t = t === i ? t : ot(t))
                    }
                    ,
                    iy.reverse = n8,
                    iy.sampleSize = function(e, t, r) {
                        return t = (r ? nx(e, t, r) : t === i) ? 1 : ot(t),
                        (sU(e) ? iC : rm)(e, t)
                    }
                    ,
                    iy.set = function(e, t, i) {
                        return null == e ? e : r_(e, t, i)
                    }
                    ,
                    iy.setWith = function(e, t, r, n) {
                        return n = "function" == typeof n ? n : i,
                        null == e ? e : r_(e, t, r, n)
                    }
                    ,
                    iy.shuffle = function(e) {
                        return (sU(e) ? iA : rE)(e)
                    }
                    ,
                    iy.slice = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? (r && "number" != typeof r && nx(e, t, r) ? (t = 0,
                        r = n) : (t = null == t ? 0 : ot(t),
                        r = r === i ? n : ot(r)),
                        rI(e, t, r)) : []
                    }
                    ,
                    iy.sortBy = sE,
                    iy.sortedUniq = function(e) {
                        return e && e.length ? rR(e) : []
                    }
                    ,
                    iy.sortedUniqBy = function(e, t) {
                        return e && e.length ? rR(e, ny(t, 2)) : []
                    }
                    ,
                    iy.split = function(e, t, r) {
                        return r && "number" != typeof r && nx(e, t, r) && (t = r = i),
                        (r = r === i ? 4294967295 : r >>> 0) ? (e = os(e)) && ("string" == typeof t || null != t && !s5(t)) && !(t = rC(t)) && tk(e) ? r$(tB(e), 0, r) : e.split(t, r) : []
                    }
                    ,
                    iy.spread = function(e, t) {
                        if ("function" != typeof e)
                            throw new eO(r);
                        return t = null == t ? 0 : t6(ot(t), 0),
                        rv(function(i) {
                            var r = i[t]
                              , n = r$(i, 0, t);
                            return r && td(n, r),
                            ts(e, this, n)
                        })
                    }
                    ,
                    iy.tail = function(e) {
                        var t = null == e ? 0 : e.length;
                        return t ? rI(e, 1, t) : []
                    }
                    ,
                    iy.take = function(e, t, r) {
                        return e && e.length ? rI(e, 0, (t = r || t === i ? 1 : ot(t)) < 0 ? 0 : t) : []
                    }
                    ,
                    iy.takeRight = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        return n ? rI(e, (t = n - (t = r || t === i ? 1 : ot(t))) < 0 ? 0 : t, n) : []
                    }
                    ,
                    iy.takeRightWhile = function(e, t) {
                        return e && e.length ? rq(e, ny(t, 3), !1, !0) : []
                    }
                    ,
                    iy.takeWhile = function(e, t) {
                        return e && e.length ? rq(e, ny(t, 3)) : []
                    }
                    ,
                    iy.tap = function(e, t) {
                        return t(e),
                        e
                    }
                    ,
                    iy.throttle = function(e, t, i) {
                        var n = !0
                          , s = !0;
                        if ("function" != typeof e)
                            throw new eO(r);
                        return sQ(i) && (n = "leading"in i ? !!i.leading : n,
                        s = "trailing"in i ? !!i.trailing : s),
                        sx(e, t, {
                            leading: n,
                            maxWait: t,
                            trailing: s
                        })
                    }
                    ,
                    iy.thru = sl,
                    iy.toArray = s9,
                    iy.toPairs = oS,
                    iy.toPairsIn = oO,
                    iy.toPath = function(e) {
                        return sU(e) ? tf(e, nK) : s2(e) ? [e] : rJ(nV(os(e)))
                    }
                    ,
                    iy.toPlainObject = on,
                    iy.transform = function(e, t, i) {
                        var r = sU(e)
                          , n = r || sB(e) || s4(e);
                        if (t = ny(t, 4),
                        null == i) {
                            var s = e && e.constructor;
                            i = n ? r ? new s : [] : sQ(e) && sJ(s) ? im(eF(e)) : {}
                        }
                        return (n ? ta : iQ)(e, function(e, r, n) {
                            return t(i, e, r, n)
                        }),
                        i
                    }
                    ,
                    iy.unary = function(e) {
                        return sP(e, 1)
                    }
                    ,
                    iy.union = n7,
                    iy.unionBy = n9,
                    iy.unionWith = se,
                    iy.uniq = function(e) {
                        return e && e.length ? rA(e) : []
                    }
                    ,
                    iy.uniqBy = function(e, t) {
                        return e && e.length ? rA(e, ny(t, 2)) : []
                    }
                    ,
                    iy.uniqWith = function(e, t) {
                        return t = "function" == typeof t ? t : i,
                        e && e.length ? rA(e, i, t) : []
                    }
                    ,
                    iy.unset = function(e, t) {
                        return null == e || rN(e, t)
                    }
                    ,
                    iy.unzip = st,
                    iy.unzipWith = si,
                    iy.update = function(e, t, i) {
                        return null == e ? e : rT(e, t, rM(i))
                    }
                    ,
                    iy.updateWith = function(e, t, r, n) {
                        return n = "function" == typeof n ? n : i,
                        null == e ? e : rT(e, t, rM(r), n)
                    }
                    ,
                    iy.values = oR,
                    iy.valuesIn = function(e) {
                        return null == e ? [] : tT(e, o_(e))
                    }
                    ,
                    iy.without = sr,
                    iy.words = oM,
                    iy.wrap = function(e, t) {
                        return sj(rM(t), e)
                    }
                    ,
                    iy.xor = sn,
                    iy.xorBy = ss,
                    iy.xorWith = so,
                    iy.zip = sa,
                    iy.zipObject = function(e, t) {
                        return rL(e || [], t || [], iT)
                    }
                    ,
                    iy.zipObjectDeep = function(e, t) {
                        return rL(e || [], t || [], r_)
                    }
                    ,
                    iy.zipWith = sc,
                    iy.entries = oS,
                    iy.entriesIn = oO,
                    iy.extend = oa,
                    iy.extendWith = oc,
                    oJ(iy, iy),
                    iy.add = o3,
                    iy.attempt = ok,
                    iy.camelCase = ox,
                    iy.capitalize = oC,
                    iy.ceil = o2,
                    iy.clamp = function(e, t, r) {
                        return r === i && (r = t,
                        t = i),
                        r !== i && (r = (r = or(r)) == r ? r : 0),
                        t !== i && (t = (t = or(t)) == t ? t : 0),
                        iM(or(e), t, r)
                    }
                    ,
                    iy.clone = function(e) {
                        return ik(e, 4)
                    }
                    ,
                    iy.cloneDeep = function(e) {
                        return ik(e, 5)
                    }
                    ,
                    iy.cloneDeepWith = function(e, t) {
                        return ik(e, 5, t = "function" == typeof t ? t : i)
                    }
                    ,
                    iy.cloneWith = function(e, t) {
                        return ik(e, 4, t = "function" == typeof t ? t : i)
                    }
                    ,
                    iy.conformsTo = function(e, t) {
                        return null == t || i$(e, t, om(t))
                    }
                    ,
                    iy.deburr = oA,
                    iy.defaultTo = function(e, t) {
                        return null == e || e != e ? t : e
                    }
                    ,
                    iy.divide = o4,
                    iy.endsWith = function(e, t, r) {
                        e = os(e),
                        t = rC(t);
                        var n = e.length
                          , s = r = r === i ? n : iM(ot(r), 0, n);
                        return (r -= t.length) >= 0 && e.slice(r, s) == t
                    }
                    ,
                    iy.eq = sz,
                    iy.escape = function(e) {
                        return (e = os(e)) && H.test(e) ? e.replace($, tz) : e
                    }
                    ,
                    iy.escapeRegExp = function(e) {
                        return (e = os(e)) && G.test(e) ? e.replace(W, "\\$&") : e
                    }
                    ,
                    iy.every = function(e, t, r) {
                        var n = sU(e) ? th : iB;
                        return r && nx(e, t, r) && (t = i),
                        n(e, ny(t, 3))
                    }
                    ,
                    iy.find = sf,
                    iy.findIndex = nG,
                    iy.findKey = function(e, t) {
                        return t_(e, ny(t, 3), iQ)
                    }
                    ,
                    iy.findLast = sd,
                    iy.findLastIndex = nQ,
                    iy.findLastKey = function(e, t) {
                        return t_(e, ny(t, 3), iY)
                    }
                    ,
                    iy.floor = o8,
                    iy.forEach = sg,
                    iy.forEachRight = sv,
                    iy.forIn = function(e, t) {
                        return null == e ? e : iW(e, ny(t, 3), o_)
                    }
                    ,
                    iy.forInRight = function(e, t) {
                        return null == e ? e : iG(e, ny(t, 3), o_)
                    }
                    ,
                    iy.forOwn = function(e, t) {
                        return e && iQ(e, ny(t, 3))
                    }
                    ,
                    iy.forOwnRight = function(e, t) {
                        return e && iY(e, ny(t, 3))
                    }
                    ,
                    iy.get = of,
                    iy.gt = sM,
                    iy.gte = sk,
                    iy.has = function(e, t) {
                        return null != e && nP(e, t, i3)
                    }
                    ,
                    iy.hasIn = od,
                    iy.head = nX,
                    iy.identity = oK,
                    iy.includes = function(e, t, i, r) {
                        e = sV(e) ? e : oR(e),
                        i = i && !r ? ot(i) : 0;
                        var n = e.length;
                        return i < 0 && (i = t6(n + i, 0)),
                        s3(e) ? i <= n && e.indexOf(t, i) > -1 : !!n && tb(e, t, i) > -1
                    }
                    ,
                    iy.indexOf = function(e, t, i) {
                        var r = null == e ? 0 : e.length;
                        if (!r)
                            return -1;
                        var n = null == i ? 0 : ot(i);
                        return n < 0 && (n = t6(r + n, 0)),
                        tb(e, t, n)
                    }
                    ,
                    iy.inRange = function(e, t, r) {
                        var n, s, o;
                        return t = oe(t),
                        r === i ? (r = t,
                        t = 0) : r = oe(r),
                        (n = e = or(e)) >= t3(s = t, o = r) && n < t6(s, o)
                    }
                    ,
                    iy.invoke = oy,
                    iy.isArguments = s$,
                    iy.isArray = sU,
                    iy.isArrayBuffer = sH,
                    iy.isArrayLike = sV,
                    iy.isArrayLikeObject = sK,
                    iy.isBoolean = function(e) {
                        return !0 === e || !1 === e || sY(e) && i5(e) == u
                    }
                    ,
                    iy.isBuffer = sB,
                    iy.isDate = sF,
                    iy.isElement = function(e) {
                        return sY(e) && 1 === e.nodeType && !s1(e)
                    }
                    ,
                    iy.isEmpty = function(e) {
                        if (null == e)
                            return !0;
                        if (sV(e) && (sU(e) || "string" == typeof e || "function" == typeof e.splice || sB(e) || s4(e) || s$(e)))
                            return !e.length;
                        var t = nI(e);
                        if (t == v || t == b)
                            return !e.size;
                        if (nT(e))
                            return !rr(e).length;
                        for (var i in e)
                            if (eT.call(e, i))
                                return !1;
                        return !0
                    }
                    ,
                    iy.isEqual = function(e, t) {
                        return i9(e, t)
                    }
                    ,
                    iy.isEqualWith = function(e, t, r) {
                        var n = (r = "function" == typeof r ? r : i) ? r(e, t) : i;
                        return n === i ? i9(e, t, i, r) : !!n
                    }
                    ,
                    iy.isError = sZ,
                    iy.isFinite = function(e) {
                        return "number" == typeof e && t0(e)
                    }
                    ,
                    iy.isFunction = sJ,
                    iy.isInteger = sW,
                    iy.isLength = sG,
                    iy.isMap = sX,
                    iy.isMatch = function(e, t) {
                        return e === t || re(e, t, n_(t))
                    }
                    ,
                    iy.isMatchWith = function(e, t, r) {
                        return r = "function" == typeof r ? r : i,
                        re(e, t, n_(t), r)
                    }
                    ,
                    iy.isNaN = function(e) {
                        return s0(e) && e != +e
                    }
                    ,
                    iy.isNative = function(e) {
                        if (nN(e))
                            throw new ew("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                        return rt(e)
                    }
                    ,
                    iy.isNil = function(e) {
                        return null == e
                    }
                    ,
                    iy.isNull = function(e) {
                        return null === e
                    }
                    ,
                    iy.isNumber = s0,
                    iy.isObject = sQ,
                    iy.isObjectLike = sY,
                    iy.isPlainObject = s1,
                    iy.isRegExp = s5,
                    iy.isSafeInteger = function(e) {
                        return sW(e) && e >= -9007199254740991 && e <= 9007199254740991
                    }
                    ,
                    iy.isSet = s6,
                    iy.isString = s3,
                    iy.isSymbol = s2,
                    iy.isTypedArray = s4,
                    iy.isUndefined = function(e) {
                        return e === i
                    }
                    ,
                    iy.isWeakMap = function(e) {
                        return sY(e) && nI(e) == P
                    }
                    ,
                    iy.isWeakSet = function(e) {
                        return sY(e) && "[object WeakSet]" == i5(e)
                    }
                    ,
                    iy.join = function(e, t) {
                        return null == e ? "" : t1.call(e, t)
                    }
                    ,
                    iy.kebabCase = oN,
                    iy.last = n6,
                    iy.lastIndexOf = function(e, t, r) {
                        var n = null == e ? 0 : e.length;
                        if (!n)
                            return -1;
                        var s = n;
                        return r !== i && (s = (s = ot(r)) < 0 ? t6(n + s, 0) : t3(s, n - 1)),
                        t == t ? function(e, t, i) {
                            for (var r = i + 1; r-- && e[r] !== t; )
                                ;
                            return r
                        }(e, t, s) : tw(e, tI, s, !0)
                    }
                    ,
                    iy.lowerCase = oT,
                    iy.lowerFirst = oq,
                    iy.lt = s8,
                    iy.lte = s7,
                    iy.max = function(e) {
                        return e && e.length ? iF(e, oK, i6) : i
                    }
                    ,
                    iy.maxBy = function(e, t) {
                        return e && e.length ? iF(e, ny(t, 2), i6) : i
                    }
                    ,
                    iy.mean = function(e) {
                        return tP(e, oK)
                    }
                    ,
                    iy.meanBy = function(e, t) {
                        return tP(e, ny(t, 2))
                    }
                    ,
                    iy.min = function(e) {
                        return e && e.length ? iF(e, oK, rn) : i
                    }
                    ,
                    iy.minBy = function(e, t) {
                        return e && e.length ? iF(e, ny(t, 2), rn) : i
                    }
                    ,
                    iy.stubArray = o5,
                    iy.stubFalse = o6,
                    iy.stubObject = function() {
                        return {}
                    }
                    ,
                    iy.stubString = function() {
                        return ""
                    }
                    ,
                    iy.stubTrue = function() {
                        return !0
                    }
                    ,
                    iy.multiply = o7,
                    iy.nth = function(e, t) {
                        return e && e.length ? rh(e, ot(t)) : i
                    }
                    ,
                    iy.noConflict = function() {
                        return e6._ === this && (e6._ = ez),
                        this
                    }
                    ,
                    iy.noop = oW,
                    iy.now = sI,
                    iy.pad = function(e, t, i) {
                        e = os(e);
                        var r = (t = ot(t)) ? tK(e) : 0;
                        if (!t || r >= t)
                            return e;
                        var n = (t - r) / 2;
                        return r9(tQ(n), i) + e + r9(tG(n), i)
                    }
                    ,
                    iy.padEnd = function(e, t, i) {
                        e = os(e);
                        var r = (t = ot(t)) ? tK(e) : 0;
                        return t && r < t ? e + r9(t - r, i) : e
                    }
                    ,
                    iy.padStart = function(e, t, i) {
                        e = os(e);
                        var r = (t = ot(t)) ? tK(e) : 0;
                        return t && r < t ? r9(t - r, i) + e : e
                    }
                    ,
                    iy.parseInt = function(e, t, i) {
                        return i || null == t ? t = 0 : t && (t = +t),
                        t4(os(e).replace(Q, ""), t || 0)
                    }
                    ,
                    iy.random = function(e, t, r) {
                        if (r && "boolean" != typeof r && nx(e, t, r) && (t = r = i),
                        r === i && ("boolean" == typeof t ? (r = t,
                        t = i) : "boolean" == typeof e && (r = e,
                        e = i)),
                        e === i && t === i ? (e = 0,
                        t = 1) : (e = oe(e),
                        t === i ? (t = e,
                        e = 0) : t = oe(t)),
                        e > t) {
                            var n = e;
                            e = t,
                            t = n
                        }
                        if (r || e % 1 || t % 1) {
                            var s = t8();
                            return t3(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                        }
                        return rd(e, t)
                    }
                    ,
                    iy.reduce = function(e, t, i) {
                        var r = sU(e) ? tg : tR
                          , n = arguments.length < 3;
                        return r(e, ny(t, 4), i, n, iV)
                    }
                    ,
                    iy.reduceRight = function(e, t, i) {
                        var r = sU(e) ? tv : tR
                          , n = arguments.length < 3;
                        return r(e, ny(t, 4), i, n, iK)
                    }
                    ,
                    iy.repeat = function(e, t, r) {
                        return t = (r ? nx(e, t, r) : t === i) ? 1 : ot(t),
                        rg(os(e), t)
                    }
                    ,
                    iy.replace = function() {
                        var e = arguments
                          , t = os(e[0]);
                        return e.length < 3 ? t : t.replace(e[1], e[2])
                    }
                    ,
                    iy.result = function(e, t, r) {
                        t = rk(t, e);
                        var n = -1
                          , s = t.length;
                        for (s || (s = 1,
                        e = i); ++n < s; ) {
                            var o = null == e ? i : e[nK(t[n])];
                            o === i && (n = s,
                            o = r),
                            e = sJ(o) ? o.call(e) : o
                        }
                        return e
                    }
                    ,
                    iy.round = o9,
                    iy.runInContext = e,
                    iy.sample = function(e) {
                        return (sU(e) ? ix : ry)(e)
                    }
                    ,
                    iy.size = function(e) {
                        if (null == e)
                            return 0;
                        if (sV(e))
                            return s3(e) ? tK(e) : e.length;
                        var t = nI(e);
                        return t == v || t == b ? e.size : rr(e).length
                    }
                    ,
                    iy.snakeCase = oj,
                    iy.some = function(e, t, r) {
                        var n = sU(e) ? ty : rP;
                        return r && nx(e, t, r) && (t = i),
                        n(e, ny(t, 3))
                    }
                    ,
                    iy.sortedIndex = function(e, t) {
                        return rS(e, t)
                    }
                    ,
                    iy.sortedIndexBy = function(e, t, i) {
                        return rO(e, t, ny(i, 2))
                    }
                    ,
                    iy.sortedIndexOf = function(e, t) {
                        var i = null == e ? 0 : e.length;
                        if (i) {
                            var r = rS(e, t);
                            if (r < i && sz(e[r], t))
                                return r
                        }
                        return -1
                    }
                    ,
                    iy.sortedLastIndex = function(e, t) {
                        return rS(e, t, !0)
                    }
                    ,
                    iy.sortedLastIndexBy = function(e, t, i) {
                        return rO(e, t, ny(i, 2), !0)
                    }
                    ,
                    iy.sortedLastIndexOf = function(e, t) {
                        if (null == e ? 0 : e.length) {
                            var i = rS(e, t, !0) - 1;
                            if (sz(e[i], t))
                                return i
                        }
                        return -1
                    }
                    ,
                    iy.startCase = oD,
                    iy.startsWith = function(e, t, i) {
                        return e = os(e),
                        i = null == i ? 0 : iM(ot(i), 0, e.length),
                        t = rC(t),
                        e.slice(i, i + t.length) == t
                    }
                    ,
                    iy.subtract = ae,
                    iy.sum = function(e) {
                        return e && e.length ? tx(e, oK) : 0
                    }
                    ,
                    iy.sumBy = function(e, t) {
                        return e && e.length ? tx(e, ny(t, 2)) : 0
                    }
                    ,
                    iy.template = function(e, t, r) {
                        var n = iy.templateSettings;
                        r && nx(e, t, r) && (t = i),
                        e = os(e),
                        t = oc({}, t, n, na);
                        var s, o, a = oc({}, t.imports, n.imports, na), c = om(a), h = tT(a, c), l = 0, u = t.interpolate || ef, p = "__p += '", f = eP((t.escape || ef).source + "|" + u.source + "|" + (u === B ? es : ef).source + "|" + (t.evaluate || ef).source + "|$", "g"), d = "//# sourceURL=" + (eT.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eW + "]") + `
`;
                        e.replace(f, function(t, i, r, n, a, c) {
                            return r || (r = n),
                            p += e.slice(l, c).replace(ed, tM),
                            i && (s = !0,
                            p += `' +
__e(` + i + `) +
'`),
                            a && (o = !0,
                            p += `';
` + a + `;
__p += '`),
                            r && (p += `' +
((__t = (` + r + `)) == null ? '' : __t) +
'`),
                            l = c + t.length,
                            t
                        }),
                        p += `';
`;
                        var g = eT.call(t, "variable") && t.variable;
                        if (g) {
                            if (er.test(g))
                                throw new ew("Invalid `variable` option passed into `_.template`")
                        } else
                            p = `with (obj) {
` + p + `
}
`;
                        p = (o ? p.replace(L, "") : p).replace(z, "$1").replace(M, "$1;"),
                        p = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                        var v = ok(function() {
                            return eb(c, d + "return " + p).apply(i, h)
                        });
                        if (v.source = p,
                        sZ(v))
                            throw v;
                        return v
                    }
                    ,
                    iy.times = function(e, t) {
                        if ((e = ot(e)) < 1 || e > 9007199254740991)
                            return [];
                        var i = 4294967295
                          , r = t3(e, 4294967295);
                        t = ny(t),
                        e -= 4294967295;
                        for (var n = tC(r, t); ++i < e; )
                            t(i);
                        return n
                    }
                    ,
                    iy.toFinite = oe,
                    iy.toInteger = ot,
                    iy.toLength = oi,
                    iy.toLower = function(e) {
                        return os(e).toLowerCase()
                    }
                    ,
                    iy.toNumber = or,
                    iy.toSafeInteger = function(e) {
                        return e ? iM(ot(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                    }
                    ,
                    iy.toString = os,
                    iy.toUpper = function(e) {
                        return os(e).toUpperCase()
                    }
                    ,
                    iy.trim = function(e, t, r) {
                        if ((e = os(e)) && (r || t === i))
                            return tA(e);
                        if (!e || !(t = rC(t)))
                            return e;
                        var n = tB(e)
                          , s = tB(t)
                          , o = tj(n, s)
                          , a = tD(n, s) + 1;
                        return r$(n, o, a).join("")
                    }
                    ,
                    iy.trimEnd = function(e, t, r) {
                        if ((e = os(e)) && (r || t === i))
                            return e.slice(0, tF(e) + 1);
                        if (!e || !(t = rC(t)))
                            return e;
                        var n = tB(e)
                          , s = tD(n, tB(t)) + 1;
                        return r$(n, 0, s).join("")
                    }
                    ,
                    iy.trimStart = function(e, t, r) {
                        if ((e = os(e)) && (r || t === i))
                            return e.replace(Q, "");
                        if (!e || !(t = rC(t)))
                            return e;
                        var n = tB(e)
                          , s = tj(n, tB(t));
                        return r$(n, s).join("")
                    }
                    ,
                    iy.truncate = function(e, t) {
                        var r = 30
                          , n = "...";
                        if (sQ(t)) {
                            var s = "separator"in t ? t.separator : s;
                            r = "length"in t ? ot(t.length) : r,
                            n = "omission"in t ? rC(t.omission) : n
                        }
                        var o = (e = os(e)).length;
                        if (tk(e)) {
                            var a = tB(e);
                            o = a.length
                        }
                        if (r >= o)
                            return e;
                        var c = r - tK(n);
                        if (c < 1)
                            return n;
                        var h = a ? r$(a, 0, c).join("") : e.slice(0, c);
                        if (s === i)
                            return h + n;
                        if (a && (c += h.length - c),
                        s5(s)) {
                            if (e.slice(c).search(s)) {
                                var l, u = h;
                                for (s.global || (s = eP(s.source, os(eo.exec(s)) + "g")),
                                s.lastIndex = 0; l = s.exec(u); )
                                    var p = l.index;
                                h = h.slice(0, p === i ? c : p)
                            }
                        } else if (e.indexOf(rC(s), c) != c) {
                            var f = h.lastIndexOf(s);
                            f > -1 && (h = h.slice(0, f))
                        }
                        return h + n
                    }
                    ,
                    iy.unescape = function(e) {
                        return (e = os(e)) && U.test(e) ? e.replace(k, tZ) : e
                    }
                    ,
                    iy.uniqueId = function(e) {
                        var t = ++eq;
                        return os(e) + t
                    }
                    ,
                    iy.upperCase = oL,
                    iy.upperFirst = oz,
                    iy.each = sg,
                    iy.eachRight = sv,
                    iy.first = nX,
                    oJ(iy, (ey = {},
                    iQ(iy, function(e, t) {
                        eT.call(iy.prototype, t) || (ey[t] = e)
                    }),
                    ey), {
                        chain: !1
                    }),
                    iy.VERSION = "4.17.21",
                    ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                        iy[e].placeholder = iy
                    }),
                    ta(["drop", "take"], function(e, t) {
                        ib.prototype[e] = function(r) {
                            r = r === i ? 1 : t6(ot(r), 0);
                            var n = this.__filtered__ && !t ? new ib(this) : this.clone();
                            return n.__filtered__ ? n.__takeCount__ = t3(r, n.__takeCount__) : n.__views__.push({
                                size: t3(r, 4294967295),
                                type: e + (n.__dir__ < 0 ? "Right" : "")
                            }),
                            n
                        }
                        ,
                        ib.prototype[e + "Right"] = function(t) {
                            return this.reverse()[e](t).reverse()
                        }
                    }),
                    ta(["filter", "map", "takeWhile"], function(e, t) {
                        var i = t + 1
                          , r = 1 == i || 3 == i;
                        ib.prototype[e] = function(e) {
                            var t = this.clone();
                            return t.__iteratees__.push({
                                iteratee: ny(e, 3),
                                type: i
                            }),
                            t.__filtered__ = t.__filtered__ || r,
                            t
                        }
                    }),
                    ta(["head", "last"], function(e, t) {
                        var i = "take" + (t ? "Right" : "");
                        ib.prototype[e] = function() {
                            return this[i](1).value()[0]
                        }
                    }),
                    ta(["initial", "tail"], function(e, t) {
                        var i = "drop" + (t ? "" : "Right");
                        ib.prototype[e] = function() {
                            return this.__filtered__ ? new ib(this) : this[i](1)
                        }
                    }),
                    ib.prototype.compact = function() {
                        return this.filter(oK)
                    }
                    ,
                    ib.prototype.find = function(e) {
                        return this.filter(e).head()
                    }
                    ,
                    ib.prototype.findLast = function(e) {
                        return this.reverse().find(e)
                    }
                    ,
                    ib.prototype.invokeMap = rv(function(e, t) {
                        return "function" == typeof e ? new ib(this) : this.map(function(i) {
                            return i8(i, e, t)
                        })
                    }),
                    ib.prototype.reject = function(e) {
                        return this.filter(sT(ny(e)))
                    }
                    ,
                    ib.prototype.slice = function(e, t) {
                        e = ot(e);
                        var r = this;
                        return r.__filtered__ && (e > 0 || t < 0) ? new ib(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)),
                        t !== i && (r = (t = ot(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                        r)
                    }
                    ,
                    ib.prototype.takeRightWhile = function(e) {
                        return this.reverse().takeWhile(e).reverse()
                    }
                    ,
                    ib.prototype.toArray = function() {
                        return this.take(4294967295)
                    }
                    ,
                    iQ(ib.prototype, function(e, t) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(t)
                          , n = /^(?:head|last)$/.test(t)
                          , s = iy[n ? "take" + ("last" == t ? "Right" : "") : t]
                          , o = n || /^find/.test(t);
                        s && (iy.prototype[t] = function() {
                            var t = this.__wrapped__
                              , a = n ? [1] : arguments
                              , c = t instanceof ib
                              , h = a[0]
                              , l = c || sU(t)
                              , u = function(e) {
                                var t = s.apply(iy, td([e], a));
                                return n && p ? t[0] : t
                            };
                            l && r && "function" == typeof h && 1 != h.length && (c = l = !1);
                            var p = this.__chain__
                              , f = !!this.__actions__.length
                              , d = o && !p
                              , g = c && !f;
                            if (!o && l) {
                                t = g ? t : new ib(this);
                                var v = e.apply(t, a);
                                return v.__actions__.push({
                                    func: sl,
                                    args: [u],
                                    thisArg: i
                                }),
                                new iw(v,p)
                            }
                            return d && g ? e.apply(this, a) : (v = this.thru(u),
                            d ? n ? v.value()[0] : v.value() : v)
                        }
                        )
                    }),
                    ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                        var t = eR[e]
                          , i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                          , r = /^(?:pop|shift)$/.test(e);
                        iy.prototype[e] = function() {
                            var e = arguments;
                            if (r && !this.__chain__) {
                                var n = this.value();
                                return t.apply(sU(n) ? n : [], e)
                            }
                            return this[i](function(i) {
                                return t.apply(sU(i) ? i : [], e)
                            })
                        }
                    }),
                    iQ(ib.prototype, function(e, t) {
                        var i = iy[t];
                        if (i) {
                            var r = i.name + "";
                            eT.call(ia, r) || (ia[r] = []),
                            ia[r].push({
                                name: t,
                                func: i
                            })
                        }
                    }),
                    ia[r2(i, 2).name] = [{
                        name: "wrapper",
                        func: i
                    }],
                    ib.prototype.clone = function() {
                        var e = new ib(this.__wrapped__);
                        return e.__actions__ = rJ(this.__actions__),
                        e.__dir__ = this.__dir__,
                        e.__filtered__ = this.__filtered__,
                        e.__iteratees__ = rJ(this.__iteratees__),
                        e.__takeCount__ = this.__takeCount__,
                        e.__views__ = rJ(this.__views__),
                        e
                    }
                    ,
                    ib.prototype.reverse = function() {
                        if (this.__filtered__) {
                            var e = new ib(this);
                            e.__dir__ = -1,
                            e.__filtered__ = !0
                        } else
                            e = this.clone(),
                            e.__dir__ *= -1;
                        return e
                    }
                    ,
                    ib.prototype.value = function() {
                        var e = this.__wrapped__.value()
                          , t = this.__dir__
                          , i = sU(e)
                          , r = t < 0
                          , n = i ? e.length : 0
                          , s = function(e, t, i) {
                            for (var r = -1, n = i.length; ++r < n; ) {
                                var s = i[r]
                                  , o = s.size;
                                switch (s.type) {
                                case "drop":
                                    e += o;
                                    break;
                                case "dropRight":
                                    t -= o;
                                    break;
                                case "take":
                                    t = t3(t, e + o);
                                    break;
                                case "takeRight":
                                    e = t6(e, t - o)
                                }
                            }
                            return {
                                start: e,
                                end: t
                            }
                        }(0, n, this.__views__)
                          , o = s.start
                          , a = s.end
                          , c = a - o
                          , h = r ? a : o - 1
                          , l = this.__iteratees__
                          , u = l.length
                          , p = 0
                          , f = t3(c, this.__takeCount__);
                        if (!i || !r && n == c && f == c)
                            return rj(e, this.__actions__);
                        var d = [];
                        e: for (; c-- && p < f; ) {
                            h += t;
                            for (var g = -1, v = e[h]; ++g < u; ) {
                                var y = l[g]
                                  , m = y.iteratee
                                  , _ = y.type
                                  , w = m(v);
                                if (2 == _)
                                    v = w;
                                else if (!w) {
                                    if (1 == _)
                                        continue e;
                                    break e
                                }
                            }
                            d[p++] = v
                        }
                        return d
                    }
                    ,
                    iy.prototype.at = su,
                    iy.prototype.chain = function() {
                        return sh(this)
                    }
                    ,
                    iy.prototype.commit = function() {
                        return new iw(this.value(),this.__chain__)
                    }
                    ,
                    iy.prototype.next = function() {
                        this.__values__ === i && (this.__values__ = s9(this.value()));
                        var e = this.__index__ >= this.__values__.length
                          , t = e ? i : this.__values__[this.__index__++];
                        return {
                            done: e,
                            value: t
                        }
                    }
                    ,
                    iy.prototype.plant = function(e) {
                        for (var t, r = this; r instanceof i_; ) {
                            var n = nF(r);
                            n.__index__ = 0,
                            n.__values__ = i,
                            t ? s.__wrapped__ = n : t = n;
                            var s = n;
                            r = r.__wrapped__
                        }
                        return s.__wrapped__ = e,
                        t
                    }
                    ,
                    iy.prototype.reverse = function() {
                        var e = this.__wrapped__;
                        if (e instanceof ib) {
                            var t = e;
                            return this.__actions__.length && (t = new ib(this)),
                            (t = t.reverse()).__actions__.push({
                                func: sl,
                                args: [n8],
                                thisArg: i
                            }),
                            new iw(t,this.__chain__)
                        }
                        return this.thru(n8)
                    }
                    ,
                    iy.prototype.toJSON = iy.prototype.valueOf = iy.prototype.value = function() {
                        return rj(this.__wrapped__, this.__actions__)
                    }
                    ,
                    iy.prototype.first = iy.prototype.head,
                    e2 && (iy.prototype[e2] = function() {
                        return this
                    }
                    ),
                    iy
                }();
                e2 ? ((e2.exports = tJ)._ = tJ,
                e3._ = tJ) : e6._ = tJ
            }
            ).call(iP)
        }(iS, iS.exports);
        var iO = Object.defineProperty
          , iR = Object.defineProperties
          , ix = Object.getOwnPropertyDescriptors
          , iC = Object.getOwnPropertySymbols
          , iA = Object.prototype.hasOwnProperty
          , iN = Object.prototype.propertyIsEnumerable
          , iT = (e,t,i)=>t in e ? iO(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , iq = (e,t)=>{
            for (var i in t || (t = {}))
                iA.call(t, i) && iT(e, i, t[i]);
            if (iC)
                for (var i of iC(t))
                    iN.call(t, i) && iT(e, i, t[i]);
            return e
        }
          , ij = (e,t)=>iR(e, ix(t));
        function iD(e, t, i) {
            var r;
            let n = (0,
            s.DQ)(e);
            return (null == (r = t.rpcMap) ? void 0 : r[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${i}`
        }
        function iL(e) {
            return e.includes(":") ? e.split(":")[1] : e
        }
        function iz(e) {
            return e.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)
        }
        function iM(e) {
            var t, i, r, n;
            let o = {};
            if (!(0,
            s.L5)(e))
                return o;
            for (let[a,c] of Object.entries(e)) {
                let e = (0,
                s.gp)(a) ? [a] : c.chains
                  , h = c.methods || []
                  , l = c.events || []
                  , u = c.rpcMap || {}
                  , p = (0,
                s.M)(a);
                o[p] = ij(iq(iq({}, o[p]), c), {
                    chains: (0,
                    s.eG)(e, null == (t = o[p]) ? void 0 : t.chains),
                    methods: (0,
                    s.eG)(h, null == (i = o[p]) ? void 0 : i.methods),
                    events: (0,
                    s.eG)(l, null == (r = o[p]) ? void 0 : r.events),
                    rpcMap: iq(iq({}, u), null == (n = o[p]) ? void 0 : n.rpcMap)
                })
            }
            return o
        }
        function ik(e) {
            return e.includes(":") ? e.split(":")[2] : e
        }
        function i$(e) {
            return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
        }
        let iU = {}
          , iH = e=>iU[e]
          , iV = (e,t)=>{
            iU[e] = t
        }
        ;
        class iK {
            constructor(e) {
                this.name = "polkadot",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e && e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]) || []
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    var i;
                    let r = iL(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                ),
                e
            }
            getHttpProvider() {
                let e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                let i = t || iD(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.Z(i,iH("disableProviderPing")))
            }
        }
        class iB {
            constructor(e) {
                this.name = "eip155",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.httpProviders = this.createHttpProviders(),
                this.chainId = parseInt(this.getDefaultChain())
            }
            async request(e) {
                switch (e.request.method) {
                case "eth_requestAccounts":
                case "eth_accounts":
                    return this.getAccounts();
                case "wallet_switchEthereumChain":
                    return await this.handleSwitchChain(e);
                case "eth_chainId":
                    return parseInt(this.getDefaultChain())
                }
                return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
                this.chainId = parseInt(e),
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId.toString();
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            createHttpProvider(e, t) {
                let i = t || iD(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.k(i,iH("disableProviderPing")))
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    var i;
                    let r = parseInt(iL(t));
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                ),
                e
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e ? [...new Set(e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]))] : []
            }
            getHttpProvider() {
                let e = this.chainId
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            async handleSwitchChain(e) {
                var t, i;
                let r = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                r = r.startsWith("0x") ? r : `0x${r}`;
                let n = parseInt(r, 16);
                if (this.isChainApproved(n))
                    this.setDefaultChain(`${n}`);
                else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
                    await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: r
                            }]
                        },
                        chainId: null == (i = this.namespace.chains) ? void 0 : i[0]
                    }),
                    this.setDefaultChain(`${n}`);
                else
                    throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                return null
            }
            isChainApproved(e) {
                return this.namespace.chains.includes(`${this.name}:${e}`)
            }
        }
        class iF {
            constructor(e) {
                this.name = "solana",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e ? [...new Set(e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]))] : []
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    var i;
                    let r = iL(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                ),
                e
            }
            getHttpProvider() {
                let e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                let i = t || iD(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.Z(i,iH("disableProviderPing")))
            }
        }
        class iZ {
            constructor(e) {
                this.name = "cosmos",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e ? [...new Set(e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]))] : []
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    var i;
                    let r = iL(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                ),
                e
            }
            getHttpProvider() {
                let e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                let i = t || iD(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.Z(i,iH("disableProviderPing")))
            }
        }
        class iJ {
            constructor(e) {
                this.name = "cip34",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e ? [...new Set(e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]))] : []
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    let i = this.getCardanoRPCUrl(t)
                      , r = iL(t);
                    e[r] = this.createHttpProvider(r, i)
                }
                ),
                e
            }
            getHttpProvider() {
                let e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            getCardanoRPCUrl(e) {
                let t = this.namespace.rpcMap;
                if (t)
                    return t[e]
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                let i = t || this.getCardanoRPCUrl(e);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.Z(i,iH("disableProviderPing")))
            }
        }
        class iW {
            constructor(e) {
                this.name = "elrond",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e ? [...new Set(e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]))] : []
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    var i;
                    let r = iL(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                ),
                e
            }
            getHttpProvider() {
                let e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                let i = t || iD(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.Z(i,iH("disableProviderPing")))
            }
        }
        class iG {
            constructor(e) {
                this.name = "multiversx",
                this.namespace = e.namespace,
                this.events = iH("events"),
                this.client = iH("client"),
                this.chainId = this.getDefaultChain(),
                this.httpProviders = this.createHttpProviders()
            }
            updateNamespace(e) {
                this.namespace = Object.assign(this.namespace, e)
            }
            requestAccounts() {
                return this.getAccounts()
            }
            request(e) {
                return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
            }
            setDefaultChain(e, t) {
                this.httpProviders[e] || this.setHttpProvider(e, t),
                this.chainId = e,
                this.events.emit(iI.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
            }
            getDefaultChain() {
                if (this.chainId)
                    return this.chainId;
                if (this.namespace.defaultChain)
                    return this.namespace.defaultChain;
                let e = this.namespace.chains[0];
                if (!e)
                    throw Error("ChainId not found");
                return e.split(":")[1]
            }
            getAccounts() {
                let e = this.namespace.accounts;
                return e ? [...new Set(e.filter(e=>e.split(":")[1] === this.chainId.toString()).map(e=>e.split(":")[2]))] : []
            }
            createHttpProviders() {
                let e = {};
                return this.namespace.chains.forEach(t=>{
                    var i;
                    let r = iL(t);
                    e[r] = this.createHttpProvider(r, null == (i = this.namespace.rpcMap) ? void 0 : i[t])
                }
                ),
                e
            }
            getHttpProvider() {
                let e = `${this.name}:${this.chainId}`
                  , t = this.httpProviders[e];
                if (typeof t > "u")
                    throw Error(`JSON-RPC provider for ${e} not found`);
                return t
            }
            setHttpProvider(e, t) {
                let i = this.createHttpProvider(e, t);
                i && (this.httpProviders[e] = i)
            }
            createHttpProvider(e, t) {
                let i = t || iD(e, this.namespace, this.client.core.projectId);
                if (!i)
                    throw Error(`No RPC url provided for chainId: ${e}`);
                return new D.r(new iw.Z(i,iH("disableProviderPing")))
            }
        }
        var iQ = Object.defineProperty
          , iY = Object.defineProperties
          , iX = Object.getOwnPropertyDescriptors
          , i0 = Object.getOwnPropertySymbols
          , i1 = Object.prototype.hasOwnProperty
          , i5 = Object.prototype.propertyIsEnumerable
          , i6 = (e,t,i)=>t in e ? iQ(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , i3 = (e,t)=>{
            for (var i in t || (t = {}))
                i1.call(t, i) && i6(e, i, t[i]);
            if (i0)
                for (var i of i0(t))
                    i5.call(t, i) && i6(e, i, t[i]);
            return e
        }
          , i2 = (e,t)=>iY(e, iX(t));
        class i4 {
            constructor(e) {
                this.events = new (n()),
                this.rpcProviders = {},
                this.shouldAbortPairingAttempt = !1,
                this.maxPairingAttempts = 10,
                this.disableProviderPing = !1,
                this.providerOpts = e,
                this.logger = "u" > typeof e?.logger && "string" != typeof e?.logger ? e.logger : (0,
                c.pino)((0,
                c.getDefaultLoggerOptions)({
                    level: e?.logger || ib
                })),
                this.disableProviderPing = e?.disableProviderPing || !1
            }
            static async init(e) {
                let t = new i4(e);
                return await t.initialize(),
                t
            }
            async request(e, t) {
                let[i,r] = this.validateChain(t);
                if (!this.session)
                    throw Error("Please call connect() before request()");
                return await this.getProvider(i).request({
                    request: i3({}, e),
                    chainId: `${i}:${r}`,
                    topic: this.session.topic
                })
            }
            sendAsync(e, t, i) {
                this.request(e, i).then(e=>t(null, e)).catch(e=>t(e, void 0))
            }
            async enable() {
                if (!this.client)
                    throw Error("Sign Client not initialized");
                return this.session || await this.connect({
                    namespaces: this.namespaces,
                    optionalNamespaces: this.optionalNamespaces,
                    sessionProperties: this.sessionProperties
                }),
                await this.requestAccounts()
            }
            async disconnect() {
                var e;
                if (!this.session)
                    throw Error("Please call connect() before enable()");
                await this.client.disconnect({
                    topic: null == (e = this.session) ? void 0 : e.topic,
                    reason: (0,
                    s.D6)("USER_DISCONNECTED")
                }),
                await this.cleanup()
            }
            async connect(e) {
                if (!this.client)
                    throw Error("Sign Client not initialized");
                if (this.setNamespaces(e),
                await this.cleanupPendingPairings(),
                !e.skipPairing)
                    return await this.pair(e.pairingTopic)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            get isWalletConnect() {
                return !0
            }
            async pair(e) {
                this.shouldAbortPairingAttempt = !1;
                let t = 0;
                do {
                    if (this.shouldAbortPairingAttempt)
                        throw Error("Pairing aborted");
                    if (t >= this.maxPairingAttempts)
                        throw Error("Max auto pairing attempts reached");
                    let {uri: i, approval: r} = await this.client.connect({
                        pairingTopic: e,
                        requiredNamespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    });
                    i && (this.uri = i,
                    this.events.emit("display_uri", i)),
                    await r().then(e=>{
                        this.session = e,
                        this.namespaces || (this.namespaces = function(e) {
                            let t = {};
                            for (let[i,r] of Object.entries(e)) {
                                let e = r.methods || []
                                  , n = r.events || []
                                  , o = r.accounts || []
                                  , a = (0,
                                s.gp)(i) ? [i] : r.chains ? r.chains : iz(r.accounts);
                                t[i] = {
                                    chains: a,
                                    methods: e,
                                    events: n,
                                    accounts: o
                                }
                            }
                            return t
                        }(e.namespaces),
                        this.persist("namespaces", this.namespaces))
                    }
                    ).catch(e=>{
                        if (e.message !== t7)
                            throw e;
                        t++
                    }
                    )
                } while (!this.session);
                return this.onConnect(),
                this.session
            }
            setDefaultChain(e, t) {
                try {
                    if (!this.session)
                        return;
                    let[i,r] = this.validateChain(e);
                    this.getProvider(i).setDefaultChain(r, t)
                } catch (e) {
                    if (!/Please call connect/.test(e.message))
                        throw e
                }
            }
            async cleanupPendingPairings(e={}) {
                this.logger.info("Cleaning up inactive pairings...");
                let t = this.client.pairing.getAll();
                if ((0,
                s.qt)(t)) {
                    for (let i of t)
                        e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
                    this.logger.info(`Inactive pairings cleared: ${t.length}`)
                }
            }
            abortPairingAttempt() {
                this.shouldAbortPairingAttempt = !0
            }
            async checkStorage() {
                if (this.namespaces = await this.getFromStore("namespaces"),
                this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
                this.client.session.length) {
                    let e = this.client.session.keys.length - 1;
                    this.session = this.client.session.get(this.client.session.keys[e]),
                    this.createProviders()
                }
            }
            async initialize() {
                this.logger.trace("Initialized"),
                await this.createClient(),
                await this.checkStorage(),
                this.registerEventListeners()
            }
            async createClient() {
                this.client = this.providerOpts.client || await i_.init({
                    logger: this.providerOpts.logger || ib,
                    relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                    projectId: this.providerOpts.projectId,
                    metadata: this.providerOpts.metadata,
                    storageOptions: this.providerOpts.storageOptions,
                    storage: this.providerOpts.storage,
                    name: this.providerOpts.name
                }),
                this.logger.trace("SignClient Initialized")
            }
            createProviders() {
                if (!this.client)
                    throw Error("Sign Client not initialized");
                if (!this.session)
                    throw Error("Session not initialized. Please call connect() before enable()");
                let e = [...new Set(Object.keys(this.session.namespaces).map(e=>(0,
                s.M)(e)))];
                iV("client", this.client),
                iV("events", this.events),
                iV("disableProviderPing", this.disableProviderPing),
                e.forEach(e=>{
                    if (!this.session)
                        return;
                    let t = function(e, t) {
                        let i = Object.keys(t.namespaces).filter(t=>t.includes(e));
                        if (!i.length)
                            return [];
                        let r = [];
                        return i.forEach(e=>{
                            let i = t.namespaces[e].accounts;
                            r.push(...i)
                        }
                        ),
                        r
                    }(e, this.session)
                      , i = iz(t)
                      , r = function(e={}, t={}) {
                        let i = iM(e)
                          , r = iM(t);
                        return iS.exports.merge(i, r)
                    }(this.namespaces, this.optionalNamespaces)
                      , n = i2(i3({}, r[e]), {
                        accounts: t,
                        chains: i
                    });
                    switch (e) {
                    case "eip155":
                        this.rpcProviders[e] = new iB({
                            namespace: n
                        });
                        break;
                    case "solana":
                        this.rpcProviders[e] = new iF({
                            namespace: n
                        });
                        break;
                    case "cosmos":
                        this.rpcProviders[e] = new iZ({
                            namespace: n
                        });
                        break;
                    case "polkadot":
                        this.rpcProviders[e] = new iK({
                            namespace: n
                        });
                        break;
                    case "cip34":
                        this.rpcProviders[e] = new iJ({
                            namespace: n
                        });
                        break;
                    case "elrond":
                        this.rpcProviders[e] = new iW({
                            namespace: n
                        });
                        break;
                    case "multiversx":
                        this.rpcProviders[e] = new iG({
                            namespace: n
                        })
                    }
                }
                )
            }
            registerEventListeners() {
                if (typeof this.client > "u")
                    throw Error("Sign Client is not initialized");
                this.client.on("session_ping", e=>{
                    this.events.emit("session_ping", e)
                }
                ),
                this.client.on("session_event", e=>{
                    let {params: t} = e
                      , {event: i} = t;
                    if ("accountsChanged" === i.name) {
                        let e = i.data;
                        e && (0,
                        s.qt)(e) && this.events.emit("accountsChanged", e.map(ik))
                    } else if ("chainChanged" === i.name) {
                        let e = t.chainId
                          , i = t.event.data
                          , r = (0,
                        s.M)(e)
                          , n = i$(e) !== i$(i) ? `${r}:${i$(i)}` : e;
                        this.onChainChanged(n)
                    } else
                        this.events.emit(i.name, i.data);
                    this.events.emit("session_event", e)
                }
                ),
                this.client.on("session_update", ({topic: e, params: t})=>{
                    var i;
                    let {namespaces: r} = t
                      , n = null == (i = this.client) ? void 0 : i.session.get(e);
                    this.session = i2(i3({}, n), {
                        namespaces: r
                    }),
                    this.onSessionUpdate(),
                    this.events.emit("session_update", {
                        topic: e,
                        params: t
                    })
                }
                ),
                this.client.on("session_delete", async e=>{
                    await this.cleanup(),
                    this.events.emit("session_delete", e),
                    this.events.emit("disconnect", i2(i3({}, (0,
                    s.D6)("USER_DISCONNECTED")), {
                        data: e.topic
                    }))
                }
                ),
                this.on(iI.DEFAULT_CHAIN_CHANGED, e=>{
                    this.onChainChanged(e, !0)
                }
                )
            }
            getProvider(e) {
                if (!this.rpcProviders[e])
                    throw Error(`Provider not found: ${e}`);
                return this.rpcProviders[e]
            }
            onSessionUpdate() {
                Object.keys(this.rpcProviders).forEach(e=>{
                    var t;
                    this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                }
                )
            }
            setNamespaces(e) {
                let {namespaces: t, optionalNamespaces: i, sessionProperties: r} = e;
                t && Object.keys(t).length && (this.namespaces = t),
                i && Object.keys(i).length && (this.optionalNamespaces = i),
                this.sessionProperties = r,
                this.persist("namespaces", t),
                this.persist("optionalNamespaces", i)
            }
            validateChain(e) {
                let[t,i] = e?.split(":") || ["", ""];
                if (!this.namespaces || !Object.keys(this.namespaces).length)
                    return [t, i];
                if (t && !Object.keys(this.namespaces || {}).map(e=>(0,
                s.M)(e)).includes(t))
                    throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                if (t && i)
                    return [t, i];
                let r = (0,
                s.M)(Object.keys(this.namespaces)[0])
                  , n = this.rpcProviders[r].getDefaultChain();
                return [r, n]
            }
            async requestAccounts() {
                let[e] = this.validateChain();
                return await this.getProvider(e).requestAccounts()
            }
            onChainChanged(e, t=!1) {
                var i;
                if (!this.namespaces)
                    return;
                let[r,n] = this.validateChain(e);
                t || this.getProvider(r).setDefaultChain(n),
                (null != (i = this.namespaces[r]) ? i : this.namespaces[`${r}:${n}`]).defaultChain = n,
                this.persist("namespaces", this.namespaces),
                this.events.emit("chainChanged", n)
            }
            onConnect() {
                this.createProviders(),
                this.events.emit("connect", {
                    session: this.session
                })
            }
            async cleanup() {
                this.session = void 0,
                this.namespaces = void 0,
                this.optionalNamespaces = void 0,
                this.sessionProperties = void 0,
                this.persist("namespaces", void 0),
                this.persist("optionalNamespaces", void 0),
                this.persist("sessionProperties", void 0),
                await this.cleanupPendingPairings({
                    deletePairings: !0
                })
            }
            persist(e, t) {
                this.client.core.storage.setItem(`${iE}/${e}`, t)
            }
            async getFromStore(e) {
                return await this.client.core.storage.getItem(`${iE}/${e}`)
            }
        }
        let i8 = ["eth_sendTransaction", "personal_sign"]
          , i7 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
          , i9 = ["chainChanged", "accountsChanged"]
          , re = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
        var rt = Object.defineProperty
          , ri = Object.defineProperties
          , rr = Object.getOwnPropertyDescriptors
          , rn = Object.getOwnPropertySymbols
          , rs = Object.prototype.hasOwnProperty
          , ro = Object.prototype.propertyIsEnumerable
          , ra = (e,t,i)=>t in e ? rt(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , rc = (e,t)=>{
            for (var i in t || (t = {}))
                rs.call(t, i) && ra(e, i, t[i]);
            if (rn)
                for (var i of rn(t))
                    ro.call(t, i) && ra(e, i, t[i]);
            return e
        }
          , rh = (e,t)=>ri(e, rr(t));
        function rl(e) {
            return Number(e[0].split(":")[1])
        }
        function ru(e) {
            return `0x${e.toString(16)}`
        }
        class rp {
            constructor() {
                this.events = new r.EventEmitter,
                this.namespace = "eip155",
                this.accounts = [],
                this.chainId = 1,
                this.STORAGE_KEY = "wc@2:ethereum_provider:",
                this.on = (e,t)=>(this.events.on(e, t),
                this),
                this.once = (e,t)=>(this.events.once(e, t),
                this),
                this.removeListener = (e,t)=>(this.events.removeListener(e, t),
                this),
                this.off = (e,t)=>(this.events.off(e, t),
                this),
                this.parseAccount = e=>this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e,
                this.signer = {},
                this.rpc = {}
            }
            static async init(e) {
                let t = new rp;
                return await t.initialize(e),
                t
            }
            async request(e) {
                return await this.signer.request(e, this.formatChainId(this.chainId))
            }
            sendAsync(e, t) {
                this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
            }
            get connected() {
                return !!this.signer.client && this.signer.client.core.relayer.connected
            }
            get connecting() {
                return !!this.signer.client && this.signer.client.core.relayer.connecting
            }
            async enable() {
                return this.session || await this.connect(),
                await this.request({
                    method: "eth_requestAccounts"
                })
            }
            async connect(e) {
                if (!this.signer.client)
                    throw Error("Provider not initialized. Call init() first");
                this.loadConnectOpts(e);
                let {required: t, optional: i} = function(e) {
                    let {chains: t, optionalChains: i, methods: r, optionalMethods: n, events: o, optionalEvents: a, rpcMap: c} = e;
                    if (!(0,
                    s.qt)(t))
                        throw Error("Invalid chains");
                    let h = {
                        chains: t,
                        methods: r || i8,
                        events: o || i9,
                        rpcMap: rc({}, t.length ? {
                            [rl(t)]: c[rl(t)]
                        } : {})
                    }
                      , l = o?.filter(e=>!i9.includes(e))
                      , u = r?.filter(e=>!i8.includes(e));
                    if (!i && !a && !n && !(null != l && l.length) && !(null != u && u.length))
                        return {
                            required: t.length ? h : void 0
                        };
                    let p = l?.length && u?.length || !i
                      , f = {
                        chains: [...new Set(p ? h.chains.concat(i || []) : i)],
                        methods: [...new Set(h.methods.concat(null != n && n.length ? n : i7))],
                        events: [...new Set(h.events.concat(null != a && a.length ? a : re))],
                        rpcMap: c
                    };
                    return {
                        required: t.length ? h : void 0,
                        optional: i.length ? f : void 0
                    }
                }(this.rpc);
                try {
                    let r = await new Promise(async(r,n)=>{
                        var s;
                        this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e=>{
                            e.open || this.signer.session || (this.signer.abortPairingAttempt(),
                            n(Error("Connection request reset. Please try again.")))
                        }
                        )),
                        await this.signer.connect(rh(rc({
                            namespaces: rc({}, t && {
                                [this.namespace]: t
                            })
                        }, i && {
                            optionalNamespaces: {
                                [this.namespace]: i
                            }
                        }), {
                            pairingTopic: e?.pairingTopic
                        })).then(e=>{
                            r(e)
                        }
                        ).catch(e=>{
                            n(Error(e.message))
                        }
                        )
                    }
                    );
                    if (!r)
                        return;
                    let n = (0,
                    s.gu)(r.namespaces, [this.namespace]);
                    this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
                    this.setAccounts(n),
                    this.events.emit("connect", {
                        chainId: ru(this.chainId)
                    })
                } catch (e) {
                    throw this.signer.logger.error(e),
                    e
                } finally {
                    this.modal && this.modal.closeModal()
                }
            }
            async disconnect() {
                this.session && await this.signer.disconnect(),
                this.reset()
            }
            get isWalletConnect() {
                return !0
            }
            get session() {
                return this.signer.session
            }
            registerEventListeners() {
                this.signer.on("session_event", e=>{
                    let {params: t} = e
                      , {event: i} = t;
                    "accountsChanged" === i.name ? (this.accounts = this.parseAccounts(i.data),
                    this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === i.name ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data),
                    this.events.emit("session_event", e)
                }
                ),
                this.signer.on("chainChanged", e=>{
                    let t = parseInt(e);
                    this.chainId = t,
                    this.events.emit("chainChanged", ru(this.chainId)),
                    this.persist()
                }
                ),
                this.signer.on("session_update", e=>{
                    this.events.emit("session_update", e)
                }
                ),
                this.signer.on("session_delete", e=>{
                    this.reset(),
                    this.events.emit("session_delete", e),
                    this.events.emit("disconnect", rh(rc({}, (0,
                    s.D6)("USER_DISCONNECTED")), {
                        data: e.topic,
                        name: "USER_DISCONNECTED"
                    }))
                }
                ),
                this.signer.on("display_uri", e=>{
                    var t, i;
                    this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(),
                    null == (i = this.modal) || i.openModal({
                        uri: e
                    })),
                    this.events.emit("display_uri", e)
                }
                )
            }
            switchEthereumChain(e) {
                this.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: e.toString(16)
                    }]
                })
            }
            isCompatibleChainId(e) {
                return "string" == typeof e && e.startsWith(`${this.namespace}:`)
            }
            formatChainId(e) {
                return `${this.namespace}:${e}`
            }
            parseChainId(e) {
                return Number(e.split(":")[1])
            }
            setChainIds(e) {
                let t = e.filter(e=>this.isCompatibleChainId(e)).map(e=>this.parseChainId(e));
                t.length && (this.chainId = t[0],
                this.events.emit("chainChanged", ru(this.chainId)),
                this.persist())
            }
            setChainId(e) {
                if (this.isCompatibleChainId(e)) {
                    let t = this.parseChainId(e);
                    this.chainId = t,
                    this.switchEthereumChain(t)
                }
            }
            parseAccountId(e) {
                let[t,i,r] = e.split(":");
                return {
                    chainId: `${t}:${i}`,
                    address: r
                }
            }
            setAccounts(e) {
                this.accounts = e.filter(e=>this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e=>this.parseAccountId(e).address),
                this.events.emit("accountsChanged", this.accounts)
            }
            getRpcConfig(e) {
                var t, i;
                let r = null != (t = e?.chains) ? t : []
                  , n = null != (i = e?.optionalChains) ? i : []
                  , s = r.concat(n);
                if (!s.length)
                    throw Error("No chains specified in either `chains` or `optionalChains`");
                let o = r.length ? e?.methods || i8 : []
                  , a = r.length ? e?.events || i9 : []
                  , c = e?.optionalMethods || []
                  , h = e?.optionalEvents || []
                  , l = e?.rpcMap || this.buildRpcMap(s, e.projectId)
                  , u = e?.qrModalOptions || void 0;
                return {
                    chains: r?.map(e=>this.formatChainId(e)),
                    optionalChains: n.map(e=>this.formatChainId(e)),
                    methods: o,
                    events: a,
                    optionalMethods: c,
                    optionalEvents: h,
                    rpcMap: l,
                    showQrModal: !!(null != e && e.showQrModal),
                    qrModalOptions: u,
                    projectId: e.projectId,
                    metadata: e.metadata
                }
            }
            buildRpcMap(e, t) {
                let i = {};
                return e.forEach(e=>{
                    i[e] = this.getRpcUrl(e, t)
                }
                ),
                i
            }
            async initialize(e) {
                if (this.rpc = this.getRpcConfig(e),
                this.chainId = this.rpc.chains.length ? rl(this.rpc.chains) : rl(this.rpc.optionalChains),
                this.signer = await i4.init({
                    projectId: this.rpc.projectId,
                    metadata: this.rpc.metadata,
                    disableProviderPing: e.disableProviderPing,
                    relayUrl: e.relayUrl,
                    storageOptions: e.storageOptions
                }),
                this.registerEventListeners(),
                await this.loadPersistedSession(),
                this.rpc.showQrModal) {
                    let e;
                    try {
                        let {WalletConnectModal: t} = await i.e(4378).then(i.bind(i, 24378));
                        e = t
                    } catch {
                        throw Error("To use QR modal, please install @walletconnect/modal package")
                    }
                    if (e)
                        try {
                            this.modal = new e(rc({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e),
                            Error("Could not generate WalletConnectModal Instance")
                        }
                }
            }
            loadConnectOpts(e) {
                if (!e)
                    return;
                let {chains: t, optionalChains: i, rpcMap: r} = e;
                t && (0,
                s.qt)(t) && (this.rpc.chains = t.map(e=>this.formatChainId(e)),
                t.forEach(e=>{
                    this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e)
                }
                )),
                i && (0,
                s.qt)(i) && (this.rpc.optionalChains = [],
                this.rpc.optionalChains = i?.map(e=>this.formatChainId(e)),
                i.forEach(e=>{
                    this.rpc.rpcMap[e] = r?.[e] || this.getRpcUrl(e)
                }
                ))
            }
            getRpcUrl(e, t) {
                var i;
                return (null == (i = this.rpc.rpcMap) ? void 0 : i[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
            }
            async loadPersistedSession() {
                if (!this.session)
                    return;
                let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
                  , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                this.setAccounts(t?.accounts)
            }
            reset() {
                this.chainId = 1,
                this.accounts = []
            }
            persist() {
                this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
            }
            parseAccounts(e) {
                return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e=>this.parseAccount(e))
            }
        }
        let rf = rp
    },
    5774: function(e, t, i) {
        "use strict";
        i.d(t, {
            q: function() {
                return r
            }
        });
        class r {
        }
    },
    33843: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            IEvents: function() {
                return r.q
            }
        });
        var r = i(5774)
    },
    57052: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
        let r = i(10666);
        t.HEARTBEAT_INTERVAL = r.FIVE_SECONDS,
        t.HEARTBEAT_EVENTS = {
            pulse: "heartbeat_pulse"
        }
    },
    13566: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let r = i(5163);
        r.__exportStar(i(57052), t)
    },
    47798: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.HeartBeat = void 0;
        let r = i(5163)
          , n = i(22699)
          , s = i(10666)
          , o = i(87826)
          , a = i(13566);
        class c extends o.IHeartBeat {
            constructor(e) {
                super(e),
                this.events = new n.EventEmitter,
                this.interval = a.HEARTBEAT_INTERVAL,
                this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
            }
            static init(e) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let t = new c(e);
                    return yield t.init(),
                    t
                })
            }
            init() {
                return r.__awaiter(this, void 0, void 0, function*() {
                    yield this.initialize()
                })
            }
            stop() {
                clearInterval(this.intervalRef)
            }
            on(e, t) {
                this.events.on(e, t)
            }
            once(e, t) {
                this.events.once(e, t)
            }
            off(e, t) {
                this.events.off(e, t)
            }
            removeListener(e, t) {
                this.events.removeListener(e, t)
            }
            initialize() {
                return r.__awaiter(this, void 0, void 0, function*() {
                    this.intervalRef = setInterval(()=>this.pulse(), s.toMiliseconds(this.interval))
                })
            }
            pulse() {
                this.events.emit(a.HEARTBEAT_EVENTS.pulse)
            }
        }
        t.HeartBeat = c
    },
    67660: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let r = i(5163);
        r.__exportStar(i(47798), t),
        r.__exportStar(i(87826), t),
        r.__exportStar(i(13566), t)
    },
    81829: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.IHeartBeat = void 0;
        let r = i(33843);
        class n extends r.IEvents {
            constructor(e) {
                super()
            }
        }
        t.IHeartBeat = n
    },
    87826: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let r = i(5163);
        r.__exportStar(i(81829), t)
    },
    68385: function(e, t, i) {
        "use strict";
        let r = i(5163)
          , n = i(26041)
          , s = r.__importDefault(i(12585))
          , o = i(21833);
        t.ZP = class {
            constructor() {
                this.localStorage = s.default
            }
            getKeys() {
                return r.__awaiter(this, void 0, void 0, function*() {
                    return Object.keys(this.localStorage)
                })
            }
            getEntries() {
                return r.__awaiter(this, void 0, void 0, function*() {
                    return Object.entries(this.localStorage).map(o.parseEntry)
                })
            }
            getItem(e) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    let t = this.localStorage.getItem(e);
                    if (null !== t)
                        return n.safeJsonParse(t)
                })
            }
            setItem(e, t) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    this.localStorage.setItem(e, n.safeJsonStringify(t))
                })
            }
            removeItem(e) {
                return r.__awaiter(this, void 0, void 0, function*() {
                    this.localStorage.removeItem(e)
                })
            }
        }
    },
    12585: function(e, t, i) {
        "use strict";
        !function() {
            function t() {}
            t.prototype.getItem = function(e) {
                return this.hasOwnProperty(e) ? String(this[e]) : null
            }
            ,
            t.prototype.setItem = function(e, t) {
                this[e] = String(t)
            }
            ,
            t.prototype.removeItem = function(e) {
                delete this[e]
            }
            ,
            t.prototype.clear = function() {
                let e = this;
                Object.keys(e).forEach(function(t) {
                    e[t] = void 0,
                    delete e[t]
                })
            }
            ,
            t.prototype.key = function(e) {
                return e = e || 0,
                Object.keys(this)[e]
            }
            ,
            t.prototype.__defineGetter__("length", function() {
                return Object.keys(this).length
            }),
            void 0 !== i.g && i.g.localStorage ? e.exports = i.g.localStorage : "undefined" != typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new t
        }()
    },
    21833: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        let r = i(5163);
        r.__exportStar(i(72073), t),
        r.__exportStar(i(27793), t)
    },
    72073: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.IKeyValueStorage = void 0,
        t.IKeyValueStorage = class {
        }
    },
    27793: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseEntry = void 0;
        let r = i(26041);
        t.parseEntry = function(e) {
            var t;
            return [e[0], r.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
        }
    },
    47337: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0,
        t.PINO_LOGGER_DEFAULTS = {
            level: "info"
        },
        t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
    },
    52500: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pino = void 0;
        let r = i(5163)
          , n = r.__importDefault(i(69413));
        Object.defineProperty(t, "pino", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        }),
        r.__exportStar(i(47337), t),
        r.__exportStar(i(48846), t)
    },
    48846: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
        let r = i(47337);
        function n(e, t=r.PINO_CUSTOM_CONTEXT_KEY) {
            return e[t] || ""
        }
        function s(e, t, i=r.PINO_CUSTOM_CONTEXT_KEY) {
            return e[i] = t,
            e
        }
        function o(e, t=r.PINO_CUSTOM_CONTEXT_KEY) {
            return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
        }
        function a(e, t, i=r.PINO_CUSTOM_CONTEXT_KEY) {
            let n = o(e, i)
              , s = n.trim() ? `${n}/${t}` : t;
            return s
        }
        t.getDefaultLoggerOptions = function(e) {
            return Object.assign(Object.assign({}, e), {
                level: (null == e ? void 0 : e.level) || r.PINO_LOGGER_DEFAULTS.level
            })
        }
        ,
        t.getBrowserLoggerContext = n,
        t.setBrowserLoggerContext = s,
        t.getLoggerContext = o,
        t.formatChildLoggerContext = a,
        t.generateChildLogger = function(e, t, i=r.PINO_CUSTOM_CONTEXT_KEY) {
            let n = a(e, t, i)
              , o = e.child({
                context: n
            });
            return s(o, n, i)
        }
    },
    3947: function() {},
    33958: function(e, t, i) {
        e = i.nmd(e);
        var r, n, s, o = "__lodash_hash_undefined__", a = "[object Arguments]", c = "[object Array]", h = "[object Boolean]", l = "[object Date]", u = "[object Error]", p = "[object Function]", f = "[object Map]", d = "[object Number]", g = "[object Object]", v = "[object Promise]", y = "[object RegExp]", m = "[object Set]", _ = "[object String]", w = "[object WeakMap]", b = "[object ArrayBuffer]", E = "[object DataView]", I = /^\[object .+?Constructor\]$/, P = /^(?:0|[1-9]\d*)$/, S = {};
        S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0,
        S[a] = S[c] = S[b] = S[h] = S[E] = S[l] = S[u] = S[p] = S[f] = S[d] = S[g] = S[y] = S[m] = S[_] = S[w] = !1;
        var O = "object" == typeof i.g && i.g && i.g.Object === Object && i.g
          , R = "object" == typeof self && self && self.Object === Object && self
          , x = O || R || Function("return this")()
          , C = t && !t.nodeType && t
          , A = C && e && !e.nodeType && e
          , N = A && A.exports === C
          , T = N && O.process
          , q = function() {
            try {
                return T && T.binding && T.binding("util")
            } catch (e) {}
        }()
          , j = q && q.isTypedArray;
        function D(e) {
            var t = -1
              , i = Array(e.size);
            return e.forEach(function(e, r) {
                i[++t] = [r, e]
            }),
            i
        }
        function L(e) {
            var t = -1
              , i = Array(e.size);
            return e.forEach(function(e) {
                i[++t] = e
            }),
            i
        }
        var z = Array.prototype
          , M = Function.prototype
          , k = Object.prototype
          , $ = x["__core-js_shared__"]
          , U = M.toString
          , H = k.hasOwnProperty
          , V = (r = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : ""
          , K = k.toString
          , B = RegExp("^" + U.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , F = N ? x.Buffer : void 0
          , Z = x.Symbol
          , J = x.Uint8Array
          , W = k.propertyIsEnumerable
          , G = z.splice
          , Q = Z ? Z.toStringTag : void 0
          , Y = Object.getOwnPropertySymbols
          , X = F ? F.isBuffer : void 0
          , ee = (n = Object.keys,
        s = Object,
        function(e) {
            return n(s(e))
        }
        )
          , et = eS(x, "DataView")
          , ei = eS(x, "Map")
          , er = eS(x, "Promise")
          , en = eS(x, "Set")
          , es = eS(x, "WeakMap")
          , eo = eS(Object, "create")
          , ea = ex(et)
          , ec = ex(ei)
          , eh = ex(er)
          , el = ex(en)
          , eu = ex(es)
          , ep = Z ? Z.prototype : void 0
          , ef = ep ? ep.valueOf : void 0;
        function ed(e) {
            var t = -1
              , i = null == e ? 0 : e.length;
            for (this.clear(); ++t < i; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function eg(e) {
            var t = -1
              , i = null == e ? 0 : e.length;
            for (this.clear(); ++t < i; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function ev(e) {
            var t = -1
              , i = null == e ? 0 : e.length;
            for (this.clear(); ++t < i; ) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }
        function ey(e) {
            var t = -1
              , i = null == e ? 0 : e.length;
            for (this.__data__ = new ev; ++t < i; )
                this.add(e[t])
        }
        function em(e) {
            var t = this.__data__ = new eg(e);
            this.size = t.size
        }
        function e_(e, t) {
            for (var i = e.length; i--; )
                if (eC(e[i][0], t))
                    return i;
            return -1
        }
        function ew(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Q && Q in Object(e) ? function(e) {
                var t = H.call(e, Q)
                  , i = e[Q];
                try {
                    e[Q] = void 0;
                    var r = !0
                } catch (e) {}
                var n = K.call(e);
                return r && (t ? e[Q] = i : delete e[Q]),
                n
            }(e) : K.call(e)
        }
        function eb(e) {
            return eL(e) && ew(e) == a
        }
        function eE(e, t, i, r, n, s) {
            var o = 1 & i
              , a = e.length
              , c = t.length;
            if (a != c && !(o && c > a))
                return !1;
            var h = s.get(e);
            if (h && s.get(t))
                return h == t;
            var l = -1
              , u = !0
              , p = 2 & i ? new ey : void 0;
            for (s.set(e, t),
            s.set(t, e); ++l < a; ) {
                var f = e[l]
                  , d = t[l];
                if (r)
                    var g = o ? r(d, f, l, t, e, s) : r(f, d, l, e, t, s);
                if (void 0 !== g) {
                    if (g)
                        continue;
                    u = !1;
                    break
                }
                if (p) {
                    if (!function(e, t) {
                        for (var i = -1, r = null == e ? 0 : e.length; ++i < r; )
                            if (t(e[i], i, e))
                                return !0;
                        return !1
                    }(t, function(e, t) {
                        if (!p.has(t) && (f === e || n(f, e, i, r, s)))
                            return p.push(t)
                    })) {
                        u = !1;
                        break
                    }
                } else if (!(f === d || n(f, d, i, r, s))) {
                    u = !1;
                    break
                }
            }
            return s.delete(e),
            s.delete(t),
            u
        }
        function eI(e) {
            var t;
            return t = function(e) {
                return null != e && ej(e.length) && !eq(e) ? function(e, t) {
                    var i, r = eN(e), n = !r && eA(e), s = !r && !n && eT(e), o = !r && !n && !s && ez(e), a = r || n || s || o, c = a ? function(e, t) {
                        for (var i = -1, r = Array(e); ++i < e; )
                            r[i] = t(i);
                        return r
                    }(e.length, String) : [], h = c.length;
                    for (var l in e)
                        H.call(e, l) && !(a && ("length" == l || s && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (i = null == (i = h) ? 9007199254740991 : i) && ("number" == typeof l || P.test(l)) && l > -1 && l % 1 == 0 && l < i)) && c.push(l);
                    return c
                }(e) : function(e) {
                    if (i = "function" == typeof (t = e && e.constructor) && t.prototype || k,
                    e !== i)
                        return ee(e);
                    var t, i, r = [];
                    for (var n in Object(e))
                        H.call(e, n) && "constructor" != n && r.push(n);
                    return r
                }(e)
            }(e),
            eN(e) ? t : function(e, t) {
                for (var i = -1, r = t.length, n = e.length; ++i < r; )
                    e[n + i] = t[i];
                return e
            }(t, eO(e))
        }
        function eP(e, t) {
            var i, r = e.__data__;
            return ("string" == (i = typeof t) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== t : null === t) ? r["string" == typeof t ? "string" : "hash"] : r.map
        }
        function eS(e, t) {
            var i = null == e ? void 0 : e[t];
            return !(!eD(i) || V && V in i) && (eq(i) ? B : I).test(ex(i)) ? i : void 0
        }
        ed.prototype.clear = function() {
            this.__data__ = eo ? eo(null) : {},
            this.size = 0
        }
        ,
        ed.prototype.delete = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        ed.prototype.get = function(e) {
            var t = this.__data__;
            if (eo) {
                var i = t[e];
                return i === o ? void 0 : i
            }
            return H.call(t, e) ? t[e] : void 0
        }
        ,
        ed.prototype.has = function(e) {
            var t = this.__data__;
            return eo ? void 0 !== t[e] : H.call(t, e)
        }
        ,
        ed.prototype.set = function(e, t) {
            var i = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            i[e] = eo && void 0 === t ? o : t,
            this
        }
        ,
        eg.prototype.clear = function() {
            this.__data__ = [],
            this.size = 0
        }
        ,
        eg.prototype.delete = function(e) {
            var t = this.__data__
              , i = e_(t, e);
            return !(i < 0) && (i == t.length - 1 ? t.pop() : G.call(t, i, 1),
            --this.size,
            !0)
        }
        ,
        eg.prototype.get = function(e) {
            var t = this.__data__
              , i = e_(t, e);
            return i < 0 ? void 0 : t[i][1]
        }
        ,
        eg.prototype.has = function(e) {
            return e_(this.__data__, e) > -1
        }
        ,
        eg.prototype.set = function(e, t) {
            var i = this.__data__
              , r = e_(i, e);
            return r < 0 ? (++this.size,
            i.push([e, t])) : i[r][1] = t,
            this
        }
        ,
        ev.prototype.clear = function() {
            this.size = 0,
            this.__data__ = {
                hash: new ed,
                map: new (ei || eg),
                string: new ed
            }
        }
        ,
        ev.prototype.delete = function(e) {
            var t = eP(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        ,
        ev.prototype.get = function(e) {
            return eP(this, e).get(e)
        }
        ,
        ev.prototype.has = function(e) {
            return eP(this, e).has(e)
        }
        ,
        ev.prototype.set = function(e, t) {
            var i = eP(this, e)
              , r = i.size;
            return i.set(e, t),
            this.size += i.size == r ? 0 : 1,
            this
        }
        ,
        ey.prototype.add = ey.prototype.push = function(e) {
            return this.__data__.set(e, o),
            this
        }
        ,
        ey.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        em.prototype.clear = function() {
            this.__data__ = new eg,
            this.size = 0
        }
        ,
        em.prototype.delete = function(e) {
            var t = this.__data__
              , i = t.delete(e);
            return this.size = t.size,
            i
        }
        ,
        em.prototype.get = function(e) {
            return this.__data__.get(e)
        }
        ,
        em.prototype.has = function(e) {
            return this.__data__.has(e)
        }
        ,
        em.prototype.set = function(e, t) {
            var i = this.__data__;
            if (i instanceof eg) {
                var r = i.__data__;
                if (!ei || r.length < 199)
                    return r.push([e, t]),
                    this.size = ++i.size,
                    this;
                i = this.__data__ = new ev(r)
            }
            return i.set(e, t),
            this.size = i.size,
            this
        }
        ;
        var eO = Y ? function(e) {
            return null == e ? [] : function(e, t) {
                for (var i = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++i < r; ) {
                    var o = e[i];
                    t(o, i, e) && (s[n++] = o)
                }
                return s
            }(Y(e = Object(e)), function(t) {
                return W.call(e, t)
            })
        }
        : function() {
            return []
        }
          , eR = ew;
        function ex(e) {
            if (null != e) {
                try {
                    return U.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }
        function eC(e, t) {
            return e === t || e != e && t != t
        }
        (et && eR(new et(new ArrayBuffer(1))) != E || ei && eR(new ei) != f || er && eR(er.resolve()) != v || en && eR(new en) != m || es && eR(new es) != w) && (eR = function(e) {
            var t = ew(e)
              , i = t == g ? e.constructor : void 0
              , r = i ? ex(i) : "";
            if (r)
                switch (r) {
                case ea:
                    return E;
                case ec:
                    return f;
                case eh:
                    return v;
                case el:
                    return m;
                case eu:
                    return w
                }
            return t
        }
        );
        var eA = eb(function() {
            return arguments
        }()) ? eb : function(e) {
            return eL(e) && H.call(e, "callee") && !W.call(e, "callee")
        }
          , eN = Array.isArray
          , eT = X || function() {
            return !1
        }
        ;
        function eq(e) {
            if (!eD(e))
                return !1;
            var t = ew(e);
            return t == p || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
        function ej(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }
        function eD(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        function eL(e) {
            return null != e && "object" == typeof e
        }
        var ez = j ? function(e) {
            return j(e)
        }
        : function(e) {
            return eL(e) && ej(e.length) && !!S[ew(e)]
        }
        ;
        e.exports = function(e, t) {
            return function e(t, i, r, n, s) {
                return t === i || (null != t && null != i && (eL(t) || eL(i)) ? function(e, t, i, r, n, s) {
                    var o = eN(e)
                      , p = eN(t)
                      , v = o ? c : eR(e)
                      , w = p ? c : eR(t);
                    v = v == a ? g : v,
                    w = w == a ? g : w;
                    var I = v == g
                      , P = w == g
                      , S = v == w;
                    if (S && eT(e)) {
                        if (!eT(t))
                            return !1;
                        o = !0,
                        I = !1
                    }
                    if (S && !I)
                        return s || (s = new em),
                        o || ez(e) ? eE(e, t, i, r, n, s) : function(e, t, i, r, n, s, o) {
                            switch (i) {
                            case E:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                                    break;
                                e = e.buffer,
                                t = t.buffer;
                            case b:
                                if (e.byteLength != t.byteLength || !s(new J(e), new J(t)))
                                    break;
                                return !0;
                            case h:
                            case l:
                            case d:
                                return eC(+e, +t);
                            case u:
                                return e.name == t.name && e.message == t.message;
                            case y:
                            case _:
                                return e == t + "";
                            case f:
                                var a = D;
                            case m:
                                var c = 1 & r;
                                if (a || (a = L),
                                e.size != t.size && !c)
                                    break;
                                var p = o.get(e);
                                if (p)
                                    return p == t;
                                r |= 2,
                                o.set(e, t);
                                var g = eE(a(e), a(t), r, n, s, o);
                                return o.delete(e),
                                g;
                            case "[object Symbol]":
                                if (ef)
                                    return ef.call(e) == ef.call(t)
                            }
                            return !1
                        }(e, t, v, i, r, n, s);
                    if (!(1 & i)) {
                        var O = I && H.call(e, "__wrapped__")
                          , R = P && H.call(t, "__wrapped__");
                        if (O || R) {
                            var x = O ? e.value() : e
                              , C = R ? t.value() : t;
                            return s || (s = new em),
                            n(x, C, i, r, s)
                        }
                    }
                    return !!S && (s || (s = new em),
                    function(e, t, i, r, n, s) {
                        var o = 1 & i
                          , a = eI(e)
                          , c = a.length;
                        if (c != eI(t).length && !o)
                            return !1;
                        for (var h = c; h--; ) {
                            var l = a[h];
                            if (!(o ? l in t : H.call(t, l)))
                                return !1
                        }
                        var u = s.get(e);
                        if (u && s.get(t))
                            return u == t;
                        var p = !0;
                        s.set(e, t),
                        s.set(t, e);
                        for (var f = o; ++h < c; ) {
                            var d = e[l = a[h]]
                              , g = t[l];
                            if (r)
                                var v = o ? r(g, d, l, t, e, s) : r(d, g, l, e, t, s);
                            if (!(void 0 === v ? d === g || n(d, g, i, r, s) : v)) {
                                p = !1;
                                break
                            }
                            f || (f = "constructor" == l)
                        }
                        if (p && !f) {
                            var y = e.constructor
                              , m = t.constructor;
                            y != m && "constructor"in e && "constructor"in t && !("function" == typeof y && y instanceof y && "function" == typeof m && m instanceof m) && (p = !1)
                        }
                        return s.delete(e),
                        s.delete(t),
                        p
                    }(e, t, i, r, n, s))
                }(t, i, r, n, e, s) : t != t && i != i)
            }(e, t)
        }
    },
    31493: function(e) {
        "use strict";
        function t(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return '"[Circular]"'
            }
        }
        e.exports = function(e, i, r) {
            var n = r && r.stringify || t;
            if ("object" == typeof e && null !== e) {
                var s = i.length + 1;
                if (1 === s)
                    return e;
                var o = Array(s);
                o[0] = n(e);
                for (var a = 1; a < s; a++)
                    o[a] = n(i[a]);
                return o.join(" ")
            }
            if ("string" != typeof e)
                return e;
            var c = i.length;
            if (0 === c)
                return e;
            for (var h = "", l = 0, u = -1, p = e && e.length || 0, f = 0; f < p; ) {
                if (37 === e.charCodeAt(f) && f + 1 < p) {
                    switch (u = u > -1 ? u : 0,
                    e.charCodeAt(f + 1)) {
                    case 100:
                    case 102:
                        if (l >= c || null == i[l])
                            break;
                        u < f && (h += e.slice(u, f)),
                        h += Number(i[l]),
                        u = f + 2,
                        f++;
                        break;
                    case 105:
                        if (l >= c || null == i[l])
                            break;
                        u < f && (h += e.slice(u, f)),
                        h += Math.floor(Number(i[l])),
                        u = f + 2,
                        f++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (l >= c || void 0 === i[l])
                            break;
                        u < f && (h += e.slice(u, f));
                        var d = typeof i[l];
                        if ("string" === d) {
                            h += "'" + i[l] + "'",
                            u = f + 2,
                            f++;
                            break
                        }
                        if ("function" === d) {
                            h += i[l].name || "<anonymous>",
                            u = f + 2,
                            f++;
                            break
                        }
                        h += n(i[l]),
                        u = f + 2,
                        f++;
                        break;
                    case 115:
                        if (l >= c)
                            break;
                        u < f && (h += e.slice(u, f)),
                        h += String(i[l]),
                        u = f + 2,
                        f++;
                        break;
                    case 37:
                        u < f && (h += e.slice(u, f)),
                        h += "%",
                        u = f + 2,
                        f++,
                        l--
                    }
                    ++l
                }
                ++f
            }
            return -1 === u ? e : (u < p && (h += e.slice(u)),
            h)
        }
    },
    26041: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.safeJsonParse = function(e) {
            if ("string" != typeof e)
                throw Error(`Cannot safe json parse value of type ${typeof e}`);
            try {
                return JSON.parse(e)
            } catch (t) {
                return e
            }
        }
        ,
        t.safeJsonStringify = function(e) {
            return "string" == typeof e ? e : JSON.stringify(e, (e,t)=>void 0 === t ? null : t)
        }
    },
    69413: function(e, t, i) {
        "use strict";
        let r = i(31493);
        e.exports = s;
        let n = function() {
            function e(e) {
                return void 0 !== e && e
            }
            try {
                if ("undefined" != typeof globalThis)
                    return globalThis;
                return Object.defineProperty(Object.prototype, "globalThis", {
                    get: function() {
                        return delete Object.prototype.globalThis,
                        this.globalThis = this
                    },
                    configurable: !0
                }),
                globalThis
            } catch (t) {
                return e(self) || e(window) || e(this) || {}
            }
        }().console || {};
        function s(e) {
            var t;
            (e = e || {}).browser = e.browser || {};
            let i = e.browser.transmit;
            if (i && "function" != typeof i.send)
                throw Error("pino: transmit option must have a send function");
            let r = e.browser.write || n;
            e.browser.write && (e.browser.asObject = !0);
            let l = e.serializers || {}
              , u = function(e, t) {
                if (Array.isArray(e)) {
                    let t = e.filter(function(e) {
                        return "!stdSerializers.err" !== e
                    });
                    return t
                }
                return !0 === e && Object.keys(t)
            }(e.browser.serialize, l)
              , g = e.browser.serialize;
            Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1),
            "function" == typeof r && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
            !1 === e.enabled && (e.level = "silent");
            let v = e.level || "info"
              , y = Object.create(r);
            y.log || (y.log = p),
            Object.defineProperty(y, "levelVal", {
                get: function() {
                    return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                }
            }),
            Object.defineProperty(y, "level", {
                get: function() {
                    return this._level
                },
                set: function(e) {
                    if ("silent" !== e && !this.levels.values[e])
                        throw Error("unknown level " + e);
                    this._level = e,
                    o(m, y, "error", "log"),
                    o(m, y, "fatal", "error"),
                    o(m, y, "warn", "error"),
                    o(m, y, "info", "log"),
                    o(m, y, "debug", "log"),
                    o(m, y, "trace", "log")
                }
            });
            let m = {
                transmit: i,
                serialize: u,
                asObject: e.browser.asObject,
                levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                timestamp: "function" == typeof (t = e).timestamp ? t.timestamp : !1 === t.timestamp ? f : d
            };
            return y.levels = s.levels,
            y.level = v,
            y.setMaxListeners = y.getMaxListeners = y.emit = y.addListener = y.on = y.prependListener = y.once = y.prependOnceListener = y.removeListener = y.removeAllListeners = y.listeners = y.listenerCount = y.eventNames = y.write = y.flush = p,
            y.serializers = l,
            y._serialize = u,
            y._stdErrSerialize = g,
            y.child = function(t, r) {
                if (!t)
                    throw Error("missing bindings for child Pino");
                r = r || {},
                u && t.serializers && (r.serializers = t.serializers);
                let n = r.serializers;
                if (u && n) {
                    var s = Object.assign({}, l, n)
                      , o = !0 === e.browser.serialize ? Object.keys(s) : u;
                    delete t.serializers,
                    a([t], o, s, this._stdErrSerialize)
                }
                function p(e) {
                    this._childLevel = (0 | e._childLevel) + 1,
                    this.error = c(e, t, "error"),
                    this.fatal = c(e, t, "fatal"),
                    this.warn = c(e, t, "warn"),
                    this.info = c(e, t, "info"),
                    this.debug = c(e, t, "debug"),
                    this.trace = c(e, t, "trace"),
                    s && (this.serializers = s,
                    this._serialize = o),
                    i && (this._logEvent = h([].concat(e._logEvent.bindings, t)))
                }
                return p.prototype = this,
                new p(this)
            }
            ,
            i && (y._logEvent = h()),
            y
        }
        function o(e, t, i, o) {
            let c = Object.getPrototypeOf(t);
            t[i] = t.levelVal > t.levels.values[i] ? p : c[i] ? c[i] : n[i] || n[o] || p,
            function(e, t, i) {
                if (e.transmit || t[i] !== p) {
                    var o;
                    t[i] = (o = t[i],
                    function() {
                        let c = e.timestamp()
                          , l = Array(arguments.length)
                          , u = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                        for (var p = 0; p < l.length; p++)
                            l[p] = arguments[p];
                        if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize),
                        e.asObject ? o.call(u, function(e, t, i, n) {
                            e._serialize && a(i, e._serialize, e.serializers, e._stdErrSerialize);
                            let o = i.slice()
                              , c = o[0]
                              , h = {};
                            n && (h.time = n),
                            h.level = s.levels.values[t];
                            let l = (0 | e._childLevel) + 1;
                            if (l < 1 && (l = 1),
                            null !== c && "object" == typeof c) {
                                for (; l-- && "object" == typeof o[0]; )
                                    Object.assign(h, o.shift());
                                c = o.length ? r(o.shift(), o) : void 0
                            } else
                                "string" == typeof c && (c = r(o.shift(), o));
                            return void 0 !== c && (h.msg = c),
                            h
                        }(this, i, l, c)) : o.apply(u, l),
                        e.transmit) {
                            let r = e.transmit.level || t.level
                              , n = s.levels.values[r]
                              , o = s.levels.values[i];
                            if (o < n)
                                return;
                            (function(e, t, i) {
                                let r = t.send
                                  , n = t.ts
                                  , s = t.methodLevel
                                  , o = t.methodValue
                                  , c = t.val
                                  , l = e._logEvent.bindings;
                                a(i, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                                e._logEvent.ts = n,
                                e._logEvent.messages = i.filter(function(e) {
                                    return -1 === l.indexOf(e)
                                }),
                                e._logEvent.level.label = s,
                                e._logEvent.level.value = o,
                                r(s, e._logEvent, c),
                                e._logEvent = h(l)
                            }
                            )(this, {
                                ts: c,
                                methodLevel: i,
                                methodValue: o,
                                transmitLevel: r,
                                transmitValue: s.levels.values[e.transmit.level || t.level],
                                send: e.transmit.send,
                                val: t.levelVal
                            }, l)
                        }
                    }
                    )
                }
            }(e, t, i)
        }
        function a(e, t, i, r) {
            for (let n in e)
                if (r && e[n]instanceof Error)
                    e[n] = s.stdSerializers.err(e[n]);
                else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let r in e[n])
                        t && t.indexOf(r) > -1 && r in i && (e[n][r] = i[r](e[n][r]))
        }
        function c(e, t, i) {
            return function() {
                let r = Array(1 + arguments.length);
                r[0] = t;
                for (var n = 1; n < r.length; n++)
                    r[n] = arguments[n - 1];
                return e[i].apply(this, r)
            }
        }
        function h(e) {
            return {
                ts: 0,
                messages: [],
                bindings: e || [],
                level: {
                    label: "",
                    value: 0
                }
            }
        }
        function l() {
            return {}
        }
        function u(e) {
            return e
        }
        function p() {}
        function f() {
            return !1
        }
        function d() {
            return Date.now()
        }
        s.levels = {
            values: {
                fatal: 60,
                error: 50,
                warn: 40,
                info: 30,
                debug: 20,
                trace: 10
            },
            labels: {
                10: "trace",
                20: "debug",
                30: "info",
                40: "warn",
                50: "error",
                60: "fatal"
            }
        },
        s.stdSerializers = {
            mapHttpRequest: l,
            mapHttpResponse: l,
            wrapRequestSerializer: u,
            wrapResponseSerializer: u,
            wrapErrorSerializer: u,
            req: l,
            res: l,
            err: function(e) {
                let t = {
                    type: e.constructor.name,
                    msg: e.message,
                    stack: e.stack
                };
                for (let i in e)
                    void 0 === t[i] && (t[i] = e[i]);
                return t
            }
        },
        s.stdTimeFunctions = Object.assign({}, {
            nullTime: f,
            epochTime: d,
            unixTime: function() {
                return Math.round(Date.now() / 1e3)
            },
            isoTime: function() {
                return new Date(Date.now()).toISOString()
            }
        })
    }
}]);
