import React, { useSate} from 'react';
import "./App.css";
import Affichage from "./component/Affichage";
import Choix from "./component/Choix";



function App (){

    const [choix, setChoix]= useState(); 
    const onChoixSelected = (choix) => { 
        setChoix(choix); }

    return(
        <div className="App">
          <Affichage text={`Vous ${choixSelect} ce documentaire`}/>
           <Choix setChoix={onChoixSelected}/>
          </div>
          
      );
}
export default App;