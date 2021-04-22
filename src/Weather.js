import React from 'react'
import { useState } from 'react'
import './Weather.css'
import WeatherDescription from './WeatherDescription'
import Atmosphere from './Atmosphere';
import Temperature from './Temperature';


function Weather() {
    const [zip, setZip] = useState('')
    const [data, setData] = useState(null)
    const [unit, setUnit] = useState('F')

    async function getWeather() {
        const apikey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
        const path= `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}`
        
        const res = await fetch(path)
        const json = await res.json()
        const { cod, message } = json

        if (cod === null) {
            setData({ cod, message})
            return
        }

        const temp = json.main.temp
        const desc = json.weather[0].description
        const name = json.name
        const main = json.weather[0].main
        const wind = json.wind.speed
        const icon = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png"
        console.log(json)
        setData({ temp, desc, name, main, wind, icon, cod, message})
    }

    return (
        <div className="Weather">
            <h1>Weather App</h1>
            {data ? <Temperature {...data}/>: null}
            {data ? <WeatherDescription {...data}/>: null}
            {data ? <Atmosphere {...data}/>: null}
            <form
            onSubmit={e => {
                e.preventDefault()
                getWeather()
            }}>
            <input 
            placeholder="Enter your zip code..."
            value={zip}
            onChange={ e => setZip(e.target.value)}
            />
            <button>Submit</button>
            <label>
                <input
                    type="radio"
                    name="Unit"
                    value="F"
                    checked={unit==="F"}
                    onChange={ e => setUnit("F")}
                /> F
            </label>
            <label>
                <input
                    type="radio"
                    name="Unit"
                    value="C"
                    checked={unit==="C"}
                    onChange={ e => setUnit("C")}
                /> C
            </label>
        </form>    
        </div>
    )
}

export default Weather