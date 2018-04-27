var player1Choices = new Array();
var player2Choices = new Array();
var numberOfPlayers = 2;
var currentPlayer = 0;
var turn = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points

function drawBoard() {
    var Parent = document.getElementById("game");

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (s = 0; s < 3; s++) {
        var row = document.createElement("tr");

        for (r = 0; r < 3; r++) {
            var col = document.createElement("td");
            row.appendChild(col);
        }

        Parent.appendChild(row);
    }
}

window.onload = drawBoard;
