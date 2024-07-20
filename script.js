const startButton = document.getElementById('startButton');
const gameArea = document.getElementById('gameArea');
const balloonContainer = document.getElementById('balloonContainer');
const timerElement = document.getElementById('timer');
const result = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

let score = 0;
let timeLeft = 15;
let gameInterval;

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

function startGame() {
  startButton.classList.add('hidden');
  gameArea.classList.remove('hidden');
  result.classList.add('hidden');
  score = 0;
  timeLeft = 15;
  updateTimer();
  generateBalloons();
  gameInterval = setInterval(updateGame, 1000);
}

function restartGame() {
  result.classList.add('hidden');
  startButton.classList.remove('hidden');
}

function updateGame() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimer();
  } else {
    endGame();
  }
}

function updateTimer() {
  timerElement.textContent = timeLeft;
}

function endGame() {
  clearInterval(gameInterval);
  gameArea.classList.add('hidden');
  result.classList.remove('hidden');
  scoreElement.textContent = score;
}

function generateBalloons() {
  balloonContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    createBalloon();
  }
}

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.backgroundImage = "url('https://mediacdn.yirmidort.tv/Documents/yirmidorthaber/images/2023/12/14/israilin-yasa-disi-yahudi-626_2-41.jpg')";
  balloon.style.left = `${Math.random() * 90}vw`;
  balloon.style.top = `${Math.random() * 80}vh`;
  balloon.addEventListener('click', popBalloon);
  balloonContainer.appendChild(balloon);
}

function popBalloon(event) {
  score++;
  balloonContainer.removeChild(event.target);
  createBalloon();
}
