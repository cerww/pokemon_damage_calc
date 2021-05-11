import {
    pokemon,
    pokemon_field,
    pokemon_side,
    move,
    calculateActualStat,
    pokemon_name,
    poke_round,
    pokemon_type, move_name, move_type, item, calculateStatNoBoost
} from "./pokemon";
import {pokemon_weights} from "./pokemon_weights";


const sheer_force_moves: Set<move_name> = new Set([
    "Air Slash",
    "Ancient Power",
    "Astonish",
    "Bite",
    "Blizzard",
    "Body Slam",
    "Breaking Swipe",
    "Bubble",
    "Bubble Beam",
    "Bulldoze",
    "Burning Jealousy",
    "Charge Beam",
    "Confusion",
    "Crunch",
    "Crush Claw",
    "Dark Pulse",
    "Dragon Rush",
    "Dragon Breath",
    "Dynamic Punch",
    "Earth Power",
    "Ember",
    "Extrasensory",
    "Fake Out",
    "Fire Blast",
    "Fire Fang",
    "Fire Punch",
    "Flame Charge",
    "Flame Wheel",
    "Flamethrower",
    "Flare Blitz",
    "Flash Cannon",
    "Focus Blast",
    "Force Palm",
    "Gunk Shot",
    "Headbutt",
    "Heat Wave",
    "Hurricane",
    "Ice Beam",
    "Ice Fang",
    "Ice Punch",
    "Icy Wind",
    "Iron Head",
    "Iron Tail",
    "Lava Plume",
    "Liquidation",
    "Low Sweep",
    "Metal Claw",
    "Mud Bomb",
    "Mud Shot",
    "Mud-Slap",
    "Mystical Fire",
    "Play Rough",
    "Poison Fang",
    "Poison Jab",
    "Poison Sting",
    "Poison Tail",
    "Power-Up Punch",
    "Psychic",
    "Razor Shell",
    "Rock Climb",
    "Rock Slide",
    "Rock Smash",
    "Rock Tomb",
    "Scald",
    "Scorching Sands",
    "Secret Power",
    "Shadow Ball",
    "Signal Beam",
    "Sky Attack",
    "Sludge Bomb",
    "Sludge Wave",
    "Snarl",
    "Snore",
    "Steel Wing",
    "Stomp",
    "Struggle Bug",
    "Throat Chop",
    "Thunder",
    "Thunder Fang",
    "Thunder Cage",
    "Thunderbolt",
    "Thunder Punch",
    "Twister",
    "Water Pulse",
    "Waterfall",
    "Zap Cannon",
    "Zen Headbutt"
] as move_name[]);

const biting_moves: move_name[] = [
    "Bite",
    "Crunch",
    "Fire Fang",
    "Ice Fang",
    "Psychic Fangs",
    "Fishious Rend",
    "Jaw Lock",
    "Hyper Fang",
    "Thunder Fang",
    "Poison Fang"
];

