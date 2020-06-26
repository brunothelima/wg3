function e(e, t) {
  const n = Object.create(null),
    o = e.split(',')
  for (let e = 0; e < o.length; e++) n[o[e]] = !0
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e]
}
const t = e(
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl'
  ),
  n = e('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly')
function o(e) {
  if (b(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        s = o(w(r) ? l(r) : r)
      if (s) for (const e in s) t[e] = s[e]
    }
    return t
  }
  if (C(e)) return e
}
const r = /;(?![^(]*\))/g,
  s = /:(.+)/
function l(e) {
  const t = {}
  return (
    e.split(r).forEach((e) => {
      if (e) {
        const n = e.split(s)
        n.length > 1 && (t[n[0].trim()] = n[1].trim())
      }
    }),
    t
  )
}
function i(e) {
  let t = ''
  if (w(e)) t = e
  else if (b(e)) for (let n = 0; n < e.length; n++) t += i(e[n]) + ' '
  else if (C(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const c = (e, t) =>
    t instanceof Map
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n]) => ((e[t + ' =>'] = n), e), {}) }
      : t instanceof Set
      ? { [`Set(${t.size})`]: [...t.values()] }
      : !C(t) || b(t) || A(t)
      ? t
      : String(t),
  a = {},
  u = [],
  f = () => {},
  p = () => !1,
  d = /^on[^a-z]/,
  h = (e) => d.test(e),
  m = Object.assign,
  v = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  g = Object.prototype.hasOwnProperty,
  y = (e, t) => g.call(e, t),
  b = Array.isArray,
  _ = (e) => 'function' == typeof e,
  w = (e) => 'string' == typeof e,
  x = (e) => 'symbol' == typeof e,
  C = (e) => null !== e && 'object' == typeof e,
  S = (e) => C(e) && _(e.then) && _(e.catch),
  E = Object.prototype.toString,
  k = (e) => E.call(e),
  A = (e) => '[object Object]' === k(e),
  R = e(
    'key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  O = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  F = /-(\w)/g,
  P = O((e) => e.replace(F, (e, t) => (t ? t.toUpperCase() : ''))),
  T = /\B([A-Z])/g,
  L = O((e) => e.replace(T, '-$1').toLowerCase()),
  M = O((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  j = (e, t) => e !== t && (e == e || t == t),
  $ = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  N = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, value: n })
  },
  U = new WeakMap(),
  I = []
let B
const V = Symbol(''),
  D = Symbol('')
function q(e, t = a) {
  ;(function (e) {
    return e && !0 === e._isEffect
  })(e) && (e = e.raw)
  const n = (function (e, t) {
    const n = function (...o) {
      if (!n.active) return t.scheduler ? void 0 : e(...o)
      if (!I.includes(n)) {
        H(n)
        try {
          return G.push(K), (K = !0), I.push(n), (B = n), e(...o)
        } finally {
          I.pop(), Q(), (B = I[I.length - 1])
        }
      }
    }
    return (n.id = W++), (n._isEffect = !0), (n.active = !0), (n.raw = e), (n.deps = []), (n.options = t), n
  })(e, t)
  return t.lazy || n(), n
}
function z(e) {
  e.active && (H(e), e.options.onStop && e.options.onStop(), (e.active = !1))
}
let W = 0
function H(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let K = !0
const G = []
function J() {
  G.push(K), (K = !1)
}
function Q() {
  const e = G.pop()
  K = void 0 === e || e
}
function X(e, t, n) {
  if (!K || void 0 === B) return
  let o = U.get(e)
  o || U.set(e, (o = new Map()))
  let r = o.get(n)
  r || o.set(n, (r = new Set())), r.has(B) || (r.add(B), B.deps.push(r))
}
function Y(e, t, n, o, r, s) {
  const l = U.get(e)
  if (!l) return
  const i = new Set(),
    c = new Set(),
    a = (e) => {
      e &&
        e.forEach((e) => {
          ;(e === B && K) || (e.options.computed ? c.add(e) : i.add(e))
        })
    }
  if ('clear' === t) l.forEach(a)
  else if ('length' === n && b(e))
    l.forEach((e, t) => {
      ;('length' === t || t >= o) && a(e)
    })
  else {
    void 0 !== n && a(l.get(n))
    const o = 'add' === t || ('delete' === t && !b(e))
    ;(o || ('set' === t && e instanceof Map)) && a(l.get(b(e) ? 'length' : V)), o && e instanceof Map && a(l.get(D))
  }
  const u = (e) => {
    e.options.scheduler ? e.options.scheduler(e) : e()
  }
  c.forEach(u), i.forEach(u)
}
const Z = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(x)
  ),
  ee = se(),
  te = se(!1, !0),
  ne = se(!0),
  oe = se(!0, !0),
  re = {}
