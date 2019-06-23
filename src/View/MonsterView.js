import { View } from "./View";

export class MonsterView extends View {
    render(){
        let monsterForm = this.element.querySelector("#monsterCreateForm");
        monsterForm.addEventListener("submit", this.onMonsterCreate);


        let container = this.element.querySelector("#monsterCanvas");
        this.init(container, 100, 100, "#ddd");

    }

    createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }

    init(container, width, height, fillColor) {
        this.canvas = this.createCanvas(container, width, height);
        var ctx = this.canvas.context;
        // define a custom fillCircle method
        ctx.fillCircle = function(x, y, radius, fillColor) {
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();
        };

        
        ctx.clearTo = function(fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#ddd");

        // bind mouse events
        this.canvas.node.onmousemove = (e) => {
            if (!this.canvas.isDrawing) {
               return;
            }

            var x = this.getMousePos(this.canvas.node, e).x;
            var y = this.getMousePos(this.canvas.node,e).y;

            var radius = 2; // or whatever
            var fillColor = '#ff0000';

            if(!this.canvas.erase){
                ctx.fillCircle(x, y, radius, fillColor);
            }
            else {
                ctx.fillCircle(x,y,radius +2, "#ddd");
            }
        };

        this.canvas.node.onmousedown = (e) => {
            this.canvas.isDrawing = true;
            console.log("Drawing?");
        };
        this.canvas.node.onmouseup = (e) => {
            this.canvas.isDrawing = false;
        };

        this.element.querySelector("#eraseButton").addEventListener('click', (e) => {
            this.canvas.erase = !this.canvas.erase;
        });
    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }
    canvasDataUri(){
       return this.canvas.node.toDataURL();
    }
    
    loadFromDataUri(dataUri){
        let img = new Image;
        img.src = dataUri;
        img.onload = function(){
            var ctx = this.canvas.context;
            ctx.drawImage(img,0,0);
        }.bind(this);
    }
}