var winArray = new Array();
var player1Choices = new Array();
var player2Choices = new Array();
var currentPlayer = 0;
var turn = 0;
var points1 = 0;
var points2 = 0;
var winCondition;
var size = 3;

function createBoard() {
    var board = document.getElementById("game");
    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }

    for (r = 0; r < 3; r++) {
        var row = document.createElement("tr");

        for (c = 0; c < 3; c++) {
            var col = document.createElement("td");
            var addXandO = function (e) {
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    player1Choices.push(parseInt(this.id));
                    player1Choices.sort(function (a, b) {
                        return a - b
                    });
                } else {
                    this.innerHTML = "O";
                    player2Choices.push(parseInt(this.id));
                    player2Choices.sort(function (a, b) {
                        return a - b
                    });
                }

                turn++;
                var isWin = winner();

                if (isWin) {
                    if (currentPlayer == 0) {
                        points1++;
                    } else {
                        points2++;
                    }

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("player2").innerHTML = points2;

                    restart();
                    createBoard();
                } else {
                    if (currentPlayer == 0) {
                        currentPlayer = 1;
                    } else {
                        currentPlayer = 0;
                    }
                    this.removeEventListener('click', arguments.callee);
                }
            };

            col.addEventListener('click', addXandO);
            row.appendChild(col);

        }

        board.appendChild(row);
    }
    winningPositions();
}

window.onload = createBoard;


function winningPositions() {
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


function winner() {
    var win = false;
    var playerChoices = new Array;

    if (currentPlayer == 0) {
        playerChoices = player1Choices;
    } else {
        playerChoices = player2Choices;
    }
}
