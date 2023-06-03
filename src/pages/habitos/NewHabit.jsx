import styled from "styled-components";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Contexts";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import DayButton from "./DayButton";

function NewHabit({ setNewHabitVisibility, getHabits, selectedDays, setSelectedDay, newHabitName, setNewHabitName }) {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const daysArray = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const [loading, setLoading] = useState(false);

    const toggleDay = (day) => {
        let updatedSelectedDays = [...selectedDays];
        const i = updatedSelectedDays.indexOf(day);
        if (i !== -1) {
            updatedSelectedDays.splice(i, 1);
            setSelectedDay(updatedSelectedDays);
        } else {
            updatedSelectedDays.push(day);
            setSelectedDay(updatedSelectedDays);
        }
    };

    const closeNewHabit = () => { setNewHabitVisibility(false) };

    const confirmNewHabit = () => {
        setLoading(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const request = axios.post(URL, {
            'name': newHabitName,
            'days': selectedDays
        }, config);
        request
            .then((response) => {
                console.log(response.data);
                getHabits();
                setSelectedDay([]);
                setNewHabitName('');
                closeNewHabit();
            })
            .catch((error) => {
                console.log(error);
                alert('Dados inválidos');
                setLoading(false);
            });
    };

    return (
        <NewHabitContainer data-test="habit-create-container">
            <input type='text' placeholder='nome do hábito' disabled={loading} value={newHabitName} onChange={e => setNewHabitName(e.target.value)} data-test="habit-name-input" />
            <div className="daySelection">
                {daysArray.map((dayText, index) => (
                    selectedDays.includes(index) ?
                        <DayButton key={index} index={index} text={dayText} toggleDay={toggleDay} loading={loading} active={true} />
                        : <DayButton key={index} index={index} text={dayText} toggleDay={toggleDay} loading={loading} active={false} />
                ))}
            </div>
            <div className="newHabitButtons">
                <button className="cancelButton" onClick={closeNewHabit} disabled={loading} data-test="habit-create-cancel-btn">Cancelar</button>
                <button className="saveButton" onClick={confirmNewHabit} disabled={loading} data-test="habit-create-save-btn">
                    {loading ?
                        <ThreeDots height="12" width="85" radius="1" color="#FFFFFF"
                            ariaLabel="three-dots-loading" visible={true} />
                        : 'Salvar'}
                </button>
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
        padding-left: 11px;
    }
    input:disabled {
        background: #F2F2F2;
        color: #AFAFAF;
    }
    .daySelection {
        width: 90%;
        margin: auto;
        margin-top: 8px;
    }
    .newHabitButtons {
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
        opacity: 1;
    }
    .saveButton:disabled {
        opacity: 0.7;
    }
`

export default NewHabit;