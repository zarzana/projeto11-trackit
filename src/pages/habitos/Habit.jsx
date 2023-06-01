import styled from "styled-components";
import trashcan from "../../assets/trashcan.svg";

function Habit({ name }) {
    return (
        <HabitContainer>
            <img src={trashcan}></img>
            <h3>{name}</h3>
            <div className="daySelection">
                <button className="dayButton">D</button>
                <button className="dayButton">S</button>
                <button className="dayButton">T</button>
                <button className="dayButton">Q</button>
                <button className="dayButton">Q</button>
                <button className="dayButton">S</button>
                <button className="dayButton">S</button>
            </div>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    img {
        position: absolute;
        top: 11px;
        right: 10px;
        width: 13px;
        height: 15px;
    }
    h3 {
        margin-left: 5%;
        margin-top: 4%;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    .daySelection {
        width: 90%;
        margin: auto;
        margin-top: 8px;
        margin-bottom: 5%;
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
`

export default Habit;