import ResetStyle from './style/ResetStyle';
import GlobalStyle from './style/GlobalStyle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import CadastroPage from './pages/cadastro/CadastroPage';
import HabitosPage from './pages/habitos/HabitosPage';
import HojePage from './pages/hoje/HojePage';
import HistoricoPage from './pages/historico/HistoricoPage';
import { AuthContext, UserImageContext, dayPercentageContext } from './contexts/Contexts';
import { useState } from 'react';

function App() {

    const [authToken, setAuthToken] = useState(undefined);
    const [userImage, setUserImage] = useState('https://http.cat/404');
    const [dayPercentage, setDayPercentage] = useState(0);

    return (
        <AuthContext.Provider value={authToken}>
            <UserImageContext.Provider value={userImage}>
                <dayPercentageContext.Provider value={{ dayPercentage, setDayPercentage }}>
                    <BrowserRouter>
                        <ResetStyle />
                        <GlobalStyle />
                        <Routes>
                            <Route path="/" element={<LoginPage setAuthToken={setAuthToken} setUserImage={setUserImage} />} />
                            <Route path="/cadastro" element={<CadastroPage />} />
                            <Route path="/habitos" element={<HabitosPage />} />
                            <Route path="/hoje" element={<HojePage />} />
                            <Route path="/historico" element={<HistoricoPage />} />
                        </Routes>
                    </BrowserRouter>
                </dayPercentageContext.Provider>
            </UserImageContext.Provider>
        </AuthContext.Provider>
    )

}

export default App;
