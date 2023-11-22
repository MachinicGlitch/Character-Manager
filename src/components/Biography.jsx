import React from 'react'
import PropTypes from 'prop-types'

function Biography({ description }) {
    return (
        <div>
            <h2>Description</h2>
        </div>
    )
}

Biography.propTypes = {
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
    }).isRequired
}

export default Biography