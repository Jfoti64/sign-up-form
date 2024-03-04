document.addEventListener('DOMContentLoaded', function() {
    const inputPass = document.getElementById('password');
    const confirmPass = document.getElementById('confirmPass');
    const form = document.getElementById('signUpForm');
    const passError = document.getElementById('passError');

    form.addEventListener('submit', function(event) {
        // Check if form is valid
        if (inputPass.value != confirmPass.value) {
            // If form is invalid, prevent default submission
            event.preventDefault();
            // Optionally, display an error message or highlight invalid fields
            passError.style.display = 'block';
            passError.innerHTML = 'Passwords do not match';
        } else {
            // If form is valid, allow submission
            alert('Form is valid');
        }
    });    
});