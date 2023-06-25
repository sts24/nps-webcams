//'use client'

//import { useState } from 'react';

import WebCam from './webcam';
import './webcamlist.css';

async function getData(){
    const data = await fetch('https://developer.nps.gov/api/v1/webcams?api_key=BxxA9qGfk0o1ts6bdhcqbuUHef6CAfflNrNPU3TD')

    if (!data.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return data.json();
}

export default async function WebCamList () {
    const webcamData = await getData();

    return (
        <div className="webcamlist">
             { webcamData.data.length > 0 && 
                webcamData.data.map((item, index) => {
                    return ( 
                        <WebCam key={index} data={item} />
                    )
                })
            }
        </div>
    )

}
