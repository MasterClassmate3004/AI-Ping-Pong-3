function setup() {
	canvas = createCanvas(1240,336);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}