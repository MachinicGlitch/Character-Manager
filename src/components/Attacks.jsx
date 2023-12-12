import React from 'react'
import PropTypes from 'prop-types'

function Attacks({ weapons, ability_modifiers }) {
    return (
        <div>
            <h2>Weapons</h2>
            <ul>
                {weapons.map((weapon, index) => (
                    <li key={index}>
                        {weapon.name} - Damage: {weapon.damage}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Attacks.propTypes = {
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

export default Attacks