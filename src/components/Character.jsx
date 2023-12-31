import React from 'react'
import PropTypes from 'prop-types'
import Ability_Scores from './Ability_Scores'
import Attacks from './Attacks'
import Biography from './Biography'
import Feats from './Feats'
import Saves from './Saves'
import Skills from './Skills'
import Stats from './Stats'

function Character({ characterData }) {
    const { description, ability_scores, status, saves, equipment, proficiencies, skill_ranks } = characterData.character
    const { weapons } = equipment

    const ability_modifiers = {
        // TODO: factor in additional modifier sources
        strMod: calculateAbilityModifier(ability_scores.str),
        dexMod: calculateAbilityModifier(ability_scores.dex),
        conMod: calculateAbilityModifier(ability_scores.con),
        intMod: calculateAbilityModifier(ability_scores.int),
        wisMod: calculateAbilityModifier(ability_scores.wis),
        chaMod: calculateAbilityModifier(ability_scores.cha)
    }


    return (
        <>
            <div>
                <h2>{`${characterData.player_name}'s Character: `}</h2>
                <Biography description={description} />
                <Ability_Scores
                    ability_scores={ability_scores}
                    ability_modifiers={ability_modifiers}
                />
                <Stats
                    status={status}
                    ability_modifiers={ability_modifiers}
                />
                <Saves
                    saves={saves}
                    ability_modifiers={ability_modifiers}
                />
                <Attacks
                    weapons={weapons}
                    ability_modifiers={ability_modifiers}
                />
                <Feats />
                <Skills
                    skill_ranks={skill_ranks}
                    ability_modifiers={ability_modifiers}
                />
            </div>
        </>
    )
}




const calculateAbilityModifier = (abilityScore) => {
    // TODO: add additional temp/other factors
    return Math.floor((abilityScore - 10) / 2)
}



// Defining shape for subskills (craft, knowledge, perform, profession)
const subSkillShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    ranks: PropTypes.string.isRequired
})

// Defining shape for skills
const skillRanksShape = PropTypes.shape({
    appraise: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    bluff: PropTypes.number.isRequired,
    climb: PropTypes.number.isRequired,
    concentration: PropTypes.number.isRequired,
    craft: PropTypes.arrayOf(subSkillShape).isRequired,
    decipher_script: PropTypes.number.isRequired,
    diplomacy: PropTypes.number.isRequired,
    disable_device: PropTypes.number.isRequired,
    disguise: PropTypes.number.isRequired,
    escape_artist: PropTypes.number.isRequired,
    forgery: PropTypes.number.isRequired,
    gather_information: PropTypes.number.isRequired,
    handle_animal: PropTypes.number.isRequired,
    heal: PropTypes.number.isRequired,
    intimidate: PropTypes.number.isRequired,
    jump: PropTypes.number.isRequired,
    knowledge: PropTypes.arrayOf(subSkillShape).isRequired,
    listen: PropTypes.number.isRequired,
    move_silently: PropTypes.number.isRequired,
    open_lock: PropTypes.number.isRequired,
    perform: PropTypes.arrayOf(subSkillShape).isRequired,
    profession: PropTypes.arrayOf(subSkillShape).isRequired,
    ride: PropTypes.number.isRequired,
    search: PropTypes.number.isRequired,
    sense_motive: PropTypes.number.isRequired,
    sleight_of_hand: PropTypes.number.isRequired,
    speak_language: PropTypes.number.isRequired,
    spellcraft: PropTypes.number.isRequired,
    swim: PropTypes.number.isRequired,
    tumble: PropTypes.number.isRequired,
    use_magic_device: PropTypes.number.isRequired,
    use_rope: PropTypes.number.isRequired
})

// Defining shape of imported character sheet
Character.propTypes = {
    characterData: PropTypes.shape({
        player_name: PropTypes.string.isRequired,
        character: PropTypes.shape({
            description: PropTypes.shape({
                character_name: PropTypes.string.isRequired,
                alginment: PropTypes.string.isRequired,
                deity: PropTypes.string.isRequired,
                race: PropTypes.string.isRequired,
                size: PropTypes.string.isRequired,
                height: PropTypes.string.isRequired,
                weight: PropTypes.string.isRequired,
                hair: PropTypes.string.isRequired,
                eyes: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
                gender: PropTypes.string.isRequired,
            }).isRequired,
            ability_scores: PropTypes.shape({
                str: PropTypes.number.isRequired,
                dex: PropTypes.number.isRequired,
                con: PropTypes.number.isRequired,
                int: PropTypes.number.isRequired,
                wis: PropTypes.number.isRequired,
                cha: PropTypes.number.isRequired,
            }).isRequired,
            status: PropTypes.shape({
                max_hp: PropTypes.number.isRequired,
                current_hp: PropTypes.number.isRequired,
                temp_hp: PropTypes.number.isRequired
            }),
            saves: PropTypes.shape({
                reflex: PropTypes.number.isRequired,
                fortitude: PropTypes.number.isRequired,
                will: PropTypes.number.isRequired
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
            }).isRequired,
            skill_ranks: skillRanksShape.isRequired,
        }).isRequired,
    }).isRequired,
}


export default Character