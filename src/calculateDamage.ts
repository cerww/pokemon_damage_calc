import {pokemon, pokemon_field, pokemon_side, move, calculateActualStat, pokemon_name, poke_round} from "./pokemon";

function get_relevent_att_def(from: pokemon, to: pokemon, move: move) {
    if (move.name === "Psyshock") {
        return [calculateActualStat(from, "sp_att"),
            calculateActualStat(to, "def")];
    }

}

let pokemon_weights: { [key: string]: number } = {};

pokemon_weights["Bulbasaur"] = 6.9;

function get_weight(pkm: pokemon) {
    let weight = pokemon_weights[pkm.name];
    if (pkm.ability === "Heavy Metal") {
        weight *= 2;
    }
    if (pkm.ability === "Light Metal") {
        weight /= 2;
    }
    if (pkm.item === "Float Stone") {
        weight /= 2;
    }
    //TODO different formes
    if (pkm.name === "Charizard") {


    }

    return Math.min(weight, 999.999);
}

function calculate_base_power_inital(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                     field: pokemon_field, move: move) {
    if (move.name === "Gyro Ball") {
        return Math.min(Math.max(Math.floor(25 * get_weight(to) / get_weight(from)), 1), 150);
    }
    if (move.name === "Electro Ball") {
        const defender_speed = calculateActualStat(to, "speed");
        if (defender_speed === 0) {
            return 40;
        }
        const attacker_speed = calculateActualStat(from, "speed");
        const S = Math.floor(attacker_speed / defender_speed);
        if (S >= 4) {
            return 150;
        }
        if (S === 3) {
            return 120;
        }
        if (S === 2) {
            return 80;
        }
        if (S === 1) {
            return 60;
        }
        return 40;
    }

    if (move.name === "Low Kick" || move.name === "Grass Knot") {
        const weight = get_weight(to);
        if (weight >= 200) {
            return 120;
        }
        if (weight >= 100) {
            return 100;
        }
        if (weight >= 50) {
            return 80;
        }
        if (weight >= 25) {
            return 60;
        }
        if (weight >= 10) {
            return 40;
        }
        return 20;
    }

    if (move.name === "Heavy Slam" || move.name === "Heat Crash") {
        const w = Math.floor(get_weight(from) / get_weight(to));
        if (w >= 5) {
            return 120;
        }
        return [40, 40, 60, 80, 100][w];
    }

    if (move.name === "Eruption" || move.name === "Water Spout") {
        return Math.floor(150 * from.current_hp / calculateActualStat(from, "hp"));
    }

    if (move.name === "Flail" || move.name === "Reversal") {
        const p = Math.floor(48 * from.current_hp / calculateActualStat(from, "hp"));
        if(p>=32){
            return 20;
        }
        if(p>=17){
            return 40;
        }
        if(p>=10){
            return 80;
        }
        if(p>=5){
            return 100;
        }
        if(p>=2){
            return 150;
        }
        return 200;
    }


    if (move.name === "Crush Grip" || move.name === "Wring Out") {
        return Math.floor(poke_round(120 * 100 * Math.floor(from.current_hp / calculateActualStat(from,"hp"))/4096)/100);
    }

    if(move.name==="Return" || move.name === "Frustration"){
        return 102;
    }

    return move.power;
}


function calculate_base_power(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                              field: pokemon_field, move: move): number {

    let base_power = calculate_base_power_inital(from, to, from_side, to_side, field, move);

    let modifiers: number[] = [];

    return 0;
}

//https://www.trainertower.com/dawoblefets-damage-dissertation/
export function calculateDamage(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                field: pokemon_field, move: move): number[] {

    let relevent_att = move.category === "Special" ?
        calculateActualStat(from, "sp_att")
        : calculateActualStat(from, "att");

    let relevent_def = move.category === "Special" ?
        calculateActualStat(to, "sp_def") :
        calculateActualStat(to, "def");


    let base_power = move.power;

    if (move.type === from.type1 || move.type === from.type2) {
        base_power *= 1.5;
        base_power = Math.floor(base_power);
    }

    let dmg = (
        Math.floor(
            Math.floor(
                Math.floor(((2 * from.level) / 5) + 2) * base_power * relevent_att / relevent_def
            ) / 50
        ) + 2
    );

    let damages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i) => Math.floor((dmg * (100 - i)) / 100)
    );


    return damages;
}