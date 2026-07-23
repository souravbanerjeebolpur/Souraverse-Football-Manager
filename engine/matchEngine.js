// =======================================
// Souraverse Football Manager
// Universal Match Engine
// Version 0.1 Alpha
// =======================================

let currentMatch = null;

// ---------------------------------------
// Create Match
// ---------------------------------------

function createMatch(matchData){

    currentMatch = {

        competition : matchData.competition,

        homeClub : matchData.homeClub,
        awayClub : matchData.awayClub,

        stadium : matchData.stadium,

        playable : matchData.playable,

        matchLength : matchData.matchLength || 90,

        currentMinute : 0,

        half : 1,

        status : "Not Started",

        homeGoals : 0,
        awayGoals : 0,

        possessionHome : 50,
        possessionAway : 50,

        shotsHome : 0,
        shotsAway : 0,

        shotsOnTargetHome : 0,
        shotsOnTargetAway : 0,

        yellowHome : 0,
        yellowAway : 0,

        redHome : 0,
        redAway : 0,

        commentary : [],

        events : [],

        finished : false

    };

}

// ---------------------------------------
// Start Match
// ---------------------------------------

function startMatch(matchData){

    createMatch(matchData);

    if(currentMatch.playable){

        startPlayableMatch();

    }else{

        simulateMatch();

    }

}

// ---------------------------------------
// Playable Match
// ---------------------------------------

function startPlayableMatch(){

    currentMatch.status = "First Half";

    showPlayableMatch();

}

// ---------------------------------------
// Simulated Match
// ---------------------------------------

function simulateMatch(){

    currentMatch.status = "Simulating";

    simulateEntireMatch();

}

// ---------------------------------------
// Half Time
// ---------------------------------------

function startSecondHalf(){

    currentMatch.half = 2;

    currentMatch.status = "Second Half";

    showPlayableMatch();

}

// ---------------------------------------
// Finish Match
// ---------------------------------------

function finishMatch(){

    currentMatch.finished = true;

    currentMatch.status = "Finished";

    showFullTimeScreen();

}

// ---------------------------------------
// Helper Functions
// ---------------------------------------

function addGoal(team){

    if(team=="home"){

        currentMatch.homeGoals++;

    }else{

        currentMatch.awayGoals++;

    }

}

function addComment(text){

    currentMatch.commentary.push(text);

}

function addEvent(event){

    currentMatch.events.push(event);

}

function getScore(){

    return currentMatch.homeGoals +
    " - " +
    currentMatch.awayGoals;

}