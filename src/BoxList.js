import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './box.css';

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    // Update the boxes array
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, newBox]);
    };
    
    //Handles removing of boxes
    const removeBox = boxID => {
        setBoxes(boxes.filter(box => box.id !== boxID));
    };
    
    //Handles population of boxes
    const displayBox = boxes.map(box =>
    (
        <Box
            removeBox= {removeBox}        
            key = {box.id}
            id={box.id}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
        />)
    );
    

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div className ="boxesDisplay">
                {displayBox}
            </div>
        </div>
        
    )
}

export default BoxList;