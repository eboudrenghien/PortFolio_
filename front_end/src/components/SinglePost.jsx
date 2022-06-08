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
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/actualites/" + path)
            setPost(res.data)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/actualites/" + path)
            window.location.replace("/")
        } catch (err) {

        }
    }
    return (
        <div className='singlePost'>
            {post.photo && (
                <img src={PF + post.photo} alt="" className="singleImg" />
            )}
            {updateMode ?
                <input type="text" value={post.titre} /> : (
                    <div className="text">
                        <h1 className="singlePostTitre">
                            {post.titre}

                        </h1>
                    </div>
                )}

            <div className="singlePostInfo">
                <div className="paragraphe">
                    <p> {post.contenu}</p>
                </div>
                <span className="singlePostPseudo">Pseudo:
                    <Link to={`/?user=${post.pseudo}`} className="link">
                        <b>{post.pseudo}</b>
                    </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>
            </div>

            <div className="commandes-icons">
                <i className="fa-solid fa-pen-to-square edit icon" onClick={() => setUpdateMode(true)} ></i>
                <i className="fa-solid fa-trash delete icon" onClick={handleDelete} ></i>
            </div>
        </div>
    )
}

export default SinglePost