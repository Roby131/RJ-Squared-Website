import {Element} from 'react-scroll'
import styles from './scheduling.module.css'

const days = ['Sunday', 'Monday', 'Tuesday']
const daysJSX = days.map((day, index) => {
    return (
      <div key={index}>
        <h5>
          {day}
        </h5>
      </div>
    )
})

export default function Scheduling() {
    return (
        <Element id="scheduling">
          <div className={styles.availabilityTitle}>
            <h1>Scheduling+</h1>
          </div>
          <h2>Availability</h2>
          <div className={styles.centeredName}>
            <p>
              I am available for morning, afternoon and evening appointments Monday through Thursday via Telehealth.
            </p>
          </div>
          <h2>Pricing</h2>
          <div className={styles.centeredName}>
            <p>
              I do not accept insurance but can provide a Superbill for Out of Network reimbursement benefits. I offer sliding scale for those who need it. My standard rate for a 50 minute session is $140.
            </p>
          </div>
        </Element>
    )
}
