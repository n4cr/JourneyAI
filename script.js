document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality for services
    const serviceTabs = document.querySelectorAll('.tab-btn');
    const serviceTabPanes = document.querySelectorAll('.tab-pane');
    
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panes
            serviceTabs.forEach(t => t.classList.remove('active'));
            serviceTabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Tabs functionality for pricing
    const pricingTabs = document.querySelectorAll('.pricing-tab-btn');
    const pricingPanes = document.querySelectorAll('.pricing-pane');
    
    pricingTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panes
            pricingTabs.forEach(t => t.classList.remove('active'));
            pricingPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding tab pane
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('lead-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const teamSize = document.getElementById('team-size').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to your backend
            // For now, let's just log it and show a success message
            console.log({
                name,
                company,
                email,
                phone,
                teamSize,
                message
            });
            
            // Show success message
            contactForm.innerHTML = `
                <div class="form-success">
                    <div class="success-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Thank you for reaching out!</h3>
                    <p>We've received your request and will contact you shortly to schedule a call.</p>
                </div>
            `;
        });
    }
    
    // Header scroll behavior
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.style.boxShadow = 'var(--shadow-md)';
            header.style.padding = '0.75rem 0';
        } else {
            header.style.boxShadow = 'var(--shadow)';
            header.style.padding = '1rem 0';
        }
        
        lastScrollTop = scrollTop;
    });
}); 