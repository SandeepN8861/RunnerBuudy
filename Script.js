function signIn() {
    // Toggle display of the sign-in, registration, KYC, Confirm Password, Mobile Verification, and Verification Code containers
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.signin-container').style.display = 'block';
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.kyc-container').style.display = 'none';
    document.querySelector('.confirm-pass-container').style.display = 'none';
    document.querySelector('.mobile-verification-container').style.display = 'none';
    document.querySelector('.verification-code-container').style.display = 'none';
}

function register() {
    // Toggle display of the sign-in, registration, KYC, Confirm Password, Mobile Verification, and Verification Code containers
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.signin-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'block';
    document.querySelector('.kyc-container').style.display = 'none';
    document.querySelector('.confirm-pass-container').style.display = 'none';
    document.querySelector('.mobile-verification-container').style.display = 'none';
    document.querySelector('.verification-code-container').style.display = 'none';
}

function proceedToKYC() {
    // Toggle display of the KYC container
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.kyc-container').style.display = 'block';
    document.querySelector('.confirm-pass-container').style.display = 'none';
    document.querySelector('.mobile-verification-container').style.display = 'none';
    document.querySelector('.verification-code-container').style.display = 'none';
}

function proceedToConfirmPass() {
    // Toggle display of the Confirm Password container
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.kyc-container').style.display = 'none';
    document.querySelector('.confirm-pass-container').style.display = 'block';
    document.querySelector('.mobile-verification-container').style.display = 'none';
    document.querySelector('.verification-code-container').style.display = 'none';
}

function handleConfirmPassword(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Add your logic to handle the Confirm Password form submission
    // For example, you can transition to the Mobile Verification page
    proceedToMobileVerification();
}

function proceedToMobileVerification() {
    // Toggle display of the Mobile Verification container
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.kyc-container').style.display = 'none';
    document.querySelector('.confirm-pass-container').style.display = 'none';
    document.querySelector('.mobile-verification-container').style.display = 'block';
    document.querySelector('.verification-code-container').style.display = 'none';
}

function handleMobileVerification(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Add your logic to handle the Mobile Verification form submission
    // For example, you can transition to the Verification Code page
    proceedToVerificationCode();
}

function sendOTP() {
    // Add your logic to send OTP
    const mobileNumber = document.querySelector('.mobile-verification-container input[type="tel"]').value;
    document.getElementById('otpRecipient').textContent = mobileNumber;
    alert('OTP sent successfully!');
    // After sending OTP, proceed to the Verification Code page
    proceedToVerificationCode();
}

function proceedToVerificationCode() {
    // Toggle display of the Verification Code container
    document.querySelector('.mobile-verification-container').style.display = 'none';
    document.querySelector('.verification-code-container').style.display = 'block';
}

function handleVerificationCode(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Add your logic to handle the Verification Code form submission
    alert("Verification Code submitted successfully!");
    // You can proceed to the next step after code verification
}

function changeNumber() {
    // Toggle display of the Mobile Verification container
    document.querySelector('.mobile-verification-container').style.display = 'block';
    document.querySelector('.verification-code-container').style.display = 'none';
}

function resendOTP() {
    // Add your logic to resend OTP
    alert('OTP resent successfully!');
}