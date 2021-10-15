// custom elements
import Wrapper from '../Wrapper/Wrapper'
import ProsComment from '../ProsComment/ProsComment'
// images
import Nia from '../../public/static/img/team/Nia.jpg'
import Abigale from '../../public/static/img/team/Abigale.jpg'
import Fedya from '../../public/static/img/team/Fedya.jpg'
// styles
import styles from './ProsCommentsContainer.module.scss'
import Pro from '../../schema/Pro'

const ProsCommentsContainer: React.FC = () => {
  const pros: Array<Pro> = [
    {
      name: 'Nia',
      img: Nia,
      description: '“This task can be perfect for students from FIT”',
    },
    {
      name: 'Abigale',
      img: Abigale,
      description:
        '“I am so sexy, that men are doing  test tasks for me for free.”',
    },
    { name: 'Fedya', img: Fedya, description: '“Kuku Epta. EZ Task.”' },
  ]

  return (
    <div className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>What Pros Are Saying...</h2>
        <div className={styles.inner}>
          {pros.map((pro) => (
            <ProsComment pro={pro} key={pro.name} />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default ProsCommentsContainer
