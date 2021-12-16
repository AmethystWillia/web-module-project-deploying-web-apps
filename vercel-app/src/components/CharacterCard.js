import React from "react";

const CharacterCard = () => {
    return (
        <div className='char-card'>
            <header className='char-select'>
                <nav>
                    <p>Thing go here</p>
                </nav>
                <h1>Character Name</h1>
                <h2>Ultimate Talent</h2>
            </header>
            <div className='char-info'>
                <div className='char-traits'>
                    <div className='physical-traits'>
                    <ul>
                        <li>Height:</li>
                        <li>Weight:</li>
                        <li>Gender:</li>
                        <li>Blood Type:</li>
                    </ul>
                    </div>
                    <div className='other-traits'>
                    <ul>
                        <li>Date of Birth:</li>
                        <li>Likes:</li>
                        <li>Dislikes:</li>
                        <li>Quote:</li>
                    </ul>
                    </div>
                </div>
                <div className='char-bio'>
                    <div className='backstory'>
                        Blah blah blah
                    </div>
                    <div className='triva'>
                        <ul>
                            <li>Thing!</li>
                            <li>Thing!</li>
                            <li>Thing!</li>
                        </ul>
                    </div>
                </div>
                <div className='char-pic'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg' alt='this is a test image'/>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;