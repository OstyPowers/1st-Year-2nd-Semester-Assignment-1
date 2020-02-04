class Controller {
  static getJSON () {
    /* team data is from http://www.mitre10cup.co.nz/Competition/Index/3747
     * game data is from http://www.mitre10cup.co.nz/Fixtures
    */
    return {
        "teams": [
          {
            "rank": 1,
            "name": "England",
          },
          {
            "rank": 2,
            "name": "India",
          },
          {
            "rank": 3,
            "name": "New Zealand",
          },
          {
            "rank": 4,
            "name": "South Africa",
          },
          {
            "rank": 5,
            "name": "Australia",
		  },
          {
            "rank": 6,
            "name": "Pakistan",
          },
          {
            "rank": 7,
            "name": "Bangladesh",
          },
          {
            "rank": 8,
            "name": "Sri Lanka",
          },
          {
            "rank": 9,
            "name": "West Indies",
          },
          {
            "rank": 10,
            "name": "Afghanistan",
          },
          
        ],
        "games": [
          { 
            "week": 1,
            "homeTeamRank": 1,
            "awayTeamRank": 4,
            "dateTime": "2019-05-30T10:30:00.0000",
			"venue": "The Oval",
            "city": "London" 
          },
          {
            "week": 2,
            "homeTeamRank": 6,
            "awayTeamRank": 9,
            "dateTime": "2019-05-31T10:30:00.0000",
			"venue": "Trent Bridge",
			"city": "Nottingham"
          },
          {
            "week": 3,
            "homeTeamRank": 3,
            "awayTeamRank": 8,
            "dateTime": "2019-06-01T10:30:00.0000",
			"venue": "Sophia Gardens",
			"city": "Cardiff"
          },
          {
            "week": 4,
            "homeTeamRank": 5,
            "awayTeamRank": 10,
            "dateTime": "2019-06-01T13:30:00.0000",
			"venue": "County Ground",
			"city": "Bristol"
          },
          {
            "week": 5,
            "homeTeamRank": 7,
            "awayTeamRank": 4,
            "dateTime": "2019-06-02T10:30:00.0000",
			"venue": "The Oval",
			"city": "London"
          },
          {
            "week": 6,
            "homeTeamRank": 1,
            "awayTeamRank": 6,
            "dateTime": "2019-06-03T10:30:00.0000",
			"venue": "Trent Bridge",
			"city": "Nottingham"
          },
          {
            "week": 7,
            "homeTeamRank": 10,
            "awayTeamRank": 8,
            "dateTime": "2019-06-04T10:30:00.000",
			"venue": "Sophia Gardens",
			"city": "Cardiff"
          },
          {
            "week": 8,
            "homeTeamRank": 2,
            "awayTeamRank": 4,
            "dateTime": "2019-06-05T10:30:00.0000",
			"venue": "Rose Bowl",
			"city": "Southampton"
          },
          {
            "week": 9,
            "homeTeamRank": 7,
            "awayTeamRank": 3,
            "dateTime": "2019-06-05T13:30:00.0000",
			"venue": "The Oval",
			"city": "London"
          },
          {
            "week": 10,
            "homeTeamRank": 5,
            "awayTeamRank": 9,
            "dateTime": "2019-06-06T10:30:00.0000",
			"venue": "Trent Bridge",
			"city": "Nottingham"
          },
          {
            "week": 11,
            "homeTeamRank": 6,
            "awayTeamRank": 8,
            "dateTime": "2019-06-07T10:30:00.0000",
			"venue": "County Ground",
			"city": "Bristol"
          },
          {
            "week": 12,
            "homeTeamRank": 1,
            "awayTeamRank": 7,
            "dateTime": "2019-06-08T10:30:00.0000",
			"venue": "Sophia Gardens",
			"city": "Cardiff"
          },
          {
            "week": 13,
            "homeTeamRank": 10,
            "awayTeamRank": 3,
            "dateTime": "2019-06-08T13:30:00.0000",
			"venue": "County Ground",
			"city": "Taunton"
          },
          {
            "week": 14,
            "homeTeamRank": 5,
            "awayTeamRank": 2,
            "dateTime": "2019-06-09T10:30:00.0000",
			"venue": "The Oval",
			"city": "London"
          },
          {
            "week": 15,
            "homeTeamRank": 4,
            "awayTeamRank": 9,
            "dateTime": "2019-06-10T10:30:00.0000",
			"venue": "Rose Bowl",
			"city": "Southampton"
          },
          {
            "week": 16,
            "homeTeamRank": 7,
            "awayTeamRank": 8,
            "dateTime": "2019-06-11T10:30:00.0000",
			"venue": "County Ground",
			"city": "Bristol"
          },
          {
            "week": 17,
            "homeTeamRank": 5,
            "awayTeamRank": 6,
            "dateTime": "2019-06-12T10:30:00.0000",
			"venue": "County Ground",
			"city": "Taunton"
          },
          {
            "week": 18,
            "homeTeamRank": 2,
            "awayTeamRank": 3,
            "dateTime": "2019-06-13T10:30:00.0000",
			"venue": "Trent Bridge",
			"city": "Nottingham"
          },
          {
            "week": 19,
            "homeTeamRank": 1,
            "awayTeamRank": 9,
            "dateTime": "2019-06-14T10:30:00.0000",
			"venue": "Rose Bowl",
			"city": "Southampton"
          },
          {
            "week": 20,
            "homeTeamRank": 5,
            "awayTeamRank": 8,
            "dateTime": "2019-06-15T10:30:00.0000",
			"venue": "The Oval",
			"city": "London"
          },
          {
            "week": 21,
            "homeTeamRank": 10,
            "awayTeamRank": 4,
            "dateTime": "2019-06-15T13:30:00.0000",
			"venue": "Sophia Gardens",
			"city": "Cardiff"
          },
          {
            "week": 22,
            "homeTeamRank": 2,
            "awayTeamRank": 6,
            "dateTime": "2019-06-16T10:30:00.0000",
			"venue": "Old Trafford",
			"city": "Manchester"
          },
          {
            "week": 23,
            "homeTeamRank": 7,
            "awayTeamRank": 9,
            "dateTime": "2019-06-17T10:30:00.0000",
			"venue": "County Ground",
			"city": "Taunton"
          },
          {
            "week": 24,
            "homeTeamRank": 1,
            "awayTeamRank": 10,
            "dateTime": "2019-06-18T10:30:00.0000",
			"venue": "Old Trafford",
			"city": "Manchester"
          },
          {
            "week": 25,
            "homeTeamRank": 3,
            "awayTeamRank": 4,
            "dateTime": "2019-06-19T10:30:00.0000",
			"venue": "Edgbaston",
			"city": "Birmingham"
          },
          {
            "week": 26,
            "homeTeamRank": 5,
            "awayTeamRank": 7,
            "dateTime": "2019-06-20T10:30:00.0000",
			"venue": "Trent Bridge",
			"city": "Nottingham"
          },
          {
            "week": 27,
            "homeTeamRank": 1,
            "awayTeamRank": 8,
            "dateTime": "2019-06-21T10:30:00.0000",
			"venue": "Headingly",
			"city": "Leeds"
          },
          {
            "week": 28,
            "homeTeamRank": 10,
            "awayTeamRank": 2,
            "dateTime": "2019-06-22T10:30:00.0000",
			"venue": "Rose Bowl",
			"city": "Southampton"
          },
          {
            "week": 29,
            "homeTeamRank": 3,
            "awayTeamRank": 9,
            "dateTime": "2019-06-22T13:30:00.0000",
			"venue": "Old Trafford",
			"city": "Manchester"
          },
          {
            "week": 30,
            "homeTeamRank": 6,
            "awayTeamRank": 4,
            "dateTime": "2019-06-23T10:30:00.0000",
			"venue": "Lords",
			"city": "London"
          },
          {
            "week": 31,
            "homeTeamRank": 10,
            "awayTeamRank": 7,
            "dateTime": "2019-06-24T10:30:00.0000",
			"venue": "Rose Bowl",
			"city": "Southampton"
          },
          {
            "week": 32,
            "homeTeamRank": 1,
            "awayTeamRank": 5,
            "dateTime": "2019-06-25T10:30:00.0000",
			"venue": "Lords",
			"city": "London"
          },
          {
            "week": 33,
            "homeTeamRank": 3,
            "awayTeamRank": 6,
            "dateTime": "2019-06-26T10:30:00.0000",
			"venue": "Edgbaston",
			"city": "Birmingham"
          },
          {
            "week": 34,
            "homeTeamRank": 2,
            "awayTeamRank": 9,
            "dateTime": "2019-06-27T10:30:00.0000",
			"venue": "Old Trafford",
			"city": "Manchester"
          },
          {
            "week": 35,
            "homeTeamRank": 4,
            "awayTeamRank": 8,
            "dateTime": "2019-06-28T10:30:00.0000",
			"venue": "Riverside Ground",
			"city": "Chester-le-Street"
          },
          {
            "week": 36,
            "homeTeamRank": 10,
            "awayTeamRank": 6,
            "dateTime": "2019-06-29T10:30:00.0000",
			"venue": "Headingly",
			"city": "Leeds"
          },
          {
            "week": 37,
            "homeTeamRank": 3,
            "awayTeamRank": 5,
            "dateTime": "2019-06-29T13:30:00.0000",
			"venue": "Lords",
			"city": "London"
          },
          {
            "week": 38,
            "homeTeamRank": 1,
            "awayTeamRank": 2,
            "dateTime": "2019-06-30T10:30:00.0000",
			"venue": "Edgbaston",
			"city": "Birmingham"
          },
          {
            "week": 39,
            "homeTeamRank": 8,
            "awayTeamRank": 9,
            "dateTime": "2019-07-01T10:30:00.0000",
			"venue": "Riverside Ground",
			"city": "Chester-le-Street"
          },
          {
            "week": 40,
            "homeTeamRank": 7,
            "awayTeamRank": 2,
            "dateTime": "2019-07-02T10:30:00.0000",
			"venue": "Edgbaston",
			"city": "Birmingham"
          },
          {
            "week": 41,
            "homeTeamRank": 1,
            "awayTeamRank": 3,
            "dateTime": "2019-07-03T10:30:00.0000",
			"venue": "Riverside Ground",
			"city": "Chester-le-Street"
          },
          {
            "week": 42,
            "homeTeamRank": 10,
            "awayTeamRank": 9,
            "dateTime": "2019-07-04T10:30:00.0000",
			"venue": "Headingly",
			"city": "Leeds"
          },
          {
            "week": 43,
            "homeTeamRank": 7,
            "awayTeamRank": 6,
            "dateTime": "2019-07-05T10:30:00.0000",
			"venue": "Lords",
			"city": "London"
          },
          {
            "week": 44,
            "homeTeamRank": 2,
            "awayTeamRank": 8,
            "dateTime": "2019-07-06T10:30:00.0000",
			"venue": "Headingly",
			"city": "Leeds"
          },
          {
            "week": 45,
            "homeTeamRank": 5,
            "awayTeamRank": 4,
            "dateTime": "2019-07-06T13:30:00.0000",
			"venue": "Old Trafford",
			"city": "Manchester"
          },
          
        ]
    }
  }
  static setup () {
    let the2019Competition = new Competition('ICC Cricket World Cup', 2019)
    let competitionData = Controller.getJSON()
    
    let allTeams = competitionData.teams
    for (let aTeam of allTeams) {
      the2019Competition.addTeam(aTeam.rank, aTeam.name)
    }
  
    let allGames = competitionData.games
    for (let aGame of allGames) {
      the2019Competition.addGame(aGame.week, aGame.homeTeamRank, aGame.awayTeamRank, aGame.dateTime, aGame.venue, aGame.city)
    }
  
    return the2019Competition
  }
}