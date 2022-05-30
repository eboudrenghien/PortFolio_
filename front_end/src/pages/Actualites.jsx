import React from 'react'
import Posts from '../components/Posts'
import Write from '../components/Write'

function Actualites() {
  return (
    <div className='actualites'>
    
    <div className="container-posts">
      <h1>Toutes les actualités</h1>
      <Write/>
       <Posts/>
          
    </div>

      </div>
  )
}

export default Actualites