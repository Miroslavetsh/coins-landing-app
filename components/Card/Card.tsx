// next elements
import Image from 'next/image'
// images
import Andy from '../../public/static/img/team/andy.jpg'
// styles
import styles from './Card.module.scss'

const Card: React.FC = (): JSX.Element => (
  <div className={styles.card}>
    <div className={styles.top}>
      <Image
        className={styles.avatar}
        width={115}
        height={115}
        src={Andy}
        alt='Andy'
      />
      <div className={styles.headline}>
        <div className={styles.name}>Andy</div>
        <div className={styles.position}>Head Of UX Design</div>
      </div>
    </div>
    <div className={styles.quotation}>
      “The Style Of This Test Task Matches The Style That You Will Be Making
      Real Job In.”
    </div>
  </div>
)

export default Card
