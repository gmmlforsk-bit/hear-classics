'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Headphones, Clock, Sparkles, ChevronRight, Volume2, ShieldCheck, ArrowRight } from 'lucide-react';

const eraWorks = [
  {
    id: 'medieval',
    eraName: '中世纪与文艺复兴',
    eraYears: '500 — 1600',
    title: '圣母颂 · 天籁圣咏',
    titleOriginal: 'Ave Generosa',
    composer: '希尔德加德·冯·宾根',
    composerOriginal: 'Hildegard von Bingen',
    catalog: 'Riesencodex 羊皮纸手稿',
    artworkUrl: '/images/daily/hildegard-manuscript.jpg',
    portraitUrl: '/images/composers/hildegard.jpg',
    observationGoal: '闭上眼睛，感受单声部纯人声圣咏跨越两个八度的飞翔感。没有任何和声伴奏，听声音在修道院石壁间的漫长回荡与灵性升腾。',
    duration: '约 5 分钟',
    lessonLink: '/courses/unit-05/',
    workLink: '/works/',
    featureBadge: '灵性源流 · 单声部到早期复调',
  },
  {
    id: 'baroque',
    eraName: '巴洛克黄金期',
    eraYears: '1600 — 1750',
    title: 'C 大调前奏曲',
    titleOriginal: 'Prelude in C major, BWV 846',
    composer: 'J.S. 巴赫',
    composerOriginal: 'Johann Sebastian Bach',
    catalog: 'BWV 846 · 平均律第一卷',
    artworkUrl: '/images/daily/bach-organ.jpg',
    portraitUrl: '/images/composers/bach.jpg',
    observationGoal: '全曲没有任何传统的歌唱旋律，巴赫只用同一种上行分解和弦流动始终。请留意左手底部的长音在何时变得纠结，又在何时平稳落地？',
    duration: '约 2 分钟',
    lessonLink: '/courses/unit-01/lesson-01/',
    workLink: '/works/bach-wtc1-prelude-c/',
    featureBadge: '数学之美 · 键盘对位奠基之作',
  },
  {
    id: 'classical',
    eraName: '维也纳古典主义',
    eraYears: '1750 — 1820',
    title: 'G 大调弦乐小夜曲',
    titleOriginal: 'Eine kleine Nachtmusik, K. 525',
    composer: 'W.A. 莫扎特',
    composerOriginal: 'Wolfgang Amadeus Mozart',
    catalog: 'K.525 · 第一乐章快板',
    artworkUrl: '/images/daily/mozart-chamber.jpg',
    portraitUrl: '/images/composers/mozart.jpg',
    observationGoal: '注意开头极具标志性的问答乐句：拔高冲起后轻柔回落。请数一数这颗充满活力的核心问答动机在整首乐曲中以不同调性返回了几次。',
    duration: '约 5.5 分钟',
    lessonLink: '/courses/unit-01/lesson-05/',
    workLink: '/works/mozart-eine-kleine-k525/',
    featureBadge: '理性与天籁 · 奏鸣曲式黄金范式',
  },
  {
    id: 'romantic',
    eraName: '浪漫主义狂飙',
    eraYears: '1800 — 1860',
    title: '第五交响曲“命运”',
    titleOriginal: 'Symphony No. 5 in C minor, Op. 67',
    composer: '路德维希·凡·贝多芬',
    composerOriginal: 'Ludwig van Beethoven',
    catalog: 'Op.67 · 第一乐章有活力的快板',
    artworkUrl: '/images/daily/beethoven-orchestra.jpg',
    portraitUrl: '/images/composers/beethoven.jpg',
    observationGoal: '“三短一长”的命运动机在 6 秒内两次猛烈敲门。紧接着，注意这四个音符如何在弦乐各声部之间如野火燎原般层层传递。',
    duration: '约 7.5 分钟',
    lessonLink: '/courses/unit-04/lesson-43/',
    workLink: '/works/beethoven-symphony-5/',
    featureBadge: '英雄意志 · 动机撕裂命运交响',
  },
  {
    id: 'late-romantic',
    eraName: '晚期浪漫与世纪末',
    eraYears: '1850 — 1910',
    title: '第一交响曲“巨人”· 猎人的送葬',
    titleOriginal: 'Symphony No. 1 in D major "Titan"',
    composer: '古斯塔夫·马勒',
    composerOriginal: 'Gustav Mahler',
    catalog: '第三乐章 · 庄严送葬行列',
    artworkUrl: '/images/daily/mahler-mountain.jpg',
    portraitUrl: '/images/composers/mahler.jpg',
    observationGoal: '听定音鼓沉闷敲击下，独奏低音提琴拉出怪诞的四度小调童谣《两只老虎》。随后犹太民间克列兹默唢呐与大镲粗俗地切入，形成黑色幽默。',
    duration: '约 10 分钟',
    lessonLink: '/courses/unit-07/lesson-79/',
    workLink: '/works/mahler-symphony-1-titan/',
    featureBadge: '宏大叙事 · 讽刺送葬与宇宙悲歌',
  },
  {
    id: 'modern',
    eraName: '印象派与二十世纪',
    eraYears: '1890 — 2000',
    title: '月光 · 贝加莫组曲',
    titleOriginal: 'Clair de lune (Suite bergamasque)',
    composer: '克洛德·德彪西',
    composerOriginal: 'Claude Debussy',
    catalog: 'L.75 · 第三乐章极柔和的行板',
    artworkUrl: '/images/daily/debussy-nocturne.jpg',
    portraitUrl: '/images/composers/debussy.jpg',
    observationGoal: '注意全曲开篇如同水波折射月光的琶音泛音，调性不再急于解决，而是停留在空气的微光中。听听音乐在何时出现第一次微风掠过的涟漪？',
    duration: '约 5 分钟',
    lessonLink: '/courses/unit-01/lesson-08/',
    workLink: '/works/debussy-clair-de-lune/',
    featureBadge: '光影解构 · 印象主义色彩诗篇',
  },
  {
    id: 'contemporary',
    eraName: '当代与中国交响',
    eraYears: '1949 — 至今',
    title: '梁祝小提琴协奏曲 · 草桥结拜',
    titleOriginal: 'The Butterfly Lovers Violin Concerto',
    composer: '何占豪 / 陈钢',
    composerOriginal: 'He Zhanhao / Chen Gang',
    catalog: '引子与纯美爱情主题',
    artworkUrl: '/images/daily/contemporary-acoustic.jpg',
    portraitUrl: '/images/composers/chinese.jpg',
    observationGoal: '长笛在春意盎然的竖琴滑音中吹出鸟鸣，独奏小提琴随之拉出越剧唱腔移植的五声性柔美主题，大提琴温柔倾听对答。',
    duration: '约 6 分钟',
    lessonLink: '/courses/unit-08/lesson-95/',
    workLink: '/works/',
    featureBadge: '东方诗性 · 民族五声交响典范',
  },
];

