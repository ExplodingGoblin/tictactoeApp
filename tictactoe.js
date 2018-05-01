var winCondition = new Array();
var XsChoices = new Array();
var OsChoices = new Array();
var playerTurn = 0;
var turn = 0;
var points1 = 0;
var points2 = 0;
var size = 3;

function createBoard() {
    var board = document.getElementById("game");
    var number = 1;

    while (board.hasChildNodes()) {
        board.removeChild(board.firstChild);
    }

    for (r = 0; r < 3; r++) {
        var row = document.createElement("tr");

        for (c = 0; c < 3; c++) {
            var column = document.createElement("td");
            column.id = number;

            var addXandO = function (e) {
                if (playerTurn == 0) {
                    this.innerHTML = "X";
                    XsChoices.push(parseInt(this.id));
                    XsChoices.sort(function (a, b) {
                        return a - b
                    });
                } else {
                    this.innerHTML = "O";
                    OsChoices.push(parseInt(this.id));
                    OsChoices.sort(function (a, b) {
                        return a - b
                    });
                }

                turn++;
                var playerPoint = winner();

                if (playerPoint) {
                    if (playerTurn == 0) {
                        points1++;
                    } else {
                        points2++;
                    }

                    document.getElementById("Xs").innerHTML = points1;
                    document.getElementById("Os").innerHTML = points2;

                    restart();
                    createBoard();
                } else {
                    if (playerTurn == 0) {
                        playerTurn = 1;
                    } else {
                        playerTurn = 0;
                    }
                    this.removeEventListener('click', arguments.callee);
                }
            };

            column.addEventListener('click', addXandO);

            row.appendChild(column);
            number++;
        }

        board.appendChild(row);
    }

    winningPositions();
}


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
    playerTurn = 0;
    XsChoices = new Array();
    OsChoices = new Array();
}


function winner() {
    var win = false;
    var playerChoices = new Array();

    if (playerTurn == 0) {
        playerChoices = XsChoices;
    } else {
        playerChoices = OsChoices;
    }
    if (playerChoices.length >= size) {

        for (i = 0; i < winCondition.length; i++) {
            var counting = winCondition[i];
            var setFound = true;

            for (f = 0; f < counting.length; f++) {
                var checking = false;

                for (s = 0; s < playerChoices.length; s++) {
                    if (counting[f] == playerChoices[s]) {
                        checking = true;
                        break;
                    }
                }


                if (checking == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    return win;
}

window.onload = createBoard;

var button1 = document.getElementById("resetGame");
button1.addEventListener('click', restart);
button1.addEventListener('click', createBoard);
