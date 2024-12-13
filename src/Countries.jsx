import React, { useState } from 'react'
import countriesAndCapitals from './data'
import CountryCard from './Country'
import { nanoid } from 'nanoid'

export default function Countries() {

    return (
        <section className='container'>
            <h1 className='text'>Countries Game </h1>
            <div className='countries'>
                {countriesAndCapitals.map( ( countryObj ) =>
                    <CountryCard key={nanoid()} countryObj={countryObj} />
                )}
            </div>
        </section>
    )
}
