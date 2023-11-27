import styles from './services.module.css'
import {Element} from 'react-scroll'

export default function Services() {
    const servicesList = [
        {
            title: 'Individual Therapy',
            description: 'Acceptance and Commitment Therapy (ACT)\n and Accelerated Resolution Therapy (ART)'
        },
        //{
            //title: 'Couples Therapy',
            //description: ''

        //},
        {
            title: 'Group Therapy',
            description: 'Wellness, mindfulness, and identity-based groups (ex. women of color group)'
        },
        {
            title: 'Life Coaching',
            description: 'Career and intentional life design work'
        },
    ]

  const canHelpWith = [
    {
      title: 'Health behavior change',
      description: 'Sleep, nutrition, healthy weight and chronic conditions',
    },
    {
      title: 'Anxiety',
      description: 'Social anxiety, concentration difficulties',
    },
    {
      title: 'Depression',
      description: 'Grief and life transitions',
    },
    {
      title: 'Addiction',
      description: 'Behavior and substance',
    },
    {
      title: 'Relationship issues',
      description: 'Family, intimate relationships',
    },
    {
      title: 'Trauma',
      description: 'PTSD, trauma-related anxiety',
    },
  ]

    const services = servicesList.map((service, index) => {
        return (
            <div className={styles.service} key={index}>
                <h2>
                    {service.title}
                </h2>
                <div className={styles.description}>{service.description}</div>
            </div>
            )
        })

    return (
        <Element id="services">
          <div className={styles.servicesTitle}>
                <h1 style={{fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'}}>Services</h1>
            </div>
            <div className={styles.services}>
                {services}
            </div>
            <hr style={{width: '20%', marginTop: '2rem', marginBottom: '3rem'}}/>
            <div>
                <h2>I can help with</h2>
                <div className={styles.list}>
                  {canHelpWith.map((item, index) => <ListItem title={item.title} description={item.description} key={index} />)}
                </div>
            </div>
        </Element>
    )
}

const ListItem = ({title, description}) => {
  return(
    <div className={styles.listItem}>
      <h3 className={styles.listTitle}> {title} </h3>
      <h5 className={styles.listDescription}> {description} </h5>
    </div>
  )
}
