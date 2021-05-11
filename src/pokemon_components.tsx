import React, {useReducer, useState} from "react";
//import {FaPlus} from "react-labels"
import {
    ability_name,
    all_abilities,
    all_items,
    calculateActualStat,
    calculateStatNoBoost,
    gender,
    getPokemonID,
    item,
    listOftypes,
    move,
    move_type,
    nature,
    pokemon,
    pokemon_field,
    pokemon_side,
    pokemon_type,
    status
} from './pokemon'
import {deepCopy} from "./deepCopy";
import {all_move_names, pokemons} from "./defaultPokemon";
import {all_moves} from "./all_moves";
import {calculateDamage} from "./calculateDamage";

function Centered(props: any) {
    let style = {
        display: "flex",
    };

    let innerStyle = {
        margin: "0 auto"
    }


    return <div style={style}>
        <div style={innerStyle}>
            {props.children}
        </div>
    </div>

}


export function CalculationPane(props: {
    pkm_field: pokemon_field,
    attacker: pokemon_side,
    defender: pokemon_side,
    attacking_team: pokemon[],
    defending_team: pokemon[],
    onSelectPokemon: (a: number) => any,
    onMoveSelect: (a: pokemon, b: pokemon, f: pokemon_field, m: move) => any,
    onNewPokemon: () => void,
    calculateDamage: (a: pokemon, b: pokemon, c: pokemon_side, d: pokemon_side, e: pokemon_field, m: move) => number[],
    selected_pokemon_idx: number
}) {
    const header = props.defending_team.map((pkm) => <div
        className={"calculationHeader"}>{pkm.nickname ?? pkm.name}</div>);

    const calcs = props.attacking_team.map((pkm, idx) =>
        pkm.moves.map((move, i) =>
            <div style={{display: "contents"}} className={"calculationRow"}>
                {props.defending_team.map((pkm2, j) =>
                    <div onClick={() => props.onMoveSelect(pkm, pkm2, props.pkm_field, move)}
                         className={`CalcPaneCell ${idx % 2 ? "oddRowCell" : "evenRowCell"} ${j % 2 ? "oddColumnCell" : "evenColumnCell"}`}
                         key={`${idx} ${i} ${j}`}
                    >
                        <div/>
                        {(() => {
                            let damages = calculateDamage(
                                pkm,
                                pkm2,
                                props.attacker,
                                props.defender,
                                props.pkm_field,
                                move);
                            return `
                            ${damages.reduce((a, b) => Math.min(a, b))} - 
                            ${damages.reduce((a, b) => Math.max(a, b))}
                                `;
                        })()
                        }
                        <div/>
                    </div>
                )}
            </div>
        )
    );

    return (
        <div style={{
            gridTemplateColumns: `auto auto`,
            paddingLeft: "0.3em",
            fontSize: "0.72rem",
            fontWeight: "normal",
            display: "inline-grid"
        }}
             className={"calcPaneOuter"}

        >
            <div style={{gridTemplateColumns: "auto auto", display: "inline-grid", marginBottom: "17px"}}>
                <div style={{textAlign: "center"}} className={"calculationHeader"}>Attacker</div>
                <div className={"calculationHeader"}>Move</div>

                {props.attacking_team.map((pkm, idx) => {
                    return <React.Fragment>
                        <div id={"pokemonSideHeader"}
                             style={{gridRow: `span ${pkm.moves.length}`}}
                             onClick={() => props.onSelectPokemon(idx)}
                             className={`
                                 ${idx % 2 ? "oddCalcRow" : "evenCalcRow"} 
                                 ${props.selected_pokemon_idx === idx ? "selected_pokemon_cell" : ""}`}
                        >
                            <div>
                                {(() => {
                                    let name = pkm.nickname ?? pkm.name;
                                    if (name.length > 17) {
                                        return name.substr(0, 15) + "...";
                                    }
                                    return name;
                                })()}
                            </div>
                        </div>
                        {pkm.moves.map((move) =>
                            <div className={`moveEntry ${idx % 2 ? "oddCalcRow" : "evenCalcRow"}`}>
                                {move.name.substr(0, 13)}
                            </div>
                        )}
                    </React.Fragment>
                })}
            </div>
            <div className={"scrollableThing"}>
                <div style={{
                    gridTemplateColumns: `repeat(${props.defending_team.length},max-content)`,
                    fontSize: "0.72rem",
                    fontWeight: "normal"
                }}
                     id={"calculationPane"}>
                    <div style={{display: "contents"}}>{header}</div>
                    {calcs}
                </div>
            </div>


            <div className={"addNewPokemonButton"} onClick={props.onNewPokemon}>
                <div className={"calcAddNewPokemonButton"}>
                    +
                </div>
            </div>
        </div>);

}

export class ThingyThatCanBeMoreThanOneThingPlsRenameMe extends React.Component
    <{
        names: string[]
        currentSelected?: number
    },
        {
            currentIdx: number;
        }> {

    constructor(props: any) {
        super(props);
        this.state =
            {
                currentIdx: props.currentSelected ?? 0
            };
    }

    render() {
        const buttonStyle =
            {
                display: 'inline-block',
            };


        const topBarItems = this.props.names.map((name, idx) => {
            let classNamey = "thingyTopBarSelectorThing";
            if (idx === this.state.currentIdx) {
                classNamey += " thingySelectedItem";
            }

            return <div className={classNamey} style={buttonStyle} key={idx} onClick={() => {
                this.setState({currentIdx: idx});
            }}>{name}
            </div>
        });

        return <div key={this.state.currentIdx}>
            <div id="topSelectionTabBarMenu">
                {topBarItems}
            </div>
            {React.Children.toArray(this.props.children)[this.state.currentIdx]}
        </div>;
    }

}

