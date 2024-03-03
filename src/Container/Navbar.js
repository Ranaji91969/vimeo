import React from 'react'

import {NavLink } from 'react-router-dom'

function NavBar() {
  return (
   
    <nav>

        <header>
        
              <NavLink  to="/" >Dashbord</NavLink>
              <NavLink to="/"></NavLink>
         </header>
     </nav>
   
    )
}

export default NavBar;