document.querySelector('.register button').addEventListener('click', function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('.signin').value.trim();
    const passwordInput = document.querySelector('.password').value;

    if (!emailInput) {
        return alert('Please enter a valid email');
    }

    if (passwordInput !== '123456789') {
        return alert('Please enter a valid password');
    }
    alert('Sign-up successful!');
});
