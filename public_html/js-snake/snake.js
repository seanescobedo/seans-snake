/*----------------------------------------------------------------------------
 * Variables
 -----------------------------------------------------------------------------*/
var snake;
var snakeLength;
var snakeSize;
var snakeDirection;

var food;

var context;
var screenWidth;
var screenHeight;

gameInitialize();
snakeInitialize();
foodInitialize();
setInterval(gameLoop, 1000/30);
/*----------------------------------------------------------------------------
 * Functions
 -----------------------------------------------------------------------------*/
function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    document.addEventListener("keydown", snakeMovement);
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}
function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
}
function gameDraw() {
    context.fillStyle = "rgb(240, 14, 67)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}
/*----------------------------------------------------------------------------
 * Functions of the Snake
 -----------------------------------------------------------------------------*/
function snakeInitialize(){
    snake = [];
    snakeLength = 7;
    snakeSize = 21;
    
    for(var index = snakeLength - 1; index >=0; index--) {
        snake.push( {
            x: index,
            y: 0
        });
        }
}
function snakeDraw(){
    for(var index = 0; index < snake.length; index++){
        context.fillStyle = "black";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}
function snakeUpdate(){
    var snakeHeadX = snake[0].x;
    var snakeHeadY = snake[0].y;
    
    if (snakeDirection == "up"){
        //up
        
    }
    
    var snakeTail =  snake.pop();
    snakeTail.x = snakeHeadX;
    snakeTail.y = snakeHeadY;
    snake.unshift(snakeTail);
}

function snakeMovement(event) {
    if (event.keyCode == '38') {
        //up
        snakeDirection = "up";
    }
    else if (event.keyCode == '40'){
        //down
        snakeDirection = "down";
    }
    else if (event.keyCode == '39'){
        //right
        snakeDirection = "right";
    }
    else if (event.keyCode == '37'){
        //left
        snakeDirection = "left";
    }
}
/* ---------------------------------------------------------------------------
 * Da foood 
 -----------------------------------------------------------------------------*/
function foodInitialize(){
    food = {
        x: 0,
        y: 0
    };
    setFoodPosition();
}
function foodDraw(){
    context.fillStyle = "black";
    context.fillRect(food.x, food.y, snakeSize, snakeSize);
}
function setFoodPosition(){
    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);
    food.x = randomX;
    food.y = randomY;
}