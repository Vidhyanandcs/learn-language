let matching = document.getElementById('matching')
let notmatching = document.getElementById('not-matching')

//Listen Listen

matching.addEventListener("click", function(){
	matching.style.backgroundColor = "#4aa96c"
    notmatching.disabled = true
	console.log("matching")
})

notmatching.addEventListener("click", function(){
	notmatching.style.backgroundColor = "#f55c47"
    matching.disabled = true
	console.log("matching")
})