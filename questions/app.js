/* const btns = document.querySelectorAll('.question-btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget.parentElement.parentElement);
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    })
}) */

// using selector inside the element

const questions = document.querySelectorAll(".question")

questions.forEach(function(question) {

    const btn = question.querySelector(".question-btn");
    console.log(btn)
    btn.addEventListener('click', function() {

        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove('show-text')
            }
        })

        question.classList.toggle('show-text')
    })
})

