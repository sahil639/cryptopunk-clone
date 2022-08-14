import React from 'react'
import './header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import SearchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='logoContainer'>
          <img src={punkLogo} className='punkLogo' alt='punk logo' />
        </div>

        <div className='searchBar'>
          <div className='searchIconContainer'>
            <img src={SearchIcon} alt=''/>
          </div>
          <input type='text' className='searchInput' placeholder='Collection, Items or user...' />
        </div>

        <div className='headerItems'>
          <p>Drops</p>
          <p>Marketplace</p>
          <p>Create</p>
        </ div>

        <div className='headerActions'>
          <div className='themeSwitchContainer'>
             <img src={themeSwitchIcon} alt=''/>
          </div>
        </div>

        <div className='loginButton'>
          <p>Login</p>
        </div>
    </div>
  )
}

export default Header