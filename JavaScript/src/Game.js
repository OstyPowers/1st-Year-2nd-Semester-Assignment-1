class Game {
	constructor (new_Week, new_HomeTeamRank, new_AwayTeamRank, new_DateTime, new_Venue, new_City) {
		this.week = new_Week
		this.homeTeamRank = new_HomeTeamRank
		this.awayTeamRank = new_AwayTeamRank
		this.dateTime = new_DateTime
		this.venue = new_Venue
		this.city = new_City
	}
	toString () {
    let result = `${this.week} ${this.homeTeamRank} ${this.awayTeamRank} ${this.dateTime} ${this.venue} ${this.city}`
    return result
  }
}