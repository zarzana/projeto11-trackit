import styled from "styled-components";

function NewHabit() {
    return (
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
    )
}

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

export default NewHabit;