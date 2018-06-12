/*! Built with http://stenciljs.com */
App.loadBundle('ap-ant', ['exports'], function (exports) {
    var h = window.App.h;
    var ApAnt = /** @class */ (function () {
        function ApAnt() {
        }
        ApAnt.prototype.log = function (event) {
            var detail = event.detail;
            this.onTogglePLay.emit(detail);
        };
        ApAnt.prototype.render = function () {
            return (h("div", null, h("ap-toggle-play", { paused: this.mediaStatus ? this.mediaStatus.paused : undefined }), h("span", { class: "timecode" }, this.mediaStatus ? this.mediaStatus.currentTime : '')));
        };
        Object.defineProperty(ApAnt, "is", {
            get: function () { return "ap-ant"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApAnt, "encapsulation", {
            get: function () { return "shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApAnt, "properties", {
            get: function () {
                return {
                    "mediaStatus": {
                        "type": "Any",
                        "attr": "media-status"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApAnt, "events", {
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
        Object.defineProperty(ApAnt, "listeners", {
            get: function () {
                return [{
                        "name": "onPlay",
                        "method": "log"
                    }];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ApAnt, "style", {
            get: function () { return "[data-ap-ant-host]   div[data-ap-ant] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #e91212;\n  height: 50px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: white; }\n\n.timecode[data-ap-ant] {\n  margin-right: 90%;\n  margin-left: auto; }"; },
            enumerable: true,
            configurable: true
        });
        return ApAnt;
    }());
    exports.ApAnt = ApAnt;
    Object.defineProperty(exports, '__esModule', { value: true });
});
