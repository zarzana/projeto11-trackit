import styled from "styled-components";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/Contexts";
import axios from "axios";

function HistoricoPage() {

    const config = { headers: { Authorization: `Bearer ${useContext(AuthContext)}` } }

    const getHistory = () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';
        const request = axios.get(URL, config);
        request
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(getHistory, []);

    return (
        <>
            <NavBar></NavBar>
            <HistoricoPageContainer>
            <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoricoPageContainer>
            <StatusBar></StatusBar>
        </>
    )

}

const HistoricoPageContainer = styled.div`
    margin: 92px 18px 120px 18px;
    h2 {
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    p {
        margin-top: 17px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

export default HistoricoPage;