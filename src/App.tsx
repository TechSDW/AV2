import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Aeronaves from './components/Aeronaves';
import Funcionarios from './components/Funcionarios';
import Relatorios from './components/Relatorios';
import ImportarExportar from './components/ImportarExportar';

type Page = 'home' | 'aeronaves' | 'funcionarios' | 'relatorios' | 'importar-exportar';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'aeronaves':
        return <Aeronaves onNavigate={setCurrentPage} />;
      case 'funcionarios':
        return <Funcionarios onNavigate={setCurrentPage} />;
      case 'relatorios':
        return <Relatorios onNavigate={setCurrentPage} />;
      case 'importar-exportar':
        return <ImportarExportar onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-300">
      {renderPage()}
    </div>
  );
}
