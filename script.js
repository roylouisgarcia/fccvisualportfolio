const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
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