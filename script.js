function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";
  
    let i = 0;
    const timer = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
  }
  
  // Usage
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.typing-effect');
    if (header) {
        typeEffect(header, 200);
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.setAttribute('data-theme', 'dark');
  
    const toggle = document.getElementById('toggle-dark-mode');
    toggle.checked = true;
    toggle.addEventListener('change', function(event) {
        if (event.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    });
  });

// Highlight the section when link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Remove highlight from previously highlighted sections
            document.querySelectorAll('.highlight-section').forEach(section => {
                section.classList.remove('highlight');
            });

            // Highlight the current section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Scroll smoothly to the section
                targetSection.scrollIntoView({ behavior: 'smooth' });                
                targetSection.classList.remove('highlight'); // Remove highlight to allow re-adding
                void targetSection.offsetWidth; // Trigger reflow to restart animation
                targetSection.classList.add('highlight');


            }
        });
    });
});


