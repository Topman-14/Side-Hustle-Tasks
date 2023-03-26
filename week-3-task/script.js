const menuBtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-nav');
const menuBack = document.querySelector("#back-button");
const mobileNavLink = document.querySelectorAll('.nav-link-mobile')


menuBtn.addEventListener('click', () =>{
    mobileMenu.style.animation ='slide-left 0.7s';

    setTimeout(()=>{
        mobileMenu.style.display = 'unset'
    }, 50)
})

menuBack.addEventListener('click', () =>{
    mobileMenu.style.animation ='slide-right 0.7s';

    setTimeout(()=>{
        mobileMenu.style.display = 'none'
    }, 650)
})

mobileNavLink.forEach(link => {
    link.addEventListener('click', () =>{
        mobileMenu.style.animation ='slide-right 0.7s';
    
        setTimeout(()=>{
            mobileMenu.style.display = 'none'
        }, 650)
    })
});