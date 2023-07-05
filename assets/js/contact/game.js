'use strict';
const canvas = document.querySelector('.game');
const ctx = canvas.getContext("2d");
const screenWidth = canvas.width;
const screenHeight = canvas.height;

const bg_game = "#213555";

class Player{
    constructor(){
        this.x=0;
        this.y=0;
        this.v=0;
        this.speed=0;
        this.size=50;
        this.limbs={
            nose:{
                x:this.x+this.size/2,
                y:this.y+this.size/2,
                color:'#FF0000',
                w:30,
                h:15,
                v:13,
                stake:0,
            }
        }

    }
    draw(){
        ctx.fillStyle="#7895CB";
        ctx.fillRect(this.x,this.y,this.size,this.size);
        ctx.fillStyle=this.limbs.nose.color;
        ctx.fillRect(this.limbs.nose.x,this.limbs.nose.y,this.limbs.nose.w,this.limbs.nose.h);
    }
    update(){
        this.y+=this.speed;
    }
}

const gen = new Player;
const Interval = ()=>{
    ctx.save();
    ctx.fillStyle=bg_game;
    ctx.fillRect(0,0,screenWidth,screenHeight);
    ctx.restore();
    requestAnimationFrame(Interval);
}

try{
    Interval();
}catch(err){
    console.log(err.message);
}
