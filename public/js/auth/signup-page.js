$(document).ready(() => {
  const signUpForm = $('form.auth');
  const nameInput = $('input#name-input');
  const emailInput = $('input#email-input');
  const phoneInput = $('input#phone-input');
  const addressInput = $('input#address-input');
  const passwordInput = $('input#password-input');
  const getRole = $('input#get_role');

  /** Ketika tombol signup ditekan, validasi data */
  signUpForm.on('submit', async (event) => {
    event.preventDefault();

    const userData = {
      user_name: nameInput.val().trim(),
      user_email: emailInput.val().trim(),
      user_phone: phoneInput.val().trim(),
      user_address: addressInput.val().trim(),
      user_password: passwordInput.val().trim(),
      user_role: getRole.val().trim(),
    };

    await signUpUser(
      userData.user_name,
      userData.user_email,
      userData.user_phone,
      userData.user_address,
      userData.user_password,
      userData.user_role,
    );
    nameInput.val('');
    emailInput.val('');
    phoneInput.val('');
    addressInput.val('');
    passwordInput.val('');
  });

  /** Lakukan post ke signup route. Jika sukses, kita redirect ke homepage member */
  function signUpUser(
    user_name,
    user_email,
    user_phone,
    user_address,
    user_password,
    user_role,
  ) {
    return $.post('/signup/signup-now', {
      user_name: user_name,
      user_email: user_email,
      user_phone: user_phone,
      user_address: user_address,
      user_password: user_password,
      user_role: user_role,
    })
      .then((data) => window.location.replace(data))
      .catch((err) => alert(err.message ?? 'Registration failed'));
  }
});
