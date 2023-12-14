function sendOTP() {
    const email = document.getElementById("email");
    const otpverify = document.getElementsByClassName("otpverify")[0];

    let otp_val = Math.floor(Math.random() * 10000);
    let emailbody = `<h2> Your OTP is </h2> $value${otp_val}`;
    Email.send({
        SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To: email.value,
        From: "priya.shruti111@gmail.com",
        Subject: "Your otp for email verification is",
        Body: emailbody,
    }).then(
        message => {
            if (message == "OK") {
                alert("OTP sent to your email" + email.value)

                otpverify.style.display = "block";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');

                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("Email address verified!!");
                    }
                    else {
                        alert("Invalid OTP");
                    }
                })
            }
        }
    );
}