function se(e = !1, t = !1) {
  return function (n, o, r) {
    if ('__v_isReactive' === o) return !e
    if ('__v_isReadonly' === o) return e
    if ('__v_raw' === o && r === (e ? n.__v_readonly : n.__v_reactive)) return n
    const s = b(n)
    if (s && y(re, o)) return Reflect.get(re, o, r)
    const l = Reflect.get(n, o, r)
    return (x(o) && Z.has(o)) || '__proto__' === o
      ? l
      : (e || X(n, 0, o), t ? l : ze(l) ? (s ? l : l.value) : C(l) ? (e ? Ne(l) : $e(l)) : l)
  }
}
;['includes', 'indexOf', 'lastIndexOf'].forEach((e) => {
  re[e] = function (...t) {
    const n = De(this)
    for (let e = 0, t = this.length; e < t; e++) X(n, 0, e + '')
    const o = n[e](...t)
    return -1 === o || !1 === o ? n[e](...t.map(De)) : o
  }
})
function le(e = !1) {
  return function (t, n, o, r) {
    const s = t[n]
    if (!e && ((o = De(o)), !b(t) && ze(s) && !ze(o))) return (s.value = o), !0
    const l = y(t, n),
      i = Reflect.set(t, n, o, r)
    return t === De(r) && (l ? j(o, s) && Y(t, 'set', n, o) : Y(t, 'add', n, o)), i
  }
}
function ie(e, t) {
  const n = Reflect.has(e, t)
  return X(e, 0, t), n
}
function ce(e) {
  return X(e, 0, V), Reflect.ownKeys(e)
}
const ae = {
    get: ee,
    set: le(),
    deleteProperty: function (e, t) {
      const n = y(e, t),
        o = (e[t], Reflect.deleteProperty(e, t))
      return o && n && Y(e, 'delete', t, void 0), o
    },
    has: ie,
    ownKeys: ce
  },
  ue = { get: ne, has: ie, ownKeys: ce, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  fe = m({}, ae, { get: te, set: le(!0) }),
  pe = (m({}, ue, { get: oe }), (e) => (C(e) ? $e(e) : e)),
  de = (e) => (C(e) ? Ne(e) : e),
  he = (e) => e,
  me = (e) => Reflect.getPrototypeOf(e)
function ve(e, t, n) {
  e = De(e)
  const o = De(t)
  t !== o && X(e, 0, t), X(e, 0, o)
  const { has: r, get: s } = me(e)
  return r.call(e, t) ? n(s.call(e, t)) : r.call(e, o) ? n(s.call(e, o)) : void 0
}
function ge(e) {
  const t = De(this),
    n = De(e)
  e !== n && X(t, 0, e), X(t, 0, n)
  const o = me(t).has
  return o.call(t, e) || o.call(t, n)
}
function ye(e) {
  return X((e = De(e)), 0, V), Reflect.get(me(e), 'size', e)
}
function be(e) {
  e = De(e)
  const t = De(this),
    n = me(t),
    o = n.has.call(t, e),
    r = n.add.call(t, e)
  return o || Y(t, 'add', e, e), r
}
function _e(e, t) {
  t = De(t)
  const n = De(this),
    { has: o, get: r, set: s } = me(n)
  let l = o.call(n, e)
  l || ((e = De(e)), (l = o.call(n, e)))
  const i = r.call(n, e),
    c = s.call(n, e, t)
  return l ? j(t, i) && Y(n, 'set', e, t) : Y(n, 'add', e, t), c
}
function we(e) {
  const t = De(this),
    { has: n, get: o, delete: r } = me(t)
  let s = n.call(t, e)
  s || ((e = De(e)), (s = n.call(t, e)))
  o && o.call(t, e)
  const l = r.call(t, e)
  return s && Y(t, 'delete', e, void 0), l
}
function xe() {
  const e = De(this),
    t = 0 !== e.size,
    n = me(e).clear.call(e)
  return t && Y(e, 'clear', void 0, void 0), n
}
function Ce(e, t) {
  return function (n, o) {
    const r = this,
      s = De(r),
      l = e ? de : t ? he : pe
    return (
      !e && X(s, 0, V),
      me(s).forEach.call(s, function (e, t) {
        return n.call(o, l(e), l(t), r)
      })
    )
  }
}
function Se(e, t, n) {
  return function (...o) {
    const r = De(this),
      s = r instanceof Map,
      l = 'entries' === e || (e === Symbol.iterator && s),
      i = 'keys' === e && s,
      c = me(r)[e].apply(r, o),
      a = t ? de : n ? he : pe
    return (
      !t && X(r, 0, i ? D : V),
      {
        next() {
          const { value: e, done: t } = c.next()
          return t ? { value: e, done: t } : { value: l ? [a(e[0]), a(e[1])] : a(e), done: t }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ee(e) {
  return function (...t) {
    return 'delete' !== e && this
  }
}
const ke = {
    get(e) {
      return ve(this, e, pe)
    },
    get size() {
      return ye(this)
    },
    has: ge,
    add: be,
    set: _e,
    delete: we,
    clear: xe,
    forEach: Ce(!1, !1)
  },
  Ae = {
    get(e) {
      return ve(this, e, he)
    },
    get size() {
      return ye(this)
    },
    has: ge,
    add: be,
    set: _e,
    delete: we,
    clear: xe,
    forEach: Ce(!1, !0)
  },
  Re = {
    get(e) {
      return ve(this, e, de)
    },
    get size() {
      return ye(this)
    },
    has: ge,
    add: Ee('add'),
    set: Ee('set'),
    delete: Ee('delete'),
    clear: Ee('clear'),
    forEach: Ce(!0, !1)
  }
function Oe(e, t) {
  const n = t ? Ae : e ? Re : ke
  return (t, o, r) =>
    '__v_isReactive' === o
      ? !e
      : '__v_isReadonly' === o
      ? e
      : '__v_raw' === o
      ? t
      : Reflect.get(y(n, o) && o in t ? n : t, o, r)
}
;['keys', 'values', 'entries', Symbol.iterator].forEach((e) => {
  ;(ke[e] = Se(e, !1, !1)), (Re[e] = Se(e, !0, !1)), (Ae[e] = Se(e, !1, !0))
})
const Fe = { get: Oe(!1, !1) },
  Pe = { get: Oe(!1, !0) },
  Te = { get: Oe(!0, !1) },
  Le = new Set([Set, Map, WeakMap, WeakSet]),
  Me = e('Object,Array,Map,Set,WeakMap,WeakSet'),
  je = (e) => !e.__v_skip && Me(((e) => k(e).slice(8, -1))(e)) && !Object.isFrozen(e)
function $e(e) {
  return e && e.__v_isReadonly ? e : Ue(e, !1, ae, Fe)
}
function Ne(e) {
  return Ue(e, !0, ue, Te)
}
function Ue(e, t, n, o) {
  if (!C(e)) return e
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e
  if (y(e, t ? '__v_readonly' : '__v_reactive')) return t ? e.__v_readonly : e.__v_reactive
  if (!je(e)) return e
  const r = new Proxy(e, Le.has(e.constructor) ? o : n)
  return N(e, t ? '__v_readonly' : '__v_reactive', r), r
}
function Ie(e) {
  return Be(e) ? Ie(e.__v_raw) : !(!e || !e.__v_isReactive)
}
function Be(e) {
  return !(!e || !e.__v_isReadonly)
}
function Ve(e) {
  return Ie(e) || Be(e)
}
function De(e) {
  return (e && De(e.__v_raw)) || e
}
const qe = (e) => (C(e) ? $e(e) : e)
function ze(e) {
  return !!e && !0 === e.__v_isRef
}
function We(e) {
  return He(e)
}
function He(e, t = !1) {
  if (ze(e)) return e
  let n = t ? e : qe(e)
  const o = {
    __v_isRef: !0,
    get value() {
      return X(o, 0, 'value'), n
    },
    set value(r) {
      j(De(r), e) && ((e = r), (n = t ? r : qe(r)), Y(o, 'set', 'value', void 0))
    }
  }
  return o
}
function Ke(e) {
  return ze(e) ? e.value : e
}
function Ge(e, t, n, o) {
  let r
  try {
    r = o ? e(...o) : e()
  } catch (e) {
    Qe(e, t, n)
  }
  return r
}
function Je(e, t, n, o) {
  if (_(e)) {
    const r = Ge(e, t, n, o)
    return (
      r &&
        S(r) &&
        r.catch((e) => {
          Qe(e, t, n)
        }),
      r
    )
  }
  const r = []
  for (let s = 0; s < e.length; s++) r.push(Je(e[s], t, n, o))
  return r
}
function Qe(e, t, n) {
  t && t.vnode
  if (t) {
    let o = t.parent
    const r = t.proxy,
      s = n
    for (; o; ) {
      const t = o.ec
      if (t) for (let n = 0; n < t.length; n++) if (t[n](e, r, s)) return
      o = o.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) return void Ge(l, null, 10, [e, r, s])
  }
  !(function (e, t, n) {
    throw e
  })(e)
}
const Xe = [],
  Ye = [],
  Ze = Promise.resolve()
let et = !1,
  tt = !1
function nt(e) {
  return e ? Ze.then(e) : Ze
}
function ot(e) {
  Xe.includes(e) || (Xe.push(e), rt())
}
function rt() {
  et || tt || ((tt = !0), nt(it))
}
function st(e) {
  if (Ye.length) {
    const e = [...new Set(Ye)]
    Ye.length = 0
    for (let t = 0; t < e.length; t++) e[t]()
  }
}
const lt = (e) => (null == e.id ? 1 / 0 : e.id)
function it(e) {
  let t
  for (tt = !1, et = !0, Xe.sort((e, t) => lt(e) - lt(t)); void 0 !== (t = Xe.shift()); ) null !== t && Ge(t, null, 14)
  st(), (et = !1), (Xe.length || Ye.length) && it()
}
let ct = null
function at(e) {
  ct = e
}
function ut(e) {
  const {
    type: t,
    parent: n,
    vnode: o,
    proxy: r,
    withProxy: s,
    props: l,
    slots: i,
    attrs: c,
    emit: a,
    renderCache: u
  } = e
  let f
  ct = e
  try {
    let p
    if (4 & o.shapeFlag) {
      const t = s || r
      ;(f = qt(e.render.call(t, t, u))), (p = c)
    } else {
      const e = t
      0, (f = qt(e.length > 1 ? e(l, { attrs: c, slots: i, emit: a }) : e(l, null))), (p = t.props ? c : ft(c))
    }
    let d = f
    0, !1 !== t.inheritAttrs && p && Object.keys(p).length && (1 & d.shapeFlag || 6 & d.shapeFlag) && (d = Bt(d, p))
    const h = n && n.type.__scopeId
    h && (d = Bt(d, { [h]: '' })),
      o.dirs && (d.dirs = o.dirs),
      o.transition && (d.transition = o.transition),
      t.inheritRef && null != o.ref && (d.ref = o.ref),
      (f = d)
  } catch (t) {
    Qe(t, e, 1), (f = It(Ot))
  }
  return (ct = null), f
}
const ft = (e) => {
  let t
  for (const n in e) ('class' === n || 'style' === n || h(n)) && ((t || (t = {}))[n] = e[n])
  return t
}
function pt(e, t) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let o = 0; o < n.length; o++) {
    const r = n[o]
    if (t[r] !== e[r]) return !0
  }
  return !1
}
function dt(e, t = ct) {
  return t
    ? function () {
        const n = ct
        at(t)
        const o = e.apply(null, arguments)
        return at(n), o
      }
    : e
}
let ht = null
const mt = []
function vt(e) {
  mt.push((ht = e))
}
function gt() {
  mt.pop(), (ht = mt[mt.length - 1] || null)
}
function yt(e) {
  return (t) =>
    dt(function () {
      vt(e)
      const n = t.apply(this, arguments)
      return gt(), n
    })
}
const bt = (e) => e && (e.disabled || '' === e.disabled),
  _t = (e, t) => {
    const n = e && e.to
    if (w(n)) {
      if (t) {
        return t(n)
      }
      return null
    }
    return n
  }
function wt(e, t, n, { o: { insert: o }, m: r }, s = 2) {
  0 === s && o(e.targetAnchor, t, n)
  const { el: l, anchor: i, shapeFlag: c, children: a, props: u } = e,
    f = 2 === s
  if ((f && o(l, t, n), (!f || bt(u)) && 16 & c)) for (let e = 0; e < a.length; e++) r(a[e], t, n, 2)
  f && o(i, t, n)
}
const xt = {
  __isTeleport: !0,
  process(e, t, n, o, r, s, l, i, c) {
    const {
        mc: a,
        pc: u,
        pbc: f,
        o: { insert: p, querySelector: d, createText: h, createComment: m }
      } = c,
      v = bt(t.props),
      { shapeFlag: g, children: y } = t
    if (null == e) {
      const e = (t.el = h('')),
        c = (t.anchor = h(''))
      p(e, n, o), p(c, n, o)
      const u = (t.target = _t(t.props, d)),
        f = (t.targetAnchor = h(''))
      u && p(f, u)
      const m = (e, t) => {
        16 & g && a(y, e, t, r, s, l, i)
      }
      v ? m(n, c) : u && m(u, f)
    } else {
      t.el = e.el
      const o = (t.anchor = e.anchor),
        a = (t.target = e.target),
        p = (t.targetAnchor = e.targetAnchor),
        h = bt(e.props),
        m = h ? n : a,
        g = h ? o : p
      if ((t.dynamicChildren ? f(e.dynamicChildren, t.dynamicChildren, m, r, s, l) : i || u(e, t, m, g, r, s, l), v))
        h || wt(t, n, o, c, 1)
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const e = (t.target = _t(t.props, d))
        e && wt(t, e, null, c, 0)
      } else h && wt(t, a, p, c, 1)
    }
  },
  remove(e, { r: t, o: { remove: n } }) {
    const { shapeFlag: o, children: r, anchor: s } = e
    if ((n(s), 16 & o)) for (let e = 0; e < r.length; e++) t(r[e])
  },
  move: wt,
  hydrate: function (e, t, n, o, r, { o: { nextSibling: s, parentNode: l, querySelector: i } }, c) {
    const a = (t.target = _t(t.props, i))
    if (a) {
      const i = a._lpa || a.firstChild
      16 & t.shapeFlag &&
        (bt(t.props)
          ? ((t.anchor = c(s(e), t, l(e), n, o, r)), (t.targetAnchor = i))
          : ((t.anchor = s(e)), (t.targetAnchor = c(i, t, a, n, o, r))),
        (a._lpa = t.targetAnchor && s(t.targetAnchor)))
    }
    return t.anchor && s(t.anchor)
  }
}
function Ct(e) {
  return kt('components', e) || e
}
const St = Symbol()
function Et(e) {
  return w(e) ? kt('components', e, !1) || e : e || St
}
function kt(e, t, n = !0) {
  const o = ct || no
  if (o) {
    let n, r
    const s = o[e]
    let l = s[t] || s[(n = P(t))] || s[(r = M(n))]
    if (!l && 'components' === e) {
      const e = o.type,
        s = e.displayName || e.name
      !s || (s !== t && s !== n && s !== r) || (l = e)
    }
    return l
  }
}
const At = Symbol(void 0),
  Rt = Symbol(void 0),
  Ot = Symbol(void 0),
  Ft = Symbol(void 0),
  Pt = []
let Tt = null
function Lt(e = !1) {
  Pt.push((Tt = e ? null : []))
}
function Mt(e, t, n, o, r) {
  const s = It(e, t, n, o, r, !0)
  return (s.dynamicChildren = Tt || u), Pt.pop(), (Tt = Pt[Pt.length - 1] || null), Tt && Tt.push(s), s
}
function jt(e) {
  return !!e && !0 === e.__v_isVNode
}
function $t(e, t) {
  return e.type === t.type && e.key === t.key
}
const Nt = ({ key: e }) => (null != e ? e : null),
  Ut = ({ ref: e }) => (null != e ? (b(e) ? e : [ct, e]) : null),
  It = function (e, t = null, n = null, r = 0, s = null, l = !1) {
    ;(e && e !== St) || (e = Ot)
    _(e) && '__vccOpts' in e && (e = e.__vccOpts)
    if (t) {
      ;(Ve(t) || '__vInternal' in t) && (t = m({}, t))
      let { class: e, style: n } = t
      e && !w(e) && (t.class = i(e)), C(n) && (Ve(n) && !b(n) && (n = m({}, n)), (t.style = o(n)))
    }
    const c = w(e) ? 1 : ((e) => e.__isSuspense)(e) ? 128 : ((e) => e.__isTeleport)(e) ? 64 : C(e) ? 4 : _(e) ? 2 : 0,
      a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Nt(t),
        ref: t && Ut(t),
        scopeId: ht,
        children: null,
        component: null,
        suspense: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: c,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null
      }
    ;(function e(t, n) {
      let o = 0
      const { shapeFlag: r } = t
      if (null == n) n = null
      else if (b(n)) o = 16
      else if ('object' == typeof n) {
        if ((1 & r || 64 & r) && n.default) return void e(t, n.default())
        ;(o = 32), n._ || '__vInternal' in n || (n._ctx = ct)
      } else
        _(n)
          ? ((n = { default: n, _ctx: ct }), (o = 32))
          : ((n = String(n)), 64 & r ? ((o = 16), (n = [Vt(n)])) : (o = 8))
      ;(t.children = n), (t.shapeFlag |= o)
    })(a, n),
      !l && Tt && 32 !== r && (r > 0 || 128 & c || 64 & c || 4 & c || 2 & c) && Tt.push(a)
    return a
  }
function Bt(e, t) {
  const n = t ? (e.props ? Ht(e.props, t) : m({}, t)) : e.props
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: n,
    key: n && Nt(n),
    ref: n && Ut(n),
    scopeId: e.scopeId,
    children: e.children,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t ? (e.dynamicChildren ? 16 | e.patchFlag : -2) : e.patchFlag,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    el: e.el,
    anchor: e.anchor
  }
}
function Vt(e = ' ', t = 0) {
  return It(Rt, null, e, t)
}
function Dt(e = '', t = !1) {
  return t ? (Lt(), Mt(Ot, null, e)) : It(Ot, null, e)
}
function qt(e) {
  return null == e || 'boolean' == typeof e
    ? It(Ot)
    : b(e)
    ? It(At, null, e)
    : 'object' == typeof e
    ? null === e.el
      ? e
      : Bt(e)
    : It(Rt, null, String(e))
}
function zt(e) {
  return null === e.el ? e : Bt(e)
}
const Wt = /^on|^vnode/
function Ht(...e) {
  const t = {}
  m(t, e[0])
  for (let n = 1; n < e.length; n++) {
    const r = e[n]
    for (const e in r)
      if ('class' === e) t.class !== r.class && (t.class = i([t.class, r.class]))
      else if ('style' === e) t.style = o([t.style, r.style])
      else if (Wt.test(e)) {
        const n = t[e],
          o = r[e]
        n !== o && (t[e] = n ? [].concat(n, r[e]) : o)
      } else t[e] = r[e]
  }
  return t
}
function Kt(e, t, ...n) {
  const o = e.vnode.props || a
  let r = o['on' + M(t)]
  !r && t.startsWith('update:') && ((t = L(t)), (r = o['on' + M(t)])), r && Je(r, e, 6, n)
}
function Gt(e, t) {
  return (
    h(t) &&
    (y(
      (e = (function (e) {
        if (e) {
          if (b(e)) {
            if (e._n) return e._n
            const t = {}
            return e.forEach((e) => (t[e] = null)), N(e, '_n', t), t
          }
          return e
        }
      })(e)),
      t[2].toLowerCase() + t.slice(3)
    ) ||
      y(e, t.slice(2)))
  )
}
function Jt(e, t, n, o = !1) {
  const r = {},
    s = {}
  N(s, '__vInternal', 1),
    Qt(e, t, r, s),
    n ? (e.props = o ? r : Ue(r, !1, fe, Pe)) : e.type.props ? (e.props = r) : (e.props = s),
    (e.attrs = s)
}
function Qt(e, t, n, o) {
  const [r, s] = Yt(e.type),
    l = e.type.emits
  if (t)
    for (const e in t) {
      const s = t[e]
      if (R(e)) continue
      let i
      r && y(r, (i = P(e))) ? (n[i] = s) : (l && Gt(l, e)) || (o[e] = s)
    }
  if (s) {
    const e = De(n)
    for (let t = 0; t < s.length; t++) {
      const o = s[t]
      n[o] = Xt(r, e, o, e[o])
    }
  }
}
function Xt(e, t, n, o) {
  const r = e[n]
  if (null != r) {
    const e = y(r, 'default')
    if (e && void 0 === o) {
      const e = r.default
      o = r.type !== Function && _(e) ? e() : e
    }
    r[0] && (y(t, n) || e ? !r[1] || ('' !== o && o !== L(n)) || (o = !0) : (o = !1))
  }
  return o
}
function Yt(e) {
  if (e.__props) return e.__props
  const t = e.props,
    n = {},
    o = []
  let r = !1
  if (!_(e)) {
    const t = (e) => {
      const [t, r] = Yt(e)
      m(n, t), r && o.push(...r)
    }
    e.extends && ((r = !0), t(e.extends)), e.mixins && ((r = !0), e.mixins.forEach(t))
  }
  if (!t && !r) return (e.__props = u)
  if (b(t))
    for (let e = 0; e < t.length; e++) {
      const o = P(t[e])
      nn(o) && (n[o] = a)
    }
  else if (t)
    for (const e in t) {
      const r = P(e)
      if (nn(r)) {
        const s = t[e],
          l = (n[r] = b(s) || _(s) ? { type: s } : s)
        if (l) {
          const e = tn(Boolean, l.type),
            t = tn(String, l.type)
          ;(l[0] = e > -1), (l[1] = t < 0 || e < t), (e > -1 || y(l, 'default')) && o.push(r)
        }
      }
    }
  const s = [n, o]
  return (e.__props = s), s
}
function Zt(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : ''
}
function en(e, t) {
  return Zt(e) === Zt(t)
}
function tn(e, t) {
  if (b(t)) {
    for (let n = 0, o = t.length; n < o; n++) if (en(t[n], e)) return n
  } else if (_(t)) return en(t, e) ? 0 : -1
  return -1
}
function nn(e) {
  return '$' !== e[0]
}
const on = (e) => '_' === e[0] || '$stable' === e,
  rn = (e) => (b(e) ? e.map(qt) : [qt(e)]),
  sn = (e, t, n) => dt((e) => rn(t(e)), n),
  ln = (e, t) => {
    const n = e._ctx
    for (const o in e) {
      if (on(o)) continue
      const r = e[o]
      if (_(r)) t[o] = sn(0, r, n)
      else if (null != r) {
        const e = rn(r)
        t[o] = () => e
      }
    }
  },
  cn = (e, t) => {
    const n = rn(t)
    e.slots.default = () => n
  }
function an(e, t, n, o) {
  const r = e.dirs,
    s = t && t.dirs
  for (let l = 0; l < r.length; l++) {
    const i = r[l]
    s && (i.oldValue = s[l].value)
    const c = i.dir[o]
    c && Je(c, n, 8, [e.el, i, e, t])
  }
}
function un() {
  return {
    config: {
      isNativeTag: p,
      devtools: !0,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: p,
      errorHandler: void 0,
      warnHandler: void 0
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null)
  }
}
function fn(e, t) {
  return function (n, o = null) {
    null == o || C(o) || (o = null)
    const r = un(),
      s = new Set()
    let l = !1
    const i = {
      _component: n,
      _props: o,
      _container: null,
      _context: r,
      get config() {
        return r.config
      },
      set config(e) {},
      use: (e, ...t) => (
        s.has(e) || (e && _(e.install) ? (s.add(e), e.install(i, ...t)) : _(e) && (s.add(e), e(i, ...t))), i
      ),
      mixin: (e) => (r.mixins.includes(e) || r.mixins.push(e), i),
      component: (e, t) => (t ? ((r.components[e] = t), i) : r.components[e]),
      directive: (e, t) => (t ? ((r.directives[e] = t), i) : r.directives[e]),
      mount(s, c) {
        if (!l) {
          const a = It(n, o)
          return (a.appContext = r), c && t ? t(a, s) : e(a, s), (l = !0), (i._container = s), a.component.proxy
        }
      },
      unmount() {
        l && e(null, i._container)
      },
      provide: (e, t) => ((r.provides[e] = t), i)
    }
    return i
  }
}
const pn = { scheduler: ot },
  dn = function (e, t) {
    var n
    t && !t.isResolved
      ? b(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : (b((n = e)) ? Ye.push(...n) : Ye.push(n), rt())
  },
  hn = (e, t, n, o) => {
    let r
    if (o) {
      const { el: e, component: t, shapeFlag: n, type: s } = o
      if (6 & n && s.inheritRef) return
      r = 4 & n ? t.proxy : e
    } else r = null
    const [s, l] = e,
      i = t && t[1],
      c = s.refs === a ? (s.refs = {}) : s.refs,
      u = s.setupState
    null != i && i !== l && (w(i) ? ((c[i] = null), y(u, i) && (u[i] = null)) : ze(i) && (i.value = null)),
      w(l) ? ((c[l] = r), y(u, l) && (u[l] = r)) : ze(l) ? (l.value = r) : _(l) && Ge(l, n, 12, [r, c])
  }
function mn(e) {
  return (function (e, t) {
    const {
        insert: n,
        remove: o,
        patchProp: r,
        createElement: s,
        createText: l,
        createComment: i,
        setText: c,
        setElementText: p,
        parentNode: d,
        nextSibling: h,
        setScopeId: v = f,
        cloneNode: g,
        insertStaticContent: b
      } = e,
      _ = (e, t, n, o = null, r = null, s = null, l = !1, i = !1) => {
        e && !$t(e, t) && ((o = ne(e)), G(e, r, s, !0), (e = null)),
          -2 === t.patchFlag && ((i = !1), (t.dynamicChildren = null))
        const { type: c, ref: a, shapeFlag: u } = t
        switch (c) {
          case Rt:
            w(e, t, n, o)
            break
          case Ot:
            x(e, t, n, o)
            break
          case Ft:
            null == e && C(t, n, o, l)
            break
          case At:
            M(e, t, n, o, r, s, l, i)
            break
          default:
            1 & u
              ? E(e, t, n, o, r, s, l, i)
              : 6 & u
              ? j(e, t, n, o, r, s, l, i)
              : (64 & u || 128 & u) && c.process(e, t, n, o, r, s, l, i, re)
        }
        null != a && r && hn(a, e && e.ref, r, t)
      },
      w = (e, t, o, r) => {
        if (null == e) n((t.el = l(t.children)), o, r)
        else {
          const n = (t.el = e.el)
          t.children !== e.children && c(n, t.children)
        }
      },
      x = (e, t, o, r) => {
        null == e ? n((t.el = i(t.children || '')), o, r) : (t.el = e.el)
      },
      C = (e, t, n, o) => {
        ;[e.el, e.anchor] = b(e.children, t, n, o)
      },
      E = (e, t, n, o, r, s, l, i) => {
        ;(l = l || 'svg' === t.type), null == e ? k(t, n, o, r, s, l, i) : O(e, t, r, s, l, i)
      },
      k = (e, t, o, l, i, c, a) => {
        let u, f
        const { type: d, props: h, shapeFlag: m, transition: y, scopeId: b, patchFlag: _, dirs: w } = e
        if (e.el && void 0 !== g && -1 === _) u = e.el = g(e.el)
        else {
          if (
            ((u = e.el = s(e.type, c, h && h.is)),
            8 & m
              ? p(u, e.children)
              : 16 & m && A(e.children, u, null, l, i, c && 'foreignObject' !== d, a || !!e.dynamicChildren),
            h)
          ) {
            for (const t in h) R(t) || r(u, t, null, h[t], c, e.children, l, i)
            ;(f = h.onVnodeBeforeMount) && vn(f, l, e)
          }
          w && an(e, null, l, 'beforeMount'), b && v(u, b)
          const t = l && l.type.__scopeId
          t && t !== b && v(u, t + '-s'), y && !y.persisted && y.beforeEnter(u)
        }
        n(u, t, o),
          ((f = h && h.onVnodeMounted) || (y && !y.persisted) || w) &&
            dn(() => {
              f && vn(f, l, e), y && !y.persisted && y.enter(u), w && an(e, null, l, 'mounted')
            }, i)
      },
      A = (e, t, n, o, r, s, l, i = 0) => {
        for (let c = i; c < e.length; c++) {
          const i = (e[c] = l ? zt(e[c]) : qt(e[c]))
          _(null, i, t, n, o, r, s, l)
        }
      },
      O = (e, t, n, o, s, l) => {
        const i = (t.el = e.el)
        let { patchFlag: c, dynamicChildren: u, dirs: f } = t
        const d = (e && e.props) || a,
          h = t.props || a
        let m
        if (((m = h.onVnodeBeforeUpdate) && vn(m, n, t, e), f && an(t, e, n, 'beforeUpdate'), c > 0)) {
          if (16 & c) T(i, t, d, h, n, o, s)
          else if (
            (2 & c && d.class !== h.class && r(i, 'class', null, h.class, s),
            4 & c && r(i, 'style', d.style, h.style, s),
            8 & c)
          ) {
            const l = t.dynamicProps
            for (let t = 0; t < l.length; t++) {
              const c = l[t],
                a = d[c],
                u = h[c]
              a !== u && r(i, c, a, u, s, e.children, n, o, te)
            }
          }
          1 & c && e.children !== t.children && p(i, t.children)
        } else l || null != u || T(i, t, d, h, n, o, s)
        const v = s && 'foreignObject' !== t.type
        u ? F(e.dynamicChildren, u, i, n, o, v) : l || D(e, t, i, null, n, o, v),
          ((m = h.onVnodeUpdated) || f) &&
            dn(() => {
              m && vn(m, n, t, e), f && an(t, e, n, 'updated')
            }, o)
      },
      F = (e, t, n, o, r, s) => {
        for (let l = 0; l < t.length; l++) {
          const i = e[l],
            c = t[l],
            a = i.type === At || !$t(i, c) || 6 & i.shapeFlag ? d(i.el) : n
          _(i, c, a, null, o, r, s, !0)
        }
      },
      T = (e, t, n, o, s, l, i) => {
        if (n !== o) {
          for (const c in o) {
            if (R(c)) continue
            const a = o[c],
              u = n[c]
            a !== u && r(e, c, u, a, i, t.children, s, l, te)
          }
          if (n !== a) for (const c in n) R(c) || c in o || r(e, c, n[c], null, i, t.children, s, l, te)
        }
      },
      M = (e, t, o, r, s, i, c, a) => {
        const u = (t.el = e ? e.el : l('')),
          f = (t.anchor = e ? e.anchor : l(''))
        let { patchFlag: p, dynamicChildren: d } = t
        p > 0 && (a = !0),
          null == e
            ? (n(u, o, r), n(f, o, r), A(t.children, o, f, s, i, c, a))
            : p > 0 && 64 & p && d
            ? F(e.dynamicChildren, d, o, s, i, c)
            : D(e, t, o, f, s, i, c, a)
      },
      j = (e, t, n, o, r, s, l, i) => {
        null == e ? (512 & t.shapeFlag ? r.ctx.activate(t, n, o, l, i) : U(t, n, o, r, s, l, i)) : I(e, t, i)
      },
      U = (e, t, n, o, r, s, l) => {
        const i = (e.component = (function (e, t, n) {
          const o = (t ? t.appContext : e.appContext) || eo,
            r = {
              uid: to++,
              vnode: e,
              parent: t,
              appContext: o,
              type: e.type,
              root: null,
              next: null,
              subTree: null,
              update: null,
              render: null,
              proxy: null,
              withProxy: null,
              effects: null,
              provides: t ? t.provides : Object.create(o.provides),
              accessCache: null,
              renderCache: [],
              ctx: a,
              data: a,
              props: a,
              attrs: a,
              slots: a,
              refs: a,
              setupState: a,
              setupContext: null,
              components: Object.create(o.components),
              directives: Object.create(o.directives),
              suspense: n,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              emit: null
            }
          return (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = Kt.bind(null, r)), r
        })(e, o, r))
        if (
          (Sn(e) && (i.ctx.renderer = re),
          (function (e, t = !1) {
            so = t
            const { props: n, children: o, shapeFlag: r } = e.vnode,
              s = 4 & r
            Jt(e, n, s, t),
              ((e, t) => {
                32 & e.vnode.shapeFlag
                  ? 1 === t._
                    ? (e.slots = t)
                    : ln(t, (e.slots = {}))
                  : ((e.slots = {}), t && cn(e, t)),
                  N(e.slots, '__vInternal', 1)
              })(e, o)
            const l = s
              ? (function (e, t) {
                  const n = e.type
                  ;(e.accessCache = {}), (e.proxy = new Proxy(e.ctx, Yn))
                  const { setup: o } = n
                  if (o) {
                    const n = (e.setupContext =
                      o.length > 1
                        ? (function (e) {
                            return { attrs: e.attrs, slots: e.slots, emit: e.emit }
                          })(e)
                        : null)
                    ;(no = e), J()
                    const r = Ge(o, e, 0, [e.props, n])
                    if ((Q(), (no = null), S(r))) {
                      if (t)
                        return r.then((t) => {
                          lo(e, t)
                        })
                      e.asyncDep = r
                    } else lo(e, r)
                  } else io(e)
                })(e, t)
              : void 0
            so = !1
          })(i),
          i.asyncDep)
        ) {
          if (!r) return
          if ((r.registerDep(i, B), !e.el)) {
            const e = (i.subTree = It(Ot))
            x(null, e, t, n)
          }
        } else B(i, e, t, n, r, s, l)
      },
      I = (e, t, n) => {
        const o = (t.component = e.component)
        if (
          (function (e, t, n) {
            const { props: o, children: r } = e,
              { props: s, children: l, patchFlag: i } = t
            if (t.dirs || t.transition) return !0
            if (i > 0) {
              if (1024 & i) return !0
              if (16 & i) return o ? pt(o, s) : !!s
              if (8 & i) {
                const e = t.dynamicProps
                for (let t = 0; t < e.length; t++) {
                  const n = e[t]
                  if (s[n] !== o[n]) return !0
                }
              }
            } else if (!n) return !((!r && !l) || (l && l.$stable)) || (o !== s && (o ? !s || pt(o, s) : !!s))
            return !1
          })(e, t, n)
        ) {
          if (o.asyncDep && !o.asyncResolved) return void V(o, t, n)
          ;(o.next = t),
            (function (e) {
              const t = Xe.indexOf(e)
              t > -1 && (Xe[t] = null)
            })(o.update),
            o.update()
        } else (t.component = e.component), (t.el = e.el)
      },
      B = (e, t, n, o, r, s, l) => {
        e.update = q(function () {
          if (e.isMounted) {
            let t,
              { next: n, bu: o, u: i, parent: c, vnode: u } = e
            n ? V(e, n, l) : (n = u)
            const f = ut(e),
              p = e.subTree
            ;(e.subTree = f),
              (n.el = u.el),
              o && $(o),
              (t = n.props && n.props.onVnodeBeforeUpdate) && vn(t, c, n, u),
              e.refs !== a && (e.refs = {}),
              _(p, f, d(p.el), ne(p), e, r, s),
              (n.el = f.el),
              null === n &&
                (function ({ vnode: e, parent: t }, n) {
                  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
                })(e, f.el),
              i && dn(i, r),
              (t = n.props && n.props.onVnodeUpdated) &&
                dn(() => {
                  vn(t, c, n, u)
                }, r)
          } else {
            let l
            const { el: i, props: c } = t,
              { bm: a, m: u, a: f, parent: p } = e,
              d = (e.subTree = ut(e))
            a && $(a),
              (l = c && c.onVnodeBeforeMount) && vn(l, p, t),
              i && le ? le(t.el, d, e, r) : (_(null, d, n, o, e, r, s), (t.el = d.el)),
              u && dn(u, r),
              (l = c && c.onVnodeMounted) &&
                dn(() => {
                  vn(l, p, t)
                }, r),
              f && 256 & t.shapeFlag && dn(f, r),
              (e.isMounted = !0)
          }
        }, pn)
      },
      V = (e, t, n) => {
        t.component = e
        const o = e.vnode.props
        ;(e.vnode = t),
          (e.next = null),
          (function (e, t, n, o) {
            const {
                props: r,
                attrs: s,
                vnode: { patchFlag: l }
              } = e,
              i = De(r),
              [c] = Yt(e.type)
            if (!(o || l > 0) || 16 & l) {
              let o
              Qt(e, t, r, s)
              for (const e in i)
                (t && (y(t, e) || ((o = L(e)) !== e && y(t, o)))) ||
                  (c ? n && void 0 !== n[o] && (r[e] = Xt(c, t || a, e, void 0)) : delete r[e])
              if (s !== i) for (const e in s) (t && y(t, e)) || delete s[e]
            } else if (8 & l) {
              const n = e.vnode.dynamicProps
              for (let e = 0; e < n.length; e++) {
                const o = n[e],
                  l = t[o]
                if (c)
                  if (y(s, o)) s[o] = l
                  else {
                    const e = P(o)
                    r[e] = Xt(c, i, e, l)
                  }
                else s[o] = l
              }
            }
            Y(e, 'set', '$attrs')
          })(e, t.props, o, n),
          ((e, t) => {
            const { vnode: n, slots: o } = e
            let r = !0,
              s = a
            if (
              (32 & n.shapeFlag
                ? (1 === t._ ? (1024 & n.patchFlag ? m(o, t) : (r = !1)) : ((r = !t.$stable), ln(t, o)), (s = t))
                : t && (cn(e, t), (s = { default: 1 })),
              r)
            )
              for (const e in o) on(e) || e in s || delete o[e]
          })(e, t.children)
      },
      D = (e, t, n, o, r, s, l, i = !1) => {
        const c = e && e.children,
          a = e ? e.shapeFlag : 0,
          u = t.children,
          { patchFlag: f, shapeFlag: d } = t
        if (f > 0) {
          if (128 & f) return void H(c, u, n, o, r, s, l, i)
          if (256 & f) return void W(c, u, n, o, r, s, l, i)
        }
        8 & d
          ? (16 & a && te(c, r, s), u !== c && p(n, u))
          : 16 & a
          ? 16 & d
            ? H(c, u, n, o, r, s, l, i)
            : te(c, r, s, !0)
          : (8 & a && p(n, ''), 16 & d && A(u, n, o, r, s, l, i))
      },
      W = (e, t, n, o, r, s, l, i) => {
        t = t || u
        const c = (e = e || u).length,
          a = t.length,
          f = Math.min(c, a)
        let p
        for (p = 0; p < f; p++) {
          const o = (t[p] = i ? zt(t[p]) : qt(t[p]))
          _(e[p], o, n, null, r, s, l, i)
        }
        c > a ? te(e, r, s, !0, f) : A(t, n, o, r, s, l, i, f)
      },
      H = (e, t, n, o, r, s, l, i) => {
        let c = 0
        const a = t.length
        let f = e.length - 1,
          p = a - 1
        for (; c <= f && c <= p; ) {
          const o = e[c],
            a = (t[c] = i ? zt(t[c]) : qt(t[c]))
          if (!$t(o, a)) break
          _(o, a, n, null, r, s, l, i), c++
        }
        for (; c <= f && c <= p; ) {
          const o = e[f],
            c = (t[p] = i ? zt(t[p]) : qt(t[p]))
          if (!$t(o, c)) break
          _(o, c, n, null, r, s, l, i), f--, p--
        }
        if (c > f) {
          if (c <= p) {
            const e = p + 1,
              u = e < a ? t[e].el : o
            for (; c <= p; ) _(null, (t[c] = i ? zt(t[c]) : qt(t[c])), n, u, r, s, l), c++
          }
        } else if (c > p) for (; c <= f; ) G(e[c], r, s, !0), c++
        else {
          const d = c,
            h = c,
            m = new Map()
          for (c = h; c <= p; c++) {
            const e = (t[c] = i ? zt(t[c]) : qt(t[c]))
            null != e.key && m.set(e.key, c)
          }
          let v,
            g = 0
          const y = p - h + 1
          let b = !1,
            w = 0
          const x = new Array(y)
          for (c = 0; c < y; c++) x[c] = 0
          for (c = d; c <= f; c++) {
            const o = e[c]
            if (g >= y) {
              G(o, r, s, !0)
              continue
            }
            let a
            if (null != o.key) a = m.get(o.key)
            else
              for (v = h; v <= p; v++)
                if (0 === x[v - h] && $t(o, t[v])) {
                  a = v
                  break
                }
            void 0 === a
              ? G(o, r, s, !0)
              : ((x[a - h] = c + 1), a >= w ? (w = a) : (b = !0), _(o, t[a], n, null, r, s, l, i), g++)
          }
          const C = b
            ? (function (e) {
                const t = e.slice(),
                  n = [0]
                let o, r, s, l, i
                const c = e.length
                for (o = 0; o < c; o++) {
                  const c = e[o]
                  if (0 !== c) {
                    if (((r = n[n.length - 1]), e[r] < c)) {
                      ;(t[o] = r), n.push(o)
                      continue
                    }
                    for (s = 0, l = n.length - 1; s < l; ) (i = ((s + l) / 2) | 0), e[n[i]] < c ? (s = i + 1) : (l = i)
                    c < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), (n[s] = o))
                  }
                }
                ;(s = n.length), (l = n[s - 1])
                for (; s-- > 0; ) (n[s] = l), (l = t[l])
                return n
              })(x)
            : u
          for (v = C.length - 1, c = y - 1; c >= 0; c--) {
            const e = h + c,
              i = t[e],
              u = e + 1 < a ? t[e + 1].el : o
            0 === x[c] ? _(null, i, n, u, r, s, l) : b && (v < 0 || c !== C[v] ? K(i, n, u, 2) : v--)
          }
        }
      },
      K = (e, t, o, r, s = null) => {
        const { el: l, type: i, transition: c, children: a, shapeFlag: u } = e
        if (6 & u) return void K(e.component.subTree, t, o, r)
        if (128 & u) return void e.suspense.move(t, o, r)
        if (64 & u) return void i.move(e, t, o, re)
        if (i === At) {
          n(l, t, o)
          for (let e = 0; e < a.length; e++) K(a[e], t, o, r)
          return void n(e.anchor, t, o)
        }
        if (2 !== r && 1 & u && c)
          if (0 === r) c.beforeEnter(l), n(l, t, o), dn(() => c.enter(l), s)
          else {
            const { leave: e, delayLeave: r, afterLeave: s } = c,
              i = () => n(l, t, o),
              a = () => {
                e(l, () => {
                  i(), s && s()
                })
              }
            r ? r(l, i, a) : a()
          }
        else n(l, t, o)
      },
      G = (e, t, n, o = !1) => {
        const { type: r, props: s, ref: l, children: i, dynamicChildren: c, shapeFlag: a, patchFlag: u, dirs: f } = e,
          p = 1 & a && f,
          d = 256 & a
        let h
        if ((null != l && t && hn(l, null, t, null), (h = s && s.onVnodeBeforeUnmount) && !d && vn(h, t, e), 6 & a))
          d ? t.ctx.deactivate(e) : ee(e.component, n, o)
        else {
          if (128 & a) return void e.suspense.unmount(n, o)
          p && an(e, null, t, 'beforeUnmount'),
            c && (r !== At || (u > 0 && 64 & u)) ? te(c, t, n) : 16 & a && te(i, t, n),
            64 & a && e.type.remove(e, re),
            o && X(e)
        }
        ;(!(h = s && s.onVnodeUnmounted) && !p) ||
          d ||
          dn(() => {
            h && vn(h, t, e), p && an(e, null, t, 'unmounted')
          }, n)
      },
      X = (e) => {
        const { type: t, el: n, anchor: r, transition: s } = e
        if (t === At) return void Z(n, r)
        const l = () => {
          o(n), s && !s.persisted && s.afterLeave && s.afterLeave()
        }
        if (1 & e.shapeFlag && s && !s.persisted) {
          const { leave: t, delayLeave: o } = s,
            r = () => t(n, l)
          o ? o(e.el, l, r) : r()
        } else l()
      },
      Z = (e, t) => {
        let n
        for (; e !== t; ) (n = h(e)), o(e), (e = n)
        o(t)
      },
      ee = (e, t, n) => {
        const { bum: o, effects: r, update: s, subTree: l, um: i, da: c, isDeactivated: a } = e
        if ((o && $(o), r)) for (let e = 0; e < r.length; e++) z(r[e])
        s && (z(s), G(l, e, t, n)),
          i && dn(i, t),
          c && !a && 256 & e.vnode.shapeFlag && dn(c, t),
          dn(() => {
            e.isUnmounted = !0
          }, t),
          !t ||
            t.isResolved ||
            t.isUnmounted ||
            !e.asyncDep ||
            e.asyncResolved ||
            (t.deps--, 0 === t.deps && t.resolve())
      },
      te = (e, t, n, o = !1, r = 0) => {
        for (let s = r; s < e.length; s++) G(e[s], t, n, o)
      },
      ne = (e) =>
        6 & e.shapeFlag ? ne(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : h(e.anchor || e.el),
      oe = (e, t) => {
        null == e ? t._vnode && G(t._vnode, null, null, !0) : _(t._vnode || null, e, t), st(), (t._vnode = e)
      },
      re = { p: _, um: G, m: K, r: X, mt: U, mc: A, pc: D, pbc: F, n: ne, o: e }
    let se, le
    t && ([se, le] = t(re))
    return { render: oe, hydrate: se, createApp: fn(oe, se) }
  })(e)
}
function vn(e, t, n, o = null) {
  Je(e, t, 7, [n, o])
}
function gn() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Fn(() => {
      e.isMounted = !0
    }),
    Ln(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const yn = {
  name: 'BaseTransition',
  inheritRef: !0,
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Function,
    onEnter: Function,
    onAfterEnter: Function,
    onEnterCancelled: Function,
    onBeforeLeave: Function,
    onLeave: Function,
    onAfterLeave: Function,
    onLeaveCancelled: Function
  },
  setup(e, { slots: t }) {
    const n = oo(),
      o = gn()
    return () => {
      const r = t.default && t.default()
      if (!r || !r.length) return
      const s = De(e),
        { mode: l } = s,
        i = r[0]
      if (o.isLeaving) return wn(i)
      const c = xn(i)
      if (!c) return wn(i)
      const a = (c.transition = _n(c, s, o, n)),
        u = n.subTree,
        f = u && xn(u)
      if (f && f.type !== Ot && !$t(c, f)) {
        const e = f.transition,
          t = _n(f, s, o, n)
        if ((Cn(f, t), 'out-in' === l))
          return (
            (o.isLeaving = !0),
            (t.afterLeave = () => {
              ;(o.isLeaving = !1), n.update()
            }),
            wn(i)
          )
        'in-out' === l &&
          (delete e.delayedLeave,
          (t.delayLeave = (e, t, n) => {
            ;(bn(o, f)[String(f.key)] = f),
              (e._leaveCb = () => {
                t(), (e._leaveCb = void 0), delete a.delayedLeave
              }),
              (a.delayedLeave = n)
          }))
      }
      return i
    }
  }
}
function bn(e, t) {
  const { leavingVNodes: n } = e
  let o = n.get(t.type)
  return o || ((o = Object.create(null)), n.set(t.type, o)), o
}
function _n(
  e,
  {
    appear: t,
    persisted: n = !1,
    onBeforeEnter: o,
    onEnter: r,
    onAfterEnter: s,
    onEnterCancelled: l,
    onBeforeLeave: i,
    onLeave: c,
    onAfterLeave: a,
    onLeaveCancelled: u
  },
  f,
  p
) {
  const d = String(e.key),
    h = bn(f, e),
    m = (e, t) => {
      e && Je(e, p, 9, t)
    },
    v = {
      persisted: n,
      beforeEnter(n) {
        if (!t && !f.isMounted) return
        n._leaveCb && n._leaveCb(!0)
        const r = h[d]
        r && $t(e, r) && r.el._leaveCb && r.el._leaveCb(), m(o, [n])
      },
      enter(e) {
        if (!t && !f.isMounted) return
        let n = !1
        const o = (e._enterCb = (t) => {
          n || ((n = !0), m(t ? l : s, [e]), v.delayedLeave && v.delayedLeave(), (e._enterCb = void 0))
        })
        r ? r(e, o) : o()
      },
      leave(t, n) {
        const o = String(e.key)
        if ((t._enterCb && t._enterCb(!0), f.isUnmounting)) return n()
        m(i, [t])
        let r = !1
        const s = (t._leaveCb = (s) => {
          r || ((r = !0), n(), m(s ? u : a, [t]), (t._leaveCb = void 0), h[o] === e && delete h[o])
        })
        ;(h[o] = e), c ? c(t, s) : s()
      }
    }
  return v
}
function wn(e) {
  if (Sn(e)) return ((e = Bt(e)).children = null), e
}
function xn(e) {
  return Sn(e) ? (e.children ? e.children[0] : void 0) : e
}
function Cn(e, t) {
  6 & e.shapeFlag && e.component ? Cn(e.component.subTree, t) : (e.transition = t)
}
const Sn = (e) => e.type.__isKeepAlive
function En(e, t, n = no) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n
      for (; t; ) {
        if (t.isDeactivated) return
        t = t.parent
      }
      e()
    })
  if ((An(t, o, n), n)) {
    let e = n.parent
    for (; e && e.parent; ) Sn(e.parent.vnode) && kn(o, t, n, e), (e = e.parent)
  }
}
function kn(e, t, n, o) {
  An(t, e, o, !0),
    Mn(() => {
      v(o[t], e)
    }, n)
}
function An(e, t, n = no, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          J(), ro(n)
          const r = Je(t, n, e, o)
          return ro(null), Q(), r
        })
    o ? r.unshift(s) : r.push(s)
  }
}
const Rn = (e) => (t, n = no) => !so && An(e, t, n),
  On = Rn('bm'),
  Fn = Rn('m'),
  Pn = Rn('bu'),
  Tn = Rn('u'),
  Ln = Rn('bum'),
  Mn = Rn('um'),
  jn = Rn('rtg'),
  $n = Rn('rtc'),
  Nn = (e) => e(),
  Un = {}
