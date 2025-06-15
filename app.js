// T3CKN0G33K Enhanced Bio Website with Memorial Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initializePageNavigation();
    initializeAnimations();
    setupSocialLinkTracking();
    setupSmoothScrolling();
    setupInteractiveEffects();
    setupMemorialInteraction();
    controlSmokeAnimation();
    setupProfileSmokeEffects();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Page Navigation System
function initializePageNavigation() {
    const mainPage = document.getElementById('main-page');
    const memorialPage = document.getElementById('memorial-page');
    const memorialTrigger = document.getElementById('memorial-trigger');
    const backButton = document.getElementById('back-to-bio');
    
    // Navigate to memorial page
    function showMemorialPage() {
        // Add slide-out animation to main page
        mainPage.classList.add('slide-out');
        
        setTimeout(() => {
            mainPage.classList.add('hidden');
            mainPage.classList.remove('slide-out');
            
            // Show memorial page with slide-in animation
            memorialPage.classList.remove('hidden');
            memorialPage.classList.add('slide-in');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Trigger memorial page animations
            triggerMemorialAnimations();
        }, 400);
    }
    
    // Navigate back to main page
    function showMainPage() {
        // Add slide-out animation to memorial page
        memorialPage.classList.add('slide-out');
        
        setTimeout(() => {
            memorialPage.classList.add('hidden');
            memorialPage.classList.remove('slide-out', 'slide-in');
            
            // Show main page with slide-in animation
            mainPage.classList.remove('hidden');
            mainPage.classList.add('slide-in');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Re-trigger main page animations
            triggerMainPageAnimations();
        }, 400);
    }
    
    // Event listeners
    if (memorialTrigger) {
        memorialTrigger.addEventListener('click', showMemorialPage);
        memorialTrigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showMemorialPage();
            }
        });
    }
    
    if (backButton) {
        backButton.addEventListener('click', showMainPage);
    }
}

// Trigger animations for memorial page
function triggerMemorialAnimations() {
    const memorialElements = document.querySelectorAll('.memorial-hero, .memorial-card, .memorial-tribute');
    
    memorialElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Trigger flag wave animation
    const memorialFlag = document.querySelector('.memorial-flag');
    if (memorialFlag) {
        memorialFlag.style.animation = 'none';
        setTimeout(() => {
            memorialFlag.style.animation = 'flagWave 4s ease-in-out infinite';
        }, 100);
    }
}

