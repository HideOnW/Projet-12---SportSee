import { Link } from "react-router-dom";
import logo from '../../asset/logo (3).png'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function Banner(link) {

    const id = useParams();
    const navigate = useNavigate();


    return (
        <>
            <img src={logo} alt='logo sportsee'></img>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
                <div className="radiobuttun">

                </div>
            </nav>
        </>
    )
}

export default Banner 
