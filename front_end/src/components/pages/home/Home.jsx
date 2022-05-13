import React from 'react'
import Header from '../../header/Header'
import Post from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'


function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className='home'>
        <Post />
        <Sidebar /> 
      </div>
    </React.Fragment>  
  );
}

export default Home