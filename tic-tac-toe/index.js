let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
let countTiles = 0;

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const turnText = document.querySelector(".turn");
const resetButton = document.querySelector(".reset");

board.addEventListener("click", ({target}) => {
    const classes = Array.from(target.classList);
    if (classes.includes("tile") && classes.length !== 1) return;

    const idx = tiles.indexOf(target);

    target.classList.add(`tile-${turn}`);
    symbols[Math.floor(idx / 3)][idx % 3] = turn; //tablica była ułożona nie tak jak jest wyświetlana na ekranie - zamieniałam nawiasy ze sobą
    turn = turn === "x" ? "o" : "x";

    countTiles++;
    
    //zmieniłam kolejność checkWin() i displayTurn(), bo nie chcę nadpisywać h1 tury jak już ktoś wygrał
    checkWin();
    displayTurn(turn);  
});

function displayTurn(turn) {
    // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
    turnText.textContent = turn.toUpperCase() + " turn";
}

function equals3(a, b, c) {
    return (a == b && a == c && a != "");
}

function checkWin() {
    // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
    var theSame = ""; //zmienna zapamiętująca czy i które symbole są takie same

    //horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(symbols[i][0], symbols[i][1], symbols[i][2])) theSame = symbols[i][0];
    }
    //vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(symbols[0][i], symbols[1][i], symbols[2][i])) theSame = symbols[0][i];
    }
    //diagonal
    if (equals3(symbols[0][0], symbols[1][1], symbols[2][2])) theSame = symbols[0][0];
    else if (equals3(symbols[0][2], symbols[1][1], symbols[2][0])) theSame = symbols[0][2];

    if (theSame != "") {
        window.alert("The winner is " + theSame.toUpperCase() + " !!!");
        reset();
    }
    
    if(countTiles == 9) {
        window.alert("The match ended in a draw :<");
        reset();
    }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
resetButton.addEventListener("click", reset);

function reset() {
    // 4. zresetuj stan gry
    window.location.reload(true);
}
