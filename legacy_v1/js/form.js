// Contact Form Handling

// Initialize EmailJS (you'll need to add your credentials)
// Uncomment and add your EmailJS credentials when ready:
// (function() {
//   emailjs.init("YOUR_USER_ID");
// })();

// Form submission handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const submitBtn = contactForm.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validate form
        if (!validateForm(contactForm)) {
            return;
        }

        // Show loading state
        setLoadingState(submitBtn, btnText, btnLoader, true);

        // Get form data
        const formData = {
            from_name: contactForm.name.value.trim(),
            from_email: contactForm.email.value.trim(),
            message: contactForm.message.value.trim()
        };

        // Check if EmailJS is configured
        if (typeof emailjs === 'undefined') {
            // Fallback: Log to console (for development)
            console.log('EmailJS not configured. Form data:', formData);

            // Simulate sending delay
            await wait(1500);

            // Show success message
            showFormMessage('success', 'Message received! (EmailJS not configured - check console)');
            contactForm.reset();
            setLoadingState(submitBtn, btnText, btnLoader, false);
            return;
        }

        // Send email using EmailJS
        try {
            // Replace with your EmailJS service ID and template ID
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);

            // Success
            showFormMessage('success', 'Message sent successfully! I\'ll get back to you soon.');
            contactForm.reset();
        } catch (error) {
            // Error
            console.error('EmailJS error:', error);
            showFormMessage('error', 'Failed to send message. Please try emailing me directly.');
        } finally {
            setLoadingState(submitBtn, btnText, btnLoader, false);
        }
    });

    // Real-time validation
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            // Remove error state on input
            const errorElement = input.parentElement.querySelector('.form-error');
            if (errorElement) {
                errorElement.remove();
            }
            input.classList.remove('error');
        });
    });
}

// Validate entire form
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('.form-input, .form-textarea');

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let errorMessage = '';

    // Remove existing error
    const existingError = field.parentElement.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('error');

    // Validation rules
    if (fieldName === 'name') {
        if (value.length < 2) {
            errorMessage = 'Name must be at least 2 characters';
        }
    } else if (fieldName === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
        }
    } else if (fieldName === 'message') {
        if (value.length < 10) {
            errorMessage = 'Message must be at least 10 characters';
        }
    }

    // Show error if validation failed
    if (errorMessage) {
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = errorMessage;
        field.parentElement.appendChild(errorElement);
        return false;
    }

    return true;
}

// Set loading state for submit button
function setLoadingState(button, textElement, loaderElement, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
        textElement.style.display = 'none';
        loaderElement.style.display = 'inline-flex';
    } else {
        button.classList.remove('loading');
        button.disabled = false;
        textElement.style.display = 'inline';
        loaderElement.style.display = 'none';
    }
}

// Show form message (success or error)
function showFormMessage(type, message) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;

    // Add styles
    Object.assign(messageElement.style, {
        padding: 'var(--space-md)',
        marginTop: 'var(--space-md)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-sm)',
        backgroundColor: type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
        color: type === 'success' ? 'var(--success)' : 'var(--error)',
        border: `1px solid ${type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
    });

    // Insert message after form
    const form = document.getElementById('contactForm');
    form.parentElement.appendChild(messageElement);

    // Animate in
    if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
        gsap.from(messageElement, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.out'
        });
    }

    // Remove message after 5 seconds
    setTimeout(() => {
        if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
            gsap.to(messageElement, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => messageElement.remove()
            });
        } else {
            messageElement.remove();
        }
    }, 5000);
}

// Copy email to clipboard functionality
function initEmailCopy() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        // Add click handler to copy email
        link.addEventListener('click', async (e) => {
            // Allow default mailto: behavior
            // But also copy to clipboard
            const email = link.textContent.trim();
            const copied = await copyToClipboard(email);

            if (copied) {
                // Show tooltip or message
                showCopyTooltip(link, 'Email copied!');
            }
        });
    });
}

// Show copy tooltip
function showCopyTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'copy-tooltip';
    tooltip.textContent = message;

    Object.assign(tooltip.style, {
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: 'var(--space-xs) var(--space-md)',
        backgroundColor: 'var(--success)',
        color: 'var(--background-dark)',
        borderRadius: 'var(--radius-md)',
        fontSize: 'var(--font-small)',
        fontWeight: 'var(--weight-medium)',
        whiteSpace: 'nowrap',
        marginBottom: 'var(--space-sm)',
        zIndex: '1000'
    });

    element.style.position = 'relative';
    element.appendChild(tooltip);

    // Animate and remove
    if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
        gsap.from(tooltip, {
            opacity: 0,
            y: 10,
            duration: 0.2,
            ease: 'power2.out'
        });

        gsap.to(tooltip, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            delay: 2,
            ease: 'power2.in',
            onComplete: () => tooltip.remove()
        });
    } else {
        setTimeout(() => tooltip.remove(), 2000);
    }
}

// Initialize form handling when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initEmailCopy();
});
