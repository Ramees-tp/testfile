import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Index from '../pages/LandingPage'
function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Index/>}></Route>
      </Routes>
    </>
  )
}

export default CommonRouter
