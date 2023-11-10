!(function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
                ? (module.exports = t())
                : "function" == typeof define && define.amd
                ? define(t)
                : (((e = "undefined" != typeof globalThis ? globalThis : e || self).AFREECA = e.AFREECA || {}),
                  (e.AFREECA.ext = t()));
})(this, function () {
        "use strict";
        function e(t) {
                return (
                        (e =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (e) {
                                                  return typeof e;
                                          }
                                        : function (e) {
                                                  return e &&
                                                          "function" == typeof Symbol &&
                                                          e.constructor === Symbol &&
                                                          e !== Symbol.prototype
                                                          ? "symbol"
                                                          : typeof e;
                                          }),
                        e(t)
                );
        }
        function t(t) {
                var n = (function (t, n) {
                        if ("object" !== e(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                                var o = r.call(t, n || "default");
                                if ("object" !== e(o)) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === n ? String : Number)(t);
                })(t, "string");
                return "symbol" === e(n) ? n : String(n);
        }
        !(function () {
                const e = {
                        NODE_ENV: "prod",
                        EXTENSION_HOST: "https://file.ext-afreecatv.com",
                        EXTENSION_HOSTING_HOST: "https://hosting.ext-afreecatv.com",
                        PERMITTED_PARENT_ORIGIN_REGEX: {},
                };
                try {
                        if (process)
                                return (
                                        (process.env = Object.assign({}, process.env)),
                                        void Object.assign(process.env, e)
                                );
                } catch (e) {}
                globalThis.process = {
                        env: e,
                };
        })();
        var n = "afext-handle-extension-loaded",
                r = "afext-handle-broadcast-received",
                o = "afext-handle-chat-received",
                c = "afext-handle-hogu-received",
                a = "afext-handle-error",
                i = "afext-init-extension",
                f = "afext-set-auth",
                u = "afext-set-broad-info",
                s = "afext-set-player-property",
                l = "afext-set-cursor",
                d = "afext-set-visibility",
                p = "afext-set-hover",
                y = "afext-forward-broadcast",
                b = "afext-forward-chat",
                h = "afext-forward-hogu";
        function v(e, n) {
                for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        (o.enumerable = o.enumerable || !1),
                                (o.configurable = !0),
                                "value" in o && (o.writable = !0),
                                Object.defineProperty(e, t(o.key), o);
                }
        }
        function g(e, t) {
                return (
                        (g = Object.setPrototypeOf
                                ? Object.setPrototypeOf.bind()
                                : function (e, t) {
                                          return (e.__proto__ = t), e;
                                  }),
                        g(e, t)
                );
        }
        function m(t, n) {
                if (n && ("object" === e(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return (function (e) {
                        if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                })(t);
        }
        function O(e) {
                return (
                        (O = Object.setPrototypeOf
                                ? Object.getPrototypeOf.bind()
                                : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                  }),
                        O(e)
                );
        }
        function w(e, t, n) {
                return (
                        (w = (function () {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                        return (
                                                Boolean.prototype.valueOf.call(
                                                        Reflect.construct(Boolean, [], function () {}),
                                                ),
                                                !0
                                        );
                                } catch (e) {
                                        return !1;
                                }
                        })()
                                ? Reflect.construct.bind()
                                : function (e, t, n) {
                                          var r = [null];
                                          r.push.apply(r, t);
                                          var o = new (Function.bind.apply(e, r))();
                                          return n && g(o, n.prototype), o;
                                  }),
                        w.apply(null, arguments)
                );
        }
        function x(e) {
                var t = "function" == typeof Map ? new Map() : void 0;
                return (
                        (x = function (e) {
                                if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]")))
                                        return e;
                                var n;
                                if ("function" != typeof e)
                                        throw new TypeError("Super expression must either be null or a function");
                                if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, r);
                                }
                                function r() {
                                        return w(e, arguments, O(this).constructor);
                                }
                                return (
                                        (r.prototype = Object.create(e.prototype, {
                                                constructor: {
                                                        value: r,
                                                        enumerable: !1,
                                                        writable: !0,
                                                        configurable: !0,
                                                },
                                        })),
                                        g(r, e)
                                );
                        }),
                        x(e)
                );
        }
        function E(e) {
                var t = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                                return (
                                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                        !0
                                );
                        } catch (e) {
                                return !1;
                        }
                })();
                return function () {
                        var n,
                                r = O(e);
                        if (t) {
                                var o = O(this).constructor;
                                n = Reflect.construct(r, arguments, o);
                        } else n = r.apply(this, arguments);
                        return m(this, n);
                };
        }
        var A = (function (e) {
                !(function (e, t) {
                        if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0,
                                },
                        })),
                                Object.defineProperty(e, "prototype", {
                                        writable: !1,
                                }),
                                t && g(e, t);
                })(c, e);
                var t,
                        n,
                        r,
                        o = E(c);
                function c(e, t) {
                        var n;
                        return (
                                (function (e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                })(this, c),
                                ((n = o.call(this, t)).name = "sdk-error"),
                                (n.code = e),
                                n
                        );
                }
                return (
                        (t = c),
                        n && v(t.prototype, n),
                        r && v(t, r),
                        Object.defineProperty(t, "prototype", {
                                writable: !1,
                        }),
                        t
                );
        })(x(Error));
        const S = "function" == typeof atob,
                T = "function" == typeof Buffer,
                j = "function" == typeof TextDecoder ? new TextDecoder() : void 0,
                P =
                        ("function" == typeof TextEncoder && new TextEncoder(),
                        Array.prototype.slice.call(
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        )),
                k = ((e) => {
                        let t = {};
                        return e.forEach((e, n) => (t[e] = n)), t;
                })(P),
                C = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                I = String.fromCharCode.bind(String),
                R =
                        "function" == typeof Uint8Array.from
                                ? Uint8Array.from.bind(Uint8Array)
                                : (e) => new Uint8Array(Array.prototype.slice.call(e, 0)),
                _ = (e) => e.replace(/[^A-Za-z0-9\+\/]/g, ""),
                N = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                B = (e) => {
                        switch (e.length) {
                                case 4:
                                        var t =
                                                (((7 & e.charCodeAt(0)) << 18) |
                                                        ((63 & e.charCodeAt(1)) << 12) |
                                                        ((63 & e.charCodeAt(2)) << 6) |
                                                        (63 & e.charCodeAt(3))) -
                                                65536;
                                        return I(55296 + (t >>> 10)) + I(56320 + (1023 & t));
                                case 3:
                                        return I(
                                                ((15 & e.charCodeAt(0)) << 12) |
                                                        ((63 & e.charCodeAt(1)) << 6) |
                                                        (63 & e.charCodeAt(2)),
                                        );
                                default:
                                        return I(((31 & e.charCodeAt(0)) << 6) | (63 & e.charCodeAt(1)));
                        }
                },
                F = (e) => e.replace(N, B),
                D = (e) => {
                        if (((e = e.replace(/\s+/g, "")), !C.test(e))) throw new TypeError("malformed base64.");
                        e += "==".slice(2 - (3 & e.length));
                        let t,
                                n,
                                r,
                                o = "";
                        for (let c = 0; c < e.length; )
                                (t =
                                        (k[e.charAt(c++)] << 18) |
                                        (k[e.charAt(c++)] << 12) |
                                        ((n = k[e.charAt(c++)]) << 6) |
                                        (r = k[e.charAt(c++)])),
                                        (o +=
                                                64 === n
                                                        ? I((t >> 16) & 255)
                                                        : 64 === r
                                                        ? I((t >> 16) & 255, (t >> 8) & 255)
                                                        : I((t >> 16) & 255, (t >> 8) & 255, 255 & t));
                        return o;
                },
                M = S ? (e) => atob(_(e)) : T ? (e) => Buffer.from(e, "base64").toString("binary") : D,
                J = T
                        ? (e) => R(Buffer.from(e, "base64"))
                        : (e) =>
                                  R(
                                          M(e)
                                                  .split("")
                                                  .map((e) => e.charCodeAt(0)),
                                  ),
                U = T ? (e) => Buffer.from(e, "base64").toString("utf8") : j ? (e) => j.decode(J(e)) : (e) => F(M(e)),
                z = (e) => _(e.replace(/[-_]/g, (e) => ("-" == e ? "+" : "/"))),
                G = (e) => U(z(e)),
                H = G;
        function Z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                                (r = r.filter(function (t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })),
                                n.push.apply(n, r);
                }
                return n;
        }
        function L(e) {
                for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2
                                ? Z(Object(r), !0).forEach(function (n) {
                                          var o, c, a;
                                          (o = e),
                                                  (c = n),
                                                  (a = r[n]),
                                                  (c = t(c)) in o
                                                          ? Object.defineProperty(o, c, {
                                                                    value: a,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0,
                                                            })
                                                          : (o[c] = a);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                : Z(Object(r)).forEach(function (t) {
                                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                  });
                }
                return e;
        }
        return function () {
                var e = function () {},
                        t = function () {},
                        v = function () {},
                        g = function () {},
                        m = function () {},
                        O = function () {},
                        w = function () {},
                        x = function () {},
                        E = function () {},
                        S = function () {},
                        T = function () {},
                        j = function (e) {
                                try {
                                        var t = JSON.parse(H(e.split(".")[1]));
                                        return {
                                                isBJ: t.is_bj,
                                                obscureUserId: t.obscure_user_id,
                                        };
                                } catch (e) {}
                                return {
                                        isBJ: !1,
                                        obscureUserId: null,
                                };
                        };
                window.addEventListener("message", function (n) {
                        var r,
                                o = n.data,
                                c = o.action,
                                P = o.payload;
                        switch (c) {
                                case i:
                                        if (null !== (r = P.authInfo) && void 0 !== r && r.userInfo)
                                                throw new A(
                                                        "missing-auth-info",
                                                        "만료된 스펙의 데이터가 전달되었습니다. 문서를 확인해주세요. 230801 ",
                                                );
                                        var k = L(
                                                {
                                                        accessToken: P.authInfo.accessToken,
                                                        userAgreeToken: P.authInfo.userAgreeToken,
                                                },
                                                j(P.authInfo.accessToken),
                                        );
                                        e(k, P.broadInfo, P.playerInfo);
                                        break;
                                case f:
                                        t(
                                                L(
                                                        {
                                                                accessToken: P.accessToken,
                                                                userAgreeToken: P.userAgreeToken,
                                                        },
                                                        j(P.accessToken),
                                                ),
                                        );
                                        break;
                                case u:
                                        v(P);
                                        break;
                                case s:
                                        g(P);
                                        break;
                                case l:
                                        m(P);
                                        break;
                                case d:
                                        O(P);
                                        break;
                                case p:
                                        w(P);
                                        break;
                                case a:
                                        x(P);
                                        break;
                                case y:
                                        try {
                                                E(P.action, JSON.parse(P.message || null), P.fromId);
                                        } catch (e) {
                                                var C = decodeURIComponent(P.message);
                                                P.message !== C ? E(P.action, JSON.parse(C || null), P.fromId) : x(e);
                                        }
                                        break;
                                case b:
                                        S(P.action, P.message);
                                        break;
                                case h:
                                        T(P.action, P.message);
                        }
                });
                var P = function (e, t) {
                        window.parent.postMessage(
                                {
                                        action: e,
                                        payload: t,
                                },
                                "*",
                        );
                };
                return (
                        "loading" !== document.readyState
                                ? P(n, null)
                                : document.addEventListener("DOMContentLoaded", function () {
                                          P(n, null);
                                  }),
                        {
                                handleInitialization: function (t) {
                                        e = t;
                                },
                                handleAuthorized: function (e) {
                                        t = e;
                                },
                                handleBroadInfoChanged: function (e) {
                                        v = e;
                                },
                                handlePlayerPropertyChanged: function (e) {
                                        g = e;
                                },
                                handleCursorMoved: function (e) {
                                        m = e;
                                },
                                handleVisibilityChanged: function (e) {
                                        O = e;
                                },
                                handleHovered: function (e) {
                                        w = e;
                                },
                                handleError: function (e) {
                                        x = e;
                                },
                                broadcast: {
                                        listen: function (e) {
                                                E = e;
                                        },
                                        send: function (e, t) {
                                                P(r, {
                                                        action: e,
                                                        message: JSON.stringify(t),
                                                });
                                        },
                                        whisper: function (e, t, n) {
                                                P(r, {
                                                        action: t,
                                                        message: JSON.stringify(n),
                                                        userId: e,
                                                });
                                        },
                                },
                                chat: {
                                        listen: function (e) {
                                                S = e;
                                        },
                                        send: function (e, t) {
                                                "MESSAGE" === e
                                                        ? P(o, {
                                                                  action: e,
                                                                  message: t,
                                                          })
                                                        : x(
                                                                  new A(
                                                                          "invalid-service-code",
                                                                          '잘못된 채팅 서비스 코드입니다. (발신은 "MESSAGE"만 가능)',
                                                                  ),
                                                          );
                                        },
                                },
                                hogu: {
                                        listen: function (e) {
                                                T = e;
                                        },
                                        send: function (e, t) {
                                                P(c, {
                                                        action: e,
                                                        message: t,
                                                });
                                        },
                                },
                        }
                );
        };
});
