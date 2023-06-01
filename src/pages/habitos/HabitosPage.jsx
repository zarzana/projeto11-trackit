import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
                <NewHabitContainer>
                    <input type='text' placeholder='nome do hábito' />
                    <div className="daySelection">
                        <button className="dayButton">D</button>
                        <button className="dayButton">S</button>
                        <button className="dayButton">T</button>
                        <button className="dayButton">Q</button>
                        <button className="dayButton">Q</button>
                        <button className="dayButton">S</button>
                        <button className="dayButton">S</button>
                    </div>
                    <div>
                        <button className="cancelButton">Cancelar</button>
                        <button className="saveButton">Salvar</button>
                    </div>
                </NewHabitContainer>
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
const NewHabitContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    input {
        margin: auto;
        margin-top: 5%;
        width: 90%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 20px;
        color: #DBDBDB;
        padding-left: 11px;
    }
    .daySelection {
        width: 90%;
        margin: auto;
        margin-top: 8px;
    }
    .dayButton {
        margin-right: 4px;
        box-sizing: border-box;
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
    div {
        margin: 29px 5% 5% auto;
    }
    .cancelButton, .saveButton {
        border: none;
        display: inline;
        width: 85px;
        height: 35px;
        border-radius: 5px;
        font-size: 16px;
        text-align: center;
    }
    .cancelButton {
        background: none;
        color: #52B6FF;
    }
    .saveButton {
        margin-left: 12px;
        background: #52B6FF;
        color: #FFFFFF;
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