import styled from "styled-components";
import NavBar from "../../components/NavBar";
import StatusBar from "../../components/StatusBar";

function HistoricoPage() {

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