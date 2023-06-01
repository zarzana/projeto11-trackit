import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NewHabit from "./NewHabit";

function HabitosPage() {

    return (
        <>
            <NavBarContainer>
                <h1>TrackIt</h1>
                <img src="https://static.wikia.nocookie.net/cartoons/images/e/ed/Profile_-_SpongeBob_SquarePants.png"></img>
            </NavBarContainer>
            <HabitosPageContainer>
                <div className="habitTop">
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </div>
                <NewHabit></NewHabit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </HabitosPageContainer>
            <SatusBarContainer>
                <div className="CircularProgressbarDiv">
                    <CircularProgressbar value={66} text="Hoje" background backgroundPadding={6} strokeWidth={9}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#FFFFFF",
                            pathColor: "#FFFFFF",
                            trailColor: "transparent",
                            textSize: "18px",
                        })} />
                </div>
                <div>
                    <p className="statusBarLink">Hábitos</p>
                    <p className="statusBarLink">Histórico</p>
                </div>
            </SatusBarContainer>
        </>
    )

}

const HabitosPageContainer = styled.div`
    margin: 92px 18px 0 18px;
    .habitTop {
        display: flex;
        justify-content: space-between;
        h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        }
        button {
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            font-size: 27px;
            text-align: center;
            color: #FFFFFF;
            border: none;
        }
    }
    p {
        margin-top: 28px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`
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
const SatusBarContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    div {
        margin: auto;
        margin-top: 25px;
        width: 82%;
        display: flex;
        justify-content: space-between;
    }
    .CircularProgressbarDiv {
        position: fixed;
        bottom: 10px;
        left: calc(50% - 45px);
        width: 90px;
        height: 90px;
    }
    .statusBarLink {
        font-size: 18px;
        color: #52B6FF;
    }
`

export default HabitosPage;