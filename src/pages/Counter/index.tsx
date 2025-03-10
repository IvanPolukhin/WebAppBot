import { useCounterStore } from 'src/features/Сounter/CounterWithZustand/useCounterStore'

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
      <div className="mt-4 flex gap-4">
        <button onClick={increment} className="px-4 py-2 bg-green-500 rounded">
          +
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 rounded">
          -
        </button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 rounded">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
