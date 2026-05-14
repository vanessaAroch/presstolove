const startBtn = document.getElementById('startBtn');
const music = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
  music.play();

  document.querySelector('.level').scrollIntoView({
    behavior: 'smooth'
  });
});

const countdown = document.getElementById('countdown');

const targetDate = new Date('December 31, 2026 00:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);