// Declaring DOM variables

// Speech to text Module starts here
let startRecord = document.getElementById("start");
let recordBlink = document.getElementById("blink");
let speechText = document.getElementById("speechText");
let instruction = document.getElementById("instruction");
let analyse = document.getElementById("analyse");
let speakout = document.getElementById("speakout");
let textReference = document.getElementById("textReference");
let updateAnalysis = document.getElementById("update")


// other variables
let content = "";  //content the user is going to speak out

//Initiating speech recognition for chrome 
// Speechrecognition interface
const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

//New instance of speech recognition
const recognition = new SpeechRecognition;
recognition.lang = 'hi';
recognition.continuous = false;

//event on starting recording
recognition.onstart = function(){
	instruction.innerHTML = "Recording Under progress...";
}

//event on error recording
recognition.onerror = function(){
	instruction.innerHTML = "Someting went wrong. Please try again";
}

//event on ending of recording
recognition.onend = function(){
	instruction.innerHTML = "";
}

//Processing the result
recognition.onresult = function(event){
	let current  = event.resultIndex;
	let transcript = event.results[current][0].transcript;
	content += transcript;
	speechText.innerHTML = content;
}

//Start recording
startRecord.addEventListener("click", function(){
	//Santizing content textbox content and analysis diaplay part before next recording.
	content = "";
	speechText.innerText = "";
	if(updateAnalysis.firstChild) updateAnalysis.removeChild(updateAnalysis.firstChild)
	//checking if the content is having any voice and keeping it empty before process starts
	if(content.length){
		content += "";
	}

	recognition.start()
})

//Analyse words
analyse.addEventListener("click", function(){
	let speechToText = (speechText.innerHTML).split(' ');
	let reference = (textReference.innerHTML).split(' ');
	
	if(speechToText == "") return

	let score = 0;
	let totalWords = reference.length;
	let percentage = 0;

	if(speechToText.length>reference.length) return(console.log(""))

	for(let i = 0; i<reference.length; i++){
		for(let j = 0; j<speechToText.length;j++){
			if(reference[i] === speechToText[j]) score++
			speechToText.splice(j,0)
		}
	}
	percentage = Math.floor((score/totalWords)*100);
	let analysis = document.createTextNode(`The text is ${percentage} % accurate.`)
	let analysisElement = document.createElement("p");
	analysisElement.appendChild(analysis);
	updateAnalysis.appendChild(analysisElement);	
})

// Speech to text module ends here

