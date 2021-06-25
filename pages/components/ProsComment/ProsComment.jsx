// next elements
import Image from 'next/image'
// styles
import styles from './ProsComment.module.scss'

const ProsComment = ({ pro }) => {
    const { src, height, width } = pro.img

    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image src={src} width={width} height={height} />
            </div>
            <div className={styles.name}>{pro.name}</div>
            <div className={styles.description}>{pro.description}</div>
        </div>
    )
}

export default ProsComment
