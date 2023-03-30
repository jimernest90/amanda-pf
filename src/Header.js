import React, { useState } from 'react';
import Hamburger from 'hamburger-react'

const Header = () => {
    const [isOpen, setOpen] = useState(false)

    let menu

    if(isOpen){
        menu = 
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }

return (
    <div className='header'>
       <Hamburger toggled={isOpen} toggle={setOpen} color = 'rgb(187,111,108)'/>

        { menu }

    </div>
)
}
export default Header;