var block1 = document.getElementById("blockOne");
if (block1) {
    block1.addEventListener("click", addXO);
}

var player1Points = 0;
var player2Points = 0;

function addXO() {
    document.getElementById('result').textContent = "4";
}

function newGame() {


    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

}
