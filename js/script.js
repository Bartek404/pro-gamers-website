document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})

/* const navShow = document.querySelector(".show")
const navToggler = document.querySelector("#navbarNavAltMarkup")

function closeNav() {
	if (navToggler.classList.contains("show")) {
		navToggler.classList.remove("show")
	}
}

navToggler.addEventListener("click", closeNav) */
