'use strict'

var ballSize = 100

function onBallClick() {
   var ball = document.querySelector('.ball')
   var randomIncrement = Math.floor(Math.random() * 40) + 20
   var currentWidth = ball.offsetWidth
   var currentHeight = ball.offsetHeight

   var newDiameter = currentWidth + randomIncrement
   var newDiameter2 = currentHeight + randomIncrement

   ballSize = newDiameter
   
   if (newDiameter > 400) {
      ballSize = 100
      newDiameter = 100
      newDiameter2 = 100
   }
   ball.innerText = newDiameter
   ball.style.width = newDiameter + 'px'
   ball.style.height = newDiameter2 + 'px'
}