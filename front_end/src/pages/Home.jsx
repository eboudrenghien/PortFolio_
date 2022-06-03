/* eslint-disable */
// eslint-disable-next-line 
import React, { useEffect, useState }from 'react'
import Header from '../components/header/Header';
import Posts from '../components/Posts';
import axios from "axios"
import { useLocation } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/actualites" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search])
  return (
    <div className='home'>
      <Header/>
      <Posts posts={posts}/>
    </div>
  );
}

export default Home