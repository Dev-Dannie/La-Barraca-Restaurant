const plusBtn = document.querySelectorAll('.plus-btn')
const closeBtn = document.querySelectorAll('.close-btn')
const questionBtn = document.querySelectorAll('.question-btn')

questionBtn.forEach((question) => {
    question.addEventListener('click', (e) => {
       let questionText = e.currentTarget.parentElement.parentElement
       questionText.classList.toggle('show-text')
    })
});