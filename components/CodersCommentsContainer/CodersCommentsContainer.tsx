// custom elements
import Wrapper from '../Wrapper/Wrapper'
import CodersComment from '../CodersComment/CodersComment'
import Coder from '../../schema/Coder'
// images
import John from '../../public/static/img/coders/John.png'
import Vasiliy from '../../public/static/img/coders/Vasiliy.png'
// styles
import styles from './CodersCommentsContainer.module.scss'

const CodersCommentsContainer: React.FC = (): JSX.Element => {
  const coders: Array<Coder> = [
    {
      name: 'John Kennedy',
      img: John,
      description: 'Wow, this test task is absolutely amazing! Loved it!',
      rating: 5,
      time: '05:20',
    },
    {
      name: 'Vasiliy Igorsky',
      img: Vasiliy,
      description:
        'Holy cow, developers rock, but I missed the 5 stars button.',
      rating: 4,
      time: '14:30',
    },
  ]

  return (
    <div className={styles.container}>
      <Wrapper>
        <h2 className={styles.title}>What Other Coders Are Saying...</h2>
        <div className={styles.inner}>
          {coders.map((coder) => (
            <CodersComment coder={coder} key={coder.name} />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default CodersCommentsContainer
