const btn = document.querySelector('button');


btn.addEventListener('click', function(){
    //numeri quadratini generati    
    const numSquare = 100;
  //griglia gioco
  const playground = document.getElementById('playground');
  playground.innerHTML = ''
  //ciclo per stampare quadratini
  for (let i=0; i < numSquare; i++) {
    let square = drawSquare(i,numSquare);

    playground.append(square);
  }

})


function drawSquare(squareIndex, numSquare){
    const squareWidth = Math.sqrt(numSquare);

    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height =  square.style.width;  
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active')
        square.style.color = 'white';
    })
    return square;

}