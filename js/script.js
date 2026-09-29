const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const registerTab = document.getElementById('registerTab');
const loginTab = document.getElementById('loginTab');
const registerPanel = document.getElementById('registerPanel');
const loginPanel = document.getElementById('loginPanel');
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const statusMessage = document.getElementById('statusMessage');
const backToRegister = document.getElementById('backToRegister');
const registerPassword = document.getElementById('registerPassword');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const termsMessage = document.getElementById('termsMessage');

let volatileUser = null;

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
}

const savedTheme = safeStorageGet('formlab-theme');
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  safeStorageSet('formlab-theme', nextTheme);
});

function switchPanel(panel) {
  const showRegister = panel === 'register';
  registerPanel.hidden = !showRegister;
  loginPanel.hidden = showRegister;
  registerPanel.classList.toggle('is-active', showRegister);
  loginPanel.classList.toggle('is-active', !showRegister);
  registerTab.classList.toggle('is-active', showRegister);
  loginTab.classList.toggle('is-active', !showRegister);
  registerTab.setAttribute('aria-selected', String(showRegister));
  loginTab.setAttribute('aria-selected', String(!showRegister));
  hideStatus();

  const targetPanel = showRegister ? registerPanel : loginPanel;
  const firstInput = targetPanel.querySelector('input, select');
  if (firstInput) requestAnimationFrame(() => firstInput.focus());
}

registerTab.addEventListener('click', () => switchPanel('register'));
loginTab.addEventListener('click', () => switchPanel('login'));
backToRegister.addEventListener('click', () => switchPanel('register'));

function fieldWrapper(input) {
  return input.closest('[data-field-wrapper]');
}

function setFieldState(input, valid, message = '') {
  const wrapper = fieldWrapper(input);
  if (!wrapper) return valid;
  const messageEl = wrapper.querySelector('.field-message');
  wrapper.classList.toggle('is-invalid', !valid);
  wrapper.classList.toggle('is-valid', valid && input.value.trim() !== '');
  if (messageEl) messageEl.textContent = message;
  input.setAttribute('aria-invalid', String(!valid));
  return valid;
}

function normalizedPhone(value) {
  return value.replace(/[\s()+-]/g, '');
}

function validateField(input) {
  const value = input.value.trim();

  if (input.required && !value) {
    return setFieldState(input, false, 'Este campo es obligatorio.');
  }

  if (!value && !input.required) {
    return setFieldState(input, true, '');
  }

  switch (input.name) {
    case 'fullName': {
      const validName = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{3,70}$/.test(value) && value.split(/\s+/).length >= 2;
      return setFieldState(input, validName, validName ? 'Nombre válido.' : 'Escribe al menos nombre y apellido, solo con letras.');
    }
    case 'registerEmail':
    case 'loginEmail': {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      return setFieldState(input, validEmail, validEmail ? 'Correo válido.' : 'Ingresa un correo con formato válido.');
    }
    case 'age': {
      const age = Number(value);
      const validAge = Number.isInteger(age) && age >= 18 && age <= 99;
      return setFieldState(input, validAge, validAge ? 'Edad válida.' : 'La edad debe estar entre 18 y 99 años.');
    }
    case 'phone': {
      const phone = normalizedPhone(value);
      const validPhone = /^\d{7,15}$/.test(phone);
      return setFieldState(input, validPhone, validPhone ? 'Teléfono válido.' : 'Usa entre 7 y 15 dígitos.');
    }
    case 'profile': {
      const validProfile = ['estudiante', 'docente', 'invitado'].includes(value);
      return setFieldState(input, validProfile, validProfile ? 'Perfil seleccionado.' : 'Selecciona un perfil.');
    }
    case 'registerPassword': {
      const strongEnough = passwordScore(value) >= 3 && value.length >= 8;
      return setFieldState(input, strongEnough, strongEnough ? 'Contraseña válida.' : 'Usa 8+ caracteres, mayúscula, minúscula y número.');
    }
    case 'confirmPassword': {
      const matches = value.length >= 8 && value === registerPassword.value;
      return setFieldState(input, matches, matches ? 'Las contraseñas coinciden.' : 'Las contraseñas no coinciden.');
    }
    case 'loginPassword': {
      const validPassword = value.length >= 8;
      return setFieldState(input, validPassword, validPassword ? 'Contraseña lista para validar.' : 'La contraseña debe tener mínimo 8 caracteres.');
    }
    default:
      return setFieldState(input, input.checkValidity(), input.checkValidity() ? '' : 'Revisa este campo.');
  }
}

function passwordScore(value) {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[a-z]/.test(value)) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/\d/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  return score;
}

