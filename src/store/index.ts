/* eslint-disable default-param-last */
import { configureStore } from '@reduxjs/toolkit';
import _ from 'lodash';

// interfaces
import { fullPokemon, initialStateInterface } from '../types';

const initialState: initialStateInterface = {
    favoritePokemons: [],
};

const reducer = (
    state = initialState,
    action: { type: string; payload: { pokemon: fullPokemon } }
) => {
    switch (action.type) {
        case 'FAVORITE_POKEMON': {
            const newState = _.cloneDeep(state);
            const index = newState.favoritePokemons.findIndex(
                (pokemon: fullPokemon) =>
                    pokemon.id === action.payload.pokemon.id
            );
            if (index === -1) {
                newState.favoritePokemons.push(action.payload.pokemon);
            } else {
                newState.favoritePokemons.splice(index, 1);
            }
            return newState;
        }
        default: {
            return state;
        }
    }
};

const store = configureStore({
    reducer,
});

export default store;
