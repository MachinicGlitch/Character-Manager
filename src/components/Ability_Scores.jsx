import React from 'react'
import PropTypes from 'prop-types'

function Ability_Scores({ ability_scores }) {
    return (
        <div>
            <h2>Ability Scores</h2>
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
    ).isRequired
}

export default Ability_Scores