import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import ViewPort from './ViewPort'

const AppBody = () => {
  return (
    <div >
      <Nav />
      <div className="d-flex">
        <Sidebar />
        <ViewPort />
      </div>
    </div>
  );
}

export default AppBody