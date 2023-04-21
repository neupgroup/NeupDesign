// The following are the element selectors.
const toggleButton = document.querySelector(".header__toggle-container> .header__toggle-button");
const toggleIcon = document.querySelector(".header__toggle-container > .header__toggle-button > .header__toggle-icon");
const menuContainer = document.querySelector('.header > .header__container .header__menu-container');
const header = document.querySelector("header.header");

// Make variable in Global Scope to save scroll position of user.
let scrollPosition = 0;

// Start of the Event Listener.
toggleButton.addEventListener('click', () => {

	// Toggle the class lists when click is done.
	menuContainer.classList.toggle("header__menu-container--open");
	toggleIcon.classList.toggle("toggle-icon--clicked");

	// Check if the navigation bar is expanded.
	if (menuContainer.classList.contains("header__menu-container--open")) {
		// Remove the scrollbar of the body.
		document.body.style.overflow = "hidden";
		// Make the page unscrollable, but show a scrollbar.
		header.style.overflow = "scroll"
	} else {
		// Remove the scrollbar of the header.
		header.style.overflow = "hidden";
		// Make the page scrollable, also show the old scrollbar.
		document.body.style.overflow = "scroll";
	}
});