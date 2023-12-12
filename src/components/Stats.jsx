import React from 'react'
import PropTypes from 'prop-types'

function Stats({ status }) {
    return (
        <div>
            <h2>Stats</h2>
            <p>HP: {`${status.current_hp}`}/{`${status.max_hp}`}  |  Temp HP: {`${status.temp_hp}`}</p>
        </div>
    )
}

Stats.propTypes = {
    status: PropTypes.shape({
        max_hp: PropTypes.number.isRequired,
        current_hp: PropTypes.number.isRequired,
        temp_hp: PropTypes.number.isRequired
    }).isRequired
}

export default Stats