const contact_moves: Set<move_name> = new Set<move_name>(
    ["Pound",
        "Karate Chop",
        "Double Slap",
        "Comet Punch",
        "Mega Punch",
        "Fire Punch",
        "Ice Punch",
        "Thunder Punch",
        "Scratch",
        "Vise Grip",
        "Guillotine",
        "Cut",
        "Wing Attack",
        "Fly",
        "Bind",
        "Slam",
        "Vine Whip",
        "Stomp",
        "Double Kick",
        "Mega Kick",
        "Jump Kick",
        "Rolling Kick",
        "Headbutt",
        "Horn Attack",
        "Fury Attack",
        "Horn Drill",
        "Tackle",
        "Body Slam",
        "Wrap",
        "Take Down",
        "Thrash",
        "Double-Edge",
        "Bite",
        "Peck",
        "Drill Peck",
        "Submission",
        "Low Kick",
        "Counter",
        "Seismic Toss",
        "Strength",
        "Petal Dance",
        "Dig",
        "Quick Attack",
        "Rage",
        "Bide",
        "Lick",
        "Waterfall",
        "Clamp",
        "Skull Bash",
        "Constrict",
        "High Jump Kick",
        "Leech Life",
        "Dizzy Punch",
        "Crabhammer",
        "Fury Swipes",
        "Hyper Fang",
        "Super Fang",
        "Slash",
        "Struggle",
        "Triple Kick",
        "Thief",
        "Flame Wheel",
        "Flail",
        "Reversal",
        "Mach Punch",
        "Feint Attack",
        "Outrage",
        "Rollout",
        "False Swipe",
        "Spark",
        "Fury Cutter",
        "Steel Wing",
        "Return",
        "Frustration",
        "Dynamic Punch",
        "Megahorn",
        "Pursuit",
        "Rapid Spin",
        "Iron Tail",
        "Metal Claw",
        "Vital Throw",
        "Cross Chop",
        "Crunch",
        "Extreme Speed",
        "Rock Smash",
        "Fake Out",
        "Facade",
        "Focus Punch",
        "Smelling Salts",
        "Superpower",
        "Revenge",
        "Brick Break",
        "Knock Off",
        "Endeavor",
        "Dive",
        "Arm Thrust",
        "Blaze Kick",
        "Ice Ball",
        "Needle Arm",
        "Poison Fang",
        "Crush Claw",
        "Meteor Mash",
        "Astonish",
        "Shadow Punch",
        "Sky Uppercut",
        "Aerial Ace",
        "Dragon Claw",
        "Bounce",
        "Poison Tail",
        "Covet",
        "Volt Tackle",
        "Leaf Blade",
        "Wake-Up Slap",
        "Hammer Arm",
        "Gyro Ball",
        "Pluck",
        "U-turn",
        "Close Combat",
        "Payback",
        "Assurance",
        "Trump Card",
        "Wring Out",
        "Punishment",
        "Last Resort",
        "Sucker Punch",
        "Flare Blitz",
        "Force Palm",
        "Poison Jab",
        "Night Slash",
        "Aqua Tail",
        "X-Scissor",
        "Dragon Rush",
        "Drain Punch",
        "Brave Bird",
        "Giga Impact",
        "Bullet Punch",
        "Avalanche",
        "Shadow Claw",
        "Thunder Fang",
        "Ice Fang",
        "Fire Fang",
        "Shadow Sneak",
        "Zen Headbutt",
        "Rock Climb",
        "Power Whip",
        "Cross Poison",
        "Iron Head",
        "Grass Knot",
        "Bug Bite",
        "Wood Hammer",
        "Aqua Jet",
        "Head Smash",
        "Double Hit",
        "Crush Grip",
        "Shadow Force",
        "Storm Throw",
        "Heavy Slam",
        "Flame Charge",
        "Low Sweep",
        "Foul Play",
        "Chip Away",
        "Sky Drop",
        "Circle Throw",
        "Acrobatics",
        "Retaliate",
        "Dragon Tail",
        "Wild Charge",
        "Drill Run",
        "Dual Chop",
        "Heart Stamp",
        "Horn Leech",
        "Sacred Sword",
        "Razor Shell",
        "Heat Crash",
        "Steamroller",
        "Tail Slap",
        "Head Charge",
        "Gear Grind",
        "Bolt Strike",
        "V-create",
        "Flying Press",
        "Fell Stinger",
        "Phantom Force",
        "Draining Kiss",
        "Play Rough",
        "Nuzzle",
        "Hold Back",
        "Infestation",
        "Power-Up Punch",
        "Dragon Ascent",
        "Catastropika",
        "First Impression",
        "Darkest Lariat",
        "Ice Hammer",
        "High Horsepower",
        "Solar Blade",
        "Throat Chop",
        "Anchor Shot",
        "Lunge",
        "Fire Lash",
        "Power Trip",
        "Smart Strike",
        "Trop Kick",
        "Dragon Hammer",
        "Brutal Swing",
        "Malicious Moonsault",
        "Soul-Stealing 7-Star Strike",
        "Pulverizing Pancake",
        "Psychic Fangs",
        "Stomping Tantrum",
        "Accelerock",
        "Liquidation",
        "Spectral Thief",
        "Sunsteel Strike",
        "Zing Zap",
        "Multi-Attack",
        "Plasma Fists",
        "Searing Sunraze Smash",
        "Let's Snuggle Forever",
        "Zippy Zap",
        "Floaty Fall",
        "Sizzly Slide",
        "Veevee Volley",
        "Double Iron Bash",
        "Jaw Lock",
        "Bolt Beak",
        "Fishious Rend",
        "Body Press",
        "Snap Trap",
        "Behemoth Blade",
        "Behemoth Bash",
        "Breaking Swipe",
        "Branch Poke",
        "Spirit Break",
        "False Surrender",
        "Steel Roller",
        "Grassy Glide",
        "Skitter Smack",
        "Lash Out",
        "Flip Turn",
        "Triple Axel",
        "Dual Wingbeat",
        "Wicked Blow",
        "Surging Strikes",
        "Thunderous Kick",
        "Shadow Blitz",
        "Shadow Break",
        "Shadow End",
        "Shadow Rush",
        "Attack Order",
        "Aura Wheel",
        "Barrage",
        "Beak Blast",
        "Beat Up",
        "Bone Club",
        "Bone Rush",
        "Bonemerang",
        "Bulldoze",
        "Bullet Seed",
        "Diamond Storm",
        "Dragon Darts",
        "Drum Beating",
        "Earthquake",
        "Egg Bomb",
        "Explosion",
        "Feint",
        "Fissure",
        "Fling",
        "Freeze Shock",
        "Fusion Bolt",
        "Grav Apple",
        "Gunk Shot",
        "Ice Shard",
        "Icicle Crash",
        "Icicle Spear",
        "Land's Wrath",
        "Leafage",
        "Magnet Bomb",
        "Magnitude",
        "Metal Burst",
        "Meteor Assault",
        "Natural Gift",
        "Pay Day",
        "Petal Blizzard",
        "Pin Missile",
        "Poison Sting",
        "Poltergeist",
        "Precipice Blades",
        "Present",
        "Psycho Cut",
        "Pyro Ball",
        "Razor Leaf",
        "Rock Blast",
        "Rock Slide",
        "Rock Throw",
        "Rock Tomb",
        "Rock Wrecker",
        "Sacred Fire",
        "Sand Tomb",
        "Scale Shot",
        "Secret Power",
        "Seed Bomb",
        "Self-Destruct",
        "Shadow Bone",
        "Sky Attack",
        "Smack Down",
        "Sinister Arrow Raid",
        "Spike Cannon",
        "Spirit Shackle",
        "Splintered Stormshards",
        "Stone Edge",
        "Thousand Arrows",
        "Thousand Waves",
        "Twineedle"] as move_name[]
);

