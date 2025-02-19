import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useState, useMemo } from 'react';
import { createAppTheme } from './theme';
import Home from "./pages/Home";
import DiagnosisPage from "./pages/DiagnosisPage";
import ResultsPage from "./pages/ResultsPage";
import InfoPage from "./pages/InfoPage";
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar darkMode={mode === 'dark'} onToggleTheme={() => setMode(mode === 'light' ? 'dark' : 'light')} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
