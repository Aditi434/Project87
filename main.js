var canvas = new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
blockImage_height=30;
blockImage_width=30;

var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("Arrow.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(50);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(blockImage_width);
        block_image_object.scaleToHeight(blockImage_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e)
{
    keyPressed=e.keyCode;
    if(e.shiftKey == true && keyPressed == '80')//p
    {
        blockImage_height= blockImage_height + 10;
        blockImage_width = blockImage_width + 10;
        document.getElementById("current_width").innerHTML=blockImage_width;
        document.getElementById("current_height").innerHTML=blockImage_height;
    }
 
    if(e.shiftKey == true && keyPressed == '77')//m
    {
        blockImage_height = blockImage_height - 10;
        blockImage_width = blockImage_width - 10;
        document.getElementById("current_height").innerHTML=blockImage_height;
        document.getElementById("current_width").innerHTML=blockImage_width;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == '37')
    {
        left();

    }
    if(keyPressed == '39')
    {
        right();
    }
    if(keyPressed == '70')//f
    {
        new_image("spiderman_face.png");
        
    }
    if(keyPressed == '66')//b
    {
        new_image("ironman_body.png");
    }
    if(keyPressed == '76')//l
    {
        new_image("hulk_legs.png");
    }
    if(keyPressed == '82')//r
    {
        new_image("thor_right_hand.png");
    }
    if(keyPressed == '72')//h
    {
        new_image("captain_america_left_hand.png");
    }
    
}
function up()
{
    if(player_y>=0){
        player_y = player_y - blockImage_height;
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(player_y<=500){
        player_y = player_y +blockImage_height;
        canvas.remove(player_object);
        player_update();
    }    
}
function left()
{
    if(player_x>=0)
    {
        player_x = player_x - blockImage_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(player_x<=700)
    {
        player_x = player_x +blockImage_width;
        canvas.remove(player_object);
        player_update();
    }
}