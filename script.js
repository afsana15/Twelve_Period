document.querySelector('.hamburger').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  
  window.addEventListener('load', () => {
    const logo = document.getElementById('logo-animation');
    // logo.style.animation = 'fadeInScale 1.5s ease-out forwards';
  });
  
  const socialToggles = document.querySelectorAll('.social-toggle');
  
  socialToggles.forEach(button => {
    button.addEventListener('click', function () {
      const socialLinks = this.nextElementSibling; // The <div class="social-links">
      
      // Toggle the visibility of the social links
      socialLinks.style.display = socialLinks.style.display === 'block' ? 'none' : 'block';
      
      // Change the button text based on visibility
      this.textContent = socialLinks.style.display === 'block' ? 'Hide Socials' : 'Connect';
    });
  });
  // document.addEventListener("DOMContentLoaded", () => {
  //   const text = document.querySelector(".animated-text");
  //   const letters = text.textContent.split("");
  //   text.textContent = "";
  
  //   letters.forEach((letter, index) => {
  //     const span = document.createElement("span");
  //     span.textContent = letter === " " ? "\u00A0" : letter; // Preserve spaces
  //     span.style.animationDelay = `${index * 0.1}s`;
  //     text.appendChild(span);
  //   });
  // });
  
  