type change_side_action =
    "rocks" |
    "steelsurge" |
    "spikes" |
    "vinelash" |
    "wildfire" |
    "volcalith" |
    "cannonade" |
    "friend_guard" |
    "light_screen" |
    "reflect" |
    "tailwind" |
    "aurora_veil" |
    "battery";


function useSide(init: pokemon_side) {
    return useReducer((f: pokemon_side, a: { thing: change_side_action, spikesLvl?: number }) => {
        switch (a.thing) {
            case "rocks":
                return {
                    ...f,
                    stealth_rocks: !f.stealth_rocks
                }
            case "steelsurge":
                return {
                    ...f,
                    steelsurge: !f.steelsurge
                }
            case "spikes":
                if (a.spikesLvl === undefined) {
                    throw new Error("");
                }
                return {
                    ...f,
                    spikes: a.spikesLvl
                }
            case "vinelash":
                return {
                    ...f,
                    vinelash: !f.vinelash
                }
            case "wildfire":
                return {
                    ...f,
                    wildfire: !f.wildfire
                }
            case "volcalith":
                return {
                    ...f,
                    volcalith: !f.volcalith
                }
            case "reflect":
                return {
                    ...f,
                    reflect: !f.reflect
                }
            case "light_screen":
                return {
                    ...f,
                    light_screen: !f.light_screen
                }
            case "tailwind":
                return {
                    ...f,
                    tailwind: !f.tailwind
                }
            case "aurora_veil":
                return {
                    ...f,
                    aurora_veil: !f.aurora_veil
                }
            case "battery":
                return {
                    ...f,
                    battery: !f.battery
                }
            case "cannonade":
                return {
                    ...f,
                    cannonade: !f.cannonade
                };
            case "friend_guard":
                return {
                    ...f,
                    friend_guard: !f.friend_guard
                }
        }

        return f;
    }, init);

}

type useTeamArg =
    { action: "remove_move", idx: number, move_idx: number } |
    { action: "add_new_pokemon", new_pokemon: pokemon } |
    { action: "modify_move", idx: number, modified_move: Partial<move>, move_idx: number } |
    { action: "add_new_move", idx: number, new_move: move } |
    { action: "modify_pokemon", idx: number, modified_pokemon: Partial<pokemon> } |
    { action: "remove_pokemon", idx: number } |
    { action: "modify_pokemon_extra_data", idx: number, extra_data_to_merge: any }
    ;


function useTeam(init_team: pokemon[]) {
    return useReducer((a: pokemon[], b: useTeamArg) => {

        switch (b.action) {
            case "remove_pokemon": {
                return a.filter((pkm, idx) => idx !== b.idx);
            }
            case "remove_move": {
                let ret = [...a];
                ret[b.idx] = {...ret[b.idx]};
                ret[b.idx].moves = ret[b.idx].moves.filter((a, idx) => idx !== b.move_idx);
                return ret;
            }
            case "add_new_pokemon":
                return [...a, b.new_pokemon];
            case "modify_move": {
                let ret = [...a];
                ret[b.idx] = {...ret[b.idx]};
                ret[b.idx].moves = [...ret[b.idx].moves];
                ret[b.idx].moves[b.move_idx] = {...ret[b.idx].moves[b.move_idx], ...b.modified_move};
                return ret;
            }
            case "add_new_move": {
                let ret = [...a];
                ret[b.idx] = {...ret[b.idx]};
                ret[b.idx].moves = [...ret[b.idx].moves, b.new_move];
                return ret;
            }
            case "modify_pokemon": {
                let ret = [...a];
                a[b.idx] = {...a[b.idx], ...b.modified_pokemon}
                return ret;
            }
            case "modify_pokemon_extra_data": {
                let ret = [...a];
                a[b.idx] = {
                    ...a[b.idx],
                    extra_data: {
                        ...(a[b.idx].extra_data ?? {}),
                        ...b.extra_data_to_merge
                    }
                }
                return ret;
            }

        }

        throw "wat";
    }, init_team);
}

function statBoostsOptions() {
    return <React.Fragment>
        <option value={-6}>-6</option>
        <option value={-5}>-5</option>
        <option value={-4}>-4</option>
        <option value={-3}>-3</option>
        <option value={-2}>-2</option>
        <option value={-1}>-1</option>
        <option value={0}>--</option>
        <option value={1}>+1</option>
        <option value={2}>+2</option>
        <option value={3}>+3</option>
        <option value={4}>+4</option>
        <option value={5}>+5</option>
        <option value={6}>+6</option>
    </React.Fragment>
}

function MyButton(props: any) {
    return <div className={"notAButton" + (props.enabled ? " enabledButton" : "")}
                {...props}
                onClick={(e) =>
                    (props.onClick ?? (() => {
                    }))(e, props.enabled)
                }
    >
        {props.children}
    </div>
}


