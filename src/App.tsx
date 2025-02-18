function App() {
  return (
    <div className="App">
      <h1>Welcome to Web App!</h1>
      <button onClick={() => window.open('https://example.com', '_blank')}>
        Open WebApp
      </button>
    </div>
  )
}

export default App
