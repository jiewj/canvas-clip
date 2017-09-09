# canvas-clip

[**预览地址**](https://jiewj.github.io/canvas-clip/)

[canvas-clip.js](./dist/)

### 使用方法

> **注意**：本地图片先上传到服务器在进行裁剪
>
> 可 `import CanvasClip from './canvas-clip';`
>
> 或 `let CanvasClip = require('./canvas-clip').default;`
>
> 或 `<script src="./js/canvas-clip.js"><script>`

``` html
<div id="idname" class="classname"><div>
```

``` css
.classname{
    position: relative;
    width: 500px;
    htight: 500px;
    ...
}
```

``` javascript
var canvasClip = new CanvasClip({
    id: 'idname',
    imgUrl: '图片地址',
    scale: 2 / 1, // 比例 默认null
    clipImgMinW: 200, // 最小宽度 默认100
    clipImgMinH: 100 // 最小高度 默认100
  });
```

### 更换图片地址
``` javascript
canvasClip.ImgUrl('图片url');
```

### 获取blob
``` javascript
canvasClip.CanvasClipImg(); // 返回blob

img.src = URL.createObjectURL(canvasClip.CanvasClipImg());
```