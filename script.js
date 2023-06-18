const enrollButtons = document.querySelectorAll('.enroll-btn');

enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Enrollment Successful!');
    });
});