var player1Choices = new Array();
var player2Choices = new Array();
var numberOfPlayers = 2;
var currentPlayer = 0;
var turn = 0;
var points1 = 0;    // player 1 points
var points2 = 0;    // player 2 points

function drawBoard() {
    var Parent = document.getElementById("game");
    var turnCount = 1;

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (s = 0; s < 3; s++) {
        var row = document.createElement("tr");

        for (r = 0; r < 3; r++) {
            var col = document.createElement("td");
            col.id = counter;
            col.innerHTML = counter;

            var handler = function(e) {
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    player1Selections.push(parseInt(this.id));
                    player1Selections.sort(function(a, b) { return a - b });
                }

                else {
                    this.innerHTML = "O";
                    player2Selections.push(parseInt(this.id));
                    player2Selections.sort(function(a, b) { return a - b });
                }

                move++;
            };

            col.addEventListener('click', handler);

            row.appendChild(col);
            counter++;
        }

        Parent.appendChild(row);
    }
}

window.onload = drawBoard;
