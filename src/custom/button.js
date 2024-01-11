import styled from "styled-components";

export const Button = styled.button`
background-color: ${(props)=> (props.red && "red") || (props.transparent && "transparent") };
color: ${(props)=> (props.red && "white") || (props.transparent && "#f1f1f1") };
border: ${(props)=> (props.red && "1px solid red") || (props.transparent && "1px solid #f1f1f1") };
border-radius: 30px;


`