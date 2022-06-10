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
                {favoritePokemons && favoritePokemons.length > 0 ? (
                    favoritePokemons.map((pokemon: fullPokemon) => (
                        <Pokemon key={pokemon.id} pokemon={pokemon} />
                    ))
                ) : (
                    <p>No favorites yet</p>
                )}
            </Container>
        </>
    );
}

export default Favorites;
