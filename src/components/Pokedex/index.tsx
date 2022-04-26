import React, { useEffect, useState } from 'react';
import { getPokemons, getPokemonData } from '../../api';

import { Container, Title } from './styles';

// components
import Pokemon from '../Pokemon';

// interfaces
import { pokemon, fullPokemon } from '../../types';

function Pokedex() {
    const [pokemons, setPokemons] = useState<fullPokemon[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchPokemons = async () => {
        const data = await getPokemons();
        const promises = data.results.map((pokemon: pokemon) =>
            getPokemonData(pokemon.url)
        );
        const pokemonsData: fullPokemon[] = await Promise.all(promises);
        setPokemons(pokemonsData);
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <>
            <Title>Pokedex</Title>
            <Container>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    pokemons.map((pokemon: fullPokemon) => (
                        <Pokemon key={pokemon.id} pokemon={pokemon} />
                    ))
                )}
            </Container>
        </>
    );
}

export default Pokedex;
