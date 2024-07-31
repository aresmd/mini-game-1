'use strict';
const $ = document;
let secretnumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highscore = 0;

$.querySelector('.check').addEventListener('click', () => {
  const guess = Number($.querySelector('.guess').value);

  // zero number

  if (!guess) {
    $.querySelector('.message').textContent = '⛔️ No number!';
  }

  //player win
  else if (guess === secretnumber) {
    $.querySelector('.message').textContent = 'correct number🎉🎉';
    $.querySelector('body').style.backgroundColor = '#60b347';
    $.querySelector('.number').textContent = secretnumber;
    $.querySelector('.number').style.width = '30rem';
    $.querySelector('.number').style.borderRadius = '100%';

    if (score > highscore) {
      highscore = score;
      $.querySelector('.highscore').textContent = highscore;
    }
  }

  //higher number
  else if (guess > secretnumber) {
    if (score > 1) {
      $.querySelector('.message').textContent = 'too high ^';
      score--;
      $.querySelector('.score').textContent = score;
    } else {
      $.querySelector('.message').textContent = 'you lose';
      $.querySelector('.score').textContent = 0;
    }
  }

  // lower number
  else if (guess < secretnumber) {
    if (score > 1) {
      $.querySelector('.message').textContent = 'too lower v';
      score--;
      $.querySelector('.score').textContent = score;
    } else {
      $.querySelector('.message').textContent = 'you lose';
      $.querySelector('.score').textContent = 0;
    }
  }
});

$.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretnumber = Number(Math.trunc(Math.random() * 20) + 1);
  $.querySelector('.score').textContent = score;
  $.querySelector('.number').style.borderRadius = 0;
  $.querySelector('.number').textContent = '?';
  $.querySelector('.message').textContent = 'Start guessing...';
  $.querySelector('.guess').value = '';
  $.querySelector('body').style.backgroundColor = '#222';
  $.querySelector('.number').style.width = '15rem';
});
