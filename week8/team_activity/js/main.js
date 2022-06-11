const baseApiUrl = "https://pokeapi.co/api/v2/pokemon/";
const maxPokeNumber = 898;

// Elements in the DOM
const previousUrl = "https://pokeapi.co/api/v2/pokemon/";
const nextUrl = '';
const formNumber = document.querySelector("#form-number");
const formRandom = document.querySelector("#form-random");
const list = document.querySelector("#list");

formNumber.addEventListener("submit", (e) => {
	e.preventDefault();

	const inputNumber = e.currentTarget.elements["input-number"];

	// Sanitize and store the number that the user has entered
	const pokeNumber = parseInt(inputNumber.value);

	// Clear the input value
	inputNumber.value = "";

	// Remove current Pokémon
	list.querySelectorAll(":scope > *").forEach((pokemon) => pokemon.remove());

	// Fetch the Pokémon data using the API
	getPokemonData(pokeNumber);
});

formRandom.addEventListener("submit", (e) => {
	e.preventDefault();

	// Remove current Pokémon
	list.querySelectorAll(":scope > *").forEach((pokemon) => pokemon.remove());

	// Fetch the Pokémon data using the API
	getPokemonData(getRandomIntInclusive(1, maxPokeNumber));
});
async function getJSON(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        const fetchJson = await response.json();
        return fetchJson;
      }
    } catch (error) {
      console.log(error);
    }
  }
const baseUrl = baseApiUrl;
    try {
      fetch(baseUrl)
        .then(response => {
          const responseJson = response.json()
          return responseJson
        })
        .then(data => {
          const pokemons = data.results
          pokemons.forEach(pokemon => {
            document.getElementById('pokemons')
              .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'>${pokemon.name}</li>`)
          })
        })
        .catch(error => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }

function getPokemonData(idNumber) {
	const requestURL = baseApiUrl + idNumber;

	fetch(requestURL)
		.then((response) => response.json())
		.then((pokemonData) => {
			const pokemonElement = createPokemon(pokemonData);
			return addPokemonToList(pokemonElement, list);
		})
		.catch((error) => console.log(error));
}

function createPokemon({name, sprites, types }) {
	// Figure as a container
	const pokemon = document.createElement("figure");

	// Image
	const image = document.createElement("img");
	image.src = `${sprites["other"]["official-artwork"]["front_default"]}`;
	image.alt = `Pokémon number ${id}, called ${name}`;
	image.width = "475";
	image.height = "475";
	pokemon.append(image);

	// Figcaption for the info
	const info = document.createElement("figcaption");
	info.classList.add("l-stack-xxs");

	const infoNumber = document.createElement("p");
	infoNumber.innerText = id;
	info.append(infoNumber);

	const infoName = document.createElement("p");
	infoName.innerText = name[0].toUpperCase() + name.slice(1);
	infoName.classList.add("text-500", "weight-bold");
	info.append(infoName);

	const infoTypes = document.createElement("ul");
	infoTypes.setAttribute("role", "list");
	infoTypes.classList.add("l-cluster-xs", "text-300");
	infoTypes.setAttribute("data-layout", "justify-center");
	types.forEach((type) => {
		const typeElement = document.createElement("li");
		typeElement.innerText = type["type"]["name"];
		typeElement.classList.add("pokemon-type");
		infoTypes.append(typeElement);
	});
	info.append(infoTypes);

	pokemon.append(info);

	return pokemon;
}

function addPokemonToList(pokemon, list) {
	const li = document.createElement("li");
	li.append(pokemon);
	list.append(li);
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
	return randomNumber;
}
