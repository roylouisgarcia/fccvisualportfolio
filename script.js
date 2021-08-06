const panels = document.querySelectorAll('.panel')

let currentActive = 1

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
		syncCircleProgressActive()
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
}

function syncCircleProgressActive() {
	let activePanelIndex = 1
	let counter = 0
	panels.forEach(panel => {
		counter++
		if (panel.classList.contains('active')){
			activePanelIndex = counter
		}
	})
	console.log(activePanelIndex)
	currentActive = activePanelIndex
	update()
}



// function myFunction(x) {
// 	if (x.matches) { // If media query matches
// 	  let active = document.querySelector('.active');
// 	  let left = active.previousElementSibling;
// 	  console.log(left)
// 	  let right = active.nextElementSibling;
// 	  console.log(right)
// 	} else {
// 	}
//       }
      
//       var x = window.matchMedia("(max-width: 480px)")
//       myFunction(x) // Call listener function at run time
//       x.addListener(myFunction) // Attach listener function on state changes 

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


next.addEventListener('click', () => {
	currentActive++

	if(currentActive > circles.length){
		currentActive = circles.length
	}
	console.log(currentActive)

	update() 

})

prev.addEventListener('click', () => {
	currentActive--

	if(currentActive < 1 ){
		currentActive = 1
	}
	console.log(currentActive)
	update() 

})

function update(){
	circles.forEach((circle, idx) => {
		if(idx < currentActive){
			circle.classList.add('ciractive')
		} else {
			circle.classList.remove('ciractive')
		}
	})

	const ciractives = document.querySelectorAll('.ciractive')
	progress.style.width = (ciractives.length -1 ) / (circles.length -1 ) * 100 + '%'
	console.log(ciractives.length, circles.length)

	if(currentActive === 1){
		prev.disabled = true
	} else if (currentActive === circles.length){
		next.disabled = true
	} else {
		prev.disabled = false
		next.disabled = false
	}
	syncPanelActive()
}

function syncPanelActive() {
	removeActiveClasses()
	let counter = 0
	panels.forEach(panel => {
		counter++
		if (counter === currentActive){
			panel.classList.add('active')
		}
	})
}