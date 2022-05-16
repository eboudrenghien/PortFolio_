import React from 'react'
import Header from '../../components/header/Header'
import Post from '../../components/posts/Posts'


function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className='home'>
        <Post />
      </div>
    </React.Fragment>  
  );
}

export default Home