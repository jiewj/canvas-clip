import CanvasClip from './index';
// let CanvasClip = require('./index').default;

let img1 = require('./e_bw.jpg');
let img2 = require('./tooopen.jpg');

console.dir(CanvasClip);
let html = `
<div class="test" id="test"></div>
<input type="button" value="clip" id="clip"/>
`;
let select = document.createElement('select');
select.innerHTML = `
    <option value=${img1}>横图</option>
    <option value=${img2}>竖图</option>`;

document.body.innerHTML = html;
document.body.appendChild(select);
let test = new CanvasClip({
    id: 'test',
    imgUrl: img1,
    scale: 2 / 1,
    clipImgMinW: 200,
    clipImgMinH: 100
});
console.dir(test);

select.addEventListener('change', function () {
    test.config.imgUrl = this.value;
    test.ImgUrl(this.value);
});
document.getElementById('clip').addEventListener('click', () => {
    let img = document.getElementById('img');
    if (img) {
        img.setAttribute('src', URL.createObjectURL(test.CanvasClipImg()));
    } else {
        img = document.createElement('img');
        img.id = 'img';
        img.setAttribute('src', URL.createObjectURL(test.CanvasClipImg()));
        document.body.appendChild(img);
    }
});
