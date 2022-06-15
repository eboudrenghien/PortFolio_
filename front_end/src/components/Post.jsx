import React from 'react'
import { Link } from "react-router-dom"
function Post({ post }) {

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

  const PF = "http://localhost:5000/images/"
  return (
    <div className='post'>
      <div className="card">
        <div className="content">
          {post.photo && <img className="postImg"
            src={PF + post.photo} alt="" />
          }

          <Link to={`/actualites/${post._id}`} className="link">
            <h2 className='titre'> {post.titre}</h2>
          </Link>
          <p className='text'>
            {post.contenu}
          </p>
          <Link to={`/actualites/${post._id}`} className="link">
            <p className='read'>...</p>
          </Link> <br />
          <span className='date'>{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>
        </div>
      </div>
    </div>
  )
}

export default Post