
import './App.css'
import { AppConfigContext } from '@contexts/app-context'
import ErrorBoundary from '@components/error-boundary/error-boundary'
import { Home } from '@features/home/home'

import { useEffect, useState } from 'react'
import { Header } from '@components/header/header'
import { Footer } from '@components/footer/footer'
import { LoaderProvider } from '@components/loader/loader'
function App() {
  const [config, setConfig] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("./assets/config.json");
        const data = await res.json()
        setConfig(data)
      }
      catch (e) {
        console.log(e)
      }
    })()
  }, [])


  return (
    <LoaderProvider>
      <ErrorBoundary>
        <AppConfigContext AppConfigData={config}>
          <Header></Header>
          <h1 className='text-xl p-4 m-4'>Transport for London Tube Status</h1>
          <Home>

          </Home>
        </AppConfigContext>
        <Footer></Footer>
      </ErrorBoundary>
    </LoaderProvider>
  )
}

export default App
