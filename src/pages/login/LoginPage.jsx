import styled from "styled-components";
import { Link } from "react-router-dom";

function LoginPage() {

    const signIn = () => { }

    return (
        <LoginPageContainer>
            <h1>TrackIt</h1>
            <form onSubmit={signIn}>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='senha' />
                <button type="submit">Entrar</button>
            </form>
            <Link to={'/cadastro'}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </LoginPageContainer>
    )

}

const LoginPageContainer = styled.div`
    height: 100vh;
    background: #FFFFFF;
    h1 {
        margin-bottom: 32px;
        font-family: 'Playball';
        font-size: 69px;
        text-align: center;
        color: #126BA5;
    }
    input, button {
        margin: auto;
        margin-bottom: 6px;
        display: block;
        width: 300px;
        height: 45px;
    }
    input {
        box-sizing: border-box;
        padding-left: 10px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 19px;
        color: #666666;
    }
    button {
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        text-align: center;
        color: #FFFFFF;
    }
    p {
        margin-top: 20px;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`

export default LoginPage;