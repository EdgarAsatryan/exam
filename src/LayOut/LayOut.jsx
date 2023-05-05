import React from 'react'
import NavBar from '../Components/ui/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/ui/Footer'

export default function LayOut() {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
