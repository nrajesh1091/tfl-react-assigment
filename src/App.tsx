
import './App.css'
import { AppConfigContext } from '@contexts/AppContext'
import ErrorBoundary from '@components/error-boundary'
import { Home } from '@features/home'
import { LoaderProvider } from '@contexts/LoaderContext'
import { useEffect, useState } from 'react'
 function App() {
  const [config,setConfig] = useState();
  useEffect(()=>{
    (async()=>{
    const res = await fetch("./assets/config.json");
    const data = await res.json()
    setConfig(data)
    })()
  },[])


  return (
    <LoaderProvider>
      <ErrorBoundary>
        <AppConfigContext AppConfigData={config}>
          <Home>

          </Home>
        </AppConfigContext>
      </ErrorBoundary>
    </LoaderProvider>
  )
}

export default App
