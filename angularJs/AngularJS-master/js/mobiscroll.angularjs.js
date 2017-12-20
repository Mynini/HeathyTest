/* eslint-disable */ ! function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], t) : e.mobiscroll = t(e.angular)
}(this, function (e) {
	"use strict";

	function t(e) {
		return "function" == typeof e
	}

	function a(e) {
		return "object" === (void 0 === e ? "undefined" : ye(e))
	}

	function n(e) {
		return "number" == typeof e.length
	}

	function s(e) {
		return e.replace(/-+(.)?/g, function (e, t) {
			return t ? t.toUpperCase() : ""
		})
	}

	function r(e, t, a) {
		for (var n in t) a && (Ie.isPlainObject(t[n]) || Ie.isArray(t[n])) ? ((Ie.isPlainObject(t[n]) && !Ie.isPlainObject(e[n]) || Ie.isArray(t[n]) && !Ie.isArray(e[n])) && (e[n] = {}), r(e[n], t[n], a)) : void 0 !== t[n] && (e[n] = t[n])
	}

	function i(e) {
		return e.replace(/::/g, "/")
			.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
			.replace(/([a-z\d])([A-Z])/g, "$1_$2")
			.replace(/_/g, "-")
			.toLowerCase()
	}

	function o(e, t) {
		return "number" != typeof t || ke[i(e)] ? t : t + "px"
	}

	function l() {}

	function c(e) {
		var t, a = [];
		for (t in e) a.push(e[t]);
		return a
	}

	function d(e) {
		var t, a = {};
		if (e)
			for (t = 0; t < e.length; t++) a[e[t]] = e[t];
		return a
	}

	function m(e) {
		return e - parseFloat(e) >= 0
	}

	function u(e) {
		return "string" == typeof e
	}

	function h(e, t, a) {
		return Math.max(t, Math.min(e, a))
	}

	function f(e, t) {
		var a, n;
		return t = t || 100
			, function () {
				var s = this
					, r = +new Date
					, i = arguments;
				a && r < a + t ? (clearTimeout(n), n = setTimeout(function () {
					a = r, e.apply(s, i)
				}, t)) : (a = r, e.apply(s, i))
			}
	}

	function p(e) {
		"vibrate" in navigator && navigator.vibrate(e || 50)
	}

	function b() {
		We++, setTimeout(function () {
			We--
		}, 500)
	}

	function v(e, t) {
		var a = (e.originalEvent || e)
			.changedTouches[0]
			, n = document.createEvent("MouseEvents");
		n.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), n.tap = !0, t.mbscChange = !0, t.dispatchEvent(n), b()
	}

	function g(e, t, a) {
		var n = e.originalEvent || e
			, s = (a ? "page" : "client") + t;
		return n.targetTouches && n.targetTouches[0] ? n.targetTouches[0][s] : n.changedTouches && n.changedTouches[0] ? n.changedTouches[0][s] : e[s]
	}

	function x(e, t, a, n, s, r) {
		function i(e) {
			u || (n && e.preventDefault(), u = this, d = g(e, "X"), m = g(e, "Y"), h = !1, f = new Date)
		}

		function o(e) {
			u && !h && (Math.abs(g(e, "X") - d) > s || Math.abs(g(e, "Y") - m) > s) && (h = !0)
		}

		function l(t) {
			u && ((r && new Date - f < 100 || !h) && (t.preventDefault(), a.call(u, t, e)), u = !1, b())
		}

		function c() {
			u = !1
		}
		var d, m, u, h, f, p = Te.$
			, v = p(t);
		s = s || 9, e.settings.tap && v.on("touchstart.mbsc", i)
			.on("touchcancel.mbsc", c)
			.on("touchmove.mbsc", o)
			.on("touchend.mbsc", l), v.on("click.mbsc", function (t) {
				n && t.preventDefault(), a.call(this, t, e)
			})
	}

	function T(e) {
		if (We && !e.tap && ("TEXTAREA" != e.target.nodeName || "mousedown" != e.type)) return e.stopPropagation(), e.preventDefault(), !1
	}


	function w(e, t, a, n, s, r, i) {
		var o = new Date(e, t, a, n || 0, s || 0, r || 0, i || 0);
		return 23 == o.getHours() && 0 === (n || 0) && o.setHours(o.getHours() + 2), o
	}

	function S(e, t, a) {
		if (!t) return null;
		var n, s, r = qe({}, Xe, a)
			, i = function (t) {
				for (var a = 0; n + 1 < e.length && e.charAt(n + 1) == t;) a++, n++;
				return a
			}
			, o = function (e, t, a) {
				var n = "" + t;
				if (i(e))
					for (; n.length < a;) n = "0" + n;
				return n
			}
			, l = function (e, t, a, n) {
				return i(e) ? n[t] : a[t]
			}
			, c = ""
			, d = !1;
		for (n = 0; n < e.length; n++)
			if (d) "'" != e.charAt(n) || i("'") ? c += e.charAt(n) : d = !1;
			else switch (e.charAt(n)) {
			case "d":
				c += o("d", r.getDay(t), 2);
				break;
			case "D":
				c += l("D", t.getDay(), r.dayNamesShort, r.dayNames);
				break;
			case "o":
				c += o("o", (t.getTime() - new Date(t.getFullYear(), 0, 0)
					.getTime()) / 864e5, 3);
				break;
			case "m":
				c += o("m", r.getMonth(t) + 1, 2);
				break;
			case "M":
				c += l("M", r.getMonth(t), r.monthNamesShort, r.monthNames);
				break;
			case "y":
				s = r.getYear(t), c += i("y") ? s : (s % 100 < 10 ? "0" : "") + s % 100;
				break;
			case "h":
				var m = t.getHours();
				c += o("h", m > 12 ? m - 12 : 0 === m ? 12 : m, 2);
				break;
			case "H":
				c += o("H", t.getHours(), 2);
				break;
			case "i":
				c += o("i", t.getMinutes(), 2);
				break;
			case "s":
				c += o("s", t.getSeconds(), 2);
				break;
			case "a":
				c += t.getHours() > 11 ? r.pmText : r.amText;
				break;
			case "A":
				c += t.getHours() > 11 ? r.pmText.toUpperCase() : r.amText.toUpperCase();
				break;
			case "'":
				i("'") ? c += "'" : d = !0;
				break;
			default:
				c += e.charAt(n)
			}
		return c
	}

	function M(e, t, a) {
		var n = qe({}, Xe, a)
			, s = n.defaultValue && n.defaultValue.getTime ? n.defaultValue : new Date;
		if (!e || !t) return s;
		if (t.getTime) return t;
		t = "object" == (void 0 === t ? "undefined" : ye(t)) ? t.toString() : t + "";
		var r, i = n.shortYearCutoff
			, o = n.getYear(s)
			, l = n.getMonth(s) + 1
			, c = n.getDay(s)
			, d = -1
			, m = s.getHours()
			, u = s.getMinutes()
			, h = 0
			, f = -1
			, p = !1
			, b = function (t) {
				var a = r + 1 < e.length && e.charAt(r + 1) == t;
				return a && r++, a
			}
			, v = function (e) {
				b(e);
				var a = "@" == e ? 14 : "!" == e ? 20 : "y" == e ? 4 : "o" == e ? 3 : 2
					, n = new RegExp("^\\d{1," + a + "}")
					, s = t.substr(T)
					.match(n);
				return s ? (T += s[0].length, parseInt(s[0], 10)) : 0
			}
			, g = function (e, a, n) {
				var s, r = b(e) ? n : a;
				for (s = 0; s < r.length; s++)
					if (t.substr(T, r[s].length)
						.toLowerCase() == r[s].toLowerCase()) return T += r[s].length, s + 1;
				return 0
			}
			, x = function () {
				T++
			}
			, T = 0;
		for (r = 0; r < e.length; r++)
			if (p) "'" != e.charAt(r) || b("'") ? x() : p = !1;
			else switch (e.charAt(r)) {
			case "d":
				c = v("d");
				break;
			case "D":
				g("D", n.dayNamesShort, n.dayNames);
				break;
			case "o":
				d = v("o");
				break;
			case "m":
				l = v("m");
				break;
			case "M":
				l = g("M", n.monthNamesShort, n.monthNames);
				break;
			case "y":
				o = v("y");
				break;
			case "H":
				m = v("H");
				break;
			case "h":
				m = v("h");
				break;
			case "i":
				u = v("i");
				break;
			case "s":
				h = v("s");
				break;
			case "a":
				f = g("a", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
				break;
			case "A":
				f = g("A", [n.amText, n.pmText], [n.amText, n.pmText]) - 1;
				break;
			case "'":
				b("'") ? x() : p = !0;
				break;
			default:
				x()
			}
		if (o < 100 && (o += (new Date)
				.getFullYear() - (new Date)
				.getFullYear() % 100 + (o <= ("string" != typeof i ? i : (new Date)
					.getFullYear() % 100 + parseInt(i, 10)) ? 0 : -100)), d > -1)
			for (l = 1, c = d;;) {
				var y = 32 - new Date(o, l - 1, 32, 12)
					.getDate();
				if (c <= y) break;
				l++, c -= y
			}
		m = -1 == f ? m : f && m < 12 ? m + 12 : f || 12 != m ? m : 0;
		var _ = n.getDate(o, l - 1, c, m, u, h);
		return n.getYear(_) != o || n.getMonth(_) + 1 != l || n.getDay(_) != c ? s : _
	}

	function C(e) {
		var t;
		for (t in e)
			if (void 0 !== Qe[e[t]]) return !0;
		return !1
	}

	function k(e, t) {
		if ("touchstart" == e.type) Je(t)
			.attr("data-touch", "1");
		else if (Je(t)
			.attr("data-touch")) return Je(t)
			.removeAttr("data-touch"), !1;
		return !0
	}

	function D(e, t) {
		var a, n = getComputedStyle(e[0]);
		return Je.each(["t", "webkitT", "MozT", "OT", "msT"], function (e, t) {
			if (void 0 !== n[t + "ransform"]) return a = n[t + "ransform"], !1
		}), a = a.split(")")[0].split(", "), t ? a[13] || a[5] : a[12] || a[4]
	}

	function N(e) {
		if (e) {
			if (at[e]) return at[e];
			var t = Je('<div style="background-color:' + e + ';"></div>')
				.appendTo("body")
				, a = getComputedStyle(t[0])
				, n = a.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "")
				.split(",")
				, s = .299 * n[0] + .587 * n[1] + .114 * n[2]
				, r = s > 130 ? "#000" : "#fff";
			return t.remove(), at[e] = r, r
		}
	}

	function A(e, t) {
		function a(e) {
			var t;
			o = Je(this), u = +o.attr("data-step"), l = !1, "mousedown" == e.type && e.preventDefault(), "keydown" != e.type ? (d = g(e, "X"), m = g(e, "Y"), t = k(e, this)) : t = 32 === e.keyCode, c || !t || o.hasClass("mbsc-fr-btn-d") || (c = !0, setTimeout(i, 100), "mousedown" == e.type && Je(document)
				.on("mousemove", n)
				.on("mouseup", s))
		}

		function n(e) {
			(Math.abs(d - g(e, "X")) > 7 || Math.abs(m - g(e, "Y")) > 7) && r()
		}

		function s(e) {
			"touchend" == e.type && e.preventDefault(), l || i(), r(), "mouseup" == e.type && Je(document)
				.off("mousemove", n)
				.off("mouseup", s)
		}

		function r() {
			c = !1, o && o.removeClass("mbsc-fr-btn-a")
		}

		function i() {
			c && !o.hasClass("mbsc-fr-btn-d") && (l = !0, t(u, i))
		}
		var o, l, c, d, m, u;
		e.on("touchstart mousedown keydown", a)
			.on("touchmove", n)
			.on("touchend touchcancel keyup", s)
	}

	function V(e) {
		return e[0].innerWidth || e.innerWidth()
	}

	function I(e, t) {
		var a = {}
			, n = e.parent()
			, s = n.find(".mbsc-err-msg")
			, r = e.attr("data-icon-align") || "left"
			, i = e.attr("data-icon");
		n.hasClass(Ct) ? n = n.parent() : Je('<span class="' + Ct + '"></span>')
			.insertAfter(e)
			.append(e), s && n.find("." + Ct)
			.append(s), i && (-1 !== i.indexOf("{") ? a = JSON.parse(i) : a[r] = i), (i || t) && (qe(a, t), n.addClass((a.right ? "mbsc-ic-right " : "") + (a.left ? " mbsc-ic-left" : ""))
				.find("." + Ct)
				.append(a.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + a.left + '"></span>' : "")
				.append(a.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + a.right + '"></span>' : ""))
	}

	function O(e, t, a) {
		var n = {}
			, s = a[0]
			, r = a.attr("data-password-toggle")
			, i = a.attr("data-icon-show") || "eye"
			, o = a.attr("data-icon-hide") || "eye-blocked";
		r && (n.right = "password" == s.type ? i : o), I(a, n), r && x(e, t.find(".mbsc-right-ic")
			.addClass("mbsc-input-toggle")
			, function () {
				"text" == s.type ? (s.type = "password", Je(this)
					.addClass("mbsc-ic-" + i)
					.removeClass("mbsc-ic-" + o)) : (s.type = "text", Je(this)
					.removeClass("mbsc-ic-" + i)
					.addClass("mbsc-ic-" + o))
			})
	}

	function F(e, t) {
		"button" != t && "submit" != t && "segmented" != t && (e.addClass("mbsc-control-w")
			.find("label")
			.addClass("mbsc-label"), e.contents()
			.filter(function () {
				return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue)
			})
			.each(function () {
				Je('<span class="mbsc-label"></span>')
					.insertAfter(this)
					.append(this)
			}))
	}

	function H(e) {
		var t = [Math.round(e.r)
			.toString(16), Math.round(e.g)
			.toString(16), Math.round(e.b)
			.toString(16)];
		return Je.each(t, function (e, a) {
			1 == a.length && (t[e] = "0" + a)
		}), "#" + t.join("")
	}

	function L(e) {
		return e = parseInt(e.indexOf("#") > -1 ? e.substring(1) : e, 16), {
			r: e >> 16
			, g: (65280 & e) >> 8
			, b: 255 & e
			, toString: function () {
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
			}
		}
	}

	function P(e) {
		var t, a, n, s = e.h
			, r = 255 * e.s / 100
			, i = 255 * e.v / 100;
		if (0 === r) t = a = n = i;
		else {
			var o = i
				, l = (255 - r) * i / 255
				, c = s % 60 * (o - l) / 60;
			360 == s && (s = 0), s < 60 ? (t = o, n = l, a = l + c) : s < 120 ? (a = o, n = l, t = o - c) : s < 180 ? (a = o, t = l, n = l + c) : s < 240 ? (n = o, t = l, a = o - c) : s < 300 ? (n = o, a = l, t = l + c) : s < 360 ? (t = o, a = l, n = o - c) : t = a = n = 0
		}
		return {
			r: t
			, g: a
			, b: n
			, toString: function () {
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
			}
		}
	}

	function E(e) {
		var t, a, n = 0
			, s = Math.min(e.r, e.g, e.b)
			, r = Math.max(e.r, e.g, e.b)
			, i = r - s;
		return a = r, t = r ? 255 * i / r : 0, n = t ? e.r == r ? (e.g - e.b) / i : e.g == r ? 2 + (e.b - e.r) / i : 4 + (e.r - e.g) / i : -1, n *= 60, n < 0 && (n += 360), t *= 100 / 255, a *= 100 / 255, {
			h: n
			, s: t
			, v: a
			, toString: function () {
				return "hsv(" + Math.round(this.h) + "," + Math.round(this.s) + "%," + Math.round(this.v) + "%)"
			}
		}
	}

	function $(e) {
		var t, a, n = e.r / 255
			, s = e.g / 255
			, r = e.b / 255
			, i = Math.max(n, s, r)
			, o = Math.min(n, s, r)
			, l = (i + o) / 2;
		if (i == o) t = a = 0;
		else {
			var c = i - o;
			switch (a = l > .5 ? c / (2 - i - o) : c / (i + o), i) {
			case n:
				t = (s - r) / c + (s < r ? 6 : 0);
				break;
			case s:
				t = (r - n) / c + 2;
				break;
			case r:
				t = (n - s) / c + 4
			}
			t /= 6
		}
		return {
			h: Math.round(360 * t)
			, s: Math.round(100 * a)
			, l: Math.round(100 * l)
			, toString: function () {
				return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)"
			}
		}
	}

	function Y(e) {
		var t, a, n, s, r, i, o = e.h
			, l = e.s
			, c = e.l;
		return isFinite(o) || (o = 0), isFinite(l) || (l = 0), isFinite(c) || (c = 0), o /= 60, o < 0 && (o = 6 - -o % 6), o %= 6, l = Math.max(0, Math.min(1, l / 100)), c = Math.max(0, Math.min(1, c / 100)), r = (1 - Math.abs(2 * c - 1)) * l, i = r * (1 - Math.abs(o % 2 - 1)), o < 1 ? (t = r, a = i, n = 0) : o < 2 ? (t = i, a = r, n = 0) : o < 3 ? (t = 0, a = r, n = i) : o < 4 ? (t = 0, a = i, n = r) : o < 5 ? (t = i, a = 0, n = r) : (t = r, a = 0, n = i), s = c - r / 2, {
			r: Math.round(255 * (t + s))
			, g: Math.round(255 * (a + s))
			, b: Math.round(255 * (n + s))
			, toString: function () {
				return "rgb(" + this.r + "," + this.g + "," + this.b + ")"
			}
		}
	}

	function z(e) {
		return $(L(e))
	}

	function j(e) {
		return H(Y(e))
	}

	function W(e) {
		return H(P(e))
	}


	function R(e) {
		return E(L(e))
	}

	function J(e) {
		Et.length || e.show(), Et.push(e)
	}

	function B(e) {
		var t = $t.length;
		$t.push(e), Et.length || (t ? $t[0].hide() : e.show(!1, !0))
	}

	function K(e, t, a, n) {
		return qe({
			display: t.display || "center"
			, cssClass: "mbsc-alert"
			, okText: t.okText
			, cancelText: t.cancelText
			, context: t.context
			, theme: t.theme
			, closeOnOverlayTap: !1
			, onBeforeClose: function () {
				e.shift()
			}
			, onBeforeShow: function () {
				Te.activeInstance = null
			}
			, onHide: function (e, n) {
				a && a(n._resolve), t.callback && t.callback(n._resolve), n && n.destroy(), Et.length ? Et[0].show() : $t.length && $t[0].show(!1, !0)
			}
		}, n)
	}

	function q(e) {
		return (e.title ? "<h2>" + e.title + "</h2>" : "") + "<p>" + (e.message || "") + "</p>"
	}

	function U(e, t, a) {
		J(new Lt(e, K(Et, t, a)))
	}

	function G(e, t, a) {
		var n = new Lt(e, K(Et, t, a, {
			buttons: ["cancel", "ok"]
			, onSet: function () {
				n._resolve = !0
			}
		}));
		n._resolve = !1, J(n)
	}

	function X(e, t, a) {
		var n = void 0
			, s = new Lt(e, K(Et, t, a, {
				buttons: ["cancel", "ok"]
				, onShow: function () {
					n = s._markup.find("input")[0], setTimeout(function () {
						n.focus()
					}, 300)
				}
				, onSet: function () {
					s._resolve = n.value
				}
			}));
		s._resolve = null, J(s)
	}

	function Z(e, t, a, n, s) {
		var r = void 0;
		B(new Lt(e, K($t, t, a, {
			display: "bottom"
			, animate: s
			, cssClass: n || "mbsc-snackbar"
			, scrollLock: !1
			, focusTrap: !1
			, buttons: []
			, onShow: function (e, a) {
				!1 !== t.duration && (r = setTimeout(function () {
					a && a.hide()
				}, t.duration || 3e3)), t.button && a.tap(Je(".mbsc-snackbar-btn", e.target), function () {
					a.hide(), t.button.action && t.button.action.call(this)
				})
			}
			, onClose: function () {
				clearTimeout(r)
			}
		})))
	}

	function Q(e, t, a) {
		Z(e, t, a, "mbsc-toast", "fade")
	}

	function ee(e, t, a) {
		var n = void 0;
		return Pt ? n = new Promise(function (n) {
			e(t, a, n)
		}) : e(t, a), n
	}

	function te(e) {
		var t = e[0]
			, a = e.attr("data-role")
			, n = e.attr("type") || t.nodeName.toLowerCase();
		return /(switch|range|segmented|stepper)/.test(a) && (n = a), n
	}

	function ae(e) {
		var t = Te.themes.form[e];
		return t && t.addRipple ? t : null
	}

	function ne() {
		clearTimeout(Gt), Gt = setTimeout(function () {
			Je("textarea.mbsc-control")
				.each(function () {
					se(this)
				})
		}, 100)
	}

	function se(e) {
		var t = void 0
			, a = void 0
			, n = void 0
			, s = Je(e)
			.attr("rows") || 6;
		e.offsetHeight && (e.style.height = "", n = e.scrollHeight - e.offsetHeight, t = e.offsetHeight + (n > 0 ? n : 0), a = Math.round(t / 24), a > s ? (e.scrollTop = t, t = 24 * s + (t - 24 * a), Je(e)
				.addClass("mbsc-textarea-scroll")) : Je(e)
			.removeClass("mbsc-textarea-scroll"), t && (e.style.height = t + "px"))
	}

	function re(e) {
		if (!Je(e)
			.hasClass("mbsc-textarea-scroll")) {
			var t = e.scrollHeight - e.offsetHeight
				, a = e.offsetHeight + t;
			e.scrollTop = 0, e.style.height = a + "px"
		}
	}

	function ie() {
		return function (e, t, a) {
			function n() {
				e.$emit("mbscRepeatRender" + a.mobiscrollRepeatRender)
			}
			n(), e.$on("$destroy", n)
		}
	}

	function oe(t, a, n, s, r, i) {
		var o = Te.ng.getDDO(s, t, a);
		return o.link = void 0, o.compile = function (o) {
			var l, c, d = "" + oa++
				, m = Je(o[0]);
			return m.children()
				.each(function () {
					for (c = 0; c < ia.length; c++)
						if (Je(this)
							.attr(ia[c])) return l = !0, !1
				}), l && m.children()
				.attr("mobiscroll-repeat-render", d)
				, function (o, c, m, u) {
					var h, f, p = void 0 === i || i
						, b = Je(c[0])
						, v = Te.ng.getOpt(o, m, t, u, void 0, void 0, p);
					e.extend(v, a), p && Te.ng.addWatch(s, o, u, b, m, t), l ? o.$on("mbscRepeatRender" + d, function () {
							f && r.cancel(f), f = r(function () {
								h = n(c[0], v), m.mobiscrollInstance && s(m.mobiscrollInstance)
									.assign(o, h)
							}, 1)
						}) : b.children()
						.length && (h = n(c[0], v), m.mobiscrollInstance && s(m.mobiscrollInstance)
							.assign(o, h))
				}
		}, o
	}

	function le(e, t, a) {
		var n;
		return e = Je(Je.parseHTML ? Je.parseHTML(e) : e), 1 == e.length && e.is("li") || Je(e[0])
			.is("li") ? (n = e.clone(), Je(n[0])
				.attr("ng-repeat-start", "item in " + t), Je(n)
				.filter("li")
				.eq(-1)
				.attr("ng-repeat-end", "")
				.attr("mobiscroll-listview-item", a)) : (n = Je("<li></li>")
				.append(e.clone()), n.attr("ng-repeat", "item in " + t)
				.attr("mobiscroll-listview-item", a)), n
	}

	function ce(e) {
		var t, a = 0;
		if (!e) return a;
		for (t = 0; t < e.length; t++) a++, e[t].children && e[t].children.length && (a += ce(e[t].children));
		return a
	}

	function de(e) {
		for (var t = 0, a = 1, n = 0; e.length;) t > 3 ? a = 3600 : t > 1 && (a = 60), n += e.pop() * a * (t % 2 ? 10 : 1), t++;
		return n
	}

	function ue(e, t) {
		var a = new XMLHttpRequest;
		a.open("GET", e, !0), a.onload = function () {
			this.status >= 200 && this.status < 400 && t(JSON.parse(this.response))
		}, a.onerror = function () {}, a.send()
	}

	function he(e, t, a) {
		"jsonp" == a ? me(e, t) : ue(e, t)
	}

	function fe(e, t, a, n, s, r) {
		var i = Qa[a[0].id];
		i && (r ? r.$setViewValue(i.getEllapsedTime()) : e(s[t])
			.assign(n, i.getEllapsedTime()))
	}

	function pe(e, t) {
		var a = Qa[e[0].id];
		a && (a.setEllapsedTime(t, !1), Je(e[0])
			.val(a._value))
	}

	function be(e) {
		var t = Qa[e[0].id];
		if (t) return t.getEllapsedTime()
	}

	function ve(e, t) {
		var a = g(t, "X", !0)
			, n = g(t, "Y", !0)
			, s = e.offset()
			, r = a - s.left
			, i = n - s.top
			, o = Math.max(r, e[0].offsetWidth - r)
			, l = Math.max(i, e[0].offsetHeight - i)
			, c = 2 * Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2));
		ge(rn), rn = Je('<span class="mbsc-ripple"></span>')
			.css({
				width: c
				, height: c
				, top: n - s.top - c / 2
				, left: a - s.left - c / 2
			})
			.appendTo(e), setTimeout(function () {
				rn.addClass("mbsc-ripple-scaled mbsc-ripple-visible")
			}, 10)
	}

	function ge(e) {
		setTimeout(function () {
			e && (e.removeClass("mbsc-ripple-visible"), setTimeout(function () {
				e.remove()
			}, 2e3))
		}, 100)
	}

	function xe(e, t, a, n) {
		var s, r;
		e.off(".mbsc-ripple")
			.on("touchstart.mbsc-ripple mousedown.mbsc-ripple", t, function (e) {
				k(e, this) && (s = g(e, "X"), r = g(e, "Y"), sn = Je(this), sn.hasClass(a) || sn.hasClass(n) ? sn = null : ve(sn, e))
			})
			.on("touchmove.mbsc-ripple mousemove.mbsc-ripple", t, function (e) {
				(sn && Math.abs(g(e, "X") - s) > 9 || Math.abs(g(e, "Y") - r) > 9) && (ge(rn), sn = null)
			})
			.on("touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple", t, function () {
				sn && (setTimeout(function () {
					ge(rn)
				}, 100), sn = null)
			})
	}
	e = e && e.hasOwnProperty("default") ? e.default : e;
	var Te = Te || {}
		, ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}
		, _e = function (e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		, we = function () {
			function e(e, t) {
				for (var a = 0; a < t.length; a++) {
					var n = t[a];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
				}
			}
			return function (t, a, n) {
				return a && e(t.prototype, a), n && e(t, n), t
			}
		}()
		, Se = function e(t, a, n) {
			null === t && (t = Function.prototype);
			var s = Object.getOwnPropertyDescriptor(t, a);
			if (void 0 === s) {
				var r = Object.getPrototypeOf(t);
				return null === r ? void 0 : e(r, a, n)
			}
			if ("value" in s) return s.value;
			var i = s.get;
			if (void 0 !== i) return i.call(n)
		}
		, Me = function (e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e
					, enumerable: !1
					, writable: !0
					, configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		, Ce = function (e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		, ke = {
			"column-count": 1
			, columns: 1
			, "font-weight": 1
			, "line-height": 1
			, opacity: 1
			, "z-index": 1
			, zoom: 1
		}
		, De = {
			readonly: "readOnly"
		}
		, Ne = []
		, Ae = Array.prototype.slice
		, Ve = function () {
			var e = function (e) {
					var t = this
						, a = 0;
					for (a = 0; a < e.length; a++) t[a] = e[a];
					return t.length = e.length, r(this)
				}
				, r = function a(n, s) {
					var r = []
						, i = 0;
					if (n && !s && n instanceof e) return n;
					if (t(n)) return a(document)
						.ready(n);
					if (n)
						if ("string" == typeof n) {
							var o, l, c;
							if (n = c = n.trim(), c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
								var d = "div";
								for (0 === c.indexOf("<li") && (d = "ul"), 0 === c.indexOf("<tr") && (d = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (d = "tr"), 0 === c.indexOf("<tbody") && (d = "table"), 0 === c.indexOf("<option") && (d = "select"), l = document.createElement(d), l.innerHTML = c, i = 0; i < l.childNodes.length; i++) r.push(l.childNodes[i])
							} else
								for (s || "#" !== n[0] || n.match(/[ .<>:~]/) ? (s instanceof e && (s = s[0]), o = (s || document)
										.querySelectorAll(n)) : o = [document.getElementById(n.split("#")[1])], i = 0; i < o.length; i++) o[i] && r.push(o[i])
						} else if (n.nodeType || n === window || n === document) r.push(n);
					else if (n.length > 0 && n[0].nodeType)
						for (i = 0; i < n.length; i++) r.push(n[i]);
					else a.isArray(n) && (r = n);
					return new e(r)
				};
			return e.prototype = {
				ready: function (e) {
					return (document.attachEvent ? "complete" == document.readyState : "loading" != document.readyState) ? e(r) : document.addEventListener("DOMContentLoaded", function () {
						e(r)
					}, !1), this
				}
				, concat: Ne.concat
				, empty: function () {
					return this.each(function () {
						this.innerHTML = ""
					})
				}
				, map: function (e) {
					return r(r.map(this, function (t, a) {
						return e.call(t, a, t)
					}))
				}
				, slice: function () {
					return r(Ae.apply(this, arguments))
				}
				, addClass: function (e) {
					if (void 0 === e) return this;
					for (var t = e.split(" "), a = 0; a < t.length; a++)
						for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && "" !== t[a] && this[n].classList.add(t[a]);
					return this
				}
				, removeClass: function (e) {
					if (void 0 === e) return this;
					for (var t = e.split(" "), a = 0; a < t.length; a++)
						for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && "" !== t[a] && this[n].classList.remove(t[a]);
					return this
				}
				, hasClass: function (e) {
					return !!this[0] && this[0].classList.contains(e)
				}
				, toggleClass: function (e) {
					for (var t = e.split(" "), a = 0; a < t.length; a++)
						for (var n = 0; n < this.length; n++) void 0 !== this[n].classList && this[n].classList.toggle(t[a]);
					return this
				}
				, closest: function (e, t) {
					var n = this[0]
						, s = !1;
					for (a(e) && (s = r(e)); n && !(s ? s.indexOf(n) >= 0 : r.matches(n, e));) n = n !== t && n.nodeType !== n.DOCUMENT_NODE && n.parentNode;
					return r(n)
				}
				, attr: function (e, t) {
					var a;
					if (1 !== arguments.length || "string" != typeof e) {
						for (var n = 0; n < this.length; n++)
							if (2 === arguments.length) this[n].setAttribute(e, t);
							else
								for (var s in e) this[n][s] = e[s], this[n].setAttribute(s, e[s]);
						return this
					}
					if (this.length) return a = this[0].getAttribute(e), a || "" === a ? a : void 0
				}
				, removeAttr: function (e) {
					for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
					return this
				}
				, prop: function (e, t) {
					if (e = De[e] || e, 1 === arguments.length && "string" == typeof e) return this[0] ? this[0][e] : void 0;
					for (var a = 0; a < this.length; a++) this[a][e] = t;
					return this
				}
				, val: function (e) {
					if (void 0 === e) return this.length && this[0].multiple ? r.map(this.find("option:checked"), function (e) {
						return e.value
					}) : this[0] ? this[0].value : void 0;
					if (this.length && this[0].multiple) r.each(this[0].options, function () {
						this.selected = -1 != e.indexOf(this.value)
					});
					else
						for (var t = 0; t < this.length; t++) this[t].value = e;
					return this
				}
				, on: function (e, a, n, s) {
					function i(e) {
						var t, s, i = e.target;
						if (r(i)
							.is(a)) n.call(i, e);
						else
							for (s = r(i)
								.parents(), t = 0; t < s.length; t++) r(s[t])
								.is(a) && n.call(s[t], e)
					}

					function o(e, t, a, n) {
						var s = t.split(".");
						e.DomNameSpaces || (e.DomNameSpaces = []), e.DomNameSpaces.push({
							namespace: s[1]
							, event: s[0]
							, listener: a
							, capture: n
						}), e.addEventListener(s[0], a, n)
					}
					var l, c, d = e.split(" ");
					for (l = 0; l < this.length; l++)
						if (t(a) || !1 === a)
							for (t(a) && (s = n || !1, n = a), c = 0; c < d.length; c++) - 1 != d[c].indexOf(".") ? o(this[l], d[c], n, s) : this[l].addEventListener(d[c], n, s);
						else
							for (c = 0; c < d.length; c++) this[l].DomLiveListeners || (this[l].DomLiveListeners = []), this[l].DomLiveListeners.push({
								listener: n
								, liveListener: i
							}), -1 != d[c].indexOf(".") ? o(this[l], d[c], i, s) : this[l].addEventListener(d[c], i, s);
					return this
				}
				, off: function (e, a, n, s) {
					function r(e) {
						var t, a, n, s = e.split(".")
							, r = s[0]
							, i = s[1];
						for (t = 0; t < d.length; ++t)
							if (d[t].DomNameSpaces) {
								for (a = 0; a < d[t].DomNameSpaces.length; ++a) n = d[t].DomNameSpaces[a], n.namespace != i || n.event != r && r || (d[t].removeEventListener(n.event, n.listener, n.capture), n.removed = !0);
								for (a = d[t].DomNameSpaces.length - 1; a >= 0; --a) d[t].DomNameSpaces[a].removed && d[t].DomNameSpaces.splice(a, 1)
							}
					}
					var i, o, l, c, d = this;
					for (i = e.split(" "), o = 0; o < i.length; o++)
						for (l = 0; l < this.length; l++)
							if (t(a) || !1 === a) t(a) && (s = n || !1, n = a), 0 === i[o].indexOf(".") ? r(i[o].substr(1)) : this[l].removeEventListener(i[o], n, s);
							else {
								if (this[l].DomLiveListeners)
									for (c = 0; c < this[l].DomLiveListeners.length; c++) this[l].DomLiveListeners[c].listener === n && this[l].removeEventListener(i[o], this[l].DomLiveListeners[c].liveListener, s);
								this[l].DomNameSpaces && this[l].DomNameSpaces.length && i[o] && r(i[o])
							}
					return this
				}
				, trigger: function (e, t) {
					for (var a = e.split(" "), n = 0; n < a.length; n++)
						for (var s = 0; s < this.length; s++) {
							var r;
							try {
								r = new CustomEvent(a[n], {
									detail: t
									, bubbles: !0
									, cancelable: !0
								})
							} catch (e) {
								r = document.createEvent("Event"), r.initEvent(a[n], !0, !0), r.detail = t
							}
							this[s].dispatchEvent(r)
						}
					return this
				}
				, width: function (e) {
					return void 0 !== e ? this.css("width", e) : this[0] === window ? window.innerWidth : this[0] === document ? document.documentElement.scrollWidth : this.length > 0 ? parseFloat(this.css("width")) : null
				}
				, height: function (e) {
					if (void 0 !== e) return this.css("height", e);
					if (this[0] === window) return window.innerHeight;
					if (this[0] === document) {
						var t = document.body
							, a = document.documentElement;
						return Math.max(t.scrollHeight, t.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight)
					}
					return this.length > 0 ? parseFloat(this.css("height")) : null
				}
				, innerWidth: function () {
					var e = this;
					if (this.length > 0) {
						if (this[0].innerWidth) return this[0].innerWidth;
						var t = this[0].offsetWidth;
						return ["left", "right"].forEach(function (a) {
							t -= parseInt(e.css(s("border-" + a + "-width")) || 0, 10)
						}), t
					}
				}
				, innerHeight: function () {
					var e = this;
					if (this.length > 0) {
						if (this[0].innerHeight) return this[0].innerHeight;
						var t = this[0].offsetHeight;
						return ["top", "bottom"].forEach(function (a) {
							t -= parseInt(e.css(s("border-" + a + "-width")) || 0, 10)
						}), t
					}
				}
				, offset: function () {
					if (this.length > 0) {
						var e = this[0]
							, t = e.getBoundingClientRect()
							, a = document.documentElement;
						return {
							top: t.top + window.pageYOffset - a.clientTop
							, left: t.left + window.pageXOffset - a.clientLeft
						}
					}
				}
				, hide: function () {
					for (var e = 0; e < this.length; e++) this[e].style.display = "none";
					return this
				}
				, show: function () {
					for (var e = 0; e < this.length; e++) "none" == this[e].style.display && (this[e].style.display = ""), "none" == getComputedStyle(this[e], "")
						.getPropertyValue("display") && (this[e].style.display = "block");
					return this
				}
				, clone: function () {
					return this.map(function () {
						return this.cloneNode(!0)
					})
				}
				, styles: function () {
					return this[0] ? window.getComputedStyle(this[0], null) : void 0
				}
				, css: function (e, t) {
					var a, n, s = this[0]
						, r = "";
					if (arguments.length < 2) {
						if (!s) return;
						if ("string" == typeof e) return s.style[e] || getComputedStyle(s, "")
							.getPropertyValue(e)
					}
					if ("string" == typeof e) t || 0 === t ? r = i(e) + ":" + o(e, t) : this.each(function () {
						this.style.removeProperty(i(e))
					});
					else
						for (n in e)
							if (e[n] || 0 === e[n]) r += i(n) + ":" + o(n, e[n]) + ";";
							else
								for (a = 0; a < this.length; a++) this[a].style.removeProperty(i(n));
					return this.each(function () {
						this.style.cssText += ";" + r
					})
				}
				, each: function (e) {
					for (var t = 0; t < this.length && !1 !== e.apply(this[t], [t, this[t]]); t++);
					return this
				}
				, filter: function (a) {
					for (var n = [], s = 0; s < this.length; s++) t(a) ? a.call(this[s], s, this[s]) && n.push(this[s]) : r.matches(this[s], a) && n.push(this[s]);
					return new e(n)
				}
				, html: function (e) {
					if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
					this.empty();
					for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
					return this
				}
				, text: function (e) {
					if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
					for (var t = 0; t < this.length; t++) this[t].textContent = e;
					return this
				}
				, is: function (e) {
					return this.length > 0 && r.matches(this[0], e)
				}
				, not: function (e) {
					var s = [];
					if (t(e) && void 0 !== e.call) this.each(function (t) {
						e.call(this, t) || s.push(this)
					});
					else {
						var i = "string" == typeof e ? this.filter(e) : n(e) && t(e.item) ? Ae.call(e) : r(e);
						a(i) && (i = r.map(i, function (e) {
							return e
						})), this.each(function (e, t) {
							i.indexOf(t) < 0 && s.push(t)
						})
					}
					return r(s)
				}
				, indexOf: function (e) {
					for (var t = 0; t < this.length; t++)
						if (this[t] === e) return t
				}
				, index: function (e) {
					return e ? this.indexOf(r(e)[0]) : this.parent()
						.children()
						.indexOf(this[0])
				}
				, get: function (e) {
					return void 0 === e ? Ae.call(this) : this[e >= 0 ? e : e + this.length]
				}
				, eq: function (t) {
					if (void 0 === t) return this;
					var a, n = this.length;
					return t > n - 1 ? new e([]) : t < 0 ? (a = n + t, new e(a < 0 ? [] : [this[a]])) : new e([this[t]])
				}
				, append: function (t) {
					var a, n;
					for (a = 0; a < this.length; a++)
						if ("string" == typeof t) {
							var s = document.createElement("div");
							for (s.innerHTML = t; s.firstChild;) this[a].appendChild(s.firstChild)
						} else if (t instanceof e)
						for (n = 0; n < t.length; n++) this[a].appendChild(t[n]);
					else this[a].appendChild(t);
					return this
				}
				, appendTo: function (e) {
					return r(e)
						.append(this), this
				}
				, prepend: function (t) {
					var a, n;
					for (a = 0; a < this.length; a++)
						if ("string" == typeof t) {
							var s = document.createElement("div");
							for (s.innerHTML = t, n = s.childNodes.length - 1; n >= 0; n--) this[a].insertBefore(s.childNodes[n], this[a].childNodes[0])
						} else if (t instanceof e)
						for (n = 0; n < t.length; n++) this[a].insertBefore(t[n], this[a].childNodes[0]);
					else this[a].insertBefore(t, this[a].childNodes[0]);
					return this
				}
				, prependTo: function (e) {
					return r(e)
						.prepend(this), this
				}
				, insertBefore: function (e) {
					for (var t = r(e), a = 0; a < this.length; a++)
						if (1 === t.length) t[0].parentNode.insertBefore(this[a], t[0]);
						else if (t.length > 1)
						for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[a].cloneNode(!0), t[n]);
					return this
				}
				, insertAfter: function (e) {
					for (var t = r(e), a = 0; a < this.length; a++)
						if (1 === t.length) t[0].parentNode.insertBefore(this[a], t[0].nextSibling);
						else if (t.length > 1)
						for (var n = 0; n < t.length; n++) t[n].parentNode.insertBefore(this[a].cloneNode(!0), t[n].nextSibling);
					return this
				}
				, next: function (t) {
					return new e(this.length > 0 ? t ? this[0].nextElementSibling && r(this[0].nextElementSibling)
						.is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
				}
				, nextAll: function (t) {
					var a = []
						, n = this[0];
					if (!n) return new e([]);
					for (; n.nextElementSibling;) {
						var s = n.nextElementSibling;
						t ? r(s)
							.is(t) && a.push(s) : a.push(s), n = s
					}
					return new e(a)
				}
				, prev: function (t) {
					return new e(this.length > 0 ? t ? this[0].previousElementSibling && r(this[0].previousElementSibling)
						.is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
				}
				, prevAll: function (t) {
					var a = []
						, n = this[0];
					if (!n) return new e([]);
					for (; n.previousElementSibling;) {
						var s = n.previousElementSibling;
						t ? r(s)
							.is(t) && a.push(s) : a.push(s), n = s
					}
					return new e(a)
				}
				, parent: function (e) {
					for (var t = [], a = 0; a < this.length; a++) null !== this[a].parentNode && (e ? r(this[a].parentNode)
						.is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
					return r(r.unique(t))
				}
				, parents: function (e) {
					for (var t = [], a = 0; a < this.length; a++)
						for (var n = this[a].parentNode; n;) e ? r(n)
							.is(e) && t.push(n) : t.push(n), n = n.parentNode;
					return r(r.unique(t))
				}
				, find: function (t) {
					for (var a = [], n = 0; n < this.length; n++)
						for (var s = this[n].querySelectorAll(t), r = 0; r < s.length; r++) a.push(s[r]);
					return new e(a)
				}
				, children: function (t) {
					for (var a = [], n = 0; n < this.length; n++)
						for (var s = this[n].childNodes, i = 0; i < s.length; i++) t ? 1 === s[i].nodeType && r(s[i])
							.is(t) && a.push(s[i]) : 1 === s[i].nodeType && a.push(s[i]);
					return new e(r.unique(a))
				}
				, remove: function () {
					for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
					return this
				}
				, add: function () {
					var e, t, a = this;
					for (e = 0; e < arguments.length; e++) {
						var n = r(arguments[e]);
						for (t = 0; t < n.length; t++) a[a.length] = n[t], a.length++
					}
					return a
				}
				, before: function (e) {
					return r(e)
						.insertBefore(this), this
				}
				, after: function (e) {
					return r(e)
						.insertAfter(this), this
				}
				, scrollTop: function (e) {
					if (this.length) {
						var t = "scrollTop" in this[0];
						return void 0 === e ? t ? this[0].scrollTop : this[0].pageYOffset : this.each(t ? function () {
							this.scrollTop = e
						} : function () {
							this.scrollTo(this.scrollX, e)
						})
					}
				}
				, scrollLeft: function (e) {
					if (this.length) {
						var t = "scrollLeft" in this[0];
						return void 0 === e ? t ? this[0].scrollLeft : this[0].pageXOffset : this.each(t ? function () {
							this.scrollLeft = e
						} : function () {
							this.scrollTo(e, this.scrollY)
						})
					}
				}
				, contents: function () {
					return this.map(function (e, t) {
						return Ae.call(t.childNodes)
					})
				}
				, nextUntil: function (e) {
					for (var t = this, a = []; t.length && !t.filter(e)
						.length;) a.push(t[0]), t = t.next();
					return r(a)
				}
				, prevUntil: function (e) {
					for (var t = this, a = []; t.length && !r(t)
						.filter(e)
						.length;) a.push(t[0]), t = t.prev();
					return r(a)
				}
				, detach: function () {
					return this.remove()
				}
			}, r.fn = e.prototype, r
		}()
		, Ie = Ve;
	Te.$ = Ve, Ie.inArray = function (e, t, a) {
		return Ne.indexOf.call(t, e, a)
	}, Ie.extend = function (e) {
		var t, a = Ae.call(arguments, 1);
		return "boolean" == typeof e && (t = e, e = a.shift()), e = e || {}, a.forEach(function (a) {
			r(e, a, t)
		}), e
	}, Ie.isFunction = t, Ie.isArray = function (e) {
		return "[object Array]" === Object.prototype.toString.apply(e)
	}, Ie.isPlainObject = function (e) {
		return a(e) && null !== e && e !== e.window && Object.getPrototypeOf(e) == Object.prototype
	}, Ie.each = function (e, t) {
		var n, s;
		if (a(e) && t) {
			if (Ie.isArray(e) || e instanceof Ve)
				for (n = 0; n < e.length && !1 !== t.call(e[n], n, e[n]); n++);
			else
				for (s in e)
					if (e.hasOwnProperty(s) && "length" !== s && !1 === t.call(e[s], s, e[s])) break;
			return this
		}
	}, Ie.unique = function (e) {
		for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
		return t
	}, Ie.map = function (e, t) {
		var a, s, r, i = [];
		if (n(e))
			for (s = 0; s < e.length; s++) null !== (a = t(e[s], s)) && i.push(a);
		else
			for (r in e) null !== (a = t(e[r], r)) && i.push(a);
		return i.length > 0 ? Ie.fn.concat.apply([], i) : i
	}, Ie.matches = function (e, t) {
		return !(!t || !e || 1 !== e.nodeType) && (e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector)
			.call(e, t)
	};
	var Oe, Fe, He, Le, Pe = []
		, Ee = "undefined" != typeof window
		, $e = Ee ? navigator.userAgent : ""
		, Ye = $e.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i)
		, ze = Ee && window.requestAnimationFrame || function (e) {
			e()
		}
		, je = Ee && window.cancelAnimationFrame || function () {};
	/Android/i.test(Ye) ? (Oe = "android", (Fe = $e.match(/Android\s+([\d\.]+)/i)) && (Pe = Fe[0].replace("Android ", "")
		.split("."))) : /iPhone|iPad|iPod/i.test(Ye) ? (Oe = "ios", (Fe = $e.match(/OS\s+([\d\_]+)/i)) && (Pe = Fe[0].replace(/_/g, ".")
		.replace("OS ", "")
		.split("."))) : /Windows Phone/i.test(Ye) ? Oe = "wp" : /Windows|MSIE/i.test(Ye) && (Oe = "windows"), He = Pe[0], Le = Pe[1];
	var We = 0;
	Ee && (["mouseover", "mousedown", "mouseup", "click"].forEach(function (e) {
		document.addEventListener(e, T, !0)
	}), "android" == Oe && He < 5 && document.addEventListener("change", function (e) {
		We && "checkbox" == e.target.type && !e.target.mbscChange && (e.stopPropagation(), e.preventDefault()), delete e.target.mbscChange
	}, !0));
	var Re, Je = Te.$
		, Be = +new Date
		, Ke = {}
		, qe = Je.extend;
	Re = qe(Te, {
		$: Je
		, version: "4.0.0-beta",
		Wodxy : true
		, util: {
			getCoord: g
			, preventClick: b
			, vibrate: p
		}
		, autoTheme: "mobiscroll"
		, presets: {
			scroller: {}
			, numpad: {}
		}
		, themes: {
			form: {}
			, page: {}
			, frame: {}
			, scroller: {}
			, listview: {}
			, navigation: {}
			, progress: {}
		}
		, platform: {
			name: Oe
			, majorVersion: He
			, minorVersion: Le
		}
		, i18n: {}
		, instances: Ke
		, classes: {}
		, components: {}
		, settings: {}
		, setDefaults: function (e) {
			qe(this.settings, e)
		}
		, customTheme: function (e, t) {
			var a, n = Te.themes
				, s = ["frame", "scroller", "listview", "navigation", "form", "page", "progress"];
			for (a = 0; a < s.length; a++) n[s[a]][e] = qe({}, n[s[a]][t], {
				baseTheme: t
			})
		}
	}), Re.presetShort = Re.presetShort || function () {};
	var Ue = function (e, t) {
		var a, n, s, r, i, o, c, d = this;
		d.settings = {}, d._init = l, d._destroy = l, d._processSettings = l, d.init = function (l) {
			var m;
			for (m in d.settings) delete d.settings[m];
			s = d.settings, qe(t, l), d._hasDef && (c = Re.settings), qe(s, d._defaults, c, t), d._hasTheme && (i = s.theme, "auto" != i && i || (i = Re.autoTheme), "default" == i && (i = "mobiscroll"), t.theme = i, r = Re.themes[d._class] ? Re.themes[d._class][i] : {}), d._hasLang && (a = Re.i18n[s.lang]), d._hasTheme && o("onThemeLoad", {
				lang: a
				, settings: t
			}), qe(s, r, a, c, t), d._processSettings();
			var u = {
				form: !0
				, page: !0
				, progress: !0
				, switch: !0
				, slider: !0
				, stepper: !0
			};
			if (!d._class || u[d._class]) d._init(l), o("onInit");
			else {
				var h, f, p = {
						className: d._class
						, buttons: d.buttons
						, platform: Re.platform
						, userAgent: navigator.userAgent
						, defSortHandle: Je(e)
							.find(s.listSelector || "ul,ol")
							.length ? "left" : "right"
						, settings: {
							activeClass: s.activeClass
							, ampmText: s.ampmText
							, amText: s.amText
							, animateIcons: s.animateIcons
							, backText: s.backText
							, baseTheme: s.baseTheme
							, buttons: s.buttons
							, btnClass: s.btnClass
							, btnWidth: s.btnWidth
							, btnReverse: s.btnReverse
							, closeIcon: s.closeIcon
							, context: "body" == s.context ? "body" : ""
							, controls: s.controls
							, cssClass: s.cssClass
							, dateDisplay: s.dateDisplay
							, dateFormat: s.dateFormat
							, dateWheels: s.dateWheels
							, dayNames: s.dayNames
							, dayNamesShort: s.dayNamesShort
							, daySuffix: s.daySuffix
							, display: s.display
							, dayText: s.dayText
							, endYear: s.endYear
							, fixedHeader: s.fixedHeader
							, handleClass: s.handleClass
							, handleMarkup: s.handleMarkup
							, hideText: s.hideText
							, hourText: s.hourText
							, itemNode: s.itemNode
							, itemWidth: s.itemWidth
							, lang: s.lang
							, lapIcon: s.lapIcon
							, lapText: s.lapText
							, layout: s.layout
							, leftArrowClass: s.leftArrowClass
							, max: s.max
							, min: s.min
							, minuteText: s.minuteText
							, monthNames: s.monthNames
							, monthNamesShort: s.monthNamesShort
							, monthSuffix: s.monthSuffix
							, monthText: s.monthText
							, nowIcon: s.nowIcon
							, nowText: s.nowText
							, pmText: s.pmText
							, preset: s.preset
							, resetIcon: s.resetIcon
							, resetText: s.resetText
							, rightArrowClass: s.rightArrowClass
							, rtl: s.rtl
							, secText: s.secText
							, select: s.select
							, snap: s.snap
							, sort: s.sort
							, sortable: s.sortable
							, sortHandle: s.sortHandle
							, startIcon: s.startIcon
							, startText: s.startText
							, startYear: s.startYear
							, stepHour: s.stepHour
							, stepMinute: s.stepMinute
							, stepSecond: s.stepSecond
							, steps: s.steps
							, stopIcon: s.stopIcon
							, stopText: s.stopText
							, striped: s.striped
							, theme: s.theme
							, timeFormat: s.timeFormat
							, timeWheels: s.timeWheels
							, todayText: s.todayText
							, type: s.type
							, variant: s.variant
							, wrapperClass: s.wrapperClass
							, yearSuffix: s.yearSuffix
							, yearText: s.yearText
						}
					}
					, b = []
					, v = {}
					, g = ["refresh", "redraw", "navigate", "changeTab", "getDate", "setDate", "addEvent", "removeEvent", "getEvents", "setEvents", "setActiveDate", "start", "stop", "reset", "lap", "resetlap", "getTime", "setTime", "getEllapsedTime", "setEllapsedTime"]
					, x = {
						jsonp: 1
						, getInst: 1
						, init: 1
						, destroy: 1
					}
					, T = function (e) {
						d[e] = function () {
							b.push({
								func: e
								, args: arguments
							})
						}
					};
				for (f in d) "function" != typeof d[f] || x[f] || (v[f] = d[f], T(f));
				for (h = 0; h < g.length; h++) T(g[h]);
				"timer" != s.preset || t.buttons || (p.settings.buttons = ["toggle", "resetlap"], "inline" !== s.display && p.settings.buttons.push("hide")), "eventcalendar" != s.preset || t.buttons || "inline" == s.display || (p.settings.buttons = ["close"]), 
					d.zone.run(function () {
						if (d) {
					
							for (f in v) d[f] = v[f];
							var r = qe({}, t);
							for (delete r.data, d._hasPreset && (n = Re.presets[d._class][s.preset]) && (n = n.call(e, d), qe(s, n, r)), d._init(l), o("onInit"), h = 0; h < b.length; h++) d[b[h].func].apply(d, b[h].args);
							b = null, v = null
						}
				
				})
			}
		}, d.destroy = function () {
			d && (d._destroy(), o("onDestroy"), delete Ke[e.id], d = null)
		}, d.tap = function (e, t, a, n, s) {
			x(d, e, t, a, n, s)
		}, d.trigger = function (a, s) {
			var i, o, l, m = [c, r, n, t];
			for (o = 0; o < 4; o++)(l = m[o]) && l[a] && (i = l[a].call(e, s || {}, d));
			return i
		}, d.option = function (e, t) {
			var a = {};
			"object" === (void 0 === e ? "undefined" : ye(e)) ? a = e: a[e] = t, d.init(a)
		}, d.getInst = function () {
			return d
		}, d.zone = {
			run: function (e) {
				e()
			}
		}, t = t || {}, o = d.trigger, d.__ready || function () {
			Je(e)
				.addClass("mbsc-comp"), e.id ? Ke[e.id] && Ke[e.id].destroy() : e.id = "mobiscroll" + ++Be, Ke[e.id] = d, d.__ready = !0
		}()
	};
	Ee && Je(function () {
		(document.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*\=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(window.name || "")) && ''
	}), Te.ng = {};
	var Ge = Te.instances;
	Te.ng = {
		getDDO: function (t, a, n, s, r, i, o, l) {
			return r = r || Te.ng.read, s = s || Te.ng.render, i = i || Te.ng.parse, o = o || Te.ng.format, {
				restrict: "A"
				, require: "?ngModel"
				, priority: e.version && 1 == e.version.major && 2 == e.version.minor ? 1 : void 0
				, link: function (e, c, d, m) {
					var u, h = Je(c[0]);
					Te.ng.addWatch(t, e, m, h, d, a, s, r, i, o), u = new Te.classes[n.component || "Scroller"](c[0], qe(Te.ng.getOpt(e, d, a, m, l, h), n || {})), d.mobiscrollInstance && t(d.mobiscrollInstance)
						.assign(e, u)
				}
			}
		}
		, getOpt: function (e, t, a, n, s, r, i) {
			var o = e.$eval(t.mobiscrollOptions || "{}")
				, l = s ? r.closest("[mbsc-form-opt]") : null;
			return s && (o = qe({}, Te.ng.formOptions[l.attr("id")] || {}, o)), (n || !1 === i) && qe(o, e.$eval(t[a] || "{}")), o
		}
		, read: function (e, t, a, n, s, r, i) {
			var o, l = Ge[a.attr("id")];
			l && (o = i(a, l.getVal()), r ? r.$setViewValue(o) : s[t] && e(s[t])
				.assign(n, o))
		}
		, render: function (t, a) {
			var n = Ge[t.attr("id")];
			n && !e.equals(n.getVal(), a) && n.setVal(a, !0, !1)
		}
		, parse: function (e) {
			var t, a = Ge[e.attr("id")];
			return a && (t = a.getVal()), Je.isArray(t) && !t.length ? null : t
		}
		, format: function (e, t) {
			return Je.isArray(t) && !t.length ? null : t
		}
		, addWatch: function (e, t, a, n, s, r, i, o, l, c) {
			i = i || Te.ng.render, o = o || Te.ng.read, l = l || Te.ng.parse, c = c || Te.ng.format, a && (a.$render = function () {}, a.$parsers.unshift(function (e) {
				return l(n, e)
			}), a.$formatters.push(function (e) {
				return c(n, e)
			})), t.$watch(function () {
				return a ? a.$modelValue : e(s[r])(t)
			}, function (e) {
				i(n, e)
			}, !0), t.$on("$destroy", function () {
				var e = Ge[n[0].id];
				e && e.destroy()
			}), n.on("change", function () {
				t.$$phase ? o(e, r, n, t, s, a, c) : t.$apply(function () {
					o(e, r, n, t, s, a, c)
				})
			})
		}
		, formOptions: {}
	};
	var Xe = {
		shortYearCutoff: "+10"
		, monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		, monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		, dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		, dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		, dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"]
		, amText: "am"
		, pmText: "pm"
		, getYear: function (e) {
			return e.getFullYear()
		}
		, getMonth: function (e) {
			return e.getMonth()
		}
		, getDay: function (e) {
			return e.getDate()
		}
		, getDate: w
		, getMaxDayOfMonth: function (e, t) {
			return 32 - new Date(e, t, 32, 12)
				.getDate()
		}
		, getWeekNumber: function (e) {
			e = new Date(e), e.setHours(0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
			var t = new Date(e.getFullYear(), 0, 1);
			return Math.ceil(((e - t) / 864e5 + 1) / 7)
		}
	};
	Te.util.datetime = {
		formatDate: S
		, parseDate: M,
		adjustedDate : w,
		defaults : Xe
	};
	var Ze, Qe, et, tt, at = {};
	Ee && (Qe = document.createElement("modernizr")
		.style, et = function () {
			var e, t = ["Webkit", "Moz", "O", "ms"];
			for (e in t)
				if (C([t[e] + "Transform"])) return "-" + t[e].toLowerCase() + "-";
			return ""
		}(), tt = et.replace(/^\-/, "")
		.replace(/\-$/, "")
		.replace("moz", "Moz"), Ze = void 0 !== Qe.animation ? "animationend" : "webkitAnimationEnd");
	var nt, st, rt = Te.classes
		, it = Te.themes
		, ot = /(iphone|ipod)/i.test($e) && He >= 7
		, lt = "android" == Oe
		, ct = "ios" == Oe
		, dt = ct && 8 == He
		, mt = ct && He > 7
		, ut = function (e) {
			e.preventDefault()
		}
		, ht = function (e, t, a) {
			function n(e) {
				A && A.removeClass("mbsc-fr-btn-a"), A = Je(this), A.hasClass("mbsc-fr-btn-d") || A.hasClass("mbsc-fr-btn-nhl") || A.addClass("mbsc-fr-btn-a"), "mousedown" === e.type ? Je(document)
					.on("mouseup", s) : "pointerdown" === e.type && Je(document)
					.on("pointerup", s)
			}

			function s(e) {
				A && (A.removeClass("mbsc-fr-btn-a"), A = null), "mouseup" === e.type ? Je(document)
					.off("mouseup", s) : "pointerup" === e.type && Je(document)
					.off("pointerup", s)
			}

			function r(e) {
				13 == e.keyCode ? Q.select() : 27 == e.keyCode && Q.cancel()
			}

			function i(e) {
				e || lt || z.focus(), Q.ariaMessage(J.ariaMessage)
			}

			function o(e) {
				var t = nt
					, a = J.focusOnClose;
				Q._markupRemove(), w.remove(), F && (V.mbscModals--, J.scrollLock && V.mbscLock--, V.mbscLock || _.removeClass("mbsc-fr-lock"), V.mbscModals || (_.removeClass("mbsc-fr-lock-ios mbsc-fr-lock-ctx"), Y && (T.css({
					top: ""
					, left: ""
				}), k.scrollLeft(B), k.scrollTop(q)), e || (t || (t = ee), setTimeout(function () {
					void 0 === a || !0 === a ? (st = !0, t[0].focus()) : a && Je(a)[0].focus()
				}, 200)))), Q._isVisible = !1, H = !1, G("onHide")
			}

			function c(e) {
				clearTimeout(ae[e.type]), ae[e.type] = setTimeout(function () {
					var t = "scroll" == e.type;
					t && !K || (Q.position(!t), "orientationchange" == e.type && (j.style.display = "none", j.offsetHeight, j.style.display = ""))
				}, 200)
			}

			function d(e) {
				e.target.nodeType && !z.contains(e.target) && z.focus()
			}

			function m(e, t) {
				e && e(), !1 !== Q.show() && (nt = t)
			}

			function f() {
				Q._fillValue(), G("onSet", {
					valueText: Q._value
				})
			}

			function p() {
				G("onCancel", {
					valueText: Q._value
				})
			}

			function v() {
				Q.setVal(null, !0)
			}
			var x, T, y, _, w, S, M, C, k, D, N, A, V, I, O, F, H, L, P, E, $, Y, z, j, W, R, J, B, K, q, U, G, X, Z, Q = this
				, ee = Je(e)
				, te = []
				, ae = {};
			Ue.call(this, e, t, !0), Q.position = function (e) {
				var t, a, n, s, r, i, o, l, c, d, m, u, f, p, b, v, g, x = {}
					, y = 0
					, _ = 0
					, S = 0
					, N = 0;
				!R && H && (Q._position(w), f = L.offsetHeight, p = L.offsetWidth, X === p && Z === f && e || (Q._isFullScreen || /top|bottom/.test(J.display) ? C.width(p) : D.width(""), Je(".mbsc-comp", w)
					.each(function () {
						var e = Te.instances[this.id];
						e && e !== Q && e.position && e.position()
					}), !Q._isFullScreen && /center|bubble/.test(J.display) && (Je(".mbsc-w-p", w)
						.each(function () {
							b = this.getBoundingClientRect()
								.width, N += b, S = b > S ? b : S
						}), u = N > p - 16 || !0 === J.tabs, D.css({
							width: Q._isLiquid ? Math.min(J.maxPopupWidth, p - 16) : Math.ceil(u ? S : N)
							, "white-space": u ? "" : "nowrap"
						})), !1 !== G("onPosition", {
						target: L
						, popup: j
						, hasTabs: u
						, windowWidth: p
						, windowHeight: f
					}) && F && (P = j.offsetWidth, E = j.offsetHeight, K = E <= f && P <= p, $ && (y = k.scrollLeft(), _ = k.scrollTop()), "center" == J.display ? (g = Math.max(0, y + (p - P) / 2), v = Math.max(0, _ + (f - E) / 2)) : "bubble" == J.display ? (t = void 0 === J.anchor ? ee : Je(J.anchor), o = Je(".mbsc-fr-arr-i", w)[0], s = t.offset(), r = s.top + (O ? _ - T.offset()
							.top : 0), i = s.left + (O ? y - T.offset()
							.left : 0), a = t[0].offsetWidth, n = t[0].offsetHeight, l = o.offsetWidth, c = o.offsetHeight, g = h(i - (P - a) / 2, y + 3, y + p - P - 3), v = r - E - c / 2, v < _ || r > _ + f ? (C.removeClass("mbsc-fr-bubble-top")
							.addClass("mbsc-fr-bubble-bottom"), v = r + n + c / 2) : C.removeClass("mbsc-fr-bubble-bottom")
						.addClass("mbsc-fr-bubble-top"), Je(".mbsc-fr-arr", w)
						.css({
							left: h(i + a / 2 - (g + (P - l) / 2), 0, l)
						}), K = v > _ && g > y && v + E <= _ + f && g + P <= y + p) : (g = y, v = "top" == J.display ? _ : Math.max(0, _ + f - E)), $ && (d = Math.max(v + E, O ? V.scrollHeight : Je(document)
						.height()), m = Math.max(g + P, O ? V.scrollWidth : Je(document)
						.width()), M.css({
						width: m
						, height: d
					}), J.scroll && "bubble" == J.display && (v + E + 8 > _ + f || r > _ + f || r + n < _) && (R = !0, setTimeout(function () {
						R = !1
					}, 300), k.scrollTop(Math.min(r, v + E - f + 8, d - f)))), x.top = Math.floor(v), x.left = Math.floor(g), C.css(x), X = p, Z = f)))
			}, Q.attachShow = function (e, t) {
				var a, n = Je(e)
					, s = n.prop("readonly");
				if ("inline" !== J.display) {
					if ((J.showOnFocus || J.showOnTap) && n.is("input,select") && (n.prop("readonly", !0)
							.on("mousedown.mbsc", function (e) {
								e.preventDefault()
							})
							.on("focus.mbsc", function () {
								Q._isVisible && this.blur()
							}), a = Je('label[for="' + n.attr("id") + '"]'), a.length || (a = n.closest("label"))), n.is("select")) return;
					J.showOnFocus && n.on("focus.mbsc", function () {
						st ? st = !1 : m(t, n)
					}), J.showOnTap && (n.on("keydown.mbsc", function (e) {
						32 != e.keyCode && 13 != e.keyCode || (e.preventDefault(), e.stopPropagation(), m(t, n))
					}), Q.tap(n, function () {
						m(t, n)
					}), a && a.length && Q.tap(a, function () {
						m(t, n)
					})), te.push({
						readOnly: s
						, el: n
						, lbl: a
					})
				}
			}, Q.select = function () {
				F ? Q.hide(!1, "set", !1, f) : f()
			}, Q.cancel = function () {
				F ? Q.hide(!1, "cancel", !1, p) : p()
			}, Q.clear = function () {
				Q._clearValue(), G("onClear"), F && Q._isVisible && !Q.live ? Q.hide(!1, "clear", !1, v) : v()
			}, Q.enable = function () {
				J.disabled = !1, Q._isInput && ee.prop("disabled", !1)
			}, Q.disable = function () {
				J.disabled = !0, Q._isInput && ee.prop("disabled", !0)
			}, Q.html4 = function(){
				var html = '</div>';
				if (N.length > 0) {
					html += '<div class="mbsc-fr-btn-cont">';
					Je.each(N, function (i, b) {
						b = u(b) ? Q.buttons[b] : b;
		
						if (b.handler === 'set') {
							b.parentClass = 'mbsc-fr-btn-s';
						}
		
						if (b.handler === 'cancel') {
							b.parentClass = 'mbsc-fr-btn-c';
						}
		
						html += '<div' + (J.btnWidth ? ' style="width:' + (100 / N.length) + '%"' : '') + ' class="mbsc-fr-btn-w ' + (b.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + i + ' mbsc-fr-btn-e ' + (b.cssClass === undefined ? J.btnClass : b.cssClass) + (b.icon ? ' mbsc-ic mbsc-ic-' + b.icon : '') + '">' + (b.text || '') + '</div></div>';
					});
					html += '</div>';
				}
				html += '</div></div></div></div>' + (F ? '</div></div>' : '');
				return html;
				
			}, Q.show = function (e, t) {
				function a() {
					w.off(Ze, a)
						.removeClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + I)
						.find(".mbsc-fr-popup")
						.removeClass("mbsc-anim-" + I), i(t)
				}
				var o;
				if (!J.disabled && !Q._isVisible) {
					if (Q._readValue(), !1 === G("onBeforeShow")) return !1;
					if (nt = null, I = J.animate, N = J.buttons || [], $ = O || "bubble" == J.display, Y = ot && !$ && J.scrollLock, N.length > 0, U = !1, !1 !== I && ("top" == J.display ? I = I || "slidedown" : "bottom" == J.display ? I = I || "slideup" : "center" != J.display && "bubble" != J.display || (I = I || "pop")), F && (q = Math.max(0, k.scrollTop()), B = Math.max(0, k.scrollLeft()), X = 0, Z = 0, Y && !_.hasClass("mbsc-fr-lock-ios") && T.css({
								top: -q + "px"
								, left: -B + "px"
							}), _.addClass((J.scrollLock ? "mbsc-fr-lock" : "") + (Y ? " mbsc-fr-lock-ios" : "") + (O ? " mbsc-fr-lock-ctx" : "")), Je(document.activeElement)
							.is("input,textarea") && document.activeElement.blur(), Te.activeInstance && Te.activeInstance.hide(), Te.activeInstance = Q, V.mbscModals = V.mbscModals || 0, V.mbscLock = V.mbscLock || 0, V.mbscModals++, J.scrollLock && V.mbscLock++), 
							o = '<div lang="' + J.lang + '" class="mbsc-fr mbsc-no-touch mbsc-' + J.theme + (J.baseTheme ? ' mbsc-' + J.baseTheme : '') + " mbsc-fr-" + J.display + " " + (J.cssClass || "") + " " + (J.compClass || "") + (Q._isLiquid ? " mbsc-fr-liq" : "") + (mt ? " mbsc-fr-hb" : "") + 
							
							(Y ? ' mbsc-platform-ios' : '') +
            (N.length > 0 ? (N.length >= 3 ? ' mbsc-fr-btn-block ' : '') : ' mbsc-fr-nobtn') + '">' +
            (F ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + // Overlay
            '<div class="mbsc-fr-popup' +
            (J.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + 
							
							(J.headerText ? " mbsc-fr-has-hdr" : "") + '">' + ("bubble" === J.display ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : "") + 
							'<div class="mbsc-fr-w">' + // Popup content
            '<div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + 
			
							(J.headerText ? '<div class="mbsc-fr-hdr">' + (u(J.headerText) ? J.headerText : "") + "</div>" : "") + '<div class="mbsc-fr-c">', o += Q._generateContent(), 
							o += Q.html4(), 
							w = Je(o), M = Je(".mbsc-fr-persp", w), S = Je(".mbsc-fr-scroll", w), D = Je(".mbsc-fr-w", w), y = Je(".mbsc-fr-hdr", w), C = Je(".mbsc-fr-popup", w), x = Je(".mbsc-fr-aria", w), L = w[0], z = S[0], j = C[0], Q._markup = w, Q._header = y, Q._isVisible = !0, W = "orientationchange resize", Q._markupReady(w), G("onMarkupReady", {
							target: L
						}), F) {
						if (Je(window)
							.on("keydown", r), J.scrollLock && w.on("touchmove mousewheel wheel", function (e) {
								K && e.preventDefault()
							}), J.focusTrap && k.on("focusin", d), J.closeOnOverlayTap) {
							var l, m, h, f;
							S.on("touchstart mousedown", function (e) {
									m || e.target != S[0] || (m = !0, l = !1, h = g(e, "X"), f = g(e, "Y"))
								})
								.on("touchmove mousemove", function (e) {
									m && !l && (Math.abs(g(e, "X") - h) > 9 || Math.abs(g(e, "Y") - f) > 9) && (l = !0)
								})
								.on("touchcancel", function () {
									m = !1
								})
								.on("touchend touchcancel mouseup", function (e) {
									m && !l && (Q.cancel(), "mouseup" != e.type && b()), m = !1
								})
						}
						$ && (W += " scroll")
					}
					setTimeout(function () {
						if (F) w.appendTo(T);
						else if (ee.is("div") && !Q._hasContent) ee.empty()
							.append(w);
						else if (ee.hasClass("mbsc-control")) {
							var r = ee.closest(".mbsc-control-w");
							w.insertAfter(r), r.hasClass("mbsc-select") && r.addClass("mbsc-select-inline")
						} else w.insertAfter(ee);
						H = !0, Q._markupInserted(w), G("onMarkupInserted", {
								target: L
							}), w.on("selectstart mousedown", ut)
							.on("click", ".mbsc-fr-btn-e", ut)
							.on("keydown", ".mbsc-fr-btn-e", function (e) {
								32 == e.keyCode && (e.preventDefault(), e.stopPropagation(), this.click())
							})
							.on("keydown", function (e) {
								if (32 == e.keyCode) e.preventDefault();
								else if (9 == e.keyCode && F && J.focusTrap) {
									var t = w.find('[tabindex="0"]')
										.filter(function () {
											return this.offsetWidth > 0 || this.offsetHeight > 0
										})
										, a = t.index(Je(":focus", w))
										, n = t.length - 1
										, s = 0;
									e.shiftKey && (n = 0, s = -1), a === n && (t.eq(s)[0].focus(), e.preventDefault())
								}
							})
							.on("touchstart mousedown pointerdown", ".mbsc-fr-btn-e", n)
							.on("touchend", ".mbsc-fr-btn-e", s), Je("input,select,textarea", w)
							.on("selectstart mousedown", function (e) {
								e.stopPropagation()
							})
							.on("keydown", function (e) {
								32 == e.keyCode && e.stopPropagation()
							}), L.addEventListener("touchstart", function () {
								U || (U = !0, T.find(".mbsc-no-touch")
									.removeClass("mbsc-no-touch"))
							}, !0), Je.each(N, function (e, t) {
								Q.tap(Je(".mbsc-fr-btn" + e, w), function (e) {
									t = u(t) ? Q.buttons[t] : t, (u(t.handler) ? Q.handlers[t.handler] : t.handler)
										.call(this, e, Q)
								}, !0)
							}), Q._attachEvents(w), Q.position(), k.on(W, c), F && (I && !e ? w.addClass("mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" + I)
								.on(Ze, a)
								.find(".mbsc-fr-popup")
								.addClass("mbsc-anim-" + I) : i(t)), G("onShow", {
								target: L
								, valueText: Q._tempValue
							})
					}, Y ? 100 : 0)
				}
			}, Q.hide = function (e, t, a, n) {
				function s() {
					w.off(Ze, s), o(e)
				}
				if (!Q._isVisible || !a && !Q._isValid && "set" == t || !a && !1 === G("onBeforeClose", {
						valueText: Q._tempValue
						, button: t
					})) return !1;
				F && (Je(document.activeElement)
					.is("input,textarea") && j.contains(document.activeElement) && document.activeElement.blur(), Je(window)
					.off("keydown", r), delete Te.activeInstance), w && (F && I && !e ? w.addClass("mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" + I)
					.on(Ze, s)
					.find(".mbsc-fr-popup")
					.addClass("mbsc-anim-" + I) : o(e), Q._detachEvents(w), k.off(W, c)
					.off("focusin", d)), n && n(), ee.trigger("blur"), G("onClose", {
					valueText: Q._value
				})
			}, Q.ariaMessage = function (e) {
				x.html(""), setTimeout(function () {
					x.html(e)
				}, 100)
			}, Q.isVisible = function () {
				return Q._isVisible
			}, Q.setVal = l, Q.getVal = l, Q._generateContent = l, Q._attachEvents = l, Q._detachEvents = l, Q._readValue = l, Q._clearValue = l, Q._fillValue = l, Q._markupReady = l, Q._markupInserted = l, Q._markupRemove = l, Q._position = l, Q.__processSettings = l, Q.__init = l, Q.__destroy = l, Q._destroy = function () {
				Q.hide(!0, !1, !0), ee.off(".mbsc"), Je.each(te, function (e, t) {
					t.el.off(".mbsc")
						.prop("readonly", t.readOnly), t.lbl && t.lbl.off(".mbsc")
				}), Q.__destroy()
			}, Q._processSettings = function () {
				var e, t;
				for (Q.__processSettings(), J.buttons = J.buttons || ("inline" !== J.display ? ["cancel", "set"] : []), J.headerText = void 0 === J.headerText ? "inline" !== J.display && "{value}" : J.headerText, N = J.buttons || [], F = "inline" !== J.display, O = "body" != J.context, T = Je(J.context), _ = O ? T : Je("body,html"), V = T[0], Q._$window = k = Je(O ? J.context : window), Q.live = !0, t = 0; t < N.length; t++) "ok" != (e = N[t]) && "set" != e && "set" != e.handler || (Q.live = !1);
				Q.buttons.set = {
					text: J.setText
					, icon: J.setIcon
					, handler: "set"
				}, Q.buttons.cancel = {
					text: J.cancelText
					, icon: J.cancelIcon
					, handler: "cancel"
				}, Q.buttons.close = {
					text: J.closeText
					, icon: J.closeIcon
					, handler: "cancel"
				}, Q.buttons.clear = {
					text: J.clearText
					, icon: J.clearIcon
					, handler: "clear"
				}, Q._isInput = ee.is("input")
			}, Q._init = function () {
				Q._isVisible && Q.hide(!0, !1, !0), ee.off(".mbsc"), Q.__init(), Q._isLiquid = "liquid" == J.layout, F ? (Q._readValue(), Q._hasContent || Q.attachShow(ee)) : Q.show(), ee.on("change.mbsc", function () {
					Q._preventChange || Q.setVal(ee.val(), !0, !1), Q._preventChange = !1
				})
			}, Q.buttons = {}, Q.handlers = {
				set: Q.select
				, cancel: Q.cancel
				, clear: Q.clear
			}, Q._value = null, Q._isValid = !0, Q._isVisible = !1, J = Q.settings, G = Q.trigger, a || Q.init(t)
		};
	ht.prototype._defaults = {
			lang: "en"
			, setText: "Set"
			, selectedText: "{count} selected"
			, closeText: "Close"
			, cancelText: "Cancel"
			, clearText: "Clear"
			, context: "body"
			, maxPopupWidth: 600
			, disabled: !1
			, closeOnOverlayTap: !0
			, showOnFocus: lt || ct
			, showOnTap: !0
			, display: "center"
			, scroll: !0
			, scrollLock: !0
			, tap: !0
			, btnClass: "mbsc-fr-btn"
			, btnWidth: !0
			, focusTrap: !0
			, focusOnClose: !dt
		}, rt.Frame = ht, it.frame.mobiscroll = {
			headerText: !1
			, btnWidth: !1
		}, it.scroller.mobiscroll = qe({}, it.frame.mobiscroll, {
			rows: 5
			, showLabel: !1
			, selectedLineBorder: 1
			, weekDays: "min"
			, checkIcon: "ion-ios7-checkmark-empty"
			, btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5"
			, btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5"
			, btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5"
			, btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
		}), Ee && Je(window)
		.on("focus", function () {
			nt && (st = !0)
		});
	var ft = "ios" == Oe
		, pt = function (e, t, a) {
			function n(e) {
				G("onStart", {
					domEvent: e

				}), ae.stopProp && e.stopPropagation(), ae.prevDef && e.preventDefault(), ae.readonly || ae.lock && O || k(e, this) && !I && Te.Wodxy && (d && d.removeClass("mbsc-btn-a"), C = !1, O || (d = Je(e.target)
						.closest(".mbsc-btn-e", this), d.length && !d.hasClass("mbsc-btn-d") && (C = !0, f = setTimeout(function () {
							d.addClass("mbsc-btn-a")
						}, 100))), I = !0, P = !1, F = !1, Q.scrolled = O, R = g(e, "X"), J = g(e, "Y"), w = R, b = 0, v = 0, x = 0, W = new Date, j = +D(K, X) || 0, O && c(j, ft ? 0 : 1), "mousedown" === e.type && Je(document)
					.on("mousemove", s)
					.on("mouseup", i))
			}

			function s(e) {
				I && (ae.stopProp && e.stopPropagation(), w = g(e, "X"), S = g(e, "Y"), b = w - R, v = S - J, x = X ? v : b, C && (Math.abs(v) > ae.thresholdY || Math.abs(b) > ae.thresholdX) && (clearTimeout(f), d.removeClass("mbsc-btn-a"), C = !1), (Q.scrolled || !F && Math.abs(x) > U) && (P || G("onGestureStart", M), Q.scrolled = P = !0, L || (L = !0, H = ze(r))), X || ae.scrollLock ? e.preventDefault() : Q.scrolled ? e.preventDefault() : Math.abs(v) > 7 && (F = !0, Q.scrolled = !0, ne.trigger("touchend")))
			}

			function r() {
				A && (x = h(x, -Y * A, Y * A)), c(h(j + x, V - _, N + _)), L = !1
			}

			function i(e) {
				if (I) {
					var t, a = new Date - W;
					ae.stopProp && e.stopPropagation(), je(H), L = !1, !F && Q.scrolled && (ae.momentum && a < 300 && (t = x / a, x = Math.max(Math.abs(x), t * t / ae.speedUnit) * (x < 0 ? -1 : 1)), l(x)), C && (clearTimeout(f), d.addClass("mbsc-btn-a"), setTimeout(function () {
							d.removeClass("mbsc-btn-a")
						}, 100), F || Q.scrolled || G("onBtnTap", {
							target: d[0]
							, domEvent: e
						})), "mouseup" == e.type && Je(document)
						.off("mousemove", s)
						.off("mouseup", i), I = !1
				}
			}

			function o(e) {
				if (e = e.originalEvent || e, x = X ? e.deltaY || e.wheelDelta || e.detail : e.deltaX, G("onStart", {
						domEvent: e
					}), ae.stopProp && e.stopPropagation(), x && Te.Wodxy) {
					if (e.preventDefault(), e.deltaMode && 1 == e.deltaMode && (x *= 5), x = h(-x, -20, 20), j = Z, ae.readonly || j + x < V || j + x > N) return;
					P || (M = {
						posX: X ? 0 : Z
						, posY: X ? Z : 0
						, originX: X ? 0 : j
						, originY: X ? j : 0
						, direction: x > 0 ? X ? 270 : 360 : X ? 90 : 180
					}, G("onGestureStart", M)), L || (L = !0, H = ze(r)), P = !0, clearTimeout(E), E = setTimeout(function () {
						je(H), L = !1, P = !1, l(x)
					}, 200)
				}
			}

			function l(e) {
				var t, a, n;
				if (A && (e = h(e, -Y * A, Y * A)), n = h(Math.round((j + e) / Y) * Y, V, N), ee = Math.round(n / Y), z) {
					if (e < 0) {
						for (t = z.length - 1; t >= 0; t--)
							if (Math.abs(n) + p >= z[t].breakpoint) {
								ee = t, te = 2, n = z[t].snap2;
								break
							}
					} else if (e >= 0)
						for (t = 0; t < z.length; t++)
							if (Math.abs(n) <= z[t].breakpoint) {
								ee = t, te = 1, n = z[t].snap1;
								break
							}
					n = h(n, V, N)
				}
				a = ae.time || (Z < V || Z > N ? 1e3 : Math.max(1e3, Math.abs(n - Z) * ae.timeUnit)), M.destinationX = X ? 0 : n, M.destinationY = X ? n : 0, M.duration = a, M.transitionTiming = y, G("onGestureEnd", M), c(n, a)
			}

			function c(e, t, a, n) {
				var s = e != Z
					, r = t > 1
					, i = function () {
						clearInterval($), clearTimeout(q), O = !1, Z = e, M.posX = X ? 0 : e, M.posY = X ? e : 0, s && G("onMove", M), r && G("onAnimationEnd", M), n && n()
					};
				M = {
					posX: X ? 0 : Z
					, posY: X ? Z : 0
					, originX: X ? 0 : j
					, originY: X ? j : 0
					, direction: e - Z > 0 ? X ? 270 : 360 : X ? 90 : 180
				}, Z = e, r && (M.destinationX = X ? 0 : e, M.destinationY = X ? e : 0, M.duration = t, M.transitionTiming = y, G("onAnimationStart", M)), B[tt + "Transition"] = t ? et + "transform " + Math.round(t) + "ms " + y : "", B[tt + "Transform"] = "translate3d(" + (X ? "0," + e + "px," : e + "px,0,") + "0)", !s && !O || !t || t <= 1 ? i() : t && (O = !a, clearInterval($), $ = setInterval(function () {
					var t = +D(K, X) || 0;
					M.posX = X ? 0 : t, M.posY = X ? t : 0, G("onMove", M), Math.abs(t - e) < 2 && i()
				}, 100), clearTimeout(q), q = setTimeout(function () {
					i()
				}, t)), ae.sync && ae.sync(e, t, y)
			}
			var d, f, p, b, v, x, T, y, _, w, S, M, C, N, A, V, I, O, F, H, L, P, E, $, Y, z, j, W, R, J, B, K, q, U, G, X, Z, Q = this
				, ee = 0
				, te = 1
				, ae = t
				, ne = Je(e);
			Ue.call(this, e, t, !0), Q.scrolled = !1, Q.scroll = function (t, a, n, s) {
				t = m(t) ? Math.round(t / Y) * Y : Math.ceil((Je(t, e)
					.length ? Math.round(K.offset()[T] - Je(t, e)
						.offset()[T]) : Z) / Y) * Y, t = h(t, V, N), ee = Math.round(t / Y), j = Z, c(t, a, n, s)
			}, Q.refresh = function (e) {
				var t;
				p = void 0 === ae.contSize ? X ? ne.height() : ne.width() : ae.contSize, V = void 0 === ae.minScroll ? Math.min(0, X ? p - K.height() : p - K.width()) : ae.minScroll, N = void 0 === ae.maxScroll ? 0 : ae.maxScroll, z = null, !X && ae.rtl && (t = N, N = -V, V = -t), u(ae.snap) && (z = [], K.find(ae.snap)
					.each(function () {
						var e = X ? this.offsetTop : this.offsetLeft
							, t = X ? this.offsetHeight : this.offsetWidth;
						z.push({
							breakpoint: e + t / 2
							, snap1: -e
							, snap2: p - e - t
						})
					})), Y = m(ae.snap) ? ae.snap : 1, A = ae.snap ? ae.maxSnapScroll : 0, y = ae.easing, _ = ae.elastic ? m(ae.snap) ? Y : m(ae.elastic) ? ae.elastic : 0 : 0, void 0 === Z && (Z = ae.initialPos, ee = Math.round(Z / Y)), e || Q.scroll(ae.snap ? z ? z[ee]["snap" + te] : ee * Y : Z)
			}, Q._processSettings = function () {
				X = "Y" == ae.axis, T = X ? "top" : "left", K = ae.moveElement || ne.children()
					.eq(0), B = K[0].style, U = X ? ae.thresholdY : ae.thresholdX
			}, Q._init = function () {
				Q.refresh(), ne.on("touchstart mousedown", n)
					.on("touchmove", s)
					.on("touchend touchcancel", i), ae.mousewheel && ne.on("wheel mousewheel", o), e.addEventListener && e.addEventListener("click", function (e) {
						Q.scrolled && (Q.scrolled = !1, e.stopPropagation(), e.preventDefault())
					}, !0)
			}, Q._destroy = function () {
				clearInterval($), ne.off("touchstart mousedown", n)
					.off("touchmove", s)
					.off("touchend touchcancel", i)
					.off("wheel mousewheel", o)
			}, ae = Q.settings, G = Q.trigger, a || Q.init(t)
		};
	pt.prototype = {
		_defaults: {
			speedUnit: .0022
			, timeUnit: 3
			, initialPos: 0
			, axis: "Y"
			, thresholdX: 10
			, thresholdY: 5
			, easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)"
			, stopProp: !0
			, momentum: !0
			, mousewheel: !0
			, elastic: !0
		}
	};
	var bt = Ee ? window.CSS : null
		, vt = bt && bt.supports && bt.supports("(transform-style: preserve-3d)")
		, gt = !vt || "wp" == Oe || "android" == Oe;
	Te.presetShort("scroller", "Scroller", !1);
	var xt = function (e, t, a) {
		function n(e) {
			var t = +Je(this)
				.attr("data-index");
			e.stopPropagation(), "mousedown" === e.type && e.preventDefault(), k(e, this) && !T(t) && (V = Je(this)
				.addClass("mbsc-sc-btn-a"), Y = g(e, "X"), z = g(e, "Y"), E = !0, $ = !1, setTimeout(function () {
					b(t, "inc" == V.attr("data-dir") ? 1 : -1)
				}, 100), "mousedown" === e.type && Je(document)
				.on("mousemove", s)
				.on("mouseup", r))
		}

		function s(e) {
			(Math.abs(Y - g(e, "X")) > 7 || Math.abs(z - g(e, "Y")) > 7) && v(!0)
		}

		function r(e) {
			v(), e.preventDefault(), "mouseup" === e.type && Je(document)
				.off("mousemove", s)
				.off("mouseup", r)
		}

		function i(e) {
			var t, a, n = Je(this)
				.attr("data-index");
			38 == e.keyCode ? (t = !0, a = -1) : 40 == e.keyCode ? (t = !0, a = 1) : 32 == e.keyCode && (t = !0, l(n, U[n]._$markup.find('.mbsc-sc-itm[data-val="' + j[n] + '"]'))), t && (e.stopPropagation(), e.preventDefault(), a && !E && (E = !0, $ = !1, b(n, a)))
		}

		function o() {
			v()
		}

		function l(e, t) {
			var a = U[e]
				, n = t.attr("data-index")
				, s = p(a, n)
				, r = Q._tempSelected[e]
				, i = m(a.multiple) ? a.multiple : 1 / 0;
			!1 !== K("onItemTap", {
				target: t[0]
				, index: e
				, value: s
				, selected: t.hasClass("mbsc-sc-itm-sel")
			}) && (a.multiple && !a._disabled[s] && (void 0 !== r[s] ? (t.removeClass(H)
				.removeAttr("aria-selected"), delete r[s]) : (1 == i && (Q._tempSelected[e] = r = {}, a._$markup.find(".mbsc-sc-itm-sel")
					.removeClass(H)
					.removeAttr("aria-selected")), c(r)
				.length < i && (t.addClass(H)
					.attr("aria-selected", "true"), r[s] = s))), D(a, e, n, Z, !0, !0, a.multiple), !Q.live || a.multiple || !0 !== B.setOnTap && !B.setOnTap[e] || setTimeout(function () {
				Q.select()
			}, 200))
		}

		function d(e, t) {
			return (e._array ? e._map[t] : e.getIndex(t, Q)) || 0
		}

		function u(e, t) {
			var a = e.data;
			if (t >= e.min && t <= e.max) return e._array ? e.circular ? Je(a)
				.get(t % e._length) : a[t] : Je.isFunction(a) ? a(t, Q) : ""
		}

		function h(e) {
			return Je.isPlainObject(e) ? void 0 !== e.value ? e.value : e.display : e
		}

		function f(e) {
			var t = Je.isPlainObject(e) ? e.display : e;
			return void 0 === t ? "" : t
		}

		function p(e, t) {
			return h(u(e, t))
		}

		function b(e, t) {
			$ || x(e, t), E && Te.Wodxy && (clearInterval(P), P = setInterval(function () {
				x(e, t)
			}, B.delay))
		}

		function v(e) {
			clearInterval(P), $ = e, E = !1, V && V.removeClass("mbsc-sc-btn-a")
		}

		function x(e, t) {
			var a = U[e];
			D(a, e, a._current + t, Z, 1 == t ? 1 : 2)
		}

		function T(e) {
			return Je.isArray(B.readonly) ? B.readonly[e] : B.readonly
		}

		function y(e, t, a) {
			var n = e._index - e._batch;
			return e.data = e.data || [], e.key = void 0 !== e.key ? e.key : t, e.label = void 0 !== e.label ? e.label : t, e._map = {}, e._array = Je.isArray(e.data), e._array && (e._length = e.data.length, Je.each(e.data, function (t, a) {
				e._map[h(a)] = t
			})), e.circular = void 0 === B.circular ? void 0 === e.circular ? e._array && e._length > B.rows : e.circular : Je.isArray(B.circular) ? B.circular[t] : B.circular, e.min = e._array ? e.circular ? -1 / 0 : 0 : void 0 === e.min ? -1 / 0 : e.min, e.max = e._array ? e.circular ? 1 / 0 : e._length - 1 : void 0 === e.max ? 1 / 0 : e.max, e._nr = t, e._index = d(e, j[t]), e._disabled = {}, e._batch = 0, e._current = e._index, e._first = e._index - X, e._last = e._index + X, e._offset = e._first, a ? (e._offset -= e._margin / W + (e._index - n), e._margin += (e._index - n) * W) : e._margin = 0, e._refresh = function (t) {
				var a = -(e.min - e._offset + (e.multiple && !F ? Math.floor(B.rows / 2) : 0)) * W
					, n = Math.min(a, -(e.max - e._offset - (e.multiple && !F ? Math.floor(B.rows / 2) : 0)) * W);
				qe(e._scroller.settings, {
					minScroll: n
					, maxScroll: a
				}), e._scroller.refresh(t)
			}, G[e.key] = e, e
		}

		function _(e, t, a, n, s) {
			var r, i, o, l, c, d, m, p, b = ""
				, v = Q._tempSelected[t]
				, g = e._disabled || {};
			for (r = a; r <= n; r++) o = u(e, r), c = f(o), l = h(o), i = o && void 0 !== o.cssClass ? o.cssClass : "", d = o && void 0 !== o.label ? o.label : "", m = o && o.invalid, p = void 0 !== l && l == j[t] && !e.multiple, b += '<div role="option" aria-selected="' + !!v[l] + '" class="mbsc-sc-itm ' + (s ? "mbsc-sc-itm-3d " : "") + i + " " + (p ? "mbsc-sc-itm-sel " : "") + (v[l] ? H : "") + (void 0 === l ? " mbsc-sc-itm-ph" : " mbsc-btn-e") + (m ? " mbsc-sc-itm-inv-h mbsc-btn-d" : "") + (g[l] ? " mbsc-sc-itm-inv mbsc-btn-d" : "") + '" data-index="' + r + '" data-val="' + l + '"' + (d ? ' aria-label="' + d + '"' : "") + (p ? ' aria-selected="true"' : "") + ' style="height:' + W + "px;line-height:" + W + "px;" + (s ? et + "transform:rotateX(" + (e._offset - r) * O % 360 + "deg) translateZ(" + W * B.rows / 2 + "px);" : "") + '">' + (q > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(W / q) + "px;font-size:" + Math.round(W / q * .8) + 'px;">' : "") + c + (q > 1 ? "</div>" : "") + "</div>";
			return b
		}

		function w(t) {
			var a = B.headerText;
			return a ? "function" == typeof a ? a.call(e, t) : a.replace(/\{value\}/i, t) : ""
		}

		function S(e, t, a) {
			var n = Math.round(-a / W) + e._offset
				, s = n - e._current
				, r = e._first
				, i = e._last
				, o = r + X - I + 1
				, l = i - X + I;
			s && (e._first += s, e._last += s, e._current = n, s > 0 ? (e._$scroller.append(_(e, t, Math.max(i + 1, r + s), i + s)), Je(".mbsc-sc-itm", e._$scroller)
				.slice(0, Math.min(s, i - r + 1))
				.remove(), F && (e._$3d.append(_(e, t, Math.max(l + 1, o + s), l + s, !0)), Je(".mbsc-sc-itm", e._$3d)
					.slice(0, Math.min(s, l - o + 1))
					.attr("class", "mbsc-sc-itm-del"))) : s < 0 && (e._$scroller.prepend(_(e, t, r + s, Math.min(r - 1, i + s))), Je(".mbsc-sc-itm", e._$scroller)
				.slice(Math.max(s, r - i - 1))
				.remove(), F && (e._$3d.prepend(_(e, t, o + s, Math.min(o - 1, l + s), !0)), Je(".mbsc-sc-itm", e._$3d)
					.slice(Math.max(s, o - l - 1))
					.attr("class", "mbsc-sc-itm-del"))), e._margin += s * W, e._$scroller.css("margin-top", e._margin + "px"))
		}

		function M(e, t, a, n) {
			var s, r = U[e]
				, i = n || r._disabled
				, o = d(r, t)
				, l = t
				, c = t
				, m = 0
				, u = 0;
			if (void 0 === t && (t = p(r, o)), !0 === i[t]) {
				for (s = 0; o - m >= r.min && i[l] && s < 100;) s++, m++, l = p(r, o - m);
				for (s = 0; o + u < r.max && i[c] && s < 100;) s++, u++, c = p(r, o + u);
				t = (u < m && u && 2 !== a || !m || o - m < 0 || 1 == a) && !i[c] ? c : l
			}
			return t
		}

		function C(t, a, n, s, r, i) {
			var o, l, c, m, u = Q._isVisible;
			J = !0, m = B.validate.call(e, {
				values: j.slice(0)
				, index: a
				, direction: n
			}, Q) || {}, J = !1, m.valid && (Q._tempWheelArray = j = m.valid.slice(0)), i || Je.each(U, function (e, s) {
				if (u && s._$markup.find(".mbsc-sc-itm-inv")
					.removeClass("mbsc-sc-itm-inv mbsc-btn-d"), s._disabled = {}, m.disabled && m.disabled[e] && Je.each(m.disabled[e], function (e, t) {
						s._disabled[t] = !0, u && s._$markup.find('.mbsc-sc-itm[data-val="' + t + '"]')
							.addClass("mbsc-sc-itm-inv mbsc-btn-d")
					}), j[e] = s.multiple ? j[e] : M(e, j[e], n), u) {
					if (s.multiple && void 0 !== a || s._$markup.find(".mbsc-sc-itm-sel")
						.removeClass(H)
						.removeAttr("aria-selected"), s.multiple) {
						if (void 0 === a)
							for (var i in Q._tempSelected[e]) s._$markup.find('.mbsc-sc-itm[data-val="' + i + '"]')
								.addClass(H)
								.attr("aria-selected", "true")
					} else s._$markup.find('.mbsc-sc-itm[data-val="' + j[e] + '"]')
						.addClass("mbsc-sc-itm-sel")
						.attr("aria-selected", "true");
					l = d(s, j[e]), o = l - s._index + s._batch, Math.abs(o) > 2 * X + 1 && (c = o + (2 * X + 1) * (o > 0 ? -1 : 1), s._offset += c, s._margin -= c * W, s._refresh()), s._index = l + s._batch, s._scroller.scroll(-(l - s._offset + s._batch) * W, a === e || void 0 === a ? t : Z, r)
				}
			}), K("onValidated"), Q._tempValue = B.formatValue(j, Q), u && Q._header.html(w(Q._tempValue)), Q.live && (Q._hasValue = s || Q._hasValue, N(s, s, 0, !0), s && K("onSet", {
				valueText: Q._value
			})), s && K("onChange", {
				valueText: Q._tempValue
			})
		}

		function D(e, t, a, n, s, r, i) {
			var o = p(e, a);
			void 0 !== o && (j[t] = o, e._batch = e._array ? Math.floor(a / e._length) * e._length : 0, setTimeout(function () {
				C(n, t, s, !0, r, i)
			}, 10))
		}

		function N(e, t, a, n, s) {
			if (n ? Q._tempValue = B.formatValue(Q._tempWheelArray, Q) : C(a), !s) {
				Q._wheelArray = [];
				for (var r = 0; r < j.length; r++) Q._wheelArray[r] = U[r] && U[r].multiple ? Object.keys(Q._tempSelected[r])[0] : j[r];
				Q._value = Q._hasValue ? Q._tempValue : null, Q._selected = qe(!0, {}, Q._tempSelected)
			}
			e && (Q._isInput && ee.val(Q._hasValue ? Q._tempValue : ""), K("onFill", {
				valueText: Q._hasValue ? Q._tempValue : ""
				, change: t
			}), t && (Q._preventChange = !0, ee.trigger("change")))
		}
		var A, V, I, O, F, H, L, P, E, $, Y, z, j, W, R, J, B, K, q, U, G, X = 40
			, Z = 1e3
			, Q = this
			, ee = Je(e);
		ht.call(this, e, t, !0), Q.setVal = Q._setVal = function (t, a, n, s, r) {
			Q._hasValue = null !== t && void 0 !== t, Q._tempWheelArray = j = Je.isArray(t) ? t.slice(0) : B.parseValue.call(e, t, Q) || [], N(a, void 0 === n ? a : n, r, !1, s)
		}, Q.getVal = Q._getVal = function (e) {
			var t = Q._hasValue || e ? Q[e ? "_tempValue" : "_value"] : null;
			return m(t) ? +t : t
		}, Q.setArrayVal = Q.setVal, Q.getArrayVal = function (e) {
			return e ? Q._tempWheelArray : Q._wheelArray
		}, Q.changeWheel = function (e, t, a) {
			var n, s;
			Je.each(e, function (e, t) {
				(s = G[e]) && (n = s._nr, qe(s, t), y(s, n, !0), Q._isVisible && (F && s._$3d.html(_(s, n, s._first + X - I + 1, s._last - X + I, !0)), s._$scroller.html(_(s, n, s._first, s._last))
					.css("margin-top", s._margin + "px"), s._refresh(J)))
			}), !Q._isVisible || Q._isLiquid || J || Q.position(), J || C(t, void 0, void 0, a)
		}, Q.getValidValue = M, Q._generateContent = function () {
			var e, t = 0
				, a = ""
				, n = F ? et + "transform: translateZ(" + (W * B.rows / 2 + 3) + "px);" : ""
				, s = '<div class="mbsc-sc-whl-l" style="' + n + "height:" + W + "px;margin-top:-" + (W / 2 + (B.selectedLineBorder || 0)) + 'px;"></div>'
				, r = 0;
			return Je.each(B.wheels, function (i, o) {
				a += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (F ? " mbsc-sc-whl-gr-3d-c" : "") + (B.showLabel ? " mbsc-sc-lbl-v" : "") + '">' + s + '<div class="mbsc-sc-whl-gr' + (F ? " mbsc-sc-whl-gr-3d" : "") + (L ? " mbsc-sc-cp" : "") + (B.width || B.maxWidth ? '"' : '" style="max-width:' + B.maxPopupWidth + 'px;"') + ">", Je.each(o, function (i, o) {
					Q._tempSelected[r] = qe({}, Q._selected[r]), U[r] = y(o, r), t += B.maxWidth ? B.maxWidth[r] || B.maxWidth : B.width ? B.width[r] || B.width : 0, e = void 0 !== o.label ? o.label : i, a += '<div class="mbsc-sc-whl-w ' + (o.cssClass || "") + (o.multiple ? " mbsc-sc-whl-multi" : "") + '" style="' + (B.width ? "width:" + (B.width[r] || B.width) + "px;" : (B.minWidth ? "min-width:" + (B.minWidth[r] || B.minWidth) + "px;" : "") + (B.maxWidth ? "max-width:" + (B.maxWidth[r] || B.maxWidth) + "px;" : "")) + '"><div class="mbsc-sc-whl-o" style="' + n + '"></div>' + s + '<div tabindex="0" aria-live="off" aria-label="' + e + '"' + (o.multiple ? ' aria-multiselectable="true"' : "") + ' role="listbox" data-index="' + r + '" class="mbsc-sc-whl" style="height:' + B.rows * W * (F ? 1.1 : 1) + 'px;">' + (L ? '<div data-index="' + r + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (B.btnPlusClass || "") + '" style="height:' + W + "px;line-height:" + W + 'px;"></div><div data-index="' + r + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (B.btnMinusClass || "") + '" style="height:' + W + "px;line-height:" + W + 'px;"></div>' : "") + '<div class="mbsc-sc-lbl">' + e + '</div><div class="mbsc-sc-whl-c" style="height:' + R + "px;margin-top:-" + (R / 2 + 1) + "px;" + n + '"><div class="mbsc-sc-whl-sc" style="top:' + (R - W) / 2 + 'px;">', a += _(o, r, o._first, o._last) + "</div></div>", F && (a += '<div class="mbsc-sc-whl-3d" style="height:' + W + "px;margin-top:-" + W / 2 + 'px;">', a += _(o, r, o._first + X - I + 1, o._last - X + I, !0), a += "</div>"), a += "</div></div>", r++
				}), a += "</div></div>"
			}), t && (B.maxPopupWidth = t), a
		}, Q._attachEvents = function (e) {
			Je(".mbsc-sc-btn", e)
				.on("touchstart mousedown", n)
				.on("touchmove", s)
				.on("touchend touchcancel", r), Je(".mbsc-sc-whl", e)
				.on("keydown", i)
				.on("keyup", o)
		}, Q._detachEvents = function () {
			for (var e = 0; e < U.length; e++) U[e]._scroller.destroy()
		}, Q._markupReady = function (e) {
			A = e, Je(".mbsc-sc-whl-w", A)
				.each(function (e) {
					var t, a = Je(this)
						, n = U[e]
						, s = -(n.min - n._offset + (n.multiple && !F ? Math.floor(B.rows / 2) : 0)) * W
						, r = Math.min(s, -(n.max - n._offset - (n.multiple && !F ? Math.floor(B.rows / 2) : 0)) * W);
					n._$markup = a, n._$scroller = Je(".mbsc-sc-whl-sc", this), n._$3d = Je(".mbsc-sc-whl-3d", this), n._scroller = new pt(this, {
						mousewheel: B.mousewheel
						, moveElement: n._$scroller
						, initialPos: (n._first - n._index) * W
						, contSize: 0
						, snap: W
						, minScroll: r
						, maxScroll: s
						, maxSnapScroll: X
						, prevDef: !0
						, stopProp: !0
						, timeUnit: 3
						, easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)"
						, sync: function (e, t, a) {
							F && (n._$3d[0].style[tt + "Transition"] = t ? et + "transform " + Math.round(t) + "ms " + a : "", n._$3d[0].style[tt + "Transform"] = "rotateX(" + -e / W * O + "deg)")
						}
						, onStart: function (t, a) {
							a.settings.readonly = T(e)
						}
						, onGestureStart: function () {
							a.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), K("onWheelGestureStart", {
								index: e
							})
						}
						, onGestureEnd: function (a) {
							var s = 90 == a.direction ? 1 : 2
								, r = a.duration
								, i = a.destinationY;
							t = Math.round(-i / W) + n._offset, D(n, e, t, r, s)
						}
						, onAnimationStart: function () {
							a.addClass("mbsc-sc-whl-anim")
						}
						, onAnimationEnd: function () {
							a.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"), K("onWheelAnimationEnd", {
									index: e
								}), n._$3d.find(".mbsc-sc-itm-del")
								.remove()
						}
						, onMove: function (t) {
							S(n, e, t.posY)
						}
						, onBtnTap: function (t) {
							l(e, Je(t.target))
						}
					})
				}), C()
		}, Q._fillValue = function () {
			Q._hasValue = !0, N(!0, !0, 0, !0)
		}, Q._clearValue = function () {
			Je(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", A)
				.removeClass(H)
				.removeAttr("aria-selected")
		}, Q._readValue = function () {
			var t = ee.val() || ""
				, a = 0;
			"" !== t && (Q._hasValue = !0), Q._tempWheelArray = j = Q._hasValue && Q._wheelArray ? Q._wheelArray.slice(0) : B.parseValue.call(e, t, Q) || [], Q._tempSelected = qe(!0, {}, Q._selected), Je.each(B.wheels, function (e, t) {
				Je.each(t, function (e, t) {
					U[a] = y(t, a), a++
				})
			}), N(!1, !1, 0, !0), K("onRead")
		}, Q.__processSettings = function () {
			B = Q.settings, K = Q.trigger, q = B.multiline, H = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + B.checkIcon, U = [], G = {}
		}, Q.__init = function () {
			L = B.showScrollArrows, F = B.scroll3d && !gt && !L, W = B.height, R = F ? 2 * Math.round((W - .03 * (W * B.rows / 2 + 3)) / 2) : W, I = Math.round(1.8 * B.rows), O = 360 / (2 * I), L && (B.rows = Math.max(3, B.rows)), B.cssClass = (B.cssClass || "") + " mbsc-sc"
		}, Q._getItemValue = h, Q._tempSelected = {}, Q._selected = {}, a || Q.init(t)
	};
	xt.prototype = {
		_hasDef: !0
		, _hasTheme: !0
		, _hasLang: !0
		, _hasPreset: !0
		, _class: "scroller"
		, _defaults: qe({}, ht.prototype._defaults, {
			minWidth: 80
			, height: 40
			, rows: 3
			, multiline: 1
			, delay: 300
			, readonly: !1
			, showLabel: !0
			, setOnTap: !1
			, wheels: []
			, preset: ""
			, speedUnit: .0012
			, timeUnit: .08
			, checkIcon: "checkmark"
			, validate: function () {}
			, formatValue: function (e) {
				return e.join(" ")
			}
			, parseValue: function (e, t) {
				var a, n, s = []
					, r = []
					, i = 0;
				return null !== e && void 0 !== e && (s = (e + "")
					.split(" ")), Je.each(t.settings.wheels, function (e, o) {
					Je.each(o, function (e, o) {
						n = o.data, a = t._getItemValue(n[0]), Je.each(n, function (e, n) {
							if (s[i] == t._getItemValue(n)) return a = t._getItemValue(n), !1
						}), r.push(a), i++
					})
				}), r
			}
		})
	}, Te.classes.Scroller = xt;
	
	
	
	(function(a) {
    var d = Te,
        b = d.$,
        c = d.util.datetime,
        e = c.adjustedDate,
        f = new Date(),
        g = {
            startYear: f.getFullYear() - 100,
            endYear: f.getFullYear() + 1,
            separator: ' ',
            dateFormat: 'mm/dd/yy',
            dateDisplay: 'MMddyy',
            timeFormat: 'h:ii A',
            dayText: 'Day',
            monthText: 'Month',
            yearText: 'Year',
            hourText: 'Hours',
            minuteText: 'Minutes',
            ampmText: '&nbsp;',
            secText: 'Seconds',
            nowText: 'Now',
            todayText: 'Today'
        },
        h = function(i) {
            function m(b, a, c, d) {
                return Math.min(d, Math.floor(b / a) * a + c);
            }
            function v(a) {
                return a < 10 ? '0' + a : a;
            }
            function a4(c) {
                var d, b, a, f = [];
                if (c) {
                    for (d = 0; d < c.length; d++) {
                        b = c[d];
                        if (b.start && b.start.getTime) {
                            a = new Date(b.start);
                            while (a <= b.end) {
                                f.push(e(a.getFullYear(), a.getMonth(), a.getDate()));
                                a.setDate(a.getDate() + 1);
                            }
                        } else {
                            f.push(b);
                        }
                    }
                    return f;
                }
                return c;
            }
            function X(a, b, c) {
                return Math.floor((c - b) / a) * a + b;
            }
            function ai(a) {
                return {
                    value: a,
                    display: (/yy/i.test(y) ? a : (a + '').substr(2, 2)) + (f.yearSuffix || '')
                };
            }
            function ad(a) {
                return a;
            }
            function ac(a) {
                return f.getYear(a);
            }
            function aa(a) {
                return f.getMonth(a);
            }
            function a9(a) {
                return f.getDay(a);
            }
            function a8(b) {
                var a = b.getHours();
                a = r && a >= 12 ? a - 12 : a;
                return m(a, u, C, U);
            }
            function a7(a) {
                return m(a.getMinutes(), q, x, V);
            }
            function al(a) {
                return m(a.getSeconds(), z, O, W);
            }
            function aj(a) {
                return a.getMilliseconds();
            }
            function ah(a) {
                return a.getHours() > 11 ? 1 : 0;
            }
            function M(a) {
                return a.getFullYear() + '-' + v(a.getMonth() + 1) + '-' + v(a.getDate());
            }
            function ae(a) {
                return m(Math.round((a.getTime() - new Date(a).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
            }
            function p(e, b, d, f) {
                var c;
                if (h[b] !== a) {
                    c = +e[h[b]];
                    if (!isNaN(c)) {
                        return c;
                    }
                }
                if (d) {
                    return l[b](d);
                }
                if (D[b] !== a) {
                    return D[b];
                }
                return l[b](f);
            }
            function A(c) {
                var b, d = new Date(new Date().setHours(0, 0, 0, 0));
                if (c === null) {
                    return c;
                }
                if (h.dd !== a) {
                    b = c[h.dd].split('-');
                    b = new Date(b[0], b[1] - 1, b[2]);
                }
                if (h.tt !== a) {
                    b = b || d;
                    b = new Date(b.getTime() + c[h.tt] % 86400 * 1000);
                }
                var e = p(c, 'y', b, d),
                    g = p(c, 'm', b, d),
                    j = Math.min(p(c, 'd', b, d), f.getMaxDayOfMonth(e, g)),
                    i = p(c, 'h', b, d);
                return f.getDate(e, g, j, r && p(c, 'a', b, d) ? i + 12 : i, p(c, 'i', b, d), p(c, 's', b, d), p(c, 'u', b, d));
            }
            function F(b, g) {
                var c, d, e = ['y', 'm', 'd', 'a', 'h', 'i', 's', 'u', 'dd', 'tt'],
                    f = [];
                if (b === null || b === a) {
                    return b;
                }
                for (c = 0; c < e.length; c++) {
                    d = e[c];
                    if (h[d] !== a) {
                        f[h[d]] = l[d](b);
                    }
                    if (g) {
                        D[c] = l[d](b);
                    }
                }
                return f;
            }
            function Q(a, b) {
                return b ? Math.floor(new Date(a) / 8.64e7) : a.getMonth() + 12 * (a.getFullYear() - 1970);
            }
            function ak(b) {
                var a = /d/i.test(b);
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-date',
                    min: Q(M(j), a),
                    max: Q(M(k), a),
                    data: function(e) {
                        var g = new Date(new Date().setHours(0, 0, 0, 0)),
                            d = a ? new Date(e * 8.64e7) : new Date(1970, e, 1);
                        if (a) {
                            d = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
                        }
                        return {
                            invalid: a && !B(d, true),
                            value: M(d),
                            display: g.getTime() == d.getTime() ? f.todayText : c.formatDate(b, d, f)
                        };
                    },
                    getIndex: function(b) {
                        return Q(b, a);
                    }
                };
            }
            function ab(d) {
                var a, b, g, e = [];
                if (/s/i.test(d)) {
                    b = z;
                } else if (/i/i.test(d)) {
                    b = q * 60;
                } else if (/h/i.test(d)) {
                    b = u * 3600;
                }
                L = o.tt = b;
                for (a = 0; a < 86400; a += b) {
                    g = new Date(new Date().setHours(0, 0, 0, 0) + a * 1000);
                    e.push({
                        value: a,
                        display: c.formatDate(d, g, f)
                    });
                }
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-time',
                    data: e
                };
            }
            function a6() {
                var p, s, c, l, b, g, e, n, d = 0,
                    o = [],
                    m = [],
                    i = [];
                if (w.match(/date/i)) {
                    p = S.split(/\|/.test(S) ? '|' : '');
                    for (l = 0; l < p.length; l++) {
                        c = p[l];
                        g = 0;
                        if (c.length) {
                            if (/y/i.test(c)) {
                                g++;
                            }
                            if (/m/i.test(c)) {
                                g++;
                            }
                            if (/d/i.test(c)) {
                                g++;
                            }
                            if (g > 1 && h.dd === a) {
                                h.dd = d;
                                d++;
                                m.push(ak(c));
                                i = m;
                                a2 = true;
                            } else if (/y/i.test(c) && h.y === a) {
                                h.y = d;
                                d++;
                                m.push({
                                    cssClass: 'mbsc-dt-whl-y',
                                    label: f.yearText,
                                    min: f.getYear(j),
                                    max: f.getYear(k),
                                    data: ai,
                                    getIndex: ad
                                });
                            } else if (/m/i.test(c) && h.m === a) {
                                h.m = d;
                                e = [];
                                d++;
                                for (b = 0; b < 12; b++) {
                                    n = y.replace(/[dy]/gi, '').replace(/mm/, v(b + 1) + (f.monthSuffix || '')).replace(/m/, b + 1 + (f.monthSuffix || ''));
                                    e.push({
                                        value: b,
                                        display: /MM/.test(n) ? n.replace(/MM/, '<span class="mbsc-dt-month">' + f.monthNames[b] + '</span>') : n.replace(/M/, '<span class="mbsc-dt-month">' + f.monthNamesShort[b] + '</span>')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-m',
                                    label: f.monthText,
                                    data: e
                                });
                            } else if (/d/i.test(c) && h.d === a) {
                                h.d = d;
                                e = [];
                                d++;
                                for (b = 1; b < 32; b++) {
                                    e.push({
                                        value: b,
                                        display: (/dd/i.test(y) ? v(b) : b) + (f.daySuffix || '')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-d',
                                    label: f.dayText,
                                    data: e
                                });
                            }
                        }
                    }
                    o.push(m);
                }
                if (w.match(/time/i)) {
                    s = H.split(/\|/.test(H) ? '|' : '');
                    for (l = 0; l < s.length; l++) {
                        c = s[l];
                        g = 0;
                        if (c.length) {
                            if (/h/i.test(c)) {
                                g++;
                            }
                            if (/i/i.test(c)) {
                                g++;
                            }
                            if (/s/i.test(c)) {
                                g++;
                            }
                            if (/a/i.test(c)) {
                                g++;
                            }
                        }
                        if (g > 1 && h.tt === a) {
                            h.tt = d;
                            d++;
                            i.push(ab(c));
                        } else if (/h/i.test(c) && h.h === a) {
                            e = [];
                            h.h = d;
                            d++;
                            for (b = C; b < (r ? 12 : 24); b += u) {
                                e.push({
                                    value: b,
                                    display: r && b === 0 ? 12 : /hh/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-h',
                                label: f.hourText,
                                data: e
                            });
                        } else if (/i/i.test(c) && h.i === a) {
                            e = [];
                            h.i = d;
                            d++;
                            for (b = x; b < 60; b += q) {
                                e.push({
                                    value: b,
                                    display: /ii/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-i',
                                label: f.minuteText,
                                data: e
                            });
                        } else if (/s/i.test(c) && h.s === a) {
                            e = [];
                            h.s = d;
                            d++;
                            for (b = O; b < 60; b += z) {
                                e.push({
                                    value: b,
                                    display: /ss/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-s',
                                label: f.secText,
                                data: e
                            });
                        } else if (/a/i.test(c) && h.a === a) {
                            h.a = d;
                            d++;
                            i.push({
                                cssClass: 'mbsc-dt-whl-a',
                                label: f.ampmText,
                                data: /A/.test(c) ? [{
                                    value: 0,
                                    display: f.amText.toUpperCase()
                                }, {
                                    value: 1,
                                    display: f.pmText.toUpperCase()
                                }] : [{
                                    value: 0,
                                    display: f.amText
                                }, {
                                    value: 1,
                                    display: f.pmText
                                }]
                            });
                        }
                    }
                    if (i != m) {
                        o.push(i);
                    }
                }
                return o;
            }
            function ag(d) {
                var a, e, f, b = {};
                if (d.is('input')) {
                    switch (d.attr('type')) {
                        case 'date':
                            a = 'yy-mm-dd';
                            break;
                        case 'datetime':
                            a = 'yy-mm-ddTHH:ii:ssZ';
                            break;
                        case 'datetime-local':
                            a = 'yy-mm-ddTHH:ii:ss';
                            break;
                        case 'month':
                            a = 'yy-mm';
                            b.dateOrder = 'mmyy';
                            break;
                        case 'time':
                            a = 'HH:ii:ss';
                            break;
                    }
                    b.format = a;
                    e = d.attr('min');
                    f = d.attr('max');
                    if (e) {
                        b.min = c.parseDate(a, e);
                    }
                    if (f) {
                        b.max = c.parseDate(a, f);
                    }
                }
                return b;
            }
            function af(a, f) {
                var b, c, e = false,
                    d = false,
                    g = 0,
                    h = 0;
                j = A(F(j));
                k = A(F(k));
                if (B(a)) {
                    return a;
                }
                if (a < j) {
                    a = j;
                }
                if (a > k) {
                    a = k;
                }
                b = a;
                c = a;
                if (f !== 2) {
                    e = B(b);
                    while (!e && b < k) {
                        b = new Date(b.getTime() + 1000 * 60 * 60 * 24);
                        e = B(b);
                        g++;
                    }
                }
                if (f !== 1) {
                    d = B(c);
                    while (!d && c > j) {
                        c = new Date(c.getTime() - 1000 * 60 * 60 * 24);
                        d = B(c);
                        h++;
                    }
                }
                if (f === 1 && e) {
                    return b;
                }
                if (f === 2 && d) {
                    return c;
                }
                return h <= g && d ? c : b;
            }
            function B(a, b) {
                if (!b && a < j) {
                    return false;
                }
                if (!b && a > k) {
                    return false;
                }
                if (a3(a, J)) {
                    return true;
                }
                if (a3(a, I)) {
                    return false;
                }
                return true;
            }
            function a3(b, e) {
                var c, d, a;
                if (e) {
                    for (d = 0; d < e.length; d++) {
                        c = e[d];
                        a = c + '';
                        if (!c.start) {
                            if (c.getTime) {
                                if (b.getFullYear() == c.getFullYear() && b.getMonth() == c.getMonth() && b.getDate() == c.getDate()) {
                                    return true;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == b.getMonth() && a[1] == b.getDate()) {
                                        return true;
                                    }
                                } else if (a[0] == b.getDate()) {
                                    return true;
                                }
                            } else {
                                a = +a.replace('w', '');
                                if (a == b.getDay()) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }
            function a0(h, l, i, k, j, e, g) {
                var b, d, c, a;
                if (h) {
                    for (d = 0; d < h.length; d++) {
                        b = h[d];
                        a = b + '';
                        if (!b.start) {
                            if (b.getTime) {
                                if (f.getYear(b) == l && f.getMonth(b) == i) {
                                    e[f.getDay(b)] = g;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == i) {
                                        e[a[1]] = g;
                                    }
                                } else {
                                    e[a[0]] = g;
                                }
                            } else {
                                a = +a.replace('w', '');
                                for (c = a - k; c < j; c += 7) {
                                    if (c >= 0) {
                                        e[c + 1] = g;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            function _(x, y, e, M, I, B, N, K) {
                var H, D, k, F, E, C, i, A, z, b, g, d, c, p, v, G, w, l, q, u, J = {},
                    j = f.getDate(M, I, B),
                    h = ['a', 'h', 'i', 's'];
                if (x) {
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        if (g.start) {
                            g.apply = false;
                            k = g.d;
                            w = k + '';
                            l = w.split('/');
                            if (k && (k.getTime && M == f.getYear(k) && I == f.getMonth(k) && B == f.getDay(k) || !w.match(/w/i) && (l[1] && B == l[1] && I == l[0] - 1 || !l[1] && B == l[0]) || w.match(/w/i) && j.getDay() == +w.replace('w', ''))) {
                                g.apply = true;
                                J[j] = true;
                            }
                        }
                    }
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        H = 0;
                        G = 0;
                        A = s[e];
                        z = n[e];
                        p = true;
                        v = true;
                        D = false;
                        if (g.start && (g.apply || !g.d && !J[j])) {
                            d = g.start.split(':');
                            c = g.end.split(':');
                            for (b = 0; b < 3; b++) {
                                if (d[b] === a) {
                                    d[b] = 0;
                                }
                                if (c[b] === a) {
                                    c[b] = 59;
                                }
                                d[b] = +d[b];
                                c[b] = +c[b];
                            }
                            if (e == 'tt') {
                                A = m(Math.round((new Date(j).setHours(d[0], d[1], d[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                                z = m(Math.round((new Date(j).setHours(c[0], c[1], c[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                            } else {
                                d.unshift(d[0] > 11 ? 1 : 0);
                                c.unshift(c[0] > 11 ? 1 : 0);
                                if (r) {
                                    if (d[1] >= 12) {
                                        d[1] = d[1] - 12;
                                    }
                                    if (c[1] >= 12) {
                                        c[1] = c[1] - 12;
                                    }
                                }
                                for (b = 0; b < y; b++) {
                                    if (t[b] !== a) {
                                        q = m(d[b], o[h[b]], s[h[b]], n[h[b]]);
                                        u = m(c[b], o[h[b]], s[h[b]], n[h[b]]);
                                        F = 0;
                                        E = 0;
                                        C = 0;
                                        if (r && b == 1) {
                                            F = d[0] ? 12 : 0;
                                            E = c[0] ? 12 : 0;
                                            C = t[0] ? 12 : 0;
                                        }
                                        if (!p) {
                                            q = 0;
                                        }
                                        if (!v) {
                                            u = n[h[b]];
                                        }
                                        if ((p || v) && (q + F < t[b] + C && t[b] + C < u + E)) {
                                            D = true;
                                        }
                                        if (t[b] != q) {
                                            p = false;
                                        }
                                        if (t[b] != u) {
                                            v = false;
                                        }
                                    }
                                }
                                if (!K) {
                                    for (b = y + 1; b < 4; b++) {
                                        if (d[b] > 0) {
                                            H = o[e];
                                        }
                                        if (c[b] < n[h[b]]) {
                                            G = o[e];
                                        }
                                    }
                                }
                                if (!D) {
                                    q = m(d[y], o[e], s[e], n[e]) + H;
                                    u = m(c[y], o[e], s[e], n[e]) - G;
                                    if (p) {
                                        A = q;
                                    }
                                    if (v) {
                                        z = u;
                                    }
                                }
                            }
                            if (p || v || D) {
                                for (b = A; b <= z; b += o[e]) {
                                    N[b] = !K;
                                }
                            }
                        }
                    }
                }
            }
            var L, a2, Y, h = {},
                D = {},
                t = [],
                P = ag(b(this)),
                $ = b.extend({}, i.settings),
                f = b.extend(i.settings, d.util.datetime.defaults, g, P, $),
                I = a4(f.invalid),
                J = a4(f.valid),
                w = f.preset,
                K = w == 'datetime' ? f.dateFormat + f.separator + f.timeFormat : w == 'time' ? f.timeFormat : f.dateFormat,
                T = P.format || K,
                S = f.dateWheels || f.dateFormat,
                H = f.timeWheels || f.timeFormat,
                y = f.dateWheels || f.dateDisplay,
                G = H,
                a1 = f.baseTheme || f.theme,
                j = f.min || e(f.startYear, 0, 1),
                k = f.max || e(f.endYear, 11, 31, 23, 59, 59),
                R = /time/i.test(w),
                r = /h/.test(G),
                Z = /D/.test(y),
                E = f.steps || {},
                u = E.hour || f.stepHour || 1,
                q = E.minute || f.stepMinute || 1,
                z = E.second || f.stepSecond || 1,
                N = E.zeroBased,
                C = N ? 0 : j.getHours() % u,
                x = N ? 0 : j.getMinutes() % q,
                O = N ? 0 : j.getSeconds() % z,
                U = X(u, C, r ? 11 : 23),
                V = X(q, x, 59),
                W = X(q, x, 59),
                s = {
                    y: j.getFullYear(),
                    m: 0,
                    d: 1,
                    h: C,
                    i: x,
                    s: O,
                    a: 0,
                    tt: 0
                },
                n = {
                    y: k.getFullYear(),
                    m: 11,
                    d: 31,
                    h: U,
                    i: V,
                    s: W,
                    a: 1,
                    tt: 86400
                },
                o = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: u,
                    i: q,
                    s: z,
                    a: 1,
                    tt: 1
                },
                a5 = {
                    'android-holo': 40,
                    bootstrap: 46,
                    ios: 50,
                    jqm: 46,
                    material: 46,
                    mobiscroll: 46,
                    wp: 50
                },
                l = {
                    y: ac,
                    m: aa,
                    d: a9,
                    h: a8,
                    i: a7,
                    s: al,
                    u: aj,
                    a: ah,
                    dd: M,
                    tt: ae
                };
            i.getDate = i.getVal = function(a) {
                return i._hasValue || a ? A(i.getArrayVal(a)) : null;
            };
            i.setDate = function(a, b, c, d, e) {
                i.setArrayVal(F(a), b, e, d, c);
            };
            Y = a6();
            i.format = K;
            i.order = h;
            i.handlers.now = function() {
                i.setDate(new Date(), i.live, 1000, true, true);
            };
            i.buttons.now = {
                text: f.nowText,
                handler: 'now'
            };
            return {
                minWidth: a2 && R ? a5[a1] : a,
                compClass: 'mbsc-dt',
                wheels: Y,
                headerText: f.headerText ? function() {
                    return c.formatDate(K, A(i.getArrayVal(true)), f);
                } : false,
                formatValue: function(a) {
                    return c.formatDate(T, A(a), f);
                },
                parseValue: function(a) {
                    if (!a) {
                        D = {};
                    }
                    return F(a ? c.parseDate(T, a, f) : f.defaultValue && f.defaultValue.getTime ? f.defaultValue : new Date(), !!a && !!a.getTime);
                },
                validate: function(C) {
                    var c, p, u, E, G = C.values,
                        x = C.index,
                        D = C.direction,
                        m = i.settings.wheels[0][h.d],
                        g = af(A(G), D),
                        z = F(g),
                        q = [],
                        B = {},
                        e = l.y(g),
                        d = l.m(g),
                        r = f.getMaxDayOfMonth(e, d),
                        v = true,
                        w = true;
                    b.each(['dd', 'y', 'm', 'd', 'tt', 'a', 'h', 'i', 's'], function(y, c) {
                        if (h[c] !== a) {
                            var m = s[c],
                                t = n[c],
                                i = l[c](g);
                            q[h[c]] = [];
                            if (v && j) {
                                m = l[c](j);
                            }
                            if (w && k) {
                                t = l[c](k);
                            }
                            if (c != 'y' && c != 'dd') {
                                for (p = s[c]; p <= n[c]; p += o[c]) {
                                    if (p < m || p > t) {
                                        q[h[c]].push(p);
                                    }
                                }
                            }
                            if (i < m) {
                                i = m;
                            }
                            if (i > t) {
                                i = t;
                            }
                            if (v) {
                                v = i == m;
                            }
                            if (w) {
                                w = i == t;
                            }
                            if (c == 'd') {
                                var x = f.getDate(e, d, 1).getDay(),
                                    u = {};
                                a0(I, e, d, x, r, u, 1);
                                a0(J, e, d, x, r, u, 0);
                                b.each(u, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                            }
                        }
                    });
                    if (R) {
                        b.each(['a', 'h', 'i', 's', 'tt'], function(j, c) {
                            var m = l[c](g),
                                k = l.d(g),
                                f = {};
                            if (h[c] !== a) {
                                _(I, j, c, e, d, k, f, 0);
                                _(J, j, c, e, d, k, f, 1);
                                b.each(f, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                                t[j] = i.getValidValue(h[c], m, D, f);
                            }
                        });
                    }
                    if (m && (m._length !== r || Z && (x === a || x === h.y || x === h.m))) {
                        B[h.d] = m;
                        m.data = [];
                        for (c = 1; c <= r; c++) {
                            E = f.getDate(e, d, c).getDay();
                            u = y.replace(/[my]/gi, '').replace(/dd/, (c < 10 ? '0' + c : c) + (f.daySuffix || '')).replace(/d/, c + (f.daySuffix || ''));
                            m.data.push({
                                value: c,
                                display: u.match(/DD/) ? u.replace(/DD/, '<span class="mbsc-dt-day">' + f.dayNames[E] + '</span>') : u.replace(/D/, '<span class="mbsc-dt-day">' + f.dayNamesShort[E] + '</span>')
                            });
                        }
                        i._tempWheelArray[h.d] = z[h.d];
                        i.changeWheel(B);
                    }
                    return {
                        disabled: q,
                        valid: z
                    };
                }
            };
        };
    b.each(['date', 'time', 'datetime'], function(b, a) {
        d.presets.scroller[a] = h;
    });
}());
	
	
	var _t = {
			controls: ["calendar"]
			, firstDay: 0
			, weekDays: "short"
			, maxMonthWidth: 170
			, months: 1
			, pageBuffer: 1
			, weeks: 6
			, highlight: !0
			, outerMonthChange: !0
			, quickNav: !0
			, yearChange: !0
			, tabs: "auto"
			, todayClass: "mbsc-cal-today"
			, btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6"
			, btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6"
			, dateText: "Date"
			, timeText: "Time"
			, calendarText: "Calendar"
			, todayText: "Today"
			, prevMonthText: "Previous Month"
			, nextMonthText: "Next Month"
			, prevYearText: "Previous Year"
			, nextYearText: "Next Year"
		}
		, wt = function (e) {
			function t(t) {
				t.hasClass("mbsc-cal-h") && (t.removeClass("mbsc-cal-h"), e._onSelectShow())
			}

			function a(e) {
				e.hasClass("mbsc-cal-h") || e.addClass("mbsc-cal-h")
			}

			function n(e) {
				e.hasClass("mbsc-cal-h") ? t(e) : a(e)
			}

			function s(e, t, a) {
				var n, s, r, i, o, l = {}
					, c = Oe + Fe;
				return e && Je.each(e, function (e, d) {
					if (n = d.d || d.start || d, r = n + "", d.start && d.end)
						for (i = new Date(d.start); i <= d.end;) o = w(i.getFullYear(), i.getMonth(), i.getDate()), l[o] = l[o] || [], l[o].push(d), i.setDate(i.getDate() + 1);
					else if (n.getTime) o = w(n.getFullYear(), n.getMonth(), n.getDate()), l[o] = l[o] || [], l[o].push(d);
					else if (r.match(/w/i)) {
						var m = +r.replace("w", "")
							, u = 0
							, h = $e.getDate(t, a - Oe - Le, 1)
							.getDay();
						for ($e.firstDay - h + 1 > 1 && (u = 7), s = 0; s < 5 * Pe; s++) o = $e.getDate(t, a - Oe - Le, 7 * s - u - h + 1 + m), l[o] = l[o] || [], l[o].push(d)
					} else if (r = r.split("/"), r[1]) a + c >= 11 && (o = $e.getDate(t + 1, r[0] - 1, r[1]), l[o] = l[o] || [], l[o].push(d)), a - c <= 1 && (o = $e.getDate(t - 1, r[0] - 1, r[1]), l[o] = l[o] || [], l[o].push(d)), o = $e.getDate(t, r[0] - 1, r[1]), l[o] = l[o] || [], l[o].push(d);
					else
						for (s = 0; s < Pe; s++) o = $e.getDate(t, a - Oe - Le + s, r[0]), $e.getDay(o) == r[0] && (l[o] = l[o] || [], l[o].push(d))
				}), l
			}

			function r(e) {
				return !(e < Se) && (!(e > ge) && (void 0 === me[e] || void 0 !== je[e]))
			}

			function i(t) {
				var a, n, s, r, i = !!be[t] && be[t]
					, o = "";
				if (i) {
					for (r = '<div class="mbsc-cal-marks">', a = 0; a < i.length; a++) r += '<div class="mbsc-cal-mark"' + (i[a].color ? ' style="background:' + i[a].color + ';"' : "") + "></div>", i[a].icon && (o += '<span class="mbsc-ic mbsc-ic-' + i[a].icon + '"' + (i[a].text ? "" : i[a].color ? ' style="color:' + i[a].color + ';"' : "") + "></span>\n");
					r += "</div>", ce && ($e.showEventCount ? n = be[t].length + " " + (be[t].length > 1 ? $e.eventsText : $e.eventText) : i[0] && (n = i[0].text, s = i[0].color), n ? r = '<div class="mbsc-cal-txt" title="' + Je("<div>" + n + "</div>")
						.text() + '"' + (s ? ' style="background:' + s + ";color:" + N(s) + ';"' : "") + ">" + o + n + "</div>" : o && (r = '<div class="mbsc-cal-txt mbsc-cal-icons">' + o + "</div>"))
				}
				return qe({
					marked: i
					, cssClass: i ? "mbsc-cal-day-marked" : ""
					, ariaLabel: ce ? n : ""
					, markup: r
				}, e._getDayProps(t))
			}

			function o(e) {
				return ' style="' + (pe ? "transform: translateY(" + 100 * e + "%)" : "left:" + 100 * e * Ee + "%") + '"'
			}

			function c() {
				He = "auto" == $e.months ? Math.max(1, Math.min(3, Math.floor((Z || V(Q)) / 280))) : $e.months, Pe = He + 2 * Oe, Fe = Math.floor(He / 2), Le = Math.round(He / 2) - 1, Ye = void 0 === $e.showOuterDays ? He < 2 : $e.showOuterDays, pe = pe && He < 2, X = Z || 280 * He
			}

			function d(t, a) {
				me = s($e.invalid, t, a), je = s($e.valid, t, a), be = s(e._events || $e.events || $e.marked, t, a)
			}

			function m(e) {
				var t = $e.getYear(e)
					, a = $e.getMonth(e);
				se = e, ze("onMonthChange", {
					year: t
					, month: a
				}), ze("onMonthLoading", {
					year: t
					, month: a
				}), d(t, a), S(e)
			}

			function u(e) {
				var t = $e.getYear(e)
					, a = $e.getMonth(e);
				void 0 !== Ie ? g(e, Ie, !0) : ze("onMonthLoaded", {
					year: t
					, month: a
				})
			}

			function h() {
				var e;
				return e = '<div class="mbsc-cal-tabs-c"><ul class="mbsc-cal-tabs" role="tablist">', $e.controls.forEach(function (t, a) {
					ee[t] && (e += '<li role="tab" aria-controls="' + Ze.id + "-mbsc-pnl-" + a + '" class="mbsc-cal-tab mbsc-fr-btn-e ' + (a ? "" : ne) + '" data-control="' + t + '">' + ($e.tabLink ? '<a href="#">' + $e[t + "Text"] + "</a>" : $e[t + "Text"]) + "</li>")
				}), e += "</ul></div>"
			}

			function f() {
				var e, t, a, n, s = ""
					, r = fe ? $e.btnCalNextClass : $e.btnCalPrevClass
					, i = fe ? $e.btnCalPrevClass : $e.btnCalNextClass;
				for (n = '<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="' + $e.prevMonthText + '" class="' + r + ' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>', t = 0; t < He; t++) n += '<div role="button" class="mbsc-cal-month"></div>';
				for (n += '<div data-step="1" role="button" tabindex="0" aria-label="' + $e.nextMonthText + '" class="' + i + ' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>', Ke && (s = '<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="' + $e.prevYearText + '" class="' + r + ' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="' + $e.nextYearText + '" class="' + i + ' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'), e = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal ' + (He > 1 ? " mbsc-cal-multi " : "") + (Re ? " mbsc-cal-weeks " : "") + (pe ? " mbsc-cal-vertical" : "") + (le ? " mbsc-cal-has-marks" : "") + (ce ? " mbsc-cal-has-txt" : "") + (Ye ? "" : " mbsc-cal-hide-diff ") + ($e.calendarClass || "") + '"' + (he ? "" : ' style="width:' + (Z || 280 * He) + 'px;"') + '><div class="mbsc-cal-hdr">' + (Ue < De || He > 1 ? s + n : n + s) + '</div><div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">', a = 0; a < He; a++) {
					for (e += '<div class="mbsc-cal-days">', t = 0; t < 7; t++) e += "<div>" + $e["dayNames" + Be][(t + $e.firstDay) % 7] + "</div>";
					e += "</div>"
				}
				if (e += '</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c ' + ($e.calendarClass || "") + '"><div class="mbsc-cal-scroll" style="width:' + 100 / He + '%">' + g(se) + "</div></div></div>", de) {
					for (e += '<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + ($e.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = 0; t < 3; t++) {
						for (e += '<div class="mbsc-cal-slide"' + o(t - 1) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">', a = 0; a < 12; a++) a && a % 3 == 0 && (e += '</div><div class="mbsc-cal-row">'), e += '<div role="gridcell"' + (1 == t ? ' tabindex="-1" aria-label="' + $e.monthNames[a] + '" data-val="' + a + '"' : "") + ' class="mbsc-cal-cell' + (1 == t ? " mbsc-btn-e" : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + (1 == t ? $e.monthNamesShort[a] : "&nbsp;") + "</div></div>";
						e += "</div></div></div>"
					}
					for (e += "</div></div></div>", e += '<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' + ($e.calendarClass || "") + '"><div class="mbsc-cal-scroll">', t = -1; t < 2; t++) e += p(O(se, t), t);
					e += "</div></div></div>"
				}
				return e += "</div></div></div>"
			}

			function p(e, t) {
				var a, n = $e.getYear(e)
					, s = '<div class="mbsc-cal-slide"' + o(t) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
				for (a = 0; a < 12; a++) a && a % 3 == 0 && (s += '</div><div class="mbsc-cal-row">'), s += '<div role="gridcell" tabindex="-1" aria-label="' + n + '" data-val="' + n + '" class="mbsc-cal-cell mbsc-btn-e ' + (n < ke || n > _e ? " mbsc-btn-d mbsc-fr-btn-d " : "") + (n == $e.getYear(se) ? ae : "") + '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' + n + Xe + "</div></div>", n++;
				return s += "</div></div></div>"
			}

			function v(t, a) {
				var n, s, l, c, d, m, u, h, f, p, b, v, g, x, T, y, _ = 1
					, w = 0
					, S = $e.getYear(t)
					, M = $e.getMonth(t)
					, C = $e.getDay(t)
					, k = null !== $e.defaultValue || e._hasValue ? e.getDate(!0) : null
					, D = $e.getDate(S, M, C)
					.getDay()
					, N = '<div class="mbsc-cal-slide"' + o(a) + '><div role="grid" class="mbsc-cal-table"><div class="mbsc-cal-row">';
				for ($e.firstDay - D > 0 && (w = 7), y = 0; y < 7 * G; y++) T = y + $e.firstDay - w, n = $e.getDate(S, M, T - D + C), l = n.getFullYear(), c = n.getMonth(), d = n.getDate(), m = $e.getMonth(n), u = $e.getDay(n), x = $e.getMaxDayOfMonth(l, c), h = l + "-" + (c + 1) + "-" + d, f = qe({
						valid: r(n)
						, selected: k && k.getFullYear() === l && k.getMonth() === c && k.getDate() === d
					}, i(n)), p = f.valid, b = f.selected, s = f.cssClass, v = new Date(n)
					.setHours(12, 0, 0, 0) === (new Date)
					.setHours(12, 0, 0, 0), g = m !== M, re[h] = f, y && y % 7 == 0 && (N += '</div><div class="mbsc-cal-row">'), Re && y % 7 == 0 && ("month" == Re && g && _ > 1 ? _ = 1 == d ? 1 : 2 : "year" == Re && (_ = $e.getWeekNumber($e.getDate(l, c, d + (7 - $e.firstDay + 1) % 7))), N += '<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">' + _ + "</div>", _++), N += '<div role="gridcell" tabindex="-1" aria-label="' + (v ? $e.todayText + ", " : "") + $e.dayNames[n.getDay()] + ", " + $e.monthNames[m] + " " + u + " " + (f.ariaLabel ? ", " + f.ariaLabel : "") + '"' + (g && !Ye ? ' aria-hidden="true"' : "") + (b ? ' aria-selected="true"' : "") + (p ? "" : ' aria-disabled="true"') + ' data-full="' + h + '"class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day' + T % 7 + " " + ($e.dayClass || "") + " " + (b ? ae : "") + (v ? " " + $e.todayClass : "") + (s ? " " + s : "") + (1 == u ? " mbsc-cal-day-first" : "") + (u == x ? " mbsc-cal-day-last" : "") + (g ? " mbsc-cal-day-diff" : "") + (p ? " mbsc-btn-e" : " mbsc-btn-d") + '"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt">' + u + "</div>"  + (f.markup || "") + "</div></div>";
				return N += "</div></div></div>"
			}

			function g(e, t, a) {
				var n, s = $e.getYear(e)
					, r = $e.getMonth(e)
					, i = ie ? ie.pos : 0
					, o = "";
				for (t || ze("onMonthLoading", {
						year: s
						, month: r
					}), d(s, r), n = 0; n < Pe; n++) o += v(I(e, n - Le - Oe), i + n - Oe);
				return Ie = void 0, a && ie && (ie.$scroller.html(o), ze("onMonthLoaded", {
					year: s
					, month: r
				})), o
			}

			function x(t) {
				var a = ie && ie.$scroller;
				$e.highlight && ie && (Je(".mbsc-selected", a)
					.removeClass(ae)
					.removeAttr("aria-selected"), (null !== $e.defaultValue || e._hasValue) && Je('.mbsc-cal-day[data-full="' + t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + '"]', a)
					.addClass(ae)
					.attr("aria-selected", "true"))
			}

			function T(e, t) {
				Je(".mbsc-selected", t)
					.removeClass(ae)
					.removeAttr("aria-selected"), Je('.mbsc-cal-cell[data-val="' + e + '"]', t)
					.addClass(ae)
					.attr("aria-selected", "true")
			}

			function y(e) {
				var t = e.getDay()
					, a = 0;
				return $e.firstDay - t > 0 && (a = 7), e = $e.getDate($e.getYear(e), $e.getMonth(e), $e.firstDay - a - t + $e.getDay(e)), $e.getWeekNumber(e)
			}

			function _(e, t, a) {
				var n, s, r;
				e < Se && (e = Se), e > ge && (e = ge), oe && ("calendar" === We || t) && (s = $e.getYear(e), r = $e.getMonth(e), Ve && (n = 6 == G ? r - $e.getMonth(se) + 12 * (s - $e.getYear(se)) : Math.floor((y(e) - y(se)) / G), se = 6 == G ? $e.getDate(s, r, 1) : e, F(ie, n, a)), t || x(e), Ve = !0)
			}

			function S(e) {
				var t, a, n, s = $e.getYear(e)
					, r = $e.getMonth(e)
					, i = s + Xe;
				if (de) {
					if (T(r, Ae.$scroller), T(s, Ge.$scroller), F(Ge, Math.floor(s / 12) - Math.floor($e.getYear(Ge.first) / 12)), Je(".mbsc-cal-cell", Ae.$scroller)
						.removeClass("mbsc-btn-d mbsc-fr-btn-d"), s === ke)
						for (t = 0; t < Ce; t++) Je('.mbsc-cal-cell[data-val="' + t + '"]', Ae.$scroller)
							.addClass("mbsc-btn-d mbsc-fr-btn-d");
					if (s === _e)
						for (t = ye + 1; t <= 12; t++) Je('.mbsc-cal-cell[data-val="' + t + '"]', Ae.$scroller)
							.addClass("mbsc-btn-d mbsc-fr-btn-d")
				}
				for (M(Je(".mbsc-cal-prev-m", j), $e.getDate(s, r - Le - 1, 1) < we), M(Je(".mbsc-cal-next-m", j), $e.getDate(s, r + He - Le, 1) > ve), M(Je(".mbsc-cal-prev-y", j), $e.getDate(s - 1, r, 1) < we), M(Je(".mbsc-cal-next-y", j), $e.getDate(s + 1, r, 1) > ve), K.attr("aria-label", s)
					.html(i), t = 0; t < He; t++) e = $e.getDate(s, r - Le + t, 1), a = $e.getYear(e), n = $e.getMonth(e), i = a + Xe, W.eq(t)
					.attr("aria-label", $e.monthNames[n] + (Ke ? "" : " " + s))
					.html((!Ke && Ue < De ? i + " " : "") + Ne[n] + (!Ke && Ue > De ? " " + i : ""))
			}

			function M(e, t) {
				t ? e.addClass(te)
					.attr("aria-disabled", "true") : e.removeClass(te)
					.removeAttr("aria-disabled")
			}

			function C(t) {
				var a = e.live
					, n = e.getDate(!0)
					, s = t.attr("data-full")
					, r = s.split("-")
					, i = w(r[0], r[1] - 1, r[2])
					, o = w(i.getFullYear(), i.getMonth(), i.getDate(), n.getHours(), n.getMinutes(), n.getSeconds())
					, l = t.hasClass("mbsc-selected");
				$e.readonly || !Ye && t.hasClass("mbsc-cal-day-diff") || !1 !== ze("onDayChange", qe(re[s], {
					date: o
					, target: t[0]
					, selected: l
				})) && (Ve = $e.outerMonthChange, ue = !0, e.setDate(o, a, 0, !a, !0), a && ze("onSet", {
					valueText: e._value
				}))
			}

			function k(e) {
				a(R), _($e.getDate($e.getYear(ie.first), e.attr("data-val"), 1), !0)
			}

			function D(e) {
				a(q), _($e.getDate(e.attr("data-val"), $e.getMonth(ie.first), 1), !0)
			}

			function I(e, t) {
				var a = $e.getYear(e)
					, n = $e.getMonth(e)
					, s = $e.getDay(e);
				return 6 == G ? $e.getDate(a, n + t, 1) : $e.getDate(a, n, s + t * G * 7)
			}

			function O(e, t) {
				var a = 12 * Math.floor($e.getYear(e) / 12);
				return $e.getDate(a + 12 * t, 0, 1)
			}

			function F(t, a, n) {
				a && e._isVisible && (t.queue.push(arguments), 1 == t.queue.length && H(t, a, n))
			}

			function H(e, t, a) {
				var n, s, r = ""
					, i = e.$scroller
					, o = e.buffer
					, l = e.offset
					, c = e.pages
					, d = e.total
					, m = e.first
					, u = e.genPage
					, h = e.getFirst
					, f = t > 0 ? Math.min(t, o) : Math.max(t, -o)
					, p = e.pos * Ee + f - t + l
					, b = Math.abs(t) > o;
				if (e.first = h(m, t), e.pos += f * Ee, e.changing = !0, e.onBeforeChange(e.first), b) {
					for (n = 0; n < c; n++) s = t + n - l, r += u(h(m, s), p + s);
					t > 0 ? (Je(".mbsc-cal-slide", i)
						.slice(-c)
						.remove(), i.append(r)) : t < 0 && (Je(".mbsc-cal-slide", i)
						.slice(0, c)
						.remove(), i.prepend(r))
				}
				e.scroller.scroll(-e.pos * e.size, 200, !1, function () {
					var r = Math.abs(f)
						, c = "";
					for (n = 0; n < r; n++) s = t + n - l - o + (t > 0 ? d - r : 0), c += u(h(m, s), p + s);
					if (t > 0 ? (i.append(c), Je(".mbsc-cal-slide", i)
							.slice(0, f)
							.remove()) : t < 0 && (i.prepend(c), Je(".mbsc-cal-slide", i)
							.slice(f)
							.remove()), b) {
						for (c = "", n = 0; n < r; n++) s = t + n - l - o + (t > 0 ? 0 : d - r), c += u(h(m, s), p + s);
						t > 0 ? (Je(".mbsc-cal-slide", i)
							.slice(0, f)
							.remove(), i.prepend(c)) : t < 0 && (Je(".mbsc-cal-slide", i)
							.slice(f)
							.remove(), i.append(c))
					}
					P(e), a && a(), e.queue.shift(), e.queue.length ? H.apply(this, e.queue[0]) : (e.changing = !1, e.onAfterChange(e.first))
				})
			}

			function L(e, t, a, n, s, r, i, o, l, c, d, m, u) {
				var h = pe ? "Y" : "X"
					, f = {
						$scroller: Je(".mbsc-cal-scroll", e)
						, queue: []
						, buffer: n
						, offset: s
						, pages: r
						, first: o
						, total: i
						, pos: 0
						, min: t
						, max: a
						, genPage: m
						, getFirst: u
						, onBeforeChange: c
						, onAfterChange: d
					};
				return f.scroller = new pt(e, {
					axis: h
					, easing: ""
					, contSize: 0
					, maxSnapScroll: n
					, mousewheel: $e.mousewheel
					, time: 200
					, lock: !0
					, rtl: fe
					, stopProp: !1
					, minScroll: 0
					, maxScroll: 0
					, onBtnTap: function (e) {
						"touchend" == e.domEvent.type && b(), l(Je(e.target))
					}
					, onAnimationEnd: function (e) {
						m && F(f, Math.round((-f.pos * f.size - e["pos" + h]) / f.size) * Ee)
					}
				}), f
			}

			function P(e) {
				var t = 0
					, a = 0
					, n = e.first;
				if (e.getFirst) {
					for (t = e.buffer, a = e.buffer; a && e.getFirst(n, a + e.pages - e.offset - 1) > e.max;) a--;
					for (; t && e.getFirst(n, -t - e.offset) < e.min;) t--
				}
				e.size = Math.round(X / e.pages), qe(e.scroller.settings, {
					snap: e.size
					, minScroll: (-e.pos * Ee - a) * e.size
					, maxScroll: (-e.pos * Ee + t) * e.size
				}), e.scroller.refresh()
			}

			function E(t) {
				e._isVisible && oe && (ie && ie.changing ? Ie = t : g(se, t, !0))
			}

			function $() {
				if (oe) {
					var t = Je(".mbsc-cal-scroll-c", j);
					ie = L(t[0], we, ve, Oe, Le, He, Pe, se, C, m, u, v, I), de && (Ae = L(t[1], null, null, 1, 0, 1, 3, se, k), Ge = L(t[2], Me, xe, 1, 0, 1, 3, se, D, l, l, p, O), e.tap(W, function () {
						n(R), a(q)
					}), e.tap(K, function () {
						n(q), a(R)
					})), A(Je(".mbsc-cal-btn", j), function (e, t) {
						var a = 6 == G ? $e.getDate($e.getYear(se), $e.getMonth(se) + e, 1) : $e.getDate($e.getYear(se), $e.getMonth(se), $e.getDay(se) + e * G * 7);
						a < we || a > ve || _(a, !0, t)
					}), u(se)
				}
				e.tap(Je(".mbsc-cal-tab", j), function () {
					e.changeTab(Je(this)
						.attr("data-control"))
				})
			}
			var Y, z, j, W, R, J, B, K, q, U, G, X, Z, Q, ee, te, ae, ne, se, re, ie, oe, le, ce, de, me, ue, he, fe, pe, be, ve, ge, xe, ye, _e, we, Se, Me, Ce, ke, De, Ne, Ae, Ve, Ie, Oe, Fe, He, Le, Pe, Ee, $e, Ye, ze, je, We, Re, Be, Ke, Ue, Ge, Xe, Ze = this;
			return function () {
					var t, a, n;
					ee = {}, ze = e.trigger, Y = Je(Ze), n = qe({}, e.settings), $e = qe(e.settings, _t, n), t = $e.controls.join(","), fe = $e.rtl, Oe = $e.pageBuffer, Re = $e.weekCounter, G = $e.weeks, pe = "vertical" == $e.calendarScroll, Q = "inline" == $e.display ? Y.is("div") ? Y : Y.parent() : e._$window, Be = "full" == $e.weekDays ? "" : "min" == $e.weekDays ? "Min" : "Short", a = $e.layout || (/top|bottom|inline/.test($e.display) ? "liquid" : ""), he = "liquid" == a, Z = he ? null : $e.calendarWidth, Ee = fe && !pe ? -1 : 1, te = "mbsc-fr-btn-d " + ($e.disabledClass || ""), ne = "mbsc-selected " + ($e.selectedTabClass || ""), ae = "mbsc-selected " + ($e.selectedClass || ""), le = !!(e._events || $e.events || $e.marked), ce = $e.showEventCount || !!$e.events, t.match(/date/) && (ee.date = 1), t.match(/time/) && (ee.time = 1), t.match(/calendar/) && (ee.calendar = 1, oe = !0), de = $e.quickNav && oe && 6 == G, Ke = $e.yearChange && 6 == G, he && oe && "center" == $e.display && (e._isFullScreen = !0), $e.layout = a, $e.preset = (ee.date || oe ? "date" : "") + (ee.time ? "time" : "")
				}(), U = ca.datetime.call(this, e)
				, function () {
					Ne = Ke ? $e.monthNamesShort : $e.monthNames, Xe = $e.yearSuffix || "", De = ($e.dateWheels || $e.dateFormat)
						.search(/m/i), Ue = ($e.dateWheels || $e.dateFormat)
						.search(/y/i), $e.min && (we = w($e.min.getFullYear(), $e.min.getMonth(), 1), Se = w($e.min.getFullYear(), $e.min.getMonth(), $e.min.getDate()), ke = $e.getYear(we), Ce = $e.getMonth(we), Me = $e.getDate(12 * Math.floor(ke / 12), 0, 1)), $e.max && (ve = w($e.max.getFullYear(), $e.max.getMonth(), 1), ge = w($e.max.getFullYear(), $e.max.getMonth(), $e.max.getDate()), _e = $e.getYear(ve), ye = $e.getMonth(ve), xe = $e.getDate(12 * Math.floor(_e / 12), 0, 1))
				}(), e.refresh = function () {
					E(!1)
				}, e.redraw = function () {
					E(!0)
				}, e.navigate = function (e) {
					_(e, !0)
				}, e.changeTab = function (t) {
					e._isVisible && ee[t] && We != t && (We = t, Je(".mbsc-cal-tab", j)
						.removeClass(ne)
						.removeAttr("aria-selected"), Je('.mbsc-cal-tab[data-control="' + t + '"]', j)
						.addClass(ne)
						.attr("aria-selected", "true"), B.addClass("mbsc-cal-h"), ee[We].removeClass("mbsc-cal-h"), "calendar" == We && _(e.getDate(!0)), e._showDayPicker(), e.trigger("onTabChange", {
							tab: We
						}))
				}, e._onSelectShow = l, e._getDayProps = l, e._prepareObj = s, e._showDayPicker = function () {
					de && (a(q, !0), a(R, !0))
				}, qe(U, {
					compClass: "mbsc-calendar mbsc-dt"
					, onMarkupReady: function (t) {
						var a, n, s, r = 0;
						j = Je(t.target), J = Je(".mbsc-fr-c", j), re = {}, s = e.getDate(!0), a = $e.getYear(s), n = $e.getMonth(s), se = 6 == G ? $e.getDate(a, n, 1) : s, oe && (Ve = !0, We = "calendar", c(), J.append(f()), W = Je(".mbsc-cal-month", j), K = Je(".mbsc-cal-year", j), z = Je(".mbsc-cal-day-scroll-c", j)), de && (q = Je(".mbsc-cal-year-picker", j), R = Je(".mbsc-cal-month-picker", j)), B = Je(".mbsc-w-p", j), $e.controls.length > 1 && J.before(h()), ["date", "time", "calendar"].forEach(function (e) {
							ee[e] ? ee[e] = B.eq(r)
								.addClass("mbsc-cal-h") : "date" == e && !ee.date && oe && B.eq(r)
								.remove(), r++
						}), $e.controls.forEach(function (e) {
							J.append(ee[e])
						}), oe && ee.date && ($e.tabs = !0), !oe && ee.date && ee.date.css("position", "relative"), $()
					}
					, onShow: function () {
						oe && S(se)
					}
					, onHide: function () {
						oe && (ie.scroller.destroy(), de && (Ae.scroller.destroy(), Ge.scroller.destroy()), ie = null
							, Ae = null, Ge = null, We = null)
					}
					, onValidated: function (t) {
						var a, n, s = e.order;
						n = e.getDate(!0), ue ? a = "calendar" : void 0 !== t && (a = s.dd == t || s.d == t || s.m == t || s.y == t ? "date" : "time"), ze("onSetDate", {
							date: n
							, control: a
						}), _(n), ue = !1
					}
					, onPosition: function (t) {
						var a, n = t.windowHeight
							, s = (t.hasTabs || !0 === $e.tabs || !1 !== $e.tabs && he) && $e.controls.length > 1;
						s ? (j.addClass("mbsc-cal-tabbed"), We = Je(".mbsc-cal-tab.mbsc-selected", j)
							.attr("data-control"), B.addClass("mbsc-cal-h"), ee[We].removeClass("mbsc-cal-h")) : (We = "calendar", j.removeClass("mbsc-cal-tabbed"), B.removeClass("mbsc-cal-h")), e._isFullScreen && (z.height(""), a = t.popup.offsetHeight, n >= a && z.height(n - a + z[0].offsetHeight)), oe && ((he || pe || s) && (X = z[0][pe ? "offsetHeight" : "offsetWidth"]), P(ie)), de && (P(Ae), P(Ge))
					}
				})
		}
		, St = {};
	Te.presetShort("calendar"), Te.presets.scroller.calendar = function (e) {
			function t(e) {
				return w(e.getFullYear(), e.getMonth(), e.getDate())
			}

			function a(e) {
				if (b = {}, e && e.length)
					for (o = 0; o < e.length; o++) b[t(e[o])] = e[o]
			}

			function n() {
				e.redraw()
			}
			var s, r, i, o, l, d = qe({}, e.settings)
				, u = qe(e.settings, St, d)
				, h = u.defaultValue
				, f = "multiple" == u.select || u.select > 1 || "week" == u.selectType
				, p = m(u.select) ? u.select : 1 / 0
				, b = {};
			if (s = wt.call(this, e), i = void 0 === u.firstSelectDay ? u.firstDay : u.firstSelectDay, f && h && h.length)
				for (o = 0; o < h.length; o++) b[t(h[o])] = h[o];
			return e._getDayProps = function (e) {
				return {
					selected: f ? void 0 !== b[e] : void 0
				}
			}, e.setVal = function (t, s, r, i, o) {
				f && (a(t), t = t ? t[0] : null), e._setVal(t, s, r, i, o), n()
			}, e.getVal = function (t) {
				return f ? c(b) : e.getDate(t)
			}, qe({}, s, {
				highlight: !f
				, outerMonthChange: !f
				, parseValue: function (a) {
					var n, r;
					if (f && a && "string" == typeof a) {
						for (b = {}, a = a.split(","), n = 0; n < a.length; n++) r = M(e._format, a[n].replace(/^\s+|\s+$/g, ""), u), b[t(r)] = r;
						a = a[0]
					}
					return f && h && h.length && (u.defaultValue = h[0]), s.parseValue.call(this, a)
				}
				, formatValue: function (t) {
					var a, n = [];
					if (f) {
						for (a in b) n.push(S(e._format, b[a], u));
						return n.join(", ")
					}
					return s.formatValue.call(this, t)
				}
				, onClear: function () {
					f && (b = {}, n())
				}
				, onBeforeShow: function () {
					void 0 !== u.setOnDayTap || u.buttons && u.buttons.length || (u.setOnDayTap = !0), u.setOnDayTap && "inline" != u.display && (u.outerMonthChange = !1), u.counter && f && (u.headerText = function () {
						var e = 0
							, t = "week" == u.selectType ? 7 : 1;
						return Je.each(b, function () {
								e++
							}), e = Math.round(e / t), (e > 1 ? u.selectedPluralText || u.selectedText : u.selectedText)
							.replace(/{count}/, e)
					})
				}
				, onMarkupReady: function (e) {
					s.onMarkupReady.call(this, e), r = Je(e.target), f && (Je(".mbsc-fr-hdr", r)
						.attr("aria-live", "off"), l = qe({}, b))
				}
				, onDayChange: function (a) {
					var s = a.date
						, o = t(s)
						, l = Je(a.target)
						, d = a.selected;
					if (f)
						if ("week" == u.selectType) {
							var m, h, v = o.getDay() - i;
							for (v = v < 0 ? 7 + v : v, "multiple" != u.select && (b = {}), m = 0; m < 7; m++) h = w(o.getFullYear(), o.getMonth(), o.getDate() - v + m), d ? delete b[h] : c(b)
								.length / 7 < p && (b[h] = h);
							n()
						} else {
							var g = Je('.mbsc-cal-day[data-full="' + l.attr("data-full") + '"]', r);
							d ? (g.removeClass("mbsc-selected")
									.removeAttr("aria-selected"), delete b[o]) : c(b)
								.length < p && (g.addClass("mbsc-selected")
									.attr("aria-selected", "true"), b[o] = o)
						}
					if (u.setOnDayTap && "multiple" != u.select && "inline" != u.display) return e.setDate(s), e.select(), !1
				}
				, onCancel: function () {
					!e.live && f && (b = qe({}, l))
				}
			})
		}, e.module("mobiscroll-calendar", [])
		.directive("mobiscrollCalendar", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollCalendar", {
				preset: "calendar"
			})
		}]);
	var Mt = function (e, t, a) {
			var n, s, r, i, o = this;
			Ue.call(this, e, t, !0), o.__init = l, o.__destroy = l, o._init = function (t) {
				var a;
				i = o.settings, n = Je(e), a = !!s, s = n.parent(), s = s.hasClass("mbsc-input-wrap") ? s.parent() : s, o._$parent = s, r && s.removeClass(r), r = o._css + " mbsc-progress-w mbsc-control-w mbsc-" + i.theme + (i.baseTheme ? " mbsc-" + i.baseTheme : "") + (i.rtl ? " mbsc-rtl" : " mbsc-ltr"), s.addClass(r), n.addClass("mbsc-control"), o.__init(t), a || o._attachChange(), o.refresh()
			}, o._destroy = function () {
				o.__destroy(), s.removeClass(r), n.removeClass("mbsc-control")
			}, a || o.init(t)
		}
		, Ct = "mbsc-input-wrap"
		, kt = function (e, t, a) {
			function n() {
				var e = s("value", u);
				e !== b && r(e)
			}

			function s(e, t) {
				var a = o.attr(e);
				return void 0 === a || "" === a ? t : +a
			}

			function r(e, t, a, n) {
				e = Math.min(h, Math.max(e, u)), c.css("width", 100 * (e - u) / (h - u) + "%"), void 0 === a && (a = !0), void 0 === n && (n = a), (e !== b || t) && g._display(e), e !== b && (b = e, a && o.attr("value", b), n && o.trigger("change"))
			}
			var i, o, l, c, d, m, u, h, f, p, b, v, g = this;
			Mt.call(this, e, t, !0), g._display = function (e) {
				v = p && f.returnAffix ? p.replace(/\{value\}/, e)
					.replace(/\{max\}/, h) : e, d && d.html(v), i && i.html(v)
			}, g._attachChange = function () {
				o.on("change", n)
			}, g.__init = function (t) {
				var a, n, r, v;
				if (f = g.settings, o = Je(e), v = !!l, l = g._$parent, u = g._min = void 0 === t.min ? s("min", f.min) : t.min, h = g._max = void 0 === t.max ? s("max", f.max) : t.max, b = s("value", u), a = o.attr("data-val") || f.val, r = o.attr("data-step-labels"), r = r ? JSON.parse(r) : f.stepLabels, p = o.attr("data-template") || (100 != h || f.template ? f.template : "{value}%"), v ? (a && (i.remove(), l.removeClass("mbsc-progress-value-" + ("right" == a ? "right" : "left"))), r && Je(".mbsc-progress-step-label", m)
						.remove()) : (F(l), I(o), l.find(".mbsc-input-wrap")
						.append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'), c = g._$progress = l.find(".mbsc-progress-bar"), m = g._$track = l.find(".mbsc-progress-track")), o.attr("min", u)
					.attr("max", h), a && (i = Je('<span class="mbsc-progress-value"></span>'), l.addClass("mbsc-progress-value-" + ("right" == a ? "right" : "left"))
						.find(".mbsc-input-wrap")
						.append(i)), r)
					for (n = 0; n < r.length; ++n) m.append('<span class="mbsc-progress-step-label" style="' + (f.rtl ? "right" : "left") + ": " + 100 * (r[n] - u) / (h - u) + '%" >' + r[n] + "</span>");
				d = Je(o.attr("data-target") || f.target)
			}, g.__destroy = function () {
				l.removeClass("mbsc-ic-left mbsc-ic-right")
					.find(".mbsc-progress-cont")
					.remove(), l.find(".mbsc-input-ic")
					.remove(), o.off("change", n)
			}, g.refresh = function () {
				r(s("value", u), !0, !1)
			}, g.getVal = function () {
				return b
			}, g.setVal = function (e, t, a) {
				r(e, !0, t, a)
			}, a || g.init(t)
		};
	kt.prototype = {
		_class: "progress"
		, _css: "mbsc-progress"
		, _hasTheme: !0
		, _hasLang: !0
		, _hasDef: !0
		, _defaults: {
			min: 0
			, max: 100
			, returnAffix: !0
		}
	}, Te.classes.Progress = kt, Te.presetShort("progress", "Progress");
	var Dt = function (e, t, a) {
			function n(t) {
				!k(t, this) || C || e.disabled || (W.stopProp && t.stopPropagation(), C = !0, $ = !1, D = !1, J = g(t, "X"), B = g(t, "Y"), I = J, M.removeClass("mbsc-progress-anim"), T = Y ? Je(".mbsc-slider-handle", this) : _, y && y.removeClass("mbsc-handle-curr"), y = T.parent()
					.addClass("mbsc-active mbsc-handle-curr"), F = +T.attr("data-index"), U = M[0].offsetWidth, V = M[0].getBoundingClientRect()
					.left, "mousedown" === t.type && (t.preventDefault(), Je(document)
						.on("mousemove", s)
						.on("mouseup", r)))
			}

			function s(e) {
				C && (I = g(e, "X"), O = g(e, "Y"), N = I - J, A = O - B, (Math.abs(N) > 5 || $) && ($ = !0, Math.abs(Z - new Date) > 50 && (Z = new Date, f(I, W.round, L))), $ ? e.preventDefault() : Math.abs(A) > 7 && h())
			}

			function r(e) {
				C && (e.preventDefault(), Y || M.addClass("mbsc-progress-anim"), f(I, !0, !0), $ || D || ("touchend" == e.type && b(), X._onTap(G[F])), h())
			}

			function i() {
				C && h()
			}

			function o() {
				var e = X._readValue(Je(this))
					, t = +Je(this)
					.attr("data-index");
				e !== G[t] && (G[t] = e, z[t] = e, v(e, t))
			}

			function c(e) {
				e.stopPropagation()
			}

			function d(e) {
				e.preventDefault()
			}

			function m(t) {
				var a;
				if (!e.disabled) {
					switch (t.keyCode) {
					case 38:
					case 39:
						a = 1;
						break;
					case 40:
					case 37:
						a = -1
					}
					a && (t.preventDefault(), q || (F = +Je(this)
						.attr("data-index"), v(G[F] + j * a, F, !0), q = setInterval(function () {
							v(G[F] + j * a, F, !0)
						}, 200)))
				}
			}

			function u(e) {
				e.preventDefault(), clearInterval(q), q = null
			}

			function h() {
				C = !1, y.removeClass("mbsc-active"), Je(document)
					.off("mousemove", s)
					.off("mouseup", r)
			}

			function f(e, t, a) {
				var n = t ? Math.min(Math.round(Math.max(100 * (e - V) / U, 0) / R / j) * j * 100 / (P - E), 100) : Math.max(0, Math.min(100 * (e - V) / U, 100));
				H && (n = 100 - n), v(Math.round((E + n / R) * K) / K, F, a, n)
			}

			function p(e) {
				return 100 * (e - E) / (P - E)
			}

			function v(e, t, a, n, s, r) {
				var i = _.eq(t)
					, o = i.parent();
				e = Math.min(P, Math.max(e, E)), void 0 === r && (r = a), X._update ? e = X._update(e, G, t, n, Y, s, o) : o.css({
					left: H ? "auto" : (n || p(e)) + "%"
					, right: H ? (n || p(e)) + "%" : "auto"
				}), e > E ? o.removeClass("mbsc-slider-start") : (G[t] > E || s) && o.addClass("mbsc-slider-start"), a && z[t] != e && (D = !0, z[t] = e, G[t] = e, X._fillValue(e, t, r)), i.attr("aria-valuenow", e)
			}
			var x, T, y, _, w, S, M, C, D, N, A, V, I, O, F, H, L, P, E, $, Y, z, j, W, R, J, B, K, q, U, G, X = this
				, Z = new Date;
			Mt.call(this, e, t, !0), X._onTap = l, X.___init = l, X.___destroy = l, X._attachChange = function () {
				x.on(W.changeEvent, o)
			}, X.__init = function (e) {
				var t;
				_ && (t = !0, _.parent()
						.remove()), X.___init(e), S = X._$parent, M = X._$track, x = S.find("input"), W = X.settings, E = X._min, P = X._max, j = X._step, L = X._live, K = j % 1 != 0 ? 100 / (100 * +(j % 1)
						.toFixed(2)) : 1, R = 100 / (P - E) || 100, Y = x.length > 1, H = W.rtl, G = [], z = [], x.each(function (e) {
						G[e] = X._readValue(Je(this)), Je(this)
							.attr("data-index", e)
					}), _ = S.find(".mbsc-slider-handle"), w = S.find(Y ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"), _.on("keydown", m)
					.on("keyup", u)
					.on("blur", u), w.on("touchstart mousedown", n)
					.on("touchmove", s)
					.on("touchend touchcancel", r)
					.on("pointercancel", i), t || (x.on("click", c), S.on("click", d))
			}, X.__destroy = function () {
				S.off("click", d), x.off(W.changeEvent, o)
					.off("click", c), _.off("keydown", m)
					.off("keyup", u)
					.off("blur", u), w.off("touchstart mousedown", n)
					.off("touchmove", s)
					.off("touchend touchcancel", r)
					.off("pointercancel", i), X.___destroy()
			}, X.refresh = function () {
				x.each(function (e) {
					v(X._readValue(Je(this)), e, !0, !1, !0, !1)
				})
			}, X.getVal = function () {
				return Y ? G.slice(0) : G[0]
			}, X.setVal = X._setVal = function (e, t, a) {
				Je.isArray(e) || (e = [e]), Je.each(e, function (e, t) {
					G[e] = t
				}), Je.each(e, function (e, t) {
					v(t, e, !0, !1, !0, a)
				})
			}, a || X.init(t)
		}
		, Nt = function (e, t, a) {
			function n(e) {
				return 100 * (e - p) / (f - p)
			}

			function s(e, t) {
				var a = r.attr(e);
				return void 0 === a || "" === a ? t : "true" === a
			}
			var r, i, o, l, c, d, m, u, h, f, p, b, v, g = this;
			kt.call(this, e, t, !0);
			var x = g.__init
				, T = g.__destroy;
			Dt.call(this, e, t, !0);
			var y = g.__init
				, _ = g.__destroy;
			g.__init = function (e) {
				x(e), y(e)
			}, g.__destroy = function () {
				T(), _()
			}, g._update = function (e, t, a, s, r, i, c) {
				return u ? 0 === a ? (e = Math.min(e, t[1]), o.css({
						width: n(t[1]) - n(e) + "%"
						, left: h ? "auto" : n(e) + "%"
						, right: h ? n(e) + "%" : "auto"
					})) : (e = Math.max(e, t[0]), o.css({
						width: n(e) - n(t[0]) + "%"
					})) : r || !d ? c.css({
						left: h ? "auto" : (s || n(e)) + "%"
						, right: h ? (s || n(e)) + "%" : "auto"
					}) : o.css("width", (s || n(e)) + "%"), m && l.eq(a)
					.html(e), r || t[a] == e && !i || g._display(e), e
			}, g._readValue = function (e) {
				return +e.val()
			}, g._fillValue = function (e, t, a) {
				r.eq(t)
					.val(e), a && r.eq(t)
					.trigger("change")
			}, g.___init = function (e) {
				var t, a;
				if (i && (i.removeClass("mbsc-slider-has-tooltip"), 1 != b && Je(".mbsc-slider-step", c)
						.remove()), i = g._$parent, c = g._$track, o = g._$progress, r = i.find("input"), v = g.settings, p = g._min, f = g._max, g._step = b = void 0 === e.step ? +r.attr("step") || v.step : e.step, g._live = s("data-live", v.live), m = s("data-tooltip", v.tooltip), d = s("data-highlight", v.highlight) && r.length < 3, u = d && 2 == r.length, h = v.rtl, m && i.addClass("mbsc-slider-has-tooltip"), 1 != b)
					for (a = (f - p) / b, t = 0; t <= a; ++t) c.append('<span class="mbsc-slider-step" style="' + (h ? "right" : "left") + ":" + 100 / a * t + '%"></span>');
				r.each(function (e) {
					"range" == this.type && Je(this)
						.attr("min", p)
						.attr("max", f)
						.attr("step", b), (d ? o : c)
						.append('<span class="mbsc-slider-handle-cont' + (u && !e ? " mbsc-slider-handle-left" : "") + '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + p + '" aria-valuemax="' + f + '" data-index="' + e + '"></span>' + (m ? '<span class="mbsc-slider-tooltip"></span>' : "") + "</span>")
				}), l = i.find(".mbsc-slider-tooltip")
			}, a || g.init(t)
		};
	Nt.prototype = {
		_class: "progress"
		, _css: "mbsc-progress mbsc-slider"
		, _hasTheme: !0
		, _hasLang: !0
		, _hasDef: !0
		, _defaults: {
			changeEvent: "change"
			, stopProp: !0
			, min: 0
			, max: 100
			, step: 1
			, live: !0
			, highlight: !0
			, round: !0
			, returnAffix: !0
		}
	}, Te.classes.Slider = Nt, Te.presetShort("slider", "Slider");
	var At = Te.util
		, Vt = Te.classes
		, It = function (e, t, a) {
			function n(e, t, a) {
				if (!a) {
					G._value = G._hasValue ? G._tempValue.slice(0) : null;
					for (var n = 0; n < y.length; ++n) y[n].tempChangedColor && G._value && -1 != G._value.indexOf(y[n].tempChangedColor) && (y[n].changedColor = y[n].tempChangedColor), delete y[n].tempChangedColor
				}
				e && (G._isInput && X.val(G._hasValue ? G._tempValue : ""), _("onFill", {
					valueText: G._hasValue ? G._tempValue : ""
					, change: t
				}), t && (Q = qe(!0, {}, ee), G._preventChange = !0, X.trigger("change")), u(G._value, !0))
			}

			function s(e, t) {
				return t = void 0 !== t ? t : i(e), '<div class="mbsc-color-input-item" data-color="' + (void 0 !== t ? t : e) + '" style="background: ' + e + ';">' + (E ? "" : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + "</div>"
			}

			function r(e) {
				A[0].style.background = e ? et + "linear-gradient(left, " + (x.rtl ? "#000000" : "#FFFFFF") + " 0%, " + e + " 50%, " + (x.rtl ? "#FFFFFF" : "#000000") + " 100%)" : ""
			}

			function i(e) {
				if (Object.keys(ee)
					.length && !isNaN(e)) return e;
				for (var t in y)
					if (e == y[t].color || e == y[t].changedColor) return t
			}

			function o() {
				if (P) {
					var e, t = "";
					if (J.empty(), G._value) {
						if (E) t += s(G._value, F);
						else
							for (e = 0; e < G._value.length; ++e) t += s(G._value[e], Object.keys(ee)
								.length && ee[e].colorIndex ? ee[e].colorIndex : i(G._value[e]));
						J.append(t), G.tap(Je(".mbsc-color-input-item", J), function (e) {
							if (Je(e.target)
								.hasClass("mbsc-color-input-item-close")) {
								var t = Je(this)
									.index();
								e.stopPropagation(), e.preventDefault(), void 0 === F && (F = Je(e.target)
									.parent()
									.attr("data-color")), N && (Z = y[F].previewInd, K.eq(Z)
									.parent()
									.removeClass("mbsc-color-active"), Q[t] = {}, ee[t] = {}), G._value.splice(t, 1), G.setVal(G._value, !0, !0)
							} else V && "inline" !== x.display && (F = Je(e.target)
								.attr("data-color"), isNaN(F) && (F = i(F)), F && (y[F].selected = !0, Z = y[F].previewInd, setTimeout(function () {
									w.scroll(B.eq(F), 400), N && S.scroll(K.eq(Z), 400)
								}, 200)))
						})
					}
				}
			}

			function l(e, t) {
				var a, n = e.match(/\d+/gim);
				switch (!0) {
				case e.indexOf("rgb") > -1:
					a = H({
						r: n[0]
						, g: n[1]
						, b: n[2]
					});
					break;
				case e.indexOf("hsl") > -1:
					a = j({
						h: n[0]
						, s: n[1]
						, l: n[2]
					});
					break;
				case e.indexOf("hsv") > -1:
					a = W({
						h: n[0]
						, s: n[1]
						, v: n[2]
					});
					break;
				case e.indexOf("#") > -1:
					a = e
				}
				return c(a, t || x.format)
			}

			function c(e, t) {
				switch (t) {
				case "rgb":
					return L(e);
				case "hsl":
					return z(e);
				case "hsv":
					return R(e);
				default:
					return e
				}
			}

			function d() {
				var e;
				for (e = 0; e < x.select; ++e)
					if (void 0 === ee[e].colorIndex) return e
			}

			function m(e, t) {
				Je(".mbsc-color-active", t)
					.removeClass("mbsc-color-active"), V && (e.parent()
						.addClass("mbsc-color-active"), N && e && void 0 !== Z && K.eq(Z)
						.parent()
						.addClass("mbsc-color-active"))
			}

			function u(e, t) {
				var a, n, s = []
					, r = 0
					, i = Je.map(y, function (e) {
						return e.changedColor || e.color
					});
				if (E) {
					if (e = Je.isArray(e) ? e[0] : e, n = i.indexOf(e), n > -1 && s.push(n), e && !s.length) {
						var l = +Je(".mbsc-color-input-item", J)
							.attr("data-color");
						isNaN(l) || s.push(l), F = l
					}
				} else if (e)
					if (N && V)
						for (var c in Q) void 0 !== Q[c].colorIndex && s.push(+Q[c].colorIndex);
					else
						for (a = 0; a < e.length; ++a)(n = i.indexOf(e[a])) > -1 && (s.push(n), i[n] = "temp" + a);
				for (a = 0; a < s.length; ++a) h(!0, s[a], r++, y[s[a]].changedColor || y[s[a]].color, !0);
				for (a = 0; a < y.length; ++a) - 1 == s.indexOf(a) && h(!1, a, void 0, y[a].changedColor || y[a].color, !1);
				if (N)
					for (a = r; a < x.select; ++a) ee[a] = {}, K && K.eq(a)
						.addClass("mbsc-color-preview-item-empty")
						.css({
							background: "transparent"
						});
				Q = qe(!0, {}, ee), !1 !== t && o()
			}

			function h(e, t, a, n, s, r) {
				if (N && s && (ee[a].colorIndex = e ? t : void 0, ee[a].color = e ? n : void 0, K)) {
					var i = K.eq(a);
					i.removeClass("mbsc-color-preview-item-empty")
						.css({
							background: e ? n : "transparent"
						}), e || i.addClass("mbsc-color-preview-item-empty")
						.parent()
						.removeClass("mbsc-color-active")
				}
				r && (e ? G._tempValue.splice(a, 0, n) : G._tempValue.splice(G._tempValue.indexOf(n), 1)), B && (e ? B.eq(t)
					.addClass("mbsc-color-selected") : B.eq(t)
					.removeClass("mbsc-color-selected")
					.parent()
					.removeClass("mbsc-color-active")), y[t].previewInd = e ? a : void 0, y[t].selected = e
			}

			function p(e, t) {
				void 0 !== e && (E || y[e].selected) ? (F = e, C = y[e].changedColor || y[e].color, q = B.eq(e), V && (m(B.eq(e), t || ""), k = l(y[e].color, "hsl"), k.l = l(C, "hsl")
					.l, r(y[e].color), O.setVal(100 - k.l, !1, !1))) : V && r()
			}

			function b() {
				var e, t = [];
				for (e = 0; e < y.length; ++e) y[e].selected && t.push(y[e]);
				return t
			}

			function v(e, t) {
				var a = Je(e.target)
					.index();
				F = ee[a].colorIndex, q = B.eq(F), Z = a, p(F, t), w.scroll(q, 250), _("onPreviewItemTap", {
					target: e.target
					, value: ee[a].color
					, index: a
				})
			}

			function g(e, t) {
				var a = !1
					, n = Je(".mbsc-color-selected", t);
				if (q = Je(e.target), q.hasClass("mbsc-color-clear-item")) return C = "", void G.clear();
				(E || $ > +n.length || q.hasClass("mbsc-color-selected")) && Te.Wodxy && (F = q.attr("data-index"), N && (Z = void 0 !== y[F].previewInd ? y[F].previewInd : d(), a = V && q.hasClass("mbsc-color-selected") && !q.parent()
					.hasClass("mbsc-color-active"), K.length > 6 && S.scroll(K.eq(Z))), C = y[F].changedColor || y[F].color, E ? (n.removeClass("mbsc-color-selected"), G._tempValue = C, C && q.toggleClass("mbsc-color-selected"), m(q, t)) : (m(q, t), a || h(!y[F].selected, F, Z, C, !0, !0)), p(F, t), G.live && (G._fillValue(), _("onSet", {
					value: G._value
				})), _("onItemTap", {
					target: e.target
					, value: C
					, selected: y[F].selected
					, index: F
				}))
			}
			var x, T, y, _, w, S, M, C, k, D, N, A, V, I, O, F, P, E, $, Y, J, B, K, q, U, G = this
				, X = Je(e)
				, Z = 0
				, Q = {}
				, ee = {};
			ht.call(this, e, t, !0), G.setVal = G._setVal = function (e, t, a, s) {
				G._hasValue = null !== e && void 0 !== e, G._tempValue = E ? Je.isArray(e) ? e[0] : e : Je.isArray(e) ? e : [e], n(t, void 0 === a ? t : a, s)
			}, G.getVal = G._getVal = function (e) {
				return G._hasValue || e ? Y ? b() : G[e ? "_tempValue" : "_value"] : null
			}, G._readValue = function () {
				var e = X.val() || "";
				G._hasValue = !1, 0 !== e.length && "" !== e && (G._hasValue = !0), G._hasValue ? (G._tempValue = E ? e : "hex" == x.format ? e.split(",") : e.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gim), n(!0)) : G._tempValue = [], u(G._tempValue, G._hasValue)
			}, G._fillValue = function () {
				G._hasValue = !0, n(!0, !0)
			}, G._generateContent = function () {
				var e, t, a, n = M ? 1 : 0;
				for (I = D ? Math.ceil((y.length + n) / x.rows) : x.rows, t = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (D ? "" : "mbsc-color-vertical") + '"><div class="mbsc-color-cont">' + (D ? '<div class="mbsc-color-row">' : ""), e = 0; e < y.length; ++e) a = y[e].changedColor || y[e].color, M && 0 === e && (t += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>'), 0 !== e && (e + n) % I == 0 && (t += D ? '</div><div class="mbsc-color-row">' : ""), t += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + e + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (y[e].selected ? "mbsc-color-selected" : "") + '"  style="background:' + a + '"></div>' + "</div>";
				if (t += "</div></div>" + (D ? "</div>" : ""), V && (t += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>'), N) {
					t += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">';
					for (var s in Q) t += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (Q[s].color ? "" : "mbsc-color-preview-item-empty") + '" style="background: ' + (Q[s].color || "initial") + ';"></div></div>';
					t += "</div></div>"
				}
				return t
			}, G._position = function (e) {
				var t, a;
				D || (t = e.find(".mbsc-color-cont"), a = Math.ceil(t.find(".mbsc-color-item-c")[0].offsetWidth), t.width(Math.min(Math.floor(e.find(".mbsc-fr-c")
					.width() / a), Math.round(y.length / x.rows)) * a + 1)), w && w.refresh(), S && S.refresh()
			}, G._markupInserted = function (e) {
				D || e.find(".mbsc-color-scroll-cont")
					.css("max-height", e.find(".mbsc-color-item-c")[0].offsetHeight * x.rows), w = new pt(e.find(".mbsc-color-scroll-cont")[0], {
						axis: D ? "X" : "Y"
						, rtl: x.rtl
						, elastic: 60
						, stopProp: !1
						, mousewheel: x.mousewheel
						, onBtnTap: function (t) {
							g(t, e)
						}
					})
			}, G._attachEvents = function (e) {
				var t;
				B = Je(".mbsc-color-item", e), e.on("keydown", ".mbsc-color-btn-e", function (t) {
					t.stopPropagation(), 32 == t.keyCode && (t.target.classList.contains("mbsc-color-item") ? g(t, e) : v(t, e))
				}), N && (K = Je(".mbsc-color-preview-item", e)), V && (e.addClass("mbsc-color-refine"), U = Je(".mbsc-color-slider", e), O = new Vt.Slider(U[0], {
					theme: x.theme
					, rtl: x.rtl
				}), A = e.find(".mbsc-progress-track"), F && G._value && p(F, e), U.on("change", function () {
					void 0 !== F && (E || y[F].selected) && (k.l = 100 - this.value, t = l(k.toString())
						.toString(), E ? G._tempValue = t : G._tempValue[void 0 !== Z ? Z : G._tempValue.length] = t, y[F].tempChangedColor = t, B.eq(F)
						.css("background", t), N && (ee[Z].color = t, K.eq(Z)
							.removeClass("mbsc-color-preview-item-empty")
							.css({
								background: t
							})), G.live && f(G._fillValue()))
				})), N && (S = new pt(e.find(".mbsc-color-preview-cont")[0], {
					axis: "X"
					, rtl: x.rtl
					, mousewheel: x.mousewheel
					, onBtnTap: function (t) {
						v(t, e)
					}
				}))
			}, G._detachEvents = function () {
				w && w.destroy(), O && O.destroy(), S && S.destroy()
			}, G.__processSettings = function () {
				var t, a;
				if (x = G.settings, _ = G.trigger, D = "horizontal" == x.navigation, G._value = [], G._tempValue = [], E = "single" == x.select, M = void 0 !== x.clear ? x.clear : E, a = x.data || [], !a.length) switch (x.format) {
				case "rgb":
					a = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"], M && a.splice(10, 0, "rgb(83, 71, 65)");
					break;
				case "hsl":
					a = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"], M && a.splice(10, 0, "hsl(20, 12%, 29%)");
					break;
				default:
					a = ["#ffeb3c", "#ff9900", "#f44437", "#ea1e63", "#9c26b0", "#683ab7", "#3f51b5", "#2196f3", "#009788", "#4baf4f", "#7e5d4e", "#9e9e9e"], M && a.splice(10, 0, "#534741")
				}
				if (V = "refine" == x.mode, N = !isNaN(x.select), $ = isNaN(x.select) ? E ? 2 : a.length : x.select, Y = Je.isPlainObject(a[0]), N && !Object.keys(Q)
					.length)
					for (t = 0; t < x.select; ++t) Q[t] = {}, ee[t] = {};
				if (!y)
					for (y = a.slice(0), t = 0; t < y.length; ++t) Je.isPlainObject(a[t]) ? y[t].color = a[t].color : (a[t] = a[t].toLowerCase(), y[t] = {
						key: t
						, name: a[t]
						, color: a[t]
					});
				T = x.defaultValue || y[0].color, C = T, k = l(C, "hsl"), (P = x.enhance && X.is("input")) && (X.hasClass("mbsc-color-input-hdn") ? J = X.prev() : (J = Je("<div " + (e.placeholder ? 'data-placeholder="' + e.placeholder + '"' : "") + ' class="mbsc-control mbsc-color-input ' + (x.inputClass || "") + '" readonly ></div>'), J.insertBefore(X), X.addClass("mbsc-color-input-hdn")
					.attr("tabindex", -1)), x.anchor = J, G.attachShow(J))
			}, G.__init = function () {
				x.cssClass = (x.cssClass || "") + " mbsc-color"
			}, G.__destroy = function () {
				P && (X.removeClass("mbsc-color-input-hdn"), J.remove())
			}, a || G.init(t)
		};
	It.prototype = {
			_hasDef: !0
			, _hasTheme: !0
			, _hasLang: !0
			, _class: "color"
			, _defaults: qe({}, Vt.Frame.prototype._defaults, {
				headerText: !1
				, validate: l
				, parseValue: l
				, enhance: !0
				, rows: 2
				, select: "single"
				, format: "hex"
				, navigation: "horizontal"
			})
		}, Te.classes.Color = It, Te.themes.color = Te.themes.frame, Te.presetShort("color", "Color", !1), At.color = {
			hsv2hex: W
			, hsv2rgb: P
			, rgb2hsv: E
			, rgb2hex: H
			, rgb2hsl: $
			, hex2rgb: L
			, hex2hsv: R
			, hex2hsl: z
		}, e.module("mobiscroll-color", [])
		.directive("mobiscrollColor", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollColor", {
				component: "Color"
			})
		}]), ["date", "time", "datetime"].forEach(function (e) {
			Te.presetShort(e)
		}), e.module("mobiscroll-datetime", [])
		.directive("mobiscrollDatetime", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollDatetime", {
				preset: "datetime"
			})
		}])
		.directive("mobiscrollDate", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollDate", {
				preset: "date"
			})
		}])
		.directive("mobiscrollTime", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollTime", {
				preset: "time"
			})
		}]);
	var Ot = {
		eventBubble: !0
		, labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"]
		, eventText: "event"
		, eventsText: "events"
	};
	Te.presetShort("eventcalendar"), Te.presets.scroller.eventcalendar = function (e) {
			function t(e) {
				var t = v.labelsShort
					, a = Math.abs(e) / 1e3
					, n = a / 60
					, s = n / 60
					, r = s / 24
					, i = r / 365;
				return a < 45 && Math.round(a) + " " + t[5].toLowerCase() || n < 45 && Math.round(n) + " " + t[4].toLowerCase() || s < 24 && Math.round(s) + " " + t[3].toLowerCase() || r < 30 && Math.round(r) + " " + t[2].toLowerCase() || r < 365 && Math.round(r / 30) + " " + t[1].toLowerCase() || Math.round(i) + " " + t[0].toLowerCase()
			}

			function a(e) {
				return e.sort(function (e, t) {
					var a = e.d || e.start
						, n = t.d || t.start;
					return (a.getTime ? e.start && e.end && e.start.toDateString() !== e.end.toDateString() ? 1 : a.getTime() : 0) - (n.getTime ? t.start && t.end && t.start.toDateString() !== t.end.toDateString() ? 1 : n.getTime() : 0)
				})
			}

			function n(e) {
				var t, a = Je(".mbsc-cal-c", c)[0].offsetHeight
					, n = Je(e)
					, s = e.offsetHeight
					, r = e.offsetWidth
					, i = n.offset()
					.top - Je(".mbsc-cal-c", c)
					.offset()
					.top
					, o = n.closest(".mbsc-cal-row")
					.index() < 2;
				t = d.addClass("mbsc-cal-events-t")
					.css({
						top: o ? i + s : "0"
						, bottom: o ? "0" : a - i
					})
					.addClass("mbsc-cal-events-v")
					.height(), d.css(o ? "bottom" : "top", "auto")
					.removeClass("mbsc-cal-events-t"), h.css("max-height", t), u.refresh(), u.scroll(0), o ? d.addClass("mbsc-cal-events-b") : d.removeClass("mbsc-cal-events-b"), Je(".mbsc-cal-events-arr", d)
					.css("left", n.offset()
						.left - d.offset()
						.left + r / 2)
			}

			function s(s, r, i) {
				if (s) {
					var o, l, c, h, b, g = '<ul class="mbsc-cal-event-list">';
					m = i, a(s), Je.each(s, function (e, a) {
						h = a.d || a.start, b = a.start && a.end && a.start.toDateString() !== a.end.toDateString(), c = a.color, o = "", l = "", h.getTime && (o = S((b ? "MM d yy " : "") + v.timeFormat, h)), a.end && (l = S((b ? "MM d yy " : "") + v.timeFormat, a.end)), g += '<li role="button" aria-label="' + a.text + (o ? ", " + v.fromText + " " + o : "") + (l ? ", " + v.toText + " " + l : "") + '" class="mbsc-cal-event"><div class="mbsc-cal-event-color" style="' + (c ? "background:" + c + ";" : "") + '"></div><div class="mbsc-cal-event-text">' + (h.getTime && !b ? '<div class="mbsc-cal-event-time">' + S(v.timeFormat, h) + "</div>" : "") + a.text + "</div>" + (a.start && a.end ? '<div class="mbsc-cal-event-dur">' + t(a.end - a.start) + "</div>" : "") + "</li>"
					}), g += "</ul>", f.html(g), e.trigger("onEventBubbleShow", {
						target: m
						, eventList: d[0]
					}), n(m), e.tap(Je(".mbsc-cal-event", f), function (t) {
						u.scrolled || e.trigger("onEventSelect", {
							domEvent: t
							, event: s[Je(this)
								.index()]
							, date: r
						})
					}), p = !0
				}
			}

			function r() {
				d && d.removeClass("mbsc-cal-events-v"), m = null, p = !1
			}

			function i() {
				r(), e.redraw()
			}

			function o(e) {
				return w(e.getFullYear(), e.getMonth(), e.getDate())
			}
			var l, c, d, m, u, h, f, p, b = qe({}, e.settings)
				, v = qe(e.settings, Ot, b)
				, g = (v.selectedClass, 0)
				, x = qe(!0, [], v.data);
			return Je.each(x, function (e, t) {
				void 0 === t._id && (t._id = g++)
			}), e._events = x, l = wt.call(this, e), e._onSelectShow = function () {
				r()
			}, e.addEvent = function (e) {
				var t = [];
				return e = qe(!0, [], Je.isArray(e) ? e : [e]), Je.each(e, function (e, a) {
					void 0 === a._id && (a._id = g++), x.push(a), t.push(a._id)
				}), i(), t
			}, e.removeEvent = function (e) {
				e = Je.isArray(e) ? e : [e], Je.each(e, function (e, t) {
					Je.each(x, function (e, a) {
						if (a._id === t) return x.splice(e, 1), !1
					})
				}), i()
			}, e.getEvents = function (t) {
				var n;
				return t ? (t.setHours(0, 0, 0, 0), n = e._prepareObj(x, t.getFullYear(), t.getMonth()), n[t] ? a(n[t]) : []) : qe(!0, [], x)
			}, e.setEvents = function (t) {
				var a = [];
				return e._events = x = qe(!0, [], t), Je.each(x, function (e, t) {
					void 0 === t._id && (t._id = g++), a.push(t._id)
				}), i(), a
			}, qe({}, l, {
				outerMonthChange: !1
				, headerText: !1
				, buttons: "inline" !== v.display ? ["close"] : v.buttons
				, onMarkupReady: function (t) {
					l.onMarkupReady.call(this, t), c = Je(t.target), d = Je('<div class="mbsc-cal-events ' + (v.eventBubbleClass || "") + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>')
						.appendTo(Je(".mbsc-cal-c", c)), h = Je(".mbsc-cal-events-i", d), f = Je(".mbsc-cal-events-sc", d), u = new pt(h[0]), p = !1, e.tap(h, function () {
							u.scrolled || r()
						})
				}
				, onMonthChange: function () {
					r()
				}
				, onDayChange: function (e) {
					var t = o(e.date)
						, a = e.target
						, n = v.eventBubble && m !== a;
					r(), n && s(e.marked, t, a)
				}
				, onPosition: function (e) {
					l.onPosition.call(this, e), p && n(m)
				}
				, onHide: function () {
					l.onHide.call(this), u && u.destroy()
				}
			})
		}, e.module("mobiscroll-eventcalendar", [])
		.directive("mobiscrollEventcalendar", ["$parse", function (t) {
			return {
				restrict: "A"
				, link: function (a, n, s) {
					var r = new Te.classes.Scroller(n[0], e.extend({}, a.$eval(s.mobiscrollEventcalendar || "{}"), {
						preset: "eventcalendar"
						, data: []
					}));
					s.mobiscrollInstance && t(s.mobiscrollInstance)
						.assign(a, r), a.$watch(function () {
							return t(s.mobiscrollData)(a)
						}, function (t) {
							void 0 === t || e.equals(r.getEvents(), t) || r.setEvents(t)
						}, !0), a.$on("$destroy", function () {
							r.destroy()
						})
				}
			}
		}]);
	var Ft = Te.classes
		, Ht = function (e, t) {
			var a = ""
				, n = Je(e)
				, s = this
				, r = s.settings;
			Ue.call(this, e, t, !0), s._init = function () {
				var e = r.context
					, t = Je(e)
					, s = t.find(".mbsc-ms-top .mbsc-ms")
					, i = t.find(".mbsc-ms-bottom .mbsc-ms")
					, o = {};
				"body" == e ? Je("body,html")
					.addClass("mbsc-page-ctx") : t.addClass("mbsc-page-ctx"), a && n.removeClass(a), s.length && (o.paddingTop = s[0].offsetHeight), i.length && (o.paddingBottom = i[0].offsetHeight), a = "mbsc-page mbsc-" + r.theme + (r.baseTheme ? " mbsc-" + r.baseTheme : "") + (r.rtl ? " mbsc-rtl" : " mbsc-ltr"), n.addClass(a)
					.css(o)
			}, s._destroy = function () {
				n.removeClass(a)
			}, r = s.settings, s.init(t)
		};
	Ht.prototype = {
			_hasDef: !0
			, _hasTheme: !0
			, _hasLang: !0
			, _class: "page"
			, _defaults: {
				context: "body"
			}
		}, Ft.Page = Ht, Te.themes.page.mobiscroll = {}, Te.presetShort("page", "Page"), Ee && Je(function () {
			Je("[mbsc-page]")
				.each(function () {
					new Ft.Page(this)
				}), Je(document)
				.on("mbsc-enhance", function (e, t) {
					Je(e.target)
						.is("[mbsc-page]") ? new Ft.Page(e.target, t) : Je("[mbsc-page]", e.target)
						.each(function () {
							new Ft.Page(this, t)
						})
				})
		}), e.module("mobiscroll-page", [])
		.directive("mobiscrollPage", ["$parse", function (e) {
			return {
				restrict: "A"
				, link: function (t, a, n) {
					var s = new Te.classes.Page(a[0], Te.ng.getOpt(t, n, "mobiscrollPage", !0));
					n.mobiscrollInstance && e(n.mobiscrollInstance)
						.assign(t, s), t.$on("$destroy", function () {
							s.destroy()
						})
				}
			}
		}]);
	var Lt = function (e, t, a) {
		function n(e) {
			!Je(".mbsc-fr-c", e)
				.hasClass("mbsc-wdg-c") && Te.Wodxy && (Je(".mbsc-fr-c", e)
					.addClass("mbsc-wdg-c")
					.append(o.show()), Je(".mbsc-w-p", e)
					.length || Je(".mbsc-fr-c", e)
					.addClass("mbsc-w-p"))
		}
		var s, r, i, o = Je(e)
			, l = this;
		ht.call(this, e, t, !0), l._generateContent = function () {
			return ""
		}, l._markupReady = function (e) {
			"inline" != s.display && n(e)
		}, l._markupInserted = function (e) {
			"inline" == s.display && n(e), e.trigger("mbsc-enhance", [{
				theme: s.theme
				, lang: s.lang
			}])
		}, l._markupRemove = function () {
			o.hide(), r ? r.prepend(o) : i.after(o)
		}, l.__processSettings = function () {
			s = l.settings, l.buttons.ok = {
				text: s.okText
				, icon: s.okIcon
				, handler: "set"
			}, s.buttons = s.buttons || ("inline" == s.display ? [] : ["ok"]), r || i || (i = o.prev(), i.length || (r = o.parent())), o.hide()
		}, l.__init = function () {
			s.cssClass = (s.cssClass || "") + " mbsc-wdg"
		}, a || l.init(t)
	};
	Lt.prototype = {
		_hasDef: !0
		, _hasTheme: !0
		, _hasContent: !0
		, _hasLang: !0
		, _class: "widget"
		, _defaults: qe({}, ht.prototype._defaults, {
			okText: "OK"

			, headerText: !1
		})
	}, Te.classes.Widget = Lt, Te.themes.widget = Te.themes.frame, Te.presetShort("widget", "Widget", !1);
	var Pt = Ee && !!window.Promise
		, Et = []
		, $t = [];
	Te.alert = function (e) {
		var t = document.createElement("div");
		return t.innerHTML = q(e), ee(U, t, e)
	}, Te.confirm = function (e) {
		var t = document.createElement("div");
		return t.innerHTML = q(e), ee(G, t, e)
	}, Te.prompt = function (e) {
		var t = document.createElement("div");
		return t.innerHTML = q(e) + '<label class="mbsc-input">' + (e.label ? '<span class="mbsc-label">' + e.label + "</span>" : "") + '<input tabindex="0" type="' + (e.inputType || "text") + '" placeholder="' + (e.placeholder || "") + '" value="' + (e.value || "") + '"></label>', ee(X, t, e)
	}, Te.snackbar = function (e) {
		var t = document.createElement("div");
		return t.innerHTML = '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' + (e.message || "") + "</div>" + (e.button ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' + (e.button.text || "") + "</button>" : "") + "</div>", ee(Z, t, e)
	}, Te.toast = function (e) {
		var t = document.createElement("div");
		return t.innerHTML = '<div class="mbsc-toast-msg">' + (e.message || "") + "</div>", ee(Q, t, e)
	};
	var Yt = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup", "mouseleave"]
		, zt = {
			tap: !0
		}
		, jt = void 0
		, Wt = function () {
			function e(t, a) {
				var n = this;
				_e(this, e);
				var s = qe({}, zt, Te.settings, a)
					, r = Je(t)
					, i = r.parent()
					, o = i.hasClass("mbsc-input-wrap") ? i.parent() : i
					, l = r.next()
					.hasClass("mbsc-fr") ? r.next() : null
					, c = te(r);
				l && l.insertAfter(o), F(o, c), r.addClass("mbsc-control"), Yt.forEach(function (e) {
					t.addEventListener(e, n)
				}), this.settings = s, this._type = c, this._elm = t, this._$elm = r, this._$parent = o, this._$frame = l, this._ripple = ae(s.theme)
			}
			return we(e, [{
				key: "destroy"
				, value: function () {
					var e = this;
					this._$elm.removeClass("mbsc-control"), Yt.forEach(function (t) {
						e._elm.removeEventListener(t, e)
					})
				}
			}, {
				key: "option"
				, value: function (e) {
					qe(this.settings, e), this._ripple = ae(this.settings.theme)
				}
			}, {
				key: "handleEvent"
				, value: function (e) {
					switch (e.type) {
					case "touchstart":
					case "mousedown":
						this._onStart(e);
						break;
					case "touchmove":
					case "mousemove":
						this._onMove(e);
						break;
					case "touchend":
					case "touchcancel":
					case "mouseup":
					case "mouseleave":
						this._onEnd(e)
					}
				}
			}, {
				key: "_addRipple"
				, value: function (e) {
					this._ripple && this._$rippleElm && this._ripple.addRipple(this._$rippleElm, e)
				}
			}, {
				key: "_removeRipple"
				, value: function () {
					this._ripple && this._$rippleElm && this._ripple.removeRipple()
				}
			}, {
				key: "_onStart"
				, value: function (e) {
					var t = this._elm;
					k(e, t) && (this._startX = g(e, "X"), this._startY = g(e, "Y"), jt && jt.removeClass("mbsc-active"), t.disabled || (this._isActive = !0, jt = this._$elm, jt.addClass("mbsc-active"), this._addRipple(e)))
				}
			}, {
				key: "_onMove"
				, value: function (e) {
					(this._isActive && Math.abs(g(e, "X") - this._startX) > 9 || Math.abs(g(e, "Y") - this._startY) > 9) && (this._$elm.removeClass("mbsc-active"), this._removeRipple(), this._isActive = !1)
				}
			}, {
				key: "_onEnd"
				, value: function (e) {
					var t = this
						, a = this._elm
						, n = this._type;
					this._isActive && this.settings.tap && "touchend" == e.type && !a.readOnly && (a.focus(), /(button|submit|checkbox|switch|radio)/.test(n) && e.preventDefault(), /select/.test(n) || v(e, a)), this._isActive && setTimeout(function () {
						t._$elm.removeClass("mbsc-active"), t._removeRipple()
					}, 100), this._isActive = !1, jt = null
				}
			}]), e
		}()
		, Rt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
					.call(this, e, a));
				return O(n, n._$parent, n._$elm), n._$parent.addClass("mbsc-input"), n
			}
			return Me(t, e), we(t, [{
				key: "destroy"
				, value: function () {
					Se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this)
						.call(this), this._$parent.removeClass("mbsc-ic-left mbsc-ic-right")
						.find(".mbsc-input-ic")
						.remove()
				}
			}]), t
		}(Wt)
		, Jt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this, e, a))
					, s = n._$elm
					, r = s.attr("data-icon");
				return s.addClass("mbsc-btn")
					.find(".mbsc-btn-ic")
					.remove(), r && (s.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + r + '"></span>'), "" === s.text() && s.addClass("mbsc-btn-icon-only")), n._$rippleElm = s, n
			}
			return Me(t, e), t
		}(Wt)
		, Bt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
					.call(this, e, a));
				return n._$parent.prepend(n._$elm)
					.addClass("mbsc-checkbox mbsc-control-w")
					.find(".mbsc-checkbox-box")
					.remove(), n._$elm.after('<span class="mbsc-checkbox-box"></span>'), n
			}
			return Me(t, e), t
		}(Wt)
		, Kt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
					.call(this, e, a));
				return n._$parent.addClass("mbsc-radio mbsc-control-w")
					.find(".mbsc-radio-box")
					.remove(), n._$elm.after('<span class="mbsc-radio-box"><span></span></span>'), n
			}
			return Me(t, e), t
		}(Wt)
		, qt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this, e, a))
					, s = n._$elm
					, r = n._$parent
					, i = r.find("input.mbsc-control")
					, o = i.length ? i : Je('<input tabindex="-1" class="mbsc-control" readonly>');
				return n._$input = o, r.addClass("mbsc-select" + (n._$frame ? " mbsc-select-inline" : "")), s.after(o), o.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>'), s.hasClass("mbsc-comp") || (e.addEventListener("change", n), n._setText()), n
			}
			return Me(t, e), we(t, [{
				key: "destroy"
				, value: function () {
					Se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this)
						.call(this), this._$elm.after(this._$input), this._elm.removeEventListener("change", this)
				}
			}, {
				key: "handleEvent"
				, value: function (e) {
					Se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this)
						.call(this, e), "change" == e.type && this._setText()
				}
			}, {
				key: "_setText"
				, value: function () {
					var e = this._elm;
					this._$elm.hasClass("mbsc-comp") || this._$input.val(-1 != e.selectedIndex ? e.options[e.selectedIndex].text : "")
				}
			}]), t
		}(Rt)
		, Ut = ["keydown", "input", "scroll"]
		, Gt = void 0;
	Ee && Je(window)
		.on("resize orientationchange", ne);
	var Xt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
					.call(this, e, a));
				return n._$parent.addClass("mbsc-textarea"), Ut.forEach(function (e) {
					n._elm.addEventListener(e, n)
				}), se(e), n
			}
			return Me(t, e), we(t, [{
				key: "destroy"
				, value: function () {
					var e = this;
					Se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this)
						.call(this), Ut.forEach(function (t) {
							e._elm.removeEventListener(t, e)
						})
				}
			}, {
				key: "handleEvent"
				, value: function (e) {
					switch (Se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "handleEvent", this)
						.call(this, e), e.type) {
					case "keydown":
					case "input":
						this._onInput(e);
						break;
					case "scroll":
						re(this._elm)
					}
				}
			}, {
				key: "_onInput"
				, value: function () {
					var e = this;
					clearTimeout(this._debounce), this._debounce = setTimeout(function () {
						se(e._elm)
					}, 100)
				}
			}]), t
		}(Rt)
		, Zt = function (e) {
			function t(e, a) {
				_e(this, t);
				var n = Ce(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this, e, a))
					, s = void 0
					, r = void 0
					, i = n._$elm
					, o = n._$parent;
				return o.hasClass("mbsc-segmented-item-ready") || (s = Je('<div class="mbsc-segmented"></div>'), o.after(s), o.parent()
					.find('input[name="' + i.attr("name") + '"]')
					.each(function () {
						var e = Je(this);
						r = e.parent()
							.addClass("mbsc-segmented-item mbsc-segmented-item-ready"), Je('<span class="mbsc-segmented-content">' + (e.attr("data-icon") ? '<span class="mbsc-ic mbsc-ic-' + e.attr("data-icon") + '"></span>' : "") + "</span>")
							.append(r.contents())
							.appendTo(r), r.prepend(e), s.append(r)
					})), n._$rippleElm = i.next(), n
			}
			return Me(t, e), t
		}(Wt)
		, Qt = function (e, t) {
			function a(t) {
				32 == t.keyCode && (t.preventDefault(), b || e.disabled || (u = Je(this)
					.addClass("mbsc-active"), c(t)))
			}

			function n(e) {
				b && (e.preventDefault(), d(!0))
			}

			function s(t) {
				k(t, this) && !e.disabled && (u = Je(this)
					.addClass("mbsc-active")
					.trigger("focus"), D && !u.hasClass("mbsc-step-disabled") && D.addRipple(u.find(".mbsc-segmented-content"), t), c(t), "mousedown" === t.type && Je(document)
					.on("mousemove", i)
					.on("mouseup", r))
			}

			function r(e) {
				b && (e.preventDefault(), d(!0), "mouseup" === e.type && Je(document)
					.off("mousemove", i)
					.off("mouseup", r))
			}

			function i(e) {
				b && (_ = g(e, "X"), w = g(e, "Y"), x = _ - V, T = w - I, (Math.abs(x) > 7 || Math.abs(T) > 7) && d())
			}

			function o() {
				var t;
				e.disabled || (t = parseFloat(Je(this)
					.val()), l(isNaN(t) ? F : t))
			}

			function l(e, t, a) {
				$ = F, void 0 === t && (t = !0), void 0 === a && (a = t), F = void 0 !== e ? Math.min(M, Math.max(Math.round(e / N) * N, C)) : Math.min(M, Math.max(F + (u.hasClass("mbsc-stepper-minus") ? -N : N), C)), v = !0, p.removeClass("mbsc-step-disabled"), t && E.val(F), F == C ? f.addClass("mbsc-step-disabled") : F == M && h.addClass("mbsc-step-disabled"), F !== $ && a && E.trigger("change")
			}

			function c(e) {
				b || (b = !0, v = !1, V = g(e, "X"), I = g(e, "Y"), clearInterval(S), clearTimeout(S), S = setTimeout(function () {
					l(), S = setInterval(function () {
						l()
					}, 150)
				}, 300))
			}

			function d(e) {
				clearInterval(S), clearTimeout(S), !v && e && l(), b = !1, v = !1, u.removeClass("mbsc-active"), D && setTimeout(function () {
					D.removeRipple()
				}, 100)
			}

			function m(e, t) {
				var a = E.attr(e);
				return void 0 === a || "" === a ? t : +a
			}
			var u, h, f, p, b, v, x, T, y, _, w, S, M, C, D, N, A, V, I, O, F, H, L, P = this
				, E = Je(e)
				, $ = F;
			Ue.call(this, e, t, !0), P.getVal = function () {
				var e = parseFloat(E.val());
				return e = isNaN(e) ? F : e, Math.min(M, Math.max(Math.round(e / N) * N, C))
			}, P.setVal = function (e, t, a) {
				e = parseFloat(e), l(isNaN(e) ? F : e, t, a)
			}, P._init = function (t) {
				H = E.parent()
					.hasClass("mbsc-stepper"), L = H ? E.closest(".mbsc-stepper-cont") : E.parent(), A = P.settings, C = void 0 === t.min ? m("min", A.min) : t.min, M = void 0 === t.max ? m("max", A.max) : t.max, N = void 0 === t.step ? m("step", A.step) : t.step, y = E.attr("data-val") || A.val, F = Math.min(M, Math.max(Math.round(+e.value / N) * N || 0, C)), O = Te.themes.form[A.theme], D = O && O.addRipple ? O : null, H || L.addClass("mbsc-stepper-cont mbsc-control-w")
					.append('<span class="mbsc-segmented mbsc-stepper"></span>')
					.find(".mbsc-stepper")
					.append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (F == C ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>')
					.append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (F == M ? "mbsc-step-disabled" : "") + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>')
					.prepend(E), f = Je(".mbsc-stepper-minus", L), h = Je(".mbsc-stepper-plus", L), H || ("left" == y ? (L.addClass("mbsc-stepper-val-left"), E.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : "right" == y ? (L.addClass("mbsc-stepper-val-right"), h.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>')) : f.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>')), E.val(F)
					.attr("data-role", "stepper")
					.attr("min", C)
					.attr("max", M)
					.attr("step", N)
					.on("change", o), p = Je(".mbsc-stepper-control", L)
					.on("keydown", a)
					.on("keyup", n)
					.on("mousedown touchstart", s)
					.on("touchmove", i)
					.on("touchend touchcancel", r), E.addClass("mbsc-stepper-ready mbsc-control")
			}, P._destroy = function () {
				E.removeClass("mbsc-control")
					.off("change", o), p.off("keydown", a)
					.off("keyup", n)
					.off("mousedown touchstart", s)
					.off("touchmove", i)
					.off("touchend touchcancel", r)
			}, P.init(t)
		};
	Qt.prototype = {
		_class: "stepper"
		, _hasDef: !0
		, _defaults: {
			min: 0
			, max: 100
			, step: 1
		}
	}, Te.classes.Stepper = Qt, Te.presetShort("stepper", "Stepper");
	var ea = function (e, t) {
		var a, n, s, r, i = this;
		t = t || {}, qe(t, {
			changeEvent: "click"
			, round: !1
		}), Dt.call(this, e, t, !0), i._readValue = function () {
			return e.checked ? 1 : 0
		}, i._fillValue = function (e, t, n) {
			a.prop("checked", !!e), n && a.trigger("change")
		}, i._onTap = function (e) {
			i._setVal(e ? 0 : 1)
		}, i.___init = function () {
			s = i.settings, a = Je(e), n = a.parent(), n.find(".mbsc-switch-track")
				.remove(), n.prepend(a), a.attr("data-role", "switch")
				.after('<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' + s.offText + '</span><span class="mbsc-switch-txt-on">' + s.onText + "</span></span></span></span></span>"), r && r.destroy(), r = new Wt(e, s), i._$track = n.find(".mbsc-progress-track"), i._min = 0, i._max = 1, i._step = 1
		}, i.___destroy = function () {
			r.destroy()
		}, i.getVal = function () {
			return e.checked
		}, i.setVal = function (e, t, a) {
			i._setVal(e ? 1 : 0, t, a)
		}, i.init(t)
	};
	ea.prototype = {
		_class: "switch"
		, _css: "mbsc-switch"
		, _hasTheme: !0
		, _hasLang: !0
		, _hasDef: !0
		, _defaults: {
			stopProp: !0
			, offText: "Off"
			, onText: "On"
		}
	}, Te.classes.Switch = ea, Te.presetShort("switch", "Switch");
	var ta = 0
		, aa = "ios" == Oe && He > 7
		, na = Te.instances
		, sa = function (e, t) {
			function a() {
				r.removeClass("mbsc-no-touch")
			}
			var n, s = ""
				, r = Je(e)
				, i = {}
				, o = this;
			Ue.call(this, e, t, !0), o.refresh = function (e) {
				Je("input,select,textarea,progress,button", r)
					.each(function () {
						var e, t = this
							, a = Je(t)
							, s = te(a);
						if ("false" != a.attr("data-enhance") && Te.Wodxy)
							if (a.hasClass("mbsc-control"))(e = na[t.id] || i[t.id]) && e.option && e.option({
								theme: n.theme
								, lang: n.lang
								, rtl: n.rtl
								, onText: n.onText
								, offText: n.offText
								, stopProp: n.stopProp
							});
							else switch (t.id || (t.id = "mbsc-form-control-" + ++ta), s) {
							case "button":
							case "submit":
								i[t.id] = new Jt(t, {
									theme: n.theme
									, tap: n.tap
								});
								break;
							case "switch":
								i[t.id] = new ea(t, {
									theme: n.theme
									, lang: n.lang
									, rtl: n.rtl
									, tap: n.tap
									, onText: n.onText
									, offText: n.offText
									, stopProp: n.stopProp
								});
								break;
							case "checkbox":
								i[t.id] = new Bt(t, {
									tap: n.tap
								});
								break;
							case "range":
								Je(t)
									.parent()
									.hasClass("mbsc-slider") || (i[t.id] = new Nt(t, {
										theme: n.theme
										, lang: n.lang
										, rtl: n.rtl
										, stopProp: n.stopProp
									}));
								break;
							case "progress":
								i[t.id] = new kt(t, {
									theme: n.theme
									, lang: n.lang
									, rtl: n.rtl
								});
								break;
							case "radio":
								i[t.id] = new Kt(t, {
									tap: n.tap
								});
								break;
							case "select":
							case "select-one":
							case "select-multiple":
								i[t.id] = new qt(t, {
									tap: n.tap
								});
								break;
							case "textarea":
								i[t.id] = new Xt(t, {
									tap: n.tap
								});
								break;
							case "segmented":
								i[t.id] = new Zt(t, {
									theme: n.theme
									, tap: n.tap
								});
								break;
							case "stepper":
								i[t.id] = new Qt(t, {
									theme: n.theme
								});
								break;
							case "hidden":
								return;
							default:
								i[t.id] = new Rt(t, {
									tap: n.tap
								})
							}
					}), e || ne()
			}, o._init = function () {
				Te.themes.form[n.theme] || (n.theme = "mobiscroll"), r.hasClass("mbsc-form") || r.on("touchstart", a)
					.show(), s && r.removeClass(s), s = "mbsc-form mbsc-no-touch mbsc-" + n.theme + (aa ? " mbsc-form-hb" : "") + (n.baseTheme ? " mbsc-" + n.baseTheme : "") + (n.rtl ? " mbsc-rtl" : " mbsc-ltr"), r.addClass(s), o.refresh()
			}, o._destroy = function () {
				r.removeClass(s)
					.off("touchstart", a);
				for (var e in i) i[e].destroy()
			}, n = o.settings, o.init(t)
		};
	sa.prototype = {
		_hasDef: !0
		, _hasTheme: !0
		, _hasLang: !0
		, _class: "form"
		, _defaults: {
			tap: !0
			, stopProp: !0
			, lang: "en"
		}
	}, Te.themes.form.mobiscroll = {}, Te.classes.Form = sa, Te.presetShort("form", "Form"), Ee && Je(function () {
		var e = "[mbsc-enhance],[mbsc-form]";
		Je(e)
			.each(function () {
				new sa(this)
			}), Je(document)
			.on("mbsc-enhance", function (t, a) {
				Je(t.target)
					.is(e) ? new sa(t.target, a) : Je(e, t.target)
					.each(function () {
						new sa(this, a)
					})
			}), Je(document)
			.on("mbsc-refresh", function (t) {
				var a;
				Je(t.target)
					.is(e) ? (a = na[t.target.id]) && a.refresh() : Je(e, t.target)
					.each(function () {
						(a = na[this.id]) && a.refresh()
					})
			})
	});
	var ra = +new Date;
	e.module("mobiscroll-form", [])
		.directive("mobiscrollForm", ["$parse", function (e) {
			return ("undefined" != typeof ionic || Je("ion-content,ion-nav-view")
				.length) && (sa.prototype._defaults.tap = !1, ea.prototype._defaults.tap = !1), {
				restrict: "A"
				, compile: function () {
					return {
						pre: function (e, t, a) {
							var n = Te.ng.getOpt(e, a, "mobiscrollForm", !0)
								, s = a.id;
							s || (s = "mbsc-form-" + ra++, t.attr("id", s)), t.attr("mbsc-form-opt", ""), Te.ng.formOptions[s] = n
						}
						, post: function (t, a, n) {
							var s = new sa(a[0], Te.ng.getOpt(t, n, "mobiscrollForm", !0));
							n.mobiscrollInstance && e(n.mobiscrollInstance)
								.assign(t, s), t.$on("mbscFormRefresh", function () {
									s.refresh()
								}), t.$on("$destroy", function () {
									s.destroy(), s = null
								})
						}
					}
				}
			}
		}])
		.directive("mobiscrollSwitch", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollSwitch", {
				component: "Switch"
			}, void 0, void 0, void 0, void 0, !0)
		}])
		.directive("mobiscrollStepper", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollStepper", {
				component: "Stepper"
			})
		}])
		.directive("mobiscrollProgress", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollProgress", {
				component: "Progress"
			}, void 0, void 0, void 0, void 0, !0)
		}])
		.directive("mobiscrollSlider", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollSlider", {
				component: "Slider"
			}, void 0, void 0, void 0, void 0, !0)
		}]);
	var ia = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"]
		, oa = +new Date
		, la = {
			invalid: []
			, showInput: !0
			, inputClass: ""
			, itemSelector: "li"
		};
	Te.presets.scroller.list = function (e) {
		function t(e, t, n) {
			for (var s = 0, r = []; s < e;) r[s] = a(n, s, t), s++;
			return r
		}

		function a(e, t, a) {
			for (var n, s = 0, r = a, i = []; s < t;) {
				var o = e[s];
				for (n in r)
					if (r[n].key == o) {
						r = r[n].children;
						break
					}
				s++
			}
			for (s = 0; s < r.length;) r[s].invalid && i.push(r[s].key), s++;
			return i
		}

		function n(e, t) {
			for (var a = []; e;) a[--e] = !0;
			return a[t] = !1, a
		}

		function s(e, t, a) {
			var n, s, o, l = 0
				, c = [[]]
				, d = S;
			if (t)
				for (n = 0; n < t; n++) v ? c[0][n] = {} : c[n] = [{}];
			for (; l < e.length;) {
				for (v ? c[0][l] = i(d, M[l]) : c[l] = [i(d, M[l])], n = 0, o = void 0; n < d.length && void 0 === o;) d[n].key == e[l] && (void 0 !== a && l <= a || void 0 === a) && (o = n), n++;
				if (void 0 !== o && d[o].children) l++, d = d[o].children;
				else {
					if (!(s = r(d)) || !s.children) return c;
					l++, d = s.children
				}
			}
			return c
		}

		function r(e, t) {
			if (!e) return !1;
			for (var a, n = 0; n < e.length;)
				if (!(a = e[n++])
					.invalid) return t ? n - 1 : a;
			return !1
		}

		function i(e, t) {
			for (var a = {
					data: []
					, label: t
				}, n = 0; n < e.length;) a.data.push({
				value: e[n].key
				, display: e[n].value
			}), n++;
			return a
		}

		function o(t) {
			e._isVisible && Je(".mbsc-sc-whl-w", e._markup)
				.css("display", "")
				.slice(t)
				.hide()
		}

		function l(e, t) {
			var a, n, s, i = []
				, o = S
				, l = 0
				, c = !1;
			if (void 0 !== e[l] && l <= t)
				for (a = 0, n = e[l], s = void 0; a < o.length && void 0 === s;) o[a].key != e[l] || o[a].invalid || (s = a), a++;
			else s = r(o, !0), n = o[s].key;
			for (c = void 0 !== s && o[s].children, i[l] = n; c;) {
				if (o = o[s].children, l++, c = !1, s = void 0, void 0 !== e[l] && l <= t)
					for (a = 0, n = e[l], s = void 0; a < o.length && void 0 === s;) o[a].key != e[l] || o[a].invalid || (s = a), a++;
				else s = r(o, !0), s = !1 === s ? void 0 : s, n = o[s].key;
				c = !(void 0 === s || !r(o[s].children)) && o[s].children, i[l] = n
			}
			return {
				lvl: l + 1
				, nVector: i
			}
		}

		function c(t) {
			var a = [];
			return y = y > _++ ? y : _, (t.length > 1 ? t : t.children(p.itemSelector))
				.each(function (t) {
					var n = Je(this)
						, s = n.clone();
					s.children("ul,ol")
						.remove(), s.children(p.itemSelector)
						.remove();
					var r = e._processMarkup ? e._processMarkup(s) : s.html()
						.replace(/^\s\s*/, "")
						.replace(/\s\s*$/, "")
						, i = !!n.attr("data-invalid")
						, o = {
							key: void 0 === n.attr("data-val") || null === n.attr("data-val") ? t : n.attr("data-val")
							, value: r
							, invalid: i
							, children: null
						}
						, l = "li" === p.itemSelector ? n.children("ul,ol") : n.children(p.itemSelector);
					l.length && (o.children = c(l)), a.push(o)
				}), _--, a
		}

		function d(t, a, n) {
			var r, i = (a || 0) + 1
				, l = []
				, c = {}
				, d = {};
			for (c = s(t, null, a), r = 0; r < t.length; r++) e._tempWheelArray[r] = t[r] = n.nVector[r] || 0;
			for (; i < n.lvl;) d[i] = v ? c[0][i] : c[i][0], l.push(i++);
			o(n.lvl), w = t.slice(0), l.length && (u = !0, e.changeWheel(d))
		}
		var m, u, h, f = qe({}, e.settings)
			, p = qe(e.settings, la, f)
			, b = p.layout || (/top|bottom/.test(p.display) ? "liquid" : "")
			, v = "liquid" == b
			, g = p.readonly
			, x = Je(this)
			, T = this.id + "_dummy"
			, y = 0
			, _ = 0
			, w = []
			, S = p.wheelArray || c(x)
			, M = function (e) {
				var t, a = [];
				for (t = 0; t < e; t++) a[t] = p.labels && p.labels[t] ? p.labels[t] : t;
				return a
			}(y)
			, C = function (e) {
				for (var t, a = [], n = e, s = !0, i = 0; s;) t = r(n), a[i++] = t.key, (s = t.children) && (n = s);
				return a
			}(S)
			, k = s(C, y);
		return Je("#" + T)
			.remove(), p.input ? m = Je(p.input) : p.showInput && (m = Je('<input type="text" id="' + T + '" value="" class="' + p.inputClass + '" placeholder="' + (p.placeholder || "") + '" readonly />')
				.insertBefore(x)), m && e.attachShow(m), p.wheelArray || x.hide(), {
				wheels: k
				, anchor: m
				, layout: b
				, headerText: !1
				, setOnTap: 1 == y
				, formatValue: function (e) {
					return void 0 === h && (h = l(e, e.length)
							.lvl), e.slice(0, h)
						.join(" ")
				}
				, parseValue: function (e) {
					return e ? (e + "")
						.split(" ") : (p.defaultValue || C)
						.slice(0)
				}
				, onBeforeShow: function () {
					var t = e.getArrayVal(!0);
					w = t.slice(0), p.wheels = s(t, y, y), u = !0
				}
				, onWheelGestureStart: function (e) {
					p.readonly = n(y, e.index)
				}
				, onWheelAnimationEnd: function (t) {
					var a = t.index
						, n = e.getArrayVal(!0)
						, s = l(n, a);
					h = s.lvl, p.readonly = g, n[a] != w[a] && d(n, a, s)
				}
				, onFill: function (e) {
					h = void 0, m && m.val(e.valueText)
				}
				, validate: function (e) {
					var a = e.values
						, n = e.index
						, s = l(a, a.length);
					return h = s.lvl, void 0 === n && (o(s.lvl), u || d(a, n, s)), u = !1, {
						disabled: t(h, S, a)
					}
				}
				, onDestroy: function () {
					m && Je("#" + T)
						.remove(), x.show()
				}
			}
	};
	var ca = Te.presets.scroller;
	Te.presetShort("image"), ca.image = function (e) {
			return e.settings.enhance && (e._processMarkup = function (e) {
				var t = e.attr("data-icon");
				return e.children()
					.each(function (e, t) {
						t = Je(t), t.is("img") ? Je('<div class="mbsc-img-c"></div>')
							.insertAfter(t)
							.append(t.addClass("mbsc-img")) : t.is("p") && t.addClass("mbsc-img-txt")
					}), t && e.prepend('<div class="mbsc-ic mbsc-ic-' + t + '"></div'), e.html('<div class="mbsc-img-w">' + e.html() + "</div>"), e.html()
			}), ca.list.call(this, e)
		}, e.module("mobiscroll-image", [])
		.directive("mobiscrollRepeatRender", ie)
		.directive("mobiscrollImage", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollImage", {
				preset: "image"
			}, function (e, t) {
				return new Te.classes.Scroller(e, t)
			}, e, t)
		}]);
	var da, ma = Te.classes
		, ua = 1
		, ha = "transparent"
		, fa = function (e, t) {
			function a() {
				St = !1, bt = !1, ee = 0, Ot = 0, Ft = new Date, Ge = ie.width(), ce = E(ie), at = ce.index(Xe), Qe = Xe[0].offsetHeight, na = Xe[0].offsetTop, Rt = Jt[Xe.attr("data-type") || "defaults"], It = Rt.stages
			}

			function n(e) {
				var t;
				"touchstart" === e.type && (vt = !0, clearTimeout(gt)), !k(e, this) || X || ta || da || oa || !Te.Wodxy || (X = !0, te = !0, Ht = g(e, "X"), Lt = g(e, "Y"), pe = 0, be = 0, Xe = Je(this), t = Xe, a(), zt = kt.onItemTap || Rt.tap || Xe.hasClass("mbsc-lv-parent") || Xe.hasClass("mbsc-lv-back"), rt = Xe.offset()
					.top, zt && (Q = setTimeout(function () {
						t.addClass("mbsc-lv-item-active"), Ce("onItemActivate", {
							target: t[0]
							, domEvent: e
						})
					}, 120)), Zt.sortable && !Xe.hasClass("mbsc-lv-back") && (Zt.sortable.group || (ft = Xe.nextUntil(".mbsc-lv-gr-title")
							.filter(".mbsc-lv-item"), xt = Xe.prevUntil(".mbsc-lv-gr-title")
							.filter(".mbsc-lv-item")), ct = (Zt.sortable.group ? ie.children(st)
							.eq(0) : xt.length ? xt.eq(-1) : Xe)[0].offsetTop - na, lt = (Zt.sortable.group ? ie.children(st)
							.eq(-1) : ft.length ? ft.eq(-1) : Xe)[0].offsetTop - na, Zt.sortable.handle ? Je(e.target)
						.hasClass("mbsc-lv-handle") && (clearTimeout(Q), "Moz" === tt ? (e.preventDefault(), d()) : Wt = setTimeout(function () {
							d()
						}, 100)) : Wt = setTimeout(function () {
							ke.appendTo(Xe), ke[0].style[tt + "Animation"] = "mbsc-lv-fill " + (kt.sortDelay - 100) + "ms linear", clearTimeout(we), clearTimeout(Q), te = !1, Wt = setTimeout(function () {
								ke[0].style[tt + "Animation"] = "", d()
							}, kt.sortDelay - 80)
						}, 80)), "mousedown" == e.type && Je(document)
					.on("mousemove", s)
					.on("mouseup", r))
			}

			function s(e) {
				var t = !1
					, a = !0;
				if (X)
					if (Se = g(e, "X"), Me = g(e, "Y"), pe = Se - Ht, be = Me - Lt, clearTimeout(we), xe || Et || Dt || Xe.hasClass("mbsc-lv-back") || (Math.abs(be) > 10 ? (Dt = !0, r(qe({}, e, {
							type: "mousemove" == e.type ? "mouseup" : "touchend"
						})), clearTimeout(Q)) : Math.abs(pe) > 7 && i()), Et) e.preventDefault(), ee = pe / Ge * 100, o();
					else if (xe) {
					e.preventDefault();
					var n, s = qt.scrollTop()
						, l = Math.max(ct, Math.min(be + Gt, lt))
						, c = Ie ? rt - Xt + s - Gt : rt;
					Ut + s < c + l + Qe ? (qt.scrollTop(c + l - Ut + Qe), n = !0) : c + l < s && (qt.scrollTop(c + l), n = !0), n && (Gt += qt.scrollTop() - s), ut && (Zt.sortable.multiLevel && mt.hasClass("mbsc-lv-parent") ? na + Qe / 4 + l > ut ? t = !0 : na + Qe - Qe / 4 + l > ut && (ve = mt.addClass("mbsc-lv-item-hl"), a = !1) : na + Qe / 2 + l > ut && (mt.hasClass("mbsc-lv-back") ? Zt.sortable.multiLevel && (ge = mt.addClass("mbsc-lv-item-hl"), a = !1) : t = !0), t && (Tt.insertAfter(mt), yt = mt, mt = z(mt, "next"), _t = ut, ut = mt.length && mt[0].offsetTop, re++)), !t && _t && (Zt.sortable.multiLevel && yt.hasClass("mbsc-lv-parent") ? na + Qe - Qe / 4 + l < _t ? t = !0 : na + Qe / 4 + l < _t && (ve = yt.addClass("mbsc-lv-item-hl"), a = !1) : na + Qe / 2 + l < _t && (yt.hasClass("mbsc-lv-back") ? Zt.sortable.multiLevel && (ge = yt.addClass("mbsc-lv-item-hl"), a = !1) : t = !0), t && (Tt.insertBefore(yt), mt = yt, yt = z(yt, "prev"), ut = _t, _t = yt.length && yt[0].offsetTop + yt[0].offsetHeight, re--)), a && (ve && (ve.removeClass("mbsc-lv-item-hl"), ve = !1), ge && (ge.removeClass("mbsc-lv-item-hl"), ge = !1)), t && Ce("onSortChange", [Xe, re]), N(Xe, l), Ce("onSort", [Xe, re])
				} else(Math.abs(pe) > 5 || Math.abs(be) > 5) && A()
			}

			function r(e) {
				var t, a, n, i = Xe;
				X && (X = !1, A(), "mouseup" == e.type && Je(document)
					.off("mousemove", s)
					.off("mouseup", r), Dt || (gt = setTimeout(function () {
						vt = !1
					}, 300)), (Et || Dt || xe) && (bt = !0), Et ? c() : xe ? (n = ie, ve ? (F(Xe.detach()), a = ia[ve.attr("data-ref")], re = E(a.child)
						.length, ve.removeClass("mbsc-lv-item-hl"), kt.navigateOnDrop ? K(ve, function () {
							Zt.add(null, Xe, null, null, ve, !0), J(Xe), u(Xe, at, n, !0)
						}) : (Zt.add(null, Xe, null, null, ve, !0), u(Xe, at, n, !0))) : ge ? (F(Xe.detach()), a = ia[ge.attr("data-back")], re = E(a.parent)
						.index(a.item) + 1, ge.removeClass("mbsc-lv-item-hl"), kt.navigateOnDrop ? K(ge, function () {
							Zt.add(null, Xe, re, null, ie, !0), J(Xe), u(Xe, at, n, !0)
						}) : (Zt.add(null, Xe, re, null, a.parent, !0), u(Xe, at, n, !0))) : (t = Tt[0].offsetTop - na, N(Xe, t, 6 * Math.abs(t - Math.max(ct, Math.min(be + Gt, lt))), function () {
						F(Xe), Xe.insertBefore(Tt), u(Xe, at, n, re !== at)
					})), xe = !1) : !Dt && Math.abs(pe) < 5 && Math.abs(be) < 5 && (Rt.tap && Rt.tap.call(Qt, {
						target: Xe
						, index: at
						, domEvent: e
					}, Zt), zt && ("touchend" === e.type && b(), Xe.addClass("mbsc-lv-item-active"), Ce("onItemActivate", {
						target: Xe[0]
						, domEvent: e
					})), !1 !== Ce("onItemTap", {
						target: Xe[0]
						, index: at
						, domEvent: e
					}) && K(Xe)), clearTimeout(Q), setTimeout(function () {
						i.removeClass("mbsc-lv-item-active"), Ce("onItemDeactivate", {
							target: i[0]
						})
					}, 100), Dt = !1, de = null)
			}

			function i() {
				(Et = H(Rt.swipe, {
					target: Xe[0]
					, index: at
					, direction: pe > 0 ? "right" : "left"
				})) && (A(), clearTimeout(Q), Rt.actions ? (Z = R(Rt, pe), dt.html(Rt.icons)
						.show()
						.children()
						.css("width", Z + "%"), Be.hide(), Je(".mbsc-lv-ic-m", Ke)
						.removeClass("mbsc-lv-ic-disabled"), Je(Rt.leftMenu)
						.each(y), Je(Rt.rightMenu)
						.each(y)) : (Be.show(), dt.hide(), me = Rt.start + (pe > 0 ? 0 : 1), wt = It[me - 1], ht = It[me]), Xe.addClass("mbsc-lv-item-swiping")
					.removeClass("mbsc-lv-item-active"), jt.css("line-height", Qe + "px"), Ke.css({
						top: na
						, height: Qe
						, backgroundColor: j(pe)
					})
					.addClass("mbsc-lv-stage-c-v")
					.appendTo(ie.parent()), kt.iconSlide && Xe.append(Be), Ce("onSlideStart", {
						target: Xe[0]
						, index: at
					}))
			}

			function o() {
				var e = !1;
				Ct || (Rt.actions ? Ke.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (ee < 0 ? "right" : "left")) : (wt && ee <= wt.percent ? (me--, ht = wt, wt = It[me], e = !0) : ht && ee >= ht.percent && (me++, wt = ht, ht = It[me], e = !0), e && (de = ee > 0 ? wt : ht) && (V(de, kt.iconSlide), Ce("onStageChange", {
					target: Xe[0]
					, index: at
					, stage: de
				}))), Nt || (Ct = !0, Mt = ze(S)))
			}

			function c(e) {
				var t, a, n, s = !1;
				je(Mt), Ct = !1, Nt || S(), Rt.actions ? Math.abs(ee) > 10 && Z && (C(Xe, ee < 0 ? -Z : Z, 200), s = !0, da = !0, ae = Xe, ne = at, Je(document)
					.on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (t) {
						t.preventDefault(), M(Xe, !0, e)
					})) : ee && (kt.quickSwipe && !Nt && (n = new Date - Ft, t = n < 300 && pe < -50, a = n < 300 && pe > 50, t ? (St = !0, de = Rt.left, V(de, kt.iconSlide)) : a && (St = !0, de = Rt.right, V(de, kt.iconSlide))), de && de.action && ((fe = H(de.disabled, {
					target: Xe[0]
					, index: at
				})) || (s = !0, da = Nt || H(de.confirm, {
					target: Xe[0]
					, index: at
				}), da ? (C(Xe, (ee < 0 ? -1 : 1) * Be[0].offsetWidth * 100 / Ge, 200, !0), w(de, Xe, at, !1, e)) : _(de, Xe, at, e)))), s || M(Xe, !0, e), Et = !1
			}

			function d() {
				xe = !0, ve = !1, ge = !1, Gt = 0, re = at, kt.vibrate && p(), mt = z(Xe, "next"), ut = mt.length && mt[0].offsetTop, yt = z(Xe, "prev"), _t = yt.length && yt[0].offsetTop + yt[0].offsetHeight, Tt.height(Qe)
					.insertAfter(Xe), Xe.css({
						top: na
					})
					.addClass("mbsc-lv-item-dragging")
					.removeClass("mbsc-lv-item-active")
					.appendTo(_e), Ce("onSortStart", {
						target: Xe[0]
						, index: re
					})
			}

			function u(e, t, a, n) {
				e.removeClass("mbsc-lv-item-dragging"), Tt.remove(), Ce("onSortEnd", {
					target: e[0]
					, index: re
				}), kt.vibrate && p(), n && (Zt.addUndoAction(function (n) {
					Zt.move(e, t, null, n, a, !0)
				}, !0), Ce("onSortUpdate", {
					target: e[0]
					, index: re
				}))
			}

			function h() {
				vt || (clearTimeout($e), da && Je(document)
					.trigger("touchstart"), Le && (Zt.close(He, Pe), Le = !1, He = null))
			}

			function v() {
				clearTimeout(ue), ue = setTimeout(function () {
					Ut = qt[0].innerHeight || qt.innerHeight(), Xt = Ie ? qt.offset()
						.top : 0, X && (na = Xe[0].offsetTop, Qe = Xe[0].offsetHeight, Ke.css({
							top: na
							, height: Qe
						}))
				}, 200)
			}

			function x(e) {
				bt && (e.stopPropagation(), e.preventDefault(), bt = !1)
			}

			function T() {
				if (xe || !X) {
					var e, t = qt.scrollTop()
						, a = ea.offset()
						.top
						, n = ea[0].offsetHeight
						, s = Ie ? qt.offset()
						.top : t;
					Je(".mbsc-lv-gr-title", ea)
						.each(function (t, a) {
							Je(a)
								.offset()
								.top < s && (e = a)
						}), a < s && a + n > s ? Ne.show()
						.empty()
						.append(Je(e)
							.clone()) : Ne.hide()
				}
			}

			function y(e, t) {
				H(t.disabled, {
						target: Xe[0]
						, index: at
					}) && Je(".mbsc-ic-" + t.icon, Ke)
					.addClass("mbsc-lv-ic-disabled")
			}

			function _(e, t, a, n) {
				var s, r = {
					icon: "undo2"
					, text: kt.undoText
					, color: "#b1b1b1"
					, action: function () {
						Zt.undo()
					}
				};
				e.undo && (Zt.startActionTrack(), Je.isFunction(e.undo) && Zt.addUndoAction(function () {
					e.undo.call(Qt, {
						target: t[0]
						, index: a
					}, Zt)
				}), Bt = t.attr("data-ref")), s = e.action.call(Qt, {
					target: t[0]
					, index: a
				}, Zt), e.undo ? (Zt.endActionTrack(), !1 !== s && C(t, +t.attr("data-pos") < 0 ? -100 : 100, 200), Tt.height(Qe)
					.insertAfter(t), t.css("top", na)
					.addClass("mbsc-lv-item-undo"), dt.hide(), Be.show(), Ke.append(Be), V(r), w(r, t, a, !0, n)) : M(t, s, n)
			}

			function w(e, t, a, n, s) {
				var r, i;
				da = !0, Je(document)
					.off(".mbsc-lv-conf")
					.on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (e) {
						e.preventDefault(), n && O(t), M(t, !0, s)
					}), he || Be.off(".mbsc-lv-conf")
					.on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (e) {
						e.stopPropagation(), r = g(e, "X"), i = g(e, "Y")
					})
					.on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function (o) {
						o.preventDefault(), "touchend" === o.type && b(), Math.abs(g(o, "X") - r) < 10 && Math.abs(g(o, "Y") - i) < 10 && (_(e, t, a, s), n && (Kt = null, O(t)))
					})
			}

			function S() {
				C(Xe, Ot + 100 * pe / Ge), Ct = !1
			}

			function M(e, t, a) {
				Je(document)
					.off(".mbsc-lv-conf"), Be.off(".mbsc-lv-conf"), !1 !== t ? C(e, 0, "0" !== e.attr("data-pos") ? 200 : 0, !1, function () {
						I(e, a), F(e)
					}) : I(e, a), da = !1
			}

			function C(e, t, a, n, s) {
				t = Math.max("right" == Et ? 0 : -100, Math.min(t, "left" == Et ? 0 : 100)), Pt = e[0].style, e.attr("data-pos", t), Pt[tt + "Transform"] = "translate3d(" + (n ? Ge * t / 100 + "px" : t + "%") + ",0,0)", Pt[tt + "Transition"] = et + "transform " + (a || 0) + "ms", s && (ta++, setTimeout(function () {
					s(), ta--
				}, a)), ee = t
			}

			function N(e, t, a, n) {
				t = Math.max(ct, Math.min(t, lt)), Pt = e[0].style, Pt[tt + "Transform"] = "translate3d(0," + t + "px,0)", Pt[tt + "Transition"] = et + "transform " + (a || 0) + "ms ease-out", n && (ta++, setTimeout(function () {
					n(), ta--
				}, a))
			}

			function A() {
				clearTimeout(Wt), !te && Zt.sortable && (te = !0, ke.remove())
			}

			function V(e, t) {
				var a = H(e.text, {
					target: Xe[0]
					, index: at
				}) || "";
				H(e.disabled, {
						target: Xe[0]
						, index: at
					}) ? Ke.addClass("mbsc-lv-ic-disabled") : Ke.removeClass("mbsc-lv-ic-disabled"), Ke.css("background-color", e.color || (0 === e.percent ? j(ee) : ha)), Be.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (t ? "move-" : "") + (ee < 0 ? "right" : "left")), Re.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (e.icon || "none")), jt.attr("class", "mbsc-lv-ic-text" + (e.icon ? "" : " mbsc-lv-ic-text-only") + (a ? "" : " mbsc-lv-ic-only"))
					.html(a || "&nbsp;"), kt.animateIcons && (St ? Re.addClass("mbsc-lv-ic-v") : setTimeout(function () {
						Re.addClass("mbsc-lv-ic-a")
					}, 10))
			}

			function I(e, t) {
				X || (Re.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Ke.attr("style", "")
					.removeClass("mbsc-lv-stage-c-v"), jt.html("")), Ke.removeClass("mbsc-lv-left mbsc-lv-right"), e && (Ce("onSlideEnd", {
					target: e[0]
					, index: at
				}), t && t())
			}

			function O(e) {
				e.css("top", "")
					.removeClass("mbsc-lv-item-undo"), Kt ? Zt.animate(Tt, "collapse", function () {
						Tt.remove()
					}) : Tt.remove(), I(), Bt = null, Kt = null
			}

			function F(e) {
				Pt = e[0].style, Pt[tt + "Transform"] = "", Pt[tt + "Transition"] = "", Pt.top = "", e.removeClass("mbsc-lv-item-swiping")
			}

			function H(e, t) {
				return Je.isFunction(e) ? e.call(this, t, Zt) : e
			}

			function L(e) {
				var t, a = e.attr("data-role");
				if (e.attr("data-ref") || (t = ua++, e.attr("data-ref", t), ia[t] = {
						item: e
						, child: e.children(ot)
						, parent: e.parent()
						, ref: e.parent()[0] === Qt ? null : e.parent()
							.parent()
							.attr("data-ref")
					}), e.addClass("list-divider" == a ? "mbsc-lv-gr-title" : "mbsc-lv-item"), Zt.sortable.handle && "list-divider" != a && !e.children(".mbsc-lv-handle-c")
					.length && e.append(Oe), kt.enhance && !e.hasClass("mbsc-lv-item-enhanced")) {
					var n = e.attr("data-icon")
						, s = e.find("img")
						.eq(0)
						.addClass("mbsc-lv-img");
					s.is(":first-child") ? e.addClass("mbsc-lv-img-" + (kt.rtl ? "right" : "left")) : s.length && e.addClass("mbsc-lv-img-" + (kt.rtl ? "left" : "right")), e.addClass("mbsc-lv-item-enhanced")
						.children()
						.each(function (e, t) {
							t = Je(t), t.is("p, h1, h2, h3, h4, h5, h6") && t.addClass("mbsc-lv-txt")
						}), n && e.addClass("mbsc-lv-item-ic-" + (e.attr("data-icon-align") || (kt.rtl ? "right" : "left")))
						.append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + n + '"></div>')
				}
			}

			function P(e) {
				Je(st, e)
					.not(".mbsc-lv-item")
					.each(function () {
						L(Je(this))
					}), Je(ot, e)
					.not(".mbsc-lv")
					.addClass("mbsc-lv")
					.prepend(Ye)
					.parent()
					.addClass("mbsc-lv-parent")
					.prepend(We), Je(".mbsc-lv-back", e)
					.each(function () {
						Je(this)
							.attr("data-back", Je(this)
								.parent()
								.parent()
								.attr("data-ref"))
					})
			}

			function E(e) {
				return e.children(st)
					.not(".mbsc-lv-back")
					.not(".mbsc-lv-removed")
					.not(".mbsc-lv-ph")
			}

			function $(e) {
				return "object" !== (void 0 === e ? "undefined" : ye(e)) && (e = Je(st, se)
					.filter('[data-id="' + e + '"]')), Je(e)
			}

			function Y(e) {
				for (var t = 0, a = ia[e.attr("data-ref")]; a && a.ref;) t++, a = ia[a.ref];
				return t
			}

			function z(e, t) {
				for (e = e[t](); e.length && (!e.hasClass("mbsc-lv-item") || e.hasClass("mbsc-lv-ph") || e.hasClass("mbsc-lv-item-dragging"));) {
					if (!Zt.sortable.group && e.hasClass("mbsc-lv-gr-title")) return !1;
					e = e[t]()
				}
				return e
			}

			function j(e) {
				return (e > 0 ? Rt.right : Rt.left)
					.color || ha
			}

			function W(e) {
				return m(e) ? e + "" : 0
			}

			function R(e, t) {
				return +(t < 0 ? W((e.actionsWidth || 0)
					.right) || W(e.actionsWidth) || W(kt.actionsWidth.right) || W(kt.actionsWidth) : W((e.actionsWidth || 0)
					.left) || W(e.actionsWidth) || W(kt.actionsWidth.left) || W(kt.actionsWidth))
			}

			function J(e, t) {
				if (e) {
					var a = qt.scrollTop()
						, n = e.is(".mbsc-lv-item") ? e[0].offsetHeight : 0
						, s = e.offset()
						.top + (Ie ? a - Xt : 0);
					t ? (s < a || s + n > a + Ut) && qt.scrollTop(s) : s < a ? qt.scrollTop(s) : s + n > a + Ut && qt.scrollTop(Math.min(s, s + n - Ut / 2))
				}
			}

			function B(e, t, a, n, s) {
				var r = t.parent()
					, i = t.prev();
				n = n || l, i[0] === Be[0] && (i = Be.prev()), ie[0] !== t[0] ? (Ce("onNavStart", {
					level: aa
					, direction: e
					, list: t[0]
				}), At.prepend(t.addClass("mbsc-lv-v mbsc-lv-sl-new")), J(se), q(At, "mbsc-lv-sl-" + e, function () {
					ie.removeClass("mbsc-lv-sl-curr"), t.removeClass("mbsc-lv-sl-new")
						.addClass("mbsc-lv-sl-curr"), oe && oe.length ? ie.removeClass("mbsc-lv-v")
						.insertAfter(oe) : le.append(ie.removeClass("mbsc-lv-v")), oe = i, le = r, ie = t, J(a, s), n.call(Qt, a), Ce("onNavEnd", {
							level: aa
							, direction: e
							, list: t[0]
						})
				})) : (J(a, s), n.call(Qt, a))
			}

			function K(e, t) {
				ta || (e.hasClass("mbsc-lv-parent") ? (aa++, B("r", ia[e.attr("data-ref")].child, null, t)) : e.hasClass("mbsc-lv-back") && (aa--, B("l", ia[e.attr("data-back")].parent, ia[e.attr("data-back")].item, t)))
			}

			function q(e, t, a) {
				function n() {
					clearTimeout(s), ta--, e.off(Ze, n)
						.removeClass(t), a.call(Qt, e)
				}
				var s;
				a = a || l, kt.animation && "mbsc-lv-item-none" !== t ? (ta++, e.on(Ze, n)
					.addClass(t), s = setTimeout(n, 500)) : a.call(Qt, e)
			}

			function U(e, t) {
				var a, n = e.attr("data-ref");
				a = ra[n] = ra[n] || [], t && a.push(t), e.attr("data-action") || (t = a.shift(), e.attr("data-action", 1), t(function () {
					e.removeAttr("data-action"), a.length ? U(e) : delete ra[n]
				}))
			}

			function G(e, t, a) {
				var n, s;
				e && e.length && (n = 100 / (e.length + 2), Je.each(e, function (r, i) {
					void 0 === i.key && (i.key = Vt++), void 0 === i.percent && (i.percent = t * n * (r + 1), a && (s = qe({}, i), s.key = Vt++, s.percent = -n * (r + 1), e.push(s), sa[s.key] = s)), sa[i.key] = i
				}))
			}
			var X, Z, Q, ee, te, ae, ne, se, re, ie, oe, le, ce, de, me, ue, he, fe, pe, be, ve, ge, xe, _e, we, Se, Me, Ce, ke, De, Ne, Ae, Ve, Ie, Oe, Fe, He, Le, Pe, Ee, $e, Ye, We, Re, Be, Ke, Ge, Xe, Qe, at, nt, st, rt, it, ot, lt, ct, dt, mt, ut, ht, ft, pt, bt, vt, gt, xt, Tt, yt, _t, wt, St, Mt, Ct, kt, Dt, Nt, At, Vt, It, Ot, Ft, Ht, Lt, Pt, Et, $t, Yt, zt, jt, Wt, Rt, Jt, Bt, Kt, qt, Ut, Gt, Xt, Zt = this
				, Qt = e
				, ea = Je(Qt)
				, ta = 0
				, aa = 0
				, na = 0
				, sa = {}
				, ra = {}
				, ia = {};
			Ue.call(this, e, t, !0), Zt.animate = function (e, t, a) {
				q(e, "mbsc-lv-item-" + t, a)
			}, Zt.add = function (e, t, a, n, s, r) {
				var i, o, c, d, m, u, h = ""
					, f = void 0 === s ? ea : $(s)
					, p = f
					, b = Je("object" !== (void 0 === t ? "undefined" : ye(t)) ? "<" + nt + ' data-ref="' + ua++ + '" data-id="' + e + '">' + t + "</" + nt + ">" : t)
					, v = b.attr("data-pos") < 0 ? "left" : "right"
					, g = b.attr("data-ref");
				n = n || l, g || (g = ua++, b.attr("data-ref", g)), L(b), r || Zt.addUndoAction(function (e) {
					d ? Zt.navigate(f, function () {
						p.remove(), f.removeClass("mbsc-lv-parent")
							.children(".mbsc-lv-arr")
							.remove(), m.child = f.children(ot), Zt.remove(b, null, e, !0)
					}) : Zt.remove(b, null, e, !0)
				}, !0), U(b, function (e) {
					F(b.css("top", "")
							.removeClass("mbsc-lv-item-undo")), f.is(st) ? (u = f.attr("data-ref"), f.children(ot)
							.length || (d = !0
								, f.append("<" + it + "></" + it + ">"))) : u = f.children(".mbsc-lv-back")
						.attr("data-back"), m = ia[u], m && (m.child.length ? p = m.child : (f.addClass("mbsc-lv-parent")
							.prepend(We), p = f.children(ot)
							.prepend(Ye)
							.addClass("mbsc-lv"), m.child = p, Je(".mbsc-lv-back", f)
							.attr("data-back", u))), ia[g] = {
							item: b
							, child: b.children(ot)
							, parent: p
							, ref: u
						}, c = E(p), o = c.length, void 0 !== a && null !== a || (a = o), r && (h = "mbsc-lv-item-new-" + (r ? v : "")), P(b.addClass(h)), !1 !== a && (o ? a < o ? b.insertBefore(c.eq(a)) : b.insertAfter(c.eq(o - 1)) : (i = Je(".mbsc-lv-back", p), i.length ? b.insertAfter(i) : p.append(b))), p.hasClass("mbsc-lv-v") ? Zt.animate(b.height(b[0].offsetHeight), r && Bt === g ? "none" : "expand", function (t) {
							Zt.animate(t.height(""), r ? "add-" + v : "pop-in", function (t) {
								n.call(Qt, t.removeClass(h)), e()
							})
						}) : (n.call(Qt, b.removeClass(h)), e()), se.trigger("mbsc-refresh"), Ce("onItemAdd", {
							target: b[0]
						})
				})
			}, Zt.swipe = function (e, t, n, s, r) {
				e = $(e), Xe = e, he = s, Nt = !0, X = !0, n = void 0 === n ? 300 : n, pe = t > 0 ? 1 : -1, a(), i(), C(e, t, n), clearTimeout(Yt), clearInterval($t), $t = setInterval(function () {
					ee = D(e) / Ge * 100, o()
				}, 10), Yt = setTimeout(function () {
					clearInterval($t), ee = t, o(), c(r), he = !1, Nt = !1, X = !1
				}, n)
			}, Zt.openStage = function (e, t, a, n) {
				sa[t] && Zt.swipe(e, sa[t].percent, a, n)
			}, Zt.openActions = function (e, t, a, n) {
				e = $(e);
				var s = R(Jt[e.attr("data-type") || "defaults"], "left" == t ? -1 : 1);
				Zt.swipe(e, "left" == t ? -s : s, a, n)
			}, Zt.close = function (e, t) {
				Zt.swipe(e, 0, t)
			}, Zt.remove = function (e, t, a, n) {
				var s, r, i;
				a = a || l, e = $(e), e.length && (r = e.parent(), s = E(r)
					.index(e), i = e[0].style, n || (e.attr("data-ref") === Bt && (Kt = !0), Zt.addUndoAction(function (t) {
						Zt.add(null, e, s, t, r, !0)
					}, !0)), U(e, function (s) {
						t = t || (e.attr("data-pos") < 0 ? "left" : "right"), r.hasClass("mbsc-lv-v") ? Zt.animate(e.addClass("mbsc-lv-removed"), n ? "pop-out" : "remove-" + t, function (e) {
							i.height = e[0].offsetHeight + "px", Zt.animate(e, "collapse", function (e) {
								i.height = "", F(e.removeClass("mbsc-lv-removed")), !1 !== a.call(Qt, e) && e.remove(), s()
							})
						}) : (!1 !== a.call(Qt, e) && e.remove(), s()), Ce("onItemRemove", {
							target: e[0]
						})
					}))
			}, Zt.move = function (e, t, a, n, s, r) {
				e = $(e), r || Zt.startActionTrack(), Ke.append(Be), Zt.remove(e, a, null, r), Zt.add(null, e, t, n, s, r), r || Zt.endActionTrack()
			}, Zt.navigate = function (e, t) {
				var a, n;
				e = $(e), a = ia[e.attr("data-ref")], n = Y(e), a && (B(n >= aa ? "r" : "l", a.parent, e, t, !0), aa = n)
			}, Zt._processSettings = function () {
				ea.is("[mbsc-enhance]") && (Ae = !0, ea.removeAttr("mbsc-enhance"))
			}, Zt._init = function () {
				var e, t, a, i = 0 , p = ea.find('ul,ol').length ? 'left' : 'right'
					, o = ""
					, l = ""
					, c = "";
				a = kt.sort || kt.sortable;
                    "group" === a && (a = {
                        group: !1,
                        multiLevel: !0
                    });
                    !0 === a && (a = {
                        group: !0,
                        multiLevel: !0,
                        handle: kt.sortHandle
                    });
                    a && a.handle === undefined && (a.handle = kt.sortHandle);
                    Zt.sortable = a || !1;
	            
	            var Za = !0 === Zt.sortable.handle ? p : Zt.sortable.handle;
				
				it = kt.listNode, ot = kt.listSelector, nt = kt.itemNode, st = kt.itemSelector, 
				Ve = Za || '',
				Ye = '<li class="mbsc-lv-item mbsc-lv-back">' + kt.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + kt.leftArrowClass + '"></div></li>';
				We = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + kt.rightArrowClass + '"></div>',
				e = 'mbsc-lv-cont '+( Za && 'mbsc-lv-handle-'+Za )+' mbsc-lv-' + kt.theme + (kt.rtl ? ' mbsc-lv-rtl' : '') + (kt.baseTheme ? ' mbsc-lv-' + kt.baseTheme : '') + (kt.animateIcons ? ' mbsc-lv-ic-anim' : '') + (kt.striped ? ' mbsc-lv-alt-row ' : '') + (kt.fixedHeader ? ' mbsc-lv-has-fixed-header ' : '');
                if (Zt.sortable.handle) {
	                Ye = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + Za + ' mbsc-lv-handle"><div class="' + kt.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + kt.handleMarkup + '</div></div>';
	            }
				
				se ? (se.attr("class", e), a.handle && Je(".mbsc-lv-handle-c", se)
					.remove(), Je(st, se)
					.not(".mbsc-lv-back")
					.removeClass("mbsc-lv-item")) : (o += '<div class="mbsc-lv-multi-c"></div>', o += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>', ea.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root")
					.show(), Ke = Je('<div class="mbsc-lv-stage-c">' + o + "</div>"), Be = Je(".mbsc-lv-ic-c", Ke), dt = Je(".mbsc-lv-multi-c", Ke), Re = Je(".mbsc-lv-ic-s", Ke), jt = Je(".mbsc-lv-ic-text", Ke), Tt = Je("<" + nt + ' class="mbsc-lv-item mbsc-lv-ph"></' + nt + ">"), ke = Je('<div class="mbsc-lv-fill-item"></div>'), se = Je('<div class="' + e + '"><' + it + ' class="mbsc-lv mbsc-lv-dummy"></' + it + '><div class="mbsc-lv-sl-c"></div></div>'), Ie = "body" !== kt.context, qt = Je(Ie ? kt.context : window), _e = Je(".mbsc-lv-dummy", se), se.insertAfter(ea), qt.on("orientationchange resize", v), v(), se.on("touchstart mousedown", ".mbsc-lv-item", n)
					.on("touchmove", ".mbsc-lv-item", s)
					.on("touchend touchcancel", ".mbsc-lv-item", r), Qt.addEventListener("click", x, !0), se.on("touchstart mousedown", ".mbsc-lv-ic-m", function (e) {
						he || (e.stopPropagation(), e.preventDefault()), Ht = g(e, "X"), Lt = g(e, "Y")
					})
					.on("touchend mouseup", ".mbsc-lv-ic-m", function (e) {
						he || ("touchend" === e.type && b(), da && !Je(this)
							.hasClass("mbsc-lv-ic-disabled") && Math.abs(g(e, "X") - Ht) < 10 && Math.abs(g(e, "Y") - Lt) < 10 && _((ee < 0 ? Rt.rightMenu : Rt.leftMenu)[Je(this)
								.index()], ae, ne))
					}), At = Je(".mbsc-lv-sl-c", se)
					.append(ea.addClass("mbsc-lv-sl-curr"))
					.attr("data-ref", ua++), ie = ea, le = se), P(ea), Vt = 0, Jt = kt.itemGroups || {}, Jt.defaults = {
					swipeleft: kt.swipeleft
					, swiperight: kt.swiperight
					, stages: kt.stages
					, actions: kt.actions
					, actionsWidth: kt.actionsWidth
				}, Je.each(Jt, function (e, t) {
					if (t.swipe = void 0 !== t.swipe ? t.swipe : kt.swipe, t.stages = t.stages || [], G(t.stages, 1, !0), G(t.stages.left, 1), G(t.stages.right, -1), (t.stages.left || t.stages.right) && (t.stages = [].concat(t.stages.left || [], t.stages.right || [])), De = !1, t.stages.length || (t.swipeleft && t.stages.push({
							percent: -30
							, action: t.swipeleft
						}), t.swiperight && t.stages.push({
							percent: 30
							, action: t.swiperight
						})), Je.each(t.stages, function (e, t) {
							if (0 === t.percent) return De = !0, !1
						}), De || t.stages.push({
							percent: 0
						}), t.stages.sort(function (e, t) {
							return e.percent - t.percent
						}), Je.each(t.stages, function (e, a) {
							if (0 === a.percent) return t.start = e, !1
						}), De ? t.left = t.right = t.stages[t.start] : (t.left = t.stages[t.start - 1] || {}, t.right = t.stages[t.start + 1] || {}), t.actions) {
						for (t.leftMenu = t.actions.left || t.actions, t.rightMenu = t.actions.right || t.leftMenu, l = "", c = "", i = 0; i < t.leftMenu.length; i++) l += "<div " + (t.leftMenu[i].color ? 'style="background-color: ' + t.leftMenu[i].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.leftMenu[i].icon + '">' + (t.leftMenu[i].text || "") + "</div>";
						for (i = 0; i < t.rightMenu.length; ++i) c += "<div " + (t.rightMenu[i].color ? 'style="background-color: ' + t.rightMenu[i].color + '"' : "") + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + t.rightMenu[i].icon + '">' + (t.rightMenu[i].text || "") + "</div>";
						t.actions.left && (t.swipe = t.actions.right ? t.swipe : "right"), t.actions.right && (t.swipe = t.actions.left ? t.swipe : "left"), t.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + l + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + c + "</div>"
					}
				}), kt.fixedHeader && (t = "mbsc-lv-fixed-header" + (Ie ? " mbsc-lv-fixed-header-ctx mbsc-lv-" + kt.theme + (kt.baseTheme ? " mbsc-lv-" + kt.baseTheme : "") : ""), Ne ? Ne.attr("class", t) : (Ne = Je('<div class="' + t + '"></div>'), Ie ? qt.before(Ne) : se.prepend(Ne), pt = f(T, 200), qt.on("scroll touchmove", pt))), kt.hover && (Pe || se.on("mouseover.mbsc-lv", ".mbsc-lv-item", function () {
						He && He[0] == this || (h(), He = Je(this), Jt[He.attr("data-type") || "defaults"].actions && ($e = setTimeout(function () {
							vt ? He = null : (Le = !0, Zt.openActions(He, Fe, Pe, !1))
						}, Ee)))
					})
					.on("mouseleave.mbsc-lv", h), Pe = kt.hover.time || 200, Ee = kt.hover.timeout || 200, Fe = kt.hover.direction || kt.hover || "right"), Ae && se.attr("mbsc-enhance", ""), se.trigger("mbsc-enhance", [{
					theme: kt.theme
					, lang: kt.lang
				}])
			}, Zt._destroy = function () {
				var e;
				le.append(ie), Ie && Ne && Ne.remove(), Ae && (ea.attr("mbsc-enhance", ""), (e = Te.instances[se[0].id]) && e.destroy()), Qt.removeEventListener("click", x, !0), se.find(".mbsc-lv-txt,.mbsc-lv-img")
					.removeClass("mbsc-lv-txt mbsc-lv-img"), se.find(ot)
					.removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr")
					.find(st)
					.removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right")
					.removeAttr("data-ref"), Je(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", se)
					.remove(), ea.insertAfter(se), se.remove(), Ke.remove(), qt.off("orientationchange resize", v), pt && qt.off("scroll touchmove", pt)
			};
			var oa, la = []
				, ca = []
				, ma = []
				, fa = 0;
			Zt.startActionTrack = function () {
				fa || (ma = []), fa++
			}, Zt.endActionTrack = function () {
				--fa || ca.push(ma)
			}, Zt.addUndoAction = function (e, t) {
				var a = {
					action: e
					, async: t
				};
				fa ? ma.push(a) : (ca.push([a]), ca.length > kt.undoLimit && ca.shift())
			}, Zt.undo = function () {
				function e() {
					n < 0 ? (oa = !1, t()) : (a = s[n], n--, a.async ? a.action(e) : (a.action(), e()))
				}

				function t() {
					(s = la.shift()) && (oa = !0, n = s.length - 1, e())
				}
				var a, n, s;
				ca.length && la.push(ca.pop()), oa || t()
			}, kt = Zt.settings, Ce = Zt.trigger, Zt.init(t)
		};
	fa.prototype = {
		_class: "listview"
		, _hasDef: !0
		, _hasTheme: !0
		, _hasLang: !0
		, _defaults: {
			context: "body"
			, actionsWidth: 90
			, sortDelay: 250
			, undoLimit: 10
			, swipe: !0
			, quickSwipe: !0
			, animateIcons: !0
			, animation: !0
			, revert: !0
			, vibrate: !0
			, handleClass: ""
			, handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>'
			, listNode: "ul"
			, listSelector: "ul,ol"
			, itemNode: "li"
			, itemSelector: "li"
			, leftArrowClass: "mbsc-ic-arrow-left4"
			, rightArrowClass: "mbsc-ic-arrow-right4"
			, backText: "Back"
			, undoText: "Undo"
			, stages: []
		}
	}, ma.ListView = fa, Te.themes.listview.mobiscroll = {
		leftArrowClass: "mbsc-ic-arrow-left5"
		, rightArrowClass: "mbsc-ic-arrow-right5"
	}, Te.presetShort("listview", "ListView");
	var pa, ba = +new Date
		, va = []
		, ga = {}
		, xa = {};
	try {
		pa = e.module("ngAnimate")
	} catch (e) {}
	pa && va.push("ngAnimate"), e.module("mobiscroll-listview", va)
		.directive("mobiscrollListviewItem", ["$compile", "$timeout", function (e, t) {
			return {
				link: function (a, n, s) {
					var r, i, o, l = Je(n[0])
						, c = l.parent("ul")
						, d = s.mobiscrollListviewItem
						, m = ga[d]
						, u = l.parents(".mbsc-lv-cont")
						.length;
					m.nodesLeft--, c && (u || 0 === m.nodesLeft) && (u ? (i = c.children("li")
						.not(".mbsc-lv-back")
						.index(l), l.hide(), t(c.hasClass("mbsc-lv-root") ? function () {
							r = Te.instances[c[0].id], r.add(null, l.show(), i, void 0, c)
						} : function () {
							c.prepend(c.children(".mbsc-lv-back")), o = c.parent("li"), r = Te.instances[m.rootNode[0].id], r.add(null, l.show(), i, void 0, o.length ? o : c)
						})) : a.$emit("mbscLvLastItemAdded", m.rootNode)), l.append(e('<div style="display:none;"><ul><li mobiscroll-listview-hitem="' + d + '" ng-repeat="item in item.children"></li></ul></div>')(a)[0])
				}
			}
		}])
		.directive("mobiscrollListviewHitem", ["$compile", "$timeout", function (e) {
			return {
				link: function (t, a, n) {
					var s = Je(a[0])
						, r = s.parent()
						, i = r.parent()
						.hasClass("mbsc-lv-ng-init")
						, o = n.mobiscrollListviewHitem;
					r.children("li")
						.not(".mbsc-lv-back")
						.length <= 1 && !i && r.parent()
						.addClass("mbsc-lv-ng-init")
						.parent()
						.append(e(Je("<ul></ul>")
							.append(le(xa[o], "item.children", o)))(t.$parent)[0]), t.$on("$destroy", function () {
							r && (r.children("li")
								.length || (r = r.parent()
									.parent()
									.children("ul"), r.remove()))
						})
				}
			}
		}])
		.directive("mobiscrollListview", ["$compile", "$parse", "$timeout", function (e, t, a) {
			return {
				restrict: "A"
				, require: "?ngModel"
				, compile: function (n) {
					var s, r = ba++
						, i = n.html()
						.replace(/(mbsc-ng-)|(ms-ng-)/g, "ng-")
						.trim();
					return function (n, o, l, c) {
						var d, m, u, h = Je(o[0]);
						c || l.mobiscrollData ? (d = n.$eval(l.mobiscrollListview || "{}"), u = l.mobiscrollData || l.ngModel) : (d = n.$eval(l.mobiscrollOptions || "{}"), u = l.mobiscrollListview);
						var f = ce(n.$eval(u));
						ga[r] && (r = ba++), ga[r] = {
								rootNode: h
								, allNodes: f
								, nodesLeft: f
							}, xa[r] = i, s = Je("<div></div>")
							.append(le(i, u, r)), h.empty()
							.append(Je(e(s)(n)[0])
								.contents()), n.$on("mbscLvLastItemAdded", function (e, s) {
								h[0] == s[0] && a(function () {
									m = new Te.classes.ListView(h[0], d), l.mobiscrollInstance && t(l.mobiscrollInstance)
										.assign(n, m)
								})
							}), n.$on("$destroy", function () {
								m && (m.destroy(), m = null)
							}), 0 === f && n.$emit("mbscLvLastItemAdded", h)
					}
				}
			}
		}]), pa && e.module("mobiscroll-listview")
		.animation(".mbsc-lv-item", function () {
			return {
				leave: function (e, t) {
					var a = Je(e[0]);
					Te.instances[a.closest(".mbsc-lv-cont")
						.find(".mbsc-lv-root")[0].id].remove(a, void 0, t)
				}
			}
		});
	var Ta = {
		batch: 50
		, min: 0
		, max: 100
		, defaultUnit: ""
		, units: null
		, unitNames: null
		, invalid: []
		, sign: !1
		, step: .05
		, scale: 2
		, convert: function (e) {
			return e
		}
		, signText: "&nbsp;"
		, wholeText: "Whole"
		, fractionText: "Fraction"
		, unitText: "Unit"
	};
	Te.presets.scroller.measurement = function (e) {
		function t(e) {
			return Math.max(g, Math.min(x, L ? e < 0 ? Math.ceil(e) : Math.floor(e) : r(Math.round(e - z), Y) + z))
		}

		function a(e) {
			return L ? r((Math.abs(e) - Math.abs(t(e))) * $ - j, Y) + j : 0
		}

		function n(e) {
			var n = t(e)
				, s = a(e)
				, r = e < 0 ? "-" : "+";
			return s >= $ && (e < 0 ? n-- : n++, s = 0), [r, n, s]
		}

		function s(e) {
			var t = +e[f]
				, a = L ? e[u] / $ * (t < 0 ? -1 : 1) : 0;
			return (I && "-" == e[0] ? -1 : 1) * (t + a)
		}

		function r(e, t) {
			return Math.round(e / t) * t
		}

		function i(e, t, a) {
			return t !== a && M.convert ? M.convert.call(this, e, t, a) : e
		}

		function o(e) {
			var t, n;
			b = i(M.min, F, e), v = i(M.max, F, e), L ? (g = b < 0 ? Math.ceil(b) : Math.floor(b), x = v < 0 ? Math.ceil(v) : Math.floor(v), T = a(b), y = a(v)) : (g = Math.round(b), x = Math.round(v), x = g + Math.floor((x - g) / Y) * Y, z = g % Y), t = g, n = x, I && (n = Math.abs(t) > Math.abs(n) ? Math.abs(t) : Math.abs(n), t = t < 0 ? 0 : t), N.min = t < 0 ? Math.ceil(t / P) : Math.floor(t / P), N.max = n < 0 ? Math.ceil(n / P) : Math.floor(n / P)
		}

		function l(e) {
			return s(e)
				.toFixed(L ? E : 0) + (O ? " " + H[e[p]] : "")
		}
		var c, d, m, u, f, p, b, v, g, x, T, y, _, w, S = qe({}, e.settings)
			, M = qe(e.settings, Ta, S)
			, C = {}
			, k = [[]]
			, D = {}
			, N = {}
			, A = {}
			, V = []
			, I = M.sign
			, O = M.units && M.units.length
			, F = O ? M.defaultUnit || M.units[0] : ""
			, H = []
			, L = M.step < 1
			, P = M.step > 1 ? M.step : 1
			, E = L ? Math.max(M.scale, (M.step + "")
				.split(".")[1].length) : 1
			, $ = Math.pow(10, E)
			, Y = Math.round(L ? M.step * $ : M.step)
			, z = 0
			, j = 0
			, W = 0;
		if (e.setVal = function (t, a, n, s, r) {
				e._setVal(Je.isArray(t) ? l(t) : t, a, n, s, r)
			}, M.units)
			for (w = 0; w < M.units.length; ++w) _ = M.units[w], H.push(M.unitNames ? M.unitNames[_] || _ : _);
		if (I)
			if (I = !1, O)
				for (w = 0; w < M.units.length; w++) i(M.min, F, M.units[w]) < 0 && (I = !0);
			else I = M.min < 0;
		if (I && (k[0].push({
				data: ["-", "+"]
				, label: M.signText
			}), W++), N = {
				label: M.wholeText
				, data: function (e) {
					return g % P + e * P
				}
				, getIndex: function (e) {
					return Math.round((e - g % P) / P)
				}
			}, k[0].push(N), f = W++, o(F), L) {
			for (k[0].push(A), A.data = [], A.label = M.fractionText, w = j; w < $; w += Y) V.push(w), A.data.push({
				value: w
				, display: "." + function (e, t) {
					for (e += ""; e.length < t;) e = "0" + e;
					return e
				}(w, E)
			});
			u = W++, c = Math.ceil(100 / Y), M.invalid && M.invalid.length && (Je.each(M.invalid, function (e, t) {
				var a = t > 0 ? Math.floor(t) : Math.ceil(t);
				0 === a && (a = t <= 0 ? -.001 : .001), D[a] = (D[a] || 0) + 1, 0 === t && (a = .001, D[a] = (D[a] || 0) + 1)
			}), Je.each(D, function (e, t) {
				t < c ? delete D[e] : D[e] = e
			}))
		}
		if (O) {
			for (C = {
					data: []
					, label: M.unitText
					, cssClass: "mbsc-msr-whl-unit"
					, circular: !1
				}, w = 0; w < M.units.length; w++) C.data.push({
				value: w
				, display: H[w]
			});
			k[0].push(C)
		}
		return p = W, {
			wheels: k
			, minWidth: I && L ? 70 : 80
			, showLabel: !1
			, formatValue: l
			, compClass: "mbsc-msr"
			, parseValue: function (e) {
				var t, a = ("number" == typeof e ? e + "" : e) || M.defaultValue
					, s = (a + "")
					.split(" ")
					, r = +s[0]
					, i = []
					, l = "";
				return O && (l = Je.inArray(s[1], H), l = -1 == l ? Je.inArray(F, M.units) : l, l = -1 == l ? 0 : l), m = O ? M.units[l] : "", o(m), r = isNaN(r) ? 0 : r, r = h(r, b, v), t = n(r), t[1] = h(t[1], g, x), d = r, I && (i[0] = t[0], t[1] = Math.abs(t[1])), i[f] = t[1], L && (i[u] = t[2]), O && (i[p] = l), i
			}
			, onCancel: function () {
				d = void 0
			}
			, validate: function (t) {
				var a, l, c, _, w, S = t.values
					, C = t.index
					, k = t.direction
					, A = {}
					, H = []
					, E = {}
					, $ = O ? M.units[S[p]] : "";
				if (I && 0 === C && (d = Math.abs(d) * ("-" == S[0] ? -1 : 1)), (C === f || C === u && L || void 0 === d || void 0 === C) && (d = s(S), m = $), (O && C === p && m !== $ || void 0 === C) && (o($), d = i(d, m, $), m = $, l = n(d), void 0 !== C && (E[f] = N, e.changeWheel(E)), I && (S[0] = l[0])), H[f] = [], I)
					for (H[0] = [], b > 0 && (H[0].push("-"), S[0] = "+"), v < 0 && (H[0].push("+"), S[0] = "-"), w = Math.abs("-" == S[0] ? g : x), W = w + P; W < w + 20 * P; W += P) H[f].push(W), A[W] = !0;
				if (d = h(d, b, v), l = n(d), c = I ? Math.abs(l[1]) : l[1], a = I ? "-" == S[0] : d < 0, S[f] = c, a && (l[0] = "-"), L && (S[u] = l[2]), Je.each(L ? D : M.invalid, function (e, t) {
						if (I && a) {
							if (!(t <= 0)) return;
							t = Math.abs(t)
						}
						t = r(i(t, F, $), L ? 1 : Y), A[t] = !0, H[f].push(t)
					}), S[f] = e.getValidValue(f, c, k, A), l[1] = S[f] * (I && a ? -1 : 1), L) {
					H[u] = [];
					var z = I ? S[0] + S[1] : (d < 0 ? "-" : "+") + Math.abs(l[1])
						, j = (b < 0 ? "-" : "+") + Math.abs(g)
						, R = (v < 0 ? "-" : "+") + Math.abs(x);
					z === j && Je(V)
						.each(function (e, t) {
							(a ? t > T : t < T) && H[u].push(t)
						}), z === R && Je(V)
						.each(function (e, t) {
							(a ? t < y : t > y) && H[u].push(t)
						}), Je.each(M.invalid, function (e, t) {
							_ = n(i(t, F, $)), (l[0] === _[0] || 0 === l[1] && 0 === _[1] && 0 === _[2]) && l[1] === _[1] && H[u].push(_[2])
						})
				}
				return {
					disabled: H
					, valid: S
				}
			}
		}
	}, Te.presetShort("measurement");
	var ya = Te.presets.scroller
		, _a = {
			min: 0
			, max: 100
			, defaultUnit: "km"
			, units: ["m", "km", "in", "ft", "yd", "mi"]
		}
		, wa = {
			mm: .001
			, cm: .01
			, dm: .1
			, m: 1
			, dam: 10
			, hm: 100
			, km: 1e3
			, in: .0254
			, ft: .3048
			, yd: .9144
			, ch: 20.1168
			, fur: 201.168
			, mi: 1609.344
			, lea: 4828.032
		};
	Te.presetShort("distance"), ya.distance = function (e) {
		var t = qe({}, _a, e.settings);
		return qe(e.settings, t, {
			sign: !1
			, convert: function (e, t, a) {
				return e * wa[t] / wa[a]
			}
		}), ya.measurement.call(this, e)
	};
	var Sa = Te.presets.scroller
		, Ma = {
			min: 0
			, max: 100
			, defaultUnit: "N"
			, units: ["N", "kp", "lbf", "pdl"]
		}
		, Ca = {
			N: 1
			, kp: 9.80665
			, lbf: 4.448222
			, pdl: .138255
		};
	Te.presetShort("force"), Sa.force = function (e) {
		var t = qe({}, Ma, e.settings);
		return qe(e.settings, t, {
			sign: !1
			, convert: function (e, t, a) {
				return e * Ca[t] / Ca[a]
			}
		}), Sa.measurement.call(this, e)
	};
	var ka = Te.presets.scroller
		, Da = {
			min: 0
			, max: 1e3
			, defaultUnit: "kg"
			, units: ["g", "kg", "oz", "lb"]
			, unitNames: {
				tlong: "t (long)"
				, tshort: "t (short)"
			}
		}
		, Na = {
			mg: .001
			, cg: .01
			, dg: .1
			, g: 1
			, dag: 10
			, hg: 100
			, kg: 1e3
			, t: 1e6
			, drc: 1.7718452
			, oz: 28.3495
			, lb: 453.59237
			, st: 6350.29318
			, qtr: 12700.58636
			, cwt: 50802.34544
			, tlong: 1016046.9088
			, tshort: 907184.74
		};
	Te.presetShort("mass"), ka.mass = function (e) {
		var t = qe({}, Da, e.settings);
		return qe(e.settings, t, {
			sign: !1
			, convert: function (e, t, a) {
				return e * Na[t] / Na[a]
			}
		}), ka.measurement.call(this, e)
	};
	var Aa = Te.presets.scroller
		, Va = {
			min: 0
			, max: 100
			, defaultUnit: "kph"
			, units: ["kph", "mph", "mps", "fps", "knot"]
			, unitNames: {
				kph: "km/h"
				, mph: "mi/h"
				, mps: "m/s"
				, fps: "ft/s"
				, knot: "knot"
			}
		}
		, Ia = {
			kph: 1
			, mph: 1.60934
			, mps: 3.6
			, fps: 1.09728
			, knot: 1.852
		};
	Te.presetShort("speed"), Aa.speed = function (e) {
		var t = qe({}, Va, e.settings);
		return qe(e.settings, t, {
			sign: !1
			, convert: function (e, t, a) {
				return e * Ia[t] / Ia[a]
			}
		}), Aa.measurement.call(this, e)
	};
	var Oa = Te.presets.scroller
		, Fa = {
			min: -20
			, max: 40
			, defaultUnit: "c"
			, units: ["c", "k", "f", "r"]
			, unitNames: {
				c: "°C"
				, k: "K"
				, f: "°F"
				, r: "°R"
			}
		}
		, Ha = {
			c2k: function (e) {
				return e + 273.15
			}
			, c2f: function (e) {
				return 9 * e / 5 + 32
			}
			, c2r: function (e) {
				return 9 * (e + 273.15) / 5
			}
			, k2c: function (e) {
				return e - 273.15
			}
			, k2f: function (e) {
				return 9 * e / 5 - 459.67
			}
			, k2r: function (e) {
				return 9 * e / 5
			}
			, f2c: function (e) {
				return 5 * (e - 32) / 9
			}
			, f2k: function (e) {
				return 5 * (e + 459.67) / 9
			}
			, f2r: function (e) {
				return e + 459.67
			}
			, r2c: function (e) {
				return 5 * (e - 491.67) / 9
			}
			, r2k: function (e) {
				return 5 * e / 9
			}
			, r2f: function (e) {
				return e - 459.67
			}
		};
	Te.presetShort("temperature"), Oa.temperature = function (e) {
			var t = qe({}, Fa, e.settings);
			return qe(e.settings, t, {
				sign: !0
				, convert: function (e, t, a) {
					return Ha[t + "2" + a](e)
				}
			}), Oa.measurement.call(this, e)
		}, e.module("mobiscroll-measurement", [])
		.directive("mobiscrollMeasurement", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollMeasurement", {
				preset: "measurement"
			})
		}])
		.directive("mobiscrollTemperature", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollTemperature", {
				preset: "temperature"
			})
		}])
		.directive("mobiscrollSpeed", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollSpeed", {
				preset: "speed"
			})
		}])
		.directive("mobiscrollMass", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollMass", {
				preset: "mass"
			})
		}])
		.directive("mobiscrollForce", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollForce", {
				preset: "force"
			})
		}])
		.directive("mobiscrollDistance", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollDistance", {
				preset: "distance"
			})
		}]);
	var La = 1
		, Pa = function (e, t, a) {
			function n(e) {
				clearTimeout(b), b = setTimeout(function () {
					i("load" !== e.type)
				}, 200)
			}

			function s(t, a) {
				if (t.length) {
					if (a = k._onItemTap(t, a), o = t, t.parent()[0] == e) {
						var n = t.offset()
							.left
							, s = t[0].offsetLeft
							, r = t[0].offsetWidth
							, i = c.offset()
							.left;
						g && (s = _ - s - r), "a" == y.variant ? n < i ? x.scroll(g ? s + r - h : -s, C, !0) : n + r > i + h && x.scroll(g ? s : h - s - r, C, !0) : x.scroll(h / 2 - s - r / 2, C, !0)
					}
					a && S("onItemTap", {
						target: t[0]
					})
				}
			}

			function r() {
				var e, t;
				k._initMarkup(c), D.find(".mbsc-ripple")
					.remove(), k._$items = D.children(), k._$items.each(function (a) {
						var n, s = Je(this)
							, r = s.attr("data-ref");
						r || (r = La++), 0 === a && (e = s), o || (o = k._getActiveItem(s)), t = k._getItemProps(s) || {}, n = "mbsc-scv-item " + (t.cssClass || ""), s.attr("data-ref", r)
							.removeClass(M[r])
							.addClass(n), M[r] = n
					}), o || (o = e), k._markupReady(c)
			}

			function i(t, a) {
				var n = y.itemWidth
					, s = y.layout;
				k.contWidth = h = c.width(), t && p === h || !h || (p = h, m(s) && (f = h ? h / s : n) < n && (s = "liquid"), n && ("liquid" == s ? f = h ? h / Math.min(Math.floor(h / n), k._$items.length) : n : "fixed" == s && (f = n)), k._size(h, f), f && D.children()
					.css("width", f + "px"), k.totalWidth = _ = e.offsetWidth, qe(x.settings, {
						contSize: h
						, maxSnapScroll: !!y.paging && 1
						, maxScroll: 0
						, minScroll: _ > h ? h - _ : 0
						, snap: y.paging ? h : !!T && (f || ".mbsc-scv-item")
						, elastic: _ > h && (f || h)
					}), x.refresh(a))
			}
			var o, c, d, u, h, f, p, b, g, x, T, y, _, w, S, M = {}
				, C = 1e3
				, k = this
				, D = Je(e);
			Ue.call(this, e, t, !0), k.navigate = function (e, t) {
				s(k._getItem(e), t)
			}, k.next = function (e) {
				if (o) {
					var t = o.next();
					t.length && (o = t, s(o, e))
				}
			}, k.prev = function (e) {
				if (o) {
					var t = o.prev();
					t.length && (o = t, s(o, e))
				}
			}, k.refresh = k.position = function (e) {
				r(), i(!1, e)
			}, k._init = function () {
				var e;
				if(y.itemWidth && y.snap == undefined){
                	y.snap = true;
                }
				d = Je(y.context), u = Je("body" == y.context ? window : y.context), k.__init(), 
				g = y.rtl, 
				T = y.snap, 
				e = "mbsc-scv-c mbsc-"+y.theme+" "+(y.cssClass || '') +" "+ (g ? 'mbsc-rtl':'') + " mbsc-ltr" + (k._getContClass() || ""), c ? (c.attr("class", e), D.off(".mbsc-ripple")) : (c = Je('<div class="' + e + '"><div class="mbsc-scv-sc"></div></div>')
						.insertAfter(D), c.find(".mbsc-scv-sc")
						.append(D), x = new pt(c[0], {
							axis: "X"
							, contSize: 0
							, maxScroll: 0
							, maxSnapScroll: 1
							, minScroll: 0
							, snap: 1
							, elastic: 1
							, rtl: g
							, mousewheel: y.mousewheel
							, thresholdX: y.threshold
							, onStart: function (e) {
								w || "touchstart" != e.domEvent.type || (w = !0, d.find(".mbsc-no-touch")
									.removeClass("mbsc-no-touch"))
							}
							, onBtnTap: function (e) {
								"touchend" === e.domEvent.type && v(e.domEvent, e.target), s(Je(e.target), !0)
							}
							, onGestureStart: function (e) {
								S("onGestureStart", e)
							}
							, onGestureEnd: function (e) {
								S("onGestureEnd", e)
							}
							, onMove: function (e) {
								S("onMove", e)
							}
							, onAnimationStart: function (e) {
								S("onAnimationStart", e)
							}
							, onAnimationEnd: function (e) {
								S("onAnimationEnd", e)
							}
						})), D.css("display", "")
					.addClass("mbsc-scv"), r(), S("onMarkupReady", {
						target: c[0]
					}), i(), c.find("img")
					.on("load", n), u.on("orientationchange resize", n)
			}, k._size = l, k._initMarkup = l, k._markupReady = l, k._onItemTap = l, k._getContClass = l, k._getItemProps = l, k._getActiveItem = l, k.__init = l, k.__destroy = l, k._destroy = function () {
				k.__destroy(), u.off("orientationchange resize", n), D.removeClass("mbsc-scv")
					.insertAfter(c)
					.find(".mbsc-scv-item")
					.each(function () {
						var e = Je(this);
						e.width("")
							.removeClass(M[e.attr("data-ref")])
					}), c.remove(), x.destroy()
			}, k._getItem = function (e) {
				return "object" !== (void 0 === e ? "undefined" : ye(e)) && (e = k._$items.filter('[data-id="' + e + '"]')), Je(e)
			}, y = k.settings, S = k.trigger, a || k.init(t)
		};
	Pa.prototype = {
		_class: "scrollview"
		, _hasDef: !0
		, _hasTheme: !0
		, _hasLang: !0
		, _defaults: {
			tap: !0
			, context: "body"
			, layout: "liquid"
		}
	}, Te.classes.ScrollView = Pa, Te.presetShort("scrollview", "ScrollView");
	var Ea = function (e, t, a) {
		function n() {
			o && "inline" != o && i.find(".mbsc-page")
				.css("padding-" + o, "")
		}

		function s(e) {
			e.addClass(m)
				.attr("data-selected", "true")
				.attr("aria-selected", "true")
		}

		function r(e) {
			e.removeClass(m)
				.removeAttr("data-selected")
				.removeAttr("aria-selected")
		}
		var i, o, c, d, m, u, h = Je(e)
			, f = this;
		Pa.call(this, e, t, !0), f.select = function (e) {
			c || r(f._$items.filter(".mbsc-ms-item-sel")), s(f._getItem(e))
		}, f.deselect = function (e) {
			r(f._getItem(e))
		}, f.enable = function (e) {
			f._getItem(e)
				.removeClass("mbsc-btn-d mbsc-fr-btn-d")
				.removeAttr("data-disabled")
				.removeAttr("aria-disabled")
		}, f.disable = function (e) {
			f._getItem(e)
				.addClass("mbsc-btn-d mbsc-fr-btn-d")
				.attr("data-disabled", "true")
				.attr("aria-disabled", "true")
		}, f.setBadge = function (e, t) {
			var a;
			e = f._getItem(e)
				.attr("data-badge", t), a = Je(".mbsc-ms-badge", e), a.length ? t ? a.html(t) : a.remove() : t && e.append('<span class="mbsc-ms-badge">' + t + "</span>")
		}, f._markupReady = function (e) {
			f._hasIcons ? e.addClass("mbsc-ms-icons") : e.removeClass("mbsc-ms-icons"), f._hasText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"), f.__markupReady(e)
		}, f._size = function (t, a) {
			f.__size(t, a), "inline" != o && i.find(".mbsc-page")
				.css("padding-" + o, e.offsetHeight + "px")
		}, f._onItemTap = function (e, t) {
			return !1 !== f.__onItemTap(e, t) && (void 0 === t && (t = !c), d && t && !e.hasClass("mbsc-btn-d") && (c ? "true" == e.attr("data-selected") ? r(e) : s(e) : (r(f._$items.filter(".mbsc-ms-item-sel")), s(e))), t)
		}, f._getActiveItem = function (e) {
			var t = "true" == e.attr("data-selected");
			if (d && !c && t) return e
		}, f._getItemProps = function (e) {
			var t = "true" == e.attr("data-selected")
				, a = "true" == e.attr("data-disabled")
				, n = e.attr("data-icon")
				, s = e.attr("data-badge");
			return e.attr("data-role", "button")
				.attr("aria-selected", t ? "true" : "false")
				.attr("aria-disabled", a ? "true" : "false"), s && e.append('<span class="mbsc-ms-badge">' + s + "</span>"), n && (f._hasIcons = !0), e.text() && (f._hasText = !0), {
					cssClass: "mbsc-ms-item mbsc-btn-e " + (u.itemClass || "") + " " + (t ? m : "") + (a ? " mbsc-btn-d mbsc-fr-btn-d " + (u.disabledClass || "") : "") + (n ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + n : "")
				}
		}, f._getContClass = function () {
			return " mbsc-ms-c mbsc-ms-" + u.variant + " mbsc-ms-" + o + (d ? "" : " mbsc-ms-nosel") + (f.__getContClass() || "")
		}, f.__init = function () {
			f.___init(), i = Je(u.context), n(), o = u.display, c = "multiple" == u.select, d = "off" != u.select, m = " mbsc-ms-item-sel " + (u.activeClass || ""), h.addClass("mbsc-ms mbsc-ms-base " + (u.groupClass || ""))
		}, f.__destroy = function () {
			h.removeClass("mbsc-ms mbsc-ms-base " + (u.groupClass || "")), n(), f.___destroy()
		}, f.__onItemTap = l, f.__getContClass = l, f.__markupReady = l, f.__size = l, f.___init = l, f.___destroy = l, u = f.settings, a || f.init(t)
	};
	Ea.prototype = {
		_defaults: qe({}, Pa.prototype._defaults)
	};
	var $a = function (e, t) {
		var a = this;
		Ea.call(this, e, t, !0), a.___init = function () {}, a.settings, a.init(t)
	};
	$a.prototype = {
			_class: "optionlist"
			, _hasDef: !0
			, _hasTheme: !0
			, _hasLang: !0
			, _defaults: qe({}, Ea.prototype._defaults, {
				select: "multiple"
				, variant: "a"
				, display: "inline"
			})
		}, Te.classes.Optionlist = $a, Te.themes.optionlist = Te.themes.navigation, Te.presetShort("optionlist", "Optionlist"), e.module("mobiscroll-optionlist", [])
		.directive("mobiscrollRepeatRender", ie)
		.directive("mobiscrollOptionlist", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollOptionlist", {
				component: "Optionlist"
			}, function (e, t) {
				return new $a(e, t)
			}, e, t, !1)
		}]);
	var Ya = function (e, t) {
		var a, n, s, r, i, o = Je(e)
			, l = o.is("ul,ol")
			, c = this;
		Ea.call(this, e, t, !0), c._initMarkup = function () {
			a && a.remove(), n && o.append(n.children())
		}, c.__size = function (e, t) {
			var l, d = t || 72
				, m = c._$items.length
				, u = 0;
			i.hide(), "bottom" == r.type && (o.removeClass("mbsc-scv-liq"), a.remove(), c._$items.remove()
				.each(function (a) {
					var s = Je(this);
					o.append(s), u += t || this.offsetWidth || 0, Math.round(u + (a < m - 1 ? d : 0)) > e && (l = !0, n.append(s.css("width", "")
						.addClass("mbsc-fr-btn-e")))
				}), a.attr("class", s + (r.moreIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + r.moreIcon : ""))
				.html(c._hasIcons && c._hasText ? r.moreText : ""), l && o.append(a)), "liquid" == r.layout && o.addClass("mbsc-scv-liq")
		}, c.__onItemTap = function (e) {
			if (e.hasClass("mbsc-menu-item")) return i.show(!1, !0), !1
		}, c.__getContClass = function () {
			return "hamburger" == r.type ? " mbsc-ms-hamburger" : ""
		}, c.__markupReady = function (e) {
			"hamburger" == r.type && (n.append(c._$items.addClass("mbsc-fr-btn-e")), a.attr("class", s + (r.menuIcon ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" + r.menuIcon : ""))
				.html(r.menuText || ""), o.append(a), r.menuText && r.menuIcon || e.removeClass("mbsc-ms-icons"), r.menuText ? e.addClass("mbsc-ms-txt") : e.removeClass("mbsc-ms-txt"))
		}, c.___init = function () {
			"tab" == r.type ? (r.display = r.display || "top", r.variant = r.variant || "b") : "bottom" == r.type ? (r.display = r.display || "bottom", r.variant = r.variant || "a") : "hamburger" == r.type && (r.display = r.display || "inline", r.variant = r.variant || "a"), s = "mbsc-scv-item mbsc-ms-item mbsc-btn-e mbsc-menu-item " + (r.itemClass || ""), a || (a = Je(l ? "<li></li>" : "<div></div>"), n = Je(l ? "<ul></ul>" : "<div></div>")
				.addClass("mbsc-scv mbsc-ms")), i = new Lt(n[0], {
				display: "bubble"
				, theme: r.theme
				, lang: r.lang
				, context: r.context
				, buttons: []
				, anchor: a
				, onBeforeShow: function (e, t) {
					t.settings.cssClass = "mbsc-wdg mbsc-ms-a mbsc-ms-more" + (c._hasText ? "" : " mbsc-ms-more-icons")
				}
				, onMarkupReady: function (e, t) {
					c.tap(t._markup.find(".mbsc-fr-c"), function (e) {
						var t = Je(e.target)
							.closest(".mbsc-ms-item");
						t.length && !t.hasClass("mbsc-btn-d") && (c.navigate(t, !0), i.hide())
					})
				}
			})
		}, c.___destroy = function () {
			i.destroy(), o.append(c._$items), a.remove()
		}, r = c.settings, c.init(t)
	};
	Ya.prototype = {
			_class: "navigation"
			, _hasDef: !0
			, _hasTheme: !0
			, _hasLang: !0
			, _defaults: qe({}, Ea.prototype._defaults, {
				type: "bottom"
				, moreText: "More"
				, moreIcon: "material-more-horiz"
				, menuIcon: "material-menu"
			})
		}, Te.classes.Navigation = Ya, Te.presetShort("nav", "Navigation"), e.module("mobiscroll-navigation", [])
		.directive("mobiscrollRepeatRender", ie)
		.directive("mobiscrollBottomNav", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollBottomNav", {
				component: "Navigation"
				, type: "bottom"
			}, function (e, t) {
				return new Ya(e, t)
			}, e, t, !1)
		}])
		.directive("mobiscrollHamburgerNav", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollHamburgerNav", {
				component: "Navigation"
				, type: "hamburger"
			}, function (e, t) {
				return new Ya(e, t)
			}, e, t, !1)
		}])
		.directive("mobiscrollTabNav", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollTabNav", {
				component: "Navigation"
				, type: "tab"
			}, function (e, t) {
				return new Ya(e, t)
			}, e, t, !1)
		}]), Te.presets.scroller.number = Te.presets.scroller.measurement, Te.presetShort("number"), e.module("mobiscroll-number", [])
		.directive("mobiscrollNumber", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollNumber", {
				preset: "number"
			})
		}]);
	var za = Te.presets.numpad
		, ja = function (e, t, a) {
			function n(t) {
				var a, n = T.validate.call(e, {
						values: V.slice(0)
						, variables: Y
					}, P) || []
					, r = n && n.disabled || [];
				if (P._isValid = !n.invalid, P._tempValue = T.formatValue.call(e, V.slice(0), Y, P), x = V.length, I = n.length || F, P._isVisible && Te.Wodxy) {
					if (Je(".mbsc-np-ph", p)
						.each(function (e) {
							Je(this)
								.html("ltr" == T.fill ? e >= x ? v : y || V[e] : e >= F - I ? e + x < F ? v : y || V[e + x - F] : "")
						}), Je(".mbsc-np-cph", p)
						.each(function () {
							Je(this)
								.html(Y[Je(this)
										.attr("data-var")] || Je(this)
									.attr("data-ph"))
						}), x === F)
						for (a = 0; a <= 9; a++) r.push(a);
					for (Je(".mbsc-np-btn", p)
						.removeClass(b), a = 0; a < r.length; a++) Je('.mbsc-np-btn[data-val="' + r[a] + '"]', p)
						.addClass(b);
					P._isValid ? Je(".mbsc-fr-btn-s .mbsc-fr-btn", p)
						.removeClass(b) : Je(".mbsc-fr-btn-s .mbsc-fr-btn", p)
						.addClass(b), P.live && (P._hasValue = t || P._hasValue, s(t, !1, t), t && O("onSet", {
							valueText: P._value
						}))
				}
			}

			function s(e, t, a, s) {
				t && n(), s || (H = V.slice(0), z = qe({}, Y), E = $.slice(0), P._value = P._hasValue ? P._tempValue : null), e && (P._isInput && L.val(P._hasValue && P._isValid ? P._value : ""), O("onFill", {
					valueText: P._hasValue ? P._tempValue : ""
					, change: a
				}), a && (P._preventChange = !0, L.trigger("change")))
			}

			function r(e) {
				var t, a, n = e || []
					, s = [];
				for ($ = [], Y = {}, t = 0; t < n.length; t++) /:/.test(n[t]) ? (a = n[t].split(":"), Y[a[0]] = a[1], $.push(a[0])) : (s.push(n[t]), $.push("digit"));
				return s
			}

			function i(e, t) {
				!(x || t || T.allowLeadingZero) || e.hasClass("mbsc-fr-btn-d") || e.hasClass("mbsc-np-btn-empty") || x < F && Te.Wodxy && ($.push("digit"), V.push(t), n(!0))
			}

			function o(e) {
				var t, a, s = e.attr("data-val")
					, r = "false" !== e.attr("data-track")
					, i = e.attr("data-var");
				if (!e.hasClass("mbsc-fr-btn-d")) {
					if (i && (a = i.split(":"), r && $.push(a[0]), Y[a[0]] = void 0 === a[2] ? a[1] : Y[a[0]] == a[1] ? a[2] : a[1]), s.length + x <= I)
						for (t = 0; t < s.length; ++t) a = m(s[t]) ? +s[t] : s[t], (T.allowLeadingZero || x || a) && ($.push("digit"), V.push(a), x = V.length);
					n(!0)
				}
			}

			function l() {
				var e, t, a = $.pop();
				if (x || "digit" !== a) {
					if ("digit" !== a && Y[a])
						for (delete Y[a], t = $.slice(0), $ = [], e = 0; e < t.length; e++) t[e] !== a && $.push(t[e]);
					else V.pop();
					n(!0)
				}
			}

			function c(e) {
				N = !0, _ = g(e, "X"), w = g(e, "Y"), clearInterval(A), clearTimeout(A), l(), A = setInterval(function () {
					l()
				}, 150)
			}

			function d() {
				clearInterval(A), N = !1
			}

			function u(e) {
				if (k(e, this)) {
					if ("keydown" == e.type && 32 != e.keyCode) return;
					c(e), "mousedown" == e.type && Je(document)
						.on("mousemove", h)
						.on("mouseup", f)
				}
			}

			function h(e) {
				N && (S = g(e, "X"), M = g(e, "Y"), C = S - _, D = M - w, (Math.abs(C) > 7 || Math.abs(D) > 7) && d())
			}

			function f(e) {
				N && (e.preventDefault(), d(), "mouseup" == e.type && Je(document)
					.off("mousemove", h)
					.off("mouseup", f))
			}
			var p, b, v, x, T, y, _, w, S, M, C, D, N, A, V, I, O, F, H, L = Je(e)
				, P = this
				, E = []
				, $ = []
				, Y = {}
				, z = {}
				, j = {
					107: "+"
					, 109: "-"
				}
				, W = {
					48: 0
					, 49: 1
					, 50: 2
					, 51: 3
					, 52: 4
					, 53: 5
					, 54: 6
					, 55: 7
					, 56: 8
					, 57: 9
					, 96: 0
					, 97: 1
					, 98: 2
					, 99: 3
					, 100: 4
					, 101: 5
					, 102: 6
					, 103: 7
					, 104: 8
					, 105: 9
				};
			ht.call(this, e, t, !0), P.setVal = P._setVal = function (t, a, n, i) {
				P._hasValue = null !== t && void 0 !== t, V = r(Je.isArray(t) ? t.slice(0) : T.parseValue.call(e, t, P)), s(a, !0, void 0 === n ? a : n, i)
			}, P.getVal = P._getVal = function (e) {
				return P._hasValue || e ? P[e ? "_tempValue" : "_value"] : null
			}, P.setArrayVal = P.setVal, P.getArrayVal = function (e) {
				return e ? V.slice(0) : P._hasValue ? H.slice(0) : null
			}, P._readValue = function () {
				var t = L.val() || "";
				"" !== t && (P._hasValue = !0), y ? (Y = {}, $ = [], V = []) : (Y = P._hasValue ? z : {}, $ = P._hasValue ? E : [], V = P._hasValue && H ? H.slice(0) : r(T.parseValue.call(e, t, P)), s(!1, !0))
			}, P._fillValue = function () {
				P._hasValue = !0, s(!0, !1, !0)
			}, P._generateContent = function () {
				var e, t, a, n = 1
					, s = ""
					, r = "";
				for (r += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + T.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + T.deleteIcon + '"></div><div class="mbsc-np-dsp">', s = T.template.replace(/d/g, '<span class="mbsc-np-ph">' + v + "</span>")
					.replace(/&#100;/g, "d"), s = s.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>'), r += s, r += "</div></div>", r += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">', e = 0; e < 4; e++) {
					for (r += '<div class="mbsc-np-row">', t = 0; t < 3; t++) a = n, 10 == n || 12 == n ? a = "" : 11 == n && (a = 0)
						, "" === a ? 10 == n && T.leftKey ? r += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (T.leftKey.variable ? 'data-var="' + T.leftKey.variable + '"' : "") + ' data-val="' + (T.leftKey.value || "") + '" ' + (void 0 !== T.leftKey.track ? ' data-track="' + T.leftKey.track + '"' : "") + ">" + T.leftKey.text + "</div>" : 12 == n && T.rightKey ? r += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (T.rightKey.variable ? 'data-var="' + T.rightKey.variable + '"' : "") + ' data-val="' + (T.rightKey.value || "") + '" ' + (void 0 !== T.rightKey.track ? ' data-track="' + T.rightKey.track + '"' : "") + " >" + T.rightKey.text + "</div>" : r += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' : r += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + a + '">' + a + "</div>", n++;
					r += "</div>"
				}
				return r += "</div></div>"
			}, P._markupReady = function () {
				p = P._markup, n()
			}, P._attachEvents = function (e) {
				e.on("keydown", function (t) {
						var a;
						void 0 !== j[t.keyCode] ? (a = Je('.mbsc-np-btn[data-var="sign:-:"]', e), a.length && (Y.sign = 107 == t.keyCode ? "-" : "", o(a))) : void 0 !== W[t.keyCode] ? i(Je('.mbsc-np-btn[data-val="' + W[t.keyCode] + '"]', e), W[t.keyCode]) : 8 == t.keyCode && (t.preventDefault(), l())
					}), P.tap(Je(".mbsc-np-btn", e), function () {
						var e = Je(this);
						e.hasClass("mbsc-np-btn-custom") ? o(e) : i(e, +e.attr("data-val"))
					}, !1, 30, !0), Je(".mbsc-np-del", e)
					.on("touchstart mousedown keydown", u)
					.on("touchmove mousemove", h)
					.on("touchend mouseup keyup", f)
			}, P.__init = function () {
				T = P.settings, T.cssClass = (T.cssClass || "") + " mbsc-np", T.template = T.template.replace(/\\d/, "&#100;"), v = T.placeholder, F = (T.template.match(/d/g) || [])
					.length, b = "mbsc-fr-btn-d " + (T.disabledClass || ""), y = T.mask, O = P.trigger, y && L.is("input") && L.attr("type", "password")
			}, P._indexOf = function (e, t) {
				var a;
				for (a = 0; a < e.length; ++a)
					if (e[a].toString() === t.toString()) return a;
				return -1
			}, a || P.init(t)
		};
	ja.prototype = {
		_hasDef: !0
		, _hasTheme: !0
		, _hasLang: !0
		, _hasPreset: !0
		, _class: "numpad"
		, _defaults: qe({}, ht.prototype._defaults, {
			template: "dd.dd"
			, placeholder: "0"
			, deleteIcon: "backspace"
			, allowLeadingZero: !1
			, headerText: !1
			, fill: "rtl"
			, deleteText: "Delete"
			, decimalSeparator: "."
			, thousandsSeparator: ","
			, validate: l
			, parseValue: l
			, formatValue: function (e, t, a) {
				var n, s = 1
					, r = a.settings
					, i = r.placeholder
					, o = r.template
					, l = e.length
					, c = o.length
					, d = "";
				for (n = 0; n < c; n++) "d" == o[c - n - 1] ? (d = s <= l ? e[l - s] + d : i + d, s++) : d = o[c - n - 1] + d;
				return Je.each(t, function (e, t) {
						d = d.replace("{" + e + "}", t)
					}), Je("<div>" + d + "</div>")
					.text()
			}
		})
	}, Te.classes.Numpad = ja, Te.themes.numpad = Te.themes.frame, Te.presetShort("numpad", "Numpad", !1);
	var Wa = {
		min: 0
		, max: 99.99
		, scale: 2
		, prefix: ""
		, suffix: ""
		, returnAffix: !1
	};
	za.decimal = function (e) {
		function t(e, t) {
			for (var a, n = e.slice(0), r = 0; n.length;) r = 10 * r + n.shift();
			for (a = 0; a < s.scale; a++) r /= 10;
			return t ? -1 * r : r
		}

		function a(e) {
			return t(e)
				.toFixed(s.scale)
				.replace(".", s.decimalSeparator)
				.replace(/\B(?=(\d{3})+(?!\d))/g, s.thousandsSeparator)
		}
		var n = qe({}, e.settings)
			, s = qe(e.settings, Wa, n)
			, r = s.min < 0;
		return e.getVal = function (t) {
			var a = e._getVal(t)
				, n = (a + "")
				.replace(s.decimalSeparator, ".")
				.replace(s.thousandsSeparator, "");
			return m(n) ? +n : a
		}, {
			template: (r ? "{sign}" : "") + s.prefix.replace(/d/g, "\\d") + Array((Math.floor(Math.max(s.max, Math.abs(s.min))) + "")
					.length + 1)
				.join("d") + (s.scale ? "." + Array(s.scale + 1)
					.join("d") : "") + s.suffix.replace(/d/g, "\\d")
			, leftKey: r ? {
				text: "-/+"
				, variable: "sign:-:"
				, track: !1
			} : void 0
			, parseValue: function (e) {
				var t, a, n = e || s.defaultValue
					, r = [];
				if (n && (n = (n + "")
						.replace(s.decimalSeparator, ".")
						.replace(s.thousandsSeparator, ""), a = n.match(/\d+\.?\d*/g)))
					for (a = (+a[0])
						.toFixed(s.scale), t = 0; t < a.length; t++) "." != a[t] && (+a[t] ? r.push(+a[t]) : r.length && r.push(0));
				return e < 0 && r.push("sign:-"), r
			}
			, formatValue: function (e, n) {
				var r = a(e);
				return (t(e, n && "-" == n.sign) < 0 ? "-" : "") + (s.returnAffix ? s.prefix + r + s.suffix : r)
			}
			, validate: function (n) {
				var r = n.values
					, i = a(r)
					, o = t(r, n.variables && "-" == n.variables.sign)
					, l = [];
				return r.length || s.allowLeadingZero || l.push(0), e.isVisible() && Je(".mbsc-np-dsp", e._markup)
					.html((n.variables.sign || "") + s.prefix + i + s.suffix), {
						disabled: l
						, invalid: o > s.max || o < s.min || !!s.invalid && -1 != e._indexOf(s.invalid, o)
					}
			}
		}
	};
	var Ra = ["h", "m", "s"]
		, Ja = {
			min: 0
			, max: 362439
			, defaultValue: 0
			, hourTextShort: "h"
			, minuteTextShort: "m"
			, secTextShort: "s"
		};
	za.timespan = function (e) {
		function t(e) {
			var t, a = ""
				, n = 3600;
			return Je(Ra)
				.each(function (r, i) {
					t = Math.floor(e / n), e -= t * n, n /= 60, (t > 0 || "s" == i && !a) && (a = a + (a ? " " : "") + t + s[i])
				}), a
		}
		var a = qe({}, e.settings)
			, n = qe(e.settings, Ja, a)
			, s = {
				h: n.hourTextShort.replace(/d/g, "\\d")
				, m: n.minuteTextShort.replace(/d/g, "\\d")
				, s: n.secTextShort.replace(/d/g, "\\d")
			}
			, r = 'd<span class="mbsc-np-sup mbsc-np-time">' + s.s + "</span>";
		return n.max > 9 && (r = "d" + r), n.max > 99 && (r = '<span class="mbsc-np-ts-m">' + (n.max > 639 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.m + "</span>" + r), n.max > 6039 && (r = '<span class="mbsc-np-ts-h">' + (n.max > 38439 ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + s.h + "</span>" + r), e.setVal = function (a, n, s, r) {
			return m(a) && (a = t(a)), e._setVal(a, n, s, r)
		}, e.getVal = function (t) {
			return e._hasValue || t ? de(e.getArrayVal(t)) : null
		}, {
			template: r
			, parseValue: function (e) {
				var a, r = e || t(n.defaultValue)
					, i = [];
				return r && Je(Ra)
					.each(function (e, t) {
						a = new RegExp("(\\d+)" + s[t], "gi")
							.exec(r), a ? (a = +a[1], a > 9 ? (i.push(Math.floor(a / 10)), i.push(a % 10)) : (i.length && i.push(0), (a || i.length) && i.push(a))) : i.length && (i.push(0), i.push(0))
					}), i
			}
			, formatValue: function (e) {
				return t(de(e))
			}
			, validate: function (t) {
				var a = t.values
					, s = de(a.slice(0))
					, r = [];
				return a.length || r.push(0), {
					disabled: r
					, invalid: s > n.max || s < n.min || !!n.invalid && -1 != e._indexOf(n.invalid, +s)
				}
			}
		}
	};
	var Ba = {
		timeFormat: "hh:ii A"
		, amText: "am"
		, pmText: "pm"
	};
	za.time = function (e) {
		function t(e, t) {
			var a, n = "";
			for (a = 0; a < e.length; ++a) n += e[a] + (a % 2 == (e.length % 2 == 1 ? 0 : 1) && a != e.length - 1 ? ":" : "");
			return Je.each(t, function (e, t) {
				n += " " + t
			}), n
		}

		function a(e) {
			var t, a, n, o, l, b, v, g, x, T, y = []
				, _ = 2 * r.length;
			if (c = _, e.length || (i && (y.push(0), y.push(s.leftKey.value)), y.push(s.rightKey.value)), !i && (_ - e.length < 2 || 1 != e[0] && (e[0] > 2 || e[1] > 3) && _ - e.length <= 2) && (y.push("30"), y.push("00")), (i ? e[0] > 1 || e[1] > 2 : 1 != e[0] && (e[0] > 2 || e[1] > 3)) && e[0] && (e.unshift(0), c = _ - 1), e.length == _)
				for (t = 0; t <= 9; ++t) y.push(t);
			else if (1 == e.length && i && 1 == e[0] || e.length && e.length % 2 == 0 || !i && 2 == e[0] && e[1] > 3 && e.length % 2 == 1)
				for (t = 6; t <= 9; ++t) y.push(t);
			if (x = void 0 !== e[1] ? "" + e[0] + e[1] : "", T = +h == +(void 0 !== e[3] ? "" + e[2] + e[3] : ""), s.invalid)
				for (t = 0; t < s.invalid.length; ++t)
					if (b = s.invalid[t].getHours(), v = s.invalid[t].getMinutes(), g = s.invalid[t].getSeconds(), b == +x) {
						if (2 == r.length && (v < 10 ? 0 : +("" + v)[0]) == +e[2]) {
							y.push(v < 10 ? v : +("" + v)[1]);
							break
						}
						if ((g < 10 ? 0 : +("" + g)[0]) == +e[4]) {
							y.push(g < 10 ? g : +("" + g)[1]);
							break
						}
					}
			if (s.min || s.max) {
				if (a = +d == +x, n = +m == +x, l = n && T, o = a && T, 0 === e.length) {
					for (t = i ? 2 : d > 19 ? d[0] : 3; t <= (1 == d[0] ? 9 : d[0] - 1); ++t) y.push(t);
					if (d >= 10 && (y.push(0), 2 == d[0]))
						for (t = 3; t <= 9; ++t) y.push(t);
					if (m && m < 10 || d && d >= 10)
						for (t = m && m < 10 ? +m[0] + 1 : 0; t < (d && d >= 10 ? d[0] : 10); ++t) y.push(t)
				}
				if (1 == e.length) {
					if (0 === e[0])
						for (t = 0; t < d[0]; ++t) y.push(t);
					if (d && 0 !== e[0] && (i ? 1 == e[0] : 2 == e[0]))
						for (t = i ? 3 : 4; t <= 9; ++t) y.push(t);
					if (e[0] == d[0])
						for (t = 0; t < d[1]; ++t) y.push(t);
					if (e[0] == m[0] && !i)
						for (t = +m[1] + 1; t <= 9; ++t) y.push(t)
				}
				if (2 == e.length && (a || n))
					for (t = n ? +h[0] + 1 : 0; t < (a ? +u[0] : 10); ++t) y.push(t);
				if (3 == e.length && (n && e[2] == h[0] || a && e[2] == u[0]))
					for (t = n && e[2] == h[0] ? +h[1] + 1 : 0; t < (a && e[2] == u[0] ? +u[1] : 10); ++t) y.push(t);
				if (4 == e.length && (o || l))
					for (t = l ? +p[0] + 1 : 0; t < (o ? +f[0] : 10); ++t) y.push(t);
				if (5 == e.length && (o && e[4] == f[0] || l && e[4] == p[0]))
					for (t = l && e[4] == p[0] ? +p[1] + 1 : 0; t < (o && e[4] == f[0] ? +f[1] : 10); ++t) y.push(t)
			}
			return y
		}
		var n = qe({}, e.settings)
			, s = qe(e.settings, Ba, n)
			, r = s.timeFormat.split(":")
			, i = s.timeFormat.match(/a/i)
			, o = i ? "a" == i[0] ? s.amText : s.amText.toUpperCase() : ""
			, l = i ? "a" == i[0] ? s.pmText : s.pmText.toUpperCase() : ""
			, c = 0
			, d = s.min ? "" + s.min.getHours() : ""
			, m = s.max ? "" + s.max.getHours() : ""
			, u = s.min ? "" + (s.min.getMinutes() < 10 ? "0" + s.min.getMinutes() : s.min.getMinutes()) : ""
			, h = s.max ? "" + (s.max.getMinutes() < 10 ? "0" + s.max.getMinutes() : s.max.getMinutes()) : ""
			, f = s.min ? "" + (s.min.getSeconds() < 10 ? "0" + s.min.getSeconds() : s.min.getSeconds()) : ""
			, p = s.max ? "" + (s.max.getSeconds() < 10 ? "0" + s.max.getSeconds() : s.max.getSeconds()) : "";
		return s.min && s.min.setFullYear(2014, 7, 20), s.max && s.max.setFullYear(2014, 7, 20), {
			placeholder: "-"
			, allowLeadingZero: !0
			, template: (3 == r.length ? "dd:dd:dd" : 2 == r.length ? "dd:dd" : "dd") + (i ? '<span class="mbsc-np-sup">{ampm:--}</span>' : "")
			, leftKey: i ? {
				text: o
				, variable: "ampm:" + o
				, value: "00"
			} : {
				text: ":00"
				, value: "00"
			}
			, rightKey: i ? {
				text: l
				, variable: "ampm:" + l
				, value: "00"
			} : {
				text: ":30"
				, value: "30"
			}
			, parseValue: function (e) {
				var t, a, n = e || s.defaultValue
					, r = [];
				if (n) {
					if (n += "", a = n.match(/\d/g))
						for (t = 0; t < a.length; t++) r.push(+a[t]);
					i && r.push("ampm:" + (n.match(new RegExp(s.pmText, "gi")) ? l : o))
				}
				return r
			}
			, formatValue: function (e, a) {
				return t(e, a)
			}
			, validate: function (n) {
				var r = n.values
					, o = n.variables
					, l = t(r, o)
					, d = r.length >= 3 ? new Date(2014, 7, 20, "" + r[0] + (r.length % 2 == 0 ? r[1] : ""), "" + r[r.length % 2 == 0 ? 2 : 1] + r[r.length % 2 == 0 ? 3 : 2]) : "";
				return {
					disabled: a(r)
					, length: c
					, invalid: (i ? !new RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + s.amText + "|" + s.pmText + ")$", "i")
						.test(l) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(l)) || !!s.invalid && -1 != e._indexOf(s.invalid, d) || !((!s.min || s.min <= d) && (!s.max || d <= s.max))
				}
			}
		}
	};
	var Ka = {
		dateOrder: "mdy"
		, dateFormat: "mm/dd/yy"
		, delimiter: "/"
	};
	za.date = function (e) {
			function t(e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			}

			function a(e) {
				var a, n, o, l, c, m = []
					, g = void 0 !== e[s + 3] ? "" + e[s] + e[s + 1] + e[s + 2] + e[s + 3] : ""
					, x = void 0 !== e[r + 1] ? "" + e[r] + e[r + 1] : ""
					, T = void 0 !== e[i + 1] ? "" + e[i] + e[i + 1] : ""
					, y = "" + d.getMaxDayOfMonth(g || 2012, x - 1 || 0)
					, _ = b === g && +u == +x
					, w = v === g && +h == +x;
				if (d.invalid)
					for (a = 0; a < d.invalid.length; ++a) {
						if (o = d.getYear(d.invalid[a]), l = d.getMonth(d.invalid[a]), c = d.getDay(d.invalid[a]), o == +g && l + 1 == +x && (c < 10 ? 0 : +("" + c)[0]) == +e[i]) {
							m.push(c < 10 ? c : +("" + c)[1]);
							break
						}
						if (l + 1 == +x && c == +T && ("" + o)
							.substring(0, 3) == "" + e[s] + e[s + 1] + e[s + 2]) {
							m.push(("" + o)[3]);
							break
						}
						if (o == +g && c == +T && (l < 10 ? 0 : +("" + (l + 1))[0]) == +e[r]) {
							m.push(l < 10 ? l : +("" + (l + 1))[1]);
							break
						}
					}
				if ("31" != T || e.length != r && e.length != r + 1 || (1 != e[r] ? m.push(2, 4, 6, 9, 11) : m.push(1)), "30" == T && 0 === e[r] && e.length <= r + 1 && m.push(2), e.length == r) {
					for (a = v === g && +h < 10 ? 1 : 2; a <= 9; ++a) m.push(a);
					b === g && +u >= 10 && m.push(0)
				}
				if (e.length == r + 1) {
					if (1 == e[r]) {
						for (a = v === g ? +h[1] + 1 : 3; a <= 9; ++a) m.push(a);
						if (b == g)
							for (a = 0; a < +u[1]; ++a) m.push(a)
					}
					if (0 === e[r] && (m.push(0), v === g || b === g))
						for (a = v === g ? +T > +p ? +h : +h + 1 : 0; a <= (b === g ? +u - 1 : 9); ++a) m.push(a)
				}
				if (e.length == i) {
					for (a = w ? 1 + (+p > 10 ? +p[0] : 0) : +y[0] + 1; a <= 9; ++a) m.push(a);
					if (_)
						for (a = 0; a < (+f < 10 ? 0 : f[0]); ++a) m.push(a)
				}
				if (e.length == i + 1) {
					if (e[i] >= 3 || "02" == x)
						for (a = +y[1] + 1; a <= 9; ++a) m.push(a);
					if (w && +p[0] == e[i])
						for (a = +p[1] + 1; a <= 9; ++a) m.push(a);
					if (_ && f[0] == e[i])
						for (a = 0; a < +f[1]; ++a) m.push(a);
					if (0 === e[i] && (m.push(0), w || _))
						for (a = w ? +p + 1 : 1; a <= (_ ? +f - 1 : 9); ++a) m.push(a)
				}
				if (void 0 !== e[s + 2] && "02" == x && "29" == T)
					for (n = +("" + e[s] + e[s + 1] + e[s + 2] + 0); n <= +("" + e[s] + e[s + 1] + e[s + 2] + 9); ++n) m.push(t(n) ? "" : n % 10);
				if (e.length == s) {
					if (d.min)
						for (a = 0; a < +b[0]; ++a) m.push(a);
					if (d.max)
						for (a = +v[0] + 1; a <= 9; ++a) m.push(a);
					m.push(0)
				}
				if (d.min || d.max)
					for (n = 1; n < 4; ++n)
						if (e.length == s + n) {
							if (e[s + n - 1] == +b[n - 1] && (3 != n || e[s + n - 2] == +b[n - 2]))
								for (a = 0; a < +b[n] + (3 == n && e[r + 1] && +u > +x ? 1 : 0); ++a) m.push(a);
							if (e[s + n - 1] == +v[n - 1] && (3 != n || e[s + n - 2] == +v[n - 2]))
								for (a = +v[n] + (3 == n && +h < +x ? 0 : 1); a <= 9; ++a) m.push(a)
						}
				return m
			}

			function n(e) {
				return new Date(+("" + e[s] + e[s + 1] + e[s + 2] + e[s + 3]), +("" + e[r] + e[r + 1]) - 1, +("" + e[i] + e[i + 1]))
			}
			var s, r, i, o, l = []
				, c = qe({}, e.settings)
				, d = qe(e.settings, Xe, Ka, c)
				, m = d.dateOrder
				, u = d.min ? "" + (d.getMonth(d.min) + 1) : 0
				, h = d.max ? "" + (d.getMonth(d.max) + 1) : 0
				, f = d.min ? "" + d.getDay(d.min) : 0
				, p = d.max ? "" + d.getDay(d.max) : 0
				, b = d.min ? "" + d.getYear(d.min) : 0
				, v = d.max ? "" + d.getYear(d.max) : 0;
			for (m = m.replace(/y+/gi, "yyyy"), m = m.replace(/m+/gi, "mm"), m = m.replace(/d+/gi, "dd"), s = m.toUpperCase()
				.indexOf("Y"), r = m.toUpperCase()
				.indexOf("M"), i = m.toUpperCase()
				.indexOf("D"), m = "", l.push({
					val: s
					, n: "yyyy"
				}, {
					val: r
					, n: "mm"
				}, {
					val: i
					, n: "dd"
				}), l.sort(function (e, t) {
					return e.val - t.val
				}), Je.each(l, function (e, t) {
					m += t.n
				}), s = m.indexOf("y"), r = m.indexOf("m"), i = m.indexOf("d"), m = "", o = 0; o < 8; ++o) m += "d", o + 1 != s && o + 1 != r && o + 1 != i || (m += d.delimiter);
			return e.getVal = function (t) {
				return e._hasValue || t ? n(e.getArrayVal(t)) : null
			}, {
				placeholder: "-"
				, fill: "ltr"
				, allowLeadingZero: !0
				, template: m
				, parseValue: function (e) {
					var t, a = []
						, n = e || d.defaultValue
						, s = M(d.dateFormat, n, d);
					if (n)
						for (t = 0; t < l.length; ++t) a = /m/i.test(l[t].n) ? a.concat(((d.getMonth(s) < 9 ? "0" : "") + (d.getMonth(s) + 1))
							.split("")) : /d/i.test(l[t].n) ? a.concat(((d.getDay(s) < 10 ? "0" : "") + d.getDay(s))
							.split("")) : a.concat((d.getYear(s) + "")
							.split(""));
					return a
				}
				, formatValue: function (e) {
					return S(d.dateFormat, n(e), d)
				}
				, validate: function (t) {
					var s = t.values
						, r = n(s);
					return {
						disabled: a(s)
						, invalid: !("Invalid Date" != r && (!d.min || d.min <= r) && (!d.max || r <= d.max)) || !!d.invalid && -1 != e._indexOf(d.invalid, r)
					}
				}
			}
		}, e.module("mobiscroll-numpad", [])
		.directive("mobiscrollNumpad", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollNumpad", {
				component: "Numpad"
			})
		}]);
	var qa = {
		autoCorrect: !0
		, showSelector: !0
		, minRange: 1
		, rangeTap: !0
		, fromText: "Start"
		, toText: "End"
	};
	Te.presetShort("range"), Te.presets.scroller.range = function (e) {
			function t(e, t) {
				e && (e.setFullYear(t.getFullYear()), e.setMonth(t.getMonth()), e.setDate(t.getDate()))
			}

			function a(t) {
				e._startDate = D = v, e._endDate = N = x, O.startInput && (Je(O.startInput)
					.val(p), t && Je(O.startInput)
					.trigger("change")), O.endInput && (Je(O.endInput)
					.val(b), t && Je(O.endInput)
					.trigger("change"))
			}

			function n(e, t) {
				var a = !0;
				return e && v && x && (x - v > O.maxRange - 1 && (A ? v = new Date(x - O.maxRange + 1) : x = new Date(+v + O.maxRange - 1)), x - v < O.minRange - 1 && (A ? v = new Date(x - O.minRange + 1) : x = new Date(+v + O.minRange - 1))), v && x || (a = !1), t && o(), a
			}

			function s() {
				return v && x ? Math.max(1, Math.round((new Date(x)
					.setHours(0, 0, 0, 0) - new Date(v)
					.setHours(0, 0, 0, 0)) / 864e5) + 1) : 0
			}

			function r(e) {
				e.addClass(P)
					.attr("aria-checked", "true")
			}

			function i() {
				C && d && (Je(".mbsc-range-btn", d)
					.removeClass(P)
					.removeAttr("aria-checked"), r(Je(".mbsc-range-btn", d)
						.eq(A)))
			}

			function o() {
				var e, t, a, n, s, r = 0
					, i = H || !A ? " mbsc-cal-day-hl mbsc-cal-sel-start" : " mbsc-cal-sel-start"
					, o = H || A ? " mbsc-cal-day-hl mbsc-cal-sel-end" : " mbsc-cal-sel-end";
				if (p = v ? S(u, v, O) : "", b = x ? S(u, x, O) : "", d && (Je(".mbsc-range-btn-v-start", d)
						.html(p || "&nbsp;"), Je(".mbsc-range-btn-v-end", d)
						.html(b || "&nbsp;"), e = v ? new Date(v) : null, a = x ? new Date(x) : null, !e && a && (e = new Date(a)), !a && e && (a = new Date(e)), s = A ? a : e, Je(".mbsc-cal-day-picker .mbsc-cal-day-hl", d)
						.removeClass(E), Je(".mbsc-cal-day-picker .mbsc-selected", d)
						.removeClass("mbsc-cal-sel-start mbsc-cal-sel-end " + P)
						.removeAttr("aria-selected"), e && a))
					for (t = e.setHours(0, 0, 0, 0), n = a.setHours(0, 0, 0, 0); a >= e && r < 84;) Je('.mbsc-cal-day[data-full="' + s.getFullYear() + "-" + (s.getMonth() + 1) + "-" + s.getDate() + '"]', d)
						.addClass(P + " " + (s.getTime() === t ? i : "") + (s.getTime() === n ? o : ""))
						.attr("aria-selected", "true"), s.setDate(s.getDate() + (A ? -1 : 1)), r++
			}

			function l(e, t) {
				return {
					h: e ? e.getHours() : t ? 23 : 0
					, i: e ? e.getMinutes() : t ? 59 : 0
					, s: e ? e.getSeconds() : t ? 59 : 0
				}
			}
			var c, d, m, u, h, f, p, b, v, g, x, T, y, _, w, C, D = e._startDate
				, N = e._endDate
				, A = 0
				, V = new Date
				, I = qe({}, e.settings)
				, O = qe(e.settings, qa, I)
				, F = O.anchor
				, H = O.rangeTap
				, L = "mbsc-fr-btn-d " + (O.disabledClass || "")
				, P = "mbsc-selected " + (O.selectedClass || "")
				, E = "mbsc-cal-day-hl"
				, $ = null === O.defaultValue ? [] : O.defaultValue || [new Date(V.setHours(0, 0, 0, 0)), new Date(V.getFullYear(), V.getMonth(), V.getDate() + 6, 23, 59, 59, 999)];
			return H && (O.tabs = !0), c = wt.call(this, e), u = e._format, y = "time" === O.controls.join(""), C = 1 != O.controls.length || "calendar" != O.controls[0] || O.showSelector, O.startInput && (_ = Je(O.startInput)
				.prop("readonly"), e.attachShow(Je(O.startInput)
					.prop("readonly", !0)
					, function () {
						A = 0, O.anchor = F || Je(O.startInput)
					})), O.endInput && (w = Je(O.endInput)
				.prop("readonly"), e.attachShow(Je(O.endInput)
					.prop("readonly", !0)
					, function () {
						A = 1, O.anchor = F || Je(O.endInput)
					})), e._getDayProps = function (e) {
				var t = v ? new Date(v.getFullYear(), v.getMonth(), v.getDate()) : null
					, a = x ? new Date(x.getFullYear(), x.getMonth(), x.getDate()) : null;
				return {
					selected: t && a && e >= t && e <= x
					, cssClass: ((H || !A) && t && t.getTime() === e.getTime() || (H || A) && a && a.getTime() === e.getTime() ? E : "") + (t && t.getTime() === e.getTime() ? " mbsc-cal-sel-start" : "") + (a && a.getTime() === e.getTime() ? " mbsc-cal-sel-end" : "")
				}
			}, e.setVal = function (t, a, n, s, r) {
				var i = t || []
					, o = t;
				(void 0 === i[0] || null === i[0] || i[0].getTime) && (f = !0, v = i[0] || null, p = v ? S(u, v, O) : "", A || (o = c.parseValue(p, e))), (void 0 === i[1] || null === i[1] || i[1].getTime) && (f = !0, x = i[1] || null, b = x ? S(u, x, O) : "", A && (o = c.parseValue(b, e))), s || (e._startDate = D = v, e._endDate = N = x), e._setVal(o, a, n, s, r)
			}, e.getVal = function (t) {
				return t ? [v, x] : e._hasValue ? [D, N] : null
			}, e.setActiveDate = function (t) {
				var a;
				A = "start" == t ? 0 : 1, a = "start" == t ? v : x, e.isVisible() && (i(), H || (Je(".mbsc-cal-table .mbsc-cal-day-hl", d)
					.removeClass(E), a && Je('.mbsc-cal-day[data-full="' + a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate() + '"]', d)
					.addClass(E)), a && (h = !0, e.setDate(a, !1, 1e3, !0)))
			}, e.getValue = e.getVal, qe({}, c, {
				highlight: !1
				, outerMonthChange: !1
				, formatValue: function () {
					return p + (O.endInput ? "" : b ? " - " + b : "")
				}
				, parseValue: function (t) {
					var a = t ? t.split(" - ") : [];
					return O.defaultValue = $[1], N = O.endInput ? Je(O.endInput)
						.val() ? M(u, Je(O.endInput)
							.val(), O) : $[1] : a[1] ? M(u, a[1], O) : $[1], O.defaultValue = $[0], D = O.startInput ? Je(O.startInput)
						.val() ? M(u, Je(O.startInput)
							.val(), O) : $[0] : a[0] ? M(u, a[0], O) : $[0], O.defaultValue = $[A], p = D ? S(u, D, O) : "", b = N ? S(u, N, O) : "", e._startDate = D, e._endDate = N, c.parseValue(A ? b : p, e)
				}
				, onFill: function (e) {
					a(e.change)
				}
				, onBeforeClose: function (t) {
					if ("set" === t.button && !n(!0, !0)) return e.setActiveDate(A ? "start" : "end"), !1
				}
				, onHide: function () {
					c.onHide.call(e), A = 0, d = null, O.anchor = F
				}
				, onClear: function () {
					H && (A = 0)
				}
				, onBeforeShow: function () {
					O.headerText = !1, v = D || $[0], x = N || $[1], g = l(v, 0), T = l(x, 1), O.counter && (O.headerText = function () {
						var e = s();
						return (e > 1 ? O.selectedPluralText || O.selectedText : O.selectedText)
							.replace(/{count}/, e)
					}), f = !0
				}
				, onMarkupReady: function (t) {
					var a;
					v && (h = !0, e.setDate(v, !1, 0, !0), v = e.getDate(!0)), x && (h = !0, e.setDate(x, !1, 0, !0), x = e.getDate(!0)), (A && x || !A && v) && (h = !0, e.setDate(A ? x : v, !1, 0, !0)), o(), c.onMarkupReady.call(this, t), d = Je(t.target), d.addClass("mbsc-range"), C && (a = '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + O.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (p || "&nbsp;") + '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + O.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (b || "&nbsp;") + "</div></div></div></div>", Je(O.headerText ? ".mbsc-fr-hdr" : ".mbsc-fr-aria", d)
							.after(a), i()), Je(".mbsc-range-btn", d)
						.on("touchstart click", function (t) {
							k(t, this) && (e._showDayPicker(), e.setActiveDate(Je(this)
								.attr("data-select")))
						})
				}
				, onDayChange: function (e) {
					e.active = A ? "end" : "start", m = !0
				}
				, onSetDate: function (a) {
					var s = a.date
						, r = e._order;
					h || (void 0 === r.h && s.setHours(A ? 23 : 0), void 0 === r.i && s.setMinutes(A ? 59 : 0), void 0 === r.s && s.setSeconds(A ? 59 : 0), s.setMilliseconds(A ? 999 : 0), f && !m || (H && m && (1 == A && s < v && (A = 0), A ? s.setHours(T.h, T.i, T.s, 999) : s.setHours(g.h, g.i, g.s, 0)), A ? (x = new Date(s), T = l(x)) : (v = new Date(s), g = l(v)), y && O.autoCorrect && (t(v, s), t(x, s)), H && m && !A && (x = null))), y && !O.autoCorrect && x < v && (x = new Date(x.setDate(x.getDate() + 1))), e._isValid = n(f || m || O.autoCorrect, !h), a.active = A ? "end" : "start", !h && H && (m && (A = A ? 0 : 1), i()), e.isVisible() && (e._isValid ? Je(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup)
						.removeClass(L) : Je(".mbsc-fr-btn-s .mbsc-fr-btn", e._markup)
						.addClass(L)), m = !1, f = !1, h = !1
				}
				, onTabChange: function (t) {
					"calendar" != t.tab && e.setDate(A ? x : v, !1, 1e3, !0), n(!0, !0)
				}
				, onDestroy: function () {
					Je(O.startInput)
						.prop("readonly", _), Je(O.endInput)
						.prop("readonly", w)
				}
			})
		}, e.module("mobiscroll-range", [])
		.directive("mobiscrollRange", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollRange", {
				preset: "range"
			})
		}]), e.module("mobiscroll-scroller", [])
		.directive("mobiscrollScroller", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollScroller", {})
		}]), e.module("mobiscroll-scrollview", [])
		.directive("mobiscrollRepeatRender", ie)
		.directive("mobiscrollScrollview", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollScrollview", {
				component: "ScrollView"
			}, function (e, t) {
				return new Pa(e, t)
			}, e, t, !1)
		}]);
	var Ua = 0;
	Te.util.getJson = he;
	var Ga = {
		inputClass: ""
		, invalid: []
		, rtl: !1
		, showInput: !0
		, groupLabel: "Groups"
		, dataHtml: "html"
		, dataText: "text"
		, dataValue: "value"
		, dataGroup: "group"
		, dataDisabled: "disabled"
		, filterPlaceholderText: "Type to filter"
		, filterEmptyText: "No results"
		, filterClearIcon: "material-close"
	};
	Te.presetShort("select"), Te.presets.scroller.select = function (e) {
		function t(e) {
			var t, a, n, s, r, i, o = 0
				, l = 0
				, c = {};
			if ($ = {}, C = {}, A = [], M = [], ee.length = 0, K) Je.each(T, function (o, d) {
				r = d[L.dataText], a = d[L.dataHtml], i = d[L.dataValue], n = d[L.dataGroup], s = {
					value: i
					, html: a
					, text: r
					, index: o
				}, $[i] = s, e && !b(r, e) || (A.push(s), q && (void 0 === c[n] ? (t = {
					text: n
					, value: l
					, options: []
					, index: l
				}, C[l] = t, c[n] = l, M.push(t), l++) : t = C[c[n]], X && (s.index = t.options.length), s.group = c[n], t.options.push(s)), d[L.dataDisabled] && ee.push(i))
			});
			else if (q) {
				var d = !0;
				Je("optgroup", F)
					.each(function (t) {
						C[t] = {
								text: this.label
								, value: t
								, options: []
								, index: t
							}, d = !0, Je("option", this)
							.each(function (a) {
								s = {
									value: this.value
									, text: this.text
									, index: X ? a : o++
									, group: t
								}, $[this.value] = s, e && !b(this.text, e) || (d && (M.push(C[t]), d = !1), A.push(s), C[t].options.push(s), this.disabled && ee.push(this.value))
							})
					})
			} else Je("option", F)
				.each(function (t) {
					s = {
						value: this.value
						, text: this.text
						, index: t
					}, $[this.value] = s, e && !b(this.text, e) || (A.push(s), this.disabled && ee.push(this.value))
				});
			L.defaultValue ? y = L.defaultValue : A.length && (y = A[0].value), Z && (A = [], o = 0, Je.each(C, function (e, t) {
				t.options.length && (i = "__group" + e, s = {
					text: t.text
					, value: i
					, group: e
					, index: o++
					, cssClass: "mbsc-sel-gr"
				}, $[i] = s, A.push(s), ee.push(s.value), Je.each(t.options, function (e, t) {
					t.index = o++, A.push(t)
				}))
			})), P && (A.length ? P.removeClass("mbsc-sel-empty-v") : P.addClass("mbsc-sel-empty-v"))
		}

		function a(e, t, a) {
			var n, s = [];
			for (n = 0; n < e.length; n++) s.push({
				value: e[n].value
				, display: e[n].html || e[n].text
				, cssClass: e[n].cssClass
			});
			return {
				circular: !1
				, multiple: t
				, data: s
				, label: a
			}
		}

		function n() {
			return a(M, !1, L.groupLabel)
		}

		function s() {
			return a(X ? C[S].options : A, W, B)
		}

		function r() {
			var e, t, a = [[]];
			return G && (e = n(), z ? a[0][k] = e : a[k] = [e]), t = s(), z ? a[0][V] = t : a[V] = [t], a
		}

		function i(e) {
			j && (e && u(e) && (e = e.split(",")), Je.isArray(e) && (e = e[0])), N = void 0 === e || null === e || "" === e ? y : e, G && (S = $[N] ? $[N].group : null)
		}

		function o(e) {
			return O[e] || ($[e] ? $[e].text : "")
		}

		function h(t) {
			var a, n, s = [];
			if (W) {
				for (a in e._tempSelected[V]) s.push(o(a));
				return s.join(", ")
			}
			return n = t[V], o(n)
		}

		function f() {
			var t, a = ""
				, n = e.getVal()
				, s = h(e.getArrayVal());
			if (L.filter && "inline" == L.display || x.val(s), F.is("select") && K) {
				if (j)
					for (t = 0; t < n.length; t++) a += '<option value="' + n[t] + '">' + o(n[t]) + "</option>";
				else a = '<option value="' + n + '">' + s + "</option>";
				F.html(a)
			}
			F[0] !== x[0] && F.val(n)
		}

		function p() {
			var t = {};
			t[V] = s(), I = !0, e.changeWheel(t)
		}

		function b(e, t) {
			return t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), e.match(new RegExp(t, "ig"))
		}

		function v(e) {
			return L.data.dataField ? e[L.data.dataField] : L.data.processResponse ? L.data.processResponse(e) : e
		}

		function g(a) {
			var o = {};
			t(a), L.wheels = r(), i(N), o[V] = s(), e._tempWheelArray[V] = N, G && (o[k] = n(), e._tempWheelArray[k] = S), e._isVisible && e.changeWheel(o, 0, !0)
		}
		var x, T, y, _, w, S, M, C, k, D, N, A, V, I, O = {}
			, F = Je(this)
			, H = qe({}, e.settings)
			, L = qe(e.settings, Ga, H)
			, P = Je('<div class="mbsc-sel-empty">' + L.filterEmptyText + "</div>")
			, E = L.readonly
			, $ = {}
			, Y = L.layout || (/top|bottom|inline/.test(L.display) || L.filter ? "liquid" : "")
			, z = "liquid" == Y
			, j = m(L.select) ? L.select : "multiple" == L.select || F.prop("multiple")
			, W = j || !!L.filter && 1
			, R = this.id + "_dummy"
			, J = Je('label[for="' + this.id + '"]')
			.attr("for", R)
			, B = void 0 !== L.label ? L.label : J.length ? J.text() : F.attr("name")
			, K = !!L.data
			, q = K ? !!L.group : Je("optgroup", F)
			.length
			, U = L.group
			, G = q && U && !1 !== U.groupWheel
			, X = q && U && G && !0 === U.clustered
			, Z = q && (!U || !1 !== U.header && !X)
			, Q = F.val() || (j ? [] : [""])
			, ee = [];
		return e.setVal = function (t, a, n, s, r) {
				W && (t && !j && (t = [t]), t && u(t) && (t = t.split(",")), e._tempSelected[V] = d(t), s || (e._selected[V] = d(t)), t = t ? t[0] : null), e._setVal(t, a, n, s, r)
			}, e.getVal = function (t, a) {
				var n;
				return W ? (n = c(t ? e._tempSelected[V] : e._selected[V]), n = j ? n : n.length ? n[0] : null) : (n = t ? e._tempWheelArray : e._hasValue ? e._wheelArray : null, n = n ? n[V] : null), j ? n : n ? q && a ? [$[n] ? $[n].group : null, n] : n : null
			}, e.refresh = function (e, t, a) {
				a = a || l, e ? T = e : Je.isArray(L.data) && (T = L.data), !e && D && void 0 === t ? he(L.data.url, function (e) {
					T = v(e), g(), a()
				}, L.data.dataType) : (g(t), a())
			}, L.invalid.length || (L.invalid = ee), G ? (k = 0, V = 1) : (k = -1, V = 0), W && (j && F.prop("multiple", !0), Q && u(Q) && (Q = Q.split(",")), e._selected[V] = d(Q)), e._$input && e._$input.remove(), F.next()
			.is("input.mbsc-control") ? x = F.next()
			.removeAttr("tabindex") : L.input ? x = Je(L.input) : (L.filter && "inline" == L.display ? e._$input = Je('<div class="mbsc-sel-input-wrap"><input type="text" id="' + R + '" class="mbsc-control ' + L.inputClass + '" readonly /></div>') : (x = Je('<input type="text" id="' + R + '" class="mbsc-control ' + L.inputClass + '" readonly />'), e._$input = x), L.showInput && (e._$input.insertBefore(F), x || (x = e._$input.find("#" + R)))), e.attachShow(x.attr("placeholder", L.placeholder || "")), x[0] !== F[0] && F.addClass("mbsc-sel-hdn")
			.attr("tabindex", -1), L.filter && (_ = L.filter.minLength || 0), D = L.data && L.data.url, D ? e.refresh(void 0, void 0, f) : (K && (T = L.data), t(), i(F.val())), {
				layout: Y
				, headerText: !1
				, anchor: x
				, compClass: "mbsc-sel" + (G ? " mbsc-sel-gr-whl" : "") + (W ? " mbsc-sel-multi" : "")
				, setOnTap: !G || [!1, !0]
				, formatValue: h
				, parseValue: function (e) {
					return i(void 0 === e ? F.val() : e), G ? [S, N] : [N]
				}
				, validate: function (e) {
					var t = e.index
						, a = [];
					return a[V] = L.invalid, X && !I && void 0 === t && p(), I = !1, {
						disabled: a
					}
				}
				, onRead: f
				, onFill: f
				, onMarkupReady: function (e, t) {
					if (L.filter) {
						var a, n, s, r = Je(".mbsc-fr-w", e.target)
							, i = Je('<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' + L.filterClearIcon + '"></span>');
						"inline" == L.display ? (a = x, x.parent()
								.find(".mbsc-sel-filter-clear")
								.remove()) : (r.prepend('<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w"><span class="mbsc-input-wrap"><input type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>'), a = r.find(".mbsc-sel-filter-input")), w = null, s = a[0], a.prop("readonly", !1)
							.attr("placeholder", L.filterPlaceholderText)
							.parent()
							.append(i), r.find(".mbsc-fr-c")
							.prepend(P), t.tap(i, function () {
								s.value = "", t.refresh(), i.removeClass("mbsc-sel-filter-show-clear")
							}), a.on("keydown", function (e) {
								13 != e.keyCode && 27 != e.keyCode || (e.stopPropagation(), s.blur())
							})
							.on("keyup", function () {
								clearTimeout(n), s.value.length ? i.addClass("mbsc-sel-filter-show-clear") : i.removeClass("mbsc-sel-filter-show-clear"), n = setTimeout(function () {
									w !== s.value && !1 !== t.trigger("onFilter", {
										filterText: s.value
									}) && (w = s.value, (w.length >= _ || !w.length) && (D && L.data.remoteFilter ? he(L.data.url + encodeURIComponent(w), function (e) {
										t.refresh(v(e))
									}, L.data.dataType) : t.refresh(void 0, w)))
								}, 500)
							})
					}
				}
				, onBeforeShow: function () {
					j && L.counter && (L.headerText = function () {
						var t = 0;
						return Je.each(e._tempSelected[V], function () {
								t++
							}), (t > 1 ? L.selectedPluralText || L.selectedText : L.selectedText)
							.replace(/{count}/, t)
					}), i(F.val()), L.filter && t(void 0), e.settings.wheels = r(), I = !0
				}
				, onWheelGestureStart: function (e) {
					e.index == k && (L.readonly = [!1, !0])
				}
				, onWheelAnimationEnd: function (t) {
					var a = e.getArrayVal(!0);
					t.index == k ? (L.readonly = E, a[k] != S && (S = a[k], N = C[S].options[0].value, a[V] = N, X ? p() : e.setArrayVal(a, !1, !1, !0, 1e3))) : t.index == V && a[V] != N && (N = a[V], G && $[N] && $[N].group != S && (S = $[N].group, a[k] = S, e.setArrayVal(a, !1, !1, !0, 1e3)))
				}
				, onItemTap: function (e) {
					if (e.index == V && (O[e.value] = $[e.value].text, W && !j && e.selected)) return !1
				}
				, onClose: function () {
					D && L.data.remoteFilter && w && e.refresh()
				}
				, onDestroy: function () {
					e._$input && e._$input.remove(), F.removeClass("mbsc-sel-hdn")
						.removeAttr("tabindex")
				}
			}
	};
	var Xa = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];
	e.module("mobiscroll-select", [])
		.directive("mobiscrollSelectOption", function () {
			return {
				link: function (e, t, a) {
					var n = Je(t[0])
						.closest("select");
					e.$watch(a.ngValue, function () {
						e.$emit("mbscSelectRefresh", n)
					}), e.$on("$destroy", function () {
						e.$emit("mbscSelectRefresh", n)
					})
				}
			}
		})
		.directive("mobiscrollSelect", ["$parse", function (e) {
			var t = Te.ng.getDDO(e, "mobiscrollSelect", {
				preset: "select"
			});
			return t.link = void 0, t.compile = function (t) {
				var a, n;
				return Je(t[0])
					.find("option")
					.each(function () {
						for (n = 0; n < Xa.length; n++)
							if (Je(this)
								.attr(Xa[n])) return Je(this)
								.attr("mobiscroll-select-option", ""), a = !0, !1
					})
					, function (t, n, s, r) {
						var i, o, l = Je(n[0])
							, c = Te.ng.getOpt(t, s, "mobiscrollSelect", r);
						l.hide(), qe(c, {
							preset: "select"
						}), s.mobiscrollData && (qe(c, {
							data: t.$eval(s.mobiscrollData) || []
						}), t.$watchCollection(s.mobiscrollData, function () {
							o && o.refresh(t.$eval(s.mobiscrollData))
						})), Te.ng.addWatch(e, t, r, l, s, "mobiscrollSelect"), a ? t.$on("mbscSelectRefresh", function (a, d) {
							l[0] == d[0] && (clearTimeout(i), i = setTimeout(function () {
								o = new xt(n[0], c), Te.ng.render(l, r ? r.$modelValue : e(s.mobiscrollSelect)(t)), s.mobiscrollInstance && e(s.mobiscrollInstance)
									.assign(t, o)
							}, 10))
						}) : (o = new xt(n[0], c), s.mobiscrollInstance && e(s.mobiscrollInstance)
							.assign(t, o))
					}
			}, t
		}]);
	var Za = {
		autostart: !1
		, step: 1
		, useShortLabels: !1
		, labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds", ""]
		, labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""]
		, startText: "Start"
		, stopText: "Stop"
		, resetText: "Reset"
		, lapText: "Lap"
		, hideText: "Hide"
	};
	Te.presetShort("timer"), Te.presets.scroller.timer = function (e) {
		function t(e) {
			return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())
		}

		function a(e) {
			var a = {};
			if (H && S[I].index > S.days.index) {
				var n, s, r, i, o = new Date
					, l = b ? o : F
					, c = b ? F : o;
				for (c = t(c), l = t(l), a.years = l.getFullYear() - c.getFullYear(), a.months = l.getMonth() - c.getMonth(), a.days = l.getDate() - c.getDate(), a.hours = l.getHours() - c.getHours(), a.minutes = l.getMinutes() - c.getMinutes(), a.seconds = l.getSeconds() - c.getSeconds(), a.fract = (l.getMilliseconds() - c.getMilliseconds()) / 10, n = w.length; n > 0; n--) s = w[n - 1], r = S[s], i = w[Je.inArray(s, w) - 1], S[i] && a[s] < 0 && (a[i]--, a[s] += "months" == i ? 32 - new Date(l.getFullYear(), l.getMonth(), 32)
					.getDate() : r.until + 1);
				"months" == I && (a.months += 12 * a.years, delete a.years)
			} else Je(w)
				.each(function (t, n) {
					S[n].index <= S[I].index && (a[n] = Math.floor(e / S[n].limit), e -= a[n] * S[n].limit)
				});
			return a
		}

		function n(e) {
			var t = 1
				, a = S[e]
				, n = a.wheel
				, r = a.prefix
				, i = a.until
				, o = S[w[Je.inArray(e, w) - 1]];
			if (a.index <= S[I].index && (!o || o.limit > V))
				if (M[e] || L[0].push(n), M[e] = 1, n.data = [], n.label = a.label || "", n.cssClass = "mbsc-timer-whl-" + e, V >= a.limit && (t = Math.max(Math.round(V / a.limit), 1), d = t * a.limit), e == I) n.min = 0, n.data = function (e) {
					return {
						value: e
						, display: s(e, r, a.label)
					}
				}, n.getIndex = function (e) {
					return e
				};
				else
					for (l = 0; l <= i; l += t) n.data.push({
						value: l
						, display: s(l, r, a.label)
					})
		}

		function s(e, t, a) {
			return (t || "") + (e < 10 ? "0" : "") + e + '<span class="mbsc-timer-lbl">' + a + "</span>"
		}

		function r(e) {
			var t, n = []
				, s = a(e);
			return Je(w)
				.each(function (e, a) {
					M[a] && (t = Math.max(Math.round(V / S[a].limit), 1), n.push(Math.round(s[a] / t) * t))
				}), n
		}

		function i(e) {
			H ? (f = F - new Date, f < 0 ? (f *= -1, b = !0) : b = !1, p = 0, A = !0) : void 0 !== F ? (A = !1, f = 1e3 * F, b = "countdown" != T.mode, e && (p = 0)) : (f = 0, b = "countdown" != T.mode, A = b, e && (p = 0))
		}

		function o() {
			D ? (Je(".mbsc-fr-w", v)
				.addClass("mbsc-timer-running mbsc-timer-locked"), Je(".mbsc-timer-btn-toggle-c > div", v)
				.text(T.stopText), e.buttons.start.icon && Je(".mbsc-timer-btn-toggle-c > div", v)
				.removeClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && Je(".mbsc-timer-btn-toggle-c > div", v)
				.addClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == T.mode && (Je(".mbsc-timer-btn-resetlap-c > div", v)
					.text(T.lapText), e.buttons.reset.icon && Je(".mbsc-timer-btn-resetlap-c > div", v)
					.removeClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && Je(".mbsc-timer-btn-resetlap-c > div", v)
					.addClass("mbsc-ic-" + e.buttons.lap.icon))) : (Je(".mbsc-fr-w", v)
				.removeClass("mbsc-timer-running"), Je(".mbsc-timer-btn-toggle-c > div", v)
				.text(T.startText), e.buttons.start.icon && Je(".mbsc-timer-btn-toggle-c > div", v)
				.addClass("mbsc-ic-" + e.buttons.start.icon), e.buttons.stop.icon && Je(".mbsc-timer-btn-toggle-c > div", v)
				.removeClass("mbsc-ic-" + e.buttons.stop.icon), "stopwatch" == T.mode && (Je(".mbsc-timer-btn-resetlap-c > div", v)
					.text(T.resetText), e.buttons.reset.icon && Je(".mbsc-timer-btn-resetlap-c > div", v)
					.addClass("mbsc-ic-" + e.buttons.reset.icon), e.buttons.lap.icon && Je(".mbsc-timer-btn-resetlap-c > div", v)
					.removeClass("mbsc-ic-" + e.buttons.lap.icon)))
		}
		var l, c, d, m, u, h, f, p, b, v, g, x = qe({}, e.settings)
			, T = qe(e.settings, Za, x)
			, y = T.useShortLabels ? T.labelsShort : T.labels
			, _ = ["resetlap", "toggle"]
			, w = ["years", "months", "days", "hours", "minutes", "seconds", "fract"]
			, S = {
				years: {
					index: 6
					, until: 10
					, limit: 31536e6
					, label: y[0]
					, wheel: {}
				}
				, months: {
					index: 5
					, until: 11
					, limit: 2592e6
					, label: y[1]
					, wheel: {}
				}
				, days: {
					index: 4
					, until: 31
					, limit: 864e5
					, label: y[2]
					, wheel: {}
				}
				, hours: {
					index: 3
					, until: 23
					, limit: 36e5
					, label: y[3]
					, wheel: {}
				}
				, minutes: {
					index: 2
					, until: 59
					, limit: 6e4
					, label: y[4]
					, wheel: {}
				}
				, seconds: {
					index: 1
					, until: 59
					, limit: 1e3
					, label: y[5]
					, wheel: {}
				}
				, fract: {
					index: 0
					, until: 99
					, limit: 10
					, label: y[6]
					, prefix: "."
					, wheel: {}
				}
			}
			, M = {}
			, C = []
			, k = 0
			, D = !1
			, N = !0
			, A = !1
			, V = Math.max(10, 1e3 * T.step)
			, I = T.maxWheel
			, O = "stopwatch" == T.mode || H
			, F = T.targetTime
			, H = F && void 0 !== F.getTime
			, L = [[]];
		return e.start = function () {
				if (N && e.reset(), !D) {
					if (i(), !A && p >= f) return;
					D = !0, N = !1, u = new Date, m = p, T.readonly = !0, e.setVal(r(b ? p : f - p), !0, !0, !1, 100), c = setInterval(function () {
						p = new Date - u + m, e.setVal(r(b ? p : f - p), !0, !0, !1, Math.min(100, d - 10)), !A && p + d >= f && (clearInterval(c), setTimeout(function () {
							e.stop(), p = f, e.setVal(r(b ? p : 0), !0, !0, !1, 100), e.trigger("onFinish", {
								time: f
							}), N = !0
						}, f - p))
					}, d), o(), e.trigger("onStart")
				}
			}, e.stop = function () {
				D && (D = !1, clearInterval(c), p = new Date - u + m, o(), e.trigger("onStop", {
					ellapsed: p
				}))
			}, e.toggle = function () {
				D ? e.stop() : e.start()
			}, e.reset = function () {
				e.stop(), p = 0, C = [], k = 0, e.setVal(r(b ? 0 : f), !0, !0, !1, 100), e.settings.readonly = O, N = !0, O || Je(".mbsc-fr-w", v)
					.removeClass("mbsc-timer-locked"), e.trigger("onReset")
			}, e.lap = function () {
				D && (h = new Date - u + m, g = h - k, k = h, C.push(h), e.trigger("onLap", {
					ellapsed: h
					, lap: g
					, laps: C
				}))
			}, e.resetlap = function () {
				D && "stopwatch" == T.mode ? e.lap() : e.reset()
			}, e.getTime = function () {
				return f
			}, e.setTime = function (e) {
				F = e / 1e3, f = e
			}, e.getEllapsedTime = function () {
				return D ? new Date - u + m : 0
			}, e.setEllapsedTime = function (t, a) {
				N || (m = p = t, u = new Date, e.setVal(r(b ? p : f - p), !0, a, !1, 100))
			}, i(!0), I || f || (I = "minutes"), "inline" !== T.display && _.unshift("hide"), I || Je(w)
			.each(function (e, t) {
				if (!I && f >= S[t].limit) return I = t, !1
			}), Je(w)
			.each(function (e, t) {
				n(t)
			}), d = Math.max(87, d), T.autostart && setTimeout(function () {
				e.start()
			}, 0), e.handlers.toggle = e.toggle, e.handlers.start = e.start, e.handlers.stop = e.stop, e.handlers.resetlap = e.resetlap, e.handlers.reset = e.reset, e.handlers.lap = e.lap, e.buttons.toggle = {
				parentClass: "mbsc-timer-btn-toggle-c"
				, text: T.startText
				, icon: T.startIcon
				, handler: "toggle"
			}, e.buttons.start = {
				text: T.startText
				, icon: T.startIcon
				, handler: "start"
			}, e.buttons.stop = {
				text: T.stopText
				, icon: T.stopIcon
				, handler: "stop"
			}, e.buttons.reset = {
				text: T.resetText
				, icon: T.resetIcon
				, handler: "reset"
			}, e.buttons.lap = {
				text: T.lapText
				, icon: T.lapIcon
				, handler: "lap"
			}, e.buttons.resetlap = {
				parentClass: "mbsc-timer-btn-resetlap-c"
				, text: T.resetText
				, icon: T.resetIcon
				, handler: "resetlap"
			}, e.buttons.hide = {
				parentClass: "mbsc-timer-btn-hide-c"
				, text: T.hideText
				, icon: T.closeIcon
				, handler: "cancel"
			}, {
				wheels: L
				, headerText: !1
				, readonly: O
				, buttons: _
				, mode: "countdown"
				, compClass: "mbsc-timer"
				, parseValue: function () {
					return r(b ? 0 : f)
				}
				, formatValue: function (e) {
					var t = ""
						, a = 0;
					return Je(w)
						.each(function (n, s) {
							"fract" != s && M[s] && (t += e[a] + ("seconds" == s && M.fract ? "." + e[a + 1] : "") + " " + y[n] + " ", a++)
						}), t
				}
				, validate: function (e) {
					var t = e.values
						, a = e.index
						, n = 0;
					N && void 0 !== a && (F = 0, Je(w)
						.each(function (e, a) {
							M[a] && (F += S[a].limit * t[n], n++)
						}), F /= 1e3, i(!0))
				}
				, onBeforeShow: function () {
					T.showLabel = !0
				}
				, onMarkupReady: function (e) {
					v = Je(e.target), o(), O && Je(".mbsc-fr-w", v)
						.addClass("mbsc-timer-locked")
				}
				, onPosition: function (e) {
					Je(".mbsc-fr-w", e.target)
						.css("min-width", 0)
						.css("min-width", Je(".mbsc-fr-btn-cont", e.target)[0].offsetWidth)
				}
				, onDestroy: function () {
					clearInterval(c)
				}
			}
	};
	var Qa = Te.instances;
	e.module("mobiscroll-timer", [])
		.directive("mobiscrollTimer", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollTimer", {
				preset: "timer"
			}, pe, fe, be)
		}]);
	var en = {
		wheelOrder: "hhiiss"
		, useShortLabels: !1
		, min: 0
		, max: 1 / 0
		, labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"]
		, labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"]
	};
	Te.presetShort("timespan"), Te.presets.scroller.timespan = function (e) {
			function t(e) {
				var t = {};
				return Je(b)
					.each(function (a, n) {
						t[n] = T[n] ? Math.floor(e / v[n].limit) : 0, e -= t[n] * v[n].limit
					}), t
			}

			function a(e) {
				var t = !1
					, a = x[T[e] - 1] || 1
					, s = v[e]
					, r = s.label
					, o = s.wheel;
				if (o.data = [], o.label = s.label, f.match(new RegExp(s.re + s.re, "i")) && (t = !0), e == y) o.min = c[e], o.max = d[e], o.data = function (e) {
					return {
						value: e * a
						, display: n(e * a, t, r)
					}
				}, o.getIndex = function (e) {
					return Math.round(e / a)
				};
				else
					for (i = 0; i <= s.until; i += a) o.data.push({
						value: i
						, display: n(i, t, r)
					})
			}

			function n(e, t, a) {
				return (e < 10 && t ? "0" : "") + e + '<span class="mbsc-ts-lbl">' + a + "</span>"
			}

			function s(e) {
				var t = 0;
				return Je.each(g, function (a, n) {
					isNaN(+e[0]) || (t += v[n.v].limit * e[a])
				}), t
			}

			function r(e, t) {
				return Math.floor(e / t) * t
			}
			var i, o, l, c, d, u = qe({}, e.settings)
				, h = qe(e.settings, en, u)
				, f = h.wheelOrder
				, p = h.useShortLabels ? h.labelsShort : h.labels
				, b = ["years", "months", "days", "hours", "minutes", "seconds"]
				, v = {
					years: {
						ord: 0
						, index: 6
						, until: 10
						, limit: 31536e6
						, label: p[0]
						, re: "y"
						, wheel: {}
					}
					, months: {
						ord: 1
						, index: 5
						, until: 11
						, limit: 2592e6
						, label: p[1]
						, re: "m"
						, wheel: {}
					}
					, days: {
						ord: 2
						, index: 4
						, until: 31
						, limit: 864e5
						, label: p[2]
						, re: "d"
						, wheel: {}
					}
					, hours: {
						ord: 3
						, index: 3
						, until: 23
						, limit: 36e5
						, label: p[3]
						, re: "h"
						, wheel: {}
					}
					, minutes: {
						ord: 4
						, index: 2
						, until: 59
						, limit: 6e4
						, label: p[4]
						, re: "i"
						, wheel: {}
					}
					, seconds: {
						ord: 5
						, index: 1
						, until: 59
						, limit: 1e3
						, label: p[5]
						, re: "s"
						, wheel: {}
					}
				}
				, g = []
				, x = h.steps || []
				, T = {}
				, y = "seconds"
				, _ = h.defaultValue || Math.max(h.min, Math.min(0, h.max))
				, w = [[]];
			return Je(b)
				.each(function (e, t) {
					(o = f.search(new RegExp(v[t].re, "i"))) > -1 && (g.push({
						o: o
						, v: t
					}), v[t].index > v[y].index && (y = t))
				}), g.sort(function (e, t) {
					return e.o > t.o ? 1 : -1
				}), Je.each(g, function (e, t) {
					T[t.v] = e + 1, w[0].push(v[t.v].wheel)
				}), c = t(h.min), d = t(h.max), Je.each(g, function (e, t) {
					a(t.v)
				}), e.getVal = function (t, a) {
					return a ? e._getVal(t) : e._hasValue || t ? s(e.getArrayVal(t)) : null
				}, {
					showLabel: !0
					, wheels: w
					, compClass: "mbsc-ts"
					, parseValue: function (e) {
						var a, n = [];
						return m(e) || !e ? (l = t(e || _), Je.each(g, function (e, t) {
								n.push(l[t.v])
							})) : Je.each(g, function (t, s) {
								a = new RegExp("(\\d+)\\s?(" + h.labels[v[s.v].ord] + "|" + h.labelsShort[v[s.v].ord] + ")", "gi")
									.exec(e), n.push(a ? a[1] : 0)
							}), Je(n)
							.each(function (e, t) {
								n[e] = r(t, x[e] || 1)
							}), n
					}
					, formatValue: function (e) {
						var t = "";
						return Je.each(g, function (a, n) {
							t += +e[a] ? e[a] + " " + v[n.v].label + " " : ""
						}), t ? t.replace(/\s+$/g, "") : 0
					}
					, validate: function (a) {
						var n, r, i, o, l = a.values
							, m = a.direction
							, u = []
							, h = !0
							, f = !0;
						return Je(b)
							.each(function (a, p) {
								if (void 0 !== T[p]) {
									if (i = T[p] - 1, u[i] = [], o = {}, p != y) {
										if (h)
											for (r = d[p] + 1; r <= v[p].until; r++) o[r] = !0;
										if (f)
											for (r = 0; r < c[p]; r++) o[r] = !0
									}
									l[i] = e.getValidValue(i, l[i], m, o), n = t(s(l)), h = h && n[p] == d[p], f = f && n[p] == c[p], Je.each(o, function (e) {
										u[i].push(e)
									})
								}
							}), {
								disabled: u
							}
					}
				}
		}, e.module("mobiscroll-timespan", [])
		.directive("mobiscrollTimespan", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollTimespan", {
				preset: "timespan"
			})
		}]), Te.presets.scroller.treelist = Te.presets.scroller.list, Te.presetShort("list"), Te.presetShort("treelist"), e.module("mobiscroll-treelist", [])
		.directive("mobiscrollRepeatRender", ie)
		.directive("mobiscrollTreelist", ["$parse", "$timeout", function (e, t) {
			return oe("mobiscrollTreelist", {
				preset: "treelist"
			}, function (e, t) {
				return new Te.classes.Scroller(e, t)
			}, e, t)
		}]), e.module("mobiscroll-widget", [])
		.directive("mobiscrollWidget", ["$parse", function (e) {
			return Te.ng.getDDO(e, "mobiscrollWidget", {
				component: "Widget"
			})
		}]),  Te.i18n["en-GB"] = Te.i18n["en-UK"] = {
			dateFormat: "dd/mm/yy"
			, timeFormat: "HH:ii"
		}, Te.i18n.zh = {
		setText: "确定"
		, cancelText: "取消"
		, clearText: "明确"
		, selectedText: "{count} 选"
		, dateFormat: "yy/mm/dd"
		, dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
		, dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"]
		, dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"]
		, dayText: "日"
		, hourText: "时"
		, minuteText: "分"
		, monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
		, monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
		, monthText: "月"
		, secText: "秒"
		, timeFormat: "HH:ii"
		, yearText: "年"
		, nowText: "当前"
		, pmText: "下午"
		, amText: "上午"
		, todayText: "今天"
		, dateText: "日"
		, timeText: "时间"
		, calendarText: "日历"
		, closeText: "关闭"
		, fromText: "开始时间"
		, toText: "结束时间"
		, wholeText: "合计"
		, fractionText: "分数"
		, unitText: "单位"
		, labels: ["年", "月", "日", "小时", "分钟", "秒", ""]
		, labelsShort: ["年", "月", "日", "点", "分", "秒", ""]
		, startText: "开始"
		, stopText: "停止"
		, resetText: "重置"
		, lapText: "圈"
		, hideText: "隐藏"
		, backText: "返回"
		, undoText: "复原"
		, offText: "关闭"
		, onText: "开启"
		, decimalSeparator: ","
		, thousandsSeparator: " "
	};
	var an = Te.themes;
	an.frame.bootstrap = {
		disabledClass: "disabled"
		, selectedClass: "btn-primary"
		, selectedTabClass: "active"
		, tabLink: !0
		, todayClass: "text-primary"
		, onMarkupInserted: function (e) {
			var t = Je(e.target);
			Je(".mbsc-fr-popup", t)
				.addClass("popover"), Je(".mbsc-fr-w", t)
				.addClass("popover-content"), Je(".mbsc-fr-hdr", t)
				.addClass("popover-title popover-header"), Je(".mbsc-fr-arr-i", t)
				.addClass("popover"), Je(".mbsc-fr-arr", t)
				.addClass("arrow"), Je(".mbsc-fr-btn", t)
				.addClass("btn btn-default btn-secondary"), Je(".mbsc-fr-btn-s .mbsc-fr-btn", t)
				.removeClass("btn-default btn-secondary")
				.addClass("btn btn-primary"), Je(".mbsc-sc-btn-plus", t)
				.addClass("glyphicon glyphicon-chevron-down"), Je(".mbsc-sc-btn-minus", t)
				.addClass("glyphicon glyphicon-chevron-up"), Je(".mbsc-cal-next", t)
				.prepend('<i class="glyphicon glyphicon-chevron-right"></i>'), Je(".mbsc-cal-prev", t)
				.prepend('<i class="glyphicon glyphicon-chevron-left"></i>'), Je(".mbsc-cal-tabs", t)
				.addClass("nav nav-tabs"), Je(".mbsc-cal-picker", t)
				.addClass("popover"), Je(".mbsc-cal-events", t)
				.addClass("popover"), Je(".mbsc-cal-events-arr", t)
				.addClass("arrow"), Je(".mbsc-range-btn", t)
				.addClass("btn btn-sm btn-small btn-default"), Je(".mbsc-np-btn", t)
				.addClass("btn btn-default"), Je(".mbsc-sel-filter-cont", t)
				.removeClass("mbsc-input"), Je(".mbsc-sel-filter-input", t)
				.addClass("form-control")
		}
		, onPosition: function (e) {
			setTimeout(function () {
				Je(".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i", e.target)
					.removeClass("bottom")
					.addClass("top"), Je(".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i", e.target)
					.removeClass("top")
					.addClass("bottom")
			}, 10)
		}
	}, an.scroller.bootstrap = qe({}, an.frame.bootstrap, {
		dateDisplay: "Mddyy"
		, btnCalPrevClass: ""
		, btnCalNextClass: ""
		, selectedLineHeight: !0
		, onEventBubbleShow: function (e) {
			var t = Je(e.eventList);
			Je(".mbsc-cal-event-list", t)
				.addClass("list-group"), Je(".mbsc-cal-event", t)
				.addClass("list-group-item"), setTimeout(function () {
					t.hasClass("mbsc-cal-events-b") ? t.removeClass("top")
						.addClass("bottom") : t.removeClass("bottom")
						.addClass("top")
				}, 10)
		}
	}), an.navigation.bootstrap = {
		wrapperClass: "popover panel panel-default"
		, groupClass: "btn-group"
		, activeClass: "btn-primary"
		, disabledClass: "disabled"
		, itemClass: "btn btn-default"
	};
	var nn = Te.themes;
	nn.frame.ios = {
		display: "bottom"
		, headerText: !1
		, btnWidth: !1
		, deleteIcon: "ios-backspace"
		, scroll3d: !0
	}, nn.scroller.ios = qe({}, nn.frame.ios, {
		rows: 5
		, height: 34
		, minWidth: 55
		, selectedLineHeight: !0
		, selectedLineBorder: 1
		, showLabel: !1
		, useShortLabels: !0
		, btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5"
		, btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5"
		, checkIcon: "ion-ios7-checkmark-empty"
		, filterClearIcon: "ion-close-circled"
		, dateDisplay: "MMdyy"
		, btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5"
		, btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
	}), nn.listview.ios = {
		leftArrowClass: "mbsc-ic-ion-ios7-arrow-back"
		, rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward"
	}, nn.form.ios = {};
	var sn, rn, on = Te.themes;
	on.frame.material = {
		headerText: !1
		, btnWidth: !1
		, deleteIcon: "material-backspace"
		, onMarkupReady: function (e) {
			xe(Je(e.target), ".mbsc-fr-btn-e", "mbsc-fr-btn-d", "mbsc-fr-btn-nhl")
		}
	}, on.scroller.material = qe({}, on.frame.material, {
		showLabel: !1
		, selectedLineBorder: 2
		, weekDays: "min"
		, icon: {
			filled: "material-star"
			, empty: "material-star-outline"
		}
		, checkIcon: "material-check"
		, btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down"
		, btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up"
		, btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left"
		, btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right"
		, onEventBubbleShow: function (e) {
			var t = Je(e.eventList)
				, a = Je(e.target)
				.closest(".mbsc-cal-row")
				.index() < 2
				, n = Je(".mbsc-cal-event-color", t)
				.eq(a ? 0 : -1)
				.css("background-color");
			Je(".mbsc-cal-events-arr", t)
				.css("border-color", a ? "transparent transparent " + n + " transparent" : n + "transparent transparent transparent")
		}
	}), on.listview.material = {
		leftArrowClass: "mbsc-ic-material-keyboard-arrow-left"
		, rightArrowClass: "mbsc-ic-material-keyboard-arrow-right"
		, onItemActivate: function (e) {
			ve(Je(e.target), e.domEvent)
		}
		, onItemDeactivate: function () {
			ge(rn)
		}
		, onSlideStart: function (e) {
			Je(".mbsc-ripple", e.target)
				.remove()
		}
		, onSortStart: function (e) {
			Je(".mbsc-ripple", e.target)
				.remove()
		}
	}, on.navigation.material = {
		onInit: function () {
			xe(Je(this), ".mbsc-ms-item.mbsc-btn-e", "mbsc-btn-d", "mbsc-btn-nhl")
		}
		, onMarkupInit: function () {
			Je(".mbsc-ripple", this)
				.remove()
		}
		, onDestroy: function () {
			Je(this)
				.off(".mbsc-ripple")
		}
	}, on.form.material = {
		addRipple: function (e, t) {
			ve(e, t)
		}
		, removeRipple: function () {
			ge(rn)
		}
	};
	var ln = Te.themes;
	ln.frame.windows = {
		headerText: !1
		, deleteIcon: "backspace4"
		, setIcon: "checkmark"
		, cancelIcon: "close"
		, closeIcon: "close"
		, clearIcon: "close"
		, okIcon: "checkmark"
		, nowIcon: "loop2"
		, startIcon: "play3"
		, stopIcon: "pause2"
		, resetIcon: "stop2"
		, lapIcon: "loop2"
		, btnWidth: !1
		, btnReverse: !0
	}, ln.scroller.windows = qe({}, ln.frame.windows, {
		minWidth: 76
		, height: 76
		, dateDisplay: "mmMMddDDyy"
		, showLabel: !1
		, icon: {
			filled: "star3"
			, empty: "star"
		}
		, btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2"
		, btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2"
		, btnPlusClass: "mbsc-ic mbsc-ic-plus"
		, btnMinusClass: "mbsc-ic mbsc-ic-minus"
	}), ln.form.windows = {}, Te.customTheme("ios-dark", "ios"), Te.customTheme("material-dark", "material"), Te.customTheme("mobiscroll-dark", "mobiscroll"), Te.customTheme("windows-dark", "windows");
	var cn = Te.themes
		, dn = void 0;
	return "android" == Oe ? dn = "material" : "ios" == Oe ? dn = "ios" : "wp" == Oe && (dn = "windows"), Te.setAutoTheme = function () {
		Je.each(cn.frame, function (e, t) {
			if (dn && t.baseTheme == dn && "material-dark" != e && "windows-dark" != e && "ios-dark" != e) return Te.autoTheme = e, !1;
			e == dn && (Te.autoTheme = e)
		})
	}, Te.setAutoTheme(), Te.apiKey = "2b3dbdbc", Te.apiUrl = "https://trial.mobiscroll.com/", Te
});