export function TodayListening() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(1); // Default Baroque
  const currentWork = eraWorks[selectedEraIndex];

  return (
    <section className="content-area py-6 md:py-10">
      {/* 7-Era Epoch Selector Bar with Dignified Museum Dark Palette */}
      <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider shrink-0 mr-1 pl-1">
          穿梭历史纪元：
        </span>
        {eraWorks.map((item, idx) => {
          const isSelected = selectedEraIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedEraIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                isSelected
                  ? 'bg-[#181922] text-amber-200 font-bold border border-amber-500/40 shadow-md ring-1 ring-amber-500/20'
                  : 'bg-white/[0.04] text-zinc-400 border border-white/[0.08] hover:border-white/20 hover:text-zinc-200'
              }`}
            >
              <span>{item.eraName.split('与')[0]}</span>
              <span className={`text-[10px] ${isSelected ? 'text-amber-300/80 font-mono' : 'text-zinc-500'}`}>
                {item.eraYears.split('—')[0].trim()}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Epoch Showcase Card with Chiaroscuro Rim-Light & Authentic Artwork */}
      <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#090A0E] rim-light-bevel shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-300">
        {/* Background Artwork */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-20"
          style={{ backgroundImage: `url('${currentWork.artworkUrl}')` }}
        />
        {/* Deep Vignette Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/75 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Composer Portrait Arch */}
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start lg:items-center text-center">
            <div className="relative w-36 h-48 rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-zinc-900 group">
              <img
                src={currentWork.portraitUrl}
                alt={currentWork.composer}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-zinc-300 truncate">
                {currentWork.composerOriginal}
              </div>
            </div>
            <div className="mt-3.5 space-y-0.5">
              <span className="text-xs font-mono font-bold text-amber-200/90">
                {currentWork.eraName}
              </span>
              <div className="text-[11px] text-zinc-400 font-mono">
                {currentWork.eraYears}
              </div>
            </div>
          </div>

          {/* Middle: Work Editorial Details */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full font-bold bg-[#14151C] text-amber-200/90 border border-amber-500/30 backdrop-blur-md">
                {currentWork.featureBadge}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                {currentWork.catalog}
              </span>
            </div>

            <div>
              <h2 className="heading-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold">
                {currentWork.composer} · 《{currentWork.title}》
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-serif italic mt-1">
                {currentWork.titleOriginal}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] border-l-2 border-l-amber-400/80 space-y-1.5 shadow-sm">
              <div className="text-xs font-bold flex items-center gap-1.5 font-mono text-amber-200/90">
                <Sparkles className="w-3.5 h-3.5 text-amber-300/80" />
                耳朵的核心听觉追踪指令：
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-serif">
                {currentWork.observationGoal}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Clock className="w-3.5 h-3.5" />
                标准导听用时：{currentWork.duration}
              </span>
              <span>·</span>
              <span className="text-zinc-400">带任务导听 · 拒绝被动走神</span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <Link
              href={currentWork.lessonLink}
              className="btn-primary justify-center text-center py-3.5 text-sm"
            >
              <Headphones className="w-4 h-4" />
              开启对应课程实操
            </Link>
            <Link
              href={currentWork.workLink}
              className="btn-secondary justify-center text-center py-3 text-xs"
            >
              进入作品全景知识卡
            </Link>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-400 space-y-1">
              <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                实证声音事实检验已就绪
              </div>
              <div className="text-[10px] text-zinc-400">
                无需五线谱识谱，以真实听觉感知切片为准
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
