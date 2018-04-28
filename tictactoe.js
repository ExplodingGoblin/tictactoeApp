var player1Choices = new Array();
var player2Choices = new Array();
var numberOfPlayers = 2;
var currentPlayer = 0;
var turn = 0;
var points1 = 0; // player 1 points
var points2 = 0; // player 2 points
var winCondition;

function drawBoard() {
    var Parent = document.getElementById("game");

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (r = 0; r < 3; r++) {
        var row = document.createElement("tr");

        for (c = 0; c < 3; c++) {
            var col = document.createElement("td");
            row.appendChild(col);
        }

        Parent.appendChild(row);
    }
}

window.onload = drawBoard;


function win() {
    winCondition.push([1, 2, 3]);
    winCondition.push([4, 5, 6]);
    winCondition.push([7, 8, 9]);
    winCondition.push([1, 4, 7]);
    winCondition.push([2, 5, 8]);
    winCondition.push([3, 6, 9]);
    winCondition.push([1, 5, 9]);
    winCondition.push([3, 5, 7]);
}

function restart() {
    currentPlayer = 0;
    player1Choices = new Array;
    player2Choices = new Array;
}
