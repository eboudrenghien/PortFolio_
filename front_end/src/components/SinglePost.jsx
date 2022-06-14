
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'

function SinglePost() {

    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context)

    const [post, setPost] = useState({})
    const [titre, setTitre] = useState("")
    const [contenu, setContenu] = useState("")
    const [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/actualites/" + path,)
            setPost(res.data)
            setTitre(res.data.titre)
            setContenu(res.data.contenu)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/actualites/" + path, {
                data: { pseudo: user.pseudo },
            })
            window.location.replace("/")
        } catch (err) {
            console.log(err);
        }
    }
    const handleUpdate = async () => {
        try {
            await axios.put("/posts/actualites/" + path, {
                pseudo: user.pseudo,
                titre,
                contenu
            })
            // window.location.reload()
            setUpdateMode(false)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='singlePost'>
            {post.photo && (
                <img src={PF + post.photo} alt="" className="singleImg" />
            )}
            {updateMode ? (
                <input type="text" value={titre} className="singlePostTitreInput" autoComplete='off' autoFocus onChange={(e) => setTitre(e.target.value)} />) : (
                <div className="text">
                    <h1 className="singlePostTitre">
                        {titre}
                        {post.pseudo === user.pseudo &&
                            <div className="commandes-icons">
                                <i className="fa-solid fa-pen-to-square edit icon" onClick={() => setUpdateMode(true)} ></i>
                                <i className="fa-solid fa-trash delete icon" onClick={handleDelete} ></i>
                            </div>

                        }
                    </h1>
                </div>
            )}

            <div className="singlePostInfo">
                {updateMode ? (
                    <textarea className="paragrapheText" value={contenu} autoComplete='off' rows={"5"} cols={"33"} onChange={(e) => setContenu(e.target.value)} />
                ) : (
                    <div className="paragraphe">
                        <p> {contenu}</p>
                    </div>
                )}
                {updateMode && (

                    <button className='singlePostButton' onClick={handleUpdate}>SAUVEGARDER</button>
                )}
                <span className="singlePostPseudo">Pseudo:
                    <Link to={`/?user=${post.pseudo}`} className="link">
                        <b>{post.pseudo}</b>
                    </Link>
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toLocaleDateString("fr-FR", options)}</span>

            </div>

        </div>
    )
}

export default SinglePost