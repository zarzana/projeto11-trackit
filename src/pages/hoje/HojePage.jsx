import styled from "styled-components";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";
import Task from "./Task";
import { AuthContext } from "../../contexts/Contexts";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import axios from "axios";
import { dayPercentageContext } from "../../contexts/Contexts";

function HojePage() {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const { dayPercentage, setDayPercentage } = useContext(dayPercentageContext);

    const [todayData, setTodayData] = useState([]);

    const getTodayTasks = () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const request = axios.get(URL, config);
        request
            .then((response) => {
                console.log(response.data);
                setTodayData(response.data);
                let totalDone = 0;
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].done) { totalDone += 1 }
                }
                setDayPercentage(100 * totalDone / response.data.length);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(getTodayTasks, []);

    return (
        <>
            <NavBar></NavBar>
            <HojePageContainer>
                <div className="hojeTop">
                    <h2 data-test="today">{dayjs().locale('pt-br').format('dddd, DD/MM')}</h2>
                    <p className="hojeStatus" data-test="today-counter">Nenhum hábito concluído ainda</p>
                </div>
                {todayData.map(task => (
                    <Task key={task.id} id={task.id} name={task.name} done={task.done}
                        currentSequence={task.currentSequence} highestSequence={task.highestSequence}
                        getTodayTasks={getTodayTasks} />
                ))}
            </HojePageContainer>
            <StatusBar></StatusBar>
        </>
    )

}

const HojePageContainer = styled.div`
    margin: 92px 18px 120px 18px;
    .hojeTop {
        margin-bottom: 20px;
        h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        text-transform: capitalize;
        }
        .hojeStatus {
            font-size: 18px;
            line-height: 22px;
            color: #BABABA;
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
`

export default HojePage;