// Trigger animations for main page
function triggerMainPageAnimations() {
    const mainElements = document.querySelectorAll('.profile-header, .social-links, .tech-skills, .memorial-section');
    
    mainElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize entrance animations with staggered timing
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.profile-header, .social-links, .tech-skills, .memorial-section');
    
    // Add intersection observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Setup social link click tracking and interactions
function setupSocialLinkTracking() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Add click analytics (without actual tracking for privacy)
        link.addEventListener('click', function(e) {
            const platform = this.querySelector('.platform-name').textContent;
            console.log(`Social link clicked: ${platform}`);
            
            // Add a subtle feedback animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
            
            // Add platform-specific glow
            const platform = this.classList[1]; // Get platform class
            if (platform) {
                this.style.transition = 'all 0.3s ease';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    });
}

// Setup smooth scrolling for any anchor links
function setupSmoothScrolling() {
    // Enable smooth scrolling for the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add smooth scroll to any future anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Setup interactive effects for skills and other elements
function setupInteractiveEffects() {
    const skillCards = document.querySelectorAll('.skill-card');
    const profileImage = document.querySelector('.profile-image');
    const memorialCards = document.querySelectorAll('.memorial-card');
    
    // Skill card interactions
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle glow effect
            this.style.boxShadow = '0 15px 40px rgba(50, 184, 198, 0.2)';
            
            // Animate the icon
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
        
        // Add click interaction for future expansion
        card.addEventListener('click', function() {
            const skillName = this.querySelector('.skill-name').textContent;
            console.log(`Skill clicked: ${skillName}`);
            
            // Add a pulse effect
            this.style.animation = 'skillPulse 0.6s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
    
    // Memorial card interactions
    memorialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
    
    // Profile picture interaction
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            // Add a fun rotation animation with enhanced smoke effect
            this.style.animation = 'profileSpin 0.8s ease-in-out';
            
            // Trigger enhanced smoke animation
            const smokeEffect = this.querySelector('.profile-smoke-effect');
            if (smokeEffect) {
                smokeEffect.style.animation = 'smokeFloat 1s ease-in-out, smokeBurst 0.8s ease-out';
            }
            
            setTimeout(() => {
                this.style.animation = '';
                if (smokeEffect) {
                    smokeEffect.style.animation = 'smokeFloat 4s ease-in-out infinite';
                }
            }, 800);
        });
        
        // Add subtle breathing effect to profile
        profileImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    }
}

// Dynamic smoke animation control
function controlSmokeAnimation() {
    const smokeElements = document.querySelectorAll('.smoke');
    let isReduced = false;
    
    // Add a way to toggle smoke animation for performance
    document.addEventListener('keydown', function(e) {
        if (e.key === 'r' && e.ctrlKey) {
            e.preventDefault();
            isReduced = !isReduced;
            
            smokeElements.forEach(smoke => {
                if (isReduced) {
                    smoke.style.animationPlayState = 'paused';
                    smoke.style.opacity = '0.5';
                } else {
                    smoke.style.animationPlayState = 'running';
                    smoke.style.opacity = '';
                }
            });
            
            console.log(`Smoke animation ${isReduced ? 'reduced' : 'restored'}`);
        }
    });
}

// Memorial section special interaction
function setupMemorialInteraction() {
    const memorialSection = document.querySelector('.memorial-section.clickable');
    
    if (memorialSection) {
        memorialSection.addEventListener('mouseenter', function() {
            // Add a subtle patriotic glow
            this.style.borderColor = 'rgba(217, 119, 6, 0.6)';
            this.style.boxShadow = '0 0 30px rgba(217, 119, 6, 0.2)';
            
            // Animate the flag
            const flag = this.querySelector('.flag-icon');
            if (flag) {
                flag.style.transform = 'scale(1.1)';
            }
            
            // Show click indicator more prominently
            const clickIndicator = this.querySelector('.click-indicator');
            if (clickIndicator) {
                clickIndicator.style.opacity = '1';
                clickIndicator.style.transform = 'translateY(-2px)';
            }
        });
        
        memorialSection.addEventListener('mouseleave', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
            
            const flag = this.querySelector('.flag-icon');
            if (flag) {
                flag.style.transform = '';
            }
            
            const clickIndicator = this.querySelector('.click-indicator');
            if (clickIndicator) {
                clickIndicator.style.opacity = '0.7';
                clickIndicator.style.transform = '';
            }
        });
        
        // Add click feedback
        memorialSection.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(0.98)';
        });
        
        memorialSection.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px)';
        });
    }
}

// Enhanced profile smoke effects
function setupProfileSmokeEffects() {
    const profileImage = document.querySelector('.profile-image');
    const smokeEffect = document.querySelector('.profile-smoke-effect');
    
    if (profileImage && smokeEffect) {
        // Add random smoke bursts
        setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance every interval
                smokeEffect.style.animation = 'smokeFloat 4s ease-in-out infinite, smokeBurst 2s ease-out';
                setTimeout(() => {
                    smokeEffect.style.animation = 'smokeFloat 4s ease-in-out infinite';
                }, 2000);
            }
        }, 8000);
    }
}

// Enhanced star twinkling for memorial page
function setupStarTwinkle() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5) rotate(180deg)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        star.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // Random twinkle effect
        setInterval(() => {
            if (Math.random() > 0.8) {
                star.style.animation = 'none';
                setTimeout(() => {
                    star.style.animation = `starTwinkle 2s ease-in-out infinite`;
                    star.style.animationDelay = `${index * 0.5}s`;
                }, 100);
            }
        }, 5000 + index * 1000);
    });
}

// Initialize enhanced interactions after page load
setTimeout(() => {
    setupStarTwinkle();
}, 1000);

