const menuBtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile-nav');
const menuBack = document.querySelector("#back-button");
const mobileNavLink = document.querySelectorAll('.nav-link-mobile');


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

const pages = document.querySelectorAll('.page');
const displayText = document.querySelector('#display-text');


const displayTexts = [
    {
        "h2":"Model 3",
        "p":"Leasing starting at $349/mo",
        "link1":"Custom Order",
        "link2":"Demo Drive"
    },
    {
        "h2":"Model Y",
        "p":"Leasing starting at $500/mo",
        "link1":"Custom Order",
        "link2":"Demo Drive"
    },
    {
        "h2":"Model S",
        "p":"<a id='model-s-link'>Schedule a Demo Drive</a>",
        "link1":"Custom Order",
        "link2":"View Inventory"
    },
    {
        "h2":"Model X",
        "p":"<a id='model-s-link'>Schedule a Demo Drive</a>",
        "link1":"Custom Order",
        "link2":"View Inventory"
    },
    {
        "h2":"Solar Panels",
        "p":"Lowest Cost Solar Panels in America",
        "link1":"Order Now",
        "link2":"Learn More"
    },
    {
        "h2":"Solar Roof",
        "p":"Produce Clean Energy from your roof",
        "link1":"Order Now",
        "link2":"Learn More"
    },
    {
        "h2":"Accessories",
        "p":"Best Prices on the Market",
        "link1":"Shop Now",
        "link2":"Learn More"
    }
]

const options = {
  threshold: [0, 0.3, 0.5, 1]
};

const heading = document.querySelector('#heading');
const description = document.querySelector('#desc');
const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const page = entry.target;
      const visiblePercentage = entry.intersectionRatio * 100;
      if (visiblePercentage >= 30 && visiblePercentage < 50) {

        displayText.style.opacity = '0';
    } 
    else if (visiblePercentage >= 50) {
        setTimeout(() => {
            const index = Array.from(pages).indexOf(page);
            heading.textContent = displayTexts[index].h2;
            description.innerHTML = displayTexts[index].p;
            link1.textContent = displayTexts[index].link1;
            link2.textContent = displayTexts[index].link2;
            displayText.style.opacity = '1';  
        }, 400);
      }
    }
  });
}, options);

pages.forEach(page => {
  observer.observe(page);
});

const accountObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.getElementById('display-text').style.display = 'none';
      } 
      else {
        document.getElementById('display-text').style.display = 'flex';
      }
    });
  }, {root: null, rootMargin: '0px', threshold: 0.4}
);

accountObserver.observe(document.querySelector('#account'));

const pword = document.querySelector('#pword');
const confirmPword = document.querySelector('#confirmpword');


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(pword.textContent =! confirmPword.textContent){
        confirmPword.setCustomValidity("Passwords Don't Match");    
    }
    else{
        alert("Form submitted successfully 👍")
        setTimeout(() => form.submit(), 1000);
    }
  });

  alert('The is the week three task submission for the side hustle internship 7.0 - a Tesla landing page clone hosted with netlify.\n Check account in the menu to see the form')