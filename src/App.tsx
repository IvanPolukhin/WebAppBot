import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from 'src/features/AppRouter'
import NavigationButtons from './components/NavigationButtons'

import LocalesProvider from 'src/contexts/LocalesContext'

function App() {
  return (
    <Router>
      <LocalesProvider>
        <div className="relative min-h-screen pb-16">
          <AppRouter />
          <NavigationButtons />
        </div>
      </LocalesProvider>
    </Router>
  )
}

export default App
