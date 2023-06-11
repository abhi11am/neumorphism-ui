import React from 'react'
import AppHeader from './AppHeader'

const MainLayout = ({ children }) => {
  return (
    <div className="w-4/5 m-auto">
      <AppHeader />
      <div className="p-4 h-[calc(100vh-56px)]">
        {children}
      </div>
    </div>
  )
}

export default MainLayout
