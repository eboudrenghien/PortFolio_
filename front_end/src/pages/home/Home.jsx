import React from 'react';
import Navbar from '../../components/Menu/Navbar';
import Header from '../../components/header/Header';
import Post from '../../components/posts/Posts';
import Footer from '../../components/footer/Footer';


function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Header />
      <div className='home'>
        <Post />
      </div>
      < Footer />
    </React.Fragment>  
  );
}

export default Home