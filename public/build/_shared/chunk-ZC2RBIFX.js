import {
  require_react_dom
} from "/build/_shared/chunk-PTRPXHZV.js";
import {
  require_react
} from "/build/_shared/chunk-6L4I7JCO.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/render.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e(...n6) {
  return n6.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r6, n6, ...a4) {
  if (r6 in n6) {
    let e4 = n6[r6];
    return typeof e4 == "function" ? e4(...a4) : e4;
  }
  let t9 = new Error(`Tried to handle "${r6}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t9, u), t9;
}

// node_modules/@headlessui/react/dist/utils/render.js
var S = ((a4) => (a4[a4.None = 0] = "None", a4[a4.RenderStrategy = 1] = "RenderStrategy", a4[a4.Static = 2] = "Static", a4))(S || {});
var j = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(j || {});
function X({ ourProps: r6, theirProps: t9, slot: e4, defaultTag: a4, features: s10, visible: n6 = true, name: f5 }) {
  let o9 = N(t9, r6);
  if (n6)
    return c(o9, e4, a4, f5);
  let u4 = s10 != null ? s10 : 0;
  if (u4 & 2) {
    let { static: l7 = false, ...p5 } = o9;
    if (l7)
      return c(p5, e4, a4, f5);
  }
  if (u4 & 1) {
    let { unmount: l7 = true, ...p5 } = o9;
    return u(l7 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c({ ...p5, hidden: true, style: { display: "none" } }, e4, a4, f5);
    } });
  }
  return c(o9, e4, a4, f5);
}
function c(r6, t9 = {}, e4, a4) {
  let { as: s10 = e4, children: n6, refName: f5 = "ref", ...o9 } = g(r6, ["unmount", "static"]), u4 = r6.ref !== void 0 ? { [f5]: r6.ref } : {}, l7 = typeof n6 == "function" ? n6(t9) : n6;
  "className" in o9 && o9.className && typeof o9.className == "function" && (o9.className = o9.className(t9));
  let p5 = {};
  if (t9) {
    let i5 = false, m5 = [];
    for (let [y5, d9] of Object.entries(t9))
      typeof d9 == "boolean" && (i5 = true), d9 === true && m5.push(y5);
    i5 && (p5["data-headlessui-state"] = m5.join(" "));
  }
  if (s10 === import_react.Fragment && Object.keys(R(o9)).length > 0) {
    if (!(0, import_react.isValidElement)(l7) || Array.isArray(l7) && l7.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a4} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o9).map((d9) => `  - ${d9}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d9) => `  - ${d9}`).join(`
`)].join(`
`));
    let i5 = l7.props, m5 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d9) => e(i5 == null ? void 0 : i5.className(...d9), o9.className) : e(i5 == null ? void 0 : i5.className, o9.className), y5 = m5 ? { className: m5 } : {};
    return (0, import_react.cloneElement)(l7, Object.assign({}, N(l7.props, R(g(o9, ["ref"]))), p5, u4, w(l7.ref, u4.ref), y5));
  }
  return (0, import_react.createElement)(s10, Object.assign({}, g(o9, ["ref"]), s10 !== import_react.Fragment && u4, s10 !== import_react.Fragment && p5), l7);
}
function w(...r6) {
  return { ref: r6.every((t9) => t9 == null) ? void 0 : (t9) => {
    for (let e4 of r6)
      e4 != null && (typeof e4 == "function" ? e4(t9) : e4.current = t9);
  } };
}
function N(...r6) {
  var a4;
  if (r6.length === 0)
    return {};
  if (r6.length === 1)
    return r6[0];
  let t9 = {}, e4 = {};
  for (let s10 of r6)
    for (let n6 in s10)
      n6.startsWith("on") && typeof s10[n6] == "function" ? ((a4 = e4[n6]) != null || (e4[n6] = []), e4[n6].push(s10[n6])) : t9[n6] = s10[n6];
  if (t9.disabled || t9["aria-disabled"])
    return Object.assign(t9, Object.fromEntries(Object.keys(e4).map((s10) => [s10, void 0])));
  for (let s10 in e4)
    Object.assign(t9, { [s10](n6, ...f5) {
      let o9 = e4[s10];
      for (let u4 of o9) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u4(n6, ...f5);
      }
    } });
  return t9;
}
function D(r6) {
  var t9;
  return Object.assign((0, import_react.forwardRef)(r6), { displayName: (t9 = r6.displayName) != null ? t9 : r6.name });
}
function R(r6) {
  let t9 = Object.assign({}, r6);
  for (let e4 in t9)
    t9[e4] === void 0 && delete t9[e4];
  return t9;
}
function g(r6, t9 = []) {
  let e4 = Object.assign({}, r6);
  for (let a4 of t9)
    a4 in e4 && delete e4[a4];
  return e4;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react2 = __toESM(require_react(), 1);
var n = (0, import_react2.createContext)(null);
n.displayName = "OpenClosedContext";
var d = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(d || {});
function C() {
  return (0, import_react2.useContext)(n);
}
function c2({ value: o9, children: r6 }) {
  return import_react2.default.createElement(n.Provider, { value: o9 }, r6);
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d2 = (t9, e4, n6) => e4 in t9 ? i(t9, e4, { enumerable: true, configurable: true, writable: true, value: n6 }) : t9[e4] = n6;
var r = (t9, e4, n6) => (d2(t9, typeof e4 != "symbol" ? e4 + "" : e4, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.handoffState = "pending", this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l2 = (e4, f5) => {
  s.isServer ? (0, import_react3.useEffect)(e4, f5) : (0, import_react3.useLayoutEffect)(e4, f5);
};

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
function f() {
  let e4 = (0, import_react4.useRef)(false);
  return l2(() => (e4.current = true, () => {
    e4.current = false;
  }), []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react5 = __toESM(require_react(), 1);
function s2(e4) {
  let r6 = (0, import_react5.useRef)(e4);
  return l2(() => {
    r6.current = e4;
  }, [e4]), r6;
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l3() {
  let [e4, f5] = (0, import_react6.useState)(s.isHandoffComplete);
  return e4 && s.isHandoffComplete === false && f5(false), (0, import_react6.useEffect)(() => {
    e4 !== true && f5(true);
  }, [e4]), (0, import_react6.useEffect)(() => s.handoff(), []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react7 = __toESM(require_react(), 1);
var o3 = function(t9) {
  let e4 = s2(t9);
  return import_react7.default.useCallback((...r6) => e4.current(...r6), [e4]);
};

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var u2 = Symbol();
function T2(t9, n6 = true) {
  return Object.assign(t9, { [u2]: n6 });
}
function y(...t9) {
  let n6 = (0, import_react8.useRef)(t9);
  (0, import_react8.useEffect)(() => {
    n6.current = t9;
  }, [t9]);
  let c11 = o3((e4) => {
    for (let o9 of n6.current)
      o9 != null && (typeof o9 == "function" ? o9(e4) : o9.current = e4);
  });
  return t9.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u2])) ? void 0 : c11;
}

// node_modules/@headlessui/react/dist/utils/once.js
function l5(r6) {
  let e4 = { called: false };
  return (...t9) => {
    if (!e4.called)
      return e4.called = true, r6(...t9);
  };
}

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t4(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o9) => setTimeout(() => {
    throw o9;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o4() {
  let n6 = [], r6 = { addEventListener(e4, t9, s10, a4) {
    return e4.addEventListener(t9, s10, a4), r6.add(() => e4.removeEventListener(t9, s10, a4));
  }, requestAnimationFrame(...e4) {
    let t9 = requestAnimationFrame(...e4);
    return r6.add(() => cancelAnimationFrame(t9));
  }, nextFrame(...e4) {
    return r6.requestAnimationFrame(() => r6.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t9 = setTimeout(...e4);
    return r6.add(() => clearTimeout(t9));
  }, microTask(...e4) {
    let t9 = { current: true };
    return t4(() => {
      t9.current && e4[0]();
    }), r6.add(() => {
      t9.current = false;
    });
  }, style(e4, t9, s10) {
    let a4 = e4.style.getPropertyValue(t9);
    return Object.assign(e4.style, { [t9]: s10 }), this.add(() => {
      Object.assign(e4.style, { [t9]: a4 });
    });
  }, group(e4) {
    let t9 = o4();
    return e4(t9), this.add(() => t9.dispose());
  }, add(e4) {
    return n6.push(e4), () => {
      let t9 = n6.indexOf(e4);
      if (t9 >= 0)
        for (let s10 of n6.splice(t9, 1))
          s10();
    };
  }, dispose() {
    for (let e4 of n6.splice(0))
      e4();
  } };
  return r6;
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d3(t9, ...e4) {
  t9 && e4.length > 0 && t9.classList.add(...e4);
}
function v(t9, ...e4) {
  t9 && e4.length > 0 && t9.classList.remove(...e4);
}
function F(t9, e4) {
  let n6 = o4();
  if (!t9)
    return n6.dispose;
  let { transitionDuration: m5, transitionDelay: o9 } = getComputedStyle(t9), [u4, p5] = [m5, o9].map((a4) => {
    let [r6 = 0] = a4.split(",").filter(Boolean).map((i5) => i5.includes("ms") ? parseFloat(i5) : parseFloat(i5) * 1e3).sort((i5, f5) => f5 - i5);
    return r6;
  }), l7 = u4 + p5;
  if (l7 !== 0) {
    n6.group((r6) => {
      r6.setTimeout(() => {
        e4(), r6.dispose();
      }, l7), r6.addEventListener(t9, "transitionrun", (i5) => {
        i5.target === i5.currentTarget && r6.dispose();
      });
    });
    let a4 = n6.addEventListener(t9, "transitionend", (r6) => {
      r6.target === r6.currentTarget && (e4(), a4());
    });
  } else
    e4();
  return n6.add(() => e4()), n6.dispose;
}
function y2(t9, e4, n6, m5) {
  let o9 = n6 ? "enter" : "leave", u4 = o4(), p5 = m5 !== void 0 ? l5(m5) : () => {
  };
  o9 === "enter" && (t9.removeAttribute("hidden"), t9.style.display = "");
  let l7 = u(o9, { enter: () => e4.enter, leave: () => e4.leave }), a4 = u(o9, { enter: () => e4.enterTo, leave: () => e4.leaveTo }), r6 = u(o9, { enter: () => e4.enterFrom, leave: () => e4.leaveFrom });
  return v(t9, ...e4.enter, ...e4.enterTo, ...e4.enterFrom, ...e4.leave, ...e4.leaveFrom, ...e4.leaveTo, ...e4.entered), d3(t9, ...l7, ...r6), u4.nextFrame(() => {
    v(t9, ...r6), d3(t9, ...a4), F(t9, () => (v(t9, ...l7), d3(t9, ...e4.entered), p5()));
  }), u4.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react9 = __toESM(require_react(), 1);
function p2() {
  let [e4] = (0, import_react9.useState)(o4);
  return (0, import_react9.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D2({ container: i5, direction: t9, classes: o9, onStart: s10, onStop: u4 }) {
  let a4 = f(), c11 = p2(), r6 = s2(t9);
  l2(() => {
    let e4 = o4();
    c11.add(e4.dispose);
    let n6 = i5.current;
    if (n6 && r6.current !== "idle" && a4.current)
      return e4.dispose(), s10.current(r6.current), e4.add(y2(n6, o9.current, r6.current === "enter", () => {
        e4.dispose(), u4.current(r6.current);
      })), e4.dispose;
  }, [t9]);
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react10 = __toESM(require_react(), 1);
function c4(a4 = 0) {
  let [l7, r6] = (0, import_react10.useState)(a4), t9 = f(), o9 = (0, import_react10.useCallback)((e4) => {
    t9.current && r6((u4) => u4 | e4);
  }, [l7, t9]), m5 = (0, import_react10.useCallback)((e4) => Boolean(l7 & e4), [l7]), s10 = (0, import_react10.useCallback)((e4) => {
    t9.current && r6((u4) => u4 & ~e4);
  }, [r6, t9]), g3 = (0, import_react10.useCallback)((e4) => {
    t9.current && r6((u4) => u4 ^ e4);
  }, [r6]);
  return { flags: l7, addFlag: o9, hasFlag: m5, removeFlag: s10, toggleFlag: g3 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x2(t9 = "") {
  return t9.split(" ").filter((n6) => n6.trim().length > 1);
}
var I = (0, import_react11.createContext)(null);
I.displayName = "TransitionContext";
var Ce = ((r6) => (r6.Visible = "visible", r6.Hidden = "hidden", r6))(Ce || {});
function Ee() {
  let t9 = (0, import_react11.useContext)(I);
  if (t9 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t9;
}
function be() {
  let t9 = (0, import_react11.useContext)(_);
  if (t9 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t9;
}
var _ = (0, import_react11.createContext)(null);
_.displayName = "NestingContext";
function M(t9) {
  return "children" in t9 ? M(t9.children) : t9.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function re(t9, n6) {
  let r6 = s2(t9), o9 = (0, import_react11.useRef)([]), N4 = f(), H4 = p2(), p5 = o3((s10, e4 = j.Hidden) => {
    let a4 = o9.current.findIndex(({ el: i5 }) => i5 === s10);
    a4 !== -1 && (u(e4, { [j.Unmount]() {
      o9.current.splice(a4, 1);
    }, [j.Hidden]() {
      o9.current[a4].state = "hidden";
    } }), H4.microTask(() => {
      var i5;
      !M(o9) && N4.current && ((i5 = r6.current) == null || i5.call(r6));
    }));
  }), P3 = o3((s10) => {
    let e4 = o9.current.find(({ el: a4 }) => a4 === s10);
    return e4 ? e4.state !== "visible" && (e4.state = "visible") : o9.current.push({ el: s10, state: "visible" }), () => p5(s10, j.Unmount);
  }), h3 = (0, import_react11.useRef)([]), v3 = (0, import_react11.useRef)(Promise.resolve()), T5 = (0, import_react11.useRef)({ enter: [], leave: [], idle: [] }), g3 = o3((s10, e4, a4) => {
    h3.current.splice(0), n6 && (n6.chains.current[e4] = n6.chains.current[e4].filter(([i5]) => i5 !== s10)), n6 == null || n6.chains.current[e4].push([s10, new Promise((i5) => {
      h3.current.push(i5);
    })]), n6 == null || n6.chains.current[e4].push([s10, new Promise((i5) => {
      Promise.all(T5.current[e4].map(([l7, R3]) => R3)).then(() => i5());
    })]), e4 === "enter" ? v3.current = v3.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a4(e4)) : a4(e4);
  }), f5 = o3((s10, e4, a4) => {
    Promise.all(T5.current[e4].splice(0).map(([i5, l7]) => l7)).then(() => {
      var i5;
      (i5 = h3.current.shift()) == null || i5();
    }).then(() => a4(e4));
  });
  return (0, import_react11.useMemo)(() => ({ children: o9, register: P3, unregister: p5, onStart: g3, onStop: f5, wait: v3, chains: T5 }), [P3, p5, o9, g3, f5, T5, v3]);
}
function Se() {
}
var xe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ie(t9) {
  var r6;
  let n6 = {};
  for (let o9 of xe)
    n6[o9] = (r6 = t9[o9]) != null ? r6 : Se;
  return n6;
}
function Pe(t9) {
  let n6 = (0, import_react11.useRef)(ie(t9));
  return (0, import_react11.useEffect)(() => {
    n6.current = ie(t9);
  }, [t9]), n6;
}
var Re = "div";
var oe = S.RenderStrategy;
function ye(t9, n6) {
  let { beforeEnter: r6, afterEnter: o9, beforeLeave: N4, afterLeave: H4, enter: p5, enterFrom: P3, enterTo: h3, entered: v3, leave: T5, leaveFrom: g3, leaveTo: f5, ...s10 } = t9, e4 = (0, import_react11.useRef)(null), a4 = y(e4, n6), i5 = s10.unmount ? j.Unmount : j.Hidden, { show: l7, appear: R3, initial: d9 } = Ee(), [u4, U2] = (0, import_react11.useState)(l7 ? "visible" : "hidden"), K = be(), { register: L, unregister: w3 } = K, j3 = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => L(e4), [L, e4]), (0, import_react11.useEffect)(() => {
    if (i5 === j.Hidden && e4.current) {
      if (l7 && u4 !== "visible") {
        U2("visible");
        return;
      }
      return u(u4, { ["hidden"]: () => w3(e4), ["visible"]: () => L(e4) });
    }
  }, [u4, e4, L, w3, l7, i5]);
  let k = s2({ enter: x2(p5), enterFrom: x2(P3), enterTo: x2(h3), entered: x2(v3), leave: x2(T5), leaveFrom: x2(g3), leaveTo: x2(f5) }), O2 = Pe({ beforeEnter: r6, afterEnter: o9, beforeLeave: N4, afterLeave: H4 }), G = l3();
  (0, import_react11.useEffect)(() => {
    if (G && u4 === "visible" && e4.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e4, u4, G]);
  let B = d9 && !R3, ae2 = (() => !G || B || j3.current === l7 ? "idle" : l7 ? "enter" : "leave")(), D5 = c4(0), le = o3((C2) => u(C2, { enter: () => {
    D5.addFlag(d.Opening), O2.current.beforeEnter();
  }, leave: () => {
    D5.addFlag(d.Closing), O2.current.beforeLeave();
  }, idle: () => {
  } })), ue = o3((C2) => u(C2, { enter: () => {
    D5.removeFlag(d.Opening), O2.current.afterEnter();
  }, leave: () => {
    D5.removeFlag(d.Closing), O2.current.afterLeave();
  }, idle: () => {
  } })), V = re(() => {
    U2("hidden"), w3(e4);
  }, K);
  D2({ container: e4, classes: k, direction: ae2, onStart: s2((C2) => {
    V.onStart(e4, C2, le);
  }), onStop: s2((C2) => {
    V.onStop(e4, C2, ue), C2 === "leave" && !M(V) && (U2("hidden"), w3(e4));
  }) }), (0, import_react11.useEffect)(() => {
    B && (i5 === j.Hidden ? j3.current = null : j3.current = l7);
  }, [l7, B, u4]);
  let J = s10, Te = { ref: a4 };
  return R3 && l7 && d9 && (J = { ...J, className: e(s10.className, ...k.current.enter, ...k.current.enterFrom) }), import_react11.default.createElement(_.Provider, { value: V }, import_react11.default.createElement(c2, { value: u(u4, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | D5.flags }, X({ ourProps: Te, theirProps: J, defaultTag: Re, features: oe, visible: u4 === "visible", name: "Transition.Child" })));
}
function Ne(t9, n6) {
  let { show: r6, appear: o9 = false, unmount: N4, ...H4 } = t9, p5 = (0, import_react11.useRef)(null), P3 = y(p5, n6);
  l3();
  let h3 = C();
  if (r6 === void 0 && h3 !== null && (r6 = (h3 & d.Open) === d.Open), ![true, false].includes(r6))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, T5] = (0, import_react11.useState)(r6 ? "visible" : "hidden"), g3 = re(() => {
    T5("hidden");
  }), [f5, s10] = (0, import_react11.useState)(true), e4 = (0, import_react11.useRef)([r6]);
  l2(() => {
    f5 !== false && e4.current[e4.current.length - 1] !== r6 && (e4.current.push(r6), s10(false));
  }, [e4, r6]);
  let a4 = (0, import_react11.useMemo)(() => ({ show: r6, appear: o9, initial: f5 }), [r6, o9, f5]);
  (0, import_react11.useEffect)(() => {
    if (r6)
      T5("visible");
    else if (!M(g3))
      T5("hidden");
    else {
      let d9 = p5.current;
      if (!d9)
        return;
      let u4 = d9.getBoundingClientRect();
      u4.x === 0 && u4.y === 0 && u4.width === 0 && u4.height === 0 && T5("hidden");
    }
  }, [r6, g3]);
  let i5 = { unmount: N4 }, l7 = o3(() => {
    var d9;
    f5 && s10(false), (d9 = t9.beforeEnter) == null || d9.call(t9);
  }), R3 = o3(() => {
    var d9;
    f5 && s10(false), (d9 = t9.beforeLeave) == null || d9.call(t9);
  });
  return import_react11.default.createElement(_.Provider, { value: g3 }, import_react11.default.createElement(I.Provider, { value: a4 }, X({ ourProps: { ...i5, as: import_react11.Fragment, children: import_react11.default.createElement(se, { ref: P3, ...i5, ...H4, beforeEnter: l7, beforeLeave: R3 }) }, theirProps: {}, defaultTag: import_react11.Fragment, features: oe, visible: v3 === "visible", name: "Transition" })));
}
function He(t9, n6) {
  let r6 = (0, import_react11.useContext)(I) !== null, o9 = C() !== null;
  return import_react11.default.createElement(import_react11.default.Fragment, null, !r6 && o9 ? import_react11.default.createElement(z, { ref: n6, ...t9 }) : import_react11.default.createElement(se, { ref: n6, ...t9 }));
}
var z = D(Ne);
var se = D(ye);
var De = D(He);
var $e = Object.assign(z, { Child: De, Root: z });

// node_modules/@heroicons/react/outline/esm/ClockIcon.js
var React = __toESM(require_react(), 1);
function ClockIcon(props, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}
var ForwardRef = React.forwardRef(ClockIcon);
var ClockIcon_default = ForwardRef;

// node_modules/@heroicons/react/outline/esm/CloudUploadIcon.js
var React2 = __toESM(require_react(), 1);
function CloudUploadIcon(props, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  }));
}
var ForwardRef2 = React2.forwardRef(CloudUploadIcon);
var CloudUploadIcon_default = ForwardRef2;

// node_modules/@heroicons/react/outline/esm/CogIcon.js
var React3 = __toESM(require_react(), 1);
function CogIcon(props, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }), /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}
var ForwardRef3 = React3.forwardRef(CogIcon);
var CogIcon_default = ForwardRef3;

// node_modules/@heroicons/react/outline/esm/HomeIcon.js
var React4 = __toESM(require_react(), 1);
function HomeIcon(props, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }));
}
var ForwardRef4 = React4.forwardRef(HomeIcon);
var HomeIcon_default = ForwardRef4;

// node_modules/@heroicons/react/outline/esm/LockClosedIcon.js
var React5 = __toESM(require_react(), 1);
function LockClosedIcon(props, svgRef) {
  return /* @__PURE__ */ React5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React5.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  }));
}
var ForwardRef5 = React5.forwardRef(LockClosedIcon);
var LockClosedIcon_default = ForwardRef5;

// node_modules/@heroicons/react/outline/esm/MenuAlt1Icon.js
var React6 = __toESM(require_react(), 1);
function MenuAlt1Icon(props, svgRef) {
  return /* @__PURE__ */ React6.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React6.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 12h8m-8 6h16"
  }));
}
var ForwardRef6 = React6.forwardRef(MenuAlt1Icon);
var MenuAlt1Icon_default = ForwardRef6;

// node_modules/@heroicons/react/outline/esm/MenuIcon.js
var React7 = __toESM(require_react(), 1);
function MenuIcon(props, svgRef) {
  return /* @__PURE__ */ React7.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React7.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 12h16M4 18h16"
  }));
}
var ForwardRef7 = React7.forwardRef(MenuIcon);
var MenuIcon_default = ForwardRef7;

// node_modules/@heroicons/react/outline/esm/RefreshIcon.js
var React8 = __toESM(require_react(), 1);
function RefreshIcon(props, svgRef) {
  return /* @__PURE__ */ React8.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
  }));
}
var ForwardRef8 = React8.forwardRef(RefreshIcon);
var RefreshIcon_default = ForwardRef8;

