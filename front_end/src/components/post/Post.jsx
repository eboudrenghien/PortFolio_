import React from 'react'
import { Link } from "react-router-dom"
import { Chat } from '../../styles/assets/krafou2.jpg'
function Post({ post }) {

  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  return (
    <div className='post'>
      <div className="image-background">
        {post.photo && (
          <img src={Chat} alt="chat" />
        )}</div>
      <Link to={`/actualites/${post._id}`} className="link">
        <h1 className='titre'> {post.titre}</h1>
      </Link>
      <p className='text'>
        {post.contenu}
      </p>
      <span className='date'>{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>
      <div className="commandes">
        <i className="fa-solid fa-pen-to-square edit"></i>
        <i className="fa-solid fa-trash delete"></i>

      </div>
    </div>
  )
}

export default Post