import './Site.css'
import React from 'react'
import BusinessCard from './BusinessCard'
import Header from './Header'
import About from './About'
import Campaigns from './Campaigns'
import Brands from './Brands'
import Skills from './Skills'

const Site = () => {
    return (
        <div className='site'>
            <Header />
            <BusinessCard />
            <About/>
            <Campaigns/>
            <Skills/>
            <Brands/>
        </div>
    )
}
export default Site;