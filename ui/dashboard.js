function showDashboard() {

    if (!currentCareer) {

        document.getElementById("content").innerHTML = `
            <div class="screen">
                <h2>No Career Loaded</h2>
                <p>Please start a new career.</p>
            </div>
        `;

        return;
    }

    const club = currentCareer.club;

    const stadium = stadiums.find(s => s.id === club.stadiumId);

    document.getElementById("content").innerHTML = `

    <div class="screen">

        <h2>${club.name}</h2>

        <p><b>Manager</b> : ${currentCareer.manager}</p>

        <p><b>Country</b> : ${club.country}</p>

        <p><b>City</b> : ${club.city}</p>

        <p><b>Home Stadium</b> : ${stadium.name}</p>

        <p><b>Capacity</b> : ${stadium.capacity.toLocaleString()}</p>

        <p><b>Budget</b> : ₹${club.budget} M</p>

        <p><b>Fans</b> : ${club.fans.toLocaleString()}</p>

        <p><b>Reputation</b> : ${"★".repeat(club.reputation)}</p>

        <hr>

        <button onclick="playNextMatch()">
            ▶ Play Next Match
        </button>

        <button onclick="showLeagueTable()">
            🏆 League Table
        </button>

        <button onclick="showFixtures()">
            📅 Fixtures
        </button>

        <button onclick="showSquad()">
            👥 Squad
        </button>

        <button onclick="showClubInfo()">
            🏟 Club
        </button>

    </div>

    `;

}