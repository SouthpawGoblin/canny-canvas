import canny from '../src/index';

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
  scene.addObject(new canny.Rect());

  scene.loop(0);
}