document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageElement = document.getElementById('message');
        if (data.success) {
            messageElement.textContent = 'Login successful. Redirecting...';
            setTimeout(() => {
                window.location.href = 'dashboard.php'; // Ganti dengan halaman dashboard yang sesuai
            }, 1500);
        } else {
            messageElement.textContent = 'Invalid credentials. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
