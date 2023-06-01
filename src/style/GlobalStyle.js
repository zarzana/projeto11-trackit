import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #F2F2F2;
	}
	*, p, h2 {
		font-family: 'Lexend Deca', sans-serif;
	}
	::placeholder {
        color: #DBDBDB;
    }
`

export default GlobalStyle;