import React from 'react';
import { 
  Instagram, 
  ExternalLink, 
  TrendingUp, 
  Eye, 
  Award, 
  Zap, 
  Coins
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell
} from 'recharts';

interface ComparisonData {
  id: string;
  name: string;
  profile: string;
  instagramUrl: string;
  followers: number;
  followersText: string;
  reelsPrice: number;
  priceFormatted: string;
  estimatedImpressions: number;
  impressionsText: string;
  cpm: number;
  cpmFormatted: string;
  badge: string;
  isTarget?: boolean;
  color: string;
}

const COMPARISON_DATA: ComparisonData[] = [
  {
    id: 'joao-cordoba',
    name: 'João Córdoba (Nossa Sugestão)',
    profile: '@joaocordoba',
    instagramUrl: 'https://instagram.com/joaocordoba',
    followers: 329000,
    followersText: '329 mil',
    reelsPrice: 1700,
    priceFormatted: 'R$ 1.700',
    estimatedImpressions: 85000,
    impressionsText: '85k views',
    cpm: 20.0,
    cpmFormatted: 'R$ 20,00',
    badge: '★ Proposta Assaí (Melhor ROI)',
    isTarget: true,
    color: '#ea580c'
  },
  {
    id: 'camile-pasquarelli',
    name: 'Camile Pasquarelli',
    profile: '@inspireoutras',
    instagramUrl: 'https://instagram.com/inspireoutras',
    followers: 529000,
    followersText: '529 mil',
    reelsPrice: 15000,
    priceFormatted: 'R$ 15.000',
    estimatedImpressions: 140000,
    impressionsText: '140k views',
    cpm: 107.14,
    cpmFormatted: 'R$ 107,14',
    badge: 'Perfil Nacional / Alto Ticket',
    color: '#e11d48'
  },
  {
    id: 'jonas-almeida',
    name: 'Jonas Almeida',
    profile: '@jonasalmeida',
    instagramUrl: 'https://instagram.com/jonasalmeida',
    followers: 106000,
    followersText: '106 mil',
    reelsPrice: 3500,
    priceFormatted: 'R$ 3.500',
    estimatedImpressions: 32000,
    impressionsText: '32k views',
    cpm: 109.38,
    cpmFormatted: 'R$ 109,38',
    badge: 'Apresentador TV / VIP',
    color: '#2563eb'
  },
  {
    id: 'luis-guilherme-barros',
    name: 'Luis Guilherme Barros',
    profile: '@luisqbarros',
    instagramUrl: 'https://instagram.com/luisqbarros',
    followers: 148000,
    followersText: '148 mil',
    reelsPrice: 990,
    priceFormatted: 'R$ 990',
    estimatedImpressions: 38000,
    impressionsText: '38k views',
    cpm: 26.05,
    cpmFormatted: 'R$ 26,05',
    badge: 'Lifestyle Local',
    color: '#4f46e5'
  },
  {
    id: 'fica-dica-sjc',
    name: 'Fica Dica Sjc',
    profile: '@ficadicasjc',
    instagramUrl: 'https://instagram.com/ficadicasjc',
    followers: 120000,
    followersText: '120 mil',
    reelsPrice: 900,
    priceFormatted: 'R$ 900',
    estimatedImpressions: 28000,
    impressionsText: '28k views',
    cpm: 32.14,
    cpmFormatted: 'R$ 32,14',
    badge: 'Gastronomia / Visita',
    color: '#ca8a04'
  },
  {
    id: 'lugares-do-vale',
    name: 'Lugares do Vale',
    profile: '@lugaresdovale',
    instagramUrl: 'https://instagram.com/lugaresdovale',
    followers: 115000,
    followersText: '115 mil',
    reelsPrice: 880,
    priceFormatted: 'R$ 880',
    estimatedImpressions: 26000,
    impressionsText: '26k views',
    cpm: 33.85,
    cpmFormatted: 'R$ 33,85',
    badge: 'Passeios & Dicas',
    color: '#059669'
  },
  {
    id: 'sanja-dicas',
    name: 'Sanja Dicas',
    profile: '@sanjadicas',
    instagramUrl: 'https://instagram.com/sanjadicas',
    followers: 147000,
    followersText: '147 mil',
    reelsPrice: 690,
    priceFormatted: 'R$ 690',
    estimatedImpressions: 33000,
    impressionsText: '33k views',
    cpm: 20.91,
    cpmFormatted: 'R$ 20,91',
    badge: 'Gastronomia Local',
    color: '#d97706'
  },
  {
    id: 'sjcity',
    name: 'Sjcity',
    profile: '@sjc_ity',
    instagramUrl: 'https://instagram.com/sjc_ity',
    followers: 84000,
    followersText: '84 mil',
    reelsPrice: 600,
    priceFormatted: 'R$ 600',
    estimatedImpressions: 18000,
    impressionsText: '18k views',
    cpm: 33.33,
    cpmFormatted: 'R$ 33,33',
    badge: 'Guia Regional',
    color: '#0891b2'
  },
  {
    id: 'sjcampos',
    name: 'SJCampos',
    profile: '@sjcampos_',
    instagramUrl: 'https://instagram.com/sjcampos_',
    followers: 84000,
    followersText: '84 mil',
    reelsPrice: 300,
    priceFormatted: 'R$ 300',
    estimatedImpressions: 16000,
    impressionsText: '16k views',
    cpm: 18.75,
    cpmFormatted: 'R$ 18,75',
    badge: 'Guia Cidade',
    color: '#ea580c'
  }
];

