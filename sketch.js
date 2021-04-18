var n = 0;
var c = 2;
var slider;
var angle;

function setup() {
    createCanvas(400, 400);
    background(0);
    angleMode(DEGREES);
    colorMode(HSB);
    slider = createSlider(0, 360, 137.5, 0.01);
}

function draw() {
    var a = n * slider.value();
    var r = c * sqrt(n);

    var x = r * cos(a) + width / 2;
    var y = r * sin(a) + height / 2;

    fill(a % 256, 255, 255)
    noStroke();
    ellipse(x, y, 2, 2);

    n++;
}
