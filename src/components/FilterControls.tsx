import React from 'react';
import { Search, LayoutGrid, Table, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

interface FilterControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedNiche: string;
  onNicheChange: (niche: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
  totalFiltered: number;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  onSearchChange,
  selectedNiche,
  onNicheChange,
  selectedStatus,
  onStatusChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  totalFiltered,
}) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs mb-6 space-y-4 no-print">
      {/* Top Bar: Search + View Mode Switcher */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="search-creators-input"
            type="text"
            placeholder="Buscar por nome, @perfil ou nicho..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9.5 pr-9 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg self-start md:self-auto border border-slate-200">
          <button
            id="tab-view-grid"
            onClick={() => onViewModeChange('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Cards de Apresentação</span>
          </button>

          <button
            id="tab-view-table"
            onClick={() => onViewModeChange('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              viewMode === 'table'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Tabela Comparativa</span>
          </button>
        </div>
      </div>

      {/* Filter Row: Niches, Status & Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3" />
            Nicho:
          </span>

          <button
            id="filter-niche-all"
            onClick={() => onNicheChange('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedNiche === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos
          </button>

          <button
            id="filter-niche-gastro"
            onClick={() => onNicheChange('Gastronomia, Passeios & Viagens')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedNiche === 'Gastronomia, Passeios & Viagens'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
            }`}
          >
            Gastronomia, Passeios & Viagens (5)
          </button>

          <button
            id="filter-niche-lifestyle"
            onClick={() => onNicheChange('Lifestyle')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              selectedNiche === 'Lifestyle'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100'
            }`}
          >
            Lifestyle (3)
          </button>
        </div>

        {/* Sort dropdown & count */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1.5">
            <ArrowUpDown className="w-3 h-3 text-slate-400" />
            <select
              id="sort-creators-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-md px-2 py-1 text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-slate-900"
            >
              <option value="followers-desc">Maior nº de seguidores</option>
              <option value="followers-asc">Menor nº de seguidores</option>
              <option value="name-asc">Nome (A-Z)</option>
              <option value="niche">Nicho / Segmento</option>
            </select>
          </div>

          <span className="text-xs text-slate-400">
            <strong>{totalFiltered}</strong> {totalFiltered === 1 ? 'perfil' : 'perfis'}
          </span>
        </div>
      </div>
    </div>
  );
};
