import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello/')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error fetching API:', err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="bg-green-500 p-4 rounded-lg mb-8">
        <div className="flex gap-4">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo w-16 h-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react w-16 h-16 animate-spin-slow" alt="React logo" />
          </a>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React + Django</h1>
      
      {message && (
        <div className="bg-blue-600 p-4 rounded-lg shadow-lg mb-6">
          <p className="text-xl font-semibold">Backend says: {message}</p>
        </div>
      )}

      <div className="card bg-gray-800 p-6 rounded-xl border border-gray-700">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
