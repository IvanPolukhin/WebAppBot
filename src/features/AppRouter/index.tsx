import { Route, Routes } from 'react-router-dom'

import { RoutesPath } from 'src/types'

import Settings from 'src/pages/Settings'
import Registration from 'src/pages/Registration'
import Counter from 'src/pages/Counter'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RoutesPath.COUNTER} element={<Counter />} />
      <Route path={RoutesPath.REGISTER} element={<Registration />} />
      <Route path={RoutesPath.SETTINGS} element={<Settings />} />
    </Routes>
  )
}

export default AppRouter
