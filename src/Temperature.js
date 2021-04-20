import React from 'react'

function Temperature(props) {
    const { temp, unit } = props

    function convert(temp, unit) {
        if (unit === "F") {
            return (temp * (9/5) - 459.67).toFixed(1) + '°' + unit
        } else if (unit === "C") {
            return (temp - 273.15).toFixed(1) + '°' + unit
        }
        return (temp + unit)
    }
    return (
        <div>
            <p>Temp: {convert(temp, unit)}</p>
        </div>
    )
}

export default Temperature