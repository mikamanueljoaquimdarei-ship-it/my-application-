import React from 'react';
import { Home, Briefcase, Truck, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Limpeza Residencial',
    description: 'Limpeza profunda e manutenção para casas e apartamentos. Deixe seu lar impecável.',
    icon: Home,
  },
  {
    id: '2',
    title: 'Limpeza Comercial',
    description: 'Escritórios, lojas e ambientes corporativos. Um ambiente limpo aumenta a produtividade.',
    icon: Briefcase,
  },
  {
    id: '3',
    title: 'Pós-Obra',
    description: 'Remoção de resíduos pesados, pó fino e tinta. Deixamos tudo pronto para a mudança.',
    icon: Truck,
  },
  {
    id: '4',
    title: 'Higienização de Estofados',
    description: 'Limpeza profunda de sofás, tapetes e cortinas eliminando ácaros e bactérias.',
    icon: ShieldCheck,
  },
  {
    id: '5',
    title: 'Tratamento de Pisos',
    description: 'Polimento, revitalização e tratamento de pisos de madeira, pedra ou cerâmica.',
    icon: Sparkles,
  },
  {
    id: '6',
    title: 'Diaristas Express',
    description: 'Precisa de ajuda rápida? Nossas profissionais estão prontas para atender urgências.',
    icon: Clock,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Nossos Serviços</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Soluções completas para cada necessidade
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Oferecemos uma gama variada de serviços especializados com a garantia de qualidade Darei.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative group bg-slate-50 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">
                <a href="#contact" className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {service.title}
                </a>
              </h3>
              <p className="mt-2 text-base text-slate-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;