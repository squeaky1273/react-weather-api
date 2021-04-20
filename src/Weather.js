import { useState } from 'react'
import './Weather.css'
import DisplayWeather from './DisplayWeather'

// data = { temp: 64, desc: 'Scattered clouds' }
// <DisplayWeather temp={data.temp} desc={data.desc} />
// <DisplayWeather {...data} />


function Weather() {
    const [ zip, setZip ] = useState('')
    const [ data, setData ] = useState(null)

    async function getWeather() {
        const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
        const path = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}`
        const res = await fetch(path) // stop !
        const json = await res.json() // stop !
        console.log(json)
        const temp = json.main.temp
        const desc = json.weather[0].description
        const humidity = json.main.humidity
        const icon = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
        setData({ temp, desc, humidity, icon })
    }

    return (
        <div className="Weather">
            { data ? <DisplayWeather {...data} /> : null }
            <form onSubmit={ e => {
                e.preventDefault()
                getWeather()
            } }>
                <input
                    placeholder="Enter your zip code..."
                    value={zip}
                    onChange={ e => setZip(e.target.value) }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Weather