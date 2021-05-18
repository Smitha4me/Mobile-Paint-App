var last_position_of_x, last_position_of_y, current_position_of_mouse_x, current_position_of_mouse_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

nw = screen.width - 100;
nh = screen.height - 300;
if (screen.width < 1200) {
    document.getElementById("myCanvas").width = nw;
    document.getElementById("myCanvas").height = nh;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", a);

function a(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends
    last_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", b);

function b(e) {

    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}