;(function () {
    'use strict';
    require('./index.scss');
    let parentEle: any,
        clipBox: any,
        dotBox: any,
        clipBgImg:any,
        clipImg: any,
        clipImgW: number,
        clipImgH: number,
        imgScale: any,
        transX: number,
        transY: number,
        dotTopLeft: any,
        dotTopRight: any,
        dotBottomLeft: any,
        dotBottomRight: any,
        img = new Image;

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
            parentEle = document.getElementById(this.config.id);
            this.CreateHtml(this.config.imgUrl).ImgUrl(this.config.imgUrl);
            this.DragEvent();
        }

        ImgUrl(imgUrl:any){
            img.src = imgUrl;
            clipImgW = this.config.clipImgMinW;
            clipImgH = this.config.clipImgMinH;
            transX = 0;
            transY = 0;
            img.onload = () => {
                clipBgImg.style.backgroundImage = `url(${imgUrl})`;
                clipImg.src = imgUrl;
                if (img.width / img.height >= 1) {
                    imgScale = img.width / parentEle.clientWidth;

                    clipImg.style.width = parentEle.clientWidth + 'px';
                    clipBox.style.width = parentEle.clientWidth + 'px';
                    clipBox.style.height = img.height / imgScale + 'px';
                } else {
                    imgScale = img.height / parentEle.clientHeight;

                    clipImg.style.width = img.width / imgScale + 'px';
                    clipBox.style.width = img.width / imgScale + 'px';
                    clipBox.style.height = parentEle.clientHeight + 'px';
                }
                this.ImgClip();
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
                            transX = Math.max(0, Math.min(transXStart + moveX - startX, clipImgWStart + transXStart - this.config.clipImgMinW));
                            transY = Math.max(0, Math.min(transYStart + moveY - startY, clipImgHStart + transYStart - this.config.clipImgMinH));

                            clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + startX - moveX, clipImgWStart + transXStart));
                            clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + startY - moveY, clipImgHStart + transYStart));

                            if (this.config.scale) {
                                clipImgH = clipImgW / this.config.scale;
                                transY = transYStart + clipImgHStart - clipImgH;
                            }
                            break;
                        case 'dotTopRight':
                            transY = Math.max(0, Math.min(transYStart + moveY - startY, clipImgHStart + transYStart - this.config.clipImgMinH));

                            clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + moveX - startX, clipBox.clientWidth - transX));
                            clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + startY - moveY, clipImgHStart + transYStart));

                            if (this.config.scale) {
                                clipImgH = clipImgW / this.config.scale;
                                transY = transYStart + clipImgHStart - clipImgH;
                            }
                            break;
                        case 'dotBottomLeft':
                            transX = Math.max(0, Math.min(transXStart + moveX - startX, clipImgWStart + transXStart - this.config.clipImgMinW));

                            clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + startX - moveX, clipImgWStart + transXStart));
                            clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + moveY - startY, clipBox.clientHeight - transY));

                            if (this.config.scale) clipImgH = clipImgW / this.config.scale;
                            break;
                        case 'dotBottomRight':
                            clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + moveX - startX, clipBox.clientWidth - transX));
                            clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + moveY - startY, clipBox.clientHeight - transY));

                            if (this.config.scale) clipImgH = clipImgW / this.config.scale;
                            break;
                        default:
                            transX = Math.max(0, Math.min(transXStart + moveX - startX, clipBox.clientWidth - dotBox.offsetWidth));
                            transY = Math.max(0, Math.min(transYStart + moveY - startY, clipBox.clientHeight - dotBox.offsetHeight));
                            break;
                    }
                    this.ImgClip();
                }
            });
            document.addEventListener('mouseup', () => {
                canvasClipMouseDown = false;
            });
            return this;
        }

        ImgClip() {
            dotBox.style.width = clipImgW + 'px';
            dotBox.style.height = clipImgH + 'px';
            dotBox.style.transform = `translate3d(${transX}px,${transY}px,0)`;
            clipImg.style.clip = `rect(${transY}px,${clipImgW + transX}px,${clipImgH + transY}px,${transX}px)`;
            return this;
        }

        CanvasClipImg() {
            let x = transX * imgScale,
                y = transY * imgScale,
                w = clipImgW * imgScale,
                h = clipImgH * imgScale,
                canvasBox = document.createElement('canvas'),
                ctx = canvasBox.getContext('2d');

            canvasBox.width = w;
            canvasBox.height = h;
            ctx.drawImage(clipImg, x, y, w, h, 0, 0, w, h);
            let data = canvasBox.toDataURL();
            data = data.split(',')[1];
            data = window.atob(data);
            let ia = new Uint8Array(data.length);
            for (let i = 0; i < data.length; i++) {
                ia[i] = data.charCodeAt(i);
            }
            let blob = new Blob([ia], {type: "image/png"});
            console.log(blob);
            return blob;
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
            clipBgImg = document.getElementsByClassName('canvasClip-beforeImg')[0];
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

