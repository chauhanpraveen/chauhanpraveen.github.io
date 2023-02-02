import './navbar.css';
import Logo from '../../assets/Praveenpic.jpg'
import data from './data';
import {IoIosColorPalette} from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'

function mobileMenu() {
var navMenu = document.getElementById('navMenu');

if ( navMenu.style.display === 'none'){
  navMenu.style.display = 'flex';
} else{
  navMenu.style.display = 'none';
}

}

const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu' id='navMenu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <div>
        <button id='theme__icon'><IoIosColorPalette/></button>
        <button id='mMtrigger' onClick={mobileMenu}><RxHamburgerMenu/></button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar