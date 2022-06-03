import React from 'react'
import Chat from '../styles/assets/krafou2.jpg'
function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="background">
                <img src={Chat} alt="chat" />
            </div>
            <div className="text">
                <h1 className="singlePostTitre">
                    Lorem ipsum, dolor sit amet.
                </h1>
                <div className="paragraphe">
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam quibusdam minima mollitia fugit,
                        iure reprehenderit molestias nemo facilis harum blanditiis error minus, laborum sapiente, doloremque accusamus est voluptatibus sit?</p>
                </div>
                <div className="singlePostInfo">
                    <span className="singlePostPseudo">Pseudo: <b>Gertrude</b></span>
                    <span className="singlePostDate">date</span>
                </div><div className="commandes-icons">
                    <i className="fa-solid fa-pen-to-square edit icon"></i>
                    <i className="fa-solid fa-trash delete icon"></i>
                </div></div>


        </div>
    )
}

export default SinglePost