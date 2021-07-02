import React from 'react';

function Box({ id, height = 5, width = 5, backgroundColor = 'red', removeBox }) {
    const handleRemoveBox = () => removeBox(id);

    return (
        <div style={{display:'inline-flex'}}>
            <div className ='boxStyle'
                style={{
                    height: `${height}rem`,
                    width: `${width}rem`,
                    backgroundColor
                }} >
                <button onClick ={handleRemoveBox} style={{ position: 'absolute', display:'block' }}>x</button>
            </div>
        </div>
    )
}


export default Box;