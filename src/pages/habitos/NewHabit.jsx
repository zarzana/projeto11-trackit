import styled from "styled-components";

function NewHabit() {
    return (
        <NewHabitContainer data-test="habit-create-container">
            <input type='text' placeholder='nome do hábito' data-test="habit-name-input" />
            <div className="daySelection">
                <button className="dayButton" data-test="habit-day">D</button>
                <button className="dayButton" data-test="habit-day">S</button>
                <button className="dayButton" data-test="habit-day">T</button>
                <button className="dayButton" data-test="habit-day">Q</button>
                <button className="dayButton" data-test="habit-day">Q</button>
                <button className="dayButton" data-test="habit-day">S</button>
                <button className="dayButton" data-test="habit-day">S</button>
            </div>
            <div>
                <button className="cancelButton" data-test="habit-create-cancel-btn">Cancelar</button>
                <button className="saveButton" data-test="habit-create-save-btn">Salvar</button>
            </div>
        </NewHabitContainer>
    )
}

const NewHabitContainer = styled.div`
    display: flex;
    flex-direction: column;
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