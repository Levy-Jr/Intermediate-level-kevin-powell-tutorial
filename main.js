const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector('.mobile-nav-toggle')
const primaryNav = document.querySelector('#primary-navigation')

navToggle.addEventListener('click', () => {
  /* equivalente ao if e else. Se primaryNav tiver o atributo "data-visible" então setamos o aria-expanded para falso */
  primaryNav.hasAttribute('data-visible') 
  ? navToggle.setAttribute('aria-expanded', false) 
  : navToggle.setAttribute('aria-expanded', true); 
  primaryNav.toggleAttribute('data-visible')
  primaryHeader.toggleAttribute('data-overlay')
})

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false // dots enabled 1280px and up
    }
  }
})