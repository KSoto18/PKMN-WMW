// Main Imports
import React from 'react';

// Styling
import './styles.css';

// Icons
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import InfoIcon from '@mui/icons-material/Info';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';



const Navbar = ({ showAbout, showBody, showContact, active }) => {

    return (

        <div className='navbar'>
        
           <nav className='nav'>
            <h1 onClick={showBody} className={active === 1 ? 'links active' : 'links'}><CatchingPokemonIcon/> HOME</h1>
            <h1 onClick={showAbout} className={active === 1 ? 'links active' : 'links'}><InfoIcon /> ABOUT</h1>
            <h1 onClick={showContact} className={active === 1 ? 'links active' : 'links'}><InsertEmoticonIcon /> CONTACT</h1>
           </nav>
           

        </div>



    );
};

export default Navbar;