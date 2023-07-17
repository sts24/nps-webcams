import { ParksDataProvider } from "@/store"
import Header from '@/components/Header'
import '@//styles/globals.scss'
import { NationalPark } from '@/styles/fonts'

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