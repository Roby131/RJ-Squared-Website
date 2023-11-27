import './contact.css'
import {Element} from 'react-scroll'

export default function Contact() {
    return (
        <Element id='contact'>
            <div className='contactTitle'>
                <h1 style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'}}>Contact</h1>
            </div>
            <div className="contactForm">
                <form className="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/meqvkqol" method="post">
                    <fieldset className="fs-frm-inputs">
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" name="name" className="full-name" placeholder="First and Last Name" required="" />
                        <label htmlFor="email-address">Email Address</label>
                        <input type="email" name="_replyto" className="email-address" placeholder="email@domain.com" required="" />
                        <label htmlFor="message">Message</label>
                        <textarea rows="5" style={{resize: 'none'}} name="message" className="message" placeholder="Write your message here" required=""/>
                    </fieldset>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Element>
    )
}

