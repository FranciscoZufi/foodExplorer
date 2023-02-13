import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
};
label {
    font-size: 1.6rem;
  }
body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

};

body, input, button, textarea {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  outline: none;
}

a {
  text-decoration: none;
};

button, a {
  cursor: pointer;
  transition: filter 0.2s;
};

button:hover, a:hover {
  filter: brightness(0.9);
};
`
