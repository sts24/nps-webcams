import { Suspense } from 'react'
import { useParksList } from '../store'
import ParkItem from './parkitem';

export default function WebCamList () {

	const parksList = useParksList();

	const parkItems = [];
	parksList.forEach((item, index) => {
		parkItems.push(
			<ParkItem key={index} data={item} />
		)
	})

	return (
		<ul className="parks-list">
			
			<Suspense>
				{ parkItems }
			</Suspense>
			
		</ul>
	)

}
