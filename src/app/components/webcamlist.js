import { Suspense } from 'react'
import { useParksList } from '../store'
import ParkItem from './parkitem';

import './webcamlist.css';

export default function WebCamList () {

	const parksList = useParksList();

	const parkItems = [];
	parksList.forEach((item, index) => {
		parkItems.push(
			<ParkItem key={index} data={item} />
		)
	})

	return (
		<ul className="webcamlist">
			
			<Suspense>
				{ parkItems }
			</Suspense>
			
		</ul>
	)

}
