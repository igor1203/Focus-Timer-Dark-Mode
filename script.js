const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const body = document.querySelector('body')
const dark = document.querySelector('.dark-mode')
const light = document.querySelector('.light-mode')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.increase-time')
const buttonDecreaseTime = document.querySelector('.decrease-time')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFirePlace = document.querySelector('.fireplace')

const soundPressForest  = new Audio('./audio/Forest.wav')
const soundPressRain  = new Audio('./audio/Rain.wav')
const soundPressCoffee  = new Audio('./audio/Coffee.wav')
const soundPressFire  = new Audio('./audio/Fireplace.wav')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

//dark-mode função
light.addEventListener('click', function(){
  light.classList.add('hide')
  dark.classList.remove('hide')

  body.classList.add('dark') //
  /* 
  foi adicionado o dark em todosos elementos que necessitava mudar 
  com a função do dark-mode, criados no style.css*/
})
dark.addEventListener('click', function(){
  dark.classList.add('hide')
  light.classList.remove('hide')

  body.classList.remove('dark')

})

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      return
    }

    if( seconds <= 0 ) {
      seconds = 2
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1)) 
    
    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function()  {
  countdown()
})

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeOut)
  resetTimer()
})

buttonIncreaseTime.addEventListener('click', function(){
  minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
})

buttonDecreaseTime.addEventListener('click', function(){
  minutesDisplay.textContent  = Number(minutesDisplay.textContent)  - 5
})

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

buttonForest.addEventListener('click', function(){
  soundPressForest.play()
  soundPressForest.loop = true
  soundPressRain.pause()
  soundPressCoffee.pause()
  soundPressFire.pause()
})

buttonRain.addEventListener('click', function(){
  soundPressForest.pause()
  soundPressRain.loop = true
  soundPressRain.play()
  soundPressCoffee.pause()
  soundPressFire.pause()
})

buttonCoffee.addEventListener('click', function(){
  soundPressCoffee.play()
  soundPressCoffee.loop = true
  soundPressRain.pause()
  soundPressForest.pause()
  soundPressFire.pause()
})

buttonFirePlace.addEventListener('click', function(){
  soundPressForest.pause()
  soundPressFire.loop = true
  soundPressRain.pause()
  soundPressCoffee.pause()
  soundPressFire.play()
})



