import styled from "styled-components";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";
import NewHabit from "./NewHabit";
import Habit from "./Habit";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Contexts";
import axios from "axios";

function HabitosPage() {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const getHabits = () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const request = axios.get(URL, config);
        request
        .then((response) => {
            console.log(response.data);
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
                    <button data-test="habit-create-btn">+</button>
                </div>
                <NewHabit></NewHabit>
                <Habit name={'Nome do hábito'}></Habit>
                <Habit name={'Nome do hábito 2'}></Habit>
                <Habit name={'Nome do hábito 3'}></Habit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
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