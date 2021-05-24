// Declaring DOM variables
let startRecord = document.getElementById("start");
let stopRecord = document.getElementById("stop");
let recordBlink = document.getElementById("blink");
let speechText = document.getElementById("speechText");
let instructiont = document.getElementById("instruction");

// other variables
let content = ""  //content the user is going to speak out

//Initiating speech recognition for chrome 
// Speechrecognition interface
const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

//New instance of speech recognition
const recognition = new SpeechRecognition;
recognition.lang = 'hi';
recognition.continuous = true;
recognition.onstart = function(){
	instruction.innerHTML = "Audio is being processed...";
}

recognition.onspeechend = function(){
	instruction.innerHTML = "Click 'Record' button and speak out: मेरा एक अच्छा समय चल रहा है!";
}

recognition.onerror = function(){
	instruction.innerHTML = "Someting went wrong. Please try again";
}

recognition.onresult = function(event){
	let current  = event.resultIndex;

	let transcript = event.results[current][0].transcript;

	content += transcript;

	speechText.innerHTML = content;

}

//start recording
startRecord.addEventListener("click", function(){
	//checking if the content is having any voice and keeping it empty before process starts
	if(content.length){
		content += "";
	}

	recognition.start()
})

stopRecord.addEventListener("click", function(){
	recognition.stop()
})




















//class VoiceRecorder {
// 	constructor() {
// 		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
// 			console.log("getUserMedia supported")
// 		} else {
// 			console.log("getUserMedia is not supported on your browser!")
// 		}

// 		this.mediaRecorder
// 		this.stream
// 		this.chunks = []
// 		this.isRecording = false

// 		this.recorderRef = document.querySelector("#recorder")
// 		this.playerRef = document.querySelector("#player")
// 		this.startRef = document.querySelector("#start")
// 		this.stopRef = document.querySelector("#stop")
		
// 		this.startRef.onclick = this.startRecording.bind(this)
// 		this.stopRef.onclick = this.stopRecording.bind(this)

// 		this.constraints = {
// 			audio: true,
// 			video: false
// 		}
		
// 	}

// 	handleSuccess(stream) {
// 		this.stream = stream
// 		this.stream.oninactive = () => {
// 			console.log("Stream ended!")
// 		};
// 		this.recorderRef.srcObject = this.stream
// 		this.mediaRecorder = new MediaRecorder(this.stream)
// 		console.log(this.mediaRecorder)
// 		this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this)
// 		this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this)
// 		this.recorderRef.play()
// 		this.mediaRecorder.start()
// 	}

// 	handleError(error) {
// 		console.log("navigator.getUserMedia error: ", error)
// 	}
	
// 	onMediaRecorderDataAvailable(e) { this.chunks.push(e.data) }
	
// 	onMediaRecorderStop(e) { 
// 		const blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' })
// 		const audioURL = window.URL.createObjectURL(blob)
// 		this.playerRef.src = audioURL
// 		this.chunks = []
// 		this.stream.getAudioTracks().forEach(track => track.stop())
// 		this.stream = null
// 	}

// 	startRecording() {
// 		if (this.isRecording) return
// 		this.isRecording = true
// 		this.startRef.innerHTML = 'Recording...'
// 		this.playerRef.src = ''
// 		navigator.mediaDevices
// 			.getUserMedia(this.constraints)
// 			.then(this.handleSuccess.bind(this))
// 			.catch(this.handleError.bind(this))
// 	}
	
// 	stopRecording() {
// 		if (!this.isRecording) return
// 		this.isRecording = false
// 		this.startRef.innerHTML = 'Record'
// 		this.recorderRef.pause()
// 		this.mediaRecorder.stop()
// 	}
	
// }

// window.voiceRecorder = new VoiceRecorder()
