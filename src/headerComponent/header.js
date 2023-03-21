import React, {useState} from 'react'
import logo from './logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faBars} from '@fortawesome/free-solid-svg-icons';
import './header.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div>
        <header className='header'>
            <img src={logo} alt="logo"/>
            <ul className={isMenuOpen ? "list-responsive" : "lists"}>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>AboutUs</li>
                <li>Login</li>
                <li>SignUp</li>
            </ul>
        
        <button className="menu-toggle" onClick={handleClick}>
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} />: <FontAwesomeIcon icon={faBars} />}
        </button>
        </header>
       
    </div>
  )
}
export default Header