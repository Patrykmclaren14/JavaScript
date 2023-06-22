const container = document.querySelector('.container')

const btnColor = container.querySelector('.btn')

btnColor.addEventListener('click', function(){
    container.classList.toggle('green')
})

const style = document.querySelector('body')

const btnFont = style.querySelector('.btn2')

btnFont.addEventListener('click', function(){
    console.log("123");
    style.classList.toggle('font')
})

const text = document.querySelector('.text')

const btnShow = container.querySelector('.btn3')

btnShow.addEventListener('click', function() {
    console.log('123')
    text.classList.toggle('show')
})