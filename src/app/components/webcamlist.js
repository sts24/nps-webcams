import WebCam from './webcam';

import './webcamlist.css';

export default function WebCamList ({ parksData }) {

	return (
		<div className="webcamlist">
			{ parksData.length > 0 && 
				parksData.map((item, index) => {
					return ( 
						<WebCam key={index} data={item} />
					)
				})
			}
		</div>
	)

}
