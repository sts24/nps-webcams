import Link from 'next/link'

export default function ParkItem ({ data }) {

    return (
        <li class="park-item">
            <Link href={data.slug} class="park-item__link">{data.name}</Link>
        </li>
    )

}