export const ConciseSummary: React.FC = () => {
  // Sorted for visual bar chart by reels price
  const chartDataPrice = [...COMPARISON_DATA].map(c => ({
    name: c.profile,
    fullName: c.name,
    reelsPrice: c.reelsPrice,
    followers: c.followers / 1000,
    impressions: c.estimatedImpressions / 1000,
    cpm: Math.round(c.cpm),
    isTarget: c.isTarget,
    color: c.isTarget ? '#ea580c' : '#94a3b8'
  }));

  const chartDataEfficiency = [...COMPARISON_DATA]
    .sort((a, b) => b.estimatedImpressions - a.estimatedImpressions)
    .map(c => ({
      name: c.profile,
      impressions: c.estimatedImpressions / 1000,
      reelsPrice: c.reelsPrice,
      isTarget: c.isTarget,
      color: c.isTarget ? '#ea580c' : '#64748b'
    }));

  return (
    <div className="space-y-6">
      {/* Visual Top Highlights Cards: Main Takeaways */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Highlight 1: Nossa Sugestão */}
        <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-5 text-white shadow-md border border-orange-400 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-200" />
              Nossa Sugestão (Assaí)
            </span>
            <span className="text-xs font-bold text-amber-100">329k seg.</span>
          </div>

          <div className="mt-3">
            <a
              href="https://instagram.com/joaocordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-black text-white hover:underline flex items-center gap-1.5"
            >
              João Córdoba <span className="text-xs font-medium text-amber-200">@joaocordoba</span>
              <ExternalLink className="w-3 h-3 text-amber-200" />
            </a>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">R$ 1.700</span>
              <span className="text-xs font-semibold text-amber-100">/ Reels no pacote</span>
            </div>
            <div className="text-xs text-amber-100 mt-1 font-medium flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              Fee Mensal: <strong>R$ 6.800/mês</strong> (4 Reels/mês • 16 tot.)
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-amber-100">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" /> ~85.000 views/vídeo
            </span>
            <span className="bg-white text-orange-700 px-2 py-0.5 rounded-md font-bold text-[11px]">
              CPM R$ 20,00
            </span>
          </div>
        </div>

        {/* Highlight 2: Concorrentes Alto Porte */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Grandes Perfis (500k+)
              </span>
              <span className="text-xs font-bold text-rose-600">529k seg.</span>
            </div>

            <div className="mt-3">
              <a
                href="https://instagram.com/inspireoutras"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-slate-900 hover:text-rose-600 hover:underline flex items-center gap-1"
              >
                Camile Pasquarelli <span className="text-xs text-slate-500 font-normal">@inspireoutras</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-black text-rose-600">R$ 15.000</span>
                <span className="text-xs text-slate-500 font-medium">/ Reels</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Stories em loja: R$ 5.000 (3 telas)
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-slate-400" /> ~140.000 views
            </span>
            <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md font-bold text-[11px] border border-rose-200">
              CPM R$ 107,14
            </span>
          </div>
        </div>

        {/* Highlight 3: Perfis Locais & VIPs */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                Perfis Locais / TV (84k - 148k)
              </span>
              <span className="text-xs font-bold text-blue-600">Faixa Regional</span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between">
                <a
                  href="https://instagram.com/jonasalmeida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1"
                >
                  Jonas Almeida (106k) <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  R$ 3.500 / Reels
                </span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://instagram.com/luisqbarros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-800 hover:text-indigo-600 flex items-center gap-1"
                >
                  Luis G. Barros (148k) <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  R$ 990 / Reels
                </span>
              </div>

              <div className="flex items-center justify-between">
                <a
                  href="https://instagram.com/sanjadicas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-800 hover:text-amber-600 flex items-center gap-1"
                >
                  Sanja Dicas (147k) <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
                <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  R$ 690 / Reels
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
            <span className="text-[11px] text-slate-500">Média micro: ~18k - 38k views</span>
            <span className="text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md font-bold text-[11px]">
              CPM R$ 20 - R$ 109
            </span>
          </div>
        </div>
      </div>

      {/* Visual Charts: Value Comparison & Impressions vs Cost */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Investimento por Reels (R$) */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-orange-600" />
                Comparativo de Valores por Vídeo Reels (R$)
              </h3>
              <p className="text-xs text-slate-400">Nossa sugestão em destaque laranja vs tabela dos perfis</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartDataPrice} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                <XAxis type="number" tickFormatter={(v) => `R$${v}`} tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }} />
                <Tooltip 
                  formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor do Reels']}
                  labelFormatter={(label) => `Perfil: ${label}`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                />
                <Bar dataKey="reelsPrice" radius={[0, 6, 6, 0]}>
                  {chartDataPrice.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.isTarget ? '#ea580c' : entry.reelsPrice > 5000 ? '#e11d48' : '#94a3b8'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-orange-600 inline-block" />
              Nossa Sugestão (R$ 1.700 / 329k seg.)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-slate-400 inline-block" />
              Perfis Concorrentes
            </span>
          </div>
        </div>

        {/* Chart 2: Volume de Impressões Estimadas vs Custo (Mil Visualizações) */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-emerald-600" />
                Volume de Impressões / Alcance por Vídeo (Mil Views)
              </h3>
              <p className="text-xs text-slate-400">Estimativa média de visualizações orgânicas por publicação</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartDataEfficiency} margin={{ top: 10, right: 10, left: -10, bottom: 25 }}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 10, fill: '#475569', fontWeight: 500 }} 
                  angle={-30} 
                  textAnchor="end"
                  interval={0}
                />
                <YAxis tickFormatter={(v) => `${v}k`} tick={{ fontSize: 11, fill: '#64748b' }} />
                <Tooltip 
                  formatter={(value: number) => [`${value} mil visualizações`, 'Impressões Estimadas']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                />
                <Bar dataKey="impressions" radius={[6, 6, 0, 0]}>
                  {chartDataEfficiency.map((entry, index) => (
                    <Cell 
                      key={`cell-eff-${index}`} 
                      fill={entry.isTarget ? '#ea580c' : '#059669'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-2 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-orange-600 inline-block" />
              João Córdoba (~85k views)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-emerald-600 inline-block" />
              Outros Influenciadores
            </span>
          </div>
        </div>
      </div>

      {/* Visual Comparison Matrix with Links & Prominent Values */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50/80 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              Quadro Visual de Valores, Seguidores e Relação de Custo / Impressões
            </h3>
            <p className="text-xs text-slate-500">Clique nos links do Instagram para abrir diretamente cada perfil</p>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-2xs self-start sm:self-auto">
            9 Perfis Comparados
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100/60 border-b border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                <th className="py-3 px-4">Influenciador / Perfil</th>
                <th className="py-3 px-4 text-center">Seguidores</th>
                <th className="py-3 px-4 text-center">Impressões Estimadas</th>
                <th className="py-3 px-4 text-right">Valor em Destaque (Reels)</th>
                <th className="py-3 px-4 text-center">Custo p/ 1.000 Views (CPM)</th>
                <th className="py-3 px-4 text-right">Relação / Posicionamento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {COMPARISON_DATA.map((item) => (
                <tr 
                  key={item.id}
                  id={`summary-row-${item.id}`}
                  className={`transition-colors ${
                    item.isTarget 
                      ? 'bg-orange-50/80 font-semibold border-l-4 border-l-orange-600' 
                      : 'hover:bg-slate-50/70'
                  }`}
                >
                  {/* Nome & Perfil com Link */}
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {item.isTarget && (
                        <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0" />
                      )}
                      <div>
                        <div className={`font-bold ${item.isTarget ? 'text-orange-950 text-sm' : 'text-slate-900'}`}>
                          {item.name}
                        </div>
                        <a
                          href={item.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 hover:underline text-[11px]"
                        >
                          <Instagram className="w-3 h-3" />
                          <span>{item.profile}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      </div>
                    </div>
                  </td>

                  {/* Seguidores */}
                  <td className="py-3 px-4 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      item.isTarget 
                        ? 'bg-orange-600 text-white' 
                        : item.followers >= 500000 
                          ? 'bg-rose-100 text-rose-900' 
                          : 'bg-slate-100 text-slate-800'
                    }`}>
                      {item.followersText}
                    </span>
                  </td>

                  {/* Impressões */}
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                      <Eye className="w-3 h-3 text-slate-400" />
                      {item.impressionsText}
                    </span>
                  </td>

                  {/* VALOR EM DESTAQUE (Principal) */}
                  <td className="py-3 px-4 text-right">
                    <div className={`inline-block px-3 py-1 rounded-lg font-black text-sm ${
                      item.isTarget
                        ? 'bg-orange-600 text-white shadow-xs text-base'
                        : item.reelsPrice >= 5000
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : item.reelsPrice >= 2000
                            ? 'bg-blue-50 text-blue-800 border border-blue-200'
                            : 'bg-slate-100 text-slate-900'
                    }`}>
                      {item.priceFormatted}
                    </div>
                  </td>

                  {/* CPM */}
                  <td className="py-3 px-4 text-center">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      item.isTarget 
                        ? 'text-emerald-700 bg-emerald-100 font-extrabold' 
                        : item.cpm > 80 
                          ? 'text-rose-700 bg-rose-50' 
                          : 'text-slate-700 bg-slate-100'
                    }`}>
                      {item.cpmFormatted}
                    </span>
                  </td>

                  {/* Badge de Posicionamento */}
                  <td className="py-3 px-4 text-right">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                      item.isTarget
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : item.reelsPrice >= 5000
                          ? 'bg-rose-50 text-rose-800 border-rose-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {item.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Concise Footer Callout */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Zap className="w-3.5 h-3.5 text-orange-600" />
            <strong>Conclusão do Comparativo:</strong> João Córdoba oferece o maior volume de impressões por real investido (CPM ~R$ 20) com audiência sólida de 329 mil seguidores.
          </span>
          <span className="font-bold text-orange-700">
            Contrato 4 Meses: R$ 6.800 / mês (16 Reels)
          </span>
        </div>
      </div>
    </div>
  );
};
