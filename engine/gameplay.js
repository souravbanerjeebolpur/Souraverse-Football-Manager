// =====================================
// Souraverse Football Manager
// Gameplay Engine v0.1
// =====================================

function showPlayableMatch(){

    document.getElementById("content").innerHTML = `

    <div class="matchScreen">

        <div class="scoreBoard">

            <div>${currentMatch.homeClub.name}</div>

            <div id="score">
                ${currentMatch.homeGoals}
                -
                ${currentMatch.awayGoals}
            </div>

            <div>${currentMatch.awayClub.name}</div>

        </div>

        <div id="minuteBar">

            ${currentMatch.half}H

            <span id="matchMinute">

            0'

            </span>

        </div>

        <canvas
            id="pitch"
            width="360"
            height="600">
        </canvas>

        <div class="controls">

            <button onclick="moveUp()">⬆</button>

            <div>

                <button onclick="moveLeft()">⬅</button>

                <button onclick="moveDown()">⬇</button>

                <button onclick="moveRight()">➡</button>

            </div>

            <div>

                <button onclick="passBall()">
                    PASS
                </button>

                <button onclick="shootBall()">
                    SHOOT
                </button>

            </div>

        </div>

    </div>

    `;

    drawPitch();

}

// -------------------------------------

function drawPitch(){

    const canvas=document.getElementById("pitch");

    const ctx=canvas.getContext("2d");

    // Grass
    ctx.fillStyle="#228B22";
    ctx.fillRect(0,0,360,600);

    // Border
    ctx.strokeStyle="white";
    ctx.lineWidth=3;
    ctx.strokeRect(10,10,340,580);

    // Halfway line
    ctx.beginPath();
    ctx.moveTo(10,300);
    ctx.lineTo(350,300);
    ctx.stroke();

    // Centre Circle
    ctx.beginPath();
    ctx.arc(180,300,50,0,Math.PI*2);
    ctx.stroke();

    // Centre Spot
    ctx.beginPath();
    ctx.arc(180,300,3,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();

    // Top Penalty Box
    ctx.strokeRect(100,10,160,90);

    // Bottom Penalty Box
    ctx.strokeRect(100,500,160,90);

    // Goals
    ctx.fillStyle="white";

    ctx.fillRect(150,0,60,10);

    ctx.fillRect(150,590,60,10);

}

// -------------------------------------

function moveUp(){}

function moveDown(){}

function moveLeft(){}

function moveRight(){}

function passBall(){}

function shootBall(){}