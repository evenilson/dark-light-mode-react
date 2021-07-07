
import GlobalStyle from './styles/global';

import light from './styles/themes/ligth';
import dark from './styles/themes/dark';


import { Header } from "./Components/Header";
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

function App() {

  const [theme,setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
    </ThemeProvider>
  );
}

export default App;
