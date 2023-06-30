import Arrow from '@/app/svg/arrow.svg'

export default function ParkCamera({ data }){

  return (
    <section className="park-camera">
      <header className="park-camera__heading">{data.title}</header>
      <p>{data.description}</p>
      <a href={data.url} target="_blank" class="park-camera__link">View Camera <Arrow className="park-camera__link-icon" /></a>
    </section>
  )
}