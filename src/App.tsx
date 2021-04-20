import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CalculationPane,PokemonCalc} from "./pokemon_components";
import {move, pokemon, pokemon_field, pokemon_side} from "./pokemon";
import {deepCopy} from "./deepCopy";

function App() {
    let pokemonField = new pokemon_field();
    let left_side = new pokemon_side();
    let right_side = new pokemon_side();
    let left_team = [{
        name: "Blastoise",
        ability: "Torrent",
        type1: "Water",

        status: "Healthy",
        item: "None",
        dynamaxed: false,
        gmax_able: true,
        nature: "Bashful",
        level: 100,
        gender:"Male",
        protecting:false,
        helping_handed:false,
        foresight:false,

        base_hp: 79,
        base_att: 83,
        base_def: 100,
        base_sp_att: 85,
        base_sp_def: 105,
        base_speed: 78,

        hp_ivs: 31,
        att_ivs: 31,
        def_ivs: 31,
        sp_att_ivs: 31,
        sp_def_ivs: 31,
        speed_ivs: 31,

        hp_evs: 0,
        att_evs: 0,
        def_evs: 0,
        sp_att_evs: 0,
        sp_def_evs: 0,
        speed_evs: 0,

        att_boost: 0,
        def_boost: 0,
        sp_att_boost: 0,
        sp_def_boost: 0,
        speed_boost: 0,

        current_hp: 200,

        moves: [
            {
                name: "Blizzard",
                type: "Ice",
                category: "Special",
                power: 110,
                is_spread_move: true,
                is_crit: false,
                is_z_move:false,

            } as move,
            {
                name: "Tackle",
                type: "Normal",
                category: "Physical",
                power: 30,
                is_spread_move: false,
                is_crit: false,
                is_z_move:false,


            } as move
        ]

    } as pokemon,
    ];

    let right_team = [{
        name: "Blastoise",
        ability: "Torrent",
        type1: "Water",

        status: "Healthy",
        item: "None",
        dynamaxed: false,
        gmax_able: true,
        nature: "Bashful",
        level: 100,
        gender:"Male",
        leech_seeded:false,
        protecting:false,
        helping_handed:false,
        foresight:false,

        base_hp: 79,
        base_att: 83,
        base_def: 100,
        base_sp_att: 85,
        base_sp_def: 105,
        base_speed: 78,

        hp_ivs: 31,
        att_ivs: 31,
        def_ivs: 31,
        sp_att_ivs: 31,
        sp_def_ivs: 31,
        speed_ivs: 31,

        hp_evs: 0,
        att_evs: 0,
        def_evs: 0,
        sp_att_evs: 0,
        sp_def_evs: 0,
        speed_evs: 0,

        att_boost: 0,
        def_boost: 0,
        sp_att_boost: 0,
        sp_def_boost: 0,
        speed_boost: 0,

        current_hp: 200,

        moves: [
            {
                name: "Blizzard",
                type: "Ice",
                category: "Special",
                power: 110,
                is_spread_move: true,
                is_crit: false,
                is_z_move:false,

            } as move
        ]

    } as pokemon,
    ];

    right_team.push(deepCopy(right_team[0]));


    right_team[1].moves.push({
        name: "Tackle",
        type: "Normal",
        category: "Physical",
        power: 30,
        is_spread_move: true,
        is_crit: false,
        is_z_move:false,

    } as move)



    return (
        <PokemonCalc init_field={pokemonField}
                     init_left_side = {left_side}
                     init_right_side = {right_side}
                     init_right_team = {right_team}
                     init_left_team = {left_team}
        />
    );
}

export default App;
