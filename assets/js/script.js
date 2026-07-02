// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in, .slide-in, .slide-up').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn, .action-card').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.position = 'absolute';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.transformOrigin = 'center';

        // Add ripple animation style if not already present
        if (!document.querySelector('style[data-ripple]')) {
            const style = document.createElement('style');
            style.setAttribute('data-ripple', 'true');
            style.innerHTML = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Form validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            e.preventDefault();
            alert('Please fill in all fields');
        }
    });
}

// Remember Me functionality
if (localStorage.getItem('rememberMe') === 'true') {
    const rememberMeCheckbox = document.getElementById('rememberMe');
    if (rememberMeCheckbox) {
        rememberMeCheckbox.checked = true;
        const username = localStorage.getItem('savedUsername');
        if (username) {
            document.getElementById('username').value = username;
        }
    }
}

const rememberMeCheckbox = document.getElementById('rememberMe');
if (rememberMeCheckbox) {
    rememberMeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            const username = document.getElementById('username').value;
            localStorage.setItem('rememberMe', 'true');
            localStorage.setItem('savedUsername', username);
        } else {
            localStorage.removeItem('rememberMe');
            localStorage.removeItem('savedUsername');
        }
    });
}

// Prevent multiple form submissions
let isFormSubmitting = false;
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        if (isFormSubmitting) {
            e.preventDefault();
            return;
        }
        isFormSubmitting = true;

        setTimeout(() => {
            isFormSubmitting = false;
        }, 2000);
    });
}

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} position-fixed`;
    toast.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        min-width: 300px;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Check for session on protected pages
function checkSession() {
    const currentPage = window.location.pathname;
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const protectedPages = ['dashboard.html', 'result.html', 'marksheet.html'];

    const isProtected = protectedPages.some(page => currentPage.includes(page));

    if (isProtected && !isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Run session check on page load
document.addEventListener('DOMContentLoaded', function() {
    checkSession();
});

// Add loading animation
function addLoadingAnimation() {
    const style = document.createElement('style');
    style.innerHTML = `
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #8B0000;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}
addLoadingAnimation();

// Dynamic copyright year
const currentYear = new Date().getFullYear();
document.querySelectorAll('footer').forEach(footer => {
    if (footer.innerHTML.includes('2026')) {
        footer.innerHTML = footer.innerHTML.replace(/2026/g, currentYear);
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Alt + L for Login
    if (e.altKey && e.key === 'l') {
        const loginLink = document.querySelector('a[href="login.html"]');
        if (loginLink) loginLink.click();
    }
    // Alt + D for Dashboard
    if (e.altKey && e.key === 'd') {
        const dashboardLink = document.querySelector('a[href="dashboard.html"]');
        if (dashboardLink) dashboardLink.click();
    }
    // Alt + H for Home
    if (e.altKey && e.key === 'h') {
        const homeLink = document.querySelector('a[href="index.html"]');
        if (homeLink) homeLink.click();
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// Add table responsiveness
document.querySelectorAll('table').forEach(table => {
    if (window.innerWidth < 768 && !table.classList.contains('table-responsive-added')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        table.classList.add('table-responsive-added');
    }
});

// Resize observer for responsive behavior
window.addEventListener('resize', () => {
    document.querySelectorAll('table').forEach(table => {
        if (window.innerWidth < 768 && !table.parentElement.classList.contains('table-responsive')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-responsive';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
});

// Add accessibility features
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all interactive elements are keyboard accessible
    document.querySelectorAll('button, a, [role="button"]').forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
    });

    // Add ARIA labels where needed
    document.querySelectorAll('.btn').forEach(btn => {
        if (!btn.hasAttribute('aria-label')) {
            btn.setAttribute('aria-label', btn.textContent.trim());
        }
    });
});

// Performance optimization - defer non-critical scripts
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    // Initialize all interactive features
    console.log('Application initialized');
}

// Service Worker registration for offline support (optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable offline support
    // navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed'));
}

// Add theme toggle (optional dark mode)
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Restore theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

console.log('Student Examination Portal - v1.0');
console.log('All systems operational');
