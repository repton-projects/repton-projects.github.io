!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("whatInput", [], e) : "object" == typeof exports ? exports.whatInput = e() : t.whatInput = e();
}
(this, 
    function () {
   

    function n(t) {
        var e;
        return (o[t] || (e = o[t] = {
            exports: {},
            id: t,
            loaded: !1
        }, i[t].call(e.exports, e, e.exports, n), e.loaded = !0, e)).exports;
    }
    var i, o;
}),    
    function (a) {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
            }
        }
        n = r, (o = [{
            key: "run",
            value: function () {
                var e = this, n = setInterval(function () {
                    var t;
                    "complete" === document.readyState && (clearInterval(n), t = document.querySelectorAll(e.selector), e.forEach(t, function (t) {
                        return e.renderElement(t);
                    }));
                }, 10);
            }
        }, {
            key: "renderElement",
            value: function (t) {
                var e = this;
                t.sticky = {}, t.sticky.active = !1, t.sticky.marginTop = parseInt(t.getAttribute("data-margin-top")) || this.options.marginTop, t.sticky.marginBottom = parseInt(t.getAttribute("data-margin-bottom")) || this.options.marginBottom, t.sticky.stickyFor = parseInt(t.getAttribute("data-sticky-for")) || this.options.stickyFor, t.sticky.stickyClass = t.getAttribute("data-sticky-class") || this.options.stickyClass, t.sticky.wrap = !!t.hasAttribute("data-sticky-wrap") || this.options.wrap, t.sticky.stickyContainer = this.options.stickyContainer, t.sticky.container = this.getStickyContainer(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect = this.getRectangle(t), "img" === t.tagName.toLowerCase() && (t.onload = function () {
                    return t.sticky.rect = e.getRectangle(t);
                }), t.sticky.wrap && this.wrapElement(t), this.activate(t);
            }
        },  {
            key: "activate",
            value: function (t) {
                t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active && (t.sticky.active = !0), this.elements.indexOf(t) < 0 && this.elements.push(t), t.sticky.resizeEvent || (this.initResizeEvents(t), t.sticky.resizeEvent = !0), t.sticky.scrollEvent || (this.initScrollEvents(t), t.sticky.scrollEvent = !0), this.setPosition(t);
            }
        }, {
            key: "initResizeEvents",
            value: function (t) {
                var e = this;
                t.sticky.resizeListener = function () {
                    return e.onResizeEvents(t);
                }, window.addEventListener("resize", t.sticky.resizeListener);
            }
        }, {
            key: "destroyResizeEvents",
            value: function (t) {
                window.removeEventListener("resize", t.sticky.resizeListener);
            }
        }, {
            key: "onResizeEvents",
            value: function (t) {
                this.vp = this.getViewportSize(), t.sticky.rect = this.getRectangle(t), t.sticky.container.rect = this.getRectangle(t.sticky.container), t.sticky.rect.top + t.sticky.rect.height < t.sticky.container.rect.top + t.sticky.container.rect.height && t.sticky.stickyFor < this.vp.width && !t.sticky.active ? t.sticky.active = !0 : (t.sticky.rect.top + t.sticky.rect.height >= t.sticky.container.rect.top + t.sticky.container.rect.height || t.sticky.stickyFor >= this.vp.width && t.sticky.active) && (t.sticky.active = !1), this.setPosition(t);
            }
        }, {
            key: "initScrollEvents",
            value: function (t) {
                var e = this;
                t.sticky.scrollListener = function () {
                    return e.onScrollEvents(t);
                }, window.addEventListener("scroll", t.sticky.scrollListener);
            }
        }, {
            key: "destroyScrollEvents",
            value: function (t) {
                window.removeEventListener("scroll", t.sticky.scrollListener);
            }
        }, {
            key: "onScrollEvents",
            value: function (t) {
                t.sticky && t.sticky.active && this.setPosition(t);
            }
        }, {
            key: "setPosition",
            value: function (t) {
                this.css(t, {
                    position: "",
                    width: "",
                    top: "",
                    left: ""
                }), this.vp.height < t.sticky.rect.height || !t.sticky.active || (t.sticky.rect.width || (t.sticky.rect = this.getRectangle(t)), t.sticky.wrap && this.css(t.parentNode, {
                    display: "block",
                    width: t.sticky.rect.width + "px",
                    height: t.sticky.rect.height + "px"
                }), 0 === t.sticky.rect.top && t.sticky.container === this.body ? (this.css(t, {
                    position: "fixed",
                    top: t.sticky.rect.top + "px",
                    left: t.sticky.rect.left + "px",
                    width: t.sticky.rect.width + "px"
                }), t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass)) : this.scrollTop > t.sticky.rect.top - t.sticky.marginTop ? (this.css(t, {
                    position: "fixed",
                    width: t.sticky.rect.width + "px",
                    left: t.sticky.rect.left + "px"
                }), this.scrollTop + t.sticky.rect.height + t.sticky.marginTop > t.sticky.container.rect.top + t.sticky.container.offsetHeight - t.sticky.marginBottom ? (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
                    top: t.sticky.container.rect.top + t.sticky.container.offsetHeight - (this.scrollTop + t.sticky.rect.height + t.sticky.marginBottom) + "px"
                })) : (t.sticky.stickyClass && t.classList.add(t.sticky.stickyClass), this.css(t, {
                    top: t.sticky.marginTop + "px"
                }))) : (t.sticky.stickyClass && t.classList.remove(t.sticky.stickyClass), this.css(t, {
                    position: "",
                    width: "",
                    top: "",
                    left: ""
                }), t.sticky.wrap && this.css(t.parentNode, {
                    display: "",
                    width: "",
                    height: ""
                })));
            }
        }, {
            key: "update",
            value: function () {
                var e = this;
                this.forEach(this.elements, function (t) {
                    t.sticky.rect = e.getRectangle(t), t.sticky.container.rect = e.getRectangle(t.sticky.container), e.activate(t), e.setPosition(t);
                });
            }
        }, {
            key: "destroy",
            value: function () {
                var e = this;
                window.removeEventListener("load", this.updateScrollTopPosition), window.removeEventListener("scroll", this.updateScrollTopPosition), this.forEach(this.elements, function (t) {
                    e.destroyResizeEvents(t), e.destroyScrollEvents(t), delete t.sticky;
                });
            }
        }, {
            key: "getStickyContainer",
            value: function (t) {
                for (var e = t.parentNode; !e.hasAttribute("data-sticky-container") && !e.parentNode.querySelector(t.sticky.stickyContainer) && e !== this.body;) e = e.parentNode;
                return e;
            }
        }, {
            key: "getRectangle",
            value: function (t) {
                this.css(t, {
                    position: "",
                    width: "",
                    top: "",
                    left: ""
                });
                for (var e = Math.max(t.offsetWidth, t.clientWidth, t.scrollWidth), n = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight), i = 0, o = 0; i += t.offsetTop || 0, o += t.offsetLeft || 0, t = t.offsetParent;);
                return {
                    top: i,
                    left: o,
                    width: e,
                    height: n
                };
            }
        }, {
            key: "getViewportSize",
            value: function () {
                return {
                    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                };
            }
        }, {
            key: "updateScrollTopPosition",
            value: function () {
                this.scrollTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;
            }
        }, {
            key: "forEach",
            value: function (t, e) {
                for (var n = 0, i = t.length; n < i; n++) e(t[n]);
            }
        }, {
            key: "css",
            value: function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
            }
        }]) && t(n.prototype, o), e && t(n, e);
        var e, n, i, o = r;

        function r() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = this, i = r;
            if (!(n instanceof i)) throw new TypeError("Cannot call a class as a function");
            this.selector = t, this.elements = [], this.version = "1.3.0", this.vp = this.getViewportSize(), this.body = document.querySelector("body"), this.options = {
                wrap: e.wrap || !1,
                wrapWith: e.wrapWith || "<span></span>",
                marginTop: e.marginTop || 0,
                marginBottom: e.marginBottom || 0,
                stickyFor: e.stickyFor || 0,
                stickyClass: e.stickyClass || null,
                stickyContainer: e.stickyContainer || "body"
            }, this.updateScrollTopPosition = this.updateScrollTopPosition.bind(this), this.updateScrollTopPosition(), window.addEventListener("load", this.updateScrollTopPosition), window.addEventListener("scroll", this.updateScrollTopPosition), this.run();
        }
        n = this, i = o, "undefined" != typeof exports ? module.exports = i : "function" == typeof define && define.amd ? define([], function () {
            return i;
        }) : n.Sticky = i;
        new o(".sticky-element");

       

        
    }(jQuery), jQuery(document).foundation()
    
