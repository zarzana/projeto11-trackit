import styled from "styled-components";
import NewHabit from "./NewHabit";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";

function HabitosPage() {

    return (
        <>
            <NavBar></NavBar>
            <HabitosPageContainer>
                <div className="habitTop">
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </div>
                <NewHabit></NewHabit>
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