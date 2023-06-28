import WebCamList from '../app/components/webcamlist'

import '../app/page.module.css'

export async function getStaticProps() {
  const res = await fetch('https://developer.nps.gov/api/v1/webcams?api_key=BxxA9qGfk0o1ts6bdhcqbuUHef6CAfflNrNPU3TD')
  const data = await res.json()
  return { props: { data } }
}
   
export default function Home({ data }) {
  return (
    <main>
      <WebCamList parksData={data.data} />
    </main>
  )
}