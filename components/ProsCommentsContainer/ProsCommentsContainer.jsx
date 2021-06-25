// custom elements
import Wrapper from '../Wrapper/Wrapper'
import ProsComment from '../ProsComment/ProsComment'
// images
import Nia from '../../../public/img/team/Nia.jpg'
import Abigale from '../../../public/img/team/Abigale.jpg'
import Fedya from '../../../public/img/team/Fedya.jpg'
// styles
import styles from './ProsCommentsContainer.module.scss'

const ProsCommentsContainer = () => {
    const pros = [
        { name: 'Nia', img: Nia, description: '“This task can be perfect for students from FIT”' },
        {
            name: 'Abigale',
            img: Abigale,
            description: '“I am so sexy, that men are doing  test tasks for me for free.”',
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
