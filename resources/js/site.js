import 'alpinejs'
import Typed from 'typed.js'
import scrollSpy from '@sidsbrmnn/scrollspy'

new Typed('.typed-elememt', {
    strings: ["web development", "Jamstack", "Laravel", "Vue", "React", "Statamic", "you name it &#x1F60A;"],
    startDelay: 1000,
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
})

scrollSpy(document.querySelector('.subnav'), {
    sectionSelector: 'section',  // Query selector to your sections
    targetSelector: 'li', // Query selector to your elements that will be added `active` class
    hrefAttribute: 'data-target',
    offset: 500                  // Menu item will active before scroll to a matched section 100px
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
} else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}

window.setTheme = function(value) {
    if (value === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    localStorage.theme = value
}