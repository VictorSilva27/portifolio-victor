import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import PortfolioPage from "./components/PortfolioPage";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<PortfolioPage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;