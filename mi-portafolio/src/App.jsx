import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { LanguageProvider } from "./lib/i18n"
import Header from "./components/Header"
import Footer from "./components/footer"
import HomePage from "./pages/home"

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <Router>
          <div className="flex min-h-screen flex-col">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App