import React from 'react';
import { 
  Instagram, 
  ExternalLink, 
  Clock 
} from 'lucide-react';
import { Creator } from '../types';

interface CreatorTableProps {
  creators: Creator[];
}

export const CreatorTable: React.FC<CreatorTableProps> = ({
  creators,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <th className="py-3.5 px-4 min-w-[200px]">Criador</th>
              <th className="py-3.5 px-4 min-w-[160px]">Perfil Oficial</th>
              <th className="py-3.5 px-4 min-w-[180px]">Nicho & Segmento</th>
              <th className="py-3.5 px-4 min-w-[120px] text-right">Nº seguidores</th>
              <th className="py-3.5 px-4 min-w-[320px]">Valores & Formatos de Mídia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
            {creators.map((creator) => {
              return (
                <tr
                  key={creator.id}
                  id={`table-row-${creator.id}`}
                  className="hover:bg-slate-50/70 transition-colors"
                >
                  {/* Criador */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-900">{creator.name}</div>
                    <span className="text-[11px] text-slate-500">{creator.cityRegion}</span>
                  </td>

                  {/* Perfil */}
                  <td className="py-4 px-4">
                    <a
                      href={creator.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 hover:underline"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>{creator.profile}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  </td>

                  {/* Nicho */}
                  <td className="py-4 px-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium border ${creator.colorTheme.badgeBg}`}>
                      {creator.niche}
                    </span>
                  </td>

                  {/* Nº seguidores */}
                  <td className="py-4 px-4 text-right">
                    <div className="font-extrabold text-slate-900">
                      {creator.followersText}
                    </div>
                    <span className="text-[11px] text-slate-400">seguidores</span>
                  </td>

                  {/* Valores */}
                  <td className="py-4 px-4">
                    {creator.status === 'waiting_mediakit' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                        <Clock className="w-3 h-3" />
                        Aguardando Mídia Kit
                      </span>
                    ) : (
                      <div className="space-y-1.5">
                        {creator.prices.map((p) => (
                          <div
                            key={p.id}
                            className="flex items-center justify-between gap-3 bg-slate-50 p-2 rounded-lg border border-slate-100"
                          >
                            <span className="font-medium text-slate-700 text-xs truncate max-w-[200px]" title={p.service}>
                              {p.service}
                            </span>
                            <span className="font-extrabold text-slate-900 text-xs bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200 shrink-0">
                              {p.priceFormatted}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
