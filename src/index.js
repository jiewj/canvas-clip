'use strict';

let canvasClip = document.createElement('div');
canvasClip.style.cssText = `width: 500px;height: 400px;border: 1px solid #333;margin: 30px auto;background:no-repeat center center /contain;box-sizing:border-box;`;
console.dir(canvasClip);
document.body.appendChild(canvasClip);



let canvas = document.createElement('canvas');
canvas.width = canvasClip.clientWidth;
canvas.height = canvasClip.clientHeight;

let ctx = canvas.getContext('2d');
let img = new Image;
let imgZoom, dx, dy, dWidth, dHeight;

img.src = 'e_bw.jpg';

img.onload = () => {
  console.log('img onload');
  console.dir(img);
  canvasClip.style.backgroundImage = `url(${img.src})`;


  if (img.width >= img.height) {
    imgZoom = canvasClip.clientWidth / img.width;
    dx = 0;
    dy = (canvasClip.clientHeight - img.height * imgZoom) / 2;
    dWidth = canvasClip.clientWidth;
    dHeight = img.height * imgZoom;

    ctx.drawImage(img, dx, dy, dWidth, dHeight);
    let data = canvas.toDataURL();
    // data=data.split(',')[1];
    document.getElementById('img').src = data;
  } else {
    imgZoom = canvasClip.clientHeight / img.height;
  }
};





