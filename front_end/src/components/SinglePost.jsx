import React, { useEffect, useState } from 'react'
import Chat from '../styles/assets/krafou2.jpg'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function SinglePost() {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    const location = useLocation()
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState({})


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/actualites/" + path)
            setPost(res.data)
        }
        getPost()
    }, [path])

    return (
        <div className='singlePost'>
           /
            <div className="image-background">
                {post.photo && (
                    <img src={Chat} alt="chat" />
                )}
            </div>
            <div className="text">
                <h1 className="singlePostTitre">
                    {post.titre}
                </h1>
                <div className="paragraphe">
                    <p> {post.contenu}</p>
                </div>
                <div className="singlePostInfo">
                    <span className="singlePostPseudo">Pseudo: <b>{post.pseudo}</b></span>
                    <span className="singlePostDate">{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>
                </div><div className="commandes-icons">
                    <i className="fa-solid fa-pen-to-square edit icon"></i>
                    <i className="fa-solid fa-trash delete icon"></i>
                </div></div>


        </div>
    )
}

export default SinglePost