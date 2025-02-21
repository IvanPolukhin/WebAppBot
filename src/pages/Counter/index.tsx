import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { decrement, increment, reset } from 'src/features/Сounter/counterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.counter.count)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
