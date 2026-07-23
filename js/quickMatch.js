let quickMatchHome = null;
let quickMatchAway = null;

function showQuickMatch() {

    let html = `
    <div class="card">

        <h2>⚽ Quick Match</h2>

        <h3>Home Club</h3>

        <select id="homeClub">
    `;

    clubs.forEach(club => {
        html += `<option value="${club.id}">${club.name}</option>`;
    });

    html += `
        </select>

        <h3 style="margin-top:20px;">Away Club</h3>

        <select id="awayClub">
    `;

    clubs.forEach(club => {
        html += `<option value="${club.id}">${club.name}</option>`;
    });

    html += `
        </select>

        <h3 style="margin-top:20px;">Stadium</h3>

        <select id="stadiumType">
            <option value="Home Stadium">Home Stadium</option>
            <option value="Away Stadium">Away Stadium</option>
            <option value="Neutral Stadium">Neutral Stadium</option>
        </select>

        <h3 style="margin-top:20px;">Mentality</h3>

        <select id="mentality">
            <option>Very Defensive</option>
            <option>Defensive</option>
            <option selected>Balanced</option>
            <option>Attacking</option>
            <option>All Out Attack</option>
        </select>

        <button class="bigButton"
                style="margin-top:20px"
                onclick="prepareQuickMatch()">

            ▶ Continue

        </button>

    </div>
    `;

    content.innerHTML = html;

}

function prepareQuickMatch(){

    quickMatchHome = clubs.find(c => c.id == homeClub.value);
    quickMatchAway = clubs.find(c => c.id == awayClub.value);

    if(quickMatchHome.id == quickMatchAway.id){

        alert("Please choose two different clubs.");

        return;

    }

    content.innerHTML=`

    <div class="card">

        <h2>🏟 Match Preview</h2>

        <h3>${quickMatchHome.name}</h3>

        <h1>VS</h1>

        <h3>${quickMatchAway.name}</h3>

        <br>

        <button class="bigButton"
        onclick="playQuickMatch()">

        ▶ Play Match

        </button>

        <br><br>

        <button class="bigButton"
        onclick="simulateQuickMatch()">

        ⚡ Simulate Match

        </button>

    </div>

    `;

}

function simulateQuickMatch()  {

    const home = quickMatchHome;
    const away = quickMatchAway;

    let homeGoals = 0;
    let awayGoals = 0;

    let commentary = "";

    for (let minute = 1; minute <= 90; minute++) {

        let chance = Math.random();

        // Goal
        if (chance < 0.05) {

            if (Math.random() < 0.5) {

                homeGoals++;

                commentary += `
                <p>
                    <b>${minute}'</b> ⚽ Goal for <b>${home.name}</b><br>
                    Score: ${homeGoals} - ${awayGoals}
                </p>
                `;

            } else {

                awayGoals++;

                commentary += `
                <p>
                    <b>${minute}'</b> ⚽ Goal for <b>${away.name}</b><br>
                    Score: ${homeGoals} - ${awayGoals}
                </p>
                `;

            }

        }

        // Yellow Card
        else if (chance < 0.08) {

            commentary += `
            <p>
                <b>${minute}'</b> 🟨 Yellow Card
            </p>
            `;

        }

        // Great Save
        else if (chance < 0.10) {

            commentary += `
            <p>
                <b>${minute}'</b> 🧤 Great Save!
            </p>
            `;

        }

        // Corner
        else if (chance < 0.13) {

            commentary += `
            <p>
                <b>${minute}'</b> 🚩 Corner Kick
            </p>
            `;

        }

        // Free Kick
        else if (chance < 0.15) {

            commentary += `
            <p>
                <b>${minute}'</b> 🎯 Dangerous Free Kick
            </p>
            `;

        }

    }

    if (commentary === "") {

        commentary = "<p>No major incidents.</p>";

    }

    content.innerHTML = `
    <div class="card">

        <h2>🏆 Full Time</h2>

        <h3>${home.name}</h3>

        <h1>${homeGoals} - ${awayGoals}</h1>

        <h3>${away.name}</h3>

        <hr>

        ${commentary}

        <button class="bigButton" onclick="showQuickMatch()">
            🔄 Play Again
        </button>

    </div>
    `;

}

function playQuickMatch(){

    startMatch({

        competition:"Quick Match",

        homeClub:quickMatchHome,

        awayClub:quickMatchAway,

        stadium:null,

        playable:true,

        matchLength:90

    });

}