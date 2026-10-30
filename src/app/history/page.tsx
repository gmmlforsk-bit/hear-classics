'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allHistoryArticles } from '@/lib/data';
import { Clock, BookOpen, Compass, ChevronRight, HelpCircle, Headphones, Sparkles } from 'lucide-react';

export default function HistoryPage() {
  const [selectedEra, setSelectedEra] = useState<string>('all');

  const filteredArticles = allHistoryArticles.filter((art) => {
    if (selectedEra === 'all') return true;
    return art.era.some((e) => e.toLowerCase().includes(selectedEra.toLowerCase()));
  });

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area max-w-4xl">
        {/* Header Monograph Title */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="tag font-bold">
              24 篇核心历史专论
            </span>
            <span className="text-xs text-zinc-400 font-mono tracking-wider">
              QUESTION-DRIVEN HISTORIOGRAPHY
            </span>
          </div>
          <h1 className="heading-serif font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight">
            音乐史：历史问题驱动的声音演进
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl font-serif text-sm sm:text-base leading-relaxed">
            不背诵枯燥的生卒年编年史。每一篇都从一个深刻的社会变迁、机械技术、印刷媒介或艺术体制问题切入，带你听出历史在声音中留下的深痕。
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono">
          {[
            { id: 'all', label: '全部时期 (24)' },
            { id: '早期', label: '早期与巴洛克' },
            { id: '古典', label: '古典主义' },
            { id: '浪漫', label: '浪漫主义' },
            { id: '二十', label: '二十世纪与当代' },
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setSelectedEra(pill.id)}
              className={`px-4 py-2 rounded-xl border transition-all shrink-0 font-medium ${
                selectedEra === pill.id
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-transparent shadow-md font-bold'
                  : 'bg-white dark:bg-[#121316] border-zinc-200 dark:border-white/[0.08] text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/30'
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* History Articles Feed */}
        <div className="space-y-8">
          {filteredArticles.map((art, idx) => {
            const isBaroque = art.era.some((e) => e.includes('巴洛克') || e.includes('早期'));
            const isClassical = art.era.some((e) => e.includes('古典'));
            const isRomantic = art.era.some((e) => e.includes('浪漫'));
            const isModern = art.era.some((e) => e.includes('二十') || e.includes('当代'));

            const cardStyle = isBaroque
              ? 'bg-[#14110C] border-[#382B1C] hover:border-[#5C452C] shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8)]'
              : isClassical
              ? 'bg-[#0E131C] border-[#222E42] hover:border-[#3A4E6E] shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8)]'
              : isRomantic
              ? 'bg-[#150D12] border-[#381F2C] hover:border-[#5E3349] shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8)]'
              : 'bg-[#0E1514] border-[#213531] hover:border-[#385952] shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8)]';

            const accentColor = isBaroque
              ? 'text-[#C5A771]'
              : isClassical
              ? 'text-[#A0B5CC]'
              : isRomantic
              ? 'text-[#C69EA9]'
              : 'text-[#9DBAB3]';

            const badgeStyle = isBaroque
              ? 'bg-[#1D170E] text-[#D8C29D] border-[#3D2F1B]'
              : isClassical
              ? 'bg-[#141C27] text-[#B8CADB] border-[#253549]'
              : isRomantic
              ? 'bg-[#1F1219] text-[#DAB7C2] border-[#3E212E]'
              : 'bg-[#131F1C] text-[#B6D1CB] border-[#253A35]';

            return (
              <article
                key={art.id}
                className={`p-6 md:p-8 space-y-5 rounded-3xl border transition-all duration-300 shadow-xl ${cardStyle}`}
              >
                {/* Meta strip */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${badgeStyle}`}>
                      {art.era.join(' / ')}
                    </span>
                    <span className={accentColor}>约 {art.yearRange[0]}–{art.yearRange[1]} 年</span>
                  </div>
                  <span className={`font-bold font-mono ${accentColor}`}>
                    ESSAY #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h2 className="heading-serif font-bold text-2xl text-white leading-snug">
                  {art.title}
                </h2>

                {/* Historical Question Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border-l-2 border-current text-zinc-200 space-y-1.5 shadow-sm" style={{ borderColor: 'currentColor' }}>
                  <div className={`text-xs font-mono font-bold flex items-center gap-1.5 uppercase tracking-wider ${accentColor}`}>
                    <HelpCircle className="w-4 h-4" />
                    历史驱动核心发问 (Core Historiographical Question)：
                  </div>
                  <p className="text-sm sm:text-base font-serif font-medium leading-relaxed text-zinc-100">
                    {art.historicalQuestion}
                  </p>
                </div>

                {/* Article Content with Illuminated Drop Cap (点 61) */}
                <div className="text-sm sm:text-base text-zinc-200 leading-relaxed font-serif whitespace-pre-line space-y-3 drop-cap-illuminated">
                  {art.content}
                </div>

                {/* Footnote: What to hear & linked work */}
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
                  <div className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed flex items-start gap-2.5">
                    <Headphones className={`w-4 h-4 shrink-0 mt-0.5 ${accentColor}`} />
                    <div>
                      <strong className="text-white font-sans">声音里去听什么：</strong>
                      <span className="ml-1 text-zinc-200">{art.whatToHear}</span>
                    </div>
                  </div>

                  {art.relatedWorkIds.length > 0 && (
                    <div className="pt-2.5 border-t border-white/10 flex justify-end">
                      <Link
                        href={`/works/${art.relatedWorkIds[0]}/`}
                        className={`text-xs hover:text-white font-mono flex items-center gap-1 font-bold transition-colors ${accentColor}`}
                      >
                        前往该时期关联代表作导听
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
