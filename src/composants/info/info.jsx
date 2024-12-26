import { Link } from "react-router-dom";
import datas from '../../data/data'
import './info.css'
import calories from '../../asset/calories-icon.png'
import proteines from '../../asset/protein-icon.png'
import glucides from '../../asset/carbs-icon.png'
import fat from '../../asset/fat-icon.png'
import Barchart from '../charts/barchart'
import Radarchart from "../charts/radarchart";


function Info(user){

    const mainData = datas.USER_MAIN_DATA
    const actualUser = mainData.find((element) => element.id === 12)
    console.log(mainData)

    return (
        <>
            <div className="divInfo">
                <h1> Bonjour {actualUser.userInfos.firstName}</h1>
                <p> Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

                <div className="allData">
                    <div className="leftData">
                        <div>
                            <h2>Diagramme du haut</h2>
                            <Barchart />
                        </div>
                        <div>
                            <h2>Diagramme à 3</h2>
                            <Radarchart />
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