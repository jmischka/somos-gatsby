import React from 'react';
import styled from 'styled-components';

const CursorStyles = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1px solid black;
    z-index: 50;
    transition-duration: .5s;
    transition-timing-function: ease-out;
    transform-origin: center;
`

function CursorCircle(props) {
    let divStyle = {
        left: props.position.x,
        top: props.position.y,
    };    
    return(
        <CursorStyles style={divStyle}>
            
        </CursorStyles>
    )
}

export default CursorCircle;