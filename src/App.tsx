
import './App.css'
import { AppConfigContext } from '@contexts/AppContext'
import type { AppConfig } from '@models/AppConfig'
import ErrorBoundary from '@components/error-boundary'
import { Home } from '@features/home'
import { useFetch } from '@API'
import { LoaderProvider } from '@contexts/LoaderContext'
function App() {
  
  const data = (useFetch("./assets/config.json").data) as AppConfig
  
  return (
    <LoaderProvider>
      <ErrorBoundary>
        <AppConfigContext AppConfigData={data}>
          <Home>

          </Home>
        </AppConfigContext>
      </ErrorBoundary>
    </LoaderProvider>
  )
}

export default App
