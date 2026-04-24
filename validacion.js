document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.querySelector('input[type="email"]').value;
            const pass = document.querySelector('input[type="password"]').value;
            if (!email || !pass) {
                alert('Por favor complete todos los campos');
                return;
            }
            if (pass.length < 6) {
                alert('La contrasena debe tener minimo 6 caracteres');
                return;
            }
            alert('Login exitoso!');
        });
    }
});
