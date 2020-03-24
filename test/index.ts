import canny from '../src/index';
import CannyRect from '../src/Rect';

const dom = document.getElementById('app');
if (dom) {
  const scene = new canny.Scene(dom);
  scene.addObject(new canny.Rect({
    x: 200,
    y: 200,
    fillColor: '#00ff00'
  }));
  scene.addObject(new canny.Rect({
    x: -200,
    y: -200,
    fillColor: '#0000ff'
  }));
  const rect = new canny.Rect({
    x: -800,
    update: function (deltaTime: number) {
      const self = this as CannyRect;
      self.x += deltaTime * 0.1;
      self.width += deltaTime * 0.1;
    }
  });
  rect.addObject(new canny.Rect({
    x: 50,
    y: 50,
    fillColor: '#ff0000'
  }));
  scene.addObject(rect);

  scene.loop(0);
}