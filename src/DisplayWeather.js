import './DisplayWeather.css'
// import Temperature from './Temperature';

function DisplayWeather(props) {
    return (
        <div>
            <h1>{props.temp} <img src={props.icon}></img></h1>
            <p>{props.desc}</p>
            <p>{props.humidity}</p>
            {/* <Temperature temp={props.temp} /> */}
        </div>
    )
}

export default DisplayWeather