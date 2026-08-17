import React from 'react';
import { Users, Layers, DollarSign, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { Creator } from '../types';

interface StatsOverviewProps {
  creators: Creator[];
  onSelectNiche: (niche: string) => void;
  selectedNiche: string;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({
  creators,
  onSelectNiche,
  selectedNiche,
}) => {
  const gastroCount = creators.filter(c => c.nicheGroup === 'Gastronomia, Passeios & Viagens').length;
  const lifestyleCount = creators.filter(c => c.nicheGroup === 'Lifestyle').length;
  const totalPricesAvailable = creators.filter(c => c.status === 'available').length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Card 1: Total Creators */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Criadores Mapeados
          </span>
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {creators.length} Perfis
          </div>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>São José dos Campos & Região</span>
          </p>
        </div>
      </div>

      {/* Card 2: Status / Mídia Kit Confirmado */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Mídia Kits & Valores
          </span>
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
            100% Prontos
          </div>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>{totalPricesAvailable} perfis com tabelas ativas</span>
          </p>
        </div>
      </div>

      {/* Card 3: Gastronomia & Viagens */}
      <div 
        id="stat-gastro-card"
        onClick={() => onSelectNiche(selectedNiche === 'Gastronomia, Passeios & Viagens' ? 'all' : 'Gastronomia, Passeios & Viagens')}
        className={`rounded-xl p-4 sm:p-5 border transition-all cursor-pointer shadow-xs relative ${
          selectedNiche === 'Gastronomia, Passeios & Viagens'
            ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-400/40'
            : 'bg-white border-slate-200 hover:border-amber-300'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
            Gastronomia & Dicas
          </span>
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {gastroCount} Criadores
          </div>
          <p className="text-xs text-amber-800 font-medium mt-1">
            Experiências, passeios e gastronomia
          </p>
        </div>
      </div>

      {/* Card 4: Lifestyle */}
      <div 
        id="stat-lifestyle-card"
        onClick={() => onSelectNiche(selectedNiche === 'Lifestyle' ? 'all' : 'Lifestyle')}
        className={`rounded-xl p-4 sm:p-5 border transition-all cursor-pointer shadow-xs relative ${
          selectedNiche === 'Lifestyle'
            ? 'bg-purple-50/80 border-purple-300 ring-2 ring-purple-400/40'
            : 'bg-white border-slate-200 hover:border-purple-300'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider">
            Lifestyle & Cotidiano
          </span>
          <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
            <DollarSign className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lifestyleCount} Criadores
          </div>
          <p className="text-xs text-purple-800 font-medium mt-1">
            Rotina, moda, família e entretenimento
          </p>
        </div>
      </div>
    </div>
  );
};
