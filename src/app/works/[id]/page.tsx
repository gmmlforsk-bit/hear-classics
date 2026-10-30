import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allWorks } from '@/lib/data';
import { Headphones, ExternalLink, ArrowLeft, Clock, Eye, Sparkles, Sprout, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return allWorks.map((work) => ({
    id: work.id,
  }));
}

const eraBadgeStyles: Record<string, string> = {
  '巴洛克': 'bg-[#1C160F] text-[#D8C29D] border-[#3D2F1B]',
  '古典主义': 'bg-[#131A24] text-[#B8CADB] border-[#253549]',
  '浪漫主义': 'bg-[#1E1117] text-[#DAB7C2] border-[#3E212E]',
  '20世纪/现代': 'bg-[#121E1B] text-[#B6D1CB] border-[#253A35]',
};

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = allWorks.find((w) => w.id === params.id);
  if (!work) notFound();

  const eraStyle = eraBadgeStyles[work.era] || 'bg-zinc-100 dark:bg-white/[0.06] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-white/[0.08]';

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Back Link */}
        <Link
          href="/works/"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 hover:text-black dark:hover:text-white mb-8 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回典藏作品库
        </Link>

        {/* Header Block */}
        <div className="max-w-reading mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${eraStyle}`}>
              {work.era}
            </span>
            <span className="tag text-xs font-mono">
              {work.genre}
            </span>
            {work.isDeepGuide && (
              <span className="tag font-bold text-xs bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                ★ 深入解构专论
              </span>
            )}
          </div>

          <h1 className="heading-serif font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight">
            {work.title}
          </h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2 font-serif italic">
            {work.titleOriginal} {work.opusNumber ? `· ${work.opusNumber}` : ''}
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 p-4 rounded-2xl bg-white dark:bg-[#121316] text-xs font-mono border border-zinc-200 dark:border-white/[0.08] shadow-sm">
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider">编制</span>
              <span className="font-serif font-bold text-zinc-900 dark:text-zinc-100 text-sm mt-0.5 block">{work.instrumentation}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider">创作年份</span>
              <span className="font-serif font-bold text-zinc-900 dark:text-zinc-100 text-sm mt-0.5 block">{work.compositionYear || '约作于成熟期'}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider">完整时长</span>
              <span className="font-serif font-bold text-zinc-900 dark:text-zinc-100 text-sm mt-0.5 block">{work.totalDurationRange[0]}–{work.totalDurationRange[1]} 分钟</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase font-bold tracking-wider">乐章数</span>
              <span className="font-serif font-bold text-zinc-900 dark:text-zinc-100 text-sm mt-0.5 block">{work.movements.length} 个乐章</span>
            </div>
          </div>
        </div>

        {/* Specialized Olive Green Showcase Banner for Vivaldi Spring */}
        {(work.id.includes('spring') || work.id.includes('vivaldi')) && (
          <div className="mb-10 p-6 rounded-3xl bg-[#0D150E] border border-[#233522] flex flex-col sm:flex-row items-center justify-between gap-5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.7)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2A4228]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#142015] text-[#B5CCB0] border border-[#2B422A]">
                  <Sprout className="w-3 h-3 text-[#6E9E69]" />
                  官方正版完整录音 · 橄榄绿四季电声播放席
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                无需跳转外部 App，即可开始实证分步聆听
              </h3>
              <p className="text-xs text-[#9BB796] mt-1 font-serif">
                独奏 John Harrison · Wichita State Players 权威定版录音已直接在线装载。
              </p>
            </div>
            <Link
              href="/start/first-listen/"
              className="relative z-10 px-6 py-3 rounded-full bg-stone-900/95 hover:bg-black text-[#D6E8D4] border border-[#3E5F3B] hover:border-[#5B8557] text-xs font-semibold shrink-0 flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.6)] transition-all font-sans"
            >
              进入橄榄绿播放席
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Content Layout */}
        <div className="lg:flex lg:gap-12">
          {/* Main Article */}
          <article className="flex-1 max-w-reading space-y-10">
            {/* Why Listen Now */}
            <section className="card-museum p-6 md:p-8 space-y-3 border border-zinc-200 dark:border-white/[0.08]">
              <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
                为什么在这个阶段听
              </h2>
              <p className="drop-cap-illuminated text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif text-sm sm:text-base">
                {work.whyListenNow}
              </p>
            </section>

            {/* Listening Tasks */}
            <section className="p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-white/[0.1] bg-zinc-50 dark:bg-white/[0.03] space-y-5">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-zinc-500 dark:text-zinc-300" />
                <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
                  阶梯式聆听观察任务
                </h2>
              </div>
              <div>
                <h3 className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-1.5">第一遍：纯粹观察（不带预设）</h3>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 font-serif leading-relaxed">{work.listeningTaskFirst}</p>
              </div>
              <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
                <h3 className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-1.5">第二遍：捕捉结构与细节</h3>
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 font-serif leading-relaxed">{work.listeningTaskSecond}</p>
              </div>
              {work.listeningTaskDeep && (
                <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
                  <h3 className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-1.5">深入听：版本比较与大师辨析</h3>
                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 font-serif leading-relaxed">{work.listeningTaskDeep}</p>
                </div>
              )}
            </section>

            {/* Aural Events */}
            <section className="space-y-4">
              <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
                具体听觉事件锚点
              </h2>
              <div className="space-y-4">
                {work.auralEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-[#121316] shadow-sm hover:border-zinc-400 dark:hover:border-white/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono font-medium mb-1">
                      <span>事件 {idx + 1}</span>
                      <span>·</span>
                      <span>{evt.timeAnchor.eventDescription}</span>
                    </div>
                    <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-white">
                      {evt.description}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
                      <strong className="text-zinc-900 dark:text-zinc-100 font-sans">观察要点：</strong>{evt.whatToNotice}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Structure Diagram */}
            {work.structureDiagram && (
              <section className="space-y-3">
                <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
                  结构导图（{work.structureDiagram.label}）
                </h2>
                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.08] space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {work.structureDiagram.sections.map((sec, i) => (
                      <div
                        key={i}
                        className="px-3 py-2 rounded-lg text-xs font-mono font-medium border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-sm"
                      >
                        {sec.name}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-serif leading-relaxed">
                    {work.structureDiagram.textAlternative}
                  </p>
                </div>
              </section>
            )}

            {/* Historical Context */}
            <section className="card-museum p-6 md:p-8 space-y-3 border border-zinc-200 dark:border-white/[0.08]">
              <h2 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
                历史语境与真实考证
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif text-sm sm:text-base">
                {work.historicalContext}
              </p>
            </section>
          </article>

          {/* Sidebar: Listening Actions */}
          <aside className="lg:w-80 shrink-0 space-y-6 mt-8 lg:mt-0">
            <div className="card-museum p-6 space-y-4 border border-zinc-200 dark:border-white/[0.08] sticky top-24">
              <h3 className="heading-serif font-bold text-lg text-zinc-900 dark:text-white">
                典藏录音检索
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-serif leading-relaxed">
                点击下方按钮可在官方流媒体音乐平台搜索对应权威定版录音：
              </p>

              <button className="btn-primary w-full py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 shadow-lg">
                <Headphones className="w-4 h-4" />
                在 Apple Music 搜索
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <div className="pt-4 border-t border-zinc-200 dark:border-white/[0.08]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  推荐权威首选录音
                </span>
                <span className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 block leading-relaxed break-words">
                  {work.defaultRecordingId}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
