m1=m2=results="";
lx=ly=rx=ry=0;
function preload(){
    m1=loadSound("music.mp3");
    m2=loadSound("music2.mp3");
}
function setup(){
    c=createCanvas(600,424);
    c.center();
    v=createCapture(VIDEO);
    v.hide();
    mod=ml5.poseNet(v, onLoad);
    mod.on('pose', onPose);
}
function draw(){
    image(v,0,0,600,424);
}
function onLoad(){console.log("Model loaded");}
function onPose(results){
    if(results==null){
        console.error('Variable "results" is null.')
    }else{
        lx=results[0].pose.leftWrist.x;
        ly=results[0].pose.leftWrist.y-200;
        rx=results[0].pose.rightWrist.x;
        ry=results[0].pose.rightWrist.y-200;
        console.log(results);
    }
}