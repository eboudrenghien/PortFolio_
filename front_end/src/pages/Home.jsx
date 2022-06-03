/* eslint-disable */
// eslint-disable-next-line 
import React, { useEffect, useState }from 'react'
import Header from '../components/header/Header';
import Posts from '../components/Posts';
import axios from "axios"

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/actualites");
      setPosts(res.data);
    };
    fetchPosts();
  }, [])
  return (
    <div className='home'>
      <Header/>
      <Posts posts={posts}/>
    </div>
  );
}

export default Home