function n(r) {
  return (
    (n =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              'function' == typeof Symbol &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? 'symbol'
              : typeof n;
          }),
    n(r)
  );
}
function r(n, r) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(n) ||
    (function (n, r) {
      var t =
        null == n
          ? null
          : ('undefined' != typeof Symbol && n[Symbol.iterator]) ||
            n['@@iterator'];
      if (null != t) {
        var e,
          o,
          a,
          i,
          u = [],
          l = !0,
          c = !1;
        try {
          if (((a = (t = t.call(n)).next), 0 === r)) {
            if (Object(t) !== t) return;
            l = !1;
          } else
            for (
              ;
              !(l = (e = a.call(t)).done) && (u.push(e.value), u.length !== r);
              l = !0
            );
        } catch (n) {
          (c = !0), (o = n);
        } finally {
          try {
            if (!l && null != t.return && ((i = t.return()), Object(i) !== i))
              return;
          } finally {
            if (c) throw o;
          }
        }
        return u;
      }
    })(n, r) ||
    t(n, r) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    })()
  );
}
function t(n, r) {
  if (n) {
    if ('string' == typeof n) return e(n, r);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    return (
      'Object' === t && n.constructor && (t = n.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(n)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? e(n, r)
        : void 0
    );
  }
}
function e(n, r) {
  (null == r || r > n.length) && (r = n.length);
  for (var t = 0, e = new Array(r); t < r; t++) e[t] = n[t];
  return e;
}
function o(n, r) {
  var e =
    ('undefined' != typeof Symbol && n[Symbol.iterator]) || n['@@iterator'];
  if (!e) {
    if (
      Array.isArray(n) ||
      (e = t(n)) ||
      (r && n && 'number' == typeof n.length)
    ) {
      e && (n = e);
      var o = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
        },
        e: function (n) {
          throw n;
        },
        f: a,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var i,
    u = !0,
    l = !1;
  return {
    s: function () {
      e = e.call(n);
    },
    n: function () {
      var n = e.next();
      return (u = n.done), n;
    },
    e: function (n) {
      (l = !0), (i = n);
    },
    f: function () {
      try {
        u || null == e.return || e.return();
      } finally {
        if (l) throw i;
      }
    },
  };
}
var a = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array,
];
function i(r) {
  return null !== r && 'object' === n(r);
}
function u(n, r) {
  return r instanceof n;
}
function l(n) {
  return n.map(function (n) {
    return i(n) ? y(n) : n;
  });
}
function c(n, r) {
  return new n(r);
}
var f = [
  {
    validation: function (n) {
      return Array.isArray(n);
    },
    cloneFunc: l,
  },
  {
    validation: function (n) {
      return a.some(function (r) {
        return u(r, n);
      });
    },
    cloneFunc: l,
  },
  {
    validation: u.bind(null, Set),
    cloneFunc: function (n) {
      var r,
        t = new Set(),
        e = o(n);
      try {
        for (e.s(); !(r = e.n()).done; ) {
          var a = r.value;
          t.add(i(a) ? y(a) : a);
        }
      } catch (n) {
        e.e(n);
      } finally {
        e.f();
      }
      return t;
    },
  },
  {
    validation: u.bind(null, Map),
    cloneFunc: function (n) {
      var t,
        e = new Map(),
        a = o(n);
      try {
        for (a.s(); !(t = a.n()).done; ) {
          var u = r(t.value, 2),
            l = u[0],
            c = u[1];
          e.set(i(l) ? y(l) : l, i(c) ? y(c) : c);
        }
      } catch (n) {
        a.e(n);
      } finally {
        a.f();
      }
      return e;
    },
  },
  { validation: u.bind(null, Date), cloneFunc: c.bind(null, Date) },
  { validation: u.bind(null, RegExp), cloneFunc: c.bind(null, RegExp) },
  {
    validation: i,
    cloneFunc: function (n) {
      var r = {};
      for (var t in n) r[t] = i(n[t]) ? y(n[t]) : n[t];
      return r;
    },
  },
];
function y(n) {
  if (!i(n)) return n;
  var r,
    t = o(f);
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var e = r.value;
      if (e.validation(n)) return e.cloneFunc(n);
    }
  } catch (n) {
    t.e(n);
  } finally {
    t.f();
  }
}
export { y as default };