const aura_pulse_moves = new Set<move_name>(
    [
        "Aura Sphere",
        "Dark Pulse",
        "Dragon Pulse",
        "Heal Pulse",
        "Origin Pulse",
        "Terrain Pulse",
        "Water Pulse"
    ] as move_name[]
);


function get_weight(pkm: pokemon) {
    let weight = pokemon_weights[pkm.name];
    //TODO different formes
    if (pkm.name === "Charizard") {


    }
    if (pkm.ability === "Heavy Metal") {
        weight *= 2;
    }
    if (pkm.ability === "Light Metal") {
        weight /= 2;
    }
    if (pkm.item === "Float Stone") {
        weight /= 2;
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
        } else if (S === 3) {
            return 120;
        } else if (S === 2) {
            return 80;
        } else if (S === 1) {
            return 60;
        }
        return 40;
    }

    if (move.name === "Low Kick" || move.name === "Grass Knot") {
        const weight = get_weight(to);
        if (weight >= 200) {
            return 120;
        } else if (weight >= 100) {
            return 100;
        } else if (weight >= 50) {
            return 80;
        } else if (weight >= 25) {
            return 60;
        } else if (weight >= 10) {
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
        if (p >= 32) {
            return 20;
        } else if (p >= 17) {
            return 40;
        } else if (p >= 10) {
            return 80;
        } else if (p >= 5) {
            return 100;
        } else if (p >= 2) {
            return 150;
        }
        return 200;
    }


    if (move.name === "Crush Grip" || move.name === "Wring Out") {
        return Math.floor(poke_round(
            120 * 100 * Math.floor(from.current_hp / calculateActualStat(from, "hp")) / 4096) / 100
        );
    }

    if (move.name === "Return" || move.name === "Frustration") {
        return 102;
    }

    if (move.name === "Acrobatics" && from.item === "None") {
        return move.power * 2;
    }

    if (move.name === "Misty Explosion" && field.terrain === "Misty") {
        return move.power * 1.5;
    }

    return move.power;
}

function strong_against(...wat: pokemon_type[]): { [key: string]: number } {
    return Object.fromEntries(wat.map((a) => [a, 2]));
}

function weak_against(...wat: pokemon_type[]): { [key: string]: number } {
    return Object.fromEntries(wat.map((a) => [a, 0.5]));
}

function mega_bad_against(...wat: pokemon_type[]): { [key: string]: number } {
    return Object.fromEntries(wat.map((a) => [a, 0]));
}

//attacking,defending
const type_chart: { [key: string]: { [key: string]: number } } = {
    "Fire": {
        ...strong_against("Steel", "Grass", "Ice", "Steel"),
        ...weak_against("Water", "Fire", "Rock", "Dragon")
    },
    "Water": {
        ...strong_against("Fire", "Ground", "Rock"),
        ...weak_against("Grass", "Water", "Dragon")
    },
    "Grass": {
        ...strong_against("Water", "Ground", "Rock"),
        ...weak_against("Fire", "Flying", "Grass", "Poison", "Bug", "Dragon", "Steel")

    },
    "Electric": {
        ...strong_against("Flying"),
        ...weak_against("Grass", "Electric", "Dragon"),
        ...mega_bad_against("Ground")
    },
    "Bug": {
        ...strong_against("Psychic", "Grass", "Dark"),
        ...weak_against("Flying", "Fire", "Fighting", "Poison", "Ghost", "Steel", "Fairy")
    },
    "Dragon": {
        ...strong_against("Dragon"),
        ...weak_against("Steel"),
        ...mega_bad_against("Fairy")
    },
    "Ice": {
        ...strong_against("Dragon", "Grass", "Flying"),
        ...weak_against("Ice", "Water", "Fire", "Steel")
    },
    "Steel": {
        ...strong_against("Fairy", "Rock", "Ice"),
        ...weak_against("Fire", "Water", "Electric", "Steel")
    },
    "Fairy": {
        ...strong_against("Dragon", "Dark", "Fighting"),
        ...weak_against("Fire", "Steel", "Poison")
    },
    "Poison": {
        ...strong_against("Fairy", "Grass"),
        ...weak_against("Poison", "Ground", "Rock", "Ghost"),
        ...mega_bad_against("Steel")
    },
    "Psychic": {
        ...strong_against("Fighting", "Poison"),
        ...weak_against("Bug", "Psychic", "Steel"),
        ...mega_bad_against("Dark")
    },
    "Dark": {
        ...strong_against("Ghost", "Psychic"),
        ...weak_against("Fighting", "Dark", "Fairy")
    },
    "Ghost": {
        ...strong_against("Ghost", "Psychic"),
        ...weak_against("Dark"),
        ...mega_bad_against("Normal")
    },
    "Normal": {
        ...strong_against(),
        ...weak_against("Rock", "Steel"),
        ...mega_bad_against("Ghost")
    },
    "Rock": {
        ...strong_against("Fire", "Ice", "Flying", "Bug"),
        ...weak_against("Fighting", "Ground", "Steel")
    },
    "Ground": {
        ...strong_against("Fire", "Electric", "Steel", "Poison", "Rock"),
        ...weak_against("Grass", "Bug"),
        ...mega_bad_against("Flying")
    },
    "Flying": {
        ...strong_against("Grass", "Fighting", "Bug"),
        ...weak_against("Electric", "Rock", "Steel")
    },
    "Fighting": {
        ...strong_against("Normal", "Steel", "Ice", "Dark"),
        ...weak_against("Psychic", "Poison", "Flying", "Fairy", "Bug"),
        ...mega_bad_against("Ghost")
    }
};

