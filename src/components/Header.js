import styles from '@//styles/header.module.scss'

export default function Header(){

  return (
    <header className={styles.header}>
      <div className={styles.title}>NPS Webcams</div>

      <div className={styles.description}>
        <p><a href="https://smithscott.net/journal/nps-webcams/" target="_blank">What is this?</a></p>
      </div>
    </header>
  )

}