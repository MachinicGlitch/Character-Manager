import React from 'react'
import PropTypes from 'prop-types'
import './App.css'


function Character({ characterData }) {
    return (
        <>
            <div>
                <h2>{`${characterData.player_name}'s Character: `}</h2>
                <h1>{`${characterData.character.character_name}`}</h1>
            </div>
        </>
    )
}




Character.propTypes = {
    characterData: PropTypes.shape({
        player_name: PropTypes.string.isRequired,
        character: PropTypes.shape({
            character_name: PropTypes.string.isRequired,
            ability_scores: PropTypes.shape({
                str: PropTypes.number.isRequired,
                dex: PropTypes.number.isRequired,
                con: PropTypes.number.isRequired,
                int: PropTypes.number.isRequired,
                wis: PropTypes.number.isRequired,
                cha: PropTypes.number.isRequired,
            }).isRequired,
            equipment: PropTypes.shape({
                weapons: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        damage: PropTypes.string.isRequired,
                        size: PropTypes.string.isRequired,
                        critical: PropTypes.number.isRequired,
                        range_increment: PropTypes.number,
                        weight: PropTypes.number.isRequired,
                        damage_type: PropTypes.string.isRequired,
                        equipped: PropTypes.bool.isRequired
                    })
                ).isRequired,
                armor: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        catagory: PropTypes.string.isRequired,
                        armor_bonus: PropTypes.number.isRequired,
                        max_dex_bonus: PropTypes.number,
                        armor_check_penalty: PropTypes.number.isRequired,
                        arcane_spell_failure_chance: PropTypes.number.isRequired,
                        speed: PropTypes.shape({
                            "30 ft": PropTypes.number.isRequired,
                            "20 ft": PropTypes.number.isRequired
                        }),
                        weight: PropTypes.string.isRequired,
                        equipped: PropTypes.bool.isRequired,
                    })
                ).isRequired,
                misc: PropTypes.arrayOf(
                    PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        quantity: PropTypes.isRequired,
                        weight: PropTypes.isRequired
                    })
                ).isRequired,
                coins: PropTypes.shape({
                    platinum: PropTypes.number.isRequired,
                    gold: PropTypes.number.isRequired,
                    silver: PropTypes.number.isRequired,
                    copper: PropTypes.number.isRequired
                }).isRequired
            }),
            proficiencies: PropTypes.shape({
                weapons: PropTypes.arrayOf(PropTypes.string).isRequired,
                armor: PropTypes.arrayOf(PropTypes.string).isRequired,
                tools: PropTypes.arrayOf(PropTypes.string).isRequired,
                languages: PropTypes.arrayOf(PropTypes.string).isRequired
            }).isRequired
        }).isRequired,
    }).isRequired,
}


export default Character