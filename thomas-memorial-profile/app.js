// Thomas J. Barton Tech Website - Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing website');
    
    // Get page elements
    const mainPage = document.getElementById('main-page');
    const bioPage = document.getElementById('bio-page');
    const viewBioButton = document.getElementById('view-bio-btn');
    const backButton = document.getElementById('back-to-main');
    const getQuoteBtn = document.getElementById('get-quote-btn');
    const contactBtn = document.getElementById('contact-btn');
    const scheduleBtn = document.getElementById('schedule-btn');
    const requestQuoteBtn = document.getElementById('request-quote-btn');
    
    // Navigation functions
    function showBioPage() {
        console.log('Navigating to bio page');
        mainPage.classList.remove('active');
        setTimeout(() => {
            mainPage.style.display = 'none';
            bioPage.style.display = 'block';
            setTimeout(() => {
                bioPage.classList.add('active');
            }, 50);
        }, 300);
        
        // Scroll to top of bio page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function showMainPage() {
        console.log('Navigating to main page');
        bioPage.classList.remove('active');
        setTimeout(() => {
            bioPage.style.display = 'none';
            mainPage.style.display = 'block';
            setTimeout(() => {
                mainPage.classList.add('active');
            }, 50);
        }, 300);
        
        // Scroll to top of main page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Event listeners for navigation
    if (viewBioButton) {
        console.log('Adding click listener to view bio button');
        viewBioButton.addEventListener('click', function(e) {
            e.preventDefault();
            showBioPage();
        });
    } else {
        console.error('Bio button not found!');
    }
    
    if (backButton) {
        console.log('Adding click listener to back button');
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            showMainPage();
        });
    } else {
        console.error('Back button not found!');
    }
    
    // Contact modal functionality
    function showContactModal(type) {
        console.log('Showing contact modal:', type);
        let title = '';
        let message = '';
        
        switch(type) {
            case 'quote':
                title = 'Get a Quote';
                message = 'Ready to get a quote for your tech repair needs? Contact Thomas directly for personalized service and competitive pricing.';
                break;
            case 'contact':
                title = 'Contact Thomas';
                message = 'Get in touch with Thomas for all your tech repair needs! He specializes in hardware repair, software troubleshooting, and data recovery.';
                break;
            case 'consultation':
                title = 'Schedule Consultation';
                message = 'Schedule a consultation with Thomas! He\'s available evenings & weekends to discuss your tech problems and provide solutions.';
                break;
            default:
                title = 'Contact Thomas';
                message = 'Ready to solve your tech problems? Get in touch with Thomas for reliable, affordable tech repair services.';
        }
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'contact-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" aria-label="Close modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>${message}</p>
                    <div class="contact-details">
                        <div class="contact-detail">
                            <span class="detail-icon">📧</span>
                            <span>thomas@t3ckn0g33k.com</span>
                        </div>
                        <div class="contact-detail">
                            <span class="detail-icon">📍</span>
                            <span>Massachusetts Area</span>
                        </div>
                        <div class="contact-detail">
                            <span class="detail-icon">⏰</span>
                            <span>Evenings & Weekends</span>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <a href="mailto:thomas@t3ckn0g33k.com?subject=Tech Repair Inquiry" class="btn btn--primary">Send Email</a>
                        <button class="btn btn--secondary modal-close">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Animate modal in
        setTimeout(() => {
            modal.classList.add('active');
        }, 10);
        
        // Close modal functionality
        const closeButtons = modal.querySelectorAll('.modal-close');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                closeModal(modal);
            });
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        
        // Close on escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal(modal);
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }
    
    function closeModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            if (modal.parentNode) {
                document.body.removeChild(modal);
            }
        }, 300);
    }
    
    // Enhanced hover effects for cards
    function addCardHoverEffects() {
        console.log('Adding card hover effects');
        const cards = document.querySelectorAll('.skill-card, .service-card, .social-link, .achievement-item');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Add click animations to buttons
    function addButtonAnimations() {
        console.log('Adding button animations');
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Don't interfere with links or modal close buttons
                if (this.tagName === 'A' || this.classList.contains('modal-close')) return;
                
                // Create ripple effect
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                button.appendChild(ripple);
                
                // Remove ripple after animation
                setTimeout(() => {
                    if (ripple.parentNode) {
                        ripple.parentNode.removeChild(ripple);
                    }
                }, 600);
            });
        });
    }
    
    // Intersection Observer for fade-in animations
    function addFadeInAnimations() {
        console.log('Adding fade-in animations');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe sections for fade-in effect
        const sections = document.querySelectorAll('.social-media, .skills-section, .cta-section, .services-section, .personal-story, .achievements, .contact-section');
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
    
    // Add custom CSS for dynamic elements
    function addCustomStyles() {
        console.log('Adding custom styles');
        const style = document.createElement('style');
        style.textContent = `
            .contact-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
                backdrop-filter: blur(5px);
            }
            
            .contact-modal.active {
                opacity: 1;
            }
            
            .modal-content {
                background: linear-gradient(135deg, #1a1a2e, #16213e);
                border: 1px solid #32b8c6;
                border-radius: 12px;
                padding: 32px;
                max-width: 500px;
                width: 90%;
                transform: scale(0.7);
                transition: transform 0.3s ease;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .contact-modal.active .modal-content {
                transform: scale(1);
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .modal-header h3 {
                color: #f5f5f5;
                margin: 0;
                font-size: 20px;
                font-weight: 550;
            }
            
            .modal-close {
                background: none;
                border: none;
                color: #f5f5f5;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.3s ease;
            }
            
            .modal-close:hover {
                background: rgba(255, 255, 255, 0.1);
            }
            
            .modal-body p {
                color: #f5f5f5;
                margin-bottom: 20px;
                line-height: 1.6;
            }
            
            .contact-details {
                margin: 20px 0;
                padding: 16px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border: 1px solid rgba(50, 184, 198, 0.2);
            }
            
            .contact-detail {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;
                color: #f5f5f5;
                font-size: 14px;
            }
            
            .contact-detail:last-child {
                margin-bottom: 0;
            }
            
            .detail-icon {
                width: 20px;
                text-align: center;
            }
            
            .modal-actions {
                display: flex;
                gap: 12px;
                justify-content: center;
                flex-wrap: wrap;
                margin-top: 20px;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
            
            .profile-image-wrapper {
                display: inline-block;
                margin-bottom: 24px;
            }
            
            #view-bio-btn {
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;
                display: inline-block;
                transition: transform 0.3s ease;
            }
            
            #view-bio-btn:hover {
                transform: scale(1.05);
            }
            
            .profile-image-container {
                position: relative;
            }
            
            #view-bio-btn:focus {
                outline: 2px solid #32b8c6;
                outline-offset: 4px;
                border-radius: 50%;
            }
        `;
        
        document.head.appendChild(style);
    }
    
    // Initialize all interactive features
    function initializeApp() {
        console.log('Initializing application');
        
        // Add button event listeners
        if (getQuoteBtn) {
            getQuoteBtn.addEventListener('click', () => showContactModal('quote'));
        }
        
        if (contactBtn) {
            contactBtn.addEventListener('click', () => showContactModal('contact'));
        }
        
        if (scheduleBtn) {
            scheduleBtn.addEventListener('click', () => showContactModal('consultation'));
        }
        
        if (requestQuoteBtn) {
            requestQuoteBtn.addEventListener('click', () => showContactModal('quote'));
        }
        
        addCardHoverEffects();
        addButtonAnimations();
        addFadeInAnimations();
        addCustomStyles();
        
        console.log('Thomas J. Barton Tech Website Initialized');
    }
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key to close modals or go back
        if (e.key === 'Escape') {
            const modal = document.querySelector('.contact-modal');
            if (modal) {
                const closeBtn = modal.querySelector('.modal-close');
                if (closeBtn) closeBtn.click();
            } else if (bioPage.classList.contains('active')) {
                showMainPage();
            }
        }
        
        // Enter key to navigate to bio page when profile is focused
        if (e.key === 'Enter' && document.activeElement === viewBioButton) {
            showBioPage();
        }
    });
    
    // Start the application
    initializeApp();
});