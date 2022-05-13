import React from 'react'
import Header from '../../header/Header'
import Post from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'


function Home() {
  return (
      <div className='home'>
        <Header/>
        <Post/>
        <Sidebar/> 
      </div>
  )
}

export default Home