import styled, { css } from "styled-components";

export const Page = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`;

export const InputField = styled.input`
width: 100%;
outline: none;
border: none;
background: inherit;
color: #ffffffea;
font-size: 18px;
padding-left: 0;
padding-top: 5px;
margin-bottom: 4px;
-webkit-box-shadow: inset 0 0 0 50px  #212121;  
-webkit-text-fill-color: #ffffffea;
${(props) => props.radio && css `
   -webkit-box-shadow: none;
`}
`;

export const SelectField = styled.select`
width: 100%;
outline: none;
border: none;
background: inherit;
color: #ffffffea;
font-size: 18px;
padding-left: 0;
padding-top: 5px;
margin-bottom: 4px;
-webkit-box-shadow: inset 0 0 0 50px  #212121;  
-webkit-text-fill-color: #ffffffea;
cursor: pointer;
`;

export const InputFieldDetails = styled.div`
display: inline-block;
width: 100%;
background: inherit;
color: #ffffffea;
font-size: 18px;
padding-left: 0;
padding-top: 5px;
margin-bottom: 4px;
-webkit-box-shadow: inset 0 0 0 50px  #212121;  
-webkit-text-fill-color: #ffffffea;
`

export const InputLabel = styled.label`
font-size: 12px; 
color: #b8b6b6;
`
export const InputError = styled.div`
font-size: 12px; 
color: red; 
`;

export const InputContainer = styled.div`
    background-color: #212121;
    border: 1px solid #b8b6b6;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    ${(props) => props.error && css`
        border: 1px solid red;
    `}
    ${(props) => props.radio && css `
   border: none;
   background-color: inherit;
   width: 100%;
`}
`;

export const Flex = styled.div`
display: flex;
justify-content: ${(props) => props.justifyContent};
align-items: ${(props) => props.alignItems};
`

export const Button = styled.button`
padding: 8px 40px;
font-size: 16px;
margin: 0 5px;
font-family: inherit;
outline: none;
border: none;
background-color:rgb(93, 36, 99);
cursor: pointer;
color: #e6e0e0;
border-radius: 5px;
:hover {
    background-color:rgb(98, 58, 102);
}
:active{
    background-color:rgb(64, 28, 66);
}
:disabled{
    background-color:rgb(62, 48, 63);
    color: #e6e0e0;
    cursor: auto;
    
}
${(props) => props.secondary && css `
   background-color: unset;
   border: 1px solid #817e7e;
   :active{
    background-color: unset;
}
`}
`
 