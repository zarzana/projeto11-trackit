import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	*, p {
		font-family: 'Lexend Deca', sans-serif;
	}
	::placeholder {
        color: #DBDBDB;
    }
`

export default GlobalStyle;