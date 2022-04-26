import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// styles
import { secondaryColor, neutralWhite } from '../../styles/colors';
import {
    Card,
    CardHeader,
    CardBody,
    Statline,
    TypeBadge,
    FavoriteButton,
} from './styles';

// interfaces
import { stat, fullPokemon, initialStateInterface } from '../../types';

interface PokemonProps {
    pokemon: fullPokemon;
}

function Pokemon({ pokemon }: PokemonProps) {
    const dispatch = useDispatch();
    const favoritePokemons = useSelector(
        (state: initialStateInterface) => state.favoritePokemons
    );
    const pokemonIsFavorite = favoritePokemons.some(
        (favoritePokemon: fullPokemon) => favoritePokemon.id === pokemon.id
    );

    const getColorForType = (type: string) => {
        switch (type) {
            case 'normal':
                return '#A8A77A';
            case 'fighting':
                return '#C22E28';
            case 'flying':
                return '#A98FF3';
            case 'poison':
                return '#A33EA1';
            case 'ground':
                return '#E2BF65';
            case 'rock':
                return '#B6A136';
            case 'bug':
                return '#A6B91A';
            case 'ghost':
                return '#735797';
            case 'steel':
                return '#B7B7CE';
            case 'fire':
                return '#EE8130';
            case 'water':
                return '#6390F0';
            case 'grass':
                return '#7AC74C';
            case 'electric':
                return '#F7D02C';
            case 'psychic':
                return '#F95587';
            case 'ice':
                return '#96D9D6';
            case 'dragon':
                return '#6F35FC';
            case 'dark':
                return '#705746';
            case 'fairy':
                return '#D685AD';
            default:
                return '#A8A77A';
        }
    };

    const handleFavoritePokemon = (pokemon: fullPokemon) => {
        dispatch({
            type: 'FAVORITE_POKEMON',
            payload: {
                pokemon,
            },
        });
    };

    return (
        <Card>
            <CardHeader>
                <h1>{pokemon.name}</h1>
                <FavoriteButton onClick={() => handleFavoritePokemon(pokemon)}>
                    <FontAwesomeIcon
                        fontSize="19px"
                        color={
                            pokemonIsFavorite ? secondaryColor : neutralWhite
                        }
                        icon={faStar}
                        className="favorite-icon"
                    />
                </FavoriteButton>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <TypeBadge color={getColorForType(pokemon.types[0].type.name)}>
                    {pokemon.types[0].type.name}
                </TypeBadge>
            </CardHeader>
            <CardBody>
                {pokemon.stats.map((stat: stat) => (
                    <Statline key={stat.stat.name}>
                        <span>{stat.stat.name}: </span>
                        <span>{stat.base_stat}</span>
                    </Statline>
                ))}
            </CardBody>
        </Card>
    );
}

export default Pokemon;
