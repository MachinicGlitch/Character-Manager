import React from 'react'
import PropTypes from 'prop-types'

function Biography({ character_name }) {
    return (
        <div>
            <h2>Description</h2>
        </div>
    )
}

Biography.propTypes = {
    character_name: PropTypes.string.isRequired
}

export default Biography