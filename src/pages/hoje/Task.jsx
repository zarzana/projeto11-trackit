import styled from "styled-components";
import checkmark from "../../assets/checkmark.svg"
import { useContext } from "react";
import { AuthContext } from "../../contexts/Contexts";
import axios from "axios";

function Task({ id, name, done, currentSequence, highestSequence, getTodayTasks }) {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const numberOfDaysParse = (num) => {
        if (num <= 1) { return `${num} dia` }
        else { return `${num} dias` }
    }

    const checkmarkClick = () => {
        let checkType = 'check';
        if (done) { checkType = 'uncheck' }
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${checkType}`;
        const request = axios.post(URL, {}, config);
        request
            .then((response) => {
                console.log(response.data);
                getTodayTasks();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const recordState = () => {
        if (currentSequence >= highestSequence && currentSequence > 0) { return true }
        else { return false }
    }

    return (
        <TaskContainer data-test="today-habit-container" done={done} recordState={recordState()}>
            <div>
                <h3 data-test="today-habit-name">{name}</h3>
                <p data-test="today-habit-sequence">Sequência atual: <span className="currentSequence">{numberOfDaysParse(currentSequence)}</span></p>
                <p data-test="today-habit-record">Seu recorde: <span className="personalBest">{numberOfDaysParse(highestSequence)}</span></p>
            </div>
            <button className="checkmarkButton" onClick={checkmarkClick} data-test="today-habit-check-btn">
                <img src={checkmark} />
            </button>
        </TaskContainer>
    )

}

const TaskContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    div {
        margin-top: 4%;
        margin-left: 5%;
    }
    h3 {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    p {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
        .currentSequence {
            color: ${(props) => (props.done ? '#8FC549' : '#666666')};
        }
        .personalBest {
            color: ${(props) => (props.recordState ? '#8FC549' : '#666666')};
        }
    }
    .checkmarkButton {
        width: 69px;
        height: 69px;
        margin: 4% 4% 4% auto;
        background: ${(props) => (props.done ? '#8FC549' : '#EBEBEB')};
        border: ${(props) => (props.done ? 'none' : '1px solid #E7E7E7')};
        border-radius: 5px;
        img {
            margin-top: 3px;
            margin-left: 3px;
            width: 35px;
            height: 28px;
        }
    }
`

export default Task;