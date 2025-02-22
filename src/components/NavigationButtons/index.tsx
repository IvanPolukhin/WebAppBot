import { useNavigate } from 'react-router-dom'

import { RoutePaths } from 'src/types'

const NavigationButtons = () => {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 w-full flex justify-around p-4 bg-gray-900 text-white">
      <button
        onClick={() => navigate(RoutePaths.counter)}
        className="px-4 py-2 bg-blue-500 rounded"
      >
        Counter
      </button>
      <button
        onClick={() => navigate(RoutePaths.register)}
        className="px-4 py-2 bg-green-500 rounded"
      >
        Register
      </button>
      <button
        onClick={() => navigate(RoutePaths.setting)}
        className="px-4 py-2 bg-yellow-500 rounded"
      >
        Settings
      </button>
    </div>
  )
}

export default NavigationButtons
