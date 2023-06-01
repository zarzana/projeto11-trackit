import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function StatusBar() {
    return (
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
    )
}

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

export default StatusBar;