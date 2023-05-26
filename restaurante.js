window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    // let logo = document.querySelector('.nav-logo')
    navbar.classList.toggle('scrolled', window.scrollY > 0);

    // if (navbar.classList.contains('scrolled')){
    //     logo.style.visibility = 'visible'; // Hide logo when scrolled
    // }else{
    //     logo.style.visibilty = 'hidden'; // Show logo when scrolled
    // }
});