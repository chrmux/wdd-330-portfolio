//fetch('https://example.com', {
// credentials: 'include'
//});

//sync function postData(url = 'https://swapi.dev/api/people', data = {}) {
// Default options are marked with *
//const response = await fetch(url, {
//method: 'POST', // *GET, POST, PUT, DELETE, etc.
let nextUrl = null;
let previousUrl = null;
let pageCount = null;
async function getSwapi(url) {
  if (url === null) {
    return;
  }

  fetch(url)
    .then(response => response.json())
    .then(json => {
      //displayData(json);
      //editNextPrev(json);
      pageCount = json.count / 114;
      pageCount = Math.ceil(pageCount);
      displayPagination();
      pokemon = json.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
          1}.png`,}));
      // console.log(json);
      nextUrl = json.next;
      previousUrl = json.previous;
      display(json.results)
    })
    .catch(error => console.log("Error: " + error))

}
//create list of people display function people
//createElement(tagName)
// createElement(tagName, options)
function display(people) {
  let table = document.getElementById("listPeople");
  table.innerHTML = '';
  for (let i = 0; i < people.length; i++) {
    let pokemon = people[i];
    let row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.innerHTML = pokemon.name;
    row.appendChild(cell);
    row.addEventListener('click', event => {
      displayDetails(pokemon);
    });

    table.appendChild(row);
  }
}
//next to get the new data 
function next() {
  getSwapi(nextUrl);
}

function previous() {
  getSwapi(previousUrl);
}

function displayDetails(details) {
  //console.log(details);
  document.getElementById("name").innerHTML = details.name;
  document.getElementById("birthday").innerHTML = details.type;
  document.getElementById("height").innerHTML = details.img ;
    const pokemonHTMLString = pokemon
      .map(
        pokeman =>
          ` <li class="card"> <img class="card-image" src="${pokeman.image}"/> <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2> </a> </li> `
      )
      .join("");
    pokedex.innerHTML = pokemonHTMLString;
  };

function displayPagination() {
  let span = document.getElementById('pages');
  span.innerHTML = '';
  for (let i = 0; i < pageCount; i++) {
    let a = document.createElement('a');
    let page = i + 1;
    a.innerHTML = page;
    a.addEventListener('click', event => {
      loadPage(page);
    });
    span.appendChild(a);
  }
}

function loadPage(page) {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=60" + page;
  getSwapi(url);
}