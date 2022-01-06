const circle = document.querySelector('.js-circle')
const gasText = document.querySelector('.js-gas-text')

// window.onload = function () {
// 	gsap.registerPlugin(ScrollTrigger);
// 	gsap.timeline({
// 		scrollTrigger: {
// 			trigger:".wrapper",
// 			start: "top top",
// 			end: "bottom top",
// 			pin: true,
// 			markers: true,
// 			scrub: true,
// 			onEnter: () => circle.classList.add('is-active'),
// 			onLeave: () => circle.classList.remove('is-active'),
// 			onEnterBack: () => circle.classList.add('is-active'),
// 			onLeaveBack: () => circle.classList.remove('is-active'),
// 		}
// 	})
// }

const observerCircle = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-active');
			} else {
				entry.target.classList.remove('is-active');
			}
		})
	}
)

observerCircle.observe(circle);

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
			} else if (directionTop) {
				circle.classList.remove('is-gas');
			}
		})
	},
	{threshold: 0.75}
)

observerText.observe(gasText);
