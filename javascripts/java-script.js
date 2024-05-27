document.addEventListener('DOMContentLoaded', function () {
    const background = document.getElementById('background');
    const typingText = document.getElementById('typing-text');
    const navbar = document.getElementById('navbar');
    const logo = document.querySelector('.logo');
    const menuItem1 = document.getElementById('menu-item-1');
    const content = document.getElementById('content');

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

