

var running = false

var startBtn = document.querySelector('#startBtn')
var resetBtn = document.querySelector('#resetBtn')
var pauseBtn = document.querySelector('#pauseBtn')
var seconds = document.getElementById('time');

var startTimer = function() {

}
var start = function() {

  var increment = 1000
  running = true
  timerID = setInterval(function() {
    updateTime(increment)
  }, 1000)

}

var pause = function() {
  if (running) {
    running = false
  } else {
    running = true
  }
}

var reset = function() {
  clearInterval(timerID)
  document.getElementById('time').textContent = 0
}

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)
pauseBtn.addEventListener('click', pause)

var updateTime = function(increment) {
  if (running) {
    var number = parseInt(seconds.textContent)
    seconds.textContent = number + increment/1000
    if (seconds.textContent === '3') {
      seconds.style.backgroundColor = "pink"
    }
  }
}
