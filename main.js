function setup(){
canvas=createCanvas(280,280)
canvas.center()
canvas.mouseReleased(classifyCanvas)
synth=window.speechSynthesis;
background("white");
}
function cc(){
    background("white")
}
function preload(){ 
    classifier=ml5.imageClassifier('DoodleNet')
}
function draw(){
    strokeWeight(13)

    stroke("black")

    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult)
}
function gotResult(error,results){
if(error){
console.log(error);
}
else{
console.log("results: "+results);
document.getElementById("label").innerHTML="Label: "+results[0].label;
document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].label*100)+" % ";

utter=new SpeechSynthesisUtterance(results[0].label);
synth.speak(utter)


}

}