function In(e, t, n) {
  return (function (e, t, { immediate: n, deep: o, flush: r, onTrack: s, onTrigger: l } = a) {
    const i = no
    let c, u
    b(e)
      ? (c = () => e.map((e) => (ze(e) ? e.value : Ie(e) ? Vn(e) : _(e) ? Ge(e, i, 2) : void 0)))
      : ze(e)
      ? (c = () => e.value)
      : Ie(e)
      ? ((c = () => e), (o = !0))
      : (c = _(e)
          ? t
            ? () => Ge(e, i, 2)
            : () => {
                if (!i || !i.isUnmounted) return u && u(), Ge(e, i, 3, [p])
              }
          : f)
    if (t && o) {
      const e = c
      c = () => Vn(e())
    }
    const p = (e) => {
      u = g.options.onStop = () => {
        Ge(e, i, 4)
      }
    }
    let d = b(e) ? [] : Un
    const h = t
      ? () => {
          if (i && i.isUnmounted) return
          const e = g()
          ;(o || j(e, d)) && (u && u(), Je(t, i, 3, [e, d === Un ? void 0 : d, p]), (d = e))
        }
      : void 0
    let m
    m =
      'sync' === r
        ? Nn
        : 'pre' === r
        ? (e) => {
            !i || i.isMounted ? ot(e) : e()
          }
        : (e) => dn(e, i && i.suspense)
    const g = q(c, { lazy: !0, computed: !0, onTrack: s, onTrigger: l, scheduler: h ? () => m(h) : m })
    co(g), h ? (n ? h() : (d = g())) : g()
    return () => {
      z(g), i && v(i.effects, g)
    }
  })(e, t, n)
}
function Bn(e, t, n) {
  const o = this.proxy,
    r = In(w(e) ? () => o[e] : e.bind(o), t.bind(o), n)
  return Ln(r, this), r
}
function Vn(e, t = new Set()) {
  if (!C(e) || t.has(e)) return e
  if ((t.add(e), b(e))) for (let n = 0; n < e.length; n++) Vn(e[n], t)
  else if (e instanceof Map)
    e.forEach((n, o) => {
      Vn(e.get(o), t)
    })
  else if (e instanceof Set)
    e.forEach((e) => {
      Vn(e, t)
    })
  else for (const n in e) Vn(e[n], t)
  return e
}
function Dn(e, t) {
  if (no) {
    let n = no.provides
    const o = no.parent && no.parent.provides
    o === n && (n = no.provides = Object.create(o)), (n[e] = t)
  } else;
}
function qn(e, t) {
  const n = no || ct
  if (n) {
    const o = n.provides
    if (e in o) return o[e]
    if (arguments.length > 1) return t
  }
}
function zn(e, t, n = [], o = [], r = !1) {
  const {
      mixins: s,
      extends: l,
      data: i,
      computed: c,
      methods: a,
      watch: u,
      provide: p,
      inject: d,
      components: h,
      directives: v,
      beforeMount: g,
      mounted: y,
      beforeUpdate: w,
      updated: x,
      activated: S,
      deactivated: E,
      beforeUnmount: k,
      unmounted: A,
      renderTracked: R,
      renderTriggered: O,
      errorCaptured: F
    } = t,
    P = e.proxy,
    T = e.ctx,
    L = e.appContext.mixins
  if ((r || (Wn('beforeCreate', t, P, L), Kn(e, L, n, o)), l && zn(e, l, n, o, !0), s && Kn(e, s, n, o), d))
    if (b(d))
      for (let e = 0; e < d.length; e++) {
        const t = d[e]
        T[t] = qn(t)
      }
    else
      for (const e in d) {
        const t = d[e]
        C(t) ? (T[e] = qn(t.from, t.default)) : (T[e] = qn(t))
      }
  if (a)
    for (const e in a) {
      const t = a[e]
      _(t) && (T[e] = t.bind(P))
    }
  if ((i && (r ? n.push(i) : Gn(e, i, P)), r || (n.length && n.forEach((t) => Gn(e, t, P))), c))
    for (const e in c) {
      const t = c[e],
        n = ao({
          get: _(t) ? t.bind(P, P) : _(t.get) ? t.get.bind(P, P) : f,
          set: !_(t) && _(t.set) ? t.set.bind(P) : f
        })
      Object.defineProperty(T, e, { enumerable: !0, configurable: !0, get: () => n.value, set: (e) => (n.value = e) })
    }
  if (
    (u && o.push(u),
    !r &&
      o.length &&
      o.forEach((e) => {
        for (const t in e) Jn(e[t], T, P, t)
      }),
    p)
  ) {
    const e = _(p) ? p.call(P) : p
    for (const t in e) Dn(t, e[t])
  }
  var M
  h && m(e.components, h),
    v && m(e.directives, v),
    r || Wn('created', t, P, L),
    g && On(g.bind(P)),
    y && Fn(y.bind(P)),
    w && Pn(w.bind(P)),
    x && Tn(x.bind(P)),
    S && En(S.bind(P), 'a', M),
    E &&
      (function (e, t) {
        En(e, 'da', t)
      })(E.bind(P)),
    F &&
      ((e, t = no) => {
        An('ec', e, t)
      })(F.bind(P)),
    R && $n(R.bind(P)),
    O && jn(O.bind(P)),
    k && Ln(k.bind(P)),
    A && Mn(A.bind(P))
}
function Wn(e, t, n, o) {
  Hn(e, o, n)
  const r = t.extends && t.extends[e]
  r && r.call(n)
  const s = t.mixins
  s && Hn(e, s, n)
  const l = t[e]
  l && l.call(n)
}
function Hn(e, t, n) {
  for (let o = 0; o < t.length; o++) {
    const r = t[o][e]
    r && r.call(n)
  }
}
function Kn(e, t, n, o) {
  for (let r = 0; r < t.length; r++) zn(e, t[r], n, o, !0)
}
function Gn(e, t, n) {
  const o = t.call(n, n)
  C(o) && (e.data === a ? (e.data = $e(o)) : m(e.data, o))
}
function Jn(e, t, n, o) {
  const r = () => n[o]
  if (w(e)) {
    const n = t[e]
    _(n) && In(r, n)
  } else _(e) ? In(r, e.bind(n)) : C(e) && (b(e) ? e.forEach((e) => Jn(e, t, n, o)) : In(r, e.handler.bind(n), e))
}
function Qn(e, t, n) {
  const o = n.appContext.config.optionMergeStrategies
  for (const r in t) {
    const s = o && o[r]
    s ? (e[r] = s(e[r], t[r], n.proxy, r)) : y(e, r) || (e[r] = t[r])
  }
}
const Xn = {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => e.parent && e.parent.proxy,
    $root: (e) => e.root && e.root.proxy,
    $emit: (e) => e.emit,
    $options: (e) =>
      (function (e) {
        const t = e.type,
          { __merged: n, mixins: o, extends: r } = t
        if (n) return n
        const s = e.appContext.mixins
        if (!s.length && !o && !r) return t
        const l = {}
        return (
          s.forEach((t) => Qn(l, t, e)),
          r && Qn(l, r, e),
          o && o.forEach((t) => Qn(l, t, e)),
          Qn(l, t, e),
          (t.__merged = l)
        )
      })(e),
    $forceUpdate: (e) => () => ot(e.update),
    $nextTick: () => nt,
    $watch: (e) => Bn.bind(e)
  },
  Yn = {
    get({ _: e }, t) {
      const { ctx: n, setupState: o, data: r, props: s, accessCache: l, type: i, appContext: c } = e
      if ('__v_skip' === t) return !0
      if ('$' !== t[0]) {
        const e = l[t]
        if (void 0 !== e)
          switch (e) {
            case 0:
              return o[t]
            case 1:
              return r[t]
            case 3:
              return n[t]
            case 2:
              return s[t]
          }
        else {
          if (o !== a && y(o, t)) return (l[t] = 0), o[t]
          if (r !== a && y(r, t)) return (l[t] = 1), r[t]
          if (i.props && y(Yt(i)[0], t)) return (l[t] = 2), s[t]
          if (n !== a && y(n, t)) return (l[t] = 3), n[t]
          l[t] = 4
        }
      }
      const u = Xn[t]
      let f, p
      return u
        ? ('$attrs' === t && X(e, 0, t), u(e))
        : (f = i.__cssModules) && (f = f[t])
        ? f
        : n !== a && y(n, t)
        ? ((l[t] = 3), n[t])
        : ((p = c.config.globalProperties), y(p, t) ? p[t] : void 0)
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: s } = e
      if (r !== a && y(r, t)) r[t] = n
      else if (o !== a && y(o, t)) o[t] = n
      else if (t in e.props) return !1
      return ('$' !== t[0] || !(t.slice(1) in e)) && ((s[t] = n), !0)
    },
    has: ({ _: { data: e, setupState: t, accessCache: n, ctx: o, type: r, appContext: s } }, l) =>
      void 0 !== n[l] ||
      (e !== a && y(e, l)) ||
      (t !== a && y(t, l)) ||
      (r.props && y(Yt(r)[0], l)) ||
      y(o, l) ||
      y(Xn, l) ||
      y(s.config.globalProperties, l)
  },
  Zn = m({}, Yn, {
    get(e, t) {
      if (t !== Symbol.unscopables) return Yn.get(e, t, e)
    },
    has: (e, n) => '_' !== n[0] && !t(n)
  }),
  eo = un()
