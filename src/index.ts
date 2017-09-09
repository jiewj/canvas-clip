'use strict';
class CanvasClip {
    config: any = {
        id: '',
        imgUrl: '',
        scale: null,
        clipImgMinW: 100,
        clipImgMinH: 100
    };
    parentEle: any;
    clipBox: any;
    dotBox: any;
    clipBgImg: any;
    clipImg: any;
    clipImgW: number;
    clipImgH: number;
    imgScale: any;
    transX: number;
    transY: number;
    dotTopLeft: any;
    dotTopRight: any;
    dotBottomLeft: any;
    dotBottomRight: any;
    img = new Image;

    constructor(ops: any) {
        require('./index.scss');
        this.config = Object.assign({}, this.config, ops);
        this.parentEle = document.getElementById(this.config.id);
        this.ImgUrl(this.config.imgUrl, this.CreateHtml());
    }

    ImgUrl(imgUrl: any, callback?: any) {
        this.img.src = imgUrl;
        this.clipImgW = this.config.clipImgMinW;
        this.clipImgH = this.config.clipImgMinH;
        this.transX = 0;
        this.transY = 0;
        this.img.onload = () => {
            if (callback) callback.next();
            if (this.img.width / this.img.height >= 1) {
                this.imgScale = this.img.width / this.parentEle.clientWidth;

                this.clipImg.style.width = this.parentEle.clientWidth + 'px';
                this.clipBox.style.width = this.parentEle.clientWidth + 'px';
                this.clipBox.style.height = this.img.height / this.imgScale + 'px';
            } else {
                this.imgScale = this.img.height / this.parentEle.clientHeight;

                this.clipImg.style.width = this.img.width / this.imgScale + 'px';
                this.clipBox.style.width = this.img.width / this.imgScale + 'px';
                this.clipBox.style.height = this.parentEle.clientHeight + 'px';
            }
            this.clipBgImg.style.backgroundImage = `url(${imgUrl})`;
            this.clipImg.src = imgUrl;
            if (callback) callback.next();

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

        this.dotBox.addEventListener('mousedown', (e: any) => {
            e.preventDefault();
            startX = e.pageX;
            startY = e.pageY;
            transXStart = this.transX;
            transYStart = this.transY;
            clipImgWStart = this.clipImgW;
            clipImgHStart = this.clipImgH;
            canvasClipMouseDown = true;

            id = e.target.id;
        });

        document.addEventListener('mousemove', (e: any) => {
            if (canvasClipMouseDown) {
                moveX = e.pageX;
                moveY = e.pageY;
                let x: number, y: number, w: number, h: number;
                switch (id) {
                    case 'dotTopLeft':
                        if (this.config.scale) {
                            if (this.clipImgW >= clipImgWStart + transXStart) break;
                            if (this.clipImgH >= clipImgHStart + transYStart) break;
                        }
                        x = transXStart + moveX - startX;
                        y = transYStart + moveY - startY;
                        w = clipImgWStart + startX - moveX;
                        h = clipImgHStart + startY - moveY;
                        this.transX = Math.max(0, Math.min(x, clipImgWStart + transXStart - this.config.clipImgMinW));
                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(w, clipImgWStart + transXStart));

                        if (this.config.scale) {
                            h = this.clipImgW / this.config.scale;
                            y = transYStart + clipImgHStart - h;
                        }
                        this.transY = Math.max(0, Math.min(y, clipImgHStart + transYStart - this.config.clipImgMinH));
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(h, clipImgHStart + transYStart));
                        break;
                    case 'dotTopRight':
                        if (this.config.scale) {
                            if (this.clipImgW >= this.clipBox.clientWidth - this.transX) break;
                            if (this.clipImgH >= clipImgHStart + transYStart) break;
                        }
                        y = transYStart + moveY - startY;
                        w = clipImgWStart + moveX - startX;
                        h = clipImgHStart + startY - moveY;
                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(w, this.clipBox.clientWidth - this.transX));

                        if (this.config.scale) {
                            h = this.clipImgW / this.config.scale;
                            y = transYStart + clipImgHStart - h;
                        }
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(h, clipImgHStart + transYStart));
                        this.transY = Math.max(0, Math.min(y, clipImgHStart + transYStart - this.config.clipImgMinH));
                        break;
                    case 'dotBottomLeft':
                        if (this.config.scale) {
                            if (this.clipImgW >= clipImgWStart + transXStart) break;
                            if (this.clipImgH >= this.clipBox.clientHeight - this.transY) break;
                        }
                        x = transXStart + moveX - startX;
                        w = clipImgWStart + startX - moveX;
                        h = clipImgHStart + moveY - startY;
                        this.transX = Math.max(0, Math.min(x, clipImgWStart + transXStart - this.config.clipImgMinW));
                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(w, clipImgWStart + transXStart));

                        if (this.config.scale) h = this.clipImgW / this.config.scale;
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(h, this.clipBox.clientHeight - this.transY));
                        break;
                    case 'dotBottomRight':
                        if (this.config.scale) {
                            if (this.clipImgW >= this.clipBox.clientWidth - this.transX) break;
                            if (this.clipImgH >= this.clipBox.clientHeight - this.transY) break;
                        }
                        w = clipImgWStart + moveX - startX;
                        h = clipImgHStart + moveY - startY;
                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(w, this.clipBox.clientWidth - this.transX));

                        if (this.config.scale) h = this.clipImgW / this.config.scale;
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(h, this.clipBox.clientHeight - this.transY));
                        break;
                    default:
                        x = transXStart + moveX - startX;
                        y = transYStart + moveY - startY;
                        this.transX = Math.max(0, Math.min(x, this.clipBox.clientWidth - this.dotBox.offsetWidth));
                        this.transY = Math.max(0, Math.min(y, this.clipBox.clientHeight - this.dotBox.offsetHeight));
                        break;
                }

                this.ImgClip();
            }
        });
        document.addEventListener('mouseup', () => {
            canvasClipMouseDown = false;
        });
    }

    ImgClip() {
        this.dotBox.style.width = this.clipImgW + 'px';
        this.dotBox.style.height = this.clipImgH + 'px';
        this.dotBox.style.transform = `translate(${this.transX}px,${this.transY}px)`;
        this.dotBox.style.msTransform = `translate(${this.transX}px,${this.transY}px)`;
        this.clipImg.style.clip = `rect(${this.transY}px,${this.clipImgW + this.transX}px,${this.clipImgH + this.transY}px,${this.transX}px)`;
    }

    *CreateHtml() {
        this.clipBgImg = document.createElement('div');
        this.clipBgImg.className = 'canvasClip-beforeImg';
        this.clipImg = document.createElement('img');
        this.clipImg.className = 'canvasClip-afterImg';
        this.clipBox = document.createElement('div');
        this.clipBox.className = 'canvasClip-clipBox';
        yield this.clipBox.innerHTML = `
<div class="canvasClip-dotBox">
<div id="dotTopLeft" class="canvasClip-dot canvasClip-dot-topLeft"></div>
<div id="dotTopRight" class="canvasClip-dot canvasClip-dot-topRight"></div>
<div id="dotBottomLeft" class="canvasClip-dot canvasClip-dot-bottomLeft"></div>
<div id="dotBottomRight" class="canvasClip-dot canvasClip-dot-bottomRight"></div>
</div>`;
        this.parentEle.appendChild(this.clipBgImg);
        this.parentEle.appendChild(this.clipImg);
        this.parentEle.appendChild(this.clipBox);
        this.dotBox = document.getElementsByClassName('canvasClip-dotBox')[0];
        this.dotTopLeft = document.getElementById('dotTopLeft');
        this.dotTopRight = document.getElementById('dotTopRight');
        this.dotBottomLeft = document.getElementById('dotBottomLeft');
        this.dotBottomRight = document.getElementById('dotBottomRight');
        this.DragEvent();
    }

    CanvasClipImg() {
        let x = this.transX * this.imgScale,
            y = this.transY * this.imgScale,
            w = this.clipImgW * this.imgScale,
            h = this.clipImgH * this.imgScale,
            canvasBox = document.createElement('canvas'),
            ctx = canvasBox.getContext('2d');

        canvasBox.width = w;
        canvasBox.height = h;
        ctx.drawImage(this.clipImg, x, y, w, h, 0, 0, w, h);
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
}
(<any> window).CanvasClip = CanvasClip;
export default CanvasClip;