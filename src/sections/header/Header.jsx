import './header.css'
import HeaderImage from '../../assets/headerpraveen.jpg'
import data from './data'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt='Header' />
        </div>
        <h3>Praveen Singh Chauhan</h3>
        <p>
          Eager to work in challenging positions where my problem-solving skills, with a strong desire to learn new prospects to help the organization in the achievement of its goal.
        </p>
        <div className='header__cta'>
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel="noopener noreferrer" >{item.icon}</a>)
          }
        </div>


      </div>
    </header>
  )
}

export default Header