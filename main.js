
rover_x = 10;
rover_y = 10;

canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");

nasa_array = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpg"];

random_number = Math.floor(Math.random()*4);
background_image = nasa_array[random_number];
function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src = "rover.png";
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x,rover_y, 100, 90);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='37')
    {
       left();
    }
    if (keyPressed=='38')
    {
        up();
    }
    if (keyPressed=='39')
    {
        right();
    }
    if (keyPressed=='40')
    {
        down();
    }
}

function up()
{
    console.log("insideUp");
    if (rover_y>=0)
    {
        rover_y= rover_y -10;
        uploadBackground();
        uploadRover();
        console.log("up");
    }
}
function down()
{
    if (rover_y<=500)
    {
        rover_y= rover_y +10;
        uploadBackground();
        uploadRover();
    }
}
function left()
{
    if (rover_x>=0)
    {
        rover_x= rover_x -10;
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if (rover_x<=700)
    {
        rover_x= rover_x +10;
        uploadBackground();
        uploadRover();
    }
}