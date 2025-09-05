import ke, { useState as z } from "react";
var N = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function dr() {
  if (Se) return M;
  Se = 1;
  var A = ke, j = Symbol.for("react.element"), W = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, T = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(b, d, E) {
    var p, y = {}, R = null, a = null;
    E !== void 0 && (R = "" + E), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (a = d.ref);
    for (p in d) m.call(d, p) && !w.hasOwnProperty(p) && (y[p] = d[p]);
    if (b && b.defaultProps) for (p in d = b.defaultProps, d) y[p] === void 0 && (y[p] = d[p]);
    return { $$typeof: j, type: b, key: R, ref: a, props: y, _owner: T.current };
  }
  return M.Fragment = W, M.jsx = _, M.jsxs = _, M;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function pr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && (function() {
    var A = ke, j = Symbol.for("react.element"), W = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), b = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), a = Symbol.for("react.offscreen"), O = Symbol.iterator, Ce = "@@iterator";
    function Oe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var P = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var l = t.map(function(i) {
          return String(i);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var Fe = !1, De = !1, Ae = !1, We = !1, Ie = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === w || Ie || e === T || e === E || e === p || We || e === a || Fe || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case W:
          return "Portal";
        case w:
          return "Profiler";
        case T:
          return "StrictMode";
        case E:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return re(r) + ".Consumer";
          case _:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return Me(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case R: {
            var s = e, l = s._payload, i = s._init;
            try {
              return S(i(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, I = 0, te, ne, ae, oe, ie, se, le;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function $e() {
      {
        if (I === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        I++;
      }
    }
    function Ye() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: te
            }),
            info: k({}, e, {
              value: ne
            }),
            warn: k({}, e, {
              value: ae
            }),
            error: k({}, e, {
              value: oe
            }),
            group: k({}, e, {
              value: ie
            }),
            groupCollapsed: k({}, e, {
              value: se
            }),
            groupEnd: k({}, e, {
              value: le
            })
          });
        }
        I < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, J;
    function Y(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var K = !1, U;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ue();
    }
    function ce(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = q.current, q.current = null, $e();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (h) {
              n = h;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var o = h.stack.split(`
`), g = n.stack.split(`
`), c = o.length - 1, f = g.length - 1; c >= 1 && f >= 0 && o[c] !== g[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (o[c] !== g[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || o[c] !== g[f]) {
                    var x = `
` + o[c].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, x), x;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        K = !1, q.current = l, Ye(), Error.prepareStackTrace = s;
      }
      var D = e ? e.displayName || e.name : "", C = D ? Y(D) : "";
      return typeof e == "function" && U.set(e, C), C;
    }
    function Ve(e, r, t) {
      return ce(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Be(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case E:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ve(e.render);
          case y:
            return V(e.type, r, t);
          case R: {
            var n = e, s = n._payload, l = n._init;
            try {
              return V(l(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, de = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function ze(e, r, t, n, s) {
      {
        var l = Function.call.bind(L);
        for (var i in e)
          if (l(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var g = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw g.name = "Invariant Violation", g;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              o = c;
            }
            o && !(o instanceof Error) && (B(s), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), B(null)), o instanceof Error && !(o.message in fe) && (fe[o.message] = !0, B(s), v("Failed %s type: %s", t, o.message), B(null));
          }
      }
    }
    var Ne = Array.isArray;
    function G(e) {
      return Ne(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ve(e) {
      if (Je(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var ge = P.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, be;
    function Ge(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, s, l, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function rr(e, r, t, n, s) {
      {
        var l, i = {}, o = null, g = null;
        t !== void 0 && (ve(t), o = "" + t), He(r) && (ve(r.key), o = "" + r.key), Ge(r) && (g = r.ref, Xe(r, s));
        for (l in r)
          L.call(r, l) && !Ke.hasOwnProperty(l) && (i[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            i[l] === void 0 && (i[l] = c[l]);
        }
        if (o || g) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Ze(i, f), g && Qe(i, f);
        }
        return er(e, o, g, s, n, ge.current, i);
      }
    }
    var H = P.ReactCurrentOwner, xe = P.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function ye() {
      {
        if (H.current) {
          var e = S(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var me = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + S(e._owner.type) + "."), F(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Ee(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Oe(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), i; !(i = l.next()).done; )
              Z(i.value) && Ee(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var s = S(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var we = {};
    function _e(e, r, t, n, s, l) {
      {
        var i = Le(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var g = tr();
          g ? o += g : o += ye();
          var c;
          e === null ? c = "null" : G(e) ? c = "array" : e !== void 0 && e.$$typeof === j ? (c = "<" + (S(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, o);
        }
        var f = rr(e, r, t, s, l);
        if (f == null)
          return f;
        if (i) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (G(x)) {
                for (var D = 0; D < x.length; D++)
                  Re(x[D], e);
                Object.freeze && Object.freeze(x);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(x, e);
        }
        if (L.call(r, "key")) {
          var C = S(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[C + Q]) {
            var cr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, C, cr, C), we[C + Q] = !0;
          }
        }
        return e === m ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return _e(e, r, t, !0);
    }
    function sr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var lr = sr, ur = ir;
    $.Fragment = m, $.jsx = lr, $.jsxs = ur;
  })()), $;
}
var Te;
function vr() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? N.exports = dr() : N.exports = pr()), N.exports;
}
var u = vr();
const hr = ({
  onSubmit: A,
  buttonLabel: j = "Login",
  companyName: W = "Virtukart"
}) => {
  const [m, T] = z(""), [w, _] = z(""), [b, d] = z({ username: "", password: "" }), [E, p] = z(!1), y = () => {
    const a = { username: "", password: "" };
    let O = !0;
    return m || (a.username = "Username is required", O = !1), w || (a.password = "Password is required", O = !1), d(a), O;
  }, R = (a) => {
    a.preventDefault(), y() && (A({ username: m, password: w }), T(""), _(""), d({ username: "", password: "" }), p(!1));
  };
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      style: {
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ u.jsxs(
        "form",
        {
          onSubmit: R,
          style: {
            width: "100%",
            maxWidth: "400px",
            padding: "32px",
            borderRadius: "16px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 0.6)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)"
          },
          children: [
            /* @__PURE__ */ u.jsxs("div", { style: { textAlign: "center", marginBottom: "20px" }, children: [
              /* @__PURE__ */ u.jsx(
                "h1",
                {
                  style: { fontSize: "24px", fontWeight: "bold", color: "#1f2937" },
                  children: W
                }
              ),
              /* @__PURE__ */ u.jsx("p", { style: { color: "#6b7280", fontWeight: "500", marginTop: "8px" }, children: "Sign in to your account" })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: [
              /* @__PURE__ */ u.jsxs("div", { children: [
                /* @__PURE__ */ u.jsxs(
                  "label",
                  {
                    htmlFor: "username",
                    style: {
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1f2937",
                      marginBottom: "8px",
                      display: "block"
                    },
                    children: [
                      "Username ",
                      /* @__PURE__ */ u.jsx("span", { style: { color: "#ec4899" }, children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "text",
                    id: "username",
                    value: m,
                    onChange: (a) => T(a.target.value),
                    style: {
                      width: "90%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      border: "1px solid black",
                      transition: "all 0.15s",
                      outline: "none"
                    },
                    onFocus: (a) => a.target.style.boxShadow = "0 0 0 2px #818cf8",
                    onBlur: (a) => a.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)",
                    placeholder: "Enter username",
                    autoComplete: "username"
                  }
                ),
                b.username && /* @__PURE__ */ u.jsx(
                  "span",
                  {
                    style: {
                      color: "#ec4899",
                      fontSize: "12px",
                      fontWeight: "500",
                      marginTop: "4px",
                      display: "block"
                    },
                    children: b.username
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ u.jsxs(
                  "label",
                  {
                    htmlFor: "password",
                    style: {
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#1f2937",
                      marginBottom: "8px",
                      display: "block"
                    },
                    children: [
                      "Password ",
                      /* @__PURE__ */ u.jsx("span", { style: { color: "#ec4899" }, children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: E ? "text" : "password",
                    id: "password",
                    value: w,
                    onChange: (a) => _(a.target.value),
                    style: {
                      width: "90%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.9)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      border: "1px solid black",
                      transition: "all 0.15s",
                      outline: "none"
                    },
                    onFocus: (a) => a.target.style.boxShadow = "0 0 0 2px #818cf8",
                    onBlur: (a) => a.target.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)",
                    placeholder: "Enter password",
                    autoComplete: "current-password"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "span",
                  {
                    onClick: () => p((a) => !a),
                    style: {
                      position: "absolute",
                      right: "16px",
                      top: "70%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#9ca3af",
                      transition: "color 0.2s"
                    },
                    onMouseEnter: (a) => a.target.style.color = "#6366f1",
                    onMouseLeave: (a) => a.target.style.color = "#9ca3af",
                    tabIndex: 0,
                    "aria-label": E ? "Hide password" : "Show password",
                    role: "button",
                    children: E ? /* @__PURE__ */ u.jsxs(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        style: { height: "20px", width: "20px" },
                        children: [
                          /* @__PURE__ */ u.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }
                          ),
                          /* @__PURE__ */ u.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            }
                          )
                        ]
                      }
                    ) : /* @__PURE__ */ u.jsx(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        style: { height: "20px", width: "20px" },
                        children: /* @__PURE__ */ u.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          }
                        )
                      }
                    )
                  }
                ),
                b.password && /* @__PURE__ */ u.jsx(
                  "span",
                  {
                    style: {
                      color: "#ec4899",
                      fontSize: "12px",
                      fontWeight: "500",
                      marginTop: "4px",
                      display: "block"
                    },
                    children: b.password
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsx(
                "button",
                {
                  type: "submit",
                  style: {
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "#6366f1",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "18px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.15s"
                  },
                  onMouseEnter: (a) => a.target.style.background = "#4f46e5",
                  onMouseLeave: (a) => a.target.style.background = "#6366f1",
                  onFocus: (a) => a.target.style.boxShadow = "0 0 0 2px #a5b4fc",
                  onBlur: (a) => a.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)",
                  children: j
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
export {
  hr as LoginForm
};
