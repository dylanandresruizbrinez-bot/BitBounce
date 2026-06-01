// ======================================
// BITBOUNCE
// PARTE 1
// ======================================

// ---------- CANVAS ----------

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ---------- PANTALLAS ----------

const mainMenu = document.getElementById("mainMenu");
const onlineMenu = document.getElementById("onlineMenu");
const storeMenu = document.getElementById("storeMenu");
const statsMenu = document.getElementById("statsMenu");
const gameScreen = document.getElementById("gameScreen");

// ---------- BOTONES ----------

const btnPVP = document.getElementById("btnPVP");
const btnOnline = document.getElementById("btnOnline");
const btnDuos = document.getElementById("btnDuos");
const btnTraining = document.getElementById("btnTraining");

const btnStore = document.getElementById("btnStore");
const btnStats = document.getElementById("btnStats");

const backToMain1 = document.getElementById("backToMain1");
const backToMain2 = document.getElementById("backToMain2");
const backToMain3 = document.getElementById("backToMain3");

// ---------- HUD ----------

const leftScoreText = document.getElementById("leftScore");
const rightScoreText = document.getElementById("rightScore");

const leftNameText = document.getElementById("leftName");
const rightNameText = document.getElementById("rightName");

const hitCounterText = document.getElementById("hitCounter");

const rankName = document.getElementById("rankName");
const expFill = document.getElementById("expFill");
const expText = document.getElementById("expText");

const coinsDisplay = document.getElementById("coinsDisplay");

// ---------- ESTADO GLOBAL ----------

let gameMode = "pvp";

let gameRunning = false;

let selectedBot = null;

let scoreLeft = 0;
let scoreRight = 0;

let hitCounter = 0;

let keys = {};

// ---------- JUGADOR ----------

let playerData = {

    exp: 0,

    coins: 0,

    wins: 0,

    losses: 0,

    matches: 0,

    rank: "🪨 Hierro",

    color: "#ffffff",

    paddleSkin: "Clásica",

    ballSkin: "Clásica",

    soundSkin: "Retro",

    unlockedColors: ["#ffffff"],

    unlockedPaddles: ["Clásica"],

    unlockedBalls: ["Clásica"],

    unlockedSounds: ["Retro"]

};

// ---------- RANGOS ----------

const ranks = [

    {
        name: "🪨 Hierro",
        exp: 0
    },

    {
        name: "🥉 Bronce",
        exp: 500
    },

    {
        name: "🥈 Plata",
        exp: 1500
    },

    {
        name: "🥇 Oro",
        exp: 3500
    },

    {
        name: "💿 Platino",
        exp: 7000
    },

    {
        name: "💚 Esmeralda",
        exp: 12000
    },

    {
        name: "💙 Zafiro",
        exp: 19000
    },

    {
        name: "❤️ Rubí",
        exp: 30000
    },

    {
        name: "💎 Diamante",
        exp: 50000
    }

];

