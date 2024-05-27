document.addEventListener('DOMContentLoaded', function () {
    let background = document.getElementById('background');
    let typingText = document.getElementById('typing-text');
    let navbar = document.getElementById('navbar');
    let logo = document.querySelector('.logo');
    let menuItem1 = document.getElementById('menu-item-1');
    let content = document.getElementById('content');

    // Функция для печатания текста
    function typeText(element, text, interval) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, interval);
            }
        }
        type();
    }

    // Появление фона
    setTimeout(() => {
        background.classList.remove('hidden');
    }, 500);

    // Появление текста с анимацией печатания
    setTimeout(() => {
        typingText.classList.remove('hidden');
        typingText.textContent = ''; // Очистить текст перед началом анимации
        typeText(typingText, 'boooooooo\nooooooooooooooooo', 100); //  \n - перенос
    }, 1000);

    // Появление навигации
    setTimeout(() => {
        navbar.classList.remove('hidden');
    }, 4000);

    // Исчезновение текста, увеличение лого и добавление стиля меню
    setTimeout(() => {
        typingText.classList.add('hidden');
        logo.style.transform = 'scale(1.3)';
        menuItem1.classList.add('bold');
        content.classList.remove('hidden');
    }, 7000);
});

