'use client';

import { useState } from 'react';
import Link from 'next/link';
import { allComparisons } from '@/lib/data';
import { Disc, Search, ShieldCheck, Sliders, Eye, EyeOff, ChevronRight } from 'lucide-react';

export default function RecordingsIndexPage() {
  const [selectedId, setSelectedId] = useState<string>(allComparisons[0]?.id || '');
  const [isBlindMode, setIsBlindMode] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allComparisons.filter(
    (c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.workId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.recordingIds.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const currentComp = allComparisons.find((c) => c.id === selectedId) || allComparisons[0];

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Title */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag font-bold">实证版本学实验室</span>
            <span className="tag font-bold">60 组权威对决</span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-zinc-50">
            录音比较：听见演绎的千姿百态
          </h1>
          <p className="mt-3 text-body text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
            作品是蓝图，演出是事件，录音是档案。这里汇聚了古典音乐唱片史上最著名的 60 组神级对决——从速度鸿沟、古乐本真与现代交响之争，到双盲听辨训练，助你建立独立审美品味。
          </p>
        </div>

        {/* Global Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#121316] border border-zinc-200 dark:border-white/[0.08] mb-8 backdrop-blur-md shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="搜索曲目或指挥（如：贝五、马五、克莱伯、加德纳）..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-800 text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-zinc-400 dark:focus:border-white/40 font-serif"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBlindMode(!isBlindMode)}
              className={`btn-secondary text-xs px-4 py-2 flex items-center gap-2 transition-all ${
                isBlindMode ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold' : ''
              }`}
            >
              {isBlindMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{isBlindMode ? '已开启双盲听辨模式' : '开启双盲盲听测试'}</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Comparative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: List of 60 Comparisons (4 cols) */}
          <div className="lg:col-span-4 space-y-3 max-h-[85vh] overflow-y-auto pr-1">
            <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-widest px-2 mb-2">
              60 组录音对比目录 ({filtered.length})
            </div>
            {filtered.map((c) => {
              const isSelected = c.id === currentComp?.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-zinc-100 dark:bg-white/[0.08] border-zinc-400 dark:border-white/30 shadow-md'
                      : 'bg-white dark:bg-[#121316] border-zinc-200/80 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                    <span>{c.workId}</span>
                    <span className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                      <Disc className="w-3 h-3" />
                      {c.recordingIds.length} 个版本
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-1">
                    {c.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="line-clamp-1 text-[11px]">
                      {c.comparisonPoints.length} 个核心听辨维度
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Comparative Analysis (8 cols) */}
          <div className="lg:col-span-8">
            {currentComp ? (
              <div className="card-museum p-6 md:p-8 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="tag text-[11px]">档案编号：{currentComp.id}</span>
                    <span className="tag bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 flex items-center gap-1 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> 真实声学核验
                    </span>
                  </div>
                  <h2 className="heading-serif text-heading-2 text-zinc-900 dark:text-zinc-50">
                    {currentComp.title}
                  </h2>
                </div>

                {/* Blind Mode Notice */}
                {isBlindMode && (
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-white/[0.04] border-l-2 border-zinc-400 dark:border-white/40 text-sm text-zinc-800 dark:text-zinc-200 flex items-center justify-between font-serif">
                    <div>
                      <strong>双盲考核进行中：</strong>
                      版本名称与大师光环已隐藏。请先在你的音乐播放器中调取录音，纯靠双耳比对，再点击揭晓谜底！
                    </div>
                    <button
                      onClick={() => toggleReveal(currentComp.id)}
                      className="btn-secondary text-xs py-1 px-3 ml-3 shrink-0"
                    >
                      {revealedIds[currentComp.id] ? '重新隐藏' : '揭晓大师身份'}
                    </button>
                  </div>
                )}

                {/* Comparative Matrix Cards */}
                <div className="space-y-4">
                  <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-zinc-500" />
                    多维度横向声学听辨矩阵
                  </h3>

                  {currentComp.comparisonPoints.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/80 dark:border-white/[0.08] space-y-3"
                    >
                      <span className="font-bold text-sm text-zinc-900 dark:text-zinc-200 block font-serif">
                        维度 {pIdx + 1}：{pt.aspect}
                      </span>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {pt.observations.map((obs, oIdx) => {
                          const isHidden = isBlindMode && !revealedIds[currentComp.id];
                          // If blind mode is on, hide the conductor's name before colon
                          const displayObservation = isHidden
                            ? obs.observation.replace(/^[^：:]+[：:]/, '此版本：')
                            : obs.observation;

                          return (
                            <div
                              key={oIdx}
                              className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-white/[0.08] text-sm flex flex-col justify-between font-serif"
                            >
                              <div className="space-y-2">
                                <span className="tag text-[10px] block w-fit font-mono font-medium">
                                  {isHidden ? `神秘版本 ${String.fromCharCode(65 + oIdx)}` : `版本 ${oIdx + 1} (${obs.recordingId})`}
                                </span>
                                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-xs sm:text-sm">
                                  {displayObservation}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                {currentComp.conclusion && (
                  <div className="p-4 rounded-xl bg-zinc-100 dark:bg-white/[0.04] border border-zinc-200 dark:border-white/[0.08] space-y-1">
                    <div className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">
                      策展综合评析与选盘指引
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-serif leading-relaxed">
                      {currentComp.conclusion}
                    </p>
                  </div>
                )}

                {/* Footer Jumper to Work Guide */}
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.08] flex items-center justify-between">
                  <div className="text-xs font-serif text-zinc-600 dark:text-zinc-300">
                    想在完整乐曲中验证以上听辨点？阅读该作品的全乐章结构解构
                  </div>
                  <Link
                    href={`/works/${currentComp.workId}/`}
                    className="btn-primary text-xs flex items-center gap-1.5 shrink-0"
                  >
                    前往作品导听
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="card-museum p-12 text-center text-zinc-500 font-serif">
                请从左侧选择需要对比鉴赏的录音组
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
