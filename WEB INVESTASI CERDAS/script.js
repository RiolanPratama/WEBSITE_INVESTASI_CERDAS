function validateLogin(event) {
    event.preventDefault();
    
    window.location.href = 'index.html';
     alert('Selamat! Anda berhasil login.');
}

document.querySelector('.back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

