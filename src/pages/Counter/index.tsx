import NavigationButtons from 'src/components/NavigationButtons'

const Counter = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Counter Page</h1>
      <NavigationButtons />
    </div>
  )
}

export default Counter
