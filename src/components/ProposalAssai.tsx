import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  DollarSign, 
  FileText,
  Sparkles
} from 'lucide-react';

interface Scenario {
  id: 'essential' | 'recommended' | 'complete';
  name: string;
  badge: string;
  badgeColor: string;
  monthlyFee: number;
  totalContract: number;
  unitCost: number;
  description: string;
  deliverables: string[];
  rights: string;
  popular?: boolean;
}

export const ProposalAssai: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'essential' | 'recommended' | 'complete'>('recommended');

  const scenarios: Scenario[] = [
    {
      id: 'essential',
      name: 'Pacote Volume Promocional',
      badge: 'Entrada Competitiva',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      monthlyFee: 5800,
      totalContract: 23200,
      unitCost: 1450,
      description: 'Ideal para fechamento ágil focado em volume contínuo de conteúdo e alta presença na rotina do público.',
      deliverables: [
        '4 Reels por mês no feed em modo Collab (16 Reels totais)',
        'Roteiro, captação e gravação no ambiente da loja Assaí Atacadista',
        'Marcação do perfil oficial @assaiatacadistaoficial e link na bio'
      ],
      rights: 'Uso orgânico nos canais do criador e compartilhamento/repost nas redes sociais do Assaí.',
    },
    {
      id: 'recommended',
      name: 'Pacote Recomendado (Equilíbrio de Mercado)',
      badge: 'Melhor Custo-Benefício',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      monthlyFee: 6800,
      totalContract: 27200,
      unitCost: 1700,
      popular: true,
      description: 'Valor calibrado no ponto de equilíbrio do mercado para 329 mil seguidores com desconto de ~40% sobre a tabela avulsa.',
      deliverables: [
        '4 Reels por mês no feed em Collab (16 Reels totais no período)',
        'Gravação presencial no Assaí com demonstração de produtos e ofertas da semana',
        'Menção e repostagem de suporte nos Stories nos dias de publicação dos vídeos',
        'Alinhamento prévio e aprovação de roteiros com a equipe de marketing do Assaí'
      ],
      rights: 'Uso orgânico irrestrito + direito de repostagem em todas as redes do Assaí Atacadista.',
    },
    {
      id: 'complete',
      name: 'Pacote Completo (Reels + Stories de Cobertura)',
      badge: 'Maior Alcance Orgânico',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-300',
      monthlyFee: 7800,
      totalContract: 31200,
      unitCost: 1950,
      description: 'Entrega expandida combinando os 4 Reels mensais com cobertura completa em Stories de compras e ofertas.',
      deliverables: [
        '4 Reels por mês no feed em Collab (16 Reels totais)',
        'Combo de 3 Stories de cobertura a cada visita na loja (12 Stories/mês)',
        'Roteirização focada nos setores de maior margem e fluxo da loja',
        'Apresentação dinâmica das vantagens do Clube Assaí / App'
      ],
      rights: 'Direito de veiculação e compartilhamento orgânico em todos os canais digitais do Assaí.',
    }
  ];

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const currentScenario = scenarios.find(s => s.id === selectedScenario) || scenarios[1];

  return (
    <section className="bg-white rounded-2xl border-2 border-amber-400 shadow-md mb-8 overflow-hidden relative">
      {/* Header Banner with Assaí & João Córdoba Branding */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-6 sm:p-7">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-orange-800 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Estudo de Precificação & Proposta Comercial
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/20 text-amber-100 border border-white/20">
                <Building2 className="w-3.5 h-3.5" />
                Cliente: Assaí Atacadista
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Proposta: João Córdoba • 329 Mil Seguidores
            </h2>
            <p className="text-amber-100 text-sm sm:text-base max-w-3xl mt-1.5 font-medium">
              Contrato quadrimestral (<span className="text-white font-bold">SET • OUT • NOV • DEZ</span>) com entrega de <span className="text-white font-bold">4 posts em formato REELS por mês</span> (Total de 16 Reels).
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 self-start lg:self-auto min-w-[240px]">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200 block">
              Valor Sugerido para Fechamento
            </span>
            <div className="text-3xl font-black text-white mt-0.5">
              {formatCurrency(currentScenario.monthlyFee)}
              <span className="text-sm font-semibold text-amber-200"> / mês</span>
            </div>
            <span className="text-xs font-medium text-amber-100 block mt-1">
              Total 4 Meses: <strong className="text-white">{formatCurrency(currentScenario.totalContract)}</strong> (16 Reels)
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-7 space-y-6">
        
        {/* Market Benchmark Methodology */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              Racional de Mercado & Comparativo com a Base Mapeada
            </h3>
            <span className="text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              Benchmark de 84k a 529k
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Com base na média praticada pelos influenciadores da região (como <span className="font-semibold text-slate-800">Jonas Almeida</span> com 106k cobrando R$ 3.500/Reels, <span className="font-semibold text-slate-800">Luis Guilherme Barros</span> com 148k cobrando R$ 990/Reels e <span className="font-semibold text-slate-800">Camile Pasquarelli</span> com 529k cobrando R$ 15.000/Reels), um perfil de <strong>329 mil seguidores</strong> possui valor de tabela unitária estimado em <strong>R$ 2.800 a R$ 3.200 por Reels avulso</strong>.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-400 font-semibold uppercase block">Valor Avulso Estimado</span>
              <span className="text-base font-bold text-slate-700">R$ 2.800 / Reels</span>
              <span className="text-[10px] text-slate-400 block">Sem recorrência (R$ 44,8k tot.)</span>
            </div>

            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] text-slate-400 font-semibold uppercase block">Desconto de Contrato (4m)</span>
              <span className="text-base font-bold text-emerald-600">-39% a -48%</span>
              <span className="text-[10px] text-slate-400 block">Garantia de 16 publicações</span>
            </div>

            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
              <span className="text-[11px] text-emerald-800 font-semibold uppercase block">Valor Unitário no Pacote</span>
              <span className="text-base font-extrabold text-emerald-700">{formatCurrency(currentScenario.unitCost)} / Reels</span>
              <span className="text-[10px] text-emerald-700 block">Excelente para o Assaí</span>
            </div>

            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
              <span className="text-[11px] text-amber-800 font-semibold uppercase block">Frequência Mensal</span>
              <span className="text-base font-extrabold text-amber-900">1 Reels por semana</span>
              <span className="text-[10px] text-amber-700 block">Presença contínua e forte</span>
            </div>
          </div>
        </div>

        {/* 3 Negotiation Scenarios */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Cenários de Negociação da Proposta
              </h3>
              <p className="text-xs text-slate-500">
                Selecione o cenário desejado para visualizar a composição de valores e entregáveis.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((scen) => {
              const isSelected = selectedScenario === scen.id;
              return (
                <div
                  key={scen.id}
                  id={`scenario-card-${scen.id}`}
                  onClick={() => setSelectedScenario(scen.id)}
                  className={`rounded-xl p-5 border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50/30 shadow-md ring-2 ring-orange-400/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {scen.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white shadow-xs">
                      Recomendado para o Assaí
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${scen.badgeColor}`}>
                        {scen.badge}
                      </span>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-orange-600 bg-orange-600' : 'border-slate-300'}`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{scen.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{scen.description}</p>

                    <div className="my-4 pt-4 border-t border-slate-100">
                      <div className="text-2xl font-black text-slate-900">
                        {formatCurrency(scen.monthlyFee)}
                        <span className="text-xs font-semibold text-slate-500"> / mês</span>
                      </div>
                      <div className="text-xs font-medium text-slate-600 mt-0.5">
                        Total do Contrato: <strong className="text-slate-900">{formatCurrency(scen.totalContract)}</strong>
                      </div>
                      <div className="text-[11px] text-emerald-700 font-semibold mt-1">
                        Equivale a {formatCurrency(scen.unitCost)} por vídeo Reels
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">Entregáveis:</div>
                      {scen.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Direitos de Imagem:</span> {scen.rights}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule of Monthly Deliverables for Assaí */}
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            Cronograma Estratégico de Entregas (Setembro a Dezembro)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Mês 1 */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black text-orange-700 uppercase tracking-wide">SETEMBRO</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">4 Reels</span>
              </div>
              <p className="text-xs font-bold text-slate-800 mb-1">Lançamento & Economia Familiar</p>
              <ul className="text-[11px] text-slate-600 space-y-1">
                <li>• 1º Tour pelas melhores ofertas da loja</li>
                <li>• Dicas de compra em atacado vs varejo</li>
                <li>• Carrinho econômico da semana</li>
                <li>• Receita prática com produtos Assaí</li>
              </ul>
            </div>

            {/* Mês 2 */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black text-orange-700 uppercase tracking-wide">OUTUBRO</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">4 Reels</span>
              </div>
              <p className="text-xs font-bold text-slate-800 mb-1">Primavera & Dia das Crianças</p>
              <ul className="text-[11px] text-slate-600 space-y-1">
                <li>• Compras especiais Dia das Crianças</li>
                <li>• Alimentos frescos & hortifrúti Assaí</li>
                <li>• Sobremesas econômicas e lanches</li>
                <li>• Ofertas de fim de mês imperdíveis</li>
              </ul>
            </div>

            {/* Mês 3 */}
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black text-orange-700 uppercase tracking-wide">NOVEMBRO</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">4 Reels</span>
              </div>
              <p className="text-xs font-bold text-slate-800 mb-1">Black Friday & Antecipação</p>
              <ul className="text-[11px] text-slate-600 space-y-1">
                <li>• Esquenta Black Friday Assaí</li>
                <li>• Bebidas e itens não perecíveis</li>
                <li>• Compras inteligentes para comerciantes</li>
                <li>• Cobertura do dia oficial da Black Friday</li>
              </ul>
            </div>

            {/* Mês 4 */}
            <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-300">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-black text-amber-800 uppercase tracking-wide">DEZEMBRO</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">4 Reels</span>
              </div>
              <p className="text-xs font-bold text-slate-900 mb-1">Festas de Fim de Ano & Natal</p>
              <ul className="text-[11px] text-slate-700 space-y-1">
                <li>• Ceia de Natal completa e econômica</li>
                <li>• Carnes, panetones e bebidas festivas</li>
                <li>• Preparativos para a virada de ano</li>
                <li>• Retrospectiva de economia no Assaí</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Callout & Direct Summary */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-600 text-white flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-orange-950 uppercase tracking-wider">
                Resumo da Recomendação para o Assaí Atacadista
              </h4>
              <p className="text-xs text-orange-800 mt-0.5">
                Fechamento sugerido: <strong>{formatCurrency(scenarios[1].monthlyFee)}/mês</strong> ({formatCurrency(scenarios[1].totalContract)} no total de 4 meses por 16 Reels).
              </p>
            </div>
          </div>

          <div className="text-xs font-semibold text-orange-900 bg-white px-3.5 py-2 rounded-lg border border-orange-200 shadow-2xs self-stretch sm:self-auto text-center">
            Excelente ROI para 329k de Audiência
          </div>
        </div>

      </div>
    </section>
  );
};
