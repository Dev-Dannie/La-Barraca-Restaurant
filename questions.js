const questionBtn = document.querySelectorAll('.question-btn')
let previousButtonClicked = null

questionBtn.forEach((question) => {
    question.addEventListener('click', (e) => {
       let questionText = e.currentTarget.parentElement.parentElement
       questionText.classList.toggle('show-text')
    })
});