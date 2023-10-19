const btn = document.getElementById('gioca');
const resetBtn = document.getElementById('resetButton')
const difficultySelect = document.getElementById('difficultySelect');

btn.addEventListener('click', function(){
    //numeri quadratini generati    
    const difficulty = parseInt(difficultySelect.value);
    let numSquare;

    if (difficulty === 1) {
        numSquare = 100;
    } else if (difficulty === 2) {
        numSquare = 81;
    } else if (difficulty === 3) {
        numSquare = 49;
    }
  //griglia gioco
  const playground = document.getElementById('playground');
  playground.innerHTML = ''
  //ciclo per stampare quadratini
  for (let i=0; i < numSquare; i++) {
    let square = drawSquare(i,numSquare);

    playground.append(square);
  }

})

resetBtn.addEventListener('click', function() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        playground.removeChild(square);
    });
});

function drawSquare(squareIndex, numSquare){
    const squareWidth = Math.sqrt(numSquare);

    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height =  square.style.width;  
    square.addEventListener('click', function(){
        square.innerHTML = squareIndex + 1;
        square.classList.add('active')
        square.style.color = 'white';
    })
    return square;

}