// Add CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    @keyframes profileSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes smokeBurst {
        0% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.5);
            opacity: 1;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes skillPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .animate-in {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body.loaded {
        overflow-x: hidden;
    }
    
    /* Enhanced focus states */
    .social-link:focus-visible,
    .skill-card:focus-visible,
    .profile-image:focus-visible,
    .memorial-section.clickable:focus-visible,
    .memorial-card:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
        transform: translateY(-2px);
    }
    
    /* Profile image interactive states */
    .profile-image {
        cursor: pointer;
        user-select: none;
    }
    
    .profile-image:active {
        transform: scale(0.98);
    }
    
    /* Memorial section enhanced interactivity */
    .memorial-section.clickable {
        user-select: none;
    }
    
    .memorial-section.clickable:active {
        transform: translateY(-1px) scale(0.98) !important;
    }
    
    /* Enhanced hover effects for better UX */
    .social-link:hover .social-icon {
        transform: scale(1.1);
        transition: transform 0.2s ease;
    }
    
    .skill-card:hover .skill-icon {
        transform: scale(1.2) rotate(5deg);
        transition: transform 0.3s ease;
    }
    
    /* Memorial page specific animations */
    .memorial-card:hover .card-icon {
        transform: scale(1.2) rotate(10deg);
        transition: transform 0.3s ease;
    }
    
    /* Page transition improvements */
    .page-content {
        will-change: transform, opacity;
    }
    
    .slide-out {
        animation: slideOutLeft 0.4s ease-in-out forwards;
    }
    
    .slide-in {
        animation: slideInRight 0.4s ease-in-out forwards;
    }
    
    @keyframes slideOutLeft {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(-100%);
        }
    }
    
    @keyframes slideInRight {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    /* Patriotic button enhancements */
    .back-button:hover {
        background: linear-gradient(135deg, var(--patriotic-gold), #B45309);
        color: white;
        border-color: var(--patriotic-gold);
    }
    
    /* Accessibility improvements */
    @media (prefers-reduced-motion: reduce) {
        .smoke,
        .profile-smoke-effect,
        .flag-icon,
        .click-arrow,
        .star {
            animation-duration: 60s;
            opacity: 0.3;
        }
        
        .profile-header,
        .social-links,
        .tech-skills,
        .memorial-section {
            animation: none;
        }
        
        .page-content,
        .slide-out,
        .slide-in {
            transition-duration: 0.01ms !important;
            animation: none !important;
        }
        
        * {
            transition-duration: 0.01ms !important;
        }
    }
    
    /* Enhanced click feedback */
    .clickable {
        position: relative;
        overflow: hidden;
    }
    
    .clickable::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(217, 119, 6, 0.2);
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
    }
    
    .clickable:active::after {
        width: 300px;
        height: 300px;
    }
`;

document.head.appendChild(style);

// Keyboard navigation enhancement
document.addEventListener('keydown', function(e) {
    // Space or Enter on profile image
    if ((e.key === ' ' || e.key === 'Enter') && document.activeElement.classList.contains('profile-image')) {
        e.preventDefault();
        document.activeElement.click();
    }
    
    // Escape key to go back from memorial page
    if (e.key === 'Escape') {
        const memorialPage = document.getElementById('memorial-page');
        const backButton = document.getElementById('back-to-bio');
        
        if (memorialPage && !memorialPage.classList.contains('hidden')) {
            backButton.click();
        }
    }
});

// Console welcome message with enhanced ASCII art
console.log(`
🔥 T3CKN0G33K Enhanced Bio Website with Memorial Page Loaded 🔥
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Features:
   • Artistic profile with smoke effects
   • Animated smoke background
   • Interactive social links
   • Clickable memorial section
   • Dedicated memorial page with patriotic design
   • Smooth page transitions
   • Responsive design
   • Accessibility optimized
   
🎮 Easter Eggs & Controls:
   • Click the profile picture for a surprise
   • Ctrl+R to toggle smoke animation
   • Watch for random smoke bursts
   • Escape key to return from memorial page
   • Click memorial section to view tribute
   
🇺🇸 Memorial Features:
   • Patriotic design elements
   • Military honors presentation
   • Family legacy showcase
   • Interactive tribute stars
   
📱 All Social Links Ready!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     ████████╗██████╗  ██████╗██╗  ██╗███╗   ██╗ ██████╗  ██████╗ ██████╗ ██████╗ ██╗  ██╗
     ╚══██╔══╝╚════██╗██╔════╝██║ ██╔╝████╗  ██║██╔═████╗██╔════╝ ╚════██╗╚════██╗██║ ██╔╝
        ██║    █████╔╝██║     █████╔╝ ██╔██╗ ██║██║██╔██║██║  ███╗ █████╔╝ █████╔╝█████╔╝ 
        ██║    ╚═══██╗██║     ██╔═██╗ ██║╚██╗██║████╔╝██║██║   ██║ ╚═══██╗ ╚═══██╗██╔═██╗ 
        ██║   ██████╔╝╚██████╗██║  ██╗██║ ╚████║╚██████╔╝╚██████╔╝██████╔╝██████╔╝██║  ██╗
        ╚═╝   ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝
        
              🇺🇸 Honoring Maurice A. "Moe" Vezina - US Army Veteran 🇺🇸
`);