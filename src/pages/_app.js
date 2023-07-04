import { ParksDataProvider } from "@/app/store"

import '@/app/styles/globals.scss'
import { NationalPark } from '@/app/styles/fonts'

function App({ Component, pageProps }) {
  return(
    <main className={NationalPark.className}>
      <ParksDataProvider>
        <Component {...pageProps} />
      </ParksDataProvider>
    </main>
  )
}

export default App