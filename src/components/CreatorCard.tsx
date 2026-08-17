import React from 'react';
import { 
  Instagram, 
  ExternalLink, 
  Tag, 
  MapPin,
  Clock
} from 'lucide-react';
import { Creator } from '../types';

interface CreatorCardProps {
  creator: Creator;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({
  creator,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div 
      id={`creator-card-${creator.id}`}
      className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden page-break-inside-avoid"
    >
      {/* Top Header Section */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${creator.colorTheme.avatarGradient} flex items-center justify-center text-white font-bold text-lg shadow-xs shrink-0`}>
              {getInitials(creator.name)}
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {creator.name}
              </h3>
              <a
                href={creator.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 hover:underline mt-0.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{creator.profile}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Follower Metric Pill */}
          <div className="text-right shrink-0">
            <span className="block text-base font-extrabold text-slate-900 tracking-tight">
              {creator.followersText}
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              seguidores
            </span>
          </div>
        </div>

        {/* Badges: Niche & City */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${creator.colorTheme.badgeBg}`}>
            <Tag className="w-3 h-3 opacity-70" />
            {creator.niche}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600">
            <MapPin className="w-2.5 h-2.5 text-slate-400" />
            {creator.cityRegion}
          </span>
        </div>
      </div>

      {/* Pricing / Media Formats Area */}
      <div className="bg-slate-50/70 p-4 border-t border-slate-100 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            <span>Tabela de Valores & Formatos</span>
            {creator.status === 'available' && (
              <span className="text-[11px] font-normal text-slate-500 lowercase">
                {creator.prices.length} {creator.prices.length === 1 ? 'formato' : 'formatos'}
              </span>
            )}
          </div>

          {creator.status === 'waiting_mediakit' ? (
            <div className="bg-amber-50/70 border border-dashed border-amber-200 rounded-lg p-3 text-center">
              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 mb-1.5">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs font-semibold text-amber-900">
                Aguardando Mídia Kit
              </p>
              <p className="text-[11px] text-amber-700 mt-0.5">
                Valores e pacotes em processo de confirmação direta com o criador.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {creator.prices.map((price) => (
                <div
                  key={price.id}
                  className="bg-white rounded-lg p-2.5 border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-800 leading-snug">
                      {price.service}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                      {price.priceFormatted}
                    </span>
                  </div>
                  {price.description && (
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      {price.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
