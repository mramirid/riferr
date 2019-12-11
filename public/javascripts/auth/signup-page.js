$(document).ready(function () {
    const signUpForm = $('form.signup');
    const nameInput = $('input#name-input');
    const emailInput = $('input#email-input');
    const phoneInput = $('input#phone-input');
    const addressInput = $('input#address-input');
    const passwordInput = $('input#password-input');
    const getRole = $('input#get_role');

    // Ketika tombol signup ditekan, validasi data
    signUpForm.on("submit", function (event) {
        event.preventDefault();

        const userData = {
            user_name: nameInput.val().trim(),
            user_email: emailInput.val().trim(),
            user_phone: phoneInput.val().trim(),
            user_address: addressInput.val().trim(),
            user_password: passwordInput.val().trim(),
            user_role: getRole.val().trim()
        };

        // if (!userData.user_email || !userData.user_phone || !userData.user_address || !userData.user_password) {
        //     return;
        // } //lewat html ae lur

        // Daftarkan user
        signUpUser(userData.user_name, userData.user_email, userData.user_phone,
                   userData.user_address, userData.user_password, userData.user_role);
        nameInput.val('');
        emailInput.val('');
        phoneInput.val('');
        addressInput.val('');
        passwordInput.val('');
    });

    // Lakukan post ke signup route. Jika sukses, kita redirect ke homepage member
    function signUpUser(user_name, user_email, user_phone, user_address, user_password, user_role) {
        $.post("/signup/signup-now", {
            user_name: user_name,
            user_email: user_email,
            user_phone: user_phone,
            user_address: user_address,
            user_password: user_password,
            user_role: user_role
        }).then(function (data) {
            window.location.replace(data);
        }).catch(function (err) {
            console.log(err);
        });
    }
});