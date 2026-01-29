// Enterprise Pricing Interactive Features
(function() {
  'use strict';

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricing);
  } else {
    initPricing();
  }

  function initPricing() {
    const viewToggles = document.querySelectorAll('.view-toggle-btn');
    const cardsView = document.querySelector('.pricing-cards-view');
    const tableView = document.querySelector('.pricing-table-view');

    if (!viewToggles.length || !cardsView || !tableView) return;

    // View toggle functionality
    viewToggles.forEach(btn => {
      btn.addEventListener('click', function() {
        const view = this.dataset.view;
        
        // Update button states
        viewToggles.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Toggle views with animation
        if (view === 'cards') {
          tableView.classList.remove('active');
          setTimeout(() => {
            cardsView.classList.add('active');
          }, 300);
        } else {
          cardsView.classList.remove('active');
          setTimeout(() => {
            tableView.classList.add('active');
          }, 300);
        }
      });
    });

    // Add hover effects to pricing cards
    const pricingCards = document.querySelectorAll('.pricing-enterprise-card');
    pricingCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.setProperty('--mouse-entering', '1');
      });

      card.addEventListener('mouseleave', function() {
        this.style.setProperty('--mouse-entering', '0');
      });
    });

    // Smooth scroll for CTAs
    const ctaLinks = document.querySelectorAll('.enterprise-btn[href^="#"], .table-cta-btn[href^="#"]');
    ctaLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offset = 80; // Header offset
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
      '.pricing-enterprise-card, .trust-item, .pricing-final-cta'
    );
    
    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(el);
    });

    // Feature highlight on hover in table
    const tableRows = document.querySelectorAll('.table-row');
    tableRows.forEach(row => {
      row.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(50, 145, 246, 0.05)';
      });

      row.addEventListener('mouseleave', function() {
        this.style.background = '';
      });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.enterprise-btn, .table-cta-btn');
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // Add ripple effect styles dynamically
  const style = document.createElement('style');
  style.textContent = `
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      pointer-events: none;
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

})();
