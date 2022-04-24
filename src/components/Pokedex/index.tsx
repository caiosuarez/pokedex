import React, { useEffect, useState } from 'react';
import { getPokemons, getPokemonData } from '../../api';

// import { Container } from './styles';

interface fullPokemon {
    abilities: [];
    base_experience: number;
    forms: [];
    game_indices: [];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: [];
    name: string;
    order: number;
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string;
    };
    stats: [];
    types: [];
    weight: number;
}

interface pokemon {
    name: string;
    url: string;
}

function Pokedex() {
    const [pokemons, setPokemons] = useState<fullPokemon[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchPokemon = async () => {
        const data = await getPokemons();
        const promises = data.results.map(async (pokemon: pokemon) =>
            getPokemonData(pokemon.url)
        );
        const pokemonsData: fullPokemon[] = await Promise.all(promises);
        setPokemons(pokemonsData);
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log('pokemons', pokemons);

    return (
        <div>
            <h1>Pokedex</h1>
            {loading ? <div>Loading...</div> : <div>eae</div>}
        </div>
    );
}

export default Pokedex;
