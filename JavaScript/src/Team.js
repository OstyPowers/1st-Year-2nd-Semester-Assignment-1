class Team {
	constructor(new_Rank, new_Name) {
		this.rank = new_Rank
		this.name = new_Name
		
	}
	toString () {
    let result = `${this.rank} ${this.name}`
    return result
  }
	
}