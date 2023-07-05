import { ParksDataProvider } from "@/app/store"
import Header from '@/app/components/Header'
import '@/app/styles/globals.scss'
import { NationalPark } from '@/app/styles/fonts'

function App({ Component, pageProps }) {
  return(
    <div className="site">
      <Header />
      <main className={`main ${NationalPark.className}`}>
        <ParksDataProvider>
          <Component {...pageProps} />
        </ParksDataProvider>
      </main>
    </div>
  )
}

export default App