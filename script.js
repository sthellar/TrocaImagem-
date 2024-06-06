document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('troca');
    let image = document.querySelector('img');
    let imageIndex = 0;
    let images = ['desenho0.jpg', 'desenho1.jpg', 'desenho2.jpg', 'desenho3.jpg', 'desenho4.jpg', 'desenho5.jpg', 'desenho6.jpg'];

    button.addEventListener('click', function() {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 2) % images.length;
    });
});