export function PokemonCalc(props: {
    init_field: pokemon_field,
    init_left_side?: pokemon_side,
    init_right_side?: pokemon_side,
    init_left_team: pokemon[],
    init_right_team: pokemon[]
}) {

    const [field, changeField] = useReducer((field: pokemon_field, action: Partial<pokemon_field>) => {
        return {
            ...field,
            ...action
        };
    }, deepCopy(props.init_field));


    const [left_side, left_side_cb] = useSide(props.init_left_side ?? new pokemon_side());
    const [right_side, right_side_cb] = useSide(props.init_right_side ?? new pokemon_side());
    const [middle_part_idx, set_middle_part_idx] = useState(0);

    const [right_team, change_right_team] = useTeam(deepCopy(props.init_right_team));

    const [left_team, change_left_team] = useTeam(deepCopy(props.init_left_team));

    const [left_side_idx, set_left_idx] = useState(0);
    const [right_side_idx, set_right_idx] = useState(0);
    const [selected_side, set_selected_side] = useState("L");

    function thingyThatChangesField() {


        return <div id={"fieldSelector"}>
            <Centered>
                <div className={"idkWatToNameThis"}>
                    <div className={"notAButton" + (field.game_type === "Singles" ? " enabledButton" : "")}
                         onClick={() => changeField({game_type: "Singles"})}>
                        &nbsp;&nbsp;Singles&nbsp;&nbsp;
                    </div>
                    <div className={"notAButton" + (field.game_type === "Doubles" ? " enabledButton" : "")}
                         onClick={() => changeField({game_type: "Doubles"})}>
                        &nbsp;&nbsp;Doubles&nbsp;&nbsp;
                    </div>
                </div>
            </Centered>
            <div style={{marginTop: "10px"}}>
                <Centered>
                    <div className={"idkWatToNameThis"}>
                        <MyButton
                            onClick={() => {
                                changeField({terrain: "None"})
                            }}
                            enabled={field.terrain === "None"}>
                            &nbsp;&nbsp;No Terrain&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({terrain: "Grassy"})
                            }}
                            enabled={field.terrain === "Grassy"}>
                            &nbsp;&nbsp;Grassy Terrain&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({terrain: "Electric"})
                            }}
                            enabled={field.terrain === "Electric"}>
                            &nbsp;&nbsp;Electric Terrain&nbsp;&nbsp;
                        </MyButton>
                    </div>
                </Centered>
                <Centered>
                    <div className={"idkWatToNameThis"}>
                        <MyButton
                            style={{borderTop: "None"}}
                            onClick={() => {
                                changeField({terrain: "Psychic"})
                            }}
                            enabled={field.terrain === "Psychic"}>
                            &nbsp;&nbsp;Psychic Terrain&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            style={{borderTop: "None"}}
                            onClick={() => {
                                changeField({terrain: "Misty"})
                            }}
                            enabled={field.terrain === "Misty"}>
                            &nbsp;&nbsp;Misty Terrain&nbsp;&nbsp;
                        </MyButton>
                    </div>
                </Centered>
            </div>
            <Centered>
                <div style={{marginTop: "10px"}}>
                    <MyButton
                        onClick={() => {
                            changeField({gravity: true})
                        }}
                        enabled={field.gravity}>
                        &nbsp;Gravity&nbsp;
                    </MyButton>
                    <MyButton
                        onClick={() => {
                            changeField({gravity: false})
                        }}
                        enabled={!field.gravity}>
                        &nbsp;No Gravity&nbsp;
                    </MyButton>
                </div>
            </Centered>
            <hr/>
            <div>
                <Centered>
                    <div style={{marginTop: "10px"}}>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Clear"})
                            }}
                            enabled={field.weather === "Clear"}>
                            &nbsp;&nbsp;Clear Weather&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Sun"})
                            }}
                            enabled={field.weather === "Sun"}>
                            &nbsp;&nbsp;&nbsp;Sun&nbsp;&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Rain"})
                            }}
                            enabled={field.weather === "Rain"}>
                            &nbsp;&nbsp;Rain&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Hail"})
                            }}
                            enabled={field.weather === "Hail"}>
                            &nbsp;&nbsp;Hail&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Sandstorm"})
                            }}
                            enabled={field.weather === "Sandstorm"}>
                            &nbsp;&nbsp;Sand&nbsp;&nbsp;
                        </MyButton>
                    </div>
                </Centered>
                <Centered>
                    <div style={{marginTop: "5px"}}>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Harsh Sun"})
                            }}
                            enabled={field.weather === "Harsh Sun"}>
                            &nbsp;&nbsp;Harsh Sun&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Heavy Rain"})
                            }}
                            enabled={field.weather === "Heavy Rain"}>
                            &nbsp;&nbsp;Heavy Rain&nbsp;&nbsp;
                        </MyButton>
                        <MyButton
                            onClick={() => {
                                changeField({weather: "Strong Winds"})
                            }}
                            enabled={field.weather === "Strong Winds"}>
                            &nbsp;&nbsp;Strong Winds&nbsp;&nbsp;
                        </MyButton>
                    </div>
                </Centered>
                <div style={{marginTop: "5px"}}>
                    <Centered>
                        <MyButton onClick={(a: any, e: boolean) => {
                            changeField({dark_aura: !e});
                        }}
                                  enabled={field.dark_aura}>
                            Dark Aura
                        </MyButton>
                        <MyButton onClick={(a: any, e: boolean) => {
                            changeField({fairy_aura: !e});
                        }}
                                  enabled={field.fairy_aura}>
                            Fairy Aura
                        </MyButton>
                        <MyButton onClick={(a: any, e: boolean) => {
                            changeField({aura_break: !e});
                        }}
                                  enabled={field.aura_break}>
                            Aura Break
                        </MyButton>
                    </Centered>
                </div>
            </div>
            <hr/>
            <div hidden>2 sides each</div>
            <div className={"partWith2Sides"}>

                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <MyButton
                            enabled={left_side.stealth_rocks}
                            onClick={() => {
                                left_side_cb({thing: "rocks"});
                            }}>
                            Stealth Rocks
                        </MyButton>
                    </div>
                    <div className={"righty"}>
                        <MyButton
                            enabled={right_side.stealth_rocks}
                            onClick={() => {
                                right_side_cb({thing: "rocks"});
                            }}>
                            Stealth Rocks
                        </MyButton>
                    </div>
                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.steelsurge ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "steelsurge"});
                             }}>
                            Steelsurge
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div className={"notAButton" + (right_side.steelsurge ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "steelsurge"});
                             }}>
                            Steelsurge
                        </div>
                    </div>
                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.vinelash ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "vinelash"});
                             }}>
                            Vinelash
                        </div>
                        <div className={"notAButton" + (left_side.wildfire ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "wildfire"});
                             }}>
                            Wildfire
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div className={"notAButton" + (right_side.vinelash ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "vinelash"});
                             }}>
                            Vinelash
                        </div>
                        <div className={"notAButton" + (right_side.wildfire ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "wildfire"});
                             }}>
                            Wildfire
                        </div>
                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.volcalith ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "volcalith"});
                             }}>
                            Volcalith
                        </div>
                        <div className={"notAButton" + (left_side.cannonade ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "cannonade"});
                             }}>
                            Cannonade
                        </div>

                    </div>
                    <div className={"righty"}>
                        <div className={"notAButton" + (right_side.cannonade ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "cannonade"});
                             }}>
                            Cannonade
                        </div>
                        <div className={"notAButton" + (right_side.volcalith ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "volcalith"});
                             }}>
                            Volcalith
                        </div>
                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div
                            className={"notAButton" + (left_side.spikes === 0 ? " enabledButton" : "")}
                            onClick={() => {
                                left_side_cb({thing: "spikes", spikesLvl: 0});
                            }}>
                            &nbsp;0&nbsp;
                        </div>
                        <div
                            className={"notAButton" + (left_side.spikes === 1 ? " enabledButton" : "")}
                            onClick={() => {
                                left_side_cb({thing: "spikes", spikesLvl: 1});
                            }}>
                            &nbsp;1&nbsp;
                        </div>
                        <div
                            className={"notAButton" + (left_side.spikes === 2 ? " enabledButton" : "")}
                            onClick={() => {
                                left_side_cb({thing: "spikes", spikesLvl: 2});
                            }}>
                            &nbsp;2&nbsp;
                        </div>
                        <div
                            className={"notAButton" + (left_side.spikes === 3 ? " enabledButton" : "")}
                            onClick={() => {
                                left_side_cb({thing: "spikes", spikesLvl: 3});
                            }}>
                            &nbsp;3 Spikes&nbsp;
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div
                            className={"notAButton" + (right_side.spikes === 3 ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "spikes", spikesLvl: 3});
                            }}>
                            &nbsp;3 Spikes&nbsp;
                        </div>

                        <div
                            className={"notAButton" + (right_side.spikes === 2 ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "spikes", spikesLvl: 2});
                            }}>
                            &nbsp;2&nbsp;
                        </div>
                        <div
                            className={"notAButton" + (right_side.spikes === 1 ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "spikes", spikesLvl: 1});
                            }}>
                            &nbsp;1&nbsp;
                        </div>

                        <div
                            className={"notAButton" + (right_side.spikes === 0 ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "spikes", spikesLvl: 0});
                            }}>
                            &nbsp;0&nbsp;
                        </div>
                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.reflect ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "reflect"});
                             }}>
                            Reflect
                        </div>
                        <div
                            className={"notAButton" + (left_side.light_screen ? " enabledButton" : "")}
                            onClick={() => {
                                left_side_cb({thing: "light_screen"});
                            }}>
                            Light Screen
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div
                            className={"notAButton" + (right_side.light_screen ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "light_screen"});
                            }}>
                            Light screen
                        </div>
                        <div
                            className={"notAButton" + (right_side.reflect ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "reflect"});
                            }}>
                            Reflect
                        </div>

                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.tailwind ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "tailwind"});
                             }}>
                            Tailwind
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div className={"notAButton" + (right_side.tailwind ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "tailwind"});
                             }}>
                            Tailwind
                        </div>
                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div
                            className={"notAButton" + (left_side.friend_guard ? " enabledButton" : "")}
                            onClick={() => {
                                left_side_cb({thing: "friend_guard"});
                            }}>
                            Friend Guard
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div
                            className={"notAButton" + (right_side.friend_guard ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "friend_guard"});
                            }}>
                            Friend Guard
                        </div>
                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.aurora_veil ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "aurora_veil"});
                             }}>
                            Aurora Veil
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div
                            className={"notAButton" + (right_side.aurora_veil ? " enabledButton" : "")}
                            onClick={() => {
                                right_side_cb({thing: "aurora_veil"});
                            }}>
                            Aurora Veil
                        </div>
                    </div>

                </div>
                <div className={"idkWatToNameThis"}>
                    <div className={"lefty"}>
                        <div className={"notAButton" + (left_side.battery ? " enabledButton" : "")}
                             onClick={() => {
                                 left_side_cb({thing: "battery"});
                             }}>
                            Battery
                        </div>
                    </div>
                    <div className={"righty"}>
                        <div className={"notAButton" + (right_side.battery ? " enabledButton" : "")}
                             onClick={() => {
                                 right_side_cb({thing: "battery"});
                             }}>
                            Battery
                        </div>
                    </div>

                </div>

            </div>
        </div>;
    }

    function thingyThatChangesPokemon(pkm: pokemon, isLeftSide: boolean) {
        let cb = isLeftSide ? change_left_team : change_right_team;
        let idx = isLeftSide ? left_side_idx : right_side_idx;
        const hp_percent = pkm.current_hp / calculateActualStat(pkm, "hp");
        return <div className={"modifyPokemonTab"}>
            <div id="dropDownChangesPokemon" style={{position: "relative"}}>
                <div className={"SelectorLabel"}/>
                <div style={{display: "flex"}}>
                    <select>
                        <option>{pkm.name}</option>
                        {Object.keys(pokemons).map((a, idx2) =>
                            <option value={a} onClick={(e) => {
                                cb({
                                    action: "modify_pokemon",
                                    idx,
                                    modified_pokemon: pokemons[a]
                                });
                            }}
                                    key={idx2}
                            >{a}
                            </option>
                        )
                        }
                    </select>
                    <div style={{position: "absolute", right: "1em"}}>
                        <div onClick={() => {
                            if (isLeftSide ? left_team.length > 1 : right_team.length > 1) {
                                cb({
                                    action: "remove_pokemon",
                                    idx
                                });
                                if (isLeftSide) {
                                    set_left_idx(Math.max(idx - 1, 0))
                                } else {
                                    set_right_idx(Math.max(idx - 1, 0));
                                }
                            }
                        }}
                             className={`remove_pokemon_button${(isLeftSide ? left_team.length > 1 : right_team.length > 1) ? '' : " grayedOut"}`}
                        >
                            X
                        </div>
                    </div>
                </div>
            </div>
            <div id="resetButton"></div>
            <div id="nickname">
                <div className={"SelectorLabel"}>Nick:</div>
                <input value={pkm.nickname ?? pkm.name} onChange={(e) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {nickname: e.target.value as string}
                    });
                }
                } style={{width: "30ch"}}/>
            </div>
            <div id="pokemonName">

            </div>

            <div className={"typeSelectionPart"} style={{display: "inline-flex", paddingTop: "5px"}}>
                <div className={"SelectorLabel"}>
                    Types:
                </div>
                <div id="type1">
                    <select onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            modified_pokemon: {type1: event.target.value as pokemon_type},
                            idx
                        });
                    }} defaultValue={pkm.type1}
                            key={pkm.type1}
                    >
                        {
                            listOftypes.map((typeName) =>
                                <option value={typeName as string} key={typeName as string}>{typeName}</option>
                            )
                        }
                    </select>
                </div>
                <div id="type2">
                    <select onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            modified_pokemon: {type2: event.target.value as pokemon_type},
                            idx
                        });
                    }} defaultValue={pkm.type2 ?? "None"}
                            key={pkm.type2 ?? "No"}
                    >
                        <option value="None" key="None">None</option>
                        {
                            listOftypes.map((typeName) => {
                                return <option value={typeName as string} key={typeName as string}>{typeName}</option>
                            })
                        }
                    </select>
                </div>
            </div>

            <div id="formeSelector">

            </div>

            <div className={"genderThing"}>
                <div className={"SelectorLabel"}>Gender:</div>
                <select onChange={(e) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {gender: e.target.value as gender}
                    });
                }
                }>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"None"}>other</option>
                </select>
            </div>
            <div id="lvl">
                <div className={"SelectorLabel"}>Level:</div>
                <input type={"number"} onChange={(event) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {level: Math.min(Number(event.target.value), 100)}
                    })
                }} value={pkm.level}
                       style={{width: "2.5em"}}
                />
            </div>

            <div id="StatSelectors" style={{width: "60%"}}>

                <div>
                </div>
                <div className={"centeredText"}>Base</div>
                <div className={"centeredText"}>IVs</div>
                <div className={"centeredText"}>EVs</div>
                <div></div>
                <div></div>
                <div></div>


                <div className={"centeredText"}>
                    HP
                </div>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {base_hp: Number(event.target.value)}
                        })
                    }}
                    value={pkm.base_hp}
                    type={"number"}
                    className={"statInputBox"}
                />
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {hp_ivs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.hp_ivs}
                    type={"number"}
                    className={"statInputBox"}/>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {hp_evs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.hp_evs}
                    type={"number"}
                    className={"statInputBox"}/>
                <div></div>
                <div className={"centeredText"}>{calculateStatNoBoost(pkm, "hp")}</div>
                <div></div>

                <div className={"centeredText"}>Att</div>

                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {base_att: Number(event.target.value)}
                        })
                    }}
                    value={pkm.base_att}
                    type={"number"}
                    className={"statInputBox"}
                />
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {att_ivs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.att_ivs}
                    type={"number"}
                    className={"statInputBox"}/>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {att_evs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.att_evs}
                    type={"number"}
                    className={"statInputBox"}/>
                <select onChange={(event) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {att_boost: Number(event.target.value)}
                    });
                }}
                        value={pkm.att_boost}
                >
                    {statBoostsOptions()}
                </select>
                <div className={"centeredText"}>{calculateStatNoBoost(pkm, "att")}</div>
                <div></div>


                <div className={"centeredText"}>Def</div>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {base_def: Number(event.target.value)}
                        })
                    }}
                    value={pkm.base_def}
                    type={"number"}
                    className={"statInputBox"}
                />
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {def_ivs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.def_ivs}
                    type={"number"}
                    className={"statInputBox"}/>
                <input
                    onChange={(event) => {
                        change_left_team({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {def_evs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.def_evs}
                    type={"number"}
                    className={"statInputBox"}/>
                <select onChange={(event) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {def_boost: Number(event.target.value)}
                    });
                }}
                        value={pkm.def_boost}
                > {statBoostsOptions()}
                </select>
                <div className={"centeredText"}>{calculateStatNoBoost(pkm, "def")}</div>
                <div></div>

                <div className={"centeredText"}>Sp.Att</div>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {base_sp_att: Number(event.target.value)}
                        })
                    }}
                    value={pkm.base_sp_att}
                    type={"number"}
                    className={"statInputBox"}
                />
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {sp_att_ivs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.sp_att_ivs}
                    type={"number"}
                    className={"statInputBox"}/>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {sp_att_evs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.sp_att_evs}
                    type={"number"}
                    className={"statInputBox"}/>
                <select onChange={(event) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {sp_att_boost: Number(event.target.value)}
                    });
                }}
                        value={pkm.sp_att_boost}
                >
                    {statBoostsOptions()}
                </select>
                <div className={"centeredText"}>{calculateStatNoBoost(pkm, "sp_att")}</div>
                <div></div>

                <div className={"centeredText"}>Sp.Def</div>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {base_sp_def: Number(event.target.value)}
                        })
                    }}
                    value={pkm.base_sp_def}
                    type={"number"}
                    className={"statInputBox"}
                />
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {sp_def_ivs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.sp_def_ivs}
                    type={"number"}
                    className={"statInputBox"}/>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {sp_def_evs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.sp_def_evs}
                    type={"number"}
                    className={"statInputBox"}/>
                <select onChange={(event) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {sp_def_boost: Number(event.target.value)}
                    });
                }}
                        value={pkm.sp_def_boost}
                >
                    {statBoostsOptions()}
                </select>
                <div className={"centeredText"}>{calculateStatNoBoost(pkm, "sp_def")}</div>
                <div className={"centeredText"}></div>

                <div className={"centeredText"}>Speed</div>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {base_speed: Number(event.target.value)}
                        })
                    }}
                    value={pkm.base_speed}
                    type={"number"}
                    className={"statInputBox"}
                />
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {speed_ivs: Number(event.target.value)}
                        })
                    }}

                    value={pkm.speed_ivs}
                    type={"number"}
                    className={"statInputBox"}/>
                <input
                    onChange={(event) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {speed_evs: Number(event.target.value)}
                        })
                    }}
                    value={pkm.speed_evs}
                    type={"number"}
                    className={"statInputBox"}/>
                <select onChange={(event) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {speed_boost: Number(event.target.value)}
                    });
                }}
                        value={pkm.speed_boost}
                >
                    {statBoostsOptions()}
                </select>

                <div className={"centeredText"}>{calculateStatNoBoost(pkm, "speed")}</div>
                <div className={"centeredText"}>{calculateActualStat(pkm, "speed")}</div>

            </div>
            <div style={{marginTop: "10px"}} key={pkm.nature}>
                <div className={"SelectorLabel"}>Nature:</div>
                <select onChange={(event) =>
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {nature: event.target.value as nature}
                    })
                }
                        value={pkm.nature}
                >
                    <option value={"Hardy"}>Hardy</option>
                    <option value={"Lonely"}>Lonely (+Att,-Def)</option>
                    <option value={"Brave"}>Brave (+Att,-Speed)</option>
                    <option value={"Adamant"}>Adamant (+Att,-Sp.Att)</option>
                    <option value={"Naughty"}>Naughty (+Att,-Sp.Def)</option>
                    <option value={"Bold"}>Bold (+Def,-Att)</option>
                    <option value={"Docile"}>Docile</option>
                    <option value={"Relaxed"}>Relaxed (+Def,-Speed)</option>
                    <option value={"Impish"}>Impish (+Def,-Sp.Att)</option>
                    <option value={"Lax"}>Lax (+Def,-Sp.Def)</option>
                    <option value={"Timid"}>Timid (+Speed,-Att)</option>
                    <option value={"Hasty"}>Hasty (+Speed,-Def)</option>
                    <option value={"Serious"}>Serious</option>
                    <option value={"Jolly"}>Jolly (+Speed,-Sp.Att)</option>
                    <option value={"Naive"}>Naive (+Speed,-Sp.Def)</option>
                    <option value={"Modest"}>Modest (+Sp.Att,-Def)</option>
                    <option value={"Mild"}>Mild (+Sp.Att,-Def)</option>
                    <option value={"Quiet"}>Quiet (+Sp.Att,-Def)</option>
                    <option value={"Bashful"}>Bashful</option>
                    <option value={"Rash"}>Rash (+Sp.Att,-Sp.Def)</option>
                    <option value={"Calm"}>Calm (+Sp.Def,-Def)</option>
                    <option value={"Gentle"}>Gentle (+Sp.Def,-Def)</option>
                    <option value={"Sassy"}>Sassy (+Sp.Def,-Def)</option>
                    <option value={"Careful"}>Careful (+Sp.Def,-Sp.Att)</option>
                    <option value={"Quirky"}>Quirky</option>
                </select>
            </div>
            <div>
                <div className={"SelectorLabel"}>Ability:</div>
                <select value={pkm.ability} onChange={(e) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {ability: e.target.value as ability_name}
                    })
                }}>
                    {all_abilities.map((a, idx) =>
                        <option value={a} key={idx}>{a}</option>)
                    }
                </select>
            </div>
            <div style={{display: "flex"}}>
                <div className={"SelectorLabel"}>Item:</div>
                <div>
                    <select onChange={(e) => {
                        cb({
                            action: "modify_pokemon",
                            idx,
                            modified_pokemon: {item: e.target.value as item}
                        })
                    }}>
                        {all_items.map((i, idx) => <option value={i} key={idx}>{i}</option>)}
                    </select>
                </div>
            </div>
            <div>
                <div className={"SelectorLabel"}>Status:</div>
                <select value={pkm.status}
                        onChange={(e) => {
                            cb({
                                action: "modify_pokemon",
                                idx,
                                modified_pokemon: {status: e.target.value as status}
                            })
                        }
                        }>
                    <option value={"Paralyzed"}>Paralyzed</option>
                    <option value={"Healthy"}>Healthy</option>
                    <option value={"Burned"}>Burned</option>
                    <option value={"Sleep"}>Sleep</option>
                    <option value={"Poisoned"}>Poisoned</option>
                    <option value={"Frozen"}>Frozen</option>
                    <option value={"Badly Poisoned"}>Badly Poisoned</option>
                </select>

            </div>
            <br/>
            <div>
                <div className={"SelectorLabel"}>HP:</div>
                <input style={{width: "5ch"}} value={pkm.current_hp}
                       onChange={(e) => {
                           cb({
                               action: "modify_pokemon",
                               idx,
                               modified_pokemon: {
                                   current_hp: Math.max(Math.min(Number(e.target.value), calculateActualStat(pkm, "hp")), 0)
                               }
                           });
                       }
                       }>

                </input>

                <div style={{fontSize: "1.2em", paddingLeft: "3px"}}>/{calculateActualStat(pkm, "hp")}</div>
                <div className={"SelectorLabel"}>%</div>
                <input style={{width: "5ch"}} value={Math.round(hp_percent * 100)}
                       onChange={(e) => {
                           cb({
                               action: "modify_pokemon",
                               idx,
                               modified_pokemon: {
                                   current_hp: Math.floor(Math.max(Math.min(Number(e.target.value), 100), 0) * calculateActualStat(pkm, "hp") / 100)
                               }
                           });
                       }
                       }>

                </input>
                <div style={{fontSize: "1.2em", paddingLeft: "3px"}}>/100</div>

            </div>

            <div>
                <div className={`hpBar ${(() => {

                    if (hp_percent < .20) {
                        return "red_hp";
                    } else if (hp_percent < .50) {
                        return "yellow_hp";
                    } else {
                        return "green_hp";
                    }
                })()}`}>
                    <div style={{width: `${hp_percent * 100}%`}} className={`hp_bar_inner ${(() => {

                        if (hp_percent < .20) {
                            return "red_hp";
                        } else if (hp_percent < .50) {
                            return "yellow_hp";
                        } else {
                            return "green_hp";
                        }
                    })()}`}/>
                </div>

            </div>
            <br/>
            <div>
                <MyButton enabled={pkm.dynamaxed} onClick={() => cb({
                    action: "modify_pokemon",
                    idx,
                    modified_pokemon: {
                        dynamaxed: !pkm.dynamaxed,
                        current_hp: pkm.dynamaxed ? Math.floor(pkm.current_hp / 2) : pkm.current_hp * 2
                    }
                })}>Dynamax</MyButton>
            </div>
            <div>
                <MyButton onClick={(e: any, enabled: boolean) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {protecting: !enabled}
                    });
                }}
                          enabled={pkm.protecting}>
                    Protect
                </MyButton>
                <MyButton onClick={(e: any, enabled: boolean) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {foresight: !enabled}
                    });
                }}
                          enabled={pkm.foresight}>
                    Foresight
                </MyButton>
                <MyButton onClick={(e: any, m: any) => {
                    cb({
                        action: "modify_pokemon",
                        idx,
                        modified_pokemon: {leech_seeded: !m}
                    });
                }}
                          enabled={pkm.leech_seeded}>
                    Leech Seed
                </MyButton>
            </div>
            <div style={{display: "block"}}>
                {pkm.moves.map((m, move_idx) => {
                    return <div style={{
                        display: "grid",
                        gridTemplateColumns: "18ch 6ch 14ch auto auto auto",
                        marginTop: "2px"
                    }}
                                key={move_idx}
                    >
                        <select value={m.name} onChange={(e) => {
                            cb({
                                action: "modify_move",
                                idx,
                                move_idx,
                                modified_move: all_moves[e.target.value]
                            });
                        }
                        }
                                style={{maxWidth: "16ch"}}>
                            {all_move_names.map((mn) => {
                                return <option value={mn} key={mn}>{mn}</option>
                            })}
                        </select>
                        <input type={"number"} onChange={(e) => {
                            cb({
                                action: "modify_move",
                                idx,
                                move_idx,
                                modified_move: {power: Number(e.target.value)}
                            })
                        }
                        } value={m.power} style={{width: "4ch", marginLeft: "2px"}}/>

                        <select value={m.type} style={{marginLeft: "3px"}} onChange={(e) => {
                            cb({
                                action: "modify_move",
                                idx,
                                move_idx,
                                modified_move: {type: e.target.value as pokemon_type}
                            })
                        }
                        }>
                            {listOftypes.map((t) => {
                                return <option value={t}>{t}</option>
                            })}
                        </select>

                        <select value={m.category} onChange={(e) => {
                            cb({
                                action: "modify_move",
                                idx,
                                move_idx,
                                modified_move: {category: e.target.value as move_type}
                            })
                        }}
                                style={{width: "10ch"}}>
                            <option value={"Physical"}>Physical</option>
                            <option value={"Special"}>Special</option>
                            <option value={"Other"}>Other</option>
                        </select>
                        <div style={{display: "inline-flex"}}>
                            <MyButton enabled={m.is_crit} style={{marginLeft: "2px"}} onClick={() => {
                                cb({
                                    action: "modify_move",
                                    idx,
                                    move_idx,
                                    modified_move: {is_crit: !m.is_crit}
                                })
                            }}>Crit
                            </MyButton>
                            <MyButton enabled={m.is_z_move}
                                      onClick={() => {
                                          cb({
                                              action: "modify_move",
                                              idx,
                                              move_idx,
                                              modified_move: {is_z_move: !m.is_z_move}
                                          })
                                      }}

                            >
                                Z
                            </MyButton>

                        </div>
                        <div onClick={pkm.moves.length !== 1 ? () => {
                            cb({
                                action: "remove_move",
                                idx,
                                move_idx
                            });
                        } : () => {
                        }
                        }
                             className={"removeMoveButton" + (pkm.moves.length === 1 ? " grayedOut" : "")}>
                            X
                        </div>
                    </div>
                })}
                <div className={"add_new_move_button"}
                     onClick={() => {
                         cb({
                             action: "add_new_move",
                             idx,
                             new_move: deepCopy(all_moves["Tackle"])
                         });
                     }}>
                    +
                </div>
            </div>


        </div>
    }

    return (
        <div id={"app"} style={{overflow: "scrollbar", width: "100%"}}>
            <div id="leftSide">
                <CalculationPane pkm_field={field}
                                 attacker={left_side}
                                 defender={right_side}
                                 onSelectPokemon={(pkm) => {
                                     set_left_idx(pkm);
                                     set_selected_side("L");
                                     set_middle_part_idx(0);
                                 }}

                                 onMoveSelect={() => {
                                 }}
                                 attacking_team={left_team}
                                 defending_team={right_team}
                                 onNewPokemon={() => {
                                     change_left_team({
                                         action: "add_new_pokemon",
                                         new_pokemon: deepCopy(pokemons["Blastoise"])
                                     });
                                     set_left_idx(left_team.length);
                                     set_selected_side("L");
                                     set_middle_part_idx(0);
                                 }}
                                 calculateDamage={calculateDamage}
                                 selected_pokemon_idx={selected_side === "L" ? left_side_idx : -1}
                />
            </div>
            <div id="middlePart" key={"middle" + middle_part_idx}>
                <div>Place to put detailed move analysis</div>
                <ThingyThatCanBeMoreThanOneThingPlsRenameMe
                    names={["Pokemon", "Field"]}
                    currentSelected={middle_part_idx}
                >
                    <div>
                        {thingyThatChangesPokemon(selected_side === "L" ? left_team[left_side_idx] : right_team[right_side_idx], selected_side === "L")}
                    </div>
                    {thingyThatChangesField()}
                </ThingyThatCanBeMoreThanOneThingPlsRenameMe>
            </div>
            <div id="rightSide">
                <CalculationPane pkm_field={field}
                                 attacker={right_side}
                                 defender={left_side}
                                 onSelectPokemon={(pkm) => {
                                     set_right_idx(pkm);
                                     set_selected_side("R");
                                     set_middle_part_idx(0);
                                 }}
                                 onMoveSelect={() => {
                                 }}
                                 attacking_team={right_team}
                                 defending_team={left_team}
                                 onNewPokemon={() => {
                                     change_right_team({
                                         action: "add_new_pokemon",
                                         new_pokemon: deepCopy(pokemons["Blastoise"])
                                     });
                                     set_right_idx(right_team.length);
                                     set_selected_side("R")
                                     set_middle_part_idx(0);
                                 }}
                                 calculateDamage={calculateDamage}
                                 selected_pokemon_idx={selected_side === "R" ? right_side_idx : -1}
                />
            </div>

        </div>
    );
}