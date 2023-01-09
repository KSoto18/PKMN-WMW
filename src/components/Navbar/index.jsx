import React from 'react';

import './styles.css';

const Navbar = ({ showAbout, showBody, showContact, active }) => {

    return (

        <div className='navbar'>
        
           <nav className='nav'>
            <h1 onClick={showBody} className={active === 1 ? 'links active' : 'links'}>HOME</h1>
            <h1 onClick={showAbout} className={active === 1 ? 'links active' : 'links'}>ABOUT</h1>
            <h1 onClick={showContact} className={active === 1 ? 'links active' : 'links'}>CONTACT</h1>
           </nav>
           

        </div>



    );
};

export default Navbar;