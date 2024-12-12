function changeImage() {
    const image = document.getElementById('girl-gif');
    const button = document.getElementById('secret_Button');
    image.src = 'images/секретная_анимация.gif';
    button.style.display = 'none';
    const finalImage = new Image(); 
    finalImage.src = 'images/black.png'; 
    finalImage.onload = () => {
        setTimeout(() => {
            image.src = finalImage.src; 
        }, 14000); 
    };
}
document.getElementById('scroll').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('scroll_2').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('scroll_3').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('about_me_scroll').addEventListener('click', function() {
    const section = document.getElementById('about-me');
    section.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('works_scroll').addEventListener('click', function() {
    const section = document.getElementById('works');
    section.scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contacts_scroll').addEventListener('click', function() {
    const section = document.getElementById('contacts');
    section.scrollIntoView({ behavior: 'smooth' });
});