// node_modules/@heroicons/react/outline/esm/ServerIcon.js
var React9 = __toESM(require_react(), 1);
function ServerIcon(props, svgRef) {
  return /* @__PURE__ */ React9.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React9.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
  }));
}
var ForwardRef9 = React9.forwardRef(ServerIcon);
var ServerIcon_default = ForwardRef9;

// node_modules/@heroicons/react/outline/esm/ShieldCheckIcon.js
var React10 = __toESM(require_react(), 1);
function ShieldCheckIcon(props, svgRef) {
  return /* @__PURE__ */ React10.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React10.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
  }));
}
var ForwardRef10 = React10.forwardRef(ShieldCheckIcon);
var ShieldCheckIcon_default = ForwardRef10;

// node_modules/@heroicons/react/outline/esm/ViewListIcon.js
var React11 = __toESM(require_react(), 1);
function ViewListIcon(props, svgRef) {
  return /* @__PURE__ */ React11.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React11.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 10h16M4 14h16M4 18h16"
  }));
}
var ForwardRef11 = React11.forwardRef(ViewListIcon);
var ViewListIcon_default = ForwardRef11;

// node_modules/@heroicons/react/outline/esm/XIcon.js
var React12 = __toESM(require_react(), 1);
function XIcon(props, svgRef) {
  return /* @__PURE__ */ React12.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React12.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef12 = React12.forwardRef(XIcon);
var XIcon_default = ForwardRef12;

// node_modules/@heroicons/react/solid/esm/ChevronRightIcon.js
var React13 = __toESM(require_react(), 1);
function ChevronRightIcon(props, svgRef) {
  return /* @__PURE__ */ React13.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React13.createElement("path", {
    fillRule: "evenodd",
    d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
    clipRule: "evenodd"
  }));
}
var ForwardRef13 = React13.forwardRef(ChevronRightIcon);
var ChevronRightIcon_default = ForwardRef13;

