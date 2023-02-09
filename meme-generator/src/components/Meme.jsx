import React from "react";
import memesData from '../memesData.js'

function Meme() {
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNum].url);
    }


    return (
         <main className="container">
            <div className="meme-form">
                <input 
                    type="text" 
                    placeholder="Shut up"
                />
                <input 
                    type="text" 
                    placeholder="and take my money"
                />
                <button 
                    className="btn bg-purple fs-400"
                    onClick={getMemeImage}
                >
                    Get a new image &nbsp; 🖼
                </button>
            </div>
            <img src={memeImage} className="meme-img"/> 
        </main>
    )
}

export default Meme