let to = 0
let no = null
const oo = () => no || ct,
  ro = (e) => {
    no = e
  }
let so = !1
function lo(e, t, n) {
  _(t) ? (e.render = t) : C(t) && (e.setupState = $e(t)), io(e)
}
function io(e, t) {
  const n = e.type
  e.render || ((e.render = n.render || f), e.render._rc && (e.withProxy = new Proxy(e.ctx, Zn))),
    (no = e),
    zn(e, n),
    (no = null)
}
function co(e) {
  no && (no.effects || (no.effects = [])).push(e)
}
function ao(e) {
  const t = (function (e) {
    let t, n
    _(e) ? ((t = e), (n = f)) : ((t = e.get), (n = e.set))
    let o,
      r,
      s = !0
    const l = q(t, {
      lazy: !0,
      computed: !0,
      scheduler: () => {
        s || ((s = !0), Y(r, 'set', 'value'))
      }
    })
    return (
      (r = {
        __v_isRef: !0,
        effect: l,
        get value() {
          return s && ((o = l()), (s = !1)), X(r, 0, 'value'), o
        },
        set value(e) {
          n(e)
        }
      }),
      r
    )
  })(e)
  return co(t.effect), t
}
function uo(e) {
  return _(e) ? { setup: e } : e
}
function fo(e, t, n) {
  return 2 === arguments.length
    ? C(t) && !b(t)
      ? jt(t)
        ? It(e, null, [t])
        : It(e, t)
      : It(e, null, t)
    : (jt(n) && (n = [n]), It(e, t, n))
}
function po(e, t) {
  let n
  if (b(e) || w(e)) {
    n = new Array(e.length)
    for (let o = 0, r = e.length; o < r; o++) n[o] = t(e[o], o)
  } else if ('number' == typeof e) {
    n = new Array(e)
    for (let o = 0; o < e; o++) n[o] = t(o + 1, o)
  } else if (C(e))
    if (e[Symbol.iterator]) n = Array.from(e, t)
    else {
      const o = Object.keys(e)
      n = new Array(o.length)
      for (let r = 0, s = o.length; r < s; r++) {
        const s = o[r]
        n[r] = t(e[s], s, r)
      }
    }
  else n = []
  return n
}
function ho(e, t, n = {}, o) {
  let r = e[t]
  return Lt(), Mt(At, { key: n.key }, r ? r(n) : o ? o() : [], e._ ? 64 : -2)
}
const mo = (e) => (null == e ? '' : C(e) ? JSON.stringify(e, c, 2) : String(e)),
  vo = P,
  go = 'http://www.w3.org/2000/svg',
  yo = 'undefined' != typeof document ? document : null
