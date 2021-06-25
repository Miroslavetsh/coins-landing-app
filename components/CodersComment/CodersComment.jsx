// next elements
import Image from 'next/image'
// images
import GoldenStar from '../../../public/img/icons/star-gld.svg'
import SilverStar from '../../../public/img/icons/star-slv.svg'
// styles
import styles from './CodersComment.module.scss'

const CodersComment = ({ coder }) => {
    const MAX_RATING_POINT = 5
    const { src, height, width } = coder?.img

    function createStarsRating(point, max) {
        const stars = new Array(max)
        let currentStar = GoldenStar

        for (let i = 0; i < max; i++) {
            if (i >= point && i <= max) currentStar = SilverStar
            const { src, width, height } = currentStar
            stars.push(<Image src={src} width={width} height={height} />)
        }

        return stars
    }

    return (
        <div className={styles.card} title={`Rating: ${coder?.rating} of ${MAX_RATING_POINT}`}>
            <div className={styles.coder}>
                <div className={styles.image}>
                    <Image src={src} width={width} height={height} />
                </div>
                <div className={styles.text}>
                    <div className={styles.description}>{coder?.description}</div>
                    <div className={styles.name}>{coder?.name}</div>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.time}>{coder?.time}</div>
                <div className={styles.rating}>
                    {createStarsRating(coder?.rating, MAX_RATING_POINT)}
                </div>
            </div>
        </div>
    )
}

export default CodersComment
