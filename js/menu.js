// ===============================
// Football Empire India
// Menu Module
// ===============================

function initializeMenu() {

    document.getElementById("homeBtn").addEventListener("click", () => {
        showHome();
    });

    document.getElementById("clubsBtn").addEventListener("click", () => {
        showClubSelection();
    });

    document.getElementById("careerBtn").addEventListener("click", () => {
        continueCareer();
    });

    document.getElementById("leagueBtn").addEventListener("click", () => {

        content.innerHTML = `
            <div class="card">
                <h3>National League</h3>

                <p>
                    League fixtures and table will arrive in Build 3.
                </p>
            </div>
        `;

    });

  document.getElementById("worldBtn").addEventListener("click",showWorld);

    document.getElementById("settingsBtn").addEventListener("click", () => {

        content.innerHTML = `
            <div class="card">
                <h3>Settings</h3>

                <button class="bigButton" onclick="deleteCareer()">
                    Delete Career
                </button>
            </div>
        `;

    });

}