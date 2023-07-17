import { Suspense } from 'react'
import { useParksList } from '../store'
import ParkItem from './parkitem';

import styles from '@//styles/park-list.module.scss'

export default function WebCamList () {

	const parksList = useParksList();

	const parkItems = [];
	parksList.forEach((item, index) => {
		parkItems.push(
			<ParkItem key={index} data={item} />
		)
	})

	return (
		<ul className={styles.parksList}>
			
			<Suspense>
				{ parkItems }
			</Suspense>
			
		</ul>
	)

}
