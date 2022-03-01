import React from 'react'

const ActionCallers = () => {
  return (
    <div className="flex justify-center mt-4">
      <a
        className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="px-4 py-2 ml-4 text-white bg-indigo-500 rounded hover:bg-indigo-600"
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Tailwind CSS v3.x
      </a>
    </div>
  )
}

export default ActionCallers
