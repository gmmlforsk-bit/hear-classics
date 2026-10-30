'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Menu, X, BookOpen, Clock, Library, User, Disc, Compass, Volume2, Sparkles, Moon, Sun } from 'lucide-react';
import { allWorks, allComposers, allGlossary } from '@/lib/data';

const navItems = [
  { href: '/courses/', label: '系统课程', icon: BookOpen, description: '144节递进大纲' },
  { href: '/works/', label: '作品导听', icon: Library, description: '300部经典导听' },
  { href: '/lab/', label: '声音实验室', icon: Volume2, description: '声学合成实验台' },
  { href: '/recordings/', label: '版本比较', icon: Disc, description: '60组权威录音对决' },
  { href: '/history/', label: '音乐史', icon: Clock, description: '24篇历史专论' },
  { href: '/knowledge/', label: '知识库', icon: Library, description: '作曲家·乐器·体裁·词典' },
  { href: '/courses/routes/', label: '学习路线', icon: Compass, description: '18条策划轨迹' },
  { href: '/my-listening/', label: '我的档案', icon: User, description: '学习进度与记录' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('hear-classics-theme') || localStorage.getItem('hc-color-mode');
    const isDarkMode = stored ? stored === 'dark' : true;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('hear-classics-theme', 'dark');
      localStorage.setItem('hc-color-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('hear-classics-theme', 'light');
      localStorage.setItem('hc-color-mode', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#09090B]/85 backdrop-blur-xl shadow-lg border-b border-zinc-200/80 dark:border-white/[0.08]'
            : 'bg-white/70 dark:bg-[#09090B]/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <nav className="content-area" aria-label="主导航">
          <div className="flex items-center justify-between h-20 py-2">
            {/* Modern Architectural Crest */}
            <Link
              href="/"
              className="flex items-center gap-3.5 text-zinc-900 dark:text-white group transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/15 shadow-md flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors duration-300">
                {/* Acoustic Soundwave Motif */}
                <div className="flex items-center gap-0.5">
                  <span className="w-0.5 h-3 bg-zinc-400 rounded-full" />
                  <span className="w-0.5 h-5 bg-white rounded-full" />
                  <span className="w-0.5 h-6 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="w-0.5 h-4 bg-white rounded-full" />
                  <span className="w-0.5 h-2.5 bg-zinc-400 rounded-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-lg md:text-xl tracking-wider group-hover:text-zinc-200 transition-colors text-zinc-900 dark:text-white">
                    听见古典
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.12] font-semibold uppercase tracking-wider">
                    ARCHIVAL
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-[0.22em] text-zinc-400 uppercase -mt-0.5">
                  HEAR CLASSICS · CANONICAL SYSTEM
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 rounded-full text-xs font-sans font-medium tracking-wide text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.08] transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Actions & Tools */}
            <div className="flex items-center gap-2.5">
              {/* Direct Audio Capsule */}
              <Link
                href="/start/first-listen/"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-white/[0.06] text-zinc-200 border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.25] transition-all shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>免会员首听《春》</span>
              </Link>

              {/* Search ⌘K Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="btn-ghost flex items-center gap-2 px-3 py-2 rounded-full text-xs"
                aria-label="搜索"
              >
                <Search className="w-4 h-4 text-zinc-400" />
                <span className="hidden md:inline font-sans text-zinc-600 dark:text-zinc-300">
                  搜索
                </span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-white/10 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/10">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleDarkMode}
                className="btn-ghost p-2 rounded-full text-xs"
                aria-label="切换阅读主题"
                title={isDark ? '切换到白昼明朗阅读模式' : '切换到舞台暗夜沉浸模式'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-zinc-200" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="xl:hidden btn-ghost p-2"
                aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden border-t border-zinc-200 dark:border-white/10 bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-xl">
            <div className="content-area py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-2xl text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-zinc-900 dark:text-white" />
                      </div>
                      <div>
                        <div className="font-serif font-semibold text-sm">{item.label}</div>
                        <div className="text-xs text-zinc-400 font-mono">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-zinc-200 dark:border-white/10">
                <Link
                  href="/start/first-listen/"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  <Sparkles className="w-4 h-4 text-zinc-300" />
                  免会员首听维瓦尔第《春》
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
}

function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { works: [], terms: [], composers: [] };

    const works = allWorks
      .filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          w.titleOriginal.toLowerCase().includes(q) ||
          (w.opusNumber && w.opusNumber.toLowerCase().includes(q))
      )
      .slice(0, 5);

    const terms = allGlossary
      .filter(
        (t) =>
          t.term.toLowerCase().includes(q) ||
          (t.termOriginal && t.termOriginal.toLowerCase().includes(q))
      )
      .slice(0, 4);

    const composers = allComposers
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.nameOriginal.toLowerCase().includes(q)
      )
      .slice(0, 3);

    return { works, terms, composers };
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
      role="dialog"
      aria-modal="true"
      aria-label="搜索"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Search panel */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#121316] rounded-3xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.1]">
        <div className="flex items-center gap-3 px-6 border-b border-zinc-200 dark:border-white/[0.08]">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索作品、编号（如 BWV 846）、作曲家、术语、体裁…"
            className="flex-1 py-4 bg-transparent text-body text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 outline-none font-sans"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-xs text-zinc-400 px-2 py-1 rounded bg-zinc-100 dark:bg-white/10 hover:text-zinc-900 dark:hover:text-white font-mono"
          >
            ESC
          </button>
        </div>

        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          {!query ? (
            <div className="text-center py-10 text-zinc-400">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 font-serif">
                支持 300 部作品、83 位作曲家、240 个术语与 144 节课程即时检索
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['贝多芬', '巴赫', 'BWV 846', '利都奈罗', '赋格', '春', '命运'].map((sample) => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:text-white hover:bg-zinc-800 dark:hover:bg-white/20 border border-zinc-200 dark:border-white/10 font-sans transition-all"
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {results.works.length === 0 && results.terms.length === 0 && results.composers.length === 0 ? (
                <div className="text-center py-8 text-zinc-400 text-sm font-sans">
                  未找到与「{query}」匹配的内容，可尝试更换关键词或作品编号
                </div>
              ) : (
                <div className="space-y-4">
                  {results.works.length > 0 && (
                    <div>
                      <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-2">
                        作品导听 ({results.works.length})
                      </div>
                      <div className="space-y-1">
                        {results.works.map((w) => (
                          <Link
                            key={w.id}
                            href={`/works/${w.id}/`}
                            onClick={onClose}
                            className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group"
                          >
                            <div>
                              <div className="font-serif font-bold text-sm text-zinc-900 dark:text-white group-hover:text-zinc-500 dark:group-hover:text-zinc-300">
                                {w.title}
                              </div>
                              <div className="text-xs text-zinc-400 font-serif italic">
                                {w.titleOriginal} {w.opusNumber ? `· ${w.opusNumber}` : ''}
                              </div>
                            </div>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-500 dark:text-zinc-400 font-mono">
                              {w.era}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.composers.length > 0 && (
                    <div>
                      <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-2">
                        作曲家档案 ({results.composers.length})
                      </div>
                      <div className="space-y-1">
                        {results.composers.map((c) => (
                          <Link
                            key={c.id}
                            href="/knowledge/"
                            onClick={onClose}
                            className="flex items-center justify-between p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors group"
                          >
                            <div>
                              <div className="font-serif font-bold text-sm text-zinc-900 dark:text-white group-hover:text-zinc-500 dark:group-hover:text-zinc-300">
                                {c.name} ({c.nameOriginal})
                              </div>
                              <div className="text-xs text-zinc-400 line-clamp-1 font-sans">
                                {c.summary}
                              </div>
                            </div>
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                              {c.birthYear}–{c.deathYear || '今'}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {results.terms.length > 0 && (
                    <div>
                      <div className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider mb-2">
                        术语解释 ({results.terms.length})
                      </div>
                      <div className="space-y-1">
                        {results.terms.map((t) => (
                          <div
                            key={t.id}
                            className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-serif font-bold text-sm text-zinc-900 dark:text-white">
                                {t.term} {t.termOriginal ? `(${t.termOriginal})` : ''}
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono font-semibold">{t.category}</span>
                            </div>
                            <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1 font-sans leading-relaxed">
                              {t.definition}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
