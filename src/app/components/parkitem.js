import Link from 'next/link'

import styles from '@/app/styles/park-item.module.scss'

export default function ParkItem ({ data }) {

    return (
        <li className={styles.parkItem}>
            <Link href={data.slug} className={styles.parkItemLink}>{data.name}</Link>
        </li>
    )

}