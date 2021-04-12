let video;
let classifier;
let labels = "";
var getResult;
let txtcontent;
let img;
let img2;
let img3;
let img4;

function preload(){
  classifier = ml5.imageClassifier('./model/'+'model.json');
}

function setup() {
  createCanvas(840, 620);
  video = createCapture(VIDEO);
  
  img2 = loadImage('assets/1f44c.png');
  
  video.hide();
  classifyVideo();
  
  text('請擺出一個表情');
  textAlign(10,60);
  
  textSize(80);
  textAlign(CENTER,CENTER);
  
}

function classifyVideo(){
  classifier.classify(video,getResult);
}

function draw() {
  
  background(mouseX,mouseY);
  image(video,100,70);
  
  fill(220);
  text(txtcontent,width/2,height-120);
  
  
  
  
}

function getResult(happy,ok,cry,wow){
  
  if(happy){
    console.happy(happy);
    img = true;
    image(img, 850, 650);
    return;
  }
  
    if(cry){
    console.cry(cry);
    return;
  }
  
    if(wow){
    console.wow(wow);
    img3 = loadImage('assets/1f600.png');
    image(img, 850, 650);
    return;
  }

  //console.log(ok[0]);
  txtcontent = ok[0].label;
  img4 = loadImage('assets/1f622.png');
  image(img, 850, 650);
  classifyVideo();
  
  }

//改變背景顏色
//ok時出現ok的表情符號
//cry時出現cry的表情符號
//wow時出現wow的表情符號
//happy時出現happy的表情符號
//
