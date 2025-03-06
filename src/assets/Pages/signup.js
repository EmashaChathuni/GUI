document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.getElementById('signupButton');
    if (signupButton) {
        signupButton.addEventListener('click', function() {
            window.location.href = 'tourguides.html'; // Adjust the path as needed
        });
    }
});
