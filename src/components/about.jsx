import myong from '../myong.png'
import styles from './about.module.css'
import {Element} from 'react-scroll'

export default function About() {

  //<hr style={{border: '0.5px solid black', width: '85%'}}/>
  return (
    <Element id='about'>
      <div className={styles.aboutTitle}>
        <h1 style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'}}> About Me </h1>
      </div>
      <div className={styles.about}>
        <div className={styles.pictureAndText}>
        <img src={myong} className={styles.photo} alt='about' />
        <p className={styles.aboutText}>
          My name is Myong O. I am a Licensed Clinical Social Worker
          (LCSW). I received a Master of Social Work degree from
          Portland State Universtiy and a Bachelor's degree from the
          University of California at Los Angeles (U.C.L.A.). I have
          over 25 years of experience working with children, families,
          and adults in various social service agencies from
          developmental disability services to Head Start Early
          Childhood Education. From 2011 to 2021, I practiced clinical
          social work as a Behavioral Health Consultant at Oregon
          Health Science University (OHSU) Family Medicine at Richmond
          in an integrated setting.
          Additionally, I have been in private practice since 2018.
          One of my main goals is to support People of Color and people
          who have emigrated  (whether recently like myself, or many
          generations back, like most) with the various challenges
          that arise when one feels disconnected and misunderstood by our
          own families and community
        </p>
      </div>
        <h2>
          My Approach to Therapy
        </h2>
        <p className={styles.availabilityText}>
          Regardless of what we are struggling with — be it anxiety, depression, trauma, concentration dificulties etc. — when we improve our brain functions, we increase our ability to live the life that is meaningful to us. I will help you by strengthening your wise brain and quieting your survival brain.
        </p>
      </div>
    </Element>
  )
}
