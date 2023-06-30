import { Suspense } from 'react'
import { useRouter } from 'next/router'
import { useParksList } from '../store'
import ParkCamera from '@/app/components/parkcamera'

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
      <div className="park-detail">
        <header className="park-detail__heading">{parkDetailData.name}</header>
        <Suspense>
          { parkCameras }
        </Suspense>
      </div>
    )

  }
}