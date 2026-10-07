function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
//retrieve player information
//1.points scored
function numPointsScored(playerName) {
    const data = gameObject();

    for (const teamKey in data) {
        const players = data[teamKey].players;
        if (players[playerName]) {
            return players[playerName].points;
        }
    }
}
//2.shoesize
function shoeSize(playerName) {
    const data = gameObject();

    for (const teamKey in data) {
        const players = data[teamKey].players;
        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
}
//team information
//3.teamColour
function teamColors(teamName) {
    const data = gameObject();
    for (const teamKey in data) {
        const team = data[teamKey];
        if (team.teamName === teamName){
            return team.colors;
        }
    }
}
//4.teamnames
function teamNames() {
    const data = gameObject();
    const names = [];
    for (const teamKey in data){
        names.push(data[teamKey].teamName);
    }
    return names;
}
//player numbers and stats
//5.playerNumbers
function playerNumbers(teamName) {
    const data = gameObject();
    const numbers = [];

   for (const teamKey in data) {
    const team = data[teamKey];

    if (team.teamName === teamName) {
        const players = team.players;
        
        for (const playerName in players) {
            numbers.push(players[playerName].number)
        }
        return numbers;
    }
   }
    }
    //6.playerstats
    function playerStats(playerName) {
        const data = gameObject();

    for (const teamKey in data) {
        const players = data[teamKey].players;

        if (players[playerName]) {
            return players[playerName];
        }
    }
}
//bigShoeRebounds
function bigShoeRebounds() {
    const data = gameObject();
    let largestShoeSize = 0;
    let matchingRebounds = 0;

    for (const teamKey in data) {
        const players = data[teamKey].players;

        for (const playerName in players) {
            const player = players [playerName];

            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                matchingRebounds = player.rebounds;
            }
        }
    }
    return matchingRebounds;
}
