var c = document.getElementById("antCanvas");
var ctx = c.getContext("2d");

var hiveSize = 50;
var ants = [];

const scent = {
    HOME:"home",
    FOOD:"food"
}

function setup(){
    for(var i=0; i<hiveSize; i++){
        ants[i] = new Ant(Math.random()*25, Math.random()*25);
    }
}

function draw(){

}

function update(){
    
}

class Ant{
    constructor(x,y){
        this.x = x;
        this,y = y;
    }
}

class Pheromone {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.size = 2.5;
        this.type = type;
        this.life = 1000;
        this.color = '';
    }

    update(){
        switch (this.type){
            case scent.FOOD:
                this.color = 'rgba(0,138,0,'+ this.life/10 +')';
                break;
            case scent.HOME:
                this.color = 'rgba(162,0,37,'+ this.life/10 +')';
                break;
        }
        this.life -= 1;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(x-this.size, y-this.size, this.size);
        ctx.stroke();
    }
}

class Vector{
    constructor(arr){
        this.arr = arr;
    }
}

// double-dog-leg hypothenuse approximation
// http://forums.parallax.com/discussion/147522/dog-leg-hypotenuse-approximation
function hypot(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    var lo = Math.min(a, b)
    var hi = Math.max(a, b)
    return hi + 3 * lo / 32 + Math.max(0, 2 * lo - hi) / 8 + Math.max(0, 4 * lo - hi) / 16
}