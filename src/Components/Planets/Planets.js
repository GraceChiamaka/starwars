import React from 'react';
import './Planets.scss';


const planets = (props)  => {
    
    return(
        <div className="Planets">
                <div className="col-md-3 col-lg-3 mb-3">
                    <div className="planet-card">
                       <div className="planet-card-inner">
                            <div className="planet-front">
                                <div className="card-body">
                                    <h4 className="card-title">{props.name}</h4>
                                    <p className="card-text">
                                        <strong>{props.name} Climate: </strong> 
                                        <span className="text-capitalize">{props.temp}
                                        </span>
                                    </p>
                                    <p className="card-text">{props.pop}</p>
                                </div>
                            </div>
                            <div className="planet-back">
                                <h1 className="text-center">{props.name}</h1> 
                                <p className='mb-1'>Temperature: {props.temp}</p> 
                                <p className='mb-1'>diameter: {props.diameter}</p>
                                <p className='mb-1'>Gravity: {props.gravity}</p>
                                <p className='mb-1'>Orbital Period{props.orbit}</p>
                                <p className='mb-1'>population: {props.pop}</p>
                                <p className='mb-1'>Rotation Period: {props.rotate}</p>
                                <p className='mb-1'>Surface Water: {props.surface}</p>
                                <p className='mb-1'>terrain: {props.terrain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    );
}

export default planets;