import { Component, Event, EventEmitter, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'ap-ant',
  styleUrl: 'ant.scss',
  shadow: true
})
export class ApAnt {
  @Prop() mediaStatus: any;
  @Event() onTogglePLay : EventEmitter;

  @Listen('onPlay')
  log(event: CustomEvent) {
    const { detail } = event;

    this.onTogglePLay.emit(detail);
  }

  render() {
    return (
      <div>
        <ap-toggle-play paused={this.mediaStatus ? this.mediaStatus.paused : undefined}></ap-toggle-play>
        <span class="timecode">{this.mediaStatus ? this.mediaStatus.currentTime : ''}</span>
      </div>
    );
  }
}
