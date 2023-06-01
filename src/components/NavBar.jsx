import styled from "styled-components";

function NavBar() {
    return (
        <NavBarContainer>
            <h1>TrackIt</h1>
            <img src="https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png"></img>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
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