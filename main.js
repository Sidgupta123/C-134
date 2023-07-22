objectDetector = "";
img = "";
objects = "";
status = "";

function preload() {
    image(img, 0, 0, 640, 420);
}

function draw() {
    image (video, 0, 0, 380, 380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (var i = 0; 1 < objects.length; i++) {

        
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
            fill(r,g,b);
            percent = floor(objects[1].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
    fill("#0000FF");
    text("Dog", 45, 75);
    noFill();
    stroke("#FFFF00");
    rect(30, 60, 450, 350 );

    fill("##ADD8E6");
    text("Cat, 320, 120");
    noFill;
    stroke("FFFF00");
    rect(300, 90, 270, 320)
}


function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; }


function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


