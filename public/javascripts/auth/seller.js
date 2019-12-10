$(document).ready(function() {
    const signUpForm = $('form.signup');
    const emailInput = $('input#email-input');
    const phoneInput = $('input#phone-input');
    const addressInput = $('input#address-input');
    const passwordInput = $('input#password-input');

    // Ketika tombol signup ditekan, validasi data
    signUpForm.on("submit", function(event) {
        event.preventDefault();

        const userData = {
            user_email: emailInput.val().trim(),
            user_phone: phoneInput.val().trim(),
            user_address: addressInput.val().trim(),
            user_password: passwordInput.val().trim()
        };

        // if (!userData.user_email || !userData.user_phone || !userData.user_address || !userData.user_password) {
        //     return;
        // } //lewat html ae lur

        // Daftarkan user
        signUpUser(userData.user_email, userData.user_phone, userData.user_address, userData.user_password);
        emailInput.val('');
        phoneInput.val('');
        addressInput.val('');
        passwordInput.val('');
    });

    // Lakukan post ke signup route. Jika sukses, kita redirect ke homepage member
    function signUpUser(user_email, user_phone, user_address, user_password) {
        $.post("/api/signup", {
            user_email: user_email,
            user_phone: user_phone,
            user_address: user_address,
            user_password: user_password,
            user_role: 1    // 1 untuk seller
        }).then(function(data) {
            window.location.replace(data);
        }).catch(function (err) {
            console.log(err);
        });
    }
});