// ---------- 20 BOTS ----------
    const rankBots = {

    "🪨 Hierro": [
        "PixelKai",
        "NovaDash",
        "ZeroByte"
    ],

    "🥉 Bronce": [
        "FluxRider",
        "HyperAce"
    ],

    "🥈 Plata": [
        "VortexYT",
        "QuantumLeo"
    ],

    "🥇 Oro": [
        "ShadowPing",
        "ByteStorm"
    ],

    "💿 Platino": [
        "ElectroRay",
        "NeonFox"
    ],

    "💚 Esmeralda": [
        "BlitzMax",
        "OrbitPlay"
    ],

    "💙 Zafiro": [
        "CyberDani",
        "DarkPulse"
    ],

    "❤️ Rubí": [
        "LunarKick",
        "GlitchWolf"
    ],

    "💎 Diamante": [
        "ZenithPro",
        "TitanByte",
        "ApexZero"
    ]
};
const bots = [


    {
        name: "PixelKai",
         rank: "🪨 Hierro",
    level: 5,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.60,
        speed: 4,
        aggression: 50
    },

    {
        name: "NovaDash",
         rank: "🪨 Hierro",
    level: 10,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.65,
        speed: 5,
        aggression: 70
    },

    {
        name: "ZeroByte",
         rank: "🥉 Bronce",
    level: 15,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.70,
        speed: 4,
        aggression: 30
    },

    {
        name: "FluxRider",
         rank: "🥉 Bronce",
    level: 20,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.75,
        speed: 5,
        aggression: 90
    },

    {
        name: "HyperAce",
         rank: "🥈 Plata",
    level: 25,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.80,
        speed: 6,
        aggression: 80
    },

    {
        name: "VortexYT",
         rank: "🥈 Plata",
    level: 30,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.82,
        speed: 6,
        aggression: 60
    },

    {
        name: "QuantumLeo",
        rank: "🥇 Oro",
    level: 30,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.84,
        speed: 6,
        aggression: 70
    },

    {
        name: "ShadowPing",
        rank: "🥇 Oro",
    level: 35,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.85,
        speed: 6,
        aggression: 80
    },

    {
        name: "ByteStorm",
        rank: "💿 Platino",
    level: 40,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.87,
        speed: 7,
        aggression: 75
    },

    {
        name: "ElectroRay",
        rank: "💿 Platino",
    level: 45,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.88,
        speed: 7,
        aggression: 85
    },

    {
        name: "NeonFox",
        rank: "💚 Esmeralda",
    level: 50,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.89,
        speed: 7,
        aggression: 80
    },

    {
        name: "BlitzMax",
        rank: "💚 Esmeralda",
    level: 55,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.90,
        speed: 8,
        aggression: 95
    },

    {
        name: "OrbitPlay",
        rank: "💚 Esmeralda",
    level: 55,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.91,
        speed: 8,
        aggression: 40
    },

    {
        name: "CyberDani",
        rank: "💙 Zafiro",
    level: 60,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.92,
        speed: 8,
        aggression: 65
    },

    {
        name: "DarkPulse",
        rank: "💙 Zafiro",
    level: 65,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.93,
        speed: 8,
        aggression: 75
    },

    {
        name: "ZenithPro",
        rank: "❤️ Rubí",
    level: 70,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.94,
        speed: 9,
        aggression: 90
    },

    {
        name: "LunarKick",
        rank: "❤️ Rubí",
    level: 75,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.95,
        speed: 9,
        aggression: 80
    },

    {
        name: "GlitchWolf",
        rank: "💎 Diamante",
    level: 80,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.96,
        speed: 9,
        aggression: 50
    },

    {
        name: "TitanByte",
        rank: "💎 Diamante",
    level: 85,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.97,
        speed: 10,
        aggression: 95
    },

    {
        name: "ApexZero",
        rank: "💎 Diamante",
    level: 100,

    rewardExp: 100,
    rewardCoins: 50,
        reaction: 0.99,
        speed: 11,
        aggression: 100
    }

];

// ---------- PALETAS ----------

const paddleWidth = 15;
const paddleHeight = 110;

const leftPaddle = {

    x: 30,
    y: canvas.height / 2 - 55,

    width: paddleWidth,
    height: paddleHeight,

    speed: 8,

    color: "#ffffff"

};

const rightPaddle = {

    x: canvas.width - 45,
    y: canvas.height / 2 - 55,

    width: paddleWidth,
    height: paddleHeight,

    speed: 8,

    color: "#ffffff"

};

// ---------- PELOTA ----------

const ball = {

    x: canvas.width / 2,
    y: canvas.height / 2,

    radius: 10,

    speedX: 5,
    speedY: 3,

    baseSpeed: 5,

    color: "#ffffff",

    boosted: false

};

// ---------- LOCAL STORAGE ----------

function saveGame() {

    localStorage.setItem(
        "bitbounce_save",
        JSON.stringify(playerData)
    );

}

function loadGame() {

    const save =
        localStorage.getItem("bitbounce_save");

    if (save) {

        playerData =
            JSON.parse(save);

    }

}

loadGame();

// ---------- RANGO ----------

function updateRank() {

    let currentRank = ranks[0];

    for (let rank of ranks) {

        if (playerData.exp >= rank.exp) {

            currentRank = rank;

        }

    }

    playerData.rank = currentRank.name;

}
function getRandomBotForRank() {

    const playerRank =
        playerData.rank;

    const availableNames =
        rankBots[playerRank];

    const availableBots =
        bots.filter(bot =>
            availableNames.includes(bot.name)
        );

    return availableBots[
        Math.floor(
            Math.random() *
            availableBots.length
        )
    ];
    btnOnline.onclick = () => {

    updateRank();

    const rival =
        getRandomBotForRank();

    selectedBot = rival;

    startOnlineMatch(rival);

};
}

// ---------- UI ----------

function updatePlayerUI() {

    updateRank();

    rankName.textContent =
        playerData.rank;

    coinsDisplay.textContent =
        playerData.coins;

    let currentIndex =
        ranks.findIndex(
            r => r.name === playerData.rank
        );

    let currentRank =
        ranks[currentIndex];

    let nextRank =
        ranks[currentIndex + 1];

    if (!nextRank) {

        expFill.style.width =
            "100%";

        expText.textContent =
            "MAX";

        return;
    }

    let currentExp =
        playerData.exp -
        currentRank.exp;

    let neededExp =
        nextRank.exp -
        currentRank.exp;

    let percent =
        (currentExp / neededExp) * 100;

    expFill.style.width =
        percent + "%";

    expText.textContent =
        `${currentExp} / ${neededExp} EXP`;
}

