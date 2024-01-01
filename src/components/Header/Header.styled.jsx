import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const  HeaderContainer = styled.div `
display: flex;
align-items: center;
max-width: 1280px;
padding-left: 20px;
padding-right: 20px; 
padding-top: 20px;
padding-bottom: 20px;
background-color: #f5f5f5;
`

export const  Nav = styled.div `
display: flex;
gap: 70px;
`
export const   NavLinkStyled = styled(NavLink) `
color: #111;
`
export const Image = styled.img `
margin : 0 auto;
`
