import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-around;

margin-top: -50px;

@media (max-width: 980px) {
 
   display: flex;
   width: 100%;
   justify-content:center;
   gap: 1rem;
   flex-wrap: wrap;
   
}


`