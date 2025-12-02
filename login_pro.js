document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const loginBtn = document.getElementById('loginBtn');

    // Toggle Password Visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle icon
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Input Validation
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const showError = (input, message) => {
        const inputGroup = input.parentElement;
        inputGroup.classList.add('error');
        const errorMessage = inputGroup.querySelector('.error-message');
        if (message) {
            errorMessage.textContent = message;
        }
    };

    const clearError = (input) => {
        const inputGroup = input.parentElement;
        inputGroup.classList.remove('error');
    };

    // Real-time validation
    emailInput.addEventListener('input', () => {
        if (emailInput.value.length > 0) {
            if (validateEmail(emailInput.value)) {
                clearError(emailInput);
            }
        } else {
            clearError(emailInput);
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0) {
            clearError(passwordInput);
        }
    });

    // Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate Email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Password
        if (passwordInput.value.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (isValid) {
            // Simulate API call
            loginBtn.classList.add('loading');
            
            // Disable inputs during loading
            emailInput.disabled = true;
            passwordInput.disabled = true;

            setTimeout(() => {
                loginBtn.classList.remove('loading');
                emailInput.disabled = false;
                passwordInput.disabled = false;
                
                // Success animation or redirect could go here
                alert('Login Successful! (Demo)');
                loginForm.reset();
            }, 2000);
        }
    });

    // Add ripple effect to buttons
    const createRipple = (event) => {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click', createRipple);
    }
});
