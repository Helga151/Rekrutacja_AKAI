/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
const suggestions = document.querySelector('.suggestions');
const pokemonName = document.querySelector("#pokemon-name");

function renderPokemons(pokemons) {
    // uzupełnij tutaj
    const html = pokemons.map(pokemon => {
        const id = pokemon.id;
        const name = pokemon.name;
        const image = pokemon.image;
        const type = pokemon.types;
        return `
            <li>
                <span> ${id}: ${name} <img class="pokemon" src="${image}"> - ${type} </span> 
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
// renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
    // uzupełnij tutaj
    // zwróć odfiltrowaną tablicę pokemonów
    //console.log(pokemonName.value); 
    return pokemons.filter(pokemon => {
        //RegExp - regular expression - znalezienie lub zmiana ciągu znaków w innym znaku
        const regex = new RegExp(pokemonName.value, 'gi'); //g - global, i - insensitive, regardless of upper and lower case
        return pokemon.name.match(regex);
    });
}

const form = document.querySelector("form");

function submitForm(event) {
    event.preventDefault();
    // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
    renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
