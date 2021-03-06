'use strict';

// const score0 = document.querySelector('#score--0').textContent;
// console.log(score0);
const player0El = document.querySelector('.player--0');
console.log(player0El);
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
console.log(score0El);
const score1El = document.querySelector('#score--1');
console.log(score1El);
const current0El = document.getElementById('current--0');
console.log(current0El);
const current1El = document.getElementById('current--1');
console.log(current1El);
const diceEl = document.querySelector('.dice');
console.log(diceEl);
const btnNew = document.querySelector('.btn--new');
console.log(btnNew);
const btnRoll = document.querySelector('.btn--roll');
console.log(btnRoll);
const btnHold = document.querySelector('.btn--hold');
console.log(btnHold);

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log('active', activePlayer);
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {
    if (playing) {
        const dice = Math.floor(Math.random()* 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        if (dice !== 1) {
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
            //current0El.textContent = currentScore;
            //console.log(currentScore);
        } else {
            switchPlayer();
        }
    }
   
});

btnHold.addEventListener('click', function() {

    if (playing) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
        console.log(scores);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            
    
        } else {
            switchPlayer();
        }
    }

    
});
