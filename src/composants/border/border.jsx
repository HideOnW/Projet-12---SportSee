import { Link } from "react-router-dom";
import navicon from '../../asset/navicon.png'
import './border.css'

function Border(){
    return (
        <>
            <div className="divBorder">
                <img src={navicon} alt="nav icon"></img>
                <p>Copyright, SportSee 2020</p>
            </div>
        </>
    )
}

export default Border   