// The following are the element selectors.
const toggleButton = document.querySelector(".topnav__toggle-container> .topnav__toggle-button");
const toggleIcon = document.querySelector(".topnav__toggle-container > .topnav__toggle-button > .topnav__toggle-icon");
const menuContainer = document.querySelector('.topnav > .topnav__container .topnav__menu-container');
const topnav = document.querySelector(".topnav");

// Make variable in Global Scope to save scroll position of user.
let scrollPosition = 0;

// Start of the Event Listener.
toggleButton.addEventListener('click', () => {

	// Toggle the class lists when click is done.
	menuContainer.classList.toggle("topnav__menu-container--open");
	toggleIcon.classList.toggle("toggle-icon--clicked");

	// Check if the navigation bar is expanded.
	if (menuContainer.classList.contains("topnav__menu-container--open")) {
		// Remove the scrollbar of the body.
		container.style.overflowY = 'hidden';
		// Make the page unscrollable, but show a scrollbar.
		topnav.style.overflowY = "scroll"
	} else {
		// Remove the scrollbar of the topnav.
		topnav.style.overflowY = "hidden";
		// Make the page scrollable, also show the old scrollbar.
		document.body.style.overflowY = "scroll";
	}
});