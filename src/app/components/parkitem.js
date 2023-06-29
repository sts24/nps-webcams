import './webcam.css';


export default function ParkItem ({ data }) {

    

    return (
        <li>
            <button>{data.name}</button>
        </li>
    )

}