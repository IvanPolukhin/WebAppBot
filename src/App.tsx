import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from 'src/features/AppRouter'
import NavigationButtons from './components/NavigationButtons'

import LocalesProvider from 'src/contexts/LocalesContext'
import ThemeProvider from 'src/contexts/ThemeContext'

function App() {
  return (
    <Router>
      <LocalesProvider>
        <ThemeProvider>
          <div className="relative min-h-screen pb-16">
            <AppRouter />
            <NavigationButtons />
          </div>
        </ThemeProvider>
      </LocalesProvider>
    </Router>
  )
}

export default App
