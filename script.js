document.addEventListener('mousemove', function(e) {
    const cube = document.querySelector('.cube');
    const xRotation = e.clientY / window.innerHeight * 360;
    const yRotation = e.clientX / window.innerWidth * 360;
            
     cube.style.animation = 'none';
     cube.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

document.addEventListener('mouseleave', function() {
     const cube = document.querySelector('.cube');
     cube.style.animation = 'rotate 20s infinite linear';
     cube.style.transform = '';
});
