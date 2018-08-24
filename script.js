
// Hide all elements not in viewport
function view() {
	var elements = document.querySelectorAll('body *');
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var bottom_of_element = element.offsetTop - element.scrollTop;
		var bottom_of_window = window.innerHeight;

		if (bottom_of_window < bottom_of_element) {
			element.classList.add("hide-elem");
		}
	}
}


// Fade in elements that come into view
function updateView(event) {
	var elements = document.querySelectorAll('body *');
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];
		var bottom_of_element = element.getBoundingClientRect().bottom;
		var bottom_of_window = window.innerHeight;

		if (bottom_of_window + 100 > bottom_of_element) {
			element.classList.remove("hide-elem");
			element.classList.add("visible");
		}
	}
}

window.onload = view;
window.onscroll = updateView;


	
