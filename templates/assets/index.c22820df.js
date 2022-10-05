function k1(e, t) {
    return t.forEach(function (n) {
        n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function (r) {
            if (r !== "default" && !(r in e)) {
                var i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(e, r, i.get ? i : {
                    enumerable: !0, get: function () {
                        return n[r]
                    }
                })
            }
        })
    }), Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}))
}

const x1 = function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i) if (o.type === "childList") for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {childList: !0, subtree: !0});

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
};
x1();
var V = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};

function Yg(e) {
    if (e.__esModule) return e;
    var t = Object.defineProperty({}, "__esModule", {value: !0});
    return Object.keys(e).forEach(function (n) {
        var r = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(t, n, r.get ? r : {
            enumerable: !0, get: function () {
                return e[n]
            }
        })
    }), t
}

var U = {exports: {}}, le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa = Symbol.for("react.element"), L1 = Symbol.for("react.portal"), P1 = Symbol.for("react.fragment"),
    F1 = Symbol.for("react.strict_mode"), M1 = Symbol.for("react.profiler"), $1 = Symbol.for("react.provider"),
    j1 = Symbol.for("react.context"), U1 = Symbol.for("react.forward_ref"), V1 = Symbol.for("react.suspense"),
    B1 = Symbol.for("react.memo"), z1 = Symbol.for("react.lazy"), rv = Symbol.iterator;

function H1(e) {
    return e === null || typeof e != "object" ? null : (e = rv && e[rv] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Xg = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, Jg = Object.assign, Kg = {};

function Vo(e, t, n) {
    this.props = e, this.context = t, this.refs = Kg, this.updater = n || Xg
}

Vo.prototype.isReactComponent = {};
Vo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Vo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Zg() {
}

Zg.prototype = Vo.prototype;

function Np(e, t, n) {
    this.props = e, this.context = t, this.refs = Kg, this.updater = n || Xg
}

var Ip = Np.prototype = new Zg;
Ip.constructor = Np;
Jg(Ip, Vo.prototype);
Ip.isPureReactComponent = !0;
var iv = Array.isArray, e0 = Object.prototype.hasOwnProperty, bp = {current: null},
    t0 = {key: !0, ref: !0, __self: !0, __source: !0};

function n0(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) e0.call(t, r) && !t0.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n; else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {$$typeof: fa, type: e, key: o, ref: s, props: i, _owner: bp.current}
}

function G1(e, t) {
    return {$$typeof: fa, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function Op(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fa
}

function q1(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var ov = /\/+/g;

function Jc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? q1("" + e.key) : t.toString(36)
}

function Il(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0; else switch (o) {
        case"string":
        case"number":
            s = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case fa:
                case L1:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + Jc(s, 0) : r, iv(i) ? (n = "", e != null && (n = e.replace(ov, "$&/") + "/"), Il(i, t, n, "", function (u) {
        return u
    })) : i != null && (Op(i) && (i = G1(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ov, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", iv(e)) for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = r + Jc(o, a);
        s += Il(o, t, n, l, i)
    } else if (l = H1(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done;) o = o.value, l = r + Jc(o, a++), s += Il(o, t, n, l, i); else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Qa(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return Il(e, r, "", "", function (o) {
        return t.call(n, o, i++)
    }), r
}

function Q1(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var bt = {current: null}, bl = {transition: null},
    W1 = {ReactCurrentDispatcher: bt, ReactCurrentBatchConfig: bl, ReactCurrentOwner: bp};
le.Children = {
    map: Qa, forEach: function (e, t, n) {
        Qa(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Qa(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Qa(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!Op(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
le.Component = Vo;
le.Fragment = P1;
le.Profiler = M1;
le.PureComponent = Np;
le.StrictMode = F1;
le.Suspense = V1;
le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W1;
le.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Jg({}, e.props), i = e.key, o = e.ref, s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = bp.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) e0.call(t, l) && !t0.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n; else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {$$typeof: fa, type: e.type, key: i, ref: o, props: r, _owner: s}
};
le.createContext = function (e) {
    return e = {
        $$typeof: j1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: $1, _context: e}, e.Consumer = e
};
le.createElement = n0;
le.createFactory = function (e) {
    var t = n0.bind(null, e);
    return t.type = e, t
};
le.createRef = function () {
    return {current: null}
};
le.forwardRef = function (e) {
    return {$$typeof: U1, render: e}
};
le.isValidElement = Op;
le.lazy = function (e) {
    return {$$typeof: z1, _payload: {_status: -1, _result: e}, _init: Q1}
};
le.memo = function (e, t) {
    return {$$typeof: B1, type: e, compare: t === void 0 ? null : t}
};
le.startTransition = function (e) {
    var t = bl.transition;
    bl.transition = {};
    try {
        e()
    } finally {
        bl.transition = t
    }
};
le.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
le.useCallback = function (e, t) {
    return bt.current.useCallback(e, t)
};
le.useContext = function (e) {
    return bt.current.useContext(e)
};
le.useDebugValue = function () {
};
le.useDeferredValue = function (e) {
    return bt.current.useDeferredValue(e)
};
le.useEffect = function (e, t) {
    return bt.current.useEffect(e, t)
};
le.useId = function () {
    return bt.current.useId()
};
le.useImperativeHandle = function (e, t, n) {
    return bt.current.useImperativeHandle(e, t, n)
};
le.useInsertionEffect = function (e, t) {
    return bt.current.useInsertionEffect(e, t)
};
le.useLayoutEffect = function (e, t) {
    return bt.current.useLayoutEffect(e, t)
};
le.useMemo = function (e, t) {
    return bt.current.useMemo(e, t)
};
le.useReducer = function (e, t, n) {
    return bt.current.useReducer(e, t, n)
};
le.useRef = function (e) {
    return bt.current.useRef(e)
};
le.useState = function (e) {
    return bt.current.useState(e)
};
le.useSyncExternalStore = function (e, t, n) {
    return bt.current.useSyncExternalStore(e, t, n)
};
le.useTransition = function () {
    return bt.current.useTransition()
};
le.version = "18.2.0";
U.exports = le;
var ur = U.exports, rd = k1({__proto__: null, default: ur}, [U.exports]);

/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ze() {
    return ze = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ze.apply(this, arguments)
}

var Je;
(function (e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Je || (Je = {}));
const sv = "popstate";

function Y1(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {pathname: o, search: s, hash: a} = r.location;
        return ii("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : Xl(i)
    }

    return J1(t, n, null, e)
}

function X1() {
    return Math.random().toString(36).substr(2, 8)
}

function av(e) {
    return {usr: e.state, key: e.key}
}

function ii(e, t, n, r) {
    return n === void 0 && (n = null), ze({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? er(t) : t, {state: n, key: t && t.key || r || X1()})
}

function Xl(e) {
    let {pathname: t = "/", search: n = "", hash: r = ""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function er(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function J1(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i = document.defaultView, v5Compat: o = !1} = r, s = i.history, a = Je.Pop, l = null;

    function u() {
        a = Je.Pop, l && l({action: a, location: f.location})
    }

    function c(p, h) {
        a = Je.Push;
        let g = ii(f.location, p, h);
        n && n(g, p);
        let _ = av(g), m = f.createHref(g);
        try {
            s.pushState(_, "", m)
        } catch {
            i.location.assign(m)
        }
        o && l && l({action: a, location: g})
    }

    function d(p, h) {
        a = Je.Replace;
        let g = ii(f.location, p, h);
        n && n(g, p);
        let _ = av(g), m = f.createHref(g);
        s.replaceState(_, "", m), o && l && l({action: a, location: g})
    }

    let f = {
        get action() {
            return a
        }, get location() {
            return e(i, s)
        }, listen(p) {
            if (l) throw new Error("A history only accepts one active listener");
            return i.addEventListener(sv, u), l = p, () => {
                i.removeEventListener(sv, u), l = null
            }
        }, createHref(p) {
            return t(i, p)
        }, push: c, replace: d, go(p) {
            return s.go(p)
        }
    };
    return f
}

var yt;
(function (e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(yt || (yt = {}));

function r0(e, t, n) {
    return t === void 0 && (t = []), n === void 0 && (n = new Set), e.map((r, i) => {
        let o = [...t, i], s = typeof r.id == "string" ? r.id : o.join("-");
        return fe(!n.has(s), 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`), n.add(s), ze({}, r, {
            id: s,
            children: r.children ? r0(r.children, o, n) : void 0
        })
    })
}

function vs(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? er(t) : t, i = o0(r.pathname || "/", n);
    if (i == null) return null;
    let o = i0(e);
    K1(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a) s = aN(o[a], i);
    return s
}

function i0(e, t, n, r) {
    return t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = ""), e.forEach((i, o) => {
        let s = {relativePath: i.path || "", caseSensitive: i.caseSensitive === !0, childrenIndex: o, route: i};
        s.relativePath.startsWith("/") && (fe(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
        let a = oi([r, s.relativePath]), l = n.concat(s);
        i.children && i.children.length > 0 && (fe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')), i0(i.children, t, l, a)), !(i.path == null && !i.index) && t.push({
            path: a,
            score: oN(a, i.index),
            routesMeta: l
        })
    }), t
}

function K1(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : sN(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}

const Z1 = /^:\w+$/, eN = 3, tN = 2, nN = 1, rN = 10, iN = -2, lv = e => e === "*";

function oN(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(lv) && (r += iN), t && (r += tN), n.filter(i => !lv(i)).reduce((i, o) => i + (Z1.test(o) ? eN : o === "" ? nN : rN), r)
}

function sN(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function aN(e, t) {
    let {routesMeta: n} = e, r = {}, i = "/", o = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s], l = s === n.length - 1, u = i === "/" ? t : t.slice(i.length) || "/",
            c = lN({path: a.relativePath, caseSensitive: a.caseSensitive, end: l}, u);
        if (!c) return null;
        Object.assign(r, c.params);
        let d = a.route;
        o.push({
            params: r,
            pathname: oi([i, c.pathname]),
            pathnameBase: pN(oi([i, c.pathnameBase])),
            route: d
        }), c.pathnameBase !== "/" && (i = oi([i, c.pathnameBase]))
    }
    return o
}

function lN(e, t) {
    typeof e == "string" && (e = {path: e, caseSensitive: !1, end: !0});
    let [n, r] = uN(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0], s = o.replace(/(.)\/+$/, "$1"), a = i.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            if (c === "*") {
                let f = a[d] || "";
                s = o.slice(0, o.length - f.length).replace(/(.)\/+$/, "$1")
            }
            return u[c] = cN(a[d] || "", c), u
        }, {}), pathname: o, pathnameBase: s, pattern: e
    }
}

function uN(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), s0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (s, a) => (r.push(a), "([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i += n ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [new RegExp(i, t ? void 0 : "i"), r]
}

function cN(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return s0(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function o0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function fe(e, t) {
    if (e === !1 || e === null || typeof e == "undefined") throw new Error(t)
}

function s0(e, t) {
    if (!e) {
        typeof console != "undefined" && console.warn(t);
        try {
            throw new Error(t)
        } catch {
        }
    }
}

function fN(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r = "", hash: i = ""} = typeof e == "string" ? er(e) : e;
    return {pathname: n ? n.startsWith("/") ? n : dN(n, t) : t, search: hN(r), hash: mN(i)}
}

function dN(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function a0(e, t, n, r) {
    r === void 0 && (r = !1);
    let i = typeof e == "string" ? er(e) : ze({}, e), o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
    if (r || s == null) a = n; else {
        let d = t.length - 1;
        if (s.startsWith("..")) {
            let f = s.split("/");
            for (; f[0] === "..";) f.shift(), d -= 1;
            i.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = fN(i, a), u = s && s !== "/" && s.endsWith("/"), c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l
}

const oi = e => e.join("/").replace(/\/\/+/g, "/"), pN = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    hN = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    mN = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;

class uv extends Error {
}

class vN {
    constructor(t) {
        this.pendingKeys = new Set, this.subscriber = void 0, fe(t && typeof t == "object" && !Array.isArray(t), "defer() only accepts plain objects");
        let n;
        this.abortPromise = new Promise((i, o) => n = o), this.controller = new AbortController;
        let r = () => n(new uv("Deferred data aborted"));
        this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", r), this.controller.signal.addEventListener("abort", r), this.data = Object.entries(t).reduce((i, o) => {
            let [s, a] = o;
            return Object.assign(i, {[s]: this.trackPromise(s, a)})
        }, {})
    }

    trackPromise(t, n) {
        if (!(n instanceof Promise)) return n;
        this.pendingKeys.add(t);
        let r = Promise.race([n, this.abortPromise]).then(i => this.onSettle(r, t, null, i), i => this.onSettle(r, t, i));
        return r.catch(() => {
        }), Object.defineProperty(r, "_tracked", {get: () => !0}), r
    }

    onSettle(t, n, r, i) {
        if (this.controller.signal.aborted && r instanceof uv) return this.unlistenAbortSignal(), Object.defineProperty(t, "_error", {get: () => r}), Promise.reject(r);
        this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
        const o = this.subscriber;
        return r ? (Object.defineProperty(t, "_error", {get: () => r}), o && o(!1), Promise.reject(r)) : (Object.defineProperty(t, "_data", {get: () => i}), o && o(!1), i)
    }

    subscribe(t) {
        this.subscriber = t
    }

    cancel() {
        this.controller.abort(), this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
        let t = this.subscriber;
        t && t(!0)
    }

    async resolveData(t) {
        let n = !1;
        if (!this.done) {
            let r = () => this.cancel();
            t.addEventListener("abort", r), n = await new Promise(i => {
                this.subscribe(o => {
                    t.removeEventListener("abort", r), (o || this.done) && i(o)
                })
            })
        }
        return n
    }

    get done() {
        return this.pendingKeys.size === 0
    }

    get unwrappedData() {
        return fe(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds"), Object.entries(this.data).reduce((t, n) => {
            let [r, i] = n;
            return Object.assign(t, {[r]: gN(i)})
        }, {})
    }
}

function yN(e) {
    return e instanceof Promise && e._tracked === !0
}

function gN(e) {
    if (!yN(e)) return e;
    if (e._error) throw e._error;
    return e._data
}

const Ap = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number" ? r = {status: r} : typeof r.status == "undefined" && (r.status = 302);
    let i = new Headers(r.headers);
    return i.set("Location", t), new Response(null, ze({}, r, {headers: i}))
};

class Bo {
    constructor(t, n, r) {
        this.status = t, this.statusText = n || "", this.data = r
    }
}

function l0(e) {
    return e instanceof Bo
}

const Kc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0
}, EN = {state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0};

function wN(e) {
    fe(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let t = r0(e.routes), n = null, r = new Set, i = null, o = null, s = null, a = !1,
        l = vs(t, e.history.location, e.basename), u = null;
    if (l == null) {
        let {matches: L, route: S, error: B} = hv(t);
        l = L, u = {[S.id]: B}
    }
    let c = !l.some(L => L.route.loader) || e.hydrationData != null, d, f = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: l,
            initialized: c,
            navigation: Kc,
            restoreScrollPosition: null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || u,
            fetchers: new Map
        }, p = Je.Pop, h = !1, g, _ = !1, m = !1, y = [], E = [], T = new Map, R = 0, x = -1, F = new Map, $ = new Set,
        b = new Map, P = new Map;

    function X() {
        return n = e.history.listen(L => {
            let {action: S, location: B} = L;
            return j(S, B)
        }), f.initialized || j(Je.Pop, f.location), d
    }

    function Se() {
        n && n(), r.clear(), g && g.abort(), f.fetchers.forEach((L, S) => Z(S))
    }

    function Xe(L) {
        return r.add(L), () => r.delete(L)
    }

    function he(L) {
        f = ze({}, f, L), r.forEach(S => S(f))
    }

    function je(L, S) {
        let B = f.actionData != null && f.navigation.formMethod != null && f.navigation.state === "loading",
            K = S.loaderData ? {loaderData: ef(f.loaderData, S.loaderData, S.matches || [])} : {};
        he(ze({}, B ? {} : {actionData: null}, S, K, {
            historyAction: p,
            location: L,
            initialized: !0,
            navigation: Kc,
            revalidation: "idle",
            restoreScrollPosition: f.navigation.formData ? !1 : Ha(L, S.matches || f.matches),
            preventScrollReset: h
        })), _ || p === Je.Pop || (p === Je.Push ? e.history.push(L, L.state) : p === Je.Replace && e.history.replace(L, L.state)), p = Je.Pop, h = !1, _ = !1, m = !1, y = [], E = []
    }

    async function oe(L, S) {
        if (typeof L == "number") {
            e.history.go(L);
            return
        }
        let {path: B, submission: K, error: ne} = cv(L, S), ke = ii(f.location, B, S && S.state),
            ve = (S && S.replace) === !0 || K != null ? Je.Replace : Je.Push,
            ue = S && "preventScrollReset" in S ? S.preventScrollReset === !0 : void 0;
        return await j(ve, ke, {submission: K, pendingError: ne, preventScrollReset: ue, replace: S && S.replace})
    }

    function Ie() {
        if (W(), he({revalidation: "loading"}), f.navigation.state !== "submitting") {
            if (f.navigation.state === "idle") {
                j(f.historyAction, f.location, {startUninterruptedRevalidation: !0});
                return
            }
            j(p || f.historyAction, f.navigation.location, {overrideNavigation: f.navigation})
        }
    }

    async function j(L, S, B) {
        g && g.abort(), g = null, p = L, _ = (B && B.startUninterruptedRevalidation) === !0, za(f.location, f.matches), h = (B && B.preventScrollReset) === !0;
        let K = B && B.overrideNavigation, ne = vs(t, S, e.basename);
        if (!ne) {
            let {matches: zn, route: Hn, error: Wr} = hv(t);
            Cn(), je(S, {matches: zn, loaderData: {}, errors: {[Hn.id]: Wr}});
            return
        }
        if (NN(f.location, S)) {
            je(S, {matches: ne});
            return
        }
        g = new AbortController;
        let ke = ns(S, g.signal, B && B.submission), ve, ue;
        if (B && B.pendingError) ue = {[Bi(ne).route.id]: B.pendingError}; else if (B && B.submission) {
            let zn = await Q(ke, S, B.submission, ne, {replace: B.replace});
            if (zn.shortCircuited) return;
            ve = zn.pendingActionData, ue = zn.pendingActionError, K = ze({state: "loading", location: S}, B.submission)
        }
        let {
            shortCircuited: Ee,
            loaderData: Be,
            errors: at
        } = await J(ke, S, ne, K, B && B.submission, B && B.replace, ve, ue);
        Ee || (g = null, je(S, {matches: ne, loaderData: Be, errors: at}))
    }

    async function Q(L, S, B, K, ne) {
        W();
        let ke = ze({state: "submitting", location: S}, B);
        he({navigation: ke});
        let ve, ue = Ev(K, S);
        if (!ue.route.action) ve = mv(S); else if (ve = await ts("action", L, ue), L.signal.aborted) return {shortCircuited: !0};
        if (oo(ve)) {
            let Ee = ze({state: "loading", location: ii(f.location, ve.location)}, B);
            return await k(ve, Ee, ne && ne.replace), {shortCircuited: !0}
        }
        if (Ns(ve)) {
            let Ee = Bi(K, ue.route.id);
            return (ne && ne.replace) !== !0 && (p = Je.Push), {pendingActionError: {[Ee.route.id]: ve.error}}
        }
        if (Zr(ve)) throw new Error("defer() is not supported in actions");
        return {pendingActionData: {[ue.route.id]: ve.data}}
    }

    async function J(L, S, B, K, ne, ke, ve, ue) {
        let Ee = K;
        Ee || (Ee = {
            state: "loading",
            location: S,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        });
        let [Be, at] = fv(f, B, ne, S, m, y, E, ve, ue, b);
        if (Cn(ht => !(B && B.some(At => At.route.id === ht)) || Be && Be.some(At => At.route.id === ht)), Be.length === 0 && at.length === 0) return je(S, {
            matches: B,
            loaderData: ef(f.loaderData, {}, B),
            errors: ue || null,
            actionData: ve || null
        }), {shortCircuited: !0};
        _ || (at.forEach(ht => {
            let [At] = ht;
            const pr = f.fetchers.get(At);
            let qa = {
                state: "loading",
                data: pr && pr.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            };
            f.fetchers.set(At, qa)
        }), he(ze({
            navigation: Ee,
            actionData: ve || f.actionData || null
        }, at.length > 0 ? {fetchers: new Map(f.fetchers)} : {}))), x = ++R, at.forEach(ht => {
            let [At] = ht;
            return T.set(At, g)
        });
        let {results: zn, loaderResults: Hn, fetcherResults: Wr} = await z(f.matches, Be, at, L);
        if (L.signal.aborted) return {shortCircuited: !0};
        at.forEach(ht => {
            let [At] = ht;
            return T.delete(At)
        });
        let es = vv(zn);
        if (es) {
            let ht = Zc(f, es);
            return await k(es, ht, ke), {shortCircuited: !0}
        }
        let {loaderData: Ga, errors: Ri} = pv(f, B, Be, Hn, ue, at, Wr, P);
        P.forEach((ht, At) => {
            ht.subscribe(pr => {
                (pr || ht.done) && P.delete(At)
            })
        }), Ve();
        let Xc = Qr(x);
        return ze({loaderData: Ga, errors: Ri}, Xc || at.length > 0 ? {fetchers: new Map(f.fetchers)} : {})
    }

    function me(L) {
        return f.fetchers.get(L) || EN
    }

    function v(L, S, B, K) {
        if (typeof AbortController == "undefined") throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        T.has(L) && se(L);
        let ne = vs(t, B, e.basename);
        if (!ne) {
            H(L, S, new Bo(404, "Not Found", null));
            return
        }
        let {path: ke, submission: ve} = cv(B, K, !0), ue = Ev(ne, ke);
        if (ve) {
            N(L, S, ke, ue, ve);
            return
        }
        b.set(L, [ke, ue]), I(L, S, ke, ue)
    }

    async function N(L, S, B, K, ne) {
        if (W(), b.delete(L), !K.route.action) {
            let {error: hn} = mv(B);
            H(L, S, hn);
            return
        }
        let ke = f.fetchers.get(L), ve = ze({state: "submitting"}, ne, {data: ke && ke.data});
        f.fetchers.set(L, ve), he({fetchers: new Map(f.fetchers)});
        let ue = new AbortController, Ee = ns(B, ue.signal, ne);
        T.set(L, ue);
        let Be = await ts("action", Ee, K);
        if (Ee.signal.aborted) {
            T.get(L) === ue && T.delete(L);
            return
        }
        if (oo(Be)) {
            T.delete(L), $.add(L);
            let hn = ze({state: "loading"}, ne, {data: void 0});
            f.fetchers.set(L, hn), he({fetchers: new Map(f.fetchers)});
            let Gn = ze({state: "loading", location: ii(f.location, Be.location)}, ne);
            await k(Be, Gn);
            return
        }
        if (Ns(Be)) {
            H(L, S, Be.error);
            return
        }
        Zr(Be) && fe(!1, "defer() is not supported in actions");
        let at = f.navigation.location || f.location, zn = ns(at, ue.signal),
            Hn = f.navigation.state !== "idle" ? vs(t, f.navigation.location, e.basename) : f.matches;
        fe(Hn, "Didn't find any matches after fetcher action");
        let Wr = ++R;
        F.set(L, Wr);
        let es = ze({state: "loading", data: Be.data}, ne);
        f.fetchers.set(L, es);
        let [Ga, Ri] = fv(f, Hn, ne, at, m, y, E, {[K.route.id]: Be.data}, void 0, b);
        Ri.filter(hn => {
            let [Gn] = hn;
            return Gn !== L
        }).forEach(hn => {
            let [Gn] = hn, nv = f.fetchers.get(Gn), R1 = {
                state: "loading",
                data: nv && nv.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            };
            f.fetchers.set(Gn, R1), T.set(Gn, ue)
        }), he({fetchers: new Map(f.fetchers)});
        let {results: Xc, loaderResults: ht, fetcherResults: At} = await z(f.matches, Ga, Ri, zn);
        if (ue.signal.aborted) return;
        F.delete(L), T.delete(L), Ri.forEach(hn => {
            let [Gn] = hn;
            return T.delete(Gn)
        });
        let pr = vv(Xc);
        if (pr) {
            let hn = Zc(f, pr);
            await k(pr, hn);
            return
        }
        let {loaderData: qa, errors: tv} = pv(f, f.matches, Ga, ht, void 0, Ri, At, P), C1 = {
            state: "idle",
            data: Be.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        };
        f.fetchers.set(L, C1);
        let D1 = Qr(Wr);
        f.navigation.state === "loading" && Wr > x ? (fe(p, "Expected pending action"), g && g.abort(), je(f.navigation.location, {
            matches: Hn,
            loaderData: qa,
            errors: tv,
            fetchers: new Map(f.fetchers)
        })) : (he(ze({
            errors: tv,
            loaderData: ef(f.loaderData, qa, Hn)
        }, D1 ? {fetchers: new Map(f.fetchers)} : {})), m = !1)
    }

    async function I(L, S, B, K) {
        let ne = f.fetchers.get(L), ke = {
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            data: ne && ne.data
        };
        f.fetchers.set(L, ke), he({fetchers: new Map(f.fetchers)});
        let ve = new AbortController, ue = ns(B, ve.signal);
        T.set(L, ve);
        let Ee = await ts("loader", ue, K);
        if (Zr(Ee) && (Ee = await f0(Ee, ue.signal, !0) || Ee), T.get(L) === ve && T.delete(L), ue.signal.aborted) return;
        if (oo(Ee)) {
            let at = Zc(f, Ee);
            await k(Ee, at);
            return
        }
        if (Ns(Ee)) {
            let at = Bi(f.matches, S);
            f.fetchers.delete(L), he({fetchers: new Map(f.fetchers), errors: {[at.route.id]: Ee.error}});
            return
        }
        fe(!Zr(Ee), "Unhandled fetcher deferred data");
        let Be = {
            state: "idle",
            data: Ee.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0
        };
        f.fetchers.set(L, Be), he({fetchers: new Map(f.fetchers)})
    }

    async function k(L, S, B) {
        L.revalidate && (m = !0), fe(S.location, "Expected a location on the redirect navigation"), g = null;
        let K = B === !0 ? Je.Replace : Je.Push;
        await j(K, S.location, {overrideNavigation: S})
    }

    async function z(L, S, B, K) {
        let ne = await Promise.all([...S.map(ue => ts("loader", K, ue)), ...B.map(ue => {
            let [, Ee, Be] = ue;
            return ts("loader", ns(Ee, K.signal), Be)
        })]), ke = ne.slice(0, S.length), ve = ne.slice(S.length);
        return await Promise.all([yv(L, S, ke, K.signal, !1, f.loaderData), yv(L, B.map(ue => {
            let [, , Ee] = ue;
            return Ee
        }), ve, K.signal, !0)]), {results: ne, loaderResults: ke, fetcherResults: ve}
    }

    function W() {
        m = !0, y.push(...Cn()), b.forEach((L, S) => {
            T.has(S) && (E.push(S), se(S))
        })
    }

    function H(L, S, B) {
        let K = Bi(f.matches, S);
        Z(L), he({errors: {[K.route.id]: B}, fetchers: new Map(f.fetchers)})
    }

    function Z(L) {
        T.has(L) && se(L), b.delete(L), F.delete(L), $.delete(L), f.fetchers.delete(L)
    }

    function se(L) {
        let S = T.get(L);
        fe(S, "Expected fetch controller: " + L), S.abort(), T.delete(L)
    }

    function Ue(L) {
        for (let S of L) {
            let B = me(S), K = {
                state: "idle",
                data: B.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0
            };
            f.fetchers.set(S, K)
        }
    }

    function Ve() {
        let L = [];
        for (let S of $) {
            let B = f.fetchers.get(S);
            fe(B, "Expected fetcher: " + S), B.state === "loading" && ($.delete(S), L.push(S))
        }
        Ue(L)
    }

    function Qr(L) {
        let S = [];
        for (let [B, K] of F) if (K < L) {
            let ne = f.fetchers.get(B);
            fe(ne, "Expected fetcher: " + B), ne.state === "loading" && (se(B), F.delete(B), S.push(B))
        }
        return Ue(S), S.length > 0
    }

    function Cn(L) {
        let S = [];
        return P.forEach((B, K) => {
            (!L || L(K)) && (B.cancel(), S.push(K), P.delete(K))
        }), S
    }

    function Di(L, S, B) {
        if (i = L, s = S, o = B || (K => K.key), !a && f.navigation === Kc) {
            a = !0;
            let K = Ha(f.location, f.matches);
            K != null && he({restoreScrollPosition: K})
        }
        return () => {
            i = null, s = null, o = null
        }
    }

    function za(L, S) {
        if (i && o && s) {
            let B = S.map(ne => gv(ne, f.loaderData)), K = o(L, B) || L.key;
            i[K] = s()
        }
    }

    function Ha(L, S) {
        if (i && o && s) {
            let B = S.map(ke => gv(ke, f.loaderData)), K = o(L, B) || L.key, ne = i[K];
            if (typeof ne == "number") return ne
        }
        return null
    }

    return d = {
        get basename() {
            return e.basename
        },
        get state() {
            return f
        },
        get routes() {
            return t
        },
        initialize: X,
        subscribe: Xe,
        enableScrollRestoration: Di,
        navigate: oe,
        fetch: v,
        revalidate: Ie,
        createHref: zu,
        getFetcher: me,
        deleteFetcher: Z,
        dispose: Se,
        _internalFetchControllers: T,
        _internalActiveDeferreds: P
    }, d
}

function cv(e, t, n) {
    n === void 0 && (n = !1);
    let r = typeof e == "string" ? e : Xl(e);
    if (!t || !("formMethod" in t) && !("formData" in t)) return {path: r};
    if (t.formMethod != null && t.formMethod !== "get") return {
        path: r,
        submission: {
            formMethod: t.formMethod,
            formAction: zu(er(r)),
            formEncType: t && t.formEncType || "application/x-www-form-urlencoded",
            formData: t.formData
        }
    };
    if (!t.formData) return {path: r};
    let i = er(r);
    try {
        let o = c0(t.formData);
        n && i.search && d0(i.search) && o.append("index", ""), i.search = "?" + o
    } catch {
        return {path: r, error: new Bo(400, "Bad Request", "Cannot submit binary form data using GET")}
    }
    return {path: Xl(i)}
}

function Zc(e, t) {
    let {formMethod: n, formAction: r, formEncType: i, formData: o} = e.navigation;
    return {
        state: "loading",
        location: ii(e.location, t.location),
        formMethod: n || void 0,
        formAction: r || void 0,
        formEncType: i || void 0,
        formData: o || void 0
    }
}

function TN(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(i => i.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function fv(e, t, n, r, i, o, s, a, l, u) {
    let c = l ? Object.values(l)[0] : a ? Object.values(a)[0] : null, d = l ? Object.keys(l)[0] : void 0,
        p = TN(t, d).filter((g, _) => g.route.loader != null && (_N(e.loaderData, e.matches[_], g) || o.some(m => m === g.route.id) || dv(e.location, e.matches[_], n, r, g, i, c))),
        h = [];
    return u && u.forEach((g, _) => {
        let [m, y] = g;
        s.includes(_) ? h.push([_, m, y]) : i && dv(m, y, n, m, y, i, c) && h.push([_, m, y])
    }), [p, h]
}

function _N(e, t, n) {
    let r = !t || n.route.id !== t.route.id, i = e[n.route.id] === void 0;
    return r || i
}

function u0(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function dv(e, t, n, r, i, o, s) {
    let a = id(e), l = t.params, u = id(r), c = i.params,
        d = u0(t, i) || a.toString() === u.toString() || a.search !== u.search || o;
    if (i.route.shouldRevalidate) {
        let f = i.route.shouldRevalidate(ze({
            currentUrl: a,
            currentParams: l,
            nextUrl: u,
            nextParams: c
        }, n, {actionResult: s, defaultShouldRevalidate: d}));
        if (typeof f == "boolean") return f
    }
    return d
}

async function ts(e, t, n, r, i) {
    r === void 0 && (r = !1), i === void 0 && (i = !1);
    let o, s, a, l = new Promise((c, d) => a = d), u = () => a();
    t.signal.addEventListener("abort", u);
    try {
        let c = n.route[e];
        fe(c, "Could not find the " + e + ' to run on the "' + n.route.id + '" route'), s = await Promise.race([c({
            request: t,
            params: n.params
        }), l])
    } catch (c) {
        o = yt.error, s = c
    } finally {
        t.signal.removeEventListener("abort", u)
    }
    if (s instanceof Response) {
        let c = s.status, d = s.headers.get("Location");
        if (i) throw s;
        if (c >= 300 && c <= 399 && d != null) {
            if (r) throw s;
            return {type: yt.redirect, status: c, location: d, revalidate: s.headers.get("X-Remix-Revalidate") !== null}
        }
        let f, p = s.headers.get("Content-Type");
        return p && p.startsWith("application/json") ? f = await s.json() : f = await s.text(), o === yt.error ? {
            type: o,
            error: new Bo(c, s.statusText, f),
            headers: s.headers
        } : {type: yt.data, data: f, statusCode: s.status, headers: s.headers}
    }
    return o === yt.error ? {type: o, error: s} : s instanceof vN ? {
        type: yt.deferred,
        deferredData: s
    } : {type: yt.data, data: s}
}

function ns(e, t, n) {
    let r = id(e).toString(), i = {signal: t};
    if (n) {
        let {formMethod: o, formEncType: s, formData: a} = n;
        i.method = o.toUpperCase(), i.body = s === "application/x-www-form-urlencoded" ? c0(a) : a
    }
    return new Request(r, i)
}

function c0(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) fe(typeof r == "string", 'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'), t.append(n, r);
    return t
}

function SN(e, t, n, r, i) {
    let o = {}, s = null, a, l = !1, u = {};
    return n.forEach((c, d) => {
        let f = t[d].route.id;
        if (fe(!oo(c), "Cannot handle redirect results in processLoaderData"), Ns(c)) {
            let p = Bi(e, f), h = c.error;
            r && (h = Object.values(r)[0], r = void 0), s = Object.assign(s || {}, {[p.route.id]: h}), l || (l = !0, a = l0(c.error) ? c.error.status : 500), c.headers && (u[f] = c.headers)
        } else Zr(c) ? (i && i.set(f, c.deferredData), o[f] = c.deferredData.data) : (o[f] = c.data, c.statusCode !== 200 && !l && (a = c.statusCode), c.headers && (u[f] = c.headers))
    }), r && (s = r), {loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: u}
}

function pv(e, t, n, r, i, o, s, a) {
    let {loaderData: l, errors: u} = SN(t, n, r, i, a);
    for (let c = 0; c < o.length; c++) {
        let [d, , f] = o[c];
        fe(s !== void 0 && s[c] !== void 0, "Did not find corresponding fetcher result");
        let p = s[c];
        if (Ns(p)) {
            let h = Bi(e.matches, f.route.id);
            u && u[h.route.id] || (u = ze({}, u, {[h.route.id]: p.error})), e.fetchers.delete(d)
        } else {
            if (oo(p)) throw new Error("Unhandled fetcher revalidation redirect");
            if (Zr(p)) throw new Error("Unhandled fetcher deferred data");
            {
                let h = {
                    state: "idle",
                    data: p.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0
                };
                e.fetchers.set(d, h)
            }
        }
    }
    return {loaderData: l, errors: u}
}

function ef(e, t, n) {
    let r = ze({}, t);
    return n.forEach(i => {
        let o = i.route.id;
        t[o] === void 0 && e[o] !== void 0 && (r[o] = e[o])
    }), r
}

function Bi(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function hv(e) {
    let t = e.find(n => n.index || n.path === "" || n.path === "/") || {id: "__shim-404-route__"};
    return {
        matches: [{params: {}, pathname: "", pathnameBase: "", route: t}],
        route: t,
        error: new Bo(404, "Not Found", null)
    }
}

function mv(e) {
    let t = typeof e == "string" ? e : zu(e);
    return console.warn("You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " + ("[" + t + "]")), {
        type: yt.error,
        error: new Bo(405, "Method Not Allowed", "No action found for [" + t + "]")
    }
}

function vv(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (oo(n)) return n
    }
}

function zu(e) {
    return (e.pathname || "") + (e.search || "")
}

function NN(e, t) {
    return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
}

function Zr(e) {
    return e.type === yt.deferred
}

function Ns(e) {
    return e.type === yt.error
}

function oo(e) {
    return (e && e.type) === yt.redirect
}

async function yv(e, t, n, r, i, o) {
    for (let s = 0; s < n.length; s++) {
        let a = n[s], l = t[s], u = e.find(d => d.route.id === l.route.id),
            c = u != null && !u0(u, l) && (o && o[l.route.id]) !== void 0;
        Zr(a) && (i || c) && await f0(a, r, i).then(d => {
            d && (n[s] = d || n[s])
        })
    }
}

async function f0(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {type: yt.data, data: e.deferredData.unwrappedData}
        } catch (i) {
            return {type: yt.error, error: i}
        }
        return {type: yt.data, data: e.deferredData.data}
    }
}

function d0(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function gv(e, t) {
    let {route: n, pathname: r, params: i} = e;
    return {id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle}
}

function Ev(e, t) {
    let n = typeof t == "string" ? er(t).search : t.search;
    return e[e.length - 1].route.index && !d0(n || "") ? e.slice(-2)[0] : e.slice(-1)[0]
}

function id(e) {
    let t = typeof window != "undefined" && typeof window.location != "undefined" ? window.location.origin : "unknown://unknown",
        n = typeof e == "string" ? e : zu(e);
    return new URL(n, t)
}

/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jl() {
    return Jl = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Jl.apply(this, arguments)
}

function IN(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

const bN = typeof Object.is == "function" ? Object.is : IN, {
    useState: ON,
    useEffect: AN,
    useLayoutEffect: CN,
    useDebugValue: DN
} = rd;

function RN(e, t, n) {
    const r = t(), [{inst: i}, o] = ON({inst: {value: r, getSnapshot: t}});
    return CN(() => {
        i.value = r, i.getSnapshot = t, tf(i) && o({inst: i})
    }, [e, r, t]), AN(() => (tf(i) && o({inst: i}), e(() => {
        tf(i) && o({inst: i})
    })), [e]), DN(r), r
}

function tf(e) {
    const t = e.getSnapshot, n = e.value;
    try {
        const r = t();
        return !bN(n, r)
    } catch {
        return !0
    }
}

function kN(e, t, n) {
    return t()
}

const xN = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined",
    LN = !xN, PN = LN ? kN : RN, FN = "useSyncExternalStore" in rd ? (e => e.useSyncExternalStore)(rd) : PN,
    MN = U.exports.createContext(null), Cp = U.exports.createContext(null), Dp = U.exports.createContext(null),
    p0 = U.exports.createContext(null), Hu = U.exports.createContext(null),
    cr = U.exports.createContext({outlet: null, matches: []}), h0 = U.exports.createContext(null);

function Gu() {
    return U.exports.useContext(Hu) != null
}

function qu() {
    return Gu() || fe(!1), U.exports.useContext(Hu).location
}

function m0(e) {
    return e.filter((t, n) => n === 0 || !t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
}

function Rp() {
    Gu() || fe(!1);
    let {
            basename: e,
            navigator: t
        } = U.exports.useContext(p0), {matches: n} = U.exports.useContext(cr), {pathname: r} = qu(),
        i = JSON.stringify(m0(n).map(a => a.pathnameBase)), o = U.exports.useRef(!1);
    return U.exports.useEffect(() => {
        o.current = !0
    }), U.exports.useCallback(function (a, l) {
        if (l === void 0 && (l = {}), !o.current) return;
        if (typeof a == "number") {
            t.go(a);
            return
        }
        let u = a0(a, JSON.parse(i), r, l.relative === "path");
        e !== "/" && (u.pathname = u.pathname === "/" ? e : oi([e, u.pathname])), (l.replace ? t.replace : t.push)(u, l.state, l)
    }, [e, t, i, r])
}

const $N = U.exports.createContext(null);

function jN(e) {
    let t = U.exports.useContext(cr).outlet;
    return t && U.exports.createElement($N.Provider, {value: e}, t)
}

function UN() {
    let {matches: e} = U.exports.useContext(cr), t = e[e.length - 1];
    return t ? t.params : {}
}

function VN(e, t) {
    let {relative: n} = t === void 0 ? {} : t, {matches: r} = U.exports.useContext(cr), {pathname: i} = qu(),
        o = JSON.stringify(m0(r).map(s => s.pathnameBase));
    return U.exports.useMemo(() => a0(e, JSON.parse(o), i, n === "path"), [e, o, i, n])
}

function BN(e, t) {
    Gu() || fe(!1);
    let n = U.exports.useContext(Dp), {matches: r} = U.exports.useContext(cr), i = r[r.length - 1],
        o = i ? i.params : {};
    i && i.pathname;
    let s = i ? i.pathnameBase : "/";
    i && i.route;
    let a = qu(), l;
    if (t) {
        var u;
        let h = typeof t == "string" ? er(t) : t;
        s === "/" || ((u = h.pathname) == null ? void 0 : u.startsWith(s)) || fe(!1), l = h
    } else l = a;
    let c = l.pathname || "/", d = s === "/" ? c : c.slice(s.length) || "/", f = vs(e, {pathname: d}),
        p = qN(f && f.map(h => Object.assign({}, h, {
            params: Object.assign({}, o, h.params),
            pathname: oi([s, h.pathname]),
            pathnameBase: h.pathnameBase === "/" ? s : oi([s, h.pathnameBase])
        })), r, n || void 0);
    return t ? U.exports.createElement(Hu.Provider, {
        value: {
            location: Jl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, l), navigationType: Je.Pop
        }
    }, p) : p
}

function zN() {
    let e = WN(), t = l0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)",
        i = {padding: "0.5rem", backgroundColor: r}, o = {padding: "2px 4px", backgroundColor: r};
    return U.exports.createElement(U.exports.Fragment, null, U.exports.createElement("h2", null, "Unhandled Thrown Error!"), U.exports.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? U.exports.createElement("pre", {style: i}, n) : null, U.exports.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), U.exports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", U.exports.createElement("code", {style: o}, "errorElement"), " props on\xA0", U.exports.createElement("code", {style: o}, "<Route>")))
}

class HN extends U.exports.Component {
    constructor(t) {
        super(t), this.state = {location: t.location, error: t.error}
    }

    static getDerivedStateFromError(t) {
        return {error: t}
    }

    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ? {error: t.error, location: t.location} : {
            error: t.error || n.error,
            location: n.location
        }
    }

    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }

    render() {
        return this.state.error ? U.exports.createElement(h0.Provider, {
            value: this.state.error,
            children: this.props.component
        }) : this.props.children
    }
}

function GN(e) {
    let {routeContext: t, match: n, children: r} = e, i = U.exports.useContext(MN);
    return i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id), U.exports.createElement(cr.Provider, {value: t}, r)
}

function qN(e, t, n) {
    if (t === void 0 && (t = []), e == null) if (n != null && n.errors) e = n.matches; else return null;
    let r = e, i = n == null ? void 0 : n.errors;
    if (i != null) {
        let o = r.findIndex(s => s.route.id && (i == null ? void 0 : i[s.route.id]));
        o >= 0 || fe(!1), r = r.slice(0, Math.min(r.length, o + 1))
    }
    return r.reduceRight((o, s, a) => {
        let l = s.route.id ? i == null ? void 0 : i[s.route.id] : null,
            u = n ? s.route.errorElement || U.exports.createElement(zN, null) : null,
            c = () => U.exports.createElement(GN, {
                match: s,
                routeContext: {outlet: o, matches: t.concat(r.slice(0, a + 1))}
            }, l ? u : s.route.element !== void 0 ? s.route.element : o);
        return n && (s.route.errorElement || a === 0) ? U.exports.createElement(HN, {
            location: n.location,
            component: u,
            error: l,
            children: c()
        }) : c()
    }, null)
}

var Fs;
(function (e) {
    e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator"
})(Fs || (Fs = {}));

function kp(e) {
    let t = U.exports.useContext(Dp);
    return t || fe(!1), t
}

function xp() {
    return kp(Fs.UseNavigation).navigation
}

function QN() {
    let e = kp(Fs.UseLoaderData), t = U.exports.useContext(cr);
    t || fe(!1);
    let n = t.matches[t.matches.length - 1];
    return n.route.id || fe(!1), e.loaderData[n.route.id]
}

function WN() {
    var e;
    let t = U.exports.useContext(h0), n = kp(Fs.UseRouteError), r = U.exports.useContext(cr),
        i = r.matches[r.matches.length - 1];
    return t || (r || fe(!1), i.route.id || fe(!1), (e = n.errors) == null ? void 0 : e[i.route.id])
}

function YN(e) {
    let {fallbackElement: t, router: n} = e, r = FN(n.subscribe, () => n.state, () => n.state),
        i = U.exports.useMemo(() => ({
            createHref: n.createHref,
            go: s => n.navigate(s),
            push: (s, a, l) => n.navigate(s, {state: a, preventScrollReset: l == null ? void 0 : l.preventScrollReset}),
            replace: (s, a, l) => n.navigate(s, {
                replace: !0,
                state: a,
                preventScrollReset: l == null ? void 0 : l.preventScrollReset
            })
        }), [n]), o = n.basename || "/";
    return U.exports.createElement(Cp.Provider, {
        value: {
            router: n,
            navigator: i,
            static: !1,
            basename: o
        }
    }, U.exports.createElement(Dp.Provider, {value: r}, U.exports.createElement(KN, {
        basename: n.basename,
        location: n.state.location,
        navigationType: n.state.historyAction,
        navigator: i
    }, n.state.initialized ? U.exports.createElement(ZN, null) : t)))
}

function XN(e) {
    return jN(e.context)
}

function JN(e) {
    fe(!1)
}

function KN(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Je.Pop,
        navigator: o,
        static: s = !1
    } = e;
    Gu() && fe(!1);
    let a = t.replace(/^\/*/, "/"), l = U.exports.useMemo(() => ({basename: a, navigator: o, static: s}), [a, o, s]);
    typeof r == "string" && (r = er(r));
    let {pathname: u = "/", search: c = "", hash: d = "", state: f = null, key: p = "default"} = r,
        h = U.exports.useMemo(() => {
            let g = o0(u, a);
            return g == null ? null : {pathname: g, search: c, hash: d, state: f, key: p}
        }, [a, u, c, d, f, p]);
    return h == null ? null : U.exports.createElement(p0.Provider, {value: l}, U.exports.createElement(Hu.Provider, {
        children: n,
        value: {location: h, navigationType: i}
    }))
}

function ZN(e) {
    let {children: t, location: n} = e, r = U.exports.useContext(Cp), i = r && !t ? r.router.routes : od(t);
    return BN(i, n)
}

var wv;
(function (e) {
    e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
})(wv || (wv = {}));
new Promise(() => {
});

function od(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return U.exports.Children.forEach(e, (r, i) => {
        if (!U.exports.isValidElement(r)) return;
        if (r.type === U.exports.Fragment) {
            n.push.apply(n, od(r.props.children, t));
            return
        }
        r.type !== JN && fe(!1);
        let o = [...t, i], s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            hasErrorBoundary: r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle
        };
        r.props.children && (s.children = od(r.props.children, o)), n.push(s)
    }), n
}

function v0(e) {
    return e.map(t => {
        let n = Jl({}, t);
        return n.hasErrorBoundary == null && (n.hasErrorBoundary = n.errorElement != null), n.children && (n.children = v0(n.children)), n
    })
}

/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kl() {
    return Kl = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Kl.apply(this, arguments)
}

function eI(e, t) {
    if (e == null) return {};
    var n = {}, r = Object.keys(e), i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

const Ol = "get", nf = "application/x-www-form-urlencoded";

function Qu(e) {
    return e != null && typeof e.tagName == "string"
}

function tI(e) {
    return Qu(e) && e.tagName.toLowerCase() === "button"
}

function nI(e) {
    return Qu(e) && e.tagName.toLowerCase() === "form"
}

function rI(e) {
    return Qu(e) && e.tagName.toLowerCase() === "input"
}

function iI(e, t, n) {
    let r, i, o, s;
    if (nI(e)) {
        let c = n.submissionTrigger;
        r = n.method || e.getAttribute("method") || Ol, i = n.action || e.getAttribute("action") || t, o = n.encType || e.getAttribute("enctype") || nf, s = new FormData(e), c && c.name && s.append(c.name, c.value)
    } else if (tI(e) || rI(e) && (e.type === "submit" || e.type === "image")) {
        let c = e.form;
        if (c == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        r = n.method || e.getAttribute("formmethod") || c.getAttribute("method") || Ol, i = n.action || e.getAttribute("formaction") || c.getAttribute("action") || t, o = n.encType || e.getAttribute("formenctype") || c.getAttribute("enctype") || nf, s = new FormData(c), e.name && s.append(e.name, e.value)
    } else {
        if (Qu(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        if (r = n.method || Ol, i = n.action || t, o = n.encType || nf, e instanceof FormData) s = e; else if (s = new FormData, e instanceof URLSearchParams) for (let [c, d] of e) s.append(c, d); else if (e != null) for (let c of Object.keys(e)) s.append(c, e[c])
    }
    let {protocol: a, host: l} = window.location;
    return {url: new URL(i, a + "//" + l), method: r, encType: o, formData: s}
}

const oI = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"];

function sI(e, t) {
    var n;
    return wN({
        basename: t == null ? void 0 : t.basename,
        history: Y1({window: t == null ? void 0 : t.window}),
        hydrationData: (t == null ? void 0 : t.hydrationData) || ((n = window) == null ? void 0 : n.__staticRouterHydrationData),
        routes: v0(e)
    }).initialize()
}

const Wu = U.exports.forwardRef((e, t) => U.exports.createElement(aI, Kl({}, e, {ref: t}))),
    aI = U.exports.forwardRef((e, t) => {
        let {
                reloadDocument: n,
                replace: r,
                method: i = Ol,
                action: o,
                onSubmit: s,
                fetcherKey: a,
                routeId: l,
                relative: u
            } = e, c = eI(e, oI), d = lI(a, l), f = i.toLowerCase() === "get" ? "get" : "post", p = y0(o, {relative: u}),
            h = g => {
                if (s && s(g), g.defaultPrevented) return;
                g.preventDefault();
                let _ = g.nativeEvent.submitter;
                d(_ || g.currentTarget, {method: i, replace: r, relative: u})
            };
        return U.exports.createElement("form", Kl({ref: t, method: f, action: p, onSubmit: n ? s : h}, c))
    });

function lI(e, t) {
    let n = U.exports.useContext(Cp);
    n || fe(!1);
    let {router: r} = n, i = y0();
    return U.exports.useCallback(function (o, s) {
        if (s === void 0 && (s = {}), typeof document == "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
        let {method: a, encType: l, formData: u, url: c} = iI(o, i, s), d = c.pathname + c.search,
            f = {replace: s.replace, formData: u, formMethod: a, formEncType: l};
        e ? (t == null && fe(!1), r.fetch(e, t, d, f)) : r.navigate(d, f)
    }, [i, r, e, t])
}

function y0(e, t) {
    let {relative: n} = t === void 0 ? {} : t, r = U.exports.useContext(cr);
    r || fe(!1);
    let [i] = r.matches.slice(-1), o = e != null ? e : ".", s = VN(o, {relative: n}), a = qu();
    if (e == null && (s.search = a.search, s.hash = a.hash, i.route.index)) {
        let l = new URLSearchParams(s.search);
        l.delete("index"), s.search = l.toString() ? "?" + l.toString() : ""
    }
    return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), Xl(s)
}

var Yu = {exports: {}}, Xu = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI = U.exports, cI = Symbol.for("react.element"), fI = Symbol.for("react.fragment"),
    dI = Object.prototype.hasOwnProperty, pI = uI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    hI = {key: !0, ref: !0, __self: !0, __source: !0};

function g0(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) dI.call(t, r) && !hI.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {$$typeof: cI, type: e, key: o, ref: s, props: i, _owner: pI.current}
}

Xu.Fragment = fI;
Xu.jsx = g0;
Xu.jsxs = g0;
Yu.exports = Xu;
const O = Yu.exports.jsx, ee = Yu.exports.jsxs, Bn = Yu.exports.Fragment, E0 = ur.createContext(null),
    w0 = ur.createContext(null);

function mI({children: e}) {
    const t = window.matchMedia("(prefers-color-scheme: dark)").matches, [n, r] = U.exports.useState(t ? "dark" : "light"),
        i = () => {
            r(n === "dark" ? "light" : "dark")
        };
    return O(w0.Provider, {value: i, children: O(E0.Provider, {value: n, children: e})})
}

function Lp() {
    const e = U.exports.useContext(E0);
    if (e === void 0) throw new Error("theme Error");
    return e
}

function vI() {
    const e = U.exports.useContext(w0);
    if (e === void 0) throw new Error("ThemeSwitch Error");
    return e
}

const T0 = ur.createContext(), _0 = ur.createContext();

function yI({children: e}) {
    const [t, n] = U.exports.useState(null), r = U.exports.useMemo(() => ({
        open(i) {
            n(i)
        }, close() {
            n(null)
        }
    }), []);
    return O(_0.Provider, {value: r, children: O(T0.Provider, {value: t, children: e})})
}

function Pp() {
    const e = U.exports.useContext(T0), t = U.exports.useContext(_0);
    if (e === void 0) throw new Error("modal state is undefined");
    if (t === void 0) throw new Error("modal actions is undefined");
    return [e, t]
}

const gI = "_Gnb_1gouk_1", EI = "_pad_1gouk_5", wI = "_headerRight_1gouk_18", TI = "_bgFill_1gouk_23";
var Wa = {Gnb: gI, pad: EI, headerRight: wI, bgFill: TI};

function _I() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "icon",
            children: O("path", {strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5"})
        })
    })
}

function SI() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "icon",
            children: O("path", {
                fillRule: "evenodd",
                d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z",
                clipRule: "evenodd"
            })
        })
    })
}

function NI({showModal: e, goBack: t, isProfilePage: n}) {
    return O("nav", {
        className: Wa.Gnb,
        children: ee("div", {
            className: `${Wa.pad} ${n ? Wa.bgFill : ""}`,
            children: [n ? null : O("div", {onClick: t, children: O(_I, {})}), O("div", {
                className: Wa.headerRight,
                onClick: e,
                children: O(SI, {})
            })]
        })
    })
}

function II() {
    const e = Rp(), [, t] = Pp(), n = U.exports.useCallback(() => {
        t.open("Snb")
    }, []), r = U.exports.useCallback(() => {
        e(-1)
    }, []), i = location.pathname.split("/")[1] === "profile";
    return O(NI, {...{showModal: n, goBack: r, isProfilePage: i}})
}

const bI = "_app_1fcve_1", OI = "_loading_1fcve_7", AI = "_header_1fcve_13";
var Tv = {app: bI, loading: OI, header: AI};

function CI() {
    return Lp(), xp(), ee("div", {
        className: Tv.app,
        children: [O("header", {
            className: Tv.header,
            children: O(II, {})
        }), O("div", {children: O(XN, {})}), O("footer", {})]
    })
}

const DI = "_auth_9xeqg_1", RI = "_login_9xeqg_16 _auth_9xeqg_1", kI = "_signup_9xeqg_23 _login_9xeqg_16 _auth_9xeqg_1",
    xI = "_loginBack_9xeqg_28 _auth_9xeqg_1", LI = "_follower_9xeqg_35", PI = "_follow_9xeqg_35 _follower_9xeqg_35",
    FI = "_questionSubmit_9xeqg_52", MI = "_sideMenu_9xeqg_60";
var $I = {auth: DI, login: RI, signup: kI, loginBack: xI, follower: LI, follow: PI, questionSubmit: FI, sideMenu: MI};

function jI({type: e, role: t, value: n, onClick: r, disabled: i, children: o}) {
    return O("button", {type: e, onClick: r, value: n, className: `${$I[t]}`, disabled: i, children: o})
}

function rn({type: e, role: t, value: n, children: r, disabled: i, onClick: o}) {
    return O(jI, {...{type: e, role: t, value: n, onClick: o, disabled: i, children: r}})
}

const UI = "_Input_19waj_1", VI = "_question_19waj_12";
var _v = {Input: UI, question: VI};

function BI({
                name: e,
                value: t,
                onChange: n,
                placeholder: r,
                role: i,
                type: o,
                maxLength: s,
                required: a,
                disabled: l
            }) {
    return O("input", {
        type: o || "text",
        name: e,
        value: t,
        onChange: n,
        className: `${_v.Input} ${_v[i]}`,
        placeholder: r,
        required: a,
        maxLength: s,
        disabled: l
    })
}

function ei({
                name: e,
                value: t,
                onChange: n,
                role: r,
                type: i,
                maxLength: o,
                disabled: s,
                required: a,
                placeholder: l
            }) {
    return O(BI, {
        ...{
            name: e,
            value: t,
            onChange: n,
            role: r,
            type: i,
            maxLength: o,
            disabled: s,
            required: a,
            placeholder: l
        }
    })
}

const zI = "_loginPage_14jxr_1", HI = "_inputs_14jxr_11", GI = "_btns_14jxr_18", qI = "_circles_14jxr_26",
    QI = "_circleWhite_14jxr_34", WI = "_circleBlack_14jxr_43 _circleWhite_14jxr_34", YI = "_spinner_14jxr_50",
    XI = "_spin_14jxr_50";
var ut = {loginPage: zI, inputs: HI, btns: GI, circles: qI, circleWhite: QI, circleBlack: WI, spinner: YI, spin: XI};

function Fp(e) {
    const [t, n] = U.exports.useState(e);
    return [t, o => {
        const {name: s, value: a} = o.target;
        n({...t, [s]: a})
    }, () => {
        n(e)
    }]
}

function JI() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.1,
            stroke: "currentColor",
            className: "icon-s",
            children: O("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            })
        })
    })
}

const KI = "_warning_866id_2";
var ZI = {warning: KI};

function eb({children: e}) {
    return ee("div", {className: ZI.warning, children: [O(JI, {}), O("p", {children: e})]})
}

function tb() {
    const e = xp(), [t, n] = Fp({username: "", password: ""});
    let r = U.exports.useMemo(() => e.state === "loading", [e.state]);
    return O("main", {
        children: ee("section", {
            className: ut.loginPage,
            children: [ee("div", {
                className: ut.circles,
                children: [O("div", {className: ut.circleBlack}), O("div", {className: ut.circleWhite})]
            }), ee(Wu, {
                method: "post",
                id: "login-form",
                children: [ee("div", {
                    className: `${ut.inputs} ${r ? ut.loadingInput : ""}`,
                    children: [O(ei, {
                        name: "username",
                        value: t.username,
                        required: !0,
                        onChange: n,
                        placeholder: "\uC544\uC774\uB514"
                    }), O(ei, {
                        type: "password",
                        name: "password",
                        value: t.password,
                        onChange: n,
                        required: !0,
                        placeholder: "\uBE44\uBC00\uBC88\uD638"
                    }), O(eb, {children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."})]
                }), O(nb, {isLoading: r})]
            })]
        })
    })
}

const nb = ur.memo(({isLoading: e}) => {
    const t = Rp();
    return ee("div", {
        className: ut.btns,
        children: [O(rn, {
            type: "button",
            role: "loginBack",
            onClick: () => t(-1),
            children: "\uC774\uC804\uC73C\uB85C"
        }), O(rn, {
            type: "submit",
            role: "login",
            disabled: e,
            children: e ? O("div", {className: ut.spinner}) : "\uB85C\uADF8\uC778"
        })]
    })
});

function rb() {
    const e = xp(), [t, n] = Fp({username: "", email: "", password: "", password2: ""}),
        r = U.exports.useMemo(() => e.state === "loading", [e.state]);
    return O("main", {
        children: ee("section", {
            className: ut.loginPage,
            children: [ee("div", {
                className: ut.circles,
                children: [O("div", {className: ut.circleBlack}), O("div", {className: ut.circleWhite})]
            }), ee(Wu, {
                method: "post",
                id: "signup-form",
                children: [ee("div", {
                    className: `${ut.inputs} ${e.state === "loading" ? ut[loadingInput] : ""}`,
                    children: [O(ei, {
                        type: "text",
                        name: "username",
                        value: t.username,
                        onChange: n,
                        placeholder: "\uC544\uC774\uB514",
                        required: !0
                    }), O(ei, {
                        type: "email",
                        name: "email",
                        value: t.email,
                        onChange: n,
                        placeholder: "\uC774\uBA54\uC77C",
                        required: !0
                    }), O(ei, {
                        type: "password",
                        name: "password",
                        value: t.password,
                        onChange: n,
                        placeholder: "\uBE44\uBC00\uBC88\uD638",
                        required: !0
                    }), O(ei, {
                        type: "password",
                        name: "password2",
                        value: t.password2,
                        onChange: n,
                        placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
                        required: !0
                    })]
                }), O(ib, {isLoading: r})]
            })]
        })
    })
}

const ib = ur.memo(({isLoading: e}) => {
        const t = Rp();
        return ee("div", {
            className: ut.btns, children: [O(rn, {
                type: "button", role: "loginBack", onClick: () => {
                    t(-1)
                }, children: "\uC774\uC804\uC73C\uB85C"
            }), O(rn, {
                type: "submit",
                role: "signup",
                className: ut.loginBtn,
                disabled: e,
                children: e ? O("div", {className: ut.spinner, "aria-hidden": !0}) : "\uD68C\uC6D0\uAC00\uC785"
            })]
        })
    }), ob = "_ProfileTop_1ka0h_1", sb = "_menu_1ka0h_12", ab = "_section_1ka0h_20", lb = "_avatar_1ka0h_26",
    ub = "_img_1ka0h_36", cb = "_info_1ka0h_43", fb = "_name_1ka0h_51", db = "_introduce_1ka0h_56",
    pb = "_btns_1ka0h_62", hb = "_rate_1ka0h_71", mb = "_rateBar_1ka0h_77", vb = "_percent_1ka0h_89";
var Kt = {
    ProfileTop: ob,
    menu: sb,
    section: ab,
    avatar: lb,
    img: ub,
    info: cb,
    name: fb,
    introduce: db,
    btns: pb,
    rate: hb,
    rateBar: mb,
    percent: vb
};

function S0({strokeWidth: e, size: t}) {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: e | .3,
            stroke: "currentColor",
            className: t || "w-5 h-5",
            children: O("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            })
        })
    })
}

function yb({profile: e}) {
    const {
        user_id: t,
        username: n,
        profile_image: r,
        profile_message: i,
        follower: o,
        following: s,
        response_rate: a
    } = e;
    return O("div", {
        className: Kt.ProfileTop,
        children: ee("section", {
            className: Kt.section,
            children: [O("div", {
                className: Kt.avatar,
                children: r ? O("img", {className: Kt.img, src: r, alt: "avatar"}) : O(S0, {})
            }), ee("div", {
                className: Kt.info,
                children: [O("p", {className: Kt.name, children: n}), O("p", {
                    className: Kt.introduce,
                    children: i
                }), ee("div", {
                    className: Kt.btns,
                    children: [ee(rn, {
                        role: "follower",
                        children: ["\uD314\uB85C\uC6CC ", o.length]
                    }), ee(rn, {role: "follow", children: ["\uD314\uB85C\uC6B0 ", s.length]})]
                }), ee("div", {
                    className: Kt.rate,
                    children: [ee("div", {
                        className: Kt.rateBar,
                        children: [O("p", {children: "\uB2F5\uBCC0\uC728"}), O("progress", {
                            className: Kt.progress,
                            id: "answer-rate",
                            value: a,
                            max: "100"
                        })]
                    }), ee("div", {className: Kt.percent, children: [a, "%"]})]
                })]
            })]
        })
    })
}

var gb = ur.memo(yb);
const Eb = "_QuestionForm_46kaq_1", wb = "_formField_46kaq_7";
var Sv = {QuestionForm: Eb, formField: wb};

function N0() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.1,
            stroke: "currentColor",
            className: "icon",
            children: O("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            })
        })
    })
}

function Tb() {
    const [e, t, n] = Fp({content: ""});
    return O(Wu, {
        method: "post",
        onSubmit: n,
        children: O("div", {
            className: Sv.QuestionForm,
            children: ee("div", {
                className: Sv.formField,
                children: [O(ei, {
                    name: "content",
                    value: e.content,
                    onChange: t,
                    role: "question",
                    required: !0,
                    maxLength: "100",
                    placeholder: "\uC775\uBA85 \uC9C8\uBB38\uC744 \uBCF4\uB0B4\uBCF4\uC138\uC694! (\uCD5C\uB300 100\uC790)"
                }), O(rn, {type: "submit", role: "questionSubmit", children: O(N0, {})})]
            })
        })
    })
}

const _b = "_QuestionCount_97vd8_1", Sb = "_card_97vd8_9", Nb = "_count_97vd8_20", Ib = "_done_97vd8_38",
    bb = "_yet_97vd8_42", Ob = "_reject_97vd8_46";
var Dn = {QuestionCount: _b, card: Sb, count: Nb, done: Ib, yet: bb, reject: Ob};

function Ab({question_count: e, getAnsweredQuestions: t, getUnAnsweredQuestions: n, getRejectedQuestions: r}) {
    const {answered: i, rejected: o, unanswered: s} = e;
    return ee("section", {
        className: Dn.QuestionCount,
        children: [ee("div", {
            className: Dn.card,
            onClick: t,
            children: [O("div", {className: Dn.count, children: i}), O("p", {
                className: Dn.done,
                children: "\uB2F5\uBCC0 \uC644\uB8CC"
            })]
        }), ee("div", {
            className: Dn.card,
            onClick: n,
            children: [O("div", {className: Dn.count, children: s}), O("p", {
                className: Dn.yet,
                children: "\uC0C8\uC9C8\uBB38"
            })]
        }), ee("div", {
            className: Dn.card,
            onClick: r,
            children: [O("div", {className: Dn.count, children: o}), O("p", {
                className: Dn.reject,
                children: "\uAC70\uC808 \uC9C8\uBB38"
            })]
        })]
    })
}

var Mp = {exports: {}}, I0 = function (t, n) {
    return function () {
        for (var i = new Array(arguments.length), o = 0; o < i.length; o++) i[o] = arguments[o];
        return t.apply(n, i)
    }
}, Cb = I0, $p = Object.prototype.toString, jp = function (e) {
    return function (t) {
        var n = $p.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    }
}(Object.create(null));

function _i(e) {
    return e = e.toLowerCase(), function (n) {
        return jp(n) === e
    }
}

function Up(e) {
    return Array.isArray(e)
}

function Zl(e) {
    return typeof e == "undefined"
}

function Db(e) {
    return e !== null && !Zl(e) && e.constructor !== null && !Zl(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}

var b0 = _i("ArrayBuffer");

function Rb(e) {
    var t;
    return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && b0(e.buffer), t
}

function kb(e) {
    return typeof e == "string"
}

function xb(e) {
    return typeof e == "number"
}

function O0(e) {
    return e !== null && typeof e == "object"
}

function Al(e) {
    if (jp(e) !== "object") return !1;
    var t = Object.getPrototypeOf(e);
    return t === null || t === Object.prototype
}

var Lb = _i("Date"), Pb = _i("File"), Fb = _i("Blob"), Mb = _i("FileList");

function Vp(e) {
    return $p.call(e) === "[object Function]"
}

function $b(e) {
    return O0(e) && Vp(e.pipe)
}

function jb(e) {
    var t = "[object FormData]";
    return e && (typeof FormData == "function" && e instanceof FormData || $p.call(e) === t || Vp(e.toString) && e.toString() === t)
}

var Ub = _i("URLSearchParams");

function Vb(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}

function Bb() {
    return typeof navigator != "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined"
}

function Bp(e, t) {
    if (!(e === null || typeof e == "undefined")) if (typeof e != "object" && (e = [e]), Up(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
}

function sd() {
    var e = {};

    function t(i, o) {
        Al(e[o]) && Al(i) ? e[o] = sd(e[o], i) : Al(i) ? e[o] = sd({}, i) : Up(i) ? e[o] = i.slice() : e[o] = i
    }

    for (var n = 0, r = arguments.length; n < r; n++) Bp(arguments[n], t);
    return e
}

function zb(e, t, n) {
    return Bp(t, function (i, o) {
        n && typeof i == "function" ? e[o] = Cb(i, n) : e[o] = i
    }), e
}

function Hb(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
}

function Gb(e, t, n, r) {
    e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n)
}

function qb(e, t, n) {
    var r, i, o, s = {};
    t = t || {};
    do {
        for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0;) o = r[i], s[o] || (t[o] = e[o], s[o] = !0);
        e = Object.getPrototypeOf(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}

function Qb(e, t, n) {
    e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
    var r = e.indexOf(t, n);
    return r !== -1 && r === n
}

function Wb(e) {
    if (!e) return null;
    var t = e.length;
    if (Zl(t)) return null;
    for (var n = new Array(t); t-- > 0;) n[t] = e[t];
    return n
}

var Yb = function (e) {
    return function (t) {
        return e && t instanceof e
    }
}(typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array)), pt = {
    isArray: Up,
    isArrayBuffer: b0,
    isBuffer: Db,
    isFormData: jb,
    isArrayBufferView: Rb,
    isString: kb,
    isNumber: xb,
    isObject: O0,
    isPlainObject: Al,
    isUndefined: Zl,
    isDate: Lb,
    isFile: Pb,
    isBlob: Fb,
    isFunction: Vp,
    isStream: $b,
    isURLSearchParams: Ub,
    isStandardBrowserEnv: Bb,
    forEach: Bp,
    merge: sd,
    extend: zb,
    trim: Vb,
    stripBOM: Hb,
    inherits: Gb,
    toFlatObject: qb,
    kindOf: jp,
    kindOfTest: _i,
    endsWith: Qb,
    toArray: Wb,
    isTypedArray: Yb,
    isFileList: Mb
}, ki = pt;

function Nv(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

var A0 = function (t, n, r) {
    if (!n) return t;
    var i;
    if (r) i = r(n); else if (ki.isURLSearchParams(n)) i = n.toString(); else {
        var o = [];
        ki.forEach(n, function (l, u) {
            l === null || typeof l == "undefined" || (ki.isArray(l) ? u = u + "[]" : l = [l], ki.forEach(l, function (d) {
                ki.isDate(d) ? d = d.toISOString() : ki.isObject(d) && (d = JSON.stringify(d)), o.push(Nv(u) + "=" + Nv(d))
            }))
        }), i = o.join("&")
    }
    if (i) {
        var s = t.indexOf("#");
        s !== -1 && (t = t.slice(0, s)), t += (t.indexOf("?") === -1 ? "?" : "&") + i
    }
    return t
}, Xb = pt;

function Ju() {
    this.handlers = []
}

Ju.prototype.use = function (t, n, r) {
    return this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1
};
Ju.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null)
};
Ju.prototype.forEach = function (t) {
    Xb.forEach(this.handlers, function (r) {
        r !== null && t(r)
    })
};
var Jb = Ju, Kb = pt, Zb = function (t, n) {
    Kb.forEach(t, function (i, o) {
        o !== n && o.toUpperCase() === n.toUpperCase() && (t[n] = i, delete t[o])
    })
}, C0 = pt;

function go(e, t, n, r, i) {
    Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
}

C0.inherits(go, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
var D0 = go.prototype, R0 = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function (e) {
    R0[e] = {value: e}
});
Object.defineProperties(go, R0);
Object.defineProperty(D0, "isAxiosError", {value: !0});
go.from = function (e, t, n, r, i, o) {
    var s = Object.create(D0);
    return C0.toFlatObject(e, s, function (l) {
        return l !== Error.prototype
    }), go.call(s, e.message, t, n, r, i), s.name = e.name, o && Object.assign(s, o), s
};
var zo = go, k0 = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1}, mn = pt;

function eO(e, t) {
    t = t || new FormData;
    var n = [];

    function r(o) {
        return o === null ? "" : mn.isDate(o) ? o.toISOString() : mn.isArrayBuffer(o) || mn.isTypedArray(o) ? typeof Blob == "function" ? new Blob([o]) : Buffer.from(o) : o
    }

    function i(o, s) {
        if (mn.isPlainObject(o) || mn.isArray(o)) {
            if (n.indexOf(o) !== -1) throw Error("Circular reference detected in " + s);
            n.push(o), mn.forEach(o, function (l, u) {
                if (!mn.isUndefined(l)) {
                    var c = s ? s + "." + u : u, d;
                    if (l && !s && typeof l == "object") {
                        if (mn.endsWith(u, "{}")) l = JSON.stringify(l); else if (mn.endsWith(u, "[]") && (d = mn.toArray(l))) {
                            d.forEach(function (f) {
                                !mn.isUndefined(f) && t.append(c, r(f))
                            });
                            return
                        }
                    }
                    i(l, c)
                }
            }), n.pop()
        } else t.append(s, r(o))
    }

    return i(e), t
}

var x0 = eO, rf = zo, tO = function (t, n, r) {
        var i = r.config.validateStatus;
        !r.status || !i || i(r.status) ? t(r) : n(new rf("Request failed with status code " + r.status, [rf.ERR_BAD_REQUEST, rf.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
    }, Ya = pt, nO = Ya.isStandardBrowserEnv() ? function () {
        return {
            write: function (n, r, i, o, s, a) {
                var l = [];
                l.push(n + "=" + encodeURIComponent(r)), Ya.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), Ya.isString(o) && l.push("path=" + o), Ya.isString(s) && l.push("domain=" + s), a === !0 && l.push("secure"), document.cookie = l.join("; ")
            }, read: function (n) {
                var r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
                return r ? decodeURIComponent(r[3]) : null
            }, remove: function (n) {
                this.write(n, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }(), rO = function (t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
    }, iO = function (t, n) {
        return n ? t.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : t
    }, oO = rO, sO = iO, L0 = function (t, n) {
        return t && !oO(n) ? sO(t, n) : n
    }, of = pt,
    aO = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
    lO = function (t) {
        var n = {}, r, i, o;
        return t && of.forEach(t.split(`
`), function (a) {
            if (o = a.indexOf(":"), r = of.trim(a.substr(0, o)).toLowerCase(), i = of.trim(a.substr(o + 1)), r) {
                if (n[r] && aO.indexOf(r) >= 0) return;
                r === "set-cookie" ? n[r] = (n[r] ? n[r] : []).concat([i]) : n[r] = n[r] ? n[r] + ", " + i : i
            }
        }), n
    }, Iv = pt, uO = Iv.isStandardBrowserEnv() ? function () {
        var t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"), r;

        function i(o) {
            var s = o;
            return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
            }
        }

        return r = i(window.location.href), function (s) {
            var a = Iv.isString(s) ? i(s) : s;
            return a.protocol === r.protocol && a.host === r.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }(), ad = zo, cO = pt;

function P0(e) {
    ad.call(this, e == null ? "canceled" : e, ad.ERR_CANCELED), this.name = "CanceledError"
}

cO.inherits(P0, ad, {__CANCEL__: !0});
var Ku = P0, fO = function (t) {
        var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return n && n[1] || ""
    }, rs = pt, dO = tO, pO = nO, hO = A0, mO = L0, vO = lO, yO = uO, gO = k0, qn = zo, EO = Ku, wO = fO,
    bv = function (t) {
        return new Promise(function (r, i) {
            var o = t.data, s = t.headers, a = t.responseType, l;

            function u() {
                t.cancelToken && t.cancelToken.unsubscribe(l), t.signal && t.signal.removeEventListener("abort", l)
            }

            rs.isFormData(o) && rs.isStandardBrowserEnv() && delete s["Content-Type"];
            var c = new XMLHttpRequest;
            if (t.auth) {
                var d = t.auth.username || "", f = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                s.Authorization = "Basic " + btoa(d + ":" + f)
            }
            var p = mO(t.baseURL, t.url);
            c.open(t.method.toUpperCase(), hO(p, t.params, t.paramsSerializer), !0), c.timeout = t.timeout;

            function h() {
                if (!!c) {
                    var m = "getAllResponseHeaders" in c ? vO(c.getAllResponseHeaders()) : null,
                        y = !a || a === "text" || a === "json" ? c.responseText : c.response,
                        E = {data: y, status: c.status, statusText: c.statusText, headers: m, config: t, request: c};
                    dO(function (R) {
                        r(R), u()
                    }, function (R) {
                        i(R), u()
                    }, E), c = null
                }
            }

            if ("onloadend" in c ? c.onloadend = h : c.onreadystatechange = function () {
                !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(h)
            }, c.onabort = function () {
                !c || (i(new qn("Request aborted", qn.ECONNABORTED, t, c)), c = null)
            }, c.onerror = function () {
                i(new qn("Network Error", qn.ERR_NETWORK, t, c, c)), c = null
            }, c.ontimeout = function () {
                var y = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                    E = t.transitional || gO;
                t.timeoutErrorMessage && (y = t.timeoutErrorMessage), i(new qn(y, E.clarifyTimeoutError ? qn.ETIMEDOUT : qn.ECONNABORTED, t, c)), c = null
            }, rs.isStandardBrowserEnv()) {
                var g = (t.withCredentials || yO(p)) && t.xsrfCookieName ? pO.read(t.xsrfCookieName) : void 0;
                g && (s[t.xsrfHeaderName] = g)
            }
            "setRequestHeader" in c && rs.forEach(s, function (y, E) {
                typeof o == "undefined" && E.toLowerCase() === "content-type" ? delete s[E] : c.setRequestHeader(E, y)
            }), rs.isUndefined(t.withCredentials) || (c.withCredentials = !!t.withCredentials), a && a !== "json" && (c.responseType = t.responseType), typeof t.onDownloadProgress == "function" && c.addEventListener("progress", t.onDownloadProgress), typeof t.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (l = function (m) {
                !c || (i(!m || m && m.type ? new EO : m), c.abort(), c = null)
            }, t.cancelToken && t.cancelToken.subscribe(l), t.signal && (t.signal.aborted ? l() : t.signal.addEventListener("abort", l))), o || (o = null);
            var _ = wO(p);
            if (_ && ["http", "https", "file"].indexOf(_) === -1) {
                i(new qn("Unsupported protocol " + _ + ":", qn.ERR_BAD_REQUEST, t));
                return
            }
            c.send(o)
        })
    }, TO = null, rt = pt, Ov = Zb, Av = zo, _O = k0, SO = x0,
    NO = {"Content-Type": "application/x-www-form-urlencoded"};

function Cv(e, t) {
    !rt.isUndefined(e) && rt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
}

function IO() {
    var e;
    return (typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (e = bv), e
}

function bO(e, t, n) {
    if (rt.isString(e)) try {
        return (t || JSON.parse)(e), rt.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}

var Zu = {
    transitional: _O,
    adapter: IO(),
    transformRequest: [function (t, n) {
        if (Ov(n, "Accept"), Ov(n, "Content-Type"), rt.isFormData(t) || rt.isArrayBuffer(t) || rt.isBuffer(t) || rt.isStream(t) || rt.isFile(t) || rt.isBlob(t)) return t;
        if (rt.isArrayBufferView(t)) return t.buffer;
        if (rt.isURLSearchParams(t)) return Cv(n, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
        var r = rt.isObject(t), i = n && n["Content-Type"], o;
        if ((o = rt.isFileList(t)) || r && i === "multipart/form-data") {
            var s = this.env && this.env.FormData;
            return SO(o ? {"files[]": t} : t, s && new s)
        } else if (r || i === "application/json") return Cv(n, "application/json"), bO(t);
        return t
    }],
    transformResponse: [function (t) {
        var n = this.transitional || Zu.transitional, r = n && n.silentJSONParsing, i = n && n.forcedJSONParsing,
            o = !r && this.responseType === "json";
        if (o || i && rt.isString(t) && t.length) try {
            return JSON.parse(t)
        } catch (s) {
            if (o) throw s.name === "SyntaxError" ? Av.from(s, Av.ERR_BAD_RESPONSE, this, null, this.response) : s
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {FormData: TO},
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: {common: {Accept: "application/json, text/plain, */*"}}
};
rt.forEach(["delete", "get", "head"], function (t) {
    Zu.headers[t] = {}
});
rt.forEach(["post", "put", "patch"], function (t) {
    Zu.headers[t] = rt.merge(NO)
});
var zp = Zu, OO = pt, AO = zp, CO = function (t, n, r) {
    var i = this || AO;
    return OO.forEach(r, function (s) {
        t = s.call(i, t, n)
    }), t
}, F0 = function (t) {
    return !!(t && t.__CANCEL__)
}, Dv = pt, sf = CO, DO = F0, RO = zp, kO = Ku;

function af(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new kO
}

var xO = function (t) {
    af(t), t.headers = t.headers || {}, t.data = sf.call(t, t.data, t.headers, t.transformRequest), t.headers = Dv.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), Dv.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (i) {
        delete t.headers[i]
    });
    var n = t.adapter || RO.adapter;
    return n(t).then(function (i) {
        return af(t), i.data = sf.call(t, i.data, i.headers, t.transformResponse), i
    }, function (i) {
        return DO(i) || (af(t), i && i.response && (i.response.data = sf.call(t, i.response.data, i.response.headers, t.transformResponse))), Promise.reject(i)
    })
}, jt = pt, M0 = function (t, n) {
    n = n || {};
    var r = {};

    function i(c, d) {
        return jt.isPlainObject(c) && jt.isPlainObject(d) ? jt.merge(c, d) : jt.isPlainObject(d) ? jt.merge({}, d) : jt.isArray(d) ? d.slice() : d
    }

    function o(c) {
        if (jt.isUndefined(n[c])) {
            if (!jt.isUndefined(t[c])) return i(void 0, t[c])
        } else return i(t[c], n[c])
    }

    function s(c) {
        if (!jt.isUndefined(n[c])) return i(void 0, n[c])
    }

    function a(c) {
        if (jt.isUndefined(n[c])) {
            if (!jt.isUndefined(t[c])) return i(void 0, t[c])
        } else return i(void 0, n[c])
    }

    function l(c) {
        if (c in n) return i(t[c], n[c]);
        if (c in t) return i(void 0, t[c])
    }

    var u = {
        url: s,
        method: s,
        data: s,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: l
    };
    return jt.forEach(Object.keys(t).concat(Object.keys(n)), function (d) {
        var f = u[d] || o, p = f(d);
        jt.isUndefined(p) && f !== l || (r[d] = p)
    }), r
}, $0 = {version: "0.27.2"}, LO = $0.version, gr = zo, Hp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
    Hp[e] = function (r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
var Rv = {};
Hp.transitional = function (t, n, r) {
    function i(o, s) {
        return "[Axios v" + LO + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }

    return function (o, s, a) {
        if (t === !1) throw new gr(i(s, " has been removed" + (n ? " in " + n : "")), gr.ERR_DEPRECATED);
        return n && !Rv[s] && (Rv[s] = !0, console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, s, a) : !0
    }
};

function PO(e, t, n) {
    if (typeof e != "object") throw new gr("options must be an object", gr.ERR_BAD_OPTION_VALUE);
    for (var r = Object.keys(e), i = r.length; i-- > 0;) {
        var o = r[i], s = t[o];
        if (s) {
            var a = e[o], l = a === void 0 || s(a, o, e);
            if (l !== !0) throw new gr("option " + o + " must be " + l, gr.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new gr("Unknown option " + o, gr.ERR_BAD_OPTION)
    }
}

var FO = {assertOptions: PO, validators: Hp}, j0 = pt, MO = A0, kv = Jb, xv = xO, ec = M0, $O = L0, U0 = FO,
    xi = U0.validators;

function Eo(e) {
    this.defaults = e, this.interceptors = {request: new kv, response: new kv}
}

Eo.prototype.request = function (t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ec(this.defaults, n), n.method ? n.method = n.method.toLowerCase() : this.defaults.method ? n.method = this.defaults.method.toLowerCase() : n.method = "get";
    var r = n.transitional;
    r !== void 0 && U0.assertOptions(r, {
        silentJSONParsing: xi.transitional(xi.boolean),
        forcedJSONParsing: xi.transitional(xi.boolean),
        clarifyTimeoutError: xi.transitional(xi.boolean)
    }, !1);
    var i = [], o = !0;
    this.interceptors.request.forEach(function (p) {
        typeof p.runWhen == "function" && p.runWhen(n) === !1 || (o = o && p.synchronous, i.unshift(p.fulfilled, p.rejected))
    });
    var s = [];
    this.interceptors.response.forEach(function (p) {
        s.push(p.fulfilled, p.rejected)
    });
    var a;
    if (!o) {
        var l = [xv, void 0];
        for (Array.prototype.unshift.apply(l, i), l = l.concat(s), a = Promise.resolve(n); l.length;) a = a.then(l.shift(), l.shift());
        return a
    }
    for (var u = n; i.length;) {
        var c = i.shift(), d = i.shift();
        try {
            u = c(u)
        } catch (f) {
            d(f);
            break
        }
    }
    try {
        a = xv(u)
    } catch (f) {
        return Promise.reject(f)
    }
    for (; s.length;) a = a.then(s.shift(), s.shift());
    return a
};
Eo.prototype.getUri = function (t) {
    t = ec(this.defaults, t);
    var n = $O(t.baseURL, t.url);
    return MO(n, t.params, t.paramsSerializer)
};
j0.forEach(["delete", "get", "head", "options"], function (t) {
    Eo.prototype[t] = function (n, r) {
        return this.request(ec(r || {}, {method: t, url: n, data: (r || {}).data}))
    }
});
j0.forEach(["post", "put", "patch"], function (t) {
    function n(r) {
        return function (o, s, a) {
            return this.request(ec(a || {}, {
                method: t,
                headers: r ? {"Content-Type": "multipart/form-data"} : {},
                url: o,
                data: s
            }))
        }
    }

    Eo.prototype[t] = n(), Eo.prototype[t + "Form"] = n(!0)
});
var jO = Eo, UO = Ku;

function wo(e) {
    if (typeof e != "function") throw new TypeError("executor must be a function.");
    var t;
    this.promise = new Promise(function (i) {
        t = i
    });
    var n = this;
    this.promise.then(function (r) {
        if (!!n._listeners) {
            var i, o = n._listeners.length;
            for (i = 0; i < o; i++) n._listeners[i](r);
            n._listeners = null
        }
    }), this.promise.then = function (r) {
        var i, o = new Promise(function (s) {
            n.subscribe(s), i = s
        }).then(r);
        return o.cancel = function () {
            n.unsubscribe(i)
        }, o
    }, e(function (i) {
        n.reason || (n.reason = new UO(i), t(n.reason))
    })
}

wo.prototype.throwIfRequested = function () {
    if (this.reason) throw this.reason
};
wo.prototype.subscribe = function (t) {
    if (this.reason) {
        t(this.reason);
        return
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t]
};
wo.prototype.unsubscribe = function (t) {
    if (!!this._listeners) {
        var n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
};
wo.source = function () {
    var t, n = new wo(function (i) {
        t = i
    });
    return {token: n, cancel: t}
};
var VO = wo, BO = function (t) {
    return function (r) {
        return t.apply(null, r)
    }
}, zO = pt, HO = function (t) {
    return zO.isObject(t) && t.isAxiosError === !0
}, Lv = pt, GO = I0, Cl = jO, qO = M0, QO = zp;

function V0(e) {
    var t = new Cl(e), n = GO(Cl.prototype.request, t);
    return Lv.extend(n, Cl.prototype, t), Lv.extend(n, t), n.create = function (i) {
        return V0(qO(e, i))
    }, n
}

var Pt = V0(QO);
Pt.Axios = Cl;
Pt.CanceledError = Ku;
Pt.CancelToken = VO;
Pt.isCancel = F0;
Pt.VERSION = $0.version;
Pt.toFormData = x0;
Pt.AxiosError = zo;
Pt.Cancel = Pt.CanceledError;
Pt.all = function (t) {
    return Promise.all(t)
};
Pt.spread = BO;
Pt.isAxiosError = HO;
Mp.exports = Pt;
Mp.exports.default = Pt;
var B0 = Mp.exports;
const Ms = {
    get: e => {
        try {
            return window.localStorage.getItem(e)
        } catch (t) {
            console.error(t)
        }
    }, set: (e, t) => {
        try {
            window.localStorage.setItem(e, t)
        } catch (n) {
            console.error(n)
        }
    }
}, z0 = "", WO = e => B0.create({baseURL: z0, ...e}), YO = e => {
    const t = Ms.get("CHATTY_ACCESS_TOKEN");
    return B0.create({baseURL: z0, headers: {Authorization: "Token " + t}, ...e})
}, si = WO({credentials: "include"}), Dl = YO({credentials: "include"});

class so {
    static async fetchAnsweredQuestions(t) {
        return si.get(`/posts/question/${t}`)
    }

    static fetchUnAnsweredQuestions() {
        return Dl.get("/posts/unanswered")
    }

    static fetchRejectedQuestions() {
        return Dl.get("/posts/rejected")
    }

    static mutateQuestion(t) {
        return si.post("/posts/question", t)
    }

    static mutateAnsewr(t, n) {
        return si.post("/posts/answer", {question_id: t, content: n})
    }

    static mutateReject(t) {
        return Dl.post("/posts/rejected", {question_id: t})
    }
}

function XO({question_count: e}) {
    const {username: t} = UN();
    return O(Ab, {
        ...{
            question_count: e, getAnsweredQuestions: async () => {
                try {
                    const s = await so.fetchAnsweredQuestions(t);
                    console.log(s)
                } catch (s) {
                    console.error(s.response)
                }
            }, getUnAnsweredQuestions: async () => {
                try {
                    const s = await so.fetchUnAnsweredQuestions();
                    console.log(s)
                } catch (s) {
                    console.error(s.response)
                }
            }, getRejectedQuestions: async () => {
                try {
                    const s = await so.fetchRejectedQuestions();
                    console.log(s)
                } catch (s) {
                    console.error(s.response)
                }
            }
        }
    })
}

const JO = "_QuestionCard_81nfh_1", KO = "_top_81nfh_15", ZO = "_avatar_81nfh_22", eA = "_name_81nfh_30",
    tA = "_time_81nfh_36", nA = "_content_81nfh_42";
var Yr = {QuestionCard: JO, top: KO, avatar: ZO, name: eA, time: tA, content: nA};

function rA({question: e}) {
    const {pk: t, content: n, nickname: r, author_ip: i, answer_content: o, author_profile: s, created_date: a} = e;
    return ee("li", {
        className: Yr.QuestionCard,
        children: [ee("div", {
            className: Yr.top,
            children: [O("div", {
                className: Yr.avatar,
                children: s && O("img", {src: s})
            }), ee("div", {
                className: Yr.user,
                children: [O("div", {className: Yr.name, children: r}), O("div", {
                    className: Yr.time,
                    children: "45\uBD84 \uC804"
                }), O(Wu, {
                    method: "post",
                    children: O("button", {type: "submit", name: "question_id", value: t, children: "\uAC70\uC808"})
                })]
            })]
        }), O("p", {className: Yr.content, children: n})]
    })
}

const iA = "_cardList_vpns0_1";
var oA = {cardList: iA};

function sA({questions: e}) {
    return O("section", {
        children: O("ul", {
            className: oA.cardList,
            children: e.length === 0 ? O("h3", {children: "No Question"}) : e.map(t => O(rA, {question: t}, t.pk))
        })
    })
}

function aA() {
    const [e, t] = QN();
    return ee(Bn, {children: [O(gb, {profile: e}), ee("main", {children: [O(Tb, {}), O(XO, {question_count: e.question_count}), O(sA, {questions: t})]})]})
}

function lA() {
    return O("div", {children: "MyPage"})
}

const H0 = {
    isValidLoginInputs(e) {
        const {username: t, password: n} = e;
        return t !== "" && n !== ""
    }, isValidSignUpInputs(e) {
        const {username: t, email: n, password: r, password2: i} = e;
        return t !== "" && this.isValidEmail(n) !== "" && r !== "" && r === i
    }, isValidEmail(e) {
        return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(e)
    }
};

class G0 {
    static signup(t) {
        return si.post("/users/register", t)
    }

    static login(t) {
        return si.post("/users/login", t)
    }

    static logout() {
        return Dl.get("/users/logout")
    }
}

async function uA({request: e}) {
    let t = await e.formData();
    if (t = Object.fromEntries(t), !H0.isValidLoginInputs(t)) {
        alert("\uC544\uC774\uB514\uD639\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.");
        return
    }
    try {
        const {data: n} = await G0.login(t);
        if (Ms.set("CHATTY_ACCESS_TOKEN", n.token), Ms.set("CHATTY_NICKNAME", n.username), n.username) return Ap(`/profile/${n.username}`)
    } catch (n) {
        n.response.status === 400 && alert("\uC544\uC774\uB514\uD639\uC740 \uBE44\uBC00\uBC88\uD638\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694.")
    }
}

async function cA({request: e}) {
    let t = await e.formData();
    if (t = Object.fromEntries(t), !H0.isValidSignUpInputs(t)) {
        alert("\uC785\uB825\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.");
        return
    }
    try {
        if ((await G0.signup(t)).status === 201) return alert("\uD68C\uC6D0\uAC00\uC785 \uC131\uACF5"), Ap("/")
    } catch (n) {
        n.response.status === 400 && alert("\uBE44\uBC88 \uADDC\uCE59 : \uC601\uBB388\uC790\uB9AC + \uC22B\uC790 + \uD2B9\uC218\uBB38\uC790")
    }
}

class fA {
    static async fetchProfile(t) {
        return si.get(`/users/profile/${t}`)
    }

    static async followUser(t) {
        return si.get(`/users/follow/${t}`)
    }
}

async function dA({params: e}) {
    try {
        const t = e.username, n = so.fetchAnsweredQuestions(t), r = fA.fetchProfile(t), i = await Promise.all([r, n]);
        if (i.every(o => o.status === 200)) {
            const [o, s] = i;
            return [o.data, s.data]
        }
    } catch (t) {
        console.error(t.response)
    }
}

async function q0(e) {
    if (!!e) try {
        const {data: t} = await so.mutateReject(e);
        alert(t.info)
    } catch (t) {
        console.error(t.response)
    }
}

function pA() {
    if (Ms.get("CHATTY_ACCESS_TOKEN")) {
        const t = Ms.get("CHATTY_NICKNAME");
        return Ap(`/profile/${t}`)
    }
}

async function hA({target_profile: e, content: t}) {
    if (t.length !== 0) {
        if (t.length > 100) {
            alert("Exceeded 100 characters.");
            return
        }
        try {
            const {data: n} = await so.mutateQuestion({target_profile: e, content: t});
            alert(n.info)
        } catch (n) {
            console.error(n.response)
        }
    }
}

var mA = sI([{path: "/", element: O(tb, {}), loader: pA, action: uA}, {
    path: "signup",
    element: O(rb, {}),
    action: cA
}, {
    element: O(CI, {}),
    children: [{
        path: "profile/:username",
        loader: dA,
        action: vA,
        element: O(aA, {})
    }, {path: "profile/:username/reject", action: q0}, {path: "mypage", element: O(lA, {})}]
}]);

async function vA({request: e, params: t}) {
    let n = await e.formData();
    if (n = Object.fromEntries(n), n.content) {
        const r = t.username, i = n.content;
        hA({target_profile: r, content: i})
    } else if (n.question_id) {
        const r = n.question_id;
        q0(r)
    }
}

var Gp = {exports: {}}, Wt = {}, Q0 = {exports: {}}, W0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(j, Q) {
        var J = j.length;
        j.push(Q);
        e:for (; 0 < J;) {
            var me = J - 1 >>> 1, v = j[me];
            if (0 < i(v, Q)) j[me] = Q, j[J] = v, J = me; else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var Q = j[0], J = j.pop();
        if (J !== Q) {
            j[0] = J;
            e:for (var me = 0, v = j.length, N = v >>> 1; me < N;) {
                var I = 2 * (me + 1) - 1, k = j[I], z = I + 1, W = j[z];
                if (0 > i(k, J)) z < v && 0 > i(W, k) ? (j[me] = W, j[z] = J, me = z) : (j[me] = k, j[I] = J, me = I); else if (z < v && 0 > i(W, J)) j[me] = W, j[z] = J, me = z; else break e
            }
        }
        return Q
    }

    function i(j, Q) {
        var J = j.sortIndex - Q.sortIndex;
        return J !== 0 ? J : j.id - Q.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var s = Date, a = s.now();
        e.unstable_now = function () {
            return s.now() - a
        }
    }
    var l = [], u = [], c = 1, d = null, f = 3, p = !1, h = !1, g = !1,
        _ = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        y = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function E(j) {
        for (var Q = n(u); Q !== null;) {
            if (Q.callback === null) r(u); else if (Q.startTime <= j) r(u), Q.sortIndex = Q.expirationTime, t(l, Q); else break;
            Q = n(u)
        }
    }

    function T(j) {
        if (g = !1, E(j), !h) if (n(l) !== null) h = !0, oe(R); else {
            var Q = n(u);
            Q !== null && Ie(T, Q.startTime - j)
        }
    }

    function R(j, Q) {
        h = !1, g && (g = !1, m($), $ = -1), p = !0;
        var J = f;
        try {
            for (E(Q), d = n(l); d !== null && (!(d.expirationTime > Q) || j && !X());) {
                var me = d.callback;
                if (typeof me == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var v = me(d.expirationTime <= Q);
                    Q = e.unstable_now(), typeof v == "function" ? d.callback = v : d === n(l) && r(l), E(Q)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var N = !0; else {
                var I = n(u);
                I !== null && Ie(T, I.startTime - Q), N = !1
            }
            return N
        } finally {
            d = null, f = J, p = !1
        }
    }

    var x = !1, F = null, $ = -1, b = 5, P = -1;

    function X() {
        return !(e.unstable_now() - P < b)
    }

    function Se() {
        if (F !== null) {
            var j = e.unstable_now();
            P = j;
            var Q = !0;
            try {
                Q = F(!0, j)
            } finally {
                Q ? Xe() : (x = !1, F = null)
            }
        } else x = !1
    }

    var Xe;
    if (typeof y == "function") Xe = function () {
        y(Se)
    }; else if (typeof MessageChannel != "undefined") {
        var he = new MessageChannel, je = he.port2;
        he.port1.onmessage = Se, Xe = function () {
            je.postMessage(null)
        }
    } else Xe = function () {
        _(Se, 0)
    };

    function oe(j) {
        F = j, x || (x = !0, Xe())
    }

    function Ie(j, Q) {
        $ = _(function () {
            j(e.unstable_now())
        }, Q)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (j) {
        j.callback = null
    }, e.unstable_continueExecution = function () {
        h || p || (h = !0, oe(R))
    }, e.unstable_forceFrameRate = function (j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return f
    }, e.unstable_getFirstCallbackNode = function () {
        return n(l)
    }, e.unstable_next = function (j) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var Q = 3;
                break;
            default:
                Q = f
        }
        var J = f;
        f = Q;
        try {
            return j()
        } finally {
            f = J
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (j, Q) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var J = f;
        f = j;
        try {
            return Q()
        } finally {
            f = J
        }
    }, e.unstable_scheduleCallback = function (j, Q, J) {
        var me = e.unstable_now();
        switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? me + J : me) : J = me, j) {
            case 1:
                var v = -1;
                break;
            case 2:
                v = 250;
                break;
            case 5:
                v = 1073741823;
                break;
            case 4:
                v = 1e4;
                break;
            default:
                v = 5e3
        }
        return v = J + v, j = {
            id: c++,
            callback: Q,
            priorityLevel: j,
            startTime: J,
            expirationTime: v,
            sortIndex: -1
        }, J > me ? (j.sortIndex = J, t(u, j), n(l) === null && j === n(u) && (g ? (m($), $ = -1) : g = !0, Ie(T, J - me))) : (j.sortIndex = v, t(l, j), h || p || (h = !0, oe(R))), j
    }, e.unstable_shouldYield = X, e.unstable_wrapCallback = function (j) {
        var Q = f;
        return function () {
            var J = f;
            f = Q;
            try {
                return j.apply(this, arguments)
            } finally {
                f = J
            }
        }
    }
})(W0);
Q0.exports = W0;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0 = U.exports, Gt = Q0.exports;

function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var X0 = new Set, $s = {};

function Si(e, t) {
    To(e, t), To(e + "Capture", t)
}

function To(e, t) {
    for ($s[e] = t, e = 0; e < t.length; e++) X0.add(t[e])
}

var tr = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    ld = Object.prototype.hasOwnProperty,
    yA = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Pv = {}, Fv = {};

function gA(e) {
    return ld.call(Fv, e) ? !0 : ld.call(Pv, e) ? !1 : yA.test(e) ? Fv[e] = !0 : (Pv[e] = !0, !1)
}

function EA(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function wA(e, t, n, r) {
    if (t === null || typeof t == "undefined" || EA(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ot(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}

var dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    dt[e] = new Ot(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    dt[t] = new Ot(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    dt[e] = new Ot(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    dt[e] = new Ot(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    dt[e] = new Ot(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    dt[e] = new Ot(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    dt[e] = new Ot(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    dt[e] = new Ot(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    dt[e] = new Ot(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var qp = /[\-:]([a-z])/g;

function Qp(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(qp, Qp);
    dt[t] = new Ot(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(qp, Qp);
    dt[t] = new Ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(qp, Qp);
    dt[t] = new Ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    dt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
dt.xlinkHref = new Ot("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    dt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Wp(e, t, n, r) {
    var i = dt.hasOwnProperty(t) ? dt[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wA(t, n, i, r) && (n = null), r || i === null ? gA(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var fr = Y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Xa = Symbol.for("react.element"),
    zi = Symbol.for("react.portal"), Hi = Symbol.for("react.fragment"), Yp = Symbol.for("react.strict_mode"),
    ud = Symbol.for("react.profiler"), J0 = Symbol.for("react.provider"), K0 = Symbol.for("react.context"),
    Xp = Symbol.for("react.forward_ref"), cd = Symbol.for("react.suspense"), fd = Symbol.for("react.suspense_list"),
    Jp = Symbol.for("react.memo"), Er = Symbol.for("react.lazy"), Z0 = Symbol.for("react.offscreen"),
    Mv = Symbol.iterator;

function is(e) {
    return e === null || typeof e != "object" ? null : (e = Mv && e[Mv] || e["@@iterator"], typeof e == "function" ? e : null)
}

var Pe = Object.assign, lf;

function ys(e) {
    if (lf === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        lf = t && t[1] || ""
    }
    return `
` + lf + e
}

var uf = !1;

function cf(e, t) {
    if (!e || uf) return "";
    uf = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
                if (s !== 1 || a !== 1) do if (s--, a--, 0 > a || i[s] !== o[a]) {
                    var l = `
` + i[s].replace(" at new ", " at ");
                    return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                } while (1 <= s && 0 <= a);
                break
            }
        }
    } finally {
        uf = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ys(e) : ""
}

function TA(e) {
    switch (e.tag) {
        case 5:
            return ys(e.type);
        case 16:
            return ys("Lazy");
        case 13:
            return ys("Suspense");
        case 19:
            return ys("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = cf(e.type, !1), e;
        case 11:
            return e = cf(e.type.render, !1), e;
        case 1:
            return e = cf(e.type, !0), e;
        default:
            return ""
    }
}

function dd(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Hi:
            return "Fragment";
        case zi:
            return "Portal";
        case ud:
            return "Profiler";
        case Yp:
            return "StrictMode";
        case cd:
            return "Suspense";
        case fd:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case K0:
            return (e.displayName || "Context") + ".Consumer";
        case J0:
            return (e._context.displayName || "Context") + ".Provider";
        case Xp:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Jp:
            return t = e.displayName || null, t !== null ? t : dd(e.type) || "Memo";
        case Er:
            t = e._payload, e = e._init;
            try {
                return dd(e(t))
            } catch {
            }
    }
    return null
}

function _A(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return dd(t);
        case 8:
            return t === Yp ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function $r(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function eE(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function SA(e) {
    var t = eE(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get, o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return i.call(this)
            }, set: function (s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (s) {
                r = "" + s
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ja(e) {
    e._valueTracker || (e._valueTracker = SA(e))
}

function tE(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = eE(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function eu(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function pd(e, t) {
    var n = t.checked;
    return Pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked
    })
}

function $v(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = $r(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function nE(e, t) {
    t = t.checked, t != null && Wp(e, "checked", t, !1)
}

function hd(e, t) {
    nE(e, t);
    var n = $r(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? md(e, t.type, n) : t.hasOwnProperty("defaultValue") && md(e, t.type, $r(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function jv(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function md(e, t, n) {
    (t !== "number" || eu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var gs = Array.isArray;

function ao(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + $r(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function vd(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return Pe({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function Uv(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(M(92));
            if (gs(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: $r(n)}
}

function rE(e, t) {
    var n = $r(t.value), r = $r(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Vv(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function iE(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function yd(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? iE(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var Ka, oE = function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (Ka = Ka || document.createElement("div"), Ka.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ka.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function js(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Is = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, NA = ["Webkit", "ms", "Moz", "O"];
Object.keys(Is).forEach(function (e) {
    NA.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Is[t] = Is[e]
    })
});

function sE(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Is.hasOwnProperty(e) && Is[e] ? ("" + t).trim() : t + "px"
}

function aE(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = sE(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
    }
}

var IA = Pe({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function gd(e, t) {
    if (t) {
        if (IA[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62))
    }
}

function Ed(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var wd = null;

function Kp(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var Td = null, lo = null, uo = null;

function Bv(e) {
    if (e = ha(e)) {
        if (typeof Td != "function") throw Error(M(280));
        var t = e.stateNode;
        t && (t = oc(t), Td(e.stateNode, e.type, t))
    }
}

function lE(e) {
    lo ? uo ? uo.push(e) : uo = [e] : lo = e
}

function uE() {
    if (lo) {
        var e = lo, t = uo;
        if (uo = lo = null, Bv(e), t) for (e = 0; e < t.length; e++) Bv(t[e])
    }
}

function cE(e, t) {
    return e(t)
}

function fE() {
}

var ff = !1;

function dE(e, t, n) {
    if (ff) return e(t, n);
    ff = !0;
    try {
        return cE(e, t, n)
    } finally {
        ff = !1, (lo !== null || uo !== null) && (fE(), uE())
    }
}

function Us(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = oc(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n
}

var _d = !1;
if (tr) try {
    var os = {};
    Object.defineProperty(os, "passive", {
        get: function () {
            _d = !0
        }
    }), window.addEventListener("test", os, os), window.removeEventListener("test", os, os)
} catch {
    _d = !1
}

function bA(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}

var bs = !1, tu = null, nu = !1, Sd = null, OA = {
    onError: function (e) {
        bs = !0, tu = e
    }
};

function AA(e, t, n, r, i, o, s, a, l) {
    bs = !1, tu = null, bA.apply(OA, arguments)
}

function CA(e, t, n, r, i, o, s, a, l) {
    if (AA.apply(this, arguments), bs) {
        if (bs) {
            var u = tu;
            bs = !1, tu = null
        } else throw Error(M(198));
        nu || (nu = !0, Sd = u)
    }
}

function Ni(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function pE(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function zv(e) {
    if (Ni(e) !== e) throw Error(M(188))
}

function DA(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ni(e), t === null) throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return zv(i), e;
                if (o === r) return zv(i), t;
                o = o.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return) n = i, r = o; else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a;) {
                    if (a === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(M(189))
            }
        }
        if (n.alternate !== r) throw Error(M(190))
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t
}

function hE(e) {
    return e = DA(e), e !== null ? mE(e) : null
}

function mE(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = mE(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var vE = Gt.unstable_scheduleCallback, Hv = Gt.unstable_cancelCallback, RA = Gt.unstable_shouldYield,
    kA = Gt.unstable_requestPaint, He = Gt.unstable_now, xA = Gt.unstable_getCurrentPriorityLevel,
    Zp = Gt.unstable_ImmediatePriority, yE = Gt.unstable_UserBlockingPriority, ru = Gt.unstable_NormalPriority,
    LA = Gt.unstable_LowPriority, gE = Gt.unstable_IdlePriority, tc = null, Pn = null;

function PA(e) {
    if (Pn && typeof Pn.onCommitFiberRoot == "function") try {
        Pn.onCommitFiberRoot(tc, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var _n = Math.clz32 ? Math.clz32 : $A, FA = Math.log, MA = Math.LN2;

function $A(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (FA(e) / MA | 0) | 0
}

var Za = 64, el = 4194304;

function Es(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function iu(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Es(a) : (o &= s, o !== 0 && (r = Es(o)))
    } else s = n & ~i, s !== 0 ? r = Es(s) : o !== 0 && (r = Es(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - _n(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function jA(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function UA(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - _n(o), a = 1 << s, l = i[s];
        l === -1 ? ((a & n) === 0 || (a & r) !== 0) && (i[s] = jA(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a
    }
}

function Nd(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function EE() {
    var e = Za;
    return Za <<= 1, (Za & 4194240) === 0 && (Za = 64), e
}

function df(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function da(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - _n(t), e[t] = n
}

function VA(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - _n(n), o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function eh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - _n(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}

var ge = 0;

function wE(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}

var TE, th, _E, SE, NE, Id = !1, tl = [], Ar = null, Cr = null, Dr = null, Vs = new Map, Bs = new Map, _r = [],
    BA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Gv(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            Ar = null;
            break;
        case"dragenter":
        case"dragleave":
            Cr = null;
            break;
        case"mouseover":
        case"mouseout":
            Dr = null;
            break;
        case"pointerover":
        case"pointerout":
            Vs.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            Bs.delete(t.pointerId)
    }
}

function ss(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = ha(t), t !== null && th(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function zA(e, t, n, r, i) {
    switch (t) {
        case"focusin":
            return Ar = ss(Ar, e, t, n, r, i), !0;
        case"dragenter":
            return Cr = ss(Cr, e, t, n, r, i), !0;
        case"mouseover":
            return Dr = ss(Dr, e, t, n, r, i), !0;
        case"pointerover":
            var o = i.pointerId;
            return Vs.set(o, ss(Vs.get(o) || null, e, t, n, r, i)), !0;
        case"gotpointercapture":
            return o = i.pointerId, Bs.set(o, ss(Bs.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function IE(e) {
    var t = ti(e.target);
    if (t !== null) {
        var n = Ni(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = pE(n), t !== null) {
                    e.blockedOn = t, NE(e.priority, function () {
                        _E(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Rl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = bd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            wd = r, n.target.dispatchEvent(r), wd = null
        } else return t = ha(n), t !== null && th(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function qv(e, t, n) {
    Rl(e) && n.delete(t)
}

function HA() {
    Id = !1, Ar !== null && Rl(Ar) && (Ar = null), Cr !== null && Rl(Cr) && (Cr = null), Dr !== null && Rl(Dr) && (Dr = null), Vs.forEach(qv), Bs.forEach(qv)
}

function as(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Id || (Id = !0, Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority, HA)))
}

function zs(e) {
    function t(i) {
        return as(i, e)
    }

    if (0 < tl.length) {
        as(tl[0], e);
        for (var n = 1; n < tl.length; n++) {
            var r = tl[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ar !== null && as(Ar, e), Cr !== null && as(Cr, e), Dr !== null && as(Dr, e), Vs.forEach(t), Bs.forEach(t), n = 0; n < _r.length; n++) r = _r[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < _r.length && (n = _r[0], n.blockedOn === null);) IE(n), n.blockedOn === null && _r.shift()
}

var co = fr.ReactCurrentBatchConfig, ou = !0;

function GA(e, t, n, r) {
    var i = ge, o = co.transition;
    co.transition = null;
    try {
        ge = 1, nh(e, t, n, r)
    } finally {
        ge = i, co.transition = o
    }
}

function qA(e, t, n, r) {
    var i = ge, o = co.transition;
    co.transition = null;
    try {
        ge = 4, nh(e, t, n, r)
    } finally {
        ge = i, co.transition = o
    }
}

function nh(e, t, n, r) {
    if (ou) {
        var i = bd(e, t, n, r);
        if (i === null) _f(e, t, r, su, n), Gv(e, r); else if (zA(i, e, t, n, r)) r.stopPropagation(); else if (Gv(e, r), t & 4 && -1 < BA.indexOf(e)) {
            for (; i !== null;) {
                var o = ha(i);
                if (o !== null && TE(o), o = bd(e, t, n, r), o === null && _f(e, t, r, su, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else _f(e, t, r, null, n)
    }
}

var su = null;

function bd(e, t, n, r) {
    if (su = null, e = Kp(r), e = ti(e), e !== null) if (t = Ni(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = pE(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return su = e, null
}

function bE(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (xA()) {
                case Zp:
                    return 1;
                case yE:
                    return 4;
                case ru:
                case LA:
                    return 16;
                case gE:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var Nr = null, rh = null, kl = null;

function OE() {
    if (kl) return kl;
    var e, t = rh, n = t.length, r, i = "value" in Nr ? Nr.value : Nr.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
    return kl = i.slice(e, 1 < r ? 1 - r : void 0)
}

function xl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function nl() {
    return !0
}

function Qv() {
    return !1
}

function Yt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? nl : Qv, this.isPropagationStopped = Qv, this
    }

    return Pe(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = nl)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = nl)
        }, persist: function () {
        }, isPersistent: nl
    }), t
}

var Ho = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, ih = Yt(Ho), pa = Pe({}, Ho, {view: 0, detail: 0}), QA = Yt(pa), pf, hf, ls, nc = Pe({}, pa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: oh,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== ls && (ls && e.type === "mousemove" ? (pf = e.screenX - ls.screenX, hf = e.screenY - ls.screenY) : hf = pf = 0, ls = e), pf)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : hf
        }
    }), Wv = Yt(nc), WA = Pe({}, nc, {dataTransfer: 0}), YA = Yt(WA), XA = Pe({}, pa, {relatedTarget: 0}), mf = Yt(XA),
    JA = Pe({}, Ho, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), KA = Yt(JA), ZA = Pe({}, Ho, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), eC = Yt(ZA), tC = Pe({}, Ho, {data: 0}), Yv = Yt(tC), nC = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, rC = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, iC = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function oC(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = iC[e]) ? !!t[e] : !1
}

function oh() {
    return oC
}

var sC = Pe({}, pa, {
    key: function (e) {
        if (e.key) {
            var t = nC[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = xl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rC[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oh,
    charCode: function (e) {
        return e.type === "keypress" ? xl(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), aC = Yt(sC), lC = Pe({}, nc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), Xv = Yt(lC), uC = Pe({}, pa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oh
}), cC = Yt(uC), fC = Pe({}, Ho, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), dC = Yt(fC), pC = Pe({}, nc, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), hC = Yt(pC), mC = [9, 13, 27, 32], sh = tr && "CompositionEvent" in window, Os = null;
tr && "documentMode" in document && (Os = document.documentMode);
var vC = tr && "TextEvent" in window && !Os, AE = tr && (!sh || Os && 8 < Os && 11 >= Os), Jv = String.fromCharCode(32),
    Kv = !1;

function CE(e, t) {
    switch (e) {
        case"keyup":
            return mC.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function DE(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var Gi = !1;

function yC(e, t) {
    switch (e) {
        case"compositionend":
            return DE(t);
        case"keypress":
            return t.which !== 32 ? null : (Kv = !0, Jv);
        case"textInput":
            return e = t.data, e === Jv && Kv ? null : e;
        default:
            return null
    }
}

function gC(e, t) {
    if (Gi) return e === "compositionend" || !sh && CE(e, t) ? (e = OE(), kl = rh = Nr = null, Gi = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return AE && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var EC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Zv(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!EC[e.type] : t === "textarea"
}

function RE(e, t, n, r) {
    lE(r), t = au(t, "onChange"), 0 < t.length && (n = new ih("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var As = null, Hs = null;

function wC(e) {
    BE(e, 0)
}

function rc(e) {
    var t = Wi(e);
    if (tE(t)) return e
}

function TC(e, t) {
    if (e === "change") return t
}

var kE = !1;
if (tr) {
    var vf;
    if (tr) {
        var yf = "oninput" in document;
        if (!yf) {
            var ey = document.createElement("div");
            ey.setAttribute("oninput", "return;"), yf = typeof ey.oninput == "function"
        }
        vf = yf
    } else vf = !1;
    kE = vf && (!document.documentMode || 9 < document.documentMode)
}

function ty() {
    As && (As.detachEvent("onpropertychange", xE), Hs = As = null)
}

function xE(e) {
    if (e.propertyName === "value" && rc(Hs)) {
        var t = [];
        RE(t, Hs, e, Kp(e)), dE(wC, t)
    }
}

function _C(e, t, n) {
    e === "focusin" ? (ty(), As = t, Hs = n, As.attachEvent("onpropertychange", xE)) : e === "focusout" && ty()
}

function SC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return rc(Hs)
}

function NC(e, t) {
    if (e === "click") return rc(t)
}

function IC(e, t) {
    if (e === "input" || e === "change") return rc(t)
}

function bC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var On = typeof Object.is == "function" ? Object.is : bC;

function Gs(e, t) {
    if (On(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!ld.call(t, i) || !On(e[i], t[i])) return !1
    }
    return !0
}

function ny(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ry(e, t) {
    var n = ny(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ny(n)
    }
}

function LE(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? LE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function PE() {
    for (var e = window, t = eu(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = eu(e.document)
    }
    return t
}

function ah(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function OC(e) {
    var t = PE(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && LE(n.ownerDocument.documentElement, n)) {
        if (r !== null && ah(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length, o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ry(n, o);
                var s = ry(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var AC = tr && "documentMode" in document && 11 >= document.documentMode, qi = null, Od = null, Cs = null, Ad = !1;

function iy(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ad || qi == null || qi !== eu(r) || (r = qi, "selectionStart" in r && ah(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Cs && Gs(Cs, r) || (Cs = r, r = au(Od, "onSelect"), 0 < r.length && (t = new ih("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = qi)))
}

function rl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var Qi = {
    animationend: rl("Animation", "AnimationEnd"),
    animationiteration: rl("Animation", "AnimationIteration"),
    animationstart: rl("Animation", "AnimationStart"),
    transitionend: rl("Transition", "TransitionEnd")
}, gf = {}, FE = {};
tr && (FE = document.createElement("div").style, "AnimationEvent" in window || (delete Qi.animationend.animation, delete Qi.animationiteration.animation, delete Qi.animationstart.animation), "TransitionEvent" in window || delete Qi.transitionend.transition);

function ic(e) {
    if (gf[e]) return gf[e];
    if (!Qi[e]) return e;
    var t = Qi[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in FE) return gf[e] = t[n];
    return e
}

var ME = ic("animationend"), $E = ic("animationiteration"), jE = ic("animationstart"), UE = ic("transitionend"),
    VE = new Map,
    oy = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Vr(e, t) {
    VE.set(e, t), Si(t, [e])
}

for (var Ef = 0; Ef < oy.length; Ef++) {
    var wf = oy[Ef], CC = wf.toLowerCase(), DC = wf[0].toUpperCase() + wf.slice(1);
    Vr(CC, "on" + DC)
}
Vr(ME, "onAnimationEnd");
Vr($E, "onAnimationIteration");
Vr(jE, "onAnimationStart");
Vr("dblclick", "onDoubleClick");
Vr("focusin", "onFocus");
Vr("focusout", "onBlur");
Vr(UE, "onTransitionEnd");
To("onMouseEnter", ["mouseout", "mouseover"]);
To("onMouseLeave", ["mouseout", "mouseover"]);
To("onPointerEnter", ["pointerout", "pointerover"]);
To("onPointerLeave", ["pointerout", "pointerover"]);
Si("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Si("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Si("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Si("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Si("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Si("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ws = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    RC = new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));

function sy(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, CA(r, t, void 0, e), e.currentTarget = null
}

function BE(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        e:{
            var o = void 0;
            if (t) for (var s = r.length - 1; 0 <= s; s--) {
                var a = r[s], l = a.instance, u = a.currentTarget;
                if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
                sy(i, a, u), o = l
            } else for (s = 0; s < r.length; s++) {
                if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
                sy(i, a, u), o = l
            }
        }
    }
    if (nu) throw e = Sd, nu = !1, Sd = null, e
}

function be(e, t) {
    var n = t[xd];
    n === void 0 && (n = t[xd] = new Set);
    var r = e + "__bubble";
    n.has(r) || (zE(t, e, 2, !1), n.add(r))
}

function Tf(e, t, n) {
    var r = 0;
    t && (r |= 4), zE(n, e, r, t)
}

var il = "_reactListening" + Math.random().toString(36).slice(2);

function qs(e) {
    if (!e[il]) {
        e[il] = !0, X0.forEach(function (n) {
            n !== "selectionchange" && (RC.has(n) || Tf(n, !1, e), Tf(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[il] || (t[il] = !0, Tf("selectionchange", !1, t))
    }
}

function zE(e, t, n, r) {
    switch (bE(t)) {
        case 1:
            var i = GA;
            break;
        case 4:
            i = qA;
            break;
        default:
            i = nh
    }
    n = i.bind(null, t, n, e), i = void 0, !_d || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {passive: i}) : e.addEventListener(t, n, !1)
}

function _f(e, t, n, r, i) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e:for (; ;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4) for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                s = s.return
            }
            for (; a !== null;) {
                if (s = ti(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = o = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    dE(function () {
        var u = o, c = Kp(n), d = [];
        e:{
            var f = VE.get(e);
            if (f !== void 0) {
                var p = ih, h = e;
                switch (e) {
                    case"keypress":
                        if (xl(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        p = aC;
                        break;
                    case"focusin":
                        h = "focus", p = mf;
                        break;
                    case"focusout":
                        h = "blur", p = mf;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        p = mf;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        p = Wv;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        p = YA;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        p = cC;
                        break;
                    case ME:
                    case $E:
                    case jE:
                        p = KA;
                        break;
                    case UE:
                        p = dC;
                        break;
                    case"scroll":
                        p = QA;
                        break;
                    case"wheel":
                        p = hC;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        p = eC;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        p = Xv
                }
                var g = (t & 4) !== 0, _ = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var y = u, E; y !== null;) {
                    E = y;
                    var T = E.stateNode;
                    if (E.tag === 5 && T !== null && (E = T, m !== null && (T = Us(y, m), T != null && g.push(Qs(y, T, E)))), _) break;
                    y = y.return
                }
                0 < g.length && (f = new p(f, h, null, n, c), d.push({event: f, listeners: g}))
            }
        }
        if ((t & 7) === 0) {
            e:{
                if (f = e === "mouseover" || e === "pointerover", p = e === "mouseout" || e === "pointerout", f && n !== wd && (h = n.relatedTarget || n.fromElement) && (ti(h) || h[nr])) break e;
                if ((p || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, p ? (h = n.relatedTarget || n.toElement, p = u, h = h ? ti(h) : null, h !== null && (_ = Ni(h), h !== _ || h.tag !== 5 && h.tag !== 6) && (h = null)) : (p = null, h = u), p !== h)) {
                    if (g = Wv, T = "onMouseLeave", m = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (g = Xv, T = "onPointerLeave", m = "onPointerEnter", y = "pointer"), _ = p == null ? f : Wi(p), E = h == null ? f : Wi(h), f = new g(T, y + "leave", p, n, c), f.target = _, f.relatedTarget = E, T = null, ti(c) === u && (g = new g(m, y + "enter", h, n, c), g.target = E, g.relatedTarget = _, T = g), _ = T, p && h) t:{
                        for (g = p, m = h, y = 0, E = g; E; E = Li(E)) y++;
                        for (E = 0, T = m; T; T = Li(T)) E++;
                        for (; 0 < y - E;) g = Li(g), y--;
                        for (; 0 < E - y;) m = Li(m), E--;
                        for (; y--;) {
                            if (g === m || m !== null && g === m.alternate) break t;
                            g = Li(g), m = Li(m)
                        }
                        g = null
                    } else g = null;
                    p !== null && ay(d, f, p, g, !1), h !== null && _ !== null && ay(d, _, h, g, !0)
                }
            }
            e:{
                if (f = u ? Wi(u) : window, p = f.nodeName && f.nodeName.toLowerCase(), p === "select" || p === "input" && f.type === "file") var R = TC; else if (Zv(f)) if (kE) R = IC; else {
                    R = SC;
                    var x = _C
                } else (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (R = NC);
                if (R && (R = R(e, u))) {
                    RE(d, R, n, c);
                    break e
                }
                x && x(e, f, u), e === "focusout" && (x = f._wrapperState) && x.controlled && f.type === "number" && md(f, "number", f.value)
            }
            switch (x = u ? Wi(u) : window, e) {
                case"focusin":
                    (Zv(x) || x.contentEditable === "true") && (qi = x, Od = u, Cs = null);
                    break;
                case"focusout":
                    Cs = Od = qi = null;
                    break;
                case"mousedown":
                    Ad = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    Ad = !1, iy(d, n, c);
                    break;
                case"selectionchange":
                    if (AC) break;
                case"keydown":
                case"keyup":
                    iy(d, n, c)
            }
            var F;
            if (sh) e:{
                switch (e) {
                    case"compositionstart":
                        var $ = "onCompositionStart";
                        break e;
                    case"compositionend":
                        $ = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        $ = "onCompositionUpdate";
                        break e
                }
                $ = void 0
            } else Gi ? CE(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
            $ && (AE && n.locale !== "ko" && (Gi || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Gi && (F = OE()) : (Nr = c, rh = "value" in Nr ? Nr.value : Nr.textContent, Gi = !0)), x = au(u, $), 0 < x.length && ($ = new Yv($, e, null, n, c), d.push({
                event: $,
                listeners: x
            }), F ? $.data = F : (F = DE(n), F !== null && ($.data = F)))), (F = vC ? yC(e, n) : gC(e, n)) && (u = au(u, "onBeforeInput"), 0 < u.length && (c = new Yv("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = F))
        }
        BE(d, t)
    })
}

function Qs(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function au(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e, o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = Us(e, n), o != null && r.unshift(Qs(e, o, i)), o = Us(e, t), o != null && r.push(Qs(e, o, i))), e = e.return
    }
    return r
}

function Li(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ay(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var a = n, l = a.alternate, u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Us(n, o), l != null && s.unshift(Qs(n, l, a))) : i || (l = Us(n, o), l != null && s.push(Qs(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({event: t, listeners: s})
}

var kC = /\r\n?/g, xC = /\u0000|\uFFFD/g;

function ly(e) {
    return (typeof e == "string" ? e : "" + e).replace(kC, `
`).replace(xC, "")
}

function ol(e, t, n) {
    if (t = ly(t), ly(e) !== t && n) throw Error(M(425))
}

function lu() {
}

var Cd = null, Dd = null;

function Rd(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var kd = typeof setTimeout == "function" ? setTimeout : void 0,
    LC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    uy = typeof Promise == "function" ? Promise : void 0,
    PC = typeof queueMicrotask == "function" ? queueMicrotask : typeof uy != "undefined" ? function (e) {
        return uy.resolve(null).then(e).catch(FC)
    } : kd;

function FC(e) {
    setTimeout(function () {
        throw e
    })
}

function Sf(e, t) {
    var n = t, r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), zs(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    zs(t)
}

function Rr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function cy(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var Go = Math.random().toString(36).slice(2), xn = "__reactFiber$" + Go, Ws = "__reactProps$" + Go,
    nr = "__reactContainer$" + Go, xd = "__reactEvents$" + Go, MC = "__reactListeners$" + Go,
    $C = "__reactHandles$" + Go;

function ti(e) {
    var t = e[xn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[nr] || n[xn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = cy(e); e !== null;) {
                if (n = e[xn]) return n;
                e = cy(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ha(e) {
    return e = e[xn] || e[nr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Wi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33))
}

function oc(e) {
    return e[Ws] || null
}

var Ld = [], Yi = -1;

function Br(e) {
    return {current: e}
}

function Oe(e) {
    0 > Yi || (e.current = Ld[Yi], Ld[Yi] = null, Yi--)
}

function Ne(e, t) {
    Yi++, Ld[Yi] = e.current, e.current = t
}

var jr = {}, Et = Br(jr), kt = Br(!1), fi = jr;

function _o(e, t) {
    var n = e.type.contextTypes;
    if (!n) return jr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function xt(e) {
    return e = e.childContextTypes, e != null
}

function uu() {
    Oe(kt), Oe(Et)
}

function fy(e, t, n) {
    if (Et.current !== jr) throw Error(M(168));
    Ne(Et, t), Ne(kt, n)
}

function HE(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(M(108, _A(e) || "Unknown", i));
    return Pe({}, n, r)
}

function cu(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jr, fi = Et.current, Ne(Et, e), Ne(kt, kt.current), !0
}

function dy(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? (e = HE(e, t, fi), r.__reactInternalMemoizedMergedChildContext = e, Oe(kt), Oe(Et), Ne(Et, e)) : Oe(kt), Ne(kt, n)
}

var Wn = null, sc = !1, Nf = !1;

function GE(e) {
    Wn === null ? Wn = [e] : Wn.push(e)
}

function jC(e) {
    sc = !0, GE(e)
}

function zr() {
    if (!Nf && Wn !== null) {
        Nf = !0;
        var e = 0, t = ge;
        try {
            var n = Wn;
            for (ge = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Wn = null, sc = !1
        } catch (i) {
            throw Wn !== null && (Wn = Wn.slice(e + 1)), vE(Zp, zr), i
        } finally {
            ge = t, Nf = !1
        }
    }
    return null
}

var Xi = [], Ji = 0, fu = null, du = 0, tn = [], nn = 0, di = null, Xn = 1, Jn = "";

function Jr(e, t) {
    Xi[Ji++] = du, Xi[Ji++] = fu, fu = e, du = t
}

function qE(e, t, n) {
    tn[nn++] = Xn, tn[nn++] = Jn, tn[nn++] = di, di = e;
    var r = Xn;
    e = Jn;
    var i = 32 - _n(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - _n(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Xn = 1 << 32 - _n(t) + i | n << i | r, Jn = o + e
    } else Xn = 1 << o | n << i | r, Jn = e
}

function lh(e) {
    e.return !== null && (Jr(e, 1), qE(e, 1, 0))
}

function uh(e) {
    for (; e === fu;) fu = Xi[--Ji], Xi[Ji] = null, du = Xi[--Ji], Xi[Ji] = null;
    for (; e === di;) di = tn[--nn], tn[nn] = null, Jn = tn[--nn], tn[nn] = null, Xn = tn[--nn], tn[nn] = null
}

var zt = null, Bt = null, Re = !1, wn = null;

function QE(e, t) {
    var n = on(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function py(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, zt = e, Bt = Rr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, zt = e, Bt = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = di !== null ? {
                id: Xn,
                overflow: Jn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = on(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, zt = e, Bt = null, !0) : !1;
        default:
            return !1
    }
}

function Pd(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Fd(e) {
    if (Re) {
        var t = Bt;
        if (t) {
            var n = t;
            if (!py(e, t)) {
                if (Pd(e)) throw Error(M(418));
                t = Rr(n.nextSibling);
                var r = zt;
                t && py(e, t) ? QE(r, n) : (e.flags = e.flags & -4097 | 2, Re = !1, zt = e)
            }
        } else {
            if (Pd(e)) throw Error(M(418));
            e.flags = e.flags & -4097 | 2, Re = !1, zt = e
        }
    }
}

function hy(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    zt = e
}

function sl(e) {
    if (e !== zt) return !1;
    if (!Re) return hy(e), Re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Rd(e.type, e.memoizedProps)), t && (t = Bt)) {
        if (Pd(e)) throw WE(), Error(M(418));
        for (; t;) QE(e, t), t = Rr(t.nextSibling)
    }
    if (hy(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(M(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Bt = Rr(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Bt = null
        }
    } else Bt = zt ? Rr(e.stateNode.nextSibling) : null;
    return !0
}

function WE() {
    for (var e = Bt; e;) e = Rr(e.nextSibling)
}

function So() {
    Bt = zt = null, Re = !1
}

function ch(e) {
    wn === null ? wn = [e] : wn.push(e)
}

var UC = fr.ReactCurrentBatchConfig;

function gn(e, t) {
    if (e && e.defaultProps) {
        t = Pe({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var pu = Br(null), hu = null, Ki = null, fh = null;

function dh() {
    fh = Ki = hu = null
}

function ph(e) {
    var t = pu.current;
    Oe(pu), e._currentValue = t
}

function Md(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function fo(e, t) {
    hu = e, fh = Ki = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Rt = !0), e.firstContext = null)
}

function ln(e) {
    var t = e._currentValue;
    if (fh !== e) if (e = {context: e, memoizedValue: t, next: null}, Ki === null) {
        if (hu === null) throw Error(M(308));
        Ki = e, hu.dependencies = {lanes: 0, firstContext: e}
    } else Ki = Ki.next = e;
    return t
}

var ni = null;

function hh(e) {
    ni === null ? ni = [e] : ni.push(e)
}

function YE(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, hh(t)) : (n.next = i.next, i.next = n), t.interleaved = n, rr(e, r)
}

function rr(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

var wr = !1;

function mh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function XE(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Kn(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function kr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (pe & 2) !== 0) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rr(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, hh(r)) : (t.next = i.next, i.next = t), r.interleaved = t, rr(e, n)
}

function Ll(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eh(e, n)
    }
}

function my(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null, o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function mu(e, t, n, r) {
    var i = e.updateQueue;
    wr = !1;
    var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a, u = l.next;
        l.next = null, s === null ? o = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0, c = u = l = null, a = o;
        do {
            var f = a.lane, p = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e:{
                    var h = e, g = a;
                    switch (f = t, p = n, g.tag) {
                        case 1:
                            if (h = g.payload, typeof h == "function") {
                                d = h.call(p, d, f);
                                break e
                            }
                            d = h;
                            break e;
                        case 3:
                            h.flags = h.flags & -65537 | 128;
                        case 0:
                            if (h = g.payload, f = typeof h == "function" ? h.call(p, d, f) : h, f == null) break e;
                            d = Pe({}, d, f);
                            break e;
                        case 2:
                            wr = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = i.effects, f === null ? i.effects = [a] : f.push(a))
            } else p = {
                eventTime: p,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = p, l = d) : c = c.next = p, s |= f;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, i.lastBaseUpdate = f, i.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        hi |= s, e.lanes = s, e.memoizedState = d
    }
}

function vy(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function") throw Error(M(191, i));
            i.call(r)
        }
    }
}

var JE = new Y0.Component().refs;

function $d(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Pe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var ac = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Ni(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = It(), i = Lr(e), o = Kn(r, i);
        o.payload = t, n != null && (o.callback = n), t = kr(e, o, i), t !== null && (Sn(t, e, i, r), Ll(t, e, i))
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = It(), i = Lr(e), o = Kn(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = kr(e, o, i), t !== null && (Sn(t, e, i, r), Ll(t, e, i))
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = It(), r = Lr(e), i = Kn(n, r);
        i.tag = 2, t != null && (i.callback = t), t = kr(e, i, r), t !== null && (Sn(t, e, r, n), Ll(t, e, r))
    }
};

function yy(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Gs(n, r) || !Gs(i, o) : !0
}

function KE(e, t, n) {
    var r = !1, i = jr, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ln(o) : (i = xt(t) ? fi : Et.current, r = t.contextTypes, o = (r = r != null) ? _o(e, i) : jr), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ac, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function gy(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ac.enqueueReplaceState(t, t.state, null)
}

function jd(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = JE, mh(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = ln(o) : (o = xt(t) ? fi : Et.current, i.context = _o(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && ($d(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ac.enqueueReplaceState(i, i.state, null), mu(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function us(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode
            }
            if (!r) throw Error(M(147, e));
            var i = r, o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function (s) {
                var a = i.refs;
                a === JE && (a = i.refs = {}), s === null ? delete a[o] : a[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e))
    }
    return e
}

function al(e, t) {
    throw e = Object.prototype.toString.call(t), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ey(e) {
    var t = e._init;
    return t(e._payload)
}

function ZE(e) {
    function t(m, y) {
        if (e) {
            var E = m.deletions;
            E === null ? (m.deletions = [y], m.flags |= 16) : E.push(y)
        }
    }

    function n(m, y) {
        if (!e) return null;
        for (; y !== null;) t(m, y), y = y.sibling;
        return null
    }

    function r(m, y) {
        for (m = new Map; y !== null;) y.key !== null ? m.set(y.key, y) : m.set(y.index, y), y = y.sibling;
        return m
    }

    function i(m, y) {
        return m = Pr(m, y), m.index = 0, m.sibling = null, m
    }

    function o(m, y, E) {
        return m.index = E, e ? (E = m.alternate, E !== null ? (E = E.index, E < y ? (m.flags |= 2, y) : E) : (m.flags |= 2, y)) : (m.flags |= 1048576, y)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function a(m, y, E, T) {
        return y === null || y.tag !== 6 ? (y = Rf(E, m.mode, T), y.return = m, y) : (y = i(y, E), y.return = m, y)
    }

    function l(m, y, E, T) {
        var R = E.type;
        return R === Hi ? c(m, y, E.props.children, T, E.key) : y !== null && (y.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Er && Ey(R) === y.type) ? (T = i(y, E.props), T.ref = us(m, y, E), T.return = m, T) : (T = Ul(E.type, E.key, E.props, null, m.mode, T), T.ref = us(m, y, E), T.return = m, T)
    }

    function u(m, y, E, T) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== E.containerInfo || y.stateNode.implementation !== E.implementation ? (y = kf(E, m.mode, T), y.return = m, y) : (y = i(y, E.children || []), y.return = m, y)
    }

    function c(m, y, E, T, R) {
        return y === null || y.tag !== 7 ? (y = li(E, m.mode, T, R), y.return = m, y) : (y = i(y, E), y.return = m, y)
    }

    function d(m, y, E) {
        if (typeof y == "string" && y !== "" || typeof y == "number") return y = Rf("" + y, m.mode, E), y.return = m, y;
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Xa:
                    return E = Ul(y.type, y.key, y.props, null, m.mode, E), E.ref = us(m, null, y), E.return = m, E;
                case zi:
                    return y = kf(y, m.mode, E), y.return = m, y;
                case Er:
                    var T = y._init;
                    return d(m, T(y._payload), E)
            }
            if (gs(y) || is(y)) return y = li(y, m.mode, E, null), y.return = m, y;
            al(m, y)
        }
        return null
    }

    function f(m, y, E, T) {
        var R = y !== null ? y.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number") return R !== null ? null : a(m, y, "" + E, T);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case Xa:
                    return E.key === R ? l(m, y, E, T) : null;
                case zi:
                    return E.key === R ? u(m, y, E, T) : null;
                case Er:
                    return R = E._init, f(m, y, R(E._payload), T)
            }
            if (gs(E) || is(E)) return R !== null ? null : c(m, y, E, T, null);
            al(m, E)
        }
        return null
    }

    function p(m, y, E, T, R) {
        if (typeof T == "string" && T !== "" || typeof T == "number") return m = m.get(E) || null, a(y, m, "" + T, R);
        if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
                case Xa:
                    return m = m.get(T.key === null ? E : T.key) || null, l(y, m, T, R);
                case zi:
                    return m = m.get(T.key === null ? E : T.key) || null, u(y, m, T, R);
                case Er:
                    var x = T._init;
                    return p(m, y, E, x(T._payload), R)
            }
            if (gs(T) || is(T)) return m = m.get(E) || null, c(y, m, T, R, null);
            al(y, T)
        }
        return null
    }

    function h(m, y, E, T) {
        for (var R = null, x = null, F = y, $ = y = 0, b = null; F !== null && $ < E.length; $++) {
            F.index > $ ? (b = F, F = null) : b = F.sibling;
            var P = f(m, F, E[$], T);
            if (P === null) {
                F === null && (F = b);
                break
            }
            e && F && P.alternate === null && t(m, F), y = o(P, y, $), x === null ? R = P : x.sibling = P, x = P, F = b
        }
        if ($ === E.length) return n(m, F), Re && Jr(m, $), R;
        if (F === null) {
            for (; $ < E.length; $++) F = d(m, E[$], T), F !== null && (y = o(F, y, $), x === null ? R = F : x.sibling = F, x = F);
            return Re && Jr(m, $), R
        }
        for (F = r(m, F); $ < E.length; $++) b = p(F, m, $, E[$], T), b !== null && (e && b.alternate !== null && F.delete(b.key === null ? $ : b.key), y = o(b, y, $), x === null ? R = b : x.sibling = b, x = b);
        return e && F.forEach(function (X) {
            return t(m, X)
        }), Re && Jr(m, $), R
    }

    function g(m, y, E, T) {
        var R = is(E);
        if (typeof R != "function") throw Error(M(150));
        if (E = R.call(E), E == null) throw Error(M(151));
        for (var x = R = null, F = y, $ = y = 0, b = null, P = E.next(); F !== null && !P.done; $++, P = E.next()) {
            F.index > $ ? (b = F, F = null) : b = F.sibling;
            var X = f(m, F, P.value, T);
            if (X === null) {
                F === null && (F = b);
                break
            }
            e && F && X.alternate === null && t(m, F), y = o(X, y, $), x === null ? R = X : x.sibling = X, x = X, F = b
        }
        if (P.done) return n(m, F), Re && Jr(m, $), R;
        if (F === null) {
            for (; !P.done; $++, P = E.next()) P = d(m, P.value, T), P !== null && (y = o(P, y, $), x === null ? R = P : x.sibling = P, x = P);
            return Re && Jr(m, $), R
        }
        for (F = r(m, F); !P.done; $++, P = E.next()) P = p(F, m, $, P.value, T), P !== null && (e && P.alternate !== null && F.delete(P.key === null ? $ : P.key), y = o(P, y, $), x === null ? R = P : x.sibling = P, x = P);
        return e && F.forEach(function (Se) {
            return t(m, Se)
        }), Re && Jr(m, $), R
    }

    function _(m, y, E, T) {
        if (typeof E == "object" && E !== null && E.type === Hi && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case Xa:
                    e:{
                        for (var R = E.key, x = y; x !== null;) {
                            if (x.key === R) {
                                if (R = E.type, R === Hi) {
                                    if (x.tag === 7) {
                                        n(m, x.sibling), y = i(x, E.props.children), y.return = m, m = y;
                                        break e
                                    }
                                } else if (x.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Er && Ey(R) === x.type) {
                                    n(m, x.sibling), y = i(x, E.props), y.ref = us(m, x, E), y.return = m, m = y;
                                    break e
                                }
                                n(m, x);
                                break
                            } else t(m, x);
                            x = x.sibling
                        }
                        E.type === Hi ? (y = li(E.props.children, m.mode, T, E.key), y.return = m, m = y) : (T = Ul(E.type, E.key, E.props, null, m.mode, T), T.ref = us(m, y, E), T.return = m, m = T)
                    }
                    return s(m);
                case zi:
                    e:{
                        for (x = E.key; y !== null;) {
                            if (y.key === x) if (y.tag === 4 && y.stateNode.containerInfo === E.containerInfo && y.stateNode.implementation === E.implementation) {
                                n(m, y.sibling), y = i(y, E.children || []), y.return = m, m = y;
                                break e
                            } else {
                                n(m, y);
                                break
                            } else t(m, y);
                            y = y.sibling
                        }
                        y = kf(E, m.mode, T), y.return = m, m = y
                    }
                    return s(m);
                case Er:
                    return x = E._init, _(m, y, x(E._payload), T)
            }
            if (gs(E)) return h(m, y, E, T);
            if (is(E)) return g(m, y, E, T);
            al(m, E)
        }
        return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, y !== null && y.tag === 6 ? (n(m, y.sibling), y = i(y, E), y.return = m, m = y) : (n(m, y), y = Rf(E, m.mode, T), y.return = m, m = y), s(m)) : n(m, y)
    }

    return _
}

var No = ZE(!0), ew = ZE(!1), ma = {}, Fn = Br(ma), Ys = Br(ma), Xs = Br(ma);

function ri(e) {
    if (e === ma) throw Error(M(174));
    return e
}

function vh(e, t) {
    switch (Ne(Xs, t), Ne(Ys, e), Ne(Fn, ma), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : yd(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = yd(t, e)
    }
    Oe(Fn), Ne(Fn, t)
}

function Io() {
    Oe(Fn), Oe(Ys), Oe(Xs)
}

function tw(e) {
    ri(Xs.current);
    var t = ri(Fn.current), n = yd(t, e.type);
    t !== n && (Ne(Ys, e), Ne(Fn, n))
}

function yh(e) {
    Ys.current === e && (Oe(Fn), Oe(Ys))
}

var xe = Br(0);

function vu(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var If = [];

function gh() {
    for (var e = 0; e < If.length; e++) If[e]._workInProgressVersionPrimary = null;
    If.length = 0
}

var Pl = fr.ReactCurrentDispatcher, bf = fr.ReactCurrentBatchConfig, pi = 0, Le = null, Ke = null, it = null, yu = !1,
    Ds = !1, Js = 0, VC = 0;

function mt() {
    throw Error(M(321))
}

function Eh(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!On(e[n], t[n])) return !1;
    return !0
}

function wh(e, t, n, r, i, o) {
    if (pi = o, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pl.current = e === null || e.memoizedState === null ? GC : qC, e = n(r, i), Ds) {
        o = 0;
        do {
            if (Ds = !1, Js = 0, 25 <= o) throw Error(M(301));
            o += 1, it = Ke = null, t.updateQueue = null, Pl.current = QC, e = n(r, i)
        } while (Ds)
    }
    if (Pl.current = gu, t = Ke !== null && Ke.next !== null, pi = 0, it = Ke = Le = null, yu = !1, t) throw Error(M(300));
    return e
}

function Th() {
    var e = Js !== 0;
    return Js = 0, e
}

function kn() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return it === null ? Le.memoizedState = it = e : it = it.next = e, it
}

function un() {
    if (Ke === null) {
        var e = Le.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Ke.next;
    var t = it === null ? Le.memoizedState : it.next;
    if (t !== null) it = t, Ke = e; else {
        if (e === null) throw Error(M(310));
        Ke = e, e = {
            memoizedState: Ke.memoizedState,
            baseState: Ke.baseState,
            baseQueue: Ke.baseQueue,
            queue: Ke.queue,
            next: null
        }, it === null ? Le.memoizedState = it = e : it = it.next = e
    }
    return it
}

function Ks(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Of(e) {
    var t = un(), n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = Ke, i = r.baseQueue, o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var a = s = null, l = null, u = o;
        do {
            var c = u.lane;
            if ((pi & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, Le.lanes |= c, hi |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a, On(r, t.memoizedState) || (Rt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, Le.lanes |= o, hi |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Af(e) {
    var t = un(), n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        On(o, t.memoizedState) || (Rt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function nw() {
}

function rw(e, t) {
    var n = Le, r = un(), i = t(), o = !On(r.memoizedState, i);
    if (o && (r.memoizedState = i, Rt = !0), r = r.queue, _h(sw.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || it !== null && it.memoizedState.tag & 1) {
        if (n.flags |= 2048, Zs(9, ow.bind(null, n, r, i, t), void 0, null), ot === null) throw Error(M(349));
        (pi & 30) !== 0 || iw(n, t, i)
    }
    return i
}

function iw(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = Le.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Le.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ow(e, t, n, r) {
    t.value = n, t.getSnapshot = r, aw(t) && lw(e)
}

function sw(e, t, n) {
    return n(function () {
        aw(t) && lw(e)
    })
}

function aw(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !On(e, n)
    } catch {
        return !0
    }
}

function lw(e) {
    var t = rr(e, 1);
    t !== null && Sn(t, e, 1, -1)
}

function wy(e) {
    var t = kn();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ks,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = HC.bind(null, Le, e), [t.memoizedState, e]
}

function Zs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Le.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Le.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function uw() {
    return un().memoizedState
}

function Fl(e, t, n, r) {
    var i = kn();
    Le.flags |= e, i.memoizedState = Zs(1 | t, n, void 0, r === void 0 ? null : r)
}

function lc(e, t, n, r) {
    var i = un();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ke !== null) {
        var s = Ke.memoizedState;
        if (o = s.destroy, r !== null && Eh(r, s.deps)) {
            i.memoizedState = Zs(t, n, o, r);
            return
        }
    }
    Le.flags |= e, i.memoizedState = Zs(1 | t, n, o, r)
}

function Ty(e, t) {
    return Fl(8390656, 8, e, t)
}

function _h(e, t) {
    return lc(2048, 8, e, t)
}

function cw(e, t) {
    return lc(4, 2, e, t)
}

function fw(e, t) {
    return lc(4, 4, e, t)
}

function dw(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function pw(e, t, n) {
    return n = n != null ? n.concat([e]) : null, lc(4, 4, dw.bind(null, t, e), n)
}

function Sh() {
}

function hw(e, t) {
    var n = un();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Eh(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function mw(e, t) {
    var n = un();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Eh(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function vw(e, t, n) {
    return (pi & 21) === 0 ? (e.baseState && (e.baseState = !1, Rt = !0), e.memoizedState = n) : (On(n, t) || (n = EE(), Le.lanes |= n, hi |= n, e.baseState = !0), t)
}

function BC(e, t) {
    var n = ge;
    ge = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = bf.transition;
    bf.transition = {};
    try {
        e(!1), t()
    } finally {
        ge = n, bf.transition = r
    }
}

function yw() {
    return un().memoizedState
}

function zC(e, t, n) {
    var r = Lr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, gw(e)) Ew(t, n); else if (n = YE(e, t, n, r), n !== null) {
        var i = It();
        Sn(n, e, r, i), ww(n, t, r)
    }
}

function HC(e, t, n) {
    var r = Lr(e), i = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (gw(e)) Ew(t, i); else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState, a = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, On(a, s)) {
                var l = t.interleaved;
                l === null ? (i.next = i, hh(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {
        } finally {
        }
        n = YE(e, t, i, r), n !== null && (i = It(), Sn(n, e, r, i), ww(n, t, r))
    }
}

function gw(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le
}

function Ew(e, t) {
    Ds = yu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ww(e, t, n) {
    if ((n & 4194240) !== 0) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, eh(e, n)
    }
}

var gu = {
    readContext: ln,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useMutableSource: mt,
    useSyncExternalStore: mt,
    useId: mt,
    unstable_isNewReconciler: !1
}, GC = {
    readContext: ln, useCallback: function (e, t) {
        return kn().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: ln, useEffect: Ty, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, Fl(4194308, 4, dw.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return Fl(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return Fl(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = kn();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = kn();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = zC.bind(null, Le, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = kn();
        return e = {current: e}, t.memoizedState = e
    }, useState: wy, useDebugValue: Sh, useDeferredValue: function (e) {
        return kn().memoizedState = e
    }, useTransition: function () {
        var e = wy(!1), t = e[0];
        return e = BC.bind(null, e[1]), kn().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = Le, i = kn();
        if (Re) {
            if (n === void 0) throw Error(M(407));
            n = n()
        } else {
            if (n = t(), ot === null) throw Error(M(349));
            (pi & 30) !== 0 || iw(r, t, n)
        }
        i.memoizedState = n;
        var o = {value: n, getSnapshot: t};
        return i.queue = o, Ty(sw.bind(null, r, o, e), [e]), r.flags |= 2048, Zs(9, ow.bind(null, r, o, n, t), void 0, null), n
    }, useId: function () {
        var e = kn(), t = ot.identifierPrefix;
        if (Re) {
            var n = Jn, r = Xn;
            n = (r & ~(1 << 32 - _n(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Js++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = VC++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, qC = {
    readContext: ln,
    useCallback: hw,
    useContext: ln,
    useEffect: _h,
    useImperativeHandle: pw,
    useInsertionEffect: cw,
    useLayoutEffect: fw,
    useMemo: mw,
    useReducer: Of,
    useRef: uw,
    useState: function () {
        return Of(Ks)
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
        var t = un();
        return vw(t, Ke.memoizedState, e)
    },
    useTransition: function () {
        var e = Of(Ks)[0], t = un().memoizedState;
        return [e, t]
    },
    useMutableSource: nw,
    useSyncExternalStore: rw,
    useId: yw,
    unstable_isNewReconciler: !1
}, QC = {
    readContext: ln,
    useCallback: hw,
    useContext: ln,
    useEffect: _h,
    useImperativeHandle: pw,
    useInsertionEffect: cw,
    useLayoutEffect: fw,
    useMemo: mw,
    useReducer: Af,
    useRef: uw,
    useState: function () {
        return Af(Ks)
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
        var t = un();
        return Ke === null ? t.memoizedState = e : vw(t, Ke.memoizedState, e)
    },
    useTransition: function () {
        var e = Af(Ks)[0], t = un().memoizedState;
        return [e, t]
    },
    useMutableSource: nw,
    useSyncExternalStore: rw,
    useId: yw,
    unstable_isNewReconciler: !1
};

function bo(e, t) {
    try {
        var n = "", r = t;
        do n += TA(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {value: e, source: t, stack: i, digest: null}
}

function Cf(e, t, n) {
    return {value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null}
}

function Ud(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var WC = typeof WeakMap == "function" ? WeakMap : Map;

function Tw(e, t, n) {
    n = Kn(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        wu || (wu = !0, Xd = r), Ud(e, t)
    }, n
}

function _w(e, t, n) {
    n = Kn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            Ud(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function () {
        Ud(e, t), typeof r != "function" && (xr === null ? xr = new Set([this]) : xr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {componentStack: s !== null ? s : ""})
    }), n
}

function _y(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new WC;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = lD.bind(null, e, t, n), t.then(e, e))
}

function Sy(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ny(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Kn(-1, 1), t.tag = 2, kr(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
}

var YC = fr.ReactCurrentOwner, Rt = !1;

function St(e, t, n, r) {
    t.child = e === null ? ew(t, null, n, r) : No(t, e.child, n, r)
}

function Iy(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return fo(t, i), r = wh(e, t, n, r, o, i), n = Th(), e !== null && !Rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ir(e, t, i)) : (Re && n && lh(t), t.flags |= 1, St(e, t, r, i), t.child)
}

function by(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Rh(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Sw(e, t, o, r, i)) : (e = Ul(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, (e.lanes & i) === 0) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Gs, n(s, r) && e.ref === t.ref) return ir(e, t, i)
    }
    return t.flags |= 1, e = Pr(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Sw(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Gs(o, r) && e.ref === t.ref) if (Rt = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (Rt = !0); else return t.lanes = e.lanes, ir(e, t, i)
    }
    return Vd(e, t, n, r, i)
}

function Nw(e, t, n) {
    var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Ne(eo, Ut), Ut |= n; else {
        if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }, t.updateQueue = null, Ne(eo, Ut), Ut |= e, null;
        t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, r = o !== null ? o.baseLanes : n, Ne(eo, Ut), Ut |= r
    } else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ne(eo, Ut), Ut |= r;
    return St(e, t, i, n), t.child
}

function Iw(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Vd(e, t, n, r, i) {
    var o = xt(n) ? fi : Et.current;
    return o = _o(t, o), fo(t, i), n = wh(e, t, n, r, o, i), r = Th(), e !== null && !Rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ir(e, t, i)) : (Re && r && lh(t), t.flags |= 1, St(e, t, n, i), t.child)
}

function Oy(e, t, n, r, i) {
    if (xt(n)) {
        var o = !0;
        cu(t)
    } else o = !1;
    if (fo(t, i), t.stateNode === null) Ml(e, t), KE(t, n, r), jd(t, n, r, i), r = !0; else if (e === null) {
        var s = t.stateNode, a = t.memoizedProps;
        s.props = a;
        var l = s.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = ln(u) : (u = xt(n) ? fi : Et.current, u = _o(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && gy(t, s, r, u), wr = !1;
        var f = t.memoizedState;
        s.state = f, mu(t, r, s, i), l = t.memoizedState, a !== r || f !== l || kt.current || wr ? (typeof c == "function" && ($d(t, n, c, r), l = t.memoizedState), (a = wr || yy(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, XE(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : gn(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ln(l) : (l = xt(n) ? fi : Et.current, l = _o(t, l));
        var p = n.getDerivedStateFromProps;
        (c = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && gy(t, s, r, l), wr = !1, f = t.memoizedState, s.state = f, mu(t, r, s, i);
        var h = t.memoizedState;
        a !== d || f !== h || kt.current || wr ? (typeof p == "function" && ($d(t, n, p, r), h = t.memoizedState), (u = wr || yy(t, n, u, r, f, h, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Bd(e, t, n, r, o, i)
}

function Bd(e, t, n, r, i, o) {
    Iw(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && dy(t, n, !1), ir(e, t, o);
    r = t.stateNode, YC.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = No(t, e.child, null, o), t.child = No(t, null, a, o)) : St(e, t, a, o), t.memoizedState = r.state, i && dy(t, n, !0), t.child
}

function bw(e) {
    var t = e.stateNode;
    t.pendingContext ? fy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fy(e, t.context, !1), vh(e, t.containerInfo)
}

function Ay(e, t, n, r, i) {
    return So(), ch(i), t.flags |= 256, St(e, t, n, r), t.child
}

var zd = {dehydrated: null, treeContext: null, retryLane: 0};

function Hd(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function Ow(e, t, n) {
    var r = t.pendingProps, i = xe.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ne(xe, i & 1), e === null) return Fd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = fc(s, r, 0, null), e = li(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Hd(n), t.memoizedState = zd, e) : Nh(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return XC(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var l = {mode: "hidden", children: r.children};
        return (s & 1) === 0 && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Pr(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Pr(a, o) : (o = li(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Hd(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = zd, r
    }
    return o = e.child, e = o.sibling, r = Pr(o, {
        mode: "visible",
        children: r.children
    }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Nh(e, t) {
    return t = fc({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function ll(e, t, n, r) {
    return r !== null && ch(r), No(t, e.child, null, n), e = Nh(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function XC(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Cf(Error(M(422))), ll(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = fc({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = li(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && No(t, e.child, null, s), t.child.memoizedState = Hd(s), t.memoizedState = zd, o);
    if ((t.mode & 1) === 0) return ll(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, o = Error(M(419)), r = Cf(o, r, void 0), ll(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, Rt || a) {
        if (r = ot, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, rr(e, i), Sn(r, e, i, -1))
        }
        return Dh(), r = Cf(Error(M(421))), ll(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = uD.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Bt = Rr(i.nextSibling), zt = t, Re = !0, wn = null, e !== null && (tn[nn++] = Xn, tn[nn++] = Jn, tn[nn++] = di, Xn = e.id, Jn = e.overflow, di = t), t = Nh(t, r.children), t.flags |= 4096, t)
}

function Cy(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Md(e.return, t, n)
}

function Df(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function Aw(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, o = r.tail;
    if (St(e, t, r.children, n), r = xe.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && (e.flags & 128) !== 0) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Cy(e, n, t); else if (e.tag === 19) Cy(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Ne(xe, r), (t.mode & 1) === 0) t.memoizedState = null; else switch (i) {
        case"forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && vu(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Df(t, !1, i, n, o);
            break;
        case"backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && vu(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Df(t, !0, n, null, o);
            break;
        case"together":
            Df(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ml(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function ir(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), hi |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = Pr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Pr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function JC(e, t, n) {
    switch (t.tag) {
        case 3:
            bw(t), So();
            break;
        case 5:
            tw(t);
            break;
        case 1:
            xt(t.type) && cu(t);
            break;
        case 4:
            vh(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, i = t.memoizedProps.value;
            Ne(pu, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Ne(xe, xe.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Ow(e, t, n) : (Ne(xe, xe.current & 1), e = ir(e, t, n), e !== null ? e.sibling : null);
            Ne(xe, xe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (r) return Aw(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ne(xe, xe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Nw(e, t, n)
    }
    return ir(e, t, n)
}

var Cw, Gd, Dw, Rw;
Cw = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Gd = function () {
};
Dw = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, ri(Fn.current);
        var o = null;
        switch (n) {
            case"input":
                i = pd(e, i), r = pd(e, r), o = [];
                break;
            case"select":
                i = Pe({}, i, {value: void 0}), r = Pe({}, r, {value: void 0}), o = [];
                break;
            case"textarea":
                i = vd(e, i), r = vd(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lu)
        }
        gd(n, r);
        var s;
        n = null;
        for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
            var a = i[u];
            for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && ($s.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
                for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
            } else n || (o || (o = []), o.push(u, n)), n = l; else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && ($s.hasOwnProperty(u) ? (l != null && u === "onScroll" && be("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Rw = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function cs(e, t) {
    if (!Re) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function vt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling; else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function KC(e, t, n) {
    var r = t.pendingProps;
    switch (uh(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return vt(t), null;
        case 1:
            return xt(t.type) && uu(), vt(t), null;
        case 3:
            return r = t.stateNode, Io(), Oe(kt), Oe(Et), gh(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (sl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, wn !== null && (Zd(wn), wn = null))), Gd(e, t), vt(t), null;
        case 5:
            yh(t);
            var i = ri(Xs.current);
            if (n = t.type, e !== null && t.stateNode != null) Dw(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return vt(t), null
                }
                if (e = ri(Fn.current), sl(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[xn] = t, r[Ws] = o, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            be("cancel", r), be("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            be("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (i = 0; i < ws.length; i++) be(ws[i], r);
                            break;
                        case"source":
                            be("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            be("error", r), be("load", r);
                            break;
                        case"details":
                            be("toggle", r);
                            break;
                        case"input":
                            $v(r, o), be("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!o.multiple}, be("invalid", r);
                            break;
                        case"textarea":
                            Uv(r, o), be("invalid", r)
                    }
                    gd(n, o), i = null;
                    for (var s in o) if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ol(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ol(r.textContent, a, e), i = ["children", "" + a]) : $s.hasOwnProperty(s) && a != null && s === "onScroll" && be("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            Ja(r), jv(r, o, !0);
                            break;
                        case"textarea":
                            Ja(r), Vv(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = lu)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = iE(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {is: r.is}) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[xn] = t, e[Ws] = r, Cw(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (s = Ed(n, r), n) {
                            case"dialog":
                                be("cancel", e), be("close", e), i = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                be("load", e), i = r;
                                break;
                            case"video":
                            case"audio":
                                for (i = 0; i < ws.length; i++) be(ws[i], e);
                                i = r;
                                break;
                            case"source":
                                be("error", e), i = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                be("error", e), be("load", e), i = r;
                                break;
                            case"details":
                                be("toggle", e), i = r;
                                break;
                            case"input":
                                $v(e, r), i = pd(e, r), be("invalid", e);
                                break;
                            case"option":
                                i = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, i = Pe({}, r, {value: void 0}), be("invalid", e);
                                break;
                            case"textarea":
                                Uv(e, r), i = vd(e, r), be("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        gd(n, i), a = i;
                        for (o in a) if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? aE(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && oE(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && js(e, l) : typeof l == "number" && js(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && ($s.hasOwnProperty(o) ? l != null && o === "onScroll" && be("scroll", e) : l != null && Wp(e, o, l, s))
                        }
                        switch (n) {
                            case"input":
                                Ja(e), jv(e, r, !1);
                                break;
                            case"textarea":
                                Ja(e), Vv(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + $r(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? ao(e, !!r.multiple, o, !1) : r.defaultValue != null && ao(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = lu)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return vt(t), null;
        case 6:
            if (e && t.stateNode != null) Rw(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (n = ri(Xs.current), ri(Fn.current), sl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[xn] = t, (o = r.nodeValue !== n) && (e = zt, e !== null)) switch (e.tag) {
                        case 3:
                            ol(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ol(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xn] = t, t.stateNode = r
            }
            return vt(t), null;
        case 13:
            if (Oe(xe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Re && Bt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) WE(), So(), t.flags |= 98560, o = !1; else if (o = sl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(M(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(M(317));
                        o[xn] = t
                    } else So(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                    vt(t), o = !1
                } else wn !== null && (Zd(wn), wn = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (xe.current & 1) !== 0 ? et === 0 && (et = 3) : Dh())), t.updateQueue !== null && (t.flags |= 4), vt(t), null);
        case 4:
            return Io(), Gd(e, t), e === null && qs(t.stateNode.containerInfo), vt(t), null;
        case 10:
            return ph(t.type._context), vt(t), null;
        case 17:
            return xt(t.type) && uu(), vt(t), null;
        case 19:
            if (Oe(xe), o = t.memoizedState, o === null) return vt(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) cs(o, !1); else {
                if (et !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null;) {
                    if (s = vu(e), s !== null) {
                        for (t.flags |= 128, cs(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Ne(xe, xe.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                o.tail !== null && He() > Oo && (t.flags |= 128, r = !0, cs(o, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = vu(s), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), cs(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Re) return vt(t), null
                } else 2 * He() - o.renderingStartTime > Oo && n !== 1073741824 && (t.flags |= 128, r = !0, cs(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = He(), t.sibling = null, n = xe.current, Ne(xe, r ? n & 1 | 2 : n & 1), t) : (vt(t), null);
        case 22:
        case 23:
            return Ch(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(M(156, t.tag))
}

function ZC(e, t) {
    switch (uh(t), t.tag) {
        case 1:
            return xt(t.type) && uu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Io(), Oe(kt), Oe(Et), gh(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return yh(t), null;
        case 13:
            if (Oe(xe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(M(340));
                So()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Oe(xe), null;
        case 4:
            return Io(), null;
        case 10:
            return ph(t.type._context), null;
        case 22:
        case 23:
            return Ch(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var ul = !1, gt = !1, eD = typeof WeakSet == "function" ? WeakSet : Set, G = null;

function Zi(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        Fe(e, t, r)
    } else n.current = null
}

function qd(e, t, n) {
    try {
        n()
    } catch (r) {
        Fe(e, t, r)
    }
}

var Dy = !1;

function tD(e, t) {
    if (Cd = ou, e = PE(), ah(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0, a = -1, l = -1, u = 0, c = 0, d = e, f = null;
                t:for (; ;) {
                    for (var p; d !== n || i !== 0 && d.nodeType !== 3 || (a = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (p = d.firstChild) !== null;) f = d, d = p;
                    for (; ;) {
                        if (d === e) break t;
                        if (f === n && ++u === i && (a = s), f === o && ++c === r && (l = s), (p = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = p
                }
                n = a === -1 || l === -1 ? null : {start: a, end: l}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (Dd = {
        focusedElem: e,
        selectionRange: n
    }, ou = !1, G = t; G !== null;) if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e; else for (; G !== null;) {
        t = G;
        try {
            var h = t.alternate;
            if ((t.flags & 1024) !== 0) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (h !== null) {
                        var g = h.memoizedProps, _ = h.memoizedState, m = t.stateNode,
                            y = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : gn(t.type, g), _);
                        m.__reactInternalSnapshotBeforeUpdate = y
                    }
                    break;
                case 3:
                    var E = t.stateNode.containerInfo;
                    E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(M(163))
            }
        } catch (T) {
            Fe(t, t.return, T)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, G = e;
            break
        }
        G = t.return
    }
    return h = Dy, Dy = !1, h
}

function Rs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && qd(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function uc(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Qd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function kw(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, kw(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xn], delete t[Ws], delete t[xd], delete t[MC], delete t[$C])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function xw(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Ry(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || xw(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Wd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lu)); else if (r !== 4 && (e = e.child, e !== null)) for (Wd(e, t, n), e = e.sibling; e !== null;) Wd(e, t, n), e = e.sibling
}

function Yd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (Yd(e, t, n), e = e.sibling; e !== null;) Yd(e, t, n), e = e.sibling
}

var lt = null, En = !1;

function hr(e, t, n) {
    for (n = n.child; n !== null;) Lw(e, t, n), n = n.sibling
}

function Lw(e, t, n) {
    if (Pn && typeof Pn.onCommitFiberUnmount == "function") try {
        Pn.onCommitFiberUnmount(tc, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            gt || Zi(n, t);
        case 6:
            var r = lt, i = En;
            lt = null, hr(e, t, n), lt = r, En = i, lt !== null && (En ? (e = lt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : lt.removeChild(n.stateNode));
            break;
        case 18:
            lt !== null && (En ? (e = lt, n = n.stateNode, e.nodeType === 8 ? Sf(e.parentNode, n) : e.nodeType === 1 && Sf(e, n), zs(e)) : Sf(lt, n.stateNode));
            break;
        case 4:
            r = lt, i = En, lt = n.stateNode.containerInfo, En = !0, hr(e, t, n), lt = r, En = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!gt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i, s = o.destroy;
                    o = o.tag, s !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && qd(n, t, s), i = i.next
                } while (i !== r)
            }
            hr(e, t, n);
            break;
        case 1:
            if (!gt && (Zi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Fe(n, t, a)
            }
            hr(e, t, n);
            break;
        case 21:
            hr(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (gt = (r = gt) || n.memoizedState !== null, hr(e, t, n), gt = r) : hr(e, t, n);
            break;
        default:
            hr(e, t, n)
    }
}

function ky(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new eD), t.forEach(function (r) {
            var i = cD.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function vn(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var o = e, s = t, a = s;
            e:for (; a !== null;) {
                switch (a.tag) {
                    case 5:
                        lt = a.stateNode, En = !1;
                        break e;
                    case 3:
                        lt = a.stateNode.containerInfo, En = !0;
                        break e;
                    case 4:
                        lt = a.stateNode.containerInfo, En = !0;
                        break e
                }
                a = a.return
            }
            if (lt === null) throw Error(M(160));
            Lw(o, s, i), lt = null, En = !1;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null
        } catch (u) {
            Fe(i, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) Pw(t, e), t = t.sibling
}

function Pw(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (vn(t, e), Rn(e), r & 4) {
                try {
                    Rs(3, e, e.return), uc(3, e)
                } catch (g) {
                    Fe(e, e.return, g)
                }
                try {
                    Rs(5, e, e.return)
                } catch (g) {
                    Fe(e, e.return, g)
                }
            }
            break;
        case 1:
            vn(t, e), Rn(e), r & 512 && n !== null && Zi(n, n.return);
            break;
        case 5:
            if (vn(t, e), Rn(e), r & 512 && n !== null && Zi(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    js(i, "")
                } catch (g) {
                    Fe(e, e.return, g)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && o.type === "radio" && o.name != null && nE(i, o), Ed(a, s);
                    var u = Ed(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s], d = l[s + 1];
                        c === "style" ? aE(i, d) : c === "dangerouslySetInnerHTML" ? oE(i, d) : c === "children" ? js(i, d) : Wp(i, c, d, u)
                    }
                    switch (a) {
                        case"input":
                            hd(i, o);
                            break;
                        case"textarea":
                            rE(i, o);
                            break;
                        case"select":
                            var f = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var p = o.value;
                            p != null ? ao(i, !!o.multiple, p, !1) : f !== !!o.multiple && (o.defaultValue != null ? ao(i, !!o.multiple, o.defaultValue, !0) : ao(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Ws] = o
                } catch (g) {
                    Fe(e, e.return, g)
                }
            }
            break;
        case 6:
            if (vn(t, e), Rn(e), r & 4) {
                if (e.stateNode === null) throw Error(M(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (g) {
                    Fe(e, e.return, g)
                }
            }
            break;
        case 3:
            if (vn(t, e), Rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                zs(t.containerInfo)
            } catch (g) {
                Fe(e, e.return, g)
            }
            break;
        case 4:
            vn(t, e), Rn(e);
            break;
        case 13:
            vn(t, e), Rn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Oh = He())), r & 4 && ky(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (gt = (u = gt) || c, vn(t, e), gt = u) : vn(t, e), Rn(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0) for (G = e, c = e.child; c !== null;) {
                    for (d = G = c; G !== null;) {
                        switch (f = G, p = f.child, f.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Rs(4, f, f.return);
                                break;
                            case 1:
                                Zi(f, f.return);
                                var h = f.stateNode;
                                if (typeof h.componentWillUnmount == "function") {
                                    r = f, n = f.return;
                                    try {
                                        t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                                    } catch (g) {
                                        Fe(r, n, g)
                                    }
                                }
                                break;
                            case 5:
                                Zi(f, f.return);
                                break;
                            case 22:
                                if (f.memoizedState !== null) {
                                    Ly(d);
                                    continue
                                }
                        }
                        p !== null ? (p.return = f, G = p) : Ly(d)
                    }
                    c = c.sibling
                }
                e:for (c = null, d = e; ;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = sE("display", s))
                            } catch (g) {
                                Fe(e, e.return, g)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            Fe(e, e.return, g)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            vn(t, e), Rn(e), r & 4 && ky(e);
            break;
        case 21:
            break;
        default:
            vn(t, e), Rn(e)
    }
}

function Rn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (xw(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (js(i, ""), r.flags &= -33);
                    var o = Ry(e);
                    Yd(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo, a = Ry(e);
                    Wd(e, a, s);
                    break;
                default:
                    throw Error(M(161))
            }
        } catch (l) {
            Fe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function nD(e, t, n) {
    G = e, Fw(e)
}

function Fw(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null;) {
        var i = G, o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ul;
            if (!s) {
                var a = i.alternate, l = a !== null && a.memoizedState !== null || gt;
                a = ul;
                var u = gt;
                if (ul = s, (gt = l) && !u) for (G = i; G !== null;) s = G, l = s.child, s.tag === 22 && s.memoizedState !== null ? Py(i) : l !== null ? (l.return = s, G = l) : Py(i);
                for (; o !== null;) G = o, Fw(o), o = o.sibling;
                G = i, ul = a, gt = u
            }
            xy(e)
        } else (i.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = i, G = o) : xy(e)
    }
}

function xy(e) {
    for (; G !== null;) {
        var t = G;
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate;
            try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        gt || uc(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !gt) if (n === null) r.componentDidMount(); else {
                            var i = t.elementType === t.type ? n.memoizedProps : gn(t.type, n.memoizedProps);
                            r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var o = t.updateQueue;
                        o !== null && vy(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            vy(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case"img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && zs(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                }
                gt || t.flags & 512 && Qd(t)
            } catch (f) {
                Fe(t, t.return, f)
            }
        }
        if (t === e) {
            G = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, G = n;
            break
        }
        G = t.return
    }
}

function Ly(e) {
    for (; G !== null;) {
        var t = G;
        if (t === e) {
            G = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, G = n;
            break
        }
        G = t.return
    }
}

function Py(e) {
    for (; G !== null;) {
        var t = G;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        uc(4, t)
                    } catch (l) {
                        Fe(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Fe(t, i, l)
                        }
                    }
                    var o = t.return;
                    try {
                        Qd(t)
                    } catch (l) {
                        Fe(t, o, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Qd(t)
                    } catch (l) {
                        Fe(t, s, l)
                    }
            }
        } catch (l) {
            Fe(t, t.return, l)
        }
        if (t === e) {
            G = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, G = a;
            break
        }
        G = t.return
    }
}

var rD = Math.ceil, Eu = fr.ReactCurrentDispatcher, Ih = fr.ReactCurrentOwner, an = fr.ReactCurrentBatchConfig, pe = 0,
    ot = null, Qe = null, ft = 0, Ut = 0, eo = Br(0), et = 0, ea = null, hi = 0, cc = 0, bh = 0, ks = null, Ct = null,
    Oh = 0, Oo = 1 / 0, Qn = null, wu = !1, Xd = null, xr = null, cl = !1, Ir = null, Tu = 0, xs = 0, Jd = null,
    $l = -1, jl = 0;

function It() {
    return (pe & 6) !== 0 ? He() : $l !== -1 ? $l : $l = He()
}

function Lr(e) {
    return (e.mode & 1) === 0 ? 1 : (pe & 2) !== 0 && ft !== 0 ? ft & -ft : UC.transition !== null ? (jl === 0 && (jl = EE()), jl) : (e = ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bE(e.type)), e)
}

function Sn(e, t, n, r) {
    if (50 < xs) throw xs = 0, Jd = null, Error(M(185));
    da(e, n, r), ((pe & 2) === 0 || e !== ot) && (e === ot && ((pe & 2) === 0 && (cc |= n), et === 4 && Sr(e, ft)), Lt(e, r), n === 1 && pe === 0 && (t.mode & 1) === 0 && (Oo = He() + 500, sc && zr()))
}

function Lt(e, t) {
    var n = e.callbackNode;
    UA(e, t);
    var r = iu(e, e === ot ? ft : 0);
    if (r === 0) n !== null && Hv(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Hv(n), t === 1) e.tag === 0 ? jC(Fy.bind(null, e)) : GE(Fy.bind(null, e)), PC(function () {
            (pe & 6) === 0 && zr()
        }), n = null; else {
            switch (wE(r)) {
                case 1:
                    n = Zp;
                    break;
                case 4:
                    n = yE;
                    break;
                case 16:
                    n = ru;
                    break;
                case 536870912:
                    n = gE;
                    break;
                default:
                    n = ru
            }
            n = Hw(n, Mw.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Mw(e, t) {
    if ($l = -1, jl = 0, (pe & 6) !== 0) throw Error(M(327));
    var n = e.callbackNode;
    if (po() && e.callbackNode !== n) return null;
    var r = iu(e, e === ot ? ft : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = _u(e, r); else {
        t = r;
        var i = pe;
        pe |= 2;
        var o = jw();
        (ot !== e || ft !== t) && (Qn = null, Oo = He() + 500, ai(e, t));
        do try {
            sD();
            break
        } catch (a) {
            $w(e, a)
        } while (1);
        dh(), Eu.current = o, pe = i, Qe !== null ? t = 0 : (ot = null, ft = 0, t = et)
    }
    if (t !== 0) {
        if (t === 2 && (i = Nd(e), i !== 0 && (r = i, t = Kd(e, i))), t === 1) throw n = ea, ai(e, 0), Sr(e, r), Lt(e, He()), n;
        if (t === 6) Sr(e, r); else {
            if (i = e.current.alternate, (r & 30) === 0 && !iD(i) && (t = _u(e, r), t === 2 && (o = Nd(e), o !== 0 && (r = o, t = Kd(e, o))), t === 1)) throw n = ea, ai(e, 0), Sr(e, r), Lt(e, He()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    Kr(e, Ct, Qn);
                    break;
                case 3:
                    if (Sr(e, r), (r & 130023424) === r && (t = Oh + 500 - He(), 10 < t)) {
                        if (iu(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            It(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = kd(Kr.bind(null, e, Ct, Qn), t);
                        break
                    }
                    Kr(e, Ct, Qn);
                    break;
                case 4:
                    if (Sr(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - _n(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = He() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rD(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = kd(Kr.bind(null, e, Ct, Qn), r);
                        break
                    }
                    Kr(e, Ct, Qn);
                    break;
                case 5:
                    Kr(e, Ct, Qn);
                    break;
                default:
                    throw Error(M(329))
            }
        }
    }
    return Lt(e, He()), e.callbackNode === n ? Mw.bind(null, e) : null
}

function Kd(e, t) {
    var n = ks;
    return e.current.memoizedState.isDehydrated && (ai(e, t).flags |= 256), e = _u(e, t), e !== 2 && (t = Ct, Ct = n, t !== null && Zd(t)), e
}

function Zd(e) {
    Ct === null ? Ct = e : Ct.push.apply(Ct, e)
}

function iD(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var i = n[r], o = i.getSnapshot;
                i = i.value;
                try {
                    if (!On(o(), i)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Sr(e, t) {
    for (t &= ~bh, t &= ~cc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - _n(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Fy(e) {
    if ((pe & 6) !== 0) throw Error(M(327));
    po();
    var t = iu(e, 0);
    if ((t & 1) === 0) return Lt(e, He()), null;
    var n = _u(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Nd(e);
        r !== 0 && (t = r, n = Kd(e, r))
    }
    if (n === 1) throw n = ea, ai(e, 0), Sr(e, t), Lt(e, He()), n;
    if (n === 6) throw Error(M(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kr(e, Ct, Qn), Lt(e, He()), null
}

function Ah(e, t) {
    var n = pe;
    pe |= 1;
    try {
        return e(t)
    } finally {
        pe = n, pe === 0 && (Oo = He() + 500, sc && zr())
    }
}

function mi(e) {
    Ir !== null && Ir.tag === 0 && (pe & 6) === 0 && po();
    var t = pe;
    pe |= 1;
    var n = an.transition, r = ge;
    try {
        if (an.transition = null, ge = 1, e) return e()
    } finally {
        ge = r, an.transition = n, pe = t, (pe & 6) === 0 && zr()
    }
}

function Ch() {
    Ut = eo.current, Oe(eo)
}

function ai(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, LC(n)), Qe !== null) for (n = Qe.return; n !== null;) {
        var r = n;
        switch (uh(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && uu();
                break;
            case 3:
                Io(), Oe(kt), Oe(Et), gh();
                break;
            case 5:
                yh(r);
                break;
            case 4:
                Io();
                break;
            case 13:
                Oe(xe);
                break;
            case 19:
                Oe(xe);
                break;
            case 10:
                ph(r.type._context);
                break;
            case 22:
            case 23:
                Ch()
        }
        n = n.return
    }
    if (ot = e, Qe = e = Pr(e.current, null), ft = Ut = t, et = 0, ea = null, bh = cc = hi = 0, Ct = ks = null, ni !== null) {
        for (t = 0; t < ni.length; t++) if (n = ni[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, o = n.pending;
            if (o !== null) {
                var s = o.next;
                o.next = i, r.next = s
            }
            n.pending = r
        }
        ni = null
    }
    return e
}

function $w(e, t) {
    do {
        var n = Qe;
        try {
            if (dh(), Pl.current = gu, yu) {
                for (var r = Le.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                yu = !1
            }
            if (pi = 0, it = Ke = Le = null, Ds = !1, Js = 0, Ih.current = null, n === null || n.return === null) {
                et = 1, ea = t, Qe = null;
                break
            }
            e:{
                var o = e, s = n.return, a = n, l = t;
                if (t = ft, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l, c = a, d = c.tag;
                    if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var p = Sy(s);
                    if (p !== null) {
                        p.flags &= -257, Ny(p, s, a, o, t), p.mode & 1 && _y(o, u, t), t = p, l = u;
                        var h = t.updateQueue;
                        if (h === null) {
                            var g = new Set;
                            g.add(l), t.updateQueue = g
                        } else h.add(l);
                        break e
                    } else {
                        if ((t & 1) === 0) {
                            _y(o, u, t), Dh();
                            break e
                        }
                        l = Error(M(426))
                    }
                } else if (Re && a.mode & 1) {
                    var _ = Sy(s);
                    if (_ !== null) {
                        (_.flags & 65536) === 0 && (_.flags |= 256), Ny(_, s, a, o, t), ch(bo(l, a));
                        break e
                    }
                }
                o = l = bo(l, a), et !== 4 && (et = 2), ks === null ? ks = [o] : ks.push(o), o = s;
                do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var m = Tw(o, l, t);
                            my(o, m);
                            break e;
                        case 1:
                            a = l;
                            var y = o.type, E = o.stateNode;
                            if ((o.flags & 128) === 0 && (typeof y.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (xr === null || !xr.has(E)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var T = _w(o, a, t);
                                my(o, T);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Vw(n)
        } catch (R) {
            t = R, Qe === n && n !== null && (Qe = n = n.return);
            continue
        }
        break
    } while (1)
}

function jw() {
    var e = Eu.current;
    return Eu.current = gu, e === null ? gu : e
}

function Dh() {
    (et === 0 || et === 3 || et === 2) && (et = 4), ot === null || (hi & 268435455) === 0 && (cc & 268435455) === 0 || Sr(ot, ft)
}

function _u(e, t) {
    var n = pe;
    pe |= 2;
    var r = jw();
    (ot !== e || ft !== t) && (Qn = null, ai(e, t));
    do try {
        oD();
        break
    } catch (i) {
        $w(e, i)
    } while (1);
    if (dh(), pe = n, Eu.current = r, Qe !== null) throw Error(M(261));
    return ot = null, ft = 0, et
}

function oD() {
    for (; Qe !== null;) Uw(Qe)
}

function sD() {
    for (; Qe !== null && !RA();) Uw(Qe)
}

function Uw(e) {
    var t = zw(e.alternate, e, Ut);
    e.memoizedProps = e.pendingProps, t === null ? Vw(e) : Qe = t, Ih.current = null
}

function Vw(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
            if (n = KC(n, t, Ut), n !== null) {
                Qe = n;
                return
            }
        } else {
            if (n = ZC(n, t), n !== null) {
                n.flags &= 32767, Qe = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                et = 6, Qe = null;
                return
            }
        }
        if (t = t.sibling, t !== null) {
            Qe = t;
            return
        }
        Qe = t = e
    } while (t !== null);
    et === 0 && (et = 5)
}

function Kr(e, t, n) {
    var r = ge, i = an.transition;
    try {
        an.transition = null, ge = 1, aD(e, t, n, r)
    } finally {
        an.transition = i, ge = r
    }
    return null
}

function aD(e, t, n, r) {
    do po(); while (Ir !== null);
    if ((pe & 6) !== 0) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(M(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (VA(e, o), e === ot && (Qe = ot = null, ft = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || cl || (cl = !0, Hw(ru, function () {
        return po(), null
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
        o = an.transition, an.transition = null;
        var s = ge;
        ge = 1;
        var a = pe;
        pe |= 4, Ih.current = null, tD(e, n), Pw(n, e), OC(Dd), ou = !!Cd, Dd = Cd = null, e.current = n, nD(n), kA(), pe = a, ge = s, an.transition = o
    } else e.current = n;
    if (cl && (cl = !1, Ir = e, Tu = i), o = e.pendingLanes, o === 0 && (xr = null), PA(n.stateNode), Lt(e, He()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
        componentStack: i.stack,
        digest: i.digest
    });
    if (wu) throw wu = !1, e = Xd, Xd = null, e;
    return (Tu & 1) !== 0 && e.tag !== 0 && po(), o = e.pendingLanes, (o & 1) !== 0 ? e === Jd ? xs++ : (xs = 0, Jd = e) : xs = 0, zr(), null
}

function po() {
    if (Ir !== null) {
        var e = wE(Tu), t = an.transition, n = ge;
        try {
            if (an.transition = null, ge = 16 > e ? 16 : e, Ir === null) var r = !1; else {
                if (e = Ir, Ir = null, Tu = 0, (pe & 6) !== 0) throw Error(M(331));
                var i = pe;
                for (pe |= 4, G = e.current; G !== null;) {
                    var o = G, s = o.child;
                    if ((G.flags & 16) !== 0) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (G = u; G !== null;) {
                                    var c = G;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Rs(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, G = d; else for (; G !== null;) {
                                        c = G;
                                        var f = c.sibling, p = c.return;
                                        if (kw(c), c === u) {
                                            G = null;
                                            break
                                        }
                                        if (f !== null) {
                                            f.return = p, G = f;
                                            break
                                        }
                                        G = p
                                    }
                                }
                            }
                            var h = o.alternate;
                            if (h !== null) {
                                var g = h.child;
                                if (g !== null) {
                                    h.child = null;
                                    do {
                                        var _ = g.sibling;
                                        g.sibling = null, g = _
                                    } while (g !== null)
                                }
                            }
                            G = o
                        }
                    }
                    if ((o.subtreeFlags & 2064) !== 0 && s !== null) s.return = o, G = s; else e:for (; G !== null;) {
                        if (o = G, (o.flags & 2048) !== 0) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Rs(9, o, o.return)
                        }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, G = m;
                            break e
                        }
                        G = o.return
                    }
                }
                var y = e.current;
                for (G = y; G !== null;) {
                    s = G;
                    var E = s.child;
                    if ((s.subtreeFlags & 2064) !== 0 && E !== null) E.return = s, G = E; else e:for (s = y; G !== null;) {
                        if (a = G, (a.flags & 2048) !== 0) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    uc(9, a)
                            }
                        } catch (R) {
                            Fe(a, a.return, R)
                        }
                        if (a === s) {
                            G = null;
                            break e
                        }
                        var T = a.sibling;
                        if (T !== null) {
                            T.return = a.return, G = T;
                            break e
                        }
                        G = a.return
                    }
                }
                if (pe = i, zr(), Pn && typeof Pn.onPostCommitFiberRoot == "function") try {
                    Pn.onPostCommitFiberRoot(tc, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            ge = n, an.transition = t
        }
    }
    return !1
}

function My(e, t, n) {
    t = bo(n, t), t = Tw(e, t, 1), e = kr(e, t, 1), t = It(), e !== null && (da(e, 1, t), Lt(e, t))
}

function Fe(e, t, n) {
    if (e.tag === 3) My(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            My(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xr === null || !xr.has(r))) {
                e = bo(n, e), e = _w(t, e, 1), t = kr(t, e, 1), e = It(), t !== null && (da(t, 1, e), Lt(t, e));
                break
            }
        }
        t = t.return
    }
}

function lD(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = It(), e.pingedLanes |= e.suspendedLanes & n, ot === e && (ft & n) === n && (et === 4 || et === 3 && (ft & 130023424) === ft && 500 > He() - Oh ? ai(e, 0) : bh |= n), Lt(e, t)
}

function Bw(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = el, el <<= 1, (el & 130023424) === 0 && (el = 4194304)));
    var n = It();
    e = rr(e, t), e !== null && (da(e, t, n), Lt(e, n))
}

function uD(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Bw(e, n)
}

function cD(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314))
    }
    r !== null && r.delete(t), Bw(e, n)
}

var zw;
zw = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || kt.current) Rt = !0; else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Rt = !1, JC(e, t, n);
        Rt = (e.flags & 131072) !== 0
    } else Rt = !1, Re && (t.flags & 1048576) !== 0 && qE(t, du, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ml(e, t), e = t.pendingProps;
            var i = _o(t, Et.current);
            fo(t, n), i = wh(null, t, r, e, i, n);
            var o = Th();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, xt(r) ? (o = !0, cu(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, mh(t), i.updater = ac, t.stateNode = i, i._reactInternals = t, jd(t, r, e, n), t = Bd(null, t, r, !0, o, n)) : (t.tag = 0, Re && o && lh(t), St(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (Ml(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = dD(r), e = gn(r, e), i) {
                    case 0:
                        t = Vd(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Oy(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Iy(null, t, r, e, n);
                        break e;
                    case 14:
                        t = by(null, t, r, gn(r.type, e), n);
                        break e
                }
                throw Error(M(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gn(r, i), Vd(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gn(r, i), Oy(e, t, r, i, n);
        case 3:
            e:{
                if (bw(t), e === null) throw Error(M(387));
                r = t.pendingProps, o = t.memoizedState, i = o.element, XE(e, t), mu(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated) if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                    i = bo(Error(M(423)), t), t = Ay(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = bo(Error(M(424)), t), t = Ay(e, t, r, n, i);
                    break e
                } else for (Bt = Rr(t.stateNode.containerInfo.firstChild), zt = t, Re = !0, wn = null, n = ew(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (So(), r === i) {
                        t = ir(e, t, n);
                        break e
                    }
                    St(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return tw(t), e === null && Fd(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, Rd(r, i) ? s = null : o !== null && Rd(r, o) && (t.flags |= 32), Iw(e, t), St(e, t, s, n), t.child;
        case 6:
            return e === null && Fd(t), null;
        case 13:
            return Ow(e, t, n);
        case 4:
            return vh(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = No(t, null, r, n) : St(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gn(r, i), Iy(e, t, r, i, n);
        case 7:
            return St(e, t, t.pendingProps, n), t.child;
        case 8:
            return St(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return St(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Ne(pu, r._currentValue), r._currentValue = s, o !== null) if (On(o.value, s)) {
                    if (o.children === i.children && !kt.current) {
                        t = ir(e, t, n);
                        break e
                    }
                } else for (o = t.child, o !== null && (o.return = t); o !== null;) {
                    var a = o.dependencies;
                    if (a !== null) {
                        s = o.child;
                        for (var l = a.firstContext; l !== null;) {
                            if (l.context === r) {
                                if (o.tag === 1) {
                                    l = Kn(-1, n & -n), l.tag = 2;
                                    var u = o.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var c = u.pending;
                                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                    }
                                }
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), Md(o.return, n, t), a.lanes |= n;
                                break
                            }
                            l = l.next
                        }
                    } else if (o.tag === 10) s = o.type === t.type ? null : o.child; else if (o.tag === 18) {
                        if (s = o.return, s === null) throw Error(M(341));
                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Md(s, n, t), s = o.sibling
                    } else s = o.child;
                    if (s !== null) s.return = o; else for (s = o; s !== null;) {
                        if (s === t) {
                            s = null;
                            break
                        }
                        if (o = s.sibling, o !== null) {
                            o.return = s.return, s = o;
                            break
                        }
                        s = s.return
                    }
                    o = s
                }
                St(e, t, i.children, n), t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, fo(t, n), i = ln(i), r = r(i), t.flags |= 1, St(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = gn(r, t.pendingProps), i = gn(r.type, i), by(e, t, r, i, n);
        case 15:
            return Sw(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : gn(r, i), Ml(e, t), t.tag = 1, xt(r) ? (e = !0, cu(t)) : e = !1, fo(t, n), KE(t, r, i), jd(t, r, i, n), Bd(null, t, r, !0, e, n);
        case 19:
            return Aw(e, t, n);
        case 22:
            return Nw(e, t, n)
    }
    throw Error(M(156, t.tag))
};

function Hw(e, t) {
    return vE(e, t)
}

function fD(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function on(e, t, n, r) {
    return new fD(e, t, n, r)
}

function Rh(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function dD(e) {
    if (typeof e == "function") return Rh(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Xp) return 11;
        if (e === Jp) return 14
    }
    return 2
}

function Pr(e, t) {
    var n = e.alternate;
    return n === null ? (n = on(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ul(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") Rh(e) && (s = 1); else if (typeof e == "string") s = 5; else e:switch (e) {
        case Hi:
            return li(n.children, i, o, t);
        case Yp:
            s = 8, i |= 8;
            break;
        case ud:
            return e = on(12, n, t, i | 2), e.elementType = ud, e.lanes = o, e;
        case cd:
            return e = on(13, n, t, i), e.elementType = cd, e.lanes = o, e;
        case fd:
            return e = on(19, n, t, i), e.elementType = fd, e.lanes = o, e;
        case Z0:
            return fc(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case J0:
                    s = 10;
                    break e;
                case K0:
                    s = 9;
                    break e;
                case Xp:
                    s = 11;
                    break e;
                case Jp:
                    s = 14;
                    break e;
                case Er:
                    s = 16, r = null;
                    break e
            }
            throw Error(M(130, e == null ? e : typeof e, ""))
    }
    return t = on(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function li(e, t, n, r) {
    return e = on(7, e, r, t), e.lanes = n, e
}

function fc(e, t, n, r) {
    return e = on(22, e, r, t), e.elementType = Z0, e.lanes = n, e.stateNode = {isHidden: !1}, e
}

function Rf(e, t, n) {
    return e = on(6, e, null, t), e.lanes = n, e
}

function kf(e, t, n) {
    return t = on(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function pD(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = df(0), this.expirationTimes = df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = df(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function kh(e, t, n, r, i, o, s, a, l) {
    return e = new pD(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = on(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, mh(o), e
}

function hD(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: zi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function Gw(e) {
    if (!e) return jr;
    e = e._reactInternals;
    e:{
        if (Ni(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (xt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (xt(n)) return HE(e, n, t)
    }
    return t
}

function qw(e, t, n, r, i, o, s, a, l) {
    return e = kh(n, r, !0, e, i, o, s, a, l), e.context = Gw(null), n = e.current, r = It(), i = Lr(n), o = Kn(r, i), o.callback = t != null ? t : null, kr(n, o, i), e.current.lanes = i, da(e, i, r), Lt(e, r), e
}

function dc(e, t, n, r) {
    var i = t.current, o = It(), s = Lr(i);
    return n = Gw(n), t.context === null ? t.context = n : t.pendingContext = n, t = Kn(o, s), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kr(i, t, s), e !== null && (Sn(e, i, s, o), Ll(e, i, s)), s
}

function Su(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function $y(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function xh(e, t) {
    $y(e, t), (e = e.alternate) && $y(e, t)
}

function mD() {
    return null
}

var Qw = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Lh(e) {
    this._internalRoot = e
}

pc.prototype.render = Lh.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    dc(e, t, null, null)
};
pc.prototype.unmount = Lh.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        mi(function () {
            dc(null, e, null, null)
        }), t[nr] = null
    }
};

function pc(e) {
    this._internalRoot = e
}

pc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = SE();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < _r.length && t !== 0 && t < _r[n].priority; n++) ;
        _r.splice(n, 0, e), n === 0 && IE(e)
    }
};

function Ph(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function hc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function jy() {
}

function vD(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var u = Su(s);
                o.call(u)
            }
        }
        var s = qw(t, r, e, 0, null, !1, !1, "", jy);
        return e._reactRootContainer = s, e[nr] = s.current, qs(e.nodeType === 8 ? e.parentNode : e), mi(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = Su(l);
            a.call(u)
        }
    }
    var l = kh(e, 0, !1, null, null, !1, !1, "", jy);
    return e._reactRootContainer = l, e[nr] = l.current, qs(e.nodeType === 8 ? e.parentNode : e), mi(function () {
        dc(t, l, n, r)
    }), l
}

function mc(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var l = Su(s);
                a.call(l)
            }
        }
        dc(t, s, e, i)
    } else s = vD(n, t, e, i, r);
    return Su(s)
}

TE = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Es(t.pendingLanes);
                n !== 0 && (eh(t, n | 1), Lt(t, He()), (pe & 6) === 0 && (Oo = He() + 500, zr()))
            }
            break;
        case 13:
            mi(function () {
                var r = rr(e, 1);
                if (r !== null) {
                    var i = It();
                    Sn(r, e, 1, i)
                }
            }), xh(e, 1)
    }
};
th = function (e) {
    if (e.tag === 13) {
        var t = rr(e, 134217728);
        if (t !== null) {
            var n = It();
            Sn(t, e, 134217728, n)
        }
        xh(e, 134217728)
    }
};
_E = function (e) {
    if (e.tag === 13) {
        var t = Lr(e), n = rr(e, t);
        if (n !== null) {
            var r = It();
            Sn(n, e, t, r)
        }
        xh(e, t)
    }
};
SE = function () {
    return ge
};
NE = function (e, t) {
    var n = ge;
    try {
        return ge = e, t()
    } finally {
        ge = n
    }
};
Td = function (e, t, n) {
    switch (t) {
        case"input":
            if (hd(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = oc(r);
                        if (!i) throw Error(M(90));
                        tE(r), hd(r, i)
                    }
                }
            }
            break;
        case"textarea":
            rE(e, n);
            break;
        case"select":
            t = n.value, t != null && ao(e, !!n.multiple, t, !1)
    }
};
cE = Ah;
fE = mi;
var yD = {usingClientEntryPoint: !1, Events: [ha, Wi, oc, lE, uE, Ah]},
    fs = {findFiberByHostInstance: ti, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"}, gD = {
        bundleType: fs.bundleType,
        version: fs.version,
        rendererPackageName: fs.rendererPackageName,
        rendererConfig: fs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: fr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = hE(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: fs.findFiberByHostInstance || mD,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fl.isDisabled && fl.supportsFiber) try {
        tc = fl.inject(gD), Pn = fl
    } catch {
    }
}
Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yD;
Wt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ph(t)) throw Error(M(200));
    return hD(e, t, null, n)
};
Wt.createRoot = function (e, t) {
    if (!Ph(e)) throw Error(M(299));
    var n = !1, r = "", i = Qw;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = kh(e, 1, !1, null, null, n, !1, r, i), e[nr] = t.current, qs(e.nodeType === 8 ? e.parentNode : e), new Lh(t)
};
Wt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","), Error(M(268, e)));
    return e = hE(t), e = e === null ? null : e.stateNode, e
};
Wt.flushSync = function (e) {
    return mi(e)
};
Wt.hydrate = function (e, t, n) {
    if (!hc(t)) throw Error(M(200));
    return mc(null, e, t, !0, n)
};
Wt.hydrateRoot = function (e, t, n) {
    if (!Ph(e)) throw Error(M(405));
    var r = n != null && n.hydratedSources || null, i = !1, o = "", s = Qw;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = qw(t, null, e, 1, n != null ? n : null, i, !1, o, s), e[nr] = t.current, qs(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new pc(t)
};
Wt.render = function (e, t, n) {
    if (!hc(t)) throw Error(M(200));
    return mc(null, e, t, !1, n)
};
Wt.unmountComponentAtNode = function (e) {
    if (!hc(e)) throw Error(M(40));
    return e._reactRootContainer ? (mi(function () {
        mc(null, null, e, !1, function () {
            e._reactRootContainer = null, e[nr] = null
        })
    }), !0) : !1
};
Wt.unstable_batchedUpdates = Ah;
Wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!hc(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return mc(e, t, n, !1, r)
};
Wt.version = "18.2.0-next-9e3b772b8-20220608";

function Ww() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ww)
    } catch (e) {
        console.error(e)
    }
}

Ww(), Gp.exports = Wt;
var Yw, Uy = Gp.exports;
Yw = Uy.createRoot, Uy.hydrateRoot;
const ED = "_Snb_19fs4_1", wD = "_open_19fs4_24", TD = "_snbTop_19fs4_28", _D = "_menus_19fs4_35",
    SD = "_line_19fs4_43", ND = "_circles_19fs4_49", ID = "_circleWhite_19fs4_57",
    bD = "_circleBlack_19fs4_66 _circleWhite_19fs4_57", OD = "_themeToggle_19fs4_73", AD = "_slide_19fs4_96";
var Zt = {
    Snb: ED,
    open: wD,
    snbTop: TD,
    menus: _D,
    line: SD,
    circles: ND,
    circleWhite: ID,
    circleBlack: bD,
    themeToggle: OD,
    switch: "_switch_19fs4_83",
    slide: AD
};

function CD() {
    return O(Bn, {
        children: ee("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.1,
            stroke: "currentColor",
            className: "icon",
            children: [O("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), O("path", {strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]
        })
    })
}

function DD() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            className: "icon",
            children: O("path", {strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12"})
        })
    })
}

function RD() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.1,
            stroke: "currentColor",
            className: "icon",
            children: O("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            })
        })
    })
}

function kD() {
    return O(Bn, {
        children: O("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.1,
            stroke: "currentColor",
            className: "icon",
            children: O("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            })
        })
    })
}

function xD({type: e, closeSnb: t, theme: n, themeSwitch: r}) {
    return ee("aside", {
        className: `${Zt.Snb} ${e ? Zt.open : ""}`,
        children: [ee("div", {
            className: Zt.snbTop,
            children: [O("div", {
                className: Zt.themeToggle,
                children: O("span", {className: `${Zt.switch} ${n === "light" ? Zt.slide : ""}`, onClick: r})
            }), O("div", {onClick: t, children: O(DD, {})})]
        }), ee("div", {
            className: Zt.menus,
            children: [ee(rn, {
                type: "button",
                role: "sideMenu",
                children: [O(RD, {}), " \uD648"]
            }), ee(rn, {
                type: "button",
                role: "sideMenu",
                children: [O(N0, {}), " \uCC44\uD305"]
            }), ee(rn, {
                type: "button",
                role: "sideMenu",
                children: [O(kD, {}), " \uB7AD\uD0B9"]
            }), O("div", {className: Zt.line}), ee(rn, {
                type: "button",
                role: "sideMenu",
                children: [O(S0, {strokeWidth: 1.1, size: "icon"}), " \uD504\uB85C\uD544"]
            }), ee(rn, {type: "button", role: "sideMenu", children: [O(CD, {}), " \uC124\uC815"]})]
        }), ee("div", {
            className: Zt.logo,
            children: [ee("div", {
                className: Zt.circles,
                children: [O("div", {className: Zt.circleBlack}), O("div", {className: Zt.circleWhite})]
            }), O("div", {children: "CHATTY"})]
        })]
    })
}

function LD() {
    const e = Lp(), t = vI(), [n, r] = Pp();
    return O(xD, {
        ...{
            theme: e, themeSwitch: t, type: n, closeSnb: () => {
                r.close()
            }
        }
    })
}

const PD = {Snb: O(LD, {})};

function FD() {
    const e = Lp(), [t, n] = Pp(), r = () => {
        n.close()
    };
    return t && Gp.exports.createPortal(ee("div", {
        "data-theme": e,
        children: [O("div", {onClick: r, style: MD}), PD[t]]
    }), document.getElementById("modal-root"))
}

const MD = {
    width: "100vw",
    height: "100vh",
    background: "black",
    opacity: "0.2",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10002
};
var $D = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        103: "Early Hints",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a Teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Too Early",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
    }, Fh = Object.defineProperty, jD = Object.getOwnPropertyDescriptor, UD = Object.getOwnPropertyNames,
    VD = Object.prototype.hasOwnProperty, BD = (e, t) => {
        for (var n in t) Fh(e, n, {get: t[n], enumerable: !0})
    }, zD = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of UD(t)) !VD.call(e, i) && i !== n && Fh(e, i, {
            get: () => t[i],
            enumerable: !(r = jD(t, i)) || r.enumerable
        });
        return e
    }, HD = e => zD(Fh({}, "__esModule", {value: !0}), e), Xw = {};
BD(Xw, {
    Headers: () => va,
    flattenHeadersList: () => ZD,
    flattenHeadersObject: () => eR,
    headersToList: () => Jw,
    headersToObject: () => YD,
    headersToString: () => QD,
    listToHeaders: () => JD,
    objectToHeaders: () => KD,
    reduceHeadersObject: () => Mh,
    stringToHeaders: () => XD
});
var dn = HD(Xw), GD = /[^a-z0-9\-#$%&'*+.^_`|~]/i;

function ds(e) {
    if (typeof e != "string" && (e = String(e)), GD.test(e) || e.trim() === "") throw new TypeError("Invalid character in header field name");
    return e.toLowerCase()
}

function qD(e) {
    return typeof e != "string" && (e = String(e)), e
}

var en = Symbol("normalizedHeaders"), dl = Symbol("rawHeaderNames"), Vy, By, va = class {
    constructor(e) {
        this[Vy] = {}, this[By] = new Map, ["Headers", "HeadersPolyfill"].includes(e == null ? void 0 : e.constructor.name) || e instanceof va ? e.forEach((n, r) => {
            this.append(r, n)
        }, this) : Array.isArray(e) ? e.forEach(([t, n]) => {
            this.append(t, Array.isArray(n) ? n.join(", ") : n)
        }) : e && Object.getOwnPropertyNames(e).forEach(t => {
            const n = e[t];
            this.append(t, Array.isArray(n) ? n.join(", ") : n)
        })
    }

    [(Vy = en, By = dl, Symbol.iterator)]() {
        return this.entries()
    }

    * keys() {
        for (const e of Object.keys(this[en])) yield e
    }

    * values() {
        for (const e of Object.values(this[en])) yield e
    }

    * entries() {
        for (const e of Object.keys(this[en])) yield[e, this.get(e)]
    }

    get(e) {
        return this[en][ds(e)] || null
    }

    set(e, t) {
        const n = ds(e);
        this[en][n] = qD(t), this[dl].set(n, e)
    }

    append(e, t) {
        const n = ds(e);
        let r = this.has(n) ? `${this.get(n)}, ${t}` : t;
        this.set(e, r)
    }

    delete(e) {
        if (!this.has(e)) return;
        const t = ds(e);
        delete this[en][t], this[dl].delete(t)
    }

    all() {
        return this[en]
    }

    raw() {
        const e = {};
        for (const [t, n] of this.entries()) e[this[dl].get(t)] = n;
        return e
    }

    has(e) {
        return this[en].hasOwnProperty(ds(e))
    }

    forEach(e, t) {
        for (const n in this[en]) this[en].hasOwnProperty(n) && e.call(t, this[en][n], n, this)
    }
};

function Jw(e) {
    const t = [];
    return e.forEach((n, r) => {
        const i = n.includes(",") ? n.split(",").map(o => o.trim()) : n;
        t.push([r, i])
    }), t
}

function QD(e) {
    return Jw(e).map(([r, i]) => {
        const o = [].concat(i);
        return `${r}: ${o.join(", ")}`
    }).join(`\r
`)
}

var WD = ["user-agent"];

function YD(e) {
    const t = {};
    return e.forEach((n, r) => {
        const i = !WD.includes(r.toLowerCase()) && n.includes(",");
        t[r] = i ? n.split(",").map(o => o.trim()) : n
    }), t
}

function XD(e) {
    return e.trim().split(/[\r\n]+/).reduce((n, r) => {
        if (r.trim() === "") return n;
        const i = r.split(": "), o = i.shift(), s = i.join(": ");
        return n.append(o, s), n
    }, new va)
}

function JD(e) {
    const t = new va;
    return e.forEach(([n, r]) => {
        [].concat(r).forEach(o => {
            t.append(n, o)
        })
    }), t
}

function Mh(e, t, n) {
    return Object.keys(e).reduce((r, i) => t(r, i, e[i]), n)
}

function KD(e) {
    return Mh(e, (t, n, r) => ([].concat(r).filter(Boolean).forEach(o => {
        t.append(n, o)
    }), t), new va)
}

function ZD(e) {
    return e.map(([t, n]) => [t, [].concat(n).join("; ")])
}

function eR(e) {
    return Mh(e, (t, n, r) => (t[n] = [].concat(r).join("; "), t), {})
}

var ya = {};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
ya.parse = rR;
ya.serialize = iR;
var tR = decodeURIComponent, nR = encodeURIComponent, pl = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

function rR(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var n = {}, r = t || {}, i = e.split(";"), o = r.decode || tR, s = 0; s < i.length; s++) {
        var a = i[s], l = a.indexOf("=");
        if (!(l < 0)) {
            var u = a.substring(0, l).trim();
            if (n[u] == null) {
                var c = a.substring(l + 1, a.length).trim();
                c[0] === '"' && (c = c.slice(1, -1)), n[u] = oR(c, o)
            }
        }
    }
    return n
}

function iR(e, t, n) {
    var r = n || {}, i = r.encode || nR;
    if (typeof i != "function") throw new TypeError("option encode is invalid");
    if (!pl.test(e)) throw new TypeError("argument name is invalid");
    var o = i(t);
    if (o && !pl.test(o)) throw new TypeError("argument val is invalid");
    var s = e + "=" + o;
    if (r.maxAge != null) {
        var a = r.maxAge - 0;
        if (isNaN(a) || !isFinite(a)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(a)
    }
    if (r.domain) {
        if (!pl.test(r.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!pl.test(r.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
        s += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.sameSite) {
        var l = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
        switch (l) {
            case!0:
                s += "; SameSite=Strict";
                break;
            case"lax":
                s += "; SameSite=Lax";
                break;
            case"strict":
                s += "; SameSite=Strict";
                break;
            case"none":
                s += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
    }
    return s
}

function oR(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}

var ta = {exports: {}};
(function (e, t) {
    (function (n, r) {
        r(t)
    })(V, function (n) {
        function r() {
            return typeof navigator != "undefined" && navigator.product === "ReactNative" ? !0 : !!(typeof process != "undefined" && process.versions && process.versions.node)
        }

        n.isNodeProcess = r, Object.defineProperty(n, "__esModule", {value: !0})
    })
})(ta, ta.exports);
var ep = {exports: {}};
(function (e, t) {
    var n = function () {
        if (typeof self != "undefined") return self;
        if (typeof window != "undefined") return window;
        if (typeof r != "undefined") return r;
        throw new Error("unable to locate global object")
    }, r = n();
    e.exports = t = r.fetch, r.fetch && (t.default = r.fetch.bind(r)), t.Headers = r.Headers, t.Request = r.Request, t.Response = r.Response
})(ep, ep.exports);
var $h = {}, vc = {}, jh = {exports: {}}, ho = typeof Reflect == "object" ? Reflect : null,
    zy = ho && typeof ho.apply == "function" ? ho.apply : function (t, n, r) {
        return Function.prototype.apply.call(t, n, r)
    }, Vl;
ho && typeof ho.ownKeys == "function" ? Vl = ho.ownKeys : Object.getOwnPropertySymbols ? Vl = function (t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
} : Vl = function (t) {
    return Object.getOwnPropertyNames(t)
};

function sR(e) {
    console && console.warn && console.warn(e)
}

var Kw = Number.isNaN || function (t) {
    return t !== t
};

function _e() {
    _e.init.call(this)
}

jh.exports = _e;
jh.exports.once = cR;
_e.EventEmitter = _e;
_e.prototype._events = void 0;
_e.prototype._eventsCount = 0;
_e.prototype._maxListeners = void 0;
var Hy = 10;

function yc(e) {
    if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}

Object.defineProperty(_e, "defaultMaxListeners", {
    enumerable: !0, get: function () {
        return Hy
    }, set: function (e) {
        if (typeof e != "number" || e < 0 || Kw(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        Hy = e
    }
});
_e.init = function () {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
_e.prototype.setMaxListeners = function (t) {
    if (typeof t != "number" || t < 0 || Kw(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this
};

function Zw(e) {
    return e._maxListeners === void 0 ? _e.defaultMaxListeners : e._maxListeners
}

_e.prototype.getMaxListeners = function () {
    return Zw(this)
};
_e.prototype.emit = function (t) {
    for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
    var i = t === "error", o = this._events;
    if (o !== void 0) i = i && o.error === void 0; else if (!i) return !1;
    if (i) {
        var s;
        if (n.length > 0 && (s = n[0]), s instanceof Error) throw s;
        var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw a.context = s, a
    }
    var l = o[t];
    if (l === void 0) return !1;
    if (typeof l == "function") zy(l, this, n); else for (var u = l.length, c = iT(l, u), r = 0; r < u; ++r) zy(c[r], this, n);
    return !0
};

function eT(e, t, n, r) {
    var i, o, s;
    if (yc(n), o = e._events, o === void 0 ? (o = e._events = Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), s === void 0) s = o[t] = n, ++e._eventsCount; else if (typeof s == "function" ? s = o[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), i = Zw(e), i > 0 && s.length > i && !s.warned) {
        s.warned = !0;
        var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = s.length, sR(a)
    }
    return e
}

_e.prototype.addListener = function (t, n) {
    return eT(this, t, n, !1)
};
_e.prototype.on = _e.prototype.addListener;
_e.prototype.prependListener = function (t, n) {
    return eT(this, t, n, !0)
};

function aR() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function tT(e, t, n) {
    var r = {fired: !1, wrapFn: void 0, target: e, type: t, listener: n}, i = aR.bind(r);
    return i.listener = n, r.wrapFn = i, i
}

_e.prototype.once = function (t, n) {
    return yc(n), this.on(t, tT(this, t, n)), this
};
_e.prototype.prependOnceListener = function (t, n) {
    return yc(n), this.prependListener(t, tT(this, t, n)), this
};
_e.prototype.removeListener = function (t, n) {
    var r, i, o, s, a;
    if (yc(n), i = this._events, i === void 0) return this;
    if (r = i[t], r === void 0) return this;
    if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n)); else if (typeof r != "function") {
        for (o = -1, s = r.length - 1; s >= 0; s--) if (r[s] === n || r[s].listener === n) {
            a = r[s].listener, o = s;
            break
        }
        if (o < 0) return this;
        o === 0 ? r.shift() : lR(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, a || n)
    }
    return this
};
_e.prototype.off = _e.prototype.removeListener;
_e.prototype.removeAllListeners = function (t) {
    var n, r, i;
    if (r = this._events, r === void 0) return this;
    if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]), this;
    if (arguments.length === 0) {
        var o = Object.keys(r), s;
        for (i = 0; i < o.length; ++i) s = o[i], s !== "removeListener" && this.removeAllListeners(s);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = r[t], typeof n == "function") this.removeListener(t, n); else if (n !== void 0) for (i = n.length - 1; i >= 0; i--) this.removeListener(t, n[i]);
    return this
};

function nT(e, t, n) {
    var r = e._events;
    if (r === void 0) return [];
    var i = r[t];
    return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? uR(i) : iT(i, i.length)
}

_e.prototype.listeners = function (t) {
    return nT(this, t, !0)
};
_e.prototype.rawListeners = function (t) {
    return nT(this, t, !1)
};
_e.listenerCount = function (e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : rT.call(e, t)
};
_e.prototype.listenerCount = rT;

function rT(e) {
    var t = this._events;
    if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}

_e.prototype.eventNames = function () {
    return this._eventsCount > 0 ? Vl(this._events) : []
};

function iT(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n
}

function lR(e, t) {
    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
    e.pop()
}

function uR(e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
    return t
}

function cR(e, t) {
    return new Promise(function (n, r) {
        function i(s) {
            e.removeListener(t, o), r(s)
        }

        function o() {
            typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments))
        }

        oT(e, t, o, {once: !0}), t !== "error" && fR(e, i, {once: !0})
    })
}

function fR(e, t, n) {
    typeof e.on == "function" && oT(e, "error", t, n)
}

function oT(e, t, n, r) {
    if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n); else if (typeof e.addEventListener == "function") e.addEventListener(t, function i(o) {
        r.once && e.removeEventListener(t, i), n(o)
    }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}

var dR = V && V.__extends || function () {
    var e = function (t, n) {
        return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
            r.__proto__ = i
        } || function (r, i) {
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }, e(t, n)
    };
    return function (t, n) {
        e(t, n);

        function r() {
            this.constructor = t
        }

        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}(), pR = V && V.__spreadArrays || function () {
    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
    for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var o = arguments[t], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
    return r
};
vc.__esModule = !0;
vc.StrictEventEmitter = void 0;
var hR = jh.exports, mR = function (e) {
    dR(t, e);

    function t() {
        return e.call(this) || this
    }

    return t.prototype.on = function (n, r) {
        return e.prototype.on.call(this, n.toString(), r)
    }, t.prototype.once = function (n, r) {
        return e.prototype.on.call(this, n.toString(), r)
    }, t.prototype.off = function (n, r) {
        return e.prototype.off.call(this, n.toString(), r)
    }, t.prototype.emit = function (n) {
        for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
        return e.prototype.emit.apply(this, pR([n.toString()], r))
    }, t.prototype.addListener = function (n, r) {
        return e.prototype.addListener.call(this, n.toString(), r)
    }, t.prototype.prependListener = function (n, r) {
        return e.prototype.prependListener.call(this, n.toString(), r)
    }, t.prototype.prependOnceListener = function (n, r) {
        return e.prototype.prependOnceListener.call(this, n.toString(), r)
    }, t.prototype.removeListener = function (n, r) {
        return e.prototype.removeListener.call(this, n.toString(), r)
    }, t.prototype.removeAllListeners = function (n) {
        return e.prototype.removeAllListeners.call(this, n ? n.toString() : void 0)
    }, t.prototype.eventNames = function () {
        return e.prototype.eventNames.call(this)
    }, t.prototype.listeners = function (n) {
        return e.prototype.listeners.call(this, n.toString())
    }, t.prototype.rawListeners = function (n) {
        return e.prototype.rawListeners.call(this, n.toString())
    }, t.prototype.listenerCount = function (n) {
        return e.prototype.listenerCount.call(this, n.toString())
    }, t
}(hR.EventEmitter);
vc.StrictEventEmitter = mR;
(function (e) {
    var t = V && V.__createBinding || (Object.create ? function (r, i, o, s) {
        s === void 0 && (s = o), Object.defineProperty(r, s, {
            enumerable: !0, get: function () {
                return i[o]
            }
        })
    } : function (r, i, o, s) {
        s === void 0 && (s = o), r[s] = i[o]
    }), n = V && V.__exportStar || function (r, i) {
        for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o)
    };
    e.__esModule = !0, n(vc, e)
})($h);
var Ii = {}, Uh = {};
Object.defineProperty(Uh, "__esModule", {value: !0});
Uh.until = async e => {
    try {
        const t = await e().catch(n => {
            throw n
        });
        return [null, t]
    } catch (t) {
        return [t, null]
    }
};
Object.defineProperty(Ii, "__esModule", {value: !0});
var vR = Uh;
Ii.until = vR.until;
var bi = {}, sT = {}, ga = {};
Object.defineProperty(ga, "__esModule", {value: !0});
ga.format = void 0;
var yR = /(%?)(%([sdjo]))/g;

function gR(e, t) {
    switch (t) {
        case"s":
            return e;
        case"d":
        case"i":
            return Number(e);
        case"j":
            return JSON.stringify(e);
        case"o": {
            if (typeof e == "string") return e;
            var n = JSON.stringify(e);
            return n === "{}" || n === "[]" || /^\[object .+?\]$/.test(n) ? e : n
        }
    }
}

function ER(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (t.length === 0) return e;
    var r = 0, i = e.replace(yR, function (o, s, a, l) {
        var u = t[r], c = gR(u, l);
        return s ? o : (r++, c)
    });
    return r < t.length && (i += " " + t.slice(r).join(" ")), i = i.replace(/%{2,2}/g, "%"), i
}

ga.format = ER;
(function (e) {
    var t = V && V.__extends || function () {
        var u = function (c, d) {
            return u = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (f, p) {
                f.__proto__ = p
            } || function (f, p) {
                for (var h in p) Object.prototype.hasOwnProperty.call(p, h) && (f[h] = p[h])
            }, u(c, d)
        };
        return function (c, d) {
            if (typeof d != "function" && d !== null) throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
            u(c, d);

            function f() {
                this.constructor = c
            }

            c.prototype = d === null ? Object.create(d) : (f.prototype = d.prototype, new f)
        }
    }(), n = V && V.__spreadArray || function (u, c) {
        for (var d = 0, f = c.length, p = u.length; d < f; d++, p++) u[p] = c[d];
        return u
    };
    Object.defineProperty(e, "__esModule", {value: !0}), e.invariant = e.createInvariantWith = e.InvariantError = void 0;
    var r = ga, i = 2;

    function o(u) {
        if (!!u.stack) {
            var c = u.stack.split(`
`);
            c.splice(1, i), u.stack = c.join(`
`)
        }
    }

    var s = function (u) {
        t(c, u);

        function c(d) {
            for (var f = [], p = 1; p < arguments.length; p++) f[p - 1] = arguments[p];
            var h = u.call(this, d) || this;
            return h.message = d, h.name = "Invariant Violation", h.message = r.format.apply(void 0, n([d], f)), o(h), h
        }

        return c
    }(Error);
    e.InvariantError = s;

    function a(u) {
        var c = function (d, f) {
            for (var p = [], h = 2; h < arguments.length; h++) p[h - 2] = arguments[h];
            if (!d) {
                var g = r.format.apply(void 0, n([f], p)), _ = !!u.prototype.name, m = _ ? new u(g) : u(g);
                throw o(m), m
            }
        };
        return c
    }

    e.createInvariantWith = a;

    function l(u) {
        for (var c = [], d = 1; d < arguments.length; d++) c[d - 1] = arguments[d];
        return a(u).apply(void 0, c)
    }

    e.invariant = a(s), e.invariant.as = l
})(sT);
(function (e) {
    var t = V && V.__createBinding || (Object.create ? function (r, i, o, s) {
        s === void 0 && (s = o), Object.defineProperty(r, s, {
            enumerable: !0, get: function () {
                return i[o]
            }
        })
    } : function (r, i, o, s) {
        s === void 0 && (s = o), r[s] = i[o]
    }), n = V && V.__exportStar || function (r, i) {
        for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o)
    };
    Object.defineProperty(e, "__esModule", {value: !0}), n(sT, e), n(ga, e)
})(bi);
var Ea = {}, qo = {};
Object.defineProperty(qo, "__esModule", {value: !0});
qo.IS_PATCHED_MODULE = void 0;
qo.IS_PATCHED_MODULE = Symbol("isPatchedModule");
var wa = {}, Nu = {exports: {}}, Ao = 1e3, Co = Ao * 60, Do = Co * 60, vi = Do * 24, wR = vi * 7, TR = vi * 365.25,
    _R = function (e, t) {
        t = t || {};
        var n = typeof e;
        if (n === "string" && e.length > 0) return SR(e);
        if (n === "number" && isFinite(e)) return t.long ? IR(e) : NR(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    };

function SR(e) {
    if (e = String(e), !(e.length > 100)) {
        var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
        if (!!t) {
            var n = parseFloat(t[1]), r = (t[2] || "ms").toLowerCase();
            switch (r) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                    return n * TR;
                case"weeks":
                case"week":
                case"w":
                    return n * wR;
                case"days":
                case"day":
                case"d":
                    return n * vi;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                    return n * Do;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                    return n * Co;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                    return n * Ao;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                    return n;
                default:
                    return
            }
        }
    }
}

function NR(e) {
    var t = Math.abs(e);
    return t >= vi ? Math.round(e / vi) + "d" : t >= Do ? Math.round(e / Do) + "h" : t >= Co ? Math.round(e / Co) + "m" : t >= Ao ? Math.round(e / Ao) + "s" : e + "ms"
}

function IR(e) {
    var t = Math.abs(e);
    return t >= vi ? hl(e, t, vi, "day") : t >= Do ? hl(e, t, Do, "hour") : t >= Co ? hl(e, t, Co, "minute") : t >= Ao ? hl(e, t, Ao, "second") : e + " ms"
}

function hl(e, t, n, r) {
    var i = t >= n * 1.5;
    return Math.round(e / n) + " " + r + (i ? "s" : "")
}

function bR(e) {
    n.debug = n, n.default = n, n.coerce = l, n.disable = o, n.enable = i, n.enabled = s, n.humanize = _R, n.destroy = u, Object.keys(e).forEach(c => {
        n[c] = e[c]
    }), n.names = [], n.skips = [], n.formatters = {};

    function t(c) {
        let d = 0;
        for (let f = 0; f < c.length; f++) d = (d << 5) - d + c.charCodeAt(f), d |= 0;
        return n.colors[Math.abs(d) % n.colors.length]
    }

    n.selectColor = t;

    function n(c) {
        let d, f = null, p, h;

        function g(..._) {
            if (!g.enabled) return;
            const m = g, y = Number(new Date), E = y - (d || y);
            m.diff = E, m.prev = d, m.curr = y, d = y, _[0] = n.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
            let T = 0;
            _[0] = _[0].replace(/%([a-zA-Z%])/g, (x, F) => {
                if (x === "%%") return "%";
                T++;
                const $ = n.formatters[F];
                if (typeof $ == "function") {
                    const b = _[T];
                    x = $.call(m, b), _.splice(T, 1), T--
                }
                return x
            }), n.formatArgs.call(m, _), (m.log || n.log).apply(m, _)
        }

        return g.namespace = c, g.useColors = n.useColors(), g.color = n.selectColor(c), g.extend = r, g.destroy = n.destroy, Object.defineProperty(g, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () => f !== null ? f : (p !== n.namespaces && (p = n.namespaces, h = n.enabled(c)), h),
            set: _ => {
                f = _
            }
        }), typeof n.init == "function" && n.init(g), g
    }

    function r(c, d) {
        const f = n(this.namespace + (typeof d == "undefined" ? ":" : d) + c);
        return f.log = this.log, f
    }

    function i(c) {
        n.save(c), n.namespaces = c, n.names = [], n.skips = [];
        let d;
        const f = (typeof c == "string" ? c : "").split(/[\s,]+/), p = f.length;
        for (d = 0; d < p; d++) !f[d] || (c = f[d].replace(/\*/g, ".*?"), c[0] === "-" ? n.skips.push(new RegExp("^" + c.slice(1) + "$")) : n.names.push(new RegExp("^" + c + "$")))
    }

    function o() {
        const c = [...n.names.map(a), ...n.skips.map(a).map(d => "-" + d)].join(",");
        return n.enable(""), c
    }

    function s(c) {
        if (c[c.length - 1] === "*") return !0;
        let d, f;
        for (d = 0, f = n.skips.length; d < f; d++) if (n.skips[d].test(c)) return !1;
        for (d = 0, f = n.names.length; d < f; d++) if (n.names[d].test(c)) return !0;
        return !1
    }

    function a(c) {
        return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*")
    }

    function l(c) {
        return c instanceof Error ? c.stack || c.message : c
    }

    function u() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
    }

    return n.enable(n.load()), n
}

var OR = bR;
(function (e, t) {
    t.formatArgs = r, t.save = i, t.load = o, t.useColors = n, t.storage = s(), t.destroy = (() => {
        let l = !1;
        return () => {
            l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function n() {
        return typeof window != "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window != "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function r(l) {
        if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const u = "color: " + this.color;
        l.splice(1, 0, u, "color: inherit");
        let c = 0, d = 0;
        l[0].replace(/%[a-zA-Z%]/g, f => {
            f !== "%%" && (c++, f === "%c" && (d = c))
        }), l.splice(d, 0, u)
    }

    t.log = console.debug || console.log || (() => {
    });

    function i(l) {
        try {
            l ? t.storage.setItem("debug", l) : t.storage.removeItem("debug")
        } catch {
        }
    }

    function o() {
        let l;
        try {
            l = t.storage.getItem("debug")
        } catch {
        }
        return !l && typeof process != "undefined" && "env" in process && (l = {}.DEBUG), l
    }

    function s() {
        try {
            return localStorage
        } catch {
        }
    }

    e.exports = OR(t);
    const {formatters: a} = e.exports;
    a.j = function (l) {
        try {
            return JSON.stringify(l)
        } catch (u) {
            return "[UnexpectedJSONParseError]: " + u.message
        }
    }
})(Nu, Nu.exports);
var aT = {}, yi = {};
Object.defineProperty(yi, "__esModule", {value: !0});
yi.nextTickAsync = yi.nextTick = void 0;

function AR(e) {
    setTimeout(e, 0)
}

yi.nextTick = AR;

function CR(e) {
    return new Promise(function (t) {
        setTimeout(function () {
            t(e())
        }, 0)
    })
}

yi.nextTickAsync = CR;
(function (e) {
    var t = V && V.__extends || function () {
        var d = function (f, p) {
            return d = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (h, g) {
                h.__proto__ = g
            } || function (h, g) {
                for (var _ in g) Object.prototype.hasOwnProperty.call(g, _) && (h[_] = g[_])
            }, d(f, p)
        };
        return function (f, p) {
            if (typeof p != "function" && p !== null) throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
            d(f, p);

            function h() {
                this.constructor = f
            }

            f.prototype = p === null ? Object.create(p) : (h.prototype = p.prototype, new h)
        }
    }(), n = V && V.__awaiter || function (d, f, p, h) {
        function g(_) {
            return _ instanceof p ? _ : new p(function (m) {
                m(_)
            })
        }

        return new (p || (p = Promise))(function (_, m) {
            function y(R) {
                try {
                    T(h.next(R))
                } catch (x) {
                    m(x)
                }
            }

            function E(R) {
                try {
                    T(h.throw(R))
                } catch (x) {
                    m(x)
                }
            }

            function T(R) {
                R.done ? _(R.value) : g(R.value).then(y, E)
            }

            T((h = h.apply(d, f || [])).next())
        })
    }, r = V && V.__generator || function (d, f) {
        var p = {
            label: 0, sent: function () {
                if (_[0] & 1) throw _[1];
                return _[1]
            }, trys: [], ops: []
        }, h, g, _, m;
        return m = {
            next: y(0),
            throw: y(1),
            return: y(2)
        }, typeof Symbol == "function" && (m[Symbol.iterator] = function () {
            return this
        }), m;

        function y(T) {
            return function (R) {
                return E([T, R])
            }
        }

        function E(T) {
            if (h) throw new TypeError("Generator is already executing.");
            for (; p;) try {
                if (h = 1, g && (_ = T[0] & 2 ? g.return : T[0] ? g.throw || ((_ = g.return) && _.call(g), 0) : g.next) && !(_ = _.call(g, T[1])).done) return _;
                switch (g = 0, _ && (T = [T[0] & 2, _.value]), T[0]) {
                    case 0:
                    case 1:
                        _ = T;
                        break;
                    case 4:
                        return p.label++, {value: T[1], done: !1};
                    case 5:
                        p.label++, g = T[1], T = [0];
                        continue;
                    case 7:
                        T = p.ops.pop(), p.trys.pop();
                        continue;
                    default:
                        if (_ = p.trys, !(_ = _.length > 0 && _[_.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                            p = 0;
                            continue
                        }
                        if (T[0] === 3 && (!_ || T[1] > _[0] && T[1] < _[3])) {
                            p.label = T[1];
                            break
                        }
                        if (T[0] === 6 && p.label < _[1]) {
                            p.label = _[1], _ = T;
                            break
                        }
                        if (_ && p.label < _[2]) {
                            p.label = _[2], p.ops.push(T);
                            break
                        }
                        _[2] && p.ops.pop(), p.trys.pop();
                        continue
                }
                T = f.call(d, p)
            } catch (R) {
                T = [6, R], g = 0
            } finally {
                h = _ = 0
            }
            if (T[0] & 5) throw T[1];
            return {value: T[0] ? T[1] : void 0, done: !0}
        }
    }, i = V && V.__read || function (d, f) {
        var p = typeof Symbol == "function" && d[Symbol.iterator];
        if (!p) return d;
        var h = p.call(d), g, _ = [], m;
        try {
            for (; (f === void 0 || f-- > 0) && !(g = h.next()).done;) _.push(g.value)
        } catch (y) {
            m = {error: y}
        } finally {
            try {
                g && !g.done && (p = h.return) && p.call(h)
            } finally {
                if (m) throw m.error
            }
        }
        return _
    }, o = V && V.__spreadArray || function (d, f) {
        for (var p = 0, h = f.length, g = d.length; p < h; p++, g++) d[g] = f[p];
        return d
    };
    Object.defineProperty(e, "__esModule", {value: !0}), e.AsyncEventEmitter = e.AsyncEventEmitterReadyState = void 0;
    var s = Nu.exports, a = $h, l = yi, u;
    (function (d) {
        d.ACTIVE = "ACTIVE", d.DEACTIVATED = "DEACTIVATED"
    })(u = e.AsyncEventEmitterReadyState || (e.AsyncEventEmitterReadyState = {}));
    var c = function (d) {
        t(f, d);

        function f() {
            var p = d.call(this) || this;
            return p.log = s.debug("async-event-emitter"), p.queue = new Map, p.readyState = u.ACTIVE, p
        }

        return f.prototype.on = function (p, h) {
            var g = this, _ = this.log.extend("on");
            return _('adding "%s" listener...', p), this.readyState === u.DEACTIVATED ? (_("the emitter is destroyed, skipping!"), this) : d.prototype.on.call(this, p, function () {
                for (var m = [], y = 0; y < arguments.length; y++) m[y] = arguments[y];
                return n(g, void 0, void 0, function () {
                    var E, T = this;
                    return r(this, function (R) {
                        return E = this.openListenerQueue(p), _('awaiting the "%s" listener...', p), E.push({
                            args: m,
                            done: new Promise(function (x, F) {
                                return n(T, void 0, void 0, function () {
                                    var $;
                                    return r(this, function (b) {
                                        switch (b.label) {
                                            case 0:
                                                return b.trys.push([0, 2, , 3]), [4, h.apply(void 0, o([], i(m)))];
                                            case 1:
                                                return b.sent(), x(), _('"%s" listener has resolved!', p), [3, 3];
                                            case 2:
                                                return $ = b.sent(), _('"%s" listener has rejected!', $), F($), [3, 3];
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })
                        }), [2]
                    })
                })
            })
        }, f.prototype.emit = function (p) {
            for (var h = this, g = [], _ = 1; _ < arguments.length; _++) g[_ - 1] = arguments[_];
            var m = this.log.extend("emit");
            return m('emitting "%s" event...', p), this.readyState === u.DEACTIVATED ? (m("the emitter is destroyed, skipping!"), !1) : (this.openListenerQueue(p), m('appending a one-time cleanup "%s" listener...', p), this.once(p, function () {
                l.nextTick(function () {
                    h.queue.delete(p), m('cleaned up "%s" listeners queue!', p)
                })
            }), d.prototype.emit.apply(this, o([p], i(g))))
        }, f.prototype.untilIdle = function (p, h) {
            return h === void 0 && (h = function () {
                return !0
            }), n(this, void 0, void 0, function () {
                var g, _ = this;
                return r(this, function (m) {
                    switch (m.label) {
                        case 0:
                            return g = this.queue.get(p) || [], [4, Promise.all(g.filter(h).map(function (y) {
                                var E = y.done;
                                return E
                            })).finally(function () {
                                _.queue.delete(p)
                            })];
                        case 1:
                            return m.sent(), [2]
                    }
                })
            })
        }, f.prototype.openListenerQueue = function (p) {
            var h = this.log.extend("openListenerQueue");
            h('opening "%s" listeners queue...', p);
            var g = this.queue.get(p);
            return g ? (h("returning an exising queue:", g), g) : (h("no queue found, creating one..."), this.queue.set(p, []), [])
        }, f.prototype.removeAllListeners = function (p) {
            var h = this.log.extend("removeAllListeners");
            return h("event:", p), p ? (this.queue.delete(p), h('cleared the "%s" listeners queue!', p, this.queue.get(p))) : (this.queue.clear(), h("cleared the listeners queue!", this.queue)), d.prototype.removeAllListeners.call(this, p)
        }, f.prototype.activate = function () {
            var p = this.log.extend("activate");
            this.readyState = u.ACTIVE, p("set state to:", this.readyState)
        }, f.prototype.deactivate = function () {
            var p = this.log.extend("deactivate");
            p("removing all listeners..."), this.removeAllListeners(), this.readyState = u.DEACTIVATED, p("set state to:", this.readyState)
        }, f
    }(a.StrictEventEmitter);
    e.AsyncEventEmitter = c
})(aT);
(function (e) {
    var t = V && V.__values || function (c) {
        var d = typeof Symbol == "function" && Symbol.iterator, f = d && c[d], p = 0;
        if (f) return f.call(c);
        if (c && typeof c.length == "number") return {
            next: function () {
                return c && p >= c.length && (c = void 0), {value: c && c[p++], done: !c}
            }
        };
        throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
    Object.defineProperty(e, "__esModule", {value: !0}), e.Interceptor = e.InterceptorReadyState = e.deleteGlobalSymbol = e.getGlobalSymbol = void 0;
    var n = Nu.exports, r = aT, i = yi;

    function o(c) {
        return globalThis[c] || void 0
    }

    e.getGlobalSymbol = o;

    function s(c, d) {
        globalThis[c] = d
    }

    function a(c) {
        delete globalThis[c]
    }

    e.deleteGlobalSymbol = a;
    var l;
    (function (c) {
        c.IDLE = "IDLE", c.APPLYING = "APPLYING", c.APPLIED = "APPLIED", c.DISPOSING = "DISPOSING", c.DISPOSED = "DISPOSED"
    })(l = e.InterceptorReadyState || (e.InterceptorReadyState = {}));
    var u = function () {
        function c(d) {
            this.symbol = d, this.readyState = l.IDLE, this.emitter = new r.AsyncEventEmitter, this.subscriptions = [], this.log = n.debug(d.description), this.emitter.setMaxListeners(0), this.log("constructing the interceptor...")
        }

        return c.prototype.checkEnvironment = function () {
            return !0
        }, c.prototype.apply = function () {
            var d = this, f = this.log.extend("apply");
            if (f("applying the interceptor..."), this.readyState === l.APPLIED) {
                f("intercepted already applied!");
                return
            }
            var p = this.checkEnvironment();
            if (!p) {
                f("the interceptor cannot be applied in this environment!");
                return
            }
            this.readyState = l.APPLYING, this.emitter.activate(), f("activated the emiter!", this.emitter.readyState);
            var h = this.getInstance();
            if (h) {
                f("found a running instance, reusing..."), this.on = function (g, _) {
                    f('proxying the "%s" listener', g), h.emitter.addListener(g, _), d.subscriptions.push(function () {
                        h.emitter.removeListener(g, _), f('removed proxied "%s" listener!', g)
                    })
                }, i.nextTick(function () {
                    d.readyState = l.APPLIED
                });
                return
            }
            f("no running instance found, setting up a new instance..."), this.setup(), this.setInstance(), i.nextTick(function () {
                d.readyState = l.APPLIED
            })
        }, c.prototype.setup = function () {
        }, c.prototype.on = function (d, f) {
            var p = this.log.extend("on");
            if (this.readyState === l.DISPOSING || this.readyState === l.DISPOSED) {
                p("cannot listen to events, already disposed!");
                return
            }
            p('adding "%s" event listener:', d, f.name), this.emitter.on(d, f)
        }, c.prototype.dispose = function () {
            var d, f, p = this, h = this.log.extend("dispose");
            if (this.readyState === l.DISPOSED) {
                h("cannot dispose, already disposed!");
                return
            }
            if (h("disposing the interceptor..."), this.readyState = l.DISPOSING, !this.getInstance()) {
                h("no interceptors running, skipping dispose...");
                return
            }
            if (this.clearInstance(), h("global symbol deleted:", o(this.symbol)), this.subscriptions.length > 0) {
                h("disposing of %d subscriptions...", this.subscriptions.length);
                try {
                    for (var g = t(this.subscriptions), _ = g.next(); !_.done; _ = g.next()) {
                        var m = _.value;
                        m()
                    }
                } catch (y) {
                    d = {error: y}
                } finally {
                    try {
                        _ && !_.done && (f = g.return) && f.call(g)
                    } finally {
                        if (d) throw d.error
                    }
                }
                this.subscriptions = [], h("disposed of all subscriptions!", this.subscriptions.length)
            }
            this.emitter.deactivate(), h("destroyed the listener!"), i.nextTick(function () {
                p.readyState = l.DISPOSED
            })
        }, c.prototype.getInstance = function () {
            var d, f = o(this.symbol);
            return this.log("retrieved global instance:", (d = f == null ? void 0 : f.constructor) === null || d === void 0 ? void 0 : d.name), f
        }, c.prototype.setInstance = function () {
            s(this.symbol, this), this.log("set global instance!", this.symbol.description)
        }, c.prototype.clearInstance = function () {
            a(this.symbol), this.log("cleared global instance!", this.symbol.description)
        }, c
    }();
    e.Interceptor = u
})(wa);
var gc = {}, DR = V && V.__extends || function () {
    var e = function (t, n) {
        return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
            r.__proto__ = i
        } || function (r, i) {
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }, e(t, n)
    };
    return function (t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }

        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}(), RR = V && V.__values || function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function () {
            return e && r >= e.length && (e = void 0), {value: e && e[r++], done: !e}
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
};
Object.defineProperty(gc, "__esModule", {value: !0});
gc.BatchInterceptor = void 0;
var kR = wa, xR = function (e) {
    DR(t, e);

    function t(n) {
        var r = this;
        return t.symbol = Symbol(n.name), r = e.call(this, t.symbol) || this, r.interceptors = n.interceptors, r
    }

    return t.prototype.setup = function () {
        var n, r, i = this.log.extend("setup");
        i("applying all %d interceptors...", this.interceptors.length);
        var o = function (c) {
            i('applying "%s" interceptor...', c.constructor.name), c.apply(), i("adding interceptor dispose subscription"), s.subscriptions.push(function () {
                return c.dispose()
            })
        }, s = this;
        try {
            for (var a = RR(this.interceptors), l = a.next(); !l.done; l = a.next()) {
                var u = l.value;
                o(u)
            }
        } catch (c) {
            n = {error: c}
        } finally {
            try {
                l && !l.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
    }, t.prototype.on = function (n, r) {
        this.interceptors.forEach(function (i) {
            i.on(n, r)
        })
    }, t
}(kR.Interceptor);
gc.BatchInterceptor = xR;
var Oi = {}, Nn = {}, Vh = {}, Bh = {}, lT = {}, uT = function () {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var t = {}, n = Symbol("test"), r = Object(n);
        if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") return !1;
        var i = 42;
        t[n] = i;
        for (n in t) return !1;
        if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
        var o = Object.getOwnPropertySymbols(t);
        if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var s = Object.getOwnPropertyDescriptor(t, n);
            if (s.value !== i || s.enumerable !== !0) return !1
        }
        return !0
    }, LR = uT, Ec = function () {
        return LR() && !!Symbol.toStringTag
    }, Gy = typeof Symbol != "undefined" && Symbol, PR = uT, FR = function () {
        return typeof Gy != "function" || typeof Symbol != "function" || typeof Gy("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : PR()
    }, MR = "Function.prototype.bind called on incompatible ", xf = Array.prototype.slice, $R = Object.prototype.toString,
    jR = "[object Function]", UR = function (t) {
        var n = this;
        if (typeof n != "function" || $R.call(n) !== jR) throw new TypeError(MR + n);
        for (var r = xf.call(arguments, 1), i, o = function () {
            if (this instanceof i) {
                var c = n.apply(this, r.concat(xf.call(arguments)));
                return Object(c) === c ? c : this
            } else return n.apply(t, r.concat(xf.call(arguments)))
        }, s = Math.max(0, n.length - r.length), a = [], l = 0; l < s; l++) a.push("$" + l);
        if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o), n.prototype) {
            var u = function () {
            };
            u.prototype = n.prototype, i.prototype = new u, u.prototype = null
        }
        return i
    }, VR = UR, zh = Function.prototype.bind || VR, BR = zh, zR = BR.call(Function.call, Object.prototype.hasOwnProperty),
    ce, Ro = SyntaxError, cT = Function, mo = TypeError, Lf = function (e) {
        try {
            return cT('"use strict"; return (' + e + ").constructor;")()
        } catch {
        }
    }, ui = Object.getOwnPropertyDescriptor;
if (ui) try {
    ui({}, "")
} catch {
    ui = null
}
var Pf = function () {
        throw new mo
    }, HR = ui ? function () {
        try {
            return arguments.callee, Pf
        } catch {
            try {
                return ui(arguments, "callee").get
            } catch {
                return Pf
            }
        }
    }() : Pf, Pi = FR(), Tr = Object.getPrototypeOf || function (e) {
        return e.__proto__
    }, Ui = {}, GR = typeof Uint8Array == "undefined" ? ce : Tr(Uint8Array), vo = {
        "%AggregateError%": typeof AggregateError == "undefined" ? ce : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? ce : ArrayBuffer,
        "%ArrayIteratorPrototype%": Pi ? Tr([][Symbol.iterator]()) : ce,
        "%AsyncFromSyncIteratorPrototype%": ce,
        "%AsyncFunction%": Ui,
        "%AsyncGenerator%": Ui,
        "%AsyncGeneratorFunction%": Ui,
        "%AsyncIteratorPrototype%": Ui,
        "%Atomics%": typeof Atomics == "undefined" ? ce : Atomics,
        "%BigInt%": typeof BigInt == "undefined" ? ce : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView == "undefined" ? ce : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array == "undefined" ? ce : Float32Array,
        "%Float64Array%": typeof Float64Array == "undefined" ? ce : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? ce : FinalizationRegistry,
        "%Function%": cT,
        "%GeneratorFunction%": Ui,
        "%Int8Array%": typeof Int8Array == "undefined" ? ce : Int8Array,
        "%Int16Array%": typeof Int16Array == "undefined" ? ce : Int16Array,
        "%Int32Array%": typeof Int32Array == "undefined" ? ce : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": Pi ? Tr(Tr([][Symbol.iterator]())) : ce,
        "%JSON%": typeof JSON == "object" ? JSON : ce,
        "%Map%": typeof Map == "undefined" ? ce : Map,
        "%MapIteratorPrototype%": typeof Map == "undefined" || !Pi ? ce : Tr(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise == "undefined" ? ce : Promise,
        "%Proxy%": typeof Proxy == "undefined" ? ce : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect == "undefined" ? ce : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set == "undefined" ? ce : Set,
        "%SetIteratorPrototype%": typeof Set == "undefined" || !Pi ? ce : Tr(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? ce : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": Pi ? Tr(""[Symbol.iterator]()) : ce,
        "%Symbol%": Pi ? Symbol : ce,
        "%SyntaxError%": Ro,
        "%ThrowTypeError%": HR,
        "%TypedArray%": GR,
        "%TypeError%": mo,
        "%Uint8Array%": typeof Uint8Array == "undefined" ? ce : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? ce : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array == "undefined" ? ce : Uint16Array,
        "%Uint32Array%": typeof Uint32Array == "undefined" ? ce : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap == "undefined" ? ce : WeakMap,
        "%WeakRef%": typeof WeakRef == "undefined" ? ce : WeakRef,
        "%WeakSet%": typeof WeakSet == "undefined" ? ce : WeakSet
    }, qR = function e(t) {
        var n;
        if (t === "%AsyncFunction%") n = Lf("async function () {}"); else if (t === "%GeneratorFunction%") n = Lf("function* () {}"); else if (t === "%AsyncGeneratorFunction%") n = Lf("async function* () {}"); else if (t === "%AsyncGenerator%") {
            var r = e("%AsyncGeneratorFunction%");
            r && (n = r.prototype)
        } else if (t === "%AsyncIteratorPrototype%") {
            var i = e("%AsyncGenerator%");
            i && (n = Tr(i.prototype))
        }
        return vo[t] = n, n
    }, qy = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, Ta = zh, Iu = zR, QR = Ta.call(Function.call, Array.prototype.concat),
    WR = Ta.call(Function.apply, Array.prototype.splice), Qy = Ta.call(Function.call, String.prototype.replace),
    bu = Ta.call(Function.call, String.prototype.slice), YR = Ta.call(Function.call, RegExp.prototype.exec),
    XR = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    JR = /\\(\\)?/g, KR = function (t) {
        var n = bu(t, 0, 1), r = bu(t, -1);
        if (n === "%" && r !== "%") throw new Ro("invalid intrinsic syntax, expected closing `%`");
        if (r === "%" && n !== "%") throw new Ro("invalid intrinsic syntax, expected opening `%`");
        var i = [];
        return Qy(t, XR, function (o, s, a, l) {
            i[i.length] = a ? Qy(l, JR, "$1") : s || o
        }), i
    }, ZR = function (t, n) {
        var r = t, i;
        if (Iu(qy, r) && (i = qy[r], r = "%" + i[0] + "%"), Iu(vo, r)) {
            var o = vo[r];
            if (o === Ui && (o = qR(r)), typeof o == "undefined" && !n) throw new mo("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return {alias: i, name: r, value: o}
        }
        throw new Ro("intrinsic " + t + " does not exist!")
    }, Hh = function (t, n) {
        if (typeof t != "string" || t.length === 0) throw new mo("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new mo('"allowMissing" argument must be a boolean');
        if (YR(/^%?[^%]*%?$/, t) === null) throw new Ro("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var r = KR(t), i = r.length > 0 ? r[0] : "", o = ZR("%" + i + "%", n), s = o.name, a = o.value, l = !1, u = o.alias;
        u && (i = u[0], WR(r, QR([0, 1], u)));
        for (var c = 1, d = !0; c < r.length; c += 1) {
            var f = r[c], p = bu(f, 0, 1), h = bu(f, -1);
            if ((p === '"' || p === "'" || p === "`" || h === '"' || h === "'" || h === "`") && p !== h) throw new Ro("property names with quotes must have matching quotes");
            if ((f === "constructor" || !d) && (l = !0), i += "." + f, s = "%" + i + "%", Iu(vo, s)) a = vo[s]; else if (a != null) {
                if (!(f in a)) {
                    if (!n) throw new mo("base intrinsic for " + t + " exists, but the property is not available.");
                    return
                }
                if (ui && c + 1 >= r.length) {
                    var g = ui(a, f);
                    d = !!g, d && "get" in g && !("originalValue" in g.get) ? a = g.get : a = a[f]
                } else d = Iu(a, f), a = a[f];
                d && !l && (vo[s] = a)
            }
        }
        return a
    }, fT = {exports: {}};
(function (e) {
    var t = zh, n = Hh, r = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"),
        o = n("%Reflect.apply%", !0) || t.call(i, r), s = n("%Object.getOwnPropertyDescriptor%", !0),
        a = n("%Object.defineProperty%", !0), l = n("%Math.max%");
    if (a) try {
        a({}, "a", {value: 1})
    } catch {
        a = null
    }
    e.exports = function (d) {
        var f = o(t, i, arguments);
        if (s && a) {
            var p = s(f, "length");
            p.configurable && a(f, "length", {value: 1 + l(0, d.length - (arguments.length - 1))})
        }
        return f
    };
    var u = function () {
        return o(t, r, arguments)
    };
    a ? a(e.exports, "apply", {value: u}) : e.exports.apply = u
})(fT);
var dT = Hh, pT = fT.exports, ek = pT(dT("String.prototype.indexOf")), Gh = function (t, n) {
    var r = dT(t, !!n);
    return typeof r == "function" && ek(t, ".prototype.") > -1 ? pT(r) : r
}, tk = Ec(), nk = Gh, tp = nk("Object.prototype.toString"), wc = function (t) {
    return tk && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : tp(t) === "[object Arguments]"
}, hT = function (t) {
    return wc(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && tp(t) !== "[object Array]" && tp(t.callee) === "[object Function]"
}, rk = function () {
    return wc(arguments)
}();
wc.isLegacyArguments = hT;
var ik = rk ? wc : hT, ok = Object.prototype.toString, sk = Function.prototype.toString, ak = /^\s*(?:function)?\*/,
    mT = Ec(), Ff = Object.getPrototypeOf, lk = function () {
        if (!mT) return !1;
        try {
            return Function("return function*() {}")()
        } catch {
        }
    }, Mf, uk = function (t) {
        if (typeof t != "function") return !1;
        if (ak.test(sk.call(t))) return !0;
        if (!mT) {
            var n = ok.call(t);
            return n === "[object GeneratorFunction]"
        }
        if (!Ff) return !1;
        if (typeof Mf == "undefined") {
            var r = lk();
            Mf = r ? Ff(r) : !1
        }
        return Ff(t) === Mf
    }, vT = Function.prototype.toString, to = typeof Reflect == "object" && Reflect !== null && Reflect.apply, np, Bl;
if (typeof to == "function" && typeof Object.defineProperty == "function") try {
    np = Object.defineProperty({}, "length", {
        get: function () {
            throw Bl
        }
    }), Bl = {}, to(function () {
        throw 42
    }, null, np)
} catch (e) {
    e !== Bl && (to = null)
} else to = null;
var ck = /^\s*class\b/, rp = function (t) {
        try {
            var n = vT.call(t);
            return ck.test(n)
        } catch {
            return !1
        }
    }, $f = function (t) {
        try {
            return rp(t) ? !1 : (vT.call(t), !0)
        } catch {
            return !1
        }
    }, zl = Object.prototype.toString, fk = "[object Object]", dk = "[object Function]", pk = "[object GeneratorFunction]",
    hk = "[object HTMLAllCollection]", mk = "[object HTML document.all class]", vk = "[object HTMLCollection]",
    yk = typeof Symbol == "function" && !!Symbol.toStringTag, gk = !(0 in [,]), ip = function () {
        return !1
    };
if (typeof document == "object") {
    var Ek = document.all;
    zl.call(Ek) === zl.call(document.all) && (ip = function (t) {
        if ((gk || !t) && (typeof t == "undefined" || typeof t == "object")) try {
            var n = zl.call(t);
            return (n === hk || n === mk || n === vk || n === fk) && t("") == null
        } catch {
        }
        return !1
    })
}
var wk = to ? function (t) {
        if (ip(t)) return !0;
        if (!t || typeof t != "function" && typeof t != "object") return !1;
        try {
            to(t, null, np)
        } catch (n) {
            if (n !== Bl) return !1
        }
        return !rp(t) && $f(t)
    } : function (t) {
        if (ip(t)) return !0;
        if (!t || typeof t != "function" && typeof t != "object") return !1;
        if (yk) return $f(t);
        if (rp(t)) return !1;
        var n = zl.call(t);
        return n !== dk && n !== pk && !/^\[object HTML/.test(n) ? !1 : $f(t)
    }, Tk = wk, _k = Object.prototype.toString, yT = Object.prototype.hasOwnProperty, Sk = function (t, n, r) {
        for (var i = 0, o = t.length; i < o; i++) yT.call(t, i) && (r == null ? n(t[i], i, t) : n.call(r, t[i], i, t))
    }, Nk = function (t, n, r) {
        for (var i = 0, o = t.length; i < o; i++) r == null ? n(t.charAt(i), i, t) : n.call(r, t.charAt(i), i, t)
    }, Ik = function (t, n, r) {
        for (var i in t) yT.call(t, i) && (r == null ? n(t[i], i, t) : n.call(r, t[i], i, t))
    }, bk = function (t, n, r) {
        if (!Tk(n)) throw new TypeError("iterator must be a function");
        var i;
        arguments.length >= 3 && (i = r), _k.call(t) === "[object Array]" ? Sk(t, n, i) : typeof t == "string" ? Nk(t, n, i) : Ik(t, n, i)
    }, gT = bk,
    jf = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
    Ok = typeof globalThis == "undefined" ? V : globalThis, ET = function () {
        for (var t = [], n = 0; n < jf.length; n++) typeof Ok[jf[n]] == "function" && (t[t.length] = jf[n]);
        return t
    }, Ak = Hh, Hl = Ak("%Object.getOwnPropertyDescriptor%", !0);
if (Hl) try {
    Hl([], "length")
} catch {
    Hl = null
}
var wT = Hl, TT = gT, Ck = ET, qh = Gh, Dk = qh("Object.prototype.toString"), _T = Ec(),
    Rk = typeof globalThis == "undefined" ? V : globalThis, ST = Ck(),
    kk = qh("Array.prototype.indexOf", !0) || function (t, n) {
        for (var r = 0; r < t.length; r += 1) if (t[r] === n) return r;
        return -1
    }, xk = qh("String.prototype.slice"), NT = {}, Gl = wT, Uf = Object.getPrototypeOf;
_T && Gl && Uf && TT(ST, function (e) {
    var t = new Rk[e];
    if (Symbol.toStringTag in t) {
        var n = Uf(t), r = Gl(n, Symbol.toStringTag);
        if (!r) {
            var i = Uf(n);
            r = Gl(i, Symbol.toStringTag)
        }
        NT[e] = r.get
    }
});
var Lk = function (t) {
        var n = !1;
        return TT(NT, function (r, i) {
            if (!n) try {
                n = r.call(t) === i
            } catch {
            }
        }), n
    }, IT = function (t) {
        if (!t || typeof t != "object") return !1;
        if (!_T || !(Symbol.toStringTag in t)) {
            var n = xk(Dk(t), 8, -1);
            return kk(ST, n) > -1
        }
        return Gl ? Lk(t) : !1
    }, bT = gT, Pk = ET, OT = Gh, Fk = OT("Object.prototype.toString"), AT = Ec(),
    Wy = typeof globalThis == "undefined" ? V : globalThis, Mk = Pk(), $k = OT("String.prototype.slice"), CT = {},
    Vf = wT, Bf = Object.getPrototypeOf;
AT && Vf && Bf && bT(Mk, function (e) {
    if (typeof Wy[e] == "function") {
        var t = new Wy[e];
        if (Symbol.toStringTag in t) {
            var n = Bf(t), r = Vf(n, Symbol.toStringTag);
            if (!r) {
                var i = Bf(n);
                r = Vf(i, Symbol.toStringTag)
            }
            CT[e] = r.get
        }
    }
});
var jk = function (t) {
    var n = !1;
    return bT(CT, function (r, i) {
        if (!n) try {
            var o = r.call(t);
            o === i && (n = o)
        } catch {
        }
    }), n
}, Uk = IT, Vk = function (t) {
    return Uk(t) ? !AT || !(Symbol.toStringTag in t) ? $k(Fk(t), 8, -1) : jk(t) : !1
};
(function (e) {
    var t = ik, n = uk, r = Vk, i = IT;

    function o(S) {
        return S.call.bind(S)
    }

    var s = typeof BigInt != "undefined", a = typeof Symbol != "undefined", l = o(Object.prototype.toString),
        u = o(Number.prototype.valueOf), c = o(String.prototype.valueOf), d = o(Boolean.prototype.valueOf);
    if (s) var f = o(BigInt.prototype.valueOf);
    if (a) var p = o(Symbol.prototype.valueOf);

    function h(S, B) {
        if (typeof S != "object") return !1;
        try {
            return B(S), !0
        } catch {
            return !1
        }
    }

    e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = i;

    function g(S) {
        return typeof Promise != "undefined" && S instanceof Promise || S !== null && typeof S == "object" && typeof S.then == "function" && typeof S.catch == "function"
    }

    e.isPromise = g;

    function _(S) {
        return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? ArrayBuffer.isView(S) : i(S) || N(S)
    }

    e.isArrayBufferView = _;

    function m(S) {
        return r(S) === "Uint8Array"
    }

    e.isUint8Array = m;

    function y(S) {
        return r(S) === "Uint8ClampedArray"
    }

    e.isUint8ClampedArray = y;

    function E(S) {
        return r(S) === "Uint16Array"
    }

    e.isUint16Array = E;

    function T(S) {
        return r(S) === "Uint32Array"
    }

    e.isUint32Array = T;

    function R(S) {
        return r(S) === "Int8Array"
    }

    e.isInt8Array = R;

    function x(S) {
        return r(S) === "Int16Array"
    }

    e.isInt16Array = x;

    function F(S) {
        return r(S) === "Int32Array"
    }

    e.isInt32Array = F;

    function $(S) {
        return r(S) === "Float32Array"
    }

    e.isFloat32Array = $;

    function b(S) {
        return r(S) === "Float64Array"
    }

    e.isFloat64Array = b;

    function P(S) {
        return r(S) === "BigInt64Array"
    }

    e.isBigInt64Array = P;

    function X(S) {
        return r(S) === "BigUint64Array"
    }

    e.isBigUint64Array = X;

    function Se(S) {
        return l(S) === "[object Map]"
    }

    Se.working = typeof Map != "undefined" && Se(new Map);

    function Xe(S) {
        return typeof Map == "undefined" ? !1 : Se.working ? Se(S) : S instanceof Map
    }

    e.isMap = Xe;

    function he(S) {
        return l(S) === "[object Set]"
    }

    he.working = typeof Set != "undefined" && he(new Set);

    function je(S) {
        return typeof Set == "undefined" ? !1 : he.working ? he(S) : S instanceof Set
    }

    e.isSet = je;

    function oe(S) {
        return l(S) === "[object WeakMap]"
    }

    oe.working = typeof WeakMap != "undefined" && oe(new WeakMap);

    function Ie(S) {
        return typeof WeakMap == "undefined" ? !1 : oe.working ? oe(S) : S instanceof WeakMap
    }

    e.isWeakMap = Ie;

    function j(S) {
        return l(S) === "[object WeakSet]"
    }

    j.working = typeof WeakSet != "undefined" && j(new WeakSet);

    function Q(S) {
        return j(S)
    }

    e.isWeakSet = Q;

    function J(S) {
        return l(S) === "[object ArrayBuffer]"
    }

    J.working = typeof ArrayBuffer != "undefined" && J(new ArrayBuffer);

    function me(S) {
        return typeof ArrayBuffer == "undefined" ? !1 : J.working ? J(S) : S instanceof ArrayBuffer
    }

    e.isArrayBuffer = me;

    function v(S) {
        return l(S) === "[object DataView]"
    }

    v.working = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined" && v(new DataView(new ArrayBuffer(1), 0, 1));

    function N(S) {
        return typeof DataView == "undefined" ? !1 : v.working ? v(S) : S instanceof DataView
    }

    e.isDataView = N;
    var I = typeof SharedArrayBuffer != "undefined" ? SharedArrayBuffer : void 0;

    function k(S) {
        return l(S) === "[object SharedArrayBuffer]"
    }

    function z(S) {
        return typeof I == "undefined" ? !1 : (typeof k.working == "undefined" && (k.working = k(new I)), k.working ? k(S) : S instanceof I)
    }

    e.isSharedArrayBuffer = z;

    function W(S) {
        return l(S) === "[object AsyncFunction]"
    }

    e.isAsyncFunction = W;

    function H(S) {
        return l(S) === "[object Map Iterator]"
    }

    e.isMapIterator = H;

    function Z(S) {
        return l(S) === "[object Set Iterator]"
    }

    e.isSetIterator = Z;

    function se(S) {
        return l(S) === "[object Generator]"
    }

    e.isGeneratorObject = se;

    function Ue(S) {
        return l(S) === "[object WebAssembly.Module]"
    }

    e.isWebAssemblyCompiledModule = Ue;

    function Ve(S) {
        return h(S, u)
    }

    e.isNumberObject = Ve;

    function Qr(S) {
        return h(S, c)
    }

    e.isStringObject = Qr;

    function Cn(S) {
        return h(S, d)
    }

    e.isBooleanObject = Cn;

    function Di(S) {
        return s && h(S, f)
    }

    e.isBigIntObject = Di;

    function za(S) {
        return a && h(S, p)
    }

    e.isSymbolObject = za;

    function Ha(S) {
        return Ve(S) || Qr(S) || Cn(S) || Di(S) || za(S)
    }

    e.isBoxedPrimitive = Ha;

    function L(S) {
        return typeof Uint8Array != "undefined" && (me(S) || z(S))
    }

    e.isAnyArrayBuffer = L, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (S) {
        Object.defineProperty(e, S, {
            enumerable: !1, value: function () {
                throw new Error(S + " is not supported in userland")
            }
        })
    })
})(lT);
var Bk = function (t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function"
}, op = {exports: {}};
typeof Object.create == "function" ? op.exports = function (t, n) {
    n && (t.super_ = n, t.prototype = Object.create(n.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }))
} : op.exports = function (t, n) {
    if (n) {
        t.super_ = n;
        var r = function () {
        };
        r.prototype = n.prototype, t.prototype = new r, t.prototype.constructor = t
    }
};
(function (e) {
    var t = Object.getOwnPropertyDescriptors || function (N) {
        for (var I = Object.keys(N), k = {}, z = 0; z < I.length; z++) k[I[z]] = Object.getOwnPropertyDescriptor(N, I[z]);
        return k
    }, n = /%[sdj%]/g;
    e.format = function (v) {
        if (!R(v)) {
            for (var N = [], I = 0; I < arguments.length; I++) N.push(s(arguments[I]));
            return N.join(" ")
        }
        for (var I = 1, k = arguments, z = k.length, W = String(v).replace(n, function (Z) {
            if (Z === "%%") return "%";
            if (I >= z) return Z;
            switch (Z) {
                case"%s":
                    return String(k[I++]);
                case"%d":
                    return Number(k[I++]);
                case"%j":
                    try {
                        return JSON.stringify(k[I++])
                    } catch {
                        return "[Circular]"
                    }
                default:
                    return Z
            }
        }), H = k[I]; I < z; H = k[++I]) y(H) || !b(H) ? W += " " + H : W += " " + s(H);
        return W
    }, e.deprecate = function (v, N) {
        if (typeof process != "undefined" && process.noDeprecation === !0) return v;
        if (typeof process == "undefined") return function () {
            return e.deprecate(v, N).apply(this, arguments)
        };
        var I = !1;

        function k() {
            if (!I) {
                if (process.throwDeprecation) throw new Error(N);
                process.traceDeprecation ? console.trace(N) : console.error(N), I = !0
            }
            return v.apply(this, arguments)
        }

        return k
    };
    var r = {}, i = /^$/;
    if ({}.NODE_DEBUG) {
        var o = {}.NODE_DEBUG;
        o = o.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = new RegExp("^" + o + "$", "i")
    }
    e.debuglog = function (v) {
        if (v = v.toUpperCase(), !r[v]) if (i.test(v)) {
            var N = process.pid;
            r[v] = function () {
                var I = e.format.apply(e, arguments);
                console.error("%s %d: %s", v, N, I)
            }
        } else r[v] = function () {
        };
        return r[v]
    };

    function s(v, N) {
        var I = {seen: [], stylize: l};
        return arguments.length >= 3 && (I.depth = arguments[2]), arguments.length >= 4 && (I.colors = arguments[3]), m(N) ? I.showHidden = N : N && e._extend(I, N), F(I.showHidden) && (I.showHidden = !1), F(I.depth) && (I.depth = 2), F(I.colors) && (I.colors = !1), F(I.customInspect) && (I.customInspect = !0), I.colors && (I.stylize = a), c(I, v, I.depth)
    }

    e.inspect = s, s.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }, s.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
    };

    function a(v, N) {
        var I = s.styles[N];
        return I ? "\x1B[" + s.colors[I][0] + "m" + v + "\x1B[" + s.colors[I][1] + "m" : v
    }

    function l(v, N) {
        return v
    }

    function u(v) {
        var N = {};
        return v.forEach(function (I, k) {
            N[I] = !0
        }), N
    }

    function c(v, N, I) {
        if (v.customInspect && N && Se(N.inspect) && N.inspect !== e.inspect && !(N.constructor && N.constructor.prototype === N)) {
            var k = N.inspect(I, v);
            return R(k) || (k = c(v, k, I)), k
        }
        var z = d(v, N);
        if (z) return z;
        var W = Object.keys(N), H = u(W);
        if (v.showHidden && (W = Object.getOwnPropertyNames(N)), X(N) && (W.indexOf("message") >= 0 || W.indexOf("description") >= 0)) return f(N);
        if (W.length === 0) {
            if (Se(N)) {
                var Z = N.name ? ": " + N.name : "";
                return v.stylize("[Function" + Z + "]", "special")
            }
            if ($(N)) return v.stylize(RegExp.prototype.toString.call(N), "regexp");
            if (P(N)) return v.stylize(Date.prototype.toString.call(N), "date");
            if (X(N)) return f(N)
        }
        var se = "", Ue = !1, Ve = ["{", "}"];
        if (_(N) && (Ue = !0, Ve = ["[", "]"]), Se(N)) {
            var Qr = N.name ? ": " + N.name : "";
            se = " [Function" + Qr + "]"
        }
        if ($(N) && (se = " " + RegExp.prototype.toString.call(N)), P(N) && (se = " " + Date.prototype.toUTCString.call(N)), X(N) && (se = " " + f(N)), W.length === 0 && (!Ue || N.length == 0)) return Ve[0] + se + Ve[1];
        if (I < 0) return $(N) ? v.stylize(RegExp.prototype.toString.call(N), "regexp") : v.stylize("[Object]", "special");
        v.seen.push(N);
        var Cn;
        return Ue ? Cn = p(v, N, I, H, W) : Cn = W.map(function (Di) {
            return h(v, N, I, H, Di, Ue)
        }), v.seen.pop(), g(Cn, se, Ve)
    }

    function d(v, N) {
        if (F(N)) return v.stylize("undefined", "undefined");
        if (R(N)) {
            var I = "'" + JSON.stringify(N).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return v.stylize(I, "string")
        }
        if (T(N)) return v.stylize("" + N, "number");
        if (m(N)) return v.stylize("" + N, "boolean");
        if (y(N)) return v.stylize("null", "null")
    }

    function f(v) {
        return "[" + Error.prototype.toString.call(v) + "]"
    }

    function p(v, N, I, k, z) {
        for (var W = [], H = 0, Z = N.length; H < Z; ++H) j(N, String(H)) ? W.push(h(v, N, I, k, String(H), !0)) : W.push("");
        return z.forEach(function (se) {
            se.match(/^\d+$/) || W.push(h(v, N, I, k, se, !0))
        }), W
    }

    function h(v, N, I, k, z, W) {
        var H, Z, se;
        if (se = Object.getOwnPropertyDescriptor(N, z) || {value: N[z]}, se.get ? se.set ? Z = v.stylize("[Getter/Setter]", "special") : Z = v.stylize("[Getter]", "special") : se.set && (Z = v.stylize("[Setter]", "special")), j(k, z) || (H = "[" + z + "]"), Z || (v.seen.indexOf(se.value) < 0 ? (y(I) ? Z = c(v, se.value, null) : Z = c(v, se.value, I - 1), Z.indexOf(`
`) > -1 && (W ? Z = Z.split(`
`).map(function (Ue) {
            return "  " + Ue
        }).join(`
`).substr(2) : Z = `
` + Z.split(`
`).map(function (Ue) {
            return "   " + Ue
        }).join(`
`))) : Z = v.stylize("[Circular]", "special")), F(H)) {
            if (W && z.match(/^\d+$/)) return Z;
            H = JSON.stringify("" + z), H.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (H = H.substr(1, H.length - 2), H = v.stylize(H, "name")) : (H = H.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), H = v.stylize(H, "string"))
        }
        return H + ": " + Z
    }

    function g(v, N, I) {
        var k = v.reduce(function (z, W) {
            return W.indexOf(`
`) >= 0, z + W.replace(/\u001b\[\d\d?m/g, "").length + 1
        }, 0);
        return k > 60 ? I[0] + (N === "" ? "" : N + `
 `) + " " + v.join(`,
  `) + " " + I[1] : I[0] + N + " " + v.join(", ") + " " + I[1]
    }

    e.types = lT;

    function _(v) {
        return Array.isArray(v)
    }

    e.isArray = _;

    function m(v) {
        return typeof v == "boolean"
    }

    e.isBoolean = m;

    function y(v) {
        return v === null
    }

    e.isNull = y;

    function E(v) {
        return v == null
    }

    e.isNullOrUndefined = E;

    function T(v) {
        return typeof v == "number"
    }

    e.isNumber = T;

    function R(v) {
        return typeof v == "string"
    }

    e.isString = R;

    function x(v) {
        return typeof v == "symbol"
    }

    e.isSymbol = x;

    function F(v) {
        return v === void 0
    }

    e.isUndefined = F;

    function $(v) {
        return b(v) && he(v) === "[object RegExp]"
    }

    e.isRegExp = $, e.types.isRegExp = $;

    function b(v) {
        return typeof v == "object" && v !== null
    }

    e.isObject = b;

    function P(v) {
        return b(v) && he(v) === "[object Date]"
    }

    e.isDate = P, e.types.isDate = P;

    function X(v) {
        return b(v) && (he(v) === "[object Error]" || v instanceof Error)
    }

    e.isError = X, e.types.isNativeError = X;

    function Se(v) {
        return typeof v == "function"
    }

    e.isFunction = Se;

    function Xe(v) {
        return v === null || typeof v == "boolean" || typeof v == "number" || typeof v == "string" || typeof v == "symbol" || typeof v == "undefined"
    }

    e.isPrimitive = Xe, e.isBuffer = Bk;

    function he(v) {
        return Object.prototype.toString.call(v)
    }

    function je(v) {
        return v < 10 ? "0" + v.toString(10) : v.toString(10)
    }

    var oe = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function Ie() {
        var v = new Date, N = [je(v.getHours()), je(v.getMinutes()), je(v.getSeconds())].join(":");
        return [v.getDate(), oe[v.getMonth()], N].join(" ")
    }

    e.log = function () {
        console.log("%s - %s", Ie(), e.format.apply(e, arguments))
    }, e.inherits = op.exports, e._extend = function (v, N) {
        if (!N || !b(N)) return v;
        for (var I = Object.keys(N), k = I.length; k--;) v[I[k]] = N[I[k]];
        return v
    };

    function j(v, N) {
        return Object.prototype.hasOwnProperty.call(v, N)
    }

    var Q = typeof Symbol != "undefined" ? Symbol("util.promisify.custom") : void 0;
    e.promisify = function (N) {
        if (typeof N != "function") throw new TypeError('The "original" argument must be of type Function');
        if (Q && N[Q]) {
            var I = N[Q];
            if (typeof I != "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(I, Q, {value: I, enumerable: !1, writable: !1, configurable: !0}), I
        }

        function I() {
            for (var k, z, W = new Promise(function (se, Ue) {
                k = se, z = Ue
            }), H = [], Z = 0; Z < arguments.length; Z++) H.push(arguments[Z]);
            H.push(function (se, Ue) {
                se ? z(se) : k(Ue)
            });
            try {
                N.apply(this, H)
            } catch (se) {
                z(se)
            }
            return W
        }

        return Object.setPrototypeOf(I, Object.getPrototypeOf(N)), Q && Object.defineProperty(I, Q, {
            value: I,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }), Object.defineProperties(I, t(N))
    }, e.promisify.custom = Q;

    function J(v, N) {
        if (!v) {
            var I = new Error("Promise was rejected with a falsy value");
            I.reason = v, v = I
        }
        return N(v)
    }

    function me(v) {
        if (typeof v != "function") throw new TypeError('The "original" argument must be of type Function');

        function N() {
            for (var I = [], k = 0; k < arguments.length; k++) I.push(arguments[k]);
            var z = I.pop();
            if (typeof z != "function") throw new TypeError("The last argument must be of type Function");
            var W = this, H = function () {
                return z.apply(W, arguments)
            };
            v.apply(this, I).then(function (Z) {
                process.nextTick(H.bind(null, null, Z))
            }, function (Z) {
                process.nextTick(J.bind(null, Z, H))
            })
        }

        return Object.setPrototypeOf(N, Object.getPrototypeOf(v)), Object.defineProperties(N, t(v)), N
    }

    e.callbackify = me
})(Bh);
Vh.TextEncoder = typeof TextEncoder != "undefined" ? TextEncoder : Bh.TextEncoder;
Vh.TextDecoder = typeof TextDecoder != "undefined" ? TextDecoder : Bh.TextDecoder;
Object.defineProperty(Nn, "__esModule", {value: !0});
Nn.getArrayBuffer = Nn.decodeBuffer = Nn.encodeBuffer = void 0;
var DT = Vh;

function zk(e) {
    var t = new DT.TextEncoder, n = t.encode(e);
    return RT(n)
}

Nn.encodeBuffer = zk;

function Hk(e, t) {
    var n = new DT.TextDecoder(t);
    return n.decode(e)
}

Nn.decodeBuffer = Hk;

function RT(e) {
    return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
}

Nn.getArrayBuffer = RT;
var Tc = {};
Object.defineProperty(Tc, "__esModule", {value: !0});
Tc.uuidv4 = void 0;

function Gk() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = Math.random() * 16 | 0, n = e == "x" ? t : t & 3 | 8;
        return n.toString(16)
    })
}

Tc.uuidv4 = Gk;
var zf = V && V.__awaiter || function (e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (s) {
            s(o)
        })
    }

    return new (n || (n = Promise))(function (o, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? o(c.value) : i(c.value).then(a, l)
        }

        u((r = r.apply(e, t || [])).next())
    })
}, Hf = V && V.__generator || function (e, t) {
    var n = {
        label: 0, sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1]
        }, trys: [], ops: []
    }, r, i, o, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function () {
        return this
    }), s;

    function a(u) {
        return function (c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n;) try {
            if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
            switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++, {value: u[1], done: !1};
                case 5:
                    n.label++, i = u[1], u = [0];
                    continue;
                case 7:
                    u = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1], o = u;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2], n.ops.push(u);
                        break
                    }
                    o[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            u = t.call(e, n)
        } catch (c) {
            u = [6, c], i = 0
        } finally {
            r = o = 0
        }
        if (u[0] & 5) throw u[1];
        return {value: u[0] ? u[1] : void 0, done: !0}
    }
};
Object.defineProperty(Oi, "__esModule", {value: !0});
Oi.IsomorphicRequest = void 0;
var qk = dn, Gf = bi, Yy = Nn, Qk = Tc, Wk = function () {
    function e(t, n) {
        n === void 0 && (n = {});
        var r = new ArrayBuffer(0);
        if (this._bodyUsed = !1, t instanceof e) {
            this.id = t.id, this.url = t.url, this.method = t.method, this.headers = t.headers, this.credentials = t.credentials, this._body = t._body || r;
            return
        }
        this.id = Qk.uuidv4(), this.url = t, this.method = n.method || "GET", this.headers = new qk.Headers(n.headers), this.credentials = n.credentials || "same-origin", this._body = n.body || r
    }

    return Object.defineProperty(e.prototype, "bodyUsed", {
        get: function () {
            return this._bodyUsed
        }, enumerable: !1, configurable: !0
    }), e.prototype.text = function () {
        return zf(this, void 0, void 0, function () {
            return Hf(this, function (t) {
                return Gf.invariant(!this.bodyUsed, 'Failed to execute "text" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, Yy.decodeBuffer(this._body)]
            })
        })
    }, e.prototype.json = function () {
        return zf(this, void 0, void 0, function () {
            var t;
            return Hf(this, function (n) {
                return Gf.invariant(!this.bodyUsed, 'Failed to execute "json" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, t = Yy.decodeBuffer(this._body), [2, JSON.parse(t)]
            })
        })
    }, e.prototype.arrayBuffer = function () {
        return zf(this, void 0, void 0, function () {
            return Hf(this, function (t) {
                return Gf.invariant(!this.bodyUsed, 'Failed to execute "arrayBuffer" on "IsomorphicRequest": body buffer already read'), this._bodyUsed = !0, [2, this._body]
            })
        })
    }, e.prototype.clone = function () {
        return new e(this)
    }, e
}();
Oi.IsomorphicRequest = Wk;
var Qo = {}, _c = {}, Yk = V && V.__awaiter || function (e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (s) {
            s(o)
        })
    }

    return new (n || (n = Promise))(function (o, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? o(c.value) : i(c.value).then(a, l)
        }

        u((r = r.apply(e, t || [])).next())
    })
}, Xk = V && V.__generator || function (e, t) {
    var n = {
        label: 0, sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1]
        }, trys: [], ops: []
    }, r, i, o, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function () {
        return this
    }), s;

    function a(u) {
        return function (c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n;) try {
            if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
            switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++, {value: u[1], done: !1};
                case 5:
                    n.label++, i = u[1], u = [0];
                    continue;
                case 7:
                    u = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1], o = u;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2], n.ops.push(u);
                        break
                    }
                    o[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            u = t.call(e, n)
        } catch (c) {
            u = [6, c], i = 0
        } finally {
            r = o = 0
        }
        if (u[0] & 5) throw u[1];
        return {value: u[0] ? u[1] : void 0, done: !0}
    }
};
Object.defineProperty(_c, "__esModule", {value: !0});
_c.createLazyCallback = void 0;

function Jk(e) {
    var t = this;
    e === void 0 && (e = {});
    var n = 0, r, i, o = new Promise(function (a) {
        i = a
    }).finally(function () {
        clearTimeout(r)
    }), s = function () {
        for (var a, l = [], u = 0; u < arguments.length; u++) l[u] = arguments[u];
        e.maxCalls && n >= e.maxCalls && ((a = e.maxCallsCallback) === null || a === void 0 || a.call(e)), i(l), n++
    };
    return s.invoked = function () {
        return Yk(t, void 0, void 0, function () {
            return Xk(this, function (a) {
                return r = setTimeout(function () {
                    i([])
                }, 0), [2, o]
            })
        })
    }, s
}

_c.createLazyCallback = Jk;
var Kk = V && V.__extends || function () {
    var e = function (t, n) {
        return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
            r.__proto__ = i
        } || function (r, i) {
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }, e(t, n)
    };
    return function (t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }

        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
Object.defineProperty(Qo, "__esModule", {value: !0});
Qo.InteractiveIsomorphicRequest = void 0;
var Zk = bi, ex = Oi, tx = _c, nx = function (e) {
    Kk(t, e);

    function t(n) {
        var r = e.call(this, n) || this;
        return r.respondWith = tx.createLazyCallback({
            maxCalls: 1, maxCallsCallback: function () {
                Zk.invariant(!1, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', r.method, r.url.href)
            }
        }), r
    }

    return t
}(ex.IsomorphicRequest);
Qo.InteractiveIsomorphicRequest = nx;
var _a = {};
Object.defineProperty(_a, "__esModule", {value: !0});
_a.getCleanUrl = void 0;

function rx(e, t) {
    return t === void 0 && (t = !0), [t && e.origin, e.pathname].filter(Boolean).join("")
}

_a.getCleanUrl = rx;
(function (e) {
    var t = V && V.__createBinding || (Object.create ? function (o, s, a, l) {
        l === void 0 && (l = a), Object.defineProperty(o, l, {
            enumerable: !0, get: function () {
                return s[a]
            }
        })
    } : function (o, s, a, l) {
        l === void 0 && (l = a), o[l] = s[a]
    }), n = V && V.__exportStar || function (o, s) {
        for (var a in o) a !== "default" && !Object.prototype.hasOwnProperty.call(s, a) && t(s, o, a)
    };
    Object.defineProperty(e, "__esModule", {value: !0}), e.decodeBuffer = e.encodeBuffer = e.getCleanUrl = void 0, n(qo, e), n(wa, e), n(gc, e), n(Oi, e), n(Qo, e);
    var r = _a;
    Object.defineProperty(e, "getCleanUrl", {
        enumerable: !0, get: function () {
            return r.getCleanUrl
        }
    });
    var i = Nn;
    Object.defineProperty(e, "encodeBuffer", {
        enumerable: !0, get: function () {
            return i.encodeBuffer
        }
    }), Object.defineProperty(e, "decodeBuffer", {
        enumerable: !0, get: function () {
            return i.decodeBuffer
        }
    })
})(Ea);
var Qh = {}, kT = {}, Sa = {exports: {}}, no = {decodeValues: !0, map: !1, silent: !1};

function sp(e) {
    return typeof e == "string" && !!e.trim()
}

function ap(e, t) {
    var n = e.split(";").filter(sp), r = n.shift(), i = ix(r), o = i.name, s = i.value;
    t = t ? Object.assign({}, no, t) : no;
    try {
        s = t.decodeValues ? decodeURIComponent(s) : s
    } catch (l) {
        console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + s + "'. Set options.decodeValues to false to disable this feature.", l)
    }
    var a = {name: o, value: s};
    return n.forEach(function (l) {
        var u = l.split("="), c = u.shift().trimLeft().toLowerCase(), d = u.join("=");
        c === "expires" ? a.expires = new Date(d) : c === "max-age" ? a.maxAge = parseInt(d, 10) : c === "secure" ? a.secure = !0 : c === "httponly" ? a.httpOnly = !0 : c === "samesite" ? a.sameSite = d : a[c] = d
    }), a
}

function ix(e) {
    var t = "", n = "", r = e.split("=");
    return r.length > 1 ? (t = r.shift(), n = r.join("=")) : n = e, {name: t, value: n}
}

function xT(e, t) {
    if (t = t ? Object.assign({}, no, t) : no, !e) return t.map ? {} : [];
    if (e.headers && e.headers["set-cookie"]) e = e.headers["set-cookie"]; else if (e.headers) {
        var n = e.headers[Object.keys(e.headers).find(function (i) {
            return i.toLowerCase() === "set-cookie"
        })];
        !n && e.headers.cookie && !t.silent && console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."), e = n
    }
    if (Array.isArray(e) || (e = [e]), t = t ? Object.assign({}, no, t) : no, t.map) {
        var r = {};
        return e.filter(sp).reduce(function (i, o) {
            var s = ap(o, t);
            return i[s.name] = s, i
        }, r)
    } else return e.filter(sp).map(function (i) {
        return ap(i, t)
    })
}

function ox(e) {
    if (Array.isArray(e)) return e;
    if (typeof e != "string") return [];
    var t = [], n = 0, r, i, o, s, a;

    function l() {
        for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
        return n < e.length
    }

    function u() {
        return i = e.charAt(n), i !== "=" && i !== ";" && i !== ","
    }

    for (; n < e.length;) {
        for (r = n, a = !1; l();) if (i = e.charAt(n), i === ",") {
            for (o = n, n += 1, l(), s = n; n < e.length && u();) n += 1;
            n < e.length && e.charAt(n) === "=" ? (a = !0, n = s, t.push(e.substring(r, o)), r = n) : n = o + 1
        } else n += 1;
        (!a || n >= e.length) && t.push(e.substring(r, e.length))
    }
    return t
}

Sa.exports = xT;
Sa.exports.parse = xT;
Sa.exports.parseString = ap;
Sa.exports.splitCookiesString = ox;
(function (e) {
    var t = V && V.__rest || function (o, s) {
        var a = {};
        for (var l in o) Object.prototype.hasOwnProperty.call(o, l) && s.indexOf(l) < 0 && (a[l] = o[l]);
        if (o != null && typeof Object.getOwnPropertySymbols == "function") for (var u = 0, l = Object.getOwnPropertySymbols(o); u < l.length; u++) s.indexOf(l[u]) < 0 && Object.prototype.propertyIsEnumerable.call(o, l[u]) && (a[l[u]] = o[l[u]]);
        return a
    };
    Object.defineProperty(e, "__esModule", {value: !0}), e.store = e.PERSISTENCY_KEY = void 0;
    const n = Sa.exports;
    e.PERSISTENCY_KEY = "MSW_COOKIE_STORE";

    function r() {
        try {
            if (localStorage == null) return !1;
            const o = e.PERSISTENCY_KEY + "_test";
            return localStorage.setItem(o, "test"), localStorage.getItem(o), localStorage.removeItem(o), !0
        } catch {
            return !1
        }
    }

    class i {
        constructor() {
            this.store = new Map
        }

        add(s, a) {
            if (s.credentials === "omit") return;
            const l = new URL(s.url), u = a.headers.get("set-cookie");
            if (!u) return;
            const c = Date.now(), d = n.parse(u).map(p => {
                var {maxAge: h} = p, g = t(p, ["maxAge"]);
                return Object.assign(Object.assign({}, g), {
                    expires: h === void 0 ? g.expires : new Date(c + h * 1e3),
                    maxAge: h
                })
            }), f = this.store.get(l.origin) || new Map;
            d.forEach(p => {
                this.store.set(l.origin, f.set(p.name, p))
            })
        }

        get(s) {
            this.deleteExpiredCookies();
            const a = new URL(s.url), l = this.store.get(a.origin) || new Map;
            switch (s.credentials) {
                case"include":
                    return typeof document == "undefined" || n.parse(document.cookie).forEach(c => {
                        l.set(c.name, c)
                    }), l;
                case"same-origin":
                    return l;
                default:
                    return new Map
            }
        }

        getAll() {
            return this.deleteExpiredCookies(), this.store
        }

        deleteAll(s) {
            const a = new URL(s.url);
            this.store.delete(a.origin)
        }

        clear() {
            this.store.clear()
        }

        hydrate() {
            if (!r()) return;
            const s = localStorage.getItem(e.PERSISTENCY_KEY);
            if (!!s) try {
                JSON.parse(s).forEach(([l, u]) => {
                    this.store.set(l, new Map(u.map(c => {
                        var [d, f] = c, {expires: p} = f, h = t(f, ["expires"]);
                        return [d, p === void 0 ? h : Object.assign(Object.assign({}, h), {expires: new Date(p)})]
                    })))
                })
            } catch (a) {
                console.warn(`
[virtual-cookie] Failed to parse a stored cookie from the localStorage (key "${e.PERSISTENCY_KEY}").

Stored value:
${localStorage.getItem(e.PERSISTENCY_KEY)}

Thrown exception:
${a}

Invalid value has been removed from localStorage to prevent subsequent failed parsing attempts.`), localStorage.removeItem(e.PERSISTENCY_KEY)
            }
        }

        persist() {
            if (!r()) return;
            const s = Array.from(this.store.entries()).map(([a, l]) => [a, Array.from(l.entries())]);
            localStorage.setItem(e.PERSISTENCY_KEY, JSON.stringify(s))
        }

        deleteExpiredCookies() {
            const s = Date.now();
            this.store.forEach((a, l) => {
                a.forEach(({expires: u, name: c}) => {
                    u !== void 0 && u.getTime() <= s && a.delete(c)
                }), a.size === 0 && this.store.delete(l)
            })
        }
    }

    e.store = new i
})(kT);
(function (e) {
    var t = V && V.__createBinding || (Object.create ? function (r, i, o, s) {
        s === void 0 && (s = o), Object.defineProperty(r, s, {
            enumerable: !0, get: function () {
                return i[o]
            }
        })
    } : function (r, i, o, s) {
        s === void 0 && (s = o), r[s] = i[o]
    }), n = V && V.__exportStar || function (r, i) {
        for (var o in r) o !== "default" && !Object.prototype.hasOwnProperty.call(i, o) && t(i, r, o)
    };
    Object.defineProperty(e, "__esModule", {value: !0}), n(kT, e)
})(Qh);
var sx = function () {
    function e(t, n, r, i, o) {
        return t < n || r < n ? t > r ? r + 1 : t + 1 : i === o ? n : n + 1
    }

    return function (t, n) {
        if (t === n) return 0;
        if (t.length > n.length) {
            var r = t;
            t = n, n = r
        }
        for (var i = t.length, o = n.length; i > 0 && t.charCodeAt(i - 1) === n.charCodeAt(o - 1);) i--, o--;
        for (var s = 0; s < i && t.charCodeAt(s) === n.charCodeAt(s);) s++;
        if (i -= s, o -= s, i === 0 || o < 3) return o;
        var a = 0, l, u, c, d, f, p, h, g, _, m, y, E, T = [];
        for (l = 0; l < i; l++) T.push(l + 1), T.push(t.charCodeAt(s + l));
        for (var R = T.length - 1; a < o - 3;) for (_ = n.charCodeAt(s + (u = a)), m = n.charCodeAt(s + (c = a + 1)), y = n.charCodeAt(s + (d = a + 2)), E = n.charCodeAt(s + (f = a + 3)), p = a += 4, l = 0; l < R; l += 2) h = T[l], g = T[l + 1], u = e(h, u, c, _, g), c = e(u, c, d, m, g), d = e(c, d, f, y, g), p = e(d, f, p, E, g), T[l] = p, f = d, d = c, c = u, u = h;
        for (; a < o;) for (_ = n.charCodeAt(s + (u = a)), p = ++a, l = 0; l < R; l += 2) h = T[l], T[l] = p = e(h, u, p, _, T[l + 1]), u = h;
        return p
    }
}();
const ax = "16.6.0", lx = Object.freeze({major: 16, minor: 6, patch: 0, preReleaseTag: null});

function ie(e, t) {
    if (!Boolean(e)) throw new Error(t)
}

function qt(e) {
    return typeof (e == null ? void 0 : e.then) == "function"
}

function Qt(e) {
    return typeof e == "object" && e !== null
}

function Ge(e, t) {
    if (!Boolean(e)) throw new Error(t != null ? t : "Unexpected invariant triggered.")
}

const ux = /\r\n|[\n\r]/g;

function Ou(e, t) {
    let n = 0, r = 1;
    for (const i of e.body.matchAll(ux)) {
        if (typeof i.index == "number" || Ge(!1), i.index >= t) break;
        n = i.index + i[0].length, r += 1
    }
    return {line: r, column: t + 1 - n}
}

function LT(e) {
    return Wh(e.source, Ou(e.source, e.start))
}

function Wh(e, t) {
    const n = e.locationOffset.column - 1, r = "".padStart(n) + e.body, i = t.line - 1, o = e.locationOffset.line - 1,
        s = t.line + o, a = t.line === 1 ? n : 0, l = t.column + a, u = `${e.name}:${s}:${l}
`, c = r.split(/\r\n|[\n\r]/g), d = c[i];
    if (d.length > 120) {
        const f = Math.floor(l / 80), p = l % 80, h = [];
        for (let g = 0; g < d.length; g += 80) h.push(d.slice(g, g + 80));
        return u + Xy([[`${s} |`, h[0]], ...h.slice(1, f + 1).map(g => ["|", g]), ["|", "^".padStart(p)], ["|", h[f + 1]]])
    }
    return u + Xy([[`${s - 1} |`, c[i - 1]], [`${s} |`, d], ["|", "^".padStart(l)], [`${s + 1} |`, c[i + 1]]])
}

function Xy(e) {
    const t = e.filter(([r, i]) => i !== void 0), n = Math.max(...t.map(([r]) => r.length));
    return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`)
}

function cx(e) {
    const t = e[0];
    return t == null || "kind" in t || "length" in t ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5]
    } : t
}

class A extends Error {
    constructor(t, ...n) {
        var r, i, o;
        const {nodes: s, source: a, positions: l, path: u, originalError: c, extensions: d} = cx(n);
        super(t), this.name = "GraphQLError", this.path = u != null ? u : void 0, this.originalError = c != null ? c : void 0, this.nodes = Jy(Array.isArray(s) ? s : s ? [s] : void 0);
        const f = Jy((r = this.nodes) === null || r === void 0 ? void 0 : r.map(h => h.loc).filter(h => h != null));
        this.source = a != null ? a : f == null || (i = f[0]) === null || i === void 0 ? void 0 : i.source, this.positions = l != null ? l : f == null ? void 0 : f.map(h => h.start), this.locations = l && a ? l.map(h => Ou(a, h)) : f == null ? void 0 : f.map(h => Ou(h.source, h.start));
        const p = Qt(c == null ? void 0 : c.extensions) ? c == null ? void 0 : c.extensions : void 0;
        this.extensions = (o = d != null ? d : p) !== null && o !== void 0 ? o : Object.create(null), Object.defineProperties(this, {
            message: {
                writable: !0,
                enumerable: !0
            },
            name: {enumerable: !1},
            nodes: {enumerable: !1},
            source: {enumerable: !1},
            positions: {enumerable: !1},
            originalError: {enumerable: !1}
        }), c != null && c.stack ? Object.defineProperty(this, "stack", {
            value: c.stack,
            writable: !0,
            configurable: !0
        }) : Error.captureStackTrace ? Error.captureStackTrace(this, A) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
        })
    }

    get [Symbol.toStringTag]() {
        return "GraphQLError"
    }

    toString() {
        let t = this.message;
        if (this.nodes) for (const n of this.nodes) n.loc && (t += `

` + LT(n.loc)); else if (this.source && this.locations) for (const n of this.locations) t += `

` + Wh(this.source, n);
        return t
    }

    toJSON() {
        const t = {message: this.message};
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t
    }
}

function Jy(e) {
    return e === void 0 || e.length === 0 ? void 0 : e
}

function fx(e) {
    return e.toString()
}

function dx(e) {
    return e.toJSON()
}

function Ze(e, t, n) {
    return new A(`Syntax Error: ${n}`, {source: e, positions: [t]})
}

class PT {
    constructor(t, n, r) {
        this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = r
    }

    get [Symbol.toStringTag]() {
        return "Location"
    }

    toJSON() {
        return {start: this.start, end: this.end}
    }
}

class Yh {
    constructor(t, n, r, i, o, s) {
        this.kind = t, this.start = n, this.end = r, this.line = i, this.column = o, this.value = s, this.prev = null, this.next = null
    }

    get [Symbol.toStringTag]() {
        return "Token"
    }

    toJSON() {
        return {kind: this.kind, value: this.value, line: this.line, column: this.column}
    }
}

const FT = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
    InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"]
}, px = new Set(Object.keys(FT));

function lp(e) {
    const t = e == null ? void 0 : e.kind;
    return typeof t == "string" && px.has(t)
}

var tt;
(function (e) {
    e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
})(tt || (tt = {}));
var Y;
(function (e) {
    e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
})(Y || (Y = {}));
var w;
(function (e) {
    e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
})(w || (w = {}));

function up(e) {
    return e === 9 || e === 32
}

function na(e) {
    return e >= 48 && e <= 57
}

function MT(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}

function Xh(e) {
    return MT(e) || e === 95
}

function $T(e) {
    return MT(e) || na(e) || e === 95
}

function hx(e) {
    var t;
    let n = Number.MAX_SAFE_INTEGER, r = null, i = -1;
    for (let s = 0; s < e.length; ++s) {
        var o;
        const a = e[s], l = mx(a);
        l !== a.length && (r = (o = r) !== null && o !== void 0 ? o : s, i = s, s !== 0 && l < n && (n = l))
    }
    return e.map((s, a) => a === 0 ? s : s.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1)
}

function mx(e) {
    let t = 0;
    for (; t < e.length && up(e.charCodeAt(t));) ++t;
    return t
}

function vx(e) {
    if (e === "") return !0;
    let t = !0, n = !1, r = !0, i = !1;
    for (let o = 0; o < e.length; ++o) switch (e.codePointAt(o)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 11:
        case 12:
        case 14:
        case 15:
            return !1;
        case 13:
            return !1;
        case 10:
            if (t && !i) return !1;
            i = !0, t = !0, n = !1;
            break;
        case 9:
        case 32:
            n || (n = t);
            break;
        default:
            r && (r = n), t = !1
    }
    return !(t || r && i)
}

function jT(e, t) {
    const n = e.replace(/"""/g, '\\"""'), r = n.split(/\r\n|[\n\r]/g), i = r.length === 1,
        o = r.length > 1 && r.slice(1).every(p => p.length === 0 || up(p.charCodeAt(0))), s = n.endsWith('\\"""'),
        a = e.endsWith('"') && !s, l = e.endsWith("\\"), u = a || l,
        c = !(t != null && t.minimize) && (!i || e.length > 70 || u || o || s);
    let d = "";
    const f = i && up(e.charCodeAt(0));
    return (c && !f || o) && (d += `
`), d += n, (c || u) && (d += `
`), '"""' + d + '"""'
}

var C;
(function (e) {
    e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
})(C || (C = {}));

class Jh {
    constructor(t) {
        const n = new Yh(C.SOF, 0, 0, 0, 0);
        this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0
    }

    get [Symbol.toStringTag]() {
        return "Lexer"
    }

    advance() {
        return this.lastToken = this.token, this.token = this.lookahead()
    }

    lookahead() {
        let t = this.token;
        if (t.kind !== C.EOF) do if (t.next) t = t.next; else {
            const n = yx(this, t.end);
            t.next = n, n.prev = t, t = n
        } while (t.kind === C.COMMENT);
        return t
    }
}

function UT(e) {
    return e === C.BANG || e === C.DOLLAR || e === C.AMP || e === C.PAREN_L || e === C.PAREN_R || e === C.SPREAD || e === C.COLON || e === C.EQUALS || e === C.AT || e === C.BRACKET_L || e === C.BRACKET_R || e === C.BRACE_L || e === C.PIPE || e === C.BRACE_R
}

function Wo(e) {
    return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
}

function Sc(e, t) {
    return VT(e.charCodeAt(t)) && BT(e.charCodeAt(t + 1))
}

function VT(e) {
    return e >= 55296 && e <= 56319
}

function BT(e) {
    return e >= 56320 && e <= 57343
}

function gi(e, t) {
    const n = e.source.body.codePointAt(t);
    if (n === void 0) return C.EOF;
    if (n >= 32 && n <= 126) {
        const r = String.fromCodePoint(n);
        return r === '"' ? `'"'` : `"${r}"`
    }
    return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
}

function qe(e, t, n, r, i) {
    const o = e.line, s = 1 + n - e.lineStart;
    return new Yh(t, n, r, o, s, i)
}

function yx(e, t) {
    const n = e.source.body, r = n.length;
    let i = t;
    for (; i < r;) {
        const o = n.charCodeAt(i);
        switch (o) {
            case 65279:
            case 9:
            case 32:
            case 44:
                ++i;
                continue;
            case 10:
                ++i, ++e.line, e.lineStart = i;
                continue;
            case 13:
                n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
                continue;
            case 35:
                return gx(e, i);
            case 33:
                return qe(e, C.BANG, i, i + 1);
            case 36:
                return qe(e, C.DOLLAR, i, i + 1);
            case 38:
                return qe(e, C.AMP, i, i + 1);
            case 40:
                return qe(e, C.PAREN_L, i, i + 1);
            case 41:
                return qe(e, C.PAREN_R, i, i + 1);
            case 46:
                if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return qe(e, C.SPREAD, i, i + 3);
                break;
            case 58:
                return qe(e, C.COLON, i, i + 1);
            case 61:
                return qe(e, C.EQUALS, i, i + 1);
            case 64:
                return qe(e, C.AT, i, i + 1);
            case 91:
                return qe(e, C.BRACKET_L, i, i + 1);
            case 93:
                return qe(e, C.BRACKET_R, i, i + 1);
            case 123:
                return qe(e, C.BRACE_L, i, i + 1);
            case 124:
                return qe(e, C.PIPE, i, i + 1);
            case 125:
                return qe(e, C.BRACE_R, i, i + 1);
            case 34:
                return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? Nx(e, i) : wx(e, i)
        }
        if (na(o) || o === 45) return Ex(e, i, o);
        if (Xh(o)) return Ix(e, i);
        throw Ze(e.source, i, o === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : Wo(o) || Sc(n, i) ? `Unexpected character: ${gi(e, i)}.` : `Invalid character: ${gi(e, i)}.`)
    }
    return qe(e, C.EOF, r, r)
}

function gx(e, t) {
    const n = e.source.body, r = n.length;
    let i = t + 1;
    for (; i < r;) {
        const o = n.charCodeAt(i);
        if (o === 10 || o === 13) break;
        if (Wo(o)) ++i; else if (Sc(n, i)) i += 2; else break
    }
    return qe(e, C.COMMENT, t, i, n.slice(t + 1, i))
}

function Ex(e, t, n) {
    const r = e.source.body;
    let i = t, o = n, s = !1;
    if (o === 45 && (o = r.charCodeAt(++i)), o === 48) {
        if (o = r.charCodeAt(++i), na(o)) throw Ze(e.source, i, `Invalid number, unexpected digit after 0: ${gi(e, i)}.`)
    } else i = qf(e, i, o), o = r.charCodeAt(i);
    if (o === 46 && (s = !0, o = r.charCodeAt(++i), i = qf(e, i, o), o = r.charCodeAt(i)), (o === 69 || o === 101) && (s = !0, o = r.charCodeAt(++i), (o === 43 || o === 45) && (o = r.charCodeAt(++i)), i = qf(e, i, o), o = r.charCodeAt(i)), o === 46 || Xh(o)) throw Ze(e.source, i, `Invalid number, expected digit but got: ${gi(e, i)}.`);
    return qe(e, s ? C.FLOAT : C.INT, t, i, r.slice(t, i))
}

function qf(e, t, n) {
    if (!na(n)) throw Ze(e.source, t, `Invalid number, expected digit but got: ${gi(e, t)}.`);
    const r = e.source.body;
    let i = t + 1;
    for (; na(r.charCodeAt(i));) ++i;
    return i
}

function wx(e, t) {
    const n = e.source.body, r = n.length;
    let i = t + 1, o = i, s = "";
    for (; i < r;) {
        const a = n.charCodeAt(i);
        if (a === 34) return s += n.slice(o, i), qe(e, C.STRING, t, i + 1, s);
        if (a === 92) {
            s += n.slice(o, i);
            const l = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? Tx(e, i) : _x(e, i) : Sx(e, i);
            s += l.value, i += l.size, o = i;
            continue
        }
        if (a === 10 || a === 13) break;
        if (Wo(a)) ++i; else if (Sc(n, i)) i += 2; else throw Ze(e.source, i, `Invalid character within String: ${gi(e, i)}.`)
    }
    throw Ze(e.source, i, "Unterminated string.")
}

function Tx(e, t) {
    const n = e.source.body;
    let r = 0, i = 3;
    for (; i < 12;) {
        const o = n.charCodeAt(t + i++);
        if (o === 125) {
            if (i < 5 || !Wo(r)) break;
            return {value: String.fromCodePoint(r), size: i}
        }
        if (r = r << 4 | Ts(o), r < 0) break
    }
    throw Ze(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`)
}

function _x(e, t) {
    const n = e.source.body, r = Ky(n, t + 2);
    if (Wo(r)) return {value: String.fromCodePoint(r), size: 6};
    if (VT(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        const i = Ky(n, t + 8);
        if (BT(i)) return {value: String.fromCodePoint(r, i), size: 12}
    }
    throw Ze(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`)
}

function Ky(e, t) {
    return Ts(e.charCodeAt(t)) << 12 | Ts(e.charCodeAt(t + 1)) << 8 | Ts(e.charCodeAt(t + 2)) << 4 | Ts(e.charCodeAt(t + 3))
}

function Ts(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
}

function Sx(e, t) {
    const n = e.source.body;
    switch (n.charCodeAt(t + 1)) {
        case 34:
            return {value: '"', size: 2};
        case 92:
            return {value: "\\", size: 2};
        case 47:
            return {value: "/", size: 2};
        case 98:
            return {value: "\b", size: 2};
        case 102:
            return {value: "\f", size: 2};
        case 110:
            return {
                value: `
`, size: 2
            };
        case 114:
            return {value: "\r", size: 2};
        case 116:
            return {value: "	", size: 2}
    }
    throw Ze(e.source, t, `Invalid character escape sequence: "${n.slice(t, t + 2)}".`)
}

function Nx(e, t) {
    const n = e.source.body, r = n.length;
    let i = e.lineStart, o = t + 3, s = o, a = "";
    const l = [];
    for (; o < r;) {
        const u = n.charCodeAt(o);
        if (u === 34 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34) {
            a += n.slice(s, o), l.push(a);
            const c = qe(e, C.BLOCK_STRING, t, o + 3, hx(l).join(`
`));
            return e.line += l.length - 1, e.lineStart = i, c
        }
        if (u === 92 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34 && n.charCodeAt(o + 3) === 34) {
            a += n.slice(s, o), s = o + 1, o += 4;
            continue
        }
        if (u === 10 || u === 13) {
            a += n.slice(s, o), l.push(a), u === 13 && n.charCodeAt(o + 1) === 10 ? o += 2 : ++o, a = "", s = o, i = o;
            continue
        }
        if (Wo(u)) ++o; else if (Sc(n, o)) o += 2; else throw Ze(e.source, o, `Invalid character within String: ${gi(e, o)}.`)
    }
    throw Ze(e.source, o, "Unterminated string.")
}

function Ix(e, t) {
    const n = e.source.body, r = n.length;
    let i = t + 1;
    for (; i < r;) {
        const o = n.charCodeAt(i);
        if ($T(o)) ++i; else break
    }
    return qe(e, C.NAME, t, i, n.slice(t, i))
}

const bx = 10, zT = 2;

function D(e) {
    return Nc(e, [])
}

function Nc(e, t) {
    switch (typeof e) {
        case"string":
            return JSON.stringify(e);
        case"function":
            return e.name ? `[function ${e.name}]` : "[function]";
        case"object":
            return Ox(e, t);
        default:
            return String(e)
    }
}

function Ox(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    const n = [...t, e];
    if (Ax(e)) {
        const r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : Nc(r, n)
    } else if (Array.isArray(e)) return Dx(e, n);
    return Cx(e, n)
}

function Ax(e) {
    return typeof e.toJSON == "function"
}

function Cx(e, t) {
    const n = Object.entries(e);
    if (n.length === 0) return "{}";
    if (t.length > zT) return "[" + Rx(e) + "]";
    const r = n.map(([i, o]) => i + ": " + Nc(o, t));
    return "{ " + r.join(", ") + " }"
}

function Dx(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > zT) return "[Array]";
    const n = Math.min(bx, e.length), r = e.length - n, i = [];
    for (let o = 0; o < n; ++o) i.push(Nc(e[o], t));
    return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]"
}

function Rx(e) {
    const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
        const n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n
    }
    return t
}

const An = function (t, n) {
    return t instanceof n
};

class Ic {
    constructor(t, n = "GraphQL request", r = {line: 1, column: 1}) {
        typeof t == "string" || ie(!1, `Body must be a string. Received: ${D(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || ie(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || ie(!1, "column in locationOffset is 1-indexed and must be positive.")
    }

    get [Symbol.toStringTag]() {
        return "Source"
    }
}

function HT(e) {
    return An(e, Ic)
}

function bc(e, t) {
    return new Oc(e, t).parseDocument()
}

function GT(e, t) {
    const n = new Oc(e, t);
    n.expectToken(C.SOF);
    const r = n.parseValueLiteral(!1);
    return n.expectToken(C.EOF), r
}

function kx(e, t) {
    const n = new Oc(e, t);
    n.expectToken(C.SOF);
    const r = n.parseConstValueLiteral();
    return n.expectToken(C.EOF), r
}

function xx(e, t) {
    const n = new Oc(e, t);
    n.expectToken(C.SOF);
    const r = n.parseTypeReference();
    return n.expectToken(C.EOF), r
}

class Oc {
    constructor(t, n = {}) {
        const r = HT(t) ? t : new Ic(t);
        this._lexer = new Jh(r), this._options = n, this._tokenCounter = 0
    }

    parseName() {
        const t = this.expectToken(C.NAME);
        return this.node(t, {kind: w.NAME, value: t.value})
    }

    parseDocument() {
        return this.node(this._lexer.token, {
            kind: w.DOCUMENT,
            definitions: this.many(C.SOF, this.parseDefinition, C.EOF)
        })
    }

    parseDefinition() {
        if (this.peek(C.BRACE_L)) return this.parseOperationDefinition();
        const t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
        if (n.kind === C.NAME) {
            switch (n.value) {
                case"schema":
                    return this.parseSchemaDefinition();
                case"scalar":
                    return this.parseScalarTypeDefinition();
                case"type":
                    return this.parseObjectTypeDefinition();
                case"interface":
                    return this.parseInterfaceTypeDefinition();
                case"union":
                    return this.parseUnionTypeDefinition();
                case"enum":
                    return this.parseEnumTypeDefinition();
                case"input":
                    return this.parseInputObjectTypeDefinition();
                case"directive":
                    return this.parseDirectiveDefinition()
            }
            if (t) throw Ze(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch (n.value) {
                case"query":
                case"mutation":
                case"subscription":
                    return this.parseOperationDefinition();
                case"fragment":
                    return this.parseFragmentDefinition();
                case"extend":
                    return this.parseTypeSystemExtension()
            }
        }
        throw this.unexpected(n)
    }

    parseOperationDefinition() {
        const t = this._lexer.token;
        if (this.peek(C.BRACE_L)) return this.node(t, {
            kind: w.OPERATION_DEFINITION,
            operation: tt.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        const n = this.parseOperationType();
        let r;
        return this.peek(C.NAME) && (r = this.parseName()), this.node(t, {
            kind: w.OPERATION_DEFINITION,
            operation: n,
            name: r,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        })
    }

    parseOperationType() {
        const t = this.expectToken(C.NAME);
        switch (t.value) {
            case"query":
                return tt.QUERY;
            case"mutation":
                return tt.MUTATION;
            case"subscription":
                return tt.SUBSCRIPTION
        }
        throw this.unexpected(t)
    }

    parseVariableDefinitions() {
        return this.optionalMany(C.PAREN_L, this.parseVariableDefinition, C.PAREN_R)
    }

    parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: w.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(C.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(C.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
        })
    }

    parseVariable() {
        const t = this._lexer.token;
        return this.expectToken(C.DOLLAR), this.node(t, {kind: w.VARIABLE, name: this.parseName()})
    }

    parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: w.SELECTION_SET,
            selections: this.many(C.BRACE_L, this.parseSelection, C.BRACE_R)
        })
    }

    parseSelection() {
        return this.peek(C.SPREAD) ? this.parseFragment() : this.parseField()
    }

    parseField() {
        const t = this._lexer.token, n = this.parseName();
        let r, i;
        return this.expectOptionalToken(C.COLON) ? (r = n, i = this.parseName()) : i = n, this.node(t, {
            kind: w.FIELD,
            alias: r,
            name: i,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(C.BRACE_L) ? this.parseSelectionSet() : void 0
        })
    }

    parseArguments(t) {
        const n = t ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(C.PAREN_L, n, C.PAREN_R)
    }

    parseArgument(t = !1) {
        const n = this._lexer.token, r = this.parseName();
        return this.expectToken(C.COLON), this.node(n, {kind: w.ARGUMENT, name: r, value: this.parseValueLiteral(t)})
    }

    parseConstArgument() {
        return this.parseArgument(!0)
    }

    parseFragment() {
        const t = this._lexer.token;
        this.expectToken(C.SPREAD);
        const n = this.expectOptionalKeyword("on");
        return !n && this.peek(C.NAME) ? this.node(t, {
            kind: w.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
        }) : this.node(t, {
            kind: w.INLINE_FRAGMENT,
            typeCondition: n ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        })
    }

    parseFragmentDefinition() {
        const t = this._lexer.token;
        return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
            kind: w.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        }) : this.node(t, {
            kind: w.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        })
    }

    parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName()
    }

    parseValueLiteral(t) {
        const n = this._lexer.token;
        switch (n.kind) {
            case C.BRACKET_L:
                return this.parseList(t);
            case C.BRACE_L:
                return this.parseObject(t);
            case C.INT:
                return this.advanceLexer(), this.node(n, {kind: w.INT, value: n.value});
            case C.FLOAT:
                return this.advanceLexer(), this.node(n, {kind: w.FLOAT, value: n.value});
            case C.STRING:
            case C.BLOCK_STRING:
                return this.parseStringLiteral();
            case C.NAME:
                switch (this.advanceLexer(), n.value) {
                    case"true":
                        return this.node(n, {kind: w.BOOLEAN, value: !0});
                    case"false":
                        return this.node(n, {kind: w.BOOLEAN, value: !1});
                    case"null":
                        return this.node(n, {kind: w.NULL});
                    default:
                        return this.node(n, {kind: w.ENUM, value: n.value})
                }
            case C.DOLLAR:
                if (t) if (this.expectToken(C.DOLLAR), this._lexer.token.kind === C.NAME) {
                    const r = this._lexer.token.value;
                    throw Ze(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`)
                } else throw this.unexpected(n);
                return this.parseVariable();
            default:
                throw this.unexpected()
        }
    }

    parseConstValueLiteral() {
        return this.parseValueLiteral(!0)
    }

    parseStringLiteral() {
        const t = this._lexer.token;
        return this.advanceLexer(), this.node(t, {kind: w.STRING, value: t.value, block: t.kind === C.BLOCK_STRING})
    }

    parseList(t) {
        const n = () => this.parseValueLiteral(t);
        return this.node(this._lexer.token, {kind: w.LIST, values: this.any(C.BRACKET_L, n, C.BRACKET_R)})
    }

    parseObject(t) {
        const n = () => this.parseObjectField(t);
        return this.node(this._lexer.token, {kind: w.OBJECT, fields: this.any(C.BRACE_L, n, C.BRACE_R)})
    }

    parseObjectField(t) {
        const n = this._lexer.token, r = this.parseName();
        return this.expectToken(C.COLON), this.node(n, {
            kind: w.OBJECT_FIELD,
            name: r,
            value: this.parseValueLiteral(t)
        })
    }

    parseDirectives(t) {
        const n = [];
        for (; this.peek(C.AT);) n.push(this.parseDirective(t));
        return n
    }

    parseConstDirectives() {
        return this.parseDirectives(!0)
    }

    parseDirective(t) {
        const n = this._lexer.token;
        return this.expectToken(C.AT), this.node(n, {
            kind: w.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(t)
        })
    }

    parseTypeReference() {
        const t = this._lexer.token;
        let n;
        if (this.expectOptionalToken(C.BRACKET_L)) {
            const r = this.parseTypeReference();
            this.expectToken(C.BRACKET_R), n = this.node(t, {kind: w.LIST_TYPE, type: r})
        } else n = this.parseNamedType();
        return this.expectOptionalToken(C.BANG) ? this.node(t, {kind: w.NON_NULL_TYPE, type: n}) : n
    }

    parseNamedType() {
        return this.node(this._lexer.token, {kind: w.NAMED_TYPE, name: this.parseName()})
    }

    peekDescription() {
        return this.peek(C.STRING) || this.peek(C.BLOCK_STRING)
    }

    parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral()
    }

    parseSchemaDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("schema");
        const r = this.parseConstDirectives(), i = this.many(C.BRACE_L, this.parseOperationTypeDefinition, C.BRACE_R);
        return this.node(t, {kind: w.SCHEMA_DEFINITION, description: n, directives: r, operationTypes: i})
    }

    parseOperationTypeDefinition() {
        const t = this._lexer.token, n = this.parseOperationType();
        this.expectToken(C.COLON);
        const r = this.parseNamedType();
        return this.node(t, {kind: w.OPERATION_TYPE_DEFINITION, operation: n, type: r})
    }

    parseScalarTypeDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("scalar");
        const r = this.parseName(), i = this.parseConstDirectives();
        return this.node(t, {kind: w.SCALAR_TYPE_DEFINITION, description: n, name: r, directives: i})
    }

    parseObjectTypeDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("type");
        const r = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
        return this.node(t, {
            kind: w.OBJECT_TYPE_DEFINITION,
            description: n,
            name: r,
            interfaces: i,
            directives: o,
            fields: s
        })
    }

    parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(C.AMP, this.parseNamedType) : []
    }

    parseFieldsDefinition() {
        return this.optionalMany(C.BRACE_L, this.parseFieldDefinition, C.BRACE_R)
    }

    parseFieldDefinition() {
        const t = this._lexer.token, n = this.parseDescription(), r = this.parseName(), i = this.parseArgumentDefs();
        this.expectToken(C.COLON);
        const o = this.parseTypeReference(), s = this.parseConstDirectives();
        return this.node(t, {kind: w.FIELD_DEFINITION, description: n, name: r, arguments: i, type: o, directives: s})
    }

    parseArgumentDefs() {
        return this.optionalMany(C.PAREN_L, this.parseInputValueDef, C.PAREN_R)
    }

    parseInputValueDef() {
        const t = this._lexer.token, n = this.parseDescription(), r = this.parseName();
        this.expectToken(C.COLON);
        const i = this.parseTypeReference();
        let o;
        this.expectOptionalToken(C.EQUALS) && (o = this.parseConstValueLiteral());
        const s = this.parseConstDirectives();
        return this.node(t, {
            kind: w.INPUT_VALUE_DEFINITION,
            description: n,
            name: r,
            type: i,
            defaultValue: o,
            directives: s
        })
    }

    parseInterfaceTypeDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("interface");
        const r = this.parseName(), i = this.parseImplementsInterfaces(), o = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
        return this.node(t, {
            kind: w.INTERFACE_TYPE_DEFINITION,
            description: n,
            name: r,
            interfaces: i,
            directives: o,
            fields: s
        })
    }

    parseUnionTypeDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("union");
        const r = this.parseName(), i = this.parseConstDirectives(), o = this.parseUnionMemberTypes();
        return this.node(t, {kind: w.UNION_TYPE_DEFINITION, description: n, name: r, directives: i, types: o})
    }

    parseUnionMemberTypes() {
        return this.expectOptionalToken(C.EQUALS) ? this.delimitedMany(C.PIPE, this.parseNamedType) : []
    }

    parseEnumTypeDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("enum");
        const r = this.parseName(), i = this.parseConstDirectives(), o = this.parseEnumValuesDefinition();
        return this.node(t, {kind: w.ENUM_TYPE_DEFINITION, description: n, name: r, directives: i, values: o})
    }

    parseEnumValuesDefinition() {
        return this.optionalMany(C.BRACE_L, this.parseEnumValueDefinition, C.BRACE_R)
    }

    parseEnumValueDefinition() {
        const t = this._lexer.token, n = this.parseDescription(), r = this.parseEnumValueName(),
            i = this.parseConstDirectives();
        return this.node(t, {kind: w.ENUM_VALUE_DEFINITION, description: n, name: r, directives: i})
    }

    parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw Ze(this._lexer.source, this._lexer.token.start, `${ml(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName()
    }

    parseInputObjectTypeDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("input");
        const r = this.parseName(), i = this.parseConstDirectives(), o = this.parseInputFieldsDefinition();
        return this.node(t, {kind: w.INPUT_OBJECT_TYPE_DEFINITION, description: n, name: r, directives: i, fields: o})
    }

    parseInputFieldsDefinition() {
        return this.optionalMany(C.BRACE_L, this.parseInputValueDef, C.BRACE_R)
    }

    parseTypeSystemExtension() {
        const t = this._lexer.lookahead();
        if (t.kind === C.NAME) switch (t.value) {
            case"schema":
                return this.parseSchemaExtension();
            case"scalar":
                return this.parseScalarTypeExtension();
            case"type":
                return this.parseObjectTypeExtension();
            case"interface":
                return this.parseInterfaceTypeExtension();
            case"union":
                return this.parseUnionTypeExtension();
            case"enum":
                return this.parseEnumTypeExtension();
            case"input":
                return this.parseInputObjectTypeExtension()
        }
        throw this.unexpected(t)
    }

    parseSchemaExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("schema");
        const n = this.parseConstDirectives(),
            r = this.optionalMany(C.BRACE_L, this.parseOperationTypeDefinition, C.BRACE_R);
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.SCHEMA_EXTENSION, directives: n, operationTypes: r})
    }

    parseScalarTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        const n = this.parseName(), r = this.parseConstDirectives();
        if (r.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.SCALAR_TYPE_EXTENSION, name: n, directives: r})
    }

    parseObjectTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        const n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && o.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.OBJECT_TYPE_EXTENSION, name: n, interfaces: r, directives: i, fields: o})
    }

    parseInterfaceTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        const n = this.parseName(), r = this.parseImplementsInterfaces(), i = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && o.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.INTERFACE_TYPE_EXTENSION, name: n, interfaces: r, directives: i, fields: o})
    }

    parseUnionTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.UNION_TYPE_EXTENSION, name: n, directives: r, types: i})
    }

    parseEnumTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.ENUM_TYPE_EXTENSION, name: n, directives: r, values: i})
    }

    parseInputObjectTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        const n = this.parseName(), r = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {kind: w.INPUT_OBJECT_TYPE_EXTENSION, name: n, directives: r, fields: i})
    }

    parseDirectiveDefinition() {
        const t = this._lexer.token, n = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(C.AT);
        const r = this.parseName(), i = this.parseArgumentDefs(), o = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const s = this.parseDirectiveLocations();
        return this.node(t, {
            kind: w.DIRECTIVE_DEFINITION,
            description: n,
            name: r,
            arguments: i,
            repeatable: o,
            locations: s
        })
    }

    parseDirectiveLocations() {
        return this.delimitedMany(C.PIPE, this.parseDirectiveLocation)
    }

    parseDirectiveLocation() {
        const t = this._lexer.token, n = this.parseName();
        if (Object.prototype.hasOwnProperty.call(Y, n.value)) return n;
        throw this.unexpected(t)
    }

    node(t, n) {
        return this._options.noLocation !== !0 && (n.loc = new PT(t, this._lexer.lastToken, this._lexer.source)), n
    }

    peek(t) {
        return this._lexer.token.kind === t
    }

    expectToken(t) {
        const n = this._lexer.token;
        if (n.kind === t) return this.advanceLexer(), n;
        throw Ze(this._lexer.source, n.start, `Expected ${qT(t)}, found ${ml(n)}.`)
    }

    expectOptionalToken(t) {
        return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1
    }

    expectKeyword(t) {
        const n = this._lexer.token;
        if (n.kind === C.NAME && n.value === t) this.advanceLexer(); else throw Ze(this._lexer.source, n.start, `Expected "${t}", found ${ml(n)}.`)
    }

    expectOptionalKeyword(t) {
        const n = this._lexer.token;
        return n.kind === C.NAME && n.value === t ? (this.advanceLexer(), !0) : !1
    }

    unexpected(t) {
        const n = t != null ? t : this._lexer.token;
        return Ze(this._lexer.source, n.start, `Unexpected ${ml(n)}.`)
    }

    any(t, n, r) {
        this.expectToken(t);
        const i = [];
        for (; !this.expectOptionalToken(r);) i.push(n.call(this));
        return i
    }

    optionalMany(t, n, r) {
        if (this.expectOptionalToken(t)) {
            const i = [];
            do i.push(n.call(this)); while (!this.expectOptionalToken(r));
            return i
        }
        return []
    }

    many(t, n, r) {
        this.expectToken(t);
        const i = [];
        do i.push(n.call(this)); while (!this.expectOptionalToken(r));
        return i
    }

    delimitedMany(t, n) {
        this.expectOptionalToken(t);
        const r = [];
        do r.push(n.call(this)); while (this.expectOptionalToken(t));
        return r
    }

    advanceLexer() {
        const {maxTokens: t} = this._options, n = this._lexer.advance();
        if (t !== void 0 && n.kind !== C.EOF && (++this._tokenCounter, this._tokenCounter > t)) throw Ze(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`)
    }
}

function ml(e) {
    const t = e.value;
    return qT(e.kind) + (t != null ? ` "${t}"` : "")
}

function qT(e) {
    return UT(e) ? `"${e}"` : e
}

const Lx = 5;

function or(e, t) {
    const [n, r] = t ? [e, t] : [void 0, e];
    let i = " Did you mean ";
    n && (i += n + " ");
    const o = r.map(l => `"${l}"`);
    switch (o.length) {
        case 0:
            return "";
        case 1:
            return i + o[0] + "?";
        case 2:
            return i + o[0] + " or " + o[1] + "?"
    }
    const s = o.slice(0, Lx), a = s.pop();
    return i + s.join(", ") + ", or " + a + "?"
}

function Zy(e) {
    return e
}

function sr(e, t) {
    const n = Object.create(null);
    for (const r of e) n[t(r)] = r;
    return n
}

function br(e, t, n) {
    const r = Object.create(null);
    for (const i of e) r[t(i)] = n(i);
    return r
}

function Yn(e, t) {
    const n = Object.create(null);
    for (const r of Object.keys(e)) n[r] = t(e[r], r);
    return n
}

function Na(e, t) {
    let n = 0, r = 0;
    for (; n < e.length && r < t.length;) {
        let i = e.charCodeAt(n), o = t.charCodeAt(r);
        if (vl(i) && vl(o)) {
            let s = 0;
            do ++n, s = s * 10 + i - cp, i = e.charCodeAt(n); while (vl(i) && s > 0);
            let a = 0;
            do ++r, a = a * 10 + o - cp, o = t.charCodeAt(r); while (vl(o) && a > 0);
            if (s < a) return -1;
            if (s > a) return 1
        } else {
            if (i < o) return -1;
            if (i > o) return 1;
            ++n, ++r
        }
    }
    return e.length - t.length
}

const cp = 48, Px = 57;

function vl(e) {
    return !isNaN(e) && cp <= e && e <= Px
}

function Hr(e, t) {
    const n = Object.create(null), r = new Fx(e), i = Math.floor(e.length * .4) + 1;
    for (const o of t) {
        const s = r.measure(o, i);
        s !== void 0 && (n[o] = s)
    }
    return Object.keys(n).sort((o, s) => {
        const a = n[o] - n[s];
        return a !== 0 ? a : Na(o, s)
    })
}

class Fx {
    constructor(t) {
        this._input = t, this._inputLowerCase = t.toLowerCase(), this._inputArray = eg(this._inputLowerCase), this._rows = [new Array(t.length + 1).fill(0), new Array(t.length + 1).fill(0), new Array(t.length + 1).fill(0)]
    }

    measure(t, n) {
        if (this._input === t) return 0;
        const r = t.toLowerCase();
        if (this._inputLowerCase === r) return 1;
        let i = eg(r), o = this._inputArray;
        if (i.length < o.length) {
            const c = i;
            i = o, o = c
        }
        const s = i.length, a = o.length;
        if (s - a > n) return;
        const l = this._rows;
        for (let c = 0; c <= a; c++) l[0][c] = c;
        for (let c = 1; c <= s; c++) {
            const d = l[(c - 1) % 3], f = l[c % 3];
            let p = f[0] = c;
            for (let h = 1; h <= a; h++) {
                const g = i[c - 1] === o[h - 1] ? 0 : 1;
                let _ = Math.min(d[h] + 1, f[h - 1] + 1, d[h - 1] + g);
                if (c > 1 && h > 1 && i[c - 1] === o[h - 2] && i[c - 2] === o[h - 1]) {
                    const m = l[(c - 2) % 3][h - 2];
                    _ = Math.min(_, m + 1)
                }
                _ < p && (p = _), f[h] = _
            }
            if (p > n) return
        }
        const u = l[s % 3][a];
        return u <= n ? u : void 0
    }
}

function eg(e) {
    const t = e.length, n = new Array(t);
    for (let r = 0; r < t; ++r) n[r] = e.charCodeAt(r);
    return n
}

function pn(e) {
    if (e == null) return Object.create(null);
    if (Object.getPrototypeOf(e) === null) return e;
    const t = Object.create(null);
    for (const [n, r] of Object.entries(e)) t[n] = r;
    return t
}

function Mx(e) {
    return `"${e.replace($x, jx)}"`
}

const $x = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

function jx(e) {
    return Ux[e.charCodeAt(0)]
}

const Ux = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
    ro = Object.freeze({});

function Yo(e, t, n = FT) {
    const r = new Map;
    for (const m of Object.values(w)) r.set(m, ko(t, m));
    let i, o = Array.isArray(e), s = [e], a = -1, l = [], u = e, c, d;
    const f = [], p = [];
    do {
        a++;
        const m = a === s.length, y = m && l.length !== 0;
        if (m) {
            if (c = p.length === 0 ? void 0 : f[f.length - 1], u = d, d = p.pop(), y) if (o) {
                u = u.slice();
                let T = 0;
                for (const [R, x] of l) {
                    const F = R - T;
                    x === null ? (u.splice(F, 1), T++) : u[F] = x
                }
            } else {
                u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
                for (const [T, R] of l) u[T] = R
            }
            a = i.index, s = i.keys, l = i.edits, o = i.inArray, i = i.prev
        } else if (d) {
            if (c = o ? a : s[a], u = d[c], u == null) continue;
            f.push(c)
        }
        let E;
        if (!Array.isArray(u)) {
            var h, g;
            lp(u) || ie(!1, `Invalid AST Node: ${D(u)}.`);
            const T = m ? (h = r.get(u.kind)) === null || h === void 0 ? void 0 : h.leave : (g = r.get(u.kind)) === null || g === void 0 ? void 0 : g.enter;
            if (E = T == null ? void 0 : T.call(t, u, c, d, f, p), E === ro) break;
            if (E === !1) {
                if (!m) {
                    f.pop();
                    continue
                }
            } else if (E !== void 0 && (l.push([c, E]), !m)) if (lp(E)) u = E; else {
                f.pop();
                continue
            }
        }
        if (E === void 0 && y && l.push([c, u]), m) f.pop(); else {
            var _;
            i = {
                inArray: o,
                index: a,
                keys: s,
                edits: l,
                prev: i
            }, o = Array.isArray(u), s = o ? u : (_ = n[u.kind]) !== null && _ !== void 0 ? _ : [], a = -1, l = [], d && p.push(d), d = u
        }
    } while (i !== void 0);
    return l.length !== 0 ? l[l.length - 1][1] : e
}

function Kh(e) {
    const t = new Array(e.length).fill(null), n = Object.create(null);
    for (const r of Object.values(w)) {
        let i = !1;
        const o = new Array(e.length).fill(void 0), s = new Array(e.length).fill(void 0);
        for (let l = 0; l < e.length; ++l) {
            const {enter: u, leave: c} = ko(e[l], r);
            i || (i = u != null || c != null), o[l] = u, s[l] = c
        }
        if (!i) continue;
        const a = {
            enter(...l) {
                const u = l[0];
                for (let d = 0; d < e.length; d++) if (t[d] === null) {
                    var c;
                    const f = (c = o[d]) === null || c === void 0 ? void 0 : c.apply(e[d], l);
                    if (f === !1) t[d] = u; else if (f === ro) t[d] = ro; else if (f !== void 0) return f
                }
            }, leave(...l) {
                const u = l[0];
                for (let d = 0; d < e.length; d++) if (t[d] === null) {
                    var c;
                    const f = (c = s[d]) === null || c === void 0 ? void 0 : c.apply(e[d], l);
                    if (f === ro) t[d] = ro; else if (f !== void 0 && f !== !1) return f
                } else t[d] === u && (t[d] = null)
            }
        };
        n[r] = a
    }
    return n
}

function ko(e, t) {
    const n = e[t];
    return typeof n == "object" ? n : typeof n == "function" ? {enter: n, leave: void 0} : {
        enter: e.enter,
        leave: e.leave
    }
}

function Vx(e, t, n) {
    const {enter: r, leave: i} = ko(e, t);
    return n ? i : r
}

function Ae(e) {
    return Yo(e, zx)
}

const Bx = 80, zx = {
    Name: {leave: e => e.value},
    Variable: {leave: e => "$" + e.name},
    Document: {
        leave: e => q(e.definitions, `

`)
    },
    OperationDefinition: {
        leave(e) {
            const t = ae("(", q(e.variableDefinitions, ", "), ")"),
                n = q([e.operation, q([e.name, t]), q(e.directives, " ")], " ");
            return (n === "query" ? "" : n + " ") + e.selectionSet
        }
    },
    VariableDefinition: {
        leave: ({
                    variable: e,
                    type: t,
                    defaultValue: n,
                    directives: r
                }) => e + ": " + t + ae(" = ", n) + ae(" ", q(r, " "))
    },
    SelectionSet: {leave: ({selections: e}) => yn(e)},
    Field: {
        leave({alias: e, name: t, arguments: n, directives: r, selectionSet: i}) {
            const o = ae("", e, ": ") + t;
            let s = o + ae("(", q(n, ", "), ")");
            return s.length > Bx && (s = o + ae(`(
`, ql(q(n, `
`)), `
)`)), q([s, q(r, " "), i], " ")
        }
    },
    Argument: {leave: ({name: e, value: t}) => e + ": " + t},
    FragmentSpread: {leave: ({name: e, directives: t}) => "..." + e + ae(" ", q(t, " "))},
    InlineFragment: {
        leave: ({
                    typeCondition: e,
                    directives: t,
                    selectionSet: n
                }) => q(["...", ae("on ", e), q(t, " "), n], " ")
    },
    FragmentDefinition: {
        leave: ({
                    name: e,
                    typeCondition: t,
                    variableDefinitions: n,
                    directives: r,
                    selectionSet: i
                }) => `fragment ${e}${ae("(", q(n, ", "), ")")} on ${t} ${ae("", q(r, " "), " ")}` + i
    },
    IntValue: {leave: ({value: e}) => e},
    FloatValue: {leave: ({value: e}) => e},
    StringValue: {leave: ({value: e, block: t}) => t ? jT(e) : Mx(e)},
    BooleanValue: {leave: ({value: e}) => e ? "true" : "false"},
    NullValue: {leave: () => "null"},
    EnumValue: {leave: ({value: e}) => e},
    ListValue: {leave: ({values: e}) => "[" + q(e, ", ") + "]"},
    ObjectValue: {leave: ({fields: e}) => "{" + q(e, ", ") + "}"},
    ObjectField: {leave: ({name: e, value: t}) => e + ": " + t},
    Directive: {leave: ({name: e, arguments: t}) => "@" + e + ae("(", q(t, ", "), ")")},
    NamedType: {leave: ({name: e}) => e},
    ListType: {leave: ({type: e}) => "[" + e + "]"},
    NonNullType: {leave: ({type: e}) => e + "!"},
    SchemaDefinition: {
        leave: ({description: e, directives: t, operationTypes: n}) => ae("", e, `
`) + q(["schema", q(t, " "), yn(n)], " ")
    },
    OperationTypeDefinition: {leave: ({operation: e, type: t}) => e + ": " + t},
    ScalarTypeDefinition: {
        leave: ({description: e, name: t, directives: n}) => ae("", e, `
`) + q(["scalar", t, q(n, " ")], " ")
    },
    ObjectTypeDefinition: {
        leave: ({description: e, name: t, interfaces: n, directives: r, fields: i}) => ae("", e, `
`) + q(["type", t, ae("implements ", q(n, " & ")), q(r, " "), yn(i)], " ")
    },
    FieldDefinition: {
        leave: ({description: e, name: t, arguments: n, type: r, directives: i}) => ae("", e, `
`) + t + (tg(n) ? ae(`(
`, ql(q(n, `
`)), `
)`) : ae("(", q(n, ", "), ")")) + ": " + r + ae(" ", q(i, " "))
    },
    InputValueDefinition: {
        leave: ({description: e, name: t, type: n, defaultValue: r, directives: i}) => ae("", e, `
`) + q([t + ": " + n, ae("= ", r), q(i, " ")], " ")
    },
    InterfaceTypeDefinition: {
        leave: ({description: e, name: t, interfaces: n, directives: r, fields: i}) => ae("", e, `
`) + q(["interface", t, ae("implements ", q(n, " & ")), q(r, " "), yn(i)], " ")
    },
    UnionTypeDefinition: {
        leave: ({description: e, name: t, directives: n, types: r}) => ae("", e, `
`) + q(["union", t, q(n, " "), ae("= ", q(r, " | "))], " ")
    },
    EnumTypeDefinition: {
        leave: ({description: e, name: t, directives: n, values: r}) => ae("", e, `
`) + q(["enum", t, q(n, " "), yn(r)], " ")
    },
    EnumValueDefinition: {
        leave: ({description: e, name: t, directives: n}) => ae("", e, `
`) + q([t, q(n, " ")], " ")
    },
    InputObjectTypeDefinition: {
        leave: ({description: e, name: t, directives: n, fields: r}) => ae("", e, `
`) + q(["input", t, q(n, " "), yn(r)], " ")
    },
    DirectiveDefinition: {
        leave: ({description: e, name: t, arguments: n, repeatable: r, locations: i}) => ae("", e, `
`) + "directive @" + t + (tg(n) ? ae(`(
`, ql(q(n, `
`)), `
)`) : ae("(", q(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + q(i, " | ")
    },
    SchemaExtension: {leave: ({directives: e, operationTypes: t}) => q(["extend schema", q(e, " "), yn(t)], " ")},
    ScalarTypeExtension: {leave: ({name: e, directives: t}) => q(["extend scalar", e, q(t, " ")], " ")},
    ObjectTypeExtension: {
        leave: ({
                    name: e,
                    interfaces: t,
                    directives: n,
                    fields: r
                }) => q(["extend type", e, ae("implements ", q(t, " & ")), q(n, " "), yn(r)], " ")
    },
    InterfaceTypeExtension: {
        leave: ({
                    name: e,
                    interfaces: t,
                    directives: n,
                    fields: r
                }) => q(["extend interface", e, ae("implements ", q(t, " & ")), q(n, " "), yn(r)], " ")
    },
    UnionTypeExtension: {
        leave: ({
                    name: e,
                    directives: t,
                    types: n
                }) => q(["extend union", e, q(t, " "), ae("= ", q(n, " | "))], " ")
    },
    EnumTypeExtension: {leave: ({name: e, directives: t, values: n}) => q(["extend enum", e, q(t, " "), yn(n)], " ")},
    InputObjectTypeExtension: {
        leave: ({
                    name: e,
                    directives: t,
                    fields: n
                }) => q(["extend input", e, q(t, " "), yn(n)], " ")
    }
};

function q(e, t = "") {
    var n;
    return (n = e == null ? void 0 : e.filter(r => r).join(t)) !== null && n !== void 0 ? n : ""
}

function yn(e) {
    return ae(`{
`, ql(q(e, `
`)), `
}`)
}

function ae(e, t, n = "") {
    return t != null && t !== "" ? e + t + n : ""
}

function ql(e) {
    return ae("  ", e.replace(/\n/g, `
  `))
}

function tg(e) {
    var t;
    return (t = e == null ? void 0 : e.some(n => n.includes(`
`))) !== null && t !== void 0 ? t : !1
}

function Au(e, t) {
    switch (e.kind) {
        case w.NULL:
            return null;
        case w.INT:
            return parseInt(e.value, 10);
        case w.FLOAT:
            return parseFloat(e.value);
        case w.STRING:
        case w.ENUM:
        case w.BOOLEAN:
            return e.value;
        case w.LIST:
            return e.values.map(n => Au(n, t));
        case w.OBJECT:
            return br(e.fields, n => n.name.value, n => Au(n.value, t));
        case w.VARIABLE:
            return t == null ? void 0 : t[e.name.value]
    }
}

function Xt(e) {
    if (e != null || ie(!1, "Must provide name."), typeof e == "string" || ie(!1, "Expected name to be a string."), e.length === 0) throw new A("Expected name to be a non-empty string.");
    for (let t = 1; t < e.length; ++t) if (!$T(e.charCodeAt(t))) throw new A(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`);
    if (!Xh(e.charCodeAt(0))) throw new A(`Names must start with [_a-zA-Z] but "${e}" does not.`);
    return e
}

function QT(e) {
    if (e === "true" || e === "false" || e === "null") throw new A(`Enum values cannot be named: ${e}`);
    return Xt(e)
}

function Ia(e) {
    return Jt(e) || de(e) || ye(e) || nt(e) || Ye(e) || De(e) || Ce(e) || te(e)
}

function Hx(e) {
    if (!Ia(e)) throw new Error(`Expected ${D(e)} to be a GraphQL type.`);
    return e
}

function Jt(e) {
    return An(e, Un)
}

function Gx(e) {
    if (!Jt(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Scalar type.`);
    return e
}

function de(e) {
    return An(e, cn)
}

function WT(e) {
    if (!de(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Object type.`);
    return e
}

function ye(e) {
    return An(e, xo)
}

function YT(e) {
    if (!ye(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Interface type.`);
    return e
}

function nt(e) {
    return An(e, Lo)
}

function qx(e) {
    if (!nt(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Union type.`);
    return e
}

function Ye(e) {
    return An(e, Ur)
}

function Qx(e) {
    if (!Ye(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Enum type.`);
    return e
}

function De(e) {
    return An(e, Po)
}

function Wx(e) {
    if (!De(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Input Object type.`);
    return e
}

function Ce(e) {
    return An(e, ct)
}

function Yx(e) {
    if (!Ce(e)) throw new Error(`Expected ${D(e)} to be a GraphQL List type.`);
    return e
}

function te(e) {
    return An(e, re)
}

function Xx(e) {
    if (!te(e)) throw new Error(`Expected ${D(e)} to be a GraphQL Non-Null type.`);
    return e
}

function Dt(e) {
    return Jt(e) || Ye(e) || De(e) || ba(e) && Dt(e.ofType)
}

function Jx(e) {
    if (!Dt(e)) throw new Error(`Expected ${D(e)} to be a GraphQL input type.`);
    return e
}

function Fr(e) {
    return Jt(e) || de(e) || ye(e) || nt(e) || Ye(e) || ba(e) && Fr(e.ofType)
}

function Kx(e) {
    if (!Fr(e)) throw new Error(`Expected ${D(e)} to be a GraphQL output type.`);
    return e
}

function $n(e) {
    return Jt(e) || Ye(e)
}

function Zx(e) {
    if (!$n(e)) throw new Error(`Expected ${D(e)} to be a GraphQL leaf type.`);
    return e
}

function jn(e) {
    return de(e) || ye(e) || nt(e)
}

function eL(e) {
    if (!jn(e)) throw new Error(`Expected ${D(e)} to be a GraphQL composite type.`);
    return e
}

function Mn(e) {
    return ye(e) || nt(e)
}

function tL(e) {
    if (!Mn(e)) throw new Error(`Expected ${D(e)} to be a GraphQL abstract type.`);
    return e
}

class ct {
    constructor(t) {
        Ia(t) || ie(!1, `Expected ${D(t)} to be a GraphQL type.`), this.ofType = t
    }

    get [Symbol.toStringTag]() {
        return "GraphQLList"
    }

    toString() {
        return "[" + String(this.ofType) + "]"
    }

    toJSON() {
        return this.toString()
    }
}

class re {
    constructor(t) {
        Zh(t) || ie(!1, `Expected ${D(t)} to be a GraphQL nullable type.`), this.ofType = t
    }

    get [Symbol.toStringTag]() {
        return "GraphQLNonNull"
    }

    toString() {
        return String(this.ofType) + "!"
    }

    toJSON() {
        return this.toString()
    }
}

function ba(e) {
    return Ce(e) || te(e)
}

function nL(e) {
    if (!ba(e)) throw new Error(`Expected ${D(e)} to be a GraphQL wrapping type.`);
    return e
}

function Zh(e) {
    return Ia(e) && !te(e)
}

function XT(e) {
    if (!Zh(e)) throw new Error(`Expected ${D(e)} to be a GraphQL nullable type.`);
    return e
}

function em(e) {
    if (e) return te(e) ? e.ofType : e
}

function Oa(e) {
    return Jt(e) || de(e) || ye(e) || nt(e) || Ye(e) || De(e)
}

function rL(e) {
    if (!Oa(e)) throw new Error(`Expected ${D(e)} to be a GraphQL named type.`);
    return e
}

function Nt(e) {
    if (e) {
        let t = e;
        for (; ba(t);) t = t.ofType;
        return t
    }
}

function tm(e) {
    return typeof e == "function" ? e() : e
}

function nm(e) {
    return typeof e == "function" ? e() : e
}

class Un {
    constructor(t) {
        var n, r, i, o;
        const s = (n = t.parseValue) !== null && n !== void 0 ? n : Zy;
        this.name = Xt(t.name), this.description = t.description, this.specifiedByURL = t.specifiedByURL, this.serialize = (r = t.serialize) !== null && r !== void 0 ? r : Zy, this.parseValue = s, this.parseLiteral = (i = t.parseLiteral) !== null && i !== void 0 ? i : (a, l) => s(Au(a, l)), this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (o = t.extensionASTNodes) !== null && o !== void 0 ? o : [], t.specifiedByURL == null || typeof t.specifiedByURL == "string" || ie(!1, `${this.name} must provide "specifiedByURL" as a string, but got: ${D(t.specifiedByURL)}.`), t.serialize == null || typeof t.serialize == "function" || ie(!1, `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`), t.parseLiteral && (typeof t.parseValue == "function" && typeof t.parseLiteral == "function" || ie(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`))
    }

    get [Symbol.toStringTag]() {
        return "GraphQLScalarType"
    }

    toConfig() {
        return {
            name: this.name,
            description: this.description,
            specifiedByURL: this.specifiedByURL,
            serialize: this.serialize,
            parseValue: this.parseValue,
            parseLiteral: this.parseLiteral,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        }
    }

    toString() {
        return this.name
    }

    toJSON() {
        return this.toString()
    }
}

class cn {
    constructor(t) {
        var n;
        this.name = Xt(t.name), this.description = t.description, this.isTypeOf = t.isTypeOf, this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = () => KT(t), this._interfaces = () => JT(t), t.isTypeOf == null || typeof t.isTypeOf == "function" || ie(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${D(t.isTypeOf)}.`)
    }

    get [Symbol.toStringTag]() {
        return "GraphQLObjectType"
    }

    getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields
    }

    getInterfaces() {
        return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces
    }

    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: e_(this.getFields()),
            isTypeOf: this.isTypeOf,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        }
    }

    toString() {
        return this.name
    }

    toJSON() {
        return this.toString()
    }
}

function JT(e) {
    var t;
    const n = tm((t = e.interfaces) !== null && t !== void 0 ? t : []);
    return Array.isArray(n) || ie(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`), n
}

function KT(e) {
    const t = nm(e.fields);
    return yo(t) || ie(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Yn(t, (n, r) => {
        var i;
        yo(n) || ie(!1, `${e.name}.${r} field config must be an object.`), n.resolve == null || typeof n.resolve == "function" || ie(!1, `${e.name}.${r} field resolver must be a function if provided, but got: ${D(n.resolve)}.`);
        const o = (i = n.args) !== null && i !== void 0 ? i : {};
        return yo(o) || ie(!1, `${e.name}.${r} args must be an object with argument names as keys.`), {
            name: Xt(r),
            description: n.description,
            type: n.type,
            args: ZT(o),
            resolve: n.resolve,
            subscribe: n.subscribe,
            deprecationReason: n.deprecationReason,
            extensions: pn(n.extensions),
            astNode: n.astNode
        }
    })
}

function ZT(e) {
    return Object.entries(e).map(([t, n]) => ({
        name: Xt(t),
        description: n.description,
        type: n.type,
        defaultValue: n.defaultValue,
        deprecationReason: n.deprecationReason,
        extensions: pn(n.extensions),
        astNode: n.astNode
    }))
}

function yo(e) {
    return Qt(e) && !Array.isArray(e)
}

function e_(e) {
    return Yn(e, t => ({
        description: t.description,
        type: t.type,
        args: t_(t.args),
        resolve: t.resolve,
        subscribe: t.subscribe,
        deprecationReason: t.deprecationReason,
        extensions: t.extensions,
        astNode: t.astNode
    }))
}

function t_(e) {
    return br(e, t => t.name, t => ({
        description: t.description,
        type: t.type,
        defaultValue: t.defaultValue,
        deprecationReason: t.deprecationReason,
        extensions: t.extensions,
        astNode: t.astNode
    }))
}

function Gr(e) {
    return te(e.type) && e.defaultValue === void 0
}

class xo {
    constructor(t) {
        var n;
        this.name = Xt(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = KT.bind(void 0, t), this._interfaces = JT.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || ie(!1, `${this.name} must provide "resolveType" as a function, but got: ${D(t.resolveType)}.`)
    }

    get [Symbol.toStringTag]() {
        return "GraphQLInterfaceType"
    }

    getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields
    }

    getInterfaces() {
        return typeof this._interfaces == "function" && (this._interfaces = this._interfaces()), this._interfaces
    }

    toConfig() {
        return {
            name: this.name,
            description: this.description,
            interfaces: this.getInterfaces(),
            fields: e_(this.getFields()),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        }
    }

    toString() {
        return this.name
    }

    toJSON() {
        return this.toString()
    }
}

class Lo {
    constructor(t) {
        var n;
        this.name = Xt(t.name), this.description = t.description, this.resolveType = t.resolveType, this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._types = iL.bind(void 0, t), t.resolveType == null || typeof t.resolveType == "function" || ie(!1, `${this.name} must provide "resolveType" as a function, but got: ${D(t.resolveType)}.`)
    }

    get [Symbol.toStringTag]() {
        return "GraphQLUnionType"
    }

    getTypes() {
        return typeof this._types == "function" && (this._types = this._types()), this._types
    }

    toConfig() {
        return {
            name: this.name,
            description: this.description,
            types: this.getTypes(),
            resolveType: this.resolveType,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        }
    }

    toString() {
        return this.name
    }

    toJSON() {
        return this.toString()
    }
}

function iL(e) {
    const t = tm(e.types);
    return Array.isArray(t) || ie(!1, `Must provide Array of types or a function which returns such an array for Union ${e.name}.`), t
}

class Ur {
    constructor(t) {
        var n;
        this.name = Xt(t.name), this.description = t.description, this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._values = oL(this.name, t.values), this._valueLookup = new Map(this._values.map(r => [r.value, r])), this._nameLookup = sr(this._values, r => r.name)
    }

    get [Symbol.toStringTag]() {
        return "GraphQLEnumType"
    }

    getValues() {
        return this._values
    }

    getValue(t) {
        return this._nameLookup[t]
    }

    serialize(t) {
        const n = this._valueLookup.get(t);
        if (n === void 0) throw new A(`Enum "${this.name}" cannot represent value: ${D(t)}`);
        return n.name
    }

    parseValue(t) {
        if (typeof t != "string") {
            const r = D(t);
            throw new A(`Enum "${this.name}" cannot represent non-string value: ${r}.` + yl(this, r))
        }
        const n = this.getValue(t);
        if (n == null) throw new A(`Value "${t}" does not exist in "${this.name}" enum.` + yl(this, t));
        return n.value
    }

    parseLiteral(t, n) {
        if (t.kind !== w.ENUM) {
            const i = Ae(t);
            throw new A(`Enum "${this.name}" cannot represent non-enum value: ${i}.` + yl(this, i), {nodes: t})
        }
        const r = this.getValue(t.value);
        if (r == null) {
            const i = Ae(t);
            throw new A(`Value "${i}" does not exist in "${this.name}" enum.` + yl(this, i), {nodes: t})
        }
        return r.value
    }

    toConfig() {
        const t = br(this.getValues(), n => n.name, n => ({
            description: n.description,
            value: n.value,
            deprecationReason: n.deprecationReason,
            extensions: n.extensions,
            astNode: n.astNode
        }));
        return {
            name: this.name,
            description: this.description,
            values: t,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        }
    }

    toString() {
        return this.name
    }

    toJSON() {
        return this.toString()
    }
}

function yl(e, t) {
    const n = e.getValues().map(i => i.name), r = Hr(t, n);
    return or("the enum value", r)
}

function oL(e, t) {
    return yo(t) || ie(!1, `${e} values must be an object with value names as keys.`), Object.entries(t).map(([n, r]) => (yo(r) || ie(!1, `${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${D(r)}.`), {
        name: QT(n),
        description: r.description,
        value: r.value !== void 0 ? r.value : n,
        deprecationReason: r.deprecationReason,
        extensions: pn(r.extensions),
        astNode: r.astNode
    }))
}

class Po {
    constructor(t) {
        var n;
        this.name = Xt(t.name), this.description = t.description, this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._fields = sL.bind(void 0, t)
    }

    get [Symbol.toStringTag]() {
        return "GraphQLInputObjectType"
    }

    getFields() {
        return typeof this._fields == "function" && (this._fields = this._fields()), this._fields
    }

    toConfig() {
        const t = Yn(this.getFields(), n => ({
            description: n.description,
            type: n.type,
            defaultValue: n.defaultValue,
            deprecationReason: n.deprecationReason,
            extensions: n.extensions,
            astNode: n.astNode
        }));
        return {
            name: this.name,
            description: this.description,
            fields: t,
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes
        }
    }

    toString() {
        return this.name
    }

    toJSON() {
        return this.toString()
    }
}

function sL(e) {
    const t = nm(e.fields);
    return yo(t) || ie(!1, `${e.name} fields must be an object with field names as keys or a function which returns such an object.`), Yn(t, (n, r) => (!("resolve" in n) || ie(!1, `${e.name}.${r} field has a resolve property, but Input Types cannot define resolvers.`), {
        name: Xt(r),
        description: n.description,
        type: n.type,
        defaultValue: n.defaultValue,
        deprecationReason: n.deprecationReason,
        extensions: pn(n.extensions),
        astNode: n.astNode
    }))
}

function Ac(e) {
    return te(e.type) && e.defaultValue === void 0
}

function Cu(e, t) {
    return e === t ? !0 : te(e) && te(t) || Ce(e) && Ce(t) ? Cu(e.ofType, t.ofType) : !1
}

function ci(e, t, n) {
    return t === n ? !0 : te(n) ? te(t) ? ci(e, t.ofType, n.ofType) : !1 : te(t) ? ci(e, t.ofType, n) : Ce(n) ? Ce(t) ? ci(e, t.ofType, n.ofType) : !1 : Ce(t) ? !1 : Mn(n) && (ye(t) || de(t)) && e.isSubType(n, t)
}

function fp(e, t, n) {
    return t === n ? !0 : Mn(t) ? Mn(n) ? e.getPossibleTypes(t).some(r => e.isSubType(n, r)) : e.isSubType(t, n) : Mn(n) ? e.isSubType(n, t) : !1
}

const Ql = 2147483647, Wl = -2147483648, n_ = new Un({
    name: "Int",
    description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
    serialize(e) {
        const t = Ca(e);
        if (typeof t == "boolean") return t ? 1 : 0;
        let n = t;
        if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isInteger(n)) throw new A(`Int cannot represent non-integer value: ${D(t)}`);
        if (n > Ql || n < Wl) throw new A("Int cannot represent non 32-bit signed integer value: " + D(t));
        return n
    },
    parseValue(e) {
        if (typeof e != "number" || !Number.isInteger(e)) throw new A(`Int cannot represent non-integer value: ${D(e)}`);
        if (e > Ql || e < Wl) throw new A(`Int cannot represent non 32-bit signed integer value: ${e}`);
        return e
    },
    parseLiteral(e) {
        if (e.kind !== w.INT) throw new A(`Int cannot represent non-integer value: ${Ae(e)}`, {nodes: e});
        const t = parseInt(e.value, 10);
        if (t > Ql || t < Wl) throw new A(`Int cannot represent non 32-bit signed integer value: ${e.value}`, {nodes: e});
        return t
    }
}), r_ = new Un({
    name: "Float",
    description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
    serialize(e) {
        const t = Ca(e);
        if (typeof t == "boolean") return t ? 1 : 0;
        let n = t;
        if (typeof t == "string" && t !== "" && (n = Number(t)), typeof n != "number" || !Number.isFinite(n)) throw new A(`Float cannot represent non numeric value: ${D(t)}`);
        return n
    },
    parseValue(e) {
        if (typeof e != "number" || !Number.isFinite(e)) throw new A(`Float cannot represent non numeric value: ${D(e)}`);
        return e
    },
    parseLiteral(e) {
        if (e.kind !== w.FLOAT && e.kind !== w.INT) throw new A(`Float cannot represent non numeric value: ${Ae(e)}`, e);
        return parseFloat(e.value)
    }
}), $e = new Un({
    name: "String",
    description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
    serialize(e) {
        const t = Ca(e);
        if (typeof t == "string") return t;
        if (typeof t == "boolean") return t ? "true" : "false";
        if (typeof t == "number" && Number.isFinite(t)) return t.toString();
        throw new A(`String cannot represent value: ${D(e)}`)
    },
    parseValue(e) {
        if (typeof e != "string") throw new A(`String cannot represent a non string value: ${D(e)}`);
        return e
    },
    parseLiteral(e) {
        if (e.kind !== w.STRING) throw new A(`String cannot represent a non string value: ${Ae(e)}`, {nodes: e});
        return e.value
    }
}), Ht = new Un({
    name: "Boolean", description: "The `Boolean` scalar type represents `true` or `false`.", serialize(e) {
        const t = Ca(e);
        if (typeof t == "boolean") return t;
        if (Number.isFinite(t)) return t !== 0;
        throw new A(`Boolean cannot represent a non boolean value: ${D(t)}`)
    }, parseValue(e) {
        if (typeof e != "boolean") throw new A(`Boolean cannot represent a non boolean value: ${D(e)}`);
        return e
    }, parseLiteral(e) {
        if (e.kind !== w.BOOLEAN) throw new A(`Boolean cannot represent a non boolean value: ${Ae(e)}`, {nodes: e});
        return e.value
    }
}), rm = new Un({
    name: "ID",
    description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
    serialize(e) {
        const t = Ca(e);
        if (typeof t == "string") return t;
        if (Number.isInteger(t)) return String(t);
        throw new A(`ID cannot represent value: ${D(e)}`)
    },
    parseValue(e) {
        if (typeof e == "string") return e;
        if (typeof e == "number" && Number.isInteger(e)) return e.toString();
        throw new A(`ID cannot represent value: ${D(e)}`)
    },
    parseLiteral(e) {
        if (e.kind !== w.STRING && e.kind !== w.INT) throw new A("ID cannot represent a non-string and non-integer value: " + Ae(e), {nodes: e});
        return e.value
    }
}), Aa = Object.freeze([$e, n_, r_, Ht, rm]);

function Cc(e) {
    return Aa.some(({name: t}) => e.name === t)
}

function Ca(e) {
    if (Qt(e)) {
        if (typeof e.valueOf == "function") {
            const t = e.valueOf();
            if (!Qt(t)) return t
        }
        if (typeof e.toJSON == "function") return e.toJSON()
    }
    return e
}

function Dc(e) {
    return An(e, Vn)
}

function aL(e) {
    if (!Dc(e)) throw new Error(`Expected ${D(e)} to be a GraphQL directive.`);
    return e
}

class Vn {
    constructor(t) {
        var n, r;
        this.name = Xt(t.name), this.description = t.description, this.locations = t.locations, this.isRepeatable = (n = t.isRepeatable) !== null && n !== void 0 ? n : !1, this.extensions = pn(t.extensions), this.astNode = t.astNode, Array.isArray(t.locations) || ie(!1, `@${t.name} locations must be an Array.`);
        const i = (r = t.args) !== null && r !== void 0 ? r : {};
        Qt(i) && !Array.isArray(i) || ie(!1, `@${t.name} args must be an object with argument names as keys.`), this.args = ZT(i)
    }

    get [Symbol.toStringTag]() {
        return "GraphQLDirective"
    }

    toConfig() {
        return {
            name: this.name,
            description: this.description,
            locations: this.locations,
            args: t_(this.args),
            isRepeatable: this.isRepeatable,
            extensions: this.extensions,
            astNode: this.astNode
        }
    }

    toString() {
        return "@" + this.name
    }

    toJSON() {
        return this.toString()
    }
}

const im = new Vn({
    name: "include",
    description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
    locations: [Y.FIELD, Y.FRAGMENT_SPREAD, Y.INLINE_FRAGMENT],
    args: {if: {type: new re(Ht), description: "Included when true."}}
}), om = new Vn({
    name: "skip",
    description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
    locations: [Y.FIELD, Y.FRAGMENT_SPREAD, Y.INLINE_FRAGMENT],
    args: {if: {type: new re(Ht), description: "Skipped when true."}}
}), sm = "No longer supported", Rc = new Vn({
    name: "deprecated",
    description: "Marks an element of a GraphQL schema as no longer supported.",
    locations: [Y.FIELD_DEFINITION, Y.ARGUMENT_DEFINITION, Y.INPUT_FIELD_DEFINITION, Y.ENUM_VALUE],
    args: {
        reason: {
            type: $e,
            description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
            defaultValue: sm
        }
    }
}), am = new Vn({
    name: "specifiedBy",
    description: "Exposes a URL that specifies the behavior of this scalar.",
    locations: [Y.SCALAR],
    args: {url: {type: new re($e), description: "The URL that specifies the behavior of this scalar."}}
}), qr = Object.freeze([im, om, Rc, am]);

function lm(e) {
    return qr.some(({name: t}) => t === e.name)
}

function um(e) {
    return typeof e == "object" && typeof (e == null ? void 0 : e[Symbol.iterator]) == "function"
}

function Or(e, t) {
    if (te(t)) {
        const n = Or(e, t.ofType);
        return (n == null ? void 0 : n.kind) === w.NULL ? null : n
    }
    if (e === null) return {kind: w.NULL};
    if (e === void 0) return null;
    if (Ce(t)) {
        const n = t.ofType;
        if (um(e)) {
            const r = [];
            for (const i of e) {
                const o = Or(i, n);
                o != null && r.push(o)
            }
            return {kind: w.LIST, values: r}
        }
        return Or(e, n)
    }
    if (De(t)) {
        if (!Qt(e)) return null;
        const n = [];
        for (const r of Object.values(t.getFields())) {
            const i = Or(e[r.name], r.type);
            i && n.push({kind: w.OBJECT_FIELD, name: {kind: w.NAME, value: r.name}, value: i})
        }
        return {kind: w.OBJECT, fields: n}
    }
    if ($n(t)) {
        const n = t.serialize(e);
        if (n == null) return null;
        if (typeof n == "boolean") return {kind: w.BOOLEAN, value: n};
        if (typeof n == "number" && Number.isFinite(n)) {
            const r = String(n);
            return ng.test(r) ? {kind: w.INT, value: r} : {kind: w.FLOAT, value: r}
        }
        if (typeof n == "string") return Ye(t) ? {kind: w.ENUM, value: n} : t === rm && ng.test(n) ? {
            kind: w.INT,
            value: n
        } : {kind: w.STRING, value: n};
        throw new TypeError(`Cannot convert value to AST: ${D(n)}.`)
    }
    Ge(!1, "Unexpected input type: " + D(t))
}

const ng = /^-?(?:0|[1-9][0-9]*)$/, kc = new cn({
    name: "__Schema",
    description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
    fields: () => ({
        description: {type: $e, resolve: e => e.description},
        types: {
            description: "A list of all types supported by this server.",
            type: new re(new ct(new re(sn))),
            resolve(e) {
                return Object.values(e.getTypeMap())
            }
        },
        queryType: {
            description: "The type that query operations will be rooted at.",
            type: new re(sn),
            resolve: e => e.getQueryType()
        },
        mutationType: {
            description: "If this server supports mutation, the type that mutation operations will be rooted at.",
            type: sn,
            resolve: e => e.getMutationType()
        },
        subscriptionType: {
            description: "If this server support subscription, the type that subscription operations will be rooted at.",
            type: sn,
            resolve: e => e.getSubscriptionType()
        },
        directives: {
            description: "A list of all directives supported by this server.",
            type: new re(new ct(new re(cm))),
            resolve: e => e.getDirectives()
        }
    })
}), cm = new cn({
    name: "__Directive",
    description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
    fields: () => ({
        name: {type: new re($e), resolve: e => e.name},
        description: {type: $e, resolve: e => e.description},
        isRepeatable: {type: new re(Ht), resolve: e => e.isRepeatable},
        locations: {type: new re(new ct(new re(fm))), resolve: e => e.locations},
        args: {
            type: new re(new ct(new re(Da))),
            args: {includeDeprecated: {type: Ht, defaultValue: !1}},
            resolve(e, {includeDeprecated: t}) {
                return t ? e.args : e.args.filter(n => n.deprecationReason == null)
            }
        }
    })
}), fm = new Ur({
    name: "__DirectiveLocation",
    description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
    values: {
        QUERY: {value: Y.QUERY, description: "Location adjacent to a query operation."},
        MUTATION: {value: Y.MUTATION, description: "Location adjacent to a mutation operation."},
        SUBSCRIPTION: {value: Y.SUBSCRIPTION, description: "Location adjacent to a subscription operation."},
        FIELD: {value: Y.FIELD, description: "Location adjacent to a field."},
        FRAGMENT_DEFINITION: {value: Y.FRAGMENT_DEFINITION, description: "Location adjacent to a fragment definition."},
        FRAGMENT_SPREAD: {value: Y.FRAGMENT_SPREAD, description: "Location adjacent to a fragment spread."},
        INLINE_FRAGMENT: {value: Y.INLINE_FRAGMENT, description: "Location adjacent to an inline fragment."},
        VARIABLE_DEFINITION: {value: Y.VARIABLE_DEFINITION, description: "Location adjacent to a variable definition."},
        SCHEMA: {value: Y.SCHEMA, description: "Location adjacent to a schema definition."},
        SCALAR: {value: Y.SCALAR, description: "Location adjacent to a scalar definition."},
        OBJECT: {value: Y.OBJECT, description: "Location adjacent to an object type definition."},
        FIELD_DEFINITION: {value: Y.FIELD_DEFINITION, description: "Location adjacent to a field definition."},
        ARGUMENT_DEFINITION: {
            value: Y.ARGUMENT_DEFINITION,
            description: "Location adjacent to an argument definition."
        },
        INTERFACE: {value: Y.INTERFACE, description: "Location adjacent to an interface definition."},
        UNION: {value: Y.UNION, description: "Location adjacent to a union definition."},
        ENUM: {value: Y.ENUM, description: "Location adjacent to an enum definition."},
        ENUM_VALUE: {value: Y.ENUM_VALUE, description: "Location adjacent to an enum value definition."},
        INPUT_OBJECT: {value: Y.INPUT_OBJECT, description: "Location adjacent to an input object type definition."},
        INPUT_FIELD_DEFINITION: {
            value: Y.INPUT_FIELD_DEFINITION,
            description: "Location adjacent to an input object field definition."
        }
    }
}), sn = new cn({
    name: "__Type",
    description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
    fields: () => ({
        kind: {
            type: new re(hm), resolve(e) {
                if (Jt(e)) return we.SCALAR;
                if (de(e)) return we.OBJECT;
                if (ye(e)) return we.INTERFACE;
                if (nt(e)) return we.UNION;
                if (Ye(e)) return we.ENUM;
                if (De(e)) return we.INPUT_OBJECT;
                if (Ce(e)) return we.LIST;
                if (te(e)) return we.NON_NULL;
                Ge(!1, `Unexpected type: "${D(e)}".`)
            }
        },
        name: {type: $e, resolve: e => "name" in e ? e.name : void 0},
        description: {type: $e, resolve: e => "description" in e ? e.description : void 0},
        specifiedByURL: {type: $e, resolve: e => "specifiedByURL" in e ? e.specifiedByURL : void 0},
        fields: {
            type: new ct(new re(dm)),
            args: {includeDeprecated: {type: Ht, defaultValue: !1}},
            resolve(e, {includeDeprecated: t}) {
                if (de(e) || ye(e)) {
                    const n = Object.values(e.getFields());
                    return t ? n : n.filter(r => r.deprecationReason == null)
                }
            }
        },
        interfaces: {
            type: new ct(new re(sn)), resolve(e) {
                if (de(e) || ye(e)) return e.getInterfaces()
            }
        },
        possibleTypes: {
            type: new ct(new re(sn)), resolve(e, t, n, {schema: r}) {
                if (Mn(e)) return r.getPossibleTypes(e)
            }
        },
        enumValues: {
            type: new ct(new re(pm)),
            args: {includeDeprecated: {type: Ht, defaultValue: !1}},
            resolve(e, {includeDeprecated: t}) {
                if (Ye(e)) {
                    const n = e.getValues();
                    return t ? n : n.filter(r => r.deprecationReason == null)
                }
            }
        },
        inputFields: {
            type: new ct(new re(Da)),
            args: {includeDeprecated: {type: Ht, defaultValue: !1}},
            resolve(e, {includeDeprecated: t}) {
                if (De(e)) {
                    const n = Object.values(e.getFields());
                    return t ? n : n.filter(r => r.deprecationReason == null)
                }
            }
        },
        ofType: {type: sn, resolve: e => "ofType" in e ? e.ofType : void 0}
    })
}), dm = new cn({
    name: "__Field",
    description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
    fields: () => ({
        name: {type: new re($e), resolve: e => e.name},
        description: {type: $e, resolve: e => e.description},
        args: {
            type: new re(new ct(new re(Da))),
            args: {includeDeprecated: {type: Ht, defaultValue: !1}},
            resolve(e, {includeDeprecated: t}) {
                return t ? e.args : e.args.filter(n => n.deprecationReason == null)
            }
        },
        type: {type: new re(sn), resolve: e => e.type},
        isDeprecated: {type: new re(Ht), resolve: e => e.deprecationReason != null},
        deprecationReason: {type: $e, resolve: e => e.deprecationReason}
    })
}), Da = new cn({
    name: "__InputValue",
    description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
    fields: () => ({
        name: {type: new re($e), resolve: e => e.name},
        description: {type: $e, resolve: e => e.description},
        type: {type: new re(sn), resolve: e => e.type},
        defaultValue: {
            type: $e,
            description: "A GraphQL-formatted string representing the default value for this input value.",
            resolve(e) {
                const {type: t, defaultValue: n} = e, r = Or(n, t);
                return r ? Ae(r) : null
            }
        },
        isDeprecated: {type: new re(Ht), resolve: e => e.deprecationReason != null},
        deprecationReason: {type: $e, resolve: e => e.deprecationReason}
    })
}), pm = new cn({
    name: "__EnumValue",
    description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
    fields: () => ({
        name: {type: new re($e), resolve: e => e.name},
        description: {type: $e, resolve: e => e.description},
        isDeprecated: {type: new re(Ht), resolve: e => e.deprecationReason != null},
        deprecationReason: {type: $e, resolve: e => e.deprecationReason}
    })
});
var we;
(function (e) {
    e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.INPUT_OBJECT = "INPUT_OBJECT", e.LIST = "LIST", e.NON_NULL = "NON_NULL"
})(we || (we = {}));
const hm = new Ur({
    name: "__TypeKind",
    description: "An enum describing what kind of type a given `__Type` is.",
    values: {
        SCALAR: {value: we.SCALAR, description: "Indicates this type is a scalar."},
        OBJECT: {
            value: we.OBJECT,
            description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
        },
        INTERFACE: {
            value: we.INTERFACE,
            description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
        },
        UNION: {value: we.UNION, description: "Indicates this type is a union. `possibleTypes` is a valid field."},
        ENUM: {value: we.ENUM, description: "Indicates this type is an enum. `enumValues` is a valid field."},
        INPUT_OBJECT: {
            value: we.INPUT_OBJECT,
            description: "Indicates this type is an input object. `inputFields` is a valid field."
        },
        LIST: {value: we.LIST, description: "Indicates this type is a list. `ofType` is a valid field."},
        NON_NULL: {value: we.NON_NULL, description: "Indicates this type is a non-null. `ofType` is a valid field."}
    }
}), ra = {
    name: "__schema",
    type: new re(kc),
    description: "Access the current type schema of this server.",
    args: [],
    resolve: (e, t, n, {schema: r}) => r,
    deprecationReason: void 0,
    extensions: Object.create(null),
    astNode: void 0
}, ia = {
    name: "__type",
    type: sn,
    description: "Request the type information of a single type.",
    args: [{
        name: "name",
        description: void 0,
        type: new re($e),
        defaultValue: void 0,
        deprecationReason: void 0,
        extensions: Object.create(null),
        astNode: void 0
    }],
    resolve: (e, {name: t}, n, {schema: r}) => r.getType(t),
    deprecationReason: void 0,
    extensions: Object.create(null),
    astNode: void 0
}, oa = {
    name: "__typename",
    type: new re($e),
    description: "The name of the current Object type at runtime.",
    args: [],
    resolve: (e, t, n, {parentType: r}) => r.name,
    deprecationReason: void 0,
    extensions: Object.create(null),
    astNode: void 0
}, Ra = Object.freeze([kc, cm, fm, sn, dm, Da, pm, hm]);

function Ai(e) {
    return Ra.some(({name: t}) => e.name === t)
}

function i_(e) {
    return An(e, Xo)
}

function mm(e) {
    if (!i_(e)) throw new Error(`Expected ${D(e)} to be a GraphQL schema.`);
    return e
}

class Xo {
    constructor(t) {
        var n, r;
        this.__validationErrors = t.assumeValid === !0 ? [] : void 0, Qt(t) || ie(!1, "Must provide configuration object."), !t.types || Array.isArray(t.types) || ie(!1, `"types" must be Array if provided but got: ${D(t.types)}.`), !t.directives || Array.isArray(t.directives) || ie(!1, `"directives" must be Array if provided but got: ${D(t.directives)}.`), this.description = t.description, this.extensions = pn(t.extensions), this.astNode = t.astNode, this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : [], this._queryType = t.query, this._mutationType = t.mutation, this._subscriptionType = t.subscription, this._directives = (r = t.directives) !== null && r !== void 0 ? r : qr;
        const i = new Set(t.types);
        if (t.types != null) for (const o of t.types) i.delete(o), Tn(o, i);
        this._queryType != null && Tn(this._queryType, i), this._mutationType != null && Tn(this._mutationType, i), this._subscriptionType != null && Tn(this._subscriptionType, i);
        for (const o of this._directives) if (Dc(o)) for (const s of o.args) Tn(s.type, i);
        Tn(kc, i), this._typeMap = Object.create(null), this._subTypeMap = Object.create(null), this._implementationsMap = Object.create(null);
        for (const o of i) {
            if (o == null) continue;
            const s = o.name;
            if (s || ie(!1, "One of the provided types for building the Schema is missing a name."), this._typeMap[s] !== void 0) throw new Error(`Schema must contain uniquely named types but contains multiple types named "${s}".`);
            if (this._typeMap[s] = o, ye(o)) {
                for (const a of o.getInterfaces()) if (ye(a)) {
                    let l = this._implementationsMap[a.name];
                    l === void 0 && (l = this._implementationsMap[a.name] = {
                        objects: [],
                        interfaces: []
                    }), l.interfaces.push(o)
                }
            } else if (de(o)) {
                for (const a of o.getInterfaces()) if (ye(a)) {
                    let l = this._implementationsMap[a.name];
                    l === void 0 && (l = this._implementationsMap[a.name] = {
                        objects: [],
                        interfaces: []
                    }), l.objects.push(o)
                }
            }
        }
    }

    get [Symbol.toStringTag]() {
        return "GraphQLSchema"
    }

    getQueryType() {
        return this._queryType
    }

    getMutationType() {
        return this._mutationType
    }

    getSubscriptionType() {
        return this._subscriptionType
    }

    getRootType(t) {
        switch (t) {
            case tt.QUERY:
                return this.getQueryType();
            case tt.MUTATION:
                return this.getMutationType();
            case tt.SUBSCRIPTION:
                return this.getSubscriptionType()
        }
    }

    getTypeMap() {
        return this._typeMap
    }

    getType(t) {
        return this.getTypeMap()[t]
    }

    getPossibleTypes(t) {
        return nt(t) ? t.getTypes() : this.getImplementations(t).objects
    }

    getImplementations(t) {
        const n = this._implementationsMap[t.name];
        return n != null ? n : {objects: [], interfaces: []}
    }

    isSubType(t, n) {
        let r = this._subTypeMap[t.name];
        if (r === void 0) {
            if (r = Object.create(null), nt(t)) for (const i of t.getTypes()) r[i.name] = !0; else {
                const i = this.getImplementations(t);
                for (const o of i.objects) r[o.name] = !0;
                for (const o of i.interfaces) r[o.name] = !0
            }
            this._subTypeMap[t.name] = r
        }
        return r[n.name] !== void 0
    }

    getDirectives() {
        return this._directives
    }

    getDirective(t) {
        return this.getDirectives().find(n => n.name === t)
    }

    toConfig() {
        return {
            description: this.description,
            query: this.getQueryType(),
            mutation: this.getMutationType(),
            subscription: this.getSubscriptionType(),
            types: Object.values(this.getTypeMap()),
            directives: this.getDirectives(),
            extensions: this.extensions,
            astNode: this.astNode,
            extensionASTNodes: this.extensionASTNodes,
            assumeValid: this.__validationErrors !== void 0
        }
    }
}

function Tn(e, t) {
    const n = Nt(e);
    if (!t.has(n)) {
        if (t.add(n), nt(n)) for (const r of n.getTypes()) Tn(r, t); else if (de(n) || ye(n)) {
            for (const r of n.getInterfaces()) Tn(r, t);
            for (const r of Object.values(n.getFields())) {
                Tn(r.type, t);
                for (const i of r.args) Tn(i.type, t)
            }
        } else if (De(n)) for (const r of Object.values(n.getFields())) Tn(r.type, t)
    }
    return t
}

function vm(e) {
    if (mm(e), e.__validationErrors) return e.__validationErrors;
    const t = new lL(e);
    uL(t), cL(t), fL(t);
    const n = t.getErrors();
    return e.__validationErrors = n, n
}

function ym(e) {
    const t = vm(e);
    if (t.length !== 0) throw new Error(t.map(n => n.message).join(`

`))
}

class lL {
    constructor(t) {
        this._errors = [], this.schema = t
    }

    reportError(t, n) {
        const r = Array.isArray(n) ? n.filter(Boolean) : n;
        this._errors.push(new A(t, {nodes: r}))
    }

    getErrors() {
        return this._errors
    }
}

function uL(e) {
    const t = e.schema, n = t.getQueryType();
    if (!n) e.reportError("Query root type must be provided.", t.astNode); else if (!de(n)) {
        var r;
        e.reportError(`Query root type must be Object type, it cannot be ${D(n)}.`, (r = Qf(t, tt.QUERY)) !== null && r !== void 0 ? r : n.astNode)
    }
    const i = t.getMutationType();
    if (i && !de(i)) {
        var o;
        e.reportError(`Mutation root type must be Object type if provided, it cannot be ${D(i)}.`, (o = Qf(t, tt.MUTATION)) !== null && o !== void 0 ? o : i.astNode)
    }
    const s = t.getSubscriptionType();
    if (s && !de(s)) {
        var a;
        e.reportError(`Subscription root type must be Object type if provided, it cannot be ${D(s)}.`, (a = Qf(t, tt.SUBSCRIPTION)) !== null && a !== void 0 ? a : s.astNode)
    }
}

function Qf(e, t) {
    var n;
    return (n = [e.astNode, ...e.extensionASTNodes].flatMap(r => {
        var i;
        return (i = r == null ? void 0 : r.operationTypes) !== null && i !== void 0 ? i : []
    }).find(r => r.operation === t)) === null || n === void 0 ? void 0 : n.type
}

function cL(e) {
    for (const n of e.schema.getDirectives()) {
        if (!Dc(n)) {
            e.reportError(`Expected directive but got: ${D(n)}.`, n == null ? void 0 : n.astNode);
            continue
        }
        Ei(e, n);
        for (const r of n.args) if (Ei(e, r), Dt(r.type) || e.reportError(`The type of @${n.name}(${r.name}:) must be Input Type but got: ${D(r.type)}.`, r.astNode), Gr(r) && r.deprecationReason != null) {
            var t;
            e.reportError(`Required argument @${n.name}(${r.name}:) cannot be deprecated.`, [gm(r.astNode), (t = r.astNode) === null || t === void 0 ? void 0 : t.type])
        }
    }
}

function Ei(e, t) {
    t.name.startsWith("__") && e.reportError(`Name "${t.name}" must not begin with "__", which is reserved by GraphQL introspection.`, t.astNode)
}

function fL(e) {
    const t = yL(e), n = e.schema.getTypeMap();
    for (const r of Object.values(n)) {
        if (!Oa(r)) {
            e.reportError(`Expected GraphQL named type but got: ${D(r)}.`, r.astNode);
            continue
        }
        Ai(r) || Ei(e, r), de(r) || ye(r) ? (rg(e, r), ig(e, r)) : nt(r) ? hL(e, r) : Ye(r) ? mL(e, r) : De(r) && (vL(e, r), t(r))
    }
}

function rg(e, t) {
    const n = Object.values(t.getFields());
    n.length === 0 && e.reportError(`Type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
    for (const s of n) {
        if (Ei(e, s), !Fr(s.type)) {
            var r;
            e.reportError(`The type of ${t.name}.${s.name} must be Output Type but got: ${D(s.type)}.`, (r = s.astNode) === null || r === void 0 ? void 0 : r.type)
        }
        for (const a of s.args) {
            const l = a.name;
            if (Ei(e, a), !Dt(a.type)) {
                var i;
                e.reportError(`The type of ${t.name}.${s.name}(${l}:) must be Input Type but got: ${D(a.type)}.`, (i = a.astNode) === null || i === void 0 ? void 0 : i.type)
            }
            if (Gr(a) && a.deprecationReason != null) {
                var o;
                e.reportError(`Required argument ${t.name}.${s.name}(${l}:) cannot be deprecated.`, [gm(a.astNode), (o = a.astNode) === null || o === void 0 ? void 0 : o.type])
            }
        }
    }
}

function ig(e, t) {
    const n = Object.create(null);
    for (const r of t.getInterfaces()) {
        if (!ye(r)) {
            e.reportError(`Type ${D(t)} must only implement Interface types, it cannot implement ${D(r)}.`, Ls(t, r));
            continue
        }
        if (t === r) {
            e.reportError(`Type ${t.name} cannot implement itself because it would create a circular reference.`, Ls(t, r));
            continue
        }
        if (n[r.name]) {
            e.reportError(`Type ${t.name} can only implement ${r.name} once.`, Ls(t, r));
            continue
        }
        n[r.name] = !0, pL(e, t, r), dL(e, t, r)
    }
}

function dL(e, t, n) {
    const r = t.getFields();
    for (const l of Object.values(n.getFields())) {
        const u = l.name, c = r[u];
        if (!c) {
            e.reportError(`Interface field ${n.name}.${u} expected but ${t.name} does not provide it.`, [l.astNode, t.astNode, ...t.extensionASTNodes]);
            continue
        }
        if (!ci(e.schema, c.type, l.type)) {
            var i, o;
            e.reportError(`Interface field ${n.name}.${u} expects type ${D(l.type)} but ${t.name}.${u} is type ${D(c.type)}.`, [(i = l.astNode) === null || i === void 0 ? void 0 : i.type, (o = c.astNode) === null || o === void 0 ? void 0 : o.type])
        }
        for (const d of l.args) {
            const f = d.name, p = c.args.find(h => h.name === f);
            if (!p) {
                e.reportError(`Interface field argument ${n.name}.${u}(${f}:) expected but ${t.name}.${u} does not provide it.`, [d.astNode, c.astNode]);
                continue
            }
            if (!Cu(d.type, p.type)) {
                var s, a;
                e.reportError(`Interface field argument ${n.name}.${u}(${f}:) expects type ${D(d.type)} but ${t.name}.${u}(${f}:) is type ${D(p.type)}.`, [(s = d.astNode) === null || s === void 0 ? void 0 : s.type, (a = p.astNode) === null || a === void 0 ? void 0 : a.type])
            }
        }
        for (const d of c.args) {
            const f = d.name;
            !l.args.find(h => h.name === f) && Gr(d) && e.reportError(`Object field ${t.name}.${u} includes required argument ${f} that is missing from the Interface field ${n.name}.${u}.`, [d.astNode, l.astNode])
        }
    }
}

function pL(e, t, n) {
    const r = t.getInterfaces();
    for (const i of n.getInterfaces()) r.includes(i) || e.reportError(i === t ? `Type ${t.name} cannot implement ${n.name} because it would create a circular reference.` : `Type ${t.name} must implement ${i.name} because it is implemented by ${n.name}.`, [...Ls(n, i), ...Ls(t, n)])
}

function hL(e, t) {
    const n = t.getTypes();
    n.length === 0 && e.reportError(`Union type ${t.name} must define one or more member types.`, [t.astNode, ...t.extensionASTNodes]);
    const r = Object.create(null);
    for (const i of n) {
        if (r[i.name]) {
            e.reportError(`Union type ${t.name} can only include type ${i.name} once.`, og(t, i.name));
            continue
        }
        r[i.name] = !0, de(i) || e.reportError(`Union type ${t.name} can only include Object types, it cannot include ${D(i)}.`, og(t, String(i)))
    }
}

function mL(e, t) {
    const n = t.getValues();
    n.length === 0 && e.reportError(`Enum type ${t.name} must define one or more values.`, [t.astNode, ...t.extensionASTNodes]);
    for (const r of n) Ei(e, r)
}

function vL(e, t) {
    const n = Object.values(t.getFields());
    n.length === 0 && e.reportError(`Input Object type ${t.name} must define one or more fields.`, [t.astNode, ...t.extensionASTNodes]);
    for (const o of n) {
        if (Ei(e, o), !Dt(o.type)) {
            var r;
            e.reportError(`The type of ${t.name}.${o.name} must be Input Type but got: ${D(o.type)}.`, (r = o.astNode) === null || r === void 0 ? void 0 : r.type)
        }
        if (Ac(o) && o.deprecationReason != null) {
            var i;
            e.reportError(`Required input field ${t.name}.${o.name} cannot be deprecated.`, [gm(o.astNode), (i = o.astNode) === null || i === void 0 ? void 0 : i.type])
        }
    }
}

function yL(e) {
    const t = Object.create(null), n = [], r = Object.create(null);
    return i;

    function i(o) {
        if (t[o.name]) return;
        t[o.name] = !0, r[o.name] = n.length;
        const s = Object.values(o.getFields());
        for (const a of s) if (te(a.type) && De(a.type.ofType)) {
            const l = a.type.ofType, u = r[l.name];
            if (n.push(a), u === void 0) i(l); else {
                const c = n.slice(u), d = c.map(f => f.name).join(".");
                e.reportError(`Cannot reference Input Object "${l.name}" within itself through a series of non-null fields: "${d}".`, c.map(f => f.astNode))
            }
            n.pop()
        }
        r[o.name] = void 0
    }
}

function Ls(e, t) {
    const {astNode: n, extensionASTNodes: r} = e;
    return (n != null ? [n, ...r] : r).flatMap(o => {
        var s;
        return (s = o.interfaces) !== null && s !== void 0 ? s : []
    }).filter(o => o.name.value === t.name)
}

function og(e, t) {
    const {astNode: n, extensionASTNodes: r} = e;
    return (n != null ? [n, ...r] : r).flatMap(o => {
        var s;
        return (s = o.types) !== null && s !== void 0 ? s : []
    }).filter(o => o.name.value === t)
}

function gm(e) {
    var t;
    return e == null || (t = e.directives) === null || t === void 0 ? void 0 : t.find(n => n.name.value === Rc.name)
}

function Ft(e, t) {
    switch (t.kind) {
        case w.LIST_TYPE: {
            const n = Ft(e, t.type);
            return n && new ct(n)
        }
        case w.NON_NULL_TYPE: {
            const n = Ft(e, t.type);
            return n && new re(n)
        }
        case w.NAMED_TYPE:
            return e.getType(t.name.value)
    }
}

class Em {
    constructor(t, n, r) {
        this._schema = t, this._typeStack = [], this._parentTypeStack = [], this._inputTypeStack = [], this._fieldDefStack = [], this._defaultValueStack = [], this._directive = null, this._argument = null, this._enumValue = null, this._getFieldDef = r != null ? r : gL, n && (Dt(n) && this._inputTypeStack.push(n), jn(n) && this._parentTypeStack.push(n), Fr(n) && this._typeStack.push(n))
    }

    get [Symbol.toStringTag]() {
        return "TypeInfo"
    }

    getType() {
        if (this._typeStack.length > 0) return this._typeStack[this._typeStack.length - 1]
    }

    getParentType() {
        if (this._parentTypeStack.length > 0) return this._parentTypeStack[this._parentTypeStack.length - 1]
    }

    getInputType() {
        if (this._inputTypeStack.length > 0) return this._inputTypeStack[this._inputTypeStack.length - 1]
    }

    getParentInputType() {
        if (this._inputTypeStack.length > 1) return this._inputTypeStack[this._inputTypeStack.length - 2]
    }

    getFieldDef() {
        if (this._fieldDefStack.length > 0) return this._fieldDefStack[this._fieldDefStack.length - 1]
    }

    getDefaultValue() {
        if (this._defaultValueStack.length > 0) return this._defaultValueStack[this._defaultValueStack.length - 1]
    }

    getDirective() {
        return this._directive
    }

    getArgument() {
        return this._argument
    }

    getEnumValue() {
        return this._enumValue
    }

    enter(t) {
        const n = this._schema;
        switch (t.kind) {
            case w.SELECTION_SET: {
                const i = Nt(this.getType());
                this._parentTypeStack.push(jn(i) ? i : void 0);
                break
            }
            case w.FIELD: {
                const i = this.getParentType();
                let o, s;
                i && (o = this._getFieldDef(n, i, t), o && (s = o.type)), this._fieldDefStack.push(o), this._typeStack.push(Fr(s) ? s : void 0);
                break
            }
            case w.DIRECTIVE:
                this._directive = n.getDirective(t.name.value);
                break;
            case w.OPERATION_DEFINITION: {
                const i = n.getRootType(t.operation);
                this._typeStack.push(de(i) ? i : void 0);
                break
            }
            case w.INLINE_FRAGMENT:
            case w.FRAGMENT_DEFINITION: {
                const i = t.typeCondition, o = i ? Ft(n, i) : Nt(this.getType());
                this._typeStack.push(Fr(o) ? o : void 0);
                break
            }
            case w.VARIABLE_DEFINITION: {
                const i = Ft(n, t.type);
                this._inputTypeStack.push(Dt(i) ? i : void 0);
                break
            }
            case w.ARGUMENT: {
                var r;
                let i, o;
                const s = (r = this.getDirective()) !== null && r !== void 0 ? r : this.getFieldDef();
                s && (i = s.args.find(a => a.name === t.name.value), i && (o = i.type)), this._argument = i, this._defaultValueStack.push(i ? i.defaultValue : void 0), this._inputTypeStack.push(Dt(o) ? o : void 0);
                break
            }
            case w.LIST: {
                const i = em(this.getInputType()), o = Ce(i) ? i.ofType : i;
                this._defaultValueStack.push(void 0), this._inputTypeStack.push(Dt(o) ? o : void 0);
                break
            }
            case w.OBJECT_FIELD: {
                const i = Nt(this.getInputType());
                let o, s;
                De(i) && (s = i.getFields()[t.name.value], s && (o = s.type)), this._defaultValueStack.push(s ? s.defaultValue : void 0), this._inputTypeStack.push(Dt(o) ? o : void 0);
                break
            }
            case w.ENUM: {
                const i = Nt(this.getInputType());
                let o;
                Ye(i) && (o = i.getValue(t.value)), this._enumValue = o;
                break
            }
        }
    }

    leave(t) {
        switch (t.kind) {
            case w.SELECTION_SET:
                this._parentTypeStack.pop();
                break;
            case w.FIELD:
                this._fieldDefStack.pop(), this._typeStack.pop();
                break;
            case w.DIRECTIVE:
                this._directive = null;
                break;
            case w.OPERATION_DEFINITION:
            case w.INLINE_FRAGMENT:
            case w.FRAGMENT_DEFINITION:
                this._typeStack.pop();
                break;
            case w.VARIABLE_DEFINITION:
                this._inputTypeStack.pop();
                break;
            case w.ARGUMENT:
                this._argument = null, this._defaultValueStack.pop(), this._inputTypeStack.pop();
                break;
            case w.LIST:
            case w.OBJECT_FIELD:
                this._defaultValueStack.pop(), this._inputTypeStack.pop();
                break;
            case w.ENUM:
                this._enumValue = null;
                break
        }
    }
}

function gL(e, t, n) {
    const r = n.name.value;
    if (r === ra.name && e.getQueryType() === t) return ra;
    if (r === ia.name && e.getQueryType() === t) return ia;
    if (r === oa.name && jn(t)) return oa;
    if (de(t) || ye(t)) return t.getFields()[r]
}

function wm(e, t) {
    return {
        enter(...n) {
            const r = n[0];
            e.enter(r);
            const i = ko(t, r.kind).enter;
            if (i) {
                const o = i.apply(t, n);
                return o !== void 0 && (e.leave(r), lp(o) && e.enter(o)), o
            }
        }, leave(...n) {
            const r = n[0], i = ko(t, r.kind).leave;
            let o;
            return i && (o = i.apply(t, n)), e.leave(r), o
        }
    }
}

function EL(e) {
    return Tm(e) || _m(e) || Sm(e)
}

function Tm(e) {
    return e.kind === w.OPERATION_DEFINITION || e.kind === w.FRAGMENT_DEFINITION
}

function wL(e) {
    return e.kind === w.FIELD || e.kind === w.FRAGMENT_SPREAD || e.kind === w.INLINE_FRAGMENT
}

function o_(e) {
    return e.kind === w.VARIABLE || e.kind === w.INT || e.kind === w.FLOAT || e.kind === w.STRING || e.kind === w.BOOLEAN || e.kind === w.NULL || e.kind === w.ENUM || e.kind === w.LIST || e.kind === w.OBJECT
}

function dp(e) {
    return o_(e) && (e.kind === w.LIST ? e.values.some(dp) : e.kind === w.OBJECT ? e.fields.some(t => dp(t.value)) : e.kind !== w.VARIABLE)
}

function TL(e) {
    return e.kind === w.NAMED_TYPE || e.kind === w.LIST_TYPE || e.kind === w.NON_NULL_TYPE
}

function _m(e) {
    return e.kind === w.SCHEMA_DEFINITION || Jo(e) || e.kind === w.DIRECTIVE_DEFINITION
}

function Jo(e) {
    return e.kind === w.SCALAR_TYPE_DEFINITION || e.kind === w.OBJECT_TYPE_DEFINITION || e.kind === w.INTERFACE_TYPE_DEFINITION || e.kind === w.UNION_TYPE_DEFINITION || e.kind === w.ENUM_TYPE_DEFINITION || e.kind === w.INPUT_OBJECT_TYPE_DEFINITION
}

function Sm(e) {
    return e.kind === w.SCHEMA_EXTENSION || xc(e)
}

function xc(e) {
    return e.kind === w.SCALAR_TYPE_EXTENSION || e.kind === w.OBJECT_TYPE_EXTENSION || e.kind === w.INTERFACE_TYPE_EXTENSION || e.kind === w.UNION_TYPE_EXTENSION || e.kind === w.ENUM_TYPE_EXTENSION || e.kind === w.INPUT_OBJECT_TYPE_EXTENSION
}

function s_(e) {
    return {
        Document(t) {
            for (const n of t.definitions) if (!Tm(n)) {
                const r = n.kind === w.SCHEMA_DEFINITION || n.kind === w.SCHEMA_EXTENSION ? "schema" : '"' + n.name.value + '"';
                e.reportError(new A(`The ${r} definition is not executable.`, {nodes: n}))
            }
            return !1
        }
    }
}

function a_(e) {
    return {
        Field(t) {
            const n = e.getParentType();
            if (n && !e.getFieldDef()) {
                const i = e.getSchema(), o = t.name.value;
                let s = or("to use an inline fragment on", _L(i, n, o));
                s === "" && (s = or(SL(n, o))), e.reportError(new A(`Cannot query field "${o}" on type "${n.name}".` + s, {nodes: t}))
            }
        }
    }
}

function _L(e, t, n) {
    if (!Mn(t)) return [];
    const r = new Set, i = Object.create(null);
    for (const s of e.getPossibleTypes(t)) if (!!s.getFields()[n]) {
        r.add(s), i[s.name] = 1;
        for (const a of s.getInterfaces()) {
            var o;
            !a.getFields()[n] || (r.add(a), i[a.name] = ((o = i[a.name]) !== null && o !== void 0 ? o : 0) + 1)
        }
    }
    return [...r].sort((s, a) => {
        const l = i[a.name] - i[s.name];
        return l !== 0 ? l : ye(s) && e.isSubType(s, a) ? -1 : ye(a) && e.isSubType(a, s) ? 1 : Na(s.name, a.name)
    }).map(s => s.name)
}

function SL(e, t) {
    if (de(e) || ye(e)) {
        const n = Object.keys(e.getFields());
        return Hr(t, n)
    }
    return []
}

function l_(e) {
    return {
        InlineFragment(t) {
            const n = t.typeCondition;
            if (n) {
                const r = Ft(e.getSchema(), n);
                if (r && !jn(r)) {
                    const i = Ae(n);
                    e.reportError(new A(`Fragment cannot condition on non composite type "${i}".`, {nodes: n}))
                }
            }
        }, FragmentDefinition(t) {
            const n = Ft(e.getSchema(), t.typeCondition);
            if (n && !jn(n)) {
                const r = Ae(t.typeCondition);
                e.reportError(new A(`Fragment "${t.name.value}" cannot condition on non composite type "${r}".`, {nodes: t.typeCondition}))
            }
        }
    }
}

function u_(e) {
    return {
        ...c_(e), Argument(t) {
            const n = e.getArgument(), r = e.getFieldDef(), i = e.getParentType();
            if (!n && r && i) {
                const o = t.name.value, s = r.args.map(l => l.name), a = Hr(o, s);
                e.reportError(new A(`Unknown argument "${o}" on field "${i.name}.${r.name}".` + or(a), {nodes: t}))
            }
        }
    }
}

function c_(e) {
    const t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : qr;
    for (const s of r) t[s.name] = s.args.map(a => a.name);
    const i = e.getDocument().definitions;
    for (const s of i) if (s.kind === w.DIRECTIVE_DEFINITION) {
        var o;
        const a = (o = s.arguments) !== null && o !== void 0 ? o : [];
        t[s.name.value] = a.map(l => l.name.value)
    }
    return {
        Directive(s) {
            const a = s.name.value, l = t[a];
            if (s.arguments && l) for (const u of s.arguments) {
                const c = u.name.value;
                if (!l.includes(c)) {
                    const d = Hr(c, l);
                    e.reportError(new A(`Unknown argument "${c}" on directive "@${a}".` + or(d), {nodes: u}))
                }
            }
            return !1
        }
    }
}

function Nm(e) {
    const t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : qr;
    for (const o of r) t[o.name] = o.locations;
    const i = e.getDocument().definitions;
    for (const o of i) o.kind === w.DIRECTIVE_DEFINITION && (t[o.name.value] = o.locations.map(s => s.value));
    return {
        Directive(o, s, a, l, u) {
            const c = o.name.value, d = t[c];
            if (!d) {
                e.reportError(new A(`Unknown directive "@${c}".`, {nodes: o}));
                return
            }
            const f = NL(u);
            f && !d.includes(f) && e.reportError(new A(`Directive "@${c}" may not be used on ${f}.`, {nodes: o}))
        }
    }
}

function NL(e) {
    const t = e[e.length - 1];
    switch ("kind" in t || Ge(!1), t.kind) {
        case w.OPERATION_DEFINITION:
            return IL(t.operation);
        case w.FIELD:
            return Y.FIELD;
        case w.FRAGMENT_SPREAD:
            return Y.FRAGMENT_SPREAD;
        case w.INLINE_FRAGMENT:
            return Y.INLINE_FRAGMENT;
        case w.FRAGMENT_DEFINITION:
            return Y.FRAGMENT_DEFINITION;
        case w.VARIABLE_DEFINITION:
            return Y.VARIABLE_DEFINITION;
        case w.SCHEMA_DEFINITION:
        case w.SCHEMA_EXTENSION:
            return Y.SCHEMA;
        case w.SCALAR_TYPE_DEFINITION:
        case w.SCALAR_TYPE_EXTENSION:
            return Y.SCALAR;
        case w.OBJECT_TYPE_DEFINITION:
        case w.OBJECT_TYPE_EXTENSION:
            return Y.OBJECT;
        case w.FIELD_DEFINITION:
            return Y.FIELD_DEFINITION;
        case w.INTERFACE_TYPE_DEFINITION:
        case w.INTERFACE_TYPE_EXTENSION:
            return Y.INTERFACE;
        case w.UNION_TYPE_DEFINITION:
        case w.UNION_TYPE_EXTENSION:
            return Y.UNION;
        case w.ENUM_TYPE_DEFINITION:
        case w.ENUM_TYPE_EXTENSION:
            return Y.ENUM;
        case w.ENUM_VALUE_DEFINITION:
            return Y.ENUM_VALUE;
        case w.INPUT_OBJECT_TYPE_DEFINITION:
        case w.INPUT_OBJECT_TYPE_EXTENSION:
            return Y.INPUT_OBJECT;
        case w.INPUT_VALUE_DEFINITION: {
            const n = e[e.length - 3];
            return "kind" in n || Ge(!1), n.kind === w.INPUT_OBJECT_TYPE_DEFINITION ? Y.INPUT_FIELD_DEFINITION : Y.ARGUMENT_DEFINITION
        }
        default:
            Ge(!1, "Unexpected kind: " + D(t.kind))
    }
}

function IL(e) {
    switch (e) {
        case tt.QUERY:
            return Y.QUERY;
        case tt.MUTATION:
            return Y.MUTATION;
        case tt.SUBSCRIPTION:
            return Y.SUBSCRIPTION
    }
}

function f_(e) {
    return {
        FragmentSpread(t) {
            const n = t.name.value;
            e.getFragment(n) || e.reportError(new A(`Unknown fragment "${n}".`, {nodes: t.name}))
        }
    }
}

function Im(e) {
    const t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
    for (const o of e.getDocument().definitions) Jo(o) && (r[o.name.value] = !0);
    const i = [...Object.keys(n), ...Object.keys(r)];
    return {
        NamedType(o, s, a, l, u) {
            const c = o.name.value;
            if (!n[c] && !r[c]) {
                var d;
                const f = (d = u[2]) !== null && d !== void 0 ? d : a, p = f != null && bL(f);
                if (p && sg.includes(c)) return;
                const h = Hr(c, p ? sg.concat(i) : i);
                e.reportError(new A(`Unknown type "${c}".` + or(h), {nodes: o}))
            }
        }
    }
}

const sg = [...Aa, ...Ra].map(e => e.name);

function bL(e) {
    return "kind" in e && (_m(e) || Sm(e))
}

function d_(e) {
    let t = 0;
    return {
        Document(n) {
            t = n.definitions.filter(r => r.kind === w.OPERATION_DEFINITION).length
        }, OperationDefinition(n) {
            !n.name && t > 1 && e.reportError(new A("This anonymous operation must be the only defined operation.", {nodes: n}))
        }
    }
}

function p_(e) {
    var t, n, r;
    const i = e.getSchema(),
        o = (t = (n = (r = i == null ? void 0 : i.astNode) !== null && r !== void 0 ? r : i == null ? void 0 : i.getQueryType()) !== null && n !== void 0 ? n : i == null ? void 0 : i.getMutationType()) !== null && t !== void 0 ? t : i == null ? void 0 : i.getSubscriptionType();
    let s = 0;
    return {
        SchemaDefinition(a) {
            if (o) {
                e.reportError(new A("Cannot define a new schema within a schema extension.", {nodes: a}));
                return
            }
            s > 0 && e.reportError(new A("Must provide only one schema definition.", {nodes: a})), ++s
        }
    }
}

function h_(e) {
    const t = Object.create(null), n = [], r = Object.create(null);
    return {
        OperationDefinition: () => !1, FragmentDefinition(o) {
            return i(o), !1
        }
    };

    function i(o) {
        if (t[o.name.value]) return;
        const s = o.name.value;
        t[s] = !0;
        const a = e.getFragmentSpreads(o.selectionSet);
        if (a.length !== 0) {
            r[s] = n.length;
            for (const l of a) {
                const u = l.name.value, c = r[u];
                if (n.push(l), c === void 0) {
                    const d = e.getFragment(u);
                    d && i(d)
                } else {
                    const d = n.slice(c), f = d.slice(0, -1).map(p => '"' + p.name.value + '"').join(", ");
                    e.reportError(new A(`Cannot spread fragment "${u}" within itself` + (f !== "" ? ` via ${f}.` : "."), {nodes: d}))
                }
                n.pop()
            }
            r[s] = void 0
        }
    }
}

function m_(e) {
    let t = Object.create(null);
    return {
        OperationDefinition: {
            enter() {
                t = Object.create(null)
            }, leave(n) {
                const r = e.getRecursiveVariableUsages(n);
                for (const {node: i} of r) {
                    const o = i.name.value;
                    t[o] !== !0 && e.reportError(new A(n.name ? `Variable "$${o}" is not defined by operation "${n.name.value}".` : `Variable "$${o}" is not defined.`, {nodes: [i, n]}))
                }
            }
        }, VariableDefinition(n) {
            t[n.variable.name.value] = !0
        }
    }
}

function v_(e) {
    const t = [], n = [];
    return {
        OperationDefinition(r) {
            return t.push(r), !1
        }, FragmentDefinition(r) {
            return n.push(r), !1
        }, Document: {
            leave() {
                const r = Object.create(null);
                for (const i of t) for (const o of e.getRecursivelyReferencedFragments(i)) r[o.name.value] = !0;
                for (const i of n) {
                    const o = i.name.value;
                    r[o] !== !0 && e.reportError(new A(`Fragment "${o}" is never used.`, {nodes: i}))
                }
            }
        }
    }
}

function y_(e) {
    let t = [];
    return {
        OperationDefinition: {
            enter() {
                t = []
            }, leave(n) {
                const r = Object.create(null), i = e.getRecursiveVariableUsages(n);
                for (const {node: o} of i) r[o.name.value] = !0;
                for (const o of t) {
                    const s = o.variable.name.value;
                    r[s] !== !0 && e.reportError(new A(n.name ? `Variable "$${s}" is never used in operation "${n.name.value}".` : `Variable "$${s}" is never used.`, {nodes: o}))
                }
            }
        }, VariableDefinition(n) {
            t.push(n)
        }
    }
}

function Lc(e) {
    switch (e.kind) {
        case w.OBJECT:
            return {...e, fields: OL(e.fields)};
        case w.LIST:
            return {...e, values: e.values.map(Lc)};
        case w.INT:
        case w.FLOAT:
        case w.STRING:
        case w.BOOLEAN:
        case w.NULL:
        case w.ENUM:
        case w.VARIABLE:
            return e
    }
}

function OL(e) {
    return e.map(t => ({...t, value: Lc(t.value)})).sort((t, n) => Na(t.name.value, n.name.value))
}

function g_(e) {
    return Array.isArray(e) ? e.map(([t, n]) => `subfields "${t}" conflict because ` + g_(n)).join(" and ") : e
}

function E_(e) {
    const t = new kL, n = new Map;
    return {
        SelectionSet(r) {
            const i = AL(e, n, t, e.getParentType(), r);
            for (const [[o, s], a, l] of i) {
                const u = g_(s);
                e.reportError(new A(`Fields "${o}" conflict because ${u}. Use different aliases on the fields to fetch both if this was intentional.`, {nodes: a.concat(l)}))
            }
        }
    }
}

function AL(e, t, n, r, i) {
    const o = [], [s, a] = ku(e, t, r, i);
    if (DL(e, o, t, n, s), a.length !== 0) for (let l = 0; l < a.length; l++) {
        Du(e, o, t, n, !1, s, a[l]);
        for (let u = l + 1; u < a.length; u++) Ru(e, o, t, n, !1, a[l], a[u])
    }
    return o
}

function Du(e, t, n, r, i, o, s) {
    const a = e.getFragment(s);
    if (!a) return;
    const [l, u] = hp(e, n, a);
    if (o !== l) {
        bm(e, t, n, r, i, o, l);
        for (const c of u) r.has(c, s, i) || (r.add(c, s, i), Du(e, t, n, r, i, o, c))
    }
}

function Ru(e, t, n, r, i, o, s) {
    if (o === s || r.has(o, s, i)) return;
    r.add(o, s, i);
    const a = e.getFragment(o), l = e.getFragment(s);
    if (!a || !l) return;
    const [u, c] = hp(e, n, a), [d, f] = hp(e, n, l);
    bm(e, t, n, r, i, u, d);
    for (const p of f) Ru(e, t, n, r, i, o, p);
    for (const p of c) Ru(e, t, n, r, i, p, s)
}

function CL(e, t, n, r, i, o, s, a) {
    const l = [], [u, c] = ku(e, t, i, o), [d, f] = ku(e, t, s, a);
    bm(e, l, t, n, r, u, d);
    for (const p of f) Du(e, l, t, n, r, u, p);
    for (const p of c) Du(e, l, t, n, r, d, p);
    for (const p of c) for (const h of f) Ru(e, l, t, n, r, p, h);
    return l
}

function DL(e, t, n, r, i) {
    for (const [o, s] of Object.entries(i)) if (s.length > 1) for (let a = 0; a < s.length; a++) for (let l = a + 1; l < s.length; l++) {
        const u = w_(e, n, r, !1, o, s[a], s[l]);
        u && t.push(u)
    }
}

function bm(e, t, n, r, i, o, s) {
    for (const [a, l] of Object.entries(o)) {
        const u = s[a];
        if (u) for (const c of l) for (const d of u) {
            const f = w_(e, n, r, i, a, c, d);
            f && t.push(f)
        }
    }
}

function w_(e, t, n, r, i, o, s) {
    const [a, l, u] = o, [c, d, f] = s, p = r || a !== c && de(a) && de(c);
    if (!p) {
        const y = l.name.value, E = d.name.value;
        if (y !== E) return [[i, `"${y}" and "${E}" are different fields`], [l], [d]];
        if (ag(l) !== ag(d)) return [[i, "they have differing arguments"], [l], [d]]
    }
    const h = u == null ? void 0 : u.type, g = f == null ? void 0 : f.type;
    if (h && g && pp(h, g)) return [[i, `they return conflicting types "${D(h)}" and "${D(g)}"`], [l], [d]];
    const _ = l.selectionSet, m = d.selectionSet;
    if (_ && m) {
        const y = CL(e, t, n, p, Nt(h), _, Nt(g), m);
        return RL(y, i, l, d)
    }
}

function ag(e) {
    var t;
    const n = (t = e.arguments) !== null && t !== void 0 ? t : [],
        r = {kind: w.OBJECT, fields: n.map(i => ({kind: w.OBJECT_FIELD, name: i.name, value: i.value}))};
    return Ae(Lc(r))
}

function pp(e, t) {
    return Ce(e) ? Ce(t) ? pp(e.ofType, t.ofType) : !0 : Ce(t) ? !0 : te(e) ? te(t) ? pp(e.ofType, t.ofType) : !0 : te(t) ? !0 : $n(e) || $n(t) ? e !== t : !1
}

function ku(e, t, n, r) {
    const i = t.get(r);
    if (i) return i;
    const o = Object.create(null), s = Object.create(null);
    T_(e, n, r, o, s);
    const a = [o, Object.keys(s)];
    return t.set(r, a), a
}

function hp(e, t, n) {
    const r = t.get(n.selectionSet);
    if (r) return r;
    const i = Ft(e.getSchema(), n.typeCondition);
    return ku(e, t, i, n.selectionSet)
}

function T_(e, t, n, r, i) {
    for (const o of n.selections) switch (o.kind) {
        case w.FIELD: {
            const s = o.name.value;
            let a;
            (de(t) || ye(t)) && (a = t.getFields()[s]);
            const l = o.alias ? o.alias.value : s;
            r[l] || (r[l] = []), r[l].push([t, o, a]);
            break
        }
        case w.FRAGMENT_SPREAD:
            i[o.name.value] = !0;
            break;
        case w.INLINE_FRAGMENT: {
            const s = o.typeCondition, a = s ? Ft(e.getSchema(), s) : t;
            T_(e, a, o.selectionSet, r, i);
            break
        }
    }
}

function RL(e, t, n, r) {
    if (e.length > 0) return [[t, e.map(([i]) => i)], [n, ...e.map(([, i]) => i).flat()], [r, ...e.map(([, , i]) => i).flat()]]
}

class kL {
    constructor() {
        this._data = new Map
    }

    has(t, n, r) {
        var i;
        const [o, s] = t < n ? [t, n] : [n, t],
            a = (i = this._data.get(o)) === null || i === void 0 ? void 0 : i.get(s);
        return a === void 0 ? !1 : r ? !0 : r === a
    }

    add(t, n, r) {
        const [i, o] = t < n ? [t, n] : [n, t], s = this._data.get(i);
        s === void 0 ? this._data.set(i, new Map([[o, r]])) : s.set(o, r)
    }
}

function __(e) {
    return {
        InlineFragment(t) {
            const n = e.getType(), r = e.getParentType();
            if (jn(n) && jn(r) && !fp(e.getSchema(), n, r)) {
                const i = D(r), o = D(n);
                e.reportError(new A(`Fragment cannot be spread here as objects of type "${i}" can never be of type "${o}".`, {nodes: t}))
            }
        }, FragmentSpread(t) {
            const n = t.name.value, r = xL(e, n), i = e.getParentType();
            if (r && i && !fp(e.getSchema(), r, i)) {
                const o = D(i), s = D(r);
                e.reportError(new A(`Fragment "${n}" cannot be spread here as objects of type "${o}" can never be of type "${s}".`, {nodes: t}))
            }
        }
    }
}

function xL(e, t) {
    const n = e.getFragment(t);
    if (n) {
        const r = Ft(e.getSchema(), n.typeCondition);
        if (jn(r)) return r
    }
}

function S_(e) {
    const t = e.getSchema(), n = Object.create(null);
    for (const i of e.getDocument().definitions) Jo(i) && (n[i.name.value] = i);
    return {
        ScalarTypeExtension: r,
        ObjectTypeExtension: r,
        InterfaceTypeExtension: r,
        UnionTypeExtension: r,
        EnumTypeExtension: r,
        InputObjectTypeExtension: r
    };

    function r(i) {
        const o = i.name.value, s = n[o], a = t == null ? void 0 : t.getType(o);
        let l;
        if (s ? l = LL[s.kind] : a && (l = PL(a)), l) {
            if (l !== i.kind) {
                const u = FL(i.kind);
                e.reportError(new A(`Cannot extend non-${u} type "${o}".`, {nodes: s ? [s, i] : i}))
            }
        } else {
            const u = Object.keys({...n, ...t == null ? void 0 : t.getTypeMap()}), c = Hr(o, u);
            e.reportError(new A(`Cannot extend type "${o}" because it is not defined.` + or(c), {nodes: i.name}))
        }
    }
}

const LL = {
    [w.SCALAR_TYPE_DEFINITION]: w.SCALAR_TYPE_EXTENSION,
    [w.OBJECT_TYPE_DEFINITION]: w.OBJECT_TYPE_EXTENSION,
    [w.INTERFACE_TYPE_DEFINITION]: w.INTERFACE_TYPE_EXTENSION,
    [w.UNION_TYPE_DEFINITION]: w.UNION_TYPE_EXTENSION,
    [w.ENUM_TYPE_DEFINITION]: w.ENUM_TYPE_EXTENSION,
    [w.INPUT_OBJECT_TYPE_DEFINITION]: w.INPUT_OBJECT_TYPE_EXTENSION
};

function PL(e) {
    if (Jt(e)) return w.SCALAR_TYPE_EXTENSION;
    if (de(e)) return w.OBJECT_TYPE_EXTENSION;
    if (ye(e)) return w.INTERFACE_TYPE_EXTENSION;
    if (nt(e)) return w.UNION_TYPE_EXTENSION;
    if (Ye(e)) return w.ENUM_TYPE_EXTENSION;
    if (De(e)) return w.INPUT_OBJECT_TYPE_EXTENSION;
    Ge(!1, "Unexpected type: " + D(e))
}

function FL(e) {
    switch (e) {
        case w.SCALAR_TYPE_EXTENSION:
            return "scalar";
        case w.OBJECT_TYPE_EXTENSION:
            return "object";
        case w.INTERFACE_TYPE_EXTENSION:
            return "interface";
        case w.UNION_TYPE_EXTENSION:
            return "union";
        case w.ENUM_TYPE_EXTENSION:
            return "enum";
        case w.INPUT_OBJECT_TYPE_EXTENSION:
            return "input object";
        default:
            Ge(!1, "Unexpected kind: " + D(e))
    }
}

function N_(e) {
    return {
        ...I_(e), Field: {
            leave(t) {
                var n;
                const r = e.getFieldDef();
                if (!r) return !1;
                const i = new Set((n = t.arguments) === null || n === void 0 ? void 0 : n.map(o => o.name.value));
                for (const o of r.args) if (!i.has(o.name) && Gr(o)) {
                    const s = D(o.type);
                    e.reportError(new A(`Field "${r.name}" argument "${o.name}" of type "${s}" is required, but it was not provided.`, {nodes: t}))
                }
            }
        }
    }
}

function I_(e) {
    var t;
    const n = Object.create(null), r = e.getSchema(),
        i = (t = r == null ? void 0 : r.getDirectives()) !== null && t !== void 0 ? t : qr;
    for (const a of i) n[a.name] = sr(a.args.filter(Gr), l => l.name);
    const o = e.getDocument().definitions;
    for (const a of o) if (a.kind === w.DIRECTIVE_DEFINITION) {
        var s;
        const l = (s = a.arguments) !== null && s !== void 0 ? s : [];
        n[a.name.value] = sr(l.filter(ML), u => u.name.value)
    }
    return {
        Directive: {
            leave(a) {
                const l = a.name.value, u = n[l];
                if (u) {
                    var c;
                    const d = (c = a.arguments) !== null && c !== void 0 ? c : [],
                        f = new Set(d.map(p => p.name.value));
                    for (const [p, h] of Object.entries(u)) if (!f.has(p)) {
                        const g = Ia(h.type) ? D(h.type) : Ae(h.type);
                        e.reportError(new A(`Directive "@${l}" argument "${p}" of type "${g}" is required, but it was not provided.`, {nodes: a}))
                    }
                }
            }
        }
    }
}

function ML(e) {
    return e.type.kind === w.NON_NULL_TYPE && e.defaultValue == null
}

function b_(e) {
    return {
        Field(t) {
            const n = e.getType(), r = t.selectionSet;
            if (n) {
                if ($n(Nt(n))) {
                    if (r) {
                        const i = t.name.value, o = D(n);
                        e.reportError(new A(`Field "${i}" must not have a selection since type "${o}" has no subfields.`, {nodes: r}))
                    }
                } else if (!r) {
                    const i = t.name.value, o = D(n);
                    e.reportError(new A(`Field "${i}" of type "${o}" must have a selection of subfields. Did you mean "${i} { ... }"?`, {nodes: t}))
                }
            }
        }
    }
}

function O_(e) {
    return e.map(t => typeof t == "number" ? "[" + t.toString() + "]" : "." + t).join("")
}

function Fo(e, t, n) {
    return {prev: e, key: t, typename: n}
}

function Vt(e) {
    const t = [];
    let n = e;
    for (; n;) t.push(n.key), n = n.prev;
    return t.reverse()
}

function A_(e, t, n = $L) {
    return _s(e, t, n, void 0)
}

function $L(e, t, n) {
    let r = "Invalid value " + D(t);
    throw e.length > 0 && (r += ` at "value${O_(e)}"`), n.message = r + ": " + n.message, n
}

function _s(e, t, n, r) {
    if (te(t)) {
        if (e != null) return _s(e, t.ofType, n, r);
        n(Vt(r), e, new A(`Expected non-nullable type "${D(t)}" not to be null.`));
        return
    }
    if (e == null) return null;
    if (Ce(t)) {
        const i = t.ofType;
        return um(e) ? Array.from(e, (o, s) => {
            const a = Fo(r, s, void 0);
            return _s(o, i, n, a)
        }) : [_s(e, i, n, r)]
    }
    if (De(t)) {
        if (!Qt(e)) {
            n(Vt(r), e, new A(`Expected type "${t.name}" to be an object.`));
            return
        }
        const i = {}, o = t.getFields();
        for (const s of Object.values(o)) {
            const a = e[s.name];
            if (a === void 0) {
                if (s.defaultValue !== void 0) i[s.name] = s.defaultValue; else if (te(s.type)) {
                    const l = D(s.type);
                    n(Vt(r), e, new A(`Field "${s.name}" of required type "${l}" was not provided.`))
                }
                continue
            }
            i[s.name] = _s(a, s.type, n, Fo(r, s.name, t.name))
        }
        for (const s of Object.keys(e)) if (!o[s]) {
            const a = Hr(s, Object.keys(t.getFields()));
            n(Vt(r), e, new A(`Field "${s}" is not defined by type "${t.name}".` + or(a)))
        }
        return i
    }
    if ($n(t)) {
        let i;
        try {
            i = t.parseValue(e)
        } catch (o) {
            o instanceof A ? n(Vt(r), e, o) : n(Vt(r), e, new A(`Expected type "${t.name}". ` + o.message, {originalError: o}));
            return
        }
        return i === void 0 && n(Vt(r), e, new A(`Expected type "${t.name}".`)), i
    }
    Ge(!1, "Unexpected input type: " + D(t))
}

function Ln(e, t, n) {
    if (!!e) {
        if (e.kind === w.VARIABLE) {
            const r = e.name.value;
            if (n == null || n[r] === void 0) return;
            const i = n[r];
            return i === null && te(t) ? void 0 : i
        }
        if (te(t)) return e.kind === w.NULL ? void 0 : Ln(e, t.ofType, n);
        if (e.kind === w.NULL) return null;
        if (Ce(t)) {
            const r = t.ofType;
            if (e.kind === w.LIST) {
                const o = [];
                for (const s of e.values) if (lg(s, n)) {
                    if (te(r)) return;
                    o.push(null)
                } else {
                    const a = Ln(s, r, n);
                    if (a === void 0) return;
                    o.push(a)
                }
                return o
            }
            const i = Ln(e, r, n);
            return i === void 0 ? void 0 : [i]
        }
        if (De(t)) {
            if (e.kind !== w.OBJECT) return;
            const r = Object.create(null), i = sr(e.fields, o => o.name.value);
            for (const o of Object.values(t.getFields())) {
                const s = i[o.name];
                if (!s || lg(s.value, n)) {
                    if (o.defaultValue !== void 0) r[o.name] = o.defaultValue; else if (te(o.type)) return;
                    continue
                }
                const a = Ln(s.value, o.type, n);
                if (a === void 0) return;
                r[o.name] = a
            }
            return r
        }
        if ($n(t)) {
            let r;
            try {
                r = t.parseLiteral(e, n)
            } catch {
                return
            }
            return r === void 0 ? void 0 : r
        }
        Ge(!1, "Unexpected input type: " + D(t))
    }
}

function lg(e, t) {
    return e.kind === w.VARIABLE && (t == null || t[e.name.value] === void 0)
}

function C_(e, t, n, r) {
    const i = [], o = r == null ? void 0 : r.maxErrors;
    try {
        const s = jL(e, t, n, a => {
            if (o != null && i.length >= o) throw new A("Too many errors processing variables, error limit reached. Execution aborted.");
            i.push(a)
        });
        if (i.length === 0) return {coerced: s}
    } catch (s) {
        i.push(s)
    }
    return {errors: i}
}

function jL(e, t, n, r) {
    const i = {};
    for (const o of t) {
        const s = o.variable.name.value, a = Ft(e, o.type);
        if (!Dt(a)) {
            const u = Ae(o.type);
            r(new A(`Variable "$${s}" expected value of type "${u}" which cannot be used as an input type.`, {nodes: o.type}));
            continue
        }
        if (!D_(n, s)) {
            if (o.defaultValue) i[s] = Ln(o.defaultValue, a); else if (te(a)) {
                const u = D(a);
                r(new A(`Variable "$${s}" of required type "${u}" was not provided.`, {nodes: o}))
            }
            continue
        }
        const l = n[s];
        if (l === null && te(a)) {
            const u = D(a);
            r(new A(`Variable "$${s}" of non-null type "${u}" must not be null.`, {nodes: o}));
            continue
        }
        i[s] = A_(l, a, (u, c, d) => {
            let f = `Variable "$${s}" got invalid value ` + D(c);
            u.length > 0 && (f += ` at "${s}${O_(u)}"`), r(new A(f + "; " + d.message, {
                nodes: o,
                originalError: d.originalError
            }))
        })
    }
    return i
}

function Pc(e, t, n) {
    var r;
    const i = {}, o = (r = t.arguments) !== null && r !== void 0 ? r : [], s = sr(o, a => a.name.value);
    for (const a of e.args) {
        const l = a.name, u = a.type, c = s[l];
        if (!c) {
            if (a.defaultValue !== void 0) i[l] = a.defaultValue; else if (te(u)) throw new A(`Argument "${l}" of required type "${D(u)}" was not provided.`, {nodes: t});
            continue
        }
        const d = c.value;
        let f = d.kind === w.NULL;
        if (d.kind === w.VARIABLE) {
            const h = d.name.value;
            if (n == null || !D_(n, h)) {
                if (a.defaultValue !== void 0) i[l] = a.defaultValue; else if (te(u)) throw new A(`Argument "${l}" of required type "${D(u)}" was provided the variable "$${h}" which was not provided a runtime value.`, {nodes: d});
                continue
            }
            f = n[h] == null
        }
        if (f && te(u)) throw new A(`Argument "${l}" of non-null type "${D(u)}" must not be null.`, {nodes: d});
        const p = Ln(d, u, n);
        if (p === void 0) throw new A(`Argument "${l}" has invalid value ${Ae(d)}.`, {nodes: d});
        i[l] = p
    }
    return i
}

function sa(e, t, n) {
    var r;
    const i = (r = t.directives) === null || r === void 0 ? void 0 : r.find(o => o.name.value === e.name);
    if (i) return Pc(e, i, n)
}

function D_(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function Om(e, t, n, r, i) {
    const o = new Map;
    return xu(e, t, n, r, i, o, new Set), o
}

function UL(e, t, n, r, i) {
    const o = new Map, s = new Set;
    for (const a of i) a.selectionSet && xu(e, t, n, r, a.selectionSet, o, s);
    return o
}

function xu(e, t, n, r, i, o, s) {
    for (const a of i.selections) switch (a.kind) {
        case w.FIELD: {
            if (!Wf(n, a)) continue;
            const l = VL(a), u = o.get(l);
            u !== void 0 ? u.push(a) : o.set(l, [a]);
            break
        }
        case w.INLINE_FRAGMENT: {
            if (!Wf(n, a) || !ug(e, a, r)) continue;
            xu(e, t, n, r, a.selectionSet, o, s);
            break
        }
        case w.FRAGMENT_SPREAD: {
            const l = a.name.value;
            if (s.has(l) || !Wf(n, a)) continue;
            s.add(l);
            const u = t[l];
            if (!u || !ug(e, u, r)) continue;
            xu(e, t, n, r, u.selectionSet, o, s);
            break
        }
    }
}

function Wf(e, t) {
    const n = sa(om, t, e);
    if ((n == null ? void 0 : n.if) === !0) return !1;
    const r = sa(im, t, e);
    return (r == null ? void 0 : r.if) !== !1
}

function ug(e, t, n) {
    const r = t.typeCondition;
    if (!r) return !0;
    const i = Ft(e, r);
    return i === n ? !0 : Mn(i) ? e.isSubType(i, n) : !1
}

function VL(e) {
    return e.alias ? e.alias.value : e.name.value
}

function R_(e) {
    return {
        OperationDefinition(t) {
            if (t.operation === "subscription") {
                const n = e.getSchema(), r = n.getSubscriptionType();
                if (r) {
                    const i = t.name ? t.name.value : null, o = Object.create(null), s = e.getDocument(),
                        a = Object.create(null);
                    for (const u of s.definitions) u.kind === w.FRAGMENT_DEFINITION && (a[u.name.value] = u);
                    const l = Om(n, a, o, r, t.selectionSet);
                    if (l.size > 1) {
                        const d = [...l.values()].slice(1).flat();
                        e.reportError(new A(i != null ? `Subscription "${i}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.", {nodes: d}))
                    }
                    for (const u of l.values()) u[0].name.value.startsWith("__") && e.reportError(new A(i != null ? `Subscription "${i}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.", {nodes: u}))
                }
            }
        }
    }
}

function Am(e, t) {
    const n = new Map;
    for (const r of e) {
        const i = t(r), o = n.get(i);
        o === void 0 ? n.set(i, [r]) : o.push(r)
    }
    return n
}

function k_(e) {
    return {
        DirectiveDefinition(r) {
            var i;
            const o = (i = r.arguments) !== null && i !== void 0 ? i : [];
            return n(`@${r.name.value}`, o)
        }, InterfaceTypeDefinition: t, InterfaceTypeExtension: t, ObjectTypeDefinition: t, ObjectTypeExtension: t
    };

    function t(r) {
        var i;
        const o = r.name.value, s = (i = r.fields) !== null && i !== void 0 ? i : [];
        for (const l of s) {
            var a;
            const u = l.name.value, c = (a = l.arguments) !== null && a !== void 0 ? a : [];
            n(`${o}.${u}`, c)
        }
        return !1
    }

    function n(r, i) {
        const o = Am(i, s => s.name.value);
        for (const [s, a] of o) a.length > 1 && e.reportError(new A(`Argument "${r}(${s}:)" can only be defined once.`, {nodes: a.map(l => l.name)}));
        return !1
    }
}

function Cm(e) {
    return {Field: t, Directive: t};

    function t(n) {
        var r;
        const i = (r = n.arguments) !== null && r !== void 0 ? r : [], o = Am(i, s => s.name.value);
        for (const [s, a] of o) a.length > 1 && e.reportError(new A(`There can be only one argument named "${s}".`, {nodes: a.map(l => l.name)}))
    }
}

function x_(e) {
    const t = Object.create(null), n = e.getSchema();
    return {
        DirectiveDefinition(r) {
            const i = r.name.value;
            if (n != null && n.getDirective(i)) {
                e.reportError(new A(`Directive "@${i}" already exists in the schema. It cannot be redefined.`, {nodes: r.name}));
                return
            }
            return t[i] ? e.reportError(new A(`There can be only one directive named "@${i}".`, {nodes: [t[i], r.name]})) : t[i] = r.name, !1
        }
    }
}

function Dm(e) {
    const t = Object.create(null), n = e.getSchema(), r = n ? n.getDirectives() : qr;
    for (const a of r) t[a.name] = !a.isRepeatable;
    const i = e.getDocument().definitions;
    for (const a of i) a.kind === w.DIRECTIVE_DEFINITION && (t[a.name.value] = !a.repeatable);
    const o = Object.create(null), s = Object.create(null);
    return {
        enter(a) {
            if (!("directives" in a) || !a.directives) return;
            let l;
            if (a.kind === w.SCHEMA_DEFINITION || a.kind === w.SCHEMA_EXTENSION) l = o; else if (Jo(a) || xc(a)) {
                const u = a.name.value;
                l = s[u], l === void 0 && (s[u] = l = Object.create(null))
            } else l = Object.create(null);
            for (const u of a.directives) {
                const c = u.name.value;
                t[c] && (l[c] ? e.reportError(new A(`The directive "@${c}" can only be used once at this location.`, {nodes: [l[c], u]})) : l[c] = u)
            }
        }
    }
}

function L_(e) {
    const t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
    return {EnumTypeDefinition: i, EnumTypeExtension: i};

    function i(o) {
        var s;
        const a = o.name.value;
        r[a] || (r[a] = Object.create(null));
        const l = (s = o.values) !== null && s !== void 0 ? s : [], u = r[a];
        for (const c of l) {
            const d = c.name.value, f = n[a];
            Ye(f) && f.getValue(d) ? e.reportError(new A(`Enum value "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`, {nodes: c.name})) : u[d] ? e.reportError(new A(`Enum value "${a}.${d}" can only be defined once.`, {nodes: [u[d], c.name]})) : u[d] = c.name
        }
        return !1
    }
}

function P_(e) {
    const t = e.getSchema(), n = t ? t.getTypeMap() : Object.create(null), r = Object.create(null);
    return {
        InputObjectTypeDefinition: i,
        InputObjectTypeExtension: i,
        InterfaceTypeDefinition: i,
        InterfaceTypeExtension: i,
        ObjectTypeDefinition: i,
        ObjectTypeExtension: i
    };

    function i(o) {
        var s;
        const a = o.name.value;
        r[a] || (r[a] = Object.create(null));
        const l = (s = o.fields) !== null && s !== void 0 ? s : [], u = r[a];
        for (const c of l) {
            const d = c.name.value;
            BL(n[a], d) ? e.reportError(new A(`Field "${a}.${d}" already exists in the schema. It cannot also be defined in this type extension.`, {nodes: c.name})) : u[d] ? e.reportError(new A(`Field "${a}.${d}" can only be defined once.`, {nodes: [u[d], c.name]})) : u[d] = c.name
        }
        return !1
    }
}

function BL(e, t) {
    return de(e) || ye(e) || De(e) ? e.getFields()[t] != null : !1
}

function F_(e) {
    const t = Object.create(null);
    return {
        OperationDefinition: () => !1, FragmentDefinition(n) {
            const r = n.name.value;
            return t[r] ? e.reportError(new A(`There can be only one fragment named "${r}".`, {nodes: [t[r], n.name]})) : t[r] = n.name, !1
        }
    }
}

function Rm(e) {
    const t = [];
    let n = Object.create(null);
    return {
        ObjectValue: {
            enter() {
                t.push(n), n = Object.create(null)
            }, leave() {
                const r = t.pop();
                r || Ge(!1), n = r
            }
        }, ObjectField(r) {
            const i = r.name.value;
            n[i] ? e.reportError(new A(`There can be only one input field named "${i}".`, {nodes: [n[i], r.name]})) : n[i] = r.name
        }
    }
}

function M_(e) {
    const t = Object.create(null);
    return {
        OperationDefinition(n) {
            const r = n.name;
            return r && (t[r.value] ? e.reportError(new A(`There can be only one operation named "${r.value}".`, {nodes: [t[r.value], r]})) : t[r.value] = r), !1
        }, FragmentDefinition: () => !1
    }
}

function $_(e) {
    const t = e.getSchema(), n = Object.create(null),
        r = t ? {query: t.getQueryType(), mutation: t.getMutationType(), subscription: t.getSubscriptionType()} : {};
    return {SchemaDefinition: i, SchemaExtension: i};

    function i(o) {
        var s;
        const a = (s = o.operationTypes) !== null && s !== void 0 ? s : [];
        for (const l of a) {
            const u = l.operation, c = n[u];
            r[u] ? e.reportError(new A(`Type for ${u} already defined in the schema. It cannot be redefined.`, {nodes: l})) : c ? e.reportError(new A(`There can be only one ${u} type in schema.`, {nodes: [c, l]})) : n[u] = l
        }
        return !1
    }
}

function j_(e) {
    const t = Object.create(null), n = e.getSchema();
    return {
        ScalarTypeDefinition: r,
        ObjectTypeDefinition: r,
        InterfaceTypeDefinition: r,
        UnionTypeDefinition: r,
        EnumTypeDefinition: r,
        InputObjectTypeDefinition: r
    };

    function r(i) {
        const o = i.name.value;
        if (n != null && n.getType(o)) {
            e.reportError(new A(`Type "${o}" already exists in the schema. It cannot also be defined in this type definition.`, {nodes: i.name}));
            return
        }
        return t[o] ? e.reportError(new A(`There can be only one type named "${o}".`, {nodes: [t[o], i.name]})) : t[o] = i.name, !1
    }
}

function U_(e) {
    return {
        OperationDefinition(t) {
            var n;
            const r = (n = t.variableDefinitions) !== null && n !== void 0 ? n : [],
                i = Am(r, o => o.variable.name.value);
            for (const [o, s] of i) s.length > 1 && e.reportError(new A(`There can be only one variable named "$${o}".`, {nodes: s.map(a => a.variable.name)}))
        }
    }
}

function V_(e) {
    return {
        ListValue(t) {
            const n = em(e.getParentInputType());
            if (!Ce(n)) return Xr(e, t), !1
        },
        ObjectValue(t) {
            const n = Nt(e.getInputType());
            if (!De(n)) return Xr(e, t), !1;
            const r = sr(t.fields, i => i.name.value);
            for (const i of Object.values(n.getFields())) if (!r[i.name] && Ac(i)) {
                const s = D(i.type);
                e.reportError(new A(`Field "${n.name}.${i.name}" of required type "${s}" was not provided.`, {nodes: t}))
            }
        },
        ObjectField(t) {
            const n = Nt(e.getParentInputType());
            if (!e.getInputType() && De(n)) {
                const i = Hr(t.name.value, Object.keys(n.getFields()));
                e.reportError(new A(`Field "${t.name.value}" is not defined by type "${n.name}".` + or(i), {nodes: t}))
            }
        },
        NullValue(t) {
            const n = e.getInputType();
            te(n) && e.reportError(new A(`Expected value of type "${D(n)}", found ${Ae(t)}.`, {nodes: t}))
        },
        EnumValue: t => Xr(e, t),
        IntValue: t => Xr(e, t),
        FloatValue: t => Xr(e, t),
        StringValue: t => Xr(e, t),
        BooleanValue: t => Xr(e, t)
    }
}

function Xr(e, t) {
    const n = e.getInputType();
    if (!n) return;
    const r = Nt(n);
    if (!$n(r)) {
        const i = D(n);
        e.reportError(new A(`Expected value of type "${i}", found ${Ae(t)}.`, {nodes: t}));
        return
    }
    try {
        if (r.parseLiteral(t, void 0) === void 0) {
            const o = D(n);
            e.reportError(new A(`Expected value of type "${o}", found ${Ae(t)}.`, {nodes: t}))
        }
    } catch (i) {
        const o = D(n);
        i instanceof A ? e.reportError(i) : e.reportError(new A(`Expected value of type "${o}", found ${Ae(t)}; ` + i.message, {
            nodes: t,
            originalError: i
        }))
    }
}

function B_(e) {
    return {
        VariableDefinition(t) {
            const n = Ft(e.getSchema(), t.type);
            if (n !== void 0 && !Dt(n)) {
                const r = t.variable.name.value, i = Ae(t.type);
                e.reportError(new A(`Variable "$${r}" cannot be non-input type "${i}".`, {nodes: t.type}))
            }
        }
    }
}

function z_(e) {
    let t = Object.create(null);
    return {
        OperationDefinition: {
            enter() {
                t = Object.create(null)
            }, leave(n) {
                const r = e.getRecursiveVariableUsages(n);
                for (const {node: i, type: o, defaultValue: s} of r) {
                    const a = i.name.value, l = t[a];
                    if (l && o) {
                        const u = e.getSchema(), c = Ft(u, l.type);
                        if (c && !zL(u, c, l.defaultValue, o, s)) {
                            const d = D(c), f = D(o);
                            e.reportError(new A(`Variable "$${a}" of type "${d}" used in position expecting type "${f}".`, {nodes: [l, i]}))
                        }
                    }
                }
            }
        }, VariableDefinition(n) {
            t[n.variable.name.value] = n
        }
    }
}

function zL(e, t, n, r, i) {
    if (te(r) && !te(t)) {
        if (!(n != null && n.kind !== w.NULL) && !(i !== void 0)) return !1;
        const a = r.ofType;
        return ci(e, t, a)
    }
    return ci(e, t, r)
}

const H_ = Object.freeze([s_, M_, d_, R_, Im, l_, B_, b_, a_, F_, f_, v_, __, h_, U_, m_, y_, Nm, Dm, u_, Cm, V_, N_, z_, E_, Rm]),
    HL = Object.freeze([p_, $_, j_, L_, P_, k_, x_, Im, Nm, Dm, S_, c_, Cm, Rm, I_]);

class G_ {
    constructor(t, n) {
        this._ast = t, this._fragments = void 0, this._fragmentSpreads = new Map, this._recursivelyReferencedFragments = new Map, this._onError = n
    }

    get [Symbol.toStringTag]() {
        return "ASTValidationContext"
    }

    reportError(t) {
        this._onError(t)
    }

    getDocument() {
        return this._ast
    }

    getFragment(t) {
        let n;
        if (this._fragments) n = this._fragments; else {
            n = Object.create(null);
            for (const r of this.getDocument().definitions) r.kind === w.FRAGMENT_DEFINITION && (n[r.name.value] = r);
            this._fragments = n
        }
        return n[t]
    }

    getFragmentSpreads(t) {
        let n = this._fragmentSpreads.get(t);
        if (!n) {
            n = [];
            const r = [t];
            let i;
            for (; i = r.pop();) for (const o of i.selections) o.kind === w.FRAGMENT_SPREAD ? n.push(o) : o.selectionSet && r.push(o.selectionSet);
            this._fragmentSpreads.set(t, n)
        }
        return n
    }

    getRecursivelyReferencedFragments(t) {
        let n = this._recursivelyReferencedFragments.get(t);
        if (!n) {
            n = [];
            const r = Object.create(null), i = [t.selectionSet];
            let o;
            for (; o = i.pop();) for (const s of this.getFragmentSpreads(o)) {
                const a = s.name.value;
                if (r[a] !== !0) {
                    r[a] = !0;
                    const l = this.getFragment(a);
                    l && (n.push(l), i.push(l.selectionSet))
                }
            }
            this._recursivelyReferencedFragments.set(t, n)
        }
        return n
    }
}

class GL extends G_ {
    constructor(t, n, r) {
        super(t, r), this._schema = n
    }

    get [Symbol.toStringTag]() {
        return "SDLValidationContext"
    }

    getSchema() {
        return this._schema
    }
}

class q_ extends G_ {
    constructor(t, n, r, i) {
        super(n, i), this._schema = t, this._typeInfo = r, this._variableUsages = new Map, this._recursiveVariableUsages = new Map
    }

    get [Symbol.toStringTag]() {
        return "ValidationContext"
    }

    getSchema() {
        return this._schema
    }

    getVariableUsages(t) {
        let n = this._variableUsages.get(t);
        if (!n) {
            const r = [], i = new Em(this._schema);
            Yo(t, wm(i, {
                VariableDefinition: () => !1, Variable(o) {
                    r.push({node: o, type: i.getInputType(), defaultValue: i.getDefaultValue()})
                }
            })), n = r, this._variableUsages.set(t, n)
        }
        return n
    }

    getRecursiveVariableUsages(t) {
        let n = this._recursiveVariableUsages.get(t);
        if (!n) {
            n = this.getVariableUsages(t);
            for (const r of this.getRecursivelyReferencedFragments(t)) n = n.concat(this.getVariableUsages(r));
            this._recursiveVariableUsages.set(t, n)
        }
        return n
    }

    getType() {
        return this._typeInfo.getType()
    }

    getParentType() {
        return this._typeInfo.getParentType()
    }

    getInputType() {
        return this._typeInfo.getInputType()
    }

    getParentInputType() {
        return this._typeInfo.getParentInputType()
    }

    getFieldDef() {
        return this._typeInfo.getFieldDef()
    }

    getDirective() {
        return this._typeInfo.getDirective()
    }

    getArgument() {
        return this._typeInfo.getArgument()
    }

    getEnumValue() {
        return this._typeInfo.getEnumValue()
    }
}

function Q_(e, t, n = H_, r, i = new Em(e)) {
    var o;
    const s = (o = r == null ? void 0 : r.maxErrors) !== null && o !== void 0 ? o : 100;
    t || ie(!1, "Must provide document."), ym(e);
    const a = Object.freeze({}), l = [], u = new q_(e, t, i, d => {
        if (l.length >= s) throw l.push(new A("Too many validation errors, error limit reached. Validation aborted.")), a;
        l.push(d)
    }), c = Kh(n.map(d => d(u)));
    try {
        Yo(t, wm(i, c))
    } catch (d) {
        if (d !== a) throw d
    }
    return l
}

function W_(e, t, n = HL) {
    const r = [], i = new GL(e, t, s => {
        r.push(s)
    }), o = n.map(s => s(i));
    return Yo(e, Kh(o)), r
}

function qL(e) {
    const t = W_(e);
    if (t.length !== 0) throw new Error(t.map(n => n.message).join(`

`))
}

function QL(e, t) {
    const n = W_(e, t);
    if (n.length !== 0) throw new Error(n.map(r => r.message).join(`

`))
}

function WL(e) {
    let t;
    return function (r, i, o) {
        t === void 0 && (t = new WeakMap);
        let s = t.get(r);
        s === void 0 && (s = new WeakMap, t.set(r, s));
        let a = s.get(i);
        a === void 0 && (a = new WeakMap, s.set(i, a));
        let l = a.get(o);
        return l === void 0 && (l = e(r, i, o), a.set(o, l)), l
    }
}

function YL(e) {
    return Promise.all(Object.values(e)).then(t => {
        const n = Object.create(null);
        for (const [r, i] of Object.keys(e).entries()) n[i] = t[r];
        return n
    })
}

function XL(e, t, n) {
    let r = n;
    for (const i of e) r = qt(r) ? r.then(o => t(o, i)) : t(r, i);
    return r
}

function JL(e) {
    return e instanceof Error ? e : new KL(e)
}

class KL extends Error {
    constructor(t) {
        super("Unexpected error value: " + D(t)), this.name = "NonErrorThrown", this.thrownValue = t
    }
}

function Mo(e, t, n) {
    var r;
    const i = JL(e);
    return ZL(i) ? i : new A(i.message, {
        nodes: (r = i.nodes) !== null && r !== void 0 ? r : t,
        source: i.source,
        positions: i.positions,
        path: n,
        originalError: i
    })
}

function ZL(e) {
    return Array.isArray(e.path)
}

const eP = WL((e, t, n) => UL(e.schema, e.fragments, e.variableValues, t, n));

function Fc(e) {
    arguments.length < 2 || ie(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const {schema: t, document: n, variableValues: r, rootValue: i} = e;
    X_(t, n, r);
    const o = J_(e);
    if (!("schema" in o)) return {errors: o};
    try {
        const {operation: s} = o, a = tP(o, s, i);
        return qt(a) ? a.then(l => gl(l, o.errors), l => (o.errors.push(l), gl(null, o.errors))) : gl(a, o.errors)
    } catch (s) {
        return o.errors.push(s), gl(null, o.errors)
    }
}

function Y_(e) {
    const t = Fc(e);
    if (qt(t)) throw new Error("GraphQL execution failed to complete synchronously.");
    return t
}

function gl(e, t) {
    return t.length === 0 ? {data: e} : {errors: t, data: e}
}

function X_(e, t, n) {
    t || ie(!1, "Must provide document."), ym(e), n == null || Qt(n) || ie(!1, "Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")
}

function J_(e) {
    var t, n;
    const {
        schema: r,
        document: i,
        rootValue: o,
        contextValue: s,
        variableValues: a,
        operationName: l,
        fieldResolver: u,
        typeResolver: c,
        subscribeFieldResolver: d
    } = e;
    let f;
    const p = Object.create(null);
    for (const _ of i.definitions) switch (_.kind) {
        case w.OPERATION_DEFINITION:
            if (l == null) {
                if (f !== void 0) return [new A("Must provide operation name if query contains multiple operations.")];
                f = _
            } else ((t = _.name) === null || t === void 0 ? void 0 : t.value) === l && (f = _);
            break;
        case w.FRAGMENT_DEFINITION:
            p[_.name.value] = _;
            break
    }
    if (!f) return l != null ? [new A(`Unknown operation named "${l}".`)] : [new A("Must provide an operation.")];
    const h = (n = f.variableDefinitions) !== null && n !== void 0 ? n : [],
        g = C_(r, h, a != null ? a : {}, {maxErrors: 50});
    return g.errors ? g.errors : {
        schema: r,
        fragments: p,
        rootValue: o,
        contextValue: s,
        operation: f,
        variableValues: g.coerced,
        fieldResolver: u != null ? u : vp,
        typeResolver: c != null ? c : eS,
        subscribeFieldResolver: d != null ? d : vp,
        errors: []
    }
}

function tP(e, t, n) {
    const r = e.schema.getRootType(t.operation);
    if (r == null) throw new A(`Schema is not configured to execute ${t.operation} operation.`, {nodes: t});
    const i = Om(e.schema, e.fragments, e.variableValues, r, t.selectionSet), o = void 0;
    switch (t.operation) {
        case tt.QUERY:
            return Lu(e, r, n, o, i);
        case tt.MUTATION:
            return nP(e, r, n, o, i);
        case tt.SUBSCRIPTION:
            return Lu(e, r, n, o, i)
    }
}

function nP(e, t, n, r, i) {
    return XL(i.entries(), (o, [s, a]) => {
        const l = Fo(r, s, t.name), u = K_(e, t, n, a, l);
        return u === void 0 ? o : qt(u) ? u.then(c => (o[s] = c, o)) : (o[s] = u, o)
    }, Object.create(null))
}

function Lu(e, t, n, r, i) {
    const o = Object.create(null);
    let s = !1;
    for (const [a, l] of i.entries()) {
        const u = Fo(r, a, t.name), c = K_(e, t, n, l, u);
        c !== void 0 && (o[a] = c, qt(c) && (s = !0))
    }
    return s ? YL(o) : o
}

function K_(e, t, n, r, i) {
    var o;
    const s = tS(e.schema, t, r[0]);
    if (!s) return;
    const a = s.type, l = (o = s.resolve) !== null && o !== void 0 ? o : e.fieldResolver, u = Z_(e, s, r, t, i);
    try {
        const c = Pc(s, r[0], e.variableValues), d = e.contextValue, f = l(n, c, d, u);
        let p;
        return qt(f) ? p = f.then(h => aa(e, a, r, u, i, h)) : p = aa(e, a, r, u, i, f), qt(p) ? p.then(void 0, h => {
            const g = Mo(h, r, Vt(i));
            return Pu(g, a, e)
        }) : p
    } catch (c) {
        const d = Mo(c, r, Vt(i));
        return Pu(d, a, e)
    }
}

function Z_(e, t, n, r, i) {
    return {
        fieldName: t.name,
        fieldNodes: n,
        returnType: t.type,
        parentType: r,
        path: i,
        schema: e.schema,
        fragments: e.fragments,
        rootValue: e.rootValue,
        operation: e.operation,
        variableValues: e.variableValues
    }
}

function Pu(e, t, n) {
    if (te(t)) throw e;
    return n.errors.push(e), null
}

function aa(e, t, n, r, i, o) {
    if (o instanceof Error) throw o;
    if (te(t)) {
        const s = aa(e, t.ofType, n, r, i, o);
        if (s === null) throw new Error(`Cannot return null for non-nullable field ${r.parentType.name}.${r.fieldName}.`);
        return s
    }
    if (o == null) return null;
    if (Ce(t)) return rP(e, t, n, r, i, o);
    if ($n(t)) return iP(t, o);
    if (Mn(t)) return oP(e, t, n, r, i, o);
    if (de(t)) return mp(e, t, n, r, i, o);
    Ge(!1, "Cannot complete value of unexpected output type: " + D(t))
}

function rP(e, t, n, r, i, o) {
    if (!um(o)) throw new A(`Expected Iterable, but did not find one for field "${r.parentType.name}.${r.fieldName}".`);
    const s = t.ofType;
    let a = !1;
    const l = Array.from(o, (u, c) => {
        const d = Fo(i, c, void 0);
        try {
            let f;
            return qt(u) ? f = u.then(p => aa(e, s, n, r, d, p)) : f = aa(e, s, n, r, d, u), qt(f) ? (a = !0, f.then(void 0, p => {
                const h = Mo(p, n, Vt(d));
                return Pu(h, s, e)
            })) : f
        } catch (f) {
            const p = Mo(f, n, Vt(d));
            return Pu(p, s, e)
        }
    });
    return a ? Promise.all(l) : l
}

function iP(e, t) {
    const n = e.serialize(t);
    if (n == null) throw new Error(`Expected \`${D(e)}.serialize(${D(t)})\` to return non-nullable value, returned: ${D(n)}`);
    return n
}

function oP(e, t, n, r, i, o) {
    var s;
    const a = (s = t.resolveType) !== null && s !== void 0 ? s : e.typeResolver, l = e.contextValue, u = a(o, l, r, t);
    return qt(u) ? u.then(c => mp(e, cg(c, e, t, n, r, o), n, r, i, o)) : mp(e, cg(u, e, t, n, r, o), n, r, i, o)
}

function cg(e, t, n, r, i, o) {
    if (e == null) throw new A(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}". Either the "${n.name}" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.`, r);
    if (de(e)) throw new A("Support for returning GraphQLObjectType from resolveType was removed in graphql-js@16.0.0 please return type name instead.");
    if (typeof e != "string") throw new A(`Abstract type "${n.name}" must resolve to an Object type at runtime for field "${i.parentType.name}.${i.fieldName}" with value ${D(o)}, received "${D(e)}".`);
    const s = t.schema.getType(e);
    if (s == null) throw new A(`Abstract type "${n.name}" was resolved to a type "${e}" that does not exist inside the schema.`, {nodes: r});
    if (!de(s)) throw new A(`Abstract type "${n.name}" was resolved to a non-object type "${e}".`, {nodes: r});
    if (!t.schema.isSubType(n, s)) throw new A(`Runtime Object type "${s.name}" is not a possible type for "${n.name}".`, {nodes: r});
    return s
}

function mp(e, t, n, r, i, o) {
    const s = eP(e, t, n);
    if (t.isTypeOf) {
        const a = t.isTypeOf(o, e.contextValue, r);
        if (qt(a)) return a.then(l => {
            if (!l) throw fg(t, o, n);
            return Lu(e, t, o, i, s)
        });
        if (!a) throw fg(t, o, n)
    }
    return Lu(e, t, o, i, s)
}

function fg(e, t, n) {
    return new A(`Expected value of type "${e.name}" but got: ${D(t)}.`, {nodes: n})
}

const eS = function (e, t, n, r) {
    if (Qt(e) && typeof e.__typename == "string") return e.__typename;
    const i = n.schema.getPossibleTypes(r), o = [];
    for (let s = 0; s < i.length; s++) {
        const a = i[s];
        if (a.isTypeOf) {
            const l = a.isTypeOf(e, t, n);
            if (qt(l)) o[s] = l; else if (l) return a.name
        }
    }
    if (o.length) return Promise.all(o).then(s => {
        for (let a = 0; a < s.length; a++) if (s[a]) return i[a].name
    })
}, vp = function (e, t, n, r) {
    if (Qt(e) || typeof e == "function") {
        const i = e[r.fieldName];
        return typeof i == "function" ? e[r.fieldName](t, n, r) : i
    }
};

function tS(e, t, n) {
    const r = n.name.value;
    return r === ra.name && e.getQueryType() === t ? ra : r === ia.name && e.getQueryType() === t ? ia : r === oa.name ? oa : t.getFields()[r]
}

function sP(e) {
    return new Promise(t => t(nS(e)))
}

function aP(e) {
    const t = nS(e);
    if (qt(t)) throw new Error("GraphQL execution failed to complete synchronously.");
    return t
}

function nS(e) {
    arguments.length < 2 || ie(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const {
        schema: t,
        source: n,
        rootValue: r,
        contextValue: i,
        variableValues: o,
        operationName: s,
        fieldResolver: a,
        typeResolver: l
    } = e, u = vm(t);
    if (u.length > 0) return {errors: u};
    let c;
    try {
        c = bc(n)
    } catch (f) {
        return {errors: [f]}
    }
    const d = Q_(t, c);
    return d.length > 0 ? {errors: d} : Fc({
        schema: t,
        document: c,
        rootValue: r,
        contextValue: i,
        variableValues: o,
        operationName: s,
        fieldResolver: a,
        typeResolver: l
    })
}

function rS(e) {
    return typeof (e == null ? void 0 : e[Symbol.asyncIterator]) == "function"
}

function lP(e, t) {
    const n = e[Symbol.asyncIterator]();

    async function r(i) {
        if (i.done) return i;
        try {
            return {value: await t(i.value), done: !1}
        } catch (o) {
            if (typeof n.return == "function") try {
                await n.return()
            } catch {
            }
            throw o
        }
    }

    return {
        async next() {
            return r(await n.next())
        }, async return() {
            return typeof n.return == "function" ? r(await n.return()) : {value: void 0, done: !0}
        }, async throw(i) {
            if (typeof n.throw == "function") return r(await n.throw(i));
            throw i
        }, [Symbol.asyncIterator]() {
            return this
        }
    }
}

async function uP(e) {
    arguments.length < 2 || ie(!1, "graphql@16 dropped long-deprecated support for positional arguments, please pass an object instead.");
    const t = await iS(e);
    return rS(t) ? lP(t, r => Fc({...e, rootValue: r})) : t
}

function cP(e) {
    const t = e[0];
    return t && "document" in t ? t : {
        schema: t,
        document: e[1],
        rootValue: e[2],
        contextValue: e[3],
        variableValues: e[4],
        operationName: e[5],
        subscribeFieldResolver: e[6]
    }
}

async function iS(...e) {
    const t = cP(e), {schema: n, document: r, variableValues: i} = t;
    X_(n, r, i);
    const o = J_(t);
    if (!("schema" in o)) return {errors: o};
    try {
        const s = await fP(o);
        if (!rS(s)) throw new Error(`Subscription field must return Async Iterable. Received: ${D(s)}.`);
        return s
    } catch (s) {
        if (s instanceof A) return {errors: [s]};
        throw s
    }
}

async function fP(e) {
    const {schema: t, fragments: n, operation: r, variableValues: i, rootValue: o} = e, s = t.getSubscriptionType();
    if (s == null) throw new A("Schema is not configured to execute subscription operation.", {nodes: r});
    const a = Om(t, n, i, s, r.selectionSet), [l, u] = [...a.entries()][0], c = tS(t, s, u[0]);
    if (!c) {
        const h = u[0].name.value;
        throw new A(`The subscription field "${h}" is not defined.`, {nodes: u})
    }
    const d = Fo(void 0, l, s.name), f = Z_(e, c, u, s, d);
    try {
        var p;
        const h = Pc(c, u[0], i), g = e.contextValue,
            m = await ((p = c.subscribe) !== null && p !== void 0 ? p : e.subscribeFieldResolver)(o, h, g, f);
        if (m instanceof Error) throw m;
        return m
    } catch (h) {
        throw Mo(h, u, Vt(d))
    }
}

function dP(e) {
    return {
        Field(t) {
            const n = e.getFieldDef(), r = n == null ? void 0 : n.deprecationReason;
            if (n && r != null) {
                const i = e.getParentType();
                i != null || Ge(!1), e.reportError(new A(`The field ${i.name}.${n.name} is deprecated. ${r}`, {nodes: t}))
            }
        }, Argument(t) {
            const n = e.getArgument(), r = n == null ? void 0 : n.deprecationReason;
            if (n && r != null) {
                const i = e.getDirective();
                if (i != null) e.reportError(new A(`Directive "@${i.name}" argument "${n.name}" is deprecated. ${r}`, {nodes: t})); else {
                    const o = e.getParentType(), s = e.getFieldDef();
                    o != null && s != null || Ge(!1), e.reportError(new A(`Field "${o.name}.${s.name}" argument "${n.name}" is deprecated. ${r}`, {nodes: t}))
                }
            }
        }, ObjectField(t) {
            const n = Nt(e.getParentInputType());
            if (De(n)) {
                const r = n.getFields()[t.name.value], i = r == null ? void 0 : r.deprecationReason;
                i != null && e.reportError(new A(`The input field ${n.name}.${r.name} is deprecated. ${i}`, {nodes: t}))
            }
        }, EnumValue(t) {
            const n = e.getEnumValue(), r = n == null ? void 0 : n.deprecationReason;
            if (n && r != null) {
                const i = Nt(e.getInputType());
                i != null || Ge(!1), e.reportError(new A(`The enum value "${i.name}.${n.name}" is deprecated. ${r}`, {nodes: t}))
            }
        }
    }
}

function pP(e) {
    return {
        Field(t) {
            const n = Nt(e.getType());
            n && Ai(n) && e.reportError(new A(`GraphQL introspection has been disabled, but the requested query contained the field "${t.name.value}".`, {nodes: t}))
        }
    }
}

function oS(e) {
    const t = {
            descriptions: !0,
            specifiedByUrl: !1,
            directiveIsRepeatable: !1,
            schemaDescription: !1,
            inputValueDeprecation: !1, ...e
        }, n = t.descriptions ? "description" : "", r = t.specifiedByUrl ? "specifiedByURL" : "",
        i = t.directiveIsRepeatable ? "isRepeatable" : "", o = t.schemaDescription ? n : "";

    function s(a) {
        return t.inputValueDeprecation ? a : ""
    }

    return `
    query IntrospectionQuery {
      __schema {
        ${o}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${n}
          ${i}
          locations
          args${s("(includeDeprecated: true)")} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${n}
      ${r}
      fields(includeDeprecated: true) {
        name
        ${n}
        args${s("(includeDeprecated: true)")} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${s("(includeDeprecated: true)")} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${n}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${n}
      type { ...TypeRef }
      defaultValue
      ${s("isDeprecated")}
      ${s("deprecationReason")}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

function hP(e, t) {
    let n = null;
    for (const i of e.definitions) if (i.kind === w.OPERATION_DEFINITION) {
        var r;
        if (t == null) {
            if (n) return null;
            n = i
        } else if (((r = i.name) === null || r === void 0 ? void 0 : r.value) === t) return i
    }
    return n
}

function mP(e, t) {
    if (t.operation === "query") {
        const n = e.getQueryType();
        if (!n) throw new A("Schema does not define the required query root type.", {nodes: t});
        return n
    }
    if (t.operation === "mutation") {
        const n = e.getMutationType();
        if (!n) throw new A("Schema is not configured for mutations.", {nodes: t});
        return n
    }
    if (t.operation === "subscription") {
        const n = e.getSubscriptionType();
        if (!n) throw new A("Schema is not configured for subscriptions.", {nodes: t});
        return n
    }
    throw new A("Can only have query, mutation and subscription operations.", {nodes: t})
}

function vP(e, t) {
    const n = {specifiedByUrl: !0, directiveIsRepeatable: !0, schemaDescription: !0, inputValueDeprecation: !0, ...t},
        r = bc(oS(n)), i = Y_({schema: e, document: r});
    return !i.errors && i.data || Ge(!1), i.data
}

function yP(e, t) {
    Qt(e) && Qt(e.__schema) || ie(!1, `Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${D(e)}.`);
    const n = e.__schema, r = br(n.types, b => b.name, b => f(b));
    for (const b of [...Aa, ...Ra]) r[b.name] && (r[b.name] = b);
    const i = n.queryType ? c(n.queryType) : null, o = n.mutationType ? c(n.mutationType) : null,
        s = n.subscriptionType ? c(n.subscriptionType) : null, a = n.directives ? n.directives.map($) : [];
    return new Xo({
        description: n.description,
        query: i,
        mutation: o,
        subscription: s,
        types: Object.values(r),
        directives: a,
        assumeValid: t == null ? void 0 : t.assumeValid
    });

    function l(b) {
        if (b.kind === we.LIST) {
            const P = b.ofType;
            if (!P) throw new Error("Decorated type deeper than introspection query.");
            return new ct(l(P))
        }
        if (b.kind === we.NON_NULL) {
            const P = b.ofType;
            if (!P) throw new Error("Decorated type deeper than introspection query.");
            const X = l(P);
            return new re(XT(X))
        }
        return u(b)
    }

    function u(b) {
        const P = b.name;
        if (!P) throw new Error(`Unknown type reference: ${D(b)}.`);
        const X = r[P];
        if (!X) throw new Error(`Invalid or incomplete schema, unknown type: ${P}. Ensure that a full introspection query is used in order to build a client schema.`);
        return X
    }

    function c(b) {
        return WT(u(b))
    }

    function d(b) {
        return YT(u(b))
    }

    function f(b) {
        if (b != null && b.name != null && b.kind != null) switch (b.kind) {
            case we.SCALAR:
                return p(b);
            case we.OBJECT:
                return g(b);
            case we.INTERFACE:
                return _(b);
            case we.UNION:
                return m(b);
            case we.ENUM:
                return y(b);
            case we.INPUT_OBJECT:
                return E(b)
        }
        const P = D(b);
        throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${P}.`)
    }

    function p(b) {
        return new Un({name: b.name, description: b.description, specifiedByURL: b.specifiedByURL})
    }

    function h(b) {
        if (b.interfaces === null && b.kind === we.INTERFACE) return [];
        if (!b.interfaces) {
            const P = D(b);
            throw new Error(`Introspection result missing interfaces: ${P}.`)
        }
        return b.interfaces.map(d)
    }

    function g(b) {
        return new cn({name: b.name, description: b.description, interfaces: () => h(b), fields: () => T(b)})
    }

    function _(b) {
        return new xo({name: b.name, description: b.description, interfaces: () => h(b), fields: () => T(b)})
    }

    function m(b) {
        if (!b.possibleTypes) {
            const P = D(b);
            throw new Error(`Introspection result missing possibleTypes: ${P}.`)
        }
        return new Lo({name: b.name, description: b.description, types: () => b.possibleTypes.map(c)})
    }

    function y(b) {
        if (!b.enumValues) {
            const P = D(b);
            throw new Error(`Introspection result missing enumValues: ${P}.`)
        }
        return new Ur({
            name: b.name,
            description: b.description,
            values: br(b.enumValues, P => P.name, P => ({
                description: P.description,
                deprecationReason: P.deprecationReason
            }))
        })
    }

    function E(b) {
        if (!b.inputFields) {
            const P = D(b);
            throw new Error(`Introspection result missing inputFields: ${P}.`)
        }
        return new Po({name: b.name, description: b.description, fields: () => x(b.inputFields)})
    }

    function T(b) {
        if (!b.fields) throw new Error(`Introspection result missing fields: ${D(b)}.`);
        return br(b.fields, P => P.name, R)
    }

    function R(b) {
        const P = l(b.type);
        if (!Fr(P)) {
            const X = D(P);
            throw new Error(`Introspection must provide output type for fields, but received: ${X}.`)
        }
        if (!b.args) {
            const X = D(b);
            throw new Error(`Introspection result missing field args: ${X}.`)
        }
        return {description: b.description, deprecationReason: b.deprecationReason, type: P, args: x(b.args)}
    }

    function x(b) {
        return br(b, P => P.name, F)
    }

    function F(b) {
        const P = l(b.type);
        if (!Dt(P)) {
            const Se = D(P);
            throw new Error(`Introspection must provide input type for arguments, but received: ${Se}.`)
        }
        const X = b.defaultValue != null ? Ln(GT(b.defaultValue), P) : void 0;
        return {description: b.description, type: P, defaultValue: X, deprecationReason: b.deprecationReason}
    }

    function $(b) {
        if (!b.args) {
            const P = D(b);
            throw new Error(`Introspection result missing directive args: ${P}.`)
        }
        if (!b.locations) {
            const P = D(b);
            throw new Error(`Introspection result missing directive locations: ${P}.`)
        }
        return new Vn({
            name: b.name,
            description: b.description,
            isRepeatable: b.isRepeatable,
            locations: b.locations.slice(),
            args: x(b.args)
        })
    }
}

function gP(e, t, n) {
    mm(e), t != null && t.kind === w.DOCUMENT || ie(!1, "Must provide valid Document AST."), (n == null ? void 0 : n.assumeValid) !== !0 && (n == null ? void 0 : n.assumeValidSDL) !== !0 && QL(t, e);
    const r = e.toConfig(), i = sS(r, t, n);
    return r === i ? e : new Xo(i)
}

function sS(e, t, n) {
    var r, i, o, s;
    const a = [], l = Object.create(null), u = [];
    let c;
    const d = [];
    for (const v of t.definitions) if (v.kind === w.SCHEMA_DEFINITION) c = v; else if (v.kind === w.SCHEMA_EXTENSION) d.push(v); else if (Jo(v)) a.push(v); else if (xc(v)) {
        const N = v.name.value, I = l[N];
        l[N] = I ? I.concat([v]) : [v]
    } else v.kind === w.DIRECTIVE_DEFINITION && u.push(v);
    if (Object.keys(l).length === 0 && a.length === 0 && u.length === 0 && d.length === 0 && c == null) return e;
    const f = Object.create(null);
    for (const v of e.types) f[v.name] = y(v);
    for (const v of a) {
        var p;
        const N = v.name.value;
        f[N] = (p = dg[N]) !== null && p !== void 0 ? p : me(v)
    }
    const h = {
        query: e.query && _(e.query),
        mutation: e.mutation && _(e.mutation),
        subscription: e.subscription && _(e.subscription), ...c && X([c]), ...X(d)
    };
    return {
        description: (r = c) === null || r === void 0 || (i = r.description) === null || i === void 0 ? void 0 : i.value, ...h,
        types: Object.values(f),
        directives: [...e.directives.map(m), ...u.map(he)],
        extensions: Object.create(null),
        astNode: (o = c) !== null && o !== void 0 ? o : e.astNode,
        extensionASTNodes: e.extensionASTNodes.concat(d),
        assumeValid: (s = n == null ? void 0 : n.assumeValid) !== null && s !== void 0 ? s : !1
    };

    function g(v) {
        return Ce(v) ? new ct(g(v.ofType)) : te(v) ? new re(g(v.ofType)) : _(v)
    }

    function _(v) {
        return f[v.name]
    }

    function m(v) {
        const N = v.toConfig();
        return new Vn({...N, args: Yn(N.args, P)})
    }

    function y(v) {
        if (Ai(v) || Cc(v)) return v;
        if (Jt(v)) return R(v);
        if (de(v)) return x(v);
        if (ye(v)) return F(v);
        if (nt(v)) return $(v);
        if (Ye(v)) return T(v);
        if (De(v)) return E(v);
        Ge(!1, "Unexpected type: " + D(v))
    }

    function E(v) {
        var N;
        const I = v.toConfig(), k = (N = l[I.name]) !== null && N !== void 0 ? N : [];
        return new Po({
            ...I,
            fields: () => ({...Yn(I.fields, z => ({...z, type: g(z.type)})), ...Ie(k)}),
            extensionASTNodes: I.extensionASTNodes.concat(k)
        })
    }

    function T(v) {
        var N;
        const I = v.toConfig(), k = (N = l[v.name]) !== null && N !== void 0 ? N : [];
        return new Ur({...I, values: {...I.values, ...j(k)}, extensionASTNodes: I.extensionASTNodes.concat(k)})
    }

    function R(v) {
        var N;
        const I = v.toConfig(), k = (N = l[I.name]) !== null && N !== void 0 ? N : [];
        let z = I.specifiedByURL;
        for (const H of k) {
            var W;
            z = (W = pg(H)) !== null && W !== void 0 ? W : z
        }
        return new Un({...I, specifiedByURL: z, extensionASTNodes: I.extensionASTNodes.concat(k)})
    }

    function x(v) {
        var N;
        const I = v.toConfig(), k = (N = l[I.name]) !== null && N !== void 0 ? N : [];
        return new cn({
            ...I,
            interfaces: () => [...v.getInterfaces().map(_), ...Q(k)],
            fields: () => ({...Yn(I.fields, b), ...je(k)}),
            extensionASTNodes: I.extensionASTNodes.concat(k)
        })
    }

    function F(v) {
        var N;
        const I = v.toConfig(), k = (N = l[I.name]) !== null && N !== void 0 ? N : [];
        return new xo({
            ...I,
            interfaces: () => [...v.getInterfaces().map(_), ...Q(k)],
            fields: () => ({...Yn(I.fields, b), ...je(k)}),
            extensionASTNodes: I.extensionASTNodes.concat(k)
        })
    }

    function $(v) {
        var N;
        const I = v.toConfig(), k = (N = l[I.name]) !== null && N !== void 0 ? N : [];
        return new Lo({
            ...I,
            types: () => [...v.getTypes().map(_), ...J(k)],
            extensionASTNodes: I.extensionASTNodes.concat(k)
        })
    }

    function b(v) {
        return {...v, type: g(v.type), args: v.args && Yn(v.args, P)}
    }

    function P(v) {
        return {...v, type: g(v.type)}
    }

    function X(v) {
        const N = {};
        for (const k of v) {
            var I;
            const z = (I = k.operationTypes) !== null && I !== void 0 ? I : [];
            for (const W of z) N[W.operation] = Se(W.type)
        }
        return N
    }

    function Se(v) {
        var N;
        const I = v.name.value, k = (N = dg[I]) !== null && N !== void 0 ? N : f[I];
        if (k === void 0) throw new Error(`Unknown type: "${I}".`);
        return k
    }

    function Xe(v) {
        return v.kind === w.LIST_TYPE ? new ct(Xe(v.type)) : v.kind === w.NON_NULL_TYPE ? new re(Xe(v.type)) : Se(v)
    }

    function he(v) {
        var N;
        return new Vn({
            name: v.name.value,
            description: (N = v.description) === null || N === void 0 ? void 0 : N.value,
            locations: v.locations.map(({value: I}) => I),
            isRepeatable: v.repeatable,
            args: oe(v.arguments),
            astNode: v
        })
    }

    function je(v) {
        const N = Object.create(null);
        for (const z of v) {
            var I;
            const W = (I = z.fields) !== null && I !== void 0 ? I : [];
            for (const H of W) {
                var k;
                N[H.name.value] = {
                    type: Xe(H.type),
                    description: (k = H.description) === null || k === void 0 ? void 0 : k.value,
                    args: oe(H.arguments),
                    deprecationReason: El(H),
                    astNode: H
                }
            }
        }
        return N
    }

    function oe(v) {
        const N = v != null ? v : [], I = Object.create(null);
        for (const z of N) {
            var k;
            const W = Xe(z.type);
            I[z.name.value] = {
                type: W,
                description: (k = z.description) === null || k === void 0 ? void 0 : k.value,
                defaultValue: Ln(z.defaultValue, W),
                deprecationReason: El(z),
                astNode: z
            }
        }
        return I
    }

    function Ie(v) {
        const N = Object.create(null);
        for (const z of v) {
            var I;
            const W = (I = z.fields) !== null && I !== void 0 ? I : [];
            for (const H of W) {
                var k;
                const Z = Xe(H.type);
                N[H.name.value] = {
                    type: Z,
                    description: (k = H.description) === null || k === void 0 ? void 0 : k.value,
                    defaultValue: Ln(H.defaultValue, Z),
                    deprecationReason: El(H),
                    astNode: H
                }
            }
        }
        return N
    }

    function j(v) {
        const N = Object.create(null);
        for (const z of v) {
            var I;
            const W = (I = z.values) !== null && I !== void 0 ? I : [];
            for (const H of W) {
                var k;
                N[H.name.value] = {
                    description: (k = H.description) === null || k === void 0 ? void 0 : k.value,
                    deprecationReason: El(H),
                    astNode: H
                }
            }
        }
        return N
    }

    function Q(v) {
        return v.flatMap(N => {
            var I, k;
            return (I = (k = N.interfaces) === null || k === void 0 ? void 0 : k.map(Se)) !== null && I !== void 0 ? I : []
        })
    }

    function J(v) {
        return v.flatMap(N => {
            var I, k;
            return (I = (k = N.types) === null || k === void 0 ? void 0 : k.map(Se)) !== null && I !== void 0 ? I : []
        })
    }

    function me(v) {
        var N;
        const I = v.name.value, k = (N = l[I]) !== null && N !== void 0 ? N : [];
        switch (v.kind) {
            case w.OBJECT_TYPE_DEFINITION: {
                var z;
                const Ve = [v, ...k];
                return new cn({
                    name: I,
                    description: (z = v.description) === null || z === void 0 ? void 0 : z.value,
                    interfaces: () => Q(Ve),
                    fields: () => je(Ve),
                    astNode: v,
                    extensionASTNodes: k
                })
            }
            case w.INTERFACE_TYPE_DEFINITION: {
                var W;
                const Ve = [v, ...k];
                return new xo({
                    name: I,
                    description: (W = v.description) === null || W === void 0 ? void 0 : W.value,
                    interfaces: () => Q(Ve),
                    fields: () => je(Ve),
                    astNode: v,
                    extensionASTNodes: k
                })
            }
            case w.ENUM_TYPE_DEFINITION: {
                var H;
                const Ve = [v, ...k];
                return new Ur({
                    name: I,
                    description: (H = v.description) === null || H === void 0 ? void 0 : H.value,
                    values: j(Ve),
                    astNode: v,
                    extensionASTNodes: k
                })
            }
            case w.UNION_TYPE_DEFINITION: {
                var Z;
                const Ve = [v, ...k];
                return new Lo({
                    name: I,
                    description: (Z = v.description) === null || Z === void 0 ? void 0 : Z.value,
                    types: () => J(Ve),
                    astNode: v,
                    extensionASTNodes: k
                })
            }
            case w.SCALAR_TYPE_DEFINITION: {
                var se;
                return new Un({
                    name: I,
                    description: (se = v.description) === null || se === void 0 ? void 0 : se.value,
                    specifiedByURL: pg(v),
                    astNode: v,
                    extensionASTNodes: k
                })
            }
            case w.INPUT_OBJECT_TYPE_DEFINITION: {
                var Ue;
                const Ve = [v, ...k];
                return new Po({
                    name: I,
                    description: (Ue = v.description) === null || Ue === void 0 ? void 0 : Ue.value,
                    fields: () => Ie(Ve),
                    astNode: v,
                    extensionASTNodes: k
                })
            }
        }
    }
}

const dg = sr([...Aa, ...Ra], e => e.name);

function El(e) {
    const t = sa(Rc, e);
    return t == null ? void 0 : t.reason
}

function pg(e) {
    const t = sa(am, e);
    return t == null ? void 0 : t.url
}

function aS(e, t) {
    e != null && e.kind === w.DOCUMENT || ie(!1, "Must provide valid Document AST."), (t == null ? void 0 : t.assumeValid) !== !0 && (t == null ? void 0 : t.assumeValidSDL) !== !0 && qL(e);
    const r = sS({
        description: void 0,
        types: [],
        directives: [],
        extensions: Object.create(null),
        extensionASTNodes: [],
        assumeValid: !1
    }, e, t);
    if (r.astNode == null) for (const o of r.types) switch (o.name) {
        case"Query":
            r.query = o;
            break;
        case"Mutation":
            r.mutation = o;
            break;
        case"Subscription":
            r.subscription = o;
            break
    }
    const i = [...r.directives, ...qr.filter(o => r.directives.every(s => s.name !== o.name))];
    return new Xo({...r, directives: i})
}

function EP(e, t) {
    const n = bc(e, {
        noLocation: t == null ? void 0 : t.noLocation,
        allowLegacyFragmentVariables: t == null ? void 0 : t.allowLegacyFragmentVariables
    });
    return aS(n, {
        assumeValidSDL: t == null ? void 0 : t.assumeValidSDL,
        assumeValid: t == null ? void 0 : t.assumeValid
    })
}

function wP(e) {
    const t = e.toConfig(), n = br(Yf(t.types), f => f.name, d);
    return new Xo({
        ...t,
        types: Object.values(n),
        directives: Yf(t.directives).map(s),
        query: o(t.query),
        mutation: o(t.mutation),
        subscription: o(t.subscription)
    });

    function r(f) {
        return Ce(f) ? new ct(r(f.ofType)) : te(f) ? new re(r(f.ofType)) : i(f)
    }

    function i(f) {
        return n[f.name]
    }

    function o(f) {
        return f && i(f)
    }

    function s(f) {
        const p = f.toConfig();
        return new Vn({...p, locations: lS(p.locations, h => h), args: a(p.args)})
    }

    function a(f) {
        return wl(f, p => ({...p, type: r(p.type)}))
    }

    function l(f) {
        return wl(f, p => ({...p, type: r(p.type), args: p.args && a(p.args)}))
    }

    function u(f) {
        return wl(f, p => ({...p, type: r(p.type)}))
    }

    function c(f) {
        return Yf(f).map(i)
    }

    function d(f) {
        if (Jt(f) || Ai(f)) return f;
        if (de(f)) {
            const p = f.toConfig();
            return new cn({...p, interfaces: () => c(p.interfaces), fields: () => l(p.fields)})
        }
        if (ye(f)) {
            const p = f.toConfig();
            return new xo({...p, interfaces: () => c(p.interfaces), fields: () => l(p.fields)})
        }
        if (nt(f)) {
            const p = f.toConfig();
            return new Lo({...p, types: () => c(p.types)})
        }
        if (Ye(f)) {
            const p = f.toConfig();
            return new Ur({...p, values: wl(p.values, h => h)})
        }
        if (De(f)) {
            const p = f.toConfig();
            return new Po({...p, fields: () => u(p.fields)})
        }
        Ge(!1, "Unexpected type: " + D(f))
    }
}

function wl(e, t) {
    const n = Object.create(null);
    for (const r of Object.keys(e).sort(Na)) n[r] = t(e[r]);
    return n
}

function Yf(e) {
    return lS(e, t => t.name)
}

function lS(e, t) {
    return e.slice().sort((n, r) => {
        const i = t(n), o = t(r);
        return Na(i, o)
    })
}

function TP(e) {
    return uS(e, t => !lm(t), SP)
}

function _P(e) {
    return uS(e, lm, Ai)
}

function SP(e) {
    return !Cc(e) && !Ai(e)
}

function uS(e, t, n) {
    const r = e.getDirectives().filter(t), i = Object.values(e.getTypeMap()).filter(n);
    return [NP(e), ...r.map(o => kP(o)), ...i.map(o => cS(o))].filter(Boolean).join(`

`)
}

function NP(e) {
    if (e.description == null && IP(e)) return;
    const t = [], n = e.getQueryType();
    n && t.push(`  query: ${n.name}`);
    const r = e.getMutationType();
    r && t.push(`  mutation: ${r.name}`);
    const i = e.getSubscriptionType();
    return i && t.push(`  subscription: ${i.name}`), fn(e) + `schema {
${t.join(`
`)}
}`
}

function IP(e) {
    const t = e.getQueryType();
    if (t && t.name !== "Query") return !1;
    const n = e.getMutationType();
    if (n && n.name !== "Mutation") return !1;
    const r = e.getSubscriptionType();
    return !(r && r.name !== "Subscription")
}

function cS(e) {
    if (Jt(e)) return bP(e);
    if (de(e)) return OP(e);
    if (ye(e)) return AP(e);
    if (nt(e)) return CP(e);
    if (Ye(e)) return DP(e);
    if (De(e)) return RP(e);
    Ge(!1, "Unexpected type: " + D(e))
}

function bP(e) {
    return fn(e) + `scalar ${e.name}` + xP(e)
}

function fS(e) {
    const t = e.getInterfaces();
    return t.length ? " implements " + t.map(n => n.name).join(" & ") : ""
}

function OP(e) {
    return fn(e) + `type ${e.name}` + fS(e) + dS(e)
}

function AP(e) {
    return fn(e) + `interface ${e.name}` + fS(e) + dS(e)
}

function CP(e) {
    const t = e.getTypes(), n = t.length ? " = " + t.join(" | ") : "";
    return fn(e) + "union " + e.name + n
}

function DP(e) {
    const t = e.getValues().map((n, r) => fn(n, "  ", !r) + "  " + n.name + xm(n.deprecationReason));
    return fn(e) + `enum ${e.name}` + km(t)
}

function RP(e) {
    const t = Object.values(e.getFields()).map((n, r) => fn(n, "  ", !r) + "  " + yp(n));
    return fn(e) + `input ${e.name}` + km(t)
}

function dS(e) {
    const t = Object.values(e.getFields()).map((n, r) => fn(n, "  ", !r) + "  " + n.name + pS(n.args, "  ") + ": " + String(n.type) + xm(n.deprecationReason));
    return km(t)
}

function km(e) {
    return e.length !== 0 ? ` {
` + e.join(`
`) + `
}` : ""
}

function pS(e, t = "") {
    return e.length === 0 ? "" : e.every(n => !n.description) ? "(" + e.map(yp).join(", ") + ")" : `(
` + e.map((n, r) => fn(n, "  " + t, !r) + "  " + t + yp(n)).join(`
`) + `
` + t + ")"
}

function yp(e) {
    const t = Or(e.defaultValue, e.type);
    let n = e.name + ": " + String(e.type);
    return t && (n += ` = ${Ae(t)}`), n + xm(e.deprecationReason)
}

function kP(e) {
    return fn(e) + "directive @" + e.name + pS(e.args) + (e.isRepeatable ? " repeatable" : "") + " on " + e.locations.join(" | ")
}

function xm(e) {
    return e == null ? "" : e !== sm ? ` @deprecated(reason: ${Ae({kind: w.STRING, value: e})})` : " @deprecated"
}

function xP(e) {
    return e.specifiedByURL == null ? "" : ` @specifiedBy(url: ${Ae({kind: w.STRING, value: e.specifiedByURL})})`
}

function fn(e, t = "", n = !0) {
    const {description: r} = e;
    if (r == null) return "";
    const i = Ae({kind: w.STRING, value: r, block: vx(r)});
    return (t && !n ? `
` + t : t) + i.replace(/\n/g, `
` + t) + `
`
}

function LP(e) {
    const t = [];
    for (const n of e) t.push(...n.definitions);
    return {kind: w.DOCUMENT, definitions: t}
}

function PP(e) {
    const t = [], n = Object.create(null);
    for (const i of e.definitions) switch (i.kind) {
        case w.OPERATION_DEFINITION:
            t.push(i);
            break;
        case w.FRAGMENT_DEFINITION:
            n[i.name.value] = hg(i.selectionSet);
            break
    }
    const r = Object.create(null);
    for (const i of t) {
        const o = new Set;
        for (const a of hg(i.selectionSet)) hS(o, n, a);
        const s = i.name ? i.name.value : "";
        r[s] = {
            kind: w.DOCUMENT,
            definitions: e.definitions.filter(a => a === i || a.kind === w.FRAGMENT_DEFINITION && o.has(a.name.value))
        }
    }
    return r
}

function hS(e, t, n) {
    if (!e.has(n)) {
        e.add(n);
        const r = t[n];
        if (r !== void 0) for (const i of r) hS(e, t, i)
    }
}

function hg(e) {
    const t = [];
    return Yo(e, {
        FragmentSpread(n) {
            t.push(n.name.value)
        }
    }), t
}

function FP(e) {
    const t = HT(e) ? e : new Ic(e), n = t.body, r = new Jh(t);
    let i = "", o = !1;
    for (; r.advance().kind !== C.EOF;) {
        const s = r.token, a = s.kind, l = !UT(s.kind);
        o && (l || s.kind === C.SPREAD) && (i += " ");
        const u = n.slice(s.start, s.end);
        a === C.BLOCK_STRING ? i += jT(s.value, {minimize: !0}) : i += u, o = l
    }
    return i
}

function MP(e) {
    const t = mS(e);
    if (t) throw t;
    return e
}

function mS(e) {
    if (typeof e == "string" || ie(!1, "Expected name to be a string."), e.startsWith("__")) return new A(`Name "${e}" must not begin with "__", which is reserved by GraphQL introspection.`);
    try {
        Xt(e)
    } catch (t) {
        return t
    }
}

var Me;
(function (e) {
    e.TYPE_REMOVED = "TYPE_REMOVED", e.TYPE_CHANGED_KIND = "TYPE_CHANGED_KIND", e.TYPE_REMOVED_FROM_UNION = "TYPE_REMOVED_FROM_UNION", e.VALUE_REMOVED_FROM_ENUM = "VALUE_REMOVED_FROM_ENUM", e.REQUIRED_INPUT_FIELD_ADDED = "REQUIRED_INPUT_FIELD_ADDED", e.IMPLEMENTED_INTERFACE_REMOVED = "IMPLEMENTED_INTERFACE_REMOVED", e.FIELD_REMOVED = "FIELD_REMOVED", e.FIELD_CHANGED_KIND = "FIELD_CHANGED_KIND", e.REQUIRED_ARG_ADDED = "REQUIRED_ARG_ADDED", e.ARG_REMOVED = "ARG_REMOVED", e.ARG_CHANGED_KIND = "ARG_CHANGED_KIND", e.DIRECTIVE_REMOVED = "DIRECTIVE_REMOVED", e.DIRECTIVE_ARG_REMOVED = "DIRECTIVE_ARG_REMOVED", e.REQUIRED_DIRECTIVE_ARG_ADDED = "REQUIRED_DIRECTIVE_ARG_ADDED", e.DIRECTIVE_REPEATABLE_REMOVED = "DIRECTIVE_REPEATABLE_REMOVED", e.DIRECTIVE_LOCATION_REMOVED = "DIRECTIVE_LOCATION_REMOVED"
})(Me || (Me = {}));
var In;
(function (e) {
    e.VALUE_ADDED_TO_ENUM = "VALUE_ADDED_TO_ENUM", e.TYPE_ADDED_TO_UNION = "TYPE_ADDED_TO_UNION", e.OPTIONAL_INPUT_FIELD_ADDED = "OPTIONAL_INPUT_FIELD_ADDED", e.OPTIONAL_ARG_ADDED = "OPTIONAL_ARG_ADDED", e.IMPLEMENTED_INTERFACE_ADDED = "IMPLEMENTED_INTERFACE_ADDED", e.ARG_DEFAULT_VALUE_CHANGE = "ARG_DEFAULT_VALUE_CHANGE"
})(In || (In = {}));

function $P(e, t) {
    return vS(e, t).filter(n => n.type in Me)
}

function jP(e, t) {
    return vS(e, t).filter(n => n.type in In)
}

function vS(e, t) {
    return [...VP(e, t), ...UP(e, t)]
}

function UP(e, t) {
    const n = [], r = ar(e.getDirectives(), t.getDirectives());
    for (const i of r.removed) n.push({type: Me.DIRECTIVE_REMOVED, description: `${i.name} was removed.`});
    for (const [i, o] of r.persisted) {
        const s = ar(i.args, o.args);
        for (const a of s.added) Gr(a) && n.push({
            type: Me.REQUIRED_DIRECTIVE_ARG_ADDED,
            description: `A required arg ${a.name} on directive ${i.name} was added.`
        });
        for (const a of s.removed) n.push({
            type: Me.DIRECTIVE_ARG_REMOVED,
            description: `${a.name} was removed from ${i.name}.`
        });
        i.isRepeatable && !o.isRepeatable && n.push({
            type: Me.DIRECTIVE_REPEATABLE_REMOVED,
            description: `Repeatable flag was removed from ${i.name}.`
        });
        for (const a of i.locations) o.locations.includes(a) || n.push({
            type: Me.DIRECTIVE_LOCATION_REMOVED,
            description: `${a} was removed from ${i.name}.`
        })
    }
    return n
}

function VP(e, t) {
    const n = [], r = ar(Object.values(e.getTypeMap()), Object.values(t.getTypeMap()));
    for (const i of r.removed) n.push({
        type: Me.TYPE_REMOVED,
        description: Cc(i) ? `Standard scalar ${i.name} was removed because it is not referenced anymore.` : `${i.name} was removed.`
    });
    for (const [i, o] of r.persisted) Ye(i) && Ye(o) ? n.push(...HP(i, o)) : nt(i) && nt(o) ? n.push(...zP(i, o)) : De(i) && De(o) ? n.push(...BP(i, o)) : de(i) && de(o) ? n.push(...vg(i, o), ...mg(i, o)) : ye(i) && ye(o) ? n.push(...vg(i, o), ...mg(i, o)) : i.constructor !== o.constructor && n.push({
        type: Me.TYPE_CHANGED_KIND,
        description: `${i.name} changed from ${yg(i)} to ${yg(o)}.`
    });
    return n
}

function BP(e, t) {
    const n = [], r = ar(Object.values(e.getFields()), Object.values(t.getFields()));
    for (const i of r.added) Ac(i) ? n.push({
        type: Me.REQUIRED_INPUT_FIELD_ADDED,
        description: `A required field ${i.name} on input type ${e.name} was added.`
    }) : n.push({
        type: In.OPTIONAL_INPUT_FIELD_ADDED,
        description: `An optional field ${i.name} on input type ${e.name} was added.`
    });
    for (const i of r.removed) n.push({type: Me.FIELD_REMOVED, description: `${e.name}.${i.name} was removed.`});
    for (const [i, o] of r.persisted) Ps(i.type, o.type) || n.push({
        type: Me.FIELD_CHANGED_KIND,
        description: `${e.name}.${i.name} changed type from ${String(i.type)} to ${String(o.type)}.`
    });
    return n
}

function zP(e, t) {
    const n = [], r = ar(e.getTypes(), t.getTypes());
    for (const i of r.added) n.push({
        type: In.TYPE_ADDED_TO_UNION,
        description: `${i.name} was added to union type ${e.name}.`
    });
    for (const i of r.removed) n.push({
        type: Me.TYPE_REMOVED_FROM_UNION,
        description: `${i.name} was removed from union type ${e.name}.`
    });
    return n
}

function HP(e, t) {
    const n = [], r = ar(e.getValues(), t.getValues());
    for (const i of r.added) n.push({
        type: In.VALUE_ADDED_TO_ENUM,
        description: `${i.name} was added to enum type ${e.name}.`
    });
    for (const i of r.removed) n.push({
        type: Me.VALUE_REMOVED_FROM_ENUM,
        description: `${i.name} was removed from enum type ${e.name}.`
    });
    return n
}

function mg(e, t) {
    const n = [], r = ar(e.getInterfaces(), t.getInterfaces());
    for (const i of r.added) n.push({
        type: In.IMPLEMENTED_INTERFACE_ADDED,
        description: `${i.name} added to interfaces implemented by ${e.name}.`
    });
    for (const i of r.removed) n.push({
        type: Me.IMPLEMENTED_INTERFACE_REMOVED,
        description: `${e.name} no longer implements interface ${i.name}.`
    });
    return n
}

function vg(e, t) {
    const n = [], r = ar(Object.values(e.getFields()), Object.values(t.getFields()));
    for (const i of r.removed) n.push({type: Me.FIELD_REMOVED, description: `${e.name}.${i.name} was removed.`});
    for (const [i, o] of r.persisted) n.push(...GP(e, i, o)), Ss(i.type, o.type) || n.push({
        type: Me.FIELD_CHANGED_KIND,
        description: `${e.name}.${i.name} changed type from ${String(i.type)} to ${String(o.type)}.`
    });
    return n
}

function GP(e, t, n) {
    const r = [], i = ar(t.args, n.args);
    for (const o of i.removed) r.push({
        type: Me.ARG_REMOVED,
        description: `${e.name}.${t.name} arg ${o.name} was removed.`
    });
    for (const [o, s] of i.persisted) if (!Ps(o.type, s.type)) r.push({
        type: Me.ARG_CHANGED_KIND,
        description: `${e.name}.${t.name} arg ${o.name} has changed type from ${String(o.type)} to ${String(s.type)}.`
    }); else if (o.defaultValue !== void 0) if (s.defaultValue === void 0) r.push({
        type: In.ARG_DEFAULT_VALUE_CHANGE,
        description: `${e.name}.${t.name} arg ${o.name} defaultValue was removed.`
    }); else {
        const l = gg(o.defaultValue, o.type), u = gg(s.defaultValue, s.type);
        l !== u && r.push({
            type: In.ARG_DEFAULT_VALUE_CHANGE,
            description: `${e.name}.${t.name} arg ${o.name} has changed defaultValue from ${l} to ${u}.`
        })
    }
    for (const o of i.added) Gr(o) ? r.push({
        type: Me.REQUIRED_ARG_ADDED,
        description: `A required arg ${o.name} on ${e.name}.${t.name} was added.`
    }) : r.push({
        type: In.OPTIONAL_ARG_ADDED,
        description: `An optional arg ${o.name} on ${e.name}.${t.name} was added.`
    });
    return r
}

function Ss(e, t) {
    return Ce(e) ? Ce(t) && Ss(e.ofType, t.ofType) || te(t) && Ss(e, t.ofType) : te(e) ? te(t) && Ss(e.ofType, t.ofType) : Oa(t) && e.name === t.name || te(t) && Ss(e, t.ofType)
}

function Ps(e, t) {
    return Ce(e) ? Ce(t) && Ps(e.ofType, t.ofType) : te(e) ? te(t) && Ps(e.ofType, t.ofType) || !te(t) && Ps(e.ofType, t) : Oa(t) && e.name === t.name
}

function yg(e) {
    if (Jt(e)) return "a Scalar type";
    if (de(e)) return "an Object type";
    if (ye(e)) return "an Interface type";
    if (nt(e)) return "a Union type";
    if (Ye(e)) return "an Enum type";
    if (De(e)) return "an Input type";
    Ge(!1, "Unexpected type: " + D(e))
}

function gg(e, t) {
    const n = Or(e, t);
    return n != null || Ge(!1), Ae(Lc(n))
}

function ar(e, t) {
    const n = [], r = [], i = [], o = sr(e, ({name: a}) => a), s = sr(t, ({name: a}) => a);
    for (const a of e) {
        const l = s[a.name];
        l === void 0 ? r.push(a) : i.push([a, l])
    }
    for (const a of t) o[a.name] === void 0 && n.push(a);
    return {added: n, persisted: i, removed: r}
}

var qP = Object.freeze(Object.defineProperty({
    __proto__: null,
    version: ax,
    versionInfo: lx,
    graphql: sP,
    graphqlSync: aP,
    resolveObjMapThunk: nm,
    resolveReadonlyArrayThunk: tm,
    GraphQLSchema: Xo,
    GraphQLDirective: Vn,
    GraphQLScalarType: Un,
    GraphQLObjectType: cn,
    GraphQLInterfaceType: xo,
    GraphQLUnionType: Lo,
    GraphQLEnumType: Ur,
    GraphQLInputObjectType: Po,
    GraphQLList: ct,
    GraphQLNonNull: re,
    specifiedScalarTypes: Aa,
    GraphQLInt: n_,
    GraphQLFloat: r_,
    GraphQLString: $e,
    GraphQLBoolean: Ht,
    GraphQLID: rm,
    GRAPHQL_MAX_INT: Ql,
    GRAPHQL_MIN_INT: Wl,
    specifiedDirectives: qr,
    GraphQLIncludeDirective: im,
    GraphQLSkipDirective: om,
    GraphQLDeprecatedDirective: Rc,
    GraphQLSpecifiedByDirective: am,
    get TypeKind() {
        return we
    },
    DEFAULT_DEPRECATION_REASON: sm,
    introspectionTypes: Ra,
    __Schema: kc,
    __Directive: cm,
    __DirectiveLocation: fm,
    __Type: sn,
    __Field: dm,
    __InputValue: Da,
    __EnumValue: pm,
    __TypeKind: hm,
    SchemaMetaFieldDef: ra,
    TypeMetaFieldDef: ia,
    TypeNameMetaFieldDef: oa,
    isSchema: i_,
    isDirective: Dc,
    isType: Ia,
    isScalarType: Jt,
    isObjectType: de,
    isInterfaceType: ye,
    isUnionType: nt,
    isEnumType: Ye,
    isInputObjectType: De,
    isListType: Ce,
    isNonNullType: te,
    isInputType: Dt,
    isOutputType: Fr,
    isLeafType: $n,
    isCompositeType: jn,
    isAbstractType: Mn,
    isWrappingType: ba,
    isNullableType: Zh,
    isNamedType: Oa,
    isRequiredArgument: Gr,
    isRequiredInputField: Ac,
    isSpecifiedScalarType: Cc,
    isIntrospectionType: Ai,
    isSpecifiedDirective: lm,
    assertSchema: mm,
    assertDirective: aL,
    assertType: Hx,
    assertScalarType: Gx,
    assertObjectType: WT,
    assertInterfaceType: YT,
    assertUnionType: qx,
    assertEnumType: Qx,
    assertInputObjectType: Wx,
    assertListType: Yx,
    assertNonNullType: Xx,
    assertInputType: Jx,
    assertOutputType: Kx,
    assertLeafType: Zx,
    assertCompositeType: eL,
    assertAbstractType: tL,
    assertWrappingType: nL,
    assertNullableType: XT,
    assertNamedType: rL,
    getNullableType: em,
    getNamedType: Nt,
    validateSchema: vm,
    assertValidSchema: ym,
    assertName: Xt,
    assertEnumValueName: QT,
    Token: Yh,
    Source: Ic,
    Location: PT,
    get OperationTypeNode() {
        return tt
    },
    getLocation: Ou,
    printLocation: LT,
    printSourceLocation: Wh,
    Lexer: Jh,
    get TokenKind() {
        return C
    },
    parse: bc,
    parseValue: GT,
    parseConstValue: kx,
    parseType: xx,
    print: Ae,
    visit: Yo,
    visitInParallel: Kh,
    getVisitFn: Vx,
    getEnterLeaveForKind: ko,
    BREAK: ro,
    get Kind() {
        return w
    },
    get DirectiveLocation() {
        return Y
    },
    isDefinitionNode: EL,
    isExecutableDefinitionNode: Tm,
    isSelectionNode: wL,
    isValueNode: o_,
    isConstValueNode: dp,
    isTypeNode: TL,
    isTypeSystemDefinitionNode: _m,
    isTypeDefinitionNode: Jo,
    isTypeSystemExtensionNode: Sm,
    isTypeExtensionNode: xc,
    execute: Fc,
    executeSync: Y_,
    defaultFieldResolver: vp,
    defaultTypeResolver: eS,
    responsePathAsArray: Vt,
    getArgumentValues: Pc,
    getVariableValues: C_,
    getDirectiveValues: sa,
    subscribe: uP,
    createSourceEventStream: iS,
    validate: Q_,
    ValidationContext: q_,
    specifiedRules: H_,
    ExecutableDefinitionsRule: s_,
    FieldsOnCorrectTypeRule: a_,
    FragmentsOnCompositeTypesRule: l_,
    KnownArgumentNamesRule: u_,
    KnownDirectivesRule: Nm,
    KnownFragmentNamesRule: f_,
    KnownTypeNamesRule: Im,
    LoneAnonymousOperationRule: d_,
    NoFragmentCyclesRule: h_,
    NoUndefinedVariablesRule: m_,
    NoUnusedFragmentsRule: v_,
    NoUnusedVariablesRule: y_,
    OverlappingFieldsCanBeMergedRule: E_,
    PossibleFragmentSpreadsRule: __,
    ProvidedRequiredArgumentsRule: N_,
    ScalarLeafsRule: b_,
    SingleFieldSubscriptionsRule: R_,
    UniqueArgumentNamesRule: Cm,
    UniqueDirectivesPerLocationRule: Dm,
    UniqueFragmentNamesRule: F_,
    UniqueInputFieldNamesRule: Rm,
    UniqueOperationNamesRule: M_,
    UniqueVariableNamesRule: U_,
    ValuesOfCorrectTypeRule: V_,
    VariablesAreInputTypesRule: B_,
    VariablesInAllowedPositionRule: z_,
    LoneSchemaDefinitionRule: p_,
    UniqueOperationTypesRule: $_,
    UniqueTypeNamesRule: j_,
    UniqueEnumValueNamesRule: L_,
    UniqueFieldDefinitionNamesRule: P_,
    UniqueArgumentDefinitionNamesRule: k_,
    UniqueDirectiveNamesRule: x_,
    PossibleTypeExtensionsRule: S_,
    NoDeprecatedCustomRule: dP,
    NoSchemaIntrospectionCustomRule: pP,
    GraphQLError: A,
    syntaxError: Ze,
    locatedError: Mo,
    printError: fx,
    formatError: dx,
    getIntrospectionQuery: oS,
    getOperationAST: hP,
    getOperationRootType: mP,
    introspectionFromSchema: vP,
    buildClientSchema: yP,
    buildASTSchema: aS,
    buildSchema: EP,
    extendSchema: gP,
    lexicographicSortSchema: wP,
    printSchema: TP,
    printType: cS,
    printIntrospectionSchema: _P,
    typeFromAST: Ft,
    valueFromAST: Ln,
    valueFromASTUntyped: Au,
    astFromValue: Or,
    TypeInfo: Em,
    visitWithTypeInfo: wm,
    coerceInputValue: A_,
    concatAST: LP,
    separateOperations: PP,
    stripIgnoredCharacters: FP,
    isEqualType: Cu,
    isTypeSubTypeOf: ci,
    doTypesOverlap: fp,
    assertValidName: MP,
    isValidNameError: mS,
    get BreakingChangeType() {
        return Me
    },
    get DangerousChangeType() {
        return In
    },
    findBreakingChanges: $P,
    findDangerousChanges: jP
}, Symbol.toStringTag, {value: "Module"})), QP = Yg(qP);

function WP(e) {
    for (var t = [], n = 0; n < e.length;) {
        var r = e[n];
        if (r === "*" || r === "+" || r === "?") {
            t.push({type: "MODIFIER", index: n, value: e[n++]});
            continue
        }
        if (r === "\\") {
            t.push({type: "ESCAPED_CHAR", index: n++, value: e[n++]});
            continue
        }
        if (r === "{") {
            t.push({type: "OPEN", index: n, value: e[n++]});
            continue
        }
        if (r === "}") {
            t.push({type: "CLOSE", index: n, value: e[n++]});
            continue
        }
        if (r === ":") {
            for (var i = "", o = n + 1; o < e.length;) {
                var s = e.charCodeAt(o);
                if (s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 || s === 95) {
                    i += e[o++];
                    continue
                }
                break
            }
            if (!i) throw new TypeError("Missing parameter name at ".concat(n));
            t.push({type: "NAME", index: n, value: i}), n = o;
            continue
        }
        if (r === "(") {
            var a = 1, l = "", o = n + 1;
            if (e[o] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(o));
            for (; o < e.length;) {
                if (e[o] === "\\") {
                    l += e[o++] + e[o++];
                    continue
                }
                if (e[o] === ")") {
                    if (a--, a === 0) {
                        o++;
                        break
                    }
                } else if (e[o] === "(" && (a++, e[o + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(o));
                l += e[o++]
            }
            if (a) throw new TypeError("Unbalanced pattern at ".concat(n));
            if (!l) throw new TypeError("Missing pattern at ".concat(n));
            t.push({type: "PATTERN", index: n, value: l}), n = o;
            continue
        }
        t.push({type: "CHAR", index: n, value: e[n++]})
    }
    return t.push({type: "END", index: n, value: ""}), t
}

function Lm(e, t) {
    t === void 0 && (t = {});
    for (var n = WP(e), r = t.prefixes, i = r === void 0 ? "./" : r, o = "[^".concat(Vi(t.delimiter || "/#?"), "]+?"), s = [], a = 0, l = 0, u = "", c = function (x) {
        if (l < n.length && n[l].type === x) return n[l++].value
    }, d = function (x) {
        var F = c(x);
        if (F !== void 0) return F;
        var $ = n[l], b = $.type, P = $.index;
        throw new TypeError("Unexpected ".concat(b, " at ").concat(P, ", expected ").concat(x))
    }, f = function () {
        for (var x = "", F; F = c("CHAR") || c("ESCAPED_CHAR");) x += F;
        return x
    }; l < n.length;) {
        var p = c("CHAR"), h = c("NAME"), g = c("PATTERN");
        if (h || g) {
            var _ = p || "";
            i.indexOf(_) === -1 && (u += _, _ = ""), u && (s.push(u), u = ""), s.push({
                name: h || a++,
                prefix: _,
                suffix: "",
                pattern: g || o,
                modifier: c("MODIFIER") || ""
            });
            continue
        }
        var m = p || c("ESCAPED_CHAR");
        if (m) {
            u += m;
            continue
        }
        u && (s.push(u), u = "");
        var y = c("OPEN");
        if (y) {
            var _ = f(), E = c("NAME") || "", T = c("PATTERN") || "", R = f();
            d("CLOSE"), s.push({
                name: E || (T ? a++ : ""),
                pattern: E && !T ? o : T,
                prefix: _,
                suffix: R,
                modifier: c("MODIFIER") || ""
            });
            continue
        }
        d("END")
    }
    return s
}

function YP(e, t) {
    return yS(Lm(e, t), t)
}

function yS(e, t) {
    t === void 0 && (t = {});
    var n = Pm(t), r = t.encode, i = r === void 0 ? function (l) {
        return l
    } : r, o = t.validate, s = o === void 0 ? !0 : o, a = e.map(function (l) {
        if (typeof l == "object") return new RegExp("^(?:".concat(l.pattern, ")$"), n)
    });
    return function (l) {
        for (var u = "", c = 0; c < e.length; c++) {
            var d = e[c];
            if (typeof d == "string") {
                u += d;
                continue
            }
            var f = l ? l[d.name] : void 0, p = d.modifier === "?" || d.modifier === "*",
                h = d.modifier === "*" || d.modifier === "+";
            if (Array.isArray(f)) {
                if (!h) throw new TypeError('Expected "'.concat(d.name, '" to not repeat, but got an array'));
                if (f.length === 0) {
                    if (p) continue;
                    throw new TypeError('Expected "'.concat(d.name, '" to not be empty'))
                }
                for (var g = 0; g < f.length; g++) {
                    var _ = i(f[g], d);
                    if (s && !a[c].test(_)) throw new TypeError('Expected all "'.concat(d.name, '" to match "').concat(d.pattern, '", but got "').concat(_, '"'));
                    u += d.prefix + _ + d.suffix
                }
                continue
            }
            if (typeof f == "string" || typeof f == "number") {
                var _ = i(String(f), d);
                if (s && !a[c].test(_)) throw new TypeError('Expected "'.concat(d.name, '" to match "').concat(d.pattern, '", but got "').concat(_, '"'));
                u += d.prefix + _ + d.suffix;
                continue
            }
            if (!p) {
                var m = h ? "an array" : "a string";
                throw new TypeError('Expected "'.concat(d.name, '" to be ').concat(m))
            }
        }
        return u
    }
}

function XP(e, t) {
    var n = [], r = Fm(e, n, t);
    return gS(r, n, t)
}

function gS(e, t, n) {
    n === void 0 && (n = {});
    var r = n.decode, i = r === void 0 ? function (o) {
        return o
    } : r;
    return function (o) {
        var s = e.exec(o);
        if (!s) return !1;
        for (var a = s[0], l = s.index, u = Object.create(null), c = function (f) {
            if (s[f] === void 0) return "continue";
            var p = t[f - 1];
            p.modifier === "*" || p.modifier === "+" ? u[p.name] = s[f].split(p.prefix + p.suffix).map(function (h) {
                return i(h, p)
            }) : u[p.name] = i(s[f], p)
        }, d = 1; d < s.length; d++) c(d);
        return {path: a, index: l, params: u}
    }
}

function Vi(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}

function Pm(e) {
    return e && e.sensitive ? "" : "i"
}

function JP(e, t) {
    if (!t) return e;
    for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, i = n.exec(e.source); i;) t.push({
        name: i[1] || r++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
    }), i = n.exec(e.source);
    return e
}

function KP(e, t, n) {
    var r = e.map(function (i) {
        return Fm(i, t, n).source
    });
    return new RegExp("(?:".concat(r.join("|"), ")"), Pm(n))
}

function ZP(e, t, n) {
    return ES(Lm(e, n), t, n)
}

function ES(e, t, n) {
    n === void 0 && (n = {});
    for (var r = n.strict, i = r === void 0 ? !1 : r, o = n.start, s = o === void 0 ? !0 : o, a = n.end, l = a === void 0 ? !0 : a, u = n.encode, c = u === void 0 ? function (P) {
        return P
    } : u, d = n.delimiter, f = d === void 0 ? "/#?" : d, p = n.endsWith, h = p === void 0 ? "" : p, g = "[".concat(Vi(h), "]|$"), _ = "[".concat(Vi(f), "]"), m = s ? "^" : "", y = 0, E = e; y < E.length; y++) {
        var T = E[y];
        if (typeof T == "string") m += Vi(c(T)); else {
            var R = Vi(c(T.prefix)), x = Vi(c(T.suffix));
            if (T.pattern) if (t && t.push(T), R || x) if (T.modifier === "+" || T.modifier === "*") {
                var F = T.modifier === "*" ? "?" : "";
                m += "(?:".concat(R, "((?:").concat(T.pattern, ")(?:").concat(x).concat(R, "(?:").concat(T.pattern, "))*)").concat(x, ")").concat(F)
            } else m += "(?:".concat(R, "(").concat(T.pattern, ")").concat(x, ")").concat(T.modifier); else T.modifier === "+" || T.modifier === "*" ? m += "((?:".concat(T.pattern, ")").concat(T.modifier, ")") : m += "(".concat(T.pattern, ")").concat(T.modifier); else m += "(?:".concat(R).concat(x, ")").concat(T.modifier)
        }
    }
    if (l) i || (m += "".concat(_, "?")), m += n.endsWith ? "(?=".concat(g, ")") : "$"; else {
        var $ = e[e.length - 1], b = typeof $ == "string" ? _.indexOf($[$.length - 1]) > -1 : $ === void 0;
        i || (m += "(?:".concat(_, "(?=").concat(g, "))?")), b || (m += "(?=".concat(_, "|").concat(g, ")"))
    }
    return new RegExp(m, Pm(n))
}

function Fm(e, t, n) {
    return e instanceof RegExp ? JP(e, t) : Array.isArray(e) ? KP(e, t, n) : ZP(e, t, n)
}

var eF = Object.freeze(Object.defineProperty({
    __proto__: null,
    parse: Lm,
    compile: YP,
    tokensToFunction: yS,
    match: XP,
    regexpToFunction: gS,
    tokensToRegexp: ES,
    pathToRegexp: Fm
}, Symbol.toStringTag, {value: "Module"})), tF = Yg(eF), Mc = {}, ka = {};
Object.defineProperty(ka, "__esModule", {value: !0});
ka.toIsoResponse = void 0;
var nF = dn;

function rF(e) {
    var t;
    return {
        status: (t = e.status) !== null && t !== void 0 ? t : 200,
        statusText: e.statusText || "OK",
        headers: nF.objectToHeaders(e.headers || {}),
        body: e.body
    }
}

ka.toIsoResponse = rF;
var iF = V && V.__extends || function () {
    var e = function (t, n) {
        return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
            r.__proto__ = i
        } || function (r, i) {
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }, e(t, n)
    };
    return function (t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }

        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}(), Fu = V && V.__assign || function () {
    return Fu = Object.assign || function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }, Fu.apply(this, arguments)
}, gp = V && V.__awaiter || function (e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (s) {
            s(o)
        })
    }

    return new (n || (n = Promise))(function (o, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? o(c.value) : i(c.value).then(a, l)
        }

        u((r = r.apply(e, t || [])).next())
    })
}, Ep = V && V.__generator || function (e, t) {
    var n = {
        label: 0, sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1]
        }, trys: [], ops: []
    }, r, i, o, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function () {
        return this
    }), s;

    function a(u) {
        return function (c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n;) try {
            if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
            switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++, {value: u[1], done: !1};
                case 5:
                    n.label++, i = u[1], u = [0];
                    continue;
                case 7:
                    u = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1], o = u;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2], n.ops.push(u);
                        break
                    }
                    o[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            u = t.call(e, n)
        } catch (c) {
            u = [6, c], i = 0
        } finally {
            r = o = 0
        }
        if (u[0] & 5) throw u[1];
        return {value: u[0] ? u[1] : void 0, done: !0}
    }
}, Eg = V && V.__read || function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r = n.call(e), i, o = [], s;
    try {
        for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
    } catch (a) {
        s = {error: a}
    } finally {
        try {
            i && !i.done && (n = r.return) && n.call(r)
        } finally {
            if (s) throw s.error
        }
    }
    return o
};
Object.defineProperty(Mc, "__esModule", {value: !0});
Mc.FetchInterceptor = void 0;
var Mu = dn, oF = bi, sF = Oi, Xf = qo, aF = wa, lF = ka, uF = Qo, cF = function (e) {
    iF(t, e);

    function t() {
        return e.call(this, t.symbol) || this
    }

    return t.prototype.checkEnvironment = function () {
        return typeof globalThis != "undefined" && typeof globalThis.fetch != "undefined"
    }, t.prototype.setup = function () {
        var n = this, r = globalThis.fetch;
        oF.invariant(!r[Xf.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.'), globalThis.fetch = function (i, o) {
            return gp(n, void 0, void 0, function () {
                var s, a, l, u, c, d, f, p, h, g, _ = this;
                return Ep(this, function (m) {
                    switch (m.label) {
                        case 0:
                            return s = new Request(i, o), a = typeof i == "string" ? i : i.url, l = s.method, this.log("[%s] %s", l, a), [4, s.clone().arrayBuffer()];
                        case 1:
                            return u = m.sent(), c = new sF.IsomorphicRequest(new URL(a, location.origin), {
                                body: u,
                                method: l,
                                headers: new Mu.Headers(s.headers),
                                credentials: s.credentials
                            }), d = new uF.InteractiveIsomorphicRequest(c), this.log("isomorphic request", d), this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount("request")), this.emitter.emit("request", d), this.log("awaiting for the mocked response..."), [4, this.emitter.untilIdle("request", function (y) {
                                var E = Eg(y.args, 1), T = E[0];
                                return T.id === d.id
                            })];
                        case 2:
                            return m.sent(), this.log("all request listeners have been resolved!"), [4, d.respondWith.invoked()];
                        case 3:
                            return f = Eg.apply(void 0, [m.sent(), 1]), p = f[0], this.log("event.respondWith called with:", p), p ? (this.log("received mocked response:", p), h = lF.toIsoResponse(p), this.log("derived isomorphic response:", h), this.emitter.emit("response", d, h), g = new Response(p.body, Fu(Fu({}, h), {headers: Mu.flattenHeadersObject(p.headers || {})})), Object.defineProperty(g, "url", {
                                writable: !1,
                                enumerable: !0,
                                configurable: !1,
                                value: d.url.href
                            }), [2, g]) : (this.log("no mocked response received!"), [2, r(s).then(function (y) {
                                return gp(_, void 0, void 0, function () {
                                    var E, T, R, x;
                                    return Ep(this, function (F) {
                                        switch (F.label) {
                                            case 0:
                                                return E = y.clone(), this.log("original fetch performed", E), R = (T = this.emitter).emit, x = ["response", d], [4, fF(E)];
                                            case 1:
                                                return R.apply(T, x.concat([F.sent()])), [2, y]
                                        }
                                    })
                                })
                            })])
                    }
                })
            })
        }, Object.defineProperty(globalThis.fetch, Xf.IS_PATCHED_MODULE, {
            enumerable: !0,
            configurable: !0,
            value: !0
        }), this.subscriptions.push(function () {
            Object.defineProperty(globalThis.fetch, Xf.IS_PATCHED_MODULE, {value: void 0}), globalThis.fetch = r, n.log('restored native "globalThis.fetch"!', globalThis.fetch.name)
        })
    }, t.symbol = Symbol("fetch"), t
}(aF.Interceptor);
Mc.FetchInterceptor = cF;

function fF(e) {
    return gp(this, void 0, void 0, function () {
        var t;
        return Ep(this, function (n) {
            switch (n.label) {
                case 0:
                    return t = {
                        status: e.status,
                        statusText: e.statusText,
                        headers: Mu.objectToHeaders(Mu.headersToObject(e.headers))
                    }, [4, e.text()];
                case 1:
                    return [2, (t.body = n.sent(), t)]
            }
        })
    })
}

var $c = {}, jc = {}, Uc = {}, dr = {}, Ci = {};

function Mm(e, t) {
    return t === void 0 && (t = Object), t && typeof t.freeze == "function" ? t.freeze(e) : e
}

var wS = Mm({
    HTML: "text/html",
    isHTML: function (e) {
        return e === wS.HTML
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml"
}), TS = Mm({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function (e) {
        return e === TS.HTML
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
});
Ci.freeze = Mm;
Ci.MIME_TYPE = wS;
Ci.NAMESPACE = TS;
var dF = Ci, la = dF.NAMESPACE;

function pF(e) {
    return e !== ""
}

function hF(e) {
    return e ? e.split(/[\t\n\f\r ]+/).filter(pF) : []
}

function mF(e, t) {
    return e.hasOwnProperty(t) || (e[t] = !0), e
}

function wg(e) {
    if (!e) return [];
    var t = hF(e);
    return Object.keys(t.reduce(mF, {}))
}

function vF(e) {
    return function (t) {
        return e && e.indexOf(t) !== -1
    }
}

function xa(e, t) {
    for (var n in e) t[n] = e[n]
}

function Mt(e, t) {
    var n = e.prototype;
    if (!(n instanceof t)) {
        let i = function () {
        };
        var r = i;
        i.prototype = t.prototype, i = new i, xa(n, i), e.prototype = n = i
    }
    n.constructor != e && (typeof e != "function" && console.error("unknown Class:" + e), n.constructor = e)
}

var $t = {}, bn = $t.ELEMENT_NODE = 1, $o = $t.ATTRIBUTE_NODE = 2, $u = $t.TEXT_NODE = 3,
    _S = $t.CDATA_SECTION_NODE = 4, SS = $t.ENTITY_REFERENCE_NODE = 5, yF = $t.ENTITY_NODE = 6,
    NS = $t.PROCESSING_INSTRUCTION_NODE = 7, IS = $t.COMMENT_NODE = 8, bS = $t.DOCUMENT_NODE = 9,
    OS = $t.DOCUMENT_TYPE_NODE = 10, lr = $t.DOCUMENT_FRAGMENT_NODE = 11, gF = $t.NOTATION_NODE = 12, wt = {}, st = {};
wt.INDEX_SIZE_ERR = (st[1] = "Index size error", 1);
wt.DOMSTRING_SIZE_ERR = (st[2] = "DOMString size error", 2);
var EF = wt.HIERARCHY_REQUEST_ERR = (st[3] = "Hierarchy request error", 3);
wt.WRONG_DOCUMENT_ERR = (st[4] = "Wrong document", 4);
wt.INVALID_CHARACTER_ERR = (st[5] = "Invalid character", 5);
wt.NO_DATA_ALLOWED_ERR = (st[6] = "No data allowed", 6);
wt.NO_MODIFICATION_ALLOWED_ERR = (st[7] = "No modification allowed", 7);
var wF = wt.NOT_FOUND_ERR = (st[8] = "Not found", 8);
wt.NOT_SUPPORTED_ERR = (st[9] = "Not supported", 9);
var Tg = wt.INUSE_ATTRIBUTE_ERR = (st[10] = "Attribute in use", 10);
wt.INVALID_STATE_ERR = (st[11] = "Invalid state", 11);
wt.SYNTAX_ERR = (st[12] = "Syntax error", 12);
wt.INVALID_MODIFICATION_ERR = (st[13] = "Invalid modification", 13);
wt.NAMESPACE_ERR = (st[14] = "Invalid namespace", 14);
wt.INVALID_ACCESS_ERR = (st[15] = "Invalid access", 15);

function wi(e, t) {
    if (t instanceof Error) var n = t; else n = this, Error.call(this, st[e]), this.message = st[e], Error.captureStackTrace && Error.captureStackTrace(this, wi);
    return n.code = e, t && (this.message = this.message + ": " + t), n
}

wi.prototype = Error.prototype;
xa(wt, wi);

function Zn() {
}

Zn.prototype = {
    length: 0, item: function (e) {
        return this[e] || null
    }, toString: function (e, t) {
        for (var n = [], r = 0; r < this.length; r++) io(this[r], n, e, t);
        return n.join("")
    }
};

function jo(e, t) {
    this._node = e, this._refresh = t, $m(this)
}

function $m(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc != t) {
        var n = e._refresh(e._node);
        jS(e, "length", n.length), xa(n, e), e._inc = t
    }
}

jo.prototype.item = function (e) {
    return $m(this), this[e]
};
Mt(jo, Zn);

function ju() {
}

function AS(e, t) {
    for (var n = e.length; n--;) if (e[n] === t) return n
}

function _g(e, t, n, r) {
    if (r ? t[AS(t, r)] = n : t[t.length++] = n, e) {
        n.ownerElement = e;
        var i = e.ownerDocument;
        i && (r && RS(i, e, r), TF(i, e, n))
    }
}

function Sg(e, t, n) {
    var r = AS(t, n);
    if (r >= 0) {
        for (var i = t.length - 1; r < i;) t[r] = t[++r];
        if (t.length = i, e) {
            var o = e.ownerDocument;
            o && (RS(o, e, n), n.ownerElement = null)
        }
    } else throw wi(wF, new Error(e.tagName + "@" + n))
}

ju.prototype = {
    length: 0, item: Zn.prototype.item, getNamedItem: function (e) {
        for (var t = this.length; t--;) {
            var n = this[t];
            if (n.nodeName == e) return n
        }
    }, setNamedItem: function (e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new wi(Tg);
        var n = this.getNamedItem(e.nodeName);
        return _g(this._ownerElement, this, e, n), n
    }, setNamedItemNS: function (e) {
        var t = e.ownerElement, n;
        if (t && t != this._ownerElement) throw new wi(Tg);
        return n = this.getNamedItemNS(e.namespaceURI, e.localName), _g(this._ownerElement, this, e, n), n
    }, removeNamedItem: function (e) {
        var t = this.getNamedItem(e);
        return Sg(this._ownerElement, this, t), t
    }, removeNamedItemNS: function (e, t) {
        var n = this.getNamedItemNS(e, t);
        return Sg(this._ownerElement, this, n), n
    }, getNamedItemNS: function (e, t) {
        for (var n = this.length; n--;) {
            var r = this[n];
            if (r.localName == t && r.namespaceURI == e) return r
        }
        return null
    }
};

function CS() {
}

CS.prototype = {
    hasFeature: function (e, t) {
        return !0
    }, createDocument: function (e, t, n) {
        var r = new La;
        if (r.implementation = this, r.childNodes = new Zn, r.doctype = n || null, n && r.appendChild(n), t) {
            var i = r.createElementNS(e, t);
            r.appendChild(i)
        }
        return r
    }, createDocumentType: function (e, t, n) {
        var r = new Vc;
        return r.name = e, r.nodeName = e, r.publicId = t || "", r.systemId = n || "", r
    }
};

function Tt() {
}

Tt.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (e, t) {
        return xS(this, e, t)
    },
    replaceChild: function (e, t) {
        this.insertBefore(e, t), t && this.removeChild(t)
    },
    removeChild: function (e) {
        return kS(this, e)
    },
    appendChild: function (e) {
        return this.insertBefore(e, null)
    },
    hasChildNodes: function () {
        return this.firstChild != null
    },
    cloneNode: function (e) {
        return wp(this.ownerDocument || this, this, e)
    },
    normalize: function () {
        for (var e = this.firstChild; e;) {
            var t = e.nextSibling;
            t && t.nodeType == $u && e.nodeType == $u ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
        }
    },
    isSupported: function (e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t)
    },
    hasAttributes: function () {
        return this.attributes.length > 0
    },
    lookupPrefix: function (e) {
        for (var t = this; t;) {
            var n = t._nsMap;
            if (n) {
                for (var r in n) if (n[r] == e) return r
            }
            t = t.nodeType == $o ? t.ownerDocument : t.parentNode
        }
        return null
    },
    lookupNamespaceURI: function (e) {
        for (var t = this; t;) {
            var n = t._nsMap;
            if (n && e in n) return n[e];
            t = t.nodeType == $o ? t.ownerDocument : t.parentNode
        }
        return null
    },
    isDefaultNamespace: function (e) {
        var t = this.lookupPrefix(e);
        return t == null
    }
};

function DS(e) {
    return e == "<" && "&lt;" || e == ">" && "&gt;" || e == "&" && "&amp;" || e == '"' && "&quot;" || "&#" + e.charCodeAt() + ";"
}

xa($t, Tt);
xa($t, Tt.prototype);

function ua(e, t) {
    if (t(e)) return !0;
    if (e = e.firstChild) do if (ua(e, t)) return !0; while (e = e.nextSibling)
}

function La() {
}

function TF(e, t, n) {
    e && e._inc++;
    var r = n.namespaceURI;
    r === la.XMLNS && (t._nsMap[n.prefix ? n.localName : ""] = n.value)
}

function RS(e, t, n, r) {
    e && e._inc++;
    var i = n.namespaceURI;
    i === la.XMLNS && delete t._nsMap[n.prefix ? n.localName : ""]
}

function jm(e, t, n) {
    if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n; else {
            for (var i = t.firstChild, o = 0; i;) r[o++] = i, i = i.nextSibling;
            r.length = o
        }
    }
}

function kS(e, t) {
    var n = t.previousSibling, r = t.nextSibling;
    return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, jm(e.ownerDocument, e), t
}

function xS(e, t, n) {
    var r = t.parentNode;
    if (r && r.removeChild(t), t.nodeType === lr) {
        var i = t.firstChild;
        if (i == null) return t;
        var o = t.lastChild
    } else i = o = t;
    var s = n ? n.previousSibling : e.lastChild;
    i.previousSibling = s, o.nextSibling = n, s ? s.nextSibling = i : e.firstChild = i, n == null ? e.lastChild = o : n.previousSibling = o;
    do i.parentNode = e; while (i !== o && (i = i.nextSibling));
    return jm(e.ownerDocument || e, e), t.nodeType == lr && (t.firstChild = t.lastChild = null), t
}

function _F(e, t) {
    var n = t.parentNode;
    if (n) {
        var r = e.lastChild;
        n.removeChild(t);
        var r = e.lastChild
    }
    var r = e.lastChild;
    return t.parentNode = e, t.previousSibling = r, t.nextSibling = null, r ? r.nextSibling = t : e.firstChild = t, e.lastChild = t, jm(e.ownerDocument, e, t), t
}

La.prototype = {
    nodeName: "#document", nodeType: bS, doctype: null, documentElement: null, _inc: 1, insertBefore: function (e, t) {
        if (e.nodeType == lr) {
            for (var n = e.firstChild; n;) {
                var r = n.nextSibling;
                this.insertBefore(n, t), n = r
            }
            return e
        }
        return this.documentElement == null && e.nodeType == bn && (this.documentElement = e), xS(this, e, t), e.ownerDocument = this, e
    }, removeChild: function (e) {
        return this.documentElement == e && (this.documentElement = null), kS(this, e)
    }, importNode: function (e, t) {
        return $S(this, e, t)
    }, getElementById: function (e) {
        var t = null;
        return ua(this.documentElement, function (n) {
            if (n.nodeType == bn && n.getAttribute("id") == e) return t = n, !0
        }), t
    }, getElementsByClassName: function (e) {
        var t = wg(e);
        return new jo(this, function (n) {
            var r = [];
            return t.length > 0 && ua(n.documentElement, function (i) {
                if (i !== n && i.nodeType === bn) {
                    var o = i.getAttribute("class");
                    if (o) {
                        var s = e === o;
                        if (!s) {
                            var a = wg(o);
                            s = t.every(vF(a))
                        }
                        s && r.push(i)
                    }
                }
            }), r
        })
    }, createElement: function (e) {
        var t = new Ti;
        t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.localName = e, t.childNodes = new Zn;
        var n = t.attributes = new ju;
        return n._ownerElement = t, t
    }, createDocumentFragment: function () {
        var e = new Bc;
        return e.ownerDocument = this, e.childNodes = new Zn, e
    }, createTextNode: function (e) {
        var t = new Um;
        return t.ownerDocument = this, t.appendData(e), t
    }, createComment: function (e) {
        var t = new Vm;
        return t.ownerDocument = this, t.appendData(e), t
    }, createCDATASection: function (e) {
        var t = new Bm;
        return t.ownerDocument = this, t.appendData(e), t
    }, createProcessingInstruction: function (e, t) {
        var n = new Hm;
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n
    }, createAttribute: function (e) {
        var t = new Uu;
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t
    }, createEntityReference: function (e) {
        var t = new zm;
        return t.ownerDocument = this, t.nodeName = e, t
    }, createElementNS: function (e, t) {
        var n = new Ti, r = t.split(":"), i = n.attributes = new ju;
        return n.childNodes = new Zn, n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, r.length == 2 ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, i._ownerElement = n, n
    }, createAttributeNS: function (e, t) {
        var n = new Uu, r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, r.length == 2 ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n
    }
};
Mt(La, Tt);

function Ti() {
    this._nsMap = {}
}

Ti.prototype = {
    nodeType: bn, hasAttribute: function (e) {
        return this.getAttributeNode(e) != null
    }, getAttribute: function (e) {
        var t = this.getAttributeNode(e);
        return t && t.value || ""
    }, getAttributeNode: function (e) {
        return this.attributes.getNamedItem(e)
    }, setAttribute: function (e, t) {
        var n = this.ownerDocument.createAttribute(e);
        n.value = n.nodeValue = "" + t, this.setAttributeNode(n)
    }, removeAttribute: function (e) {
        var t = this.getAttributeNode(e);
        t && this.removeAttributeNode(t)
    }, appendChild: function (e) {
        return e.nodeType === lr ? this.insertBefore(e, null) : _F(this, e)
    }, setAttributeNode: function (e) {
        return this.attributes.setNamedItem(e)
    }, setAttributeNodeNS: function (e) {
        return this.attributes.setNamedItemNS(e)
    }, removeAttributeNode: function (e) {
        return this.attributes.removeNamedItem(e.nodeName)
    }, removeAttributeNS: function (e, t) {
        var n = this.getAttributeNodeNS(e, t);
        n && this.removeAttributeNode(n)
    }, hasAttributeNS: function (e, t) {
        return this.getAttributeNodeNS(e, t) != null
    }, getAttributeNS: function (e, t) {
        var n = this.getAttributeNodeNS(e, t);
        return n && n.value || ""
    }, setAttributeNS: function (e, t, n) {
        var r = this.ownerDocument.createAttributeNS(e, t);
        r.value = r.nodeValue = "" + n, this.setAttributeNode(r)
    }, getAttributeNodeNS: function (e, t) {
        return this.attributes.getNamedItemNS(e, t)
    }, getElementsByTagName: function (e) {
        return new jo(this, function (t) {
            var n = [];
            return ua(t, function (r) {
                r !== t && r.nodeType == bn && (e === "*" || r.tagName == e) && n.push(r)
            }), n
        })
    }, getElementsByTagNameNS: function (e, t) {
        return new jo(this, function (n) {
            var r = [];
            return ua(n, function (i) {
                i !== n && i.nodeType === bn && (e === "*" || i.namespaceURI === e) && (t === "*" || i.localName == t) && r.push(i)
            }), r
        })
    }
};
La.prototype.getElementsByTagName = Ti.prototype.getElementsByTagName;
La.prototype.getElementsByTagNameNS = Ti.prototype.getElementsByTagNameNS;
Mt(Ti, Tt);

function Uu() {
}

Uu.prototype.nodeType = $o;
Mt(Uu, Tt);

function Pa() {
}

Pa.prototype = {
    data: "", substringData: function (e, t) {
        return this.data.substring(e, e + t)
    }, appendData: function (e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length
    }, insertData: function (e, t) {
        this.replaceData(e, 0, t)
    }, appendChild: function (e) {
        throw new Error(st[EF])
    }, deleteData: function (e, t) {
        this.replaceData(e, t, "")
    }, replaceData: function (e, t, n) {
        var r = this.data.substring(0, e), i = this.data.substring(e + t);
        n = r + n + i, this.nodeValue = this.data = n, this.length = n.length
    }
};
Mt(Pa, Tt);

function Um() {
}

Um.prototype = {
    nodeName: "#text", nodeType: $u, splitText: function (e) {
        var t = this.data, n = t.substring(e);
        t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
        var r = this.ownerDocument.createTextNode(n);
        return this.parentNode && this.parentNode.insertBefore(r, this.nextSibling), r
    }
};
Mt(Um, Pa);

function Vm() {
}

Vm.prototype = {nodeName: "#comment", nodeType: IS};
Mt(Vm, Pa);

function Bm() {
}

Bm.prototype = {nodeName: "#cdata-section", nodeType: _S};
Mt(Bm, Pa);

function Vc() {
}

Vc.prototype.nodeType = OS;
Mt(Vc, Tt);

function LS() {
}

LS.prototype.nodeType = gF;
Mt(LS, Tt);

function PS() {
}

PS.prototype.nodeType = yF;
Mt(PS, Tt);

function zm() {
}

zm.prototype.nodeType = SS;
Mt(zm, Tt);

function Bc() {
}

Bc.prototype.nodeName = "#document-fragment";
Bc.prototype.nodeType = lr;
Mt(Bc, Tt);

function Hm() {
}

Hm.prototype.nodeType = NS;
Mt(Hm, Tt);

function FS() {
}

FS.prototype.serializeToString = function (e, t, n) {
    return MS.call(e, t, n)
};
Tt.prototype.toString = MS;

function MS(e, t) {
    var n = [], r = this.nodeType == 9 && this.documentElement || this, i = r.prefix, o = r.namespaceURI;
    if (o && i == null) {
        var i = r.lookupPrefix(o);
        if (i == null) var s = [{namespace: o, prefix: null}]
    }
    return io(this, n, e, t, s), n.join("")
}

function Ng(e, t, n) {
    var r = e.prefix || "", i = e.namespaceURI;
    if (!i || r === "xml" && i === la.XML || i === la.XMLNS) return !1;
    for (var o = n.length; o--;) {
        var s = n[o];
        if (s.prefix === r) return s.namespace !== i
    }
    return !0
}

function Jf(e, t, n) {
    e.push(" ", t, '="', n.replace(/[<&"]/g, DS), '"')
}

function io(e, t, n, r, i) {
    if (i || (i = []), r) if (e = r(e), e) {
        if (typeof e == "string") {
            t.push(e);
            return
        }
    } else return;
    switch (e.nodeType) {
        case bn:
            var o = e.attributes, s = o.length, m = e.firstChild, a = e.tagName;
            n = la.isHTML(e.namespaceURI) || n;
            var l = a;
            if (!n && !e.prefix && e.namespaceURI) {
                for (var u, c = 0; c < o.length; c++) if (o.item(c).name === "xmlns") {
                    u = o.item(c).value;
                    break
                }
                if (!u) for (var d = i.length - 1; d >= 0; d--) {
                    var f = i[d];
                    if (f.prefix === "" && f.namespace === e.namespaceURI) {
                        u = f.namespace;
                        break
                    }
                }
                if (u !== e.namespaceURI) for (var d = i.length - 1; d >= 0; d--) {
                    var f = i[d];
                    if (f.namespace === e.namespaceURI) {
                        f.prefix && (l = f.prefix + ":" + a);
                        break
                    }
                }
            }
            t.push("<", l);
            for (var p = 0; p < s; p++) {
                var h = o.item(p);
                h.prefix == "xmlns" ? i.push({
                    prefix: h.localName,
                    namespace: h.value
                }) : h.nodeName == "xmlns" && i.push({prefix: "", namespace: h.value})
            }
            for (var p = 0; p < s; p++) {
                var h = o.item(p);
                if (Ng(h, n, i)) {
                    var g = h.prefix || "", _ = h.namespaceURI;
                    Jf(t, g ? "xmlns:" + g : "xmlns", _), i.push({prefix: g, namespace: _})
                }
                io(h, t, n, r, i)
            }
            if (a === l && Ng(e, n, i)) {
                var g = e.prefix || "", _ = e.namespaceURI;
                Jf(t, g ? "xmlns:" + g : "xmlns", _), i.push({prefix: g, namespace: _})
            }
            if (m || n && !/^(?:meta|link|img|br|hr|input)$/i.test(a)) {
                if (t.push(">"), n && /^script$/i.test(a)) for (; m;) m.data ? t.push(m.data) : io(m, t, n, r, i.slice()), m = m.nextSibling; else for (; m;) io(m, t, n, r, i.slice()), m = m.nextSibling;
                t.push("</", l, ">")
            } else t.push("/>");
            return;
        case bS:
        case lr:
            for (var m = e.firstChild; m;) io(m, t, n, r, i.slice()), m = m.nextSibling;
            return;
        case $o:
            return Jf(t, e.name, e.value);
        case $u:
            return t.push(e.data.replace(/[<&]/g, DS).replace(/]]>/g, "]]&gt;"));
        case _S:
            return t.push("<![CDATA[", e.data, "]]>");
        case IS:
            return t.push("<!--", e.data, "-->");
        case OS:
            var y = e.publicId, E = e.systemId;
            if (t.push("<!DOCTYPE ", e.name), y) t.push(" PUBLIC ", y), E && E != "." && t.push(" ", E), t.push(">"); else if (E && E != ".") t.push(" SYSTEM ", E, ">"); else {
                var T = e.internalSubset;
                T && t.push(" [", T, "]"), t.push(">")
            }
            return;
        case NS:
            return t.push("<?", e.target, " ", e.data, "?>");
        case SS:
            return t.push("&", e.nodeName, ";");
        default:
            t.push("??", e.nodeName)
    }
}

function $S(e, t, n) {
    var r;
    switch (t.nodeType) {
        case bn:
            r = t.cloneNode(!1), r.ownerDocument = e;
        case lr:
            break;
        case $o:
            n = !0;
            break
    }
    if (r || (r = t.cloneNode(!1)), r.ownerDocument = e, r.parentNode = null, n) for (var i = t.firstChild; i;) r.appendChild($S(e, i, n)), i = i.nextSibling;
    return r
}

function wp(e, t, n) {
    var r = new t.constructor;
    for (var i in t) {
        var o = t[i];
        typeof o != "object" && o != r[i] && (r[i] = o)
    }
    switch (t.childNodes && (r.childNodes = new Zn), r.ownerDocument = e, r.nodeType) {
        case bn:
            var s = t.attributes, a = r.attributes = new ju, l = s.length;
            a._ownerElement = r;
            for (var u = 0; u < l; u++) r.setAttributeNode(wp(e, s.item(u), !0));
            break;
        case $o:
            n = !0
    }
    if (n) for (var c = t.firstChild; c;) r.appendChild(wp(e, c, n)), c = c.nextSibling;
    return r
}

function jS(e, t, n) {
    e[t] = n
}

try {
    if (Object.defineProperty) {
        let e = function (t) {
            switch (t.nodeType) {
                case bn:
                case lr:
                    var n = [];
                    for (t = t.firstChild; t;) t.nodeType !== 7 && t.nodeType !== 8 && n.push(e(t)), t = t.nextSibling;
                    return n.join("");
                default:
                    return t.nodeValue
            }
        };
        var getTextContent = e;
        Object.defineProperty(jo.prototype, "length", {
            get: function () {
                return $m(this), this.$$length
            }
        }), Object.defineProperty(Tt.prototype, "textContent", {
            get: function () {
                return e(this)
            }, set: function (t) {
                switch (this.nodeType) {
                    case bn:
                    case lr:
                        for (; this.firstChild;) this.removeChild(this.firstChild);
                        (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
                        break;
                    default:
                        this.data = t, this.value = t, this.nodeValue = t
                }
            }
        }), jS = function (t, n, r) {
            t["$$" + n] = r
        }
    }
} catch {
}
dr.DocumentType = Vc;
dr.DOMException = wi;
dr.DOMImplementation = CS;
dr.Element = Ti;
dr.Node = Tt;
dr.NodeList = Zn;
dr.XMLSerializer = FS;
var Fa = {}, US = {};
(function (e) {
    var t = Ci.freeze;
    e.XML_ENTITIES = t({amp: "&", apos: "'", gt: ">", lt: "<", quot: '"'}), e.HTML_ENTITIES = t({
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'",
        Agrave: "\xC0",
        Aacute: "\xC1",
        Acirc: "\xC2",
        Atilde: "\xC3",
        Auml: "\xC4",
        Aring: "\xC5",
        AElig: "\xC6",
        Ccedil: "\xC7",
        Egrave: "\xC8",
        Eacute: "\xC9",
        Ecirc: "\xCA",
        Euml: "\xCB",
        Igrave: "\xCC",
        Iacute: "\xCD",
        Icirc: "\xCE",
        Iuml: "\xCF",
        ETH: "\xD0",
        Ntilde: "\xD1",
        Ograve: "\xD2",
        Oacute: "\xD3",
        Ocirc: "\xD4",
        Otilde: "\xD5",
        Ouml: "\xD6",
        Oslash: "\xD8",
        Ugrave: "\xD9",
        Uacute: "\xDA",
        Ucirc: "\xDB",
        Uuml: "\xDC",
        Yacute: "\xDD",
        THORN: "\xDE",
        szlig: "\xDF",
        agrave: "\xE0",
        aacute: "\xE1",
        acirc: "\xE2",
        atilde: "\xE3",
        auml: "\xE4",
        aring: "\xE5",
        aelig: "\xE6",
        ccedil: "\xE7",
        egrave: "\xE8",
        eacute: "\xE9",
        ecirc: "\xEA",
        euml: "\xEB",
        igrave: "\xEC",
        iacute: "\xED",
        icirc: "\xEE",
        iuml: "\xEF",
        eth: "\xF0",
        ntilde: "\xF1",
        ograve: "\xF2",
        oacute: "\xF3",
        ocirc: "\xF4",
        otilde: "\xF5",
        ouml: "\xF6",
        oslash: "\xF8",
        ugrave: "\xF9",
        uacute: "\xFA",
        ucirc: "\xFB",
        uuml: "\xFC",
        yacute: "\xFD",
        thorn: "\xFE",
        yuml: "\xFF",
        nbsp: "\xA0",
        iexcl: "\xA1",
        cent: "\xA2",
        pound: "\xA3",
        curren: "\xA4",
        yen: "\xA5",
        brvbar: "\xA6",
        sect: "\xA7",
        uml: "\xA8",
        copy: "\xA9",
        ordf: "\xAA",
        laquo: "\xAB",
        not: "\xAC",
        shy: "\xAD\xAD",
        reg: "\xAE",
        macr: "\xAF",
        deg: "\xB0",
        plusmn: "\xB1",
        sup2: "\xB2",
        sup3: "\xB3",
        acute: "\xB4",
        micro: "\xB5",
        para: "\xB6",
        middot: "\xB7",
        cedil: "\xB8",
        sup1: "\xB9",
        ordm: "\xBA",
        raquo: "\xBB",
        frac14: "\xBC",
        frac12: "\xBD",
        frac34: "\xBE",
        iquest: "\xBF",
        times: "\xD7",
        divide: "\xF7",
        forall: "\u2200",
        part: "\u2202",
        exist: "\u2203",
        empty: "\u2205",
        nabla: "\u2207",
        isin: "\u2208",
        notin: "\u2209",
        ni: "\u220B",
        prod: "\u220F",
        sum: "\u2211",
        minus: "\u2212",
        lowast: "\u2217",
        radic: "\u221A",
        prop: "\u221D",
        infin: "\u221E",
        ang: "\u2220",
        and: "\u2227",
        or: "\u2228",
        cap: "\u2229",
        cup: "\u222A",
        int: "\u222B",
        there4: "\u2234",
        sim: "\u223C",
        cong: "\u2245",
        asymp: "\u2248",
        ne: "\u2260",
        equiv: "\u2261",
        le: "\u2264",
        ge: "\u2265",
        sub: "\u2282",
        sup: "\u2283",
        nsub: "\u2284",
        sube: "\u2286",
        supe: "\u2287",
        oplus: "\u2295",
        otimes: "\u2297",
        perp: "\u22A5",
        sdot: "\u22C5",
        Alpha: "\u0391",
        Beta: "\u0392",
        Gamma: "\u0393",
        Delta: "\u0394",
        Epsilon: "\u0395",
        Zeta: "\u0396",
        Eta: "\u0397",
        Theta: "\u0398",
        Iota: "\u0399",
        Kappa: "\u039A",
        Lambda: "\u039B",
        Mu: "\u039C",
        Nu: "\u039D",
        Xi: "\u039E",
        Omicron: "\u039F",
        Pi: "\u03A0",
        Rho: "\u03A1",
        Sigma: "\u03A3",
        Tau: "\u03A4",
        Upsilon: "\u03A5",
        Phi: "\u03A6",
        Chi: "\u03A7",
        Psi: "\u03A8",
        Omega: "\u03A9",
        alpha: "\u03B1",
        beta: "\u03B2",
        gamma: "\u03B3",
        delta: "\u03B4",
        epsilon: "\u03B5",
        zeta: "\u03B6",
        eta: "\u03B7",
        theta: "\u03B8",
        iota: "\u03B9",
        kappa: "\u03BA",
        lambda: "\u03BB",
        mu: "\u03BC",
        nu: "\u03BD",
        xi: "\u03BE",
        omicron: "\u03BF",
        pi: "\u03C0",
        rho: "\u03C1",
        sigmaf: "\u03C2",
        sigma: "\u03C3",
        tau: "\u03C4",
        upsilon: "\u03C5",
        phi: "\u03C6",
        chi: "\u03C7",
        psi: "\u03C8",
        omega: "\u03C9",
        thetasym: "\u03D1",
        upsih: "\u03D2",
        piv: "\u03D6",
        OElig: "\u0152",
        oelig: "\u0153",
        Scaron: "\u0160",
        scaron: "\u0161",
        Yuml: "\u0178",
        fnof: "\u0192",
        circ: "\u02C6",
        tilde: "\u02DC",
        ensp: "\u2002",
        emsp: "\u2003",
        thinsp: "\u2009",
        zwnj: "\u200C",
        zwj: "\u200D",
        lrm: "\u200E",
        rlm: "\u200F",
        ndash: "\u2013",
        mdash: "\u2014",
        lsquo: "\u2018",
        rsquo: "\u2019",
        sbquo: "\u201A",
        ldquo: "\u201C",
        rdquo: "\u201D",
        bdquo: "\u201E",
        dagger: "\u2020",
        Dagger: "\u2021",
        bull: "\u2022",
        hellip: "\u2026",
        permil: "\u2030",
        prime: "\u2032",
        Prime: "\u2033",
        lsaquo: "\u2039",
        rsaquo: "\u203A",
        oline: "\u203E",
        euro: "\u20AC",
        trade: "\u2122",
        larr: "\u2190",
        uarr: "\u2191",
        rarr: "\u2192",
        darr: "\u2193",
        harr: "\u2194",
        crarr: "\u21B5",
        lceil: "\u2308",
        rceil: "\u2309",
        lfloor: "\u230A",
        rfloor: "\u230B",
        loz: "\u25CA",
        spades: "\u2660",
        clubs: "\u2663",
        hearts: "\u2665",
        diams: "\u2666"
    }), e.entityMap = e.HTML_ENTITIES
})(US);
var Gm = {}, ca = Ci.NAMESPACE,
    Tp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Ig = new RegExp("[\\-\\.0-9" + Tp.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
    bg = new RegExp("^" + Tp.source + Ig.source + "*(?::" + Tp.source + Ig.source + "*)?$"), ps = 0, mr = 1, Fi = 2,
    hs = 3, Mi = 4, $i = 5, ms = 6, Tl = 7;

function Uo(e, t) {
    this.message = e, this.locator = t, Error.captureStackTrace && Error.captureStackTrace(this, Uo)
}

Uo.prototype = new Error;
Uo.prototype.name = Uo.name;

function VS() {
}

VS.prototype = {
    parse: function (e, t, n) {
        var r = this.domBuilder;
        r.startDocument(), BS(t, t = {}), SF(e, t, n, r, this.errorHandler), r.endDocument()
    }
};

function SF(e, t, n, r, i) {
    function o(oe) {
        if (oe > 65535) {
            oe -= 65536;
            var Ie = 55296 + (oe >> 10), j = 56320 + (oe & 1023);
            return String.fromCharCode(Ie, j)
        } else return String.fromCharCode(oe)
    }

    function s(oe) {
        var Ie = oe.slice(1, -1);
        return Ie in n ? n[Ie] : Ie.charAt(0) === "#" ? o(parseInt(Ie.substr(1).replace("x", "0x"))) : (i.error("entity not found:" + oe), oe)
    }

    function a(oe) {
        if (oe > g) {
            var Ie = e.substring(g, oe).replace(/&#?\w+;/g, s);
            f && l(g), r.characters(Ie, 0, oe - g), g = oe
        }
    }

    function l(oe, Ie) {
        for (; oe >= c && (Ie = d.exec(e));) u = Ie.index, c = u + Ie[0].length, f.lineNumber++;
        f.columnNumber = oe - u + 1
    }

    for (var u = 0, c = 0, d = /.*(?:\r\n?|\n)|.*$/g, f = r.locator, p = [{currentNSMap: t}], h = {}, g = 0; ;) {
        try {
            var _ = e.indexOf("<", g);
            if (_ < 0) {
                if (!e.substr(g).match(/^\s*$/)) {
                    var m = r.doc, y = m.createTextNode(e.substr(g));
                    m.appendChild(y), r.currentElement = y
                }
                return
            }
            switch (_ > g && a(_), e.charAt(_ + 1)) {
                case"/":
                    var X = e.indexOf(">", _ + 3), E = e.substring(_ + 2, X).replace(/[ \t\n\r]+$/g, ""), T = p.pop();
                    X < 0 ? (E = e.substring(_ + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + E + " is not complete:" + T.tagName), X = _ + 1 + E.length) : E.match(/\s</) && (E = E.replace(/[\s<].*/, ""), i.error("end tag name: " + E + " maybe not complete"), X = _ + 1 + E.length);
                    var R = T.localNSMap, x = T.tagName == E,
                        F = x || T.tagName && T.tagName.toLowerCase() == E.toLowerCase();
                    if (F) {
                        if (r.endElement(T.uri, T.localName, E), R) for (var $ in R) r.endPrefixMapping($);
                        x || i.fatalError("end tag name: " + E + " is not match the current start tagName:" + T.tagName)
                    } else p.push(T);
                    X++;
                    break;
                case"?":
                    f && l(_), X = AF(e, _, r);
                    break;
                case"!":
                    f && l(_), X = OF(e, _, r, i);
                    break;
                default:
                    f && l(_);
                    var b = new zS, P = p[p.length - 1].currentNSMap, X = NF(e, _, b, P, s, i), Se = b.length;
                    if (!b.closed && bF(e, X, b.tagName, h) && (b.closed = !0, n.nbsp || i.warning("unclosed xml attribute")), f && Se) {
                        for (var Xe = Og(f, {}), he = 0; he < Se; he++) {
                            var je = b[he];
                            l(je.offset), je.locator = Og(f, {})
                        }
                        r.locator = Xe, Ag(b, r, P) && p.push(b), r.locator = f
                    } else Ag(b, r, P) && p.push(b);
                    ca.isHTML(b.uri) && !b.closed ? X = IF(e, X, b.tagName, s, r) : X++
            }
        } catch (oe) {
            if (oe instanceof Uo) throw oe;
            i.error("element parse error: " + oe), X = -1
        }
        X > g ? g = X : a(Math.max(_, g) + 1)
    }
}

function Og(e, t) {
    return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t
}

function NF(e, t, n, r, i, o) {
    function s(f, p, h) {
        n.attributeNames.hasOwnProperty(f) && o.fatalError("Attribute " + f + " redefined"), n.addValue(f, p, h)
    }

    for (var a, l, u = ++t, c = ps; ;) {
        var d = e.charAt(u);
        switch (d) {
            case"=":
                if (c === mr) a = e.slice(t, u), c = hs; else if (c === Fi) c = hs; else throw new Error("attribute equal must after attrName");
                break;
            case"'":
            case'"':
                if (c === hs || c === mr) if (c === mr && (o.warning('attribute value must after "="'), a = e.slice(t, u)), t = u + 1, u = e.indexOf(d, t), u > 0) l = e.slice(t, u).replace(/&#?\w+;/g, i), s(a, l, t - 1), c = $i; else throw new Error("attribute value no end '" + d + "' match"); else if (c == Mi) l = e.slice(t, u).replace(/&#?\w+;/g, i), s(a, l, t), o.warning('attribute "' + a + '" missed start quot(' + d + ")!!"), t = u + 1, c = $i; else throw new Error('attribute value must after "="');
                break;
            case"/":
                switch (c) {
                    case ps:
                        n.setTagName(e.slice(t, u));
                    case $i:
                    case ms:
                    case Tl:
                        c = Tl, n.closed = !0;
                    case Mi:
                    case mr:
                    case Fi:
                        break;
                    default:
                        throw new Error("attribute invalid close char('/')")
                }
                break;
            case"":
                return o.error("unexpected end of input"), c == ps && n.setTagName(e.slice(t, u)), u;
            case">":
                switch (c) {
                    case ps:
                        n.setTagName(e.slice(t, u));
                    case $i:
                    case ms:
                    case Tl:
                        break;
                    case Mi:
                    case mr:
                        l = e.slice(t, u), l.slice(-1) === "/" && (n.closed = !0, l = l.slice(0, -1));
                    case Fi:
                        c === Fi && (l = a), c == Mi ? (o.warning('attribute "' + l + '" missed quot(")!'), s(a, l.replace(/&#?\w+;/g, i), t)) : ((!ca.isHTML(r[""]) || !l.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), s(l, l, t));
                        break;
                    case hs:
                        throw new Error("attribute value missed!!")
                }
                return u;
            case"\x80":
                d = " ";
            default:
                if (d <= " ") switch (c) {
                    case ps:
                        n.setTagName(e.slice(t, u)), c = ms;
                        break;
                    case mr:
                        a = e.slice(t, u), c = Fi;
                        break;
                    case Mi:
                        var l = e.slice(t, u).replace(/&#?\w+;/g, i);
                        o.warning('attribute "' + l + '" missed quot(")!!'), s(a, l, t);
                    case $i:
                        c = ms;
                        break
                } else switch (c) {
                    case Fi:
                        n.tagName, (!ca.isHTML(r[""]) || !a.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), s(a, a, t), t = u, c = mr;
                        break;
                    case $i:
                        o.warning('attribute space is required"' + a + '"!!');
                    case ms:
                        c = mr, t = u;
                        break;
                    case hs:
                        c = Mi, t = u;
                        break;
                    case Tl:
                        throw new Error("elements closed character '/' and '>' must be connected to")
                }
        }
        u++
    }
}

function Ag(e, t, n) {
    for (var r = e.tagName, i = null, d = e.length; d--;) {
        var o = e[d], s = o.qName, a = o.value, f = s.indexOf(":");
        if (f > 0) var l = o.prefix = s.slice(0, f), u = s.slice(f + 1),
            c = l === "xmlns" && u; else u = s, l = null, c = s === "xmlns" && "";
        o.localName = u, c !== !1 && (i == null && (i = {}, BS(n, n = {})), n[c] = i[c] = a, o.uri = ca.XMLNS, t.startPrefixMapping(c, a))
    }
    for (var d = e.length; d--;) {
        o = e[d];
        var l = o.prefix;
        l && (l === "xml" && (o.uri = ca.XML), l !== "xmlns" && (o.uri = n[l || ""]))
    }
    var f = r.indexOf(":");
    f > 0 ? (l = e.prefix = r.slice(0, f), u = e.localName = r.slice(f + 1)) : (l = null, u = e.localName = r);
    var p = e.uri = n[l || ""];
    if (t.startElement(p, u, r, e), e.closed) {
        if (t.endElement(p, u, r), i) for (l in i) t.endPrefixMapping(l)
    } else return e.currentNSMap = n, e.localNSMap = i, !0
}

function IF(e, t, n, r, i) {
    if (/^(?:script|textarea)$/i.test(n)) {
        var o = e.indexOf("</" + n + ">", t), s = e.substring(t + 1, o);
        if (/[&<]/.test(s)) return /^script$/i.test(n) ? (i.characters(s, 0, s.length), o) : (s = s.replace(/&#?\w+;/g, r), i.characters(s, 0, s.length), o)
    }
    return t + 1
}

function bF(e, t, n, r) {
    var i = r[n];
    return i == null && (i = e.lastIndexOf("</" + n + ">"), i < t && (i = e.lastIndexOf("</" + n)), r[n] = i), i < t
}

function BS(e, t) {
    for (var n in e) t[n] = e[n]
}

function OF(e, t, n, r) {
    var i = e.charAt(t + 2);
    switch (i) {
        case"-":
            if (e.charAt(t + 3) === "-") {
                var o = e.indexOf("-->", t + 4);
                return o > t ? (n.comment(e, t + 4, o - t - 4), o + 3) : (r.error("Unclosed comment"), -1)
            } else return -1;
        default:
            if (e.substr(t + 3, 6) == "CDATA[") {
                var o = e.indexOf("]]>", t + 9);
                return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3
            }
            var s = CF(e, t), a = s.length;
            if (a > 1 && /!doctype/i.test(s[0][0])) {
                var l = s[1][0], u = !1, c = !1;
                a > 3 && (/^public$/i.test(s[2][0]) ? (u = s[3][0], c = a > 4 && s[4][0]) : /^system$/i.test(s[2][0]) && (c = s[3][0]));
                var d = s[a - 1];
                return n.startDTD(l, u, c), n.endDTD(), d.index + d[0].length
            }
    }
    return -1
}

function AF(e, t, n) {
    var r = e.indexOf("?>", t);
    if (r) {
        var i = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        return i ? (i[0].length, n.processingInstruction(i[1], i[2]), r + 2) : -1
    }
    return -1
}

function zS() {
    this.attributeNames = {}
}

zS.prototype = {
    setTagName: function (e) {
        if (!bg.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e
    }, addValue: function (e, t, n) {
        if (!bg.test(e)) throw new Error("invalid attribute:" + e);
        this.attributeNames[e] = this.length, this[this.length++] = {qName: e, value: t, offset: n}
    }, length: 0, getLocalName: function (e) {
        return this[e].localName
    }, getLocator: function (e) {
        return this[e].locator
    }, getQName: function (e) {
        return this[e].qName
    }, getURI: function (e) {
        return this[e].uri
    }, getValue: function (e) {
        return this[e].value
    }
};

function CF(e, t) {
    var n, r = [], i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (i.lastIndex = t, i.exec(e); n = i.exec(e);) if (r.push(n), n[1]) return r
}

Gm.XMLReader = VS;
Gm.ParseError = Uo;
var DF = Ci, qm = dr, Cg = US, HS = Gm, RF = qm.DOMImplementation, Dg = DF.NAMESPACE, kF = HS.ParseError,
    xF = HS.XMLReader;

function GS(e) {
    this.options = e || {locator: {}}
}

GS.prototype.parseFromString = function (e, t) {
    var n = this.options, r = new xF, i = n.domBuilder || new Ma, o = n.errorHandler, s = n.locator, a = n.xmlns || {},
        l = /\/x?html?$/.test(t), u = l ? Cg.HTML_ENTITIES : Cg.XML_ENTITIES;
    return s && i.setDocumentLocator(s), r.errorHandler = LF(o, i, s), r.domBuilder = n.domBuilder || i, l && (a[""] = Dg.HTML), a.xml = a.xml || Dg.XML, e && typeof e == "string" ? r.parse(e, a, u) : r.errorHandler.error("invalid doc source"), i.doc
};

function LF(e, t, n) {
    if (!e) {
        if (t instanceof Ma) return t;
        e = t
    }
    var r = {}, i = e instanceof Function;
    n = n || {};

    function o(s) {
        var a = e[s];
        !a && i && (a = e.length == 2 ? function (l) {
            e(s, l)
        } : e), r[s] = a && function (l) {
            a("[xmldom " + s + "]	" + l + _p(n))
        } || function () {
        }
    }

    return o("warning"), o("error"), o("fatalError"), r
}

function Ma() {
    this.cdata = !1
}

function ji(e, t) {
    t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber
}

Ma.prototype = {
    startDocument: function () {
        this.doc = new RF().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
    }, startElement: function (e, t, n, r) {
        var i = this.doc, o = i.createElementNS(e, n || t), s = r.length;
        _l(this, o), this.currentElement = o, this.locator && ji(this.locator, o);
        for (var a = 0; a < s; a++) {
            var e = r.getURI(a), l = r.getValue(a), n = r.getQName(a), u = i.createAttributeNS(e, n);
            this.locator && ji(r.getLocator(a), u), u.value = u.nodeValue = l, o.setAttributeNode(u)
        }
    }, endElement: function (e, t, n) {
        var r = this.currentElement;
        r.tagName, this.currentElement = r.parentNode
    }, startPrefixMapping: function (e, t) {
    }, endPrefixMapping: function (e) {
    }, processingInstruction: function (e, t) {
        var n = this.doc.createProcessingInstruction(e, t);
        this.locator && ji(this.locator, n), _l(this, n)
    }, ignorableWhitespace: function (e, t, n) {
    }, characters: function (e, t, n) {
        if (e = Rg.apply(this, arguments), e) {
            if (this.cdata) var r = this.doc.createCDATASection(e); else var r = this.doc.createTextNode(e);
            this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), this.locator && ji(this.locator, r)
        }
    }, skippedEntity: function (e) {
    }, endDocument: function () {
        this.doc.normalize()
    }, setDocumentLocator: function (e) {
        (this.locator = e) && (e.lineNumber = 0)
    }, comment: function (e, t, n) {
        e = Rg.apply(this, arguments);
        var r = this.doc.createComment(e);
        this.locator && ji(this.locator, r), _l(this, r)
    }, startCDATA: function () {
        this.cdata = !0
    }, endCDATA: function () {
        this.cdata = !1
    }, startDTD: function (e, t, n) {
        var r = this.doc.implementation;
        if (r && r.createDocumentType) {
            var i = r.createDocumentType(e, t, n);
            this.locator && ji(this.locator, i), _l(this, i), this.doc.doctype = i
        }
    }, warning: function (e) {
        console.warn("[xmldom warning]	" + e, _p(this.locator))
    }, error: function (e) {
        console.error("[xmldom error]	" + e, _p(this.locator))
    }, fatalError: function (e) {
        throw new kF(e, this.locator)
    }
};

function _p(e) {
    if (e) return `
@` + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
}

function Rg(e, t, n) {
    return typeof e == "string" ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e
}

"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
    Ma.prototype[e] = function () {
        return null
    }
});

function _l(e, t) {
    e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
}

Fa.__DOMHandler = Ma;
Fa.DOMParser = GS;
Fa.DOMImplementation = qm.DOMImplementation;
Fa.XMLSerializer = qm.XMLSerializer;
var qS = dr;
Uc.DOMImplementation = qS.DOMImplementation;
Uc.XMLSerializer = qS.XMLSerializer;
Uc.DOMParser = Fa.DOMParser;
var zc = {};
Object.defineProperty(zc, "__esModule", {value: !0});
zc.parseJson = void 0;

function PF(e) {
    try {
        var t = JSON.parse(e);
        return t
    } catch {
        return null
    }
}

zc.parseJson = PF;
var Hc = {};
Object.defineProperty(Hc, "__esModule", {value: !0});
Hc.bufferFrom = void 0;

function FF(e) {
    var t = encodeURIComponent(e), n = t.replace(/%([0-9A-F]{2})/g, function (i, o) {
        return String.fromCharCode("0x" + o)
    }), r = new Uint8Array(n.length);
    return Array.prototype.forEach.call(n, function (i, o) {
        r[o] = i.charCodeAt(0)
    }), r
}

Hc.bufferFrom = FF;
var Gc = {}, $a = {};
Object.defineProperty($a, "__esModule", {value: !0});
$a.EventPolyfill = void 0;
var MF = function () {
    function e(t, n) {
        this.AT_TARGET = 0, this.BUBBLING_PHASE = 0, this.CAPTURING_PHASE = 0, this.NONE = 0, this.type = "", this.srcElement = null, this.currentTarget = null, this.eventPhase = 0, this.isTrusted = !0, this.composed = !1, this.cancelable = !0, this.defaultPrevented = !1, this.bubbles = !0, this.lengthComputable = !0, this.loaded = 0, this.total = 0, this.cancelBubble = !1, this.returnValue = !0, this.type = t, this.target = (n == null ? void 0 : n.target) || null, this.currentTarget = (n == null ? void 0 : n.currentTarget) || null, this.timeStamp = Date.now()
    }

    return e.prototype.composedPath = function () {
        return []
    }, e.prototype.initEvent = function (t, n, r) {
        this.type = t, this.bubbles = !!n, this.cancelable = !!r
    }, e.prototype.preventDefault = function () {
        this.defaultPrevented = !0
    }, e.prototype.stopPropagation = function () {
    }, e.prototype.stopImmediatePropagation = function () {
    }, e
}();
$a.EventPolyfill = MF;
var qc = {}, $F = V && V.__extends || function () {
    var e = function (t, n) {
        return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
            r.__proto__ = i
        } || function (r, i) {
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }, e(t, n)
    };
    return function (t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }

        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
Object.defineProperty(qc, "__esModule", {value: !0});
qc.ProgressEventPolyfill = void 0;
var jF = $a, UF = function (e) {
    $F(t, e);

    function t(n, r) {
        var i = e.call(this, n) || this;
        return i.lengthComputable = (r == null ? void 0 : r.lengthComputable) || !1, i.composed = (r == null ? void 0 : r.composed) || !1, i.loaded = (r == null ? void 0 : r.loaded) || 0, i.total = (r == null ? void 0 : r.total) || 0, i
    }

    return t
}(jF.EventPolyfill);
qc.ProgressEventPolyfill = UF;
Object.defineProperty(Gc, "__esModule", {value: !0});
Gc.createEvent = void 0;
var VF = $a, BF = qc, zF = typeof ProgressEvent != "undefined";

function HF(e, t, n) {
    var r = ["error", "progress", "loadstart", "loadend", "load", "timeout", "abort"],
        i = zF ? ProgressEvent : BF.ProgressEventPolyfill, o = r.includes(t) ? new i(t, {
            lengthComputable: !0,
            loaded: (n == null ? void 0 : n.loaded) || 0,
            total: (n == null ? void 0 : n.total) || 0
        }) : new VF.EventPolyfill(t, {target: e, currentTarget: e});
    return o
}

Gc.createEvent = HF;
var kg = V && V.__awaiter || function (e, t, n, r) {
    function i(o) {
        return o instanceof n ? o : new n(function (s) {
            s(o)
        })
    }

    return new (n || (n = Promise))(function (o, s) {
        function a(c) {
            try {
                u(r.next(c))
            } catch (d) {
                s(d)
            }
        }

        function l(c) {
            try {
                u(r.throw(c))
            } catch (d) {
                s(d)
            }
        }

        function u(c) {
            c.done ? o(c.value) : i(c.value).then(a, l)
        }

        u((r = r.apply(e, t || [])).next())
    })
}, xg = V && V.__generator || function (e, t) {
    var n = {
        label: 0, sent: function () {
            if (o[0] & 1) throw o[1];
            return o[1]
        }, trys: [], ops: []
    }, r, i, o, s;
    return s = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, typeof Symbol == "function" && (s[Symbol.iterator] = function () {
        return this
    }), s;

    function a(u) {
        return function (c) {
            return l([u, c])
        }
    }

    function l(u) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n;) try {
            if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
            switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return n.label++, {value: u[1], done: !1};
                case 5:
                    n.label++, i = u[1], u = [0];
                    continue;
                case 7:
                    u = n.ops.pop(), n.trys.pop();
                    continue;
                default:
                    if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        n.label = u[1];
                        break
                    }
                    if (u[0] === 6 && n.label < o[1]) {
                        n.label = o[1], o = u;
                        break
                    }
                    if (o && n.label < o[2]) {
                        n.label = o[2], n.ops.push(u);
                        break
                    }
                    o[2] && n.ops.pop(), n.trys.pop();
                    continue
            }
            u = t.call(e, n)
        } catch (c) {
            u = [6, c], i = 0
        } finally {
            r = o = 0
        }
        if (u[0] & 5) throw u[1];
        return {value: u[0] ? u[1] : void 0, done: !0}
    }
}, Lg = V && V.__values || function (e) {
    var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
    if (n) return n.call(e);
    if (e && typeof e.length == "number") return {
        next: function () {
            return e && r >= e.length && (e = void 0), {value: e && e[r++], done: !e}
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}, Sl = V && V.__read || function (e, t) {
    var n = typeof Symbol == "function" && e[Symbol.iterator];
    if (!n) return e;
    var r = n.call(e), i, o = [], s;
    try {
        for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) o.push(i.value)
    } catch (a) {
        s = {error: a}
    } finally {
        try {
            i && !i.done && (n = r.return) && n.call(r)
        } finally {
            if (s) throw s.error
        }
    }
    return o
};
Object.defineProperty(jc, "__esModule", {value: !0});
jc.createXMLHttpRequestOverride = void 0;
var GF = Ii, vr = dn, qF = Uc, QF = zc, WF = ka, Pg = Hc, Fg = Gc, YF = Oi, XF = Nn, JF = Qo, KF = function (e) {
    var t, n = e.XMLHttpRequest, r = e.emitter, i = e.log;
    return t = function () {
        function o() {
            this._events = [], this.log = i, this.UNSENT = 0, this.OPENED = 1, this.HEADERS_RECEIVED = 2, this.LOADING = 3, this.DONE = 4, this.onreadystatechange = null, this.onabort = null, this.onerror = null, this.onload = null, this.onloadend = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.url = "", this.method = "GET", this.readyState = this.UNSENT, this.withCredentials = !1, this.status = 200, this.statusText = "OK", this.response = "", this.responseType = "text", this.responseText = "", this.responseXML = null, this.responseURL = "", this.upload = {}, this.timeout = 0, this._requestHeaders = new vr.Headers, this._responseHeaders = new vr.Headers
        }

        return o.prototype.setReadyState = function (s) {
            s !== this.readyState && (this.log("readyState change %d -> %d", this.readyState, s), this.readyState = s, s !== this.UNSENT && (this.log("triggering readystate change..."), this.trigger("readystatechange")))
        }, o.prototype.trigger = function (s, a) {
            var l, u;
            this.log('trigger "%s" (%d)', s, this.readyState), this.log('resolve listener for event "%s"', s);
            var c = this["on" + s];
            c == null || c.call(this, Fg.createEvent(this, s, a));
            try {
                for (var d = Lg(this._events), f = d.next(); !f.done; f = d.next()) {
                    var p = f.value;
                    p.name === s && (i('calling mock event listener "%s" (%d)', s, this.readyState), p.listener.call(this, Fg.createEvent(this, s, a)))
                }
            } catch (h) {
                l = {error: h}
            } finally {
                try {
                    f && !f.done && (u = d.return) && u.call(d)
                } finally {
                    if (l) throw l.error
                }
            }
            return this
        }, o.prototype.reset = function () {
            this.log("reset"), this.setReadyState(this.UNSENT), this.status = 200, this.statusText = "OK", this.response = null, this.responseText = null, this.responseXML = null, this._requestHeaders = new vr.Headers, this._responseHeaders = new vr.Headers
        }, o.prototype.open = function (s, a, l, u, c) {
            return l === void 0 && (l = !0), kg(this, void 0, void 0, function () {
                return xg(this, function (d) {
                    return this.log = this.log.extend("request " + s + " " + a), this.log("open", {
                        method: s,
                        url: a,
                        async: l,
                        user: u,
                        password: c
                    }), this.reset(), this.setReadyState(this.OPENED), typeof a == "undefined" ? (this.url = s, this.method = "GET") : (this.url = a, this.method = s, this.async = l, this.user = u, this.password = c), [2]
                })
            })
        }, o.prototype.send = function (s) {
            var a = this;
            this.log("send %s %s", this.method, this.url);
            var l;
            typeof s == "string" ? l = XF.encodeBuffer(s) : l = s || new ArrayBuffer(0);
            var u;
            try {
                u = new URL(this.url)
            } catch {
                u = new URL(this.url, window.location.href)
            }
            this.log("request headers", this._requestHeaders);
            var c = new YF.IsomorphicRequest(u, {
                body: l,
                method: this.method,
                headers: this._requestHeaders,
                credentials: this.withCredentials ? "include" : "omit"
            }), d = new JF.InteractiveIsomorphicRequest(c);
            this.log('emitting the "request" event for %d listener(s)...', r.listenerCount("request")), r.emit("request", d), this.log("awaiting mocked response..."), Promise.resolve(GF.until(function () {
                return kg(a, void 0, void 0, function () {
                    var f, p;
                    return xg(this, function (h) {
                        switch (h.label) {
                            case 0:
                                return [4, r.untilIdle("request", function (g) {
                                    var _ = Sl(g.args, 1), m = _[0];
                                    return m.id === d.id
                                })];
                            case 1:
                                return h.sent(), this.log("all request listeners have been resolved!"), [4, d.respondWith.invoked()];
                            case 2:
                                return f = Sl.apply(void 0, [h.sent(), 1]), p = f[0], this.log("event.respondWith called with:", p), [2, p]
                        }
                    })
                })
            })).then(function (f) {
                var p, h, g = Sl(f, 2), _ = g[0], m = g[1];
                if (_) {
                    a.log("middleware function threw an exception!", _), a.trigger("error"), a.abort();
                    return
                }
                if (m) {
                    if (a.log("received mocked response", m), a.trigger("loadstart"), a.status = (p = m.status) !== null && p !== void 0 ? p : 200, a.statusText = m.statusText || "OK", a._responseHeaders = m.headers ? vr.objectToHeaders(m.headers) : new vr.Headers, a.log("set response status", a.status, a.statusText), a.log("set response headers", a._responseHeaders), a.setReadyState(a.HEADERS_RECEIVED), a.log("response type", a.responseType), a.response = a.getResponseBody(m.body), a.responseURL = a.url, a.responseText = m.body || "", a.responseXML = a.getResponseXML(), a.log("set response body", a.response), m.body && a.response) {
                        a.setReadyState(a.LOADING);
                        var y = Pg.bufferFrom(m.body);
                        a.trigger("progress", {loaded: y.length, total: y.length})
                    }
                    a.setReadyState(a.DONE), a.trigger("load"), a.trigger("loadend"), r.emit("response", c, WF.toIsoResponse(m))
                } else {
                    a.log("no mocked response received!");
                    var E = new n;
                    a.log("opening an original request %s %s", a.method, a.url), E.open(a.method, a.url, (h = a.async) !== null && h !== void 0 ? h : !0, a.user, a.password), E.addEventListener("load", function () {
                        a.log('original "onload"'), a.status = E.status, a.statusText = E.statusText, a.responseURL = E.responseURL, a.responseType = E.responseType, a.response = E.response, a.responseText = E.responseText, a.responseXML = E.responseXML, a.log("set mock request readyState to DONE"), a.setReadyState(a.DONE), a.log("received original response", a.status, a.statusText), a.log("original response body:", a.response);
                        var T = E.getAllResponseHeaders();
                        a.log(`original response headers:
`, T), a._responseHeaders = vr.stringToHeaders(T), a.log("original response headers (normalized)", a._responseHeaders), a.log("original response finished"), r.emit("response", c, {
                            status: E.status,
                            statusText: E.statusText,
                            headers: a._responseHeaders,
                            body: E.response
                        })
                    }), a.propagateCallbacks(E), a.propagateListeners(E), a.propagateHeaders(E, a._requestHeaders), a.async && (E.timeout = a.timeout), a.log("send", s), E.send(s)
                }
            })
        }, o.prototype.abort = function () {
            this.log("abort"), this.readyState > this.UNSENT && this.readyState < this.DONE && (this.setReadyState(this.UNSENT), this.trigger("abort"))
        }, o.prototype.dispatchEvent = function () {
            return !1
        }, o.prototype.setRequestHeader = function (s, a) {
            this.log('set request header "%s" to "%s"', s, a), this._requestHeaders.append(s, a)
        }, o.prototype.getResponseHeader = function (s) {
            if (this.log('get response header "%s"', s), this.readyState < this.HEADERS_RECEIVED) return this.log("cannot return a header: headers not received (state: %s)", this.readyState), null;
            var a = this._responseHeaders.get(s);
            return this.log('resolved response header "%s" to "%s"', s, a, this._responseHeaders), a
        }, o.prototype.getAllResponseHeaders = function () {
            return this.log("get all response headers"), this.readyState < this.HEADERS_RECEIVED ? (this.log("cannot return headers: headers not received (state: %s)", this.readyState), "") : vr.headersToString(this._responseHeaders)
        }, o.prototype.addEventListener = function (s, a) {
            this.log("addEventListener", s, a), this._events.push({name: s, listener: a})
        }, o.prototype.removeEventListener = function (s, a) {
            this.log("removeEventListener", s, a), this._events = this._events.filter(function (l) {
                return l.name !== s && l.listener !== a
            })
        }, o.prototype.overrideMimeType = function () {
        }, o.prototype.getResponseBody = function (s) {
            var a = s != null ? s : "";
            switch (this.log("coerced response body to", a), this.responseType) {
                case"json":
                    return this.log("resolving response body as JSON"), QF.parseJson(a);
                case"blob": {
                    var l = this.getResponseHeader("content-type") || "text/plain";
                    return this.log("resolving response body as Blob", {type: l}), new Blob([a], {type: l})
                }
                case"arraybuffer": {
                    this.log("resolving response body as ArrayBuffer");
                    var u = Pg.bufferFrom(a);
                    return u
                }
                default:
                    return a
            }
        }, o.prototype.getResponseXML = function () {
            var s = this.getResponseHeader("Content-Type");
            return s === "application/xml" || s === "text/xml" ? new qF.DOMParser().parseFromString(this.responseText, s) : null
        }, o.prototype.propagateCallbacks = function (s) {
            var a, l;
            this.log("propagating request callbacks to the original request");
            var u = ["abort", "onerror", "ontimeout", "onload", "onloadstart", "onloadend", "onprogress", "onreadystatechange"];
            try {
                for (var c = Lg(u), d = c.next(); !d.done; d = c.next()) {
                    var f = d.value, p = this[f];
                    p && (s[f] = this[f], this.log('propagated the "%s" callback', f, p))
                }
            } catch (h) {
                a = {error: h}
            } finally {
                try {
                    d && !d.done && (l = c.return) && l.call(c)
                } finally {
                    if (a) throw a.error
                }
            }
            s.onabort = this.abort, s.onerror = this.onerror, s.ontimeout = this.ontimeout, s.onload = this.onload, s.onloadstart = this.onloadstart, s.onloadend = this.onloadend, s.onprogress = this.onprogress, s.onreadystatechange = this.onreadystatechange
        }, o.prototype.propagateListeners = function (s) {
            this.log("propagating request listeners (%d) to the original request", this._events.length, this._events), this._events.forEach(function (a) {
                var l = a.name, u = a.listener;
                s.addEventListener(l, u)
            })
        }, o.prototype.propagateHeaders = function (s, a) {
            var l = this;
            this.log("propagating request headers to the original request", a), Object.entries(a.raw()).forEach(function (u) {
                var c = Sl(u, 2), d = c[0], f = c[1];
                l.log('setting "%s" (%s) header on the original request', d, f), s.setRequestHeader(d, f)
            })
        }, o
    }(), t.UNSENT = 0, t.OPENED = 1, t.HEADERS_RECEIVED = 2, t.LOADING = 3, t.DONE = 4, t
};
jc.createXMLHttpRequestOverride = KF;
var ZF = V && V.__extends || function () {
    var e = function (t, n) {
        return e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (r, i) {
            r.__proto__ = i
        } || function (r, i) {
            for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
        }, e(t, n)
    };
    return function (t, n) {
        if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        e(t, n);

        function r() {
            this.constructor = t
        }

        t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
}();
Object.defineProperty($c, "__esModule", {value: !0});
$c.XMLHttpRequestInterceptor = void 0;
var eM = bi, Kf = qo, tM = wa, nM = jc, rM = function (e) {
    ZF(t, e);

    function t() {
        return e.call(this, t.symbol) || this
    }

    return t.prototype.checkEnvironment = function () {
        return typeof window != "undefined" && typeof window.XMLHttpRequest != "undefined"
    }, t.prototype.setup = function () {
        var n = this.log.extend("setup");
        n('patching "XMLHttpRequest" module...');
        var r = window.XMLHttpRequest;
        eM.invariant(!r[Kf.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.'), window.XMLHttpRequest = nM.createXMLHttpRequestOverride({
            XMLHttpRequest: r,
            emitter: this.emitter,
            log: this.log
        }), n('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name), Object.defineProperty(window.XMLHttpRequest, Kf.IS_PATCHED_MODULE, {
            enumerable: !0,
            configurable: !0,
            value: !0
        }), this.subscriptions.push(function () {
            Object.defineProperty(window.XMLHttpRequest, Kf.IS_PATCHED_MODULE, {value: void 0}), window.XMLHttpRequest = r, n('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name)
        })
    }, t.symbol = Symbol("xhr"), t
}(tM.Interceptor);
$c.XMLHttpRequestInterceptor = rM;
var iM = Object.create, ja = Object.defineProperty, oM = Object.defineProperties, sM = Object.getOwnPropertyDescriptor,
    aM = Object.getOwnPropertyDescriptors, lM = Object.getOwnPropertyNames, Vu = Object.getOwnPropertySymbols,
    uM = Object.getPrototypeOf, Qm = Object.prototype.hasOwnProperty, QS = Object.prototype.propertyIsEnumerable,
    Mg = (e, t, n) => t in e ? ja(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
    We = (e, t) => {
        for (var n in t || (t = {})) Qm.call(t, n) && Mg(e, n, t[n]);
        if (Vu) for (var n of Vu(t)) QS.call(t, n) && Mg(e, n, t[n]);
        return e
    }, _t = (e, t) => oM(e, aM(t)), cM = (e, t) => {
        var n = {};
        for (var r in e) Qm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Vu) for (var r of Vu(e)) t.indexOf(r) < 0 && QS.call(e, r) && (n[r] = e[r]);
        return n
    }, WS = (e, t) => {
        for (var n in t) ja(e, n, {get: t[n], enumerable: !0})
    }, YS = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of lM(t)) !Qm.call(e, i) && i !== n && ja(e, i, {
            get: () => t[i],
            enumerable: !(r = sM(t, i)) || r.enumerable
        });
        return e
    }, Ua = (e, t, n) => (n = e != null ? iM(uM(e)) : {}, YS(t || !e || !e.__esModule ? ja(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e)), fM = e => YS(ja({}, "__esModule", {value: !0}), e), XS = {};
WS(XS, {
    GraphQLHandler: () => Yc,
    MockedRequest: () => Va,
    RESTMethods: () => T1,
    RequestHandler: () => Zm,
    RestHandler: () => Wc,
    cleanUrl: () => Jm,
    compose: () => g1,
    context: () => JS,
    createResponseComposition: () => Sp,
    defaultContext: () => Qc,
    defaultResponse: () => E1,
    graphql: () => Z2,
    graphqlContext: () => N1,
    handleRequest: () => ev,
    matchRequestUrl: () => Km,
    response: () => w1,
    rest: () => X2,
    restContext: () => _1,
    setupWorker: () => Y2
});
var Yl = fM(XS), JS = {};
WS(JS, {
    body: () => e1,
    cookie: () => Wm,
    data: () => t1,
    delay: () => r1,
    errors: () => i1,
    extensions: () => n1,
    fetch: () => o1,
    json: () => Zo,
    set: () => ZS,
    status: () => KS,
    text: () => s1,
    xml: () => a1
});
var dM = Ua($D), KS = (e, t) => n => (n.status = e, n.statusText = t || dM.default[String(e)], n), pM = dn;

function ZS(...e) {
    return t => {
        const [n, r] = e;
        return typeof n == "string" ? t.headers.append(n, r) : (0, pM.objectToHeaders)(n).forEach((o, s) => {
            t.headers.append(s, o)
        }), t
    }
}

var hM = Ua(ya), Wm = (e, t, n) => r => {
    const i = hM.serialize(e, t, n);
    return r.headers.append("Set-Cookie", i), typeof document != "undefined" && (document.cookie = i), r
}, e1 = e => t => (t.body = e, t);

function Mr(e) {
    try {
        return JSON.parse(e)
    } catch {
        return
    }
}

function $g(e) {
    return e != null && typeof e == "object" && !Array.isArray(e)
}

function Ko(e, t) {
    return Object.entries(t).reduce((n, [r, i]) => {
        const o = n[r];
        return Array.isArray(o) && Array.isArray(i) ? (n[r] = o.concat(i), n) : $g(o) && $g(i) ? (n[r] = Ko(o, i), n) : (n[r] = i, n)
    }, Object.assign({}, e))
}

var Zo = e => t => (t.headers.set("Content-Type", "application/json"), t.body = JSON.stringify(e), t), t1 = e => t => {
        const n = Mr(t.body) || {}, r = Ko(n, {data: e});
        return Zo(r)(t)
    }, n1 = e => t => {
        const n = Mr(t.body) || {}, r = Ko(n, {extensions: e});
        return Zo(r)(t)
    }, mM = ta.exports, Zf = 2147483647, jg = 100, vM = 400, yM = 5,
    Ug = () => (0, mM.isNodeProcess)() ? yM : Math.floor(Math.random() * (vM - jg) + jg), r1 = e => t => {
        let n;
        if (typeof e == "string") switch (e) {
            case"infinite": {
                n = Zf;
                break
            }
            case"real": {
                n = Ug();
                break
            }
            default:
                throw new Error(`Failed to delay a response: unknown delay mode "${e}". Please make sure you provide one of the supported modes ("real", "infinite") or a number to "ctx.delay".`)
        } else if (typeof e == "undefined") n = Ug(); else {
            if (e > Zf) throw new Error(`Failed to delay a response: provided delay duration (${e}) exceeds the maximum allowed duration for "setTimeout" (${Zf}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
            n = e
        }
        return t.delay = n, t
    }, i1 = e => t => {
        if (e == null) return t;
        const n = Mr(t.body) || {}, r = Ko(n, {errors: e});
        return Zo(r)(t)
    }, gM = ta.exports, EM = dn, Vg = (0, gM.isNodeProcess)() ? ep.exports : window.fetch, Bg = e => {
        const t = new EM.Headers(e.headers);
        return t.set("x-msw-bypass", "true"), _t(We({}, e), {headers: t.all()})
    }, wM = e => {
        const {body: t, method: n} = e, r = _t(We({}, e), {body: void 0});
        return ["GET", "HEAD"].includes(n) || (typeof t == "object" || typeof t == "number" || typeof t == "boolean" ? r.body = JSON.stringify(t) : r.body = t), r
    }, o1 = (e, t = {}) => {
        if (typeof e == "string") return Vg(e, Bg(t));
        const n = wM(e), r = Bg(n);
        return Vg(e.url.href, r)
    }, s1 = e => t => (t.headers.set("Content-Type", "text/plain"), t.body = e, t),
    a1 = e => t => (t.headers.set("Content-Type", "text/xml"), t.body = e, t), TM = ta.exports, zg = $h, _M = Ii,
    SM = Ii, ed = (e, t, n) => [e.active, e.installing, e.waiting].filter(Boolean).find(s => n(s.scriptURL, t)) || null;

function NM(e) {
    return new URL(e, location.origin).href
}

var IM = bi, bM = "[MSW]";

function Ym(e, ...t) {
    const n = (0, IM.format)(e, ...t);
    return `${bM} ${n}`
}

function OM(e, ...t) {
    console.warn(Ym(e, ...t))
}

function AM(e, ...t) {
    console.error(Ym(e, ...t))
}

var Te = {formatMessage: Ym, warn: OM, error: AM}, CM = async (e, t = {}, n) => {
    const r = NM(e), i = await navigator.serviceWorker.getRegistrations().then(l => l.filter(u => ed(u, r, n)));
    !navigator.serviceWorker.controller && i.length > 0 && location.reload();
    const [o] = i;
    if (o) return o.update().then(() => [ed(o, r, n), o]);
    const [s, a] = await (0, SM.until)(async () => {
        const l = await navigator.serviceWorker.register(e, t);
        return [ed(l, r, n), l]
    });
    if (s) {
        if (s.message.includes("(404)")) {
            const u = new URL((t == null ? void 0 : t.scope) || "/", location.href);
            throw new Error(Te.formatMessage(`Failed to register a Service Worker for scope ('${u.href}') with script ('${r}'): Service Worker script does not exist at the given path.

Did you forget to run "npx msw init <PUBLIC_DIR>"?

Learn more about creating the Service Worker script: https://mswjs.io/docs/cli/init`))
        }
        throw new Error(Te.formatMessage(`Failed to register the Service Worker:

%s`, s.message))
    }
    return a
};

function l1(e = {}) {
    if (e.quiet) return;
    const t = e.message || "Mocking enabled.";
    console.groupCollapsed(`%c${Te.formatMessage(t)}`, "color:orangered;font-weight:bold;"), console.log("%cDocumentation: %chttps://mswjs.io/docs", "font-weight:bold", "font-weight:normal"), console.log("Found an issue? https://github.com/mswjs/msw/issues"), e.workerUrl && console.log("Worker script URL:", e.workerUrl), e.workerScope && console.log("Worker scope:", e.workerScope), console.groupEnd()
}

async function DM(e, t) {
    var n, r;
    if (e.workerChannel.send("MOCK_ACTIVATE"), await e.events.once("MOCKING_ENABLED"), e.isMockingEnabled) {
        Te.warn('Found a redundant "worker.start()" call. Note that starting the worker while mocking is already enabled will have no effect. Consider removing this "worker.start()" call.');
        return
    }
    e.isMockingEnabled = !0, l1({
        quiet: t.quiet,
        workerScope: (n = e.registration) == null ? void 0 : n.scope,
        workerUrl: (r = e.worker) == null ? void 0 : r.scriptURL
    })
}

var RM = class {
    constructor(e) {
        this.port = e
    }

    postMessage(e, ...t) {
        const [n, r] = t;
        this.port.postMessage({type: e, data: n}, {transfer: r})
    }
}, u1 = class extends Error {
    constructor(e) {
        super(e), this.name = "NetworkError"
    }
}, kM = Ea, xM = dn, LM = Ua(ya), Hg = Qh, PM = Ea, FM = Nn, MM = dn, $M = Ua(ya);

function Gg() {
    return $M.parse(document.cookie)
}

function jM(e) {
    if (typeof document == "undefined" || typeof location == "undefined") return {};
    switch (e.credentials) {
        case"same-origin":
            return location.origin === e.url.origin ? Gg() : {};
        case"include":
            return Gg();
        default:
            return {}
    }
}

var UM = dn;

function VM(e) {
    var t, n;
    const r = (0, UM.stringToHeaders)(e), i = r.get("content-type") || "text/plain", o = r.get("content-disposition");
    if (!o) throw new Error('"Content-Disposition" header is required.');
    const s = o.split(";").reduce((u, c) => {
        const [d, ...f] = c.trim().split("=");
        return u[d] = f.join("="), u
    }, {}), a = (t = s.name) == null ? void 0 : t.slice(1, -1), l = (n = s.filename) == null ? void 0 : n.slice(1, -1);
    return {name: a, filename: l, contentType: i}
}

function BM(e, t) {
    const n = t == null ? void 0 : t.get("content-type");
    if (!n) return;
    const [, ...r] = n.split(/; */),
        i = r.filter(l => l.startsWith("boundary=")).map(l => l.replace(/^boundary=/, ""))[0];
    if (!i) return;
    const o = new RegExp(`--+${i}`), s = e.split(o).filter(l => l.startsWith(`\r
`) && l.endsWith(`\r
`)).map(l => l.trimStart().replace(/\r\n$/, ""));
    if (!s.length) return;
    const a = {};
    try {
        for (const l of s) {
            const [u, ...c] = l.split(`\r
\r
`), d = c.join(`\r
\r
`), {contentType: f, filename: p, name: h} = VM(u), g = p === void 0 ? d : new File([d], p, {type: f}), _ = a[h];
            _ === void 0 ? a[h] = g : Array.isArray(_) ? a[h] = [..._, g] : a[h] = [_, g]
        }
        return a
    } catch {
        return
    }
}

function c1(e, t) {
    var n;
    if (!e) return e;
    const r = ((n = t == null ? void 0 : t.get("content-type")) == null ? void 0 : n.toLowerCase()) || "";
    return r.startsWith("multipart/form-data") && typeof e != "object" ? BM(e.toString(), t) || e : r.includes("json") && typeof e != "object" && Mr(e.toString()) || e
}

function Xm(e, t) {
    return e.toLowerCase() === t.toLowerCase()
}

var Va = class extends PM.IsomorphicRequest {
    constructor(e, t = {}) {
        super(e, t), t.id && (this.id = t.id), this.cache = t.cache || "default", this.destination = t.destination || "", this.integrity = t.integrity || "", this.keepalive = t.keepalive || !1, this.mode = t.mode || "cors", this.priority = t.priority || "auto", this.redirect = t.redirect || "follow", this.referrer = t.referrer || "", this.referrerPolicy = t.referrerPolicy || "no-referrer", this.cookies = t.cookies || this.getCookies()
    }

    get body() {
        const e = (0, FM.decodeBuffer)(this._body), t = c1(e, this.headers);
        if (!(Xm(this.method, "GET") && t === "")) return t
    }

    passthrough() {
        return {status: 101, statusText: "Continue", headers: new MM.Headers, body: null, passthrough: !0, once: !1}
    }

    getCookies() {
        var e;
        const t = this.headers.get("cookie"), n = t ? LM.parse(t) : {};
        Hg.store.hydrate();
        const r = Array.from((e = Hg.store.get(_t(We({}, this), {url: this.url.href}))) == null ? void 0 : e.entries()).reduce((s, [a, {value: l}]) => Object.assign(s, {[a.trim()]: l}), {}),
            i = jM(this), o = We(We({}, i), r);
        for (const [s, a] of Object.entries(o)) this.headers.append("cookie", `${s}=${a}`);
        return We(We({}, o), n)
    }
};

function zM(e) {
    const t = new URL(e.url), n = new xM.Headers(e.headers);
    return new Va(t, _t(We({}, e), {body: (0, kM.encodeBuffer)(e.body || ""), headers: n}))
}

var HM = Ii, GM = async (e, t, n) => {
        const r = t.filter(o => o.test(e, n));
        if (r.length === 0) return {handler: void 0, response: void 0};
        const i = await r.reduce(async (o, s) => {
            const a = await o;
            if (a != null && a.response) return o;
            const l = await s.run(e, n);
            return l === null || l.handler.shouldSkip ? null : l.response ? (l.response.once && s.markAsSkipped(!0), l) : {
                request: l.request,
                handler: l.handler,
                response: void 0,
                parsedResult: l.parsedResult
            }
        }, Promise.resolve(null));
        return i ? {
            handler: i.handler,
            publicRequest: i.request,
            parsedRequest: i.parsedResult,
            response: i.response
        } : {handler: void 0, response: void 0}
    }, f1 = Ua(sx), qM = QP,
    Ba = e => e.referrer.startsWith(e.url.origin) ? e.url.pathname : new URL(e.url.pathname, `${e.url.protocol}//${e.url.host}`).href;

function d1(e) {
    var t;
    const n = e.definitions.find(r => r.kind === "OperationDefinition");
    return {
        operationType: n == null ? void 0 : n.operation,
        operationName: (t = n == null ? void 0 : n.name) == null ? void 0 : t.value
    }
}

function QM(e) {
    try {
        const t = (0, qM.parse)(e);
        return d1(t)
    } catch (t) {
        return t
    }
}

function WM(e, t, n) {
    const r = {variables: e};
    for (const [i, o] of Object.entries(t)) {
        if (!(i in n)) throw new Error(`Given files do not have a key '${i}' .`);
        for (const s of o) {
            const [a, ...l] = s.split(".").reverse(), u = l.reverse();
            let c = r;
            for (const d of u) {
                if (!(d in c)) throw new Error(`Property '${u}' is not in operations.`);
                c = c[d]
            }
            c[a] = n[i]
        }
    }
    return r.variables
}

function YM(e) {
    var t, n;
    switch (e.method) {
        case"GET": {
            const r = e.url.searchParams.get("query"), i = e.url.searchParams.get("variables") || "";
            return {query: r, variables: Mr(i)}
        }
        case"POST": {
            if ((t = e.body) != null && t.query) {
                const {query: r, variables: i} = e.body;
                return {query: r, variables: i}
            }
            if ((n = e.body) != null && n.operations) {
                const r = e.body, {operations: i, map: o} = r, s = cM(r, ["operations", "map"]), a = Mr(i) || {};
                if (!a.query) return null;
                const l = Mr(o || "") || {}, u = a.variables ? WM(a.variables, l, s) : {};
                return {query: a.query, variables: u}
            }
        }
        default:
            return null
    }
}

function p1(e) {
    const t = YM(e);
    if (!t || !t.query) return;
    const {query: n, variables: r} = t, i = QM(n);
    if (i instanceof Error) {
        const o = Ba(e);
        throw new Error(Te.formatMessage(`Failed to intercept a GraphQL request to "%s %s": cannot parse query. See the error message from the parser below.

%s`, e.method, o, i.message))
    }
    return {operationType: i.operationType, operationName: i.operationName, variables: r}
}

function h1(e) {
    return e < 300 ? "#69AB32" : e < 400 ? "#F0BB4B" : "#E95F5D"
}

function m1() {
    const e = new Date;
    return [e.getHours(), e.getMinutes(), e.getSeconds()].map(String).map(t => t.slice(0, 2)).map(t => t.padStart(2, "0")).join(":")
}

function v1(e) {
    return _t(We({}, e), {body: e.body, headers: e.headers.all()})
}

var XM = dn;

function y1(e) {
    const t = (0, XM.objectToHeaders)(e.headers);
    return _t(We({}, e), {body: c1(e.body, t)})
}

var JM = tF, KM = _a, ZM = /[\?|#].*$/g;

function e2(e) {
    return new URL(`/${e}`, "http://localhost").searchParams
}

function Jm(e) {
    return e.replace(ZM, "")
}

function t2(e) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
}

function n2(e, t) {
    if (t2(e) || e.startsWith("*")) return e;
    const n = t || typeof document != "undefined" && document.baseURI;
    return n ? decodeURI(new URL(encodeURI(e), n).href) : e
}

function r2(e, t) {
    if (e instanceof RegExp) return e;
    const n = n2(e, t);
    return Jm(n)
}

function i2(e) {
    return e.replace(/([:a-zA-Z_-]*)(\*{1,2})+/g, (t, n, r) => {
        const i = "(.*)";
        return n ? n.startsWith(":") ? `${n}${r}` : `${n}${i}` : i
    }).replace(/([^\/])(:)(?=\d+)/, "$1\\$2").replace(/^([^\/]+)(:)(?=\/\/)/, "$1\\$2")
}

function Km(e, t, n) {
    const r = r2(t, n), i = typeof r == "string" ? i2(r) : r, o = (0, KM.getCleanUrl)(e),
        s = (0, JM.match)(i, {decode: decodeURIComponent})(o), a = s && s.params || {};
    return {matches: s !== !1, params: a}
}

var o2 = dn;

function g1(...e) {
    return (...t) => e.reduceRight((n, r) => n instanceof Promise ? Promise.resolve(n).then(r) : r(n), t[0])
}

var E1 = {status: 200, statusText: "OK", body: null, delay: 0, once: !1, passthrough: !1}, s2 = [];

function Sp(e, t = s2) {
    return async (...n) => {
        const r = Object.assign({}, E1, {headers: new o2.Headers({"x-powered-by": "msw"})}, e),
            i = [...t, ...n].filter(Boolean);
        return i.length > 0 ? g1(...i)(r) : r
    }
}

var w1 = Object.assign(Sp(), {
    once: Sp({once: !0}), networkError(e) {
        throw new u1(e)
    }
}), a2 = /\/msw\/src\/(.+)/, l2 = /(node_modules)?[\/\\]lib[\/\\](umd|esm|iief|cjs)[\/\\]|^[^\/\\]*$/;

function u2(e) {
    const t = e.stack;
    if (!t) return;
    const r = t.split(`
`).slice(1).find(o => !(a2.test(o) || l2.test(o)));
    return r ? r.replace(/\s*at [^()]*\(([^)]+)\)/, "$1").replace(/^@/, "") : void 0
}

function c2(e) {
    return e ? typeof e[Symbol.iterator] == "function" : !1
}

var Qc = {status: KS, set: ZS, delay: r1, fetch: o1}, Zm = class {
        constructor(e) {
            this.shouldSkip = !1, this.ctx = e.ctx || Qc, this.resolver = e.resolver;
            const t = u2(new Error);
            this.info = _t(We({}, e.info), {callFrame: t})
        }

        parse(e, t) {
            return null
        }

        test(e, t) {
            return this.predicate(e, this.parse(e, t), t)
        }

        getPublicRequest(e, t) {
            return e
        }

        markAsSkipped(e = !0) {
            this.shouldSkip = e
        }

        async run(e, t) {
            if (this.shouldSkip) return null;
            const n = this.parse(e, t);
            if (!this.predicate(e, n, t)) return null;
            const i = this.getPublicRequest(e, n), s = await this.wrapResolver(this.resolver)(i, w1, this.ctx);
            return this.createExecutionResult(n, i, s)
        }

        wrapResolver(e) {
            return async (t, n, r) => {
                const i = this.resolverGenerator || await e(t, n, r);
                if (c2(i)) {
                    const {value: o, done: s} = i[Symbol.iterator]().next(), a = await o;
                    return !a && s ? this.resolverGeneratorResult : (this.resolverGenerator || (this.resolverGenerator = i), this.resolverGeneratorResult = a, a)
                }
                return i
            }
        }

        createExecutionResult(e, t, n) {
            return {handler: this, parsedResult: e || null, request: t, response: n || null}
        }
    },
    T1 = (e => (e.HEAD = "HEAD", e.GET = "GET", e.POST = "POST", e.PUT = "PUT", e.PATCH = "PATCH", e.OPTIONS = "OPTIONS", e.DELETE = "DELETE", e))(T1 || {}),
    _1 = _t(We({}, Qc), {cookie: Wm, body: e1, text: s1, json: Zo, xml: a1}), f2 = class extends Va {
        constructor(e, t) {
            super(e.url, _t(We({}, e), {body: e._body})), this.params = t, this.id = e.id
        }
    }, Wc = class extends Zm {
        constructor(e, t, n) {
            super({
                info: {header: `${e} ${t}`, path: t, method: e},
                ctx: _1,
                resolver: n
            }), this.checkRedundantQueryParameters()
        }

        checkRedundantQueryParameters() {
            const {method: e, path: t} = this.info;
            if (t instanceof RegExp || Jm(t) === t) return;
            e2(t).forEach((i, o) => {
            }), Te.warn(`Found a redundant usage of query parameters in the request handler URL for "${e} ${t}". Please match against a path instead and access query parameters in the response resolver function using "req.url.searchParams".`)
        }

        parse(e, t) {
            return Km(e.url, this.info.path, t == null ? void 0 : t.baseUrl)
        }

        getPublicRequest(e, t) {
            return new f2(e, t.params || {})
        }

        predicate(e, t) {
            return (this.info.method instanceof RegExp ? this.info.method.test(e.method) : Xm(this.info.method, e.method)) && t.matches
        }

        log(e, t) {
            const n = Ba(e), r = v1(e), i = y1(t), o = h1(t.status);
            console.groupCollapsed(Te.formatMessage("%s %s %s (%c%s%c)"), m1(), e.method, n, `color:${o}`, `${t.status} ${t.statusText}`, "color:inherit"), console.log("Request", r), console.log("Handler:", this), console.log("Response", i), console.groupEnd()
        }
    }, Nl = bi, d2 = (e, t) => n => {
        p2(e);
        const r = Mr(n.body) || {}, i = Ko(r, {[e]: t});
        return Zo(i)(n)
    };

function p2(e) {
    (0, Nl.invariant)(e.trim() !== "", Te.formatMessage("Failed to set a custom field on a GraphQL response: field name cannot be empty.")), (0, Nl.invariant)(e !== "data", Te.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.data()" instead?', e)), (0, Nl.invariant)(e !== "errors", Te.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.errors()" instead?', e)), (0, Nl.invariant)(e !== "extensions", Te.formatMessage('Failed to set a custom "%s" field on a mocked GraphQL response: forbidden field name. Did you mean to call "ctx.extensions()" instead?', e))
}

function S1(e, t) {
    try {
        return e()
    } catch (n) {
        t == null || t(n)
    }
}

var N1 = _t(We({}, Qc), {data: t1, extensions: n1, errors: i1, cookie: Wm, field: d2});

function h2(e) {
    return e == null ? !1 : typeof e == "object" && "kind" in e && "definitions" in e
}

var m2 = class extends Va {
    constructor(e, t) {
        super(e.url, _t(We({}, e), {body: e._body})), this.variables = t
    }
}, Yc = class extends Zm {
    constructor(e, t, n, r) {
        let i = t;
        if (h2(t)) {
            const s = d1(t);
            if (s.operationType !== e) throw new Error(`Failed to create a GraphQL handler: provided a DocumentNode with a mismatched operation type (expected "${e}", but got "${s.operationType}").`);
            if (!s.operationName) throw new Error("Failed to create a GraphQL handler: provided a DocumentNode with no operation name.");
            i = s.operationName
        }
        const o = e === "all" ? `${e} (origin: ${n.toString()})` : `${e} ${i} (origin: ${n.toString()})`;
        super({info: {header: o, operationType: e, operationName: i}, ctx: N1, resolver: r}), this.endpoint = n
    }

    parse(e) {
        return S1(() => p1(e), t => console.error(t.message))
    }

    getPublicRequest(e, t) {
        return new m2(e, (t == null ? void 0 : t.variables) || {})
    }

    predicate(e, t) {
        if (!t) return !1;
        if (!t.operationName && this.info.operationType !== "all") {
            const o = Ba(e);
            return Te.warn(`Failed to intercept a GraphQL request at "${e.method} ${o}": anonymous GraphQL operations are not supported.

Consider naming this operation or using "graphql.operation" request handler to intercept GraphQL requests regardless of their operation name/type. Read more: https://mswjs.io/docs/api/graphql/operation      `), !1
        }
        const n = Km(e.url, this.endpoint),
            r = this.info.operationType === "all" || t.operationType === this.info.operationType,
            i = this.info.operationName instanceof RegExp ? this.info.operationName.test(t.operationName || "") : t.operationName === this.info.operationName;
        return n.matches && r && i
    }

    log(e, t, n) {
        const r = v1(e), i = y1(t), o = h1(t.status),
            s = n != null && n.operationName ? `${n == null ? void 0 : n.operationType} ${n == null ? void 0 : n.operationName}` : `anonymous ${n == null ? void 0 : n.operationType}`;
        console.groupCollapsed(Te.formatMessage("%s %s (%c%s%c)"), m1(), `${s}`, `color:${o}`, `${t.status} ${t.statusText}`, "color:inherit"), console.log("Request:", r), console.log("Handler:", this), console.log("Response:", i), console.groupEnd()
    }
}, v2 = 3, y2 = 4, I1 = .5;

function g2(e) {
    return e.reduce((t, n) => (n instanceof Wc && t.rest.push(n), n instanceof Yc && t.graphql.push(n), t), {
        rest: [],
        graphql: []
    })
}

function E2() {
    return (e, t) => {
        const {path: n, method: r} = t.info;
        if (n instanceof RegExp || r instanceof RegExp) return 1 / 0;
        const o = Xm(e.method, r) ? I1 : 0, s = Ba(e);
        return (0, f1.default)(s, n) - o
    }
}

function w2(e) {
    return (t, n) => {
        if (typeof e.operationName == "undefined") return 1 / 0;
        const {operationType: r, operationName: i} = n.info;
        if (typeof i != "string") return 1 / 0;
        const s = e.operationType === r ? I1 : 0;
        return (0, f1.default)(e.operationName, i) - s
    }
}

function T2(e, t, n) {
    return t.reduce((i, o) => {
        const s = n(e, o);
        return i.concat([[s, o]])
    }, []).sort(([i], [o]) => i - o).filter(([i]) => i <= v2).slice(0, y2).map(([, i]) => i)
}

function _2(e) {
    return e.length > 1 ? `Did you mean to request one of the following resources instead?

${e.map(t => `  \u2022 ${t.info.header}`).join(`
`)}` : `Did you mean to request "${e[0].info.header}" instead?`
}

function S2(e, t, n = "warn") {
    const r = S1(() => p1(e));

    function i() {
        const a = g2(t), l = r ? a.graphql : a.rest, u = T2(e, l, r ? w2(r) : E2());
        return u.length > 0 ? _2(u) : ""
    }

    function o() {
        const a = Ba(e), l = r ? `${r.operationType} ${r.operationName} (${e.method} ${a})` : `${e.method} ${a}`,
            u = i();
        return ["captured a request without a matching request handler:", `  \u2022 ${l}`, u, `If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/getting-started/mocks`].filter(Boolean).join(`

`)
    }

    function s(a) {
        const l = o();
        switch (a) {
            case"error":
                throw Te.error("Error: %s", l), new Error(Te.formatMessage('Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.'));
            case"warn": {
                Te.warn("Warning: %s", l);
                break
            }
            case"bypass":
                break;
            default:
                throw new Error(Te.formatMessage('Failed to react to an unhandled request: unknown strategy "%s". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.', a))
        }
    }

    if (typeof n == "function") {
        n(e, {warning: s.bind(null, "warn"), error: s.bind(null, "error")});
        return
    }
    s(n)
}

var qg = Qh;

function N2(e, t) {
    qg.store.add(_t(We({}, e), {url: e.url.toString()}), t), qg.store.persist()
}

async function ev(e, t, n, r, i) {
    var o, s, a, l, u, c;
    if (r.emit("request:start", e), e.headers.get("x-msw-bypass") === "true") {
        r.emit("request:end", e), (o = i == null ? void 0 : i.onPassthroughResponse) == null || o.call(i, e);
        return
    }
    const [d, f] = await (0, HM.until)(() => GM(e, t, i == null ? void 0 : i.resolutionContext));
    if (d) throw r.emit("unhandledException", d, e), d;
    const {handler: p, response: h} = f;
    if (!p) {
        S2(e, t, n.onUnhandledRequest), r.emit("request:unhandled", e), r.emit("request:end", e), (s = i == null ? void 0 : i.onPassthroughResponse) == null || s.call(i, e);
        return
    }
    if (!h) {
        Te.warn(`Expected response resolver to return a mocked response Object, but got %s. The original response is going to be used instead.

  \u2022 %s
    %s`, h, p.info.header, p.info.callFrame), r.emit("request:end", e), (a = i == null ? void 0 : i.onPassthroughResponse) == null || a.call(i, e);
        return
    }
    if (h.passthrough) {
        r.emit("request:end", e), (l = i == null ? void 0 : i.onPassthroughResponse) == null || l.call(i, e);
        return
    }
    N2(e, h), r.emit("request:match", e);
    const g = f, _ = ((u = i == null ? void 0 : i.transformResponse) == null ? void 0 : u.call(i, h)) || h;
    return (c = i == null ? void 0 : i.onMockedResponse) == null || c.call(i, _, g), r.emit("request:end", e), _
}

var Qg = dn;

function b1(e) {
    return {
        status: e.status,
        statusText: e.statusText,
        headers: (0, Qg.flattenHeadersObject)((0, Qg.headersToObject)(e.headers)),
        body: e.body
    }
}

var I2 = (e, t) => async (n, r) => {
    const i = new RM(n.ports[0]), o = zM(r.payload);
    try {
        await ev(o, e.requestHandlers, t, e.emitter, {
            transformResponse: b2, onPassthroughResponse() {
                i.postMessage("NOT_FOUND")
            }, async onMockedResponse(s, {handler: a, publicRequest: l, parsedRequest: u}) {
                if (s.body instanceof ReadableStream) throw new Error(Te.formatMessage('Failed to construct a mocked response with a "ReadableStream" body: mocked streams are not supported. Follow https://github.com/mswjs/msw/issues/1336 for more details.'));
                const d = await new Response(s.body, s).arrayBuffer(), f = s.body == null ? null : d;
                i.postMessage("MOCK_RESPONSE", _t(We({}, s), {body: f}), [d]), t.quiet || e.emitter.once("response:mocked", p => {
                    a.log(l, b1(p), u)
                })
            }
        })
    } catch (s) {
        if (s instanceof u1) {
            i.postMessage("NETWORK_ERROR", {name: s.name, message: s.message});
            return
        }
        s instanceof Error && (Te.error(`Uncaught exception in the request handler for "%s %s":

%s

This exception has been gracefully handled as a 500 response, however, it's strongly recommended to resolve this error, as it indicates a mistake in your code. If you wish to mock an error response, please see this guide: https://mswjs.io/docs/recipes/mocking-error-responses`, o.method, o.url, s), i.postMessage("MOCK_RESPONSE", {
            status: 500,
            statusText: "Request Handler Error",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name: s.name, message: s.message, stack: s.stack})
        }))
    }
};

function b2(e) {
    return {status: e.status, statusText: e.statusText, headers: e.headers.all(), body: e.body, delay: e.delay}
}

async function O2(e, t) {
    e.workerChannel.send("INTEGRITY_CHECK_REQUEST");
    const {payload: n} = await e.events.once("INTEGRITY_CHECK_RESPONSE");
    if (n !== "b3066ef78c2f9090b4ce87e874965995") throw new Error(`Currently active Service Worker (${n}) is behind the latest published one (b3066ef78c2f9090b4ce87e874965995).`);
    return t
}

var Wg = Ii;

function A2(e) {
    const t = window.XMLHttpRequest.prototype.send;
    window.XMLHttpRequest.prototype.send = function (...r) {
        (0, Wg.until)(() => e).then(() => {
            window.XMLHttpRequest.prototype.send = t, this.send(...r)
        })
    };
    const n = window.fetch;
    window.fetch = async (...r) => (await (0, Wg.until)(() => e), window.fetch = n, window.fetch(...r))
}

function C2(e) {
    return (t, n) => {
        var r;
        const {payload: i} = n;
        if ((r = i.type) != null && r.includes("opaque")) return;
        const o = new Response(i.body || null, i);
        o.headers.get("x-powered-by") === "msw" ? e.emitter.emit("response:mocked", o, i.requestId) : e.emitter.emit("response:bypass", o, i.requestId)
    }
}

function D2(e, t) {
    !(t != null && t.quiet) && !location.href.startsWith(e.scope) && Te.warn(`Cannot intercept requests on this page because it's outside of the worker's scope ("${e.scope}"). If you wish to mock API requests on this page, you must resolve this scope issue.

- (Recommended) Register the worker at the root level ("/") of your application.
- Set the "Service-Worker-Allowed" response header to allow out-of-scope workers.`)
}

var R2 = e => function (n, r) {
    const o = (async () => {
        e.events.removeAllListeners(), e.workerChannel.on("REQUEST", I2(e, n)), e.workerChannel.on("RESPONSE", C2(e));
        const s = await CM(n.serviceWorker.url, n.serviceWorker.options, n.findWorker), [a, l] = s;
        if (!a) {
            const c = r != null && r.findWorker ? Te.formatMessage(`Failed to locate the Service Worker registration using a custom "findWorker" predicate.

Please ensure that the custom predicate properly locates the Service Worker registration at "%s".
More details: https://mswjs.io/docs/api/setup-worker/start#findworker
`, n.serviceWorker.url) : Te.formatMessage(`Failed to locate the Service Worker registration.

This most likely means that the worker script URL "%s" cannot resolve against the actual public hostname (%s). This may happen if your application runs behind a proxy, or has a dynamic hostname.

Please consider using a custom "serviceWorker.url" option to point to the actual worker script location, or a custom "findWorker" option to resolve the Service Worker registration manually. More details: https://mswjs.io/docs/api/setup-worker/start`, n.serviceWorker.url, location.host);
            throw new Error(c)
        }
        e.worker = a, e.registration = l, e.events.addListener(window, "beforeunload", () => {
            a.state !== "redundant" && e.workerChannel.send("CLIENT_CLOSED"), window.clearInterval(e.keepAliveInterval)
        });
        const [u] = await (0, _M.until)(() => O2(e, a));
        return u && Te.error(`Detected outdated Service Worker: ${u.message}

The mocking is still enabled, but it's highly recommended that you update your Service Worker by running:

$ npx msw init <PUBLIC_DIR>

This is necessary to ensure that the Service Worker is in sync with the library to guarantee its stability.
If this message still persists after updating, please report an issue: https://github.com/open-draft/msw/issues      `), e.keepAliveInterval = window.setInterval(() => e.workerChannel.send("KEEPALIVE_REQUEST"), 5e3), D2(l, e.startOptions), l
    })().then(async s => {
        const a = s.installing || s.waiting;
        return a && await new Promise(l => {
            a.addEventListener("statechange", () => {
                if (a.state === "activated") return l()
            })
        }), await DM(e, n).catch(l => {
            throw new Error(`Failed to enable mocking: ${l == null ? void 0 : l.message}`)
        }), s
    });
    return n.waitUntilReady && A2(o), o
};

function O1(e = {}) {
    e.quiet || console.log(`%c${Te.formatMessage("Mocking disabled.")}`, "color:orangered;font-weight:bold;")
}

var k2 = e => function () {
    var n;
    if (!e.isMockingEnabled) {
        Te.warn('Found a redundant "worker.stop()" call. Note that stopping the worker while mocking already stopped has no effect. Consider removing this "worker.stop()" call.');
        return
    }
    e.workerChannel.send("MOCK_DEACTIVATE"), e.isMockingEnabled = !1, window.clearInterval(e.keepAliveInterval), O1({quiet: (n = e.startOptions) == null ? void 0 : n.quiet})
};

function x2(e, ...t) {
    e.unshift(...t)
}

function L2(e) {
    e.forEach(t => {
        t.markAsSkipped(!1)
    })
}

function P2(e, ...t) {
    return t.length > 0 ? [...t] : [...e]
}

var F2 = {
    serviceWorker: {url: "/mockServiceWorker.js", options: null},
    quiet: !1,
    waitUntilReady: !0,
    onUnhandledRequest: "warn",
    findWorker(e, t) {
        return e === t
    }
};

function M2(e) {
    return Ko(F2, e || {})
}

function $2(e, t) {
    return n => (t.startOptions = M2(n), e(t.startOptions, n || {}))
}

var j2 = Ea, U2 = Mc, V2 = $c, B2 = Ea, td = () => {
    throw new Error("Not implemented")
};

function z2(e) {
    return _t(We({}, e), {
        ok: e.status >= 200 && e.status < 300,
        url: "",
        type: "default",
        status: e.status,
        statusText: e.statusText,
        headers: e.headers,
        body: new ReadableStream,
        redirected: e.headers.get("Location") != null,
        async text() {
            return e.body || ""
        },
        async json() {
            return JSON.parse(e.body || "")
        },
        async arrayBuffer() {
            return (0, B2.encodeBuffer)(e.body || "")
        },
        bodyUsed: !1,
        formData: td,
        blob: td,
        clone: td
    })
}

function H2(e, t) {
    const n = new j2.BatchInterceptor({
        name: "fallback",
        interceptors: [new U2.FetchInterceptor, new V2.XMLHttpRequestInterceptor]
    });
    return n.on("request", async r => {
        const i = new Va(r.url, _t(We({}, r), {body: await r.arrayBuffer()})),
            o = await ev(i, e.requestHandlers, t, e.emitter, {
                transformResponse(s) {
                    return {
                        status: s.status,
                        statusText: s.statusText,
                        headers: s.headers.all(),
                        body: s.body,
                        delay: s.delay
                    }
                }, onMockedResponse(s, {handler: a, publicRequest: l, parsedRequest: u}) {
                    t.quiet || e.emitter.once("response:mocked", c => {
                        a.log(l, b1(c), u)
                    })
                }
            });
        o && r.respondWith(o)
    }), n.on("response", (r, i) => {
        if (!r.id) return;
        const o = z2(i);
        i.headers.get("x-powered-by") === "msw" ? e.emitter.emit("response:mocked", o, r.id) : e.emitter.emit("response:bypass", o, r.id)
    }), n.apply(), n
}

function G2(e) {
    return async function (n) {
        e.fallbackInterceptor = H2(e, n), l1({message: "Mocking enabled (fallback mode).", quiet: n.quiet})
    }
}

function q2(e) {
    return function () {
        var n, r;
        (n = e.fallbackInterceptor) == null || n.dispose(), O1({quiet: (r = e.startOptions) == null ? void 0 : r.quiet})
    }
}

function Q2(e, t) {
    const n = e.emit;
    n._isPiped || (e.emit = function (r, ...i) {
        return t.emit(r, ...i), n.call(this, r, ...i)
    }, e.emit._isPiped = !0)
}

function W2(e) {
    const t = [...e];
    return Object.freeze(t), t
}

var nd = [];

function Y2(...e) {
    if (e.forEach(s => {
        if (Array.isArray(s)) throw new Error(Te.formatMessage('Failed to call "setupWorker" given an Array of request handlers (setupWorker([a, b])), expected to receive each handler individually: setupWorker(a, b).'))
    }), (0, TM.isNodeProcess)()) throw new Error(Te.formatMessage("Failed to execute `setupWorker` in a non-browser environment. Consider using `setupServer` for Node.js environment instead."));
    const t = new zg.StrictEventEmitter, n = new zg.StrictEventEmitter;
    Q2(t, n);
    const r = {
        isMockingEnabled: !1,
        startOptions: void 0,
        worker: null,
        registration: null,
        requestHandlers: [...e],
        emitter: t,
        workerChannel: {
            on(s, a) {
                r.events.addListener(navigator.serviceWorker, "message", l => {
                    if (l.source !== r.worker) return;
                    const u = l.data;
                    !u || u.type === s && a(l, u)
                })
            }, send(s) {
                var a;
                (a = r.worker) == null || a.postMessage(s)
            }
        },
        events: {
            addListener(s, a, l) {
                return s.addEventListener(a, l), nd.push({eventType: a, target: s, callback: l}), () => {
                    s.removeEventListener(a, l)
                }
            }, removeAllListeners() {
                for (const {target: s, eventType: a, callback: l} of nd) s.removeEventListener(a, l);
                nd = []
            }, once(s) {
                const a = [];
                return new Promise((l, u) => {
                    const c = d => {
                        try {
                            const f = d.data;
                            f.type === s && l(f)
                        } catch (f) {
                            u(f)
                        }
                    };
                    a.push(r.events.addListener(navigator.serviceWorker, "message", c), r.events.addListener(navigator.serviceWorker, "messageerror", u))
                }).finally(() => {
                    a.forEach(l => l())
                })
            }
        },
        useFallbackMode: !("serviceWorker" in navigator) || location.protocol === "file:"
    }, i = r.useFallbackMode ? G2(r) : R2(r), o = r.useFallbackMode ? q2(r) : k2(r);
    return {
        start: $2(i, r), stop() {
            r.events.removeAllListeners(), r.emitter.removeAllListeners(), n.removeAllListeners(), o()
        }, use(...s) {
            x2(r.requestHandlers, ...s)
        }, restoreHandlers() {
            L2(r.requestHandlers)
        }, resetHandlers(...s) {
            r.requestHandlers = P2(e, ...s)
        }, listHandlers() {
            return W2(r.requestHandlers)
        }, printHandlers() {
            this.listHandlers().forEach(a => {
                const {header: l, callFrame: u} = a.info,
                    c = a.info.hasOwnProperty("operationType") ? "[graphql]" : "[rest]";
                console.groupCollapsed(`${c} ${l}`), u && console.log(`Declaration: ${u}`), console.log("Handler:", a), a instanceof Wc && console.log("Match:", `https://mswjs.io/repl?path=${a.info.path}`), console.groupEnd()
            })
        }, events: {
            on(...s) {
                return n.on(...s)
            }, removeListener(...s) {
                return n.removeListener(...s)
            }, removeAllListeners(...s) {
                return n.removeAllListeners(...s)
            }
        }
    }
}

function yr(e) {
    return (t, n) => new Wc(e, t, n)
}

var X2 = {
    all: yr(/.+/),
    head: yr("HEAD"),
    get: yr("GET"),
    post: yr("POST"),
    put: yr("PUT"),
    delete: yr("DELETE"),
    patch: yr("PATCH"),
    options: yr("OPTIONS")
};

function Bu(e, t) {
    return (n, r) => new Yc(e, n, t, r)
}

function A1(e) {
    return t => new Yc("all", new RegExp(".*"), e, t)
}

var J2 = {operation: A1("*"), query: Bu("query", "*"), mutation: Bu("mutation", "*")};

function K2(e) {
    return {operation: A1(e), query: Bu("query", e), mutation: Bu("mutation", e)}
}

var Z2 = _t(We({}, J2), {link: K2});
const e$ = [Yl.rest.get("/profile/*", (e, t, n) => {
    const r = e.url.pathname.split("/").at(-1);
    return t(n.delay(1e3), n.status(200), n.json({
        userId: r,
        avatar: "https://placekitten.com/g/200/200",
        introduce: "\uC548\uB155\uD558\uC138\uC694\uC73C",
        follower: 42,
        answerRate: 24
    }))
}), Yl.rest.post("/login", (e, t, n) => t(n.status(201), n.json({
    access_token: "12lkdjadsk12lkvxkjh2jd",
    refresh_token: "21ihfkjdsk2uhd",
    userId: "iDcan2eyo"
}))), Yl.rest.get("/mypage", (e, t, n) => t(n.delay(1e3), n.status(200), n.json({
    userId: "iDcan2eyo",
    avatar: "https://placekitten.com/g/200/200",
    introduce: "\uC548\uB155\uD558\uC138\uC694\uC73C",
    follower: 42,
    answerRate: 24
})))];
Yl.setupWorker(...e$);
Yw(document.getElementById("root")).render(O(ur.StrictMode, {children: O(mI, {children: ee(yI, {children: [O(YN, {router: mA}), O(FD, {})]})})}));
