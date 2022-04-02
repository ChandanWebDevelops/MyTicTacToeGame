let turn = "X";
let gameOver = false;
console.log("connection ")

// Function to change the turn
const changeTurn = ()=>{
  return turn === "X"?"0":"X"
}

// Function to check for a win
const checkWin = () =>{
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2, 0, 47, 0],
    [3, 4, 5, 0, 151, 0],
    [6, 7, 8, 0, 257, 0],
    [0, 3, 6, -94, 160, 90],
    [1, 4, 7, 0, 160, 90],
    [2, 5, 8, 94, 160, 90],
    [0, 4, 8, 0, 151, 48],
    [2, 4, 6, 0, 151, 132]
  ]
  wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText != '')){
      document.getElementsByTagName("h1")[0].innerText  = boxtext[e[0]].innerText + " has Won";
      document.getElementsByTagName("h1")[0].style = `
				border: 2px solid #068106;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 10px;
				height: 50px;
				border-radius: 4px;
				background: #9aed8b;
				color: #055405;`;
      document.getElementsByClassName("info")[0].innerText = "Game Over";
	/*
      document.querySelector(".line").style.transform = `translate(${e[3]}, ${e[4]}px) rotate(${e[5]}deg)`
      document.querySelector(".line").style.display = "block";
      */
    	gameOver = true;
    }
  })
}

// Main Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext = element.querySelector('.boxtext');
	element.addEventListener('click', ()=>{
    if(gameOver == false){
    	if(boxtext.innerText === ''){
      	boxtext.innerText = turn;
      	turn =changeTurn();
      	checkWin();
      	if (gameOver == false){
      		document.getElementsByClassName("info")[0].innerText = "Turn for " + turn   
      	}
    	}  
    }
    
  })
})

// Reset Fucntion
reset.addEventListener("click", ()=>{
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element =>{
    element.innerText = "";
  })
  turn = "X";
//   document.querySelector(".line").style.display = "none";
  document.getElementsByTagName("h1")[0].innerText = "Tic Tac Toe";
  document.getElementsByTagName("h1")[0].style = `text-align: center; margin-bottom: 15px;`;
  gameOver = false
  if (gameOver == false){
      	document.getElementsByClassName("info")[0].innerText = "Turn for " + turn   
      }
})
