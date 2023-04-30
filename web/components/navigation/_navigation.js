// The following are the element selectors.
const toggleButton = document.querySelector(".top-nav__toggle-container> .top-nav__toggle-button");
const toggleIcon = document.querySelector(".top-nav__toggle-container > .top-nav__toggle-button > .top-nav__toggle-icon");
const menuContainer = document.querySelector('.top-nav > .top-nav__container .top-nav__menu-container');
const topNav = document.querySelector(".top-nav");

// Make variable in Global Scope to save scroll position of user.
let scrollPosition = 0;

// Start of the Event Listener.
toggleButton.addEventListener('click', () => {

	// Toggle the class lists when click is done.
	menuContainer.classList.toggle("top-nav__menu-container--open");
	toggleIcon.classList.toggle("toggle-icon--clicked");

	// Check if the navigation bar is expanded.
	if (menuContainer.classList.contains("top-nav__menu-container--open")) {
		// Remove the scrollbar of the body.
		container.style.overflowY = 'hidden';
		// Make the page unscrollable, but show a scrollbar.
		topNav.style.overflowY = "scroll";
	} else {
		// Remove the scrollbar of the top-nav.
		topNav.style.overflowY = "hidden";
		// Make the page scrollable, also show the old scrollbar.
		document.body.style.overflowY = "scroll";
	}
});