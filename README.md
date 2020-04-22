# Canny Canvas

A js canvas 2D renderer written in Typescript. Inspired by Three.js and Unity.

[Demo here](https://southpawgoblin.github.io/canny-canvas/)

## Installation

```bash
npm install canny-canvas --save-dev
```

or

```bash
yarn add canny-canvas
```

## Get Started

1. Create a `Scene`, which takes a container dom element as input. There can be multiple `Scene`s, each `Scene` maintains a canvas element in the DOM.

```js
import { Scene, Rect } from 'canny-canvas';

const dom = document.getElementById('app');
const scene = new Scene(dom);
```

2. Add `Object`s to the `Scene`

```js
// add a static green rect at (200, 200)
scene.addObject(new Rect({
  x: 200,
  y: 200,
  fillColor: '#00ff00'
}));

// add a red box at (0, 500) which moves to the right at a uniform velocity.
scene.addObject(new Rect({
  x: 0,
  y: 500,
  fillColor: '#ff0000',
  // DON'T use arrow function for update, or you'll lose access to the object's own properties.
  update: function(deltaTime) {
    this.x += deltaTime * 0.1;
  }
}));

// objects can be stacked, an object's position is relative to its parent
const parentRect = new Rect({
  x: 100,
  y: 100,
  width: 50,
  height: 50
});
const childRect = new Rect({
  x: 50,
  y: 50,
  width: 50,
  height: 50
});
parentRect.addObject(childRect);
scene.addObject(parentRect);
```

3. Finally, start the render loop and you'll see all the objects are rendered on the canvas with animations defined in their `update` function.

```js
scene.loop();
```
