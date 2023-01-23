var canvas = new fabric.Canvas("myCanvas");
var block_w = 30;
var block_h = 30;

var player_x = 10;
var player_y = 10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_w);
        block_image_object.scaleToHeight(block_h);
        block_image_object.set({
            top:player_y,
            top:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80")
    {
        console.log("P and Shift key pressed together");
        block_w = block_w + 10;
        block_h = block_h + 10
        document.getElementById("current_width").innerHTML = block_w;
        document.getElementById("current_height").innerHTML = block_h;
    }

    if(e.shiftKey == true && keyPressed == "77")
    {
        console.log("M and Shift key pressed together");
        block_w = block_w - 10;
        block_h = block_h - 10
        document.getElementById("current_width").innerHTML = block_w;
        document.getElementById("current_height").innerHTML = block_h;
    }

    if(keyPressed == "38")
    {
        up();
        console.log("up")
    }

    if(keyPressed == "40")
    {
        down();
        console.log("down")
    }

    if(keyPressed == "37")
    {
        left();
        console.log("left")
    }

    if(keyPressed == "39")
    {
        right();
        console.log("right")
    }

    if(keyPressed == "87")
    {
        new_image("wall.jpg")
        console.log("W")
    }

    if(keyPressed == "71")
    {
        new_image("ground.png")
        console.log("G")
    }

    if(keyPressed == "76")
    {
        new_image("light_green.png")
        console.log("L")
    }

    if(keyPressed == "84")
    {
        new_image("trunk.jpg")
        console.log("T")
    }

    if(keyPressed == "82")
    {
        new_image("roof.jpg")
        console.log("R")
    }

    if(keyPressed == "89")
    {
        new_image("yellow_wall.png")
        console.log("Y")
    }

    if(keyPressed == "68")
    {
        new_image("dark_green.png")
        console.log("D")
    }

    if(keyPressed == "85")
    {
        new_image("unique.png")
        console.log("U")
    }

    if(keyPressed == "67")
    {
        new_image("cloud.jpg")
        console.log("C")
    }
}
