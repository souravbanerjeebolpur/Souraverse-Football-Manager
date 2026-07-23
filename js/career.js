let currentCareer = null;

function newCareer() {

    showClubSelection();

}

function showClubSelection() {

    let html = `
    <div class="screen">

        <h2>Select Your Club</h2>

    `;

    clubs.forEach(club => {

        html += `

        <div class="clubCard">

            <h3>${club.name}</h3>

            <p>${club.city}, ${club.country}</p>

            <p>Budget : ₹${club.budget} M</p>

            <p>Fans : ${club.fans.toLocaleString()}</p>

            <p>Reputation : ${"★".repeat(club.reputation)}</p>

            <button onclick="startCareer(${club.id})">

                Manage Club

            </button>

        </div>

        `;

    });

    html += "</div>";

    document.getElementById("content").innerHTML = html;

}

function startCareer(clubId) {

    const selectedClub = clubs.find(c => c.id === clubId);

    currentCareer = {

        manager: "Sourav",

        club: selectedClub,

        season: 1,

        week: 1,

        leagueTable: createLeagueTable(clubs),

        fixtures: generateLeagueFixtures(clubs)

    };

    

    showDashboard();

}

function continueCareer() {

    if(currentCareer==null){

        alert("No saved career.");

        return;

    }

    showDashboard();

}