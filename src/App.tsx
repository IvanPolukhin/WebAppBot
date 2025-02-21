import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from 'src/features/AppRouter'
import NavigationButtons from './components/NavigationButtons'

function App() {
  return (
    <Router>
      <div className="relative min-h-screen pb-16">
        <AppRouter />
        <NavigationButtons />
      </div>
    </Router>
  )
}

export default App
