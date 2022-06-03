import React from 'react'
import { useState, useEffect } from 'react';
import Posts from '../components/Posts'
import Write from '../components/Write'
import axios from "axios"

function Actualites() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/actualites");
      setPosts(res.data);
    };
    fetchPosts();
  }, [])
  return (
    <div className='actualites'>
    
    <div className="container-posts" >
      <h1>Toutes les actualités</h1>
     <Write/>
      <Posts posts={posts}/>
          
    </div>

      </div>
  )
}

export default Actualites