function calculate_type_matchup(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                field: pokemon_field, move: move, type: pokemon_type) {
    if (move.name === "Freeze-Dry" && type === "Water") {
        return 2;
    }

    if (from.ability === "Scrappy" &&
        (move.type === "Fighting" || move.type === "Normal") &&
        type === "Ghost") {
        return 1;
    }

    if (from.item === "Ring Target") {
        const matchup = type_chart[move.type][type] ?? 1;
        if (matchup === 0) {
            return 1;
        }
        return matchup;
    }

    if (field.weather === "Strong Winds" && type === "Flying") {
        return Math.min(1, type_chart[move.type][type] ?? 1);
    }

    if (move.name === "Flying Press") {
        return (type_chart[move.type][type] ?? 1) * (type_chart["Flying"][type] ?? 1);
    }

    return type_chart[move.type][type] ?? 1;
}


function calculate_type_effectiveness(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                      field: pokemon_field, move: move) {

    const opponent_types = to.type2 !== undefined ? [to.type1, to.type2] : [to.type1];
    if (move.type === "Ground" &&
        (field.gravity || move.name === "Thousand Arrows") &&
        (opponent_types.includes("Flying") || to.ability === "Levitate")) {
        return 1;
    }
    let effectiveness = 1;

    for (let t of opponent_types) {
        effectiveness *= calculate_type_matchup(from, to, from_side, to_side, field, move, t);
    }

    return effectiveness;
}

function apply_type_change_stuff(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                 field: pokemon_field, move: move): move {

    if (move.name === "Expanding Force" && field.terrain === "Psychic") {
        move = {...move, power: move.power * 1.5, is_spread_move: true};
    }

    if (move.name === "Aura Wheel" && from.name === "Morpeko" && from.forme === "Hangry") {
        move = {...move, type: "Dark"};
    }

    if (move.type === "Normal") {
        if (from.ability === "Galvanize") {
            move = {...move, type: "Electric"};
        }
        if (from.ability === "Refrigerate") {
            move = {...move, type: "Ice"};
        }
        if (from.ability === "Pixilate") {
            move = {...move, type: "Electric"};
        }
        if (from.ability === "Aerilate") {
            move = {...move, type: "Flying"};
        }
    }

    if (from.ability === "Normalize") {
        return {...move, type: "Normal"};
    }


    return move;
}

const punching_moves: move_name[] = [
    "Bullet Punch",
    "Comet Punch",
    "Dizzy Punch",
    "Double Iron Bash",
    "Drain Punch",
    "Dynamic Punch",
    "Fire Punch",
    "Ice Punch",
    "Focus Punch",
    "Hammer Arm",
    "Ice Hammer",
    "Mach Punch",
    "Mega Punch",
    "Meteor Mash",
    "Plasma Fists",
    "Power-Up Punch",
    "Shadow Punch",
    "Sky Uppercut",
    "Thunder Punch"
];

function is_punching_attack(move: move): boolean {
    return punching_moves.includes(move.name);
}

const moves_that_have_recoil: move_name[] = [
    "Brave Bird",
    "Double-Edge",
    "Flare Blitz",
    "Light of Ruin",
    "Wild Charge",
    "Wood Hammer",
    "Volt Tackle",
    "Submission",
    "Head Charge",
    "Head Smash",
    "Struggle"

];

function has_recoil(move: move) {
    return moves_that_have_recoil.includes(move.name);
}

function is_correct_plate(type: pokemon_type, item: item): boolean {
    if (item.endsWith(" Plate")) {
        switch (type) {
            case "Fire":
                return item === "Flame Plate";
            case "Water":
                return item === "Splash Plate";
            case "Grass":
                return item === "Meadow Plate";
            case "Ice":
                return item === "Icicle Plate";
            case "Normal":
                return false;
            case "None":
                return false;
            case "Dragon":
                return item === "Draco Plate";
            case "Ghost":
                return item === "Spooky Plate";
            case "Bug":
                return item === "Insect Plate";
            case "Electric":
                return item === "Zap Plate";
            case "Poison":
                return item === "Toxic Plate";
            case "Fairy":
                return item === "Pixie Plate";
            case "Flying":
                return item === "Sky Plate";
            case "Steel":
                return item === "Iron Plate";
            case "Ground":
                return item === "Earth Plate";
            case "Rock":
                return item === "Stone Plate";
            case "Dark":
                return item === "Dread Plate";
            case "Fighting":
                return item === "Fist Plate";
            case "Psychic":
                return item === "Mind Plate";
        }
        return false;
    } else {
        return false;
    }
}

