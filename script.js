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
  const pageContent = document.querySelector('.scrollable-content');

  // Update the title
  pageTitle.textContent = getPageTitle(page);

  // Load and display the content
  loadPageContent(page, pageContent);
}

function getPageTitle(page) {
  const titles = {
    'home': 'Home',
    'amphi-bloc': 'Amphi-Bloc',
    'computer-vision': 'Computer Vision',
    'voxel-agent': 'Voxel Agent',
    'diffusion-agent': 'Diffusion Agent',
    'llm-agent': 'LLM Agent',
    'gh-plugin': 'GH-Plugin',
    'about': 'About'
  };
  return titles[page] || 'Page Not Found';
}

function loadPageContent(page, contentElement) {
  fetch(`pages/${page}.html`)
    .then(response => response.text())
    .then(html => {
      contentElement.innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading page content:', error);
      contentElement.innerHTML = '<p>Error loading content. Please try again later.</p>';
    });
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

