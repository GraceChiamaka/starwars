import React from 'react';

const starships = (props) => {
    return (
        <div className="Starship">
            <div className="col-md-3 col-lg-3 mb-3">
                <div className="planet-card">
                    <div className="planet-card-inner">
                        <div className="planet-front">
                            <div className="card-body">
                                <h4 className="card-title">{props.name}</h4>
                                <p className="card-text">
                                    <span className="text-capitalize">{props.model}
                                    </span>
                                </p>
                                <p className="card-text">{props.capacity}</p>
                            </div>
                        </div>

                        <div className="planet-back">
                            <h1 className="text-center">{props.name}</h1>
                            <p className='mb-1'>Model: {props.model}</p>
                            <p className='mb-1'>MGLT: {props.mglt} /hr  </p>
                            <p className='mb-1'>Capacity: {props.capacity}</p> 
                            <p className='mb-1'>Price: {props.price} credits</p>
                            <p className='mb-1'>Manufacturer: {props.maker}</p>
                            <p className='mb-1'>Passengers: {props.passengers}</p>
                            <p className='mb-1'>drive rating: {props.rating}</p>
                            <p className='mb-1'>Class: {props.class}</p>
                            <p className='mb-1'>Consumables: {props.consume}</p>
                            <p className='mb-1'>Crew: {props.crew}</p>
                            <p className='mb-1'>Atmosphering Speed{props.speed}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default starships;