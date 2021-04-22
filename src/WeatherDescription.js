import './WeatherDescription.css'

function WeatherDescription(props) {
    const { description }  = props

    return (
        <div>
            <p>{description}</p>
        </div>
    )
}

export default WeatherDescription