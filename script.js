const cell1 = document.getElementById('11');
const cell2 = document.getElementById('12');
const cell3 = document.getElementById('13');
const cell4 = document.getElementById('21');
const cell5 = document.getElementById('22');
const cell6 = document.getElementById('23');
const cell7 = document.getElementById('31');
const cell8 = document.getElementById('32');
const cell9 = document.getElementById('33');
let totalMoves=0;


function player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const players = [new player("Player1", "X"), new player("Player2", "O")];
let activePlayer = players[0];
let finishFlag=0;
let currentplayernum=0;

let board = [];
for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
        board[i][j] = null;
    }
}


function gameOver() {
    let flag1 = 0;
    for (let i = 0; i < 3; i++) {
        flag1 = 0;
        for (let j = 0; j < 2; j++) {
            if (board[i][j] === board[i][j + 1] && board[i][j] != null) {
                flag1++;
            }
        }
        if (flag1 === 2) break;
    }
    console.log(flag1,finishFlag);
    let flag2 = 0;
    for (let j = 0; j < 3; j++) {
        flag2 = 0;
        for (let i = 0; i < 2; i++) {
            if (board[i][j] === board[i+1][j] && board[i][j] != null) {
                flag2++;
            }
        }
        if (flag2 === 2) break;
    }
    let flag = 0;
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== null) {
        flag = 1;
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== null) {
        flag = 1;
    }
    if (flag === 1 || flag1 === 2 || flag2 === 2) {
        finishFlag=1;
        console.log("!");
        return true;
    }
    else return false;
}

function validmove(posx, posy) {
    if (board[posx][posy] === null) return true;
    else return false;
}

function makeMove(posx,posy,cell) {    
    if (!validmove(posx - 1, posy - 1)) {
        return;
    }
    else{
        totalMoves++;
        console.log(board);
        board[posx - 1][posy - 1] = activePlayer.marker;
        cell.innerText=`${activePlayer.marker}`;
        if(currentplayernum===0){
            activePlayer=players[1];
            currentplayernum=1;
        }
        else{
            activePlayer=players[0];
            currentplayernum=0;
        }
    }

}

function displayWinner(){
    if(finishFlag==0){
    if(totalMoves===9){
        if(gameOver()){
            if(currentplayernum===0){
                activePlayer=players[1];
                currentplayernum=1;
            }
            else{
                activePlayer=players[0];
                currentplayernum=0;
            }
            document.getElementById('displayWinner').innerText=`Winner is ${activePlayer.name}`;
        }
        else{
            document.getElementById('displayWinner').innerText=`Match Tied`;
        }
    }
    else if(gameOver()){
        if(currentplayernum===0){
            activePlayer=players[1];
            currentplayernum=1;
        }
        else{
            activePlayer=players[0];
            currentplayernum=0;
        }
        document.getElementById('displayWinner').innerText=`Winner is ${activePlayer.name}`;
    }
}
}


cell1.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(1,1,cell1);
    displayWinner();
    }
});
cell2.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(1,2,cell2);
    displayWinner();
    }
});
cell3.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(1,3,cell3);
    displayWinner();
    }
    
});
cell4.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(2,1,cell4);
    displayWinner();
    }
});
cell5.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(2,2,cell5);
    displayWinner();
    }
});
cell6.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(2,3,cell6);
    displayWinner();
    }
});
cell7.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(3,1,cell7);
    displayWinner();
    }
});
cell8.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(3,2,cell8);
    displayWinner();
    }
});
cell9.addEventListener('click', () => {
    if(!gameOver()){
    makeMove(3,3,cell9);
    displayWinner();
    }
});