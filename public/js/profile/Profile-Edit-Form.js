$(document).ready(function () {
  /** Ubah foto waktu ganti foto */
  function readURL(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        $('.avatar-bg').css({
          background: 'url(' + e.target.result + ')',
          'background-size': 'cover',
          'background-position': '50% 50%',
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  $('input.form-control[name=avatarFile]').change(function () {
    readURL(this);
  });

  // // ------------ Update ------------
  //
  // const formUpdate = $('form.form-update');
  // const nameUpdate = $('input#update-name');
  // const phoneUpdate = $('input#update-phone');
  // const addressUpdate = $('input#update-address');
  // const emailUpdate = $('input#update-email');
  // const avatarUpdate = $('input#update-avatar');
  //
  // formUpdate.on("submit", function (event) {
  //     event.preventDefault();
  //
  //     const userData = {
  //         user_name: nameUpdate.val().trim(),
  //         user_phone: phoneUpdate.val().trim(),
  //         user_address: addressUpdate.val().trim(),
  //         user_email: emailUpdate.val().trim()
  //     };
  //
  //     updateUser(userData.user_name, userData.user_phone, userData.user_address, userData.user_email);
  //     nameUpdate.val('');
  //     phoneUpdate.val('');
  //     addressUpdate.val('');
  //     emailUpdate.val('');
  // });
  //
  // // Lakukan post ke update route. Jika sukses, kita redirect ke profile
  // function updateUser(user_name, user_phone, user_address, user_email) {
  //     $.post('/profile/settings/upload-avatar',{
  //       avatarFile:avatarUpdate
  //     }, function (data) {
  //         $.post("/api/update", {
  //             user_name: user_name,
  //             user_phone: user_phone,
  //             user_address: user_address,
  //             user_email: user_email
  //         }).then(function (data) {
  //             window.location.replace(data);
  //         }).catch(function (err) {
  //             console.log(err);
  //         });
  //     });
  // }
});

// (function () {
//     function readURL(input) {
//
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();
//
//             reader.onload = function (e) {
//                 $('.avatar-bg').css({
//                     'background': 'url(' + e.target.result + ')',
//                     'background-size': 'cover',
//                     'background-position': '50% 50%'
//                 });
//             };
//
//             reader.readAsDataURL(input.files[0]);
//         }
//     }
//
//     function toggleAlert(clasz, display) {
//         $(".alert")
//             .removeClass("display")
//             .removeClass("alert-info")
//             .removeClass("alert-success")
//             .removeClass("alert-danger")
//             .addClass(clasz);
//         if (display) {
//             $(".alert").addClass("display")
//         }
//         if (clasz === "alert-success") {
//             $(".alert > span").text('Profile saved');
//         } else if (clasz === "alert-danger") {
//             $(".alert > span").text('Profile reset');
//         }
//     }
//
//     $("input.form-control[name=avatar-file]").change(function () {
//         readURL(this);
//     });
//
//     $('#profile').delegate('form', 'submit', function (e) {
//         var inst = this;
//         var formData = new FormData($(this)[0]);
//
//         $(inst).find("button[type = submit]").addClass("loading").prop("disabled", true);
//         toggleAlert("alert-success", true);
//
//         setTimeout(function () {
//             $(inst).find("button[type = submit]").removeClass("loading").prop("disabled", false);
//             toggleAlert("alert-success");
//         }, 1000);
//
//         return false;
//     });
//
//     $('#profile').delegate('form', 'reset', function (e) {
//         var inst = this;
//         var formData = new FormData($(this)[0]);
//
//         $(inst).find("button[type = reset]").addClass("loading").prop("disabled", true);
//         toggleAlert("alert-danger", true);
//
//         setTimeout(function () {
//             $(inst).find("button[type = reset]").removeClass("loading").prop("disabled", false);
//             toggleAlert("alert-danger");
//         }, 1000);
//
//         return false;
//     });
//
//
// })()
