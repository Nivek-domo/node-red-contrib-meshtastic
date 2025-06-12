function Br(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var m = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, m.get ? m : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
var Ur = {}, kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.Subscription = void 0;
var Jr = (
  /** @class */
  function() {
    function e(n) {
      var t = this;
      this._cancel = n.cancel, this.name = n.sub.name;
      var r = n.sub.cancel;
      n.sub.cancel = function() {
        t._cancel = null, r();
      };
    }
    return Object.defineProperty(e.prototype, "live", {
      /**
       * Indicates whether the subscription is live / active.
       *
       * It can be useful to subscribers when [[cancelAll]] is used without their knowledge.
       */
      get: function() {
        return !!this._cancel;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cancel = function() {
      return this._cancel ? (this._cancel(), this._cancel = null, !0) : !1;
    }, e;
  }()
);
kn.Subscription = Jr;
var Yn = {}, Gn = function(e, n) {
  return Gn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var m in r) Object.prototype.hasOwnProperty.call(r, m) && (t[m] = r[m]);
  }, Gn(e, n);
};
function Mt(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  Gn(e, n);
  function t() {
    this.constructor = e;
  }
  e.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var Pn = function() {
  return Pn = Object.assign || function(n) {
    for (var t, r = 1, m = arguments.length; r < m; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, Pn.apply(this, arguments);
};
function Rt(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var m = 0, r = Object.getOwnPropertySymbols(e); m < r.length; m++)
      n.indexOf(r[m]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[m]) && (t[r[m]] = e[r[m]]);
  return t;
}
function Ft(e, n, t, r) {
  var m = arguments.length, i = m < 3 ? n : r === null ? r = Object.getOwnPropertyDescriptor(n, t) : r, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(e, n, t, r);
  else for (var s = e.length - 1; s >= 0; s--) (u = e[s]) && (i = (m < 3 ? u(i) : m > 3 ? u(n, t, i) : u(n, t)) || i);
  return m > 3 && i && Object.defineProperty(n, t, i), i;
}
function At(e, n) {
  return function(t, r) {
    n(t, r, e);
  };
}
function Vr(e, n, t, r, m, i) {
  function u(w) {
    if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
    return w;
  }
  for (var s = r.kind, o = s === "getter" ? "get" : s === "setter" ? "set" : "value", a = !n && e ? r.static ? e : e.prototype : null, c = n || (a ? Object.getOwnPropertyDescriptor(a, r.name) : {}), l, y = !1, d = t.length - 1; d >= 0; d--) {
    var f = {};
    for (var g in r) f[g] = g === "access" ? {} : r[g];
    for (var g in r.access) f.access[g] = r.access[g];
    f.addInitializer = function(w) {
      if (y) throw new TypeError("Cannot add initializers after decoration has completed");
      i.push(u(w || null));
    };
    var h = (0, t[d])(s === "accessor" ? { get: c.get, set: c.set } : c[o], f);
    if (s === "accessor") {
      if (h === void 0) continue;
      if (h === null || typeof h != "object") throw new TypeError("Object expected");
      (l = u(h.get)) && (c.get = l), (l = u(h.set)) && (c.set = l), (l = u(h.init)) && m.unshift(l);
    } else (l = u(h)) && (s === "field" ? m.unshift(l) : c[o] = l);
  }
  a && Object.defineProperty(a, r.name, c), y = !0;
}
function Gr(e, n, t) {
  for (var r = arguments.length > 2, m = 0; m < n.length; m++)
    t = r ? n[m].call(e, t) : n[m].call(e);
  return r ? t : void 0;
}
function qr(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function Yr(e, n, t) {
  return typeof n == "symbol" && (n = n.description ? "[".concat(n.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0, value: t ? "".concat(t, " ", n) : n });
}
function jt(e, n) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, n);
}
function Lt(e, n, t, r) {
  function m(i) {
    return i instanceof t ? i : new t(function(u) {
      u(i);
    });
  }
  return new (t || (t = Promise))(function(i, u) {
    function s(c) {
      try {
        a(r.next(c));
      } catch (l) {
        u(l);
      }
    }
    function o(c) {
      try {
        a(r.throw(c));
      } catch (l) {
        u(l);
      }
    }
    function a(c) {
      c.done ? i(c.value) : m(c.value).then(s, o);
    }
    a((r = r.apply(e, n || [])).next());
  });
}
function Bt(e, n) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, m, i, u = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return u.next = s(0), u.throw = s(1), u.return = s(2), typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function s(a) {
    return function(c) {
      return o([a, c]);
    };
  }
  function o(a) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; u && (u = 0, a[0] && (t = 0)), t; ) try {
      if (r = 1, m && (i = a[0] & 2 ? m.return : a[0] ? m.throw || ((i = m.return) && i.call(m), 0) : m.next) && !(i = i.call(m, a[1])).done) return i;
      switch (m = 0, i && (a = [a[0] & 2, i.value]), a[0]) {
        case 0:
        case 1:
          i = a;
          break;
        case 4:
          return t.label++, { value: a[1], done: !1 };
        case 5:
          t.label++, m = a[1], a = [0];
          continue;
        case 7:
          a = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (a[0] === 6 || a[0] === 2)) {
            t = 0;
            continue;
          }
          if (a[0] === 3 && (!i || a[1] > i[0] && a[1] < i[3])) {
            t.label = a[1];
            break;
          }
          if (a[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = a;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(a);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      a = n.call(e, t);
    } catch (c) {
      a = [6, c], m = 0;
    } finally {
      r = i = 0;
    }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
var Rn = Object.create ? function(e, n, t, r) {
  r === void 0 && (r = t);
  var m = Object.getOwnPropertyDescriptor(n, t);
  (!m || ("get" in m ? !n.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
    return n[t];
  } }), Object.defineProperty(e, r, m);
} : function(e, n, t, r) {
  r === void 0 && (r = t), e[r] = n[t];
};
function Ut(e, n) {
  for (var t in e) t !== "default" && !Object.prototype.hasOwnProperty.call(n, t) && Rn(n, e, t);
}
function Cn(e) {
  var n = typeof Symbol == "function" && Symbol.iterator, t = n && e[n], r = 0;
  if (t) return t.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $n(e, n) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t) return e;
  var r = t.call(e), m, i = [], u;
  try {
    for (; (n === void 0 || n-- > 0) && !(m = r.next()).done; ) i.push(m.value);
  } catch (s) {
    u = { error: s };
  } finally {
    try {
      m && !m.done && (t = r.return) && t.call(r);
    } finally {
      if (u) throw u.error;
    }
  }
  return i;
}
function Jt() {
  for (var e = [], n = 0; n < arguments.length; n++)
    e = e.concat($n(arguments[n]));
  return e;
}
function Vt() {
  for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
  for (var r = Array(e), m = 0, n = 0; n < t; n++)
    for (var i = arguments[n], u = 0, s = i.length; u < s; u++, m++)
      r[m] = i[u];
  return r;
}
function Gt(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, m = n.length, i; r < m; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
function se(e) {
  return this instanceof se ? (this.v = e, this) : new se(e);
}
function qt(e, n, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = t.apply(e, n || []), m, i = [];
  return m = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", u), m[Symbol.asyncIterator] = function() {
    return this;
  }, m;
  function u(d) {
    return function(f) {
      return Promise.resolve(f).then(d, l);
    };
  }
  function s(d, f) {
    r[d] && (m[d] = function(g) {
      return new Promise(function(h, w) {
        i.push([d, g, h, w]) > 1 || o(d, g);
      });
    }, f && (m[d] = f(m[d])));
  }
  function o(d, f) {
    try {
      a(r[d](f));
    } catch (g) {
      y(i[0][3], g);
    }
  }
  function a(d) {
    d.value instanceof se ? Promise.resolve(d.value.v).then(c, l) : y(i[0][2], d);
  }
  function c(d) {
    o("next", d);
  }
  function l(d) {
    o("throw", d);
  }
  function y(d, f) {
    d(f), i.shift(), i.length && o(i[0][0], i[0][1]);
  }
}
function Yt(e) {
  var n, t;
  return n = {}, r("next"), r("throw", function(m) {
    throw m;
  }), r("return"), n[Symbol.iterator] = function() {
    return this;
  }, n;
  function r(m, i) {
    n[m] = e[m] ? function(u) {
      return (t = !t) ? { value: se(e[m](u)), done: !1 } : i ? i(u) : u;
    } : i;
  }
}
function $t(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = e[Symbol.asyncIterator], t;
  return n ? n.call(e) : (e = typeof Cn == "function" ? Cn(e) : e[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function r(i) {
    t[i] = e[i] && function(u) {
      return new Promise(function(s, o) {
        u = e[i](u), m(s, o, u.done, u.value);
      });
    };
  }
  function m(i, u, s, o) {
    Promise.resolve(o).then(function(a) {
      i({ value: a, done: s });
    }, u);
  }
}
function Wt(e, n) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: n }) : e.raw = n, e;
}
var $r = Object.create ? function(e, n) {
  Object.defineProperty(e, "default", { enumerable: !0, value: n });
} : function(e, n) {
  e.default = n;
};
function Xt(e) {
  if (e && e.__esModule) return e;
  var n = {};
  if (e != null) for (var t in e) t !== "default" && Object.prototype.hasOwnProperty.call(e, t) && Rn(n, e, t);
  return $r(n, e), n;
}
function Kt(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ht(e, n, t, r) {
  if (t === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof n == "function" ? e !== n || !r : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? r : t === "a" ? r.call(e) : r ? r.value : n.get(e);
}
function zt(e, n, t, r, m) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !m) throw new TypeError("Private accessor was defined without a setter");
  if (typeof n == "function" ? e !== n || !m : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? m.call(e, t) : m ? m.value = t : n.set(e, t), t;
}
function xt(e, n) {
  if (n === null || typeof n != "object" && typeof n != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? n === e : e.has(n);
}
function Qt(e, n, t) {
  if (n != null) {
    if (typeof n != "object" && typeof n != "function") throw new TypeError("Object expected.");
    var r, m;
    if (t) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = n[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = n[Symbol.dispose], t && (m = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    m && (r = function() {
      try {
        m.call(this);
      } catch (i) {
        return Promise.reject(i);
      }
    }), e.stack.push({ value: n, dispose: r, async: t });
  } else t && e.stack.push({ async: !0 });
  return n;
}
var Wr = typeof SuppressedError == "function" ? SuppressedError : function(e, n, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = e, r.suppressed = n, r;
};
function Zt(e) {
  function n(i) {
    e.error = e.hasError ? new Wr(i, e.error, "An error was suppressed during disposal.") : i, e.hasError = !0;
  }
  var t, r = 0;
  function m() {
    for (; t = e.stack.pop(); )
      try {
        if (!t.async && r === 1) return r = 0, e.stack.push(t), Promise.resolve().then(m);
        if (t.dispose) {
          var i = t.dispose.call(t.value);
          if (t.async) return r |= 2, Promise.resolve(i).then(m, function(u) {
            return n(u), m();
          });
        } else r |= 1;
      } catch (u) {
        n(u);
      }
    if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return m();
}
const Xr = {
  __extends: Mt,
  __assign: Pn,
  __rest: Rt,
  __decorate: Ft,
  __param: At,
  __metadata: jt,
  __awaiter: Lt,
  __generator: Bt,
  __createBinding: Rn,
  __exportStar: Ut,
  __values: Cn,
  __read: $n,
  __spread: Jt,
  __spreadArrays: Vt,
  __spreadArray: Gt,
  __await: se,
  __asyncGenerator: qt,
  __asyncDelegator: Yt,
  __asyncValues: $t,
  __makeTemplateObject: Wt,
  __importStar: Xt,
  __importDefault: Kt,
  __classPrivateFieldGet: Ht,
  __classPrivateFieldSet: zt,
  __classPrivateFieldIn: xt,
  __addDisposableResource: Qt,
  __disposeResources: Zt
}, Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Qt,
  get __assign() {
    return Pn;
  },
  __asyncDelegator: Yt,
  __asyncGenerator: qt,
  __asyncValues: $t,
  __await: se,
  __awaiter: Lt,
  __classPrivateFieldGet: Ht,
  __classPrivateFieldIn: xt,
  __classPrivateFieldSet: zt,
  __createBinding: Rn,
  __decorate: Ft,
  __disposeResources: Zt,
  __esDecorate: Vr,
  __exportStar: Ut,
  __extends: Mt,
  __generator: Bt,
  __importDefault: Kt,
  __importStar: Xt,
  __makeTemplateObject: Wt,
  __metadata: jt,
  __param: At,
  __propKey: qr,
  __read: $n,
  __rest: Rt,
  __runInitializers: Gr,
  __setFunctionName: Yr,
  __spread: Jt,
  __spreadArray: Gt,
  __spreadArrays: Vt,
  __values: Cn,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), eo = /* @__PURE__ */ Br(Kr);
var En = {}, no = {}, Fn = {};
Object.defineProperty(Fn, "__esModule", { value: !0 });
Fn.Private = void 0;
var Hr = (
  /** @class */
  function() {
    function e() {
      this.propMap = /* @__PURE__ */ new WeakMap();
    }
    return e.prototype.get = function(n) {
      return this.propMap.get(n);
    }, e.prototype.set = function(n, t) {
      this.propMap.set(n, t);
    }, e;
  }()
);
Fn.Private = Hr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Private = void 0;
  var n = Fn;
  Object.defineProperty(e, "Private", { enumerable: !0, get: function() {
    return n.Private;
  } });
})(no);
Object.defineProperty(En, "__esModule", { value: !0 });
En.EventConsumer = void 0;
var zr = no, oe = new zr.Private(), xr = (
  /** @class */
  function() {
    function e(n) {
      oe.set(this, n);
    }
    return Object.defineProperty(e.prototype, "count", {
      /**
       * Forwards into [[SubEvent.count]] of the contained event.
       */
      get: function() {
        return oe.get(this).count;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "maxSubs", {
      /**
       * Forwards into [[SubEvent.maxSubs]] of the contained event.
       */
      get: function() {
        return oe.get(this).maxSubs;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.subscribe = function(n, t) {
      return oe.get(this).subscribe(n, t);
    }, e.prototype.once = function(n, t) {
      return oe.get(this).once(n, t);
    }, e.prototype.toPromise = function(n) {
      return oe.get(this).toPromise(n);
    }, e.prototype.getStat = function(n) {
      return oe.get(this).getStat(n);
    }, e;
  }()
);
En.EventConsumer = xr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.SubEvent = e.EmitSchedule = void 0;
  var n = eo, t = kn, r = En, m;
  (function(s) {
    s.sync = "sync", s.async = "async", s.next = "next";
  })(m = e.EmitSchedule || (e.EmitSchedule = {}));
  var i = (
    /** @class */
    function() {
      function s(o) {
        if (this._subs = [], typeof (o ?? {}) != "object")
          throw new TypeError(u.errInvalidOptions);
        this.options = o ?? {};
      }
      return s.prototype.toConsumer = function() {
        return new r.EventConsumer(this);
      }, s.prototype.subscribe = function(o, a) {
        if (typeof (a ?? {}) != "object")
          throw new TypeError(u.errInvalidOptions);
        o = a && "thisArg" in a ? o.bind(a.thisArg) : o;
        var c = function() {
          a && typeof a.onCancel == "function" && a.onCancel();
        }, l = a && a.name, y = { event: this, cb: o, name: l, cancel: c };
        if (typeof this.options.onSubscribe == "function") {
          var d = { event: y.event, name: y.name, data: y.data };
          this.options.onSubscribe(d), y.data = d.data;
        }
        return this._subs.push(y), new t.Subscription({ cancel: this._createCancel(y), sub: y });
      }, s.prototype.once = function(o, a) {
        var c = this.subscribe(function(l) {
          return c.cancel(), o.call(a && a.thisArg, l);
        }, a);
        return c;
      }, s.prototype.emit = function(o, a) {
        var c = this, l;
        if (typeof (a ?? {}) != "object")
          throw new TypeError(u.errInvalidOptions);
        var y = (l = a && a.schedule) !== null && l !== void 0 ? l : m.sync, d = a && typeof a.onFinished == "function" && a.onFinished, f = a && typeof a.onError == "function" && a.onError, g = y === m.sync ? u.callNow : u.callNext, h = y === m.async ? u.callNext : u.callNow;
        return g(function() {
          var w = c._getRecipients();
          w.forEach(function(k, O) {
            return h(function() {
              if (f)
                try {
                  var b = k.cb && k.cb(o);
                  b && typeof b.catch == "function" && b.catch(function(D) {
                    return f(D, k.name);
                  });
                } catch (D) {
                  f(D, k.name);
                }
              else
                k.cb && k.cb(o);
              d && O === w.length - 1 && d(w.length);
            });
          });
        }), this;
      }, Object.defineProperty(s.prototype, "count", {
        /**
         * Current number of live subscriptions.
         */
        get: function() {
          return this._subs.length;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(s.prototype, "maxSubs", {
        /**
         * Maximum number of subscribers that can receive events.
         * Default is 0, meaning `no limit applies`.
         *
         * Newer subscriptions outside of the maximum quota will start
         * receiving events when the older subscriptions get cancelled.
         *
         * It can only be set with the [[constructor]].
         */
        get: function() {
          var o;
          return (o = this.options.maxSubs) !== null && o !== void 0 ? o : 0;
        },
        enumerable: !1,
        configurable: !0
      }), s.prototype.getStat = function(o) {
        var a, c = { named: {}, unnamed: 0 };
        this._subs.forEach(function(d) {
          d.name ? d.name in c.named ? c.named[d.name]++ : c.named[d.name] = 1 : c.unnamed++;
        });
        var l = (a = o && o.minUse) !== null && a !== void 0 ? a : 0;
        if (l > 1)
          for (var y in c.named)
            c.named[y] < l && delete c.named[y];
        return c;
      }, s.prototype.cancelAll = function() {
        var o = typeof this.options.onCancel == "function" && this.options.onCancel, a = o ? n.__spreadArray([], this._subs) : [], c = this._subs.length;
        return this._subs.forEach(function(l) {
          l.cancel(), l.cb = void 0;
        }), this._subs.length = 0, o && a.forEach(function(l) {
          o({ event: l.event, name: l.name, data: l.data });
        }), c;
      }, s.prototype.toPromise = function(o) {
        var a = this;
        if (typeof (o ?? {}) != "object")
          throw new TypeError(u.errInvalidOptions);
        var c = o || {}, l = c.name, y = c.timeout, d = y === void 0 ? -1 : y, f, g = !1;
        return new Promise(function(h, w) {
          var k = function() {
            g || (f && clearTimeout(f), w(new Error(l ? 'Event "' + l + '" cancelled.' : "Event cancelled.")));
          }, O = a.subscribe(function(b) {
            f && clearTimeout(f), g = !0, O.cancel(), h(b);
          }, { name: l, onCancel: k });
          Number.isInteger(d) && d >= 0 && (f = setTimeout(function() {
            g = !0, O.cancel(), w(new Error(l ? 'Event "' + l + '" timed out.' : "Event timed out."));
          }, d));
        });
      }, s.prototype._getRecipients = function() {
        var o = this.maxSubs > 0 ? this.maxSubs : this._subs.length;
        return this._subs.slice(0, o);
      }, s.prototype._createCancel = function(o) {
        var a = this;
        return function() {
          a._cancelSub(o);
        };
      }, s.prototype._cancelSub = function(o) {
        if (this._subs.splice(this._subs.indexOf(o), 1), o.cancel(), o.cb = void 0, typeof this.options.onCancel == "function") {
          var a = { event: o.event, name: o.name, data: o.data };
          this.options.onCancel(a);
        }
      }, s;
    }()
  );
  e.SubEvent = i;
  var u = (
    /** @class */
    function() {
      function s() {
      }
      return s.errInvalidOptions = 'Invalid "options" parameter.', s.callNext = typeof process > "u" ? setTimeout : process.nextTick, s.callNow = function(o) {
        return o();
      }, s;
    }()
  );
})(Yn);
var An = {};
Object.defineProperty(An, "__esModule", { value: !0 });
An.SubEventCount = void 0;
var Qr = eo, Dt = Yn, Zr = (
  /** @class */
  function(e) {
    Qr.__extends(n, e);
    function n(t) {
      var r = e.call(this, t) || this;
      r.onCount = new Dt.SubEvent();
      var m = t && t.emitOptions;
      return r._notify = function(i) {
        return r.onCount.emit(i, m);
      }, r;
    }
    return n.prototype.cancelAll = function() {
      var t = this.count;
      return t && (e.prototype.cancelAll.call(this), this._notify({ newCount: 0, prevCount: t })), t;
    }, n.prototype._createCancel = function(t) {
      var r = this, m = this._subs;
      return this._notify({ newCount: m.length, prevCount: m.length - 1 }), function() {
        r._cancelSub(t), r._notify({ newCount: m.length, prevCount: m.length + 1 });
      };
    }, n;
  }(Dt.SubEvent)
);
An.SubEventCount = Zr;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.EventConsumer = e.SubEventCount = e.EmitSchedule = e.SubEvent = e.Subscription = void 0;
  var n = kn;
  Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
    return n.Subscription;
  } });
  var t = Yn;
  Object.defineProperty(e, "SubEvent", { enumerable: !0, get: function() {
    return t.SubEvent;
  } }), Object.defineProperty(e, "EmitSchedule", { enumerable: !0, get: function() {
    return t.EmitSchedule;
  } });
  var r = An;
  Object.defineProperty(e, "SubEventCount", { enumerable: !0, get: function() {
    return r.SubEventCount;
  } });
  var m = En;
  Object.defineProperty(e, "EventConsumer", { enumerable: !0, get: function() {
    return m.EventConsumer;
  } });
})(Ur);
var ea = Object.create, Wn = Object.defineProperty, na = Object.getOwnPropertyDescriptor, to = Object.getOwnPropertyNames, ta = Object.getPrototypeOf, oa = Object.prototype.hasOwnProperty, q = (e, n) => function() {
  return n || (0, e[to(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, z = (e, n) => {
  for (var t in n)
    Wn(e, t, { get: n[t], enumerable: !0 });
}, oo = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let m of to(n))
      !oa.call(e, m) && m !== t && Wn(e, m, { get: () => n[m], enumerable: !(r = na(n, m)) || r.enumerable });
  return e;
}, ra = (e, n, t) => (oo(e, n, "default"), t), aa = (e, n, t) => (t = e != null ? ea(ta(e)) : {}, oo(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  Wn(t, "default", { value: e, enumerable: !0 }),
  e
)), Z = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/assert.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.assertFloat32 = e.assertUInt32 = e.assertInt32 = e.assert = void 0;
    function n(c, l) {
      if (!c)
        throw new Error(l);
    }
    e.assert = n;
    var t = 34028234663852886e22, r = -34028234663852886e22, m = 4294967295, i = 2147483647, u = -2147483648;
    function s(c) {
      if (typeof c != "number")
        throw new Error("invalid int 32: " + typeof c);
      if (!Number.isInteger(c) || c > i || c < u)
        throw new Error("invalid int 32: " + c);
    }
    e.assertInt32 = s;
    function o(c) {
      if (typeof c != "number")
        throw new Error("invalid uint 32: " + typeof c);
      if (!Number.isInteger(c) || c > m || c < 0)
        throw new Error("invalid uint 32: " + c);
    }
    e.assertUInt32 = o;
    function a(c) {
      if (typeof c != "number")
        throw new Error("invalid float 32: " + typeof c);
      if (Number.isFinite(c) && (c > t || c < r))
        throw new Error("invalid float 32: " + c);
    }
    e.assertFloat32 = a;
  }
}), Xn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/enum.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeEnum = e.makeEnumType = e.setEnumType = e.getEnumType = void 0;
    var n = Z(), t = Symbol("@bufbuild/protobuf/enum-type");
    function r(o) {
      const a = o[t];
      return (0, n.assert)(a, "missing enum type on enum object"), a;
    }
    e.getEnumType = r;
    function m(o, a, c, l) {
      o[t] = i(a, c.map((y) => ({
        no: y.no,
        name: y.name,
        localName: o[y.no]
      })));
    }
    e.setEnumType = m;
    function i(o, a, c) {
      const l = /* @__PURE__ */ Object.create(null), y = /* @__PURE__ */ Object.create(null), d = [];
      for (const f of a) {
        const g = s(f);
        d.push(g), l[f.name] = g, y[f.no] = g;
      }
      return {
        typeName: o,
        values: d,
        // We do not surface options at this time
        // options: opt?.options ?? Object.create(null),
        findName(f) {
          return l[f];
        },
        findNumber(f) {
          return y[f];
        }
      };
    }
    e.makeEnumType = i;
    function u(o, a, c) {
      const l = {};
      for (const y of a) {
        const d = s(y);
        l[d.localName] = d.no, l[d.no] = d.localName;
      }
      return m(l, o, a), l;
    }
    e.makeEnum = u;
    function s(o) {
      return "localName" in o ? o : Object.assign(Object.assign({}, o), { localName: o.name });
    }
  }
}), x = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/message.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Message = void 0;
    var n = class {
      /**
       * Compare with a message of the same type.
       */
      equals(t) {
        return this.getType().runtime.util.equals(this.getType(), this, t);
      }
      /**
       * Create a deep copy.
       */
      clone() {
        return this.getType().runtime.util.clone(this);
      }
      /**
       * Parse from binary data, merging fields.
       *
       * Repeated fields are appended. Map entries are added, overwriting
       * existing keys.
       *
       * If a message field is already present, it will be merged with the
       * new data.
       */
      fromBinary(t, r) {
        const m = this.getType(), i = m.runtime.bin, u = i.makeReadOptions(r);
        return i.readMessage(this, u.readerFactory(t), t.byteLength, u), this;
      }
      /**
       * Parse a message from a JSON value.
       */
      fromJson(t, r) {
        const m = this.getType(), i = m.runtime.json, u = i.makeReadOptions(r);
        return i.readMessage(m, t, u, this), this;
      }
      /**
       * Parse a message from a JSON string.
       */
      fromJsonString(t, r) {
        let m;
        try {
          m = JSON.parse(t);
        } catch (i) {
          throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
        }
        return this.fromJson(m, r);
      }
      /**
       * Serialize the message to binary data.
       */
      toBinary(t) {
        const r = this.getType(), m = r.runtime.bin, i = m.makeWriteOptions(t), u = i.writerFactory();
        return m.writeMessage(this, u, i), u.finish();
      }
      /**
       * Serialize the message to a JSON value, a JavaScript value that can be
       * passed to JSON.stringify().
       */
      toJson(t) {
        const r = this.getType(), m = r.runtime.json, i = m.makeWriteOptions(t);
        return m.writeMessage(this, i);
      }
      /**
       * Serialize the message to a JSON string.
       */
      toJsonString(t) {
        var r;
        const m = this.toJson(t);
        return JSON.stringify(m, null, (r = t?.prettySpaces) !== null && r !== void 0 ? r : 0);
      }
      /**
       * Override for serialization behavior. This will be invoked when calling
       * JSON.stringify on this message (i.e. JSON.stringify(msg)).
       *
       * Note that this will not serialize google.protobuf.Any with a packed
       * message because the protobuf JSON format specifies that it needs to be
       * unpacked, and this is only possible with a type registry to look up the
       * message type.  As a result, attempting to serialize a message with this
       * type will throw an Error.
       *
       * This method is protected because you should not need to invoke it
       * directly -- instead use JSON.stringify or toJsonString for
       * stringified JSON.  Alternatively, if actual JSON is desired, you should
       * use toJson.
       */
      toJSON() {
        return this.toJson({
          emitDefaultValues: !0
        });
      }
      /**
       * Retrieve the MessageType of this message - a singleton that represents
       * the protobuf message declaration and provides metadata for reflection-
       * based operations.
       */
      getType() {
        return Object.getPrototypeOf(this).constructor;
      }
    };
    e.Message = n;
  }
}), ia = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/message-type.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeMessageType = void 0;
    var n = x();
    function t(r, m, i, u) {
      var s;
      const o = (s = u?.localName) !== null && s !== void 0 ? s : m.substring(m.lastIndexOf(".") + 1), a = {
        [o]: function(c) {
          r.util.initFields(this), r.util.initPartial(c, this);
        }
      }[o];
      return Object.setPrototypeOf(a.prototype, new n.Message()), Object.assign(a, {
        runtime: r,
        typeName: m,
        fields: r.util.newFieldList(i),
        fromBinary(c, l) {
          return new a().fromBinary(c, l);
        },
        fromJson(c, l) {
          return new a().fromJson(c, l);
        },
        fromJsonString(c, l) {
          return new a().fromJsonString(c, l);
        },
        equals(c, l) {
          return r.util.equals(a, c, l);
        }
      }), a;
    }
    e.makeMessageType = t;
  }
}), Q = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/field.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.LongType = e.ScalarType = void 0;
    var n;
    (function(r) {
      r[r.DOUBLE = 1] = "DOUBLE", r[r.FLOAT = 2] = "FLOAT", r[r.INT64 = 3] = "INT64", r[r.UINT64 = 4] = "UINT64", r[r.INT32 = 5] = "INT32", r[r.FIXED64 = 6] = "FIXED64", r[r.FIXED32 = 7] = "FIXED32", r[r.BOOL = 8] = "BOOL", r[r.STRING = 9] = "STRING", r[r.BYTES = 12] = "BYTES", r[r.UINT32 = 13] = "UINT32", r[r.SFIXED32 = 15] = "SFIXED32", r[r.SFIXED64 = 16] = "SFIXED64", r[r.SINT32 = 17] = "SINT32", r[r.SINT64 = 18] = "SINT64";
    })(n || (e.ScalarType = n = {}));
    var t;
    (function(r) {
      r[r.BIGINT = 0] = "BIGINT", r[r.STRING = 1] = "STRING";
    })(t || (e.LongType = t = {}));
  }
}), ro = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/varint.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.varint32read = e.varint32write = e.uInt64ToString = e.int64ToString = e.int64FromString = e.varint64write = e.varint64read = void 0;
    function n() {
      let d = 0, f = 0;
      for (let h = 0; h < 28; h += 7) {
        let w = this.buf[this.pos++];
        if (d |= (w & 127) << h, !(w & 128))
          return this.assertBounds(), [d, f];
      }
      let g = this.buf[this.pos++];
      if (d |= (g & 15) << 28, f = (g & 112) >> 4, !(g & 128))
        return this.assertBounds(), [d, f];
      for (let h = 3; h <= 31; h += 7) {
        let w = this.buf[this.pos++];
        if (f |= (w & 127) << h, !(w & 128))
          return this.assertBounds(), [d, f];
      }
      throw new Error("invalid varint");
    }
    e.varint64read = n;
    function t(d, f, g) {
      for (let k = 0; k < 28; k = k + 7) {
        const O = d >>> k, b = !(!(O >>> 7) && f == 0), D = (b ? O | 128 : O) & 255;
        if (g.push(D), !b)
          return;
      }
      const h = d >>> 28 & 15 | (f & 7) << 4, w = !!(f >> 3);
      if (g.push((w ? h | 128 : h) & 255), !!w) {
        for (let k = 3; k < 31; k = k + 7) {
          const O = f >>> k, b = !!(O >>> 7), D = (b ? O | 128 : O) & 255;
          if (g.push(D), !b)
            return;
        }
        g.push(f >>> 31 & 1);
      }
    }
    e.varint64write = t;
    var r = 4294967296;
    function m(d) {
      const f = d[0] === "-";
      f && (d = d.slice(1));
      const g = 1e6;
      let h = 0, w = 0;
      function k(O, b) {
        const D = Number(d.slice(O, b));
        w *= g, h = h * g + D, h >= r && (w = w + (h / r | 0), h = h % r);
      }
      return k(-24, -18), k(-18, -12), k(-12, -6), k(-6), f ? a(h, w) : o(h, w);
    }
    e.int64FromString = m;
    function i(d, f) {
      let g = o(d, f);
      const h = g.hi & 2147483648;
      h && (g = a(g.lo, g.hi));
      const w = u(g.lo, g.hi);
      return h ? "-" + w : w;
    }
    e.int64ToString = i;
    function u(d, f) {
      if ({ lo: d, hi: f } = s(d, f), f <= 2097151)
        return String(r * f + d);
      const g = d & 16777215, h = (d >>> 24 | f << 8) & 16777215, w = f >> 16 & 65535;
      let k = g + h * 6777216 + w * 6710656, O = h + w * 8147497, b = w * 2;
      const D = 1e7;
      return k >= D && (O += Math.floor(k / D), k %= D), O >= D && (b += Math.floor(O / D), O %= D), b.toString() + c(O) + c(k);
    }
    e.uInt64ToString = u;
    function s(d, f) {
      return { lo: d >>> 0, hi: f >>> 0 };
    }
    function o(d, f) {
      return { lo: d | 0, hi: f | 0 };
    }
    function a(d, f) {
      return f = ~f, d ? d = ~d + 1 : f += 1, o(d, f);
    }
    var c = (d) => {
      const f = String(d);
      return "0000000".slice(f.length) + f;
    };
    function l(d, f) {
      if (d >= 0) {
        for (; d > 127; )
          f.push(d & 127 | 128), d = d >>> 7;
        f.push(d);
      } else {
        for (let g = 0; g < 9; g++)
          f.push(d & 127 | 128), d = d >> 7;
        f.push(1);
      }
    }
    e.varint32write = l;
    function y() {
      let d = this.buf[this.pos++], f = d & 127;
      if (!(d & 128))
        return this.assertBounds(), f;
      if (d = this.buf[this.pos++], f |= (d & 127) << 7, !(d & 128))
        return this.assertBounds(), f;
      if (d = this.buf[this.pos++], f |= (d & 127) << 14, !(d & 128))
        return this.assertBounds(), f;
      if (d = this.buf[this.pos++], f |= (d & 127) << 21, !(d & 128))
        return this.assertBounds(), f;
      d = this.buf[this.pos++], f |= (d & 15) << 28;
      for (let g = 5; d & 128 && g < 10; g++)
        d = this.buf[this.pos++];
      if (d & 128)
        throw new Error("invalid varint");
      return this.assertBounds(), f >>> 0;
    }
    e.varint32read = y;
  }
}), ne = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/proto-int64.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.protoInt64 = void 0;
    var n = Z(), t = ro();
    function r() {
      const m = new DataView(new ArrayBuffer(8));
      if (typeof BigInt == "function" && typeof m.getBigInt64 == "function" && typeof m.getBigUint64 == "function" && typeof m.setBigInt64 == "function" && typeof m.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1")) {
        const o = BigInt("-9223372036854775808"), a = BigInt("9223372036854775807"), c = BigInt("0"), l = BigInt("18446744073709551615");
        return {
          zero: BigInt(0),
          supported: !0,
          parse(y) {
            const d = typeof y == "bigint" ? y : BigInt(y);
            if (d > a || d < o)
              throw new Error(`int64 invalid: ${y}`);
            return d;
          },
          uParse(y) {
            const d = typeof y == "bigint" ? y : BigInt(y);
            if (d > l || d < c)
              throw new Error(`uint64 invalid: ${y}`);
            return d;
          },
          enc(y) {
            return m.setBigInt64(0, this.parse(y), !0), {
              lo: m.getInt32(0, !0),
              hi: m.getInt32(4, !0)
            };
          },
          uEnc(y) {
            return m.setBigInt64(0, this.uParse(y), !0), {
              lo: m.getInt32(0, !0),
              hi: m.getInt32(4, !0)
            };
          },
          dec(y, d) {
            return m.setInt32(0, y, !0), m.setInt32(4, d, !0), m.getBigInt64(0, !0);
          },
          uDec(y, d) {
            return m.setInt32(0, y, !0), m.setInt32(4, d, !0), m.getBigUint64(0, !0);
          }
        };
      }
      const u = (o) => (0, n.assert)(/^-?[0-9]+$/.test(o), `int64 invalid: ${o}`), s = (o) => (0, n.assert)(/^[0-9]+$/.test(o), `uint64 invalid: ${o}`);
      return {
        zero: "0",
        supported: !1,
        parse(o) {
          return typeof o != "string" && (o = o.toString()), u(o), o;
        },
        uParse(o) {
          return typeof o != "string" && (o = o.toString()), s(o), o;
        },
        enc(o) {
          return typeof o != "string" && (o = o.toString()), u(o), (0, t.int64FromString)(o);
        },
        uEnc(o) {
          return typeof o != "string" && (o = o.toString()), s(o), (0, t.int64FromString)(o);
        },
        dec(o, a) {
          return (0, t.int64ToString)(o, a);
        },
        uDec(o, a) {
          return (0, t.uInt64ToString)(o, a);
        }
      };
    }
    e.protoInt64 = r();
  }
}), jn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/binary-encoding.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BinaryReader = e.BinaryWriter = e.WireType = void 0;
    var n = ro(), t = Z(), r = ne(), m;
    (function(s) {
      s[s.Varint = 0] = "Varint", s[s.Bit64 = 1] = "Bit64", s[s.LengthDelimited = 2] = "LengthDelimited", s[s.StartGroup = 3] = "StartGroup", s[s.EndGroup = 4] = "EndGroup", s[s.Bit32 = 5] = "Bit32";
    })(m || (e.WireType = m = {}));
    var i = class {
      constructor(s) {
        this.stack = [], this.textEncoder = s ?? new TextEncoder(), this.chunks = [], this.buf = [];
      }
      /**
       * Return all bytes written and reset this writer.
       */
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let s = 0;
        for (let c = 0; c < this.chunks.length; c++)
          s += this.chunks[c].length;
        let o = new Uint8Array(s), a = 0;
        for (let c = 0; c < this.chunks.length; c++)
          o.set(this.chunks[c], a), a += this.chunks[c].length;
        return this.chunks = [], o;
      }
      /**
       * Start a new fork for length-delimited data like a message
       * or a packed repeated field.
       *
       * Must be joined later with `join()`.
       */
      fork() {
        return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
      }
      /**
       * Join the last fork. Write its length and bytes, then
       * return to the previous state.
       */
      join() {
        let s = this.finish(), o = this.stack.pop();
        if (!o)
          throw new Error("invalid state, fork stack empty");
        return this.chunks = o.chunks, this.buf = o.buf, this.uint32(s.byteLength), this.raw(s);
      }
      /**
       * Writes a tag (field number and wire type).
       *
       * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
       *
       * Generated code should compute the tag ahead of time and call `uint32()`.
       */
      tag(s, o) {
        return this.uint32((s << 3 | o) >>> 0);
      }
      /**
       * Write a chunk of raw bytes.
       */
      raw(s) {
        return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(s), this;
      }
      /**
       * Write a `uint32` value, an unsigned 32 bit varint.
       */
      uint32(s) {
        for ((0, t.assertUInt32)(s); s > 127; )
          this.buf.push(s & 127 | 128), s = s >>> 7;
        return this.buf.push(s), this;
      }
      /**
       * Write a `int32` value, a signed 32 bit varint.
       */
      int32(s) {
        return (0, t.assertInt32)(s), (0, n.varint32write)(s, this.buf), this;
      }
      /**
       * Write a `bool` value, a variant.
       */
      bool(s) {
        return this.buf.push(s ? 1 : 0), this;
      }
      /**
       * Write a `bytes` value, length-delimited arbitrary data.
       */
      bytes(s) {
        return this.uint32(s.byteLength), this.raw(s);
      }
      /**
       * Write a `string` value, length-delimited data converted to UTF-8 text.
       */
      string(s) {
        let o = this.textEncoder.encode(s);
        return this.uint32(o.byteLength), this.raw(o);
      }
      /**
       * Write a `float` value, 32-bit floating point number.
       */
      float(s) {
        (0, t.assertFloat32)(s);
        let o = new Uint8Array(4);
        return new DataView(o.buffer).setFloat32(0, s, !0), this.raw(o);
      }
      /**
       * Write a `double` value, a 64-bit floating point number.
       */
      double(s) {
        let o = new Uint8Array(8);
        return new DataView(o.buffer).setFloat64(0, s, !0), this.raw(o);
      }
      /**
       * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
       */
      fixed32(s) {
        (0, t.assertUInt32)(s);
        let o = new Uint8Array(4);
        return new DataView(o.buffer).setUint32(0, s, !0), this.raw(o);
      }
      /**
       * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
       */
      sfixed32(s) {
        (0, t.assertInt32)(s);
        let o = new Uint8Array(4);
        return new DataView(o.buffer).setInt32(0, s, !0), this.raw(o);
      }
      /**
       * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
       */
      sint32(s) {
        return (0, t.assertInt32)(s), s = (s << 1 ^ s >> 31) >>> 0, (0, n.varint32write)(s, this.buf), this;
      }
      /**
       * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
       */
      sfixed64(s) {
        let o = new Uint8Array(8), a = new DataView(o.buffer), c = r.protoInt64.enc(s);
        return a.setInt32(0, c.lo, !0), a.setInt32(4, c.hi, !0), this.raw(o);
      }
      /**
       * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
       */
      fixed64(s) {
        let o = new Uint8Array(8), a = new DataView(o.buffer), c = r.protoInt64.uEnc(s);
        return a.setInt32(0, c.lo, !0), a.setInt32(4, c.hi, !0), this.raw(o);
      }
      /**
       * Write a `int64` value, a signed 64-bit varint.
       */
      int64(s) {
        let o = r.protoInt64.enc(s);
        return (0, n.varint64write)(o.lo, o.hi, this.buf), this;
      }
      /**
       * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
       */
      sint64(s) {
        let o = r.protoInt64.enc(s), a = o.hi >> 31, c = o.lo << 1 ^ a, l = (o.hi << 1 | o.lo >>> 31) ^ a;
        return (0, n.varint64write)(c, l, this.buf), this;
      }
      /**
       * Write a `uint64` value, an unsigned 64-bit varint.
       */
      uint64(s) {
        let o = r.protoInt64.uEnc(s);
        return (0, n.varint64write)(o.lo, o.hi, this.buf), this;
      }
    };
    e.BinaryWriter = i;
    var u = class {
      constructor(s, o) {
        this.varint64 = n.varint64read, this.uint32 = n.varint32read, this.buf = s, this.len = s.length, this.pos = 0, this.view = new DataView(s.buffer, s.byteOffset, s.byteLength), this.textDecoder = o ?? new TextDecoder();
      }
      /**
       * Reads a tag - field number and wire type.
       */
      tag() {
        let s = this.uint32(), o = s >>> 3, a = s & 7;
        if (o <= 0 || a < 0 || a > 5)
          throw new Error("illegal tag: field no " + o + " wire type " + a);
        return [o, a];
      }
      /**
       * Skip one element on the wire and return the skipped data.
       * Supports WireType.StartGroup since v2.0.0-alpha.23.
       */
      skip(s) {
        let o = this.pos;
        switch (s) {
          case m.Varint:
            for (; this.buf[this.pos++] & 128; )
              ;
            break;
          case m.Bit64:
            this.pos += 4;
          case m.Bit32:
            this.pos += 4;
            break;
          case m.LengthDelimited:
            let a = this.uint32();
            this.pos += a;
            break;
          case m.StartGroup:
            let c;
            for (; (c = this.tag()[1]) !== m.EndGroup; )
              this.skip(c);
            break;
          default:
            throw new Error("cant skip wire type " + s);
        }
        return this.assertBounds(), this.buf.subarray(o, this.pos);
      }
      /**
       * Throws error if position in byte array is out of range.
       */
      assertBounds() {
        if (this.pos > this.len)
          throw new RangeError("premature EOF");
      }
      /**
       * Read a `int32` field, a signed 32 bit varint.
       */
      int32() {
        return this.uint32() | 0;
      }
      /**
       * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
       */
      sint32() {
        let s = this.uint32();
        return s >>> 1 ^ -(s & 1);
      }
      /**
       * Read a `int64` field, a signed 64-bit varint.
       */
      int64() {
        return r.protoInt64.dec(...this.varint64());
      }
      /**
       * Read a `uint64` field, an unsigned 64-bit varint.
       */
      uint64() {
        return r.protoInt64.uDec(...this.varint64());
      }
      /**
       * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
       */
      sint64() {
        let [s, o] = this.varint64(), a = -(s & 1);
        return s = (s >>> 1 | (o & 1) << 31) ^ a, o = o >>> 1 ^ a, r.protoInt64.dec(s, o);
      }
      /**
       * Read a `bool` field, a variant.
       */
      bool() {
        let [s, o] = this.varint64();
        return s !== 0 || o !== 0;
      }
      /**
       * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
       */
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
      }
      /**
       * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
       */
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
      }
      /**
       * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
       */
      fixed64() {
        return r.protoInt64.uDec(this.sfixed32(), this.sfixed32());
      }
      /**
       * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
       */
      sfixed64() {
        return r.protoInt64.dec(this.sfixed32(), this.sfixed32());
      }
      /**
       * Read a `float` field, 32-bit floating point number.
       */
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
      }
      /**
       * Read a `double` field, a 64-bit floating point number.
       */
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
      }
      /**
       * Read a `bytes` field, length-delimited arbitrary data.
       */
      bytes() {
        let s = this.uint32(), o = this.pos;
        return this.pos += s, this.assertBounds(), this.buf.subarray(o, o + s);
      }
      /**
       * Read a `string` field, length-delimited data converted to UTF-8 text.
       */
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
    e.BinaryReader = u;
  }
}), Nn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/scalars.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scalarTypeInfo = e.scalarDefaultValue = e.scalarEquals = void 0;
    var n = Q(), t = jn(), r = ne();
    function m(s, o, a) {
      if (o === a)
        return !0;
      if (s == n.ScalarType.BYTES) {
        if (!(o instanceof Uint8Array) || !(a instanceof Uint8Array) || o.length !== a.length)
          return !1;
        for (let c = 0; c < o.length; c++)
          if (o[c] !== a[c])
            return !1;
        return !0;
      }
      switch (s) {
        case n.ScalarType.UINT64:
        case n.ScalarType.FIXED64:
        case n.ScalarType.INT64:
        case n.ScalarType.SFIXED64:
        case n.ScalarType.SINT64:
          return o == a;
      }
      return !1;
    }
    e.scalarEquals = m;
    function i(s, o) {
      switch (s) {
        case n.ScalarType.BOOL:
          return !1;
        case n.ScalarType.UINT64:
        case n.ScalarType.FIXED64:
        case n.ScalarType.INT64:
        case n.ScalarType.SFIXED64:
        case n.ScalarType.SINT64:
          return o == 0 ? r.protoInt64.zero : "0";
        case n.ScalarType.DOUBLE:
        case n.ScalarType.FLOAT:
          return 0;
        case n.ScalarType.BYTES:
          return new Uint8Array(0);
        case n.ScalarType.STRING:
          return "";
        default:
          return 0;
      }
    }
    e.scalarDefaultValue = i;
    function u(s, o) {
      const a = o === void 0;
      let c = t.WireType.Varint, l = o === 0;
      switch (s) {
        case n.ScalarType.STRING:
          l = a || !o.length, c = t.WireType.LengthDelimited;
          break;
        case n.ScalarType.BOOL:
          l = o === !1;
          break;
        case n.ScalarType.DOUBLE:
          c = t.WireType.Bit64;
          break;
        case n.ScalarType.FLOAT:
          c = t.WireType.Bit32;
          break;
        case n.ScalarType.INT64:
          l = a || o == 0;
          break;
        case n.ScalarType.UINT64:
          l = a || o == 0;
          break;
        case n.ScalarType.FIXED64:
          l = a || o == 0, c = t.WireType.Bit64;
          break;
        case n.ScalarType.BYTES:
          l = a || !o.byteLength, c = t.WireType.LengthDelimited;
          break;
        case n.ScalarType.FIXED32:
          c = t.WireType.Bit32;
          break;
        case n.ScalarType.SFIXED32:
          c = t.WireType.Bit32;
          break;
        case n.ScalarType.SFIXED64:
          l = a || o == 0, c = t.WireType.Bit64;
          break;
        case n.ScalarType.SINT64:
          l = a || o == 0;
          break;
      }
      const y = n.ScalarType[s].toLowerCase();
      return [c, y, a || l];
    }
    e.scalarTypeInfo = u;
  }
}), Kn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/extensions.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.filterUnknownFields = e.createExtensionContainer = e.makeExtension = void 0;
    var n = Nn();
    function t(u, s, o, a) {
      let c;
      return {
        typeName: s,
        extendee: o,
        get field() {
          if (!c) {
            const l = typeof a == "function" ? a() : a;
            l.name = s.split(".").pop(), l.jsonName = `[${s}]`, c = u.util.newFieldList([l]).list()[0];
          }
          return c;
        },
        runtime: u
      };
    }
    e.makeExtension = t;
    function r(u) {
      const s = u.field.localName, o = /* @__PURE__ */ Object.create(null);
      return o[s] = m(u), [o, () => o[s]];
    }
    e.createExtensionContainer = r;
    function m(u) {
      const s = u.field;
      if (s.repeated)
        return [];
      if (s.default !== void 0)
        return s.default;
      switch (s.kind) {
        case "enum":
          return s.T.values[0].no;
        case "scalar":
          return (0, n.scalarDefaultValue)(s.T, s.L);
        case "message":
          const o = s.T, a = new o();
          return o.fieldWrapper ? o.fieldWrapper.unwrapField(a) : a;
        case "map":
          throw "map fields are not allowed to be extensions";
      }
    }
    function i(u, s) {
      if (!s.repeated && (s.kind == "enum" || s.kind == "scalar")) {
        for (let o = u.length - 1; o >= 0; --o)
          if (u[o].no == s.no)
            return [u[o]];
        return [];
      }
      return u.filter((o) => o.no === s.no);
    }
    e.filterUnknownFields = i;
  }
}), ao = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/proto-runtime.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeProtoRuntime = void 0;
    var n = Xn(), t = ia(), r = Kn();
    function m(i, u, s, o) {
      return {
        syntax: i,
        json: u,
        bin: s,
        util: o,
        makeMessageType(a, c, l) {
          return (0, t.makeMessageType)(this, a, c, l);
        },
        makeEnum: n.makeEnum,
        makeEnumType: n.makeEnumType,
        getEnumType: n.getEnumType,
        makeExtension(a, c, l) {
          return (0, r.makeExtension)(this, a, c, l);
        }
      };
    }
    e.makeProtoRuntime = m;
  }
}), Ln = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/field-wrapper.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getUnwrappedFieldType = e.wrapField = void 0;
    var n = x(), t = Q();
    function r(u, s) {
      return s instanceof n.Message || !u.fieldWrapper ? s : u.fieldWrapper.wrapField(s);
    }
    e.wrapField = r;
    function m(u) {
      if (u.fieldKind === "message" && !u.repeated && u.oneof == null)
        return i[u.message.typeName];
    }
    e.getUnwrappedFieldType = m;
    var i = {
      "google.protobuf.DoubleValue": t.ScalarType.DOUBLE,
      "google.protobuf.FloatValue": t.ScalarType.FLOAT,
      "google.protobuf.Int64Value": t.ScalarType.INT64,
      "google.protobuf.UInt64Value": t.ScalarType.UINT64,
      "google.protobuf.Int32Value": t.ScalarType.INT32,
      "google.protobuf.UInt32Value": t.ScalarType.UINT32,
      "google.protobuf.BoolValue": t.ScalarType.BOOL,
      "google.protobuf.StringValue": t.ScalarType.STRING,
      "google.protobuf.BytesValue": t.ScalarType.BYTES
    };
  }
}), Hn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/binary-format-common.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.writePacked = e.writeScalar = e.writeMessageField = e.writeMapEntry = e.makeBinaryFormatCommon = void 0;
    var n = jn(), t = x(), r = Q(), m = Ln(), i = Nn(), u = Z(), s = Symbol("@bufbuild/protobuf/unknown-fields"), o = {
      readUnknownFields: !0,
      readerFactory: (S) => new n.BinaryReader(S)
    }, a = {
      writeUnknownFields: !0,
      writerFactory: () => new n.BinaryWriter()
    };
    function c(S) {
      return S ? Object.assign(Object.assign({}, o), S) : o;
    }
    function l(S) {
      return S ? Object.assign(Object.assign({}, a), S) : a;
    }
    function y() {
      return {
        makeReadOptions: c,
        makeWriteOptions: l,
        listUnknownFields(S) {
          var C;
          return (C = S[s]) !== null && C !== void 0 ? C : [];
        },
        discardUnknownFields(S) {
          delete S[s];
        },
        writeUnknownFields(S, C) {
          const j = S[s];
          if (j)
            for (const R of j)
              C.tag(R.no, R.wireType).raw(R.data);
        },
        onUnknownField(S, C, N, j) {
          const R = S;
          Array.isArray(R[s]) || (R[s] = []), R[s].push({ no: C, wireType: N, data: j });
        },
        readMessage(S, C, N, j, R) {
          const L = S.getType(), B = R ? C.len : C.pos + N;
          let J, Y;
          for (; C.pos < B && ([J, Y] = C.tag(), Y != n.WireType.EndGroup); ) {
            const X = L.fields.find(J);
            if (!X) {
              const T = C.skip(Y);
              j.readUnknownFields && this.onUnknownField(S, J, Y, T);
              continue;
            }
            d(S, C, X, Y, j);
          }
          if (R && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
          (Y != n.WireType.EndGroup || J !== N))
            throw new Error("invalid end group tag");
        },
        readField: d
      };
    }
    e.makeBinaryFormatCommon = y;
    function d(S, C, N, j, R) {
      let { repeated: L, localName: B } = N;
      switch (N.oneof && (S = S[N.oneof.localName], S.case != B && delete S.value, S.case = B, B = "value"), N.kind) {
        case "scalar":
        case "enum":
          const J = N.kind == "enum" ? r.ScalarType.INT32 : N.T;
          let Y = w;
          if (N.kind == "scalar" && N.L > 0 && (Y = h), L) {
            let I = S[B];
            if (j == n.WireType.LengthDelimited && J != r.ScalarType.STRING && J != r.ScalarType.BYTES) {
              let M = C.uint32() + C.pos;
              for (; C.pos < M; )
                I.push(Y(C, J));
            } else
              I.push(Y(C, J));
          } else
            S[B] = Y(C, J);
          break;
        case "message":
          const X = N.T;
          L ? S[B].push(f(C, new X(), R, N)) : S[B] instanceof t.Message ? f(C, S[B], R, N) : (S[B] = f(C, new X(), R, N), X.fieldWrapper && !N.oneof && !N.repeated && (S[B] = X.fieldWrapper.unwrapField(S[B])));
          break;
        case "map":
          let [T, P] = g(N, C, R);
          S[B][T] = P;
          break;
      }
    }
    function f(S, C, N, j) {
      const R = C.getType().runtime.bin, L = j?.delimited;
      return R.readMessage(
        C,
        S,
        L ? j?.no : S.uint32(),
        // eslint-disable-line @typescript-eslint/strict-boolean-expressions
        N,
        L
      ), C;
    }
    function g(S, C, N) {
      const j = C.uint32(), R = C.pos + j;
      let L, B;
      for (; C.pos < R; ) {
        let [J] = C.tag();
        switch (J) {
          case 1:
            L = w(C, S.K);
            break;
          case 2:
            switch (S.V.kind) {
              case "scalar":
                B = w(C, S.V.T);
                break;
              case "enum":
                B = C.int32();
                break;
              case "message":
                B = f(C, new S.V.T(), N, void 0);
                break;
            }
            break;
        }
      }
      if (L === void 0) {
        let J = (0, i.scalarDefaultValue)(S.K, r.LongType.BIGINT);
        L = S.K == r.ScalarType.BOOL ? J.toString() : J;
      }
      if (typeof L != "string" && typeof L != "number" && (L = L.toString()), B === void 0)
        switch (S.V.kind) {
          case "scalar":
            B = (0, i.scalarDefaultValue)(S.V.T, r.LongType.BIGINT);
            break;
          case "enum":
            B = 0;
            break;
          case "message":
            B = new S.V.T();
            break;
        }
      return [L, B];
    }
    function h(S, C) {
      const N = w(S, C);
      return typeof N == "bigint" ? N.toString() : N;
    }
    function w(S, C) {
      switch (C) {
        case r.ScalarType.STRING:
          return S.string();
        case r.ScalarType.BOOL:
          return S.bool();
        case r.ScalarType.DOUBLE:
          return S.double();
        case r.ScalarType.FLOAT:
          return S.float();
        case r.ScalarType.INT32:
          return S.int32();
        case r.ScalarType.INT64:
          return S.int64();
        case r.ScalarType.UINT64:
          return S.uint64();
        case r.ScalarType.FIXED64:
          return S.fixed64();
        case r.ScalarType.BYTES:
          return S.bytes();
        case r.ScalarType.FIXED32:
          return S.fixed32();
        case r.ScalarType.SFIXED32:
          return S.sfixed32();
        case r.ScalarType.SFIXED64:
          return S.sfixed64();
        case r.ScalarType.SINT64:
          return S.sint64();
        case r.ScalarType.UINT32:
          return S.uint32();
        case r.ScalarType.SINT32:
          return S.sint32();
      }
    }
    function k(S, C, N, j, R) {
      S.tag(N.no, n.WireType.LengthDelimited), S.fork();
      let L = j;
      switch (N.K) {
        case r.ScalarType.INT32:
        case r.ScalarType.FIXED32:
        case r.ScalarType.UINT32:
        case r.ScalarType.SFIXED32:
        case r.ScalarType.SINT32:
          L = Number.parseInt(j);
          break;
        case r.ScalarType.BOOL:
          (0, u.assert)(j == "true" || j == "false"), L = j == "true";
          break;
      }
      switch (b(S, N.K, 1, L, !0), N.V.kind) {
        case "scalar":
          b(S, N.V.T, 2, R, !0);
          break;
        case "enum":
          b(S, r.ScalarType.INT32, 2, R, !0);
          break;
        case "message":
          S.tag(2, n.WireType.LengthDelimited).bytes(R.toBinary(C));
          break;
      }
      S.join();
    }
    e.writeMapEntry = k;
    function O(S, C, N, j) {
      const R = (0, m.wrapField)(N.T, j);
      N?.delimited ? S.tag(N.no, n.WireType.StartGroup).raw(R.toBinary(C)).tag(N.no, n.WireType.EndGroup) : S.tag(N.no, n.WireType.LengthDelimited).bytes(R.toBinary(C));
    }
    e.writeMessageField = O;
    function b(S, C, N, j, R) {
      let [L, B, J] = (0, i.scalarTypeInfo)(C, j);
      (!J || R) && S.tag(N, L)[B](j);
    }
    e.writeScalar = b;
    function D(S, C, N, j) {
      if (!j.length)
        return;
      S.tag(N, n.WireType.LengthDelimited).fork();
      let [, R] = (0, i.scalarTypeInfo)(C);
      for (let L = 0; L < j.length; L++)
        S[R](j[L]);
      S.join();
    }
    e.writePacked = D;
  }
}), sa = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/binary-format-proto3.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeBinaryFormatProto3 = void 0;
    var n = Q(), t = Hn();
    function r() {
      return Object.assign(Object.assign({}, (0, t.makeBinaryFormatCommon)()), {
        writeField: m,
        writeMessage(i, u, s) {
          const o = i.getType();
          for (const a of o.fields.byNumber()) {
            let c, l = a.localName;
            if (a.oneof) {
              const y = i[a.oneof.localName];
              if (y.case !== l)
                continue;
              c = y.value;
            } else
              c = i[l];
            m(a, c, u, s);
          }
          return s.writeUnknownFields && this.writeUnknownFields(i, u), u;
        }
      });
    }
    e.makeBinaryFormatProto3 = r;
    function m(i, u, s, o) {
      const a = i.repeated;
      switch (i.kind) {
        case "scalar":
        case "enum":
          let c = i.kind == "enum" ? n.ScalarType.INT32 : i.T;
          if (a)
            if (i.packed)
              (0, t.writePacked)(s, c, i.no, u);
            else
              for (const l of u)
                (0, t.writeScalar)(s, c, i.no, l, !0);
          else u !== void 0 && (0, t.writeScalar)(s, c, i.no, u, !!i.oneof || i.opt);
          break;
        case "message":
          if (a)
            for (const l of u)
              (0, t.writeMessageField)(s, o, i, l);
          else u !== void 0 && (0, t.writeMessageField)(s, o, i, u);
          break;
        case "map":
          for (const [l, y] of Object.entries(u))
            (0, t.writeMapEntry)(s, o, i, l, y);
          break;
      }
    }
  }
}), zn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/proto-base64.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.protoBase64 = void 0;
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), t = [];
    for (let r = 0; r < n.length; r++)
      t[n[r].charCodeAt(0)] = r;
    t[45] = n.indexOf("+"), t[95] = n.indexOf("/"), e.protoBase64 = {
      /**
       * Decodes a base64 string to a byte array.
       *
       * - ignores white-space, including line breaks and tabs
       * - allows inner padding (can decode concatenated base64 strings)
       * - does not require padding
       * - understands base64url encoding:
       *   "-" instead of "+",
       *   "_" instead of "/",
       *   no padding
       */
      dec(r) {
        let m = r.length * 3 / 4;
        r[r.length - 2] == "=" ? m -= 2 : r[r.length - 1] == "=" && (m -= 1);
        let i = new Uint8Array(m), u = 0, s = 0, o, a = 0;
        for (let c = 0; c < r.length; c++) {
          if (o = t[r.charCodeAt(c)], o === void 0)
            switch (r[c]) {
              case "=":
                s = 0;
              case `
`:
              case "\r":
              case "	":
              case " ":
                continue;
              default:
                throw Error("invalid base64 string.");
            }
          switch (s) {
            case 0:
              a = o, s = 1;
              break;
            case 1:
              i[u++] = a << 2 | (o & 48) >> 4, a = o, s = 2;
              break;
            case 2:
              i[u++] = (a & 15) << 4 | (o & 60) >> 2, a = o, s = 3;
              break;
            case 3:
              i[u++] = (a & 3) << 6 | o, s = 0;
              break;
          }
        }
        if (s == 1)
          throw Error("invalid base64 string.");
        return i.subarray(0, u);
      },
      /**
       * Encode a byte array to a base64 string.
       */
      enc(r) {
        let m = "", i = 0, u, s = 0;
        for (let o = 0; o < r.length; o++)
          switch (u = r[o], i) {
            case 0:
              m += n[u >> 2], s = (u & 3) << 4, i = 1;
              break;
            case 1:
              m += n[s | u >> 4], s = (u & 15) << 2, i = 2;
              break;
            case 2:
              m += n[s | u >> 6], m += n[u & 63], i = 0;
              break;
          }
        return i && (m += n[s], m += "=", i == 1 && (m += "=")), m;
      }
    };
  }
}), io = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/extension-accessor.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.hasExtension = e.clearExtension = e.setExtension = e.getExtension = void 0;
    var n = Z(), t = Kn();
    function r(o, a, c) {
      s(a, o);
      const l = a.runtime.bin.makeReadOptions(c), y = (0, t.filterUnknownFields)(o.getType().runtime.bin.listUnknownFields(o), a.field), [d, f] = (0, t.createExtensionContainer)(a);
      for (const g of y)
        a.runtime.bin.readField(d, l.readerFactory(g.data), a.field, g.wireType, l);
      return f();
    }
    e.getExtension = r;
    function m(o, a, c, l) {
      s(a, o);
      const y = a.runtime.bin.makeReadOptions(l), d = a.runtime.bin.makeWriteOptions(l);
      if (u(o, a)) {
        const w = o.getType().runtime.bin.listUnknownFields(o).filter((k) => k.no != a.field.no);
        o.getType().runtime.bin.discardUnknownFields(o);
        for (const k of w)
          o.getType().runtime.bin.onUnknownField(o, k.no, k.wireType, k.data);
      }
      const f = d.writerFactory();
      let g = a.field;
      !g.opt && !g.repeated && (g.kind == "enum" || g.kind == "scalar") && (g = Object.assign(Object.assign({}, a.field), { opt: !0 })), a.runtime.bin.writeField(g, c, f, d);
      const h = y.readerFactory(f.finish());
      for (; h.pos < h.len; ) {
        const [w, k] = h.tag(), O = h.skip(k);
        o.getType().runtime.bin.onUnknownField(o, w, k, O);
      }
    }
    e.setExtension = m;
    function i(o, a) {
      if (s(a, o), u(o, a)) {
        const c = o.getType().runtime.bin, l = c.listUnknownFields(o).filter((y) => y.no != a.field.no);
        c.discardUnknownFields(o);
        for (const y of l)
          c.onUnknownField(o, y.no, y.wireType, y.data);
      }
    }
    e.clearExtension = i;
    function u(o, a) {
      const c = o.getType();
      return a.extendee.typeName === c.typeName && !!c.runtime.bin.listUnknownFields(o).find((l) => l.no == a.field.no);
    }
    e.hasExtension = u;
    function s(o, a) {
      (0, n.assert)(o.extendee.typeName == a.getType().typeName, `extension ${o.typeName} can only be applied to message ${o.extendee.typeName}`);
    }
  }
}), so = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/json-format-common.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeJsonFormatCommon = void 0;
    var n = x(), t = Q(), r = Z(), m = ne(), i = zn(), u = Kn(), s = io(), o = {
      ignoreUnknownFields: !1
    }, a = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0
    };
    function c(O) {
      return O ? Object.assign(Object.assign({}, o), O) : o;
    }
    function l(O) {
      return O ? Object.assign(Object.assign({}, a), O) : a;
    }
    function y(O, b) {
      const D = b(w, k);
      return {
        makeReadOptions: c,
        makeWriteOptions: l,
        readMessage(S, C, N, j) {
          if (C == null || Array.isArray(C) || typeof C != "object")
            throw new Error(`cannot decode message ${S.typeName} from JSON: ${d(C)}`);
          j = j ?? new S();
          const R = /* @__PURE__ */ new Map(), L = N.typeRegistry;
          for (const [B, J] of Object.entries(C)) {
            const Y = S.fields.findJsonName(B);
            if (Y) {
              if (Y.oneof) {
                if (J === null && Y.kind == "scalar")
                  continue;
                const X = R.get(Y.oneof);
                if (X !== void 0)
                  throw new Error(`cannot decode message ${S.typeName} from JSON: multiple keys for oneof "${Y.oneof.name}" present: "${X}", "${B}"`);
                R.set(Y.oneof, B);
              }
              f(j, J, Y, N, S, O);
            } else {
              let X = !1;
              if (L?.findExtension && B.startsWith("[") && B.endsWith("]")) {
                const T = L.findExtension(B.substring(1, B.length - 1));
                if (T && T.extendee.typeName == S.typeName) {
                  X = !0;
                  const [P, I] = (0, u.createExtensionContainer)(T);
                  f(P, J, T.field, N, T, !0), (0, s.setExtension)(j, T, I(), N);
                }
              }
              if (!X && !N.ignoreUnknownFields)
                throw new Error(`cannot decode message ${S.typeName} from JSON: key "${B}" is unknown`);
            }
          }
          return j;
        },
        writeMessage(S, C) {
          const N = S.getType(), j = {};
          let R;
          try {
            for (const B of N.fields.byMember()) {
              let J;
              if (B.kind == "oneof") {
                const Y = S[B.localName];
                if (Y.value === void 0)
                  continue;
                if (R = B.findField(Y.case), !R)
                  throw "oneof case not found: " + Y.case;
                J = D(R, Y.value, C);
              } else
                R = B, J = D(R, S[R.localName], C);
              J !== void 0 && (j[C.useProtoFieldName ? R.name : R.jsonName] = J);
            }
            const L = C.typeRegistry;
            if (L?.findExtensionFor)
              for (const B of N.runtime.bin.listUnknownFields(S)) {
                const J = L.findExtensionFor(N.typeName, B.no);
                if (J && (0, s.hasExtension)(S, J)) {
                  const Y = (0, s.getExtension)(S, J, C), X = D(J.field, Y, C);
                  X !== void 0 && (j[J.field.jsonName] = X);
                }
              }
          } catch (L) {
            const B = R ? `cannot encode field ${N.typeName}.${R.name} to JSON` : `cannot encode message ${N.typeName} to JSON`, J = L instanceof Error ? L.message : String(L);
            throw new Error(B + (J.length > 0 ? `: ${J}` : ""));
          }
          return j;
        },
        readScalar: (S, C, N) => g(S, C, N, O),
        // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
        writeScalar: k,
        debug: d
      };
    }
    e.makeJsonFormatCommon = y;
    function d(O) {
      if (O === null)
        return "null";
      switch (typeof O) {
        case "object":
          return Array.isArray(O) ? "array" : "object";
        case "string":
          return O.length > 100 ? "string" : `"${O.split('"').join('\\"')}"`;
        default:
          return String(O);
      }
    }
    function f(O, b, D, S, C, N) {
      let j = D.localName;
      if (D.oneof) {
        if (b === null && D.kind == "scalar")
          return;
        O = O[D.oneof.localName] = { case: j }, j = "value";
      }
      if (D.repeated) {
        if (b === null)
          return;
        if (!Array.isArray(b))
          throw new Error(`cannot decode field ${C.typeName}.${D.name} from JSON: ${d(b)}`);
        const R = O[j];
        for (const L of b) {
          if (L === null)
            throw new Error(`cannot decode field ${C.typeName}.${D.name} from JSON: ${d(L)}`);
          let B;
          switch (D.kind) {
            case "message":
              B = D.T.fromJson(L, S);
              break;
            case "enum":
              if (B = h(D.T, L, S.ignoreUnknownFields, !0), B === void 0)
                continue;
              break;
            case "scalar":
              try {
                B = g(D.T, L, D.L, !0);
              } catch (J) {
                let Y = `cannot decode field ${C.typeName}.${D.name} from JSON: ${d(L)}`;
                throw J instanceof Error && J.message.length > 0 && (Y += `: ${J.message}`), new Error(Y);
              }
              break;
          }
          R.push(B);
        }
      } else if (D.kind == "map") {
        if (b === null)
          return;
        if (typeof b != "object" || Array.isArray(b))
          throw new Error(`cannot decode field ${C.typeName}.${D.name} from JSON: ${d(b)}`);
        const R = O[j];
        for (const [L, B] of Object.entries(b)) {
          if (B === null)
            throw new Error(`cannot decode field ${C.typeName}.${D.name} from JSON: map value null`);
          let J;
          switch (D.V.kind) {
            case "message":
              J = D.V.T.fromJson(B, S);
              break;
            case "enum":
              if (J = h(D.V.T, B, S.ignoreUnknownFields, !0), J === void 0)
                continue;
              break;
            case "scalar":
              try {
                J = g(D.V.T, B, t.LongType.BIGINT, !0);
              } catch (Y) {
                let X = `cannot decode map value for field ${C.typeName}.${D.name} from JSON: ${d(b)}`;
                throw Y instanceof Error && Y.message.length > 0 && (X += `: ${Y.message}`), new Error(X);
              }
              break;
          }
          try {
            R[g(D.K, D.K == t.ScalarType.BOOL ? L == "true" ? !0 : L == "false" ? !1 : L : L, t.LongType.BIGINT, !0).toString()] = J;
          } catch (Y) {
            let X = `cannot decode map key for field ${C.typeName}.${D.name} from JSON: ${d(b)}`;
            throw Y instanceof Error && Y.message.length > 0 && (X += `: ${Y.message}`), new Error(X);
          }
        }
      } else
        switch (D.kind) {
          case "message":
            const R = D.T;
            if (b === null && R.typeName != "google.protobuf.Value") {
              if (D.oneof)
                throw new Error(`cannot decode field ${C.typeName}.${D.name} from JSON: null is invalid for oneof field`);
              return;
            }
            O[j] instanceof n.Message ? O[j].fromJson(b, S) : (O[j] = R.fromJson(b, S), R.fieldWrapper && !D.oneof && (O[j] = R.fieldWrapper.unwrapField(O[j])));
            break;
          case "enum":
            const L = h(D.T, b, S.ignoreUnknownFields, N);
            L !== void 0 && (O[j] = L);
            break;
          case "scalar":
            try {
              O[j] = g(D.T, b, D.L, N);
            } catch (B) {
              let J = `cannot decode field ${C.typeName}.${D.name} from JSON: ${d(b)}`;
              throw B instanceof Error && B.message.length > 0 && (J += `: ${B.message}`), new Error(J);
            }
            break;
        }
    }
    function g(O, b, D, S) {
      switch (O) {
        case t.ScalarType.DOUBLE:
        case t.ScalarType.FLOAT:
          if (b === null)
            return S ? 0 : void 0;
          if (b === "NaN")
            return Number.NaN;
          if (b === "Infinity")
            return Number.POSITIVE_INFINITY;
          if (b === "-Infinity")
            return Number.NEGATIVE_INFINITY;
          if (b === "" || typeof b == "string" && b.trim().length !== b.length || typeof b != "string" && typeof b != "number")
            break;
          const C = Number(b);
          if (Number.isNaN(C) || !Number.isFinite(C))
            break;
          return O == t.ScalarType.FLOAT && (0, r.assertFloat32)(C), C;
        case t.ScalarType.INT32:
        case t.ScalarType.FIXED32:
        case t.ScalarType.SFIXED32:
        case t.ScalarType.SINT32:
        case t.ScalarType.UINT32:
          if (b === null)
            return S ? 0 : void 0;
          let N;
          if (typeof b == "number" ? N = b : typeof b == "string" && b.length > 0 && b.trim().length === b.length && (N = Number(b)), N === void 0)
            break;
          return O == t.ScalarType.UINT32 ? (0, r.assertUInt32)(N) : (0, r.assertInt32)(N), N;
        case t.ScalarType.INT64:
        case t.ScalarType.SFIXED64:
        case t.ScalarType.SINT64:
          if (b === null)
            return S ? m.protoInt64.zero : void 0;
          if (typeof b != "number" && typeof b != "string")
            break;
          const j = m.protoInt64.parse(b);
          return D ? j.toString() : j;
        case t.ScalarType.FIXED64:
        case t.ScalarType.UINT64:
          if (b === null)
            return S ? m.protoInt64.zero : void 0;
          if (typeof b != "number" && typeof b != "string")
            break;
          const R = m.protoInt64.uParse(b);
          return D ? R.toString() : R;
        case t.ScalarType.BOOL:
          if (b === null)
            return S ? !1 : void 0;
          if (typeof b != "boolean")
            break;
          return b;
        case t.ScalarType.STRING:
          if (b === null)
            return S ? "" : void 0;
          if (typeof b != "string")
            break;
          try {
            encodeURIComponent(b);
          } catch {
            throw new Error("invalid UTF8");
          }
          return b;
        case t.ScalarType.BYTES:
          if (b === null)
            return S ? new Uint8Array(0) : void 0;
          if (b === "")
            return new Uint8Array(0);
          if (typeof b != "string")
            break;
          return i.protoBase64.dec(b);
      }
      throw new Error();
    }
    function h(O, b, D, S) {
      if (b === null)
        return S ? O.values[0].no : void 0;
      switch (typeof b) {
        case "number":
          if (Number.isInteger(b))
            return b;
          break;
        case "string":
          const C = O.findName(b);
          if (C || D)
            return C?.no;
          break;
      }
      throw new Error(`cannot decode enum ${O.typeName} from JSON: ${d(b)}`);
    }
    function w(O, b, D, S) {
      var C;
      if (b === void 0)
        return b;
      if (!D && O.values[0].no === b)
        return;
      if (S)
        return b;
      if (O.typeName == "google.protobuf.NullValue")
        return null;
      const N = O.findNumber(b);
      return (C = N?.name) !== null && C !== void 0 ? C : b;
    }
    function k(O, b, D) {
      if (b !== void 0)
        switch (O) {
          case t.ScalarType.INT32:
          case t.ScalarType.SFIXED32:
          case t.ScalarType.SINT32:
          case t.ScalarType.FIXED32:
          case t.ScalarType.UINT32:
            return (0, r.assert)(typeof b == "number"), b != 0 || D ? b : void 0;
          case t.ScalarType.FLOAT:
          case t.ScalarType.DOUBLE:
            return (0, r.assert)(typeof b == "number"), Number.isNaN(b) ? "NaN" : b === Number.POSITIVE_INFINITY ? "Infinity" : b === Number.NEGATIVE_INFINITY ? "-Infinity" : b !== 0 || D ? b : void 0;
          case t.ScalarType.STRING:
            return (0, r.assert)(typeof b == "string"), b.length > 0 || D ? b : void 0;
          case t.ScalarType.BOOL:
            return (0, r.assert)(typeof b == "boolean"), b || D ? b : void 0;
          case t.ScalarType.UINT64:
          case t.ScalarType.FIXED64:
          case t.ScalarType.INT64:
          case t.ScalarType.SFIXED64:
          case t.ScalarType.SINT64:
            return (0, r.assert)(typeof b == "bigint" || typeof b == "string" || typeof b == "number"), D || b != 0 ? b.toString(10) : void 0;
          case t.ScalarType.BYTES:
            return (0, r.assert)(b instanceof Uint8Array), D || b.byteLength > 0 ? i.protoBase64.enc(b) : void 0;
        }
    }
  }
}), ua = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/json-format-proto3.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeJsonFormatProto3 = void 0;
    var n = Ln(), t = Z(), r = so();
    function m() {
      return (0, r.makeJsonFormatCommon)(!0, (i, u) => function(o, a, c) {
        if (o.kind == "map") {
          const l = {};
          switch (o.V.kind) {
            case "scalar":
              for (const [d, f] of Object.entries(a)) {
                const g = u(o.V.T, f, !0);
                (0, t.assert)(g !== void 0), l[d.toString()] = g;
              }
              break;
            case "message":
              for (const [d, f] of Object.entries(a))
                l[d.toString()] = f.toJson(c);
              break;
            case "enum":
              const y = o.V.T;
              for (const [d, f] of Object.entries(a)) {
                (0, t.assert)(f === void 0 || typeof f == "number");
                const g = i(y, f, !0, c.enumAsInteger);
                (0, t.assert)(g !== void 0), l[d.toString()] = g;
              }
              break;
          }
          return c.emitDefaultValues || Object.keys(l).length > 0 ? l : void 0;
        } else if (o.repeated) {
          const l = [];
          switch (o.kind) {
            case "scalar":
              for (let y = 0; y < a.length; y++)
                l.push(u(o.T, a[y], !0));
              break;
            case "enum":
              for (let y = 0; y < a.length; y++)
                l.push(i(o.T, a[y], !0, c.enumAsInteger));
              break;
            case "message":
              for (let y = 0; y < a.length; y++)
                l.push(a[y].toJson(c));
              break;
          }
          return c.emitDefaultValues || l.length > 0 ? l : void 0;
        } else {
          if (a === void 0)
            return;
          switch (o.kind) {
            case "scalar":
              return u(o.T, a, !!o.oneof || o.opt || c.emitDefaultValues);
            case "enum":
              return i(o.T, a, !!o.oneof || o.opt || c.emitDefaultValues, c.enumAsInteger);
            case "message":
              return (0, n.wrapField)(o.T, a).toJson(c);
          }
        }
      });
    }
    e.makeJsonFormatProto3 = m;
  }
}), uo = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/util-common.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeUtilCommon = void 0;
    var n = Xn(), t = x(), r = Q(), m = Nn();
    function i() {
      return {
        setEnumType: n.setEnumType,
        initPartial(o, a) {
          if (o === void 0)
            return;
          const c = a.getType();
          for (const l of c.fields.byMember()) {
            const y = l.localName, d = a, f = o;
            if (f[y] !== void 0)
              switch (l.kind) {
                case "oneof":
                  const g = f[y].case;
                  if (g === void 0)
                    continue;
                  const h = l.findField(g);
                  let w = f[y].value;
                  h && h.kind == "message" && !(w instanceof h.T) ? w = new h.T(w) : h && h.kind === "scalar" && h.T === r.ScalarType.BYTES && (w = s(w)), d[y] = { case: g, value: w };
                  break;
                case "scalar":
                case "enum":
                  let k = f[y];
                  l.T === r.ScalarType.BYTES && (k = l.repeated ? k.map(s) : s(k)), d[y] = k;
                  break;
                case "map":
                  switch (l.V.kind) {
                    case "scalar":
                    case "enum":
                      if (l.V.T === r.ScalarType.BYTES)
                        for (const [D, S] of Object.entries(f[y]))
                          d[y][D] = s(S);
                      else
                        Object.assign(d[y], f[y]);
                      break;
                    case "message":
                      const b = l.V.T;
                      for (const D of Object.keys(f[y])) {
                        let S = f[y][D];
                        b.fieldWrapper || (S = new b(S)), d[y][D] = S;
                      }
                      break;
                  }
                  break;
                case "message":
                  const O = l.T;
                  if (l.repeated)
                    d[y] = f[y].map((b) => b instanceof O ? b : new O(b));
                  else if (f[y] !== void 0) {
                    const b = f[y];
                    O.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ O.typeName === "google.protobuf.BytesValue" ? d[y] = s(b) : d[y] = b : d[y] = b instanceof O ? b : new O(b);
                  }
                  break;
              }
          }
        },
        equals(o, a, c) {
          return a === c ? !0 : !a || !c ? !1 : o.fields.byMember().every((l) => {
            const y = a[l.localName], d = c[l.localName];
            if (l.repeated) {
              if (y.length !== d.length)
                return !1;
              switch (l.kind) {
                case "message":
                  return y.every((f, g) => l.T.equals(f, d[g]));
                case "scalar":
                  return y.every((f, g) => (0, m.scalarEquals)(l.T, f, d[g]));
                case "enum":
                  return y.every((f, g) => (0, m.scalarEquals)(r.ScalarType.INT32, f, d[g]));
              }
              throw new Error(`repeated cannot contain ${l.kind}`);
            }
            switch (l.kind) {
              case "message":
                return l.T.equals(y, d);
              case "enum":
                return (0, m.scalarEquals)(r.ScalarType.INT32, y, d);
              case "scalar":
                return (0, m.scalarEquals)(l.T, y, d);
              case "oneof":
                if (y.case !== d.case)
                  return !1;
                const f = l.findField(y.case);
                if (f === void 0)
                  return !0;
                switch (f.kind) {
                  case "message":
                    return f.T.equals(y.value, d.value);
                  case "enum":
                    return (0, m.scalarEquals)(r.ScalarType.INT32, y.value, d.value);
                  case "scalar":
                    return (0, m.scalarEquals)(f.T, y.value, d.value);
                }
                throw new Error(`oneof cannot contain ${f.kind}`);
              case "map":
                const g = Object.keys(y).concat(Object.keys(d));
                switch (l.V.kind) {
                  case "message":
                    const h = l.V.T;
                    return g.every((k) => h.equals(y[k], d[k]));
                  case "enum":
                    return g.every((k) => (0, m.scalarEquals)(r.ScalarType.INT32, y[k], d[k]));
                  case "scalar":
                    const w = l.V.T;
                    return g.every((k) => (0, m.scalarEquals)(w, y[k], d[k]));
                }
                break;
            }
          });
        },
        clone(o) {
          const a = o.getType(), c = new a(), l = c;
          for (const y of a.fields.byMember()) {
            const d = o[y.localName];
            let f;
            if (y.repeated)
              f = d.map(u);
            else if (y.kind == "map") {
              f = l[y.localName];
              for (const [g, h] of Object.entries(d))
                f[g] = u(h);
            } else y.kind == "oneof" ? f = y.findField(d.case) ? { case: d.case, value: u(d.value) } : { case: void 0 } : f = u(d);
            l[y.localName] = f;
          }
          return c;
        }
      };
    }
    e.makeUtilCommon = i;
    function u(o) {
      if (o === void 0)
        return o;
      if (o instanceof t.Message)
        return o.clone();
      if (o instanceof Uint8Array) {
        const a = new Uint8Array(o.byteLength);
        return a.set(o), a;
      }
      return o;
    }
    function s(o) {
      return o instanceof Uint8Array ? o : new Uint8Array(o);
    }
  }
}), lo = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/field-list.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.InternalFieldList = void 0;
    var n = class {
      constructor(t, r) {
        this._fields = t, this._normalizer = r;
      }
      findJsonName(t) {
        if (!this.jsonNames) {
          const r = {};
          for (const m of this.list())
            r[m.jsonName] = r[m.name] = m;
          this.jsonNames = r;
        }
        return this.jsonNames[t];
      }
      find(t) {
        if (!this.numbers) {
          const r = {};
          for (const m of this.list())
            r[m.no] = m;
          this.numbers = r;
        }
        return this.numbers[t];
      }
      list() {
        return this.all || (this.all = this._normalizer(this._fields)), this.all;
      }
      byNumber() {
        return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t, r) => t.no - r.no)), this.numbersAsc;
      }
      byMember() {
        if (!this.members) {
          this.members = [];
          const t = this.members;
          let r;
          for (const m of this.list())
            m.oneof ? m.oneof !== r && (r = m.oneof, t.push(r)) : t.push(m);
        }
        return this.members;
      }
    };
    e.InternalFieldList = n;
  }
}), le = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/names.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.safeIdentifier = e.safeObjectProperty = e.findEnumSharedPrefix = e.fieldJsonName = e.localOneofName = e.localFieldName = e.localName = void 0;
    function n(f) {
      switch (f.kind) {
        case "field":
          return t(f.name, f.oneof !== void 0);
        case "oneof":
          return r(f.name);
        case "enum":
        case "message":
        case "service":
        case "extension": {
          const g = f.file.proto.package, h = g === void 0 ? 0 : g.length + 1, w = f.typeName.substring(h).replace(/\./g, "_");
          return (0, e.safeObjectProperty)((0, e.safeIdentifier)(w));
        }
        case "enum_value": {
          const g = f.parent.sharedPrefix;
          if (g === void 0)
            return f.name;
          const h = f.name.substring(g.length);
          return (0, e.safeObjectProperty)(h);
        }
        case "rpc": {
          let g = f.name;
          return g.length == 0 ? g : (g = g[0].toLowerCase() + g.substring(1), (0, e.safeObjectProperty)(g));
        }
      }
    }
    e.localName = n;
    function t(f, g) {
      const h = u(f);
      return g ? h : (0, e.safeObjectProperty)(l(h));
    }
    e.localFieldName = t;
    function r(f) {
      return t(f, !1);
    }
    e.localOneofName = r, e.fieldJsonName = u;
    function m(f, g) {
      const h = i(f) + "_";
      for (const w of g) {
        if (!w.toLowerCase().startsWith(h))
          return;
        const k = w.substring(h.length);
        if (k.length == 0 || /^\d/.test(k))
          return;
      }
      return h;
    }
    e.findEnumSharedPrefix = m;
    function i(f) {
      return (f.substring(0, 1) + f.substring(1).replace(/[A-Z]/g, (g) => "_" + g)).toLowerCase();
    }
    function u(f) {
      let g = !1;
      const h = [];
      for (let w = 0; w < f.length; w++) {
        let k = f.charAt(w);
        switch (k) {
          case "_":
            g = !0;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            h.push(k), g = !1;
            break;
          default:
            g && (g = !1, k = k.toUpperCase()), h.push(k);
            break;
        }
      }
      return h.join("");
    }
    var s = /* @__PURE__ */ new Set([
      // ECMAScript 2015 keywords
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "export",
      "extends",
      "false",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "in",
      "instanceof",
      "new",
      "null",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "true",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield",
      // ECMAScript 2015 future reserved keywords
      "enum",
      "implements",
      "interface",
      "let",
      "package",
      "private",
      "protected",
      "public",
      "static",
      // Class name cannot be 'Object' when targeting ES5 with module CommonJS
      "Object",
      // TypeScript keywords that cannot be used for types (as opposed to variables)
      "bigint",
      "number",
      "boolean",
      "string",
      "object",
      // Identifiers reserved for the runtime, so we can generate legible code
      "globalThis",
      "Uint8Array",
      "Partial"
    ]), o = /* @__PURE__ */ new Set([
      // names reserved by JavaScript
      "constructor",
      "toString",
      "toJSON",
      "valueOf"
    ]), a = /* @__PURE__ */ new Set([
      // names reserved by the runtime
      "getType",
      "clone",
      "equals",
      "fromBinary",
      "fromJson",
      "fromJsonString",
      "toBinary",
      "toJson",
      "toJsonString",
      // names reserved by the runtime for the future
      "toObject"
    ]), c = (f) => `${f}$`, l = (f) => a.has(f) ? c(f) : f, y = (f) => o.has(f) ? c(f) : f;
    e.safeObjectProperty = y;
    var d = (f) => s.has(f) ? c(f) : f;
    e.safeIdentifier = d;
  }
}), co = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/field.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.InternalOneofInfo = void 0;
    var n = le(), t = Z(), r = class {
      constructor(m) {
        this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = m, this.localName = (0, n.localOneofName)(m);
      }
      addField(m) {
        (0, t.assert)(m.oneof === this, `field ${m.name} not one of ${this.name}`), this.fields.push(m);
      }
      findField(m) {
        if (!this._lookup) {
          this._lookup = /* @__PURE__ */ Object.create(null);
          for (let i = 0; i < this.fields.length; i++)
            this._lookup[this.fields[i].localName] = this.fields[i];
        }
        return this._lookup[m];
      }
    };
    e.InternalOneofInfo = r;
  }
}), ee = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/proto3.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.proto3 = void 0;
    var n = ao(), t = sa(), r = ua(), m = uo(), i = lo(), u = Nn(), s = Q(), o = co(), a = le();
    e.proto3 = (0, n.makeProtoRuntime)("proto3", (0, r.makeJsonFormatProto3)(), (0, t.makeBinaryFormatProto3)(), Object.assign(Object.assign({}, (0, m.makeUtilCommon)()), {
      newFieldList(l) {
        return new i.InternalFieldList(l, c);
      },
      initFields(l) {
        for (const y of l.getType().fields.byMember()) {
          if (y.opt)
            continue;
          const d = y.localName, f = l;
          if (y.repeated) {
            f[d] = [];
            continue;
          }
          switch (y.kind) {
            case "oneof":
              f[d] = { case: void 0 };
              break;
            case "enum":
              f[d] = 0;
              break;
            case "map":
              f[d] = {};
              break;
            case "scalar":
              f[d] = (0, u.scalarDefaultValue)(y.T, y.L);
              break;
          }
        }
      }
    }));
    function c(l) {
      var y, d, f, g;
      const h = [];
      let w;
      for (const k of typeof l == "function" ? l() : l) {
        const O = k;
        if (O.localName = (0, a.localFieldName)(k.name, k.oneof !== void 0), O.jsonName = (y = k.jsonName) !== null && y !== void 0 ? y : (0, a.fieldJsonName)(k.name), O.repeated = (d = k.repeated) !== null && d !== void 0 ? d : !1, k.kind == "scalar" && (O.L = (f = k.L) !== null && f !== void 0 ? f : s.LongType.BIGINT), k.oneof !== void 0) {
          const b = typeof k.oneof == "string" ? k.oneof : k.oneof.name;
          (!w || w.name != b) && (w = new o.InternalOneofInfo(b)), O.oneof = w, w.addField(O);
        }
        k.kind == "message" && (O.delimited = !1), O.packed = (g = k.packed) !== null && g !== void 0 ? g : k.kind == "enum" || k.kind == "scalar" && k.T != s.ScalarType.BYTES && k.T != s.ScalarType.STRING, h.push(O);
      }
      return h;
    }
  }
}), la = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/binary-format-proto2.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeBinaryFormatProto2 = void 0;
    var n = Q(), t = Hn();
    function r() {
      return Object.assign(Object.assign({}, (0, t.makeBinaryFormatCommon)()), {
        writeField: m,
        writeMessage(i, u, s) {
          const o = i.getType();
          let a;
          for (a of o.fields.byNumber()) {
            let c, l = a.localName;
            if (a.oneof) {
              const y = i[a.oneof.localName];
              if (y.case !== l)
                continue;
              c = y.value;
            } else if (c = i[l], c === void 0 && !a.oneof && !a.opt)
              throw new Error(`cannot encode field ${o.typeName}.${a?.name} to binary: required field not set`);
            m(a, c, u, s);
          }
          return s.writeUnknownFields && this.writeUnknownFields(i, u), u;
        }
      });
    }
    e.makeBinaryFormatProto2 = r;
    function m(i, u, s, o) {
      const a = i.repeated;
      switch (i.kind) {
        case "scalar":
        case "enum":
          let c = i.kind == "enum" ? n.ScalarType.INT32 : i.T;
          if (a)
            if (i.packed)
              (0, t.writePacked)(s, c, i.no, u);
            else
              for (const l of u)
                (0, t.writeScalar)(s, c, i.no, l, !0);
          else u !== void 0 && (0, t.writeScalar)(s, c, i.no, u, !0);
          break;
        case "message":
          if (a)
            for (const l of u)
              (0, t.writeMessageField)(s, o, i, l);
          else u !== void 0 && (0, t.writeMessageField)(s, o, i, u);
          break;
        case "map":
          for (const [l, y] of Object.entries(u))
            (0, t.writeMapEntry)(s, o, i, l, y);
          break;
      }
    }
  }
}), ca = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/json-format-proto2.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.makeJsonFormatProto2 = void 0;
    var n = Ln(), t = Z(), r = so();
    function m() {
      return (0, r.makeJsonFormatCommon)(!1, (i, u) => function(o, a, c) {
        if (o.kind == "map") {
          const l = {};
          switch (o.V.kind) {
            case "scalar":
              for (const [d, f] of Object.entries(a)) {
                const g = u(o.V.T, f, !0);
                (0, t.assert)(g !== void 0), l[d.toString()] = g;
              }
              break;
            case "message":
              for (const [d, f] of Object.entries(a))
                l[d.toString()] = f.toJson(c);
              break;
            case "enum":
              const y = o.V.T;
              for (const [d, f] of Object.entries(a)) {
                (0, t.assert)(f === void 0 || typeof f == "number");
                const g = i(y, f, !0, c.enumAsInteger);
                (0, t.assert)(g !== void 0), l[d.toString()] = g;
              }
              break;
          }
          return c.emitDefaultValues || Object.keys(l).length > 0 ? l : void 0;
        } else if (o.repeated) {
          const l = [];
          switch (o.kind) {
            case "scalar":
              for (let y = 0; y < a.length; y++)
                l.push(u(o.T, a[y], !0));
              break;
            case "enum":
              for (let y = 0; y < a.length; y++)
                l.push(i(o.T, a[y], !0, c.enumAsInteger));
              break;
            case "message":
              for (let y = 0; y < a.length; y++)
                l.push(a[y].toJson(c));
              break;
          }
          return c.emitDefaultValues || l.length > 0 ? l : void 0;
        } else {
          if (a === void 0) {
            if (!o.oneof && !o.opt)
              throw "required field not set";
            return;
          }
          switch (o.kind) {
            case "scalar":
              return u(o.T, a, !0);
            case "enum":
              return i(o.T, a, !0, c.enumAsInteger);
            case "message":
              return (0, n.wrapField)(o.T, a).toJson(c);
          }
        }
      });
    }
    e.makeJsonFormatProto2 = m;
  }
}), Bn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/proto2.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.proto2 = void 0;
    var n = ao(), t = la(), r = uo(), m = lo(), i = co(), u = le(), s = ca(), o = Q();
    e.proto2 = (0, n.makeProtoRuntime)("proto2", (0, s.makeJsonFormatProto2)(), (0, t.makeBinaryFormatProto2)(), Object.assign(Object.assign({}, (0, r.makeUtilCommon)()), {
      newFieldList(c) {
        return new m.InternalFieldList(c, a);
      },
      initFields(c) {
        for (const l of c.getType().fields.byMember()) {
          const y = l.localName, d = c;
          if (l.repeated) {
            d[y] = [];
            continue;
          }
          switch (l.kind) {
            case "oneof":
              d[y] = { case: void 0 };
              break;
            case "map":
              d[y] = {};
              break;
          }
        }
      }
    }));
    function a(c) {
      var l, y, d, f, g;
      const h = [];
      let w;
      for (const k of typeof c == "function" ? c() : c) {
        const O = k;
        if (O.localName = (0, u.localFieldName)(k.name, k.oneof !== void 0), O.jsonName = (l = k.jsonName) !== null && l !== void 0 ? l : (0, u.fieldJsonName)(k.name), O.repeated = (y = k.repeated) !== null && y !== void 0 ? y : !1, k.kind == "scalar" && (O.L = (d = k.L) !== null && d !== void 0 ? d : o.LongType.BIGINT), k.oneof !== void 0) {
          const b = typeof k.oneof == "string" ? k.oneof : k.oneof.name;
          (!w || w.name != b) && (w = new i.InternalOneofInfo(b)), O.oneof = w, w.addField(O);
        }
        k.kind == "message" && (O.delimited = (f = k.delimited) !== null && f !== void 0 ? f : !1), O.packed = (g = k.packed) !== null && g !== void 0 ? g : !1, h.push(O);
      }
      return h;
    }
  }
}), ma = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/proto-double.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.protoDouble = void 0, e.protoDouble = {
      NaN: Number.NaN,
      POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
      NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY
    };
  }
}), da = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/proto-delimited.js"(e) {
    var n = e && e.__asyncValues || function(u) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var s = u[Symbol.asyncIterator], o;
      return s ? s.call(u) : (u = typeof __values == "function" ? __values(u) : u[Symbol.iterator](), o = {}, a("next"), a("throw"), a("return"), o[Symbol.asyncIterator] = function() {
        return this;
      }, o);
      function a(l) {
        o[l] = u[l] && function(y) {
          return new Promise(function(d, f) {
            y = u[l](y), c(d, f, y.done, y.value);
          });
        };
      }
      function c(l, y, d, f) {
        Promise.resolve(f).then(function(g) {
          l({ value: g, done: d });
        }, y);
      }
    }, t = e && e.__await || function(u) {
      return this instanceof t ? (this.v = u, this) : new t(u);
    }, r = e && e.__asyncGenerator || function(u, s, o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var a = o.apply(u, s || []), c, l = [];
      return c = {}, d("next"), d("throw"), d("return", y), c[Symbol.asyncIterator] = function() {
        return this;
      }, c;
      function y(O) {
        return function(b) {
          return Promise.resolve(b).then(O, w);
        };
      }
      function d(O, b) {
        a[O] && (c[O] = function(D) {
          return new Promise(function(S, C) {
            l.push([O, D, S, C]) > 1 || f(O, D);
          });
        }, b && (c[O] = b(c[O])));
      }
      function f(O, b) {
        try {
          g(a[O](b));
        } catch (D) {
          k(l[0][3], D);
        }
      }
      function g(O) {
        O.value instanceof t ? Promise.resolve(O.value.v).then(h, w) : k(l[0][2], O);
      }
      function h(O) {
        f("next", O);
      }
      function w(O) {
        f("throw", O);
      }
      function k(O, b) {
        O(b), l.shift(), l.length && f(l[0][0], l[0][1]);
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.protoDelimited = void 0;
    var m = Hn(), i = jn();
    e.protoDelimited = {
      /**
       * Serialize a message, prefixing it with its size.
       */
      enc(u, s) {
        const o = (0, m.makeBinaryFormatCommon)().makeWriteOptions(s);
        return o.writerFactory().bytes(u.toBinary(o)).finish();
      },
      /**
       * Parse a size-delimited message, ignoring extra bytes.
       */
      dec(u, s, o) {
        const a = (0, m.makeBinaryFormatCommon)().makeReadOptions(o);
        return u.fromBinary(a.readerFactory(s).bytes(), a);
      },
      /**
       * Parse a stream of size-delimited messages.
       */
      decStream(u, s) {
        return r(this, arguments, function* () {
          var a, c, l, y;
          function d(k, O) {
            const b = new Uint8Array(k.byteLength + O.byteLength);
            return b.set(k), b.set(O, k.length), b;
          }
          let f = new Uint8Array(0);
          try {
            for (var g = !0, h = n(s), w; w = yield t(h.next()), a = w.done, !a; g = !0)
              for (y = w.value, g = !1, f = d(f, y); ; ) {
                const O = e.protoDelimited.peekSize(f);
                if (O.eof || O.offset + O.size > f.byteLength)
                  break;
                yield yield t(e.protoDelimited.dec(u, f)), f = f.subarray(O.offset + O.size);
              }
          } catch (k) {
            c = { error: k };
          } finally {
            try {
              !g && !a && (l = h.return) && (yield t(l.call(h)));
            } finally {
              if (c)
                throw c.error;
            }
          }
          if (f.byteLength > 0)
            throw new Error("incomplete data");
        });
      },
      /**
       * Decodes the size from the given size-delimited message, which may be
       * incomplete.
       *
       * Returns an object with the following properties:
       * - size: The size of the delimited message in bytes
       * - offset: The offset in the given byte array where the message starts
       * - eof: true
       *
       * If the size-delimited data does not include all bytes of the varint size,
       * the following object is returned:
       * - size: null
       * - offset: null
       * - eof: false
       *
       * This function can be used to implement parsing of size-delimited messages
       * from a stream.
       */
      peekSize(u) {
        const s = { eof: !0, size: null, offset: null };
        for (let o = 0; o < 10; o++) {
          if (o > u.byteLength)
            return s;
          if (!(u[o] & 128)) {
            const a = new i.BinaryReader(u);
            let c;
            try {
              c = a.uint32();
            } catch (l) {
              if (l instanceof RangeError)
                return s;
              throw l;
            }
            return {
              eof: !1,
              size: c,
              offset: a.pos
            };
          }
        }
        throw new Error("invalid varint");
      }
    };
  }
}), fa = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/reify-wkt.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.reifyWkt = void 0;
    var n = Q();
    function t(r) {
      switch (r.typeName) {
        case "google.protobuf.Any": {
          const m = r.fields.find((u) => u.number == 1 && u.fieldKind == "scalar" && u.scalar === n.ScalarType.STRING), i = r.fields.find((u) => u.number == 2 && u.fieldKind == "scalar" && u.scalar === n.ScalarType.BYTES);
          if (m && i)
            return {
              typeName: r.typeName,
              typeUrl: m,
              value: i
            };
          break;
        }
        case "google.protobuf.Timestamp": {
          const m = r.fields.find((u) => u.number == 1 && u.fieldKind == "scalar" && u.scalar === n.ScalarType.INT64), i = r.fields.find((u) => u.number == 2 && u.fieldKind == "scalar" && u.scalar === n.ScalarType.INT32);
          if (m && i)
            return {
              typeName: r.typeName,
              seconds: m,
              nanos: i
            };
          break;
        }
        case "google.protobuf.Duration": {
          const m = r.fields.find((u) => u.number == 1 && u.fieldKind == "scalar" && u.scalar === n.ScalarType.INT64), i = r.fields.find((u) => u.number == 2 && u.fieldKind == "scalar" && u.scalar === n.ScalarType.INT32);
          if (m && i)
            return {
              typeName: r.typeName,
              seconds: m,
              nanos: i
            };
          break;
        }
        case "google.protobuf.Struct": {
          const m = r.fields.find((i) => i.number == 1 && !i.repeated);
          if (m?.fieldKind !== "map" || m.mapValue.kind !== "message" || m.mapValue.message.typeName !== "google.protobuf.Value")
            break;
          return { typeName: r.typeName, fields: m };
        }
        case "google.protobuf.Value": {
          const m = r.oneofs.find((l) => l.name === "kind"), i = r.fields.find((l) => l.number == 1 && l.oneof === m);
          if (i?.fieldKind !== "enum" || i.enum.typeName !== "google.protobuf.NullValue")
            return;
          const u = r.fields.find((l) => l.number == 2 && l.fieldKind == "scalar" && l.scalar === n.ScalarType.DOUBLE && l.oneof === m), s = r.fields.find((l) => l.number == 3 && l.fieldKind == "scalar" && l.scalar === n.ScalarType.STRING && l.oneof === m), o = r.fields.find((l) => l.number == 4 && l.fieldKind == "scalar" && l.scalar === n.ScalarType.BOOL && l.oneof === m), a = r.fields.find((l) => l.number == 5 && l.oneof === m);
          if (a?.fieldKind !== "message" || a.message.typeName !== "google.protobuf.Struct")
            return;
          const c = r.fields.find((l) => l.number == 6 && l.oneof === m);
          if (c?.fieldKind !== "message" || c.message.typeName !== "google.protobuf.ListValue")
            return;
          if (m && u && s && o)
            return {
              typeName: r.typeName,
              kind: m,
              nullValue: i,
              numberValue: u,
              stringValue: s,
              boolValue: o,
              structValue: a,
              listValue: c
            };
          break;
        }
        case "google.protobuf.ListValue": {
          const m = r.fields.find((i) => i.number == 1 && i.repeated);
          if (m?.fieldKind != "message" || m.message.typeName !== "google.protobuf.Value")
            break;
          return { typeName: r.typeName, values: m };
        }
        case "google.protobuf.FieldMask": {
          const m = r.fields.find((i) => i.number == 1 && i.fieldKind == "scalar" && i.scalar === n.ScalarType.STRING && i.repeated);
          if (m)
            return { typeName: r.typeName, paths: m };
          break;
        }
        case "google.protobuf.DoubleValue":
        case "google.protobuf.FloatValue":
        case "google.protobuf.Int64Value":
        case "google.protobuf.UInt64Value":
        case "google.protobuf.Int32Value":
        case "google.protobuf.UInt32Value":
        case "google.protobuf.BoolValue":
        case "google.protobuf.StringValue":
        case "google.protobuf.BytesValue": {
          const m = r.fields.find((i) => i.number == 1 && i.name == "value");
          if (!m || m.fieldKind !== "scalar")
            break;
          return { typeName: r.typeName, value: m };
        }
      }
    }
    e.reifyWkt = t;
  }
}), pa = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/codegen-info.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.codegenInfo = void 0;
    var n = le(), t = Ln(), r = Nn(), m = fa(), i = "@bufbuild/protobuf";
    e.codegenInfo = {
      packageName: "@bufbuild/protobuf",
      localName: n.localName,
      reifyWkt: m.reifyWkt,
      getUnwrappedFieldType: t.getUnwrappedFieldType,
      scalarDefaultValue: r.scalarDefaultValue,
      safeIdentifier: n.safeIdentifier,
      safeObjectProperty: n.safeObjectProperty,
      // prettier-ignore
      symbols: {
        proto2: { typeOnly: !1, privateImportPath: "./proto2.js", publicImportPath: i },
        proto3: { typeOnly: !1, privateImportPath: "./proto3.js", publicImportPath: i },
        Message: { typeOnly: !1, privateImportPath: "./message.js", publicImportPath: i },
        PartialMessage: { typeOnly: !0, privateImportPath: "./message.js", publicImportPath: i },
        PlainMessage: { typeOnly: !0, privateImportPath: "./message.js", publicImportPath: i },
        FieldList: { typeOnly: !0, privateImportPath: "./field-list.js", publicImportPath: i },
        MessageType: { typeOnly: !0, privateImportPath: "./message-type.js", publicImportPath: i },
        Extension: { typeOnly: !0, privateImportPath: "./extension.js", publicImportPath: i },
        BinaryReadOptions: { typeOnly: !0, privateImportPath: "./binary-format.js", publicImportPath: i },
        BinaryWriteOptions: { typeOnly: !0, privateImportPath: "./binary-format.js", publicImportPath: i },
        JsonReadOptions: { typeOnly: !0, privateImportPath: "./json-format.js", publicImportPath: i },
        JsonWriteOptions: { typeOnly: !0, privateImportPath: "./json-format.js", publicImportPath: i },
        JsonValue: { typeOnly: !0, privateImportPath: "./json-format.js", publicImportPath: i },
        JsonObject: { typeOnly: !0, privateImportPath: "./json-format.js", publicImportPath: i },
        protoDouble: { typeOnly: !1, privateImportPath: "./proto-double.js", publicImportPath: i },
        protoInt64: { typeOnly: !1, privateImportPath: "./proto-int64.js", publicImportPath: i },
        ScalarType: { typeOnly: !1, privateImportPath: "./field.js", publicImportPath: i },
        LongType: { typeOnly: !1, privateImportPath: "./field.js", publicImportPath: i },
        MethodKind: { typeOnly: !1, privateImportPath: "./service-type.js", publicImportPath: i },
        MethodIdempotency: { typeOnly: !1, privateImportPath: "./service-type.js", publicImportPath: i },
        IMessageTypeRegistry: { typeOnly: !0, privateImportPath: "./type-registry.js", publicImportPath: i }
      },
      wktSourceFiles: [
        "google/protobuf/compiler/plugin.proto",
        "google/protobuf/any.proto",
        "google/protobuf/api.proto",
        "google/protobuf/descriptor.proto",
        "google/protobuf/duration.proto",
        "google/protobuf/empty.proto",
        "google/protobuf/field_mask.proto",
        "google/protobuf/source_context.proto",
        "google/protobuf/struct.proto",
        "google/protobuf/timestamp.proto",
        "google/protobuf/type.proto",
        "google/protobuf/wrappers.proto"
      ]
    };
  }
}), mo = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/service-type.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.MethodIdempotency = e.MethodKind = void 0;
    var n;
    (function(r) {
      r[r.Unary = 0] = "Unary", r[r.ServerStreaming = 1] = "ServerStreaming", r[r.ClientStreaming = 2] = "ClientStreaming", r[r.BiDiStreaming = 3] = "BiDiStreaming";
    })(n || (e.MethodKind = n = {}));
    var t;
    (function(r) {
      r[r.NoSideEffects = 1] = "NoSideEffects", r[r.Idempotent = 2] = "Idempotent";
    })(t || (e.MethodIdempotency = t = {}));
  }
}), Sn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/descriptor_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.GeneratedCodeInfo_Annotation_Semantic = e.GeneratedCodeInfo_Annotation = e.GeneratedCodeInfo = e.SourceCodeInfo_Location = e.SourceCodeInfo = e.FeatureSetDefaults_FeatureSetEditionDefault = e.FeatureSetDefaults = e.FeatureSet_JsonFormat = e.FeatureSet_MessageEncoding = e.FeatureSet_Utf8Validation = e.FeatureSet_RepeatedFieldEncoding = e.FeatureSet_EnumType = e.FeatureSet_FieldPresence = e.FeatureSet = e.UninterpretedOption_NamePart = e.UninterpretedOption = e.MethodOptions_IdempotencyLevel = e.MethodOptions = e.ServiceOptions = e.EnumValueOptions = e.EnumOptions = e.OneofOptions = e.FieldOptions_EditionDefault = e.FieldOptions_OptionTargetType = e.FieldOptions_OptionRetention = e.FieldOptions_JSType = e.FieldOptions_CType = e.FieldOptions = e.MessageOptions = e.FileOptions_OptimizeMode = e.FileOptions = e.MethodDescriptorProto = e.ServiceDescriptorProto = e.EnumValueDescriptorProto = e.EnumDescriptorProto_EnumReservedRange = e.EnumDescriptorProto = e.OneofDescriptorProto = e.FieldDescriptorProto_Label = e.FieldDescriptorProto_Type = e.FieldDescriptorProto = e.ExtensionRangeOptions_Declaration = e.ExtensionRangeOptions_VerificationState = e.ExtensionRangeOptions = e.DescriptorProto_ReservedRange = e.DescriptorProto_ExtensionRange = e.DescriptorProto = e.FileDescriptorProto = e.FileDescriptorSet = e.Edition = void 0;
    var n = Bn(), t = x(), r;
    (function(v) {
      v[v.EDITION_UNKNOWN = 0] = "EDITION_UNKNOWN", v[v.EDITION_PROTO2 = 998] = "EDITION_PROTO2", v[v.EDITION_PROTO3 = 999] = "EDITION_PROTO3", v[v.EDITION_2023 = 1e3] = "EDITION_2023", v[v.EDITION_1_TEST_ONLY = 1] = "EDITION_1_TEST_ONLY", v[v.EDITION_2_TEST_ONLY = 2] = "EDITION_2_TEST_ONLY", v[v.EDITION_99997_TEST_ONLY = 99997] = "EDITION_99997_TEST_ONLY", v[v.EDITION_99998_TEST_ONLY = 99998] = "EDITION_99998_TEST_ONLY", v[v.EDITION_99999_TEST_ONLY = 99999] = "EDITION_99999_TEST_ONLY";
    })(r || (e.Edition = r = {})), n.proto2.util.setEnumType(r, "google.protobuf.Edition", [
      { no: 0, name: "EDITION_UNKNOWN" },
      { no: 998, name: "EDITION_PROTO2" },
      { no: 999, name: "EDITION_PROTO3" },
      { no: 1e3, name: "EDITION_2023" },
      { no: 1, name: "EDITION_1_TEST_ONLY" },
      { no: 2, name: "EDITION_2_TEST_ONLY" },
      { no: 99997, name: "EDITION_99997_TEST_ONLY" },
      { no: 99998, name: "EDITION_99998_TEST_ONLY" },
      { no: 99999, name: "EDITION_99999_TEST_ONLY" }
    ]);
    var m = class pe extends t.Message {
      constructor(p) {
        super(), this.file = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new pe().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new pe().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new pe().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(pe, p, _);
      }
    };
    e.FileDescriptorSet = m, m.runtime = n.proto2, m.typeName = "google.protobuf.FileDescriptorSet", m.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "file", kind: "message", T: i, repeated: !0 }
    ]);
    var i = class ge extends t.Message {
      constructor(p) {
        super(), this.dependency = [], this.publicDependency = [], this.weakDependency = [], this.messageType = [], this.enumType = [], this.service = [], this.extension = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new ge().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new ge().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new ge().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(ge, p, _);
      }
    };
    e.FileDescriptorProto = i, i.runtime = n.proto2, i.typeName = "google.protobuf.FileDescriptorProto", i.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "package", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "dependency", kind: "scalar", T: 9, repeated: !0 },
      { no: 10, name: "public_dependency", kind: "scalar", T: 5, repeated: !0 },
      { no: 11, name: "weak_dependency", kind: "scalar", T: 5, repeated: !0 },
      { no: 4, name: "message_type", kind: "message", T: u, repeated: !0 },
      { no: 5, name: "enum_type", kind: "message", T: h, repeated: !0 },
      { no: 6, name: "service", kind: "message", T: O, repeated: !0 },
      { no: 7, name: "extension", kind: "message", T: y, repeated: !0 },
      { no: 8, name: "options", kind: "message", T: D, opt: !0 },
      { no: 9, name: "source_code_info", kind: "message", T: me, opt: !0 },
      { no: 12, name: "syntax", kind: "scalar", T: 9, opt: !0 },
      { no: 14, name: "edition", kind: "enum", T: n.proto2.getEnumType(r), opt: !0 }
    ]);
    var u = class _e extends t.Message {
      constructor(p) {
        super(), this.field = [], this.extension = [], this.nestedType = [], this.enumType = [], this.extensionRange = [], this.oneofDecl = [], this.reservedRange = [], this.reservedName = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new _e().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new _e().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new _e().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(_e, p, _);
      }
    };
    e.DescriptorProto = u, u.runtime = n.proto2, u.typeName = "google.protobuf.DescriptorProto", u.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "field", kind: "message", T: y, repeated: !0 },
      { no: 6, name: "extension", kind: "message", T: y, repeated: !0 },
      { no: 3, name: "nested_type", kind: "message", T: u, repeated: !0 },
      { no: 4, name: "enum_type", kind: "message", T: h, repeated: !0 },
      { no: 5, name: "extension_range", kind: "message", T: s, repeated: !0 },
      { no: 8, name: "oneof_decl", kind: "message", T: g, repeated: !0 },
      { no: 7, name: "options", kind: "message", T: C, opt: !0 },
      { no: 9, name: "reserved_range", kind: "message", T: o, repeated: !0 },
      { no: 10, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 }
    ]);
    var s = class Te extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Te().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Te().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Te().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Te, p, _);
      }
    };
    e.DescriptorProto_ExtensionRange = s, s.runtime = n.proto2, s.typeName = "google.protobuf.DescriptorProto.ExtensionRange", s.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "options", kind: "message", T: a, opt: !0 }
    ]);
    var o = class ye extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new ye().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new ye().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new ye().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(ye, p, _);
      }
    };
    e.DescriptorProto_ReservedRange = o, o.runtime = n.proto2, o.typeName = "google.protobuf.DescriptorProto.ReservedRange", o.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 }
    ]);
    var a = class he extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], this.declaration = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new he().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new he().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new he().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(he, p, _);
      }
    };
    e.ExtensionRangeOptions = a, a.runtime = n.proto2, a.typeName = "google.protobuf.ExtensionRangeOptions", a.fields = n.proto2.util.newFieldList(() => [
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 },
      { no: 2, name: "declaration", kind: "message", T: l, repeated: !0 },
      { no: 50, name: "features", kind: "message", T: F, opt: !0 },
      { no: 3, name: "verification", kind: "enum", T: n.proto2.getEnumType(c), opt: !0, default: c.UNVERIFIED }
    ]);
    var c;
    (function(v) {
      v[v.DECLARATION = 0] = "DECLARATION", v[v.UNVERIFIED = 1] = "UNVERIFIED";
    })(c || (e.ExtensionRangeOptions_VerificationState = c = {})), n.proto2.util.setEnumType(c, "google.protobuf.ExtensionRangeOptions.VerificationState", [
      { no: 0, name: "DECLARATION" },
      { no: 1, name: "UNVERIFIED" }
    ]);
    var l = class be extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new be().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new be().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new be().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(be, p, _);
      }
    };
    e.ExtensionRangeOptions_Declaration = l, l.runtime = n.proto2, l.typeName = "google.protobuf.ExtensionRangeOptions.Declaration", l.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "number", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "full_name", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "type", kind: "scalar", T: 9, opt: !0 },
      { no: 5, name: "reserved", kind: "scalar", T: 8, opt: !0 },
      { no: 6, name: "repeated", kind: "scalar", T: 8, opt: !0 }
    ]);
    var y = class ve extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new ve().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new ve().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new ve().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(ve, p, _);
      }
    };
    e.FieldDescriptorProto = y, y.runtime = n.proto2, y.typeName = "google.protobuf.FieldDescriptorProto", y.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "number", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "label", kind: "enum", T: n.proto2.getEnumType(f), opt: !0 },
      { no: 5, name: "type", kind: "enum", T: n.proto2.getEnumType(d), opt: !0 },
      { no: 6, name: "type_name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "extendee", kind: "scalar", T: 9, opt: !0 },
      { no: 7, name: "default_value", kind: "scalar", T: 9, opt: !0 },
      { no: 9, name: "oneof_index", kind: "scalar", T: 5, opt: !0 },
      { no: 10, name: "json_name", kind: "scalar", T: 9, opt: !0 },
      { no: 8, name: "options", kind: "message", T: N, opt: !0 },
      { no: 17, name: "proto3_optional", kind: "scalar", T: 8, opt: !0 }
    ]);
    var d;
    (function(v) {
      v[v.DOUBLE = 1] = "DOUBLE", v[v.FLOAT = 2] = "FLOAT", v[v.INT64 = 3] = "INT64", v[v.UINT64 = 4] = "UINT64", v[v.INT32 = 5] = "INT32", v[v.FIXED64 = 6] = "FIXED64", v[v.FIXED32 = 7] = "FIXED32", v[v.BOOL = 8] = "BOOL", v[v.STRING = 9] = "STRING", v[v.GROUP = 10] = "GROUP", v[v.MESSAGE = 11] = "MESSAGE", v[v.BYTES = 12] = "BYTES", v[v.UINT32 = 13] = "UINT32", v[v.ENUM = 14] = "ENUM", v[v.SFIXED32 = 15] = "SFIXED32", v[v.SFIXED64 = 16] = "SFIXED64", v[v.SINT32 = 17] = "SINT32", v[v.SINT64 = 18] = "SINT64";
    })(d || (e.FieldDescriptorProto_Type = d = {})), n.proto2.util.setEnumType(d, "google.protobuf.FieldDescriptorProto.Type", [
      { no: 1, name: "TYPE_DOUBLE" },
      { no: 2, name: "TYPE_FLOAT" },
      { no: 3, name: "TYPE_INT64" },
      { no: 4, name: "TYPE_UINT64" },
      { no: 5, name: "TYPE_INT32" },
      { no: 6, name: "TYPE_FIXED64" },
      { no: 7, name: "TYPE_FIXED32" },
      { no: 8, name: "TYPE_BOOL" },
      { no: 9, name: "TYPE_STRING" },
      { no: 10, name: "TYPE_GROUP" },
      { no: 11, name: "TYPE_MESSAGE" },
      { no: 12, name: "TYPE_BYTES" },
      { no: 13, name: "TYPE_UINT32" },
      { no: 14, name: "TYPE_ENUM" },
      { no: 15, name: "TYPE_SFIXED32" },
      { no: 16, name: "TYPE_SFIXED64" },
      { no: 17, name: "TYPE_SINT32" },
      { no: 18, name: "TYPE_SINT64" }
    ]);
    var f;
    (function(v) {
      v[v.OPTIONAL = 1] = "OPTIONAL", v[v.REPEATED = 3] = "REPEATED", v[v.REQUIRED = 2] = "REQUIRED";
    })(f || (e.FieldDescriptorProto_Label = f = {})), n.proto2.util.setEnumType(f, "google.protobuf.FieldDescriptorProto.Label", [
      { no: 1, name: "LABEL_OPTIONAL" },
      { no: 3, name: "LABEL_REPEATED" },
      { no: 2, name: "LABEL_REQUIRED" }
    ]);
    var g = class ke extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new ke().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new ke().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new ke().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(ke, p, _);
      }
    };
    e.OneofDescriptorProto = g, g.runtime = n.proto2, g.typeName = "google.protobuf.OneofDescriptorProto", g.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "options", kind: "message", T: Y, opt: !0 }
    ]);
    var h = class Ee extends t.Message {
      constructor(p) {
        super(), this.value = [], this.reservedRange = [], this.reservedName = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ee().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ee().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ee().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ee, p, _);
      }
    };
    e.EnumDescriptorProto = h, h.runtime = n.proto2, h.typeName = "google.protobuf.EnumDescriptorProto", h.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "value", kind: "message", T: k, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: X, opt: !0 },
      { no: 4, name: "reserved_range", kind: "message", T: w, repeated: !0 },
      { no: 5, name: "reserved_name", kind: "scalar", T: 9, repeated: !0 }
    ]);
    var w = class Ne extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ne().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ne().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ne().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ne, p, _);
      }
    };
    e.EnumDescriptorProto_EnumReservedRange = w, w.runtime = n.proto2, w.typeName = "google.protobuf.EnumDescriptorProto.EnumReservedRange", w.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "start", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "end", kind: "scalar", T: 5, opt: !0 }
    ]);
    var k = class Se extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Se().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Se().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Se().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Se, p, _);
      }
    };
    e.EnumValueDescriptorProto = k, k.runtime = n.proto2, k.typeName = "google.protobuf.EnumValueDescriptorProto", k.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "number", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "options", kind: "message", T, opt: !0 }
    ]);
    var O = class Oe extends t.Message {
      constructor(p) {
        super(), this.method = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Oe().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Oe().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Oe().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Oe, p, _);
      }
    };
    e.ServiceDescriptorProto = O, O.runtime = n.proto2, O.typeName = "google.protobuf.ServiceDescriptorProto", O.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "method", kind: "message", T: b, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: P, opt: !0 }
    ]);
    var b = class we extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new we().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new we().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new we().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(we, p, _);
      }
    };
    e.MethodDescriptorProto = b, b.runtime = n.proto2, b.typeName = "google.protobuf.MethodDescriptorProto", b.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "input_type", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "output_type", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "options", kind: "message", T: I, opt: !0 },
      { no: 5, name: "client_streaming", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 6, name: "server_streaming", kind: "scalar", T: 8, opt: !0, default: !1 }
    ]);
    var D = class Ie extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ie().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ie().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ie().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ie, p, _);
      }
    };
    e.FileOptions = D, D.runtime = n.proto2, D.typeName = "google.protobuf.FileOptions", D.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "java_package", kind: "scalar", T: 9, opt: !0 },
      { no: 8, name: "java_outer_classname", kind: "scalar", T: 9, opt: !0 },
      { no: 10, name: "java_multiple_files", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 20, name: "java_generate_equals_and_hash", kind: "scalar", T: 8, opt: !0 },
      { no: 27, name: "java_string_check_utf8", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 9, name: "optimize_for", kind: "enum", T: n.proto2.getEnumType(S), opt: !0, default: S.SPEED },
      { no: 11, name: "go_package", kind: "scalar", T: 9, opt: !0 },
      { no: 16, name: "cc_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 17, name: "java_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 18, name: "py_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 42, name: "php_generic_services", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 23, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 31, name: "cc_enable_arenas", kind: "scalar", T: 8, opt: !0, default: !0 },
      { no: 36, name: "objc_class_prefix", kind: "scalar", T: 9, opt: !0 },
      { no: 37, name: "csharp_namespace", kind: "scalar", T: 9, opt: !0 },
      { no: 39, name: "swift_prefix", kind: "scalar", T: 9, opt: !0 },
      { no: 40, name: "php_class_prefix", kind: "scalar", T: 9, opt: !0 },
      { no: 41, name: "php_namespace", kind: "scalar", T: 9, opt: !0 },
      { no: 44, name: "php_metadata_namespace", kind: "scalar", T: 9, opt: !0 },
      { no: 45, name: "ruby_package", kind: "scalar", T: 9, opt: !0 },
      { no: 50, name: "features", kind: "message", T: F, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var S;
    (function(v) {
      v[v.SPEED = 1] = "SPEED", v[v.CODE_SIZE = 2] = "CODE_SIZE", v[v.LITE_RUNTIME = 3] = "LITE_RUNTIME";
    })(S || (e.FileOptions_OptimizeMode = S = {})), n.proto2.util.setEnumType(S, "google.protobuf.FileOptions.OptimizeMode", [
      { no: 1, name: "SPEED" },
      { no: 2, name: "CODE_SIZE" },
      { no: 3, name: "LITE_RUNTIME" }
    ]);
    var C = class Pe extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Pe().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Pe().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Pe().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Pe, p, _);
      }
    };
    e.MessageOptions = C, C.runtime = n.proto2, C.typeName = "google.protobuf.MessageOptions", C.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "message_set_wire_format", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 2, name: "no_standard_descriptor_accessor", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 7, name: "map_entry", kind: "scalar", T: 8, opt: !0 },
      { no: 11, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: !0 },
      { no: 12, name: "features", kind: "message", T: F, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var N = class Ce extends t.Message {
      constructor(p) {
        super(), this.targets = [], this.editionDefaults = [], this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ce().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ce().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ce().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ce, p, _);
      }
    };
    e.FieldOptions = N, N.runtime = n.proto2, N.typeName = "google.protobuf.FieldOptions", N.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "ctype", kind: "enum", T: n.proto2.getEnumType(j), opt: !0, default: j.STRING },
      { no: 2, name: "packed", kind: "scalar", T: 8, opt: !0 },
      { no: 6, name: "jstype", kind: "enum", T: n.proto2.getEnumType(R), opt: !0, default: R.JS_NORMAL },
      { no: 5, name: "lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 15, name: "unverified_lazy", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 10, name: "weak", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 16, name: "debug_redact", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 17, name: "retention", kind: "enum", T: n.proto2.getEnumType(L), opt: !0 },
      { no: 19, name: "targets", kind: "enum", T: n.proto2.getEnumType(B), repeated: !0 },
      { no: 20, name: "edition_defaults", kind: "message", T: J, repeated: !0 },
      { no: 21, name: "features", kind: "message", T: F, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var j;
    (function(v) {
      v[v.STRING = 0] = "STRING", v[v.CORD = 1] = "CORD", v[v.STRING_PIECE = 2] = "STRING_PIECE";
    })(j || (e.FieldOptions_CType = j = {})), n.proto2.util.setEnumType(j, "google.protobuf.FieldOptions.CType", [
      { no: 0, name: "STRING" },
      { no: 1, name: "CORD" },
      { no: 2, name: "STRING_PIECE" }
    ]);
    var R;
    (function(v) {
      v[v.JS_NORMAL = 0] = "JS_NORMAL", v[v.JS_STRING = 1] = "JS_STRING", v[v.JS_NUMBER = 2] = "JS_NUMBER";
    })(R || (e.FieldOptions_JSType = R = {})), n.proto2.util.setEnumType(R, "google.protobuf.FieldOptions.JSType", [
      { no: 0, name: "JS_NORMAL" },
      { no: 1, name: "JS_STRING" },
      { no: 2, name: "JS_NUMBER" }
    ]);
    var L;
    (function(v) {
      v[v.RETENTION_UNKNOWN = 0] = "RETENTION_UNKNOWN", v[v.RETENTION_RUNTIME = 1] = "RETENTION_RUNTIME", v[v.RETENTION_SOURCE = 2] = "RETENTION_SOURCE";
    })(L || (e.FieldOptions_OptionRetention = L = {})), n.proto2.util.setEnumType(L, "google.protobuf.FieldOptions.OptionRetention", [
      { no: 0, name: "RETENTION_UNKNOWN" },
      { no: 1, name: "RETENTION_RUNTIME" },
      { no: 2, name: "RETENTION_SOURCE" }
    ]);
    var B;
    (function(v) {
      v[v.TARGET_TYPE_UNKNOWN = 0] = "TARGET_TYPE_UNKNOWN", v[v.TARGET_TYPE_FILE = 1] = "TARGET_TYPE_FILE", v[v.TARGET_TYPE_EXTENSION_RANGE = 2] = "TARGET_TYPE_EXTENSION_RANGE", v[v.TARGET_TYPE_MESSAGE = 3] = "TARGET_TYPE_MESSAGE", v[v.TARGET_TYPE_FIELD = 4] = "TARGET_TYPE_FIELD", v[v.TARGET_TYPE_ONEOF = 5] = "TARGET_TYPE_ONEOF", v[v.TARGET_TYPE_ENUM = 6] = "TARGET_TYPE_ENUM", v[v.TARGET_TYPE_ENUM_ENTRY = 7] = "TARGET_TYPE_ENUM_ENTRY", v[v.TARGET_TYPE_SERVICE = 8] = "TARGET_TYPE_SERVICE", v[v.TARGET_TYPE_METHOD = 9] = "TARGET_TYPE_METHOD";
    })(B || (e.FieldOptions_OptionTargetType = B = {})), n.proto2.util.setEnumType(B, "google.protobuf.FieldOptions.OptionTargetType", [
      { no: 0, name: "TARGET_TYPE_UNKNOWN" },
      { no: 1, name: "TARGET_TYPE_FILE" },
      { no: 2, name: "TARGET_TYPE_EXTENSION_RANGE" },
      { no: 3, name: "TARGET_TYPE_MESSAGE" },
      { no: 4, name: "TARGET_TYPE_FIELD" },
      { no: 5, name: "TARGET_TYPE_ONEOF" },
      { no: 6, name: "TARGET_TYPE_ENUM" },
      { no: 7, name: "TARGET_TYPE_ENUM_ENTRY" },
      { no: 8, name: "TARGET_TYPE_SERVICE" },
      { no: 9, name: "TARGET_TYPE_METHOD" }
    ]);
    var J = class De extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new De().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new De().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new De().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(De, p, _);
      }
    };
    e.FieldOptions_EditionDefault = J, J.runtime = n.proto2, J.typeName = "google.protobuf.FieldOptions.EditionDefault", J.fields = n.proto2.util.newFieldList(() => [
      { no: 3, name: "edition", kind: "enum", T: n.proto2.getEnumType(r), opt: !0 },
      { no: 2, name: "value", kind: "scalar", T: 9, opt: !0 }
    ]);
    var Y = class Me extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Me().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Me().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Me().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Me, p, _);
      }
    };
    e.OneofOptions = Y, Y.runtime = n.proto2, Y.typeName = "google.protobuf.OneofOptions", Y.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "features", kind: "message", T: F, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var X = class Re extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Re().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Re().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Re().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Re, p, _);
      }
    };
    e.EnumOptions = X, X.runtime = n.proto2, X.typeName = "google.protobuf.EnumOptions", X.fields = n.proto2.util.newFieldList(() => [
      { no: 2, name: "allow_alias", kind: "scalar", T: 8, opt: !0 },
      { no: 3, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 6, name: "deprecated_legacy_json_field_conflicts", kind: "scalar", T: 8, opt: !0 },
      { no: 7, name: "features", kind: "message", T: F, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var T = class Fe extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Fe().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Fe().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Fe().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Fe, p, _);
      }
    };
    e.EnumValueOptions = T, T.runtime = n.proto2, T.typeName = "google.protobuf.EnumValueOptions", T.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 2, name: "features", kind: "message", T: F, opt: !0 },
      { no: 3, name: "debug_redact", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var P = class Ae extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ae().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ae().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ae().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ae, p, _);
      }
    };
    e.ServiceOptions = P, P.runtime = n.proto2, P.typeName = "google.protobuf.ServiceOptions", P.fields = n.proto2.util.newFieldList(() => [
      { no: 34, name: "features", kind: "message", T: F, opt: !0 },
      { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var I = class je extends t.Message {
      constructor(p) {
        super(), this.uninterpretedOption = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new je().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new je().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new je().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(je, p, _);
      }
    };
    e.MethodOptions = I, I.runtime = n.proto2, I.typeName = "google.protobuf.MethodOptions", I.fields = n.proto2.util.newFieldList(() => [
      { no: 33, name: "deprecated", kind: "scalar", T: 8, opt: !0, default: !1 },
      { no: 34, name: "idempotency_level", kind: "enum", T: n.proto2.getEnumType(A), opt: !0, default: A.IDEMPOTENCY_UNKNOWN },
      { no: 35, name: "features", kind: "message", T: F, opt: !0 },
      { no: 999, name: "uninterpreted_option", kind: "message", T: M, repeated: !0 }
    ]);
    var A;
    (function(v) {
      v[v.IDEMPOTENCY_UNKNOWN = 0] = "IDEMPOTENCY_UNKNOWN", v[v.NO_SIDE_EFFECTS = 1] = "NO_SIDE_EFFECTS", v[v.IDEMPOTENT = 2] = "IDEMPOTENT";
    })(A || (e.MethodOptions_IdempotencyLevel = A = {})), n.proto2.util.setEnumType(A, "google.protobuf.MethodOptions.IdempotencyLevel", [
      { no: 0, name: "IDEMPOTENCY_UNKNOWN" },
      { no: 1, name: "NO_SIDE_EFFECTS" },
      { no: 2, name: "IDEMPOTENT" }
    ]);
    var M = class Le extends t.Message {
      constructor(p) {
        super(), this.name = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Le().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Le().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Le().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Le, p, _);
      }
    };
    e.UninterpretedOption = M, M.runtime = n.proto2, M.typeName = "google.protobuf.UninterpretedOption", M.fields = n.proto2.util.newFieldList(() => [
      { no: 2, name: "name", kind: "message", T: U, repeated: !0 },
      { no: 3, name: "identifier_value", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "positive_int_value", kind: "scalar", T: 4, opt: !0 },
      { no: 5, name: "negative_int_value", kind: "scalar", T: 3, opt: !0 },
      { no: 6, name: "double_value", kind: "scalar", T: 1, opt: !0 },
      { no: 7, name: "string_value", kind: "scalar", T: 12, opt: !0 },
      { no: 8, name: "aggregate_value", kind: "scalar", T: 9, opt: !0 }
    ]);
    var U = class Be extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Be().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Be().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Be().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Be, p, _);
      }
    };
    e.UninterpretedOption_NamePart = U, U.runtime = n.proto2, U.typeName = "google.protobuf.UninterpretedOption.NamePart", U.fields = n.proto2.util.newFieldList(() => [
      {
        no: 1,
        name: "name_part",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 2,
        name: "is_extension",
        kind: "scalar",
        T: 8
        /* ScalarType.BOOL */
      }
    ]);
    var F = class Ue extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ue().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ue().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ue().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ue, p, _);
      }
    };
    e.FeatureSet = F, F.runtime = n.proto2, F.typeName = "google.protobuf.FeatureSet", F.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "field_presence", kind: "enum", T: n.proto2.getEnumType(V), opt: !0 },
      { no: 2, name: "enum_type", kind: "enum", T: n.proto2.getEnumType(W), opt: !0 },
      { no: 3, name: "repeated_field_encoding", kind: "enum", T: n.proto2.getEnumType(G), opt: !0 },
      { no: 4, name: "utf8_validation", kind: "enum", T: n.proto2.getEnumType($), opt: !0 },
      { no: 5, name: "message_encoding", kind: "enum", T: n.proto2.getEnumType(K), opt: !0 },
      { no: 6, name: "json_format", kind: "enum", T: n.proto2.getEnumType(H), opt: !0 }
    ]);
    var V;
    (function(v) {
      v[v.FIELD_PRESENCE_UNKNOWN = 0] = "FIELD_PRESENCE_UNKNOWN", v[v.EXPLICIT = 1] = "EXPLICIT", v[v.IMPLICIT = 2] = "IMPLICIT", v[v.LEGACY_REQUIRED = 3] = "LEGACY_REQUIRED";
    })(V || (e.FeatureSet_FieldPresence = V = {})), n.proto2.util.setEnumType(V, "google.protobuf.FeatureSet.FieldPresence", [
      { no: 0, name: "FIELD_PRESENCE_UNKNOWN" },
      { no: 1, name: "EXPLICIT" },
      { no: 2, name: "IMPLICIT" },
      { no: 3, name: "LEGACY_REQUIRED" }
    ]);
    var W;
    (function(v) {
      v[v.ENUM_TYPE_UNKNOWN = 0] = "ENUM_TYPE_UNKNOWN", v[v.OPEN = 1] = "OPEN", v[v.CLOSED = 2] = "CLOSED";
    })(W || (e.FeatureSet_EnumType = W = {})), n.proto2.util.setEnumType(W, "google.protobuf.FeatureSet.EnumType", [
      { no: 0, name: "ENUM_TYPE_UNKNOWN" },
      { no: 1, name: "OPEN" },
      { no: 2, name: "CLOSED" }
    ]);
    var G;
    (function(v) {
      v[v.REPEATED_FIELD_ENCODING_UNKNOWN = 0] = "REPEATED_FIELD_ENCODING_UNKNOWN", v[v.PACKED = 1] = "PACKED", v[v.EXPANDED = 2] = "EXPANDED";
    })(G || (e.FeatureSet_RepeatedFieldEncoding = G = {})), n.proto2.util.setEnumType(G, "google.protobuf.FeatureSet.RepeatedFieldEncoding", [
      { no: 0, name: "REPEATED_FIELD_ENCODING_UNKNOWN" },
      { no: 1, name: "PACKED" },
      { no: 2, name: "EXPANDED" }
    ]);
    var $;
    (function(v) {
      v[v.UTF8_VALIDATION_UNKNOWN = 0] = "UTF8_VALIDATION_UNKNOWN", v[v.NONE = 1] = "NONE", v[v.VERIFY = 2] = "VERIFY";
    })($ || (e.FeatureSet_Utf8Validation = $ = {})), n.proto2.util.setEnumType($, "google.protobuf.FeatureSet.Utf8Validation", [
      { no: 0, name: "UTF8_VALIDATION_UNKNOWN" },
      { no: 1, name: "NONE" },
      { no: 2, name: "VERIFY" }
    ]);
    var K;
    (function(v) {
      v[v.MESSAGE_ENCODING_UNKNOWN = 0] = "MESSAGE_ENCODING_UNKNOWN", v[v.LENGTH_PREFIXED = 1] = "LENGTH_PREFIXED", v[v.DELIMITED = 2] = "DELIMITED";
    })(K || (e.FeatureSet_MessageEncoding = K = {})), n.proto2.util.setEnumType(K, "google.protobuf.FeatureSet.MessageEncoding", [
      { no: 0, name: "MESSAGE_ENCODING_UNKNOWN" },
      { no: 1, name: "LENGTH_PREFIXED" },
      { no: 2, name: "DELIMITED" }
    ]);
    var H;
    (function(v) {
      v[v.JSON_FORMAT_UNKNOWN = 0] = "JSON_FORMAT_UNKNOWN", v[v.ALLOW = 1] = "ALLOW", v[v.LEGACY_BEST_EFFORT = 2] = "LEGACY_BEST_EFFORT";
    })(H || (e.FeatureSet_JsonFormat = H = {})), n.proto2.util.setEnumType(H, "google.protobuf.FeatureSet.JsonFormat", [
      { no: 0, name: "JSON_FORMAT_UNKNOWN" },
      { no: 1, name: "ALLOW" },
      { no: 2, name: "LEGACY_BEST_EFFORT" }
    ]);
    var te = class Je extends t.Message {
      constructor(p) {
        super(), this.defaults = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Je().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Je().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Je().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Je, p, _);
      }
    };
    e.FeatureSetDefaults = te, te.runtime = n.proto2, te.typeName = "google.protobuf.FeatureSetDefaults", te.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "defaults", kind: "message", T: ce, repeated: !0 },
      { no: 4, name: "minimum_edition", kind: "enum", T: n.proto2.getEnumType(r), opt: !0 },
      { no: 5, name: "maximum_edition", kind: "enum", T: n.proto2.getEnumType(r), opt: !0 }
    ]);
    var ce = class Ve extends t.Message {
      constructor(p) {
        super(), n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ve().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ve().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ve().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ve, p, _);
      }
    };
    e.FeatureSetDefaults_FeatureSetEditionDefault = ce, ce.runtime = n.proto2, ce.typeName = "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", ce.fields = n.proto2.util.newFieldList(() => [
      { no: 3, name: "edition", kind: "enum", T: n.proto2.getEnumType(r), opt: !0 },
      { no: 2, name: "features", kind: "message", T: F, opt: !0 }
    ]);
    var me = class Ge extends t.Message {
      constructor(p) {
        super(), this.location = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ge().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ge().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ge().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ge, p, _);
      }
    };
    e.SourceCodeInfo = me, me.runtime = n.proto2, me.typeName = "google.protobuf.SourceCodeInfo", me.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "location", kind: "message", T: de, repeated: !0 }
    ]);
    var de = class qe extends t.Message {
      constructor(p) {
        super(), this.path = [], this.span = [], this.leadingDetachedComments = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new qe().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new qe().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new qe().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(qe, p, _);
      }
    };
    e.SourceCodeInfo_Location = de, de.runtime = n.proto2, de.typeName = "google.protobuf.SourceCodeInfo.Location", de.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
      { no: 2, name: "span", kind: "scalar", T: 5, repeated: !0, packed: !0 },
      { no: 3, name: "leading_comments", kind: "scalar", T: 9, opt: !0 },
      { no: 4, name: "trailing_comments", kind: "scalar", T: 9, opt: !0 },
      { no: 6, name: "leading_detached_comments", kind: "scalar", T: 9, repeated: !0 }
    ]);
    var On = class Ye extends t.Message {
      constructor(p) {
        super(), this.annotation = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new Ye().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new Ye().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new Ye().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals(Ye, p, _);
      }
    };
    e.GeneratedCodeInfo = On, On.runtime = n.proto2, On.typeName = "google.protobuf.GeneratedCodeInfo", On.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "annotation", kind: "message", T: fe, repeated: !0 }
    ]);
    var fe = class $e extends t.Message {
      constructor(p) {
        super(), this.path = [], n.proto2.util.initPartial(p, this);
      }
      static fromBinary(p, _) {
        return new $e().fromBinary(p, _);
      }
      static fromJson(p, _) {
        return new $e().fromJson(p, _);
      }
      static fromJsonString(p, _) {
        return new $e().fromJsonString(p, _);
      }
      static equals(p, _) {
        return n.proto2.util.equals($e, p, _);
      }
    };
    e.GeneratedCodeInfo_Annotation = fe, fe.runtime = n.proto2, fe.typeName = "google.protobuf.GeneratedCodeInfo.Annotation", fe.fields = n.proto2.util.newFieldList(() => [
      { no: 1, name: "path", kind: "scalar", T: 5, repeated: !0, packed: !0 },
      { no: 2, name: "source_file", kind: "scalar", T: 9, opt: !0 },
      { no: 3, name: "begin", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "end", kind: "scalar", T: 5, opt: !0 },
      { no: 5, name: "semantic", kind: "enum", T: n.proto2.getEnumType(wn), opt: !0 }
    ]);
    var wn;
    (function(v) {
      v[v.NONE = 0] = "NONE", v[v.SET = 1] = "SET", v[v.ALIAS = 2] = "ALIAS";
    })(wn || (e.GeneratedCodeInfo_Annotation_Semantic = wn = {})), n.proto2.util.setEnumType(wn, "google.protobuf.GeneratedCodeInfo.Annotation.Semantic", [
      { no: 0, name: "NONE" },
      { no: 1, name: "SET" },
      { no: 2, name: "ALIAS" }
    ]);
  }
}), ga = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/text-format.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.parseTextFormatScalarValue = e.parseTextFormatEnumValue = void 0;
    var n = Z(), t = Q(), r = ne();
    function m(s, o) {
      const a = s.values.find((c) => c.name === o);
      return (0, n.assert)(a, `cannot parse ${s.name} default value: ${o}`), a.number;
    }
    e.parseTextFormatEnumValue = m;
    function i(s, o) {
      switch (s) {
        case t.ScalarType.STRING:
          return o;
        case t.ScalarType.BYTES: {
          const a = u(o);
          if (a === !1)
            throw new Error(`cannot parse ${t.ScalarType[s]} default value: ${o}`);
          return a;
        }
        case t.ScalarType.INT64:
        case t.ScalarType.SFIXED64:
        case t.ScalarType.SINT64:
          return r.protoInt64.parse(o);
        case t.ScalarType.UINT64:
        case t.ScalarType.FIXED64:
          return r.protoInt64.uParse(o);
        case t.ScalarType.DOUBLE:
        case t.ScalarType.FLOAT:
          switch (o) {
            case "inf":
              return Number.POSITIVE_INFINITY;
            case "-inf":
              return Number.NEGATIVE_INFINITY;
            case "nan":
              return Number.NaN;
            default:
              return parseFloat(o);
          }
        case t.ScalarType.BOOL:
          return o === "true";
        case t.ScalarType.INT32:
        case t.ScalarType.UINT32:
        case t.ScalarType.SINT32:
        case t.ScalarType.FIXED32:
        case t.ScalarType.SFIXED32:
          return parseInt(o, 10);
      }
    }
    e.parseTextFormatScalarValue = i;
    function u(s) {
      const o = [], a = {
        tail: s,
        c: "",
        next() {
          return this.tail.length == 0 ? !1 : (this.c = this.tail[0], this.tail = this.tail.substring(1), !0);
        },
        take(c) {
          if (this.tail.length >= c) {
            const l = this.tail.substring(0, c);
            return this.tail = this.tail.substring(c), l;
          }
          return !1;
        }
      };
      for (; a.next(); )
        switch (a.c) {
          case "\\":
            if (a.next())
              switch (a.c) {
                case "\\":
                  o.push(a.c.charCodeAt(0));
                  break;
                case "b":
                  o.push(8);
                  break;
                case "f":
                  o.push(12);
                  break;
                case "n":
                  o.push(10);
                  break;
                case "r":
                  o.push(13);
                  break;
                case "t":
                  o.push(9);
                  break;
                case "v":
                  o.push(11);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7": {
                  const c = a.c, l = a.take(2);
                  if (l === !1)
                    return !1;
                  const y = parseInt(c + l, 8);
                  if (isNaN(y))
                    return !1;
                  o.push(y);
                  break;
                }
                case "x": {
                  const c = a.c, l = a.take(2);
                  if (l === !1)
                    return !1;
                  const y = parseInt(c + l, 16);
                  if (isNaN(y))
                    return !1;
                  o.push(y);
                  break;
                }
                case "u": {
                  const c = a.c, l = a.take(4);
                  if (l === !1)
                    return !1;
                  const y = parseInt(c + l, 16);
                  if (isNaN(y))
                    return !1;
                  const d = new Uint8Array(4);
                  new DataView(d.buffer).setInt32(0, y, !0), o.push(d[0], d[1], d[2], d[3]);
                  break;
                }
                case "U": {
                  const c = a.c, l = a.take(8);
                  if (l === !1)
                    return !1;
                  const y = r.protoInt64.uEnc(c + l), d = new Uint8Array(8), f = new DataView(d.buffer);
                  f.setInt32(0, y.lo, !0), f.setInt32(4, y.hi, !0), o.push(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7]);
                  break;
                }
              }
            break;
          default:
            o.push(a.c.charCodeAt(0));
        }
      return new Uint8Array(o);
    }
  }
}), _a = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/private/feature-set.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createFeatureResolver = void 0;
    var n = Sn(), t = zn();
    function r(u) {
      return n.FeatureSetDefaults.fromBinary(t.protoBase64.dec(
        /*upstream-inject-feature-defaults-start*/
        "ChESDAgBEAIYAiABKAEwAhjmBwoREgwIAhABGAEgAigBMAEY5wcKERIMCAEQARgBIAIoATABGOgHIOYHKOgH"
        /*upstream-inject-feature-defaults-end*/
      ), u);
    }
    function m(u, s, o) {
      var a, c;
      const l = s ?? r(o), y = l.minimumEdition, d = l.maximumEdition;
      if (y === void 0 || d === void 0 || l.defaults.some((h) => h.edition === void 0))
        throw new Error("Invalid FeatureSetDefaults");
      if (u < y)
        throw new Error(`Edition ${n.Edition[u]} is earlier than the minimum supported edition ${n.Edition[y]}`);
      if (d < u)
        throw new Error(`Edition ${n.Edition[u]} is later than the maximum supported edition ${n.Edition[d]}`);
      let f;
      for (const h of l.defaults) {
        const w = (a = h.edition) !== null && a !== void 0 ? a : 0;
        w > u || f !== void 0 && f.e > w || (f = {
          e: w,
          f: (c = h.features) !== null && c !== void 0 ? c : new n.FeatureSet()
        });
      }
      if (f === void 0)
        throw new Error(`No valid default found for edition ${n.Edition[u]}`);
      const g = f.f.toBinary(o);
      return (...h) => {
        const w = n.FeatureSet.fromBinary(g, o);
        for (const k of h)
          k !== void 0 && w.fromBinary(k.toBinary(o), o);
        if (!i(w))
          throw new Error(`Invalid FeatureSet for edition ${n.Edition[u]}`);
        return w;
      };
    }
    e.createFeatureResolver = m;
    function i(u) {
      for (const s of n.FeatureSet.fields.list()) {
        const o = u[s.localName];
        if (o === void 0 || s.kind == "enum" && o === 0)
          return !1;
      }
      return !0;
    }
  }
}), fo = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/create-descriptor-set.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createDescriptorSet = void 0;
    var n = Sn(), t = Z(), r = Q(), m = mo(), i = le(), u = ga(), s = _a();
    function o(T, P) {
      const I = {
        enums: /* @__PURE__ */ new Map(),
        messages: /* @__PURE__ */ new Map(),
        services: /* @__PURE__ */ new Map(),
        extensions: /* @__PURE__ */ new Map(),
        mapEntries: /* @__PURE__ */ new Map()
      }, A = T instanceof n.FileDescriptorSet ? T.file : T instanceof Uint8Array ? n.FileDescriptorSet.fromBinary(T).file : T, M = /* @__PURE__ */ new Map(), U = A.map((F) => {
        var V;
        const W = (V = F.edition) !== null && V !== void 0 ? V : O(F.syntax, F.edition).edition;
        let G = M.get(W);
        return G === void 0 && (G = (0, s.createFeatureResolver)(W, P?.featureSetDefaults, P?.serializationOptions), M.set(W, G)), a(F, I, G);
      });
      return Object.assign({ files: U }, I);
    }
    e.createDescriptorSet = o;
    function a(T, P, I) {
      var A, M;
      (0, t.assert)(T.name, "invalid FileDescriptorProto: missing name");
      const U = Object.assign(Object.assign({ kind: "file", proto: T, deprecated: (M = (A = T.options) === null || A === void 0 ? void 0 : A.deprecated) !== null && M !== void 0 ? M : !1 }, O(T.syntax, T.edition)), {
        name: T.name.replace(/\.proto/, ""),
        enums: [],
        messages: [],
        extensions: [],
        services: [],
        toString() {
          return `file ${this.proto.name}`;
        },
        getSyntaxComments() {
          return B(this.proto.sourceCodeInfo, [
            J.FileDescriptorProto_Syntax
          ]);
        },
        getPackageComments() {
          return B(this.proto.sourceCodeInfo, [
            J.FileDescriptorProto_Package
          ]);
        },
        getFeatures() {
          var F;
          return I((F = T.options) === null || F === void 0 ? void 0 : F.features);
        }
      });
      P.mapEntries.clear();
      for (const F of T.enumType)
        y(F, U, void 0, P, I);
      for (const F of T.messageType)
        d(F, U, void 0, P, I);
      for (const F of T.service)
        f(F, U, P, I);
      c(U, P, I);
      for (const F of P.mapEntries.values())
        l(F, P, I);
      for (const F of U.messages)
        l(F, P, I), c(F, P, I);
      return P.mapEntries.clear(), U;
    }
    function c(T, P, I) {
      switch (T.kind) {
        case "file":
          for (const A of T.proto.extension) {
            const M = k(A, T, void 0, P, I);
            T.extensions.push(M), P.extensions.set(M.typeName, M);
          }
          break;
        case "message":
          for (const A of T.proto.extension) {
            const M = k(A, T.file, T, P, I);
            T.nestedExtensions.push(M), P.extensions.set(M.typeName, M);
          }
          for (const A of T.nestedMessages)
            c(A, P, I);
          break;
      }
    }
    function l(T, P, I) {
      const A = T.proto.oneofDecl.map((U) => h(U, T, I)), M = /* @__PURE__ */ new Set();
      for (const U of T.proto.field) {
        const F = C(U, A), V = w(U, T.file, T, F, P, I);
        T.fields.push(V), F === void 0 ? T.members.push(V) : (F.fields.push(V), M.has(F) || (M.add(F), T.members.push(F)));
      }
      for (const U of A.filter((F) => M.has(F)))
        T.oneofs.push(U);
      for (const U of T.nestedMessages)
        l(U, P, I);
    }
    function y(T, P, I, A, M) {
      var U, F, V;
      (0, t.assert)(T.name, "invalid EnumDescriptorProto: missing name");
      const W = {
        kind: "enum",
        proto: T,
        deprecated: (F = (U = T.options) === null || U === void 0 ? void 0 : U.deprecated) !== null && F !== void 0 ? F : !1,
        file: P,
        parent: I,
        name: T.name,
        typeName: b(T, I, P),
        values: [],
        sharedPrefix: (0, i.findEnumSharedPrefix)(T.name, T.value.map((G) => {
          var $;
          return ($ = G.name) !== null && $ !== void 0 ? $ : "";
        })),
        toString() {
          return `enum ${this.typeName}`;
        },
        getComments() {
          const G = this.parent ? [
            ...this.parent.getComments().sourcePath,
            J.DescriptorProto_EnumType,
            this.parent.proto.enumType.indexOf(this.proto)
          ] : [
            J.FileDescriptorProto_EnumType,
            this.file.proto.enumType.indexOf(this.proto)
          ];
          return B(P.proto.sourceCodeInfo, G);
        },
        getFeatures() {
          var G, $;
          return M((G = I?.getFeatures()) !== null && G !== void 0 ? G : P.getFeatures(), ($ = T.options) === null || $ === void 0 ? void 0 : $.features);
        }
      };
      A.enums.set(W.typeName, W), T.value.forEach((G) => {
        var $, K;
        (0, t.assert)(G.name, "invalid EnumValueDescriptorProto: missing name"), (0, t.assert)(G.number !== void 0, "invalid EnumValueDescriptorProto: missing number"), W.values.push({
          kind: "enum_value",
          proto: G,
          deprecated: (K = ($ = G.options) === null || $ === void 0 ? void 0 : $.deprecated) !== null && K !== void 0 ? K : !1,
          parent: W,
          name: G.name,
          number: G.number,
          toString() {
            return `enum value ${W.typeName}.${this.name}`;
          },
          declarationString() {
            var H;
            let te = `${this.name} = ${this.number}`;
            return ((H = this.proto.options) === null || H === void 0 ? void 0 : H.deprecated) === !0 && (te += " [deprecated = true]"), te;
          },
          getComments() {
            const H = [
              ...this.parent.getComments().sourcePath,
              J.EnumDescriptorProto_Value,
              this.parent.proto.value.indexOf(this.proto)
            ];
            return B(P.proto.sourceCodeInfo, H);
          },
          getFeatures() {
            var H;
            return M(W.getFeatures(), (H = G.options) === null || H === void 0 ? void 0 : H.features);
          }
        });
      }), ((V = I?.nestedEnums) !== null && V !== void 0 ? V : P.enums).push(W);
    }
    function d(T, P, I, A, M) {
      var U, F, V, W;
      (0, t.assert)(T.name, "invalid DescriptorProto: missing name");
      const G = {
        kind: "message",
        proto: T,
        deprecated: (F = (U = T.options) === null || U === void 0 ? void 0 : U.deprecated) !== null && F !== void 0 ? F : !1,
        file: P,
        parent: I,
        name: T.name,
        typeName: b(T, I, P),
        fields: [],
        oneofs: [],
        members: [],
        nestedEnums: [],
        nestedMessages: [],
        nestedExtensions: [],
        toString() {
          return `message ${this.typeName}`;
        },
        getComments() {
          const $ = this.parent ? [
            ...this.parent.getComments().sourcePath,
            J.DescriptorProto_NestedType,
            this.parent.proto.nestedType.indexOf(this.proto)
          ] : [
            J.FileDescriptorProto_MessageType,
            this.file.proto.messageType.indexOf(this.proto)
          ];
          return B(P.proto.sourceCodeInfo, $);
        },
        getFeatures() {
          var $, K;
          return M(($ = I?.getFeatures()) !== null && $ !== void 0 ? $ : P.getFeatures(), (K = T.options) === null || K === void 0 ? void 0 : K.features);
        }
      };
      ((V = T.options) === null || V === void 0 ? void 0 : V.mapEntry) === !0 ? A.mapEntries.set(G.typeName, G) : (((W = I?.nestedMessages) !== null && W !== void 0 ? W : P.messages).push(G), A.messages.set(G.typeName, G));
      for (const $ of T.enumType)
        y($, P, G, A, M);
      for (const $ of T.nestedType)
        d($, P, G, A, M);
    }
    function f(T, P, I, A) {
      var M, U;
      (0, t.assert)(T.name, "invalid ServiceDescriptorProto: missing name");
      const F = {
        kind: "service",
        proto: T,
        deprecated: (U = (M = T.options) === null || M === void 0 ? void 0 : M.deprecated) !== null && U !== void 0 ? U : !1,
        file: P,
        name: T.name,
        typeName: b(T, void 0, P),
        methods: [],
        toString() {
          return `service ${this.typeName}`;
        },
        getComments() {
          const V = [
            J.FileDescriptorProto_Service,
            this.file.proto.service.indexOf(this.proto)
          ];
          return B(P.proto.sourceCodeInfo, V);
        },
        getFeatures() {
          var V;
          return A(P.getFeatures(), (V = T.options) === null || V === void 0 ? void 0 : V.features);
        }
      };
      P.services.push(F), I.services.set(F.typeName, F);
      for (const V of T.method)
        F.methods.push(g(V, F, I, A));
    }
    function g(T, P, I, A) {
      var M, U, F;
      (0, t.assert)(T.name, "invalid MethodDescriptorProto: missing name"), (0, t.assert)(T.inputType, "invalid MethodDescriptorProto: missing input_type"), (0, t.assert)(T.outputType, "invalid MethodDescriptorProto: missing output_type");
      let V;
      T.clientStreaming === !0 && T.serverStreaming === !0 ? V = m.MethodKind.BiDiStreaming : T.clientStreaming === !0 ? V = m.MethodKind.ClientStreaming : T.serverStreaming === !0 ? V = m.MethodKind.ServerStreaming : V = m.MethodKind.Unary;
      let W;
      switch ((M = T.options) === null || M === void 0 ? void 0 : M.idempotencyLevel) {
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENT:
          W = m.MethodIdempotency.Idempotent;
          break;
        case n.MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
          W = m.MethodIdempotency.NoSideEffects;
          break;
        case n.MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
        case void 0:
          W = void 0;
          break;
      }
      const G = I.messages.get(D(T.inputType)), $ = I.messages.get(D(T.outputType));
      (0, t.assert)(G, `invalid MethodDescriptorProto: input_type ${T.inputType} not found`), (0, t.assert)($, `invalid MethodDescriptorProto: output_type ${T.inputType} not found`);
      const K = T.name;
      return {
        kind: "rpc",
        proto: T,
        deprecated: (F = (U = T.options) === null || U === void 0 ? void 0 : U.deprecated) !== null && F !== void 0 ? F : !1,
        parent: P,
        name: K,
        methodKind: V,
        input: G,
        output: $,
        idempotency: W,
        toString() {
          return `rpc ${P.typeName}.${K}`;
        },
        getComments() {
          const H = [
            ...this.parent.getComments().sourcePath,
            J.ServiceDescriptorProto_Method,
            this.parent.proto.method.indexOf(this.proto)
          ];
          return B(P.file.proto.sourceCodeInfo, H);
        },
        getFeatures() {
          var H;
          return A(P.getFeatures(), (H = T.options) === null || H === void 0 ? void 0 : H.features);
        }
      };
    }
    function h(T, P, I) {
      return (0, t.assert)(T.name, "invalid OneofDescriptorProto: missing name"), {
        kind: "oneof",
        proto: T,
        deprecated: !1,
        parent: P,
        fields: [],
        name: T.name,
        toString() {
          return `oneof ${P.typeName}.${this.name}`;
        },
        getComments() {
          const A = [
            ...this.parent.getComments().sourcePath,
            J.DescriptorProto_OneofDecl,
            this.parent.proto.oneofDecl.indexOf(this.proto)
          ];
          return B(P.file.proto.sourceCodeInfo, A);
        },
        getFeatures() {
          var A;
          return I(P.getFeatures(), (A = T.options) === null || A === void 0 ? void 0 : A.features);
        }
      };
    }
    function w(T, P, I, A, M, U) {
      var F, V, W;
      (0, t.assert)(T.name, "invalid FieldDescriptorProto: missing name"), (0, t.assert)(T.number, "invalid FieldDescriptorProto: missing number"), (0, t.assert)(T.type, "invalid FieldDescriptorProto: missing type");
      const G = {
        proto: T,
        deprecated: (V = (F = T.options) === null || F === void 0 ? void 0 : F.deprecated) !== null && V !== void 0 ? V : !1,
        name: T.name,
        number: T.number,
        parent: I,
        oneof: A,
        optional: N(T, P.syntax),
        packedByDefault: j(T, U),
        packed: R(P, I, T, U),
        jsonName: T.jsonName === (0, i.fieldJsonName)(T.name) ? void 0 : T.jsonName,
        scalar: void 0,
        longType: void 0,
        message: void 0,
        enum: void 0,
        mapKey: void 0,
        mapValue: void 0,
        declarationString: Y,
        // toString, getComments, getFeatures are overridden in newExtension
        toString() {
          return `field ${this.parent.typeName}.${this.name}`;
        },
        getComments() {
          const K = [
            ...this.parent.getComments().sourcePath,
            J.DescriptorProto_Field,
            this.parent.proto.field.indexOf(this.proto)
          ];
          return B(P.proto.sourceCodeInfo, K);
        },
        getFeatures() {
          var K;
          return U(I.getFeatures(), (K = T.options) === null || K === void 0 ? void 0 : K.features);
        }
      }, $ = T.label === n.FieldDescriptorProto_Label.REPEATED;
      switch (T.type) {
        case n.FieldDescriptorProto_Type.MESSAGE:
        case n.FieldDescriptorProto_Type.GROUP: {
          (0, t.assert)(T.typeName, "invalid FieldDescriptorProto: missing type_name");
          const K = M.mapEntries.get(D(T.typeName));
          if (K !== void 0)
            return (0, t.assert)($, "invalid FieldDescriptorProto: expected map entry to be repeated"), Object.assign(Object.assign(Object.assign({}, G), { kind: "field", fieldKind: "map", repeated: !1 }), S(K));
          const H = M.messages.get(D(T.typeName));
          return (0, t.assert)(H !== void 0, `invalid FieldDescriptorProto: type_name ${T.typeName} not found`), Object.assign(Object.assign({}, G), {
            kind: "field",
            fieldKind: "message",
            repeated: $,
            message: H
          });
        }
        case n.FieldDescriptorProto_Type.ENUM: {
          (0, t.assert)(T.typeName, "invalid FieldDescriptorProto: missing type_name");
          const K = M.enums.get(D(T.typeName));
          return (0, t.assert)(K !== void 0, `invalid FieldDescriptorProto: type_name ${T.typeName} not found`), Object.assign(Object.assign({}, G), {
            kind: "field",
            fieldKind: "enum",
            getDefaultValue: X,
            repeated: $,
            enum: K
          });
        }
        default: {
          const K = L[T.type];
          return (0, t.assert)(K, `invalid FieldDescriptorProto: unknown type ${T.type}`), Object.assign(Object.assign({}, G), {
            kind: "field",
            fieldKind: "scalar",
            getDefaultValue: X,
            repeated: $,
            scalar: K,
            longType: ((W = T.options) === null || W === void 0 ? void 0 : W.jstype) == n.FieldOptions_JSType.JS_STRING ? r.LongType.STRING : r.LongType.BIGINT
          });
        }
      }
    }
    function k(T, P, I, A, M) {
      (0, t.assert)(T.extendee, "invalid FieldDescriptorProto: missing extendee");
      const U = w(
        T,
        P,
        null,
        // to safe us many lines of duplicated code, we trick the type system
        void 0,
        A,
        M
      ), F = A.messages.get(D(T.extendee));
      return (0, t.assert)(F, `invalid FieldDescriptorProto: extendee ${T.extendee} not found`), Object.assign(Object.assign({}, U), {
        kind: "extension",
        typeName: b(T, I, P),
        parent: I,
        file: P,
        extendee: F,
        // Must override toString, getComments, getFeatures from newField, because we
        // call newField with parent undefined.
        toString() {
          return `extension ${this.typeName}`;
        },
        getComments() {
          const V = this.parent ? [
            ...this.parent.getComments().sourcePath,
            J.DescriptorProto_Extension,
            this.parent.proto.extension.indexOf(T)
          ] : [
            J.FileDescriptorProto_Extension,
            this.file.proto.extension.indexOf(T)
          ];
          return B(P.proto.sourceCodeInfo, V);
        },
        getFeatures() {
          var V;
          return M((I ?? P).getFeatures(), (V = T.options) === null || V === void 0 ? void 0 : V.features);
        }
      });
    }
    function O(T, P) {
      let I, A;
      switch (T) {
        case void 0:
        case "proto2":
          A = "proto2", I = n.Edition.EDITION_PROTO2;
          break;
        case "proto3":
          A = "proto3", I = n.Edition.EDITION_PROTO3;
          break;
        case "editions":
          switch (A = "editions", P) {
            case void 0:
            case n.Edition.EDITION_1_TEST_ONLY:
            case n.Edition.EDITION_2_TEST_ONLY:
            case n.Edition.EDITION_99997_TEST_ONLY:
            case n.Edition.EDITION_99998_TEST_ONLY:
            case n.Edition.EDITION_99999_TEST_ONLY:
            case n.Edition.EDITION_UNKNOWN:
              I = n.Edition.EDITION_UNKNOWN;
              break;
            default:
              I = P;
              break;
          }
          break;
        default:
          throw new Error(`invalid FileDescriptorProto: unsupported syntax: ${T}`);
      }
      if (T === "editions" && P === n.Edition.EDITION_UNKNOWN)
        throw new Error(`invalid FileDescriptorProto: syntax ${T} cannot have edition ${String(P)}`);
      return {
        syntax: A,
        edition: I
      };
    }
    function b(T, P, I) {
      (0, t.assert)(T.name, `invalid ${T.getType().typeName}: missing name`);
      let A;
      return P ? A = `${P.typeName}.${T.name}` : I.proto.package !== void 0 ? A = `${I.proto.package}.${T.name}` : A = `${T.name}`, A;
    }
    function D(T) {
      return T.startsWith(".") ? T.substring(1) : T;
    }
    function S(T) {
      var P, I;
      (0, t.assert)((P = T.proto.options) === null || P === void 0 ? void 0 : P.mapEntry, `invalid DescriptorProto: expected ${T.toString()} to be a map entry`), (0, t.assert)(T.fields.length === 2, `invalid DescriptorProto: map entry ${T.toString()} has ${T.fields.length} fields`);
      const A = T.fields.find((F) => F.proto.number === 1);
      (0, t.assert)(A, `invalid DescriptorProto: map entry ${T.toString()} is missing key field`);
      const M = A.scalar;
      (0, t.assert)(M !== void 0 && M !== r.ScalarType.BYTES && M !== r.ScalarType.FLOAT && M !== r.ScalarType.DOUBLE, `invalid DescriptorProto: map entry ${T.toString()} has unexpected key type ${(I = A.proto.type) !== null && I !== void 0 ? I : -1}`);
      const U = T.fields.find((F) => F.proto.number === 2);
      switch ((0, t.assert)(U, `invalid DescriptorProto: map entry ${T.toString()} is missing value field`), U.fieldKind) {
        case "scalar":
          return {
            mapKey: M,
            mapValue: Object.assign(Object.assign({}, U), { kind: "scalar" })
          };
        case "message":
          return {
            mapKey: M,
            mapValue: Object.assign(Object.assign({}, U), { kind: "message" })
          };
        case "enum":
          return {
            mapKey: M,
            mapValue: Object.assign(Object.assign({}, U), { kind: "enum" })
          };
        default:
          throw new Error("invalid DescriptorProto: unsupported map entry value field");
      }
    }
    function C(T, P) {
      var I;
      const A = T.oneofIndex;
      if (A === void 0)
        return;
      let M;
      return T.proto3Optional !== !0 && (M = P[A], (0, t.assert)(M, `invalid FieldDescriptorProto: oneof #${A} for field #${(I = T.number) !== null && I !== void 0 ? I : -1} not found`)), M;
    }
    function N(T, P) {
      switch (P) {
        case "proto2":
          return T.oneofIndex === void 0 && T.label === n.FieldDescriptorProto_Label.OPTIONAL;
        case "proto3":
          return T.proto3Optional === !0;
        case "editions":
          return !1;
      }
    }
    function j(T, P) {
      const { repeatedFieldEncoding: I } = P();
      if (I != n.FeatureSet_RepeatedFieldEncoding.PACKED)
        return !1;
      switch (T.type) {
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
          return !1;
        default:
          return !0;
      }
    }
    function R(T, P, I, A) {
      var M, U, F, V, W, G;
      switch (I.type) {
        case n.FieldDescriptorProto_Type.STRING:
        case n.FieldDescriptorProto_Type.BYTES:
        case n.FieldDescriptorProto_Type.GROUP:
        case n.FieldDescriptorProto_Type.MESSAGE:
          return !1;
        default:
          switch (T.edition) {
            case n.Edition.EDITION_PROTO2:
              return (U = (M = I.options) === null || M === void 0 ? void 0 : M.packed) !== null && U !== void 0 ? U : !1;
            case n.Edition.EDITION_PROTO3:
              return (V = (F = I.options) === null || F === void 0 ? void 0 : F.packed) !== null && V !== void 0 ? V : !0;
            default: {
              const { repeatedFieldEncoding: $ } = A((W = P?.getFeatures()) !== null && W !== void 0 ? W : T.getFeatures(), (G = I.options) === null || G === void 0 ? void 0 : G.features);
              return $ == n.FeatureSet_RepeatedFieldEncoding.PACKED;
            }
          }
      }
    }
    var L = {
      [n.FieldDescriptorProto_Type.DOUBLE]: r.ScalarType.DOUBLE,
      [n.FieldDescriptorProto_Type.FLOAT]: r.ScalarType.FLOAT,
      [n.FieldDescriptorProto_Type.INT64]: r.ScalarType.INT64,
      [n.FieldDescriptorProto_Type.UINT64]: r.ScalarType.UINT64,
      [n.FieldDescriptorProto_Type.INT32]: r.ScalarType.INT32,
      [n.FieldDescriptorProto_Type.FIXED64]: r.ScalarType.FIXED64,
      [n.FieldDescriptorProto_Type.FIXED32]: r.ScalarType.FIXED32,
      [n.FieldDescriptorProto_Type.BOOL]: r.ScalarType.BOOL,
      [n.FieldDescriptorProto_Type.STRING]: r.ScalarType.STRING,
      [n.FieldDescriptorProto_Type.GROUP]: void 0,
      [n.FieldDescriptorProto_Type.MESSAGE]: void 0,
      [n.FieldDescriptorProto_Type.BYTES]: r.ScalarType.BYTES,
      [n.FieldDescriptorProto_Type.UINT32]: r.ScalarType.UINT32,
      [n.FieldDescriptorProto_Type.ENUM]: void 0,
      [n.FieldDescriptorProto_Type.SFIXED32]: r.ScalarType.SFIXED32,
      [n.FieldDescriptorProto_Type.SFIXED64]: r.ScalarType.SFIXED64,
      [n.FieldDescriptorProto_Type.SINT32]: r.ScalarType.SINT32,
      [n.FieldDescriptorProto_Type.SINT64]: r.ScalarType.SINT64
    };
    function B(T, P) {
      if (!T)
        return {
          leadingDetached: [],
          sourcePath: P
        };
      for (const I of T.location)
        if (I.path.length === P.length && !I.path.some((A, M) => P[M] !== A))
          return {
            leadingDetached: I.leadingDetachedComments,
            leading: I.leadingComments,
            trailing: I.trailingComments,
            sourcePath: P
          };
      return {
        leadingDetached: [],
        sourcePath: P
      };
    }
    var J;
    (function(T) {
      T[T.FileDescriptorProto_Package = 2] = "FileDescriptorProto_Package", T[T.FileDescriptorProto_MessageType = 4] = "FileDescriptorProto_MessageType", T[T.FileDescriptorProto_EnumType = 5] = "FileDescriptorProto_EnumType", T[T.FileDescriptorProto_Service = 6] = "FileDescriptorProto_Service", T[T.FileDescriptorProto_Extension = 7] = "FileDescriptorProto_Extension", T[T.FileDescriptorProto_Syntax = 12] = "FileDescriptorProto_Syntax", T[T.DescriptorProto_Field = 2] = "DescriptorProto_Field", T[T.DescriptorProto_NestedType = 3] = "DescriptorProto_NestedType", T[T.DescriptorProto_EnumType = 4] = "DescriptorProto_EnumType", T[T.DescriptorProto_Extension = 6] = "DescriptorProto_Extension", T[T.DescriptorProto_OneofDecl = 8] = "DescriptorProto_OneofDecl", T[T.EnumDescriptorProto_Value = 2] = "EnumDescriptorProto_Value", T[T.ServiceDescriptorProto_Method = 2] = "ServiceDescriptorProto_Method";
    })(J || (J = {}));
    function Y() {
      var T, P, I;
      const A = [];
      this.repeated && A.push("repeated"), this.optional && A.push("optional"), (this.kind === "extension" ? this.file : this.parent.file).syntax == "proto2" && this.proto.label === n.FieldDescriptorProto_Label.REQUIRED && A.push("required");
      let U;
      switch (this.fieldKind) {
        case "scalar":
          U = r.ScalarType[this.scalar].toLowerCase();
          break;
        case "enum":
          U = this.enum.typeName;
          break;
        case "message":
          U = this.message.typeName;
          break;
        case "map": {
          const W = r.ScalarType[this.mapKey].toLowerCase();
          let G;
          switch (this.mapValue.kind) {
            case "scalar":
              G = r.ScalarType[this.mapValue.scalar].toLowerCase();
              break;
            case "enum":
              G = this.mapValue.enum.typeName;
              break;
            case "message":
              G = this.mapValue.message.typeName;
              break;
          }
          U = `map<${W}, ${G}>`;
          break;
        }
      }
      A.push(`${U} ${this.name} = ${this.number}`);
      const F = [];
      ((T = this.proto.options) === null || T === void 0 ? void 0 : T.packed) !== void 0 && F.push(`packed = ${this.proto.options.packed.toString()}`);
      let V = this.proto.defaultValue;
      return V !== void 0 && ((this.proto.type == n.FieldDescriptorProto_Type.BYTES || this.proto.type == n.FieldDescriptorProto_Type.STRING) && (V = '"' + V.replace('"', '\\"') + '"'), F.push(`default = ${V}`)), this.jsonName !== void 0 && F.push(`json_name = "${this.jsonName}"`), ((P = this.proto.options) === null || P === void 0 ? void 0 : P.jstype) !== void 0 && F.push(`jstype = ${n.FieldOptions_JSType[this.proto.options.jstype]}`), ((I = this.proto.options) === null || I === void 0 ? void 0 : I.deprecated) === !0 && F.push("deprecated = true"), F.length > 0 && A.push("[" + F.join(", ") + "]"), A.join(" ");
    }
    function X() {
      const T = this.proto.defaultValue;
      if (T !== void 0)
        switch (this.fieldKind) {
          case "enum":
            return (0, u.parseTextFormatEnumValue)(this.enum, T);
          case "scalar":
            return (0, u.parseTextFormatScalarValue)(this.scalar, T);
          default:
            return;
        }
    }
  }
}), Ta = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/create-registry.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createRegistry = void 0;
    function n(...t) {
      const r = {}, m = {}, i = {}, u = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = {
        findMessage(l) {
          return r[l];
        },
        findEnum(l) {
          return m[l];
        },
        findService(l) {
          return i[l];
        },
        findExtensionFor(l, y) {
          var d, f;
          return (f = (d = s.get(l)) === null || d === void 0 ? void 0 : d.get(y)) !== null && f !== void 0 ? f : void 0;
        },
        findExtension(l) {
          var y;
          return (y = u.get(l)) !== null && y !== void 0 ? y : void 0;
        }
      };
      function a(l) {
        var y;
        if ("fields" in l)
          o.findMessage(l.typeName) || (r[l.typeName] = l, l.fields.list().forEach(c));
        else if ("methods" in l) {
          if (!o.findService(l.typeName)) {
            i[l.typeName] = l;
            for (const d of Object.values(l.methods))
              a(d.I), a(d.O);
          }
        } else if ("extendee" in l) {
          if (!u.has(l.typeName)) {
            u.set(l.typeName, l);
            const d = l.extendee.typeName;
            s.has(d) || s.set(d, /* @__PURE__ */ new Map()), (y = s.get(d)) === null || y === void 0 || y.set(l.field.no, l), a(l.extendee), c(l.field);
          }
        } else
          m[l.typeName] = l;
      }
      function c(l) {
        l.kind == "message" ? a(l.T) : l.kind == "map" && l.V.kind == "message" ? a(l.V.T) : l.kind == "enum" && a(l.T);
      }
      for (const l of t)
        a(l);
      return o;
    }
    e.createRegistry = n;
  }
}), po = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/timestamp_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Timestamp = void 0;
    var n = x(), t = ne(), r = ee(), m = class re extends n.Message {
      constructor(u) {
        super(), this.seconds = t.protoInt64.zero, this.nanos = 0, r.proto3.util.initPartial(u, this);
      }
      fromJson(u, s) {
        if (typeof u != "string")
          throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${r.proto3.json.debug(u)}`);
        const o = u.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!o)
          throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        const a = Date.parse(o[1] + "-" + o[2] + "-" + o[3] + "T" + o[4] + ":" + o[5] + ":" + o[6] + (o[8] ? o[8] : "Z"));
        if (Number.isNaN(a))
          throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
        if (a < Date.parse("0001-01-01T00:00:00Z") || a > Date.parse("9999-12-31T23:59:59Z"))
          throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        return this.seconds = t.protoInt64.parse(a / 1e3), this.nanos = 0, o[7] && (this.nanos = parseInt("1" + o[7] + "0".repeat(9 - o[7].length)) - 1e9), this;
      }
      toJson(u) {
        const s = Number(this.seconds) * 1e3;
        if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z"))
          throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
        if (this.nanos < 0)
          throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
        let o = "Z";
        if (this.nanos > 0) {
          const a = (this.nanos + 1e9).toString().substring(1);
          a.substring(3) === "000000" ? o = "." + a.substring(0, 3) + "Z" : a.substring(6) === "000" ? o = "." + a.substring(0, 6) + "Z" : o = "." + a + "Z";
        }
        return new Date(s).toISOString().replace(".000Z", o);
      }
      toDate() {
        return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
      }
      static now() {
        return re.fromDate(/* @__PURE__ */ new Date());
      }
      static fromDate(u) {
        const s = u.getTime();
        return new re({
          seconds: t.protoInt64.parse(Math.floor(s / 1e3)),
          nanos: s % 1e3 * 1e6
        });
      }
      static fromBinary(u, s) {
        return new re().fromBinary(u, s);
      }
      static fromJson(u, s) {
        return new re().fromJson(u, s);
      }
      static fromJsonString(u, s) {
        return new re().fromJsonString(u, s);
      }
      static equals(u, s) {
        return r.proto3.util.equals(re, u, s);
      }
    };
    e.Timestamp = m, m.runtime = r.proto3, m.typeName = "google.protobuf.Timestamp", m.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "seconds",
        kind: "scalar",
        T: 3
        /* ScalarType.INT64 */
      },
      {
        no: 2,
        name: "nanos",
        kind: "scalar",
        T: 5
        /* ScalarType.INT32 */
      }
    ]);
  }
}), go = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/duration_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Duration = void 0;
    var n = x(), t = ne(), r = ee(), m = class We extends n.Message {
      constructor(u) {
        super(), this.seconds = t.protoInt64.zero, this.nanos = 0, r.proto3.util.initPartial(u, this);
      }
      fromJson(u, s) {
        if (typeof u != "string")
          throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r.proto3.json.debug(u)}`);
        const o = u.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
        if (o === null)
          throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r.proto3.json.debug(u)}`);
        const a = Number(o[1]);
        if (a > 315576e6 || a < -315576e6)
          throw new Error(`cannot decode google.protobuf.Duration from JSON: ${r.proto3.json.debug(u)}`);
        if (this.seconds = t.protoInt64.parse(a), typeof o[2] == "string") {
          const c = o[2] + "0".repeat(9 - o[2].length);
          this.nanos = parseInt(c), (a < 0 || Object.is(a, -0)) && (this.nanos = -this.nanos);
        }
        return this;
      }
      toJson(u) {
        if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
          throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
        let s = this.seconds.toString();
        if (this.nanos !== 0) {
          let o = Math.abs(this.nanos).toString();
          o = "0".repeat(9 - o.length) + o, o.substring(3) === "000000" ? o = o.substring(0, 3) : o.substring(6) === "000" && (o = o.substring(0, 6)), s += "." + o, this.nanos < 0 && Number(this.seconds) == 0 && (s = "-" + s);
        }
        return s + "s";
      }
      static fromBinary(u, s) {
        return new We().fromBinary(u, s);
      }
      static fromJson(u, s) {
        return new We().fromJson(u, s);
      }
      static fromJsonString(u, s) {
        return new We().fromJsonString(u, s);
      }
      static equals(u, s) {
        return r.proto3.util.equals(We, u, s);
      }
    };
    e.Duration = m, m.runtime = r.proto3, m.typeName = "google.protobuf.Duration", m.fields = r.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "seconds",
        kind: "scalar",
        T: 3
        /* ScalarType.INT64 */
      },
      {
        no: 2,
        name: "nanos",
        kind: "scalar",
        T: 5
        /* ScalarType.INT32 */
      }
    ]);
  }
}), xn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/any_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Any = void 0;
    var n = x(), t = ee(), r = class ie extends n.Message {
      constructor(i) {
        super(), this.typeUrl = "", this.value = new Uint8Array(0), t.proto3.util.initPartial(i, this);
      }
      toJson(i) {
        var u;
        if (this.typeUrl === "")
          return {};
        const s = this.typeUrlToName(this.typeUrl), o = (u = i?.typeRegistry) === null || u === void 0 ? void 0 : u.findMessage(s);
        if (!o)
          throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
        let c = o.fromBinary(this.value).toJson(i);
        return (s.startsWith("google.protobuf.") || c === null || Array.isArray(c) || typeof c != "object") && (c = { value: c }), c["@type"] = this.typeUrl, c;
      }
      fromJson(i, u) {
        var s;
        if (i === null || Array.isArray(i) || typeof i != "object")
          throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${i === null ? "null" : Array.isArray(i) ? "array" : typeof i}`);
        if (Object.keys(i).length == 0)
          return this;
        const o = i["@type"];
        if (typeof o != "string" || o == "")
          throw new Error('cannot decode message google.protobuf.Any from JSON: "@type" is empty');
        const a = this.typeUrlToName(o), c = (s = u?.typeRegistry) === null || s === void 0 ? void 0 : s.findMessage(a);
        if (!c)
          throw new Error(`cannot decode message google.protobuf.Any from JSON: ${o} is not in the type registry`);
        let l;
        if (a.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(i, "value"))
          l = c.fromJson(i.value, u);
        else {
          const y = Object.assign({}, i);
          delete y["@type"], l = c.fromJson(y, u);
        }
        return this.packFrom(l), this;
      }
      packFrom(i) {
        this.value = i.toBinary(), this.typeUrl = this.typeNameToUrl(i.getType().typeName);
      }
      unpackTo(i) {
        return this.is(i.getType()) ? (i.fromBinary(this.value), !0) : !1;
      }
      unpack(i) {
        if (this.typeUrl === "")
          return;
        const u = i.findMessage(this.typeUrlToName(this.typeUrl));
        if (u)
          return u.fromBinary(this.value);
      }
      is(i) {
        if (this.typeUrl === "")
          return !1;
        const u = this.typeUrlToName(this.typeUrl);
        let s = "";
        return typeof i == "string" ? s = i : s = i.typeName, u === s;
      }
      typeNameToUrl(i) {
        return `type.googleapis.com/${i}`;
      }
      typeUrlToName(i) {
        if (!i.length)
          throw new Error(`invalid type url: ${i}`);
        const u = i.lastIndexOf("/"), s = u >= 0 ? i.substring(u + 1) : i;
        if (!s.length)
          throw new Error(`invalid type url: ${i}`);
        return s;
      }
      static pack(i) {
        const u = new ie();
        return u.packFrom(i), u;
      }
      static fromBinary(i, u) {
        return new ie().fromBinary(i, u);
      }
      static fromJson(i, u) {
        return new ie().fromJson(i, u);
      }
      static fromJsonString(i, u) {
        return new ie().fromJsonString(i, u);
      }
      static equals(i, u) {
        return t.proto3.util.equals(ie, i, u);
      }
    };
    e.Any = r, r.runtime = t.proto3, r.typeName = "google.protobuf.Any", r.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "type_url",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 2,
        name: "value",
        kind: "scalar",
        T: 12
        /* ScalarType.BYTES */
      }
    ]);
  }
}), _o = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/empty_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Empty = void 0;
    var n = x(), t = ee(), r = class Xe extends n.Message {
      constructor(i) {
        super(), t.proto3.util.initPartial(i, this);
      }
      static fromBinary(i, u) {
        return new Xe().fromBinary(i, u);
      }
      static fromJson(i, u) {
        return new Xe().fromJson(i, u);
      }
      static fromJsonString(i, u) {
        return new Xe().fromJsonString(i, u);
      }
      static equals(i, u) {
        return t.proto3.util.equals(Xe, i, u);
      }
    };
    e.Empty = r, r.runtime = t.proto3, r.typeName = "google.protobuf.Empty", r.fields = t.proto3.util.newFieldList(() => []);
  }
}), To = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/field_mask_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.FieldMask = void 0;
    var n = x(), t = ee(), r = class Ke extends n.Message {
      constructor(i) {
        super(), this.paths = [], t.proto3.util.initPartial(i, this);
      }
      toJson(i) {
        function u(s) {
          let o = !1;
          const a = [];
          for (let c = 0; c < s.length; c++) {
            let l = s.charAt(c);
            switch (l) {
              case "_":
                o = !0;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                a.push(l), o = !1;
                break;
              default:
                o && (o = !1, l = l.toUpperCase()), a.push(l);
                break;
            }
          }
          return a.join("");
        }
        return this.paths.map((s) => {
          if (s.match(/_[0-9]?_/g) || s.match(/[A-Z]/g))
            throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + s + '" is irreversible');
          return u(s);
        }).join(",");
      }
      fromJson(i, u) {
        if (typeof i != "string")
          throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + t.proto3.json.debug(i));
        if (i === "")
          return this;
        function s(o) {
          if (o.includes("_"))
            throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
          const a = o.replace(/[A-Z]/g, (c) => "_" + c.toLowerCase());
          return a[0] === "_" ? a.substring(1) : a;
        }
        return this.paths = i.split(",").map(s), this;
      }
      static fromBinary(i, u) {
        return new Ke().fromBinary(i, u);
      }
      static fromJson(i, u) {
        return new Ke().fromJson(i, u);
      }
      static fromJsonString(i, u) {
        return new Ke().fromJsonString(i, u);
      }
      static equals(i, u) {
        return t.proto3.util.equals(Ke, i, u);
      }
    };
    e.FieldMask = r, r.runtime = t.proto3, r.typeName = "google.protobuf.FieldMask", r.fields = t.proto3.util.newFieldList(() => [
      { no: 1, name: "paths", kind: "scalar", T: 9, repeated: !0 }
    ]);
  }
}), yo = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/struct_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ListValue = e.Value = e.Struct = e.NullValue = void 0;
    var n = ee(), t = x(), r;
    (function(s) {
      s[s.NULL_VALUE = 0] = "NULL_VALUE";
    })(r || (e.NullValue = r = {})), n.proto3.util.setEnumType(r, "google.protobuf.NullValue", [
      { no: 0, name: "NULL_VALUE" }
    ]);
    var m = class He extends t.Message {
      constructor(o) {
        super(), this.fields = {}, n.proto3.util.initPartial(o, this);
      }
      toJson(o) {
        const a = {};
        for (const [c, l] of Object.entries(this.fields))
          a[c] = l.toJson(o);
        return a;
      }
      fromJson(o, a) {
        if (typeof o != "object" || o == null || Array.isArray(o))
          throw new Error("cannot decode google.protobuf.Struct from JSON " + n.proto3.json.debug(o));
        for (const [c, l] of Object.entries(o))
          this.fields[c] = i.fromJson(l);
        return this;
      }
      static fromBinary(o, a) {
        return new He().fromBinary(o, a);
      }
      static fromJson(o, a) {
        return new He().fromJson(o, a);
      }
      static fromJsonString(o, a) {
        return new He().fromJsonString(o, a);
      }
      static equals(o, a) {
        return n.proto3.util.equals(He, o, a);
      }
    };
    e.Struct = m, m.runtime = n.proto3, m.typeName = "google.protobuf.Struct", m.fields = n.proto3.util.newFieldList(() => [
      { no: 1, name: "fields", kind: "map", K: 9, V: { kind: "message", T: i } }
    ]);
    var i = class ze extends t.Message {
      constructor(o) {
        super(), this.kind = { case: void 0 }, n.proto3.util.initPartial(o, this);
      }
      toJson(o) {
        switch (this.kind.case) {
          case "nullValue":
            return null;
          case "numberValue":
            if (!Number.isFinite(this.kind.value))
              throw new Error("google.protobuf.Value cannot be NaN or Infinity");
            return this.kind.value;
          case "boolValue":
            return this.kind.value;
          case "stringValue":
            return this.kind.value;
          case "structValue":
          case "listValue":
            return this.kind.value.toJson(Object.assign(Object.assign({}, o), { emitDefaultValues: !0 }));
        }
        throw new Error("google.protobuf.Value must have a value");
      }
      fromJson(o, a) {
        switch (typeof o) {
          case "number":
            this.kind = { case: "numberValue", value: o };
            break;
          case "string":
            this.kind = { case: "stringValue", value: o };
            break;
          case "boolean":
            this.kind = { case: "boolValue", value: o };
            break;
          case "object":
            o === null ? this.kind = { case: "nullValue", value: r.NULL_VALUE } : Array.isArray(o) ? this.kind = { case: "listValue", value: u.fromJson(o) } : this.kind = { case: "structValue", value: m.fromJson(o) };
            break;
          default:
            throw new Error("cannot decode google.protobuf.Value from JSON " + n.proto3.json.debug(o));
        }
        return this;
      }
      static fromBinary(o, a) {
        return new ze().fromBinary(o, a);
      }
      static fromJson(o, a) {
        return new ze().fromJson(o, a);
      }
      static fromJsonString(o, a) {
        return new ze().fromJsonString(o, a);
      }
      static equals(o, a) {
        return n.proto3.util.equals(ze, o, a);
      }
    };
    e.Value = i, i.runtime = n.proto3, i.typeName = "google.protobuf.Value", i.fields = n.proto3.util.newFieldList(() => [
      { no: 1, name: "null_value", kind: "enum", T: n.proto3.getEnumType(r), oneof: "kind" },
      { no: 2, name: "number_value", kind: "scalar", T: 1, oneof: "kind" },
      { no: 3, name: "string_value", kind: "scalar", T: 9, oneof: "kind" },
      { no: 4, name: "bool_value", kind: "scalar", T: 8, oneof: "kind" },
      { no: 5, name: "struct_value", kind: "message", T: m, oneof: "kind" },
      { no: 6, name: "list_value", kind: "message", T: u, oneof: "kind" }
    ]);
    var u = class xe extends t.Message {
      constructor(o) {
        super(), this.values = [], n.proto3.util.initPartial(o, this);
      }
      toJson(o) {
        return this.values.map((a) => a.toJson());
      }
      fromJson(o, a) {
        if (!Array.isArray(o))
          throw new Error("cannot decode google.protobuf.ListValue from JSON " + n.proto3.json.debug(o));
        for (let c of o)
          this.values.push(i.fromJson(c));
        return this;
      }
      static fromBinary(o, a) {
        return new xe().fromBinary(o, a);
      }
      static fromJson(o, a) {
        return new xe().fromJson(o, a);
      }
      static fromJsonString(o, a) {
        return new xe().fromJsonString(o, a);
      }
      static equals(o, a) {
        return n.proto3.util.equals(xe, o, a);
      }
    };
    e.ListValue = u, u.runtime = n.proto3, u.typeName = "google.protobuf.ListValue", u.fields = n.proto3.util.newFieldList(() => [
      { no: 1, name: "values", kind: "message", T: i, repeated: !0 }
    ]);
  }
}), ho = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/wrappers_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BytesValue = e.StringValue = e.BoolValue = e.UInt32Value = e.Int32Value = e.UInt64Value = e.Int64Value = e.FloatValue = e.DoubleValue = void 0;
    var n = x(), t = ee(), r = Q(), m = ne(), i = class Qe extends n.Message {
      constructor(g) {
        super(), this.value = 0, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.DOUBLE, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.DOUBLE, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.DoubleValue from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new Qe().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new Qe().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new Qe().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(Qe, g, h);
      }
    };
    e.DoubleValue = i, i.runtime = t.proto3, i.typeName = "google.protobuf.DoubleValue", i.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 1
        /* ScalarType.DOUBLE */
      }
    ]), i.fieldWrapper = {
      wrapField(f) {
        return new i({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var u = class Ze extends n.Message {
      constructor(g) {
        super(), this.value = 0, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.FLOAT, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.FLOAT, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.FloatValue from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new Ze().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new Ze().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new Ze().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(Ze, g, h);
      }
    };
    e.FloatValue = u, u.runtime = t.proto3, u.typeName = "google.protobuf.FloatValue", u.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 2
        /* ScalarType.FLOAT */
      }
    ]), u.fieldWrapper = {
      wrapField(f) {
        return new u({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var s = class en extends n.Message {
      constructor(g) {
        super(), this.value = m.protoInt64.zero, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.INT64, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.INT64, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.Int64Value from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new en().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new en().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new en().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(en, g, h);
      }
    };
    e.Int64Value = s, s.runtime = t.proto3, s.typeName = "google.protobuf.Int64Value", s.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 3
        /* ScalarType.INT64 */
      }
    ]), s.fieldWrapper = {
      wrapField(f) {
        return new s({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var o = class nn extends n.Message {
      constructor(g) {
        super(), this.value = m.protoInt64.zero, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.UINT64, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.UINT64, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.UInt64Value from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new nn().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new nn().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new nn().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(nn, g, h);
      }
    };
    e.UInt64Value = o, o.runtime = t.proto3, o.typeName = "google.protobuf.UInt64Value", o.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 4
        /* ScalarType.UINT64 */
      }
    ]), o.fieldWrapper = {
      wrapField(f) {
        return new o({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var a = class tn extends n.Message {
      constructor(g) {
        super(), this.value = 0, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.INT32, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.INT32, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.Int32Value from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new tn().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new tn().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new tn().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(tn, g, h);
      }
    };
    e.Int32Value = a, a.runtime = t.proto3, a.typeName = "google.protobuf.Int32Value", a.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 5
        /* ScalarType.INT32 */
      }
    ]), a.fieldWrapper = {
      wrapField(f) {
        return new a({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var c = class on extends n.Message {
      constructor(g) {
        super(), this.value = 0, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.UINT32, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.UINT32, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.UInt32Value from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new on().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new on().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new on().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(on, g, h);
      }
    };
    e.UInt32Value = c, c.runtime = t.proto3, c.typeName = "google.protobuf.UInt32Value", c.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 13
        /* ScalarType.UINT32 */
      }
    ]), c.fieldWrapper = {
      wrapField(f) {
        return new c({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var l = class rn extends n.Message {
      constructor(g) {
        super(), this.value = !1, t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.BOOL, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.BOOL, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.BoolValue from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new rn().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new rn().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new rn().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(rn, g, h);
      }
    };
    e.BoolValue = l, l.runtime = t.proto3, l.typeName = "google.protobuf.BoolValue", l.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 8
        /* ScalarType.BOOL */
      }
    ]), l.fieldWrapper = {
      wrapField(f) {
        return new l({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var y = class an extends n.Message {
      constructor(g) {
        super(), this.value = "", t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.STRING, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.STRING, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.StringValue from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new an().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new an().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new an().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(an, g, h);
      }
    };
    e.StringValue = y, y.runtime = t.proto3, y.typeName = "google.protobuf.StringValue", y.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]), y.fieldWrapper = {
      wrapField(f) {
        return new y({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
    var d = class sn extends n.Message {
      constructor(g) {
        super(), this.value = new Uint8Array(0), t.proto3.util.initPartial(g, this);
      }
      toJson(g) {
        return t.proto3.json.writeScalar(r.ScalarType.BYTES, this.value, !0);
      }
      fromJson(g, h) {
        try {
          this.value = t.proto3.json.readScalar(r.ScalarType.BYTES, g);
        } catch (w) {
          let k = 'cannot decode message google.protobuf.BytesValue from JSON"';
          throw w instanceof Error && w.message.length > 0 && (k += `: ${w.message}`), new Error(k);
        }
        return this;
      }
      static fromBinary(g, h) {
        return new sn().fromBinary(g, h);
      }
      static fromJson(g, h) {
        return new sn().fromJson(g, h);
      }
      static fromJsonString(g, h) {
        return new sn().fromJsonString(g, h);
      }
      static equals(g, h) {
        return t.proto3.util.equals(sn, g, h);
      }
    };
    e.BytesValue = d, d.runtime = t.proto3, d.typeName = "google.protobuf.BytesValue", d.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "value",
        kind: "scalar",
        T: 12
        /* ScalarType.BYTES */
      }
    ]), d.fieldWrapper = {
      wrapField(f) {
        return new d({ value: f });
      },
      unwrapField(f) {
        return f.value;
      }
    };
  }
}), ya = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/create-registry-from-desc.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createRegistryFromDescriptors = void 0;
    var n = Z(), t = ee(), r = Bn(), m = Q(), i = le(), u = po(), s = go(), o = xn(), a = _o(), c = To(), l = yo(), y = Xn(), d = ho(), f = Sn(), g = fo(), h = [
      o.Any,
      s.Duration,
      a.Empty,
      c.FieldMask,
      l.Struct,
      l.Value,
      l.ListValue,
      u.Timestamp,
      s.Duration,
      d.DoubleValue,
      d.FloatValue,
      d.Int64Value,
      d.Int32Value,
      d.UInt32Value,
      d.UInt64Value,
      d.BoolValue,
      d.StringValue,
      d.BytesValue
    ], w = [(0, y.getEnumType)(l.NullValue)];
    function k(N, j = !0) {
      const R = N instanceof Uint8Array || N instanceof f.FileDescriptorSet ? (0, g.createDescriptorSet)(N) : N, L = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), X = {};
      if (j) {
        for (const T of h)
          B.set(T.typeName, T);
        for (const T of w)
          L.set(T.typeName, T);
      }
      return {
        /**
         * May raise an error on invalid descriptors.
         */
        findEnum(T) {
          const P = L.get(T);
          if (P)
            return P;
          const I = R.enums.get(T);
          if (!I)
            return;
          const M = (I.file.syntax == "proto3" ? t.proto3 : r.proto2).makeEnumType(T, I.values.map((U) => ({
            no: U.number,
            name: U.name,
            localName: (0, i.localName)(U)
          })), {});
          return L.set(T, M), M;
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findMessage(T) {
          const P = B.get(T);
          if (P)
            return P;
          const I = R.messages.get(T);
          if (!I)
            return;
          const A = I.file.syntax == "proto3" ? t.proto3 : r.proto2, M = [], U = A.makeMessageType(T, () => M, {
            localName: (0, i.localName)(I)
          });
          B.set(T, U);
          for (const F of I.fields) {
            const V = O(F, this);
            M.push(V);
          }
          return U;
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findService(T) {
          const P = X[T];
          if (P)
            return P;
          const I = R.services.get(T);
          if (!I)
            return;
          const A = {};
          for (const M of I.methods) {
            const U = this.findMessage(M.input.typeName), F = this.findMessage(M.output.typeName);
            (0, n.assert)(U, `message "${M.input.typeName}" for ${M.toString()} not found`), (0, n.assert)(F, `output message "${M.output.typeName}" for ${M.toString()} not found`), A[(0, i.localName)(M)] = {
              name: M.name,
              I: U,
              O: F,
              kind: M.methodKind,
              idempotency: M.idempotency
              // We do not surface options at this time
              // options: {},
            };
          }
          return X[T] = {
            typeName: I.typeName,
            methods: A
          };
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findExtensionFor(T, P) {
          var I;
          if (!R.messages.has(T))
            return;
          let A = Y.get(T);
          if (!A) {
            A = /* @__PURE__ */ new Map(), Y.set(T, A);
            for (const U of R.extensions.values())
              U.extendee.typeName == T && A.set(U.number, U);
          }
          const M = (I = Y.get(T)) === null || I === void 0 ? void 0 : I.get(P);
          return M ? this.findExtension(M.typeName) : void 0;
        },
        /**
         * May raise an error on invalid descriptors.
         */
        findExtension(T) {
          const P = J.get(T);
          if (P)
            return P;
          const I = R.extensions.get(T);
          if (!I)
            return;
          const A = this.findMessage(I.extendee.typeName);
          (0, n.assert)(A, `message "${I.extendee.typeName}" for ${I.toString()} not found`);
          const U = (I.file.syntax == "proto3" ? t.proto3 : r.proto2).makeExtension(T, A, O(I, this));
          return J.set(T, U), U;
        }
      };
    }
    e.createRegistryFromDescriptors = k;
    function O(N, j) {
      switch (N.fieldKind) {
        case "map":
          return (0, n.assert)(N.kind == "field"), b(N, j);
        case "message":
          return S(N, j);
        case "enum": {
          const R = C(N, j);
          return R.default = N.getDefaultValue(), R;
        }
        case "scalar": {
          const R = D(N);
          return R.default = N.getDefaultValue(), R;
        }
      }
    }
    function b(N, j) {
      const R = {
        kind: "map",
        no: N.number,
        name: N.name,
        jsonName: N.jsonName,
        K: N.mapKey
      };
      if (N.mapValue.message) {
        const L = j.findMessage(N.mapValue.message.typeName);
        return (0, n.assert)(L, `message "${N.mapValue.message.typeName}" for ${N.toString()} not found`), Object.assign(Object.assign({}, R), { V: {
          kind: "message",
          T: L
        } });
      }
      if (N.mapValue.enum) {
        const L = j.findEnum(N.mapValue.enum.typeName);
        return (0, n.assert)(L, `enum "${N.mapValue.enum.typeName}" for ${N.toString()} not found`), Object.assign(Object.assign({}, R), { V: {
          kind: "enum",
          T: L
        } });
      }
      return Object.assign(Object.assign({}, R), { V: {
        kind: "scalar",
        T: N.mapValue.scalar
      } });
    }
    function D(N) {
      const j = N.longType == m.LongType.STRING ? { L: m.LongType.STRING } : {}, R = Object.assign({ kind: "scalar", no: N.number, name: N.name, jsonName: N.jsonName, T: N.scalar }, j);
      return N.repeated ? Object.assign(Object.assign({}, R), { repeated: !0, packed: N.packed, oneof: void 0, T: N.scalar }) : N.oneof ? Object.assign(Object.assign({}, R), { oneof: N.oneof.name }) : N.optional ? Object.assign(Object.assign({}, R), { opt: !0 }) : R;
    }
    function S(N, j) {
      const R = j.findMessage(N.message.typeName);
      (0, n.assert)(R, `message "${N.message.typeName}" for ${N.toString()} not found`);
      const L = {
        kind: "message",
        no: N.number,
        name: N.name,
        jsonName: N.jsonName,
        T: R,
        delimited: N.proto.type == f.FieldDescriptorProto_Type.GROUP
      };
      return N.repeated ? Object.assign(Object.assign({}, L), { repeated: !0, packed: N.packed, oneof: void 0 }) : N.oneof ? Object.assign(Object.assign({}, L), { oneof: N.oneof.name }) : N.optional ? Object.assign(Object.assign({}, L), { opt: !0 }) : L;
    }
    function C(N, j) {
      const R = j.findEnum(N.enum.typeName);
      (0, n.assert)(R, `enum "${N.enum.typeName}" for ${N.toString()} not found`);
      const L = {
        kind: "enum",
        no: N.number,
        name: N.name,
        jsonName: N.jsonName,
        T: R
      };
      return N.repeated ? Object.assign(Object.assign({}, L), { repeated: !0, packed: N.packed, oneof: void 0 }) : N.oneof ? Object.assign(Object.assign({}, L), { oneof: N.oneof.name }) : N.optional ? Object.assign(Object.assign({}, L), { opt: !0 }) : L;
    }
  }
}), ha = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/to-plain-message.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toPlainMessage = void 0;
    var n = x();
    function t(m) {
      if (!(m instanceof n.Message))
        return m;
      const i = m.getType(), u = {};
      for (const s of i.fields.byMember()) {
        const o = m[s.localName];
        let a;
        if (s.repeated)
          a = o.map((c) => r(c));
        else if (s.kind == "map") {
          a = {};
          for (const [c, l] of Object.entries(o))
            a[c] = r(l);
        } else s.kind == "oneof" ? a = s.findField(o.case) ? { case: o.case, value: r(o.value) } : { case: void 0 } : a = r(o);
        u[s.localName] = a;
      }
      return u;
    }
    e.toPlainMessage = t;
    function r(m) {
      if (m === void 0)
        return m;
      if (m instanceof n.Message)
        return t(m);
      if (m instanceof Uint8Array) {
        const i = new Uint8Array(m.byteLength);
        return i.set(m), i;
      }
      return m;
    }
  }
}), ba = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/compiler/plugin_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGeneratorResponse_File = e.CodeGeneratorResponse_Feature = e.CodeGeneratorResponse = e.CodeGeneratorRequest = e.Version = void 0;
    var n = x(), t = Bn(), r = Sn(), m = class un extends n.Message {
      constructor(c) {
        super(), t.proto2.util.initPartial(c, this);
      }
      static fromBinary(c, l) {
        return new un().fromBinary(c, l);
      }
      static fromJson(c, l) {
        return new un().fromJson(c, l);
      }
      static fromJsonString(c, l) {
        return new un().fromJsonString(c, l);
      }
      static equals(c, l) {
        return t.proto2.util.equals(un, c, l);
      }
    };
    e.Version = m, m.runtime = t.proto2, m.typeName = "google.protobuf.compiler.Version", m.fields = t.proto2.util.newFieldList(() => [
      { no: 1, name: "major", kind: "scalar", T: 5, opt: !0 },
      { no: 2, name: "minor", kind: "scalar", T: 5, opt: !0 },
      { no: 3, name: "patch", kind: "scalar", T: 5, opt: !0 },
      { no: 4, name: "suffix", kind: "scalar", T: 9, opt: !0 }
    ]);
    var i = class ln extends n.Message {
      constructor(c) {
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], t.proto2.util.initPartial(c, this);
      }
      static fromBinary(c, l) {
        return new ln().fromBinary(c, l);
      }
      static fromJson(c, l) {
        return new ln().fromJson(c, l);
      }
      static fromJsonString(c, l) {
        return new ln().fromJsonString(c, l);
      }
      static equals(c, l) {
        return t.proto2.util.equals(ln, c, l);
      }
    };
    e.CodeGeneratorRequest = i, i.runtime = t.proto2, i.typeName = "google.protobuf.compiler.CodeGeneratorRequest", i.fields = t.proto2.util.newFieldList(() => [
      { no: 1, name: "file_to_generate", kind: "scalar", T: 9, repeated: !0 },
      { no: 2, name: "parameter", kind: "scalar", T: 9, opt: !0 },
      { no: 15, name: "proto_file", kind: "message", T: r.FileDescriptorProto, repeated: !0 },
      { no: 17, name: "source_file_descriptors", kind: "message", T: r.FileDescriptorProto, repeated: !0 },
      { no: 3, name: "compiler_version", kind: "message", T: m, opt: !0 }
    ]);
    var u = class cn extends n.Message {
      constructor(c) {
        super(), this.file = [], t.proto2.util.initPartial(c, this);
      }
      static fromBinary(c, l) {
        return new cn().fromBinary(c, l);
      }
      static fromJson(c, l) {
        return new cn().fromJson(c, l);
      }
      static fromJsonString(c, l) {
        return new cn().fromJsonString(c, l);
      }
      static equals(c, l) {
        return t.proto2.util.equals(cn, c, l);
      }
    };
    e.CodeGeneratorResponse = u, u.runtime = t.proto2, u.typeName = "google.protobuf.compiler.CodeGeneratorResponse", u.fields = t.proto2.util.newFieldList(() => [
      { no: 1, name: "error", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "supported_features", kind: "scalar", T: 4, opt: !0 },
      { no: 15, name: "file", kind: "message", T: o, repeated: !0 }
    ]);
    var s;
    (function(a) {
      a[a.NONE = 0] = "NONE", a[a.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", a[a.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS";
    })(s || (e.CodeGeneratorResponse_Feature = s = {})), t.proto2.util.setEnumType(s, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
      { no: 0, name: "FEATURE_NONE" },
      { no: 1, name: "FEATURE_PROTO3_OPTIONAL" },
      { no: 2, name: "FEATURE_SUPPORTS_EDITIONS" }
    ]);
    var o = class mn extends n.Message {
      constructor(c) {
        super(), t.proto2.util.initPartial(c, this);
      }
      static fromBinary(c, l) {
        return new mn().fromBinary(c, l);
      }
      static fromJson(c, l) {
        return new mn().fromJson(c, l);
      }
      static fromJsonString(c, l) {
        return new mn().fromJsonString(c, l);
      }
      static equals(c, l) {
        return t.proto2.util.equals(mn, c, l);
      }
    };
    e.CodeGeneratorResponse_File = o, o.runtime = t.proto2, o.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", o.fields = t.proto2.util.newFieldList(() => [
      { no: 1, name: "name", kind: "scalar", T: 9, opt: !0 },
      { no: 2, name: "insertion_point", kind: "scalar", T: 9, opt: !0 },
      { no: 15, name: "content", kind: "scalar", T: 9, opt: !0 },
      { no: 16, name: "generated_code_info", kind: "message", T: r.GeneratedCodeInfo, opt: !0 }
    ]);
  }
}), Qn = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/source_context_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SourceContext = void 0;
    var n = x(), t = ee(), r = class dn extends n.Message {
      constructor(i) {
        super(), this.fileName = "", t.proto3.util.initPartial(i, this);
      }
      static fromBinary(i, u) {
        return new dn().fromBinary(i, u);
      }
      static fromJson(i, u) {
        return new dn().fromJson(i, u);
      }
      static fromJsonString(i, u) {
        return new dn().fromJsonString(i, u);
      }
      static equals(i, u) {
        return t.proto3.util.equals(dn, i, u);
      }
    };
    e.SourceContext = r, r.runtime = t.proto3, r.typeName = "google.protobuf.SourceContext", r.fields = t.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "file_name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]);
  }
}), bo = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/type_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Option = e.EnumValue = e.Enum = e.Field_Cardinality = e.Field_Kind = e.Field = e.Type = e.Syntax = void 0;
    var n = ee(), t = x(), r = Qn(), m = xn(), i;
    (function(d) {
      d[d.PROTO2 = 0] = "PROTO2", d[d.PROTO3 = 1] = "PROTO3", d[d.EDITIONS = 2] = "EDITIONS";
    })(i || (e.Syntax = i = {})), n.proto3.util.setEnumType(i, "google.protobuf.Syntax", [
      { no: 0, name: "SYNTAX_PROTO2" },
      { no: 1, name: "SYNTAX_PROTO3" },
      { no: 2, name: "SYNTAX_EDITIONS" }
    ]);
    var u = class fn extends t.Message {
      constructor(f) {
        super(), this.name = "", this.fields = [], this.oneofs = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", n.proto3.util.initPartial(f, this);
      }
      static fromBinary(f, g) {
        return new fn().fromBinary(f, g);
      }
      static fromJson(f, g) {
        return new fn().fromJson(f, g);
      }
      static fromJsonString(f, g) {
        return new fn().fromJsonString(f, g);
      }
      static equals(f, g) {
        return n.proto3.util.equals(fn, f, g);
      }
    };
    e.Type = u, u.runtime = n.proto3, u.typeName = "google.protobuf.Type", u.fields = n.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      { no: 2, name: "fields", kind: "message", T: s, repeated: !0 },
      { no: 3, name: "oneofs", kind: "scalar", T: 9, repeated: !0 },
      { no: 4, name: "options", kind: "message", T: y, repeated: !0 },
      { no: 5, name: "source_context", kind: "message", T: r.SourceContext },
      { no: 6, name: "syntax", kind: "enum", T: n.proto3.getEnumType(i) },
      {
        no: 7,
        name: "edition",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]);
    var s = class pn extends t.Message {
      constructor(f) {
        super(), this.kind = o.TYPE_UNKNOWN, this.cardinality = a.UNKNOWN, this.number = 0, this.name = "", this.typeUrl = "", this.oneofIndex = 0, this.packed = !1, this.options = [], this.jsonName = "", this.defaultValue = "", n.proto3.util.initPartial(f, this);
      }
      static fromBinary(f, g) {
        return new pn().fromBinary(f, g);
      }
      static fromJson(f, g) {
        return new pn().fromJson(f, g);
      }
      static fromJsonString(f, g) {
        return new pn().fromJsonString(f, g);
      }
      static equals(f, g) {
        return n.proto3.util.equals(pn, f, g);
      }
    };
    e.Field = s, s.runtime = n.proto3, s.typeName = "google.protobuf.Field", s.fields = n.proto3.util.newFieldList(() => [
      { no: 1, name: "kind", kind: "enum", T: n.proto3.getEnumType(o) },
      { no: 2, name: "cardinality", kind: "enum", T: n.proto3.getEnumType(a) },
      {
        no: 3,
        name: "number",
        kind: "scalar",
        T: 5
        /* ScalarType.INT32 */
      },
      {
        no: 4,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 6,
        name: "type_url",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 7,
        name: "oneof_index",
        kind: "scalar",
        T: 5
        /* ScalarType.INT32 */
      },
      {
        no: 8,
        name: "packed",
        kind: "scalar",
        T: 8
        /* ScalarType.BOOL */
      },
      { no: 9, name: "options", kind: "message", T: y, repeated: !0 },
      {
        no: 10,
        name: "json_name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 11,
        name: "default_value",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]);
    var o;
    (function(d) {
      d[d.TYPE_UNKNOWN = 0] = "TYPE_UNKNOWN", d[d.TYPE_DOUBLE = 1] = "TYPE_DOUBLE", d[d.TYPE_FLOAT = 2] = "TYPE_FLOAT", d[d.TYPE_INT64 = 3] = "TYPE_INT64", d[d.TYPE_UINT64 = 4] = "TYPE_UINT64", d[d.TYPE_INT32 = 5] = "TYPE_INT32", d[d.TYPE_FIXED64 = 6] = "TYPE_FIXED64", d[d.TYPE_FIXED32 = 7] = "TYPE_FIXED32", d[d.TYPE_BOOL = 8] = "TYPE_BOOL", d[d.TYPE_STRING = 9] = "TYPE_STRING", d[d.TYPE_GROUP = 10] = "TYPE_GROUP", d[d.TYPE_MESSAGE = 11] = "TYPE_MESSAGE", d[d.TYPE_BYTES = 12] = "TYPE_BYTES", d[d.TYPE_UINT32 = 13] = "TYPE_UINT32", d[d.TYPE_ENUM = 14] = "TYPE_ENUM", d[d.TYPE_SFIXED32 = 15] = "TYPE_SFIXED32", d[d.TYPE_SFIXED64 = 16] = "TYPE_SFIXED64", d[d.TYPE_SINT32 = 17] = "TYPE_SINT32", d[d.TYPE_SINT64 = 18] = "TYPE_SINT64";
    })(o || (e.Field_Kind = o = {})), n.proto3.util.setEnumType(o, "google.protobuf.Field.Kind", [
      { no: 0, name: "TYPE_UNKNOWN" },
      { no: 1, name: "TYPE_DOUBLE" },
      { no: 2, name: "TYPE_FLOAT" },
      { no: 3, name: "TYPE_INT64" },
      { no: 4, name: "TYPE_UINT64" },
      { no: 5, name: "TYPE_INT32" },
      { no: 6, name: "TYPE_FIXED64" },
      { no: 7, name: "TYPE_FIXED32" },
      { no: 8, name: "TYPE_BOOL" },
      { no: 9, name: "TYPE_STRING" },
      { no: 10, name: "TYPE_GROUP" },
      { no: 11, name: "TYPE_MESSAGE" },
      { no: 12, name: "TYPE_BYTES" },
      { no: 13, name: "TYPE_UINT32" },
      { no: 14, name: "TYPE_ENUM" },
      { no: 15, name: "TYPE_SFIXED32" },
      { no: 16, name: "TYPE_SFIXED64" },
      { no: 17, name: "TYPE_SINT32" },
      { no: 18, name: "TYPE_SINT64" }
    ]);
    var a;
    (function(d) {
      d[d.UNKNOWN = 0] = "UNKNOWN", d[d.OPTIONAL = 1] = "OPTIONAL", d[d.REQUIRED = 2] = "REQUIRED", d[d.REPEATED = 3] = "REPEATED";
    })(a || (e.Field_Cardinality = a = {})), n.proto3.util.setEnumType(a, "google.protobuf.Field.Cardinality", [
      { no: 0, name: "CARDINALITY_UNKNOWN" },
      { no: 1, name: "CARDINALITY_OPTIONAL" },
      { no: 2, name: "CARDINALITY_REQUIRED" },
      { no: 3, name: "CARDINALITY_REPEATED" }
    ]);
    var c = class gn extends t.Message {
      constructor(f) {
        super(), this.name = "", this.enumvalue = [], this.options = [], this.syntax = i.PROTO2, this.edition = "", n.proto3.util.initPartial(f, this);
      }
      static fromBinary(f, g) {
        return new gn().fromBinary(f, g);
      }
      static fromJson(f, g) {
        return new gn().fromJson(f, g);
      }
      static fromJsonString(f, g) {
        return new gn().fromJsonString(f, g);
      }
      static equals(f, g) {
        return n.proto3.util.equals(gn, f, g);
      }
    };
    e.Enum = c, c.runtime = n.proto3, c.typeName = "google.protobuf.Enum", c.fields = n.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      { no: 2, name: "enumvalue", kind: "message", T: l, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: y, repeated: !0 },
      { no: 4, name: "source_context", kind: "message", T: r.SourceContext },
      { no: 5, name: "syntax", kind: "enum", T: n.proto3.getEnumType(i) },
      {
        no: 6,
        name: "edition",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]);
    var l = class _n extends t.Message {
      constructor(f) {
        super(), this.name = "", this.number = 0, this.options = [], n.proto3.util.initPartial(f, this);
      }
      static fromBinary(f, g) {
        return new _n().fromBinary(f, g);
      }
      static fromJson(f, g) {
        return new _n().fromJson(f, g);
      }
      static fromJsonString(f, g) {
        return new _n().fromJsonString(f, g);
      }
      static equals(f, g) {
        return n.proto3.util.equals(_n, f, g);
      }
    };
    e.EnumValue = l, l.runtime = n.proto3, l.typeName = "google.protobuf.EnumValue", l.fields = n.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 2,
        name: "number",
        kind: "scalar",
        T: 5
        /* ScalarType.INT32 */
      },
      { no: 3, name: "options", kind: "message", T: y, repeated: !0 }
    ]);
    var y = class Tn extends t.Message {
      constructor(f) {
        super(), this.name = "", n.proto3.util.initPartial(f, this);
      }
      static fromBinary(f, g) {
        return new Tn().fromBinary(f, g);
      }
      static fromJson(f, g) {
        return new Tn().fromJson(f, g);
      }
      static fromJsonString(f, g) {
        return new Tn().fromJsonString(f, g);
      }
      static equals(f, g) {
        return n.proto3.util.equals(Tn, f, g);
      }
    };
    e.Option = y, y.runtime = n.proto3, y.typeName = "google.protobuf.Option", y.fields = n.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      { no: 2, name: "value", kind: "message", T: m.Any }
    ]);
  }
}), va = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/google/protobuf/api_pb.js"(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Mixin = e.Method = e.Api = void 0;
    var n = x(), t = bo(), r = Qn(), m = ee(), i = class yn extends n.Message {
      constructor(a) {
        super(), this.name = "", this.methods = [], this.options = [], this.version = "", this.mixins = [], this.syntax = t.Syntax.PROTO2, m.proto3.util.initPartial(a, this);
      }
      static fromBinary(a, c) {
        return new yn().fromBinary(a, c);
      }
      static fromJson(a, c) {
        return new yn().fromJson(a, c);
      }
      static fromJsonString(a, c) {
        return new yn().fromJsonString(a, c);
      }
      static equals(a, c) {
        return m.proto3.util.equals(yn, a, c);
      }
    };
    e.Api = i, i.runtime = m.proto3, i.typeName = "google.protobuf.Api", i.fields = m.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      { no: 2, name: "methods", kind: "message", T: u, repeated: !0 },
      { no: 3, name: "options", kind: "message", T: t.Option, repeated: !0 },
      {
        no: 4,
        name: "version",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      { no: 5, name: "source_context", kind: "message", T: r.SourceContext },
      { no: 6, name: "mixins", kind: "message", T: s, repeated: !0 },
      { no: 7, name: "syntax", kind: "enum", T: m.proto3.getEnumType(t.Syntax) }
    ]);
    var u = class hn extends n.Message {
      constructor(a) {
        super(), this.name = "", this.requestTypeUrl = "", this.requestStreaming = !1, this.responseTypeUrl = "", this.responseStreaming = !1, this.options = [], this.syntax = t.Syntax.PROTO2, m.proto3.util.initPartial(a, this);
      }
      static fromBinary(a, c) {
        return new hn().fromBinary(a, c);
      }
      static fromJson(a, c) {
        return new hn().fromJson(a, c);
      }
      static fromJsonString(a, c) {
        return new hn().fromJsonString(a, c);
      }
      static equals(a, c) {
        return m.proto3.util.equals(hn, a, c);
      }
    };
    e.Method = u, u.runtime = m.proto3, u.typeName = "google.protobuf.Method", u.fields = m.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 2,
        name: "request_type_url",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 3,
        name: "request_streaming",
        kind: "scalar",
        T: 8
        /* ScalarType.BOOL */
      },
      {
        no: 4,
        name: "response_type_url",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 5,
        name: "response_streaming",
        kind: "scalar",
        T: 8
        /* ScalarType.BOOL */
      },
      { no: 6, name: "options", kind: "message", T: t.Option, repeated: !0 },
      { no: 7, name: "syntax", kind: "enum", T: m.proto3.getEnumType(t.Syntax) }
    ]);
    var s = class bn extends n.Message {
      constructor(a) {
        super(), this.name = "", this.root = "", m.proto3.util.initPartial(a, this);
      }
      static fromBinary(a, c) {
        return new bn().fromBinary(a, c);
      }
      static fromJson(a, c) {
        return new bn().fromJson(a, c);
      }
      static fromJsonString(a, c) {
        return new bn().fromJsonString(a, c);
      }
      static equals(a, c) {
        return m.proto3.util.equals(bn, a, c);
      }
    };
    e.Mixin = s, s.runtime = m.proto3, s.typeName = "google.protobuf.Mixin", s.fields = m.proto3.util.newFieldList(() => [
      {
        no: 1,
        name: "name",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      },
      {
        no: 2,
        name: "root",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]);
  }
}), ka = q({
  "node_modules/.pnpm/@bufbuild+protobuf@1.7.2/node_modules/@bufbuild/protobuf/dist/cjs/index.js"(e) {
    var n = e && e.__createBinding || (Object.create ? function(O, b, D, S) {
      S === void 0 && (S = D);
      var C = Object.getOwnPropertyDescriptor(b, D);
      (!C || ("get" in C ? !b.__esModule : C.writable || C.configurable)) && (C = { enumerable: !0, get: function() {
        return b[D];
      } }), Object.defineProperty(O, S, C);
    } : function(O, b, D, S) {
      S === void 0 && (S = D), O[S] = b[D];
    }), t = e && e.__exportStar || function(O, b) {
      for (var D in O)
        D !== "default" && !Object.prototype.hasOwnProperty.call(b, D) && n(b, O, D);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toPlainMessage = e.createRegistryFromDescriptors = e.createRegistry = e.createDescriptorSet = e.BinaryReader = e.BinaryWriter = e.WireType = e.MethodIdempotency = e.MethodKind = e.clearExtension = e.hasExtension = e.setExtension = e.getExtension = e.LongType = e.ScalarType = e.Message = e.codegenInfo = e.protoDelimited = e.protoBase64 = e.protoInt64 = e.protoDouble = e.proto2 = e.proto3 = void 0;
    var r = ee();
    Object.defineProperty(e, "proto3", { enumerable: !0, get: function() {
      return r.proto3;
    } });
    var m = Bn();
    Object.defineProperty(e, "proto2", { enumerable: !0, get: function() {
      return m.proto2;
    } });
    var i = ma();
    Object.defineProperty(e, "protoDouble", { enumerable: !0, get: function() {
      return i.protoDouble;
    } });
    var u = ne();
    Object.defineProperty(e, "protoInt64", { enumerable: !0, get: function() {
      return u.protoInt64;
    } });
    var s = zn();
    Object.defineProperty(e, "protoBase64", { enumerable: !0, get: function() {
      return s.protoBase64;
    } });
    var o = da();
    Object.defineProperty(e, "protoDelimited", { enumerable: !0, get: function() {
      return o.protoDelimited;
    } });
    var a = pa();
    Object.defineProperty(e, "codegenInfo", { enumerable: !0, get: function() {
      return a.codegenInfo;
    } });
    var c = x();
    Object.defineProperty(e, "Message", { enumerable: !0, get: function() {
      return c.Message;
    } });
    var l = Q();
    Object.defineProperty(e, "ScalarType", { enumerable: !0, get: function() {
      return l.ScalarType;
    } }), Object.defineProperty(e, "LongType", { enumerable: !0, get: function() {
      return l.LongType;
    } });
    var y = io();
    Object.defineProperty(e, "getExtension", { enumerable: !0, get: function() {
      return y.getExtension;
    } }), Object.defineProperty(e, "setExtension", { enumerable: !0, get: function() {
      return y.setExtension;
    } }), Object.defineProperty(e, "hasExtension", { enumerable: !0, get: function() {
      return y.hasExtension;
    } }), Object.defineProperty(e, "clearExtension", { enumerable: !0, get: function() {
      return y.clearExtension;
    } });
    var d = mo();
    Object.defineProperty(e, "MethodKind", { enumerable: !0, get: function() {
      return d.MethodKind;
    } }), Object.defineProperty(e, "MethodIdempotency", { enumerable: !0, get: function() {
      return d.MethodIdempotency;
    } });
    var f = jn();
    Object.defineProperty(e, "WireType", { enumerable: !0, get: function() {
      return f.WireType;
    } }), Object.defineProperty(e, "BinaryWriter", { enumerable: !0, get: function() {
      return f.BinaryWriter;
    } }), Object.defineProperty(e, "BinaryReader", { enumerable: !0, get: function() {
      return f.BinaryReader;
    } });
    var g = fo();
    Object.defineProperty(e, "createDescriptorSet", { enumerable: !0, get: function() {
      return g.createDescriptorSet;
    } });
    var h = Ta();
    Object.defineProperty(e, "createRegistry", { enumerable: !0, get: function() {
      return h.createRegistry;
    } });
    var w = ya();
    Object.defineProperty(e, "createRegistryFromDescriptors", { enumerable: !0, get: function() {
      return w.createRegistryFromDescriptors;
    } });
    var k = ha();
    Object.defineProperty(e, "toPlainMessage", { enumerable: !0, get: function() {
      return k.toPlainMessage;
    } }), t(ba(), e), t(va(), e), t(xn(), e), t(Sn(), e), t(go(), e), t(_o(), e), t(To(), e), t(Qn(), e), t(yo(), e), t(po(), e), t(bo(), e), t(ho(), e);
  }
}), Ea = {};
z(Ea, {
  Admin: () => vo,
  AppOnly: () => vr,
  CannedMessages: () => kr,
  Channel: () => ko,
  ClientOnly: () => Er,
  Config: () => So,
  ConnectionStatus: () => ir,
  DeviceOnly: () => dr,
  LocalOnly: () => fr,
  Mesh: () => No,
  ModuleConfig: () => Go,
  Mqtt: () => Nr,
  PaxCount: () => Sr,
  Portnums: () => Lo,
  RemoteHardware: () => Or,
  Rtttl: () => Ir,
  StoreForward: () => Pr,
  Telemetry: () => Bo,
  Xmodem: () => Xo
});
var vo = {};
z(vo, {
  AdminMessage: () => Ba,
  AdminMessage_ConfigType: () => Tr,
  AdminMessage_ModuleConfigType: () => yr,
  HamParameters: () => hr,
  NodeRemoteHardwarePinsResponse: () => br
});
var E = {};
ra(E, aa(ka()));
var ko = {};
z(ko, {
  Channel: () => vn,
  ChannelSettings: () => Zn,
  Channel_Role: () => Eo
});
var Zn = E.proto3.makeMessageType(
  "meshtastic.ChannelSettings",
  () => [
    {
      no: 1,
      name: "channel_num",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "psk",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    {
      no: 3,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "id",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 5,
      name: "uplink_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "downlink_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), vn = E.proto3.makeMessageType(
  "meshtastic.Channel",
  () => [
    {
      no: 1,
      name: "index",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 2, name: "settings", kind: "message", T: Zn },
    { no: 3, name: "role", kind: "enum", T: E.proto3.getEnumType(Eo) }
  ]
), Eo = E.proto3.makeEnum(
  "meshtastic.Channel.Role",
  [
    { no: 0, name: "DISABLED" },
    { no: 1, name: "PRIMARY" },
    { no: 2, name: "SECONDARY" }
  ]
), No = {};
z(No, {
  Compressed: () => Ra,
  Constants: () => wa,
  CriticalErrorCode: () => Ia,
  Data: () => Qo,
  DeviceMetadata: () => Ot,
  FromRadio: () => Da,
  HardwareModel: () => kt,
  LogRecord: () => tr,
  LogRecord_Level: () => or,
  MeshPacket: () => ae,
  MeshPacket_Delayed: () => er,
  MeshPacket_Priority: () => Zo,
  MqttClientProxyMessage: () => Nt,
  MyNodeInfo: () => St,
  Neighbor: () => ar,
  NeighborInfo: () => Fa,
  NodeInfo: () => nr,
  Position: () => Ho,
  Position_AltSource: () => zo,
  Position_LocSource: () => Et,
  QueueStatus: () => rr,
  RouteDiscovery: () => qn,
  Routing: () => Pa,
  Routing_Error: () => xo,
  ToRadio: () => Ma,
  User: () => ue,
  Waypoint: () => Ca
});
var So = {};
z(So, {
  Config: () => Dn,
  Config_BluetoothConfig: () => at,
  Config_BluetoothConfig_PairingMode: () => jo,
  Config_DeviceConfig: () => et,
  Config_DeviceConfig_RebroadcastMode: () => Oo,
  Config_DeviceConfig_Role: () => Un,
  Config_DisplayConfig: () => rt,
  Config_DisplayConfig_DisplayMode: () => Ro,
  Config_DisplayConfig_DisplayUnits: () => Do,
  Config_DisplayConfig_GpsCoordinateFormat: () => Co,
  Config_DisplayConfig_OledType: () => Mo,
  Config_LoRaConfig: () => Jn,
  Config_LoRaConfig_ModemPreset: () => Ao,
  Config_LoRaConfig_RegionCode: () => Fo,
  Config_NetworkConfig: () => ot,
  Config_NetworkConfig_AddressMode: () => Io,
  Config_NetworkConfig_IpV4Config: () => Po,
  Config_PositionConfig: () => nt,
  Config_PositionConfig_GpsMode: () => wo,
  Config_PositionConfig_PositionFlags: () => Na,
  Config_PowerConfig: () => tt
});
var Dn = E.proto3.makeMessageType(
  "meshtastic.Config",
  () => [
    { no: 1, name: "device", kind: "message", T: et, oneof: "payload_variant" },
    { no: 2, name: "position", kind: "message", T: nt, oneof: "payload_variant" },
    { no: 3, name: "power", kind: "message", T: tt, oneof: "payload_variant" },
    { no: 4, name: "network", kind: "message", T: ot, oneof: "payload_variant" },
    { no: 5, name: "display", kind: "message", T: rt, oneof: "payload_variant" },
    { no: 6, name: "lora", kind: "message", T: Jn, oneof: "payload_variant" },
    { no: 7, name: "bluetooth", kind: "message", T: at, oneof: "payload_variant" }
  ]
), et = E.proto3.makeMessageType(
  "meshtastic.Config.DeviceConfig",
  () => [
    { no: 1, name: "role", kind: "enum", T: E.proto3.getEnumType(Un) },
    {
      no: 2,
      name: "serial_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "debug_log_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "button_gpio",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "buzzer_gpio",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 6, name: "rebroadcast_mode", kind: "enum", T: E.proto3.getEnumType(Oo) },
    {
      no: 7,
      name: "node_info_broadcast_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "double_tap_as_button_press",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 9,
      name: "is_managed",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "disable_triple_click",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "Config_DeviceConfig" }
), Un = E.proto3.makeEnum(
  "meshtastic.Config.DeviceConfig.Role",
  [
    { no: 0, name: "CLIENT" },
    { no: 1, name: "CLIENT_MUTE" },
    { no: 2, name: "ROUTER" },
    { no: 3, name: "ROUTER_CLIENT" },
    { no: 4, name: "REPEATER" },
    { no: 5, name: "TRACKER" },
    { no: 6, name: "SENSOR" },
    { no: 7, name: "TAK" },
    { no: 8, name: "CLIENT_HIDDEN" },
    { no: 9, name: "LOST_AND_FOUND" },
    { no: 10, name: "TAK_TRACKER" }
  ]
), Oo = E.proto3.makeEnum(
  "meshtastic.Config.DeviceConfig.RebroadcastMode",
  [
    { no: 0, name: "ALL" },
    { no: 1, name: "ALL_SKIP_DECODING" },
    { no: 2, name: "LOCAL_ONLY" },
    { no: 3, name: "KNOWN_ONLY" }
  ]
), nt = E.proto3.makeMessageType(
  "meshtastic.Config.PositionConfig",
  () => [
    {
      no: 1,
      name: "position_broadcast_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "position_broadcast_smart_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "fixed_position",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "gps_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "gps_update_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "gps_attempt_time",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "position_flags",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "rx_gpio",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "tx_gpio",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 10,
      name: "broadcast_smart_minimum_distance",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 11,
      name: "broadcast_smart_minimum_interval_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 12,
      name: "gps_en_gpio",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 13, name: "gps_mode", kind: "enum", T: E.proto3.getEnumType(wo) },
    { no: 14, name: "channel_precision", kind: "scalar", T: 13, repeated: !0 }
  ],
  { localName: "Config_PositionConfig" }
), Na = E.proto3.makeEnum(
  "meshtastic.Config.PositionConfig.PositionFlags",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "ALTITUDE" },
    { no: 2, name: "ALTITUDE_MSL" },
    { no: 4, name: "GEOIDAL_SEPARATION" },
    { no: 8, name: "DOP" },
    { no: 16, name: "HVDOP" },
    { no: 32, name: "SATINVIEW" },
    { no: 64, name: "SEQ_NO" },
    { no: 128, name: "TIMESTAMP" },
    { no: 256, name: "HEADING" },
    { no: 512, name: "SPEED" }
  ]
), wo = E.proto3.makeEnum(
  "meshtastic.Config.PositionConfig.GpsMode",
  [
    { no: 0, name: "DISABLED" },
    { no: 1, name: "ENABLED" },
    { no: 2, name: "NOT_PRESENT" }
  ]
), tt = E.proto3.makeMessageType(
  "meshtastic.Config.PowerConfig",
  () => [
    {
      no: 1,
      name: "is_power_saving",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "on_battery_shutdown_after_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "adc_multiplier_override",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 4,
      name: "wait_bluetooth_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "sds_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "ls_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "min_wake_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "device_battery_ina_address",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "Config_PowerConfig" }
), ot = E.proto3.makeMessageType(
  "meshtastic.Config.NetworkConfig",
  () => [
    {
      no: 1,
      name: "wifi_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "wifi_ssid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "wifi_psk",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "ntp_server",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "eth_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 7, name: "address_mode", kind: "enum", T: E.proto3.getEnumType(Io) },
    { no: 8, name: "ipv4_config", kind: "message", T: Po },
    {
      no: 9,
      name: "rsyslog_server",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ],
  { localName: "Config_NetworkConfig" }
), Io = E.proto3.makeEnum(
  "meshtastic.Config.NetworkConfig.AddressMode",
  [
    { no: 0, name: "DHCP" },
    { no: 1, name: "STATIC" }
  ]
), Po = E.proto3.makeMessageType(
  "meshtastic.Config.NetworkConfig.IpV4Config",
  () => [
    {
      no: 1,
      name: "ip",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 2,
      name: "gateway",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 3,
      name: "subnet",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 4,
      name: "dns",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    }
  ],
  { localName: "Config_NetworkConfig_IpV4Config" }
), rt = E.proto3.makeMessageType(
  "meshtastic.Config.DisplayConfig",
  () => [
    {
      no: 1,
      name: "screen_on_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 2, name: "gps_format", kind: "enum", T: E.proto3.getEnumType(Co) },
    {
      no: 3,
      name: "auto_screen_carousel_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "compass_north_top",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "flip_screen",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 6, name: "units", kind: "enum", T: E.proto3.getEnumType(Do) },
    { no: 7, name: "oled", kind: "enum", T: E.proto3.getEnumType(Mo) },
    { no: 8, name: "displaymode", kind: "enum", T: E.proto3.getEnumType(Ro) },
    {
      no: 9,
      name: "heading_bold",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "wake_on_tap_or_motion",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "Config_DisplayConfig" }
), Co = E.proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.GpsCoordinateFormat",
  [
    { no: 0, name: "DEC" },
    { no: 1, name: "DMS" },
    { no: 2, name: "UTM" },
    { no: 3, name: "MGRS" },
    { no: 4, name: "OLC" },
    { no: 5, name: "OSGR" }
  ]
), Do = E.proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.DisplayUnits",
  [
    { no: 0, name: "METRIC" },
    { no: 1, name: "IMPERIAL" }
  ]
), Mo = E.proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.OledType",
  [
    { no: 0, name: "OLED_AUTO" },
    { no: 1, name: "OLED_SSD1306" },
    { no: 2, name: "OLED_SH1106" },
    { no: 3, name: "OLED_SH1107" }
  ]
), Ro = E.proto3.makeEnum(
  "meshtastic.Config.DisplayConfig.DisplayMode",
  [
    { no: 0, name: "DEFAULT" },
    { no: 1, name: "TWOCOLOR" },
    { no: 2, name: "INVERTED" },
    { no: 3, name: "COLOR" }
  ]
), Jn = E.proto3.makeMessageType(
  "meshtastic.Config.LoRaConfig",
  () => [
    {
      no: 1,
      name: "use_preset",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "modem_preset", kind: "enum", T: E.proto3.getEnumType(Ao) },
    {
      no: 3,
      name: "bandwidth",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "spread_factor",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "coding_rate",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "frequency_offset",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    { no: 7, name: "region", kind: "enum", T: E.proto3.getEnumType(Fo) },
    {
      no: 8,
      name: "hop_limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "tx_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "tx_power",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 11,
      name: "channel_num",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 12,
      name: "override_duty_cycle",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 13,
      name: "sx126x_rx_boosted_gain",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 14,
      name: "override_frequency",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    { no: 103, name: "ignore_incoming", kind: "scalar", T: 13, repeated: !0 },
    {
      no: 104,
      name: "ignore_mqtt",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "Config_LoRaConfig" }
), Fo = E.proto3.makeEnum(
  "meshtastic.Config.LoRaConfig.RegionCode",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "US" },
    { no: 2, name: "EU_433" },
    { no: 3, name: "EU_868" },
    { no: 4, name: "CN" },
    { no: 5, name: "JP" },
    { no: 6, name: "ANZ" },
    { no: 7, name: "KR" },
    { no: 8, name: "TW" },
    { no: 9, name: "RU" },
    { no: 10, name: "IN" },
    { no: 11, name: "NZ_865" },
    { no: 12, name: "TH" },
    { no: 13, name: "LORA_24" },
    { no: 14, name: "UA_433" },
    { no: 15, name: "UA_868" },
    { no: 16, name: "MY_433" },
    { no: 17, name: "MY_919" },
    { no: 18, name: "SG_923" }
  ]
), Ao = E.proto3.makeEnum(
  "meshtastic.Config.LoRaConfig.ModemPreset",
  [
    { no: 0, name: "LONG_FAST" },
    { no: 1, name: "LONG_SLOW" },
    { no: 2, name: "VERY_LONG_SLOW" },
    { no: 3, name: "MEDIUM_SLOW" },
    { no: 4, name: "MEDIUM_FAST" },
    { no: 5, name: "SHORT_SLOW" },
    { no: 6, name: "SHORT_FAST" },
    { no: 7, name: "LONG_MODERATE" }
  ]
), at = E.proto3.makeMessageType(
  "meshtastic.Config.BluetoothConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "mode", kind: "enum", T: E.proto3.getEnumType(jo) },
    {
      no: 3,
      name: "fixed_pin",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "Config_BluetoothConfig" }
), jo = E.proto3.makeEnum(
  "meshtastic.Config.BluetoothConfig.PairingMode",
  [
    { no: 0, name: "RANDOM_PIN" },
    { no: 1, name: "FIXED_PIN" },
    { no: 2, name: "NO_PIN" }
  ]
), Lo = {};
z(Lo, {
  PortNum: () => it
});
var it = E.proto3.makeEnum(
  "meshtastic.PortNum",
  [
    { no: 0, name: "UNKNOWN_APP" },
    { no: 1, name: "TEXT_MESSAGE_APP" },
    { no: 2, name: "REMOTE_HARDWARE_APP" },
    { no: 3, name: "POSITION_APP" },
    { no: 4, name: "NODEINFO_APP" },
    { no: 5, name: "ROUTING_APP" },
    { no: 6, name: "ADMIN_APP" },
    { no: 7, name: "TEXT_MESSAGE_COMPRESSED_APP" },
    { no: 8, name: "WAYPOINT_APP" },
    { no: 9, name: "AUDIO_APP" },
    { no: 10, name: "DETECTION_SENSOR_APP" },
    { no: 32, name: "REPLY_APP" },
    { no: 33, name: "IP_TUNNEL_APP" },
    { no: 34, name: "PAXCOUNTER_APP" },
    { no: 64, name: "SERIAL_APP" },
    { no: 65, name: "STORE_FORWARD_APP" },
    { no: 66, name: "RANGE_TEST_APP" },
    { no: 67, name: "TELEMETRY_APP" },
    { no: 68, name: "ZPS_APP" },
    { no: 69, name: "SIMULATOR_APP" },
    { no: 70, name: "TRACEROUTE_APP" },
    { no: 71, name: "NEIGHBORINFO_APP" },
    { no: 72, name: "ATAK_PLUGIN" },
    { no: 256, name: "PRIVATE_APP" },
    { no: 257, name: "ATAK_FORWARDER" },
    { no: 511, name: "MAX" }
  ]
), Bo = {};
z(Bo, {
  AirQualityMetrics: () => Vo,
  DeviceMetrics: () => Vn,
  EnvironmentMetrics: () => Uo,
  PowerMetrics: () => Jo,
  Telemetry: () => Oa,
  TelemetrySensorType: () => Sa
});
var Sa = E.proto3.makeEnum(
  "meshtastic.TelemetrySensorType",
  [
    { no: 0, name: "SENSOR_UNSET" },
    { no: 1, name: "BME280" },
    { no: 2, name: "BME680" },
    { no: 3, name: "MCP9808" },
    { no: 4, name: "INA260" },
    { no: 5, name: "INA219" },
    { no: 6, name: "BMP280" },
    { no: 7, name: "SHTC3" },
    { no: 8, name: "LPS22" },
    { no: 9, name: "QMC6310" },
    { no: 10, name: "QMI8658" },
    { no: 11, name: "QMC5883L" },
    { no: 12, name: "SHT31" },
    { no: 13, name: "PMSA003I" },
    { no: 14, name: "INA3221" }
  ]
), Vn = E.proto3.makeMessageType(
  "meshtastic.DeviceMetrics",
  () => [
    {
      no: 1,
      name: "battery_level",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "voltage",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 3,
      name: "channel_utilization",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 4,
      name: "air_util_tx",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    }
  ]
), Uo = E.proto3.makeMessageType(
  "meshtastic.EnvironmentMetrics",
  () => [
    {
      no: 1,
      name: "temperature",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 2,
      name: "relative_humidity",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 3,
      name: "barometric_pressure",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 4,
      name: "gas_resistance",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 5,
      name: "voltage",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 6,
      name: "current",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    }
  ]
), Jo = E.proto3.makeMessageType(
  "meshtastic.PowerMetrics",
  () => [
    {
      no: 1,
      name: "ch1_voltage",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 2,
      name: "ch1_current",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 3,
      name: "ch2_voltage",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 4,
      name: "ch2_current",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 5,
      name: "ch3_voltage",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 6,
      name: "ch3_current",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    }
  ]
), Vo = E.proto3.makeMessageType(
  "meshtastic.AirQualityMetrics",
  () => [
    {
      no: 1,
      name: "pm10_standard",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "pm25_standard",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "pm100_standard",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "pm10_environmental",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "pm25_environmental",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "pm100_environmental",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "particles_03um",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "particles_05um",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "particles_10um",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 10,
      name: "particles_25um",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 11,
      name: "particles_50um",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 12,
      name: "particles_100um",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), Oa = E.proto3.makeMessageType(
  "meshtastic.Telemetry",
  () => [
    {
      no: 1,
      name: "time",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    { no: 2, name: "device_metrics", kind: "message", T: Vn, oneof: "variant" },
    { no: 3, name: "environment_metrics", kind: "message", T: Uo, oneof: "variant" },
    { no: 4, name: "air_quality_metrics", kind: "message", T: Vo, oneof: "variant" },
    { no: 5, name: "power_metrics", kind: "message", T: Jo, oneof: "variant" }
  ]
), Go = {};
z(Go, {
  ModuleConfig: () => Mn,
  ModuleConfig_AmbientLightingConfig: () => ht,
  ModuleConfig_AudioConfig: () => mt,
  ModuleConfig_AudioConfig_Audio_Baud: () => Yo,
  ModuleConfig_CannedMessageConfig: () => yt,
  ModuleConfig_CannedMessageConfig_InputEventChar: () => In,
  ModuleConfig_DetectionSensorConfig: () => ct,
  ModuleConfig_ExternalNotificationConfig: () => pt,
  ModuleConfig_MQTTConfig: () => st,
  ModuleConfig_NeighborInfoConfig: () => lt,
  ModuleConfig_PaxcounterConfig: () => dt,
  ModuleConfig_RangeTestConfig: () => _t,
  ModuleConfig_RemoteHardwareConfig: () => ut,
  ModuleConfig_SerialConfig: () => ft,
  ModuleConfig_SerialConfig_Serial_Baud: () => $o,
  ModuleConfig_SerialConfig_Serial_Mode: () => Wo,
  ModuleConfig_StoreForwardConfig: () => gt,
  ModuleConfig_TelemetryConfig: () => Tt,
  RemoteHardwarePin: () => bt,
  RemoteHardwarePinType: () => qo
});
var qo = E.proto3.makeEnum(
  "meshtastic.RemoteHardwarePinType",
  [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "DIGITAL_READ" },
    { no: 2, name: "DIGITAL_WRITE" }
  ]
), Mn = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig",
  () => [
    { no: 1, name: "mqtt", kind: "message", T: st, oneof: "payload_variant" },
    { no: 2, name: "serial", kind: "message", T: ft, oneof: "payload_variant" },
    { no: 3, name: "external_notification", kind: "message", T: pt, oneof: "payload_variant" },
    { no: 4, name: "store_forward", kind: "message", T: gt, oneof: "payload_variant" },
    { no: 5, name: "range_test", kind: "message", T: _t, oneof: "payload_variant" },
    { no: 6, name: "telemetry", kind: "message", T: Tt, oneof: "payload_variant" },
    { no: 7, name: "canned_message", kind: "message", T: yt, oneof: "payload_variant" },
    { no: 8, name: "audio", kind: "message", T: mt, oneof: "payload_variant" },
    { no: 9, name: "remote_hardware", kind: "message", T: ut, oneof: "payload_variant" },
    { no: 10, name: "neighbor_info", kind: "message", T: lt, oneof: "payload_variant" },
    { no: 11, name: "ambient_lighting", kind: "message", T: ht, oneof: "payload_variant" },
    { no: 12, name: "detection_sensor", kind: "message", T: ct, oneof: "payload_variant" },
    { no: 13, name: "paxcounter", kind: "message", T: dt, oneof: "payload_variant" }
  ]
), st = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.MQTTConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "address",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "username",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "password",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 5,
      name: "encryption_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "json_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 7,
      name: "tls_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 8,
      name: "root",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 9,
      name: "proxy_to_client_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_MQTTConfig" }
), ut = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.RemoteHardwareConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "allow_undefined_pin_access",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 3, name: "available_pins", kind: "message", T: bt, repeated: !0 }
  ],
  { localName: "ModuleConfig_RemoteHardwareConfig" }
), lt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.NeighborInfoConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "update_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "ModuleConfig_NeighborInfoConfig" }
), ct = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.DetectionSensorConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "minimum_broadcast_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "state_broadcast_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "send_bell",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "monitor_pin",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "detection_triggered_high",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 8,
      name: "use_pullup",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_DetectionSensorConfig" }
), mt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.AudioConfig",
  () => [
    {
      no: 1,
      name: "codec2_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "ptt_pin",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 3, name: "bitrate", kind: "enum", T: E.proto3.getEnumType(Yo) },
    {
      no: 4,
      name: "i2s_ws",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "i2s_sd",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "i2s_din",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "i2s_sck",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "ModuleConfig_AudioConfig" }
), Yo = E.proto3.makeEnum(
  "meshtastic.ModuleConfig.AudioConfig.Audio_Baud",
  [
    { no: 0, name: "CODEC2_DEFAULT" },
    { no: 1, name: "CODEC2_3200" },
    { no: 2, name: "CODEC2_2400" },
    { no: 3, name: "CODEC2_1600" },
    { no: 4, name: "CODEC2_1400" },
    { no: 5, name: "CODEC2_1300" },
    { no: 6, name: "CODEC2_1200" },
    { no: 7, name: "CODEC2_700" },
    { no: 8, name: "CODEC2_700B" }
  ]
), dt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.PaxcounterConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "paxcounter_update_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "ModuleConfig_PaxcounterConfig" }
), ft = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.SerialConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "echo",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "rxd",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "txd",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 5, name: "baud", kind: "enum", T: E.proto3.getEnumType($o) },
    {
      no: 6,
      name: "timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 7, name: "mode", kind: "enum", T: E.proto3.getEnumType(Wo) },
    {
      no: 8,
      name: "override_console_serial_port",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_SerialConfig" }
), $o = E.proto3.makeEnum(
  "meshtastic.ModuleConfig.SerialConfig.Serial_Baud",
  [
    { no: 0, name: "BAUD_DEFAULT" },
    { no: 1, name: "BAUD_110" },
    { no: 2, name: "BAUD_300" },
    { no: 3, name: "BAUD_600" },
    { no: 4, name: "BAUD_1200" },
    { no: 5, name: "BAUD_2400" },
    { no: 6, name: "BAUD_4800" },
    { no: 7, name: "BAUD_9600" },
    { no: 8, name: "BAUD_19200" },
    { no: 9, name: "BAUD_38400" },
    { no: 10, name: "BAUD_57600" },
    { no: 11, name: "BAUD_115200" },
    { no: 12, name: "BAUD_230400" },
    { no: 13, name: "BAUD_460800" },
    { no: 14, name: "BAUD_576000" },
    { no: 15, name: "BAUD_921600" }
  ]
), Wo = E.proto3.makeEnum(
  "meshtastic.ModuleConfig.SerialConfig.Serial_Mode",
  [
    { no: 0, name: "DEFAULT" },
    { no: 1, name: "SIMPLE" },
    { no: 2, name: "PROTO" },
    { no: 3, name: "TEXTMSG" },
    { no: 4, name: "NMEA" },
    { no: 5, name: "CALTOPO" }
  ]
), pt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.ExternalNotificationConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "output_ms",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "output",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "output_vibra",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "output_buzzer",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "active",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "alert_message",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "alert_message_vibra",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 11,
      name: "alert_message_buzzer",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "alert_bell",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 12,
      name: "alert_bell_vibra",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 13,
      name: "alert_bell_buzzer",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 7,
      name: "use_pwm",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 14,
      name: "nag_timeout",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 15,
      name: "use_i2s_as_buzzer",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_ExternalNotificationConfig" }
), gt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.StoreForwardConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "heartbeat",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "records",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "history_return_max",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "history_return_window",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "ModuleConfig_StoreForwardConfig" }
), _t = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.RangeTestConfig",
  () => [
    {
      no: 1,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "sender",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "save",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_RangeTestConfig" }
), Tt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.TelemetryConfig",
  () => [
    {
      no: 1,
      name: "device_update_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "environment_update_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "environment_measurement_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "environment_screen_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "environment_display_fahrenheit",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "air_quality_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 7,
      name: "air_quality_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "power_measurement_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 9,
      name: "power_update_interval",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 10,
      name: "power_screen_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_TelemetryConfig" }
), yt = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.CannedMessageConfig",
  () => [
    {
      no: 1,
      name: "rotary1_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "inputbroker_pin_a",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "inputbroker_pin_b",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "inputbroker_pin_press",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 5, name: "inputbroker_event_cw", kind: "enum", T: E.proto3.getEnumType(In) },
    { no: 6, name: "inputbroker_event_ccw", kind: "enum", T: E.proto3.getEnumType(In) },
    { no: 7, name: "inputbroker_event_press", kind: "enum", T: E.proto3.getEnumType(In) },
    {
      no: 8,
      name: "updown1_enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 9,
      name: "enabled",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 10,
      name: "allow_input_source",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 11,
      name: "send_bell",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ],
  { localName: "ModuleConfig_CannedMessageConfig" }
), In = E.proto3.makeEnum(
  "meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar",
  [
    { no: 0, name: "NONE" },
    { no: 17, name: "UP" },
    { no: 18, name: "DOWN" },
    { no: 19, name: "LEFT" },
    { no: 20, name: "RIGHT" },
    { no: 10, name: "SELECT" },
    { no: 27, name: "BACK" },
    { no: 24, name: "CANCEL" }
  ]
), ht = E.proto3.makeMessageType(
  "meshtastic.ModuleConfig.AmbientLightingConfig",
  () => [
    {
      no: 1,
      name: "led_state",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 2,
      name: "current",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "red",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "green",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "blue",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "ModuleConfig_AmbientLightingConfig" }
), bt = E.proto3.makeMessageType(
  "meshtastic.RemoteHardwarePin",
  () => [
    {
      no: 1,
      name: "gpio_pin",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "type", kind: "enum", T: E.proto3.getEnumType(qo) }
  ]
), Xo = {};
z(Xo, {
  XModem: () => vt,
  XModem_Control: () => Ko
});
var vt = E.proto3.makeMessageType(
  "meshtastic.XModem",
  () => [
    { no: 1, name: "control", kind: "enum", T: E.proto3.getEnumType(Ko) },
    {
      no: 2,
      name: "seq",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "crc16",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "buffer",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    }
  ]
), Ko = E.proto3.makeEnum(
  "meshtastic.XModem.Control",
  [
    { no: 0, name: "NUL" },
    { no: 1, name: "SOH" },
    { no: 2, name: "STX" },
    { no: 4, name: "EOT" },
    { no: 6, name: "ACK" },
    { no: 21, name: "NAK" },
    { no: 24, name: "CAN" },
    { no: 26, name: "CTRLZ" }
  ]
), kt = E.proto3.makeEnum(
  "meshtastic.HardwareModel",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "TLORA_V2" },
    { no: 2, name: "TLORA_V1" },
    { no: 3, name: "TLORA_V2_1_1P6" },
    { no: 4, name: "TBEAM" },
    { no: 5, name: "HELTEC_V2_0" },
    { no: 6, name: "TBEAM_V0P7" },
    { no: 7, name: "T_ECHO" },
    { no: 8, name: "TLORA_V1_1P3" },
    { no: 9, name: "RAK4631" },
    { no: 10, name: "HELTEC_V2_1" },
    { no: 11, name: "HELTEC_V1" },
    { no: 12, name: "LILYGO_TBEAM_S3_CORE" },
    { no: 13, name: "RAK11200" },
    { no: 14, name: "NANO_G1" },
    { no: 15, name: "TLORA_V2_1_1P8" },
    { no: 16, name: "TLORA_T3_S3" },
    { no: 17, name: "NANO_G1_EXPLORER" },
    { no: 18, name: "NANO_G2_ULTRA" },
    { no: 19, name: "LORA_TYPE" },
    { no: 25, name: "STATION_G1" },
    { no: 26, name: "RAK11310" },
    { no: 27, name: "SENSELORA_RP2040" },
    { no: 28, name: "SENSELORA_S3" },
    { no: 29, name: "CANARYONE" },
    { no: 30, name: "RP2040_LORA" },
    { no: 32, name: "LORA_RELAY_V1" },
    { no: 33, name: "NRF52840DK" },
    { no: 34, name: "PPR" },
    { no: 35, name: "GENIEBLOCKS" },
    { no: 36, name: "NRF52_UNKNOWN" },
    { no: 37, name: "PORTDUINO" },
    { no: 38, name: "ANDROID_SIM" },
    { no: 39, name: "DIY_V1" },
    { no: 40, name: "NRF52840_PCA10059" },
    { no: 41, name: "DR_DEV" },
    { no: 42, name: "M5STACK" },
    { no: 43, name: "HELTEC_V3" },
    { no: 44, name: "HELTEC_WSL_V3" },
    { no: 45, name: "BETAFPV_2400_TX" },
    { no: 46, name: "BETAFPV_900_NANO_TX" },
    { no: 47, name: "RPI_PICO" },
    { no: 48, name: "HELTEC_WIRELESS_TRACKER" },
    { no: 49, name: "HELTEC_WIRELESS_PAPER" },
    { no: 50, name: "T_DECK" },
    { no: 51, name: "T_WATCH_S3" },
    { no: 52, name: "PICOMPUTER_S3" },
    { no: 53, name: "HELTEC_HT62" },
    { no: 54, name: "EBYTE_ESP32_S3" },
    { no: 55, name: "ESP32_S3_PICO" },
    { no: 56, name: "CHATTER_2" },
    { no: 57, name: "HELTEC_WIRELESS_PAPER_V1_0" },
    { no: 58, name: "HELTEC_WIRELESS_TRACKER_V1_0" },
    { no: 255, name: "PRIVATE_HW" }
  ]
), wa = E.proto3.makeEnum(
  "meshtastic.Constants",
  [
    { no: 0, name: "ZERO" },
    { no: 237, name: "DATA_PAYLOAD_LEN" }
  ]
), Ia = E.proto3.makeEnum(
  "meshtastic.CriticalErrorCode",
  [
    { no: 0, name: "NONE" },
    { no: 1, name: "TX_WATCHDOG" },
    { no: 2, name: "SLEEP_ENTER_WAIT" },
    { no: 3, name: "NO_RADIO" },
    { no: 4, name: "UNSPECIFIED" },
    { no: 5, name: "UBLOX_UNIT_FAILED" },
    { no: 6, name: "NO_AXP192" },
    { no: 7, name: "INVALID_RADIO_SETTING" },
    { no: 8, name: "TRANSMIT_FAILED" },
    { no: 9, name: "BROWNOUT" },
    { no: 10, name: "SX1262_FAILURE" },
    { no: 11, name: "RADIO_SPI_BUG" }
  ]
), Ho = E.proto3.makeMessageType(
  "meshtastic.Position",
  () => [
    {
      no: 1,
      name: "latitude_i",
      kind: "scalar",
      T: 15
      /* ScalarType.SFIXED32 */
    },
    {
      no: 2,
      name: "longitude_i",
      kind: "scalar",
      T: 15
      /* ScalarType.SFIXED32 */
    },
    {
      no: 3,
      name: "altitude",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 4,
      name: "time",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    { no: 5, name: "location_source", kind: "enum", T: E.proto3.getEnumType(Et) },
    { no: 6, name: "altitude_source", kind: "enum", T: E.proto3.getEnumType(zo) },
    {
      no: 7,
      name: "timestamp",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 8,
      name: "timestamp_millis_adjust",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 9,
      name: "altitude_hae",
      kind: "scalar",
      T: 17
      /* ScalarType.SINT32 */
    },
    {
      no: 10,
      name: "altitude_geoidal_separation",
      kind: "scalar",
      T: 17
      /* ScalarType.SINT32 */
    },
    {
      no: 11,
      name: "PDOP",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 12,
      name: "HDOP",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 13,
      name: "VDOP",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 14,
      name: "gps_accuracy",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 15,
      name: "ground_speed",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 16,
      name: "ground_track",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 17,
      name: "fix_quality",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 18,
      name: "fix_type",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 19,
      name: "sats_in_view",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 20,
      name: "sensor_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 21,
      name: "next_update",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 22,
      name: "seq_number",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), Et = E.proto3.makeEnum(
  "meshtastic.Position.LocSource",
  [
    { no: 0, name: "LOC_UNSET" },
    { no: 1, name: "LOC_MANUAL" },
    { no: 2, name: "LOC_INTERNAL" },
    { no: 3, name: "LOC_EXTERNAL" }
  ]
), zo = E.proto3.makeEnum(
  "meshtastic.Position.AltSource",
  [
    { no: 0, name: "ALT_UNSET" },
    { no: 1, name: "ALT_MANUAL" },
    { no: 2, name: "ALT_INTERNAL" },
    { no: 3, name: "ALT_EXTERNAL" },
    { no: 4, name: "ALT_BAROMETRIC" }
  ]
), ue = E.proto3.makeMessageType(
  "meshtastic.User",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "long_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "short_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "macaddr",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    { no: 5, name: "hw_model", kind: "enum", T: E.proto3.getEnumType(kt) },
    {
      no: 6,
      name: "is_licensed",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 7, name: "role", kind: "enum", T: E.proto3.getEnumType(Un) }
  ]
), qn = E.proto3.makeMessageType(
  "meshtastic.RouteDiscovery",
  () => [
    { no: 1, name: "route", kind: "scalar", T: 7, repeated: !0 }
  ]
), Pa = E.proto3.makeMessageType(
  "meshtastic.Routing",
  () => [
    { no: 1, name: "route_request", kind: "message", T: qn, oneof: "variant" },
    { no: 2, name: "route_reply", kind: "message", T: qn, oneof: "variant" },
    { no: 3, name: "error_reason", kind: "enum", T: E.proto3.getEnumType(xo), oneof: "variant" }
  ]
), xo = E.proto3.makeEnum(
  "meshtastic.Routing.Error",
  [
    { no: 0, name: "NONE" },
    { no: 1, name: "NO_ROUTE" },
    { no: 2, name: "GOT_NAK" },
    { no: 3, name: "TIMEOUT" },
    { no: 4, name: "NO_INTERFACE" },
    { no: 5, name: "MAX_RETRANSMIT" },
    { no: 6, name: "NO_CHANNEL" },
    { no: 7, name: "TOO_LARGE" },
    { no: 8, name: "NO_RESPONSE" },
    { no: 9, name: "DUTY_CYCLE_LIMIT" },
    { no: 32, name: "BAD_REQUEST" },
    { no: 33, name: "NOT_AUTHORIZED" }
  ]
), Qo = E.proto3.makeMessageType(
  "meshtastic.Data",
  () => [
    { no: 1, name: "portnum", kind: "enum", T: E.proto3.getEnumType(it) },
    {
      no: 2,
      name: "payload",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    {
      no: 3,
      name: "want_response",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "dest",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 5,
      name: "source",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 6,
      name: "request_id",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 7,
      name: "reply_id",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 8,
      name: "emoji",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    }
  ]
), Ca = E.proto3.makeMessageType(
  "meshtastic.Waypoint",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "latitude_i",
      kind: "scalar",
      T: 15
      /* ScalarType.SFIXED32 */
    },
    {
      no: 3,
      name: "longitude_i",
      kind: "scalar",
      T: 15
      /* ScalarType.SFIXED32 */
    },
    {
      no: 4,
      name: "expire",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "locked_to",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "description",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 8,
      name: "icon",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    }
  ]
), Nt = E.proto3.makeMessageType(
  "meshtastic.MqttClientProxyMessage",
  () => [
    {
      no: 1,
      name: "topic",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "data", kind: "scalar", T: 12, oneof: "payload_variant" },
    { no: 3, name: "text", kind: "scalar", T: 9, oneof: "payload_variant" },
    {
      no: 4,
      name: "retained",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), ae = E.proto3.makeMessageType(
  "meshtastic.MeshPacket",
  () => [
    {
      no: 1,
      name: "from",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 2,
      name: "to",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 3,
      name: "channel",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 4, name: "decoded", kind: "message", T: Qo, oneof: "payload_variant" },
    { no: 5, name: "encrypted", kind: "scalar", T: 12, oneof: "payload_variant" },
    {
      no: 6,
      name: "id",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 7,
      name: "rx_time",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 8,
      name: "rx_snr",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 9,
      name: "hop_limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 10,
      name: "want_ack",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 11, name: "priority", kind: "enum", T: E.proto3.getEnumType(Zo) },
    {
      no: 12,
      name: "rx_rssi",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 13, name: "delayed", kind: "enum", T: E.proto3.getEnumType(er) },
    {
      no: 14,
      name: "via_mqtt",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), Zo = E.proto3.makeEnum(
  "meshtastic.MeshPacket.Priority",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "MIN" },
    { no: 10, name: "BACKGROUND" },
    { no: 64, name: "DEFAULT" },
    { no: 70, name: "RELIABLE" },
    { no: 120, name: "ACK" },
    { no: 127, name: "MAX" }
  ]
), er = E.proto3.makeEnum(
  "meshtastic.MeshPacket.Delayed",
  [
    { no: 0, name: "NO_DELAY" },
    { no: 1, name: "DELAYED_BROADCAST" },
    { no: 2, name: "DELAYED_DIRECT" }
  ]
), nr = E.proto3.makeMessageType(
  "meshtastic.NodeInfo",
  () => [
    {
      no: 1,
      name: "num",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 2, name: "user", kind: "message", T: ue },
    { no: 3, name: "position", kind: "message", T: Ho },
    {
      no: 4,
      name: "snr",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 5,
      name: "last_heard",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    { no: 6, name: "device_metrics", kind: "message", T: Vn },
    {
      no: 7,
      name: "channel",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), St = E.proto3.makeMessageType(
  "meshtastic.MyNodeInfo",
  () => [
    {
      no: 1,
      name: "my_node_num",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 8,
      name: "reboot_count",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 11,
      name: "min_app_version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), tr = E.proto3.makeMessageType(
  "meshtastic.LogRecord",
  () => [
    {
      no: 1,
      name: "message",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "time",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 3,
      name: "source",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "level", kind: "enum", T: E.proto3.getEnumType(or) }
  ]
), or = E.proto3.makeEnum(
  "meshtastic.LogRecord.Level",
  [
    { no: 0, name: "UNSET" },
    { no: 50, name: "CRITICAL" },
    { no: 40, name: "ERROR" },
    { no: 30, name: "WARNING" },
    { no: 20, name: "INFO" },
    { no: 10, name: "DEBUG" },
    { no: 5, name: "TRACE" }
  ]
), rr = E.proto3.makeMessageType(
  "meshtastic.QueueStatus",
  () => [
    {
      no: 1,
      name: "res",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 2,
      name: "free",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "maxlen",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "mesh_packet_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), Da = E.proto3.makeMessageType(
  "meshtastic.FromRadio",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 2, name: "packet", kind: "message", T: ae, oneof: "payload_variant" },
    { no: 3, name: "my_info", kind: "message", T: St, oneof: "payload_variant" },
    { no: 4, name: "node_info", kind: "message", T: nr, oneof: "payload_variant" },
    { no: 5, name: "config", kind: "message", T: Dn, oneof: "payload_variant" },
    { no: 6, name: "log_record", kind: "message", T: tr, oneof: "payload_variant" },
    { no: 7, name: "config_complete_id", kind: "scalar", T: 13, oneof: "payload_variant" },
    { no: 8, name: "rebooted", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 9, name: "moduleConfig", kind: "message", T: Mn, oneof: "payload_variant" },
    { no: 10, name: "channel", kind: "message", T: vn, oneof: "payload_variant" },
    { no: 11, name: "queueStatus", kind: "message", T: rr, oneof: "payload_variant" },
    { no: 12, name: "xmodemPacket", kind: "message", T: vt, oneof: "payload_variant" },
    { no: 13, name: "metadata", kind: "message", T: Ot, oneof: "payload_variant" },
    { no: 14, name: "mqttClientProxyMessage", kind: "message", T: Nt, oneof: "payload_variant" }
  ]
), Ma = E.proto3.makeMessageType(
  "meshtastic.ToRadio",
  () => [
    { no: 1, name: "packet", kind: "message", T: ae, oneof: "payload_variant" },
    { no: 3, name: "want_config_id", kind: "scalar", T: 13, oneof: "payload_variant" },
    { no: 4, name: "disconnect", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 5, name: "xmodemPacket", kind: "message", T: vt, oneof: "payload_variant" },
    { no: 6, name: "mqttClientProxyMessage", kind: "message", T: Nt, oneof: "payload_variant" }
  ]
), Ra = E.proto3.makeMessageType(
  "meshtastic.Compressed",
  () => [
    { no: 1, name: "portnum", kind: "enum", T: E.proto3.getEnumType(it) },
    {
      no: 2,
      name: "data",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    }
  ]
), Fa = E.proto3.makeMessageType(
  "meshtastic.NeighborInfo",
  () => [
    {
      no: 1,
      name: "node_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "last_sent_by_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "node_broadcast_interval_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 4, name: "neighbors", kind: "message", T: ar, repeated: !0 }
  ]
), ar = E.proto3.makeMessageType(
  "meshtastic.Neighbor",
  () => [
    {
      no: 1,
      name: "node_id",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "snr",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 3,
      name: "last_rx_time",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 4,
      name: "node_broadcast_interval_secs",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), Ot = E.proto3.makeMessageType(
  "meshtastic.DeviceMetadata",
  () => [
    {
      no: 1,
      name: "firmware_version",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "device_state_version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "canShutdown",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "hasWifi",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 5,
      name: "hasBluetooth",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 6,
      name: "hasEthernet",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 7, name: "role", kind: "enum", T: E.proto3.getEnumType(Un) },
    {
      no: 8,
      name: "position_flags",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 9, name: "hw_model", kind: "enum", T: E.proto3.getEnumType(kt) },
    {
      no: 10,
      name: "hasRemoteHardware",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), ir = {};
z(ir, {
  BluetoothConnectionStatus: () => cr,
  DeviceConnectionStatus: () => sr,
  EthernetConnectionStatus: () => lr,
  NetworkConnectionStatus: () => wt,
  SerialConnectionStatus: () => mr,
  WifiConnectionStatus: () => ur
});
var sr = E.proto3.makeMessageType(
  "meshtastic.DeviceConnectionStatus",
  () => [
    { no: 1, name: "wifi", kind: "message", T: ur, opt: !0 },
    { no: 2, name: "ethernet", kind: "message", T: lr, opt: !0 },
    { no: 3, name: "bluetooth", kind: "message", T: cr, opt: !0 },
    { no: 4, name: "serial", kind: "message", T: mr, opt: !0 }
  ]
), ur = E.proto3.makeMessageType(
  "meshtastic.WifiConnectionStatus",
  () => [
    { no: 1, name: "status", kind: "message", T: wt },
    {
      no: 2,
      name: "ssid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "rssi",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
), lr = E.proto3.makeMessageType(
  "meshtastic.EthernetConnectionStatus",
  () => [
    { no: 1, name: "status", kind: "message", T: wt }
  ]
), wt = E.proto3.makeMessageType(
  "meshtastic.NetworkConnectionStatus",
  () => [
    {
      no: 1,
      name: "ip_address",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    {
      no: 2,
      name: "is_connected",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "is_mqtt_connected",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 4,
      name: "is_syslog_connected",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), cr = E.proto3.makeMessageType(
  "meshtastic.BluetoothConnectionStatus",
  () => [
    {
      no: 1,
      name: "pin",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "rssi",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 3,
      name: "is_connected",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), mr = E.proto3.makeMessageType(
  "meshtastic.SerialConnectionStatus",
  () => [
    {
      no: 1,
      name: "baud",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "is_connected",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
), dr = {};
z(dr, {
  ChannelFile: () => ja,
  DeviceState: () => Aa,
  NodeInfoLite: () => gr,
  NodeRemoteHardwarePin: () => Ct,
  OEMStore: () => La,
  PositionLite: () => _r,
  ScreenFonts: () => pr
});
var fr = {};
z(fr, {
  LocalConfig: () => It,
  LocalModuleConfig: () => Pt
});
var It = E.proto3.makeMessageType(
  "meshtastic.LocalConfig",
  () => [
    { no: 1, name: "device", kind: "message", T: et },
    { no: 2, name: "position", kind: "message", T: nt },
    { no: 3, name: "power", kind: "message", T: tt },
    { no: 4, name: "network", kind: "message", T: ot },
    { no: 5, name: "display", kind: "message", T: rt },
    { no: 6, name: "lora", kind: "message", T: Jn },
    { no: 7, name: "bluetooth", kind: "message", T: at },
    {
      no: 8,
      name: "version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), Pt = E.proto3.makeMessageType(
  "meshtastic.LocalModuleConfig",
  () => [
    { no: 1, name: "mqtt", kind: "message", T: st },
    { no: 2, name: "serial", kind: "message", T: ft },
    { no: 3, name: "external_notification", kind: "message", T: pt },
    { no: 4, name: "store_forward", kind: "message", T: gt },
    { no: 5, name: "range_test", kind: "message", T: _t },
    { no: 6, name: "telemetry", kind: "message", T: Tt },
    { no: 7, name: "canned_message", kind: "message", T: yt },
    { no: 9, name: "audio", kind: "message", T: mt },
    { no: 10, name: "remote_hardware", kind: "message", T: ut },
    { no: 11, name: "neighbor_info", kind: "message", T: lt },
    { no: 12, name: "ambient_lighting", kind: "message", T: ht },
    { no: 13, name: "detection_sensor", kind: "message", T: ct },
    { no: 14, name: "paxcounter", kind: "message", T: dt },
    {
      no: 8,
      name: "version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), pr = E.proto3.makeEnum(
  "meshtastic.ScreenFonts",
  [
    { no: 0, name: "FONT_SMALL" },
    { no: 1, name: "FONT_MEDIUM" },
    { no: 2, name: "FONT_LARGE" }
  ]
), Aa = E.proto3.makeMessageType(
  "meshtastic.DeviceState",
  () => [
    { no: 2, name: "my_node", kind: "message", T: St },
    { no: 3, name: "owner", kind: "message", T: ue },
    { no: 5, name: "receive_queue", kind: "message", T: ae, repeated: !0 },
    {
      no: 8,
      name: "version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 7, name: "rx_text_message", kind: "message", T: ae },
    {
      no: 9,
      name: "no_save",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 11,
      name: "did_gps_reset",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 12, name: "rx_waypoint", kind: "message", T: ae },
    { no: 13, name: "node_remote_hardware_pins", kind: "message", T: Ct, repeated: !0 },
    { no: 14, name: "node_db_lite", kind: "message", T: gr, repeated: !0 }
  ]
), gr = E.proto3.makeMessageType(
  "meshtastic.NodeInfoLite",
  () => [
    {
      no: 1,
      name: "num",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 2, name: "user", kind: "message", T: ue },
    { no: 3, name: "position", kind: "message", T: _r },
    {
      no: 4,
      name: "snr",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 5,
      name: "last_heard",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    { no: 6, name: "device_metrics", kind: "message", T: Vn },
    {
      no: 7,
      name: "channel",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), _r = E.proto3.makeMessageType(
  "meshtastic.PositionLite",
  () => [
    {
      no: 1,
      name: "latitude_i",
      kind: "scalar",
      T: 15
      /* ScalarType.SFIXED32 */
    },
    {
      no: 2,
      name: "longitude_i",
      kind: "scalar",
      T: 15
      /* ScalarType.SFIXED32 */
    },
    {
      no: 3,
      name: "altitude",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 4,
      name: "time",
      kind: "scalar",
      T: 7
      /* ScalarType.FIXED32 */
    },
    { no: 5, name: "location_source", kind: "enum", T: E.proto3.getEnumType(Et) }
  ]
), ja = E.proto3.makeMessageType(
  "meshtastic.ChannelFile",
  () => [
    { no: 1, name: "channels", kind: "message", T: vn, repeated: !0 },
    {
      no: 2,
      name: "version",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), La = E.proto3.makeMessageType(
  "meshtastic.OEMStore",
  () => [
    {
      no: 1,
      name: "oem_icon_width",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "oem_icon_height",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "oem_icon_bits",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    { no: 4, name: "oem_font", kind: "enum", T: E.proto3.getEnumType(pr) },
    {
      no: 5,
      name: "oem_text",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "oem_aes_key",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    { no: 7, name: "oem_local_config", kind: "message", T: It },
    { no: 8, name: "oem_local_module_config", kind: "message", T: Pt }
  ]
), Ct = E.proto3.makeMessageType(
  "meshtastic.NodeRemoteHardwarePin",
  () => [
    {
      no: 1,
      name: "node_num",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 2, name: "pin", kind: "message", T: bt }
  ]
), Ba = E.proto3.makeMessageType(
  "meshtastic.AdminMessage",
  () => [
    { no: 1, name: "get_channel_request", kind: "scalar", T: 13, oneof: "payload_variant" },
    { no: 2, name: "get_channel_response", kind: "message", T: vn, oneof: "payload_variant" },
    { no: 3, name: "get_owner_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 4, name: "get_owner_response", kind: "message", T: ue, oneof: "payload_variant" },
    { no: 5, name: "get_config_request", kind: "enum", T: E.proto3.getEnumType(Tr), oneof: "payload_variant" },
    { no: 6, name: "get_config_response", kind: "message", T: Dn, oneof: "payload_variant" },
    { no: 7, name: "get_module_config_request", kind: "enum", T: E.proto3.getEnumType(yr), oneof: "payload_variant" },
    { no: 8, name: "get_module_config_response", kind: "message", T: Mn, oneof: "payload_variant" },
    { no: 10, name: "get_canned_message_module_messages_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 11, name: "get_canned_message_module_messages_response", kind: "scalar", T: 9, oneof: "payload_variant" },
    { no: 12, name: "get_device_metadata_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 13, name: "get_device_metadata_response", kind: "message", T: Ot, oneof: "payload_variant" },
    { no: 14, name: "get_ringtone_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 15, name: "get_ringtone_response", kind: "scalar", T: 9, oneof: "payload_variant" },
    { no: 16, name: "get_device_connection_status_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 17, name: "get_device_connection_status_response", kind: "message", T: sr, oneof: "payload_variant" },
    { no: 18, name: "set_ham_mode", kind: "message", T: hr, oneof: "payload_variant" },
    { no: 19, name: "get_node_remote_hardware_pins_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 20, name: "get_node_remote_hardware_pins_response", kind: "message", T: br, oneof: "payload_variant" },
    { no: 21, name: "enter_dfu_mode_request", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 22, name: "delete_file_request", kind: "scalar", T: 9, oneof: "payload_variant" },
    { no: 32, name: "set_owner", kind: "message", T: ue, oneof: "payload_variant" },
    { no: 33, name: "set_channel", kind: "message", T: vn, oneof: "payload_variant" },
    { no: 34, name: "set_config", kind: "message", T: Dn, oneof: "payload_variant" },
    { no: 35, name: "set_module_config", kind: "message", T: Mn, oneof: "payload_variant" },
    { no: 36, name: "set_canned_message_module_messages", kind: "scalar", T: 9, oneof: "payload_variant" },
    { no: 37, name: "set_ringtone_message", kind: "scalar", T: 9, oneof: "payload_variant" },
    { no: 38, name: "remove_by_nodenum", kind: "scalar", T: 13, oneof: "payload_variant" },
    { no: 64, name: "begin_edit_settings", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 65, name: "commit_edit_settings", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 95, name: "reboot_ota_seconds", kind: "scalar", T: 5, oneof: "payload_variant" },
    { no: 96, name: "exit_simulator", kind: "scalar", T: 8, oneof: "payload_variant" },
    { no: 97, name: "reboot_seconds", kind: "scalar", T: 5, oneof: "payload_variant" },
    { no: 98, name: "shutdown_seconds", kind: "scalar", T: 5, oneof: "payload_variant" },
    { no: 99, name: "factory_reset", kind: "scalar", T: 5, oneof: "payload_variant" },
    { no: 100, name: "nodedb_reset", kind: "scalar", T: 5, oneof: "payload_variant" }
  ]
), Tr = E.proto3.makeEnum(
  "meshtastic.AdminMessage.ConfigType",
  [
    { no: 0, name: "DEVICE_CONFIG" },
    { no: 1, name: "POSITION_CONFIG" },
    { no: 2, name: "POWER_CONFIG" },
    { no: 3, name: "NETWORK_CONFIG" },
    { no: 4, name: "DISPLAY_CONFIG" },
    { no: 5, name: "LORA_CONFIG" },
    { no: 6, name: "BLUETOOTH_CONFIG" }
  ]
), yr = E.proto3.makeEnum(
  "meshtastic.AdminMessage.ModuleConfigType",
  [
    { no: 0, name: "MQTT_CONFIG" },
    { no: 1, name: "SERIAL_CONFIG" },
    { no: 2, name: "EXTNOTIF_CONFIG" },
    { no: 3, name: "STOREFORWARD_CONFIG" },
    { no: 4, name: "RANGETEST_CONFIG" },
    { no: 5, name: "TELEMETRY_CONFIG" },
    { no: 6, name: "CANNEDMSG_CONFIG" },
    { no: 7, name: "AUDIO_CONFIG" },
    { no: 8, name: "REMOTEHARDWARE_CONFIG" },
    { no: 9, name: "NEIGHBORINFO_CONFIG" },
    { no: 10, name: "AMBIENTLIGHTING_CONFIG" },
    { no: 11, name: "DETECTIONSENSOR_CONFIG" },
    { no: 12, name: "PAXCOUNTER_CONFIG" }
  ]
), hr = E.proto3.makeMessageType(
  "meshtastic.HamParameters",
  () => [
    {
      no: 1,
      name: "call_sign",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "tx_power",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 3,
      name: "frequency",
      kind: "scalar",
      T: 2
      /* ScalarType.FLOAT */
    },
    {
      no: 4,
      name: "short_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
), br = E.proto3.makeMessageType(
  "meshtastic.NodeRemoteHardwarePinsResponse",
  () => [
    { no: 1, name: "node_remote_hardware_pins", kind: "message", T: Ct, repeated: !0 }
  ]
), vr = {};
z(vr, {
  ChannelSet: () => Ua
});
var Ua = E.proto3.makeMessageType(
  "meshtastic.ChannelSet",
  () => [
    { no: 1, name: "settings", kind: "message", T: Zn, repeated: !0 },
    { no: 2, name: "lora_config", kind: "message", T: Jn }
  ]
), kr = {};
z(kr, {
  CannedMessageModuleConfig: () => Ja
});
var Ja = E.proto3.makeMessageType(
  "meshtastic.CannedMessageModuleConfig",
  () => [
    {
      no: 1,
      name: "messages",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
), Er = {};
z(Er, {
  DeviceProfile: () => Va
});
var Va = E.proto3.makeMessageType(
  "meshtastic.DeviceProfile",
  () => [
    { no: 1, name: "long_name", kind: "scalar", T: 9, opt: !0 },
    { no: 2, name: "short_name", kind: "scalar", T: 9, opt: !0 },
    { no: 3, name: "channel_url", kind: "scalar", T: 9, opt: !0 },
    { no: 4, name: "config", kind: "message", T: It, opt: !0 },
    { no: 5, name: "module_config", kind: "message", T: Pt, opt: !0 }
  ]
), Nr = {};
z(Nr, {
  ServiceEnvelope: () => Ga
});
var Ga = E.proto3.makeMessageType(
  "meshtastic.ServiceEnvelope",
  () => [
    { no: 1, name: "packet", kind: "message", T: ae },
    {
      no: 2,
      name: "channel_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "gateway_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
), Sr = {};
z(Sr, {
  Paxcount: () => qa
});
var qa = E.proto3.makeMessageType(
  "meshtastic.Paxcount",
  () => [
    {
      no: 1,
      name: "wifi",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "ble",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "uptime",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
), Or = {};
z(Or, {
  HardwareMessage: () => Ya,
  HardwareMessage_Type: () => wr
});
var Ya = E.proto3.makeMessageType(
  "meshtastic.HardwareMessage",
  () => [
    { no: 1, name: "type", kind: "enum", T: E.proto3.getEnumType(wr) },
    {
      no: 2,
      name: "gpio_mask",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 3,
      name: "gpio_value",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    }
  ]
), wr = E.proto3.makeEnum(
  "meshtastic.HardwareMessage.Type",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "WRITE_GPIOS" },
    { no: 2, name: "WATCH_GPIOS" },
    { no: 3, name: "GPIOS_CHANGED" },
    { no: 4, name: "READ_GPIOS" },
    { no: 5, name: "READ_GPIOS_REPLY" }
  ]
), Ir = {};
z(Ir, {
  RTTTLConfig: () => $a
});
var $a = E.proto3.makeMessageType(
  "meshtastic.RTTTLConfig",
  () => [
    {
      no: 1,
      name: "ringtone",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
), Pr = {};
z(Pr, {
  StoreAndForward: () => Wa,
  StoreAndForward_Heartbeat: () => Rr,
  StoreAndForward_History: () => Mr,
  StoreAndForward_RequestResponse: () => Cr,
  StoreAndForward_Statistics: () => Dr
});
var Wa = E.proto3.makeMessageType(
  "meshtastic.StoreAndForward",
  () => [
    { no: 1, name: "rr", kind: "enum", T: E.proto3.getEnumType(Cr) },
    { no: 2, name: "stats", kind: "message", T: Dr, oneof: "variant" },
    { no: 3, name: "history", kind: "message", T: Mr, oneof: "variant" },
    { no: 4, name: "heartbeat", kind: "message", T: Rr, oneof: "variant" },
    { no: 5, name: "text", kind: "scalar", T: 12, oneof: "variant" }
  ]
), Cr = E.proto3.makeEnum(
  "meshtastic.StoreAndForward.RequestResponse",
  [
    { no: 0, name: "UNSET" },
    { no: 1, name: "ROUTER_ERROR" },
    { no: 2, name: "ROUTER_HEARTBEAT" },
    { no: 3, name: "ROUTER_PING" },
    { no: 4, name: "ROUTER_PONG" },
    { no: 5, name: "ROUTER_BUSY" },
    { no: 6, name: "ROUTER_HISTORY" },
    { no: 7, name: "ROUTER_STATS" },
    { no: 8, name: "ROUTER_TEXT_DIRECT" },
    { no: 9, name: "ROUTER_TEXT_BROADCAST" },
    { no: 64, name: "CLIENT_ERROR" },
    { no: 65, name: "CLIENT_HISTORY" },
    { no: 66, name: "CLIENT_STATS" },
    { no: 67, name: "CLIENT_PING" },
    { no: 68, name: "CLIENT_PONG" },
    { no: 106, name: "CLIENT_ABORT" }
  ]
), Dr = E.proto3.makeMessageType(
  "meshtastic.StoreAndForward.Statistics",
  () => [
    {
      no: 1,
      name: "messages_total",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "messages_saved",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "messages_max",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 4,
      name: "up_time",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 5,
      name: "requests",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 6,
      name: "requests_history",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 7,
      name: "heartbeat",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 8,
      name: "return_max",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 9,
      name: "return_window",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "StoreAndForward_Statistics" }
), Mr = E.proto3.makeMessageType(
  "meshtastic.StoreAndForward.History",
  () => [
    {
      no: 1,
      name: "history_messages",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "window",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "last_request",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "StoreAndForward_History" }
), Rr = E.proto3.makeMessageType(
  "meshtastic.StoreAndForward.Heartbeat",
  () => [
    {
      no: 1,
      name: "period",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 2,
      name: "secondary",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ],
  { localName: "StoreAndForward_Heartbeat" }
), Xa = {};
z(Xa, {
  ChannelNumber: () => Lr,
  DeviceStatusEnum: () => Fr,
  Emitter: () => jr,
  EmitterScope: () => Ar
});
var Fr = /* @__PURE__ */ ((e) => (e[e.DeviceRestarting = 1] = "DeviceRestarting", e[e.DeviceDisconnected = 2] = "DeviceDisconnected", e[e.DeviceConnecting = 3] = "DeviceConnecting", e[e.DeviceReconnecting = 4] = "DeviceReconnecting", e[e.DeviceConnected = 5] = "DeviceConnected", e[e.DeviceConfiguring = 6] = "DeviceConfiguring", e[e.DeviceConfigured = 7] = "DeviceConfigured", e))(Fr || {}), Ar = /* @__PURE__ */ ((e) => (e[e.MeshDevice = 1] = "MeshDevice", e[e.SerialConnection = 2] = "SerialConnection", e[e.NodeSerialConnection = 3] = "NodeSerialConnection", e[e.BleConnection = 4] = "BleConnection", e[e.HttpConnection = 5] = "HttpConnection", e))(Ar || {}), jr = /* @__PURE__ */ ((e) => (e[e.Constructor = 0] = "Constructor", e[e.SendText = 1] = "SendText", e[e.SendWaypoint = 2] = "SendWaypoint", e[e.SendPacket = 3] = "SendPacket", e[e.SendRaw = 4] = "SendRaw", e[e.SetConfig = 5] = "SetConfig", e[e.SetModuleConfig = 6] = "SetModuleConfig", e[e.ConfirmSetConfig = 7] = "ConfirmSetConfig", e[e.SetOwner = 8] = "SetOwner", e[e.SetChannel = 9] = "SetChannel", e[e.ConfirmSetChannel = 10] = "ConfirmSetChannel", e[e.ClearChannel = 11] = "ClearChannel", e[e.GetChannel = 12] = "GetChannel", e[e.GetAllChannels = 13] = "GetAllChannels", e[e.GetConfig = 14] = "GetConfig", e[e.GetModuleConfig = 15] = "GetModuleConfig", e[e.GetOwner = 16] = "GetOwner", e[e.Configure = 17] = "Configure", e[e.HandleFromRadio = 18] = "HandleFromRadio", e[e.HandleMeshPacket = 19] = "HandleMeshPacket", e[e.Connect = 20] = "Connect", e[e.Ping = 21] = "Ping", e[e.ReadFromRadio = 22] = "ReadFromRadio", e[e.WriteToRadio = 23] = "WriteToRadio", e[e.SetDebugMode = 24] = "SetDebugMode", e[e.GetMetadata = 25] = "GetMetadata", e[e.ResetPeers = 26] = "ResetPeers", e[e.Shutdown = 27] = "Shutdown", e[e.Reboot = 28] = "Reboot", e[e.RebootOta = 29] = "RebootOta", e[e.FactoryReset = 30] = "FactoryReset", e[e.EnterDfuMode = 31] = "EnterDfuMode", e))(jr || {}), Lr = /* @__PURE__ */ ((e) => (e[e.Primary = 0] = "Primary", e[e.Channel1 = 1] = "Channel1", e[e.Channel2 = 2] = "Channel2", e[e.Channel3 = 3] = "Channel3", e[e.Channel4 = 4] = "Channel4", e[e.Channel5 = 5] = "Channel5", e[e.Channel6 = 6] = "Channel6", e[e.Admin = 7] = "Admin", e))(Lr || {});
export {
  Ea as p
};
