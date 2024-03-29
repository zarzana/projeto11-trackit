import styled from "styled-components";
import { UserImageContext } from "../contexts/Contexts";
import { useContext } from "react";

function NavBar() {
    return (
        <NavBarContainer data-test="header">
            <h1>TrackIt</h1>
            <img src={useContext(UserImageContext)} data-test="avatar"></img>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        margin-left: 18px;
        font-family: 'Playball';
        font-size: 39px;
        color: #FFFFFF;
    }
    img {
        margin-right: 18px;
        width: 51px;
        height: 51px;
        object-fit: cover;
        border-radius: 50%;
    }
`

export default NavBar;