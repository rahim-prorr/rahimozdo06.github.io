// Плавная прокрутка к элементам
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Показываем кнопку "Наверх"
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top-button").style.display = "block";
    } else {
        document.getElementById("back-to-top-button").style.display = "none";
    }
};

// Скрипт для обработки нажатия на кнопку "Наверх"
const backToTopButton = document.getElementById("back-to-top-button");
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Закрытие модальных окон
function closeModal(id) {
    document.querySelector(id).style.display = "none";
}