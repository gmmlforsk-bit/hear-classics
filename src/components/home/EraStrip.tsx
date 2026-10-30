'use client';

import Link from 'next/link';
import { ChevronRight, Landmark, Music, Sparkles } from 'lucide-react';

const eras = [
  {
    id: 'medieval',
    name: '中世纪与文艺复兴',
    years: '500 — 1600',
    latin: 'ARS ANTIQUA & RENATA',
    artworkUrl: '/images/eras/medieval.jpg',
    artworkTitle: '修道院石壁圣殿 · 早期复调源流',
    coreAesthetic: '人声圣咏与纯净复调，线条在圣殿与苍穹间漫游，未受小节线束缚的自由呼吸。',
    breakthrough: '单声圣咏演进为多声部合唱对位',
    composers: ['希尔德加德', '马肖', '帕莱斯特里那'],
    landmarkWorks: '《圣母悼歌》《教皇马塞卢斯弥撒》',
  },
  {
    id: 'baroque',
    name: '巴洛克时代',
    years: '1600 — 1750',
    latin: 'BAROCCO & CONCERTO',
    artworkUrl: '/images/eras/baroque.jpg',
    artworkTitle: '卡拉瓦乔式明暗对位 · 乐器竞奏',
    coreAesthetic: '通奏低音、明暗戏剧对比与赋格精密的数学对位之美，协奏曲竞奏形式确立。',
    breakthrough: '大小调体系确立与通奏低音发明',
    composers: ['巴赫', '亨德尔', '维瓦尔第'],
    landmarkWorks: '《马太受难曲》《四季》《水上音乐》',
  },
  {
    id: 'classical',
    name: '古典主义',
    years: '1750 — 1820',
    latin: 'CLASSICISM & SYMPHONIA',
    artworkUrl: '/images/eras/classical.jpg',
    artworkTitle: '维也纳霍夫堡宫廷 · 严谨理性与秩序',
    coreAesthetic: '奏鸣曲式的理性平衡与戏剧张力，乐句清晰的问答呼应，交响乐与室内乐登峰造极。',
    breakthrough: '奏鸣曲式戏剧矛盾与四管管弦乐队成型',
    composers: ['海顿', '莫扎特', '贝多芬'],
    landmarkWorks: '《第五交响曲》《弦乐四重奏Op.76》',
  },
  {
    id: 'romantic',
    name: '浪漫主义狂潮',
    years: '1800 — 1860',
    latin: 'ROMANTICISMO',
    artworkUrl: '/images/eras/romantic.jpg',
    artworkTitle: '弗里德里希 · 雾海上的孤高漫游者',
    coreAesthetic: '个人主观意志的炽烈宣泄，色彩斑斓的标题音乐，英雄悲剧与自然神性的共鸣。',
    breakthrough: '器乐自由抒情与调性色彩边界拓展',
    composers: ['舒伯特', '肖邦', '门德尔松', '舒曼'],
    landmarkWorks: '《冬之旅》《幻想交响曲》《降E大调夜曲》',
  },
  {
    id: 'late-romantic',
    name: '晚期浪漫与民族乐派',
    years: '1850 — 1910',
    latin: 'LATE ROMANTIC & NATIONAL',
    artworkUrl: '/images/eras/late-romantic.jpg',
    artworkTitle: '阿尔卑斯暮光 · 世纪末宇宙交响',
    coreAesthetic: '百人庞大管弦乐队的色彩极致、瓦格纳无终旋律与马勒包罗万象的宇宙悲歌。',
    breakthrough: '无终旋律与超大规模宏大交响思维',
    composers: ['瓦格纳', '勃拉姆斯', '柴可夫斯基', '马勒'],
    landmarkWorks: '《尼伯龙根的指环》《大地之歌》',
  },
  {
    id: 'twentieth',
    name: '印象派与二十世纪',
    years: '1890 — 2000',
    latin: 'MODERNISMO & COLOR',
    artworkUrl: '/images/eras/modern.jpg',
    artworkTitle: '巴黎先锋舞台 · 律动与色彩解构',
    coreAesthetic: '光影音色解构、十二音体系与突破拍号的现代律动，重塑人类对“好听”的定义。',
    breakthrough: '全音阶、复调律动与序列主义诞生',
    composers: ['德彪西', '拉威尔', '斯特拉文斯基', '巴托克'],
    landmarkWorks: '《春之祭》《大海》《波莱罗》',
  },
  {
    id: 'contemporary',
    name: '当代与中国交响',
    years: '1949 — 至今',
    latin: 'CHINESE SYMPHONIC',
    artworkUrl: '/images/eras/contemporary.jpg',
    artworkTitle: '国家大剧院舞台 · 东方诗性交响',
    coreAesthetic: '民族五声旋律与现代西方交响构架的深度融合，《梁祝》《黄河》与时代新声。',
    breakthrough: '五声调式与西方管弦复调的现代交融',
    composers: ['陈钢/何占豪', '冼星海', '谭盾', '陈其钢'],
    landmarkWorks: '《梁祝小提琴协奏曲》《黄河大合唱》',
  },
];

