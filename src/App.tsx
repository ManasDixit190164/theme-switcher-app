import { Routes, Route, Link } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/theme.css";
import Dropdown from "./pages/drop";
import Switch from "./pages/Switch";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-colors duration-300 ease-in-out">
        <div className="container mx-auto px-4 py-12">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Theme Switcher</h1>
            <p className="text-lg mb-6">
              A modern, accessible theming system with smooth transitions
            </p>
            <nav className="flex justify-center gap-4 mb-4">
              <Link
                to="/"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                Home
              </Link>
              <Link
                to="/dropdown"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                Dropdown
              </Link>
            </nav>
          </header>

          <main className="flex flex-col items-center justify-center">
            <Routes>
              <Route path="/" element={<Switch />} />
              <Route path="/dropdown" element={<Dropdown />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
