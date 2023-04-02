import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import './Header.css'

const Header = () => {
    const [isOpen, setOpen] = useState(false)

    let menu

    if(isOpen){
        menu = 
        <ul>
            <li><a href='#about'>ABOUT</a></li>
            <li><a href='#campaigns'>CAMPAIGNS</a></li>
            <li><a href='#skills'>SKILLS</a></li>
            <li><a href='#brands'>BRANDS</a></li>
        </ul>
    }

return (
    <div className='header'>
       <Hamburger className='hamburger'toggled={isOpen} toggle={setOpen} color = 'rgb(187,111,108)'/>

        { menu }

    </div>
)
}
export default Header;