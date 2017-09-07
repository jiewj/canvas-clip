;(function () {
    'use strict';
    require('./index.scss');
    let parentEle: any,
        clipBox: any,
        dotBox: any,
        clipImg: any,
        clipImgW: number = 100,
        clipImgH: number = 100,
        clipImgMaxW: number = 100,
        clipImgMaxH: number = 100,
        imgScale: any,
        transX: number = 0,
        transY: number = 0,
        transMaxX: number,
        transMaxY: number,
        dotTopLeft: any,
        dotTopRight: any,
        dotBottomLeft: any,
        dotBottomRight: any;

    class CanvasClip {
        config: any = {
            id: '',
            imgUrl: '',
            scale: null,
            clipImgMinW: 100,
            clipImgMinH: 100
        };

        constructor(ops: any) {
            this.config = Object.assign({}, this.config, ops);

            console.log(this.config);
            let img = new Image;
            img.src = ops.imgUrl;
            parentEle = document.getElementById(ops.id);
            console.dir(parentEle);
            img.onload = () => {
                imgScale = img.width / img.height;
                this.CreateHtml(ops.imgUrl);
                if (imgScale >= 1) {
                    clipBox.style.width = parentEle.clientWidth + 'px';
                    clipBox.style.height = parentEle.clientWidth / imgScale + 'px';
                    this.imgClip();
                } else {

                }
                console.dir(clipBox);
                console.dir(dotBox);
                this.DragEvent();
            };
        }

        DragEvent() {
            let startX: number,
                startY: number,
                moveX: number,
                moveY: number,
                transXStart: number,
                transYStart: number,
                clipImgWStart: number,
                clipImgHStart: number,
                canvasClipMouseDown: boolean = false,
                id: any;

            dotBox.addEventListener('mousedown', (e: any) => {
                e.preventDefault();
                startX = e.pageX;
                startY = e.pageY;
                transXStart = transX;
                transYStart = transY;
                clipImgWStart = clipImgW;
                clipImgHStart = clipImgH;
                canvasClipMouseDown = true;

                id = e.target.id;
            });

            document.addEventListener('mousemove', (e: any) => {
                if (canvasClipMouseDown) {
                    moveX = e.pageX;
                    moveY = e.pageY;
                    switch (id) {
                        case 'dotTopLeft':
                            transX = transXStart + moveX - startX;
                            transY = transYStart + moveY - startY;

                            if (transX >= 0) clipImgW = clipImgWStart + startX - moveX;
                            if (transY >= 0) clipImgH = clipImgHStart + startY - moveY;
                            clipImgMaxW = clipBox.clientWidth - transX;
                            clipImgMaxH = clipBox.clientHeight - transY;
                            break;
                        case 'dotTopRight':
                            transY = transYStart + moveY - startY;

                            clipImgW = clipImgWStart + moveX - startX;
                            if (transY >= 0) clipImgH = clipImgHStart + startY - moveY;
                            clipImgMaxW = clipBox.clientWidth - transX;
                            clipImgMaxH = clipImgHStart + transYStart;
                            break;
                        case 'dotBottomLeft':
                            transX = transXStart + moveX - startX;

                            if (transX >= 0) clipImgW = clipImgWStart + startX - moveX;
                            clipImgH = clipImgHStart + moveY - startY;

                            clipImgMaxW = clipImgWStart + transXStart;
                            clipImgMaxH = clipBox.clientHeight - transY;
                            break;
                        case 'dotBottomRight':
                            clipImgW = clipImgWStart + moveX - startX;
                            clipImgH = clipImgHStart + moveY - startY;

                            clipImgMaxW = clipBox.clientWidth - transX;
                            clipImgMaxH = clipBox.clientHeight - transY;
                            break;
                        default:
                            transX = transXStart + moveX - startX;
                            transY = transYStart + moveY - startY;
                            break;
                    }
                    this.imgClip();
                }
            });
            document.addEventListener('mouseup', (e: any) => {
                console.log(transX, transY, clipImgW, clipImgH);
                canvasClipMouseDown = false;
                console.log(canvasClipMouseDown);

            });
        }

        imgClip() {
            transMaxX = clipBox.clientWidth - dotBox.offsetWidth;
            transMaxY = clipBox.clientHeight - dotBox.offsetHeight;

            transX = Math.max(0,Math.min(transX,transMaxX));
            transY = Math.max(0,Math.min(transY,transMaxY));

            clipImgW = Math.max(this.config.clipImgMinW,Math.min(clipImgW,clipImgMaxW));
            clipImgH = Math.max(this.config.clipImgMinH,Math.min(clipImgH,clipImgMaxH));

            console.log(transX,transY,clipImgW,clipImgH);

            dotBox.style.width = clipImgW + 'px';
            dotBox.style.height = clipImgH + 'px';

            dotBox.style.transform = `translate3d(${transX}px,${transY}px,0)`;
            // dotBox.style.top = transY +'px';
            // dotBox.style.left = transX +'px';
            clipImg.style.clip = `rect(${transY}px,${clipImgW + transX}px,${clipImgH + transY}px,${transX}px)`;

        }

        CreateHtml(imgUrl: any) {
            parentEle.innerHTML = `
<div class="canvasClip-beforeImg" style="background-image: url(${imgUrl})"></div>
<img class="canvasClip-afterImg" src="${imgUrl}"/>
<div class="canvasClip-clipBox">
    <div class="canvasClip-dotBox">
      <div id="dotTopLeft" class="canvasClip-dot canvasClip-dot-topLeft"></div>
      <div id="dotTopRight" class="canvasClip-dot canvasClip-dot-topRight"></div>
      <div id="dotBottomLeft" class="canvasClip-dot canvasClip-dot-bottomLeft"></div>
      <div id="dotBottomRight" class="canvasClip-dot canvasClip-dot-bottomRight"></div>
    </div>
</div>
`;

            clipImg = document.getElementsByClassName('canvasClip-afterImg')[0];
            clipBox = document.getElementsByClassName('canvasClip-clipBox')[0];
            dotBox = document.getElementsByClassName('canvasClip-dotBox')[0];
            dotTopLeft = document.getElementById('dotTopLeft');
            dotTopRight = document.getElementById('dotTopRight');
            dotBottomLeft = document.getElementById('dotBottomLeft');
            dotBottomRight = document.getElementById('dotBottomRight');
            return this;
        }
    }

    (<any> window).CanvasClip = CanvasClip;
})();

