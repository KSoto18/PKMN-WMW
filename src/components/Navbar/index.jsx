import React from 'react';

import './styles.css';

const Navbar = () => { 

     return (

         <nav> 
           
           <a href= "/" className="home-title">Home</a>

           <ul>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
           </ul>


         </nav>

     )
        


}





export default Navbar;