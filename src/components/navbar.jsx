import './navbar.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-scroll';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)

  function handleScroll(event) { 
    const yOffset = window.pageYOffset
    setScrollY(yOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  const navBackgroundStyle = {
    backgroundColor: `rgba(42, 94, 115, ${Math.min(0.9, scrollY/400)})`
  }

  return (
    <nav style={navBackgroundStyle}>
      <a className='title navItem' href="/">OM Therapy</a>
      <div>
        <Link className='navItem' activeClass="active" to="about" spy={true} smooth={true} duration={500}>
          About Me
        </Link>
        <Link className='navItem' activeClass="active" to="services" spy={true} smooth={true} duration={500}>
          Services
        </Link>
        <Link className='navItem' activeClass="active" to="scheduling" spy={true} smooth={true} duration={500}>
          Scheduling+
        </Link>
        <Link className='navItem' activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  )
}
