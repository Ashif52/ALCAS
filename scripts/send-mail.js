document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const spinner = document.getElementById("loading-spinner");
    const submitBtn = document.querySelector(".contact-form-submit-button");
    const messageSuccess = document.querySelector(".contact-form-success-message");
    const messageError = document.querySelector(".contact-form-error-message");
    messageError.disabled = true;
    messageSuccess.disabled = true;
    spinner.style.display = "block";
    submitBtn.disabled = true;
    emailjs.send("service_0x3fyog", "template_wtn26kn", {
        user_name: this.user_name.value,
        message: this.message.value,
        user_email: this.Email.value
    }).then(function(response) {
        console.log("11111")
        spinner.style.display = "none";
        submitBtn.disabled = false;
        messageSuccess.style.display = "block"
    }, function(error) {
        console.log("222222")
        spinner.style.display = "none";
        submitBtn.disabled = false;
        messageError.style.display = "block"
    });
  });


