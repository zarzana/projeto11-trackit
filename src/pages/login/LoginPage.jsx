import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

function LoginPage({ setAuthToken, setUserImage }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        setLoading(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const request = axios.post(URL, {
            'email': email,
            'password': password
        });
        request
            .then((response) => {
                setAuthToken(response.data.token);
                setUserImage(response.data.image);
                navigate('/hoje');
            })
            .catch((error) => {
                console.log(error);
                alert('Login ou senha inválidos.');
                setLoading(false);
            });
    }

    return (
        <LoginPageContainer>
            <img src={logo} />
            <h1>TrackIt</h1>
            <form onSubmit={signIn}>
                <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} disabled={loading} data-test="email-input" />
                <input type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value)} disabled={loading} data-test="password-input" />
                <button type="submit" disabled={loading} data-test="login-btn">
                    {loading ?
                        <ThreeDots height="15" width="300" radius="1" color="#FFFFFF" ariaLabel="three-dots-loading" visible={true} />
                        : <span className="buttonText">Entrar</span>}
                </button>
            </form>
            <Link to={'/cadastro'} data-test="signup-link">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </LoginPageContainer>
    )

}

const LoginPageContainer = styled.div`
    height: 100vh;
    background: #FFFFFF;
    img {
        display: block;
        margin: auto;
        padding-top: 68px;
    }
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
    input:disabled {
        background: #F2F2F2;
        color: #AFAFAF;
    }
    button {
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        text-align: center;
        color: #FFFFFF;
        opacity: 1;
    }
    button:disabled {
        opacity: 0.7;
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