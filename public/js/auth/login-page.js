$(document).ready(() => {
  const loginForm = $('form.auth');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  loginForm.on('submit', async (event) => {
    event.preventDefault();

    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };
    if (!userData.email || !userData.password) return;

    await loginUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
  });

  /** Post ke route '/api/login', jika sukses redirect ke homepage */
  function loginUser(email, password) {
    return $.post('/login/login-now', {
      user_email: email,
      user_password: password,
    })
      .then((data) => window.location.replace(data))
      .catch((err) => alert(err.message ?? 'Login failed'));
  }
});
