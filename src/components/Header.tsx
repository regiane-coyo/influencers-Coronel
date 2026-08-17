import React from 'react';
import { Sparkles, Printer, Share2, Instagram, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onPrint: () => void;
  totalCreators: number;
  availablePricesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onPrint,
  totalCreators,
  availablePricesCount,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                <Sparkles className="w-3.5 h-3.5" />
                Mapeamento Executivo
              </span>
              <span className="text-xs text-slate-500 font-medium">
                São José dos Campos & Região
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Precificação baseada em comparativo com influencers da região
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              Catálogo consolidado de influenciadores, métricas de audiência, perfis oficiais e tabela comparativa de formatos de mídia e investimento.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-center no-print">
            <button
              id="btn-share-link"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Link Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-slate-500" />
                  <span>Compartilhar</span>
                </>
              )}
            </button>

            <button
              id="btn-print-page"
              onClick={onPrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
