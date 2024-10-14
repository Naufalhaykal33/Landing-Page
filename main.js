function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sr = ScrollReveal({
  origin: 'top',
  distance: '65px',
  duration: 2500,
  delay: 300,
  reset: true // Animation repeat
})

/* Scrollreveal Animation */
sr.reveal(`.section__pic-container, .title, .section_text_p1, .footer_title`)
sr.reveal(`.section_text_p2`, {delay: 550})
sr.reveal(`.about-containers`, {interval: 100})
sr.reveal(`.icon`, {origin: 'bottom'})
sr.reveal(`.btn-color-2, .text-container, .details-container, .skills_content, #copyright`, {origin: 'left'})
sr.reveal(`.btn-color-1, .info__title, .social_icon`, {origin: 'right'})