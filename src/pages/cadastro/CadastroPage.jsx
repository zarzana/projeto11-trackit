import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { ThreeDots } from 'react-loader-spinner';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    const [formDisabled, setFormDisabled] = useState(false);

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        setFormDisabled(true);
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const request = axios.post(URL, {
            'email': email,
            'name': name,
            'image': picture,
            'password': password
        });
        request
            .then((response) => {
                // console.log(response.data);
                navigate('/');
            })
            .catch((error) => {
                const errorStatus = error.response.status;
                if (errorStatus === 422) { alert('Dados inválidos.') }
                else if (errorStatus === 409) { alert('Email já cadastrado.') }
                setFormDisabled(false);
            });
    }

    return (
        <CadastroPageContainer formDisabled={formDisabled}>
            <img src={logo} />
            <h1>TrackIt</h1>
            <form onSubmit={signUp}>
                <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} disabled={formDisabled} />
                <input type='password' placeholder='senha' value={password} onChange={e => setPassword(e.target.value)} disabled={formDisabled} />
                <input type='text' placeholder='nome' value={name} onChange={e => setName(e.target.value)} disabled={formDisabled} />
                <input type='text' placeholder='foto' value={picture} onChange={e => setPicture(e.target.value)} disabled={formDisabled} />
                <button type="submit" disabled={formDisabled}>
                    <span className="buttonText">Cadastrar</span>
                    <ThreeDots
                        height="15"
                        width="300"
                        radius="1"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        visible={formDisabled}
                    />
                </button>
            </form>
            <Link to={'/'}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </CadastroPageContainer>
    )

}

const CadastroPageContainer = styled.div`
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
        box-sizing: border-box;
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
        .buttonText {
            display: ${props => props.formDisabled ? 'none' : 'block'};
        }
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