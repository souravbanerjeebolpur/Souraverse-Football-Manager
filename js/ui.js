// ===============================
// Souraverse Football Manager
// UI Module
// ===============================

const content = document.getElementById("content");
const managerText = document.getElementById("managerText");

function showHome() {

    content.innerHTML = `
        <div class="card">

            <h2>⚽ Souraverse Football Manager</h2>

            <p>
                Build your legacy and become the world's greatest football manager.
            </p>

            <button class="bigButton" onclick="newCareer()">
                🆕 New Career
            </button>

            <button class="bigButton" onclick="continueCareer()">
                ▶ Continue Career
            </button>

        </div>

        <div class="card">

            <h3>⚡ Quick Match</h3>

            <p>
                Play an instant match between any two clubs.
            </p>

            <button class="bigButton"
                onclick="showQuickMatch()">
                ⚽ Start Quick Match
            </button>

        </div>

        <div class="card">

            <h3>🌍 World Football</h3>

            <p>
                Browse countries, leagues and clubs.
            </p>

            <button class="bigButton"
                onclick="showWorld()">
                🌍 Explore World
            </button>

        </div>
    `;
}

function showClubSelection() {

    let html = `
        <div class="card">
            <h3>Select Your Club</h3>
        </div>
    `;

    clubs.forEach(club => {

        html += `

        <div class="clubCard">

            <h3>${club.name}</h3>

            <p>📍 ${club.city}</p>

            <p>🏟 ${club.stadium}</p>

            <p>💰 Budget : ₹${club.budget} Million</p>

            <p>⭐ Reputation : ${club.reputation}/5</p>

            <button class="bigButton"
                onclick="selectClub(${club.id})">

                Manage Club

            </button>

        </div>

        `;

    });

    content.innerHTML = html;

}

function showDashboard(career) {

    managerText.innerText = career.club.name;

    content.innerHTML = `

    <div class="card">

        <h3>Manager Dashboard</h3>

        <div class="dashboardGrid">

            <div class="dashboardItem">
                <h4>Club</h4>
                ${career.club.name}
            </div>

            <div class="dashboardItem">
                <h4>Season</h4>
                ${career.season}
            </div>

            <div class="dashboardItem">
                <h4>Budget</h4>
                ₹${career.club.budget} M
            </div>

            <div class="dashboardItem">
                <h4>Fans</h4>
                ${career.club.fans.toLocaleString()}
            </div>

        </div>

    </div>

    <div class="card">

        <h3>Next Match</h3>

        <p>League fixtures will be available in Build 3.</p>

    </div>

    `;

}