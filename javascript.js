


/*CHARACTER MOVEMENT*/ 
const section = document.querySelector('section');
const c = section.querySelector('canvas').getContext('2d');

section.querySelector('canvas').width = 999;
section.querySelector('canvas').height = innerHeight;

class Player {
    constructor() {
        this.position = {
            x: section.querySelector('canvas').width / 2,
            y: section.querySelector('canvas').height - 100
        };

        this.velocity = {
            x: 0,
            y: 0
        };

        const image = new Image();
        image.src = '/images/mice.png';
        image.onload = () => {
            
            const scale = (0 );
            this.image = image;
            this.width = image.width * 0.2;
            this.height = image.height * 1;
            this.position = {
                x: section.querySelector('canvas').width / 2 - this.width / 2,
                y: section.querySelector('canvas').height - this.height - 20
            };
            this.update();
        };
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        c.clearRect(0, 0, section.querySelector('canvas').width, section.querySelector('canvas').height);

        if (this.image) {
            this.draw();
            this.position.x += this.velocity.x;
        }
    }
}


const player = new Player();
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    space: {
        pressed: false
    }
};

function animate() {
    requestAnimationFrame(animate);
    player.update();

    if (keys.a.pressed && player.position.x >= 0) {
        player.velocity.x = -5;
    } else if (keys.d.pressed && player.position.x + player.width <= section.querySelector('canvas').width) {
        player.velocity.x = 5;
    } else {
        player.velocity.x = 0;
    }

    if (keys.space.pressed) {
        // Perform action for spacebar
        console.log('Spacebar pressed');
        // Add your action here
    }
}
animate();


function handleKeyDown(event) {
    switch (event.key) {
        case 'a':
            keys.a.pressed = true;
            break;
        case 'd':
            keys.d.pressed = true;
            break;
        case ' ':
            checkAnswer()
            break;
    }
}

function handleKeyUp(event) {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
}

addEventListener('keydown', handleKeyDown);
addEventListener('keyup', handleKeyUp);


//functions correct and incorrect

function correct(){
    document.getElementById('teisingai').innerHTML = "Teisingai";
    setTimeout(() => {
        document.getElementById('teisingai').innerHTML = "";
        newquestion1()
    },1500);
   
    console.log('correct') 
}
function incorrect(){
    document.getElementById('neteisingai').innerHTML = "Neteisingai";
    setTimeout(() => {
        document.getElementById('neteisingai').innerHTML = "";
        newquestion1()
    },1500);
    console.log('incorrect') 
}


function checkAnswer(){
    if(player.position.x <= 333&& rand == 0){   //left
        correct()
        
        
    }
    else if(player.position.x >= 666&& rand == 2){  //right
        correct()
    }
    else if(player.position.x <= 666&& player.position.x >=333&& rand == 1) {     //center
        correct()
    }
    else{
        incorrect()
        }
}



var operation1 = {
    '+': function (num1, num2,num3,num4,num5,num6) { return num1 + num2,num3 + num4, num5 + num6; }
};

var a = 10;
var box1,box2,box3;

var equation;
var rand;
var array;

function newquestion1() {
    box1 = 1;
    box2 = 1;   
    box3 = 1;
     while(box1 == box2 || box1 == box2 || box2 == box3){
    var num1 = Math.floor(Math.random() * a) + 1;
    var num2 = Math.floor(Math.random() * a) + 1;
    var num3 = Math.floor(Math.random() * a) + 1;
    var num4 = Math.floor(Math.random() * a) + 1;
    var num5 = Math.floor(Math.random() * a) + 1;
    var num6 = Math.floor(Math.random() * a) + 1;
    box1 = num1 + num2;
    box2 = num3 + num4;
    box3 = num5 + num6;
    document.getElementById("11question").innerHTML = num1 + " " + "+" + " " + num2;
    document.getElementById("12question").innerHTML = num3 + " " + "+" + " " + num4;
    document.getElementById("13question").innerHTML = num5 + " " + "+" + " " + num6;
     array = [box1,box2,box3];

    }

    rand = Math.floor(Math.random() * 3);
    document.getElementById("atsakymas").innerHTML = array[rand];
    console.log(rand)
}
    

 document.addEventListener('DOMContentLoaded', newquestion1); // Call newquestion on page load


 document.getElementById("hard").onclick = function() {
   
    a += 10;

   newquestion1()
 
}

document.getElementById("easy").onclick = function() {
   
    if( a ==10  ){
        return
    }
   
    a -= 10;
    newquestion1()
    
}

document.getElementById("minusas").onclick = function() {
    location.href = "/Minusas/minusas.html";
};
document.getElementById("pliusas").onclick = function() {
    location.href = "/index.html";
};

