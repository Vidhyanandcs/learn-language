let matching = document.getElementById('matching')
let notmatching = document.getElementById('not-matching')
let showAnswer = document.getElementById('showAnswer')
let answer = document.getElementById('answer1')

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
		answer.style.backgroundColor = "#4aa96c"
		answer.style.color = "#ffffff"
	})
}