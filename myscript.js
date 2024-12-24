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
function go_spec() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-right');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'spec_graphic.html';
    }, 1000); // Увеличенная задержка для соответствия длительности анимации (1 секунда)
}
function go_compoz() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-right');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'composition.html';
    }, 1000); // Увеличенная задержка для соответствия длительности анимации (1 секунда)
}
function go_color_science() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-right');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'color_science.html';
    }, 1000); // Увеличенная задержка для соответствия длительности анимации (1 секунда)
}
function go_3D() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-left');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = '3D_modeling.html';
    }, 1000); // Задержка соответствует длительности анимации (1 секунда)
}
function go_typo() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-left');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'typography.html';
    }, 1000); // Задержка соответствует длительности анимации (1 секунда)
}
function go_hb() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-left');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'hobby.html';
    }, 1000); // Задержка соответствует длительности анимации (1 секунда)
}




