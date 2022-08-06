import styled from "styled-components";

export const Table = styled.table`

 background-color: #FFF;
 padding: 20px;
 box-shadow: 0px 0px 0px 5px #ccc;
 border-radius: 10px;
 width: 100%;
 margin-top: 20px;
`

export const TableHeaderColumn = styled.th<{width?: number}>`
    padding: 10px 0px;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    
`