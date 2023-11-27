import './hoverMenu.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-scroll'

export default function HoverMenu() {
  const [scroll, setScroll] = useState(true);
  const [inAbout, setAbout] = useState(true);
  const [inServices, setService] = useState(false);
  const [inContact, setContact] = useState(false);
  const [inScheduling, setScheduling] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset
    if (yOffset < 400) {
      setScroll(true)
    } else {
      setScroll(false)
    }

    const aboutY = document.getElementById('about').getBoundingClientRect().bottom
    const servicesY = document.getElementById('services').getBoundingClientRect().bottom
    const schedulingY = document.getElementById('scheduling').getBoundingClientRect().bottom

    if (aboutY > 0) {
      setAbout(true)
      setService(false)
      setContact(false)
      setScheduling(false)
    } else if (servicesY > 0) {
      setService(true)
      setAbout(false)
      setContact(false)
      setScheduling(false)
    } else if (schedulingY > 0) {
      setContact(false)
      setAbout(false)
      setService(false)
      setScheduling(true)
    } else {
      setScheduling(false)
      setContact(true)
      setAbout(false)
      setService(false)
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll)
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [hasText, setText] = useState(true)

  const handleScreen = () => {
    const screenWidth = window.innerWidth
    if (screenWidth > 800) {
      setText(true)
    } else {
      setText(false)
    }
  }
  
  useEffect(() => {
    handleScreen()
  }, [])

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('resize', handleScreen)
    }
    watchScroll();
    return () => {
      window.removeEventListener('resize', handleScreen)
    }
  }, [])

  return (
    <>
      <div className="hoverMenu">
        <div className={`hoverItems ${scroll ? 'hoverItemsActive' : ''}`}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <div className={inAbout ? 'onItem' : 'item'}>
              {hasText ? 'About Me' : ''}
            </div>
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            <div className={inServices ? 'onItem' : 'item'}>
              {hasText ? 'Services' : ''}
            </div>
          </Link>
          <Link to="scheduling" spy={true} smooth={true} duration={500}>
            <div className={inScheduling ? 'onItem' : 'item'}>
              {hasText ? 'Scheduling+' : ''}
            </div>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <div className={inContact ? 'onItem' : 'item'}>
              {hasText ? 'Contact' : ''}
            </div>
          </Link>
        </div> 
      </div>
    </>
  )
}
