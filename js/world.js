function showWorld() {

content.innerHTML = `

<div class="card">

<h2>🌍 World Football</h2>

<p>Select a country.</p>

</div>

<div id="countryList"></div>

`;

let html = "";

countries.forEach(country => {

html += `

<div class="card">

<h3>${country.flag} ${country.name}</h3>

<p>

League : ${country.league}

</p>

<p>

Clubs : ${country.clubCount}

</p>

<button class="bigButton"
onclick="openCountry(${country.id})">

Open

</button>

</div>

`;

});

document.getElementById("countryList").innerHTML = html;

}

function openCountry(id){

const country = countries.find(c=>c.id===id);

content.innerHTML = `

<div class="card">

<h2>${country.flag} ${country.name}</h2>

<p><b>League</b></p>

<p>${country.league}</p>

<br>

<p>Total Clubs : ${country.clubCount}</p>

<p>Continental Zone : ${country.continent}</p>

<br>

<button class="bigButton"
onclick="showWorld()">

⬅ Back

</button>

</div>

`;

}