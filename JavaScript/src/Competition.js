class Competition {
	constructor(newName, newYear) {
		this.name = newName
		this.year = newYear
		this.allMyTeams = []
		this.allMyGames = []
	}
	addTeam(new_Rank, new_Name) {
		let newTeam = new Team(new_Rank, new_Name)
		this.allMyTeams.push(newTeam)
	}
	addGame(new_Week, new_HomeTeamRank, new_AwayTeamRank, new_DateTime, new_Venue, new_City) {
		let newGame = new Game(new_Week, new_HomeTeamRank, new_AwayTeamRank, new_DateTime, new_Venue, new_City)
		this.allMyGames.push(newGame)
	
	}
	sortTeams () {
		this.allMyTeams.sort(function (a, b) {
			if (a.rank < b.rank) {
				return -1
			}
			if (a.rank > b.rank) {
				return 1
			}
			return 0
		})
	}
	
	
	getAll() {
		let result = ""
		result += this.getTeams()
		result += this.getGames()

		return result
	}
	getTeams() {
		let result = 'ICC Cricket World Cup 2019 ' + View.NEWLINE()
		result += 'TEAMS' + View.NEWLINE()
		for (let aTeam of this.allMyTeams) {
			result += aTeam.rank + View.SPACE() + aTeam.name + View.NEWLINE()
			if(aTeam.rank === 10 ) {
				
				
			}
		}
		result += View.NEWLINE()
		return result
	}
	getGames() {
		let result = 'GAMES' + View.NEWLINE()
		for (let aGame of this.allMyGames) {
			let homeTeam = this.findTeams(aGame.homeTeamRank).name
			let awayTeam = this.findTeams(aGame.awayTeamRank).name
			let venue = aGame.venue
			let city = aGame.city
			let date = new Date(aGame.dateTime).toDateString()
			let time = new Date(aGame.dateTime).toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric", timezone: "UTC"})
			result += date + View.SPACE() + time + View.SPACE() + homeTeam + ' vs ' + awayTeam + View.SPACE() + venue + View.SPACE() + city + View.NEWLINE()
		}
		result += View.NEWLINE()
		return result
	}
	findTeams(aRank) {
		let foundTeam = null
		for (let aTeam of this.allMyTeams) {
			if (aTeam.rank ===aRank) {
				foundTeam = aTeam
				break
			}
		}
		return foundTeam
	}
	
	
	
}