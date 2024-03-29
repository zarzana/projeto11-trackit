import styled from "styled-components";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";
import NewHabit from "./NewHabit";
import Habit from "./Habit";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Contexts";
import axios from "axios";

function HabitosPage() {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const [habitsData, setHabitsData] = useState([]);
    const [newHabitVisibility, setNewHabitVisibility] = useState(false);
    const [selectedDays, setSelectedDay] = useState([]);
    const [newHabitName, setNewHabitName] = useState('');

    const getHabits = () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const request = axios.get(URL, config);
        request
            .then((response) => {
                // console.log(response.data);
                setHabitsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(getHabits, []);

    return (
        <>
            <NavBar></NavBar>
            <HabitosPageContainer>
                <div className="habitTop">
                    <h2>Meus hábitos</h2>
                    <button onClick={() => { setNewHabitVisibility(true) }} data-test="habit-create-btn">+</button>
                </div>
                {newHabitVisibility ?
                    <NewHabit setNewHabitVisibility={setNewHabitVisibility} getHabits={getHabits}
                        selectedDays={selectedDays} setSelectedDay={setSelectedDay}
                        newHabitName={newHabitName} setNewHabitName={setNewHabitName} ></NewHabit>
                    : <></>}
                {habitsData.length ?
                    habitsData.map(habit => (<Habit key={habit.id} id={habit.id} name={habit.name} days={habit.days} getHabits={getHabits}></Habit>))
                    : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </HabitosPageContainer>
            <StatusBar></StatusBar>
        </>
    )

}

const HabitosPageContainer = styled.div`
    margin: 92px 18px 120px 18px;
    .habitTop {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
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

export default HabitosPage;