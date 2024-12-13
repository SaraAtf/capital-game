import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function CountryCard( { countryObj, removeCountry } ) {
    const { country, capitals } = countryObj;

    const [ selectedcity, setSelectedCity ] = useState( null );
    const [ selectedcapital, setSelectedCapital ] = useState( null );

    const [ cities, setCities ] = useState( Object.keys( capitals ) )
    const [ citiyCapitals, setCitiyCapitals ] = useState( Object.values( capitals ) )
    const [ errors, setErrors ] = useState( null );



    const cityHandler = ( e ) => {
        setSelectedCity( e.target.textContent )
        if ( selectedcapital ) { }
        console.log( selectedcapital )

    }
    // {egypt:cairo}
    const capitalHandler = ( e, capitalValue ) => {
        setSelectedCapital( e.target.textContent );
        if ( selectedcity ) {
            if ( capitals[ selectedcity ] == capitalValue ) {
                setCities( cities.filter( city => city != selectedcity ) )
                setCitiyCapitals( citiyCapitals.filter( capital => capital != capitalValue ) )
                setErrors( null )
                toast.success( "Done" )
            } else {
                setErrors( 'Worng Answer' );
                toast.error( "Wrong Answer" )
            }
        } else {
            // city not selected

        }
    }
    return (
        <div className='country'>
            <h1 className='country-name'>{country}</h1>
            <div className='cities'>
                {cities.map( city => {
                    return <button
                        onClick={( e ) => cityHandler( e )}
                        className={`
                            btn city-btn ${( selectedcity == city && !errors ) ? 'selected-city' : ''}
                            ${( selectedcity == city && errors ) ? "errors" : ""}
                        `}
                        key={nanoid()}>{city}</button>
                } )}
            </div>
            <div className='cities'>
                {citiyCapitals.map( capital => {
                    let capitalObj;
                    ( typeof capital == "object" ) ?
                        capitalObj = Object.entries( capital )
                            .map( ( [ key, value ] ) => `${key} : ${value}` )
                            .join() : capitalObj = capital;

                    return <button
                        onClick={( e ) => capitalHandler( e, capital )}
                        className={`
                            btn capital-btn ${( ( ( selectedcapital == capital ) && !errors ) || ( ( selectedcapital == capitalObj ) && !errors ) ) ? 'selected-capital' : ''}
                            ${( selectedcapital == capital && errors ) || ( selectedcapital == capitalObj && errors ) ? "errors" : ""}
                        `}
                        key={nanoid()}>
                        {capitalObj}
                    </button>
                } )}
            </div>

        </div>
    )
}
