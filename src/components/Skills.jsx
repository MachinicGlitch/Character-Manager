import React from 'react'
import PropTypes from 'prop-types'

function Skills({ skill_ranks, ability_modifiers }) {
    return (
        <div>
            <h2>Skills</h2>
            <p>Appraise: {`${skill_ranks.appraise + ability_modifiers.intMod}`}</p>
            <p>Balance: {`${skill_ranks.balance + ability_modifiers.dexMod}`}</p>
            <p>Bluff: {`${skill_ranks.bluff + ability_modifiers.chaMod}`}</p>
            <p>Climb: {`${skill_ranks.climb + ability_modifiers.strMod}`}</p>
            <p>Concentration: {`${skill_ranks.concentration + ability_modifiers.conMod}`}</p>
            <p>Decipher Script: {`${skill_ranks.decipher_script + ability_modifiers.intMod}`}</p>
            <p>Diplomacy: {`${skill_ranks.diplomacy + ability_modifiers.chaMod}`}</p>
            <p>Disable Device: {`${skill_ranks.disable_device + ability_modifiers.intMod}`}</p>
            <p>Disguise: {`${skill_ranks.disguise + ability_modifiers.chaMod}`}</p>
            <p>Escape Artist: {`${skill_ranks.escape_artist + ability_modifiers.dexMod}`}</p>
            <p>Forgery: {`${skill_ranks.forgery + ability_modifiers.intMod}`}</p>
            <p>Gather Information: {`${skill_ranks.gather_information + ability_modifiers.chaMod}`}</p>
            <p>Handle Animal: {`${skill_ranks.handle_animal + ability_modifiers.chaMod}`}</p>
            <p>Heal: {`${skill_ranks.heal + ability_modifiers.wisMod}`}</p>
            <p>Hide: {`${skill_ranks.hide + ability_modifiers.dexMod}`}</p>
            <p>Intimidate: {`${skill_ranks.intimidate + ability_modifiers.chaMod}`}</p>
            <p>Jump: {`${skill_ranks.jump + ability_modifiers.strMod}`}</p>
            <p>Listen: {`${skill_ranks.listen + ability_modifiers.wisMod}`}</p>
            <p>Move Silently: {`${skill_ranks.move_silently + ability_modifiers.dexMod}`}</p>
            <p>Open Lock: {`${skill_ranks.open_lock + ability_modifiers.dexMod}`}</p>
            <p>Ride: {`${skill_ranks.ride + ability_modifiers.dexMod}`}</p>
            <p>Search: {`${skill_ranks.search + ability_modifiers.intMod}`}</p>
            <p>Sense Motive: {`${skill_ranks.sense_motive + ability_modifiers.wisMod}`}</p>
            <p>Sleight Of Hand: {`${skill_ranks.sleight_of_hand + ability_modifiers.dexMod}`}</p>
            <p>Speak Language: {`${skill_ranks.speak_language + ability_modifiers.intMod}`}</p>
            <p>Spellcraft: {`${skill_ranks.spellcraft + ability_modifiers.intMod}`}</p>
            <p>Spot: {`${skill_ranks.spot + ability_modifiers.wisMod}`}</p>
            <p>Survival: {`${skill_ranks.survival + ability_modifiers.wisMod}`}</p>
            <p>Swim: {`${skill_ranks.swim + ability_modifiers.strMod}`}</p>
            <p>Tumble: {`${skill_ranks.tumble + ability_modifiers.dexMod}`}</p>
            <p>Use Magic Device: {`${skill_ranks.use_magic_device + ability_modifiers.chaMod}`}</p>
            <p>Use Rope: {`${skill_ranks.use_rope + ability_modifiers.dexMod}`}</p>
        </div>
    )
}



const subSkillShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    ranks: PropTypes.string.isRequired
})


Skills.propTypes = {
    skill_ranks: PropTypes.shape({
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
        hide: PropTypes.number.isRequired,
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
        spot: PropTypes.number.isRequired,
        survival: PropTypes.number.isRequired,
        swim: PropTypes.number.isRequired,
        tumble: PropTypes.number.isRequired,
        use_magic_device: PropTypes.number.isRequired,
        use_rope: PropTypes.number.isRequired
    }).isRequired,
    ability_modifiers: PropTypes.arrayOf(
        PropTypes.shape({
            strMod: PropTypes.number.isRequired,
            dexMod: PropTypes.number.isRequired,
            conMod: PropTypes.number.isRequired,
            intMod: PropTypes.number.isRequired,
            wisMod: PropTypes.number.isRequired,
            chaMod: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Skills