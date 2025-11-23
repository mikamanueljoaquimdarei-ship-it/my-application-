import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CleaningAcademy from './components/CleaningAcademy';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CleaningAcademy />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 py-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tight">
              DAREI <span className="text-blue-500">SERVIÇOS</span>
            </span>
            <p className="mt-2 text-sm">Excelência em cada detalhe.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
          <div className="mt-8 md:mt-0 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Darei Prestação de Serviços.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;