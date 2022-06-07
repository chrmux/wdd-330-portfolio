const pokeAPI = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon(url) {

fetch(url)
.then(response => response.json())
.then(json => {
    displayData(json);
    editNextPrev(json);
 })
.catch(error => console.log("Error: " + error))

} 


function editNextPrev(res) {
    console.log(res);
    if (res.previous != null) {
        const prev = res.previous;
        let prevButton = document.getElementById('previous');
        prevButton.onclick = function() {getPokemon(prev)};
    }
    if (res.next != null) {
        const next = res.next;
        let nextButton = document.getElementById('next');
        nextButton.onclick = function() {getPokemon(next)};
    }
}

function displayData(res) {
    const array = res.results;
    const pokemonList = document.querySelector('#pokedex');
    pokemonList.innerHTML = "";
    array.forEach(element => {
        let item = document.createElement('li');
        let name = document.createElement('h3');
        let button = document.createElement('button');
        button.id = element.name;
        button.addEventListener('click', function() {getDetails(this.id, pokeAPI)}, false);
        button.button = element.url;
        name.innerText = element.name;
        button.appendChild(name);
        item.appendChild(button);
        pokemonList.appendChild(item);
    });

    function getDetails(id, url) {
        fetch(url + "/" + id)
        .then(console.log(url + "/" + id));
    }
    
}

const getPokemonDetails = (url, listUrl) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  document.getElementById('prev').onclick = () => {
    return false;
  }
  
  document.getElementById('next').onclick = () => {
    return false;
  }
  
  fetch(url)
       .then( (response) => {
          const data = response.data;
    
          const nameDiv = document.createElement('div');
          
          nameDiv.appendChild(
            document.createTextNode(data.species.name)
          );
          nameDiv.className = 'pokeName';
          container.appendChild(nameDiv);
    
          const img = document.createElement('img');
    
          img.src = data.sprites.front_default;
          img.className = 'pokePic';
          container.appendChild(img);
    
          const statsDiv = document.createElement('div');
    
          statsDiv.className = 'stats';
          statsDiv.appendChild(
            document.createTextNode("Height: " + data.height + " || Weight: " + data.weight)
          );
          container.appendChild(statsDiv);
    
          const button = document.createElement('div');
    
          button.className = 'back';
          button.appendChild(
            document.createTextNode("Back")
          );
          button.onclick = () => { getPokemonList(listUrl) };
          container.appendChild(button);
       })
       .catch( (error) => {
          throw error;
       });
}

const getPokemonList = (url) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  fetch(url)
       .then( (response) => {
          const data = response.data.results;
          const prev = response.data.previous;
          const next = response.data.next;
    
          data.map( (pokemon) => {
            const div = document.createElement('div');
            const text = document.createTextNode(pokemon.name);
            
            div.appendChild(text);
            div.className += 'pokeList';
            div.onclick = () => { getPokemonDetails(pokemon.url, url); };
            container.appendChild(div);
          });
    
          if (prev) {
            document.getElementById('prev').onclick = () => {
              getPokemonList(prev);
            }
          }
    
          if (next) {
            document.getElementById('next').onclick = () => {
              getPokemonList(next);
            }
          }
       })
       .catch( (error) => {
          throw error;
       });
}