export function EraStrip() {
  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]">
      <div className="content-area">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest text-zinc-900 dark:text-zinc-200 uppercase">
                Historical Continuum · 时代长卷
              </span>
              <span className="text-xs text-zinc-400">·</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">七大断代声学演进全景</span>
            </div>
            <h2 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-white">
              在时代与历史的纵深中，重新听见
            </h2>
            <p className="mt-2 text-body text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-serif">
              音乐从未孤立发生：它与当时的修道院回廊、宫廷礼仪、启蒙思潮与现代工业同频共振。置身于那个时代的真实时空，耳朵能听出美学语法的演变脉络。
            </p>
          </div>

          <Link
            href="/history/"
            className="btn-secondary text-xs flex items-center gap-1.5 shrink-0"
          >
            浏览 24 篇问题驱动史论
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Gallery Cards Grid - 7 Eras with Dignified Dark Obsidian Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eras.map((era) => (
            <Link
              key={era.id}
              href={`/history/?era=${era.id}`}
              className="group relative rounded-2xl overflow-hidden bg-[#090A0E] border border-white/[0.08] hover:border-amber-400/40 rim-light-bevel shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[400px] p-6 text-white"
            >
              {/* Background Local Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-85"
                style={{ backgroundImage: `url('${era.artworkUrl}')` }}
              />

              {/* Obsidian Shadow Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/90 to-[#050608]/50" />

              {/* Top Folio Info */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#101116]/90 text-amber-200/90 border border-amber-500/30 backdrop-blur-md">
                  {era.latin}
                </span>
                <span className="text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                  {era.years}
                </span>
              </div>

              {/* Middle Enriched Details */}
              <div className="relative z-10 space-y-2.5 pt-10 pb-2">
                <div>
                  <span className="text-[11px] font-serif block truncate text-amber-300/80">
                    {era.artworkTitle}
                  </span>
                  <h3 className="heading-serif font-bold text-2xl text-white group-hover:text-amber-100 transition-colors mt-0.5">
                    {era.name}
                  </h3>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-serif line-clamp-2">
                  {era.coreAesthetic}
                </p>

                {/* Composers and Breakthrough */}
                <div className="space-y-1.5 pt-1 text-[11px] font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Music className="w-3 h-3 text-amber-400/80 shrink-0" />
                    <span className="truncate">{era.composers.join(' · ')}</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 truncate">
                    代表作：{era.landmarkWorks}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300 font-mono">
                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors font-sans text-xs">
                  进入时代史论
                </span>
                <span className="group-hover:text-amber-200 flex items-center gap-1 font-medium transition-colors font-sans text-xs">
                  进入长卷
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
