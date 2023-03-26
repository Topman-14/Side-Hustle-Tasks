const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
    alert("Form submitted successfully😎✨🚀 \n Click ok to reload the site!!")
    setTimeout(() => form.submit(), 1000);
  });
