function playMatch(match, leagueTable) {

    const homeStrength = match.home.reputation + Math.random() * 2 + 1;
    const awayStrength = match.away.reputation + Math.random() * 2;

    let homeGoals = 0;
    let awayGoals = 0;

    for (let i = 0; i < homeStrength; i++) {
        if (Math.random() < 0.28) homeGoals++;
    }

    for (let i = 0; i < awayStrength; i++) {
        if (Math.random() < 0.25) awayGoals++;
    }

    match.homeGoals = homeGoals;
    match.awayGoals = awayGoals;
    match.played = true;

    updateLeagueTable(leagueTable, match);

    return {

        homeClub: match.home.name,

        awayClub: match.away.name,

        homeGoals,

        awayGoals,

        attendance: generateAttendance(match),

        playerOfTheMatch: generatePlayerOfTheMatch(match)

    };

}

function generateAttendance(match){

    const capacity = match.home.capacity || 25000;

    const fanFactor = match.home.fans / 250000;

    let attendance = Math.floor(

        capacity * (0.45 + fanFactor * Math.random())

    );

    attendance = Math.min(attendance, capacity);

    return attendance;

}

function generatePlayerOfTheMatch(match){

    const names=[

        "A. Roy",

        "S. Khan",

        "R. Das",

        "P. Bose",

        "A. Singh",

        "K. Sharma",

        "M. Ali",

        "D. Sen",

        "T. Paul",

        "J. Fernandes"

    ];

    return names[Math.floor(Math.random()*names.length)];

}