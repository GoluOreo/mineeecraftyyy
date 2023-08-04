var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object)
    })
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPressed = e.keyCode;
    if(e.shiftKey && keyPressed == "80") {
        block_image_width += 10;
        block_image_height += 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey && keyPressed == "77") {
        block_image_width -= 10;
        block_image_height -= 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keyPressed == "37") {
        left();
    }
    if(keyPressed == "38") {
        up();
    }
    if(keyPressed == "39") {
        right();
    }
    if(keyPressed == "40") {
        down();
    }

    if(keyPressed == "67") {
        new_image("cloud.jpg");
    }
    if(keyPressed == "68") {
        new_image("dark_green.png");
    }
    if(keyPressed == "71") {
        new_image("ground.png");
    }
    if(keyPressed == "82") {
        new_image("roof.jpg");
    }
    if(keyPressed == "84") {
        new_image("trunk.jpg");
    }
    if(keyPressed == "85") {
        new_image("unique.png");
    }
    if(keyPressed == "87") {
        new_image("wall.jpg");
    }
    if(keyPressed == "89") {
        new_image("yellow_wall.png");
    }
    if(keyPressed == "76") {
        new_image("light_green.png");
    }
}

function right() {
    if(player_x <= 920) {
        player_x += 10;
        canvas.remove(player_object);
        player_update();
        console.log(player_x)
    }
}

function down() {
    if(player_y <= 490) {
        player_y += 10;
        canvas.remove(player_object);
        player_update();
        console.log(player_y)
    }
}

function left() {
    if(player_x >= -20) {
        player_x -= 10;
        canvas.remove(player_object);
        player_update();
        console.log(player_x)
    }
}

function up() {
    if(player_y >= -30) {
        player_y -= 10;
        canvas.remove(player_object);
        player_update();
        console.log(player_y)
    }
}