function is_correct_type_enhancing_item(type: pokemon_type, item: item): boolean {
    switch (type) {
        case "Fire":
            return item === "Charcoal";
        case "Water":
            return item === "Mystic Water" || item === "Wave Incense" || item === "Sea Incense";
        case "Grass":
            return item === "Miracle Seed" || item === "Rose Incense";
        case "Ice":
            return item === "Never-Melt Ice";
        case "Normal":
            return item === "Silk Scarf";
        case "None":
            return false;
        case "Dragon":
            return item === "Dragon Fang";
        case "Ghost":
            return item === "Spell Tag";
        case "Bug":
            return item === "Silver Powder";
        case "Electric":
            return item === "Magnet";
        case "Poison":
            return item === "Poison Barb";
        case "Fairy":
            return false;
        case "Flying":
            return item === "Sharp Beak";
        case "Steel":
            return item === "Metal Coat";
        case "Ground":
            return item === "Soft Sand";
        case "Rock":
            return item === "Hard Stone" || item === "Rock Incense";
        case "Dark":
            return item === "Black Glasses";
        case "Fighting":
            return item === "Black Belt";
        case "Psychic":
            return item === "Twisted Spoon" || item === "Odd Incense";
    }
    return false;
}

const z_crystals = new Set<item>([
    "Aloraichium Z",
    "Bugnium Z",
    "Ultranecrozium Z",
    "Darkinium Z",
    "Dragonium Z",
    "Decidum Z",
    "Eevium Z",
    "Electrium Z",
    "Fairium Z",
    "Fightinium Z",
    "Firium Z",
    "Flyinium Z",
    "Ghostium Z",
    "Grassium Z",
    "Aloraichium Z",
    "Groundium Z",
    "Icium Z",
    "Poisonium Z",
    "Psychium Z",
    "Normalium Z",
    "Waterium Z",
    "Rockium Z",
    "Aloraichium Z",
    "Incinium Z",
    "Kommonium Z",
    "Lunalium Z",
    "Solganium Z",
    "Lycanium Z",
    "Marshadium Z",
    "Mewnium Z",
    "Mimikium Z",
    "Pikanium Z",
    "Pikashunium Z",
    "Primarium Z",
    "Snorlium Z",
    "Tapunium Z",
    "Ultranecrozium Z"

] as item[]);

const mega_stones = new Set<item>(
    [
    ] as item[]
);

function is_knockoff_able(pokemon: pokemon, item: item): boolean {
    if (item === "None") {
        return false;
    }

    if (pokemon.name === "Giratina" && item === "Griseous Orb") {
        return false;
    }
    if (z_crystals.has(item)) {
        return false;
    }
    if(pokemon.name==="Zacian" && item==="Rusted Sword"){
        return false;
    }
    if(pokemon.name==="Zamazenta" && item==="Rusted Shield"){
        return false;
    }
    if(pokemon.name==="Kyogre" && item==="Blue Orb"){
        return false;
    }
    if(pokemon.name==="Groudon" && item==="Red Orb"){
        return false;
    }
    if(pokemon.ability==="Sticky Hold"){
        return false;
    }
    if(pokemon.name==="Silvally" && item.endsWith(" Memory")){
        return false;
    }
    if(pokemon.name==="Arceus" && item.endsWith(" Plate")){
        return false;
    }
    //TODO mega stones

    return true;
}


