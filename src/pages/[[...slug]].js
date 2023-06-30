import Layout from '@/app/layout'
import ParksList from '../app/components/parkslist'
import ParkDetail from '../app/components/parkdetail'

import '@/app/styles/page.css'

   
export default function Home() {

  return (
    <Layout>
      <main className="main-container">
        <div className="list-container">
          <ParksList />
        </div>
        <div className="detail-container">
          <ParkDetail />
        </div>
      </main>
    </Layout>
  )
}