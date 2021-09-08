var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(player_object);
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80"){
        console.log("P and Shift key pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keyPressed == "77"){
        console.log("M and Shift key pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keyPressed=="38") {
        up();
        console.log("up");
    }

    if (keyPressed=="40") {
        down();
        console.log("down");
    }

    if (keyPressed=="37") {
        left();
        console.log("left");
    }

    if (keyPressed=="39") {
        right();
        console.log("right");
    }
}

function up(){
    if (player_y >= 0)
    {
        player_y = player_y - block_img_height;
        console.log("Block Image Height = " + block_img_height);
        console.log("When up arrow is pressed, x = " + player_x + "| y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function down(){
    if (player_y <= 500)
    {
        player_y = player_y + block_img_height;
        console.log("Block Image Height = " + block_img_height);
        console.log("When down arrow is pressed, x = " + player_x + "| y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function left()
{
    if (player_x > 0){
        player_x = player_x - block_img_width;
        console.log("When left is pressed, x = " + player_x + "| y = " + player_y);
        console.log("Block Image Height = " + block_img_width);
        canvas.remove(player_object);
        playerUpdate();
    }
}
function right(){
    if (player_x <= 850)
    {
        player_x = player_x + block_img_width;
        console.log("When right arrow is pressed, x = " + player_x + "| y = " + player_y);
        console.log("Block Image Height = " + block_img_width);
        canvas.remove(player_object);
        playerUpdate();
    }
}

if (keyPressed == "87"){
    newImage("wall.jpg");
    console.log("w");
}
if (keyPressed == "71"){
    newImage("ground.png");
    console.log("g");
}
if (keyPressed == "76"){
    newImage("light_green.png");
    console.log("l");
}
if (keyPressed == "84"){
    newImage("trunk.jpg");
    console.log("t");
}
if (keyPressed == "82"){
    newImage("roof.jpg");
    console.log("r");
}
if (keyPressed == "89"){
    newImage("yellow_wall.png");
    console.log("y");
}
if (keyPressed == "68"){
    newImage("dark_green.png");
    console.log("d");
}
if (keyPressed == "85"){
    newImage("unique.png");
    console.log("u");
}
if (keyPressed == "67"){
    newImage("cloud.jpg");
    console.log("c");
}