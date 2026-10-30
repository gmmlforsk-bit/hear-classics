'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Sparkles, Sprout, Headphones, ShieldCheck, Eye, Layers } from 'lucide-react';

export default function ThemePreviewPage() {
  const [selectedScheme, setSelectedScheme] = useState<'1' | '2' | '3'>('1');
  const [appliedNotice, setAppliedNotice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hear-classics-theme');
      if (saved === 'walnut') {
        setSelectedScheme('2');
      } else {
        setSelectedScheme('1');
      }
    }
  }, []);

  const applySchemeToDOM = (scheme: '1' | '2' | '3') => {
    setSelectedScheme(scheme);
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('theme-salon');

    if (scheme === '2') {
      root.classList.add('theme-walnut');
      localStorage.setItem('hear-classics-theme', 'walnut');
    } else {
      root.classList.remove('theme-walnut');
      localStorage.setItem('hear-classics-theme', 'obsidian');
    }

    setAppliedNotice(true);
    setTimeout(() => setAppliedNotice(false), 2500);
  };

  return (
    <div className="min-h-screen py-10 md:py-16 bg-[#050608] text-white">
      <div className="content-area max-w-5xl">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-400 hover:text-white mb-6 transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回网站首页
        </Link>

        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#14151C] text-zinc-300 border border-white/[0.08]">
              <Eye className="w-3.5 h-3.5" />
              极深炭素黑灰方案对比展厅
            </span>
            <span className="text-xs text-zinc-500 font-mono">
              纯黑沉静 · 拒绝浅浮 · 极度深邃
            </span>
          </div>

          <h1 className="heading-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            深邃与厚重：特别深沉的黑灰美学
          </h1>
          <p className="mt-3 text-body text-zinc-400 font-serif leading-relaxed">
            全面剔除一切浅淡、轻佻与苍白的亮色。全站采用特别深沉的黑曜玄炭、古董深木炭黑与冷石墨质感，打造宛如顶级黑胶录音室与古董乐器馆的凝重沉浸感。
          </p>
        </div>

        {/* 3 Ultra-Deep Schemes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Scheme 1 */}
          <button
            onClick={() => applySchemeToDOM('1')}
            className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${
              selectedScheme === '1'
                ? 'border-white/30 bg-[#090A0D] text-white shadow-2xl ring-2 ring-white/20'
                : 'border-white/[0.06] bg-[#07080B] hover:border-white/[0.14]'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/[0.08] text-zinc-300 border border-white/[0.08]">
                SCHEME 01 · 纯粹玄黑
              </span>
              {selectedScheme === '1' && (
                <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              )}
            </div>
            <h3 className="font-serif font-bold text-lg text-white">
              方案一：极深黑曜玄炭
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-serif leading-relaxed">
              <strong>极深黑曜玄空（#050608）</strong> + 炭素银灰文字。特别深特别沉静，杜绝任何浅白浮躁，建筑级克制。
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#050608] border border-white/20" title="极深底色" />
              <span className="w-4 h-4 rounded-full bg-[#101116]" title="炭黑卡片" />
              <span className="w-4 h-4 rounded-full bg-[#E5E5E7]" title="纯净钛骨字" />
              <span className="w-4 h-4 rounded-full bg-[#1C201C]" title="极暗林绿" />
            </div>
          </button>

          {/* Scheme 2 */}
          <button
            onClick={() => applySchemeToDOM('2')}
            className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${
              selectedScheme === '2'
                ? 'border-amber-600/40 bg-[#0D0B0A] text-white shadow-2xl ring-2 ring-amber-500/30'
                : 'border-white/[0.06] bg-[#07080B] hover:border-amber-500/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-950/40 text-amber-300 border border-amber-800/40">
                SCHEME 02 · 沉木暗炭
              </span>
              {selectedScheme === '2' && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              )}
            </div>
            <h3 className="font-serif font-bold text-lg text-white">
              方案二：古董胡桃木暗炭夜
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-serif leading-relaxed">
              <strong>老胡桃木深炭黑（#0C0A09）</strong> + 暗金色微光。极深、温润、厚重，如同一百年老音乐厅实木大琴身。
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#0C0A09] border border-amber-900/30" title="深木底色" />
              <span className="w-4 h-4 rounded-full bg-[#161210]" title="沉木暗卡" />
              <span className="w-4 h-4 rounded-full bg-[#E5E0D8]" title="暖字" />
              <span className="w-4 h-4 rounded-full bg-[#8E7245]" title="哑金微光" />
            </div>
          </button>

          {/* Scheme 3 */}
          <button
            onClick={() => applySchemeToDOM('3')}
            className={`p-5 rounded-2xl border text-left transition-all relative overflow-hidden ${
              selectedScheme === '3'
                ? 'border-blue-600/40 bg-[#08090C] text-white shadow-2xl ring-2 ring-blue-500/30'
                : 'border-white/[0.06] bg-[#07080B] hover:border-blue-500/20'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-800/40">
                SCHEME 03 · 冷峻石墨
              </span>
              {selectedScheme === '3' && (
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
              )}
            </div>
            <h3 className="font-serif font-bold text-lg text-white">
              方案三：午夜大教堂冷石墨
            </h3>
            <p className="text-xs text-zinc-400 mt-1 font-serif leading-relaxed">
              <strong>午夜石墨黑（#08090C）</strong> + 钢质暗藏青。大教堂玄武岩冷峻声学质感，肃穆而高阶。
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#08090C] border border-blue-900/30" title="石墨底色" />
              <span className="w-4 h-4 rounded-full bg-[#101218]" title="暗蓝黑卡" />
              <span className="w-4 h-4 rounded-full bg-[#DCE4EC]" title="冷光字" />
              <span className="w-4 h-4 rounded-full bg-[#526B88]" title="冷铁青" />
            </div>
          </button>
        </div>

        {appliedNotice && (
          <div className="mb-8 p-4 rounded-xl bg-white/[0.08] border border-white/[0.15] text-zinc-200 text-sm font-medium flex items-center gap-2 animate-fade-in font-sans">
            <Check className="w-4 h-4 text-emerald-400" />
            已将极深黑灰方案应用至全站！您浏览全站将保持此纯粹沉穆的厚重质感。
          </div>
        )}

        {/* Live Specimen Exhibits Showcase */}
        <div className="space-y-12">
          {/* EXHIBIT 1: The Vivaldi Spring Olive Green Player Specimen */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2 border-white/[0.08]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                  EXHIBIT 01 · 核心组件呈现
                </span>
                <h2 className="heading-serif font-bold text-xl sm:text-2xl text-white mt-0.5">
                  《四季·春》深沉暗林橄榄黑胶席
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400 font-semibold">
                深沉古树墨绿 · 绝无轻佻亮色
              </span>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#070A07] text-white border border-[#162215] shadow-2xl relative overflow-hidden backdrop-blur-2xl">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/20 shrink-0 bg-[#050705] shadow-lg">
                    <img
                      src="/images/composers/vivaldi.jpg"
                      alt="维瓦尔第"
                      className="w-full h-full object-cover object-top opacity-80"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#111A11] text-[#A6C4A3] border border-[#223522]">
                        <Sprout className="w-3 h-3 text-[#649261]" />
                        实证原版录音 · 沉稳暗橄榄绿展厅
                      </span>
                    </div>
                    <h3 className="heading-serif font-bold text-lg sm:text-xl text-white mt-1">
                      维瓦尔第：E大调小提琴协奏曲《春》RV 269 第一乐章
                    </h3>
                    <p className="text-xs text-zinc-400 font-serif italic mt-0.5">
                      独奏: John Harrison · 指挥: Robert Turizziani · Wichita State Players
                    </p>
                  </div>
                </div>

                <Link
                  href="/start/first-listen/"
                  className="px-6 py-3 rounded-full bg-[#111411] hover:bg-black text-zinc-200 hover:text-white border border-[#2A3E2A] text-xs font-semibold shrink-0 shadow-lg transition-all"
                >
                  进入播放席
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