// node_modules/@heroicons/react/solid/esm/DotsVerticalIcon.js
var React14 = __toESM(require_react(), 1);
function DotsVerticalIcon(props, svgRef) {
  return /* @__PURE__ */ React14.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React14.createElement("path", {
    d: "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
  }));
}
var ForwardRef14 = React14.forwardRef(DotsVerticalIcon);
var DotsVerticalIcon_default = ForwardRef14;

// node_modules/@heroicons/react/solid/esm/ExternalLinkIcon.js
var React15 = __toESM(require_react(), 1);
function ExternalLinkIcon(props, svgRef) {
  return /* @__PURE__ */ React15.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React15.createElement("path", {
    d: "M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
  }), /* @__PURE__ */ React15.createElement("path", {
    d: "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
  }));
}
var ForwardRef15 = React15.forwardRef(ExternalLinkIcon);
var ExternalLinkIcon_default = ForwardRef15;

// node_modules/@heroicons/react/solid/esm/SearchIcon.js
var React16 = __toESM(require_react(), 1);
function SearchIcon(props, svgRef) {
  return /* @__PURE__ */ React16.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React16.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
    clipRule: "evenodd"
  }));
}
var ForwardRef16 = React16.forwardRef(SearchIcon);
var SearchIcon_default = ForwardRef16;

