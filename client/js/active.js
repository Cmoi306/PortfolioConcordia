// smooth scroll to section when nav links are clicked
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: topOffset,
    behavior: 'smooth'
  });
}

// form submission handling
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  // perform form validation
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill in all fields');
    return;
  }
  // send form data to server using fetch or other method
  console.log('Form submitted!');
  console.log('Name:', nameInput.value);
  console.log('Email:', emailInput.value);
  console.log('Message:', messageInput.value);
  // reset form
  form.reset();
}



//

