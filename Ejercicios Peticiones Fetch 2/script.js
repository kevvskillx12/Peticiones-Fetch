function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonQuery').value.toLowerCase().trim();
    if (pokemonName === '') {
        alert('Por favor ingresa un nombre de Pokémon para buscar.');
        return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon.');
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data);
        })
        .catch(error => {
            alert(error.message);
        });
}

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name.toUpperCase()}</h5>
                    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}">
                    <p class="card-text">Altura: ${pokemon.height / 10} m</p>
                    <p class="card-text">Peso: ${pokemon.weight / 10} kg</p>
                    <p class="card-text">Tipo(s): ${pokemon.types.map(type => type.type.name).join(', ')}</p>
                </div>
            </div>
        </div>
    `;
}
