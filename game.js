var arraynew = [];
var clicked = [];
var level = 1;


$(document).on("keydown", function(){
    if(arraynew.length==0){    
        aleatoryColor();
    }
});

$(".btn").click(function(event){
    if(arraynew.length==0){
        pressed(event);
        gameOver(); 
    }else{

        clicked.push(event.target.id);
        pressed(event);
      
        elClick(clicked.length-1);
    } 
});

function elClick(currentLevel){

    if (arraynew[currentLevel] === clicked[currentLevel]) {

      if (clicked.length === arraynew.length){

        setTimeout(function () {
          aleatoryColor();
        }, 1000);

      }

    } else {

     gameOver();

    }

}

function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 100);
    var gameOver = new Audio('sounds/wrong.mp3')
        gameOver.play();
    $("h1").text("Game over - Press any Key to Start")

    arraynew = [];
    clicked = [];
    level = 1;
}

function aleatoryColor(){
    clicked = [];
    var colors = ["green", "red", "yellow", "blue"];
        var randomColor = Math.round(Math.random()*3);
        var keycolor = colors[randomColor];

        $("h1").text("Level " + level)
        $("." + keycolor).fadeOut(100).fadeIn(100);
    
        sound(keycolor);
        arraynew.push(keycolor);
        level++;

}

function pressed(key){
    $(key.target).addClass("pressed");
    setTimeout(function(){
        $(key.target).removeClass("pressed");
    }, 100);
    sound(key.target.id);
}

function sound(clave){
    switch (clave) {
        case "green":
            var audioGreen = new Audio('sounds/green.mp3')
            audioGreen.play();
            break;
        case "blue":
            var audioBlue = new Audio('sounds/blue.mp3')
            audioBlue.play();
            break;
        case "yellow":
            var audioYellow = new Audio('sounds/yellow.mp3')
            audioYellow.play();
            break;
        case "red":
            var audioRed = new Audio('sounds/red.mp3')
            audioRed.play();
            break;
    
        default:
            break;
    }
}







