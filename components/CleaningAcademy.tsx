import React, { useState } from 'react';
import { getCleaningAdvice } from '../services/geminiService';
import { LoadingState } from '../types';
import { Sparkles, GraduationCap, ArrowRight, Loader2, Info } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const CleaningAcademy: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const predefinedQueries = [
    "Como tirar mancha de vinho do tapete?",
    "Melhor forma de limpar janelas sem deixar marcas",
    "Como limpar rejunte de banheiro encardido",
    "Dicas para organizar o guarda-roupa"
  ];

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    
    setStatus(LoadingState.LOADING);
    setAdvice(null);
    setQuery(searchQuery);

    try {
      const result = await getCleaningAdvice(searchQuery);
      setAdvice(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      setAdvice("Desculpe, tivemos um problema técnico. Por favor, tente novamente ou entre em contato conosco.");
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="academy" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-full mb-4">
            <GraduationCap className="h-6 w-6 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Darei Academy</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Aprenda a limpar como um profissional</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Uma pequena distração educativa. Pergunte ao nosso Assistente Virtual Inteligente como resolver problemas do dia a dia enquanto não chegamos até você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl shadow-xl">
            <label htmlFor="question" className="block text-sm font-medium text-slate-300 mb-2">
              Qual é o seu desafio de limpeza hoje?
            </label>
            <div className="relative">
              <input
                type="text"
                id="question"
                className="w-full bg-slate-900 border border-slate-600 rounded-lg py-4 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Ex: Como limpar mancha de café no sofá..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
              />
              <button
                onClick={() => handleSearch(query)}
                disabled={status === LoadingState.LOADING || !query}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
              >
                {status === LoadingState.LOADING ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <ArrowRight className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="mt-8">
              <p className="text-sm text-slate-400 mb-4">Ou tente uma destas sugestões rápidas:</p>
              <div className="flex flex-wrap gap-2">
                {predefinedQueries.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSearch(q)}
                    className="text-xs sm:text-sm bg-slate-700 hover:bg-slate-600 text-slate-200 py-2 px-3 rounded-full transition-colors border border-slate-600"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className={`bg-white text-slate-900 p-8 rounded-2xl shadow-2xl min-h-[300px] flex flex-col transition-all duration-500 ${status === LoadingState.SUCCESS ? 'scale-100 opacity-100' : 'scale-95 opacity-90'}`}>
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-blue-600" />
                <h3 className="font-bold text-xl">Dica do Especialista</h3>
              </div>
              {status === LoadingState.SUCCESS && (
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">IA Gerada</span>
              )}
            </div>

            <div className="flex-grow">
              {status === LoadingState.IDLE && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center py-10">
                  <Sparkles className="h-16 w-16 mb-4 text-slate-200" />
                  <p>Faça uma pergunta ao lado para receber instruções detalhadas.</p>
                </div>
              )}

              {status === LoadingState.LOADING && (
                <div className="h-full flex flex-col items-center justify-center text-slate-500 py-10">
                  <Loader2 className="h-12 w-12 animate-spin text-blue-600 mb-4" />
                  <p className="animate-pulse">Consultando nossos manuais...</p>
                </div>
              )}

              {status === LoadingState.SUCCESS && advice && (
                <div className="prose prose-blue prose-sm sm:prose-base max-w-none">
                  {/* Assuming ReactMarkdown handles standard Markdown. 
                      Since we don't have the library installed in this theoretical env, 
                      we render simple text with line breaks, but normally ReactMarkdown is best.
                      For this task, I will simulate clean render. */}
                  <div className="whitespace-pre-line leading-relaxed">
                    {advice}
                  </div>
                </div>
              )}

              {status === LoadingState.ERROR && (
                <div className="h-full flex flex-col items-center justify-center text-red-500 text-center py-10">
                  <Info className="h-12 w-12 mb-4" />
                  <p>{advice}</p>
                </div>
              )}
            </div>
            
            {status === LoadingState.SUCCESS && (
              <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500 italic">
                  Ainda parece difícil? Nós fazemos para você!
                </p>
                <a href="#contact" className="inline-block mt-2 text-blue-600 font-semibold hover:text-blue-800">
                  Agendar um profissional &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningAcademy;