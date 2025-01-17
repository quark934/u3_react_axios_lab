import Nav from './Nav'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Planets = (props) => {

    let navigate = useNavigate()

    const showPlanet = (key) => {
        navigate(`${key}`)
    }

    return (
        <div className="starships-page">
            <Nav />
            <div className="grid-container">
                {
                    props.planets.map((planet, key) => (
                        <div key={key} className='card' onClick={() => showPlanet(key)}>
                            <h2 className="card-title">{planet.name}</h2>
                            <hr></hr>
                            <div className="card-data-container">
                                <p className="card-data card-data1">Climate</p>
                                <p className="card-data card-data2">{planet.climate}</p>
                                <p className="card-data card-data1">Gravity</p>
                                <p className="card-data card-data2">{planet.gravity}</p>
                                <p className="card-data card-data1">Terrain</p>
                                <p className="card-data card-data2">{planet.terrain}</p>
                                <p className="card-data card-data1">Population</p>
                                <p className="card-data card-data2">{planet.population}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Planets