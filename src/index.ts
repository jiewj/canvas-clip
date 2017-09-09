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
        this.ImgUrl(this.config.imgUrl,this.CreateHtml(this.config.imgUrl)).DragEvent();
        return this;
    }

    ImgUrl(imgUrl: any,callback?:any) {
        this.img.src = imgUrl;
        this.clipImgW = this.config.clipImgMinW;
        this.clipImgH = this.config.clipImgMinH;
        this.transX = 0;
        this.transY = 0;
        this.img.onload = () => {
            if(callback){
                callback;
            } else{
                this.clipBgImg.style.backgroundImage = `url(${imgUrl})`;
                this.clipImg.src = imgUrl;
            }
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
            this.ImgClip();
        };
        return this;
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
                switch (id) {
                    case 'dotTopLeft':
                        this.transX = Math.max(0, Math.min(transXStart + moveX - startX, clipImgWStart + transXStart - this.config.clipImgMinW));
                        this.transY = Math.max(0, Math.min(transYStart + moveY - startY, clipImgHStart + transYStart - this.config.clipImgMinH));

                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + startX - moveX, clipImgWStart + transXStart));
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + startY - moveY, clipImgHStart + transYStart));

                        if (this.config.scale) {
                            this.clipImgH = this.clipImgW / this.config.scale;
                            this.transY = transYStart + clipImgHStart - this.clipImgH;
                        }
                        break;
                    case 'dotTopRight':
                        this.transY = Math.max(0, Math.min(transYStart + moveY - startY, clipImgHStart + transYStart - this.config.clipImgMinH));

                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + moveX - startX, this.clipBox.clientWidth - this.transX));
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + startY - moveY, clipImgHStart + transYStart));

                        if (this.config.scale) {
                            this.clipImgH = this.clipImgW / this.config.scale;
                            this.transY = transYStart + clipImgHStart - this.clipImgH;
                        }
                        break;
                    case 'dotBottomLeft':
                        this.transX = Math.max(0, Math.min(transXStart + moveX - startX, clipImgWStart + transXStart - this.config.clipImgMinW));

                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + startX - moveX, clipImgWStart + transXStart));
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + moveY - startY, this.clipBox.clientHeight - this.transY));

                        if (this.config.scale) this.clipImgH = this.clipImgW / this.config.scale;
                        break;
                    case 'dotBottomRight':
                        this.clipImgW = Math.max(this.config.clipImgMinW, Math.min(clipImgWStart + moveX - startX, this.clipBox.clientWidth - this.transX));
                        this.clipImgH = Math.max(this.config.clipImgMinH, Math.min(clipImgHStart + moveY - startY, this.clipBox.clientHeight - this.transY));

                        if (this.config.scale) this.clipImgH = this.clipImgW / this.config.scale;
                        break;
                    default:
                        this.transX = Math.max(0, Math.min(transXStart + moveX - startX, this.clipBox.clientWidth - this.dotBox.offsetWidth));
                        this.transY = Math.max(0, Math.min(transYStart + moveY - startY, this.clipBox.clientHeight - this.dotBox.offsetHeight));
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
        this.dotBox.style.transform = `translate3d(${this.transX}px,${this.transY}px,0)`;
        this.clipImg.style.clip = `rect(${this.transY}px,${this.clipImgW + this.transX}px,${this.clipImgH + this.transY}px,${this.transX}px)`;
        return this;
    }

    CreateHtml(imgUrl: any) {
        this.parentEle.innerHTML = `
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
        this.clipBgImg = document.getElementsByClassName('canvasClip-beforeImg')[0];
        this.clipImg = document.getElementsByClassName('canvasClip-afterImg')[0];
        this.clipBox = document.getElementsByClassName('canvasClip-clipBox')[0];
        this.dotBox = document.getElementsByClassName('canvasClip-dotBox')[0];
        this.dotTopLeft = document.getElementById('dotTopLeft');
        this.dotTopRight = document.getElementById('dotTopRight');
        this.dotBottomLeft = document.getElementById('dotBottomLeft');
        this.dotBottomRight = document.getElementById('dotBottomRight');
        return this;
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

export default CanvasClip;