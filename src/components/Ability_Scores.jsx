import React from 'react'
import PropTypes from 'prop-types'

function Ability_Scores({ ability_scores, ability_modifiers }) {


    return (
        <div>
            <h2>Ability Scores</h2>
            <p>STR: score = {`${ability_scores.str}`} | modifier = {`${ability_modifiers.strMod}`}</p>
            <p>DEX: score = {`${ability_scores.dex}`} | modifier = {`${ability_modifiers.dexMod}`}</p>
            <p>CON: score = {`${ability_scores.con}`} | modifier = {`${ability_modifiers.conMod}`}</p>
            <p>INT: score = {`${ability_scores.int}`} | modifier = {`${ability_modifiers.intMod}`}</p>
            <p>WIS: score = {`${ability_scores.wis}`} | modifier = {`${ability_modifiers.wisMod}`}</p>
            <p>CHA: score = {`${ability_scores.cha}`} | modifier = {`${ability_modifiers.chaMod}`}</p>
        </div>
    )
}

Ability_Scores.propTypes = {
    ability_scores: PropTypes.arrayOf(
        PropTypes.shape({
            str: PropTypes.number.isRequired,
            dex: PropTypes.number.isRequired,
            con: PropTypes.number.isRequired,
            int: PropTypes.number.isRequired,
            wis: PropTypes.number.isRequired,
            cha: PropTypes.number.isRequired
        })
    ).isRequired,
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

export default Ability_Scores