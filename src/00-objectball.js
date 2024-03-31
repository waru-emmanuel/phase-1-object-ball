
function gameObject() {
    const obj = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assits: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evens": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assits: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assits: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assits: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assits: 2,
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
            assits: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assits: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assits: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assits: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Hayword": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assits: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
    return obj;
  }

const game = gameObject()

const homePlayers = game.home.players

const awayPlayers = game.away.players

const allPlayers = players()

function teamColors(input){

    const colors = []
    
    if (input === homeTeamName()){
    
    colors.push (game.home.colors)
    
    }
    
    if (input === awayTeamName()){
    
    colors.push (game.away.colors)
    
    }
    
    return colors
    
    }

    function teamScore(team){

        let score = 0
        
        for (const player in team){
        
        score += (team[player].points)
        
        }
        
        return score
        
        }

    function winningTeam(){

            let homeTeamPoints = teamScore(homePlayers)
            
            let awayTeamPoints = teamScore(awayPlayers)
            
            let winningTeam;
            
            if (homeTeamPoints > awayTeamPoints) {
            
            winningTeam = game.home.teamName
            
            }
            
            else {
            
            winningTeam = game.away.teamName
            
            }
            
            return winningTeam
            
        }
        
           function mostPointsScored(players){
            
            var pointsScored = 0;
            var result;
             var result;
               for (var i = 0; i < players.length; i++) {
                 if (players[i].mostPointsScored > pointsScored) {
             result = players[i];
             pointsScored = players[i].mostPointsScored;
             }
          }
         return result;
       }  
       
          
              
