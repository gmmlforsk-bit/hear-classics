import Link from 'next/link';
import { allUnits } from '@/lib/data';
import { ChevronRight, Clock } from 'lucide-react';

interface UnitTheme {
  text: string;
  stage: string;
  artworkUrl: string;
  artworkTitle: string;
  colorName: string;
}

const unitThemes: Record<number, UnitTheme> = {
  1: {
    text: '入门奠基',
    stage: '感官唤醒',
    artworkUrl: '/images/units/unit-01.jpg',
    artworkTitle: '鲁本斯 · 听觉寓言与古乐器',
    colorName: '玄黑幽林',
  },
  2: {
    text: '音色感知',
    stage: '乐队解构',
    artworkUrl: '/images/units/unit-02.jpg',
    artworkTitle: '德加 · 巴黎歌剧院管弦乐团',
    colorName: '沉木古琴',
  },
  3: {
    text: '语法基础',
    stage: '声音语言',
    artworkUrl: '/images/units/unit-03.jpg',
    artworkTitle: '多梅尼基诺 · 圣塞西莉亚与复调手稿',
    colorName: '手稿墨石',
  },
  4: {
    text: '结构进阶',
    stage: '时间建筑',
    artworkUrl: '/images/units/unit-04.jpg',
    artworkTitle: '帕尼尼 · 万神殿室内声学穹顶',
    colorName: '穹顶午夜',
  },
  5: {
    text: '历史深度',
    stage: '巴洛克盛景',
    artworkUrl: '/images/units/unit-05.jpg',
    artworkTitle: '维米尔 · 音乐课与通奏低音古钢琴',
    colorName: '古殿暗金',
  },
  6: {
    text: '巅峰对决',
    stage: '古典交响',
    artworkUrl: '/images/units/unit-06.jpg',
    artworkTitle: '施米德 · 贝多芬漫步维也纳森林构思',
    colorName: '苍茫林泉',
  },
  7: {
    text: '情感洪流',
    stage: '浪漫狂飙',
    artworkUrl: '/images/units/unit-07.jpg',
    artworkTitle: '西米拉德斯基 · 肖邦沙龙钢琴独奏',
    colorName: '沙龙酒红',
  },
  8: {
    text: '现代探索',
    stage: '光影先锋',
    artworkUrl: '/images/units/unit-08.jpg',
    artworkTitle: '莫奈 · 吉维尼睡莲与色彩光影',
    colorName: '晨雾石墨',
  },
  9: {
    text: '精湛微观',
    stage: '室内密语',
    artworkUrl: '/images/units/unit-09.jpg',
    artworkTitle: '施米德 · 舒伯特之友沙龙室内乐聚会',
    colorName: '室内沉香',
  },
  10: {
    text: '戏剧空间',
    stage: '歌剧舞台',
    artworkUrl: '/images/units/unit-10.jpg',
    artworkTitle: '卡萨特 · 巴黎歌剧院包厢与戏剧灯影',
    colorName: '歌剧猩红',
  },
  11: {
    text: '鉴赏进阶',
    stage: '版本论辩',
    artworkUrl: '/images/units/unit-11.jpg',
    artworkTitle: '历史母带档案 · 指挥家总谱与黑胶唱针',
    colorName: '黑胶刻槽',
  },
  12: {
    text: '独立毕业',
    stage: '自主探索',
    artworkUrl: '/images/units/unit-12.jpg',
    artworkTitle: '维米尔 · 天文学家与宇宙听觉星图',
    colorName: '浩瀚星图',
  },
};

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#121318] text-zinc-300 border border-white/[0.08]">
              12 单元 · 144 节递进大纲
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#121318] text-zinc-400 border border-white/[0.06]">
              100% 完整实装交付
            </span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-white">
            从听见声音，到听懂世界
          </h1>
          <p className="mt-4 text-body text-zinc-400 font-serif leading-relaxed">
            不按枯燥的年代表死记硬背。我们从极具代表性、反差鲜明的经典作品切入，带你一步步攻克乐器音色、织体分层、曲式结构与庞大交响世界。
          </p>
        </div>

        {/* Quick Unit Jump Bar with Ultra-Deep Charcoal Graphite Styling */}
        <div className="mb-10 p-3 rounded-2xl bg-[#08090C] border border-white/[0.06] flex items-center gap-2 overflow-x-auto shadow-xl backdrop-blur-md">
          <span className="text-xs font-mono font-bold text-zinc-400 shrink-0 mr-1 pl-2">
            单元跳转：
          </span>
          {allUnits.map((u, i) => (
            <a
              key={u.id}
              href={`#unit-${u.number}`}
              className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-[#0E0F14] text-zinc-400 hover:text-white hover:bg-[#15161C] border border-white/[0.06] hover:border-white/[0.18] shrink-0 transition-all flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-zinc-500 shrink-0" />
              {romanNumerals[i]}
            </a>
          ))}
        </div>

        {/* Units Showcase */}
        <div className="space-y-12 mb-16">
          {allUnits.map((unit, uIdx) => {
            const theme = unitThemes[unit.number] || unitThemes[1];
            const roman = romanNumerals[uIdx] || String(unit.number);

            return (
              <div
                key={unit.id}
                id={`unit-${unit.number}`}
                className="scroll-mt-24 overflow-hidden rounded-2xl bg-[#07080B] rim-light-bevel transition-all duration-300"
              >
                {/* Artwork Banner Header with Deep Obsidian Vignette & Chiaroscuro */}
                <div className="relative overflow-hidden min-h-[200px] sm:min-h-[240px] p-6 sm:p-8 flex flex-col justify-end text-white">
                  {/* Background Artwork */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 opacity-60 hover:opacity-75"
                    style={{ backgroundImage: `url('${theme.artworkUrl}')` }}
                  />
                  {/* Chiaroscuro Archival Spotlight (明暗交错聚光切面) */}
                  <div className="absolute -top-24 left-1/4 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
                  {/* Ultra-Deep Obsidian Charcoal Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/90 to-[#050608]/40" />

                  <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <span className="font-serif text-5xl sm:text-6xl font-bold leading-none shrink-0 pt-1 select-none text-zinc-500/25">
                        {roman}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider bg-[#101116] text-zinc-300 border-t border-white/15 border-x border-white/[0.06] border-b border-black">
                            {theme.colorName} · {theme.text}
                          </span>
                          <span className="text-xs font-mono text-zinc-400">
                            阶段：{theme.stage} · 共 12 节课
                          </span>
                        </div>
                        <h2 className="heading-serif text-heading-2 text-white drop-shadow-md">
                          第 {unit.number} 单元 · {unit.title}
                        </h2>
                        <p className="mt-1.5 text-xs text-zinc-300 max-w-xl font-serif leading-relaxed line-clamp-2">
                          {unit.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/courses/${unit.id}/${unit.lessons[0].id}/`}
                      className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-[#0E0F14] hover:bg-black text-zinc-200 hover:text-white border-t border-white/20 border-x border-white/[0.08] border-b border-black shadow-[0_12px_28px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all shrink-0 self-start md:self-end hover:border-t-white/40"
                    >
                      从第 1 节开始
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Lesson Grid with Rhythmic Chiaroscuro Catchlights */}
                <div className="p-6 md:p-8 bg-[#06070A]/95 border-t border-white/[0.04]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {unit.lessons.map((lesson) => (
                      <Link
                        key={lesson.id}
                        href={`/courses/${unit.id}/${lesson.id}/`}
                        className="p-4 rounded-xl border-t border-white/10 border-x border-white/[0.04] border-b border-black/90 bg-[#0A0B0E] hover:bg-[#111218] hover:border-t-white/30 transition-all duration-300 group shadow-md hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <div className="flex items-center justify-between text-xs text-zinc-500 mb-2 font-mono">
                          <span className="font-bold text-zinc-300 group-hover:text-white transition-colors">
                            第 {String(lesson.globalNumber).padStart(2, '0')} 节
                          </span>
                          <span className="flex items-center gap-1 text-zinc-500">
                            <Clock className="w-3 h-3 text-zinc-500" />
                            {lesson.standardTime}′
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-base text-zinc-100 group-hover:text-white transition-colors">
                          {lesson.title}
                        </h3>
                        <p className="mt-2 text-xs text-zinc-400 line-clamp-2 font-serif leading-relaxed">
                          {lesson.oneLineGoal}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
