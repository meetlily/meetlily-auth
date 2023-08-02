import {
  $e,
  C,
  ChevronRightIcon_default,
  ClockIcon_default,
  D,
  D2,
  DotsVerticalIcon_default,
  E,
  H,
  HomeIcon_default,
  I,
  I2,
  M,
  MenuAlt1Icon_default,
  N,
  O,
  P,
  S,
  SearchIcon_default,
  SelectorIcon_default,
  T,
  ViewListIcon_default,
  X,
  XIcon_default,
  _,
  ae,
  c,
  c2,
  c3,
  d,
  e,
  f2 as f,
  h,
  l,
  l2,
  n,
  n2,
  o,
  o2,
  o3,
  p,
  p2,
  p3,
  pe,
  r,
  s2 as s,
  s3 as s2,
  t,
  u,
  y,
  y2
} from "/build/_shared/chunk-ZC2RBIFX.js";
import {
  useUser
} from "/build/_shared/chunk-5OHUETEV.js";
import "/build/_shared/chunk-PTRPXHZV.js";
import {
  require_note
} from "/build/_shared/chunk-OLP4QJ4K.js";
import {
  require_node
} from "/build/_shared/chunk-3K2JK6MY.js";
import {
  require_session
} from "/build/_shared/chunk-WLTRNBV5.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-6L4I7JCO.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/dashboard.jsx
var import_node2 = __toESM(require_node());

