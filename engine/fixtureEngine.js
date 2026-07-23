function generateLeagueFixtures(clubList){

    let teams=[...clubList];

    if(teams.length%2!==0){
        teams.push({
            id:0,
            name:"BYE"
        });
    }

    const rounds=[];
    const totalRounds=teams.length-1;
    const half=teams.length/2;

    let rotation=[...teams];

    for(let r=0;r<totalRounds;r++){

        let matches=[];

        for(let i=0;i<half;i++){

            const home=rotation[i];
            const away=rotation[rotation.length-1-i];

            if(home.id!==0 && away.id!==0){

                matches.push({
                    home:home,
                    away:away,
                    played:false,
                    homeGoals:null,
                    awayGoals:null
                });

            }

        }

        rounds.push(matches);

        const fixed=rotation[0];

        const moved=rotation.pop();

        rotation.splice(1,0,moved);

        rotation[0]=fixed;

    }

    const secondHalf=[];

    rounds.forEach(round=>{

        let reverse=[];

        round.forEach(match=>{

            reverse.push({

                home:match.away,

                away:match.home,

                played:false,

                homeGoals:null,

                awayGoals:null

            });

        });

        secondHalf.push(reverse);

    });

    return [...rounds,...secondHalf];

}