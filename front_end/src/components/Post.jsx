import React from 'react'
import { Link } from "react-router-dom"
function Post({ post }) {

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

  const PF = "http://localhost:5000/images/"
  return (
    <div className='post'>
      <div className="image-background">
        {post.photo && <img className="postImg"
          src={PF + post.photo} alt="" />
        }
      </div>
      <Link to={`/actualites/${post._id}`} className="link">
        <h1 className='titre'> {post.titre}</h1>
      </Link>
      <p className='text'>
        {post.contenu}
      </p>
      <span className='date'>{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>
    </div>
  )
}

export default Post