'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 dark:border-white/[0.08] mt-24 bg-white dark:bg-[#09090B] text-zinc-900 dark:text-white">
      <div className="content-area py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 text-zinc-900 dark:text-white group">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/20 flex items-center justify-center shadow-lg group-hover:border-white/40 transition-all">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12c3-6 7-6 10 0s7 6 10 0" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl tracking-wide">
                  听见古典
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                  HEAR CLASSICS · ARCHIVAL SYSTEM
                </span>
              </div>
            </Link>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed font-serif">
              从听见变化开始。让古典音乐的结构与色彩，在专注的耳畔自然流淌。全站 144 节阶梯递进课程、300 部名作实证导听、83 位作曲家星系与 24 篇史论。
            </p>
            <div className="text-[11px] font-mono text-zinc-400 pt-2 font-semibold">
              学术标准 · 开放录音 · 纯前端零隐私泄露架构
            </div>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-200 mb-3 tracking-wider uppercase text-xs">
              系统课程
            </h3>
            <ul className="space-y-2 text-xs font-sans text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/courses/unit-01/lesson-01/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  第一课：捕捉最初的变化
                </Link>
              </li>
              <li>
                <Link href="/courses/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  12 个单元课程大纲
                </Link>
              </li>
              <li>
                <Link href="/courses/routes/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  18 条策划学习路线
                </Link>
              </li>
              <li>
                <Link href="/start/first-listen/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  维瓦尔第《春》免会员首听
                </Link>
              </li>
            </ul>
          </div>

          {/* Hall of Works & Lab */}
          <div>
            <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-200 mb-3 tracking-wider uppercase text-xs">
              作品与实验
            </h3>
            <ul className="space-y-2 text-xs font-sans text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/works/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  300 部作品导听库
                </Link>
              </li>
              <li>
                <Link href="/lab/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  声音实验室 (Sound Lab)
                </Link>
              </li>
              <li>
                <Link href="/recordings/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  60 组名版实证对决
                </Link>
              </li>
              <li>
                <Link href="/history/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  24 篇问题驱动史论
                </Link>
              </li>
            </ul>
          </div>

          {/* Knowledge & Records */}
          <div>
            <h3 className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-200 mb-3 tracking-wider uppercase text-xs">
              知识库与笔记
            </h3>
            <ul className="space-y-2 text-xs font-sans text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/knowledge/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  作曲家星系 (83位)
                </Link>
              </li>
              <li>
                <Link href="/knowledge/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  32种乐器与人声展馆
                </Link>
              </li>
              <li>
                <Link href="/knowledge/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  36种曲式与体裁
                </Link>
              </li>
              <li>
                <Link href="/my-listening/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  我的个人聆听记录
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © 2026 《听见古典》 HEAR CLASSICS · OPEN CULTURE PROJECT
          </div>
          <div>
            INSPIRED BY LANDING.LOVE · LAND-BOOK · AWWWARDS · 21ST.DEV
          </div>
        </div>
      </div>
    </footer>
  );
}
