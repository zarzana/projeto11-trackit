import ResetStyle from './style/ResetStyle';
import GlobalStyle from './style/GlobalStyle';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import CadastroPage from './pages/cadastro/CadastroPage';
import HabitosPage from './pages/habitos/HabitosPage';

function App() {

    return (
        <BrowserRouter>
            <ResetStyle />
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/habitos" element={<HabitosPage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default App;