function calculate_base_power(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                              field: pokemon_field, move_original: move, move: move): number {

    let base_power = calculate_base_power_inital(from, to, from_side, to_side, field, move);
    let modifiers: number[] = [];

    if (((move.type === "Fairy" && (field.fairy_aura || from.ability === "Fairy Aura" || to.ability === "Fairy Aura")) ||
        (move.type === "Dark" && (field.dark_aura || from.ability === "Dark Aura" || to.ability === "Dark Aura")))) {
        if (field.aura_break) {
            modifiers.push(3072 / 4096);
        }
    }

    if (from.ability === "Rivalry") {
        if (from.gender !== "None" && to.gender !== "None") {
            if (from.gender === to.gender) {
                modifiers.push(5120 / 4096);
            } else {
                modifiers.push(3072 / 4096);
            }
        }
    }

    if ((move_original.type === "Normal"
            && (from.ability === "Galvanize"
            || from.ability === "Refrigerate"
            || from.ability === "Pixilate"
            || from.ability === "Aerilate")
        )
        || (from.ability === "Normalize")
        || (from.ability === "Iron Fist" && is_punching_attack(move))
        || (from.ability === "Reckless" && has_recoil(move) && move.name !== "Struggle")) {
        modifiers.push(4915 / 4096);
    }

    if (move.category === "Special" && from_side.battery) {
        modifiers.push(5325 / 4096);
    }

    if ((from.ability === "Sheer Force" && sheer_force_moves.has(move.name))
        || (from.ability === "Sand Force" && field.weather === "Sandstorm")
        || (from.ability === "Analytic" && calculateActualStat(from, "speed") < calculateActualStat(to, "speed"))
        || (from.ability === "Tough Claws" && contact_moves.has(move.name))
    ) {
        modifiers.push(5325 / 4096);
    }

    if (((move.type === "Fairy" && (field.fairy_aura || from.ability === "Fairy Aura" || to.ability === "Fairy Aura")) ||
        (move.type === "Dark" && (field.dark_aura || from.ability === "Dark Aura" || to.ability === "Dark Aura")))) {
        if (!field.aura_break) {
            modifiers.push(5448 / 4096);
        }
    }

    if ((from.ability === "Technician" && base_power <= 60)
        || (from.ability === "Flare Boost" && from.status === "Burned" && move.category === "Special")
        || (from.ability === "Toxic Boost" &&
            (from.status === "Poisoned" || from.status === "Badly Poisoned") && move.category === "Physical")
        || (from.ability === "Strong Jaw" && biting_moves.includes(move.name))
        || (from.ability === "Mega Launcher" && aura_pulse_moves.has(move.name))
    ) {
        modifiers.push(6144 / 4096)
    }
    if (to.ability === "Heatproof" && move.type === "Fire") {
        modifiers.push(2048 / 4096);
    }
    if (to.ability === "Dry Skin" && move.type === "Water") {
        modifiers.push(5120 / 4096);
    }
    if ((from.item === "Muscle Band" && move.category === "Physical")
        || (from.item === "Wise Glasses" && move.category === "Special")) {
        modifiers.push(4505 / 4096);
    }

    if (is_correct_plate(move.type, from.item)
        || is_correct_type_enhancing_item(move.type, from.item)
        || (from.name === "Dialga" && (move.type === "Steel" || move.type === "Dragon") && from.item === "Adamant Orb")
        || (from.name === "Giratina" && (move.type === "Ghost" || move.type === "Dragon") && from.item === "Griseous Orb")
        || (from.name === "Palkia" && (move.type === "Water" || move.type === "Dragon") && from.item === "Lustrous Orb")
        || ((from.name === "Latias" || from.name === "Latios") && (move.type === "Psychic" || move.type === "Dragon")
            && from.item === "Soul Dew")
    ) {
        modifiers.push(4915 / 4096);
    }

    if (move.type === "Normal" && from.item === "Normal Gem") {
        modifiers.push(5325 / 4096);
    }

    if ((move.name === "Solar Beam" || move.name === "Solar Blade")
        && field.weather !== "Sun" && field.weather !== "Harsh Sun" && field.weather !== "Strong Winds") {
        modifiers.push(2048 / 4096);
    }

    //me first

    if (move.name === "Knock Off" &&
        is_knockoff_able(to, to.item)) {

    }

    if (from.helping_handed) {
        modifiers.push(6144 / 4096);
    }

    //charge

    if ((move.name === "Facade" && (from.status !== "Healthy"))
        || (move.name === "Brine" && to.current_hp <= Math.floor(calculateActualStat(to, "hp")))
        || (move.name === "Venoshock" && (to.status === "Poisoned" || to.status === "Badly Poisoned"))
        // || (move.name === "Retaliate")//and teammate died in prev turn
        // || ((move.name === "Fusion Bolt" ||move.name === "Fusion Flare"))//and other move was used in same turn
    ) {
        modifiers.push(8192 / 4096);
    }

    if ((field.terrain === "Grassy" && (move.name === "Earthquake" || move.name === "Magnitude" || move.name === "Bulldoze"))
        || (field.terrain === "Misty" && move.type === "Dragon")
    ) {
        modifiers.push(2048 / 4096);
    }

    if ((field.terrain === "Electric" && move.type === "Electric")
        || (field.terrain === "Grassy" && move.type === "Grass")
        || (field.terrain === "Psychic" && move.type === "Psychic")
    ) {
        modifiers.push(6144 / 4096);
    }

    if ((field.mud_sport && move.type === "Electric")
        || (field.water_sport && move.type === "Fire")
    ) {
        modifiers.push(1352 / 4096);
    }
    return [base_power, ...modifiers].reduce((a, b) => Math.floor(a * b));
}

function get_relevent_att_def(from: pokemon, to: pokemon, move: move): [number, number, "att" | "sp_att" | "def", "def" | "sp_def"] {

    let att_stat_used: "att" | "sp_att" | "def" = "sp_att";
    let def_stat_used: "def" | "sp_def" = "def";
    let att_source = from;
    let def_source = to;
    if (move.name === "Psyshock" || move.name === "Psystrike" || move.name === "Secret Sword") {
        att_stat_used = "sp_att";
        def_stat_used = "def";
    } else if (move.name === "Foul Play") {
        [att_stat_used, def_stat_used] = ["att", "def"];
        att_source = to;
    } else if (move.name === "Body Press") {
        [att_stat_used, def_stat_used] = ["def", "def"]
    } else if (move.category === "Special") {
        [att_stat_used, def_stat_used] = ["sp_att", "sp_def"]
    } else if (move.category === "Physical") {
        [att_stat_used, def_stat_used] = ["att", "def"]
    }

    return [
        to.ability === "Unaware" ?
            calculateStatNoBoost(att_source, att_stat_used) :
            move.is_crit ?
                Math.max(
                    calculateActualStat(att_source, att_stat_used),
                    calculateStatNoBoost(att_source, att_stat_used)
                ) :
                calculateActualStat(att_source, att_stat_used)
        ,
        (to.ability === "Unaware" || move.name === "Chip Away" || move.name === "Sacred Sword") ?
            calculateStatNoBoost(def_source, def_stat_used) :
            move.is_crit ?
                Math.min(
                    calculateActualStat(def_source, def_stat_used),
                    calculateStatNoBoost(def_source, def_stat_used)
                ) :
                calculateActualStat(def_source, def_stat_used),
        att_stat_used,
        def_stat_used
    ];
}

function can_evolve(pkm: pokemon_name): boolean {
    return false;
}

