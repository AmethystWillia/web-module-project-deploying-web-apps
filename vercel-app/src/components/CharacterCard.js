import React, { useState, useEffect } from "react";
import data from './data';
import { useParams } from 'react-router-dom';

const CharacterCard = () => {
    const { id } = useParams();
    const [chara, setChara] = useState({});
    //const navigate = useNavigate();

    useEffect(() => {
        setChara(data.filter(chara => chara.id === id)[0]);
    }, [id]);

    return (
        <div className='char-card'>
           <div className='char-intro'>
                <h1>{chara.name}</h1>
                <h2>Ultimate {chara.talent}</h2>
            </div>
            <div className='char-info'>
                <div className='char-traits'>
                    <div className='physical-traits'>
                    <ul>
                        <li><b>Height:</b> {chara.height}</li>
                        <li><b>Weight:</b> {chara.weight}</li>
                        <li><b>Gender:</b> {chara.gender}</li>
                        <li><b>Blood Type:</b> {chara.blood}</li>
                    </ul>
                    </div>
                    <div className='other-traits'>
                    <ul>
                        <li><b>Date of Birth: {chara.dob}</b></li>
                        <li><b>Likes:</b> {chara.likes}</li>
                        <li><b>Dislikes:</b> {chara.dislikes}</li>
                        <li><b>Quote:</b> "{chara.quote}"</li>
                    </ul>
                    </div>
                </div>
                <div className='char-bio'>
                    <p>{chara.bio}</p>
                </div>
                <div className='char-pic'>
                    <img src={chara.img} alt={`${chara.name}'s official art`}/>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;