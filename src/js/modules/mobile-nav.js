function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	};

	nav.addEventListener('click', (evnt) => {
		if (evnt.target.tagName == 'A') {
			nav.classList.toggle('mobile-nav--open');
			document.body.classList.toggle('no-scroll');
			menuIcon.classList.toggle('nav-icon--active');
		}
	});
}

export default mobileNav;