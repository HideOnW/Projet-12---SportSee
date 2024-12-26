import { Link } from "react-router-dom";
import logo from '../../asset/logo (3).png'

function Banner() {
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
            </nav>
        </>
    )
}

export default Banner 