function calculate_actual_att_def(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                  field: pokemon_field, move_original: move, move: move)
    : [number, number, "att" | "sp_att" | "def", "def" | "sp_def"] {

    let [att, def, att_stat_used, def_stat_used] = get_relevent_att_def(from, to, move);
    if (field.weather === "Sandstorm" &&
        (from.type2 === "Rock" || from.type1 === "Rock") &&
        def_stat_used === "sp_def"
    ) {
        def *= 6144 / 4096;
        def = poke_round(def);
    }
    if (move.category === "Physical" && from.ability === "Hustle") {
        att *= 6144 / 4096;
        att = poke_round(att);
    }

    let att_modifiers = [];
    let def_modifiers = [];

    if (from.ability === "Slow Start" && from.extra_data !== undefined && from.extra_data["slow_start_active"]) {
        att_modifiers.push(2048 / 4096);
    }
    if (from.ability === "Defeatist" && from.current_hp < Math.floor(calculateActualStat(from, "hp") / 2)) {
        att_modifiers.push(2048 / 4096);
    }
    if (from.ability === "Flower Gift" && field.weather === "Sun" && move.category === "Physical") {
        att_modifiers.push(6144 / 4096);
    }

    if ((from.ability === "Guts" && from.status !== "Healthy" && move.category === "Physical") ||
        (from.ability === "Overgrow" && from.current_hp < Math.floor(calculateActualStat(from, "hp") / 3)
            && move.type === "Grass") ||
        (from.ability === "Blaze" && from.current_hp < Math.floor(calculateActualStat(from, "hp") / 3)
            && move.type === "Fire") ||
        (from.ability === "Torrent" && from.current_hp < Math.floor(calculateActualStat(from, "hp") / 3)
            && move.type === "Water") ||
        (from.ability === "Swarm" && from.current_hp < Math.floor(calculateActualStat(from, "hp") / 3)
            && move.type === "Bug") ||
        (from.ability === "Flash Fire" && from.extra_data !== undefined && from.extra_data["flash_fire_active"]) ||
        (from.ability === "Plus" && from.extra_data !== undefined && from.extra_data["plus_active"]) ||
        (from.ability === "Minus" && from.extra_data !== undefined && from.extra_data["minus_active"]) ||
        (from.ability === "Solar Power" && (field.weather === "Sun" || field.weather === "Harsh Sun")) ||
        (from.ability === "Steelworker" && move.type === "Steel")
    ) {
        att_modifiers.push(6144 / 4096);
    }

    if ((from.ability === "Huge Power" && move.category === "Physical") ||
        (from.ability === "Pure Power" && move.category === "Physical") ||
        (from.ability === "Water Bubble" && move.type === "Water")
        //or stakeout
    ) {
        att_modifiers.push(2);
    }

    if ((from.item === "Choice Band" && move.category === "Physical") ||
        (from.item === "Choice Specs" && move.category === "Special")) {
        att_modifiers.push(6144 / 4096);
    }

    if (
        (from.item === "Thick Club" && ["Cubone" as pokemon_name, "Marowak" as pokemon_name].includes(from.name)
            && move.category === "Physical")
        || (from.item === "Deep Sea Tooth" && from.name === "Clamperl")
        || (from.item === "Light Ball" && (from.name === "Pichu" || from.name === "Pikachu"))
    ) {
        att_modifiers.push(2);
    }

    //flower gift

    if (
        (to.ability === "Marvel Scale" && to.status !== "Healthy" && def_stat_used === "def")
        || (to.ability === "Grass Pelt" && field.terrain === "Grassy" && def_stat_used === "def")
    ) {
        def_modifiers.push(6144 / 4096);
    }

    if (to.ability === "Fur Coat" && def_stat_used === "def") {
        def_modifiers.push(2);
    }

    if (
        (to.item === "Eviolite" && can_evolve(to.name)) ||
        (to.item === "Assult Vest" && def_stat_used === "sp_def")
    ) {
        def_modifiers.push(6144 / 4096);
    }

    if (to.item === "Deep Sea Scale" && to.name === "Clamperl") {
        def_modifiers.push(2);
    }

    return [
        [att, ...att_modifiers].reduce((a, b) => Math.floor(a * b)),
        [def, ...def_modifiers].reduce((a, b) => Math.floor(a * b)),
        att_stat_used,
        def_stat_used
    ];

}

function is_correct_resist_berry(item: item, type: pokemon_type) {
    switch (type) {
        case "Fire":
            return item === "Occa Berry";
        case "Water":
            return item === "Passho Berry";
        case "Grass":
            return item === "Rindo Berry";
        case "Ice":
            return item === "Yache Berry";
        case "Normal":
            return item === "Chilan Berry";
        case "None":
            return false;
        case "Dragon":
            return item === "Haban Berry";
        case "Ghost":
            return item === "Kasib Berry";
        case "Bug":
            return item === "Tanga Berry";
        case "Electric":
            return item === "Wacan Berry";
        case "Poison":
            return item === "Kebia Berry";
        case "Fairy":
            return item === "Roseli Berry";
        case "Flying":
            return item === "Coba Berry";
        case "Steel":
            return item === "Babiri Berry";
        case "Ground":
            return item === "Shuca Berry";
        case "Rock":
            return item === "Charti Berry";
        case "Dark":
            return item === "Colbur Berry"
        case "Fighting":
            return item === "Chople Berry";
        case "Psychic":
            return item === "Payapa Berry";

    }
}

