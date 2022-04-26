import React from 'react';
import { useSelector } from 'react-redux';

import { Title, Container } from './styles';

// components
import Pokemon from '../../components/Pokemon';

// interfaces
import { initialStateInterface, fullPokemon } from '../../types';

function Favorites() {
    const favoritePokemons = useSelector(
        (state: initialStateInterface) => state.favoritePokemons
    );

    return (
        <>
            <Title>Favorites</Title>
            <Container>
                {favoritePokemons &&
                    favoritePokemons.map((pokemon: fullPokemon) => (
                        <Pokemon key={pokemon.id} pokemon={pokemon} />
                    ))}
            </Container>
        </>
    );
}

export default Favorites;
