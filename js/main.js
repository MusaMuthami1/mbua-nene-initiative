// Mbua Nene Initiative - Main JavaScript File
// Handles counters, testimonial slider, modal logic, project filter, form handlers, donation confirmation

(function() {
    'use strict';

    // DOM Elements
    const elements = {
        header: document.querySelector('.header'),
        mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
        navMenu: document.querySelector('.nav-menu'),
        navLinks: document.querySelectorAll('.nav-link'),
        counters: document.querySelectorAll('.counter'),
        testimonialSlider: document.querySelector('.testimonial-slider'),
        testimonialItems: document.querySelectorAll('.testimonial-item'),
        sliderDots: document.querySelectorAll('.slider-dot'),
        projectFilters: document.querySelectorAll('.project-filter'),
        projectCards: document.querySelectorAll('.project-card'),
        modals: document.querySelectorAll('.modal'),
        modalTriggers: document.querySelectorAll('[data-modal]'),
        modalCloses: document.querySelectorAll('.modal-close'),
        donationForm: document.querySelector('#donation-form'),
        volunteerForm: document.querySelector('#volunteer-form'),
        contactForm: document.querySelector('#contact-form')
    };

    // State
    const state = {
        currentTestimonial: 0,
        testimonialInterval: null,
        countersAnimated: false,
        currentFilter: 'all'
    };

    // Initialize application
    function init() {
        setupEventListeners();
        initializeComponents();
        handleInitialLoad();
    }

    // Event Listeners
    function setupEventListeners() {
        // Window events
        window.addEventListener('scroll', throttle(handleScroll, 16));
        window.addEventListener('load', handleLoad);
        window.addEventListener('resize', throttle(handleResize, 250));

        // Navigation events
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        }

        // Close mobile menu when clicking nav links
        elements.navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Testimonial slider events
        if (elements.sliderDots.length > 0) {
            elements.sliderDots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToTestimonial(index));
            });
        }

        // Project filter events
        elements.projectFilters.forEach(filter => {
            filter.addEventListener('click', handleProjectFilter);
        });

        // Modal events
        elements.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', handleModalOpen);
        });

        elements.modalCloses.forEach(close => {
            close.addEventListener('click', handleModalClose);
        });

        elements.modals.forEach(modal => {
            modal.addEventListener('click', handleModalBackdropClick);
        });

        // Keyboard navigation for modals
        document.addEventListener('keydown', handleKeydown);

        // Form events
        if (elements.donationForm) {
            elements.donationForm.addEventListener('submit', handleDonationSubmit);
            setupDonationForm();
        }

        if (elements.volunteerForm) {
            elements.volunteerForm.addEventListener('submit', handleVolunteerSubmit);
        }

        if (elements.contactForm) {
            elements.contactForm.addEventListener('submit', handleContactSubmit);
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });
    }

    // Initialize Components
    function initializeComponents() {
        initializeTestimonialSlider();
        setupIntersectionObserver();
        initializeAnimations();
    }

    // Handle initial page load
    function handleInitialLoad() {
        // Set active navigation item
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        elements.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });

        // Initialize any existing progress bars
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const targetWidth = bar.dataset.width || '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 500);
        });
    }

    // Scroll Handler
    function handleScroll() {
        const scrollY = window.scrollY;

        // Header scroll effect
        if (elements.header) {
            if (scrollY > 100) {
                elements.header.classList.add('scrolled');
            } else {
                elements.header.classList.remove('scrolled');
            }
        }

        // Animate counters when visible
        if (!state.countersAnimated && elements.counters.length > 0) {
            const firstCounter = elements.counters[0];
            if (isElementInViewport(firstCounter)) {
                animateCounters();
                state.countersAnimated = true;
            }
        }
    }

    // Window Load Handler
    function handleLoad() {
        // Fade in page content
        document.body.style.opacity = '1';
        
        // Initialize any lazy loaded content
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
        });
    }

    // Window Resize Handler
    function handleResize() {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }

    // Mobile Menu Functions
    function toggleMobileMenu() {
        elements.navMenu.classList.toggle('active');
        elements.mobileMenuToggle.setAttribute('aria-expanded', 
            elements.navMenu.classList.contains('active'));
    }

    function closeMobileMenu() {
        elements.navMenu.classList.remove('active');
        if (elements.mobileMenuToggle) {
            elements.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Testimonial Slider Functions
    function initializeTestimonialSlider() {
        if (elements.testimonialItems.length === 0) return;

        // Show first testimonial
        showTestimonial(0);

        // Start auto-play
        startTestimonialAutoplay();

        // Pause on hover
        if (elements.testimonialSlider) {
            elements.testimonialSlider.addEventListener('mouseenter', stopTestimonialAutoplay);
            elements.testimonialSlider.addEventListener('mouseleave', startTestimonialAutoplay);
        }
    }

    function showTestimonial(index) {
        // Hide all testimonials
        elements.testimonialItems.forEach(item => {
            item.classList.remove('active');
        });

        // Remove active from all dots
        elements.sliderDots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current testimonial
        if (elements.testimonialItems[index]) {
            elements.testimonialItems[index].classList.add('active');
        }

        // Activate current dot
        if (elements.sliderDots[index]) {
            elements.sliderDots[index].classList.add('active');
        }

        state.currentTestimonial = index;
    }

    function goToTestimonial(index) {
        showTestimonial(index);
        stopTestimonialAutoplay();
        startTestimonialAutoplay();
    }

    function nextTestimonial() {
        const nextIndex = (state.currentTestimonial + 1) % elements.testimonialItems.length;
        showTestimonial(nextIndex);
    }

    function startTestimonialAutoplay() {
        if (elements.testimonialItems.length <= 1) return;
        
        stopTestimonialAutoplay();
        state.testimonialInterval = setInterval(nextTestimonial, 5000);
    }

    function stopTestimonialAutoplay() {
        if (state.testimonialInterval) {
            clearInterval(state.testimonialInterval);
            state.testimonialInterval = null;
        }
    }

    // Counter Animation
    function animateCounters() {
        elements.counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current).toLocaleString();
            }, 16);
        });
    }

    // Project Filter Functions
    function handleProjectFilter(event) {
        event.preventDefault();
        const filter = event.target.dataset.filter;
        
        // Update active filter
        elements.projectFilters.forEach(f => f.classList.remove('active'));
        event.target.classList.add('active');

        // Filter projects
        filterProjects(filter);
        state.currentFilter = filter;
    }

    function filterProjects(filter) {
        elements.projectCards.forEach(card => {
            const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
                card.classList.remove('fade-in');
            }
        });
    }

    // Modal Functions
    function handleModalOpen(event) {
        event.preventDefault();
        const modalId = event.target.dataset.modal;
        const modal = document.getElementById(modalId);
        
        if (modal) {
            openModal(modal);
        }
    }

    function handleModalClose(event) {
        const modal = event.target.closest('.modal');
        if (modal) {
            closeModal(modal);
        }
    }

    function handleModalBackdropClick(event) {
        if (event.target === event.currentTarget) {
            closeModal(event.target);
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    }

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Form Handlers
    function setupDonationForm() {
        const amountButtons = document.querySelectorAll('.amount-btn');
        const customAmountInput = document.querySelector('#custom-amount');
        const recurringCheckbox = document.querySelector('#recurring');
        const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

        // Amount selection
        amountButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                amountButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const amount = btn.dataset.amount;
                if (customAmountInput) {
                    customAmountInput.value = amount;
                }
            });
        });

        // Custom amount input
        if (customAmountInput) {
            customAmountInput.addEventListener('input', () => {
                amountButtons.forEach(btn => btn.classList.remove('active'));
            });
        }

        // Payment method selection
        paymentMethods.forEach(method => {
            method.addEventListener('change', updatePaymentUI);
        });
    }

    function updatePaymentUI() {
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked');
        const paymentDetails = document.querySelectorAll('.payment-details');
        
        paymentDetails.forEach(detail => {
            detail.style.display = 'none';
        });

        if (selectedMethod) {
            const targetDetail = document.querySelector(`#${selectedMethod.value}-details`);
            if (targetDetail) {
                targetDetail.style.display = 'block';
            }
        }
    }

    function handleDonationSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const amount = formData.get('amount');
        const recurring = formData.get('recurring') === 'on';
        const paymentMethod = formData.get('payment-method');

        // Validate form
        if (!amount || parseFloat(amount) <= 0) {
            showNotification('Please enter a valid donation amount.', 'error');
            return;
        }

        if (!paymentMethod) {
            showNotification('Please select a payment method.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success modal
            showDonationSuccess(amount, recurring);
            
            // Reset form
            event.target.reset();
        }, 2000);
    }

    function showDonationSuccess(amount, recurring) {
        const modal = document.getElementById('donation-success-modal');
        if (modal) {
            const amountElement = modal.querySelector('.donation-amount');
            const typeElement = modal.querySelector('.donation-type');
            
            if (amountElement) {
                amountElement.textContent = `$${parseFloat(amount).toFixed(2)}`;
            }
            
            if (typeElement) {
                typeElement.textContent = recurring ? 'monthly recurring' : 'one-time';
            }
            
            openModal(modal);
        } else {
            showNotification(
                `Thank you for your ${recurring ? 'monthly recurring' : 'one-time'} donation of $${parseFloat(amount).toFixed(2)}!`, 
                'success'
            );
        }
    }

    function handleVolunteerSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const interests = formData.getAll('interests');

        // Basic validation
        if (!name || !email || interests.length === 0) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            showNotification('Thank you for your interest in volunteering! We will contact you soon.', 'success');
            event.target.reset();
        }, 1500);
    }

    function handleContactSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            event.target.reset();
        }, 1500);
    }

    // Smooth Scroll
    function handleSmoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = elements.header ? elements.header.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Intersection Observer for animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.card, .stat-item, .timeline-item');
        animateElements.forEach(el => observer.observe(el));
    }

    // Initialize animations
    function initializeAnimations() {
        // Add CSS for animations
        const style = document.createElement('style');
        style.textContent = `
            .card, .stat-item, .timeline-item {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .fade-in {
                animation: fadeIn 0.5s ease-in-out;
            }
        `;
        document.head.appendChild(style);
    }

    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#2e8b57' : type === 'error' ? '#e74c3c' : '#3498db',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '8px',
            zIndex: '9999',
            maxWidth: '400px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    // Utility Functions
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API (for debugging or external access)
    window.MbuaNeneInitiative = {
        showNotification,
        openModal,
        closeModal,
        filterProjects,
        goToTestimonial
    };

})();