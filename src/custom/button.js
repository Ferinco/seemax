import styled from "styled-components";

export const Button = styled.button`
background-color: ${(props)=> (props.red && "red") || (props.transparent && "transparent") };
color: ${(props)=> (props.red && "white") || (props.transparent && "grey") };
border: ${(props)=> (props.red && "") || (props.transparent && "1px solid grey") };
border-radius: 30px;
font-size: 15px;
&:hover{
    transition: 0.3s;
    color: ${(props)=> (props.red && "white") || (props.transparent && "white") };
border: ${(props)=> (props.red && "1px solid rgb(153 27 27)") || (props.transparent && "1px solid white") }; 
background-color: ${(props)=> (props.red && "rgb(153 27 27)") || (props.transparent && "transparent") };

}


`