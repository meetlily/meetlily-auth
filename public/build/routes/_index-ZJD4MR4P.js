import {
  $e,
  C,
  ChevronRightIcon_default,
  CloudUploadIcon_default,
  CogIcon_default,
  D2 as D,
  E,
  ExternalLinkIcon_default,
  H,
  I,
  LockClosedIcon_default,
  M,
  MenuIcon_default,
  N,
  O,
  RefreshIcon_default,
  S,
  ServerIcon_default,
  ShieldCheckIcon_default,
  T,
  T2,
  X,
  XIcon_default,
  ae,
  c,
  c2,
  d,
  e,
  f,
  h,
  l,
  n,
  n2,
  o2 as o,
  o3 as o2,
  p2 as p,
  p3 as p2,
  r,
  s,
  s2,
  s3,
  u,
  y2 as y
} from "/build/_shared/chunk-ZC2RBIFX.js";
import {
  useOptionalUser
} from "/build/_shared/chunk-5OHUETEV.js";
import "/build/_shared/chunk-PTRPXHZV.js";
import {
  Form,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-6L4I7JCO.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/pages/home.jsx
var import_react2 = __toESM(require_react());

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react = __toESM(require_react(), 1);
var De = ((u2) => (u2[u2.Open = 0] = "Open", u2[u2.Closed = 1] = "Closed", u2))(De || {});
var he = ((e2) => (e2[e2.TogglePopover = 0] = "TogglePopover", e2[e2.ClosePopover = 1] = "ClosePopover", e2[e2.SetButton = 2] = "SetButton", e2[e2.SetButtonId = 3] = "SetButtonId", e2[e2.SetPanel = 4] = "SetPanel", e2[e2.SetPanelId = 5] = "SetPanelId", e2))(he || {});
var He = { [0]: (t) => {
  let o3 = { ...t, popoverState: u(t.popoverState, { [0]: 1, [1]: 0 }) };
  return o3.popoverState === 0 && (o3.__demoMode = false), o3;
}, [1](t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1 };
}, [2](t, o3) {
  return t.button === o3.button ? t : { ...t, button: o3.button };
}, [3](t, o3) {
  return t.buttonId === o3.buttonId ? t : { ...t, buttonId: o3.buttonId };
}, [4](t, o3) {
  return t.panel === o3.panel ? t : { ...t, panel: o3.panel };
}, [5](t, o3) {
  return t.panelId === o3.panelId ? t : { ...t, panelId: o3.panelId };
} };
var ue = (0, import_react.createContext)(null);
ue.displayName = "PopoverContext";
function oe(t) {
  let o3 = (0, import_react.useContext)(ue);
  if (o3 === null) {
    let u2 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u2, oe), u2;
  }
  return o3;
}
var ie = (0, import_react.createContext)(null);
ie.displayName = "PopoverAPIContext";
function fe(t) {
  let o3 = (0, import_react.useContext)(ie);
  if (o3 === null) {
    let u2 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u2, fe), u2;
  }
  return o3;
}
var Pe = (0, import_react.createContext)(null);
Pe.displayName = "PopoverGroupContext";
function Ee() {
  return (0, import_react.useContext)(Pe);
}
var re = (0, import_react.createContext)(null);
re.displayName = "PopoverPanelContext";
function _e() {
  return (0, import_react.useContext)(re);
}
function Ge(t, o3) {
  return u(o3.type, He, t, o3);
}
var ke = "div";
function we(t, o3) {
  var I2;
  let { __demoMode: u2 = false, ...A } = t, O2 = (0, import_react.useRef)(null), n3 = y(o3, T2((l2) => {
    O2.current = l2;
  })), e2 = (0, import_react.useRef)([]), T3 = (0, import_react.useReducer)(Ge, { __demoMode: u2, popoverState: u2 ? 0 : 1, buttons: e2, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react.createRef)(), afterPanelSentinel: (0, import_react.createRef)() }), [{ popoverState: P, button: p3, buttonId: F, panel: a, panelId: m, beforePanelSentinel: y2, afterPanelSentinel: s4 }, i] = T3, d2 = n2((I2 = O2.current) != null ? I2 : p3), g = (0, import_react.useMemo)(() => {
    if (!p3 || !a)
      return false;
    for (let K of document.querySelectorAll("body > *"))
      if (Number(K == null ? void 0 : K.contains(p3)) ^ Number(K == null ? void 0 : K.contains(a)))
        return true;
    let l2 = f(), R = l2.indexOf(p3), q = (R + l2.length - 1) % l2.length, W = (R + 1) % l2.length, z = l2[q], ge = l2[W];
    return !a.contains(z) && !a.contains(ge);
  }, [p3, a]), L = s(F), h2 = s(m), _ = (0, import_react.useMemo)(() => ({ buttonId: L, panelId: h2, close: () => i({ type: 1 }) }), [L, h2, i]), B = Ee(), D2 = B == null ? void 0 : B.registerPopover, f2 = o(() => {
    var l2;
    return (l2 = B == null ? void 0 : B.isFocusWithinPopoverGroup()) != null ? l2 : (d2 == null ? void 0 : d2.activeElement) && ((p3 == null ? void 0 : p3.contains(d2.activeElement)) || (a == null ? void 0 : a.contains(d2.activeElement)));
  });
  (0, import_react.useEffect)(() => D2 == null ? void 0 : D2(_), [D2, _]);
  let [E2, b] = ae(), c3 = p2({ portals: E2, defaultContainers: [p3, a] });
  E(d2 == null ? void 0 : d2.defaultView, "focus", (l2) => {
    var R, q, W, z;
    l2.target !== window && l2.target instanceof HTMLElement && P === 0 && (f2() || p3 && a && (c3.contains(l2.target) || (q = (R = y2.current) == null ? void 0 : R.contains) != null && q.call(R, l2.target) || (z = (W = s4.current) == null ? void 0 : W.contains) != null && z.call(W, l2.target) || i({ type: 1 })));
  }, true), H(c3.resolveContainers, (l2, R) => {
    i({ type: 1 }), h(R, T.Loose) || (l2.preventDefault(), p3 == null || p3.focus());
  }, P === 0);
  let M2 = o((l2) => {
    i({ type: 1 });
    let R = (() => l2 ? l2 instanceof HTMLElement ? l2 : "current" in l2 && l2.current instanceof HTMLElement ? l2.current : p3 : p3)();
    R == null || R.focus();
  }), r2 = (0, import_react.useMemo)(() => ({ close: M2, isPortalled: g }), [M2, g]), v = (0, import_react.useMemo)(() => ({ open: P === 0, close: M2 }), [P, M2]), x = { ref: n3 };
  return import_react.default.createElement(re.Provider, { value: null }, import_react.default.createElement(ue.Provider, { value: T3 }, import_react.default.createElement(ie.Provider, { value: r2 }, import_react.default.createElement(c2, { value: u(P, { [0]: d.Open, [1]: d.Closed }) }, import_react.default.createElement(b, null, X({ ourProps: x, theirProps: A, slot: v, defaultTag: ke, name: "Popover" }), import_react.default.createElement(c3.MainTreeNode, null))))));
}
var Ne = "button";
function Ue(t, o3) {
  let u2 = I(), { id: A = `headlessui-popover-button-${u2}`, ...O2 } = t, [n3, e2] = oe("Popover.Button"), { isPortalled: T3 } = fe("Popover.Button"), P = (0, import_react.useRef)(null), p3 = `headlessui-focus-sentinel-${I()}`, F = Ee(), a = F == null ? void 0 : F.closeOthers, y2 = _e() !== null;
  (0, import_react.useEffect)(() => {
    if (!y2)
      return e2({ type: 3, buttonId: A }), () => {
        e2({ type: 3, buttonId: null });
      };
  }, [y2, A, e2]);
  let [s4] = (0, import_react.useState)(() => Symbol()), i = y(P, o3, y2 ? null : (r2) => {
    if (r2)
      n3.buttons.current.push(s4);
    else {
      let v = n3.buttons.current.indexOf(s4);
      v !== -1 && n3.buttons.current.splice(v, 1);
    }
    n3.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r2 && e2({ type: 2, button: r2 });
  }), d2 = y(P, o3), g = n2(P), L = o((r2) => {
    var v, x, I2;
    if (y2) {
      if (n3.popoverState === 1)
        return;
      switch (r2.key) {
        case o2.Space:
        case o2.Enter:
          r2.preventDefault(), (x = (v = r2.target).click) == null || x.call(v), e2({ type: 1 }), (I2 = n3.button) == null || I2.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o2.Space:
        case o2.Enter:
          r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a == null || a(n3.buttonId)), e2({ type: 0 });
          break;
        case o2.Escape:
          if (n3.popoverState !== 0)
            return a == null ? void 0 : a(n3.buttonId);
          if (!P.current || g != null && g.activeElement && !P.current.contains(g.activeElement))
            return;
          r2.preventDefault(), r2.stopPropagation(), e2({ type: 1 });
          break;
      }
  }), h2 = o((r2) => {
    y2 || r2.key === o2.Space && r2.preventDefault();
  }), _ = o((r2) => {
    var v, x;
    r(r2.currentTarget) || t.disabled || (y2 ? (e2({ type: 1 }), (v = n3.button) == null || v.focus()) : (r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a == null || a(n3.buttonId)), e2({ type: 0 }), (x = n3.button) == null || x.focus()));
  }), B = o((r2) => {
    r2.preventDefault(), r2.stopPropagation();
  }), D2 = n3.popoverState === 0, f2 = (0, import_react.useMemo)(() => ({ open: D2 }), [D2]), E2 = s2(t, P), b = y2 ? { ref: d2, type: E2, onKeyDown: L, onClick: _ } : { ref: i, id: n3.buttonId, type: E2, "aria-expanded": t.disabled ? void 0 : n3.popoverState === 0, "aria-controls": n3.panel ? n3.panelId : void 0, onKeyDown: L, onKeyUp: h2, onClick: _, onMouseDown: B }, c3 = n(), M2 = o(() => {
    let r2 = n3.panel;
    if (!r2)
      return;
    function v() {
      u(c3.current, { [s3.Forwards]: () => O(r2, M.First), [s3.Backwards]: () => O(r2, M.Last) }) === N.Error && O(f().filter((I2) => I2.dataset.headlessuiFocusGuard !== "true"), u(c3.current, { [s3.Forwards]: M.Next, [s3.Backwards]: M.Previous }), { relativeTo: n3.button });
    }
    v();
  });
  return import_react.default.createElement(import_react.default.Fragment, null, X({ ourProps: b, theirProps: O2, slot: f2, defaultTag: Ne, name: "Popover.Button" }), D2 && !y2 && T3 && import_react.default.createElement(c, { id: p3, features: p.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M2 }));
}
var We = "div";
var Ke = S.RenderStrategy | S.Static;
function je(t, o3) {
  let u2 = I(), { id: A = `headlessui-popover-overlay-${u2}`, ...O2 } = t, [{ popoverState: n3 }, e2] = oe("Popover.Overlay"), T3 = y(o3), P = C(), p3 = (() => P !== null ? (P & d.Open) === d.Open : n3 === 0)(), F = o((y2) => {
    if (r(y2.currentTarget))
      return y2.preventDefault();
    e2({ type: 1 });
  }), a = (0, import_react.useMemo)(() => ({ open: n3 === 0 }), [n3]);
  return X({ ourProps: { ref: T3, id: A, "aria-hidden": true, onClick: F }, theirProps: O2, slot: a, defaultTag: We, features: Ke, visible: p3, name: "Popover.Overlay" });
}
var Ve = "div";
var $e2 = S.RenderStrategy | S.Static;
function Je(t, o3) {
  let u2 = I(), { id: A = `headlessui-popover-panel-${u2}`, focus: O2 = false, ...n3 } = t, [e2, T3] = oe("Popover.Panel"), { close: P, isPortalled: p3 } = fe("Popover.Panel"), F = `headlessui-focus-sentinel-before-${I()}`, a = `headlessui-focus-sentinel-after-${I()}`, m = (0, import_react.useRef)(null), y2 = y(m, o3, (f2) => {
    T3({ type: 4, panel: f2 });
  }), s4 = n2(m);
  l(() => (T3({ type: 5, panelId: A }), () => {
    T3({ type: 5, panelId: null });
  }), [A, T3]);
  let i = C(), d2 = (() => i !== null ? (i & d.Open) === d.Open : e2.popoverState === 0)(), g = o((f2) => {
    var E2;
    switch (f2.key) {
      case o2.Escape:
        if (e2.popoverState !== 0 || !m.current || s4 != null && s4.activeElement && !m.current.contains(s4.activeElement))
          return;
        f2.preventDefault(), f2.stopPropagation(), T3({ type: 1 }), (E2 = e2.button) == null || E2.focus();
        break;
    }
  });
  (0, import_react.useEffect)(() => {
    var f2;
    t.static || e2.popoverState === 1 && ((f2 = t.unmount) == null || f2) && T3({ type: 4, panel: null });
  }, [e2.popoverState, t.unmount, t.static, T3]), (0, import_react.useEffect)(() => {
    if (e2.__demoMode || !O2 || e2.popoverState !== 0 || !m.current)
      return;
    let f2 = s4 == null ? void 0 : s4.activeElement;
    m.current.contains(f2) || O(m.current, M.First);
  }, [e2.__demoMode, O2, m, e2.popoverState]);
  let L = (0, import_react.useMemo)(() => ({ open: e2.popoverState === 0, close: P }), [e2, P]), h2 = { ref: y2, id: A, onKeyDown: g, onBlur: O2 && e2.popoverState === 0 ? (f2) => {
    var b, c3, M2, r2, v;
    let E2 = f2.relatedTarget;
    E2 && m.current && ((b = m.current) != null && b.contains(E2) || (T3({ type: 1 }), ((M2 = (c3 = e2.beforePanelSentinel.current) == null ? void 0 : c3.contains) != null && M2.call(c3, E2) || (v = (r2 = e2.afterPanelSentinel.current) == null ? void 0 : r2.contains) != null && v.call(r2, E2)) && E2.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, _ = n(), B = o(() => {
    let f2 = m.current;
    if (!f2)
      return;
    function E2() {
      u(_.current, { [s3.Forwards]: () => {
        var c3;
        O(f2, M.First) === N.Error && ((c3 = e2.afterPanelSentinel.current) == null || c3.focus());
      }, [s3.Backwards]: () => {
        var b;
        (b = e2.button) == null || b.focus({ preventScroll: true });
      } });
    }
    E2();
  }), D2 = o(() => {
    let f2 = m.current;
    if (!f2)
      return;
    function E2() {
      u(_.current, { [s3.Forwards]: () => {
        var x;
        if (!e2.button)
          return;
        let b = f(), c3 = b.indexOf(e2.button), M2 = b.slice(0, c3 + 1), v = [...b.slice(c3 + 1), ...M2];
        for (let I2 of v.slice())
          if (I2.dataset.headlessuiFocusGuard === "true" || (x = e2.panel) != null && x.contains(I2)) {
            let l2 = v.indexOf(I2);
            l2 !== -1 && v.splice(l2, 1);
          }
        O(v, M.First, { sorted: false });
      }, [s3.Backwards]: () => {
        var c3;
        O(f2, M.Previous) === N.Error && ((c3 = e2.button) == null || c3.focus());
      } });
    }
    E2();
  });
  return import_react.default.createElement(re.Provider, { value: A }, d2 && p3 && import_react.default.createElement(c, { id: F, ref: e2.beforePanelSentinel, features: p.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B }), X({ ourProps: h2, theirProps: n3, slot: L, defaultTag: Ve, features: $e2, visible: d2, name: "Popover.Panel" }), d2 && p3 && import_react.default.createElement(c, { id: a, ref: e2.afterPanelSentinel, features: p.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: D2 }));
}
var Xe = "div";
function Ye(t, o3) {
  let u2 = (0, import_react.useRef)(null), A = y(u2, o3), [O2, n3] = (0, import_react.useState)([]), e2 = o((s4) => {
    n3((i) => {
      let d2 = i.indexOf(s4);
      if (d2 !== -1) {
        let g = i.slice();
        return g.splice(d2, 1), g;
      }
      return i;
    });
  }), T3 = o((s4) => (n3((i) => [...i, s4]), () => e2(s4))), P = o(() => {
    var d2;
    let s4 = e(u2);
    if (!s4)
      return false;
    let i = s4.activeElement;
    return (d2 = u2.current) != null && d2.contains(i) ? true : O2.some((g) => {
      var L, h2;
      return ((L = s4.getElementById(g.buttonId.current)) == null ? void 0 : L.contains(i)) || ((h2 = s4.getElementById(g.panelId.current)) == null ? void 0 : h2.contains(i));
    });
  }), p3 = o((s4) => {
    for (let i of O2)
      i.buttonId.current !== s4 && i.close();
  }), F = (0, import_react.useMemo)(() => ({ registerPopover: T3, unregisterPopover: e2, isFocusWithinPopoverGroup: P, closeOthers: p3 }), [T3, e2, P, p3]), a = (0, import_react.useMemo)(() => ({}), []), m = t, y2 = { ref: A };
  return import_react.default.createElement(Pe.Provider, { value: F }, X({ ourProps: y2, theirProps: m, slot: a, defaultTag: Xe, name: "Popover.Group" }));
}
var qe = D(we);
var ze = D(Ue);
var Qe = D(je);
var Ze = D(Je);
var et = D(Ye);
var kt = Object.assign(qe, { Button: ze, Overlay: Qe, Panel: Ze, Group: et });

// app/components/pages/home.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var navigation = [
  { name: "About", href: "#" }
];
var features = [
  {
    name: "Mobile App for Sustainable Living",
    description: "Create an interactive mobile application that encourages and educates users about sustainable practices in daily life. Include features like carbon footprint tracking, tips for reducing waste, and a community forum for sharing ideas and success stories.",
    icon: CloudUploadIcon_default
  },
  {
    name: "SSL Certificates",
    description: "SSL (Secure Socket Layer) certificates are digital certificates that establish a secure encrypted connection between a user's browser and a web server. ",
    icon: LockClosedIcon_default
  },
  {
    name: "Simple Queues",
    description: "Simple queues are a fundamental data structure that follows the First-In-First-Out (FIFO) principle. In simple terms, they are a linear collection where new elements are added to the back and removal happens from the front.",
    icon: RefreshIcon_default
  },
  {
    name: "Advanced Security",
    description: "Advanced security refers to the implementation of robust measures, technologies, and strategies to protect digital systems, networks, and data from sophisticated cyber threats, ensuring confidentiality, integrity, and availability.",
    icon: ShieldCheckIcon_default
  },
  {
    name: "Powerful API",
    description: "A powerful API (Application Programming Interface) allows software applications to seamlessly communicate and interact with each other, enabling efficient data exchange, integration, and functionality expansion for developers and users.",
    icon: CogIcon_default
  },
  {
    name: "Database Backups",
    description: "Database backups are essential measures that create copies of a database's data, ensuring its protection against data loss, corruption, or system failures. Backups safeguard critical information and enable recovery in case of emergencies.",
    icon: ServerIcon_default
  }
];
var blogPosts = [
  {
    id: 1,
    title: "Intelligent Software Development",
    href: "#",
    date: "Mar 16, 2023",
    datetime: "2020-03-16",
    category: { name: "Machine Learning", href: "#" },
    imageUrl: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview: "Software development is the backbone of any successful digital business. By developing intuitive and user-friendly applications, you can provide a seamless experience that attracts and retains customers.",
    author: {
      name: "Eddie Villanueva",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#"
    },
    readingLength: "6 min"
  },
  {
    id: 2,
    title: "ChatGPT Prompts Engineering",
    href: "#",
    date: "Mar 10, 2023",
    datetime: "2020-03-10",
    category: { name: "Artificial Intelligence", href: "#" },
    imageUrl: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview: "Real-Life Example: GPT-3.5 Turbo proved instrumental in revolutionizing customer support in the e-commerce industry. An online retailer integrated this framework to automate their customer service chatbot. ",
    author: {
      name: "Brenna Goyette",
      imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#"
    },
    readingLength: "4 min"
  },
  {
    id: 3,
    title: "Industry Applications and Beyond",
    href: "#",
    date: "Feb 12, 2023",
    datetime: "2020-02-12",
    category: { name: "Machine Learning", href: "#" },
    imageUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview: "ChatGPT prompt frameworks have demonstrated their prowess in revolutionizing industries far and wide. Let's explore a couple more examples to inspire and illustrate their transformative potential",
    author: {
      name: "Daniela Metz",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#"
    },
    readingLength: "11 min"
  }
];
var footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" }
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" }
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" }
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/meetmylily",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 179,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    },
    {
      name: "Instagram",
      href: "https://instagram.com/meetmylily",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 192,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 191,
        columnNumber: 9
      }, this)
    },
    {
      name: "Twitter",
      href: "https://twitter.com/meetmylily",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 204,
        columnNumber: 9
      }, this)
    },
    {
      name: "GitHub",
      href: "https://github.com/meetlily",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
          clipRule: "evenodd"
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 214,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 213,
        columnNumber: 9
      }, this)
    }
  ]
};
function LandingPage() {
  const user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt, { as: "header", className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-900 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "nav",
        {
          className: "relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6",
          "aria-label": "Global",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between w-full md:w-auto", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Meetlily" }, void 0, false, {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 240,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto sm:h-10",
                      src: "./logo/white-full.svg",
                      alt: ""
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/pages/home.jsx",
                      lineNumber: 241,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 239,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2 flex items-center md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Button, { className: "bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 249,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 250,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 248,
                  columnNumber: 21
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 247,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 238,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden space-x-8 md:flex md:ml-10", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: "text-base font-medium text-white hover:text-gray-300",
                  children: item.name
                },
                item.name,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 256,
                  columnNumber: 21
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 254,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 237,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex md:items-center md:space-x-6", children: [
              user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "text-base font-medium text-teal-100 hover:text-cyan-300",
                  children: "Log Out"
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 271,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 270,
                columnNumber: 19
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", className: "text-base font-medium text-teal-100 hover:text-cyan-300", children: "Log in" }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 279,
                columnNumber: 23
              }, this),
              user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: "/dashboard",
                  className: "text-base font-medium inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-teal-100 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:order-1 sm:ml-3",
                  children: "Dashboard"
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 285,
                  columnNumber: 21
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/join", className: "text-base font-medium inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-teal-100 hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:order-1 sm:ml-3", children: "Register" }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 293,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 266,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 233,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 232,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        $e,
        {
          as: import_react2.Fragment,
          enter: "duration-150 ease-out",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "duration-100 ease-in",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Panel, { focus: true, className: "absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-5 pt-4 flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "h-8 w-auto",
                  src: "./logo/white-full.svg",
                  alt: ""
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 314,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 313,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kt.Button, { className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 322,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 323,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 321,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 320,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 312,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-5 pb-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: "block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50",
                  children: item.name
                },
                item.name,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 330,
                  columnNumber: 23
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 328,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: "#",
                  className: "block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700",
                  children: "Get your account now"
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 340,
                  columnNumber: 21
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 339,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 px-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center text-base font-medium text-gray-500", children: [
                "Existing customer?",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", className: "text-gray-900 hover:underline", children: "Login" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 350,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 348,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 347,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 327,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 311,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 310,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 301,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/pages/home.jsx",
      lineNumber: 231,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:grid lg:grid-cols-2 lg:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:py-24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "/join",
              className: "inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full", children: "Get Started" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 370,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-4 text-sm", children: "Create your account now" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 373,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon_default, { className: "ml-2 w-5 h-5 text-gray-500", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 374,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 366,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: "Building the Future" }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 377,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5", children: "AI and ML Development" }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 378,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 376,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl", children: "Leverage the power of artificial intelligence and machine learning to unlock valuable insights and drive intelligent decision-making in your business processes." }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 382,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 sm:mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "#", className: "sm:max-w-xl sm:mx-auto lg:mx-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "sr-only", children: "Email address" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 389,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email",
                    className: "block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 392,
                    columnNumber: 29
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 388,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 sm:mt-0 sm:ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900",
                  children: "Subscribe"
                },
                void 0,
                false,
                {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 400,
                  columnNumber: 29
                },
                this
              ) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 399,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 387,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-sm text-gray-300 sm:mt-4", children: [
              "Our newsletter covers a wide range of topics, including AI, machine learning, web and mobile development, cloud computing, and much more. Stay ahead of the curve with our expert articles, tutorials, case studies, and industry news. By providing your email, you agree to our",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "font-medium text-white", children: "terms of service" }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 411,
                columnNumber: 27
              }, this),
              "."
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 408,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 386,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 385,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 365,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 364,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            className: "w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none",
            src: "https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg",
            alt: ""
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 423,
            columnNumber: 21
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 421,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 420,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 363,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 362,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 361,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold tracking-wider text-cyan-600 uppercase", children: "Serverless" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 438,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl", children: "Key Features and Benefits" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 439,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-5 max-w-prose mx-auto text-xl text-gray-500", children: "Sleek and Modern Design: Our dashboard features a sleek and modern design that is visually appealing and enhances user experience. With its clean layout and intuitive navigation, you can effortlessly access and interact with your data." }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 442,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 437,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 -mb-10 sm:-mb-24 lg:-mb-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            className: "rounded-lg shadow-xl ring-1 ring-black ring-opacity-5",
            src: "https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg",
            alt: ""
          },
          void 0,
          false,
          {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 447,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 446,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 436,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 435,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-white py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold tracking-wider text-cyan-600 uppercase", children: "Deploy faster" }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 459,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl", children: "Real-Time Data Visualization" }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 460,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-5 max-w-prose mx-auto text-xl text-gray-500", children: "Instantly visualize your data with our real-time charts, graphs, and visualizations. Easily understand trends, patterns, and correlations, empowering you to make data-driven decisions." }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 463,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flow-root bg-gray-50 rounded-lg px-6 pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(feature.icon, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 474,
            columnNumber: 31
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 473,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 472,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-8 text-lg font-medium text-gray-900 tracking-tight", children: feature.name }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 477,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-5 text-base text-gray-500", children: feature.description }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 478,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 471,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 470,
          columnNumber: 23
        }, this) }, feature.name, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 469,
          columnNumber: 21
        }, this)) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 467,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 466,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 458,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 457,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative lg:-my-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-hidden": "true", className: "absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 492,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "object-cover lg:h-full lg:w-full",
              src: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
              alt: ""
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 495,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 494,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 493,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 491,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 lg:m-0 lg:col-span-2 lg:pl-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "svg",
              {
                className: "h-12 w-12 text-white opacity-25",
                fill: "currentColor",
                viewBox: "0 0 32 32",
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 513,
                  columnNumber: 25
                }, this)
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 507,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-2xl font-medium text-white", children: "Tailor your dashboard to your specific needs with customizable widgets. Choose from a variety of pre-built widgets or create your own, allowing you to focus on the metrics and data that matter most to your business." }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 515,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 506,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base font-medium text-white", children: "Judith Black" }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 520,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base font-medium text-cyan-100", children: "CEO at PureInsights" }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 521,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 519,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 505,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 504,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 503,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 490,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 489,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-gray-50 py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold tracking-wider text-cyan-600 uppercase", children: "Learn" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 533,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl", children: "Data Integration and Connectivity" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 534,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-5 mx-auto max-w-prose text-xl text-gray-500", children: "Seamlessly integrate your data from various sources, such as databases, APIs, and third-party applications. With our robust connectivity options, you can centralize your data and view it all in one place." }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 537,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 532,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl", children: blogPosts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col rounded-lg shadow-lg overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-48 w-full object-cover", src: post.imageUrl, alt: "" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 545,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 544,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 bg-white p-6 flex flex-col justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-cyan-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.category.href, className: "hover:underline", children: post.category.name }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 550,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 549,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.href, className: "block mt-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl font-semibold text-gray-900", children: post.title }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 555,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-base text-gray-500", children: post.preview }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 556,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 554,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 548,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.author.href, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: post.author.imageUrl, alt: post.author.name }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 562,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 561,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 560,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: post.author.href, className: "hover:underline", children: post.author.name }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 567,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 566,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-1 text-sm text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: post.datetime, children: post.date }, void 0, false, {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 572,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xB7" }, void 0, false, {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 573,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                    post.readingLength,
                    " read"
                  ] }, void 0, true, {
                    fileName: "app/components/pages/home.jsx",
                    lineNumber: 574,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 571,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 565,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 559,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 547,
            columnNumber: 21
          }, this)
        ] }, post.id, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 543,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 541,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 531,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 530,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              className: "w-full h-full object-cover",
              src: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100",
              alt: ""
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 588,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              "aria-hidden": "true",
              className: "absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
            },
            void 0,
            false,
            {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 593,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 587,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:ml-auto md:w-1/2 md:pl-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold uppercase tracking-wider text-gray-300", children: "Responsive Design" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 600,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl", children: "We\u2019re here to help" }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 603,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-lg text-gray-300", children: "Access your dashboard anytime, anywhere, and on any device. Our responsive design ensures that you have a seamless user experience across desktops, laptops, tablets, and mobile devices." }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 604,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex rounded-md shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "a",
            {
              href: "#",
              className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50",
              children: [
                "Visit the help center",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLinkIcon_default, { className: "-mr-1 ml-3 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 614,
                  columnNumber: 23
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 609,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 608,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 607,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 599,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 598,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 586,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/home.jsx",
      lineNumber: 360,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "bg-gray-50", "aria-labelledby": "footer-heading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, false, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 623,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8 xl:col-span-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "h-10",
                src: "./logo/black.svg",
                alt: "Meetlily"
              },
              void 0,
              false,
              {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 629,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-base", children: "Making the world a better place through constructing elegant hierarchies." }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 634,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-6", children: footerNavigation.social.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: item.name }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 640,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 641,
                columnNumber: 23
              }, this)
            ] }, item.name, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 639,
              columnNumber: 21
            }, this)) }, void 0, false, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 637,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 628,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 tracking-wider uppercase", children: "Solutions" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 649,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: footerNavigation.solutions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-base text-gray-500 hover:text-gray-900", children: item.name }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 653,
                  columnNumber: 27
                }, this) }, item.name, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 652,
                  columnNumber: 25
                }, this)) }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 650,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 648,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 md:mt-0", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 tracking-wider uppercase", children: "Support" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 661,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: footerNavigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-base text-gray-500 hover:text-gray-900", children: item.name }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 665,
                  columnNumber: 27
                }, this) }, item.name, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 664,
                  columnNumber: 25
                }, this)) }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 662,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 660,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 647,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 tracking-wider uppercase", children: "Company" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 675,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: footerNavigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-base text-gray-500 hover:text-gray-900", children: item.name }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 679,
                  columnNumber: 27
                }, this) }, item.name, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 678,
                  columnNumber: 25
                }, this)) }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 676,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 674,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 md:mt-0", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold text-gray-400 tracking-wider uppercase", children: "Legal" }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 687,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-4 space-y-4", children: footerNavigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-base text-gray-500 hover:text-gray-900", children: item.name }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 691,
                  columnNumber: 27
                }, this) }, item.name, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 690,
                  columnNumber: 25
                }, this)) }, void 0, false, {
                  fileName: "app/components/pages/home.jsx",
                  lineNumber: 688,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/pages/home.jsx",
                lineNumber: 686,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/pages/home.jsx",
              lineNumber: 673,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/pages/home.jsx",
            lineNumber: 646,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 627,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 border-t border-gray-200 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-400 xl:text-center", children: "\xA9 2023 Meetlily Advertising |  All rights reserved." }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 702,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/pages/home.jsx",
          lineNumber: 701,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/pages/home.jsx",
        lineNumber: 626,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/pages/home.jsx",
      lineNumber: 622,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pages/home.jsx",
    lineNumber: 230,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/pages/home.jsx",
    lineNumber: 229,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Meetlily Advertising" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LandingPage, {}, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-ZJD4MR4P.js.map
