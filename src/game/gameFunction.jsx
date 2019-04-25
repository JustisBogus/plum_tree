export const gameFunction = (id, squares, playerTurn) => {
    let square = {...squares[id]};
    if(square.symbol === ''){
    square.symbol = playerTurn;
    squares[id] = square;
    if(playerTurn === "X"){
        playerTurn = "0"
    } else {
        playerTurn = "X"
    }
    }
    let gameCompleted="";
    let winCombination =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i = 0; i < winCombination.length; i++) {
        const [a, b, c] = winCombination[i]
        if(squares[a].symbol === 'X' && squares[a].symbol === squares[b].symbol && squares[a].symbol === squares[c].symbol) {
            gameCompleted = 'X wins';
        }
        if(squares[a].symbol === '0' && squares[a].symbol === squares[b].symbol && squares[a].symbol === squares[c].symbol) {
            gameCompleted = '0 wins';
        }
    }
    
    return ({
                squares: squares,
                turn: playerTurn,
                winner: gameCompleted,
            });
}