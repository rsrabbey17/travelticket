// ===== AUTHENTICATION =====

function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => {
        t.classList.remove('active');
        if (t.dataset.tab === tab) t.classList.add('active');
    });
    
    document.querySelectorAll('.auth-form-content').forEach(f => {
        f.classList.remove('active');
    });
    
    const formMap = {
        'login': 'loginForm',
        'register': 'registerForm',
        'forgot': 'forgotForm'
    };
    
    const form = document.getElementById(formMap[tab]);
    if (form) form.classList.add('active');
}

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const icon = button.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

function checkAuth() {
    const session = getSession();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const authPage = 'login.html';
    
    if (authPage === currentPage && session) {
        window.location.href = 'index.html';
        return false;
    }
    if (authPage !== currentPage && !session) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function updateNavbar() {
    const user = getCurrentUser();
    const greeting = document.getElementById('userGreeting');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (user) {
        if (greeting) {
            greeting.textContent = '👋 ' + user.fullName;
            greeting.style.display = 'inline';
        }
        if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    } else {
        if (greeting) {
            greeting.textContent = '';
            greeting.style.display = 'none';
        }
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

function logout() {
    clearSession();
    showAlert('👋 Logged out successfully!', 'success');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 500);
}

function showTerms() {
    showAlert('By creating an account, you agree to our Terms & Conditions.', 'info', 0);
}

document.addEventListener('DOMContentLoaded', function() {
    
    // Register
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('regFullName').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            const terms = document.getElementById('termsCheck').checked;
            
            if (!validateName(fullName)) {
                showAlert('Please enter a valid full name (letters only).', 'error');
                return;
            }
            if (!validatePhone(phone)) {
                showAlert('Please enter a valid Bangladeshi phone (01XXXXXXXXX).', 'error');
                return;
            }
            if (!validateEmail(email)) {
                showAlert('Please enter a valid email address.', 'error');
                return;
            }
            if (!validatePassword(password)) {
                showAlert('Password must be at least 8 characters.', 'error');
                return;
            }
            if (password !== confirmPassword) {
                showAlert('Passwords do not match.', 'error');
                return;
            }
            if (!terms) {
                showAlert('Please agree to the Terms & Conditions.', 'error');
                return;
            }
            
            if (userExists(email, phone)) {
                showAlert('User already exists. Please login.', 'error');
                return;
            }
            
            createUser({ fullName, phone, email, password });
            showAlert('🎉 Account created! Please login.', 'success');
            
            setTimeout(() => {
                switchTab('login');
                document.getElementById('loginForm').reset();
            }, 1500);
        });
    }
    
    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const loginEmail = document.getElementById('loginEmail').value.trim();
            const loginPassword = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            if (!loginEmail || !loginPassword) {
                showAlert('Please enter both email/phone and password.', 'error');
                return;
            }
            
            const user = getUserByIdentifier(loginEmail);
            if (!user) {
                showAlert('No account found with this email or phone.', 'error');
                return;
            }
            if (user.password !== loginPassword) {
                showAlert('Incorrect password. Please try again.', 'error');
                return;
            }
            
            setSession(user, rememberMe);
            showAlert('✅ Welcome back, ' + user.fullName + '!', 'success');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        });
    }
    
    // Forgot Password
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const resetEmail = document.getElementById('resetEmail').value.trim();
            if (!resetEmail) {
                showAlert('Please enter your email or phone.', 'error');
                return;
            }
            
            const user = getUserByIdentifier(resetEmail);
            if (!user) {
                showAlert('No account found with this email or phone.', 'error');
                return;
            }
            
            const resetToken = generateBookingId('RST');
            localStorage.setItem('resetToken', JSON.stringify({
                email: user.email,
                token: resetToken,
                expires: new Date(Date.now() + 3600000).toISOString()
            }));
            
            showAlert('📧 Reset link sent to ' + user.email, 'success');
            console.log('🔑 Reset Token:', resetToken);
            
            setTimeout(() => {
                switchTab('login');
            }, 2000);
        });
    }
    
    checkAuth();
    updateNavbar();
});

window.switchTab = switchTab;
window.togglePassword = togglePassword;
window.logout = logout;
window.updateNavbar = updateNavbar;
window.showTerms = showTerms;