import {
  require_user
} from "/build/_shared/chunk-CMWXK6I4.js";
import "/build/_shared/chunk-5OHUETEV.js";
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
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-6L4I7JCO.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/routes/login.jsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_user = __toESM(require_user());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [{ title: "Login" }];
function LoginPage() {
  let error = {
    message: ""
  };
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";
  const actionData = useActionData();
  const emailRef = (0, import_react2.useRef)(null);
  const passwordRef = (0, import_react2.useRef)(null);
  console.log(actionData, "actionData LoginPage");
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c, _d;
    if ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) {
      (_b = emailRef.current) == null ? void 0 : _b.focus();
    } else if ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) {
      (_d = passwordRef.current) == null ? void 0 : _d.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-full flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24  bg-orange-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "justify-center mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", title: "Go back to home", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            className: "h-28 w-auto justify-center mx-auto",
            src: "./logo/orange-full.svg",
            alt: "D8"
          },
          void 0,
          false,
          {
            fileName: "app/routes/login.jsx",
            lineNumber: 111,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-2xl  font-extrabold text-gray-900", children: "Sign in to your Meetlily account" }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/join", className: "font-medium text-orange-600 hover:text-orange-500", children: "Sign Up" }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 120,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.jsx",
          lineNumber: 118,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-700", children: "Sign in with" }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 grid grid-cols-3 gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/auth/facebook", children: [
                error.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: error.message }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 134,
                  columnNumber: 40
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-orage-500 hover:bg-gray-300", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Sign in with Facebook" }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 136,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 138,
                      columnNumber: 27
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 137,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 135,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 133,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 132,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/auth/google", children: [
                error.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: error.message }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 150,
                  columnNumber: 40
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-orage-500 hover:bg-gray-300", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Sign in with Google" }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 152,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 154,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 153,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 151,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 149,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 148,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/auth/github", children: [
                error.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: error.message }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 162,
                  columnNumber: 40
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-orage-500 hover:bg-gray-300", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Sign in with GitHub" }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 164,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
                      clipRule: "evenodd"
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 166,
                      columnNumber: 27
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 165,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 163,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 161,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 160,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/login.jsx",
              lineNumber: 131,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 128,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300" }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 180,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 179,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white text-gray-500", children: "Or continue with" }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 183,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 182,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 178,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.jsx",
          lineNumber: 127,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "#", method: "POST", className: "space-y-6", children: [
          error.message ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: error.message }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 190,
            columnNumber: 34
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email address" }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 192,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: true,
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              },
              void 0,
              false,
              {
                fileName: "app/routes/login.jsx",
                lineNumber: 196,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 195,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 191,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 208,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                required: true,
                className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              },
              void 0,
              false,
              {
                fileName: "app/routes/login.jsx",
                lineNumber: 212,
                columnNumber: 23
              },
              this
            ) }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 211,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 207,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "input",
                {
                  id: "remember-me",
                  name: "remember-me",
                  type: "checkbox",
                  className: "h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 225,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900", children: "Remember me" }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 231,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/login.jsx",
              lineNumber: 224,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/forgot-password", className: "font-medium text-orange-600 hover:text-orange-500", children: "Forgot your password?" }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 237,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/login.jsx",
              lineNumber: 236,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 223,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
              children: "Sign in"
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.jsx",
              lineNumber: 244,
              columnNumber: 21
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/login.jsx",
            lineNumber: 243,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.jsx",
          lineNumber: 189,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 188,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 126,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.jsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:block relative w-0 flex-1 bg-slate-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "img",
      {
        className: "absolute inset-0 h-full w-full object-cover",
        src: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9",
        alt: "",
        height: "70%"
      },
      void 0,
      false,
      {
        fileName: "app/routes/login.jsx",
        lineNumber: 257,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 256,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.jsx",
    lineNumber: 106,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/login.jsx",
    lineNumber: 104,
    columnNumber: 5
  }, this);
}
export {
  LoginPage as default,
  meta
};
//# sourceMappingURL=/build/routes/login-DRJIMXM7.js.map
