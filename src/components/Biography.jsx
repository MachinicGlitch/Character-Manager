import React from 'react'
import PropTypes from 'prop-types'

function Biography({ description }) {
    return (
        <div>
            <h2>Description</h2>
            <h2>Character Name: {`${description.character_name}:`}</h2>
            <p>Gender: {`${description.gender}`}</p>
            <p>Race: {`${description.race}`}</p>
            <p>Size: {`${description.size}`}</p>
            <p>Age: {`${description.age}`}</p>
            <p>Height: {`${description.height}`}</p>
            <p>Weight: {`${description.weight}`}</p>
            <p>Hair: {`${description.hair}`}</p>
            <p>Eyes: {`${description.eyes}`}</p>
            <p>Alignment: {`${description.alginment}`}</p>
            <p>Deity: {`${description.deity}`}</p>
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