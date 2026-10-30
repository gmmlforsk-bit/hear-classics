'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allWorks } from '@/lib/data';
import { Search, Clock, ChevronRight, Filter, Sparkles, X } from 'lucide-react';

const eraMap: Record<string, string> = {
  baroque: '巴洛克',
  classical: '古典主义',
  'early-romantic': '早期浪漫',
  romantic: '浪漫主义',
  'late-romantic': '晚期浪漫',
  impressionism: '印象主义',
  '20th-century': '二十世纪',
  'twentieth-century': '二十世纪',
  contemporary: '当代先锋',
  'chinese-symphonic': '中国交响',
};

export default function WorksIndexPage() {
  const [query, setQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [onlyDeep, setOnlyDeep] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(36);

  const filtered = useMemo(() => {
    return allWorks.filter((work) => {
      const matchQuery =
        query === '' ||
        work.title.toLowerCase().includes(query.toLowerCase()) ||
        work.titleOriginal.toLowerCase().includes(query.toLowerCase()) ||
        (work.opusNumber && work.opusNumber.toLowerCase().includes(query.toLowerCase())) ||
        (work.nickname && work.nickname.toLowerCase().includes(query.toLowerCase()));

      const matchEra = selectedEra === 'all' || work.era === selectedEra;
      const matchDeep = !onlyDeep || work.isDeepGuide;

      return matchQuery && matchEra && matchDeep;
    });
  }, [query, selectedEra, onlyDeep]);

  const displayedWorks = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Title */}
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag font-bold">作品导听全景展厅</span>
            <span className="tag font-bold">300 部典藏作品</span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-zinc-50">
            精选名作实证导听
          </h1>
          <p className="mt-3 text-body text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
            拒绝空泛的词藻堆砌。每部作品均提供具体听觉线索、乐章定位、创作语境与可信录音版本。包含 60 部深入剖析导听专论与 240 部标准实证导听。
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="card-museum p-4 md:p-6 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(36);
              }}
              placeholder="按作品名、别名（如'命运'、'梁祝'、'四季'、'春之祭'）、作品编号（如'BWV 846'）搜索…"
              className="w-full pl-10 pr-10 py-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-[#121316] text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-zinc-400 dark:focus:border-white/40 font-serif shadow-sm backdrop-blur-md"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-zinc-200/80 dark:border-white/10">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1 font-medium mr-1 text-xs font-mono">
                <Filter className="w-3.5 h-3.5 text-zinc-400" /> 时代筛选：
              </span>
              {[
                { id: 'all', label: '全部' },
                { id: 'baroque', label: '巴洛克' },
                { id: 'classical', label: '古典' },
                { id: 'romantic', label: '浪漫' },
                { id: 'late-romantic', label: '晚期浪漫' },
                { id: '20th-century', label: '20世纪' },
                { id: 'chinese-symphonic', label: '中国交响' },
              ].map((era) => (
                <button
                  key={era.id}
                  onClick={() => {
                    setSelectedEra(era.id);
                    setVisibleCount(36);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-serif transition-colors ${
                    selectedEra === era.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold shadow-sm'
                      : 'bg-zinc-100 dark:bg-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {era.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setOnlyDeep(!onlyDeep);
                setVisibleCount(36);
              }}
              className={`text-xs font-serif px-3 py-1 rounded-full border transition-all flex items-center gap-1.5 shrink-0 ${
                onlyDeep
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-transparent font-bold'
                  : 'bg-transparent border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              仅看 60 部深度剖析
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-mono">
          <span>
            共筛选出 <strong>{filtered.length}</strong> 部作品（当前显示 {displayedWorks.length} 部）
          </span>
          {visibleCount < filtered.length && (
            <span className="text-zinc-500">
              滚动至底部点击加载更多
            </span>
          )}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedWorks.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}/`}
              className="group card-museum p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <span className="tag text-[10px]">{eraMap[work.era] || work.era}</span>
                  <span className="tag text-[10px]">{work.genre}</span>
                  {work.isDeepGuide && (
                    <span className="tag font-bold text-[10px] bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                      ★ 深入解构
                    </span>
                  )}
                </div>

                <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-white transition-colors">
                  {work.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5 font-serif italic">
                  {work.titleOriginal} {work.opusNumber ? `· ${work.opusNumber}` : ''}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed border-l-2 border-zinc-300 dark:border-zinc-700 pl-3 font-serif">
                  {work.whyListenNow}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  {work.totalDurationRange[0]}–{work.totalDurationRange[1]} 分钟
                </span>
                <span className="group-hover:text-black dark:group-hover:text-white flex items-center gap-1 font-medium transition-colors font-serif">
                  阅读导听
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 36)}
              className="btn-secondary text-xs px-8 py-3"
            >
              加载更多作品 ({filtered.length - visibleCount} 部待载入)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
