import React from 'react'
import { Github } from 'react-bootstrap-icons'
 
const AppHeader = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-sky-600">Neumorphism UI</div>
        <div className="flex items-center space-x-4">
          <Github />
          <div className="">Buy me a coffee</div>
        </div>
      </div>
    </div>
  )
}

export default AppHeader
