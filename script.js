const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const paddleWidth = 10;
const paddleHeight = 80;

let leftPaddle = {
    x: 20,
    y: canvas.height / 2 - paddleHeight / 2
};

let rightPaddle = {
    x: canvas.width - 30,
    y: canvas.height / 2 - paddleHeight / 2
};

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 8,
    speedX: 5,
    speedY: 3
};

const keys = {};

document.addEventListener("keydown", e => {
    keys[e.key] = true;
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function update() {

    // Jugador izquierdo (W y S)
    if (keys["w"] || keys["W"]) {
        leftPaddle.y -= 6;
    }

    if (keys["s"] || keys["S"]) {
        leftPaddle.y += 6;
    }

    // Jugador derecho (↑ y ↓)
    if (keys["ArrowUp"]) {
        rightPaddle.y -= 6;
    }

    if (keys["ArrowDown"]) {
        rightPaddle.y += 6;
    }

    // Limitar paletas
    leftPaddle.y = Math.max(0, Math.min(canvas.height - paddleHeight, leftPaddle.y));
    rightPaddle.y = Math.max(0, Math.min(canvas.height - paddleHeight, rightPaddle.y));

    // Movimiento pelota
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Rebote arriba/abajo
    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.speedY *= -1;
    }

    // Colisión izquierda
    if (
        ball.x - ball.radius < leftPaddle.x + paddleWidth &&
        ball.y > leftPaddle.y &&
        ball.y < leftPaddle.y + paddleHeight
    ) {
        ball.speedX *= -1;
    }

    // Colisión derecha
    if (
        ball.x + ball.radius > rightPaddle.x &&
        ball.y > rightPaddle.y &&
        ball.y < rightPaddle.y + paddleHeight
    ) {
        ball.speedX *= -1;
    }

    // Reiniciar si sale
    if (ball.x < 0 || ball.x > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.speedX *= -1;
    }
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Paleta izquierda
    ctx.fillStyle = "white";
    ctx.fillRect(
        leftPaddle.x,
        leftPaddle.y,
        paddleWidth,
        paddleHeight
    );

    // Paleta derecha
    ctx.fillRect(
        rightPaddle.x,
        rightPaddle.y,
        paddleWidth,
        paddleHeight
    );

    // Pelota
    ctx.beginPath();
    ctx.arc(
        ball.x,
        ball.y,
        ball.radius,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
