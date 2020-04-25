import { Scene, Rect } from '../src/index';

const dom = document.getElementById('app');
if (dom) {
  const scene = new Scene(dom);
  scene.addObject(new Rect({
    x: 200,
    y: 200,
    color: '#00ff00',
    stroke: true
  }));
  scene.addObject(new Rect({
    x: -200,
    y: -200,
    color: '#0000ff',
    stroke: true,
    strokeWidth: 30,
    update: function(this: Rect, deltaTime: number) {
      this.rotation += deltaTime * 0.001;
    }
  }));
  const rect = new Rect({
    x: -800,
    update: function(this: Rect, deltaTime: number) {
      this.x += deltaTime * 0.1;
      this.width += deltaTime * 0.1;
    }
  });
  rect.addObject(new Rect({
    x: 50,
    y: 50,
    color: '#ff0000',
    update: function(this: Rect, deltaTime: number) {
      this.rotation += -deltaTime * 0.001;
    }
  }));
  scene.addObject(rect);

  scene.loop();
}