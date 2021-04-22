import React from 'react';
import './Atmosphere.css'

function Atmosphere(props) {
    const { pressure, humidity }  = props

    return (
        <div>
            <p>Pressure: {pressure}</p>
            <p>Humidity: {humidity}</p>
        </div>
    )
}

export default Atmosphere;