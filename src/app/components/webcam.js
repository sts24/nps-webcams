import './webcam.css';


export default function WebCam ({ data }) {

    return (
        <div className="webcam">
            <header>{data.title}</header>
            <p>{data.description}</p>

            { data.relatedParks.length > 0 &&
                data.relatedParks.map((park, index) => {
                    return ( <p key={index}><a href={park.url}>{ park.fullName }</a></p> )
            })}

            <a href={data.url}>View Webcam</a>
        </div>
    )
}