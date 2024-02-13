
//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";



export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const[enableMultiSelection, setEnableMultiSelection] = useState(false)
    const[multipleArr, setMultipleArr]=useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId=== selected? null:getCurrentId )
    }

    function handleMultipleSelection(getCurrentId){
        let cpyMultipleArr =[...multipleArr]
        const findIdexOfCurrentId = cpyMultipleArr.indexOf(getCurrentId)

        console.log(findIdexOfCurrentId)

        if(findIdexOfCurrentId === -1) cpyMultipleArr.push(getCurrentId)
        else cpyMultipleArr.splice(findIdexOfCurrentId, 1)
        
        setMultipleArr(cpyMultipleArr)
    }

    console.log(selected, multipleArr)

    return(
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
            <div className="accordian">
                {
                    data && data.length >0 ?
                    data.map(dataItem => 
                        <div className="item">
                            <div 
                            onClick={enableMultiSelection
                                ?()=>handleMultipleSelection(dataItem.id)
                                :() =>handleSingleSelection(dataItem.id)} 
                            className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection
                                ? multipleArr.indexOf(dataItem.id) !==-1 && (
                                    <div className="content">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id &&(
                                    <div className="content">{dataItem.answer}</div>
                                )

                                // selected === dataItem.id ? 
                                // <div className="content">{dataItem.answer}</div>
                                // :null
                            }
                        </div>)
                    : <div>No data found !</div>


                }
            </div>
        </div>
    )
    
}