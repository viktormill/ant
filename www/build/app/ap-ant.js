/*! Built with http://stenciljs.com */
const { h } = window.App;

class ApAnt {
    log(event) {
        const { detail } = event;
        this.onTogglePLay.emit(detail);
    }
    render() {
        return (h("div", null,
            h("ap-toggle-play", { paused: this.mediaStatus ? this.mediaStatus.paused : undefined }),
            h("span", { class: "timecode" }, this.mediaStatus ? this.mediaStatus.currentTime : '')));
    }
    static get is() { return "ap-ant"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "mediaStatus": {
            "type": "Any",
            "attr": "media-status"
        }
    }; }
    static get events() { return [{
            "name": "onTogglePLay",
            "method": "onTogglePLay",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "onPlay",
            "method": "log"
        }]; }
    static get style() { return ":host div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #e91212;\n  height: 50px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: white; }\n\n.timecode {\n  margin-right: 90%;\n  margin-left: auto; }"; }
}

export { ApAnt };