let bo, _o
const wo = {
  insert: (e, t, n) => {
    n ? t.insertBefore(e, n) : t.appendChild(e)
  },
  remove: (e) => {
    const t = e.parentNode
    t && t.removeChild(e)
  },
  createElement: (e, t, n) => (t ? yo.createElementNS(go, e) : yo.createElement(e, n ? { is: n } : void 0)),
  createText: (e) => yo.createTextNode(e),
  createComment: (e) => yo.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t
  },
  setElementText: (e, t) => {
    e.textContent = t
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => yo.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, '')
  },
  cloneNode: (e) => e.cloneNode(!0),
  insertStaticContent(e, t, n, o) {
    const r = o ? _o || (_o = yo.createElementNS(go, 'svg')) : bo || (bo = yo.createElement('div'))
    r.innerHTML = e
    const s = r.firstChild
    let l = s,
      i = l
    for (; l; ) (i = l), wo.insert(l, t, n), (l = r.firstChild)
    return [s, i]
  }
}
const xo = /\s*!important$/
function Co(e, t, n) {
  if (t.startsWith('--')) e.setProperty(t, n)
  else {
    const o = (function (e, t) {
      const n = Eo[t]
      if (n) return n
      let o = vo(t)
      if ('filter' !== o && o in e) return (Eo[t] = o)
      o = M(o)
      for (let n = 0; n < So.length; n++) {
        const r = So[n] + o
        if (r in e) return (Eo[t] = r)
      }
      return t
    })(e, t)
    xo.test(n) ? e.setProperty(L(o), n.replace(xo, ''), 'important') : (e[o] = n)
  }
}
const So = ['Webkit', 'Moz', 'ms'],
  Eo = {}
const ko = 'http://www.w3.org/1999/xlink'
let Ao = Date.now
'undefined' != typeof document && Ao() > document.createEvent('Event').timeStamp && (Ao = () => performance.now())
let Ro = 0
const Oo = Promise.resolve(),
  Fo = () => {
    Ro = 0
  },
  Po = () => Ro || (Oo.then(Fo), (Ro = Ao()))
function To(e, t, n, o) {
  e.addEventListener(t, n, o)
}
function Lo(e, t, n, o) {
  e.removeEventListener(t, n, o)
}
function Mo(e, t) {
  const n = (e) => {
    ;(e.timeStamp || Ao()) >= n.lastUpdated - 1 &&
      Je(
        (function (e, t) {
          if (b(t)) {
            const n = e.stopImmediatePropagation
            return (
              (e.stopImmediatePropagation = () => {
                n.call(e), (e._stopped = !0)
              }),
              t.map((e) => (t) => !t._stopped && e(t))
            )
          }
          return t
        })(e, n.value),
        t,
        5,
        [e]
      )
  }
  return (n.value = e), (e.invoker = n), (n.lastUpdated = Po()), n
}
const jo = /^on[a-z]/,
  $o = (e, { slots: t }) => fo(yn, Io(e), t)
