/*! Built with http://stenciljs.com */
App.loadBundle('ap-toggle-play', ['exports'], function (exports) {
    var h = window.App.h;
    var ApTogglePlay = /** @class */ (function () {
        function ApTogglePlay() {
            this.isPaused = this.paused;
        }
        ApTogglePlay.prototype.selectProfilePage = function () {
            this.isPaused = !this.isPaused;
            this.onTogglePLay.emit(this.isPaused);
        };
        ApTogglePlay.prototype.render = function () {
            var _this = this;
            return (h("div", null, h("button", { onClick: function () { return _this.selectProfilePage(); } }, this.paused ? 'Play' : 'Pause')));
        };
        Object.defineProperty(ApTogglePlay, "is", {
            get: function () { return "ap-toggle-play"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApTogglePlay, "properties", {
            get: function () {
                return {
                    "paused": {
                        "type": Boolean,
                        "attr": "paused"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApTogglePlay, "events", {
            get: function () {
                return [{
                        "name": "onTogglePLay",
                        "method": "onTogglePLay",
                        "bubbles": true,
                        "cancelable": true,
                        "composed": true
                    }];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApTogglePlay, "style", {
            get: function () { return "button {\n  background: #109417;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer; }\n\nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px); }"; },
            enumerable: true,
            configurable: true
        });
        return ApTogglePlay;
    }());
    exports.ApTogglePlay = ApTogglePlay;
    Object.defineProperty(exports, '__esModule', { value: true });
});
