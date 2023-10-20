function Ci(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: En } = Object.prototype,
  { getPrototypeOf: Se } = Object,
  oe = ((e) => (t) => {
    const i = En.call(t);
    return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  W = (e) => ((e = e.toLowerCase()), (t) => oe(t) === e),
  ae = (e) => (t) => typeof t === e,
  { isArray: gt } = Array,
  xt = ae("undefined");
function On(e) {
  return (
    e !== null &&
    !xt(e) &&
    e.constructor !== null &&
    !xt(e.constructor) &&
    B(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Pi = W("ArrayBuffer");
function An(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pi(e.buffer)),
    t
  );
}
const xn = ae("string"),
  B = ae("function"),
  Ri = ae("number"),
  ce = (e) => e !== null && typeof e == "object",
  Ln = (e) => e === !0 || e === !1,
  zt = (e) => {
    if (oe(e) !== "object") return !1;
    const t = Se(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Tn = W("Date"),
  Sn = W("File"),
  kn = W("Blob"),
  Cn = W("FileList"),
  Pn = (e) => ce(e) && B(e.pipe),
  Rn = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (B(e.append) &&
          ((t = oe(e)) === "formdata" ||
            (t === "object" &&
              B(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Dn = W("URLSearchParams"),
  jn = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function St(e, t, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, r;
  if ((typeof e != "object" && (e = [e]), gt(e)))
    for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
  else {
    const s = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (n = 0; n < o; n++) (a = s[n]), t.call(null, e[a], a, e);
  }
}
function Di(e, t) {
  t = t.toLowerCase();
  const i = Object.keys(e);
  let n = i.length,
    r;
  for (; n-- > 0; ) if (((r = i[n]), t === r.toLowerCase())) return r;
  return null;
}
const ji = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Ii = (e) => !xt(e) && e !== ji;
function we() {
  const { caseless: e } = (Ii(this) && this) || {},
    t = {},
    i = (n, r) => {
      const s = (e && Di(t, r)) || r;
      zt(t[s]) && zt(n)
        ? (t[s] = we(t[s], n))
        : zt(n)
        ? (t[s] = we({}, n))
        : gt(n)
        ? (t[s] = n.slice())
        : (t[s] = n);
    };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && St(arguments[n], i);
  return t;
}
const In = (e, t, i, { allOwnKeys: n } = {}) => (
    St(
      t,
      (r, s) => {
        i && B(r) ? (e[s] = Ci(r, i)) : (e[s] = r);
      },
      { allOwnKeys: n }
    ),
    e
  ),
  Bn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Nn = (e, t, i, n) => {
    (e.prototype = Object.create(t.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      i && Object.assign(e.prototype, i);
  },
  Fn = (e, t, i, n) => {
    let r, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
        (o = r[s]), (!n || n(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = i !== !1 && Se(e);
    } while (e && (!i || i(e, t)) && e !== Object.prototype);
    return t;
  },
  Hn = (e, t, i) => {
    (e = String(e)),
      (i === void 0 || i > e.length) && (i = e.length),
      (i -= t.length);
    const n = e.indexOf(t, i);
    return n !== -1 && n === i;
  },
  qn = (e) => {
    if (!e) return null;
    if (gt(e)) return e;
    let t = e.length;
    if (!Ri(t)) return null;
    const i = new Array(t);
    for (; t-- > 0; ) i[t] = e[t];
    return i;
  },
  Mn = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Se(Uint8Array)),
  Un = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = n.next()) && !r.done; ) {
      const s = r.value;
      t.call(e, s[0], s[1]);
    }
  },
  zn = (e, t) => {
    let i;
    const n = [];
    for (; (i = e.exec(t)) !== null; ) n.push(i);
    return n;
  },
  Vn = W("HTMLFormElement"),
  Wn = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, n, r) {
      return n.toUpperCase() + r;
    }),
  ci = (
    ({ hasOwnProperty: e }) =>
    (t, i) =>
      e.call(t, i)
  )(Object.prototype),
  $n = W("RegExp"),
  Bi = (e, t) => {
    const i = Object.getOwnPropertyDescriptors(e),
      n = {};
    St(i, (r, s) => {
      let o;
      (o = t(r, s, e)) !== !1 && (n[s] = o || r);
    }),
      Object.defineProperties(e, n);
  },
  Jn = (e) => {
    Bi(e, (t, i) => {
      if (B(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
        return !1;
      const n = e[i];
      if (B(n)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + i + "'");
          });
      }
    });
  },
  Kn = (e, t) => {
    const i = {},
      n = (r) => {
        r.forEach((s) => {
          i[s] = !0;
        });
      };
    return gt(e) ? n(e) : n(String(e).split(t)), i;
  },
  Xn = () => {},
  Gn = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  me = "abcdefghijklmnopqrstuvwxyz",
  li = "0123456789",
  Ni = { DIGIT: li, ALPHA: me, ALPHA_DIGIT: me + me.toUpperCase() + li },
  Yn = (e = 16, t = Ni.ALPHA_DIGIT) => {
    let i = "";
    const { length: n } = t;
    for (; e--; ) i += t[(Math.random() * n) | 0];
    return i;
  };
function Qn(e) {
  return !!(
    e &&
    B(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Zn = (e) => {
    const t = new Array(10),
      i = (n, r) => {
        if (ce(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[r] = n;
            const s = gt(n) ? [] : {};
            return (
              St(n, (o, a) => {
                const c = i(o, r + 1);
                !xt(c) && (s[a] = c);
              }),
              (t[r] = void 0),
              s
            );
          }
        }
        return n;
      };
    return i(e, 0);
  },
  tr = W("AsyncFunction"),
  er = (e) => e && (ce(e) || B(e)) && B(e.then) && B(e.catch),
  d = {
    isArray: gt,
    isArrayBuffer: Pi,
    isBuffer: On,
    isFormData: Rn,
    isArrayBufferView: An,
    isString: xn,
    isNumber: Ri,
    isBoolean: Ln,
    isObject: ce,
    isPlainObject: zt,
    isUndefined: xt,
    isDate: Tn,
    isFile: Sn,
    isBlob: kn,
    isRegExp: $n,
    isFunction: B,
    isStream: Pn,
    isURLSearchParams: Dn,
    isTypedArray: Mn,
    isFileList: Cn,
    forEach: St,
    merge: we,
    extend: In,
    trim: jn,
    stripBOM: Bn,
    inherits: Nn,
    toFlatObject: Fn,
    kindOf: oe,
    kindOfTest: W,
    endsWith: Hn,
    toArray: qn,
    forEachEntry: Un,
    matchAll: zn,
    isHTMLForm: Vn,
    hasOwnProperty: ci,
    hasOwnProp: ci,
    reduceDescriptors: Bi,
    freezeMethods: Jn,
    toObjectSet: Kn,
    toCamelCase: Wn,
    noop: Xn,
    toFiniteNumber: Gn,
    findKey: Di,
    global: ji,
    isContextDefined: Ii,
    ALPHABET: Ni,
    generateString: Yn,
    isSpecCompliantForm: Qn,
    toJSONObject: Zn,
    isAsyncFn: tr,
    isThenable: er,
  };
function w(e, t, i, n, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    i && (this.config = i),
    n && (this.request = n),
    r && (this.response = r);
}
d.inherits(w, Error, {
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
      config: d.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Fi = w.prototype,
  Hi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Hi[e] = { value: e };
});
Object.defineProperties(w, Hi);
Object.defineProperty(Fi, "isAxiosError", { value: !0 });
w.from = (e, t, i, n, r, s) => {
  const o = Object.create(Fi);
  return (
    d.toFlatObject(
      e,
      o,
      function (c) {
        return c !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    w.call(o, e.message, t, i, n, r),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const ir = null;
function _e(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function qi(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ui(e, t, i) {
  return e
    ? e
        .concat(t)
        .map(function (r, s) {
          return (r = qi(r)), !i && s ? "[" + r + "]" : r;
        })
        .join(i ? "." : "")
    : t;
}
function nr(e) {
  return d.isArray(e) && !e.some(_e);
}
const rr = d.toFlatObject(d, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function le(e, t, i) {
  if (!d.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (i = d.toFlatObject(
      i,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, g) {
        return !d.isUndefined(g[h]);
      }
    ));
  const n = i.metaTokens,
    r = i.visitor || u,
    s = i.dots,
    o = i.indexes,
    c = (i.Blob || (typeof Blob < "u" && Blob)) && d.isSpecCompliantForm(t);
  if (!d.isFunction(r)) throw new TypeError("visitor must be a function");
  function l(f) {
    if (f === null) return "";
    if (d.isDate(f)) return f.toISOString();
    if (!c && d.isBlob(f))
      throw new w("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(f) || d.isTypedArray(f)
      ? c && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function u(f, h, g) {
    let b = f;
    if (f && !g && typeof f == "object") {
      if (d.endsWith(h, "{}"))
        (h = n ? h : h.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (d.isArray(f) && nr(f)) ||
        ((d.isFileList(f) || d.endsWith(h, "[]")) && (b = d.toArray(f)))
      )
        return (
          (h = qi(h)),
          b.forEach(function (A, y) {
            !(d.isUndefined(A) || A === null) &&
              t.append(
                o === !0 ? ui([h], y, s) : o === null ? h : h + "[]",
                l(A)
              );
          }),
          !1
        );
    }
    return _e(f) ? !0 : (t.append(ui(g, h, s), l(f)), !1);
  }
  const p = [],
    m = Object.assign(rr, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: _e,
    });
  function v(f, h) {
    if (!d.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(f),
        d.forEach(f, function (b, _) {
          (!(d.isUndefined(b) || b === null) &&
            r.call(t, b, d.isString(_) ? _.trim() : _, h, m)) === !0 &&
            v(b, h ? h.concat(_) : [_]);
        }),
        p.pop();
    }
  }
  if (!d.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function di(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function ke(e, t) {
  (this._pairs = []), e && le(e, this, t);
}
const Mi = ke.prototype;
Mi.append = function (t, i) {
  this._pairs.push([t, i]);
};
Mi.toString = function (t) {
  const i = t
    ? function (n) {
        return t.call(this, n, di);
      }
    : di;
  return this._pairs
    .map(function (r) {
      return i(r[0]) + "=" + i(r[1]);
    }, "")
    .join("&");
};
function sr(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ui(e, t, i) {
  if (!t) return e;
  const n = (i && i.encode) || sr,
    r = i && i.serialize;
  let s;
  if (
    (r
      ? (s = r(t, i))
      : (s = d.isURLSearchParams(t) ? t.toString() : new ke(t, i).toString(n)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class or {
  constructor() {
    this.handlers = [];
  }
  use(t, i, n) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: i,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    d.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const fi = or,
  zi = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ar = typeof URLSearchParams < "u" ? URLSearchParams : ke,
  cr = typeof FormData < "u" ? FormData : null,
  lr = typeof Blob < "u" ? Blob : null,
  ur = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  dr = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  U = {
    isBrowser: !0,
    classes: { URLSearchParams: ar, FormData: cr, Blob: lr },
    isStandardBrowserEnv: ur,
    isStandardBrowserWebWorkerEnv: dr,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function fr(e, t) {
  return le(
    e,
    new U.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (i, n, r, s) {
          return U.isNode && d.isBuffer(i)
            ? (this.append(n, i.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function pr(e) {
  return d
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function hr(e) {
  const t = {},
    i = Object.keys(e);
  let n;
  const r = i.length;
  let s;
  for (n = 0; n < r; n++) (s = i[n]), (t[s] = e[s]);
  return t;
}
function Vi(e) {
  function t(i, n, r, s) {
    let o = i[s++];
    const a = Number.isFinite(+o),
      c = s >= i.length;
    return (
      (o = !o && d.isArray(r) ? r.length : o),
      c
        ? (d.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !a)
        : ((!r[o] || !d.isObject(r[o])) && (r[o] = []),
          t(i, n, r[o], s) && d.isArray(r[o]) && (r[o] = hr(r[o])),
          !a)
    );
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const i = {};
    return (
      d.forEachEntry(e, (n, r) => {
        t(pr(n), r, i, 0);
      }),
      i
    );
  }
  return null;
}
function vr(e, t, i) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (i || JSON.stringify)(e);
}
const Ce = {
  transitional: zi,
  adapter: U.isNode ? "http" : "xhr",
  transformRequest: [
    function (t, i) {
      const n = i.getContentType() || "",
        r = n.indexOf("application/json") > -1,
        s = d.isObject(t);
      if ((s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t)))
        return r && r ? JSON.stringify(Vi(t)) : t;
      if (
        d.isArrayBuffer(t) ||
        d.isBuffer(t) ||
        d.isStream(t) ||
        d.isFile(t) ||
        d.isBlob(t)
      )
        return t;
      if (d.isArrayBufferView(t)) return t.buffer;
      if (d.isURLSearchParams(t))
        return (
          i.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (s) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return fr(t, this.formSerializer).toString();
        if ((a = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const c = this.env && this.env.FormData;
          return le(
            a ? { "files[]": t } : t,
            c && new c(),
            this.formSerializer
          );
        }
      }
      return s || r ? (i.setContentType("application/json", !1), vr(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const i = this.transitional || Ce.transitional,
        n = i && i.forcedJSONParsing,
        r = this.responseType === "json";
      if (t && d.isString(t) && ((n && !this.responseType) || r)) {
        const o = !(i && i.silentJSONParsing) && r;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? w.from(a, w.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: U.classes.FormData, Blob: U.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ce.headers[e] = {};
});
const Pe = Ce,
  mr = d.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  gr = (e) => {
    const t = {};
    let i, n, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (i = o.substring(0, r).trim().toLowerCase()),
              (n = o.substring(r + 1).trim()),
              !(!i || (t[i] && mr[i])) &&
                (i === "set-cookie"
                  ? t[i]
                    ? t[i].push(n)
                    : (t[i] = [n])
                  : (t[i] = t[i] ? t[i] + ", " + n : n));
          }),
      t
    );
  },
  pi = Symbol("internals");
function wt(e) {
  return e && String(e).trim().toLowerCase();
}
function Vt(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Vt) : String(e);
}
function yr(e) {
  const t = Object.create(null),
    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = i.exec(e)); ) t[n[1]] = n[2];
  return t;
}
const br = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ge(e, t, i, n, r) {
  if (d.isFunction(n)) return n.call(this, t, i);
  if ((r && (t = i), !!d.isString(t))) {
    if (d.isString(n)) return t.indexOf(n) !== -1;
    if (d.isRegExp(n)) return n.test(t);
  }
}
function wr(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, i, n) => i.toUpperCase() + n);
}
function _r(e, t) {
  const i = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + i, {
      value: function (r, s, o) {
        return this[n].call(this, t, r, s, o);
      },
      configurable: !0,
    });
  });
}
class ue {
  constructor(t) {
    t && this.set(t);
  }
  set(t, i, n) {
    const r = this;
    function s(a, c, l) {
      const u = wt(c);
      if (!u) throw new Error("header name must be a non-empty string");
      const p = d.findKey(r, u);
      (!p || r[p] === void 0 || l === !0 || (l === void 0 && r[p] !== !1)) &&
        (r[p || c] = Vt(a));
    }
    const o = (a, c) => d.forEach(a, (l, u) => s(l, u, c));
    return (
      d.isPlainObject(t) || t instanceof this.constructor
        ? o(t, i)
        : d.isString(t) && (t = t.trim()) && !br(t)
        ? o(gr(t), i)
        : t != null && s(i, t, n),
      this
    );
  }
  get(t, i) {
    if (((t = wt(t)), t)) {
      const n = d.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!i) return r;
        if (i === !0) return yr(r);
        if (d.isFunction(i)) return i.call(this, r, n);
        if (d.isRegExp(i)) return i.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, i) {
    if (((t = wt(t)), t)) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!i || ge(this, this[n], n, i)));
    }
    return !1;
  }
  delete(t, i) {
    const n = this;
    let r = !1;
    function s(o) {
      if (((o = wt(o)), o)) {
        const a = d.findKey(n, o);
        a && (!i || ge(n, n[a], a, i)) && (delete n[a], (r = !0));
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const i = Object.keys(this);
    let n = i.length,
      r = !1;
    for (; n--; ) {
      const s = i[n];
      (!t || ge(this, this[s], s, t, !0)) && (delete this[s], (r = !0));
    }
    return r;
  }
  normalize(t) {
    const i = this,
      n = {};
    return (
      d.forEach(this, (r, s) => {
        const o = d.findKey(n, s);
        if (o) {
          (i[o] = Vt(r)), delete i[s];
          return;
        }
        const a = t ? wr(s) : String(s).trim();
        a !== s && delete i[s], (i[a] = Vt(r)), (n[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const i = Object.create(null);
    return (
      d.forEach(this, (n, r) => {
        n != null && n !== !1 && (i[r] = t && d.isArray(n) ? n.join(", ") : n);
      }),
      i
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...i) {
    const n = new this(t);
    return i.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[pi] = this[pi] = { accessors: {} }).accessors,
      r = this.prototype;
    function s(o) {
      const a = wt(o);
      n[a] || (_r(r, o), (n[a] = !0));
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
ue.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
d.reduceDescriptors(ue.prototype, ({ value: e }, t) => {
  let i = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[i] = n;
    },
  };
});
d.freezeMethods(ue);
const $ = ue;
function ye(e, t) {
  const i = this || Pe,
    n = t || i,
    r = $.from(n.headers);
  let s = n.data;
  return (
    d.forEach(e, function (a) {
      s = a.call(i, s, r.normalize(), t ? t.status : void 0);
    }),
    r.normalize(),
    s
  );
}
function Wi(e) {
  return !!(e && e.__CANCEL__);
}
function kt(e, t, i) {
  w.call(this, e ?? "canceled", w.ERR_CANCELED, t, i),
    (this.name = "CanceledError");
}
d.inherits(kt, w, { __CANCEL__: !0 });
function Er(e, t, i) {
  const n = i.config.validateStatus;
  !i.status || !n || n(i.status)
    ? e(i)
    : t(
        new w(
          "Request failed with status code " + i.status,
          [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][
            Math.floor(i.status / 100) - 4
          ],
          i.config,
          i.request,
          i
        )
      );
}
const Or = U.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (i, n, r, s, o, a) {
          const c = [];
          c.push(i + "=" + encodeURIComponent(n)),
            d.isNumber(r) && c.push("expires=" + new Date(r).toGMTString()),
            d.isString(s) && c.push("path=" + s),
            d.isString(o) && c.push("domain=" + o),
            a === !0 && c.push("secure"),
            (document.cookie = c.join("; "));
        },
        read: function (i) {
          const n = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return n ? decodeURIComponent(n[3]) : null;
        },
        remove: function (i) {
          this.write(i, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function Ar(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xr(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function $i(e, t) {
  return e && !Ar(t) ? xr(e, t) : t;
}
const Lr = U.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        i = document.createElement("a");
      let n;
      function r(s) {
        let o = s;
        return (
          t && (i.setAttribute("href", o), (o = i.href)),
          i.setAttribute("href", o),
          {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname:
              i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname,
          }
        );
      }
      return (
        (n = r(window.location.href)),
        function (o) {
          const a = d.isString(o) ? r(o) : o;
          return a.protocol === n.protocol && a.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Tr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Sr(e, t) {
  e = e || 10;
  const i = new Array(e),
    n = new Array(e);
  let r = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const l = Date.now(),
        u = n[s];
      o || (o = l), (i[r] = c), (n[r] = l);
      let p = s,
        m = 0;
      for (; p !== r; ) (m += i[p++]), (p = p % e);
      if (((r = (r + 1) % e), r === s && (s = (s + 1) % e), l - o < t)) return;
      const v = u && l - u;
      return v ? Math.round((m * 1e3) / v) : void 0;
    }
  );
}
function hi(e, t) {
  let i = 0;
  const n = Sr(50, 250);
  return (r) => {
    const s = r.loaded,
      o = r.lengthComputable ? r.total : void 0,
      a = s - i,
      c = n(a),
      l = s <= o;
    i = s;
    const u = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && o && l ? (o - s) / c : void 0,
      event: r,
    };
    (u[t ? "download" : "upload"] = !0), e(u);
  };
}
const kr = typeof XMLHttpRequest < "u",
  Cr =
    kr &&
    function (e) {
      return new Promise(function (i, n) {
        let r = e.data;
        const s = $.from(e.headers).normalize(),
          o = e.responseType;
        let a;
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        d.isFormData(r) &&
          (U.isStandardBrowserEnv || U.isStandardBrowserWebWorkerEnv
            ? s.setContentType(!1)
            : s.setContentType("multipart/form-data;", !1));
        let l = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            f = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          s.set("Authorization", "Basic " + btoa(v + ":" + f));
        }
        const u = $i(e.baseURL, e.url);
        l.open(e.method.toUpperCase(), Ui(u, e.params, e.paramsSerializer), !0),
          (l.timeout = e.timeout);
        function p() {
          if (!l) return;
          const v = $.from(
              "getAllResponseHeaders" in l && l.getAllResponseHeaders()
            ),
            h = {
              data:
                !o || o === "text" || o === "json"
                  ? l.responseText
                  : l.response,
              status: l.status,
              statusText: l.statusText,
              headers: v,
              config: e,
              request: l,
            };
          Er(
            function (b) {
              i(b), c();
            },
            function (b) {
              n(b), c();
            },
            h
          ),
            (l = null);
        }
        if (
          ("onloadend" in l
            ? (l.onloadend = p)
            : (l.onreadystatechange = function () {
                !l ||
                  l.readyState !== 4 ||
                  (l.status === 0 &&
                    !(l.responseURL && l.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (l.onabort = function () {
            l &&
              (n(new w("Request aborted", w.ECONNABORTED, e, l)), (l = null));
          }),
          (l.onerror = function () {
            n(new w("Network Error", w.ERR_NETWORK, e, l)), (l = null);
          }),
          (l.ontimeout = function () {
            let f = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = e.transitional || zi;
            e.timeoutErrorMessage && (f = e.timeoutErrorMessage),
              n(
                new w(
                  f,
                  h.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
                  e,
                  l
                )
              ),
              (l = null);
          }),
          U.isStandardBrowserEnv)
        ) {
          const v =
            (e.withCredentials || Lr(u)) &&
            e.xsrfCookieName &&
            Or.read(e.xsrfCookieName);
          v && s.set(e.xsrfHeaderName, v);
        }
        r === void 0 && s.setContentType(null),
          "setRequestHeader" in l &&
            d.forEach(s.toJSON(), function (f, h) {
              l.setRequestHeader(h, f);
            }),
          d.isUndefined(e.withCredentials) ||
            (l.withCredentials = !!e.withCredentials),
          o && o !== "json" && (l.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            l.addEventListener("progress", hi(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            l.upload &&
            l.upload.addEventListener("progress", hi(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (v) => {
              l &&
                (n(!v || v.type ? new kt(null, e, l) : v),
                l.abort(),
                (l = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const m = Tr(u);
        if (m && U.protocols.indexOf(m) === -1) {
          n(new w("Unsupported protocol " + m + ":", w.ERR_BAD_REQUEST, e));
          return;
        }
        l.send(r || null);
      });
    },
  Wt = { http: ir, xhr: Cr };
d.forEach(Wt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ji = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let i, n;
    for (
      let r = 0;
      r < t && ((i = e[r]), !(n = d.isString(i) ? Wt[i.toLowerCase()] : i));
      r++
    );
    if (!n)
      throw n === !1
        ? new w(
            `Adapter ${i} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            d.hasOwnProp(Wt, i)
              ? `Adapter '${i}' is not available in the build`
              : `Unknown adapter '${i}'`
          );
    if (!d.isFunction(n)) throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Wt,
};
function be(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new kt(null, e);
}
function vi(e) {
  return (
    be(e),
    (e.headers = $.from(e.headers)),
    (e.data = ye.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ji.getAdapter(e.adapter || Pe.adapter)(e).then(
      function (n) {
        return (
          be(e),
          (n.data = ye.call(e, e.transformResponse, n)),
          (n.headers = $.from(n.headers)),
          n
        );
      },
      function (n) {
        return (
          Wi(n) ||
            (be(e),
            n &&
              n.response &&
              ((n.response.data = ye.call(e, e.transformResponse, n.response)),
              (n.response.headers = $.from(n.response.headers)))),
          Promise.reject(n)
        );
      }
    )
  );
}
const mi = (e) => (e instanceof $ ? e.toJSON() : e);
function ft(e, t) {
  t = t || {};
  const i = {};
  function n(l, u, p) {
    return d.isPlainObject(l) && d.isPlainObject(u)
      ? d.merge.call({ caseless: p }, l, u)
      : d.isPlainObject(u)
      ? d.merge({}, u)
      : d.isArray(u)
      ? u.slice()
      : u;
  }
  function r(l, u, p) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(l)) return n(void 0, l, p);
    } else return n(l, u, p);
  }
  function s(l, u) {
    if (!d.isUndefined(u)) return n(void 0, u);
  }
  function o(l, u) {
    if (d.isUndefined(u)) {
      if (!d.isUndefined(l)) return n(void 0, l);
    } else return n(void 0, u);
  }
  function a(l, u, p) {
    if (p in t) return n(l, u);
    if (p in e) return n(void 0, l);
  }
  const c = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, u) => r(mi(l), mi(u), !0),
  };
  return (
    d.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const p = c[u] || r,
        m = p(e[u], t[u], u);
      (d.isUndefined(m) && p !== a) || (i[u] = m);
    }),
    i
  );
}
const Ki = "1.5.0",
  Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Re[e] = function (n) {
      return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const gi = {};
Re.transitional = function (t, i, n) {
  function r(s, o) {
    return (
      "[Axios v" +
      Ki +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (n ? ". " + n : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new w(
        r(o, " has been removed" + (i ? " in " + i : "")),
        w.ERR_DEPRECATED
      );
    return (
      i &&
        !gi[o] &&
        ((gi[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              i +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, a) : !0
    );
  };
};
function Pr(e, t, i) {
  if (typeof e != "object")
    throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const s = n[r],
      o = t[s];
    if (o) {
      const a = e[s],
        c = a === void 0 || o(a, s, e);
      if (c !== !0)
        throw new w("option " + s + " must be " + c, w.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0) throw new w("Unknown option " + s, w.ERR_BAD_OPTION);
  }
}
const Ee = { assertOptions: Pr, validators: Re },
  X = Ee.validators;
class Xt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new fi(), response: new fi() });
  }
  request(t, i) {
    typeof t == "string" ? ((i = i || {}), (i.url = t)) : (i = t || {}),
      (i = ft(this.defaults, i));
    const { transitional: n, paramsSerializer: r, headers: s } = i;
    n !== void 0 &&
      Ee.assertOptions(
        n,
        {
          silentJSONParsing: X.transitional(X.boolean),
          forcedJSONParsing: X.transitional(X.boolean),
          clarifyTimeoutError: X.transitional(X.boolean),
        },
        !1
      ),
      r != null &&
        (d.isFunction(r)
          ? (i.paramsSerializer = { serialize: r })
          : Ee.assertOptions(
              r,
              { encode: X.function, serialize: X.function },
              !0
            )),
      (i.method = (i.method || this.defaults.method || "get").toLowerCase());
    let o = s && d.merge(s.common, s[i.method]);
    s &&
      d.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (f) => {
          delete s[f];
        }
      ),
      (i.headers = $.concat(o, s));
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(i) === !1) ||
        ((c = c && h.synchronous), a.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u,
      p = 0,
      m;
    if (!c) {
      const f = [vi.bind(this), void 0];
      for (
        f.unshift.apply(f, a),
          f.push.apply(f, l),
          m = f.length,
          u = Promise.resolve(i);
        p < m;

      )
        u = u.then(f[p++], f[p++]);
      return u;
    }
    m = a.length;
    let v = i;
    for (p = 0; p < m; ) {
      const f = a[p++],
        h = a[p++];
      try {
        v = f(v);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      u = vi.call(this, v);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, m = l.length; p < m; ) u = u.then(l[p++], l[p++]);
    return u;
  }
  getUri(t) {
    t = ft(this.defaults, t);
    const i = $i(t.baseURL, t.url);
    return Ui(i, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function (t) {
  Xt.prototype[t] = function (i, n) {
    return this.request(
      ft(n || {}, { method: t, url: i, data: (n || {}).data })
    );
  };
});
d.forEach(["post", "put", "patch"], function (t) {
  function i(n) {
    return function (s, o, a) {
      return this.request(
        ft(a || {}, {
          method: t,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (Xt.prototype[t] = i()), (Xt.prototype[t + "Form"] = i(!0));
});
const $t = Xt;
class De {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function (s) {
      i = s;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; ) n._listeners[s](r);
      n._listeners = null;
    }),
      (this.promise.then = (r) => {
        let s;
        const o = new Promise((a) => {
          n.subscribe(a), (s = a);
        }).then(r);
        return (
          (o.cancel = function () {
            n.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        n.reason || ((n.reason = new kt(s, o, a)), i(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
  static source() {
    let t;
    return {
      token: new De(function (r) {
        t = r;
      }),
      cancel: t,
    };
  }
}
const Rr = De;
function Dr(e) {
  return function (i) {
    return e.apply(null, i);
  };
}
function jr(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Oe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Oe).forEach(([e, t]) => {
  Oe[t] = e;
});
const Ir = Oe;
function Xi(e) {
  const t = new $t(e),
    i = Ci($t.prototype.request, t);
  return (
    d.extend(i, $t.prototype, t, { allOwnKeys: !0 }),
    d.extend(i, t, null, { allOwnKeys: !0 }),
    (i.create = function (r) {
      return Xi(ft(e, r));
    }),
    i
  );
}
const L = Xi(Pe);
L.Axios = $t;
L.CanceledError = kt;
L.CancelToken = Rr;
L.isCancel = Wi;
L.VERSION = Ki;
L.toFormData = le;
L.AxiosError = w;
L.Cancel = L.CanceledError;
L.all = function (t) {
  return Promise.all(t);
};
L.spread = Dr;
L.isAxiosError = jr;
L.mergeConfig = ft;
L.AxiosHeaders = $;
L.formToJSON = (e) => Vi(d.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = Ji.getAdapter;
L.HttpStatusCode = Ir;
L.default = L;
const Br = L;
window.axios = Br;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Nr = (function () {
    function e(t, i) {
      i === void 0 && (i = []),
        (this._eventType = t),
        (this._eventFunctions = i);
    }
    return (
      (e.prototype.init = function () {
        var t = this;
        this._eventFunctions.forEach(function (i) {
          typeof window < "u" && window.addEventListener(t._eventType, i);
        });
      }),
      e
    );
  })(),
  Gt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Gt =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        Gt.apply(this, arguments)
      );
    },
  Yt = {
    alwaysOpen: !1,
    activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
    inactiveClasses: "text-gray-500 dark:text-gray-400",
    onOpen: function () {},
    onClose: function () {},
    onToggle: function () {},
  },
  Gi = (function () {
    function e(t, i) {
      t === void 0 && (t = []),
        i === void 0 && (i = Yt),
        (this._items = t),
        (this._options = Gt(Gt({}, Yt), i)),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._items.length &&
          this._items.map(function (i) {
            i.active && t.open(i.id),
              i.triggerEl.addEventListener("click", function () {
                t.toggle(i.id);
              });
          });
      }),
      (e.prototype.getItem = function (t) {
        return this._items.filter(function (i) {
          return i.id === t;
        })[0];
      }),
      (e.prototype.open = function (t) {
        var i,
          n,
          r = this,
          s = this.getItem(t);
        this._options.alwaysOpen ||
          this._items.map(function (o) {
            var a, c;
            o !== s &&
              ((a = o.triggerEl.classList).remove.apply(
                a,
                r._options.activeClasses.split(" ")
              ),
              (c = o.triggerEl.classList).add.apply(
                c,
                r._options.inactiveClasses.split(" ")
              ),
              o.targetEl.classList.add("hidden"),
              o.triggerEl.setAttribute("aria-expanded", "false"),
              (o.active = !1),
              o.iconEl && o.iconEl.classList.remove("rotate-180"));
          }),
          (i = s.triggerEl.classList).add.apply(
            i,
            this._options.activeClasses.split(" ")
          ),
          (n = s.triggerEl.classList).remove.apply(
            n,
            this._options.inactiveClasses.split(" ")
          ),
          s.triggerEl.setAttribute("aria-expanded", "true"),
          s.targetEl.classList.remove("hidden"),
          (s.active = !0),
          s.iconEl && s.iconEl.classList.add("rotate-180"),
          this._options.onOpen(this, s);
      }),
      (e.prototype.toggle = function (t) {
        var i = this.getItem(t);
        i.active ? this.close(t) : this.open(t),
          this._options.onToggle(this, i);
      }),
      (e.prototype.close = function (t) {
        var i,
          n,
          r = this.getItem(t);
        (i = r.triggerEl.classList).remove.apply(
          i,
          this._options.activeClasses.split(" ")
        ),
          (n = r.triggerEl.classList).add.apply(
            n,
            this._options.inactiveClasses.split(" ")
          ),
          r.targetEl.classList.add("hidden"),
          r.triggerEl.setAttribute("aria-expanded", "false"),
          (r.active = !1),
          r.iconEl && r.iconEl.classList.remove("rotate-180"),
          this._options.onClose(this, r);
      }),
      e
    );
  })();
function je() {
  document.querySelectorAll("[data-accordion]").forEach(function (e) {
    var t = e.getAttribute("data-accordion"),
      i = e.getAttribute("data-active-classes"),
      n = e.getAttribute("data-inactive-classes"),
      r = [];
    e.querySelectorAll("[data-accordion-target]").forEach(function (s) {
      if (s.closest("[data-accordion]") === e) {
        var o = {
          id: s.getAttribute("data-accordion-target"),
          triggerEl: s,
          targetEl: document.querySelector(
            s.getAttribute("data-accordion-target")
          ),
          iconEl: s.querySelector("[data-accordion-icon]"),
          active: s.getAttribute("aria-expanded") === "true",
        };
        r.push(o);
      }
    }),
      new Gi(r, {
        alwaysOpen: t === "open",
        activeClasses: i || Yt.activeClasses,
        inactiveClasses: n || Yt.inactiveClasses,
      });
  });
}
typeof window < "u" && ((window.Accordion = Gi), (window.initAccordions = je));
var Qt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Qt =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        Qt.apply(this, arguments)
      );
    },
  yi = {
    onCollapse: function () {},
    onExpand: function () {},
    onToggle: function () {},
  },
  Yi = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = yi),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Qt(Qt({}, yi), n)),
        (this._visible = !1),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._triggerEl &&
          (this._triggerEl.hasAttribute("aria-expanded")
            ? (this._visible =
                this._triggerEl.getAttribute("aria-expanded") === "true")
            : (this._visible = !this._targetEl.classList.contains("hidden")),
          this._triggerEl.addEventListener("click", function () {
            t.toggle();
          }));
      }),
      (e.prototype.collapse = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onCollapse(this);
      }),
      (e.prototype.expand = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onExpand(this);
      }),
      (e.prototype.toggle = function () {
        this._visible ? this.collapse() : this.expand(),
          this._options.onToggle(this);
      }),
      e
    );
  })();
function Ie() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function (e) {
    var t = e.getAttribute("data-collapse-toggle"),
      i = document.getElementById(t);
    i
      ? new Yi(i, e)
      : console.error(
          'The target element with id "'.concat(
            t,
            '" does not exist. Please check the data-collapse-toggle attribute.'
          )
        );
  });
}
typeof window < "u" && ((window.Collapse = Yi), (window.initCollapses = Ie));
var ot =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ot =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        ot.apply(this, arguments)
      );
    },
  Jt = {
    defaultPosition: 0,
    indicators: {
      items: [],
      activeClasses: "bg-white dark:bg-gray-800",
      inactiveClasses:
        "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
    },
    interval: 3e3,
    onNext: function () {},
    onPrev: function () {},
    onChange: function () {},
  },
  Qi = (function () {
    function e(t, i) {
      t === void 0 && (t = []),
        i === void 0 && (i = Jt),
        (this._items = t),
        (this._options = ot(ot(ot({}, Jt), i), {
          indicators: ot(ot({}, Jt.indicators), i.indicators),
        })),
        (this._activeItem = this.getItem(this._options.defaultPosition)),
        (this._indicators = this._options.indicators.items),
        (this._intervalDuration = this._options.interval),
        (this._intervalInstance = null),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._items.map(function (i) {
          i.el.classList.add(
            "absolute",
            "inset-0",
            "transition-transform",
            "transform"
          );
        }),
          this._getActiveItem()
            ? this.slideTo(this._getActiveItem().position)
            : this.slideTo(0),
          this._indicators.map(function (i, n) {
            i.el.addEventListener("click", function () {
              t.slideTo(n);
            });
          });
      }),
      (e.prototype.getItem = function (t) {
        return this._items[t];
      }),
      (e.prototype.slideTo = function (t) {
        var i = this._items[t],
          n = {
            left:
              i.position === 0
                ? this._items[this._items.length - 1]
                : this._items[i.position - 1],
            middle: i,
            right:
              i.position === this._items.length - 1
                ? this._items[0]
                : this._items[i.position + 1],
          };
        this._rotate(n),
          this._setActiveItem(i),
          this._intervalInstance && (this.pause(), this.cycle()),
          this._options.onChange(this);
      }),
      (e.prototype.next = function () {
        var t = this._getActiveItem(),
          i = null;
        t.position === this._items.length - 1
          ? (i = this._items[0])
          : (i = this._items[t.position + 1]),
          this.slideTo(i.position),
          this._options.onNext(this);
      }),
      (e.prototype.prev = function () {
        var t = this._getActiveItem(),
          i = null;
        t.position === 0
          ? (i = this._items[this._items.length - 1])
          : (i = this._items[t.position - 1]),
          this.slideTo(i.position),
          this._options.onPrev(this);
      }),
      (e.prototype._rotate = function (t) {
        this._items.map(function (i) {
          i.el.classList.add("hidden");
        }),
          t.left.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-20"
          ),
          t.left.el.classList.add("-translate-x-full", "z-10"),
          t.middle.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-10"
          ),
          t.middle.el.classList.add("translate-x-0", "z-20"),
          t.right.el.classList.remove(
            "-translate-x-full",
            "translate-x-full",
            "translate-x-0",
            "hidden",
            "z-20"
          ),
          t.right.el.classList.add("translate-x-full", "z-10");
      }),
      (e.prototype.cycle = function () {
        var t = this;
        typeof window < "u" &&
          (this._intervalInstance = window.setInterval(function () {
            t.next();
          }, this._intervalDuration));
      }),
      (e.prototype.pause = function () {
        clearInterval(this._intervalInstance);
      }),
      (e.prototype._getActiveItem = function () {
        return this._activeItem;
      }),
      (e.prototype._setActiveItem = function (t) {
        var i,
          n,
          r = this;
        this._activeItem = t;
        var s = t.position;
        this._indicators.length &&
          (this._indicators.map(function (o) {
            var a, c;
            o.el.setAttribute("aria-current", "false"),
              (a = o.el.classList).remove.apply(
                a,
                r._options.indicators.activeClasses.split(" ")
              ),
              (c = o.el.classList).add.apply(
                c,
                r._options.indicators.inactiveClasses.split(" ")
              );
          }),
          (i = this._indicators[s].el.classList).add.apply(
            i,
            this._options.indicators.activeClasses.split(" ")
          ),
          (n = this._indicators[s].el.classList).remove.apply(
            n,
            this._options.indicators.inactiveClasses.split(" ")
          ),
          this._indicators[s].el.setAttribute("aria-current", "true"));
      }),
      e
    );
  })();
function Be() {
  document.querySelectorAll("[data-carousel]").forEach(function (e) {
    var t = e.getAttribute("data-carousel-interval"),
      i = e.getAttribute("data-carousel") === "slide",
      n = [],
      r = 0;
    e.querySelectorAll("[data-carousel-item]").length &&
      Array.from(e.querySelectorAll("[data-carousel-item]")).map(function (
        l,
        u
      ) {
        n.push({ position: u, el: l }),
          l.getAttribute("data-carousel-item") === "active" && (r = u);
      });
    var s = [];
    e.querySelectorAll("[data-carousel-slide-to]").length &&
      Array.from(e.querySelectorAll("[data-carousel-slide-to]")).map(function (
        l
      ) {
        s.push({
          position: parseInt(l.getAttribute("data-carousel-slide-to")),
          el: l,
        });
      });
    var o = new Qi(n, {
      defaultPosition: r,
      indicators: { items: s },
      interval: t || Jt.interval,
    });
    i && o.cycle();
    var a = e.querySelector("[data-carousel-next]"),
      c = e.querySelector("[data-carousel-prev]");
    a &&
      a.addEventListener("click", function () {
        o.next();
      }),
      c &&
        c.addEventListener("click", function () {
          o.prev();
        });
  });
}
typeof window < "u" && ((window.Carousel = Qi), (window.initCarousels = Be));
var Zt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Zt =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        Zt.apply(this, arguments)
      );
    },
  bi = {
    transition: "transition-opacity",
    duration: 300,
    timing: "ease-out",
    onHide: function () {},
  },
  Zi = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = bi),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Zt(Zt({}, bi), n)),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._triggerEl &&
          this._triggerEl.addEventListener("click", function () {
            t.hide();
          });
      }),
      (e.prototype.hide = function () {
        var t = this;
        this._targetEl.classList.add(
          this._options.transition,
          "duration-".concat(this._options.duration),
          this._options.timing,
          "opacity-0"
        ),
          setTimeout(function () {
            t._targetEl.classList.add("hidden");
          }, this._options.duration),
          this._options.onHide(this, this._targetEl);
      }),
      e
    );
  })();
function Ne() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function (e) {
    var t = e.getAttribute("data-dismiss-target"),
      i = document.querySelector(t);
    i
      ? new Zi(i, e)
      : console.error(
          'The dismiss element with id "'.concat(
            t,
            '" does not exist. Please check the data-dismiss-target attribute.'
          )
        );
  });
}
typeof window < "u" && ((window.Dismiss = Zi), (window.initDismisses = Ne));
var R = "top",
  F = "bottom",
  H = "right",
  D = "left",
  Fe = "auto",
  Ct = [R, F, H, D],
  pt = "start",
  Lt = "end",
  Fr = "clippingParents",
  tn = "viewport",
  _t = "popper",
  Hr = "reference",
  wi = Ct.reduce(function (e, t) {
    return e.concat([t + "-" + pt, t + "-" + Lt]);
  }, []),
  en = [].concat(Ct, [Fe]).reduce(function (e, t) {
    return e.concat([t, t + "-" + pt, t + "-" + Lt]);
  }, []),
  qr = "beforeRead",
  Mr = "read",
  Ur = "afterRead",
  zr = "beforeMain",
  Vr = "main",
  Wr = "afterMain",
  $r = "beforeWrite",
  Jr = "write",
  Kr = "afterWrite",
  Xr = [qr, Mr, Ur, zr, Vr, Wr, $r, Jr, Kr];
function V(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function I(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function lt(e) {
  var t = I(e).Element;
  return e instanceof t || e instanceof Element;
}
function N(e) {
  var t = I(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function He(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = I(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (i) {
    var n = t.styles[i] || {},
      r = t.attributes[i] || {},
      s = t.elements[i];
    !N(s) ||
      !V(s) ||
      (Object.assign(s.style, n),
      Object.keys(r).forEach(function (o) {
        var a = r[o];
        a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a);
      }));
  });
}
function Yr(e) {
  var t = e.state,
    i = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, i.popper),
    (t.styles = i),
    t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var r = t.elements[n],
          s = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : i[n]),
          a = o.reduce(function (c, l) {
            return (c[l] = ""), c;
          }, {});
        !N(r) ||
          !V(r) ||
          (Object.assign(r.style, a),
          Object.keys(s).forEach(function (c) {
            r.removeAttribute(c);
          }));
      });
    }
  );
}
const Qr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gr,
  effect: Yr,
  requires: ["computeStyles"],
};
function z(e) {
  return e.split("-")[0];
}
var ct = Math.max,
  te = Math.min,
  ht = Math.round;
function Ae() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function nn() {
  return !/^((?!chrome|android).)*safari/i.test(Ae());
}
function vt(e, t, i) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    s = 1;
  t &&
    N(e) &&
    ((r = (e.offsetWidth > 0 && ht(n.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && ht(n.height) / e.offsetHeight) || 1));
  var o = lt(e) ? I(e) : window,
    a = o.visualViewport,
    c = !nn() && i,
    l = (n.left + (c && a ? a.offsetLeft : 0)) / r,
    u = (n.top + (c && a ? a.offsetTop : 0)) / s,
    p = n.width / r,
    m = n.height / s;
  return {
    width: p,
    height: m,
    top: u,
    right: l + p,
    bottom: u + m,
    left: l,
    x: l,
    y: u,
  };
}
function qe(e) {
  var t = vt(e),
    i = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - i) <= 1 && (i = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: i, height: n }
  );
}
function rn(e, t) {
  var i = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (i && He(i)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function J(e) {
  return I(e).getComputedStyle(e);
}
function Zr(e) {
  return ["table", "td", "th"].indexOf(V(e)) >= 0;
}
function tt(e) {
  return ((lt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function de(e) {
  return V(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (He(e) ? e.host : null) || tt(e);
}
function _i(e) {
  return !N(e) || J(e).position === "fixed" ? null : e.offsetParent;
}
function ts(e) {
  var t = /firefox/i.test(Ae()),
    i = /Trident/i.test(Ae());
  if (i && N(e)) {
    var n = J(e);
    if (n.position === "fixed") return null;
  }
  var r = de(e);
  for (He(r) && (r = r.host); N(r) && ["html", "body"].indexOf(V(r)) < 0; ) {
    var s = J(r);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function Pt(e) {
  for (var t = I(e), i = _i(e); i && Zr(i) && J(i).position === "static"; )
    i = _i(i);
  return i &&
    (V(i) === "html" || (V(i) === "body" && J(i).position === "static"))
    ? t
    : i || ts(e) || t;
}
function Me(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Et(e, t, i) {
  return ct(e, te(t, i));
}
function es(e, t, i) {
  var n = Et(e, t, i);
  return n > i ? i : n;
}
function sn() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function on(e) {
  return Object.assign({}, sn(), e);
}
function an(e, t) {
  return t.reduce(function (i, n) {
    return (i[n] = e), i;
  }, {});
}
var is = function (t, i) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, i.rects, { placement: i.placement }))
        : t),
    on(typeof t != "number" ? t : an(t, Ct))
  );
};
function ns(e) {
  var t,
    i = e.state,
    n = e.name,
    r = e.options,
    s = i.elements.arrow,
    o = i.modifiersData.popperOffsets,
    a = z(i.placement),
    c = Me(a),
    l = [D, H].indexOf(a) >= 0,
    u = l ? "height" : "width";
  if (!(!s || !o)) {
    var p = is(r.padding, i),
      m = qe(s),
      v = c === "y" ? R : D,
      f = c === "y" ? F : H,
      h =
        i.rects.reference[u] + i.rects.reference[c] - o[c] - i.rects.popper[u],
      g = o[c] - i.rects.reference[c],
      b = Pt(s),
      _ = b ? (c === "y" ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
      A = h / 2 - g / 2,
      y = p[v],
      E = _ - m[u] - p[f],
      O = _ / 2 - m[u] / 2 + A,
      x = Et(y, O, E),
      k = c;
    i.modifiersData[n] = ((t = {}), (t[k] = x), (t.centerOffset = x - O), t);
  }
}
function rs(e) {
  var t = e.state,
    i = e.options,
    n = i.element,
    r = n === void 0 ? "[data-popper-arrow]" : n;
  r != null &&
    ((typeof r == "string" && ((r = t.elements.popper.querySelector(r)), !r)) ||
      (rn(t.elements.popper, r) && (t.elements.arrow = r)));
}
const ss = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ns,
  effect: rs,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function mt(e) {
  return e.split("-")[1];
}
var os = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function as(e, t) {
  var i = e.x,
    n = e.y,
    r = t.devicePixelRatio || 1;
  return { x: ht(i * r) / r || 0, y: ht(n * r) / r || 0 };
}
function Ei(e) {
  var t,
    i = e.popper,
    n = e.popperRect,
    r = e.placement,
    s = e.variation,
    o = e.offsets,
    a = e.position,
    c = e.gpuAcceleration,
    l = e.adaptive,
    u = e.roundOffsets,
    p = e.isFixed,
    m = o.x,
    v = m === void 0 ? 0 : m,
    f = o.y,
    h = f === void 0 ? 0 : f,
    g = typeof u == "function" ? u({ x: v, y: h }) : { x: v, y: h };
  (v = g.x), (h = g.y);
  var b = o.hasOwnProperty("x"),
    _ = o.hasOwnProperty("y"),
    A = D,
    y = R,
    E = window;
  if (l) {
    var O = Pt(i),
      x = "clientHeight",
      k = "clientWidth";
    if (
      (O === I(i) &&
        ((O = tt(i)),
        J(O).position !== "static" &&
          a === "absolute" &&
          ((x = "scrollHeight"), (k = "scrollWidth"))),
      (O = O),
      r === R || ((r === D || r === H) && s === Lt))
    ) {
      y = F;
      var S = p && O === E && E.visualViewport ? E.visualViewport.height : O[x];
      (h -= S - n.height), (h *= c ? 1 : -1);
    }
    if (r === D || ((r === R || r === F) && s === Lt)) {
      A = H;
      var T = p && O === E && E.visualViewport ? E.visualViewport.width : O[k];
      (v -= T - n.width), (v *= c ? 1 : -1);
    }
  }
  var C = Object.assign({ position: a }, l && os),
    q = u === !0 ? as({ x: v, y: h }, I(i)) : { x: v, y: h };
  if (((v = q.x), (h = q.y), c)) {
    var P;
    return Object.assign(
      {},
      C,
      ((P = {}),
      (P[y] = _ ? "0" : ""),
      (P[A] = b ? "0" : ""),
      (P.transform =
        (E.devicePixelRatio || 1) <= 1
          ? "translate(" + v + "px, " + h + "px)"
          : "translate3d(" + v + "px, " + h + "px, 0)"),
      P)
    );
  }
  return Object.assign(
    {},
    C,
    ((t = {}),
    (t[y] = _ ? h + "px" : ""),
    (t[A] = b ? v + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function cs(e) {
  var t = e.state,
    i = e.options,
    n = i.gpuAcceleration,
    r = n === void 0 ? !0 : n,
    s = i.adaptive,
    o = s === void 0 ? !0 : s,
    a = i.roundOffsets,
    c = a === void 0 ? !0 : a,
    l = {
      placement: z(t.placement),
      variation: mt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Ei(
        Object.assign({}, l, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: c,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Ei(
          Object.assign({}, l, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: c,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const ls = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cs,
  data: {},
};
var Nt = { passive: !0 };
function us(e) {
  var t = e.state,
    i = e.instance,
    n = e.options,
    r = n.scroll,
    s = r === void 0 ? !0 : r,
    o = n.resize,
    a = o === void 0 ? !0 : o,
    c = I(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      l.forEach(function (u) {
        u.addEventListener("scroll", i.update, Nt);
      }),
    a && c.addEventListener("resize", i.update, Nt),
    function () {
      s &&
        l.forEach(function (u) {
          u.removeEventListener("scroll", i.update, Nt);
        }),
        a && c.removeEventListener("resize", i.update, Nt);
    }
  );
}
const ds = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: us,
  data: {},
};
var fs = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return fs[t];
  });
}
var ps = { start: "end", end: "start" };
function Oi(e) {
  return e.replace(/start|end/g, function (t) {
    return ps[t];
  });
}
function Ue(e) {
  var t = I(e),
    i = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: i, scrollTop: n };
}
function ze(e) {
  return vt(tt(e)).left + Ue(e).scrollLeft;
}
function hs(e, t) {
  var i = I(e),
    n = tt(e),
    r = i.visualViewport,
    s = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    c = 0;
  if (r) {
    (s = r.width), (o = r.height);
    var l = nn();
    (l || (!l && t === "fixed")) && ((a = r.offsetLeft), (c = r.offsetTop));
  }
  return { width: s, height: o, x: a + ze(e), y: c };
}
function vs(e) {
  var t,
    i = tt(e),
    n = Ue(e),
    r = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = ct(
      i.scrollWidth,
      i.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    o = ct(
      i.scrollHeight,
      i.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    a = -n.scrollLeft + ze(e),
    c = -n.scrollTop;
  return (
    J(r || i).direction === "rtl" &&
      (a += ct(i.clientWidth, r ? r.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: c }
  );
}
function Ve(e) {
  var t = J(e),
    i = t.overflow,
    n = t.overflowX,
    r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + r + n);
}
function cn(e) {
  return ["html", "body", "#document"].indexOf(V(e)) >= 0
    ? e.ownerDocument.body
    : N(e) && Ve(e)
    ? e
    : cn(de(e));
}
function Ot(e, t) {
  var i;
  t === void 0 && (t = []);
  var n = cn(e),
    r = n === ((i = e.ownerDocument) == null ? void 0 : i.body),
    s = I(n),
    o = r ? [s].concat(s.visualViewport || [], Ve(n) ? n : []) : n,
    a = t.concat(o);
  return r ? a : a.concat(Ot(de(o)));
}
function xe(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function ms(e, t) {
  var i = vt(e, !1, t === "fixed");
  return (
    (i.top = i.top + e.clientTop),
    (i.left = i.left + e.clientLeft),
    (i.bottom = i.top + e.clientHeight),
    (i.right = i.left + e.clientWidth),
    (i.width = e.clientWidth),
    (i.height = e.clientHeight),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function Ai(e, t, i) {
  return t === tn ? xe(hs(e, i)) : lt(t) ? ms(t, i) : xe(vs(tt(e)));
}
function gs(e) {
  var t = Ot(de(e)),
    i = ["absolute", "fixed"].indexOf(J(e).position) >= 0,
    n = i && N(e) ? Pt(e) : e;
  return lt(n)
    ? t.filter(function (r) {
        return lt(r) && rn(r, n) && V(r) !== "body";
      })
    : [];
}
function ys(e, t, i, n) {
  var r = t === "clippingParents" ? gs(e) : [].concat(t),
    s = [].concat(r, [i]),
    o = s[0],
    a = s.reduce(function (c, l) {
      var u = Ai(e, l, n);
      return (
        (c.top = ct(u.top, c.top)),
        (c.right = te(u.right, c.right)),
        (c.bottom = te(u.bottom, c.bottom)),
        (c.left = ct(u.left, c.left)),
        c
      );
    }, Ai(e, o, n));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function ln(e) {
  var t = e.reference,
    i = e.element,
    n = e.placement,
    r = n ? z(n) : null,
    s = n ? mt(n) : null,
    o = t.x + t.width / 2 - i.width / 2,
    a = t.y + t.height / 2 - i.height / 2,
    c;
  switch (r) {
    case R:
      c = { x: o, y: t.y - i.height };
      break;
    case F:
      c = { x: o, y: t.y + t.height };
      break;
    case H:
      c = { x: t.x + t.width, y: a };
      break;
    case D:
      c = { x: t.x - i.width, y: a };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var l = r ? Me(r) : null;
  if (l != null) {
    var u = l === "y" ? "height" : "width";
    switch (s) {
      case pt:
        c[l] = c[l] - (t[u] / 2 - i[u] / 2);
        break;
      case Lt:
        c[l] = c[l] + (t[u] / 2 - i[u] / 2);
        break;
    }
  }
  return c;
}
function Tt(e, t) {
  t === void 0 && (t = {});
  var i = t,
    n = i.placement,
    r = n === void 0 ? e.placement : n,
    s = i.strategy,
    o = s === void 0 ? e.strategy : s,
    a = i.boundary,
    c = a === void 0 ? Fr : a,
    l = i.rootBoundary,
    u = l === void 0 ? tn : l,
    p = i.elementContext,
    m = p === void 0 ? _t : p,
    v = i.altBoundary,
    f = v === void 0 ? !1 : v,
    h = i.padding,
    g = h === void 0 ? 0 : h,
    b = on(typeof g != "number" ? g : an(g, Ct)),
    _ = m === _t ? Hr : _t,
    A = e.rects.popper,
    y = e.elements[f ? _ : m],
    E = ys(lt(y) ? y : y.contextElement || tt(e.elements.popper), c, u, o),
    O = vt(e.elements.reference),
    x = ln({ reference: O, element: A, strategy: "absolute", placement: r }),
    k = xe(Object.assign({}, A, x)),
    S = m === _t ? k : O,
    T = {
      top: E.top - S.top + b.top,
      bottom: S.bottom - E.bottom + b.bottom,
      left: E.left - S.left + b.left,
      right: S.right - E.right + b.right,
    },
    C = e.modifiersData.offset;
  if (m === _t && C) {
    var q = C[r];
    Object.keys(T).forEach(function (P) {
      var et = [H, F].indexOf(P) >= 0 ? 1 : -1,
        it = [R, F].indexOf(P) >= 0 ? "y" : "x";
      T[P] += q[it] * et;
    });
  }
  return T;
}
function bs(e, t) {
  t === void 0 && (t = {});
  var i = t,
    n = i.placement,
    r = i.boundary,
    s = i.rootBoundary,
    o = i.padding,
    a = i.flipVariations,
    c = i.allowedAutoPlacements,
    l = c === void 0 ? en : c,
    u = mt(n),
    p = u
      ? a
        ? wi
        : wi.filter(function (f) {
            return mt(f) === u;
          })
      : Ct,
    m = p.filter(function (f) {
      return l.indexOf(f) >= 0;
    });
  m.length === 0 && (m = p);
  var v = m.reduce(function (f, h) {
    return (
      (f[h] = Tt(e, { placement: h, boundary: r, rootBoundary: s, padding: o })[
        z(h)
      ]),
      f
    );
  }, {});
  return Object.keys(v).sort(function (f, h) {
    return v[f] - v[h];
  });
}
function ws(e) {
  if (z(e) === Fe) return [];
  var t = Kt(e);
  return [Oi(e), t, Oi(t)];
}
function _s(e) {
  var t = e.state,
    i = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var r = i.mainAxis,
        s = r === void 0 ? !0 : r,
        o = i.altAxis,
        a = o === void 0 ? !0 : o,
        c = i.fallbackPlacements,
        l = i.padding,
        u = i.boundary,
        p = i.rootBoundary,
        m = i.altBoundary,
        v = i.flipVariations,
        f = v === void 0 ? !0 : v,
        h = i.allowedAutoPlacements,
        g = t.options.placement,
        b = z(g),
        _ = b === g,
        A = c || (_ || !f ? [Kt(g)] : ws(g)),
        y = [g].concat(A).reduce(function (ut, K) {
          return ut.concat(
            z(K) === Fe
              ? bs(t, {
                  placement: K,
                  boundary: u,
                  rootBoundary: p,
                  padding: l,
                  flipVariations: f,
                  allowedAutoPlacements: h,
                })
              : K
          );
        }, []),
        E = t.rects.reference,
        O = t.rects.popper,
        x = new Map(),
        k = !0,
        S = y[0],
        T = 0;
      T < y.length;
      T++
    ) {
      var C = y[T],
        q = z(C),
        P = mt(C) === pt,
        et = [R, F].indexOf(q) >= 0,
        it = et ? "width" : "height",
        j = Tt(t, {
          placement: C,
          boundary: u,
          rootBoundary: p,
          altBoundary: m,
          padding: l,
        }),
        M = et ? (P ? H : D) : P ? F : R;
      E[it] > O[it] && (M = Kt(M));
      var Rt = Kt(M),
        nt = [];
      if (
        (s && nt.push(j[q] <= 0),
        a && nt.push(j[M] <= 0, j[Rt] <= 0),
        nt.every(function (ut) {
          return ut;
        }))
      ) {
        (S = C), (k = !1);
        break;
      }
      x.set(C, nt);
    }
    if (k)
      for (
        var Dt = f ? 3 : 1,
          fe = function (K) {
            var bt = y.find(function (It) {
              var rt = x.get(It);
              if (rt)
                return rt.slice(0, K).every(function (pe) {
                  return pe;
                });
            });
            if (bt) return (S = bt), "break";
          },
          yt = Dt;
        yt > 0;
        yt--
      ) {
        var jt = fe(yt);
        if (jt === "break") break;
      }
    t.placement !== S &&
      ((t.modifiersData[n]._skip = !0), (t.placement = S), (t.reset = !0));
  }
}
const Es = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _s,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function xi(e, t, i) {
  return (
    i === void 0 && (i = { x: 0, y: 0 }),
    {
      top: e.top - t.height - i.y,
      right: e.right - t.width + i.x,
      bottom: e.bottom - t.height + i.y,
      left: e.left - t.width - i.x,
    }
  );
}
function Li(e) {
  return [R, H, F, D].some(function (t) {
    return e[t] >= 0;
  });
}
function Os(e) {
  var t = e.state,
    i = e.name,
    n = t.rects.reference,
    r = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    o = Tt(t, { elementContext: "reference" }),
    a = Tt(t, { altBoundary: !0 }),
    c = xi(o, n),
    l = xi(a, r, s),
    u = Li(c),
    p = Li(l);
  (t.modifiersData[i] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: l,
    isReferenceHidden: u,
    hasPopperEscaped: p,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": p,
    }));
}
const As = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Os,
};
function xs(e, t, i) {
  var n = z(e),
    r = [D, R].indexOf(n) >= 0 ? -1 : 1,
    s = typeof i == "function" ? i(Object.assign({}, t, { placement: e })) : i,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * r),
    [D, H].indexOf(n) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function Ls(e) {
  var t = e.state,
    i = e.options,
    n = e.name,
    r = i.offset,
    s = r === void 0 ? [0, 0] : r,
    o = en.reduce(function (u, p) {
      return (u[p] = xs(p, t.rects, s)), u;
    }, {}),
    a = o[t.placement],
    c = a.x,
    l = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += c),
    (t.modifiersData.popperOffsets.y += l)),
    (t.modifiersData[n] = o);
}
const Ts = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ls,
};
function Ss(e) {
  var t = e.state,
    i = e.name;
  t.modifiersData[i] = ln({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const ks = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ss,
  data: {},
};
function Cs(e) {
  return e === "x" ? "y" : "x";
}
function Ps(e) {
  var t = e.state,
    i = e.options,
    n = e.name,
    r = i.mainAxis,
    s = r === void 0 ? !0 : r,
    o = i.altAxis,
    a = o === void 0 ? !1 : o,
    c = i.boundary,
    l = i.rootBoundary,
    u = i.altBoundary,
    p = i.padding,
    m = i.tether,
    v = m === void 0 ? !0 : m,
    f = i.tetherOffset,
    h = f === void 0 ? 0 : f,
    g = Tt(t, { boundary: c, rootBoundary: l, padding: p, altBoundary: u }),
    b = z(t.placement),
    _ = mt(t.placement),
    A = !_,
    y = Me(b),
    E = Cs(y),
    O = t.modifiersData.popperOffsets,
    x = t.rects.reference,
    k = t.rects.popper,
    S =
      typeof h == "function"
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    T =
      typeof S == "number"
        ? { mainAxis: S, altAxis: S }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
    C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    q = { x: 0, y: 0 };
  if (O) {
    if (s) {
      var P,
        et = y === "y" ? R : D,
        it = y === "y" ? F : H,
        j = y === "y" ? "height" : "width",
        M = O[y],
        Rt = M + g[et],
        nt = M - g[it],
        Dt = v ? -k[j] / 2 : 0,
        fe = _ === pt ? x[j] : k[j],
        yt = _ === pt ? -k[j] : -x[j],
        jt = t.elements.arrow,
        ut = v && jt ? qe(jt) : { width: 0, height: 0 },
        K = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : sn(),
        bt = K[et],
        It = K[it],
        rt = Et(0, x[j], ut[j]),
        pe = A
          ? x[j] / 2 - Dt - rt - bt - T.mainAxis
          : fe - rt - bt - T.mainAxis,
        mn = A
          ? -x[j] / 2 + Dt + rt + It + T.mainAxis
          : yt + rt + It + T.mainAxis,
        he = t.elements.arrow && Pt(t.elements.arrow),
        gn = he ? (y === "y" ? he.clientTop || 0 : he.clientLeft || 0) : 0,
        Ze = (P = C == null ? void 0 : C[y]) != null ? P : 0,
        yn = M + pe - Ze - gn,
        bn = M + mn - Ze,
        ti = Et(v ? te(Rt, yn) : Rt, M, v ? ct(nt, bn) : nt);
      (O[y] = ti), (q[y] = ti - M);
    }
    if (a) {
      var ei,
        wn = y === "x" ? R : D,
        _n = y === "x" ? F : H,
        st = O[E],
        Bt = E === "y" ? "height" : "width",
        ii = st + g[wn],
        ni = st - g[_n],
        ve = [R, D].indexOf(b) !== -1,
        ri = (ei = C == null ? void 0 : C[E]) != null ? ei : 0,
        si = ve ? ii : st - x[Bt] - k[Bt] - ri + T.altAxis,
        oi = ve ? st + x[Bt] + k[Bt] - ri - T.altAxis : ni,
        ai = v && ve ? es(si, st, oi) : Et(v ? si : ii, st, v ? oi : ni);
      (O[E] = ai), (q[E] = ai - st);
    }
    t.modifiersData[n] = q;
  }
}
const Rs = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ps,
  requiresIfExists: ["offset"],
};
function Ds(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function js(e) {
  return e === I(e) || !N(e) ? Ue(e) : Ds(e);
}
function Is(e) {
  var t = e.getBoundingClientRect(),
    i = ht(t.width) / e.offsetWidth || 1,
    n = ht(t.height) / e.offsetHeight || 1;
  return i !== 1 || n !== 1;
}
function Bs(e, t, i) {
  i === void 0 && (i = !1);
  var n = N(t),
    r = N(t) && Is(t),
    s = tt(t),
    o = vt(e, r, i),
    a = { scrollLeft: 0, scrollTop: 0 },
    c = { x: 0, y: 0 };
  return (
    (n || (!n && !i)) &&
      ((V(t) !== "body" || Ve(s)) && (a = js(t)),
      N(t)
        ? ((c = vt(t, !0)), (c.x += t.clientLeft), (c.y += t.clientTop))
        : s && (c.x = ze(s))),
    {
      x: o.left + a.scrollLeft - c.x,
      y: o.top + a.scrollTop - c.y,
      width: o.width,
      height: o.height,
    }
  );
}
function Ns(e) {
  var t = new Map(),
    i = new Set(),
    n = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function r(s) {
    i.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function (a) {
      if (!i.has(a)) {
        var c = t.get(a);
        c && r(c);
      }
    }),
      n.push(s);
  }
  return (
    e.forEach(function (s) {
      i.has(s.name) || r(s);
    }),
    n
  );
}
function Fs(e) {
  var t = Ns(e);
  return Xr.reduce(function (i, n) {
    return i.concat(
      t.filter(function (r) {
        return r.phase === n;
      })
    );
  }, []);
}
function Hs(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (i) {
          Promise.resolve().then(function () {
            (t = void 0), i(e());
          });
        })),
      t
    );
  };
}
function qs(e) {
  var t = e.reduce(function (i, n) {
    var r = i[n.name];
    return (
      (i[n.name] = r
        ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data),
          })
        : n),
      i
    );
  }, {});
  return Object.keys(t).map(function (i) {
    return t[i];
  });
}
var Ti = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Si() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ms(e) {
  e === void 0 && (e = {});
  var t = e,
    i = t.defaultModifiers,
    n = i === void 0 ? [] : i,
    r = t.defaultOptions,
    s = r === void 0 ? Ti : r;
  return function (a, c, l) {
    l === void 0 && (l = s);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Ti, s),
        modifiersData: {},
        elements: { reference: a, popper: c },
        attributes: {},
        styles: {},
      },
      p = [],
      m = !1,
      v = {
        state: u,
        setOptions: function (b) {
          var _ = typeof b == "function" ? b(u.options) : b;
          h(),
            (u.options = Object.assign({}, s, u.options, _)),
            (u.scrollParents = {
              reference: lt(a)
                ? Ot(a)
                : a.contextElement
                ? Ot(a.contextElement)
                : [],
              popper: Ot(c),
            });
          var A = Fs(qs([].concat(n, u.options.modifiers)));
          return (
            (u.orderedModifiers = A.filter(function (y) {
              return y.enabled;
            })),
            f(),
            v.update()
          );
        },
        forceUpdate: function () {
          if (!m) {
            var b = u.elements,
              _ = b.reference,
              A = b.popper;
            if (Si(_, A)) {
              (u.rects = {
                reference: Bs(_, Pt(A), u.options.strategy === "fixed"),
                popper: qe(A),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (T) {
                  return (u.modifiersData[T.name] = Object.assign({}, T.data));
                });
              for (var y = 0; y < u.orderedModifiers.length; y++) {
                if (u.reset === !0) {
                  (u.reset = !1), (y = -1);
                  continue;
                }
                var E = u.orderedModifiers[y],
                  O = E.fn,
                  x = E.options,
                  k = x === void 0 ? {} : x,
                  S = E.name;
                typeof O == "function" &&
                  (u = O({ state: u, options: k, name: S, instance: v }) || u);
              }
            }
          }
        },
        update: Hs(function () {
          return new Promise(function (g) {
            v.forceUpdate(), g(u);
          });
        }),
        destroy: function () {
          h(), (m = !0);
        },
      };
    if (!Si(a, c)) return v;
    v.setOptions(l).then(function (g) {
      !m && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function f() {
      u.orderedModifiers.forEach(function (g) {
        var b = g.name,
          _ = g.options,
          A = _ === void 0 ? {} : _,
          y = g.effect;
        if (typeof y == "function") {
          var E = y({ state: u, name: b, instance: v, options: A }),
            O = function () {};
          p.push(E || O);
        }
      });
    }
    function h() {
      p.forEach(function (g) {
        return g();
      }),
        (p = []);
    }
    return v;
  };
}
var Us = [ds, ks, ls, Qr, Ts, Es, Rs, ss, As],
  We = Ms({ defaultModifiers: Us }),
  G =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (G =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        G.apply(this, arguments)
      );
    },
  Ft =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t, i) {
      if (i || arguments.length === 2)
        for (var n = 0, r = t.length, s; n < r; n++)
          (s || !(n in t)) &&
            (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
      return e.concat(s || Array.prototype.slice.call(t));
    },
  Y = {
    placement: "bottom",
    triggerType: "click",
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: !1,
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  un = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = Y),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = G(G({}, Y), n)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (e.prototype._setupEventListeners = function () {
        var t = this,
          i = this._getTriggerEvents();
        this._options.triggerType === "click" &&
          i.showEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, function () {
              t.toggle();
            });
          }),
          this._options.triggerType === "hover" &&
            (i.showEvents.forEach(function (n) {
              t._triggerEl.addEventListener(n, function () {
                n === "click"
                  ? t.toggle()
                  : setTimeout(function () {
                      t.show();
                    }, t._options.delay);
              }),
                t._targetEl.addEventListener(n, function () {
                  t.show();
                });
            }),
            i.hideEvents.forEach(function (n) {
              t._triggerEl.addEventListener(n, function () {
                setTimeout(function () {
                  t._targetEl.matches(":hover") || t.hide();
                }, t._options.delay);
              }),
                t._targetEl.addEventListener(n, function () {
                  setTimeout(function () {
                    t._triggerEl.matches(":hover") || t.hide();
                  }, t._options.delay);
                });
            }));
      }),
      (e.prototype._createPopperInstance = function () {
        return We(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [
                  this._options.offsetSkidding,
                  this._options.offsetDistance,
                ],
              },
            },
          ],
        });
      }),
      (e.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (i) {
          t._handleClickOutside(i, t._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (e.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (e.prototype._handleClickOutside = function (t, i) {
        var n = t.target,
          r = this._options.ignoreClickOutsideClass,
          s = !1;
        if (r) {
          var o = document.querySelectorAll(".".concat(r));
          o.forEach(function (a) {
            if (a.contains(n)) {
              s = !0;
              return;
            }
          });
        }
        n !== i &&
          !i.contains(n) &&
          !this._triggerEl.contains(n) &&
          !s &&
          this.isVisible() &&
          this.hide();
      }),
      (e.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "click"],
              hideEvents: ["mouseleave"],
            };
          case "click":
            return { showEvents: ["click"], hideEvents: [] };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return { showEvents: ["click"], hideEvents: [] };
        }
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(),
          this._options.onToggle(this);
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._targetEl.classList.add("block"),
          this._popperInstance.setOptions(function (t) {
            return G(G({}, t), {
              modifiers: Ft(
                Ft([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.remove("block"),
          this._targetEl.classList.add("hidden"),
          this._popperInstance.setOptions(function (t) {
            return G(G({}, t), {
              modifiers: Ft(
                Ft([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          (this._visible = !1),
          this._removeClickOutsideListener(),
          this._options.onHide(this);
      }),
      e
    );
  })();
function $e() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function (e) {
    var t = e.getAttribute("data-dropdown-toggle"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-dropdown-placement"),
        r = e.getAttribute("data-dropdown-offset-skidding"),
        s = e.getAttribute("data-dropdown-offset-distance"),
        o = e.getAttribute("data-dropdown-trigger"),
        a = e.getAttribute("data-dropdown-delay"),
        c = e.getAttribute("data-dropdown-ignore-click-outside-class");
      new un(i, e, {
        placement: n || Y.placement,
        triggerType: o || Y.triggerType,
        offsetSkidding: r ? parseInt(r) : Y.offsetSkidding,
        offsetDistance: s ? parseInt(s) : Y.offsetDistance,
        delay: a ? parseInt(a) : Y.delay,
        ignoreClickOutsideClass: c || Y.ignoreClickOutsideClass,
      });
    } else console.error('The dropdown element with id "'.concat(t, '" does not exist. Please check the data-dropdown-toggle attribute.'));
  });
}
typeof window < "u" && ((window.Dropdown = un), (window.initDropdowns = $e));
var ee =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ee =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        ee.apply(this, arguments)
      );
    },
  dt = {
    placement: "center",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    backdrop: "dynamic",
    closable: !0,
    onHide: function () {},
    onShow: function () {},
    onToggle: function () {},
  },
  Le = (function () {
    function e(t, i) {
      t === void 0 && (t = null),
        i === void 0 && (i = dt),
        (this._targetEl = t),
        (this._options = ee(ee({}, dt), i)),
        (this._isHidden = !0),
        (this._backdropEl = null),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._targetEl &&
          this._getPlacementClasses().map(function (i) {
            t._targetEl.classList.add(i);
          });
      }),
      (e.prototype._createBackdrop = function () {
        var t;
        if (this._isHidden) {
          var i = document.createElement("div");
          i.setAttribute("modal-backdrop", ""),
            (t = i.classList).add.apply(
              t,
              this._options.backdropClasses.split(" ")
            ),
            document.querySelector("body").append(i),
            (this._backdropEl = i);
        }
      }),
      (e.prototype._destroyBackdropEl = function () {
        this._isHidden || document.querySelector("[modal-backdrop]").remove();
      }),
      (e.prototype._setupModalCloseEventListeners = function () {
        var t = this;
        this._options.backdrop === "dynamic" &&
          ((this._clickOutsideEventListener = function (i) {
            t._handleOutsideClick(i.target);
          }),
          this._targetEl.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          )),
          (this._keydownEventListener = function (i) {
            i.key === "Escape" && t.hide();
          }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._removeModalCloseEventListeners = function () {
        this._options.backdrop === "dynamic" &&
          this._targetEl.removeEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          ),
          document.body.removeEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._handleOutsideClick = function (t) {
        (t === this._targetEl ||
          (t === this._backdropEl && this.isVisible())) &&
          this.hide();
      }),
      (e.prototype._getPlacementClasses = function () {
        switch (this._options.placement) {
          case "top-left":
            return ["justify-start", "items-start"];
          case "top-center":
            return ["justify-center", "items-start"];
          case "top-right":
            return ["justify-end", "items-start"];
          case "center-left":
            return ["justify-start", "items-center"];
          case "center":
            return ["justify-center", "items-center"];
          case "center-right":
            return ["justify-end", "items-center"];
          case "bottom-left":
            return ["justify-start", "items-end"];
          case "bottom-center":
            return ["justify-center", "items-end"];
          case "bottom-right":
            return ["justify-end", "items-end"];
          default:
            return ["justify-center", "items-center"];
        }
      }),
      (e.prototype.toggle = function () {
        this._isHidden ? this.show() : this.hide(),
          this._options.onToggle(this);
      }),
      (e.prototype.show = function () {
        this.isHidden &&
          (this._targetEl.classList.add("flex"),
          this._targetEl.classList.remove("hidden"),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._createBackdrop(),
          (this._isHidden = !1),
          document.body.classList.add("overflow-hidden"),
          this._options.closable && this._setupModalCloseEventListeners(),
          this._options.onShow(this));
      }),
      (e.prototype.hide = function () {
        this.isVisible &&
          (this._targetEl.classList.add("hidden"),
          this._targetEl.classList.remove("flex"),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._destroyBackdropEl(),
          (this._isHidden = !0),
          document.body.classList.remove("overflow-hidden"),
          this._options.closable && this._removeModalCloseEventListeners(),
          this._options.onHide(this));
      }),
      (e.prototype.isVisible = function () {
        return !this._isHidden;
      }),
      (e.prototype.isHidden = function () {
        return this._isHidden;
      }),
      e
    );
  })(),
  Ht = function (e, t) {
    return t.some(function (i) {
      return i.id === e;
    })
      ? t.find(function (i) {
          return i.id === e;
        })
      : null;
  };
function Je() {
  var e = [];
  document.querySelectorAll("[data-modal-target]").forEach(function (t) {
    var i = t.getAttribute("data-modal-target"),
      n = document.getElementById(i);
    if (n) {
      var r = n.getAttribute("data-modal-placement"),
        s = n.getAttribute("data-modal-backdrop");
      Ht(i, e) ||
        e.push({
          id: i,
          object: new Le(n, {
            placement: r || dt.placement,
            backdrop: s || dt.backdrop,
          }),
        });
    } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
  }),
    document.querySelectorAll("[data-modal-toggle]").forEach(function (t) {
      var i = t.getAttribute("data-modal-toggle"),
        n = document.getElementById(i);
      if (n) {
        var r = n.getAttribute("data-modal-placement"),
          s = n.getAttribute("data-modal-backdrop"),
          o = Ht(i, e);
        o ||
          ((o = {
            id: i,
            object: new Le(n, {
              placement: r || dt.placement,
              backdrop: s || dt.backdrop,
            }),
          }),
          e.push(o)),
          t.addEventListener("click", function () {
            o.object.toggle();
          });
      } else
        console.error(
          "Modal with id ".concat(
            i,
            " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"
          )
        );
    }),
    document.querySelectorAll("[data-modal-show]").forEach(function (t) {
      var i = t.getAttribute("data-modal-show"),
        n = document.getElementById(i);
      if (n) {
        var r = Ht(i, e);
        r
          ? t.addEventListener("click", function () {
              r.object.isHidden && r.object.show();
            })
          : console.error(
              "Modal with id ".concat(
                i,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
      } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
    }),
    document.querySelectorAll("[data-modal-hide]").forEach(function (t) {
      var i = t.getAttribute("data-modal-hide"),
        n = document.getElementById(i);
      if (n) {
        var r = Ht(i, e);
        r
          ? t.addEventListener("click", function () {
              r.object.isVisible && r.object.hide();
            })
          : console.error(
              "Modal with id ".concat(
                i,
                " has not been initialized. Please initialize it using the data-modal-target attribute."
              )
            );
      } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
    });
}
typeof window < "u" && ((window.Modal = Le), (window.initModals = Je));
var ie =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ie =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        ie.apply(this, arguments)
      );
    },
  at = {
    placement: "left",
    bodyScrolling: !1,
    backdrop: !0,
    edge: !1,
    edgeOffset: "bottom-[60px]",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  dn = (function () {
    function e(t, i) {
      t === void 0 && (t = null),
        i === void 0 && (i = at),
        (this._targetEl = t),
        (this._options = ie(ie({}, at), i)),
        (this._visible = !1),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._targetEl &&
          (this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.classList.add("transition-transform")),
          this._getPlacementClasses(this._options.placement).base.map(function (
            i
          ) {
            t._targetEl.classList.add(i);
          }),
          document.addEventListener("keydown", function (i) {
            i.key === "Escape" && t.isVisible() && t.hide();
          });
      }),
      (e.prototype.hide = function () {
        var t = this;
        this._options.edge
          ? (this._getPlacementClasses(
              this._options.placement + "-edge"
            ).active.map(function (i) {
              t._targetEl.classList.remove(i);
            }),
            this._getPlacementClasses(
              this._options.placement + "-edge"
            ).inactive.map(function (i) {
              t._targetEl.classList.add(i);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(
              function (i) {
                t._targetEl.classList.remove(i);
              }
            ),
            this._getPlacementClasses(this._options.placement).inactive.map(
              function (i) {
                t._targetEl.classList.add(i);
              }
            )),
          this._targetEl.setAttribute("aria-hidden", "true"),
          this._targetEl.removeAttribute("aria-modal"),
          this._targetEl.removeAttribute("role"),
          this._options.bodyScrolling ||
            document.body.classList.remove("overflow-hidden"),
          this._options.backdrop && this._destroyBackdropEl(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (e.prototype.show = function () {
        var t = this;
        this._options.edge
          ? (this._getPlacementClasses(
              this._options.placement + "-edge"
            ).active.map(function (i) {
              t._targetEl.classList.add(i);
            }),
            this._getPlacementClasses(
              this._options.placement + "-edge"
            ).inactive.map(function (i) {
              t._targetEl.classList.remove(i);
            }))
          : (this._getPlacementClasses(this._options.placement).active.map(
              function (i) {
                t._targetEl.classList.add(i);
              }
            ),
            this._getPlacementClasses(this._options.placement).inactive.map(
              function (i) {
                t._targetEl.classList.remove(i);
              }
            )),
          this._targetEl.setAttribute("aria-modal", "true"),
          this._targetEl.setAttribute("role", "dialog"),
          this._targetEl.removeAttribute("aria-hidden"),
          this._options.bodyScrolling ||
            document.body.classList.add("overflow-hidden"),
          this._options.backdrop && this._createBackdrop(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (e.prototype._createBackdrop = function () {
        var t,
          i = this;
        if (!this._visible) {
          var n = document.createElement("div");
          n.setAttribute("drawer-backdrop", ""),
            (t = n.classList).add.apply(
              t,
              this._options.backdropClasses.split(" ")
            ),
            document.querySelector("body").append(n),
            n.addEventListener("click", function () {
              i.hide();
            });
        }
      }),
      (e.prototype._destroyBackdropEl = function () {
        this._visible && document.querySelector("[drawer-backdrop]").remove();
      }),
      (e.prototype._getPlacementClasses = function (t) {
        switch (t) {
          case "top":
            return {
              base: ["top-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["-translate-y-full"],
            };
          case "right":
            return {
              base: ["right-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-x-full"],
            };
          case "bottom":
            return {
              base: ["bottom-0", "left-0", "right-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full"],
            };
          case "left":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["-translate-x-full"],
            };
          case "bottom-edge":
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["translate-y-full", this._options.edgeOffset],
            };
          default:
            return {
              base: ["left-0", "top-0"],
              active: ["transform-none"],
              inactive: ["-translate-x-full"],
            };
        }
      }),
      (e.prototype.isHidden = function () {
        return !this._visible;
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      e
    );
  })(),
  qt = function (e, t) {
    if (
      t.some(function (i) {
        return i.id === e;
      })
    )
      return t.find(function (i) {
        return i.id === e;
      });
  };
function Ke() {
  var e = [];
  document.querySelectorAll("[data-drawer-target]").forEach(function (t) {
    var i = t.getAttribute("data-drawer-target"),
      n = document.getElementById(i);
    if (n) {
      var r = t.getAttribute("data-drawer-placement"),
        s = t.getAttribute("data-drawer-body-scrolling"),
        o = t.getAttribute("data-drawer-backdrop"),
        a = t.getAttribute("data-drawer-edge"),
        c = t.getAttribute("data-drawer-edge-offset");
      qt(i, e) ||
        e.push({
          id: i,
          object: new dn(n, {
            placement: r || at.placement,
            bodyScrolling: s ? s === "true" : at.bodyScrolling,
            backdrop: o ? o === "true" : at.backdrop,
            edge: a ? a === "true" : at.edge,
            edgeOffset: c || at.edgeOffset,
          }),
        });
    } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
  }),
    document.querySelectorAll("[data-drawer-toggle]").forEach(function (t) {
      var i = t.getAttribute("data-drawer-toggle"),
        n = document.getElementById(i);
      if (n) {
        var r = qt(i, e);
        r
          ? t.addEventListener("click", function () {
              r.object.toggle();
            })
          : console.error(
              "Drawer with id ".concat(
                i,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }),
    document
      .querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]")
      .forEach(function (t) {
        var i = t.getAttribute("data-drawer-dismiss")
            ? t.getAttribute("data-drawer-dismiss")
            : t.getAttribute("data-drawer-hide"),
          n = document.getElementById(i);
        if (n) {
          var r = qt(i, e);
          r
            ? t.addEventListener("click", function () {
                r.object.hide();
              })
            : console.error(
                "Drawer with id ".concat(
                  i,
                  " has not been initialized. Please initialize it using the data-drawer-target attribute."
                )
              );
        } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
      }),
    document.querySelectorAll("[data-drawer-show]").forEach(function (t) {
      var i = t.getAttribute("data-drawer-show"),
        n = document.getElementById(i);
      if (n) {
        var r = qt(i, e);
        r
          ? t.addEventListener("click", function () {
              r.object.show();
            })
          : console.error(
              "Drawer with id ".concat(
                i,
                " has not been initialized. Please initialize it using the data-drawer-target attribute."
              )
            );
      } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    });
}
typeof window < "u" && ((window.Drawer = dn), (window.initDrawers = Ke));
var ne =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ne =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        ne.apply(this, arguments)
      );
    },
  ki = {
    defaultTabId: null,
    activeClasses:
      "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
    inactiveClasses:
      "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
    onShow: function () {},
  },
  fn = (function () {
    function e(t, i) {
      t === void 0 && (t = []),
        i === void 0 && (i = ki),
        (this._items = t),
        (this._activeTab = i ? this.getTab(i.defaultTabId) : null),
        (this._options = ne(ne({}, ki), i)),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        this._items.length &&
          (this._activeTab || this._setActiveTab(this._items[0]),
          this.show(this._activeTab.id, !0),
          this._items.map(function (i) {
            i.triggerEl.addEventListener("click", function () {
              t.show(i.id);
            });
          }));
      }),
      (e.prototype.getActiveTab = function () {
        return this._activeTab;
      }),
      (e.prototype._setActiveTab = function (t) {
        this._activeTab = t;
      }),
      (e.prototype.getTab = function (t) {
        return this._items.filter(function (i) {
          return i.id === t;
        })[0];
      }),
      (e.prototype.show = function (t, i) {
        var n,
          r,
          s = this;
        i === void 0 && (i = !1);
        var o = this.getTab(t);
        (o === this._activeTab && !i) ||
          (this._items.map(function (a) {
            var c, l;
            a !== o &&
              ((c = a.triggerEl.classList).remove.apply(
                c,
                s._options.activeClasses.split(" ")
              ),
              (l = a.triggerEl.classList).add.apply(
                l,
                s._options.inactiveClasses.split(" ")
              ),
              a.targetEl.classList.add("hidden"),
              a.triggerEl.setAttribute("aria-selected", "false"));
          }),
          (n = o.triggerEl.classList).add.apply(
            n,
            this._options.activeClasses.split(" ")
          ),
          (r = o.triggerEl.classList).remove.apply(
            r,
            this._options.inactiveClasses.split(" ")
          ),
          o.triggerEl.setAttribute("aria-selected", "true"),
          o.targetEl.classList.remove("hidden"),
          this._setActiveTab(o),
          this._options.onShow(this, o));
      }),
      e
    );
  })();
function Xe() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function (e) {
    var t = [],
      i = null;
    e.querySelectorAll('[role="tab"]').forEach(function (n) {
      var r = n.getAttribute("aria-selected") === "true",
        s = {
          id: n.getAttribute("data-tabs-target"),
          triggerEl: n,
          targetEl: document.querySelector(n.getAttribute("data-tabs-target")),
        };
      t.push(s), r && (i = s.id);
    }),
      new fn(t, { defaultTabId: i });
  });
}
typeof window < "u" && ((window.Tabs = fn), (window.initTabs = Xe));
var Q =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Q =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        Q.apply(this, arguments)
      );
    },
  Mt =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t, i) {
      if (i || arguments.length === 2)
        for (var n = 0, r = t.length, s; n < r; n++)
          (s || !(n in t)) &&
            (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
      return e.concat(s || Array.prototype.slice.call(t));
    },
  re = {
    placement: "top",
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  pn = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = re),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Q(Q({}, re), n)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (e.prototype._setupEventListeners = function () {
        var t = this,
          i = this._getTriggerEvents();
        i.showEvents.forEach(function (n) {
          t._triggerEl.addEventListener(n, function () {
            t.show();
          });
        }),
          i.hideEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, function () {
              t.hide();
            });
          });
      }),
      (e.prototype._createPopperInstance = function () {
        return We(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
        });
      }),
      (e.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      (e.prototype._setupKeydownListener = function () {
        var t = this;
        (this._keydownEventListener = function (i) {
          i.key === "Escape" && t.hide();
        }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._removeKeydownListener = function () {
        document.body.removeEventListener(
          "keydown",
          this._keydownEventListener,
          !0
        );
      }),
      (e.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (i) {
          t._handleClickOutside(i, t._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (e.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (e.prototype._handleClickOutside = function (t, i) {
        var n = t.target;
        n !== i &&
          !i.contains(n) &&
          !this._triggerEl.contains(n) &&
          this.isVisible() &&
          this.hide();
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show();
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (t) {
            return Q(Q({}, t), {
              modifiers: Mt(
                Mt([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (t) {
            return Q(Q({}, t), {
              modifiers: Mt(
                Mt([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      e
    );
  })();
function Ge() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function (e) {
    var t = e.getAttribute("data-tooltip-target"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-tooltip-trigger"),
        r = e.getAttribute("data-tooltip-placement");
      new pn(i, e, {
        placement: r || re.placement,
        triggerType: n || re.triggerType,
      });
    } else console.error('The tooltip element with id "'.concat(t, '" does not exist. Please check the data-tooltip-target attribute.'));
  });
}
typeof window < "u" && ((window.Tooltip = pn), (window.initTooltips = Ge));
var Z =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Z =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        Z.apply(this, arguments)
      );
    },
  Ut =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t, i) {
      if (i || arguments.length === 2)
        for (var n = 0, r = t.length, s; n < r; n++)
          (s || !(n in t)) &&
            (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
      return e.concat(s || Array.prototype.slice.call(t));
    },
  At = {
    placement: "top",
    offset: 10,
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  hn = (function () {
    function e(t, i, n) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = At),
        (this._targetEl = t),
        (this._triggerEl = i),
        (this._options = Z(Z({}, At), n)),
        (this._popperInstance = this._createPopperInstance()),
        (this._visible = !1),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        this._triggerEl && this._setupEventListeners();
      }),
      (e.prototype._setupEventListeners = function () {
        var t = this,
          i = this._getTriggerEvents();
        i.showEvents.forEach(function (n) {
          t._triggerEl.addEventListener(n, function () {
            t.show();
          }),
            t._targetEl.addEventListener(n, function () {
              t.show();
            });
        }),
          i.hideEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, function () {
              setTimeout(function () {
                t._targetEl.matches(":hover") || t.hide();
              }, 100);
            }),
              t._targetEl.addEventListener(n, function () {
                setTimeout(function () {
                  t._triggerEl.matches(":hover") || t.hide();
                }, 100);
              });
          });
      }),
      (e.prototype._createPopperInstance = function () {
        return We(this._triggerEl, this._targetEl, {
          placement: this._options.placement,
          modifiers: [
            { name: "offset", options: { offset: [0, this._options.offset] } },
          ],
        });
      }),
      (e.prototype._getTriggerEvents = function () {
        switch (this._options.triggerType) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      (e.prototype._setupKeydownListener = function () {
        var t = this;
        (this._keydownEventListener = function (i) {
          i.key === "Escape" && t.hide();
        }),
          document.body.addEventListener(
            "keydown",
            this._keydownEventListener,
            !0
          );
      }),
      (e.prototype._removeKeydownListener = function () {
        document.body.removeEventListener(
          "keydown",
          this._keydownEventListener,
          !0
        );
      }),
      (e.prototype._setupClickOutsideListener = function () {
        var t = this;
        (this._clickOutsideEventListener = function (i) {
          t._handleClickOutside(i, t._targetEl);
        }),
          document.body.addEventListener(
            "click",
            this._clickOutsideEventListener,
            !0
          );
      }),
      (e.prototype._removeClickOutsideListener = function () {
        document.body.removeEventListener(
          "click",
          this._clickOutsideEventListener,
          !0
        );
      }),
      (e.prototype._handleClickOutside = function (t, i) {
        var n = t.target;
        n !== i &&
          !i.contains(n) &&
          !this._triggerEl.contains(n) &&
          this.isVisible() &&
          this.hide();
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype.toggle = function () {
        this.isVisible() ? this.hide() : this.show(),
          this._options.onToggle(this);
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("opacity-0", "invisible"),
          this._targetEl.classList.add("opacity-100", "visible"),
          this._popperInstance.setOptions(function (t) {
            return Z(Z({}, t), {
              modifiers: Ut(
                Ut([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !0 }],
                !1
              ),
            });
          }),
          this._setupClickOutsideListener(),
          this._setupKeydownListener(),
          this._popperInstance.update(),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.remove("opacity-100", "visible"),
          this._targetEl.classList.add("opacity-0", "invisible"),
          this._popperInstance.setOptions(function (t) {
            return Z(Z({}, t), {
              modifiers: Ut(
                Ut([], t.modifiers, !0),
                [{ name: "eventListeners", enabled: !1 }],
                !1
              ),
            });
          }),
          this._removeClickOutsideListener(),
          this._removeKeydownListener(),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      e
    );
  })();
function Ye() {
  document.querySelectorAll("[data-popover-target]").forEach(function (e) {
    var t = e.getAttribute("data-popover-target"),
      i = document.getElementById(t);
    if (i) {
      var n = e.getAttribute("data-popover-trigger"),
        r = e.getAttribute("data-popover-placement"),
        s = e.getAttribute("data-popover-offset");
      new hn(i, e, {
        placement: r || At.placement,
        offset: s ? parseInt(s) : At.offset,
        triggerType: n || At.triggerType,
      });
    } else console.error('The popover element with id "'.concat(t, '" does not exist. Please check the data-popover-target attribute.'));
  });
}
typeof window < "u" && ((window.Popover = hn), (window.initPopovers = Ye));
var se =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (se =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }),
        se.apply(this, arguments)
      );
    },
  Te = {
    triggerType: "hover",
    onShow: function () {},
    onHide: function () {},
    onToggle: function () {},
  },
  vn = (function () {
    function e(t, i, n, r) {
      t === void 0 && (t = null),
        i === void 0 && (i = null),
        n === void 0 && (n = null),
        r === void 0 && (r = Te),
        (this._parentEl = t),
        (this._triggerEl = i),
        (this._targetEl = n),
        (this._options = se(se({}, Te), r)),
        (this._visible = !1),
        this._init();
    }
    return (
      (e.prototype._init = function () {
        var t = this;
        if (this._triggerEl) {
          var i = this._getTriggerEventTypes(this._options.triggerType);
          i.showEvents.forEach(function (n) {
            t._triggerEl.addEventListener(n, function () {
              t.show();
            }),
              t._targetEl.addEventListener(n, function () {
                t.show();
              });
          }),
            i.hideEvents.forEach(function (n) {
              t._parentEl.addEventListener(n, function () {
                t._parentEl.matches(":hover") || t.hide();
              });
            });
        }
      }),
      (e.prototype.hide = function () {
        this._targetEl.classList.add("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "false"),
          (this._visible = !1),
          this._options.onHide(this);
      }),
      (e.prototype.show = function () {
        this._targetEl.classList.remove("hidden"),
          this._triggerEl &&
            this._triggerEl.setAttribute("aria-expanded", "true"),
          (this._visible = !0),
          this._options.onShow(this);
      }),
      (e.prototype.toggle = function () {
        this._visible ? this.hide() : this.show();
      }),
      (e.prototype.isHidden = function () {
        return !this._visible;
      }),
      (e.prototype.isVisible = function () {
        return this._visible;
      }),
      (e.prototype._getTriggerEventTypes = function (t) {
        switch (t) {
          case "hover":
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
          case "click":
            return {
              showEvents: ["click", "focus"],
              hideEvents: ["focusout", "blur"],
            };
          case "none":
            return { showEvents: [], hideEvents: [] };
          default:
            return {
              showEvents: ["mouseenter", "focus"],
              hideEvents: ["mouseleave", "blur"],
            };
        }
      }),
      e
    );
  })();
function Qe() {
  document.querySelectorAll("[data-dial-init]").forEach(function (e) {
    var t = e.querySelector("[data-dial-toggle]");
    if (t) {
      var i = t.getAttribute("data-dial-toggle"),
        n = document.getElementById(i);
      if (n) {
        var r = t.getAttribute("data-dial-trigger");
        new vn(e, t, n, { triggerType: r || Te.triggerType });
      } else
        console.error(
          "Dial with id ".concat(
            i,
            " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"
          )
        );
    } else console.error("Dial with id ".concat(e.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
  });
}
typeof window < "u" && ((window.Dial = vn), (window.initDials = Qe));
function zs() {
  je(), Ie(), Be(), Ne(), $e(), Je(), Ke(), Xe(), Ge(), Ye(), Qe();
}
typeof window < "u" && (window.initFlowbite = zs);
var Vs = new Nr("load", [je, Ie, Be, Ne, $e, Je, Ke, Xe, Ge, Ye, Qe]);
Vs.init();
