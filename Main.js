noseX = 0;
noseY = 0;

function setup() {
    canvas = createCanvas(800, 500);
    canvas.position(600);
    video = createCapture(VIDEO);
    video.size(800, 500);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}

function modelLoaded(){
    console.log("Model loaded Succesfully");
}

function gotResult(result){
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY);
    }
}

function draw() {
    image(video,0,0,800, 500);
    fill("red");
    stroke("red");
    circle(noseX, noseY, 50  );
}