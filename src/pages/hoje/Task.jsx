import styled from "styled-components";
import checkmark from "../../assets/checkmark.svg"

function Task({ name }) {
    return (
        <TaskContainer data-test="today-habit-container">
            <div>
                <h3 data-test="today-habit-name">{name}</h3>
                <p data-test="today-habit-sequence">Sequência atual: <span className="currentSequence">3 dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span className="personalBest">5 dias</span></p>
            </div>
            <button className="checkmarkButton" data-test="today-habit-check-btn">
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
            color: #8FC549;
        }
        .personalBest {
            color: #8FC549;
        }
    }
    .checkmarkButton {
        width: 69px;
        height: 69px;
        margin: 4% 4% 4% auto;
        background: #EBEBEB;
        border: 1px solid #E7E7E7;
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