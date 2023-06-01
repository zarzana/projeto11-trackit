import styled from "styled-components";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";
import Task from "./Tank";

function HojePage() {

    return (
        <>
            <NavBar></NavBar>
            <HojePageContainer>
                <div className="hojeTop">
                    <h2>Segunda, 17/05</h2>
                    <p className="hojeStatus">Nenhum hábito concluído ainda</p>
                </div>
                <Task name={'Nome da tarefa'}></Task>
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