updatePlayerUI();
const shopItems = [

    {
        id:"red",
        type:"color",
        value:"#ff0000",
        price:100
    },

    {
        id:"blue",
        type:"color",
        value:"#0066ff",
        price:100
    },

    {
        id:"green",
        type:"color",
        value:"#00ff66",
        price:100
    }

];
function buyItem(item) {

    if (
        playerData.coins <
        item.price
    ) return;

    playerData.coins -=
        item.price;

    playerData.unlockedColors.push(
        item.value
    );

    saveGame();

    updatePlayerUI();
}
// ---------- MENUS ----------

function hideAllScreens() {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.add("hidden");

        });

}

function openScreen(screen) {

    hideAllScreens();

    screen.classList.remove("hidden");

}


// ---------- EVENTOS TECLADO ----------

document.addEventListener(
    "keydown",
    e => {

        keys[e.key] = true;

    }
);

document.addEventListener(
    "keyup",
    e => {

        keys[e.key] = false;

    }
);

// ---------- BOTONES MENU ----------

btnOnline.onclick = () => {

    const rival =
        getRandomBotForRank();

    selectedBot = rival;

    setTimeout(() => {

        startOnlineMatch(rival);

    }, 1500);

};

btnStore.onclick = () => {

    openScreen(storeMenu);

};

btnStats.onclick = () => {

    openScreen(statsMenu);

};

backToMain1.onclick = () => {

    openScreen(mainMenu);

};

backToMain2.onclick = () => {

    openScreen(mainMenu);

};

backToMain3.onclick = () => {

    openScreen(mainMenu);

};

// ======================================
// FIN PARTE 1
// ======================================
// ======================================
// BITBOUNCE
// PARTE 2
// ======================================

// ---------- INICIO PARTIDAS ----------

function startPVP() {

    gameMode = "pvp";

    leftNameText.textContent = "Jugador 1";
    rightNameText.textContent = "Jugador 2";

    resetMatch();

    openScreen(gameScreen);

    gameRunning = true;
}

function startOnlineMatch(bot) {

    gameMode = "online";

    leftNameText.textContent = "Jugador";
    rightNameText.textContent =
`${bot.name} Lv.${bot.level}`;

    resetMatch();

    openScreen(gameScreen);

    gameRunning = true;
}

function startTraining() {

    gameMode = "training";

    leftNameText.textContent = "Práctica";
    rightNameText.textContent = "Muro";

    resetMatch();

    openScreen(gameScreen);

    gameRunning = true;
}

// ---------- BOTONES ----------

btnPVP.onclick = startPVP;

btnTraining.onclick = startTraining;

// ---------- RESET ----------

function resetMatch() {

    scoreLeft = 0;
    scoreRight = 0;

    hitCounter = 0;

    updateScore();

    resetBall();

    leftPaddle.y =
        canvas.height / 2 - leftPaddle.height / 2;

    rightPaddle.y =
        canvas.height / 2 - rightPaddle.height / 2;
}

function resetBall() {

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    ball.speedX =
        Math.random() > 0.5 ? 5 : -5;

    ball.speedY =
        (Math.random() * 4) - 2;

    ball.color = "#ffffff";

    ball.boosted = false;

    hitCounter = 0;

    hitCounterText.textContent =
        "Golpes: 0";
}

// ---------- SCORE ----------

function updateScore() {

    leftScoreText.textContent =
        scoreLeft;

    rightScoreText.textContent =
        scoreRight;
}

// ---------- MOVIMIENTO ----------

function updatePlayers() {

    // Jugador izquierdo

    if (keys["w"] || keys["W"]) {

        leftPaddle.y -= leftPaddle.speed;

    }

    if (keys["s"] || keys["S"]) {

        leftPaddle.y += leftPaddle.speed;

    }

    // PVP

    if (gameMode === "pvp") {

        if (keys["ArrowUp"]) {

            rightPaddle.y -= rightPaddle.speed;

        }

        if (keys["ArrowDown"]) {

            rightPaddle.y += rightPaddle.speed;

        }

    }

    leftPaddle.y =
        Math.max(
            0,
            Math.min(
                canvas.height - leftPaddle.height,
                leftPaddle.y
            )
        );

    rightPaddle.y =
        Math.max(
            0,
            Math.min(
                canvas.height - rightPaddle.height,
                rightPaddle.y
            )
        );
}

