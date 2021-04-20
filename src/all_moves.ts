import {move, pokemon_type, move_type} from "./pokemon";


export let all_moves: { [key: string]: move } = {};

all_moves["Blizzard"] = {
    name: "Blizzard",
    type: "Ice",
    category: "Special",
    power: 110,
    is_spread_move: true,
    is_crit: false,
    is_z_move: false,
};

all_moves["Tackle"] = {
    name: "Tackle",
    type: "Normal",
    category: "Physical",
    power: 30,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false,
};

all_moves["High Horsepower"] = {
    name: "High Horsepower",
    type: "Ground",
    category: "Physical",
    power: 95,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false,
};
all_moves["10,000,000 Volt Thunderbolt"] = {
    name: "10,000,000 Volt Thunderbolt",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Absorb"] = {
    name: "Absorb",
    type: "Grass",
    category: "Special",
    power: 30,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Accelerock"] = {
    name: "Accelerock",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Acid"] = {
    name: "Acid",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Acid Armor"] = {
    name: "Acid Armor",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Acid Downpour"] = {
    name: "Acid Downpour",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Acid Spray"] = {
    name: "Acid Spray",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Acrobatics"] = {
    name: "Acrobatics",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Acupressure"] = {
    name: "Acupressure",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aerial Ace"] = {
    name: "Aerial Ace",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aeroblast"] = {
    name: "Aeroblast",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["After You"] = {
    name: "After You",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Agility"] = {
    name: "Agility",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Air Cutter"] = {
    name: "Air Cutter",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Air Slash"] = {
    name: "Air Slash",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["All-Out Pummeling"] = {
    name: "All-Out Pummeling",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ally Switch"] = {
    name: "Ally Switch",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Amnesia"] = {
    name: "Amnesia",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Anchor Shot"] = {
    name: "Anchor Shot",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ancient Power"] = {
    name: "Ancient Power",
    type: "Rock",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Apple Acid"] = {
    name: "Apple Acid",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aqua Jet"] = {
    name: "Aqua Jet",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aqua Ring"] = {
    name: "Aqua Ring",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aqua Tail"] = {
    name: "Aqua Tail",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Arm Thrust"] = {
    name: "Arm Thrust",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aromatherapy"] = {
    name: "Aromatherapy",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aromatic Mist"] = {
    name: "Aromatic Mist",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Assist"] = {
    name: "Assist",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Assurance"] = {
    name: "Assurance",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Astonish"] = {
    name: "Astonish",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Astral Barrage"] = {
    name: "Astral Barrage",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Attack Order"] = {
    name: "Attack Order",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Attract"] = {
    name: "Attract",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aura Sphere"] = {
    name: "Aura Sphere",
    type: "Fighting",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aura Wheel"] = {
    name: "Aura Wheel",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aurora Beam"] = {
    name: "Aurora Beam",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Aurora Veil"] = {
    name: "Aurora Veil",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Autotomize"] = {
    name: "Autotomize",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Avalanche"] = {
    name: "Avalanche",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Baby-Doll Eyes"] = {
    name: "Baby-Doll Eyes",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Baddy Bad"] = {
    name: "Baddy Bad",
    type: "Dark",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Baneful Bunker"] = {
    name: "Baneful Bunker",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Barrage"] = {
    name: "Barrage",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Barrier"] = {
    name: "Barrier",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Baton Pass"] = {
    name: "Baton Pass",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Beak Blast"] = {
    name: "Beak Blast",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Beat Up"] = {
    name: "Beat Up",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Behemoth Bash"] = {
    name: "Behemoth Bash",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Behemoth Blade"] = {
    name: "Behemoth Blade",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Belch"] = {
    name: "Belch",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Belly Drum"] = {
    name: "Belly Drum",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bestow"] = {
    name: "Bestow",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bide"] = {
    name: "Bide",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bind"] = {
    name: "Bind",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bite"] = {
    name: "Bite",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Black Hole Eclipse"] = {
    name: "Black Hole Eclipse",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Blast Burn"] = {
    name: "Blast Burn",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Blaze Kick"] = {
    name: "Blaze Kick",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};

all_moves["Block"] = {
    name: "Block",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bloom Doom"] = {
    name: "Bloom Doom",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Blue Flare"] = {
    name: "Blue Flare",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Body Press"] = {
    name: "Body Press",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Body Slam"] = {
    name: "Body Slam",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bolt Beak"] = {
    name: "Bolt Beak",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bolt Strike"] = {
    name: "Bolt Strike",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bone Club"] = {
    name: "Bone Club",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bone Rush"] = {
    name: "Bone Rush",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bonemerang"] = {
    name: "Bonemerang",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Boomburst"] = {
    name: "Boomburst",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bounce"] = {
    name: "Bounce",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bouncy Bubble"] = {
    name: "Bouncy Bubble",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Branch Poke"] = {
    name: "Branch Poke",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Brave Bird"] = {
    name: "Brave Bird",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Breaking Swipe"] = {
    name: "Breaking Swipe",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Breakneck Blitz"] = {
    name: "Breakneck Blitz",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Brick Break"] = {
    name: "Brick Break",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Brine"] = {
    name: "Brine",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Brutal Swing"] = {
    name: "Brutal Swing",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bubble"] = {
    name: "Bubble",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bubble Beam"] = {
    name: "Bubble Beam",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bug Bite"] = {
    name: "Bug Bite",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bug Buzz"] = {
    name: "Bug Buzz",
    type: "Bug",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bulk Up"] = {
    name: "Bulk Up",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bulldoze"] = {
    name: "Bulldoze",
    type: "Ground",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bullet Punch"] = {
    name: "Bullet Punch",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Bullet Seed"] = {
    name: "Bullet Seed",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Burn Up"] = {
    name: "Burn Up",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Burning Jealousy"] = {
    name: "Burning Jealousy",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Buzzy Buzz"] = {
    name: "Buzzy Buzz",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Calm Mind"] = {
    name: "Calm Mind",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Camouflage"] = {
    name: "Camouflage",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Captivate"] = {
    name: "Captivate",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Catastropika"] = {
    name: "Catastropika",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Celebrate"] = {
    name: "Celebrate",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Charge"] = {
    name: "Charge",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Charge Beam"] = {
    name: "Charge Beam",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Charm"] = {
    name: "Charm",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Chatter"] = {
    name: "Chatter",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Chip Away"] = {
    name: "Chip Away",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Circle Throw"] = {
    name: "Circle Throw",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Clamp"] = {
    name: "Clamp",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Clanging Scales"] = {
    name: "Clanging Scales",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Clangorous Soul"] = {
    name: "Clangorous Soul",
    type: "Dragon",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Clangorous Soulblaze"] = {
    name: "Clangorous Soulblaze",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Clear Smog"] = {
    name: "Clear Smog",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Close Combat"] = {
    name: "Close Combat",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Coaching"] = {
    name: "Coaching",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Coil"] = {
    name: "Coil",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Comet Punch"] = {
    name: "Comet Punch",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Confide"] = {
    name: "Confide",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Confuse Ray"] = {
    name: "Confuse Ray",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Confusion"] = {
    name: "Confusion",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Constrict"] = {
    name: "Constrict",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Continental Crush"] = {
    name: "Continental Crush",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Conversion"] = {
    name: "Conversion",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Conversion 2"] = {
    name: "Conversion 2",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Copycat"] = {
    name: "Copycat",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Core Enforcer"] = {
    name: "Core Enforcer",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Corkscrew Crash"] = {
    name: "Corkscrew Crash",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Corrosive Gas"] = {
    name: "Corrosive Gas",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Cosmic Power"] = {
    name: "Cosmic Power",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Cotton Guard"] = {
    name: "Cotton Guard",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Cotton Spore"] = {
    name: "Cotton Spore",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Counter"] = {
    name: "Counter",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Court Change"] = {
    name: "Court Change",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Covet"] = {
    name: "Covet",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Crabhammer"] = {
    name: "Crabhammer",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Crafty Shield"] = {
    name: "Crafty Shield",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Cross Chop"] = {
    name: "Cross Chop",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Cross Poison"] = {
    name: "Cross Poison",
    type: "Poison",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Crunch"] = {
    name: "Crunch",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Crush Claw"] = {
    name: "Crush Claw",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Crush Grip"] = {
    name: "Crush Grip",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Curse"] = {
    name: "Curse",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Cut"] = {
    name: "Cut",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dark Pulse"] = {
    name: "Dark Pulse",
    type: "Dark",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dark Void"] = {
    name: "Dark Void",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Darkest Lariat"] = {
    name: "Darkest Lariat",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dazzling Gleam"] = {
    name: "Dazzling Gleam",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Decorate"] = {
    name: "Decorate",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Defend Order"] = {
    name: "Defend Order",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Defense Curl"] = {
    name: "Defense Curl",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Defog"] = {
    name: "Defog",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Destiny Bond"] = {
    name: "Destiny Bond",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Detect"] = {
    name: "Detect",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Devastating Drake"] = {
    name: "Devastating Drake",
    type: "Dragon",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Diamond Storm"] = {
    name: "Diamond Storm",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dig"] = {
    name: "Dig",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Disable"] = {
    name: "Disable",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Disarming Voice"] = {
    name: "Disarming Voice",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Discharge"] = {
    name: "Discharge",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dive"] = {
    name: "Dive",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dizzy Punch"] = {
    name: "Dizzy Punch",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Doom Desire"] = {
    name: "Doom Desire",
    type: "Steel",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Double Hit"] = {
    name: "Double Hit",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Double Iron Bash"] = {
    name: "Double Iron Bash",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Double Kick"] = {
    name: "Double Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Double Slap"] = {
    name: "Double Slap",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Double Team"] = {
    name: "Double Team",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Double-Edge"] = {
    name: "Double-Edge",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Draco Meteor"] = {
    name: "Draco Meteor",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Ascent"] = {
    name: "Dragon Ascent",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Breath"] = {
    name: "Dragon Breath",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Claw"] = {
    name: "Dragon Claw",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Dance"] = {
    name: "Dragon Dance",
    type: "Dragon",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Darts"] = {
    name: "Dragon Darts",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Energy"] = {
    name: "Dragon Energy",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Hammer"] = {
    name: "Dragon Hammer",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Pulse"] = {
    name: "Dragon Pulse",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Rage"] = {
    name: "Dragon Rage",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Rush"] = {
    name: "Dragon Rush",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dragon Tail"] = {
    name: "Dragon Tail",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Drain Punch"] = {
    name: "Drain Punch",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Draining Kiss"] = {
    name: "Draining Kiss",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dream Eater"] = {
    name: "Dream Eater",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Drill Peck"] = {
    name: "Drill Peck",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Drill Run"] = {
    name: "Drill Run",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Drum Beating"] = {
    name: "Drum Beating",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dual Chop"] = {
    name: "Dual Chop",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dual Wingbeat"] = {
    name: "Dual Wingbeat",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dynamax Cannon"] = {
    name: "Dynamax Cannon",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Dynamic Punch"] = {
    name: "Dynamic Punch",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Earth Power"] = {
    name: "Earth Power",
    type: "Ground",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Earthquake"] = {
    name: "Earthquake",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Echoed Voice"] = {
    name: "Echoed Voice",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Eerie Impulse"] = {
    name: "Eerie Impulse",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Eerie Spell"] = {
    name: "Eerie Spell",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Egg Bomb"] = {
    name: "Egg Bomb",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Electric Terrain"] = {
    name: "Electric Terrain",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Electrify"] = {
    name: "Electrify",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Electro Ball"] = {
    name: "Electro Ball",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Electroweb"] = {
    name: "Electroweb",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Embargo"] = {
    name: "Embargo",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ember"] = {
    name: "Ember",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Encore"] = {
    name: "Encore",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Endeavor"] = {
    name: "Endeavor",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Endure"] = {
    name: "Endure",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Energy Ball"] = {
    name: "Energy Ball",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Entrainment"] = {
    name: "Entrainment",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Eruption"] = {
    name: "Eruption",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Eternabeam"] = {
    name: "Eternabeam",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Expanding Force"] = {
    name: "Expanding Force",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Explosion"] = {
    name: "Explosion",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Extrasensory"] = {
    name: "Extrasensory",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Extreme Evoboost"] = {
    name: "Extreme Evoboost",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Extreme Speed"] = {
    name: "Extreme Speed",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Facade"] = {
    name: "Facade",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fairy Lock"] = {
    name: "Fairy Lock",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fairy Wind"] = {
    name: "Fairy Wind",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fake Out"] = {
    name: "Fake Out",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fake Tears"] = {
    name: "Fake Tears",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["False Surrender"] = {
    name: "False Surrender",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["False Swipe"] = {
    name: "False Swipe",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Feather Dance"] = {
    name: "Feather Dance",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Feint"] = {
    name: "Feint",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Feint Attack"] = {
    name: "Feint Attack",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fell Stinger"] = {
    name: "Fell Stinger",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fiery Dance"] = {
    name: "Fiery Dance",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fiery Wrath"] = {
    name: "Fiery Wrath",
    type: "Dark",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Final Gambit"] = {
    name: "Final Gambit",
    type: "Fighting",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fire Blast"] = {
    name: "Fire Blast",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fire Fang"] = {
    name: "Fire Fang",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fire Lash"] = {
    name: "Fire Lash",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fire Pledge"] = {
    name: "Fire Pledge",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fire Punch"] = {
    name: "Fire Punch",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fire Spin"] = {
    name: "Fire Spin",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["First Impression"] = {
    name: "First Impression",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fishious Rend"] = {
    name: "Fishious Rend",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fissure"] = {
    name: "Fissure",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flail"] = {
    name: "Flail",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flame Burst"] = {
    name: "Flame Burst",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flame Charge"] = {
    name: "Flame Charge",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flame Wheel"] = {
    name: "Flame Wheel",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flamethrower"] = {
    name: "Flamethrower",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flare Blitz"] = {
    name: "Flare Blitz",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flash"] = {
    name: "Flash",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flash Cannon"] = {
    name: "Flash Cannon",
    type: "Steel",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flatter"] = {
    name: "Flatter",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fleur Cannon"] = {
    name: "Fleur Cannon",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fling"] = {
    name: "Fling",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flip Turn"] = {
    name: "Flip Turn",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Floaty Fall"] = {
    name: "Floaty Fall",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Floral Healing"] = {
    name: "Floral Healing",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flower Shield"] = {
    name: "Flower Shield",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fly"] = {
    name: "Fly",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Flying Press"] = {
    name: "Flying Press",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Focus Blast"] = {
    name: "Focus Blast",
    type: "Fighting",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Focus Energy"] = {
    name: "Focus Energy",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Focus Punch"] = {
    name: "Focus Punch",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Follow Me"] = {
    name: "Follow Me",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Force Palm"] = {
    name: "Force Palm",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Foresight"] = {
    name: "Foresight",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Forest's Curse"] = {
    name: "Forest's Curse",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Foul Play"] = {
    name: "Foul Play",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Freeze Shock"] = {
    name: "Freeze Shock",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Freeze-Dry"] = {
    name: "Freeze-Dry",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Freezing Glare"] = {
    name: "Freezing Glare",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Freezy Frost"] = {
    name: "Freezy Frost",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Frenzy Plant"] = {
    name: "Frenzy Plant",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Frost Breath"] = {
    name: "Frost Breath",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Frustration"] = {
    name: "Frustration",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fury Attack"] = {
    name: "Fury Attack",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fury Cutter"] = {
    name: "Fury Cutter",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fury Swipes"] = {
    name: "Fury Swipes",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fusion Bolt"] = {
    name: "Fusion Bolt",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Fusion Flare"] = {
    name: "Fusion Flare",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Future Sight"] = {
    name: "Future Sight",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Befuddle"] = {
    name: "G-Max Befuddle",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Cannonade"] = {
    name: "G-Max Cannonade",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Centiferno"] = {
    name: "G-Max Centiferno",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Chi Strike"] = {
    name: "G-Max Chi Strike",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Cuddle"] = {
    name: "G-Max Cuddle",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Depletion"] = {
    name: "G-Max Depletion",
    type: "Dragon",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Drum Solo"] = {
    name: "G-Max Drum Solo",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Finale"] = {
    name: "G-Max Finale",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Fireball"] = {
    name: "G-Max Fireball",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Foam Burst"] = {
    name: "G-Max Foam Burst",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Gold Rush"] = {
    name: "G-Max Gold Rush",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Gravitas"] = {
    name: "G-Max Gravitas",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Hydrosnipe"] = {
    name: "G-Max Hydrosnipe",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Malodor"] = {
    name: "G-Max Malodor",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Meltdown"] = {
    name: "G-Max Meltdown",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max One Blow"] = {
    name: "G-Max One Blow",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Rapid Flow"] = {
    name: "G-Max Rapid Flow",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Replenish"] = {
    name: "G-Max Replenish",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Resonance"] = {
    name: "G-Max Resonance",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Sandblast"] = {
    name: "G-Max Sandblast",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Smite"] = {
    name: "G-Max Smite",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Snooze"] = {
    name: "G-Max Snooze",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Steelsurge"] = {
    name: "G-Max Steelsurge",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Stonesurge"] = {
    name: "G-Max Stonesurge",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Stun Shock"] = {
    name: "G-Max Stun Shock",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Sweetness"] = {
    name: "G-Max Sweetness",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Tartness"] = {
    name: "G-Max Tartness",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Terror"] = {
    name: "G-Max Terror",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Vine Lash"] = {
    name: "G-Max Vine Lash",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Volcalith"] = {
    name: "G-Max Volcalith",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Volt Crash"] = {
    name: "G-Max Volt Crash",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Wildfire"] = {
    name: "G-Max Wildfire",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["G-Max Wind Rage"] = {
    name: "G-Max Wind Rage",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gastro Acid"] = {
    name: "Gastro Acid",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gear Grind"] = {
    name: "Gear Grind",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gear Up"] = {
    name: "Gear Up",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Genesis Supernova"] = {
    name: "Genesis Supernova",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Geomancy"] = {
    name: "Geomancy",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Giga Drain"] = {
    name: "Giga Drain",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Giga Impact"] = {
    name: "Giga Impact",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gigavolt Havoc"] = {
    name: "Gigavolt Havoc",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Glacial Lance"] = {
    name: "Glacial Lance",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Glaciate"] = {
    name: "Glaciate",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Glare"] = {
    name: "Glare",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Glitzy Glow"] = {
    name: "Glitzy Glow",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grass Knot"] = {
    name: "Grass Knot",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grass Pledge"] = {
    name: "Grass Pledge",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grass Whistle"] = {
    name: "Grass Whistle",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grassy Glide"] = {
    name: "Grassy Glide",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grassy Terrain"] = {
    name: "Grassy Terrain",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grav Apple"] = {
    name: "Grav Apple",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gravity"] = {
    name: "Gravity",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Growl"] = {
    name: "Growl",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Growth"] = {
    name: "Growth",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Grudge"] = {
    name: "Grudge",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Guard Split"] = {
    name: "Guard Split",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Guard Swap"] = {
    name: "Guard Swap",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Guardian of Alola"] = {
    name: "Guardian of Alola",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Guillotine"] = {
    name: "Guillotine",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gunk Shot"] = {
    name: "Gunk Shot",
    type: "Poison",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gust"] = {
    name: "Gust",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Gyro Ball"] = {
    name: "Gyro Ball",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hail"] = {
    name: "Hail",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hammer Arm"] = {
    name: "Hammer Arm",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Happy Hour"] = {
    name: "Happy Hour",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Harden"] = {
    name: "Harden",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Haze"] = {
    name: "Haze",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Head Charge"] = {
    name: "Head Charge",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Head Smash"] = {
    name: "Head Smash",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Headbutt"] = {
    name: "Headbutt",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heal Bell"] = {
    name: "Heal Bell",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heal Block"] = {
    name: "Heal Block",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heal Order"] = {
    name: "Heal Order",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heal Pulse"] = {
    name: "Heal Pulse",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Healing Wish"] = {
    name: "Healing Wish",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heart Stamp"] = {
    name: "Heart Stamp",
    type: "Psychic",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heart Swap"] = {
    name: "Heart Swap",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heat Crash"] = {
    name: "Heat Crash",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heat Wave"] = {
    name: "Heat Wave",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Heavy Slam"] = {
    name: "Heavy Slam",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Helping Hand"] = {
    name: "Helping Hand",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hex"] = {
    name: "Hex",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hidden Power"] = {
    name: "Hidden Power",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["High Jump Kick"] = {
    name: "High Jump Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hold Back"] = {
    name: "Hold Back",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hold Hands"] = {
    name: "Hold Hands",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hone Claws"] = {
    name: "Hone Claws",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Horn Attack"] = {
    name: "Horn Attack",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Horn Drill"] = {
    name: "Horn Drill",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Horn Leech"] = {
    name: "Horn Leech",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Howl"] = {
    name: "Howl",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hurricane"] = {
    name: "Hurricane",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hydro Cannon"] = {
    name: "Hydro Cannon",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hydro Pump"] = {
    name: "Hydro Pump",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hydro Vortex"] = {
    name: "Hydro Vortex",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hyper Beam"] = {
    name: "Hyper Beam",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hyper Fang"] = {
    name: "Hyper Fang",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hyper Voice"] = {
    name: "Hyper Voice",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hyperspace Fury"] = {
    name: "Hyperspace Fury",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hyperspace Hole"] = {
    name: "Hyperspace Hole",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Hypnosis"] = {
    name: "Hypnosis",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Ball"] = {
    name: "Ice Ball",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Beam"] = {
    name: "Ice Beam",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Burn"] = {
    name: "Ice Burn",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Fang"] = {
    name: "Ice Fang",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Hammer"] = {
    name: "Ice Hammer",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Punch"] = {
    name: "Ice Punch",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ice Shard"] = {
    name: "Ice Shard",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Icicle Crash"] = {
    name: "Icicle Crash",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Icicle Spear"] = {
    name: "Icicle Spear",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Icy Wind"] = {
    name: "Icy Wind",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Imprison"] = {
    name: "Imprison",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Incinerate"] = {
    name: "Incinerate",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Inferno"] = {
    name: "Inferno",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Inferno Overdrive"] = {
    name: "Inferno Overdrive",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Infestation"] = {
    name: "Infestation",
    type: "Bug",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ingrain"] = {
    name: "Ingrain",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Instruct"] = {
    name: "Instruct",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ion Deluge"] = {
    name: "Ion Deluge",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Iron Defense"] = {
    name: "Iron Defense",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Iron Head"] = {
    name: "Iron Head",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Iron Tail"] = {
    name: "Iron Tail",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Jaw Lock"] = {
    name: "Jaw Lock",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Judgment"] = {
    name: "Judgment",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Jump Kick"] = {
    name: "Jump Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Jungle Healing"] = {
    name: "Jungle Healing",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Karate Chop"] = {
    name: "Karate Chop",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Kinesis"] = {
    name: "Kinesis",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["King's Shield"] = {
    name: "King's Shield",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Knock Off"] = {
    name: "Knock Off",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Land's Wrath"] = {
    name: "Land's Wrath",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Laser Focus"] = {
    name: "Laser Focus",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lash Out"] = {
    name: "Lash Out",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Last Resort"] = {
    name: "Last Resort",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lava Plume"] = {
    name: "Lava Plume",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leaf Blade"] = {
    name: "Leaf Blade",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leaf Storm"] = {
    name: "Leaf Storm",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leaf Tornado"] = {
    name: "Leaf Tornado",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leafage"] = {
    name: "Leafage",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leech Life"] = {
    name: "Leech Life",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leech Seed"] = {
    name: "Leech Seed",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Leer"] = {
    name: "Leer",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Let's Snuggle Forever"] = {
    name: "Let's Snuggle Forever",
    type: "Fairy",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lick"] = {
    name: "Lick",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Life Dew"] = {
    name: "Life Dew",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Light of Ruin"] = {
    name: "Light of Ruin",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Light Screen"] = {
    name: "Light Screen",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Light That Burns the Sky"] = {
    name: "Light That Burns the Sky",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Liquidation"] = {
    name: "Liquidation",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lock-On"] = {
    name: "Lock-On",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lovely Kiss"] = {
    name: "Lovely Kiss",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Low Kick"] = {
    name: "Low Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Low Sweep"] = {
    name: "Low Sweep",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lucky Chant"] = {
    name: "Lucky Chant",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lunar Dance"] = {
    name: "Lunar Dance",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Lunge"] = {
    name: "Lunge",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Luster Purge"] = {
    name: "Luster Purge",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mach Punch"] = {
    name: "Mach Punch",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magic Coat"] = {
    name: "Magic Coat",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magic Powder"] = {
    name: "Magic Powder",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magic Room"] = {
    name: "Magic Room",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magical Leaf"] = {
    name: "Magical Leaf",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magma Storm"] = {
    name: "Magma Storm",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magnet Bomb"] = {
    name: "Magnet Bomb",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magnet Rise"] = {
    name: "Magnet Rise",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magnetic Flux"] = {
    name: "Magnetic Flux",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Magnitude"] = {
    name: "Magnitude",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Malicious Moonsault"] = {
    name: "Malicious Moonsault",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mat Block"] = {
    name: "Mat Block",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Airstream"] = {
    name: "Max Airstream",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Darkness"] = {
    name: "Max Darkness",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Flare"] = {
    name: "Max Flare",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Flutterby"] = {
    name: "Max Flutterby",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Geyser"] = {
    name: "Max Geyser",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Guard"] = {
    name: "Max Guard",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Hailstorm"] = {
    name: "Max Hailstorm",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Knuckle"] = {
    name: "Max Knuckle",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Lightning"] = {
    name: "Max Lightning",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Mindstorm"] = {
    name: "Max Mindstorm",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Ooze"] = {
    name: "Max Ooze",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Overgrowth"] = {
    name: "Max Overgrowth",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Phantasm"] = {
    name: "Max Phantasm",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Quake"] = {
    name: "Max Quake",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Rockfall"] = {
    name: "Max Rockfall",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Starfall"] = {
    name: "Max Starfall",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Steelspike"] = {
    name: "Max Steelspike",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Strike"] = {
    name: "Max Strike",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Max Wyrmwind"] = {
    name: "Max Wyrmwind",
    type: "Dragon",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Me First"] = {
    name: "Me First",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mean Look"] = {
    name: "Mean Look",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Meditate"] = {
    name: "Meditate",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mega Drain"] = {
    name: "Mega Drain",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mega Kick"] = {
    name: "Mega Kick",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mega Punch"] = {
    name: "Mega Punch",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Megahorn"] = {
    name: "Megahorn",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Memento"] = {
    name: "Memento",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Menacing Moonraze Maelstrom"] = {
    name: "Menacing Moonraze Maelstrom",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Metal Burst"] = {
    name: "Metal Burst",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Metal Claw"] = {
    name: "Metal Claw",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Metal Sound"] = {
    name: "Metal Sound",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Meteor Assault"] = {
    name: "Meteor Assault",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Meteor Beam"] = {
    name: "Meteor Beam",
    type: "Rock",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Meteor Mash"] = {
    name: "Meteor Mash",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Metronome"] = {
    name: "Metronome",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Milk Drink"] = {
    name: "Milk Drink",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mimic"] = {
    name: "Mimic",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mind Blown"] = {
    name: "Mind Blown",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mind Reader"] = {
    name: "Mind Reader",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Minimize"] = {
    name: "Minimize",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Miracle Eye"] = {
    name: "Miracle Eye",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mirror Coat"] = {
    name: "Mirror Coat",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mirror Move"] = {
    name: "Mirror Move",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mirror Shot"] = {
    name: "Mirror Shot",
    type: "Steel",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mist"] = {
    name: "Mist",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mist Ball"] = {
    name: "Mist Ball",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Misty Explosion"] = {
    name: "Misty Explosion",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Misty Terrain"] = {
    name: "Misty Terrain",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Moonblast"] = {
    name: "Moonblast",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Moongeist Beam"] = {
    name: "Moongeist Beam",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Moonlight"] = {
    name: "Moonlight",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Morning Sun"] = {
    name: "Morning Sun",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mud Bomb"] = {
    name: "Mud Bomb",
    type: "Ground",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mud Shot"] = {
    name: "Mud Shot",
    type: "Ground",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mud Sport"] = {
    name: "Mud Sport",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mud-Slap"] = {
    name: "Mud-Slap",
    type: "Ground",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Muddy Water"] = {
    name: "Muddy Water",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Multi-Attack"] = {
    name: "Multi-Attack",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Mystical Fire"] = {
    name: "Mystical Fire",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Nasty Plot"] = {
    name: "Nasty Plot",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Natural Gift"] = {
    name: "Natural Gift",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Nature Power"] = {
    name: "Nature Power",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Nature's Madness"] = {
    name: "Nature's Madness",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Needle Arm"] = {
    name: "Needle Arm",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Never-Ending Nightmare"] = {
    name: "Never-Ending Nightmare",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Night Daze"] = {
    name: "Night Daze",
    type: "Dark",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Night Shade"] = {
    name: "Night Shade",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Night Slash"] = {
    name: "Night Slash",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Nightmare"] = {
    name: "Nightmare",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["No Retreat"] = {
    name: "No Retreat",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Noble Roar"] = {
    name: "Noble Roar",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Nuzzle"] = {
    name: "Nuzzle",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Oblivion Wing"] = {
    name: "Oblivion Wing",
    type: "Flying",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Obstruct"] = {
    name: "Obstruct",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Oceanic Operetta"] = {
    name: "Oceanic Operetta",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Octazooka"] = {
    name: "Octazooka",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Octolock"] = {
    name: "Octolock",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Odor Sleuth"] = {
    name: "Odor Sleuth",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Ominous Wind"] = {
    name: "Ominous Wind",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Origin Pulse"] = {
    name: "Origin Pulse",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Outrage"] = {
    name: "Outrage",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Overdrive"] = {
    name: "Overdrive",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Overheat"] = {
    name: "Overheat",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pain Split"] = {
    name: "Pain Split",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Parabolic Charge"] = {
    name: "Parabolic Charge",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Parting Shot"] = {
    name: "Parting Shot",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pay Day"] = {
    name: "Pay Day",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Payback"] = {
    name: "Payback",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Peck"] = {
    name: "Peck",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Perish Song"] = {
    name: "Perish Song",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Petal Blizzard"] = {
    name: "Petal Blizzard",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Petal Dance"] = {
    name: "Petal Dance",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Phantom Force"] = {
    name: "Phantom Force",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Photon Geyser"] = {
    name: "Photon Geyser",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pika Papow"] = {
    name: "Pika Papow",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pin Missile"] = {
    name: "Pin Missile",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Plasma Fists"] = {
    name: "Plasma Fists",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Play Nice"] = {
    name: "Play Nice",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Play Rough"] = {
    name: "Play Rough",
    type: "Fairy",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pluck"] = {
    name: "Pluck",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poison Fang"] = {
    name: "Poison Fang",
    type: "Poison",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poison Gas"] = {
    name: "Poison Gas",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poison Jab"] = {
    name: "Poison Jab",
    type: "Poison",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poison Powder"] = {
    name: "Poison Powder",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poison Sting"] = {
    name: "Poison Sting",
    type: "Poison",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poison Tail"] = {
    name: "Poison Tail",
    type: "Poison",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pollen Puff"] = {
    name: "Pollen Puff",
    type: "Bug",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Poltergeist"] = {
    name: "Poltergeist",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pound"] = {
    name: "Pound",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Powder"] = {
    name: "Powder",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Powder Snow"] = {
    name: "Powder Snow",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power Gem"] = {
    name: "Power Gem",
    type: "Rock",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power Split"] = {
    name: "Power Split",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power Swap"] = {
    name: "Power Swap",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power Trick"] = {
    name: "Power Trick",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power Trip"] = {
    name: "Power Trip",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power Whip"] = {
    name: "Power Whip",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Power-Up Punch"] = {
    name: "Power-Up Punch",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Precipice Blades"] = {
    name: "Precipice Blades",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Present"] = {
    name: "Present",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Prismatic Laser"] = {
    name: "Prismatic Laser",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Protect"] = {
    name: "Protect",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psybeam"] = {
    name: "Psybeam",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psych Up"] = {
    name: "Psych Up",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psychic"] = {
    name: "Psychic",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psychic Fangs"] = {
    name: "Psychic Fangs",
    type: "Psychic",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psychic Terrain"] = {
    name: "Psychic Terrain",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psycho Boost"] = {
    name: "Psycho Boost",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psycho Cut"] = {
    name: "Psycho Cut",
    type: "Psychic",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psycho Shift"] = {
    name: "Psycho Shift",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psyshock"] = {
    name: "Psyshock",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psystrike"] = {
    name: "Psystrike",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Psywave"] = {
    name: "Psywave",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pulverizing Pancake"] = {
    name: "Pulverizing Pancake",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Punishment"] = {
    name: "Punishment",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Purify"] = {
    name: "Purify",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pursuit"] = {
    name: "Pursuit",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Pyro Ball"] = {
    name: "Pyro Ball",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Quash"] = {
    name: "Quash",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Quick Attack"] = {
    name: "Quick Attack",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Quick Guard"] = {
    name: "Quick Guard",
    type: "Fighting",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Quiver Dance"] = {
    name: "Quiver Dance",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rage"] = {
    name: "Rage",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rage Powder"] = {
    name: "Rage Powder",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rain Dance"] = {
    name: "Rain Dance",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rapid Spin"] = {
    name: "Rapid Spin",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Razor Leaf"] = {
    name: "Razor Leaf",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Razor Shell"] = {
    name: "Razor Shell",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Razor Wind"] = {
    name: "Razor Wind",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Recover"] = {
    name: "Recover",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Recycle"] = {
    name: "Recycle",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Reflect"] = {
    name: "Reflect",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Reflect Type"] = {
    name: "Reflect Type",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Refresh"] = {
    name: "Refresh",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Relic Song"] = {
    name: "Relic Song",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rest"] = {
    name: "Rest",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Retaliate"] = {
    name: "Retaliate",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Return"] = {
    name: "Return",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Revelation Dance"] = {
    name: "Revelation Dance",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Revenge"] = {
    name: "Revenge",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Reversal"] = {
    name: "Reversal",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rising Voltage"] = {
    name: "Rising Voltage",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Roar"] = {
    name: "Roar",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Roar of Time"] = {
    name: "Roar of Time",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Blast"] = {
    name: "Rock Blast",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Climb"] = {
    name: "Rock Climb",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Polish"] = {
    name: "Rock Polish",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Slide"] = {
    name: "Rock Slide",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Smash"] = {
    name: "Rock Smash",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Throw"] = {
    name: "Rock Throw",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Tomb"] = {
    name: "Rock Tomb",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rock Wrecker"] = {
    name: "Rock Wrecker",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Role Play"] = {
    name: "Role Play",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rolling Kick"] = {
    name: "Rolling Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rollout"] = {
    name: "Rollout",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Roost"] = {
    name: "Roost",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Rototiller"] = {
    name: "Rototiller",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Round"] = {
    name: "Round",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sacred Fire"] = {
    name: "Sacred Fire",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sacred Sword"] = {
    name: "Sacred Sword",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Safeguard"] = {
    name: "Safeguard",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sand Attack"] = {
    name: "Sand Attack",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sand Tomb"] = {
    name: "Sand Tomb",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sandstorm"] = {
    name: "Sandstorm",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sappy Seed"] = {
    name: "Sappy Seed",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Savage Spin-Out"] = {
    name: "Savage Spin-Out",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Scald"] = {
    name: "Scald",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Scale Shot"] = {
    name: "Scale Shot",
    type: "Dragon",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Scary Face"] = {
    name: "Scary Face",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Scorching Sands"] = {
    name: "Scorching Sands",
    type: "Ground",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Scratch"] = {
    name: "Scratch",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Screech"] = {
    name: "Screech",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Searing Shot"] = {
    name: "Searing Shot",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Searing Sunraze Smash"] = {
    name: "Searing Sunraze Smash",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Secret Power"] = {
    name: "Secret Power",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Secret Sword"] = {
    name: "Secret Sword",
    type: "Fighting",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Seed Bomb"] = {
    name: "Seed Bomb",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Seed Flare"] = {
    name: "Seed Flare",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Seismic Toss"] = {
    name: "Seismic Toss",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Self-Destruct"] = {
    name: "Self-Destruct",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shadow Ball"] = {
    name: "Shadow Ball",
    type: "Ghost",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shadow Bone"] = {
    name: "Shadow Bone",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shadow Claw"] = {
    name: "Shadow Claw",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shadow Force"] = {
    name: "Shadow Force",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shadow Punch"] = {
    name: "Shadow Punch",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shadow Sneak"] = {
    name: "Shadow Sneak",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sharpen"] = {
    name: "Sharpen",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shattered Psyche"] = {
    name: "Shattered Psyche",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sheer Cold"] = {
    name: "Sheer Cold",
    type: "Ice",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shell Side Arm"] = {
    name: "Shell Side Arm",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shell Smash"] = {
    name: "Shell Smash",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shell Trap"] = {
    name: "Shell Trap",
    type: "Fire",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shift Gear"] = {
    name: "Shift Gear",
    type: "Steel",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shock Wave"] = {
    name: "Shock Wave",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Shore Up"] = {
    name: "Shore Up",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Signal Beam"] = {
    name: "Signal Beam",
    type: "Bug",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Silver Wind"] = {
    name: "Silver Wind",
    type: "Bug",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Simple Beam"] = {
    name: "Simple Beam",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sing"] = {
    name: "Sing",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sinister Arrow Raid"] = {
    name: "Sinister Arrow Raid",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sizzly Slide"] = {
    name: "Sizzly Slide",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sketch"] = {
    name: "Sketch",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Skill Swap"] = {
    name: "Skill Swap",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Skitter Smack"] = {
    name: "Skitter Smack",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Skull Bash"] = {
    name: "Skull Bash",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sky Attack"] = {
    name: "Sky Attack",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sky Drop"] = {
    name: "Sky Drop",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sky Uppercut"] = {
    name: "Sky Uppercut",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Slack Off"] = {
    name: "Slack Off",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Slam"] = {
    name: "Slam",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Slash"] = {
    name: "Slash",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sleep Powder"] = {
    name: "Sleep Powder",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sleep Talk"] = {
    name: "Sleep Talk",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sludge"] = {
    name: "Sludge",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sludge Bomb"] = {
    name: "Sludge Bomb",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sludge Wave"] = {
    name: "Sludge Wave",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Smack Down"] = {
    name: "Smack Down",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Smart Strike"] = {
    name: "Smart Strike",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Smelling Salts"] = {
    name: "Smelling Salts",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Smog"] = {
    name: "Smog",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Smokescreen"] = {
    name: "Smokescreen",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Snap Trap"] = {
    name: "Snap Trap",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Snarl"] = {
    name: "Snarl",
    type: "Dark",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Snatch"] = {
    name: "Snatch",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Snipe Shot"] = {
    name: "Snipe Shot",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Snore"] = {
    name: "Snore",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Soak"] = {
    name: "Soak",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Soft-Boiled"] = {
    name: "Soft-Boiled",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Solar Beam"] = {
    name: "Solar Beam",
    type: "Grass",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Solar Blade"] = {
    name: "Solar Blade",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sonic Boom"] = {
    name: "Sonic Boom",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Soul-Stealing 7-Star Strike"] = {
    name: "Soul-Stealing 7-Star Strike",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spacial Rend"] = {
    name: "Spacial Rend",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spark"] = {
    name: "Spark",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sparkling Aria"] = {
    name: "Sparkling Aria",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sparkly Swirl"] = {
    name: "Sparkly Swirl",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spectral Thief"] = {
    name: "Spectral Thief",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Speed Swap"] = {
    name: "Speed Swap",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spider Web"] = {
    name: "Spider Web",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spike Cannon"] = {
    name: "Spike Cannon",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spikes"] = {
    name: "Spikes",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spiky Shield"] = {
    name: "Spiky Shield",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spirit Break"] = {
    name: "Spirit Break",
    type: "Fairy",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spirit Shackle"] = {
    name: "Spirit Shackle",
    type: "Ghost",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spit Up"] = {
    name: "Spit Up",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spite"] = {
    name: "Spite",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Splash"] = {
    name: "Splash",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Splintered Stormshards"] = {
    name: "Splintered Stormshards",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Splishy Splash"] = {
    name: "Splishy Splash",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spore"] = {
    name: "Spore",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Spotlight"] = {
    name: "Spotlight",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stealth Rock"] = {
    name: "Stealth Rock",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Steam Eruption"] = {
    name: "Steam Eruption",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Steamroller"] = {
    name: "Steamroller",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Steel Beam"] = {
    name: "Steel Beam",
    type: "Steel",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Steel Roller"] = {
    name: "Steel Roller",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Steel Wing"] = {
    name: "Steel Wing",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sticky Web"] = {
    name: "Sticky Web",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stockpile"] = {
    name: "Stockpile",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stoked Sparksurfer"] = {
    name: "Stoked Sparksurfer",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stomp"] = {
    name: "Stomp",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stomping Tantrum"] = {
    name: "Stomping Tantrum",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stone Edge"] = {
    name: "Stone Edge",
    type: "Rock",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stored Power"] = {
    name: "Stored Power",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Storm Throw"] = {
    name: "Storm Throw",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Strange Steam"] = {
    name: "Strange Steam",
    type: "Fairy",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Strength"] = {
    name: "Strength",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Strength Sap"] = {
    name: "Strength Sap",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["String Shot"] = {
    name: "String Shot",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Struggle"] = {
    name: "Struggle",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Struggle Bug"] = {
    name: "Struggle Bug",
    type: "Bug",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stuff Cheeks"] = {
    name: "Stuff Cheeks",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Stun Spore"] = {
    name: "Stun Spore",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Submission"] = {
    name: "Submission",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Substitute"] = {
    name: "Substitute",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Subzero Slammer"] = {
    name: "Subzero Slammer",
    type: "Ice",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sucker Punch"] = {
    name: "Sucker Punch",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sunny Day"] = {
    name: "Sunny Day",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sunsteel Strike"] = {
    name: "Sunsteel Strike",
    type: "Steel",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Super Fang"] = {
    name: "Super Fang",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Superpower"] = {
    name: "Superpower",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Supersonic"] = {
    name: "Supersonic",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Supersonic Skystrike"] = {
    name: "Supersonic Skystrike",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Surf"] = {
    name: "Surf",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Surging Strikes"] = {
    name: "Surging Strikes",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Swagger"] = {
    name: "Swagger",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Swallow"] = {
    name: "Swallow",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sweet Kiss"] = {
    name: "Sweet Kiss",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Sweet Scent"] = {
    name: "Sweet Scent",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Swift"] = {
    name: "Swift",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Switcheroo"] = {
    name: "Switcheroo",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Swords Dance"] = {
    name: "Swords Dance",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Synchronoise"] = {
    name: "Synchronoise",
    type: "Psychic",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Synthesis"] = {
    name: "Synthesis",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tail Glow"] = {
    name: "Tail Glow",
    type: "Bug",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tail Slap"] = {
    name: "Tail Slap",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tail Whip"] = {
    name: "Tail Whip",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tailwind"] = {
    name: "Tailwind",
    type: "Flying",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Take Down"] = {
    name: "Take Down",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tar Shot"] = {
    name: "Tar Shot",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Taunt"] = {
    name: "Taunt",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tearful Look"] = {
    name: "Tearful Look",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Teatime"] = {
    name: "Teatime",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Techno Blast"] = {
    name: "Techno Blast",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tectonic Rage"] = {
    name: "Tectonic Rage",
    type: "Ground",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Teeter Dance"] = {
    name: "Teeter Dance",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Telekinesis"] = {
    name: "Telekinesis",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Teleport"] = {
    name: "Teleport",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Terrain Pulse"] = {
    name: "Terrain Pulse",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thief"] = {
    name: "Thief",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thousand Arrows"] = {
    name: "Thousand Arrows",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thousand Waves"] = {
    name: "Thousand Waves",
    type: "Ground",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thrash"] = {
    name: "Thrash",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Throat Chop"] = {
    name: "Throat Chop",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunder"] = {
    name: "Thunder",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunder Cage"] = {
    name: "Thunder Cage",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunder Fang"] = {
    name: "Thunder Fang",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunder Punch"] = {
    name: "Thunder Punch",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunder Shock"] = {
    name: "Thunder Shock",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunder Wave"] = {
    name: "Thunder Wave",
    type: "Electric",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunderbolt"] = {
    name: "Thunderbolt",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Thunderous Kick"] = {
    name: "Thunderous Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tickle"] = {
    name: "Tickle",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Topsy-Turvy"] = {
    name: "Topsy-Turvy",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Torment"] = {
    name: "Torment",
    type: "Dark",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Toxic"] = {
    name: "Toxic",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Toxic Spikes"] = {
    name: "Toxic Spikes",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Toxic Thread"] = {
    name: "Toxic Thread",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Transform"] = {
    name: "Transform",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Tri Attack"] = {
    name: "Tri Attack",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Trick"] = {
    name: "Trick",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Trick Room"] = {
    name: "Trick Room",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Trick-or-Treat"] = {
    name: "Trick-or-Treat",
    type: "Ghost",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Triple Axel"] = {
    name: "Triple Axel",
    type: "Ice",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Triple Kick"] = {
    name: "Triple Kick",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Trop Kick"] = {
    name: "Trop Kick",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Trump Card"] = {
    name: "Trump Card",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Twineedle"] = {
    name: "Twineedle",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Twinkle Tackle"] = {
    name: "Twinkle Tackle",
    type: "Fairy",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Twister"] = {
    name: "Twister",
    type: "Dragon",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["U-turn"] = {
    name: "U-turn",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Uproar"] = {
    name: "Uproar",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["V-create"] = {
    name: "V-create",
    type: "Fire",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Vacuum Wave"] = {
    name: "Vacuum Wave",
    type: "Fighting",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Veevee Volley"] = {
    name: "Veevee Volley",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Venom Drench"] = {
    name: "Venom Drench",
    type: "Poison",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Venoshock"] = {
    name: "Venoshock",
    type: "Poison",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Vine Whip"] = {
    name: "Vine Whip",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Vise Grip"] = {
    name: "Vise Grip",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Vital Throw"] = {
    name: "Vital Throw",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Volt Switch"] = {
    name: "Volt Switch",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Volt Tackle"] = {
    name: "Volt Tackle",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wake-Up Slap"] = {
    name: "Wake-Up Slap",
    type: "Fighting",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Water Gun"] = {
    name: "Water Gun",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Water Pledge"] = {
    name: "Water Pledge",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Water Pulse"] = {
    name: "Water Pulse",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Water Shuriken"] = {
    name: "Water Shuriken",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Water Sport"] = {
    name: "Water Sport",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Water Spout"] = {
    name: "Water Spout",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Waterfall"] = {
    name: "Waterfall",
    type: "Water",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Weather Ball"] = {
    name: "Weather Ball",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Whirlpool"] = {
    name: "Whirlpool",
    type: "Water",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Whirlwind"] = {
    name: "Whirlwind",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wicked Blow"] = {
    name: "Wicked Blow",
    type: "Dark",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wide Guard"] = {
    name: "Wide Guard",
    type: "Rock",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wild Charge"] = {
    name: "Wild Charge",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Will-O-Wisp"] = {
    name: "Will-O-Wisp",
    type: "Fire",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wing Attack"] = {
    name: "Wing Attack",
    type: "Flying",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wish"] = {
    name: "Wish",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Withdraw"] = {
    name: "Withdraw",
    type: "Water",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wonder Room"] = {
    name: "Wonder Room",
    type: "Psychic",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wood Hammer"] = {
    name: "Wood Hammer",
    type: "Grass",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Work Up"] = {
    name: "Work Up",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Worry Seed"] = {
    name: "Worry Seed",
    type: "Grass",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wrap"] = {
    name: "Wrap",
    type: "Normal",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Wring Out"] = {
    name: "Wring Out",
    type: "Normal",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["X-Scissor"] = {
    name: "X-Scissor",
    type: "Bug",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Yawn"] = {
    name: "Yawn",
    type: "Normal",
    category: "Other",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Zap Cannon"] = {
    name: "Zap Cannon",
    type: "Electric",
    category: "Special",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Zen Headbutt"] = {
    name: "Zen Headbutt",
    type: "Psychic",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Zing Zap"] = {
    name: "Zing Zap",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
all_moves["Zippy Zap"] = {
    name: "Zippy Zap",
    type: "Electric",
    category: "Physical",
    power: 0,
    is_spread_move: false,
    is_crit: false,
    is_z_move: false
};