function get_final_modifiers(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                             field: pokemon_field, original_move: move, move: move, type_effectivness: number): number[] {

    let final_modifiers = [1];

    if (
        (to_side.reflect && move.category === "Physical") ||
        (to_side.light_screen && move.category === "Special") ||
        (to_side.aurora_veil)
    ) {
        final_modifiers.push(field.game_type === "Doubles" ? 2732 / 4096 : 2048 / 4096);
    }

    if (from.ability === "Neuroforce" && type_effectivness > 1) {
        final_modifiers.push(5120 / 4096);
    }
    if (from.ability === "Sniper" && move.is_crit) {
        final_modifiers.push(6144 / 4096);
    }
    if (from.ability === "Tinted Lens" && type_effectivness < 1) {
        final_modifiers.push(8192 / 4096);
    }
    if ((to.ability === "Multiscale" || to.ability === "Shadow Shield")
        && to.current_hp === calculateActualStat(to, "hp")) {
        final_modifiers.push(0.5);
    }
    if (to.ability === "Fluffy" && contact_moves.has(move.name)) {
        final_modifiers.push(0.5);
    }
    if (to_side.friend_guard) {
        final_modifiers.push(3072 / 4096);
    }
    if ((to.ability === "Solid Rock" || to.ability === "Filter" || to.ability === "Prism Armor")
        && type_effectivness > 1) {

        final_modifiers.push(3072 / 4096);
    }

    if (move.name === "Metronome" && move.extra_data && move.extra_data["move_count"]) {
        const move_count = move.extra_data["move_count"];
        if (move_count >= 5) {
            final_modifiers.push(2);
        }
        final_modifiers.push([1, 4915 / 4096, 5734 / 4096, 6553 / 4096, 7372 / 4096][move_count]);
    }
    if (to.ability === "Fluffy" && move.type === "Fire") {
        final_modifiers.push(2);
    }
    if (from.item === "Expert Belt" && type_effectivness > 1) {
        final_modifiers.push(4915 / 4096);
    }
    if (from.item === "Life Orb") {
        final_modifiers.push(5324 / 4096);
    }
    if (
        (type_effectivness > 1 && is_correct_resist_berry(to.item, move.type)) ||
        (move.type === "Normal" && to.item === "Chilan Berry")
    ) {
        final_modifiers.push(0.5);
    }
    //dive + surf, dig + earthquake, etc


    return final_modifiers;
}

function is_max_move(move: move): boolean {
    return false;
}

//https://www.trainertower.com/dawoblefets-damage-dissertation/
export function calculateDamage(from: pokemon, to: pokemon, from_side: pokemon_side, to_side: pokemon_side,
                                field: pokemon_field, original_move: move,
                                is_2nd_parental_bond_hit: boolean = false): number[] {

    let move = apply_type_change_stuff(from, to, from_side, to_side, field, original_move);

    const base_power = calculate_base_power(from, to, from_side, to_side, field, original_move, move);

    let [relevant_att, relevant_def, att_stat_used, def_stat_used] =
        calculate_actual_att_def(from, to, from_side, to_side, field, original_move, move);

    let dmg = (
        Math.floor(
            Math.floor(
                Math.floor(((2 * from.level) / 5) + 2) * base_power * relevant_att / relevant_def
            ) / 50
        ) + 2
    );

    let more_modifiers: number[] = [];

    if (field.game_type === "Doubles" && move.is_spread_move) {
        more_modifiers.push(3072 / 4096);
    }

    //parental bond

    if (field.weather === "Sun" || field.weather === "Harsh Sun") {
        if (move.type === "Fire") {
            more_modifiers.push(6144 / 4096);
        } else if (move.type === "Water") {
            more_modifiers.push(2048 / 4096);
        }
    }

    if (field.weather === "Rain" || field.weather === "Heavy Rain") {
        if (move.type === "Fire") {
            more_modifiers.push(2048 / 4096);
        } else if (move.type === "Water") {
            more_modifiers.push(6144 / 4096);
        }
    }

    if (move.is_crit) {
        more_modifiers.push(3 / 2);
    }

    let damages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        (i) => Math.floor((dmg * (100 - i)) / 100)
    );

    let more_modifiers2: number[] = [];

    if (move.type === from.type1 || move.type === from.type2) {
        if (from.ability === "Adaptability") {
            more_modifiers2.push(8192 / 4096);
        } else {
            more_modifiers2.push(6144 / 4096);
        }
    }

    const type_effectivness = calculate_type_effectiveness(from, to, from_side, to_side, field, move);
    more_modifiers2.push(type_effectivness);

    if (from.status === "Burned" && move.name !== "Facade" && from.ability !== "Guts") {
        more_modifiers2.push(2048 / 4096);
    }
    const final_modifiers = get_final_modifiers(from, to, from_side, to_side, field, original_move, move, type_effectivness);

    more_modifiers2.push(final_modifiers.reduce((a, b) => a * b));

    if (to.protecting && (move.is_z_move || from.dynamaxed)) {
        more_modifiers2.push(1024 / 4096);
    }else{
        if(to.protecting){
            return [0];
        }
    }

    return damages.map(
        (a) => poke_round([a, ...more_modifiers2].reduce((a, b) => Math.floor(a * b)))
    );
}


