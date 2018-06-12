import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'ap-toggle-play',
  styleUrl: 'toggle-play.scss'
})
export class ApTogglePlay {
  @Event() onTogglePLay : EventEmitter;
  @Prop() paused: boolean;

  isPaused = this.paused;

  selectProfilePage() {
    this.isPaused = !this.isPaused;
    this.onTogglePLay.emit(this.isPaused);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.selectProfilePage()}>
          {this.paused ? 'Play' : 'Pause'}
        </button>
      </div>
    );
  }
}
