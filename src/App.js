import React from 'react';
import ProjectForm from './components/ProjectForm';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background:'rgba(200, 200, 200, 0.5)', // Cambia el color de fondo de todos los TextField
          borderRadius: '5px',
          '& fieldset': {
            borderColor: '#fff', // Cambia el color del borde a verde
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
        },
    },
}}});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <ProjectForm />
    </div>
    </ThemeProvider>
  );
}

export default App;
