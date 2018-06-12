/*! Built with http://stenciljs.com */
const { h } = window.App;

class ApTogglePlay {
    constructor() {
        this.isPaused = this.paused;
    }
    selectProfilePage() {
        this.isPaused = !this.isPaused;
        this.onTogglePLay.emit(this.isPaused);
    }
    render() {
        return (h("div", null,
            h("button", { onClick: () => this.selectProfilePage() }, this.paused ? 'Play' : 'Pause')));
    }
    static get is() { return "ap-toggle-play"; }
    static get properties() { return {
        "paused": {
            "type": Boolean,
            "attr": "paused"
        }
    }; }
    static get events() { return [{
            "name": "onTogglePLay",
            "method": "onTogglePLay",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "button {\n  background: #109417;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer; }\n\nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px); }"; }
}

export { ApTogglePlay };
