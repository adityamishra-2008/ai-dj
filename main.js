song="";
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;
function preload(){
    song=loadSound("music.mp3");

}
function setup()
{
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
pose_net=ml5.poseNet(video,modelloaded);
pose_net.on("pose",got_poses);


}

function got_poses(results){
if(results.lenght>0){
    console.log("results");
left_wrist_x=results[0].pose.leftWrist.x;
left_wrist_y=results[0].pose.leftWrist.y;
console.log("left_wrist_x :"+left_wrist_x+"left_wrist_y :"+left_wrist_y);

right_wrist_x=results[0].pose.rightWrist.x;

right_wrist_y=results[0].pose.rightWrist.y;
console.log("right_wrist_x :"+right_wrist_x+"right_wrist_y :"+right_wrist_y);
}

}




function modelloaded(){
    console.log("model loaded");

}
function draw()
{
image(video,0,0,600,500);
fill("red");
stroke("black");
 circle(left_wrist_x,left_wrist_y,20);
in_num_left_wrist_y=Number(left_wrist_y);
rem_dec=floor(in_num_left_wrist_y);
volume=rem_dec/500;
document.getElementById("volume").innerHTML="volume = "+volume;
song.setVolume(volume);


}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    
}

