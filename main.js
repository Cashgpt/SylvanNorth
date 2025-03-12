/**
 * Sylvan North Website Main JavaScript
 * 
 * This file handles all the dynamic functionality of the website.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    populateContent();
    initFundingProgress();
    initContactForm();
    initNewsletterForm();
    initBackToTop();
    initPaymentButtons();
    
    // Set copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    // Toggle Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Populate dynamic content from data.js
 */
function populateContent() {
    // Populate Services
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
        servicesData.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <div class="service-image">
                    <img src="${service.image}" alt="${service.title}">
                </div>
                <div class="service-content">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <a href="${service.link}" class="btn btn-outline">Learn More</a>
                </div>
            `;
            servicesContainer.appendChild(serviceCard);
        });
    }
    
    // Populate Impact Metrics
    const impactContainer = document.getElementById('impact-container');
    if (impactContainer) {
        impactData.forEach(impact => {
            const impactItem = document.createElement('div');
            impactItem.className = 'impact-item';
            impactItem.innerHTML = `
                <div class="impact-icon">
                    <i class="${impact.icon}"></i>
                </div>
                <div class="impact-number">${impact.number}</div>
                <p>${impact.label}</p>
            `;
            impactContainer.appendChild(impactItem);
        });
    }
    
    // Populate Projects
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
    
    // Populate Funding Tiers
    const fundingTiersContainer = document.getElementById('funding-tiers-container');
    if (fundingTiersContainer) {
        fundingTiersData.forEach(tier => {
            const tierCard = document.createElement('div');
            tierCard.className = 'level-card';
            
            // Create features list
            let featuresHtml = '';
            tier.features.forEach(feature => {
                featuresHtml += `<li><i class="fas fa-check"></i> ${feature}</li>`;
            });
            
            tierCard.innerHTML = `
                <div class="level-header ${tier.isPopular ? 'popular' : ''}">
                    <h3>${tier.title}</h3>
                </div>
                <div class="level-content">
                    <div class="level-price">${tier.price}</div>
                    <ul class="level-features">
                        ${featuresHtml}
                    </ul>
                    <a href="${tier.link}" class="btn ${tier.isPopular ? 'btn-accent' : 'btn-outline'}" style="width: 100%;">Select</a>
                </div>
            `;
            fundingTiersContainer.appendChild(tierCard);
        });
    }
    
    // Populate Testimonials
    const testimonialsContainer = document.getElementById('testimonials-container');
    if (testimonialsContainer) {
        testimonialsData.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <div class="testimonial-text">
                    <p>${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="${testimonial.image}" alt="${testimonial.name}">
                    </div>
                    <div class="author-details">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.title}</p>
                    </div>
                </div>
            `;
            testimonialsContainer.appendChild(testimonialCard);
        });
    }
}

/**
 * Initialize funding progress bar and stats
 */
function initFundingProgress() {
    // Update funding progress display
    const raisedAmount = document.getElementById('raised-amount');
    const goalAmount = document.getElementById('goal-amount');
    const supporterCount = document.getElementById('supporter-count');
    const percentFunded = document.getElementById('percent-funded');
    const daysLeft = document.getElementById('days-left');
    const progressFill = document.getElementById('progressFill');
    
    if (raisedAmount && goalAmount && supporterCount && percentFunded && daysLeft && progressFill) {
        // Format currency values
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        
        // Calculate percentage
        const percentage = (fundingData.currentFunding / fundingData.fundingGoal) * 100;
        
        // Update DOM elements
        raisedAmount.textContent = `${formatter.format(fundingData.currentFunding)} Raised`;
        goalAmount.textContent = `${formatter.format(fundingData.fundingGoal)} Goal`;
        supporterCount.textContent = fundingData.supporterCount;
        percentFunded.textContent = `${Math.round(percentage)}%`;
        daysLeft.textContent = fundingData.daysLeft;
        
        // Animate progress bar
        setTimeout(() => {
            progressFill.style.width = `${percentage}%`;
        }, 500);
    }
}

/**
 * Initialize contact form
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // If using Formspree, the form will be submitted directly
            // For custom handling, uncomment the following:
            
            /*
            e.preventDefault();
            const formData = new FormData(contactForm);
            
            // Example: log form data
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            
            // Example: send form data via fetch
            fetch('your-endpoint-url', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Message sent successfully!');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });
            */
        });
    }
}

/**
 * Initialize newsletter form
 */
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            // If using Formspree, the form will be submitted directly
            // For custom handling, uncomment similar to the contact form above
        });
    }
}

/**
 * Initialize back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Initialize payment buttons
 */
function initPaymentButtons() {
    const contributeButton = document.getElementById('contribute-button');
    if (contributeButton) {
        contributeButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Either redirect to a donation page
            // window.location.href = paymentConfig.donationPageUrl;
            
            // Or open a modal with payment options
            alert('This would open a payment modal in production. Configure the payment integration in data.js.');
            
            // For PayPal or Stripe integration, you would need to include their SDKs
            // and implement their payment flows here
        });
    }
}
