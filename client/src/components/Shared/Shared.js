import React from 'react'
import NavBar from '../NavbarFolder/Navbar'
import { Outlet } from 'react-router-dom'

function Shared() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Shared
