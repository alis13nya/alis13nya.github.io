const images = document.querySelectorAll('.slider .slider-line img')
const sliderLine= document.querySelector('.slider-line');
let count = 0;
let width;
function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item =>{
        item.style.width = width +'px';
        item.style.height = 'auto';
    });
    rollSlider();
    
}
window.addEventListener('resize',init)

init();




document.querySelector('.next').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length-1;
    }
    rollSlider();
    
})

document.querySelector('.before').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
    
})
document.querySelector('.next2').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length-1;
    }
    rollSlider();
    
})

document.querySelector('.before2').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
    
})

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+ count * width + 'px)';
}

const images2 = document.querySelectorAll('.slider2 .slider-line2 img'); 
const sliderLine2 = document.querySelector('.slider2 .slider-line2'); 
let count2 = 0;
let width2;

function init2() {
    console.log('resize');
    width2 = document.querySelector('.slider2').offsetWidth; 
    sliderLine2.style.width = width2 * images2.length + 'px'; 
    images2.forEach(item => {
        item.style.width = width2 + 'px';
        item.style.height = 'auto';
    });
    rollSlider2(); 
}

window.addEventListener('resize', init2);

init2();

document.querySelector('.next2').addEventListener('click', function() {
    count2--;
    if (count2 < 0) {
        count2 = images2.length - 1;
    }
    rollSlider2();
});

document.querySelector('.before2').addEventListener('click', function() {
    count2++;
    if (count2 >= images2.length) {
        count2 = 0;
    }
    rollSlider2();
});

function rollSlider2() {
    sliderLine2.style.transform = 'translate(-' + count2 * width2 + 'px)'; 
}
function go_main_works() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-left');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'index.html#works';
    }, 1000); // Задержка соответствует длительности анимации (1 секунда)
}
function go_main_works_right() {
    // Получаем тело документа
    const body = document.body;
    
    // Добавляем класс анимации
    body.classList.add('page-slide-right');
    
    // Устанавливаем таймер для перехода на новую страницу после завершения анимации
    setTimeout(() => {
        window.location.href = 'index.html#works';
    }, 1000); // Задержка соответствует длительности анимации (1 секунда)
}