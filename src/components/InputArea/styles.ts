import styled from "styled-components";

export const Container = styled.div`
display: flex;
padding: 10px;
justify-content: space-around;
align-items: center;
border: 3px solid #ccc;
border-radius: 5px;
flex-wrap: wrap;
@media (max-width: 980px){
    flex-direction: column;
}


`

export const Input = styled.input`
border: 2px solid #ccc;
border-radius: 5px;
padding: 5px;
margin: 2px;
`

export const RadioGroup = styled.div`
    align-items: center;
    display: flex;
    gap: 2px;
`

export const button = styled.button`
background-color: darkblue;
padding: 5px;
border-radius: 5px;
color: white;

:hover{
    cursor: pointer;
}
`