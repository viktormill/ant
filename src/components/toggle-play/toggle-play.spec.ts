import { TestWindow } from '@stencil/core/testing';
import { ApTogglePlay } from './toggle-play';

describe('toggle-play', () => {
  it('should build', () => {
    expect(new ApTogglePlay()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLApTogglePlayElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ApTogglePlay],
        html: '<ap-toggle-play></ap-toggle-play>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
