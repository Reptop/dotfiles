import { b } from "../../common/lit-html-5d8ac96f.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", r = (o2) => o2.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = (i2, t2) => {
  var s2, o2;
  const n2 = i2._$AN;
  if (n2 === void 0)
    return false;
  for (const i3 of n2)
    (o2 = (s2 = i3)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e$1(i3, t2);
  return true;
}, o = (i2) => {
  let t2, s2;
  do {
    if ((t2 = i2._$AM) === void 0)
      break;
    s2 = t2._$AN, s2.delete(i2), i2 = t2;
  } while ((s2 == null ? void 0 : s2.size) === 0);
}, n = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let s2 = t2._$AN;
    if (s2 === void 0)
      t2._$AN = s2 = /* @__PURE__ */ new Set();
    else if (s2.has(i2))
      break;
    s2.add(i2), l(t2);
  }
};
function r$1(i2) {
  this._$AN !== void 0 ? (o(this), this._$AM = i2, n(this)) : this._$AM = i2;
}
function h(i2, t2 = false, s2 = 0) {
  const n2 = this._$AH, r2 = this._$AN;
  if (r2 !== void 0 && r2.size !== 0)
    if (t2)
      if (Array.isArray(n2))
        for (let i3 = s2; i3 < n2.length; i3++)
          e$1(n2[i3], false), o(n2[i3]);
      else
        n2 != null && (e$1(n2, false), o(n2));
    else
      e$1(this, i2);
}
const l = (i2) => {
  var t$12, e2, o2, n2;
  i2.type == t.CHILD && ((t$12 = (o2 = i2)._$AP) !== null && t$12 !== void 0 || (o2._$AP = h), (e2 = (n2 = i2)._$AQ) !== null && e2 !== void 0 || (n2._$AQ = r$1));
};
class d extends i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, s2) {
    super._$AT(i2, t2, s2), n(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var s2, n2;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e$1(this, i2), o(this));
  }
  setValue(t2) {
    if (r(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s {
  constructor(t2) {
    this.U = t2;
  }
  disconnect() {
    this.U = void 0;
  }
  reconnect(t2) {
    this.U = t2;
  }
  deref() {
    return this.U;
  }
}
class i$1 {
  constructor() {
    this.Y = void 0, this.q = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    var t2;
    (t2 = this.Y) !== null && t2 !== void 0 || (this.Y = new Promise((t3) => this.q = t3));
  }
  resume() {
    var t2;
    (t2 = this.q) === null || t2 === void 0 || t2.call(this), this.Y = this.q = void 0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = (t2) => !t$1(t2) && typeof t2.then == "function";
class h$1 extends d {
  constructor() {
    super(...arguments), this._$Cwt = 1073741823, this._$Cyt = [], this._$CG = new s(this), this._$CK = new i$1();
  }
  render(...s2) {
    var i2;
    return (i2 = s2.find((t2) => !n$1(t2))) !== null && i2 !== void 0 ? i2 : b;
  }
  update(s2, i2) {
    const r2 = this._$Cyt;
    let e2 = r2.length;
    this._$Cyt = i2;
    const o2 = this._$CG, h2 = this._$CK;
    this.isConnected || this.disconnected();
    for (let t2 = 0; t2 < i2.length && !(t2 > this._$Cwt); t2++) {
      const s3 = i2[t2];
      if (!n$1(s3))
        return this._$Cwt = t2, s3;
      t2 < e2 && s3 === r2[t2] || (this._$Cwt = 1073741823, e2 = 0, Promise.resolve(s3).then(async (t3) => {
        for (; h2.get(); )
          await h2.get();
        const i3 = o2.deref();
        if (i3 !== void 0) {
          const r3 = i3._$Cyt.indexOf(s3);
          r3 > -1 && r3 < i3._$Cwt && (i3._$Cwt = r3, i3.setValue(t3));
        }
      }));
    }
    return b;
  }
  disconnected() {
    this._$CG.disconnect(), this._$CK.pause();
  }
  reconnected() {
    this._$CG.reconnect(this), this._$CK.resume();
  }
}
const c = e(h$1);
export { c as until };
