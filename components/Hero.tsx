import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Disponível para agendamento imediato
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Limpeza que traz <br/>
            <span className="text-blue-600">Tranquilidade</span> para sua Vida
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            Na Darei Prestação de Serviços, transformamos ambientes caóticos em espaços de paz e produtividade. Profissionalismo, discrição e eficiência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-all shadow-lg hover:shadow-xl">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#academy" className="inline-flex justify-center items-center px-8 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all">
              Aprender Dicas
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" /> Profissionais Verificados
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" /> Produtos Ecológicos
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Image/Decoration */}
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/2 z-0 opacity-20 lg:opacity-100 pointer-events-none">
        <img 
          src="https://picsum.photos/800/800?grayscale" 
          alt="Clean interior" 
          className="object-cover w-full h-full lg:rounded-bl-[100px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent lg:via-slate-50/20"></div>
      </div>
    </div>
  );
};

export default Hero;