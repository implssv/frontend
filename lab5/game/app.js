class Position {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};

class Player {

    constructor(color, position) {
        this.color = color;
        this.position = position;
    }

};

var gameArea = document.getElementById("game"),
    context = gameArea.getContext('2d'),
    pointWidth = 10,
    pointHeight = 10,
    computer = new Player('#FF0000', getRandomRectangle()),
    player = new Player('#000000', new Position(0, 0));

drawPlayer(player);

function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomRectangle() {

    return new Position(randomFromRange(0, gameArea.width - pointWidth), randomFromRange(0, gameArea.height - pointHeight));
};

function removeFromGameArea(position) {
    context.clearRect(position.x, position.y, gameArea.width, gameArea.height);
};

function drawPlayer(player) {

    context.fillStyle = player.color;
    context.fillRect(player.position.x, player.position.y, pointWidth, pointHeight);

};
function hasWinningPosition() {

    return (player.position.x < computer.position.x + pointWidth) &&
        (player.position.x + pointWidth > computer.position.x) &&
        (player.position.y < computer.position.y + pointHeight) &&
        (player.position.y + pointHeight > computer.position.y);

};

function finishGame() {

    computerMove.unsubscribe();
    playerMove.unsubscribe();
    alert("game over");
};

function isValidPosition(position) {


    return (position.x >= 0 && position.x <= gameArea.width - pointWidth) && (position.y >= 0 && position.y <= gameArea.height - pointHeight);

};
function specifyNextPosition(key) {
    var position = {};


    switch (key) {
        case 'ArrowLeft':
            position = new Position(player.position.x - pointWidth, player.position.y)
            break
        case 'ArrowRight':
            position = new Position(player.position.x + pointWidth, player.position.y);
            break
        case 'ArrowDown':
            position = new Position(player.position.x, player.position.y + pointHeight);
            break
        case 'ArrowUp':
            position = new Position(player.position.x, player.position.y - pointHeight);
            break
    }

    if (isValidPosition(position)) {


        return position;
    }
    return player.position;
}


var computerMove = Rx.Observable.interval(10).subscribe(() => {
    removeFromGameArea(computer.position);
    computer.position = getRandomRectangle();
    drawPlayer(computer);

    if (hasWinningPosition()) {

        finishGame();
    }

});



var playerMove = Rx.Observable.fromEvent(document, 'keydown').subscribe(event => {



    removeFromGameArea(new Position(player.position.x, player.position.y));
    player.position = specifyNextPosition(event.key);

    drawPlayer(player);
    if (hasWinningPosition()) {
        finishGame();
    }

});

