//assigning needed variables
const darkBtn = document.querySelector('.btn1')
const blueBtn = document.querySelector('.btn2')
const coralBtn = document.querySelector('.btn3')
const darkredBtn = document.querySelector('.btn4')
const randBtn = document.querySelector('.rand')
const body = document.querySelector('body')
const heading = document.querySelector('h1')

//function to select a color randomly
function pickRandomColor(){
  const colors = ['red', 'darkred', 'green', 'blue', '#333', 'coral', 'purple', 'goldenrod']
  const rand = Math.floor(Math.random()*colors.length)
  const randColor = colors[rand]
  return randColor
}

console.log(pickRandomColor())

//event listeners for the bottons

darkBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#333'
})
blueBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'blue'
})
coralBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'coral'
})
darkredBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'darkred'
})
randBtn.addEventListener('click', () => {
  body.style.backgroundColor = pickRandomColor()
  heading.style.color = pickRandomColor()
})