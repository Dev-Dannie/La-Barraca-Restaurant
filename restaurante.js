window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar'); 
    navbar.classList.toggle('scrolled', window.scrollY > 0); //navbar background visibilty on scroll

    // adding functionality fpr active classes
    let sections = document.querySelectorAll('section')
    let navLinks = document.querySelectorAll('nav ul li a');
    let currentSection = ''

   sections.forEach((section) => {
        let sectionTop = section.offsetTop; 
        let sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop - sectionHeight / 3){
            currentSection = section.getAttribute('id');
        }
   });

   navLinks.forEach(navLink => {
    navLink.classList.remove('active');
    if (navLink.getAttribute('href').substring(1) === currentSection){
        navLink.classList.add('active')
    }
   })
});

document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar'); 
    let navLinks = document.querySelectorAll('nav ul li a');
    let navHeight = navbar.offsetHeight;
    
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', scrollToSection);
    })

    function scrollToSection(e) {
        e.preventDefault(); //prevent default link behavior

        let targetId = this.getAttribute('href'); //get target section id
        let targetSection = document.querySelector(targetId);

        if (targetSection){
            let targetPosition = targetSection.offsetTop - navHeight //calculating the target position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    }
})

