import Layout from '@/app/layout'
import ParksList from '../app/components/parkslist'
import ParkDetail from '../app/components/parkdetail'

import styles from '@/app/styles/page.module.scss'
   
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