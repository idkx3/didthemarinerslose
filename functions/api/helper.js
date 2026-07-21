export async function PopulateList(thingDiv) {
          let today = new Date();
	  const thingDiv = document.getElementById("thing");
	  let tenDaysAgo = new Date();
	  tenDaysAgo.setDate(today.getDate()-10);
          tenDaysAgo = tenDaysAgo.toLocaleDateString("en-CA");
          today = today.toLocaleDateString("en-CA");
          
	
          let gameList = await fetch("https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=136&startDate="+tenDaysAgo+"&endDate="+today);
          gameList = await gameList.json();

         const gameDates = gameList.dates;
         for(let i = 0; i<gameDates.length; i++) {
		const thatDaysGames = gameDates[i].games;
                for(let j = 0; j<thatDaysGames.length; j++) {
                const gameP = document.createElement("p");
		const homeTeamName = thatDaysGames[j].teams.home.team.name;
		const awayTeamName = thatDaysGames[j].teams.away.team.name;
        
		gameP.textContent = homeTeamName + " vs " + awayTeamName;
		
                thingDiv.appendChild(gameP);

              }
	

	}
          
}
