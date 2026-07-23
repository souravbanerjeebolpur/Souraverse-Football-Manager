// ===============================
// Souraverse Football Manager
// UI Module
// ===============================

const content = document.getElementById("content");
const managerText = document.getElementById("managerText");

function showHome() {

    content.innerHTML = `
        <div class="card">

            <h1 style="margin-bottom:5px;">
                ⚽ Souraverse Football Manager
            </h1>

            <p style="
                font-size:15px;
                color:#bbbbbb;
                font-style:italic;
                margin-bottom:25px;
            ">
                A Football Management Simulation
                <br><br>
                Created by <b>Sourav Banerjee</b>
            </p>

            <p>
                Build your legacy and become the world's greatest football manager.
            </p>

            <button class="bigButton" onclick="newCareer()">
                🏆 New Career
            </button>

            <button class="bigButton" onclick="continueCareer()">
                ▶ Continue Career
            </button>

            <button class="bigButton" onclick="showQuickMatch()">
                ⚽ Quick Match
            </button>

        </div>
    `;
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