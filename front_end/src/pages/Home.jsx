/* eslint-disable */
// eslint-disable-next-line 

import React from 'react';
import Navbar from '../components/Menu/Navbar';
import Header from '../components/header/Header';
import Post from '../components/posts/Posts';
import Footer from '../components/footer/Footer';


function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <Post />
      < Footer />
    </div>
  );
}

export default Home