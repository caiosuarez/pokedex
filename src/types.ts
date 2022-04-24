export interface pokemon {
    name: string;
    url: string;
}

export interface stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface fullPokemon {
    abilities: [];
    base_experience: number;
    forms: [pokemon];
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
        front_default: string;
    };
    stats: [stat];
    types: [
        {
            slot: number;
            type: {
                name: string;
                url: string;
            };
        }
    ];
    weight: number;
}