// ---------- IA ----------

function updateBot() {

    if (
        gameMode !== "online" ||
        !selectedBot
    ) return;

    const center =
        rightPaddle.y +
        rightPaddle.height / 2;

    const target =
        ball.y;

    if (center < target - 15) {

        rightPaddle.y +=
            selectedBot.speed;

    }

    if (center > target + 15) {

        rightPaddle.y -=
            selectedBot.speed;

    }

}

// ---------- PELOTA ----------

function updateBall() {

    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // ARRIBA Y ABAJO

    if (
        ball.y - ball.radius <= 0 ||
        ball.y + ball.radius >= canvas.height
    ) {

        ball.speedY *= -1;

    }

    // PALETA IZQUIERDA

    if (

        ball.x - ball.radius <=
        leftPaddle.x + leftPaddle.width &&

        ball.y >= leftPaddle.y &&

        ball.y <=
        leftPaddle.y +
        leftPaddle.height

    ) {

        bounceBall();

    }

    // PALETA DERECHA

    if (

        ball.x + ball.radius >=
        rightPaddle.x &&

        ball.y >= rightPaddle.y &&

        ball.y <=
        rightPaddle.y +
        rightPaddle.height

    ) {

        bounceBall();

    }

    // PUNTO DERECHA

    if (ball.x < 0) {

        scoreRight++;

        updateScore();

        resetBall();

    }

    // PUNTO IZQUIERDA

    if (ball.x > canvas.width) {

        scoreLeft++;

        updateScore();

        resetBall();

    }

    // FIN PARTIDA

    if (
        scoreLeft >= 10 ||
        scoreRight >= 10
    ) {

        endMatch();

    }

}

// ---------- SISTEMA ESPECIAL ----------

function bounceBall() {

    ball.speedX *= -1;

    hitCounter++;

    // +0.1

    let dirX =
        ball.speedX > 0 ? 1 : -1;

    let dirY =
        ball.speedY > 0 ? 1 : -1;

    ball.speedX =
        (Math.abs(ball.speedX) + 0.1)
        * dirX;

    ball.speedY =
        (Math.abs(ball.speedY) + 0.1)
        * dirY;

    // x1.25 CADA 5

    if (hitCounter % 5 === 0) {

        ball.speedX *= 1.25;
        ball.speedY *= 1.25;

        ball.boosted = true;

        ball.color = "#ff5e00";

    }

    hitCounterText.textContent =
        "Golpes: " + hitCounter;

}

// ---------- RECOMPENSAS ----------

function endMatch() {

    gameRunning = false;

    if (gameMode === "training") {

        openScreen(mainMenu);

        return;
    }

    playerData.matches++;

    if (scoreLeft > scoreRight) {

        playerData.wins++;

       if(gameMode === "online" && selectedBot){

    playerData.exp += selectedBot.rewardExp;
    playerData.coins += selectedBot.rewardCoins;

}else{

    playerData.exp += 100;
    playerData.coins += 50;

}
playerData.coins +=
selectedBot.rewardCoins;

        alert(
            "Victoria\n+100 EXP\n+50 Monedas"
        );

    } else {

        playerData.losses++;

        playerData.exp += 25;

        playerData.coins += 10;

        alert(
            "Derrota\n+25 EXP\n+10 Monedas"
        );

    }

    saveGame();

    updatePlayerUI();

    openScreen(mainMenu);
}

// ---------- DIBUJADO ----------

function draw() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    // PALETAS

    ctx.fillStyle =
        playerData.color;

    ctx.fillRect(
        leftPaddle.x,
        leftPaddle.y,
        leftPaddle.width,
        leftPaddle.height
    );

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
        rightPaddle.x,
        rightPaddle.y,
        rightPaddle.width,
        rightPaddle.height
    );

    // PELOTA

    ctx.fillStyle =
        ball.color;

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

// ---------- LOOP ----------

function gameLoop() {

    if (gameRunning) {

        updatePlayers();

        updateBot();

        updateBall();

        draw();

    }

    requestAnimationFrame(
        gameLoop
    );

}

gameLoop();

// ---------- SALIR ----------

const leaveGameBtn =
document.getElementById(
    "leaveGameBtn"
);

leaveGameBtn.onclick = () => {

    gameRunning = false;

    openScreen(mainMenu);

};

// ---------- CARGA INICIAL ----------

updatePlayerUI();

openScreen(mainMenu);

// ======================================
// FIN PARTE 2
// ======================================
