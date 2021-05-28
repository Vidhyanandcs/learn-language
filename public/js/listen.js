let matching = document.getElementById('matching')
let notmatching = document.getElementById('not-matching')
let showAnswer = document.getElementById('showAnswer')
let answerPrompt =document.getElementById('answer-prompt')
let chocie1 = document.getElementById('choice1')
let chocie2 = document.getElementById('choice2')
let answer = document.getElementById('answer')
let chocie4 = document.getElementById('choice4')

//Listen Listen
if(matching){
	matching.addEventListener("click", function(){
		matching.style.backgroundColor = "#4aa96c"
		notmatching.disabled = true
		console.log("matching")
	})
}

if(notmatching){
	notmatching.addEventListener("click", function(){
		notmatching.style.backgroundColor = "#f55c47"
		matching.disabled = true
	})
}

if(showAnswer){
	showAnswer.addEventListener("click", function(){
		if(chocie1.checked){
			answerPrompt.innerHTML = "Your answer is not correct. Please try again."
		}else if(chocie2.checked){
			answerPrompt.innerHTML = "Your answer is not correct. Please try again."
		}else if(answer.checked){
			answerPrompt.innerHTML = "Your answer is correct."
		}else if(chocie4.checked){
			answerPrompt.innerHTML = "Your answer is not correct. Please try again."
		}else{
			answerPrompt.innerHTML = "Please select one option."
		}
	})
}