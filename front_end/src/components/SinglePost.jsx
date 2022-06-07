import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function SinglePost() {

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/"

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
            <div className="image-background">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="singleImg" />
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
                    <span className="singlePostPseudo">Pseudo:
                        <Link to={`/?user=${post.pseudo}`} className="link">
                            <b>{post.pseudo}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>
                </div><div className="commandes-icons">
                    <i className="fa-solid fa-pen-to-square edit icon"  ></i>
                    <i className="fa-solid fa-trash delete icon" ></i>
                </div></div>


        </div>
    )
}

export default SinglePost