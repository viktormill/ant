import { TestWindow } from '@stencil/core/testing';
import { ApAnt } from './ant';

describe('ant', () => {
  it('should build', () => {
    expect(new ApAnt()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLApAntElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ApAnt],
        html: '<ap-ant></ap-ant>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
