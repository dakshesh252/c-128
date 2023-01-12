Peter_pan_song="";
Harry_potter_theme_song="";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("PoseNet is initialised");
}
function preload(){
    Peter_pan_song = loadSound("peter_pan.mp3");
    Harry_potter_theme_song = loadSound("harry_potter.mp3");
}

function draw(){
    image(video,0,0,700,600);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftWrist.X;
        leftwristY = results[0].pose.leftWrist.Y;
        console.log("LeftWrist X = " + leftwristX + "LeftWrist Y = " + leftwristY);

        rightwristX = results[0].pose.rightWrist.X;
        rightwristY = results[0].pose.rightWrist.Y;
        console.log("RightWrist X = " + rightwristX + "RightWrist Y = " + rightwristY); 
    
    }
}