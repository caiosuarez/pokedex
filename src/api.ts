/* eslint-disable import/prefer-default-export */
export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        );
        return await res.json();
    } catch (error) {
        console.log('error', error);
        return { error };
    }
};

export const getPokemonData = async (url: string) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log('error', error);
        return { error };
    }
};
