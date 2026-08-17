import React, { useState, useMemo } from 'react';
import { CREATORS_DATA } from './data/creators';
import { Header } from './components/Header';
import { StatsOverview } from './components/StatsOverview';
import { ProposalAssai } from './components/ProposalAssai';
import { FilterControls } from './components/FilterControls';
import { CreatorCard } from './components/CreatorCard';
import { CreatorTable } from './components/CreatorTable';
import { Info } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('followers-desc');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const handlePrint = () => {
    window.print();
  };

  // Filtered and sorted creators
  const filteredCreators = useMemo(() => {
    let list = [...CREATORS_DATA];

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(term) ||
          c.profile.toLowerCase().includes(term) ||
          c.niche.toLowerCase().includes(term) ||
          c.cityRegion.toLowerCase().includes(term)
      );
    }

    // Niche filter
    if (selectedNiche !== 'all') {
      list = list.filter((c) => c.nicheGroup === selectedNiche);
    }

    // Status filter
    if (selectedStatus === 'available') {
      list = list.filter((c) => c.status === 'available');
    } else if (selectedStatus === 'waiting_mediakit') {
      list = list.filter((c) => c.status === 'waiting_mediakit');
    }

    // Sorting
    list.sort((a, b) => {
      if (sortBy === 'followers-desc') {
        return b.followersCount - a.followersCount;
      }
      if (sortBy === 'followers-asc') {
        return a.followersCount - b.followersCount;
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name, 'pt-BR');
      }
      if (sortBy === 'niche') {
        return a.niche.localeCompare(b.niche, 'pt-BR');
      }
      return 0;
    });

    return list;
  }, [searchTerm, selectedNiche, selectedStatus, sortBy]);

  const availablePricesCount = CREATORS_DATA.filter((c) => c.status === 'available').length;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Executive Header */}
      <Header
        onPrint={handlePrint}
        totalCreators={CREATORS_DATA.length}
        availablePricesCount={availablePricesCount}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* KPI Dashboard */}
        <StatsOverview
          creators={CREATORS_DATA}
          onSelectNiche={(niche) => setSelectedNiche(niche)}
          selectedNiche={selectedNiche}
        />

        {/* Commercial Proposal for Assaí Atacadista with João Córdoba */}
        <ProposalAssai />

        {/* Filters and View Controls */}
        <FilterControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedNiche={selectedNiche}
          onNicheChange={setSelectedNiche}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          totalFiltered={filteredCreators.length}
        />

        {/* View Mode: Grid (Executive Cards) */}
        {viewMode === 'grid' && (
          <div>
            {filteredCreators.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200 shadow-xs">
                <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h3 className="text-base font-bold text-slate-800">
                  Nenhum criador encontrado
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tente alterar seus termos de busca ou filtros selecionados.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCreators.map((creator) => (
                  <CreatorCard
                    key={creator.id}
                    creator={creator}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* View Mode: Table (Spreadsheet Matrix) */}
        {viewMode === 'table' && (
          <CreatorTable
            creators={filteredCreators}
          />
        )}

        {/* Information note footer */}
        <div className="mt-10 p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-500 flex items-start gap-3 shadow-2xs">
          <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-semibold text-slate-700">
              Observações sobre a Tabela de Valores e Mídia Kits:
            </p>
            <p className="mt-0.5 leading-relaxed">
              Os dados e valores foram consolidados com base nas tabelas de mídia oficiais dos criadores de conteúdo do Vale do Paraíba e região. Os valores podem sofrer alterações conforme sazonalidade, exclusividade de segmento e escopo personalizado de produção.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Catálogo e Mapeamento de Criadores de Conteúdo.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido para planejamento e apresentação comercial</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
