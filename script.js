function setupNavItem(element) {
  const text = element.textContent;
  element.innerHTML = text.split('').map((char, index) => 
      `<span ${index === 0 ? 'class="first-letter"' : ''}>${char}</span>`
  ).join('');
  
  const spans = element.querySelectorAll('span');
  
  // Set initial positions
  spans.forEach((span, index) => {
      span.style.left = `${index * 0.35}em`; // Adjusted for tighter spacing
  });

  function deformText() {
      spans.forEach((span, index) => {
          const randomX = (Math.random() -0.5) * 50;
          const randomY = (Math.random() - 0.5) * 35;
          const randomRotate = (Math.random() - 0.1) * 90;
          const randomScale = 0.25 + Math.random() * 0.4;
          
          span.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
          
          if (index === 0) {
              span.style.fontSize = '45px';
          }
      });
  }
  
  function makeReadable() {
      spans.forEach((span, index) => {
          span.style.transform = `translateX(${index * 0.62}em)`; // Adjusted for tighter spacing
          span.style.fontSize = '18px';
      });
  }
  
  // Initial deformation
  deformText();
  
  element.addEventListener('mouseover', makeReadable);
  element.addEventListener('mouseout', deformText);
  element.addEventListener('click', changePage);
}

function changePage(event) {
  const page = event.currentTarget.dataset.page;
  const pageTitle = document.getElementById('pageTitle');
  const pageContent = document.getElementById('pageContent');

  switch(page) {
      case 'home':
          pageTitle.textContent = 'Home';
          pageContent.textContent = 'Welcome to the home page!';
          break;
      case 'amphi-bloc':
          pageTitle.textContent = 'Amphi-Bloc';
          pageContent.textContent = 'Learn about Amphi-Bloc technology.';
          break;
      case 'computer-vision':
          pageTitle.textContent = 'Computer Vision';
          pageContent.textContent = 'Explore our computer vision capabilities.';
          break;
      case 'semantic-agent':
          pageTitle.textContent = 'Semantic Agent';
          pageContent.textContent = 'Discover our semantic agent technology.';
          break;
      case 'diffusion-agent':
          pageTitle.textContent = 'Diffusion Agent';
          pageContent.textContent = 'Learn about our diffusion agent.';
          break;
      case 'llm-agent':
          pageTitle.textContent = 'LLM Agent';
          pageContent.textContent = 'Explore our Language Model agent.';
          break;
      case 'gh-plugin':
          pageTitle.textContent = 'GH-Plugin';
          pageContent.textContent = 'Information about our Grasshopper plugin.';
          break;
      case 'about':
          pageTitle.textContent = 'About';
          pageContent.textContent = 'About me.';
          break;
  }
}

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(setupNavItem);

// Add event listeners for sidebar expansion
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

sidebar.addEventListener('mouseenter', () => {
  content.style.marginLeft = '50px';
});

sidebar.addEventListener('mouseleave', () => {
  content.style.marginLeft = '50px';
});

