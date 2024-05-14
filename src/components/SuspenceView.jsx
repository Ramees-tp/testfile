import React from 'react'
import './Suspence.css'

const SuspenceView = () => {
  return (
    <div>
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-200 opacity-75 flex flex-col items-center justify-center">
    <div className="loader ease-linear rounded-full  border-t-4 border-r-4 border-blue-700 h-12 w-12 mb-4"></div>
    <h2 className="text-center text-gray-900 text-xl font-semibold">Loading...</h2>
    <p className="w-1/3 text-center text-gray-700 animate-bounce mt-3">This may take a few seconds, please don't close this page.</p>
</div>
    </div>
  )
}

export default SuspenceView
