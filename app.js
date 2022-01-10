const page = document.querySelector('.js-page');
const circle = document.querySelector('.js-circle');
const section = document.querySelector('.js-i-section');
const lightContent = document.querySelector('.js-light-content');
const gasContent = document.querySelector('.js-gas-content');
const themes = ['', 'theme-one'];

function setTheme(index) {
	page.classList = themes[index]
}

window.onload = () => {
	const observerCircle = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					section.classList.add('is-active');
				} else {
					section.classList.remove('is-active');
				}
			})
		}
	)

	observerCircle.observe(lightContent);

	let directionTop = false
	let lastScroll = 0;
	const observerText = new IntersectionObserver((entries) => {
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
			if (currentScroll > 0 && lastScroll <= currentScroll){
				lastScroll = currentScroll;
				directionTop = false;
			} else {
				lastScroll = currentScroll;
				directionTop = true;
			}
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					circle.classList.add('is-gas');
					section.classList.add('theme-changed');
					console.log('add');
				} else if (directionTop) {
					circle.classList.remove('is-gas');
					section.classList.remove('theme-changed');
					console.log('remove');
				}
			})
		},
		{
			threshold: 0.1
		}
	)

	observerText.observe(gasContent);

}
