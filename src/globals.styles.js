import { createGlobalStyle } from "styled-components";
import bg from "./img/tactile_noise.png";

export const GlobalStyle = createGlobalStyle`
* {
  
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

//Barra de scroll
::-webkit-scrollbar{
width: 6px;
height: 10px;
}
::-webkit-scrollbar-thumb{
background: #333333;
border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover{
background:${(props) => props.theme.color};
}
::-webkit-scrollbar-track{
background: #111111;
border-radius: 0px;
box-shadow: inset -0.4px 0px 0px 0px #F0F0F0;
}

html,
body {
  font-family: "IBM Plex Sans", sans-serif;
  background-color: #242423;
  background: url(${bg});
  background-attachment: fixed;
  color: #bfbfbf;
  cursor: default;
  overflow-x: hidden;

}

a {
  color: inherit;
  text-decoration: none;
}

`;