$o.inheritRef = !0
const No = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Uo = ($o.props = m({}, yn.props, No))
function Io(e) {
  let {
    name: t = 'v',
    type: n,
    css: o = !0,
    duration: r,
    enterFromClass: s = t + '-enter-from',
    enterActiveClass: l = t + '-enter-active',
    enterToClass: i = t + '-enter-to',
    appearFromClass: c = s,
    appearActiveClass: a = l,
    appearToClass: u = i,
    leaveFromClass: f = t + '-leave-from',
    leaveActiveClass: p = t + '-leave-active',
    leaveToClass: d = t + '-leave-to'
  } = e
  const h = {}
  for (const t in e) t in No || (h[t] = e[t])
  if (!o) return h
  const v = [s, l, i],
    g = oo(),
    y = (function (e) {
      if (null == e) return null
      if (C(e)) return [Bo(e.enter), Bo(e.leave)]
      {
        const t = Bo(e)
        return [t, t]
      }
    })(r),
    b = y && y[0],
    _ = y && y[1],
    { appear: w, onBeforeEnter: x, onEnter: S, onLeave: E } = h
  w && !g.isMounted && ((s = c), (l = a), (i = u))
  const k = (e, t) => {
      Do(e, i), Do(e, l), t && t(), w && ([s, l, i] = v)
    },
    A = (e, t) => {
      Do(e, d), Do(e, p), t && t()
    }
  function R(e, t) {
    Je(e, g, 9, t)
  }
  return m(h, {
    onBeforeEnter(e) {
      x && x(e), Vo(e, l), Vo(e, s)
    },
    onEnter(e, t) {
      qo(() => {
        const o = () => k(e, t)
        S && R(S, [e, o]), Do(e, s), Vo(e, i), (S && S.length > 1) || (b ? setTimeout(o, b) : zo(e, n, o))
      })
    },
    onLeave(e, t) {
      Vo(e, p),
        Vo(e, f),
        qo(() => {
          const o = () => A(e, t)
          E && R(E, [e, o]), Do(e, f), Vo(e, d), (E && E.length > 1) || (_ ? setTimeout(o, _) : zo(e, n, o))
        })
    },
    onEnterCancelled: k,
    onLeaveCancelled: A
  })
}
function Bo(e) {
  return ((e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  })(e)
}
function Vo(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e._vtc || (e._vtc = new Set())).add(t)
}
function Do(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function qo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
function zo(e, t, n) {
  const { type: o, timeout: r, propCount: s } = Wo(e, t)
  if (!o) return n()
  const l = o + 'end'
  let i = 0
  const c = () => {
      e.removeEventListener(l, a), n()
    },
    a = (t) => {
      t.target === e && ++i >= s && c()
    }
  setTimeout(() => {
    i < s && c()
  }, r + 1),
    e.addEventListener(l, a)
}
function Wo(e, t) {
  const n = window.getComputedStyle(e),
    o = (e) => (n[e] || '').split(', '),
    r = o('transitionDelay'),
    s = o('transitionDuration'),
    l = Ho(r, s),
    i = o('animationDelay'),
    c = o('animationDuration'),
    a = Ho(i, c)
  let u = null,
    f = 0,
    p = 0
  'transition' === t
    ? l > 0 && ((u = 'transition'), (f = l), (p = s.length))
    : 'animation' === t
    ? a > 0 && ((u = 'animation'), (f = a), (p = c.length))
    : ((f = Math.max(l, a)),
      (u = f > 0 ? (l > a ? 'transition' : 'animation') : null),
      (p = u ? ('transition' === u ? s.length : c.length) : 0))
  return {
    type: u,
    timeout: f,
    propCount: p,
    hasTransform: 'transition' === u && /\b(transform|all)(,|$)/.test(n.transitionProperty)
  }
}
function Ho(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((t, n) => Ko(t) + Ko(e[n])))
}
function Ko(e) {
  return 1e3 * Number(e.slice(0, -1).replace(',', '.'))
}
const Go = new WeakMap(),
  Jo = new WeakMap()
function Qo(e) {
  const t = e.el
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}
function Xo(e) {
  Jo.set(e, e.el.getBoundingClientRect())
}
function Yo(e) {
  const t = Go.get(e),
    n = Jo.get(e),
    o = t.left - n.left,
    r = t.top - n.top
  if (o || r) {
    const t = e.el.style
    return (t.transform = t.webkitTransform = `translate(${o}px,${r}px)`), (t.transitionDuration = '0s'), e
  }
}
delete {
  props: m({}, Uo, { tag: String, moveClass: String }),
  setup(e, { slots: t }) {
    const n = oo(),
      o = gn()
    let r,
      s,
      l = null
    return (
      Tn(() => {
        if (!r.length) return
        const t = e.moveClass || (e.name || 'v') + '-move'
        if (
          ((l =
            null === l
              ? (l = (function (e, t, n) {
                  const o = e.cloneNode()
                  e._vtc &&
                    e._vtc.forEach((e) => {
                      e.split(/\s+/).forEach((e) => e && o.classList.remove(e))
                    })
                  n.split(/\s+/).forEach((e) => e && o.classList.add(e)), (o.style.display = 'none')
                  const r = 1 === t.nodeType ? t : t.parentNode
                  r.appendChild(o)
                  const { hasTransform: s } = Wo(o)
                  return r.removeChild(o), s
                })(r[0].el, n.vnode.el, t))
              : l),
          !l)
        )
          return
        r.forEach(Qo), r.forEach(Xo)
        const o = r.filter(Yo)
        document.body.offsetHeight,
          o.forEach((e) => {
            const n = e.el,
              o = n.style
            Vo(n, t), (o.transform = o.webkitTransform = o.transitionDuration = '')
            const r = (n._moveCb = (e) => {
              ;(e && e.target !== n) ||
                (e && !/transform$/.test(e.propertyName)) ||
                (n.removeEventListener('transitionend', r), (n._moveCb = null), Do(n, t))
            })
            n.addEventListener('transitionend', r)
          })
      }),
      () => {
        const l = (function e(t) {
            return (t && e(t.__v_raw)) || t
          })(e),
          i = Io(l),
          c = l.tag || At
        r = s
        const a = t.default ? t.default() : []
        s = (function e(t) {
          let n = []
          for (let o = 0; o < t.length; o++) {
            const r = t[o]
            r.type === At ? (n = n.concat(e(r.children))) : r.type !== Ot && n.push(r)
          }
          return n
        })(a)
        for (let e = 0; e < s.length; e++) {
          const t = s[e]
          null != t.key && Cn(t, _n(t, i, o, n))
        }
        if (r)
          for (let e = 0; e < r.length; e++) {
            const t = r[e]
            Cn(t, _n(t, i, o, n)), Go.set(t, t.el.getBoundingClientRect())
          }
        return It(c, null, a)
      }
    )
  }
}.props.mode
const Zo = m(
  {
    patchProp: (e, t, o, r, s = !1, l, i, c, u) => {
      switch (t) {
        case 'class':
          !(function (e, t, n) {
            if ((null == t && (t = ''), n)) e.setAttribute('class', t)
            else {
              const n = e._vtc
              n && (t = (t ? [t, ...n] : [...n]).join(' ')), (e.className = t)
            }
          })(e, r, s)
          break
        case 'style':
          !(function (e, t, n) {
            const o = e.style
            if (n)
              if (w(n)) t !== n && (o.cssText = n)
              else {
                for (const e in n) Co(o, e, n[e])
                if (t && !w(t)) for (const e in t) n[e] || Co(o, e, '')
              }
            else e.removeAttribute('style')
          })(e, o, r)
          break
        default:
          h(t)
            ? t.startsWith('onUpdate:') ||
              (function (e, t, n, o, r = null) {
                const s = t.slice(2).toLowerCase(),
                  l = n && 'options' in n && n.options,
                  i = o && 'options' in o && o.options,
                  c = n && n.invoker,
                  u = o && 'handler' in o ? o.handler : o
                if (l || i) {
                  const t = l || a,
                    n = i || a
                  if (t.capture !== n.capture || t.passive !== n.passive || t.once !== n.once) {
                    if ((c && Lo(e, s, c, t), o && u)) {
                      const t = Mo(u, r)
                      ;(o.invoker = t), To(e, s, t, n)
                    }
                    return
                  }
                }
                o && u
                  ? c
                    ? ((n.invoker = null), (c.value = u), (o.invoker = c), (c.lastUpdated = Po()))
                    : To(e, s, Mo(u, r), i || void 0)
                  : c && Lo(e, s, c, l || void 0)
              })(e, t, o, r, i)
            : 'spellcheck' !== t &&
              'draggable' !== t &&
              (s ? 'innerHTML' === t || (t in e && jo.test(t) && _(r)) : t in e && (!jo.test(t) || !w(r)))
            ? (function (e, t, n, o, r, s, l) {
                if ('innerHTML' === t || 'textContent' === t) return o && l(o, r, s), void (e[t] = null == n ? '' : n)
                if ('value' === t && 'PROGRESS' !== e.tagName)
                  return (e._value = n), void (e.value = null == n ? '' : n)
                if ('' === n && 'boolean' == typeof e[t]) e[t] = !0
                else if (null == n && 'string' == typeof e[t]) e[t] = ''
                else
                  try {
                    e[t] = n
                  } catch (e) {}
              })(e, t, r, l, i, c, u)
            : ('true-value' === t ? (e._trueValue = r) : 'false-value' === t && (e._falseValue = r),
              (function (e, t, o, r) {
                if (r && t.startsWith('xlink:'))
                  null == o ? e.removeAttributeNS(ko, t.slice(6, t.length)) : e.setAttributeNS(ko, t, o)
                else {
                  const r = n(t)
                  null == o || (r && !1 === o) ? e.removeAttribute(t) : e.setAttribute(t, r ? '' : o)
                }
              })(e, t, r, s))
      }
    }
  },
  wo
)
let er
/*!
 * vue-router v4.0.0-alpha.12
 * (c) 2020 Eduardo San Martin Morote
 * @license MIT
 */
const tr = 'function' == typeof Symbol && 'symbol' == typeof Symbol.toStringTag,
  nr = (e) => (tr ? Symbol(e) : '_vr_' + e),
  or = nr('rvlm'),
  rr = nr('rvd'),
  sr = nr('r'),
  lr = nr('rl'),
  ir = 'undefined' != typeof window
