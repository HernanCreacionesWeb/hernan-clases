import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './componentes/Navbar';
import { Presentacion } from './componentes/Presentacion';
import { Footer } from './componentes/Footer';
import Español from './componentes/Español'; // Renombrado sin tilde
import { Exactas } from './componentes/Exactas';
import { Sociales } from './componentes/Sociales';
import { Contacto } from './componentes/Contacto';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/inicio" element={<Presentacion />} />
        <Route path="/español" element={<Español />} />
        <Route path="/exactas" element={<Exactas />} />
        <Route path="/sociales" element={<Sociales />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
