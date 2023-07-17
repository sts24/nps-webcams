import Layout from '@/layout'
import ParksList from '@/components/ParksList'
import ParkDetail from '@/components/ParkDetail'

import styles from '@/styles/page.module.scss'
   
export default function Home() {

  return (
    <Layout>
      
        <div className={styles.listContainer}>
          <ParksList />
        </div>
        <div className={styles.detailContainer}>
          <ParkDetail />
        </div>
      
    </Layout>
  )
}