function updatePasswordMeter() {
  const meter = registerPassword.closest('[data-field-wrapper]')?.querySelector('.password-meter span');
  if (!meter) return;
  const score = passwordScore(registerPassword.value);
  const width = Math.min(100, score * 20);
  meter.style.width = `${width}%`;
  meter.style.background = score <= 2 ? 'var(--danger)' : score === 3 ? '#d78b1f' : 'var(--success)';
}

function validateTerms() {
  const valid = terms.checked;
  termsMessage.textContent = valid ? '' : 'Debes aceptar los términos para continuar.';
  termsMessage.style.color = valid ? '' : 'var(--danger)';
  terms.setAttribute('aria-invalid', String(!valid));
  return valid;
}

function attachValidation(form) {
  const controls = form.querySelectorAll('input:not([type="checkbox"]), select');
  controls.forEach((input) => {
    input.addEventListener('input', () => {
      validateField(input);
      if (input === registerPassword) {
        updatePasswordMeter();
        if (confirmPassword.value) validateField(confirmPassword);
      }
    });
    input.addEventListener('blur', () => validateField(input));
    if (input.tagName === 'SELECT') input.addEventListener('change', () => validateField(input));
  });
}

attachValidation(registerForm);
attachValidation(loginForm);
terms.addEventListener('change', validateTerms);

for (const button of document.querySelectorAll('[data-toggle-password]')) {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.togglePassword);
    if (!input) return;
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    button.textContent = showing ? 'Ver' : 'Ocultar';
    button.setAttribute('aria-label', showing ? 'Mostrar contraseña' : 'Ocultar contraseña');
  });
}

function showStatus(message, type = 'success') {
  statusMessage.hidden = false;
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`;
}

function hideStatus() {
  statusMessage.hidden = true;
  statusMessage.textContent = '';
  statusMessage.className = 'status-message';
}

function validateForm(form) {
  const controls = [...form.querySelectorAll('input:not([type="checkbox"]), select')];
  const controlsValid = controls.map(validateField).every(Boolean);
  const termsValid = form === registerForm ? validateTerms() : true;
  return controlsValid && termsValid;
}

async function hashPassword(value) {
  if (window.crypto?.subtle && window.TextEncoder) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }

  let fallback = 0;
  for (let i = 0; i < value.length; i += 1) {
    fallback = (fallback * 31 + value.charCodeAt(i)) >>> 0;
  }
  return `fallback-${fallback.toString(16)}`;
}

function saveDemoUser(user) {
  volatileUser = user;
  safeStorageSet('formlab-user', JSON.stringify(user));
}

function loadDemoUser() {
  if (volatileUser) return volatileUser;
  const stored = safeStorageGet('formlab-user');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  hideStatus();

  if (!validateForm(registerForm)) {
    showStatus('Revisa los campos marcados antes de crear la cuenta.', 'error');
    return;
  }

  const user = {
    name: document.getElementById('fullName').value.trim(),
    email: document.getElementById('registerEmail').value.trim().toLowerCase(),
    age: Number(document.getElementById('age').value),
    phone: document.getElementById('phone').value.trim(),
    profile: document.getElementById('profile').value,
    passwordHash: await hashPassword(registerPassword.value)
  };

  saveDemoUser(user);
  showStatus(`Cuenta creada correctamente para ${user.name}. Ahora puedes iniciar sesión.`, 'success');

  const loginEmail = document.getElementById('loginEmail');
  loginEmail.value = user.email;

  setTimeout(() => switchPanel('login'), 900);
});

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  hideStatus();

  if (!validateForm(loginForm)) {
    showStatus('Completa correctamente el correo y la contraseña.', 'error');
    return;
  }

  const storedUser = loadDemoUser();
  if (!storedUser) {
    showStatus('Primero registra una cuenta en este navegador para probar el inicio de sesión.', 'error');
    return;
  }

  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const passwordHash = await hashPassword(document.getElementById('loginPassword').value);
  const matches = email === storedUser.email && passwordHash === storedUser.passwordHash;

  if (!matches) {
    showStatus('El correo o la contraseña no coinciden con la cuenta registrada.', 'error');
    return;
  }

  const remember = document.getElementById('rememberEmail').checked;
  if (remember) safeStorageSet('formlab-remembered-email', email);
  else safeStorageSet('formlab-remembered-email', '');

  showStatus(`Inicio de sesión correcto. Bienvenido/a, ${storedUser.name}.`, 'success');
});

const rememberedEmail = safeStorageGet('formlab-remembered-email');
if (rememberedEmail) {
  document.getElementById('loginEmail').value = rememberedEmail;
  document.getElementById('rememberEmail').checked = true;
}
