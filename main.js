sh = 0;
sw = 0;
apple = "";
speak_data = "";
to_number = 0;
applei = "";
aw = 50;
ah = 50;
x=0;
y=0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start1()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number)) {
      document.getElementById("status").innerHTML = "Started drawing apple."; 
      apple = "set";
    }
    else 
    {
      document.getElementById("status").innerHTML = "No number recognized."; 
 
    }
}

function preload() {
  applei = loadImage("apple.png");
}

function setup() {
 sw = window.innerWidth;
 sh = window.innerHeight;
 canvas = createCanvas(sw,sh-150);
 canvas.position(0,150);
}

function draw() {  
  if(apple == "set")
  {
    for(var i=1; i <= to_number; i++) {
      x = Math.floor(Math.random*700);
      y = Math.floor(Math.random*400);
      image(applei, x, y, aw, ah);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    apple = ""; 
    speak_data = to_number + " Apples drawn";
speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
speak_data = ""
}
