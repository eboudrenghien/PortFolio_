/* eslint-disable */
// eslint-disable-next-line 

import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Navbar from '../components/Menu/Navbar';
import Posts from '../components/posts/Posts';



function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default Home