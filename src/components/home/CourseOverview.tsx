'use client';

import Link from 'next/link';
import { ChevronRight, Clock, Compass, Layers, Music } from 'lucide-react';

const units = [
  {
    number: 1,
    roman: 'I',
    title: '第一次认真听',
    subtitle: '感官唤醒 · 破除乐理神话',
    description: '无需乐理基础，从捕捉声音的第一次显性变化、色彩转折与旋律返回开始。',
    lessons: 12,
    difficulty: '入门奠基',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-01.jpg',
    artworkTitle: '鲁本斯 · 听觉寓言与古乐器',
    composers: ['巴赫', '贝多芬', '维瓦尔第'],
    concepts: ['声音起伏', '对比重复', '动机捕捉'],
  },
  {
    number: 2,
    roman: 'II',
    title: '认识声音与乐队',
    subtitle: '音色解构 · 管弦乐团全景',
    description: '辨认弦乐、木管、铜管与打击乐，追踪旋律在声部间的传递与配器色彩。',
    lessons: 12,
    difficulty: '音色感知',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-02.jpg',
    artworkTitle: '德加 · 巴黎歌剧院管弦乐团',
    composers: ['拉威尔', '柴可夫斯基', '普罗科菲耶夫'],
    concepts: ['弦乐四大家族', '双簧与单簧', '铜管辉煌'],
  },
  {
    number: 3,
    roman: 'III',
    title: '音乐怎样说话',
    subtitle: '语法基础 · 旋律、节奏与织体',
    description: '音高、节奏、呼吸与织体分层——学会用精确的声音事实描述听觉体验。',
    lessons: 12,
    difficulty: '语法基础',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-03.jpg',
    artworkTitle: '多梅尼基诺 · 圣塞西莉亚与复调手稿',
    composers: ['肖邦', '珀塞尔', '舒伯特'],
    concepts: ['主调与复调', '固定低音', '弹性速度'],
  },
  {
    number: 4,
    roman: 'IV',
    title: '听见结构与图景',
    subtitle: '时间建筑 · 奏鸣曲式与变奏',
    description: '从回旋曲、变奏曲到奏鸣曲式，亲手为陌生作品描绘时间草图与空间骨架。',
    lessons: 12,
    difficulty: '结构进阶',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-04.jpg',
    artworkTitle: '帕尼尼 · 万神殿室内声学穹顶',
    composers: ['海顿', '莫扎特', '贝多芬'],
    concepts: ['呈示与展开', '奏鸣曲式', '主题变奏'],
  },
  {
    number: 5,
    roman: 'V',
    title: '早期音乐与巴洛克',
    subtitle: '复调对位 · 巴赫的精密宇宙',
    description: '人声圣咏的空灵、赋格的严密复调、通奏低音与巴赫的宏大复调建筑。',
    lessons: 12,
    difficulty: '历史深度',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-05.jpg',
    artworkTitle: '维米尔 · 音乐课与通奏低音古钢琴',
    composers: ['巴赫', '亨德尔', '蒙特威尔第'],
    concepts: ['赋格对位', '平均律律制', '通奏低音'],
  },
  {
    number: 6,
    roman: 'VI',
    title: '古典主义与贝多芬',
    subtitle: '理性光芒 · 维也纳三大巨匠',
    description: '海顿的机智幽默、莫扎特的歌唱天籁、与贝多芬撕裂命运的革命怒吼。',
    lessons: 12,
    difficulty: '巅峰交响',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-06.jpg',
    artworkTitle: '施米德 · 贝多芬漫步维也纳森林构思',
    composers: ['海顿', '莫扎特', '贝多芬'],
    concepts: ['维也纳古典乐派', '戏剧冲突', '动机交响'],
  },
  {
    number: 7,
    roman: 'VII',
    title: '浪漫主义的多条道路',
    subtitle: '精神探险 · 个人意志的狂飙',
    description: '从舒伯特艺术歌曲到马勒宇宙交响，“浪漫”不仅是抒情更是精神探险。',
    lessons: 12,
    difficulty: '情感洪流',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-07.jpg',
    artworkTitle: '西米拉德斯基 · 肖邦沙龙钢琴独奏',
    composers: ['舒曼', '肖邦', '李斯特'],
    concepts: ['艺术歌曲', '标题交响', '浪漫自由'],
  },
  {
    number: 8,
    roman: 'VIII',
    title: '二十世纪与当代入口',
    subtitle: '光影解构 · 印象主义与先锋',
    description: '德彪西的光影印象、斯特拉文斯基的祭典律动、极简主义与当代中国新声。',
    lessons: 12,
    difficulty: '现代探索',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-08.jpg',
    artworkTitle: '莫奈 · 吉维尼睡莲与色彩光影',
    composers: ['德彪西', '斯特拉文斯基', '巴托克'],
    concepts: ['全音阶音色', '多重节奏', '音块色彩'],
  },
  {
    number: 9,
    roman: 'IX',
    title: '室内乐与独奏深入',
    subtitle: '私密对话 · 智者的微观博弈',
    description: '弦乐四重奏四个智者的私密对话、器乐奏鸣曲的亲密与锋芒。',
    lessons: 12,
    difficulty: '精湛微观',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-09.jpg',
    artworkTitle: '施米德 · 舒伯特之友沙龙室内乐聚会',
    composers: ['舒伯特', '勃拉姆斯', '门德尔松'],
    concepts: ['四重奏对话', '微观声部', '器乐织体'],
  },
  {
    number: 10,
    roman: 'X',
    title: '声乐、歌剧与舞台',
    subtitle: '综合艺术 · 咏叹调与戏剧风暴',
    description: '人声声部特性、咏叹调的戏剧爆发、重唱与歌剧庞大剧情的精密齿轮。',
    lessons: 12,
    difficulty: '戏剧空间',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-10.jpg',
    artworkTitle: '卡萨特 · 巴黎歌剧院包厢与戏剧灯影',
    composers: ['威尔第', '瓦格纳', '普契尼'],
    concepts: ['宣叙与咏叹', '主导动机', '人声戏剧'],
  },
  {
    number: 11,
    roman: 'XI',
    title: '版本比较与独立判断',
    subtitle: '实证鉴赏 · 大师指尖的哲学对决',
    description: '同一部作品在富特文格勒、托斯卡尼尼与本真学派下的截然不同世界。',
    lessons: 12,
    difficulty: '鉴赏进阶',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-11.jpg',
    artworkTitle: '历史母带档案 · 指挥家总谱与黑胶唱针',
    composers: ['富特文格勒', '托斯卡尼尼', '卡拉扬'],
    concepts: ['主观意志派', '客观精准派', '本真演奏'],
  },
  {
    number: 12,
    roman: 'XII',
    title: '建立自己的聆听世界',
    subtitle: '终身伴侣 · 自主构建个人乐单',
    description: '毕业综合项目：独立检索文献、设计个人专属专题乐单与撰写导听手记。',
    lessons: 12,
    difficulty: '独立毕业',
    duration: '360 分钟',
    artworkUrl: '/images/units/unit-12.jpg',
    artworkTitle: '维米尔 · 天文学家与宇宙听觉星图',
    composers: ['马勒', '巴赫', '当代作曲家'],
    concepts: ['个人审美坐标', '文献检索', '导听策展'],
  },
];

