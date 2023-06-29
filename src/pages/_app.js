import { ParksDataProvider } from "@/app/store"

function App({ Component, pageProps }) {
  return(
    <ParksDataProvider>
      <Component {...pageProps} />
    </ParksDataProvider>
  )
}

export default App