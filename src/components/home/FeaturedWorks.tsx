'use client';

import Link from 'next/link';
import { ChevronRight, Clock, Sparkles } from 'lucide-react';

const featuredWorks = [
  {
    id: 'bach-wtc1-prelude-c',
    title: 'C 大调前奏曲',
    titleOriginal: 'Prelude in C major, BWV 846',
    composer: 'J.S. 巴赫',
    era: '巴洛克',
    duration: '约 2 分钟',
    portraitUrl: '/images/composers/bach.jpg',
    artworkUrl: '/images/hero/bach-manuscript.jpg',
    hook: '整首曲子仅凭右手连续分解和弦流动，旋律藏在每个和弦的顶峰。留意低音在何时停留在长音上。',
    genre: '键盘曲集',
    palette: {
      cardBg: 'bg-[#07080B]',
      border: 'border-white/[0.06] hover:border-white/[0.18]',
      badge: 'bg-[#0D0E13] text-zinc-300 border-white/[0.08]',
      gradient: 'from-[#050608] via-[#050608]/95 to-[#050608]/40',
      glow: 'hover:shadow-[0_24px_50px_rgba(0,0,0,0.98)]',
      accent: 'text-zinc-400',
    },
  },
  {
    id: 'mozart-eine-kleine-k525',
    title: 'G 大调弦乐小夜曲',
    titleOriginal: 'Eine kleine Nachtmusik, K.525',
    composer: '莫扎特',
    era: '古典主义',
    duration: '约 5 分钟 (第1乐章)',
    portraitUrl: '/images/composers/mozart.jpg',
    artworkUrl: '/images/works/mozart-eine-kleine.jpg',
    hook: '开头著名的问答乐句：先拔高冲起，再轻柔回落。请数一数这个充满活力的问答在全曲里出现了几次。',
    genre: '室内乐 / 弦乐合奏',
    palette: {
      cardBg: 'bg-[#07080B]',
      border: 'border-white/[0.06] hover:border-white/[0.18]',
      badge: 'bg-[#0D0E13] text-zinc-300 border-white/[0.08]',
      gradient: 'from-[#050608] via-[#050608]/95 to-[#050608]/40',
      glow: 'hover:shadow-[0_24px_50px_rgba(0,0,0,0.98)]',
      accent: 'text-zinc-400',
    },
  },
  {
    id: 'beethoven-symphony-5',
    title: '第五交响曲“命运”',
    titleOriginal: 'Symphony No. 5 in C minor, Op. 67',
    composer: '贝多芬',
    era: '古典主义 / 浪漫黎明',
    duration: '约 7 分钟 (第1乐章)',
    portraitUrl: '/images/composers/beethoven.jpg',
    artworkUrl: '/images/works/beethoven-symphony-5.jpg',
    hook: '短短短长——这颗四音动机如同击碎一切的铁锤。注意圆号如何把它换成温暖号角，双簧管独奏又如何让它叹息。',
    genre: '交响曲',
    palette: {
      cardBg: 'bg-[#07080B]',
      border: 'border-white/[0.06] hover:border-white/[0.18]',
      badge: 'bg-[#0D0E13] text-zinc-300 border-white/[0.08]',
      gradient: 'from-[#050608] via-[#050608]/95 to-[#050608]/40',
      glow: 'hover:shadow-[0_24px_50px_rgba(0,0,0,0.98)]',
      accent: 'text-zinc-400',
    },
  },
  {
    id: 'debussy-clair-de-lune',
    title: '月光',
    titleOriginal: 'Clair de lune',
    composer: '德彪西',
    era: '印象主义',
    duration: '约 5 分钟',
    portraitUrl: '/images/composers/debussy.jpg',
    artworkUrl: '/images/works/debussy-clair-de-lune.jpg',
    hook: '没有生硬节拍，音符如同月色在水面摇曳。留意中段音量突然变密变亮，随后又悄然归于寂静。',
    genre: '钢琴独奏',
    palette: {
      cardBg: 'bg-[#07080B]',
      border: 'border-white/[0.06] hover:border-white/[0.18]',
      badge: 'bg-[#0D0E13] text-zinc-300 border-white/[0.08]',
      gradient: 'from-[#050608] via-[#050608]/95 to-[#050608]/40',
      glow: 'hover:shadow-[0_24px_50px_rgba(0,0,0,0.98)]',
      accent: 'text-zinc-400',
    },
  },
  {
    id: 'vivaldi-four-seasons-spring',
    title: '《四季·春》第 1 乐章',
    titleOriginal: 'La Primavera, RV 269 (Allegro)',
    composer: '维瓦尔第',
    era: '巴洛克',
    duration: '约 3.5 分钟',
    portraitUrl: '/images/composers/vivaldi.jpg',
    artworkUrl: '/images/works/vivaldi-spring.jpg',
    hook: '利都奈罗结构的典范：全体弦乐大声宣告春天降临，独奏小提琴如鸟鸣啁啾穿插其间。本站可免会员直接听！',
    genre: '小提琴协奏曲',
    palette: {
      cardBg: 'bg-[#07080B]',
      border: 'border-white/[0.06] hover:border-white/[0.18]',
      badge: 'bg-[#0D0E13] text-zinc-300 border-white/[0.08]',
      gradient: 'from-[#050608] via-[#050608]/95 to-[#050608]/40',
      glow: 'hover:shadow-[0_24px_50px_rgba(0,0,0,0.98)]',
      accent: 'text-zinc-400',
    },
  },
  {
    id: 'ravel-bolero',
    title: '波莱罗',
    titleOriginal: 'Boléro',
    composer: '拉威尔',
    era: '二十世纪',
    duration: '约 15 分钟',
    portraitUrl: '/images/composers/ravel.jpg',
    artworkUrl: '/images/works/ravel-bolero.jpg',
    hook: '同一段西班牙舞曲旋律循环了整整17次！唯一的变量是乐器音色从单簧管、大管一路累积到全团轰鸣。',
    genre: '管弦乐舞曲',
    palette: {
      cardBg: 'bg-[#07080B]',
      border: 'border-white/[0.06] hover:border-white/[0.18]',
      badge: 'bg-[#0D0E13] text-zinc-300 border-white/[0.08]',
      gradient: 'from-[#050608] via-[#050608]/95 to-[#050608]/40',
      glow: 'hover:shadow-[0_24px_50px_rgba(0,0,0,0.98)]',
      accent: 'text-zinc-400',
    },
  },
];

