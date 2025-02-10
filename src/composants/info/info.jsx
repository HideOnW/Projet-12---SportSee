import { Link } from "react-router-dom";
import datas from '../../data/data'
import './info.css'
import calories from '../../asset/calories-icon.png'
import proteines from '../../asset/protein-icon.png'
import glucides from '../../asset/carbs-icon.png'
import fat from '../../asset/fat-icon.png'
import Barchart from '../charts/barchart'
import Radarchart from "../charts/radarchart";
import Linechart from "../charts/linechart";
import Piechart from "../charts/piechart"
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

// const response = await fetch("https://github.com/OpenClassrooms-Student-Center/SportSee/blob/master/app/data.js");
  
fetch("http://localhost:3000/user/12");



function Info(user){

    
    const [id, setId] = useState(12);
    console.log(id)
    const mainData = datas.USER_MAIN_DATA
    const actualUser = mainData.find((element) => element.id === id)

    return (
        <>    <div>
        <input
          type="radio"
          name="id"
          value={12}
          checked={id === 12}
          onChange={() => setId(12)}
        /> ID: 12
        
        <input
          type="radio"
          name="id"
          value={18}
          checked={id === 18}
          onChange={() => setId(18)}
        /> ID: 18
  
        <p>Current ID: {id}</p>
      </div>
            <div className="divInfo">
                <h1> Bonjour {actualUser.userInfos.firstName}</h1>
                <p> Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="allData">
                    <div className="leftData">
                        <div>
                            <h2>Activité quotidienne</h2>
                            <Barchart />
                        </div>
                        <div className="bottomData">
                            <Linechart />
                            <Radarchart />
                            <Piechart />
                        </div>

                    </div>
                    <div className="rightData">
                        <div className="keyData">
                            <img src={calories}></img>
                            <div>
                                <h3>{actualUser.keyData.calorieCount}kCal</h3>
                                <p>Calories</p>
                            </div>
                        </div>
                        <div className="keyData">
                            <img src={proteines}></img>
                            <div>
                                <h3>{actualUser.keyData.proteinCount}g</h3>
                                <p>Protéines</p>
                            </div>
                        </div>
                        <div className="keyData">
                            <img src={glucides}></img>
                            <div>
                                <h3>{actualUser.keyData.carbohydrateCount}g</h3>
                                <p>Glucides</p>
                            </div>
                        </div>
                        <div className="keyData">
                            <img src={fat}></img>
                            <div>
                                <h3>{actualUser.keyData.lipidCount}g</h3>
                                <p>Lipides</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Info