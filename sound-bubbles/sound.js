// draw a line into it:

var path = new Path();
// Give the stroke a color
path.strokeColor = "black";
var start = new Point(0, 100);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
path.lineTo(start + [300, -50]);

// Create a Circle

var myCircle = new Path.Circle(new Point(100, 70), 50);
myCircle.fillColor = "blue";

var myCircle2 = new Path.Circle(new Point(620, 70), 250);
myCircle2.fillColor = "red";

// add sound
// var sound = new Howl({
//     src: ["sounds/sounds/bubbles.mp3"],
// });

// create an object and define properties of every single key
var keyData = {
    a: {
        color: "purple",
        sound: new Howl({
            src: ["sounds/sounds/bubbles.mp3"],
        }),
    },
    b: {
        color: "green",
        sound: new Howl({
            src: ["sounds/sounds/clay.mp3"],
        }),
    },
    c: {
        color: "yellow",
        sound: new Howl({
            src: ["sounds/sounds/corona.mp3"],
        }),
    },
};

// create an empty array and save in variable
var circles = [];

// Function: create item when a key is pressed
function onKeyDown(event) {
    // play sound
    //sound.play();
    if (keyData[event.key]) {
        // When a key is pressed, set the content of the text item:
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 500);
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        //push a new circle into the empty array
        circles.push(newCircle);
    }
}

// create a circle
// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = "blue";

// Function: change color or item automaticly
function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.98);
    }
    // animatedCircle.fillColor.hue += 1;
    // animatedCircle.scale(0.9);
}