export function FeaturedWorks() {
  return (
    <section className="content-area py-16 md:py-24">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-900 dark:text-zinc-300 uppercase">
              Curated Masterworks · 传世经典名作
            </span>
            <span className="text-xs text-zinc-400">·</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">300 部完整知识库精选</span>
          </div>
          <h2 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-zinc-50">
            带上具体的听觉任务，去听传世名作
          </h2>
          <p className="mt-2 text-body text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed font-serif">
            告别“好听但不知道在听什么”。这里的每部作品都附带具象声音锚点，帮你精准锁定乐曲的核心戏剧瞬间。
          </p>
        </div>

        <Link
          href="/works/"
          className="btn-secondary text-xs flex items-center gap-1.5 shrink-0"
        >
          浏览全部 300 部作品库
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid with Rich Thematic Masterwork Color Palettes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredWorks.map((work) => (
          <Link
            key={work.id}
            href={`/works/${work.id}/`}
            className={`group relative overflow-hidden rounded-2xl ${work.palette.cardBg} rim-light-bevel transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between min-h-[340px] p-6 text-white`}
          >
            {/* Background Artwork Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-85"
              style={{ backgroundImage: `url('${work.artworkUrl}')` }}
            />

            {/* Chiaroscuro Vitrine Spotlight Beam (微暖聚光交错) */}
            <div className="absolute -top-12 -left-12 w-52 h-52 bg-white/[0.05] rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            {/* Dark Vignette Scrim with Ultra-Deep Falloff */}
            <div className={`absolute inset-0 bg-gradient-to-t ${work.palette.gradient}`} />

            {/* Top Bar with Composer Portrait & Meta */}
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.12)] shrink-0 bg-zinc-950">
                  <img
                    src={work.portraitUrl}
                    alt={work.composer}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">
                    {work.composer}
                  </div>
                  <span className={`text-[10px] font-mono font-semibold ${work.palette.accent}`}>
                    {work.era}
                  </span>
                </div>
              </div>

              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full backdrop-blur-md border ${work.palette.badge}`}>
                {work.genre}
              </span>
            </div>

            {/* Middle & Bottom Content */}
            <div className="relative z-10 space-y-3 pt-12">
              <div>
                <h3 className="heading-serif font-bold text-xl text-white group-hover:text-zinc-100 transition-colors drop-shadow">
                  {work.title}
                </h3>
                <p className={`text-xs font-serif italic mt-0.5 ${work.palette.accent}`}>
                  {work.titleOriginal}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#06070A]/85 backdrop-blur-md border border-white/[0.08] text-xs text-zinc-300 leading-relaxed font-serif">
                {work.hook}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  {work.duration}
                </span>
                <span className={`group-hover:text-white flex items-center gap-1 font-medium transition-colors font-sans ${work.palette.accent}`}>
                  开始导听
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
