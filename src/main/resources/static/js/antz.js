var c = document.getElementById("antCanvas");
var ctx = c.getContext("2d");

const pheromone = {
    HOME:"home",
    FOOD:"food"
}

function setup(){

}

function draw(){

}

function update(){
    
}

class pheromone {
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
            case pheromone.FOOD:
                this.color = 'rgba(0,138,0,'+ this.life/10 +')';
                break;
            case pheromone.HOME:
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

class ant{
    constructor(x,y){

    }

    update(){

    }

    draw(){

    }
}

class 