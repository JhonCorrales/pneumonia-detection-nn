import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useState, useMemo } from 'react';
import { createAppTheme } from './theme';
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={mode === 'dark'} onToggleTheme={toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
