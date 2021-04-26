import React from 'react'


function DisplayWeather(props) {
    const { temp, wind, name, desc, cod, message }  = props

    if (cod !== 200) {
        return (
            <p>{cod}: {message}</p>
        )
    }

    // function convert(temp, unit) {
    //     if (unit === 'F') {
    //         return (temp * (9/5) - 459.67).toFixed(1) + '°' + unit
    //     } else if ( unit === 'C') {
    //         return (temp - 273.15).toFixed(1) + '°' + unit
    //     }
    //     return (temp + unit)
    // }

    return (
        <div>
            {/* <h1>Temp: {convert(temp, unit)}</h1>
            <p>Temp Min: {convert(temp_min, unit)}<br /> Temp Max: {convert(temp_max, unit)}</p> */}
            <h2>Temp: {temp}°</h2>
            <h4>{name}</h4>
            <h4>Wind Speed: {wind}</h4>
            <h4>Description: {desc}</h4>
        </div>
    )
}

export default DisplayWeather