// node_modules/@heroicons/react/solid/esm/SelectorIcon.js
var React17 = __toESM(require_react(), 1);
function SelectorIcon(props, svgRef) {
  return /* @__PURE__ */ React17.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React17.createElement("path", {
    fillRule: "evenodd",
    d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
    clipRule: "evenodd"
  }));
}
var ForwardRef17 = React17.forwardRef(SelectorIcon);
var SelectorIcon_default = ForwardRef17;

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react12 = __toESM(require_react(), 1);
var o6;
var I2 = (o6 = import_react12.default.useId) != null ? o6 : function() {
  let n6 = l3(), [e4, u4] = import_react12.default.useState(n6 ? () => s.nextId() : null);
  return l2(() => {
    e4 === null && u4(s.nextId());
  }, [e4]), e4 != null ? "" + e4 : void 0;
};

// node_modules/@headlessui/react/dist/utils/owner.js
function e2(r6) {
  return s.isServer ? null : r6 instanceof Node ? r6.ownerDocument : r6 != null && r6.hasOwnProperty("current") && r6.current instanceof Node ? r6.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c6 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var M2 = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M2 || {});
var N2 = ((o9) => (o9[o9.Error = 0] = "Error", o9[o9.Overflow = 1] = "Overflow", o9[o9.Success = 2] = "Success", o9[o9.Underflow = 3] = "Underflow", o9))(N2 || {});
var F2 = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(F2 || {});
function f3(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(c6)).sort((r6, t9) => Math.sign((r6.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T3 = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(T3 || {});
function h2(e4, r6 = 0) {
  var t9;
  return e4 === ((t9 = e2(e4)) == null ? void 0 : t9.body) ? false : u(r6, { [0]() {
    return e4.matches(c6);
  }, [1]() {
    let l7 = e4;
    for (; l7 !== null; ) {
      if (l7.matches(c6))
        return true;
      l7 = l7.parentElement;
    }
    return false;
  } });
}
function D3(e4) {
  let r6 = e2(e4);
  o4().nextFrame(() => {
    r6 && !h2(r6.activeElement, 0) && y4(e4);
  });
}
var w2 = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(w2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y4(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var S2 = ["textarea", "input"].join(",");
function H(e4) {
  var r6, t9;
  return (t9 = (r6 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r6.call(e4, S2)) != null ? t9 : false;
}
function I3(e4, r6 = (t9) => t9) {
  return e4.slice().sort((t9, l7) => {
    let o9 = r6(t9), i5 = r6(l7);
    if (o9 === null || i5 === null)
      return 0;
    let n6 = o9.compareDocumentPosition(i5);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _2(e4, r6) {
  return O(f3(), r6, { relativeTo: e4 });
}
function O(e4, r6, { sorted: t9 = true, relativeTo: l7 = null, skipElements: o9 = [] } = {}) {
  let i5 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4.ownerDocument, n6 = Array.isArray(e4) ? t9 ? I3(e4) : e4 : f3(e4);
  o9.length > 0 && n6.length > 1 && (n6 = n6.filter((s10) => !o9.includes(s10))), l7 = l7 != null ? l7 : i5.activeElement;
  let E4 = (() => {
    if (r6 & 5)
      return 1;
    if (r6 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r6 & 1)
      return 0;
    if (r6 & 2)
      return Math.max(0, n6.indexOf(l7)) - 1;
    if (r6 & 4)
      return Math.max(0, n6.indexOf(l7)) + 1;
    if (r6 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p5 = r6 & 32 ? { preventScroll: true } : {}, d9 = 0, a4 = n6.length, u4;
  do {
    if (d9 >= a4 || d9 + a4 <= 0)
      return 0;
    let s10 = x3 + d9;
    if (r6 & 16)
      s10 = (s10 + a4) % a4;
    else {
      if (s10 < 0)
        return 3;
      if (s10 >= a4)
        return 1;
    }
    u4 = n6[s10], u4 == null || u4.focus(p5), d9 += E4;
  } while (u4 !== i5.activeElement);
  return r6 & 6 && H(u4) && u4.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react13 = __toESM(require_react(), 1);
function d4(e4, r6, n6) {
  let o9 = s2(r6);
  (0, import_react13.useEffect)(() => {
    function t9(u4) {
      o9.current(u4);
    }
    return document.addEventListener(e4, t9, n6), () => document.removeEventListener(e4, t9, n6);
  }, [e4, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react14 = __toESM(require_react(), 1);
function s4(e4, r6, n6) {
  let o9 = s2(r6);
  (0, import_react14.useEffect)(() => {
    function t9(i5) {
      o9.current(i5);
    }
    return window.addEventListener(e4, t9, n6), () => window.removeEventListener(e4, t9, n6);
  }, [e4, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function H2(s10, m5, i5 = true) {
  let l7 = (0, import_react15.useRef)(false);
  (0, import_react15.useEffect)(() => {
    requestAnimationFrame(() => {
      l7.current = i5;
    });
  }, [i5]);
  function a4(e4, o9) {
    if (!l7.current || e4.defaultPrevented)
      return;
    let n6 = o9(e4);
    if (n6 === null || !n6.getRootNode().contains(n6))
      return;
    let E4 = function r6(t9) {
      return typeof t9 == "function" ? r6(t9()) : Array.isArray(t9) || t9 instanceof Set ? t9 : [t9];
    }(s10);
    for (let r6 of E4) {
      if (r6 === null)
        continue;
      let t9 = r6 instanceof HTMLElement ? r6 : r6.current;
      if (t9 != null && t9.contains(n6) || e4.composed && e4.composedPath().includes(t9))
        return;
    }
    return !h2(n6, T3.Loose) && n6.tabIndex !== -1 && e4.preventDefault(), m5(e4, n6);
  }
  let u4 = (0, import_react15.useRef)(null);
  d4("mousedown", (e4) => {
    var o9, n6;
    l7.current && (u4.current = ((n6 = (o9 = e4.composedPath) == null ? void 0 : o9.call(e4)) == null ? void 0 : n6[0]) || e4.target);
  }, true), d4("click", (e4) => {
    u4.current && (a4(e4, () => u4.current), u4.current = null);
  }, true), s4("blur", (e4) => a4(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react16 = __toESM(require_react(), 1);
function i3(t9) {
  var n6;
  if (t9.type)
    return t9.type;
  let e4 = (n6 = t9.as) != null ? n6 : "button";
  if (typeof e4 == "string" && e4.toLowerCase() === "button")
    return "button";
}
function s5(t9, e4) {
  let [n6, u4] = (0, import_react16.useState)(() => i3(t9));
  return l2(() => {
    u4(i3(t9));
  }, [t9.type, t9.as]), l2(() => {
    n6 || e4.current && e4.current instanceof HTMLButtonElement && !e4.current.hasAttribute("type") && u4("button");
  }, [n6, e4]), n6;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r4(n6) {
  let e4 = n6.parentElement, l7 = null;
  for (; e4 && !(e4 instanceof HTMLFieldSetElement); )
    e4 instanceof HTMLLegendElement && (l7 = e4), e4 = e4.parentElement;
  let t9 = (e4 == null ? void 0 : e4.getAttribute("disabled")) === "";
  return t9 && i4(l7) ? false : t9;
}
function i4(n6) {
  if (!n6)
    return false;
  let e4 = n6.previousElementSibling;
  for (; e4 !== null; ) {
    if (e4 instanceof HTMLLegendElement)
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p3 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(p3 || {});
function s6(t9, o9) {
  let { features: n6 = 1, ...e4 } = t9, d9 = { ref: o9, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d9, theirProps: e4, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c8 = D(s6);

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r6) => (r6.Space = " ", r6.Enter = "Enter", r6.Escape = "Escape", r6.Backspace = "Backspace", r6.Delete = "Delete", r6.ArrowLeft = "ArrowLeft", r6.ArrowUp = "ArrowUp", r6.ArrowRight = "ArrowRight", r6.ArrowDown = "ArrowDown", r6.Home = "Home", r6.End = "End", r6.PageUp = "PageUp", r6.PageDown = "PageDown", r6.Tab = "Tab", r6))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react17 = __toESM(require_react(), 1);
var s7 = ((r6) => (r6[r6.Forwards = 0] = "Forwards", r6[r6.Backwards = 1] = "Backwards", r6))(s7 || {});
function n3() {
  let e4 = (0, import_react17.useRef)(0);
  return s4("keydown", (o9) => {
    o9.key === "Tab" && (e4.current = o9.shiftKey ? 1 : 0);
  }, true), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react18 = __toESM(require_react(), 1);
function n4(...e4) {
  return (0, import_react18.useMemo)(() => e2(...e4), [...e4]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react19 = __toESM(require_react(), 1);
function E2(n6, e4, a4, t9) {
  let i5 = s2(a4);
  (0, import_react19.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r6(o9) {
      i5.current(o9);
    }
    return n6.addEventListener(e4, r6, t9), () => n6.removeEventListener(e4, r6, t9);
  }, [n6, e4, t9]);
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react20 = __toESM(require_react(), 1);
var e3 = (0, import_react20.createContext)(false);
function l6() {
  return (0, import_react20.useContext)(e3);
}
function P(o9) {
  return import_react20.default.createElement(e3.Provider, { value: o9.force }, o9.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react22 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react21 = __toESM(require_react(), 1);
function c10(t9) {
  let r6 = o3(t9), e4 = (0, import_react21.useRef)(false);
  (0, import_react21.useEffect)(() => (e4.current = false, () => {
    e4.current = true, t4(() => {
      e4.current && r6();
    });
  }), [r6]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F3(p5) {
  let l7 = l6(), n6 = (0, import_react22.useContext)(v2), e4 = n4(p5), [a4, o9] = (0, import_react22.useState)(() => {
    if (!l7 && n6 !== null || s.isServer)
      return null;
    let t9 = e4 == null ? void 0 : e4.getElementById("headlessui-portal-root");
    if (t9)
      return t9;
    if (e4 === null)
      return null;
    let r6 = e4.createElement("div");
    return r6.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(r6);
  });
  return (0, import_react22.useEffect)(() => {
    a4 !== null && (e4 != null && e4.body.contains(a4) || e4 == null || e4.body.appendChild(a4));
  }, [a4, e4]), (0, import_react22.useEffect)(() => {
    l7 || n6 !== null && o9(n6.current);
  }, [n6, o9, l7]), a4;
}
var U = import_react22.Fragment;
function N3(p5, l7) {
  let n6 = p5, e4 = (0, import_react22.useRef)(null), a4 = y(T2((u4) => {
    e4.current = u4;
  }), l7), o9 = n4(e4), t9 = F3(e4), [r6] = (0, import_react22.useState)(() => {
    var u4;
    return s.isServer ? null : (u4 = o9 == null ? void 0 : o9.createElement("div")) != null ? u4 : null;
  }), i5 = (0, import_react22.useContext)(f4), C2 = l3();
  return l2(() => {
    !t9 || !r6 || t9.contains(r6) || (r6.setAttribute("data-headlessui-portal", ""), t9.appendChild(r6));
  }, [t9, r6]), l2(() => {
    if (r6 && i5)
      return i5.register(r6);
  }, [i5, r6]), c10(() => {
    var u4;
    !t9 || !r6 || (r6 instanceof Node && t9.contains(r6) && t9.removeChild(r6), t9.childNodes.length <= 0 && ((u4 = t9.parentElement) == null || u4.removeChild(t9)));
  }), C2 ? !t9 || !r6 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a4 }, theirProps: n6, defaultTag: U, name: "Portal" }), r6) : null;
}
var S3 = import_react22.Fragment;
var v2 = (0, import_react22.createContext)(null);
function j2(p5, l7) {
  let { target: n6, ...e4 } = p5, o9 = { ref: y(l7) };
  return import_react22.default.createElement(v2.Provider, { value: n6 }, X({ ourProps: o9, theirProps: e4, defaultTag: S3, name: "Popover.Group" }));
}
var f4 = (0, import_react22.createContext)(null);
function ae() {
  let p5 = (0, import_react22.useContext)(f4), l7 = (0, import_react22.useRef)([]), n6 = o3((o9) => (l7.current.push(o9), p5 && p5.register(o9), () => e4(o9))), e4 = o3((o9) => {
    let t9 = l7.current.indexOf(o9);
    t9 !== -1 && l7.current.splice(t9, 1), p5 && p5.unregister(o9);
  }), a4 = (0, import_react22.useMemo)(() => ({ register: n6, unregister: e4, portals: l7 }), [n6, e4, l7]);
  return [l7, (0, import_react22.useMemo)(() => function({ children: t9 }) {
    return import_react22.default.createElement(f4.Provider, { value: a4 }, t9);
  }, [a4])];
}
var D4 = D(N3);
var I4 = D(j2);
var pe = Object.assign(D4, { Group: I4 });

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react23 = __toESM(require_react(), 1);
function p4({ defaultContainers: f5 = [], portals: o9 } = {}) {
  let t9 = (0, import_react23.useRef)(null), i5 = n4(t9), u4 = o3(() => {
    var r6;
    let n6 = [];
    for (let e4 of f5)
      e4 !== null && (e4 instanceof HTMLElement ? n6.push(e4) : "current" in e4 && e4.current instanceof HTMLElement && n6.push(e4.current));
    if (o9 != null && o9.current)
      for (let e4 of o9.current)
        n6.push(e4);
    for (let e4 of (r6 = i5 == null ? void 0 : i5.querySelectorAll("html > *, body > *")) != null ? r6 : [])
      e4 !== document.body && e4 !== document.head && e4 instanceof HTMLElement && e4.id !== "headlessui-portal-root" && (e4.contains(t9.current) || n6.some((c11) => e4.contains(c11)) || n6.push(e4));
    return n6;
  });
  return { resolveContainers: u4, contains: o3((n6) => u4().some((r6) => r6.contains(n6))), mainTreeNodeRef: t9, MainTreeNode: (0, import_react23.useMemo)(() => function() {
    return import_react23.default.createElement(c8, { features: p3.Hidden, ref: t9 });
  }, [t9]) };
}

export {
  l2 as l,
  s2 as s,
  t4 as t,
  o4 as o,
  p2 as p,
  o3 as o2,
  l3 as l2,
  I2 as I,
  u,
  e2 as e,
  M2 as M,
  N2 as N,
  f3 as f,
  T3 as T,
  h2 as h,
  D3 as D,
  y4 as y,
  I3 as I2,
  _2 as _,
  O,
  H2 as H,
  s5 as s2,
  T2,
  y as y2,
  S,
  X,
  D as D2,
  r4 as r,
  p3 as p2,
  c8 as c,
  d,
  C,
  c2,
  o8 as o3,
  s7 as s3,
  n3 as n,
  f as f2,
  n4 as n2,
  E2 as E,
  c10 as c3,
  P,
  ae,
  pe,
  p4 as p3,
  $e,
  ClockIcon_default,
  CloudUploadIcon_default,
  CogIcon_default,
  HomeIcon_default,
  LockClosedIcon_default,
  MenuAlt1Icon_default,
  MenuIcon_default,
  RefreshIcon_default,
  ServerIcon_default,
  ShieldCheckIcon_default,
  ViewListIcon_default,
  XIcon_default,
  ChevronRightIcon_default,
  DotsVerticalIcon_default,
  ExternalLinkIcon_default,
  SearchIcon_default,
  SelectorIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-ZC2RBIFX.js.map