export function CourseOverview() {
  return (
    <section className="content-area py-16 md:py-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold tracking-widest text-zinc-900 dark:text-zinc-200 uppercase">
              Curriculum Map · 阶梯课程大纲
            </span>
            <span className="text-xs text-zinc-400">·</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">12 单元 · 144 讲全阶递进</span>
          </div>
          <h2 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-white">
            从初次认真聆听，到建立自己的音乐审美
          </h2>
          <p className="mt-2 text-body text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed font-serif">
            每讲均严格遵循 12 步实证导听：听前定向、声音动作、解构要点、实操问答与课后反思，拒绝空洞玄虚，步步有实证。
          </p>
        </div>

        <Link
          href="/courses/"
          className="btn-secondary text-xs flex items-center gap-1.5 shrink-0"
        >
          查看全部 144 讲总览索引
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid of 12 Units with Dignified Classical Gravitas Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {units.map((unit) => (
          <Link
            key={unit.number}
            href={`/courses/unit-${String(unit.number).padStart(2, '0')}/`}
            className="group relative overflow-hidden rounded-2xl bg-[#090A0E] rim-light-bevel transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[420px] p-6 text-white border border-white/[0.08] hover:border-amber-400/40"
          >
            {/* Background Dedicated Artwork */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-85"
              style={{ backgroundImage: `url('${unit.artworkUrl}')` }}
            />

            {/* Dark Obsidian Scrim Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/90 to-[#050608]/50" />

            {/* Top Bar: Unit Number & Badges */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-serif text-3xl font-bold text-amber-200/90 drop-shadow">
                {unit.roman}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-[#101116]/90 text-amber-200/80 border border-amber-500/30 backdrop-blur-md">
                  {unit.difficulty}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-zinc-400 bg-black/60 border border-white/10 backdrop-blur-md">
                  12 讲
                </span>
              </div>
            </div>

            {/* Middle Section: Enriched Pedagogical Substance */}
            <div className="relative z-10 space-y-3 pt-6 pb-2">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-amber-300/80 uppercase font-semibold block">
                  第 {unit.number} 单元 · {unit.subtitle}
                </span>
                <h3 className="heading-serif font-bold text-xl text-white group-hover:text-amber-100 transition-colors mt-0.5 leading-snug">
                  {unit.title}
                </h3>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-serif line-clamp-2">
                {unit.description}
              </p>

              {/* Representative Composers Row */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 pt-1">
                <Music className="w-3 h-3 text-amber-400/70 shrink-0" />
                <span className="truncate">重点：{unit.composers.join(' · ')}</span>
              </div>

              {/* Key Concept Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {unit.concepts.map((concept, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-zinc-300 border border-white/[0.08]"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info & Action */}
            <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300 font-mono">
              <span className="text-[11px] text-zinc-400 font-serif truncate max-w-[150px]">
                {unit.artworkTitle}
              </span>
              <span className="group-hover:text-amber-200 flex items-center gap-1 font-sans text-xs font-medium transition-colors">
                进入大纲
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
