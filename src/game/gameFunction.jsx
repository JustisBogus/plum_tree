export const gameFunction = (id, squares, playerTurn, players, selectedPlayerX, selectedPlayer0) => {
    if(selectedPlayerX !== '' && selectedPlayer0 !== '' && selectedPlayerX !== selectedPlayer0) {
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
    let gameCompleted=false;
    let selectedPlayers = [...players];
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
            let winPlayer = {...selectedPlayers[selectedPlayerX]};
            winPlayer.score = winPlayer.score + 100;
            winPlayer.wins = winPlayer.wins + 1;
            selectedPlayers[selectedPlayerX] = winPlayer;

            let losePlayer = {...selectedPlayers[selectedPlayer0]};
            losePlayer.loses = losePlayer.loses + 1;
            selectedPlayers[selectedPlayer0] = losePlayer;

            gameCompleted = true;
        }
        if(squares[a].symbol === '0' && squares[a].symbol === squares[b].symbol && squares[a].symbol === squares[c].symbol) {
            gameCompleted = '0 wins';
            let winPlayer = {...selectedPlayers[selectedPlayer0]};
            winPlayer.score = winPlayer.score + 100;
            winPlayer.wins = winPlayer.wins + 1;
            selectedPlayers[selectedPlayer0] = winPlayer;

            let losePlayer = {...selectedPlayers[selectedPlayerX]};
            losePlayer.loses = losePlayer.loses + 1;
            selectedPlayers[selectedPlayerX] = losePlayer;

            gameCompleted = true;
        }
    }
    
    return ({
                squares: squares,
                turn: playerTurn,
                completed: gameCompleted,
                winner: selectedPlayers,
            });
        }
}