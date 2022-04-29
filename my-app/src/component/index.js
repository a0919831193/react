import React, {useContext} from "react";
import logo from '../../src/logo.png'
import './index.css'
import { AppContext } from "../App";



const Home = () => {

    
    const {state, dispatch} = useContext(AppContext);

    return (
        <div className="Content">  
        <div className="logo" >
            <img src={logo} alt="" />
        </div>
        <div className="IntroText" >
            <div className="word" >
                <div className="letter" >I</div>
            </div>
            <div className="word" >
                <div className="letter" >H</div>
                <div className="letter" >E</div>
                <div className="letter" >R</div>
                <div className="letter" >E</div>
                <div className="letter" >B</div>
                <div className="letter" >Y</div>             
            </div>
            <div className="word" >
                <div className="letter" >C</div>
                <div className="letter" >E</div>
                <div className="letter" >R</div>
                <div className="letter" >T</div>
                <div className="letter" >I</div>
                <div className="letter" >F</div>
                <div className="letter" >Y</div>             
            </div>
            <div className="word" >
                <div className="letter" >T</div>
                <div className="letter" >H</div>
                <div className="letter" >A</div>
                <div className="letter" >T</div>          
            </div>
            <div className="word" >
                <div className="letter" >I</div>
            </div>
            <div className="word" >
                <div className="letter" >A</div>
                <div className="letter" >M</div>
            </div>
            <div className="word" >
                <div className="letter" >O</div>
                <div className="letter" >V</div>
                <div className="letter" >E</div>
                <div className="letter" >R</div>          
            </div>
            <div className="word" >
                <div className="letter" >T</div>
                <div className="letter" >H</div>
                <div className="letter" >E</div>
            </div>
            <div className="word" >
                <div className="letter" >L</div>
                <div className="letter" >E</div>
                <div className="letter" >G</div>
                <div className="letter" >A</div>
                <div className="letter" >L</div>
            </div>
            <div className="word" >
                <div className="letter" >A</div>
                <div className="letter" >G</div>
                <div className="letter" >E</div>
            </div>
            <div className="word" >
                <div className="letter" >F</div>
                <div className="letter" >O</div>
                <div className="letter" >R</div>
            </div>
            <div className="word" >
                <div className="letter" >T</div>
                <div className="letter" >H</div>
                <div className="letter" >E</div>
            </div>
            <div className="word" >
                <div className="letter" >C</div>
                <div className="letter" >O</div>
                <div className="letter" >N</div>
                <div className="letter" >S</div>
                <div className="letter" >U</div>
                <div className="letter" >M</div>
                <div className="letter" >P</div>
                <div className="letter" >T</div>
                <div className="letter" >I</div>
                <div className="letter" >O</div>
                <div className="letter" >N</div>
            </div>
            <div className="word" >
                <div className="letter" >O</div>
                <div className="letter" >F</div>
            </div>
            <div className="word" >
                <div className="letter" >A</div>
                <div className="letter" >L</div>
                <div className="letter" >C</div>
                <div className="letter" >O</div>
                <div className="letter" >H</div>
                <div className="letter" >O</div>
                <div className="letter" >L</div>
            </div>
            <div className="word" >
                <div className="letter" >I</div>
                <div className="letter" >N</div>
            </div>
            <div className="word" >
                <div className="letter" >M</div>
                <div className="letter" >Y</div>
            </div>
            <div className="word" >
                <div className="letter" >C</div>
                <div className="letter" >O</div>
                <div className="letter" >U</div>
                <div className="letter" >N</div>
                <div className="letter" >T</div>
                <div className="letter" >R</div>
                <div className="letter" >Y</div>
            </div>

            
        </div>
        <div className="Enter" onClick={() => {
            dispatch({type: "change", payload: 1});
        }} >
            <div className="Enter-text text-black" >
                <span>E</span>
                <span>n</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
            </div>
            <div className="Enter-text text-red" >
                <span>E</span>
                <span>n</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
            </div>


            <div>
                <span className="EnterIcon1"></span>
                <span className="EnterIcon2"></span>     
            </div>
        </div>
        <div className="footer" >
            <ul>
                <li>FR</li>
                <li>EN</li>
                <li>JP</li>
                <li>LEGAL INFORMATION</li>
            </ul>
        </div>
        
        

</div>
    )
  }
  
  export default Home;