import { useParksData } from '../store'
import WebCam from './webcam';

import './webcamlist.css';

export default function WebCamList () {

	const { parkdata } = useParksData()

	return (
		<div className="webcamlist">
			{ parkdata.length > 0 && 
				parkdata.map((item, index) => {
					return ( 
						<WebCam key={index} data={item} />
					)
				})
			}
		</div>
	)

}
