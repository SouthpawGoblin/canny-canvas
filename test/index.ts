import { CannyScene, CannyRect } from '../src/index';

const dom = document.getElementById('app');
if (dom) {
  const scene = new CannyScene(dom);
  scene.addObject(new CannyRect({
    x: 200,
    y: 200,
    fillColor: '#00ff00'
  }));
  scene.addObject(new CannyRect({
    x: -200,
    y: -200,
    fillColor: '#0000ff'
  }));
  const rect = new CannyRect({
    x: -800,
    update: function(this: CannyRect, deltaTime: number) {
      this.x += deltaTime * 0.1;
      this.width += deltaTime * 0.1;
    }
  });
  rect.addObject(new CannyRect({
    x: 50,
    y: 50,
    fillColor: '#ff0000'
  }));
  scene.addObject(rect);

  scene.loop(0);
}