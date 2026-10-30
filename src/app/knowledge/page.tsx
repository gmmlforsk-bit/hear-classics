'use client';

import { useState, useMemo } from 'react';
import { allComposers, allGlossary, allInstruments, allFormGenres } from '@/lib/data';
import { Users, Music, Layers, BookOpen, Search, X, ChevronRight, Sparkles } from 'lucide-react';

const categoryPavilions = [
  {
    id: 'composers',
    title: '传世大师名录',
    latin: 'COMPOSERS ARCHIVE',
    count: '83 位巨匠',
    subtitle: '从中世纪灵性修女到二十世纪现代先锋',
    description: '收录生平节点、独门声音指纹、乐团编制探索及 3 部严选入门之作。',
    artworkUrl: '/images/knowledge/composers.jpg',
    artworkTitle: '门采尔《无忧宫长笛音乐会》· 柏林老国家画廊',
    palette: {
      cardBg: 'bg-[#0A1220]',
      border: 'border-blue-700/50 hover:border-blue-400',
      badge: 'bg-blue-950/80 text-blue-200 border-blue-600/40',
      gradient: 'from-[#080E18] via-[#080E18]/85 to-transparent',
      glow: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]',
      accentColor: 'text-blue-300',
    },
  },
  {
    id: 'instruments',
    title: '管弦乐器全谱',
    latin: 'ORCHESTRAL INSTRUMENTS',
    count: '22 种主力乐器',
    subtitle: '解构现代交响乐团的声学调色板',
    description: '弦乐、木管、铜管与打击乐，详述发音物理机制、声部角色及易混淆音色鉴别。',
    artworkUrl: '/images/knowledge/instruments.jpg',
    artworkTitle: '卡拉瓦乔《音乐家》· 大都会艺术博物馆',
    palette: {
      cardBg: 'bg-[#18110A]',
      border: 'border-amber-700/50 hover:border-amber-400',
      badge: 'bg-amber-950/80 text-amber-200 border-amber-600/40',
      gradient: 'from-[#140D07] via-[#140D07]/85 to-transparent',
      glow: 'hover:shadow-[0_0_35px_rgba(217,119,6,0.35)]',
      accentColor: 'text-amber-300',
    },
  },
  {
    id: 'forms',
    title: '黄金曲式与体裁',
    latin: 'MUSICAL FORMS & GENRES',
    count: '16 种结构范式',
    subtitle: '聆听时间如何在空间中构筑宏伟殿堂',
    description: '奏鸣曲式、复调赋格、变奏曲与交响诗，附结构演进图式与常见认知误区。',
    artworkUrl: '/images/knowledge/forms.jpg',
    artworkTitle: '卡纳莱托《威尼斯大运河》· 建筑声学透视',
    palette: {
      cardBg: 'bg-[#0C1710]',
      border: 'border-[#3C5839]/60 hover:border-[#6CB663]',
      badge: 'bg-[#182617]/90 text-[#B8DFB2] border-[#3F633B]/60',
      gradient: 'from-[#09120C] via-[#09120C]/85 to-transparent',
      glow: 'hover:shadow-[0_0_35px_rgba(74,122,70,0.35)]',
      accentColor: 'text-[#9BD694]',
    },
  },
  {
    id: 'glossary',
    title: '音乐语法词典',
    latin: 'LEXICON & TERMINOLOGY',
    count: '380+ 核心词条',
    subtitle: '意大利语、德语与专业术语的具象听觉指向',
    description: '速度术语、触键表情、调性对位与曲式代号，拒绝死记硬背，重在声音还原。',
    artworkUrl: '/images/knowledge/glossary.jpg',
    artworkTitle: 'J.S. 巴赫《平均律第一卷前奏曲》原始手稿',
    palette: {
      cardBg: 'bg-[#150D1E]',
      border: 'border-purple-700/50 hover:border-purple-400',
      badge: 'bg-purple-950/80 text-purple-200 border-purple-600/40',
      gradient: 'from-[#110A18] via-[#110A18]/85 to-transparent',
      glow: 'hover:shadow-[0_0_35px_rgba(147,51,234,0.35)]',
      accentColor: 'text-purple-300',
    },
  },
];

