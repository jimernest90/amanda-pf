import './Site.css'
import React from 'react'
import BusinessCard from './BusinessCard'
import Header from './Header'

const Site = () => {
    return (
        <div className='site'>
            <Header />
            <BusinessCard />
        </div>
    )
}
export default Site;