// app/components/dashboard/main.jsx
var import_node = __toESM(require_node());
var import_note = __toESM(require_note());
var import_react11 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react = __toESM(require_react(), 1);
function F({ container: e3, accept: t7, walk: r4, enabled: c7 = true }) {
  let o6 = (0, import_react.useRef)(t7), l7 = (0, import_react.useRef)(r4);
  (0, import_react.useEffect)(() => {
    o6.current = t7, l7.current = r4;
  }, [t7, r4]), l(() => {
    if (!e3 || !c7)
      return;
    let n3 = e(e3);
    if (!n3)
      return;
    let f6 = o6.current, p7 = l7.current, d5 = Object.assign((i2) => f6(i2), { acceptNode: f6 }), u7 = n3.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, d5, false);
    for (; u7.nextNode(); )
      p7(u7.currentNode);
  }, [e3, c7, o6, l7]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r4) {
  throw new Error("Unexpected object: " + r4);
}
var a = ((e3) => (e3[e3.First = 0] = "First", e3[e3.Previous = 1] = "Previous", e3[e3.Next = 2] = "Next", e3[e3.Last = 3] = "Last", e3[e3.Specific = 4] = "Specific", e3[e3.Nothing = 5] = "Nothing", e3))(a || {});
function x(r4, n3) {
  let t7 = n3.resolveItems();
  if (t7.length <= 0)
    return null;
  let l7 = n3.resolveActiveIndex(), s6 = l7 != null ? l7 : -1, d5 = (() => {
    switch (r4.focus) {
      case 0:
        return t7.findIndex((e3) => !n3.resolveDisabled(e3));
      case 1: {
        let e3 = t7.slice().reverse().findIndex((i2, c7, u7) => s6 !== -1 && u7.length - c7 - 1 >= s6 ? false : !n3.resolveDisabled(i2));
        return e3 === -1 ? e3 : t7.length - 1 - e3;
      }
      case 2:
        return t7.findIndex((e3, i2) => i2 <= s6 ? false : !n3.resolveDisabled(e3));
      case 3: {
        let e3 = t7.slice().reverse().findIndex((i2) => !n3.resolveDisabled(i2));
        return e3 === -1 ? e3 : t7.length - 1 - e3;
      }
      case 4:
        return t7.findIndex((e3) => n3.resolveId(e3) === r4.id);
      case 5:
        return null;
      default:
        f2(r4);
    }
  })();
  return d5 === -1 ? l7 : d5;
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react2 = __toESM(require_react(), 1);
function m2(u7, t7) {
  let e3 = (0, import_react2.useRef)([]), r4 = o2(u7);
  (0, import_react2.useEffect)(() => {
    let o6 = [...e3.current];
    for (let [n3, a8] of t7.entries())
      if (e3.current[n3] !== a8) {
        let l7 = r4(t7, o6);
        return e3.current = t7, l7;
      }
  }, [r4, ...t7]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react3 = __toESM(require_react(), 1);
function t2(e3) {
  return [e3.screenX, e3.screenY];
}
function u2() {
  let e3 = (0, import_react3.useRef)([-1, -1]);
  return { wasMoved(r4) {
    let n3 = t2(r4);
    return e3.current[0] === n3[0] && e3.current[1] === n3[1] ? false : (e3.current = n3, true);
  }, update(r4) {
    e3.current = t2(r4);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t3() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t4(n3) {
  function e3() {
    document.readyState !== "loading" && (n3(), document.removeEventListener("DOMContentLoaded", e3));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e3), e3());
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P2(t7) {
  if (!t7)
    return /* @__PURE__ */ new Set();
  if (typeof t7 == "function")
    return new Set(t7());
  let r4 = /* @__PURE__ */ new Set();
  for (let e3 of t7.current)
    e3.current instanceof HTMLElement && r4.add(e3.current);
  return r4;
}
var J = "div";
var h2 = ((n3) => (n3[n3.None = 1] = "None", n3[n3.InitialFocus = 2] = "InitialFocus", n3[n3.TabLock = 4] = "TabLock", n3[n3.FocusLock = 8] = "FocusLock", n3[n3.RestoreFocus = 16] = "RestoreFocus", n3[n3.All = 30] = "All", n3))(h2 || {});
function X2(t7, r4) {
  let e3 = (0, import_react4.useRef)(null), o6 = y2(e3, r4), { initialFocus: u7, containers: i2, features: n3 = 30, ...l7 } = t7;
  l2() || (n3 = 1);
  let m6 = n2(e3);
  Y({ ownerDocument: m6 }, Boolean(n3 & 16));
  let c7 = Z({ ownerDocument: m6, container: e3, initialFocus: u7 }, Boolean(n3 & 2));
  $({ ownerDocument: m6, container: e3, containers: i2, previousActiveElement: c7 }, Boolean(n3 & 8));
  let v = n(), y6 = o2((s6) => {
    let T3 = e3.current;
    if (!T3)
      return;
    ((B) => B())(() => {
      u(v.current, { [s2.Forwards]: () => {
        O(T3, M.First, { skipElements: [s6.relatedTarget] });
      }, [s2.Backwards]: () => {
        O(T3, M.Last, { skipElements: [s6.relatedTarget] });
      } });
    });
  }), _2 = p(), b4 = (0, import_react4.useRef)(false), j2 = { ref: o6, onKeyDown(s6) {
    s6.key == "Tab" && (b4.current = true, _2.requestAnimationFrame(() => {
      b4.current = false;
    }));
  }, onBlur(s6) {
    let T3 = P2(i2);
    e3.current instanceof HTMLElement && T3.add(e3.current);
    let d5 = s6.relatedTarget;
    d5 instanceof HTMLElement && d5.dataset.headlessuiFocusGuard !== "true" && (S2(T3, d5) || (b4.current ? O(e3.current, u(v.current, { [s2.Forwards]: () => M.Next, [s2.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s6.target }) : s6.target instanceof HTMLElement && y(s6.target)));
  } };
  return import_react4.default.createElement(import_react4.default.Fragment, null, Boolean(n3 & 4) && import_react4.default.createElement(c, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }), X({ ourProps: j2, theirProps: l7, defaultTag: J, name: "FocusTrap" }), Boolean(n3 & 4) && import_react4.default.createElement(c, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }));
}
var z = D2(X2);
var ge = Object.assign(z, { features: h2 });
var a2 = [];
t4(() => {
  function t7(r4) {
    r4.target instanceof HTMLElement && r4.target !== document.body && a2[0] !== r4.target && (a2.unshift(r4.target), a2 = a2.filter((e3) => e3 != null && e3.isConnected), a2.splice(10));
  }
  window.addEventListener("click", t7, { capture: true }), window.addEventListener("mousedown", t7, { capture: true }), window.addEventListener("focus", t7, { capture: true }), document.body.addEventListener("click", t7, { capture: true }), document.body.addEventListener("mousedown", t7, { capture: true }), document.body.addEventListener("focus", t7, { capture: true });
});
function Q(t7 = true) {
  let r4 = (0, import_react4.useRef)(a2.slice());
  return m2(([e3], [o6]) => {
    o6 === true && e3 === false && t(() => {
      r4.current.splice(0);
    }), o6 === false && e3 === true && (r4.current = a2.slice());
  }, [t7, a2, r4]), o2(() => {
    var e3;
    return (e3 = r4.current.find((o6) => o6 != null && o6.isConnected)) != null ? e3 : null;
  });
}
function Y({ ownerDocument: t7 }, r4) {
  let e3 = Q(r4);
  m2(() => {
    r4 || (t7 == null ? void 0 : t7.activeElement) === (t7 == null ? void 0 : t7.body) && y(e3());
  }, [r4]), c3(() => {
    r4 && y(e3());
  });
}
function Z({ ownerDocument: t7, container: r4, initialFocus: e3 }, o6) {
  let u7 = (0, import_react4.useRef)(null), i2 = f();
  return m2(() => {
    if (!o6)
      return;
    let n3 = r4.current;
    n3 && t(() => {
      if (!i2.current)
        return;
      let l7 = t7 == null ? void 0 : t7.activeElement;
      if (e3 != null && e3.current) {
        if ((e3 == null ? void 0 : e3.current) === l7) {
          u7.current = l7;
          return;
        }
      } else if (n3.contains(l7)) {
        u7.current = l7;
        return;
      }
      e3 != null && e3.current ? y(e3.current) : O(n3, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u7.current = t7 == null ? void 0 : t7.activeElement;
    });
  }, [o6]), u7;
}
function $({ ownerDocument: t7, container: r4, containers: e3, previousActiveElement: o6 }, u7) {
  let i2 = f();
  E(t7 == null ? void 0 : t7.defaultView, "focus", (n3) => {
    if (!u7 || !i2.current)
      return;
    let l7 = P2(e3);
    r4.current instanceof HTMLElement && l7.add(r4.current);
    let m6 = o6.current;
    if (!m6)
      return;
    let c7 = n3.target;
    c7 && c7 instanceof HTMLElement ? S2(l7, c7) ? (o6.current = c7, y(c7)) : (n3.preventDefault(), n3.stopPropagation(), y(m6)) : y(o6.current);
  }, true);
}
function S2(t7, r4) {
  for (let e3 of t7)
    if (e3.contains(r4))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react5 = __toESM(require_react(), 1);
var d2 = (0, import_react5.createContext)(null);
function f4() {
  let r4 = (0, import_react5.useContext)(d2);
  if (r4 === null) {
    let t7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t7, f4), t7;
  }
  return r4;
}
function M2() {
  let [r4, t7] = (0, import_react5.useState)([]);
  return [r4.length > 0 ? r4.join(" ") : void 0, (0, import_react5.useMemo)(() => function(e3) {
    let i2 = o2((s6) => (t7((o6) => [...o6, s6]), () => t7((o6) => {
      let p7 = o6.slice(), c7 = p7.indexOf(s6);
      return c7 !== -1 && p7.splice(c7, 1), p7;
    }))), n3 = (0, import_react5.useMemo)(() => ({ register: i2, slot: e3.slot, name: e3.name, props: e3.props }), [i2, e3.slot, e3.name, e3.props]);
    return import_react5.default.createElement(d2.Provider, { value: n3 }, e3.children);
  }, [t7])];
}
var S3 = "p";
function h3(r4, t7) {
  let a8 = I(), { id: e3 = `headlessui-description-${a8}`, ...i2 } = r4, n3 = f4(), s6 = y2(t7);
  l(() => n3.register(e3), [e3, n3.register]);
  let o6 = { ref: s6, ...n3.props, id: e3 };
  return X({ ourProps: o6, theirProps: i2, slot: n3.slot || {}, defaultTag: S3, name: n3.name || "Description" });
}
var y3 = D2(h3);
var b = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react6 = __toESM(require_react(), 1);
var a3 = (0, import_react6.createContext)(() => {
});
a3.displayName = "StackContext";
var s4 = ((e3) => (e3[e3.Add = 0] = "Add", e3[e3.Remove = 1] = "Remove", e3))(s4 || {});
function x2() {
  return (0, import_react6.useContext)(a3);
}
function M3({ children: i2, onUpdate: r4, type: e3, element: n3, enabled: u7 }) {
  let l7 = x2(), o6 = o2((...t7) => {
    r4 == null || r4(...t7), l7(...t7);
  });
  return l(() => {
    let t7 = u7 === void 0 || u7 === true;
    return t7 && o6(0, e3, n3), () => {
      t7 && o6(1, e3, n3);
    };
  }, [o6, e3, n3, u7]), import_react6.default.createElement(a3.Provider, { value: o6 }, i2);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l4 = __toESM(require_react(), 1);
function i(e3, t7) {
  return e3 === t7 && (e3 !== 0 || 1 / e3 === 1 / t7) || e3 !== e3 && t7 !== t7;
}
var d4 = typeof Object.is == "function" ? Object.is : i;
var { useState: u4, useEffect: h4, useLayoutEffect: f5, useDebugValue: p4 } = l4;
function y4(e3, t7, c7) {
  const a8 = t7(), [{ inst: n3 }, o6] = u4({ inst: { value: a8, getSnapshot: t7 } });
  return f5(() => {
    n3.value = a8, n3.getSnapshot = t7, r2(n3) && o6({ inst: n3 });
  }, [e3, a8, t7]), h4(() => (r2(n3) && o6({ inst: n3 }), e3(() => {
    r2(n3) && o6({ inst: n3 });
  })), [e3]), p4(a8), a8;
}
function r2(e3) {
  const t7 = e3.getSnapshot, c7 = e3.value;
  try {
    const a8 = t7();
    return !d4(c7, a8);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t5(r4, e3, n3) {
  return e3();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r3 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s5 = !r3;
var c5 = s5 ? t5 : y4;
var a4 = "useSyncExternalStore" in e2 ? ((n3) => n3.useSyncExternalStore)(e2) : c5;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S4(t7) {
  return a4(t7.subscribe, t7.getSnapshot, t7.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a5(o6, r4) {
  let t7 = o6(), n3 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t7;
  }, subscribe(e3) {
    return n3.add(e3), () => n3.delete(e3);
  }, dispatch(e3, ...s6) {
    let i2 = r4[e3].call(t7, ...s6);
    i2 && (t7 = i2, n3.forEach((c7) => c7()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c6() {
  let o6;
  return { before({ doc: e3 }) {
    var l7;
    let n3 = e3.documentElement;
    o6 = ((l7 = e3.defaultView) != null ? l7 : window).innerWidth - n3.clientWidth;
  }, after({ doc: e3, d: n3 }) {
    let t7 = e3.documentElement, l7 = t7.clientWidth - t7.offsetWidth, r4 = o6 - l7;
    n3.style(t7, "paddingRight", `${r4}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p5() {
  if (!t3())
    return {};
  let o6;
  return { before() {
    o6 = window.pageYOffset;
  }, after({ doc: r4, d: l7, meta: s6 }) {
    function i2(e3) {
      return s6.containers.flatMap((t7) => t7()).some((t7) => t7.contains(e3));
    }
    l7.style(r4.body, "marginTop", `-${o6}px`), window.scrollTo(0, 0);
    let n3 = null;
    l7.addEventListener(r4, "click", (e3) => {
      if (e3.target instanceof HTMLElement)
        try {
          let t7 = e3.target.closest("a");
          if (!t7)
            return;
          let { hash: c7 } = new URL(t7.href), a8 = r4.querySelector(c7);
          a8 && !i2(a8) && (n3 = a8);
        } catch {
        }
    }, true), l7.addEventListener(r4, "touchmove", (e3) => {
      e3.target instanceof HTMLElement && !i2(e3.target) && e3.preventDefault();
    }, { passive: false }), l7.add(() => {
      window.scrollTo(0, window.pageYOffset + o6), n3 && n3.isConnected && (n3.scrollIntoView({ block: "nearest" }), n3 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l5() {
  return { before({ doc: e3, d: o6 }) {
    o6.style(e3.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m5(e3) {
  let n3 = {};
  for (let t7 of e3)
    Object.assign(n3, t7(n3));
  return n3;
}
var a6 = a5(() => /* @__PURE__ */ new Map(), { PUSH(e3, n3) {
  var o6;
  let t7 = (o6 = this.get(e3)) != null ? o6 : { doc: e3, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t7.count++, t7.meta.add(n3), this.set(e3, t7), this;
}, POP(e3, n3) {
  let t7 = this.get(e3);
  return t7 && (t7.count--, t7.meta.delete(n3)), this;
}, SCROLL_PREVENT({ doc: e3, d: n3, meta: t7 }) {
  let o6 = { doc: e3, d: n3, meta: m5(t7) }, c7 = [p5(), c6(), l5()];
  c7.forEach(({ before: r4 }) => r4 == null ? void 0 : r4(o6)), c7.forEach(({ after: r4 }) => r4 == null ? void 0 : r4(o6));
}, SCROLL_ALLOW({ d: e3 }) {
  e3.dispose();
}, TEARDOWN({ doc: e3 }) {
  this.delete(e3);
} });
a6.subscribe(() => {
  let e3 = a6.getSnapshot(), n3 = /* @__PURE__ */ new Map();
  for (let [t7] of e3)
    n3.set(t7, t7.documentElement.style.overflow);
  for (let t7 of e3.values()) {
    let o6 = n3.get(t7.doc) === "hidden", c7 = t7.count !== 0;
    (c7 && !o6 || !c7 && o6) && a6.dispatch(t7.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t7), t7.count === 0 && a6.dispatch("TEARDOWN", t7);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p6(e3, r4, n3) {
  let f6 = S4(a6), o6 = e3 ? f6.get(e3) : void 0, i2 = o6 ? o6.count > 0 : false;
  return l(() => {
    if (!(!e3 || !r4))
      return a6.dispatch("PUSH", e3, n3), () => a6.dispatch("POP", e3, n3);
  }, [r4, e3]), i2;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u5 = /* @__PURE__ */ new Map();
var t6 = /* @__PURE__ */ new Map();
function h5(r4, l7 = true) {
  l(() => {
    var o6;
    if (!l7)
      return;
    let e3 = typeof r4 == "function" ? r4() : r4.current;
    if (!e3)
      return;
    function a8() {
      var d5;
      if (!e3)
        return;
      let i2 = (d5 = t6.get(e3)) != null ? d5 : 1;
      if (i2 === 1 ? t6.delete(e3) : t6.set(e3, i2 - 1), i2 !== 1)
        return;
      let n3 = u5.get(e3);
      n3 && (n3["aria-hidden"] === null ? e3.removeAttribute("aria-hidden") : e3.setAttribute("aria-hidden", n3["aria-hidden"]), e3.inert = n3.inert, u5.delete(e3));
    }
    let f6 = (o6 = t6.get(e3)) != null ? o6 : 0;
    return t6.set(e3, f6 + 1), f6 !== 0 || (u5.set(e3, { "aria-hidden": e3.getAttribute("aria-hidden"), inert: e3.inert }), e3.setAttribute("aria-hidden", "true"), e3.inert = true), a8;
  }, [r4, l7]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o6) => (o6[o6.Open = 0] = "Open", o6[o6.Closed = 1] = "Closed", o6))(_e || {});
var Ie = ((e3) => (e3[e3.SetTitleId = 0] = "SetTitleId", e3))(Ie || {});
var Me = { [0](t7, e3) {
  return t7.titleId === e3.id ? t7 : { ...t7, titleId: e3.id };
} };
var I3 = (0, import_react7.createContext)(null);
I3.displayName = "DialogContext";
function b2(t7) {
  let e3 = (0, import_react7.useContext)(I3);
  if (e3 === null) {
    let o6 = new Error(`<${t7} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o6, b2), o6;
  }
  return e3;
}
function we(t7, e3, o6 = () => [document.body]) {
  p6(t7, e3, (i2) => {
    var n3;
    return { containers: [...(n3 = i2.containers) != null ? n3 : [], o6] };
  });
}
function Be(t7, e3) {
  return u(e3.type, Me, t7, e3);
}
var He = "div";
var Ge = S.RenderStrategy | S.Static;
function Ne(t7, e3) {
  var X4;
  let o6 = I(), { id: i2 = `headlessui-dialog-${o6}`, open: n3, onClose: l7, initialFocus: s6, __demoMode: g2 = false, ...T3 } = t7, [m6, h6] = (0, import_react7.useState)(0), a8 = C();
  n3 === void 0 && a8 !== null && (n3 = (a8 & d.Open) === d.Open);
  let D4 = (0, import_react7.useRef)(null), Q2 = y2(D4, e3), f6 = n2(D4), N3 = t7.hasOwnProperty("open") || a8 !== null, U2 = t7.hasOwnProperty("onClose");
  if (!N3 && !U2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N3)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n3 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n3}`);
  if (typeof l7 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l7}`);
  let p7 = n3 ? 0 : 1, [S5, Z2] = (0, import_react7.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react7.createRef)() }), P3 = o2(() => l7(false)), W = o2((r4) => Z2({ type: 0, id: r4 })), L2 = l2() ? g2 ? false : p7 === 0 : false, F2 = m6 > 1, Y2 = (0, import_react7.useContext)(I3) !== null, [ee, te] = ae(), { resolveContainers: M4, mainTreeNodeRef: k, MainTreeNode: oe } = p3({ portals: ee, defaultContainers: [(X4 = S5.panelRef.current) != null ? X4 : D4.current] }), re = F2 ? "parent" : "leaf", $3 = a8 !== null ? (a8 & d.Closing) === d.Closing : false, ne = (() => Y2 || $3 ? false : L2)(), le = (0, import_react7.useCallback)(() => {
    var r4, c7;
    return (c7 = Array.from((r4 = f6 == null ? void 0 : f6.querySelectorAll("body > *")) != null ? r4 : []).find((d5) => d5.id === "headlessui-portal-root" ? false : d5.contains(k.current) && d5 instanceof HTMLElement)) != null ? c7 : null;
  }, [k]);
  h5(le, ne);
  let ae2 = (() => F2 ? true : L2)(), ie = (0, import_react7.useCallback)(() => {
    var r4, c7;
    return (c7 = Array.from((r4 = f6 == null ? void 0 : f6.querySelectorAll("[data-headlessui-portal]")) != null ? r4 : []).find((d5) => d5.contains(k.current) && d5 instanceof HTMLElement)) != null ? c7 : null;
  }, [k]);
  h5(ie, ae2);
  let se = (() => !(!L2 || F2))();
  H(M4, P3, se);
  let pe2 = (() => !(F2 || p7 !== 0))();
  E(f6 == null ? void 0 : f6.defaultView, "keydown", (r4) => {
    pe2 && (r4.defaultPrevented || r4.key === o3.Escape && (r4.preventDefault(), r4.stopPropagation(), P3()));
  });
  let de2 = (() => !($3 || p7 !== 0 || Y2))();
  we(f6, de2, M4), (0, import_react7.useEffect)(() => {
    if (p7 !== 0 || !D4.current)
      return;
    let r4 = new ResizeObserver((c7) => {
      for (let d5 of c7) {
        let x4 = d5.target.getBoundingClientRect();
        x4.x === 0 && x4.y === 0 && x4.width === 0 && x4.height === 0 && P3();
      }
    });
    return r4.observe(D4.current), () => r4.disconnect();
  }, [p7, D4, P3]);
  let [ue, fe2] = M2(), ge3 = (0, import_react7.useMemo)(() => [{ dialogState: p7, close: P3, setTitleId: W }, S5], [p7, S5, P3, W]), J2 = (0, import_react7.useMemo)(() => ({ open: p7 === 0 }), [p7]), Te2 = { ref: Q2, id: i2, role: "dialog", "aria-modal": p7 === 0 ? true : void 0, "aria-labelledby": S5.titleId, "aria-describedby": ue };
  return import_react7.default.createElement(M3, { type: "Dialog", enabled: p7 === 0, element: D4, onUpdate: o2((r4, c7) => {
    c7 === "Dialog" && u(r4, { [s4.Add]: () => h6((d5) => d5 + 1), [s4.Remove]: () => h6((d5) => d5 - 1) });
  }) }, import_react7.default.createElement(P, { force: true }, import_react7.default.createElement(pe, null, import_react7.default.createElement(I3.Provider, { value: ge3 }, import_react7.default.createElement(pe.Group, { target: D4 }, import_react7.default.createElement(P, { force: false }, import_react7.default.createElement(fe2, { slot: J2, name: "Dialog.Description" }, import_react7.default.createElement(ge, { initialFocus: s6, containers: M4, features: L2 ? u(re, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react7.default.createElement(te, null, X({ ourProps: Te2, theirProps: T3, slot: J2, defaultTag: He, features: Ge, visible: p7 === 0, name: "Dialog" }))))))))), import_react7.default.createElement(oe, null));
}
var Ue = "div";
function We(t7, e3) {
  let o6 = I(), { id: i2 = `headlessui-dialog-overlay-${o6}`, ...n3 } = t7, [{ dialogState: l7, close: s6 }] = b2("Dialog.Overlay"), g2 = y2(e3), T3 = o2((a8) => {
    if (a8.target === a8.currentTarget) {
      if (r(a8.currentTarget))
        return a8.preventDefault();
      a8.preventDefault(), a8.stopPropagation(), s6();
    }
  }), m6 = (0, import_react7.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return X({ ourProps: { ref: g2, id: i2, "aria-hidden": true, onClick: T3 }, theirProps: n3, slot: m6, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e2(t7, e3) {
  let o6 = I(), { id: i2 = `headlessui-dialog-backdrop-${o6}`, ...n3 } = t7, [{ dialogState: l7 }, s6] = b2("Dialog.Backdrop"), g2 = y2(e3);
  (0, import_react7.useEffect)(() => {
    if (s6.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s6.panelRef]);
  let T3 = (0, import_react7.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return import_react7.default.createElement(P, { force: true }, import_react7.default.createElement(pe, null, X({ ourProps: { ref: g2, id: i2, "aria-hidden": true }, theirProps: n3, slot: T3, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t7, e3) {
  let o6 = I(), { id: i2 = `headlessui-dialog-panel-${o6}`, ...n3 } = t7, [{ dialogState: l7 }, s6] = b2("Dialog.Panel"), g2 = y2(e3, s6.panelRef), T3 = (0, import_react7.useMemo)(() => ({ open: l7 === 0 }), [l7]), m6 = o2((a8) => {
    a8.stopPropagation();
  });
  return X({ ourProps: { ref: g2, id: i2, onClick: m6 }, theirProps: n3, slot: T3, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t7, e3) {
  let o6 = I(), { id: i2 = `headlessui-dialog-title-${o6}`, ...n3 } = t7, [{ dialogState: l7, setTitleId: s6 }] = b2("Dialog.Title"), g2 = y2(e3);
  (0, import_react7.useEffect)(() => (s6(i2), () => s6(null)), [i2, s6]);
  let T3 = (0, import_react7.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return X({ ourProps: { ref: g2, id: i2 }, theirProps: n3, slot: T3, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D2(Ne);
var qe = D2($e2);
var ze = D2(Xe);
var Qe = D2(We);
var Ze = D2(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b });

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a7 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o5(e3) {
  var r4, i2;
  let n3 = (r4 = e3.innerText) != null ? r4 : "", t7 = e3.cloneNode(true);
  if (!(t7 instanceof HTMLElement))
    return n3;
  let u7 = false;
  for (let f6 of t7.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f6.remove(), u7 = true;
  let l7 = u7 ? (i2 = t7.innerText) != null ? i2 : "" : n3;
  return a7.test(l7) && (l7 = l7.replace(a7, "")), l7;
}
function g(e3) {
  let n3 = e3.getAttribute("aria-label");
  if (typeof n3 == "string")
    return n3.trim();
  let t7 = e3.getAttribute("aria-labelledby");
  if (t7) {
    let u7 = t7.split(" ").map((l7) => {
      let r4 = document.getElementById(l7);
      if (r4) {
        let i2 = r4.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o5(r4).trim();
      }
      return null;
    }).filter(Boolean);
    if (u7.length > 0)
      return u7.join(", ");
  }
  return o5(e3).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function b3(c7) {
  let t7 = (0, import_react8.useRef)(""), r4 = (0, import_react8.useRef)("");
  return o2(() => {
    let e3 = c7.current;
    if (!e3)
      return "";
    let u7 = e3.innerText;
    if (t7.current === u7)
      return r4.current;
    let n3 = g(e3).trim().toLowerCase();
    return t7.current = u7, r4.current = n3, n3;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react9 = __toESM(require_react(), 1);
var me2 = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(me2 || {});
var de = ((r4) => (r4[r4.Pointer = 0] = "Pointer", r4[r4.Other = 1] = "Other", r4))(de || {});
var fe = ((a8) => (a8[a8.OpenMenu = 0] = "OpenMenu", a8[a8.CloseMenu = 1] = "CloseMenu", a8[a8.GoToItem = 2] = "GoToItem", a8[a8.Search = 3] = "Search", a8[a8.ClearSearch = 4] = "ClearSearch", a8[a8.RegisterItem = 5] = "RegisterItem", a8[a8.UnregisterItem = 6] = "UnregisterItem", a8))(fe || {});
function w2(e3, u7 = (r4) => r4) {
  let r4 = e3.activeItemIndex !== null ? e3.items[e3.activeItemIndex] : null, i2 = I2(u7(e3.items.slice()), (t7) => t7.dataRef.current.domRef.current), s6 = r4 ? i2.indexOf(r4) : null;
  return s6 === -1 && (s6 = null), { items: i2, activeItemIndex: s6 };
}
var Te = { [1](e3) {
  return e3.menuState === 1 ? e3 : { ...e3, activeItemIndex: null, menuState: 1 };
}, [0](e3) {
  return e3.menuState === 0 ? e3 : { ...e3, __demoMode: false, menuState: 0 };
}, [2]: (e3, u7) => {
  var s6;
  let r4 = w2(e3), i2 = x(u7, { resolveItems: () => r4.items, resolveActiveIndex: () => r4.activeItemIndex, resolveId: (t7) => t7.id, resolveDisabled: (t7) => t7.dataRef.current.disabled });
  return { ...e3, ...r4, searchQuery: "", activeItemIndex: i2, activationTrigger: (s6 = u7.trigger) != null ? s6 : 1 };
}, [3]: (e3, u7) => {
  let i2 = e3.searchQuery !== "" ? 0 : 1, s6 = e3.searchQuery + u7.value.toLowerCase(), o6 = (e3.activeItemIndex !== null ? e3.items.slice(e3.activeItemIndex + i2).concat(e3.items.slice(0, e3.activeItemIndex + i2)) : e3.items).find((l7) => {
    var m6;
    return ((m6 = l7.dataRef.current.textValue) == null ? void 0 : m6.startsWith(s6)) && !l7.dataRef.current.disabled;
  }), a8 = o6 ? e3.items.indexOf(o6) : -1;
  return a8 === -1 || a8 === e3.activeItemIndex ? { ...e3, searchQuery: s6 } : { ...e3, searchQuery: s6, activeItemIndex: a8, activationTrigger: 1 };
}, [4](e3) {
  return e3.searchQuery === "" ? e3 : { ...e3, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e3, u7) => {
  let r4 = w2(e3, (i2) => [...i2, { id: u7.id, dataRef: u7.dataRef }]);
  return { ...e3, ...r4 };
}, [6]: (e3, u7) => {
  let r4 = w2(e3, (i2) => {
    let s6 = i2.findIndex((t7) => t7.id === u7.id);
    return s6 !== -1 && i2.splice(s6, 1), i2;
  });
  return { ...e3, ...r4, activationTrigger: 1 };
} };
var U = (0, import_react9.createContext)(null);
U.displayName = "MenuContext";
function O2(e3) {
  let u7 = (0, import_react9.useContext)(U);
  if (u7 === null) {
    let r4 = new Error(`<${e3} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, O2), r4;
  }
  return u7;
}
function ye2(e3, u7) {
  return u(u7.type, Te, e3, u7);
}
var Ie2 = import_react9.Fragment;
function Me2(e3, u7) {
  let { __demoMode: r4 = false, ...i2 } = e3, s6 = (0, import_react9.useReducer)(ye2, { __demoMode: r4, menuState: r4 ? 0 : 1, buttonRef: (0, import_react9.createRef)(), itemsRef: (0, import_react9.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t7, itemsRef: o6, buttonRef: a8 }, l7] = s6, m6 = y2(u7);
  H([a8, o6], (g2, R) => {
    var p7;
    l7({ type: 1 }), h(R, T.Loose) || (g2.preventDefault(), (p7 = a8.current) == null || p7.focus());
  }, t7 === 0);
  let I4 = o2(() => {
    l7({ type: 1 });
  }), A = (0, import_react9.useMemo)(() => ({ open: t7 === 0, close: I4 }), [t7, I4]), f6 = { ref: m6 };
  return import_react9.default.createElement(U.Provider, { value: s6 }, import_react9.default.createElement(c2, { value: u(t7, { [0]: d.Open, [1]: d.Closed }) }, X({ ourProps: f6, theirProps: i2, slot: A, defaultTag: Ie2, name: "Menu" })));
}
var ge2 = "button";
function Re(e3, u7) {
  var R;
  let r4 = I(), { id: i2 = `headlessui-menu-button-${r4}`, ...s6 } = e3, [t7, o6] = O2("Menu.Button"), a8 = y2(t7.buttonRef, u7), l7 = p(), m6 = o2((p7) => {
    switch (p7.key) {
      case o3.Space:
      case o3.Enter:
      case o3.ArrowDown:
        p7.preventDefault(), p7.stopPropagation(), o6({ type: 0 }), l7.nextFrame(() => o6({ type: 2, focus: a.First }));
        break;
      case o3.ArrowUp:
        p7.preventDefault(), p7.stopPropagation(), o6({ type: 0 }), l7.nextFrame(() => o6({ type: 2, focus: a.Last }));
        break;
    }
  }), I4 = o2((p7) => {
    switch (p7.key) {
      case o3.Space:
        p7.preventDefault();
        break;
    }
  }), A = o2((p7) => {
    if (r(p7.currentTarget))
      return p7.preventDefault();
    e3.disabled || (t7.menuState === 0 ? (o6({ type: 1 }), l7.nextFrame(() => {
      var M4;
      return (M4 = t7.buttonRef.current) == null ? void 0 : M4.focus({ preventScroll: true });
    })) : (p7.preventDefault(), o6({ type: 0 })));
  }), f6 = (0, import_react9.useMemo)(() => ({ open: t7.menuState === 0 }), [t7]), g2 = { ref: a8, id: i2, type: s(e3, t7.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t7.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": e3.disabled ? void 0 : t7.menuState === 0, onKeyDown: m6, onKeyUp: I4, onClick: A };
  return X({ ourProps: g2, theirProps: s6, slot: f6, defaultTag: ge2, name: "Menu.Button" });
}
var Ae = "div";
var be = S.RenderStrategy | S.Static;
function Ee(e3, u7) {
  var M4, b4;
  let r4 = I(), { id: i2 = `headlessui-menu-items-${r4}`, ...s6 } = e3, [t7, o6] = O2("Menu.Items"), a8 = y2(t7.itemsRef, u7), l7 = n2(t7.itemsRef), m6 = p(), I4 = C(), A = (() => I4 !== null ? (I4 & d.Open) === d.Open : t7.menuState === 0)();
  (0, import_react9.useEffect)(() => {
    let n3 = t7.itemsRef.current;
    n3 && t7.menuState === 0 && n3 !== (l7 == null ? void 0 : l7.activeElement) && n3.focus({ preventScroll: true });
  }, [t7.menuState, t7.itemsRef, l7]), F({ container: t7.itemsRef.current, enabled: t7.menuState === 0, accept(n3) {
    return n3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n3) {
    n3.setAttribute("role", "none");
  } });
  let f6 = o2((n3) => {
    var E4, P3;
    switch (m6.dispose(), n3.key) {
      case o3.Space:
        if (t7.searchQuery !== "")
          return n3.preventDefault(), n3.stopPropagation(), o6({ type: 3, value: n3.key });
      case o3.Enter:
        if (n3.preventDefault(), n3.stopPropagation(), o6({ type: 1 }), t7.activeItemIndex !== null) {
          let { dataRef: S5 } = t7.items[t7.activeItemIndex];
          (P3 = (E4 = S5.current) == null ? void 0 : E4.domRef.current) == null || P3.click();
        }
        D(t7.buttonRef.current);
        break;
      case o3.ArrowDown:
        return n3.preventDefault(), n3.stopPropagation(), o6({ type: 2, focus: a.Next });
      case o3.ArrowUp:
        return n3.preventDefault(), n3.stopPropagation(), o6({ type: 2, focus: a.Previous });
      case o3.Home:
      case o3.PageUp:
        return n3.preventDefault(), n3.stopPropagation(), o6({ type: 2, focus: a.First });
      case o3.End:
      case o3.PageDown:
        return n3.preventDefault(), n3.stopPropagation(), o6({ type: 2, focus: a.Last });
      case o3.Escape:
        n3.preventDefault(), n3.stopPropagation(), o6({ type: 1 }), o().nextFrame(() => {
          var S5;
          return (S5 = t7.buttonRef.current) == null ? void 0 : S5.focus({ preventScroll: true });
        });
        break;
      case o3.Tab:
        n3.preventDefault(), n3.stopPropagation(), o6({ type: 1 }), o().nextFrame(() => {
          _(t7.buttonRef.current, n3.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n3.key.length === 1 && (o6({ type: 3, value: n3.key }), m6.setTimeout(() => o6({ type: 4 }), 350));
        break;
    }
  }), g2 = o2((n3) => {
    switch (n3.key) {
      case o3.Space:
        n3.preventDefault();
        break;
    }
  }), R = (0, import_react9.useMemo)(() => ({ open: t7.menuState === 0 }), [t7]), p7 = { "aria-activedescendant": t7.activeItemIndex === null || (M4 = t7.items[t7.activeItemIndex]) == null ? void 0 : M4.id, "aria-labelledby": (b4 = t7.buttonRef.current) == null ? void 0 : b4.id, id: i2, onKeyDown: f6, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a8 };
  return X({ ourProps: p7, theirProps: s6, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react9.Fragment;
function Pe2(e3, u7) {
  let r4 = I(), { id: i2 = `headlessui-menu-item-${r4}`, disabled: s6 = false, ...t7 } = e3, [o6, a8] = O2("Menu.Item"), l7 = o6.activeItemIndex !== null ? o6.items[o6.activeItemIndex].id === i2 : false, m6 = (0, import_react9.useRef)(null), I4 = y2(u7, m6);
  l(() => {
    if (o6.__demoMode || o6.menuState !== 0 || !l7 || o6.activationTrigger === 0)
      return;
    let T3 = o();
    return T3.requestAnimationFrame(() => {
      var v, B;
      (B = (v = m6.current) == null ? void 0 : v.scrollIntoView) == null || B.call(v, { block: "nearest" });
    }), T3.dispose;
  }, [o6.__demoMode, m6, l7, o6.menuState, o6.activationTrigger, o6.activeItemIndex]);
  let A = b3(m6), f6 = (0, import_react9.useRef)({ disabled: s6, domRef: m6, get textValue() {
    return A();
  } });
  l(() => {
    f6.current.disabled = s6;
  }, [f6, s6]), l(() => (a8({ type: 5, id: i2, dataRef: f6 }), () => a8({ type: 6, id: i2 })), [f6, i2]);
  let g2 = o2(() => {
    a8({ type: 1 });
  }), R = o2((T3) => {
    if (s6)
      return T3.preventDefault();
    a8({ type: 1 }), D(o6.buttonRef.current);
  }), p7 = o2(() => {
    if (s6)
      return a8({ type: 2, focus: a.Nothing });
    a8({ type: 2, focus: a.Specific, id: i2 });
  }), M4 = u2(), b4 = o2((T3) => M4.update(T3)), n3 = o2((T3) => {
    M4.wasMoved(T3) && (s6 || l7 || a8({ type: 2, focus: a.Specific, id: i2, trigger: 0 }));
  }), E4 = o2((T3) => {
    M4.wasMoved(T3) && (s6 || l7 && a8({ type: 2, focus: a.Nothing }));
  }), P3 = (0, import_react9.useMemo)(() => ({ active: l7, disabled: s6, close: g2 }), [l7, s6, g2]);
  return X({ ourProps: { id: i2, ref: I4, role: "menuitem", tabIndex: s6 === true ? void 0 : -1, "aria-disabled": s6 === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p7, onPointerEnter: b4, onMouseEnter: b4, onPointerMove: n3, onMouseMove: n3, onPointerLeave: E4, onMouseLeave: E4 }, theirProps: t7, slot: P3, defaultTag: Se, name: "Menu.Item" });
}
var ve = D2(Me2);
var xe = D2(Re);
var he = D2(Ee);
var De2 = D2(Pe2);
var it = Object.assign(ve, { Button: xe, Items: he, Item: De2 });

// app/components/dashboard/main.jsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon_default, current: true },
  { name: "My tasks", href: "#", icon: ViewListIcon_default, current: false },
  { name: "Recent", href: "#", icon: ClockIcon_default, current: false }
];
var teams = [
  { name: "Engineering", href: "#", bgColorClass: "bg-indigo-500" },
  { name: "Human Resources", href: "#", bgColorClass: "bg-green-500" },
  { name: "Customer Success", href: "#", bgColorClass: "bg-yellow-500" }
];
var projects = [
  {
    id: 1,
    title: "GraphQL API",
    initials: "GA",
    team: "Engineering",
    members: [
      {
        name: "Dries Vincent",
        handle: "driesvincent",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Lindsay Walton",
        handle: "lindsaywalton",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Courtney Henry",
        handle: "courtneyhenry",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      },
      {
        name: "Tom Cook",
        handle: "tomcook",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    ],
    totalMembers: 12,
    lastUpdated: "March 17, 2020",
    pinned: true,
    bgColorClass: "bg-pink-600"
  }
  // More projects...
];
var pinnedProjects = projects.filter((project) => project.pinned);
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example() {
  const [sidebarOpen, setSidebarOpen] = (0, import_react11.useState)(false);
  const data = useLoaderData();
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.Root, { show: sidebarOpen, as: import_react11.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "fixed inset-0 flex z-40 lg:hidden", onClose: setSidebarOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $e.Child,
        {
          as: import_react11.Fragment,
          enter: "transition-opacity ease-linear duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "transition-opacity ease-linear duration-300",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Overlay, { className: "fixed inset-0 bg-gray-600 bg-opacity-75" }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 114,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 105,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $e.Child,
        {
          as: import_react11.Fragment,
          enter: "transition ease-in-out duration-300 transform",
          enterFrom: "-translate-x-full",
          enterTo: "translate-x-0",
          leave: "transition ease-in-out duration-300 transform",
          leaveFrom: "translate-x-0",
          leaveTo: "-translate-x-full",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              $e.Child,
              {
                as: import_react11.Fragment,
                enter: "ease-in-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in-out duration-300",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 right-0 -mr-12 pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "button",
                  {
                    type: "button",
                    className: "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                    onClick: () => setSidebarOpen(false),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, false, {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 141,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XIcon_default, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 142,
                        columnNumber: 23
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 136,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 135,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 126,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "h-8 w-auto",
                src: "./logo/black.svg",
                alt: "Meetlily Advertising"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 147,
                columnNumber: 19
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 146,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 flex-1 h-0 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "px-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: classNames(
                    item.current ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                    "group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                  ),
                  "aria-current": item.current ? "page" : void 0,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      item.icon,
                      {
                        className: classNames(
                          item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        ),
                        "aria-hidden": "true"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 168,
                        columnNumber: 27
                      },
                      this
                    ),
                    item.name
                  ]
                },
                item.name,
                true,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 157,
                  columnNumber: 25
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 155,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h3",
                  {
                    className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                    id: "mobile-teams-headline",
                    children: "Teams"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 180,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 space-y-1", role: "group", "aria-labelledby": "mobile-teams-headline", children: teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    href: team.href,
                    className: "group flex items-center px-3 py-2 text-base leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "span",
                        {
                          className: classNames(team.bgColorClass, "w-2.5 h-2.5 mr-4 rounded-full"),
                          "aria-hidden": "true"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/dashboard/main.jsx",
                          lineNumber: 193,
                          columnNumber: 29
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, false, {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 197,
                        columnNumber: 29
                      }, this)
                    ]
                  },
                  team.name,
                  true,
                  {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 188,
                    columnNumber: 27
                  },
                  this
                )) }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 186,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 179,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 154,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 153,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 w-14", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/dashboard/main.jsx",
        lineNumber: 206,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/main.jsx",
      lineNumber: 104,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/dashboard/main.jsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center flex-shrink-0 px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          className: "h-14 w-auto",
          src: "./logo/black.svg",
          alt: "Meetlily"
        },
        void 0,
        false,
        {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 215,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/dashboard/main.jsx",
        lineNumber: 214,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 h-0 flex-1 flex flex-col overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it, { as: "div", className: "px-3 relative inline-block text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Button, { className: "group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex w-full justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex min-w-0 items-center justify-between space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "w-10 h-10 bg-gray-300 rounded-full flex-shrink-0",
                  src: "https://d8me.live/avatar.png",
                  alt: ""
                },
                void 0,
                false,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 230,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex-1 flex flex-col min-w-0", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-900 text-sm font-medium truncate", children: user.email }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 236,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500 text-sm truncate", children: [
                  "@",
                  user.username
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 237,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 235,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 229,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              SelectorIcon_default,
              {
                className: "flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 240,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 228,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 227,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            $e,
            {
              as: import_react11.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Items, { className: "z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                      href: "#",
                      className: classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      ),
                      children: "View profile"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 260,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 258,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                      href: "#",
                      className: classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      ),
                      children: "Settings"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 273,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 271,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                      href: "#",
                      className: classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      ),
                      children: "Notifications"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 286,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 284,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 257,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                      href: "#",
                      className: classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      ),
                      children: "Get desktop app"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 301,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 299,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                      href: "#",
                      className: classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      ),
                      children: "Support"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 314,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 312,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 298,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    href: "#",
                    className: classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    ),
                    children: "Logout"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 329,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 327,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 326,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 256,
                columnNumber: 17
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 247,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-3 mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "search", className: "sr-only", children: "Search" }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 346,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 relative rounded-md shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchIcon_default, { className: "mr-3 h-4 w-4 text-gray-400", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 354,
                  columnNumber: 19
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 350,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                name: "search",
                id: "search",
                className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md",
                placeholder: "Search"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 356,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 349,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 345,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "px-3 mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: item.href,
              className: classNames(
                item.current ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              ),
              "aria-current": item.current ? "page" : void 0,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  item.icon,
                  {
                    className: classNames(
                      item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    ),
                    "aria-hidden": "true"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 378,
                    columnNumber: 21
                  },
                  this
                ),
                item.name
              ]
            },
            item.name,
            true,
            {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 369,
              columnNumber: 19
            },
            this
          )) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 367,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "h3",
              {
                className: "px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                id: "desktop-teams-headline",
                children: "Teams"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 391,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 space-y-1", role: "group", "aria-labelledby": "desktop-teams-headline", children: teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "a",
              {
                href: team.href,
                className: "group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "span",
                    {
                      className: classNames(team.bgColorClass, "w-2.5 h-2.5 mr-4 rounded-full"),
                      "aria-hidden": "true"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 404,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 408,
                    columnNumber: 23
                  }, this)
                ]
              },
              team.name,
              true,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 399,
                columnNumber: 21
              },
              this
            )) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 397,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 389,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 366,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/main.jsx",
        lineNumber: 223,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/main.jsx",
      lineNumber: 213,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:pl-64 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            className: "px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden",
            onClick: () => setSidebarOpen(true),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 425,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuAlt1Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 426,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 420,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex justify-between px-4 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "w-full flex md:ml-0", action: "#", method: "GET", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 431,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full text-gray-400 focus-within:text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SearchIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 436,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 435,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "search-field",
                  name: "search-field",
                  className: "block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm",
                  placeholder: "Search",
                  type: "search"
                },
                void 0,
                false,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 438,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 434,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 430,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 429,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it, { as: "div", className: "ml-3 relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Button, { className: "max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 453,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "h-8 w-8 rounded-full",
                  src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  alt: ""
                },
                void 0,
                false,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 454,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 452,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 451,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              $e,
              {
                as: import_react11.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Items, { className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        ),
                        children: "View profile"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 474,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 472,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        ),
                        children: "Settings"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 487,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 485,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        ),
                        children: "Notifications"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 500,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 498,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 471,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        ),
                        children: "Get desktop app"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 515,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 513,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "a",
                      {
                        href: "#",
                        className: classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        ),
                        children: "Support"
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 528,
                        columnNumber: 29
                      },
                      this
                    ) }, void 0, false, {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 526,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 512,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "a",
                    {
                      href: "#",
                      className: classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      ),
                      children: "Logout"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 543,
                      columnNumber: 29
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 541,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 540,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 470,
                  columnNumber: 21
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 461,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 450,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 448,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 428,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/main.jsx",
        lineNumber: 419,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-lg font-medium leading-6 text-gray-900 sm:truncate", children: "Dashboard" }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 565,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 564,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex sm:mt-0 sm:ml-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "button",
                className: "order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-50 sm:order-1 sm:ml-3",
                children: "Create"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 570,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:order-1 sm:ml-3",
                children: "Log Out"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 578,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 568,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 567,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 563,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 mt-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-gray-500 text-xs font-medium uppercase tracking-wide", children: "Pinned Projects" }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 590,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3", children: pinnedProjects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "relative col-span-1 flex shadow-sm rounded-md", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "div",
              {
                className: classNames(
                  project.bgColorClass,
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                ),
                children: project.initials
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 594,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 px-4 py-2 text-sm truncate", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-gray-900 font-medium hover:text-gray-600", children: project.title }, void 0, false, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 604,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500", children: [
                  project.totalMembers,
                  " Members"
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 607,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 603,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it, { as: "div", className: "flex-shrink-0 pr-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Button, { className: "w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open options" }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 611,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsVerticalIcon_default, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 612,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 610,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  $e,
                  {
                    as: import_react11.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Items, { className: "z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "a",
                        {
                          href: "#",
                          className: classNames(
                            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          ),
                          children: "View"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/components/dashboard/main.jsx",
                          lineNumber: 627,
                          columnNumber: 35
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 625,
                        columnNumber: 31
                      }, this) }, void 0, false, {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 624,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-1", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "a",
                          {
                            href: "#",
                            className: classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            ),
                            children: "Removed from pinned"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/dashboard/main.jsx",
                            lineNumber: 642,
                            columnNumber: 35
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/components/dashboard/main.jsx",
                          lineNumber: 640,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(it.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                          "a",
                          {
                            href: "#",
                            className: classNames(
                              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            ),
                            children: "Share"
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/dashboard/main.jsx",
                            lineNumber: 655,
                            columnNumber: 35
                          },
                          this
                        ) }, void 0, false, {
                          fileName: "app/components/dashboard/main.jsx",
                          lineNumber: 653,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/components/dashboard/main.jsx",
                        lineNumber: 639,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/dashboard/main.jsx",
                      lineNumber: 623,
                      columnNumber: 27
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/dashboard/main.jsx",
                    lineNumber: 614,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 609,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 602,
              columnNumber: 21
            }, this)
          ] }, project.id, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 593,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 591,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 589,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-gray-500 text-xs font-medium uppercase tracking-wide", children: "Projects" }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 679,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 678,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-3 border-t border-gray-200 divide-y divide-gray-100", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center truncate space-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "span",
                {
                  className: classNames(project.bgColorClass, "w-2.5 h-2.5 flex-shrink-0 rounded-full"),
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 686,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium truncate text-sm leading-6", children: [
                project.title,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate font-normal text-gray-500", children: [
                  "in ",
                  project.team
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 691,
                  columnNumber: 43
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 690,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 685,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              ChevronRightIcon_default,
              {
                className: "ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 694,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 684,
            columnNumber: 21
          }, this) }, project.id, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 683,
            columnNumber: 19
          }, this)) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 681,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 677,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden mt-8 sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "align-middle inline-block min-w-full border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-t border-gray-200", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "lg:pl-2", children: "Project" }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 711,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 710,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Members" }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 713,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Last updated" }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 716,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 719,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 709,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 708,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white divide-y divide-gray-100", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 lg:pl-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: classNames(project.bgColorClass, "flex-shrink-0 w-2.5 h-2.5 rounded-full"),
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 727,
                  columnNumber: 29
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "truncate hover:text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                project.title,
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500 font-normal", children: [
                  "in ",
                  project.team
                ] }, void 0, true, {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 733,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 732,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 731,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 726,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 725,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 text-sm text-gray-500 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 -space-x-1", children: project.members.map((member) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "max-w-none h-6 w-6 rounded-full ring-2 ring-white",
                  src: member.imageUrl,
                  alt: member.name
                },
                member.handle,
                false,
                {
                  fileName: "app/components/dashboard/main.jsx",
                  lineNumber: 742,
                  columnNumber: 33
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 740,
                columnNumber: 29
              }, this),
              project.totalMembers > project.members.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex-shrink-0 text-xs leading-5 font-medium", children: [
                "+",
                project.totalMembers - project.members.length
              ] }, void 0, true, {
                fileName: "app/components/dashboard/main.jsx",
                lineNumber: 751,
                columnNumber: 31
              }, this) : null
            ] }, void 0, true, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 739,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 738,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right", children: project.lastUpdated }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 757,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-indigo-600 hover:text-indigo-900", children: "Edit" }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 761,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/components/dashboard/main.jsx",
              lineNumber: 760,
              columnNumber: 25
            }, this)
          ] }, project.id, true, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 724,
            columnNumber: 23
          }, this)) }, void 0, false, {
            fileName: "app/components/dashboard/main.jsx",
            lineNumber: 722,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 707,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 706,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/dashboard/main.jsx",
          lineNumber: 705,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/dashboard/main.jsx",
        lineNumber: 561,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/dashboard/main.jsx",
      lineNumber: 417,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/dashboard/main.jsx",
    lineNumber: 102,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/dashboard/main.jsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.jsx
var import_note2 = __toESM(require_note());
var import_session2 = __toESM(require_session());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function NotesPage() {
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { element: user }, void 0, false, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
export {
  NotesPage as default
};
//# sourceMappingURL=/build/routes/dashboard-Q5Z74Y7O.js.map