export default function KnowledgeHubPage() {
  const [activeTab, setActiveTab] = useState<'composers' | 'instruments' | 'forms' | 'glossary'>('composers');
  const [searchQuery, setSearchQuery] = useState('');

  // Specific category filters
  const [composerEraFilter, setComposerEraFilter] = useState<string>('all');
  const [instrumentFamilyFilter, setInstrumentFamilyFilter] = useState<string>('all');
  const [formTypeFilter, setFormTypeFilter] = useState<string>('all');
  const [glossaryCategoryFilter, setGlossaryCategoryFilter] = useState<string>('all');

  // Filter Composers
  const filteredComposers = useMemo(() => {
    return allComposers.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.nameOriginal.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.aliases.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        c.soundCharacteristics.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesEra =
        composerEraFilter === 'all' ||
        c.era.some((e) => e.toLowerCase().includes(composerEraFilter.toLowerCase()));

      return matchesSearch && matchesEra;
    });
  }, [searchQuery, composerEraFilter]);

  // Filter Instruments
  const filteredInstruments = useMemo(() => {
    return allInstruments.filter((inst) => {
      const matchesSearch =
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (inst.nameOriginal && inst.nameOriginal.toLowerCase().includes(searchQuery.toLowerCase())) ||
        inst.timbreDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.role.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFamily =
        instrumentFamilyFilter === 'all' || inst.family === instrumentFamilyFilter;

      return matchesSearch && matchesFamily;
    });
  }, [searchQuery, instrumentFamilyFilter]);

  // Filter Forms
  const filteredForms = useMemo(() => {
    return allFormGenres.filter((fg) => {
      const matchesSearch =
        fg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fg.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (fg.commonMisconception && fg.commonMisconception.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = formTypeFilter === 'all' || fg.type === formTypeFilter;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, formTypeFilter]);

  // Filter Glossary
  const filteredGlossary = useMemo(() => {
    return allGlossary.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (term.termOriginal && term.termOriginal.toLowerCase().includes(searchQuery.toLowerCase())) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.popoverDefinition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        glossaryCategoryFilter === 'all' || term.category === glossaryCategoryFilter;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, glossaryCategoryFilter]);

  const scrollToAnchor = (tabId: 'composers' | 'instruments' | 'forms' | 'glossary') => {
    setActiveTab(tabId);
    const el = document.getElementById('knowledge-content-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="content-area">
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="tag-bordeaux font-bold">古典音乐全景数字图书馆</span>
            <span className="tag-gold font-bold">390+ 词条与人物典藏</span>
          </div>
          <h1 className="heading-serif text-heading-1 md:text-display-2 text-zinc-900 dark:text-zinc-50">
            知识库：人物、器物与语法
          </h1>
          <p className="mt-3 text-body text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
            拒绝孤立无援的生词罗列。每一个条目都清晰解释：在声音中你能听见它造成了什么改变，以及历史上真实的观念演进。
          </p>
        </div>

        {/* SECTION: 4 Grand Curated Exhibition Pavilions with Background Images */}
        <div className="mb-14">
          <div className="text-xs font-mono font-bold tracking-widest text-zinc-900 dark:text-zinc-200 uppercase mb-4">
            ARCHIVAL PAVILIONS · 四大典藏专题展厅
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryPavilions.map((p) => {
              const isSelected = activeTab === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => scrollToAnchor(p.id as typeof activeTab)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer border transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between min-h-[260px] p-6 text-white ${p.palette.cardBg} ${
                    isSelected
                      ? 'border-white ring-2 ring-white/30 shadow-2xl'
                      : p.palette.border
                  } ${p.palette.glow}`}
                >
                  {/* Background Artwork Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-80"
                    style={{ backgroundImage: `url('${p.artworkUrl}')` }}
                  />

                  {/* Vignette Overlay with Pavilion-Specific Color Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${p.palette.gradient}`} />

                  {/* Top Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${p.palette.accentColor}`}>
                        {p.latin}
                      </span>
                      <h3 className="heading-serif font-bold text-2xl text-white group-hover:text-zinc-100 transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold backdrop-blur-md border ${p.palette.badge}`}>
                      {p.count}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 space-y-2 pt-10">
                    <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed line-clamp-2">
                      {p.description}
                    </p>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-zinc-300 font-mono">
                      <span className="text-[11px] text-zinc-400 font-sans">
                        {p.artworkTitle.split('·')[0]}
                      </span>
                      <span className={`group-hover:text-white flex items-center gap-1 font-medium transition-colors font-sans ${p.palette.accentColor}`}>
                        {isSelected ? '当前正在浏览' : '进入展厅浏览'}
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Search Bar */}
        <div id="knowledge-content-anchor" className="relative mb-6 scroll-mt-24">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="搜索任意作曲家、乐器、曲式、意大利语术语（如：巴赫、圆号、奏鸣曲式、Rubato、琶音）..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3.5 rounded-xl border border-zinc-200 dark:border-white/10 bg-white/90 dark:bg-[#121316] text-sm text-zinc-900 dark:text-zinc-100 outline-none focus:border-zinc-400 dark:focus:border-white/40 font-serif shadow-sm backdrop-blur-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-zinc-200 dark:border-white/10 mb-8 overflow-x-auto">
          {[
            { id: 'composers', label: `传世作曲家 (${filteredComposers.length})`, icon: Users },
            { id: 'instruments', label: `管弦乐器 (${filteredInstruments.length})`, icon: Music },
            { id: 'forms', label: `曲式与体裁 (${filteredForms.length})`, icon: Layers },
            { id: 'glossary', label: `音乐语法词典 (${filteredGlossary.length})`, icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-6 py-3.5 text-sm font-serif font-medium border-b-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-zinc-900 dark:border-white text-zinc-950 dark:text-white font-bold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab-specific Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {activeTab === 'composers' && (
            <>
              <span className="text-xs text-zinc-500 font-mono shrink-0">乐派筛选：</span>
              {[
                { id: 'all', label: '全部乐派' },
                { id: 'medieval', label: '中世纪' },
                { id: 'renaissance', label: '文艺复兴' },
                { id: 'baroque', label: '巴洛克' },
                { id: 'classical', label: '古典主义' },
                { id: 'romantic', label: '浪漫主义' },
                { id: 'modern', label: '二十世纪/现代' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setComposerEraFilter(f.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                    composerEraFilter === f.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-transparent font-bold shadow-sm'
                      : 'bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </>
          )}

          {activeTab === 'instruments' && (
            <>
              <span className="text-xs text-zinc-500 font-mono shrink-0">乐器家族：</span>
              {[
                { id: 'all', label: '全部乐器' },
                { id: 'string', label: '弦乐组 (Strings)' },
                { id: 'woodwind', label: '木管组 (Woodwinds)' },
                { id: 'brass', label: '铜管组 (Brass)' },
                { id: 'percussion', label: '打击乐组 (Percussion)' },
                { id: 'keyboard', label: '键盘与色彩 (Keyboards)' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setInstrumentFamilyFilter(f.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                    instrumentFamilyFilter === f.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-transparent font-bold shadow-sm'
                      : 'bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </>
          )}

          {activeTab === 'forms' && (
            <>
              <span className="text-xs text-zinc-500 font-mono shrink-0">类型筛选：</span>
              {[
                { id: 'all', label: '全部' },
                { id: 'form', label: '曲式结构 (Form)' },
                { id: 'genre', label: '器乐体裁 (Genre)' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormTypeFilter(f.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                    formTypeFilter === f.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-transparent font-bold shadow-sm'
                      : 'bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </>
          )}

          {activeTab === 'glossary' && (
            <>
              <span className="text-xs text-zinc-500 font-mono shrink-0">分类索引：</span>
              {[
                { id: 'all', label: '全部分类' },
                { id: 'tempo', label: '速度与表情' },
                { id: 'dynamics', label: '力度变化' },
                { id: 'articulation', label: '发音与触键' },
                { id: 'form', label: '曲式与结构' },
                { id: 'theory', label: '调式与和声' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setGlossaryCategoryFilter(f.id)}
                  className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                    glossaryCategoryFilter === f.id
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 border-transparent font-bold shadow-sm'
                      : 'bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </>
          )}
        </div>

        {/* Tab 1: Composers */}
        {activeTab === 'composers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComposers.map((c) => (
              <div
                key={c.id}
                className="card-museum p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="tag text-[10px]">{c.era.join(', ')}</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {c.birthYear}–{c.deathYear || '今'}
                    </span>
                  </div>
                  <h3 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white">
                    {c.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">{c.nameOriginal}</p>

                  <p className="mt-2.5 text-sm text-zinc-800 dark:text-zinc-200 font-serif font-medium">
                    {c.summary}
                  </p>

                  <div className="mt-3 p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/80 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif">
                    <strong className="text-zinc-900 dark:text-zinc-100">听辨特征：</strong>
                    {c.soundCharacteristics}
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-zinc-200/80 dark:border-white/10 text-xs font-serif">
                  <span className="text-zinc-400 block mb-1.5 font-mono text-[11px]">
                    经典入门入口：
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.entryWorks.slice(0, 3).map((w, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Instruments */}
        {activeTab === 'instruments' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstruments.map((inst) => (
              <div
                key={inst.id}
                className="card-museum p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="tag text-[10px]">{inst.family}</span>
                    <span className="text-xs text-zinc-400 font-mono">{inst.nameOriginal}</span>
                  </div>
                  <h3 className="heading-serif font-bold text-xl text-zinc-900 dark:text-white mb-2">
                    {inst.name}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-serif leading-relaxed">
                    <p>
                      <strong className="text-zinc-900 dark:text-zinc-100">发音与音色：</strong>
                      {inst.timbreDescription}
                    </p>
                    <p>
                      <strong className="text-zinc-900 dark:text-zinc-100">乐团角色：</strong>
                      {inst.role}
                    </p>
                  </div>
                </div>

                {inst.confusedWith && inst.confusedWith.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-300 font-serif">
                    <strong className="text-zinc-900 dark:text-white">易混淆辨析：</strong> {inst.confusedWith[0].howToDistinguish}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Forms & Genres */}
        {activeTab === 'forms' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredForms.map((fg) => (
              <div key={fg.id} className="card-museum p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="tag text-[10px]">
                    {fg.type === 'form' ? '曲式结构 (Form)' : '器乐体裁 (Genre)'}
                  </span>
                </div>
                <h3 className="heading-serif font-bold text-2xl text-zinc-900 dark:text-white">
                  {fg.title}
                </h3>
                <p className="text-body text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif">
                  {fg.definition}
                </p>
                {fg.commonMisconception && (
                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.04] text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 border-l-2 border-zinc-400 dark:border-white/40 font-serif">
                    <strong className="text-zinc-900 dark:text-white">常见误区澄清：</strong> {fg.commonMisconception}
                  </div>
                )}
                {fg.diagramTextVersion && (
                  <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-xs text-zinc-600 dark:text-zinc-300 font-mono border border-zinc-200 dark:border-zinc-800">
                    <strong>结构流向：</strong> {fg.diagramTextVersion}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Glossary */}
        {activeTab === 'glossary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGlossary.map((term) => (
              <div
                key={term.id}
                className="card-museum p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="tag text-[10px]">{term.category}</span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {term.termOriginal}
                    </span>
                  </div>
                  <h4 className="heading-serif font-bold text-lg text-zinc-900 dark:text-white">
                    {term.term}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-serif">
                    {term.definition}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-200/80 dark:border-white/10 text-[11px] text-zinc-600 dark:text-zinc-400 font-serif">
                  <strong className="text-zinc-900 dark:text-zinc-200">实用听觉判断：</strong> {term.popoverDefinition}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
