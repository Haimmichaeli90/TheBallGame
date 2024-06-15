'use strict'

var ballSize = 100

function onBallClick(){
   var ball = document.querySelector('.ball')
   ballSize = ballSize + 50
   ball.innerText = ballSize
   ball.style.width = ballSize + 'px'
   ball.style.height = ballSize + 'px'
   

}