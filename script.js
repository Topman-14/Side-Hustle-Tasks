const form = document.querySelector('form');
const passwordInput = document.querySelector("#password-input");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
    alert("Form submitted successfully😎✨🚀 \n Click ok to reload the site!!")
    setTimeout(() => form.submit(), 1000);
  });
