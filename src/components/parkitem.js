import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '@/styles/park-item.module.scss'

export default function ParkItem ({ data }) {

    const router = useRouter()
    const slug = router.query.slug !== undefined ? router.query.slug.join() : null
    const linkIsActive = `/${slug}` == data.slug ? styles['parkItemLink--active'] : ''

    return (
        <li className={styles.parkItem}>
            <Link href={data.slug} className={`${styles.parkItemLink} ${linkIsActive}`}>{data.name}</Link>
        </li>
    )

}