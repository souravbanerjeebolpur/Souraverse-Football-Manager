function createLeagueTable(clubList){

    let table=[];

    clubList.forEach(club=>{

        table.push({

            club:club,

            played:0,

            wins:0,

            draws:0,

            losses:0,

            goalsFor:0,

            goalsAgainst:0,

            goalDifference:0,

            points:0

        });

    });

    return table;

}

function findClub(table,clubId){

    return table.find(row=>row.club.id===clubId);

}

function updateLeagueTable(table,match){

    const home=findClub(table,match.home.id);

    const away=findClub(table,match.away.id);

    home.played++;
    away.played++;

    home.goalsFor+=match.homeGoals;
    home.goalsAgainst+=match.awayGoals;

    away.goalsFor+=match.awayGoals;
    away.goalsAgainst+=match.homeGoals;

    home.goalDifference=home.goalsFor-home.goalsAgainst;
    away.goalDifference=away.goalsFor-away.goalsAgainst;

    if(match.homeGoals>match.awayGoals){

        home.wins++;
        away.losses++;

        home.points+=3;

    }
    else if(match.homeGoals<match.awayGoals){

        away.wins++;
        home.losses++;

        away.points+=3;

    }
    else{

        home.draws++;
        away.draws++;

        home.points++;
        away.points++;

    }

    sortLeagueTable(table);

}

function sortLeagueTable(table){

    table.sort((a,b)=>{

        if(b.points!==a.points)
            return b.points-a.points;

        if(b.goalDifference!==a.goalDifference)
            return b.goalDifference-a.goalDifference;

        return b.goalsFor-a.goalsFor;

    });

}