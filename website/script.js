
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('name').textContent = 'Ali Eren';
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', highlightActiveMenuItem);
});

function highlightActiveMenuItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.style.color = '';
        if (item.getAttribute('href') === '#' + currentSection) {
            item.style.color = '#f1c40f';
        }
    });
}