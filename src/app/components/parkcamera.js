import Arrow from '@/app/svg/arrow.svg'

import styles from '@/app/styles/park-camera.module.scss'

export default function ParkCamera({ data }){

  return (
    <section className={styles.parkCamera}>
      <header className={styles.heading}>{data.title}</header>
      <p>{data.description}</p>
      <a href={data.url} target="_blank" className={styles.arrowLink}>View Camera <Arrow className={styles.arrowLinkIcon} /></a>
    </section>
  )
}