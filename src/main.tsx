import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import Routes from './routes/'
import { CustomThemeProvider } from './hooks/getTheme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <GlobalStyles/>
        <Routes />
    </CustomThemeProvider>
  </React.StrictMode>
)
