'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Volume2, Sparkles, Disc3, Radio } from 'lucide-react';
import Link from 'next/link';
import { VinylTurntable } from '@/components/audio/VinylTurntable';

export function HeroSection() {
  const [playingChord, setPlayingChord] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playInstantChord = async (type: 'debussy' | 'chopin' | 'bach' | 'beethoven') => {
    try {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      setPlayingChord(type);

      let notes: { midi: number; type: OscillatorType; decay: number; gainVal: number; delay: number }[] = [];

      if (type === 'debussy') {
        // 全音阶印象派水波 (C D E F# G# A#)
        [60, 62, 64, 66, 68, 70, 72].forEach((m, idx) => {
          notes.push({ midi: m, type: 'sine', decay: 2.8, gainVal: 0.08, delay: idx * 0.07 });
        });
      } else if (type === 'chopin') {
        // 降E大调夜曲九和弦 (Eb G Bb D F)
        [51, 58, 63, 67, 70, 74].forEach((m, idx) => {
          notes.push({ midi: m, type: 'triangle', decay: 3.2, gainVal: 0.1, delay: idx * 0.09 });
        });
      } else if (type === 'bach') {
        // 巴赫平均律前奏曲琶音纯净大三度
        [48, 55, 60, 64, 67, 72].forEach((m, idx) => {
          notes.push({ midi: m, type: 'triangle', decay: 2.5, gainVal: 0.11, delay: idx * 0.06 });
        });
      } else if (type === 'beethoven') {
        // 贝多芬《英雄》降E大调重奏爆发
        [39, 51, 55, 58, 63, 67, 70, 75].forEach((m) => {
          notes.push({ midi: m, type: 'sawtooth', decay: 1.8, gainVal: 0.06, delay: 0 });
        });
      }

      const now = ctx.currentTime;
      notes.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = n.type;
        osc.frequency.value = 440 * Math.pow(2, (n.midi - 69) / 12);

        const noteStart = now + n.delay;
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.linearRampToValueAtTime(n.gainVal, noteStart + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + n.decay);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(noteStart);
        osc.stop(noteStart + n.decay + 0.05);
      });

      setTimeout(() => {
        setPlayingChord(null);
      }, 3000);
    } catch {
      // Audio fallback gracefully
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-white/[0.06] chiaroscuro-stage">
      {/* Background Dedicated Classical Engraving Watermark */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/hero/hero-engraving.jpg')` }}
      />
      {/* Dramatic Chiaroscuro Stage Overhead Beam (卡拉瓦乔戏剧性舞台聚光) */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-amber-100/[0.12] via-amber-400/[0.03] to-transparent rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_20%,#050608_85%)] pointer-events-none" />

      {/* Editorial Folio Header Line */}
      <div className="content-area mb-8 pb-3.5 border-b border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500 relative z-10">
        <span className="flex items-center gap-2">
          <span className="text-zinc-400 font-bold">VOL. I</span>
          <span>·</span>
          <span>N° 01–144 CANONICAL SYSTEM</span>
        </span>
        <span className="hidden sm:inline tracking-widest uppercase text-zinc-500">
          THE ART OF ATTENTIVE LISTENING · 听见古典
        </span>
        <span className="text-zinc-400 font-medium">
          ARCHIVAL EDITION · 2026
        </span>
      </div>

      <div className="content-area relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Monumental Editorial Monograph */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101116] border border-white/[0.08] text-xs font-mono text-zinc-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
              </span>
              <span className="tracking-widest uppercase text-[10px] font-bold text-zinc-200">
                CANONICAL SYSTEM
              </span>
              <span className="text-zinc-400 font-medium font-serif">
                · 面向中文世界的高维古典档案
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white font-serif leading-[1.08]">
                从听见变化开始，<br />
                <span className="italic font-serif gilded-text font-bold">
                  让结构在耳边显现。
                </span>
              </h1>

              <blockquote className="border-l-2 border-stone-600/60 pl-4 py-2.5 text-sm sm:text-base text-zinc-300 font-serif italic leading-relaxed bg-[#0E0F14] rounded-r-xl border-y border-r border-white/[0.03]">
                “一切乐理与分析，不过是试图解释耳朵早已在瞬间领会的战栗。你不需要先背下五线谱，只需在音乐第一次变幻时，听出它的方向。”
              </blockquote>
            </div>

            {/* Instant Acoustic Preview Palette with Rim-Light Bevel (明暗交错物理棱角切面) */}
            <div className="p-5 rounded-2xl bg-[#090A0D] rim-light-bevel space-y-3.5 backdrop-blur-xl">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span className="flex items-center gap-1.5 text-zinc-200 font-semibold font-serif">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300/80" />
                  听觉调色盘 · 触碰聆听大师和声切片
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400 font-mono border border-white/[0.08]">
                  Web Audio 原生合成
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={() => playInstantChord('debussy')}
                  className={`text-xs p-3 rounded-xl border-t border-white/20 border-x border-white/[0.05] border-b border-black/80 font-sans transition-all flex flex-col items-center justify-center text-center gap-1 shadow-lg hover:border-t-white/40 ${
                    playingChord === 'debussy'
                      ? 'bg-[#121615] text-white border-t-white/50 ring-1 ring-white/20 font-bold'
                      : 'bg-[#080B0A] text-zinc-400 hover:text-zinc-200 hover:bg-[#0D100F]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 opacity-60 text-zinc-400" />
                  <span className="font-bold text-[11px] text-zinc-200">德彪西·大海</span>
                  <span className="text-[9px] opacity-60 font-mono text-zinc-400">全音阶微光</span>
                </button>
                <button
                  onClick={() => playInstantChord('chopin')}
                  className={`text-xs p-3 rounded-xl border-t border-white/20 border-x border-white/[0.05] border-b border-black/80 font-sans transition-all flex flex-col items-center justify-center text-center gap-1 shadow-lg hover:border-t-white/40 ${
                    playingChord === 'chopin'
                      ? 'bg-[#181114] text-white border-t-white/50 ring-1 ring-white/20 font-bold'
                      : 'bg-[#0C080A] text-zinc-400 hover:text-zinc-200 hover:bg-[#120D10]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 opacity-60 text-zinc-400" />
                  <span className="font-bold text-[11px] text-zinc-200">肖邦·夜曲</span>
                  <span className="text-[9px] opacity-60 font-mono text-zinc-400">降E大调抒情</span>
                </button>
                <button
                  onClick={() => playInstantChord('bach')}
                  className={`text-xs p-3 rounded-xl border-t border-white/20 border-x border-white/[0.05] border-b border-black/80 font-sans transition-all flex flex-col items-center justify-center text-center gap-1 shadow-lg hover:border-t-white/40 ${
                    playingChord === 'bach'
                      ? 'bg-[#10141C] text-white border-t-white/50 ring-1 ring-white/20 font-bold'
                      : 'bg-[#07090F] text-zinc-400 hover:text-zinc-200 hover:bg-[#0D1017]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 opacity-60 text-zinc-400" />
                  <span className="font-bold text-[11px] text-zinc-200">巴赫·平均律</span>
                  <span className="text-[9px] opacity-60 font-mono text-zinc-400">纯净大三度</span>
                </button>
                <button
                  onClick={() => playInstantChord('beethoven')}
                  className={`text-xs p-3 rounded-xl border-t border-white/20 border-x border-white/[0.05] border-b border-black/80 font-sans transition-all flex flex-col items-center justify-center text-center gap-1 shadow-lg hover:border-t-white/40 ${
                    playingChord === 'beethoven'
                      ? 'bg-[#16120D] text-white border-t-white/50 ring-1 ring-white/20 font-bold'
                      : 'bg-[#0B0906] text-zinc-400 hover:text-zinc-200 hover:bg-[#110E0A]'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 opacity-60 text-zinc-400" />
                  <span className="font-bold text-[11px] text-zinc-200">贝多芬·英雄</span>
                  <span className="text-[9px] opacity-60 font-mono text-zinc-400">两声雷霆爆发</span>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/courses/unit-01/lesson-01/" className="btn-primary">
                直接开启系统第一课
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/lab/"
                className="btn-secondary flex items-center gap-2"
              >
                <Disc3 className="w-4 h-4 text-zinc-400" />
                声音实验室 (Sound Lab)
              </Link>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
              <span>70万字原创体系</span>
              <span>·</span>
              <span>144 节阶梯大纲</span>
              <span>·</span>
              <span>300 部名作实证导听</span>
            </div>
          </div>

          {/* Right: The Interactive Turntable Console */}
          <div className="lg:col-span-6">
            <VinylTurntable />
            <div className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-400 font-sans">
              ▲ 点击唱机中心播放键或下方段落按钮，感受黑胶旋转与真实小提琴协奏曲的激扬交织
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
