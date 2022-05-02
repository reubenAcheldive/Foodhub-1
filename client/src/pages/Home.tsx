import React from 'react'
import Sidebar from '../components/navBar/Sidebar'
import Topbar from '../components/navBar/Topbar'

function Home() {
  return (
    <div><Topbar />
       <Feed/>
    <Sidebar /></div>

  )
}
export default Home