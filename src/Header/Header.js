import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwithIcon from '../assets/header/theme-switch.png'

export const Header = () => {
  return (
    <div className='header'>
       <div className='logoContainer'>
          <img src={punkLogo} className='punkLogo' alt='' />
        </div>

        <div className='searchBar'>
            <div className='searchIcon'>
                <img src={searchIcon} alt='' />
            </div>
            <input className='searchInput' placeholder='Collection, item or user ...' />
        </div>

        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>

        <div className='headerActions'>
            <div className='themeSwithContainer'>
                <img src={themeSwithIcon} alt='' />
            </div>
        </div>

        <div className='loginButton'>GET IN</div>
    </div>
  )
}