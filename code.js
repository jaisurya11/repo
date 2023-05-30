!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var i = t();
        for (var n in i)
            ("object" == typeof exports ? exports : e)[n] = i[n]
    }
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n])
                return i[n].exports;
            var r = i[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, t),
            r.l = !0,
            r.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, i, n) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        t.n = function(e) {
            var i = e && e.e ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(i, "a", i),
            i
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 30)
    }([function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e) {
            e[e.Unspecified = 0] = "Unspecified",
            e[e.String = 1] = "String",
            e[e.Int64 = 2] = "Int64",
            e[e.Double = 3] = "Double",
            e[e.Boolean = 4] = "Boolean",
            e[e.Date = 5] = "Date"
        }(t.AWTPropertyType || (t.AWTPropertyType = {}));
        !function(e) {
            e[e.NotSet = 0] = "NotSet",
            e[e.DistinguishedName = 1] = "DistinguishedName",
            e[e.GenericData = 2] = "GenericData",
            e[e.IPV4Address = 3] = "IPV4Address",
            e[e.IPv6Address = 4] = "IPv6Address",
            e[e.MailSubject = 5] = "MailSubject",
            e[e.PhoneNumber = 6] = "PhoneNumber",
            e[e.QueryString = 7] = "QueryString",
            e[e.SipAddress = 8] = "SipAddress",
            e[e.SmtpAddress = 9] = "SmtpAddress",
            e[e.Identity = 10] = "Identity",
            e[e.Uri = 11] = "Uri",
            e[e.Fqdn = 12] = "Fqdn",
            e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
        }(t.AWTPiiKind || (t.AWTPiiKind = {}));
        !function(e) {
            e[e.NotSet = 0] = "NotSet",
            e[e.GenericContent = 1] = "GenericContent"
        }(t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {}));
        !function(e) {
            e[e.Low = 1] = "Low",
            e[e.Normal = 2] = "Normal",
            e[e.High = 3] = "High",
            e[e.Immediate_sync = 5] = "Immediate_sync"
        }(t.AWTEventPriority || (t.AWTEventPriority = {}));
        !function(e) {
            e[e.NonRetryableStatus = 1] = "NonRetryableStatus",
            e[e.QueueFull = 3] = "QueueFull"
        }(t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {}));
        !function(e) {
            e[e.InvalidEvent = 1] = "InvalidEvent",
            e[e.SizeLimitExceeded = 2] = "SizeLimitExceeded",
            e[e.KillSwitch = 3] = "KillSwitch"
        }(t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}))
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            var t = new B.Int64("0");
            return t.low = 4294967295 & e,
            t.high = Math.floor(e / 4294967296),
            t
        }
        function r() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(C, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
        function o(e) {
            return "string" == typeof e
        }
        function s(e) {
            return "number" == typeof e
        }
        function a(e) {
            return "boolean" == typeof e
        }
        function u(e) {
            return e instanceof Date
        }
        function d(e) {
            return (e + b) * R
        }
        function c(e) {
            var t = e.indexOf("-");
            return t > -1 ? e.substring(0, t) : ""
        }
        function _() {
            return O === D && (O = "undefined" != typeof navigator && Boolean(navigator.sendBeacon)),
            O
        }
        function l() {
            return N === D && (N = "undefined" != typeof Uint8Array && !W() && !y()),
            N
        }
        function p(e) {
            return !(!s(e) || !(e >= 1 && e <= 3 || 5 === e))
        }
        function f(e, i) {
            return !t.PropertyNameRegex.test(e) || P(i) ? D : (P(i.value) && (i = {
                value: i,
                type: w.AWTPropertyType.Unspecified
            }),
            i.type = m(i.value, i.type),
            i.type ? (u(i.value) && (i.value = d(i.value.getTime())),
            i.pii > 0 && i.cc > 0 ? D : i.pii ? A(i.pii) ? i : D : i.cc ? I(i.cc) ? i : D : i) : D)
        }
        function h(e) {
            return e.getUTCFullYear() + "-" + T(e.getUTCMonth() + 1) + "-" + T(e.getUTCDate()) + "T" + T(e.getUTCHours()) + ":" + T(e.getUTCMinutes()) + ":" + T(e.getUTCSeconds()) + "." + g(e.getUTCMilliseconds()) + "Z"
        }
        function v() {
            if (M === D) {
                var e = new XMLHttpRequest;
                M = void 0 === e.withCredentials && "undefined" != typeof XDomainRequest
            }
            return M
        }
        function y() {
            return !("undefined" == typeof navigator || !navigator.product) && "ReactNative" === navigator.product
        }
        function T(e) {
            return e < 10 ? "0" + e : e.toString()
        }
        function g(e) {
            return e < 10 ? "00" + e : e < 100 ? "0" + e : e.toString()
        }
        function m(e, t) {
            switch (t = E(t) ? t : w.AWTPropertyType.Unspecified) {
            case w.AWTPropertyType.Unspecified:
                return S(e);
            case w.AWTPropertyType.String:
                return o(e) ? t : D;
            case w.AWTPropertyType.Boolean:
                return a(e) ? t : D;
            case w.AWTPropertyType.Date:
                return u(e) && NaN !== e.getTime() ? t : D;
            case w.AWTPropertyType.Int64:
                return s(e) && e % 1 == 0 ? t : D;
            case w.AWTPropertyType.Double:
                return s(e) ? t : D
            }
            return D
        }
        function S(e) {
            switch (typeof e) {
            case "string":
                return w.AWTPropertyType.String;
            case "boolean":
                return w.AWTPropertyType.Boolean;
            case "number":
                return w.AWTPropertyType.Double;
            case "object":
                return u(e) ? w.AWTPropertyType.Date : D
            }
            return D
        }
        function A(e) {
            return !!(s(e) && e >= 0 && e <= 13)
        }
        function I(e) {
            return !!(s(e) && e >= 0 && e <= 1)
        }
        function E(e) {
            return !!(s(e) && e >= 0 && e <= 4)
        }
        function W() {
            if ("undefined" != typeof navigator && navigator.userAgent) {
                var e = navigator.userAgent.toLowerCase();
                if ((e.indexOf("safari") >= 0 || e.indexOf("firefox") >= 0) && e.indexOf("chrome") < 0)
                    return !0
            }
            return !1
        }
        function P(e) {
            return void 0 === e || e === D || "" === e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var B = i(4)
          , w = i(0)
          , C = /[xy]/g
          , b = 621355968e5
          , R = 1e4
          , D = null;
        t.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,
        t.EventNameDotRegex = /\./g,
        t.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,
        t.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";
        var O = D
          , N = D
          , M = D;
        t.numberToBondInt64 = n,
        t.newGuid = r,
        t.isString = o,
        t.isNumber = s,
        t.isBoolean = a,
        t.isDate = u,
        t.msToTicks = d,
        t.getTenantId = c,
        t.isBeaconsSupported = _,
        t.isUint8ArrayAvailable = l,
        t.isPriority = p,
        t.sanitizeProperty = f,
        t.getISOString = h,
        t.useXDomainRequest = v,
        t.isReactNative = y
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.addNotificationListener = function(e) {
                this.listeners.push(e)
            }
            ,
            e.removeNotificationListener = function(e) {
                for (var t = this.listeners.indexOf(e); t > -1; )
                    this.listeners.splice(t, 1),
                    t = this.listeners.indexOf(e)
            }
            ,
            e.eventsSent = function(e) {
                for (var t = this, i = this, n = 0; n < this.listeners.length; ++n)
                    !function(n) {
                        i.listeners[n].eventsSent && setTimeout(function() {
                            return t.listeners[n].eventsSent(e)
                        }, 0)
                    }(n)
            }
            ,
            e.eventsDropped = function(e, t) {
                for (var i = this, n = this, r = 0; r < this.listeners.length; ++r)
                    !function(r) {
                        n.listeners[r].eventsDropped && setTimeout(function() {
                            return i.listeners[r].eventsDropped(e, t)
                        }, 0)
                    }(r)
            }
            ,
            e.eventsRetrying = function(e) {
                for (var t = this, i = this, n = 0; n < this.listeners.length; ++n)
                    !function(n) {
                        i.listeners[n].eventsRetrying && setTimeout(function() {
                            return t.listeners[n].eventsRetrying(e)
                        }, 0)
                    }(n)
            }
            ,
            e.eventsRejected = function(e, t) {
                for (var i = this, n = this, r = 0; r < this.listeners.length; ++r)
                    !function(r) {
                        n.listeners[r].eventsRejected && setTimeout(function() {
                            return i.listeners[r].eventsRejected(e, t)
                        }, 0)
                    }(r)
            }
            ,
            e.listeners = [],
            e
        }();
        t.default = n
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(14)
          , r = i(0)
          , o = i(28)
          , s = i(10)
          , a = i(5)
          , u = i(11)
          , d = i(1)
          , c = function() {
            function e() {}
            return e.setEventsHandler = function(e) {
                this.t = e
            }
            ,
            e.getEventsHandler = function() {
                return this.t
            }
            ,
            e.scheduleTimer = function() {
                var e = this
                  , t = this.r[this.a][2];
                this.u < 0 && t >= 0 && !this._ && (this.t.hasEvents() ? (0 === t && this.f > 0 && (t = 1),
                this.u = setTimeout(function() {
                    return e.h()
                }, t * (1 << this.f) * 1e3)) : this.v = 0)
            }
            ,
            e.initialize = function(e) {
                var t = this;
                this.y = !0,
                this.T = e,
                this.t = new o.default(e.collectorUri,e.cacheMemorySizeLimitInNumberOfEvents,e.httpXHROverride,e.clockSkewRefreshDurationInMins),
                this.g(),
                s.default.initialize(function(e, i) {
                    if (t.T.canSendStatEvent("awt_stats")) {
                        var n = new a.default("awt_stats");
                        n.setEventPriority(r.AWTEventPriority.High),
                        n.setProperty("TenantId", i);
                        for (var o in e)
                            e.hasOwnProperty(o) && n.setProperty(o, e[o].toString());
                        u.default.getLogger(d.StatsApiKey).logEvent(n)
                    }
                })
            }
            ,
            e.setTransmitProfile = function(e) {
                this.a !== e && void 0 !== this.r[e] && (this.clearTimeout(),
                this.a = e,
                this.scheduleTimer())
            }
            ,
            e.loadTransmitProfiles = function(e) {
                this.S();
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        if (3 !== e[t].length)
                            continue;
                        for (var i = 2; i >= 0; --i)
                            if (e[t][i] < 0) {
                                for (var n = i; n >= 0; --n)
                                    e[t][n] = -1;
                                break
                            }
                        for (var i = 2; i > 0; --i)
                            if (e[t][i] > 0 && e[t][i - 1] > 0) {
                                var r = e[t][i - 1] / e[t][i];
                                e[t][i - 1] = Math.ceil(r) * e[t][i]
                            }
                        this.r[t] = e[t]
                    }
            }
            ,
            e.sendEvent = function(e) {
                this.y && (this.f > 0 && e.priority === r.AWTEventPriority.Immediate_sync && (e.priority = r.AWTEventPriority.High),
                this.t.addEvent(e),
                this.scheduleTimer())
            }
            ,
            e.flush = function(e) {
                var t = (new Date).getTime();
                !this._ && this.A + 3e4 < t && (this.A = t,
                this.u > -1 && (clearTimeout(this.u),
                this.u = -1),
                this.t.uploadNow(e))
            }
            ,
            e.pauseTransmission = function() {
                this._ || (this.clearTimeout(),
                this.t.pauseTransmission(),
                this._ = !0)
            }
            ,
            e.resumeTransmision = function() {
                this._ && (this._ = !1,
                this.t.resumeTransmission(),
                this.scheduleTimer())
            }
            ,
            e.flushAndTeardown = function() {
                s.default.teardown(),
                this.y = !1,
                this.clearTimeout(),
                this.t.teardown()
            }
            ,
            e.backOffTransmission = function() {
                this.f < 4 && (this.f++,
                this.clearTimeout(),
                this.scheduleTimer())
            }
            ,
            e.clearBackOff = function() {
                this.f > 0 && (this.f = 0,
                this.clearTimeout(),
                this.scheduleTimer())
            }
            ,
            e.S = function() {
                this.clearTimeout(),
                this.g(),
                this.a = n.AWT_REAL_TIME,
                this.scheduleTimer()
            }
            ,
            e.clearTimeout = function() {
                this.u > 0 && (clearTimeout(this.u),
                this.u = -1,
                this.v = 0)
            }
            ,
            e.h = function() {
                var e = r.AWTEventPriority.High;
                this.v++,
                this.v * this.r[this.a][2] === this.r[this.a][0] ? (e = r.AWTEventPriority.Low,
                this.v = 0) : this.v * this.r[this.a][2] === this.r[this.a][1] && (e = r.AWTEventPriority.Normal),
                this.t.sendEventsForPriorityAndAbove(e),
                this.u = -1,
                this.scheduleTimer()
            }
            ,
            e.g = function() {
                this.r = {},
                this.r[n.AWT_REAL_TIME] = [4, 2, 1],
                this.r[n.AWT_NEAR_REAL_TIME] = [12, 6, 3],
                this.r[n.AWT_BEST_EFFORT] = [36, 18, 9]
            }
            ,
            e.y = !1,
            e.a = n.AWT_REAL_TIME,
            e.u = -1,
            e.f = 0,
            e._ = !1,
            e.v = 0,
            e.A = 0,
            e
        }();
        t.default = c
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e) {
                this.low = 0,
                this.high = 0,
                this.low = parseInt(e, 10),
                this.low < 0 && (this.high = -1)
            }
            return e.prototype.I = function(t) {
                var i = new e(t);
                return this.low === i.low && this.high === i.high
            }
            ,
            e
        }();
        t.Int64 = n;
        var r = function() {
            function e(e) {
                this.low = 0,
                this.high = 0,
                this.low = parseInt(e, 10)
            }
            return e.prototype.I = function(t) {
                var i = new e(t);
                return this.low === i.low && this.high === i.high
            }
            ,
            e
        }();
        t.UInt64 = r;
        var o = function() {
            function e() {}
            return e.W = function(e) {
                return this.P(e)
            }
            ,
            e.P = function(e) {
                return 255 & e
            }
            ,
            e.B = function(e) {
                return 2147483647 & e | 2147483648 & e
            }
            ,
            e.w = function(e) {
                return 4294967295 & e
            }
            ,
            e
        }();
        t.Number = o
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(1)
          , r = i(0)
          , o = function() {
            function e(e) {
                this.C = {
                    name: "",
                    properties: {}
                },
                e && this.setName(e)
            }
            return e.prototype.setName = function(e) {
                this.C.name = e
            }
            ,
            e.prototype.getName = function() {
                return this.C.name
            }
            ,
            e.prototype.setType = function(e) {
                this.C.type = e
            }
            ,
            e.prototype.getType = function() {
                return this.C.type
            }
            ,
            e.prototype.setTimestamp = function(e) {
                this.C.timestamp = e
            }
            ,
            e.prototype.getTimestamp = function() {
                return this.C.timestamp
            }
            ,
            e.prototype.setEventPriority = function(e) {
                this.C.priority = e
            }
            ,
            e.prototype.getEventPriority = function() {
                return this.C.priority
            }
            ,
            e.prototype.setProperty = function(e, t, i) {
                void 0 === i && (i = r.AWTPropertyType.Unspecified);
                var o = {
                    value: t,
                    type: i,
                    pii: r.AWTPiiKind.NotSet,
                    cc: r.AWTCustomerContentKind.NotSet
                };
                if (null === (o = n.sanitizeProperty(e, o)))
                    return void delete this.C.properties[e];
                this.C.properties[e] = o
            }
            ,
            e.prototype.setPropertyWithPii = function(e, t, i, o) {
                void 0 === o && (o = r.AWTPropertyType.Unspecified);
                var s = {
                    value: t,
                    type: o,
                    pii: i,
                    cc: r.AWTCustomerContentKind.NotSet
                };
                if (null === (s = n.sanitizeProperty(e, s)))
                    return void delete this.C.properties[e];
                this.C.properties[e] = s
            }
            ,
            e.prototype.setPropertyWithCustomerContent = function(e, t, i, o) {
                void 0 === o && (o = r.AWTPropertyType.Unspecified);
                var s = {
                    value: t,
                    type: o,
                    pii: r.AWTPiiKind.NotSet,
                    cc: i
                };
                if (null === (s = n.sanitizeProperty(e, s)))
                    return void delete this.C.properties[e];
                this.C.properties[e] = s
            }
            ,
            e.prototype.getPropertyMap = function() {
                return this.C.properties
            }
            ,
            e.prototype.getEvent = function() {
                return this.C
            }
            ,
            e
        }();
        t.default = o
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e) {
            e[e.Unknown = 0] = "Unknown",
            e[e.MSACID = 1] = "MSACID",
            e[e.MSAPUID = 2] = "MSAPUID",
            e[e.ANID = 3] = "ANID",
            e[e.OrgIdCID = 4] = "OrgIdCID",
            e[e.OrgIdPUID = 5] = "OrgIdPUID",
            e[e.UserObjectId = 6] = "UserObjectId",
            e[e.Skype = 7] = "Skype",
            e[e.Yammer = 8] = "Yammer",
            e[e.EmailAddress = 9] = "EmailAddress",
            e[e.PhoneNumber = 10] = "PhoneNumber",
            e[e.SipAddress = 11] = "SipAddress",
            e[e.MUID = 12] = "MUID"
        }(t.AWTUserIdType || (t.AWTUserIdType = {}));
        !function(e) {
            e[e.Started = 0] = "Started",
            e[e.Ended = 1] = "Ended"
        }(t.AWTSessionState || (t.AWTSessionState = {}))
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(1)
          , r = "MicrosoftApplicationsTelemetryDeviceId"
          , o = "MicrosoftApplicationsTelemetryFirstLaunchTime"
          , s = {
            MSIE: "MSIE",
            CHROME: "Chrome",
            FIREFOX: "Firefox",
            SAFARI: "Safari",
            EDGE: "Edge",
            ELECTRON: "Electron",
            SKYPE_SHELL: "SkypeShell",
            PHANTOMJS: "PhantomJS",
            OPERA: "Opera"
        }
          , a = {
            WINDOWS: "Windows",
            MACOSX: "Mac OS X",
            WINDOWS_PHONE: "Windows Phone",
            WINDOWS_RT: "Windows RT",
            IOS: "iOS",
            ANDROID: "Android",
            LINUX: "Linux",
            CROS: "Chrome OS",
            UNKNOWN: "Unknown"
        }
          , u = {
            WIN: /(windows|win32)/i,
            WINRT: / arm;/i,
            WINPHONE: /windows\sphone\s\d+\.\d+/i,
            OSX: /(macintosh|mac os x)/i,
            IOS: /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
            LINUX: /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
            ANDROID: /android/i,
            CROS: /CrOS/i
        }
          , d = {
            5.1: "XP",
            "6.0": "Vista",
            6.1: "7",
            6.2: "8",
            6.3: "8.1",
            "10.0": "10"
        }
          , c = function() {
            function e() {}
            return e.addPropertyStorageOverride = function(e) {
                return !!e && (this.b = e,
                !0)
            }
            ,
            e.autoCollect = function(e, t, i) {
                if (this.R = e,
                this.D = t,
                this.O(),
                i || "undefined" == typeof navigator || (i = navigator.userAgent || ""),
                this.N(i),
                this.D && !this.b)
                    return this.M(r),
                    void this.M(o);
                (this.b || this.k && !this.D) && this.U()
            }
            ,
            e.checkAndSaveDeviceId = function(e) {
                if (e) {
                    var t = this.x(r)
                      , i = this.x(o);
                    t !== e && (i = n.getISOString(new Date)),
                    this.L(r, e),
                    this.L(o, i),
                    this.F(i)
                }
            }
            ,
            e.U = function() {
                var e = this.x(r);
                e || (e = n.newGuid()),
                this.R.setDeviceId(e)
            }
            ,
            e.O = function() {
                "undefined" != typeof document && document.documentElement && this.R.setAppLanguage(document.documentElement.lang),
                "undefined" != typeof navigator && this.R.setUserLanguage(navigator.userLanguage || navigator.language);
                var e = (new Date).getTimezoneOffset()
                  , t = e % 60
                  , i = (e - t) / 60
                  , n = "+";
                i > 0 && (n = "-"),
                i = Math.abs(i),
                t = Math.abs(t),
                this.R.setUserTimeZone(n + (i < 10 ? "0" + i : i.toString()) + ":" + (t < 10 ? "0" + t : t.toString()))
            }
            ,
            e.N = function(e) {
                if (e) {
                    var t = this.q(e);
                    this.R.setDeviceBrowserName(t),
                    this.R.setDeviceBrowserVersion(this.H(e, t));
                    var i = this.Q(e);
                    this.R.setDeviceOsName(i),
                    this.R.setDeviceOsVersion(this.j(e, i))
                }
            }
            ,
            e.q = function(e) {
                return this.z("OPR/", e) ? s.OPERA : this.z(s.PHANTOMJS, e) ? s.PHANTOMJS : this.z(s.EDGE, e) ? s.EDGE : this.z(s.ELECTRON, e) ? s.ELECTRON : this.z(s.CHROME, e) ? s.CHROME : this.z("Trident", e) ? s.MSIE : this.z(s.FIREFOX, e) ? s.FIREFOX : this.z(s.SAFARI, e) ? s.SAFARI : this.z(s.SKYPE_SHELL, e) ? s.SKYPE_SHELL : "Unknown"
            }
            ,
            e.F = function(e) {
                if (!isNaN(e)) {
                    var t = new Date;
                    t.setTime(parseInt(e, 10)),
                    e = n.getISOString(t)
                }
                this.firstLaunchTime = e
            }
            ,
            e.z = function(e, t) {
                return t.indexOf(e) > -1
            }
            ,
            e.H = function(e, t) {
                return t === s.MSIE ? this.K(e) : this.G(t, e)
            }
            ,
            e.K = function(e) {
                var t = e.match(new RegExp(s.MSIE + " ([\\d,.]+)"));
                if (t)
                    return t[1];
                var i = e.match(new RegExp("rv:([\\d,.]+)"));
                return i ? i[1] : void 0
            }
            ,
            e.G = function(e, t) {
                e === s.SAFARI && (e = "Version");
                var i = t.match(new RegExp(e + "/([\\d,.]+)"));
                return i ? i[1] : "Unknown"
            }
            ,
            e.Q = function(e) {
                return e.match(u.WINPHONE) ? a.WINDOWS_PHONE : e.match(u.WINRT) ? a.WINDOWS_RT : e.match(u.IOS) ? a.IOS : e.match(u.ANDROID) ? a.ANDROID : e.match(u.LINUX) ? a.LINUX : e.match(u.OSX) ? a.MACOSX : e.match(u.WIN) ? a.WINDOWS : e.match(u.CROS) ? a.CROS : "Unknown"
            }
            ,
            e.j = function(e, t) {
                return t === a.WINDOWS ? this.V(e, "Windows NT") : t === a.ANDROID ? this.V(e, t) : t === a.MACOSX ? this.X(e) : "Unknown"
            }
            ,
            e.V = function(e, t) {
                var i = e.match(new RegExp(t + " ([\\d,.]+)"));
                return i ? d[i[1]] ? d[i[1]] : i[1] : "Unknown"
            }
            ,
            e.X = function(e) {
                var t = e.match(new RegExp(a.MACOSX + " ([\\d,_,.]+)"));
                if (t) {
                    var i = t[1].replace(/_/g, ".");
                    if (i) {
                        var n = this.Z(i);
                        if (n) {
                            return i.split(n)[0]
                        }
                        return i
                    }
                }
                return "Unknown"
            }
            ,
            e.Z = function(e) {
                return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null
            }
            ,
            e.L = function(e, t) {
                if (this.b)
                    this.b.setProperty(e, t);
                else if (this.k) {
                    var i = new Date;
                    i.setTime(i.getTime() + 31536e6);
                    var n = "expires=" + i.toUTCString();
                    document.cookie = e + "=" + t + "; " + n
                }
            }
            ,
            e.x = function(e) {
                if (this.b)
                    return this.b.getProperty(e) || "";
                if (this.k) {
                    e += "=";
                    for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                        for (var n = t[i], r = 0; " " === n.charAt(r); )
                            r++;
                        if (n = n.substring(r),
                        0 === n.indexOf(e))
                            return n.substring(e.length, n.length)
                    }
                }
                return ""
            }
            ,
            e.M = function(e) {
                this.k && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
            }
            ,
            e.D = !1,
            e.k = "undefined" != typeof document && void 0 !== document.cookie,
            e
        }();
        t.default = c
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(7)
          , r = i(0)
          , o = i(6)
          , s = function() {
            function e(e, t) {
                this.J = e,
                this.Y = t
            }
            return e.prototype.setAppId = function(e) {
                this.$("AppInfo.Id", e)
            }
            ,
            e.prototype.setAppVersion = function(e) {
                this.$("AppInfo.Version", e)
            }
            ,
            e.prototype.setAppLanguage = function(e) {
                this.$("AppInfo.Language", e)
            }
            ,
            e.prototype.setDeviceId = function(e) {
                this.J && (n.default.checkAndSaveDeviceId(e),
                this.$("DeviceInfo.Id", e))
            }
            ,
            e.prototype.setDeviceOsName = function(e) {
                this.J && this.$("DeviceInfo.OsName", e)
            }
            ,
            e.prototype.setDeviceOsVersion = function(e) {
                this.J && this.$("DeviceInfo.OsVersion", e)
            }
            ,
            e.prototype.setDeviceBrowserName = function(e) {
                this.J && this.$("DeviceInfo.BrowserName", e)
            }
            ,
            e.prototype.setDeviceBrowserVersion = function(e) {
                this.J && this.$("DeviceInfo.BrowserVersion", e)
            }
            ,
            e.prototype.setDeviceMake = function(e) {
                this.J && this.$("DeviceInfo.Make", e)
            }
            ,
            e.prototype.setDeviceModel = function(e) {
                this.J && this.$("DeviceInfo.Model", e)
            }
            ,
            e.prototype.setUserId = function(e, t, i) {
                if (!isNaN(i) && null !== i && i >= 0 && i <= 12)
                    this.$("UserInfo.IdType", i.toString());
                else {
                    var n = void 0;
                    switch (t) {
                    case r.AWTPiiKind.SipAddress:
                        n = o.AWTUserIdType.SipAddress;
                        break;
                    case r.AWTPiiKind.PhoneNumber:
                        n = o.AWTUserIdType.PhoneNumber;
                        break;
                    case r.AWTPiiKind.SmtpAddress:
                        n = o.AWTUserIdType.EmailAddress;
                        break;
                    default:
                        n = o.AWTUserIdType.Unknown
                    }
                    this.$("UserInfo.IdType", n.toString())
                }
                if (isNaN(t) || null === t || t === r.AWTPiiKind.NotSet || t > 13)
                    switch (i) {
                    case o.AWTUserIdType.Skype:
                        t = r.AWTPiiKind.Identity;
                        break;
                    case o.AWTUserIdType.EmailAddress:
                        t = r.AWTPiiKind.SmtpAddress;
                        break;
                    case o.AWTUserIdType.PhoneNumber:
                        t = r.AWTPiiKind.PhoneNumber;
                        break;
                    case o.AWTUserIdType.SipAddress:
                        t = r.AWTPiiKind.SipAddress;
                        break;
                    default:
                        t = r.AWTPiiKind.NotSet
                    }
                this.ee("UserInfo.Id", e, t)
            }
            ,
            e.prototype.setUserAdvertisingId = function(e) {
                this.$("UserInfo.AdvertisingId", e)
            }
            ,
            e.prototype.setUserTimeZone = function(e) {
                this.$("UserInfo.TimeZone", e)
            }
            ,
            e.prototype.setUserLanguage = function(e) {
                this.$("UserInfo.Language", e)
            }
            ,
            e.prototype.$ = function(e, t) {
                "string" == typeof t && this.Y.setProperty(e, t)
            }
            ,
            e.prototype.ee = function(e, t, i) {
                "string" == typeof t && this.Y.setPropertyWithPii(e, t, i)
            }
            ,
            e
        }();
        t.default = s
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(21)
          , r = i(0)
          , o = i(2)
          , s = i(1)
          , a = function() {
            function e() {}
            return e.getPayloadBlob = function(e, t) {
                var i, a = !1, u = new n.IO.MemoryStream, d = new n.CompactBinaryProtocolWriter(u);
                d.te(n.ne.ie, 3, null),
                d.re(t, n.ne.oe, n.ne.se);
                for (var c in e)
                    if (a)
                        i || (i = {}),
                        i[c] = e[c],
                        delete e[c];
                    else if (e.hasOwnProperty(c)) {
                        d.ae(c);
                        var _ = e[c];
                        d.ue(1, n.ne.de),
                        d.te(n.ne.oe, 2, null),
                        d.ae("act_default_source"),
                        d.te(n.ne.oe, 5, null),
                        d.ae(s.newGuid()),
                        d.te(n.ne.ce, 6, null),
                        d._e(s.numberToBondInt64(Date.now())),
                        d.te(n.ne.se, 8, null);
                        var l = u.le().length + 1;
                        d.ue(e[c].length, n.ne.de);
                        for (var p = u.le().length - l, f = 0; f < _.length; ++f) {
                            var h = u.le().length;
                            if (this.writeEvent(_[f], d),
                            u.le().length - h > 2936012)
                                o.default.eventsRejected([_[f]], r.AWTEventsRejectedReason.SizeLimitExceeded),
                                _.splice(f--, 1),
                                u.le().splice(h),
                                this.pe(_.length, u, p, l);
                            else if (u.le().length > 2936012) {
                                u.le().splice(h),
                                i || (i = {}),
                                e[c] = _.splice(0, f),
                                i[c] = _,
                                this.pe(e[c].length, u, p, l),
                                a = !0;
                                break
                            }
                        }
                        d.fe(!1)
                    }
                return d.fe(!1),
                {
                    payloadBlob: u.le(),
                    remainingRequest: i
                }
            }
            ,
            e.pe = function(e, t, i, r) {
                for (var o = n.ve.he(n.Number.w(e)), s = 0; s < i; ++s) {
                    if (!(s < o.length)) {
                        t.le().slice(r + s, i - s);
                        break
                    }
                    t.le()[r + s] = o[s]
                }
            }
            ,
            e.writeEvent = function(e, t) {
                t.te(n.ne.oe, 1, null),
                t.ae(e.id),
                t.te(n.ne.ce, 3, null),
                t._e(s.numberToBondInt64(e.timestamp)),
                t.te(n.ne.oe, 5, null),
                t.ae(e.type),
                t.te(n.ne.oe, 6, null),
                t.ae(e.name);
                var i = {}
                  , o = 0
                  , a = {}
                  , u = 0
                  , d = {}
                  , c = 0
                  , _ = {}
                  , l = 0
                  , p = {}
                  , f = 0
                  , h = {}
                  , v = 0
                  , y = {}
                  , T = 0;
                for (var g in e.properties)
                    if (e.properties.hasOwnProperty(g)) {
                        var m = e.properties[g];
                        if (m.cc > 0)
                            y[g] = m,
                            T++;
                        else if (m.pii > 0)
                            h[g] = m,
                            v++;
                        else
                            switch (m.type) {
                            case r.AWTPropertyType.String:
                                i[g] = m.value,
                                o++;
                                break;
                            case r.AWTPropertyType.Int64:
                                a[g] = m.value,
                                u++;
                                break;
                            case r.AWTPropertyType.Double:
                                d[g] = m.value,
                                c++;
                                break;
                            case r.AWTPropertyType.Boolean:
                                _[g] = m.value,
                                l++;
                                break;
                            case r.AWTPropertyType.Date:
                                p[g] = m.value,
                                f++
                            }
                    }
                if (o) {
                    t.te(n.ne.ie, 13, null),
                    t.re(o, n.ne.oe, n.ne.oe);
                    for (var g in i)
                        if (i.hasOwnProperty(g)) {
                            var S = i[g];
                            t.ae(g),
                            t.ae(S.toString())
                        }
                }
                if (v) {
                    t.te(n.ne.ie, 30, null),
                    t.re(v, n.ne.oe, n.ne.de);
                    for (var g in h)
                        if (h.hasOwnProperty(g)) {
                            var m = h[g];
                            t.ae(g),
                            t.te(n.ne.ye, 1, null),
                            t.Te(1),
                            t.te(n.ne.ye, 2, null),
                            t.Te(m.pii),
                            t.te(n.ne.oe, 3, null),
                            t.ae(m.value.toString()),
                            t.fe(!1)
                        }
                }
                if (l) {
                    t.te(n.ne.ie, 31, null),
                    t.re(l, n.ne.oe, n.ne.ge);
                    for (var g in _)
                        if (_.hasOwnProperty(g)) {
                            var S = _[g];
                            t.ae(g),
                            t.me(S)
                        }
                }
                if (f) {
                    t.te(n.ne.ie, 32, null),
                    t.re(f, n.ne.oe, n.ne.ce);
                    for (var g in p)
                        if (p.hasOwnProperty(g)) {
                            var S = p[g];
                            t.ae(g),
                            t._e(s.numberToBondInt64(S))
                        }
                }
                if (u) {
                    t.te(n.ne.ie, 33, null),
                    t.re(u, n.ne.oe, n.ne.ce);
                    for (var g in a)
                        if (a.hasOwnProperty(g)) {
                            var S = a[g];
                            t.ae(g),
                            t._e(s.numberToBondInt64(S))
                        }
                }
                if (c) {
                    t.te(n.ne.ie, 34, null),
                    t.re(c, n.ne.oe, n.ne.Se);
                    for (var g in d)
                        if (d.hasOwnProperty(g)) {
                            var S = d[g];
                            t.ae(g),
                            t.Ae(S)
                        }
                }
                if (T) {
                    t.te(n.ne.ie, 36, null),
                    t.re(T, n.ne.oe, n.ne.de);
                    for (var g in y)
                        if (y.hasOwnProperty(g)) {
                            var m = y[g];
                            t.ae(g),
                            t.te(n.ne.ye, 1, null),
                            t.Te(m.cc),
                            t.te(n.ne.oe, 2, null),
                            t.ae(m.value.toString()),
                            t.fe(!1)
                        }
                }
                t.fe(!1)
            }
            ,
            e.base64Encode = function(e) {
                return n.ve.Ie(e)
            }
            ,
            e
        }();
        t.default = a
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(1)
          , r = i(2)
          , o = i(0)
          , s = function() {
            function e() {}
            return e.initialize = function(e) {
                var t = this;
                this.Ee = e,
                this.We = !0,
                r.default.addNotificationListener({
                    eventsSent: function(e) {
                        t.Pe("records_sent_count", e.length, e[0].apiKey)
                    },
                    eventsDropped: function(e, i) {
                        switch (i) {
                        case o.AWTEventsDroppedReason.NonRetryableStatus:
                            t.Pe("d_send_fail", e.length, e[0].apiKey),
                            t.Pe("records_dropped_count", e.length, e[0].apiKey);
                            break;
                        case o.AWTEventsDroppedReason.QueueFull:
                            t.Pe("d_queue_full", e.length, e[0].apiKey)
                        }
                    },
                    eventsRejected: function(e, i) {
                        switch (i) {
                        case o.AWTEventsRejectedReason.InvalidEvent:
                            t.Pe("r_inv", e.length, e[0].apiKey);
                            break;
                        case o.AWTEventsRejectedReason.KillSwitch:
                            t.Pe("r_kl", e.length, e[0].apiKey);
                            break;
                        case o.AWTEventsRejectedReason.SizeLimitExceeded:
                            t.Pe("r_size", e.length, e[0].apiKey)
                        }
                        t.Pe("r_count", e.length, e[0].apiKey)
                    },
                    eventsRetrying: null
                }),
                setTimeout(function() {
                    return t.flush()
                }, 6e4)
            }
            ,
            e.teardown = function() {
                this.We && (this.flush(),
                this.We = !1)
            }
            ,
            e.eventReceived = function(t) {
                e.Pe("records_received_count", 1, t)
            }
            ,
            e.flush = function() {
                var e = this;
                if (this.We) {
                    for (var t in this.Be)
                        this.Be.hasOwnProperty(t) && this.Ee(this.Be[t], t);
                    this.Be = {},
                    setTimeout(function() {
                        return e.flush()
                    }, 6e4)
                }
            }
            ,
            e.Pe = function(e, t, i) {
                if (this.We && i !== n.StatsApiKey) {
                    var r = n.getTenantId(i);
                    this.Be[r] || (this.Be[r] = {}),
                    this.Be[r][e] ? this.Be[r][e] = this.Be[r][e] + t : this.Be[r][e] = t
                }
            }
            ,
            e.We = !1,
            e.Be = {},
            e
        }();
        t.default = s
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0)
          , r = i(6)
          , o = i(12)
          , s = i(13)
          , a = i(3)
          , u = i(2)
          , d = i(7)
          , c = function() {
            function e() {}
            return e.initialize = function(e, t) {
                if (void 0 === t && (t = {}),
                !this.we)
                    return this.we = !0,
                    o.default.defaultTenantToken = e,
                    this.Ce(t),
                    this.T.disableCookiesUsage && !this.T.propertyStorageOverride && (o.default.sessionEnabled = !1),
                    d.default.addPropertyStorageOverride(this.T.propertyStorageOverride),
                    d.default.autoCollect(o.default.semanticContext, this.T.disableCookiesUsage, this.T.userAgent),
                    a.default.initialize(this.T),
                    o.default.loggingEnabled = !0,
                    this.T.enableAutoUserSession && (this.getLogger().logSession(r.AWTSessionState.Started),
                    window.addEventListener("beforeunload", this.flushAndTeardown)),
                    this.getLogger()
            }
            ,
            e.getSemanticContext = function() {
                return o.default.semanticContext
            }
            ,
            e.flush = function(e) {
                this.we && !this.be && a.default.flush(e)
            }
            ,
            e.flushAndTeardown = function() {
                this.we && !this.be && (this.T.enableAutoUserSession && this.getLogger().logSession(r.AWTSessionState.Ended),
                a.default.flushAndTeardown(),
                o.default.loggingEnabled = !1,
                this.be = !0)
            }
            ,
            e.pauseTransmission = function() {
                this.we && !this.be && a.default.pauseTransmission()
            }
            ,
            e.resumeTransmision = function() {
                this.we && !this.be && a.default.resumeTransmision()
            }
            ,
            e.setTransmitProfile = function(e) {
                this.we && !this.be && a.default.setTransmitProfile(e)
            }
            ,
            e.loadTransmitProfiles = function(e) {
                this.we && !this.be && a.default.loadTransmitProfiles(e)
            }
            ,
            e.setContext = function(e, t, i) {
                void 0 === i && (i = n.AWTPropertyType.Unspecified),
                o.default.logManagerContext.setProperty(e, t, i)
            }
            ,
            e.setContextWithPii = function(e, t, i, r) {
                void 0 === r && (r = n.AWTPropertyType.Unspecified),
                o.default.logManagerContext.setPropertyWithPii(e, t, i, r)
            }
            ,
            e.setContextWithCustomerContent = function(e, t, i, r) {
                void 0 === r && (r = n.AWTPropertyType.Unspecified),
                o.default.logManagerContext.setPropertyWithCustomerContent(e, t, i, r)
            }
            ,
            e.getLogger = function(e) {
                var t = e;
                return t && t !== o.default.defaultTenantToken || (t = ""),
                this.Re[t] || (this.Re[t] = new s.default(t)),
                this.Re[t]
            }
            ,
            e.addNotificationListener = function(e) {
                u.default.addNotificationListener(e)
            }
            ,
            e.removeNotificationListener = function(e) {
                u.default.removeNotificationListener(e)
            }
            ,
            e.Ce = function(e) {
                e.collectorUri && (this.T.collectorUri = e.collectorUri),
                e.cacheMemorySizeLimitInNumberOfEvents > 0 && (this.T.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents),
                e.httpXHROverride && e.httpXHROverride.sendPOST && (this.T.httpXHROverride = e.httpXHROverride),
                e.propertyStorageOverride && e.propertyStorageOverride.getProperty && e.propertyStorageOverride.setProperty && (this.T.propertyStorageOverride = e.propertyStorageOverride),
                e.userAgent && (this.T.userAgent = e.userAgent),
                e.disableCookiesUsage && (this.T.disableCookiesUsage = e.disableCookiesUsage),
                e.canSendStatEvent && (this.T.canSendStatEvent = e.canSendStatEvent),
                e.enableAutoUserSession && "undefined" != typeof window && window.addEventListener && (this.T.enableAutoUserSession = e.enableAutoUserSession),
                e.clockSkewRefreshDurationInMins > 0 && (this.T.clockSkewRefreshDurationInMins = e.clockSkewRefreshDurationInMins)
            }
            ,
            e.Re = {},
            e.we = !1,
            e.be = !1,
            e.T = {
                collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                cacheMemorySizeLimitInNumberOfEvents: 1e4,
                disableCookiesUsage: !1,
                canSendStatEvent: function(e) {
                    return !0
                },
                clockSkewRefreshDurationInMins: 0
            },
            e
        }();
        t.default = c
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(5)
          , r = i(8)
          , o = function() {
            function e() {}
            return e.logManagerContext = new n.default,
            e.sessionEnabled = !0,
            e.loggingEnabled = !1,
            e.defaultTenantToken = "",
            e.semanticContext = new r.default(!0,e.logManagerContext),
            e
        }();
        t.default = o
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0)
          , r = i(6)
          , o = i(5)
          , s = i(1)
          , a = i(10)
          , u = i(2)
          , d = i(3)
          , c = i(12)
          , _ = i(15)
          , l = i(8)
          , p = i(7)
          , f = function() {
            function e(e) {
                this.De = e,
                this.Oe = new o.default,
                this.R = new l.default(!1,this.Oe),
                this.Ne = 0,
                this.Me()
            }
            return e.prototype.setContext = function(e, t, i) {
                void 0 === i && (i = n.AWTPropertyType.Unspecified),
                this.Oe.setProperty(e, t, i)
            }
            ,
            e.prototype.setContextWithPii = function(e, t, i, r) {
                void 0 === r && (r = n.AWTPropertyType.Unspecified),
                this.Oe.setPropertyWithPii(e, t, i, r)
            }
            ,
            e.prototype.setContextWithCustomerContent = function(e, t, i, r) {
                void 0 === r && (r = n.AWTPropertyType.Unspecified),
                this.Oe.setPropertyWithCustomerContent(e, t, i, r)
            }
            ,
            e.prototype.getSemanticContext = function() {
                return this.R
            }
            ,
            e.prototype.logEvent = function(t) {
                if (c.default.loggingEnabled) {
                    this.De || (this.De = c.default.defaultTenantToken,
                    this.Me());
                    var i = !0;
                    s.isString(t) ? t = {
                        name: t
                    } : t instanceof o.default && (t = t.getEvent(),
                    i = !1),
                    a.default.eventReceived(this.De),
                    e.ke(e.Ue(t, this.De, i), this.Oe)
                }
            }
            ,
            e.prototype.logSession = function(t, i) {
                if (c.default.sessionEnabled) {
                    var o = {
                        name: "session",
                        type: "session",
                        properties: {}
                    };
                    if (e.xe(o, i),
                    o.priority = n.AWTEventPriority.High,
                    t === r.AWTSessionState.Started) {
                        if (this.Ne > 0)
                            return;
                        this.Ne = (new Date).getTime(),
                        this.Le = s.newGuid(),
                        this.setContext("Session.Id", this.Le),
                        o.properties["Session.State"] = "Started"
                    } else {
                        if (t !== r.AWTSessionState.Ended)
                            return;
                        if (0 === this.Ne)
                            return;
                        var a = Math.floor(((new Date).getTime() - this.Ne) / 1e3);
                        o.properties["Session.Id"] = this.Le,
                        o.properties["Session.State"] = "Ended",
                        o.properties["Session.Duration"] = a.toString(),
                        o.properties["Session.DurationBucket"] = e.Fe(a),
                        this.Ne = 0,
                        this.setContext("Session.Id", null),
                        this.Le = void 0
                    }
                    o.properties["Session.FirstLaunchTime"] = p.default.firstLaunchTime,
                    this.logEvent(o)
                }
            }
            ,
            e.prototype.getSessionId = function() {
                return this.Le
            }
            ,
            e.prototype.logFailure = function(t, i, r, o, s) {
                if (t && i) {
                    var a = {
                        name: "failure",
                        type: "failure",
                        properties: {}
                    };
                    e.xe(a, s),
                    a.properties["Failure.Signature"] = t,
                    a.properties["Failure.Detail"] = i,
                    r && (a.properties["Failure.Category"] = r),
                    o && (a.properties["Failure.Id"] = o),
                    a.priority = n.AWTEventPriority.High,
                    this.logEvent(a)
                }
            }
            ,
            e.prototype.logPageView = function(t, i, n, r, o, s) {
                if (t && i) {
                    var a = {
                        name: "pageview",
                        type: "pageview",
                        properties: {}
                    };
                    e.xe(a, s),
                    a.properties["PageView.Id"] = t,
                    a.properties["PageView.Name"] = i,
                    n && (a.properties["PageView.Category"] = n),
                    r && (a.properties["PageView.Uri"] = r),
                    o && (a.properties["PageView.ReferrerUri"] = o),
                    this.logEvent(a)
                }
            }
            ,
            e.prototype.Me = function() {
                !e.qe[this.De] && this.De && (e.qe[this.De] = s.newGuid())
            }
            ,
            e.xe = function(e, t) {
                if (t) {
                    t instanceof o.default && (t = t.getEvent()),
                    t.name && (e.name = t.name),
                    t.priority && (e.priority = t.priority);
                    for (var i in t.properties)
                        t.properties.hasOwnProperty(i) && (e.properties[i] = t.properties[i])
                }
            }
            ,
            e.Fe = function(e) {
                return e < 0 ? "Undefined" : e <= 3 ? "UpTo3Sec" : e <= 10 ? "UpTo10Sec" : e <= 30 ? "UpTo30Sec" : e <= 60 ? "UpTo60Sec" : e <= 180 ? "UpTo3Min" : e <= 600 ? "UpTo10Min" : e <= 1800 ? "UpTo30Min" : "Above30Min"
            }
            ,
            e.ke = function(e, t) {
                return e.name && s.isString(e.name) ? (e.name = e.name.toLowerCase(),
                e.name = e.name.replace(s.EventNameDotRegex, "_"),
                e.type && s.isString(e.type) ? e.type = e.type.toLowerCase() : e.type = "custom",
                s.EventNameAndTypeRegex.test(e.name) && s.EventNameAndTypeRegex.test(e.type) ? ((!s.isNumber(e.timestamp) || e.timestamp < 0) && (e.timestamp = (new Date).getTime()),
                e.properties || (e.properties = {}),
                this.He(e, t.getPropertyMap()),
                this.He(e, c.default.logManagerContext.getPropertyMap()),
                this.Qe(e, "EventInfo.InitId", this.je(e.apiKey)),
                this.Qe(e, "EventInfo.Sequence", this.ze(e.apiKey)),
                this.Qe(e, "EventInfo.SdkVersion", _.FullVersionString),
                this.Qe(e, "EventInfo.Name", e.name),
                this.Qe(e, "EventInfo.Time", new Date(e.timestamp).toISOString()),
                s.isPriority(e.priority) || (e.priority = n.AWTEventPriority.Normal),
                void this.Ke(e)) : void u.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent)) : void u.default.eventsRejected([e], n.AWTEventsRejectedReason.InvalidEvent)
            }
            ,
            e.He = function(e, t) {
                if (t)
                    for (var i in t)
                        t.hasOwnProperty(i) && (e.properties[i] || (e.properties[i] = t[i]))
            }
            ,
            e.Qe = function(e, t, i) {
                e.properties[t] = {
                    value: i,
                    pii: n.AWTPiiKind.NotSet,
                    type: n.AWTPropertyType.String
                }
            }
            ,
            e.Ke = function(e) {
                d.default.sendEvent(e)
            }
            ,
            e.Ue = function(e, t, i) {
                if (e.properties = e.properties || {},
                i)
                    for (var n in e.properties)
                        e.properties.hasOwnProperty(n) && (e.properties[n] = s.sanitizeProperty(n, e.properties[n]),
                        null === e.properties[n] && delete e.properties[n]);
                var r = e;
                return r.id = s.newGuid(),
                r.apiKey = t,
                r
            }
            ,
            e.je = function(t) {
                return e.qe[t]
            }
            ,
            e.ze = function(t) {
                return void 0 === e.Ge[t] && (e.Ge[t] = 0),
                (++e.Ge[t]).toString()
            }
            ,
            e.Ge = {},
            e.qe = {},
            e
        }();
        t.default = f
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AWT_REAL_TIME = "REAL_TIME",
        t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME",
        t.AWT_BEST_EFFORT = "BEST_EFFORT"
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Version = "1.8.3",
        t.FullVersionString = "AWT-Web-JS-" + t.Version
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = i(0);
        t.AWTPropertyType = n.AWTPropertyType,
        t.AWTPiiKind = n.AWTPiiKind,
        t.AWTEventPriority = n.AWTEventPriority,
        t.AWTEventsDroppedReason = n.AWTEventsDroppedReason,
        t.AWTEventsRejectedReason = n.AWTEventsRejectedReason,
        t.AWTCustomerContentKind = n.AWTCustomerContentKind;
        var r = i(6);
        t.AWTUserIdType = r.AWTUserIdType,
        t.AWTSessionState = r.AWTSessionState;
        var o = i(14);
        t.AWT_BEST_EFFORT = o.AWT_BEST_EFFORT,
        t.AWT_NEAR_REAL_TIME = o.AWT_NEAR_REAL_TIME,
        t.AWT_REAL_TIME = o.AWT_REAL_TIME;
        var s = i(5);
        t.AWTEventProperties = s.default;
        var a = i(13);
        t.AWTLogger = a.default;
        var u = i(11);
        t.AWTLogManager = u.default;
        var d = i(29);
        t.AWTTransmissionManager = d.default;
        var c = i(9);
        t.AWTSerializer = c.default;
        var _ = i(8);
        t.AWTSemanticContext = _.default,
        t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/",
        t.AWT_COLLECTOR_URL_USGOV_DOD = "https://pf.pipe.aria.microsoft.com/Collector/3.0",
        t.AWT_COLLECTOR_URL_USGOV_DOJ = "https://tb.pipe.aria.microsoft.com/Collector/3.0"
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        !function(e) {
            e[e.Ve = 0] = "_BT_STOP",
            e[e.Xe = 1] = "_BT_STOP_BASE",
            e[e.ge = 2] = "_BT_BOOL",
            e[e.Se = 8] = "_BT_DOUBLE",
            e[e.oe = 9] = "_BT_STRING",
            e[e.de = 10] = "_BT_STRUCT",
            e[e.se = 11] = "_BT_LIST",
            e[e.ie = 13] = "_BT_MAP",
            e[e.ye = 16] = "_BT_INT32",
            e[e.ce = 17] = "_BT_INT64"
        }(t.ne || (t.ne = {}))
    }