const cr = Object.assign
function ar(e, t) {
  const n = {}
  for (const o in t) {
    const r = t[o]
    n[o] = Array.isArray(r) ? r.map(e) : e(r)
  }
  return n
}
const ur = /\/$/
function fr(e, t, n = '/') {
  let o,
    r = {},
    s = '',
    l = ''
  const i = t.indexOf('?'),
    c = t.indexOf('#', i > -1 ? i : 0)
  return (
    i > -1 && ((o = t.slice(0, i)), (s = t.slice(i + 1, c > -1 ? c : t.length)), (r = e(s))),
    c > -1 && ((o = o || t.slice(0, c)), (l = t.slice(c, t.length))),
    (o = null != o ? o : t),
    o ? '/' !== o[0] && (o = n.replace(/[^\/]*$/, '') + o) : (o = n + o),
    { fullPath: o + (s && '?') + s + l, path: o, query: r, hash: l }
  )
}
function pr(e, t) {
  return !t || e.toLowerCase().indexOf(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function dr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function hr(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (let n in e) if (!mr(e[n], t[n])) return !1
  return !0
}
function mr(e, t) {
  return Array.isArray(e) ? vr(e, t) : Array.isArray(t) ? vr(t, e) : e === t
}
function vr(e, t) {
  return Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : 1 === e.length && e[0] === t
}
var gr, yr
function br(e) {
  return { fullPath: e.fullPath || e }
}
function _r(e) {
  if (!e)
    if (ir) {
      const t = document.querySelector('base')
      e = (e = (t && t.getAttribute('href')) || '/').replace(/^\w+:\/\/[^\/]+/, '')
    } else e = '/'
  return '/' !== e[0] && '#' !== e[0] && (e = '/' + e), e.replace(ur, '')
}
!(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(gr || (gr = {})),
  (function (e) {
    ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
  })(yr || (yr = {}))
const wr = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function xr(e) {
  let t
  if ('el' in e) {
    let n = e.el
    const o = 'string' == typeof n && n.startsWith('#'),
      r = 'string' == typeof n ? (o ? document.getElementById(n.slice(1)) : document.querySelector(n)) : n
    if (!r) return
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        o = e.getBoundingClientRect()
      return { behavior: t.behavior, left: o.left - n.left - (t.left || 0), top: o.top - n.top - (t.top || 0) }
    })(r, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(null != t.left ? t.left : window.pageXOffset, null != t.top ? t.top : window.pageYOffset)
}
function Cr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Sr = new Map()
let Er = () => location.protocol + '//' + location.host
function kr(e, t) {
  const { pathname: n, search: o, hash: r } = t
  if (e.indexOf('#') > -1) {
    let e = r.slice(1)
    return '/' !== e[0] && (e = '/' + e), br(pr(e, ''))
  }
  return br(pr(n, e) + o + r)
}
function Ar(e, t, n, o = !1, r = !1) {
  return { back: e, current: t, forward: n, replaced: o, position: window.history.length, scroll: r ? wr() : null }
}
function Rr(e) {
  const { history: t } = window
  let n = { value: kr(e, window.location) },
    o = { value: t.state }
  function r(n, r, s) {
    const l = Er() + e + n.fullPath
    try {
      t[s ? 'replaceState' : 'pushState'](r, '', l), (o.value = r)
    } catch (e) {
      !(function (e, ...t) {
        console.warn('[Vue Router warn]: ' + e, ...t)
      })('Error with push/replace State', e),
        window.location[s ? 'replace' : 'assign'](l)
    }
  }
  return (
    o.value ||
      r(
        n.value,
        { back: null, current: n.value, forward: null, position: t.length - 1, replaced: !0, scroll: null },
        !0
      ),
    {
      location: n,
      state: o,
      push: function (e, o) {
        const s = br(e),
          l = cr({}, t.state, { forward: s, scroll: wr() })
        r(l.current, l, !0), r(s, cr({}, Ar(n.value, s, null), { position: l.position + 1 }, o), !1), (n.value = s)
      },
      replace: function (e, s) {
        const l = br(e)
        r(l, cr({}, t.state, Ar(o.value.back, l, o.value.forward, !0), s, { position: o.value.position }), !0),
          (n.value = l)
      }
    }
  )
}
const Or = /#/g,
  Fr = /&/g,
  Pr = /\//g,
  Tr = /=/g,
  Lr = /\?/g,
  Mr = /%5B/g,
  jr = /%5D/g,
  $r = /%5E/g,
  Nr = /%60/g,
  Ur = /%7B/g,
  Ir = /%7C/g,
  Br = /%7D/g
function Vr(e) {
  return encodeURI('' + e)
    .replace(Ir, '|')
    .replace(Mr, '[')
    .replace(jr, ']')
}
function Dr(e) {
  return Vr(e)
    .replace(Or, '%23')
    .replace(Fr, '%26')
    .replace(Tr, '%3D')
    .replace(Nr, '`')
    .replace(Ur, '{')
    .replace(Br, '}')
    .replace($r, '^')
}
function qr(e) {
  return (function (e) {
    return Vr(e).replace(Or, '%23').replace(Lr, '%3F')
  })(e).replace(Pr, '%2F')
}
function zr(e) {
  try {
    return decodeURIComponent('' + e)
  } catch (e) {}
  return '' + e
}
function Wr(e) {
  const t = {}
  if ('' === e || '?' === e) return t
  const n = ('?' === e[0] ? e.slice(1) : e).split('&')
  for (let e = 0; e < n.length; ++e) {
    let [o, r] = n[e].split('=')
    o = zr(o)
    let s = null == r ? null : zr(r)
    if (o in t) {
      let e = t[o]
      Array.isArray(e) || (e = t[o] = [e]), e.push(s)
    } else t[o] = s
  }
  return t
}
function Hr(e) {
  let t = ''
  for (let n in e) {
    t.length && (t += '&')
    const o = e[n]
    if (((n = Dr(n)), null == o)) {
      void 0 !== o && (t += n)
      continue
    }
    let r = Array.isArray(o) ? o.map((e) => e && Dr(e)) : [o && Dr(o)]
    for (let e = 0; e < r.length; e++) (t += (e ? '&' : '') + n), null != r[e] && (t += '=' + r[e])
  }
  return t
}
function Kr(e) {
  const t = {}
  for (let n in e) {
    let o = e[n]
    void 0 !== o && (t[n] = Array.isArray(o) ? o.map((e) => (null == e ? null : '' + e)) : null == o ? o : '' + o)
  }
  return t
}
function Gr(e) {
  return 'string' == typeof e || 'symbol' == typeof e
}
const Jr = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
var Qr
function Xr(e, t) {
  return cr(new Error(), { type: e }, t)
}
!(function (e) {
  ;(e[(e.aborted = 2)] = 'aborted'), (e[(e.cancelled = 3)] = 'cancelled'), (e[(e.duplicated = 4)] = 'duplicated')
})(Qr || (Qr = {}))
const Yr = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Zr = /[.+*?^${}()[\]/\\]/g
function es(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n]
    if (o) return o
    n++
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
    ? 1 === t.length && 80 === t[0]
      ? 1
      : -1
    : 0
}
function ts(e, t) {
  let n = 0
  const o = e.score,
    r = t.score
  for (; n < o.length && n < r.length; ) {
    const e = es(o[n], r[n])
    if (e) return e
    n++
  }
  return r.length - o.length
}
const ns = { type: 0, value: '' },
  os = /[a-zA-Z0-9_]/
function rs(e, t, n) {
  const o = (function (e, t) {
      const n = cr({}, Yr, t)
      let o = [],
        r = n.start ? '^' : ''
      const s = []
      for (const t of e) {
        const e = t.length ? [] : [90]
        n.strict && !t.length && (r += '/')
        for (let o = 0; o < t.length; o++) {
          const l = t[o]
          let i = 40 + (n.sensitive ? 0.25 : 0)
          if (0 === l.type) o || (r += '/'), (r += l.value.replace(Zr, '\\$&')), (i += 40)
          else if (1 === l.type) {
            const { value: e, repeatable: t, optional: n, regexp: c } = l
            s.push({ name: e, repeatable: t, optional: n })
            const a = c || '[^/]+?'
            if ('[^/]+?' !== a) {
              i += 10
              try {
                new RegExp(`(${a})`)
              } catch (t) {
                throw new Error(`Invalid custom RegExp for param "${e}" (${a}): ` + t.message)
              }
            }
            let u = t ? `((?:${a})(?:/(?:${a}))*)` : `(${a})`
            o || (u = n ? `(?:/${u})` : '/' + u),
              n && (u += '?'),
              (r += u),
              (i += 20),
              n && (i += -8),
              t && (i += -20),
              '.*' === a && (i += -50)
          }
          e.push(i)
        }
        o.push(e)
      }
      if (n.strict && n.end) {
        const e = o.length - 1
        o[e][o[e].length - 1] += 0.7000000000000001
      }
      n.strict || (r += '/?'), n.end ? (r += '$') : n.strict && (r += '(?:/|$)')
      const l = new RegExp(r, n.sensitive ? '' : 'i')
      return {
        re: l,
        score: o,
        keys: s,
        parse: function (e) {
          const t = e.match(l),
            n = {}
          if (!t) return null
          for (let e = 1; e < t.length; e++) {
            const o = t[e] || '',
              r = s[e - 1]
            n[r.name] = o && r.repeatable ? o.split('/') : o
          }
          return n
        },
        stringify: function (t) {
          let n = '',
            o = !1
          for (const r of e) {
            ;(o && '/' === n[n.length - 1]) || (n += '/'), (o = !1)
            for (const e of r)
              if (0 === e.type) n += e.value
              else if (1 === e.type) {
                const { value: r, repeatable: s, optional: l } = e,
                  i = r in t ? t[r] : ''
                if (Array.isArray(i) && !s)
                  throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`)
                const c = Array.isArray(i) ? i.join('/') : i
                if (!c) {
                  if (!l) throw new Error(`Missing required param "${r}"`)
                  o = !0
                }
                n += c
              }
          }
          return n
        }
      }
    })(
      (function (e) {
        if (!e) return [[]]
        if ('/' === e) return [[ns]]
        if ('/' !== e[0]) throw new Error('A non-empty path must start with "/"')
        function t(e) {
          throw new Error(`ERR (${n})/"${a}": ${e}`)
        }
        let n = 0,
          o = n
        const r = []
        let s
        function l() {
          s && r.push(s), (s = [])
        }
        let i,
          c = 0,
          a = '',
          u = ''
        function f() {
          a &&
            (0 === n
              ? s.push({ type: 0, value: a })
              : 1 === n || 2 === n || 3 === n
              ? (s.length > 1 &&
                  ('*' === i || '+' === i) &&
                  t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),
                s.push({
                  type: 1,
                  value: a,
                  regexp: u,
                  repeatable: '*' === i || '+' === i,
                  optional: '*' === i || '?' === i
                }))
              : t('Invalid state to consume buffer'),
            (a = ''))
        }
        function p() {
          a += i
        }
        for (; c < e.length; )
          if (((i = e[c++]), '\\' !== i || 2 === n))
            switch (n) {
              case 0:
                '/' === i ? (a && f(), l()) : ':' === i ? (f(), (n = 1)) : p()
                break
              case 4:
                p(), (n = o)
                break
              case 1:
                '(' === i
                  ? ((n = 2), (u = ''))
                  : os.test(i)
                  ? p()
                  : (f(), (n = 0), '*' !== i && '?' !== i && '+' !== i && c--)
                break
              case 2:
                ')' === i ? ('\\' == u[u.length - 1] ? (u = u.slice(0, -1) + i) : (n = 3)) : (u += i)
                break
              case 3:
                f(), (n = 0), '*' !== i && '?' !== i && '+' !== i && c--
                break
              default:
                t('Unknown state')
            }
          else (o = n), (n = 4)
        return 2 === n && t(`Unfinished custom RegExp for param "${a}"`), f(), l(), r
      })(e.path),
      n
    ),
    r = cr(o, { record: e, parent: t, children: [], alias: [] })
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}
let ss = () => {}
function ls(e, t) {
  const n = [],
    o = new Map()
  function r(e, n, o) {
    let i = !o,
      c = (function (e) {
        const t = { path: e.path, name: e.name, meta: e.meta || {}, aliasOf: void 0, components: {} }
        if ('redirect' in e) return cr(t, { redirect: e.redirect })
        {
          const n = 'components' in e ? e.components : { default: e.component }
          return cr(t, {
            beforeEnter: e.beforeEnter,
            props: is(e),
            children: e.children || [],
            instances: {},
            leaveGuards: [],
            updateGuards: [],
            components: n
          })
        }
      })(e)
    c.aliasOf = o && o.record
    const a = us(t, e),
      u = [c]
    if ('alias' in e) {
      const t = 'string' == typeof e.alias ? [e.alias] : e.alias
      for (const e of t)
        u.push(cr({}, c, { components: o ? o.record.components : c.components, path: e, aliasOf: o ? o.record : c }))
    }
    let f, p
    for (const t of u) {
      let { path: u } = t
      if (n && '/' !== u[0]) {
        let e = n.record.path,
          o = '/' === e[e.length - 1] ? '' : '/'
        t.path = n.record.path + (u && o + u)
      }
      if (
        ((f = rs(t, n, a)),
        o ? o.alias.push(f) : ((p = p || f), p !== f && p.alias.push(f), i && e.name && !cs(f) && s(e.name)),
        'children' in c)
      ) {
        let e = c.children
        for (let t = 0; t < e.length; t++) r(e[t], f, o && o.children[t])
      }
      ;(o = o || f), l(f)
    }
    return p
      ? () => {
          s(p)
        }
      : ss
  }
  function s(e) {
    if (Gr(e)) {
      const t = o.get(e)
      t && (o.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(s), t.alias.forEach(s))
    } else {
      let t = n.indexOf(e)
      t > -1 && (n.splice(t, 1), e.record.name && o.delete(e.record.name), e.children.forEach(s), e.alias.forEach(s))
    }
  }
  function l(e) {
    let t = 0
    for (; t < n.length && ts(e, n[t]) >= 0; ) t++
    n.splice(t, 0, e), e.record.name && !cs(e) && o.set(e.record.name, e)
  }
  return (
    (t = us({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => r(e)),
    {
      addRoute: r,
      resolve: function (e, t) {
        let r,
          s,
          l,
          i = {}
        if ('name' in e && e.name) {
          if (((r = o.get(e.name)), !r)) throw Xr(0, { location: e })
          ;(l = r.record.name),
            (i = cr(
              (function (e, t) {
                let n = {}
                for (let o of t) o in e && (n[o] = e[o])
                return n
              })(
                t.params,
                r.keys.map((e) => e.name)
              ),
              e.params
            )),
            (s = r.stringify(i))
        } else if ('path' in e)
          (s = e.path), (r = n.find((e) => e.re.test(s))), r && ((i = r.parse(s)), (l = r.record.name))
        else {
          if (((r = t.name ? o.get(t.name) : n.find((e) => e.re.test(t.path))), !r))
            throw Xr(0, { location: e, currentLocation: t })
          ;(l = r.record.name), (i = cr({}, t.params, e.params)), (s = r.stringify(i))
        }
        const c = []
        let a = r
        for (; a; ) c.unshift(a.record), (a = a.parent)
        return { name: l, path: s, params: i, matched: c, meta: as(c) }
      },
      removeRoute: s,
      getRoutes: function () {
        return n
      },
      getRecordMatcher: function (e) {
        return o.get(e)
      }
    }
  )
}
function is(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (let o in e.components) t[o] = 'boolean' == typeof n ? n : n[o]
  return t
}
function cs(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function as(e) {
  return e.reduce((e, t) => cr(e, t.meta), {})
}
function us(e, t) {
  let n = {}
  for (let o in e) n[o] = o in t ? t[o] : e[o]
  return n
}
function fs() {
  let e = []
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t)
          n > -1 && e.splice(n, 1)
        }
      )
    },
    list: () => e,
    reset: function () {
      e = []
    }
  }
}
function ps(e, t, n, o) {
  return () =>
    new Promise((r, s) => {
      Promise.resolve(
        e.call(o, t, n, (e) => {
          var o
          !1 === e
            ? s(Xr(2, { from: n, to: t }))
            : e instanceof Error
            ? s(e)
            : 'string' == typeof (o = e) || (o && 'object' == typeof o)
            ? s(Xr(1, { from: t, to: e }))
            : r()
        })
      ).catch((e) => s(e))
    })
}
function ds(e, t, n, o) {
  const r = []
  for (const l of e)
    for (const e in l.components) {
      let i = l.components[e]
      if ('object' == typeof (s = i) || 'displayName' in s || 'props' in s || '__vccOpts' in s) {
        const s = (i.__vccOpts || i)[t]
        s && r.push(ps(s, n, o, l.instances[e]))
      } else {
        let s = i()
        ;(s = s.catch(() => null)),
          r.push(() =>
            s.then((r) => {
              if (!r)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${e}" for the following record with path "${l.path}"`)
                )
              const s = (i = r).__esModule || (tr && 'Module' === i[Symbol.toStringTag]) ? r.default : r
              var i
              l.components[e] = s
              const c = s[t]
              return c && ps(c, n, o, l.instances[e])()
            })
          )
      }
    }
  var s
  return r
}
function hs(e) {
  const t = qn(sr),
    n = qn(lr),
    o = ao(() => t.resolve(Ke(e.to))),
    r = ao(() => {
      let { matched: e } = o.value,
        { length: t } = e
      const r = e[t - 1]
      let s = n.matched
      if (!r || !s.length) return -1
      let l = s.findIndex(dr.bind(null, r))
      if (l > -1) return l
      let i = vs(e[t - 2])
      return t > 1 && vs(r) === i && s[s.length - 1].path !== i ? s.findIndex(dr.bind(null, e[t - 2])) : l
    }),
    s = ao(
      () =>
        r.value > -1 &&
        (function (e, t) {
          for (let n in t) {
            let o = t[n],
              r = e[n]
            if ('string' == typeof o) {
              if (o !== r) return !1
            } else if (!Array.isArray(r) || r.length !== o.length || o.some((e, t) => e !== r[t])) return !1
          }
          return !0
        })(n.params, o.value.params)
    ),
    l = ao(() => r.value > -1 && r.value === n.matched.length - 1 && hr(n.params, o.value.params))
  return {
    route: o,
    href: ao(() => o.value.href),
    isActive: s,
    isExactActive: l,
    navigate: function (n = {}) {
      return (function (e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
        if (e.defaultPrevented) return
        if (void 0 !== e.button && 0 !== e.button) return
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute('target')
          if (/\b_blank\b/i.test(t)) return
        }
        e.preventDefault && e.preventDefault()
        return !0
      })(n)
        ? t[Ke(e.replace) ? 'replace' : 'push'](Ke(e.to))
        : Promise.resolve()
    }
  }
}
const ms = uo({
  name: 'RouterLink',
  props: {
    to: { type: [String, Object], required: !0 },
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean
  },
  setup(e, { slots: t, attrs: n }) {
    const o = $e(hs(e)),
      { options: r } = qn(sr),
      s = ao(() => ({
        [gs(e.activeClass, r.linkActiveClass, 'router-link-active')]: o.isActive,
        [gs(e.exactActiveClass, r.linkExactActiveClass, 'router-link-exact-active')]: o.isExactActive
      }))
    return () => {
      const r = t.default && t.default(o)
      return e.custom
        ? r
        : fo(
            'a',
            cr({ 'aria-current': o.isExactActive ? 'page' : null, onClick: o.navigate, href: o.href }, n, {
              class: s.value
            }),
            r
          )
    }
  }
})
function vs(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
let gs = (e, t, n) => (null != e ? e : null != t ? t : n)
const ys = uo({
  name: 'RouterView',
  props: { name: { type: String, default: 'default' }, route: Object },
  setup(e, { attrs: t, slots: n }) {
    const o = qn(lr),
      r = ao(() => e.route || o),
      s = qn(rr, 0)
    Dn(rr, s + 1)
    const l = ao(() => r.value.matched[s]),
      i = ao(() => l.value && l.value.components[e.name]),
      c = ao(() => {
        const t = l.value.props[e.name]
        return t ? (!0 === t ? r.value.params : 'object' == typeof t ? t : t(r.value)) : {}
      })
    Dn(or, l)
    const a = We()
    function u() {
      l.value.instances[e.name] = a.value
    }
    return () => {
      const o = l.value,
        r = e.name
      let s = i.value
      const f = cr({}, s && c.value, t, {
          onVnodeMounted: u,
          onVnodeUnmounted: function () {
            o && (o.instances[r] = null)
          },
          ref: a
        }),
        p = n.default && n.default({ Component: s, props: f })
      return p || (s ? fo(s, f) : null)
    }
  }
})
function bs(e) {
  return e.reduce((e, t) => e.then(() => t()), Promise.resolve())
}
function _s(e, t) {
  const n = [],
    o = [],
    r = []
  for (const r of t.matched) e.matched.indexOf(r) < 0 ? n.push(r) : o.push(r)
  for (const n of e.matched) t.matched.indexOf(n) < 0 && r.push(n)
  return [n, o, r]
}
var ws = {
  path: '/playground',
  component: () => import('./index.9b901f2f.js'),
  children: [
    { path: 'icons', component: () => import('./Icons.342f2ed8.js') },
    { path: 'buttons', component: () => import('./index.4f91be4d.js') },
    { path: 'colors', component: () => import('./index.83237e39.js') },
    { path: 'dialogs', component: () => import('./index.14c06653.js') },
    { path: 'inputs', component: () => import('./index.86b9c36f.js') },
    { path: 'text', component: () => import('./index.081543bb.js') }
  ]
}
const xs = (function (e) {
    const t = ls(e.routes, e)
    let n = e.parseQuery || Wr,
      o = e.stringifyQuery || Hr,
      { scrollBehavior: r } = e,
      s = e.history
    const l = fs(),
      i = fs(),
      c = fs(),
      a = He(Jr, !0)
    let u = Jr
    ir && r && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
    const f = ar.bind(null, (e) => '' + e),
      p = ar.bind(null, qr),
      d = ar.bind(null, zr)
    function h(e, r) {
      if (((r = r || a.value), 'string' == typeof e)) {
        let o = fr(n, e, r.path),
          l = t.resolve({ path: o.path }, r)
        return cr(o, l, { params: d(l.params), redirectedFrom: void 0, href: s.base + o.fullPath })
      }
      let l
      l = cr({}, e, 'path' in e ? { path: fr(n, e.path, r.path).path } : { params: p(e.params) })
      let i = t.resolve(l, r)
      const c = Vr(e.hash || '')
        .replace(Ur, '{')
        .replace(Br, '}')
        .replace($r, '^')
      i.params = 'params' in e ? f(e.params) : d(i.params)
      const u = (function (e, t) {
        let n = t.query ? e(t.query) : ''
        return t.path + (n && '?') + n + (t.hash || '')
      })(o, cr({}, e, { hash: c, path: i.path }))
      return cr({ fullPath: u, hash: c, query: Kr(e.query) }, i, { redirectedFrom: void 0, href: s.base + u })
    }
    function m(e) {
      return 'string' == typeof e ? { path: e } : cr({}, e)
    }
    function v(e) {
      return g(e)
    }
    function g(e, t) {
      const n = (u = h(e)),
        o = a.value,
        r = e.state,
        s = e.force,
        l = !0 === e.replace,
        i = n.matched[n.matched.length - 1]
      if (i && 'redirect' in i) {
        const { redirect: e } = i
        let o = m('function' == typeof e ? e(n) : e)
        return g(cr({}, n, o, { state: r, force: s, replace: l }), t || n)
      }
      const c = n
      let f
      return (
        (c.redirectedFrom = t),
        !s &&
          (function (e, t) {
            let n = e.matched.length - 1,
              o = t.matched.length - 1
            return (
              n > -1 &&
              n === o &&
              dr(e.matched[n], t.matched[o]) &&
              hr(e.params, t.params) &&
              hr(e.query, t.query) &&
              e.hash === t.hash
            )
          })(o, n) &&
          ((f = Xr(4, { to: c, from: o })), k(o, o, !0, !1)),
        (f ? Promise.resolve(f) : y(c, o))
          .catch((e) => (u !== c ? Xr(3, { from: o, to: c }) : 2 === e.type || 1 === e.type ? e : S(e)))
          .then((e) => {
            if (e) {
              if (1 === e.type) return g(cr(m(e.to), { state: r, force: s, replace: l }), t || c)
            } else e = _(c, o, !0, l, r)
            return b(c, o, e), e
          })
      )
    }
    function y(e, t) {
      let n
      n = ds(t.matched.filter((t) => e.matched.indexOf(t) < 0).reverse(), 'beforeRouteLeave', e, t)
      const [o, r] = _s(e, t)
      for (const r of o) for (const o of r.leaveGuards) n.push(ps(o, e, t))
      return bs(n)
        .then(() => {
          n = []
          for (const o of l.list()) n.push(ps(o, e, t))
          return bs(n)
        })
        .then(() => {
          n = ds(
            e.matched.filter((e) => t.matched.indexOf(e) > -1),
            'beforeRouteUpdate',
            e,
            t
          )
          for (const o of r) for (const r of o.updateGuards) n.push(ps(r, e, t))
          return bs(n)
        })
        .then(() => {
          n = []
          for (const o of e.matched)
            if (o.beforeEnter && t.matched.indexOf(o) < 0)
              if (Array.isArray(o.beforeEnter)) for (const r of o.beforeEnter) n.push(ps(r, e, t))
              else n.push(ps(o.beforeEnter, e, t))
          return bs(n)
        })
        .then(
          () => (
            (n = ds(
              e.matched.filter((e) => t.matched.indexOf(e) < 0),
              'beforeRouteEnter',
              e,
              t
            )),
            bs(n)
          )
        )
        .then(() => {
          n = []
          for (const o of i.list()) n.push(ps(o, e, t))
          return bs(n)
        })
    }
    function b(e, t, n) {
      for (const o of c.list()) o(e, t, n)
    }
    function _(e, t, n, o, r) {
      if (u !== e) return Xr(3, { from: t, to: e })
      const [l] = _s(e, t)
      for (const e of l) (e.leaveGuards = []), (e.instances = {})
      const i = t === Jr,
        c = ir ? history.state : {}
      n && (o || i ? s.replace(e, cr({ scroll: i && c && c.scroll }, r)) : s.push(e, r)),
        (a.value = e),
        k(e, t, n, i),
        E()
    }
    s.listen((e, t, n) => {
      const o = h(e.fullPath)
      u = o
      const r = a.value
      var l, i
      ir && ((l = Cr(r.fullPath, n.delta)), (i = wr()), Sr.set(l, i)),
        y(o, r)
          .catch((e) =>
            u !== o
              ? Xr(3, { from: r, to: o })
              : 2 === e.type
              ? e
              : 1 === e.type
              ? (s.go(-n.delta, !1), g(e.to, o).catch(() => {}), Promise.reject())
              : (s.go(-n.delta, !1), S(e))
          )
          .then((e) => {
            ;(e = e || _(o, r, !1)) && s.go(-n.delta, !1), b(o, r, e)
          })
          .catch(() => {})
    })
    let w,
      x = fs(),
      C = fs()
    function S(e) {
      return E(e), C.list().forEach((t) => t(e)), Promise.reject(e)
    }
    function E(e) {
      w || ((w = !0), x.list().forEach(([t, n]) => (e ? n(e) : t())), x.reset())
    }
    function k(e, t, n, o) {
      if (!ir || !r) return Promise.resolve()
      let s =
        (!n &&
          (function (e) {
            const t = Sr.get(e)
            return Sr.delete(e), t
          })(Cr(e.fullPath, 0))) ||
        ((o || !n) && history.state && history.state.scroll) ||
        null
      return nt()
        .then(() => r(e, t, s))
        .then((e) => e && xr(e))
        .catch(S)
    }
    function A(e) {
      return new Promise((t, n) => {
        let o = C.add((e) => {
            o(), r(), n(e)
          }),
          r = c.add((e, n, s) => {
            o(), r(), t(s)
          })
        s.go(e)
      })
    }
    return {
      currentRoute: a,
      addRoute: function (e, n) {
        let o, r
        return Gr(e) ? ((o = t.getRecordMatcher(e)), (r = n)) : (r = e), t.addRoute(r, o)
      },
      removeRoute: function (e) {
        let n = t.getRecordMatcher(e)
        n && t.removeRoute(n)
      },
      hasRoute: function (e) {
        return !!t.getRecordMatcher(e)
      },
      getRoutes: function () {
        return t.getRoutes().map((e) => e.record)
      },
      resolve: h,
      options: e,
      push: v,
      replace: function (e) {
        return v(cr(m(e), { replace: !0 }))
      },
      go: A,
      back: () => A(-1),
      forward: () => A(1),
      beforeEach: l.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: C.add,
      isReady: function () {
        return w && a.value !== Jr
          ? Promise.resolve()
          : new Promise((e, t) => {
              x.add([e, t])
            })
      },
      history: s,
      install(e) {
        !(function (e, t) {
          e.component('RouterLink', ms),
            e.component('RouterView', ys),
            (e.config.globalProperties.$router = t),
            Object.defineProperty(e.config.globalProperties, '$route', { get: () => t.currentRoute.value }),
            ir &&
              !t._started &&
              t.currentRoute.value === Jr &&
              ((t._started = !0), t.push(t.history.location.fullPath).catch((e) => {}))
          const n = {}
          for (let e in Jr) n[e] = ao(() => t.currentRoute.value[e])
          e.provide(sr, t), e.provide(lr, $e(n))
        })(e, this)
      }
    }
  })({
    history: (function (e) {
      const t = Rr((e = _r(e))),
        n = (function (e, t, n, o) {
          let r = [],
            s = [],
            l = null
          const i = ({ state: s }) => {
            const i = kr(e, window.location)
            if (!s) return o(i.fullPath)
            const c = n.value,
              a = t.value
            if (((n.value = i), (t.value = s), l && l.fullPath === c.fullPath)) return void (l = null)
            const u = a ? s.position - a.position : 0
            r.forEach((e) => {
              e(n.value, c, { delta: u, type: gr.pop, direction: u ? (u > 0 ? yr.forward : yr.back) : yr.unknown })
            })
          }
          function c() {
            const { history: e } = window
            e.state && e.replaceState(cr({}, e.state, { scroll: wr() }), '')
          }
          return (
            window.addEventListener('popstate', i),
            window.addEventListener('beforeunload', c),
            {
              pauseListeners: function () {
                l = n.value
              },
              listen: function (e) {
                r.push(e)
                const t = () => {
                  const t = r.indexOf(e)
                  t > -1 && r.splice(t, 1)
                }
                return s.push(t), t
              },
              destroy: function () {
                for (const e of s) e()
                ;(s = []), window.removeEventListener('popstate', i), window.removeEventListener('beforeunload', c)
              }
            }
          )
        })(e, t.state, t.location, t.replace),
        o = cr(
          {
            location: '',
            base: e,
            go: function (e, t = !0) {
              t || n.pauseListeners(), history.go(e)
            }
          },
          t,
          n
        )
      return (
        Object.defineProperty(o, 'location', { get: () => t.location.value }),
        Object.defineProperty(o, 'state', { get: () => t.state.value }),
        o
      )
    })(),
    routes: [
      { path: '/', component: () => import('./index.7159e276.js') },
      { path: '/tests', component: () => import('./Tests.8d00aafe.js') },
      ws
    ]
  }),
  Cs = We(localStorage.getItem('wg3.theme') || 'light')
In(Cs, (e) => {
  localStorage.setItem('wg3.theme', e)
})
const Ss = () => ({ theme: Cs }),
  Es = We([]),
  ks = () => ({
    notify: (e) => {
      Es.value.push(e),
        (e.timeout = setTimeout(() => {
          Es.value.splice(Es.value.indexOf(e), 1)
        }, 6e3))
    },
    dismiss: (e) => {
      clearTimeout(Es.value[e].timeout), Es.value.splice(e, 1)
    },
    notifications: Es
  })
var As = uo({
  setup() {
    const { notifications: e, dismiss: t } = ks()
    return { notifications: e, dismiss: t }
  }
})
const Rs = yt('data-v-18d93a83')
vt('data-v-18d93a83')
const Os = { 'data-test': 'notifications', class: 'notifications' },
  Fs = { 'data-test': 'text' }
gt()
const Ps = Rs(function (e, t) {
  return (
    Lt(),
    Mt('ul', Os, [
      (Lt(!0),
      Mt(
        At,
        null,
        po(
          e.notifications,
          (t, n) => (
            Lt(),
            Mt(
              'li',
              { 'data-test': 'message', key: t, class: t.status },
              [
                It('i', { 'data-test': 'icon', class: 'icon-close-small', onClick: (t) => e.dismiss(n) }, null, 8, [
                  'onClick'
                ]),
                It('span', Fs, mo(t.message), 1)
              ],
              2
            )
          )
        ),
        128
      ))
    ])
  )
})
;(As.render = Ps), (As.__scopeId = 'data-v-18d93a83')
var Ts = {
  components: { Notifications: As },
  setup() {
    const { theme: e } = Ss()
    return { theme: e }
  }
}
const Ls = It('div', { id: 'portal:dialog' }, null, -1)
Ts.render = function (e, t) {
  const n = Ct('Notifications'),
    o = Ct('router-view')
  return Lt(), Mt('div', { class: ['wg3', e.theme] }, [It(n), Ls, It(o)], 2)
}
const Ms = ((...e) => {
  const t = (er || (er = mn(Zo))).createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (e) => {
      const o = (function (e) {
        if (w(e)) {
          return document.querySelector(e)
        }
        return e
      })(e)
      if (!o) return
      const r = t._component
      _(r) || r.render || r.template || (r.template = o.innerHTML), (o.innerHTML = '')
      const s = n(o)
      return o.removeAttribute('v-cloak'), s
    }),
    t
  )
})(Ts)
Ms.use(xs), Ms.mount('#app')
export {
  At as F,
  xt as T,
  mo as _,
  gt as a,
  Ct as b,
  Mt as c,
  uo as d,
  It as e,
  Vt as f,
  $e as g,
  ao as h,
  Dt as i,
  ho as j,
  po as k,
  dt as l,
  Et as m,
  Ht as n,
  Lt as o,
  vt as p,
  We as q,
  xs as r,
  In as s,
  oo as t,
  Ss as u,
  Fn as v,
  yt as w,
  Mn as x,
  ks as y
}
