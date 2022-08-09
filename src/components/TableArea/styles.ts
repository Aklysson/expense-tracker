import styled from "styled-components";

export const Table = styled.table`

 background-color: #FFF;
 padding: 20px;
 box-shadow: 0px 0px 0px 5px #ccc;
 border-radius: 10px;
 width: 100%;
 margin-top: 20px;

    #Income {
        background: #78f000;
        border: 3px solid #00f000;
        border-radius: 5px;
        padding: 5px;
    }
    #Outcome {
        background: #e87d7d;
        border-radius: 5px;
        padding: 5px;
        border: 3px solid #dd3c3c;

    }

 
    
`

export const TableHeaderColumn = styled.th<{width?: number}>`
    padding: 10px 0px;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    
`