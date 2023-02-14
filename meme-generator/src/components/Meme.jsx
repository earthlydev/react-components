import React from "react";
import memesData from '../memesData.js'

function Meme() {

    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/1otk96.jpg"
        }
    )

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNum].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
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
            <img src={meme.randomImage} className="meme-img"/> 
        </main>
    )
}

export default Meme