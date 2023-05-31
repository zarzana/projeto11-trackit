import ResetStyle from './style/ResetStyle';
import GlobalStyle from './style/GlobalStyle';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import CadastroPage from './pages/cadastro/CadastroPage';

function App() {

    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App;
