import { Suspense } from 'react'
import { useRouter } from 'next/router'
import { useParksList } from '../store'
import ParkCamera from '@/components/parkcamera'

import styles from '@//styles/page-detail.module.scss'
import { Pacifico } from '@/styles/fonts'

export default function ParkDetail(){

  const router = useRouter()
  const slug = router.query.slug !== undefined ? router.query.slug.join() : null
  const parksList = useParksList()
  const parkDetailData = parksList.get(slug)

  
  if(parkDetailData !== undefined){
    
    const parkCameras = []
    parkDetailData.data.forEach((camera, index) => {
      parkCameras.push(<ParkCamera data={camera} key={index} />)
    })

    return (
      <div>
        <header className={`${styles.heading} ${Pacifico.className}`}>{parkDetailData.name}</header>
        <Suspense>
          { parkCameras }
        </Suspense>
      </div>
    )

  }
}