import styled from "styled-components";
import trashcan from "../../assets/trashcan.svg";
import axios from "axios";
import { AuthContext } from "../../contexts/Contexts";
import { useContext } from "react";

function Habit({ id, name, days, getHabits }) {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const daysArray = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const deleteHabit = () => {
        if (confirm(`Tem certeza que deseja apagar o hábito ${name}?`)) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
            const request = axios.delete(URL, config);
            request
                .then((response) => {
                    console.log(response.data);
                    getHabits();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };

    return (
        <HabitContainer data-test="habit-container">
            <img src={trashcan} onClick={deleteHabit} data-test="habit-delete-btn"></img>
            <h3 data-test="habit-name">{name}</h3>
            <div className="daySelection">
                {daysArray.map((dayText, index) => (
                    days.includes(index) ?
                        <CheckedButton key={index} className="dayButton" data-test="habit-day">{dayText}</CheckedButton>
                        : <UncheckedButton key={index} className="dayButton" data-test="habit-day">{dayText}</UncheckedButton>
                ))}
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
`
const UncheckedButton = styled.button`
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
`
const CheckedButton = styled.button`
    margin-right: 4px;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background: #CFCFCF;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
`

export default Habit;